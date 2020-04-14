<template>
  <div>
    <h2>Radio单选框</h2>
    <p>在一组备选项中进行单选</p>
    <h3>基础用法</h3>
    <p>由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。</p>
    <el-card>
      <p>要使用 Radio 组件，只需要设置v-model绑定变量，选中意味着变量的值为相应 Radio label属性的值，label可以是String、Number或Boolean。</p>
      <el-card>
        <el-radio v-model="radio" label="1">备选项</el-radio>
        <el-radio v-model="radio" label="2">备选项</el-radio>
      </el-card>
    </el-card>
    <h3>禁用状态</h3>
    <p>单选框不可用的状态。</p>
    <el-card>
      <p>只要在el-radio元素中设置disabled属性即可，它接受一个Boolean，true为禁用。</p>
      <el-card>
        <el-radio disabled v-model="radio1" label="禁用">备选项</el-radio>
        <el-radio disabled v-model="radio1" label="选中且禁用">备选项</el-radio>
      </el-card>
    </el-card>
    <h3>按钮状态</h3>
    <p>按钮样式的单选组合。</p>
    <el-card>
      <p>只需要把el-radio元素换成el-radio-button元素即可，此外，Element 还提供了size属性。</p>
      <el-card>
        <p>结合el-radio-group元素和子元素el-radio可以实现单选组，在el-radio-group中绑定v-model，在el-radio中设置好label即可，无需再给每一个el-radio绑定变量，另外，还提供了change事件来响应变化，它会传入一个参数value。</p>
        <div>
          <el-radio-group v-model="radio2">
            <el-radio-button label="上海"></el-radio-button>
            <el-radio-button label="北京"></el-radio-button>
            <el-radio-button label="广州"></el-radio-button>
            <el-radio-button label="深圳"></el-radio-button>
          </el-radio-group>
        </div>
        <div style="margin-top: 10px">
          <el-radio-group v-model="radio3">
            <el-radio-button label="上海"></el-radio-button>
            <el-radio-button label="北京"></el-radio-button>
            <el-radio-button label="广州"></el-radio-button>
            <el-radio-button label="深圳"></el-radio-button>
          </el-radio-group>
        </div>
      </el-card>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio: "1",
      radio1: "选中且禁用",
      radio2: "上海",
      radio3: "北京"
    };
  }
};
</script>
<style>
</style>