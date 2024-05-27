"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[92294],{15680:(e,a,n)=>{n.d(a,{xA:()=>m,yg:()=>u});var t=n(296540);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,i=function(e,a){if(null==e)return{};var n,t,i={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=t.createContext({}),d=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},m=function(e){var a=d(e.components);return t.createElement(s.Provider,{value:a},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},f=t.forwardRef((function(e,a){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=d(n),f=i,u=c["".concat(s,".").concat(f)]||c[f]||p[f]||l;return n?t.createElement(u,r(r({ref:a},m),{},{components:n})):t.createElement(u,r({ref:a},m))}));function u(e,a){var n=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=f;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[c]="string"==typeof e?e:i,r[1]=o;for(var d=2;d<l;d++)r[d]=n[d];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},550456:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var t=n(58168),i=(n(296540),n(15680));const l={title:"Small File Manager",language:"en"},r=void 0,o={unversionedId:"admin-manual/small-file-mgr",id:"version-2.0/admin-manual/small-file-mgr",title:"Small File Manager",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/admin-manual/small-file-mgr.md",sourceDirName:"admin-manual",slug:"/admin-manual/small-file-mgr",permalink:"/docs/2.0/admin-manual/small-file-mgr",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Small File Manager",language:"en"},sidebar:"docs",previous:{title:"Developing Plugins",permalink:"/docs/2.0/admin-manual/plugin-development-manual"},next:{title:"Compaction",permalink:"/docs/2.0/admin-manual/compaction"}},s={},d=[{value:"Noun Interpretation",id:"noun-interpretation",level:2},{value:"Basic concepts",id:"basic-concepts",level:2},{value:"Specific operation",id:"specific-operation",level:2},{value:"CREATE FILE",id:"create-file",level:3},{value:"SHOW FILE",id:"show-file",level:3},{value:"DROP FILE",id:"drop-file",level:3},{value:"Implementation details",id:"implementation-details",level:2},{value:"Create and delete files",id:"create-and-delete-files",level:3},{value:"Use of documents",id:"use-of-documents",level:3},{value:"Use restrictions",id:"use-restrictions",level:2},{value:"Relevant configuration",id:"relevant-configuration",level:2},{value:"More Help",id:"more-help",level:2}],m={toc:d},c="wrapper";function p(e){let{components:a,...n}=e;return(0,i.yg)(c,(0,t.A)({},m,n,{components:a,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"file-manager"},"File Manager"),(0,i.yg)("p",null,"Some functions in Doris require some user-defined files. For example, public keys, key files, certificate files and so on are used to access external data sources. The File Manager provides a function that allows users to upload these files in advance and save them in Doris system, which can then be referenced or accessed in other commands."),(0,i.yg)("h2",{id:"noun-interpretation"},"Noun Interpretation"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"BDBJE: Oracle Berkeley DB Java Edition. Distributed embedded database for persistent metadata in FE."),(0,i.yg)("li",{parentName:"ul"},"SmallFileMgr: File Manager. Responsible for creating and maintaining user files.")),(0,i.yg)("h2",{id:"basic-concepts"},"Basic concepts"),(0,i.yg)("p",null,"Files are files created and saved by users in Doris."),(0,i.yg)("p",null,"A file is located by ",(0,i.yg)("inlineCode",{parentName:"p"},"database"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"catalog"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"file_name"),". At the same time, each file also has a globally unique ID (file_id), which serves as the identification in the system."),(0,i.yg)("p",null,"File creation and deletion can only be performed by users with ",(0,i.yg)("inlineCode",{parentName:"p"},"admin")," privileges. A file belongs to a database. Users who have access to a database (queries, imports, modifications, etc.) can use the files created under the database."),(0,i.yg)("h2",{id:"specific-operation"},"Specific operation"),(0,i.yg)("p",null,"File management has three main commands: ",(0,i.yg)("inlineCode",{parentName:"p"},"CREATE FILE"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"SHOW FILE")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"DROP FILE"),", creating, viewing and deleting files respectively. The specific syntax of these three commands can be viewed by connecting to Doris and executing ",(0,i.yg)("inlineCode",{parentName:"p"},"HELP cmd;"),"."),(0,i.yg)("h3",{id:"create-file"},"CREATE FILE"),(0,i.yg)("p",null,"This statement is used to create and upload a file to the Doris cluster. For details, see ",(0,i.yg)("a",{parentName:"p",href:"/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-FILE"},"CREATE FILE"),"."),(0,i.yg)("p",null,"Examples:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'1. Create file ca.pem , classified as kafka\n\n    CREATE FILE "ca.pem"\n    PROPERTIES\n    (\n        "url" = "https://test.bj.bcebos.com/kafka-key/ca.pem",\n        "catalog" = "kafka"\n    );\n\n2. Create a file client.key, classified as my_catalog\n\n    CREATE FILE "client.key"\n    IN my_database\n    PROPERTIES\n    (\n        "url" = "https://test.bj.bcebos.com/kafka-key/client.key",\n        "catalog" = "my_catalog",\n        "md5" = "b5bb901bf10f99205b39a46ac3557dd9"\n    );\n')),(0,i.yg)("h3",{id:"show-file"},"SHOW FILE"),(0,i.yg)("p",null,"This statement can view the files that have been created successfully. For details, see ",(0,i.yg)("a",{parentName:"p",href:"/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-FILE"},"SHOW FILE"),"."),(0,i.yg)("p",null,"Examples:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"1. View uploaded files in database my_database\n\n    SHOW FILE FROM my_database;\n")),(0,i.yg)("h3",{id:"drop-file"},"DROP FILE"),(0,i.yg)("p",null,"This statement can view and delete an already created file. For specific operations, see ",(0,i.yg)("a",{parentName:"p",href:"/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-FILE"},"DROP FILE"),"."),(0,i.yg)("p",null,"Examples:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'1. delete file ca.pem\n\n    DROP FILE "ca.pem" properties("catalog" = "kafka");\n')),(0,i.yg)("h2",{id:"implementation-details"},"Implementation details"),(0,i.yg)("h3",{id:"create-and-delete-files"},"Create and delete files"),(0,i.yg)("p",null,"When the user executes the ",(0,i.yg)("inlineCode",{parentName:"p"},"CREATE FILE")," command, FE downloads the file from a given URL. The contents of the file are stored in FE memory directly in the form of Base64 encoding. At the same time, the file content and meta-information related to the file will be persisted in BDBJE. All created files, their meta-information and file content reside in FE memory. If the FE goes down and restarts, meta information and file content will also be loaded into memory from the BDBJE. When a file is deleted, the relevant information is deleted directly from FE memory and persistent information is deleted from BDBJE."),(0,i.yg)("h3",{id:"use-of-documents"},"Use of documents"),(0,i.yg)("p",null,"If the FE side needs to use the created file, SmallFileMgr will directly save the data in FE memory as a local file, store it in the specified directory, and return the local file path for use."),(0,i.yg)("p",null,"If the BE side needs to use the created file, BE will download the file content to the specified directory on BE through FE's HTTP interface ",(0,i.yg)("inlineCode",{parentName:"p"},"api/get_small_file")," for use. At the same time, BE also records the information of the files that have been downloaded in memory. When BE requests a file, it first checks whether the local file exists and verifies it. If the validation passes, the local file path is returned directly. If the validation fails, the local file is deleted and downloaded from FE again. When BE restarts, local files are preloaded into memory."),(0,i.yg)("h2",{id:"use-restrictions"},"Use restrictions"),(0,i.yg)("p",null,"Because the file meta-information and content are stored in FE memory. So by default, only files with size less than 1MB can be uploaded. And the total number of files is limited to 100. The configuration items described in the next section can be modified."),(0,i.yg)("h2",{id:"relevant-configuration"},"Relevant configuration"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"FE configuration")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"Small_file_dir"),": The path used to store uploaded files, defaulting to the ",(0,i.yg)("inlineCode",{parentName:"p"},"small_files/")," directory of the FE runtime directory.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"max_small_file_size_bytes"),": A single file size limit in bytes. The default is 1MB. File creation larger than this configuration will be rejected.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"max_small_file_number"),": The total number of files supported by a Doris cluster. The default is 100. When the number of files created exceeds this value, subsequent creation will be rejected."),(0,i.yg)("blockquote",{parentName:"li"},(0,i.yg)("p",{parentName:"blockquote"},"If you need to upload more files or increase the size limit of a single file, you can modify the ",(0,i.yg)("inlineCode",{parentName:"p"},"max_small_file_size_bytes")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"max_small_file_number")," parameters by using the ",(0,i.yg)("inlineCode",{parentName:"p"},"ADMIN SET CONFIG")," command. However, the increase in the number and size of files will lead to an increase in FE memory usage.")))),(0,i.yg)("ol",{start:2},(0,i.yg)("li",{parentName:"ol"},"BE configuration")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"Small_file_dir"),": The path used to store files downloaded from FE by default is in the ",(0,i.yg)("inlineCode",{parentName:"li"},"lib/small_files/")," directory of the BE runtime directory.")),(0,i.yg)("h2",{id:"more-help"},"More Help"),(0,i.yg)("p",null,"For more detailed syntax and best practices used by the file manager, see ",(0,i.yg)("a",{parentName:"p",href:"/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-FILE"},"CREATE FILE"),", ",(0,i.yg)("a",{parentName:"p",href:"/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-FILE"},"DROP FILE")," and ",(0,i.yg)("a",{parentName:"p",href:"/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-FILE"},"SHOW FILE")," command manual, you can also enter ",(0,i.yg)("inlineCode",{parentName:"p"},"HELP CREATE FILE"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"HELP DROP FILE")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"HELP SHOW FILE")," in the MySql client command line to get more help information."))}p.isMDXComponent=!0}}]);