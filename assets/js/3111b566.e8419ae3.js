"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[7938],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>g});var r=a(296540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(a),h=n,g=p["".concat(l,".").concat(h)]||p[h]||u[h]||o;return a?r.createElement(g,i(i({ref:t},d),{},{components:a})):r.createElement(g,i({ref:t},d))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},856216:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=a(58168),n=(a(296540),a(15680));const o={title:"Cross-cluster replication for read-write separation: story of a grocery store brand",summary:"Cross-cluster replication (CCR) in Apache Doris is proven to be fast, stable, and easy to use. It secures a real-time data synchronization latency of 1 second.",date:"2024-04-25",author:"Apache Doris",tags:["Best Practice"],image:"/images/ccr-for-read-write-separation.jpg"},i=void 0,s={permalink:"/blog/cross-cluster-replication-for-read-write",source:"@site/blog/cross-cluster-replication-for-read-write.md",title:"Cross-cluster replication for read-write separation: story of a grocery store brand",description:"\x3c!--",date:"2024-04-25T00:00:00.000Z",formattedDate:"April 25, 2024",tags:[{label:"Best Practice",permalink:"/blog/tags/best-practice"}],hasTruncateMarker:!1,authors:[{name:"Apache Doris"}],frontMatter:{title:"Cross-cluster replication for read-write separation: story of a grocery store brand",summary:"Cross-cluster replication (CCR) in Apache Doris is proven to be fast, stable, and easy to use. It secures a real-time data synchronization latency of 1 second.",date:"2024-04-25",author:"Apache Doris",tags:["Best Practice"],image:"/images/ccr-for-read-write-separation.jpg"},prevItem:{title:"From Presto, Trino, ClickHouse, and Hive to Apache Doris: SQL convertor for easy migration",permalink:"/blog/from-presto-trino-clickhouse-and-hive-to-apache-doris-sql-convertor-for-easy-migration"},nextItem:{title:"Apache Doris version 2.0.9 has been released",permalink:"/blog/release-note-2.0.9"}},l={authorsImageUrls:[void 0]},c=[{value:"Why they need CCR",id:"why-they-need-ccr",level:2},{value:"Before CCR",id:"before-ccr",level:2},{value:"CCR in Apache Doris",id:"ccr-in-apache-doris",level:2},{value:"Conclusion",id:"conclusion",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...o}=e;return(0,n.yg)(p,(0,r.A)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"This is about how a grocery store brand leverages the ",(0,n.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/2.0/admin-manual/data-admin/ccr"},"Cross-Cluster Replication (CCR)")," capability of Apache Doris to separate their data reading and writing workloads. In this case, where the freshness of groceries is guaranteed by the freshness of data, they use Apache Doris as their data warehouse to monitor and analyze their procurement, sale, and stock in real time for all their stores and supply chains. "),(0,n.yg)("h2",{id:"why-they-need-ccr"},"Why they need CCR"),(0,n.yg)("p",null,"A major part of the user's data warehouse (including the ODS, DWD, DWS, and ADS layers) is built within Apache Doris, which employs a micro-batch scheduling mechanism to coordinate data across the data warehouse layers. However, this is pressured by the burgeoning business of the grocery store brand. The data size they have to receive, store, and analyze is getting larger and larger. That means their data warehouse has to handle bigger data writing batches and more frequent data queries. However, task scheduling during query execution might lead to resource preemption, so any resource shortage can easily compromise performance or even cause task failure or system disruption."),(0,n.yg)("p",null," Naturally, the user thought of ",(0,n.yg)("strong",{parentName:"p"},"separating the reading and writing workloads.")," Specifically, they want to replicate data from the ADS layer (which is cleaned, transformed, aggregated, and ready to be queried) to a backup cluster dedicated to query services. ",(0,n.yg)("strong",{parentName:"p"},"This is implemented by the CCR in Apache Doris.")," It prevents abnormal queries from interrupting data writing and ensures cluster stability.   "),(0,n.yg)("h2",{id:"before-ccr"},"Before CCR"),(0,n.yg)("p",null,"Before CCR was available, they innovatively adopted the ",(0,n.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/2.0/lakehouse/lakehouse-overview#multi-catalog"},"Multi-Catalog")," feature of Doris for the same purpose. Multi-Catalog allows users to connect Doris to various data sources conveniently. It is actually designed for federated querying, but the user drew inspiration from it. They wrote a script and tried to pull incremental data via Catalog. Their data synchronization pipeline is as follows:"),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Before CCR",src:a(326035).A,width:"1280",height:"1003"})),(0,n.yg)("p",null,"They loaded data from the source cluster to the target cluster by regular scheduling tasks. To identify incremental data, they added a ",(0,n.yg)("inlineCode",{parentName:"p"},"last_update_time")," field to the tables. There were two downsides to this. Firstly, the data freshness of the target cluster was reliant on and hindered by the scheduling tasks. Secondly, for incremental data ingestion, in order to identify incremental data, the import SQL statement for every table has to include the logic to check the ",(0,n.yg)("inlineCode",{parentName:"p"},"last_update_time")," field, otherwise the system just deletes and re-imports the entire table. Such requirement increases development complexity and data error rate. "),(0,n.yg)("h2",{id:"ccr-in-apache-doris"},"CCR in Apache Doris"),(0,n.yg)("p",null,"Just when they were looking for a better solution, Apache Doris released CCR in version 2.0. Compared to the alternatives they've tried, CCR in Apache Doris is:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Lightweight in design"),": The data synchronization tasks consume very few machine resources. They run smoothly without reducing the overall performance of Apache Doris.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Easy to use"),": It can be configured by one simple ",(0,n.yg)("inlineCode",{parentName:"p"},"POST")," request.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Unlimited in migration"),": Users can raise the upper limit of the data migration capabilities in CCR by optimizing their cluster configuration. ")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Consistent in data"),": The DDL statements executed in the source cluster can be automatically synchronized into the target cluster, ensuring data consistency.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Flexible in synchronization"),": It is able to perform both full data synchronization and incremental data synchronization."))),(0,n.yg)("p",null,"To start CCR in Doris simply requires two steps. Step one is to enable binlogs in both the source cluster and the target cluster. Step two is to send the name of the database or table to be replicated. Then the system will start synchronizing full or incremental data. The detailed workflow is as follows: "),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"CCR in Apache Doris",src:a(248490).A,width:"1280",height:"335"})),(0,n.yg)("p",null,"In the grocery store brand's case, they need to synchronize a few tables from the source cluster to the target cluster, each table having an incremental data size of about 50 million rows. After a month's trial run, the Doris CCR mechanism is proven to be stable and performant:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Higher stability and data accuracy"),": No replication failure has ever occurred during the trial period. Every data row is transferred and landed in the target cluster accurately. ")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Streamlined workflows:")),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Before CCR"),": The user had to write SQL for each table and write data via Catalog; For tables without a ",(0,n.yg)("inlineCode",{parentName:"li"},"last_update_time")," field, incremental data synchronization can only be implemented by full-table deletion and re-import.")),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"Insert into catalog1.db.destination_table_1 select * from catalog1.db.source_table1 where time > xxx\nInsert into catalog1.db.destination_table_2 select * from catalog1.db.source_table2 where time > xxx\n\u2026\nInsert into catalog1.db.destination_table_x select * from catalog1.db.source_table_x\n")),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"After CCR"),": It only requires one ",(0,n.yg)("inlineCode",{parentName:"li"},"POST")," request to synchronize an entire database.")),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'curl -X POST -H "Content-Type: application/json" -d \'{\n    "name": "ccr_test",\n    "src": {\n    "host": "localhost",\n    "port": "9030",\n    "thrift_port": "9020",\n    "user": "root",\n    "password": "",\n    "database": "demo",\n    "table": ""\n    },\n    "dest": {\n    "host": "localhost",\n    "port": "9030",\n    "thrift_port": "9020",\n    "user": "root",\n    "password": "",\n    "database": "ccrt",\n    "table": ""\n    }\n}\' http://127.0.0.1:9190/create_ccr\n'))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Faster data loading"),": With CCR, it only takes ",(0,n.yg)("strong",{parentName:"p"},"3~4 seconds")," to ingest a day's incremental data, as compared to more than 30 seconds with the Catalog method. As for real-time synchronization, CCR can finish data ingestion in 1 second, without reliance on manual updates or regular scheduling."))),(0,n.yg)("h2",{id:"conclusion"},"Conclusion"),(0,n.yg)("p",null,"Using CCR in Apache Doris, the grocery store brand separates reading and writing workloads into different clusters and thus improves overall system stability. This solution delivers a real-time data synchronization latency of about 1 second. To further ensure normal functioning, it has a real-time monitoring and alerting mechanism so any issue will be notified and attended to instantly, and a contingency plan to guarantee uninterrupted query services. It also supports partition-based data synchronization (e.g. ",(0,n.yg)("inlineCode",{parentName:"p"},"ALTER TABLE tbl1 REPLACE PARTITION"),"). With demonstrated effectiveness of CCR, they are planning to replicate more of their data assets for efficient and secure data usage."),(0,n.yg)("p",null,"CCR is also applicable when you need to build multiple data centers or derive a test dataset from your production environment. For further guidance on CCR, join the ",(0,n.yg)("a",{parentName:"p",href:"https://join.slack.com/t/apachedoriscommunity/shared_invite/zt-2gmq5o30h-455W226d79zP3L96ZhXIoQ"},"Apache Doris community"),"."))}u.isMDXComponent=!0},326035:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/before-ccr-079a13cf3fe218976cce0015a6c6c752.jpeg"},248490:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/ccr-in-apache-doris-31b9554f59ba15f637a5c54778915973.jpeg"}}]);