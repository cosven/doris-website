"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[35905],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>d});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(t),m=a,d=h["".concat(i,".").concat(m)]||h[m]||p[m]||l;return t?r.createElement(d,o(o({ref:n},u),{},{components:t})):r.createElement(d,o({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[h]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<l;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},756331:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=t(58168),a=(t(296540),t(15680));const l={title:"XXHASH_64",language:"en"},o=void 0,s={unversionedId:"sql-manual/sql-functions/hash-functions/xxhash-64",id:"sql-manual/sql-functions/hash-functions/xxhash-64",title:"XXHASH_64",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/hash-functions/xxhash-64.md",sourceDirName:"sql-manual/sql-functions/hash-functions",slug:"/sql-manual/sql-functions/hash-functions/xxhash-64",permalink:"/docs/dev/sql-manual/sql-functions/hash-functions/xxhash-64",draft:!1,tags:[],version:"current",frontMatter:{title:"XXHASH_64",language:"en"},sidebar:"docs",previous:{title:"XXHASH_32",permalink:"/docs/dev/sql-manual/sql-functions/hash-functions/xxhash-32"},next:{title:"HLL_CARDINALITY",permalink:"/docs/dev/sql-manual/sql-functions/hll-functions/hll-cardinality"}},i={},c=[{value:"xxhash_64",id:"xxhash_64",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"benchmark",id:"benchmark",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},h="wrapper";function p(e){let{components:n,...t}=e;return(0,a.yg)(h,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"xxhash_64"},"xxhash_64"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"BIGINT XXHASH_64(VARCHAR input, ...)")),(0,a.yg)("p",null,"Return the 64 bits xxhash of input string."),(0,a.yg)("p",null,"Note: When calculating hash values, it is more recommended to use ",(0,a.yg)("inlineCode",{parentName:"p"},"xxhash_64")," instead of ",(0,a.yg)("inlineCode",{parentName:"p"},"murmur_hash3_64"),"."),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select xxhash_64(NULL);\n+-----------------+\n| xxhash_64(NULL) |\n+-----------------+\n|            NULL |\n+-----------------+\n\nmysql> select xxhash_64(\"hello\");\n+----------------------+\n| xxhash_64('hello')   |\n+----------------------+\n| -7685981735718036227 |\n+----------------------+\n\nmysql> select xxhash_64(\"hello\", \"world\");\n+-----------------------------+\n| xxhash_64('hello', 'world') |\n+-----------------------------+\n|         7001965798170371843 |\n+-----------------------------+\n")),(0,a.yg)("h3",{id:"benchmark"},"benchmark"),(0,a.yg)("p",null,"Through TPCH Benchmark testing, it was found that ",(0,a.yg)("inlineCode",{parentName:"p"},"xxhash_64")," has significantly improved performance compared to ",(0,a.yg)("inlineCode",{parentName:"p"},"murmur_hash3_64"),". Therefore, in scenarios where hash values need to be calculated, it is more recommended to use ",(0,a.yg)("inlineCode",{parentName:"p"},"xxhash_64"),"."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select count(murmur_hash3_64(l_comment)) from lineitem;\n+-----------------------------------+\n| count(murmur_hash3_64(l_comment)) |\n+-----------------------------------+\n|                         600037902 |\n+-----------------------------------+\n1 row in set (17.18 sec)\n\nmysql> select count(xxhash_64(l_comment)) from lineitem;\n+-----------------------------+\n| count(xxhash_64(l_comment)) |\n+-----------------------------+\n|                   600037902 |\n+-----------------------------+\n1 row in set (8.41 sec)\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"XXHASH_64,HASH"))}p.isMDXComponent=!0}}]);