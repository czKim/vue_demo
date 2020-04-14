<template>
  <div>
    <h2>Checkbox 多选框</h2>
    <p>一组备选项中进行多选</p>
    <h3>基础用法</h3>
    <p>单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。</p>
    <el-card>
      <p>在el-checkbox元素中定义v-model绑定变量，单一的checkbox中，默认绑定变量的值会是Boolean，选中为true。</p>
      <p>设置disabled属性即可禁用。</p>
      <el-card>
        <!-- `checked` 为 true 或 false -->
        <el-checkbox v-model="checked">备选项</el-checkbox>
        <el-checkbox v-model="checked" disabled>备选项</el-checkbox>
      </el-card>
    </el-card>
    <h3>多选框组</h3>
    <p>适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。</p>
    <el-card>
      <p>checkbox-group元素能把多个 checkbox 管理为一组，只需要在 Group 中使用v-model绑定Array类型的变量即可。 el-checkbox 的 label属性是该 checkbox 对应的值，若该标签中无内容，则该属性也充当 checkbox 按钮后的介绍。label与数组中的元素值相对应，如果存在指定的值则为选中状态，否则为不选中。</p>
      <el-card>
        <el-checkbox-group v-model="checkList">
          <el-checkbox label="复选框 A"></el-checkbox>
          <el-checkbox label="复选框 B"></el-checkbox>
          <el-checkbox label="复选框 C"></el-checkbox>
          <el-checkbox label="禁用" disabled></el-checkbox>
          <el-checkbox label="选中且禁用" disabled></el-checkbox>
        </el-checkbox-group>
      </el-card>
    </el-card>
    <h3>按钮样式</h3>
    <p>按钮样式的多选组合。</p>
    <el-card>
      <p>只需要把el-checkbox元素替换为el-checkbox-button元素即可。此外，Element 还提供了size属性。</p>
      <el-card>
        <div>
          <el-checkbox-group v-model="checkboxGroup1">
            <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
          </el-checkbox-group>
        </div>
        <div style="margin-top: 20px">
          <el-checkbox-group v-model="checkboxGroup2" size="medium">
            <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
          </el-checkbox-group>
        </div>
        <div style="margin-top: 20px">
          <el-checkbox-group v-model="checkboxGroup3" size="small">
            <el-checkbox-button
              v-for="city in cities"
              :label="city"
              :disabled="city === '北京'"
              :key="city"
            >{{city}}</el-checkbox-button>
          </el-checkbox-group>
        </div>
        <div style="margin-top: 20px">
          <el-checkbox-group v-model="checkboxGroup4" size="mini" disabled>
            <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
          </el-checkbox-group>
        </div>
      </el-card>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
      checkList: ["选中且禁用", "复选框 A"],
      checkboxGroup1: ["上海"],
      checkboxGroup2: ["上海"],
      checkboxGroup3: ["上海"],
      checkboxGroup4: ["上海"],
      cities: ["上海", "北京", "广州", "深圳"]
    };
  }
};
</script>

<style>
</style>