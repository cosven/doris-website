"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[48129],{15680:(e,n,t)=>{t.d(n,{xA:()=>g,yg:()=>c});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),i=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},g=function(e){var n=i(e.components);return r.createElement(u.Provider,{value:n},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,g=p(e,["components","mdxType","originalType","parentName"]),d=i(t),s=a,c=d["".concat(u,".").concat(s)]||d[s]||y[s]||l;return t?r.createElement(c,o(o({ref:n},g),{},{components:t})):r.createElement(c,o({ref:n},g))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=s;var p={};for(var u in n)hasOwnProperty.call(n,u)&&(p[u]=n[u]);p.originalType=e,p[d]="string"==typeof e?e:a,o[1]=p;for(var i=2;i<l;i++)o[i]=t[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},255460:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var r=t(58168),a=(t(296540),t(15680));const l={title:"\u4e3b\u952e\u6a21\u578b\u7684\u5bfc\u5165\u66f4\u65b0",language:"zh-CN"},o=void 0,p={unversionedId:"data-operate/update/update-of-unique-model",id:"data-operate/update/update-of-unique-model",title:"\u4e3b\u952e\u6a21\u578b\u7684\u5bfc\u5165\u66f4\u65b0",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/data-operate/update/update-of-unique-model.md",sourceDirName:"data-operate/update",slug:"/data-operate/update/update-of-unique-model",permalink:"/zh-CN/docs/dev/data-operate/update/update-of-unique-model",draft:!1,tags:[],version:"current",frontMatter:{title:"\u4e3b\u952e\u6a21\u578b\u7684\u5bfc\u5165\u66f4\u65b0",language:"zh-CN"},sidebar:"docs",previous:{title:"\u4e3b\u952e\u6a21\u578b\u7684 Update \u66f4\u65b0",permalink:"/zh-CN/docs/dev/data-operate/update/unique-update"},next:{title:"\u805a\u5408\u6a21\u578b\u7684\u5bfc\u5165\u66f4\u65b0",permalink:"/zh-CN/docs/dev/data-operate/update/update-of-aggregate-model"}},u={},i=[{value:"\u6240\u6709\u5217\u66f4\u65b0",id:"\u6240\u6709\u5217\u66f4\u65b0",level:2},{value:"\u90e8\u5206\u5217\u66f4\u65b0",id:"\u90e8\u5206\u5217\u66f4\u65b0",level:2},{value:"\u9002\u7528\u573a\u666f",id:"\u9002\u7528\u573a\u666f",level:3},{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3},{value:"\u4f7f\u7528\u6ce8\u610f",id:"\u4f7f\u7528\u6ce8\u610f",level:3}],g={toc:i},d="wrapper";function y(e){let{components:n,...t}=e;return(0,a.yg)(d,(0,r.A)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"\u8fd9\u7bc7\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd Doris \u4e3b\u952e\u6a21\u578b\u4e0a\u57fa\u4e8e\u5bfc\u5165\u7684\u66f4\u65b0\u3002"),(0,a.yg)("h2",{id:"\u6240\u6709\u5217\u66f4\u65b0"},"\u6240\u6709\u5217\u66f4\u65b0"),(0,a.yg)("p",null,"\u4f7f\u7528 Doris \u652f\u6301\u7684 Stream Load\uff0cBroker Load\uff0cRoutine Load\uff0cInsert Into \u7b49\u5bfc\u5165\u65b9\u5f0f\uff0c\u5f80\u4e3b\u952e\u6a21\u578b\uff08Unique \u6a21\u578b\uff09\u4e2d\u8fdb\u884c\u6570\u636e\u5bfc\u5165\u65f6\uff0c\u5982\u679c\u6ca1\u6709\u76f8\u5e94\u4e3b\u952e\u7684\u6570\u636e\u884c\uff0c\u5c31\u6267\u884c\u63d2\u5165\u65b0\u7684\u6570\u636e\uff0c\u5982\u679c\u6709\u76f8\u5e94\u4e3b\u952e\u7684\u6570\u636e\u884c\uff0c\u5c31\u8fdb\u884c\u66f4\u65b0\u3002\u4e5f\u5c31\u662f\u8bf4\uff0cDoris \u4e3b\u952e\u6a21\u578b\u7684\u5bfc\u5165\u662f\u4e00\u79cd\u201cupsert\u201d\u6a21\u5f0f\u3002\u57fa\u4e8e\u5bfc\u5165\uff0c\u5bf9\u5df2\u6709\u8bb0\u5f55\u7684\u66f4\u65b0\uff0c\u9ed8\u8ba4\u548c\u5bfc\u5165\u4e00\u4e2a\u65b0\u8bb0\u5f55\u662f\u5b8c\u5168\u4e00\u6837\u7684\uff0c\u6240\u4ee5\uff0c\u8fd9\u91cc\u53ef\u4ee5\u53c2\u8003\u6570\u636e\u5bfc\u5165\u7684\u6587\u6863\u90e8\u5206\u3002"),(0,a.yg)("h2",{id:"\u90e8\u5206\u5217\u66f4\u65b0"},"\u90e8\u5206\u5217\u66f4\u65b0"),(0,a.yg)("p",null,"\u90e8\u5206\u5217\u66f4\u65b0\uff0c\u4e3b\u8981\u662f\u6307\u76f4\u63a5\u66f4\u65b0\u8868\u4e2d\u67d0\u4e9b\u5b57\u6bb5\u503c\uff0c\u800c\u4e0d\u662f\u5168\u90e8\u7684\u5b57\u6bb5\u503c\u3002\u53ef\u4ee5\u91c7\u7528 Update \u8bed\u53e5\u6765\u8fdb\u884c\u66f4\u65b0\uff0c\u8fd9\u79cd Update \u8bed\u53e5\u4e00\u822c\u91c7\u7528\u5148\u5c06\u6574\u884c\u6570\u636e\u8bfb\u51fa\uff0c\u7136\u540e\u518d\u66f4\u65b0\u90e8\u5206\u5b57\u6bb5\u503c\uff0c\u518d\u5199\u56de\u3002\u8fd9\u79cd\u8bfb\u5199\u4e8b\u52a1\u975e\u5e38\u8017\u65f6\uff0c\u5e76\u4e14\u4e0d\u9002\u5408\u5927\u6279\u91cf\u6570\u636e\u5199\u5165\u3002Doris \u5728\u4e3b\u952e\u6a21\u578b\u7684\u5bfc\u5165\u66f4\u65b0\uff0c\u63d0\u4f9b\u4e86\u53ef\u4ee5\u76f4\u63a5\u63d2\u5165\u6216\u8005\u66f4\u65b0\u90e8\u5206\u5217\u6570\u636e\u7684\u529f\u80fd\uff0c\u4e0d\u9700\u8981\u5148\u8bfb\u53d6\u6574\u884c\u6570\u636e\uff0c\u8fd9\u6837\u66f4\u65b0\u6548\u7387\u5c31\u5927\u5e45\u63d0\u5347\u4e86\u3002"),(0,a.yg)("admonition",{type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"\u6ce8\u610f"),(0,a.yg)("ol",{parentName:"admonition"},(0,a.yg)("li",{parentName:"ol"},"2.0 \u7248\u672c\u4ec5\u5728 Unique Key \u7684 Merge-on-Write \u5b9e\u73b0\u4e2d\u652f\u6301\u4e86\u90e8\u5206\u5217\u66f4\u65b0\u80fd\u529b"),(0,a.yg)("li",{parentName:"ol"},"\u4ece 2.0.2 \u7248\u672c\u5f00\u59cb\uff0c\u652f\u6301\u4f7f\u7528 INSERT INTO \u8fdb\u884c\u90e8\u5206\u5217\u66f4\u65b0"))),(0,a.yg)("h3",{id:"\u9002\u7528\u573a\u666f"},"\u9002\u7528\u573a\u666f"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u5b9e\u65f6\u7684\u52a8\u6001\u5217\u66f4\u65b0\uff0c\u9700\u8981\u5728\u8868\u4e2d\u5b9e\u65f6\u7684\u9ad8\u9891\u66f4\u65b0\u67d0\u4e9b\u5b57\u6bb5\u503c\u3002\u4f8b\u5982\u7528\u6237\u6807\u7b7e\u8868\u4e2d\u6709\u4e00\u4e9b\u5173\u4e8e\u7528\u6237\u6700\u65b0\u884c\u4e3a\u4fe1\u606f\u7684\u5b57\u6bb5\u9700\u8981\u5b9e\u65f6\u7684\u66f4\u65b0\uff0c\u4ee5\u5b9e\u73b0\u5e7f\u544a/\u63a8\u8350\u7b49\u7cfb\u7edf\u80fd\u591f\u636e\u5176\u8fdb\u884c\u5b9e\u65f6\u7684\u5206\u6790\u548c\u51b3\u7b56\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u5c06\u591a\u5f20\u6e90\u8868\u62fc\u63a5\u6210\u4e00\u5f20\u5927\u5bbd\u8868")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u6570\u636e\u4fee\u6b63"))),(0,a.yg)("h3",{id:"\u4f7f\u7528\u65b9\u5f0f"},"\u4f7f\u7528\u65b9\u5f0f"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u5efa\u8868")),(0,a.yg)("p",null,"\u5efa\u8868\u65f6\u9700\u8981\u6307\u5b9a\u5982\u4e0b property\uff0c\u4ee5\u5f00\u542f Merge-on-Write \u5b9e\u73b0"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-Plain"},"enable_unique_key_merge_on_write = true\n")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"StreamLoad/BrokerLoad/RoutineLoad")),(0,a.yg)("p",null,"\u5982\u679c\u4f7f\u7528\u7684\u662f Stream Load/Broker Load/Routine Load\uff0c\u5728\u5bfc\u5165\u65f6\u6dfb\u52a0\u5982\u4e0b header"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-Plain"},"partial_columns:true\n")),(0,a.yg)("p",null,"\u540c\u65f6\u5728",(0,a.yg)("inlineCode",{parentName:"p"},"columns"),"\u4e2d\u6307\u5b9a\u8981\u5bfc\u5165\u7684\u5217\uff08\u5fc5\u987b\u5305\u542b\u6240\u6709 key \u5217\uff0c\u4e0d\u7136\u65e0\u6cd5\u66f4\u65b0\uff09"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Flink Connector")),(0,a.yg)("p",null,"\u5982\u679c\u4f7f\u7528 Flink Connector, \u9700\u8981\u6dfb\u52a0\u5982\u4e0b\u914d\u7f6e\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-Plain"},"'sink.properties.partial_columns' = 'true',\n")),(0,a.yg)("p",null,"\u540c\u65f6\u5728",(0,a.yg)("inlineCode",{parentName:"p"},"sink.properties.column"),"\u4e2d\u6307\u5b9a\u8981\u5bfc\u5165\u7684\u5217\uff08\u5fc5\u987b\u5305\u542b\u6240\u6709 key \u5217\uff0c\u4e0d\u7136\u65e0\u6cd5\u66f4\u65b0\uff09"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"INSERT INTO")),(0,a.yg)("p",null,"\u5728\u6240\u6709\u7684\u6570\u636e\u6a21\u578b\u4e2d\uff0c",(0,a.yg)("inlineCode",{parentName:"p"},"INSERT INTO")," \u7ed9\u5b9a\u4e00\u90e8\u5206\u5217\u65f6\u9ed8\u8ba4\u884c\u4e3a\u90fd\u662f\u6574\u884c\u5199\u5165\uff0c\u4e3a\u4e86\u9632\u6b62\u8bef\u7528\uff0c\u5728 Merge-on-Write \u5b9e\u73b0\u4e2d\uff0c",(0,a.yg)("inlineCode",{parentName:"p"},"INSERT INTO"),"\u9ed8\u8ba4\u4ecd\u7136\u4fdd\u6301\u6574\u884c UPSERT \u7684\u8bed\u610f\uff0c\u5982\u679c\u9700\u8981\u5f00\u542f\u90e8\u5206\u5217\u66f4\u65b0\u7684\u8bed\u610f\uff0c\u9700\u8981\u8bbe\u7f6e\u5982\u4e0b session variable"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-Plain"},"set enable_unique_key_partial_update=true\n")),(0,a.yg)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u63a7\u5236 insert \u8bed\u53e5\u662f\u5426\u5f00\u542f\u4e25\u683c\u6a21\u5f0f\u7684\u4f1a\u8bdd\u53d8\u91cf",(0,a.yg)("inlineCode",{parentName:"p"},"enable_insert_strict"),"\u7684\u9ed8\u8ba4\u503c\u4e3a true\uff0c\u5373 insert \u8bed\u53e5\u9ed8\u8ba4\u5f00\u542f\u4e25\u683c\u6a21\u5f0f\uff0c\u800c\u5728\u4e25\u683c\u6a21\u5f0f\u4e0b\u8fdb\u884c\u90e8\u5206\u5217\u66f4\u65b0\u4e0d\u5141\u8bb8\u66f4\u65b0\u4e0d\u5b58\u5728\u7684 key\u3002\u6240\u4ee5\uff0c\u5728\u4f7f\u7528 insert \u8bed\u53e5\u8fdb\u884c\u90e8\u5206\u5217\u66f4\u65b0\u7684\u65f6\u5019\u5982\u679c\u5e0c\u671b\u80fd\u63d2\u5165\u4e0d\u5b58\u5728\u7684 key\uff0c\u9700\u8981\u5728",(0,a.yg)("inlineCode",{parentName:"p"},"enable_unique_key_partial_update"),"\u8bbe\u7f6e\u4e3a true \u7684\u57fa\u7840\u4e0a\u540c\u65f6\u5c06",(0,a.yg)("inlineCode",{parentName:"p"},"enable_insert_strict"),"\u8bbe\u7f6e\u4e3a false\u3002"),(0,a.yg)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.yg)("p",null,"\u5047\u8bbe Doris \u4e2d\u5b58\u5728\u4e00\u5f20\u8ba2\u5355\u8868 order_tbl\uff0c\u5176\u4e2d\u8ba2\u5355 id \u662f Key \u5217\uff0c\u8ba2\u5355\u72b6\u6001\uff0c\u8ba2\u5355\u91d1\u989d\u662f Value \u5217\u3002\u6570\u636e\u72b6\u6001\u5982\u4e0b\uff1a"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"\u8ba2\u5355 id"),(0,a.yg)("th",{parentName:"tr",align:null},"\u8ba2\u5355\u91d1\u989d"),(0,a.yg)("th",{parentName:"tr",align:null},"\u8ba2\u5355\u72b6\u6001"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"1"),(0,a.yg)("td",{parentName:"tr",align:null},"100"),(0,a.yg)("td",{parentName:"tr",align:null},"\u5f85\u4ed8\u6b3e")))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"+----------+--------------+--------------+\n| order_id | order_amount | order_status |\n+----------+--------------+--------------+\n| 1        |          100 | \u5f85\u4ed8\u6b3e        |\n+----------+--------------+--------------+\n1 row in set (0.01 sec)\n")),(0,a.yg)("p",null,"\u8fd9\u65f6\u5019\uff0c\u7528\u6237\u70b9\u51fb\u4ed8\u6b3e\u540e\uff0cDoris \u7cfb\u7edf\u9700\u8981\u5c06\u8ba2\u5355 id \u4e3a '1' \u7684\u8ba2\u5355\u72b6\u6001\u53d8\u66f4\u4e3a '\u5f85\u53d1\u8d27'\u3002"),(0,a.yg)("p",null,"\u82e5\u4f7f\u7528 StreamLoad \u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u65b9\u5f0f\u8fdb\u884c\u66f4\u65b0\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'$cat update.csv\n\n1,\u5f85\u53d1\u8d27\n\n$ curl  --location-trusted -u root: -H "partial_columns:true" -H "column_separator:," -H "columns:order_id,order_status" -T /tmp/update.csv http://127.0.0.1:48037/api/db1/order_tbl/_stream_load\n')),(0,a.yg)("p",null,"\u82e5\u4f7f\u7528",(0,a.yg)("inlineCode",{parentName:"p"},"INSRT INTO"),"\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u65b9\u5f0f\u8fdb\u884c\u66f4\u65b0\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"set enable_unique_key_partial_update=true;\nINSERT INTO order_tbl (order_id, order_status) values (1,'\u5f85\u53d1\u8d27');\n")),(0,a.yg)("p",null,"\u66f4\u65b0\u540e\u7ed3\u679c\u5982\u4e0b"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"+----------+--------------+--------------+\n| order_id | order_amount | order_status |\n+----------+--------------+--------------+\n| 1        |          100 | \u5f85\u53d1\u8d27        |\n+----------+--------------+--------------+\n1 row in set (0.01 sec)\n")),(0,a.yg)("p",null,"\u4e3b\u952e\u6a21\u578b\u7684\u90e8\u5206\u5217\u66f4\u65b0"),(0,a.yg)("h3",{id:"\u4f7f\u7528\u6ce8\u610f"},"\u4f7f\u7528\u6ce8\u610f"),(0,a.yg)("p",null,"\u7531\u4e8e Merge-on-Write \u5b9e\u73b0\u9700\u8981\u5728\u6570\u636e\u5199\u5165\u7684\u65f6\u5019\uff0c\u8fdb\u884c\u6574\u884c\u6570\u636e\u7684\u8865\u9f50\uff0c\u4ee5\u4fdd\u8bc1\u6700\u4f18\u7684\u67e5\u8be2\u6027\u80fd\uff0c\u56e0\u6b64\u4f7f\u7528 Merge-on-Write \u5b9e\u73b0\u8fdb\u884c\u90e8\u5206\u5217\u66f4\u65b0\u4f1a\u6709\u90e8\u5206\u5bfc\u5165\u6027\u80fd\u4e0b\u964d\u3002"),(0,a.yg)("p",null,"\u5199\u5165\u6027\u80fd\u4f18\u5316\u5efa\u8bae\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u4f7f\u7528\u914d\u5907\u4e86 NVMe \u7684 SSD\uff0c\u6216\u8005\u6781\u901f SSD \u4e91\u76d8\u3002\u56e0\u4e3a\u8865\u9f50\u6570\u636e\u65f6\u4f1a\u5927\u91cf\u7684\u8bfb\u53d6\u5386\u53f2\u6570\u636e\uff0c\u4ea7\u751f\u8f83\u9ad8\u7684\u8bfb IOPS\uff0c\u4ee5\u53ca\u8bfb\u541e\u5410")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u5f00\u542f\u884c\u5b58\u5c06\u80fd\u591f\u5927\u5927\u51cf\u5c11\u8865\u9f50\u6570\u636e\u65f6\u4ea7\u751f\u7684 IOPS\uff0c\u5bfc\u5165\u6027\u80fd\u63d0\u5347\u660e\u663e\uff0c\u7528\u6237\u53ef\u4ee5\u5728\u5efa\u8868\u65f6\u901a\u8fc7\u5982\u4e0b property \u6765\u5f00\u542f\u884c\u5b58\uff1a"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-Plain"},'"store_row_column" = "true"\n')),(0,a.yg)("p",null,"\u5728 2.0 \u7248\u672c\u4e2d\uff0c\u540c\u4e00\u6279\u6b21\u6570\u636e\u5199\u5165\u4efb\u52a1\uff08\u65e0\u8bba\u662f\u5bfc\u5165\u4efb\u52a1\u8fd8\u662f",(0,a.yg)("inlineCode",{parentName:"p"},"INSERT INTO"),"\uff09\u7684\u6240\u6709\u884c\u53ea\u80fd\u66f4\u65b0\u76f8\u540c\u7684\u5217\uff0c\u5982\u679c\u9700\u8981\u66f4\u65b0\u4e0d\u540c\u5217\u7684\u6570\u636e\uff0c\u5219\u9700\u8981\u5206\u4e0d\u540c\u7684\u6279\u6b21\u8fdb\u884c\u5199\u5165\u3002"),(0,a.yg)("p",null,"\u5728 2.1 \u7248\u672c\u4e2d\uff0c\u5c06\u652f\u6301\u7075\u6d3b\u7684\u5217\u66f4\u65b0\uff0c\u7528\u6237\u53ef\u4ee5\u5728\u540c\u4e00\u6279\u5bfc\u5165\u4e2d\uff0c\u6bcf\u4e00\u884c\u66f4\u65b0\u4e0d\u540c\u7684\u5217\u3002"))}y.isMDXComponent=!0}}]);