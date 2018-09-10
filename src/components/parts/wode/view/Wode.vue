<template>
  <div>
    <el-row type="flex" class="row-bg" justify="space-around" style="line-height:0px">
      <el-col :span="6">
        <div class="grid-content ">
           <i class="fa fa-ticket fa-2x"></i>
           <p style="padding:0px; margin:7px;">优惠券</p>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content -light">
           <div class="grid-content ">
           <i class="fa fa-trophy fa-2x"></i>
           <p style="padding:0px; margin:7px;">代金券</p>
        </div>
        </div>
      </el-col>
      <el-col :span="6">
       <div class="grid-content ">
          <div class="grid-content">
            <i class="fa fa-credit-card fa-2x"></i>
            <p style="padding:0px; margin:7px;">錢包</p>
          </div>
       </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'Wode',
  data () {
    return {}
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
</style>
