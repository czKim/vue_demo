<template>
  <div>
    <h2>DateTimePicker 日期时间选择器</h2>
    <p>在同一个选择器里选择日期和时间</p>
    <el-card>DateTimePicker 由 DatePicker 和 TimePicker 派生，Picker Options 或者其他选项可以参照 DatePicker 和 TimePicker。</el-card>
    <h3>日期和时间点</h3>
    <el-card>
      <p>通过设置type属性为datetime，即可在同一个选择器里同时进行日期和时间的选择。快捷选项的使用方法与 Date Picker 相同。</p>
      <el-card>
        <div class="block">
          <span class="demonstration">默认</span>
          <el-date-picker v-model="value1" type="datetime" placeholder="选择日期时间"></el-date-picker>
        </div>
        <div class="block">
          <span class="demonstration">带快捷选项</span>
          <el-date-picker
            v-model="value2"
            type="datetime"
            placeholder="选择日期时间"
            align="right"
            :picker-options="pickerOptions"
          ></el-date-picker>
        </div>
        <div class="block">
          <span class="demonstration">设置默认时间</span>
          <el-date-picker
            v-model="value3"
            type="datetime"
            placeholder="选择日期时间"
            default-time="12:00:00"
          ></el-date-picker>
        </div>
      </el-card>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pickerOptions: {
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      value1: "",
      value2: "",
      value3: ""
    };
  }
};
</script>

<style>
</style>