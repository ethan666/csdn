<template>
  <div class="home">
    <h1 class="title">自助下载</h1>
    <a-form :form="form">
      <a-form-item
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
      >
        <a-input
          v-decorator="[
            'code',
            {rules: [{ required: true, message: '请输入已使用的卡密下载历史的文件' }]}
          ]"
          placeholder="请输入已使用的卡密下载历史的文件"
          :defalutValue="code"
        />
      </a-form-item>
      <a-form-item
        :label-col="formTailLayout.labelCol"
        :wrapper-col="formTailLayout.wrapperCol"
      >
        <a-button
          class="btn"
          type="primary"
          @click="check"
        >
          下载
        </a-button>
      </a-form-item>
    </a-form>
    <div class="info1">
      <p>不限积分下载，一个卡密仅可下载一个CSDN资源 </p>
      <p>注：一次不能同时下载多个CSDN资源 </p>
    </div>
    <a-span v-if="loading" size='large'/>
  </div>
</template>

<script>
import axios from 'axios'
import { sendRequest, historyReq, checkFile, downloadFile } from '../request.js'
import { fileServer } from '../env.js'
import { code } from '../global.js'
import { setTimeout } from 'timers';

const formItemLayout = {
  labelCol: { span: 0 },
  wrapperCol: { span: 24 },
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 24 },
};

let resourceId

export default {
  name: 'home',
  data () {
    return {
      checkNick: false,
      formItemLayout,
      formTailLayout,
      form: this.$form.createForm(this),
      code,
      loading: false,
    };
  },
  methods: {
    check  () {
      const _this = this
      this.form.validateFields(
        (err, values) => {
          if (!err) {
            _this.loading = true
            sendRequest(historyReq, values)
              .then(response=>{
                const {data} = response
                let message;
                switch (data.code) {
                  case 0:
                    message='卡密验证成功，下载中！'
                    resourceId=data.data.resourceid
                    setTimeout(this.checkFilePrepared, 10000)
                    break;
                  case 1:
                    message='激活码不存在'
                    _this.loading = false
                    break;
                  case 2:
                    message='激活码未使用'
                    _this.loading = false
                    break;
                  default:
                    break;
                }
                if(message){
                  this.$message.info(message)
                }
              })
              .catch(error=>{
                this.$message.info(error.message)
              })
          }
        },
      );
    },
    checkFilePrepared(){
      const _this = this
      sendRequest(checkFile, {resourceId})
        .then(response=>{
          const { data } = response;
          if(data.code !== 1){
            //轮询
            setTimeout(this.checkFilePrepared, 1000)
          }else{
            //开始下载文件
            _this.loading = false
            window.location = fileServer + downloadFile + '/' + resourceId;
          }
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.title{
  color:#fff;
}

.btn{
  width: 100%;
}

.info1{
  text-align: left;
}
</style>


