"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[86913],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>g});var i=a(296540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=i.createContext({}),c=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(a),h=n,g=p["".concat(l,".").concat(h)]||p[h]||u[h]||r;return a?i.createElement(g,s(s({ref:t},d),{},{components:a})):i.createElement(g,s({ref:t},d))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:n,s[1]=o;for(var c=2;c<r;c++)s[c]=a[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,a)}h.displayName="MDXCreateElement"},167720:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=a(58168),n=(a(296540),a(15680));const r={title:"From Elasticsearch to Apache Doris: upgrading an observability platform",summary:"GuanceDB, an observability platform, replaces Elasticsearch with Apache Doris as its query and storage engine and realizes 70% less storage costs and 200%~400% data query performance.",date:"2023-12-14",author:"Apache Doris",tags:["Best Practice"],image:"/images/from-elasticsearch-to-apache-doris-upgrading-an-observability-platform.jpg"},s=void 0,o={permalink:"/blog/from-elasticsearch-to-apache-doris-upgrading-an-observability-platform",source:"@site/blog/from-elasticsearch-to-apache-doris-upgrading-an-observability-platform.md",title:"From Elasticsearch to Apache Doris: upgrading an observability platform",description:"\x3c!--",date:"2023-12-14T00:00:00.000Z",formattedDate:"December 14, 2023",tags:[{label:"Best Practice",permalink:"/blog/tags/best-practice"}],hasTruncateMarker:!1,authors:[{name:"Apache Doris"}],frontMatter:{title:"From Elasticsearch to Apache Doris: upgrading an observability platform",summary:"GuanceDB, an observability platform, replaces Elasticsearch with Apache Doris as its query and storage engine and realizes 70% less storage costs and 200%~400% data query performance.",date:"2023-12-14",author:"Apache Doris",tags:["Best Practice"],image:"/images/from-elasticsearch-to-apache-doris-upgrading-an-observability-platform.jpg"},prevItem:{title:"Apache Doris speeds up data reporting, tagging, and data lake analytics",permalink:"/blog/apache-doris-speeds-up-data-reporting-tagging-and-data-lake-analytics"},nextItem:{title:"Apache Doris 2.0.3 just released",permalink:"/blog/release-note-2.0.3"}},l={authorsImageUrls:[void 0]},c=[{value:"GuanceDB",id:"guancedb",level:2},{value:"Data integration",id:"data-integration",level:3},{value:"Query &amp; storage engine",id:"query--storage-engine",level:3},{value:"DQL",id:"dql",level:2},{value:"Observations",id:"observations",level:2},{value:"Storage cost 70% down, query speed 300% up",id:"storage-cost-70-down-query-speed-300-up",level:3},{value:"Inverted index for full-text search",id:"inverted-index-for-full-text-search",level:3},{value:"A new data type for dynamic schema change",id:"a-new-data-type-for-dynamic-schema-change",level:3},{value:"Conclusion",id:"conclusion",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...r}=e;return(0,n.yg)(p,(0,i.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Observability platforms are akin to the immune system. Just like immune cells are everywhere in human bodies, an observability platform patrols every corner of your devices, components, and architectures, identifying any potential threats and proactively mitigating them. However, I might have gone too far with that metaphor, because till these days, we have never invented a system as sophisticated as the human body, but we can always make advancements."),(0,n.yg)("p",null,"The key to upgrading an observability platform is to increase data processing speed and reduce costs. This is based on two reasons:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"The faster you can identify abnormalities from your data, the more you can contain the potential damage."),(0,n.yg)("li",{parentName:"ol"},"An observability platform needs to store a sea of data, and low storage cost is the only way to make that sustainable.")),(0,n.yg)("p",null,"This post is about how GuanceDB, an observability platform, makes progress in these two aspects by replacing Elasticsearch with Apache Doris as its query and storage engine. ",(0,n.yg)("strong",{parentName:"p"},"The result is 70% less storage costs and 200%\uff5e400% data query performance.")),(0,n.yg)("h2",{id:"guancedb"},"GuanceDB"),(0,n.yg)("p",null,"GuanceDB is an all-around observability solution. It provides services including data analytics, data visualization, monitoring and alerting, and security inspection. From GuanceDB, users can have an understanding of their objects, network performance, applications, user experience, system availability, etc."),(0,n.yg)("p",null,"From the standpoint of a data pipeline, GuanceDB can be divided into two parts: data ingestion and data analysis. I will get to them one by one."),(0,n.yg)("h3",{id:"data-integration"},"Data integration"),(0,n.yg)("p",null,"For data integration, GuanceDB uses its self-made tool called DataKit. It is an all-in-one data collector that extracts from different end devices, business systems, middleware, and data infrastructure. It can also preprocess data and relate it with metadata. It provides extensive support for data, from logs, and time series metrics, to data of distributed tracing, security events, and user behaviors from mobile APPs and web browsers. To cater to diverse needs across multiple scenarios, it ensures compatibility with various open-source probes and collectors as well as data sources of custom formats."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"observability-platform-architecture",src:a(370173).A,width:"2000",height:"930"})),(0,n.yg)("h3",{id:"query--storage-engine"},"Query & storage engine"),(0,n.yg)("p",null,"Data collected by DataKit, goes through the core computation layer and arrive in GuanceDB, which is a multil-model database that combines various database technologies. It consists of the query engine layer and the storage engine layer. By decoupling the query engine and the storage engine, it enables pluggable and interchangeable architecture. "),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"observability-platform-query-engine-storage-engine",src:a(353108).A,width:"2400",height:"1060"})),(0,n.yg)("p",null,"For time series data, they built Metric Store, which is a self-developed storage engine based on VictoriaMetrics. For logs, they integrate Elasticsearch and OpenSearch. GuanceDB is performant in this architecture, while Elasticsearch demonstrates room for improvement:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Data writing"),": Elasticsearch consumes a big share of CPU and memory resources. It is not only costly but also disruptive to query execution."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Schemaless support"),": Elasticsearch provides schemaless support by Dynamic Mapping, but that's not enough to handle large amounts of user-defined fields. In this case, it can lead to field type conflict and thus data loss."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Data aggregation"),": Large aggregation tasks often trigger a timeout error in Elasticsearch. ")),(0,n.yg)("p",null,"So this is where the upgrade happens. GuanceDB tried and replaced Elasticsearch with ",(0,n.yg)("a",{parentName:"p",href:"https://doris.apache.org/"},"Apache Doris"),". "),(0,n.yg)("h2",{id:"dql"},"DQL"),(0,n.yg)("p",null,"In the GuanceDB observability platform, almost all queries involve timestamp filtering. Meanwhile, most data aggregations need to be performed within specified time windows. Additionally, there is a need to perform rollups of time series data on individual sequences within a time window. Expressing these semantics using SQL often requires nested subqueries, resulting in complex and cumbersome statements."),(0,n.yg)("p",null,"That's why GuanceDB developed their own Data Query Language (DQL). With simplified syntax elements and computing functions optimized for observability use cases, this DQL can query metrics, logs, object data, and data from distributed tracing."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"observability-platform-query-engine-storage-engine-apache-doris",src:a(565785).A,width:"2400",height:"878"})),(0,n.yg)("p",null,"This is how DQL works together with Apache Doris. GuanceDB has found a way to make full use of the analytic power of Doris, while complementing its SQL functionalities."),(0,n.yg)("p",null,"As is shown below, Guance-Insert is the data writing component, while Guance-Select is the DQL query engine."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Guance-Insert"),": It allows data of different tenants to be accumulated in different batches, and strikes a balance between writing throughput and writing latency. When logs are generated in large volumes, it can maintain a low data latency of 2~3 seconds."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Guance-Select"),": For query execution, if the query SQL semantics or function is supported in Doris, Guance-Select will push the query down to the Doris Frontend for computation; if not, it will go for a fallback option: acquire columnar data in Arrow format via the Thrift RPC interface, and then finish computation in Guance-Select. The catch is that it cannot push the computation logic down to Doris Backend, so it can be slightly slower than executing queries in Doris Frontend.")),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"DQL-GranceDB-apache-doris",src:a(735765).A,width:"2400",height:"984"})),(0,n.yg)("h2",{id:"observations"},"Observations"),(0,n.yg)("h3",{id:"storage-cost-70-down-query-speed-300-up"},"Storage cost 70% down, query speed 300% up"),(0,n.yg)("p",null,"Previously, with Elasticsearch clusters, they used 20 cloud virtual machines (16vCPU 64GB) and had independent index writing services (that's another 20 cloud virtual machines). Now with Apache Doris, they only need 13 cloud virtual machines of the same configuration in total, representing ",(0,n.yg)("strong",{parentName:"p"},"a 67% cost reduction"),". This is contributed by three capabilities of Apache Doris:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"High writing throughput"),": Under a consistent writing throughput of 1GB/s, Doris maintains a CPU usage of less than 20%. That equals 2.6 cloud virtual machines. With low CPU usage, the system is more stable and better prepared for sudden writing peaks.")),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"writing-throughput-cpu-usage-apache-doris",src:a(192081).A,width:"1948",height:"886"})),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"High data compression ratio"),": Doris utilizes the ZSTD compression algorithm on top of columnar storage. It can realize a compression ratio of 8:1. Compared to 1.5:1 in Elasticsearch, Doris can reduce storage costs by around 80%."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("a",{parentName:"strong",href:"https://doris.apache.org/blog/Tiered-Storage-for-Hot-and-Cold-Data-What-Why-and-How"},"Tiered storage")),': Doris allows a more cost-effective way to store data: to put hot data in local disks and cold data object storage. Once the storage policy is set, Doris can automatically manage the "cooldown" process of hot data and move cold data to object storage. Such data lifecycle is transparent to the data application layer so it is user-friendly. Also, Doris speeds up cold data queries by local cache.')),(0,n.yg)("p",null,"With lower storage costs, Doris does not compromise query performance. It doubles the execution speed of queries that return a single row and those that return a result set. For aggregation queries without sampling, Doris runs at 4 times the speed of Elasticsearch."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"To sum up, Apache Doris achieves 2~4 times the query performance of Elasticsearch with only 1/3 of the storage cost it consumes.")),(0,n.yg)("h3",{id:"inverted-index-for-full-text-search"},"Inverted index for full-text search"),(0,n.yg)("p",null,"Inverted index is the magic potion for log analytics because it can considerably increase full-text search performance and reduce query overheads. "),(0,n.yg)("p",null,"It is especially useful in these scenarios:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Full-text search by ",(0,n.yg)("inlineCode",{parentName:"li"},"MATCH_ALL"),", ",(0,n.yg)("inlineCode",{parentName:"li"},"MATCH_ANY"),", and ",(0,n.yg)("inlineCode",{parentName:"li"},"MATCH_PHRASE"),". ",(0,n.yg)("inlineCode",{parentName:"li"},"MATCH_PHRASE")," in combination with inverted index is the alternative to the Elasticsearch full-text search functionality."),(0,n.yg)("li",{parentName:"ul"},"Equivalence queries (=, ! =, IN), range queries (>, >=, <, <=), and support for numerics, datetime, and strings.")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-SQL"},'CREATE TABLE httplog\n(\n  `ts` DATETIME,\n  `clientip` VARCHAR(20),\n  `request` TEXT,\n  INDEX idx_ip (`clientip`) USING INVERTED,\n  INDEX idx_req (`request`) USING INVERTED PROPERTIES("parser" = "english") \n)\nDUPLICATE KEY(`ts`)\n...\n\n-- Retrieve the latest 10 records of Client IP "8.8.8.8"\nSELECT * FROM httplog WHERE clientip = \'8.8.8.8\' ORDER BY ts DESC LIMIT 10;\n-- Retrieve the latest 10 records with "error" or "404" in the "request" field\nSELECT * FROM httplog WHERE request MATCH_ANY \'error 404\' ORDER BY ts DESC LIMIT 10;\n-- Retrieve the latest 10 records with "image" and "faq" in the "request" field\nSELECT * FROM httplog WHERE request MATCH_ALL \'image faq\' ORDER BY ts DESC LIMIT 10;\n-- Retrieve the latest 10 records with "query error" in the "request" field\nSELECT * FROM httplog WHERE request MATCH_PHRASE \'query error\' ORDER BY ts DESC LIMIT 10;\n')),(0,n.yg)("p",null,"As a powerful accelerator for full-text searches, inverted index in Doris is flexible because we witness the need for on-demand adjustments. In Elasticsearch, indexes are fixed upon creation, so there needs to be good planning of which fields need to be indexed, otherwise, any changes to the index will require a complete rewrite."),(0,n.yg)("p",null,"In contrast, Doris allows for dynamic indexing. You can add inverted index to a field during runtime and it will take effect immediately. You can also decide which data partitions to create indexes on."),(0,n.yg)("h3",{id:"a-new-data-type-for-dynamic-schema-change"},"A new data type for dynamic schema change"),(0,n.yg)("p",null,"By nature, an observability platform requires support for dynamic schema, because the data it collects is prone to changes. Every click by a user on the webpage might add a new metric to the database. "),(0,n.yg)("p",null,"Looking around the database landscape, you will find that static schema is the norm. Some databases take a step further. For example, Elasticsearch realizes dynamic schema by mapping. However, this functionality can be easily interrupted by field type conflicts or unexpired historical fields."),(0,n.yg)("p",null,"The Doris solution for dynamic schema is a newly-introduced data type: Variant, and GuanceDB is among the first to try it out. (It will officially be available in Apache Doris V2.1.)"),(0,n.yg)("p",null,"The Variant data type is the move of Doris to embrace semi-structured data analytics. It can solve a lot of the problems that often harass database users:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"JSON")," ",(0,n.yg)("strong",{parentName:"li"},"data storage"),": A Variant column in Doris can accommodate any legal JSON data, and can automatically recognize the subfields and data types."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Schema explosion due to too many fields"),": The frequently occurring subfields will be stored in a column-oriented manner to facilitate analysis, while the less frequently seen subfields will be merged into the same column to streamline the data schema."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Write failure due to data type conflicts"),": A Variant column allows different types of data in the same field, and applies different storage for different data types.")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Difference")," ",(0,n.yg)("strong",{parentName:"p"},"between Variant and Dynamic Mapping")),(0,n.yg)("p",null,"From a functional perspective, the biggest difference between Variant in Doris and Dynamic Mapping in Elasticsearch is that the scope of Dynamic Mapping extends throughout the entire lifecycle of the current table, while that of Variant can be limited to the current data partition. "),(0,n.yg)("p",null,"For example, if a user has changed the business logic and renamed some Variant fields today, the old field name will remain on the partitions before today, but will not appear on the new partitions since tomorrow. ",(0,n.yg)("strong",{parentName:"p"},"So there is a lower risk of data type conflict.")),(0,n.yg)("p",null,"In the case of field type conflicts in the same partition, the two fields will be changed to JSON type to avoid data error or data loss. For example, there are two ",(0,n.yg)("inlineCode",{parentName:"p"},"status")," fields in the user's business system: One is strings, and the other is numerics, so in queries, the user can decide whether to query the string field, or the nuemric field, or both. (E.g. If you specify ",(0,n.yg)("inlineCode",{parentName:"p"},'status = "ok"')," in the filters, the query will only be executed on the string field.)"),(0,n.yg)("p",null,"From the users' perspective, they can use the Variant type as simply as other data types. They can add or remove Variant fields based on their business needs, and no extra syntax or annotation is required."),(0,n.yg)("p",null,"Currently, the Variant type requires extra type assertion, we plan to automate this process in future versions of Doris. GuanceDB is one step faster in this aspect. They have realized auto type assertion for their DQL queries. In most cases, type assertion is based on the actual data type of Variant fields. In some rare cases when there is a type conflict, the Variant fields will be upgraded to JSON fields, and then type assertion will be based on the semantics of operators in DQL queries."),(0,n.yg)("h2",{id:"conclusion"},"Conclusion"),(0,n.yg)("p",null,"GuanceDB's transition from Elasticsearch to Apache Doris showcases a big stride in improving data processing speed and reducing costs. For these purposes, Apache Doris has optimized itself in the two major aspects of data processing: data integration and data analysis. It has expanded its schemaless support to flexibly accommodate more data types, introduced features like inverted index and tiered storage to enable faster and more cost-effective queries. Evolution is an ongoing process. Apache Doris has never stopped improving itself. We have a lot of new features under development and the Doris ",(0,n.yg)("a",{parentName:"p",href:"https://join.slack.com/t/apachedoriscommunity/shared_invite/zt-2gmq5o30h-455W226d79zP3L96ZhXIoQ"},"community")," embrace any input and feedback."),(0,n.yg)("p",null,"Check Apache Doris GitHub ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris"},"repo")),(0,n.yg)("p",null,"Find Apache Doris makers on ",(0,n.yg)("a",{parentName:"p",href:"https://join.slack.com/t/apachedoriscommunity/shared_invite/zt-2gmq5o30h-455W226d79zP3L96ZhXIoQ"},"Slack")))}u.isMDXComponent=!0},735765:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/DQL-GranceDB-apache-doris-8e46a296f0c966f5742651d64d85cd2a.png"},370173:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/observability-platform-architecture-e6d61cc145b4fcaa0e8f81f9a3453836.png"},565785:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/observability-platform-query-engine-storage-engine-apache-doris-b7491e169fe7abf5488259b2d973ed8b.png"},353108:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/observability-platform-query-engine-storage-engine-59ec8b8bcce25f1d2e401c8ef964a742.png"},192081:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/writing-throughput-cpu-usage-apache-doris-a629606fb8dc90bc682efb76c80f7cc9.png"}}]);