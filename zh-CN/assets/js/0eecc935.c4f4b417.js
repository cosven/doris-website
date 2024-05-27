"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[16870],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>d});var o=t(296540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=o.createContext({}),c=function(e){var n=o.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return o.createElement(u.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(t),f=r,d=p["".concat(u,".").concat(f)]||p[f]||m[f]||a;return t?o.createElement(d,i(i({ref:n},s),{},{components:t})):o.createElement(d,i({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=f;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},283429:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=t(58168),r=(t(296540),t(15680));const a={title:"ORTHOGONAL_BITMAP_UNION_COUNT",language:"zh-CN"},i=void 0,l={unversionedId:"sql-manual/sql-functions/bitmap-functions/orthogonal-bitmap-union-count",id:"version-2.0/sql-manual/sql-functions/bitmap-functions/orthogonal-bitmap-union-count",title:"ORTHOGONAL_BITMAP_UNION_COUNT",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/bitmap-functions/orthogonal-bitmap-union-count.md",sourceDirName:"sql-manual/sql-functions/bitmap-functions",slug:"/sql-manual/sql-functions/bitmap-functions/orthogonal-bitmap-union-count",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/bitmap-functions/orthogonal-bitmap-union-count",draft:!1,tags:[],version:"2.0",frontMatter:{title:"ORTHOGONAL_BITMAP_UNION_COUNT",language:"zh-CN"},sidebar:"docs",previous:{title:"BITMAP_AND_NOT_COUNT,BITMAP_ANDNOT_COUNT",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/bitmap-functions/bitmap-and-not-count"},next:{title:"BITMAP_XOR_COUNT",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/bitmap-functions/bitmap-xor-count"}},u={},c=[{value:"orthogonal_bitmap_union_count",id:"orthogonal_bitmap_union_count",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],s={toc:c},p="wrapper";function m(e){let{components:n,...t}=e;return(0,r.yg)(p,(0,o.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"orthogonal_bitmap_union_count"},"orthogonal_bitmap_union_count"),(0,r.yg)("h3",{id:"description"},"description"),(0,r.yg)("h4",{id:"syntax"},"Syntax"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"BITMAP ORTHOGONAL_BITMAP_UNION_COUNT(bitmap_column, column_to_filter, filter_values)"),"\n\u6c42bitmap\u5e76\u96c6\u5927\u5c0f\u7684\u51fd\u6570, \u53c2\u6570\u7c7b\u578b\u662fbitmap\uff0c\u662f\u5f85\u6c42\u5e76\u96c6count\u7684\u5217"),(0,r.yg)("h3",{id:"example"},"example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"mysql> select orthogonal_bitmap_union_count(members) from tag_map where  tag_group in ( 1150000, 1150001, 390006);\n+------------------------------------------+\n| orthogonal_bitmap_union_count(`members`) |\n+------------------------------------------+\n|                                286957811 |\n+------------------------------------------+\n1 row in set (2.645 sec)\n")),(0,r.yg)("h3",{id:"keywords"},"keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"ORTHOGONAL_BITMAP_UNION_COUNT,BITMAP\n")))}m.isMDXComponent=!0}}]);