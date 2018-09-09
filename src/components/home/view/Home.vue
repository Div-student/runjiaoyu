<template>
  <div>
    <el-container>
      <el-header class="myheader"> <router-view name="headerview"></router-view></el-header>
      <el-main><router-view name="contentview"></router-view></el-main>
      <el-footer class="">
        <el-row :gutter="5">
          <el-col :span="5" ><div class="grid-content bg-purple  footer"><i class="fa fa-home fa-2x"></i><router-link to="/shouye" class="bottomtitle">首页</router-link></div></el-col>
          <el-col :span="5" ><div class="grid-content bg-purple-light footer"><i class="fa fa-address-book-o fa-2x"></i><router-link to="/kecheng" class="bottomtitle1">课程</router-link></div></el-col>
          <el-col :span="5" ><div class="grid-content bg-purple  footer"><i class="fa fa-vcard-o fa-2x"></i><router-link to="/yishukaoji" class="bottomtitle2">艺术考级</router-link></div></el-col>
          <el-col :span="5" ><div class="grid-content bg-purple-light footer"><i class="fa fa-address-book-o fa-2x"></i><router-link to="/huodong" class="bottomtitle3">活动</router-link></div></el-col>
          <el-col :span="4" ><div class="grid-content bg-purple  footer"><i class="fa fa-user-circle-o fa-2x"></i><router-link to="/wode" class="bottomtitle4">我的</router-link></div></el-col>
        </el-row>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
export default{
  name: 'Home',
  data () {
    return {
    }
  }
}
</script>
<style lang='less' scoped>
/* 页面容器样式 */
  .el-header, .el-footer {
  color: #333;
  text-align: center;
  line-height: 60px;
  border-bottom:1px solid #cdcdcd;
  margin-bottom:5px!important;
  }
   body > .el-container {
    margin-bottom: 40px;
  }
  .el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
  }
  /* 底部布局样式 */
  el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .bottomtitle{
    position:absolute;
    top:20px;
    left:20px;
  }
  .bottomtitle1{
    position:absolute;
    top:20px;
    left:93px;
  }
  .bottomtitle2{
    position:absolute;
    top:20px;
    left:154px;
  }
  .bottomtitle3{
    position:absolute;
    top:20px;
    left:243px;
  }
  .bottomtitle4{
    position:absolute;
    top:20px;
    left:310px;
  }
  // 头部样式设置
  .myheader{
    height:46px!important;
    line-height:40px!important;
  }
</style>
