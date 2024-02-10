(function(){"use strict";var e={328:function(e,t,n){var i=n(7764),o=n(4108);function a(e,t,n,i,a,r){const u=(0,o.E1)("TestingMultiple");return(0,o.Wz)(),(0,o.Az)(u)}var r=n(9096);const u=(0,o.QD)("p",null,"Please first fetch the user data and then select org from dropdown",-1),s=(0,o.QD)("br",null,null,-1),c=(0,o.QD)("br",null,null,-1),l=(0,o.QD)("p",null,"Select a organization",-1),d=["value"];function g(e,t,n,a,g,h){return(0,o.Wz)(),(0,o.An)(o.ae,null,[u,(0,o.QD)("div",null,[(0,o.QD)("button",{onClick:t[0]||(t[0]=(...e)=>h.getLocation&&h.getLocation(...e))},"Get Location"),(0,o.QD)("button",{onClick:t[1]||(t[1]=(...e)=>h.fetchGoogleMapsLocation&&h.fetchGoogleMapsLocation(...e))}," Get Location with Google API "),(0,o.QD)("p",null," Geolocation API accuracy in meters when fetching user location:"+(0,r.WA)(g.geolocationApiAccuracy),1),(0,o.QD)("p",null," Google Maps Geolocation API accuracy in meters when fetching user location: "+(0,r.WA)(g.googleApiAccuracy),1),s,(0,o.QD)("p",null,"Latitude "+(0,r.WA)(g.latitude),1),(0,o.QD)("p",null,"Longitude "+(0,r.WA)(g.longitude),1),c,l,(0,o.wt)((0,o.QD)("select",{"onUpdate:modelValue":t[2]||(t[2]=e=>g.selectedOrganization=e),onChange:t[3]||(t[3]=(...e)=>h.onOrganizationChange&&h.onOrganizationChange(...e))},[((0,o.Wz)(!0),(0,o.An)(o.ae,null,(0,o.mi)(g.organizations,(e=>((0,o.Wz)(),(0,o.An)("option",{value:e,key:e.id},(0,r.WA)(e.nameOfOrganization),9,d)))),128))],544),[[i.Ip,g.selectedOrganization]]),(0,o.QD)("p",null,"Distance to organization "+(0,r.WA)(g.distanceToOrganization),1),(0,o.QD)("span",null,[(0,o.QD)("p",null,(0,r.WA)(g.userMessage),1)])])],64)}var h=n(6922),f={data(){return{geolocationApiAccuracy:null,googleApiAccuracy:null,latitude:"",longitude:"",selectedOrganization:null,distanceToOrganization:null,isPunchedIn:!1,isPunchedOut:!1,userMessage:"",organizations:[{id:1,nameOfOrganization:"Convenience, Dingli",latitude:35.861579718553045,longitude:14.384102888618935,meters:200,startTime:"2024-02-10T00:15:00Z",endTime:"2024-02-10T00:18:00Z"},{id:2,nameOfOrganization:"Barbajean",latitude:35.86092166581468,longitude:14.382550960199088,meters:20,startTime:"2024-02-08T11:00:00Z",endTime:"2024-02-08T11:03:00Z"},{id:3,nameOfOrganization:"Patrick Prints",latitude:35.870565544942906,longitude:14.44673215440333,meters:20,startTime:"2024-02-08T11:00:00Z",endTime:"2024-04-08T11:03:00Z"},{id:4,nameOfOrganization:"Master Grocer",latitude:35.87132748428104,longitude:14.446681336282058,meters:20,startTime:"2024-02-08T11:00:00Z",endTime:"2024-04-08T11:03:00Z"},{id:5,nameOfOrganization:"Lidl Mosta - Corner",latitude:35.91783234865111,longitude:14.420965580177286,meters:20,startTime:"2024-02-08T11:00:00Z",endTime:"2024-04-08T11:03:00Z"},{id:6,nameOfOrganization:"Pavi Qormi - Sterling",latitude:35.878477960904135,longitude:14.48129070104337,meters:20,startTime:"2024-02-08T11:00:00Z",endTime:"2024-04-08T11:03:00Z"},{id:7,nameOfOrganization:"Mosta Cake Box",latitude:35.90921735094371,longitude:14.42568909379031,meters:20,startTime:"2024-02-08T11:00:00Z",endTime:"2024-04-08T11:03:00Z"}]}},methods:{getLocation(){navigator.geolocation.getCurrentPosition(this.success,this.error,{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})},fetchGoogleMapsLocation(){const e="https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyAizlo3Mfwncv2biC86x_U4-B7FV2V2qFg";fetch(e,{method:"POST",headers:{"Content-Type":"application/json"}}).then((e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((e=>{this.latitude=e.location.lat,this.longitude=e.location.lng,this.googleApiAccuracy=`${e.accuracy} meters`})).catch((e=>{console.error("Error fetching location from Google Maps Geolocation API:",e)}))},success(e){const t=e.coords;this.latitude=t.latitude,this.longitude=t.longitude,this.geolocationApiAccuracy=`${t.accuracy} meters `},error(e){console.warn(`ERROR(${e.code}): ${e.message}`)},onOrganizationChange(){this.isPunchedIn=!1,this.isPunchedOut=!1,this.userMessage="",null!==this.latitude&&null!==this.longitude&&this.updateLocation({coords:{latitude:this.latitude,longitude:this.longitude}})},updateLocation(e){this.latitude=e.coords.latitude,this.longitude=e.coords.longitude;const t=(0,h.GYe)([this.longitude,this.latitude]),n=(0,h.GYe)([this.selectedOrganization.longitude,this.selectedOrganization.latitude]),i={units:"meters"};this.distanceToOrganization=`${(0,h.qy3)(t,n,i).toFixed()} meters`,this.isPunchedInEnabled(),this.isPunchOutEnabled()},isPunchedInEnabled(){const e=new Date,t=new Date(this.selectedOrganization?.startTime);return this.distanceToOrganization<=this.selectedOrganization?.meters&&e>=t},isPunchOutEnabled(){const e=new Date,t=new Date(this.selectedOrganization?.endTime);return this.distanceToOrganization<=this.selectedOrganization?.meters&&e>=t},handleCheckIn(){this.userMessage=`Punched in at ${this.selectedOrganization.nameOfOrganization}`,this.isPunchedIn=!0},handlePunchOut(){this.userMessage=`Punched out at ${this.selectedOrganization.nameOfOrganization}`,this.isPunchedOut=!0}}},m=n(4100);const p=(0,m.c)(f,[["render",g]]);var O=p,T={name:"App",components:{TestingMultiple:O}};const z=(0,m.c)(T,[["render",a]]);var v=z;(0,i.W0)(v).mount("#app")}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var a=t[i]={exports:{}};return e[i].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,i,o,a){if(!i){var r=1/0;for(l=0;l<e.length;l++){i=e[l][0],o=e[l][1],a=e[l][2];for(var u=!0,s=0;s<i.length;s++)(!1&a||r>=a)&&Object.keys(n.O).every((function(e){return n.O[e](i[s])}))?i.splice(s--,1):(u=!1,a<r&&(r=a));if(u){e.splice(l--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[i,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,i){var o,a,r=i[0],u=i[1],s=i[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(s)var l=s(n)}for(t&&t(i);c<r.length;c++)a=r[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(l)},i=self["webpackChunkpunch"]=self["webpackChunkpunch"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[999],(function(){return n(328)}));i=n.O(i)})();
//# sourceMappingURL=app.1c185da7.js.map