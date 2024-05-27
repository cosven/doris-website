"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[29872],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,y=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(y,l(l({ref:t},p),{},{components:n})):r.createElement(y,l({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},64031:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(58168),a=(n(296540),n(15680));const o={title:"SQL Dialect Convertor",language:"zh-CN"},l=void 0,i={unversionedId:"lakehouse/sql-dialect",id:"lakehouse/sql-dialect",title:"SQL Dialect Convertor",description:"\x3c!--",source:"@site/docs/lakehouse/sql-dialect.md",sourceDirName:"lakehouse",slug:"/lakehouse/sql-dialect",permalink:"/docs/dev/lakehouse/sql-dialect",draft:!1,tags:[],version:"current",frontMatter:{title:"SQL Dialect Convertor",language:"zh-CN"},sidebar:"docs",previous:{title:"Cloud Service Authentication",permalink:"/docs/dev/lakehouse/cloud-auth"},next:{title:"Upgrading Cluster",permalink:"/docs/dev/admin-manual/cluster-management/upgrade"}},s={},c=[{value:"Deploy service",id:"deploy-service",level:2},{value:"Use SQL dialect",id:"use-sql-dialect",level:2},{value:"Clickhouse",id:"clickhouse",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"sql-dialect"},"SQL Dialect"),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"Starting from version 2.1, Doris can support multiple SQL dialects, such as Presto, Trino, Hive, PostgreSQL, Spark, Oracle, Clickhouse, and more. Through this feature, users can directly use the corresponding SQL dialect to query data in Doris, which facilitates users to smoothly migrate their original business to Doris.")),(0,a.yg)("admonition",{type:"caution"},(0,a.yg)("ol",{parentName:"admonition"},(0,a.yg)("li",{parentName:"ol"},"This function is currently an experimental function. If you encounter any problems during use, you are welcome to provide feedback through the mail group, ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/issues"},"GitHub issue"),", etc. ."))),(0,a.yg)("h2",{id:"deploy-service"},"Deploy service"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Download latest ",(0,a.yg)("a",{parentName:"p",href:"https://www.selectdb.com/tools/doris-sql-convertor"},"Doris SQL Convertor")),(0,a.yg)("blockquote",{parentName:"li"},(0,a.yg)("p",{parentName:"blockquote"},"Note:"),(0,a.yg)("p",{parentName:"blockquote"},"The SQL convertor tool is based on the open source ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/tobymao/sqlglot"},"SQLGlot"),". For more information about SQLGlot, please refer to ",(0,a.yg)("a",{parentName:"p",href:"https://sqlglot.com/sqlglot.html"},"SQLGlot official website")))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"On any FE node, start the service through the following command:"),(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"sh bin/start.sh")),(0,a.yg)("admonition",{parentName:"li",type:"tip"},(0,a.yg)("ol",{parentName:"admonition"},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"This service is a stateless service and can be started and stopped at any time.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"The default startup port is ",(0,a.yg)("inlineCode",{parentName:"p"},"5001"),", and the specified port can be configured in ",(0,a.yg)("inlineCode",{parentName:"p"},"conf/config.conf"),".")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"It is recommended to start a separate service on each FE node."))))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Start the Doris cluster (version 2.1 or higher)")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Set the URL of the SQL Dialect Conversion Service with the following command in Doris:"),(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},'MySQL> set global sql_converter_service_url = "http://127.0.0.1:5001/api/v1/convert"')),(0,a.yg)("admonition",{parentName:"li",type:"tip"},(0,a.yg)("ol",{parentName:"admonition"},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("inlineCode",{parentName:"li"},"127.0.0.1:5001")," is the deployment node IP and port of the SQL dialect conversion service."))))),(0,a.yg)("h2",{id:"use-sql-dialect"},"Use SQL dialect"),(0,a.yg)("p",null,"Currently supported dialect types include:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"presto")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"trino")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"hive")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"spark")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"postgres")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"clickhouse")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"oracle"))),(0,a.yg)("p",null,"example:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Presto")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> CREATE TABLE  test_sqlconvert (\n         id int,\n         start_time DateTime,\n         value String,\n         arr_int ARRAY<Int>,\n         arr_str ARRAY<String>\n     ) ENGINE=OLAP\n     DUPLICATE KEY(`id`)\n     COMMENT 'OLAP'\n     DISTRIBUTED BY HASH(`id`) BUCKETS 1\n     PROPERTIES (\n     \"replication_allocation\" = \"tag.location.default: 1\"\n     );\nQuery OK, 0 rows affected (0.01 sec)\n\nmysql> INSERT INTO test_sqlconvert values(1, '2024-05-20 13:14:52', '2024-01-14',[1, 2, 3, 3], ['Hello', 'World']);\nQuery OK, 1 row affected (0.08 sec)\n\nmysql> set sql_dialect=presto;\nQuery OK, 0 rows affected (0.00 sec)\n\nmysql> SELECT cast(start_time as varchar(20)) as col1,\n            array_distinct(arr_int) as col2,\n            FILTER(arr_str, x -> x LIKE '%World%') as col3,\n            to_date(value,'%Y-%m-%d') as col4,\n            YEAR(start_time) as col5,\n            date_add('month', 1, start_time) as col6,\n            REGEXP_EXTRACT_ALL(value, '-.') as col7,\n            JSON_EXTRACT('{\"id\": \"33\"}', '$.id')as col8,\n            element_at(arr_int, 1) as col9,\n            date_trunc('day',start_time) as col10\n         FROM test_sqlconvert\n         where date_trunc('day',start_time)= DATE'2024-05-20'     \n     order by id;\n+---------------------+-----------+-----------+------------+------+---------------------+-------------+------+------+---------------------+\n| col1                | col2      | col3      | col4       | col5 | col6                | col7        | col8 | col9 | col10               |\n+---------------------+-----------+-----------+------------+------+---------------------+-------------+------+------+---------------------+\n| 2024-05-20 13:14:52 | [1, 2, 3] | [\"World\"] | 2024-01-14 | 2024 | 2024-06-20 13:14:52 | ['-0','-1'] | \"33\" |    1 | 2024-05-20 00:00:00 |\n+---------------------+-----------+-----------+------------+------+---------------------+-------------+------+------+---------------------+\n1 row in set (0.03 sec)\n\n")),(0,a.yg)("h3",{id:"clickhouse"},"Clickhouse"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> set sql_dialect=clickhouse;\nQuery OK, 0 rows affected (0.00 sec)\n\nmysql> select  toString(start_time) as col1,\n             arrayCompact(arr_int) as col2,\n             arrayFilter(x -> x like '%World%',arr_str)as col3,\n             toDate(value) as col4,\n             toYear(start_time)as col5,\n             addMonths(start_time, 1)as col6,\n             extractAll(value, '-.')as col7,\n             JSONExtractString('{\"id\": \"33\"}' , 'id')as col8,\n             arrayElement(arr_int, 1) as col9,\n             date_trunc('day',start_time) as col10\n          FROM test_sqlconvert\n          where date_trunc('day',start_time)= '2024-05-20 00:00:00'     \n     order by id;\n+---------------------+-----------+-----------+------------+------+---------------------+-------------+------+------+---------------------+\n| col1                | col2      | col3      | col4       | col5 | col6                | col7        | col8 | col9 | col10               |\n+---------------------+-----------+-----------+------------+------+---------------------+-------------+------+------+---------------------+\n| 2024-05-20 13:14:52 | [1, 2, 3] | [\"World\"] | 2024-01-14 | 2024 | 2024-06-20 13:14:52 | ['-0','-1'] | \"33\" |    1 | 2024-05-20 00:00:00 |\n+---------------------+-----------+-----------+------------+------+---------------------+-------------+------+------+---------------------+\n1 row in set (0.02 sec)\n")))}u.isMDXComponent=!0}}]);