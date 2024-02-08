(function(){"use strict";var e={2834:function(e,n,t){var u=t(7764),a=t(4108);function o(e,n,t,u,o,l){const i=(0,a.E1)("PunchControlMultiple");return(0,a.Wz)(),(0,a.Az)(i)}var l=t(9096),i=t(2500),r=t(6922);const c=(0,a.QD)("br",null,null,-1),d=["value"],v=["disabled"],s=["disabled"];var f={__name:"PunchControlMultiple",setup(e){const n=(0,i.IL)(null),t=(0,i.IL)(null),o=(0,i.IL)(""),f=(0,i.IL)(!1),m=(0,i.IL)(!1),p=(0,i.IL)(0),g=(0,i.IL)([{id:1,nameOfOrganization:"Convenience, Dingli",latitude:35.861579718553045,longitude:14.384102888618935,meters:20,startTime:"2024-02-08T11:00:00Z",endTime:"2024-02-08T11:03:00Z"},{id:2,nameOfOrganization:"Barbajean",latitude:35.86092166581468,longitude:14.382550960199088,meters:20,startTime:"2024-02-08T11:00:00Z",endTime:"2024-02-08T11:03:00Z"},{id:3,nameOfOrganization:"Patrick Prints",latitude:35.87057691018765,longitude:14.446694085537114,meters:20,startTime:"2024-02-08T11:00:00Z",endTime:"2024-04-08T11:03:00Z"},{id:4,nameOfOrganization:"Master Grocer",latitude:35.87154161786839,longitude:14.446766513597746,meters:20,startTime:"2024-02-08T11:00:00Z",endTime:"2024-04-08T11:03:00Z"}]),b=(0,i.IL)(g.value[0]);let h=null;const O=e=>{n.value=e.coords.latitude,t.value=e.coords.longitude;const u=(0,r.GYe)([n.value.toFixed(5),t.value.toFixed(5)]),a=(0,r.GYe)([b.value.latitude.toFixed(5),b.value.longitude.toFixed(5)]),o={units:"meters"};p.value=(0,r.qy3)(u,a,o),D(),z()},T=()=>{f.value=!1,m.value=!1,o.value="",null!==n.value&&null!==t.value&&O({coords:{latitude:n.value,longitude:t.value}})},y=e=>{alert("Error Code = "+e.code+" - "+e.message)},w=()=>{"geolocation"in navigator?h=navigator.geolocation.watchPosition(O,y,{enableHighAccuracy:!0,maximumAge:0}):alert("Geolocation is not supported by this browser.")},D=()=>{const e=new Date,n=new Date(b.value.startTime);return p.value<=b.value.meters&&e>=n},z=()=>{const e=new Date,n=new Date(b.value.endTime);return p.value<=b.value.meters&&e>=n},P=()=>{o.value=`Punched in at ${b.value.nameOfOrganization}`,f.value=!0},A=()=>{o.value=`Punched out at ${b.value.nameOfOrganization}`,m.value=!0};return(0,a.u2)(w),(0,a.wx)((()=>{null!==h&&navigator.geolocation.clearWatch(h)})),(e,i)=>((0,a.Wz)(),(0,a.An)("div",null,[(0,a.QD)("p",null,"Latitude: "+(0,l.WA)(n.value),1),(0,a.QD)("p",null,"Longitude: "+(0,l.WA)(t.value),1),c,(0,a.QD)("div",null,[(0,a.wt)((0,a.QD)("select",{"onUpdate:modelValue":i[0]||(i[0]=e=>b.value=e),onChange:T},[((0,a.Wz)(!0),(0,a.An)(a.ae,null,(0,a.mi)(g.value,(e=>((0,a.Wz)(),(0,a.An)("option",{value:e,key:e.id},(0,l.WA)(e.nameOfOrganization),9,d)))),128))],544),[[u.Ip,b.value]]),(0,a.QD)("button",{disabled:!D()||f.value,onClick:P}," Punch In ",8,v),f.value?((0,a.Wz)(),(0,a.An)("button",{key:0,disabled:!z()||m.value,onClick:A}," Punch Out ",8,s)):(0,a.g1)("",!0)]),(0,a.QD)("span",null,[(0,a.QD)("p",null,(0,l.WA)(o.value),1)]),(0,a.QD)("p",null," Distance to Organization: "+(0,l.WA)(p.value.toFixed(2))+" meters ",1)]))}};const m=f;var p=m,g={name:"App",components:{PunchControlMultiple:p}},b=t(4100);const h=(0,b.c)(g,[["render",o]]);var O=h;(0,u.W0)(O).mount("#app")}},n={};function t(u){var a=n[u];if(void 0!==a)return a.exports;var o=n[u]={exports:{}};return e[u].call(o.exports,o,o.exports,t),o.exports}t.m=e,function(){var e=[];t.O=function(n,u,a,o){if(!u){var l=1/0;for(d=0;d<e.length;d++){u=e[d][0],a=e[d][1],o=e[d][2];for(var i=!0,r=0;r<u.length;r++)(!1&o||l>=o)&&Object.keys(t.O).every((function(e){return t.O[e](u[r])}))?u.splice(r--,1):(i=!1,o<l&&(l=o));if(i){e.splice(d--,1);var c=a();void 0!==c&&(n=c)}}return n}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[u,a,o]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var u in n)t.o(n,u)&&!t.o(e,u)&&Object.defineProperty(e,u,{enumerable:!0,get:n[u]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};t.O.j=function(n){return 0===e[n]};var n=function(n,u){var a,o,l=u[0],i=u[1],r=u[2],c=0;if(l.some((function(n){return 0!==e[n]}))){for(a in i)t.o(i,a)&&(t.m[a]=i[a]);if(r)var d=r(t)}for(n&&n(u);c<l.length;c++)o=l[c],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(d)},u=self["webpackChunkpunch"]=self["webpackChunkpunch"]||[];u.forEach(n.bind(null,0)),u.push=n.bind(null,u.push.bind(u))}();var u=t.O(void 0,[999],(function(){return t(2834)}));u=t.O(u)})();
//# sourceMappingURL=app.81dbddcf.js.map