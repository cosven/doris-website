"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[68799],{15680:(e,a,t)=>{t.d(a,{xA:()=>u,yg:()=>d});var n=t(296540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),m=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=m(e.components);return n.createElement(o.Provider,{value:a},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=m(t),g=r,d=p["".concat(o,".").concat(g)]||p[g]||c[g]||l;return t?n.createElement(d,i(i({ref:a},u),{},{components:t})):n.createElement(d,i({ref:a},u))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=g;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var m=2;m<l;m++)i[m]=t[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},702588:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var n=t(58168),r=(t(296540),t(15680));const l={title:"CREATE-MATERIALIZED-VIEW",language:"en"},i=void 0,s={unversionedId:"sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-MATERIALIZED-VIEW",id:"sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-MATERIALIZED-VIEW",title:"CREATE-MATERIALIZED-VIEW",description:"\x3c!--",source:"@site/docs/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-MATERIALIZED-VIEW.md",sourceDirName:"sql-manual/sql-statements/Data-Definition-Statements/Create",slug:"/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-MATERIALIZED-VIEW",permalink:"/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-MATERIALIZED-VIEW",draft:!1,tags:[],version:"current",frontMatter:{title:"CREATE-MATERIALIZED-VIEW",language:"en"},sidebar:"docs",previous:{title:"CREATE-VIEW",permalink:"/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-VIEW"},next:{title:"CREATE-FUNCTION",permalink:"/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-FUNCTION"}},o={},m=[{value:"CREATE-MATERIALIZED-VIEW",id:"create-materialized-view",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],u={toc:m},p="wrapper";function c(e){let{components:a,...t}=e;return(0,r.yg)(p,(0,n.A)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"create-materialized-view"},"CREATE-MATERIALIZED-VIEW"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"CREATE MATERIALIZED VIEW"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"This statement is used to create a materialized view."),(0,r.yg)("p",null,"This operation is an asynchronous operation. After the submission is successful, you need to view the job progress through ",(0,r.yg)("a",{parentName:"p",href:"/docs/dev/sql-manual/sql-statements/Show-Statements/SHOW-ALTER-TABLE-MATERIALIZED-VIEW"},"SHOW ALTER TABLE MATERIALIZED VIEW"),". After displaying FINISHED, you can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"desc [table_name] all")," command to view the schema of the materialized view."),(0,r.yg)("p",null,"grammar:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE MATERIALIZED VIEW < MV name > as < query >\n[PROPERTIES ("key" = "value")]\n')),(0,r.yg)("p",null,"illustrate:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"MV name"),": The name of the materialized view, required. Materialized view names for the same table cannot be repeated.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"query"),": The query statement used to construct the materialized view, the result of the query statement is the data of the materialized view. Currently supported query formats are:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT select_expr[, select_expr ...]\nFROM [Base view name]\nGROUP BY column_name[, column_name ...]\nORDER BY column_name[, column_name ...]\n")),(0,r.yg)("p",{parentName:"li"},"The syntax is the same as the query syntax."),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"select_expr"),": All columns in the schema of the materialized view.",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Contains at least one single column."))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"base view name"),": The original table name of the materialized view, required.",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Must be a single table and not a subquery"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"group by"),": The grouping column of the materialized view, optional.",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"If not filled, the data will not be grouped."))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"order by"),": the sorting column of the materialized view, optional.",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"The declaration order of the sort column must be the same as the column declaration order in select_expr."),(0,r.yg)("li",{parentName:"ul"},"If order by is not declared, the sorting column is automatically supplemented according to the rules. If the materialized view is an aggregate type, all grouping columns are automatically supplemented as sort columns. If the materialized view is of a non-aggregate type, the first 36 bytes are automatically supplemented as the sort column."),(0,r.yg)("li",{parentName:"ul"},"If the number of auto-supplemented sorts is less than 3, the first three are used as the sort sequence. If query contains a grouping column, the sorting column must be the same as the grouping column."))))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"properties"),(0,r.yg)("p",{parentName:"li"},"Declare some configuration of the materialized view, optional."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-text"},'PROPERTIES ("key" = "value", "key" = "value" ...)\n')),(0,r.yg)("p",{parentName:"li"},"The following configurations can be declared here:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-text"}," short_key: The number of sorting columns.\n timeout: The timeout for materialized view construction.\n")))),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("p",null,"Base table structure is"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> desc duplicate_table;\n+-------+--------+------+------+---------+-------+\n| Field | Type | Null | Key | Default | Extra |\n+-------+--------+------+------+---------+-------+\n| k1 | INT | Yes | true | N/A | |\n| k2 | INT | Yes | true | N/A | |\n| k3 | BIGINT | Yes | true | N/A | |\n| k4 | BIGINT | Yes | true | N/A | |\n+-------+--------+------+------+---------+-------+\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'create table duplicate_table(\n    k1 int null,\n    k2 int null,\n    k3 bigint null,\n    k4 bigint null\n)\nduplicate key (k1,k2,k3,k4)\ndistributed BY hash(k4) buckets 3\nproperties("replication_num" = "1");\n')),(0,r.yg)("p",null,"attention\uff1aIf the materialized view contains partitioned and distributed columns of the Base table, these columns must be used as key columns in the materialized view"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create a materialized view that contains only the columns of the original table (k1, k2)"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"create materialized view k2_k1 as\nselect k2, k1 from duplicate_table;\n")),(0,r.yg)("p",{parentName:"li"},"The schema of the materialized view is as follows, the materialized view contains only two columns k1, k2 without any aggregation"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-text"},"+-------+-------+--------+------+------+ ---------+-------+\n| IndexName | Field | Type | Null | Key | Default | Extra |\n+-------+-------+--------+------+------+ ---------+-------+\n| k2_k1 | k2 | INT | Yes | true | N/A | |\n| | k1 | INT | Yes | true | N/A | |\n+-------+-------+--------+------+------+ ---------+-------+\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create a materialized view with k2 as the sort column"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"create materialized view k2_order as\nselect k2, k1 from duplicate_table order by k2;\n")),(0,r.yg)("p",{parentName:"li"},"The schema of the materialized view is shown in the figure below. The materialized view contains only two columns k2, k1, where k2 is the sorting column without any aggregation."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-text"},"+-------+-------+--------+------+------- +---------+-------+\n| IndexName | Field | Type | Null | Key | Default | Extra |\n+-------+-------+--------+------+------- +---------+-------+\n| k2_order | k2 | INT | Yes | true | N/A | |\n| | k1 | INT | Yes | false | N/A | NONE |\n+-------+-------+--------+------+------- +---------+-------+\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create a materialized view with k1, k2 grouping and k3 column aggregated by SUM"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"create materialized view k1_k2_sumk3 as\nselect k1, k2, sum(k3) from duplicate_table group by k1, k2;\n")),(0,r.yg)("p",{parentName:"li"},"The schema of the materialized view is shown in the figure below. The materialized view contains two columns k1, k2, sum(k3) where k1, k2 are the grouping columns, and sum(k3) is the sum value of the k3 column grouped by k1, k2."),(0,r.yg)("p",{parentName:"li"},"Since the materialized view does not declare a sorting column, and the materialized view has aggregated data, the system defaults to supplement the grouping columns k1 and k2 as sorting columns."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-text"},"+-------+-------+--------+------+------- +---------+-------+\n| IndexName | Field | Type | Null | Key | Default | Extra |\n+-------+-------+--------+------+------- +---------+-------+\n| k1_k2_sumk3 | k1 | INT | Yes | true | N/A | |\n| | k2 | INT | Yes | true | N/A | |\n| | k3 | BIGINT | Yes | false | N/A | SUM |\n+-------+-------+--------+------+------- +---------+-------+\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create a materialized view that removes duplicate rows"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"create materialized view deduplicate as\nselect k1, k2, k3, k4 from duplicate_table group by k1, k2, k3, k4;\n")),(0,r.yg)("p",{parentName:"li"},"The materialized view schema is as shown below. The materialized view contains columns k1, k2, k3, and k4, and there are no duplicate rows."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-text"},"+-------+-------+--------+------+------- +---------+-------+\n| IndexName | Field | Type | Null | Key | Default | Extra |\n+-------+-------+--------+------+------- +---------+-------+\n| deduplicate | k1 | INT | Yes | true | N/A | |\n| | k2 | INT | Yes | true | N/A | |\n| | k3 | BIGINT | Yes | true | N/A | |\n| | k4 | BIGINT | Yes | true | N/A | |\n+-------+-------+--------+------+------- +---------+-------+\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create a non-aggregate materialized view that does not declare a sort column"),(0,r.yg)("p",{parentName:"li"},"The schema of all_type_table is as follows"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"+-------+--------------+------+-------+---------+- ------+\n| Field | Type | Null | Key | Default | Extra |\n+-------+--------------+------+-------+---------+- ------+\n| k1 | TINYINT | Yes | true | N/A | |\n| k2 | SMALLINT | Yes | true | N/A | |\n| k3 | INT | Yes | true | N/A | |\n| k4 | BIGINT | Yes | true | N/A | |\n| k5 | DECIMAL(9,0) | Yes | true | N/A | |\n| k6 | DOUBLE | Yes | false | N/A | NONE |\n| k7 | VARCHAR(20) | Yes | false | N/A | NONE |\n+-------+--------------+------+-------+---------+- ------+\n")),(0,r.yg)("p",{parentName:"li"},"The materialized view contains k3, k4, k5, k6, k7 columns, and does not declare a sort column, the creation statement is as follows:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"create materialized view mv_1 as\nselect k3, k4, k5, k6, k7 from all_type_table;\n")),(0,r.yg)("p",{parentName:"li"},"The default added sorting column of the system is k3, k4, k5 three columns. The sum of the bytes of these three column types is 4(INT) + 8(BIGINT) + 16(DECIMAL) = 28 < 36. So the addition is that these three columns are used as sorting columns. The schema of the materialized view is as follows, you can see that the key field of the k3, k4, k5 columns is true, that is, the sorting column. The key field of the k6, k7 columns is false, which is a non-sorted column."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"+----------------+-------+--------------+------+-- -----+---------+-------+\n| IndexName | Field | Type | Null | Key | Default | Extra |\n+----------------+-------+--------------+------+-- -----+---------+-------+\n| mv_1 | k3 | INT | Yes | true | N/A | |\n| | k4 | BIGINT | Yes | true | N/A | |\n| | k5 | DECIMAL(9,0) | Yes | true | N/A | |\n| | k6 | DOUBLE | Yes | false | N/A | NONE |\n| | k7 | VARCHAR(20) | Yes | false | N/A | NONE |\n+----------------+-------+--------------+------+-- -----+---------+-------+\n")))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"CREATE, MATERIALIZED, VIEW\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}c.isMDXComponent=!0}}]);