<template>
  <div>
    <h2>Select 选择器</h2>
    <p>当选项过多时，使用下拉菜单展示并选择内容。</p>
    <h3>基础用法</h3>
    <p>适用广泛的基础单选</p>
    <el-card>
      <p>v-model的值为当前被选中的el-option的 value 属性值</p>
      <p>为el-select设置disabled属性，则整个选择器不可用</p>
      <p>为el-select设置clearable属性，则可将选择器清空。需要注意的是，clearable属性仅适用于单选。</p>
      <el-card>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-card>
    </el-card>
    <h3>有禁用选项</h3>
    <el-card>
      <p>在el-option中，设定disabled值为 true，即可禁用该选项</p>
      <el-card>
        <el-select v-model="value1" placeholder="请选择">
          <el-option
            v-for="item in options1"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled"
          ></el-option>
        </el-select>
      </el-card>
    </el-card>
    <h3>基础多选</h3>
    <p>适用性较广的基础多选，用 Tag 展示已选项</p>
    <el-card>
      <p>为el-select设置multiple属性即可启用多选，此时v-model的值为当前选中值所组成的数组。默认情况下选中值会以 Tag 的形式展现，你也可以设置collapse-tags属性将它们合并为一段文字。</p>
      <el-card>
        <el-select v-model="value2" multiple placeholder="请选择">
          <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>

        <el-select
          v-model="value3"
          multiple
          collapse-tags
          style="margin-left: 20px;"
          placeholder="请选择"
        >
          <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-card>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: "",
      options1: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶",
          disabled: true
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value1: "",
      options2: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value2: [],
      value3: []
    };
  }
};
</script>

<style>
</style>