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
      <p>通过 disabled 属性指定是否禁用 input 组件</p>
      <el-input v-model="input" placeholder="请输入内容"></el-input>
      <el-input v-model="input1" placeholder="请输入内容" :disabled="true"></el-input>
    </el-card>
    <h3>可清空</h3>
    <el-card>
      <p>使用clearable属性即可得到一个可清空的输入框</p>
      <el-card>
        <el-input placeholder="请输入密码" v-model="input2" clearable></el-input>
      </el-card>
    </el-card>
    <h3>密码框</h3>
    <el-card>
      <p>使用show-password属性即可得到一个可切换显示隐藏的密码框</p>
      <el-card>
        <el-input placeholder="请输入密码" v-model="input3" show-password></el-input>
      </el-card>
    </el-card>
    <h3>带 icon 的输入框</h3>
    <p>带有图标标记输入类型</p>
    <el-card>
      <p>可以通过 prefix-icon 和 suffix-icon 属性在 input 组件首部和尾部增加显示图标，也可以通过 slot 来放置图标。</p>
      <el-card>
        <div class="demo-input-suffix">
          属性方式：
          <el-input placeholder="请选择日期" suffix-icon="el-icon-date" v-model="input4"></el-input>
          <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input5"></el-input>
        </div>
        <div class="demo-input-suffix">
          slot 方式：
          <el-input placeholder="请选择日期" v-model="input6">
            <i slot="suffix" class="el-input__icon el-icon-date"></i>
          </el-input>
          <el-input placeholder="请输入内容" v-model="input7">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </div>
      </el-card>
    </el-card>
    <h3>文本域</h3>
    <p>用于输入多行文本信息，通过将 type 属性的值指定为 textarea。</p>
    <el-card>
      <p>文本域高度可通过 rows 属性控制</p>
      <el-card>
        <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea"></el-input>
      </el-card>
      <p>通过设置 autosize 属性可以使得文本域的高度能够根据文本内容自动进行调整，并且 autosize 还可以设定为一个对象，指定最小行数和最大行数。</p>
      <el-card>
        <el-input type="textarea" autosize placeholder="请输入内容" v-model="textarea1"></el-input>
        <div style="margin: 20px 0;"></div>
        <el-input
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 4}"
          placeholder="请输入内容"
          v-model="textarea2"
        ></el-input>
      </el-card>
    </el-card>
    <h3>输入长度限制</h3>
    <el-card>
      <p>maxlength 和 minlength 是原生属性，用来限制输入框的字符长度，其中字符长度是用 Javascript 的字符串长度统计的。对于类型为 text 或 textarea 的输入框，在使用 maxlength 属性限制最大输入长度的同时，可通过设置 show-word-limit 属性来展示字数统计。</p>
      <el-card>
        <el-input type="text" placeholder="请输入内容" v-model="text" maxlength="10" show-word-limit></el-input>
        <div style="margin: 20px 0;"></div>
        <el-input
          type="textarea"
          placeholder="请输入内容"
          v-model="textarea3"
          maxlength="30"
          show-word-limit
        ></el-input>
      </el-card>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      input5: "",
      input6: "",
      input7: "",
      textarea: "",
      textarea1: "",
      textarea2: "",
      text: "",
      textarea3: ""
    };
  }
};
</script>

<style>
</style>