<template>
  <div class="login" :style="{ backgroundImage: `url(${bgList[bgNum].img})` }">
    <div class="bgBtn">
      <el-button type="primary" @click="changeBg()">切换背景</el-button>
    </div>
    <div class="from">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
        hide-required-asterisk
      >
        <el-form-item label="账号" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="submitForm('ruleForm')"
            class="loginBtn"
            ref="loginBtn"
            >登录</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bgList: [
        { img: require("../assets/img/13.jpeg") },
        { img: require("../assets/img/21.jpg") },
        { img: require("../assets/img/22.jpg") },
      ],
      bgNum: localStorage.getItem("bgNum") || 0,
      ruleForm: {
        name: "",
        password: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入账号", trigger: "blur" },
          {
            min: 1,
            max: 20,
            message: "长度在 1 到 20 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 1,
            max: 20,
            message: "长度在 1 到 20 个字符",
            trigger: "blur",
          },
        ],
      },
      //  1-- 超级管理员 2--普通管理员
      dataList: [
        {
          userName: "13551793471",
          password: "chen990402",
          type: 1,
        },
        {
          userName: "ccd",
          password: "chen990402",
          type: 2,
        },
      ],
    };
  },
  mounted() {
    this.enterEvent();
  },
  methods: {
    changeBg() {
      if (this.bgNum == 2) {
        this.bgNum = -1;
      }
      this.bgNum++;
      localStorage.setItem("bgNum", this.bgNum);
    },

    // 键盘回车事件
    enterEvent() {
      document.onkeydown = (e) => {
        let key;
        let locationUrl = location.hash;
        // eslint-disable-next-line no-undefined
        if (window.event === undefined) {
          key = e.keyCode;
        } else {
          key = window.event.keyCode;
        }
        if (key === 13 && locationUrl.slice(1, locationUrl.length) == "/") {
          this.submitForm("ruleForm");
        }
      };
    },

    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 密码账号判断
          let userName = this.dataList.some(
            (item) => item.userName == this.ruleForm.name
          );
          let password = this.dataList.some(
            (item) => item.password == this.ruleForm.password
          );
          if (userName && password) {
            this.dataList.forEach((item) => {
              if (item.userName == this.ruleForm.name) {
                localStorage.setItem("type", item.type);
                localStorage.setItem("mark", "xunxufangwenyihuier");
                localStorage.setItem("userName", item.userName);
                let arr = [
                  { path: "/indexPage", name: "首页" },
                  { path: "/echarts", name: "图表" },
                ];
                localStorage.setItem("breadcrumbList", JSON.stringify(arr));
                this.$router.push("/indexPage");
                this.$message({
                  type: "success",
                  message: "登录成功!",
                });
              }
            });
          } else {
            this.$message.error("账号或密码错误，请检查！");
          }
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  background-position: 100%;
  position: relative;
  .bgBtn {
    position: absolute;
    top: 0;
    right: 0;
  }
  .from {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /deep/ .demo-ruleForm {
      width: 400px;
      .el-form-item__label {
        color: #f56c6c;
      }
      .loginBtn {
        margin-left: 50px;
        margin-right: 20px;
      }
    }
  }
}
</style>
