import{ae as l,a8 as k,e as p,L as i,aA as n,f as a,I as h,d as t}from"./chunks/framework.D-rxc--Y.js";const R=JSON.parse('{"title":"利用 $attrs 实现爷孙之间的通信","description":"","frontmatter":{},"headers":[],"relativePath":"projectIT/架构.md","filePath":"projectIT/架构.md"}'),E={name:"projectIT/架构.md"},e=n("",7),r=a("ul",null,[a("li",null,"父组件通过 v-bind 可将从爷组件传递的数据进行展开")],-1),d=a("p",null,"可通过 inheritAttrs 属性控制不在父组件展示",-1),g=a("h1",{id:"自定义饿了么表单",tabindex:"-1"},[h("自定义饿了么表单 "),a("a",{class:"header-anchor",href:"#自定义饿了么表单","aria-label":'Permalink to "自定义饿了么表单"'},"​")],-1),y=n("",11),F=n("",9),c=a("p",null,"创建 Krouter 路由表",-1),o=a("p",null,"实现两个全局组件和一个 install 方法（Vue.use 时会执行这个方法）、KVueRouter 类",-1),A=n("",2),C=a("h1",{id:"vuex-原理",tabindex:"-1"},[h("vuex 原理 "),a("a",{class:"header-anchor",href:"#vuex-原理","aria-label":'Permalink to "vuex 原理"'},"​")],-1),D=a("p",null,"实现 vuex 和 install 方法",-1),B=a("p",null,"先在入口文件中引入并挂载自定义 vuex",-1),u=a("p",null,"创建 kstore.js 和 index.js 并引入自定义 kvuex.js 插件、写入数据以及方法",-1),m=a("p",null,"实现 kvuex.js 插件、commit、action、getter 方法",-1),v=n("",2),f=a("p",null,"这样页面中点击第一个会触发 commit 点击第二个会触发 action 还会触发第三个 getters，并且数据都是响应式的",-1),b=a("h1",{id:"手写-vue-vue-1-版本",tabindex:"-1"},[h("手写 vue（vue 1.*版本） "),a("a",{class:"header-anchor",href:"#手写-vue-vue-1-版本","aria-label":'Permalink to "手写 vue（vue 1.\\*版本）"'},"​")],-1),_=a("p",null,"书写使用 k-vue 所需代码，并引入 k-vue",-1),q=n("",2),w=n("",2),j=a("h1",{id:"vue-源码分析",tabindex:"-1"},[h("vue 源码分析 "),a("a",{class:"header-anchor",href:"#vue-源码分析","aria-label":'Permalink to "vue 源码分析"'},"​")],-1),x=a("p",null,"vue2 中一个组件对应一个 watcher 不像 vue1 中每个响应式数据对应一个 watcher 所以在 vue2 中不得不引入虚拟 dom，为了准确的区分哪里需要更新",-1),$=n("",8);function T(V,N,S,P,K,I){const s=k("lazyImg");return t(),p("div",null,[e,i(s,{src:"/img/jg1.png","preview-src-list":["/img/jg1.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),r,i(s,{src:"/img/jg2.png","preview-src-list":["/img/jg2.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),d,i(s,{src:"/img/jg3.png","preview-src-list":["/img/jg3.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),g,i(s,{src:"/img/jg4.png","preview-src-list":["/img/jg4.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),y,i(s,{src:"/img/jg5.png","preview-src-list":["/img/jg5.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),F,i(s,{src:"/img/jg6.png","preview-src-list":["/img/jg6.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),c,i(s,{src:"/img/jg7.png","preview-src-list":["/img/jg7.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),o,i(s,{src:"/img/jg8.png","preview-src-list":["/img/jg8.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),A,i(s,{src:"/img/jg9.png","preview-src-list":["/img/jg9.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),C,D,B,i(s,{src:"/img/jg10.png","preview-src-list":["/img/jg10.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),u,i(s,{src:"/img/jg11.png","preview-src-list":["/img/jg11.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),m,i(s,{src:"/img/jg12.png","preview-src-list":["/img/jg12.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),v,i(s,{src:"/img/jg13.png","preview-src-list":["/img/jg13.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),f,i(s,{src:"/img/jg14.png","preview-src-list":["/img/jg14.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),b,_,i(s,{src:"/img/jg15.png","preview-src-list":["/img/jg15.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),q,i(s,{src:"/img/jg16.png","preview-src-list":["/img/jg16.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),w,i(s,{src:"/img/jg17.png","preview-src-list":["/img/jg17.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),i(s,{src:"/img/jg18.png","preview-src-list":["/img/jg18.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),j,x,i(s,{src:"/img/jg19.png","preview-src-list":["/img/jg19.png"],fit:"cover",lazy:""},null,8,["preview-src-list"]),$,i(s,{src:"/img/jg20.png","preview-src-list":["/img/jg20.png"],fit:"cover",lazy:""},null,8,["preview-src-list"])])}const O=l(E,[["render",T]]);export{R as __pageData,O as default};
