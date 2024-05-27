"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[87396],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>f});var r=t(296540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),d=o,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},553311:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=t(58168),o=(t(296540),t(15680));const a={title:"mod",language:"en"},i=void 0,l={unversionedId:"sql-manual/sql-functions/math-functions/mod",id:"version-1.2/sql-manual/sql-functions/math-functions/mod",title:"mod",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/math-functions/mod.md",sourceDirName:"sql-manual/sql-functions/math-functions",slug:"/sql-manual/sql-functions/math-functions/mod",permalink:"/docs/1.2/sql-manual/sql-functions/math-functions/mod",draft:!1,tags:[],version:"1.2",frontMatter:{title:"mod",language:"en"},sidebar:"docs",previous:{title:"random",permalink:"/docs/1.2/sql-manual/sql-functions/math-functions/random"},next:{title:"running_difference",permalink:"/docs/1.2/sql-manual/sql-functions/math-functions/running_difference"}},s={},c=[{value:"mod",id:"mod",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c},u="wrapper";function m(e){let{components:n,...t}=e;return(0,o.yg)(u,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"mod"},"mod"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"mod(col_a, col_b)"),"  "),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"column")," support type\uff1a",(0,o.yg)("inlineCode",{parentName:"p"},"TINYINT")," ",(0,o.yg)("inlineCode",{parentName:"p"},"SMALLINT")," ",(0,o.yg)("inlineCode",{parentName:"p"},"INT")," ",(0,o.yg)("inlineCode",{parentName:"p"},"BIGINT")," ",(0,o.yg)("inlineCode",{parentName:"p"},"LARGEINT")," ",(0,o.yg)("inlineCode",{parentName:"p"},"FLOAT")," ",(0,o.yg)("inlineCode",{parentName:"p"},"DOUBLE")," ",(0,o.yg)("inlineCode",{parentName:"p"},"DECIMAL")),(0,o.yg)("p",null,"Find the remainder of a/b. For floating-point types, use the fmod function."),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> select mod(10, 3);\n+------------+\n| mod(10, 3) |\n+------------+\n|          1 |\n+------------+\n\nmysql> select fmod(10.1, 3.2);\n+-----------------+\n| fmod(10.1, 3.2) |\n+-----------------+\n|      0.50000024 |\n+-----------------+\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"MOD\uff0cFMOD\n")))}m.isMDXComponent=!0}}]);