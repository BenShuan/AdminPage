"use strict";(self.webpackChunkmatx_react=self.webpackChunkmatx_react||[]).push([[622],{5622:(e,t,n)=>{n.d(t,{A:()=>Qe});var o=n(8168),r=n(8587),i=n(5043),a=n(7042),s=n(3844),f=n(2144);function c(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function p(e){return e instanceof c(e).Element||e instanceof Element}function l(e){return e instanceof c(e).HTMLElement||e instanceof HTMLElement}function u(e){return"undefined"!==typeof ShadowRoot&&(e instanceof c(e).ShadowRoot||e instanceof ShadowRoot)}var d=Math.max,m=Math.min,h=Math.round;function v(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function y(){return!/^((?!chrome|android).)*safari/i.test(v())}function b(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var o=e.getBoundingClientRect(),r=1,i=1;t&&l(e)&&(r=e.offsetWidth>0&&h(o.width)/e.offsetWidth||1,i=e.offsetHeight>0&&h(o.height)/e.offsetHeight||1);var a=(p(e)?c(e):window).visualViewport,s=!y()&&n,f=(o.left+(s&&a?a.offsetLeft:0))/r,u=(o.top+(s&&a?a.offsetTop:0))/i,d=o.width/r,m=o.height/i;return{width:d,height:m,top:u,right:f+d,bottom:u+m,left:f,x:f,y:u}}function g(e){var t=c(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function x(e){return e?(e.nodeName||"").toLowerCase():null}function w(e){return((p(e)?e.ownerDocument:e.document)||window.document).documentElement}function O(e){return b(w(e)).left+g(e).scrollLeft}function A(e){return c(e).getComputedStyle(e)}function P(e){var t=A(e),n=t.overflow,o=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+r+o)}function E(e,t,n){void 0===n&&(n=!1);var o=l(t),r=l(t)&&function(e){var t=e.getBoundingClientRect(),n=h(t.width)/e.offsetWidth||1,o=h(t.height)/e.offsetHeight||1;return 1!==n||1!==o}(t),i=w(t),a=b(e,r,n),s={scrollLeft:0,scrollTop:0},f={x:0,y:0};return(o||!o&&!n)&&(("body"!==x(t)||P(i))&&(s=function(e){return e!==c(e)&&l(e)?{scrollLeft:(t=e).scrollLeft,scrollTop:t.scrollTop}:g(e);var t}(t)),l(t)?((f=b(t,!0)).x+=t.clientLeft,f.y+=t.clientTop):i&&(f.x=O(i))),{x:a.left+s.scrollLeft-f.x,y:a.top+s.scrollTop-f.y,width:a.width,height:a.height}}function j(e){var t=b(e),n=e.offsetWidth,o=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:o}}function D(e){return"html"===x(e)?e:e.assignedSlot||e.parentNode||(u(e)?e.host:null)||w(e)}function R(e){return["html","body","#document"].indexOf(x(e))>=0?e.ownerDocument.body:l(e)&&P(e)?e:R(D(e))}function k(e,t){var n;void 0===t&&(t=[]);var o=R(e),r=o===(null==(n=e.ownerDocument)?void 0:n.body),i=c(o),a=r?[i].concat(i.visualViewport||[],P(o)?o:[]):o,s=t.concat(a);return r?s:s.concat(k(D(a)))}function M(e){return["table","td","th"].indexOf(x(e))>=0}function L(e){return l(e)&&"fixed"!==A(e).position?e.offsetParent:null}function T(e){for(var t=c(e),n=L(e);n&&M(n)&&"static"===A(n).position;)n=L(n);return n&&("html"===x(n)||"body"===x(n)&&"static"===A(n).position)?t:n||function(e){var t=/firefox/i.test(v());if(/Trident/i.test(v())&&l(e)&&"fixed"===A(e).position)return null;var n=D(e);for(u(n)&&(n=n.host);l(n)&&["html","body"].indexOf(x(n))<0;){var o=A(n);if("none"!==o.transform||"none"!==o.perspective||"paint"===o.contain||-1!==["transform","perspective"].indexOf(o.willChange)||t&&"filter"===o.willChange||t&&o.filter&&"none"!==o.filter)return n;n=n.parentNode}return null}(e)||t}var W="top",B="bottom",H="right",S="left",C="auto",V=[W,B,H,S],q="start",N="end",I="clippingParents",U="viewport",F="popper",_="reference",z=V.reduce((function(e,t){return e.concat([t+"-"+q,t+"-"+N])}),[]),X=[].concat(V,[C]).reduce((function(e,t){return e.concat([t,t+"-"+q,t+"-"+N])}),[]),Y=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function Q(e){var t=new Map,n=new Set,o=[];function r(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var o=t.get(e);o&&r(o)}})),o.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||r(e)})),o}function Z(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}var G={placement:"bottom",modifiers:[],strategy:"absolute"};function J(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function K(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,o=void 0===n?[]:n,r=t.defaultOptions,i=void 0===r?G:r;return function(e,t,n){void 0===n&&(n=i);var r={placement:"bottom",orderedModifiers:[],options:Object.assign({},G,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},a=[],s=!1,f={state:r,setOptions:function(n){var s="function"===typeof n?n(r.options):n;c(),r.options=Object.assign({},i,r.options,s),r.scrollParents={reference:p(e)?k(e):e.contextElement?k(e.contextElement):[],popper:k(t)};var l=function(e){var t=Q(e);return Y.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(o,r.options.modifiers)));return r.orderedModifiers=l.filter((function(e){return e.enabled})),r.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,o=void 0===n?{}:n,i=e.effect;if("function"===typeof i){var s=i({state:r,name:t,instance:f,options:o}),c=function(){};a.push(s||c)}})),f.update()},forceUpdate:function(){if(!s){var e=r.elements,t=e.reference,n=e.popper;if(J(t,n)){r.rects={reference:E(t,T(n),"fixed"===r.options.strategy),popper:j(n)},r.reset=!1,r.placement=r.options.placement,r.orderedModifiers.forEach((function(e){return r.modifiersData[e.name]=Object.assign({},e.data)}));for(var o=0;o<r.orderedModifiers.length;o++)if(!0!==r.reset){var i=r.orderedModifiers[o],a=i.fn,c=i.options,p=void 0===c?{}:c,l=i.name;"function"===typeof a&&(r=a({state:r,options:p,name:l,instance:f})||r)}else r.reset=!1,o=-1}}},update:Z((function(){return new Promise((function(e){f.forceUpdate(),e(r)}))})),destroy:function(){c(),s=!0}};if(!J(e,t))return f;function c(){a.forEach((function(e){return e()})),a=[]}return f.setOptions(n).then((function(e){!s&&n.onFirstUpdate&&n.onFirstUpdate(e)})),f}}var $={passive:!0};function ee(e){return e.split("-")[0]}function te(e){return e.split("-")[1]}function ne(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function oe(e){var t,n=e.reference,o=e.element,r=e.placement,i=r?ee(r):null,a=r?te(r):null,s=n.x+n.width/2-o.width/2,f=n.y+n.height/2-o.height/2;switch(i){case W:t={x:s,y:n.y-o.height};break;case B:t={x:s,y:n.y+n.height};break;case H:t={x:n.x+n.width,y:f};break;case S:t={x:n.x-o.width,y:f};break;default:t={x:n.x,y:n.y}}var c=i?ne(i):null;if(null!=c){var p="y"===c?"height":"width";switch(a){case q:t[c]=t[c]-(n[p]/2-o[p]/2);break;case N:t[c]=t[c]+(n[p]/2-o[p]/2)}}return t}var re={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ie(e){var t,n=e.popper,o=e.popperRect,r=e.placement,i=e.variation,a=e.offsets,s=e.position,f=e.gpuAcceleration,p=e.adaptive,l=e.roundOffsets,u=e.isFixed,d=a.x,m=void 0===d?0:d,v=a.y,y=void 0===v?0:v,b="function"===typeof l?l({x:m,y:y}):{x:m,y:y};m=b.x,y=b.y;var g=a.hasOwnProperty("x"),x=a.hasOwnProperty("y"),O=S,P=W,E=window;if(p){var j=T(n),D="clientHeight",R="clientWidth";if(j===c(n)&&"static"!==A(j=w(n)).position&&"absolute"===s&&(D="scrollHeight",R="scrollWidth"),r===W||(r===S||r===H)&&i===N)P=B,y-=(u&&j===E&&E.visualViewport?E.visualViewport.height:j[D])-o.height,y*=f?1:-1;if(r===S||(r===W||r===B)&&i===N)O=H,m-=(u&&j===E&&E.visualViewport?E.visualViewport.width:j[R])-o.width,m*=f?1:-1}var k,M=Object.assign({position:s},p&&re),L=!0===l?function(e,t){var n=e.x,o=e.y,r=t.devicePixelRatio||1;return{x:h(n*r)/r||0,y:h(o*r)/r||0}}({x:m,y:y},c(n)):{x:m,y:y};return m=L.x,y=L.y,f?Object.assign({},M,((k={})[P]=x?"0":"",k[O]=g?"0":"",k.transform=(E.devicePixelRatio||1)<=1?"translate("+m+"px, "+y+"px)":"translate3d("+m+"px, "+y+"px, 0)",k)):Object.assign({},M,((t={})[P]=x?y+"px":"",t[O]=g?m+"px":"",t.transform="",t))}const ae={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,o=e.name,r=n.offset,i=void 0===r?[0,0]:r,a=X.reduce((function(e,n){return e[n]=function(e,t,n){var o=ee(e),r=[S,W].indexOf(o)>=0?-1:1,i="function"===typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*r,[S,H].indexOf(o)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],f=s.x,c=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=f,t.modifiersData.popperOffsets.y+=c),t.modifiersData[o]=a}};var se={left:"right",right:"left",bottom:"top",top:"bottom"};function fe(e){return e.replace(/left|right|bottom|top/g,(function(e){return se[e]}))}var ce={start:"end",end:"start"};function pe(e){return e.replace(/start|end/g,(function(e){return ce[e]}))}function le(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&u(n)){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function ue(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function de(e,t,n){return t===U?ue(function(e,t){var n=c(e),o=w(e),r=n.visualViewport,i=o.clientWidth,a=o.clientHeight,s=0,f=0;if(r){i=r.width,a=r.height;var p=y();(p||!p&&"fixed"===t)&&(s=r.offsetLeft,f=r.offsetTop)}return{width:i,height:a,x:s+O(e),y:f}}(e,n)):p(t)?function(e,t){var n=b(e,!1,"fixed"===t);return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}(t,n):ue(function(e){var t,n=w(e),o=g(e),r=null==(t=e.ownerDocument)?void 0:t.body,i=d(n.scrollWidth,n.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),a=d(n.scrollHeight,n.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),s=-o.scrollLeft+O(e),f=-o.scrollTop;return"rtl"===A(r||n).direction&&(s+=d(n.clientWidth,r?r.clientWidth:0)-i),{width:i,height:a,x:s,y:f}}(w(e)))}function me(e,t,n,o){var r="clippingParents"===t?function(e){var t=k(D(e)),n=["absolute","fixed"].indexOf(A(e).position)>=0&&l(e)?T(e):e;return p(n)?t.filter((function(e){return p(e)&&le(e,n)&&"body"!==x(e)})):[]}(e):[].concat(t),i=[].concat(r,[n]),a=i[0],s=i.reduce((function(t,n){var r=de(e,n,o);return t.top=d(r.top,t.top),t.right=m(r.right,t.right),t.bottom=m(r.bottom,t.bottom),t.left=d(r.left,t.left),t}),de(e,a,o));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function he(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function ve(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function ye(e,t){void 0===t&&(t={});var n=t,o=n.placement,r=void 0===o?e.placement:o,i=n.strategy,a=void 0===i?e.strategy:i,s=n.boundary,f=void 0===s?I:s,c=n.rootBoundary,l=void 0===c?U:c,u=n.elementContext,d=void 0===u?F:u,m=n.altBoundary,h=void 0!==m&&m,v=n.padding,y=void 0===v?0:v,g=he("number"!==typeof y?y:ve(y,V)),x=d===F?_:F,O=e.rects.popper,A=e.elements[h?x:d],P=me(p(A)?A:A.contextElement||w(e.elements.popper),f,l,a),E=b(e.elements.reference),j=oe({reference:E,element:O,strategy:"absolute",placement:r}),D=ue(Object.assign({},O,j)),R=d===F?D:E,k={top:P.top-R.top+g.top,bottom:R.bottom-P.bottom+g.bottom,left:P.left-R.left+g.left,right:R.right-P.right+g.right},M=e.modifiersData.offset;if(d===F&&M){var L=M[r];Object.keys(k).forEach((function(e){var t=[H,B].indexOf(e)>=0?1:-1,n=[W,B].indexOf(e)>=0?"y":"x";k[e]+=L[n]*t}))}return k}function be(e,t,n){return d(e,m(t,n))}const ge={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,o=e.name,r=n.mainAxis,i=void 0===r||r,a=n.altAxis,s=void 0!==a&&a,f=n.boundary,c=n.rootBoundary,p=n.altBoundary,l=n.padding,u=n.tether,h=void 0===u||u,v=n.tetherOffset,y=void 0===v?0:v,b=ye(t,{boundary:f,rootBoundary:c,padding:l,altBoundary:p}),g=ee(t.placement),x=te(t.placement),w=!x,O=ne(g),A="x"===O?"y":"x",P=t.modifiersData.popperOffsets,E=t.rects.reference,D=t.rects.popper,R="function"===typeof y?y(Object.assign({},t.rects,{placement:t.placement})):y,k="number"===typeof R?{mainAxis:R,altAxis:R}:Object.assign({mainAxis:0,altAxis:0},R),M=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,L={x:0,y:0};if(P){if(i){var C,V="y"===O?W:S,N="y"===O?B:H,I="y"===O?"height":"width",U=P[O],F=U+b[V],_=U-b[N],z=h?-D[I]/2:0,X=x===q?E[I]:D[I],Y=x===q?-D[I]:-E[I],Q=t.elements.arrow,Z=h&&Q?j(Q):{width:0,height:0},G=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},J=G[V],K=G[N],$=be(0,E[I],Z[I]),oe=w?E[I]/2-z-$-J-k.mainAxis:X-$-J-k.mainAxis,re=w?-E[I]/2+z+$+K+k.mainAxis:Y+$+K+k.mainAxis,ie=t.elements.arrow&&T(t.elements.arrow),ae=ie?"y"===O?ie.clientTop||0:ie.clientLeft||0:0,se=null!=(C=null==M?void 0:M[O])?C:0,fe=U+re-se,ce=be(h?m(F,U+oe-se-ae):F,U,h?d(_,fe):_);P[O]=ce,L[O]=ce-U}if(s){var pe,le="x"===O?W:S,ue="x"===O?B:H,de=P[A],me="y"===A?"height":"width",he=de+b[le],ve=de-b[ue],ge=-1!==[W,S].indexOf(g),xe=null!=(pe=null==M?void 0:M[A])?pe:0,we=ge?he:de-E[me]-D[me]-xe+k.altAxis,Oe=ge?de+E[me]+D[me]-xe-k.altAxis:ve,Ae=h&&ge?function(e,t,n){var o=be(e,t,n);return o>n?n:o}(we,de,Oe):be(h?we:he,de,h?Oe:ve);P[A]=Ae,L[A]=Ae-de}t.modifiersData[o]=L}},requiresIfExists:["offset"]};const xe={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,o=e.name,r=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=ee(n.placement),f=ne(s),c=[S,H].indexOf(s)>=0?"height":"width";if(i&&a){var p=function(e,t){return he("number"!==typeof(e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:ve(e,V))}(r.padding,n),l=j(i),u="y"===f?W:S,d="y"===f?B:H,m=n.rects.reference[c]+n.rects.reference[f]-a[f]-n.rects.popper[c],h=a[f]-n.rects.reference[f],v=T(i),y=v?"y"===f?v.clientHeight||0:v.clientWidth||0:0,b=m/2-h/2,g=p[u],x=y-l[c]-p[d],w=y/2-l[c]/2+b,O=be(g,w,x),A=f;n.modifiersData[o]=((t={})[A]=O,t.centerOffset=O-w,t)}},effect:function(e){var t=e.state,n=e.options.element,o=void 0===n?"[data-popper-arrow]":n;null!=o&&("string"!==typeof o||(o=t.elements.popper.querySelector(o)))&&le(t.elements.popper,o)&&(t.elements.arrow=o)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function we(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function Oe(e){return[W,H,B,S].some((function(t){return e[t]>=0}))}var Ae=K({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,o=e.options,r=o.scroll,i=void 0===r||r,a=o.resize,s=void 0===a||a,f=c(t.elements.popper),p=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&p.forEach((function(e){e.addEventListener("scroll",n.update,$)})),s&&f.addEventListener("resize",n.update,$),function(){i&&p.forEach((function(e){e.removeEventListener("scroll",n.update,$)})),s&&f.removeEventListener("resize",n.update,$)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=oe({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,o=n.gpuAcceleration,r=void 0===o||o,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,f=void 0===s||s,c={placement:ee(t.placement),variation:te(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:r,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,ie(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:f})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,ie(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:f})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},o=t.attributes[e]||{},r=t.elements[e];l(r)&&x(r)&&(Object.assign(r.style,n),Object.keys(o).forEach((function(e){var t=o[e];!1===t?r.removeAttribute(e):r.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var o=t.elements[e],r=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});l(o)&&x(o)&&(Object.assign(o.style,i),Object.keys(r).forEach((function(e){o.removeAttribute(e)})))}))}},requires:["computeStyles"]},ae,{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,o=e.name;if(!t.modifiersData[o]._skip){for(var r=n.mainAxis,i=void 0===r||r,a=n.altAxis,s=void 0===a||a,f=n.fallbackPlacements,c=n.padding,p=n.boundary,l=n.rootBoundary,u=n.altBoundary,d=n.flipVariations,m=void 0===d||d,h=n.allowedAutoPlacements,v=t.options.placement,y=ee(v),b=f||(y===v||!m?[fe(v)]:function(e){if(ee(e)===C)return[];var t=fe(e);return[pe(e),t,pe(t)]}(v)),g=[v].concat(b).reduce((function(e,n){return e.concat(ee(n)===C?function(e,t){void 0===t&&(t={});var n=t,o=n.placement,r=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,f=n.allowedAutoPlacements,c=void 0===f?X:f,p=te(o),l=p?s?z:z.filter((function(e){return te(e)===p})):V,u=l.filter((function(e){return c.indexOf(e)>=0}));0===u.length&&(u=l);var d=u.reduce((function(t,n){return t[n]=ye(e,{placement:n,boundary:r,rootBoundary:i,padding:a})[ee(n)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:n,boundary:p,rootBoundary:l,padding:c,flipVariations:m,allowedAutoPlacements:h}):n)}),[]),x=t.rects.reference,w=t.rects.popper,O=new Map,A=!0,P=g[0],E=0;E<g.length;E++){var j=g[E],D=ee(j),R=te(j)===q,k=[W,B].indexOf(D)>=0,M=k?"width":"height",L=ye(t,{placement:j,boundary:p,rootBoundary:l,altBoundary:u,padding:c}),T=k?R?H:S:R?B:W;x[M]>w[M]&&(T=fe(T));var N=fe(T),I=[];if(i&&I.push(L[D]<=0),s&&I.push(L[T]<=0,L[N]<=0),I.every((function(e){return e}))){P=j,A=!1;break}O.set(j,I)}if(A)for(var U=function(e){var t=g.find((function(t){var n=O.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return P=t,"break"},F=m?3:1;F>0;F--){if("break"===U(F))break}t.placement!==P&&(t.modifiersData[o]._skip=!0,t.placement=P,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},ge,xe,{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,o=t.rects.reference,r=t.rects.popper,i=t.modifiersData.preventOverflow,a=ye(t,{elementContext:"reference"}),s=ye(t,{altBoundary:!0}),f=we(a,o),c=we(s,r,i),p=Oe(f),l=Oe(c);t.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:c,isReferenceHidden:p,hasPopperEscaped:l},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":l})}}]}),Pe=n(8606),Ee=n(5990),je=n(2400);const De="base";function Re(e,t){const n=je.li[t];return n?(o=n,"".concat(De,"--").concat(o)):function(e,t){return"".concat(De,"-").concat(e,"-").concat(t)}(e,t);var o}const ke="Popper";function Me(e){return Re(ke,e)}!function(e,t){const n={};t.forEach((t=>{n[t]=Re(e,t)}))}(ke,["root"]);var Le=n(3662),Te=n(579);const We={disableDefaultClasses:!1},Be=i.createContext(We);const He=["anchorEl","children","direction","disablePortal","modifiers","open","placement","popperOptions","popperRef","slotProps","slots","TransitionProps","ownerState"],Se=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition","slotProps","slots"];function Ce(e){return"function"===typeof e?e():e}function Ve(e){return void 0!==e.nodeType}const qe=()=>(0,Pe.A)({root:["root"]},function(e){const{disableDefaultClasses:t}=i.useContext(Be);return n=>t?"":e(n)}(Me)),Ne={},Ie=i.forwardRef((function(e,t){var n;const{anchorEl:f,children:c,direction:p,disablePortal:l,modifiers:u,open:d,placement:m,popperOptions:h,popperRef:v,slotProps:y={},slots:b={},TransitionProps:g}=e,x=(0,r.A)(e,He),w=i.useRef(null),O=(0,a.A)(w,t),A=i.useRef(null),P=(0,a.A)(A,v),E=i.useRef(P);(0,s.A)((()=>{E.current=P}),[P]),i.useImperativeHandle(v,(()=>A.current),[]);const j=function(e,t){if("ltr"===t)return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}(m,p),[D,R]=i.useState(j),[k,M]=i.useState(Ce(f));i.useEffect((()=>{A.current&&A.current.forceUpdate()})),i.useEffect((()=>{f&&M(Ce(f))}),[f]),(0,s.A)((()=>{if(!k||!d)return;let e=[{name:"preventOverflow",options:{altBoundary:l}},{name:"flip",options:{altBoundary:l}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:e=>{let{state:t}=e;R(t.placement)}}];null!=u&&(e=e.concat(u)),h&&null!=h.modifiers&&(e=e.concat(h.modifiers));const t=Ae(k,w.current,(0,o.A)({placement:j},h,{modifiers:e}));return E.current(t),()=>{t.destroy(),E.current(null)}}),[k,l,u,d,h,j]);const L={placement:D};null!==g&&(L.TransitionProps=g);const T=qe(),W=null!=(n=b.root)?n:"div",B=(0,Le.Q)({elementType:W,externalSlotProps:y.root,externalForwardedProps:x,additionalProps:{role:"tooltip",ref:O},ownerState:e,className:T.root});return(0,Te.jsx)(W,(0,o.A)({},B,{children:"function"===typeof c?c(L):c}))})),Ue=i.forwardRef((function(e,t){const{anchorEl:n,children:a,container:s,direction:c="ltr",disablePortal:p=!1,keepMounted:l=!1,modifiers:u,open:d,placement:m="bottom",popperOptions:h=Ne,popperRef:v,style:y,transition:b=!1,slotProps:g={},slots:x={}}=e,w=(0,r.A)(e,Se),[O,A]=i.useState(!0);if(!l&&!d&&(!b||O))return null;let P;if(s)P=s;else if(n){const e=Ce(n);P=e&&Ve(e)?(0,f.A)(e).body:(0,f.A)(null).body}const E=d||!l||b&&!O?void 0:"none",j=b?{in:d,onEnter:()=>{A(!1)},onExited:()=>{A(!0)}}:void 0;return(0,Te.jsx)(Ee.Z,{disablePortal:p,container:P,children:(0,Te.jsx)(Ie,(0,o.A)({anchorEl:n,direction:c,disablePortal:p,modifiers:u,ref:t,open:b?!O:d,placement:m,popperOptions:h,popperRef:v,slotProps:g,slots:x},w,{style:(0,o.A)({position:"fixed",top:0,left:0,display:E},y),TransitionProps:j,children:a}))})}));var Fe=n(7082),_e=n(4535),ze=n(2876);const Xe=["anchorEl","component","components","componentsProps","container","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","transition","slots","slotProps"],Ye=(0,_e.Ay)(Ue,{name:"MuiPopper",slot:"Root",overridesResolver:(e,t)=>t.root})({}),Qe=i.forwardRef((function(e,t){var n;const i=(0,Fe.A)(),a=(0,ze.A)({props:e,name:"MuiPopper"}),{anchorEl:s,component:f,components:c,componentsProps:p,container:l,disablePortal:u,keepMounted:d,modifiers:m,open:h,placement:v,popperOptions:y,popperRef:b,transition:g,slots:x,slotProps:w}=a,O=(0,r.A)(a,Xe),A=null!=(n=null==x?void 0:x.root)?n:null==c?void 0:c.Root,P=(0,o.A)({anchorEl:s,container:l,disablePortal:u,keepMounted:d,modifiers:m,open:h,placement:v,popperOptions:y,popperRef:b,transition:g},O);return(0,Te.jsx)(Ye,(0,o.A)({as:f,direction:null==i?void 0:i.direction,slots:{root:A},slotProps:null!=w?w:p},P,{ref:t}))}))}}]);
//# sourceMappingURL=622.ee8e19eb.chunk.js.map