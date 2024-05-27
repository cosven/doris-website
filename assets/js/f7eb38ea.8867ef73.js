"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[98888],{15680:(e,r,n)=>{n.d(r,{xA:()=>y,yg:()=>d});var t=n(296540);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=t.createContext({}),c=function(e){var r=t.useContext(o),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},y=function(e){var r=c(e.components);return t.createElement(o.Provider,{value:r},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,y=s(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,d=u["".concat(o,".").concat(f)]||u[f]||p[f]||i;return n?t.createElement(d,l(l({ref:r},y),{},{components:n})):t.createElement(d,l({ref:r},y))}));function d(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=f;var s={};for(var o in r)hasOwnProperty.call(r,o)&&(s[o]=r[o]);s.originalType=e,s[u]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<i;c++)l[c]=n[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},761876:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var t=n(58168),a=(n(296540),n(15680));const i={title:"ARRAY_FIRST",language:"en"},l=void 0,s={unversionedId:"sql-manual/sql-functions/array-functions/array-first",id:"version-2.1/sql-manual/sql-functions/array-functions/array-first",title:"ARRAY_FIRST",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-functions/array-functions/array-first.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array-first",permalink:"/docs/sql-manual/sql-functions/array-functions/array-first",draft:!1,tags:[],version:"2.1",frontMatter:{title:"ARRAY_FIRST",language:"en"},sidebar:"docs",previous:{title:"ARRAY_LAST_INDEX",permalink:"/docs/sql-manual/sql-functions/array-functions/array-last-index"},next:{title:"ARRAY_LAST",permalink:"/docs/sql-manual/sql-functions/array-functions/array-last"}},o={},c=[{value:"array_first",id:"array_first",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],y={toc:c},u="wrapper";function p(e){let{components:r,...n}=e;return(0,a.yg)(u,(0,t.A)({},y,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"array_first"},"array_first"),(0,a.yg)("version",{since:"2.0"},(0,a.yg)("p",null,"array_first")),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("p",null,"Returns the first element in the array for which func(arr1","[i]",") returns something other than 0."),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"T array_first(lambda, ARRAY<T>)\n")),(0,a.yg)("p",null,"Use a lambda bool expression and an array as the input parameters, the lambda expression is used to evaluate the internal data of other input ARRAY parameters."),(0,a.yg)("h3",{id:"notice"},"notice"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"Only supported in vectorized engine")),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select array_first(x->x>2, [1,2,3,0]) ;\n+------------------------------------------------------------------------------------------------+\n| array_first(array_filter(ARRAY(1, 2, 3, 0), array_map([x] -> x(0) > 2, ARRAY(1, 2, 3, 0))), -1) |\n+------------------------------------------------------------------------------------------------+\n|                                                                                              3 |\n+------------------------------------------------------------------------------------------------+\n\n\nmysql> select array_first(x->x>4, [1,2,3,0]) ; \n+------------------------------------------------------------------------------------------------+\n| array_first(array_filter(ARRAY(1, 2, 3, 0), array_map([x] -> x(0) > 4, ARRAY(1, 2, 3, 0))), -1) |\n+------------------------------------------------------------------------------------------------+\n|                                                                                           NULL |\n+------------------------------------------------------------------------------------------------+\n\n\nmysql> select array_first(x->x>1, [1,2,3,0]) ;\n+---------------------------------------------------------------------------------------------+\n| array_first(array_filter(ARRAY(1, 2, 3, 0), array_map([x] -> x > 1, ARRAY(1, 2, 3, 0))), 1) |\n+---------------------------------------------------------------------------------------------+\n|                                                                                           2 |\n+---------------------------------------------------------------------------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"ARRAY, LAST, array_first"))}p.isMDXComponent=!0}}]);