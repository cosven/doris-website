"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[3128],{15680:(e,r,t)=>{t.d(r,{xA:()=>c,yg:()=>d});var n=t(296540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),p=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(i.Provider,{value:r},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),g=a,d=u["".concat(i,".").concat(g)]||u[g]||y[g]||o;return t?n.createElement(d,l(l({ref:r},c),{},{components:t})):n.createElement(d,l({ref:r},c))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=g;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s[u]="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},382263:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=t(58168),a=(t(296540),t(15680));const o={title:"Release 1.2.8",language:"zh-CN"},l=void 0,s={unversionedId:"releasenotes/release-1.2.8",id:"releasenotes/release-1.2.8",title:"Release 1.2.8",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/releasenotes/release-1.2.8.md",sourceDirName:"releasenotes",slug:"/releasenotes/release-1.2.8",permalink:"/zh-CN/docs/dev/releasenotes/release-1.2.8",draft:!1,tags:[],version:"current",frontMatter:{title:"Release 1.2.8",language:"zh-CN"},sidebar:"docs",previous:{title:"Release 2.0.0",permalink:"/zh-CN/docs/dev/releasenotes/release-2.0.0"},next:{title:"Release 1.2.7",permalink:"/zh-CN/docs/dev/releasenotes/release-1.2.7"}},i={},p=[{value:"\u6539\u8fdb\u548c\u4f18\u5316",id:"\u6539\u8fdb\u548c\u4f18\u5316",level:2}],c={toc:p},u="wrapper";function y(e){let{components:r,...t}=e;return(0,a.yg)(u,(0,n.A)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"\u4eb2\u7231\u7684\u793e\u533a\u5c0f\u4f19\u4f34\u4eec\uff0c",(0,a.yg)("a",{parentName:"p",href:"https://doris.apache.org/download/"},"Apache Doris 1.2.8")," \u7248\u672c\u5df2\u4e8e 2024 \u5e74 3 \u6708 09 \u65e5\u6b63\u5f0f\u4e0e\u5927\u5bb6\u89c1\u9762\u3002\u8be5\u7248\u672c\u5bf9\u591a\u4e2a\u529f\u80fd\u8fdb\u884c\u4e86\u66f4\u65b0\u4f18\u5316\uff0c\u65e8\u5728\u66f4\u597d\u5730\u6ee1\u8db3\u7528\u6237\u7684\u9700\u6c42, \u6b22\u8fce\u5927\u5bb6\u4e0b\u8f7d\u4f53\u9a8c\u3002"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u5b98\u7f51\u4e0b\u8f7d\uff1a")," ",(0,a.yg)("a",{parentName:"p",href:"https://doris.apache.org/download/"},"https://doris.apache.org/download/")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"GitHub \u4e0b\u8f7d\uff1a")," ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/releases"},"https://github.com/apache/doris/releases")),(0,a.yg)("h2",{id:"\u6539\u8fdb\u548c\u4f18\u5316"},"\u6539\u8fdb\u548c\u4f18\u5316"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u4fee\u590d\u82e5\u5e72\u67e5\u8be2\u6267\u884c\u7684\u95ee\u9898"),(0,a.yg)("li",{parentName:"ul"},"\u4fee\u590d\u82e5\u5e72 Spark Load \u76f8\u5173\u7684\u95ee\u9898"),(0,a.yg)("li",{parentName:"ul"},"\u4fee\u590d\u82e5\u5e72 Parquet/ORC \u6587\u4ef6\u8bfb\u53d6\u7684\u95ee\u9898\u3002"),(0,a.yg)("li",{parentName:"ul"},'\u4fee\u590d Broker \u8fdb\u884c\u56e0\u4e3a "FileSystem closed" \u9519\u8bef\u5bfc\u81f4\u8fd0\u884c\u5931\u8d25\u7684\u95ee\u9898\u3002'),(0,a.yg)("li",{parentName:"ul"},"\u4fee\u590d\u82e5\u5e72 Broker Load \u76f8\u5173\u7684\u95ee\u9898\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u4fee\u590d\u82e5\u5e72 CTAS \u64cd\u4f5c\u76f8\u5173\u7684\u95ee\u9898\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u4fee\u590d\u82e5\u5e72\u5907\u4efd\u6062\u590d\u529f\u80fd\u76f8\u5173\u7684\u95ee\u9898\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u4fee\u590d\u82e5\u5e72\u5bfc\u51fa\uff08Export/Outfile\uff09\u76f8\u5173\u7684\u95ee\u9898\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u4fee\u590d ",(0,a.yg)("inlineCode",{parentName:"li"},"replayEraseTable")," \u65b9\u6cd5\u5bfc\u81f4 FE \u65e0\u6cd5\u542f\u52a8\u7684\u95ee\u9898\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u4f18\u5316 Iceberg Catalog \u5143\u6570\u636e\u7f13\u5b58\u7684\u6027\u80fd\u3002"),(0,a.yg)("li",{parentName:"ul"},"Audit Log \u4e2d\u65b0\u589e Catalog \u5217\u3002")))}y.isMDXComponent=!0}}]);