<template>
  <!--博客列表-->
  <div class="rightPage">
    <!--筛选（时间、标题、类别）-->

    <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="name"
      label="博客名称"
      width="180">
    </el-table-column>
    <el-table-column
      prop="date"
      label="创建时间"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="博客内容">
    </el-table-column>
  </el-table>
  </div>

</template>

<script>
    export default {
        name: "blogList",
      data() {
        return {
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
        }
      },
    }
</script>

<style scoped>
  .rightPage{
    border: 1px solid #eeeeee;
    padding: 20px;
    margin-top: 20px
  }
</style>
