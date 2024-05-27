"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[34548],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>y});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,y=m["".concat(o,".").concat(d)]||m[d]||p[d]||l;return n?a.createElement(y,i(i({ref:t},u),{},{components:n})):a.createElement(y,i({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},152294:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=n(58168),r=(n(296540),n(15680));const l={title:"ALTER-SQL-BLOCK-RULE",language:"en"},i=void 0,s={unversionedId:"sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-SQL-BLOCK-RULE",id:"version-2.1/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-SQL-BLOCK-RULE",title:"ALTER-SQL-BLOCK-RULE",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-SQL-BLOCK-RULE.md",sourceDirName:"sql-manual/sql-statements/Data-Definition-Statements/Alter",slug:"/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-SQL-BLOCK-RULE",permalink:"/docs/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-SQL-BLOCK-RULE",draft:!1,tags:[],version:"2.1",frontMatter:{title:"ALTER-SQL-BLOCK-RULE",language:"en"},sidebar:"docs",previous:{title:"ALTER-WORKLOAD-GROUP",permalink:"/docs/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-WORKLOAD-GROUP"},next:{title:"ALTER-ASYNC-MATERIALIZED-VIEW",permalink:"/docs/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-ASYNC-MATERIALIZED-VIEW"}},o={},c=[{value:"ALTER-SQL-BLOCK-RULE",id:"alter-sql-block-rule",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],u={toc:c},m="wrapper";function p(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"alter-sql-block-rule"},"ALTER-SQL-BLOCK-RULE"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"ALTER SQL BLOCK RULE"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"Modify SQL blocking rules to allow modification of each item such as sql/sqlHash/partition_num/tablet_num/cardinality/global/enable."),(0,r.yg)("p",null,"grammar:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER SQL_BLOCK_RULE rule_name\n[PROPERTIES ("key"="value", ...)];\n')),(0,r.yg)("p",null,"illustrate:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"sql and sqlHash cannot be set at the same time. This means that if a rule sets sql or sqlHash, the other attribute cannot be modified;"),(0,r.yg)("li",{parentName:"ul"},"sql/sqlHash and partition_num/tablet_num/cardinality cannot be set at the same time. For example, if a rule sets partition_num, then sql or sqlHash cannot be modified;")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Modify according to SQL properties")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER SQL_BLOCK_RULE test_rule PROPERTIES("sql"="select \\\\* from test_table","enable"="true")\n')),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"If a rule sets partition_num, then sql or sqlHash cannot be modified")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER SQL_BLOCK_RULE test_rule2 PROPERTIES("partition_num" = "10","tablet_num"="300","enable"="true")\n')),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"ALTER,SQL_BLOCK_RULE\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}p.isMDXComponent=!0}}]);