<template>
  <div class="tools">
    {{value1}}
  </div>
</template>
<script>
export default{
  name: 'Tools',
  // 接受父组件传过来的值
  props: ['value1'],
  data () {
    return {
    }
  }
}
</script>
<style scoped>
  .tools{
    width:180px;
    height:60px;
    border-radius:8px;
    position:fixed;
    top:50%;
    left:25%;
    background-color:black;
    color:white;
    line-height:60px;
    text-align: center;
  }
</style>
