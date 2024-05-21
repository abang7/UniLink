(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-certification-certification"],{"0b04":function(e,t,r){var a=r("69b0");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=r("4f06").default;i("47a4d280",a,!0,{sourceMap:!1,shadowMode:!1})},"0cb9":function(e,t,r){"use strict";r("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{user:uni.getStorageSync("xm-user"),form:{},imgs:[{url:""}],imgs1:[{url:""}],imgs2:[{url:""}],imageStyles:{height:80,width:80,border:{color:"#eee",width:"1px",style:"solid"}},rules:{name:{rules:[{required:!0,errorMessage:"请填写姓名"}]},phone:{rules:[{required:!0,errorMessage:"请填写手机号码"}]},cardNo:{rules:[{required:!0,errorMessage:"请填写身份证号码"}]},address:{rules:[{required:!0,errorMessage:"请填写常住地址"}]}}}},onLoad:function(){this.load()},methods:{load:function(){var e=this;this.$request.get("/certification/selectByUserId/"+this.user.id).then((function(t){e.form=t.data||{},e.imgs[0].url=e.form.avatar,e.imgs1[0].url=e.form.card1,e.imgs2[0].url=e.form.card2}))},save:function(){var e=this;this.form.userId=this.user.id,this.$refs.formRef.validate().then((function(t){e.$request.request({url:e.form.id?"certification/update":"/certification/add",method:e.form.id?"PUT":"POST",data:e.form}).then((function(e){"200"===e.code?(uni.showToast({title:"操作成功"}),setTimeout((function(){uni.navigateBack()}),500)):uni.showToast({icon:"error",title:e.msg})}))}))},handleAvatarUploadSuccess:function(e){var t=this,r=e.tempFilePaths[0];uni.uploadFile({url:t.$baseUrl+"/files/upload",filePath:r,name:"file",success:function(e){var r=JSON.parse(e.data||"{}").data;t.form.avatar=r}})},handleCard1UploadSuccess:function(e){var t=this,r=e.tempFilePaths[0];uni.uploadFile({url:t.$baseUrl+"/files/upload",filePath:r,name:"file",success:function(e){var r=JSON.parse(e.data||"{}").data;t.form.card1=r}})},handleCard2UploadSuccess:function(e){var t=this,r=e.tempFilePaths[0];uni.uploadFile({url:t.$baseUrl+"/files/upload",filePath:r,name:"file",success:function(e){var r=JSON.parse(e.data||"{}").data;t.form.card2=r}})}}};t.default=a},"0ed5":function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return n})),r.d(t,"a",(function(){return a}));var a={uniForms:r("b632").default,uniFormsItem:r("cc5c").default,uniEasyinput:r("c747").default,uniFilePicker:r("a503").default,uniTag:r("24fd").default},i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-uni-view",{staticStyle:{padding:"20rpx"}},[r("v-uni-view",{staticClass:"box"},[r("uni-forms",{ref:"formRef",attrs:{modelValue:e.form,rules:e.rules,"label-width":"180rpx","label-align":"right"}},[r("uni-forms-item",{attrs:{label:"姓名",name:"name",required:!0}},[r("uni-easyinput",{attrs:{type:"text",placeholder:"请输入姓名"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),r("uni-forms-item",{attrs:{label:"本人照片",name:"avatar",required:!0}},[r("uni-file-picker",{attrs:{limit:"1","image-styles":e.imageStyles,"del-icon":!1,"disable-preview":!0,fileMediatype:"image"},on:{select:function(t){arguments[0]=t=e.$handleEvent(t),e.handleAvatarUploadSuccess.apply(void 0,arguments)}},model:{value:e.imgs,callback:function(t){e.imgs=t},expression:"imgs"}})],1),r("uni-forms-item",{attrs:{label:"联系方式",name:"phone",required:!0}},[r("uni-easyinput",{attrs:{type:"text",placeholder:"请输入联系方式"},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1),r("uni-forms-item",{attrs:{label:"身份证号码",name:"cardNo",required:!0}},[r("uni-easyinput",{attrs:{type:"text",placeholder:"请输入身份证号码"},model:{value:e.form.cardNo,callback:function(t){e.$set(e.form,"cardNo",t)},expression:"form.cardNo"}})],1),r("uni-forms-item",{attrs:{label:"身份证正面",name:"card1",required:!0}},[r("uni-file-picker",{attrs:{limit:"1","image-styles":e.imageStyles,"del-icon":!1,"disable-preview":!0,fileMediatype:"image"},on:{select:function(t){arguments[0]=t=e.$handleEvent(t),e.handleCard1UploadSuccess.apply(void 0,arguments)}},model:{value:e.imgs1,callback:function(t){e.imgs1=t},expression:"imgs1"}})],1),r("uni-forms-item",{attrs:{label:"身份证反面",name:"card2",required:!0}},[r("uni-file-picker",{attrs:{limit:"1","image-styles":e.imageStyles,"del-icon":!1,"disable-preview":!0,fileMediatype:"image"},on:{select:function(t){arguments[0]=t=e.$handleEvent(t),e.handleCard2UploadSuccess.apply(void 0,arguments)}},model:{value:e.imgs2,callback:function(t){e.imgs2=t},expression:"imgs2"}})],1),r("uni-forms-item",{attrs:{label:"常住地址",name:"address",required:!0}},[r("uni-easyinput",{attrs:{type:"text",placeholder:"请输入常住地址"},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1),r("uni-forms-item",{attrs:{label:"审核状态",name:"status"}},[r("v-uni-view",{staticStyle:{"padding-top":"15rpx"}},[e.form.status?e._e():r("uni-tag",{attrs:{type:"default",text:"待申请"}}),"待审核"===e.form.status?r("uni-tag",{attrs:{type:"warning",text:"待审核"}},[e._v("待审核")]):e._e(),"通过"===e.form.status?r("uni-tag",{attrs:{type:"success",text:"通过"}},[e._v("通过")]):e._e(),"拒绝"===e.form.status?r("uni-tag",{attrs:{type:"error",text:"拒绝"}},[e._v("拒绝")]):e._e()],1)],1),e.form.reason?r("uni-forms-item",{attrs:{label:"审核理由",name:"reason"}},[r("v-uni-view",{staticStyle:{"padding-top":"15rpx"}},[e._v(e._s(e.form.reason))])],1):e._e()],1),r("v-uni-view",[r("v-uni-button",{attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.save.apply(void 0,arguments)}}},[e._v("确 定")])],1)],1)],1)},n=[]},"14f5":function(e,t,r){"use strict";r.r(t);var a=r("0cb9"),i=r.n(a);for(var n in a)["default"].indexOf(n)<0&&function(e){r.d(t,e,(function(){return a[e]}))}(n);t["default"]=i.a},"24fd":function(e,t,r){"use strict";r.r(t);var a=r("c961"),i=r("4025");for(var n in i)["default"].indexOf(n)<0&&function(e){r.d(t,e,(function(){return i[e]}))}(n);r("d53d");var o=r("f0c5"),s=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"350e8d74",null,!1,a["a"],void 0);t["default"]=s.exports},4025:function(e,t,r){"use strict";r.r(t);var a=r("e69f"),i=r.n(a);for(var n in a)["default"].indexOf(n)<0&&function(e){r.d(t,e,(function(){return a[e]}))}(n);t["default"]=i.a},"69b0":function(e,t,r){var a=r("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-tag[data-v-350e8d74]{line-height:14px;font-size:12px;font-weight:200;padding:4px 7px;color:#fff;border-radius:3px;background-color:#8f939c;border-width:%?1?%;border-style:solid;border-color:#8f939c;cursor:pointer}.uni-tag--default[data-v-350e8d74]{font-size:12px}.uni-tag--default--inverted[data-v-350e8d74]{color:#8f939c;border-color:#8f939c}.uni-tag--small[data-v-350e8d74]{padding:2px 5px;font-size:12px;border-radius:2px}.uni-tag--mini[data-v-350e8d74]{padding:1px 3px;font-size:12px;border-radius:2px}.uni-tag--primary[data-v-350e8d74]{background-color:#2979ff;border-color:#2979ff;color:#fff}.uni-tag--success[data-v-350e8d74]{color:#fff;background-color:#18bc37;border-color:#18bc37}.uni-tag--warning[data-v-350e8d74]{color:#fff;background-color:#f3a73f;border-color:#f3a73f}.uni-tag--error[data-v-350e8d74]{color:#fff;background-color:#e43d33;border-color:#e43d33}.uni-tag--primary--inverted[data-v-350e8d74]{color:#2979ff;border-color:#2979ff}.uni-tag--success--inverted[data-v-350e8d74]{color:#18bc37;border-color:#18bc37}.uni-tag--warning--inverted[data-v-350e8d74]{color:#f3a73f;border-color:#f3a73f}.uni-tag--error--inverted[data-v-350e8d74]{color:#e43d33;border-color:#e43d33}.uni-tag--inverted[data-v-350e8d74]{background-color:#fff}.uni-tag--circle[data-v-350e8d74]{border-radius:15px!important}.uni-tag--mark[data-v-350e8d74]{border-top-left-radius:0!important;border-bottom-left-radius:0!important;border-top-right-radius:15px!important;border-bottom-right-radius:15px!important}.uni-tag--disabled[data-v-350e8d74]{opacity:.5;cursor:not-allowed}.uni-tag-text[data-v-350e8d74]{color:#fff;font-size:14px}.uni-tag-text--primary[data-v-350e8d74]{color:#2979ff}.uni-tag-text--success[data-v-350e8d74]{color:#18bc37}.uni-tag-text--warning[data-v-350e8d74]{color:#f3a73f}.uni-tag-text--error[data-v-350e8d74]{color:#e43d33}.uni-tag-text--small[data-v-350e8d74]{font-size:12px}',""]),e.exports=t},"798c":function(e,t,r){"use strict";r.r(t);var a=r("0ed5"),i=r("14f5");for(var n in i)["default"].indexOf(n)<0&&function(e){r.d(t,e,(function(){return i[e]}))}(n);var o=r("f0c5"),s=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"92268cb4",null,!1,a["a"],void 0);t["default"]=s.exports},c961:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return i})),r.d(t,"a",(function(){}));var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.text?r("v-uni-text",{staticClass:"uni-tag",class:e.classes,style:e.customStyle,on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClick.apply(void 0,arguments)}}},[e._v(e._s(e.text))]):e._e()},i=[]},d53d:function(e,t,r){"use strict";var a=r("0b04"),i=r.n(a);i.a},e69f:function(e,t,r){"use strict";r("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={name:"UniTag",emits:["click"],props:{type:{type:String,default:"default"},size:{type:String,default:"normal"},text:{type:String,default:""},disabled:{type:[Boolean,String],default:!1},inverted:{type:[Boolean,String],default:!1},circle:{type:[Boolean,String],default:!1},mark:{type:[Boolean,String],default:!1},customStyle:{type:String,default:""}},computed:{classes:function(){var e=this.type,t=this.disabled,r=this.inverted,a=this.circle,i=this.mark,n=this.size,o=this.isTrue,s=["uni-tag--"+e,"uni-tag--"+n,o(t)?"uni-tag--disabled":"",o(r)?"uni-tag--"+e+"--inverted":"",o(a)?"uni-tag--circle":"",o(i)?"uni-tag--mark":"",o(r)?"uni-tag--inverted uni-tag-text--"+e:"","small"===n?"uni-tag-text--small":""];return s.join(" ")}},methods:{isTrue:function(e){return!0===e||"true"===e},onClick:function(){this.isTrue(this.disabled)||this.$emit("click")}}};t.default=a}}]);