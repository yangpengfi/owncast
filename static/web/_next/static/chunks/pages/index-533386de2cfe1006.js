(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{48312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(92577)}])},78696:function(e,t,n){"use strict";n.d(t,{e:function(){return l}});var o=n(85893),i=n(71577),s=n(34447),a=n(13959),r=n.n(a);let l=e=>{let{onClick:t,props:n}=e;return(0,o.jsx)(i.Z,{...n,type:"primary",className:r().button,icon:(0,o.jsx)(s.Z,{}),onClick:t,id:"follow-button",children:"Follow"})}},14761:function(e,t,n){"use strict";n.r(t),n.d(t,{Modal:function(){return d}});var o=n(85893),i=n(30878),s=n(26303),a=n(11382),r=n(67294),l=n(77011),c=n.n(l);let d=e=>{let{title:t,url:n,open:l,handleOk:d,handleCancel:u,afterClose:m,height:p,width:h,children:x}=e,[f,j]=(0,r.useState)(!!n),g="100%",_="520px";n&&(g="70vh",_="900px");let v={padding:"0px",minHeight:p,height:null!=p?p:g},w=n&&(0,o.jsx)("iframe",{title:t,src:n,width:"100%",height:"100%",sandbox:"allow-same-origin allow-scripts allow-popups allow-forms",frameBorder:"0",allowFullScreen:!0,style:{display:"block"},onLoad:()=>j(!1)});return(0,o.jsx)(i.Z,{title:t,open:l,onOk:d,onCancel:u,afterClose:m,bodyStyle:v,width:null!=h?h:_,zIndex:999,footer:null,centered:!0,destroyOnClose:!0,children:(0,o.jsxs)("div",{id:"modal-container",style:{height:"100%"},children:[f&&(0,o.jsx)(s.Z,{active:f,style:{padding:"10px"},paragraph:{rows:10}}),w&&(0,o.jsx)("div",{style:{display:f?"none":"inline"},children:w}),x&&(0,o.jsx)("div",{className:c().content,children:x}),f&&(0,o.jsx)(a.Z,{className:c().spinner,spinning:f,size:"large"})]})})};t.default=d,d.defaultProps={url:void 0,children:void 0,handleOk:void 0,handleCancel:void 0,afterClose:void 0}},51513:function(e,t,n){"use strict";n.d(t,{R:function(){return c}});var o=n(85893),i=n(27049),s=n(24019),a=n(45938),r=n(88335),l=n.n(r);let c=e=>{let t,{streamName:n,customText:r,lastLive:c,notificationsEnabled:d,fediverseAccount:u,onNotifyClick:m,onFollowClick:p}=e;return t=r||(!r&&d&&u?(0,o.jsxs)("span",{children:["This stream is offline. You can"," ",(0,o.jsx)("span",{role:"link",tabIndex:0,className:l().actionLink,onClick:m,children:"be notified"})," ","the next time ",n," goes live or"," ",(0,o.jsx)("span",{role:"link",tabIndex:0,className:l().actionLink,onClick:p,children:"follow"})," ",u," on the Fediverse."]}):!r&&d?(0,o.jsxs)("span",{children:["This stream is offline."," ",(0,o.jsx)("span",{role:"link",tabIndex:0,className:l().actionLink,onClick:m,children:"Be notified"})," ","the next time ",n," goes live."]}):!r&&u?(0,o.jsxs)("span",{children:["This stream is offline."," ",(0,o.jsx)("span",{role:"link",tabIndex:0,className:l().actionLink,onClick:p,children:"Follow"})," ",u," on the Fediverse to see the next time ",n," goes live."]}):"This stream is offline. Check back soon!"),(0,o.jsx)("div",{id:"offline-banner",className:l().outerContainer,children:(0,o.jsxs)("div",{className:l().innerContainer,children:[(0,o.jsx)("div",{className:l().header,children:n}),(0,o.jsx)(i.Z,{className:l().separator}),(0,o.jsx)("div",{className:l().bodyText,children:t}),c&&(0,o.jsxs)("div",{className:l().lastLiveDate,children:[(0,o.jsx)(s.Z,{className:l().clockIcon}),"Last live ".concat((0,a.Z)(new Date(c))," ago.")]})]})})}},69357:function(e,t,n){"use strict";n.d(t,{X:function(){return d}});var o=n(85893),i=n(45938),s=n(68730),a=n(67294),r=n(31326),l=n(37970),c=n.n(l);let d=e=>{let t,{online:n,lastConnectTime:l,lastDisconnectTime:d,viewerCount:u}=e,[,m]=(0,a.useState)(new Date);(0,a.useEffect)(()=>{let e=setInterval(()=>m(new Date),1e3);return()=>{clearInterval(e)}},[]);let p="";if(n&&l){let h=function(e){let t=(0,s.Z)({start:e,end:new Date});return t.days>1?"".concat(t.days," days ").concat(t.hours," hours"):t.hours>=1?"".concat(t.hours," hours ").concat(t.minutes," minutes"):"".concat(t.minutes," minutes ").concat(t.seconds," seconds")}(new Date(l));p=n?"Live for  ".concat(h):"Offline",t=u>0&&(0,o.jsxs)("div",{className:c().right,children:[(0,o.jsx)("span",{children:(0,o.jsx)(r.Z,{})}),(0,o.jsx)("span",{children:" ".concat(u)})]})}else!n&&(p="Offline",d&&(t="Last live ".concat((0,i.Z)(new Date(d))," ago.")));return(0,o.jsxs)("div",{className:c().statusbar,children:[(0,o.jsx)("div",{children:p}),(0,o.jsx)("div",{children:t})]})};d.defaultProps={lastConnectTime:null,lastDisconnectTime:null}},92577:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return eD}});var o=n(85893),i=n(97183),s=n(4480),a=n(9008),r=n.n(a),l=n(67294),c=n(93423),d=n(5152),u=n.n(d),m=n(77466),p=n(37527);let h=e=>{let{name:t}=e,n=(0,s.sJ)(m.j$),o=(0,s.sJ)(m.RI),[i,a]=(0,l.useState)(!1),{online:r}=o,c=e=>{document.title=e},d=()=>{a(!0)},u=()=>{a(!1),c(t)},p=()=>{window.addEventListener("blur",d),window.addEventListener("focus",u)},h=()=>{window.removeEventListener("blur",d),window.removeEventListener("focus",u)};return(0,l.useEffect)(()=>(p(),()=>{h()}),[t]),(0,l.useEffect)(()=>{if(!i||!r)return;let e=n[n.length-1];"CHAT"===e.type&&c("\uD83D\uDCAC :: ".concat(t))},[n,t]),(0,l.useEffect)(()=>{i&&(r?c(" \uD83D\uDFE2 :: ".concat(t)):r||c(" \uD83D\uDD34 :: ".concat(t)))},[r,t]),null},x=()=>(0,o.jsx)("script",{id:"server-side-hydration",nonce:"{{.Nonce}}",dangerouslySetInnerHTML:{__html:"\n	window.configHydration = {{.ServerConfigJSON}};\n	window.statusHydration = {{.StatusJSON}};\n	"}}),f=()=>{let e=()=>{navigator.serviceWorker.register("/serviceWorker.js").then(e=>{console.debug("Service Worker registration successful with scope: ",e.scope)},e=>{console.error("Service Worker registration failed: ",e)})};return(0,l.useEffect)(()=>("serviceWorker"in navigator&&window.addEventListener("load",e),()=>{window.removeEventListener("load",e)}),[]),null};var j=n(90575),g=n(26303),_=n(72581),v=n(83469),w=n(10808),b=n.n(w);let y=e=>{let{content:t}=e;return(0,o.jsx)("div",{className:b().pageContentContainer,id:"custom-page-content",children:(0,o.jsx)("div",{className:b().customPageContent,dangerouslySetInnerHTML:{__html:t}})})};var k=n(17725),C=n.n(k),N=n(87412),S=n(12341),L=n.n(S);let T=u()(()=>Promise.all([n.e(1272),n.e(8700),n.e(5698),n.e(4977),n.e(1496)]).then(n.bind(n,94977)).then(e=>e.ChatContainer),{loadableGenerated:{webpack:()=>[94977]}}),Z=()=>{let e=(0,s.sJ)(m.db),t=(0,s.sJ)(m.pH);if(!e)return null;let{id:n,isModerator:i,displayName:a}=e;return(0,o.jsx)(N.ZP,{className:L().root,collapsedWidth:0,width:320,children:(0,o.jsx)(T,{messages:t,usernameToHighlight:a,chatUserId:n,isModerator:i})})};var D=n(67917),A=n.n(D);let E=e=>{let{version:t}=e;return(0,o.jsxs)("footer",{className:A().footer,children:[(0,o.jsxs)("span",{children:["Powered by ",(0,o.jsx)("a",{href:"https://owncast.online",children:t})]}),(0,o.jsxs)("span",{className:A().links,children:[(0,o.jsx)("a",{href:"https://owncast.online/docs",target:"_blank",rel:"noreferrer",children:"Documentation"}),(0,o.jsx)("a",{href:"https://owncast.online/help",target:"_blank",rel:"noreferrer",children:"Contribute"}),(0,o.jsx)("a",{href:"https://github.com/owncast/owncast",target:"_blank",rel:"noreferrer",children:"Source"})]})]})};var M=n(12270),F=n.n(M);let B=e=>{let{children:t}=e;return(0,o.jsx)("div",{className:"".concat(F().row),children:t})};var I=n(71577),H=n(94184),P=n.n(H),R=n(13959),z=n.n(R);let O=e=>{let{action:t,primary:n=!0,externalActionSelected:i}=e,{title:s,description:a,icon:r,color:l}=t;return(0,o.jsxs)(I.Z,{type:n?"primary":"default",className:P()(["".concat(z().button),"action-button"]),onClick:()=>i(t),style:{backgroundColor:l},children:[r&&(0,o.jsx)("img",{src:r,className:"".concat(z().icon),alt:a}),s]})};var J=n(51513),U=n(78696),G=n(71578);let W=e=>{let{onClick:t,text:n}=e;return(0,o.jsx)(I.Z,{type:"primary",className:"".concat(z().button),icon:(0,o.jsx)(G.Z,{}),onClick:t,id:"notify-button",children:n||"Notify"})};var q=n(53731),Y=n(74933),Q=n.n(Y);let V=e=>{let{src:t}=e;return(0,o.jsx)("div",{className:Q().root,children:(0,o.jsx)("div",{className:Q().container,children:(0,o.jsx)("img",{src:t,alt:"Logo",className:Q().image,loading:"lazy"})})})};var X=n(25675),K=n.n(X),$=n(573),ee=n.n($);let et=e=>{let{links:t}=e;return(0,o.jsx)("div",{className:ee().links,children:t.map(e=>(0,o.jsx)("a",{href:e.url,className:ee().link,target:"_blank",rel:"noreferrer me",children:(0,o.jsx)(K(),{src:e.icon||"/img/platformlogos/default.svg",alt:e.platform,title:e.platform,className:ee().link,width:"30",height:"30"})},e.platform))})};var en=n(47900),eo=n.n(en);let ei=e=>{let{name:t,title:n,summary:i,logo:s,tags:a,links:r}=e;return(0,o.jsx)("div",{className:eo().root,children:(0,o.jsxs)("div",{className:eo().logoTitleSection,children:[(0,o.jsx)("div",{className:eo().logo,children:(0,o.jsx)(V,{src:s})}),(0,o.jsxs)("div",{className:eo().titleSection,children:[(0,o.jsx)("div",{className:P()(eo().title,eo().row,"header-title"),children:t}),(0,o.jsx)("div",{className:P()(eo().subtitle,eo().row,"header-subtitle"),children:(0,o.jsx)(q.Z,{children:n||i})}),(0,o.jsx)("div",{className:P()(eo().tagList,eo().row),children:a.length>0&&a.map(e=>(0,o.jsxs)("span",{children:["#",e,"\xa0"]},e))}),(0,o.jsx)("div",{className:P()(eo().socialLinks,eo().row),children:(0,o.jsx)(et,{links:r})})]})]})})};var es=n(69357),ea=n(14761),er=n(66516),el=n(38504),ec=n(49647),ed=n(60198),eu=n(89705),em=n(97038),ep=n.n(em);let eh="notify",ex="follow",ef=e=>{let{actions:t,externalActionSelected:n,notifyItemSelected:i,followItemSelected:s,showFollowItem:a,showNotifyItem:r}=e,l=e=>{if(e.key===eh){i();return}if(e.key===ex){s();return}let o=t.find(t=>t.url===e.key);n(o)},c=t.map(e=>({key:e.url,label:(0,o.jsxs)("span",{className:ep().item,children:[e.icon&&(0,o.jsx)("img",{className:ep().icon,src:e.icon,alt:e.title})," ",e.title]})}));a&&c.unshift({key:ex,label:(0,o.jsxs)("span",{className:ep().item,children:[(0,o.jsx)(ec.Z,{className:ep().icon})," Follow this stream"]})}),r&&c.unshift({key:eh,label:(0,o.jsxs)("span",{className:ep().item,children:[(0,o.jsx)(ed.Z,{className:ep().icon}),"Notify when live"]})});let d=(0,o.jsx)(er.Z,{items:c,onClick:l});return(0,o.jsx)(el.Z,{overlay:d,placement:"bottomRight",trigger:["click"],className:ep().menu,children:(0,o.jsx)("div",{className:ep().buttonWrap,children:(0,o.jsx)(I.Z,{type:"default",onClick:e=>e.preventDefault(),size:"large",icon:(0,o.jsx)(eu.Z,{size:6,style:{rotate:"90deg"}})})})})},{Content:ej}=i.Z,eg=u()(()=>Promise.all([n.e(8909),n.e(3698),n.e(5817)]).then(n.bind(n,15508)).then(e=>e.FollowerCollection),{loadableGenerated:{webpack:()=>[15508]}}),e_=u()(()=>Promise.all([n.e(5596),n.e(173),n.e(7177)]).then(n.bind(n,77177)).then(e=>e.FollowModal),{loadableGenerated:{webpack:()=>[77177]}}),ev=u()(()=>Promise.all([n.e(5596),n.e(173),n.e(4485),n.e(1424)]).then(n.bind(n,11424)).then(e=>e.BrowserNotifyModal),{loadableGenerated:{webpack:()=>[11424]}}),ew=u()(()=>n.e(7815).then(n.bind(n,17815)).then(e=>e.NotifyReminderPopup),{loadableGenerated:{webpack:()=>[17815]}}),eb=u()(()=>Promise.all([n.e(2544),n.e(7902),n.e(2239),n.e(5202)]).then(n.bind(n,8888)).then(e=>e.OwncastPlayer),{loadableGenerated:{webpack:()=>[8888]}}),ey=u()(()=>Promise.all([n.e(1272),n.e(8700),n.e(5698),n.e(4977),n.e(1496)]).then(n.bind(n,94977)).then(e=>e.ChatContainer),{loadableGenerated:{webpack:()=>[94977]}}),ek=e=>{let{name:t,streamTitle:n,summary:i,tags:s,socialHandles:a,extraPageContent:r,setShowFollowModal:l,supportFediverseFeatures:c}=e,d=(0,o.jsx)(y,{content:r}),u=(0,o.jsx)(eg,{name:t,onFollowButtonClick:()=>l(!0)}),m=[{label:"About",key:"2",children:d}];return c&&m.push({label:"Followers",key:"3",children:u}),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:C().lowerHalf,children:(0,o.jsx)(ei,{name:t,title:n,summary:i,tags:s,links:a,logo:"/logo"})}),(0,o.jsx)("div",{className:C().lowerSection,children:m.length>1?(0,o.jsx)(j.Z,{defaultActiveKey:"0",items:m}):d})]})},eC=e=>{let{name:t,streamTitle:n,summary:i,tags:s,socialHandles:a,extraPageContent:r,messages:l,currentUser:c,showChat:d,actions:u,setExternalActionToDisplay:m,setShowNotifyPopup:p,setShowFollowModal:h,supportFediverseFeatures:x,supportsBrowserNotifications:f}=e;if(!c)return null;let{id:g,displayName:_}=c,v=d&&(0,o.jsx)(ey,{messages:l,usernameToHighlight:_,chatUserId:g,isModerator:!1}),w=(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(ei,{name:t,title:n,summary:i,tags:s,links:a,logo:"/logo"}),(0,o.jsx)(y,{content:r})]}),b=(0,o.jsx)(eg,{name:t,onFollowButtonClick:()=>h(!0)}),k=(e,t)=>(0,o.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"start"},children:[(0,o.jsx)(t,{...e,style:{width:"85%"}}),(0,o.jsx)(ef,{showFollowItem:x,showNotifyItem:f,actions:u,externalActionSelected:m,notifyItemSelected:()=>p(!0),followItemSelected:()=>h(!0)})]});return(0,o.jsx)("div",{className:C().lowerSectionMobile,children:(0,o.jsx)(j.Z,{className:C().tabs,defaultActiveKey:"0",items:[d&&{label:"Chat",key:"0",children:v},{label:"About",key:"2",children:w},{label:"Followers",key:"3",children:b}],renderTabBar:k})})},eN=e=>{let{externalActionToDisplay:t,setExternalActionToDisplay:n}=e,{title:i,description:s,url:a}=t;return(0,o.jsx)(ea.Modal,{title:s||i,url:a,open:!!t,height:"80vh",handleCancel:()=>n(null)})},eS=()=>{let e=(0,s.sJ)(m.Q),t=(0,s.sJ)(m.g1),n=(0,s.sJ)(m.pT),i=(0,s.sJ)(m.di),a=(0,s.sJ)(m.db),[r,c]=(0,s.FV)(m.hz),d=(0,s.sJ)(m.j$),u=(0,s.sJ)(m.YW),{viewerCount:p,lastConnectTime:h,lastDisconnectTime:x,streamTitle:f}=(0,s.sJ)(m.RI),{extraPageContent:j,version:w,name:b,summary:y,socialHandles:k,tags:N,externalActions:S,offlineMessage:L,chatDisabled:T,federation:D,notifications:A}=t,[M,F]=(0,l.useState)(!1),[I,H]=(0,l.useState)(!1),[P,R]=(0,l.useState)(!1),{account:z,enabled:G}=D,{browser:q}=A,{enabled:Y}=q,[Q,V]=(0,l.useState)(null),[X,K]=(0,l.useState)(!1),$=e=>{let{openExternally:t,url:n}=e;t?window.open(n,"_blank"):V(e)},ee=S.map(e=>(0,o.jsx)(O,{action:e,externalActionSelected:$},e.url)),et=()=>{let e=parseInt((0,_.$o)(_.dA.userVisitCount),10);Number.isNaN(e)&&(e=0),(0,_.qQ)(_.dA.userVisitCount,e+1),e>2&&!(0,_.$o)(_.dA.hasDisplayedNotificationModal)&&F(!0)},en=()=>{H(!1),F(!1),(0,_.qQ)(_.dA.hasDisplayedNotificationModal,!0)},eo=()=>{let e=window.innerWidth;void 0===r&&(e<=768?c(!0):c(!1)),!r&&e<=768&&c(!0),r&&e>768&&c(!1)};(0,l.useEffect)(()=>(et(),eo(),window.addEventListener("resize",eo),()=>{window.removeEventListener("resize",eo)}),[]),(0,l.useEffect)(()=>{K((0,v.Z)()&&Y)},[Y]);let ei=!T&&i&&n;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:C().main,children:[(0,o.jsxs)(ej,{className:C().root,children:[(0,o.jsxs)("div",{className:C().mainSection,children:[(0,o.jsxs)("div",{className:C().topSection,children:[e.appLoading&&(0,o.jsx)(g.Z,{loading:!0,active:!0,paragraph:{rows:7}}),u&&(0,o.jsx)(eb,{source:"/hls/stream.m3u8",online:u}),!u&&!e.appLoading&&(0,o.jsx)(J.R,{streamName:b,customText:L,notificationsEnabled:Y,fediverseAccount:z,lastLive:x,onNotifyClick:()=>H(!0),onFollowClick:()=>R(!0)}),u&&(0,o.jsx)(es.X,{online:u,lastConnectTime:h,lastDisconnectTime:x,viewerCount:p})]}),(0,o.jsx)("div",{className:C().midSection,children:(0,o.jsxs)("div",{className:C().buttonsLogoTitleSection,children:[!r&&(0,o.jsxs)(B,{children:[ee,G&&(0,o.jsx)(U.e,{size:"small",onClick:()=>R(!0)}),X&&(0,o.jsx)(ew,{open:M,notificationClicked:()=>H(!0),notificationClosed:()=>en(),children:(0,o.jsx)(W,{onClick:()=>H(!0)})})]}),(0,o.jsx)(ea.Modal,{title:"Browser Notifications",open:I,afterClose:()=>en(),handleCancel:()=>en(),children:(0,o.jsx)(ev,{})})]})}),r?(0,o.jsx)(eC,{name:b,streamTitle:f,summary:y,tags:N,socialHandles:k,extraPageContent:j,messages:d,currentUser:a,showChat:ei,actions:S,setExternalActionToDisplay:$,setShowNotifyPopup:H,setShowFollowModal:R,supportFediverseFeatures:G,supportsBrowserNotifications:X}):(0,o.jsx)(ek,{name:b,streamTitle:f,summary:y,tags:N,socialHandles:k,extraPageContent:j,setShowFollowModal:R,supportFediverseFeatures:G}),(0,o.jsx)(E,{version:w})]}),ei&&!r&&(0,o.jsx)(Z,{})]}),!r&&!1]}),Q&&(0,o.jsx)(eN,{externalActionToDisplay:Q,setExternalActionToDisplay:V}),(0,o.jsx)(ea.Modal,{title:"Follow ".concat(b),open:P,handleCancel:()=>R(!1),width:"550px",children:(0,o.jsx)(e_,{account:z,name:b,handleClose:()=>R(!1)})})]})},eL=()=>{let e=(0,s.sJ)(m.g1),{appearanceVariables:t,customStyles:n}=e,i=Object.keys(t).filter(e=>!!t[e]).map(e=>"--".concat(e,": ").concat(t[e]));return(0,o.jsx)("style",{dangerouslySetInnerHTML:{__html:"\n				:root {\n					".concat(i.join(";\n"),"\n				}\n				").concat(n,"\n			")}})},eT=u()(()=>n.e(3625).then(n.bind(n,3625)).then(e=>e.FatalErrorStateModal),{loadableGenerated:{webpack:()=>[3625]},loading:()=>(0,o.jsx)("div",{children:"Loading..."}),ssr:!1}),eZ=()=>{let e=(0,s.sJ)(m.g1),{name:t,title:n,customStyles:a}=e,d=(0,s.sJ)(m.di),u=(0,s.sJ)(m.ap),j=(0,l.useRef)(null),{chatDisabled:g}=e;return(0,c.Z)(!0),(0,l.useEffect)(()=>{!function(e){let t=e=>{let t=e.getAttribute("rel");e.setAttribute("rel","".concat(t," noopener noreferrer"))};e.querySelectorAll("a").forEach(e=>t(e));let n=new MutationObserver(function(e){for(let n of e)for(let o of n.addedNodes)o instanceof HTMLElement&&"a"===o.tagName.toLowerCase()&&t(o)});n.observe(e,{attributes:!1,childList:!0,subtree:!0})}(j.current)},[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r(),{children:[(0,o.jsx)(x,{}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"57x57",href:"/img/favicon/apple-icon-57x57.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"60x60",href:"/img/favicon/apple-icon-60x60.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"72x72",href:"/img/favicon/apple-icon-72x72.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"76x76",href:"/img/favicon/apple-icon-76x76.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"114x114",href:"/img/favicon/apple-icon-114x114.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"120x120",href:"/img/favicon/apple-icon-120x120.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"144x144",href:"/img/favicon/apple-icon-144x144.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"152x152",href:"/img/favicon/apple-icon-152x152.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/img/favicon/apple-icon-180x180.png"}),(0,o.jsx)("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/img/favicon/android-icon-192x192.png"}),(0,o.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/img/favicon/favicon-32x32.png"}),(0,o.jsx)("link",{rel:"icon",type:"image/png",sizes:"96x96",href:"/img/favicon/favicon-96x96.png"}),(0,o.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/img/favicon/favicon-16x16.png"}),(0,o.jsx)("link",{rel:"manifest",href:"/manifest.json"}),(0,o.jsx)("link",{href:"/api/auth/provider/indieauth"}),(0,o.jsx)("meta",{name:"msapplication-TileColor",content:"#ffffff"}),(0,o.jsx)("meta",{name:"msapplication-TileImage",content:"/img/favicon/ms-icon-144x144.png"}),(0,o.jsx)("meta",{name:"theme-color",content:"#ffffff"}),(0,o.jsx)("style",{children:a}),(0,o.jsx)("base",{target:"_blank"})]}),(0,o.jsxs)(r(),{children:[t?(0,o.jsx)("title",{children:t}):(0,o.jsx)("title",{children:"{{.Name}}"}),(0,o.jsx)("meta",{name:"description",content:"{{.Summary}}"}),(0,o.jsx)("meta",{property:"og:title",content:"{{.Name}}"}),(0,o.jsx)("meta",{property:"og:site_name",content:"{{.Name}}"}),(0,o.jsx)("meta",{property:"og:url",content:"{{.RequestedURL}}"}),(0,o.jsx)("meta",{property:"og:description",content:"{{.Summary}}"}),(0,o.jsx)("meta",{property:"og:type",content:"video.other"}),(0,o.jsx)("meta",{property:"video:tag",content:"{{.TagsString}}"}),(0,o.jsx)("meta",{property:"og:image",content:"{{.RequestedURL}}{{.Thumbnail}}"}),(0,o.jsx)("meta",{property:"og:image:url",content:"{{.RequestedURL}}{{.Thumbnail}}"}),(0,o.jsx)("meta",{property:"og:image:alt",content:"{{.RequestedURL}}{{.Image}}"}),(0,o.jsx)("meta",{property:"og:video",content:"{{.RequestedURL}}/embed/video"}),(0,o.jsx)("meta",{property:"og:video:secure_url",content:"{{.RequestedURL}}/embed/video"}),(0,o.jsx)("meta",{property:"og:video:height",content:"315"}),(0,o.jsx)("meta",{property:"og:video:width",content:"560"}),(0,o.jsx)("meta",{property:"og:video:type",content:"text/html"}),(0,o.jsx)("meta",{property:"og:video:actor",content:"{{.Name}}"}),(0,o.jsx)("meta",{property:"twitter:title",content:"{{.Name}}"}),(0,o.jsx)("meta",{property:"twitter:url",content:"{{.RequestedURL}}"}),(0,o.jsx)("meta",{property:"twitter:description",content:"{{.Summary}}"}),(0,o.jsx)("meta",{property:"twitter:image",content:"{{.Image}}"}),(0,o.jsx)("meta",{property:"twitter:card",content:"player"}),(0,o.jsx)("meta",{property:"twitter:player",content:"{{.RequestedURL}}/embed/video"}),(0,o.jsx)("meta",{property:"twitter:player:width",content:"560"}),(0,o.jsx)("meta",{property:"twitter:player:height",content:"315"})]}),(0,o.jsx)(m.me,{}),(0,o.jsx)(f,{}),(0,o.jsx)(h,{name:t}),(0,o.jsx)(eL,{}),(0,o.jsxs)(i.Z,{ref:j,style:{minHeight:"100vh"},children:[(0,o.jsx)(p.h,{name:n||t,chatAvailable:d,chatDisabled:g}),(0,o.jsx)(eS,{}),u&&(0,o.jsx)(eT,{title:u.title,message:u.message})]})]})};function eD(){return(0,o.jsx)(eZ,{})}eD.getLayout=function(e){return e}},83469:function(e,t,n){"use strict";function o(){return"serviceWorker"in navigator&&"PushManager"in window}n.d(t,{Z:function(){return o}})},13959:function(e){e.exports={button:"ActionButton_button__z5Z2c",icon:"ActionButton_icon__EPp7Q"}},97038:function(e){e.exports={item:"ActionButtonMenu_item__OJQdr",buttonWrap:"ActionButtonMenu_buttonWrap__WQ9kt",icon:"ActionButtonMenu_icon__edY1D",menu:"ActionButtonMenu_menu__GChDk"}},12270:function(e){e.exports={row:"ActionButtonRow_row__SiEGe"}},47900:function(e){e.exports={root:"ContentHeader_root__HaUG0",row:"ContentHeader_row__9Q8gH",logoTitleSection:"ContentHeader_logoTitleSection__Z8pUc",logo:"ContentHeader_logo__wo_HN",titleSection:"ContentHeader_titleSection___6Y15",title:"ContentHeader_title__E_DsI",subtitle:"ContentHeader_subtitle__n1Wew",tagList:"ContentHeader_tagList__rx3jY"}},17725:function(e){e.exports={root:"Content_root__h1mNK",mainSection:"Content_mainSection__Gk78Y",topSection:"Content_topSection__JIZi0",lowerSection:"Content_lowerSection__BZHYI",lowerSectionMobile:"Content_lowerSectionMobile__hRr0_",tabs:"Content_tabs__LMcZ1",leftCol:"Content_leftCol__U2TDq",loadingSpinner:"Content_loadingSpinner__mDlYC",main:"Content_main__XVf63"}},10808:function(e){e.exports={pageContentContainer:"CustomPageContent_pageContentContainer__EG4tU",customPageContent:"CustomPageContent_customPageContent__Mr981",summary:"CustomPageContent_summary___Zgps"}},67917:function(e){e.exports={footer:"Footer_footer__mPuvf",links:"Footer_links__7bBxV"}},74933:function(e){e.exports={root:"Logo_root__jKiJC",container:"Logo_container__A4UYT",image:"Logo_image__Ahkom"}},77011:function(e){e.exports={spinner:"Modal_spinner__GiSS0",content:"Modal_content__h9my9"}},88335:function(e){e.exports={outerContainer:"OfflineBanner_outerContainer__3AbsB",innerContainer:"OfflineBanner_innerContainer__zTm13",bodyText:"OfflineBanner_bodyText__nNNy0",separator:"OfflineBanner_separator___j_Ss",lastLiveDate:"OfflineBanner_lastLiveDate___UZdO",clockIcon:"OfflineBanner_clockIcon__s0DB_",header:"OfflineBanner_header__Vu20o",footer:"OfflineBanner_footer__o3Zl5",actionLink:"OfflineBanner_actionLink__b4Mwa"}},12341:function(e){e.exports={root:"Sidebar_root__8HE0A"}},573:function(e){e.exports={link:"SocialLinks_link___CcSm",links:"SocialLinks_links__gOAb7"}},37970:function(e){e.exports={statusbar:"Statusbar_statusbar__AtVnB"}}},function(e){e.O(0,[481,1407,611,1577,3763,5212,4759,3903,6754,878,575,5938,6395,1082,5360,8245,8006,2051,7466,7527,9774,2888,179],function(){return e(e.s=48312)}),_N_E=e.O()}]);
//# sourceMappingURL=index-533386de2cfe1006.js.map