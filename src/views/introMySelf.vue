<template>
  <div class="rightPage">
    <div class="title">
      <p>Myself</p>
      <p>天将降大任于斯人也，必先苦其心志，劳其筋骨，饿其体肤</p>
    </div>
    <!--part1-->
    <div class="part">
      <div class="num">1</div>
    </div>
    <div class="part">
      <img src="../../static/img/pic1.jpg" alt="" width="80px" height="80px">
      <img src="../../static/img/pic2.jpeg" alt="" width="80px" height="80px">
      <img src="../../static/img/pic3.jpg" alt="" width="80px" height="80px">
    </div>
    <!--part2-->
    <div class="part">
      <div class="num">2</div>
    </div>
    <div class="part">
      <img src="../../static/img/pic1.jpg" alt="" width="80px" height="80px">
      <img src="../../static/img/pic2.jpeg" alt="" width="80px" height="80px">
      <img src="../../static/img/pic3.jpg" alt="" width="80px" height="80px">
    </div>


  </div>
</template>

<script>
    export default {
        name: "introMySelf"
    }
</script>

<style scoped>
  .rightPage{
    border: 1px solid #eeeeee;
    padding: 20px;
    margin-top: 20px
  }
  .part{
    display: flex;
    justify-content: center;
  }
  .num{
    width: 20px;
    height: 20px;
    /*padding: 4px;*/
    text-align: center;
    line-height: 20px;
    background-color: #e6a23c;
  }
</style>
