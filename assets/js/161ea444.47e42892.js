"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[43351],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>y});var r=a(296540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),u=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(a),g=n,y=p["".concat(i,".").concat(g)]||p[g]||m[g]||l;return a?r.createElement(y,o(o({ref:t},c),{},{components:a})):r.createElement(y,o({ref:t},c))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=g;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:n,o[1]=s;for(var u=2;u<l;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},988404:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=a(58168),n=(a(296540),a(15680));const l={title:"SET-PROPERTY",language:"en"},o=void 0,s={unversionedId:"sql-manual/sql-statements/Account-Management-Statements/SET-PROPERTY",id:"version-2.1/sql-manual/sql-statements/Account-Management-Statements/SET-PROPERTY",title:"SET-PROPERTY",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-statements/Account-Management-Statements/SET-PROPERTY.md",sourceDirName:"sql-manual/sql-statements/Account-Management-Statements",slug:"/sql-manual/sql-statements/Account-Management-Statements/SET-PROPERTY",permalink:"/docs/sql-manual/sql-statements/Account-Management-Statements/SET-PROPERTY",draft:!1,tags:[],version:"2.1",frontMatter:{title:"SET-PROPERTY",language:"en"},sidebar:"docs",previous:{title:"SET-PASSWORD",permalink:"/docs/sql-manual/sql-statements/Account-Management-Statements/SET-PASSWORD"},next:{title:"LDAP",permalink:"/docs/sql-manual/sql-statements/Account-Management-Statements/LDAP"}},i={},u=[{value:"SET-PROPERTY",id:"set-property",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:u},p="wrapper";function m(e){let{components:t,...a}=e;return(0,n.yg)(p,(0,r.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"set-property"},"SET-PROPERTY"),(0,n.yg)("h3",{id:"name"},"Name"),(0,n.yg)("p",null,"SET PROPERTY"),(0,n.yg)("h3",{id:"description"},"Description"),(0,n.yg)("p",null,"Set user attributes, including resources assigned to users, importing clusters, etc."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY [FOR 'user'] 'key' = 'value' [, 'key' = 'value']\n")),(0,n.yg)("p",null,"The user attribute set here is for user, not user_identity. That is, if two users 'jack'@'%' and 'jack'@'192.%' are created through the CREATE USER statement, the SET PROPERTY statement can only be used for the user jack, not 'jack'@'% ' or 'jack'@'192.%'"),(0,n.yg)("p",null,"key:"),(0,n.yg)("p",null,"Super user privileges:"),(0,n.yg)("p",null," max_user_connections: The maximum number of connections."),(0,n.yg)("p",null," max_query_instances: The number of instances that a user can use to execute a query at the same time."),(0,n.yg)("p",null," sql_block_rules: Set sql block rules. Once set, queries sent by this user will be rejected if they match the rules."),(0,n.yg)("p",null," cpu_resource_limit: Limit the cpu resources for queries. See the introduction to the session variable ",(0,n.yg)("inlineCode",{parentName:"p"},"cpu_resource_limit")," for details. -1 means not set."),(0,n.yg)("p",null," exec_mem_limit: Limit the memory usage of the query. See the introduction to the session variable ",(0,n.yg)("inlineCode",{parentName:"p"},"exec_mem_limit")," for details. -1 means not set."),(0,n.yg)("p",null," resource.cpu_share: CPU resource allocation. (obsolete)"),(0,n.yg)("p",null," load_cluster.{cluster_name}.priority: Assign priority to the specified cluster, which can be HIGH or NORMAL"),(0,n.yg)("p",null," resource_tags: Specifies the user's resource tag permissions."),(0,n.yg)("p",null," query_timeout: Specifies the user's query timeout permissions."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"Note: If the attributes `cpu_resource_limit`, `exec_mem_limit` are not set, the value in the session variable will be used by default.\n")),(0,n.yg)("p",null,"Ordinary user rights:"),(0,n.yg)("p",null," quota.normal: resource allocation at the normal level."),(0,n.yg)("p",null," quota.high: High-level resource allocation."),(0,n.yg)("p",null," quota.low: resource allocation at low level."),(0,n.yg)("p",null," load_cluster.{cluster_name}.hadoop_palo_path: The hadoop directory used by palo, which needs to store the etl program and the intermediate data generated by etl for Doris to import. After the import is completed, the intermediate will be automatically cleaned up"),(0,n.yg)("p",null,"Data, etl program automatically retains the next use."),(0,n.yg)("p",null," load_cluster.{cluster_name}.hadoop_configs: The configuration of hadoop, where fs.default.name, mapred.job.tracker, hadoop.job.ugi must be filled in."),(0,n.yg)("p",null," load_cluster.{cluster_name}.hadoop_http_port: hadoop hdfs name node http port. Where hdfs defaults to 8070, afs defaults to 8010."),(0,n.yg)("p",null," default_load_cluster: The default import cluster."),(0,n.yg)("h3",{id:"example"},"Example"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Modify the maximum number of user jack connections to 1000"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY FOR 'jack' 'max_user_connections' = '1000';\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Modify the cpu_share of user jack to 1000"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY FOR 'jack' 'resource.cpu_share' = '1000';\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Modify the weight of the jack user's normal group"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY FOR 'jack' 'quota.normal' = '400';\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Add import cluster for user jack"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY FOR 'jack'\n    'load_cluster.{cluster_name}.hadoop_palo_path' = '/user/doris/doris_path',\n    'load_cluster.{cluster_name}.hadoop_configs' = 'fs.default.name=hdfs://dpp.cluster.com:port;mapred.job.tracker=dpp.cluster.com:port;hadoop.job.ugi=user ,password;mapred.job.queue.name=job_queue_name_in_hadoop;mapred.job.priority=HIGH;';\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Delete the imported cluster under user jack."),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY FOR 'jack' 'load_cluster.{cluster_name}' = '';\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Modify the default import cluster of user jack"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY FOR 'jack' 'default_load_cluster' = '{cluster_name}';\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Change the cluster priority of user jack to HIGH"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY FOR 'jack' 'load_cluster.{cluster_name}.priority' = 'HIGH';\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Modify the number of available instances for user jack's query to 3000"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY FOR 'jack' 'max_query_instances' = '3000';\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Modify the sql block rule of user jack"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY FOR 'jack' 'sql_block_rules' = 'rule1, rule2';\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Modify the cpu usage limit of user jack"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY FOR 'jack' 'cpu_resource_limit' = '2';\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Modify the user's resource tag permissions"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY FOR 'jack' 'resource_tags.location' = 'group_a, group_b';\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Modify the user's query memory usage limit, in bytes"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY FOR 'jack' 'exec_mem_limit' = '2147483648';\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Modify the user's query timeout limit, in second"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY FOR 'jack' 'query_timeout' = '500';\n")))),(0,n.yg)("h3",{id:"keywords"},"Keywords"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"SET, PROPERTY\n")),(0,n.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);