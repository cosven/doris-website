"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[53434],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>y});var a=r(296540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),s=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(r),c=n,y=m["".concat(i,".").concat(c)]||m[c]||d[c]||o;return r?a.createElement(y,l(l({ref:t},u),{},{components:r})):a.createElement(y,l({ref:t},u))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=c;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[m]="string"==typeof e?e:n,l[1]=p;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},454181:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=r(58168),n=(r(296540),r(15680));const o={title:"Exporting Query Result",language:"en"},l=void 0,p={unversionedId:"data-operate/export/export-with-mysql-dump",id:"data-operate/export/export-with-mysql-dump",title:"Exporting Query Result",description:"\x3c!--",source:"@site/docs/data-operate/export/export-with-mysql-dump.md",sourceDirName:"data-operate/export",slug:"/data-operate/export/export-with-mysql-dump",permalink:"/docs/dev/data-operate/export/export-with-mysql-dump",draft:!1,tags:[],version:"current",frontMatter:{title:"Exporting Query Result",language:"en"},sidebar:"docs",previous:{title:"Exporting Data or Table Structures",permalink:"/docs/dev/data-operate/export/outfile"},next:{title:"MySQL Compatibility",permalink:"/docs/dev/query/query-data/mysql-compatibility"}},i={},s=[{value:"Examples",id:"examples",level:2},{value:"Export",id:"export",level:3},{value:"Import",id:"import",level:3},{value:"Notice",id:"notice",level:2}],u={toc:s},m="wrapper";function d(e){let{components:t,...r}=e;return(0,n.yg)(m,(0,a.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Doris has supported exporting data or table structures through the ",(0,n.yg)("inlineCode",{parentName:"p"},"mysqldump")," tool after version 0.15"),(0,n.yg)("h2",{id:"examples"},"Examples"),(0,n.yg)("h3",{id:"export"},"Export"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Export the table1 table in the test database: ",(0,n.yg)("inlineCode",{parentName:"p"},"mysqldump -h127.0.0.1 -P9030 -uroot --no-tablespaces --databases test --tables table1"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Export the table1 table structure in the test database: ",(0,n.yg)("inlineCode",{parentName:"p"},"mysqldump -h127.0.0.1 -P9030 -uroot --no-tablespaces --databases test --tables table1 --no-data"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Export all tables in the test1, test2 database: ",(0,n.yg)("inlineCode",{parentName:"p"},"mysqldump -h127.0.0.1 -P9030 -uroot --no-tablespaces --databases test1 test2"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Export all databases and tables ",(0,n.yg)("inlineCode",{parentName:"p"},"mysqldump -h127.0.0.1 -P9030 -uroot --no-tablespaces --all-databases"),"\nFor more usage parameters, please refer to the manual of ",(0,n.yg)("inlineCode",{parentName:"p"},"mysqldump")))),(0,n.yg)("h3",{id:"import"},"Import"),(0,n.yg)("p",null,"The results exported by ",(0,n.yg)("inlineCode",{parentName:"p"},"mysqldump")," can be redirected to a file, which can then be imported into Doris through the source command ",(0,n.yg)("inlineCode",{parentName:"p"},"source filename.sql")),(0,n.yg)("h2",{id:"notice"},"Notice"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Since there is no concept of tablespace in mysql in Doris, add the ",(0,n.yg)("inlineCode",{parentName:"p"},"--no-tablespaces")," parameter when using ",(0,n.yg)("inlineCode",{parentName:"p"},"mysqldump"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Using mysqldump to export data and table structure is only used for development and testing or when the amount of data is small. Do not use it in a production environment with a large amount of data."))))}d.isMDXComponent=!0}}]);