(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-register-register"],{"4ae7":function(e,r,t){"use strict";t.d(r,"b",(function(){return i})),t.d(r,"c",(function(){return o})),t.d(r,"a",(function(){return n}));var n={uniForms:t("b632").default,uniFormsItem:t("cc5c").default,uniEasyinput:t("c747").default},i=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("v-uni-view",{staticStyle:{padding:"40rpx"}},[t("v-uni-view",{staticStyle:{padding:"20rpx",margin:"80rpx 0","background-color":"#fff","box-shadow":"0 2rpx 10rpx rgba(0,0,0,.1)","border-radius":"10rpx"}},[t("v-uni-view",{staticStyle:{margin:"50rpx 30rpx","font-size":"40rpx"}},[e._v("欢迎注册")]),t("uni-forms",{ref:"form",attrs:{modelValue:e.form,rules:e.rules,validateTrigger:"blur"}},[t("uni-forms-item",{attrs:{name:"username",required:!0}},[t("uni-easyinput",{attrs:{prefixIcon:"person",placeholder:"请输入账号"},model:{value:e.form.username,callback:function(r){e.$set(e.form,"username",r)},expression:"form.username"}})],1),t("uni-forms-item",{attrs:{name:"password",required:!0}},[t("uni-easyinput",{attrs:{type:"password",prefixIcon:"locked",placeholder:"请输入密码"},model:{value:e.form.password,callback:function(r){e.$set(e.form,"password",r)},expression:"form.password"}})],1),t("uni-forms-item",[t("v-uni-button",{staticStyle:{"background-color":"#006eff","border-color":"#006eff",color:"white",height:"70rpx","line-height":"70rpx"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.register()}}},[e._v("注 册")])],1),t("uni-forms-item",[t("v-uni-view",{staticStyle:{"text-align":"right"}},[e._v("已有账号？去"),t("v-uni-navigator",{staticStyle:{display:"inline-block",color:"dodgerblue","margin-left":"4rpx"},attrs:{url:"/pages/login/login"}},[e._v("登录")])],1)],1)],1)],1)],1)},o=[]},"938a":function(e,r,t){"use strict";t.r(r);var n=t("4ae7"),i=t("c8ec");for(var o in i)["default"].indexOf(o)<0&&function(e){t.d(r,e,(function(){return i[e]}))}(o);var a=t("f0c5"),s=Object(a["a"])(i["default"],n["b"],n["c"],!1,null,"3bf17591",null,!1,n["a"],void 0);r["default"]=s.exports},c41d:function(e,r,t){"use strict";t("7a82"),Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n={data:function(){return{form:{role:"USER"},rules:{username:{rules:[{required:!0,errorMessage:"请输入账号"},{minLength:3,maxLength:10,errorMessage:"账号长度在 {minLength} 到 {maxLength} 个字符"}]},password:{rules:[{required:!0,errorMessage:"请输入密码"},{minLength:3,maxLength:10,errorMessage:"密码长度在 {minLength} 到 {maxLength} 个字符"}]}}}},methods:{register:function(){var e=this;this.$refs.form.validate().then((function(r){e.$request.post("/register",e.form).then((function(e){"200"===e.code?(uni.showToast({icon:"success",title:"注册成功"}),setTimeout((function(){uni.navigateTo({url:"/pages/login/login"})}),500)):uni.showToast({icon:"error",title:e.msg})}))})).catch((function(e){console.log("表单错误信息：",e)}))}}};r.default=n},c8ec:function(e,r,t){"use strict";t.r(r);var n=t("c41d"),i=t.n(n);for(var o in n)["default"].indexOf(o)<0&&function(e){t.d(r,e,(function(){return n[e]}))}(o);r["default"]=i.a}}]);