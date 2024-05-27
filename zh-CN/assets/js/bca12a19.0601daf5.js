"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[44309],{15680:(e,n,r)=>{r.d(n,{xA:()=>p,yg:()=>_});var t=r(296540);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=t.createContext({}),c=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},p=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(r),f=i,_=u["".concat(l,".").concat(f)]||u[f]||d[f]||s;return r?t.createElement(_,a(a({ref:n},p),{},{components:r})):t.createElement(_,a({ref:n},p))}));function _(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=r.length,a=new Array(s);a[0]=f;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[u]="string"==typeof e?e:i,a[1]=o;for(var c=2;c<s;c++)a[c]=r[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},14681:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var t=r(58168),i=(r(296540),r(15680));const s={title:"IS_IP_ADDRESS_IN_RANGE",language:"zh-CN"},a=void 0,o={unversionedId:"sql-manual/sql-functions/ip-functions/is-ip-address-in-range",id:"sql-manual/sql-functions/ip-functions/is-ip-address-in-range",title:"IS_IP_ADDRESS_IN_RANGE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/ip-functions/is-ip-address-in-range.md",sourceDirName:"sql-manual/sql-functions/ip-functions",slug:"/sql-manual/sql-functions/ip-functions/is-ip-address-in-range",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/ip-functions/is-ip-address-in-range",draft:!1,tags:[],version:"current",frontMatter:{title:"IS_IP_ADDRESS_IN_RANGE",language:"zh-CN"},sidebar:"docs",previous:{title:"IPV6_CIDR_TO_RANGE",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/ip-functions/ipv6-cidr-to-range"},next:{title:"IS_IPV4_STRING",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/ip-functions/is-ipv4-string"}},l={},c=[{value:"IS_IP_ADDRESS_IN_RANGE",id:"is_ip_address_in_range",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c},u="wrapper";function d(e){let{components:n,...r}=e;return(0,i.yg)(u,(0,t.A)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"is_ip_address_in_range"},"IS_IP_ADDRESS_IN_RANGE"),(0,i.yg)("version",{since:"dev"},(0,i.yg)("p",null,"IS_IP_ADDRESS_IN_RANGE")),(0,i.yg)("h3",{id:"description"},"description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"BOOLEAN IS_IP_ADDRESS_IN_RANGE(STRING ip_str, STRING cidr_prefix)")),(0,i.yg)("p",null,"\u5224\u65adIP\uff08IPv4\u6216IPv6\uff09\u5730\u5740\u662f\u5426\u5305\u542b\u5728\u4ee5CIDR\u8868\u793a\u6cd5\u8868\u793a\u7684\u7f51\u7edc\u4e2d\u3002\u5982\u679c\u662f\uff0c\u5219\u8fd4\u56detrue\uff0c\u5426\u5219\u8fd4\u56defalse\u3002"),(0,i.yg)("h3",{id:"notice"},"notice"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"\u5165\u53c2ip_str\u548ccidr_prefix\u5747\u4e0d\u80fd\u4e3aNULL")),(0,i.yg)("h3",{id:"example"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql> SELECT is_ip_address_in_range('127.0.0.1', '127.0.0.0/8');\n+----------------------------------------------------+\n| is_ip_address_in_range('127.0.0.1', '127.0.0.0/8') |\n+----------------------------------------------------+\n|                                                  1 |\n+----------------------------------------------------+\n\nmysql> SELECT is_ip_address_in_range('::ffff:192.168.0.1', '::ffff:192.168.0.4/128');\n+------------------------------------------------------------------------+\n| is_ip_address_in_range('::ffff:192.168.0.1', '::ffff:192.168.0.4/128') |\n+------------------------------------------------------------------------+\n|                                                                      0 |\n+------------------------------------------------------------------------+\n")),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("p",null,"IS_IP_ADDRESS_IN_RANGE, IP"))}d.isMDXComponent=!0}}]);