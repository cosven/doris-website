"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[48979],{15680:(e,n,a)=>{a.d(n,{xA:()=>d,yg:()=>u});var t=a(296540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function p(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=t.createContext({}),g=function(e){var n=t.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):p(p({},n),e)),a},d=function(e){var n=g(e.components);return t.createElement(i.Provider,{value:n},e.children)},y="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),y=g(a),c=r,u=y["".concat(i,".").concat(c)]||y[c]||m[c]||l;return a?t.createElement(u,p(p({ref:n},d),{},{components:a})):t.createElement(u,p({ref:n},d))}));function u(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,p=new Array(l);p[0]=c;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o[y]="string"==typeof e?e:r,p[1]=o;for(var g=2;g<l;g++)p[g]=a[g];return t.createElement.apply(null,p)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},962367:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>g});var t=a(58168),r=(a(296540),a(15680));const l={title:"Docker \u90e8\u7f72",language:"zh-CN"},p=void 0,o={unversionedId:"install/cluster-deployment/run-docker-cluster",id:"install/cluster-deployment/run-docker-cluster",title:"Docker \u90e8\u7f72",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/install/cluster-deployment/run-docker-cluster.md",sourceDirName:"install/cluster-deployment",slug:"/install/cluster-deployment/run-docker-cluster",permalink:"/zh-CN/docs/dev/install/cluster-deployment/run-docker-cluster",draft:!1,tags:[],version:"current",frontMatter:{title:"Docker \u90e8\u7f72",language:"zh-CN"},sidebar:"docs",previous:{title:"\u624b\u52a8\u90e8\u7f72",permalink:"/zh-CN/docs/dev/install/cluster-deployment/standard-deployment"},next:{title:"\u96c6\u7fa4\u73af\u5883\u8981\u6c42",permalink:"/zh-CN/docs/dev/install/cluster-deployment/k8s-deploy/install-env"}},i={},g=[{value:"\u8f6f\u786c\u4ef6\u8981\u6c42",id:"\u8f6f\u786c\u4ef6\u8981\u6c42",level:2},{value:"Image \u6784\u5efa",id:"image-\u6784\u5efa",level:2},{value:"\u6784\u5efa\u524d\u6ce8\u610f",id:"\u6784\u5efa\u524d\u6ce8\u610f",level:3},{value:"\u6784\u5efa FE \u955c\u50cf",id:"\u6784\u5efa-fe-\u955c\u50cf",level:3},{value:"\u6784\u5efa BE \u955c\u50cf",id:"\u6784\u5efa-be-\u955c\u50cf",level:3},{value:"\u63a8\u9001\u955c\u50cf\u81f3 DockerHub \u6216\u79c1\u6709\u4ed3\u5e93",id:"\u63a8\u9001\u955c\u50cf\u81f3-dockerhub-\u6216\u79c1\u6709\u4ed3\u5e93",level:3},{value:"\u90e8\u7f72 Docker \u96c6\u7fa4",id:"\u90e8\u7f72-docker-\u96c6\u7fa4",level:2},{value:"\u524d\u671f\u73af\u5883\u51c6\u5907",id:"\u524d\u671f\u73af\u5883\u51c6\u5907",level:3},{value:"Docker Compose",id:"docker-compose",level:3},{value:"\u90e8\u7f72 Doris Docker",id:"\u90e8\u7f72-doris-docker",level:3}],d={toc:g},y="wrapper";function m(e){let{components:n,...a}=e;return(0,r.yg)(y,(0,t.A)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"\u8be5\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd\u4e86\u5982\u4f55\u901a\u8fc7 Dockerfile \u6765\u5236\u4f5c Apache Doris \u7684\u8fd0\u884c\u955c\u50cf\uff0c\u4ee5\u4fbf\u4e8e\u5728\u5bb9\u5668\u5316\u7f16\u6392\u5de5\u5177\u6216\u8005\u5feb\u901f\u6d4b\u8bd5\u8fc7\u7a0b\u4e2d\u53ef\u8fc5\u901f\u62c9\u53d6\u4e00\u4e2a Apache Doris Image \u6765\u5b8c\u6210\u96c6\u7fa4\u7684\u521b\u5efa\u548c\u8fd0\u884c\u3002"),(0,r.yg)("h2",{id:"\u8f6f\u786c\u4ef6\u8981\u6c42"},"\u8f6f\u786c\u4ef6\u8981\u6c42"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u6982\u8ff0")),(0,r.yg)("p",null,"Docker \u955c\u50cf\u5728\u5236\u4f5c\u524d\u8981\u63d0\u524d\u51c6\u5907\u597d\u5236\u4f5c\u673a\u5668\uff0c\u8be5\u673a\u5668\u7684\u5e73\u53f0\u67b6\u6784\u51b3\u5b9a\u4e86\u5236\u4f5c\u4ee5\u540e\u7684 Docker Image \u9002\u7528\u7684\u5e73\u53f0\u67b6\u6784\uff0c\u5982 X86_64 \u673a\u5668\uff0c\u9700\u8981\u4e0b\u8f7d X86_64 \u7684 Doris \u4e8c\u8fdb\u5236\u7a0b\u5e8f\uff0c\u5236\u4f5c\u4ee5\u540e\u7684 Image \u4ec5\u53ef\u5728 X86_64 \u5e73\u53f0\u4e0a\u8fd0\u884c\u3002ARM64 \u5e73\u53f0\u540c\u7406\u3002"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u786c\u4ef6\u8981\u6c42")),(0,r.yg)("p",null,"\u63a8\u8350\u914d\u7f6e\uff1a4 \u6838 16GB \u5185\u5b58"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u8f6f\u4ef6\u8981\u6c42")),(0,r.yg)("p",null,"Docker Version\uff1a20.10 \u53ca\u4ee5\u540e\u7248\u672c"),(0,r.yg)("h2",{id:"image-\u6784\u5efa"},"Image \u6784\u5efa"),(0,r.yg)("h3",{id:"\u6784\u5efa\u524d\u6ce8\u610f"},"\u6784\u5efa\u524d\u6ce8\u610f"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Dockerfile \u811a\u672c\u7f16\u5199\u6ce8\u610f")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u57fa\u7840\u7236\u955c\u50cf\u9009\u7528\u7ecf\u8fc7 Docker-Hub \u8ba4\u8bc1\u7684 OpenJDK \u5b98\u65b9\u955c\u50cf\uff0c\u7248\u672c\u7528 JDK 1.8 \u7248\u672c\uff0c\u63a8\u8350\u57fa\u7840\u7236\u955c\u50cf\uff1aopenjdk:8u342-jdk\uff1b")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u9700\u8981\u5185\u5d4c\u811a\u672c\u6765\u5b8c\u6210 FE \u7684\u542f\u52a8\u3001\u591a FE \u6ce8\u518c\u3001\u72b6\u6001\u68c0\u67e5\u548c BE \u7684\u542f\u52a8\u3001\u6ce8\u518c BE \u81f3 FE\u3001\u72b6\u6001\u68c0\u67e5\u7b49\u4efb\u52a1\u6d41\u7a0b\uff1b")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u5e94\u7528\u7a0b\u5e8f\u5728 Docker \u5185\u542f\u52a8\u65f6\u4e0d\u5efa\u8bae\u4f7f\u7528",(0,r.yg)("inlineCode",{parentName:"p"},"--daemon")," \u7684\u65b9\u5f0f\u542f\u52a8\uff0c\u5426\u5219\u5728 K8s \u7b49\u7f16\u6392\u5de5\u5177\u90e8\u7f72\u8fc7\u7a0b\u4e2d\u4f1a\u6709\u5f02\u5e38\u3002"))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u6784\u5efa\u65b9\u5f0f")),(0,r.yg)("p",null,"\u7f16\u8bd1 Docker Image \u7684 Dockerfile \u811a\u672c\u4e2d\uff0c\u5173\u4e8e Apache Doris \u7a0b\u5e8f\u4e8c\u8fdb\u5236\u5305\u7684\u52a0\u8f7d\u65b9\u5f0f\uff0c\u6709\u4e24\u79cd\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u901a\u8fc7 wget / curl \u5728\u7f16\u8bd1\u65f6\u6267\u884c\u4e0b\u8f7d\u547d\u4ee4\uff0c\u968f\u540e\u5b8c\u6210 Docker Build \u5236\u4f5c\u8fc7\u7a0b")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u63d0\u524d\u4e0b\u8f7d\u4e8c\u8fdb\u5236\u5305\u81f3\u7f16\u8bd1\u76ee\u5f55\uff0c\u7136\u540e\u901a\u8fc7 ADD \u6216\u8005 COPY \u547d\u4ee4\u52a0\u8f7d\u81f3 Docker Build \u8fc7\u7a0b\u4e2d"))),(0,r.yg)("p",null,"\u4f7f\u7528\u524d\u8005\u4f1a\u8ba9 Docker Image Size \u66f4\u5c0f\uff0c\u4f46\u662f\u5982\u679c\u6784\u5efa\u5931\u8d25\u7684\u8bdd\u53ef\u80fd\u4e0b\u8f7d\u64cd\u4f5c\u4f1a\u91cd\u590d\u8fdb\u884c\uff0c\u5bfc\u81f4\u6784\u5efa\u65f6\u95f4\u8fc7\u957f\uff0c\u800c\u540e\u8005\u66f4\u9002\u7528\u4e8e\u7f51\u7edc\u73af\u5883\u4e0d\u662f\u5f88\u597d\u7684\u6784\u5efa\u73af\u5883\u3002\u8fd9\u91cc\u4ee5\u7b2c\u4e8c\u79cd\u65b9\u5f0f\u8fdb\u884c\u793a\u4f8b\u3002"),(0,r.yg)("h3",{id:"\u6784\u5efa-fe-\u955c\u50cf"},"\u6784\u5efa FE \u955c\u50cf"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u6784\u5efa FE \u955c\u50cf\u7684\u73af\u5883\u76ee\u5f55")),(0,r.yg)("p",null,"\u6784\u5efa\u73af\u5883\u76ee\u5f55\u5982\u4e0b"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Plain"},"\u2514\u2500\u2500 docker-build                                                // \u6784\u5efa\u6839\u76ee\u5f55 \n    \u2514\u2500\u2500 fe                                                   // Doris \u6784\u5efa\u76ee\u5f55\n        \u251c\u2500\u2500 dockerfile                                          // Dockerfile \u811a\u672c\n        \u2514\u2500\u2500 resource                                            // \u8d44\u6e90\u76ee\u5f55\n            \u251c\u2500\u2500 init_fe.sh                                      // FE \u542f\u52a8\u53ca\u6ce8\u518c\u811a\u672c\n            \u2514\u2500\u2500 apache-doris-2.0.3-bin.tar.gz                   // \u4e8c\u8fdb\u5236\u7a0b\u5e8f\u5305\n")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"\u4e0b\u8f7d\u4e8c\u8fdb\u5236\u5305")),(0,r.yg)("p",null,"\u4e0b\u8f7d",(0,r.yg)("a",{parentName:"p",href:"https://doris.apache.org/zh-CN/download"},"\u5b98\u65b9\u4e8c\u8fdb\u5236\u5305"),"/\u7f16\u8bd1\u7684\u4e8c\u8fdb\u5236\u5305\uff0c\u7136\u540e\u8986\u76d6",(0,r.yg)("inlineCode",{parentName:"p"},"./docker-build/fe/resource"),"\u4e2d\u7684 apache-doris \u5b89\u88c5\u5305\u3002"),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"\u7f16\u5199 Dockerfile")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Bash"},'# \u9009\u62e9\u57fa\u7840\u955c\u50cf\nFROM openjdk:8u342-jdk\n\n# \u8bbe\u7f6e\u73af\u5883\u53d8\u91cf\nENV JAVA_HOME="/usr/local/openjdk-8/"\nENV PATH="/opt/apache-doris/fe/bin:$PATH"\n\n# \u4e0b\u8f7d\u8f6f\u4ef6\u81f3\u955c\u50cf\u5185\uff0c\u53ef\u6839\u636e\u9700\u8981\u66ff\u6362\nADD ./resource/apache-doris-2.0.3-bin.tar.gz /opt/\n\nRUN apt-get update && \\\n    apt-get install -y default-mysql-client && \\\n    apt-get clean && \\\n    mkdir /opt/apache-doris && \\\n    cd /opt && \\\n    mv apache-doris-2.0.3-bin/fe /opt/apache-doris/\n\nADD ./resource/init_fe.sh /opt/apache-doris/fe/bin\nRUN chmod 755 /opt/apache-doris/fe/bin/init_fe.sh\n\nENTRYPOINT ["/opt/apache-doris/fe/bin/init_fe.sh"]\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u7f16\u5199\u540e\u547d\u540d\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"Dockerfile")," \u5e76\u4fdd\u5b58\u81f3 ",(0,r.yg)("inlineCode",{parentName:"p"},"./docker-build/fe")," \u76ee\u5f55\u4e0b")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"FE \u7684\u6267\u884c\u811a\u672c init_fe.sh \u7684\u5185\u5bb9\u53ef\u4ee5\u53c2\u8003 Doris \u6e90\u7801\u5e93\u4e2d\u7684 ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/tree/master/docker/runtime/fe/resource/init_fe.sh"},"init_fe.sh")," \u7684\u5185\u5bb9"))),(0,r.yg)("ol",{start:4},(0,r.yg)("li",{parentName:"ol"},"\u6267\u884c\u6784\u5efa")),(0,r.yg)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c",(0,r.yg)("inlineCode",{parentName:"p"},"${tagName}")," \u9700\u66ff\u6362\u4e3a\u4f60\u60f3\u8981\u6253\u5305\u547d\u540d\u7684 tag \u540d\u79f0\uff0c\u5982\uff1a",(0,r.yg)("inlineCode",{parentName:"p"},"apache-doris:2.0.3-fe")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Shell"},"cd ./docker-build/fe\ndocker build . -t ${fe-tagName}\n")),(0,r.yg)("h3",{id:"\u6784\u5efa-be-\u955c\u50cf"},"\u6784\u5efa BE \u955c\u50cf"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u6784\u5efa\u73af\u5883\u76ee\u5f55\u5982\u4e0b\uff1a")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-SQL"},"\u2514\u2500\u2500 docker-build                                                // \u6784\u5efa\u6839\u76ee\u5f55 \n    \u2514\u2500\u2500 be                                                      // BE \u6784\u5efa\u76ee\u5f55\n        \u251c\u2500\u2500 dockerfile                                          // dockerfile \u811a\u672c\n        \u2514\u2500\u2500 resource                                            // \u8d44\u6e90\u76ee\u5f55\n            \u251c\u2500\u2500 init_be.sh                                      // \u542f\u52a8\u53ca\u6ce8\u518c\u811a\u672c\n            \u2514\u2500\u2500 apache-doris-2.0.3-bin.tar.gz                   // \u4e8c\u8fdb\u5236\u7a0b\u5e8f\u5305\n")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"\u7f16\u5199 BE \u7684 Dockerfile \u811a\u672c")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-PowerShell"},'# \u9009\u62e9\u57fa\u7840\u955c\u50cf\nFROM openjdk:8u342-jdk\n\n# \u8bbe\u7f6e\u73af\u5883\u53d8\u91cf\nENV JAVA_HOME="/usr/local/openjdk-8/" \nENV PATH="/opt/apache-doris/be/bin:$PATH"\n\n# \u4e0b\u8f7d\u8f6f\u4ef6\u81f3\u955c\u50cf\u5185\uff0c\u53ef\u6839\u636e\u9700\u8981\u66ff\u6362\nADD ./resource/apache-doris-2.0.3-bin.tar.gz /opt/\n\nRUN apt-get update && \\\n    apt-get install -y default-mysql-client && \\\n    apt-get clean && \\\n    mkdir /opt/apache-doris && \\\n    cd /opt && \\\n    mv apache-doris-2.0.3-bin/be /opt/apache-doris/\n\nADD ./resource/init_be.sh /opt/apache-doris/be/bin\nRUN chmod 755 /opt/apache-doris/be/bin/init_be.sh\n\nENTRYPOINT ["/opt/apache-doris/be/bin/init_be.sh"]\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u7f16\u5199\u540e\u547d\u540d\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"Dockerfile")," \u5e76\u4fdd\u5b58\u81f3 ",(0,r.yg)("inlineCode",{parentName:"p"},"./docker-build/be")," \u76ee\u5f55\u4e0b")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u7f16\u5199 BE \u7684\u6267\u884c\u811a\u672c\uff0c\u53ef\u53c2\u8003\u590d\u5236 ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/tree/master/docker/runtime/be/resource/init_be.sh"},"init_be.sh")," \u7684\u5185\u5bb9"))),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"\u6267\u884c\u6784\u5efa")),(0,r.yg)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c",(0,r.yg)("inlineCode",{parentName:"p"},"${tagName}")," \u9700\u66ff\u6362\u4e3a\u4f60\u60f3\u8981\u6253\u5305\u547d\u540d\u7684 tag \u540d\u79f0\uff0c\u5982\uff1a",(0,r.yg)("inlineCode",{parentName:"p"},"apache-doris:2.0.3-be")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Shell"},"cd ./docker-build/be\ndocker build . -t ${be-tagName}\n")),(0,r.yg)("h3",{id:"\u63a8\u9001\u955c\u50cf\u81f3-dockerhub-\u6216\u79c1\u6709\u4ed3\u5e93"},"\u63a8\u9001\u955c\u50cf\u81f3 DockerHub \u6216\u79c1\u6709\u4ed3\u5e93"),(0,r.yg)("p",null,"\u767b\u5f55 DockerHub \u8d26\u53f7"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Plain"},"docker login\n")),(0,r.yg)("p",null,"\u767b\u5f55\u6210\u529f\u4f1a\u63d0\u793a ",(0,r.yg)("inlineCode",{parentName:"p"},"Success")," \u76f8\u5173\u63d0\u793a\uff0c\u968f\u540e\u63a8\u9001\u81f3\u4ed3\u5e93\u5373\u53ef"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Shell"},"docker push ${tagName}\n")),(0,r.yg)("h2",{id:"\u90e8\u7f72-docker-\u96c6\u7fa4"},"\u90e8\u7f72 Docker \u96c6\u7fa4"),(0,r.yg)("p",null,"\u8fd9\u91cc\u5c06\u7b80\u8ff0\u5982\u4f55\u901a\u8fc7 ",(0,r.yg)("inlineCode",{parentName:"p"},"docker run")," \u6216 ",(0,r.yg)("inlineCode",{parentName:"p"},"docker-compose up")," \u547d\u4ee4\u5feb\u901f\u6784\u5efa\u4e00\u5957\u5b8c\u6574\u7684 Doris \u6d4b\u8bd5\u96c6\u7fa4\u3002"),(0,r.yg)("p",null,"\u5728\u751f\u4ea7\u73af\u5883\u4e0a\uff0c\u5f53\u524d\u5c3d\u91cf\u907f\u514d\u4f7f\u7528\u5bb9\u5668\u5316\u7684\u65b9\u6848\u8fdb\u884c Doris \u90e8\u7f72\uff0c\u5728 K8s \u4e2d\u90e8\u7f72 Doris\uff0c\u8bf7\u91c7\u7528 Doris Operator \u6765\u90e8\u7f72\u3002"),(0,r.yg)("h3",{id:"\u524d\u671f\u73af\u5883\u51c6\u5907"},"\u524d\u671f\u73af\u5883\u51c6\u5907"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u8f6f\u4ef6\u73af\u5883")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u8f6f\u4ef6"),(0,r.yg)("th",{parentName:"tr",align:null},"\u7248\u672c"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Docker"),(0,r.yg)("td",{parentName:"tr",align:null},"20.0 \u53ca\u4ee5\u4e0a")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"docker-compose"),(0,r.yg)("td",{parentName:"tr",align:null},"20.1 \u53ca\u4ee5\u4e0a")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u786c\u4ef6\u73af\u5883")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:null},"\u786c\u4ef6\u4fe1\u606f"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6700\u5927\u8fd0\u884c\u96c6\u7fa4\u89c4\u6a21"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u6700\u4f4e\u914d\u7f6e"),(0,r.yg)("td",{parentName:"tr",align:null},"2C 4G"),(0,r.yg)("td",{parentName:"tr",align:null},"1FE 1BE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u63a8\u8350\u914d\u7f6e"),(0,r.yg)("td",{parentName:"tr",align:null},"4C 16G"),(0,r.yg)("td",{parentName:"tr",align:null},"3FE 3BE")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u5728\u5bbf\u4e3b\u673a\u6267\u884c\u5982\u4e0b\u547d\u4ee4")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Shell"},"sysctl -w vm.max_map_count=2000000\n")),(0,r.yg)("h3",{id:"docker-compose"},"Docker Compose"),(0,r.yg)("p",null,"\u4e0d\u540c\u5e73\u53f0\u9700\u8981\u4f7f\u7528\u4e0d\u540c Image \u955c\u50cf\uff0c\u672c\u7bc7\u4ee5 ",(0,r.yg)("inlineCode",{parentName:"p"},"X86_64")," \u5e73\u53f0\u4e3a\u4f8b\u3002"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u7f51\u7edc\u6a21\u5f0f\u8bf4\u660e")),(0,r.yg)("p",null,"Doris Docker \u9002\u7528\u7684\u7f51\u7edc\u6a21\u5f0f\u6709\u4e24\u79cd\u3002"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u9002\u5408\u8de8\u591a\u8282\u70b9\u90e8\u7f72\u7684 HOST \u6a21\u5f0f\uff0c\u8fd9\u79cd\u6a21\u5f0f\u9002\u5408\u6bcf\u4e2a\u8282\u70b9\u90e8\u7f72 1 FE 1 BE\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u9002\u5408\u5355\u8282\u70b9\u90e8\u7f72\u591a Doris \u8fdb\u7a0b\u7684\u5b50\u7f51\u7f51\u6865\u6a21\u5f0f\uff0c\u8fd9\u79cd\u6a21\u5f0f\u9002\u5408\u5355\u8282\u70b9\u90e8\u7f72\uff08\u63a8\u8350\uff09\uff0c\u82e5\u8981\u591a\u8282\u70b9\u6df7\u90e8\u9700\u8981\u505a\u66f4\u591a\u7ec4\u4ef6\u90e8\u7f72\uff08\u4e0d\u63a8\u8350\uff09\u3002"))),(0,r.yg)("p",null,"\u4e3a\u4fbf\u4e8e\u5c55\u793a\uff0c\u672c\u7ae0\u8282\u4ec5\u6f14\u793a\u5b50\u7f51\u7f51\u6865\u6a21\u5f0f\u7f16\u5199\u7684\u811a\u672c\u3002"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u63a5\u53e3\u8bf4\u660e")),(0,r.yg)("p",null,"\u4ece ",(0,r.yg)("inlineCode",{parentName:"p"},"Apache Doris 2.0.3 Docker Image")," \u7248\u672c\u8d77\uff0c\u5404\u4e2a\u8fdb\u7a0b\u955c\u50cf\u63a5\u53e3\u5217\u8868\u5982\u4e0b\uff1a"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u8fdb\u7a0b\u540d"),(0,r.yg)("th",{parentName:"tr",align:null},"\u63a5\u53e3\u540d"),(0,r.yg)("th",{parentName:"tr",align:null},"\u63a5\u53e3\u5b9a\u4e49"),(0,r.yg)("th",{parentName:"tr",align:null},"\u63a5\u53e3\u793a\u4f8b"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"FE"),(0,r.yg)("td",{parentName:"tr",align:null},"BE"),(0,r.yg)("td",{parentName:"tr",align:null},"BROKER"),(0,r.yg)("td",{parentName:"tr",align:null},"FE_SERVERS")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"FE"),(0,r.yg)("td",{parentName:"tr",align:null},"FE_ID"),(0,r.yg)("td",{parentName:"tr",align:null},"FE \u8282\u70b9 ID"),(0,r.yg)("td",{parentName:"tr",align:null},"1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BE"),(0,r.yg)("td",{parentName:"tr",align:null},"BE_ADDR"),(0,r.yg)("td",{parentName:"tr",align:null},"BE \u8282\u70b9\u4e3b\u8981\u4fe1\u606f"),(0,r.yg)("td",{parentName:"tr",align:null},"172.20.80.5:9050")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BE"),(0,r.yg)("td",{parentName:"tr",align:null},"NODE_ROLE"),(0,r.yg)("td",{parentName:"tr",align:null},"BE \u8282\u70b9\u7c7b\u578b"),(0,r.yg)("td",{parentName:"tr",align:null},"computation")))),(0,r.yg)("p",null,"\u6ce8\u610f\uff0c\u4ee5\u4e0a\u63a5\u53e3\u5fc5\u987b\u586b\u5199\u4fe1\u606f\uff0c\u5426\u5219\u8fdb\u7a0b\u65e0\u6cd5\u542f\u52a8\u3002"),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"FE_SERVERS \u63a5\u53e3\u89c4\u5219\u4e3a\uff1a",(0,r.yg)("inlineCode",{parentName:"p"},"FE_NAME:FE_HOST:FE_EDIT_LOG_PORT[,FE_NAME:FE_HOST:FE_EDIT_LOG_PORT]"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"FE_ID \u63a5\u53e3\u89c4\u5219\u4e3a\uff1a",(0,r.yg)("inlineCode",{parentName:"p"},"1-9")," \u7684\u6574\u6570\uff0c\u5176\u4e2d ",(0,r.yg)("inlineCode",{parentName:"p"},"1")," \u53f7 FE \u4e3a Master \u8282\u70b9\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"BE_ADDR \u63a5\u53e3\u89c4\u5219\u4e3a\uff1a",(0,r.yg)("inlineCode",{parentName:"p"},"BE_HOST:BE_HEARTBEAT_SERVICE_PORT"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"NODE_ROLE \u63a5\u53e3\u89c4\u5219\u4e3a\uff1a",(0,r.yg)("inlineCode",{parentName:"p"},"computation")," \u6216\u4e3a\u7a7a\uff0c\u5176\u4e2d\u4e3a\u7a7a\u6216\u4e3a\u5176\u4ed6\u503c\u65f6\u8868\u793a\u8282\u70b9\u7c7b\u578b\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"mix")," \u7c7b\u578b")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"BROKER_ADDR \u63a5\u53e3\u89c4\u5219\u4e3a\uff1a",(0,r.yg)("inlineCode",{parentName:"p"},"BROKER_HOST:BROKER_IPC_PORT"))))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u811a\u672c\u6a21\u677f")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"1. Docker Run \u547d\u4ee4")),(0,r.yg)("p",null,"1 FE & 1 BE \u547d\u4ee4\u6a21\u677f"),(0,r.yg)("p",null,"\u6ce8\u610f\u9700\u8981\u4fee\u6539 ",(0,r.yg)("inlineCode",{parentName:"p"},"${\u5f53\u524d\u673a\u5668\u7684\u5185\u7f51IP}")," \u66ff\u6362\u4e3a\u5f53\u524d\u673a\u5668\u7684\u5185\u7f51 IP"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Shell"},'docker run -itd \\\n--name=fe \\\n--env FE_SERVERS="fe1:${\u5f53\u524d\u673a\u5668\u7684\u5185\u7f51IP}:9010" \\\n--env FE_ID=1 \\\n-p 8030:8030 \\\n-p 9030:9030 \\\n-v /data/fe/doris-meta:/opt/apache-doris/fe/doris-meta \\\n-v /data/fe/log:/opt/apache-doris/fe/log \\\n--net=host \\\napache/doris:2.0.3-fe-x86_64\n\ndocker run -itd \\\n--name=be \\\n--env FE_SERVERS="fe1:${\u5f53\u524d\u673a\u5668\u7684\u5185\u7f51IP}:9010" \\\n--env BE_ADDR="${\u5f53\u524d\u673a\u5668\u7684\u5185\u7f51IP}:9050" \\\n-p 8040:8040 \\\n-v /data/be/storage:/opt/apache-doris/be/storage \\\n-v /data/be/log:/opt/apache-doris/be/log \\\n--net=host \\\napache/doris:2.0.3-be-x86_64\n')),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"3 FE & 3 BE Run \u547d\u4ee4\u6a21\u677f\u5982\u6709\u9700\u8981",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/tree/master/docker/runtime/docker-compose-demo/build-cluster/rum-command/3fe_3be.sh"},"\u70b9\u51fb\u6b64\u5904"),"\u8bbf\u95ee\u4e0b\u8f7d\u3002")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"2. Docker Compose \u811a\u672c")),(0,r.yg)("p",null,"1 FE & 1 BE \u6a21\u677f"),(0,r.yg)("p",null,"\u6ce8\u610f\u9700\u8981\u4fee\u6539 ",(0,r.yg)("inlineCode",{parentName:"p"},"${\u5f53\u524d\u673a\u5668\u7684\u5185\u7f51IP}")," \u66ff\u6362\u4e3a\u5f53\u524d\u673a\u5668\u7684\u5185\u7f51 IP"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-YAML"},'version: "3"\nservices:\n  fe:\n    image: apache/doris:2.0.3-fe-x86_64\n    hostname: fe\n    environment:\n     - FE_SERVERS=fe1:${\u5f53\u524d\u673a\u5668\u7684\u5185\u7f51IP}:9010\n     - FE_ID=1\n    volumes:\n     - /data/fe/doris-meta/:/opt/apache-doris/fe/doris-meta/\n     - /data/fe/log/:/opt/apache-doris/fe/log/\n    network_mode: host\n  be:\n    image: apache/doris:2.0.3-be-x86_64\n    hostname: be\n    environment:\n     - FE_SERVERS=fe1:${\u5f53\u524d\u673a\u5668\u7684\u5185\u7f51IP}:9010\n     - BE_ADDR=${\u5f53\u524d\u673a\u5668\u7684\u5185\u7f51IP}:9050\n    volumes:\n     - /data/be/storage/:/opt/apache-doris/be/storage/\n     - /data/be/script/:/docker-entrypoint-initdb.d/\n    depends_on:\n      - fe\n    network_mode: host\n')),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"3 FE & 3 BE Docker Compose \u811a\u672c\u6a21\u677f\u5982\u6709\u9700\u8981",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/tree/master/docker/runtime/docker-compose-demo/build-cluster/docker-compose/3fe_3be/docker-compose.yaml"},"\u70b9\u51fb\u6b64\u5904"),"\u8bbf\u95ee\u4e0b\u8f7d\u3002")),(0,r.yg)("h3",{id:"\u90e8\u7f72-doris-docker"},"\u90e8\u7f72 Doris Docker"),(0,r.yg)("p",null,"\u90e8\u7f72\u65b9\u5f0f\u4e8c\u9009\u4e00\u5373\u53ef\uff1a"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u6267\u884c ",(0,r.yg)("inlineCode",{parentName:"p"},"docker run")," \u547d\u4ee4\u521b\u5efa\u96c6\u7fa4")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u4fdd\u5b58 ",(0,r.yg)("inlineCode",{parentName:"p"},"docker-compose.yaml")," \u811a\u672c\uff0c\u540c\u76ee\u5f55\u4e0b\u6267\u884c ",(0,r.yg)("inlineCode",{parentName:"p"},"docker-compose up -d")," \u547d\u4ee4\u521b\u5efa\u96c6\u7fa4"))))}m.isMDXComponent=!0}}]);