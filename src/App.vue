<template>
  <div id="app">
    <div class="containor">
      <router-view/>
      <div id="nav">                   
        <router-link to="/course">查看使用教程</router-link>
        <router-link to="/history">历史订单提取</router-link>
        <router-link to="/">返回首页</router-link>
        <a href="http://wpa.qq.com/msgrd?v=1&amp;uin=7589848&amp;site=qq&amp;menu=yes" target="_blank">技术支持</a>
      </div>
    </div>
    <div v-if="loading" class="loading-box">
      <a-spin size='large'/>
    </div>
  </div>
</template>

<script>
import store from './store.js'

export default {
  data(){
    return {
       loading: store.state.loading
    }
  },
  computed:{
    // loading(){
    //   return store.state.loading;
    // }
  }
}
</script>


<style>
#app{
  width: 100%;
  height: 100%;
}

.containor {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width:570px;
  height: 370px;
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #fff;
  margin: 0 20px;
}

#nav a:hover{
  color: #edea48;
}

#nav a.router-link-exact-active {
  color: #edea48;
}

.loading-box{
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  /* z-index: 1; */
}
</style>
