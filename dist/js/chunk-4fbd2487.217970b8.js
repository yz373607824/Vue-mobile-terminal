(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4fbd2487"],{"02f4":function(t,e,i){var a=i("4588"),n=i("be13");t.exports=function(t){return function(e,i){var s,r,o=String(n(e)),c=a(i),h=o.length;return c<0||c>=h?t?"":void 0:(s=o.charCodeAt(c),s<55296||s>56319||c+1===h||(r=o.charCodeAt(c+1))<56320||r>57343?t?o.charAt(c):s:t?o.slice(c,c+2):r-56320+(s-55296<<10)+65536)}}},"0390":function(t,e,i){"use strict";var a=i("02f4")(!0);t.exports=function(t,e,i){return e+(i?a(t,e).length:1)}},"11e9":function(t,e,i){var a=i("52a7"),n=i("4630"),s=i("6821"),r=i("6a99"),o=i("69a8"),c=i("c69a"),h=Object.getOwnPropertyDescriptor;e.f=i("9e1e")?h:function(t,e){if(t=s(t),e=r(e,!0),c)try{return h(t,e)}catch(i){}if(o(t,e))return n(!a.f.call(t,e),t[e])}},1325:function(t,e,i){"use strict";i.d(e,"b",function(){return r}),i.d(e,"a",function(){return o}),i.d(e,"c",function(){return h});var a=i("a142"),n=!1;if(!a["d"])try{var s={};Object.defineProperty(s,"passive",{get:function(){n=!0}}),window.addEventListener("test-passive",null,s)}catch(l){}function r(t,e,i,s){void 0===s&&(s=!1),a["d"]||t.addEventListener(e,i,!!n&&{capture:!1,passive:s})}function o(t,e,i){a["d"]||t.removeEventListener(e,i)}function c(t){t.stopPropagation()}function h(t,e){("boolean"!==typeof t.cancelable||t.cancelable)&&t.preventDefault(),e&&c(t)}},"1c4b":function(t,e,i){"use strict";var a=i("3135"),n=i.n(a);n.a},3135:function(t,e,i){},3875:function(t,e,i){"use strict";i.d(e,"a",function(){return r});var a=i("2b0e"),n=10;function s(t,e){return t>e&&t>n?"horizontal":e>t&&e>n?"vertical":""}var r=a["a"].extend({data:function(){return{direction:""}},methods:{touchStart:function(t){this.resetTouchStatus(),this.startX=t.touches[0].clientX,this.startY=t.touches[0].clientY},touchMove:function(t){var e=t.touches[0];this.deltaX=e.clientX-this.startX,this.deltaY=e.clientY-this.startY,this.offsetX=Math.abs(this.deltaX),this.offsetY=Math.abs(this.deltaY),this.direction=this.direction||s(this.offsetX,this.offsetY)},resetTouchStatus:function(){this.direction="",this.deltaX=0,this.deltaY=0,this.offsetX=0,this.offsetY=0}}})},"4cb2":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{ref:"content",attrs:{id:"content"}},[a("div",{staticClass:"body-wrap"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}],staticClass:"ellipsis prev-next",on:{click:function(e){return t.prevNext(t.prevCha.v.id,t.prevCha.c.chapter_id)}}},[t._v("上一章："+t._s(t.prevCha.v.volume_name)+" "+t._s(t.prevCha.c.chapter_name))]),a("div",{ref:"bodys",staticClass:"con-body",domProps:{innerHTML:t._s(t.dataTxt)},on:{click:t.longtag}}),t.isLoading?t._e():a("img",{attrs:{src:i("12ae")}}),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}],staticClass:"ellipsis prev-next",on:{click:function(e){return t.prevNext(t.nextCha.v.id,t.nextCha.c.chapter_id)}}},[t._v("下一章："+t._s(t.nextCha.v.volume_name)+" "+t._s(t.nextCha.c.chapter_name))])]),a("transition",{attrs:{name:"read"}},[a("readCon",{directives:[{name:"show",rawName:"v-show",value:t.isReadCon,expression:"isReadCon"}],attrs:{title:t.title},on:{fontSize:t.fontSize,colors:t.colors}})],1)],1)},n=[],s=(i("a481"),i("ac6a"),i("96cf"),i("3b8d")),r=i("428d"),o=i("4ec3"),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("header",{attrs:{id:"hrader"}},[i("div",{staticClass:"suspension"},[i("div",{staticClass:"suspLeft"},[i("p",{staticClass:"return",on:{click:function(e){return t.rouBack()}}},[i("i",{staticClass:"iconfont"},[t._v("")])]),i("p",{staticClass:"title ellipsis"},[t._v(t._s(t.title))])]),i("div",{staticClass:"suspRight"},[i("p",{staticClass:"fontChange",on:{click:t.fontChange}},[t._v("字体")]),i("p",{staticClass:"bgSty",on:{click:function(e){t.isColor=!t.isColor}}},[t._v("颜色")]),i("div",{ref:"store",staticClass:"store",on:{click:t.store}},[i("i",{staticClass:"iconfont store-icon"},[t._v("")])])])]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isChange,expression:"isChange"}],staticClass:"change-wrap"},[i("van-slider",{staticClass:"change",attrs:{"active-color":"#fa7b5a",max:36,min:12},on:{change:t.onChange},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isColor,expression:"isColor"}],staticClass:"color-wrap"},[i("div",{staticClass:"colors"},[i("p",{staticClass:"config",on:{click:function(e){return e.stopPropagation(),t.bgcolor(t.oneConfig.font,t.oneConfig.bg)}}},[t._v("一键配置")])]),i("div",{staticClass:"colors"},[i("p",{staticClass:"color bgColor"},[t._v("背景颜色:")]),i("ul",t._l(t.bgColor,function(e,a){return i("li",{key:a,style:"border:1px solid "+e.color+";color:"+e.color,on:{click:function(i){return i.stopPropagation(),t.bgcolor(e.type,e.color)}}},[t._v(t._s(e.name))])}),0)]),i("div",{staticClass:"colors fontColor"},[i("p",{staticClass:"color"},[t._v("字体颜色:")]),i("ul",t._l(t.fontColor,function(e,a){return i("li",{key:a,style:"border:1px solid "+e.color+";color:"+e.color,on:{click:function(i){return i.stopPropagation(),t.bgcolor(e.type,e.color)}}},[t._v(t._s(e.name))])}),0)])])])])},h=[],l=(i("c5f6"),i("2b0e")),u=i("8ad4");l["a"].use(u["a"]);var d={data:function(){return{isStore:!1,value:Number(window.localStorage.getItem("FONT_SIZE"))||14,isChange:!1,change:null,isColor:!1,setTime:null,oneConfig:{font:"#cecece",bg:"#13591d"},bgColor:[{type:"bg",name:"白色",color:"#fff"},{type:"bg",name:"黑色",color:"#000"},{type:"bg",name:"橙色",color:"#fa7b5a"},{type:"bg",name:"亮黄色",color:"#fff500"},{type:"bg",name:"亮绿色",color:"#9ec700"},{type:"bg",name:"深绿色",color:"#009825"},{type:"bg",name:"蓝色",color:"#00a3e7"},{type:"bg",name:"护眼背景",color:"#13591d"}],fontColor:[{type:"font",name:"白色",color:"#fff"},{type:"font",name:"黑色",color:"#000"},{type:"font",name:"橙色",color:"#fa7b5a"},{type:"font",name:"亮黄色",color:"#fff500"},{type:"font",name:"亮绿色",color:"#9ec700"},{type:"font",name:"深绿色",color:"#009825"},{type:"font",name:"蓝色",color:"#00a3e7"},{type:"font",name:"护眼亚光",color:"#cecece"}]}},props:["fontSize","title","colors"],methods:{rouBack:function(){this.$router.go(-1)},store:function(){this.isStore=!this.isStore;var t=this.$refs.store;this.isStore?(t.style.color="#fa7b5a",this.$toast({message:"^0^已加入我的收藏啦！！！",className:"fontsize"})):(t.style.color="#fff",this.$toast({message:")~( 已取消收藏！",className:"fontsize"}))},fontChange:function(){clearTimeout(this.change),this.isChange=!this.isChange},onChange:function(t){var e=this;clearTimeout(this.change),this.$emit("fontSize",t),window.localStorage.setItem("FONT_SIZE",t),this.$toast("当前值："+t),this.change=setTimeout(function(){e.isChange=!1},3e3)},bgcolor:function(t,e){var i=this;switch(clearTimeout(this.setTime),this.$emit("colors",t,e),t){case"font":window.localStorage.setItem("FONT",e);break;case"bg":window.localStorage.setItem("BG",e);break;default:}this.setTime=setTimeout(function(){i.isColor=!1},3e3)}}},f=d,p=(i("b443"),i("2877")),C=Object(p["a"])(f,c,h,!1,null,"ea16725a",null),v=C.exports,g={data:function(){return{title:"",isReadCon:!1,isLoading:!1,dataTxt:"",id:"",v:"",c:"",is:0,i:0,order:0,conChapter:JSON.parse(window.sessionStorage.getItem("CON_CHAPTER"+this.$route.query.id)||"[]"),prevCha:{v:{id:0,volume_name:""},c:{chapter_id:0,chapter_name:""}},nextCha:{v:{id:0,volume_name:""},c:{chapter_id:0,chapter_name:""}},indexCha:{V:[],C:[]}}},components:{readCon:v},beforeRouteUpdate:function(t,e,i){e.fullPath&&(this.id=t.query.id,this.v=t.query.v,this.c=t.query.c,this.is=this.$route.query.is,this.i=this.$route.query.i,this.order=this.$route.query.order,this.getAxios(),window.scrollTo(0,0))},mounted:function(){var t=this;this.id=this.$route.query.id,this.v=this.$route.query.v,this.c=this.$route.query.c,this.is=this.$route.query.is,this.i=this.$route.query.i,this.order=this.$route.query.order,window.sessionStorage.getItem("CON_CHAPTER"+this.$route.query.id)||this.$nextTick(Object(s["a"])(regeneratorRuntime.mark(function e(){var i,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(r["a"])(o["i"].url+"/"+t.id+".json",o["i"].type,o["i"].data);case 3:if(i=e.sent,a=i.data,0!=a.length){e.next=7;break}return e.abrupt("return",t.$toast({message:"章节加载失败请刷新重试!",className:"fontsize"}));case 7:t.conChapter=a,window.sessionStorage.setItem("CON_CHAPTER"+t.id,JSON.stringify(a)),e.next=15;break;case 11:return e.prev=11,e.t0=e["catch"](0),e.abrupt("return",t.$toast({message:"章节加载失败!",className:"fontsize"}));case 15:case"end":return e.stop()}},e,null,[[0,11]])}))),this.getAxios(),this.$refs.content.style.color=window.localStorage.getItem("FONT")||"",this.$refs.content.style.background=window.localStorage.getItem("BG")||"",this.$refs.bodys.style.fontSize=window.localStorage.getItem("FONT_SIZE")+"px"||!1,this.$refs.bodys.style.lineHeight=window.localStorage.getItem("FONT_SIZE")?2*window.localStorage.getItem("FONT_SIZE")+"px":"normal"},methods:{fontSize:function(t){this.$refs.bodys.style.fontSize=t+"px",this.$refs.bodys.style.lineHeight=2*t+"px"},colors:function(t,e){switch(t){case"font":this.$refs.content.style.color=e;break;case"bg":this.$refs.content.style.background=e;break;default:this.$refs.content.style.color=t,this.$refs.content.style.background=e}},prevNext:function(t,e){this.$router.push({path:"/chacontent",query:{id:this.id,v:t,c:e}})},longtag:function(){this.isReadCon=!this.isReadCon},conChapters:function(){var t=this;if(this.conChapter.forEach(function(e,i){t.indexCha.V[1]=t.conChapter.length-1,e.id==t.v&&(t.indexCha.V[0]=i,e.chapters.forEach(function(i,a){t.indexCha.C[1]=e.chapters.length-1,i.chapter_id==t.c&&(t.title=i.chapter_name,t.indexCha.C[0]=a)}))}),0<this.indexCha.C[0]&&this.indexCha.C[0]<this.indexCha.C[1])this.prevCha={v:this.conChapter[this.indexCha.V[0]],c:this.conChapter[this.indexCha.V[0]].chapters[this.indexCha.C[0]-1]},this.nextCha={v:this.conChapter[this.indexCha.V[0]],c:this.conChapter[this.indexCha.V[0]].chapters[this.indexCha.C[0]+1]};else if(0==this.indexCha.C[0]&&0==this.indexCha.C[1])this.indexCha.V[0]-1>=0?this.prevCha={v:this.conChapter[this.indexCha.V[0]-1],c:this.conChapter[this.indexCha.V[0]-1].chapters[this.conChapter[this.indexCha.V[0]-1].chapters.length-1]}:this.prevCha={v:{chapter_id:this.conChapter[this.indexCha.V[0]].id,volume_name:"最前一章了"},c:{chapter_id:this.conChapter[this.indexCha.V[0]].chapters[this.indexCha.C[0]].chapter_id,chapter_name:"."}},this.indexCha.V[0]+1<=this.indexCha.V[1]?this.nextCha={v:this.conChapter[this.indexCha.V[0]+1],c:this.conChapter[this.indexCha.V[0]+1].chapters[0]}:this.nextCha={v:{chapter_id:this.conChapter[this.indexCha.V[0]].id,volume_name:"最后一章了"},c:{chapter_id:this.conChapter[this.indexCha.V[0]].chapters[this.indexCha.C[1]].chapter_id,chapter_name:"."}};else{if(0==this.indexCha.C[1])return this.$toast({message:"歐!这章内容被掏空了！",className:"fontsize"});0==this.indexCha.C[0]&&(0<this.indexCha.V[0]?(this.prevCha={v:this.conChapter[this.indexCha.V[0]-1],c:this.conChapter[this.indexCha.V[0]-1].chapters[this.conChapter[this.indexCha.V[0]-1].chapters.length-1]},this.nextCha={v:this.conChapter[this.indexCha.V[0]],c:this.conChapter[this.indexCha.V[0]].chapters[this.indexCha.C[0]+1]}):(this.prevCha={v:{chapter_id:this.conChapter[this.indexCha.V[0]].id,volume_name:"最前一章了"},c:{chapter_id:this.conChapter[this.indexCha.V[0]].chapters[this.indexCha.C[0]].chapter_id,chapter_name:"."}},this.nextCha={v:this.conChapter[this.indexCha.V[0]],c:this.conChapter[this.indexCha.V[0]].chapters[this.indexCha.C[0]+1]})),this.indexCha.C[0]==this.indexCha.C[1]&&(this.indexCha.V[0]<this.indexCha.V[1]?(this.prevCha={v:this.conChapter[this.indexCha.V[0]],c:this.conChapter[this.indexCha.V[0]].chapters[this.indexCha.C[0]-1]},this.nextCha={v:this.conChapter[this.indexCha.V[0]+1],c:this.conChapter[this.indexCha.V[0]+1].chapters[0]}):(this.prevCha={v:this.conChapter[this.indexCha.V[0]],c:this.conChapter[this.indexCha.V[0]].chapters[this.indexCha.C[0]-1]},this.nextCha={v:{chapter_id:this.conChapter[this.indexCha.V[0]].id,volume_name:"最后一章了"},c:{chapter_id:this.conChapter[this.indexCha.V[0]].chapters[this.indexCha.C[1]].chapter_id,chapter_name:"."}}))}},getAxios:function(){var t=this;this.$nextTick(Object(s["a"])(regeneratorRuntime.mark(function e(){var i,a,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(r["a"])(o["j"].url+"/"+t.id+"_"+t.v+"_"+t.c+".txt",o["j"].type,o["j"].data);case 3:if(i=e.sent,a=i.data,0!=a.length){e.next=7;break}return e.abrupt("return",t.$toast({message:"文章加载失败请刷新重试!",className:"fontsize"}));case 7:n=a.replace(/<img/gi,'<img width="100%" height="100%" style="margin:0 auto"'),t.isLoading=!0,t.dataTxt=n,t.conChapters(),e.next=17;break;case 13:return e.prev=13,e.t0=e["catch"](0),e.abrupt("return",t.$toast({message:"文章加载失败!",className:"fontsize"}));case 17:case"end":return e.stop()}},e,null,[[0,13]])})))}}},m=g,x=(i("1c4b"),Object(p["a"])(m,a,n,!1,null,"6fdc1b49",null));e["default"]=x.exports},"5dbc":function(t,e,i){var a=i("d3f4"),n=i("8b97").set;t.exports=function(t,e,i){var s,r=e.constructor;return r!==i&&"function"==typeof r&&(s=r.prototype)!==i.prototype&&a(s)&&n&&n(t,s),t}},8986:function(t,e,i){},"8ad4":function(t,e,i){"use strict";var a=i("d282"),n=i("ea8e"),s=i("3875"),r=i("1325"),o=Object(a["a"])("slider"),c=o[0],h=o[1];e["a"]=c({mixins:[s["a"]],props:{disabled:Boolean,vertical:Boolean,activeColor:String,inactiveColor:String,min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1},value:{type:Number,default:0},barHeight:{type:[Number,String],default:2}},computed:{range:function(){return this.max-this.min}},methods:{onTouchStart:function(t){this.disabled||(this.touchStart(t),this.startValue=this.format(this.value),this.dragStatus="start")},onTouchMove:function(t){if(!this.disabled){"start"===this.dragStatus&&this.$emit("drag-start"),Object(r["c"])(t,!0),this.touchMove(t),this.dragStatus="draging";var e=this.$el.getBoundingClientRect(),i=this.vertical?this.deltaY:this.deltaX,a=this.vertical?e.height:e.width,n=i/a*this.range;this.newValue=this.startValue+n,this.updateValue(this.newValue)}},onTouchEnd:function(){this.disabled||("draging"===this.dragStatus&&(this.updateValue(this.newValue,!0),this.$emit("drag-end")),this.dragStatus="")},onClick:function(t){if(t.stopPropagation(),!this.disabled){var e=this.$el.getBoundingClientRect(),i=this.vertical?t.clientY-e.top:t.clientX-e.left,a=this.vertical?e.height:e.width,n=i/a*this.range+this.min;this.updateValue(n,!0)}},updateValue:function(t,e){t=this.format(t),this.$emit("input",t),e&&this.$emit("change",t)},format:function(t){return Math.round(Math.max(this.min,Math.min(t,this.max))/this.step)*this.step}},render:function(){var t,e=arguments[0],i=this.vertical,a={background:this.inactiveColor},s=i?"height":"width",r=i?"width":"height",o=(t={},t[s]=100*(this.value-this.min)/this.range+"%",t[r]=Object(n["a"])(this.barHeight),t.background=this.activeColor,t);return e("div",{style:a,class:h({disabled:this.disabled,vertical:i}),on:{click:this.onClick}},[e("div",{class:h("bar"),style:o},[e("div",{attrs:{role:"slider",tabindex:this.disabled?-1:0,"aria-valuemin":this.min,"aria-valuenow":this.value,"aria-valuemax":this.max,"aria-orientation":this.vertical?"vertical":"horizontal"},class:h("button-wrapper"),on:{touchstart:this.onTouchStart,touchmove:this.onTouchMove,touchend:this.onTouchEnd,touchcancel:this.onTouchEnd}},[this.slots("button")||e("div",{class:h("button")})])])])}})},"8b97":function(t,e,i){var a=i("d3f4"),n=i("cb7c"),s=function(t,e){if(n(t),!a(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,a){try{a=i("9b43")(Function.call,i("11e9").f(Object.prototype,"__proto__").set,2),a(t,[]),e=!(t instanceof Array)}catch(n){e=!0}return function(t,i){return s(t,i),e?t.__proto__=i:a(t,i),t}}({},!1):void 0),check:s}},9093:function(t,e,i){var a=i("ce10"),n=i("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return a(t,n)}},a481:function(t,e,i){"use strict";var a=i("cb7c"),n=i("4bf8"),s=i("9def"),r=i("4588"),o=i("0390"),c=i("5f1b"),h=Math.max,l=Math.min,u=Math.floor,d=/\$([$&`']|\d\d?|<[^>]*>)/g,f=/\$([$&`']|\d\d?)/g,p=function(t){return void 0===t?t:String(t)};i("214f")("replace",2,function(t,e,i,C){return[function(a,n){var s=t(this),r=void 0==a?void 0:a[e];return void 0!==r?r.call(a,s,n):i.call(String(s),a,n)},function(t,e){var n=C(i,t,this,e);if(n.done)return n.value;var u=a(t),d=String(this),f="function"===typeof e;f||(e=String(e));var g=u.global;if(g){var m=u.unicode;u.lastIndex=0}var x=[];while(1){var b=c(u,d);if(null===b)break;if(x.push(b),!g)break;var y=String(b[0]);""===y&&(u.lastIndex=o(d,s(u.lastIndex),m))}for(var _="",S=0,w=0;w<x.length;w++){b=x[w];for(var V=String(b[0]),N=h(l(r(b.index),d.length),0),T=[],$=1;$<b.length;$++)T.push(p(b[$]));var k=b.groups;if(f){var L=[V].concat(T,N,d);void 0!==k&&L.push(k);var I=String(e.apply(void 0,L))}else I=v(V,d,N,T,k,e);N>=S&&(_+=d.slice(S,N)+I,S=N+V.length)}return _+d.slice(S)}];function v(t,e,a,s,r,o){var c=a+t.length,h=s.length,l=f;return void 0!==r&&(r=n(r),l=d),i.call(o,l,function(i,n){var o;switch(n.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,a);case"'":return e.slice(c);case"<":o=r[n.slice(1,-1)];break;default:var l=+n;if(0===l)return i;if(l>h){var d=u(l/10);return 0===d?i:d<=h?void 0===s[d-1]?n.charAt(1):s[d-1]+n.charAt(1):i}o=s[l-1]}return void 0===o?"":o})}})},aa77:function(t,e,i){var a=i("5ca1"),n=i("be13"),s=i("79e5"),r=i("fdef"),o="["+r+"]",c="​",h=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),u=function(t,e,i){var n={},o=s(function(){return!!r[t]()||c[t]()!=c}),h=n[t]=o?e(d):r[t];i&&(n[i]=h),a(a.P+a.F*o,"String",n)},d=u.trim=function(t,e){return t=String(n(t)),1&e&&(t=t.replace(h,"")),2&e&&(t=t.replace(l,"")),t};t.exports=u},ac6a:function(t,e,i){for(var a=i("cadf"),n=i("0d58"),s=i("2aba"),r=i("7726"),o=i("32e9"),c=i("84f2"),h=i("2b4c"),l=h("iterator"),u=h("toStringTag"),d=c.Array,f={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},p=n(f),C=0;C<p.length;C++){var v,g=p[C],m=f[g],x=r[g],b=x&&x.prototype;if(b&&(b[l]||o(b,l,d),b[u]||o(b,u,g),c[g]=d,m))for(v in a)b[v]||s(b,v,a[v],!0)}},b443:function(t,e,i){"use strict";var a=i("8986"),n=i.n(a);n.a},c5f6:function(t,e,i){"use strict";var a=i("7726"),n=i("69a8"),s=i("2d95"),r=i("5dbc"),o=i("6a99"),c=i("79e5"),h=i("9093").f,l=i("11e9").f,u=i("86cc").f,d=i("aa77").trim,f="Number",p=a[f],C=p,v=p.prototype,g=s(i("2aeb")(v))==f,m="trim"in String.prototype,x=function(t){var e=o(t,!1);if("string"==typeof e&&e.length>2){e=m?e.trim():d(e,3);var i,a,n,s=e.charCodeAt(0);if(43===s||45===s){if(i=e.charCodeAt(2),88===i||120===i)return NaN}else if(48===s){switch(e.charCodeAt(1)){case 66:case 98:a=2,n=49;break;case 79:case 111:a=8,n=55;break;default:return+e}for(var r,c=e.slice(2),h=0,l=c.length;h<l;h++)if(r=c.charCodeAt(h),r<48||r>n)return NaN;return parseInt(c,a)}}return+e};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof p&&(g?c(function(){v.valueOf.call(i)}):s(i)!=f)?r(new C(x(e)),i,p):x(e)};for(var b,y=i("9e1e")?h(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),_=0;y.length>_;_++)n(C,b=y[_])&&!n(p,b)&&u(p,b,l(C,b));p.prototype=v,v.constructor=p,i("2aba")(a,f,p)}},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-4fbd2487.217970b8.js.map