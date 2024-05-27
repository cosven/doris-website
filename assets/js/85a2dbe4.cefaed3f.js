"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[84102],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>d});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=a,d=p["".concat(c,".").concat(f)]||p[f]||m[f]||o;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},466268:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(58168),a=(n(296540),n(15680));const o={title:"ORTHOGONAL_BITMAP_EXPR_CALCULATE_COUNT",language:"en"},i=void 0,l={unversionedId:"sql-manual/sql-functions/bitmap-functions/orthogonal-bitmap-expr-calculate-count",id:"version-2.1/sql-manual/sql-functions/bitmap-functions/orthogonal-bitmap-expr-calculate-count",title:"ORTHOGONAL_BITMAP_EXPR_CALCULATE_COUNT",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-functions/bitmap-functions/orthogonal-bitmap-expr-calculate-count.md",sourceDirName:"sql-manual/sql-functions/bitmap-functions",slug:"/sql-manual/sql-functions/bitmap-functions/orthogonal-bitmap-expr-calculate-count",permalink:"/docs/sql-manual/sql-functions/bitmap-functions/orthogonal-bitmap-expr-calculate-count",draft:!1,tags:[],version:"2.1",frontMatter:{title:"ORTHOGONAL_BITMAP_EXPR_CALCULATE_COUNT",language:"en"},sidebar:"docs",previous:{title:"ORTHOGONAL_BITMAP_EXPR_CALCULATE",permalink:"/docs/sql-manual/sql-functions/bitmap-functions/orthogonal-bitmap-expr-calculate"},next:{title:"BITMAP_HASH64",permalink:"/docs/sql-manual/sql-functions/bitmap-functions/bitmap-hash64"}},c={},s=[{value:"orthogonal_bitmap_expr_calculate_count",id:"orthogonal_bitmap_expr_calculate_count",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"orthogonal_bitmap_expr_calculate_count"},"orthogonal_bitmap_expr_calculate_count"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"BITMAP ORTHOGONAL_BITMAP_EXPR_CALCULATE_COUNT(bitmap_column, column_to_filter, input_string)"),"\nCalculate the bitmap intersection, union and difference set of expressions to calculate the count function. The first parameter is the Bitmap column, the second parameter is the dimension column used for filtering, that is, the calculated key column, and the third parameter is the calculation expression string, meaning that the bitmap intersection, union and difference set expression is calculated according to the key column\nThe calculators supported by the expression:&represents intersection calculation, | represents union calculation, - represents difference calculation, ^ represents XOR calculation, and \\ represents escape characters"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"select orthogonal_bitmap_expr_calculate_count(user_id, tag, '(833736|999777)&(1308083|231207)&(1000|20000-30000)') from user_tag_bitmap where tag in (833736,999777,130808,231207,1000,20000,30000);\nNote: 1000, 20000, 30000 plastic tags represent different labels of users\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"select orthogonal_bitmap_expr_calculate_count(user_id, tag, '(A:a/b|B:2\\\\-4)&(C:1-D:12)&E:23') from user_str_tag_bitmap where tag in ('A:a/b', 'B:2-4', 'C:1', 'D:12', 'E:23');\nNote: 'A:a/b', 'B:2-4', etc. are string types tag, representing different labels of users, where 'B:2-4' needs to be escaped as'B:2\\\\-4'\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"   ORTHOGONAL_BITMAP_EXPR_CALCULATE_COUNT,BITMAP"))}m.isMDXComponent=!0}}]);