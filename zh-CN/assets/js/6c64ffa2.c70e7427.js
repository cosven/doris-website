"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[58361],{15680:(e,t,n)=>{n.d(t,{xA:()=>E,yg:()=>y});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},E=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,E=s(e,["components","mdxType","originalType","parentName"]),c=p(n),u=a,y=c["".concat(o,".").concat(u)]||c[u]||m[u]||l;return n?r.createElement(y,i(i({ref:t},E),{},{components:n})):r.createElement(y,i({ref:t},E))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},20101:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=n(58168),a=(n(296540),n(15680));const l={title:"REFRESH-MATERIALIZED-VIEW",language:"zh-CN"},i=void 0,s={unversionedId:"sql-manual/sql-statements/Utility-Statements/REFRESH-MATERIALIZED-VIEW",id:"version-2.1/sql-manual/sql-statements/Utility-Statements/REFRESH-MATERIALIZED-VIEW",title:"REFRESH-MATERIALIZED-VIEW",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-statements/Utility-Statements/REFRESH-MATERIALIZED-VIEW.md",sourceDirName:"sql-manual/sql-statements/Utility-Statements",slug:"/sql-manual/sql-statements/Utility-Statements/REFRESH-MATERIALIZED-VIEW",permalink:"/zh-CN/docs/sql-manual/sql-statements/Utility-Statements/REFRESH-MATERIALIZED-VIEW",draft:!1,tags:[],version:"2.1",frontMatter:{title:"REFRESH-MATERIALIZED-VIEW",language:"zh-CN"},sidebar:"docs",previous:{title:"PAUSE-MATERIALIZED-VIEW",permalink:"/zh-CN/docs/sql-manual/sql-statements/Utility-Statements/PAUSE-MATERIALIZED-VIEW"},next:{title:"RESUME-MATERIALIZED-VIEW",permalink:"/zh-CN/docs/sql-manual/sql-statements/Utility-Statements/RESUME-MATERIALIZED-VIEW"}},o={},p=[{value:"REFRESH-MATERIALIZED-VIEW",id:"refresh-materialized-view",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],E={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(c,(0,r.A)({},E,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"refresh-materialized-view"},"REFRESH-MATERIALIZED-VIEW"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"REFRESH MATERIALIZED VIEW"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u624b\u52a8\u5237\u65b0\u6307\u5b9a\u7684\u5f02\u6b65\u7269\u5316\u89c6\u56fe"),(0,a.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"REFRESH MATERIALIZED VIEW mvName=multipartIdentifier (partitionSpec | COMPLETE | AUTO)\n")),(0,a.yg)("p",null,"\u8bf4\u660e\uff1a"),(0,a.yg)("p",null,"\u5f02\u6b65\u5237\u65b0\u67d0\u4e2a\u7269\u5316\u89c6\u56fe\u7684\u6570\u636e"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"AUTO\uff1a\u4f1a\u8ba1\u7b97\u7269\u5316\u89c6\u56fe\u7684\u54ea\u4e9b\u5206\u533a\u548c\u57fa\u8868\u4e0d\u540c\u6b65\uff08\u76ee\u524d\uff0c\u5982\u679c\u57fa\u8868\u662f\u5916\u8868\uff0c\u4f1a\u88ab\u8ba4\u4e3a\u59cb\u7ec8\u548c\u7269\u5316\u89c6\u56fe\u540c\u6b65\uff0c\u56e0\u6b64\u5982\u679c\u57fa\u8868\u662f\u5916\u8868\uff0c\u9700\u8981\u6307\u5b9a",(0,a.yg)("inlineCode",{parentName:"li"},"COMPLETE"),"\u6216\u6307\u5b9a\u8981\u5237\u65b0\u7684\u5206\u533a\uff09\uff0c\u7136\u540e\u5237\u65b0\u5bf9\u5e94\u7684\u5206\u533a"),(0,a.yg)("li",{parentName:"ul"},"COMPLETE\uff1a\u4f1a\u5f3a\u5236\u5237\u65b0\u7269\u5316\u89c6\u56fe\u7684\u6240\u6709\u5206\u533a\uff0c\u4e0d\u4f1a\u5224\u65ad\u5206\u533a\u662f\u5426\u548c\u57fa\u8868\u540c\u6b65"),(0,a.yg)("li",{parentName:"ul"},"partitionSpec\uff1a\u4f1a\u5f3a\u5236\u5237\u65b0\u6307\u5b9a\u7684\u5206\u533a\uff0c\u4e0d\u4f1a\u5224\u65ad\u5206\u533a\u662f\u5426\u548c\u57fa\u8868\u540c\u6b65")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5237\u65b0\u7269\u5316\u89c6\u56femv1(\u81ea\u52a8\u8ba1\u7b97\u8981\u5237\u65b0\u7684\u5206\u533a)"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"REFRESH MATERIALIZED VIEW mv1 AUTO;\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5237\u65b0\u540d\u5b57\u4e3ap_19950801_19950901\u548cp_19950901_19951001\u7684\u5206\u533a"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"REFRESH MATERIALIZED VIEW mv1 partitions(p_19950801_19950901,p_19950901_19951001);\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5f3a\u5236\u5237\u65b0\u7269\u5316\u89c6\u56fe\u5168\u90e8\u6570\u636e"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"REFRESH MATERIALIZED VIEW mv1 complete;\n")))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"REFRESH, MATERIALIZED, VIEW\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);