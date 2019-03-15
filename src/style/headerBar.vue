<template>
    <div class="headerStyle">
      <!--左边logo-->
      <div class="header-left">
        <div>
          <img src="../../static/img/pic2.jpeg" alt="" width="50px" height="50px">
        </div>
      </div>
      <!--右边退出按钮-->
      <div>陈丹的个人博客</div>
      <div class="header-right">
        退出
      </div>
    </div>
</template>

<script>
    export default {
        name: "headerBar"
    }
</script>

<style scoped>
  .headerStyle{
    /*background-color: #eeeeee;*/
    /*background-color: whitesmoke;*/
    width: 100%;
    height: 60px;
  }
  .header-left{
    float: left;
    margin-top: 5px;
    /*margin-left: 150px;*/
    margin-left: calc(10% - 40px);
  }
  .header-right{
    float: right;
    line-height: 60px;
    margin-right: 10px;
  }
</style>
