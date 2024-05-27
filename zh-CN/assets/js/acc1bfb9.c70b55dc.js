"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[77124],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>d});var n=r(296540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},E=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),E=a,d=u["".concat(i,".").concat(E)]||u[E]||m[E]||l;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=E;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}E.displayName="MDXCreateElement"},482715:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=r(58168),a=(r(296540),r(15680));const l={title:"ALTER-SYSTEM-ADD-FOLLOWER",language:"zh-CN"},o=void 0,s={unversionedId:"sql-manual/sql-reference/Cluster-Management-Statements/ALTER-SYSTEM-ADD-FOLLOWER",id:"version-2.0/sql-manual/sql-reference/Cluster-Management-Statements/ALTER-SYSTEM-ADD-FOLLOWER",title:"ALTER-SYSTEM-ADD-FOLLOWER",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-reference/Cluster-Management-Statements/ALTER-SYSTEM-ADD-FOLLOWER.md",sourceDirName:"sql-manual/sql-reference/Cluster-Management-Statements",slug:"/sql-manual/sql-reference/Cluster-Management-Statements/ALTER-SYSTEM-ADD-FOLLOWER",permalink:"/zh-CN/docs/2.0/sql-manual/sql-reference/Cluster-Management-Statements/ALTER-SYSTEM-ADD-FOLLOWER",draft:!1,tags:[],version:"2.0",frontMatter:{title:"ALTER-SYSTEM-ADD-FOLLOWER",language:"zh-CN"},sidebar:"docs",previous:{title:"WIDTH_BUCKET",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/width-bucket"},next:{title:"ALTER-SYSTEM-ADD-OBSERVER",permalink:"/zh-CN/docs/2.0/sql-manual/sql-reference/Cluster-Management-Statements/ALTER-SYSTEM-ADD-OBSERVER"}},i={},c=[{value:"ALTER-SYSTEM-ADD-FOLLOWER",id:"alter-system-add-follower",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"alter-system-add-follower"},"ALTER-SYSTEM-ADD-FOLLOWER"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"ALTER SYSTEM ADD FOLLOWER"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u8be5\u8bed\u53e5\u662f\u589e\u52a0 FRONTEND \u7684 FOLLOWER \u89d2\u8272\u7684\u8282\u70b9,\uff08\u4ec5\u7ba1\u7406\u5458\u4f7f\u7528\uff01\uff09"),(0,a.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER SYSTEM ADD FOLLOWER "follower_host:edit_log_port"\n')),(0,a.yg)("p",null,"\u8bf4\u660e\uff1a"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"host \u53ef\u4ee5\u662f\u4e3b\u673a\u540d\u6216\u8005ip\u5730\u5740"),(0,a.yg)("li",{parentName:"ol"},"edit_log_port : edit_log_port \u5728\u5176\u914d\u7f6e\u6587\u4ef6 fe.conf")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u6dfb\u52a0\u4e00\u4e2a FOLLOWER\u8282\u70b9"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER SYSTEM ADD FOLLOWER "host_ip:9010"\n')))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"ALTER, SYSTEM, ADD, FOLLOWER, ALTER SYSTEM\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);