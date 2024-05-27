"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[77070],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>c});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,c=d["".concat(s,".").concat(m)]||d[m]||g[m]||o;return a?n.createElement(c,l(l({ref:t},p),{},{components:a})):n.createElement(c,l({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},658483:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=a(58168),r=(a(296540),a(15680));const o={title:"Updating Data on Unique Key Model",language:"en"},l=void 0,i={unversionedId:"data-operate/update/update-of-unique-model",id:"version-2.0/data-operate/update/update-of-unique-model",title:"Updating Data on Unique Key Model",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/data-operate/update/update-of-unique-model.md",sourceDirName:"data-operate/update",slug:"/data-operate/update/update-of-unique-model",permalink:"/docs/2.0/data-operate/update/update-of-unique-model",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Updating Data on Unique Key Model",language:"en"},sidebar:"docs",previous:{title:"Updating Data with UPDATE Command",permalink:"/docs/2.0/data-operate/update/unique-update"},next:{title:"Updating Data on Aggregate Key Model",permalink:"/docs/2.0/data-operate/update/update-of-aggregate-model"}},s={},u=[{value:"Updates on All Columns",id:"updates-on-all-columns",level:2},{value:"Partial Update",id:"partial-update",level:2},{value:"Use Cases",id:"use-cases",level:3},{value:"Usage",id:"usage",level:3},{value:"Example",id:"example",level:3},{value:"Notes",id:"notes",level:3}],p={toc:u},d="wrapper";function g(e){let{components:t,...a}=e;return(0,r.yg)(d,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"This document primarily introduces the updates based on the load data on the Doris Unique Key model."),(0,r.yg)("h2",{id:"updates-on-all-columns"},"Updates on All Columns"),(0,r.yg)("p",null,'When load data into the primary key model (Unique model) in Doris using supported load methods such as Stream Load, Broker Load, Routine Load, Insert Into, etc., if there are no corresponding data rows with the primary key, new data will be inserted. If there are corresponding data rows with the primary key, the data will be updated. In other words, load data into the Doris primary key model follows an "upsert" mode. Based on the import, updating existing records is by default the same as load a new record. Therefore, you can refer to the data load documentation section for more details.'),(0,r.yg)("h2",{id:"partial-update"},"Partial Update"),(0,r.yg)("p",null,"Updating partial columns mainly refers to directly updating certain field values in a table instead of updating all field values. This can be done using the Update statement, which typically involves reading the entire row data, updating specific field values, and then writing it back. This read-write transaction is time-consuming and not suitable for writing large amounts of data. In the context of load updates on the primary key model, Doris provides a functionality to directly insert or update partial column data without reading the entire row data, significantly improving the update efficiency."),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"Note:"),(0,r.yg)("ol",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Partial updates are only supported in the Merge-on-Write implementation of the Unique Key starting from version 2.0.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Starting from version 2.0.2, partial updates are supported using INSERT INTO.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Version 2.1.0 will support more flexible column updates.")))),(0,r.yg)("h3",{id:"use-cases"},"Use Cases"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Real-time dynamic column updates that require high-frequency updates on certain fields in the table. For example, in a user tag table, there are fields containing the latest user behavior information that needs real-time updates to enable real-time analysis and decision-making in advertising/recommendation systems.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Combining multiple source tables into a large denormalized table.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Data correction."))),(0,r.yg)("h3",{id:"usage"},"Usage"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Table Creation")),(0,r.yg)("p",null,"When creating the table, the following property needs to be specified to enable the Merge-on-Write implementation:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Plain"},"enable_unique_key_merge_on_write = true\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"StreamLoad/BrokerLoad/RoutineLoad")),(0,r.yg)("p",null,"If you are using Stream Load/Broker Load/Routine Load, add the following header during the load:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Plain"},"partial_columns: true\n")),(0,r.yg)("p",null,"Also, specify the columns to be loaded in the ",(0,r.yg)("inlineCode",{parentName:"p"},"columns")," section (all key columns must be included, otherwise updates won't be possible)."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Flink Connector")),(0,r.yg)("p",null,"If you are using the Flink Connector, add the following configuration:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Plain"},"'sink.properties.partial_columns' = 'true',\n")),(0,r.yg)("p",null,"Also, specify the columns to be loaded in ",(0,r.yg)("inlineCode",{parentName:"p"},"sink.properties.column")," (all key columns must be included, otherwise updates won't be possible)."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"INSERT INTO")),(0,r.yg)("p",null,"In all data models, when using ",(0,r.yg)("inlineCode",{parentName:"p"},"INSERT INTO")," with a subset of columns, the default behavior is to insert the entire row. To enable partial column updates in the Merge-on-Write implementation, the following session variable needs to be set:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"set enable_unique_key_partial_update=true\n")),(0,r.yg)("p",null,"Note that the default value for the session variable ",(0,r.yg)("inlineCode",{parentName:"p"},"enable_insert_strict"),", which controls whether the insert statement operates in strict mode, is true. In strict mode, updating non-existing keys during partial column updates is not allowed. So, if you want to insert non-existing keys during partial column updates using the insert statement, you need to set ",(0,r.yg)("inlineCode",{parentName:"p"},"enable_unique_key_partial_update")," to true and also set ",(0,r.yg)("inlineCode",{parentName:"p"},"enable_insert_strict")," to false."),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("p",null,"Suppose there is an order table named ",(0,r.yg)("inlineCode",{parentName:"p"},"order_tbl")," in Doris, where the order ID is a key column, and the order status and order amount are value columns. The data is as follows:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Order ID"),(0,r.yg)("th",{parentName:"tr",align:null},"Order Amount"),(0,r.yg)("th",{parentName:"tr",align:null},"Order Status"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"1"),(0,r.yg)("td",{parentName:"tr",align:null},"100"),(0,r.yg)("td",{parentName:"tr",align:null},"Pending")))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"+----------+--------------+--------------+\n| order_id | order_amount | order_status |\n+----------+--------------+--------------+\n| 1        | 100          | Pending      |\n+----------+--------------+--------------+\n1 row in set (0.01 sec)\n")),(0,r.yg)("p",null,"Now, when a user clicks on payment, the Doris system needs to update the order status of the order with ID '1' to 'To be shipped'."),(0,r.yg)("p",null,"If you are using Stream Load, you can update as follows:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'$ cat update.csv\n\n1,To be shipped\n\n$ curl --location-trusted -u root: -H "partial_columns:true" -H "column_separator:," -H "columns:order_id,order_status" -T /tmp/update.csv http://127.0.0.1:48037/api/db1/order_tbl/_stream_load\n')),(0,r.yg)("p",null,"If you are using ",(0,r.yg)("inlineCode",{parentName:"p"},"INSERT INTO"),", you can update as following methods:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"set enable_unique_key_partial_update=true;\nINSERT INTO order_tbl (order_id, order_status) values (1,'\u5f85\u53d1\u8d27');\n")),(0,r.yg)("p",null,"The translated version in English:"),(0,r.yg)("p",null,"After the update, the result is as follows:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"+----------+--------------+--------------+\n| order_id | order_amount | order_status |\n+----------+--------------+--------------+\n| 1        |          100 | To be shipped |\n+----------+--------------+--------------+\n1 row in set (0.01 sec)\n")),(0,r.yg)("p",null,"Partial Column Updates in the Primary Key Model"),(0,r.yg)("h3",{id:"notes"},"Notes"),(0,r.yg)("p",null,"Due to the Merge-on-Write implementation requiring data completion during data writing to ensure optimal query performance, performing partial column updates using the Merge-on-Write implementation may result in a decrease in load performance."),(0,r.yg)("p",null,"Suggestions for improving load performance:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Use SSDs equipped with NVMe or high-speed SSD cloud disks. Reading historical data in large quantities during data completion will generate high read IOPS and read throughput.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Enabling row storage can significantly reduce the IOPS generated during data completion, resulting in noticeable improvements in load performance. Users can enable row storage by using the following property when creating the table:"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Plain"},'"store_row_column" = "true"\n')),(0,r.yg)("p",null,"In version 2.0, all rows in a batch write task (whether it is an load task or ",(0,r.yg)("inlineCode",{parentName:"p"},"INSERT INTO"),") can only update the same columns. If you need to update different columns, you will need to perform separate batch writes."),(0,r.yg)("p",null,"In version 2.1, flexible column updates will be supported, allowing users to update different columns for each row within the same batch load."))}g.isMDXComponent=!0}}]);