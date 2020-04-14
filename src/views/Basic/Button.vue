<template>
  <div>
    <h2>Button按钮</h2>
    <p>常用的操作按钮。</p>
    <h3>基础用法</h3>
    <p>基础的按钮用法</p>
    <el-card>
      <el-card>使用type、plain、round、circle和text属性来定义 Button 的样式。</el-card>
      <el-row>
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
        <el-button type="text">文字按钮</el-button>
      </el-row>
      <el-row>
        <el-button plain type="primary">主要按钮</el-button>
      </el-row>
      <el-row>
        <el-button round type="primary">主要按钮</el-button>
      </el-row>
      <el-row>
        <el-button circle icon="el-icon-edit" type="primary"></el-button>
      </el-row>
    </el-card>
    <h3>禁用状态</h3>
    <p>按钮不可用状态。</p>
    <el-card>
      <el-card>你可以使用disabled属性来定义按钮是否可用，它接受一个Boolean值。</el-card>
      <el-row>
        <el-button disabled>默认按钮</el-button>
        <el-button type="primary" disabled>主要按钮</el-button>
        <el-button type="success" disabled>成功按钮</el-button>
        <el-button type="info" disabled>信息按钮</el-button>
        <el-button type="warning" disabled>警告按钮</el-button>
        <el-button type="danger" disabled>危险按钮</el-button>
        <el-button type="text" disabled>文字按钮</el-button>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>