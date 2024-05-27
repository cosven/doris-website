"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[43471],{15680:(e,a,n)=>{n.d(a,{xA:()=>p,yg:()=>c});var t=n(296540);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function r(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=t.createContext({}),m=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},p=function(e){var a=m(e.components);return t.createElement(s.Provider,{value:a},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=m(n),u=l,c=d["".concat(s,".").concat(u)]||d[u]||g[u]||o;return n?t.createElement(c,i(i({ref:a},p),{},{components:n})):t.createElement(c,i({ref:a},p))}));function c(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var o=n.length,i=new Array(o);i[0]=u;var r={};for(var s in a)hasOwnProperty.call(a,s)&&(r[s]=a[s]);r.originalType=e,r[d]="string"==typeof e?e:l,i[1]=r;for(var m=2;m<o;m++)i[m]=n[m];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},359064:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>r,toc:()=>m});var t=n(58168),l=(n(296540),n(15680));const o={title:"Schema Evolution",language:"en"},i=void 0,r={unversionedId:"table-design/schema-change",id:"version-2.0/table-design/schema-change",title:"Schema Evolution",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/table-design/schema-change.md",sourceDirName:"table-design",slug:"/table-design/schema-change",permalink:"/docs/2.0/table-design/schema-change",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Schema Evolution",language:"en"},sidebar:"docs",previous:{title:"Data Partitioning",permalink:"/docs/2.0/table-design/data-partition"},next:{title:"Tiered Storage",permalink:"/docs/2.0/table-design/cold-hot-separation"}},s={},m=[{value:"Glossary",id:"glossary",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Adding a column at a specified position to a specified index",id:"adding-a-column-at-a-specified-position-to-a-specified-index",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Examples",id:"examples",level:3},{value:"Adding multiple columns to a specified index",id:"adding-multiple-columns-to-a-specified-index",level:2},{value:"Syntax",id:"syntax-1",level:3},{value:"Example",id:"example",level:3},{value:"Removing a column from a specified index",id:"removing-a-column-from-a-specified-index",level:2},{value:"Syntax",id:"syntax-2",level:3},{value:"Example",id:"example-1",level:3},{value:"Modifying the column type and position of a specified index",id:"modifying-the-column-type-and-position-of-a-specified-index",level:2},{value:"Syntax",id:"syntax-3",level:3},{value:"Examples",id:"examples-1",level:3},{value:"Reorder columns for a specified index",id:"reorder-columns-for-a-specified-index",level:2},{value:"Syntax",id:"syntax-4",level:3},{value:"Example",id:"example-2",level:3},{value:"Perform multiple changes in one submission",id:"perform-multiple-changes-in-one-submission",level:2},{value:"Example 1",id:"example-1-1",level:3},{value:"Example 2",id:"example-2-1",level:3},{value:"Rename Column",id:"rename-column",level:2},{value:"Check Job Status",id:"check-job-status",level:2},{value:"Cancel Job",id:"cancel-job",level:2},{value:"Notes",id:"notes",level:2},{value:"FAQs",id:"faqs",level:2},{value:"Configurations",id:"configurations",level:2},{value:"FE Configuration",id:"fe-configuration",level:3},{value:"BE Configuration",id:"be-configuration",level:3},{value:"More Details",id:"more-details",level:2}],p={toc:m},d="wrapper";function g(e){let{components:a,...n}=e;return(0,l.yg)(d,(0,t.A)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"Users can modify the schema of an existing table through the Schema Change operation. The  schema of a table mainly includes the modification of columns and the modification of indexes. Here we mainly introduce the column-related  Scheme  changes. For index-related changes, you can check the data table design/table index to see the change method of each index."),(0,l.yg)("h2",{id:"glossary"},"Glossary"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Base Table: When each table is created, it corresponds to a base table.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Rollup: A roll-up table created based on a base table or other rollup.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Index: materialized index. Rollup or base table are both called materialized indexes.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Transaction: Each import task is a transaction, and each transaction has a unique increasing transaction ID."))),(0,l.yg)("h2",{id:"introduction"},"Introduction"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Light Schema Change")),(0,l.yg)("p",null,"Before introduction, it is necessary to know the three Schema Change implementations before the Apache Doris 1.2.0 version, all of which are asynchronous:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Hard linked schema change  mainly acts on addition and subtraction of value columns and does not require modification of the data file.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Direct schema change  is mainly used to change the type of value  column, which needs to rewrite the data, but does not involve the key  column, and does not need to be reordered.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Sort schema change  is mainly used for the key column  schema change, because the key  column addition/subtraction/modification type and other operations will affect the sorting of existing data, so the data needs to be read out again, modified, and then sort."))),(0,l.yg)("p",null,"Since Apache Doris 1.2.0 , for the first type, the new feature of light schema change has been introduced. The new light schema change allows the addition and subtraction of the value column to be completed in milliseconds. Starting from Apache Doris 2.0.0, all newly created tables have enabled light schema change by default."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"In addition to adding and deleting the value column, the main principles of other types of schema changes are as follows")),(0,l.yg)("p",null,"The basic process of executing schema change is to generate a new schema table from the data  /Index  in the original table  /Index data. There are mainly two parts of data conversion, one is the conversion of existing historical data, and the other is the conversion of newly arrived imported data during the execution of schema change."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-Plain"},"+----------+\n| Load Job |\n+----+-----+\n     |\n     | Load job generates both origin and new Index data\n     |\n     |      +------------------+ +---------------+\n     |      | Origin Index     | | Origin Index  |\n     +------\x3e New Incoming Data| | History Data  |\n     |      +------------------+ +------+--------+\n     |                                  |\n     |                                  | Convert history data\n     |                                  |\n     |      +------------------+ +------v--------+\n     |      | New Index        | | New Index     |\n     +------\x3e New Incoming Data| | History Data  |\n            +------------------+ +---------------+\n")),(0,l.yg)("p",null,"Before starting to convert historical data, Doris will obtain a latest transaction ID and wait for all import transactions before this transaction ID to complete. This transaction ID becomes a watershed. This means that Doris ensures that all import tasks after the watershed will generate data for the original table  /Index  and the new table  /Index  at the same time. This way, when the historical data conversion is completed, the data in the new table can be guaranteed to be complete."),(0,l.yg)("p",null,"The specific syntax for creating schema changes can be found in the schema change section of the help ",(0,l.yg)("a",{parentName:"p",href:"../sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-COLUMN"},"ALTER TABLE COLUMN")),(0,l.yg)("h2",{id:"adding-a-column-at-a-specified-position-to-a-specified-index"},"Adding a column at a specified position to a specified index"),(0,l.yg)("h3",{id:"syntax"},"Syntax"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE table_name ADD COLUMN column_name column_type [KEY | agg_type] [DEFAULT "default_value"]\n[AFTER column_name|FIRST]\n[TO rollup_index_name]\n[PROPERTIES ("key"="value", ...)]\n')),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"For aggregate models, if adding a value column, specify ",(0,l.yg)("inlineCode",{parentName:"p"},"agg_type"),".")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"For non-aggregate models (e.g., DUPLICATE KEY), if adding a key column, specify the ",(0,l.yg)("inlineCode",{parentName:"p"},"KEY")," keyword.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"You cannot add a column to a rollup index that already exists in the base index (if needed, you can create a new rollup index)."))),(0,l.yg)("h3",{id:"examples"},"Examples"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"1. Adding a key column ",(0,l.yg)("inlineCode",{parentName:"strong"},"new_col")," (non-aggregate model) after col1 to ",(0,l.yg)("inlineCode",{parentName:"strong"},"example_rollup_index"))),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table\nADD COLUMN new_col INT KEY DEFAULT "0" AFTER col1\nTO example_rollup_index;\n')),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"2. Adding a value column ",(0,l.yg)("inlineCode",{parentName:"strong"},"new_col")," (non-aggregate model) with a default value of 0 after col1 to ",(0,l.yg)("inlineCode",{parentName:"strong"},"example_rollup_index"))),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table   \nADD COLUMN new_col INT DEFAULT "0" AFTER col1    \nTO example_rollup_index;\n')),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"3. Adding a Key column ",(0,l.yg)("inlineCode",{parentName:"strong"},"new_col")," (aggregate model) after col1 to ",(0,l.yg)("inlineCode",{parentName:"strong"},"example_rollup_index"))),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table   \nADD COLUMN new_col INT DEFAULT "0" AFTER col1    \nTO example_rollup_index;\n')),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"4. Adding a value column ",(0,l.yg)("inlineCode",{parentName:"strong"},"new_col")," with SUM aggregation type (aggregate model) after col1 to ",(0,l.yg)("inlineCode",{parentName:"strong"},"example_rollup_index"))),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table   \nADD COLUMN new_col INT SUM DEFAULT "0" AFTER col1    \nTO example_rollup_index;\n')),(0,l.yg)("h2",{id:"adding-multiple-columns-to-a-specified-index"},"Adding multiple columns to a specified index"),(0,l.yg)("h3",{id:"syntax-1"},"Syntax"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE table_name ADD COLUMN (column_name1 column_type [KEY | agg_type] DEFAULT "default_value", ...)\n[TO rollup_index_name]\n[PROPERTIES ("key"="value", ...)]\n')),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"For aggregate models, if adding a value column, specify ",(0,l.yg)("inlineCode",{parentName:"p"},"agg_type"),".")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"For aggregate models, if adding a key column, specify the KEY keyword.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"You cannot add a column to a rollup index that already exists in the base index (if needed, you can create a new rollup index)."))),(0,l.yg)("h3",{id:"example"},"Example"),(0,l.yg)("p",null,"Adding multiple columns (aggregate model) to ",(0,l.yg)("inlineCode",{parentName:"p"},"example_rollup_index"),":"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table\nADD COLUMN (col1 INT DEFAULT "1", col2 FLOAT SUM DEFAULT "2.3")\nTO example_rollup_index;\n')),(0,l.yg)("h2",{id:"removing-a-column-from-a-specified-index"},"Removing a column from a specified index"),(0,l.yg)("h3",{id:"syntax-2"},"Syntax"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE table_name DROP COLUMN column_name\n[FROM rollup_index_name]\n")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"You cannot delete a partition column.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"If you delete a column from the base index, it will also be removed from the rollup index if it contains the column."))),(0,l.yg)("h3",{id:"example-1"},"Example"),(0,l.yg)("p",null,"Removing column col2 from ",(0,l.yg)("inlineCode",{parentName:"p"},"example_rollup_index"),":"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE example_db.my_table\nDROP COLUMN col2\nFROM example_rollup_index;\n")),(0,l.yg)("h2",{id:"modifying-the-column-type-and-position-of-a-specified-index"},"Modifying the column type and position of a specified index"),(0,l.yg)("h3",{id:"syntax-3"},"Syntax"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE table_name MODIFY COLUMN column_name column_type [KEY | agg_type] [NULL | NOT NULL] [DEFAULT "default_value"]\n[AFTER column_name|FIRST]\n[FROM rollup_index_name]\n[PROPERTIES ("key"="value", ...)]\n')),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"For aggregate models, if modifying a value column, specify ",(0,l.yg)("inlineCode",{parentName:"p"},"agg_type"),".")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"For non-aggregate models, if modifying a key column, specify the ",(0,l.yg)("strong",{parentName:"p"},"KEY")," keyword.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Only the column type can be modified, other column properties remain the same (i.e., other properties need to be explicitly written in the statement, see Example 8).")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Partition and bucket columns cannot be modified.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Currently, the following type conversions are supported (users need to ensure precision loss):"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Conversion from TINYINT/SMALLINT/INT/BIGINT/LARGEINT/FLOAT/DOUBLE to a larger numeric type.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Conversion from TINYINT/SMALLINT/INT/BIGINT/LARGEINT/FLOAT/DOUBLE/DECIMAL to VARCHAR.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Modification of maximum length for VARCHAR.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Conversion from VARCHAR/CHAR to TINYINT/SMALLINT/INT/BIGINT/LARGEINT/FLOAT/DOUBLE.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},'Conversion from VARCHAR/CHAR to DATE (supports six formatting formats: "%Y-%m-%d", "%y-%m-%d", "%Y%m%d", "%y%m%d", "%Y/%m/%d", "%y/%m/%d").')),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Conversion from DATETIME to DATE (only retains year-month-day information, e.g., ",(0,l.yg)("inlineCode",{parentName:"p"},"2019-12-09 21:47:05")," <--\x3e ",(0,l.yg)("inlineCode",{parentName:"p"},"2019-12-09"),").")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Conversion from DATE to DATETIME (automatically adds zeros for hours, minutes, and seconds, e.g., ",(0,l.yg)("inlineCode",{parentName:"p"},"2019-12-09")," <--\x3e ",(0,l.yg)("inlineCode",{parentName:"p"},"2019-12-09 00:00:00"),").")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Conversion from FLOAT to DOUBLE.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Conversion from INT to DATE (if the INT type data is invalid, the conversion fails, and the original data remains unchanged).")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"All types except DATE and DATETIME can be converted to STRING, but STRING cannot be converted to any other type."))))),(0,l.yg)("h3",{id:"examples-1"},"Examples"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"1. Modifying the column type of Key column col1 to BIGINT in the base index and moving it after column col2")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table \nMODIFY COLUMN col1 BIGINT KEY DEFAULT "1" AFTER col2;\n')),(0,l.yg)("p",null,"Note: whether modifying a key column or a value column, the complete column information needs to be declared."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},'2. Modifying the maximum length of column val1 in the Base Index. The original val1 is (val1 VARCHAR(32) REPLACE DEFAULT "abc")')),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table \nMODIFY COLUMN val1 VARCHAR(64) REPLACE DEFAULT "abc"\n')),(0,l.yg)("p",null,"Note: only the column type can be modified while keeping the other properties of the column unchanged."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"3. Modifying the length of a field in the key column of a duplicate key table")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"alter table example_tbl modify column k3 varchar(50) key null comment 'to 50'\n")),(0,l.yg)("h2",{id:"reorder-columns-for-a-specified-index"},"Reorder columns for a specified index"),(0,l.yg)("h3",{id:"syntax-4"},"Syntax"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE table_name ORDER BY (column_name1, column_name2, ...)\n[FROM rollup_index_name]\n[PROPERTIES ("key"="value", ...)]\n')),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"All columns in the index should be listed.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Value columns come after key columns."))),(0,l.yg)("h3",{id:"example-2"},"Example"),(0,l.yg)("p",null,"Reorder columns in the index ",(0,l.yg)("inlineCode",{parentName:"p"},"example_rollup_index")," (assuming the original column order is: k1, k2, k3, v1, v2)."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE example_db.my_table\nORDER BY (k3,k1,k2,v2,v1)\nFROM example_rollup_index;\n")),(0,l.yg)("h2",{id:"perform-multiple-changes-in-one-submission"},"Perform multiple changes in one submission"),(0,l.yg)("p",null,"Schema change can modify multiple indexes in a single job."),(0,l.yg)("h3",{id:"example-1-1"},"Example 1"),(0,l.yg)("p",null,"Source Schema:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-Plain"},"+-----------+-------+------+------+------+---------+-------+\n| IndexName | Field | Type | Null | Key  | Default | Extra |\n+-----------+-------+------+------+------+---------+-------+\n| tbl1      | k1    | INT  | No   | true | N/A     |       |\n|           | k2    | INT  | No   | true | N/A     |       |\n|           | k3    | INT  | No   | true | N/A     |       |\n|           |       |      |      |      |         |       |\n| rollup2   | k2    | INT  | No   | true | N/A     |       |\n|           |       |      |      |      |         |       |\n| rollup1   | k1    | INT  | No   | true | N/A     |       |\n|           | k2    | INT  | No   | true | N/A     |       |\n+-----------+-------+------+------+------+---------+-------+\n")),(0,l.yg)("p",null,"You can use the following command to add a column k4 to rollup1 and rollup2, and add an additional column k5 to rollup2:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE tbl1\nADD COLUMN k4 INT default "1" to rollup1,\nADD COLUMN k4 INT default "1" to rollup2,\nADD COLUMN k5 INT default "1" to rollup2;\n')),(0,l.yg)("p",null,"After completion, the schema becomes:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-Plain"},"+-----------+-------+------+------+------+---------+-------+\n| IndexName | Field | Type | Null | Key  | Default | Extra |\n+-----------+-------+------+------+------+---------+-------+\n| tbl1      | k1    | INT  | No   | true | N/A     |       |\n|           | k2    | INT  | No   | true | N/A     |       |\n|           | k3    | INT  | No   | true | N/A     |       |\n|           | k4    | INT  | No   | true | 1       |       |\n|           | k5    | INT  | No   | true | 1       |       |\n|           |       |      |      |      |         |       |\n| rollup2   | k2    | INT  | No   | true | N/A     |       |\n|           | k4    | INT  | No   | true | 1       |       |\n|           | k5    | INT  | No   | true | 1       |       |\n|           |       |      |      |      |         |       |\n| rollup1   | k1    | INT  | No   | true | N/A     |       |\n|           | k2    | INT  | No   | true | N/A     |       |\n|           | k4    | INT  | No   | true | 1       |       |\n+-----------+-------+------+------+------+---------+-------+\n")),(0,l.yg)("p",null,"As seen, the base table tbl1 automatically includes the columns k4 and k5. Any columns added to a rollup will automatically be added to the base table."),(0,l.yg)("p",null,"Additionally, it is not allowed to add columns to a rollup that already exist in the base table. If a user needs to do so, they can create a new rollup with the additional columns and then delete the original rollup."),(0,l.yg)("h3",{id:"example-2-1"},"Example 2"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table\nADD COLUMN v2 INT MAX DEFAULT "0" AFTER k2 TO example_rollup_index,\nORDER BY (k3,k1,k2,v2,v1) FROM example_rollup_index;\n')),(0,l.yg)("h2",{id:"rename-column"},"Rename Column"),(0,l.yg)("p",null,"Syntax"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE RENAME COLUMN old_column_name new_column_name;    \n")),(0,l.yg)("h2",{id:"check-job-status"},"Check Job Status"),(0,l.yg)("p",null,"The creation of a schema change is an asynchronous process. After a job is successfully submitted, users need to use the ",(0,l.yg)("inlineCode",{parentName:"p"},"SHOW ALTER TABLE COLUMN")," command to check the progress of the job."),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"SHOW ALTER TABLE COLUMN ")," allows you to view the currently executing or completed schema Change jobs. When a schema change job involves multiple indexes, the command will display multiple rows, with each row corresponding to an index. For example:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"mysql SHOW ALTER TABLE COLUMN\\G;\n*************************** 1. row ***************************\n        JobId: 20021\n    TableName: tbl1\n   CreateTime: 2019-08-05 23:03:13\n   FinishTime: 2019-08-05 23:03:42\n    IndexName: tbl1\n      IndexId: 20022\nOriginIndexId: 20017\nSchemaVersion: 2:792557838\nTransactionId: 10023\n        State: FINISHED\n          Msg: \n     Progress: NULL\n      Timeout: 86400\n1 row in set (0.00 sec)\n")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"JobId: unique ID for each schema change job.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"TableName: name of the base table associated with schema change.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"CreateTime: time when the job was created.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},'FinishTime: time when the job is finished. If not finished, it displays "N/A".')),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"IndexName: name of one of the indexes involved in the modification.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"IndexId: unique ID of the new index.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"OriginIndexId: unique ID of the old index.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"SchemaVersion: displayed in the format M:N, where M represents the version of the schema change modification, and N represents the corresponding hash value. The version increments with each schema change.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"TransactionId: transaction ID that serves as the boundary for transforming historical data.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"State: current state of the job."),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"PENDING: the job is waiting in the queue to be scheduled.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"WAITING_TXN: waiting for import tasks before the boundary transaction ID to complete.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"RUNNING: historical data transformation is in progress.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"FINISHED: the job completed successfully.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"CANCELLED: the job was cancelled.")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Msg: if the job fails, this field displays the failure message.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Progress: job progress. It is only displayed when the state is RUNNING. Progress is shown in the format M/N, where N is the total number of replicas involved in the schema change, and M is the number of replicas that have completed historical data transformation.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Timeout: job timeout in seconds."))),(0,l.yg)("h2",{id:"cancel-job"},"Cancel Job"),(0,l.yg)("p",null,"In cases where the job state is not FINISHED or CANCELLED, you can cancel the schema change job using the following command:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"CANCEL ALTER TABLE COLUMN FROM tbl_name;\n")),(0,l.yg)("h2",{id:"notes"},"Notes"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Only one schema change job can run on a table at a time.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Schema change operations do not block import and query operations.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Partition and bucket columns cannot be modified.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"If the schema includes value columns aggregated using the REPLACE method, it is not allowed to delete key columns.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"If a key column is deleted, Doris cannot determine the values for the REPLACE columns.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"All non-key columns in a unique data model table are aggregated using the REPLACE method.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"When adding a value column with an aggregation type of SUM or REPLACE, the default value for that column has no meaning for historical data.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Since the historical data has lost detailed information, the default value does not reflect the actual aggregated value.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"When modifying the column type, all fields except Type need to be completed based on the information from the original column.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"For example, to modify the column ",(0,l.yg)("inlineCode",{parentName:"p"},'k1 from INT SUM NULL DEFAULT "1"')," to BIGINT, the command would be: ",(0,l.yg)("inlineCode",{parentName:"p"},'ALTER TABLE tbl1 MODIFY COLUMN k1 BIGINT SUM NULL DEFAULT "1"'),";")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Note that apart from the new column type, other attributes such as the aggregation method, nullable property, and default value should be completed based on the original information.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"It is not supported to modify column names, aggregation types, nullable properties, default values, or column comments."))),(0,l.yg)("h2",{id:"faqs"},"FAQs"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Schema change execution speed")),(0,l.yg)("p",null,"For a Light Schema Change, such as adding or deleting Value columns, the execution speed can be in the millisecond range. For other types of Schema Change, the execution speed is estimated to be around 10MB/s in the worst-case scenario. As a conservative measure, users can set the job timeout based on this speed."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Error:")," ",(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("inlineCode",{parentName:"strong"},'"Table xxx is not stable"'))," ",(0,l.yg)("strong",{parentName:"p"},"when submitting a job")),(0,l.yg)("p",null,"Schema Change can only be initiated when the table data is complete and in a balanced state. If some data shard replicas of the table are incomplete or if some replicas are undergoing balancing operations, the submission will be rejected. You can check if the data shard replicas are complete using the following command:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'SHOW REPLICA STATUS FROM tbl WHERE STATUS != "OK";\n')),(0,l.yg)("p",null,"If there are any results returned, it indicates that there are issues with the replicas. Typically, the system will automatically repair these issues, but users can prioritize the repair for a specific table using the following command:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"ADMIN REPAIR TABLE tbl1;\n")),(0,l.yg)("p",null,"You can check if there are any running balancing tasks using the following command:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'SHOW PROC "/cluster_balance/pending_tablets";\n')),(0,l.yg)("p",null,"You can wait for the balancing tasks to complete or temporarily disable balancing operations using the following command:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'ADMIN SET FRONTEND CONFIG ("disable_balance" = "true");\n')),(0,l.yg)("h2",{id:"configurations"},"Configurations"),(0,l.yg)("h3",{id:"fe-configuration"},"FE Configuration"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"alter_table_timeout_second"),": Default timeout for jobs, set to 86400 seconds.")),(0,l.yg)("h3",{id:"be-configuration"},"BE Configuration"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"alter_tablet_worker_count"),": Number of threads used on the BE side for executing historical data transformation. The default is 3. If you want to speed up Schema Change jobs, you can increase this parameter and restart the BE. However, having too many transformation threads may increase IO pressure and affect other operations. This thread is shared with Rollup jobs.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"alter_index_worker_count"),": Number of threads used on the BE side for building indexes on historical data (currently only supports inverted indexes). The default is 3. If you want to speed up Index Change jobs, you can increase this parameter and restart the BE. However, having too many threads may increase IO pressure and affect other operations."))),(0,l.yg)("h2",{id:"more-details"},"More Details"),(0,l.yg)("p",null,"For more detailed syntax and best practices regarding Schema Change, please refer to the ",(0,l.yg)("a",{parentName:"p",href:"../sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-COLUMN"},"ALTER TABLE COLUMN")," command manual. You can also enter ",(0,l.yg)("inlineCode",{parentName:"p"},"HELP ALTER TABLE COLUMN "),"in the MySQL client command line for more help information."))}g.isMDXComponent=!0}}]);