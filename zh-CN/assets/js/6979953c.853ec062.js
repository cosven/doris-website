"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[66396],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>d});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),i=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=i(e.components);return r.createElement(s.Provider,{value:n},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=i(t),g=a,d=f["".concat(s,".").concat(g)]||f[g]||p[g]||o;return t?r.createElement(d,l(l({ref:n},u),{},{components:t})):r.createElement(d,l({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=g;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[f]="string"==typeof e?e:a,l[1]=c;for(var i=2;i<o;i++)l[i]=t[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},577780:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var r=t(58168),a=(t(296540),t(15680));const o={title:"FOREACH",language:"zh-CN"},l=void 0,c={unversionedId:"sql-manual/sql-functions/aggregate-functions/foreach",id:"sql-manual/sql-functions/aggregate-functions/foreach",title:"FOREACH",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/aggregate-functions/foreach.md",sourceDirName:"sql-manual/sql-functions/aggregate-functions",slug:"/sql-manual/sql-functions/aggregate-functions/foreach",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/foreach",draft:!1,tags:[],version:"current",frontMatter:{title:"FOREACH",language:"zh-CN"},sidebar:"docs",previous:{title:"ARRAY_AGG",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/array-agg"},next:{title:"MAP_AGG",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/map-agg"}},s={},i=[{value:"FOREACH",id:"foreach",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:i},f="wrapper";function p(e){let{components:n,...t}=e;return(0,a.yg)(f,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"foreach"},"FOREACH"),(0,a.yg)("version",{since:"2.1.0"}),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"AGGREGATE_FUNCTION_FOREACH(arg...)"),"\n\u5c06\u8868\u7684\u805a\u5408\u51fd\u6570\u8f6c\u6362\u4e3a\u805a\u5408\u76f8\u5e94\u6570\u7ec4\u9879\u5e76\u8fd4\u56de\u7ed3\u679c\u6570\u7ec4\u7684\u6570\u7ec4\u7684\u805a\u5408\u51fd\u6570\u3002 \u4f8b\u5982, ",(0,a.yg)("inlineCode",{parentName:"p"},"sum_foreach")," \u5bf9\u4e8e\u6570\u7ec4 ","[1, 2]",", ","[3, 4, 5]","\u548c","[6, 7]","\u8fd4\u56de\u7ed3\u679c ","[10, 13, 5]"," \u4e4b\u540e\u5c06\u76f8\u5e94\u7684\u6570\u7ec4\u9879\u6dfb\u52a0\u5728\u4e00\u8d77\u3002"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'mysql [test]>select a , s from db;\n+-----------+---------------+\n| a         | s             |\n+-----------+---------------+\n| [1, 2, 3] | ["ab", "123"] |\n| [20]      | ["cd"]        |\n| [100]     | ["efg"]       |\n| NULL      | NULL          |\n| [null, 2] | [null, "c"]   |\n+-----------+---------------+\n\nmysql [test]>select sum_foreach(a) from db;\n+----------------+\n| sum_foreach(a) |\n+----------------+\n| [121, 4, 3]    |\n+----------------+\n\nmysql [test]>select count_foreach(s) from db;\n+------------------+\n| count_foreach(s) |\n+------------------+\n| [3, 2]           |\n+------------------+\n\nmysql [test]>select array_agg_foreach(a) from db;\n+-----------------------------------+\n| array_agg_foreach(a)              |\n+-----------------------------------+\n| [[1, 20, 100, null], [2, 2], [3]] |\n+-----------------------------------+\n\nmysql [test]>select map_agg_foreach(a,a) from db;\n+---------------------------------------+\n| map_agg_foreach(a, a)                 |\n+---------------------------------------+\n| [{1:1, 20:20, 100:100}, {2:2}, {3:3}] |\n+---------------------------------------+\n')),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"FOREACH"))}p.isMDXComponent=!0}}]);