"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[31739],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>m});var n=a(296540);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=d(a),u=i,m=g["".concat(l,".").concat(u)]||g[u]||p[u]||r;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[g]="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},177962:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var n=a(58168),i=(a(296540),a(15680));const r={title:"Building a log analytics solution 10 times more cost-effective than Elasticsearch",summary:"Apache Doris has introduced inverted indexes in version 2.0.0 and further optimized it to realize two times faster log query performance than Elasticsearch with 1/5 of the storage space it uses.",date:"2023-05-26",author:"Apache Doris",tags:["Tech Sharing"],image:"/images/building-a-log-analytics-solution-10-times-more-cost-effective-than-es.jpg"},o=void 0,s={permalink:"/blog/Building-A-Log-Analytics-Solution-10-Times-More-Cost-Effective-Than-Elasticsearch",source:"@site/blog/Building-A-Log-Analytics-Solution-10-Times-More-Cost-Effective-Than-Elasticsearch.md",title:"Building a log analytics solution 10 times more cost-effective than Elasticsearch",description:"\x3c!--",date:"2023-05-26T00:00:00.000Z",formattedDate:"May 26, 2023",tags:[{label:"Tech Sharing",permalink:"/blog/tags/tech-sharing"}],hasTruncateMarker:!1,authors:[{name:"Apache Doris"}],frontMatter:{title:"Building a log analytics solution 10 times more cost-effective than Elasticsearch",summary:"Apache Doris has introduced inverted indexes in version 2.0.0 and further optimized it to realize two times faster log query performance than Elasticsearch with 1/5 of the storage space it uses.",date:"2023-05-26",author:"Apache Doris",tags:["Tech Sharing"],image:"/images/building-a-log-analytics-solution-10-times-more-cost-effective-than-es.jpg"},prevItem:{title:"A/B Testing was a handful, until we found the replacement for Druid",permalink:"/blog/AB-Testing-was-a-Handful-Until-we-Found-the-Replacement-for-Druid"},nextItem:{title:"Building a data warehouse for traditional industry",permalink:"/blog/Building-a-Data-Warehouse-for-Traditional-Industry"}},l={authorsImageUrls:[void 0]},d=[{value:"Common Solutions: Elasticsearch &amp; Grafana Loki",id:"common-solutions-elasticsearch--grafana-loki",level:2},{value:"Introduction to Inverted Index",id:"introduction-to-inverted-index",level:2},{value:"Inverted Index in Apache Doris",id:"inverted-index-in-apache-doris",level:2},{value:"Optimizations for Inverted Index",id:"optimizations-for-inverted-index",level:2},{value:"General Optimizations",id:"general-optimizations",level:3},{value:"Tailored Optimizations to OLAP",id:"tailored-optimizations-to-olap",level:3},{value:"Benchmarking",id:"benchmarking",level:2},{value:"Apache Doris VS Elasticsearch",id:"apache-doris-vs-elasticsearch",level:3},{value:"Apache Doris VS ClickHouse",id:"apache-doris-vs-clickhouse",level:3},{value:"Usage &amp; Example",id:"usage--example",level:2},{value:"Wrap-up",id:"wrap-up",level:2}],c={toc:d},g="wrapper";function p(e){let{components:t,...r}=e;return(0,i.yg)(g,(0,n.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Logs often take up the majority of a company's data assets. Examples of logs include business logs (such as user activity logs), and Operation & Maintenance logs of servers, databases, and network or IoT devices."),(0,i.yg)("p",null,"Logs are the guardian angel of business. On the one hand, they provide system risk alerts and help engineers in troubleshooting. On the other hand, if you zoom them out by time range, you might identify some helpful trends and patterns, not to mention that business logs are the cornerstone of user insights."),(0,i.yg)("p",null,"However, logs can be a handful, because:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"They flow in like crazy.")," Every system event or click from user generates a log. A company often produces tens of billions of new logs per day."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"They are bulky.")," Logs are supposed to stay. They might not be useful until they are. So a company can accumulate up to PBs of log data, many of which are seldom visited but take up huge storage space. "),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"They must be quick to load and find.")," Locating the target log for troubleshooting is literally like looking for a needle in a haystack. People long for real-time log writing and real-time responses to log queries. ")),(0,i.yg)("p",null,"Now you can see a clear picture of what an ideal log processing system is like. It should support:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"High-throughput real-time data ingestion:")," It should be able to write blogs in bulk, and make them visible immediately."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Low-cost storage:")," It should be able to store substantial amounts of logs without costing too many resources."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Real-time text search:")," It should be capable of quick text search.")),(0,i.yg)("h2",{id:"common-solutions-elasticsearch--grafana-loki"},"Common Solutions: Elasticsearch & Grafana Loki"),(0,i.yg)("p",null,"There exist two common log processing solutions within the industry, exemplified by Elasticsearch and Grafana Loki, respectively. "),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Inverted index (Elasticsearch)"),": It is well-embraced due to its support for full-text search and high performance. The downside is the low throughput in real-time writing and the huge resource consumption in index creation."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Lightweight index / no index (Grafana Loki)"),": It is the opposite of inverted index because it boasts high real-time write throughput and low storage cost but delivers slow queries.")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Elasticsearch-and-Grafana-Loki",src:a(774187).A,width:"1412",height:"748"})),(0,i.yg)("h2",{id:"introduction-to-inverted-index"},"Introduction to Inverted Index"),(0,i.yg)("p",null,"A prominent strength of Elasticsearch in log processing is quick keyword search among a sea of logs. This is enabled by inverted indexes."),(0,i.yg)("p",null,"Inverted indexing was originally used to retrieve words or phrases in texts. The figure below illustrates how it works: "),(0,i.yg)("p",null,"Upon data writing, the system tokenizes texts into ",(0,i.yg)("strong",{parentName:"p"},"terms"),", and stores these terms in a ",(0,i.yg)("strong",{parentName:"p"},"posting list")," which maps terms to the ID of the row where they exist. In text queries, the database finds the corresponding ",(0,i.yg)("strong",{parentName:"p"},"row ID")," of the keyword (term) in the posting list, and fetches the target row based on the row ID. By doing so, the system won't have to traverse the whole dataset and thus improves query speeds by orders of magnitudes. "),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"inverted-index",src:a(886544).A,width:"961",height:"720"})),(0,i.yg)("p",null,"In inverted indexing of Elasticsearch, quick retrieval comes at the cost of writing speed, writing throughput, and storage space. Why? Firstly, tokenization, dictionary sorting, and inverted index creation are all CPU- and memory-intensive operations. Secondly, Elasticssearch has to store the original data, the inverted index, and an extra copy of data stored in columns for query acceleration. That's triple redundancy. "),(0,i.yg)("p",null,"But without inverted index, Grafana Loki, for example, is hurting user experience with its slow queries, which is the biggest pain point for engineers in log analysis."),(0,i.yg)("p",null,"Simply put, Elasticsearch and Grafana Loki represent different tradeoffs between high writing throughput, low storage cost, and fast query performance. What if I tell you there is a way to have them all? We have introduced inverted indexes in ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/issues/19231"},"Apache Doris 2.0.0")," and further optimized it to realize ",(0,i.yg)("strong",{parentName:"p"},"two times faster log query performance than Elasticsearch with 1/5 of the storage space it uses. Both factors combined, it is a 10 times better solution.")," "),(0,i.yg)("h2",{id:"inverted-index-in-apache-doris"},"Inverted Index in Apache Doris"),(0,i.yg)("p",null,"Generally, there are two ways to implement indexes: ",(0,i.yg)("strong",{parentName:"p"},"external indexing system")," or ",(0,i.yg)("strong",{parentName:"p"},"built-in indexes"),"."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"External indexing system:")," You connect an external indexing system to your database. In data ingestion, data is imported to both systems. After the indexing system creates indexes, it deletes the original data within itself. When data users input a query, the indexing system provides the IDs of the relevant data, and then the database looks up the target data based on the IDs. "),(0,i.yg)("p",null,"Building an external indexing system is easier and less intrusive to the database, but it comes with some annoying flaws:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"The need to write data into two systems can result in data inconsistency and storage redundancy."),(0,i.yg)("li",{parentName:"ul"},"Interaction between the database and the indexing system brings overheads, so when the target data is huge, the query across the two systems can be slow."),(0,i.yg)("li",{parentName:"ul"},"It is exhausting to maintain two systems.")),(0,i.yg)("p",null,"In ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/doris"},"Apache Doris"),", we opt for the other way. Built-in inverted indexes are more difficult to make, but once it is done, it is faster, more user-friendly, and trouble-free to maintain."),(0,i.yg)("p",null,"In Apache Doris, data is arranged in the following format. Indexes are stored in the Index Region:"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"index-region-in-Apache-Doris",src:a(892793).A,width:"1054",height:"324"})),(0,i.yg)("p",null,"We implement inverted indexes in a non-intrusive manner:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"Data ingestion & compaction"),": As a segment file is written into Doris, an inverted index file will be written, too. The index file path is determined by the segment ID and the index ID. Rows in segments correspond to the docs in indexes, so are the RowID and the DocID."),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"Query"),": If the ",(0,i.yg)("inlineCode",{parentName:"li"},"where")," clause includes a column with inverted index, the system will look up in the index file, return a DocID list, and convert the DocID list into a RowID Bitmap. Under the RowID filtering mechanism of Apache Doris, only the target rows will be read. This is how queries are accelerated.")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"non-intrusive-inverted-index",src:a(959750).A,width:"1174",height:"1126"})),(0,i.yg)("p",null,"Such non-intrusive method separates the index file from the data files, so you can make any changes to the inverted indexes without worrying about affecting the data files themselves or other indexes. "),(0,i.yg)("h2",{id:"optimizations-for-inverted-index"},"Optimizations for Inverted Index"),(0,i.yg)("h3",{id:"general-optimizations"},"General Optimizations"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"C++ Implementation and Vectorization")),(0,i.yg)("p",null,"Different from Elasticsearch, which uses Java, Apache Doris implements C++ in its storage modules, query execution engine, and inverted indexes. Compared to Java, C++ provides better performance, allows easier vectorization, and produces no JVM GC overheads. We have vectorized every step of inverted indexing in Apache Doris, such as tokenization, index creation, and queries. To provide you with a perspective, ",(0,i.yg)("strong",{parentName:"p"},"in inverted indexing, Apache Doris writes data at a speed of 20MB/s per core, which is four times that of Elasticsearch (5MB/s).")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Columnar Storage & Compression")),(0,i.yg)("p",null,"Apache Lucene lays the foundation for inverted indexes in Elasticsearch. As Lucene itself is built to support file storage, it stores data in a row-oriented format. "),(0,i.yg)("p",null,"In Apache Doris, inverted indexes for different columns are isolated from each other, and the inverted index files adopt columnar storage to facilitate vectorization and data compression."),(0,i.yg)("p",null,"By utilizing Zstandard compression, Apache Doris realizes a compression ratio ranging from ",(0,i.yg)("strong",{parentName:"p"},"5:1")," to ",(0,i.yg)("strong",{parentName:"p"},"10:1"),", faster compression speeds, and 50% less space usage than GZIP compression."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"BKD Trees for Numeric / Datetime Columns")),(0,i.yg)("p",null,"Apache Doris implements BKD trees for numeric and datetime columns. This not only increases performance of range queries, but is a more space-saving method than converting those columns to fixed-length strings. Other benefits of it include:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"Efficient range queries"),": It is able to quickly locate the target data range in numeric and datetime columns."),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"Less storage space"),": It aggregates and compresses adjacent data blocks to reduce storage costs."),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"Support for multi-dimensional data"),": BKD trees are scalable and adaptive to multi-dimensional data types, such as GEO points and ranges.")),(0,i.yg)("p",null,"In addition to BKD trees, we have further optimized the queries on numeric and datetime columns."),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"Optimization for low-cardinality scenarios"),": We have fine-tuned the compression algorithm for low-cardinality scenarios, so decompressing and de-serializing large amounts of inverted lists will consume less CPU resources."),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"Pre-fetching"),": For high-hit-rate scenarios, we adopt pre-fetching. If the hit rate exceeds a certain threshold, Doris will skip the indexing process and start data filtering.")),(0,i.yg)("h3",{id:"tailored-optimizations-to-olap"},"Tailored Optimizations to OLAP"),(0,i.yg)("p",null,"Log analysis is a simple kind of query with no need for advanced features (e.g. relevance scoring in Apache Lucene). The bread and butter capability of a log processing tool is quick queries and low storage cost. Therefore, in Apache Doris, we have streamlined the inverted index structure to meet the needs of an OLAP database."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"In data ingestion, we prevent multiple threads from writing data into the same index, and thus avoid overheads brought by lock contention."),(0,i.yg)("li",{parentName:"ul"},"We discard forward index files and Norm files to clear storage space and reduce I/O overheads."),(0,i.yg)("li",{parentName:"ul"},"We simplify the computation logic of relevance scoring and ranking to further reduce overheads and increase performance.")),(0,i.yg)("p",null,"In light of the fact that logs are partitioned by time range and historical logs are visited less frequently. We plan to provide more granular and flexible index management in future versions of Apache Doris:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Create inverted index for a specified data partition"),": create index for logs of the past seven days, etc."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Delete")," ",(0,i.yg)("strong",{parentName:"li"},"inverted index for a specified data partition"),": delete index for logs from over one month ago, etc. (so as to clear out index space).")),(0,i.yg)("h2",{id:"benchmarking"},"Benchmarking"),(0,i.yg)("p",null,"We tested Apache Doris on publicly available datasets against Elasticsearch and ClickHouse."),(0,i.yg)("p",null,"For a fair comparison, we ensure uniformity of testing conditions, including benchmarking tool, dataset, and hardware."),(0,i.yg)("h3",{id:"apache-doris-vs-elasticsearch"},"Apache Doris VS Elasticsearch"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Benchmarking tool"),": ES Rally, the official testing tool for Elasticsearch"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Dataset"),": 1998 World Cup HTTP Server Logs (self-contained dataset in ES Rally)"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Data Size (Before Compression)"),": 32G, 247 million rows, 134 bytes per row (on average)"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Query"),":  11 queries including keyword search, range query, aggregation, and ranking; Each query is serially executed 100 times."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Environment"),": 3 \xd7 16C 64G cloud virtual machines"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Results of Apache Doris"),":"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Writing Speed: 550 MB/s, ",(0,i.yg)("strong",{parentName:"li"},"4.2 times that of Elasticsearch")),(0,i.yg)("li",{parentName:"ul"},"Compression Ratio: 10:1"),(0,i.yg)("li",{parentName:"ul"},"Storage Usage: ",(0,i.yg)("strong",{parentName:"li"},"20% that of Elasticsearch")),(0,i.yg)("li",{parentName:"ul"},"Response Time: ",(0,i.yg)("strong",{parentName:"li"},"43% that of Elasticsearch"))))),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Apache-Doris-VS-Elasticsearch",src:a(998767).A,width:"1592",height:"680"})),(0,i.yg)("h3",{id:"apache-doris-vs-clickhouse"},"Apache Doris VS ClickHouse"),(0,i.yg)("p",null,"As ClickHouse launched inverted index as an experimental feature in v23.1, we tested Apache Doris with the same dataset and SQL as described in the ClickHouse ",(0,i.yg)("a",{parentName:"p",href:"https://clickhouse.com/blog/clickhouse-search-with-inverted-indices"},"blog"),", and compared performance of the two under the same testing resource, case, and tool."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Data"),": 6.7G, 28.73 million rows, the Hacker News dataset, Parquet format"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Query"),':  3 keyword searches, counting the number of occurrence of the keywords "ClickHouse", "OLAP" OR "OLTP", and "avx" AND "sve".'),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Environment"),": 1 \xd7 16C 64G cloud virtual machine"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Result"),": Apache Doris was ",(0,i.yg)("strong",{parentName:"p"},"4.7 times, 12 times, 18.5 times")," faster than ClickHouse in the three queries, respectively."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Apache-Doris-VS-ClickHouse",src:a(307924).A,width:"1546",height:"626"})),(0,i.yg)("h2",{id:"usage--example"},"Usage & Example"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Dataset"),": one million comment records from Hacker News"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Step 1"),": Specify inverted index to the data table upon table creation.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Parameters"),":")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"INDEX idx_comment (",(0,i.yg)("inlineCode",{parentName:"li"},"comment"),'): create an index named "idx_comment" comment for the "comment" column'),(0,i.yg)("li",{parentName:"ul"},"USING INVERTED: specify inverted index for the table"),(0,i.yg)("li",{parentName:"ul"},'PROPERTIES("parser" = "english"): specify the tokenization language to English')))),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-SQL"},'CREATE TABLE hackernews_1m\n(\n    `id` BIGINT,\n    `deleted` TINYINT,\n    `type` String,\n    `author` String,\n    `timestamp` DateTimeV2,\n    `comment` String,\n    `dead` TINYINT,\n    `parent` BIGINT,\n    `poll` BIGINT,\n    `children` Array<BIGINT>,\n    `url` String,\n    `score` INT,\n    `title` String,\n    `parts` Array<INT>,\n    `descendants` INT,\n    INDEX idx_comment (`comment`) USING INVERTED PROPERTIES("parser" = "english") COMMENT \'inverted index for comment\'\n)\nDUPLICATE KEY(`id`)\nDISTRIBUTED BY HASH(`id`) BUCKETS 10\nPROPERTIES ("replication_num" = "1");\n')),(0,i.yg)("p",null,"Note: You can add index to an existing table via ",(0,i.yg)("inlineCode",{parentName:"p"},"ADD INDEX idx_comment ON hackernews_1m("),"comment",(0,i.yg)("inlineCode",{parentName:"p"},') USING INVERTED PROPERTIES("parser" = "english") '),". Different from that of smart index and secondary index, the creation of inverted index only involves the reading of the comment column, so it can be much faster."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Step 2"),': Retrieve the words"OLAP" and "OLTP" in the comment column with ',(0,i.yg)("inlineCode",{parentName:"p"},"MATCH_ALL"),". The response time here was 1/10 of that in hard matching with ",(0,i.yg)("inlineCode",{parentName:"p"},"like"),". (The performance gap widens as data volume increases.)"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-SQL"},"mysql> SELECT count() FROM hackernews_1m WHERE comment LIKE '%OLAP%' AND comment LIKE '%OLTP%';\n+---------+\n| count() |\n+---------+\n|      15 |\n+---------+\n1 row in set (0.13 sec)\n\nmysql> SELECT count() FROM hackernews_1m WHERE comment MATCH_ALL 'OLAP OLTP';\n+---------+\n| count() |\n+---------+\n|      15 |\n+---------+\n1 row in set (0.01 sec)\n")),(0,i.yg)("p",null,"For more feature introduction and usage guide, see documentation: ",(0,i.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/data-table/index/inverted-index/"},"Inverted Index")),(0,i.yg)("h2",{id:"wrap-up"},"Wrap-up"),(0,i.yg)("p",null,"In a word, what contributes to Apache Doris' 10-time higher cost-effectiveness than Elasticsearch is its OLAP-tailored optimizations for inverted indexing, supported by the columnar storage engine, massively parallel processing framework, vectorized query engine, and cost-based optimizer of Apache Doris. "),(0,i.yg)("p",null,"As proud as we are about our own inverted indexing solution, we understand that self-published benchmarks can be controversial, so we are open to ",(0,i.yg)("a",{parentName:"p",href:"https://join.slack.com/t/apachedoriscommunity/shared_invite/zt-2gmq5o30h-455W226d79zP3L96ZhXIoQ"},"feedback")," from any third-party users and see how ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/doris"},"Apache Doris")," works in real-world cases."))}p.isMDXComponent=!0},774187:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/Inverted_1-976368c1a98899c128fdb268e00261c5.png"},886544:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/Inverted_2-20f3d1267475f3074304b15f8a901db3.png"},892793:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/Inverted_3-10be120b343f5721d2c3adb666ab16b2.png"},959750:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/Inverted_4-9de8707a87ec78e61f52142b043b512b.png"},998767:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/Inverted_5-d5600afe9c83f8ade57180eaa1104e8e.png"},307924:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/Inverted_6-a3e009f32ae1d0a25a40f257c04b8878.png"}}]);