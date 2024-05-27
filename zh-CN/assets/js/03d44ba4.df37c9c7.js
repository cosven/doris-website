"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[29713],{15680:(e,r,n)=>{n.d(r,{xA:()=>y,yg:()=>d});var t=n(296540);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),c=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},y=function(e){var r=c(e.components);return t.createElement(s.Provider,{value:r},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,y=o(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,d=u["".concat(s,".").concat(f)]||u[f]||p[f]||i;return n?t.createElement(d,l(l({ref:r},y),{},{components:n})):t.createElement(d,l({ref:r},y))}));function d(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=f;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},271303:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var t=n(58168),a=(n(296540),n(15680));const i={title:"ARRAY_FIRST",language:"zh-CN"},l=void 0,o={unversionedId:"sql-manual/sql-functions/array-functions/array-first",id:"version-2.1/sql-manual/sql-functions/array-functions/array-first",title:"ARRAY_FIRST",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/array-functions/array-first.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array-first",permalink:"/zh-CN/docs/sql-manual/sql-functions/array-functions/array-first",draft:!1,tags:[],version:"2.1",frontMatter:{title:"ARRAY_FIRST",language:"zh-CN"},sidebar:"docs",previous:{title:"ARRAY_LAST_INDEX",permalink:"/zh-CN/docs/sql-manual/sql-functions/array-functions/array-last-index"},next:{title:"ARRAY_LAST",permalink:"/zh-CN/docs/sql-manual/sql-functions/array-functions/array-last"}},s={},c=[{value:"array_first",id:"array_first",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],y={toc:c},u="wrapper";function p(e){let{components:r,...n}=e;return(0,a.yg)(u,(0,t.A)({},y,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"array_first"},"array_first"),(0,a.yg)("version",{since:"2.0"},(0,a.yg)("p",null,"array_first")),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("p",null,"\u8fd4\u56de\u6570\u7ec4\u4e2d\u7684\u7b2c\u4e00\u4e2afunc(arr1","[i]",")\u503c\u4e0d\u4e3a0\u7684\u5143\u7d20\u3002\u5f53\u6570\u7ec4\u4e2d\u6240\u6709\u5143\u7d20\u8fdb\u884cfunc(arr1","[i]",")\u90fd\u4e3a0\u65f6\uff0c\u7ed3\u679c\u8fd4\u56de",(0,a.yg)("inlineCode",{parentName:"p"},"NULL"),"\u503c\u3002"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"T array_first(lambda, ARRAY<T>)\n")),(0,a.yg)("p",null,"\u4f7f\u7528\u4e00\u4e2alambda\u8868\u8fbe\u5f0f\u548c\u4e00\u4e2aARRAY\u4f5c\u4e3a\u8f93\u5165\u53c2\u6570\uff0clambda\u8868\u8fbe\u5f0f\u4e3a\u5e03\u5c14\u578b\uff0c\u7528\u4e8e\u5bf9ARRAY\u4e2d\u7684\u6bcf\u4e2a\u5143\u7d20\u8fdb\u884c\u5224\u65ad\u8fd4\u56de\u503c\u3002"),(0,a.yg)("h3",{id:"notice"},"notice"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"\u4ec5\u652f\u6301\u5411\u91cf\u5316\u5f15\u64ce\u4e2d\u4f7f\u7528")),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select array_first(x->x>2, [1,2,3,0]) ;\n+------------------------------------------------------------------------------------------------+\n| array_first(array_filter(ARRAY(1, 2, 3, 0), array_map([x] -> x(0) > 2, ARRAY(1, 2, 3, 0))), -1) |\n+------------------------------------------------------------------------------------------------+\n|                                                                                              3 |\n+------------------------------------------------------------------------------------------------+\n\n\nmysql> select array_first(x->x>4, [1,2,3,0]) ; \n+------------------------------------------------------------------------------------------------+\n| array_first(array_filter(ARRAY(1, 2, 3, 0), array_map([x] -> x(0) > 4, ARRAY(1, 2, 3, 0))), -1) |\n+------------------------------------------------------------------------------------------------+\n|                                                                                           NULL |\n+------------------------------------------------------------------------------------------------+\n\n\nmysql> select array_first(x->x>1, [1,2,3,0]) ;\n+---------------------------------------------------------------------------------------------+\n| array_first(array_filter(ARRAY(1, 2, 3, 0), array_map([x] -> x > 1, ARRAY(1, 2, 3, 0))), 1) |\n+---------------------------------------------------------------------------------------------+\n|                                                                                           2 |\n+---------------------------------------------------------------------------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"ARRAY, LAST, array_first"))}p.isMDXComponent=!0}}]);