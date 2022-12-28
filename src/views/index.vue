<template>
  <div class="index">
    <el-container>
      <el-aside width="300px">
        <el-menu
          class="el-menu-vertical-demo"
          :default-active="defaultActive"
          router
          unique-opened
          collapse-transition
        >
          <template v-for="item in routeList">
            <el-submenu
              :index="item.path"
              v-if="item.children"
              :key="item.path"
            >
              <template slot="title">
                <i :class="item.meta.icon"></i>
                <span>{{ item.meta.title }}</span>
              </template>
              <el-menu-item-group v-for="ite in item.children" :key="ite.path">
                <el-menu-item :index="ite.path">{{
                  ite.meta.title
                }}</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item :index="item.path" v-else :key="item.path">
              <i :class="item.meta.icon"></i>
              <span slot="title">{{ item.meta.title }}</span>
            </el-menu-item>
          </template>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header
          ><el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item
              :to="{ path: item.path }"
              v-for="item in breadcrumbList"
              :key="item.path"
              >{{ item.name }}</el-breadcrumb-item
            >
          </el-breadcrumb>
          <div class="operationBtn">
            <div class="userBox">欢迎您：{{ userName }}</div>
            <el-button type="warning" @click="exitLogin()">退出登录</el-button>
          </div></el-header
        >
        <el-main> <router-view /> </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import { mapState } from "vuex";
import router from "../router/index";
export default {
  data() {
    return {
      defaultActive: "/echarts",
      routeList: [],
      breadcrumbList: [],
      userName: localStorage.getItem("userName"),
    };
  },
  methods: {
    // 退出登录
    exitLogin() {
      this.$confirm("此操作将退出该系统，请谨慎操作！", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          localStorage.clear();
          this.$router.push("/");
          this.$message({
            type: "success",
            message: "退出成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消退出",
          });
        });
    },
  },
  computed: {
    // 经过解构后，自动就添加到了计算属性中，此时就可以直接像访问计算属性一样访问它
    ...mapState(["userAge"]),
  },
  mounted() {
    let routeList = router.options.routes;
    this.routeList = routeList.filter((item) => item.isShow);
    // 获取面包屑
    let breadcrumbList = JSON.parse(localStorage.getItem("breadcrumbList"));
    if (breadcrumbList) {
      this.breadcrumbList = breadcrumbList;
      this.defaultActive = breadcrumbList[1].path;
    }
  },
  watch: {
    $route(to, from) {
      let arr = [];
      this.$route.matched.forEach((item) => {
        if (item.meta.title)
          arr.push({
            path: item.path || "/",
            name: item.meta.title,
          });
      });
      this.breadcrumbList = arr;
      localStorage.setItem("breadcrumbList", JSON.stringify(arr));
    },
  },
};
</script>
<style lang="less" scoped>
.index {
  width: 100%;
  height: 100%;
  .el-container {
    height: 100%;
    .el-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .operationBtn {
        display: flex;
        align-items: center;
        .userBox {
          margin-right: 15px;
        }
      }
    }
  }

  // 去掉滚动条
  .el-main::-webkit-scrollbar {
    width: 0;
    height: 0; /**/
  }
  .el-main::-webkit-scrollbar-track {
    background: rgb(239, 239, 239);
    border-radius: 2px;
  }
  .el-main::-webkit-scrollbar-thumb {
    background: #bfbfbf;
    border-radius: 0;
  }
  .el-main::-webkit-scrollbar-thumb:hover {
    // background: #333;
  }
}
</style>
