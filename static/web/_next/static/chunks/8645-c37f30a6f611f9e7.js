"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8645,1353],{80894:function(e,a,s){s.d(a,{Q:function(){return d},Y:function(){return u}});var t=s(85893),n=s(67294),l=s(84485),i=s(20550),r=s(52018),o=s(39664);let{Title:c}=l.Z,d="#5a67d8",u=e=>{let{title:a,description:s,placeholder:l,maxLength:u,values:m,handleDeleteIndex:h,handleCreateString:p,submitStatus:f,continuousStatusMessage:x}=e,[g,j]=(0,n.useState)(""),v=e=>{let{value:a}=e;j(a)},N=()=>{let e=g.trim();p(e),j("")};return(0,t.jsxs)("div",{className:"edit-string-array-container",children:[(0,t.jsx)(c,{level:3,className:"section-title",children:a}),(0,t.jsx)("p",{className:"description",children:s}),(0,t.jsx)("div",{className:"edit-current-strings",children:null==m?void 0:m.map((e,a)=>{let s=()=>{h(a)};return(0,t.jsx)(i.Z,{closable:!0,onClose:s,color:d,children:e},"tag-".concat(e,"-").concat(a))})}),x&&(0,t.jsx)("div",{className:"continuous-status-section",children:(0,t.jsx)(o.E,{status:x})}),(0,t.jsx)("div",{className:"add-new-string-section",children:(0,t.jsx)(r.nv,{fieldName:"string-input",value:g,onChange:v,onPressEnter:N,maxLength:u,placeholder:l,status:f})})]})};u.defaultProps={maxLength:50,description:null,submitStatus:null,continuousStatusMessage:null}},10135:function(e,a,s){s.d(a,{$7:function(){return x},Kx:function(){return h},Sk:function(){return p},xA:function(){return f}});var t=s(85893),n=s(71577),l=s(94184),i=s.n(l),r=s(67294),o=s(90745),c=s(41983),d=s(99519),u=s(39664),m=s(52018);let h="default",p="textarea",f="url",x=e=>{let{apiPath:a,configPath:s="",initialValue:l,useTrim:h,useTrimLead:p,...f}=e,[x,g]=(0,r.useState)(null),[j,v]=(0,r.useState)(!1),N=(0,r.useContext)(d.aC),{setFieldInConfigState:b}=N||{},y=null,{fieldName:k,required:w,tip:C,status:S,value:Z,onChange:T,onSubmit:E}=f,P=()=>{g(null),v(!1),clearTimeout(y),y=null};(0,r.useEffect)(()=>{w&&(""===Z||null===Z)||Z===l?v(!1):(P(),v(!0))},[Z]);let U=e=>{let{fieldName:a,value:s}=e;if(T){let t=s;h?t=s.trim():p&&(t=s.replace(/^\s+/g,"")),T({fieldName:a,value:t})}},L=e=>{let{value:a}=e;T&&w&&""===a&&T({fieldName:k,value:l})},M=async()=>{(w&&""!==Z||Z!==l)&&(g((0,c.kg)(c.Jk)),await (0,o.Si)({apiPath:a,data:{value:Z},onSuccess:()=>{b({fieldName:k,value:Z,path:s}),g((0,c.kg)(c.zv))},onError:e=>{g((0,c.kg)(c.Un,"There was an error: ".concat(e)))}}),y=setTimeout(P,o.sI),E&&E())},z=i()({"textfield-with-submit-container":!0,submittable:j});return(0,t.jsxs)("div",{className:z,children:[(0,t.jsx)("div",{className:"textfield-component",children:(0,t.jsx)(m.nv,{...f,onSubmit:null,onBlur:L,onChange:U})}),(0,t.jsxs)("div",{className:"formfield-container lower-container",children:[(0,t.jsx)("p",{className:"label-spacer"}),(0,t.jsxs)("div",{className:"lower-content",children:[(0,t.jsx)("div",{className:"field-tip",children:C}),(0,t.jsx)(u.E,{status:S||x}),(0,t.jsx)("div",{className:"update-button-container",children:(0,t.jsx)(n.Z,{type:"primary",size:"small",className:"submit-button",onClick:M,disabled:!j,children:"Update"})})]})]})]})};x.defaultProps={configPath:"",initialValue:""}},73706:function(e,a,s){s.d(a,{Z:function(){return d}});var t=s(85893),n=s(67294),l=s(94594),i=s(41983),r=s(39664),o=s(90745),c=s(99519);let d=e=>{let{apiPath:a,checked:s,reversed:d=!1,configPath:u="",disabled:m=!1,fieldName:h,label:p,tip:f,useSubmit:x,onChange:g}=e,[j,v]=(0,n.useState)(null),N=null,b=(0,n.useContext)(c.aC),{setFieldInConfigState:y}=b||{},k=()=>{v(null),clearTimeout(N),N=null},w=async e=>{if(x){v((0,i.kg)(i.Jk));let s=d?!e:e;await (0,o.Si)({apiPath:a,data:{value:s},onSuccess:()=>{y({fieldName:h,value:s,path:u}),v((0,i.kg)(i.zv))},onError:e=>{v((0,i.kg)(i.Un,"There was an error: ".concat(e)))}}),N=setTimeout(k,o.sI)}g&&g(e)},C=null!==j&&j.type===i.Jk;return(0,t.jsxs)("div",{className:"formfield-container toggleswitch-container",children:[p&&(0,t.jsx)("div",{className:"label-side",children:(0,t.jsx)("span",{className:"formfield-label",children:p})}),(0,t.jsxs)("div",{className:"input-side",children:[(0,t.jsxs)("div",{className:"input-group",children:[(0,t.jsx)(l.Z,{className:"switch field-".concat(h),loading:C,onChange:w,defaultChecked:s,checked:s,checkedChildren:"ON",unCheckedChildren:"OFF",disabled:m}),(0,t.jsx)(r.E,{status:j})]}),(0,t.jsx)("p",{className:"field-tip",children:f})]})]})};d.defaultProps={apiPath:"",checked:!1,reversed:!1,configPath:"",disabled:!1,label:"",tip:"",useSubmit:!1,onChange:null}},67650:function(e,a,s){s.r(a),s.d(a,{default:function(){return N}});var t=s(85893),n=s(67294),l=s(84485),i=s(10135),r=s(99519),o=s(90745),c=s(73706),d=s(77916),u=s(71577),m=s(50888),h=s(88484),p=s(39664),f=s(41983),x=s(64777),g=s(60956);let j=()=>{var e;let[a,s]=(0,n.useState)(null),[l,i]=(0,n.useState)(!1),[c,j]=(0,n.useState)(0),v=(0,n.useContext)(r.aC),{setFieldInConfigState:N,serverConfig:b}=v||{},y=null==b?void 0:null===(e=b.instanceDetails)||void 0===e?void 0:e.logo,[k,w]=(0,n.useState)(null),C=null,{apiPath:S,tip:Z}=o.ZQ,T=()=>{w(null),clearTimeout(C),C=null},E=e=>(i(!0),new Promise((a,t)=>{if(e.size>g.Z7){let n="File size is too big: ".concat((0,g.kR)(e.size));return w((0,f.kg)(f.Un,"There was an error: ".concat(n))),C=setTimeout(T,o.sI),i(!1),t()}if(!g.dr.includes(e.type)){let l="File type is not supported: ".concat(e.type);return w((0,f.kg)(f.Un,"There was an error: ".concat(l))),C=setTimeout(T,o.sI),i(!1),t()}(0,g.y3)(e,e=>{s(e),setTimeout(()=>a(),100)})})),P=async()=>{a!==y&&(w((0,f.kg)(f.Jk)),await (0,o.Si)({apiPath:S,data:{value:a},onSuccess:()=>{N({fieldName:"logo",value:a,path:""}),w((0,f.kg)(f.zv)),i(!1),j(Math.floor(100*Math.random()))},onError:e=>{w((0,f.kg)(f.Un,"There was an error: ".concat(e))),i(!1)}}),C=setTimeout(T,o.sI))},U="".concat(x.WB,"logo?random=").concat(c);return(0,t.jsxs)("div",{className:"formfield-container logo-upload-container",children:[(0,t.jsx)("div",{className:"label-side",children:(0,t.jsx)("span",{className:"formfield-label",children:"Logo"})}),(0,t.jsxs)("div",{className:"input-side",children:[(0,t.jsxs)("div",{className:"input-group",children:[(0,t.jsx)("img",{src:U,alt:"avatar",className:"logo-preview"}),(0,t.jsx)(d.Z,{name:"logo",listType:"picture",className:"avatar-uploader",showUploadList:!1,accept:g.dr.join(","),beforeUpload:E,customRequest:P,disabled:l,children:l?(0,t.jsx)(m.Z,{style:{color:"white"}}):(0,t.jsx)(u.Z,{icon:(0,t.jsx)(h.Z,{})})})]}),(0,t.jsx)(p.E,{status:k}),(0,t.jsx)("p",{className:"field-tip",children:Z})]})]})},{Title:v}=l.Z;function N(){let[e,a]=(0,n.useState)(null),s=(0,n.useContext)(r.aC),{serverConfig:l}=s||{},{instanceDetails:d,yp:u}=l,{instanceUrl:m}=u;if((0,n.useEffect)(()=>{a({...d,...u})},[d,u]),!e)return null;let h=()=>{""===e.instanceUrl&&!0===u.enabled&&(0,o.Si)({apiPath:o.AP,data:{value:!1}})},p=s=>{let{fieldName:t,value:n}=s;a({...e,[t]:n})},f=""!==m;return(0,t.jsxs)("div",{className:"edit-general-settings",children:[(0,t.jsx)(v,{level:3,className:"section-title",children:"Configure Instance Details"}),(0,t.jsx)("br",{}),(0,t.jsx)(i.$7,{fieldName:"name",...o.RE,value:e.name,initialValue:d.name,onChange:p}),(0,t.jsx)(i.$7,{fieldName:"instanceUrl",...o.cj,value:e.instanceUrl,initialValue:u.instanceUrl,type:i.xA,onChange:p,onSubmit:h}),(0,t.jsx)(i.$7,{fieldName:"summary",...o.rs,type:i.Sk,value:e.summary,initialValue:d.summary,onChange:p}),(0,t.jsx)(i.$7,{fieldName:"offlineMessage",...o.rd,type:i.Sk,value:e.offlineMessage,initialValue:d.offlineMessage,onChange:p}),(0,t.jsx)(j,{}),(0,t.jsx)(c.Z,{fieldName:"hideViewerCount",useSubmit:!0,...o._X,checked:e.hideViewerCount,onChange:function(e){p({fieldName:"hideViewerCount",value:e})}}),(0,t.jsx)("br",{}),(0,t.jsxs)("p",{className:"description",children:["Increase your audience by appearing in the"," ",(0,t.jsx)("a",{href:"https://directory.owncast.online",target:"_blank",rel:"noreferrer",children:(0,t.jsx)("strong",{children:"Owncast Directory"})}),". This is an external service run by the Owncast project."," ",(0,t.jsx)("a",{href:"https://owncast.online/docs/directory/?source=admin",target:"_blank",rel:"noopener noreferrer",children:"Learn more"}),"."]}),!u.instanceUrl&&(0,t.jsxs)("p",{className:"description",children:["You must set your ",(0,t.jsx)("strong",{children:"Server URL"})," above to enable the directory."]}),(0,t.jsxs)("div",{className:"config-yp-container",children:[(0,t.jsx)(c.Z,{fieldName:"enabled",useSubmit:!0,...o.P,checked:e.enabled,disabled:!f}),(0,t.jsx)(c.Z,{fieldName:"nsfw",useSubmit:!0,...o.EY,checked:e.nsfw,disabled:!f})]})]})}},99683:function(e,a,s){s.r(a),s.d(a,{default:function(){return h}});var t=s(85893),n=s(67294),l=s(84485),i=s(20550),r=s(99519),o=s(90745),c=s(52018),d=s(41983),u=s(80894);let{Title:m}=l.Z;function h(){let[e,a]=(0,n.useState)(""),[s,l]=(0,n.useState)(null),h=(0,n.useContext)(r.aC),{serverConfig:p,setFieldInConfigState:f}=h||{},{instanceDetails:x}=p,{tags:g=[]}=x,{apiPath:j,maxLength:v,placeholder:N,configPath:b}=o.y_,y=null;(0,n.useEffect)(()=>()=>{clearTimeout(y)},[]);let k=()=>{l(null),clearTimeout(y=null)},w=async e=>{l((0,d.kg)(d.Jk)),await (0,o.Si)({apiPath:j,data:{value:e},onSuccess:()=>{f({fieldName:"tags",value:e,path:b}),l((0,d.kg)(d.zv,"Tags updated.")),a(""),y=setTimeout(k,o.sI)},onError:e=>{l((0,d.kg)(d.Un,e)),y=setTimeout(k,o.sI)}})},C=e=>{let{value:t}=e;s||l(null),a(t)},S=()=>{k();let a=e.trim();if(""===a){l((0,d.kg)(d.dG,"Please enter a tag"));return}if(g.some(e=>e.toLowerCase()===a.toLowerCase())){l((0,d.kg)(d.dG,"This tag is already used!"));return}let s=[...g,a];w(s)},Z=e=>{k();let a=[...g];a.splice(e,1),w(a)};return(0,t.jsxs)("div",{className:"tag-editor-container",children:[(0,t.jsx)(m,{level:3,className:"section-title",children:"Add Tags"}),(0,t.jsx)("p",{className:"description",children:"This is a great way to categorize your Owncast server on the Directory!"}),(0,t.jsx)("div",{className:"edit-current-strings",children:g.map((e,a)=>{let s=()=>{Z(a)};return(0,t.jsx)(i.Z,{closable:!0,onClose:s,color:u.Q,children:e},"tag-".concat(e,"-").concat(a))})}),(0,t.jsx)("div",{className:"add-new-string-section",children:(0,t.jsx)(c.nv,{fieldName:"tag-input",value:e,className:"new-tag-input",onChange:C,onPressEnter:S,maxLength:v,placeholder:N,status:s})})]})}},42441:function(e,a,s){s.r(a),s.d(a,{default:function(){return x}});var t=s(85893),n=s(67294),l=s(84485),i=s(71577),r=s(87685),o=s(58909),c=s(48825),d=s(76538),u=s(99519),m=s(90745),h=s(41983),p=s(39664);let{Title:f}=l.Z;function x(){let[e,a]=(0,n.useState)(""),[s,l]=(0,n.useState)(null),[x,g]=(0,n.useState)(!1),j=(0,n.useContext)(u.aC),{serverConfig:v,setFieldInConfigState:N}=j||{},{instanceDetails:b}=v,{extraPageContent:y}=b,k=null,w=()=>{l(null),g(!1),clearTimeout(k),k=null};async function C(){l((0,h.kg)(h.Jk)),await (0,m.Si)({apiPath:m.AA,data:{value:e},onSuccess:a=>{N({fieldName:"extraPageContent",value:e,path:"instanceDetails"}),l((0,h.kg)(h.zv,a))},onError:e=>{l((0,h.kg)(h.Un,e))}}),k=setTimeout(w,m.sI)}return(0,n.useEffect)(()=>{a(y)},[b]),(0,t.jsxs)("div",{className:"edit-page-content",children:[(0,t.jsx)(f,{level:3,className:"section-title",children:"Custom Page Content"}),(0,t.jsxs)("p",{className:"description",children:["Edit the content of your page by using simple"," ",(0,t.jsx)("a",{href:"https://www.markdownguide.org/basic-syntax/",target:"_blank",rel:"noopener noreferrer",children:"Markdown syntax"}),"."]}),(0,t.jsx)(r.ZP,{value:e,placeholder:"Enter your custom page content here...",theme:o.F,onChange:function(e){a(e),e===y||x?e===y&&x&&g(!1):g(!0)},extensions:[(0,c.markdown)({base:c.markdownLanguage,codeLanguages:d.M})]}),(0,t.jsx)("br",{}),(0,t.jsxs)("div",{className:"page-content-actions",children:[x&&(0,t.jsx)(i.Z,{type:"primary",onClick:C,children:"Save"}),(0,t.jsx)(p.E,{status:s})]})]})}},51353:function(e,a,s){s.r(a),s.d(a,{default:function(){return k}});var t=s(85893),n=s(67294),l=s(84485),i=s(71577),r=s(69677),o=s(81025),c=s(30878),d=s(10010),u=s(39398),m=s(48689),h=s(38939),p=s(90745);let f=e=>{let{iconList:a,selectedOption:s,onSelected:n}=e,l=e=>{n&&n(e)},i=""===s?null:s;return(0,t.jsxs)("div",{className:"social-dropdown-container",children:[(0,t.jsx)("p",{className:"description",children:"If you are looking for a platform name not on this list, please select Other and type in your own name. A logo will not be provided."}),(0,t.jsxs)("div",{className:"formfield-container",children:[(0,t.jsx)("div",{className:"label-side",children:(0,t.jsx)("span",{className:"formfield-label",children:"Social Platform"})}),(0,t.jsx)("div",{className:"input-side",children:(0,t.jsxs)(h.Z,{style:{width:240},className:"social-dropdown",placeholder:"Social platform...",defaultValue:i,value:i,onSelect:l,children:[a.map(e=>{let{platform:a,icon:s,key:n}=e;return(0,t.jsxs)(h.Z.Option,{className:"social-option",value:n,children:[(0,t.jsx)("span",{className:"option-icon",children:(0,t.jsx)("img",{src:s,alt:"",className:"option-icon"})}),(0,t.jsx)("span",{className:"option-label",children:a})]},"platform-".concat(n))}),(0,t.jsx)(h.Z.Option,{className:"social-option",value:p.z_,children:"Other..."},"platform-".concat(p.z_))]})})]})]})};var x=s(64777),g=s(99519),j=s(37174),v=s(52018),N=s(41983),b=s(39664);let{Title:y}=l.Z;function k(){var e,a;let[s,l]=(0,n.useState)([]),[h,k]=(0,n.useState)([]),[w,C]=(0,n.useState)(!1),[S,Z]=(0,n.useState)(!1),[T,E]=(0,n.useState)(!1),[P,U]=(0,n.useState)(-1),[L,M]=(0,n.useState)(p.wC),[z,I]=(0,n.useState)(null),V=(0,n.useContext)(g.aC),{serverConfig:_,setFieldInConfigState:A}=V||{},{instanceDetails:O}=_,{socialHandles:B}=O,D=async()=>{try{let e=await (0,x.rQ)(x.$i,{auth:!1}),a=Object.keys(e).map(a=>({key:a,...e[a]}));l(a)}catch(s){console.log(s)}},R=e=>s.find(a=>a.key===e)||!1,F=""!==L.platform&&!s.find(e=>e.key===L.platform);(0,n.useEffect)(()=>{D()},[]),(0,n.useEffect)(()=>{O.socialHandles&&k(B)},[O]);let J=()=>{I(null),clearTimeout(null)},Q=()=>{C(!1),U(-1),Z(!1),E(!1),M({...p.wC})},H=()=>{Q()},K=(e,a)=>{M({...L,[e]:a})},$=e=>{e===p.z_?(Z(!0),K("platform","")):(Z(!1),K("platform",e))},Y=e=>{let{value:a}=e.target;K("platform",a)},G=e=>{let{value:a}=e;K("url",a)},q=async e=>{await (0,p.Si)({apiPath:p.c9,data:{value:e},onSuccess:()=>{A({fieldName:"socialHandles",value:e,path:"instanceDetails"}),E(!1),H(),I((0,N.kg)(N.zv)),setTimeout(J,p.sI)},onError:e=>{I((0,N.kg)(N.Un,"There was an error: ".concat(e))),E(!1),setTimeout(J,p.sI)}})},X=()=>{E(!0);let e=h.length?[...h]:[];-1===P?e.push(L):e.splice(P,1,L),q(e)},W=e=>{let a=[...h];a.splice(e,1),q(a)},ee=e=>{if(e<=0||e>=h.length)return;let a=[...h],s=a[e-1];a[e-1]=a[e],a[e]=s,q(a)},ea=e=>{if(e<0||e>=h.length-1)return;let a=[...h],s=a[e+1];a[e+1]=a[e],a[e]=s,q(a)},es={disabled:(e=L.url,"xmpp"===(a=L.platform)?!(0,j.Kf)(e,"xmpp"):"matrix"===a?!(0,j.bu)(e):!(0,j.jv)(e))},et=(0,t.jsxs)("div",{className:"other-field-container formfield-container",children:[(0,t.jsx)("div",{className:"label-side"}),(0,t.jsx)("div",{className:"input-side",children:(0,t.jsx)(r.Z,{placeholder:"Other platform name",defaultValue:L.platform,onChange:Y})})]});return(0,t.jsxs)("div",{className:"social-links-edit-container",children:[(0,t.jsx)(y,{level:3,className:"section-title",children:"Your Social Handles"}),(0,t.jsx)("p",{className:"description",children:"Add all your social media handles and links to your other profiles here."}),(0,t.jsx)(b.E,{status:z}),(0,t.jsx)(o.Z,{className:"social-handles-table",pagination:!1,size:"small",rowKey:e=>"".concat(e.platform,"-").concat(e.url),columns:[{title:"Social Link",dataIndex:"",key:"combo",render:(e,a)=>{let{platform:s,url:n}=a,l=R(s);if(!l)return(0,t.jsx)("div",{className:"social-handle-cell",children:(0,t.jsxs)("p",{className:"option-label",children:[(0,t.jsx)("strong",{children:s}),(0,t.jsx)("span",{className:"handle-url",title:n,children:n})]})});let{icon:i,platform:r}=l;return(0,t.jsxs)("div",{className:"social-handle-cell",children:[(0,t.jsx)("span",{className:"option-icon",children:(0,t.jsx)("img",{src:i,alt:"",className:"option-icon"})}),(0,t.jsxs)("p",{className:"option-label",children:[(0,t.jsx)("strong",{children:r}),(0,t.jsx)("span",{className:"handle-url",title:n,children:n})]})]})}},{title:"",dataIndex:"",key:"edit",render:(e,a,s)=>(0,t.jsxs)("div",{className:"actions",children:[(0,t.jsx)(i.Z,{size:"small",onClick:()=>{let e=h[s];U(s),M({...e}),C(!0),R(e.platform)||Z(!0)},children:"Edit"}),(0,t.jsx)(i.Z,{icon:(0,t.jsx)(d.Z,{}),size:"small",hidden:0===s,onClick:()=>ee(s)}),(0,t.jsx)(i.Z,{icon:(0,t.jsx)(u.Z,{}),size:"small",hidden:s===h.length-1,onClick:()=>ea(s)}),(0,t.jsx)(i.Z,{className:"delete-button",icon:(0,t.jsx)(m.Z,{}),size:"small",onClick:()=>W(s)})]})}],dataSource:h}),(0,t.jsx)(c.Z,{title:"Edit Social Handle",open:w,onOk:X,onCancel:H,confirmLoading:T,okButtonProps:es,children:(0,t.jsxs)("div",{className:"social-handle-modal-content",children:[(0,t.jsx)(f,{iconList:s,selectedOption:F?p.z_:L.platform,onSelected:$}),S&&et,(0,t.jsx)("br",{}),(0,t.jsx)(v.nv,{fieldName:"social-url",label:"URL",placeholder:{mastodon:"https://mastodon.social/@username",twitter:"https://twitter.com/username"}[L.platform]||"Url to page",value:L.url,onChange:G,useTrim:!0,type:"url",pattern:j.ax}),(0,t.jsx)(b.E,{status:z})]})}),(0,t.jsx)("br",{}),(0,t.jsx)(i.Z,{type:"primary",onClick:()=>{Q(),C(!0)},children:"Add a new social link"})]})}},98645:function(e,a,s){s.r(a),s.d(a,{default:function(){return o}});var t=s(85893);s(67294);var n=s(67650),l=s(99683),i=s(51353),r=s(42441);function o(){return(0,t.jsxs)("div",{className:"config-public-details-page",children:[(0,t.jsxs)("p",{className:"description",children:["The following are displayed on your site to describe your stream and its content."," ",(0,t.jsx)("a",{href:"https://owncast.online/docs/website/?source=admin",target:"_blank",rel:"noopener noreferrer",children:"Learn more."})]}),(0,t.jsxs)("div",{className:"top-container",children:[(0,t.jsx)("div",{className:"form-module instance-details-container",children:(0,t.jsx)(n.default,{})}),(0,t.jsxs)("div",{className:"form-module social-items-container ",children:[(0,t.jsx)("div",{className:"form-module tags-module",children:(0,t.jsx)(l.default,{})}),(0,t.jsx)("div",{className:"form-module social-handles-container",children:(0,t.jsx)(i.default,{})})]})]}),(0,t.jsx)("div",{className:"form-module page-content-module",children:(0,t.jsx)(r.default,{})})]})}},60956:function(e,a,s){s.d(a,{Z7:function(){return t},dr:function(){return n},kR:function(){return i},y3:function(){return l}});let t=2097152,n=["image/png","image/jpeg","image/gif"];function l(e,a){let s=new FileReader;s.addEventListener("load",()=>a(s.result)),s.readAsDataURL(e)}function i(e){let a=Math.floor(Math.log(e)/Math.log(1024)),s=1*Number((e/Math.pow(1024,a)).toFixed(2));return"".concat(s," ").concat(["B","KB","MB","GB","TB","PB","EB","ZB","YB"][a])}},41983:function(e,a,s){s.d(a,{Jk:function(){return d},Un:function(){return o},dG:function(){return m},kg:function(){return p},zv:function(){return u}});var t=s(85893),n=s(89739),l=s(21640),i=s(50888),r=s(28058);let o="error",c="invalid",d="proessing",u="success",m="warning",h={[u]:{type:u,icon:(0,t.jsx)(n.Z,{style:{color:"green"}}),message:"Success!"},[o]:{type:o,icon:(0,t.jsx)(l.Z,{style:{color:"red"}}),message:"An error occurred."},[c]:{type:c,icon:(0,t.jsx)(l.Z,{style:{color:"red"}}),message:"An error occurred."},[d]:{type:d,icon:(0,t.jsx)(i.Z,{}),message:""},[m]:{type:m,icon:(0,t.jsx)(r.Z,{style:{color:"#fc0"}}),message:""}};function p(e,a){return e&&h[e]?a?{type:e,icon:h[e].icon,message:a}:h[e]:null}},99519:function(e,a,s){s.d(a,{aC:function(){return u}});var t=s(85893),n=s(67294),l=s(45697),i=s.n(l),r=s(64777),o=s(90745);let c={streamKeys:[],adminPassword:"",instanceDetails:{customStyles:"",extraPageContent:"",logo:"",name:"",nsfw:!1,socialHandles:[],streamTitle:"",summary:"",tags:[],title:"",welcomeMessage:"",offlineMessage:"",appearanceVariables:{}},ffmpegPath:"",rtmpServerPort:"",webServerPort:"",socketHostOverride:null,s3:{accessKey:"",acl:"",bucket:"",enabled:!1,endpoint:"",region:"",secret:"",servingEndpoint:"",forcePathStyle:!1},yp:{enabled:!1,instanceUrl:""},videoSettings:{latencyLevel:4,cpuUsageLevel:3,videoQualityVariants:[o.gX]},federation:{enabled:!1,isPrivate:!1,username:"",goLiveMessage:"",showEngagement:!0,blockedDomains:[]},notifications:{browser:{enabled:!1,goLiveMessage:""},discord:{enabled:!1,webhook:"",goLiveMessage:""},twitter:{enabled:!1,goLiveMessage:"",apiKey:"",apiSecret:"",accessToken:"",accessTokenSecret:"",bearerToken:""}},externalActions:[],supportedCodecs:[],videoCodec:"",forbiddenUsernames:[],suggestedUsernames:[],chatDisabled:!1,chatJoinMessagesEnabled:!0,chatEstablishedUserMode:!1,hideViewerCount:!1},d={broadcastActive:!1,broadcaster:null,currentBroadcast:null,online:!1,viewerCount:0,sessionMaxViewerCount:0,sessionPeakViewerCount:0,overallPeakViewerCount:0,versionNumber:"0.0.0",streamTitle:"",chatDisabled:!1,health:{healthy:!0,healthPercentage:100,message:"",representation:0}},u=n.createContext({...d,serverConfig:c,setFieldInConfigState:e=>null}),m=e=>{let{children:a}=e,[s,l]=(0,n.useState)(d),[i,o]=(0,n.useState)(c),m=async()=>{try{let e=await (0,r.rQ)(r.Q_);l({...e})}catch(a){}},h=async()=>{try{let e=await (0,r.rQ)(r.bl);o(e)}catch(a){}},p=e=>{let{fieldName:a,value:s,path:t}=e,n=t?{...i,[t]:{...i[t],[a]:s}}:{...i,[a]:s};o(n)};(0,n.useEffect)(()=>{let e=null;return m(),e=setInterval(m,r.NE),h(),()=>{clearInterval(e)}},[]);let f={...s,serverConfig:i,setFieldInConfigState:p};return(0,t.jsx)(u.Provider,{value:f,children:a})};m.propTypes={children:i().element.isRequired},a.ZP=m}}]);
//# sourceMappingURL=8645-c37f30a6f611f9e7.js.map