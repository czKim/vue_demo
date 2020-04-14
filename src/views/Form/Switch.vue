<template>
  <div>
    <h2>Input 输入框</h2>
    <p>通过鼠标或键盘输入字符</p>
    <el-card>
      Input 为受控组件，它总会显示 Vue 绑定值。
      通常情况下，应当处理 input 事件，并更新组件的绑定值（或使用v-model）。否则，输入框内显示的值将不会改变。
      不支持 v-model 修饰符。
    </el-card>
    <h3>基础用法</h3>
    <el-card>
      <el-input v-model="input" placeholder="请输入内容"></el-input>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: ""
    };
  }
};
</script>

<style>
</style>