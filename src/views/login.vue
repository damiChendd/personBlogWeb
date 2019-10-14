<template>
    <!--登录页面，由islogin来判断是否登入显示-->
  <div class="loginPage">
    <h3>登录</h3>
    <el-card shadow="always">
      <el-form autoComplete="on"
               :model="loginForm"
               :rules="loginRules"
               ref="loginForm"
               label-position="left">
      <h2 class="login-title color-main">mall-admin-web</h2>
      <el-form-item prop="username">
        <el-input name="username"
                  type="text"
                  v-model="loginForm.username"
                  autoComplete="on"
                  placeholder="请输入用户名">
          <span slot="prefix">名：</span>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input name="password"
                  :type="pwdType"
                  v-model="loginForm.password"
                  autoComplete="on"
                  placeholder="请输入密码">
          <span slot="prefix">码：</span>
          <!--<span slot="suffix">-->
            <!--<svg-icon icon-class="eye" class="color-main"></svg-icon>-->
          <!--</span>-->
        </el-input>
      </el-form-item>
      <el-form-item style="margin-bottom: 60px">
        <el-button style="width: 100%" type="primary" :loading="loading" @click="handleLogin">
          登录
        </el-button>
      </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
    export default {
        name: "login",
      data(){
        return {
          loginForm: {
            username: 'admin',
            password: '123456'
          },
          loginRules: {
            username: [{required: true, trigger: 'blur'}],
            password: [{required: true, trigger: 'blur'}]
          },
          loading: false,
          pwdType: 'password',
          isLogin:true
        }
      },
      methods:{
        //用户点击登陆后将isLogin设置为true，通知路由显示index页面
        handleLogin(){
          // // console.log("点击登陆");
          // localStorage.setItem('isLogin',this.isLogin);
          // // console.log("跳转开始");
          // this.$router.push({path:'/',name:'index'} )
          // // console.log("跳转结束")



        //  请求login接口，如果成功，点击跳转
          console.log("发起请求开始");
          this.axios.post('http://localhost:80/api/login',{
            name:this.loginForm.username,
            password:this.loginForm.password
          }).then(function (response) {
            console.log(response);
          }).catch(function (error) {
            console.log(error);
          })

          console.log("发起请求结束");

        }
      }
    }
</script>

<style scoped>
  .loginPage{
    display: flex;
    justify-content: center;
  }
</style>
