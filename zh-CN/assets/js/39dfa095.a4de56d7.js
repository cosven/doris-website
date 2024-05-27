"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[59356],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,y=m["".concat(i,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(y,o(o({ref:t},p),{},{components:n})):a.createElement(y,o({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[m]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},743771:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=n(58168),r=(n(296540),n(15680));const l={title:"SHOW-CATALOG-RECYCLE-BIN",language:"zh-CN"},o=void 0,s={unversionedId:"sql-manual/sql-statements/Show-Statements/SHOW-CATALOG-RECYCLE-BIN",id:"sql-manual/sql-statements/Show-Statements/SHOW-CATALOG-RECYCLE-BIN",title:"SHOW-CATALOG-RECYCLE-BIN",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-statements/Show-Statements/SHOW-CATALOG-RECYCLE-BIN.md",sourceDirName:"sql-manual/sql-statements/Show-Statements",slug:"/sql-manual/sql-statements/Show-Statements/SHOW-CATALOG-RECYCLE-BIN",permalink:"/zh-CN/docs/dev/sql-manual/sql-statements/Show-Statements/SHOW-CATALOG-RECYCLE-BIN",draft:!1,tags:[],version:"current",frontMatter:{title:"SHOW-CATALOG-RECYCLE-BIN",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW-POLICY",permalink:"/zh-CN/docs/dev/sql-manual/sql-statements/Show-Statements/SHOW-POLICY"},next:{title:"SHOW-QUERY-STATS",permalink:"/zh-CN/docs/dev/sql-manual/sql-statements/Show-Statements/SHOW-QUERY-STATS"}},i={},c=[{value:"SHOW-CATALOG-RECYCLE-BIN",id:"show-catalog-recycle-bin",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"show-catalog-recycle-bin"},"SHOW-CATALOG-RECYCLE-BIN"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("version",{since:"1.2"},(0,r.yg)("p",null,"SHOW CATALOG RECYCLE BIN")),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u5c55\u793a\u56de\u6536\u7ad9\u4e2d\u53ef\u56de\u6536\u7684\u5e93,\u8868\u6216\u5206\u533a\u5143\u6570\u636e\u4fe1\u606f"),(0,r.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'SHOW CATALOG RECYCLE BIN [ WHERE NAME [ = "name" | LIKE "name_matcher"] ]\n')),(0,r.yg)("p",null,"\u8bf4\u660e\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"\u5404\u5217\u542b\u4e49\u5982\u4e0b\uff1a\n        Type\uff1a                \u5143\u6570\u636e\u7c7b\u578b:Database\u3001Table\u3001Partition\n        Name\uff1a                \u5143\u6570\u636e\u540d\u79f0      \n        DbId\uff1a                database\u5bf9\u5e94\u7684id\n        TableId\uff1a             table\u5bf9\u5e94\u7684id\n        PartitionId\uff1a         partition\u5bf9\u5e94\u7684id\n        DropTime\uff1a            \u5143\u6570\u636e\u653e\u5165\u56de\u6536\u7ad9\u7684\u65f6\u95f4\n        DataSize\uff1a            \u6570\u636e\u91cf. \u5982\u679c\u5143\u6570\u636e\u7c7b\u578b\u662fdatabase, \u8be5\u503c\u5305\u542b\u4e86database\u4e0b\u5728\u56de\u6536\u7ad9\u4e2d\u7684\u6240\u6709table\u548cpartition\u7684\u6570\u636e\u91cf\n        RemoteDataSize\uff1a      remote storage(hdfs\u6216\u5bf9\u8c61\u5b58\u50a8)\u7684\u6570\u636e\u91cf. \u5982\u679c\u5143\u6570\u636e\u7c7b\u578b\u662fdatabase, \u8be5\u503c\u5305\u542b\u4e86database\u4e0b\u5728\u56de\u6536\u7ad9\u4e2d\u7684\u6240\u6709table\u548cpartition\u7684remote storage\u6570\u636e\u91cf\n")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5c55\u793a\u6240\u6709\u56de\u6536\u7ad9\u5143\u6570\u636e"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"}," SHOW CATALOG RECYCLE BIN;\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5c55\u793a\u56de\u6536\u7ad9\u4e2d\u540d\u79f0'test'\u7684\u5143\u6570\u636e"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"}," SHOW CATALOG RECYCLE BIN WHERE NAME = 'test';\n")))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"SHOW, CATALOG RECYCLE BIN\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);