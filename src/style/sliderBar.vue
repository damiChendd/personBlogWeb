<template>
  <!--<el-row >-->
    <el-col :span="24">
      <p>博客导航</p>
      <el-menu
        default-active="6"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose">
        <router-link to="/">
          <el-menu-item index="1">
            <i class="el-icon-setting"></i>
            <span slot="title">博客首页</span>
          </el-menu-item>
        </router-link>

        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>博客列表</span>
          </template>
          <!--<el-menu-item-group>-->
            <!--<template slot="title">分组一</template>-->
            <!--<el-menu-item index="1-1">选项1</el-menu-item>-->
            <!--<el-menu-item index="1-2">选项2</el-menu-item>-->
          <!--</el-menu-item-group>-->
          <router-link to="blogList">
            <el-menu-item index="2-1">列表</el-menu-item>
          </router-link>
          <router-link to="writeBlog">
            <el-menu-item index="2-2">添加</el-menu-item>
          </router-link>
        </el-submenu>
        <el-submenu index="3">
          <!--<i class="el-icon-menu"></i>-->
          <!--<span slot="title">博客分类</span>-->
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>博客分类</span>
          </template>
          <el-menu-item-group>
            <!--<template slot="title">分组一</template>-->
            <!--<el-menu-item index="1-1">选项1</el-menu-item>-->
            <!--<el-menu-item index="1-2">选项2</el-menu-item>-->
          <!--</el-menu-item-group>-->
          <!--<el-menu-item-group>-->
            <!--<template slot="title">分组二</template>-->
            <!---->
          <!--</el-menu-item-group>-->
              <el-menu-item index="1-1">html(3)</el-menu-item>
              <el-menu-item index="1-2">css(2)</el-menu-item>
              <el-menu-item index="1-2">javascript(5)</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="4">
          <i class="el-icon-document"></i>
          <span slot="title">博客评价</span>
        </el-menu-item>

        <router-link to="introMyself">
          <el-menu-item index="5">
            <i class="el-icon-setting"></i>
            <span slot="title">自我介绍</span>
          </el-menu-item>
        </router-link>
      </el-menu>
    </el-col>
  <!--</el-row>-->

</template>

<script>
    export default {
        name: "slider",
        methods: {
          handleOpen(key, keyPath) {
            console.log(key, keyPath);
          },
          handleClose(key, keyPath) {
            console.log(key, keyPath);
          }
        }
    }

</script>

<style scoped>

</style>
