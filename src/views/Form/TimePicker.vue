<template>
  <div>
    <h2>TimePicker 时间选择器</h2>
    <p>用于选择或输入日期</p>
    <h3>固定时间点</h3>
    <p>提供几个固定的时间点供用户选择</p>
    <el-card>
      <p>使用 el-time-select 标签，分别通过start、end和step指定可选的起始时间、结束时间和步长</p>
      <el-time-select
        v-model="value"
        :picker-options="{
    start: '08:30',
    step: '00:15',
    end: '18:30'
  }"
        placeholder="选择时间"
      ></el-time-select>
    </el-card>
    <h3>任意时间点</h3>
    <p>可以选择任意时间</p>
    <el-card>
      <p>使用 el-time-picker 标签，通过selectableRange限制可选时间范围。提供了两种交互方式：默认情况下通过鼠标滚轮进行选择，打开arrow-control属性则通过界面上的箭头进行选择。</p>
      <el-card>
        <el-time-picker
          v-model="value1"
          :picker-options="{
      selectableRange: '18:30:00 - 20:30:00'
    }"
          placeholder="任意时间点"
        ></el-time-picker>
        <el-time-picker
          arrow-control
          v-model="value2"
          :picker-options="{
      selectableRange: '18:30:00 - 20:30:00'
    }"
          placeholder="任意时间点"
        ></el-time-picker>
      </el-card>
    </el-card>
    <h3>固定时间范围</h3>
    <p>若先选择开始时间，则结束时间内备选项的状态会随之改变</p>
    <el-card>
      <el-time-select
        placeholder="起始时间"
        v-model="startTime"
        :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30'
    }"
      ></el-time-select>
      <el-time-select
        placeholder="结束时间"
        v-model="endTime"
        :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30',
      minTime: startTime
    }"
      ></el-time-select>
    </el-card>
    <h3>任意时间范围</h3>
    <p>可选择任意的时间范围</p>
    <el-card>
      <p>添加is-range属性即可选择时间范围，同样支持arrow-control属性。</p>
      <el-card>
        <el-time-picker
          is-range
          v-model="value3"
          range-separator="至"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
          placeholder="选择时间范围"
        ></el-time-picker>
        <el-time-picker
          is-range
          arrow-control
          v-model="value4"
          range-separator="至"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
          placeholder="选择时间范围"
        ></el-time-picker>
      </el-card>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      value1: new Date(2016, 9, 10, 18, 40),
      value2: new Date(2016, 9, 10, 18, 40),
      startTime: "",
      endTime: "",
      value3: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
      value4: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]
    };
  }
};
</script>

<style>
</style>