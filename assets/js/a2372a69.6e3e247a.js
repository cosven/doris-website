"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[23172],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>d});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),h=a,d=m["".concat(s,".").concat(h)]||m[h]||p[h]||l;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},83983:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(58168),a=(n(296540),n(15680));const l={title:"SHOW-PROCESSLIST",language:"en"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-PROCESSLIST",id:"version-2.0/sql-manual/sql-reference/Show-Statements/SHOW-PROCESSLIST",title:"SHOW-PROCESSLIST",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-reference/Show-Statements/SHOW-PROCESSLIST.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-PROCESSLIST",permalink:"/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-PROCESSLIST",draft:!1,tags:[],version:"2.0",frontMatter:{title:"SHOW-PROCESSLIST",language:"en"},sidebar:"docs",previous:{title:"SHOW-TRIGGERS",permalink:"/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-TRIGGERS"},next:{title:"SHOW-TRASH",permalink:"/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-TRASH"}},s={},c=[{value:"SHOW-PROCESSLIST",id:"show-processlist",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],u={toc:c},m="wrapper";function p(e){let{components:t,...n}=e;return(0,a.yg)(m,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"show-processlist"},"SHOW-PROCESSLIST"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"SHOW PROCESSLIST"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"Display the running threads of the user. It should be noted that except the root user who can see all running threads, other users can only see their own running threads, and cannot see the running threads of other users."),(0,a.yg)("p",null,"grammar:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW [FULL] PROCESSLIST\n")),(0,a.yg)("p",null,"illustrate:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"CurrentConnected: Indicates whether the connection is currently connected"),(0,a.yg)("li",{parentName:"ul"},"Id: It is the unique identifier of this thread. When we find that there is a problem with this thread, we can use the kill command to add this Id value to kill this thread. Earlier we said that the information displayed by show processlist comes from the information_schema.processlist table, so this Id is the primary key of this table."),(0,a.yg)("li",{parentName:"ul"},"User: refers to the user who started this thread."),(0,a.yg)("li",{parentName:"ul"},"Host: Records the IP and port number of the client sending the request. Through this information, when troubleshooting the problem, we can locate which client and which process sent the request."),(0,a.yg)("li",{parentName:"ul"},"LoginTime: Timestamp when the connection is make."),(0,a.yg)("li",{parentName:"ul"},"Catalog: Catalog name."),(0,a.yg)("li",{parentName:"ul"},"Db: which database the currently executed command is on. If no database is specified, the value is NULL ."),(0,a.yg)("li",{parentName:"ul"},"Command: refers to the command that the thread is executing at the moment. "),(0,a.yg)("li",{parentName:"ul"},"Time: Indicates the time the thread is in the current state."),(0,a.yg)("li",{parentName:"ul"},"State: The state of the thread, corresponding to Command."),(0,a.yg)("li",{parentName:"ul"},"QueryId: The ID of the current query statement."),(0,a.yg)("li",{parentName:"ul"},"Info: Generally recorded is the statement executed by the thread. By default, only the first 100 characters are displayed, that is, the statement you see may be truncated. To see all the information, you need to use show full processlist.")),(0,a.yg)("p",null,"Common Command types are as follows\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Query: The thread is executing a statement"),(0,a.yg)("li",{parentName:"ul"},"Sleep: is waiting for a client to send it an execute statement"),(0,a.yg)("li",{parentName:"ul"},"Quit: the thread is exiting"),(0,a.yg)("li",{parentName:"ul"},"Kill : The kill statement is being executed to kill the specified thread")),(0,a.yg)("p",null,"Other types can refer to ",(0,a.yg)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/5.6/en/thread-commands.html"},"MySQL official website for explanation")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"View the threads running by the current user"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-SQL"},"SHOW PROCESSLIST\n")),(0,a.yg)("p",{parentName:"li"},"return"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"MySQL [test]> show full processlist;\n+------------------+------+------+-----------------+---------------------+----------+------+---------+------+-------+-----------------------------------+-----------------------+\n| CurrentConnected | Id   | User | Host            | LoginTime           | Catalog  | Db   | Command | Time | State | QueryId                           | Info                  |\n+------------------+------+------+-----------------+---------------------+----------+------+---------+------+-------+-----------------------------------+-----------------------+\n| Yes              |    0 | root | 127.0.0.1:34650 | 2023-09-06 12:01:02 | internal | test | Query   |    0 | OK    | c84e397193a54fe7-bbe9bc219318b75e | select 1              |\n|                  |    1 | root | 127.0.0.1:34776 | 2023-09-06 12:01:07 | internal |      | Sleep   |   29 | EOF   | 886ffe2894314f50-8dd73a6ca06699e4 | show full processlist |\n+------------------+------+------+-----------------+---------------------+----------+------+---------+------+-------+-----------------------------------+-----------------------+\n")))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SHOW, PROCESSLIST\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}p.isMDXComponent=!0}}]);