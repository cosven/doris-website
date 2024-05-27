"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[64903],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>d});var a=r(296540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),m=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=m(r),g=o,d=c["".concat(s,".").concat(g)]||c[g]||p[g]||n;return r?a.createElement(d,i(i({ref:t},u),{},{components:r})):a.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var m=2;m<n;m++)i[m]=r[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},818962:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>m});var a=r(58168),o=(r(296540),r(15680));const n={title:"CREATE-WORKLOAD-GORUP",language:"en"},i=void 0,l={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-WORKLOAD-GROUP",id:"version-2.0/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-WORKLOAD-GROUP",title:"CREATE-WORKLOAD-GORUP",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-WORKLOAD-GROUP.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Create",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-WORKLOAD-GROUP",permalink:"/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-WORKLOAD-GROUP",draft:!1,tags:[],version:"2.0",frontMatter:{title:"CREATE-WORKLOAD-GORUP",language:"en"},sidebar:"docs",previous:{title:"CREATE-RESOURCE",permalink:"/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-RESOURCE"},next:{title:"CREATE-SQL-BLOCK-RULE",permalink:"/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-SQL-BLOCK-RULE"}},s={},m=[{value:"CREATE-WORKLOAD-GROUP",id:"create-workload-group",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],u={toc:m},c="wrapper";function p(e){let{components:t,...r}=e;return(0,o.yg)(c,(0,a.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"create-workload-group"},"CREATE-WORKLOAD-GROUP"),(0,o.yg)("h3",{id:"name"},"Name"),(0,o.yg)("p",null,"CREATE WORKLOAD GROUP"),(0,o.yg)("version",{since:"dev"}),(0,o.yg)("h3",{id:"description"},"Description"),(0,o.yg)("p",null,"This statement is used to create a workload group. Workload groups enable the isolation of cpu resources and memory resources on a single be."),(0,o.yg)("p",null,"grammar:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE WORKLOAD GROUP [IF NOT EXISTS] "rg_name"\nPROPERTIES (\n    property_list\n);\n')),(0,o.yg)("p",null,"illustrate:"),(0,o.yg)("p",null,"Properties supported by property_list:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"cpu_share: Required, used to set how much cpu time the workload group can acquire, which can achieve soft isolation of cpu resources. cpu_share is a relative value indicating the weight of cpu resources available to the running workload group. For example, if a user creates 3 workload groups rg-a, rg-b and rg-c with cpu_share of 10, 30 and 40 respectively, and at a certain moment rg-a and rg-b are running tasks while rg-c has no tasks, then rg-a can get (10 / (10 + 30)) = 25% of the cpu resources while workload group rg-b can get 75% of the cpu resources. If the system has only one workload group running, it gets all the cpu resources regardless of the value of its cpu_share.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"memory_limit: Required, set the percentage of be memory that can be used by the workload group. The absolute value of the workload group memory limit is: ",(0,o.yg)("inlineCode",{parentName:"p"},"physical_memory * mem_limit * memory_limit"),", where mem_limit is a be configuration item. The total memory_limit of all workload groups in the system must not exceed 100%. Workload groups are guaranteed to use the memory_limit for the tasks in the group in most cases. When the workload group memory usage exceeds this limit, tasks in the group with larger memory usage may be canceled to release the excess memory, refer to enable_memory_overcommit.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"enable_memory_overcommit: Optional, enable soft memory isolation for the workload group, default is false. if set to false, the workload group is hard memory isolated and the tasks with the largest memory usage will be canceled immediately after the workload group memory usage exceeds the limit to release the excess memory. if set to true, the workload group is hard memory isolated and the tasks with the largest memory usage will be canceled immediately after the workload group memory usage exceeds the limit to release the excess memory. if set to true, the workload group is softly isolated, if the system has free memory resources, the workload group can continue to use system memory after exceeding the memory_limit limit, and when the total system memory is tight, it will cancel several tasks in the group with the largest memory occupation, releasing part of the excess memory to relieve the system memory pressure. It is recommended that when this configuration is enabled for a workload group, the total memory_limit of all workload groups should be less than 100%, and the remaining portion should be used for workload group memory overcommit."))),(0,o.yg)("h3",{id:"example"},"Example"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Create a workload group named g1:"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-sql"},' create workload group if not exists g1\n properties (\n     "cpu_share"="10",\n     "memory_limit"="30%",\n     "enable_memory_overcommit"="true"\n );\n')))),(0,o.yg)("h3",{id:"keywords"},"Keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"CREATE, WORKLOAD, GROUP\n")),(0,o.yg)("h3",{id:"best-practice"},"Best Practice"))}p.isMDXComponent=!0}}]);