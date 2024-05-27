"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[37308],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>g});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||l;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},997195:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(58168),a=(n(296540),n(15680));const l={title:"Check All Tablet Segment Lost",language:"en"},o=void 0,i={unversionedId:"admin-manual/be/check-tablet-segment",id:"version-2.1/admin-manual/be/check-tablet-segment",title:"Check All Tablet Segment Lost",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/admin-manual/be/check-tablet-segment.md",sourceDirName:"admin-manual/be",slug:"/admin-manual/be/check-tablet-segment",permalink:"/docs/admin-manual/be/check-tablet-segment",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Check All Tablet Segment Lost",language:"en"},sidebar:"docs",previous:{title:"Make Snapshot",permalink:"/docs/admin-manual/be/snapshot"},next:{title:"Config of BE",permalink:"/docs/admin-manual/be/config"}},s={},c=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"check-all-tablet-segment-lost"},"Check All Tablet Segment Lost"),(0,a.yg)("h2",{id:"request"},"Request"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"GET /api/check_tablet_segment_lost?repair={bool}")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"There may be some exceptions that cause segment to be lost on BE node. However, the metadata shows that the tablet is normal. This abnormal replica is not detected by FE and cannot be automatically repaired. When query comes, exception information is thrown that ",(0,a.yg)("inlineCode",{parentName:"p"},"failed to initialize storage reader"),". The function of this interface is to check all tablets on the current BE node that have lost segment."),(0,a.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"repair"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"true"),": tablets with lost segment will be set to SHUTDOWN status and treated as bad replica, which can be detected and repaired by FE. "),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"false"),": all tablets with missing segment are returned and nothing is done.")))),(0,a.yg)("h2",{id:"request-body"},"Request body"),(0,a.yg)("p",null,"None"),(0,a.yg)("h2",{id:"response"},"Response"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'The return is all tablets on the current BE node that have lost segment:\n\n```\n{\n    status: "Success",\n    msg: "Succeed to check all tablet segment",\n    num: 3,\n    bad_tablets: [\n        11190,\n        11210,\n        11216\n    ],\n    set_bad: true,\n    host: "172.3.0.101"\n}\n```\n')),(0,a.yg)("h2",{id:"examples"},"Examples"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"```\ncurl http://127.0.0.1:8040/api/check_tablet_segment_lost?repair=false\n```\n")))}m.isMDXComponent=!0}}]);