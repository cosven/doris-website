"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[63067],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var a=t(296540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),s=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(i.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,p=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(t),d=r,y=u["".concat(i,".").concat(d)]||u[d]||m[d]||p;return t?a.createElement(y,l(l({ref:n},c),{},{components:t})):a.createElement(y,l({ref:n},c))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var p=t.length,l=new Array(p);l[0]=d;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<p;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},428750:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>p,metadata:()=>o,toc:()=>s});var a=t(58168),r=(t(296540),t(15680));const p={title:"Show Table Data Action",language:"zh-CN"},l=void 0,o={unversionedId:"admin-manual/fe/show-table-data-action",id:"admin-manual/fe/show-table-data-action",title:"Show Table Data Action",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/fe/show-table-data-action.md",sourceDirName:"admin-manual/fe",slug:"/admin-manual/fe/show-table-data-action",permalink:"/zh-CN/docs/dev/admin-manual/fe/show-table-data-action",draft:!1,tags:[],version:"current",frontMatter:{title:"Show Table Data Action",language:"zh-CN"},sidebar:"docs",previous:{title:"Show Runtime Info Action",permalink:"/zh-CN/docs/dev/admin-manual/fe/show-runtime-info-action"},next:{title:"Statement Execution Action",permalink:"/zh-CN/docs/dev/admin-manual/fe/statement-execution-action"}},i={},s=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}],c={toc:s},u="wrapper";function m(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,a.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"request"},"Request"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"GET /api/show_table_data")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"\u7528\u4e8e\u83b7\u53d6\u6240\u6709 internal \u6e90\u4e0b\u6240\u6709\u6570\u636e\u5e93\u6240\u6709\u8868\u7684\u6570\u636e\u91cf\uff0c\u6216\u8005\u6307\u5b9a\u6570\u636e\u5e93\u6216\u6307\u5b9a\u8868\u7684\u6570\u636e\u91cf\u3002\u5355\u4f4d\u5b57\u8282\u3002"),(0,r.yg)("h2",{id:"path-parameters"},"Path parameters"),(0,r.yg)("p",null,"\u65e0"),(0,r.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"db")),(0,r.yg)("p",{parentName:"li"},"  \u53ef\u9009\u3002\u5982\u679c\u6307\u5b9a\uff0c\u5219\u83b7\u53d6\u6307\u5b9a\u6570\u636e\u5e93\u4e0b\u8868\u7684\u6570\u636e\u91cf\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"table")),(0,r.yg)("p",{parentName:"li"},"  \u53ef\u9009\u3002\u5982\u679c\u6307\u5b9a\uff0c\u5219\u83b7\u53d6\u6307\u5b9a\u8868\u7684\u6570\u636e\u91cf\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"single_replica")),(0,r.yg)("p",{parentName:"li"},"  \u53ef\u9009\u3002\u5982\u679c\u6307\u5b9a\uff0c\u5219\u83b7\u53d6\u8868\u5355\u526f\u672c\u6240\u5360\u7528\u7684\u6570\u636e\u91cf\u3002"))),(0,r.yg)("h2",{id:"request-body"},"Request body"),(0,r.yg)("p",null,"\u65e0"),(0,r.yg)("h2",{id:"response"},"Response"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u6307\u5b9a\u6570\u636e\u5e93\u6240\u6709\u8868\u7684\u6570\u636e\u91cf\u3002"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'{\n    "msg":"success",\n    "code":0,\n    "data":{\n        "tpch":{\n            "partsupp":9024548244,\n            "revenue0":0,\n            "customer":1906421482\n        }\n    },\n    "count":0\n}\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u6307\u5b9a\u6570\u636e\u5e93\u6307\u5b9a\u8868\u7684\u6570\u636e\u91cf\u3002"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'{\n    "msg":"success",\n    "code":0,\n    "data":{\n        "tpch":{\n            "partsupp":9024548244\n        }\n    },\n    "count":0\n}\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u6307\u5b9a\u6570\u636e\u5e93\u6307\u5b9a\u8868\u5355\u526f\u672c\u7684\u6570\u636e\u91cf\u3002"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'{\n    "msg":"success",\n    "code":0,\n    "data":{\n        "tpch":{\n            "partsupp":3008182748\n        }\n    },\n    "count":0\n}\n')))),(0,r.yg)("h2",{id:"examples"},"Examples"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u83b7\u53d6\u6307\u5b9a\u6570\u636e\u5e93\u7684\u6570\u636e\u91cf"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'GET /api/show_table_data?db=tpch\n\nResponse:\n{\n    "msg":"success",\n    "code":0,\n    "data":{\n        "tpch":{\n            "partsupp":9024548244,\n            "revenue0":0,\n            "customer":1906421482\n        }\n    },\n    "count":0\n}\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u6307\u5b9a\u6570\u636e\u5e93\u6307\u5b9a\u8868\u7684\u6570\u636e\u91cf\u3002"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'GET /api/show_table_data?db=tpch&table=partsupp\n    \nResponse:\n{\n    "msg":"success",\n    "code":0,\n    "data":{\n        "tpch":{\n            "partsupp":9024548244\n        }\n    },\n    "count":0\n}\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u6307\u5b9a\u6570\u636e\u5e93\u6307\u5b9a\u8868\u5355\u526f\u672c\u7684\u6570\u636e\u91cf\u3002"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'GET /api/show_table_data?db=tpch&table=partsupp&single_replica=true\n    \nResponse:\n{\n    "msg":"success",\n    "code":0,\n    "data":{\n        "tpch":{\n            "partsupp":3008182748\n        }\n    },\n    "count":0\n}\n')))))}m.isMDXComponent=!0}}]);