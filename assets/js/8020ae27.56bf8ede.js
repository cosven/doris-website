"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[4746],{15680:(e,r,t)=>{t.d(r,{xA:()=>c,yg:()=>b});var n=t(296540);function u(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){u(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,u=function(e,r){if(null==e)return{};var t,n,u={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(u[t]=e[t]);return u}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(u[t]=e[t])}return u}var i=n.createContext({}),s=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(i.Provider,{value:r},e.children)},y="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,u=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),y=s(t),d=u,b=y["".concat(i,".").concat(d)]||y[d]||p[d]||o;return t?n.createElement(b,a(a({ref:r},c),{},{components:t})):n.createElement(b,a({ref:r},c))}));function b(e,r){var t=arguments,u=r&&r.mdxType;if("string"==typeof e||u){var o=t.length,a=new Array(o);a[0]=d;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l[y]="string"==typeof e?e:u,a[1]=l;for(var s=2;s<o;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},284147:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=t(58168),u=(t(296540),t(15680));const o={title:"Subquery",language:"en"},a=void 0,l={unversionedId:"query/query-data/subquery",id:"query/query-data/subquery",title:"Subquery",description:"\x3c!--",source:"@site/docs/query/query-data/subquery.md",sourceDirName:"query/query-data",slug:"/query/query-data/subquery",permalink:"/docs/dev/query/query-data/subquery",draft:!1,tags:[],version:"current",frontMatter:{title:"Subquery",language:"en"},sidebar:"docs",previous:{title:"Complex Type",permalink:"/docs/dev/query/query-data/complex-type"},next:{title:"Common Table Expression",permalink:"/docs/dev/query/query-data/cte"}},i={},s=[{value:"Subquery example in Where clause",id:"subquery-example-in-where-clause",level:2},{value:"Subquery example in Join clause",id:"subquery-example-in-join-clause",level:2}],c={toc:s},y="wrapper";function p(e){let{components:r,...t}=e;return(0,u.yg)(y,(0,n.A)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,u.yg)("p",null,"A subquery is a ",(0,u.yg)("inlineCode",{parentName:"p"},"SELECT")," statement that is nested within another ",(0,u.yg)("inlineCode",{parentName:"p"},"SELECT")," statement. The nested subquery is often referred to as the inner query, while the containing query is known as the outer query or the outer query block. The subquery returns data that is used as a condition by the outer query to determine which data needs to be retrieved. There is no limit to the number of nested subqueries you can create."),(0,u.yg)("p",null,"Like any query, a subquery can return records from a table as single-column single-record, single-column multiple-record, or multi-column multiple-record."),(0,u.yg)("h2",{id:"subquery-example-in-where-clause"},"Subquery example in Where clause"),(0,u.yg)("pre",null,(0,u.yg)("code",{parentName:"pre"},"SELECT * FROM sub_query_correlated_subquery1 WHERE k1 > (SELECT AVG(k1) FROM sub_query_correlated_subquery3) OR k1 < 10 order by k1, k2;\n")),(0,u.yg)("pre",null,(0,u.yg)("code",{parentName:"pre"},"select * from sub_query_correlated_subquery1 where sub_query_correlated_subquery1.k1 not in (select sub_query_correlated_subquery3.k3 from sub_query_correlated_subquery3 where sub_query_correlated_subquery3.v2 = sub_query_correlated_subquery1.k2) or k1 < 10 order by k1, k2\n")),(0,u.yg)("h2",{id:"subquery-example-in-join-clause"},"Subquery example in Join clause"),(0,u.yg)("pre",null,(0,u.yg)("code",{parentName:"pre"},"select t1.* from t1 left join t2 on t1.k2 = t2.k3 and t1.k1 in ( select t3.k1 from t3 where t1.k2 = t3.k2 ) or t1.k1 < 10 order by t1.k1, t1.k2;\nselect t1.* from t1 left join t2 on t1.k2 = t2.k3 and exists ( select t3.k1 from t3 where t1.k2 = t3.k2 ) or t1.k1 < 10 order by t1.k1, t1.k2;\n")))}p.isMDXComponent=!0}}]);