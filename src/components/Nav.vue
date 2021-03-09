<template>
  <el-menu default-active="2" class="el-menu-vertical" :router="true" 
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
    <el-menu-item index="0"
      ><img src="../assets/logo.png" style="height: 24px" /> VUE Demo
    </el-menu-item>
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>导航一</span>
      </template>
      <el-menu-item index="/">Home</el-menu-item>
      <el-menu-item index="data">Data</el-menu-item>
      <el-menu-item index="hello">Hello</el-menu-item>
    </el-submenu>
    <el-menu-item index="productList">
      <i class="el-icon-menu"></i>
      <span slot="title">Product List</span>
    </el-menu-item>
    <el-menu-item index="orderList">
      <i class="el-icon-document"></i>
      <span slot="title">订单</span>
    </el-menu-item>
    <el-menu-item index="report">
      <i class="el-icon-document"></i>
      <span slot="title">图表</span>
    </el-menu-item>
    <el-menu-item index="userList">
      <i class="el-icon-setting"></i>
      <span slot="title">User List</span>
    </el-menu-item>
  </el-menu>
</template>


<script>
export default {};
</script>

<style scoped>
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
