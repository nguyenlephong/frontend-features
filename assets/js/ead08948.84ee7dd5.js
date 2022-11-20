"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[422],{3047:function(n,t,e){e.r(t),e.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return d}});var i=e(7462),a=e(3366),r=(e(7294),e(3905)),o=["components"],c={sidebar_position:4},s="Principles",m={unversionedId:"frontend/principles",id:"frontend/principles",title:"Principles",description:"H\u1ed3i m\u1edbi v\xf4 ngh\u1ec1 c\u1ee9 nghe m\u1ecdi ng\u01b0\u1eddi n\xf3i n\xf3i m\u1ea5y c\xe1i nguy\xean t\u1eafc n\xe0y nguy\xean t\u1eafc kia nghe c\u0169ng h\u01a1i h\xf4ng bi\u1ebft, gi\u1edd \u0111i l\xe0m \u0111\u01b0\u1ee3c v\xe0i ba n\u0103m c\u0169ng kh\xf4ng bi\u1ebft g\xec lu\xf4n! Nh\u01b0ng m\xe0 khi t\xecm google \u0111\u1ecdc l\u1ea1i th\xec th\u1ea5y m\xecnh \u0111\xe3 d\xf9ng, \u0111\xe3 tr\u1ea3i qua n\xf3 kha kh\xe1 th\u1ee9 r\u1ed3i, kh\u1ed5 l\xe0 kh\xf4ng bi\u1ebft l\xe0 n\xf3 c\xf3 t\xean.",source:"@site/docs/frontend/principles.md",sourceDirName:"frontend",slug:"/frontend/principles",permalink:"/notes/docs/frontend/principles",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/frontend/principles.md",tags:[],version:"current",lastUpdatedBy:"Nguyen Le Phong",lastUpdatedAt:1653718180,formattedLastUpdatedAt:"5/28/2022",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"CSS",permalink:"/notes/docs/frontend/css"},next:{title:"Create a Page",permalink:"/notes/docs/tutorial-basics/create-a-page"}},l={},d=[{value:"SOLID",id:"solid",level:2},{value:"YAGNI - You Aren\u2019t Gonna Need It",id:"yagni---you-arent-gonna-need-it",level:2},{value:"DRY - Don\u2019t Repeat Yourself",id:"dry---dont-repeat-yourself",level:2},{value:"KTSS - Keep It Simple Stupid",id:"ktss---keep-it-simple-stupid",level:2}],p={toc:d};function h(n){var t=n.components,e=(0,a.Z)(n,o);return(0,r.kt)("wrapper",(0,i.Z)({},p,e,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"principles"},"Principles"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"T\xf3m l\u01b0\u1ee3c")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"H\u1ed3i m\u1edbi v\xf4 ngh\u1ec1 c\u1ee9 nghe m\u1ecdi ng\u01b0\u1eddi n\xf3i n\xf3i m\u1ea5y c\xe1i nguy\xean t\u1eafc n\xe0y nguy\xean t\u1eafc kia nghe c\u0169ng h\u01a1i h\xf4ng bi\u1ebft, gi\u1edd \u0111i l\xe0m \u0111\u01b0\u1ee3c v\xe0i ba n\u0103m c\u0169ng kh\xf4ng bi\u1ebft g\xec lu\xf4n! Nh\u01b0ng m\xe0 khi t\xecm google \u0111\u1ecdc l\u1ea1i th\xec th\u1ea5y m\xecnh \u0111\xe3 d\xf9ng, \u0111\xe3 tr\u1ea3i qua n\xf3 kha kh\xe1 th\u1ee9 r\u1ed3i, kh\u1ed5 l\xe0 kh\xf4ng bi\u1ebft l\xe0 n\xf3 c\xf3 t\xean.\nB\xean d\u01b0\u1edbi \u0111\u1ea1i lo\u1ea1i l\xe0 m\xecnh notes l\u1ea1i thui, n\xe0o r\u1ea3nh r\u1ed7i \u0111\u1ecdc l\u1ea1i."))),(0,r.kt)("h2",{id:"solid"},"SOLID"),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Coming soon.")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"})),(0,r.kt)("h2",{id:"yagni---you-arent-gonna-need-it"},"YAGNI - You Aren\u2019t Gonna Need It"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Gi\u1ea3i ngh\u0129a")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"You Aren\u2019t Gonna Need It = B\u1ea1n s\u1ebd kh\xf4ng c\u1ea7n n\xf3"))))),(0,r.kt)("p",null,"\u0110\u1ea1i lo\u1ea1i c\xe1i n\xe0y n\xf3 x\xe3y ra trong l\xfac m\xecnh l\xe0 vi\u1ec7c g\xec \u0111\xf3, vi\u1ebft m\u1ed9t function ch\u1eb5n h\u1ea1ng, do l\xe0 m\xecnh c\u1ee9 ngh\u0129 m\xecnh c\u1ea7n (m\xe0 c\u1ea7n th\xec c\u1ea5m \u0111\u1ea7u l\xe0m). L\xe0m xong, code xong, commit xong => 3-4 th\xe1ng sau v\u1eabn kh\xf4ng th\u1ea5y d\xf9ng n\xf3."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"V\xed d\u1ee5:"),"\nVi\u1ebft function x\xf3a ph\u1ea7n t\u1eed trong m\xe3ng ch\u1eb3n h\u1ea1ng => vi\u1ebft xong.\nC\xe1i ngh\u1ec9 th\xeam ch\u1eafc sau n\xe0y c\xf3 ph\u1ea7n di chuy\u1ec3n c\xe1c ph\u1ea7n t\u1eed b\xean trong m\xe3ng => vi\u1ebft th\xeam c\xe1i function n\u1eefa (m\u1eb7c d\xf9 ch\u01b0a ch\u1eafc l\xe0 s\u1ebd d\xf9ng \u1edf t\u01b0\u01a1ng lai)."),(0,r.kt)("h2",{id:"dry---dont-repeat-yourself"},"DRY - Don\u2019t Repeat Yourself"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Gi\u1ea3i ngh\u0129a")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Don\u2019t Repeat Yourself - \u0110\u1eebng l\u1eb7p l\u1ea1i ch\xednh m\xecnh"))))),(0,r.kt)("p",null,"C\xe1i n\xe0y \u0111i l\xe0m ch\u1eafc \u0111\u01b0\u1ee3c nghe nhi\u1ec1u n\xe8, th\u01b0\u1eddng m\u1edbi v\xe0o c\u1ee9 s\u1ee3 s\u1eeda code ng\u01b0\u1eddi kh\xe1c b\u1ecb \u1ea3nh h\u01b0\u1edfng n\xe0y kia => copy h\u1eb5n code ng\u01b0\u1eddi ta ra m\u1ed9t file m\u1edbi r\u1ed3i ch\u1ec9nh s\u1eeda tr\xean \u0111\xf3.\nHo\u1eb7c l\xe0 ch\xednh m\xecnh \u0111i copy code c\u1ee7a m\xecnh paste \u1edf nhi\u1ec1u n\u01a1i trong d\u1ef1 \xe1n m\xe0 kh\xf4ng vi\u1ebft h\xe0m commons.\nC\xe1i h\u1ea1i to nh\u1ea5t c\u1ee7a n\xe0y l\xe0 m\u1ed7i l\u1ea7n thay \u0111\u1ed5i code => ph\u1ea3i \u0111i t\xecm m\u1ea5y ch\u1ed5 code n\xe0y s\u1eeda h\u1ebft. Thay v\xec ch\u1ec9 s\u1eeda m\u1ed9t ch\u1ed5 \u1edf commons function thui."),(0,r.kt)("h2",{id:"ktss---keep-it-simple-stupid"},"KTSS - Keep It Simple Stupid"),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Coming soon.")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"})))}h.isMDXComponent=!0},3905:function(n,t,e){e.d(t,{Zo:function(){return l},kt:function(){return h}});var i=e(7294);function a(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function r(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,i)}return e}function o(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?r(Object(e),!0).forEach((function(t){a(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function c(n,t){if(null==n)return{};var e,i,a=function(n,t){if(null==n)return{};var e,i,a={},r=Object.keys(n);for(i=0;i<r.length;i++)e=r[i],t.indexOf(e)>=0||(a[e]=n[e]);return a}(n,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(i=0;i<r.length;i++)e=r[i],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(a[e]=n[e])}return a}var s=i.createContext({}),m=function(n){var t=i.useContext(s),e=t;return n&&(e="function"==typeof n?n(t):o(o({},t),n)),e},l=function(n){var t=m(n.components);return i.createElement(s.Provider,{value:t},n.children)},d={inlineCode:"code",wrapper:function(n){var t=n.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(n,t){var e=n.components,a=n.mdxType,r=n.originalType,s=n.parentName,l=c(n,["components","mdxType","originalType","parentName"]),p=m(e),h=a,g=p["".concat(s,".").concat(h)]||p[h]||d[h]||r;return e?i.createElement(g,o(o({ref:t},l),{},{components:e})):i.createElement(g,o({ref:t},l))}));function h(n,t){var e=arguments,a=t&&t.mdxType;if("string"==typeof n||a){var r=e.length,o=new Array(r);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=n,c.mdxType="string"==typeof n?n:a,o[1]=c;for(var m=2;m<r;m++)o[m]=e[m];return i.createElement.apply(null,o)}return i.createElement.apply(null,e)}p.displayName="MDXCreateElement"}}]);