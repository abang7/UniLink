(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{"0209":function(e,r,n){"use strict";n("7a82"),Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var t={data:function(){return{form:{role:"USER"},rules:{username:{rules:[{required:!0,errorMessage:"请输入账号"},{minLength:3,maxLength:10,errorMessage:"账号长度在 {minLength} 到 {maxLength} 个字符"}]},password:{rules:[{required:!0,errorMessage:"请输入密码"},{minLength:3,maxLength:10,errorMessage:"密码长度在 {minLength} 到 {maxLength} 个字符"}]}}}},methods:{login:function(){var e=this;this.$refs.form.validate().then((function(r){e.$request.post("/login",e.form).then((function(e){"200"===e.code?(uni.showToast({icon:"success",title:"登录成功"}),uni.setStorageSync("xm-user",e.data),uni.switchTab({url:"/pages/index/index"})):uni.showToast({icon:"error",title:e.msg})}))})).catch((function(e){console.log("表单错误信息：",e)}))}}};r.default=t},8010:function(e,r,n){"use strict";n.d(r,"b",(function(){return i})),n.d(r,"c",(function(){return o})),n.d(r,"a",(function(){return t}));var t={uniForms:n("b632").default,uniFormsItem:n("cc5c").default,uniEasyinput:n("c747").default},i=function(){var e=this,r=e.$createElement,n=e._self._c||r;return n("v-uni-view",{staticStyle:{padding:"40rpx"}},[n("v-uni-view",{staticStyle:{padding:"20rpx",margin:"80rpx 0","background-color":"#fff","box-shadow":"0 2rpx 10rpx rgba(0,0,0,.1)","border-radius":"10rpx"}},[n("v-uni-view",{staticStyle:{margin:"50rpx 30rpx","font-size":"40rpx"}},[e._v("欢迎登录")]),n("uni-forms",{ref:"form",attrs:{modelValue:e.form,rules:e.rules,validateTrigger:"blur"}},[n("uni-forms-item",{attrs:{name:"username",required:!0}},[n("uni-easyinput",{attrs:{prefixIcon:"person",placeholder:"请输入账号"},model:{value:e.form.username,callback:function(r){e.$set(e.form,"username",r)},expression:"form.username"}})],1),n("uni-forms-item",{attrs:{name:"password",required:!0}},[n("uni-easyinput",{attrs:{type:"password",prefixIcon:"locked",placeholder:"请输入密码"},model:{value:e.form.password,callback:function(r){e.$set(e.form,"password",r)},expression:"form.password"}})],1),n("uni-forms-item",[n("v-uni-button",{staticStyle:{"background-color":"#006eff","border-color":"#006eff",color:"white",height:"70rpx","line-height":"70rpx"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.login()}}},[e._v("登 录")])],1),n("uni-forms-item",[n("v-uni-view",{staticStyle:{"text-align":"right"}},[e._v("还没有账号？去"),n("v-uni-navigator",{staticStyle:{display:"inline-block",color:"dodgerblue","margin-left":"4rpx"},attrs:{url:"/pages/register/register"}},[e._v("注册")])],1)],1)],1)],1)],1)},o=[]},a69a:function(e,r,n){"use strict";n.r(r);var t=n("8010"),i=n("b1a7");for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(r,e,(function(){return i[e]}))}(o);var a=n("f0c5"),s=Object(a["a"])(i["default"],t["b"],t["c"],!1,null,"53500e1c",null,!1,t["a"],void 0);r["default"]=s.exports},b1a7:function(e,r,n){"use strict";n.r(r);var t=n("0209"),i=n.n(t);for(var o in t)["default"].indexOf(o)<0&&function(e){n.d(r,e,(function(){return t[e]}))}(o);r["default"]=i.a}}]);