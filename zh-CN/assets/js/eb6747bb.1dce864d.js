"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[69800],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var r=t(296540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(t),f=o,y=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return t?r.createElement(y,a(a({ref:n},u),{},{components:t})):r.createElement(y,a({ref:n},u))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[d]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},357373:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=t(58168),o=(t(296540),t(15680));const i={title:"WINDOW_FUNCTION_AVG",language:"zh-CN"},a=void 0,c={unversionedId:"sql-manual/sql-functions/window-functions/window-function-avg",id:"sql-manual/sql-functions/window-functions/window-function-avg",title:"WINDOW_FUNCTION_AVG",description:'\x3c!--  Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements.  See the NOTICE file distributed with this work for additional information regarding copyright ownership.  The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.  You may obtain a copy of the License at',source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/window-functions/window-function-avg.md",sourceDirName:"sql-manual/sql-functions/window-functions",slug:"/sql-manual/sql-functions/window-functions/window-function-avg",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/window-functions/window-function-avg",draft:!1,tags:[],version:"current",frontMatter:{title:"WINDOW_FUNCTION_AVG",language:"zh-CN"},sidebar:"docs",previous:{title:"WINDOW_FUNCTION_SUM",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/window-functions/window-function-sum"},next:{title:"WINDOW_FUNCTION_MAX",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/window-functions/window-function-max"}},l={},s=[{value:"WINDOW FUNCTION AVG",id:"window-function-avg",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s},d="wrapper";function p(e){let{components:n,...t}=e;return(0,o.yg)(d,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"window-function-avg"},"WINDOW FUNCTION AVG"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("p",null,"\u8ba1\u7b97\u7a97\u53e3\u5185\u6570\u636e\u7684\u5e73\u5747\u503c"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"AVG([ALL] *expression*) [OVER (*analytic_clause*)]\n")),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("p",null,"\u8ba1\u7b97\u5f53\u524d\u884c\u548c\u5b83\u524d\u540e\u5404\u4e00\u884c\u6570\u636e\u7684x\u5e73\u5747\u503c"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"select x, property,    \navg(x) over    \n(   \npartition by property    \norder by x    \nrows between 1 preceding and 1 following    \n) as 'moving average'    \nfrom int_t where property in ('odd','even');\n\n | x  | property | moving average |\n |----|----------|----------------|\n | 2  | even     | 3              |\n | 4  | even     | 4              |\n | 6  | even     | 6              |\n | 8  | even     | 8              |\n | 10 | even     | 9              |\n | 1  | odd      | 2              |\n | 3  | odd      | 3              |\n | 5  | odd      | 5              |\n | 7  | odd      | 7              |\n | 9  | odd      | 8              |\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"WINDOW,FUNCTION,AVG\n")))}p.isMDXComponent=!0}}]);