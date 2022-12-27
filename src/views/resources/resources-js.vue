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
    <div class="commonly">常用代码</div>
    <el-collapse v-model="activeName" accordion class="collapse">
      <el-collapse-item title="根据时间排序" name="1">
        <div class="warning">(prop)--对象数组排序的键</div>
        <div class="warning">
          (align)--排序方式，"positive"正序，"inverted"倒序
        </div>
        <div>
          function compare(prop,align){ <br />
          return function(a,b){<br />
          var value1=a[prop];<br />
          var value2=b[prop];<br />
          if(align=="positive"){//正序<br />
          return new Date(value1)-new Date(value2);<br />
          }else if(align=="inverted"){//倒序<br />
          return new Date(value2)-new Date(value1);<br />
          }<br />
          }<br />
          }<br />
          data.sort(compare('time','inverted'));<br />
        </div>
      </el-collapse-item>
      <el-collapse-item title="map--根据某个键值得到一个新数组" name="2">
        <div>
          let map = new Map();<br />
          res.data.map((v) => {<br />
          let key = v.time;<br />
          let list = map.get(key);<br />
          if (!list) {<br />
          list = new Array();<br />
          }<br />
          list.push(v);<br />
          map.set(key, list);<br />
          });<br />
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "1",
      tableData: [
        {
          name: "原型和原型链",
          url: [
            "https://blog.csdn.net/weixin_56505845/article/details/119683904",
          ],
          advantages: [
            "构造函数是使用了new关键字的函数，用来创建对象，所有函数都是Function()的实例",
            "原型对象是用来存放实例对象的公有属性和公有方法的一个公共对象，所有原型对象都是Object()的实例",
            "原型链又叫隐式原型链，是由__proto__属性串联起来，原型链的尽头是Object.prototype",
          ],
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.warning {
  color: #e6a23c;
}
.collapse {
  margin-top: 10px;
}
.commonly {
  margin-top: 30px;
}
</style>
