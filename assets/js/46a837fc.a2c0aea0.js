"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[88113],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),g=r,y=m["".concat(s,".").concat(g)]||m[g]||u[g]||l;return n?a.createElement(y,o(o({ref:t},c),{},{components:n})):a.createElement(y,o({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},539290:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(58168),r=(n(296540),n(15680));const l={title:"ALTER-COLOCATE-GROUP",language:"en"},o=void 0,i={unversionedId:"sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-COLOCATE-GROUP",id:"sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-COLOCATE-GROUP",title:"ALTER-COLOCATE-GROUP",description:"\x3c!--",source:"@site/docs/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-COLOCATE-GROUP.md",sourceDirName:"sql-manual/sql-statements/Data-Definition-Statements/Alter",slug:"/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-COLOCATE-GROUP",permalink:"/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-COLOCATE-GROUP",draft:!1,tags:[],version:"current",frontMatter:{title:"ALTER-COLOCATE-GROUP",language:"en"},sidebar:"docs",previous:{title:"ALTER-RESOURCE",permalink:"/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-RESOURCE"},next:{title:"ALTER-WORKLOAD-GROUP",permalink:"/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-WORKLOAD-GROUP"}},s={},p=[{value:"ALTER-COLOCATE-GROUP",id:"alter-colocate-group",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"alter-colocate-group"},"ALTER-COLOCATE-GROUP"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"ALTER COLOCATE GROUP"),(0,r.yg)("version",{since:"dev"}),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"This statement is used to modify the colocation group."),(0,r.yg)("p",null,"Syntax:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER COLOCATE GROUP [database.]group\nSET (\n    property_list\n);\n")),(0,r.yg)("p",null,"NOTE:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"If the colocate group is global, that is, its name starts with ",(0,r.yg)("inlineCode",{parentName:"p"},"__global__"),", then it does not belong to any database;\t")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"property_list is a colocation group attribute, currently only supports modifying ",(0,r.yg)("inlineCode",{parentName:"p"},"replication_num")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"replication_allocation"),". After modifying these two attributes of the colocation group, at the same time, change the attribute ",(0,r.yg)("inlineCode",{parentName:"p"},"default.replication_allocation"),", the attribute ",(0,r.yg)("inlineCode",{parentName:"p"},"dynamic.replication_allocation")," of the table of the group, and the ",(0,r.yg)("inlineCode",{parentName:"p"},"replication_allocation")," of the existing partition to be the same as it."))),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Modify the number of copies of a global group"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'# Set "colocate_with" = "__global__foo" when creating the table\n\nALTER COLOCATE GROUP __global__foo\nSET (\n    "replication_num"="1"\n);   \n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Modify the number of copies of a non-global group"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'   # Set "colocate_with" = "bar" when creating the table, and the Database is "example_db"\n   \n   ALTER COLOCATE GROUP example_db.bar\n   SET (\n       "replication_num"="1"\n   );\n')))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER, COLOCATE, GROUP\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);