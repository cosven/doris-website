"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[47201],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>d});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),f=a,d=p["".concat(s,".").concat(f)]||p[f]||y[f]||o;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},190271:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(58168),a=(n(296540),n(15680));const o={title:"ST_Y",language:"zh-CN"},i=void 0,l={unversionedId:"sql-manual/sql-functions/spatial-functions/st-y",id:"version-2.1/sql-manual/sql-functions/spatial-functions/st-y",title:"ST_Y",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/spatial-functions/st-y.md",sourceDirName:"sql-manual/sql-functions/spatial-functions",slug:"/sql-manual/sql-functions/spatial-functions/st-y",permalink:"/zh-CN/docs/sql-manual/sql-functions/spatial-functions/st-y",draft:!1,tags:[],version:"2.1",frontMatter:{title:"ST_Y",language:"zh-CN"},sidebar:"docs",previous:{title:"ST_X",permalink:"/zh-CN/docs/sql-manual/sql-functions/spatial-functions/st-x"},next:{title:"ST_CIRCLE",permalink:"/zh-CN/docs/sql-manual/sql-functions/spatial-functions/st-circle"}},s={},c=[{value:"ST_Y",id:"st_y",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function y(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"st_y"},"ST_Y"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"DOUBLE ST_Y(POINT point)")),(0,a.yg)("p",null,"\u5f53point\u662f\u4e00\u4e2a\u5408\u6cd5\u7684POINT\u7c7b\u578b\u65f6\uff0c\u8fd4\u56de\u5bf9\u5e94\u7684Y\u5750\u6807\u503c"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> SELECT ST_Y(ST_Point(24.7, 56.7));\n+----------------------------+\n| st_y(st_point(24.7, 56.7)) |\n+----------------------------+\n|                       56.7 |\n+----------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"ST_Y,ST,Y"))}y.isMDXComponent=!0}}]);