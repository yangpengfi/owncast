(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1487],{24308:function(e,t,n){"use strict";n.d(t,{c4:function(){return i}});var r=n(4942),o=n(87462),i=["xxl","xl","lg","md","sm","xs"],a={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},c=new Map,l=-1,s={},u={matchHandlers:{},dispatch:function(e){return s=e,c.forEach((function(e){return e(s)})),c.size>=1},subscribe:function(e){return c.size||this.register(),l+=1,c.set(l,e),e(s),l},unsubscribe:function(e){c.delete(e),c.size||this.unregister()},unregister:function(){var e=this;Object.keys(a).forEach((function(t){var n=a[t],r=e.matchHandlers[n];null===r||void 0===r||r.mql.removeListener(null===r||void 0===r?void 0:r.listener)})),c.clear()},register:function(){var e=this;Object.keys(a).forEach((function(t){var n=a[t],i=function(n){var i=n.matches;e.dispatch((0,o.Z)((0,o.Z)({},s),(0,r.Z)({},t,i)))},c=window.matchMedia(n);c.addListener(i),e.matchHandlers[n]={mql:c,listener:i},i(c)}))}};t.ZP=u},27561:function(e,t,n){var r=n(67990),o=/^\s+/;e.exports=function(e){return e?e.slice(0,r(e)+1).replace(o,""):e}},67990:function(e){var t=/\s/;e.exports=function(e){for(var n=e.length;n--&&t.test(e.charAt(n)););return n}},33448:function(e,t,n){var r=n(44239),o=n(37005);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==r(e)}},14841:function(e,t,n){var r=n(27561),o=n(13218),i=n(33448),a=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,l=/^0o[0-7]+$/i,s=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(i(e))return NaN;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=r(e);var n=c.test(e);return n||l.test(e)?s(e.slice(2),n?2:8):a.test(e)?NaN:+e}},99096:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/hardware-info",function(){return n(81114)}])},51222:function(e,t,n){"use strict";n.d(t,{k:function(){return u}});var r=n(85893),o=n(29217),i=n(92616),a=n.n(i),c=n(58091),l=n(60727);function s(e){var t={};return e.forEach((function(e){var n=new Date(e.time),r=(0,c.Z)(n,"H:mma");t[r]=e.value})),t}a().use(o.Z);var u=function(e){var t=e.data,n=e.title,o=e.color,i=e.unit,a=e.dataCollections,c=e.yFlipped,u=e.yLogarithmic,f=[];t&&t.length>0&&f.push({name:n,color:o,data:s(t)}),a.forEach((function(e){f.push({name:e.name,data:s(e.data),color:e.color,dataset:e.options})}));var d={scales:{y:{reverse:!1,type:"linear"},x:{type:"time"}}};return d.scales.y.reverse=c,d.scales.y.type=u?"logarithmic":"linear",(0,r.jsx)("div",{className:"line-chart-container",children:(0,r.jsx)(l.wW,{xtitle:"Time",ytitle:n,suffix:i,legend:"bottom",color:o,data:f,download:n,library:d})})};u.defaultProps={dataCollections:[],data:[],title:"",yFlipped:!1,yLogarithmic:!1}},97206:function(e,t,n){"use strict";n.d(t,{m:function(){return p}});var r=n(26042),o=n(85893),i=n(84485),a=n(97910),c=n(74763),l=n(59652),s=i.Z.Text,u={title:"",value:0,prefix:null,suffix:null,color:"",progress:!1,centered:!1,formatter:null},f=function(e){var t=e.prefix,n=e.value,r=e.suffix,i=e.title;return(0,o.jsxs)("div",{children:[t,(0,o.jsx)("div",{children:(0,o.jsx)(s,{type:"secondary",children:i})}),(0,o.jsx)("div",{children:(0,o.jsxs)(s,{type:"secondary",children:[n,r||"%"]})})]})},d=function(e){var t=e.title,n=e.value,r=e.prefix,i=e.suffix,c=e.color,l=n>90?"red":c,s=(0,o.jsx)(f,{prefix:r,value:n,suffix:i,title:t});return(0,o.jsx)(a.Z,{type:"dashboard",percent:n,width:120,strokeColor:{"0%":c,"90%":l},format:function(){return s}})};d.defaultProps=u;var v=function(e){var t=e.title,n=e.value,r=e.prefix,i=e.formatter;return(0,o.jsx)(c.Z,{title:t,value:n,prefix:r,formatter:i})};v.defaultProps=u;var p=function(e){var t=e.progress,n=e.centered,i=t?d:v,a=n?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return(0,o.jsx)(l.Z,{type:"inner",children:(0,o.jsx)("div",{style:a,children:(0,o.jsx)(i,(0,r.Z)({},e))})})};p.defaultProps=u},81114:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return N}});var r=n(47568),o=n(26042),i=n(69396),a=n(70655),c=n(85893),l=n(1413),s=n(67294),u={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M956.9 845.1L896.4 632V168c0-17.7-14.3-32-32-32h-704c-17.7 0-32 14.3-32 32v464L67.9 845.1C60.4 866 75.8 888 98 888h828.8c22.2 0 37.6-22 30.1-42.9zM200.4 208h624v395h-624V208zm228.3 608l8.1-37h150.3l8.1 37H428.7zm224 0l-19.1-86.7c-.8-3.7-4.1-6.3-7.8-6.3H398.2c-3.8 0-7 2.6-7.8 6.3L371.3 816H151l42.3-149h638.2l42.3 149H652.7z"}}]},name:"laptop",theme:"outlined"},f=n(42135),d=function(e,t){return s.createElement(f.Z,(0,l.Z)((0,l.Z)({},e),{},{ref:t,icon:u}))};d.displayName="LaptopOutlined";var v=s.forwardRef(d),p={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M632 888H392c-4.4 0-8 3.6-8 8v32c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32v-32c0-4.4-3.6-8-8-8zM512 64c-181.1 0-328 146.9-328 328 0 121.4 66 227.4 164 284.1V792c0 17.7 14.3 32 32 32h264c17.7 0 32-14.3 32-32V676.1c98-56.7 164-162.7 164-284.1 0-181.1-146.9-328-328-328zm127.9 549.8L604 634.6V752H420V634.6l-35.9-20.8C305.4 568.3 256 484.5 256 392c0-141.4 114.6-256 256-256s256 114.6 256 256c0 92.5-49.4 176.3-128.1 221.8z"}}]},name:"bulb",theme:"outlined"},m=function(e,t){return s.createElement(f.Z,(0,l.Z)((0,l.Z)({},e),{},{ref:t,icon:p}))};m.displayName="BulbOutlined";var h=s.forwardRef(m),g={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M893.3 293.3L730.7 130.7c-7.5-7.5-16.7-13-26.7-16V112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2zM384 184h256v104H384V184zm456 656H184V184h136v136c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V205.8l136 136V840zM512 442c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144-64.5-144-144-144zm0 224c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z"}}]},name:"save",theme:"outlined"},x=function(e,t){return s.createElement(f.Z,(0,l.Z)((0,l.Z)({},e),{},{ref:t,icon:g}))};x.displayName="SaveOutlined";var y=s.forwardRef(x),w=n(84485),b=n(25968),Z=n(6226),j=n(58827),C=n(51222),E=n(97206);function N(){var e,t,n,l=(0,s.useState)({cpu:[],memory:[],disk:[],message:""}),u=l[0],f=l[1],d=function(){var e=(0,r.Z)((function(){var e,t;return(0,a.__generator)(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,(0,j.rQ)(j.nx)];case 1:return e=n.sent(),f((0,o.Z)({},e)),[3,3];case 2:return t=n.sent(),f((0,i.Z)((0,o.Z)({},u),{message:t.message})),[3,3];case 3:return[2]}}))}));return function(){return e.apply(this,arguments)}}();if((0,s.useEffect)((function(){var e;return d(),e=setInterval(d,j.NE),function(){clearInterval(e)}}),[]),!u.cpu)return null;var p=null===(e=u.cpu[u.cpu.length-1])||void 0===e?void 0:e.value,m=null===(t=u.memory[u.memory.length-1])||void 0===t?void 0:t.value,g=null===(n=u.disk[u.disk.length-1])||void 0===n?void 0:n.value,x=[{name:"CPU",color:"#B63FFF",data:u.cpu},{name:"Memory",color:"#2087E2",data:u.memory},{name:"Disk",color:"#FF7700",data:u.disk}];return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(w.Z.Title,{children:"Hardware Info"}),(0,c.jsx)("br",{}),(0,c.jsxs)("div",{children:[(0,c.jsxs)(b.Z,{gutter:[16,16],justify:"space-around",children:[(0,c.jsx)(Z.Z,{children:(0,c.jsx)(E.m,{title:x[0].name,value:"".concat(Math.round(p)||0),prefix:(0,c.jsx)(v,{style:{color:x[0].color}}),color:x[0].color,progress:!0,centered:!0})}),(0,c.jsx)(Z.Z,{children:(0,c.jsx)(E.m,{title:x[1].name,value:"".concat(Math.round(m)||0),prefix:(0,c.jsx)(h,{style:{color:x[1].color}}),color:x[1].color,progress:!0,centered:!0})}),(0,c.jsx)(Z.Z,{children:(0,c.jsx)(E.m,{title:x[2].name,value:"".concat(Math.round(g)||0),prefix:(0,c.jsx)(y,{style:{color:x[2].color}}),color:x[2].color,progress:!0,centered:!0})})]}),(0,c.jsx)(C.k,{title:"% used",dataCollections:x,color:"#FF7700",unit:"%"})]})]})}},60057:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r=n(4942),o=n(1413),i=n(97685),a=n(91),c=n(67294),l=n(51169),s=n(94184),u=n.n(s),f={adjustX:1,adjustY:1},d=[0,0],v={topLeft:{points:["bl","tl"],overflow:f,offset:[0,-4],targetOffset:d},topCenter:{points:["bc","tc"],overflow:f,offset:[0,-4],targetOffset:d},topRight:{points:["br","tr"],overflow:f,offset:[0,-4],targetOffset:d},bottomLeft:{points:["tl","bl"],overflow:f,offset:[0,4],targetOffset:d},bottomCenter:{points:["tc","bc"],overflow:f,offset:[0,4],targetOffset:d},bottomRight:{points:["tr","br"],overflow:f,offset:[0,4],targetOffset:d}},p=n(15105),m=n(75164),h=n(88603),g=p.Z.ESC,x=p.Z.TAB;var y=["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger","autoFocus"];function w(e,t){var n=e.arrow,s=void 0!==n&&n,f=e.prefixCls,d=void 0===f?"rc-dropdown":f,p=e.transitionName,w=e.animation,b=e.align,Z=e.placement,j=void 0===Z?"bottomLeft":Z,C=e.placements,E=void 0===C?v:C,N=e.getPopupContainer,k=e.showAction,V=e.hideAction,O=e.overlayClassName,M=e.overlayStyle,P=e.visible,z=e.trigger,F=void 0===z?["hover"]:z,H=e.autoFocus,L=(0,a.Z)(e,y),_=c.useState(),R=(0,i.Z)(_,2),T=R[0],A=R[1],S="visible"in e?P:T,B=c.useRef(null);c.useImperativeHandle(t,(function(){return B.current})),function(e){var t=e.visible,n=e.setTriggerVisible,r=e.triggerRef,o=e.onVisibleChange,i=e.autoFocus,a=c.useRef(!1),l=function(){var e,i,a,c;t&&r.current&&(null===(e=r.current)||void 0===e||null===(i=e.triggerRef)||void 0===i||null===(a=i.current)||void 0===a||null===(c=a.focus)||void 0===c||c.call(a),n(!1),"function"===typeof o&&o(!1))},s=function(){var e,t,n,o,i=(0,h.tS)(null===(e=r.current)||void 0===e||null===(t=e.popupRef)||void 0===t||null===(n=t.current)||void 0===n||null===(o=n.getElement)||void 0===o?void 0:o.call(n))[0];return!!(null===i||void 0===i?void 0:i.focus)&&(i.focus(),a.current=!0,!0)},u=function(e){switch(e.keyCode){case g:l();break;case x:var t=!1;a.current||(t=s()),t?e.preventDefault():l()}};c.useEffect((function(){return t?(window.addEventListener("keydown",u),i&&(0,m.Z)(s,3),function(){window.removeEventListener("keydown",u),a.current=!1}):function(){a.current=!1}}),[t])}({visible:S,setTriggerVisible:A,triggerRef:B,onVisibleChange:e.onVisibleChange,autoFocus:H});var I=function(){var t=function(){var t=e.overlay;return"function"===typeof t?t():t}();return c.createElement(c.Fragment,null,s&&c.createElement("div",{className:"".concat(d,"-arrow")}),t)},W=V;return W||-1===F.indexOf("contextMenu")||(W=["click"]),c.createElement(l.Z,(0,o.Z)((0,o.Z)({builtinPlacements:E},L),{},{prefixCls:d,ref:B,popupClassName:u()(O,(0,r.Z)({},"".concat(d,"-show-arrow"),s)),popupStyle:M,action:F,showAction:k,hideAction:W||[],popupPlacement:j,popupAlign:b,popupTransitionName:p,popupAnimation:w,popupVisible:S,stretch:function(){var t=e.minOverlayWidthMatchTrigger,n=e.alignPoint;return"minOverlayWidthMatchTrigger"in e?t:!n}()?"minWidth":"",popup:"function"===typeof e.overlay?I:I(),onPopupVisibleChange:function(t){var n=e.onVisibleChange;A(t),"function"===typeof n&&n(t)},onPopupClick:function(t){var n=e.onOverlayClick;A(!1),n&&n(t)},getPopupContainer:N}),function(){var t=e.children,n=t.props?t.props:{},r=u()(n.className,function(){var t=e.openClassName;return void 0!==t?t:"".concat(d,"-open")}());return S&&t?c.cloneElement(t,{className:r}):t}())}var b=c.forwardRef(w)}},function(e){e.O(0,[2757,8091,2944,5315,4763,2139,7910,9774,2888,179],(function(){return t=99096,e(e.s=t);var t}));var t=e.O();_N_E=t}]);