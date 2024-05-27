"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[61928],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,y=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return n?a.createElement(y,o(o({ref:t},c),{},{components:n})):a.createElement(y,o({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},42034:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=n(58168),r=(n(296540),n(15680));const i={title:"Statement Execution Action",language:"en"},o=void 0,l={unversionedId:"admin-manual/fe/statement-execution-action",id:"admin-manual/fe/statement-execution-action",title:"Statement Execution Action",description:"\x3c!--",source:"@site/docs/admin-manual/fe/statement-execution-action.md",sourceDirName:"admin-manual/fe",slug:"/admin-manual/fe/statement-execution-action",permalink:"/docs/dev/admin-manual/fe/statement-execution-action",draft:!1,tags:[],version:"current",frontMatter:{title:"Statement Execution Action",language:"en"},sidebar:"docs",previous:{title:"Show Table Data Action",permalink:"/docs/dev/admin-manual/fe/show-table-data-action"},next:{title:"Table Query Plan Action",permalink:"/docs/dev/admin-manual/fe/table-query-plan-action"}},s={},u=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:3}],c={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"statement-execution-action"},"Statement Execution Action"),(0,r.yg)("h2",{id:"request"},"Request"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"POST /api/query/<ns_name>/<db_name>\n")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Statement Execution Action is used to execute a statement and return the result."),(0,r.yg)("h2",{id:"path-parameters"},"Path parameters"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"<db_name>")),(0,r.yg)("p",{parentName:"li"},"  Specify the database name. This database will be regarded as the default database of the current session. If the table name in SQL does not qualify the database name, this database will be used."))),(0,r.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,r.yg)("p",null,"None"),(0,r.yg)("h2",{id:"request-body"},"Request body"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'{\n    "stmt" : "select * from tbl1"\n}\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"sql \u5b57\u6bb5\u4e3a\u5177\u4f53\u7684 SQL")),(0,r.yg)("h3",{id:"response"},"Response"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u8fd4\u56de\u7ed3\u679c\u96c6"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "type": "result_set",\n        "data": [\n            [1],\n            [2]\n        ],\n        "meta": [{\n            "name": "k1",\n            "type": "INT"\n        }],\n        "status": {},\n        "time": 10\n    },\n    "count": 0\n}\n')),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"The type field is ",(0,r.yg)("inlineCode",{parentName:"li"},"result_set"),", which means the result set is returned. The results need to be obtained and displayed based on the meta and data fields. The meta field describes the column information returned. The data field returns the result row. The column type in each row needs to be judged by the content of the meta field. The status field returns some information of MySQL, such as the number of alarm rows, status code, etc. The time field return the execution time, unit is millisecond."))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Return execution result"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "type": "exec_status",\n        "status": {}\n    },\n    "count": 0,\n    "time": 10\n}\n')),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"The type field is ",(0,r.yg)("inlineCode",{parentName:"li"},"exec_status"),", which means the execution result is returned. At present, if the return result is received, it means that the statement was executed successfully.")))))}m.isMDXComponent=!0}}]);