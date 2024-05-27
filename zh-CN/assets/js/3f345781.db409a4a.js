"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[63916],{15680:(e,n,r)=>{r.d(n,{xA:()=>u,yg:()=>m});var t=r(296540);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=t.createContext({}),c=function(e){var n=t.useContext(a),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(a.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),f=o,m=p["".concat(a,".").concat(f)]||p[f]||d[f]||i;return r?t.createElement(m,s(s({ref:n},u),{},{components:r})):t.createElement(m,s({ref:n},u))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=f;var l={};for(var a in n)hasOwnProperty.call(n,a)&&(l[a]=n[a]);l.originalType=e,l[p]="string"==typeof e?e:o,s[1]=l;for(var c=2;c<i;c++)s[c]=r[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},399011:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=r(58168),o=(r(296540),r(15680));const i={title:"DEGREES",language:"zh-CN"},s=void 0,l={unversionedId:"sql-manual/sql-functions/numeric-functions/degrees",id:"sql-manual/sql-functions/numeric-functions/degrees",title:"DEGREES",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/numeric-functions/degrees.md",sourceDirName:"sql-manual/sql-functions/numeric-functions",slug:"/sql-manual/sql-functions/numeric-functions/degrees",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/numeric-functions/degrees",draft:!1,tags:[],version:"current",frontMatter:{title:"DEGREES",language:"zh-CN"},sidebar:"docs",previous:{title:"POW",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/numeric-functions/pow"},next:{title:"RADIANS",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/numeric-functions/radians"}},a={},c=[{value:"degrees",id:"degrees",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function d(e){let{components:n,...r}=e;return(0,o.yg)(p,(0,t.A)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"degrees"},"degrees"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"DOUBLE degrees(DOUBLE x)"),"\n\u8fd4\u56de",(0,o.yg)("inlineCode",{parentName:"p"},"x"),"\u7684\u5ea6, \u4ece\u5f27\u5ea6\u8f6c\u6362\u4e3a\u5ea6."),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> select degrees(0);\n+--------------+\n| degrees(0.0) |\n+--------------+\n|            0 |\n+--------------+\nmysql> select degrees(2);\n+--------------------+\n| degrees(2.0)       |\n+--------------------+\n| 114.59155902616465 |\n+--------------------+\nmysql> select degrees(Pi());\n+---------------+\n| degrees(pi()) |\n+---------------+\n|           180 |\n+---------------+\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"DEGREES\n")))}d.isMDXComponent=!0}}]);