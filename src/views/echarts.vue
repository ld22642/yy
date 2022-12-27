<template>
  <div>
    <!-- <el-button type="primary" @click="$router.push('/details')">详情</el-button> -->
    <div class="btn">
      <el-button type="primary" @click="changeNum(-1)" v-if="userAge"
        >减</el-button
      >
      今年: {{ userAge }} 岁
      <el-button type="primary" @click="changeNum(1)">加</el-button>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    changeNum(val) {
      this.$store.commit("getuserAge", val);
    },
  },
  computed: {
    // 经过解构后，自动就添加到了计算属性中，此时就可以直接像访问计算属性一样访问它
    ...mapState(["userName", "userAge"]),
  },
  mounted() {},
};
</script>
<style lang="less" scoped>
.btn {
  margin-top: 20px;
}
</style>
