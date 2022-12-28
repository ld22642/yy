<template>
  <div>
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item title="修改滚动条样式" name="1">
        <div>
          <div class="warning">(.left-bottom)--是滚动盒子的类名</div>
          <div>
            .left-bottom::-webkit-scrollbar { width: 0; height: 0; /**/ }
          </div>
          <div>
            .left-bottom::-webkit-scrollbar-track { background: rgb(239, 239,
            239); border-radius: 2px; }
          </div>
          <div>
            .left-bottom::-webkit-scrollbar-thumb { background: #bfbfbf;
            border-radius: 0; }
          </div>
          <div>
            .left-bottom::-webkit-scrollbar-thumb:hover { // background: #333; }
          </div>
        </div>
      </el-collapse-item>
      <el-collapse-item title="实现一个0.5px的线" name="2">
        <div>
          <div class="warning">.test是.left和.right的父元素盒子</div>
          .test {<br />
          height: 15px;<br />
          background: #000;<br />
          display: flex;<br />
          .left {<br />
          height: 15px;<br />
          width: 200px;<br />
          background: blue;<br />
          transform: translateY(50%);<br />
          }<br />
          .right {<br />
          width: 200px;<br />
          height: 15px;<br />
          background: green;<br />
          }<br />
          }<br />
        </div>
      </el-collapse-item>
      <el-collapse-item title="css的定位" name="3">
        <div>
          1、固定定位( position: fixed)：根据浏览器窗口进行定位，会脱离文档流；
        </div>
        <div>
          2、相对定位( position:
          relative)：根据自身所处位置进行定位，不会脱离文档流；
        </div>
        <div>
          3、绝对定位( position:
          absolute)：根据拥有position:relative属性的父节点进行定位(子绝父相)，不会脱离文档流；
        </div>
      </el-collapse-item>
      <el-collapse-item title="怪异盒模型和标准盒模型" name="4">
        <div>1、怪异盒模型：盒子的宽高包括border、padding</div>
        <div>2、标准盒模型：盒子的宽高不包括border、padding</div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "4",
    };
  },
};
</script>
<style lang="less" scoped>
.warning {
  color: #e6a23c;
}
</style>
