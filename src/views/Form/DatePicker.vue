<template>
  <div>
    <h2>DatePicker 日期选择器</h2>
    <p>用于选择或输入日期</p>
    <h3>选择日</h3>
    <p>以「日」为基本单位，基础的日期选择控件</p>
    <el-card>
      <p>基本单位由type属性指定。快捷选项需配置picker-options对象中的shortcuts，禁用日期通过 disabledDate 设置，传入函数</p>
      <div class="block">
        <span class="demonstration">默认</span>
        <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
      </div>
      <div class="block">
        <span class="demonstration">带快捷选项</span>
        <el-date-picker
          v-model="value2"
          align="right"
          type="date"
          placeholder="选择日期"
          :picker-options="pickerOptions"
        ></el-date-picker>
      </div>
    </el-card>
    <h3>其他日期单位</h3>
    <p>通过扩展基础的日期选择，可以选择周、月、年或多个日期</p>
    <el-card>
      <div class="container">
        <div class="block">
          <span class="demonstration">周</span>
          <el-date-picker v-model="value3" type="week" format="yyyy 第 WW 周" placeholder="选择周"></el-date-picker>
        </div>
        <div class="block">
          <span class="demonstration">月</span>
          <el-date-picker v-model="value4" type="month" placeholder="选择月"></el-date-picker>
        </div>
      </div>
      <div class="container">
        <div class="block">
          <span class="demonstration">年</span>
          <el-date-picker v-model="value5" type="year" placeholder="选择年"></el-date-picker>
        </div>
        <div class="block">
          <span class="demonstration">多个日期</span>
          <el-date-picker type="dates" v-model="value6" placeholder="选择一个或多个日期"></el-date-picker>
        </div>
      </div>
    </el-card>
    <h3>选择日期范围</h3>
    <p>可在一个选择器中便捷地选择一个时间范围</p>
    <el-card>
      <p>在选择日期范围时，默认情况下左右面板会联动。如果希望两个面板各自独立切换当前月份，可以使用unlink-panels属性解除联动。</p>
      <el-card>
        <div class="block">
          <span class="demonstration">默认</span>
          <el-date-picker
            v-model="value7"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>
        </div>
        <div class="block">
          <span class="demonstration">带快捷选项</span>
          <el-date-picker
            v-model="value8"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions2"
          ></el-date-picker>
        </div>
      </el-card>
    </el-card>
    <h3>选择月份范围</h3>
    <p>可在一个选择器中便捷地选择一个月份范围</p>
    <el-card>
      <p>在选择月份范围时，默认情况下左右面板会联动。如果希望两个面板各自独立切换当前年份，可以使用unlink-panels属性解除联动。</p>
      <el-card>
        <div class="block">
          <span class="demonstration">默认</span>
          <el-date-picker
            v-model="value9"
            type="monthrange"
            range-separator="至"
            start-placeholder="开始月份"
            end-placeholder="结束月份"
          ></el-date-picker>
        </div>
        <div class="block">
          <span class="demonstration">带快捷选项</span>
          <el-date-picker
            v-model="value10"
            type="monthrange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="开始月份"
            end-placeholder="结束月份"
            :picker-options="pickerOptions2"
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
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
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
      value3: "",
      value4: "",
      value5: "",
      value6: "",
      pickerOptions1: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      value7: "",
      value8: "",
      pickerOptions2: {
        shortcuts: [
          {
            text: "本月",
            onClick(picker) {
              picker.$emit("pick", [new Date(), new Date()]);
            }
          },
          {
            text: "今年至今",
            onClick(picker) {
              const end = new Date();
              const start = new Date(new Date().getFullYear(), 0);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近六个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setMonth(start.getMonth() - 6);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      value9: "",
      value10: ""
    };
  }
};
</script>

<style>
</style>