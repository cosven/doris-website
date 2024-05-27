"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[42752],{15680:(e,a,n)=>{n.d(a,{xA:()=>u,yg:()=>g});var t=n(296540);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,i=function(e,a){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=t.createContext({}),d=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},u=function(e){var a=d(e.components);return t.createElement(s.Provider,{value:a},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=i,g=c["".concat(s,".").concat(m)]||c[m]||p[m]||o;return n?t.createElement(g,r(r({ref:a},u),{},{components:n})):t.createElement(g,r({ref:a},u))}));function g(e,a){var n=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[c]="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=n[d];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},850489:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var t=n(58168),i=(n(296540),n(15680));const o={title:"Auto-increment columns in databases: a simple magic that makes a big difference",summary:"Auto-increment columns in Apache Doris accelerates dictionary encoding and pagination without damaging data writing performance. This is an introduction to its usage, applicable scenarios, and implementation details.",date:"2024-04-08",author:"Apache Doris",tags:["Tech Sharing"],image:"/images/auto-increment-columns-in-databases.png"},r=void 0,l={permalink:"/blog/auto-increment-columns-in-databases",source:"@site/blog/auto-increment-columns-in-databases.md",title:"Auto-increment columns in databases: a simple magic that makes a big difference",description:"\x3c!--",date:"2024-04-08T00:00:00.000Z",formattedDate:"April 8, 2024",tags:[{label:"Tech Sharing",permalink:"/blog/tags/tech-sharing"}],hasTruncateMarker:!1,authors:[{name:"Apache Doris"}],frontMatter:{title:"Auto-increment columns in databases: a simple magic that makes a big difference",summary:"Auto-increment columns in Apache Doris accelerates dictionary encoding and pagination without damaging data writing performance. This is an introduction to its usage, applicable scenarios, and implementation details.",date:"2024-04-08",author:"Apache Doris",tags:["Tech Sharing"],image:"/images/auto-increment-columns-in-databases.png"},prevItem:{title:"Apache Doris 2.0.8 just released",permalink:"/blog/release-note-2.0.8"},nextItem:{title:"Apache Doris 2.1.1 just released",permalink:"/blog/release-note-2.1.1"}},s={authorsImageUrls:[void 0]},d=[{value:"Syntax &amp; usage",id:"syntax--usage",level:2},{value:"Applicable scenarios",id:"applicable-scenarios",level:2},{value:"01 Dictionary encoding",id:"01-dictionary-encoding",level:3},{value:"02 Detailed data updates",id:"02-detailed-data-updates",level:3},{value:"03 Efficient pagination",id:"03-efficient-pagination",level:3},{value:"Implementation",id:"implementation",level:2},{value:"Note",id:"note",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:d},c="wrapper";function p(e){let{components:a,...o}=e;return(0,i.yg)(c,(0,t.A)({},u,o,{components:a,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Auto-increment column is a bread-and-butter feature of single-node transactional databases. It assigns a unique identifier for each row in a way that requires the least manual effort from users. With an auto-increment column in the table, whenever a new row is inserted into the table, the new row will be assigned with the next available value from the auto-increment sequence. This is an automated mechanism that makes database maintenance easy and reliable."),(0,i.yg)("p",null,"Auto-increment column is the bedrock of many features in databases:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Dictionary encoding"),": User IDs and Order IDs are often stored as strings. However, strings are not friendly to precise deduplication query execution. So for optimal performance, a common practice is to perform dictionary encoding on the strings and then construct a bitmap for aggregation operations. The role of an auto-increment column in this process is that ",(0,i.yg)("strong",{parentName:"p"},"it speeds up dictionary encoding and thus accelerates string deduplication"),".")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Primary key generation"),": An auto-increment column is the perfect candidate for the primary key of a table. Primary keys must be unique and not empty, while auto-increment columns guarantee a unique identifier for each row. ")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Detailed data updates"),": Updating detail tables is tricky, but it can be easy if you add a auto-increment table to it. It gives each data record in the database a unique ID, which can work as the primary key, and then data updates can be done based on the primary key.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Efficient pagination"),": Pagination is often required in data display. It is typically implemented by the ",(0,i.yg)("inlineCode",{parentName:"p"},"limit")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"offset")," + ",(0,i.yg)("inlineCode",{parentName:"p"},"order by")," statement in SQL queries. However, such implementation involves full data reading and sorting, which doesn't make so much sense in deep pagination queries (those with large offsets). This is when auto-increment columns come to the rescue. Like I said, it gives a unique identifier to each row, so the maximum identifier of the last page can be used as the filtering condition for the next page. Thus, it can avoid a lot of unnecessary data scanning and increase pagination efficiency."))),(0,i.yg)("p",null,"The idea of auto-increment columns is intuitive, but when it comes to distributed databases, it becomes a different game, because it has to consider global transactions. As a distributed DBMS, Apache Doris provides an innovative and efficient auto-increment solution that does no harm to data writing performance."),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},"To give AUTO_INCREMENT column a spin, follow this quick ",(0,i.yg)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=FGVp2RQvGBo"},"demo"),".")),(0,i.yg)("h2",{id:"syntax--usage"},"Syntax & usage"),(0,i.yg)("p",null,"To enable an auto-increment column in Doris, add ",(0,i.yg)("inlineCode",{parentName:"p"},"AUTO_INCREMENT")," property to the column in the table creation statement (",(0,i.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE/"},"CREAT-TABLE"),"). You can specify a starting value for the auto-increment column via ",(0,i.yg)("inlineCode",{parentName:"p"},"AUTO_INCREMENT(start_value)"),"; if not, the default starting value is 1."),(0,i.yg)("p",null,"For example, you can create a table in the ",(0,i.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/data-table/data-model#duplicate-model"},"Duplicate Key model"),", with one of the key columns being an auto-increment column. "),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE `demo`.`tbl` (\n  // highlight-next-line\n      `id` BIGINT NOT NULL AUTO_INCREMENT,\n      `value` BIGINT NOT NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`id`)\nDISTRIBUTED BY HASH(`id`) BUCKETS 10\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 3"\n);\n')),(0,i.yg)("p",null,"Apart from a key column, you can also specify a value column as an auto-increment column (example below):"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE `demo`.`tbl` (\n      `uid` BIGINT NOT NULL,\n      `name` BIGINT NOT NULL,\n      // highlight-next-line\n      `id` BIGINT NOT NULL AUTO_INCREMENT,\n      `value` BIGINT NOT NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`uid`, `name`)\nDISTRIBUTED BY HASH(`uid`) BUCKETS 10\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 3"\n);\n')),(0,i.yg)("p",null,"AUTO_INCREMENT is supported in both the Duplicate Key model and the ",(0,i.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/data-table/data-model/#unique-model"},"Unique Key model"),". Usage in the latter is similar."),(0,i.yg)("p",null,"I will walk you down the rest of the road with the table below as an example: "),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE `demo`.`tbl` (\n    `id` BIGINT NOT NULL AUTO_INCREMENT,\n    `name` varchar(65533) NOT NULL,\n    `value` int(11) NOT NULL\n) ENGINE=OLAP\nUNIQUE KEY(`id`)\nDISTRIBUTED BY HASH(`id`) BUCKETS 10\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 3"\n);\n')),(0,i.yg)("p",null,"When you ingest data into this table using an ",(0,i.yg)("inlineCode",{parentName:"p"},"insert into")," statement, if the ",(0,i.yg)("inlineCode",{parentName:"p"},"id")," column has no specified value in the original data file, it will be auto-filled with auto-increment values."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> insert into tbl(name, value) values(\"Bob\", 10), (\"Alice\", 20), (\"Jack\", 30);\nQuery OK, 3 rows affected (0.09 sec)\n{'label':'label_183babcb84ad4023_a2d6266ab73fb5aa', 'status':'VISIBLE', 'txnId':'7'}\n\nmysql> select * from tbl order by id;\n+------+-------+-------+\n| id   | name  | value |\n+------+-------+-------+\n|    1 | Bob   |    10 |\n|    2 | Alice |    20 |\n|    3 | Jack  |    30 |\n+------+-------+-------+\n3 rows in set (0.05 sec)\n")),(0,i.yg)("p",null,"Similarly, when you ingest a data file ",(0,i.yg)("inlineCode",{parentName:"p"},"test.csv")," by Stream Load, the ",(0,i.yg)("inlineCode",{parentName:"p"},"id")," column will be auto-filled with auto-increment values, too."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'test.csv:\nTom,40\nJohn,50\ncurl --location-trusted -u user:passwd -H "columns:name,value" -H "column_separator:," -T ./test.csv http://{host}:{port}/api/{db}/tbl/_stream_load\nselect * from tbl order by id;\n+------+-------+-------+\n| id   | name  | value |\n+------+-------+-------+\n|    1 | Bob   |    10 |\n|    2 | Alice |    20 |\n|    3 | Jack  |    30 |\n|    4 | Tom   |    40 |\n|    5 | John  |    50 |\n+------+-------+-------+\n5 rows in set (0.04 sec)\n')),(0,i.yg)("h2",{id:"applicable-scenarios"},"Applicable scenarios"),(0,i.yg)("h3",{id:"01-dictionary-encoding"},"01 Dictionary encoding"),(0,i.yg)("p",null,"In Apache Doris, the bitmap data type and the bitmap-related aggregations are implemented with RoaringBitmap, which can deliver high performance especially when dictionary encoding produces dense values. "),(0,i.yg)("p",null,"As is mentioned, auto-increment columns enable fast dictionary encoding. I will put you into the context of user profiling to show you how that works."),(0,i.yg)("p",null,"For analysis of offline page views (PV) and unique visitors (UV), store the details in a user behavior table: "),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE `demo`.`dwd_dup_tbl` (\n    `user_id` varchar(50) NOT NULL,\n    `dim1` varchar(50) NOT NULL,\n    `dim2` varchar(50) NOT NULL,\n    `dim3` varchar(50) NOT NULL,\n    `dim4` varchar(50) NOT NULL,\n    `dim5` varchar(50) NOT NULL,\n    `visit_time` DATE NOT NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`user_id`)\nDISTRIBUTED BY HASH(`user_id`) BUCKETS 32\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 3"\n);\n')),(0,i.yg)("p",null,"Create a dictionary table as follows leveraging AUTO_INCREMENT:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE `demo`.`dictionary_tbl` (\n    `user_id` varchar(50) NOT NULL,\n    `aid` BIGINT NOT NULL AUTO_INCREMENT\n) ENGINE=OLAP\nUNIQUE KEY(`user_id`)\nDISTRIBUTED BY HASH(`user_id`) BUCKETS 32\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 3"\n);\n')),(0,i.yg)("p",null,"Load the existing ",(0,i.yg)("inlineCode",{parentName:"p"},"user_id")," into the dictionary table, and create mappings from ",(0,i.yg)("inlineCode",{parentName:"p"},"user_id")," to integer values."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"insert into dictionary_tbl(user_id)\nselect user_id from dwd_dup_tbl group by user_id;\n")),(0,i.yg)("p",null,"If you only need to load the incremental ",(0,i.yg)("inlineCode",{parentName:"p"},"user_id")," into the dictionary table, you can use the following command. In practice, you can also use the ",(0,i.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/ecosystem/flink-doris-connector/"},"Flink Doris Connector")," for data writing. "),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"insert into dictionary_tbl(user_id)\nselect dwd_dup_tbl.user_id from dwd_dup_tbl left join dictionary_tbl\non dwd_dup_tbl.user_id = dictionary_tbl.user_id where dwd_dup_tbl.visit_time  '2023-12-10' and dictionary_tbl.user_id is NULL;\n")),(0,i.yg)("p",null,"Suppose you have your analytic dimensions as ",(0,i.yg)("inlineCode",{parentName:"p"},"dim1"),",  ",(0,i.yg)("inlineCode",{parentName:"p"},"dim3"),",  ",(0,i.yg)("inlineCode",{parentName:"p"},"dim5"),", create a table in the ",(0,i.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/data-table/data-model#aggregate-model"},"Aggregate Key model")," to accommodate the results of data aggregation:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE `demo`.`dws_agg_tbl` (\n    `dim1` varchar(50) NOT NULL,\n    `dim3` varchar(50) NOT NULL,\n    `dim5` varchar(50) NOT NULL,\n    `user_id_bitmap` BITMAP BITMAP_UNION NOT NULL,\n    `pv` BIGINT SUM NOT NULL \n) ENGINE=OLAP\nAGGREGATE KEY(`dim1`,`dim3`,`dim5`)\nDISTRIBUTED BY HASH(`dim1`) BUCKETS 32\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 3"\n);\n')),(0,i.yg)("p",null,"Load the aggregated results into the table:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"insert into dws_agg_tbl\nselect dwd_dup_tbl.dim1, dwd_dup_tbl.dim3, dwd_dup_tbl.dim5, BITMAP_UNION(TO_BITMAP(dictionary_tbl.aid)), COUNT(1)\nfrom dwd_dup_tbl INNER JOIN dictionary_tbl on dwd_dup_tbl.user_id = dictionary_tbl.user_id\ngroup by dwd_dup_tbl.dim1, dwd_dup_tbl.dim3, dwd_dup_tbl.dim5;\n")),(0,i.yg)("p",null,"Then you query PV/UV using the following statement:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"select dim1, dim3, dim5, bitmap_count(user_id_bitmap) as uv, pv from dws_agg_tbl;\n")),(0,i.yg)("h3",{id:"02-detailed-data-updates"},"02 Detailed data updates"),(0,i.yg)("p",null,"In Doris, the Unique Key model is applicable to use cases with frequent data updates, while the Duplicate Key model is designed for detailed data storage with no data updating requirements."),(0,i.yg)("p",null,"However, in real life, users might need to update their detailed data sometimes, which can be hard to implement because the data tables don't come with unique key columns."),(0,i.yg)("p",null,"In this case, you can ",(0,i.yg)("strong",{parentName:"p"},"use an auto-increment column as the primary key for the detailed data"),"."),(0,i.yg)("p",null,"For example, a financial institution keeps record of customer loans and writes it into a Duplicate Key table, in which one single user might have multiple borrowing records. "),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-Python"},"CREATE TABLE loan_records (\n    `user_id` VARCHAR(20) DEFAULT NULL COMMENT 'Customer ID',\n    `loan_amount` DECIMAL(10, 2) DEFAULT NULL COMMENT 'Amount of loan',\n    `interest_rate` DECIMAL(10, 2) DEFAULT NULL COMMENT 'Interest rate',\n    `loan_start_date` DATE DEFAULT NULL COMMENT 'Start date of the loan',\n    `loan_end_date` DATE DEFAULT NULL COMMENT 'End date of the loan',\n    `total_debt` DECIMAL(10, 2) DEFAULT NULL COMMENT 'Amount of debt'\n) DUPLICATE KEY(`user_id`)\nDISTRIBUTED BY HASH(`user_id`) BUCKETS 10\nPROPERTIES (\n    \"replication_allocation\" = \"tag.location.default: 3\"\n);\n")),(0,i.yg)("p",null,"Suppose that in a promotional campaign, the institution offers a 10% discount on interest rates to its existing customers. Correspondingly, there is a need to update the ",(0,i.yg)("inlineCode",{parentName:"p"},"interest_rate")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"total_debt")," in the table."),(0,i.yg)("p",null,"For that sake, you can create a Unique Key table for the same data, but add an ",(0,i.yg)("inlineCode",{parentName:"p"},"auto_id")," field and set it as the primary key. "),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-Python"},"CREATE TABLE loan_records (\n    `auto_id` BIGINT NOT NULL AUTO_INCREMENT,\n    `user_id` VARCHAR(20) DEFAULT NULL COMMENT 'Customer ID',\n    `loan_amount` DECIMAL(10, 2) DEFAULT NULL COMMENT 'Amount of loan',\n    `interest_rate` DECIMAL(10, 2) DEFAULT NULL COMMENT 'Interest rate',\n    `loan_start_date` DATE DEFAULT NULL COMMENT 'Start date of the loan',\n    `loan_end_date` DATE DEFAULT NULL COMMENT 'End date of the loan',\n    `total_debt` DECIMAL(10, 2) DEFAULT NULL COMMENT 'Amount of debt'\n) UNIQUE KEY(`auto_id`)\nDISTRIBUTED BY HASH(`auto_id`) BUCKETS 10\nPROPERTIES (\n    \"replication_allocation\" = \"tag.location.default: 3\"\n);\n")),(0,i.yg)("p",null,"Now, write a few new records into the table and see what happens. (Note that you don't have to write in the ",(0,i.yg)("inlineCode",{parentName:"p"},"auto_id")," field.)"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-Python"},"INSERT INTO loan_records (user_id, loan_amount, interest_rate, loan_start_date, loan_end_date, total_debt) VALUES\n('10001', 5000.00, 5.00, '2024-03-01', '2024-03-31', 5020.55),\n('10002', 10000.00, 5.00, '2024-03-01', '2024-05-01', 10082.56),\n('10003', 2000.00, 5.00, '2024-03-01', '2024-03-15', 2003.84),\n('10004', 7500.00, 5.00, '2024-03-01', '2024-04-15', 7546.23),\n('10005', 3000.00, 5.00, '2024-03-01', '2024-03-21', 3008.22),\n('10002', 8000.00, 5.00, '2024-03-01', '2024-06-01', 8100.82),\n('10007', 6000.00, 5.00, '2024-03-01', '2024-04-10', 6032.88),\n('10008', 4000.00, 5.00, '2024-03-01', '2024-03-26', 4013.70),\n('10001', 5500.00, 5.00, '2024-03-01', '2024-04-05', 5526.37),\n('10010', 9000.00, 5.00, '2024-03-01', '2024-05-10', 9086.30);\n")),(0,i.yg)("p",null,"Check with the ",(0,i.yg)("inlineCode",{parentName:"p"},"select * from loan_records")," statement, and you can see a unique ID is already in place for each newly-ingested record:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-Python"},"mysql> select * from loan_records;\n+---------+---------+-------------+---------------+-----------------+---------------+------------+\n| auto_id | user_id | loan_amount | interest_rate | loan_start_date | loan_end_date | total_debt |\n+---------+---------+-------------+---------------+-----------------+---------------+------------+\n|       1 | 10001   |     5000.00 |          5.00 | 2024-03-01      | 2024-03-31    |    5020.55 |\n|       4 | 10004   |     7500.00 |          5.00 | 2024-03-01      | 2024-04-15    |    7546.23 |\n|       2 | 10002   |    10000.00 |          5.00 | 2024-03-01      | 2024-05-01    |   10082.56 |\n|       3 | 10003   |     2000.00 |          5.00 | 2024-03-01      | 2024-03-15    |    2003.84 |\n|       6 | 10002   |     8000.00 |          5.00 | 2024-03-01      | 2024-06-01    |    8100.82 |\n|       8 | 10008   |     4000.00 |          5.00 | 2024-03-01      | 2024-03-26    |    4013.70 |\n|       7 | 10007   |     6000.00 |          5.00 | 2024-03-01      | 2024-04-10    |    6032.88 |\n|       9 | 10001   |     5500.00 |          5.00 | 2024-03-01      | 2024-04-05    |    5526.37 |\n|       5 | 10005   |     3000.00 |          5.00 | 2024-03-01      | 2024-03-21    |    3008.22 |\n|      10 | 10010   |     9000.00 |          5.00 | 2024-03-01      | 2024-05-10    |    9086.30 |\n+---------+---------+-------------+---------------+-----------------+---------------+------------+\n10 rows in set (0.01 sec)\n")),(0,i.yg)("p",null,"Execute these two SQL statements to update ",(0,i.yg)("inlineCode",{parentName:"p"},"interest_rate")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"total_debt"),", respectively:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-Python"},"update loan_records set interest_rate = interest_rate * 0.9 where user_id <= 10005;\nupdate loan_records set total_debt = loan_amount + (loan_amount * (interest_rate / 100) * DATEDIFF(loan_end_date, loan_start_date) / 365);\n")),(0,i.yg)("p",null,"Check again to see if the old records have been replaced by the new ones:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-Python"},"mysql> select * from loan_records order by auto_id;\n+---------+---------+-------------+---------------+-----------------+---------------+------------+\n| auto_id | user_id | loan_amount | interest_rate | loan_start_date | loan_end_date | total_debt |\n+---------+---------+-------------+---------------+-----------------+---------------+------------+\n|       1 | 10001   |     5000.00 |          4.50 | 2024-03-01      | 2024-03-31    |    5018.49 |\n|       2 | 10002   |    10000.00 |          4.50 | 2024-03-01      | 2024-05-01    |   10075.21 |\n|       3 | 10003   |     2000.00 |          4.50 | 2024-03-01      | 2024-03-15    |    2003.45 |\n|       4 | 10004   |     7500.00 |          4.50 | 2024-03-01      | 2024-04-15    |    7541.61 |\n|       5 | 10005   |     3000.00 |          4.50 | 2024-03-01      | 2024-03-21    |    3007.40 |\n|       6 | 10002   |     8000.00 |          4.50 | 2024-03-01      | 2024-06-01    |    8090.74 |\n|       7 | 10007   |     6000.00 |          5.00 | 2024-03-01      | 2024-04-10    |    6032.88 |\n|       8 | 10008   |     4000.00 |          5.00 | 2024-03-01      | 2024-03-26    |    4013.70 |\n|       9 | 10001   |     5500.00 |          4.50 | 2024-03-01      | 2024-04-05    |    5523.73 |\n|      10 | 10010   |     9000.00 |          5.00 | 2024-03-01      | 2024-05-10    |    9086.30 |\n+---------+---------+-------------+---------------+-----------------+---------------+------------+\n10 rows in set (0.01 sec)\n")),(0,i.yg)("h3",{id:"03-efficient-pagination"},"03 Efficient pagination"),(0,i.yg)("p",null,"Imagine that you need to sort the data in a specific order and then retrieve record No. 90,001 to record No. 90,010. This means you have a large offset of 90,000. This is what we call a deep pagination query. Even though you only require a result set of 10 rows, the database system still has to read the entire dataset into memory and perform a full sorting."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"For higher execution efficiency in deep pagination queries, you can harness the power of auto-increment columns"),". The main idea is to record the ",(0,i.yg)("inlineCode",{parentName:"p"},"max_value")," from the ",(0,i.yg)("inlineCode",{parentName:"p"},"unique_value")," column of the previous page, and push down predicates by ",(0,i.yg)("inlineCode",{parentName:"p"},"where unique_value > max_value limit rows_per_page"),"."),(0,i.yg)("p",null,"For example, during table creation, you enable an auto-increment column: ",(0,i.yg)("inlineCode",{parentName:"p"},"unique_value"),", which gives each row an identifier."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE `demo`.`records_tbl` (\n    `user_id` int(11) NOT NULL COMMENT "",\n    `name` varchar(26) NOT NULL COMMENT "",\n    `address` varchar(41) NOT NULL COMMENT "",\n    `city` varchar(11) NOT NULL COMMENT "",\n    `nation` varchar(16) NOT NULL COMMENT "",\n    `region` varchar(13) NOT NULL COMMENT "",\n    `phone` varchar(16) NOT NULL COMMENT "",\n    `mktsegment` varchar(11) NOT NULL COMMENT "",\n    `unique_value` BIGINT NOT NULL AUTO_INCREMENT\n) DUPLICATE KEY (`user_id`, `name`)\nDISTRIBUTED BY HASH(`user_id`) BUCKETS 10\nPROPERTIES (\n    "replication_allocation" = "tag.location.default: 3"\n);\n')),(0,i.yg)("p",null,"In pagination queries, suppose that each page displays 100 results, this is how you retrieve the first page of the result set. "),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"select * from records_tbl order by unique_value limit 100;\n")),(0,i.yg)("p",null,"Use programs to record the maximum ",(0,i.yg)("inlineCode",{parentName:"p"},"unique_value")," in the returned result. Suppose that the maximum is 99, you can query data from the second page using the following statement:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"select * from records_tbl where unique_value > 99 order by unique_value limit 100;\n")),(0,i.yg)("p",null,"If you need to query data from a deeper page, for example, page 101, which means it's hard to get the maximum ",(0,i.yg)("inlineCode",{parentName:"p"},"unique_value")," from the previous page directly, then you can use the statement as follows:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"select user_id, name, address, city, nation, region, phone, mktsegment\nfrom records_tbl, (select unique_value as max_value from records_tbl order by unique_value limit 1 offset 9999) as previous_data\nwhere records_tbl.unique_value > previous_data.max_value\norder by unique_value limit 100;\n")),(0,i.yg)("h2",{id:"implementation"},"Implementation"),(0,i.yg)("p",null,"Typical OLTP databases perform incremental ID matching by their transaction mechanisms. However, in an MPP-based distributed database system like Apache Doris, such an approach can easily suffocate data writing performance. "),(0,i.yg)("p",null,"That's why Apache Doris 2.1 innovates the implementation of auto-increment IDs. In a data ingestion task, one of the backend (BE) nodes will work as the coordinator, which is responsible for the allocation of auto-increment IDs. The coordinator BE requests a range of IDs in bulk from the frontend (FE). The FE makes sure that the ID ranges allocated to each BE do not overlap, thus guaranteeing the uniqueness of IDs."),(0,i.yg)("p",null,"I illustrate the process with the figure below. StreamLoad1 has BE1 as the coordinator. BE1 requests a batch of IDs (range: 1-1000) from the FE and caches the IDs locally. Once all 1000 IDs are allocated, BE1 will request a new batch from the FE. At the same time, StreamLoad 2 selects BE3 as the coordinator, and BE3 also requests IDs from the FE. Since IDs 1-1000 have already been allocated to BE1, the FE assigns IDs 1001-2000 to BE3."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"the implementation of auto-increment IDs",src:n(688095).A,width:"1280",height:"1100"})),(0,i.yg)("p",null,"Suppose that StreamLoad1 and StreamLoad2 each write in 50 new data records, the auto-increment IDs assigned to them will be 1-50 and 1001-1050. "),(0,i.yg)("p",null,"Suppose that StreamLoad3 arises later and selects BE1 as the coordinator, BE1 will assign IDs starting from 51 to the data written by StreamLoad3. From the user's side, they will see that rows written by StreamLoad3 get smaller ID numbers than those by StreamLoad2, even though StreamLoad2 precedes StreamLoad3 in time."),(0,i.yg)("h2",{id:"note"},"Note"),(0,i.yg)("p",null,"Attention is required regarding: "),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Scope of uniqueness guarantee"),": Doris ensures that the values generated on an auto-increment column are unique within the table, but this only applies to values auto-filled by Doris. If a user explicitly inserts values into the auto-increment column, Doris cannot guarantee the uniqueness of those values.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Density and continuity of values"),": Doris ensures that the values generated by the auto-increment column are dense. However, for performance reasons, it cannot guarantee that the auto-filled values are continuous. This means there may be occurrences of value jumps in the auto-increment column. Additionally, since the auto-increment values are pre-allocated and cached in BE, the magnitude of the auto-increment values cannot reflect the order of data import."))),(0,i.yg)("h2",{id:"conclusion"},"Conclusion"),(0,i.yg)("p",null,"AUTO_INCREMENT brings higher stability and reliability for Doris in large-scale data processing. If it sounds like something you need, download ",(0,i.yg)("a",{parentName:"p",href:"https://doris.apache.org/download/"},"Apache Doris")," and try it out. For issues you come across along the way, join us in the ",(0,i.yg)("a",{parentName:"p",href:"https://join.slack.com/t/apachedoriscommunity/shared_invite/zt-2gmq5o30h-455W226d79zP3L96ZhXIoQ"},"Apache Doris developer and user community")," and we are happy to help."))}p.isMDXComponent=!0},688095:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/the-implementation-of-auto-increment-IDs-d48d7814da087bde1ef5fe3fbf0db7b5.png"}}]);