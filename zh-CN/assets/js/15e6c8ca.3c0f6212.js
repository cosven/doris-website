"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[41077],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var r=t(296540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(t),m=o,y=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return t?r.createElement(y,s(s({ref:n},c),{},{components:t})):r.createElement(y,s({ref:n},c))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},32375:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=t(58168),o=(t(296540),t(15680));const a={title:"Session Action",language:"zh-CN"},s=void 0,i={unversionedId:"admin-manual/fe/session-action",id:"admin-manual/fe/session-action",title:"Session Action",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/fe/session-action.md",sourceDirName:"admin-manual/fe",slug:"/admin-manual/fe/session-action",permalink:"/zh-CN/docs/dev/admin-manual/fe/session-action",draft:!1,tags:[],version:"current",frontMatter:{title:"Session Action",language:"zh-CN"},sidebar:"docs",previous:{title:"Query Profile Action",permalink:"/zh-CN/docs/dev/admin-manual/fe/query-profile-action-controller"},next:{title:"System Action",permalink:"/zh-CN/docs/dev/admin-manual/fe/system-action"}},l={},u=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"\u83b7\u53d6\u5f53\u524d FE \u7684\u4f1a\u8bdd\u4fe1\u606f",id:"\u83b7\u53d6\u5f53\u524d-fe-\u7684\u4f1a\u8bdd\u4fe1\u606f",level:2},{value:"Response",id:"response",level:2},{value:"\u83b7\u53d6\u6240\u6709 FE \u7684\u4f1a\u8bdd\u4fe1\u606f",id:"\u83b7\u53d6\u6240\u6709-fe-\u7684\u4f1a\u8bdd\u4fe1\u606f",level:2},{value:"Response",id:"response-1",level:2}],c={toc:u},p="wrapper";function d(e){let{components:n,...t}=e;return(0,o.yg)(p,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"request"},"Request"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"GET /rest/v1/session")),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"GET /rest/v1/session/all")),(0,o.yg)("h2",{id:"description"},"Description"),(0,o.yg)("p",null,"Session Action \u7528\u4e8e\u83b7\u53d6\u5f53\u524d\u7684\u4f1a\u8bdd\u4fe1\u606f\u3002"),(0,o.yg)("h2",{id:"path-parameters"},"Path parameters"),(0,o.yg)("p",null,"\u65e0"),(0,o.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,o.yg)("p",null,"\u65e0"),(0,o.yg)("h2",{id:"request-body"},"Request body"),(0,o.yg)("p",null,"\u65e0"),(0,o.yg)("h2",{id:"\u83b7\u53d6\u5f53\u524d-fe-\u7684\u4f1a\u8bdd\u4fe1\u606f"},"\u83b7\u53d6\u5f53\u524d FE \u7684\u4f1a\u8bdd\u4fe1\u606f"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"GET /rest/v1/session")),(0,o.yg)("h2",{id:"response"},"Response"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "column_names": ["Id", "User", "Host", "Cluster", "Db", "Command", "Time", "State", "Info"],\n        "rows": [{\n            "User": "root",\n            "Command": "Sleep",\n            "State": "",\n            "Cluster": "default_cluster",\n            "Host": "10.81.85.89:31465",\n            "Time": "230",\n            "Id": "0",\n            "Info": "",\n            "Db": "db1"\n        }]\n    },\n    "count": 2\n}\n')),(0,o.yg)("h2",{id:"\u83b7\u53d6\u6240\u6709-fe-\u7684\u4f1a\u8bdd\u4fe1\u606f"},"\u83b7\u53d6\u6240\u6709 FE \u7684\u4f1a\u8bdd\u4fe1\u606f"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"GET /rest/v1/session/all")),(0,o.yg)("h2",{id:"response-1"},"Response"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "column_names": ["FE", "Id", "User", "Host", "Cluster", "Db", "Command", "Time", "State", "Info"],\n        "rows": [{\n            "FE": "10.14.170.23",\n            "User": "root",\n            "Command": "Sleep",\n            "State": "",\n            "Cluster": "default_cluster",\n            "Host": "10.81.85.89:31465",\n            "Time": "230",\n            "Id": "0",\n            "Info": "",\n            "Db": "db1"\n        },\n        {\n            "FE": "10.14.170.24",\n            "User": "root",\n            "Command": "Sleep",\n            "State": "",\n            "Cluster": "default_cluster",\n            "Host": "10.81.85.88:61465",\n            "Time": "460",\n            "Id": "1",\n            "Info": "",\n            "Db": "db1"\n        }]\n    },\n    "count": 2\n}\n')),(0,o.yg)("p",null,"\u8fd4\u56de\u7ed3\u679c\u540c ",(0,o.yg)("inlineCode",{parentName:"p"},"System Action"),"\u3002\u662f\u4e00\u4e2a\u8868\u683c\u7684\u63cf\u8ff0\u3002"))}d.isMDXComponent=!0}}]);