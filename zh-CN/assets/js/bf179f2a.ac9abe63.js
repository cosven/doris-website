"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[3389],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},L=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),L=r,y=m["".concat(p,".").concat(L)]||m[L]||u[L]||l;return n?a.createElement(y,i(i({ref:t},c),{},{components:n})):a.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=L;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}L.displayName="MDXCreateElement"},73376:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(58168),r=(n(296540),n(15680));const l={title:"CANCEL-ALTER-TABLE",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Alter/CANCEL-ALTER-TABLE",id:"version-1.2/sql-manual/sql-reference/Data-Definition-Statements/Alter/CANCEL-ALTER-TABLE",title:"CANCEL-ALTER-TABLE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-reference/Data-Definition-Statements/Alter/CANCEL-ALTER-TABLE.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Alter",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Alter/CANCEL-ALTER-TABLE",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Alter/CANCEL-ALTER-TABLE",draft:!1,tags:[],version:"1.2",frontMatter:{title:"CANCEL-ALTER-TABLE",language:"zh-CN"},sidebar:"docs",previous:{title:"ALTER-RESOURCE",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-RESOURCE"},next:{title:"ALTER-TABLE-COMMENT",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-COMMENT"}},p={},s=[{value:"CANCEL-ALTER-TABLE",id:"cancel-alter-table",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:s},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"cancel-alter-table"},"CANCEL-ALTER-TABLE"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"CANCEL ALTER TABLE "),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u64a4\u9500\u4e00\u4e2a ALTER \u64cd\u4f5c\u3002"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u64a4\u9500 ALTER TABLE COLUMN \u64cd\u4f5c")),(0,r.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CANCEL ALTER TABLE COLUMN\nFROM db_name.table_name\n")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"\u64a4\u9500 ALTER TABLE ROLLUP \u64cd\u4f5c")),(0,r.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CANCEL ALTER TABLE ROLLUP\nFROM db_name.table_name\n")),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"\u6839\u636ejob id\u6279\u91cf\u64a4\u9500rollup\u64cd\u4f5c")),(0,r.yg)("p",null,"\u8bed\u6cd5:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CANCEL ALTER TABLE ROLLUP\nFROM db_name.table_name (jobid,...)\n")),(0,r.yg)("p",null,"\u6ce8\u610f\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u8be5\u547d\u4ee4\u4e3a\u5f02\u6b65\u64cd\u4f5c\uff0c\u5177\u4f53\u662f\u5426\u6267\u884c\u6210\u529f\u9700\u8981\u4f7f\u7528",(0,r.yg)("inlineCode",{parentName:"li"},"show alter table rollup"),"\u67e5\u770b\u4efb\u52a1\u72b6\u6001\u786e\u8ba4")),(0,r.yg)("ol",{start:4},(0,r.yg)("li",{parentName:"ol"},"\u64a4\u9500 ALTER CLUSTER \u64cd\u4f5c")),(0,r.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"\uff08\u5f85\u5b9e\u73b0...\uff09\n")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u64a4\u9500\u9488\u5bf9 my_table \u7684 ALTER COLUMN \u64cd\u4f5c\u3002"),(0,r.yg)("p",{parentName:"li"},"[CANCEL ALTER TABLE COLUMN]"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CANCEL ALTER TABLE COLUMN\nFROM example_db.my_table;\n")),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u64a4\u9500 my_table \u4e0b\u7684 ADD ROLLUP \u64cd\u4f5c\u3002"),(0,r.yg)("p",{parentName:"li"},"[CANCEL ALTER TABLE ROLLUP]"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CANCEL ALTER TABLE ROLLUP\nFROM example_db.my_table;\n")),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u6839\u636ejob id\u64a4\u9500 my_table \u4e0b\u7684 ADD ROLLUP \u64cd\u4f5c\u3002"),(0,r.yg)("p",{parentName:"li"},"[CANCEL ALTER TABLE ROLLUP]"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CANCEL ALTER TABLE ROLLUP\nFROM example_db.my_table (12801,12802);\n")),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"CANCEL, ALTER, TABLE, CANCEL ALTER\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);