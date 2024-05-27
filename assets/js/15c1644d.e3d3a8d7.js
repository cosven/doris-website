"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[1899],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>f});var r=n(296540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(n),p=i,f=c["".concat(l,".").concat(p)]||c[p]||m[p]||a;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},447132:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(58168),i=(n(296540),n(15680));const a={title:"minutes_add",language:"en"},o=void 0,s={unversionedId:"sql-manual/sql-functions/date-time-functions/minutes_add",id:"version-1.2/sql-manual/sql-functions/date-time-functions/minutes_add",title:"minutes_add",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/date-time-functions/minutes_add.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/minutes_add",permalink:"/docs/1.2/sql-manual/sql-functions/date-time-functions/minutes_add",draft:!1,tags:[],version:"1.2",frontMatter:{title:"minutes_add",language:"en"},sidebar:"docs",previous:{title:"microseconds_sub",permalink:"/docs/1.2/sql-manual/sql-functions/date-time-functions/microseconds_sub"},next:{title:"minutes_diff",permalink:"/docs/1.2/sql-manual/sql-functions/date-time-functions/minutes_diff"}},l={},u=[{value:"minutes_add",id:"minutes_add",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],d={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,i.yg)(c,(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"minutes_add"},"minutes_add"),(0,i.yg)("h3",{id:"description"},"description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"DATETIME MINUTES_ADD(DATETIME date, INT minutes)")),(0,i.yg)("p",null,"Add specified minutes from date time or date"),(0,i.yg)("p",null,"The parameter date can be DATETIME or DATE, and the return type is DATETIME."),(0,i.yg)("h3",{id:"example"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql> select minutes_add(\"2020-02-02\", 1);\n+---------------------------------------+\n| minutes_add('2020-02-02 00:00:00', 1) |\n+---------------------------------------+\n| 2020-02-02 00:01:00                   |\n+---------------------------------------+\n")),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"MINUTES_ADD\n")))}m.isMDXComponent=!0}}]);