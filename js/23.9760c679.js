"use strict";(self["webpackChunkdemo_vue2"]=self["webpackChunkdemo_vue2"]||[]).push([[23],{9023:function(e,t,a){a.r(t),a.d(t,{default:function(){return o}});var r=function(){var e=this,t=e._self._c;return t("div",[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData}},[t("el-table-column",{attrs:{prop:"name",label:"名字",width:"180"}}),t("el-table-column",{attrs:{prop:"url",label:"网址",width:"500"},scopedSlots:e._u([{key:"default",fn:function(a){return e._l(a.row.url,(function(a){return t("div",{key:a},[t("el-link",{attrs:{href:a,target:"_blank",type:"primary"}},[e._v(e._s(a))])],1)}))}}])}),t("el-table-column",{attrs:{prop:"advantages",label:"优点"},scopedSlots:e._u([{key:"default",fn:function(a){return e._l(a.row.advantages,(function(a){return t("div",{key:a},[e._v(e._s(a))])}))}}])})],1),t("div",{staticClass:"commonly"},[e._v("常用代码")]),t("el-collapse",{staticClass:"collapse",attrs:{accordion:""},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[t("el-collapse-item",{attrs:{title:"根据时间排序",name:"1"}},[t("div",{staticClass:"warning"},[e._v("(prop)--对象数组排序的键")]),t("div",{staticClass:"warning"},[e._v(' (align)--排序方式，"positive"正序，"inverted"倒序 ')]),t("div",[e._v(" function compare(prop,align){ "),t("br"),e._v(" return function(a,b){"),t("br"),e._v(" var value1=a[prop];"),t("br"),e._v(" var value2=b[prop];"),t("br"),e._v(' if(align=="positive"){//正序'),t("br"),e._v(" return new Date(value1)-new Date(value2);"),t("br"),e._v(' }else if(align=="inverted"){//倒序'),t("br"),e._v(" return new Date(value2)-new Date(value1);"),t("br"),e._v(" }"),t("br"),e._v(" }"),t("br"),e._v(" }"),t("br"),e._v(" data.sort(compare('time','inverted'));"),t("br")])]),t("el-collapse-item",{attrs:{title:"map--根据某个键值得到一个新数组",name:"2"}},[t("div",[e._v(" let map = new Map();"),t("br"),e._v(" res.data.map((v) => {"),t("br"),e._v(" let key = v.time;"),t("br"),e._v(" let list = map.get(key);"),t("br"),e._v(" if (!list) {"),t("br"),e._v(" list = new Array();"),t("br"),e._v(" }"),t("br"),e._v(" list.push(v);"),t("br"),e._v(" map.set(key, list);"),t("br"),e._v(" });"),t("br")])])],1)],1)},l=[],n={data(){return{activeName:"1",tableData:[{name:"原型和原型链",url:["https://blog.csdn.net/weixin_56505845/article/details/119683904"],advantages:["构造函数是使用了new关键字的函数，用来创建对象，所有函数都是Function()的实例","原型对象是用来存放实例对象的公有属性和公有方法的一个公共对象，所有原型对象都是Object()的实例","原型链又叫隐式原型链，是由__proto__属性串联起来，原型链的尽头是Object.prototype"]}]}}},i=n,v=a(1001),s=(0,v.Z)(i,r,l,!1,null,"141f2f3e",null),o=s.exports}}]);
//# sourceMappingURL=23.9760c679.js.map