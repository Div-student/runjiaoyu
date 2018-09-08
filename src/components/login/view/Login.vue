<template>
<div>
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
    <div></div>
    <div><el-button type="primary" style="background-color:#52cc77">登录</el-button> </div>
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
  /* 头部设置 */
  header{
    height:88px;
    line-height:88px;
    display: flex;
    padding:0 24px;
    background-color:lightgray;
    justify-content: space-between;
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
  .middle>div,.middle>div>input{
   position:relative;
  }
  .middle>div>input{
    width:90%;
    height:60px;
    padding-left: 5px;
  }
  .middle>div>i{
    font-size:26px;
    margin-left:5px;
  }
  .middle>div>button{
    width:200px;
    height:50px;
    border:none;
    background-color:#52cc77;
    border-radius:5px;
    position:absolute;
    top:5px;
    right:5px;
   }
</style>
