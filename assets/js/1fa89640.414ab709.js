"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[95944],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>f});var r=t(296540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(t),y=o,f=p["".concat(l,".").concat(y)]||p[y]||g[y]||i;return t?r.createElement(f,s(s({ref:n},u),{},{components:t})):r.createElement(f,s({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=y;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[p]="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},348200:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=t(58168),o=(t(296540),t(15680));const i={title:"get_json_bigint",language:"en"},s=void 0,a={unversionedId:"sql-manual/sql-functions/json-functions/get_json_bigint",id:"version-1.2/sql-manual/sql-functions/json-functions/get_json_bigint",title:"get_json_bigint",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/json-functions/get_json_bigint.md",sourceDirName:"sql-manual/sql-functions/json-functions",slug:"/sql-manual/sql-functions/json-functions/get_json_bigint",permalink:"/docs/1.2/sql-manual/sql-functions/json-functions/get_json_bigint",draft:!1,tags:[],version:"1.2",frontMatter:{title:"get_json_bigint",language:"en"},sidebar:"docs",previous:{title:"get_json_int",permalink:"/docs/1.2/sql-manual/sql-functions/json-functions/get_json_int"},next:{title:"get_json_string",permalink:"/docs/1.2/sql-manual/sql-functions/json-functions/get_json_string"}},l={},c=[{value:"get_json_bigint",id:"get_json_bigint",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function g(e){let{components:n,...t}=e;return(0,o.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"get_json_bigint"},"get_json_bigint"),(0,o.yg)("h3",{id:"description"},"Description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"INT get_json_bigint(VARCHAR json_str, VARCHAR json_path)")),(0,o.yg)("p",null,'Parse and retrieve the big integer content of the specified path in the JSON string.\nWhere json_path must start with the $symbol and use. as the path splitter. If the path contains..., double quotation marks can be used to surround it.\nUse [] to denote array subscripts, starting at 0.\nThe content of path cannot contain ",',"[and]",".\nIf the json_string format is incorrect, or the json_path format is incorrect, or matches cannot be found, NULL is returned."),(0,o.yg)("p",null,"In addition, it is recommended to use the jsonb type and jsonb_extract_XXX function performs the same function."),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},'Get the value of key as "k1"')),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'mysql> SELECT get_json_bigint(\'{"k1":1, "k2":"2"}\', "$.k1");\n+-----------------------------------------------+\n| get_json_bigint(\'{"k1":1, "k2":"2"}\', \'$.k1\') |\n+-----------------------------------------------+\n|                                             1 |\n+-----------------------------------------------+\n')),(0,o.yg)("ol",{start:2},(0,o.yg)("li",{parentName:"ol"},'Get the second element of the array whose key is "my. key"')),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'mysql> SELECT get_json_bigint(\'{"k1":"v1", "my.key":[1, 1678708107000, 3]}\', \'$."my.key"[1]\');\n+---------------------------------------------------------------------------------+\n| get_json_bigint(\'{"k1":"v1", "my.key":[1, 1678708107000, 3]}\', \'$."my.key"[1]\') |\n+---------------------------------------------------------------------------------+\n|                                                                   1678708107000 |\n+---------------------------------------------------------------------------------+\n')),(0,o.yg)("ol",{start:3},(0,o.yg)("li",{parentName:"ol"},"Get the first element in an array whose secondary path is k1. key - > K2")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'mysql> SELECT get_json_bigint(\'{"k1.key":{"k2":[1678708107000, 2]}}\', \'$."k1.key".k2[0]\');\n+-----------------------------------------------------------------------------+\n| get_json_bigint(\'{"k1.key":{"k2":[1678708107000, 2]}}\', \'$."k1.key".k2[0]\') |\n+-----------------------------------------------------------------------------+\n|                                                               1678708107000 |\n+-----------------------------------------------------------------------------+\n')),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("p",null,"GET_JSON_BIGINT,GET,JSON,BIGINT"))}g.isMDXComponent=!0}}]);