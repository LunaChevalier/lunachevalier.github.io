(function(e){function t(t){for(var r,u,i=t[0],c=t[1],s=t[2],f=0,d=[];f<i.length;f++)u=i[f],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&d.push(a[u][0]),a[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(d.length)d.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},2395:function(e,t,n){},"7c55":function(e,t,n){"use strict";var r=n("2395"),a=n.n(r);a.a},"8d40":function(e){e.exports=JSON.parse('[{"name":"人参"},{"name":"じゃがいも"},{"name":"大根"},{"name":"玉ねぎ"},{"name":"セロリ"},{"name":"里芋"},{"name":"カブ"},{"name":"ゴーヤ"},{"name":"きゅうり"},{"name":"カツオのたたき"},{"name":"ラム肉"},{"name":"サバの水煮"},{"name":"ブリ"},{"name":"タコ"},{"name":"ちくわ"},{"name":"魚肉ソーセージ"},{"name":"こんにゃく"},{"name":"ツナ缶"}]')},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],u=(n("7c55"),n("2877")),i={},c=Object(u["a"])(i,a,o,!1,null,null,null),s=c.exports,l=n("5f5b"),f=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"about"},[n("h1",[e._v("カレー具材ガチャ")]),n("Gacha")],1)},p=[],b=n("d4ec"),m=n("262e"),v=n("2caf"),g=n("9ab4"),h=n("60a3"),y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"gacha"},[n("TargetIngredients",{attrs:{targetIngredients:e.targetIngredients}}),n("label",{staticClass:"text-nowrap"},[e._v("具の数:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.count,expression:"count"}],staticClass:"count m-2",domProps:{value:e.count},on:{input:function(t){t.target.composing||(e.count=t.target.value)}}}),n("button",{staticClass:"lottery btn btn-primary m-2",attrs:{disabled:!Number.isInteger(parseInt(e.count,10))||e.count<1},on:{click:function(t){return e.lottery()}}},[e._v("具材を決定")]),n("GachaResult",{attrs:{ingredient:e.ingredients}})],1)},O=[],_=(n("a630"),n("d81d"),n("fb6a"),n("b0c0"),n("3ca3"),n("bee2")),j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"gacha-result"},e._l(e.ingredient,(function(t){return n("label",{staticClass:"border rounded border-info p-1 m-2"},[e._v(" "+e._s(t)+" ")])})),0)},w=[],x=r["default"].extend({props:{ingredient:Array}}),I=x,C=Object(u["a"])(I,j,w,!1,null,null,null),P=C.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"target-ingredients"},[n("h2",[e._v("抽選対象になる具材")]),e._l(e.targetIngredients,(function(t){return n("label",{staticClass:"target-ingredient border rounded border-info p-1 m-2"},[e._v(" "+e._s(t)+" ")])}))],2)},k=[],M=r["default"].extend({props:{targetIngredients:{type:Array}}}),$=M,A=Object(u["a"])($,S,k,!1,null,null,null),E=A.exports,T=n("8d40"),G=function(e){Object(m["a"])(n,e);var t=Object(v["a"])(n);function n(){return Object(b["a"])(this,n),t.apply(this,arguments)}return Object(_["a"])(n,[{key:"data",value:function(){return{ingredients:[],count:1,targetIngredients:Array.from(T.map((function(e){return e.name})))}}},{key:"lottery",value:function(){for(var e=Array.from(T.map((function(e){return e.name}))),t=e.length>this.count?this.count:e.length,n=0;n<t;n++){var r=Math.floor(Math.random()*this.targetIngredients.length),a=e[n];e[n]=e[r],e[r]=a}this.ingredients=e.slice(0,t)}}]),n}(h["b"]);G=Object(g["a"])([Object(h["a"])({components:{GachaResult:P,TargetIngredients:E}})],G);var J=G,N=J,R=Object(u["a"])(N,y,O,!1,null,null,null),q=R.exports,z=function(e){Object(m["a"])(n,e);var t=Object(v["a"])(n);function n(){return Object(b["a"])(this,n),t.apply(this,arguments)}return n}(h["b"]);z=Object(g["a"])([Object(h["a"])({components:{Gacha:q}})],z);var B=z,D=B,F=Object(u["a"])(D,d,p,!1,null,null,null),H=F.exports;n("f9e3"),n("2dd8");r["default"].use(f["a"]),r["default"].use(l["a"]);var K=[{path:"/",name:"About",component:H}],L=new f["a"]({mode:"history",base:"",routes:K}),Q=L,U=n("2f62");r["default"].use(U["a"]);var V=new U["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["default"].config.productionTip=!1,new r["default"]({router:Q,store:V,render:function(e){return e(s)}}).$mount("#app")}});
//# sourceMappingURL=app.2da28a64.js.map