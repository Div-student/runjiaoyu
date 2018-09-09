<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="4"><div><i class="fa fa-qrcode fa-2x" style="color:#4FD768; margin-top:5px;"></i></div></el-col>
      <el-col :span="16">
        <el-row class="middlesearch">
          <el-col :span="4"><i class="el-icon-search headerico"></i></el-col>
          <el-col :span="20"><el-input type='text' class="headesearch" placeholder="搜索科目机构"></el-input></el-col>
        </el-row>
      </el-col>
      <el-col :span="4"><div><i class="fa fa-paper-plane fa-2x" style="color:#4FD768; margin-top:5px;"></i></div></el-col>
    </el-row>
  </div>
</template>
<script>
export default{
  name: 'Headers',
  data () {
    return {
    }
  }
}
</script>
<style lang='less' scoped>
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
  .headesearch/deep/input{
    border:none!important;
    background-color:#f7f7f7;
  }
  .middlesearch{
    border:1px solid #f9fafc;
    background-color:#f7f7f7;
  }
</style>
