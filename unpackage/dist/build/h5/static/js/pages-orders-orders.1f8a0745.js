(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-orders-orders"],{"0a74":function(t,e,n){var r=n("4b22");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n("4f06").default;i("21fdd518",r,!0,{sourceMap:!1,shadowMode:!1})},"0b04":function(t,e,n){var r=n("69b0");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n("4f06").default;i("47a4d280",r,!0,{sourceMap:!1,shadowMode:!1})},"24fd":function(t,e,n){"use strict";n.r(e);var r=n("c961"),i=n("4025");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("d53d");var a=n("f0c5"),s=Object(a["a"])(i["default"],r["b"],r["c"],!1,null,"350e8d74",null,!1,r["a"],void 0);e["default"]=s.exports},4025:function(t,e,n){"use strict";n.r(e);var r=n("e69f"),i=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},"4b22":function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.segmented-control[data-v-331973e9]{display:flex;box-sizing:border-box;flex-direction:row;height:36px;overflow:hidden;cursor:pointer}.segmented-control__item[data-v-331973e9]{display:inline-flex;box-sizing:border-box;position:relative;flex:1;justify-content:center;align-items:center}.segmented-control__item--button[data-v-331973e9]{border-style:solid;border-top-width:1px;border-bottom-width:1px;border-right-width:1px;border-left-width:0}.segmented-control__item--button--first[data-v-331973e9]{border-left-width:1px;border-top-left-radius:5px;border-bottom-left-radius:5px}.segmented-control__item--button--last[data-v-331973e9]{border-top-right-radius:5px;border-bottom-right-radius:5px}.segmented-control__item--text[data-v-331973e9]{border-bottom-style:solid;border-bottom-width:2px;padding:6px 0}.segmented-control__text[data-v-331973e9]{font-size:14px;line-height:20px;text-align:center}',""]),t.exports=e},"4e6b":function(t,e,n){"use strict";var r=n("0a74"),i=n.n(r);i.a},5444:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3");var r={name:"UniSegmentedControl",emits:["clickItem"],props:{current:{type:Number,default:0},values:{type:Array,default:function(){return[]}},activeColor:{type:String,default:"#2979FF"},styleType:{type:String,default:"button"}},data:function(){return{currentIndex:0}},watch:{current:function(t){t!==this.currentIndex&&(this.currentIndex=t)}},created:function(){this.currentIndex=this.current},methods:{_onClick:function(t){this.currentIndex!==t&&(this.currentIndex=t,this.$emit("clickItem",{currentIndex:t}))}}};e.default=r},"69b0":function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-tag[data-v-350e8d74]{line-height:14px;font-size:12px;font-weight:200;padding:4px 7px;color:#fff;border-radius:3px;background-color:#8f939c;border-width:%?1?%;border-style:solid;border-color:#8f939c;cursor:pointer}.uni-tag--default[data-v-350e8d74]{font-size:12px}.uni-tag--default--inverted[data-v-350e8d74]{color:#8f939c;border-color:#8f939c}.uni-tag--small[data-v-350e8d74]{padding:2px 5px;font-size:12px;border-radius:2px}.uni-tag--mini[data-v-350e8d74]{padding:1px 3px;font-size:12px;border-radius:2px}.uni-tag--primary[data-v-350e8d74]{background-color:#2979ff;border-color:#2979ff;color:#fff}.uni-tag--success[data-v-350e8d74]{color:#fff;background-color:#18bc37;border-color:#18bc37}.uni-tag--warning[data-v-350e8d74]{color:#fff;background-color:#f3a73f;border-color:#f3a73f}.uni-tag--error[data-v-350e8d74]{color:#fff;background-color:#e43d33;border-color:#e43d33}.uni-tag--primary--inverted[data-v-350e8d74]{color:#2979ff;border-color:#2979ff}.uni-tag--success--inverted[data-v-350e8d74]{color:#18bc37;border-color:#18bc37}.uni-tag--warning--inverted[data-v-350e8d74]{color:#f3a73f;border-color:#f3a73f}.uni-tag--error--inverted[data-v-350e8d74]{color:#e43d33;border-color:#e43d33}.uni-tag--inverted[data-v-350e8d74]{background-color:#fff}.uni-tag--circle[data-v-350e8d74]{border-radius:15px!important}.uni-tag--mark[data-v-350e8d74]{border-top-left-radius:0!important;border-bottom-left-radius:0!important;border-top-right-radius:15px!important;border-bottom-right-radius:15px!important}.uni-tag--disabled[data-v-350e8d74]{opacity:.5;cursor:not-allowed}.uni-tag-text[data-v-350e8d74]{color:#fff;font-size:14px}.uni-tag-text--primary[data-v-350e8d74]{color:#2979ff}.uni-tag-text--success[data-v-350e8d74]{color:#18bc37}.uni-tag-text--warning[data-v-350e8d74]{color:#f3a73f}.uni-tag-text--error[data-v-350e8d74]{color:#e43d33}.uni-tag-text--small[data-v-350e8d74]{font-size:12px}',""]),t.exports=e},"80f9":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}));var r={uniSegmentedControl:n("eca7").default,uniTag:n("24fd").default,uniIcons:n("b09a").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticStyle:{padding:"20rpx"}},[n("v-uni-view",{staticStyle:{"margin-bottom":"20rpx"}},[n("uni-segmented-control",{attrs:{current:t.current,values:t.items,styleType:"text",activeColor:"#006eff"},on:{clickItem:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickItem.apply(void 0,arguments)}}})],1),n("v-uni-view",t._l(t.ordersList,(function(e){return n("v-uni-view",{key:e.id,staticClass:"box",staticStyle:{"margin-bottom":"10rpx"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goDetail(e.id)}}},[n("v-uni-view",{staticStyle:{display:"flex","align-items":"center","margin-bottom":"30rpx"}},["代拿快递"===e.type?n("uni-tag",{attrs:{text:"快递",type:"primary",size:"mini"}}):t._e(),"代取餐品"===e.type?n("uni-tag",{attrs:{text:"餐品",type:"success",size:"mini"}}):t._e(),"代买零食"===e.type?n("uni-tag",{attrs:{text:"零食",type:"warning",size:"mini"}}):t._e(),"代送鲜花"===e.type?n("uni-tag",{attrs:{text:"鲜花",type:"error",size:"mini"}}):t._e(),n("v-uni-view",{staticStyle:{"font-size":"32rpx","margin-left":"10rpx",flex:"1"}},[t._v(t._s(e.name))]),n("v-uni-view",[n("v-uni-text",{staticStyle:{color:"#666"}},[t._v("跑腿费")]),n("v-uni-text",{staticStyle:{"font-size":"36rpx",color:"red"}},[t._v("￥"+t._s(e.price))])],1)],1),n("v-uni-view",{staticStyle:{display:"flex"}},[n("v-uni-view",{staticStyle:{flex:"1"}},["待接单"===e.status||"待送达"===e.status||"待收货"===e.status?n("v-uni-text",{staticStyle:{"margin-right":"20rpx"}},[t._v("已下单"+t._s(e.minutes)+"分钟")]):t._e(),"已取消"===e.status?n("v-uni-text",{staticStyle:{color:"#888"}},[t._v(t._s(e.status))]):t._e(),"待接单"===e.status?n("v-uni-text",{staticStyle:{color:"orange"}},[t._v(t._s(e.status))]):t._e(),"待送达"===e.status?n("v-uni-text",{staticStyle:{color:"dodgerblue"}},[t._v(t._s(e.status))]):t._e(),"待收货"===e.status?n("v-uni-text",{staticStyle:{color:"mediumpurple"}},[t._v(t._s(e.status))]):t._e(),"待评价"===e.status?n("v-uni-text",{staticStyle:{color:"indianred"}},[t._v(t._s(e.status))]):t._e(),"已完成"===e.status?n("v-uni-text",{staticStyle:{color:"#18bc37"}},[t._v(t._s(e.status))]):t._e()],1),n("v-uni-view",{staticStyle:{flex:"1","text-align":"right"}},["待接单"===e.status?n("uni-tag",{attrs:{text:"取消订单",type:"error"},nativeOn:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.changeStatus(e,"已取消")}}}):t._e(),"待收货"===e.status?n("uni-tag",{attrs:{text:"确认收货",type:"primary"},nativeOn:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.changeStatus(e,"待评价")}}}):t._e(),"待评价"===e.status?n("uni-tag",{attrs:{text:"评价",type:"warning"},nativeOn:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.goComment(e.id)}}}):t._e(),"已取消"===e.status||"已完成"===e.status?n("v-uni-view",{staticStyle:{width:"fit-content",display:"inline-block"},nativeOn:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.deleteOrder(e.id)}}},[n("uni-icons",{staticStyle:{position:"relative",top:"2rpx"},attrs:{type:"trash",size:"16",color:"#888"}}),n("v-uni-text",{staticStyle:{color:"#888","font-size":"24rpx"}},[t._v("删除")])],1):t._e()],1)],1)],1)})),1)],1)},o=[]},a347:function(t,e,n){"use strict";n.r(e);var r=n("5444"),i=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},c939:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("e9c4");var r={data:function(){return{ordersList:[],current:0,items:["全部订单","待接单","待送达","待收货","待评价"],user:uni.getStorageSync("xm-user"),status:null}},onShow:function(){this.loadOrders()},methods:{goComment:function(t){uni.navigateTo({url:"/pages/comment/comment?orderId="+t})},deleteOrder:function(t){var e=this;this.$request.del("/orders/delete/"+t).then((function(t){"200"===t.code?(uni.showToast({icon:"success",title:"操作成功"}),e.loadOrders()):uni.showToast({icon:"error",title:t.msg})}))},changeStatus:function(t,e){var n=this,r=JSON.parse(JSON.stringify(t));r.status=e,this.$request.put("/orders/update",r).then((function(t){"200"===t.code?(uni.showToast({icon:"success",title:"操作成功"}),n.loadOrders()):uni.showToast({icon:"error",title:t.msg})}))},goDetail:function(t){uni.navigateTo({url:"/pages/detail/detail?orderId="+t})},onClickItem:function(t){if(this.current!=t.currentIndex){switch(this.current=t.currentIndex,this.current){case 0:this.status=null;break;case 1:this.status="待接单";break;case 2:this.status="待送达";break;case 3:this.status="待收货";break;case 4:this.status="待评价";break}this.loadOrders()}},loadOrders:function(){var t=this,e={userId:this.user.id};this.status&&(e.status=this.status),this.$request.get("/orders/selectAll",e).then((function(e){t.ordersList=e.data||[]}))}}};e.default=r},c961:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.text?n("v-uni-text",{staticClass:"uni-tag",class:t.classes,style:t.customStyle,on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[t._v(t._s(t.text))]):t._e()},i=[]},d53d:function(t,e,n){"use strict";var r=n("0b04"),i=n.n(r);i.a},e628:function(t,e,n){"use strict";n.r(e);var r=n("c939"),i=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},e69f:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={name:"UniTag",emits:["click"],props:{type:{type:String,default:"default"},size:{type:String,default:"normal"},text:{type:String,default:""},disabled:{type:[Boolean,String],default:!1},inverted:{type:[Boolean,String],default:!1},circle:{type:[Boolean,String],default:!1},mark:{type:[Boolean,String],default:!1},customStyle:{type:String,default:""}},computed:{classes:function(){var t=this.type,e=this.disabled,n=this.inverted,r=this.circle,i=this.mark,o=this.size,a=this.isTrue,s=["uni-tag--"+t,"uni-tag--"+o,a(e)?"uni-tag--disabled":"",a(n)?"uni-tag--"+t+"--inverted":"",a(r)?"uni-tag--circle":"",a(i)?"uni-tag--mark":"",a(n)?"uni-tag--inverted uni-tag-text--"+t:"","small"===o?"uni-tag-text--small":""];return s.join(" ")}},methods:{isTrue:function(t){return!0===t||"true"===t},onClick:function(){this.isTrue(this.disabled)||this.$emit("click")}}};e.default=r},e856:function(t,e,n){"use strict";n.r(e);var r=n("80f9"),i=n("e628");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);var a=n("f0c5"),s=Object(a["a"])(i["default"],r["b"],r["c"],!1,null,"0d13fbc6",null,!1,r["a"],void 0);e["default"]=s.exports},eca7:function(t,e,n){"use strict";n.r(e);var r=n("f607"),i=n("a347");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("4e6b");var a=n("f0c5"),s=Object(a["a"])(i["default"],r["b"],r["c"],!1,null,"331973e9",null,!1,r["a"],void 0);e["default"]=s.exports},f607:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"segmented-control",class:["text"===t.styleType?"segmented-control--text":"segmented-control--button"],style:{borderColor:"text"===t.styleType?"":t.activeColor}},t._l(t.values,(function(e,r){return n("v-uni-view",{key:r,staticClass:"segmented-control__item",class:["text"===t.styleType?"":"segmented-control__item--button",r===t.currentIndex&&"button"===t.styleType?"segmented-control__item--button--active":"",0===r&&"button"===t.styleType?"segmented-control__item--button--first":"",r===t.values.length-1&&"button"===t.styleType?"segmented-control__item--button--last":""],style:{backgroundColor:r===t.currentIndex&&"button"===t.styleType?t.activeColor:"",borderColor:r===t.currentIndex&&"text"===t.styleType||"button"===t.styleType?t.activeColor:"transparent"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._onClick(r)}}},[n("v-uni-view",[n("v-uni-text",{staticClass:"segmented-control__text",class:"text"===t.styleType&&r===t.currentIndex?"segmented-control__item--text":"",style:{color:r===t.currentIndex?"text"===t.styleType?t.activeColor:"#fff":"text"===t.styleType?"#000":t.activeColor}},[t._v(t._s(e))])],1)],1)})),1)},i=[]}}]);