<template>
  <div>
    <h2>Pagination 分页</h2>
    <p>当数据量过多时，使用分页分解数据。</p>
    <h3>基础用法</h3>
    <el-card>
      <p>设置layout，表示需要显示的内容，用逗号分隔，布局元素会依次显示。prev表示上一页，next为下一页，pager表示页码列表，除此以外还提供了jumper和total，size和特殊的布局符号->，->后的元素会靠右显示，jumper表示跳页元素，total表示总条目数，size用于设置每页显示的页码数量。</p>
      <el-card>
        <div class="block">
          <span class="demonstration">页数较少时的效果</span>
          <el-pagination layout="prev, pager, next" :total="50"></el-pagination>
        </div>
        <div class="block">
          <span class="demonstration">大于 7 页时的效果</span>
          <el-pagination layout="prev, pager, next" :total="1000"></el-pagination>
        </div>
      </el-card>
    </el-card>
    <h3>带有背景色的分页</h3>
    <el-card>
      <p>设置background属性可以为分页按钮添加背景色。</p>
      <el-card>
        <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
      </el-card>
    </el-card>
    <h3>附加功能</h3>
    <p>根据场景需要，可以添加其他功能模块。</p>
    <el-card>
      <p>此例是一个完整的用例，使用了size-change和current-change事件来处理页码大小和当前页变动时候触发的事件。page-sizes接受一个整型数组，数组元素为展示的选择每页显示个数的选项，[100, 200, 300, 400]表示四个选项，每页显示 100 个，200 个，300 个或者 400 个。</p>
      <el-card>
        <div class="block">
          <span class="demonstration">显示总数</span>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage1"
            :page-size="100"
            layout="total, prev, pager, next"
            :total="1000"
          ></el-pagination>
        </div>
        <div class="block">
          <span class="demonstration">调整每页显示条数</span>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage2"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="sizes, prev, pager, next"
            :total="1000"
          ></el-pagination>
        </div>
        <div class="block">
          <span class="demonstration">直接前往</span>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage3"
            :page-size="100"
            layout="prev, pager, next, jumper"
            :total="1000"
          ></el-pagination>
        </div>
        <div class="block">
          <span class="demonstration">完整功能</span>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400"
          ></el-pagination>
        </div>
      </el-card>
    </el-card>
  </div>
</template>

<script>
export default {
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    };
  }
};
</script>

<style>
</style>