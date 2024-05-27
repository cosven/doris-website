"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[5053],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>m});var n=r(296540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},O=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),O=a,m=u["".concat(s,".").concat(O)]||u[O]||d[O]||o;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=O;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}O.displayName="MDXCreateElement"},665411:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(58168),a=(r(296540),r(15680));const o={title:"DROP-REPOSITORY",language:"en"},l=void 0,i={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/DROP-REPOSITORY",id:"version-2.0/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/DROP-REPOSITORY",title:"DROP-REPOSITORY",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/DROP-REPOSITORY.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/DROP-REPOSITORY",permalink:"/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/DROP-REPOSITORY",draft:!1,tags:[],version:"2.0",frontMatter:{title:"DROP-REPOSITORY",language:"en"},sidebar:"docs",previous:{title:"CREATE-REPOSITORY",permalink:"/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/CREATE-REPOSITORY"},next:{title:"BACKUP",permalink:"/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/BACKUP"}},s={},c=[{value:"DROP-REPOSITORY",id:"drop-repository",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"drop-repository"},"DROP-REPOSITORY"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"DROP REPOSITORY"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"This statement is used to delete a created repository. Only root or superuser users can delete repositories."),(0,a.yg)("p",null,"grammar:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"DROP REPOSITORY `repo_name`;\n")),(0,a.yg)("p",null,"illustrate:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Deleting a warehouse just deletes the warehouse's mapping in Palo, not the actual warehouse data. Once deleted, it can be mapped to the repository again by specifying the same broker and LOCATION.")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Delete the repository named bos_repo:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"DROP REPOSITORY `bos_repo`;\n")),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"}," DROP, REPOSITORY\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}d.isMDXComponent=!0}}]);