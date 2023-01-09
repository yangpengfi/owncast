"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1353],{51353:function(e,s,a){a.r(s),a.d(s,{default:function(){return k}});var l=a(85893),t=a(67294),n=a(84485),i=a(71577),r=a(69677),o=a(81025),c=a(30878),d=a(10010),u=a(39398),m=a(48689),p=a(38939),h=a(90745);let f=e=>{let{iconList:s,selectedOption:a,onSelected:t}=e,n=e=>{t&&t(e)},i=""===a?null:a;return(0,l.jsxs)("div",{className:"social-dropdown-container",children:[(0,l.jsx)("p",{className:"description",children:"If you are looking for a platform name not on this list, please select Other and type in your own name. A logo will not be provided."}),(0,l.jsxs)("div",{className:"formfield-container",children:[(0,l.jsx)("div",{className:"label-side",children:(0,l.jsx)("span",{className:"formfield-label",children:"Social Platform"})}),(0,l.jsx)("div",{className:"input-side",children:(0,l.jsxs)(p.Z,{style:{width:240},className:"social-dropdown",placeholder:"Social platform...",defaultValue:i,value:i,onSelect:n,children:[s.map(e=>{let{platform:s,icon:a,key:t}=e;return(0,l.jsxs)(p.Z.Option,{className:"social-option",value:t,children:[(0,l.jsx)("span",{className:"option-icon",children:(0,l.jsx)("img",{src:a,alt:"",className:"option-icon"})}),(0,l.jsx)("span",{className:"option-label",children:s})]},"platform-".concat(t))}),(0,l.jsx)(p.Z.Option,{className:"social-option",value:h.z_,children:"Other..."},"platform-".concat(h.z_))]})})]})]})};var x=a(64777),g=a(99519),j=a(37174),v=a(52018),y=a(41983),b=a(39664);let{Title:N}=n.Z;function k(){var e,s;let[a,n]=(0,t.useState)([]),[p,k]=(0,t.useState)([]),[w,S]=(0,t.useState)(!1),[C,Z]=(0,t.useState)(!1),[E,P]=(0,t.useState)(!1),[z,T]=(0,t.useState)(-1),[L,M]=(0,t.useState)(h.wC),[O,U]=(0,t.useState)(null),_=(0,t.useContext)(g.aC),{serverConfig:I,setFieldInConfigState:V}=_||{},{instanceDetails:A}=I,{socialHandles:H}=A,D=async()=>{try{let e=await (0,x.rQ)(x.$i,{auth:!1}),s=Object.keys(e).map(s=>({key:s,...e[s]}));n(s)}catch(a){console.log(a)}},K=e=>a.find(s=>s.key===e)||!1,Q=""!==L.platform&&!a.find(e=>e.key===L.platform);(0,t.useEffect)(()=>{D()},[]),(0,t.useEffect)(()=>{A.socialHandles&&k(H)},[A]);let B=()=>{U(null),clearTimeout(null)},J=()=>{S(!1),T(-1),Z(!1),P(!1),M({...h.wC})},R=()=>{J()},q=(e,s)=>{M({...L,[e]:s})},F=e=>{e===h.z_?(Z(!0),q("platform","")):(Z(!1),q("platform",e))},G=e=>{let{value:s}=e.target;q("platform",s)},X=e=>{let{value:s}=e;q("url",s)},Y=async e=>{await (0,h.Si)({apiPath:h.c9,data:{value:e},onSuccess:()=>{V({fieldName:"socialHandles",value:e,path:"instanceDetails"}),P(!1),R(),U((0,y.kg)(y.zv)),setTimeout(B,h.sI)},onError:e=>{U((0,y.kg)(y.Un,"There was an error: ".concat(e))),P(!1),setTimeout(B,h.sI)}})},$=()=>{P(!0);let e=p.length?[...p]:[];-1===z?e.push(L):e.splice(z,1,L),Y(e)},W=e=>{let s=[...p];s.splice(e,1),Y(s)},ee=e=>{if(e<=0||e>=p.length)return;let s=[...p],a=s[e-1];s[e-1]=s[e],s[e]=a,Y(s)},es=e=>{if(e<0||e>=p.length-1)return;let s=[...p],a=s[e+1];s[e+1]=s[e],s[e]=a,Y(s)},ea={disabled:(e=L.url,"xmpp"===(s=L.platform)?!(0,j.Kf)(e,"xmpp"):"matrix"===s?!(0,j.bu)(e):!(0,j.jv)(e))},el=(0,l.jsxs)("div",{className:"other-field-container formfield-container",children:[(0,l.jsx)("div",{className:"label-side"}),(0,l.jsx)("div",{className:"input-side",children:(0,l.jsx)(r.Z,{placeholder:"Other platform name",defaultValue:L.platform,onChange:G})})]});return(0,l.jsxs)("div",{className:"social-links-edit-container",children:[(0,l.jsx)(N,{level:3,className:"section-title",children:"Your Social Handles"}),(0,l.jsx)("p",{className:"description",children:"Add all your social media handles and links to your other profiles here."}),(0,l.jsx)(b.E,{status:O}),(0,l.jsx)(o.Z,{className:"social-handles-table",pagination:!1,size:"small",rowKey:e=>"".concat(e.platform,"-").concat(e.url),columns:[{title:"Social Link",dataIndex:"",key:"combo",render:(e,s)=>{let{platform:a,url:t}=s,n=K(a);if(!n)return(0,l.jsx)("div",{className:"social-handle-cell",children:(0,l.jsxs)("p",{className:"option-label",children:[(0,l.jsx)("strong",{children:a}),(0,l.jsx)("span",{className:"handle-url",title:t,children:t})]})});let{icon:i,platform:r}=n;return(0,l.jsxs)("div",{className:"social-handle-cell",children:[(0,l.jsx)("span",{className:"option-icon",children:(0,l.jsx)("img",{src:i,alt:"",className:"option-icon"})}),(0,l.jsxs)("p",{className:"option-label",children:[(0,l.jsx)("strong",{children:r}),(0,l.jsx)("span",{className:"handle-url",title:t,children:t})]})]})}},{title:"",dataIndex:"",key:"edit",render:(e,s,a)=>(0,l.jsxs)("div",{className:"actions",children:[(0,l.jsx)(i.Z,{size:"small",onClick:()=>{let e=p[a];T(a),M({...e}),S(!0),K(e.platform)||Z(!0)},children:"Edit"}),(0,l.jsx)(i.Z,{icon:(0,l.jsx)(d.Z,{}),size:"small",hidden:0===a,onClick:()=>ee(a)}),(0,l.jsx)(i.Z,{icon:(0,l.jsx)(u.Z,{}),size:"small",hidden:a===p.length-1,onClick:()=>es(a)}),(0,l.jsx)(i.Z,{className:"delete-button",icon:(0,l.jsx)(m.Z,{}),size:"small",onClick:()=>W(a)})]})}],dataSource:p}),(0,l.jsx)(c.Z,{title:"Edit Social Handle",open:w,onOk:$,onCancel:R,confirmLoading:E,okButtonProps:ea,children:(0,l.jsxs)("div",{className:"social-handle-modal-content",children:[(0,l.jsx)(f,{iconList:a,selectedOption:Q?h.z_:L.platform,onSelected:F}),C&&el,(0,l.jsx)("br",{}),(0,l.jsx)(v.nv,{fieldName:"social-url",label:"URL",placeholder:{mastodon:"https://mastodon.social/@username",twitter:"https://twitter.com/username"}[L.platform]||"Url to page",value:L.url,onChange:X,useTrim:!0,type:"url",pattern:j.ax}),(0,l.jsx)(b.E,{status:O})]})}),(0,l.jsx)("br",{}),(0,l.jsx)(i.Z,{type:"primary",onClick:()=>{J(),S(!0)},children:"Add a new social link"})]})}},41983:function(e,s,a){a.d(s,{Jk:function(){return d},Un:function(){return o},dG:function(){return m},kg:function(){return h},zv:function(){return u}});var l=a(85893),t=a(89739),n=a(21640),i=a(50888),r=a(28058);let o="error",c="invalid",d="proessing",u="success",m="warning",p={[u]:{type:u,icon:(0,l.jsx)(t.Z,{style:{color:"green"}}),message:"Success!"},[o]:{type:o,icon:(0,l.jsx)(n.Z,{style:{color:"red"}}),message:"An error occurred."},[c]:{type:c,icon:(0,l.jsx)(n.Z,{style:{color:"red"}}),message:"An error occurred."},[d]:{type:d,icon:(0,l.jsx)(i.Z,{}),message:""},[m]:{type:m,icon:(0,l.jsx)(r.Z,{style:{color:"#fc0"}}),message:""}};function h(e,s){return e&&p[e]?s?{type:e,icon:p[e].icon,message:s}:p[e]:null}},99519:function(e,s,a){a.d(s,{aC:function(){return u}});var l=a(85893),t=a(67294),n=a(45697),i=a.n(n),r=a(64777),o=a(90745);let c={streamKeys:[],adminPassword:"",instanceDetails:{customStyles:"",extraPageContent:"",logo:"",name:"",nsfw:!1,socialHandles:[],streamTitle:"",summary:"",tags:[],title:"",welcomeMessage:"",offlineMessage:"",appearanceVariables:{}},ffmpegPath:"",rtmpServerPort:"",webServerPort:"",socketHostOverride:null,s3:{accessKey:"",acl:"",bucket:"",enabled:!1,endpoint:"",region:"",secret:"",servingEndpoint:"",forcePathStyle:!1},yp:{enabled:!1,instanceUrl:""},videoSettings:{latencyLevel:4,cpuUsageLevel:3,videoQualityVariants:[o.gX]},federation:{enabled:!1,isPrivate:!1,username:"",goLiveMessage:"",showEngagement:!0,blockedDomains:[]},notifications:{browser:{enabled:!1,goLiveMessage:""},discord:{enabled:!1,webhook:"",goLiveMessage:""},twitter:{enabled:!1,goLiveMessage:"",apiKey:"",apiSecret:"",accessToken:"",accessTokenSecret:"",bearerToken:""}},externalActions:[],supportedCodecs:[],videoCodec:"",forbiddenUsernames:[],suggestedUsernames:[],chatDisabled:!1,chatJoinMessagesEnabled:!0,chatEstablishedUserMode:!1,hideViewerCount:!1},d={broadcastActive:!1,broadcaster:null,currentBroadcast:null,online:!1,viewerCount:0,sessionMaxViewerCount:0,sessionPeakViewerCount:0,overallPeakViewerCount:0,versionNumber:"0.0.0",streamTitle:"",chatDisabled:!1,health:{healthy:!0,healthPercentage:100,message:"",representation:0}},u=t.createContext({...d,serverConfig:c,setFieldInConfigState:e=>null}),m=e=>{let{children:s}=e,[a,n]=(0,t.useState)(d),[i,o]=(0,t.useState)(c),m=async()=>{try{let e=await (0,r.rQ)(r.Q_);n({...e})}catch(s){}},p=async()=>{try{let e=await (0,r.rQ)(r.bl);o(e)}catch(s){}},h=e=>{let{fieldName:s,value:a,path:l}=e,t=l?{...i,[l]:{...i[l],[s]:a}}:{...i,[s]:a};o(t)};(0,t.useEffect)(()=>{let e=null;return m(),e=setInterval(m,r.NE),p(),()=>{clearInterval(e)}},[]);let f={...a,serverConfig:i,setFieldInConfigState:h};return(0,l.jsx)(u.Provider,{value:f,children:s})};m.propTypes={children:i().element.isRequired},s.ZP=m}}]);
//# sourceMappingURL=1353-e346498e0c585011.js.map