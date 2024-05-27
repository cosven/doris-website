"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[3414],{15680:(e,n,r)=>{r.d(n,{xA:()=>u,yg:()=>d});var t=r(296540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=t.createContext({}),s=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},u=function(e){var n=s(e.components);return t.createElement(i.Provider,{value:n},e.children)},y="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),y=s(r),f=a,d=y["".concat(i,".").concat(f)]||y[f]||p[f]||l;return r?t.createElement(d,o(o({ref:n},u),{},{components:r})):t.createElement(d,o({ref:n},u))}));function d(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=f;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c[y]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<l;s++)o[s]=r[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},38e4:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var t=r(58168),a=(r(296540),r(15680));const l={title:"ARRAY_EXCEPT",language:"zh-CN"},o=void 0,c={unversionedId:"sql-manual/sql-functions/array-functions/array-except",id:"version-2.1/sql-manual/sql-functions/array-functions/array-except",title:"ARRAY_EXCEPT",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/array-functions/array-except.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array-except",permalink:"/zh-CN/docs/sql-manual/sql-functions/array-functions/array-except",draft:!1,tags:[],version:"2.1",frontMatter:{title:"ARRAY_EXCEPT",language:"zh-CN"},sidebar:"docs",previous:{title:"ARRAY_CONTAINS",permalink:"/zh-CN/docs/sql-manual/sql-functions/array-functions/array-contains"},next:{title:"ARRAY_PRODUCT",permalink:"/zh-CN/docs/sql-manual/sql-functions/array-functions/array-product"}},i={},s=[{value:"array_except",id:"array_except",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s},y="wrapper";function p(e){let{components:n,...r}=e;return(0,a.yg)(y,(0,t.A)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"array_except"},"array_except"),(0,a.yg)("version",{since:"1.2.0"},(0,a.yg)("p",null,"array_except")),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"ARRAY<T> array_except(ARRAY<T> array1, ARRAY<T> array2)")),(0,a.yg)("p",null,"\u8fd4\u56de\u4e00\u4e2a\u6570\u7ec4\uff0c\u5305\u542b\u6240\u6709\u5728array1\u5185\u4f46\u4e0d\u5728array2\u5185\u7684\u5143\u7d20\uff0c\u4e0d\u5305\u542b\u91cd\u590d\u9879\uff0c\u5982\u679c\u8f93\u5165\u53c2\u6570\u4e3aNULL\uff0c\u5219\u8fd4\u56deNULL"),(0,a.yg)("h3",{id:"notice"},"notice"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"\u4ec5\u652f\u6301\u5411\u91cf\u5316\u5f15\u64ce\u4e2d\u4f7f\u7528")),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> set enable_vectorized_engine=true;\n\nmysql> select k1,k2,k3,array_except(k2,k3) from array_type_table;\n+------+-----------------+--------------+--------------------------+\n| k1   | k2              | k3           | array_except(`k2`, `k3`) |\n+------+-----------------+--------------+--------------------------+\n|    1 | [1, 2, 3]       | [2, 4, 5]    | [1, 3]                   |\n|    2 | [2, 3]          | [1, 5]       | [2, 3]                   |\n|    3 | [1, 1, 1]       | [2, 2, 2]    | [1]                      |\n+------+-----------------+--------------+--------------------------+\n\nmysql> select k1,k2,k3,array_except(k2,k3) from array_type_table_nullable;\n+------+-----------------+--------------+--------------------------+\n| k1   | k2              | k3           | array_except(`k2`, `k3`) |\n+------+-----------------+--------------+--------------------------+\n|    1 | [1, NULL, 3]    | [1, 3, 5]    | [NULL]                   |\n|    2 | [NULL, NULL, 2] | [2, NULL, 4] | []                       |\n|    3 | NULL            | [1, 2, 3]    | NULL                     |\n+------+-----------------+--------------+--------------------------+\n\nmysql> select k1,k2,k3,array_except(k2,k3) from array_type_table_varchar;\n+------+----------------------------+----------------------------------+--------------------------+\n| k1   | k2                         | k3                               | array_except(`k2`, `k3`) |\n+------+----------------------------+----------------------------------+--------------------------+\n|    1 | ['hello', 'world', 'c++']  | ['I', 'am', 'c++']               | ['hello', 'world']       |\n|    2 | ['a1', 'equals', 'b1']     | ['a2', 'equals', 'b2']           | ['a1', 'b1']             |\n|    3 | ['hasnull', NULL, 'value'] | ['nohasnull', 'nonull', 'value'] | ['hasnull', NULL]        |\n|    3 | ['hasnull', NULL, 'value'] | ['hasnull', NULL, 'value']       | []                       |\n+------+----------------------------+----------------------------------+--------------------------+\n\nmysql> select k1,k2,k3,array_except(k2,k3) from array_type_table_decimal;\n+------+------------------+-------------------+--------------------------+\n| k1   | k2               | k3                | array_except(`k2`, `k3`) |\n+------+------------------+-------------------+--------------------------+\n|    1 | [1.1, 2.1, 3.44] | [2.1, 3.4, 5.4]   | [1.1, 3.44]              |\n|    2 | [NULL, 2, 5]     | [NULL, NULL, 5.4] | [2, 5]                   |\n|    1 | [1, NULL, 2, 5]  | [1, 3.1, 5.4]     | [NULL, 2, 5]             |\n+------+------------------+-------------------+--------------------------+\n\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"ARRAY,EXCEPT,ARRAY_EXCEPT"))}p.isMDXComponent=!0}}]);