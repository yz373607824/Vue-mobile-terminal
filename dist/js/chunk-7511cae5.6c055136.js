(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7511cae5"],{"0aff":function(t,a,e){t.exports=e.p+"img/yzm.83650e79.png"},"3bbf":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"view"},[n("header",{staticClass:"navbar"},[n("h1",{staticClass:"navbar-heading"},[t._v(t._s(t.data.title))]),n("span",{staticClass:"navbar-back navbar-back--text",on:{click:function(a){return t.$router.go(-1)}}},[t._v("返回")])]),n("div",{staticClass:"view-bd container LoginWrap"},[n("p",{staticClass:"f-wwb view-bd-content"},[t._v(t._s(t.data.describe))]),n("div",{staticClass:"phoneInput phoneInput--default view-bd-input control-wrap"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"phoneInput-input js-flag",attrs:{type:"tel"},domProps:{value:t.phone},on:{keyup:t.phones,input:function(a){a.target.composing||(t.phone=a.target.value)}}}),n("div",{staticClass:"phoneInput-clear",style:{visibility:t.stateShow?"visible":"hidden"},attrs:{id:"btn-clear"}},[n("img",{attrs:{src:e("f739")},on:{click:t.clears}})])]),n("div",{staticClass:"control-wrap js-flag captcha-control-wrap",style:{display:t.stateShow?"block":"none"}},[n("div",{staticClass:"flex-wrap"},[n("div",{staticClass:"flex-wrap__content input-wrap"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.captcha,expression:"captcha"}],staticClass:"u-ipt u-ipt-standard code-input",attrs:{type:"text","data-required":"true",name:"captcha",autocomplete:"off"},domProps:{value:t.captcha},on:{keyup:t.captchas,input:function(a){a.target.composing||(t.captcha=a.target.value)}}})]),n("img",{staticClass:"code-button",staticStyle:{height:"40px","vertical-align":"middle"},attrs:{src:e("0aff")}})])]),n("div",{staticClass:"Sign"},[n("van-button",{staticClass:"Sign_out",attrs:{"data-url":t.data.url,disabled:t.Sign,type:"danger",color:"fff",size:"normal"}},[t._v("下一步")])],1)])])},s=[],i={data:function(){return{Sign:!0,stateShow:!1,captcha:"",phone:""}},props:["data"],methods:{phones:function(){var t=this.phone.trim(),a=/^1\d{10}/g;11==t.length&&a.test(t)?this.stateShow=!0:this.stateShow=!1},clears:function(){this.phone="",this.stateShow=!1},captchas:function(){var t=this.captcha.trim();4==t.length?this.Sign=!1:this.Sign=!0}}},o=i,c=(e("6d16"),e("2877")),r=Object(c["a"])(o,n,s,!1,null,"4829e95b",null);a["a"]=r.exports},"4a85":function(t,a,e){},"6d16":function(t,a,e){"use strict";var n=e("4a85"),s=e.n(n);s.a},"8f03":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("correlation",{attrs:{data:t.data}})},s=[],i=e("3bbf"),o={data:function(){return{data:{title:"注册飞鱼映画",describe:"手机号注册需要验证你的手机号，该号码不会对其他人公开",url:""}}},components:{correlation:i["a"]}},c=o,r=e("2877"),l=Object(r["a"])(c,n,s,!1,null,null,null);a["default"]=l.exports},f739:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAnFBMVEUAAADMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzNzc3Ozs7T09PU1NTV1dXW1tbY2NjZ2dne3t7f39/n5+fo6Ojp6en5+fn6+vr7+/v8/Pz9/f3///9wDGwFAAAAIHRSTlMAAQIDIScoPj9ARkdJYmOJiovCw8TFysvM29zo6/Lz+fZZCREAAAEOSURBVCjPdZPteoIwDIWDKGUbiJ9MxNHgXOc2N5He/72N2kCD4vmVp+9Dm5wcAEieSFa5lPlqJjzoaxRn2CmLR5yNU+wpHTv2tMMb7UTLniXeSb5YNnnDARUTw/wUB5X6DYzxgabNfDTD8XSwxfvPJ03kQWirfa0rZYqPStd7exZCYovyrK+0Yfpc2rMElvSCqgw17KLoaAE5csoZ5uAMMJQzlAzil4HfzCV37bUXTT3TtUvOLhWnC5hxphSnSWtC+Wd7UWzOsLWvrKlP1TmUNXmYkre/5O3hdOyMB/91eCkbszIIisFlBzYK0VBMojZE0d23ReTiF2xu3gv6od46tO2H2mAxX5vfYT0XHfoH6WVS4Iuw+IoAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=chunk-7511cae5.6c055136.js.map