"use strict";(self["webpackChunkdemo_vue2"]=self["webpackChunkdemo_vue2"]||[]).push([[144],{6144:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var n=function(){var e=this,t=e._self._c;return t("div",[t("el-pagination",{attrs:{"current-page":e.page.pageNo,"page-sizes":e.PAGE_SIZES,"page-size":e.page.limit,layout:e.LAYOUT,total:e.page.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)},i=[],r=a(5359),u={mixins:[r.r],data(){return{page:{total:5}}},mounted(){},methods:{queryList(){this.page.total+=10}}},s=u,l=a(1001),o=(0,l.Z)(s,n,i,!1,null,null,null),g=o.exports},5359:function(e,t,a){a.d(t,{r:function(){return n}});const n={data(){return{page:{pageNo:1,limit:10,total:0},tableList:[],loading:!1,PAGE_SIZES:[5,10,20,30,50,100],LAYOUT:"total, sizes, prev, pager, next, jumper"}},methods:{queryList(){},handleCurrentChange(e){this.page.pageNo=e,this.queryList()},handleSizeChange(e){this.page.pageNo=1,this.page.limit=e,this.queryList()}}}}}]);
//# sourceMappingURL=144.2e49ef82.js.map