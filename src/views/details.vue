<template>
  <div>我是:{{ userName }},今年:{{ userAge }}</div>
</template>
<script>
import { mapState } from "vuex";
import { mapMutations } from "vuex"; // 从vuex中导入mapMutations
export default {
  computed: {
    // 经过解构后，自动就添加到了计算属性中，此时就可以直接像访问计算属性一样访问它
    ...mapState(["userName", "userAge"]),
  },
  mounted() {
    this.getLogin();
  },
  methods: {
    // 这里注意一下，mapMutations是解构到methods方法里面，而不是计算属性了
    ...mapMutations(["getuserAge"]),
    // 假设点击完登录按钮，登录成功之后就可以获取userName
    getLogin() {
      //具体代码省略....
      this.getuserAge(30);
    },
  },
};
</script>
