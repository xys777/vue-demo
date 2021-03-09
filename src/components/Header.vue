<template>
  <el-row :gutter="0">
    <el-col :span="4"><div class="grid-content">{{$route.name}}</div></el-col>
    <el-col :span="18"><div class="grid-content"></div></el-col>
    <el-col :span="2">
      <div class="grid-content" >
        <i class="el-icon-setting"></i> <span>王小虎</span>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {};
</script>

<style scoped>
.el-row {
  padding:8px;
  background: rgb(198, 226, 255);
  
  min-height: 40px;
}
.el-col {
  border-radius: 4px;
}
.grid-content{
  height: 30px;
}

</style>
