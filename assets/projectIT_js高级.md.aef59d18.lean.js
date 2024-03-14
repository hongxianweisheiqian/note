import{_ as o,E as t,o as e,c,J as a,k as s,a as l,S as p}from"./chunks/framework.1389b149.js";const Ps=JSON.parse('{"title":"jquery","description":"","frontmatter":{},"headers":[],"relativePath":"projectIT/js高级.md","filePath":"projectIT/js高级.md"}'),r={name:"projectIT/js高级.md"},F=s("p",null,"git 操作",-1),y=s("h2",{id:"全局配置用户名邮箱",tabindex:"-1"},[l("全局配置用户名邮箱 "),s("a",{class:"header-anchor",href:"#全局配置用户名邮箱","aria-label":'Permalink to "全局配置用户名邮箱"'},"​")],-1),D=s("h2",{id:"查看全局配置",tabindex:"-1"},[l("查看全局配置 "),s("a",{class:"header-anchor",href:"#查看全局配置","aria-label":'Permalink to "查看全局配置"'},"​")],-1),C=s("h2",{id:"创建本地仓库",tabindex:"-1"},[s("strong",null,"创建本地仓库"),l(),s("a",{class:"header-anchor",href:"#创建本地仓库","aria-label":'Permalink to "**创建本地仓库**"'},"​")],-1),A=s("h2",{id:"查看文件状态",tabindex:"-1"},[s("strong",null,"查看文件状态"),l(),s("a",{class:"header-anchor",href:"#查看文件状态","aria-label":'Permalink to "**查看文件状态**"'},"​")],-1),i=s("p",null,[l("可简写为 "),s("code",null,"git status -s"),l("会展示更加精简的内容")],-1),g=s("h2",{id:"开始跟踪文件",tabindex:"-1"},[s("strong",null,"开始跟踪文件"),l(),s("a",{class:"header-anchor",href:"#开始跟踪文件","aria-label":'Permalink to "**开始跟踪文件**"'},"​")],-1),u=s("h2",{id:"提交到-git-仓库进行管理",tabindex:"-1"},[s("strong",null,"提交到 git 仓库进行管理"),l(),s("a",{class:"header-anchor",href:"#提交到-git-仓库进行管理","aria-label":'Permalink to "**提交到 git 仓库进行管理**"'},"​")],-1),d=s("ul",null,[s("li",null,[l("如果将已经提交"),s("code",null,"git"),l("仓库的文件进行修改后，再查看文件状态会变成 "),s("code",null,"modified"),l("状态")])],-1),h=s("h2",{id:"此时运行git-add就可以将已修改的文件重新提交到暂存区",tabindex:"-1"},[l("此时运行"),s("code",null,"git add"),l("就可以将已修改的文件重新提交到暂存区 "),s("a",{class:"header-anchor",href:"#此时运行git-add就可以将已修改的文件重新提交到暂存区","aria-label":'Permalink to "此时运行`git add`就可以将已修改的文件重新提交到暂存区"'},"​")],-1),E=s("ul",null,[s("li",null,[l("提交后可运行"),s("code",null,"git commit -m"),l("把暂存区文件提交到"),s("code",null,"git"),l("仓库管理")])],-1),f=s("ul",null,[s("li",null,[l("撤销操作（不建议） "),s("ul",null,[s("li",null,[l("用"),s("code",null,"git"),l("仓库中保存的文件，覆盖工作区中指定的文件")])])])],-1),m=s("ul",null,[s("li",null,[s("strong",null,"一次提交多个文件到暂存区")]),s("li",null,[s("strong",null,"即使是未跟踪的文件也会被直接提交到暂存区")])],-1),b=p("",2),v=s("li",null,[s("p",null,[s("strong",null,[l("忽略文件，在 git 仓库里创建一个"),s("code",null,".gitignore"),l("文件，在里面写正则就可以匹配文件选择性的忽略，忽略的文件不会被跟踪到")])])],-1),_=s("li",null,null,-1),q=s("li",null,[s("p",null,[s("strong",null,"查看历史提交信息")])],-1),B=s("li",null,[s("p",null,[s("strong",null,"版本回退")])],-1),j=s("li",null,[s("p",null,[l("回退后"),s("code",null,"log"),l("命令就不能查看全部历史版本信息，这时需要用"),s("code",null,"reflog"),l("命令查看")])],-1),x=s("ul",null,[s("li",null,"将本地仓库推送到远程仓库中（不推荐这种方式）")],-1),k=s("ul",null,[s("li",null,[s("strong",null,"使用 SSH 上传远程服务器"),l("（推荐这种方式）")]),s("li",null,[l('ssh-keygen -t rsa -b 4096 -C "'),s("a",{href:"mailto:your_email@example.com",target:"_blank",rel:"noreferrer"},"your_email@example.com"),l('"')])],-1),w=s("ul",null,[s("li",null,[s("strong",null,"配置远程服务器共钥")])],-1),T=s("ul",null,[s("li",null,[s("strong",null,"检测是否配置成功")])],-1),S=s("li",null,[s("p",null,"克隆远程仓库")],-1),$=s("li",null,[s("p",null,[s("strong",null,[l("注意：使用"),s("code",null,"git clone"),l(" 命令下载代码时，选择的协议，决定了将来提交代码的协议（"),s("code",null,"https、SSH"),l("）建议使用 SSH 协议克隆")])])],-1),P=s("li",null,[s("p",null,[s("strong",null,"查看分支")])],-1),z=s("li",null,[s("p",null,"决定团队协作")],-1),I=s("ul",null,[s("li",null,[s("strong",null,"创建新分支")])],-1),V=s("ul",null,[s("li",null,[s("strong",null,"切换分支")])],-1),N=s("ul",null,[s("li",null,[s("strong",null,"快速创建并切换分支")])],-1),O=s("ul",null,[s("li",null,[s("strong",null,"合并分支")])],-1),R=s("ul",null,[s("li",null,[s("strong",null,"删除分支")])],-1),L=s("ul",null,[s("li",null,[s("strong",null,"冲突分支")])],-1),M=s("ul",null,[s("li",null,[s("strong",null,"将远程仓库创建分支")]),s("li",null,[s("strong",null,"可以运行 git push 远程仓库名 本地分支名 根据提示推送到远程分支")])],-1),J=s("li",null,[s("p",null,[s("strong",null,"将远程仓库")])],-1),H=s("li",null,[s("p",null,[s("strong",null,"查看和修改远程传送协议")])],-1),Q=p("",11),U=s("ul",null,[s("li",null,"父子选择器")],-1),G=p("",6),K=p("",3),X=p("",12),Y=p("",5),Z=p("",2),W=p("",5),ss=p("",5),ns=p("",9),as=p("",3),ls=p("",15),ps=p("",4),os=s("h1",{id:"echarts数据可视化项目",tabindex:"-1"},[s("code",null,"echarts"),l("数据可视化项目 "),s("a",{class:"header-anchor",href:"#echarts数据可视化项目","aria-label":'Permalink to "`echarts`数据可视化项目"'},"​")],-1),ts=s("p",null,[l("网址："),s("code",null,"echarts.apache.org")],-1),es=s("h2",{id:"边框图片",tabindex:"-1"},[l("边框图片 "),s("a",{class:"header-anchor",href:"#边框图片","aria-label":'Permalink to "边框图片"'},"​")],-1),cs=s("ul",null,[s("li",null,"柱状图参数")],-1),rs=s("ul",null,[s("li",null,"雷达图配置")],-1),Fs=s("h1",{id:"原型链解析",tabindex:"-1"},[l("原型链解析 "),s("a",{class:"header-anchor",href:"#原型链解析","aria-label":'Permalink to "原型链解析"'},"​")],-1),ys=s("h2",{id:"原型对象",tabindex:"-1"},[l("原型对象 "),s("a",{class:"header-anchor",href:"#原型对象","aria-label":'Permalink to "原型对象"'},"​")],-1),Ds=s("h1",{id:"new-的执行过程",tabindex:"-1"},[l("new 的执行过程 "),s("a",{class:"header-anchor",href:"#new-的执行过程","aria-label":'Permalink to "new 的执行过程"'},"​")],-1),Cs=p("",3),As=p("",3),is=p("",15),gs=p("",5),us=p("",3),ds=p("",6),hs=p("",4),Es=p("",11),fs=p("",32),ms=p("",2),bs=p("",2),vs=s("h1",{id:"作用域",tabindex:"-1"},[l("作用域 "),s("a",{class:"header-anchor",href:"#作用域","aria-label":'Permalink to "作用域"'},"​")],-1),_s=s("h2",{id:"作用域分类",tabindex:"-1"},[l("作用域分类 "),s("a",{class:"header-anchor",href:"#作用域分类","aria-label":'Permalink to "作用域分类"'},"​")],-1),qs=s("ul",null,[s("li",null,[l("静态作用域（词法作用域）：JavaScript "),s("ul",null,[s("li",null,"特征：词法作用域规定作用域在代码定义的时候就决定了，而不是看调用的时候"),s("li",null,"动态作用域是在代码执行的时候决定的")])]),s("li",null,"动态作用域：bash")],-1);function Bs(js,xs,ks,ws,Ts,Ss){const n=t("lazyImg");return e(),c("div",null,[F,y,a(n,{src:"/img/git1.png","preview-src-list":["/img/git1.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),D,a(n,{src:"/img/git2.png","preview-src-list":["/img/git2.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),C,a(n,{src:"/img/git3.png","preview-src-list":["/img/git3.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),A,a(n,{src:"/img/git4.png","preview-src-list":["/img/git4.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),i,g,a(n,{src:"/img/git5.png","preview-src-list":["/img/git5.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),u,a(n,{src:"/img/git13.png","preview-src-list":["/img/git13.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),a(n,{src:"/img/git6.png","preview-src-list":["/img/git6.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),d,a(n,{src:"/img/git7.png","preview-src-list":["/img/git7.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),h,a(n,{src:"/img/git8.png","preview-src-list":["/img/git8.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),a(n,{src:"/img/git9.png","preview-src-list":["/img/git9.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),E,a(n,{src:"/img/git10.png","preview-src-list":["/img/git10.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),f,a(n,{src:"/img/git11.png","preview-src-list":["/img/git11.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),m,a(n,{src:"/img/git12.png","preview-src-list":["/img/git12.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),b,s("ul",null,[v,_,q,s("li",null,[a(n,{src:"/img/git14.png","preview-src-list":["/img/git14.png"],fit:"cover",lazy:""},null,8,["preview-src-list"])]),B,j]),a(n,{src:"/img/git15.png","preview-src-list":["/img/git15.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),x,a(n,{src:"/img/git16.png","preview-src-list":["/img/git16.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),k,a(n,{src:"/img/git17.png","preview-src-list":["/img/git17.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),w,a(n,{src:"/img/git18.png","preview-src-list":["/img/git18.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),T,a(n,{src:"/img/git19.png","preview-src-list":["/img/git19.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),s("ul",null,[S,$,s("li",null,[a(n,{src:"/img/git20.png","preview-src-list":["/img/git20.png"],fit:"cover",lazy:""},null,8,["preview-src-list"])]),P,z]),a(n,{src:"/img/git21.png","preview-src-list":["/img/git21.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),I,a(n,{src:"/img/git22.png","preview-src-list":["/img/git22.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),V,a(n,{src:"/img/git23.png","preview-src-list":["/img/git23.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),N,a(n,{src:"/img/git24.png","preview-src-list":["/img/git24.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),O,a(n,{src:"/img/git25.png","preview-src-list":["/img/git25.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),R,a(n,{src:"/img/git26.png","preview-src-list":["/img/git26.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),L,a(n,{src:"/img/git27.png","preview-src-list":["/img/git27.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),M,a(n,{src:"/img/git28.png","preview-src-list":["/img/git28.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),s("ul",null,[J,s("li",null,[a(n,{src:"/img/git29.png","preview-src-list":["/img/git29.png"],fit:"cover",lazy:""},null,8,["preview-src-list"])]),H,s("li",null,[a(n,{src:"/img/git30.png","preview-src-list":["/img/git30.png"],fit:"cover",lazy:""},null,8,["preview-src-list"])]),s("li",null,[a(n,{src:"/img/git31.png","preview-src-list":["/img/git31.png"],fit:"cover",lazy:""},null,8,["preview-src-list"])])]),Q,a(n,{src:"/img/jq1.png","preview-src-list":["/img/jq1.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),U,a(n,{src:"/img/jq2.png","preview-src-list":["/img/jq2.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),G,a(n,{src:"/img/jq3.png","preview-src-list":["/img/jq3.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),K,a(n,{src:"/img/jq4.png","preview-src-list":["/img/jq4.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),X,a(n,{src:"/img/jq5.png","preview-src-list":["/img/jq5.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),Y,a(n,{src:"/img/jq6.png","preview-src-list":["/img/jq6.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),Z,a(n,{src:"/img/jq7.png","preview-src-list":["/img/jq7.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),W,a(n,{src:"/img/jq8.png","preview-src-list":["/img/jq8.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),ss,a(n,{src:"/img/jq9.png","preview-src-list":["/img/jq9.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),ns,a(n,{src:"/img/jq10.png","preview-src-list":["/img/jq10.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),as,a(n,{src:"/img/jq11.png","preview-src-list":["/img/jq11.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),ls,a(n,{src:"/img/jq12.png","preview-src-list":["/img/jq12.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),ps,a(n,{src:"/img/jq13.png","preview-src-list":["/img/jq13.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),os,ts,a(n,{src:"/img/ec1.png","preview-src-list":["/img/ec1.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),es,a(n,{src:"/img/ec2.png","preview-src-list":["/img/ec2.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),cs,a(n,{src:"/img/ec3.png","preview-src-list":["/img/ec3.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),rs,a(n,{src:"/img/ec4.png","preview-src-list":["/img/ec4.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),Fs,a(n,{src:"/img/gj7.png","preview-src-list":["/img/gj7.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),ys,a(n,{src:"/img/gj10.png","preview-src-list":["/img/gj10.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),Ds,a(n,{src:"/img/gj8.png","preview-src-list":["/img/gj8.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),Cs,a(n,{src:"/img/gj9.png","preview-src-list":["/img/gj9.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),As,a(n,{src:"/img/gj11.png","preview-src-list":["/img/gj11.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),is,a(n,{src:"/img/gj6.png","preview-src-list":["/img/gj6.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),gs,a(n,{src:"/img/gj1.png","preview-src-list":["/img/gj1.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),us,a(n,{src:"/img/gj2.png","preview-src-list":["/img/gj2.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),ds,a(n,{src:"/img/gj3.png","preview-src-list":["/img/gj3.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),hs,a(n,{src:"/img/gj4.png","preview-src-list":["/img/gj4.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),Es,a(n,{src:"/img/gj5.png","preview-src-list":["/img/gj5.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),fs,a(n,{src:"/img/gj12.png","preview-src-list":["/img/gj12.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),ms,a(n,{src:"/img/gj13.png","preview-src-list":["/img/gj13.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),bs,a(n,{src:"/img/gj14.png","preview-src-list":["/img/gj14.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),vs,_s,qs])}const zs=o(r,[["render",Bs]]);export{Ps as __pageData,zs as default};
