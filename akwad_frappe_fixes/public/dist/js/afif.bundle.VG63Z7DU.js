(()=>{var Oi=Object.create;var Vt=Object.defineProperty;var ji=Object.getOwnPropertyDescriptor;var zi=Object.getOwnPropertyNames,Be=Object.getOwnPropertySymbols,$i=Object.getPrototypeOf,Ie=Object.prototype.hasOwnProperty,Pi=Object.prototype.propertyIsEnumerable;var Le=(t,d,s)=>d in t?Vt(t,d,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[d]=s,Oe=(t,d)=>{for(var s in d||(d={}))Ie.call(d,s)&&Le(t,s,d[s]);if(Be)for(var s of Be(d))Pi.call(d,s)&&Le(t,s,d[s]);return t};var Fi=(t,d)=>()=>(d||t((d={exports:{}}).exports,d),d.exports);var Hi=(t,d,s,p)=>{if(d&&typeof d=="object"||typeof d=="function")for(let g of zi(d))!Ie.call(t,g)&&g!==s&&Vt(t,g,{get:()=>d[g],enumerable:!(p=ji(d,g))||p.enumerable});return t};var Ui=(t,d,s)=>(s=t!=null?Oi($i(t)):{},Hi(d||!t||!t.__esModule?Vt(s,"default",{value:t,enumerable:!0}):s,t));var Ye=Fi((Zt,Qt)=>{(function(t,d){typeof Zt=="object"&&typeof Qt!="undefined"?Qt.exports=d():typeof define=="function"&&define.amd?define(d):(t=typeof globalThis!="undefined"?globalThis:t||self,t.Cropper=d())})(Zt,function(){"use strict";function t(r,e){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);e&&(i=i.filter(function(l){return Object.getOwnPropertyDescriptor(r,l).enumerable})),n.push.apply(n,i)}return n}function d(r){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?t(Object(n),!0).forEach(function(i){f(r,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach(function(i){Object.defineProperty(r,i,Object.getOwnPropertyDescriptor(n,i))})}return r}function s(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?s=function(e){return typeof e}:s=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(r)}function p(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function g(r,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function w(r,e,n){return e&&g(r.prototype,e),n&&g(r,n),r}function f(r,e,n){return e in r?Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[e]=n,r}function E(r){return y(r)||C(r)||c(r)||x()}function y(r){if(Array.isArray(r))return k(r)}function C(r){if(typeof Symbol!="undefined"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function c(r,e){if(!!r){if(typeof r=="string")return k(r,e);var n=Object.prototype.toString.call(r).slice(8,-1);if(n==="Object"&&r.constructor&&(n=r.constructor.name),n==="Map"||n==="Set")return Array.from(r);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return k(r,e)}}function k(r,e){(e==null||e>r.length)&&(e=r.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=r[n];return i}function x(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Y=typeof window!="undefined"&&typeof window.document!="undefined",M=Y?window:{},B=Y&&M.document.documentElement?"ontouchstart"in M.document.documentElement:!1,ht=Y?"PointerEvent"in M:!1,L="cropper",K="all",ie="crop",ne="move",re="zoom",ot="e",lt="w",ut="s",nt="n",bt="ne",At="nw",wt="se",xt="sw",Mt="".concat(L,"-crop"),ae="".concat(L,"-disabled"),W="".concat(L,"-hidden"),se="".concat(L,"-hide"),Qe="".concat(L,"-invisible"),Et="".concat(L,"-modal"),Bt="".concat(L,"-move"),yt="".concat(L,"Action"),Rt="".concat(L,"Preview"),Lt="crop",oe="move",le="none",It="crop",Ot="cropend",jt="cropmove",zt="cropstart",de="dblclick",ti=B?"touchstart":"mousedown",ei=B?"touchmove":"mousemove",ii=B?"touchend touchcancel":"mouseup",ce=ht?"pointerdown":ti,fe=ht?"pointermove":ei,pe=ht?"pointerup pointercancel":ii,he="ready",ue="resize",_e="wheel",$t="zoom",me="image/jpeg",ni=/^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/,ri=/^data:/,ai=/^data:image\/jpeg;base64,/,si=/^img|canvas$/i,ge=200,ve=100,be={viewMode:0,dragMode:Lt,initialAspectRatio:NaN,aspectRatio:NaN,data:null,preview:"",responsive:!0,restore:!0,checkCrossOrigin:!0,checkOrientation:!0,modal:!0,guides:!0,center:!0,highlight:!0,background:!0,autoCrop:!0,autoCropArea:.8,movable:!0,rotatable:!0,scalable:!0,zoomable:!0,zoomOnTouch:!0,zoomOnWheel:!0,wheelZoomRatio:.1,cropBoxMovable:!0,cropBoxResizable:!0,toggleDragModeOnDblclick:!0,minCanvasWidth:0,minCanvasHeight:0,minCropBoxWidth:0,minCropBoxHeight:0,minContainerWidth:ge,minContainerHeight:ve,ready:null,cropstart:null,cropmove:null,cropend:null,crop:null,zoom:null},oi='<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>',li=Number.isNaN||M.isNaN;function R(r){return typeof r=="number"&&!li(r)}var Ae=function(e){return e>0&&e<1/0};function Pt(r){return typeof r=="undefined"}function dt(r){return s(r)==="object"&&r!==null}var di=Object.prototype.hasOwnProperty;function _t(r){if(!dt(r))return!1;try{var e=r.constructor,n=e.prototype;return e&&n&&di.call(n,"isPrototypeOf")}catch(i){return!1}}function X(r){return typeof r=="function"}var ci=Array.prototype.slice;function we(r){return Array.from?Array.from(r):ci.call(r)}function j(r,e){return r&&X(e)&&(Array.isArray(r)||R(r.length)?we(r).forEach(function(n,i){e.call(r,n,i,r)}):dt(r)&&Object.keys(r).forEach(function(n){e.call(r,r[n],n,r)})),r}var I=Object.assign||function(e){for(var n=arguments.length,i=new Array(n>1?n-1:0),l=1;l<n;l++)i[l-1]=arguments[l];return dt(e)&&i.length>0&&i.forEach(function(a){dt(a)&&Object.keys(a).forEach(function(o){e[o]=a[o]})}),e},fi=/\.\d*(?:0|9){12}\d*$/;function mt(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e11;return fi.test(r)?Math.round(r*e)/e:r}var pi=/^width|height|left|top|marginLeft|marginTop$/;function rt(r,e){var n=r.style;j(e,function(i,l){pi.test(l)&&R(i)&&(i="".concat(i,"px")),n[l]=i})}function hi(r,e){return r.classList?r.classList.contains(e):r.className.indexOf(e)>-1}function H(r,e){if(!!e){if(R(r.length)){j(r,function(i){H(i,e)});return}if(r.classList){r.classList.add(e);return}var n=r.className.trim();n?n.indexOf(e)<0&&(r.className="".concat(n," ").concat(e)):r.className=e}}function Q(r,e){if(!!e){if(R(r.length)){j(r,function(n){Q(n,e)});return}if(r.classList){r.classList.remove(e);return}r.className.indexOf(e)>=0&&(r.className=r.className.replace(e,""))}}function gt(r,e,n){if(!!e){if(R(r.length)){j(r,function(i){gt(i,e,n)});return}n?H(r,e):Q(r,e)}}var ui=/([a-z\d])([A-Z])/g;function Ft(r){return r.replace(ui,"$1-$2").toLowerCase()}function Ht(r,e){return dt(r[e])?r[e]:r.dataset?r.dataset[e]:r.getAttribute("data-".concat(Ft(e)))}function Ct(r,e,n){dt(n)?r[e]=n:r.dataset?r.dataset[e]=n:r.setAttribute("data-".concat(Ft(e)),n)}function _i(r,e){if(dt(r[e]))try{delete r[e]}catch(n){r[e]=void 0}else if(r.dataset)try{delete r.dataset[e]}catch(n){r.dataset[e]=void 0}else r.removeAttribute("data-".concat(Ft(e)))}var xe=/\s\s*/,ye=function(){var r=!1;if(Y){var e=!1,n=function(){},i=Object.defineProperty({},"once",{get:function(){return r=!0,e},set:function(a){e=a}});M.addEventListener("test",n,i),M.removeEventListener("test",n,i)}return r}();function Z(r,e,n){var i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},l=n;e.trim().split(xe).forEach(function(a){if(!ye){var o=r.listeners;o&&o[a]&&o[a][n]&&(l=o[a][n],delete o[a][n],Object.keys(o[a]).length===0&&delete o[a],Object.keys(o).length===0&&delete r.listeners)}r.removeEventListener(a,l,i)})}function G(r,e,n){var i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},l=n;e.trim().split(xe).forEach(function(a){if(i.once&&!ye){var o=r.listeners,h=o===void 0?{}:o;l=function(){delete h[a][n],r.removeEventListener(a,l,i);for(var m=arguments.length,u=new Array(m),_=0;_<m;_++)u[_]=arguments[_];n.apply(r,u)},h[a]||(h[a]={}),h[a][n]&&r.removeEventListener(a,h[a][n],i),h[a][n]=l,r.listeners=h}r.addEventListener(a,l,i)})}function vt(r,e,n){var i;return X(Event)&&X(CustomEvent)?i=new CustomEvent(e,{detail:n,bubbles:!0,cancelable:!0}):(i=document.createEvent("CustomEvent"),i.initCustomEvent(e,!0,!0,n)),r.dispatchEvent(i)}function Ce(r){var e=r.getBoundingClientRect();return{left:e.left+(window.pageXOffset-document.documentElement.clientLeft),top:e.top+(window.pageYOffset-document.documentElement.clientTop)}}var Ut=M.location,mi=/^(\w+:)\/\/([^:/?#]*):?(\d*)/i;function ke(r){var e=r.match(mi);return e!==null&&(e[1]!==Ut.protocol||e[2]!==Ut.hostname||e[3]!==Ut.port)}function Ee(r){var e="timestamp=".concat(new Date().getTime());return r+(r.indexOf("?")===-1?"?":"&")+e}function kt(r){var e=r.rotate,n=r.scaleX,i=r.scaleY,l=r.translateX,a=r.translateY,o=[];R(l)&&l!==0&&o.push("translateX(".concat(l,"px)")),R(a)&&a!==0&&o.push("translateY(".concat(a,"px)")),R(e)&&e!==0&&o.push("rotate(".concat(e,"deg)")),R(n)&&n!==1&&o.push("scaleX(".concat(n,")")),R(i)&&i!==1&&o.push("scaleY(".concat(i,")"));var h=o.length?o.join(" "):"none";return{WebkitTransform:h,msTransform:h,transform:h}}function gi(r){var e=d({},r),n=0;return j(r,function(i,l){delete e[l],j(e,function(a){var o=Math.abs(i.startX-a.startX),h=Math.abs(i.startY-a.startY),b=Math.abs(i.endX-a.endX),m=Math.abs(i.endY-a.endY),u=Math.sqrt(o*o+h*h),_=Math.sqrt(b*b+m*m),v=(_-u)/u;Math.abs(v)>Math.abs(n)&&(n=v)})}),n}function St(r,e){var n=r.pageX,i=r.pageY,l={endX:n,endY:i};return e?l:d({startX:n,startY:i},l)}function vi(r){var e=0,n=0,i=0;return j(r,function(l){var a=l.startX,o=l.startY;e+=a,n+=o,i+=1}),e/=i,n/=i,{pageX:e,pageY:n}}function at(r){var e=r.aspectRatio,n=r.height,i=r.width,l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"contain",a=Ae(i),o=Ae(n);if(a&&o){var h=n*e;l==="contain"&&h>i||l==="cover"&&h<i?n=i/e:i=n*e}else a?n=i/e:o&&(i=n*e);return{width:i,height:n}}function bi(r){var e=r.width,n=r.height,i=r.degree;if(i=Math.abs(i)%180,i===90)return{width:n,height:e};var l=i%90*Math.PI/180,a=Math.sin(l),o=Math.cos(l),h=e*o+n*a,b=e*a+n*o;return i>90?{width:b,height:h}:{width:h,height:b}}function Ai(r,e,n,i){var l=e.aspectRatio,a=e.naturalWidth,o=e.naturalHeight,h=e.rotate,b=h===void 0?0:h,m=e.scaleX,u=m===void 0?1:m,_=e.scaleY,v=_===void 0?1:_,T=n.aspectRatio,S=n.naturalWidth,O=n.naturalHeight,D=i.fillColor,P=D===void 0?"transparent":D,U=i.imageSmoothingEnabled,z=U===void 0?!0:U,et=i.imageSmoothingQuality,q=et===void 0?"low":et,A=i.maxWidth,N=A===void 0?1/0:A,F=i.maxHeight,J=F===void 0?1/0:F,it=i.minWidth,ct=it===void 0?0:it,ft=i.minHeight,st=ft===void 0?0:ft,tt=document.createElement("canvas"),V=tt.getContext("2d"),pt=at({aspectRatio:T,width:N,height:J}),Tt=at({aspectRatio:T,width:ct,height:st},"cover"),Wt=Math.min(pt.width,Math.max(Tt.width,S)),Xt=Math.min(pt.height,Math.max(Tt.height,O)),Te=at({aspectRatio:l,width:N,height:J}),De=at({aspectRatio:l,width:ct,height:st},"cover"),Ne=Math.min(Te.width,Math.max(De.width,a)),Me=Math.min(Te.height,Math.max(De.height,o)),Li=[-Ne/2,-Me/2,Ne,Me];return tt.width=mt(Wt),tt.height=mt(Xt),V.fillStyle=P,V.fillRect(0,0,Wt,Xt),V.save(),V.translate(Wt/2,Xt/2),V.rotate(b*Math.PI/180),V.scale(u,v),V.imageSmoothingEnabled=z,V.imageSmoothingQuality=q,V.drawImage.apply(V,[r].concat(E(Li.map(function(Ii){return Math.floor(mt(Ii))})))),V.restore(),tt}var Re=String.fromCharCode;function wi(r,e,n){var i="";n+=e;for(var l=e;l<n;l+=1)i+=Re(r.getUint8(l));return i}var xi=/^data:.*,/;function yi(r){var e=r.replace(xi,""),n=atob(e),i=new ArrayBuffer(n.length),l=new Uint8Array(i);return j(l,function(a,o){l[o]=n.charCodeAt(o)}),i}function Ci(r,e){for(var n=[],i=8192,l=new Uint8Array(r);l.length>0;)n.push(Re.apply(null,we(l.subarray(0,i)))),l=l.subarray(i);return"data:".concat(e,";base64,").concat(btoa(n.join("")))}function ki(r){var e=new DataView(r),n;try{var i,l,a;if(e.getUint8(0)===255&&e.getUint8(1)===216)for(var o=e.byteLength,h=2;h+1<o;){if(e.getUint8(h)===255&&e.getUint8(h+1)===225){l=h;break}h+=1}if(l){var b=l+4,m=l+10;if(wi(e,b,4)==="Exif"){var u=e.getUint16(m);if(i=u===18761,(i||u===19789)&&e.getUint16(m+2,i)===42){var _=e.getUint32(m+4,i);_>=8&&(a=m+_)}}}if(a){var v=e.getUint16(a,i),T,S;for(S=0;S<v;S+=1)if(T=a+S*12+2,e.getUint16(T,i)===274){T+=8,n=e.getUint16(T,i),e.setUint16(T,1,i);break}}}catch(O){n=1}return n}function Ei(r){var e=0,n=1,i=1;switch(r){case 2:n=-1;break;case 3:e=-180;break;case 4:i=-1;break;case 5:e=90,i=-1;break;case 6:e=90;break;case 7:e=90,n=-1;break;case 8:e=-90;break}return{rotate:e,scaleX:n,scaleY:i}}var Ri={render:function(){this.initContainer(),this.initCanvas(),this.initCropBox(),this.renderCanvas(),this.cropped&&this.renderCropBox()},initContainer:function(){var e=this.element,n=this.options,i=this.container,l=this.cropper,a=Number(n.minContainerWidth),o=Number(n.minContainerHeight);H(l,W),Q(e,W);var h={width:Math.max(i.offsetWidth,a>=0?a:ge),height:Math.max(i.offsetHeight,o>=0?o:ve)};this.containerData=h,rt(l,{width:h.width,height:h.height}),H(e,W),Q(l,W)},initCanvas:function(){var e=this.containerData,n=this.imageData,i=this.options.viewMode,l=Math.abs(n.rotate)%180===90,a=l?n.naturalHeight:n.naturalWidth,o=l?n.naturalWidth:n.naturalHeight,h=a/o,b=e.width,m=e.height;e.height*h>e.width?i===3?b=e.height*h:m=e.width/h:i===3?m=e.width/h:b=e.height*h;var u={aspectRatio:h,naturalWidth:a,naturalHeight:o,width:b,height:m};this.canvasData=u,this.limited=i===1||i===2,this.limitCanvas(!0,!0),u.width=Math.min(Math.max(u.width,u.minWidth),u.maxWidth),u.height=Math.min(Math.max(u.height,u.minHeight),u.maxHeight),u.left=(e.width-u.width)/2,u.top=(e.height-u.height)/2,u.oldLeft=u.left,u.oldTop=u.top,this.initialCanvasData=I({},u)},limitCanvas:function(e,n){var i=this.options,l=this.containerData,a=this.canvasData,o=this.cropBoxData,h=i.viewMode,b=a.aspectRatio,m=this.cropped&&o;if(e){var u=Number(i.minCanvasWidth)||0,_=Number(i.minCanvasHeight)||0;h>1?(u=Math.max(u,l.width),_=Math.max(_,l.height),h===3&&(_*b>u?u=_*b:_=u/b)):h>0&&(u?u=Math.max(u,m?o.width:0):_?_=Math.max(_,m?o.height:0):m&&(u=o.width,_=o.height,_*b>u?u=_*b:_=u/b));var v=at({aspectRatio:b,width:u,height:_});u=v.width,_=v.height,a.minWidth=u,a.minHeight=_,a.maxWidth=1/0,a.maxHeight=1/0}if(n)if(h>(m?0:1)){var T=l.width-a.width,S=l.height-a.height;a.minLeft=Math.min(0,T),a.minTop=Math.min(0,S),a.maxLeft=Math.max(0,T),a.maxTop=Math.max(0,S),m&&this.limited&&(a.minLeft=Math.min(o.left,o.left+(o.width-a.width)),a.minTop=Math.min(o.top,o.top+(o.height-a.height)),a.maxLeft=o.left,a.maxTop=o.top,h===2&&(a.width>=l.width&&(a.minLeft=Math.min(0,T),a.maxLeft=Math.max(0,T)),a.height>=l.height&&(a.minTop=Math.min(0,S),a.maxTop=Math.max(0,S))))}else a.minLeft=-a.width,a.minTop=-a.height,a.maxLeft=l.width,a.maxTop=l.height},renderCanvas:function(e,n){var i=this.canvasData,l=this.imageData;if(n){var a=bi({width:l.naturalWidth*Math.abs(l.scaleX||1),height:l.naturalHeight*Math.abs(l.scaleY||1),degree:l.rotate||0}),o=a.width,h=a.height,b=i.width*(o/i.naturalWidth),m=i.height*(h/i.naturalHeight);i.left-=(b-i.width)/2,i.top-=(m-i.height)/2,i.width=b,i.height=m,i.aspectRatio=o/h,i.naturalWidth=o,i.naturalHeight=h,this.limitCanvas(!0,!1)}(i.width>i.maxWidth||i.width<i.minWidth)&&(i.left=i.oldLeft),(i.height>i.maxHeight||i.height<i.minHeight)&&(i.top=i.oldTop),i.width=Math.min(Math.max(i.width,i.minWidth),i.maxWidth),i.height=Math.min(Math.max(i.height,i.minHeight),i.maxHeight),this.limitCanvas(!1,!0),i.left=Math.min(Math.max(i.left,i.minLeft),i.maxLeft),i.top=Math.min(Math.max(i.top,i.minTop),i.maxTop),i.oldLeft=i.left,i.oldTop=i.top,rt(this.canvas,I({width:i.width,height:i.height},kt({translateX:i.left,translateY:i.top}))),this.renderImage(e),this.cropped&&this.limited&&this.limitCropBox(!0,!0)},renderImage:function(e){var n=this.canvasData,i=this.imageData,l=i.naturalWidth*(n.width/n.naturalWidth),a=i.naturalHeight*(n.height/n.naturalHeight);I(i,{width:l,height:a,left:(n.width-l)/2,top:(n.height-a)/2}),rt(this.image,I({width:i.width,height:i.height},kt(I({translateX:i.left,translateY:i.top},i)))),e&&this.output()},initCropBox:function(){var e=this.options,n=this.canvasData,i=e.aspectRatio||e.initialAspectRatio,l=Number(e.autoCropArea)||.8,a={width:n.width,height:n.height};i&&(n.height*i>n.width?a.height=a.width/i:a.width=a.height*i),this.cropBoxData=a,this.limitCropBox(!0,!0),a.width=Math.min(Math.max(a.width,a.minWidth),a.maxWidth),a.height=Math.min(Math.max(a.height,a.minHeight),a.maxHeight),a.width=Math.max(a.minWidth,a.width*l),a.height=Math.max(a.minHeight,a.height*l),a.left=n.left+(n.width-a.width)/2,a.top=n.top+(n.height-a.height)/2,a.oldLeft=a.left,a.oldTop=a.top,this.initialCropBoxData=I({},a)},limitCropBox:function(e,n){var i=this.options,l=this.containerData,a=this.canvasData,o=this.cropBoxData,h=this.limited,b=i.aspectRatio;if(e){var m=Number(i.minCropBoxWidth)||0,u=Number(i.minCropBoxHeight)||0,_=h?Math.min(l.width,a.width,a.width+a.left,l.width-a.left):l.width,v=h?Math.min(l.height,a.height,a.height+a.top,l.height-a.top):l.height;m=Math.min(m,l.width),u=Math.min(u,l.height),b&&(m&&u?u*b>m?u=m/b:m=u*b:m?u=m/b:u&&(m=u*b),v*b>_?v=_/b:_=v*b),o.minWidth=Math.min(m,_),o.minHeight=Math.min(u,v),o.maxWidth=_,o.maxHeight=v}n&&(h?(o.minLeft=Math.max(0,a.left),o.minTop=Math.max(0,a.top),o.maxLeft=Math.min(l.width,a.left+a.width)-o.width,o.maxTop=Math.min(l.height,a.top+a.height)-o.height):(o.minLeft=0,o.minTop=0,o.maxLeft=l.width-o.width,o.maxTop=l.height-o.height))},renderCropBox:function(){var e=this.options,n=this.containerData,i=this.cropBoxData;(i.width>i.maxWidth||i.width<i.minWidth)&&(i.left=i.oldLeft),(i.height>i.maxHeight||i.height<i.minHeight)&&(i.top=i.oldTop),i.width=Math.min(Math.max(i.width,i.minWidth),i.maxWidth),i.height=Math.min(Math.max(i.height,i.minHeight),i.maxHeight),this.limitCropBox(!1,!0),i.left=Math.min(Math.max(i.left,i.minLeft),i.maxLeft),i.top=Math.min(Math.max(i.top,i.minTop),i.maxTop),i.oldLeft=i.left,i.oldTop=i.top,e.movable&&e.cropBoxMovable&&Ct(this.face,yt,i.width>=n.width&&i.height>=n.height?ne:K),rt(this.cropBox,I({width:i.width,height:i.height},kt({translateX:i.left,translateY:i.top}))),this.cropped&&this.limited&&this.limitCanvas(!0,!0),this.disabled||this.output()},output:function(){this.preview(),vt(this.element,It,this.getData())}},Si={initPreview:function(){var e=this.element,n=this.crossOrigin,i=this.options.preview,l=n?this.crossOriginUrl:this.url,a=e.alt||"The image to preview",o=document.createElement("img");if(n&&(o.crossOrigin=n),o.src=l,o.alt=a,this.viewBox.appendChild(o),this.viewBoxImage=o,!!i){var h=i;typeof i=="string"?h=e.ownerDocument.querySelectorAll(i):i.querySelector&&(h=[i]),this.previews=h,j(h,function(b){var m=document.createElement("img");Ct(b,Rt,{width:b.offsetWidth,height:b.offsetHeight,html:b.innerHTML}),n&&(m.crossOrigin=n),m.src=l,m.alt=a,m.style.cssText='display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"',b.innerHTML="",b.appendChild(m)})}},resetPreview:function(){j(this.previews,function(e){var n=Ht(e,Rt);rt(e,{width:n.width,height:n.height}),e.innerHTML=n.html,_i(e,Rt)})},preview:function(){var e=this.imageData,n=this.canvasData,i=this.cropBoxData,l=i.width,a=i.height,o=e.width,h=e.height,b=i.left-n.left-e.left,m=i.top-n.top-e.top;!this.cropped||this.disabled||(rt(this.viewBoxImage,I({width:o,height:h},kt(I({translateX:-b,translateY:-m},e)))),j(this.previews,function(u){var _=Ht(u,Rt),v=_.width,T=_.height,S=v,O=T,D=1;l&&(D=v/l,O=a*D),a&&O>T&&(D=T/a,S=l*D,O=T),rt(u,{width:S,height:O}),rt(u.getElementsByTagName("img")[0],I({width:o*D,height:h*D},kt(I({translateX:-b*D,translateY:-m*D},e))))}))}},Ti={bind:function(){var e=this.element,n=this.options,i=this.cropper;X(n.cropstart)&&G(e,zt,n.cropstart),X(n.cropmove)&&G(e,jt,n.cropmove),X(n.cropend)&&G(e,Ot,n.cropend),X(n.crop)&&G(e,It,n.crop),X(n.zoom)&&G(e,$t,n.zoom),G(i,ce,this.onCropStart=this.cropStart.bind(this)),n.zoomable&&n.zoomOnWheel&&G(i,_e,this.onWheel=this.wheel.bind(this),{passive:!1,capture:!0}),n.toggleDragModeOnDblclick&&G(i,de,this.onDblclick=this.dblclick.bind(this)),G(e.ownerDocument,fe,this.onCropMove=this.cropMove.bind(this)),G(e.ownerDocument,pe,this.onCropEnd=this.cropEnd.bind(this)),n.responsive&&G(window,ue,this.onResize=this.resize.bind(this))},unbind:function(){var e=this.element,n=this.options,i=this.cropper;X(n.cropstart)&&Z(e,zt,n.cropstart),X(n.cropmove)&&Z(e,jt,n.cropmove),X(n.cropend)&&Z(e,Ot,n.cropend),X(n.crop)&&Z(e,It,n.crop),X(n.zoom)&&Z(e,$t,n.zoom),Z(i,ce,this.onCropStart),n.zoomable&&n.zoomOnWheel&&Z(i,_e,this.onWheel,{passive:!1,capture:!0}),n.toggleDragModeOnDblclick&&Z(i,de,this.onDblclick),Z(e.ownerDocument,fe,this.onCropMove),Z(e.ownerDocument,pe,this.onCropEnd),n.responsive&&Z(window,ue,this.onResize)}},Di={resize:function(){if(!this.disabled){var e=this.options,n=this.container,i=this.containerData,l=n.offsetWidth/i.width,a=n.offsetHeight/i.height,o=Math.abs(l-1)>Math.abs(a-1)?l:a;if(o!==1){var h,b;e.restore&&(h=this.getCanvasData(),b=this.getCropBoxData()),this.render(),e.restore&&(this.setCanvasData(j(h,function(m,u){h[u]=m*o})),this.setCropBoxData(j(b,function(m,u){b[u]=m*o})))}}},dblclick:function(){this.disabled||this.options.dragMode===le||this.setDragMode(hi(this.dragBox,Mt)?oe:Lt)},wheel:function(e){var n=this,i=Number(this.options.wheelZoomRatio)||.1,l=1;this.disabled||(e.preventDefault(),!this.wheeling&&(this.wheeling=!0,setTimeout(function(){n.wheeling=!1},50),e.deltaY?l=e.deltaY>0?1:-1:e.wheelDelta?l=-e.wheelDelta/120:e.detail&&(l=e.detail>0?1:-1),this.zoom(-l*i,e)))},cropStart:function(e){var n=e.buttons,i=e.button;if(!(this.disabled||(e.type==="mousedown"||e.type==="pointerdown"&&e.pointerType==="mouse")&&(R(n)&&n!==1||R(i)&&i!==0||e.ctrlKey))){var l=this.options,a=this.pointers,o;e.changedTouches?j(e.changedTouches,function(h){a[h.identifier]=St(h)}):a[e.pointerId||0]=St(e),Object.keys(a).length>1&&l.zoomable&&l.zoomOnTouch?o=re:o=Ht(e.target,yt),!!ni.test(o)&&vt(this.element,zt,{originalEvent:e,action:o})!==!1&&(e.preventDefault(),this.action=o,this.cropping=!1,o===ie&&(this.cropping=!0,H(this.dragBox,Et)))}},cropMove:function(e){var n=this.action;if(!(this.disabled||!n)){var i=this.pointers;e.preventDefault(),vt(this.element,jt,{originalEvent:e,action:n})!==!1&&(e.changedTouches?j(e.changedTouches,function(l){I(i[l.identifier]||{},St(l,!0))}):I(i[e.pointerId||0]||{},St(e,!0)),this.change(e))}},cropEnd:function(e){if(!this.disabled){var n=this.action,i=this.pointers;e.changedTouches?j(e.changedTouches,function(l){delete i[l.identifier]}):delete i[e.pointerId||0],n&&(e.preventDefault(),Object.keys(i).length||(this.action=""),this.cropping&&(this.cropping=!1,gt(this.dragBox,Et,this.cropped&&this.options.modal)),vt(this.element,Ot,{originalEvent:e,action:n}))}}},Ni={change:function(e){var n=this.options,i=this.canvasData,l=this.containerData,a=this.cropBoxData,o=this.pointers,h=this.action,b=n.aspectRatio,m=a.left,u=a.top,_=a.width,v=a.height,T=m+_,S=u+v,O=0,D=0,P=l.width,U=l.height,z=!0,et;!b&&e.shiftKey&&(b=_&&v?_/v:1),this.limited&&(O=a.minLeft,D=a.minTop,P=O+Math.min(l.width,i.width,i.left+i.width),U=D+Math.min(l.height,i.height,i.top+i.height));var q=o[Object.keys(o)[0]],A={x:q.endX-q.startX,y:q.endY-q.startY},N=function(J){switch(J){case ot:T+A.x>P&&(A.x=P-T);break;case lt:m+A.x<O&&(A.x=O-m);break;case nt:u+A.y<D&&(A.y=D-u);break;case ut:S+A.y>U&&(A.y=U-S);break}};switch(h){case K:m+=A.x,u+=A.y;break;case ot:if(A.x>=0&&(T>=P||b&&(u<=D||S>=U))){z=!1;break}N(ot),_+=A.x,_<0&&(h=lt,_=-_,m-=_),b&&(v=_/b,u+=(a.height-v)/2);break;case nt:if(A.y<=0&&(u<=D||b&&(m<=O||T>=P))){z=!1;break}N(nt),v-=A.y,u+=A.y,v<0&&(h=ut,v=-v,u-=v),b&&(_=v*b,m+=(a.width-_)/2);break;case lt:if(A.x<=0&&(m<=O||b&&(u<=D||S>=U))){z=!1;break}N(lt),_-=A.x,m+=A.x,_<0&&(h=ot,_=-_,m-=_),b&&(v=_/b,u+=(a.height-v)/2);break;case ut:if(A.y>=0&&(S>=U||b&&(m<=O||T>=P))){z=!1;break}N(ut),v+=A.y,v<0&&(h=nt,v=-v,u-=v),b&&(_=v*b,m+=(a.width-_)/2);break;case bt:if(b){if(A.y<=0&&(u<=D||T>=P)){z=!1;break}N(nt),v-=A.y,u+=A.y,_=v*b}else N(nt),N(ot),A.x>=0?T<P?_+=A.x:A.y<=0&&u<=D&&(z=!1):_+=A.x,A.y<=0?u>D&&(v-=A.y,u+=A.y):(v-=A.y,u+=A.y);_<0&&v<0?(h=xt,v=-v,_=-_,u-=v,m-=_):_<0?(h=At,_=-_,m-=_):v<0&&(h=wt,v=-v,u-=v);break;case At:if(b){if(A.y<=0&&(u<=D||m<=O)){z=!1;break}N(nt),v-=A.y,u+=A.y,_=v*b,m+=a.width-_}else N(nt),N(lt),A.x<=0?m>O?(_-=A.x,m+=A.x):A.y<=0&&u<=D&&(z=!1):(_-=A.x,m+=A.x),A.y<=0?u>D&&(v-=A.y,u+=A.y):(v-=A.y,u+=A.y);_<0&&v<0?(h=wt,v=-v,_=-_,u-=v,m-=_):_<0?(h=bt,_=-_,m-=_):v<0&&(h=xt,v=-v,u-=v);break;case xt:if(b){if(A.x<=0&&(m<=O||S>=U)){z=!1;break}N(lt),_-=A.x,m+=A.x,v=_/b}else N(ut),N(lt),A.x<=0?m>O?(_-=A.x,m+=A.x):A.y>=0&&S>=U&&(z=!1):(_-=A.x,m+=A.x),A.y>=0?S<U&&(v+=A.y):v+=A.y;_<0&&v<0?(h=bt,v=-v,_=-_,u-=v,m-=_):_<0?(h=wt,_=-_,m-=_):v<0&&(h=At,v=-v,u-=v);break;case wt:if(b){if(A.x>=0&&(T>=P||S>=U)){z=!1;break}N(ot),_+=A.x,v=_/b}else N(ut),N(ot),A.x>=0?T<P?_+=A.x:A.y>=0&&S>=U&&(z=!1):_+=A.x,A.y>=0?S<U&&(v+=A.y):v+=A.y;_<0&&v<0?(h=At,v=-v,_=-_,u-=v,m-=_):_<0?(h=xt,_=-_,m-=_):v<0&&(h=bt,v=-v,u-=v);break;case ne:this.move(A.x,A.y),z=!1;break;case re:this.zoom(gi(o),e),z=!1;break;case ie:if(!A.x||!A.y){z=!1;break}et=Ce(this.cropper),m=q.startX-et.left,u=q.startY-et.top,_=a.minWidth,v=a.minHeight,A.x>0?h=A.y>0?wt:bt:A.x<0&&(m-=_,h=A.y>0?xt:At),A.y<0&&(u-=v),this.cropped||(Q(this.cropBox,W),this.cropped=!0,this.limited&&this.limitCropBox(!0,!0));break}z&&(a.width=_,a.height=v,a.left=m,a.top=u,this.action=h,this.renderCropBox()),j(o,function(F){F.startX=F.endX,F.startY=F.endY})}},Mi={crop:function(){return this.ready&&!this.cropped&&!this.disabled&&(this.cropped=!0,this.limitCropBox(!0,!0),this.options.modal&&H(this.dragBox,Et),Q(this.cropBox,W),this.setCropBoxData(this.initialCropBoxData)),this},reset:function(){return this.ready&&!this.disabled&&(this.imageData=I({},this.initialImageData),this.canvasData=I({},this.initialCanvasData),this.cropBoxData=I({},this.initialCropBoxData),this.renderCanvas(),this.cropped&&this.renderCropBox()),this},clear:function(){return this.cropped&&!this.disabled&&(I(this.cropBoxData,{left:0,top:0,width:0,height:0}),this.cropped=!1,this.renderCropBox(),this.limitCanvas(!0,!0),this.renderCanvas(),Q(this.dragBox,Et),H(this.cropBox,W)),this},replace:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return!this.disabled&&e&&(this.isImg&&(this.element.src=e),n?(this.url=e,this.image.src=e,this.ready&&(this.viewBoxImage.src=e,j(this.previews,function(i){i.getElementsByTagName("img")[0].src=e}))):(this.isImg&&(this.replaced=!0),this.options.data=null,this.uncreate(),this.load(e))),this},enable:function(){return this.ready&&this.disabled&&(this.disabled=!1,Q(this.cropper,ae)),this},disable:function(){return this.ready&&!this.disabled&&(this.disabled=!0,H(this.cropper,ae)),this},destroy:function(){var e=this.element;return e[L]?(e[L]=void 0,this.isImg&&this.replaced&&(e.src=this.originalUrl),this.uncreate(),this):this},move:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e,i=this.canvasData,l=i.left,a=i.top;return this.moveTo(Pt(e)?e:l+Number(e),Pt(n)?n:a+Number(n))},moveTo:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e,i=this.canvasData,l=!1;return e=Number(e),n=Number(n),this.ready&&!this.disabled&&this.options.movable&&(R(e)&&(i.left=e,l=!0),R(n)&&(i.top=n,l=!0),l&&this.renderCanvas(!0)),this},zoom:function(e,n){var i=this.canvasData;return e=Number(e),e<0?e=1/(1-e):e=1+e,this.zoomTo(i.width*e/i.naturalWidth,null,n)},zoomTo:function(e,n,i){var l=this.options,a=this.canvasData,o=a.width,h=a.height,b=a.naturalWidth,m=a.naturalHeight;if(e=Number(e),e>=0&&this.ready&&!this.disabled&&l.zoomable){var u=b*e,_=m*e;if(vt(this.element,$t,{ratio:e,oldRatio:o/b,originalEvent:i})===!1)return this;if(i){var v=this.pointers,T=Ce(this.cropper),S=v&&Object.keys(v).length?vi(v):{pageX:i.pageX,pageY:i.pageY};a.left-=(u-o)*((S.pageX-T.left-a.left)/o),a.top-=(_-h)*((S.pageY-T.top-a.top)/h)}else _t(n)&&R(n.x)&&R(n.y)?(a.left-=(u-o)*((n.x-a.left)/o),a.top-=(_-h)*((n.y-a.top)/h)):(a.left-=(u-o)/2,a.top-=(_-h)/2);a.width=u,a.height=_,this.renderCanvas(!0)}return this},rotate:function(e){return this.rotateTo((this.imageData.rotate||0)+Number(e))},rotateTo:function(e){return e=Number(e),R(e)&&this.ready&&!this.disabled&&this.options.rotatable&&(this.imageData.rotate=e%360,this.renderCanvas(!0,!0)),this},scaleX:function(e){var n=this.imageData.scaleY;return this.scale(e,R(n)?n:1)},scaleY:function(e){var n=this.imageData.scaleX;return this.scale(R(n)?n:1,e)},scale:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e,i=this.imageData,l=!1;return e=Number(e),n=Number(n),this.ready&&!this.disabled&&this.options.scalable&&(R(e)&&(i.scaleX=e,l=!0),R(n)&&(i.scaleY=n,l=!0),l&&this.renderCanvas(!0,!0)),this},getData:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,n=this.options,i=this.imageData,l=this.canvasData,a=this.cropBoxData,o;if(this.ready&&this.cropped){o={x:a.left-l.left,y:a.top-l.top,width:a.width,height:a.height};var h=i.width/i.naturalWidth;if(j(o,function(u,_){o[_]=u/h}),e){var b=Math.round(o.y+o.height),m=Math.round(o.x+o.width);o.x=Math.round(o.x),o.y=Math.round(o.y),o.width=m-o.x,o.height=b-o.y}}else o={x:0,y:0,width:0,height:0};return n.rotatable&&(o.rotate=i.rotate||0),n.scalable&&(o.scaleX=i.scaleX||1,o.scaleY=i.scaleY||1),o},setData:function(e){var n=this.options,i=this.imageData,l=this.canvasData,a={};if(this.ready&&!this.disabled&&_t(e)){var o=!1;n.rotatable&&R(e.rotate)&&e.rotate!==i.rotate&&(i.rotate=e.rotate,o=!0),n.scalable&&(R(e.scaleX)&&e.scaleX!==i.scaleX&&(i.scaleX=e.scaleX,o=!0),R(e.scaleY)&&e.scaleY!==i.scaleY&&(i.scaleY=e.scaleY,o=!0)),o&&this.renderCanvas(!0,!0);var h=i.width/i.naturalWidth;R(e.x)&&(a.left=e.x*h+l.left),R(e.y)&&(a.top=e.y*h+l.top),R(e.width)&&(a.width=e.width*h),R(e.height)&&(a.height=e.height*h),this.setCropBoxData(a)}return this},getContainerData:function(){return this.ready?I({},this.containerData):{}},getImageData:function(){return this.sized?I({},this.imageData):{}},getCanvasData:function(){var e=this.canvasData,n={};return this.ready&&j(["left","top","width","height","naturalWidth","naturalHeight"],function(i){n[i]=e[i]}),n},setCanvasData:function(e){var n=this.canvasData,i=n.aspectRatio;return this.ready&&!this.disabled&&_t(e)&&(R(e.left)&&(n.left=e.left),R(e.top)&&(n.top=e.top),R(e.width)?(n.width=e.width,n.height=e.width/i):R(e.height)&&(n.height=e.height,n.width=e.height*i),this.renderCanvas(!0)),this},getCropBoxData:function(){var e=this.cropBoxData,n;return this.ready&&this.cropped&&(n={left:e.left,top:e.top,width:e.width,height:e.height}),n||{}},setCropBoxData:function(e){var n=this.cropBoxData,i=this.options.aspectRatio,l,a;return this.ready&&this.cropped&&!this.disabled&&_t(e)&&(R(e.left)&&(n.left=e.left),R(e.top)&&(n.top=e.top),R(e.width)&&e.width!==n.width&&(l=!0,n.width=e.width),R(e.height)&&e.height!==n.height&&(a=!0,n.height=e.height),i&&(l?n.height=n.width/i:a&&(n.width=n.height*i)),this.renderCropBox()),this},getCroppedCanvas:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!this.ready||!window.HTMLCanvasElement)return null;var n=this.canvasData,i=Ai(this.image,this.imageData,n,e);if(!this.cropped)return i;var l=this.getData(),a=l.x,o=l.y,h=l.width,b=l.height,m=i.width/Math.floor(n.naturalWidth);m!==1&&(a*=m,o*=m,h*=m,b*=m);var u=h/b,_=at({aspectRatio:u,width:e.maxWidth||1/0,height:e.maxHeight||1/0}),v=at({aspectRatio:u,width:e.minWidth||0,height:e.minHeight||0},"cover"),T=at({aspectRatio:u,width:e.width||(m!==1?i.width:h),height:e.height||(m!==1?i.height:b)}),S=T.width,O=T.height;S=Math.min(_.width,Math.max(v.width,S)),O=Math.min(_.height,Math.max(v.height,O));var D=document.createElement("canvas"),P=D.getContext("2d");D.width=mt(S),D.height=mt(O),P.fillStyle=e.fillColor||"transparent",P.fillRect(0,0,S,O);var U=e.imageSmoothingEnabled,z=U===void 0?!0:U,et=e.imageSmoothingQuality;P.imageSmoothingEnabled=z,et&&(P.imageSmoothingQuality=et);var q=i.width,A=i.height,N=a,F=o,J,it,ct,ft,st,tt;N<=-h||N>q?(N=0,J=0,ct=0,st=0):N<=0?(ct=-N,N=0,J=Math.min(q,h+N),st=J):N<=q&&(ct=0,J=Math.min(h,q-N),st=J),J<=0||F<=-b||F>A?(F=0,it=0,ft=0,tt=0):F<=0?(ft=-F,F=0,it=Math.min(A,b+F),tt=it):F<=A&&(ft=0,it=Math.min(b,A-F),tt=it);var V=[N,F,J,it];if(st>0&&tt>0){var pt=S/h;V.push(ct*pt,ft*pt,st*pt,tt*pt)}return P.drawImage.apply(P,[i].concat(E(V.map(function(Tt){return Math.floor(mt(Tt))})))),D},setAspectRatio:function(e){var n=this.options;return!this.disabled&&!Pt(e)&&(n.aspectRatio=Math.max(0,e)||NaN,this.ready&&(this.initCropBox(),this.cropped&&this.renderCropBox())),this},setDragMode:function(e){var n=this.options,i=this.dragBox,l=this.face;if(this.ready&&!this.disabled){var a=e===Lt,o=n.movable&&e===oe;e=a||o?e:le,n.dragMode=e,Ct(i,yt,e),gt(i,Mt,a),gt(i,Bt,o),n.cropBoxMovable||(Ct(l,yt,e),gt(l,Mt,a),gt(l,Bt,o))}return this}},Bi=M.Cropper,Se=function(){function r(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(p(this,r),!e||!si.test(e.tagName))throw new Error("The first argument is required and must be an <img> or <canvas> element.");this.element=e,this.options=I({},be,_t(n)&&n),this.cropped=!1,this.disabled=!1,this.pointers={},this.ready=!1,this.reloading=!1,this.replaced=!1,this.sized=!1,this.sizing=!1,this.init()}return w(r,[{key:"init",value:function(){var n=this.element,i=n.tagName.toLowerCase(),l;if(!n[L]){if(n[L]=this,i==="img"){if(this.isImg=!0,l=n.getAttribute("src")||"",this.originalUrl=l,!l)return;l=n.src}else i==="canvas"&&window.HTMLCanvasElement&&(l=n.toDataURL());this.load(l)}}},{key:"load",value:function(n){var i=this;if(!!n){this.url=n,this.imageData={};var l=this.element,a=this.options;if(!a.rotatable&&!a.scalable&&(a.checkOrientation=!1),!a.checkOrientation||!window.ArrayBuffer){this.clone();return}if(ri.test(n)){ai.test(n)?this.read(yi(n)):this.clone();return}var o=new XMLHttpRequest,h=this.clone.bind(this);this.reloading=!0,this.xhr=o,o.onabort=h,o.onerror=h,o.ontimeout=h,o.onprogress=function(){o.getResponseHeader("content-type")!==me&&o.abort()},o.onload=function(){i.read(o.response)},o.onloadend=function(){i.reloading=!1,i.xhr=null},a.checkCrossOrigin&&ke(n)&&l.crossOrigin&&(n=Ee(n)),o.open("GET",n,!0),o.responseType="arraybuffer",o.withCredentials=l.crossOrigin==="use-credentials",o.send()}}},{key:"read",value:function(n){var i=this.options,l=this.imageData,a=ki(n),o=0,h=1,b=1;if(a>1){this.url=Ci(n,me);var m=Ei(a);o=m.rotate,h=m.scaleX,b=m.scaleY}i.rotatable&&(l.rotate=o),i.scalable&&(l.scaleX=h,l.scaleY=b),this.clone()}},{key:"clone",value:function(){var n=this.element,i=this.url,l=n.crossOrigin,a=i;this.options.checkCrossOrigin&&ke(i)&&(l||(l="anonymous"),a=Ee(i)),this.crossOrigin=l,this.crossOriginUrl=a;var o=document.createElement("img");l&&(o.crossOrigin=l),o.src=a||i,o.alt=n.alt||"The image to crop",this.image=o,o.onload=this.start.bind(this),o.onerror=this.stop.bind(this),H(o,se),n.parentNode.insertBefore(o,n.nextSibling)}},{key:"start",value:function(){var n=this,i=this.image;i.onload=null,i.onerror=null,this.sizing=!0;var l=M.navigator&&/(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(M.navigator.userAgent),a=function(m,u){I(n.imageData,{naturalWidth:m,naturalHeight:u,aspectRatio:m/u}),n.initialImageData=I({},n.imageData),n.sizing=!1,n.sized=!0,n.build()};if(i.naturalWidth&&!l){a(i.naturalWidth,i.naturalHeight);return}var o=document.createElement("img"),h=document.body||document.documentElement;this.sizingImage=o,o.onload=function(){a(o.width,o.height),l||h.removeChild(o)},o.src=i.src,l||(o.style.cssText="left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;",h.appendChild(o))}},{key:"stop",value:function(){var n=this.image;n.onload=null,n.onerror=null,n.parentNode.removeChild(n),this.image=null}},{key:"build",value:function(){if(!(!this.sized||this.ready)){var n=this.element,i=this.options,l=this.image,a=n.parentNode,o=document.createElement("div");o.innerHTML=oi;var h=o.querySelector(".".concat(L,"-container")),b=h.querySelector(".".concat(L,"-canvas")),m=h.querySelector(".".concat(L,"-drag-box")),u=h.querySelector(".".concat(L,"-crop-box")),_=u.querySelector(".".concat(L,"-face"));this.container=a,this.cropper=h,this.canvas=b,this.dragBox=m,this.cropBox=u,this.viewBox=h.querySelector(".".concat(L,"-view-box")),this.face=_,b.appendChild(l),H(n,W),a.insertBefore(h,n.nextSibling),this.isImg||Q(l,se),this.initPreview(),this.bind(),i.initialAspectRatio=Math.max(0,i.initialAspectRatio)||NaN,i.aspectRatio=Math.max(0,i.aspectRatio)||NaN,i.viewMode=Math.max(0,Math.min(3,Math.round(i.viewMode)))||0,H(u,W),i.guides||H(u.getElementsByClassName("".concat(L,"-dashed")),W),i.center||H(u.getElementsByClassName("".concat(L,"-center")),W),i.background&&H(h,"".concat(L,"-bg")),i.highlight||H(_,Qe),i.cropBoxMovable&&(H(_,Bt),Ct(_,yt,K)),i.cropBoxResizable||(H(u.getElementsByClassName("".concat(L,"-line")),W),H(u.getElementsByClassName("".concat(L,"-point")),W)),this.render(),this.ready=!0,this.setDragMode(i.dragMode),i.autoCrop&&this.crop(),this.setData(i.data),X(i.ready)&&G(n,he,i.ready,{once:!0}),vt(n,he)}}},{key:"unbuild",value:function(){!this.ready||(this.ready=!1,this.unbind(),this.resetPreview(),this.cropper.parentNode.removeChild(this.cropper),Q(this.element,W))}},{key:"uncreate",value:function(){this.ready?(this.unbuild(),this.ready=!1,this.cropped=!1):this.sizing?(this.sizingImage.onload=null,this.sizing=!1,this.sized=!1):this.reloading?(this.xhr.onabort=null,this.xhr.abort()):this.image&&this.stop()}}],[{key:"noConflict",value:function(){return window.Cropper=Bi,r}},{key:"setDefaults",value:function(n){I(be,_t(n)&&n)}}]),r}();return I(Se.prototype,Ri,Si,Ti,Di,Ni,Mi),Se})});var Wi={name:"ProgressRing",props:{primary:String,secondary:String,radius:Number,progress:Number,stroke:Number},data(){let t=this.radius-this.stroke*2,d=t*2*Math.PI;return{normalizedRadius:t,circumference:d}},computed:{strokeDashoffset(){return this.circumference-this.progress/100*this.circumference}}},je=function(){var t=this,d=t.$createElement,s=t._self._c||d;return s("svg",{attrs:{height:t.radius*2,width:t.radius*2}},[s("circle",{style:{stroke:t.secondary,strokeDashoffset:0},attrs:{"stroke-dasharray":t.circumference+" "+t.circumference,"stroke-width":t.stroke,fill:"transparent",r:t.normalizedRadius,cx:t.radius,cy:t.radius}}),t._v(" "),s("circle",{style:{stroke:t.primary,strokeDashoffset:t.strokeDashoffset},attrs:{"stroke-dasharray":t.circumference+" "+t.circumference,"stroke-width":t.stroke,fill:"transparent",r:t.normalizedRadius,cx:t.radius,cy:t.radius}}),t._v(" "),s("text",{style:{color:"var(--text-color)",fontSize:"var(--text-xs)",fontWeight:"var(--text-bold)"},attrs:{"dominant-baseline":"middle","text-anchor":"middle",x:t.radius,y:t.radius}},[t._v(`
		`+t._s(t.progress)+`%
	`)])])},Xi=[];je._withStripped=!0;var Vi=function(t){!t||t("data-v-4e9dbc79_0",{source:`
circle[data-v-4e9dbc79] {
	transition: stroke-dashoffset 0.35s;
	transform: rotate(-90deg);
	transform-origin: 50% 50%;
}
`,map:{version:3,sources:["frappe/public/js/frappe/file_uploader/ProgressRing.vue"],names:[],mappings:";AAoEA;CACA,mCAAA;CACA,yBAAA;CACA,yBAAA;AACA",file:"ProgressRing.vue",sourcesContent:[`<template>
	<svg :height="radius * 2" :width="radius * 2">
		<circle
			:stroke-dasharray="circumference + ' ' + circumference"
			:style="{
				stroke: secondary,
				strokeDashoffset: 0,
			}"
			:stroke-width="stroke"
			fill="transparent"
			:r="normalizedRadius"
			:cx="radius"
			:cy="radius"
		/>
		<circle
			:stroke-dasharray="circumference + ' ' + circumference"
			:style="{
				stroke: primary,
				strokeDashoffset: strokeDashoffset,
			}"
			:stroke-width="stroke"
			fill="transparent"
			:r="normalizedRadius"
			:cx="radius"
			:cy="radius"
		/>
		<text
			dominant-baseline="middle"
			text-anchor="middle"
			:x="radius"
			:y="radius"
			:style="{
				color: 'var(--text-color)',
				fontSize: 'var(--text-xs)',
				fontWeight: 'var(--text-bold)',
			}"
		>
			{{ progress }}%
		</text>
	</svg>
</template>
<script>
export default {
	name: "ProgressRing",
	props: {
		primary: String,
		secondary: String,
		radius: Number,
		progress: Number,
		stroke: Number,
	},
	data() {
		const normalizedRadius = this.radius - this.stroke * 2;
		const circumference = normalizedRadius * 2 * Math.PI;

		return {
			normalizedRadius,
			circumference,
		};
	},
	computed: {
		strokeDashoffset() {
			return this.circumference - (this.progress / 100) * this.circumference;
		},
	},
};
<\/script>
<style scoped>
circle {
	transition: stroke-dashoffset 0.35s;
	transform: rotate(-90deg);
	transform-origin: 50% 50%;
}
</style>
`]},media:void 0})},Yi="data-v-4e9dbc79",qi=void 0,Gi=!1;function Ji(t,d,s,p,g,w,f,E,y,C){let c=(typeof s=="function"?s.options:s)||{};c.__file="frappe/public/js/frappe/file_uploader/ProgressRing.vue",c.render||(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0,g&&(c.functional=!0)),c._scopeId=p;{let k;if(d&&(k=f?function(x){d.call(this,C(x,this.$root.$options.shadowRoot))}:function(x){d.call(this,E(x))}),k!==void 0)if(c.functional){let x=c.render;c.render=function(M,B){return k.call(B),x(M,B)}}else{let x=c.beforeCreate;c.beforeCreate=x?[].concat(x,k):[k]}}return c}function Yt(){let t=Yt.styles||(Yt.styles={}),d=typeof navigator!="undefined"&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(p,g){if(document.querySelector('style[data-vue-ssr-id~="'+p+'"]'))return;let w=d?g.media||"default":p,f=t[w]||(t[w]={ids:[],parts:[],element:void 0});if(!f.ids.includes(p)){let E=g.source,y=f.ids.length;if(f.ids.push(p),d&&(f.element=f.element||document.querySelector("style[data-group="+w+"]")),!f.element){let C=document.head||document.getElementsByTagName("head")[0],c=f.element=document.createElement("style");c.type="text/css",g.media&&c.setAttribute("media",g.media),d&&(c.setAttribute("data-group",w),c.setAttribute("data-next-index","0")),C.appendChild(c)}if(d&&(y=parseInt(f.element.getAttribute("data-next-index")),f.element.setAttribute("data-next-index",y+1)),f.element.styleSheet)f.parts.push(E),f.element.styleSheet.cssText=f.parts.filter(Boolean).join(`
`);else{let C=document.createTextNode(E),c=f.element.childNodes;c[y]&&f.element.removeChild(c[y]),c.length?f.element.insertBefore(C,c[y]):f.element.appendChild(C)}}}}var Ki=Ji({render:je,staticRenderFns:Xi},Vi,Wi,Yi,Gi,qi,!1,Yt,void 0,void 0),ze=Ki;var Zi={name:"FilePreview",props:["file"],components:{ProgressRing:ze},data(){return{src:null,optimize:this.file.optimize}},mounted(){if(this.is_image&&window.FileReader){let t=new FileReader;t.onload=()=>this.src=t.result,t.readAsDataURL(this.file.file_obj)}},filters:{file_size(t){return frappe.form.formatters.FileSize(t)},file_name(t){return t}},computed:{is_private(){return this.file.doc?this.file.doc.is_private:this.file.private},uploaded(){return this.file.request_succeeded},is_image(){return this.file.file_obj.type.startsWith("image")},is_optimizable(){let t=this.file.file_obj.type=="image/svg+xml";return this.is_image&&!t&&!this.uploaded&&!this.file.failed},is_cropable(){let t=["image/jpeg","image/png"];return!this.uploaded&&!this.file.uploading&&!this.file.failed&&t.includes(this.file.file_obj.type)},progress(){let t=Math.round(this.file.progress*100/this.file.total);return isNaN(t)&&(t=0),t},isRTL(){return document.documentElement.getAttribute("dir")==="rtl"}}},$e=function(){var t=this,d=t.$createElement,s=t._self._c||d;return s("div",{staticClass:"file-preview"},[s("div",{staticClass:"file-icon"},[t.is_image?s("img",{attrs:{src:t.src,alt:t.file.name}}):s("div",{staticClass:"fallback",domProps:{innerHTML:t._s(t.frappe.utils.icon("file","md"))}})]),t._v(" "),s("div",[s("div",[t.file.doc?s("a",{staticClass:"flex",attrs:{href:t.file.doc.file_url,target:"_blank"}},[s("span",{staticClass:"file-name"},[t._v(t._s(t._f("file_name")(t.file.name)))])]):s("span",{staticClass:"file-name"},[t._v(t._s(t._f("file_name")(t.file.name)))])]),t._v(" "),s("div",[s("span",{staticClass:"file-size"},[t._v(`
				`+t._s(t._f("file_size")(t.file.file_obj.size))+`
			`)])]),t._v(" "),s("div",[t.file.error_message?s("span",{staticClass:"file-error text-danger"},[t._v(`
				`+t._s(t.file.error_message)+`
			`)]):t._e()])]),t._v(" "),s("div",{class:["file-actions",{"rtl-style":t.isRTL}]},[s("ProgressRing",{directives:[{name:"show",rawName:"v-show",value:t.file.uploading&&!t.uploaded&&!t.file.failed,expression:"file.uploading && !uploaded && !file.failed"}],attrs:{primary:"var(--primary-color)",secondary:"var(--gray-200)",radius:24,progress:t.progress,stroke:3}}),t._v(" "),t.uploaded?s("div",{domProps:{innerHTML:t._s(t.frappe.utils.icon("solid-success","lg"))}}):t._e(),t._v(" "),t.file.failed?s("div",{domProps:{innerHTML:t._s(t.frappe.utils.icon("solid-error","lg"))}}):t._e(),t._v(" "),s("div",{staticClass:"file-action-buttons"},[t.is_cropable?s("button",{staticClass:"btn btn-crop muted",domProps:{innerHTML:t._s(t.frappe.utils.icon("crop","md"))},on:{click:function(p){return t.$emit("toggle_image_cropper")}}}):t._e(),t._v(" "),!t.uploaded&&!t.file.uploading&&!t.file.failed?s("button",{staticClass:"btn muted",domProps:{innerHTML:t._s(t.frappe.utils.icon("delete","md"))},on:{click:function(p){return t.$emit("remove")}}}):t._e()])],1)])},Qi=[];$e._withStripped=!0;var tn=function(t){!t||t("data-v-438ca772_0",{source:`
.file-preview {
	display: flex;
	align-items: center;
	padding: 0.75rem;
	border: 1px solid transparent;
}
.file-preview + .file-preview {
	border-top-color: var(--border-color);
}
.file-preview:hover {
	background-color: var(--bg-color);
	border-color: var(--dark-border-color);
	border-radius: var(--border-radius);
}
.file-preview:hover + .file-preview {
	border-top-color: transparent;
}
.file-icon {
	border-radius: var(--border-radius);
	width: 2.625rem;
	height: 2.625rem;
	overflow: hidden;
	margin-right: var(--margin-md);
	flex-shrink: 0;
}
.file-icon img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}
.file-icon .fallback {
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid var(--border-color);
	border-radius: var(--border-radius);
}
.file-name {
	font-size: var(--text-base);
	font-weight: var(--text-bold);
	color: var(--text-color);
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	overflow: hidden;
}
.file-size {
	font-size: var(--text-sm);
	color: var(--text-light);
}
.file-actions {
	width: 3rem;
	flex-shrink: 0;
	margin-left: auto;
	text-align: center;
}
.file-actions .btn {
	padding: var(--padding-xs);
	box-shadow: none;
}
.file-action-buttons {
	display: flex;
	justify-content: flex-end;
}
.muted {
	opacity: 0.5;
	transition: 0.3s;
}
.muted:hover {
	opacity: 1;
}
.frappe-checkbox {
	font-size: var(--text-sm);
	color: var(--text-light);
	display: flex;
	align-items: center;
	padding-top: 0.25rem;
}
.config-area {
	gap: 0.5rem;
}
.file-error {
	font-size: var(--text-sm);
	font-weight: var(--text-bold);
}
.rtl-style {
	margin-left: 0;
    margin-right: auto;
}
`,map:{version:3,sources:["../akwad_frappe_fixes/akwad_frappe_fixes/public/js/file_uploader/FilePreview.vue"],names:[],mappings:";AAuHA;CACA,aAAA;CACA,mBAAA;CACA,gBAAA;CACA,6BAAA;AACA;AAEA;CACA,qCAAA;AACA;AAEA;CACA,iCAAA;CACA,sCAAA;CACA,mCAAA;AACA;AAEA;CACA,6BAAA;AACA;AAEA;CACA,mCAAA;CACA,eAAA;CACA,gBAAA;CACA,gBAAA;CACA,8BAAA;CACA,cAAA;AACA;AAEA;CACA,WAAA;CACA,YAAA;CACA,iBAAA;AACA;AAEA;CACA,WAAA;CACA,YAAA;CACA,aAAA;CACA,mBAAA;CACA,uBAAA;CACA,qCAAA;CACA,mCAAA;AACA;AAEA;CACA,2BAAA;CACA,6BAAA;CACA,wBAAA;CACA,oBAAA;CACA,qBAAA;CACA,4BAAA;CACA,gBAAA;AACA;AAEA;CACA,yBAAA;CACA,wBAAA;AACA;AAEA;CACA,WAAA;CACA,cAAA;CACA,iBAAA;CACA,kBAAA;AACA;AAEA;CACA,0BAAA;CACA,gBAAA;AACA;AAEA;CACA,aAAA;CACA,yBAAA;AACA;AAEA;CACA,YAAA;CACA,gBAAA;AACA;AAEA;CACA,UAAA;AACA;AAEA;CACA,yBAAA;CACA,wBAAA;CACA,aAAA;CACA,mBAAA;CACA,oBAAA;AACA;AAEA;CACA,WAAA;AACA;AAEA;CACA,yBAAA;CACA,6BAAA;AACA;AAEA;CACA,cAAA;IACA,kBAAA;AACA",file:"FilePreview.vue",sourcesContent:[`<template>
	<div class="file-preview">
		<div class="file-icon">
			<img
				v-if="is_image"
				:src="src"
				:alt="file.name"
			>
			<div class="fallback" v-else v-html="frappe.utils.icon('file', 'md')">
			</div>
		</div>
		<div>
			<div>
				<a class="flex" :href="file.doc.file_url" v-if="file.doc" target="_blank">
					<span class="file-name">{{ file.name | file_name }}</span>
				</a>
				<span class="file-name" v-else>{{ file.name | file_name }}</span>
			</div>

			<div>
				<span class="file-size">
					{{ file.file_obj.size | file_size }}
				</span>
			</div>

			<!-- <div class="flex config-area">
				<label v-if="is_optimizable" class="frappe-checkbox"><input type="checkbox" :checked="optimize" @change="$emit('toggle_optimize')">Optimize</label>
				<label class="frappe-checkbox"><input type="checkbox" :checked="file.private" @change="$emit('toggle_private')">Private</label>
			</div> -->
			<div>
				<span v-if="file.error_message" class="file-error text-danger">
					{{ file.error_message }}
				</span>
			</div>
		</div>
		<div :class="['file-actions', {'rtl-style': isRTL}]">
			<ProgressRing
				v-show="file.uploading && !uploaded && !file.failed"
				primary="var(--primary-color)"
				secondary="var(--gray-200)"
				:radius="24"
				:progress="progress"
				:stroke="3"
			/>
			<div v-if="uploaded" v-html="frappe.utils.icon('solid-success', 'lg')"></div>
			<div v-if="file.failed" v-html="frappe.utils.icon('solid-error', 'lg')"></div>
			<div class="file-action-buttons">
				<button v-if="is_cropable" class="btn btn-crop muted" @click="$emit('toggle_image_cropper')" v-html="frappe.utils.icon('crop', 'md')"></button>
				<button v-if="!uploaded && !file.uploading && !file.failed" class="btn muted" @click="$emit('remove')" v-html="frappe.utils.icon('delete', 'md')"></button>
			</div>
		</div>
	</div>
</template>

<script>
import ProgressRing from '../../../../../frappe/frappe/public/js/frappe/file_uploader/ProgressRing.vue';
export default {
	name: 'FilePreview',
	props: ['file'],
	components: {
		ProgressRing
	},
	data() {
		return {
			src: null,
			optimize: this.file.optimize
		}
	},
	mounted() {
		if (this.is_image) {
			if (window.FileReader) {
				let fr = new FileReader();
				fr.onload = () => this.src = fr.result;
				fr.readAsDataURL(this.file.file_obj);
			}
		}
	},
	filters: {
		file_size(value) {
			return frappe.form.formatters.FileSize(value);
		},
		file_name(value) {
			return value;
			// return frappe.utils.file_name_ellipsis(value, 9);
		}
	},
	computed: {
		is_private() {
			return this.file.doc ? this.file.doc.is_private : this.file.private;
		},
		uploaded() {
			return this.file.request_succeeded;
		},
		is_image() {
			return this.file.file_obj.type.startsWith('image');
		},
		is_optimizable() {
			let is_svg = this.file.file_obj.type == 'image/svg+xml';
			return this.is_image && !is_svg && !this.uploaded && !this.file.failed;
		},
		is_cropable() {
			let croppable_types = ['image/jpeg', 'image/png'];
			return !this.uploaded && !this.file.uploading && !this.file.failed && croppable_types.includes(this.file.file_obj.type);
		},
		progress() {
			let value = Math.round((this.file.progress * 100) / this.file.total);
			if (isNaN(value)) {
				value = 0;
			}
			return value;
		},
		isRTL() {
        	return document.documentElement.getAttribute('dir') === 'rtl';
    	}
	}
}
<\/script>

<style>
.file-preview {
	display: flex;
	align-items: center;
	padding: 0.75rem;
	border: 1px solid transparent;
}

.file-preview + .file-preview {
	border-top-color: var(--border-color);
}

.file-preview:hover {
	background-color: var(--bg-color);
	border-color: var(--dark-border-color);
	border-radius: var(--border-radius);
}

.file-preview:hover + .file-preview {
	border-top-color: transparent;
}

.file-icon {
	border-radius: var(--border-radius);
	width: 2.625rem;
	height: 2.625rem;
	overflow: hidden;
	margin-right: var(--margin-md);
	flex-shrink: 0;
}

.file-icon img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.file-icon .fallback {
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid var(--border-color);
	border-radius: var(--border-radius);
}

.file-name {
	font-size: var(--text-base);
	font-weight: var(--text-bold);
	color: var(--text-color);
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	overflow: hidden;
}

.file-size {
	font-size: var(--text-sm);
	color: var(--text-light);
}

.file-actions {
	width: 3rem;
	flex-shrink: 0;
	margin-left: auto;
	text-align: center;
}

.file-actions .btn {
	padding: var(--padding-xs);
	box-shadow: none;
}

.file-action-buttons {
	display: flex;
	justify-content: flex-end;
}

.muted {
	opacity: 0.5;
	transition: 0.3s;
}

.muted:hover {
	opacity: 1;
}

.frappe-checkbox {
	font-size: var(--text-sm);
	color: var(--text-light);
	display: flex;
	align-items: center;
	padding-top: 0.25rem;
}

.config-area {
	gap: 0.5rem;
}

.file-error {
	font-size: var(--text-sm);
	font-weight: var(--text-bold);
}

.rtl-style {
	margin-left: 0;
    margin-right: auto;
}
</style>
`]},media:void 0})},en=void 0,nn=void 0,rn=!1;function an(t,d,s,p,g,w,f,E,y,C){let c=(typeof s=="function"?s.options:s)||{};c.__file="../akwad_frappe_fixes/akwad_frappe_fixes/public/js/file_uploader/FilePreview.vue",c.render||(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0,g&&(c.functional=!0)),c._scopeId=p;{let k;if(d&&(k=f?function(x){d.call(this,C(x,this.$root.$options.shadowRoot))}:function(x){d.call(this,E(x))}),k!==void 0)if(c.functional){let x=c.render;c.render=function(M,B){return k.call(B),x(M,B)}}else{let x=c.beforeCreate;c.beforeCreate=x?[].concat(x,k):[k]}}return c}function qt(){let t=qt.styles||(qt.styles={}),d=typeof navigator!="undefined"&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(p,g){if(document.querySelector('style[data-vue-ssr-id~="'+p+'"]'))return;let w=d?g.media||"default":p,f=t[w]||(t[w]={ids:[],parts:[],element:void 0});if(!f.ids.includes(p)){let E=g.source,y=f.ids.length;if(f.ids.push(p),d&&(f.element=f.element||document.querySelector("style[data-group="+w+"]")),!f.element){let C=document.head||document.getElementsByTagName("head")[0],c=f.element=document.createElement("style");c.type="text/css",g.media&&c.setAttribute("media",g.media),d&&(c.setAttribute("data-group",w),c.setAttribute("data-next-index","0")),C.appendChild(c)}if(d&&(y=parseInt(f.element.getAttribute("data-next-index")),f.element.setAttribute("data-next-index",y+1)),f.element.styleSheet)f.parts.push(E),f.element.styleSheet.cssText=f.parts.filter(Boolean).join(`
`);else{let C=document.createTextNode(E),c=f.element.childNodes;c[y]&&f.element.removeChild(c[y]),c.length?f.element.insertBefore(C,c[y]):f.element.appendChild(C)}}}}var sn=an({render:$e,staticRenderFns:Qi},tn,Zi,en,rn,nn,!1,qt,void 0,void 0),Pe=sn;var on={name:"TreeNode",props:["node","selected_node"],components:{TreeNode:()=>frappe.ui.components.TreeNode},computed:{icon(){let t={open:frappe.utils.icon("folder-open","md"),closed:frappe.utils.icon("folder-normal","md"),leaf:frappe.utils.icon("primitive-dot","xs"),search:frappe.utils.icon("search")};return this.node.by_search?t.search:this.node.is_leaf?t.leaf:this.node.open?t.open:t.closed}}},Fe=function(){var t=this,d=t.$createElement,s=t._self._c||d;return s("div",{staticClass:"tree-node",class:{opened:t.node.open}},[s("span",{staticClass:"tree-link",class:{active:t.node.value===t.selected_node.value},attrs:{disabled:t.node.fetching},on:{click:function(p){return t.$emit("node-click",t.node)}}},[s("div",{domProps:{innerHTML:t._s(t.icon)}}),t._v(" "),s("a",{staticClass:"tree-label"},[t._v(t._s(t.node.label))])]),t._v(" "),s("ul",{directives:[{name:"show",rawName:"v-show",value:t.node.open,expression:"node.open"}],staticClass:"tree-children"},[t._l(t.node.children,function(p){return s("TreeNode",{key:p.value,attrs:{node:p,selected_node:t.selected_node},on:{"node-click":function(g){return t.$emit("node-click",g)},"load-more":function(g){return t.$emit("load-more",g)}}})}),t._v(" "),t.node.has_more_children?s("button",{staticClass:"btn btn-xs btn-load-more",attrs:{disabled:t.node.children_loading},on:{click:function(p){return t.$emit("load-more",t.node)}}},[t._v(`
			`+t._s(t.node.children_loading?t.__("Loading..."):t.__("Load more"))+`
		`)]):t._e()],2)])},ln=[];Fe._withStripped=!0;var dn=function(t){!t||t("data-v-50ef8742_0",{source:`
.btn-load-more[data-v-50ef8742] {
	margin-left: 1.6rem;
	margin-top: 0.5rem;
}
`,map:{version:3,sources:["frappe/public/js/frappe/file_uploader/TreeNode.vue"],names:[],mappings:";AAwDA;CACA,mBAAA;CACA,kBAAA;AACA",file:"TreeNode.vue",sourcesContent:[`<template>
	<div class="tree-node" :class="{ opened: node.open }">
		<span
			class="tree-link"
			@click="$emit('node-click', node)"
			:class="{ active: node.value === selected_node.value }"
			:disabled="node.fetching"
		>
			<div v-html="icon"></div>
			<a class="tree-label">{{ node.label }}</a>
		</span>
		<ul class="tree-children" v-show="node.open">
			<TreeNode
				v-for="n in node.children"
				:key="n.value"
				:node="n"
				:selected_node="selected_node"
				@node-click="(n) => $emit('node-click', n)"
				@load-more="(n) => $emit('load-more', n)"
			/>
			<button
				class="btn btn-xs btn-load-more"
				v-if="node.has_more_children"
				@click="$emit('load-more', node)"
				:disabled="node.children_loading"
			>
				{{ node.children_loading ? __("Loading...") : __("Load more") }}
			</button>
		</ul>
	</div>
</template>
<script>
export default {
	name: "TreeNode",
	props: ["node", "selected_node"],
	components: {
		TreeNode: () => frappe.ui.components.TreeNode,
	},
	computed: {
		icon() {
			let icons = {
				open: frappe.utils.icon("folder-open", "md"),
				closed: frappe.utils.icon("folder-normal", "md"),
				leaf: frappe.utils.icon("primitive-dot", "xs"),
				search: frappe.utils.icon("search"),
			};

			if (this.node.by_search) return icons.search;
			if (this.node.is_leaf) return icons.leaf;
			if (this.node.open) return icons.open;
			return icons.closed;
		},
	},
};
<\/script>
<style scoped>
.btn-load-more {
	margin-left: 1.6rem;
	margin-top: 0.5rem;
}
</style>
`]},media:void 0})},cn="data-v-50ef8742",fn=void 0,pn=!1;function hn(t,d,s,p,g,w,f,E,y,C){let c=(typeof s=="function"?s.options:s)||{};c.__file="frappe/public/js/frappe/file_uploader/TreeNode.vue",c.render||(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0,g&&(c.functional=!0)),c._scopeId=p;{let k;if(d&&(k=f?function(x){d.call(this,C(x,this.$root.$options.shadowRoot))}:function(x){d.call(this,E(x))}),k!==void 0)if(c.functional){let x=c.render;c.render=function(M,B){return k.call(B),x(M,B)}}else{let x=c.beforeCreate;c.beforeCreate=x?[].concat(x,k):[k]}}return c}function Gt(){let t=Gt.styles||(Gt.styles={}),d=typeof navigator!="undefined"&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(p,g){if(document.querySelector('style[data-vue-ssr-id~="'+p+'"]'))return;let w=d?g.media||"default":p,f=t[w]||(t[w]={ids:[],parts:[],element:void 0});if(!f.ids.includes(p)){let E=g.source,y=f.ids.length;if(f.ids.push(p),d&&(f.element=f.element||document.querySelector("style[data-group="+w+"]")),!f.element){let C=document.head||document.getElementsByTagName("head")[0],c=f.element=document.createElement("style");c.type="text/css",g.media&&c.setAttribute("media",g.media),d&&(c.setAttribute("data-group",w),c.setAttribute("data-next-index","0")),C.appendChild(c)}if(d&&(y=parseInt(f.element.getAttribute("data-next-index")),f.element.setAttribute("data-next-index",y+1)),f.element.styleSheet)f.parts.push(E),f.element.styleSheet.cssText=f.parts.filter(Boolean).join(`
`);else{let C=document.createTextNode(E),c=f.element.childNodes;c[y]&&f.element.removeChild(c[y]),c.length?f.element.insertBefore(C,c[y]):f.element.appendChild(C)}}}}var un=hn({render:Fe,staticRenderFns:ln},dn,on,cn,pn,fn,!1,Gt,void 0,void 0),He=un;var _n={name:"FileBrowser",components:{TreeNode:He},data(){return{node:{label:__("Home"),value:"Home",children:[],children_start:0,children_loading:!1,is_leaf:!1,fetching:!1,fetched:!1,open:!1,filtered:!0},selected_node:{},search_text:"",page_length:10}},mounted(){this.toggle_node(this.node)},methods:{toggle_node(t){!t.fetched&&!t.is_leaf?(t.fetching=!0,t.children_start=0,t.children_loading=!1,this.get_files_in_folder(t.value,0).then(({files:d,has_more:s})=>{t.open=!0,t.children=d,t.fetched=!0,t.fetching=!1,t.children_start+=this.page_length,t.has_more_children=s})):(t.open=!t.open,this.select_node(t))},load_more(t){if(t.has_more_children){let d=t.children_start;t.children_loading=!0,this.get_files_in_folder(t.value,d).then(({files:s,has_more:p})=>{t.children=t.children.concat(s),t.children_start+=this.page_length,t.has_more_children=p,t.children_loading=!1})}},select_node(t){t.is_leaf&&(this.selected_node=t)},get_files_in_folder(t,d){return frappe.call("frappe.core.api.file.get_files_in_folder",{folder:t,start:d,page_length:this.page_length}).then(s=>{let{files:p=[],has_more:g=!1}=s.message||{};return p.sort((w,f)=>w.is_folder&&f.is_folder?w.modified<f.modified?-1:1:w.is_folder?-1:f.is_folder?1:0),p=p.map(w=>this.make_file_node(w)),{files:p,has_more:g}})},search_by_name:frappe.utils.debounce(function(){if(this.search_text===""){this.node=this.folder_node;return}this.search_text.length<3||frappe.call("frappe.core.api.file.get_files_by_search_text",{text:this.search_text}).then(t=>{let d=t.message||[];d=d.map(s=>this.make_file_node(s)),this.folder_node||(this.folder_node=this.node),this.node={label:__("Search Results"),value:"",children:d,by_search:!0,open:!0,filtered:!0}})},300),make_file_node(t){let d=t.file_name||t.name;return{label:frappe.utils.file_name_ellipsis(d,40),filename:d,file_url:t.file_url,value:t.name,is_leaf:!t.is_folder,fetched:!t.is_folder,children:[],children_loading:!1,children_start:0,open:!1,fetching:!1,filtered:!0}}}},Ue=function(){var t=this,d=t.$createElement,s=t._self._c||d;return s("div",{staticClass:"file-browser"},[s("div",[s("a",{staticClass:"text-muted text-medium",attrs:{href:""},on:{click:function(p){return p.preventDefault(),t.$emit("hide-browser")}}},[t._v(`
			`+t._s(t.__("\u2190 Back to upload files"))+`
		`)])]),t._v(" "),s("div",{staticClass:"file-browser-list"},[s("div",{staticClass:"file-filter"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.search_text,expression:"search_text"}],staticClass:"form-control input-xs",attrs:{type:"search",placeholder:t.__("Search by filename or extension")},domProps:{value:t.search_text},on:{input:[function(p){p.target.composing||(t.search_text=p.target.value)},t.search_by_name]}})]),t._v(" "),s("TreeNode",{staticClass:"tree with-skeleton",attrs:{node:t.node,selected_node:t.selected_node},on:{"node-click":function(p){return t.toggle_node(p)},"load-more":function(p){return t.load_more(p)}}})],1)])},mn=[];Ue._withStripped=!0;var gn=function(t){!t||t("data-v-1183ad38_0",{source:`
.file-browser-list {
	height: 300px;
	overflow: hidden;
	margin-top: 10px;
}
.file-filter {
	padding: 3px;
}
.tree {
	overflow: auto;
	height: 100%;
	padding-left: 0;
	padding-right: 0;
	padding-bottom: 4rem;
}
`,map:{version:3,sources:["frappe/public/js/frappe/file_uploader/FileBrowser.vue"],names:[],mappings:";AAuKA;CACA,aAAA;CACA,gBAAA;CACA,gBAAA;AACA;AAEA;CACA,YAAA;AACA;AAEA;CACA,cAAA;CACA,YAAA;CACA,eAAA;CACA,gBAAA;CACA,oBAAA;AACA",file:"FileBrowser.vue",sourcesContent:[`<template>
	<div class="file-browser">
		<div>
			<a href="" class="text-muted text-medium" @click.prevent="$emit('hide-browser')">
				{{ __("\u2190 Back to upload files") }}
			</a>
		</div>
		<div class="file-browser-list">
			<div class="file-filter">
				<input
					type="search"
					class="form-control input-xs"
					:placeholder="__('Search by filename or extension')"
					v-model="search_text"
					@input="search_by_name"
				/>
			</div>
			<TreeNode
				class="tree with-skeleton"
				:node="node"
				:selected_node="selected_node"
				@node-click="(n) => toggle_node(n)"
				@load-more="(n) => load_more(n)"
			/>
		</div>
	</div>
</template>
<script>
import TreeNode from "./TreeNode.vue";

export default {
	name: "FileBrowser",
	components: {
		TreeNode,
	},
	data() {
		return {
			node: {
				label: __("Home"),
				value: "Home",
				children: [],
				children_start: 0,
				children_loading: false,
				is_leaf: false,
				fetching: false,
				fetched: false,
				open: false,
				filtered: true,
			},
			selected_node: {},
			search_text: "",
			page_length: 10,
		};
	},
	mounted() {
		this.toggle_node(this.node);
	},
	methods: {
		toggle_node(node) {
			if (!node.fetched && !node.is_leaf) {
				node.fetching = true;
				node.children_start = 0;
				node.children_loading = false;
				this.get_files_in_folder(node.value, 0).then(({ files, has_more }) => {
					node.open = true;
					node.children = files;
					node.fetched = true;
					node.fetching = false;
					node.children_start += this.page_length;
					node.has_more_children = has_more;
				});
			} else {
				node.open = !node.open;
				this.select_node(node);
			}
		},
		load_more(node) {
			if (node.has_more_children) {
				let start = node.children_start;
				node.children_loading = true;
				this.get_files_in_folder(node.value, start).then(({ files, has_more }) => {
					node.children = node.children.concat(files);
					node.children_start += this.page_length;
					node.has_more_children = has_more;
					node.children_loading = false;
				});
			}
		},
		select_node(node) {
			if (node.is_leaf) {
				this.selected_node = node;
			}
		},
		get_files_in_folder(folder, start) {
			return frappe
				.call("frappe.core.api.file.get_files_in_folder", {
					folder,
					start,
					page_length: this.page_length,
				})
				.then((r) => {
					let { files = [], has_more = false } = r.message || {};
					files.sort((a, b) => {
						if (a.is_folder && b.is_folder) {
							return a.modified < b.modified ? -1 : 1;
						}
						if (a.is_folder) {
							return -1;
						}
						if (b.is_folder) {
							return 1;
						}
						return 0;
					});
					files = files.map((file) => this.make_file_node(file));
					return { files, has_more };
				});
		},
		search_by_name: frappe.utils.debounce(function () {
			if (this.search_text === "") {
				this.node = this.folder_node;
				return;
			}
			if (this.search_text.length < 3) return;
			frappe
				.call("frappe.core.api.file.get_files_by_search_text", {
					text: this.search_text,
				})
				.then((r) => {
					let files = r.message || [];
					files = files.map((file) => this.make_file_node(file));
					if (!this.folder_node) {
						this.folder_node = this.node;
					}
					this.node = {
						label: __("Search Results"),
						value: "",
						children: files,
						by_search: true,
						open: true,
						filtered: true,
					};
				});
		}, 300),
		make_file_node(file) {
			let filename = file.file_name || file.name;
			let label = frappe.utils.file_name_ellipsis(filename, 40);
			return {
				label: label,
				filename: filename,
				file_url: file.file_url,
				value: file.name,
				is_leaf: !file.is_folder,
				fetched: !file.is_folder, // fetched if node is leaf
				children: [],
				children_loading: false,
				children_start: 0,
				open: false,
				fetching: false,
				filtered: true,
			};
		},
	},
};
<\/script>

<style>
.file-browser-list {
	height: 300px;
	overflow: hidden;
	margin-top: 10px;
}

.file-filter {
	padding: 3px;
}

.tree {
	overflow: auto;
	height: 100%;
	padding-left: 0;
	padding-right: 0;
	padding-bottom: 4rem;
}
</style>
`]},media:void 0})},vn=void 0,bn=void 0,An=!1;function wn(t,d,s,p,g,w,f,E,y,C){let c=(typeof s=="function"?s.options:s)||{};c.__file="frappe/public/js/frappe/file_uploader/FileBrowser.vue",c.render||(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0,g&&(c.functional=!0)),c._scopeId=p;{let k;if(d&&(k=f?function(x){d.call(this,C(x,this.$root.$options.shadowRoot))}:function(x){d.call(this,E(x))}),k!==void 0)if(c.functional){let x=c.render;c.render=function(M,B){return k.call(B),x(M,B)}}else{let x=c.beforeCreate;c.beforeCreate=x?[].concat(x,k):[k]}}return c}function Jt(){let t=Jt.styles||(Jt.styles={}),d=typeof navigator!="undefined"&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(p,g){if(document.querySelector('style[data-vue-ssr-id~="'+p+'"]'))return;let w=d?g.media||"default":p,f=t[w]||(t[w]={ids:[],parts:[],element:void 0});if(!f.ids.includes(p)){let E=g.source,y=f.ids.length;if(f.ids.push(p),d&&(f.element=f.element||document.querySelector("style[data-group="+w+"]")),!f.element){let C=document.head||document.getElementsByTagName("head")[0],c=f.element=document.createElement("style");c.type="text/css",g.media&&c.setAttribute("media",g.media),d&&(c.setAttribute("data-group",w),c.setAttribute("data-next-index","0")),C.appendChild(c)}if(d&&(y=parseInt(f.element.getAttribute("data-next-index")),f.element.setAttribute("data-next-index",y+1)),f.element.styleSheet)f.parts.push(E),f.element.styleSheet.cssText=f.parts.filter(Boolean).join(`
`);else{let C=document.createTextNode(E),c=f.element.childNodes;c[y]&&f.element.removeChild(c[y]),c.length?f.element.insertBefore(C,c[y]):f.element.appendChild(C)}}}}var xn=wn({render:Ue,staticRenderFns:mn},gn,_n,vn,An,bn,!1,Jt,void 0,void 0),We=xn;var yn={name:"WebLink",data(){return{url:""}}},Xe=function(){var t=this,d=t.$createElement,s=t._self._c||d;return s("div",{staticClass:"file-web-link margin-bottom"},[s("a",{staticClass:"text-muted text-medium",attrs:{href:""},on:{click:function(p){return p.preventDefault(),t.$emit("hide-web-link")}}},[t._v(`
		`+t._s(t.__("\u2190 Back to upload files"))+`
	`)]),t._v(" "),s("div",{staticClass:"input-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.url,expression:"url"}],staticClass:"form-control",attrs:{type:"text",placeholder:t.__("Attach a web link")},domProps:{value:t.url},on:{input:function(p){p.target.composing||(t.url=p.target.value)}}})])])},Cn=[];Xe._withStripped=!0;var kn=function(t){!t||t("data-v-0c146ac5_0",{source:`
.file-web-link .input-group {
	margin-top: 10px;
}
`,map:{version:3,sources:["frappe/public/js/frappe/file_uploader/WebLink.vue"],names:[],mappings:";AA2BA;CACA,gBAAA;AACA",file:"WebLink.vue",sourcesContent:[`<template>
	<div class="file-web-link margin-bottom">
		<a href class="text-muted text-medium" @click.prevent="$emit('hide-web-link')">
			{{ __("\u2190 Back to upload files") }}
		</a>
		<div class="input-group">
			<input
				type="text"
				class="form-control"
				:placeholder="__('Attach a web link')"
				v-model="url"
			/>
		</div>
	</div>
</template>
<script>
export default {
	name: "WebLink",
	data() {
		return {
			url: "",
		};
	},
};
<\/script>

<style>
.file-web-link .input-group {
	margin-top: 10px;
}
</style>
`]},media:void 0})},En=void 0,Rn=void 0,Sn=!1;function Tn(t,d,s,p,g,w,f,E,y,C){let c=(typeof s=="function"?s.options:s)||{};c.__file="frappe/public/js/frappe/file_uploader/WebLink.vue",c.render||(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0,g&&(c.functional=!0)),c._scopeId=p;{let k;if(d&&(k=f?function(x){d.call(this,C(x,this.$root.$options.shadowRoot))}:function(x){d.call(this,E(x))}),k!==void 0)if(c.functional){let x=c.render;c.render=function(M,B){return k.call(B),x(M,B)}}else{let x=c.beforeCreate;c.beforeCreate=x?[].concat(x,k):[k]}}return c}function Kt(){let t=Kt.styles||(Kt.styles={}),d=typeof navigator!="undefined"&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(p,g){if(document.querySelector('style[data-vue-ssr-id~="'+p+'"]'))return;let w=d?g.media||"default":p,f=t[w]||(t[w]={ids:[],parts:[],element:void 0});if(!f.ids.includes(p)){let E=g.source,y=f.ids.length;if(f.ids.push(p),d&&(f.element=f.element||document.querySelector("style[data-group="+w+"]")),!f.element){let C=document.head||document.getElementsByTagName("head")[0],c=f.element=document.createElement("style");c.type="text/css",g.media&&c.setAttribute("media",g.media),d&&(c.setAttribute("data-group",w),c.setAttribute("data-next-index","0")),C.appendChild(c)}if(d&&(y=parseInt(f.element.getAttribute("data-next-index")),f.element.setAttribute("data-next-index",y+1)),f.element.styleSheet)f.parts.push(E),f.element.styleSheet.cssText=f.parts.filter(Boolean).join(`
`);else{let C=document.createTextNode(E),c=f.element.childNodes;c[y]&&f.element.removeChild(c[y]),c.length?f.element.insertBefore(C,c[y]):f.element.appendChild(C)}}}}var Dn=Tn({render:Xe,staticRenderFns:Cn},kn,yn,En,Sn,Rn,!1,Kt,void 0,void 0),Ve=Dn;var Dt=class{constructor({pickerCallback:d,enabled:s,appId:p,developerKey:g,clientId:w}={}){this.scope=["https://www.googleapis.com/auth/drive.readonly"],this.pickerApiLoaded=!1,this.enabled=s,this.appId=p,this.pickerCallback=d,this.developerKey=g,this.clientId=w}loadPicker(){$.ajax({method:"GET",url:"https://apis.google.com/js/api.js",dataType:"script",cache:!0}).done(this.loadGapi.bind(this))}loadGapi(){frappe.boot.user.google_drive_token||gapi.load("auth",this.onAuthApiLoad.bind(this)),gapi.load("picker",this.onPickerApiLoad.bind(this))}onAuthApiLoad(){gapi.auth.authorize({client_id:this.clientId,scope:this.scope,immediate:!1},this.handleAuthResult.bind(this))}handleAuthResult(d){let s={popup_closed_by_user:__("Google Authentication was closed abruptly by the user")};if(d&&!d.error)frappe.boot.user.google_drive_token=d.access_token,this.createPicker();else{let p=s[d.error]||__("Google Authentication Error");frappe.throw(p)}}onPickerApiLoad(){this.pickerApiLoaded=!0,this.createPicker()}createPicker(){this.pickerApiLoaded&&frappe.boot.user.google_drive_token&&(this.view=new google.picker.DocsView(google.picker.ViewId.DOCS).setParent("root").setIncludeFolders(!0),this.picker=new google.picker.PickerBuilder().setAppId(this.appId).setDeveloperKey(this.developerKey).setOAuthToken(frappe.boot.user.google_drive_token).addView(this.view).setLocale(frappe.boot.lang).setCallback(this.pickerCallback).build(),this.picker.setVisible(!0),this.setupHide())}setupHide(){let d=$(".picker-dialog-bg");for(let s of d)s.onclick=()=>{this.picker.setVisible(!1),this.picker.Ob({action:google.picker.Action.CANCEL})}}};var qe=Ui(Ye()),Nn={name:"ImageCropper",props:["file","fixed_aspect_ratio"],data(){let t=this.fixed_aspect_ratio!=null?this.fixed_aspect_ratio:NaN;return{src:null,cropper:null,image:null,aspect_ratio:t}},watch:{aspect_ratio(t){this.cropper&&this.cropper.setAspectRatio(t)}},mounted(){if(window.FileReader){let d=new FileReader;d.onload=()=>this.src=d.result,d.readAsDataURL(this.file.cropper_file)}let t=this.file.crop_box_data;this.image=this.$refs.image,this.image.onload=()=>{this.cropper=new qe.default(this.image,{zoomable:!1,scalable:!1,viewMode:1,data:t,aspectRatio:this.aspect_ratio}),window.cropper=this.cropper}},computed:{aspect_ratio_buttons(){let d=document.documentElement.getAttribute("dir")==="rtl"?"\u062A\u0646\u0633\u064A\u0642 \u062D\u0631":"Free";return[{label:__("1:1"),value:1},{label:__("4:3"),value:4/3},{label:__("16:9"),value:16/9},{label:d,value:NaN}]}},methods:{crop_image(){this.file.crop_box_data=this.cropper.getData();let t=this.cropper.getCroppedCanvas(),d=this.file.file_obj.type;t.toBlob(s=>{var p=new File([s],this.file.name,{type:s.type});this.file.file_obj=p,this.$emit("toggle_image_cropper")},d)}}},Ge=function(){var t=this,d=t.$createElement,s=t._self._c||d;return s("div",[s("div",[s("img",{ref:"image",attrs:{src:t.src,alt:t.file.name}})]),t._v(" "),s("div",{staticClass:"image-cropper-actions"},[s("div",[t.fixed_aspect_ratio==null?s("div",{staticClass:"btn-group"},t._l(t.aspect_ratio_buttons,function(p){return s("button",{key:p.label,staticClass:"btn btn-default btn-sm",class:{active:isNaN(t.aspect_ratio)?isNaN(p.value):p.value===t.aspect_ratio},attrs:{type:"button"},on:{click:function(g){t.aspect_ratio=p.value}}},[t._v(`
					`+t._s(p.label)+`
				`)])}),0):t._e()]),t._v(" "),s("div",[t.fixed_aspect_ratio==null?s("button",{staticClass:"btn btn-sm margin-right",on:{click:function(p){return t.$emit("toggle_image_cropper")}}},[t._v(`
				`+t._s(t.__("Back"))+`
			`)]):t._e(),t._v(" "),s("button",{staticClass:"btn btn-primary btn-sm",on:{click:t.crop_image}},[t._v(`
				`+t._s(t.__("Crop"))+`
			`)])])])])},Mn=[];Ge._withStripped=!0;var Bn=function(t){!t||t("data-v-bf0c2eb6_0",{source:`
img {
	display: block;
	max-width: 100%;
	max-height: 600px;
}
.image-cropper-actions {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: var(--margin-md);
}
.cropper-container {
	direction: ltr!important;
}
`,map:{version:3,sources:["../akwad_frappe_fixes/akwad_frappe_fixes/public/js/file_uploader/ImageCropper.vue"],names:[],mappings:";AAyHA;CACA,cAAA;CACA,eAAA;CACA,iBAAA;AACA;AAEA;CACA,aAAA;CACA,mBAAA;CACA,8BAAA;CACA,4BAAA;AACA;AAEA;CACA,wBAAA;AACA",file:"ImageCropper.vue",sourcesContent:[`<template>
	<div>
		<div>
			<img ref="image" :src="src" :alt="file.name" />
		</div>
		<div class="image-cropper-actions">
			<div>
				<div class="btn-group" v-if="fixed_aspect_ratio == null">
					<button
						v-for="button in aspect_ratio_buttons"
						type="button"
						class="btn btn-default btn-sm"
						:class="{
							active: isNaN(aspect_ratio)
								? isNaN(button.value)
								: button.value === aspect_ratio,
						}"
						:key="button.label"
						@click="aspect_ratio = button.value"
					>
						{{ button.label }}
					</button>
				</div>
			</div>
			<div>
				<button
					class="btn btn-sm margin-right"
					@click="$emit('toggle_image_cropper')"
					v-if="fixed_aspect_ratio == null"
				>
					{{ __("Back") }}
				</button>
				<button class="btn btn-primary btn-sm" @click="crop_image">
					{{ __("Crop") }}
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import Cropper from "cropperjs";
export default {
	name: "ImageCropper",
	props: ["file", "fixed_aspect_ratio"],
	data() {
		let aspect_ratio = this.fixed_aspect_ratio != null ? this.fixed_aspect_ratio : NaN;
		return {
			src: null,
			cropper: null,
			image: null,
			aspect_ratio,
		};
	},
	watch: {
		aspect_ratio(value) {
			if (this.cropper) {
				this.cropper.setAspectRatio(value);
			}
		},
	},
	mounted() {
		if (window.FileReader) {
			let fr = new FileReader();
			fr.onload = () => (this.src = fr.result);
			fr.readAsDataURL(this.file.cropper_file);
		}
		let crop_box = this.file.crop_box_data;
		this.image = this.$refs.image;
		this.image.onload = () => {
			this.cropper = new Cropper(this.image, {
				zoomable: false,
				scalable: false,
				viewMode: 1,
				data: crop_box,
				aspectRatio: this.aspect_ratio,
			});
			window.cropper = this.cropper;
		};
	},
	computed: {
		aspect_ratio_buttons() {
			let isRTL = document.documentElement.getAttribute('dir') === 'rtl';
			let free = isRTL ? '\u062A\u0646\u0633\u064A\u0642 \u062D\u0631' : 'Free';
			return [
				{
					label: __("1:1"),
					value: 1,
				},
				{
					label: __("4:3"),
					value: 4 / 3,
				},
				{
					label: __("16:9"),
					value: 16 / 9,
				},
				{
					label: free,
					value: NaN,
				},
			];
		},
	},
	methods: {
		crop_image() {
			this.file.crop_box_data = this.cropper.getData();
			const canvas = this.cropper.getCroppedCanvas();
			const file_type = this.file.file_obj.type;
			canvas.toBlob((blob) => {
				var cropped_file_obj = new File([blob], this.file.name, {
					type: blob.type,
				});
				this.file.file_obj = cropped_file_obj;
				this.$emit("toggle_image_cropper");
			}, file_type);
		},
	},
};
<\/script>
<style>
img {
	display: block;
	max-width: 100%;
	max-height: 600px;
}

.image-cropper-actions {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: var(--margin-md);
}

.cropper-container {
	direction: ltr!important;
}
</style>
`]},media:void 0})},Ln=void 0,In=void 0,On=!1;function jn(t,d,s,p,g,w,f,E,y,C){let c=(typeof s=="function"?s.options:s)||{};c.__file="../akwad_frappe_fixes/akwad_frappe_fixes/public/js/file_uploader/ImageCropper.vue",c.render||(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0,g&&(c.functional=!0)),c._scopeId=p;{let k;if(d&&(k=f?function(x){d.call(this,C(x,this.$root.$options.shadowRoot))}:function(x){d.call(this,E(x))}),k!==void 0)if(c.functional){let x=c.render;c.render=function(M,B){return k.call(B),x(M,B)}}else{let x=c.beforeCreate;c.beforeCreate=x?[].concat(x,k):[k]}}return c}function te(){let t=te.styles||(te.styles={}),d=typeof navigator!="undefined"&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(p,g){if(document.querySelector('style[data-vue-ssr-id~="'+p+'"]'))return;let w=d?g.media||"default":p,f=t[w]||(t[w]={ids:[],parts:[],element:void 0});if(!f.ids.includes(p)){let E=g.source,y=f.ids.length;if(f.ids.push(p),d&&(f.element=f.element||document.querySelector("style[data-group="+w+"]")),!f.element){let C=document.head||document.getElementsByTagName("head")[0],c=f.element=document.createElement("style");c.type="text/css",g.media&&c.setAttribute("media",g.media),d&&(c.setAttribute("data-group",w),c.setAttribute("data-next-index","0")),C.appendChild(c)}if(d&&(y=parseInt(f.element.getAttribute("data-next-index")),f.element.setAttribute("data-next-index",y+1)),f.element.styleSheet)f.parts.push(E),f.element.styleSheet.cssText=f.parts.filter(Boolean).join(`
`);else{let C=document.createTextNode(E),c=f.element.childNodes;c[y]&&f.element.removeChild(c[y]),c.length?f.element.insertBefore(C,c[y]):f.element.appendChild(C)}}}}var zn=jn({render:Ge,staticRenderFns:Mn},Bn,Nn,Ln,On,In,!1,te,void 0,void 0),Je=zn;var $n={name:"FileUploader",props:{show_upload_button:{default:!0},disable_file_browser:{default:!1},allow_multiple:{default:!0},as_dataurl:{default:!1},doctype:{default:null},docname:{default:null},fieldname:{default:null},folder:{default:"Home"},method:{default:null},on_success:{default:null},make_attachments_public:{default:!0},restrictions:{default:()=>({max_file_size:null,max_number_of_files:null,allowed_file_types:[],crop_image_aspect_ratio:null})},attach_doc_image:{default:!1},upload_notes:{default:null}},components:{FilePreview:Pe,FileBrowser:We,WebLink:Ve,ImageCropper:Je},data(){return{files:[],is_dragging:!1,currently_uploading:-1,show_file_browser:!1,show_web_link:!1,show_image_cropper:!1,crop_image_with_index:-1,trigger_upload:!1,close_dialog:!1,hide_dialog_footer:!1,allow_take_photo:!1,allow_web_link:!0,google_drive_settings:{enabled:!1},wrapper_ready:!1}},created(){var t;this.allow_take_photo=window.navigator.mediaDevices,frappe.user_id!=="Guest"&&frappe.call({method:"frappe.integrations.doctype.google_settings.google_settings.get_file_picker_settings",callback:d=>{d.exc||(this.google_drive_settings=d.message)}}),this.restrictions.max_file_size==null&&frappe.call("frappe.core.api.file.get_max_file_size").then(d=>{this.restrictions.max_file_size=Number(d.message)}),this.restrictions.max_number_of_files==null&&this.doctype&&(this.restrictions.max_number_of_files=(t=frappe.get_meta(this.doctype))==null?void 0:t.max_attachments)},watch:{files(t,d){!this.allow_multiple&&t.length>1&&(this.files=[t[t.length-1]])}},computed:{upload_complete(){return this.files.length>0&&this.files.every(t=>t.total!==0&&t.progress===t.total)}},methods:{dragover(){this.is_dragging=!0},dragleave(){this.is_dragging=!1},dropfiles(t){this.is_dragging=!1,this.add_files(t.dataTransfer.files)},browse_files(){this.$refs.file_input.click()},on_file_input(t){this.add_files(this.$refs.file_input.files)},remove_file(t){this.files=this.files.filter(d=>d!==t)},toggle_image_cropper(t){this.crop_image_with_index=this.show_image_cropper?-1:t,this.hide_dialog_footer=!this.show_image_cropper,this.show_image_cropper=!this.show_image_cropper},toggle_all_private(){let t;this.files.filter(s=>s.private).length<this.files.length?t=!0:t=!1,this.files=this.files.map(s=>(s.private=t,s))},show_max_files_number_warning(t){console.warn(`File skipped because it exceeds the allowed specified limit of ${max_number_of_files} uploads`,t),this.doctype?MSG=__('File "{0}" was skipped because only {1} uploads are allowed for DocType "{2}"',[t.name,max_number_of_files,this.doctype]):MSG=__('File "{0}" was skipped because only {1} uploads are allowed',[t.name,max_number_of_files]),frappe.show_alert({message:MSG,indicator:"orange"})},add_files(t){let d=Array.from(t).filter(this.check_restrictions).map(s=>{let p=s.type.startsWith("image"),g=s.size/1024;return{file_obj:s,cropper_file:s,crop_box_data:null,optimize:g>200&&p&&!s.type.includes("svg"),name:s.name,doc:null,progress:0,total:0,failed:!1,request_succeeded:!1,error_message:null,uploading:!1,private:!1}});max_number_of_files=this.restrictions.max_number_of_files,max_number_of_files&&d.length>max_number_of_files&&(d.slice(max_number_of_files).forEach(s=>{this.show_max_files_number_warning(s,this.doctype)}),d=d.slice(0,max_number_of_files)),this.files=this.files.concat(d),this.files.length===1&&!this.allow_multiple&&this.restrictions.crop_image_aspect_ratio!=null&&(this.files[0].file_obj.type.includes("svg")||this.toggle_image_cropper(0))},check_restrictions(t){let{max_file_size:d,allowed_file_types:s=[]}=this.restrictions,p=!0,g=!0;return s&&s.length&&(p=s.some(w=>w.includes("/")?t.type?t.type.match(w):!1:w[0]==="."?t.name.endsWith(w):!1)),d&&t.size!=null&&(g=t.size<d),p||(console.warn("File skipped because of invalid file type",t),frappe.show_alert({message:__('File "{0}" was skipped because of invalid file type',[t.name]),indicator:"orange"})),g||(console.warn("File skipped because of invalid file size",t.size,t),frappe.show_alert({message:__('File "{0}" was skipped because size exceeds {1} MB',[t.name,d/(1024*1024)]),indicator:"orange"})),p&&g},upload_files(){return this.show_file_browser?this.upload_via_file_browser():this.show_web_link?this.upload_via_web_link():this.as_dataurl?this.return_as_dataurl():frappe.run_serially(this.files.map((t,d)=>()=>this.upload_file(t,d)))},upload_via_file_browser(){let t=this.$refs.file_browser.selected_node;return t.value?(this.close_dialog=!0,this.upload_file({file_url:t.file_url})):(frappe.msgprint(__("Click on a file to select it.")),this.close_dialog=!0,Promise.reject())},upload_via_web_link(){let t=this.$refs.web_link.url;return t?(t=decodeURI(t),this.close_dialog=!0,this.upload_file({file_url:t})):(frappe.msgprint(__("Invalid URL")),this.close_dialog=!0,Promise.reject())},return_as_dataurl(){let t=this.files.map(d=>frappe.dom.file_to_base64(d.file_obj).then(s=>{d.dataurl=s,this.on_success&&this.on_success(d)}));return this.close_dialog=!0,Promise.all(t)},upload_file(t,d){return this.currently_uploading=d,new Promise((s,p)=>{let g=new XMLHttpRequest;g.upload.addEventListener("loadstart",f=>{t.uploading=!0}),g.upload.addEventListener("progress",f=>{f.lengthComputable&&(t.progress=f.loaded,t.total=f.total)}),g.upload.addEventListener("load",f=>{t.uploading=!1,s()}),g.addEventListener("error",f=>{t.failed=!0,p()}),g.onreadystatechange=()=>{if(g.readyState==XMLHttpRequest.DONE)if(g.status===200){t.request_succeeded=!0;let f=null,E=null;try{f=JSON.parse(g.responseText),f.message.doctype==="File"&&(E=f.message)}catch(y){f=g.responseText}t.doc=E,this.on_success&&this.on_success(E,f),d==this.files.length-1&&this.files.every(y=>y.request_succeeded)&&(this.close_dialog=!0)}else if(g.status===403){t.failed=!0;let f=JSON.parse(g.responseText);t.error_message=`Not permitted. ${f._error_message||""}`}else if(g.status===413)t.failed=!0,t.error_message="Size exceeds the maximum allowed file size.";else{t.failed=!0,t.error_message=g.status===0?"XMLHttpRequest Error":`${g.status} : ${g.statusText}`;let f=null;try{f=JSON.parse(g.responseText)}catch(E){}frappe.request.cleanup({},f)}},g.open("POST","/api/method/upload_file",!0),g.setRequestHeader("Accept","application/json"),g.setRequestHeader("X-Frappe-CSRF-Token",frappe.csrf_token);let w=new FormData;t.file_obj&&w.append("file",t.file_obj,t.name),w.append("is_private",+t.private),w.append("folder",this.folder),t.file_url&&w.append("file_url",t.file_url),t.file_name&&w.append("file_name",t.file_name),this.doctype&&this.docname&&(w.append("doctype",this.doctype),w.append("docname",this.docname)),this.fieldname&&w.append("fieldname",this.fieldname),this.method&&w.append("method",this.method),t.optimize&&w.append("optimize",!0),this.attach_doc_image&&(w.append("max_width",200),w.append("max_height",200)),g.send(w)})},capture_image(){let t=new frappe.ui.Capture({animate:!1,error:!0});t.show(),t.submit(d=>{d.forEach(s=>{let p=`capture_${frappe.datetime.now_datetime().replaceAll(/[: -]/g,"_")}.png`;this.url_to_file(s,p,"image/png").then(g=>this.add_files([g]))})})},show_google_drive_picker(){this.close_dialog=!0,new Dt(Oe({pickerCallback:d=>this.google_drive_callback(d)},this.google_drive_settings)).loadPicker()},google_drive_callback(t){t.action==google.picker.Action.PICKED?this.upload_file({file_url:t.docs[0].url,file_name:t.docs[0].name}):t.action==google.picker.Action.CANCEL&&cur_frm.attachments.new_attachment()},url_to_file(t,d,s){return fetch(t).then(p=>p.arrayBuffer()).then(p=>new File([p],d,{type:s}))}}},Ke=function(){var t=this,d=t.$createElement,s=t._self._c||d;return s("div",{staticClass:"file-uploader",on:{dragover:function(p){return p.preventDefault(),t.dragover.apply(null,arguments)},dragleave:function(p){return p.preventDefault(),t.dragleave.apply(null,arguments)},drop:function(p){return p.preventDefault(),t.dropfiles.apply(null,arguments)}}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.files.length===0&&!t.show_file_browser&&!t.show_web_link,expression:"files.length === 0 && !show_file_browser && !show_web_link"}],staticClass:"file-upload-area"},[t.is_dragging?s("div",[t._v(`
			`+t._s(t.__("Drop files here"))+`
		`)]):s("div",[s("div",{staticClass:"text-center"},[t._v(`
				`+t._s(t.__("Drag and drop files here or upload from"))+`
			`)]),t._v(" "),s("div",{staticClass:"mt-2 text-center"},[s("button",{staticClass:"btn btn-file-upload",on:{click:t.browse_files}},[s("svg",{attrs:{width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("circle",{attrs:{cx:"15",cy:"15",r:"15",fill:"url(#paint0_linear)"}}),t._v(" "),s("path",{attrs:{d:"M13.5 22V19",stroke:"white","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),s("path",{attrs:{d:"M16.5 22V19",stroke:"white","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),s("path",{attrs:{d:"M10.5 22H19.5",stroke:"white","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),s("path",{attrs:{d:"M7.5 16H22.5",stroke:"white","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),s("path",{attrs:{d:"M21 8H9C8.17157 8 7.5 8.67157 7.5 9.5V17.5C7.5 18.3284 8.17157 19 9 19H21C21.8284 19 22.5 18.3284 22.5 17.5V9.5C22.5 8.67157 21.8284 8 21 8Z",stroke:"white","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),s("defs",[s("linearGradient",{attrs:{id:"paint0_linear",x1:"0",y1:"0",x2:"0",y2:"30",gradientUnits:"userSpaceOnUse"}},[s("stop",{attrs:{"stop-color":"#2C9AF1"}}),t._v(" "),s("stop",{attrs:{offset:"1","stop-color":"#2490EF"}})],1)],1)]),t._v(" "),s("div",{staticClass:"mt-1"},[t._v(t._s(t.__("My Device")))])]),t._v(" "),s("input",{ref:"file_input",staticClass:"hidden",attrs:{type:"file",multiple:t.allow_multiple,accept:(t.restrictions.allowed_file_types||[]).join(", ")},on:{change:t.on_file_input}}),t._v(" "),t.disable_file_browser?t._e():s("button",{staticClass:"btn btn-file-upload",on:{click:function(p){t.show_file_browser=!0}}},[s("svg",{attrs:{width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("circle",{attrs:{cx:"15",cy:"15",r:"15",fill:"#48BB74"}}),t._v(" "),s("path",{attrs:{d:"M13.0245 11.5H8C7.72386 11.5 7.5 11.7239 7.5 12V20C7.5 21.1046 8.39543 22 9.5 22H20.5C21.6046 22 22.5 21.1046 22.5 20V14.5C22.5 14.2239 22.2761 14 22 14H15.2169C15.0492 14 14.8926 13.9159 14.8 13.776L13.4414 11.724C13.3488 11.5841 13.1922 11.5 13.0245 11.5Z",stroke:"white","stroke-miterlimit":"10","stroke-linecap":"square"}}),t._v(" "),s("path",{attrs:{d:"M8.87939 9.5V8.5C8.87939 8.22386 9.10325 8 9.37939 8H20.6208C20.8969 8 21.1208 8.22386 21.1208 8.5V12",stroke:"white","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"}})]),t._v(" "),s("div",{staticClass:"mt-1"},[t._v(t._s(t.__("Library")))])]),t._v(" "),t.allow_web_link?s("button",{staticClass:"btn btn-file-upload",on:{click:function(p){t.show_web_link=!0}}},[s("svg",{attrs:{width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("circle",{attrs:{cx:"15",cy:"15",r:"15",fill:"#ECAC4B"}}),t._v(" "),s("path",{attrs:{d:"M12.0469 17.9543L17.9558 12.0454",stroke:"white","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),s("path",{attrs:{d:"M13.8184 11.4547L15.7943 9.47873C16.4212 8.85205 17.2714 8.5 18.1578 8.5C19.0443 8.5 19.8945 8.85205 20.5214 9.47873V9.47873C21.1481 10.1057 21.5001 10.9558 21.5001 11.8423C21.5001 12.7287 21.1481 13.5789 20.5214 14.2058L18.5455 16.1818",stroke:"white","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),s("path",{attrs:{d:"M11.4547 13.8184L9.47873 15.7943C8.85205 16.4212 8.5 17.2714 8.5 18.1578C8.5 19.0443 8.85205 19.8945 9.47873 20.5214V20.5214C10.1057 21.1481 10.9558 21.5001 11.8423 21.5001C12.7287 21.5001 13.5789 21.1481 14.2058 20.5214L16.1818 18.5455",stroke:"white","stroke-linecap":"round","stroke-linejoin":"round"}})]),t._v(" "),s("div",{staticClass:"mt-1"},[t._v(t._s(t.__("Link")))])]):t._e(),t._v(" "),t.allow_take_photo?s("button",{staticClass:"btn btn-file-upload",on:{click:t.capture_image}},[s("svg",{attrs:{width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("circle",{attrs:{cx:"15",cy:"15",r:"15",fill:"#CE315B"}}),t._v(" "),s("path",{attrs:{d:"M11.5 10.5H9.5C8.67157 10.5 8 11.1716 8 12V20C8 20.8284 8.67157 21.5 9.5 21.5H20.5C21.3284 21.5 22 20.8284 22 20V12C22 11.1716 21.3284 10.5 20.5 10.5H18.5L17.3 8.9C17.1111 8.64819 16.8148 8.5 16.5 8.5H13.5C13.1852 8.5 12.8889 8.64819 12.7 8.9L11.5 10.5Z",stroke:"white","stroke-linejoin":"round"}}),t._v(" "),s("circle",{attrs:{cx:"15",cy:"16",r:"2.5",stroke:"white"}})]),t._v(" "),s("div",{staticClass:"mt-1"},[t._v(t._s(t.__("Camera")))])]):t._e(),t._v(" "),t.google_drive_settings.enabled?s("button",{staticClass:"btn btn-file-upload",on:{click:t.show_google_drive_picker}},[s("svg",{attrs:{width:"30",height:"30"}},[s("image",{attrs:{href:"/assets/frappe/icons/social/google_drive.svg",width:"30",height:"30"}})]),t._v(" "),s("div",{staticClass:"mt-1"},[t._v(t._s(t.__("Google Drive")))])]):t._e()]),t._v(" "),s("div",{staticClass:"text-muted text-medium"},[t._v(`
				`+t._s(t.upload_notes)+`
			`)])])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.files.length&&!t.show_file_browser&&!t.show_web_link,expression:"files.length && !show_file_browser && !show_web_link"}],staticClass:"file-preview-area"},[t.show_image_cropper?t._e():s("div",{staticClass:"file-preview-container"},t._l(t.files,function(p,g){return s("FilePreview",{key:p.name,attrs:{file:p},on:{remove:function(w){return t.remove_file(p)},toggle_private:function(w){p.private=!p.private},toggle_optimize:function(w){p.optimize=!p.optimize},toggle_image_cropper:function(w){return t.toggle_image_cropper(g)}}})}),1),t._v(" "),t.show_upload_button&&t.currently_uploading===-1?s("div",{staticClass:"flex align-center"},[s("button",{staticClass:"btn btn-primary btn-sm margin-right",on:{click:t.upload_files}},[t.files.length===1?s("span",[t._v(`
					`+t._s(t.__("Upload file"))+`
				`)]):s("span",[t._v(`
					`+t._s(t.__("Upload {0} files",[t.files.length]))+`
				`)])]),t._v(" "),s("div",{staticClass:"text-muted text-medium"},[t._v(`
				`+t._s(t.__("Click on the lock icon to toggle public/private"))+`
			`)])]):t._e()]),t._v(" "),t.show_image_cropper&&t.wrapper_ready?s("ImageCropper",{attrs:{file:t.files[t.crop_image_with_index],fixed_aspect_ratio:t.restrictions.crop_image_aspect_ratio},on:{toggle_image_cropper:function(p){return t.toggle_image_cropper(-1)},upload_after_crop:function(p){t.trigger_upload=!0}}}):t._e(),t._v(" "),t.show_file_browser&&!t.disable_file_browser?s("FileBrowser",{ref:"file_browser",on:{"hide-browser":function(p){t.show_file_browser=!1}}}):t._e(),t._v(" "),t.show_web_link?s("WebLink",{ref:"web_link",on:{"hide-web-link":function(p){t.show_web_link=!1}}}):t._e()],1)},Pn=[];Ke._withStripped=!0;var Fn=function(t){!t||t("data-v-597614b2_0",{source:`
.file-upload-area {
	min-height: 16rem;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px dashed var(--dark-border-color);
	border-radius: var(--border-radius);
	cursor: pointer;
	background-color: var(--bg-color);
}
.btn-file-upload {
	background-color: transparent;
	border: none;
	box-shadow: none;
	font-size: var(--text-xs);
}
`,map:{version:3,sources:["../akwad_frappe_fixes/akwad_frappe_fixes/public/js/file_uploader/FileUploader.vue"],names:[],mappings:";AAulBA;CACA,iBAAA;CACA,aAAA;CACA,mBAAA;CACA,uBAAA;CACA,2CAAA;CACA,mCAAA;CACA,eAAA;CACA,iCAAA;AACA;AAEA;CACA,6BAAA;CACA,YAAA;CACA,gBAAA;CACA,yBAAA;AACA",file:"FileUploader.vue",sourcesContent:[`<template>
	<div class="file-uploader"
		@dragover.prevent="dragover"
		@dragleave.prevent="dragleave"
		@drop.prevent="dropfiles"
	>
		<div
			class="file-upload-area"
			v-show="files.length === 0 && !show_file_browser && !show_web_link"
		>
			<div v-if="!is_dragging">
				<div class="text-center">
					{{ __('Drag and drop files here or upload from') }}
				</div>
				<div class="mt-2 text-center">
					<button class="btn btn-file-upload" @click="browse_files">
						<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="15" cy="15" r="15" fill="url(#paint0_linear)"/>
							<path d="M13.5 22V19" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M16.5 22V19" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M10.5 22H19.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M7.5 16H22.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M21 8H9C8.17157 8 7.5 8.67157 7.5 9.5V17.5C7.5 18.3284 8.17157 19 9 19H21C21.8284 19 22.5 18.3284 22.5 17.5V9.5C22.5 8.67157 21.8284 8 21 8Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
							<defs>
							<linearGradient id="paint0_linear" x1="0" y1="0" x2="0" y2="30" gradientUnits="userSpaceOnUse">
							<stop stop-color="#2C9AF1"/>
							<stop offset="1" stop-color="#2490EF"/>
							</linearGradient>
							</defs>
						</svg>
						<div class="mt-1">{{ __('My Device') }}</div>
					</button>
					<input
						type="file"
						class="hidden"
						ref="file_input"
						@change="on_file_input"
						:multiple="allow_multiple"
						:accept="(restrictions.allowed_file_types || []).join(', ')"
					>
					<button class="btn btn-file-upload" v-if="!disable_file_browser" @click="show_file_browser = true">
						<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="15" cy="15" r="15" fill="#48BB74"/>
							<path d="M13.0245 11.5H8C7.72386 11.5 7.5 11.7239 7.5 12V20C7.5 21.1046 8.39543 22 9.5 22H20.5C21.6046 22 22.5 21.1046 22.5 20V14.5C22.5 14.2239 22.2761 14 22 14H15.2169C15.0492 14 14.8926 13.9159 14.8 13.776L13.4414 11.724C13.3488 11.5841 13.1922 11.5 13.0245 11.5Z" stroke="white" stroke-miterlimit="10" stroke-linecap="square"/>
							<path d="M8.87939 9.5V8.5C8.87939 8.22386 9.10325 8 9.37939 8H20.6208C20.8969 8 21.1208 8.22386 21.1208 8.5V12" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
						<div class="mt-1">{{ __('Library') }}</div>
					</button>
					<button class="btn btn-file-upload" v-if="allow_web_link" @click="show_web_link = true">
						<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="15" cy="15" r="15" fill="#ECAC4B"/>
							<path d="M12.0469 17.9543L17.9558 12.0454" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M13.8184 11.4547L15.7943 9.47873C16.4212 8.85205 17.2714 8.5 18.1578 8.5C19.0443 8.5 19.8945 8.85205 20.5214 9.47873V9.47873C21.1481 10.1057 21.5001 10.9558 21.5001 11.8423C21.5001 12.7287 21.1481 13.5789 20.5214 14.2058L18.5455 16.1818" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M11.4547 13.8184L9.47873 15.7943C8.85205 16.4212 8.5 17.2714 8.5 18.1578C8.5 19.0443 8.85205 19.8945 9.47873 20.5214V20.5214C10.1057 21.1481 10.9558 21.5001 11.8423 21.5001C12.7287 21.5001 13.5789 21.1481 14.2058 20.5214L16.1818 18.5455" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
						<div class="mt-1">{{ __('Link') }}</div>
					</button>
					<button v-if="allow_take_photo" class="btn btn-file-upload" @click="capture_image">
						<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="15" cy="15" r="15" fill="#CE315B"/>
							<path d="M11.5 10.5H9.5C8.67157 10.5 8 11.1716 8 12V20C8 20.8284 8.67157 21.5 9.5 21.5H20.5C21.3284 21.5 22 20.8284 22 20V12C22 11.1716 21.3284 10.5 20.5 10.5H18.5L17.3 8.9C17.1111 8.64819 16.8148 8.5 16.5 8.5H13.5C13.1852 8.5 12.8889 8.64819 12.7 8.9L11.5 10.5Z" stroke="white" stroke-linejoin="round"/>
							<circle cx="15" cy="16" r="2.5" stroke="white"/>
						</svg>
						<div class="mt-1">{{ __('Camera') }}</div>
					</button>
					<button v-if="google_drive_settings.enabled" class="btn btn-file-upload" @click="show_google_drive_picker">
						<svg width="30" height="30">
							<image href="/assets/frappe/icons/social/google_drive.svg" width="30" height="30"/>
						</svg>
						<div class="mt-1">{{ __('Google Drive') }}</div>
					</button>
				</div>
				<div class="text-muted text-medium">
					{{ upload_notes }}
				</div>
			</div>
			<div v-else>
				{{ __('Drop files here') }}
			</div>
		</div>
		<div class="file-preview-area" v-show="files.length && !show_file_browser && !show_web_link">
			<div class="file-preview-container" v-if="!show_image_cropper">
				<FilePreview
					v-for="(file, i) in files"
					:key="file.name"
					:file="file"
					@remove="remove_file(file)"
					@toggle_private="file.private = !file.private"
					@toggle_optimize="file.optimize = !file.optimize"
					@toggle_image_cropper="toggle_image_cropper(i)"
				/>
			</div>
			<div class="flex align-center" v-if="show_upload_button && currently_uploading === -1">
				<button
					class="btn btn-primary btn-sm margin-right"
					@click="upload_files"
				>
					<span v-if="files.length === 1">
						{{ __('Upload file') }}
					</span>
					<span v-else>
						{{ __('Upload {0} files', [files.length]) }}
					</span>
				</button>
				<div class="text-muted text-medium">
					{{ __('Click on the lock icon to toggle public/private') }}
				</div>
			</div>
		</div>
		<ImageCropper
			v-if="show_image_cropper && wrapper_ready"
			:file="files[crop_image_with_index]"
			:fixed_aspect_ratio="restrictions.crop_image_aspect_ratio"
			@toggle_image_cropper="toggle_image_cropper(-1)"
			@upload_after_crop="trigger_upload=true"
		/>
		<FileBrowser
			ref="file_browser"
			v-if="show_file_browser && !disable_file_browser"
			@hide-browser="show_file_browser = false"
		/>
		<WebLink
			ref="web_link"
			v-if="show_web_link"
			@hide-web-link="show_web_link = false"
		/>
	</div>
</template>

<script>
import FilePreview from './FilePreview.vue';
import FileBrowser from '../../../../../frappe/frappe/public/js/frappe/file_uploader/FileBrowser.vue';
import WebLink from '../../../../../frappe/frappe/public/js/frappe/file_uploader/WebLink.vue';
import GoogleDrivePicker from '../../../../../frappe/frappe/public/js/integrations/google_drive_picker';
import ImageCropper from './ImageCropper.vue';

export default {
	name: 'FileUploader',
	props: {
		show_upload_button: {
			default: true
		},
		disable_file_browser: {
			default: false
		},
		allow_multiple: {
			default: true
		},
		as_dataurl: {
			default: false
		},
		doctype: {
			default: null
		},
		docname: {
			default: null
		},
		fieldname: {
			default: null
		},
		folder: {
			default: 'Home'
		},
		method: {
			default: null
		},
		on_success: {
			default: null
		},
		make_attachments_public: {
			default: true,
		},
		restrictions: {
			default: () => ({
				max_file_size: null, // 2048 -> 2KB
				max_number_of_files: null,
				allowed_file_types: [], // ['image/*', 'video/*', '.jpg', '.gif', '.pdf'],
				crop_image_aspect_ratio: null // 1, 16 / 9, 4 / 3, NaN (free)
			})
		},
		attach_doc_image: {
			default: false
		},
		upload_notes: {
			default: null // "Images or video, upto 2MB"
		}
	},
	components: {
		FilePreview,
		FileBrowser,
		WebLink,
		ImageCropper
	},
	data() {
		return {
			files: [],
			is_dragging: false,
			currently_uploading: -1,
			show_file_browser: false,
			show_web_link: false,
			show_image_cropper: false,
			crop_image_with_index: -1,
			trigger_upload: false,
			close_dialog: false,
			hide_dialog_footer: false,
			allow_take_photo: false,
			allow_web_link: true,
			google_drive_settings: {
				enabled: false
			},
			wrapper_ready: false
		}
	},
	created() {
		this.allow_take_photo = window.navigator.mediaDevices;
		if (frappe.user_id !== "Guest") {
			frappe.call({
				// method only available after login
				method: "frappe.integrations.doctype.google_settings.google_settings.get_file_picker_settings",
				callback: (resp) => {
					if (!resp.exc) {
						this.google_drive_settings = resp.message;
					}
				}
			});
		}
		if (this.restrictions.max_file_size == null) {
			frappe.call('frappe.core.api.file.get_max_file_size')
				.then(res => {
					this.restrictions.max_file_size = Number(res.message);
				});
		}
		if (this.restrictions.max_number_of_files == null && this.doctype) {
			this.restrictions.max_number_of_files = frappe.get_meta(this.doctype)?.max_attachments;
		}
	},
	watch: {
		files(newvalue, oldvalue) {
			if (!this.allow_multiple && newvalue.length > 1) {
				this.files = [newvalue[newvalue.length - 1]];
			}
		}
	},
	computed: {
		upload_complete() {
			return this.files.length > 0
				&& this.files.every(
					file => file.total !== 0 && file.progress === file.total);
		}
	},
	methods: {
		dragover() {
			this.is_dragging = true;
		},
		dragleave() {
			this.is_dragging = false;
		},
		dropfiles(e) {
			this.is_dragging = false;
			this.add_files(e.dataTransfer.files);
		},
		browse_files() {
			this.$refs.file_input.click();
		},
		on_file_input(e) {
			this.add_files(this.$refs.file_input.files);
		},
		remove_file(file) {
			this.files = this.files.filter(f => f !== file);
		},
		toggle_image_cropper(index) {
			this.crop_image_with_index = this.show_image_cropper ? -1 : index;
			this.hide_dialog_footer = !this.show_image_cropper;
			this.show_image_cropper = !this.show_image_cropper;
		},
		toggle_all_private() {
			let flag;
			let private_values = this.files.filter(file => file.private);
			if (private_values.length < this.files.length) {
				// there are some private and some public
				// set all to private
				flag = true;
			} else {
				// all are private, set all to public
				flag = false;
			}
			this.files = this.files.map(file => {
				file.private = flag;
				return file;
			});
		},
		show_max_files_number_warning(file) {
			console.warn(
				\`File skipped because it exceeds the allowed specified limit of \${max_number_of_files} uploads\`,
				file,
			);
			if (this.doctype) {
				MSG = __('File "{0}" was skipped because only {1} uploads are allowed for DocType "{2}"', [file.name, max_number_of_files, this.doctype])
			} else {
				MSG = __('File "{0}" was skipped because only {1} uploads are allowed', [file.name, max_number_of_files])
			}
			frappe.show_alert({
				message: MSG,
				indicator: "orange",
			});
		},
		add_files(file_array) {
			let files = Array.from(file_array)
				.filter(this.check_restrictions)
				.map(file => {
					let is_image = file.type.startsWith('image');
					let size_kb = file.size / 1024;
					return {
						file_obj: file,
						cropper_file: file,
						crop_box_data: null,
						optimize: size_kb > 200 && is_image && !file.type.includes('svg'),
						name: file.name,
						doc: null,
						progress: 0,
						total: 0,
						failed: false,
						request_succeeded: false,
						error_message: null,
						uploading: false,
						private: false,
					};
				});

			// pop extra files as per FileUploader.restrictions.max_number_of_files
			max_number_of_files = this.restrictions.max_number_of_files;
			if (max_number_of_files && files.length > max_number_of_files) {
				files.slice(max_number_of_files).forEach(file => {
					this.show_max_files_number_warning(file, this.doctype);
				});

				files = files.slice(0, max_number_of_files);
			}

			this.files = this.files.concat(files);
			// if only one file is allowed and crop_image_aspect_ratio is set, open cropper immediately
			if (this.files.length === 1 && !this.allow_multiple && this.restrictions.crop_image_aspect_ratio != null) {
				if (!this.files[0].file_obj.type.includes('svg')) {
					this.toggle_image_cropper(0);
				}
			}
		},
		check_restrictions(file) {
			let { max_file_size, allowed_file_types = [] } = this.restrictions;

			let is_correct_type = true;
			let valid_file_size = true;

			if (allowed_file_types && allowed_file_types.length) {
				is_correct_type = allowed_file_types.some((type) => {
					// is this is a mime-type
					if (type.includes('/')) {
						if (!file.type) return false;
						return file.type.match(type);
					}

					// otherwise this is likely an extension
					if (type[0] === '.') {
						return file.name.endsWith(type);
					}
					return false;
				});
			}

			if (max_file_size && file.size != null) {
				valid_file_size = file.size < max_file_size;
			}

			if (!is_correct_type) {
				console.warn('File skipped because of invalid file type', file);
				frappe.show_alert({
					message: __('File "{0}" was skipped because of invalid file type', [file.name]),
					indicator: 'orange'
				});
			}
			if (!valid_file_size) {
				console.warn('File skipped because of invalid file size', file.size, file);
				frappe.show_alert({
					message: __('File "{0}" was skipped because size exceeds {1} MB', [file.name, max_file_size / (1024 * 1024)]),
					indicator: 'orange'
				});
			}

			return is_correct_type && valid_file_size;
		},
		upload_files() {
			if (this.show_file_browser) {
				return this.upload_via_file_browser();
			}
			if (this.show_web_link) {
				return this.upload_via_web_link();
			}
			if (this.as_dataurl) {
				return this.return_as_dataurl();
			}
			return frappe.run_serially(
				this.files.map(
					(file, i) =>
						() => this.upload_file(file, i)
				)
			);
		},
		upload_via_file_browser() {
			let selected_file = this.$refs.file_browser.selected_node;
			if (!selected_file.value) {
				frappe.msgprint(__('Click on a file to select it.'));
				this.close_dialog = true;
				return Promise.reject();
			}
			this.close_dialog = true;
			return this.upload_file({
				file_url: selected_file.file_url
			});
		},
		upload_via_web_link() {
			let file_url = this.$refs.web_link.url;
			if (!file_url) {
				frappe.msgprint(__('Invalid URL'));
				this.close_dialog = true;
				return Promise.reject();
			}
			file_url = decodeURI(file_url)
			this.close_dialog = true;
			return this.upload_file({
				file_url
			});
		},
		return_as_dataurl() {
			let promises = this.files.map(file =>
				frappe.dom.file_to_base64(file.file_obj)
					.then(dataurl => {
						file.dataurl = dataurl;
						this.on_success && this.on_success(file);
					})
			);
			this.close_dialog = true;
			return Promise.all(promises);
		},
		upload_file(file, i) {
			this.currently_uploading = i;

			return new Promise((resolve, reject) => {
				let xhr = new XMLHttpRequest();
				xhr.upload.addEventListener('loadstart', (e) => {
					file.uploading = true;
				})
				xhr.upload.addEventListener('progress', (e) => {
					if (e.lengthComputable) {
						file.progress = e.loaded;
						file.total = e.total;
					}
				})
				xhr.upload.addEventListener('load', (e) => {
					file.uploading = false;
					resolve();
				})
				xhr.addEventListener('error', (e) => {
					file.failed = true;
					reject();
				})
				xhr.onreadystatechange = () => {
					if (xhr.readyState == XMLHttpRequest.DONE) {
						if (xhr.status === 200) {
							file.request_succeeded = true;
							let r = null;
							let file_doc = null;
							try {
								r = JSON.parse(xhr.responseText);
								if (r.message.doctype === 'File') {
									file_doc = r.message;
								}
							} catch(e) {
								r = xhr.responseText;
							}

							file.doc = file_doc;

							if (this.on_success) {
								this.on_success(file_doc, r);
							}

							if (i == this.files.length - 1 && this.files.every(file => file.request_succeeded)) {
								this.close_dialog = true;
							}

						} else if (xhr.status === 403) {
							file.failed = true;
							let response = JSON.parse(xhr.responseText);
							file.error_message = \`Not permitted. \${response._error_message || ''}\`;

						} else if (xhr.status === 413) {
							file.failed = true;
							file.error_message = 'Size exceeds the maximum allowed file size.';

						} else {
							file.failed = true;
							file.error_message = xhr.status === 0 ? 'XMLHttpRequest Error' : \`\${xhr.status} : \${xhr.statusText}\`;

							let error = null;
							try {
								error = JSON.parse(xhr.responseText);
							} catch(e) {
								// pass
							}
							frappe.request.cleanup({}, error);
						}
					}
				}
				xhr.open('POST', '/api/method/upload_file', true);
				xhr.setRequestHeader('Accept', 'application/json');
				xhr.setRequestHeader('X-Frappe-CSRF-Token', frappe.csrf_token);

				let form_data = new FormData();
				if (file.file_obj) {
					form_data.append('file', file.file_obj, file.name);
				}
				form_data.append('is_private', +file.private);
				form_data.append('folder', this.folder);

				if (file.file_url) {
					form_data.append('file_url', file.file_url);
				}

				if (file.file_name) {
					form_data.append('file_name', file.file_name);
				}

				if (this.doctype && this.docname) {
					form_data.append('doctype', this.doctype);
					form_data.append('docname', this.docname);
				}

				if (this.fieldname) {
					form_data.append('fieldname', this.fieldname);
				}

				if (this.method) {
					form_data.append('method', this.method);
				}

				if (file.optimize) {
					form_data.append('optimize', true);
				}

				if (this.attach_doc_image) {
					form_data.append('max_width', 200);
					form_data.append('max_height', 200);
				}

				xhr.send(form_data);
			});
		},
		capture_image() {
			const capture = new frappe.ui.Capture({
				animate: false,
				error: true
			});
			capture.show();
			capture.submit(data_urls => {
				data_urls.forEach(data_url => {
					let filename = \`capture_\${frappe.datetime.now_datetime().replaceAll(/[: -]/g, '_')}.png\`;
					this.url_to_file(data_url, filename, 'image/png').then((file) =>
						this.add_files([file])
					);
				});
			});
		},
		show_google_drive_picker() {
			this.close_dialog = true;
			let google_drive = new GoogleDrivePicker({
				pickerCallback: data => this.google_drive_callback(data),
				...this.google_drive_settings
			});
			google_drive.loadPicker();
		},
		google_drive_callback(data) {
			if (data.action == google.picker.Action.PICKED) {
				this.upload_file({
					file_url: data.docs[0].url,
					file_name: data.docs[0].name
				});
			} else if (data.action == google.picker.Action.CANCEL) {
				cur_frm.attachments.new_attachment()
			}
		},
		url_to_file(url, filename, mime_type) {
			return fetch(url)
					.then(res => res.arrayBuffer())
					.then(buffer => new File([buffer], filename, { type: mime_type }));
		},
	}
}
<\/script>
<style>
.file-upload-area {
	min-height: 16rem;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px dashed var(--dark-border-color);
	border-radius: var(--border-radius);
	cursor: pointer;
	background-color: var(--bg-color);
}

.btn-file-upload {
	background-color: transparent;
	border: none;
	box-shadow: none;
	font-size: var(--text-xs);
}
</style>
`]},media:void 0})},Hn=void 0,Un=void 0,Wn=!1;function Xn(t,d,s,p,g,w,f,E,y,C){let c=(typeof s=="function"?s.options:s)||{};c.__file="../akwad_frappe_fixes/akwad_frappe_fixes/public/js/file_uploader/FileUploader.vue",c.render||(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0,g&&(c.functional=!0)),c._scopeId=p;{let k;if(d&&(k=f?function(x){d.call(this,C(x,this.$root.$options.shadowRoot))}:function(x){d.call(this,E(x))}),k!==void 0)if(c.functional){let x=c.render;c.render=function(M,B){return k.call(B),x(M,B)}}else{let x=c.beforeCreate;c.beforeCreate=x?[].concat(x,k):[k]}}return c}function ee(){let t=ee.styles||(ee.styles={}),d=typeof navigator!="undefined"&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(p,g){if(document.querySelector('style[data-vue-ssr-id~="'+p+'"]'))return;let w=d?g.media||"default":p,f=t[w]||(t[w]={ids:[],parts:[],element:void 0});if(!f.ids.includes(p)){let E=g.source,y=f.ids.length;if(f.ids.push(p),d&&(f.element=f.element||document.querySelector("style[data-group="+w+"]")),!f.element){let C=document.head||document.getElementsByTagName("head")[0],c=f.element=document.createElement("style");c.type="text/css",g.media&&c.setAttribute("media",g.media),d&&(c.setAttribute("data-group",w),c.setAttribute("data-next-index","0")),C.appendChild(c)}if(d&&(y=parseInt(f.element.getAttribute("data-next-index")),f.element.setAttribute("data-next-index",y+1)),f.element.styleSheet)f.parts.push(E),f.element.styleSheet.cssText=f.parts.filter(Boolean).join(`
`);else{let C=document.createTextNode(E),c=f.element.childNodes;c[y]&&f.element.removeChild(c[y]),c.length?f.element.insertBefore(C,c[y]):f.element.appendChild(C)}}}}var Vn=Xn({render:Ke,staticRenderFns:Pn},Fn,$n,Hn,Wn,Un,!1,ee,void 0,void 0),Ze=Vn;var Nt=class{constructor({wrapper:d,method:s,on_success:p,doctype:g,docname:w,fieldname:f,files:E,folder:y,restrictions:C={},upload_notes:c,allow_multiple:k,as_dataurl:x,disable_file_browser:Y,dialog_title:M,attach_doc_image:B,frm:ht,make_attachments_public:L}={}){ht&&ht.attachments.max_reached(!0),d?this.wrapper=d.get?d.get(0):d:this.make_dialog(M),this.$fileuploader=new Vue({el:this.wrapper,render:K=>K(Ze,{props:{show_upload_button:!Boolean(this.dialog),doctype:g,docname:w,fieldname:f,method:s,folder:y,on_success:p,restrictions:C,upload_notes:c,allow_multiple:k,as_dataurl:x,disable_file_browser:Y,attach_doc_image:B,make_attachments_public:L}})}),this.uploader=this.$fileuploader.$children[0],this.dialog||(this.uploader.wrapper_ready=!0),this.uploader.$watch("trigger_upload",K=>{K&&this.upload_files()}),this.uploader.$watch("close_dialog",K=>{K&&this.dialog&&this.dialog.hide()}),this.uploader.$watch("hide_dialog_footer",K=>{K?(this.dialog&&this.dialog.footer.addClass("hide"),this.dialog.$wrapper.data("bs.modal")._config.backdrop="static"):(this.dialog&&this.dialog.footer.removeClass("hide"),this.dialog.$wrapper.data("bs.modal")._config.backdrop=!0)}),E&&E.length&&this.uploader.add_files(E)}upload_files(){return this.dialog&&this.dialog.get_primary_btn().prop("disabled",!0),this.dialog&&this.dialog.get_secondary_btn().prop("disabled",!0),this.uploader.upload_files()}make_dialog(d){this.dialog=new frappe.ui.Dialog({title:d||__("Upload"),primary_action_label:__("Upload"),primary_action:()=>this.upload_files(),on_page_show:()=>{this.uploader.wrapper_ready=!0}}),this.wrapper=this.dialog.body,this.dialog.show(),this.dialog.$wrapper.on("hidden.bs.modal",function(){$(this).data("bs.modal",null),$(this).remove()})}};frappe.provide("frappe.ui");frappe.ui.FileUploader=Nt;})();
/*!
 * Cropper.js v1.5.12
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2021-06-12T08:00:17.411Z
 */
//# sourceMappingURL=afif.bundle.VG63Z7DU.js.map
