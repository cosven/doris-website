"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[21472],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>m});var a=t(296540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),s=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(d.Provider,{value:n},e.children)},g="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),g=s(t),u=r,m=g["".concat(d,".").concat(u)]||g[u]||y[u]||l;return t?a.createElement(m,i(i({ref:n},p),{},{components:t})):a.createElement(m,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=u;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o[g]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},542969:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=t(58168),r=(t(296540),t(15680));const l={title:"Elasticsearch",language:"en"},i=void 0,o={unversionedId:"lakehouse/database/es",id:"version-2.1/lakehouse/database/es",title:"Elasticsearch",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/lakehouse/database/es.md",sourceDirName:"lakehouse/database",slug:"/lakehouse/database/es",permalink:"/docs/lakehouse/database/es",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Elasticsearch",language:"en"},sidebar:"docs",previous:{title:"Hive",permalink:"/docs/lakehouse/datalake-building/hive-build"},next:{title:"JDBC",permalink:"/docs/lakehouse/database/jdbc"}},d={},s=[{value:"Usage",id:"usage",level:2},{value:"Create Catalog",id:"create-catalog",level:2},{value:"Parameter Description",id:"parameter-description",level:3},{value:"Column Type Mapping",id:"column-type-mapping",level:2},{value:"Array Type",id:"array-type",level:3},{value:"Best Practice",id:"best-practice",level:2},{value:"Predicate Pushdown",id:"predicate-pushdown",level:3},{value:"Columnar Scan for Faster Queries (enable_docvalue_scan=true)",id:"columnar-scan-for-faster-queries-enable_docvalue_scantrue",level:3},{value:"Sniff Keyword Fields",id:"sniff-keyword-fields",level:3},{value:"Auto Node Discovery, Set to True by Default (nodes_discovery=true)",id:"auto-node-discovery-set-to-true-by-default-nodes_discoverytrue",level:3},{value:"HTTPS Access Mode for ES Clusters",id:"https-access-mode-for-es-clusters",level:3},{value:"Query Usage",id:"query-usage",level:3},{value:"Basic Query",id:"basic-query",level:4},{value:"Extended esquery(field, QueryDSL)",id:"extended-esqueryfield-querydsl",level:4},{value:"Suggestions for Time Fields",id:"suggestions-for-time-fields",level:3},{value:"Obtain ES Metadata Field <code>_id</code>",id:"obtain-es-metadata-field-_id",level:3},{value:"FAQ",id:"faq",level:2},{value:"Appendix",id:"appendix",level:2},{value:"How Doris Conducts Queries in ES",id:"how-doris-conducts-queries-in-es",level:3}],p={toc:s},g="wrapper";function y(e){let{components:n,...t}=e;return(0,r.yg)(g,(0,a.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"elasticsearch"},"Elasticsearch"),(0,r.yg)("p",null,"Elasticsearch (ES) Catalogs in Doris support auto-mapping of ES metadata. Users can utilize the full-text search capability of ES in combination of the distributed query planning capability of Doris to provide a full-fledged OLAP solution that is able to perform:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Multi-index distributed Join queries in ES;"),(0,r.yg)("li",{parentName:"ol"},"Join queries across Doris and ES as well as full-text search and filter.")),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Doris supports Elasticsearch 5.x and newer versions.")),(0,r.yg)("h2",{id:"create-catalog"},"Create Catalog"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG es PROPERTIES (\n    "type"="es",\n    "hosts"="http://127.0.0.1:9200"\n);\n')),(0,r.yg)("p",null,'Since there is no concept of "database" in ES, after connecting to ES, Doris will automatically generate a unique database: ',(0,r.yg)("inlineCode",{parentName:"p"},"default_db"),"."),(0,r.yg)("p",null,"After switching to the ES Catalog, you will be in the ",(0,r.yg)("inlineCode",{parentName:"p"},"dafault_db"),"  so you don't need to execute the ",(0,r.yg)("inlineCode",{parentName:"p"},"USE default_db")," command."),(0,r.yg)("h3",{id:"parameter-description"},"Parameter Description"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Parameter"),(0,r.yg)("th",{parentName:"tr",align:null},"Required or Not"),(0,r.yg)("th",{parentName:"tr",align:null},"Default Value"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"hosts")),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"ES address, can be one or multiple addresses, or the load balancer address of ES")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"user")),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"Empty"),(0,r.yg)("td",{parentName:"tr",align:null},"ES username")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"password")),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"Empty"),(0,r.yg)("td",{parentName:"tr",align:null},"Password of the corresponding user")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"doc_value_scan")),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null},"Whether to obtain value of the target field by ES/Lucene columnar storage")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"keyword_sniff")),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null},"Whether to sniff the text.fields in ES based on keyword; If this is set to false, the system will perform matching after tokenization.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"nodes_discovery")),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null},"Whether to enable ES node discovery, set to true by default; set to false in network isolation environments and only connected to specified nodes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ssl")),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},'Whether to enable HTTPS access mode for ES, currently follows a "Trust All" method in FE/BE')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"mapping_es_id")),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"Whether to map the  ",(0,r.yg)("inlineCode",{parentName:"td"},"_id"),"  field in the ES index")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"like_push_down")),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null},"Whether to transform like to wildcard push down to es, this increases the cpu consumption of the es.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"include_hidden_index")),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"Whether to include hidden index, default to false.")))),(0,r.yg)("blockquote",null,(0,r.yg)("ol",{parentName:"blockquote"},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"In terms of authentication, only HTTP Basic authentication is supported and it requires the user to have read privilege for the index and paths including ",(0,r.yg)("inlineCode",{parentName:"p"},"/_cluster/state/")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"_nodes/http")," ; if you have not enabled security authentication for the cluster, you don't need to set the  ",(0,r.yg)("inlineCode",{parentName:"p"},"user")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"password"),".")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"If there are multiple types in the index in 5.x and 6.x, the first type is taken by default.")))),(0,r.yg)("h2",{id:"column-type-mapping"},"Column Type Mapping"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"ES Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Doris Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Comment"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"null"),(0,r.yg)("td",{parentName:"tr",align:null},"null"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"byte"),(0,r.yg)("td",{parentName:"tr",align:null},"tinyint"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"short"),(0,r.yg)("td",{parentName:"tr",align:null},"smallint"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"integer"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"long"),(0,r.yg)("td",{parentName:"tr",align:null},"bigint"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"unsigned_long"),(0,r.yg)("td",{parentName:"tr",align:null},"largeint"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"float"),(0,r.yg)("td",{parentName:"tr",align:null},"float"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"half_float"),(0,r.yg)("td",{parentName:"tr",align:null},"float"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"double"),(0,r.yg)("td",{parentName:"tr",align:null},"double"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"scaled_float"),(0,r.yg)("td",{parentName:"tr",align:null},"double"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"date"),(0,r.yg)("td",{parentName:"tr",align:null},"date"),(0,r.yg)("td",{parentName:"tr",align:null},"Only support default/yyyy-MM-dd HH:mm:ss/yyyy-MM-dd/epoch_millis format")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"keyword"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"text"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ip"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"constant_keyword"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"wildcard"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"nested"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"object"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"other"),(0,r.yg)("td",{parentName:"tr",align:null},"unsupported"),(0,r.yg)("td",{parentName:"tr",align:null})))),(0,r.yg)("version",{since:"dev"},(0,r.yg)("h3",{id:"array-type"},"Array Type"),(0,r.yg)("p",null,"Elasticsearch does not have an explicit array type, but one of its fields can contain\n",(0,r.yg)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/array.html"},"0 or more values"),".\nTo indicate that a field is an array type, a specific ",(0,r.yg)("inlineCode",{parentName:"p"},"doris")," structural annotation can be added to the\n",(0,r.yg)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-meta-field.html"},"_meta")," section of the index mapping.\nFor Elasticsearch 6.x and before release, please refer ",(0,r.yg)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/elasticsearch/reference/6.8/mapping-meta-field.html"},"_meta"),"."),(0,r.yg)("p",null,"For example, suppose there is an index ",(0,r.yg)("inlineCode",{parentName:"p"},"doc")," containing the following data structure."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "array_int_field": [1, 2, 3, 4],\n  "array_string_field": ["doris", "is", "the", "best"],\n  "id_field": "id-xxx-xxx",\n  "timestamp_field": "2022-11-12T12:08:56Z",\n  "array_object_field": [\n    {\n      "name": "xxx",\n      "age": 18\n    }\n  ]\n}\n')),(0,r.yg)("p",null,"The array fields of this structure can be defined by using the following command to add the field property definition\nto the ",(0,r.yg)("inlineCode",{parentName:"p"},"_meta.doris")," property of the target index mapping."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'# ES 7.x and above\ncurl -X PUT "localhost:9200/doc/_mapping?pretty" -H \'Content-Type:application/json\' -d \'\n{\n    "_meta": {\n        "doris":{\n            "array_fields":[\n                "array_int_field",\n                "array_string_field",\n                "array_object_field"\n            ]\n        }\n    }\n}\'\n\n# ES 6.x and before\ncurl -X PUT "localhost:9200/doc/_mapping?pretty" -H \'Content-Type: application/json\' -d \'\n{\n    "_doc": {\n        "_meta": {\n            "doris":{\n                "array_fields":[\n                    "array_int_field",\n                    "array_string_field",\n                    "array_object_field"\n                ]\n            }\n    }\n    }\n}\n\'\n\n')),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"array_fields"),"\uff1aUsed to indicate a field that is an array type.")),(0,r.yg)("h2",{id:"best-practice"},"Best Practice"),(0,r.yg)("h3",{id:"predicate-pushdown"},"Predicate Pushdown"),(0,r.yg)("p",null,"ES Catalogs support predicate pushdown to ES, which means only the filtered data will be returned. This can markedly improve query performance and reduce usage of CPU, memory, and IO in both Doris and ES."),(0,r.yg)("p",null,"For the sake of optimization, operators will be converted into the following ES queries:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"SQL syntax"),(0,r.yg)("th",{parentName:"tr",align:"center"},"ES 5.x+ syntax"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"="),(0,r.yg)("td",{parentName:"tr",align:"center"},"term query")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"in"),(0,r.yg)("td",{parentName:"tr",align:"center"},"terms query")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"> , < , >= , \u21d0"),(0,r.yg)("td",{parentName:"tr",align:"center"},"range query")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"and"),(0,r.yg)("td",{parentName:"tr",align:"center"},"bool.filter")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"or"),(0,r.yg)("td",{parentName:"tr",align:"center"},"bool.should")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"not"),(0,r.yg)("td",{parentName:"tr",align:"center"},"bool.must_not")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"not in"),(0,r.yg)("td",{parentName:"tr",align:"center"},"bool.must_not + terms query")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"is","_","not","_","null"),(0,r.yg)("td",{parentName:"tr",align:"center"},"exists query")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"is","_","null"),(0,r.yg)("td",{parentName:"tr",align:"center"},"bool.must_not + exists query")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"esquery"),(0,r.yg)("td",{parentName:"tr",align:"center"},"ES-native JSON QueryDSL")))),(0,r.yg)("h3",{id:"columnar-scan-for-faster-queries-enable_docvalue_scantrue"},"Columnar Scan for Faster Queries (enable","_","docvalue","_","scan=true)"),(0,r.yg)("p",null,"Set  ",(0,r.yg)("inlineCode",{parentName:"p"},'"enable_docvalue_scan" = "true"'),"."),(0,r.yg)("p",null,"After this, when obtaining data from ES, Doris will follow these rules:  "),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Try and see"),": Doris will automatically check if columnar storage is enabled for the target fields (doc_value: true), if it is, Doris will obtain all values in the fields from the columnar storage."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Auto-downgrading"),": If any one of the target fields is not available in columnar storage, Doris will parse and obtain all target data from row storage (",(0,r.yg)("inlineCode",{parentName:"li"},"_source"),").")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Benefits")),(0,r.yg)("p",null,"By default, Doris On ES obtains all target columns from ",(0,r.yg)("inlineCode",{parentName:"p"},"_source"),", which is in row storage and JSON format. Compared to columnar storage, ",(0,r.yg)("inlineCode",{parentName:"p"},"_source")," is slow in batch read. In particular, when the system only needs to read small number of columns, the performance of  ",(0,r.yg)("inlineCode",{parentName:"p"},"docvalue"),"  can be about a dozen times faster than that of  ",(0,r.yg)("inlineCode",{parentName:"p"},"_source"),"."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Note")),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Columnar storage is not available for ",(0,r.yg)("inlineCode",{parentName:"li"},"text")," fields in ES. Thus, if you need to obtain fields containing ",(0,r.yg)("inlineCode",{parentName:"li"},"text")," values, you will need to obtain them from ",(0,r.yg)("inlineCode",{parentName:"li"},"_source"),"."),(0,r.yg)("li",{parentName:"ol"},"When obtaining large numbers of fields (",(0,r.yg)("inlineCode",{parentName:"li"},">= 25"),"), the performances of ",(0,r.yg)("inlineCode",{parentName:"li"},"docvalue"),"  and  ",(0,r.yg)("inlineCode",{parentName:"li"},"_source")," are basically equivalent."),(0,r.yg)("li",{parentName:"ol"},"The ",(0,r.yg)("inlineCode",{parentName:"li"},"keyword")," type field, due to the ",(0,r.yg)("a",{parentName:"li",href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/keyword.html#keyword-params"},(0,r.yg)("inlineCode",{parentName:"a"},"ignore_above"))," parameter's limit, long text fields exceeding this limit will be ignored, so the result may be empty. In this case, you need to turn off ",(0,r.yg)("inlineCode",{parentName:"li"},"enable_docvalue_scan")," and get the result from ",(0,r.yg)("inlineCode",{parentName:"li"},"_source"),".")),(0,r.yg)("h3",{id:"sniff-keyword-fields"},"Sniff Keyword Fields"),(0,r.yg)("p",null,"Set  ",(0,r.yg)("inlineCode",{parentName:"p"},'"enable_keyword_sniff" = "true"'),"."),(0,r.yg)("p",null,"ES allows direct data ingestion without an index since it will automatically create an index after ingestion. For string fields, ES will create a field with both ",(0,r.yg)("inlineCode",{parentName:"p"},"text")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"keyword")," types. This is how the Multi-Field feature of ES works. The mapping is as follows:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'"k4": {\n   "type": "text",\n   "fields": {\n      "keyword": {   \n         "type": "keyword",\n         "ignore_above": 256\n      }\n   }\n}\n')),(0,r.yg)("p",null,'For example, to conduct "=" filtering on ',(0,r.yg)("inlineCode",{parentName:"p"},"k4"),", Doris on ES will convert the filtering operation into an ES TermQuery. "),(0,r.yg)("p",null,"The original SQL filter:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'k4 = "Doris On ES"\n')),(0,r.yg)("p",null,"The converted ES query DSL:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'"term" : {\n    "k4": "Doris On ES"\n\n}\n')),(0,r.yg)("p",null,"Since the first field of ",(0,r.yg)("inlineCode",{parentName:"p"},"k4")," is ",(0,r.yg)("inlineCode",{parentName:"p"},"text"),", it will be tokenized by the analyzer set for ",(0,r.yg)("inlineCode",{parentName:"p"},"k4")," (or by the standard analyzer if no analyzer has been set for ",(0,r.yg)("inlineCode",{parentName:"p"},"k4"),') after data ingestion. As a result, it will be tokenized into three terms: "Doris", "on", and "ES". '),(0,r.yg)("p",null,"The details are as follows:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'POST /_analyze\n{\n  "analyzer": "standard",\n  "text": "Doris On ES"\n}\n')),(0,r.yg)("p",null,"The tokenization results:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'{\n   "tokens": [\n      {\n         "token": "doris",\n         "start_offset": 0,\n         "end_offset": 5,\n         "type": "<ALPHANUM>",\n         "position": 0\n      },\n      {\n         "token": "on",\n         "start_offset": 6,\n         "end_offset": 8,\n         "type": "<ALPHANUM>",\n         "position": 1\n      },\n      {\n         "token": "es",\n         "start_offset": 9,\n         "end_offset": 11,\n         "type": "<ALPHANUM>",\n         "position": 2\n      }\n   ]\n}\n')),(0,r.yg)("p",null,"If you conduct a query as follows:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'"term" : {\n    "k4": "Doris On ES"\n}\n')),(0,r.yg)("p",null,"Since there is no term in the dictionary that matches the term ",(0,r.yg)("inlineCode",{parentName:"p"},"Doris On ES"),", no result will be returned."),(0,r.yg)("p",null,"However, if you have set ",(0,r.yg)("inlineCode",{parentName:"p"},"enable_keyword_sniff: true"),", the system will convert ",(0,r.yg)("inlineCode",{parentName:"p"},'k4 = "Doris On ES"')," to ",(0,r.yg)("inlineCode",{parentName:"p"},'k4.keyword = "Doris On ES"'),"  to match the SQL semantics. The converted ES query DSL will be:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'"term" : {\n    "k4.keyword": "Doris On ES"\n}\n')),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"k4.keyword"),"  is of ",(0,r.yg)("inlineCode",{parentName:"p"},"keyword")," type, so the data is written in ES as a complete term, allowing for successful matching."),(0,r.yg)("h3",{id:"auto-node-discovery-set-to-true-by-default-nodes_discoverytrue"},"Auto Node Discovery, Set to True by Default (nodes","_","discovery=true)"),(0,r.yg)("p",null,"Set  ",(0,r.yg)("inlineCode",{parentName:"p"},'"nodes_discovery" = "true"'),"."),(0,r.yg)("p",null,"Then, Doris will discover all available data nodes (the allocated shards) in ES. If Doris BE hasn't accessed the ES data node addresses, then set ",(0,r.yg)("inlineCode",{parentName:"p"},'"nodes_discovery" = "false"')," . ES clusters are deployed in private networks that are isolated from public Internet, so users will need proxy access."),(0,r.yg)("h3",{id:"https-access-mode-for-es-clusters"},"HTTPS Access Mode for ES Clusters"),(0,r.yg)("p",null,"Set  ",(0,r.yg)("inlineCode",{parentName:"p"},'"ssl" = "true"'),"."),(0,r.yg)("p",null,'A temporary solution is to implement a "Trust All" method in FE/BE. In the future, the real user configuration certificates will be used.'),(0,r.yg)("h3",{id:"query-usage"},"Query Usage"),(0,r.yg)("p",null,"You can use the ES external tables in Doris the same way as using Doris internal tables, except that the Doris data models (Rollup, Pre-Aggregation, and Materialized Views) are unavailable."),(0,r.yg)("h4",{id:"basic-query"},"Basic Query"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"select * from es_table where k1 > 1000 and k3 ='term' or k4 like 'fu*z_'\n")),(0,r.yg)("h4",{id:"extended-esqueryfield-querydsl"},"Extended esquery(field, QueryDSL)"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"esquery(field, QueryDSL)")," function can be used to push queries that cannot be expressed in SQL, such as ",(0,r.yg)("inlineCode",{parentName:"p"},"match_phrase")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"geoshape")," , to ES for filtering."),(0,r.yg)("p",null,"In ",(0,r.yg)("inlineCode",{parentName:"p"},"esquery"),", the first parameter (the column name) is used to associate with ",(0,r.yg)("inlineCode",{parentName:"p"},"index"),", while the second parameter is the JSON expression of basic ",(0,r.yg)("inlineCode",{parentName:"p"},"Query DSL")," in ES, which is surrounded by ",(0,r.yg)("inlineCode",{parentName:"p"},"{}"),". The ",(0,r.yg)("inlineCode",{parentName:"p"},"root key")," in JSON is unique, which can be ",(0,r.yg)("inlineCode",{parentName:"p"},"match_phrase"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"geo_shape")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"bool")," , etc."),(0,r.yg)("p",null,"A ",(0,r.yg)("inlineCode",{parentName:"p"},"match_phrase")," query:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'select * from es_table where esquery(k4, \'{\n        "match_phrase": {\n           "k4": "doris on es"\n        }\n    }\');\n')),(0,r.yg)("p",null,"A ",(0,r.yg)("inlineCode",{parentName:"p"},"geo")," query:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'select * from es_table where esquery(k4, \'{\n      "geo_shape": {\n         "location": {\n            "shape": {\n               "type": "envelope",\n               "coordinates": [\n                  [\n                     13,\n                     53\n                  ],\n                  [\n                     14,\n                     52\n                  ]\n               ]\n            },\n            "relation": "within"\n         }\n      }\n   }\');\n')),(0,r.yg)("p",null,"A ",(0,r.yg)("inlineCode",{parentName:"p"},"bool")," query:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'select * from es_table where esquery(k4, \' {\n         "bool": {\n            "must": [\n               {\n                  "terms": {\n                     "k1": [\n                        11,\n                        12\n                     ]\n                  }\n               },\n               {\n                  "terms": {\n                     "k2": [\n                        100\n                     ]\n                  }\n               }\n            ]\n         }\n      }\');\n')),(0,r.yg)("h3",{id:"suggestions-for-time-fields"},"Suggestions for Time Fields"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"These are only applicable for ES external tables. Time fields will be automatically mapped to Date or Datetime type in ES Catalogs.")),(0,r.yg)("p",null,"ES boasts flexible usage of time fields, but in ES external tables, improper type setting of time fields will result in predicate pushdown failures."),(0,r.yg)("p",null,"It is recommended to allow the highest level of format compatibility for time fields when creating an index:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},' "dt": {\n     "type": "date",\n     "format": "yyyy-MM-dd HH:mm:ss||yyyy-MM-dd||epoch_millis"\n }\n')),(0,r.yg)("p",null,"When creating this field in Doris, it is recommended to set its type to ",(0,r.yg)("inlineCode",{parentName:"p"},"date")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"datetime"),"  (or ",(0,r.yg)("inlineCode",{parentName:"p"},"varchar")," ) . You can use the following SQL statements to push the filters down to ES."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"select * from doe where k2 > '2020-06-21';\n\nselect * from doe where k2 < '2020-06-21 12:00:00'; \n\nselect * from doe where k2 < 1593497011; \n\nselect * from doe where k2 < now();\n\nselect * from doe where k2 < date_format(now(), '%Y-%m-%d');\n")),(0,r.yg)("p",null,"Note:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The default format of time fields in ES is:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"strict_date_optional_time||epoch_millis\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Timestamps ingested into ES need to be converted into ",(0,r.yg)("inlineCode",{parentName:"li"},"ms"),", which is the internal processing format in ES; otherwise errors will occur in ES external tables.")),(0,r.yg)("h3",{id:"obtain-es-metadata-field-_id"},"Obtain ES Metadata Field ",(0,r.yg)("inlineCode",{parentName:"h3"},"_id")),(0,r.yg)("p",null,"Each ingested files, if not specified with an  ",(0,r.yg)("inlineCode",{parentName:"p"},"_id")," , will be given a globally unique ",(0,r.yg)("inlineCode",{parentName:"p"},"_id"),", which is the primary key. Users can assign an ",(0,r.yg)("inlineCode",{parentName:"p"},"_id"),"  with unique business meanings to the files during ingestion. "),(0,r.yg)("p",null,"To obtain such field values from ES external tables, you can add an ",(0,r.yg)("inlineCode",{parentName:"p"},"_id"),"  field of ",(0,r.yg)("inlineCode",{parentName:"p"},"varchar"),"  type when creating tables."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'CREATE EXTERNAL TABLE `doe` (\n  `_id` varchar COMMENT "",\n  `city`  varchar COMMENT ""\n) ENGINE=ELASTICSEARCH\nPROPERTIES (\n"hosts" = "http://127.0.0.1:8200",\n"user" = "root",\n"password" = "root",\n"index" = "doe"\n}\n')),(0,r.yg)("p",null,"To obtain such field values from ES Catalogs, please set ",(0,r.yg)("inlineCode",{parentName:"p"},'"mapping_es_id" = "true"'),"."),(0,r.yg)("p",null,"Note:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"The ",(0,r.yg)("inlineCode",{parentName:"li"},"_id"),"  field only supports ",(0,r.yg)("inlineCode",{parentName:"li"},"=")," and ",(0,r.yg)("inlineCode",{parentName:"li"},"in")," filtering."),(0,r.yg)("li",{parentName:"ol"},"The",(0,r.yg)("inlineCode",{parentName:"li"},"_id"),"  field must be of  ",(0,r.yg)("inlineCode",{parentName:"li"},"varchar"),"  type.")),(0,r.yg)("h2",{id:"faq"},"FAQ"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Are X-Pack authenticated ES clusters supported?"),(0,r.yg)("p",{parentName:"li"},"All ES clusters with HTTP Basic authentications are supported.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Why are some queries require longer response time than those in ES?"),(0,r.yg)("p",{parentName:"li"},"For ",(0,r.yg)("inlineCode",{parentName:"p"},"_count ")," queries, ES can directly read the metadata regarding the number of the specified files instead of filtering the original data. This is a huge time saver.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Can aggregation operations be pushed down?"),(0,r.yg)("p",{parentName:"li"},"Currently, Doris On ES does not support pushdown for aggregations such as sum, avg, and min/max. In such operations, Doris obtains all files that met the specified conditions from ES and then conducts computing internally."))),(0,r.yg)("h2",{id:"appendix"},"Appendix"),(0,r.yg)("h3",{id:"how-doris-conducts-queries-in-es"},"How Doris Conducts Queries in ES"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"+----------------------------------------------+\n|                                              |\n| Doris      +------------------+              |\n|            |       FE         +--------------+-------+\n|            |                  |  Request Shard Location\n|            +--+-------------+-+              |       |\n|               ^             ^                |       |\n|               |             |                |       |\n|  +-------------------+ +------------------+  |       |\n|  |            |      | |    |             |  |       |\n|  | +----------+----+ | | +--+-----------+ |  |       |\n|  | |      BE       | | | |      BE      | |  |       |\n|  | +---------------+ | | +--------------+ |  |       |\n+----------------------------------------------+       |\n   |        |          | |        |         |          |\n   |        |          | |        |         |          |\n   |    HTTP SCROLL    | |    HTTP SCROLL   |          |\n+-----------+---------------------+------------+       |\n|  |        v          | |        v         |  |       |\n|  | +------+--------+ | | +------+-------+ |  |       |\n|  | |               | | | |              | |  |       |\n|  | |   DataNode    | | | |   DataNode   +<-----------+\n|  | |               | | | |              | |  |       |\n|  | |               +<--------------------------------+\n|  | +---------------+ | | |--------------| |  |       |\n|  +-------------------+ +------------------+  |       |\n|   Same Physical Node                         |       |\n|                                              |       |\n|           +-----------------------+          |       |\n|           |                       |          |       |\n|           |      MasterNode       +<-----------------+\n| ES        |                       |          |\n|           +-----------------------+          |\n+----------------------------------------------+\n\n\n")),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Doris FE sends a request to the specified host for table creation in order to obtain information about the HTTP port and the index shard allocation.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Based on the information about node and index metadata from FE, Doris generates a query plan and send it to the corresponding BE node.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Following the principle of proximity, the BE node sends request to the locally deployed ES node, and obtain data from ",(0,r.yg)("inlineCode",{parentName:"p"},"_source")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"docvalue"),"  from each shard of ES index concurrently by way of ",(0,r.yg)("inlineCode",{parentName:"p"},"HTTP Scroll"),".")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Doris returns the computing results to the user."))))}y.isMDXComponent=!0}}]);