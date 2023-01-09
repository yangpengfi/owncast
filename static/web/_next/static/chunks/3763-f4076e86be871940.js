"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3763],{43763:function(e,t,n){n.r(t),n.d(t,{Popup:function(){return f},default:function(){return d}});var o=n(87462),i=n(71002),r=n(1413),u=n(45987),a=n(67294),s=n(53749),l=n(43159),c=n(94184),p=n.n(c);function f(e){var t=e.showArrow,n=e.arrowContent,o=e.children,i=e.prefixCls,r=e.id,u=e.overlayInnerStyle,s=e.className,l=e.style;return a.createElement("div",{className:p()("".concat(i,"-content"),s),style:l},!1!==t&&a.createElement("div",{className:"".concat(i,"-arrow"),key:"arrow"},n),a.createElement("div",{className:"".concat(i,"-inner"),id:r,role:"tooltip",style:u},"function"==typeof o?o():o))}var d=(0,a.forwardRef)(function(e,t){var n=e.overlayClassName,c=e.trigger,p=e.mouseEnterDelay,d=e.mouseLeaveDelay,h=e.overlayStyle,m=e.prefixCls,v=void 0===m?"rc-tooltip":m,g=e.children,y=e.onVisibleChange,w=e.afterVisibleChange,b=e.transitionName,C=e.animation,Z=e.motion,T=e.placement,M=e.align,x=e.destroyTooltipOnHide,P=void 0!==x&&x,O=e.defaultVisible,E=e.getTooltipContainer,k=e.overlayInnerStyle,D=e.arrowContent,S=e.overlay,N=e.id,H=e.showArrow,R=(0,u.Z)(e,["overlayClassName","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle","prefixCls","children","onVisibleChange","afterVisibleChange","transitionName","animation","motion","placement","align","destroyTooltipOnHide","defaultVisible","getTooltipContainer","overlayInnerStyle","arrowContent","overlay","id","showArrow"]),V=(0,a.useRef)(null);(0,a.useImperativeHandle)(t,function(){return V.current});var A=(0,r.Z)({},R);"visible"in e&&(A.popupVisible=e.visible);var L=!1,W=!1;if("boolean"==typeof P)L=P;else if(P&&"object"===(0,i.Z)(P)){var j=P.keepParent;L=!0===j,W=!1===j}return a.createElement(s.Z,(0,o.Z)({popupClassName:n,prefixCls:v,popup:function(){return a.createElement(f,{showArrow:H,arrowContent:D,key:"content",prefixCls:v,id:N,overlayInnerStyle:k},S)},action:void 0===c?["hover"]:c,builtinPlacements:l.C,popupPlacement:void 0===T?"right":T,ref:V,popupAlign:void 0===M?{}:M,getPopupContainer:E,onPopupVisibleChange:y,afterPopupVisibleChange:w,popupTransitionName:b,popupAnimation:C,popupMotion:Z,defaultPopupVisible:O,destroyPopupOnHide:L,autoDestroy:W,mouseLeaveDelay:void 0===d?.1:d,popupStyle:h,mouseEnterDelay:void 0===p?0:p},A),g)})},43159:function(e,t,n){n.d(t,{C:function(){return r}});var o={adjustX:1,adjustY:1},i=[0,0],r={left:{points:["cr","cl"],overflow:o,offset:[-4,0],targetOffset:i},right:{points:["cl","cr"],overflow:o,offset:[4,0],targetOffset:i},top:{points:["bc","tc"],overflow:o,offset:[0,-4],targetOffset:i},bottom:{points:["tc","bc"],overflow:o,offset:[0,4],targetOffset:i},topLeft:{points:["bl","tl"],overflow:o,offset:[0,-4],targetOffset:i},leftTop:{points:["tr","tl"],overflow:o,offset:[-4,0],targetOffset:i},topRight:{points:["br","tr"],overflow:o,offset:[0,-4],targetOffset:i},rightTop:{points:["tl","tr"],overflow:o,offset:[4,0],targetOffset:i},bottomRight:{points:["tr","br"],overflow:o,offset:[0,4],targetOffset:i},rightBottom:{points:["bl","br"],overflow:o,offset:[4,0],targetOffset:i},bottomLeft:{points:["tl","bl"],overflow:o,offset:[0,4],targetOffset:i},leftBottom:{points:["br","bl"],overflow:o,offset:[-4,0],targetOffset:i}}},53749:function(e,t,n){n.d(t,{Z:function(){return eJ}});var o,i,r,u=n(1413),a=n(87462),s=n(15671),l=n(43144),c=n(97326),p=n(60136),f=n(33643),d=n(4942),h=n(67294),m=n(73935),v=n(75164),g=n(94999),y=n(34203),w=n(42550),b=n(64019),C=n(98924),Z=(0,h.forwardRef)(function(e,t){var n=e.didUpdate,o=e.getContainer,i=e.children,r=(0,h.useRef)(),u=(0,h.useRef)();(0,h.useImperativeHandle)(t,function(){return{}});var a=(0,h.useRef)(!1);return!a.current&&(0,C.Z)()&&(u.current=o(),r.current=u.current.parentNode,a.current=!0),(0,h.useEffect)(function(){null==n||n(e)}),(0,h.useEffect)(function(){return null===u.current.parentNode&&null!==r.current&&r.current.appendChild(u.current),function(){var e,t;null===(e=u.current)||void 0===e||null===(t=e.parentNode)||void 0===t||t.removeChild(u.current)}},[]),u.current?m.createPortal(i,u.current):null}),T=n(94184),M=n.n(T),x=n(97685),P=n(45987),O=n(31131),E=n(62874);function k(e){var t=e.prefixCls,n=e.motion,o=e.animation,i=e.transitionName;return n||(o?{motionName:"".concat(t,"-").concat(o)}:i?{motionName:i}:null)}function D(e){var t=e.prefixCls,n=e.visible,o=e.zIndex,i=e.mask,r=e.maskMotion,s=e.maskAnimation,l=e.maskTransitionName;if(!i)return null;var c={};return(r||l||s)&&(c=(0,u.Z)({motionAppear:!0},k({motion:r,prefixCls:t,transitionName:l,animation:s}))),h.createElement(E.Z,(0,a.Z)({},c,{visible:n,removeOnLeave:!0}),function(e){var n=e.className;return h.createElement("div",{style:{zIndex:o},className:M()("".concat(t,"-mask"),n)})})}var S=n(71002);function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach(function(t){var o,i;o=e,i=n[t],t in o?Object.defineProperty(o,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):o[t]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function R(e){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var V={Webkit:"-webkit-",Moz:"-moz-",ms:"-ms-",O:"-o-"};function A(){if(void 0!==i)return i;i="";var e=document.createElement("p").style;for(var t in V)t+"Transform" in e&&(i=t);return i}function L(){return A()?"".concat(A(),"TransitionProperty"):"transitionProperty"}function W(){return A()?"".concat(A(),"Transform"):"transform"}function j(e,t){var n=L();n&&(e.style[n]=t,"transitionProperty"!==n&&(e.style.transitionProperty=t))}function B(e,t){var n=W();n&&(e.style[n]=t,"transform"!==n&&(e.style.transform=t))}var F=/matrix\((.*)\)/,I=/matrix3d\((.*)\)/,Y=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;function X(e){var t=e.style.display;e.style.display="none",e.offsetHeight,e.style.display=t}function z(e,t,n){var o=n;if("object"===R(t)){for(var i in t)t.hasOwnProperty(i)&&z(e,i,t[i]);return}if(void 0!==o){"number"==typeof o&&(o="".concat(o,"px")),e.style[t]=o;return}return r(e,t)}function U(e,t){var n=e["page".concat(t?"Y":"X","Offset")],o="scroll".concat(t?"Top":"Left");if("number"!=typeof n){var i=e.document;"number"!=typeof(n=i.documentElement[o])&&(n=i.body[o])}return n}function _(e){var t,n,o,i,r,u,a=(r=(i=e.ownerDocument).body,u=i&&i.documentElement,n=Math.floor((t=e.getBoundingClientRect()).left),o=Math.floor(t.top),{left:n-=u.clientLeft||r.clientLeft||0,top:o-=u.clientTop||r.clientTop||0}),s=e.ownerDocument,l=s.defaultView||s.parentWindow;return a.left+=U(l),a.top+=U(l,!0),a}function $(e){return null!=e&&e==e.window}function G(e){return $(e)?e.document:9===e.nodeType?e:e.ownerDocument}var Q=RegExp("^(".concat(Y,")(?!px)[a-z%]+$"),"i"),q=/^(top|right|bottom|left)$/,J="currentStyle",K="runtimeStyle",ee="left";function et(e,t){return"left"===e?t.useCssRight?"right":e:t.useCssBottom?"bottom":e}function en(e){return"left"===e?"right":"right"===e?"left":"top"===e?"bottom":"bottom"===e?"top":void 0}function eo(e,t,n){"static"===z(e,"position")&&(e.style.position="relative");var o=-999,i=-999,r=et("left",n),u=et("top",n),a=en(r),s=en(u);"left"!==r&&(o=999),"top"!==u&&(i=999);var l="",c=_(e);("left"in t||"top"in t)&&(l=e.style.transitionProperty||e.style[L()]||"",j(e,"none")),"left"in t&&(e.style[a]="",e.style[r]="".concat(o,"px")),"top"in t&&(e.style[s]="",e.style[u]="".concat(i,"px")),X(e);var p=_(e),f={};for(var d in t)if(t.hasOwnProperty(d)){var h=et(d,n),m="left"===d?o:i,v=c[d]-p[d];h===d?f[h]=m+v:f[h]=m-v}z(e,f),X(e),("left"in t||"top"in t)&&j(e,l);var g={};for(var y in t)if(t.hasOwnProperty(y)){var w=et(y,n),b=t[y]-c[y];y===w?g[w]=f[w]+b:g[w]=f[w]-b}z(e,g)}function ei(e,t){for(var n=0;n<e.length;n++)t(e[n])}function er(e){return"border-box"===r(e,"boxSizing")}"undefined"!=typeof window&&(r=window.getComputedStyle?function(e,t,n){var o=n,i="",r=G(e);return(o=o||r.defaultView.getComputedStyle(e,null))&&(i=o.getPropertyValue(t)||o[t]),i}:function(e,t){var n=e[J]&&e[J][t];if(Q.test(n)&&!q.test(t)){var o=e.style,i=o[ee],r=e[K][ee];e[K][ee]=e[J][ee],o[ee]="fontSize"===t?"1em":n||0,n=o.pixelLeft+"px",o[ee]=i,e[K][ee]=r}return""===n?"auto":n});var eu=["margin","border","padding"];function ea(e,t,n){var o,i,u,a=0;for(i=0;i<t.length;i++)if(o=t[i])for(u=0;u<n.length;u++)a+=parseFloat(r(e,"border"===o?"".concat(o).concat(n[u],"Width"):o+n[u]))||0;return a}var es={getParent:function(e){var t=e;do t=11===t.nodeType&&t.host?t.host:t.parentNode;while(t&&1!==t.nodeType&&9!==t.nodeType);return t}};function el(e,t,n){var o=n;if($(e))return"width"===t?es.viewportWidth(e):es.viewportHeight(e);if(9===e.nodeType)return"width"===t?es.docWidth(e):es.docHeight(e);var i="width"===t?["Left","Right"]:["Top","Bottom"],u="width"===t?Math.floor(e.getBoundingClientRect().width):Math.floor(e.getBoundingClientRect().height),a=er(e),s=0;(null==u||u<=0)&&(u=void 0,(null==(s=r(e,t))||0>Number(s))&&(s=e.style[t]||0),s=Math.floor(parseFloat(s))||0),void 0===o&&(o=a?1:-1);var l=void 0!==u||a,c=u||s;return -1===o?l?c-ea(e,["border","padding"],i):s:l?1===o?c:c+(2===o?-ea(e,["border"],i):ea(e,["margin"],i)):s+ea(e,eu.slice(o),i)}ei(["Width","Height"],function(e){es["doc".concat(e)]=function(t){var n=t.document;return Math.max(n.documentElement["scroll".concat(e)],n.body["scroll".concat(e)],es["viewport".concat(e)](n))},es["viewport".concat(e)]=function(t){var n="client".concat(e),o=t.document,i=o.body,r=o.documentElement[n];return"CSS1Compat"===o.compatMode&&r||i&&i[n]||r}});var ec={position:"absolute",visibility:"hidden",display:"block"};function ep(){for(var e,t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];var i=n[0];return 0!==i.offsetWidth?e=el.apply(void 0,n):function(e,t,n){var o,i={},r=e.style;for(o in t)t.hasOwnProperty(o)&&(i[o]=r[o],r[o]=t[o]);for(o in n.call(e),t)t.hasOwnProperty(o)&&(r[o]=i[o])}(i,ec,function(){e=el.apply(void 0,n)}),e}function ef(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}ei(["width","height"],function(e){var t=e.charAt(0).toUpperCase()+e.slice(1);es["outer".concat(t)]=function(t,n){return t&&ep(t,e,n?0:1)};var n="width"===e?["Left","Right"]:["Top","Bottom"];es[e]=function(t,o){var i=o;return void 0!==i?t?(er(t)&&(i+=ea(t,["padding","border"],n)),z(t,e,i)):void 0:t&&ep(t,e,-1)}});var ed={getWindow:function(e){if(e&&e.document&&e.setTimeout)return e;var t=e.ownerDocument||e;return t.defaultView||t.parentWindow},getDocument:G,offset:function(e,t,n){if(void 0===t)return _(e);!function(e,t,n){if(n.ignoreShake){var o,i,r,u=_(e),a=u.left.toFixed(0),s=u.top.toFixed(0),l=t.left.toFixed(0),c=t.top.toFixed(0);if(a===l&&s===c)return}n.useCssRight||n.useCssBottom?eo(e,t,n):n.useCssTransform&&W() in document.body.style?(o=_(e),r={x:(i=function(e){var t=window.getComputedStyle(e,null),n=t.getPropertyValue("transform")||t.getPropertyValue(W());if(n&&"none"!==n){var o=n.replace(/[^0-9\-.,]/g,"").split(",");return{x:parseFloat(o[12]||o[4],0),y:parseFloat(o[13]||o[5],0)}}return{x:0,y:0}}(e)).x,y:i.y},"left"in t&&(r.x=i.x+t.left-o.left),"top"in t&&(r.y=i.y+t.top-o.top),function(e,t){var n=window.getComputedStyle(e,null),o=n.getPropertyValue("transform")||n.getPropertyValue(W());if(o&&"none"!==o){var i,r=o.match(F);r?((i=(r=r[1]).split(",").map(function(e){return parseFloat(e,10)}))[4]=t.x,i[5]=t.y,B(e,"matrix(".concat(i.join(","),")"))):((i=o.match(I)[1].split(",").map(function(e){return parseFloat(e,10)}))[12]=t.x,i[13]=t.y,B(e,"matrix3d(".concat(i.join(","),")")))}else B(e,"translateX(".concat(t.x,"px) translateY(").concat(t.y,"px) translateZ(0)"))}(e,r)):eo(e,t,n)}(e,t,n||{})},isWindow:$,each:ei,css:z,clone:function(e){var t,n={};for(t in e)e.hasOwnProperty(t)&&(n[t]=e[t]);if(e.overflow)for(t in e)e.hasOwnProperty(t)&&(n.overflow[t]=e.overflow[t]);return n},mix:ef,getWindowScrollLeft:function(e){return U(e)},getWindowScrollTop:function(e){return U(e,!0)},merge:function(){for(var e={},t=0;t<arguments.length;t++)ed.mix(e,t<0||arguments.length<=t?void 0:arguments[t]);return e},viewportWidth:0,viewportHeight:0};ef(ed,es);var eh=ed.getParent;function em(e){if(ed.isWindow(e)||9===e.nodeType)return null;var t,n=ed.getDocument(e).body,o=ed.css(e,"position");if(!("fixed"===o||"absolute"===o))return"html"===e.nodeName.toLowerCase()?null:eh(e);for(t=eh(e);t&&t!==n&&9!==t.nodeType;t=eh(t))if("static"!==(o=ed.css(t,"position")))return t;return null}var ev=ed.getParent;function eg(e,t){for(var n={left:0,right:1/0,top:0,bottom:1/0},o=em(e),i=ed.getDocument(e),r=i.defaultView||i.parentWindow,u=i.body,a=i.documentElement;o;){if((-1===navigator.userAgent.indexOf("MSIE")||0!==o.clientWidth)&&o!==u&&o!==a&&"visible"!==ed.css(o,"overflow")){var s=ed.offset(o);s.left+=o.clientLeft,s.top+=o.clientTop,n.top=Math.max(n.top,s.top),n.right=Math.min(n.right,s.left+o.clientWidth),n.bottom=Math.min(n.bottom,s.top+o.clientHeight),n.left=Math.max(n.left,s.left)}else if(o===u||o===a)break;o=em(o)}var l=null;ed.isWindow(e)||9===e.nodeType||(l=e.style.position,"absolute"!==ed.css(e,"position")||(e.style.position="fixed"));var c=ed.getWindowScrollLeft(r),p=ed.getWindowScrollTop(r),f=ed.viewportWidth(r),d=ed.viewportHeight(r),h=a.scrollWidth,m=a.scrollHeight,v=window.getComputedStyle(u);if("hidden"===v.overflowX&&(h=r.innerWidth),"hidden"===v.overflowY&&(m=r.innerHeight),e.style&&(e.style.position=l),t||function(e){if(ed.isWindow(e)||9===e.nodeType)return!1;var t=ed.getDocument(e),n=t.body,o=null;for(o=ev(e);o&&o!==n&&o!==t;o=ev(o))if("fixed"===ed.css(o,"position"))return!0;return!1}(e))n.left=Math.max(n.left,c),n.top=Math.max(n.top,p),n.right=Math.min(n.right,c+f),n.bottom=Math.min(n.bottom,p+d);else{var g=Math.max(h,c+f);n.right=Math.min(n.right,g);var y=Math.max(m,p+d);n.bottom=Math.min(n.bottom,y)}return n.top>=0&&n.left>=0&&n.bottom>n.top&&n.right>n.left?n:null}function ey(e){if(ed.isWindow(e)||9===e.nodeType){var t,n,o,i=ed.getWindow(e);t={left:ed.getWindowScrollLeft(i),top:ed.getWindowScrollTop(i)},n=ed.viewportWidth(i),o=ed.viewportHeight(i)}else t=ed.offset(e),n=ed.outerWidth(e),o=ed.outerHeight(e);return t.width=n,t.height=o,t}function ew(e,t){var n=t.charAt(0),o=t.charAt(1),i=e.width,r=e.height,u=e.left,a=e.top;return"c"===n?a+=r/2:"b"===n&&(a+=r),"c"===o?u+=i/2:"r"===o&&(u+=i),{left:u,top:a}}function eb(e,t,n,o,i){var r=ew(t,n[1]),u=ew(e,n[0]),a=[u.left-r.left,u.top-r.top];return{left:Math.round(e.left-a[0]+o[0]-i[0]),top:Math.round(e.top-a[1]+o[1]-i[1])}}function eC(e,t,n){return e.left<n.left||e.left+t.width>n.right}function eZ(e,t,n){return e.top<n.top||e.top+t.height>n.bottom}function eT(e,t,n){var o=[];return ed.each(e,function(e){o.push(e.replace(t,function(e){return n[e]}))}),o}function eM(e,t){return e[t]=-e[t],e}function ex(e,t){return(/%$/.test(e)?parseInt(e.substring(0,e.length-1),10)/100*t:parseInt(e,10))||0}function eP(e,t){e[0]=ex(e[0],t.width),e[1]=ex(e[1],t.height)}function eO(e,t,n,o){var i=n.points,r=n.offset||[0,0],u=n.targetOffset||[0,0],a=n.overflow,s=n.source||e;r=[].concat(r),u=[].concat(u);var l={},c=0,p=eg(s,!!(a=a||{}).alwaysByViewport),f=ey(s);eP(r,f),eP(u,t);var d=eb(f,t,i,r,u),h=ed.merge(f,d);if(p&&(a.adjustX||a.adjustY)&&o){if(a.adjustX&&eC(d,f,p)){var m,v,g,y,w=eT(i,/[lr]/gi,{l:"r",r:"l"}),b=eM(r,0),C=eM(u,0);(y=eb(f,t,w,b,C)).left>p.right||y.left+f.width<p.left||(c=1,i=w,r=b,u=C)}if(a.adjustY&&eZ(d,f,p)){var Z,T=eT(i,/[tb]/gi,{t:"b",b:"t"}),M=eM(r,1),x=eM(u,1);(Z=eb(f,t,T,M,x)).top>p.bottom||Z.top+f.height<p.top||(c=1,i=T,r=M,u=x)}c&&(d=eb(f,t,i,r,u),ed.mix(h,d));var P=eC(d,f,p),O=eZ(d,f,p);if(P||O){var E=i;P&&(E=eT(i,/[lr]/gi,{l:"r",r:"l"})),O&&(E=eT(i,/[tb]/gi,{t:"b",b:"t"})),i=E,r=n.offset||[0,0],u=n.targetOffset||[0,0]}l.adjustX=a.adjustX&&P,l.adjustY=a.adjustY&&O,(l.adjustX||l.adjustY)&&(m=d,v=ed.clone(m),g={width:f.width,height:f.height},l.adjustX&&v.left<p.left&&(v.left=p.left),l.resizeWidth&&v.left>=p.left&&v.left+g.width>p.right&&(g.width-=v.left+g.width-p.right),l.adjustX&&v.left+g.width>p.right&&(v.left=Math.max(p.right-g.width,p.left)),l.adjustY&&v.top<p.top&&(v.top=p.top),l.resizeHeight&&v.top>=p.top&&v.top+g.height>p.bottom&&(g.height-=v.top+g.height-p.bottom),l.adjustY&&v.top+g.height>p.bottom&&(v.top=Math.max(p.bottom-g.height,p.top)),h=ed.mix(v,g))}return h.width!==f.width&&ed.css(s,"width",ed.width(s)+h.width-f.width),h.height!==f.height&&ed.css(s,"height",ed.height(s)+h.height-f.height),ed.offset(s,{left:h.left,top:h.top},{useCssRight:n.useCssRight,useCssBottom:n.useCssBottom,useCssTransform:n.useCssTransform,ignoreShake:n.ignoreShake}),{points:i,offset:r,targetOffset:u,overflow:l}}function eE(e,t,n){var o,i,r=n.target||t,u=ey(r),a=(o=eg(r,n.overflow&&n.overflow.alwaysByViewport),i=ey(r),!!o&&!(i.left+i.width<=o.left)&&!(i.top+i.height<=o.top)&&!(i.left>=o.right)&&!(i.top>=o.bottom));return eO(e,u,n,a)}eE.__getOffsetParent=em,eE.__getVisibleRectForElement=eg;var ek=n(80334),eD=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=new Set;return function e(t,i){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,u=o.has(t);if((0,ek.ZP)(!u,"Warning: There may be circular references"),u)return!1;if(t===i)return!0;if(n&&r>1)return!1;o.add(t);var a=r+1;if(Array.isArray(t)){if(!Array.isArray(i)||t.length!==i.length)return!1;for(var s=0;s<t.length;s++)if(!e(t[s],i[s],a))return!1;return!0}if(t&&i&&"object"===(0,S.Z)(t)&&"object"===(0,S.Z)(i)){var l=Object.keys(t);return l.length===Object.keys(i).length&&l.every(function(n){return e(t[n],i[n],a)})}return!1}(e,t)},eS=n(5110),eN=n(8410),eH=function(e,t){var n=h.useRef(!1),o=h.useRef(null);function i(){window.clearTimeout(o.current)}return[function r(u){if(i(),n.current&&!0!==u)o.current=window.setTimeout(function(){n.current=!1,r()},t);else{if(!1===e(u))return;n.current=!0,o.current=window.setTimeout(function(){n.current=!1},t)}},function(){n.current=!1,i()}]},eR=n(91033);function eV(e,t){var n=null,o=null,i=new eR.Z(function(e){var i=(0,x.Z)(e,1)[0].target;if(document.documentElement.contains(i)){var r=i.getBoundingClientRect(),u=r.width,a=r.height,s=Math.floor(u),l=Math.floor(a);(n!==s||o!==l)&&Promise.resolve().then(function(){t({width:s,height:l})}),n=s,o=l}});return e&&i.observe(e),function(){i.disconnect()}}function eA(e){return"function"!=typeof e?null:e()}function eL(e){return"object"===(0,S.Z)(e)&&e?e:null}var eW=h.forwardRef(function(e,t){var n=e.children,o=e.disabled,i=e.target,r=e.align,u=e.onAlign,a=e.monitorWindowResize,s=e.monitorBufferTime,l=h.useRef({}),c=h.useRef(),p=h.Children.only(n),f=h.useRef({});f.current.disabled=o,f.current.target=i,f.current.align=r,f.current.onAlign=u;var d=eH(function(){var e=f.current,t=e.disabled,n=e.target,o=e.align,i=e.onAlign,r=c.current;if(!t&&n&&r){var u,a,s,p,d,h,m,v,y,w,b,C=eA(n),Z=eL(n);l.current.element=C,l.current.point=Z,l.current.align=o;var T=document.activeElement;return C&&(0,eS.Z)(C)?b=eE(r,C,o):Z&&(p=(s=ed.getDocument(r)).defaultView||s.parentWindow,d=ed.getWindowScrollLeft(p),h=ed.getWindowScrollTop(p),m=ed.viewportWidth(p),v=ed.viewportHeight(p),y={left:u="pageX"in Z?Z.pageX:d+Z.clientX,top:a="pageY"in Z?Z.pageY:h+Z.clientY,width:0,height:0},w=[o.points[0],"cc"],b=eO(r,y,H(H({},o),{},{points:w}),u>=0&&u<=d+m&&a>=0&&a<=h+v)),T!==document.activeElement&&(0,g.Z)(r,T)&&"function"==typeof T.focus&&T.focus(),i&&b&&i(r,b),!0}return!1},void 0===s?0:s),m=(0,x.Z)(d,2),v=m[0],y=m[1],C=h.useState(),Z=(0,x.Z)(C,2),T=Z[0],M=Z[1],P=h.useState(),O=(0,x.Z)(P,2),E=O[0],k=O[1];return(0,eN.Z)(function(){M(eA(i)),k(eL(i))}),h.useEffect(function(){var e;l.current.element===T&&((e=l.current.point)===E||e&&E&&("pageX"in E&&"pageY"in E?e.pageX===E.pageX&&e.pageY===E.pageY:"clientX"in E&&"clientY"in E&&e.clientX===E.clientX&&e.clientY===E.clientY))&&eD(l.current.align,r)||v()}),h.useEffect(function(){return eV(c.current,v)},[c.current]),h.useEffect(function(){return eV(T,v)},[T]),h.useEffect(function(){o?y():v()},[o]),h.useEffect(function(){if(a)return(0,b.Z)(window,"resize",v).remove},[a]),h.useEffect(function(){return function(){y()}},[]),h.useImperativeHandle(t,function(){return{forceAlign:function(){return v(!0)}}}),h.isValidElement(p)&&(p=h.cloneElement(p,{ref:(0,w.sQ)(p.ref,c)})),p});eW.displayName="Align";var ej=n(74165),eB=n(15861),eF=n(30470),eI=["measure","alignPre","align",null,"motion"],eY=function(e,t){var n=(0,eF.Z)(null),o=(0,x.Z)(n,2),i=o[0],r=o[1],u=(0,h.useRef)();function a(){v.Z.cancel(u.current)}return(0,h.useEffect)(function(){r("measure",!0)},[e]),(0,h.useEffect)(function(){"measure"===i&&t(),i&&(u.current=(0,v.Z)((0,eB.Z)((0,ej.Z)().mark(function e(){var t,n;return(0,ej.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=eI.indexOf(i),(n=eI[t+1])&&-1!==t&&r(n,!0);case 3:case"end":return e.stop()}},e)}))))},[i]),(0,h.useEffect)(function(){return function(){a()}},[]),[i,function(e){a(),u.current=(0,v.Z)(function(){r(function(e){switch(i){case"align":return"motion";case"motion":return"stable"}return e},!0),null==e||e()})}]},eX=function(e){var t=h.useState({width:0,height:0}),n=(0,x.Z)(t,2),o=n[0],i=n[1];return[h.useMemo(function(){var t={};if(e){var n=o.width,i=o.height;-1!==e.indexOf("height")&&i?t.height=i:-1!==e.indexOf("minHeight")&&i&&(t.minHeight=i),-1!==e.indexOf("width")&&n?t.width=n:-1!==e.indexOf("minWidth")&&n&&(t.minWidth=n)}return t},[e,o]),function(e){var t=e.offsetWidth,n=e.offsetHeight,o=e.getBoundingClientRect(),r=o.width,u=o.height;1>Math.abs(t-r)&&1>Math.abs(n-u)&&(t=r,n=u),i({width:t,height:n})}]},ez=h.forwardRef(function(e,t){var n=e.visible,o=e.prefixCls,i=e.className,r=e.style,s=e.children,l=e.zIndex,c=e.stretch,p=e.destroyPopupOnHide,f=e.forceRender,d=e.align,m=e.point,v=e.getRootDomNode,g=e.getClassNameFromAlign,y=e.onAlign,w=e.onMouseEnter,b=e.onMouseLeave,C=e.onMouseDown,Z=e.onTouchStart,T=e.onClick,P=(0,h.useRef)(),O=(0,h.useRef)(),D=(0,h.useState)(),S=(0,x.Z)(D,2),N=S[0],H=S[1],R=eX(c),V=(0,x.Z)(R,2),A=V[0],L=V[1],W=eY(n,function(){c&&L(v())}),j=(0,x.Z)(W,2),B=j[0],F=j[1],I=(0,h.useState)(0),Y=(0,x.Z)(I,2),X=Y[0],z=Y[1],U=(0,h.useRef)();function _(){var e;null===(e=P.current)||void 0===e||e.forceAlign()}function $(e,t){var n=g(t);N!==n&&H(n),z(function(e){return e+1}),"align"===B&&(null==y||y(e,t))}(0,eN.Z)(function(){"alignPre"===B&&z(0)},[B]),(0,eN.Z)(function(){"align"===B&&(X<3?_():F(function(){var e;null===(e=U.current)||void 0===e||e.call(U)}))},[X]);var G=(0,u.Z)({},k(e));function Q(){return new Promise(function(e){U.current=e})}["onAppearEnd","onEnterEnd","onLeaveEnd"].forEach(function(e){var t=G[e];G[e]=function(e,n){return F(),null==t?void 0:t(e,n)}}),h.useEffect(function(){G.motionName||"motion"!==B||F()},[G.motionName,B]),h.useImperativeHandle(t,function(){return{forceAlign:_,getElement:function(){return O.current}}});var q=(0,u.Z)((0,u.Z)({},A),{},{zIndex:l,opacity:"motion"!==B&&"stable"!==B&&n?0:void 0,pointerEvents:n||"stable"===B?void 0:"none"},r),J=!0;null!=d&&d.points&&("align"===B||"stable"===B)&&(J=!1);var K=s;return h.Children.count(s)>1&&(K=h.createElement("div",{className:"".concat(o,"-content")},s)),h.createElement(E.Z,(0,a.Z)({visible:n,ref:O,leavedClassName:"".concat(o,"-hidden")},G,{onAppearPrepare:Q,onEnterPrepare:Q,removeOnLeave:p,forceRender:f}),function(e,t){var n=e.className,r=e.style,a=M()(o,i,N,n);return h.createElement(eW,{target:m||v,key:"popup",ref:P,monitorWindowResize:!0,disabled:J,align:d,onAlign:$},h.createElement("div",{ref:t,className:a,onMouseEnter:w,onMouseLeave:b,onMouseDownCapture:C,onTouchStartCapture:Z,onClick:T,style:(0,u.Z)((0,u.Z)({},r),q)},K))})});ez.displayName="PopupInner";var eU=h.forwardRef(function(e,t){var n=e.prefixCls,o=e.visible,i=e.zIndex,r=e.children,s=e.mobile,l=(s=void 0===s?{}:s).popupClassName,c=s.popupStyle,p=s.popupMotion,f=s.popupRender,d=e.onClick,m=h.useRef();h.useImperativeHandle(t,function(){return{forceAlign:function(){},getElement:function(){return m.current}}});var v=(0,u.Z)({zIndex:i},c),g=r;return h.Children.count(r)>1&&(g=h.createElement("div",{className:"".concat(n,"-content")},r)),f&&(g=f(g)),h.createElement(E.Z,(0,a.Z)({visible:o,ref:m,removeOnLeave:!0},void 0===p?{}:p),function(e,t){var o=e.className,i=e.style,r=M()(n,l,o);return h.createElement("div",{ref:t,className:r,onClick:d,style:(0,u.Z)((0,u.Z)({},i),v)},g)})});eU.displayName="MobilePopupInner";var e_=["visible","mobile"],e$=h.forwardRef(function(e,t){var n=e.visible,o=e.mobile,i=(0,P.Z)(e,e_),r=(0,h.useState)(n),s=(0,x.Z)(r,2),l=s[0],c=s[1],p=(0,h.useState)(!1),f=(0,x.Z)(p,2),d=f[0],m=f[1],v=(0,u.Z)((0,u.Z)({},i),{},{visible:l});(0,h.useEffect)(function(){c(n),n&&o&&m((0,O.Z)())},[n,o]);var g=d?h.createElement(eU,(0,a.Z)({},v,{mobile:o,ref:t})):h.createElement(ez,(0,a.Z)({},v,{ref:t}));return h.createElement("div",null,h.createElement(D,v),g)});e$.displayName="Popup";var eG=h.createContext(null);function eQ(){}var eq=["onClick","onMouseDown","onTouchStart","onMouseEnter","onMouseLeave","onFocus","onBlur","onContextMenu"],eJ=(o=function(e){(0,p.Z)(n,e);var t=(0,f.Z)(n);function n(e){var o,i;return(0,s.Z)(this,n),o=t.call(this,e),(0,d.Z)((0,c.Z)(o),"popupRef",h.createRef()),(0,d.Z)((0,c.Z)(o),"triggerRef",h.createRef()),(0,d.Z)((0,c.Z)(o),"portalContainer",void 0),(0,d.Z)((0,c.Z)(o),"attachId",void 0),(0,d.Z)((0,c.Z)(o),"clickOutsideHandler",void 0),(0,d.Z)((0,c.Z)(o),"touchOutsideHandler",void 0),(0,d.Z)((0,c.Z)(o),"contextMenuOutsideHandler1",void 0),(0,d.Z)((0,c.Z)(o),"contextMenuOutsideHandler2",void 0),(0,d.Z)((0,c.Z)(o),"mouseDownTimeout",void 0),(0,d.Z)((0,c.Z)(o),"focusTime",void 0),(0,d.Z)((0,c.Z)(o),"preClickTime",void 0),(0,d.Z)((0,c.Z)(o),"preTouchTime",void 0),(0,d.Z)((0,c.Z)(o),"delayTimer",void 0),(0,d.Z)((0,c.Z)(o),"hasPopupMouseDown",void 0),(0,d.Z)((0,c.Z)(o),"onMouseEnter",function(e){var t=o.props.mouseEnterDelay;o.fireEvents("onMouseEnter",e),o.delaySetPopupVisible(!0,t,t?null:e)}),(0,d.Z)((0,c.Z)(o),"onMouseMove",function(e){o.fireEvents("onMouseMove",e),o.setPoint(e)}),(0,d.Z)((0,c.Z)(o),"onMouseLeave",function(e){o.fireEvents("onMouseLeave",e),o.delaySetPopupVisible(!1,o.props.mouseLeaveDelay)}),(0,d.Z)((0,c.Z)(o),"onPopupMouseEnter",function(){o.clearDelayTimer()}),(0,d.Z)((0,c.Z)(o),"onPopupMouseLeave",function(e){var t;e.relatedTarget&&!e.relatedTarget.setTimeout&&(0,g.Z)(null===(t=o.popupRef.current)||void 0===t?void 0:t.getElement(),e.relatedTarget)||o.delaySetPopupVisible(!1,o.props.mouseLeaveDelay)}),(0,d.Z)((0,c.Z)(o),"onFocus",function(e){o.fireEvents("onFocus",e),o.clearDelayTimer(),o.isFocusToShow()&&(o.focusTime=Date.now(),o.delaySetPopupVisible(!0,o.props.focusDelay))}),(0,d.Z)((0,c.Z)(o),"onMouseDown",function(e){o.fireEvents("onMouseDown",e),o.preClickTime=Date.now()}),(0,d.Z)((0,c.Z)(o),"onTouchStart",function(e){o.fireEvents("onTouchStart",e),o.preTouchTime=Date.now()}),(0,d.Z)((0,c.Z)(o),"onBlur",function(e){o.fireEvents("onBlur",e),o.clearDelayTimer(),o.isBlurToHide()&&o.delaySetPopupVisible(!1,o.props.blurDelay)}),(0,d.Z)((0,c.Z)(o),"onContextMenu",function(e){e.preventDefault(),o.fireEvents("onContextMenu",e),o.setPopupVisible(!0,e)}),(0,d.Z)((0,c.Z)(o),"onContextMenuClose",function(){o.isContextMenuToShow()&&o.close()}),(0,d.Z)((0,c.Z)(o),"onClick",function(e){if(o.fireEvents("onClick",e),o.focusTime){var t;if(o.preClickTime&&o.preTouchTime?t=Math.min(o.preClickTime,o.preTouchTime):o.preClickTime?t=o.preClickTime:o.preTouchTime&&(t=o.preTouchTime),20>Math.abs(t-o.focusTime))return;o.focusTime=0}o.preClickTime=0,o.preTouchTime=0,o.isClickToShow()&&(o.isClickToHide()||o.isBlurToHide())&&e&&e.preventDefault&&e.preventDefault();var n=!o.state.popupVisible;(o.isClickToHide()&&!n||n&&o.isClickToShow())&&o.setPopupVisible(!o.state.popupVisible,e)}),(0,d.Z)((0,c.Z)(o),"onPopupMouseDown",function(){if(o.hasPopupMouseDown=!0,clearTimeout(o.mouseDownTimeout),o.mouseDownTimeout=window.setTimeout(function(){o.hasPopupMouseDown=!1},0),o.context){var e;(e=o.context).onPopupMouseDown.apply(e,arguments)}}),(0,d.Z)((0,c.Z)(o),"onDocumentClick",function(e){if(!o.props.mask||o.props.maskClosable){var t=e.target,n=o.getRootDomNode(),i=o.getPopupDomNode();(!(0,g.Z)(n,t)||o.isContextMenuOnly())&&!(0,g.Z)(i,t)&&!o.hasPopupMouseDown&&o.close()}}),(0,d.Z)((0,c.Z)(o),"getRootDomNode",function(){var e=o.props.getTriggerDOMNode;if(e)return e(o.triggerRef.current);try{var t=(0,y.Z)(o.triggerRef.current);if(t)return t}catch(n){}return m.findDOMNode((0,c.Z)(o))}),(0,d.Z)((0,c.Z)(o),"getPopupClassNameFromAlign",function(e){var t=[],n=o.props,i=n.popupPlacement,r=n.builtinPlacements,u=n.prefixCls,a=n.alignPoint,s=n.getPopupClassNameFromAlign;return i&&r&&t.push(function(e,t,n,o){for(var i=n.points,r=Object.keys(e),u=0;u<r.length;u+=1){var a,s=r[u];if(a=e[s].points,o?a[0]===i[0]:a[0]===i[0]&&a[1]===i[1])return"".concat(t,"-placement-").concat(s)}return""}(r,u,e,a)),s&&t.push(s(e)),t.join(" ")}),(0,d.Z)((0,c.Z)(o),"getComponent",function(){var e=o.props,t=e.prefixCls,n=e.destroyPopupOnHide,i=e.popupClassName,r=e.onPopupAlign,u=e.popupMotion,s=e.popupAnimation,l=e.popupTransitionName,c=e.popupStyle,p=e.mask,f=e.maskAnimation,d=e.maskTransitionName,m=e.maskMotion,v=e.zIndex,g=e.popup,y=e.stretch,w=e.alignPoint,b=e.mobile,C=e.forceRender,Z=e.onPopupClick,T=o.state,M=T.popupVisible,x=T.point,P=o.getPopupAlign(),O={};return o.isMouseEnterToShow()&&(O.onMouseEnter=o.onPopupMouseEnter),o.isMouseLeaveToHide()&&(O.onMouseLeave=o.onPopupMouseLeave),O.onMouseDown=o.onPopupMouseDown,O.onTouchStart=o.onPopupMouseDown,h.createElement(e$,(0,a.Z)({prefixCls:t,destroyPopupOnHide:n,visible:M,point:w&&x,className:i,align:P,onAlign:r,animation:s,getClassNameFromAlign:o.getPopupClassNameFromAlign},O,{stretch:y,getRootDomNode:o.getRootDomNode,style:c,mask:p,zIndex:v,transitionName:l,maskAnimation:f,maskTransitionName:d,maskMotion:m,ref:o.popupRef,motion:u,mobile:b,forceRender:C,onClick:Z}),"function"==typeof g?g():g)}),(0,d.Z)((0,c.Z)(o),"attachParent",function(e){v.Z.cancel(o.attachId);var t,n=o.props,i=n.getPopupContainer,r=n.getDocument,u=o.getRootDomNode();i?(u||0===i.length)&&(t=i(u)):t=r(o.getRootDomNode()).body,t?t.appendChild(e):o.attachId=(0,v.Z)(function(){o.attachParent(e)})}),(0,d.Z)((0,c.Z)(o),"getContainer",function(){if(!o.portalContainer){var e=(0,o.props.getDocument)(o.getRootDomNode()).createElement("div");e.style.position="absolute",e.style.top="0",e.style.left="0",e.style.width="100%",o.portalContainer=e}return o.attachParent(o.portalContainer),o.portalContainer}),(0,d.Z)((0,c.Z)(o),"setPoint",function(e){o.props.alignPoint&&e&&o.setState({point:{pageX:e.pageX,pageY:e.pageY}})}),(0,d.Z)((0,c.Z)(o),"handlePortalUpdate",function(){o.state.prevPopupVisible!==o.state.popupVisible&&o.props.afterPopupVisibleChange(o.state.popupVisible)}),(0,d.Z)((0,c.Z)(o),"triggerContextValue",{onPopupMouseDown:o.onPopupMouseDown}),i="popupVisible"in e?!!e.popupVisible:!!e.defaultPopupVisible,o.state={prevPopupVisible:i,popupVisible:i},eq.forEach(function(e){o["fire".concat(e)]=function(t){o.fireEvents(e,t)}}),o}return(0,l.Z)(n,[{key:"componentDidMount",value:function(){this.componentDidUpdate()}},{key:"componentDidUpdate",value:function(){var e,t=this.props;if(this.state.popupVisible){!this.clickOutsideHandler&&(this.isClickToHide()||this.isContextMenuToShow())&&(e=t.getDocument(this.getRootDomNode()),this.clickOutsideHandler=(0,b.Z)(e,"mousedown",this.onDocumentClick)),this.touchOutsideHandler||(e=e||t.getDocument(this.getRootDomNode()),this.touchOutsideHandler=(0,b.Z)(e,"touchstart",this.onDocumentClick)),!this.contextMenuOutsideHandler1&&this.isContextMenuToShow()&&(e=e||t.getDocument(this.getRootDomNode()),this.contextMenuOutsideHandler1=(0,b.Z)(e,"scroll",this.onContextMenuClose)),!this.contextMenuOutsideHandler2&&this.isContextMenuToShow()&&(this.contextMenuOutsideHandler2=(0,b.Z)(window,"blur",this.onContextMenuClose));return}this.clearOutsideHandler()}},{key:"componentWillUnmount",value:function(){this.clearDelayTimer(),this.clearOutsideHandler(),clearTimeout(this.mouseDownTimeout),v.Z.cancel(this.attachId)}},{key:"getPopupDomNode",value:function(){var e;return(null===(e=this.popupRef.current)||void 0===e?void 0:e.getElement())||null}},{key:"getPopupAlign",value:function(){var e,t=this.props,n=t.popupPlacement,o=t.popupAlign,i=t.builtinPlacements;return n&&i?(e=i[n]||{},(0,u.Z)((0,u.Z)({},e),o)):o}},{key:"setPopupVisible",value:function(e,t){var n=this.props.alignPoint,o=this.state.popupVisible;this.clearDelayTimer(),o!==e&&("popupVisible"in this.props||this.setState({popupVisible:e,prevPopupVisible:o}),this.props.onPopupVisibleChange(e)),n&&t&&e&&this.setPoint(t)}},{key:"delaySetPopupVisible",value:function(e,t,n){var o=this,i=1e3*t;if(this.clearDelayTimer(),i){var r=n?{pageX:n.pageX,pageY:n.pageY}:null;this.delayTimer=window.setTimeout(function(){o.setPopupVisible(e,r),o.clearDelayTimer()},i)}else this.setPopupVisible(e,n)}},{key:"clearDelayTimer",value:function(){this.delayTimer&&(clearTimeout(this.delayTimer),this.delayTimer=null)}},{key:"clearOutsideHandler",value:function(){this.clickOutsideHandler&&(this.clickOutsideHandler.remove(),this.clickOutsideHandler=null),this.contextMenuOutsideHandler1&&(this.contextMenuOutsideHandler1.remove(),this.contextMenuOutsideHandler1=null),this.contextMenuOutsideHandler2&&(this.contextMenuOutsideHandler2.remove(),this.contextMenuOutsideHandler2=null),this.touchOutsideHandler&&(this.touchOutsideHandler.remove(),this.touchOutsideHandler=null)}},{key:"createTwoChains",value:function(e){var t=this.props.children.props,n=this.props;return t[e]&&n[e]?this["fire".concat(e)]:t[e]||n[e]}},{key:"isClickToShow",value:function(){var e=this.props,t=e.action,n=e.showAction;return -1!==t.indexOf("click")||-1!==n.indexOf("click")}},{key:"isContextMenuOnly",value:function(){var e=this.props.action;return"contextMenu"===e||1===e.length&&"contextMenu"===e[0]}},{key:"isContextMenuToShow",value:function(){var e=this.props,t=e.action,n=e.showAction;return -1!==t.indexOf("contextMenu")||-1!==n.indexOf("contextMenu")}},{key:"isClickToHide",value:function(){var e=this.props,t=e.action,n=e.hideAction;return -1!==t.indexOf("click")||-1!==n.indexOf("click")}},{key:"isMouseEnterToShow",value:function(){var e=this.props,t=e.action,n=e.showAction;return -1!==t.indexOf("hover")||-1!==n.indexOf("mouseEnter")}},{key:"isMouseLeaveToHide",value:function(){var e=this.props,t=e.action,n=e.hideAction;return -1!==t.indexOf("hover")||-1!==n.indexOf("mouseLeave")}},{key:"isFocusToShow",value:function(){var e=this.props,t=e.action,n=e.showAction;return -1!==t.indexOf("focus")||-1!==n.indexOf("focus")}},{key:"isBlurToHide",value:function(){var e=this.props,t=e.action,n=e.hideAction;return -1!==t.indexOf("focus")||-1!==n.indexOf("blur")}},{key:"forcePopupAlign",value:function(){if(this.state.popupVisible){var e;null===(e=this.popupRef.current)||void 0===e||e.forceAlign()}}},{key:"fireEvents",value:function(e,t){var n=this.props.children.props[e];n&&n(t);var o=this.props[e];o&&o(t)}},{key:"close",value:function(){this.setPopupVisible(!1)}},{key:"render",value:function(){var e,t=this.state.popupVisible,n=this.props,o=n.children,i=n.forceRender,r=n.alignPoint,a=n.className,s=n.autoDestroy,l=h.Children.only(o),c={key:"trigger"};this.isContextMenuToShow()?c.onContextMenu=this.onContextMenu:c.onContextMenu=this.createTwoChains("onContextMenu"),this.isClickToHide()||this.isClickToShow()?(c.onClick=this.onClick,c.onMouseDown=this.onMouseDown,c.onTouchStart=this.onTouchStart):(c.onClick=this.createTwoChains("onClick"),c.onMouseDown=this.createTwoChains("onMouseDown"),c.onTouchStart=this.createTwoChains("onTouchStart")),this.isMouseEnterToShow()?(c.onMouseEnter=this.onMouseEnter,r&&(c.onMouseMove=this.onMouseMove)):c.onMouseEnter=this.createTwoChains("onMouseEnter"),this.isMouseLeaveToHide()?c.onMouseLeave=this.onMouseLeave:c.onMouseLeave=this.createTwoChains("onMouseLeave"),this.isFocusToShow()||this.isBlurToHide()?(c.onFocus=this.onFocus,c.onBlur=this.onBlur):(c.onFocus=this.createTwoChains("onFocus"),c.onBlur=this.createTwoChains("onBlur"));var p=M()(l&&l.props&&l.props.className,a);p&&(c.className=p);var f=(0,u.Z)({},c);(0,w.Yr)(l)&&(f.ref=(0,w.sQ)(this.triggerRef,l.ref));var d=h.cloneElement(l,f);return(t||this.popupRef.current||i)&&(e=h.createElement(Z,{key:"portal",getContainer:this.getContainer,didUpdate:this.handlePortalUpdate},this.getComponent())),!t&&s&&(e=null),h.createElement(eG.Provider,{value:this.triggerContextValue},d,e)}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n=e.popupVisible,o={};return void 0!==n&&t.popupVisible!==n&&(o.popupVisible=n,o.prevPopupVisible=t.popupVisible),o}}]),n}(h.Component),(0,d.Z)(o,"contextType",eG),(0,d.Z)(o,"defaultProps",{prefixCls:"rc-trigger-popup",getPopupClassNameFromAlign:function(){return""},getDocument:function(e){return e?e.ownerDocument:window.document},onPopupVisibleChange:eQ,afterPopupVisibleChange:eQ,onPopupAlign:eQ,popupClassName:"",mouseEnterDelay:0,mouseLeaveDelay:.1,focusDelay:0,blurDelay:.15,popupStyle:{},destroyPopupOnHide:!1,popupAlign:{},defaultPopupVisible:!1,mask:!1,maskClosable:!0,action:[],showAction:[],hideAction:[],autoDestroy:!1}),o)},64019:function(e,t,n){n.d(t,{Z:function(){return i}});var o=n(73935);function i(e,t,n,i){var r=o.unstable_batchedUpdates?function(e){o.unstable_batchedUpdates(n,e)}:n;return e.addEventListener&&e.addEventListener(t,r,i),{remove:function(){e.removeEventListener&&e.removeEventListener(t,r,i)}}}},5110:function(e,t){t.Z=function(e){if(!e)return!1;if(e instanceof HTMLElement&&e.offsetParent)return!0;if(e instanceof SVGGraphicsElement&&e.getBBox){var t=e.getBBox(),n=t.width,o=t.height;if(n||o)return!0}if(e instanceof HTMLElement&&e.getBoundingClientRect){var i=e.getBoundingClientRect(),r=i.width,u=i.height;if(r||u)return!0}return!1}}}]);
//# sourceMappingURL=3763-f4076e86be871940.js.map