(function(n){function t(t){for(var a,u,c=t[0],l=t[1],i=t[2],d=0,p=[];d<c.length;d++)u=c[d],o[u]&&p.push(o[u][0]),o[u]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(n[a]=l[a]);s&&s(t);while(p.length)p.shift()();return r.push.apply(r,i||[]),e()}function e(){for(var n,t=0;t<r.length;t++){for(var e=r[t],a=!0,c=1;c<e.length;c++){var l=e[c];0!==o[l]&&(a=!1)}a&&(r.splice(t--,1),n=u(u.s=e[0]))}return n}var a={},o={app:0},r=[];function u(t){if(a[t])return a[t].exports;var e=a[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,u),e.l=!0,e.exports}u.m=n,u.c=a,u.d=function(n,t,e){u.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},u.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},u.t=function(n,t){if(1&t&&(n=u(n)),8&t)return n;if(4&t&&"object"===typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(u.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var a in n)u.d(e,a,function(t){return n[t]}.bind(null,a));return e},u.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return u.d(t,"a",t),t},u.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},u.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var i=0;i<c.length;i++)t(c[i]);var s=l;r.push([0,"chunk-vendors"]),e()})({0:function(n,t,e){n.exports=e("56d7")},"56d7":function(n,t,e){"use strict";e.r(t);e("cadf"),e("551c"),e("097d");var a=e("2b0e"),o=e("117e"),r=(e("dcad"),function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"form"},[e("label",[n._v("\n      udpxy address:\n      "),e("i-input",{staticClass:"input-udpxy",attrs:{disabled:n.loading,placeholder:"Your udpxy address, e.g. http://192.168.1.4:8012"},model:{value:n.udpxy,callback:function(t){n.udpxy=t},expression:"udpxy"}})],1),e("Button",{attrs:{disabled:n.loading,"html-type":"button"},on:{click:n.download}},[n._v("\n      Download playlist\n    ")]),e("Button",{attrs:{disabled:n.loading,"html-type":"button"},on:{click:n.custom}},[n._v("\n      Custom channels HTML\n    ")]),e("ModalCustom",{ref:"modalCustom",on:{submit:function(t){n.channelsHTML=arguments[0]}}})],1),e("Table",{attrs:{loading:n.loading,columns:n.columns,data:n.channelsFormatted}})],1)}),u=[],c=(e("96cf"),e("3040")),l=(e("f751"),e("55dd"),e("bc3a")),i=e.n(l),s=e("2d66"),d=e("01f8"),p=e("cf8e"),f=function(n,t){var e=new Blob([t]),a=document.createElement("a");a.href=URL.createObjectURL(e),a.download=n,a.style.display="none",document.body.appendChild(a),a.click(),document.body.removeChild(a)},h=f,m=function(n,t){return parseInt(n.UserChannelID,10)-parseInt(t.UserChannelID,10)},v=m,b=(e("a481"),e("4917"),function(n){var t=/^http:\/\/[^/:]+(?::\d+)?/,e=n.match(t);return e?e[0]:""}),y=b,x=function(n,t,e){var a=y(t)||e;if(!a)return n;var o=n.replace(/^\w+:\/\//,"/rtp/");return"".concat(a).concat(o)},g=x,w=(e("7f7f"),function(n,t){return'#EXTM3U name="'.concat(n,'"\n').concat(t.map(function(n){var t=n.name,e=n.url;return"#EXTINF:-1,".concat(t,"\n").concat(e)}).join("\n"))}),C=w,k=function(n){for(var t=/(\w+)="([^"]+)"/g,e={};;){var a=t.exec(n);if(!a)break;e[a[1]]=a[2]}return e},_=function(n){for(var t=[],e=/CU_CTC_Auther\('Channel',([^)]+)\)/g;;){var a=e.exec(n);if(!a)break;var o=k(a[1]);t.push(o)}return t},M=_,O="http://192.168.1.4:8012",j="bj-unicom-iptv",S=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("Modal",{attrs:{title:"Common Modal dialog box title"},on:{"on-ok":n.ok,"on-cancel":n.cancel},model:{value:n.modalShow,callback:function(t){n.modalShow=t},expression:"modalShow"}},[e("i-input",{staticClass:"modal-custom-textarea",attrs:{type:"textarea"},model:{value:n.value,callback:function(t){n.value=t},expression:"value"}})],1)},T=[],L=e("6be2"),U={components:{Modal:L["a"],"i-input":s["a"]},data:function(){return{value:"",modalShow:!1}},methods:{ok:function(){this.$emit("submit",this.value)},cancel:function(){},show:function(n){this.value=n,this.modalShow=!0}}},P=U,R=(e("f92b"),e("2877")),$=Object(R["a"])(P,S,T,!1,null,null,null);$.options.__file="modal-custom.vue";var E=$.exports,H={name:"App",components:{"i-input":s["a"],ModalCustom:E,Button:d["a"],Table:p["a"]},data:function(){this.$createElement;return{loading:!0,udpxy:localStorage.udpxy||"",columns:[{title:"channel name",key:"ChannelName"},{title:"channel url",key:"ChannelURL"},{title:"udpxy url",key:"udpxy"},{title:"Play in VLC (iOS)",key:"udpxy",width:140,render:function(n,t){var e=t.row.udpxy,a="vlc-x-callback://x-callback-url/stream?url=".concat(encodeURIComponent(e));return n("a",{class:"icon-vlc",attrs:{href:a,title:"Play in VLC (iOS)"}})}}],channelsHTML:""}},computed:{channelsFormatted:function(){var n=this,t=M(this.channelsHTML).sort(v);return t.map(function(t){return Object.assign(t,{udpxy:g(t.ChannelURL,n.udpxy,O)})})}},watch:{udpxy:function(n){localStorage.udpxy=n}},mounted:function(){var n=Object(c["a"])(regeneratorRuntime.mark(function n(){var t;return regeneratorRuntime.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.a.get("iptv.txt");case 3:t=n.sent,this.channelsHTML=t.data,n.next=10;break;case 7:n.prev=7,n.t0=n["catch"](0),this.$Message.error(n.t0.message);case 10:return n.prev=10,this.loading=!1,n.finish(10);case 13:case"end":return n.stop()}},n,this,[[0,7,10,13]])}));return function(){return n.apply(this,arguments)}}(),methods:{download:function(){var n=C(j,this.channelsFormatted.map(function(n){var t=n.ChannelName,e=n.udpxy;return{name:t,url:e}}));h("".concat(j,".m3u"),n)},custom:function(){this.$refs.modalCustom.show(this.channelsHTML)}}},I=H,B=(e("9ca0"),e("b0a0"),Object(R["a"])(I,r,u,!1,null,"61303290",null));B.options.__file="App.vue";var F=B.exports;a["a"].prototype.$Message=o["a"],a["a"].config.productionTip=!1,new a["a"]({el:"#app",render:function(n){return n(F)}})},"6c25":function(n,t,e){},"9ca0":function(n,t,e){"use strict";var a=e("a848"),o=e.n(a);o.a},a848:function(n,t,e){},b0a0:function(n,t,e){"use strict";var a=e("e03b"),o=e.n(a);o.a},e03b:function(n,t,e){},f92b:function(n,t,e){"use strict";var a=e("6c25"),o=e.n(a);o.a}});
//# sourceMappingURL=app.92b0c01c.js.map