webpackJsonp([2],{47:function(e,t,n){"use strict";function r(e){n(75)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(65),s=n(77),o=n(16),i=r,c=o(a.a,s.a,!1,i,"data-v-c9f01a9a",null);t.default=c.exports},49:function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=l[n.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](n.parts[a]);for(;a<n.parts.length;a++)r.parts.push(s(n.parts[a]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var o=[],a=0;a<n.parts.length;a++)o.push(s(n.parts[a]));l[n.id]={id:n.id,refs:1,parts:o}}}}function a(){var e=document.createElement("style");return e.type="text/css",p.appendChild(e),e}function s(e){var t,n,r=document.querySelector("style["+_+'~="'+e.id+'"]');if(r){if(f)return h;r.parentNode.removeChild(r)}if(g){var s=d++;r=v||(v=a()),t=o.bind(null,r,s,!1),n=o.bind(null,r,s,!0)}else r=a(),t=i.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function o(e,t,n,r){var a=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=b(t,a);else{var s=document.createTextNode(a),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(s,o[t]):e.appendChild(s)}}function i(e,t){var n=t.css,r=t.media,a=t.sourceMap;if(r&&e.setAttribute("media",r),m.ssrId&&e.setAttribute(_,t.id),a&&(n+="\n/*# sourceURL="+a.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u=n(51),l={},p=c&&(document.head||document.getElementsByTagName("head")[0]),v=null,d=0,f=!1,h=function(){},m=null,_="data-vue-ssr-id",g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n,a){f=n,m=a||{};var s=u(e,t);return r(s),function(t){for(var n=[],a=0;a<s.length;a++){var o=s[a],i=l[o.id];i.refs--,n.push(i)}t?(s=u(e,t),r(s)):s=[];for(var a=0;a<n.length;a++){var i=n[a];if(0===i.refs){for(var c=0;c<i.parts.length;c++)i.parts[c]();delete l[i.id]}}}};var b=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},50:function(e,t,n){"use strict";var r=n(55),a=n.n(r);t.a={data:function(){return{theme:"dark",pass:a.a}}}},51:function(e,t){e.exports=function(e,t){for(var n=[],r={},a=0;a<t.length;a++){var s=t[a],o=s[0],i=s[1],c=s[2],u=s[3],l={id:e+":"+a,css:i,media:c,sourceMap:u};r[o]?r[o].parts.push(l):n.push(r[o]={id:o,parts:[l]})}return n}},52:function(e,t,n){"use strict";function r(e){n(53)}var a=n(50),s=n(56),o=n(16),i=r,c=o(a.a,s.a,!1,i,"data-v-633398a4",null);t.a=c.exports},53:function(e,t,n){var r=n(54);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(49)("20e6eb1e",r,!0,{})},54:function(e,t,n){t=e.exports=n(43)(!1),t.push([e.i,"\na[data-v-633398a4]{\n    color: hsla(0,0%,100%,.7);\n}\na[data-v-633398a4]:hover {\n    color: #57a3f3;\n}\n",""])},55:function(e,t,n){e.exports=n.p+"static/imgs/pass.png"},56:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Menu",{attrs:{mode:"horizontal",theme:e.theme,"active-name":"1"}},[n("MenuItem",{attrs:{name:"1"}},[n("router-link",{attrs:{to:"/index"}},[n("Avatar",{attrs:{src:e.pass}})],1)],1),e._v(" "),n("MenuItem",{attrs:{name:"1"}},[n("router-link",{attrs:{to:"/index"}},[n("Icon",{attrs:{type:"home"}}),e._v("首页")],1)],1),e._v(" "),n("MenuItem",{attrs:{name:"2"}},[n("router-link",{attrs:{to:"/common"}},[n("Icon",{attrs:{type:"unlocked"}}),e._v("常用密码")],1)],1),e._v(" "),n("MenuItem",{attrs:{name:"3"}},[n("router-link",{attrs:{to:"/readme"}},[n("Icon",{attrs:{type:"ios-paperplane"}}),e._v("说明")],1)],1)],1)},a=[],s={render:r,staticRenderFns:a};t.a=s},65:function(e,t,n){"use strict";var r=n(52);t.a={name:"readme",components:{NavMenu:r.a}}},75:function(e,t,n){var r=n(76);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(49)("4a7b78cb",r,!0,{})},76:function(e,t,n){t=e.exports=n(43)(!1),t.push([e.i,"\np[data-v-c9f01a9a]{\n    font-size: 1.6em;\n    padding: 10px 0 0 20px;\n}\n",""])},77:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("nav-menu"),e._v(" "),e._m(0),n("br"),e._v(" "),e._m(1),n("br"),e._v(" "),n("p",[e._v("除了社会工程学密码以外，还提供了一些常用的弱密码（top100，csdn-top1700，常用10000，以及英国国家网络安全中心公布的10万个最常被黑的密码，更多密码字典可自行搜索），两者结合可以大幅提高密码破解概率。")]),e._v(" "),e._m(2),e._v(" "),e._m(3)],1)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("社会工程学密码生成器，是一个利用个人信息生成密码的工具，灵感源于亦思社会工程学字典生成器，但是该软件多年未更新，且生成的密码过少，故根据其构思重新做了一个。"),n("br"),e._v("本工具根据个人信息生成大量相关密码，既可以用于猜解他人密码，也可以用于校验自己密码的安全强度。")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("它根据输入的个人信息，将每条信息进行截取，然后与其他部分的信息进行排列组合（除了个人信息外还包含常用的字符组合如：abc，1qaz，qwer,1234等），生成多种人们可能使用的密码。"),n("br"),e._v("\n        组合共分三阶："),n("br"),e._v("\n        一阶密码：仅根据一项个人信息生成的密码；"),n("br"),e._v("\n        二阶密码：根据两项个人信息组合生成的密码；"),n("br"),e._v("\n        三阶密码：由于部分人喜欢在两项个人信息中间加入一个特殊符号，以加强密码复杂度和强度，为了包含这种情况，故根据两项个人信息以及一个常用的连接符号（默认：.!_-#@:$&*~?%+=/|，建议尽量减少连接符，否则会极大增加密码数量）生成三阶密码。")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("为了安全起见，本程序不会记录任何日志，且代码开源于"),n("a",{attrs:{href:"https://github.com/zgjx6/SocialEngineeringDictionaryGenerator"}},[e._v("我的Github。")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("最后再附一个发现的一个类型的网站 "),n("a",{attrs:{href:"http://www.bugku.com/mima/"}},[e._v("http://www.bugku.com/mima")]),e._v(", 以及"),n("a",{attrs:{href:"https://github.com/r35tart/RW_Password)"}},[e._v("密码字典")]),e._v("、"),n("a",{attrs:{href:"https://pan.baidu.com/s/1PXkEo-Mk6AiFIBUUXhvhVg"}},[e._v("字典超超超全")]),e._v("-提取码:tz2a、"),n("a",{attrs:{href:"https://github.com/rootphantomer/Blasting_dictionary"}},[e._v("爆破字典")]),e._v("。")])}],s={render:r,staticRenderFns:a};t.a=s}});