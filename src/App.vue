<template>
  <div id="app">
    <div v-show="isLogin">
      <headerBar></headerBar>
    </div>
    <div class="content">
      <div class="left" v-show="isLogin">
        <sliderBar></sliderBar>
      </div>
      <div class="right">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
  import   headerBar from "./style/headerBar"
  import   sliderBar from "./style/sliderBar"
export default {
  name: 'App',
  components:{sliderBar,headerBar},
  data(){
    return{
      isLogin:''
    }
  },
  mounted() {
    this.getIsLogin()
  },
  // created(){
  //   console.log("进入赋值");
  //   this.getIsLogin()
  // },
  updated(){
    this.getIsLogin()
  },
  methods:{
    getIsLogin(){
      this.isLogin = localStorage.getItem('isLogin')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
  .content{
    display: flex;
  }
  .left{
    width: 20%;
    min-width: 45px;
    margin-right: 20px;
    /*height: 300px;*/
    /*background-color: pink;*/
  }
  .right{
    width: 100%;
  }
</style>
