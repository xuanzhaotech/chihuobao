webpackJsonp([23],{NGfA:function(e,n,t){n=e.exports=t("FZ+f")(!0),n.push([e.i,"\n.info[data-v-1a8c17a8] {\n  padding: 10px;\n  height: 100%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  background: #fff;\n}\n.info h1[data-v-1a8c17a8] {\n    font-size: 17px;\n    font-weight: 600;\n    margin: 20px;\n    text-align: center;\n}\n.info .el-form[data-v-1a8c17a8] {\n    width: 50%;\n    margin: 0 auto;\n}\n.info .el-form .el-rate[data-v-1a8c17a8] {\n      -webkit-transform: translateY(9px);\n              transform: translateY(9px);\n}\n","",{version:3,sources:["G:/WebstormProjects/Vue/chihuobao/src/pages/user/profile.vue"],names:[],mappings:";AACA;EACE,cAAc;EACd,aAAa;EACb,+BAA+B;UACvB,uBAAuB;EAC/B,iBAAiB;CAClB;AACD;IACI,gBAAgB;IAChB,iBAAiB;IACjB,aAAa;IACb,mBAAmB;CACtB;AACD;IACI,WAAW;IACX,eAAe;CAClB;AACD;MACM,mCAAmC;cAC3B,2BAA2B;CACxC",file:"profile.vue",sourcesContent:["\n.info[data-v-1a8c17a8] {\n  padding: 10px;\n  height: 100%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  background: #fff;\n}\n.info h1[data-v-1a8c17a8] {\n    font-size: 17px;\n    font-weight: 600;\n    margin: 20px;\n    text-align: center;\n}\n.info .el-form[data-v-1a8c17a8] {\n    width: 50%;\n    margin: 0 auto;\n}\n.info .el-form .el-rate[data-v-1a8c17a8] {\n      -webkit-transform: translateY(9px);\n              transform: translateY(9px);\n}\n"],sourceRoot:""}])},lUcd:function(e,n,t){"use strict";function a(e){t("wBOy")}Object.defineProperty(n,"__esModule",{value:!0});var o=t("Dd8w"),i=t.n(o),r=t("pN2o"),s=t("NYxO"),c={data:function(){return{info:{userName:"",avator:"",gender:"",acceptAddress:"",introduction:"",phone:""},types:[{label:"男",value:1},{label:"女",value:0}]}},computed:i()({},Object(s.c)("user",["userInfo"])),created:function(){this.initInfo()},methods:{initInfo:function(){var e=this,n=this.userInfo.userId;Object(r.i)(n).then(function(n){e.info.userName=n.data.userName,e.info.avator=n.data.avator,e.info.gender=n.data.gender,e.info.acceptAddress=n.data.acceptAddress,e.info.introduction=n.data.introduction,e.info.phone=n.data.phone})},check:function(){var e=this;this.$confirm("确认修改信息吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(n){var t=e.info;t.userId=e.userInfo.userId,Object(r.l)(t).then(function(n){1===n.code?(e.$message({type:"success",message:"修改成功!"}),e.initInfo()):e.$message({type:"error",message:"修改失败!"})})}).catch(function(){console.log("取消修改信息")})}}},l=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"info"},[t("h1",[e._v("基本信息")]),e._v(" "),t("el-form",{attrs:{"label-position":"right","label-width":"150px",size:"small",model:e.info}},[t("el-form-item",{attrs:{label:"用户名"}},[t("el-input",{model:{value:e.info.userName,callback:function(n){e.$set(e.info,"userName",n)},expression:"info.userName"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"性别"}},[t("el-select",{attrs:{placeholder:"请选择性别"},model:{value:e.info.gender,callback:function(n){e.$set(e.info,"gender",n)},expression:"info.gender"}},e._l(e.types,function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),t("el-form-item",{attrs:{label:"简介"}},[t("el-input",{model:{value:e.info.introduction,callback:function(n){e.$set(e.info,"introduction",n)},expression:"info.introduction"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"收货地址"}},[t("el-input",{model:{value:e.info.acceptAddress,callback:function(n){e.$set(e.info,"acceptAddress",n)},expression:"info.acceptAddress"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"头像"}},[t("img",{attrs:{src:e.info.avator}})]),e._v(" "),t("el-form-item",{attrs:{label:"手机"}},[t("el-input",{model:{value:e.info.phone,callback:function(n){e.$set(e.info,"phone",n)},expression:"info.phone"}})],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.check}},[e._v("修改")])],1)],1)],1)},f=[],u={render:l,staticRenderFns:f},d=u,A=t("VU/8"),p=a,m=A(c,d,!1,p,"data-v-1a8c17a8",null);n.default=m.exports},wBOy:function(e,n,t){var a=t("NGfA");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);t("rjj0")("507bbbcc",a,!0)}});
//# sourceMappingURL=23.62d884e796f66345c283.js.map