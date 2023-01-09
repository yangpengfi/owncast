(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[719],{24969:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var a=r(1413),n=r(67294),s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},o=r(42135),i=function(e,t){return n.createElement(o.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:t,icon:s}))};i.displayName="PlusOutlined";var l=n.forwardRef(i)},77473:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/config/server/StreamKeys",function(){return r(88610)}])},88610:function(e,t,r){"use strict";r.r(t);var a=r(85893),n=r(67294),s=r(84485),o=r(18119),i=r(69677),l=r(71577),c=r(26713),d=r(14670),u=r(81025),y=r(24969),h=r(99611),p=r(48689),m=r(99519),f=r(64777);let{Paragraph:g}=s.Z,{Item:b}=o.Z,v=async(e,t)=>{try{await (0,f.rQ)(f.um,{method:"POST",auth:!0,data:{value:e}})}catch(r){console.error(r),t(r)}},w=e=>{let{setShowAddKeyForm:t,setFieldInConfigState:r,streamKeys:n,setError:s}=e,c=e=>{let a=[...n,e];r({fieldName:"streamKeys",value:a}),v(a,s),t(!1)};return(0,a.jsxs)(o.Z,{layout:"inline",autoComplete:"off",onFinish:c,children:[(0,a.jsx)(b,{label:"Key",name:"key",tooltip:"The key you provide your broadcasting software",children:(0,a.jsx)(i.Z,{placeholder:"def456"})}),(0,a.jsx)(b,{label:"Comment",name:"comment",tooltip:"For remembering why you added this key",children:(0,a.jsx)(i.Z,{placeholder:"My OBS Key"})}),(0,a.jsx)(l.Z,{type:"primary",htmlType:"submit",children:"Add"})]})},x=e=>{let{setShowAddKeyForm:t}=e;return(0,a.jsx)(l.Z,{type:"default",onClick:()=>t(!0),children:(0,a.jsx)(y.Z,{})})},k=()=>{let e=(0,n.useContext)(m.aC),{serverConfig:t,setFieldInConfigState:r}=e||{},{streamKeys:s}=t,[o,i]=(0,n.useState)(!1),[y,f]=(0,n.useState)({}),[b,k]=(0,n.useState)(null),j=e=>{let t=s.filter(t=>t!==e);r({fieldName:"streamKeys",value:t}),v(t,k)},C=e=>{f({...y,[e]:!y[e]})};return(0,a.jsxs)("div",{children:[(0,a.jsx)(g,{children:"A streaming key is used with your broadcasting software to authenticate itself to Owncast. Most people will only need one. However, if you share a server with others or you want different keys for different broadcasting sources you can add more here."}),(0,a.jsx)(g,{children:"These keys are unrelated to the admin password and will not grant you access to make changes to Owncast's configuration."}),(0,a.jsxs)(g,{children:["Read more about broadcasting at"," ",(0,a.jsx)("a",{href:"https://owncast.online/docs/broadcasting/?source=admin",target:"_blank",rel:"noopener noreferrer",children:"the documentation"}),"."]}),(0,a.jsxs)(c.Z,{direction:"vertical",style:{width:"70%"},children:[b&&(0,a.jsx)(d.Z,{type:"error",message:"Saving Keys Error",description:b}),0===s.length&&(0,a.jsx)(d.Z,{message:"No stream keys!",description:"You will not be able to stream until you create at least one stream key and add it to your broadcasting software.",type:"error"}),(0,a.jsx)(u.Z,{rowKey:"key",columns:[{title:"Key",dataIndex:"key",key:"key",render:e=>(0,a.jsxs)(c.Z,{direction:"horizontal",children:[(0,a.jsx)(g,{copyable:!0,children:y[e]?e:"**********"}),(0,a.jsx)(l.Z,{type:"link",style:{top:"-7px"},icon:(0,a.jsx)(h.Z,{}),onClick:()=>C(e)})]})},{title:"Comment",dataIndex:"comment",key:"comment"},{title:"",key:"delete",render:e=>(0,a.jsx)(l.Z,{onClick:()=>j(e),icon:(0,a.jsx)(p.Z,{})})}],dataSource:s,pagination:!1,footer:()=>o?(0,a.jsx)(w,{setShowAddKeyForm:i,streamKeys:s,setFieldInConfigState:r,setError:k}):(0,a.jsx)(x,{setShowAddKeyForm:i})}),(0,a.jsx)("br",{})]})]})};t.default=k},99519:function(e,t,r){"use strict";r.d(t,{aC:function(){return u}});var a=r(85893),n=r(67294),s=r(45697),o=r.n(s),i=r(64777),l=r(90745);let c={streamKeys:[],adminPassword:"",instanceDetails:{customStyles:"",extraPageContent:"",logo:"",name:"",nsfw:!1,socialHandles:[],streamTitle:"",summary:"",tags:[],title:"",welcomeMessage:"",offlineMessage:"",appearanceVariables:{}},ffmpegPath:"",rtmpServerPort:"",webServerPort:"",socketHostOverride:null,s3:{accessKey:"",acl:"",bucket:"",enabled:!1,endpoint:"",region:"",secret:"",servingEndpoint:"",forcePathStyle:!1},yp:{enabled:!1,instanceUrl:""},videoSettings:{latencyLevel:4,cpuUsageLevel:3,videoQualityVariants:[l.gX]},federation:{enabled:!1,isPrivate:!1,username:"",goLiveMessage:"",showEngagement:!0,blockedDomains:[]},notifications:{browser:{enabled:!1,goLiveMessage:""},discord:{enabled:!1,webhook:"",goLiveMessage:""},twitter:{enabled:!1,goLiveMessage:"",apiKey:"",apiSecret:"",accessToken:"",accessTokenSecret:"",bearerToken:""}},externalActions:[],supportedCodecs:[],videoCodec:"",forbiddenUsernames:[],suggestedUsernames:[],chatDisabled:!1,chatJoinMessagesEnabled:!0,chatEstablishedUserMode:!1,hideViewerCount:!1},d={broadcastActive:!1,broadcaster:null,currentBroadcast:null,online:!1,viewerCount:0,sessionMaxViewerCount:0,sessionPeakViewerCount:0,overallPeakViewerCount:0,versionNumber:"0.0.0",streamTitle:"",chatDisabled:!1,health:{healthy:!0,healthPercentage:100,message:"",representation:0}},u=n.createContext({...d,serverConfig:c,setFieldInConfigState:e=>null}),y=e=>{let{children:t}=e,[r,s]=(0,n.useState)(d),[o,l]=(0,n.useState)(c),y=async()=>{try{let e=await (0,i.rQ)(i.Q_);s({...e})}catch(t){}},h=async()=>{try{let e=await (0,i.rQ)(i.bl);l(e)}catch(t){}},p=e=>{let{fieldName:t,value:r,path:a}=e,n=a?{...o,[a]:{...o[a],[t]:r}}:{...o,[t]:r};l(n)};(0,n.useEffect)(()=>{let e=null;return y(),e=setInterval(y,i.NE),h(),()=>{clearInterval(e)}},[]);let m={...r,serverConfig:o,setFieldInConfigState:p};return(0,a.jsx)(u.Provider,{value:m,children:t})};y.propTypes={children:o().element.isRequired},t.ZP=y},92703:function(e,t,r){"use strict";var a=r(50414);function n(){}function s(){}s.resetWarningCache=n,e.exports=function(){function e(e,t,r,n,s,o){if(o!==a){var i=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:n};return r.PropTypes=r,r}},45697:function(e,t,r){e.exports=r(92703)()},50414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(e){e.O(0,[481,5596,1407,173,611,1577,3763,4485,5212,4759,7033,8909,3903,3698,3461,8119,5317,745,9774,2888,179],function(){return e(e.s=77473)}),_N_E=e.O()}]);
//# sourceMappingURL=StreamKeys-5993467b43432353.js.map