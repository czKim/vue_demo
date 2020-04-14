<template>
  <el-container style="height: 100vh;">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1', '3']" router>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-setting"></i>组件
          </template>
          <el-menu-item-group>
            <template slot="title">Basic</template>
            <el-menu-item index="/basic/layout">Layout</el-menu-item>
            <el-menu-item index="/basic/icon">Icon</el-menu-item>
            <el-menu-item index="/basic/button">Button</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">表单</template>
            <el-menu-item index="/form/radio">Radio单选框</el-menu-item>
            <el-menu-item index="/form/checkbox">Checkbox多选框</el-menu-item>
            <el-menu-item index="/form/input">Input输入框</el-menu-item>
            <el-menu-item index="/form/select">Select选择器</el-menu-item>
            <el-menu-item index="/form/switch">Switch开关</el-menu-item>
            <el-menu-item index="/form/timepicker">TimePicker时间选择器</el-menu-item>
            <el-menu-item index="/form/datepicker">DatePicker日期选择器</el-menu-item>
            <el-menu-item index="/form/datetimepicker">DateTimePicker日期时间选择器</el-menu-item>
            <el-menu-item index="/form/form">Form表单</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">Data</template>
            <el-menu-item index="/data/table">Table表格</el-menu-item>
            <el-menu-item index="/data/pagination">Pagination分页</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">URLRequest</template>
            <el-menu-item index="/demo">Demo</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>

      <el-main>
        <router-view></router-view>
        <!-- <el-table :data="tableData">
          <el-table-column prop="date" label="日期" width="140"></el-table-column>
          <el-table-column prop="name" label="姓名" width="120"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
        </el-table>-->
      </el-main>
    </el-container>
  </el-container>
</template>


<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>

<script>
export default {
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    };
    return {
      tableData: Array(20).fill(item)
    };
  }
};
</script>