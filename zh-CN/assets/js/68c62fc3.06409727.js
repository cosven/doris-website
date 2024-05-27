"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[46128],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>g});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),y=a,g=u["".concat(i,".").concat(y)]||u[y]||m[y]||l;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=y;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},414121:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var r=n(58168),a=(n(296540),n(15680));const l={title:"REVOKE",language:"zh-CN"},o=void 0,c={unversionedId:"sql-manual/sql-reference/Account-Management-Statements/REVOKE",id:"version-2.0/sql-manual/sql-reference/Account-Management-Statements/REVOKE",title:"REVOKE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-reference/Account-Management-Statements/REVOKE.md",sourceDirName:"sql-manual/sql-reference/Account-Management-Statements",slug:"/sql-manual/sql-reference/Account-Management-Statements/REVOKE",permalink:"/zh-CN/docs/2.0/sql-manual/sql-reference/Account-Management-Statements/REVOKE",draft:!1,tags:[],version:"2.0",frontMatter:{title:"REVOKE",language:"zh-CN"},sidebar:"docs",previous:{title:"GRANT",permalink:"/zh-CN/docs/2.0/sql-manual/sql-reference/Account-Management-Statements/GRANT"},next:{title:"DROP-ROLE",permalink:"/zh-CN/docs/2.0/sql-manual/sql-reference/Account-Management-Statements/DROP-ROLE"}},i={},s=[{value:"REVOKE",id:"revoke",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"revoke"},"REVOKE"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"REVOKE"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"REVOKE \u547d\u4ee4\u6709\u5982\u4e0b\u529f\u80fd\uff1a"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u64a4\u9500\u67d0\u7528\u6237\u6216\u67d0\u89d2\u8272\u7684\u6307\u5b9a\u6743\u9650\u3002"),(0,a.yg)("li",{parentName:"ol"},"\u64a4\u9500\u5148\u524d\u6388\u4e88\u67d0\u7528\u6237\u7684\u6307\u5b9a\u89d2\u8272\u3002")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a"),(0,a.yg)("p",{parentName:"blockquote"},'2.0\u53ca\u4e4b\u540e\u7248\u672c\u652f\u6301"\u64a4\u9500\u5148\u524d\u6388\u4e88\u67d0\u7528\u6237\u7684\u6307\u5b9a\u89d2\u8272"')),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"REVOKE privilege_list ON db_name[.tbl_name] FROM user_identity [ROLE role_name]\n\nREVOKE privilege_list ON RESOURCE resource_name FROM user_identity [ROLE role_name]\n\nREVOKE role_list FROM user_identity\n")),(0,a.yg)("p",null,"user_identity\uff1a"),(0,a.yg)("p",null,"\u8fd9\u91cc\u7684 user_identity \u8bed\u6cd5\u540c CREATE USER\u3002\u4e14\u5fc5\u987b\u4e3a\u4f7f\u7528 CREATE USER \u521b\u5efa\u8fc7\u7684 user_identity\u3002user_identity \u4e2d\u7684host\u53ef\u4ee5\u662f\u57df\u540d\uff0c\u5982\u679c\u662f\u57df\u540d\u7684\u8bdd\uff0c\u6743\u9650\u7684\u64a4\u9500\u65f6\u95f4\u53ef\u80fd\u4f1a\u67091\u5206\u949f\u5de6\u53f3\u7684\u5ef6\u8fdf\u3002"),(0,a.yg)("p",null,"\u4e5f\u53ef\u4ee5\u64a4\u9500\u6307\u5b9a\u7684 ROLE \u7684\u6743\u9650\uff0c\u6267\u884c\u7684 ROLE \u5fc5\u987b\u5b58\u5728\u3002"),(0,a.yg)("p",null,"role_list \u662f\u9700\u8981\u64a4\u9500\u7684\u89d2\u8272\u5217\u8868\uff0c\u4ee5\u9017\u53f7\u5206\u9694\uff0c\u6307\u5b9a\u7684\u89d2\u8272\u5fc5\u987b\u5b58\u5728\u3002"),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u64a4\u9500\u7528\u6237 jack \u6570\u636e\u5e93 testDb \u7684\u6743\u9650"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"REVOKE SELECT_PRIV ON db1.* FROM 'jack'@'192.%';\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u64a4\u9500\u7528\u6237 jack \u8d44\u6e90 spark_resource \u7684\u4f7f\u7528\u6743\u9650"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"REVOKE USAGE_PRIV ON RESOURCE 'spark_resource' FROM 'jack'@'192.%';\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u64a4\u9500\u5148\u524d\u6388\u4e88jack\u7684\u89d2\u8272role1\u548crole2"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"REVOKE 'role1','role2' FROM 'jack'@'192.%';\n")))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"REVOKE\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);