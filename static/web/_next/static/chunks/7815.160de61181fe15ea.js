(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7815],{81643:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=function(e){return e?"function"==typeof e?e():e:null}},55241:function(e,t,n){"use strict";var o=n(87462),r=n(67294),l=n(53124),i=n(94199),a=n(81643),c=n(33603),u=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)0>t.indexOf(o[r])&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n},s=function(e){var t=e.title,n=e.content,o=e.prefixCls;return t||n?r.createElement(r.Fragment,null,t&&r.createElement("div",{className:"".concat(o,"-title")},(0,a.Z)(t)),r.createElement("div",{className:"".concat(o,"-inner-content")},(0,a.Z)(n))):null},p=r.forwardRef(function(e,t){var n=e.prefixCls,a=e.title,p=e.content,f=e._overlay,d=e.placement,m=e.trigger,y=e.mouseEnterDelay,v=e.mouseLeaveDelay,b=e.overlayStyle,g=u(e,["prefixCls","title","content","_overlay","placement","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle"]),x=r.useContext(l.E_).getPrefixCls,_=x("popover",n),C=x();return r.createElement(i.Z,(0,o.Z)({placement:void 0===d?"top":d,trigger:void 0===m?"hover":m,mouseEnterDelay:void 0===y?.1:y,mouseLeaveDelay:void 0===v?.1:v,overlayStyle:void 0===b?{}:b},g,{prefixCls:_,ref:t,overlay:f||r.createElement(s,{prefixCls:_,title:a,content:p}),transitionName:(0,c.mL)(C,"zoom-big",g.transitionName)}))});t.Z=p},17815:function(e,t,n){"use strict";n.r(t),n.d(t,{NotifyReminderPopup:function(){return u}});var o=n(85893),r=n(55241),l=n(97937),i=n(67294),a=n(93162),c=n.n(a);let u=e=>{let{children:t,open:n,notificationClicked:a,notificationClosed:u}=e,[s,p]=(0,i.useState)(n),[f,d]=(0,i.useState)(!1);(0,i.useEffect)(()=>{p(n)},[n]),(0,i.useEffect)(()=>{d(!0)},[]);let m=(0,o.jsx)("div",{className:c().title,children:"Stay updated!"}),y=e=>{e.stopPropagation(),a()},v=e=>{e.stopPropagation(),p(!1),u()},b=(0,o.jsxs)("div",{onClick:y,onKeyDown:y,role:"menuitem",tabIndex:0,children:[(0,o.jsx)("button",{type:"button",className:c().closebutton,onClick:v,children:(0,o.jsx)(l.Z,{})}),(0,o.jsxs)("div",{className:c().contentbutton,children:["Click and never miss",(0,o.jsx)("br",{}),"future streams!"]})]});return f&&(0,o.jsx)(r.Z,{placement:"topRight",defaultOpen:s,open:s,destroyTooltipOnHide:!0,title:m,content:b,overlayInnerStyle:{borderRadius:"5px",cursor:"pointer",paddingTop:"10px",paddingRight:"10px",fontSize:"14px"},color:c().popupBackgroundColor,getPopupContainer:e=>e,children:t})}},93162:function(e){e.exports={popupBackgroundColor:"var(--theme-color-components-primary-button-background)",contentbutton:"NotifyReminderPopup_contentbutton__a_tsp",closebutton:"NotifyReminderPopup_closebutton__GVcP3",title:"NotifyReminderPopup_title__Dm9Iy"}}}]);
//# sourceMappingURL=7815.160de61181fe15ea.js.map