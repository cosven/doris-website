"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[11499],{15680:(n,t,e)=>{e.d(t,{xA:()=>s,yg:()=>f});var r=e(296540);function o(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function a(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function i(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?a(Object(e),!0).forEach((function(t){o(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function l(n,t){if(null==n)return{};var e,r,o=function(n,t){if(null==n)return{};var e,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)e=a[r],t.indexOf(e)>=0||(o[e]=n[e]);return o}(n,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)e=a[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(o[e]=n[e])}return o}var c=r.createContext({}),u=function(n){var t=r.useContext(c),e=t;return n&&(e="function"==typeof n?n(t):i(i({},t),n)),e},s=function(n){var t=u(n.components);return r.createElement(c.Provider,{value:t},n.children)},p="mdxType",m={inlineCode:"code",wrapper:function(n){var t=n.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(n,t){var e=n.components,o=n.mdxType,a=n.originalType,c=n.parentName,s=l(n,["components","mdxType","originalType","parentName"]),p=u(e),d=o,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||a;return e?r.createElement(f,i(i({ref:t},s),{},{components:e})):r.createElement(f,i({ref:t},s))}));function f(n,t){var e=arguments,o=t&&t.mdxType;if("string"==typeof n||o){var a=e.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=n,l[p]="string"==typeof n?n:o,i[1]=l;for(var u=2;u<a;u++)i[u]=e[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,e)}d.displayName="MDXCreateElement"},550451:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=e(58168),o=(e(296540),e(15680));const a={title:"BITMAP_AND_NOT_COUNT,BITMAP_ANDNOT_COUNT",language:"zh-CN"},i=void 0,l={unversionedId:"sql-manual/sql-functions/bitmap-functions/bitmap-and-not-count",id:"version-2.0/sql-manual/sql-functions/bitmap-functions/bitmap-and-not-count",title:"BITMAP_AND_NOT_COUNT,BITMAP_ANDNOT_COUNT",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/bitmap-functions/bitmap-and-not-count.md",sourceDirName:"sql-manual/sql-functions/bitmap-functions",slug:"/sql-manual/sql-functions/bitmap-functions/bitmap-and-not-count",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/bitmap-functions/bitmap-and-not-count",draft:!1,tags:[],version:"2.0",frontMatter:{title:"BITMAP_AND_NOT_COUNT,BITMAP_ANDNOT_COUNT",language:"zh-CN"},sidebar:"docs",previous:{title:"BITMAP_AND_COUNT",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/bitmap-functions/bitmap-and-count"},next:{title:"ORTHOGONAL_BITMAP_UNION_COUNT",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/bitmap-functions/orthogonal-bitmap-union-count"}},c={},u=[{value:"bitmap_and_not_count,bitmap_andnot_count",id:"bitmap_and_not_countbitmap_andnot_count",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],s={toc:u},p="wrapper";function m(n){let{components:t,...e}=n;return(0,o.yg)(p,(0,r.A)({},s,e,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"bitmap_and_not_countbitmap_andnot_count"},"bitmap_and_not_count,bitmap_andnot_count"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"BITMAP BITMAP_AND_NOT_COUNT(BITMAP lhs, BITMAP rhs)")),(0,o.yg)("p",null,"\u5c06\u4e24\u4e2abitmap\u8fdb\u884c\u4e0e\u975e\u64cd\u4f5c\u5e76\u8fd4\u56de\u8ba1\u7b97\u8fd4\u56de\u7684\u5927\u5c0f."),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> select bitmap_and_not_count(bitmap_from_string('1,2,3'),bitmap_from_string('3,4,5')) cnt;\n+------+\n| cnt  |\n+------+\n|    2 |\n+------+\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"BITMAP_AND_NOT_COUNT,BITMAP_ANDNOT_COUNT,BITMAP\n")))}m.isMDXComponent=!0}}]);