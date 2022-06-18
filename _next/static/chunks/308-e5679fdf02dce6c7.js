"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[308],{8202:function(a,b,c){c.d(b,{Eh:function(){return Eb},x8:function(){return Db},VY:function(){return Cb},fC:function(){return Ab},xz:function(){return Bb}});var d,e=new WeakMap(),f=new WeakMap(),g={},h=0,i=function(a,b,c){var d;void 0===b&&(b=(d=a,"undefined"==typeof document?null:(Array.isArray(d)?d[0]:d).ownerDocument.body)),void 0===c&&(c="data-aria-hidden");var i=Array.isArray(a)?a:[a];g[c]||(g[c]=new WeakMap());var j=g[c],k=[],l=new Set(),m=function(a){!a||l.has(a)||(l.add(a),m(a.parentNode))};i.forEach(m);var n=function(a){!a||i.indexOf(a)>=0||Array.prototype.forEach.call(a.children,function(a){if(l.has(a))n(a);else{var b=a.getAttribute("aria-hidden"),d=null!==b&&"false"!==b,g=(e.get(a)||0)+1,h=(j.get(a)||0)+1;e.set(a,g),j.set(a,h),k.push(a),1===g&&d&&f.set(a,!0),1===h&&a.setAttribute(c,"true"),d||a.setAttribute("aria-hidden","true")}})};return n(b),l.clear(),h++,function(){k.forEach(function(a){var b=e.get(a)-1,d=j.get(a)-1;e.set(a,b),j.set(a,d),b||(f.has(a)||a.removeAttribute("aria-hidden"),f.delete(a)),d||a.removeAttribute(c)}),h--,h||(e=new WeakMap(),e=new WeakMap(),f=new WeakMap(),g={})}},j=function(a,b){return(j=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])})(a,b)},k=function(){return(k=Object.assign||function(a){for(var b,c=1,d=arguments.length;c<d;c++)for(var e in b=arguments[c])Object.prototype.hasOwnProperty.call(b,e)&&(a[e]=b[e]);return a}).apply(this,arguments)};function l(a,b){var c={};for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&0>b.indexOf(d)&&(c[d]=a[d]);if(null!=a&&"function"==typeof Object.getOwnPropertySymbols)for(var e=0,d=Object.getOwnPropertySymbols(a);e<d.length;e++)0>b.indexOf(d[e])&&Object.prototype.propertyIsEnumerable.call(a,d[e])&&(c[d[e]]=a[d[e]]);return c}function m(a){return this instanceof m?(this.v=a,this):new m(a)}var n,o,p,q,r,s=c(7294),t=c.t(s,2),u="right-scroll-bar-position",v="width-before-scroll-bar",w=(void 0===q&&(q={}),(r=(void 0===n&&(n=function(a){return a}),o=[],p=!1,{read:function(){if(p)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return o.length?o[o.length-1]:null},useMedium:function(a){var b=n(a,p);return o.push(b),function(){o=o.filter(function(a){return a!==b})}},assignSyncMedium:function(a){for(p=!0;o.length;){var b=o;o=[],b.forEach(a)}o={push:function(b){return a(b)},filter:function(){return o}}},assignMedium:function(a){p=!0;var b=[];if(o.length){var c=o;o=[],c.forEach(a),b=o}var d=function(){var c=b;b=[],c.forEach(a)},e=function(){return Promise.resolve().then(d)};e(),o={push:function(a){b.push(a),e()},filter:function(a){return b=b.filter(a),o}}}})).options=k({async:!0,ssr:!1},q),r),x=function(){},y=s.forwardRef(function(a,b){var c,d=s.useRef(null),e=s.useState({onScrollCapture:x,onWheelCapture:x,onTouchMoveCapture:x}),f=e[0],g=e[1],h=a.forwardProps,i=a.children,j=a.className,m=a.removeScrollBar,n=a.enabled,o=a.shards,p=a.sideCar,q=a.noIsolation,r=a.inert,t=a.allowPinchZoom,u=a.as,v=l(a,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),y=(c=[d,b],function(a,b){var c=(0,s.useState)(function(){return{value:a,callback:b,facade:{get current(){return c.value},set current(value){var d=c.value;d!==value&&(c.value=value,c.callback(value,d))}}}})[0];return c.callback=b,c.facade}(void 0,function(a){return c.forEach(function(b){var c,d;return c=b,d=a,"function"==typeof c?c(d):c&&(c.current=d),c})})),z=k({},v,f);return s.createElement(s.Fragment,null,n&&s.createElement(p,{sideCar:w,removeScrollBar:m,shards:o,noIsolation:q,inert:r,setCallbacks:g,allowPinchZoom:!!t,lockRef:d}),h?s.cloneElement(s.Children.only(i),k({},z,{ref:y})):s.createElement(void 0===u?"div":u,k({},z,{className:j,ref:y}),i))});y.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},y.classNames={fullWidth:v,zeroRight:u};var z=function(a){var b=a.sideCar,c=l(a,["sideCar"]);if(!b)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var d=b.read();if(!d)throw new Error("Sidecar medium not found");return s.createElement(d,k({},c))};z.isSideCarExport=!0;var A=function(){var a=0,b=null;return{add:function(e){if(0==a&&(b=(function(){if(!document)return null;var a=document.createElement("style");a.type="text/css";var b=d||c.nc;return b&&a.setAttribute("nonce",b),a})())){var f,g,h;f=b,g=e,f.styleSheet?f.styleSheet.cssText=g:f.appendChild(document.createTextNode(g)),h=b,(document.head||document.getElementsByTagName("head")[0]).appendChild(h)}a++},remove:function(){a--,!a&&b&&(b.parentNode&&b.parentNode.removeChild(b),b=null)}}},B=function(){var a=A();return function(b){s.useEffect(function(){return a.add(b),function(){a.remove()}},[])}},C=function(){var a=B();return function(b){return a(b.styles),null}},D={left:0,top:0,right:0,gap:0},E=function(a){return parseInt(a||"",10)||0},F=function(a){var b=window.getComputedStyle(document.body),c=b["padding"===a?"paddingLeft":"marginLeft"],d=b["padding"===a?"paddingTop":"marginTop"],e=b["padding"===a?"paddingRight":"marginRight"];return[E(c),E(d),E(e),]},G=function(a){if(void 0===a&&(a="margin"),"undefined"==typeof window)return D;var b=F(a),c=document.documentElement.clientWidth,d=window.innerWidth;return{left:b[0],top:b[1],right:b[2],gap:Math.max(0,d-c+b[2]-b[0])}},H=C(),I=function(a,b,c,d){var e=a.left,f=a.top,g=a.right,h=a.gap;return void 0===c&&(c="margin"),"\n  .with-scroll-bars-hidden {\n   overflow: hidden "+d+";\n   padding-right: "+h+"px "+d+";\n  }\n  body {\n    overflow: hidden "+d+";\n    "+[b&&"position: relative "+d+";","margin"===c&&"\n    padding-left: "+e+"px;\n    padding-top: "+f+"px;\n    padding-right: "+g+"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: "+h+"px "+d+";\n    ","padding"===c&&"padding-right: "+h+"px "+d+";",].filter(Boolean).join("")+"\n  }\n  \n  ."+u+" {\n    right: "+h+"px "+d+";\n  }\n  \n  ."+v+" {\n    margin-right: "+h+"px "+d+";\n  }\n  \n  ."+u+" ."+u+" {\n    right: 0 "+d+";\n  }\n  \n  ."+v+" ."+v+" {\n    margin-right: 0 "+d+";\n  }\n  \n  body {\n    --removed-body-scroll-bar-size: "+h+"px;\n  }\n"},J=function(a){var b=s.useState(G(a.gapMode)),c=b[0],d=b[1];s.useEffect(function(){d(G(a.gapMode))},[a.gapMode]);var e=a.noRelative,f=a.noImportant,g=a.gapMode;return s.createElement(H,{styles:I(c,!e,void 0===g?"margin":g,f?"":"!important")})},K=function(a){var b=window.getComputedStyle(a);return"hidden"!==b.overflowY&&!(b.overflowY===b.overflowX&&"visible"===b.overflowY)},L=function(a){var b=window.getComputedStyle(a);return"range"===a.type||"hidden"!==b.overflowX&&!(b.overflowY===b.overflowX&&"visible"===b.overflowX)},M=function(a,b){var c=b;do{if("undefined"!=typeof ShadowRoot&&c instanceof ShadowRoot&&(c=c.host),P(a,c)){var d=Q(a,c),e=d[1],f=d[2];if(e>f)return!0}c=c.parentNode}while(c&&c!==document.body)return!1},N=function(a){var b=a.scrollTop,c=a.scrollHeight,d=a.clientHeight;return[b,c,d]},O=function(a){var b=a.scrollLeft,c=a.scrollWidth,d=a.clientWidth;return[b,c,d]},P=function(a,b){return"v"===a?K(b):L(b)},Q=function(a,b){return"v"===a?N(b):O(b)},R=function(a,b,c,d,e){var f,g=(f=a,window.getComputedStyle(b).direction,"h"===f&&"rtl"===window.getComputedStyle(b).direction?-1:1),h=g*d,i=c.target,j=b.contains(i),k=!1,l=h>0,m=0,n=0;do{var o=Q(a,i),p=o[0],q=o[1],r=o[2],s=q-r-g*p;(p||s)&&P(a,i)&&(m+=s,n+=p),i=i.parentNode}while(!j&&i!==document.body||j&&(b.contains(i)||b===i))return l&&(e&&0===m|| !e&&h>m)?k=!0:!l&&(e&&0===n|| !e&& -h>n)&&(k=!0),k},S=!1;if("undefined"!=typeof window)try{var T=Object.defineProperty({},"passive",{get:function(){return S=!0,!0}});window.addEventListener("test",T,T),window.removeEventListener("test",T,T)}catch(U){S=!1}var V=!!S&&{passive:!1},W=function(a){return"changedTouches"in a?[a.changedTouches[0].clientX,a.changedTouches[0].clientY]:[0,0]},X=function(a){return[a.deltaX,a.deltaY]},Y=function(a){return a&&"current"in a?a.current:a},Z=0,$=[],_=function(a,b){return a.useMedium(b),z}(w,function(a){var b=s.useRef([]),c=s.useRef([0,0]),d=s.useRef(),e=s.useState(Z++)[0],f=s.useState(function(){return C()})[0],g=s.useRef(a);s.useEffect(function(){g.current=a},[a]),s.useEffect(function(){if(a.inert){document.body.classList.add("block-interactivity-"+e);var b=[a.lockRef.current].concat((a.shards||[]).map(Y)).filter(Boolean);return b.forEach(function(a){return a.classList.add("allow-interactivity-"+e)}),function(){document.body.classList.remove("block-interactivity-"+e),b.forEach(function(a){return a.classList.remove("allow-interactivity-"+e)})}}},[a.inert,a.lockRef.current,a.shards]);var h=s.useCallback(function(a,b){if("touches"in a&&2===a.touches.length)return!g.current.allowPinchZoom;var e,f=W(a),h=c.current,i="deltaX"in a?a.deltaX:h[0]-f[0],j="deltaY"in a?a.deltaY:h[1]-f[1],k=a.target,l=Math.abs(i)>Math.abs(j)?"h":"v",m=M(l,k);if(!m)return!0;if(m?e=l:(e="v"===l?"h":"v",m=M(l,k)),!m)return!1;if(!d.current&&"changedTouches"in a&&(i||j)&&(d.current=e),!e)return!0;var n=d.current||e;return R(n,b,a,"h"===n?i:j,!0)},[]),i=s.useCallback(function(a){var c=a;if($.length&&$[$.length-1]===f){var d="deltaY"in c?X(c):W(c),e=b.current.filter(function(a){var b,e;return a.name===c.type&&a.target===c.target&&(b=a.delta,e=d,b[0]===e[0]&&b[1]===e[1])})[0];if(e&&e.should){c.preventDefault();return}if(!e){var i=(g.current.shards||[]).map(Y).filter(Boolean).filter(function(a){return a.contains(c.target)});(i.length>0?h(c,i[0]):!g.current.noIsolation)&&c.preventDefault()}}},[]),j=s.useCallback(function(a,c,d,e){var f={name:a,delta:c,target:d,should:e};b.current.push(f),setTimeout(function(){b.current=b.current.filter(function(a){return a!==f})},1)},[]),k=s.useCallback(function(a){c.current=W(a),d.current=void 0},[]),l=s.useCallback(function(b){j(b.type,X(b),b.target,h(b,a.lockRef.current))},[]),m=s.useCallback(function(b){j(b.type,W(b),b.target,h(b,a.lockRef.current))},[]);s.useEffect(function(){return $.push(f),a.setCallbacks({onScrollCapture:l,onWheelCapture:l,onTouchMoveCapture:m}),document.addEventListener("wheel",i,V),document.addEventListener("touchmove",i,V),document.addEventListener("touchstart",k,V),function(){$=$.filter(function(a){return a!==f}),document.removeEventListener("wheel",i,V),document.removeEventListener("touchmove",i,V),document.removeEventListener("touchstart",k,V)}},[]);var n,o=a.removeScrollBar,p=a.inert;return s.createElement(s.Fragment,null,p?s.createElement(f,{styles:"\n  .block-interactivity-"+(n=e)+" {pointer-events: none;}\n  .allow-interactivity-"+n+" {pointer-events: all;}\n"}):null,o?s.createElement(J,{gapMode:"margin"}):null)}),aa=s.forwardRef(function(a,b){return s.createElement(y,k({},a,{ref:b,sideCar:_}))});aa.classNames=y.classNames;var ba=aa;const ca=Boolean(null==globalThis?void 0:globalThis.document)?s.useLayoutEffect:()=>{},da=t["useId".toString()]||(()=>{});let ea=0;function fa(...a){return b=>a.forEach(a=>{var c,d;return c=a,d=b,void("function"==typeof c?c(d):null!=c&&(c.current=d))})}function ga(...a){return s.useCallback(fa(...a),a)}function ha(){return(ha=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}const ia=s.forwardRef((a,b)=>{const{children:c,...d}=a;return s.Children.toArray(c).some(la)?s.createElement(s.Fragment,null,s.Children.map(c,a=>la(a)?s.createElement(ja,ha({},d,{ref:b}),a.props.children):a)):s.createElement(ja,ha({},d,{ref:b}),c)});ia.displayName="Slot";const ja=s.forwardRef((a,b)=>{const{children:c,...d}=a;return s.isValidElement(c)?s.cloneElement(c,{...ma(d,c.props),ref:fa(b,c.ref)}):s.Children.count(c)>1?s.Children.only(null):null});ja.displayName="SlotClone";const ka=({children:a})=>s.createElement(s.Fragment,null,a);function la(a){return s.isValidElement(a)&&a.type===ka}function ma(a,b){const c={...b};for(const d in b){const e=a[d],f=b[d];/^on[A-Z]/.test(d)?c[d]=(...a)=>{null==f||f(...a),null==e||e(...a)}:"style"===d?c[d]={...e,...f}:"className"===d&&(c[d]=[e,f].filter(Boolean).join(" "))}return{...a,...c}}const na=["a","button","div","h2","h3","img","li","nav","ol","p","span","svg","ul"].reduce((a,b)=>({...a,[b]:s.forwardRef((a,c)=>{const{asChild:d,...e}=a;return s.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),s.createElement(d?ia:b,ha({},e,{ref:c}))})}),{}),oa=a=>{const{present:b,children:c}=a,d=function(a){var b,c;const[d,e]=s.useState(),f=s.useRef({}),g=s.useRef(a),h=s.useRef("none"),[i,j]=(b=a?"mounted":"unmounted",c={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},s.useReducer((a,b)=>{const d=c[a][b];return null!=d?d:a},b));return s.useEffect(()=>{const a=pa(f.current);h.current="mounted"===i?a:"none"},[i]),ca(()=>{const b=f.current,c=g.current;if(c!==a){const d=h.current,e=pa(b);if(a)j("MOUNT");else if("none"===e||"none"===(null==b?void 0:b.display))j("UNMOUNT");else{const i=d!==e;j(c&&i?"ANIMATION_OUT":"UNMOUNT")}g.current=a}},[a,j]),ca(()=>{if(d){const a=a=>{const b=pa(f.current).includes(a.animationName);a.target===d&&b&&j("ANIMATION_END")},b=a=>{a.target===d&&(h.current=pa(f.current))};return d.addEventListener("animationstart",b),d.addEventListener("animationcancel",a),d.addEventListener("animationend",a),()=>{d.removeEventListener("animationstart",b),d.removeEventListener("animationcancel",a),d.removeEventListener("animationend",a)}}j("ANIMATION_END")},[d,j]),{isPresent:["mounted","unmountSuspended"].includes(i),ref:s.useCallback(a=>{a&&(f.current=getComputedStyle(a)),e(a)},[])}}(b),e="function"==typeof c?c({present:d.isPresent}):s.Children.only(c),f=ga(d.ref,e.ref);return"function"==typeof c||d.isPresent?s.cloneElement(e,{ref:f}):null};function pa(a){return(null==a?void 0:a.animationName)||"none"}oa.displayName="Presence";let qa=0;function ra(){const a=document.createElement("span");return a.setAttribute("data-radix-focus-guard",""),a.tabIndex=0,a.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",a}var sa=c(3935);const ta=s.forwardRef((a,b)=>{var c,d;const{containerRef:e,style:f,...g}=a,h=null!==(c=null==e?void 0:e.current)&& void 0!==c?c:null==globalThis||null===(d=globalThis.document)|| void 0===d?void 0:d.body,[,i]=s.useState({});return ca(()=>{i({})},[]),h?sa.createPortal(s.createElement(na.div,ha({"data-radix-portal":""},g,{ref:b,style:h===document.body?{position:"absolute",top:0,left:0,zIndex:2147483647,...f}:void 0})),h):null});function ua(a){const b=s.useRef(a);return s.useEffect(()=>{b.current=a}),s.useMemo(()=>(...a)=>{var c;return null===(c=b.current)|| void 0===c?void 0:c.call(b,...a)},[])}const va={bubbles:!1,cancelable:!0},wa=s.forwardRef((a,b)=>{const{loop:c=!1,trapped:d=!1,onMountAutoFocus:e,onUnmountAutoFocus:f,...g}=a,[h,i]=s.useState(null),j=ua(e),k=ua(f),l=s.useRef(null),m=ga(b,a=>i(a)),n=s.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;s.useEffect(()=>{if(d){function a(a){if(!n.paused&&h){const b=a.target;h.contains(b)?l.current=b:Aa(l.current,{select:!0})}}function b(a){!n.paused&&h&&(h.contains(a.relatedTarget)||Aa(l.current,{select:!0}))}return document.addEventListener("focusin",a),document.addEventListener("focusout",b),()=>{document.removeEventListener("focusin",a),document.removeEventListener("focusout",b)}}},[d,h,n.paused]),s.useEffect(()=>{if(h){Ca.add(n);const a=document.activeElement;if(!h.contains(a)){const b=new Event("focusScope.autoFocusOnMount",va);h.addEventListener("focusScope.autoFocusOnMount",j),h.dispatchEvent(b),b.defaultPrevented||((function(a,{select:b=!1}={}){const c=document.activeElement;for(const d of a)if(Aa(d,{select:b}),document.activeElement!==c)return})(xa(h).filter(a=>"A"!==a.tagName),{select:!0}),document.activeElement===a&&Aa(h))}return()=>{h.removeEventListener("focusScope.autoFocusOnMount",j),setTimeout(()=>{const b=new Event("focusScope.autoFocusOnUnmount",va);h.addEventListener("focusScope.autoFocusOnUnmount",k),h.dispatchEvent(b),b.defaultPrevented||Aa(null!=a?a:document.body,{select:!0}),h.removeEventListener("focusScope.autoFocusOnUnmount",k),Ca.remove(n)},0)}}},[h,j,k,n]);const o=s.useCallback(a=>{if((c||d)&&!n.paused){const b="Tab"===a.key&&!a.altKey&&!a.ctrlKey&&!a.metaKey,e=document.activeElement;if(b&&e){const f=a.currentTarget,[g,h]=function(a){const b=xa(a),c=ya(b,a),d=ya(b.reverse(),a);return[c,d]}(f);g&&h?a.shiftKey||e!==h?a.shiftKey&&e===g&&(a.preventDefault(),c&&Aa(h,{select:!0})):(a.preventDefault(),c&&Aa(g,{select:!0})):e===f&&a.preventDefault()}}},[c,d,n.paused]);return s.createElement(na.div,ha({tabIndex:-1},g,{ref:m,onKeyDown:o}))});function xa(a){const b=[],c=document.createTreeWalker(a,NodeFilter.SHOW_ELEMENT,{acceptNode:a=>{const b="INPUT"===a.tagName&&"hidden"===a.type;return a.disabled||a.hidden||b?NodeFilter.FILTER_SKIP:a.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;c.nextNode();)b.push(c.currentNode);return b}function ya(a,b){for(const c of a)if(!za(c,{upTo:b}))return c}function za(a,{upTo:b}){if("hidden"===getComputedStyle(a).visibility)return!0;for(;a;){if(void 0!==b&&a===b)return!1;if("none"===getComputedStyle(a).display)return!0;a=a.parentElement}return!1}function Aa(a,{select:b=!1}={}){if(a&&a.focus){var c;const d=document.activeElement;a.focus({preventScroll:!0}),a!==d&&(c=a)instanceof HTMLInputElement&&"select"in c&&b&&a.select()}}let Ba;const Ca=(Ba=[],{add(a){const b=Ba[0];a!==b&&(null==b||b.pause()),(Ba=Da(Ba,a)).unshift(a)},remove(a){var b;null===(b=(Ba=Da(Ba,a))[0])|| void 0===b||b.resume()}});function Da(a,b){const c=[...a],d=c.indexOf(b);return -1!==d&&c.splice(d,1),c}let Ea,Fa=0;function Ga(a,b,{checkForDefaultPrevented:c=!0}={}){return function(d){if(null==a||a(d),!1===c||!d.defaultPrevented)return null==b?void 0:b(d)}}const Ha=s.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Ia=s.forwardRef((a,b)=>{const{disableOutsidePointerEvents:c=!1,onEscapeKeyDown:d,onPointerDownOutside:e,onFocusOutside:f,onInteractOutside:g,onDismiss:h,...i}=a,j=s.useContext(Ha),[k,l]=s.useState(null),[,m]=s.useState({}),n=ga(b,a=>l(a)),o=Array.from(j.layers),[p]=[...j.layersWithOutsidePointerEventsDisabled].slice(-1),q=o.indexOf(p),r=k?o.indexOf(k):-1,t=j.layersWithOutsidePointerEventsDisabled.size>0,u=r>=q,v=function(a){const b=ua(a),c=s.useRef(!1);return s.useEffect(()=>{const a=a=>{a.target&&!c.current&&Ka("dismissableLayer.pointerDownOutside",b,{originalEvent:a}),c.current=!1},d=window.setTimeout(()=>{document.addEventListener("pointerdown",a)},0);return()=>{window.clearTimeout(d),document.removeEventListener("pointerdown",a)}},[b]),{onPointerDownCapture:()=>c.current=!0}}(a=>{const b=a.target,c=[...j.branches].some(a=>a.contains(b));u&&!c&&(null==e||e(a),null==g||g(a),a.defaultPrevented||null==h||h())}),w=function(a){const b=ua(a),c=s.useRef(!1);return s.useEffect(()=>{const a=a=>{a.target&&!c.current&&Ka("dismissableLayer.focusOutside",b,{originalEvent:a})};return document.addEventListener("focusin",a),()=>document.removeEventListener("focusin",a)},[b]),{onFocusCapture:()=>c.current=!0,onBlurCapture:()=>c.current=!1}}(a=>{const b=a.target;[...j.branches].some(a=>a.contains(b))||(null==f||f(a),null==g||g(a),a.defaultPrevented||null==h||h())});return(function(a){const b=ua(a);s.useEffect(()=>{const a=a=>{"Escape"===a.key&&b(a)};return document.addEventListener("keydown",a),()=>document.removeEventListener("keydown",a)},[b])})(a=>{r===j.layers.size-1&&(null==d||d(a),a.defaultPrevented||null==h||h())}),(function({disabled:a}){const b=s.useRef(!1);ca(()=>{if(a){function c(){Fa--,0===Fa&&(document.body.style.pointerEvents=Ea)}function d(a){b.current="mouse"!==a.pointerType}return 0===Fa&&(Ea=document.body.style.pointerEvents),document.body.style.pointerEvents="none",Fa++,document.addEventListener("pointerup",d),()=>{b.current?document.addEventListener("click",c,{once:!0}):c(),document.removeEventListener("pointerup",d)}}},[a])})({disabled:c}),s.useEffect(()=>{k&&(c&&j.layersWithOutsidePointerEventsDisabled.add(k),j.layers.add(k),Ja())},[k,c,j]),s.useEffect(()=>()=>{k&&(j.layers.delete(k),j.layersWithOutsidePointerEventsDisabled.delete(k),Ja())},[k,j]),s.useEffect(()=>{const a=()=>m({});return document.addEventListener("dismissableLayer.update",a),()=>document.removeEventListener("dismissableLayer.update",a)},[]),s.createElement(na.div,ha({},i,{ref:n,style:{pointerEvents:t?u?"auto":"none":void 0,...a.style},onFocusCapture:Ga(a.onFocusCapture,w.onFocusCapture),onBlurCapture:Ga(a.onBlurCapture,w.onBlurCapture),onPointerDownCapture:Ga(a.onPointerDownCapture,v.onPointerDownCapture)}))});function Ja(){const a=new Event("dismissableLayer.update");document.dispatchEvent(a)}function Ka(a,b,c){const d=c.originalEvent.target,e=new CustomEvent(a,{bubbles:!1,cancelable:!0,detail:c});return b&&d.addEventListener(a,b,{once:!0}),!d.dispatchEvent(e)}const La=s.forwardRef((a,b)=>{const{children:c,width:d=10,height:e=5,...f}=a;return s.createElement(na.svg,ha({},f,{ref:b,width:d,height:e,viewBox:"0 0 30 10",preserveAspectRatio:"none"}),a.asChild?c:s.createElement("polygon",{points:"0,0 30,0 15,10"}))}),Ma=La;function Na(a){const[b,c]=s.useState(void 0);return s.useEffect(()=>{if(a){const b=new ResizeObserver(b=>{if(Array.isArray(b)&&b.length){const d=b[0];let e,f;if("borderBoxSize"in d){const g=d.borderBoxSize,h=Array.isArray(g)?g[0]:g;e=h.inlineSize,f=h.blockSize}else{const i=a.getBoundingClientRect();e=i.width,f=i.height}c({width:e,height:f})}});return b.observe(a,{box:"border-box"}),()=>b.unobserve(a)}c(void 0)},[a]),b}let Oa;const Pa=new Map;function Qa(){const a=[];Pa.forEach((b,c)=>{var d,e;const f=c.getBoundingClientRect();d=b.rect,e=f,(d.width!==e.width||d.height!==e.height||d.top!==e.top||d.right!==e.right||d.bottom!==e.bottom||d.left!==e.left)&&(b.rect=f,a.push(b))}),a.forEach(a=>{a.callbacks.forEach(b=>b(a.rect))}),Oa=requestAnimationFrame(Qa)}function Ra(a,b=[]){let c=[];const d=()=>{const b=c.map(a=>s.createContext(a));return function(c){const d=(null==c?void 0:c[a])||b;return s.useMemo(()=>({[`__scope${a}`]:{...c,[a]:d}}),[c,d])}};return d.scopeName=a,[function(b,d){const e=s.createContext(d),f=c.length;function g(b){const{scope:c,children:d,...g}=b,h=(null==c?void 0:c[a][f])||e,i=s.useMemo(()=>g,Object.values(g));return s.createElement(h.Provider,{value:i},d)}return c=[...c,d],g.displayName=b+"Provider",[g,function(c,g){const h=(null==g?void 0:g[a][f])||e,i=s.useContext(h);if(i)return i;if(void 0!==d)return d;throw new Error(`\`${c}\` must be used within \`${b}\``)}]},Sa(d,...b)]}function Sa(...a){const b=a[0];if(1===a.length)return b;const c=()=>{const c=a.map(a=>({useScope:a(),scopeName:a.scopeName}));return function(a){const d=c.reduce((b,{useScope:c,scopeName:d})=>({...b,...c(a)[`__scope${d}`]}),{});return s.useMemo(()=>({[`__scope${b.scopeName}`]:d}),[d])}};return c.scopeName=b.scopeName,c}function Ta(a,b,c){const d=a["x"===c?"left":"top"],e="x"===c?"width":"height",f=a[e],g=b[e];return{before:d-g,start:d,center:d+(f-g)/2,end:d+f-g,after:d+f}}function Ua(a){return{position:"absolute",top:0,left:0,minWidth:"max-content",willChange:"transform",transform:`translate3d(${Math.round(a.x+window.scrollX)}px, ${Math.round(a.y+window.scrollY)}px, 0)`}}function Va(a,b,c,d,e){const f=e?e.width:0,g=e?e.height:0,h=f/2+d;let i="",j="";return"top"===b||"bottom"===b?(i=({start:`${h}px`,center:"center",end:a.width-h+"px"})[c],j="top"===b?`${a.height+g}px`:-g+"px"):(i="left"===b?`${a.width+g}px`:-g+"px",j=({start:`${h}px`,center:"center",end:a.height-h+"px"})[c]),`${i} ${j}`}const Wa={position:"fixed",top:0,left:0,opacity:0,transform:"translate3d(0, -200%, 0)"},Xa={position:"absolute",opacity:0};function Ya({popperSize:a,arrowSize:b,arrowOffset:c,side:d,align:e}){const f=(a.width-b.width)/2,g=(a.height-b.width)/2,h={top:0,right:90,bottom:180,left:-90}[d],i=Math.max(b.width,b.height),j={width:`${i}px`,height:`${i}px`,transform:`rotate(${h}deg)`,willChange:"transform",position:"absolute",[d]:"100%",direction:Za(d,e)};return"top"!==d&&"bottom"!==d||("start"===e&&(j.left=`${c}px`),"center"===e&&(j.left=`${f}px`),"end"===e&&(j.right=`${c}px`)),"left"!==d&&"right"!==d||("start"===e&&(j.top=`${c}px`),"center"===e&&(j.top=`${g}px`),"end"===e&&(j.bottom=`${c}px`)),j}function Za(a,b){return("top"!==a&&"right"!==a||"end"!==b)&&("bottom"!==a&&"left"!==a||"end"===b)?"ltr":"rtl"}function $a(a){return({top:"bottom",right:"left",bottom:"top",left:"right"})[a]}function _a(a,b){return{top:a.top<b.top,right:a.right>b.right,bottom:a.bottom>b.bottom,left:a.left<b.left}}const[ab,bb]=Ra("Popper"),[cb,db]=ab("Popper"),eb=s.forwardRef((a,b)=>{const{__scopePopper:c,virtualRef:d,...e}=a,f=db("PopperAnchor",c),g=s.useRef(null),h=ga(b,g);return s.useEffect(()=>{f.onAnchorChange((null==d?void 0:d.current)||g.current)}),d?null:s.createElement(na.div,ha({},e,{ref:h}))}),[fb,gb]=ab("PopperContent"),hb=s.forwardRef((a,b)=>{const{__scopePopper:c,side:d="bottom",sideOffset:e,align:f="center",alignOffset:g,collisionTolerance:h,avoidCollisions:i=!0,...j}=a,k=db("PopperContent",c),[l,m]=s.useState(),n=function(a){const[b,c]=s.useState();return s.useEffect(()=>{if(a){const b=function(a,b){const c=Pa.get(a);return void 0===c?(Pa.set(a,{rect:{},callbacks:[b]}),1===Pa.size&&(Oa=requestAnimationFrame(Qa))):(c.callbacks.push(b),b(a.getBoundingClientRect())),()=>{const c=Pa.get(a);if(void 0!==c){const d=c.callbacks.indexOf(b);d> -1&&c.callbacks.splice(d,1),0===c.callbacks.length&&(Pa.delete(a),0===Pa.size&&cancelAnimationFrame(Oa))}}}(a,c);return()=>{c(void 0),b()}}},[a]),b}(k.anchor),[o,p]=s.useState(null),q=Na(o),[r,t]=s.useState(null),u=Na(r),v=ga(b,a=>p(a)),w=function(){const[a,b]=s.useState(void 0);return s.useEffect(()=>{let a;function c(){b({width:window.innerWidth,height:window.innerHeight})}function d(){window.clearTimeout(a),a=window.setTimeout(c,100)}return c(),window.addEventListener("resize",d),()=>window.removeEventListener("resize",d)},[]),a}(),x=w?DOMRect.fromRect({...w,x:0,y:0}):void 0,{popperStyles:y,arrowStyles:z,placedSide:A,placedAlign:B}=function({anchorRect:a,popperSize:b,arrowSize:c,arrowOffset:d=0,side:e,sideOffset:f=0,align:g,alignOffset:h=0,shouldAvoidCollisions:i=!0,collisionBoundariesRect:j,collisionTolerance:k=0}){var l,m;if(!a||!b||!j)return{popperStyles:Wa,arrowStyles:Xa};const n=function(a,b,c=0,d=0,e){const f=e?e.height:0,g=Ta(b,a,"x"),h=Ta(b,a,"y"),i=h.before-c-f,j=h.after+c+f,k=g.before-c-f,l=g.after+c+f;return{top:{start:{x:g.start+d,y:i},center:{x:g.center,y:i},end:{x:g.end-d,y:i}},right:{start:{x:l,y:h.start+d},center:{x:l,y:h.center},end:{x:l,y:h.end-d}},bottom:{start:{x:g.start+d,y:j},center:{x:g.center,y:j},end:{x:g.end-d,y:j}},left:{start:{x:k,y:h.start+d},center:{x:k,y:h.center},end:{x:k,y:h.end-d}}}}(b,a,f,h,c),o=n[e][g];if(!1===i){const p=Ua(o);let q=Xa;return c&&(q=Ya({popperSize:b,arrowSize:c,arrowOffset:d,side:e,align:g})),{popperStyles:{...p,"--radix-popper-transform-origin":Va(b,e,g,d,c)},arrowStyles:q,placedSide:e,placedAlign:g}}const r=DOMRect.fromRect({...b,...o}),s=(l=j,m=k,DOMRect.fromRect({width:l.width-2*m,height:l.height-2*m,x:l.left+m,y:l.top+m})),t=_a(r,s),u=n[$a(e)][g],v=function(a,b,c){const d=$a(a);return b[a]&&!c[d]?d:a}(e,t,_a(DOMRect.fromRect({...b,...u}),s)),w=function(a,b,c,d,e){const f="top"===c||"bottom"===c,g=f?"left":"top",h=f?"right":"bottom",i=f?"width":"height",j=b[i]>a[i];return("start"===d||"center"===d)&&(e[g]&&j||e[h]&&!j)?"end":("end"===d||"center"===d)&&(e[h]&&j||e[g]&&!j)?"start":d}(b,a,e,g,t),x=Ua(n[v][w]);let y=Xa;return c&&(y=Ya({popperSize:b,arrowSize:c,arrowOffset:d,side:v,align:w})),{popperStyles:{...x,"--radix-popper-transform-origin":Va(b,v,w,d,c)},arrowStyles:y,placedSide:v,placedAlign:w}}({anchorRect:n,popperSize:q,arrowSize:u,arrowOffset:l,side:d,sideOffset:e,align:f,alignOffset:g,shouldAvoidCollisions:i,collisionBoundariesRect:x,collisionTolerance:h});return s.createElement("div",{style:y,"data-radix-popper-content-wrapper":""},s.createElement(fb,{scope:c,arrowStyles:z,onArrowChange:t,onArrowOffsetChange:m},s.createElement(na.div,ha({"data-side":A,"data-align":B},j,{style:{...j.style,animation:void 0!==A?void 0:"none"},ref:v}))))}),ib=s.forwardRef(function(a,b){const{__scopePopper:c,offset:d,...e}=a,f=gb("PopperArrow",c),{onArrowOffsetChange:g}=f;return s.useEffect(()=>g(d),[g,d]),s.createElement("span",{style:{...f.arrowStyles,pointerEvents:"none"}},s.createElement("span",{ref:f.onArrowChange,style:{display:"inline-block",verticalAlign:"top",pointerEvents:"auto"}},s.createElement(Ma,ha({},e,{ref:b,style:{...e.style,display:"block"}}))))}),jb=a=>{const{__scopePopper:b,children:c}=a,[d,e]=s.useState(null);return s.createElement(cb,{scope:b,anchor:d,onAnchorChange:e},c)},kb=eb,lb=hb,mb=ib,[nb,ob]=Ra("Popover",[bb]),pb=bb(),[qb,rb]=nb("Popover"),sb=s.forwardRef((a,b)=>{const{__scopePopover:c,...d}=a,e=rb("PopoverTrigger",c),f=pb(c),g=ga(b,e.triggerRef),h=s.createElement(na.button,ha({type:"button","aria-haspopup":"dialog","aria-expanded":e.open,"aria-controls":e.contentId,"data-state":zb(e.open)},d,{ref:g,onClick:Ga(a.onClick,e.onOpenToggle)}));return e.hasCustomAnchor?h:s.createElement(kb,ha({asChild:!0},f),h)}),tb=s.forwardRef((a,b)=>{const{forceMount:c,...d}=a,e=rb("PopoverContent",a.__scopePopover);return s.createElement(oa,{present:c||e.open},e.modal?s.createElement(ub,ha({},d,{ref:b})):s.createElement(vb,ha({},d,{ref:b})))}),ub=s.forwardRef((a,b)=>{const{allowPinchZoom:c,portalled:d=!0,...e}=a,f=rb("PopoverContent",a.__scopePopover),g=s.useRef(null),h=ga(b,g),j=s.useRef(!1);s.useEffect(()=>{const a=g.current;if(a)return i(a)},[]);const k=d?ta:s.Fragment;return s.createElement(k,null,s.createElement(ba,{allowPinchZoom:c},s.createElement(wb,ha({},e,{ref:h,trapFocus:f.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:Ga(a.onCloseAutoFocus,a=>{var b;a.preventDefault(),j.current||null===(b=f.triggerRef.current)|| void 0===b||b.focus()}),onPointerDownOutside:Ga(a.onPointerDownOutside,a=>{const b=a.detail.originalEvent,c=0===b.button&& !0===b.ctrlKey,d=2===b.button||c;j.current=d},{checkForDefaultPrevented:!1}),onFocusOutside:Ga(a.onFocusOutside,a=>a.preventDefault(),{checkForDefaultPrevented:!1})}))))}),vb=s.forwardRef((a,b)=>{const{portalled:c=!0,...d}=a,e=rb("PopoverContent",a.__scopePopover),f=s.useRef(!1),g=c?ta:s.Fragment;return s.createElement(g,null,s.createElement(wb,ha({},d,{ref:b,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:b=>{var c,d;null===(c=a.onCloseAutoFocus)|| void 0===c||c.call(a,b),b.defaultPrevented||(f.current||null===(d=e.triggerRef.current)|| void 0===d||d.focus(),b.preventDefault()),f.current=!1},onInteractOutside:b=>{var c,d;null===(c=a.onInteractOutside)|| void 0===c||c.call(a,b),b.defaultPrevented||(f.current=!0);const g=b.target;(null===(d=e.triggerRef.current)|| void 0===d?void 0:d.contains(g))&&b.preventDefault()}})))}),wb=s.forwardRef((a,b)=>{const{__scopePopover:c,trapFocus:d,onOpenAutoFocus:e,onCloseAutoFocus:f,disableOutsidePointerEvents:g,onEscapeKeyDown:h,onPointerDownOutside:i,onFocusOutside:j,onInteractOutside:k,...l}=a,m=rb("PopoverContent",c),n=pb(c);return s.useEffect(()=>{var a,b;const c=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!==(a=c[0])&& void 0!==a?a:ra()),document.body.insertAdjacentElement("beforeend",null!==(b=c[1])&& void 0!==b?b:ra()),qa++,()=>{1===qa&&document.querySelectorAll("[data-radix-focus-guard]").forEach(a=>a.remove()),qa--}},[]),s.createElement(wa,{asChild:!0,loop:!0,trapped:d,onMountAutoFocus:e,onUnmountAutoFocus:f},s.createElement(Ia,{asChild:!0,disableOutsidePointerEvents:g,onInteractOutside:k,onEscapeKeyDown:h,onPointerDownOutside:i,onFocusOutside:j,onDismiss:()=>m.onOpenChange(!1)},s.createElement(lb,ha({"data-state":zb(m.open),role:"dialog",id:m.contentId},n,l,{ref:b,style:{...l.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)"}}))))}),xb=s.forwardRef((a,b)=>{const{__scopePopover:c,...d}=a,e=rb("PopoverClose",c);return s.createElement(na.button,ha({type:"button"},d,{ref:b,onClick:Ga(a.onClick,()=>e.onOpenChange(!1))}))}),yb=s.forwardRef((a,b)=>{const{__scopePopover:c,...d}=a,e=pb(c);return s.createElement(mb,ha({},e,d,{ref:b}))});function zb(a){return a?"open":"closed"}const Ab=a=>{const{__scopePopover:b,children:c,open:d,defaultOpen:e,onOpenChange:f,modal:g=!1}=a,h=pb(b),i=s.useRef(null),[j,k]=s.useState(!1),[l=!1,m]=function({prop:a,defaultProp:b,onChange:c=()=>{}}){const[d,e]=function({defaultProp:a,onChange:b}){const c=s.useState(a),[d]=c,e=s.useRef(d),f=ua(b);return s.useEffect(()=>{e.current!==d&&(f(d),e.current=d)},[d,e,f]),c}({defaultProp:b,onChange:c}),f=void 0!==a,g=ua(c);return[f?a:d,s.useCallback(b=>{if(f){const c=b,d="function"==typeof b?c(a):b;d!==a&&g(d)}else e(b)},[f,a,e,g])]}({prop:d,defaultProp:e,onChange:f});return s.createElement(jb,h,s.createElement(qb,{scope:b,contentId:function(a){const[b,c]=s.useState(da());return ca(()=>{a||c(a=>null!=a?a:String(ea++))},[a]),a||(b?`radix-${b}`:"")}(),triggerRef:i,open:l,onOpenChange:m,onOpenToggle:s.useCallback(()=>m(a=>!a),[m]),hasCustomAnchor:j,onCustomAnchorAdd:s.useCallback(()=>k(!0),[]),onCustomAnchorRemove:s.useCallback(()=>k(!1),[]),modal:g},c))},Bb=sb,Cb=tb,Db=xb,Eb=yb},7434:function(a,b,c){var d=c(7294),e=c(5697),f=c.n(e);function g(){return(g=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}var h=(0,d.forwardRef)(function(a,b){var c=a.color,e=a.size,f=void 0===e?24:e,h=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["color","size"]);return d.createElement("svg",g({ref:b,xmlns:"http://www.w3.org/2000/svg",width:f,height:f,viewBox:"0 0 24 24",fill:"none",stroke:void 0===c?"currentColor":c,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},h),d.createElement("polyline",{points:"6 9 12 15 18 9"}))});h.propTypes={color:f().string,size:f().oneOfType([f().string,f().number])},h.displayName="ChevronDown",b.Z=h},9876:function(a,b,c){var d=c(7294),e=c(5697),f=c.n(e);function g(){return(g=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}var h=(0,d.forwardRef)(function(a,b){var c=a.color,e=a.size,f=void 0===e?24:e,h=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["color","size"]);return d.createElement("svg",g({ref:b,xmlns:"http://www.w3.org/2000/svg",width:f,height:f,viewBox:"0 0 24 24",fill:"none",stroke:void 0===c?"currentColor":c,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},h),d.createElement("path",{d:"M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"}),d.createElement("line",{x1:"18",y1:"9",x2:"12",y2:"15"}),d.createElement("line",{x1:"12",y1:"9",x2:"18",y2:"15"}))});h.propTypes={color:f().string,size:f().oneOfType([f().string,f().number])},h.displayName="Delete",b.Z=h}}])