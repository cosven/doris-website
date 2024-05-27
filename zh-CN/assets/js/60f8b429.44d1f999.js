"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[49794],{15680:(e,n,r)=>{r.d(n,{xA:()=>u,yg:()=>f});var a=r(296540);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var c=a.createContext({}),s=function(e){var n=a.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},y="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),y=s(r),d=t,f=y["".concat(c,".").concat(d)]||y[d]||p[d]||o;return r?a.createElement(f,i(i({ref:n},u),{},{components:r})):a.createElement(f,i({ref:n},u))}));function f(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[y]="string"==typeof e?e:t,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},687250:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=r(58168),t=(r(296540),r(15680));const o={title:"array_contains",language:"zh-CN"},i=void 0,l={unversionedId:"sql-manual/sql-functions/array-functions/array_contains",id:"version-1.2/sql-manual/sql-functions/array-functions/array_contains",title:"array_contains",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/array-functions/array_contains.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array_contains",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/array-functions/array_contains",draft:!1,tags:[],version:"1.2",frontMatter:{title:"array_contains",language:"zh-CN"},sidebar:"docs",previous:{title:"array_position",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/array-functions/array_position"},next:{title:"array_except",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/array-functions/array_except"}},c={},s=[{value:"array_contains",id:"array_contains",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s},y="wrapper";function p(e){let{components:n,...r}=e;return(0,t.yg)(y,(0,a.A)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"array_contains"},"array_contains"),(0,t.yg)("version",{since:"1.2.0"},(0,t.yg)("p",null,"array_contains")),(0,t.yg)("h3",{id:"description"},"description"),(0,t.yg)("h4",{id:"syntax"},"Syntax"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"BOOLEAN array_contains(ARRAY<T> arr, T value)")),(0,t.yg)("p",null,"\u5224\u65ad\u6570\u7ec4\u4e2d\u662f\u5426\u5305\u542bvalue\u3002\u8fd4\u56de\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"1    - value\u5728\u6570\u7ec4arr\u4e2d\u5b58\u5728\uff1b\n0    - value\u4e0d\u5b58\u5728\u6570\u7ec4arr\u4e2d\uff1b\nNULL - arr\u4e3aNULL\u65f6\u3002\n")),(0,t.yg)("h3",{id:"notice"},"notice"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"\u4ec5\u652f\u6301\u5411\u91cf\u5316\u5f15\u64ce\u4e2d\u4f7f\u7528")),(0,t.yg)("h3",{id:"example"},"example"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"mysql> set enable_vectorized_engine=true;\n\nmysql> SELECT id,c_array,array_contains(c_array, 5) FROM `array_test`;\n+------+-----------------+------------------------------+\n| id   | c_array         | array_contains(`c_array`, 5) |\n+------+-----------------+------------------------------+\n|    1 | [1, 2, 3, 4, 5] |                            1 |\n|    2 | [6, 7, 8]       |                            0 |\n|    3 | []              |                            0 |\n|    4 | NULL            |                         NULL |\n+------+-----------------+------------------------------+\n\nmysql> select array_contains([null, 1], null);\n+--------------------------------------+\n| array_contains(ARRAY(NULL, 1), NULL) |\n+--------------------------------------+\n|                                    1 |\n+--------------------------------------+\n1 row in set (0.00 sec)\n")),(0,t.yg)("h3",{id:"keywords"},"keywords"),(0,t.yg)("p",null,"ARRAY,CONTAIN,CONTAINS,ARRAY_CONTAINS"))}p.isMDXComponent=!0}}]);