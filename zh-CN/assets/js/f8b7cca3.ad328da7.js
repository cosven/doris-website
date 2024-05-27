"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[54786],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},E=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),E=r,y=m["".concat(s,".").concat(E)]||m[E]||u[E]||l;return n?a.createElement(y,i(i({ref:t},p),{},{components:n})):a.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=E;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}E.displayName="MDXCreateElement"},214705:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(58168),r=(n(296540),n(15680));const l={title:"CREATE-VIEW",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-VIEW",id:"version-2.1/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-VIEW",title:"CREATE-VIEW",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-VIEW.md",sourceDirName:"sql-manual/sql-statements/Data-Definition-Statements/Create",slug:"/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-VIEW",permalink:"/zh-CN/docs/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-VIEW",draft:!1,tags:[],version:"2.1",frontMatter:{title:"CREATE-VIEW",language:"zh-CN"},sidebar:"docs",previous:{title:"CREATE-INDEX",permalink:"/zh-CN/docs/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-INDEX"},next:{title:"CREATE-MATERIALIZED-VIEW",permalink:"/zh-CN/docs/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-MATERIALIZED-VIEW"}},s={},c=[{value:"CREATE-VIEW",id:"create-view",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"create-view"},"CREATE-VIEW"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"CREATE VIEW"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u521b\u5efa\u4e00\u4e2a\u903b\u8f91\u89c6\u56fe\n\u8bed\u6cd5\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE VIEW [IF NOT EXISTS]\n [db_name.]view_name\n (column1[ COMMENT "col comment"][, column2, ...])\nAS query_stmt\n')),(0,r.yg)("p",null,"\u8bf4\u660e\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u89c6\u56fe\u4e3a\u903b\u8f91\u89c6\u56fe\uff0c\u6ca1\u6709\u7269\u7406\u5b58\u50a8\u3002\u6240\u6709\u5728\u89c6\u56fe\u4e0a\u7684\u67e5\u8be2\u76f8\u5f53\u4e8e\u5728\u89c6\u56fe\u5bf9\u5e94\u7684\u5b50\u67e5\u8be2\u4e0a\u8fdb\u884c\u3002"),(0,r.yg)("li",{parentName:"ul"},"query_stmt \u4e3a\u4efb\u610f\u652f\u6301\u7684 SQL")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5728 example_db \u4e0a\u521b\u5efa\u89c6\u56fe example_view"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE VIEW example_db.example_view (k1, k2, k3, v1)\nAS\nSELECT c1 as k1, k2, k3, SUM(v1) FROM example_table\nWHERE k1 = 20160112 GROUP BY k1,k2,k3;\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u5305\u542b comment \u7684 view"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE VIEW example_db.example_view\n(\n    k1 COMMENT "first key",\n    k2 COMMENT "second key",\n    k3 COMMENT "third key",\n    v1 COMMENT "first value"\n)\nCOMMENT "my first view"\nAS\nSELECT c1 as k1, k2, k3, SUM(v1) FROM example_table\nWHERE k1 = 20160112 GROUP BY k1,k2,k3;\n')))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"CREATE, VIEW\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);