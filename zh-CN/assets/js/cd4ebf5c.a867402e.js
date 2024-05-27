"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[73327],{15680:(n,e,t)=>{t.d(e,{xA:()=>c,yg:()=>f});var r=t(296540);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},l=Object.keys(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var a=r.createContext({}),p=function(n){var e=r.useContext(a),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},c=function(n){var e=p(n.components);return r.createElement(a.Provider,{value:e},n.children)},u="mdxType",g={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},y=r.forwardRef((function(n,e){var t=n.components,i=n.mdxType,l=n.originalType,a=n.parentName,c=s(n,["components","mdxType","originalType","parentName"]),u=p(t),y=i,f=u["".concat(a,".").concat(y)]||u[y]||g[y]||l;return t?r.createElement(f,o(o({ref:e},c),{},{components:t})):r.createElement(f,o({ref:e},c))}));function f(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var l=t.length,o=new Array(l);o[0]=y;var s={};for(var a in e)hasOwnProperty.call(e,a)&&(s[a]=e[a]);s.originalType=n,s[u]="string"==typeof n?n:i,o[1]=s;for(var p=2;p<l;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},220485:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=t(58168),i=(t(296540),t(15680));const l={title:"ST_Angle",language:"zh-CN"},o=void 0,s={unversionedId:"sql-manual/sql-functions/spatial-functions/st_angle",id:"version-1.2/sql-manual/sql-functions/spatial-functions/st_angle",title:"ST_Angle",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/spatial-functions/st_angle.md",sourceDirName:"sql-manual/sql-functions/spatial-functions",slug:"/sql-manual/sql-functions/spatial-functions/st_angle",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/spatial-functions/st_angle",draft:!1,tags:[],version:"1.2",frontMatter:{title:"ST_Angle",language:"zh-CN"},sidebar:"docs",previous:{title:"ST_Distance_Sphere",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/spatial-functions/st_distance_sphere"},next:{title:"ST_Azimuth",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/spatial-functions/st_azimuth"}},a={},p=[{value:"ST_Angle",id:"st_angle",level:2},{value:"Syntax",id:"syntax",level:3},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:p},u="wrapper";function g(n){let{components:e,...t}=n;return(0,i.yg)(u,(0,r.A)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"st_angle"},"ST_Angle"),(0,i.yg)("h3",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"DOUBLE ST_Angle(GEOPOINT point1, GEOPOINT point2, GEOPOINT point3)")),(0,i.yg)("h3",{id:"description"},"description"),(0,i.yg)("p",null,"\u8f93\u5165\u4e09\u4e2a\u70b9\uff0c\u5b83\u4eec\u8868\u793a\u4e24\u6761\u76f8\u4ea4\u7684\u7ebf\u3002\u8fd4\u56de\u8fd9\u4e9b\u7ebf\u4e4b\u95f4\u7684\u5939\u89d2\u3002\u70b9 2 \u548c\u70b9 1 \u8868\u793a\u7b2c\u4e00\u6761\u7ebf\uff0c\u70b9 2 \u548c\u70b9 3 \u8868\u793a\u7b2c\u4e8c\u6761\u7ebf\u3002\u8fd9\u4e9b\u7ebf\u4e4b\u95f4\u7684\u5939\u89d2\u4ee5\u5f27\u5ea6\u8868\u793a\uff0c\u8303\u56f4\u4e3a [0, 2pi)\u3002\u5939\u89d2\u6309\u987a\u65f6\u9488\u65b9\u5411\u4ece\u7b2c\u4e00\u6761\u7ebf\u5f00\u59cb\u6d4b\u91cf\uff0c\u76f4\u81f3\u7b2c\u4e8c\u6761\u7ebf\u3002"),(0,i.yg)("p",null,"ST_ANGLE \u5b58\u5728\u4ee5\u4e0b\u8fb9\u7f18\u60c5\u51b5\uff1a"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u5982\u679c\u70b9 2 \u548c\u70b9 3 \u76f8\u540c\uff0c\u5219\u8fd4\u56de NULL\u3002"),(0,i.yg)("li",{parentName:"ul"},"\u5982\u679c\u70b9 2 \u548c\u70b9 1 \u76f8\u540c\uff0c\u5219\u8fd4\u56de NULL\u3002"),(0,i.yg)("li",{parentName:"ul"},"\u5982\u679c\u70b9 2 \u548c\u70b9 3 \u662f\u5b8c\u5168\u5bf9\u6620\u70b9\uff0c\u5219\u8fd4\u56de NULL\u3002"),(0,i.yg)("li",{parentName:"ul"},"\u5982\u679c\u70b9 2 \u548c\u70b9 1 \u662f\u5b8c\u5168\u5bf9\u6620\u70b9\uff0c\u5219\u8fd4\u56de NULL\u3002"),(0,i.yg)("li",{parentName:"ul"},"\u5982\u679c\u4efb\u4f55\u8f93\u5165\u5730\u7406\u4f4d\u7f6e\u4e0d\u662f\u5355\u70b9\u6216\u4e3a\u7a7a\u5730\u7406\u4f4d\u7f6e\uff0c\u5219\u4f1a\u629b\u51fa\u9519\u8bef\u3002")),(0,i.yg)("h3",{id:"example"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql> SELECT ST_Angle(ST_Point(1, 0),ST_Point(0, 0),ST_Point(0, 1));\n+----------------------------------------------------------------------+\n| st_angle(st_point(1.0, 0.0), st_point(0.0, 0.0), st_point(0.0, 1.0)) |\n+----------------------------------------------------------------------+\n|                                                     4.71238898038469 |\n+----------------------------------------------------------------------+\n1 row in set (0.04 sec)\n\nmysql> SELECT ST_Angle(ST_Point(0, 0),ST_Point(1, 0),ST_Point(0, 1));\n+----------------------------------------------------------------------+\n| st_angle(st_point(0.0, 0.0), st_point(1.0, 0.0), st_point(0.0, 1.0)) |\n+----------------------------------------------------------------------+\n|                                                  0.78547432161873854 |\n+----------------------------------------------------------------------+\n1 row in set (0.02 sec)\n\nmysql> SELECT ST_Angle(ST_Point(1, 0),ST_Point(0, 0),ST_Point(1, 0));\n+----------------------------------------------------------------------+\n| st_angle(st_point(1.0, 0.0), st_point(0.0, 0.0), st_point(1.0, 0.0)) |\n+----------------------------------------------------------------------+\n|                                                                    0 |\n+----------------------------------------------------------------------+\n1 row in set (0.02 sec)\n\nmysql> SELECT ST_Angle(ST_Point(1, 0),ST_Point(0, 0),ST_Point(0, 0));\n+----------------------------------------------------------------------+\n| st_angle(st_point(1.0, 0.0), st_point(0.0, 0.0), st_point(0.0, 0.0)) |\n+----------------------------------------------------------------------+\n|                                                                 NULL |\n+----------------------------------------------------------------------+\n1 row in set (0.03 sec)\n\nmysql> SELECT ST_Angle(ST_Point(0, 0),ST_Point(-30, 0),ST_Point(150, 0));\n+--------------------------------------------------------------------------+\n| st_angle(st_point(0.0, 0.0), st_point(-30.0, 0.0), st_point(150.0, 0.0)) |\n+--------------------------------------------------------------------------+\n|                                                                     NULL |\n+--------------------------------------------------------------------------+\n1 row in set (0.02 sec)\n")),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("p",null,"ST_ANGLE,ST,ANGLE"))}g.isMDXComponent=!0}}]);