"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[19176],{15680:(e,t,r)=>{r.d(t,{xA:()=>m,yg:()=>g});var n=r(296540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=c(r),y=a,g=p["".concat(s,".").concat(y)]||p[y]||u[y]||l;return r?n.createElement(g,i(i({ref:t},m),{},{components:r})):n.createElement(g,i({ref:t},m))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=y;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},211412:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=r(58168),a=(r(296540),r(15680));const l={title:"CREATE-WORKLOAD-GROUP",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-WORKLOAD-GROUP",id:"sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-WORKLOAD-GROUP",title:"CREATE-WORKLOAD-GROUP",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-WORKLOAD-GROUP.md",sourceDirName:"sql-manual/sql-statements/Data-Definition-Statements/Create",slug:"/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-WORKLOAD-GROUP",permalink:"/zh-CN/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-WORKLOAD-GROUP",draft:!1,tags:[],version:"current",frontMatter:{title:"CREATE-WORKLOAD-GROUP",language:"zh-CN"},sidebar:"docs",previous:{title:"CREATE-RESOURCE",permalink:"/zh-CN/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-RESOURCE"},next:{title:"CREATE-SQL-BLOCK-RULE",permalink:"/zh-CN/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-SQL-BLOCK-RULE"}},s={},c=[{value:"CREATE-WORKLOAD-GROUP",id:"create-workload-group",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],m={toc:c},p="wrapper";function u(e){let{components:t,...r}=e;return(0,a.yg)(p,(0,n.A)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"create-workload-group"},"CREATE-WORKLOAD-GROUP"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"CREATE WORKLOAD GROUP"),(0,a.yg)("version",{since:"dev"}),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u521b\u5efa\u8d44\u6e90\u7ec4\u3002\u8d44\u6e90\u7ec4\u53ef\u5b9e\u73b0\u5355\u4e2abe\u4e0acpu\u8d44\u6e90\u548c\u5185\u5b58\u8d44\u6e90\u7684\u9694\u79bb\u3002"),(0,a.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE WORKLOAD GROUP [IF NOT EXISTS] "rg_name"\nPROPERTIES (\n    property_list\n);\n')),(0,a.yg)("p",null,"\u8bf4\u660e\uff1a"),(0,a.yg)("p",null,"property_list \u652f\u6301\u7684\u5c5e\u6027\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"cpu_share: \u5fc5\u9009\uff0c\u7528\u4e8e\u8bbe\u7f6e\u8d44\u6e90\u7ec4\u83b7\u53d6cpu\u65f6\u95f4\u7684\u591a\u5c11\uff0c\u53ef\u4ee5\u5b9e\u73b0cpu\u8d44\u6e90\u8f6f\u9694\u79bb\u3002cpu_share \u662f\u76f8\u5bf9\u503c\uff0c\u8868\u793a\u6b63\u5728\u8fd0\u884c\u7684\u8d44\u6e90\u7ec4\u53ef\u83b7\u53d6cpu\u8d44\u6e90\u7684\u6743\u91cd\u3002\u4f8b\u5982\uff0c\u7528\u6237\u521b\u5efa\u4e863\u4e2a\u8d44\u6e90\u7ec4 rg-a\u3001rg-b\u548crg-c\uff0ccpu_share \u5206\u522b\u4e3a 10\u300130\u300140\uff0c\u67d0\u4e00\u65f6\u523brg-a\u548crg-b\u6b63\u5728\u8dd1\u4efb\u52a1\uff0c\u800crg-c\u6ca1\u6709\u4efb\u52a1\uff0c\u6b64\u65f6rg-a\u53ef\u83b7\u5f97 (10 / (10 + 30)) = 25% \u7684cpu\u8d44\u6e90\uff0c\u800c\u8d44\u6e90\u7ec4rg-b\u53ef\u83b7\u5f9775%\u7684cpu\u8d44\u6e90\u3002\u5982\u679c\u7cfb\u7edf\u53ea\u6709\u4e00\u4e2a\u8d44\u6e90\u7ec4\u6b63\u5728\u8fd0\u884c\uff0c\u5219\u4e0d\u7ba1\u5176cpu_share\u7684\u503c\u4e3a\u591a\u5c11\uff0c\u5b83\u90fd\u53ef\u4ee5\u83b7\u53d6\u5168\u90e8\u7684cpu\u8d44\u6e90\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"memory_limit: \u5fc5\u9009\uff0c\u7528\u4e8e\u8bbe\u7f6e\u8d44\u6e90\u7ec4\u53ef\u4ee5\u4f7f\u7528be\u5185\u5b58\u7684\u767e\u5206\u6bd4\u3002\u8d44\u6e90\u7ec4\u5185\u5b58\u9650\u5236\u7684\u7edd\u5bf9\u503c\u4e3a\uff1a",(0,a.yg)("inlineCode",{parentName:"p"},"\u7269\u7406\u5185\u5b58 * mem_limit * memory_limit"),"\uff0c\u5176\u4e2d mem_limit \u4e3abe\u914d\u7f6e\u9879\u3002\u7cfb\u7edf\u6240\u6709\u8d44\u6e90\u7ec4\u7684 memory_limit\u603b\u5408\u4e0d\u53ef\u8d85\u8fc7100%\u3002\u8d44\u6e90\u7ec4\u5728\u7edd\u5927\u591a\u6570\u60c5\u51b5\u4e0b\u4fdd\u8bc1\u7ec4\u5185\u4efb\u52a1\u53ef\u4f7f\u7528memory_limit\u7684\u5185\u5b58\uff0c\u5f53\u8d44\u6e90\u7ec4\u5185\u5b58\u4f7f\u7528\u8d85\u51fa\u8be5\u9650\u5236\u540e\uff0c\u7ec4\u5185\u5185\u5b58\u5360\u7528\u8f83\u5927\u7684\u4efb\u52a1\u53ef\u80fd\u4f1a\u88abcancel\u4ee5\u91ca\u653e\u8d85\u51fa\u7684\u5185\u5b58\uff0c\u53c2\u8003 enable_memory_overcommit\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"enable_memory_overcommit: \u53ef\u9009\uff0c\u7528\u4e8e\u5f00\u542f\u8d44\u6e90\u7ec4\u5185\u5b58\u8f6f\u9694\u79bb\uff0c\u9ed8\u8ba4\u4e3afalse\u3002\u5982\u679c\u8bbe\u7f6e\u4e3afalse\uff0c\u5219\u8be5\u8d44\u6e90\u7ec4\u4e3a\u5185\u5b58\u786c\u9694\u79bb\uff0c\u7cfb\u7edf\u68c0\u6d4b\u5230\u8d44\u6e90\u7ec4\u5185\u5b58\u4f7f\u7528\u8d85\u51fa\u9650\u5236\u540e\u5c06\u7acb\u5373cancel\u7ec4\u5185\u5185\u5b58\u5360\u7528\u6700\u5927\u7684\u82e5\u5e72\u4e2a\u4efb\u52a1\uff0c\u4ee5\u91ca\u653e\u8d85\u51fa\u7684\u5185\u5b58\uff1b\u5982\u679c\u8bbe\u7f6e\u4e3atrue\uff0c\u5219\u8be5\u8d44\u6e90\u7ec4\u4e3a\u5185\u5b58\u8f6f\u9694\u79bb\uff0c\u5982\u679c\u7cfb\u7edf\u6709\u7a7a\u95f2\u5185\u5b58\u8d44\u6e90\u5219\u8be5\u8d44\u6e90\u7ec4\u5728\u8d85\u51famemory_limit\u7684\u9650\u5236\u540e\u53ef\u7ee7\u7eed\u4f7f\u7528\u7cfb\u7edf\u5185\u5b58\uff0c\u5728\u7cfb\u7edf\u603b\u5185\u5b58\u7d27\u5f20\u65f6\u4f1acancel\u7ec4\u5185\u5185\u5b58\u5360\u7528\u6700\u5927\u7684\u82e5\u5e72\u4e2a\u4efb\u52a1\uff0c\u91ca\u653e\u90e8\u5206\u8d85\u51fa\u7684\u5185\u5b58\u4ee5\u7f13\u89e3\u7cfb\u7edf\u5185\u5b58\u538b\u529b\u3002\u5efa\u8bae\u5728\u6709\u8d44\u6e90\u7ec4\u5f00\u542f\u8be5\u914d\u7f6e\u65f6\uff0c\u6240\u6709\u8d44\u6e90\u7ec4\u7684 memory_limit \u603b\u548c\u4f4e\u4e8e100%\uff0c\u5269\u4f59\u90e8\u5206\u7528\u4e8e\u8d44\u6e90\u7ec4\u5185\u5b58\u8d85\u53d1\u3002"))),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u521b\u5efa\u540d\u4e3ag1\u7684\u8d44\u6e90\u7ec4\uff1a"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},' create workload group if not exists g1\n properties (\n     "cpu_share"="10",\n     "memory_limit"="30%",\n     "enable_memory_overcommit"="true"\n );\n')))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"CREATE, WORKLOAD, GROUP\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);