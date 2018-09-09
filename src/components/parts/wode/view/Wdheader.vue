<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="16"><div style="margin-top:5px;text-align:left;"> <i class="fa fa-user-circle-o fa-2x" style="color:#ececec;"></i><span class="phonenb">{{phonenumb}}</span></div></el-col>
      <el-col :span="8"><div style="text-align:right;"> <i class="el-icon-arrow-right"></i></div></el-col>
    </el-row>
  </div>
</template>
<script>
export default{
  name: 'Whheader',
  data () {
    return {
      phonenumb: sessionStorage.getItem('phonenumb')
    }
  }
}
</script>
<style lang="less" scoped>
  .el-row {
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
  .phonenb{
    position:absolute;
    bottom:5px;
  }
</style>
