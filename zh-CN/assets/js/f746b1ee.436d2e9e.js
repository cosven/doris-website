"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[73289],{15680:(e,n,r)=>{r.d(n,{xA:()=>c,yg:()=>f});var t=r(296540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function u(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=t.createContext({}),i=function(e){var n=t.useContext(o),r=n;return e&&(r="function"==typeof e?e(n):u(u({},n),e)),r},c=function(e){var n=i(e.components);return t.createElement(o.Provider,{value:n},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=i(r),p=a,f=m["".concat(o,".").concat(p)]||m[p]||h[p]||l;return r?t.createElement(f,u(u({ref:n},c),{},{components:r})):t.createElement(f,u({ref:n},c))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,u=new Array(l);u[0]=p;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[m]="string"==typeof e?e:a,u[1]=s;for(var i=2;i<l;i++)u[i]=r[i];return t.createElement.apply(null,u)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},773053:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>u,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var t=r(58168),a=(r(296540),r(15680));const l={title:"murmur_hash3_64",language:"zh-CN"},u=void 0,s={unversionedId:"sql-manual/sql-functions/hash-functions/murmur_hash3_64",id:"version-1.2/sql-manual/sql-functions/hash-functions/murmur_hash3_64",title:"murmur_hash3_64",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/hash-functions/murmur_hash3_64.md",sourceDirName:"sql-manual/sql-functions/hash-functions",slug:"/sql-manual/sql-functions/hash-functions/murmur_hash3_64",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/hash-functions/murmur_hash3_64",draft:!1,tags:[],version:"1.2",frontMatter:{title:"murmur_hash3_64",language:"zh-CN"},sidebar:"docs",previous:{title:"murmur_hash3_32",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/hash-functions/murmur_hash3_32"},next:{title:"HLL_CARDINALITY",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/hll-functions/hll_cardinality"}},o={},i=[{value:"murmur_hash3_64",id:"murmur_hash3_64",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:i},m="wrapper";function h(e){let{components:n,...r}=e;return(0,a.yg)(m,(0,t.A)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"murmur_hash3_64"},"murmur_hash3_64"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"BIGINT MURMUR_HASH3_64(VARCHAR input, ...)")),(0,a.yg)("p",null,"\u8fd4\u56de\u8f93\u5165\u5b57\u7b26\u4e32\u768464\u4f4dmurmur3 hash\u503c"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select murmur_hash3_64(null);\n+-----------------------+\n| murmur_hash3_64(NULL) |\n+-----------------------+\n|                  NULL |\n+-----------------------+\n\nmysql> select murmur_hash3_64(\"hello\");\n+--------------------------+\n| murmur_hash3_64('hello') |\n+--------------------------+\n|     -3215607508166160593 |\n+--------------------------+\n\nmysql> select murmur_hash3_64(\"hello\", \"world\");\n+-----------------------------------+\n| murmur_hash3_64('hello', 'world') |\n+-----------------------------------+\n|               3583109472027628045 |\n+-----------------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"MURMUR_HASH3_64,HASH\n")))}h.isMDXComponent=!0}}]);