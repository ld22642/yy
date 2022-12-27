<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="名字" width="180"> </el-table-column>
      <el-table-column prop="url" label="网址" width="500">
        <template slot-scope="scope">
          <div v-for="item in scope.row.url" :key="item">
            <el-link :href="item" target="_blank" type="primary">{{
              item
            }}</el-link>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="advantages" label="优点">
        <template slot-scope="scope">
          <div v-for="item in scope.row.advantages" :key="item">{{ item }}</div>
        </template>
      </el-table-column>
    </el-table>
    <div class="attention">
      <div class="title">注意点</div>
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item title="验证v-for为啥不能用i当key" name="1">
          <div class="v-for">
            <div class="left">
              <div class="name">用i当key</div>
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="(item, i) in cities"
                  :key="i"
                  :label="item.label"
                  :value="item.value"
                >
                  <span style="float: left">{{ item.label }}</span>
                  <span
                    style="float: right; color: #8492a6; font-size: 13px"
                    @click="del(i)"
                    >删除</span
                  >
                </el-option>
              </el-select>
            </div>
            <div class="left">
              <div class="name">不用i当key</div>
              <el-select v-model="value1" placeholder="请选择">
                <el-option
                  v-for="(item, i) in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                  <span style="float: left">{{ item.label }}</span>
                  <span
                    style="float: right; color: #8492a6; font-size: 13px"
                    @click="del1(i)"
                    >删除</span
                  >
                </el-option>
              </el-select>
            </div>
          </div>
          <div class="conclusion">
            用i当key，删除了前面的后面的选中标识还存在，v-for的key值必须要唯一，且避免用index作为key
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: "vuex的使用",
          url: [
            "https://blog.csdn.net/weixin_44900104/article/details/126369004",
          ],
          advantages: [
            "Vuex 是专门为 Vue 设计的状态管理库，以利用 Vue.js 的细粒度数据响应机制来进行高效的状态更新",
          ],
        },
        {
          name: "mixins的使用",
          url: ["https://blog.csdn.net/qq_44308109/article/details/120967912"],
          advantages: [
            "组件使用mixins中的属性或者方法，当改变mixins的属性值或者是方法内部的一些逻辑操作时，只会在当前组件中起作用而并不会改变混入对象的属性值或者是方法，故其他组件引入mixins并使用其属性或者是方法时是不会受当前组件操作影响的（可类比继承，子继承了父的方法或属性，在子中对继承来的方法或属性做改变，是不会改变父的方法和属性的，更不会影响到其他的子继承父的属性和方法）",
          ],
        },
      ],
      activeName: "1",
      cities: [
        {
          value: "Beijing",
          label: "北京",
        },
        {
          value: "Shanghai",
          label: "上海",
        },
        {
          value: "Nanjing",
          label: "南京",
        },
        {
          value: "Chengdu",
          label: "成都",
        },
        {
          value: "Shenzhen",
          label: "深圳",
        },
        {
          value: "Guangzhou",
          label: "广州",
        },
      ],
      value: "",
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value1: "",
    };
  },
  methods: {
    // 验证v-for用i作为key
    del(i) {
      this.cities.splice(i, 1);
    },

    // 验证v-for不用i作为key
    del1(i) {
      this.options.splice(i, 1);
    },
  },
};
</script>

<style lang="less" scoped>
.attention {
  margin-top: 20px;
  .title {
    margin-bottom: 15px;
  }
  .v-for {
    display: flex;
    .left {
      width: 50%;
      color: #e6a23c;
      .name {
        margin-bottom: 8px;
      }
    }
  }
  .conclusion {
    margin-top: 12px;
    color: #f56c6c;
  }
}
</style>
