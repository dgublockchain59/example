webpackJsonp([1],{"1Ecq":function(t,e){},"9M+g":function(t,e){},GESE:function(t,e){},Jmt5:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("7+uW"),a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info"}},[n("b-navbar-brand",{attrs:{href:"/"}},[t._v("OGU")]),t._v(" "),n("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),t._v(" "),n("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[n("b-navbar-nav",[n("b-nav-item",{attrs:{to:"/student"}},[t._v("학생정보")]),t._v(" "),n("b-nav-item",{attrs:{to:"/course"}},[t._v("수강과목")]),t._v(" "),n("b-nav-item",{attrs:{to:"/assign"}},[t._v("과제")]),t._v(" "),n("b-nav-item",{attrs:{to:"/usages"}},[t._v("이용내역")])],1)],1)],1)],1)},staticRenderFns:[]},o={name:"App",components:{Header:n("VU/8")({name:"Header",data:function(){return{}}},a,!1,null,null,null).exports}},s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Header"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var i=n("VU/8")(o,s,!1,function(t){n("sBfl")},null,null).exports,u=n("/ocq"),l={render:function(){var t=this.$createElement;return(this._self._c||t)("h1",[this._v("인덱스 페이지입니다.!!!!")])},staticRenderFns:[]};var d=n("VU/8")({},l,!1,function(t){n("GESE")},null,null).exports,p={name:"HelloWorld",data:function(){return{msg:"학생 정보 관리 사이트에 오신 것을 환영합니다.",form:{id:"",passwd:""},show:!0}},methods:{loginSubmit:function(){var t=this;console.log("로그인"),this.$Axios.post("http://127.0.0.1:3000/login/auth",{id:this.user_id,pwd:this.user_pwd}).then(function(e){console.log(e),t.$router.push("/")})}}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("br"),n("br"),n("h1",[t._v(t._s(t.msg))]),t._v(" "),n("br"),n("br"),n("h2",[t._v("MEMBER LOGIN")]),t._v(" "),t.show?n("b-form",{on:{submit:t.onSubmit,reset:t.onReset}},[n("b-form-group",{attrs:{id:"input-group-1",label:"Your ID:","label-for":"input-1"}},[n("b-form-input",{attrs:{id:"id",required:"",placeholder:"Enter ID"},model:{value:t.form.id,callback:function(e){t.$set(t.form,"id",e)},expression:"form.id"}})],1),t._v(" "),n("b-form-group",{attrs:{id:"input-group-2",label:"Your Password:","label-for":"passwd"}},[n("b-form-input",{attrs:{id:"input-2",required:"",placeholder:"Enter Password"},model:{value:t.form.passwd,callback:function(e){t.$set(t.form,"passwd",e)},expression:"form.passwd"}})],1),t._v(" "),n("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Submit")]),t._v(" "),n("b-button",{attrs:{type:"reset",variant:"danger"}},[t._v("Reset")])],1):t._e()],1)},staticRenderFns:[]};var v=n("VU/8")(p,c,!1,function(t){n("1Ecq")},"data-v-ec173e26",null).exports;r.default.use(u.a);var f=new u.a({mode:"history",routes:[{path:"/",name:"IndexPage",component:d},{path:"/login",name:"LoginPage",component:v}]}),m=n("mtWM"),b=n.n(m),_=n("Tqaz");n("Jmt5"),n("9M+g");r.default.use(_.a),r.default.prototype.$http=b.a,r.default.config.productionTip=!1,new r.default({el:"#app",router:f,components:{App:i},template:"<App/>"})},sBfl:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.0bd02e9b5b859c77bc92.js.map