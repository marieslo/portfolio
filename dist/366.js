"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[366],{6366:(e,t,n)=>{n.r(t),n.d(t,{default:()=>A});var r=n(6540),a=n(4785),o=n(6239),i=n(6655),l=n(3671),c=n(483),s=n(9627),u=n(8335),d=n(1661),m=n.n(d),f=n(656),p=n(1629),x=n(3639),g=n(7681);function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,i,l=[],c=!0,s=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(e){s=!0,a=e}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(s)throw a}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return h(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function b(e){var t=e.href,n=e.text,a=e.iconSrc,o=e.altText,i=(e.onClick,e.menuItems),l=e.variant,c=void 0===l?"link":l,s=y((0,r.useState)(null),2),u=s[0],d=s[1],m=y((0,r.useState)(!1),2),h=m[0],b=m[1];return"link"===c&&t?r.createElement(f.A,{sx:{textTransform:"uppercase",fontSize:"12px",lineHeight:"16px",textDecoration:"none",color:"#7692ff",display:"flex",gap:"8px",justifyContent:"center",alignItems:"center",":hover":{textDecoration:"underline"}},href:t,target:"_blank",rel:"noopener noreferrer"},r.createElement("img",{src:a,alt:o,style:{width:"18px",height:"18px",marginLeft:"6px"}}),n):"button"===c&&i&&i.length>0?r.createElement(r.Fragment,null,r.createElement(p.A,{onClick:function(e){d(e.currentTarget),b(!0)},sx:{textTransform:"uppercase",fontSize:"12px",lineHeight:"16px",textDecoration:"none",color:"#7692ff",display:"flex",gap:"8px",justifyContent:"center",alignItems:"center",":hover":{textDecoration:"underline"}}},r.createElement("img",{src:a,alt:o,style:{width:"18px",height:"18px",marginLeft:"2px"}}),n),r.createElement(x.A,{anchorEl:u,open:h,onClose:function(){b(!1)},PaperProps:{sx:{width:"max",maxHeight:"max"}}},i.map((function(e,t){return r.createElement(g.A,{key:t,onClick:e.onClick,sx:{fontSize:"12px",color:"#7692ff",backgroundColor:"2b2d42",":hover":{textDecoration:"underline"}}},e.label)})))):null}function v(e){var t=e.skill,n=e.isDarkMode,a="https://img.shields.io/badge/".concat(t,"-%23a0c4ff.svg?style=for-the-badge&logo=").concat(t.toLowerCase(),"&logoColor=white");return r.createElement("div",{className:"skill-item relative text-center font-subheader ".concat(n?"text-dark-text":"text-light-text"," flex items-center justify-start pr-2 bg-opacity-30 backdrop-blur-md font-bodytext"),style:{backgroundColor:"transparent"}},r.createElement("div",{className:"relative flex items-center justify-center w-max"},r.createElement("div",{className:"flex items-center gap-1 ".concat(n?"text-light-text":"text-dark-text")},r.createElement("img",{src:a,className:"text-sm",onError:function(e){e.target.style.display="none"},alt:"".concat(t)}))))}function k(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,i,l=[],c=!0,s=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(e){s=!0,a=e}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(s)throw a}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return w(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?w(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var E={hidden:{opacity:0,y:100},visible:{opacity:1,y:0,transition:{duration:1,type:"spring",stiffness:100,delayChildren:.2,staggerChildren:.2}}},C={hidden:{opacity:0,y:50,scale:.8},visible:{opacity:1,y:0,scale:1,rotate:[0,-5,5,0],transition:{type:"spring",bounce:.4,duration:.8}}};function A(e){var t=e.projects,n=e.isDarkMode,d=k((0,r.useState)(!1),2),f=d[0],p=d[1],x=k((0,r.useState)(null),2),g=(x[0],x[1]),y=k((0,r.useState)(null),2),h=y[0],w=y[1],A=k((0,r.useState)(null),2),S=A[0],j=A[1],I=function(){p(!1),g(null),w(null),j(null)};return r.createElement(u.P.div,{variants:E,initial:"hidden",animate:"visible",className:"carousel-container bg-transparent text-xs sm:text-sm w-full ".concat(n?"text-dark-text":"text-light-text")},r.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 p-4 justify-center items-center mx-auto"},t.map((function(e){return r.createElement(u.P.div,{key:e.id,variants:C,className:"group relative w-full border rounded-3xl shadow-md overflow-hidden"},r.createElement(a.A,{sx:{position:"relative",display:"flex",flexDirection:"column",height:450,transition:"transform 0.3s ease-in-out"}},r.createElement(o.A,{className:"font-bodytext ".concat(n?"bg-dark-bg text-light-text":"bg-light-bg text-dark-text"),sx:{flexGrow:1,padding:"8px 16px",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}},e.name&&r.createElement(i.A,{title:r.createElement("div",{style:{maxWidth:"100%",fontSize:"14px",whiteSpace:"pre-wrap",overflowWrap:"break-word"}},e.description),placement:"bottom-start",arrow:!0,enterDelay:300,leaveDelay:200,PopperProps:{modifiers:[{name:"preventOverflow",options:{boundary:"viewport"}}]}},r.createElement("h3",{className:"text-color3 font-bold uppercase cursor-pointer"},e.name)),r.createElement(l.A,{sx:{bottom:0,left:0,width:"50%",justifyContent:"end",display:"flex",flexDirection:"row",gap:"10px"}},e.appUrl&&r.createElement(b,{href:e.appUrl,text:"View App",iconSrc:"https://img.icons8.com/glyph-neue/7692ff/64/domain.png",altText:"domain",variant:"link"}),(e.codeUrlFrontend||e.codeUrlBackend)&&r.createElement(b,{text:"View Code",iconSrc:"https://img.icons8.com/pastel-glyph/7692ff/64/code--v2.png",altText:"domain",variant:"button",menuItems:[{label:"frontend",onClick:function(){e.codeUrlFrontend&&window.open(e.codeUrlFrontend,"_blank")}},{label:"backend",onClick:function(){e.codeUrlBackend&&window.open(e.codeUrlBackend,"_blank")}}]}))),r.createElement(c.A,{sx:{height:"60%",backgroundColor:n?"#343A40":"#f7f4ea"}},r.createElement(m(),{autoPlay:!1,navButtonsAlwaysVisible:!0,indicatorIconButtonProps:{style:{visibility:"hidden"}},sx:{position:"relative",backgroundColor:n?"#343A40":"#f7f4ea"}},e.imageUrls.map((function(t,n){return r.createElement("div",{key:n,style:{position:"relative"}},r.createElement("img",{src:t,alt:"".concat(e.name,"-image-").concat(n),style:{width:"100%",height:"400px",objectFit:"contain",objectPosition:"top",zIndex:1},onClick:function(){return function(e,t,n){j(e),g(t),w(n),p(!0)}(e,t,n)}}))})))),r.createElement(o.A,{className:"font-bodytext px-6 py-2 z-10 bg-opacity-30 backdrop-blur-md mt-2 ".concat(n?"bg-dark-bg text-light-text":"bg-light-bg text-dark-text"),sx:{flexGrow:1,paddingBottom:"60px",maxHeight:"120px",overflowY:"auto",transition:"transform 0.3s ease-in-out"}},e.skills.length>0&&r.createElement("div",{className:"flex gap-2 flex-wrap"},e.skills.map((function(e,t){return r.createElement(v,{key:t,skill:e,isDarkMode:n})}))))))}))),r.createElement(s.A,{open:f,onClose:I},r.createElement("div",{className:"fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center p-4",onClick:I},r.createElement("div",{className:"relative w-full max-w-4xl",onClick:function(e){return e.stopPropagation()}},(null==S?void 0:S.imageUrls)&&r.createElement(m(),{index:h||0,autoPlay:!1,navButtonsAlwaysVisible:!0,indicatorIconButtonProps:{style:{visibility:"hidden"}},onChange:function(e){void 0!==e&&(w(e),g(S.imageUrls[e]))},sx:{position:"relative"}},S.imageUrls.map((function(e,t){return r.createElement("div",{key:t,style:{position:"relative"}},r.createElement("img",{src:e,alt:"".concat(null==S?void 0:S.name,"-image-").concat(t),style:{height:"90vh",borderRadius:"30px",objectFit:"contain",zIndex:1}}))})))))))}}}]);