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
  </div>
</template>

<script>
import axios from 'axios'
import { historyDown, checkDownloadComplete, getFileUrl, activate } from '../request.js'
import { fileServer } from '../env.js'
import { setTimeout } from 'timers';
import store from '../store.js'

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
    };
  },
  computed: {
    loading: {
      set: function(value){
        store.setLoading(value)
      },
      get: function(){
        return store.state.loading
      }
    }
  },
  methods: {
    check  () {
      const _this = this
      this.form.validateFields(
        (err, values) => {
          if (!err) {
            _this.loading = true
            historyDown(values)
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
                _this.loading = false
              })
          }
        },
      );
    },
    checkFilePrepared(){
      const _this = this
      checkDownloadComplete({resourceId})
        .then(response=>{
          const { data } = response;
          let message;
          switch (data.code) {
            case 0:
              //轮询
              setTimeout(this.checkFilePrepared, 1000)
              break;
            case 1:
             this.getFileUrl();
              break;
            case 2:
              message = '发生异常，请稍后再试'
              break;
            case 3:
              message = '有版权问题'
              break;
            case 4:
              message = '网址不存在'
              break;
            default:
              break;
          }
          if(message){
            this.$message.info(message)
          }
        })

    },
    getFileUrl(){
      const _this = this
      getFileUrl(resourceId)
        .then(response => {
          //开始下载文件
          _this.loading = false
          window.location = response.data;
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


