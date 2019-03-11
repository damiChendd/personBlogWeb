<template>
  <div class="rightPage">
    <p>首页</p>
    <el-row :gutter="20"  type="flex">
      <el-col :span="5" :offset="1" class="box">博客总数</el-col>
      <el-col :span="6" :offset="1" class="box">博客类别总数</el-col>
      <el-col :span="6" :offset="1" class="box">博客评价总数</el-col>
      <el-col :span="6" :offset="1" class="box">stars</el-col>
    </el-row>
    <p>
      活动区域
    </p>
    <div class="pic">
      折线图
    </div>
  </div>
</template>

<script>
    export default {
        name: "index",
        // components:{sliderBar}
    }
</script>

<style scoped>
  .rightPage{
    border: 1px solid #eeeeee;
    padding: 20px;
    margin-top: 20px
  }
  .box{
    /*border: 1px solid #eeeeee;*/
    background-color: #eeeeee;
    height: 80px;
    text-align: center;
    line-height: 80px;
    /*margin: 10px;*/
  }
  .pic{
    width: 100%;
    height: 180px;
    border: 1px solid #eeeeee;
  }
</style>
