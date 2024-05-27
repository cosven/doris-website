"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[8590],{15680:(e,a,t)=>{t.d(a,{xA:()=>o,yg:()=>c});var n=t(296540);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var m=n.createContext({}),s=function(e){var a=n.useContext(m),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},o=function(e){var a=s(e.components);return n.createElement(m.Provider,{value:a},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},y=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,m=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),g=s(t),y=l,c=g["".concat(m,".").concat(y)]||g[y]||d[y]||r;return t?n.createElement(c,p(p({ref:a},o),{},{components:t})):n.createElement(c,p({ref:a},o))}));function c(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,p=new Array(r);p[0]=y;var i={};for(var m in a)hasOwnProperty.call(a,m)&&(i[m]=a[m]);i.originalType=e,i[g]="string"==typeof e?e:l,p[1]=i;for(var s=2;s<r;s++)p[s]=t[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},25882:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>p,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var n=t(58168),l=(t(296540),t(15680));const r={title:"RECOVER",language:"zh-CN"},p=void 0,i={unversionedId:"sql-manual/sql-statements/Database-Administration-Statements/RECOVER",id:"version-2.1/sql-manual/sql-statements/Database-Administration-Statements/RECOVER",title:"RECOVER",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-statements/Database-Administration-Statements/RECOVER.md",sourceDirName:"sql-manual/sql-statements/Database-Administration-Statements",slug:"/sql-manual/sql-statements/Database-Administration-Statements/RECOVER",permalink:"/zh-CN/docs/sql-manual/sql-statements/Database-Administration-Statements/RECOVER",draft:!1,tags:[],version:"2.1",frontMatter:{title:"RECOVER",language:"zh-CN"},sidebar:"docs",previous:{title:"ADMIN-CLEAN-TRASH",permalink:"/zh-CN/docs/sql-manual/sql-statements/Database-Administration-Statements/ADMIN-CLEAN-TRASH"},next:{title:"KILL",permalink:"/zh-CN/docs/sql-manual/sql-statements/Database-Administration-Statements/KILL"}},m={},s=[{value:"RECOVER",id:"recover",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],o={toc:s},g="wrapper";function d(e){let{components:a,...t}=e;return(0,l.yg)(g,(0,n.A)({},o,t,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"recover"},"RECOVER"),(0,l.yg)("h3",{id:"name"},"Name"),(0,l.yg)("p",null,"RECOVER"),(0,l.yg)("h3",{id:"description"},"Description"),(0,l.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u6062\u590d\u4e4b\u524d\u5220\u9664\u7684 database\u3001table \u6216\u8005 partition\u3002\u652f\u6301\u901a\u8fc7name\u3001id\u6765\u6062\u590d\u6307\u5b9a\u7684\u5143\u4fe1\u606f\uff0c\u5e76\u4e14\u652f\u6301\u5c06\u6062\u590d\u7684\u5143\u4fe1\u606f\u91cd\u547d\u540d\u3002"),(0,l.yg)("p",null,"\u53ef\u4ee5\u901a\u8fc7 ",(0,l.yg)("inlineCode",{parentName:"p"},"SHOW CATALOG RECYCLE BIN")," \u6765\u67e5\u8be2\u5f53\u524d\u53ef\u6062\u590d\u7684\u5143\u4fe1\u606f\u3002"),(0,l.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u4ee5name\u6062\u590d database"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"RECOVER DATABASE db_name;\n"))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u4ee5name\u6062\u590d table"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"RECOVER TABLE [db_name.]table_name;\n"))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u4ee5name\u6062\u590d partition"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"RECOVER PARTITION partition_name FROM [db_name.]table_name;\n"))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u4ee5name\u548cid\u6062\u590d database"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"RECOVER DATABASE db_name db_id;\n"))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u4ee5name\u548cid\u6062\u590d table"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"RECOVER TABLE [db_name.]table_name table_id;\n"))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u4ee5name\u548cid\u6062\u590d partition"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"RECOVER PARTITION partition_name partition_id FROM [db_name.]table_name;\n"))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u4ee5name\u6062\u590d database \u5e76\u8bbe\u5b9a\u65b0\u540d\u5b57"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"RECOVER DATABASE db_name AS new_db_name;\n"))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u4ee5name\u548cid\u6062\u590d table \u5e76\u8bbe\u5b9a\u65b0\u540d\u5b57"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"RECOVER TABLE [db_name.]table_name table_id AS new_db_name;\n"))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u4ee5name\u548cid\u6062\u590d partition \u5e76\u8bbe\u5b9a\u65b0\u540d\u5b57"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"RECOVER PARTITION partition_name partition_id AS new_db_name FROM [db_name.]table_name;\n")))),(0,l.yg)("p",null,"\u8bf4\u660e\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u8be5\u64cd\u4f5c\u4ec5\u80fd\u6062\u590d\u4e4b\u524d\u4e00\u6bb5\u65f6\u95f4\u5185\u5220\u9664\u7684\u5143\u4fe1\u606f\u3002\u9ed8\u8ba4\u4e3a 1 \u5929\u3002\uff08\u53ef\u901a\u8fc7fe.conf\u4e2d",(0,l.yg)("inlineCode",{parentName:"li"},"catalog_trash_expire_second"),"\u53c2\u6570\u914d\u7f6e\uff09"),(0,l.yg)("li",{parentName:"ul"},"\u5982\u679c\u6062\u590d\u5143\u4fe1\u606f\u65f6\u6ca1\u6709\u6307\u5b9aid\uff0c\u5219\u9ed8\u8ba4\u6062\u590d\u6700\u540e\u4e00\u4e2a\u5220\u9664\u7684\u540c\u540d\u5143\u6570\u636e\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u53ef\u4ee5\u901a\u8fc7 ",(0,l.yg)("inlineCode",{parentName:"li"},"SHOW CATALOG RECYCLE BIN")," \u6765\u67e5\u8be2\u5f53\u524d\u53ef\u6062\u590d\u7684\u5143\u4fe1\u606f\u3002")),(0,l.yg)("h3",{id:"example"},"Example"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"\u6062\u590d\u540d\u4e3a example_db \u7684 database")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"RECOVER DATABASE example_db;\n")),(0,l.yg)("ol",{start:2},(0,l.yg)("li",{parentName:"ol"},"\u6062\u590d\u540d\u4e3a example_tbl \u7684 table")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"RECOVER TABLE example_db.example_tbl;\n")),(0,l.yg)("ol",{start:3},(0,l.yg)("li",{parentName:"ol"},"\u6062\u590d\u8868 example_tbl \u4e2d\u540d\u4e3a p1 \u7684 partition")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"RECOVER PARTITION p1 FROM example_tbl;\n")),(0,l.yg)("ol",{start:4},(0,l.yg)("li",{parentName:"ol"},"\u6062\u590d example_db_id \u4e14\u540d\u4e3a example_db \u7684 database")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"RECOVER DATABASE example_db example_db_id;\n")),(0,l.yg)("ol",{start:5},(0,l.yg)("li",{parentName:"ol"},"\u6062\u590d example_tbl_id \u4e14\u540d\u4e3a example_tbl \u7684 table")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"RECOVER TABLE example_db.example_tbl example_tbl_id;\n")),(0,l.yg)("ol",{start:6},(0,l.yg)("li",{parentName:"ol"},"\u6062\u590d\u8868 example_tbl \u4e2d p1_id \u4e14\u540d\u4e3a p1 \u7684 partition")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"RECOVER PARTITION p1 p1_id FROM example_tbl;\n")),(0,l.yg)("ol",{start:7},(0,l.yg)("li",{parentName:"ol"},"\u6062\u590d example_db_id \u4e14\u540d\u4e3a example_db \u7684 database\uff0c\u5e76\u8bbe\u5b9a\u65b0\u540d\u5b57 new_example_db")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"RECOVER DATABASE example_db example_db_id AS new_example_db;\n")),(0,l.yg)("ol",{start:8},(0,l.yg)("li",{parentName:"ol"},"\u6062\u590d\u540d\u4e3a example_tbl \u7684 table\uff0c\u5e76\u8bbe\u5b9a\u65b0\u540d\u5b57 new_example_tbl")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"RECOVER TABLE example_db.example_tbl AS new_example_tbl;\n")),(0,l.yg)("ol",{start:9},(0,l.yg)("li",{parentName:"ol"},"\u6062\u590d\u8868 example_tbl \u4e2d p1_id \u4e14\u540d\u4e3a p1 \u7684 partition\uff0c\u5e76\u8bbe\u5b9a\u65b0\u540d\u5b57 new_p1")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"RECOVER PARTITION p1 p1_id AS new_p1 FROM example_tbl;\n")),(0,l.yg)("h3",{id:"keywords"},"Keywords"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"RECOVER\n")),(0,l.yg)("h3",{id:"best-practice"},"Best Practice"))}d.isMDXComponent=!0}}]);