"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[43332],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>O});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),y=a,O=u["".concat(i,".").concat(y)]||u[y]||m[y]||l;return n?r.createElement(O,o(o({ref:t},p),{},{components:n})):r.createElement(O,o({ref:t},p))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=y;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},252274:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(58168),a=(n(296540),n(15680));const l={title:"SHOW-CREATE-FUNCTION",language:"zh-CN"},o=void 0,s={unversionedId:"sql-manual/sql-statements/Show-Statements/SHOW-CREATE-FUNCTION",id:"version-2.1/sql-manual/sql-statements/Show-Statements/SHOW-CREATE-FUNCTION",title:"SHOW-CREATE-FUNCTION",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-statements/Show-Statements/SHOW-CREATE-FUNCTION.md",sourceDirName:"sql-manual/sql-statements/Show-Statements",slug:"/sql-manual/sql-statements/Show-Statements/SHOW-CREATE-FUNCTION",permalink:"/zh-CN/docs/sql-manual/sql-statements/Show-Statements/SHOW-CREATE-FUNCTION",draft:!1,tags:[],version:"2.1",frontMatter:{title:"SHOW-CREATE-FUNCTION",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW-CREATE-ROUTINE-LOAD",permalink:"/zh-CN/docs/sql-manual/sql-statements/Show-Statements/SHOW-CREATE-ROUTINE-LOAD"},next:{title:"SHOW-COLUMNS",permalink:"/zh-CN/docs/sql-manual/sql-statements/Show-Statements/SHOW-COLUMNS"}},i={},c=[{value:"SHOW-CREATE-FUNCTION",id:"show-create-function",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"show-create-function"},"SHOW-CREATE-FUNCTION"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"SHOW CREATE FUNCTION"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u5c55\u793a\u7528\u6237\u81ea\u5b9a\u4e49\u51fd\u6570\u7684\u521b\u5efa\u8bed\u53e5"),(0,a.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW CREATE [GLOBAL] FUNCTION function_name(arg_type [, ...]) [FROM db_name]];\n")),(0,a.yg)("p",null,"\u8bf4\u660e\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"      1. `global`: \u8981\u5c55\u793a\u7684\u662f\u5168\u5c40\u51fd\u6570\n      2. `function_name`: \u8981\u5c55\u793a\u7684\u51fd\u6570\u540d\u79f0\n      3. `arg_type`: \u8981\u5c55\u793a\u7684\u51fd\u6570\u7684\u53c2\u6570\u5217\u8868\n      4. \u5982\u679c\u4e0d\u6307\u5b9a db_name\uff0c\u4f7f\u7528\u5f53\u524d\u9ed8\u8ba4 db\n")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},'\u6ce8\u610f: "global"\u5173\u952e\u5b57\u5728v2.0\u7248\u672c\u53ca\u4ee5\u540e\u624d\u53ef\u7528')),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5c55\u793a\u9ed8\u8ba4db\u4e0b\u6307\u5b9a\u51fd\u6570\u7684\u521b\u5efa\u8bed\u53e5"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW CREATE FUNCTION my_add(INT, INT)\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5c55\u793a\u6307\u5b9a\u7684\u5168\u5c40\u51fd\u6570\u7684\u521b\u5efa\u8bed\u53e5"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW CREATE GLOBAL FUNCTION my_add(INT, INT)\n")))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SHOW, CREATE, FUNCTION\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);