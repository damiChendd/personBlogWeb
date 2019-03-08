import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login'
import index from '@/views/index'
import introMyself from '@/views/introMyself'
import blogList from '@/views/blogList'
import HelloWorld from '@/components/HelloWorld'
import writeBlog from "../views/writeBlog";

Vue.use(Router)

// const router = export default new Router({
export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login,
      meta:{
        isLogin:false
      }
    },
    {
      path: '/',
      name: 'index',
      component: index,
      meta:{
        isLogin:true
      }
    },
    {
      path: '/helloWord',
      name: 'HelloWorld',
      component: HelloWorld,
      meta:{
        isLogin:true
      }
    },
    {
      path: '/introMyself',
      name: 'introMyself',
      component: introMyself,
      meta:{
        isLogin:true
      }
    },
    {
      path: '/blogList',
      name: 'blogList',
      component: blogList,
      meta:{
        isLogin:true
      }
    },
    {
      path: '/writeBlog',
      name: 'writeBlog',
      component: writeBlog,
      meta:{
        isLogin:true
      }
    },
  ]
})

