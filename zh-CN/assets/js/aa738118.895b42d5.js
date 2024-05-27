"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[40373],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>d});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),y=r,d=c["".concat(s,".").concat(y)]||c[y]||m[y]||l;return n?a.createElement(d,i(i({ref:t},p),{},{components:n})):a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=y;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},962657:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=n(58168),r=(n(296540),n(15680));const l={title:"ANALYZE",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-statements/Data-Manipulation-Statements/Manipulation/ANALYZE",id:"sql-manual/sql-statements/Data-Manipulation-Statements/Manipulation/ANALYZE",title:"ANALYZE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-statements/Data-Manipulation-Statements/Manipulation/ANALYZE.md",sourceDirName:"sql-manual/sql-statements/Data-Manipulation-Statements/Manipulation",slug:"/sql-manual/sql-statements/Data-Manipulation-Statements/Manipulation/ANALYZE",permalink:"/zh-CN/docs/dev/sql-manual/sql-statements/Data-Manipulation-Statements/Manipulation/ANALYZE",draft:!1,tags:[],version:"current",frontMatter:{title:"ANALYZE",language:"zh-CN"},sidebar:"docs",previous:{title:"INSERT-OVERWRITE",permalink:"/zh-CN/docs/dev/sql-manual/sql-statements/Data-Manipulation-Statements/Manipulation/INSERT-OVERWRITE"},next:{title:"OUTFILE",permalink:"/zh-CN/docs/dev/sql-manual/sql-statements/Data-Manipulation-Statements/OUTFILE"}},s={},u=[{value:"ANALYZE",id:"analyze",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3}],p={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(c,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"analyze"},"ANALYZE"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("version",{since:"2.0"}),(0,r.yg)("p",null,"ANALYZE"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u6536\u96c6\u5404\u5217\u7684\u7edf\u8ba1\u4fe1\u606f\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"ANALYZE < TABLE | DATABASE table_name | db_name > \n    [ (column_name [, ...]) ]\n    [ [ WITH SYNC ] [ WITH SAMPLE PERCENT | ROWS ] ];\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"table_name: \u6307\u5b9a\u7684\u76ee\u6807\u8868\u3002\u53ef\u4ee5\u662f \xa0",(0,r.yg)("inlineCode",{parentName:"li"},"db_name.table_name"),"\xa0 \u5f62\u5f0f\u3002"),(0,r.yg)("li",{parentName:"ul"},"column_name: \u6307\u5b9a\u7684\u76ee\u6807\u5217\u3002\u5fc5\u987b\u662f \xa0",(0,r.yg)("inlineCode",{parentName:"li"},"table_name"),"\xa0 \u4e2d\u5b58\u5728\u7684\u5217\uff0c\u591a\u4e2a\u5217\u540d\u79f0\u7528\u9017\u53f7\u5206\u9694\u3002"),(0,r.yg)("li",{parentName:"ul"},"sync\uff1a\u540c\u6b65\u6536\u96c6\u7edf\u8ba1\u4fe1\u606f\u3002\u6536\u96c6\u5b8c\u540e\u8fd4\u56de\u3002\u82e5\u4e0d\u6307\u5b9a\u5219\u5f02\u6b65\u6267\u884c\u5e76\u8fd4\u56deJOB ID\u3002"),(0,r.yg)("li",{parentName:"ul"},"sample percent | rows\uff1a\u62bd\u6837\u6536\u96c6\u7edf\u8ba1\u4fe1\u606f\u3002\u53ef\u4ee5\u6307\u5b9a\u62bd\u6837\u6bd4\u4f8b\u6216\u8005\u62bd\u6837\u884c\u6570\u3002")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("p",null,"\u5bf9\u4e00\u5f20\u8868\u6309\u716710%\u7684\u6bd4\u4f8b\u91c7\u6837\u6536\u96c6\u7edf\u8ba1\u6570\u636e\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"ANALYZE TABLE lineitem WITH SAMPLE PERCENT 10;\n")),(0,r.yg)("p",null,"\u5bf9\u4e00\u5f20\u8868\u6309\u91c7\u683710\u4e07\u884c\u6536\u96c6\u7edf\u8ba1\u6570\u636e"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"ANALYZE TABLE lineitem WITH SAMPLE ROWS 100000;\n")),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("p",null,"ANALYZE"))}m.isMDXComponent=!0}}]);