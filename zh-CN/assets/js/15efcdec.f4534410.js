"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[68985],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>g});var o=a(296540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),d=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),p=d(a),u=n,g=p["".concat(s,".").concat(u)]||p[u]||h[u]||i;return a?o.createElement(g,l(l({ref:t},c),{},{components:a})):o.createElement(g,l({ref:t},c))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[p]="string"==typeof e?e:n,l[1]=r;for(var d=2;d<i;d++)l[d]=a[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},469581:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var o=a(58168),n=(a(296540),a(15680));const i={title:"Tiered storage for hot and cold data: what, why, and how?",summary:"Hot data is the frequently accessed data, while cold data is the one you seldom visit but still need. Separating them is for higher efficiency in computation and storage.",date:"2023-06-23",author:"Apache Doris",tags:["Tech Sharing"],image:"/images/tiered-storage-for-hot-and-cold-cata.jpg"},l=void 0,r={permalink:"/zh-CN/blog/Tiered-Storage-for-Hot-and-Cold-Data-What-Why-and-How",source:"@site/blog/Tiered-Storage-for-Hot-and-Cold-Data-What-Why-and-How.md",title:"Tiered storage for hot and cold data: what, why, and how?",description:"\x3c!--",date:"2023-06-23T00:00:00.000Z",formattedDate:"2023\u5e746\u670823\u65e5",tags:[{label:"Tech Sharing",permalink:"/zh-CN/blog/tags/tech-sharing"}],hasTruncateMarker:!1,authors:[{name:"Apache Doris"}],frontMatter:{title:"Tiered storage for hot and cold data: what, why, and how?",summary:"Hot data is the frequently accessed data, while cold data is the one you seldom visit but still need. Separating them is for higher efficiency in computation and storage.",date:"2023-06-23",author:"Apache Doris",tags:["Tech Sharing"],image:"/images/tiered-storage-for-hot-and-cold-cata.jpg"},prevItem:{title:"Replacing Apache Hive, Elasticsearch and PostgreSQL with Apache Doris",permalink:"/zh-CN/blog/Replacing-Apache-Hive-Elasticsearch-and-PostgreSQL-with-Apache-Doris"},nextItem:{title:"Apache Doris announced the official release of version 1.2.5",permalink:"/zh-CN/blog/release-note-1.2.5"}},s={authorsImageUrls:[void 0]},d=[{value:"What is Hot/Cold Data?",id:"what-is-hotcold-data",level:2},{value:"Why Separate Hot and Cold Data?",id:"why-separate-hot-and-cold-data",level:2},{value:"How Is Tiered Storage Implemented?",id:"how-is-tiered-storage-implemented",level:2},{value:"Quick Reading of Cold Data",id:"quick-reading-of-cold-data",level:3},{value:"High Availability of Data",id:"high-availability-of-data",level:3},{value:"Reduced I/O and CPU Overhead",id:"reduced-io-and-cpu-overhead",level:3},{value:"Tutorial",id:"tutorial",level:2},{value:"1. Create Resource",id:"1-create-resource",level:3},{value:"2. Create Storage Policy",id:"2-create-storage-policy",level:3},{value:"3. Specify Storage Policy for a Table/Partition",id:"3-specify-storage-policy-for-a-tablepartition",level:3},{value:"4. View Tablet Details",id:"4-view-tablet-details",level:3},{value:"5. Execute Queries",id:"5-execute-queries",level:3},{value:"6. Update Cold Data",id:"6-update-cold-data",level:3}],c={toc:d},p="wrapper";function h(e){let{components:t,...i}=e;return(0,n.yg)(p,(0,o.A)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Apparently tiered storage is hot now. But first of all:"),(0,n.yg)("h2",{id:"what-is-hotcold-data"},"What is Hot/Cold Data?"),(0,n.yg)("p",null,'In simple terms, hot data is the frequently accessed data, while cold data is the one you seldom visit but still need. Normally in data analytics, data is "hot" when it is new, and gets "colder" and "colder" as time goes by. '),(0,n.yg)("p",null,'For example, orders of the past six months are "hot" and logs from years ago are "cold". But no matter how cold the logs are, you still need them to be somewhere you can find.  '),(0,n.yg)("h2",{id:"why-separate-hot-and-cold-data"},"Why Separate Hot and Cold Data?"),(0,n.yg)("p",null,"Tiered storage is an idea often seen in real life: You put your favorite book on your bedside table, your Christmas ornament in the attic, and your childhood art project in the garage or a cheap self-storage space on the other side of town. The purpose is a tidy and efficient life."),(0,n.yg)("p",null,"Similarly, companies separate hot and cold data for more efficient computation and more cost-effective storage, because storage that allows quick read/write is always expensive, like SSD. On the other hand, HDD is cheaper but slower. So it is more sensible to put hot data on SSD and cold data on HDD. If you are looking for an even lower-cost option, you can go for object storage."),(0,n.yg)("p",null,"In data analytics, tiered storage is implemented by a tiered storage mechanism in the database. For example, Apache Doris supports three-tiered storage: SSD, HDD, and object storage. For newly ingested data, after a specified cooldown period, it will turn from hot data into cold data and be moved to object storage. In addition, object storage only preserves one copy of data, which further cuts down storage costs and the relevant computation/network overheads."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"tiered-storage",src:a(246444).A,width:"1528",height:"722"})),(0,n.yg)("p",null,"How much can you save by tiered storage? Here is some math."),(0,n.yg)("p",null,"In public cloud services, cloud disks generally cost 5~10 times as much as object storage. If 80% of your data asset is cold data and you put it in object storage instead of cloud disks, you can expect a cost reduction of around 70%."),(0,n.yg)("p",null,'Let the percentage of cold data be "rate", the price of object storage be "OS", and the price of cloud disk be "CloudDisk", this is how much you can save by tiered storage instead of putting all your data on cloud disks: '),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"cost-calculation-of-tiered-storage",src:a(114919).A,width:"1532",height:"226"})),(0,n.yg)("p",null,"Now let's put real-world numbers in this formula: "),(0,n.yg)("p",null,"AWS pricing, US East (Ohio):"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"S3 Standard Storage"),": 23 USD per TB per month"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Throughput Optimized HDD (st 1)"),": 102 USD per TB per month"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"General Purpose SSD (gp2)"),": 158 USD per TB per month")),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"cost-reduction-by-tiered-storage",src:a(727230).A,width:"1280",height:"590"})),(0,n.yg)("h2",{id:"how-is-tiered-storage-implemented"},"How Is Tiered Storage Implemented?"),(0,n.yg)("p",null,"Till now, hot-cold separation sounds nice, but the biggest concern is: how can we implement it without compromising query performance? This can be broken down to three questions:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"How to enable quick reading of cold data?"),(0,n.yg)("li",{parentName:"ul"},"How to ensure high availability of data?"),(0,n.yg)("li",{parentName:"ul"},"How to reduce I/O and CPU overheads?")),(0,n.yg)("p",null,"In what follows, I will show you how Apache Doris addresses them one by one."),(0,n.yg)("h3",{id:"quick-reading-of-cold-data"},"Quick Reading of Cold Data"),(0,n.yg)("p",null,"Accessing cold data from object storage will indeed be slow. One solution is to cache cold data in local disks for use in queries. In Apache Doris 2.0, when a query requests cold data, only the first-time access will entail a full network I/O operation from object storage. Subsequent queries will be able to read data directly from local cache."),(0,n.yg)("p",null,'The granularity of caching matters, too. A coarse granularity might lead to a waste of cache space, but a fine granularity could be the reason for low I/O efficiency. Apache Doris bases its caching on data blocks. It downloads cold data blocks from object storage onto local Block Cache. This is the "pre-heating" process. With cold data fully pre-heated, queries on tables with tiered storage will be basically as fast as those on tablets without. We drew this conclusion from test results on Apache Doris:'),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"query-performance-with-tiered-storage",src:a(563345).A,width:"1280",height:"854"})),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"*Test Data**"),": SSB SF100 dataset*"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"*Configuration**"),": 3 \xd7 16C 64G, a cluster of 1 frontend and 3 backends* ")),(0,n.yg)("p",null,"P.S. Block Cache adopts the LRU algorithm, so the more frequently accessed data will stay in Block Cache for longer."),(0,n.yg)("h3",{id:"high-availability-of-data"},"High Availability of Data"),(0,n.yg)("p",null,'In object storage, only one copy of cold data is preserved. Within Apache Doris, hot data and metadata are put in the backend nodes, and there are multiple replicas of them across different backend nodes in order to ensure high data availability. These replicas are called "local replicas". The metadata of cold data is synchronized to all local replicas, so that Doris can ensure high availability of cold data without using too much storage space.'),(0,n.yg)("p",null,"Implementation-wise, the Doris frontend picks a local replica as the Leader. Updates to the Leader will be synchronized to all other local replicas via a regular report mechanism. Also, as the Leader uploads data to object storage, the relevant metadata will be updated to other local replicas, too."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"data-availability-with-tiered-storage",src:a(323400).A,width:"1280",height:"1041"})),(0,n.yg)("h3",{id:"reduced-io-and-cpu-overhead"},"Reduced I/O and CPU Overhead"),(0,n.yg)("p",null,"This is realized by cold data ",(0,n.yg)("a",{parentName:"p",href:"https://medium.com/gitconnected/understanding-data-compaction-in-3-minutes-d2b5a1f7446f"},"compaction"),". Some scenarios require large-scale update of historical data. In this case, part of the cold data in object storage should be deleted. Apache Doris 2.0 supports cold data compaction, which ensures that the updated cold data will be reorganized and compacted, so that it will take up storage space."),(0,n.yg)("p",null,"A thread in Doris backend will regularly pick N tablets from the cold data and start compaction. Every tablet has a CooldownReplica and only the CooldownReplica will execute cold data compaction for the tablet. Every time 5MB of data is compacted, it will be uploaded to object storage to clear up space locally. Once the compaction is done, the CooldownReplica will update the new metadata to object storage. Other replicas only need to synchronize the metadata from object storage. This is how I/O and CPU overheads are reduced."),(0,n.yg)("h2",{id:"tutorial"},"Tutorial"),(0,n.yg)("p",null,"Separating tiered storage in storage is a huge cost saver and there have been ways to ensure the same fast query performance. Executing hot-cold data separation is a simple 6-step process, so you can find out how it works yourself:"),(0,n.yg)("p",null,"To begin with, you need ",(0,n.yg)("strong",{parentName:"p"},"an object storage bucket")," and the relevant ",(0,n.yg)("strong",{parentName:"p"},"Access Key (AK)")," and ",(0,n.yg)("strong",{parentName:"p"},"Secret Access Key (SK)"),"."),(0,n.yg)("p",null,"Then you can start cold/hot data separation by following these six steps."),(0,n.yg)("h3",{id:"1-create-resource"},"1. Create Resource"),(0,n.yg)("p",null,"You can create a resource using the object storage bucket with the AK and  SK. Apache Doris supports object storage on various cloud service  providers including AWS, Azure, and Alibaba Cloud."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},'CREATE RESOURCE IF NOT EXISTS "${resource_name}"\n        PROPERTIES(\n            "type"="s3",\n            "s3.endpoint" = "${S3Endpoint}",\n            "s3.region" = "${S3Region}",\n            "s3.root.path" = "path/to/root",\n            "s3.access_key" = "${S3AK}",\n            "s3.secret_key" = "${S3SK}",\n            "s3.connection.maximum" = "50",\n            "s3.connection.request.timeout" = "3000",\n            "s3.connection.timeout" = "1000",\n            "s3.bucket" = "${S3BucketName}"\n        );\n')),(0,n.yg)("h3",{id:"2-create-storage-policy"},"2. Create Storage Policy"),(0,n.yg)("p",null,"With the Storage Policy, you can specify the cooling-down period of data  (including absolute cooling-down period and relative cooling-down  period)."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},'CREATE STORAGE POLICY testPolicy\nPROPERTIES(\n  "storage_resource" = "remote_s3",\n  "cooldown_ttl" = "1d"\n);\n')),(0,n.yg)("p",null,"In the above snippet, the Storage Policy is named ",(0,n.yg)("inlineCode",{parentName:"p"},"testPolicy"),", and data will start to cool down one day after it is ingested. The cold data will be moved under the ",(0,n.yg)("inlineCode",{parentName:"p"},"root path")," of the object storage ",(0,n.yg)("inlineCode",{parentName:"p"},"remote_s3"),". Apart from setting the TTL, you can also specify the timepoint when the cooling down starts."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},'CREATE STORAGE POLICY testPolicyForTTlDatatime\nPROPERTIES(\n  "storage_resource" = "remote_s3",\n  "cooldown_datetime" = "2023-06-07 21:00:00"\n);\n')),(0,n.yg)("h3",{id:"3-specify-storage-policy-for-a-tablepartition"},"3. Specify Storage Policy for a Table/Partition"),(0,n.yg)("p",null,"With an established Resource and a Storage Policy, you can set a Storage Policy for a data table or a specific data partition."),(0,n.yg)("p",null,"The following snippet uses the lineitem table in the TPC-H dataset as an  example. To set a Storage Policy for the whole table, specify the  PROPERTIES as follows:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},'CREATE TABLE IF NOT EXISTS lineitem1 (\n            L_ORDERKEY    INTEGER NOT NULL,\n            L_PARTKEY     INTEGER NOT NULL,\n            L_SUPPKEY     INTEGER NOT NULL,\n            L_LINENUMBER  INTEGER NOT NULL,\n            L_QUANTITY    DECIMAL(15,2) NOT NULL,\n            L_EXTENDEDPRICE  DECIMAL(15,2) NOT NULL,\n            L_DISCOUNT    DECIMAL(15,2) NOT NULL,\n            L_TAX         DECIMAL(15,2) NOT NULL,\n            L_RETURNFLAG  CHAR(1) NOT NULL,\n            L_LINESTATUS  CHAR(1) NOT NULL,\n            L_SHIPDATE    DATEV2 NOT NULL,\n            L_COMMITDATE  DATEV2 NOT NULL,\n            L_RECEIPTDATE DATEV2 NOT NULL,\n            L_SHIPINSTRUCT CHAR(25) NOT NULL,\n            L_SHIPMODE     CHAR(10) NOT NULL,\n            L_COMMENT      VARCHAR(44) NOT NULL\n            )\n            DUPLICATE KEY(L_ORDERKEY, L_PARTKEY, L_SUPPKEY, L_LINENUMBER)\n            PARTITION BY RANGE(`L_SHIPDATE`)\n            (\n                PARTITION `p202301` VALUES LESS THAN ("2017-02-01"),\n                PARTITION `p202302` VALUES LESS THAN ("2017-03-01")\n            )\n            DISTRIBUTED BY HASH(L_ORDERKEY) BUCKETS 3\n            PROPERTIES (\n            "replication_num" = "3",\n            "storage_policy" = "${policy_name}"\n            )\n')),(0,n.yg)("p",null,"You can check the Storage Policy of a tablet via the ",(0,n.yg)("inlineCode",{parentName:"p"},"show tablets")," command. If the ",(0,n.yg)("inlineCode",{parentName:"p"},"CooldownReplicaId")," is anything rather than ",(0,n.yg)("inlineCode",{parentName:"p"},"-1")," and the ",(0,n.yg)("inlineCode",{parentName:"p"},"CooldownMetaId")," is not null, that means the current tablet has been specified with a Storage Policy."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"               TabletId: 3674797\n              ReplicaId: 3674799\n              BackendId: 10162\n             SchemaHash: 513232100\n                Version: 1\n      LstSuccessVersion: 1\n       LstFailedVersion: -1\n          LstFailedTime: NULL\n          LocalDataSize: 0\n         RemoteDataSize: 0\n               RowCount: 0\n                  State: NORMAL\nLstConsistencyCheckTime: NULL\n           CheckVersion: -1\n           VersionCount: 1\n              QueryHits: 0\n               PathHash: 8030511811695924097\n                MetaUrl: http://172.16.0.16:6781/api/meta/header/3674797\n       CompactionStatus: http://172.16.0.16:6781/api/compaction/show?tablet_id=3674797\n      CooldownReplicaId: 3674799\n         CooldownMetaId: TUniqueId(hi:-8987737979209762207, lo:-2847426088899160152)\n")),(0,n.yg)("p",null,"To set a Storage Policy for a specific partition, add the policy name to the partition PROPERTIES as follows:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},'CREATE TABLE IF NOT EXISTS lineitem1 (\n            L_ORDERKEY    INTEGER NOT NULL,\n            L_PARTKEY     INTEGER NOT NULL,\n            L_SUPPKEY     INTEGER NOT NULL,\n            L_LINENUMBER  INTEGER NOT NULL,\n            L_QUANTITY    DECIMAL(15,2) NOT NULL,\n            L_EXTENDEDPRICE  DECIMAL(15,2) NOT NULL,\n            L_DISCOUNT    DECIMAL(15,2) NOT NULL,\n            L_TAX         DECIMAL(15,2) NOT NULL,\n            L_RETURNFLAG  CHAR(1) NOT NULL,\n            L_LINESTATUS  CHAR(1) NOT NULL,\n            L_SHIPDATE    DATEV2 NOT NULL,\n            L_COMMITDATE  DATEV2 NOT NULL,\n            L_RECEIPTDATE DATEV2 NOT NULL,\n            L_SHIPINSTRUCT CHAR(25) NOT NULL,\n            L_SHIPMODE     CHAR(10) NOT NULL,\n            L_COMMENT      VARCHAR(44) NOT NULL\n            )\n            DUPLICATE KEY(L_ORDERKEY, L_PARTKEY, L_SUPPKEY, L_LINENUMBER)\n            PARTITION BY RANGE(`L_SHIPDATE`)\n            (\n                PARTITION `p202301` VALUES LESS THAN ("2017-02-01") ("storage_policy" = "${policy_name}"),\n                PARTITION `p202302` VALUES LESS THAN ("2017-03-01")\n            )\n            DISTRIBUTED BY HASH(L_ORDERKEY) BUCKETS 3\n            PROPERTIES (\n            "replication_num" = "3"\n            )\n')),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"This is how you can confirm that only the target partition is set with a Storage Policy:")),(0,n.yg)("p",null,"In the above example, Table Lineitem1 has 2 partitions, each partition has 3 buckets, and ",(0,n.yg)("inlineCode",{parentName:"p"},"replication_num"),' is set to "3". That means there are 2',(0,n.yg)("em",{parentName:"p"},"3 = 6 tablets and 6"),"3 = 18 replicas in total."),(0,n.yg)("p",null,"Now, if you check the replica information of all tablets via the ",(0,n.yg)("inlineCode",{parentName:"p"},"show tablets")," command, you will see that only the replicas of tablets of the target  partion have a CooldownReplicaId and a CooldownMetaId. (For a clear  comparison, you can check replica information of a specific partition  via the ",(0,n.yg)("inlineCode",{parentName:"p"},"ADMIN SHOW REPLICA STATUS FROM TABLE PARTITION(PARTITION)")," command.)"),(0,n.yg)("p",null,"For instance, Tablet 3691990 belongs to Partition p202301, which is the  target partition, so the 3 replicas of this tablet have a  CooldownReplicaId and a CooldownMetaId:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"*****************************************************************\n               TabletId: 3691990\n              ReplicaId: 3691991\n      CooldownReplicaId: 3691993\n         CooldownMetaId: TUniqueId(hi:-7401335798601697108, lo:3253711199097733258)\n*****************************************************************\n               TabletId: 3691990\n              ReplicaId: 3691992\n      CooldownReplicaId: 3691993\n         CooldownMetaId: TUniqueId(hi:-7401335798601697108, lo:3253711199097733258)\n*****************************************************************\n               TabletId: 3691990\n              ReplicaId: 3691993\n      CooldownReplicaId: 3691993\n         CooldownMetaId: TUniqueId(hi:-7401335798601697108, lo:3253711199097733258)\n")),(0,n.yg)("p",null,"Also, the above snippet means that all these 3 replicas have been specified  with the same CooldownReplica: 3691993, so only the data in Replica  3691993 will be stored in the Resource."),(0,n.yg)("h3",{id:"4-view-tablet-details"},"4. View Tablet Details"),(0,n.yg)("p",null,"You can view the detailed information of Table Lineitem1 via a ",(0,n.yg)("inlineCode",{parentName:"p"},"show tablets from lineitem1")," command. Among all the properties, ",(0,n.yg)("inlineCode",{parentName:"p"},"LocalDataSize")," represents the size of locally stored data and ",(0,n.yg)("inlineCode",{parentName:"p"},"RemoteDataSize")," represents the size of cold data in object storage."),(0,n.yg)("p",null,"For example, when the data is newly ingested into the Doris backends, you can see that all data is stored locally."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"*************************** 1. row ***************************\n               TabletId: 2749703\n              ReplicaId: 2749704\n              BackendId: 10090\n             SchemaHash: 1159194262\n                Version: 3\n      LstSuccessVersion: 3\n       LstFailedVersion: -1\n          LstFailedTime: NULL\n          LocalDataSize: 73001235\n         RemoteDataSize: 0\n               RowCount: 1996567\n                  State: NORMAL\nLstConsistencyCheckTime: NULL\n           CheckVersion: -1\n           VersionCount: 3\n              QueryHits: 0\n               PathHash: -8567514893400420464\n                MetaUrl: http://172.16.0.8:6781/api/meta/header/2749703\n       CompactionStatus: http://172.16.0.8:6781/api/compaction/show?tablet_id=2749703\n      CooldownReplicaId: 2749704\n         CooldownMetaId:\n")),(0,n.yg)("p",null,"When the data has cooled down, you will see that the data has been moved to remote object storage."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"*************************** 1. row ***************************\n               TabletId: 2749703\n              ReplicaId: 2749704\n              BackendId: 10090\n             SchemaHash: 1159194262\n                Version: 3\n      LstSuccessVersion: 3\n       LstFailedVersion: -1\n          LstFailedTime: NULL\n          LocalDataSize: 0\n         RemoteDataSize: 73001235\n               RowCount: 1996567\n                  State: NORMAL\nLstConsistencyCheckTime: NULL\n           CheckVersion: -1\n           VersionCount: 3\n              QueryHits: 0\n               PathHash: -8567514893400420464\n                MetaUrl: http://172.16.0.8:6781/api/meta/header/2749703\n       CompactionStatus: http://172.16.0.8:6781/api/compaction/show?tablet_id=2749703\n      CooldownReplicaId: 2749704\n         CooldownMetaId: TUniqueId(hi:-8697097432131255833, lo:9213158865768502666)\n")),(0,n.yg)("p",null,"You can also check your cold data from the object storage side by finding  the data files under the path specified in the Storage Policy."),(0,n.yg)("p",null,"Data in object storage only has a single copy."),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://miro.medium.com/v2/resize:fit:1400/1*jao2TrbhDI2h6S04W0x95Q.png",alt:"img"})),(0,n.yg)("h3",{id:"5-execute-queries"},"5. Execute Queries"),(0,n.yg)("p",null,"When all data in Table Lineitem1 has been moved to object storage and a  query requests data from Table Lineitem1, Apache Doris will follow the  root path specified in the Storage Policy of the relevant data  partition, and download the requested data for local computation."),(0,n.yg)("p",null,"Apache Doris 2.0 has been optimized for cold data queries. Only the first-time access to the cold data will entail a full network I/O operation from  object storage. After that, the downloaded data will be put in cache to  be available for subsequent queries, so as to improve query speed."),(0,n.yg)("h3",{id:"6-update-cold-data"},"6. Update Cold Data"),(0,n.yg)("p",null,"In Apache Doris, each data ingestion leads to the generation of a new  Rowset, so the update of historical data will be put in a Rowset that is separated from those of newly loaded data. That\u2019s how it makes sure the updating of cold data does not interfere with the ingestion of hot  data. Once the rowsets cool down, they will be moved to S3 and deleted  locally, and the updated historical data will go to the partition where  it belongs."),(0,n.yg)("p",null,"If you any questions, come find Apache Doris developers on ",(0,n.yg)("a",{parentName:"p",href:"https://join.slack.com/t/apachedoriscommunity/shared_invite/zt-2gmq5o30h-455W226d79zP3L96ZhXIoQ"},"Slack"),". We will be happy to provide targeted support."))}h.isMDXComponent=!0},246444:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/HCDS_1-4bae127a675df686b358d72a242fc193.png"},114919:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/HCDS_2-c03620863295956acc180ad3a590bcf6.png"},727230:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/HCDS_3-631232bc5ad459445ffd5c51313a23d2.png"},563345:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/HCDS_4-87151098d2bd6aa0e665ba9766dc8e19.png"},323400:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/HCDS_5-91d506621f633b43cc8fdc41fb7c9aaa.png"}}]);