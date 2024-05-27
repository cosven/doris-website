"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[4149],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>g});var n=a(296540);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(a),p=i,g=d["".concat(l,".").concat(p)]||d[p]||h[p]||r;return a?n.createElement(g,o(o({ref:t},u),{},{components:a})):n.createElement(g,o({ref:t},u))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},473798:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(58168),i=(a(296540),a(15680));const r={title:"Listen to that poor BI engineer: we need fast joins",summary:"JOIN queries are always a hassle, but yes, you can expect fast joins from a relational database. Read this and learn how.",date:"2023-07-10",author:"Baoming Zhang",tags:["Best Practice"],image:"/images/listen-to-that-poor-bi-engineer.png"},o=void 0,s={permalink:"/zh-CN/blog/Listen-to-That-Poor-BI-Engineer-We-Need-Fast-Joins",source:"@site/blog/Listen-to-That-Poor-BI-Engineer-We-Need-Fast-Joins.md",title:"Listen to that poor BI engineer: we need fast joins",description:"\x3c!--",date:"2023-07-10T00:00:00.000Z",formattedDate:"2023\u5e747\u670810\u65e5",tags:[{label:"Best Practice",permalink:"/zh-CN/blog/tags/best-practice"}],hasTruncateMarker:!1,authors:[{name:"Baoming Zhang"}],frontMatter:{title:"Listen to that poor BI engineer: we need fast joins",summary:"JOIN queries are always a hassle, but yes, you can expect fast joins from a relational database. Read this and learn how.",date:"2023-07-10",author:"Baoming Zhang",tags:["Best Practice"],image:"/images/listen-to-that-poor-bi-engineer.png"},prevItem:{title:"Database dissection: how fast data queries are implemented",permalink:"/zh-CN/blog/Database-Dissection-How-Fast-Data-Queries-Are-Implemented"},nextItem:{title:"Replacing Apache Hive, Elasticsearch and PostgreSQL with Apache Doris",permalink:"/zh-CN/blog/Replacing-Apache-Hive-Elasticsearch-and-PostgreSQL-with-Apache-Doris"}},l={authorsImageUrls:[void 0]},c=[{value:"Why JOIN Query Matters",id:"why-join-query-matters",level:2},{value:"Welcome to JOIN Hell",id:"welcome-to-join-hell",level:2},{value:"Architecture that Supports Our BI Services",id:"architecture-that-supports-our-bi-services",level:2},{value:"No Longer Stalled by Privileged Access Queries",id:"no-longer-stalled-by-privileged-access-queries",level:2},{value:"To All BI Engineers",id:"to-all-bi-engineers",level:2}],u={toc:c},d="wrapper";function h(e){let{components:t,...r}=e;return(0,i.yg)(d,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Business intelligence (BI) tool is often the last stop of a data processing pipeline. It is where data is visualized for analysts who then extract insights from it. From the standpoint of a SaaS BI provider, what are we looking for in a database? In my job, we are in urgent need of support for fast join queries."),(0,i.yg)("h2",{id:"why-join-query-matters"},"Why JOIN Query Matters"),(0,i.yg)("p",null,"I work as an engineer that supports a human resource management system. One prominent selling point of our services is ",(0,i.yg)("strong",{parentName:"p"},"self-service")," ",(0,i.yg)("strong",{parentName:"p"},"BI"),". That means we allow users to customize their own dashboards: they can choose the fields they need and relate them to form the dataset as they want. "),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"self-service-BI",src:a(708460).A,width:"1280",height:"709"})),(0,i.yg)("p",null,"Join query is a more efficient way to realize self-service BI. It allows people to break down their data assets into many smaller tables instead of putting it all in a flat table. This would make data updates much faster and more cost-effective, because updating the whole flat table is not always the optimal choice when you have plenty of new data flowing in and old data being updated or deleted frequently, as is the case for most data input."),(0,i.yg)("p",null,"In order to maximize the time value of data, we need data updates to be executed really quickly. For this purpose, we looked into three OLAP databases on the market. They are all fast in some way but there are some differences."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Apache-Doris-VS-ClickHouse-VS-Greenplum",src:a(576935).A,width:"1280",height:"627"})),(0,i.yg)("p",null,"Greenplum is really quick in data loading and batch DML processing, but it is not good at handling high concurrency. There is a steep decline in performance as query concurrency rises. This can be risky for a BI platform that tries to ensure stable user experience. ClickHouse is mind-blowing in single-table queries, but it only allows batch update and batch delete, so that's less timely."),(0,i.yg)("h2",{id:"welcome-to-join-hell"},"Welcome to JOIN Hell"),(0,i.yg)("p",null,"JOIN, my old friend JOIN, is always a hassle. Join queries are demanding for both engineers and the database system. Firstly, engineers must have a thorough grasp of the schema of all tables. Secondly, these queries are resource-intensive, especially when they involve large tables. Some of the reports on our platform entail join queries across up to 20 tables. Just imagine the mess."),(0,i.yg)("p",null,"We tested our candidate OLAP engines with our common join queries and our most notorious slow queries. "),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Apache-Doris-VS-ClickHouse",src:a(705598).A,width:"1280",height:"726"})),(0,i.yg)("p",null,"As the number of tables joined grows, we witness a widening performance gap between Apache Doris and ClickHouse. In most join queries, Apache Doris was about 5 times faster than ClickHouse. In terms of slow queries, Apache Doris responded to most of them within less than 1 second, while the performance of ClickHouse fluctuated within a relatively large range. "),(0,i.yg)("p",null,"And just like that, we decided to upgrade our data architecture with Apache Doris. "),(0,i.yg)("h2",{id:"architecture-that-supports-our-bi-services"},"Architecture that Supports Our BI Services"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Data Input:")," "),(0,i.yg)("p",null,'Our business data flows into DBLE, a distributed middleware based on MySQL. Then the DBLE binlogs are written into Flink, getting deduplicated, merged, and then put into Kafka. Finally, Apache Doris reads data from Kafka via its Routine Load approach. We apply the "delete" configuration in Routine Load to enable real-time deletion. The combination of Apache Flink and the idempotent write mechanism of Apache Doris is how we get exactly-once guarantee. We have a data size of billions of rows per table, and this architecture is able to finish data updates in one minute. '),(0,i.yg)("p",null,"In addition, taking advantage of Apache Kafka and the Routine Load method, we are able to shave the traffic peaks and maintain cluster stability. Kafka also allows us to have multiple consumers of data and recompute intermediate data by resetting the offsets."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Data Output"),": "),(0,i.yg)("p",null,"As a self-service BI platform, we allow users to customize their own reports by configuring the rows, columns, and filters as they need. This is supported by Apache Doris with its capabilities in join queries. "),(0,i.yg)("p",null,"In total, we have 400 data tables, of which 50 has over 100 million rows. That adds up to a data size measured in TB. We put all our data into two Doris clusters on 40 servers."),(0,i.yg)("h2",{id:"no-longer-stalled-by-privileged-access-queries"},"No Longer Stalled by Privileged Access Queries"),(0,i.yg)("p",null,"On our BI platform, privileged queries are often much slower than non-privileged queries. Timeout is often the case and even more so for queries on large datasets."),(0,i.yg)("p",null,"Human resource data is subject to very strict and fine-grained access control policies. The role and position of users and the confidentiality level of data determine who has access to what (the data granularity here is up to fields in a table). Occasionally, we need to separately grant a certain privilege to a particular person. On top of that, we need to ensure data isolation between the multiple tenants on our platform."),(0,i.yg)("p",null,"How does all this add to complexity in engineering? Any user who inputs a query on our BI platform must go through multi-factor authentication, and the authenticated information will all be inserted into the SQL via ",(0,i.yg)("inlineCode",{parentName:"p"},"in")," and then passed on to the OLAP engine. Therefore, the more fine-grained the privilege controls are, the longer the SQL will be, and the more time the OLAP system will spend on ID filtering. That's why our users are often tortured by high latency."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"privileged-access-queries",src:a(541713).A,width:"1396",height:"650"})),(0,i.yg)("p",null,"So how did we fix that? We use the ",(0,i.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/data-table/index/bloomfilter/"},"Bloom Filter index")," in Apache Doris. "),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"BloomFilter-index",src:a(301768).A,width:"1280",height:"118"})),(0,i.yg)("p",null,"By adding Bloom Filter indexes to the relevant ID fields, we improve the speed of privileged queries by 30% and basically eliminate timeout errors."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"faster-privileged-access-queries",src:a(638627).A,width:"1852",height:"863"})),(0,i.yg)("p",null,"Tips on when you should use the Bloom Filter index:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"For non-prefix filtering"),(0,i.yg)("li",{parentName:"ul"},"For ",(0,i.yg)("inlineCode",{parentName:"li"},"in")," and ",(0,i.yg)("inlineCode",{parentName:"li"},"=")," filters on a particular column"),(0,i.yg)("li",{parentName:"ul"},'For filtering on high-cardinality columns, such as UserID. In essence, the Bloom Filter index is used to check if a certain value exists in a dataset. There is no point in using the Bloom Filter index for a low-cardinality column, like "gender", for example, because almost every data block contains all the gender values.')),(0,i.yg)("h2",{id:"to-all-bi-engineers"},"To All BI Engineers"),(0,i.yg)("p",null,"We believe self-service BI is the future in the BI landscape, just like AGI is the future for artificial intelligence. Fast join queries is the way towards it, and the foregoing architectural upgrade is part of our ongoing effort to empower that. May there be less painful JOINs in the BI world. Cheers."),(0,i.yg)("p",null,"Find the Apache Doris developers on ",(0,i.yg)("a",{parentName:"p",href:"https://join.slack.com/t/apachedoriscommunity/shared_invite/zt-2gmq5o30h-455W226d79zP3L96ZhXIoQ"},"Slack")))}h.isMDXComponent=!0},708460:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/Moka_1-6653b0bedab8b84497aad6667ab2db9c.png"},576935:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/Moka_2-fe0c3aef14ac2449ef661d83ca293e8d.png"},705598:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/Moka_3-dab994e57f63d5b0b6c72b18de3a562b.png"},541713:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/Moka_4-64db81a5dd0659c2fe09805142c25b39.png"},301768:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/Moka_5-666c3e530937abfa6243f0f3bb1f645c.png"},638627:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/Moka_6-946cd1d988bc4d2cd18f580775cb89a7.png"}}]);