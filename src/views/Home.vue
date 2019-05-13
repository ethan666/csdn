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
            'card',
            {rules: [{ required: true, message: '请输入您购买得到的卡密' }]}
          ]"
          placeholder="请输入您购买得到的卡密"
        />
      </a-form-item>
      <a-form-item
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
      >
        <a-input
          v-decorator="[
            'link',
            {rules: [{ required: true, message: '请输入您要下载的CSDN链接' }]}
          ]"
          placeholder="请输入您要下载的CSDN链接"
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
const formItemLayout = {
  labelCol: { span: 0 },
  wrapperCol: { span: 24 },
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 24 },
};

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
  methods: {
    check  () {
      this.form.validateFields(
        (err) => {
          if (!err) {
            console.info('success');
          }
        },
      );
    },
    handleChange  (e) {
      this.checkNick = e.target.checked;
      this.$nextTick(() => {
        this.form.validateFields(['nickname'], { force: true });
      });
    },
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


