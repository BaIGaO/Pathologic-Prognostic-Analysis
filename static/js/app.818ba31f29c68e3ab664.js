webpackJsonp([3],{"J/aV":function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var l=n("VU/8")({name:"App"},o,!1,function(e){n("J/aV")},null,null).exports,u=n("/ocq");a.default.use(u.a);var r=new u.a({routes:[{path:"/login",name:"login",component:function(e){return n.e(0).then(function(){var t=[n("K31e")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/",name:"upImg",component:function(e){return n.e(1).then(function(){var t=[n("JNXG")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]});r.beforeEach(function(e,t,n){var a=localStorage.getItem("language"),o=localStorage.getItem("author");null!==a&&"null"!==a&&""!==a||(localStorage.setItem("language","en"),console.log(localStorage.getItem("language"))),"isLogin"===o?"/login"===e.path?n("/"):n():"/login"===e.path?n():n("/login")});var i=r,c=n("zL8q"),p=n.n(c),g=(n("tvR6"),n("mtWM")),s=n.n(g);a.default.use(p.a),a.default.prototype.$axios=s.a,a.default.config.productionTip=!1,new a.default({el:"#app",router:i,components:{App:l},template:"<App/>"})},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.818ba31f29c68e3ab664.js.map