(function(){"use strict";var e={4677:function(e,t,n){var o=n(9242),r=n(3396);function a(e,t,n,a,i,l){const c=(0,r.up)("NavBar"),u=(0,r.up)("router-view"),s=(0,r.up)("FooterEl");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(c),(0,r.Wm)(u,{class:"body-router-view"},{default:(0,r.w5)((({Component:e})=>[(0,r.Wm)(o.uT,{name:"fade",mode:"out-in"},{default:(0,r.w5)((()=>[((0,r.wg)(),(0,r.j4)((0,r.LL)(e)))])),_:2},1024)])),_:1}),(0,r.Wm)(s)],64)}const i={class:"mobile-menu"},l={class:"nav-wrapper"};function c(e,t,n,a,c,u){const s=(0,r.up)("Menu"),d=(0,r.up)("Close"),m=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("header",null,[(0,r._)("button",{class:"mobile-menu-btn",onClick:t[0]||(t[0]=e=>u.open_close_menu())},[c.menu?((0,r.wg)(),(0,r.j4)(d,{key:1})):((0,r.wg)(),(0,r.j4)(s,{key:0}))]),(0,r.Wm)(o.uT,{name:"fade",mode:"out-in"},{default:(0,r.w5)((()=>[(0,r.wy)((0,r._)("div",i,[(0,r._)("nav",l,[(0,r.Wm)(m,{onClick:t[1]||(t[1]=e=>u.close_menu()),to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)("Home")])),_:1}),(0,r.Wm)(m,{onClick:t[2]||(t[2]=e=>u.close_menu()),to:"/portfolio"},{default:(0,r.w5)((()=>[(0,r.Uk)("Portfolio")])),_:1}),(0,r.Wm)(m,{onClick:t[3]||(t[3]=e=>u.close_menu()),to:"/contact"},{default:(0,r.w5)((()=>[(0,r.Uk)("Contact me")])),_:1})])],512),[[o.F8,c.menu]])])),_:1})])}const u={width:"40px",height:"40px",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"#33323D"},s=(0,r._)("g",{"clip-path":"url(#clip0_429_11066)"},[(0,r._)("path",{fill:"#33323D",d:"M3 6.00092H21M3 12.0009H21M3 18.0009H21",stroke:"#33323D","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"})],-1),d=(0,r._)("defs",null,[(0,r._)("clipPath",{id:"clip0_429_11066"},[(0,r._)("rect",{width:"24",height:"24",fill:"#33323D",transform:"translate(0 0.000915527)"})])],-1),m=[s,d];function p(e,t,n,o,a,i){return(0,r.wg)(),(0,r.iD)("svg",u,m)}var f={name:"hamburguer-menu"},h=n(89);const v=(0,h.Z)(f,[["render",p]]);var g=v;const w={width:"40px",height:"40px",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},b=(0,r._)("path",{fill:"#33323D",d:"M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"},null,-1),_=[b];function k(e,t,n,o,a,i){return(0,r.wg)(),(0,r.iD)("svg",w,_)}var y={name:"close-menu"};const x=(0,h.Z)(y,[["render",k]]);var j=x,C={name:"NavBar",components:{Menu:g,Close:j},data(){return{menu:!1}},methods:{open_close_menu(){this.menu?this.menu=!1:this.menu=!0},close_menu(){document.documentElement.clientWidth<=700&&(this.menu=!1)}},created(){document.documentElement.clientWidth>700?this.menu=!0:this.menu=!1}};const T=(0,h.Z)(C,[["render",c],["__scopeId","data-v-fab44de2"]]);var P=T;const W={class:"flex-wrapper"},O={class:"router-wrapper"},E={class:"icons-wrapper"},D={href:"#"},H={href:"#"},S={href:"#"};function I(e,t,n,o,a,i){const l=(0,r.up)("router-link"),c=(0,r.up)("GitHub"),u=(0,r.up)("Twitter"),s=(0,r.up)("LinkedIn");return(0,r.wg)(),(0,r.iD)("footer",null,[(0,r._)("div",W,[(0,r._)("section",O,[(0,r.Wm)(l,{class:"links",to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)("Home")])),_:1}),(0,r.Wm)(l,{class:"links",to:"/portfolio"},{default:(0,r.w5)((()=>[(0,r.Uk)("Portfolio")])),_:1}),(0,r.Wm)(l,{class:"links",to:"/contact"},{default:(0,r.w5)((()=>[(0,r.Uk)("Contact me")])),_:1})]),(0,r._)("section",E,[(0,r._)("a",D,[(0,r.Wm)(c,{color:"#FFF",color_2:"#33323D",class:"github"})]),(0,r._)("a",H,[(0,r.Wm)(u,{color:"#FFF",class:"twitter"})]),(0,r._)("a",S,[(0,r.Wm)(s,{color:"#FFF",class:"linkedin"})])])])])}var A=n(3561),F=n(7894),L=n(9118),U={name:"FooterEl",components:{GitHub:A.Z,Twitter:F.Z,LinkedIn:L.Z}};const B=(0,h.Z)(U,[["render",I],["__scopeId","data-v-1d5197b4"]]);var M=B,N={name:"App",components:{NavBar:P,FooterEl:M}};const Z=(0,h.Z)(N,[["render",a]]);var z=Z,V=n(2483),q=n.p+"img/teste.2d296118.jpg",G=n.p+"img/background-about-me.50b05ec7.jpg";const J=e=>((0,r.dD)("data-v-f277f640"),e=e(),(0,r.Cn)(),e),K={class:"wrapper"},R={class:"one"},Y={class:"presentation"},Q=J((()=>(0,r._)("img",{class:"presentation-background",src:q,alt:"Notebook encima de uma mesa de trabalho, com plantas e um abajur"},null,-1))),X={class:"presentation-text"},$={key:0},ee={key:1},te={key:2},ne={class:"two",id:"about-me"},oe={class:"about-me"},re=J((()=>(0,r._)("img",{class:"about-me-background",src:G,alt:"Bloco de notas e um tablet"},null,-1))),ae={class:"about-me-text"},ie=J((()=>(0,r._)("h2",null,"About me",-1))),le=J((()=>(0,r._)("p",null," I'm a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. I'm based in London, UK, but I'm happy working remotely and have experience in remote teams. When I'm not coding, you'll find me outdoors. I love being out in nature whether that's going for a walk, run or cycling. I'd love you to check out my work. ",-1))),ce={class:"three"},ue={class:"contact-me"},se=J((()=>(0,r._)("h3",null,[(0,r.Uk)("Interested in doing "),(0,r._)("br"),(0,r.Uk)(" a project together?")],-1))),de=J((()=>(0,r._)("div",{class:"line"},null,-1)));function me(e,t,n,o,a,i){const l=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",K,[(0,r._)("section",R,[(0,r._)("div",Y,[Q,(0,r._)("div",X,[(0,r._)("h1",null,[(0,r.Uk)("Hey, I'm Alex "),a.windowWidth>1200?((0,r.wg)(),(0,r.iD)("br",$)):(0,r.kq)("",!0),(0,r.Uk)(" Spencer and I "),a.windowWidth>1200?((0,r.wg)(),(0,r.iD)("br",ee)):(0,r.kq)("",!0),(0,r.Uk)(" love building "),a.windowWidth>768?((0,r.wg)(),(0,r.iD)("br",te)):(0,r.kq)("",!0),(0,r.Uk)(" beautiful websites")]),(0,r.Wm)(l,{class:"btn-about-me",to:"#about-me"},{default:(0,r.w5)((()=>[(0,r.Uk)("ABOUT ME")])),_:1})])])]),(0,r._)("section",ne,[(0,r._)("div",oe,[re,(0,r._)("div",ae,[ie,le,(0,r.Wm)(l,{class:"btn-portifolio",to:"/portfolio"},{default:(0,r.w5)((()=>[(0,r.Uk)("GO TO PORTFOLIO")])),_:1})])])]),(0,r._)("section",ce,[(0,r._)("div",ue,[se,de,(0,r.Wm)(l,{class:"btn-contact-me",to:"/contact"},{default:(0,r.w5)((()=>[(0,r.Uk)("CONTACT ME")])),_:1})])])])}var pe={name:"HomeView",components:{},data(){return{windowWidth:null}},created(){this.windowWidth=document.documentElement.clientWidth}};const fe=(0,h.Z)(pe,[["render",me],["__scopeId","data-v-f277f640"]]);var he=fe;const ve=[{path:"/",name:"home",component:he,meta:{title:"Nicolas Bortoli",metaTags:[{name:"description",content:"Portfólio | Desenvolvedor Web focado em SEO e melhores praticas, utilizo Vue.js e PHP para desenvolver meus projetos, sempre focado em entregar um projeto que atenda as necessidades do cliente e, ao mesmo tempo, pensando na experiência do usuário."},{property:"og:description",content:"Portfólio | Desenvolvedor Web focado em SEO e melhores praticas, utilizo Vue.js e PHP para desenvolver meus projetos, sempre focado em entregar um projeto que atenda as necessidades do cliente e, ao mesmo tempo, pensando na experiência do usuário."}]}},{path:"/portfolio",name:"portfolio",component:()=>n.e(504).then(n.bind(n,3504)),meta:{title:"Nicolas Bortoli | Portfolio",metaTags:[{name:"description",content:"Portfólio | Desenvolvedor Web focado em SEO e melhores praticas, utilizo Vue.js e PHP para desenvolver meus projetos, sempre focado em entregar um projeto que atenda as necessidades do cliente e, ao mesmo tempo, pensando na experiência do usuário."},{property:"og:description",content:"Portfólio | Desenvolvedor Web focado em SEO e melhores praticas, utilizo Vue.js e PHP para desenvolver meus projetos, sempre focado em entregar um projeto que atenda as necessidades do cliente e, ao mesmo tempo, pensando na experiência do usuário."}]}},{path:"/contact",name:"contact",component:()=>n.e(746).then(n.bind(n,3746)),meta:{title:"Nicolas Bortoli | Contact",metaTags:[{name:"description",content:"Portfólio | Desenvolvedor Web focado em SEO e melhores praticas, utilizo Vue.js e PHP para desenvolver meus projetos, sempre focado em entregar um projeto que atenda as necessidades do cliente e, ao mesmo tempo, pensando na experiência do usuário."},{property:"og:description",content:"Portfólio | Desenvolvedor Web focado em SEO e melhores praticas, utilizo Vue.js e PHP para desenvolver meus projetos, sempre focado em entregar um projeto que atenda as necessidades do cliente e, ao mesmo tempo, pensando na experiência do usuário."}]}}],ge=(0,V.p7)({history:(0,V.PO)("/Portfolio/"),scrollBehavior(e){if(e.hash)return{el:e.hash,top:20,behavior:"smooth"}},routes:ve});ge.beforeEach(((e,t,n)=>{window.scrollTo(0,0);const o=e.matched.slice().reverse().find((e=>e.meta&&e.meta.title)),r=e.matched.slice().reverse().find((e=>e.meta&&e.meta.metaTags)),a=t.matched.slice().reverse().find((e=>e.meta&&e.meta.metaTags));if(o?document.title=o.meta.title:a&&(document.title=a.meta.title),Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map((e=>e.parentNode.removeChild(e))),!r)return n();r.meta.metaTags.map((e=>{const t=document.createElement("meta");return Object.keys(e).forEach((n=>{t.setAttribute(n,e[n])})),t.setAttribute("data-vue-router-controlled",""),t})).forEach((e=>document.head.appendChild(e))),n()}));var we=ge,be={install:e=>{const t=()=>{window.scrollTo(0,0)};e.provide("scrollToTop",t)}};(0,o.ri)(z).use(be).use(we).mount("#app")},3561:function(e,t,n){n.d(t,{Z:function(){return d}});var o=n(3396);const r={width:"30px",height:"30px",xmlns:"http://www.w3.org/2000/svg","aria-label":"GitHub",role:"img",viewBox:"0 0 512 512"},a=["fill"],i=["fill"];function l(e,t,n,l,c,u){return(0,o.wg)(),(0,o.iD)("svg",r,[(0,o._)("rect",{width:"500px",height:"500px",rx:"15%",fill:n.color},null,8,a),(0,o._)("path",{fill:n.color_2,d:"M335 499c14 0 12 17 12 17H165s-2-17 12-17c13 0 16-6 16-12l-1-50c-71 16-86-28-86-28-12-30-28-37-28-37-24-16 1-16 1-16 26 2 40 26 40 26 22 39 59 28 74 22 2-17 9-28 16-35-57-6-116-28-116-126 0-28 10-51 26-69-3-6-11-32 3-67 0 0 21-7 70 26 42-12 86-12 128 0 49-33 70-26 70-26 14 35 6 61 3 67 16 18 26 41 26 69 0 98-60 120-117 126 10 8 18 24 18 48l-1 70c0 6 3 12 16 12z"},null,8,i)])}var c={name:"GitHubIcon",props:{color:{Type:String},color_2:{Type:String}}},u=n(89);const s=(0,u.Z)(c,[["render",l]]);var d=s},9118:function(e,t,n){n.d(t,{Z:function(){return d}});var o=n(3396);const r=["fill"],a=(0,o._)("path",{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"},null,-1),i=[a];function l(e,t,n,a,l,c){return(0,o.wg)(),(0,o.iD)("svg",{width:"30px",height:"30px",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",fill:n.color,class:"bi bi-linkedin"},i,8,r)}var c={name:"LinkedInIcon",props:{color:{Type:String}}},u=n(89);const s=(0,u.Z)(c,[["render",l]]);var d=s},7894:function(e,t,n){n.d(t,{Z:function(){return C}});var o=n(3396);const r={width:"30px",height:"30px",version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 504.4 504.4",style:{"enable-background":"new 0 0 504.4 504.4"},"xml:space":"preserve"},a=["fill"],i=(0,o._)("g",null,null,-1),l=(0,o._)("g",null,null,-1),c=(0,o._)("g",null,null,-1),u=(0,o._)("g",null,null,-1),s=(0,o._)("g",null,null,-1),d=(0,o._)("g",null,null,-1),m=(0,o._)("g",null,null,-1),p=(0,o._)("g",null,null,-1),f=(0,o._)("g",null,null,-1),h=(0,o._)("g",null,null,-1),v=(0,o._)("g",null,null,-1),g=(0,o._)("g",null,null,-1),w=(0,o._)("g",null,null,-1),b=(0,o._)("g",null,null,-1),_=(0,o._)("g",null,null,-1);function k(e,t,n,k,y,x){return(0,o.wg)(),(0,o.iD)("svg",r,[(0,o._)("g",null,[(0,o._)("g",null,[(0,o._)("path",{fill:n.color,d:"M377.6,0.2H126.4C56.8,0.2,0,57,0,126.6v251.6c0,69.2,56.8,126,126.4,126H378c69.6,0,126.4-56.8,126.4-126.4V126.6\n                C504,57,447.2,0.2,377.6,0.2z M377.2,189c0,2.8,0,5.6,0,8.4c0,84-64.8,180.8-183.6,180.8c-36.4,0-70.4-10.4-98.8-28.4\n                c5.2,0.4,10,0.8,15.2,0.8c30.4,0,58-10,80-27.2c-28.4-0.4-52-18.8-60.4-44c4,0.8,8,1.2,12,1.2c6,0,12-0.8,17.2-2.4\n                c-28.8-6-50.8-31.6-50.8-62.4V215c8,4.8,18.4,7.6,28.8,8c-17.2-11.2-28.8-30.8-28.8-52.8c0-11.6,3.2-22.4,8.8-32\n                c32,38.4,79.2,63.6,132.8,66.4c-1.2-4.8-1.6-9.6-1.6-14.4c0-35.2,28.8-63.6,64.4-63.6c18.4,0,35.2,7.6,47.2,20\n                c14.8-2.8,28.4-8,40.8-15.6c-4.8,14.8-15.2,27.2-28.4,35.2c13.2-1.6,25.6-4.8,37.2-10C400.4,169,389.6,180.2,377.2,189z"},null,8,a)])]),i,l,c,u,s,d,m,p,f,h,v,g,w,b,_])}var y={name:"TwitterIcon",props:{color:{Type:String}}},x=n(89);const j=(0,x.Z)(y,[["render",k]]);var C=j}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,a){if(!o){var i=1/0;for(s=0;s<e.length;s++){o=e[s][0],r=e[s][1],a=e[s][2];for(var l=!0,c=0;c<o.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(l=!1,a<i&&(i=a));if(l){e.splice(s--,1);var u=r();void 0!==u&&(t=u)}}return t}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[o,r,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{504:"1f5d0375",746:"d26eed2c"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{504:"c181f696",746:"08f2c6ec"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="portifolio:";n.l=function(o,r,a,i){if(e[o])e[o].push(r);else{var l,c;if(void 0!==a)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var d=u[s];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+a){l=d;break}}l||(c=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+a),l.src=o),e[o]=[r];var m=function(t,n){l.onerror=l.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],l.parentNode&&l.parentNode.removeChild(l),r&&r.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=m.bind(null,l.onerror),l.onload=m.bind(null,l.onload),c&&document.head.appendChild(l)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/Portfolio/"}(),function(){var e=function(e,t,n,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var a=function(a){if(r.onerror=r.onload=null,"load"===a.type)n();else{var i=a&&("load"===a.type?"missing":a.type),l=a&&a.target&&a.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=l,r.parentNode.removeChild(r),o(c)}};return r.onerror=r.onload=a,r.href=t,document.head.appendChild(r),r},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===t))return r}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){r=i[o],a=r.getAttribute("data-href");if(a===e||a===t)return r}},o=function(o){return new Promise((function(r,a){var i=n.miniCssF(o),l=n.p+i;if(t(i,l))return r();e(o,l,r,a)}))},r={143:0};n.f.miniCss=function(e,t){var n={504:1,746:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=a);var i=n.p+n.u(t),l=new Error,c=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,r[1](l)}};n.l(i,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,a,i=o[0],l=o[1],c=o[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(r in l)n.o(l,r)&&(n.m[r]=l[r]);if(c)var s=c(n)}for(t&&t(o);u<i.length;u++)a=i[u],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(s)},o=self["webpackChunkportifolio"]=self["webpackChunkportifolio"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(4677)}));o=n.O(o)})();
//# sourceMappingURL=app.cd28860a.js.map