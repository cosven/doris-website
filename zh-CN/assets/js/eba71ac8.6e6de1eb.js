"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[26634],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>f});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),c=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(o.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(t),y=a,f=p["".concat(o,".").concat(y)]||p[y]||d[y]||s;return t?r.createElement(f,l(l({ref:n},u),{},{components:t})):r.createElement(f,l({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,l=new Array(s);l[0]=y;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<s;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},580534:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=t(58168),a=(t(296540),t(15680));const s={title:"SHA2",language:"zh-CN"},l=void 0,i={unversionedId:"sql-manual/sql-functions/encrypt-digest-functions/sha2",id:"version-2.1/sql-manual/sql-functions/encrypt-digest-functions/sha2",title:"SHA2",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/encrypt-digest-functions/sha2.md",sourceDirName:"sql-manual/sql-functions/encrypt-digest-functions",slug:"/sql-manual/sql-functions/encrypt-digest-functions/sha2",permalink:"/zh-CN/docs/sql-manual/sql-functions/encrypt-digest-functions/sha2",draft:!1,tags:[],version:"2.1",frontMatter:{title:"SHA2",language:"zh-CN"},sidebar:"docs",previous:{title:"SHA",permalink:"/zh-CN/docs/sql-manual/sql-functions/encrypt-digest-functions/sha"},next:{title:"EXPLODE_JSON_ARRAY",permalink:"/zh-CN/docs/sql-manual/sql-functions/table-functions/explode-json-array"}},o={},c=[{value:"SHA2",id:"sha2",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Arguments",id:"arguments",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"sha2"},"SHA2"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("p",null,"\u4f7f\u7528SHA2\u5bf9\u4fe1\u606f\u8fdb\u884c\u6458\u8981\u5904\u7406\u3002"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"SHA2(str, digest_length)")),(0,a.yg)("h4",{id:"arguments"},"Arguments"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"str"),": \u5f85\u52a0\u5bc6\u7684\u5185\u5bb9"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"digest_length"),": \u6458\u8981\u957f\u5ea6\uff0c\u652f\u6301 224, 256, 384, 512")),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-SQL"},"mysql> select sha2('abc', 224);\n+----------------------------------------------------------+\n| sha2('abc', 224)                                         |\n+----------------------------------------------------------+\n| 23097d223405d8228642a477bda255b32aadbce4bda0b3f7e36c9da7 |\n+----------------------------------------------------------+\n1 row in set (0.13 sec)\n\nmysql> select sha2('abc', 384);\n+--------------------------------------------------------------------------------------------------+\n| sha2('abc', 384)                                                                                 |\n+--------------------------------------------------------------------------------------------------+\n| cb00753f45a35e8bb5a03d699ac65007272c32ab0eded1631a8b605a43ff5bed8086072ba1e7cc2358baeca134c825a7 |\n+--------------------------------------------------------------------------------------------------+\n1 row in set (0.13 sec)\n\nmysql> select sha2(NULL, 512);\n+-----------------+\n| sha2(NULL, 512) |\n+-----------------+\n| NULL            |\n+-----------------+\n1 row in set (0.09 sec)\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SHA2, SHA224, SHA256, SHAA384, SHA512\n")))}d.isMDXComponent=!0}}]);