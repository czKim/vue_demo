<template>
  <div>
    <!-- 此处填写html代码 -->
  </div>
</template>

<script>
export default {
  // 此处加入js代码
  data() {
    return {
      // 此处添加变量
    };
  },
  methods: {
    // 此处填写方法, 方法之间用逗号间隔
    /**
     * 获取工位信息
     */
    async getData() {
      let params = {
        mesAddress: "YFCX001.YFGW001"
      };
      // get请求
      const res = await this.$http.get("/mdc/resource", { params: params });
      console.log(res);
    },
    /**
     * post请求
     */
    async postData() {
      let params = {
        paramA: ""
      };
      const res = await this.$http.post("/api", params);
      console.log(res);
    }
  },
  /**
   * vue生命周期
   */
  beforeCreate() {},
  created() {
    this.getData();
  },
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {}
};
</script>

<style>
/* 此处加入css样式代码 */
</style>


