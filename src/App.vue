<template>
  <div id="app">
    <router-view/>
    <div id="nav">                   
      <router-link to="/course">查看使用教程</router-link>
      <router-link to="/hisorder">历史订单提取</router-link>
      <router-link to="/">返回首页</router-link>
      <router-link to="/support">技术支持</router-link>
    </div>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #fff;
  margin: 0 20px;
}

#nav a.router-link-exact-active {
  color: #edea48;
}
</style>
