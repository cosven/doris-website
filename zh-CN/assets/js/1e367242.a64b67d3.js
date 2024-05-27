"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[1595],{15680:(e,l,n)=>{n.d(l,{xA:()=>h,yg:()=>f});var t=n(296540);function r(e,l,n){return l in e?Object.defineProperty(e,l,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[l]=n,e}function a(e,l){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);l&&(t=t.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var l=1;l<arguments.length;l++){var n=null!=arguments[l]?arguments[l]:{};l%2?a(Object(n),!0).forEach((function(l){r(e,l,n[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(n,l))}))}return e}function i(e,l){if(null==e)return{};var n,t,r=function(e,l){if(null==e)return{};var n,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],l.indexOf(n)>=0||(r[n]=e[n]);return r}(e,l);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],l.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),c=function(e){var l=t.useContext(s),n=l;return e&&(n="function"==typeof e?e(l):o(o({},l),e)),n},h=function(e){var l=c(e.components);return t.createElement(s.Provider,{value:l},e.children)},u="mdxType",_={inlineCode:"code",wrapper:function(e){var l=e.children;return t.createElement(t.Fragment,{},l)}},p=t.forwardRef((function(e,l){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),u=c(n),p=r,f=u["".concat(s,".").concat(p)]||u[p]||_[p]||a;return n?t.createElement(f,o(o({ref:l},h),{},{components:n})):t.createElement(f,o({ref:l},h))}));function f(e,l){var n=arguments,r=l&&l.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var i={};for(var s in l)hasOwnProperty.call(l,s)&&(i[s]=l[s]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<a;c++)o[c]=n[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},515768:(e,l,n)=>{n.r(l),n.d(l,{assets:()=>s,contentTitle:()=>o,default:()=>_,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var t=n(58168),r=(n(296540),n(15680));const a={title:"HLL_FROM_BASE64",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-functions/hll-functions/hll-from-base64",id:"sql-manual/sql-functions/hll-functions/hll-from-base64",title:"HLL_FROM_BASE64",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/hll-functions/hll-from-base64.md",sourceDirName:"sql-manual/sql-functions/hll-functions",slug:"/sql-manual/sql-functions/hll-functions/hll-from-base64",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/hll-functions/hll-from-base64",draft:!1,tags:[],version:"current",frontMatter:{title:"HLL_FROM_BASE64",language:"zh-CN"},sidebar:"docs",previous:{title:"HLL_EMPTY",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/hll-functions/hll-empty"},next:{title:"HLL_HASH",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/hll-functions/hll-hash"}},s={},c=[{value:"hll_from_base64",id:"hll_from_base64",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"\u67e5\u8be2\u793a\u4f8b",id:"\u67e5\u8be2\u793a\u4f8b",level:4},{value:"\u6570\u636e\u5bfc\u5165\u793a\u4f8b\uff1a",id:"\u6570\u636e\u5bfc\u5165\u793a\u4f8b",level:4},{value:"keywords",id:"keywords",level:3}],h={toc:c},u="wrapper";function _(e){let{components:l,...n}=e;return(0,r.yg)(u,(0,t.A)({},h,n,{components:l,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"hll_from_base64"},"hll_from_base64"),(0,r.yg)("h3",{id:"description"},"description"),(0,r.yg)("h4",{id:"syntax"},"Syntax"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"HLL HLL_FROM_BASE64(VARCHAR input)")),(0,r.yg)("p",null,"\u5c06\u4e00\u4e2abase64\u5b57\u7b26\u4e32(",(0,r.yg)("inlineCode",{parentName:"p"},"hll_to_base64"),"\u51fd\u6570\u7684\u7ed3\u679c)\u8f6c\u5316\u4e3a\u4e00\u4e2aHLL\u3002\u5f53\u8f93\u5165\u5b57\u7b26\u4e32\u4e0d\u5408\u6cd5\u65f6\uff0c\u8fd4\u56deNULL\u3002"),(0,r.yg)("h3",{id:"example"},"example"),(0,r.yg)("h4",{id:"\u67e5\u8be2\u793a\u4f8b"},"\u67e5\u8be2\u793a\u4f8b"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"mysql> select hll_union_agg(hll_from_base64(hll_to_base64(pv))), hll_union_agg(pv) from test_hll;\n+---------------------------------------------------+-------------------+\n| hll_union_agg(hll_from_base64(hll_to_base64(pv))) | hll_union_agg(pv) |\n+---------------------------------------------------+-------------------+\n|                                                 3 |                 3 |\n+---------------------------------------------------+-------------------+\n1 row in set (0.04 sec)\n\nmysql>  select hll_cardinality(hll_from_base64(hll_to_base64(hll_hash('abc'))));\n+------------------------------------------------------------------+\n| hll_cardinality(hll_from_base64(hll_to_base64(hll_hash('abc')))) |\n+------------------------------------------------------------------+\n|                                                                1 |\n+------------------------------------------------------------------+\n1 row in set (0.04 sec)\n\nmysql> select hll_cardinality(hll_from_base64(hll_to_base64(hll_hash(''))));\n+---------------------------------------------------------------+\n| hll_cardinality(hll_from_base64(hll_to_base64(hll_hash('')))) |\n+---------------------------------------------------------------+\n|                                                             1 |\n+---------------------------------------------------------------+\n1 row in set (0.02 sec)\n\nmysql> select hll_cardinality(hll_from_base64(hll_to_base64(hll_hash(NULL))));\n+-----------------------------------------------------------------+\n| hll_cardinality(hll_from_base64(hll_to_base64(hll_hash(NULL)))) |\n+-----------------------------------------------------------------+\n|                                                               0 |\n+-----------------------------------------------------------------+\n1 row in set (0.02 sec)\n")),(0,r.yg)("h4",{id:"\u6570\u636e\u5bfc\u5165\u793a\u4f8b"},"\u6570\u636e\u5bfc\u5165\u793a\u4f8b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"\u524d\u7f6e\u6761\u4ef6\uff1a\n1. \u5728 Hive \u4e2d\u5df2\u7ecf\u521b\u5efa\u597d\u4e00\u4e2a\u540d\u4e3a hive_test.hive_hll_table \u7684 Hive \u8868\uff08\u683c\u5f0f\u4e3a textfile \uff0c\u5b57\u6bb5\u4e3a\uff1a`k1` int, `k2` String, `k3` String, `uuid` binary\uff09\uff0c\u5e76\u4e14\u5df2\u7ecf\u57fa\u4e8e\u666e\u901a\u8868\u4f7f\u7528 to_hll \u7684UDF\u51fd\u6570\u5f80\u8be5\u8868\u63d2\u5165\u6570\u636e\u3002\n\n2. \u5728 Doris \u4e2d\u521b\u5efa\u540d\u4e3a hive \u7684 Catalog \u7528\u6765\u8fde\u63a5\u3002\n\n3. \u521b\u5efa\u597d Doris \u5185\u8868\uff0c\u540d\u4e3a doris_hll_table\uff0c\u5b57\u6bb5\u6709\uff1a`k1` int, `k2` varchar(10), `k3` varchar(10), `uuid` HLL HLL_UNION\u3002\n\n\u90a3\u4e48\uff0c\u6b64\u65f6\u53ef\u4ee5\u4f7f\u7528 hll_from_base64 \u51fd\u6570\u4ece Hive \u63d2\u5165\u6570\u636e\u5230 Doris \u4e2d\uff1a\ninsert into doris_hll_table select k1, k2, k3, hll_from_base64(uuid) from hive.hive_test.hive_hll_table;\n")),(0,r.yg)("p",null,"\u66f4\u591a\u5bfc\u5165\u7ec6\u8282\u53ef\u4ee5\u53c2\u8003\uff1a",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/dev/ecosystem/hive-hll-udf"},"Hive HLL UDF")),(0,r.yg)("h3",{id:"keywords"},"keywords"),(0,r.yg)("p",null,"HLL_FROM_BASE64,HLL"))}_.isMDXComponent=!0}}]);