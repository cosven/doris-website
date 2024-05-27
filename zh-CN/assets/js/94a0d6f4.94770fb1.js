"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[94003],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>u});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),d=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(p.Provider,{value:n},e.children)},g="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=d(t),s=a,u=g["".concat(p,".").concat(s)]||g[s]||y[s]||l;return t?r.createElement(u,i(i({ref:n},c),{},{components:t})):r.createElement(u,i({ref:n},c))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=s;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[g]="string"==typeof e?e:a,i[1]=o;for(var d=2;d<l;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},599034:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=t(58168),a=(t(296540),t(15680));const l={title:"Java \u4ee3\u7801\u683c\u5f0f\u5316",language:"zh-CN"},i=void 0,o={unversionedId:"developer-guide/java-format-code",id:"developer-guide/java-format-code",title:"Java \u4ee3\u7801\u683c\u5f0f\u5316",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs-community/current/developer-guide/java-format-code.md",sourceDirName:"developer-guide",slug:"/developer-guide/java-format-code",permalink:"/zh-CN/community/developer-guide/java-format-code",draft:!1,tags:[],version:"current",frontMatter:{title:"Java \u4ee3\u7801\u683c\u5f0f\u5316",language:"zh-CN"},sidebar:"community",previous:{title:"Doris FE Mac \u5f00\u53d1\u73af\u5883\u642d\u5efa - IntelliJ IDEA",permalink:"/zh-CN/community/developer-guide/mac-dev/fe-idea-dev"},next:{title:"C++ \u4ee3\u7801\u683c\u5f0f\u5316",permalink:"/zh-CN/community/developer-guide/cpp-format-code"}},p={},d=[{value:"Import Order",id:"import-order",level:2},{value:"\u7f16\u8bd1\u65f6\u68c0\u67e5",id:"\u7f16\u8bd1\u65f6\u68c0\u67e5",level:2},{value:"Checkstyle \u63d2\u4ef6",id:"checkstyle-\u63d2\u4ef6",level:2},{value:"IDEA",id:"idea",level:3},{value:"VS Code",id:"vs-code",level:3},{value:"IDEA",id:"idea-1",level:2},{value:"\u81ea\u52a8\u683c\u5f0f\u5316",id:"\u81ea\u52a8\u683c\u5f0f\u5316",level:3},{value:"Rearrange Code",id:"rearrange-code",level:3},{value:"Remove unused header",id:"remove-unused-header",level:2}],c={toc:d},g="wrapper";function y(e){let{components:n,...l}=e;return(0,a.yg)(g,(0,r.A)({},c,l,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"java-\u4ee3\u7801\u683c\u5f0f\u5316"},"Java \u4ee3\u7801\u683c\u5f0f\u5316"),(0,a.yg)("p",null,"Doris \u4e2d Java \u90e8\u5206\u4ee3\u7801\u7684\u683c\u5f0f\u5316\u5de5\u4f5c\u901a\u5e38\u6709 IDE \u6765\u81ea\u52a8\u5b8c\u6210\u3002\u8fd9\u91cc\u4ec5\u5217\u4e3e\u901a\u7528\u683c\u5f0f\u89c4\u5219\uff0c\u5f00\u53d1\u8fd9\u9700\u8981\u6839\u636e\u683c\u5f0f\u89c4\u5219\uff0c\u5728\u4e0d\u540c IDE \u4e2d\u8bbe\u7f6e\u5bf9\u5e94\u7684\u4ee3\u7801\u98ce\u683c\u3002"),(0,a.yg)("h2",{id:"import-order"},"Import Order"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"org.apache.doris\n<blank line>\nthird party package\n<blank line>\nstandard java package\n<blank line>\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u7981\u6b62\u4f7f\u7528 ",(0,a.yg)("inlineCode",{parentName:"li"},"import *")),(0,a.yg)("li",{parentName:"ul"},"\u7981\u6b62\u4f7f\u7528 ",(0,a.yg)("inlineCode",{parentName:"li"},"import static"))),(0,a.yg)("h2",{id:"\u7f16\u8bd1\u65f6\u68c0\u67e5"},"\u7f16\u8bd1\u65f6\u68c0\u67e5"),(0,a.yg)("p",null,"\u73b0\u5728\uff0c\u5728\u4f7f\u7528",(0,a.yg)("inlineCode",{parentName:"p"},"maven"),"\u8fdb\u884c\u7f16\u8bd1\u65f6\uff0c\u4f1a\u9ed8\u8ba4\u8fdb\u884c",(0,a.yg)("inlineCode",{parentName:"p"},"CheckStyle"),"\u68c0\u67e5\u3002\u6b64\u68c0\u67e5\u4f1a\u7565\u5fae\u964d\u4f4e\u7f16\u8bd1\u901f\u5ea6\u3002\u5982\u679c\u60f3\u8df3\u8fc7\u6b64\u68c0\u67e5\uff0c\u8bf7\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u8fdb\u884c\u7f16\u8bd1"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mvn clean install -DskipTests -Dcheckstyle.skip\n")),(0,a.yg)("h2",{id:"checkstyle-\u63d2\u4ef6"},"Checkstyle \u63d2\u4ef6"),(0,a.yg)("p",null,"\u73b0\u5728\u7684 ",(0,a.yg)("inlineCode",{parentName:"p"},"CI")," \u4e4b\u4e2d\u4f1a\u6709 ",(0,a.yg)("inlineCode",{parentName:"p"},"formatter-check")," \u8fdb\u884c\u4ee3\u7801\u683c\u5f0f\u5316\u68c0\u6d4b\u3002"),(0,a.yg)("h3",{id:"idea"},"IDEA"),(0,a.yg)("p",null,"\u5982\u679c\u4f7f\u7528 ",(0,a.yg)("inlineCode",{parentName:"p"},"IDEA")," \u8fdb\u884c Java \u5f00\u53d1\uff0c\u8bf7\u5728\u8bbe\u7f6e\u4e2d\u5b89\u88c5 ",(0,a.yg)("inlineCode",{parentName:"p"},"Checkstyle-IDEA")," \u63d2\u4ef6\u3002"),(0,a.yg)("p",null,"\u5728 ",(0,a.yg)("inlineCode",{parentName:"p"},"Tools->Checkstyle")," \u7684 ",(0,a.yg)("inlineCode",{parentName:"p"},"Configuration File")," \u91cc\u70b9\u51fb ",(0,a.yg)("inlineCode",{parentName:"p"},"Use a local Checkstyle file"),"\uff0c\u9009\u62e9\u9879\u76ee\u7684 ",(0,a.yg)("inlineCode",{parentName:"p"},"fe/check/checkstyle/checkstyle.xml")," \u6587\u4ef6\u3002"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")," \u4fdd\u8bc1",(0,a.yg)("inlineCode",{parentName:"p"},"Checkstyle"),"\u7684\u7248\u672c\u57289.3\u53ca\u4ee5\u4e0a\uff08\u63a8\u8350\u4f7f\u7528\u6700\u65b0\u7248\u672c\uff09\u3002"),(0,a.yg)("p",null,(0,a.yg)("img",{src:t(162364).A,width:"753",height:"146"})),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u53ef\u4ee5\u4f7f\u7528 ",(0,a.yg)("inlineCode",{parentName:"strong"},"Checkstyle-IDEA")," \u63d2\u4ef6\u6765\u5bf9\u4ee3\u7801\u8fdb\u884c ",(0,a.yg)("inlineCode",{parentName:"strong"},"Checkstyle")," \u68c0\u6d4b"),"\u3002"),(0,a.yg)("p",null,(0,a.yg)("img",{src:t(210681).A,width:"870",height:"527"})),(0,a.yg)("h3",{id:"vs-code"},"VS Code"),(0,a.yg)("p",null,"\u5982\u679c\u4f7f\u7528 VS Code \u8fdb\u884c Java \u5f00\u53d1\uff0c\u8bf7\u5b89\u88c5 ",(0,a.yg)("inlineCode",{parentName:"p"},"Checkstyle for Java")," \u63d2\u4ef6\uff0c\u6309\u7167",(0,a.yg)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/java/java-linting"},"\u6587\u6863"),"\u91cc\u7684\u8bf4\u660e\u548c\u52a8\u56fe\u8fdb\u884c\u914d\u7f6e\u3002"),(0,a.yg)("h2",{id:"idea-1"},"IDEA"),(0,a.yg)("h3",{id:"\u81ea\u52a8\u683c\u5f0f\u5316"},"\u81ea\u52a8\u683c\u5f0f\u5316"),(0,a.yg)("p",null,"\u63a8\u8350\u4f7f\u7528 ",(0,a.yg)("inlineCode",{parentName:"p"},"IDEA")," \u7684\u81ea\u52a8\u683c\u5f0f\u5316\u529f\u80fd\u3002"),(0,a.yg)("p",null,"\u5728 ",(0,a.yg)("inlineCode",{parentName:"p"},"Preferences->Editor->Code Style->Java")," \u7684\u914d\u7f6e\u6807\u8bc6\u70b9\u51fb ",(0,a.yg)("inlineCode",{parentName:"p"},"Import Scheme"),"\uff0c\u70b9\u51fb ",(0,a.yg)("inlineCode",{parentName:"p"},"IntelliJ IDEA code style XML"),"\uff0c\u9009\u62e9\u9879\u76ee\u7684 ",(0,a.yg)("inlineCode",{parentName:"p"},"build-support/IntelliJ-code-format.xml")," \u6587\u4ef6\u3002"),(0,a.yg)("h3",{id:"rearrange-code"},"Rearrange Code"),(0,a.yg)("p",null,"Checkstyle \u4f1a\u6309\u7167 ",(0,a.yg)("a",{parentName:"p",href:"https://www.oracle.com/java/technologies/javase/codeconventions-fileorganization.html#1852"},"Class and Interface Declarations")," \u68c0\u6d4b\u4ee3\u7801\u7684 declarations \u987a\u5e8f\u3002"),(0,a.yg)("p",null,"\u5728\u5bfc\u5165\u4e0a\u9762\u7684 ",(0,a.yg)("inlineCode",{parentName:"p"},"build-support/IntelliJ-code-format.xml")," \u6587\u4ef6\u540e\uff0c\u4f7f\u7528 ",(0,a.yg)("inlineCode",{parentName:"p"},"Code/Rearrange Code")," \u81ea\u52a8\u5b8c\u6210\u6392\u5e8f"),(0,a.yg)("p",null,(0,a.yg)("img",{src:t(517093).A,width:"808",height:"862"})),(0,a.yg)("h2",{id:"remove-unused-header"},"Remove unused header"),(0,a.yg)("p",null,"\u9ed8\u8ba4\u5feb\u6377\u952e ",(0,a.yg)("strong",{parentName:"p"},"CTRL + ALT + O ---\x3e")," \u4ec5\u4ec5\u5220\u9664\u672a\u4f7f\u7528\u7684\u5bfc\u5165\u3002"),(0,a.yg)("p",null,"\u81ea\u52a8\u79fb\u9664\u5e76\u4e14 Reorder \uff1a"),(0,a.yg)("p",null,"\u70b9\u51fb ",(0,a.yg)("inlineCode",{parentName:"p"},"Preferences->Editor->General->Auto Import->Optimize Imports on the Fly")))}y.isMDXComponent=!0},210681:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/idea-checkstyle-plugin-cn-2898885f5fce33c971ab075a70919f0a.png"},162364:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/idea-checkstyle-version-8dd2c11f9b1ff58b36f42a13985e86d9.png"},517093:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/idea-rearrange-code-84eb3793733a97939b36cf0a30678101.png"}}]);