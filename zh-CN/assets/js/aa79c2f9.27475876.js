"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[2649],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,m=c["".concat(o,".").concat(d)]||c[d]||y[d]||l;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[c]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<l;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},232823:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(58168),a=(n(296540),n(15680));const l={title:"STRUCT",language:"zh-CN"},s=void 0,i={unversionedId:"sql-manual/sql-types/Data-Types/STRUCT",id:"version-2.1/sql-manual/sql-types/Data-Types/STRUCT",title:"STRUCT",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-types/Data-Types/STRUCT.md",sourceDirName:"sql-manual/sql-types/Data-Types",slug:"/sql-manual/sql-types/Data-Types/STRUCT",permalink:"/zh-CN/docs/sql-manual/sql-types/Data-Types/STRUCT",draft:!1,tags:[],version:"2.1",frontMatter:{title:"STRUCT",language:"zh-CN"},sidebar:"docs",previous:{title:"MAP",permalink:"/zh-CN/docs/sql-manual/sql-types/Data-Types/MAP"},next:{title:"JSON",permalink:"/zh-CN/docs/sql-manual/sql-types/Data-Types/JSON"}},o={},p=[{value:"STRUCT",id:"struct",level:2},{value:"name",id:"name",level:3},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:p},c="wrapper";function y(e){let{components:t,...n}=e;return(0,a.yg)(c,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"struct"},"STRUCT"),(0,a.yg)("h3",{id:"name"},"name"),(0,a.yg)("version",{since:"2.0.0"},(0,a.yg)("p",null,"STRUCT")),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"STRUCT<field_name:field_type [COMMENT 'comment_string'], ... >")),(0,a.yg)("p",null,"\u7531\u591a\u4e2a Field \u7ec4\u6210\u7684\u7ed3\u6784\u4f53\uff0c\u4e5f\u53ef\u88ab\u7406\u89e3\u4e3a\u591a\u4e2a\u5217\u7684\u96c6\u5408\u3002\u4e0d\u80fd\u4f5c\u4e3a Key \u4f7f\u7528\uff0c\u76ee\u524d STRUCT \u4ec5\u652f\u6301\u5728 Duplicate \u6a21\u578b\u7684\u8868\u4e2d\u4f7f\u7528\u3002"),(0,a.yg)("p",null,"\u4e00\u4e2a Struct \u4e2d\u7684 Field \u7684\u540d\u5b57\u548c\u6570\u91cf\u56fa\u5b9a\uff0c\u603b\u662f\u4e3a Nullable\uff0c\u4e00\u4e2a Field \u901a\u5e38\u7531\u4e0b\u9762\u90e8\u5206\u7ec4\u6210\u3002"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"field_name: Field \u7684\u6807\u8bc6\u7b26\uff0c\u4e0d\u53ef\u91cd\u590d"),(0,a.yg)("li",{parentName:"ul"},"field_type: Field \u7684\u7c7b\u578b"),(0,a.yg)("li",{parentName:"ul"},"COMMENT: Field \u7684\u6ce8\u91ca\uff0c\u53ef\u9009 (\u6682\u4e0d\u652f\u6301)")),(0,a.yg)("p",null,"\u5f53\u524d\u53ef\u652f\u6301\u7684\u7c7b\u578b\u6709\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"BOOLEAN, TINYINT, SMALLINT, INT, BIGINT, LARGEINT, FLOAT, DOUBLE, DECIMAL, DECIMALV3, DATE,\nDATEV2, DATETIME, DATETIMEV2, CHAR, VARCHAR, STRING\n")),(0,a.yg)("p",null,"\u5728\u5c06\u6765\u7684\u7248\u672c\u6211\u4eec\u8fd8\u5c06\u5b8c\u5584\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"TODO:\u652f\u6301\u5d4c\u5957 STRUCT \u6216\u5176\u4ed6\u7684\u590d\u6742\u7c7b\u578b\n")),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("p",null,"\u5efa\u8868\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'mysql> CREATE TABLE `struct_test` (\n  `id` int(11) NULL,\n  `s_info` STRUCT<s_id:int(11), s_name:string, s_address:string> NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`id`)\nCOMMENT \'OLAP\'\nDISTRIBUTED BY HASH(`id`) BUCKETS 1\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 1",\n"storage_format" = "V2",\n"light_schema_change" = "true",\n"disable_auto_compaction" = "false"\n);\n')),(0,a.yg)("p",null,"\u63d2\u5165\u6570\u636e\u793a\u4f8b\uff1a"),(0,a.yg)("p",null,"Insert:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"INSERT INTO `struct_test` VALUES (1, {1, 'sn1', 'sa1'});\nINSERT INTO `struct_test` VALUES (2, struct(2, 'sn2', 'sa2'));\nINSERT INTO `struct_test` VALUES (3, named_struct('s_id', 3, 's_name', 'sn3', 's_address', 'sa3'));\n")),(0,a.yg)("p",null,"Stream load:"),(0,a.yg)("p",null,"test.csv\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'1|{"s_id":1, "s_name":"sn1", "s_address":"sa1"}\n2|{s_id:2, s_name:sn2, s_address:sa2}\n3|{"s_address":"sa3", "s_name":"sn3", "s_id":3}\n')),(0,a.yg)("p",null,"\u793a\u4f8b\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'curl --location-trusted -u root -T test.csv  -H "label:test_label" http://host:port/api/test/struct_test/_stream_load\n')),(0,a.yg)("p",null,"\u67e5\u8be2\u6570\u636e\u793a\u4f8b\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select * from struct_test;\n+------+-------------------+\n| id   | s_info            |\n+------+-------------------+\n|    1 | {1, 'sn1', 'sa1'} |\n|    2 | {2, 'sn2', 'sa2'} |\n|    3 | {3, 'sn3', 'sa3'} |\n+------+-------------------+\n3 rows in set (0.02 sec)\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"STRUCT\n")))}y.isMDXComponent=!0}}]);