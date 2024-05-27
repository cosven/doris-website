"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[66652],{15680:(e,n,i)=>{i.d(n,{xA:()=>u,yg:()=>c});var t=i(296540);function a(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function l(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function o(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?l(Object(i),!0).forEach((function(n){a(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function r(e,n){if(null==e)return{};var i,t,a=function(e,n){if(null==e)return{};var i,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)i=l[t],n.indexOf(i)>=0||(a[i]=e[i]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)i=l[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var p=t.createContext({}),s=function(e){var n=t.useContext(p),i=n;return e&&(i="function"==typeof e?e(n):o(o({},n),e)),i},u=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var i=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=s(i),g=a,c=d["".concat(p,".").concat(g)]||d[g]||m[g]||l;return i?t.createElement(c,o(o({ref:n},u),{},{components:i})):t.createElement(c,o({ref:n},u))}));function c(e,n){var i=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=i.length,o=new Array(l);o[0]=g;var r={};for(var p in n)hasOwnProperty.call(n,p)&&(r[p]=n[p]);r.originalType=e,r[d]="string"==typeof e?e:a,o[1]=r;for(var s=2;s<l;s++)o[s]=i[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,i)}g.displayName="MDXCreateElement"},665618:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>s});var t=i(58168),a=(i(296540),i(15680));const l={title:"Developing Plugins",language:"en"},o=void 0,r={unversionedId:"admin-manual/plugin-development-manual",id:"version-2.1/admin-manual/plugin-development-manual",title:"Developing Plugins",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/admin-manual/plugin-development-manual.md",sourceDirName:"admin-manual",slug:"/admin-manual/plugin-development-manual",permalink:"/docs/admin-manual/plugin-development-manual",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Developing Plugins",language:"en"},sidebar:"docs",previous:{title:"Restore Tablet",permalink:"/docs/admin-manual/be/tablet-restore"},next:{title:"Small File Manager",permalink:"/docs/admin-manual/small-file-mgr"}},p={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Plugin",id:"plugin",level:2},{value:"Write A Plugin",id:"write-a-plugin",level:2},{value:"Create module",id:"create-module",level:3},{value:"Add zip.xml",id:"add-zipxml",level:3},{value:"Update pom.xml",id:"update-pomxml",level:3},{value:"Implement plugin",id:"implement-plugin",level:3},{value:"Compile",id:"compile",level:3},{value:"Other way",id:"other-way",level:3},{value:"Deploy",id:"deploy",level:2},{value:"Install and Uninstall",id:"install-and-uninstall",level:2}],u={toc:s},d="wrapper";function m(e){let{components:n,...i}=e;return(0,a.yg)(d,(0,t.A)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"doris-plugin-framework"},"Doris Plugin Framework"),(0,a.yg)("h2",{id:"introduction"},"Introduction"),(0,a.yg)("p",null,"Doris plugin framework supports install/uninstall custom plugins at runtime without restart the Doris service. Users can extend Doris's functionality by developing their own plugins."),(0,a.yg)("p",null,"For example, the audit plugin worked after a request execution, it can obtain information related to a request (access user, request IP, SQL, etc...) and write the information into the specified table."),(0,a.yg)("p",null,"Differences from UDF:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"UDF is a function used for data calculation when SQL is executed. Plugin is additional function that is used to extend Doris with customized function, such as support different storage engines and different import ways, and plugin doesn't participate in data calculation when executing SQL."),(0,a.yg)("li",{parentName:"ul"},"The execution cycle of UDF is limited to a SQL execution. The execution cycle of plugin may be the same as the Doris process."),(0,a.yg)("li",{parentName:"ul"},"The usage scene is different. If you need to support special data algorithms when executing SQL, then UDF is recommended, if you need to run custom functions on Doris, or start a background thread to do tasks, then the use of plugin is recommended.")),(0,a.yg)("p",null,"Currently the plugin framework only supports audit plugins."),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Note:\nDoris plugin framework is an experimental feature, currently only supports FE plugin, and is closed by default, can be opened by FE configuration ",(0,a.yg)("inlineCode",{parentName:"p"},"plugin_enable = true"),".")),(0,a.yg)("h2",{id:"plugin"},"Plugin"),(0,a.yg)("p",null,"A FE Plugin can be a ",(0,a.yg)("strong",{parentName:"p"},".zip package")," or a ",(0,a.yg)("strong",{parentName:"p"},"directory"),", which contains at least two parts: the ",(0,a.yg)("inlineCode",{parentName:"p"},"plugin.properties")," and ",(0,a.yg)("inlineCode",{parentName:"p"},".jar")," files. The ",(0,a.yg)("inlineCode",{parentName:"p"},"plugin.properties")," file is used to describe the plugin information."),(0,a.yg)("p",null,"The file structure of a Plugin looks like this:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"# plugin .zip\nauditodemo.zip:\n    -plugin.properties\n    -auditdemo.jar\n    -xxx.config\n    -data/\n    -test_data/\n\n# plugin local directory\nauditodemo/:\n    -plugin.properties\n    -auditdemo.jar\n    -xxx.config\n    -data/\n    -test_data/\n")),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"plugin.properties")," example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'### required:\n#\n# the plugin name\nname = audit_plugin_demo\n#\n# the plugin type\ntype = AUDIT\n#\n# simple summary of the plugin\ndescription = just for test\n#\n# Doris\'s version, like: 0.11.0\nversion = 0.11.0\n\n### FE-Plugin optional:\n#\n# version of java the code is built against\n# use the command "java -version" value, like 1.8.0, 9.0.1, 13.0.4\njava.version = 1.8.31\n#\n# the name of the class to load, fully-qualified.\nclassname = AuditPluginDemo\n\n### BE-Plugin optional:\n# the name of the so to load\nsoName = example.so\n')),(0,a.yg)("h2",{id:"write-a-plugin"},"Write A Plugin"),(0,a.yg)("p",null,"The development environment of the FE plugin depends on the development environment of Doris. So please make sure Doris's compilation and development environment works normally."),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"fe_plugins")," is the parent module of the fe plugins. It can uniformly manage the third-party library information that the plugin depends on. Adding a plugin can add a submodule implementation under ",(0,a.yg)("inlineCode",{parentName:"p"},"fe_plugins"),"."),(0,a.yg)("h3",{id:"create-module"},"Create module"),(0,a.yg)("p",null,"We can add a submodule in the ",(0,a.yg)("inlineCode",{parentName:"p"},"fe_plugins")," directory to implement Plugin and create a project:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mvn archetype: generate -DarchetypeCatalog = internal -DgroupId = org.apache -DartifactId = doris-fe-test -DinteractiveMode = false\n")),(0,a.yg)("p",null,"The command produces a new mvn project, and a new submodule is automatically added to ",(0,a.yg)("inlineCode",{parentName:"p"},"fe_plugins/pom.xml"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"\xa0\xa0\xa0\xa0.....\n\xa0\xa0\xa0\xa0<groupId>org.apache</groupId>\n\xa0\xa0\xa0\xa0<artifactId>doris-fe-plugins</artifactId>\n\xa0\xa0\xa0\xa0<packaging>pom</packaging>\n\xa0\xa0\xa0\xa0<version>1.0-SNAPSHOT</version>\n\xa0\xa0\xa0\xa0<modules>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<module>auditdemo</module>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0# new plugin module\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<module>doris-fe-test</module>\n\xa0\xa0\xa0\xa0</modules>\n\xa0\xa0\xa0\xa0.....\n")),(0,a.yg)("p",null,"The new plugin project file structure is as follows:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"-doris-fe-test/\n-pom.xml\n-src/\n    ---- main/java/org/apache/\n    ------- App.java # mvn auto generate, ignore\n    ---- test/java/org/apache\n")),(0,a.yg)("p",null,"We will add an assembly folder under main to store ",(0,a.yg)("inlineCode",{parentName:"p"},"plugin.properties")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"zip.xml"),". After completion, the file structure is as follows:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"-doris-fe-test/\n-pom.xml\n-src/\n---- main/\n------ assembly/\n-------- plugin.properties\n-------- zip.xml\n------ java/org/apache/\n--------App.java # mvn auto generate, ignore\n---- test/java/org/apache\n")),(0,a.yg)("h3",{id:"add-zipxml"},"Add zip.xml"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"zip.xml"),", used to describe the content of the final package of the plugin (.jar file, plugin.properties):"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"<assembly>\n\xa0\xa0\xa0\xa0<id>plugin</id>\n\xa0\xa0\xa0\xa0<formats>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<format>zip</format>\n\xa0\xa0\xa0\xa0</formats>\n\xa0\xa0\xa0\xa0<!-IMPORTANT: must be false->\n\xa0\xa0\xa0\xa0<includeBaseDirectory>false</includeBaseDirectory>\n\xa0\xa0\xa0\xa0<fileSets>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<fileSet>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<directory>target</directory>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<includes>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<include>*.jar</include>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0</ ncludes>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<outputDirectory>/</outputDirectory>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0</fileSet>\n\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<fileSet>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<directory>src/main/assembly</directory>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<includes>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<include>plugin.properties</include>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0</includes>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<outputDirectory>/</outputDirectory>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0</fileSet>\n\xa0\xa0\xa0\xa0</fileSets>\n</assembly>\n")),(0,a.yg)("h3",{id:"update-pomxml"},"Update pom.xml"),(0,a.yg)("p",null,"Then we need to update ",(0,a.yg)("inlineCode",{parentName:"p"},"pom.xml"),", add doris-fe dependency, and modify maven packaging way:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n         xmlns="http://maven.apache.org/POM/4.0.0"\n         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <parent>\n        <groupId>org.apache</groupId>\n        <artifactId>doris-fe-plugins</artifactId>\n        <version>1.0-SNAPSHOT</version>\n    </parent>\n    <modelVersion>4.0.0</modelVersion>\n\n    <artifactId>auditloader</artifactId>\n    <packaging>jar</packaging>\n\n    <dependencies>\n        \x3c!-- doris-fe dependencies --\x3e\n        <dependency>\n            <groupId>org.apache</groupId>\n            <artifactId>doris-fe</artifactId>\n        </dependency>\n\n        \x3c!-- other dependencies --\x3e\n        <dependency>\n            ...\n        </dependency>\n    </dependencies>\n\n\n    <build>\n        <finalName>auditloader</finalName>\n        <plugins>\n            <plugin>\n                <artifactId>maven-assembly-plugin</artifactId>\n                <version>2.4.1</version>\n                <configuration>\n                    <appendAssemblyId>false</appendAssemblyId>\n                    <descriptors>\n                        <descriptor>src/main/assembly/zip.xml</descriptor>\n                    </descriptors>\n                </configuration>\n                <executions>\n                    <execution>\n                        <id>make-assembly</id>\n                        <phase>package</phase>\n                        <goals>\n                            <goal>single</goal>\n                        </goals>\n                    </execution>\n                </executions>\n            </plugin>\n        </plugins>\n    </build>\n\n</project>\n')),(0,a.yg)("h3",{id:"implement-plugin"},"Implement plugin"),(0,a.yg)("p",null,"Then we can implement Plugin according to the needs. Plugins need to implement the ",(0,a.yg)("inlineCode",{parentName:"p"},"Plugin")," interface. For details, please refer to the ",(0,a.yg)("inlineCode",{parentName:"p"},"auditdemo")," plugin sample code that comes with Doris."),(0,a.yg)("h3",{id:"compile"},"Compile"),(0,a.yg)("p",null,"Before compiling the plugin, you must first execute ",(0,a.yg)("inlineCode",{parentName:"p"},"sh build.sh --fe")," of Doris to complete the compilation of Doris FE."),(0,a.yg)("p",null,"Finally, execute ",(0,a.yg)("inlineCode",{parentName:"p"},"sh build_plugin.sh")," in the ${DORIS_HOME} path and you will find the ",(0,a.yg)("inlineCode",{parentName:"p"},"your_plugin_name.zip")," file in ",(0,a.yg)("inlineCode",{parentName:"p"},"fe_plugins/output")),(0,a.yg)("p",null,"Or you can execute ",(0,a.yg)("inlineCode",{parentName:"p"},"sh build_plugin.sh --plugin your_plugin_name")," to only build your plugin."),(0,a.yg)("h3",{id:"other-way"},"Other way"),(0,a.yg)("p",null,"The easiest way, you can implement your plugin by modifying the example ",(0,a.yg)("inlineCode",{parentName:"p"},"auditdemo")),(0,a.yg)("h2",{id:"deploy"},"Deploy"),(0,a.yg)("p",null,"Doris's plugin can be deployed in three ways:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Http or Https .zip, like ",(0,a.yg)("inlineCode",{parentName:"li"},"http://xxx.xxxxxx.com/data/plugin.zip"),", Doris will download this .zip file. At the same time, the value of md5sum needs to be set in properties, or an md5 file with the same name as the ",(0,a.yg)("inlineCode",{parentName:"li"},".zip")," file needs to be placed, such as ",(0,a.yg)("inlineCode",{parentName:"li"},"http://xxx.xxxxxx.com/data/my_plugin.zip.md5"),". The content is the MD5 value of the .zip file."),(0,a.yg)("li",{parentName:"ul"},"Local .zip, like ",(0,a.yg)("inlineCode",{parentName:"li"},"/home/work/data/plugin.zip"),". If the plug-in is only used for FE, it needs to be deployed in the same directory of all FE nodes. Otherwise, it needs to be deployed on all FE and BE nodes."),(0,a.yg)("li",{parentName:"ul"},"Local directory, like ",(0,a.yg)("inlineCode",{parentName:"li"},"/home/work/data/plugin"),", .zip decompressed folder. If the plug-in is only used for FE, it needs to be deployed in the same directory of all FE nodes. Otherwise, it needs to be deployed on all FE and BE nodes.")),(0,a.yg)("p",null,"Note: Need to ensure that the plugin .zip file is available in the life cycle of doris!"),(0,a.yg)("h2",{id:"install-and-uninstall"},"Install and Uninstall"),(0,a.yg)("p",null,"Install and uninstall the plugin through the install/uninstall statements. More details, see ",(0,a.yg)("inlineCode",{parentName:"p"},"HELP INSTALL PLUGIN;")," ",(0,a.yg)("inlineCode",{parentName:"p"},"HELP UNINSTALL PLUGIN;")," ",(0,a.yg)("inlineCode",{parentName:"p"},"HELP SHOW PLUGINS;")," "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'mysql> install plugin from "/home/users/doris/auditloader.zip";\nQuery OK, 0 rows affected (0.09 sec)\n\nmysql> show plugins\\G\n*************************** 1. row ***************************\n       Name: auditloader\n       Type: AUDIT\nDescription: load audit log to olap load, and user can view the statistic of queries\n    Version: 0.12.0\nJavaVersion: 1.8.31\n  ClassName: AuditLoaderPlugin\n     SoName: NULL\n    Sources: /home/users/doris/auditloader.zip\n     Status: INSTALLED\n Properties: {}\n*************************** 2. row ***************************\n       Name: AuditLogBuilder\n       Type: AUDIT\nDescription: builtin audit logger\n    Version: 0.12.0\nJavaVersion: 1.8.31\n  ClassName: org.apache.doris.qe.AuditLogBuilder\n     SoName: NULL\n    Sources: Builtin\n     Status: INSTALLED\n Properties: {}   \n2 rows in set (0.00 sec)\n\nmysql> uninstall plugin auditloader;\nQuery OK, 0 rows affected (0.05 sec)\n\nmysql> show plugins;\nEmpty set (0.00 sec)\n')))}m.isMDXComponent=!0}}]);