// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Router from "vue-router";

Vue.use(ElementUI);
Vue.config.productionTip = false


router.beforeEach((to,form,next)=>{
  //判断如果isLogin为false进入登陆页面，如果isLogin为true进入首页
  // localStorage.removeItem("isLogin");
  // console.log(localStorage.getItem("isLogin"));
  if(to.meta.isLogin){
    if(localStorage.getItem("isLogin")){
      next()
    }else{
      // console.log("您还没有登录");
      next({
        path: "/login"//指向为你的登录界面
      });
    }
  }else{
    next()
  }
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


