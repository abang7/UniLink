(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-detail-detail"],{"26a9":function(t,i,e){"use strict";e.r(i);var s=e("d433"),n=e("324d");for(var a in n)["default"].indexOf(a)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(a);e("89b4");var v=e("f0c5"),l=Object(v["a"])(n["default"],s["b"],s["c"],!1,null,"53591ac1",null,!1,s["a"],void 0);i["default"]=l.exports},"324d":function(t,i,e){"use strict";e.r(i);var s=e("8499"),n=e.n(s);for(var a in s)["default"].indexOf(a)<0&&function(t){e.d(i,t,(function(){return s[t]}))}(a);i["default"]=n.a},8499:function(t,i,e){"use strict";e("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s={data:function(){return{orders:{}}},onLoad:function(t){this.load(t.orderId)},methods:{goBack:function(){uni.navigateBack()},load:function(t){var i=this;this.$request.get("/orders/selectById/"+t).then((function(t){i.orders=t.data||{}}))}}};i.default=s},"89b4":function(t,i,e){"use strict";var s=e("d687"),n=e.n(s);n.a},d433:function(t,i,e){"use strict";e.d(i,"b",(function(){return s})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){}));var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticStyle:{padding:"20rpx"}},[t.orders.id?e("v-uni-view",{staticClass:"box"},[e("v-uni-view",{staticClass:"line",staticStyle:{"margin-bottom":"40rpx"}},[e("v-uni-view",{staticClass:"line-title"},[t._v("订单编号：")]),e("v-uni-view",{staticClass:"line-content"},[t._v(t._s(t.orders.orderNo))])],1),e("v-uni-view",{staticClass:"line"},[e("v-uni-view",{staticClass:"line-title"},[t._v("取货地址：")]),e("v-uni-view",{staticClass:"line-content"},[t._v(t._s(t.orders.address.address+t.orders.address.doorNo))])],1),e("v-uni-view",{staticClass:"line"},[e("v-uni-view",{staticClass:"line-title"},[t._v("取货联系人：")]),e("v-uni-view",{staticClass:"line-content"},[t._v(t._s(t.orders.address.userName))])],1),e("v-uni-view",{staticClass:"line",staticStyle:{"margin-bottom":"40rpx"}},[e("v-uni-view",{staticClass:"line-title"},[t._v("取货电话：")]),e("v-uni-view",{staticClass:"line-content"},[t._v(t._s(t.orders.address.phone))])],1),e("v-uni-view",{staticClass:"line"},[e("v-uni-view",{staticClass:"line-title"},[t._v("收货地址：")]),e("v-uni-view",{staticClass:"line-content"},[t._v(t._s(t.orders.targetAddress.address+t.orders.targetAddress.doorNo))])],1),e("v-uni-view",{staticClass:"line"},[e("v-uni-view",{staticClass:"line-title"},[t._v("收货联系人：")]),e("v-uni-view",{staticClass:"line-content"},[t._v(t._s(t.orders.targetAddress.userName))])],1),e("v-uni-view",{staticClass:"line",staticStyle:{"margin-bottom":"40rpx"}},[e("v-uni-view",{staticClass:"line-title"},[t._v("收货电话：")]),e("v-uni-view",{staticClass:"line-content"},[t._v(t._s(t.orders.targetAddress.phone))])],1),e("v-uni-view",{staticClass:"line"},[e("v-uni-view",{staticClass:"line-title"},[t._v("物品名称：")]),e("v-uni-view",{staticClass:"line-content"},[t._v(t._s(t.orders.name))])],1),e("v-uni-view",{staticClass:"line"},[e("v-uni-view",{staticClass:"line-title"},[t._v("物品描述：")]),e("v-uni-view",{staticClass:"line-content"},[t._v(t._s(t.orders.descr))])],1),e("v-uni-view",{staticClass:"line"},[e("v-uni-view",{staticClass:"line-title"},[t._v("物品图片：")]),e("v-uni-view",{staticClass:"line-content"},[e("v-uni-image",{staticStyle:{width:"180rpx"},attrs:{src:t.orders.img,mode:"widthFix"}})],1)],1),e("v-uni-view",{staticClass:"line"},[e("v-uni-view",{staticClass:"line-title"},[t._v("物品类型：")]),e("v-uni-view",{staticClass:"line-content"},[t._v(t._s(t.orders.type))])],1),e("v-uni-view",{staticClass:"line"},[e("v-uni-view",{staticClass:"line-title"},[t._v("物品重量：")]),e("v-uni-view",{staticClass:"line-content"},[t._v(t._s(t.orders.weight)+" kg")])],1),e("v-uni-view",{staticClass:"line"},[e("v-uni-view",{staticClass:"line-title"},[t._v("小费：")]),e("v-uni-view",{staticClass:"line-content",staticStyle:{color:"red"}},[t._v("￥"+t._s(t.orders.weight))])],1),e("v-uni-view",{staticClass:"line"},[e("v-uni-view",{staticClass:"line-title"},[t._v("下单时间：")]),e("v-uni-view",{staticClass:"line-content"},[t._v("￥"+t._s(t.orders.time))])],1),e("v-uni-view",{staticClass:"line",staticStyle:{"margin-bottom":"40rpx"}},[e("v-uni-view",{staticClass:"line-title"},[t._v("备注：")]),e("v-uni-view",{staticClass:"line-content"},[t._v(t._s(t.orders.comment))])],1),t.orders.acceptId?e("v-uni-view",[e("v-uni-view",{staticClass:"line"},[e("v-uni-view",{staticClass:"line-title"},[t._v("接单骑手：")]),e("v-uni-view",{staticClass:"line-content"},[t._v(t._s(t.orders.acceptUser.name))])],1),e("v-uni-view",{staticClass:"line"},[e("v-uni-view",{staticClass:"line-title"},[t._v("骑手电话：")]),e("v-uni-view",{staticClass:"line-content"},[t._v(t._s(t.orders.acceptUser.phone))])],1),e("v-uni-view",{staticClass:"line"},[e("v-uni-view",{staticClass:"line-title"},[t._v("骑手照片：")]),e("v-uni-view",{staticClass:"line-content"},[e("v-uni-image",{staticStyle:{width:"180rpx"},attrs:{src:t.orders.acceptUser.avatar,mode:"widthFix"}})],1)],1)],1):t._e(),e("v-uni-view",{staticStyle:{"text-align":"center"}},[e("v-uni-button",{attrs:{type:"primary"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goBack.apply(void 0,arguments)}}},[t._v("确 定")])],1)],1):t._e()],1)},n=[]},d687:function(t,i,e){var s=e("f65e");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var n=e("4f06").default;n("41613c84",s,!0,{sourceMap:!1,shadowMode:!1})},f65e:function(t,i,e){var s=e("24fb");i=s(!1),i.push([t.i,".line[data-v-53591ac1]{display:flex;margin-bottom:%?10?%}.line-title[data-v-53591ac1]{width:%?200?%;font-weight:700;text-align:right}.line-content[data-v-53591ac1]{flex:1}",""]),t.exports=i}}]);