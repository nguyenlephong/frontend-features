"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[3913],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,v=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return n?o.createElement(v,s(s({ref:t},d),{},{components:n})):o.createElement(v,s({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7587:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:7},s="Manage Docs Versions",i={unversionedId:"tutorial-basics/manage-docs-versions",id:"tutorial-basics/manage-docs-versions",title:"Manage Docs Versions",description:"Docusaurus can manage multiple versions of your docs.",source:"@site/docs/tutorial-basics/manage-docs-versions.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/manage-docs-versions",permalink:"/notes/docs/tutorial-basics/manage-docs-versions",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/manage-docs-versions.md",tags:[],version:"current",lastUpdatedBy:"Nguyen Le Phong",lastUpdatedAt:1648734094,formattedLastUpdatedAt:"3/31/2022",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Congratulations!",permalink:"/notes/docs/tutorial-basics/congratulations"},next:{title:"Translate your site",permalink:"/notes/docs/tutorial-basics/translate-your-site"}},l={},c=[{value:"Create a docs version",id:"create-a-docs-version",level:2},{value:"Add a Version Dropdown",id:"add-a-version-dropdown",level:2},{value:"Update an existing version",id:"update-an-existing-version",level:2}],d={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"manage-docs-versions"},"Manage Docs Versions"),(0,r.kt)("p",null,"Docusaurus can manage multiple versions of your docs."),(0,r.kt)("h2",{id:"create-a-docs-version"},"Create a docs version"),(0,r.kt)("p",null,"Release a version 1.0 of your project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run docusaurus docs:version 1.0\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"docs")," folder is copied into ",(0,r.kt)("inlineCode",{parentName:"p"},"versioned_docs/version-1.0")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"versions.json")," is created."),(0,r.kt)("p",null,"Your docs now have 2 versions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1.0")," at ",(0,r.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/")," for the version 1.0 docs"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"current")," at ",(0,r.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/next/")," for the ",(0,r.kt)("strong",{parentName:"li"},"upcoming, unreleased docs"))),(0,r.kt)("h2",{id:"add-a-version-dropdown"},"Add a Version Dropdown"),(0,r.kt)("p",null,"To navigate seamlessly across versions, add a version dropdown."),(0,r.kt)("p",null,"Modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  themeConfig: {\n    navbar: {\n      items: [\n        // highlight-start\n        {\n          type: 'docsVersionDropdown',\n        },\n        // highlight-end\n      ],\n    },\n  },\n};\n")),(0,r.kt)("p",null,"The docs version dropdown appears in your navbar:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Docs Version Dropdown",src:n(4258).Z,width:"494",height:"276"})),(0,r.kt)("h2",{id:"update-an-existing-version"},"Update an existing version"),(0,r.kt)("p",null,"It is possible to edit versioned docs in their respective folder:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"versioned_docs/version-1.0/hello.md")," updates ",(0,r.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/hello")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"docs/hello.md")," updates ",(0,r.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/next/hello"))))}p.isMDXComponent=!0},4258:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/docsVersionDropdown-dda80f009a926fb2dd92bab8faa6c4d8.png"}}]);