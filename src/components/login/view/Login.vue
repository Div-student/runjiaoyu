<template>
<div class="box">
  <header>
    <div><i class="el-icon-close"></i></div>
    <div>登录</div>
    <div>密码登录</div>
  </header>
  <div class="middle">
    <div><i class="el-icon-mobile-phone"></i><input type="text"></div>
    <div><i class="el-icon-menu"></i><input type="text" placeholder="验证码"><button>获取验证码</button></div>
  </div>
  <footer>
    <div>温馨提示：未注册润教育账号的手机号，登录时会自动完成注册并代表您已同意《润教育用户协议》</div>
    <div>
      <el-button type="primary" style="background-color:#52cc77">登录</el-button>
      <p class="bottomletter">收不到？试试<span>语音验证码</span></p>
     </div>
  </footer>
</div>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
    }
  }
}
</script>
<style scoped>
.box{
  background-color:#f7f7f7;
}
  /* 头部设置 */
  header{
    height:60px;
    line-height:60px;
    display: flex;
    padding:0 24px;
    background-color:white;
    justify-content: space-between;
    margin-bottom:50px;
  }
  header>div:first-child{
    width:100px;
    color:#52cc77;
    font-size:40px;
  }
  header>div:last-child{
    width:100px;
    color:#52cc77;
    font-size:20px;
  }
   header>div:nth-child(2){
    width:100px;
    font-size: 30px;
    font-weight:bold;
    letter-spacing:5px;
  }
  /* 中部设置 */
  .middle{
    margin-bottom:20px;
  }
  .middle>div,.middle>div>input{
   position:relative;
   background-color:white;
  }
  .middle>div>input{
    width:90%;
    height:60px;
    padding-left: 5px;
    border:none;
  }
  .middle>div>i{
    font-size:26px;
    margin-left:5px;
  }
  .middle>div>button{
    width:200px;
    height:45px;
    border:none;
    background-color:#52cc77;
    border-radius:5px;
    position:absolute;
    top:10px;
    right:5px;
    font-size:18px;
    color:white;
    letter-spacing:5px;
   }
  .middle>div:first-child{
     border-bottom:1px solid #ccc;
  }
   /* 底部设置 */
   footer>div{
     width:96%;
     margin:20px auto;
   }
    footer>div:first-child,.bottomletter{
      color:grey;
      font-size:14px;
    }
    footer>div>button{
      width:100%;
      color:white;
      letter-spacing:5px;
    }
    .bottomletter{
      text-align:right;
      margin-top:10px;
    }
    .bottomletter span{
      font-size:18px;
    }
</style>
