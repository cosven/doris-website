"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[89028],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>d});var r=t(296540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=r.createContext({}),c=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(a.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),y=i,d=p["".concat(a,".").concat(y)]||p[y]||f[y]||o;return t?r.createElement(d,l(l({ref:n},u),{},{components:t})):r.createElement(d,l({ref:n},u))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=y;var s={};for(var a in n)hasOwnProperty.call(n,a)&&(s[a]=n[a]);s.originalType=e,s[p]="string"==typeof e?e:i,l[1]=s;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},356626:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(58168),i=(t(296540),t(15680));const o={title:"BITXOR",language:"en"},l=void 0,s={unversionedId:"sql-manual/sql-functions/bitwise-functions/bitxor",id:"version-2.1/sql-manual/sql-functions/bitwise-functions/bitxor",title:"BITXOR",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-functions/bitwise-functions/bitxor.md",sourceDirName:"sql-manual/sql-functions/bitwise-functions",slug:"/sql-manual/sql-functions/bitwise-functions/bitxor",permalink:"/docs/sql-manual/sql-functions/bitwise-functions/bitxor",draft:!1,tags:[],version:"2.1",frontMatter:{title:"BITXOR",language:"en"},sidebar:"docs",previous:{title:"BITOR",permalink:"/docs/sql-manual/sql-functions/bitwise-functions/bitor"},next:{title:"BITNOT",permalink:"/docs/sql-manual/sql-functions/bitwise-functions/bitnot"}},a={},c=[{value:"bitxor",id:"bitxor",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function f(e){let{components:n,...t}=e;return(0,i.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"bitxor"},"bitxor"),(0,i.yg)("h3",{id:"description"},"description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"BITXOR(Integer-type lhs, Integer-type rhs)")),(0,i.yg)("p",null,"Returns the result of the XOR operation of two integers."),(0,i.yg)("p",null,"Integer range: TINYINT\u3001SMALLINT\u3001INT\u3001BIGINT\u3001LARGEINT"),(0,i.yg)("h3",{id:"example"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql> select bitxor(3,5) ans;\n+------+\n| ans  |\n+------+\n|    7 |\n+------+\n\nmysql> select bitxor(1,7) ans;\n+------+\n| ans  |\n+------+\n|    6 |\n+------+\n")),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"BITXOR\n")))}f.isMDXComponent=!0}}]);