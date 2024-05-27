"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[75371],{15680:(e,r,n)=>{n.d(r,{xA:()=>p,yg:()=>m});var t=n(296540);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=t.createContext({}),i=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},p=function(e){var r=i(e.components);return t.createElement(u.Provider,{value:r},e.children)},y="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},g=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),y=i(n),g=a,m=y["".concat(u,".").concat(g)]||y[g]||s[g]||l;return n?t.createElement(m,c(c({ref:r},p),{},{components:n})):t.createElement(m,c({ref:r},p))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=n.length,c=new Array(l);c[0]=g;var o={};for(var u in r)hasOwnProperty.call(r,u)&&(o[u]=r[u]);o.originalType=e,o[y]="string"==typeof e?e:a,c[1]=o;for(var i=2;i<l;i++)c[i]=n[i];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},214150:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>c,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var t=n(58168),a=(n(296540),n(15680));const l={title:"SQL Cache",language:"zh-CN"},c=void 0,o={unversionedId:"query/query-cache/sql-cache-manual",id:"version-2.0/query/query-cache/sql-cache-manual",title:"SQL Cache",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/query/query-cache/sql-cache-manual.md",sourceDirName:"query/query-cache",slug:"/query/query-cache/sql-cache-manual",permalink:"/zh-CN/docs/2.0/query/query-cache/sql-cache-manual",draft:!1,tags:[],version:"2.0",frontMatter:{title:"SQL Cache",language:"zh-CN"},sidebar:"docs",previous:{title:"\u7f13\u5b58\u6982\u89c8",permalink:"/zh-CN/docs/2.0/query/query-cache/"},next:{title:"Partition Cache",permalink:"/zh-CN/docs/2.0/query/query-cache/partition-cache-manual"}},u={},i=[{value:"\u9700\u6c42\u573a\u666f &amp; \u89e3\u51b3\u65b9\u6848",id:"\u9700\u6c42\u573a\u666f--\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u8bbe\u8ba1\u539f\u7406",id:"\u8bbe\u8ba1\u539f\u7406",level:2},{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",level:2},{value:"\u7f13\u5b58\u6761\u4ef6",id:"\u7f13\u5b58\u6761\u4ef6",level:2},{value:"\u672a\u5c3d\u4e8b\u9879",id:"\u672a\u5c3d\u4e8b\u9879",level:2}],p={toc:i},y="wrapper";function s(e){let{components:r,...n}=e;return(0,a.yg)(y,(0,t.A)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"SQL \u8bed\u53e5\u5b8c\u5168\u4e00\u81f4\u65f6\u5c06\u547d\u4e2d\u7f13\u5b58\u3002"),(0,a.yg)("h2",{id:"\u9700\u6c42\u573a\u666f--\u89e3\u51b3\u65b9\u6848"},"\u9700\u6c42\u573a\u666f & \u89e3\u51b3\u65b9\u6848"),(0,a.yg)("p",null,"\u89c1 ",(0,a.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.0/query/query-cache/"},"\u7f13\u5b58\u6982\u89c8")," \u6587\u6863\u3002"),(0,a.yg)("h2",{id:"\u8bbe\u8ba1\u539f\u7406"},"\u8bbe\u8ba1\u539f\u7406"),(0,a.yg)("p",null,"SQLCache \u6309 SQL \u7684\u7b7e\u540d\u3001\u67e5\u8be2\u7684\u8868\u7684\u5206\u533a ID\u3001\u5206\u533a\u6700\u65b0\u7248\u672c\u6765\u5b58\u50a8\u548c\u83b7\u53d6\u7f13\u5b58\u3002\u4e09\u8005\u7ec4\u5408\u786e\u5b9a\u4e00\u4e2a\u7f13\u5b58\u6570\u636e\u96c6\uff0c\u4efb\u4f55\u4e00\u4e2a\u53d8\u5316\u4e86\uff0c\u5982 SQL \u6709\u53d8\u5316\uff0c\u5982\u67e5\u8be2\u5b57\u6bb5\u6216\u6761\u4ef6\u4e0d\u4e00\u6837\uff0c\u6216\u6570\u636e\u66f4\u65b0\u540e\u7248\u672c\u53d8\u5316\u4e86\uff0c\u4f1a\u5bfc\u81f4\u547d\u4e2d\u4e0d\u4e86\u7f13\u5b58\u3002"),(0,a.yg)("p",null,"\u5982\u679c\u591a\u5f20\u8868 Join\uff0c\u4f7f\u7528\u6700\u8fd1\u66f4\u65b0\u7684\u5206\u533a ID \u548c\u6700\u65b0\u7684\u7248\u672c\u53f7\uff0c\u5982\u679c\u5176\u4e2d\u4e00\u5f20\u8868\u66f4\u65b0\u4e86\uff0c\u4f1a\u5bfc\u81f4\u5206\u533a ID \u6216\u7248\u672c\u53f7\u4e0d\u4e00\u6837\uff0c\u4e5f\u4e00\u6837\u547d\u4e2d\u4e0d\u4e86\u7f13\u5b58\u3002"),(0,a.yg)("p",null,"SQLCache\uff0c\u66f4\u9002\u5408 T+1 \u66f4\u65b0\u7684\u573a\u666f\uff0c\u51cc\u6668\u6570\u636e\u66f4\u65b0\uff0c\u9996\u6b21\u67e5\u8be2\u4ece BE \u4e2d\u83b7\u53d6\u7ed3\u679c\u653e\u5165\u5230\u7f13\u5b58\u4e2d\uff0c\u540e\u7eed\u76f8\u540c\u67e5\u8be2\u4ece\u7f13\u5b58\u4e2d\u83b7\u53d6\u3002\u5b9e\u65f6\u66f4\u65b0\u6570\u636e\u4e5f\u53ef\u4ee5\u4f7f\u7528\uff0c\u4f46\u662f\u53ef\u80fd\u5b58\u5728\u547d\u4e2d\u7387\u4f4e\u7684\u95ee\u9898\u3002"),(0,a.yg)("p",null,"\u5f53\u524d\u652f\u6301 OlapTable \u5185\u8868 \u548c Hive \u5916\u8868\u3002"),(0,a.yg)("h2",{id:"\u4f7f\u7528\u65b9\u5f0f"},"\u4f7f\u7528\u65b9\u5f0f"),(0,a.yg)("p",null,"\u786e\u4fdd fe.conf \u7684 cache_enable_sql_mode=true\uff08\u9ed8\u8ba4\u662f true\uff09"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-text"},"vim fe/conf/fe.conf\ncache_enable_sql_mode=true\n")),(0,a.yg)("p",null,"\u5728 MySQL \u547d\u4ee4\u884c\u4e2d\u8bbe\u7f6e\u53d8\u91cf"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"MySQL [(none)]> set [global] enable_sql_cache=true;\n")),(0,a.yg)("p",null,"\u6ce8\uff1aglobal \u662f\u5168\u5c40\u53d8\u91cf\uff0c\u4e0d\u52a0\u6307\u5f53\u524d\u4f1a\u8bdd\u53d8\u91cf"),(0,a.yg)("h2",{id:"\u7f13\u5b58\u6761\u4ef6"},"\u7f13\u5b58\u6761\u4ef6"),(0,a.yg)("p",null,"\u7b2c\u4e00\u6b21\u67e5\u8be2\u540e\uff0c\u5982\u679c\u6ee1\u8db3\u4e0b\u9762\u4e09\u4e2a\u6761\u4ef6\uff0c\u67e5\u8be2\u7ed3\u679c\u5c31\u4f1a\u88ab\u7f13\u5b58\u3002"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"(\u5f53\u524d\u65f6\u95f4 - \u67e5\u8be2\u7684\u5206\u533a\u6700\u540e\u66f4\u65b0\u65f6\u95f4) \u5927\u4e8e fe.conf \u4e2d\u7684 cache_last_version_interval_second\u3002")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u67e5\u8be2\u7ed3\u679c\u884c\u6570 \u5c0f\u4e8e fe.conf \u4e2d\u7684 cache_result_max_row_count\u3002")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u67e5\u8be2\u7ed3\u679c bytes \u5c0f\u4e8e fe.conf \u4e2d\u7684 cache_result_max_data_size\u3002"))),(0,a.yg)("p",null,"\u5177\u4f53\u53c2\u6570\u4ecb\u7ecd\u548c\u672a\u5c3d\u4e8b\u9879\u89c1 query-cache.md\u3002"),(0,a.yg)("h2",{id:"\u672a\u5c3d\u4e8b\u9879"},"\u672a\u5c3d\u4e8b\u9879"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"SQL \u4e2d\u5305\u542b\u4ea7\u751f\u968f\u673a\u503c\u7684\u51fd\u6570\uff0c\u6bd4\u5982 random()\uff0c\u4f7f\u7528 QueryCache \u4f1a\u5bfc\u81f4\u67e5\u8be2\u7ed3\u679c\u5931\u53bb\u968f\u673a\u6027\uff0c\u6bcf\u6b21\u6267\u884c\u5c06\u5f97\u5230\u76f8\u540c\u7684\u7ed3\u679c\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u7c7b\u4f3c\u7684 SQL\uff0c\u4e4b\u524d\u67e5\u8be2\u4e86 2 \u4e2a\u6307\u6807\uff0c\u73b0\u5728\u67e5\u8be2 3 \u4e2a\u6307\u6807\uff0c\u662f\u5426\u53ef\u4ee5\u5229\u7528 2 \u4e2a\u6307\u6807\u7684\u7f13\u5b58\uff1f\u76ee\u524d\u4e0d\u652f\u6301"))))}s.isMDXComponent=!0}}]);