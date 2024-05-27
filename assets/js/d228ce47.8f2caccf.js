"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[90496],{15680:(e,n,a)=>{a.d(n,{xA:()=>y,yg:()=>m});var t=a(296540);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function p(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var g=t.createContext({}),o=function(e){var n=t.useContext(g),a=n;return e&&(a="function"==typeof e?e(n):p(p({},n),e)),a},y=function(e){var n=o(e.components);return t.createElement(g.Provider,{value:n},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,l=e.mdxType,r=e.originalType,g=e.parentName,y=i(e,["components","mdxType","originalType","parentName"]),u=o(a),d=l,m=u["".concat(g,".").concat(d)]||u[d]||s[d]||r;return a?t.createElement(m,p(p({ref:n},y),{},{components:a})):t.createElement(m,p({ref:n},y))}));function m(e,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=a.length,p=new Array(r);p[0]=d;var i={};for(var g in n)hasOwnProperty.call(n,g)&&(i[g]=n[g]);i.originalType=e,i[u]="string"==typeof e?e:l,p[1]=i;for(var o=2;o<r;o++)p[o]=a[o];return t.createElement.apply(null,p)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},644846:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>g,contentTitle:()=>p,default:()=>s,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var t=a(58168),l=(a(296540),a(15680));const r={title:"MySQL Compatibility",language:"en"},p=void 0,i={unversionedId:"query/query-data/mysql-compatibility",id:"query/query-data/mysql-compatibility",title:"MySQL Compatibility",description:"\x3c!--",source:"@site/docs/query/query-data/mysql-compatibility.md",sourceDirName:"query/query-data",slug:"/query/query-data/mysql-compatibility",permalink:"/docs/dev/query/query-data/mysql-compatibility",draft:!1,tags:[],version:"current",frontMatter:{title:"MySQL Compatibility",language:"en"},sidebar:"docs",previous:{title:"Exporting Query Result",permalink:"/docs/dev/data-operate/export/export-with-mysql-dump"},next:{title:"Select Manual",permalink:"/docs/dev/query/query-data/select"}},g={},o=[{value:"Data Types",id:"data-types",level:2},{value:"Numeric Types",id:"numeric-types",level:3},{value:"Date Types",id:"date-types",level:3},{value:"String Types",id:"string-types",level:3},{value:"JSON Type",id:"json-type",level:3},{value:"Doris unique data type",id:"doris-unique-data-type",level:3},{value:"Syntax",id:"syntax",level:2},{value:"DDL",id:"ddl",level:3},{value:"<strong>Drop-Table/Drop-Index</strong>",id:"drop-tabledrop-index",level:3},{value:"<strong>DML</strong>",id:"dml",level:3},{value:"SQL Function",id:"sql-function",level:2}],y={toc:o},u="wrapper";function s(e){let{components:n,...a}=e;return(0,l.yg)(u,(0,t.A)({},y,a,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"Doris is highly compatible with MySQL syntax and supports standard SQL. However, there are several differences between Doris and MySQL, as outlined below."),(0,l.yg)("h2",{id:"data-types"},"Data Types"),(0,l.yg)("h3",{id:"numeric-types"},"Numeric Types"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"MySQL"),(0,l.yg)("th",{parentName:"tr",align:null},"Doris"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("p",null,"- Supported"),"  ",(0,l.yg)("p",null,"- Range: 0 represents false, 1 represents true")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("p",null,"- Supported"),"  ",(0,l.yg)("p",null,"- Keyword: Boolean"),"  ",(0,l.yg)("p",null,"- Range: 0 represents false, 1 represents true"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Bit"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("p",null,"- Supported"),"  ",(0,l.yg)("p",null,"- Range: 1 to 64")),(0,l.yg)("td",{parentName:"tr",align:null},"Not supported")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Tinyint"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("p",null,"- Supported")," ",(0,l.yg)("p",null,"- Supports signed and unsigned"),"  ",(0,l.yg)("p",null,"- Range:"),"    ",(0,l.yg)("p",null,"- signed: -128 to 127"),"   ",(0,l.yg)("p",null,"- unsigned: 0 to 255")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("p",null,"- Supported"),"  ",(0,l.yg)("p",null,"- Only supports signed"),"  ",(0,l.yg)("p",null,"- Range: -128 to 127"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Smallint"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("p",null,"- Supported")," ",(0,l.yg)("p",null,"- Supports signed and unsigned")," ",(0,l.yg)("p",null," - Range:"),"    ",(0,l.yg)("p",null,"- signed: -2^15 to 2^15-1"),"   ",(0,l.yg)("p",null,"- unsigned: 0 to 2^16-1")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("p",null,"- Supported"),"  ",(0,l.yg)("p",null,"- Only supports signed"),"  ",(0,l.yg)("p",null,"- Range: -32768 to 32767"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Mediumint"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("p",null,"- Supported")," ",(0,l.yg)("p",null,"- Supports signed and unsigned"),"  ",(0,l.yg)("p",null,"- Range:"),"    ",(0,l.yg)("p",null,"- signed: -2^23 to 2^23-1"),"  ",(0,l.yg)("p",null,"- unsigned: 0 to -2^24-1")),(0,l.yg)("td",{parentName:"tr",align:null},"- Not supported")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Int"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("p",null,"- Supported")," ",(0,l.yg)("p",null,"- Supports signed and unsigned"),"  ",(0,l.yg)("p",null,"- Range:"),"    ",(0,l.yg)("p",null,"- signed: -2^31 to 2^31-1"),"   ",(0,l.yg)("p",null,"- unsigned: 0 to -2^32-1")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("p",null,"- Supported"),"  ",(0,l.yg)("p",null,"- Only supports signed"),"  ",(0,l.yg)("p",null,"- Range: -2147483648 to 2147483647"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Bigint"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("p",null,"- Supported")," ",(0,l.yg)("p",null,"- Supports signed and unsigned")," ",(0,l.yg)("p",null,"- Range:"),"    ",(0,l.yg)("p",null,"- signed: -2^63 to 2^63-1"),"  ",(0,l.yg)("p",null,"- unsigned: 0 to 2^64-1")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("p",null,"- Supported"),"  ",(0,l.yg)("p",null,"- Only supports signed"),"  ",(0,l.yg)("p",null,"- Range: -2^63 to 2^63-1"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Largeint"),(0,l.yg)("td",{parentName:"tr",align:null},"- Not supported"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("p",null,"- Supported"),"  ",(0,l.yg)("p",null,"- Only supports signed"),"  ",(0,l.yg)("p",null,"- Range: -2^127 to 2^127-1"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Decimal"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("p",null,"- Supported"),"  ",(0,l.yg)("p",null,"- Supports signed and unsigned (deprecated after 8.0.17)"),"  ",(0,l.yg)("p",null,"- Default: Decimal(10, 0)")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("p",null,"- Supported"),"  ",(0,l.yg)("p",null,"- Only supports signed"),"  ",(0,l.yg)("p",null,"- Default: Decimal(9, 0)"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Float/Double"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("p",null,"-Supported"),"  ",(0,l.yg)("p",null,"- Supports signed and unsigned (deprecated after 8.0.17)")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("p",null,"- Supported"),"  ",(0,l.yg)("p",null,"- Only supports signed"))))),(0,l.yg)("h3",{id:"date-types"},"Date Types"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"MySQL"),(0,l.yg)("th",{parentName:"tr",align:null},"Doris"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Date"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("p",null,"- Supported")," ",(0,l.yg)("p",null,"- Range: ","['1000-01-01', '9999-12-31']"),"   - Format: YYYY-MM-DD"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("p",null,"- Supported")," ",(0,l.yg)("p",null,"- Range: ","['0000-01-01', '9999-12-31']"),"   - Format: YYYY-MM-DD")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"DateTime"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("p",null,"- Supported")," ",(0,l.yg)("p",null,"- DATETIME(","[P]","), where P is an optional parameter defined precision"),"  - Range: '1000-01-01 00:00:00.000000' to '9999-12-31 23:59:59.999999'  ",(0,l.yg)("p",null,"- Format: YYYY-MM-DD hh:mm:ss","[.fraction]")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("p",null,"- Supported")," ",(0,l.yg)("p",null,"- DATETIME(","[P]","), where P is an optional parameter defined precision"),"  ",(0,l.yg)("p",null,"- Range: ['0000-01-01 00:00:00","[.000000]","', '9999-12-31 23:59:59","[.999999]","']"),"   - Format: YYYY-MM-DD hh:mm:ss","[.fraction]")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Timestamp"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("p",null,"- Supported")," ",(0,l.yg)("p",null,"- Timestamp","[(p)]",", where P is an optional parameter defined precision")," ",(0,l.yg)("p",null,"- Range: ","['1970-01-01 00:00:01.000000' UTC, '2038-01-19 03:14:07.999999' UTC]"),"   ",(0,l.yg)("p",null,"- Format: YYYY-MM-DD hh:mm:ss","[.fraction]")),(0,l.yg)("td",{parentName:"tr",align:null},"- Not supported")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Time"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("p",null,"- Supported")," ",(0,l.yg)("p",null,"- Time","[(p)]"),"  ",(0,l.yg)("p",null,"- Range: ","['-838:59:59.000000' to '838:59:59.000000']"),"   ",(0,l.yg)("p",null,"- Format: hh:mm:ss","[.fraction]")),(0,l.yg)("td",{parentName:"tr",align:null},"- Not supported")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Year"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("p",null,"- Supported")," ",(0,l.yg)("p",null,"- Range: 1901 to 2155, or 0000"),"   - Format: yyyy"),(0,l.yg)("td",{parentName:"tr",align:null},"- Not supported")))),(0,l.yg)("h3",{id:"string-types"},"String Types"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"MySQL"),(0,l.yg)("th",{parentName:"tr",align:null},"Doris"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Char"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("p",null,"-Supported - CHAR","[(M)]",", where M is the character length. If omitted, default length is 1"),"  ",(0,l.yg)("p",null,"- Fixed-length"),"  - Range: ","[0, 255]"," bytes"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("p",null,"- Supported")," ",(0,l.yg)("p",null,"- CHAR","[(M)]",", where M is the byte length"),"  ",(0,l.yg)("p",null,"- Variable-length"),"  - Range: ","[1, 255]")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Varchar"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("p",null,"- Supported")," ",(0,l.yg)("p",null,"- VARCHAR(M), where M is the character length")," ",(0,l.yg)("p",null,"- Range: ","[0, 65535]"," bytes")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("p",null,"- Supported")," ",(0,l.yg)("p",null,"- VARCHAR(M), where M is the byte length"),"  ",(0,l.yg)("p",null,"- Range: ","[1, 65533]"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"- Not supported"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("p",null,"- Supported")," ",(0,l.yg)("p",null,"- 1,048,576 bytes (1MB), can be increased to 2,147,483,643 bytes (2GB)"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Binary"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("p",null,"- Supported")," ",(0,l.yg)("p",null,"- Similar to Char")),(0,l.yg)("td",{parentName:"tr",align:null},"- Not supported")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Varbinary"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("p",null,"- Supported")," ",(0,l.yg)("p",null,"- Similar to Varchar")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("p",null,"- Not supported"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Blob"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("p",null,"- Supported")," ",(0,l.yg)("p",null,"- TinyBlob, Blob, MediumBlob, LongBlob")),(0,l.yg)("td",{parentName:"tr",align:null},"- Not supported")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Text"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("p",null,"- Supported")," ",(0,l.yg)("p",null,"- TinyText, Text, MediumText, LongText")),(0,l.yg)("td",{parentName:"tr",align:null},"- Not supported")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Enum"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("p",null,"- Supported")," ",(0,l.yg)("p",null,"- Supports up to 65,535 elements")),(0,l.yg)("td",{parentName:"tr",align:null},"- Not supported")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Set"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("p",null,"- Supported")," ",(0,l.yg)("p",null,"- Supports up to 64 elements")),(0,l.yg)("td",{parentName:"tr",align:null},"- Not supported")))),(0,l.yg)("h3",{id:"json-type"},"JSON Type"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"MySQL"),(0,l.yg)("th",{parentName:"tr",align:null},"Doris"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"JSON"),(0,l.yg)("td",{parentName:"tr",align:null},"- Supported"),(0,l.yg)("td",{parentName:"tr",align:null},"Supported")))),(0,l.yg)("h3",{id:"doris-unique-data-type"},"Doris unique data type"),(0,l.yg)("p",null,"Doris has several unique data types. Here are the details:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("strong",{parentName:"p"},"HyperLogLog")),(0,l.yg)("p",{parentName:"li"},"HLL (HyperLogLog) is a data type that cannot be used as a key column. It can be used in aggregate, duplicate, and unique models. In an aggregate model table, the corresponding aggregation type for HLL is HLL_UNION. The length and default value do not need to be specified. The length is controlled internally based on the data aggregation level. HLL columns can only be queried or used with ",(0,l.yg)("inlineCode",{parentName:"p"},"hll_union_agg"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"hll_raw_agg"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"hll_cardinality"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"hll_hash"),", and other related functions. "),(0,l.yg)("p",{parentName:"li"},"HLL is used for approximate fuzzy deduplication and performs better than count distinct when dealing with large amounts of data. The typical error rate of HLL is around 1%, sometimes reaching up to 2%.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("strong",{parentName:"p"},"Bitmap")),(0,l.yg)("p",{parentName:"li"},"Bitmap is another data type in Doris. It can be used in aggregate, unique, or duplicate models. In Unique or Duplicate models, it must be used as a non-key column. In aggregate models, it must also be used as a non-key column, and the corresponding aggregation type during table creation is BITMAP_UNION. Similar to HLL, the length and default values do not need to be specified, and the length is controlled internally based on the data aggregation level. Bitmap columns can only be queried or used with functions like ",(0,l.yg)("inlineCode",{parentName:"p"},"bitmap_union_count"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"bitmap_union"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"bitmap_hash"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"bitmap_hash64"),", and others. "),(0,l.yg)("p",{parentName:"li"},"Using BITMAP in traditional scenarios may impact loading speed, but it generally performs better than Count Distinct when dealing with large amounts of data. Please note that in real-time scenarios, using BITMAP without a global dictionary and with bitmap_hash() function may introduce an error of around 0.1%. If this error is not acceptable, you can use bitmap_hash64 instead.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("strong",{parentName:"p"},"QUANTILE_PERCENT")),(0,l.yg)("p",{parentName:"li"},"QUANTILE_STATE is another data type in Doris, which cannot be used as a key column. It can be used in aggregate, duplicate, and iuique models. In an aggregate model table, the corresponding aggregation type for QUANTILE_STATE is QUANTILE_UNION. The length and default value do not need to be specified, and the length is controlled internally based on the data aggregation level. QUANTILE_STATE columns can only be queried or used with functions like ",(0,l.yg)("inlineCode",{parentName:"p"},"QUANTILE_PERCENT"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"QUANTILE_UNION"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"TO_QUANTILE_STATE"),", and others. "),(0,l.yg)("p",{parentName:"li"},"QUANTILE_STATE is used for calculating approximate quantile values. During import, it performs pre-aggregation on the same key with different values. When the number of values does not exceed 2048, it stores all the data in detail. When the number of values exceeds 2048, it uses the TDigest algorithm to aggregate (cluster) the data and save the centroids of the clusters.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("strong",{parentName:"p"},"Array<T",">")),(0,l.yg)("p",{parentName:"li"},"Array is a data type in Doris that represents an array composed of elements of type T. It cannot be used as a key column. Currently, it supports usage in duplicate models and non-key column usage in unique models. "),(0,l.yg)("p",{parentName:"li"},"The supported types for T are ",(0,l.yg)("inlineCode",{parentName:"p"},"BOOLEAN"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"TINYINT"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"SMALLINT"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"INT"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"BIGINT"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"LARGEINT"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"FLOAT"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"DOUBLE"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"DECIMAL"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"DATE"),", DATETIME, CHAR, VARCHAR, and STRING.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("strong",{parentName:"p"},"MAP<K, V",">")),(0,l.yg)("p",{parentName:"li"},"MAP is a data type in Doris that represents a map composed of elements of types K and V. It cannot be used as a key column and can be used in both duplicate and unique models. "),(0,l.yg)("p",{parentName:"li"},"The supported types for K and V are ",(0,l.yg)("inlineCode",{parentName:"p"},"BOOLEAN"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"TINYINT"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"SMALLINT"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"INT"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"BIGINT"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"LARGEINT"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"FLOAT"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"DOUBLE"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"DECIMAL"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"DATE"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"DATETIME"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"CHAR"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"VARCHAR"),", and ",(0,l.yg)("inlineCode",{parentName:"p"},"STRING"),".")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("strong",{parentName:"p"},"STRUCT<field_name:field_type,...>")),(0,l.yg)("p",{parentName:"li"},"A structure (STRUCT) is composed of multiple fields. It can also be identified as a collection of multiple columns. It cannot be used as a key and is currently only supported in tables of the duplicate model."),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"field_name: The identifier of the field, which must be unique.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"field_type: The type of field."))),(0,l.yg)("p",{parentName:"li"},"The supported types for fields are ",(0,l.yg)("inlineCode",{parentName:"p"},"BOOLEAN"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"TINYINT"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"SMALLINT"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"INT"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"BIGINT"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"LARGEINT"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"FLOAT"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"DOUBLE"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"DECIMAL"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"DATE"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"DATETIME"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"CHAR"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"VARCHAR"),", and ",(0,l.yg)("inlineCode",{parentName:"p"},"STRING"),".")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Agg_State"),(0,l.yg)("p",{parentName:"li"},"AGG_STATE is a data type in Doris that cannot be used as a key column. During table creation, the signature of the aggregation function needs to be declared. "),(0,l.yg)("p",{parentName:"li"}," The length and default value do not need to be specified, and the actual storage size depends on the implementation of the function."),(0,l.yg)("p",{parentName:"li"}," AGG_STATE can only be used in combination with ",(0,l.yg)("a",{parentName:"p",href:"../../sql-manual/sql-functions/combinators/state"},"state")," /",(0,l.yg)("a",{parentName:"p",href:"../../sql-manual/sql-functions/combinators/merge"},"merge"),"/",(0,l.yg)("a",{parentName:"p",href:"../../sql-manual/sql-functions/combinators/union"},"union")," functions from the SQL manual for aggregators."))),(0,l.yg)("h2",{id:"syntax"},"Syntax"),(0,l.yg)("h3",{id:"ddl"},"DDL"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"01 Create Table Syntax in Doris")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-SQL"},"CREATE TABLE [IF NOT EXISTS] [database.]table\n(\n    column_definition_list\n    [, index_definition_list]\n)\n[engine_type]\n[keys_type]\n[table_comment]\n[partition_info]\ndistribution_desc\n[rollup_list]\n[properties]\n[extra_properties]\n")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"02 Differences with MySQL")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"column_definition_list:"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Defines the list of columns, and the basic syntax is similar to MySQL. However, there are additional operations for ",(0,l.yg)("strong",{parentName:"p"},"aggregation types"),".")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"The ",(0,l.yg)("strong",{parentName:"p"},"aggregation types")," mainly support data models such as AGGREGATE and Duplicate.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"In MySQL, you can define constraints like primary key and unique key after each column in the column definition list. In Doris, these constraints are defined and calculated through data models.")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"index_definition_list:"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Defines the list of indexes, and the basic syntax is similar to MySQL. Doris supports bitmap indexes, inverted indexes, and N-Gram indexes, while Bloom filter indexes are set through properties.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"MySQL supports B+Tree and Hash indexes.")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"engine_type:"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Specifies the table engine type, and it is optional.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Currently, Doris mainly supports native engines like OLAP.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"MySQL supports storage engines like InnoDB and MyISAM.")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"keys_type:"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Specifies the data model, and it is optional.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Supported types are:"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"DUBLICATE KEY (default): The specified columns are sorting columns.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"AGGREGATE KEY: The specified columns are dimension columns.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"UNIQUE KEY: The specified columns are primary key columns.")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"MySQL does not have the concept of data models.")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"table_comment:"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Table comment or description."))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"partition_info:"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Specifies the partitioning algorithm, and it is optional.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Supported partitioning algorithms are:"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"LESS THAN: Defines only the upper bound of the partition. The lower bound is determined by the upper bound of the previous partition.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"FIXED RANGE: Defines a closed-open interval for the partition.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"MULTI RANGE: Creates multiple RANGE partitions in batches, defines closed-open intervals, sets time units and steps. Time units supported are year, month, day, week, and hour.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"MULTI RANGE: Creates multiple RANGE partitions for numeric types, defines closed-open intervals, and sets steps.")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"MySQL supports algorithms like Hash, Range, and List. It also supports subpartitions, but only with the Hash algorithm.")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"distribution_desc:"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Specifies the bucketing algorithm, and it is mandatory.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Bucketing algorithms:"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Hash bucketing syntax: DISTRIBUTED BY HASH (k1","[,k2 ...]",") ","[BUCKETS num|auto]",". It uses the specified key columns for hash bucketing.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Random bucketing syntax: DISTRIBUTED BY RANDOM ","[BUCKETS num|auto]",". It uses random numbers for bucketing.")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"MySQL does not have bucketing algorithms.")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"rollup_list:"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Allows creating multiple materialized views while creating the table, and it is optional.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Syntax: rollup_name (col1","[, col2, ...]",") ",'[DUPLICATE KEY(col1[, col2, ...])][PROPERTIES("key" = "value")]')),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"MySQL does not support this feature.")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"properties:"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Table properties.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Table properties in Doris are different from MySQL, and the syntax for defining table properties is also different from MySQL."))))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"03 Create-Index")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE INDEX [IF NOT EXISTS] index_name ON table_name (column [, ...],) [USING BITMAP];\n")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Doris currently supports Bitmap index, Inverted index, and N-Gram index. BloomFilter index are supported as well, but they have a separate syntax for setting them.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"MySQL supports index algorithms such as B+Tree and Hash."))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"04 Create-View")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE VIEW [IF NOT EXISTS]\n [db_name.]view_name\n (column1[ COMMENT "col comment"][, column2, ...])\nAS query_stmt\n\nCREATE MATERIALIZED VIEW (IF NOT EXISTS)? mvName=multipartIdentifier\n        (LEFT_PAREN cols=simpleColumnDefs RIGHT_PAREN)? buildMode?\n        (REFRESH refreshMethod? refreshTrigger?)?\n        (KEY keys=identifierList)?\n        (COMMENT STRING_LITERAL)?\n        (PARTITION BY LEFT_PAREN partitionKey = identifier RIGHT_PAREN)?\n        (DISTRIBUTED BY (HASH hashKeys=identifierList | RANDOM) (BUCKETS (INTEGER_VALUE | AUTO))?)?\n        propertyClause?\n        AS query\n')),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"The basic syntax is consistent with MySQL.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Doris supports two types of materialized views: synchronous materialized views and asynchronous materialized views (supported for v2.1). The asynchronous materialized views in Doris are more powerful.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"MySQL only supports asynchronous materialized views."))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"05 Alter-Table/Alter-Index")),(0,l.yg)("p",null,"The syntax of Doris ALTER is basically the same as that of MySQL."),(0,l.yg)("h3",{id:"drop-tabledrop-index"},(0,l.yg)("strong",{parentName:"h3"},"Drop-Table/Drop-Index")),(0,l.yg)("p",null,"The syntax of Doris DROP is basically the same as MySQL."),(0,l.yg)("h3",{id:"dml"},(0,l.yg)("strong",{parentName:"h3"},"DML")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Insert")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO table_name\n    [ PARTITION (p1, ...) ]\n    [ WITH LABEL label]\n    [ (column [, ...]) ]\n    [ [ hint [, ...] ] ]\n    { VALUES ( { expression | DEFAULT } [, ...] ) [, ...] | query }\n")),(0,l.yg)("p",null,"The Doris INSERT syntax is basically the same as MySQL."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Update")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"UPDATE target_table [table_alias]\n    SET assignment_list\n    WHERE condition\n\nassignment_list:\n    assignment [, assignment] ...\n\nassignment:\n    col_name = value\n\nvalue:\n    {expr | DEFAULT}\n")),(0,l.yg)("p",null,"The Doris UPDATE syntax is basically the same as MySQL, but it should be noted that the ",(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("inlineCode",{parentName:"strong"},"WHERE")," condition must be added.")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Delete")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"DELETE FROM table_name [table_alias] \n    [PARTITION partition_name | PARTITIONS (partition_name [, partition_name])]\n    WHERE column_name op { value | value_list } [ AND column_name op { value | value_list } ...];\n")),(0,l.yg)("p",null,"The syntax can only specify filter predicates"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"DELETE FROM table_name [table_alias]\n    [PARTITION partition_name | PARTITIONS (partition_name [, partition_name])]\n    [USING additional_tables]\n    WHERE condition\n")),(0,l.yg)("p",null,"This syntax can only be used on the UNIQUE KEY model table."),(0,l.yg)("p",null,"The Doris DELTE syntax is basically the same as MySQL. Due to Doris is an analytical database, deletions can't be too frequent."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Select")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    [hint_statement, ...]\n    [ALL | DISTINCT | DISTINCTROW | ALL EXCEPT ( col_name1 [, col_name2, col_name3, ...] )]\n    select_expr [, select_expr ...]\n    [FROM table_references\n      [PARTITION partition_list]\n      [TABLET tabletid_list]\n      [TABLESAMPLE sample_value [ROWS | PERCENT]\n        [REPEATABLE pos_seek]]\n    [WHERE where_condition]\n    [GROUP BY [GROUPING SETS | ROLLUP | CUBE] {col_name | expr | position}]\n    [HAVING where_condition]\n    [ORDER BY {col_name | expr | position}\n      [ASC | DESC], ...]\n    [LIMIT {[offset,] row_count | row_count OFFSET offset}]\n    [INTO OUTFILE 'file_name']\n")),(0,l.yg)("p",null,"The Doris SELECT syntax is basically the same as MySQL."),(0,l.yg)("h2",{id:"sql-function"},"SQL Function"),(0,l.yg)("p",null,"Doris Function covers most MySQL functions."))}s.isMDXComponent=!0}}]);