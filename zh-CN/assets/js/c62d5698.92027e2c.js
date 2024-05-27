"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[82896],{15680:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>y});var a=r(296540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),p=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,y=u["".concat(i,".").concat(m)]||u[m]||c[m]||l;return r?a.createElement(y,o(o({ref:t},d),{},{components:r})):a.createElement(y,o({ref:t},d))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:n,o[1]=s;for(var p=2;p<l;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},426785:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=r(58168),n=(r(296540),r(15680));const l={title:"Deploy Doris on Helm Chart",language:"en"},o=void 0,s={unversionedId:"install/cluster-deployment/k8s-deploy/helm-chart-deploy",id:"version-2.0/install/cluster-deployment/k8s-deploy/helm-chart-deploy",title:"Deploy Doris on Helm Chart",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/install/cluster-deployment/k8s-deploy/helm-chart-deploy.md",sourceDirName:"install/cluster-deployment/k8s-deploy",slug:"/install/cluster-deployment/k8s-deploy/helm-chart-deploy",permalink:"/zh-CN/docs/2.0/install/cluster-deployment/k8s-deploy/helm-chart-deploy",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Deploy Doris on Helm Chart",language:"en"}},i={},p=[{value:"Add Helm repository of Doris-Operator",id:"add-helm-repository-of-doris-operator",level:2},{value:"Install doris-operator",id:"install-doris-operator",level:2},{value:"1. Install",id:"1-install",level:3},{value:"2. Validate installation Status",id:"2-validate-installation-status",level:3},{value:"Install doriscluster",id:"install-doriscluster",level:2},{value:"1. Install",id:"1-install-1",level:3},{value:"2. Validate installation Status",id:"2-validate-installation-status-1",level:3},{value:"Uninstall Doris by Helm",id:"uninstall-doris-by-helm",level:2},{value:"Uninstall doriscluster",id:"uninstall-doriscluster",level:3},{value:"Uninstall doris-operator",id:"uninstall-doris-operator",level:3}],d={toc:p},u="wrapper";function c(e){let{components:t,...r}=e;return(0,n.yg)(u,(0,a.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://helm.sh/"},"Helm")," is the best way to find, share, and use software built for Kubernetes. Helm Charts help to define, install, and upgrade even the most complex Kubernetes application.\nHelm Chart makes it easy to deploy Doris clusters and skip difficult configuration steps."),(0,n.yg)("h2",{id:"add-helm-repository-of-doris-operator"},"Add Helm repository of Doris-Operator"),(0,n.yg)("p",null,"This ",(0,n.yg)("a",{parentName:"p",href:"https://artifacthub.io/packages/search?ts_query_web=doris&sort=relevance&page=1"},"Doris repository")," have resources about RBAC , deployment ...etc for doris-operator running."),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Add the Doris repository")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-Bash"},"$ helm repo add doris-repo https://charts.selectdb.com\n")),(0,n.yg)("ol",{start:2},(0,n.yg)("li",{parentName:"ol"},"Update the Chart to the latest version")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-Bash"},"$ helm repo update doris-repo\n")),(0,n.yg)("ol",{start:3},(0,n.yg)("li",{parentName:"ol"},"Check the Helm Chart Repo is the latest version")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-Bash"},"$ helm search repo doris-repo\nNAME                          CHART VERSION    APP VERSION   DESCRIPTION\ndoris-repo/doris-operator     1.3.1            1.3.1         Doris-operator for doris creat ...\ndoris-repo/doris              1.3.1            2.0.3         Apache Doris is an easy-to-use ...\n")),(0,n.yg)("h2",{id:"install-doris-operator"},"Install doris-operator"),(0,n.yg)("h3",{id:"1-install"},"1. Install"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Install ",(0,n.yg)("a",{parentName:"li",href:"https://artifacthub.io/packages/helm/doris/doris-operator"},"doris-operator"),"\uff0cwith default config  in a namespace named ",(0,n.yg)("inlineCode",{parentName:"li"},"doris"))),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-Bash"},"$ helm install operator doris-repo/doris-operator\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"The repo defines the basic function for running doris-operator, Please use next command to deploy operator, when you have completed customization of ",(0,n.yg)("a",{parentName:"li",href:"https://artifacthub.io/packages/helm/doris/doris-operator?modal=values"},"values.yaml"))),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-Bash"},"$ helm install -f values.yaml operator doris-repo/doris-operator \n")),(0,n.yg)("h3",{id:"2-validate-installation-status"},"2. Validate installation Status"),(0,n.yg)("p",null,"Check the deployment status of Pods through the ",(0,n.yg)("inlineCode",{parentName:"p"},"kubectl get pods")," command.\nObserve that the Pod of doris-operator is in the Running state and all containers in the Pod are ready, that means, the deployment is successful."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-Bash"},"$ kubectl get pod --namespace doris\nNAME                              READY   STATUS    RESTARTS   AGE\ndoris-operator-866bd449bb-zl5mr   1/1     Running   0          18m\n")),(0,n.yg)("h2",{id:"install-doriscluster"},"Install doriscluster"),(0,n.yg)("h3",{id:"1-install-1"},"1. Install"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Use default config for deploying ",(0,n.yg)("a",{parentName:"li",href:"https://artifacthub.io/packages/helm/doris/doris"},"doriscluster"),". This only deploys 3 FE and 3 BE components and using default ",(0,n.yg)("inlineCode",{parentName:"li"},"storageClass")," for providing persistent volume.")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-Bash"},"$ helm install doriscluster doris-repo/doris\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Custom Doris deploying, specify resources or different deployment type, please customize the resource configuration according to the annotations of each resource configuration in ",(0,n.yg)("a",{parentName:"li",href:"https://artifacthub.io/packages/helm/doris/doris?modal=values"},"values.yaml")," and use next command for deploying.")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-Bash"},"$ helm install -f values.yaml doriscluster doris-repo/doris \n")),(0,n.yg)("h3",{id:"2-validate-installation-status-1"},"2. Validate installation Status"),(0,n.yg)("p",null,"After executing the installation command, deployment and distribution, service deployment scheduling and startup will take a certain amount of time.\nCheck the deployment status of Pods through the ",(0,n.yg)("inlineCode",{parentName:"p"},"kubectl get pods")," command."),(0,n.yg)("p",null,"Observe that the Pod of ",(0,n.yg)("inlineCode",{parentName:"p"},"doriscluster")," is in the ",(0,n.yg)("inlineCode",{parentName:"p"},"Running")," state and all containers in the Pod are ready, that means, the deployment is successful."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-Bash"},"$  kubectl get pod --namespace doris\nNAME                     READY   STATUS    RESTARTS   AGE\ndoriscluster-helm-fe-0   1/1     Running   0          1m39s\ndoriscluster-helm-fe-1   1/1     Running   0          1m39s\ndoriscluster-helm-fe-2   1/1     Running   0          1m39s\ndoriscluster-helm-be-0   1/1     Running   0          16s\ndoriscluster-helm-be-1   1/1     Running   0          16s\ndoriscluster-helm-be-2   1/1     Running   0          16s\n")),(0,n.yg)("h2",{id:"uninstall-doris-by-helm"},"Uninstall Doris by Helm"),(0,n.yg)("h3",{id:"uninstall-doriscluster"},"Uninstall doriscluster"),(0,n.yg)("p",null,"Please confirm the Doris is not used, when using next command to uninstall ",(0,n.yg)("inlineCode",{parentName:"p"},"doriscluster"),"."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"$ helm uninstall doriscluster\n")),(0,n.yg)("h3",{id:"uninstall-doris-operator"},"Uninstall doris-operator"),(0,n.yg)("p",null,"Please confirm that Doris is not running in Kubernetes, use next command to uninstall ",(0,n.yg)("inlineCode",{parentName:"p"},"doris-operator"),"."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"$ helm uninstall operator\n")))}c.isMDXComponent=!0}}]);