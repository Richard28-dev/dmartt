(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();function Zm(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var yu={exports:{}},Lo={},Su={exports:{}},vt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kp;function Sv(){if(kp)return vt;kp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.iterator;function y(w){return w===null||typeof w!="object"?null:(w=_&&w[_]||w["@@iterator"],typeof w=="function"?w:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,A={};function S(w,W,ge){this.props=w,this.context=W,this.refs=A,this.updater=ge||M}S.prototype.isReactComponent={},S.prototype.setState=function(w,W){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,W,"setState")},S.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function x(){}x.prototype=S.prototype;function O(w,W,ge){this.props=w,this.context=W,this.refs=A,this.updater=ge||M}var L=O.prototype=new x;L.constructor=O,E(L,S.prototype),L.isPureReactComponent=!0;var C=Array.isArray,j=Object.prototype.hasOwnProperty,B={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function F(w,W,ge){var Y,re={},J=null,Q=null;if(W!=null)for(Y in W.ref!==void 0&&(Q=W.ref),W.key!==void 0&&(J=""+W.key),W)j.call(W,Y)&&!U.hasOwnProperty(Y)&&(re[Y]=W[Y]);var he=arguments.length-2;if(he===1)re.children=ge;else if(1<he){for(var Me=Array(he),Ce=0;Ce<he;Ce++)Me[Ce]=arguments[Ce+2];re.children=Me}if(w&&w.defaultProps)for(Y in he=w.defaultProps,he)re[Y]===void 0&&(re[Y]=he[Y]);return{$$typeof:s,type:w,key:J,ref:Q,props:re,_owner:B.current}}function D(w,W){return{$$typeof:s,type:w.type,key:W,ref:w.ref,props:w.props,_owner:w._owner}}function R(w){return typeof w=="object"&&w!==null&&w.$$typeof===s}function H(w){var W={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(ge){return W[ge]})}var oe=/\/+/g;function ee(w,W){return typeof w=="object"&&w!==null&&w.key!=null?H(""+w.key):W.toString(36)}function ue(w,W,ge,Y,re){var J=typeof w;(J==="undefined"||J==="boolean")&&(w=null);var Q=!1;if(w===null)Q=!0;else switch(J){case"string":case"number":Q=!0;break;case"object":switch(w.$$typeof){case s:case e:Q=!0}}if(Q)return Q=w,re=re(Q),w=Y===""?"."+ee(Q,0):Y,C(re)?(ge="",w!=null&&(ge=w.replace(oe,"$&/")+"/"),ue(re,W,ge,"",function(Ce){return Ce})):re!=null&&(R(re)&&(re=D(re,ge+(!re.key||Q&&Q.key===re.key?"":(""+re.key).replace(oe,"$&/")+"/")+w)),W.push(re)),1;if(Q=0,Y=Y===""?".":Y+":",C(w))for(var he=0;he<w.length;he++){J=w[he];var Me=Y+ee(J,he);Q+=ue(J,W,ge,Me,re)}else if(Me=y(w),typeof Me=="function")for(w=Me.call(w),he=0;!(J=w.next()).done;)J=J.value,Me=Y+ee(J,he++),Q+=ue(J,W,ge,Me,re);else if(J==="object")throw W=String(w),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.");return Q}function pe(w,W,ge){if(w==null)return w;var Y=[],re=0;return ue(w,Y,"","",function(J){return W.call(ge,J,re++)}),Y}function de(w){if(w._status===-1){var W=w._result;W=W(),W.then(function(ge){(w._status===0||w._status===-1)&&(w._status=1,w._result=ge)},function(ge){(w._status===0||w._status===-1)&&(w._status=2,w._result=ge)}),w._status===-1&&(w._status=0,w._result=W)}if(w._status===1)return w._result.default;throw w._result}var me={current:null},G={transition:null},le={ReactCurrentDispatcher:me,ReactCurrentBatchConfig:G,ReactCurrentOwner:B};function N(){throw Error("act(...) is not supported in production builds of React.")}return vt.Children={map:pe,forEach:function(w,W,ge){pe(w,function(){W.apply(this,arguments)},ge)},count:function(w){var W=0;return pe(w,function(){W++}),W},toArray:function(w){return pe(w,function(W){return W})||[]},only:function(w){if(!R(w))throw Error("React.Children.only expected to receive a single React element child.");return w}},vt.Component=S,vt.Fragment=n,vt.Profiler=a,vt.PureComponent=O,vt.StrictMode=r,vt.Suspense=h,vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,vt.act=N,vt.cloneElement=function(w,W,ge){if(w==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+w+".");var Y=E({},w.props),re=w.key,J=w.ref,Q=w._owner;if(W!=null){if(W.ref!==void 0&&(J=W.ref,Q=B.current),W.key!==void 0&&(re=""+W.key),w.type&&w.type.defaultProps)var he=w.type.defaultProps;for(Me in W)j.call(W,Me)&&!U.hasOwnProperty(Me)&&(Y[Me]=W[Me]===void 0&&he!==void 0?he[Me]:W[Me])}var Me=arguments.length-2;if(Me===1)Y.children=ge;else if(1<Me){he=Array(Me);for(var Ce=0;Ce<Me;Ce++)he[Ce]=arguments[Ce+2];Y.children=he}return{$$typeof:s,type:w.type,key:re,ref:J,props:Y,_owner:Q}},vt.createContext=function(w){return w={$$typeof:u,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},w.Provider={$$typeof:l,_context:w},w.Consumer=w},vt.createElement=F,vt.createFactory=function(w){var W=F.bind(null,w);return W.type=w,W},vt.createRef=function(){return{current:null}},vt.forwardRef=function(w){return{$$typeof:d,render:w}},vt.isValidElement=R,vt.lazy=function(w){return{$$typeof:v,_payload:{_status:-1,_result:w},_init:de}},vt.memo=function(w,W){return{$$typeof:p,type:w,compare:W===void 0?null:W}},vt.startTransition=function(w){var W=G.transition;G.transition={};try{w()}finally{G.transition=W}},vt.unstable_act=N,vt.useCallback=function(w,W){return me.current.useCallback(w,W)},vt.useContext=function(w){return me.current.useContext(w)},vt.useDebugValue=function(){},vt.useDeferredValue=function(w){return me.current.useDeferredValue(w)},vt.useEffect=function(w,W){return me.current.useEffect(w,W)},vt.useId=function(){return me.current.useId()},vt.useImperativeHandle=function(w,W,ge){return me.current.useImperativeHandle(w,W,ge)},vt.useInsertionEffect=function(w,W){return me.current.useInsertionEffect(w,W)},vt.useLayoutEffect=function(w,W){return me.current.useLayoutEffect(w,W)},vt.useMemo=function(w,W){return me.current.useMemo(w,W)},vt.useReducer=function(w,W,ge){return me.current.useReducer(w,W,ge)},vt.useRef=function(w){return me.current.useRef(w)},vt.useState=function(w){return me.current.useState(w)},vt.useSyncExternalStore=function(w,W,ge){return me.current.useSyncExternalStore(w,W,ge)},vt.useTransition=function(){return me.current.useTransition()},vt.version="18.3.1",vt}var zp;function $d(){return zp||(zp=1,Su.exports=Sv()),Su.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bp;function Mv(){if(Bp)return Lo;Bp=1;var s=$d(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(d,h,p){var v,_={},y=null,M=null;p!==void 0&&(y=""+p),h.key!==void 0&&(y=""+h.key),h.ref!==void 0&&(M=h.ref);for(v in h)r.call(h,v)&&!l.hasOwnProperty(v)&&(_[v]=h[v]);if(d&&d.defaultProps)for(v in h=d.defaultProps,h)_[v]===void 0&&(_[v]=h[v]);return{$$typeof:e,type:d,key:y,ref:M,props:_,_owner:a.current}}return Lo.Fragment=n,Lo.jsx=u,Lo.jsxs=u,Lo}var Hp;function Ev(){return Hp||(Hp=1,yu.exports=Mv()),yu.exports}var g=Ev(),ze=$d();const wv=Zm(ze);var il={},Mu={exports:{}},Nn={},Eu={exports:{}},wu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vp;function Tv(){return Vp||(Vp=1,(function(s){function e(G,le){var N=G.length;G.push(le);e:for(;0<N;){var w=N-1>>>1,W=G[w];if(0<a(W,le))G[w]=le,G[N]=W,N=w;else break e}}function n(G){return G.length===0?null:G[0]}function r(G){if(G.length===0)return null;var le=G[0],N=G.pop();if(N!==le){G[0]=N;e:for(var w=0,W=G.length,ge=W>>>1;w<ge;){var Y=2*(w+1)-1,re=G[Y],J=Y+1,Q=G[J];if(0>a(re,N))J<W&&0>a(Q,re)?(G[w]=Q,G[J]=N,w=J):(G[w]=re,G[Y]=N,w=Y);else if(J<W&&0>a(Q,N))G[w]=Q,G[J]=N,w=J;else break e}}return le}function a(G,le){var N=G.sortIndex-le.sortIndex;return N!==0?N:G.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();s.unstable_now=function(){return u.now()-d}}var h=[],p=[],v=1,_=null,y=3,M=!1,E=!1,A=!1,S=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(G){for(var le=n(p);le!==null;){if(le.callback===null)r(p);else if(le.startTime<=G)r(p),le.sortIndex=le.expirationTime,e(h,le);else break;le=n(p)}}function C(G){if(A=!1,L(G),!E)if(n(h)!==null)E=!0,de(j);else{var le=n(p);le!==null&&me(C,le.startTime-G)}}function j(G,le){E=!1,A&&(A=!1,x(F),F=-1),M=!0;var N=y;try{for(L(le),_=n(h);_!==null&&(!(_.expirationTime>le)||G&&!H());){var w=_.callback;if(typeof w=="function"){_.callback=null,y=_.priorityLevel;var W=w(_.expirationTime<=le);le=s.unstable_now(),typeof W=="function"?_.callback=W:_===n(h)&&r(h),L(le)}else r(h);_=n(h)}if(_!==null)var ge=!0;else{var Y=n(p);Y!==null&&me(C,Y.startTime-le),ge=!1}return ge}finally{_=null,y=N,M=!1}}var B=!1,U=null,F=-1,D=5,R=-1;function H(){return!(s.unstable_now()-R<D)}function oe(){if(U!==null){var G=s.unstable_now();R=G;var le=!0;try{le=U(!0,G)}finally{le?ee():(B=!1,U=null)}}else B=!1}var ee;if(typeof O=="function")ee=function(){O(oe)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,pe=ue.port2;ue.port1.onmessage=oe,ee=function(){pe.postMessage(null)}}else ee=function(){S(oe,0)};function de(G){U=G,B||(B=!0,ee())}function me(G,le){F=S(function(){G(s.unstable_now())},le)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(G){G.callback=null},s.unstable_continueExecution=function(){E||M||(E=!0,de(j))},s.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<G?Math.floor(1e3/G):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_getFirstCallbackNode=function(){return n(h)},s.unstable_next=function(G){switch(y){case 1:case 2:case 3:var le=3;break;default:le=y}var N=y;y=le;try{return G()}finally{y=N}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(G,le){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var N=y;y=G;try{return le()}finally{y=N}},s.unstable_scheduleCallback=function(G,le,N){var w=s.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?w+N:w):N=w,G){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=N+W,G={id:v++,callback:le,priorityLevel:G,startTime:N,expirationTime:W,sortIndex:-1},N>w?(G.sortIndex=N,e(p,G),n(h)===null&&G===n(p)&&(A?(x(F),F=-1):A=!0,me(C,N-w))):(G.sortIndex=W,e(h,G),E||M||(E=!0,de(j))),G},s.unstable_shouldYield=H,s.unstable_wrapCallback=function(G){var le=y;return function(){var N=y;y=le;try{return G.apply(this,arguments)}finally{y=N}}}})(wu)),wu}var Gp;function Av(){return Gp||(Gp=1,Eu.exports=Tv()),Eu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jp;function Cv(){if(jp)return Nn;jp=1;var s=$d(),e=Av();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(t,i){u(t,i),u(t+"Capture",i)}function u(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},_={};function y(t){return h.call(_,t)?!0:h.call(v,t)?!1:p.test(t)?_[t]=!0:(v[t]=!0,!1)}function M(t,i,o,c){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function E(t,i,o,c){if(i===null||typeof i>"u"||M(t,i,o,c))return!0;if(c)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function A(t,i,o,c,f,m,T){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=m,this.removeEmptyString=T}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){S[t]=new A(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];S[i]=new A(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){S[t]=new A(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){S[t]=new A(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){S[t]=new A(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){S[t]=new A(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){S[t]=new A(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){S[t]=new A(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){S[t]=new A(t,5,!1,t.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function O(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(x,O);S[i]=new A(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(x,O);S[i]=new A(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(x,O);S[i]=new A(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){S[t]=new A(t,1,!1,t.toLowerCase(),null,!1,!1)}),S.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){S[t]=new A(t,1,!1,t.toLowerCase(),null,!0,!0)});function L(t,i,o,c){var f=S.hasOwnProperty(i)?S[i]:null;(f!==null?f.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,o,f,c)&&(o=null),c||f===null?y(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):f.mustUseProperty?t[f.propertyName]=o===null?f.type===3?!1:"":o:(i=f.attributeName,c=f.attributeNamespace,o===null?t.removeAttribute(i):(f=f.type,o=f===3||f===4&&o===!0?"":""+o,c?t.setAttributeNS(c,i,o):t.setAttribute(i,o))))}var C=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,j=Symbol.for("react.element"),B=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),F=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),H=Symbol.for("react.context"),oe=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),pe=Symbol.for("react.memo"),de=Symbol.for("react.lazy"),me=Symbol.for("react.offscreen"),G=Symbol.iterator;function le(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var N=Object.assign,w;function W(t){if(w===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);w=i&&i[1]||""}return`
`+w+t}var ge=!1;function Y(t,i){if(!t||ge)return"";ge=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ce){var c=ce}Reflect.construct(t,[],i)}else{try{i.call()}catch(ce){c=ce}t.call(i.prototype)}else{try{throw Error()}catch(ce){c=ce}t()}}catch(ce){if(ce&&c&&typeof ce.stack=="string"){for(var f=ce.stack.split(`
`),m=c.stack.split(`
`),T=f.length-1,z=m.length-1;1<=T&&0<=z&&f[T]!==m[z];)z--;for(;1<=T&&0<=z;T--,z--)if(f[T]!==m[z]){if(T!==1||z!==1)do if(T--,z--,0>z||f[T]!==m[z]){var V=`
`+f[T].replace(" at new "," at ");return t.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",t.displayName)),V}while(1<=T&&0<=z);break}}}finally{ge=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?W(t):""}function re(t){switch(t.tag){case 5:return W(t.type);case 16:return W("Lazy");case 13:return W("Suspense");case 19:return W("SuspenseList");case 0:case 2:case 15:return t=Y(t.type,!1),t;case 11:return t=Y(t.type.render,!1),t;case 1:return t=Y(t.type,!0),t;default:return""}}function J(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case U:return"Fragment";case B:return"Portal";case D:return"Profiler";case F:return"StrictMode";case ee:return"Suspense";case ue:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case H:return(t.displayName||"Context")+".Consumer";case R:return(t._context.displayName||"Context")+".Provider";case oe:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case pe:return i=t.displayName||null,i!==null?i:J(t.type)||"Memo";case de:i=t._payload,t=t._init;try{return J(t(i))}catch{}}return null}function Q(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return J(i);case 8:return i===F?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function he(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Me(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ce(t){var i=Me(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),c=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,m=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(T){c=""+T,m.call(this,T)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Ze(t){t._valueTracker||(t._valueTracker=Ce(t))}function Je(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),c="";return t&&(c=Me(t)?t.checked?"true":"false":t.value),t=c,t!==o?(i.setValue(t),!0):!1}function Xe(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function k(t,i){var o=i.checked;return N({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function Rt(t,i){var o=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;o=he(i.value!=null?i.value:o),t._wrapperState={initialChecked:c,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function et(t,i){i=i.checked,i!=null&&L(t,"checked",i,!1)}function st(t,i){et(t,i);var o=he(i.value),c=i.type;if(o!=null)c==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(c==="submit"||c==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?yt(t,i.type,o):i.hasOwnProperty("defaultValue")&&yt(t,i.type,he(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function He(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function yt(t,i,o){(i!=="number"||Xe(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var Ue=Array.isArray;function I(t,i,o,c){if(t=t.options,i){i={};for(var f=0;f<o.length;f++)i["$"+o[f]]=!0;for(o=0;o<t.length;o++)f=i.hasOwnProperty("$"+t[o].value),t[o].selected!==f&&(t[o].selected=f),f&&c&&(t[o].defaultSelected=!0)}else{for(o=""+he(o),i=null,f=0;f<t.length;f++){if(t[f].value===o){t[f].selected=!0,c&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function b(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return N({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function se(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(Ue(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:he(o)}}function xe(t,i){var o=he(i.value),c=he(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),c!=null&&(t.defaultValue=""+c)}function ye(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function ve(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ye(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?ve(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var be,Fe=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,c,f){MSApp.execUnsafeLocalFunction(function(){return t(i,o,c,f)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(be=be||document.createElement("div"),be.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=be.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function ft(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var we={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Be=["Webkit","ms","Moz","O"];Object.keys(we).forEach(function(t){Be.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),we[i]=we[t]})});function tt(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||we.hasOwnProperty(t)&&we[t]?(""+i).trim():i+"px"}function at(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var c=o.indexOf("--")===0,f=tt(o,i[o],c);o==="float"&&(o="cssFloat"),c?t.setProperty(o,f):t[o]=f}}var Ge=N({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gt(t,i){if(i){if(Ge[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function ut(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dt=null;function $(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Pe=null,fe=null,_e=null;function Ie(t){if(t=vo(t)){if(typeof Pe!="function")throw Error(n(280));var i=t.stateNode;i&&(i=_a(i),Pe(t.stateNode,t.type,i))}}function Ne(t){fe?_e?_e.push(t):_e=[t]:fe=t}function dt(){if(fe){var t=fe,i=_e;if(_e=fe=null,Ie(t),i)for(t=0;t<i.length;t++)Ie(i[t])}}function Ft(t,i){return t(i)}function Zt(){}var Tt=!1;function Cn(t,i,o){if(Tt)return t(i,o);Tt=!0;try{return Ft(t,i,o)}finally{Tt=!1,(fe!==null||_e!==null)&&(Zt(),dt())}}function Mn(t,i){var o=t.stateNode;if(o===null)return null;var c=_a(o);if(c===null)return null;o=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(t=t.type,c=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!c;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var ts=!1;if(d)try{var Xi={};Object.defineProperty(Xi,"passive",{get:function(){ts=!0}}),window.addEventListener("test",Xi,Xi),window.removeEventListener("test",Xi,Xi)}catch{ts=!1}function Mi(t,i,o,c,f,m,T,z,V){var ce=Array.prototype.slice.call(arguments,3);try{i.apply(o,ce)}catch(Ee){this.onError(Ee)}}var Ei=!1,Tr=null,Ar=!1,qi=null,Ko={onError:function(t){Ei=!0,Tr=t}};function ns(t,i,o,c,f,m,T,z,V){Ei=!1,Tr=null,Mi.apply(Ko,arguments)}function Zo(t,i,o,c,f,m,T,z,V){if(ns.apply(this,arguments),Ei){if(Ei){var ce=Tr;Ei=!1,Tr=null}else throw Error(n(198));Ar||(Ar=!0,qi=ce)}}function fi(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function Jo(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Qo(t){if(fi(t)!==t)throw Error(n(188))}function Gl(t){var i=t.alternate;if(!i){if(i=fi(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,c=i;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(c=f.return,c!==null){o=c;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return Qo(f),t;if(m===c)return Qo(f),i;m=m.sibling}throw Error(n(188))}if(o.return!==c.return)o=f,c=m;else{for(var T=!1,z=f.child;z;){if(z===o){T=!0,o=f,c=m;break}if(z===c){T=!0,c=f,o=m;break}z=z.sibling}if(!T){for(z=m.child;z;){if(z===o){T=!0,o=m,c=f;break}if(z===c){T=!0,c=m,o=f;break}z=z.sibling}if(!T)throw Error(n(189))}}if(o.alternate!==c)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function ea(t){return t=Gl(t),t!==null?ta(t):null}function ta(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=ta(t);if(i!==null)return i;t=t.sibling}return null}var na=e.unstable_scheduleCallback,P=e.unstable_cancelCallback,K=e.unstable_shouldYield,ae=e.unstable_requestPaint,ne=e.unstable_now,Z=e.unstable_getCurrentPriorityLevel,Ae=e.unstable_ImmediatePriority,De=e.unstable_UserBlockingPriority,Oe=e.unstable_NormalPriority,je=e.unstable_LowPriority,lt=e.unstable_IdlePriority,ot=null,qe=null;function Mt(t){if(qe&&typeof qe.onCommitFiberRoot=="function")try{qe.onCommitFiberRoot(ot,t,void 0,(t.current.flags&128)===128)}catch{}}var ht=Math.clz32?Math.clz32:Et,Wt=Math.log,Ht=Math.LN2;function Et(t){return t>>>=0,t===0?32:31-(Wt(t)/Ht|0)|0}var Qe=64,Xt=4194304;function St(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function hn(t,i){var o=t.pendingLanes;if(o===0)return 0;var c=0,f=t.suspendedLanes,m=t.pingedLanes,T=o&268435455;if(T!==0){var z=T&~f;z!==0?c=St(z):(m&=T,m!==0&&(c=St(m)))}else T=o&~f,T!==0?c=St(T):m!==0&&(c=St(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&f)===0&&(f=c&-c,m=i&-i,f>=m||f===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=c;0<i;)o=31-ht(i),f=1<<o,c|=t[o],i&=~f;return c}function Yi(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function En(t,i){for(var o=t.suspendedLanes,c=t.pingedLanes,f=t.expirationTimes,m=t.pendingLanes;0<m;){var T=31-ht(m),z=1<<T,V=f[T];V===-1?((z&o)===0||(z&c)!==0)&&(f[T]=Yi(z,i)):V<=i&&(t.expiredLanes|=z),m&=~z}}function wi(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function It(){var t=Qe;return Qe<<=1,(Qe&4194240)===0&&(Qe=64),t}function pn(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function nn(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-ht(i),t[i]=o}function cn(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var c=t.eventTimes;for(t=t.expirationTimes;0<o;){var f=31-ht(o),m=1<<f;i[f]=0,c[f]=-1,t[f]=-1,o&=~m}}function rn(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var c=31-ht(o),f=1<<c;f&i|t[c]&i&&(t[c]|=i),o&=~f}}var At=0;function hi(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var vf,jl,_f,xf,yf,Wl=!1,ia=[],$i=null,Ki=null,Zi=null,eo=new Map,to=new Map,Ji=[],Gg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sf(t,i){switch(t){case"focusin":case"focusout":$i=null;break;case"dragenter":case"dragleave":Ki=null;break;case"mouseover":case"mouseout":Zi=null;break;case"pointerover":case"pointerout":eo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":to.delete(i.pointerId)}}function no(t,i,o,c,f,m){return t===null||t.nativeEvent!==m?(t={blockedOn:i,domEventName:o,eventSystemFlags:c,nativeEvent:m,targetContainers:[f]},i!==null&&(i=vo(i),i!==null&&jl(i)),t):(t.eventSystemFlags|=c,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function jg(t,i,o,c,f){switch(i){case"focusin":return $i=no($i,t,i,o,c,f),!0;case"dragenter":return Ki=no(Ki,t,i,o,c,f),!0;case"mouseover":return Zi=no(Zi,t,i,o,c,f),!0;case"pointerover":var m=f.pointerId;return eo.set(m,no(eo.get(m)||null,t,i,o,c,f)),!0;case"gotpointercapture":return m=f.pointerId,to.set(m,no(to.get(m)||null,t,i,o,c,f)),!0}return!1}function Mf(t){var i=Cr(t.target);if(i!==null){var o=fi(i);if(o!==null){if(i=o.tag,i===13){if(i=Jo(o),i!==null){t.blockedOn=i,yf(t.priority,function(){_f(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ra(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=ql(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var c=new o.constructor(o.type,o);Dt=c,o.target.dispatchEvent(c),Dt=null}else return i=vo(o),i!==null&&jl(i),t.blockedOn=o,!1;i.shift()}return!0}function Ef(t,i,o){ra(t)&&o.delete(i)}function Wg(){Wl=!1,$i!==null&&ra($i)&&($i=null),Ki!==null&&ra(Ki)&&(Ki=null),Zi!==null&&ra(Zi)&&(Zi=null),eo.forEach(Ef),to.forEach(Ef)}function io(t,i){t.blockedOn===i&&(t.blockedOn=null,Wl||(Wl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Wg)))}function ro(t){function i(f){return io(f,t)}if(0<ia.length){io(ia[0],t);for(var o=1;o<ia.length;o++){var c=ia[o];c.blockedOn===t&&(c.blockedOn=null)}}for($i!==null&&io($i,t),Ki!==null&&io(Ki,t),Zi!==null&&io(Zi,t),eo.forEach(i),to.forEach(i),o=0;o<Ji.length;o++)c=Ji[o],c.blockedOn===t&&(c.blockedOn=null);for(;0<Ji.length&&(o=Ji[0],o.blockedOn===null);)Mf(o),o.blockedOn===null&&Ji.shift()}var is=C.ReactCurrentBatchConfig,sa=!0;function Xg(t,i,o,c){var f=At,m=is.transition;is.transition=null;try{At=1,Xl(t,i,o,c)}finally{At=f,is.transition=m}}function qg(t,i,o,c){var f=At,m=is.transition;is.transition=null;try{At=4,Xl(t,i,o,c)}finally{At=f,is.transition=m}}function Xl(t,i,o,c){if(sa){var f=ql(t,i,o,c);if(f===null)uc(t,i,c,oa,o),Sf(t,c);else if(jg(f,t,i,o,c))c.stopPropagation();else if(Sf(t,c),i&4&&-1<Gg.indexOf(t)){for(;f!==null;){var m=vo(f);if(m!==null&&vf(m),m=ql(t,i,o,c),m===null&&uc(t,i,c,oa,o),m===f)break;f=m}f!==null&&c.stopPropagation()}else uc(t,i,c,null,o)}}var oa=null;function ql(t,i,o,c){if(oa=null,t=$(c),t=Cr(t),t!==null)if(i=fi(t),i===null)t=null;else if(o=i.tag,o===13){if(t=Jo(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return oa=t,null}function wf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Z()){case Ae:return 1;case De:return 4;case Oe:case je:return 16;case lt:return 536870912;default:return 16}default:return 16}}var Qi=null,Yl=null,aa=null;function Tf(){if(aa)return aa;var t,i=Yl,o=i.length,c,f="value"in Qi?Qi.value:Qi.textContent,m=f.length;for(t=0;t<o&&i[t]===f[t];t++);var T=o-t;for(c=1;c<=T&&i[o-c]===f[m-c];c++);return aa=f.slice(t,1<c?1-c:void 0)}function la(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ca(){return!0}function Af(){return!1}function On(t){function i(o,c,f,m,T){this._reactName=o,this._targetInst=f,this.type=c,this.nativeEvent=m,this.target=T,this.currentTarget=null;for(var z in t)t.hasOwnProperty(z)&&(o=t[z],this[z]=o?o(m):m[z]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?ca:Af,this.isPropagationStopped=Af,this}return N(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ca)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ca)},persist:function(){},isPersistent:ca}),i}var rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$l=On(rs),so=N({},rs,{view:0,detail:0}),Yg=On(so),Kl,Zl,oo,ua=N({},so,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ql,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==oo&&(oo&&t.type==="mousemove"?(Kl=t.screenX-oo.screenX,Zl=t.screenY-oo.screenY):Zl=Kl=0,oo=t),Kl)},movementY:function(t){return"movementY"in t?t.movementY:Zl}}),Cf=On(ua),$g=N({},ua,{dataTransfer:0}),Kg=On($g),Zg=N({},so,{relatedTarget:0}),Jl=On(Zg),Jg=N({},rs,{animationName:0,elapsedTime:0,pseudoElement:0}),Qg=On(Jg),e0=N({},rs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),t0=On(e0),n0=N({},rs,{data:0}),Rf=On(n0),i0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},r0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},s0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function o0(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=s0[t])?!!i[t]:!1}function Ql(){return o0}var a0=N({},so,{key:function(t){if(t.key){var i=i0[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=la(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?r0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ql,charCode:function(t){return t.type==="keypress"?la(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?la(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),l0=On(a0),c0=N({},ua,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bf=On(c0),u0=N({},so,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ql}),d0=On(u0),f0=N({},rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),h0=On(f0),p0=N({},ua,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),m0=On(p0),g0=[9,13,27,32],ec=d&&"CompositionEvent"in window,ao=null;d&&"documentMode"in document&&(ao=document.documentMode);var v0=d&&"TextEvent"in window&&!ao,Pf=d&&(!ec||ao&&8<ao&&11>=ao),Df=" ",Lf=!1;function Nf(t,i){switch(t){case"keyup":return g0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function If(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ss=!1;function _0(t,i){switch(t){case"compositionend":return If(i);case"keypress":return i.which!==32?null:(Lf=!0,Df);case"textInput":return t=i.data,t===Df&&Lf?null:t;default:return null}}function x0(t,i){if(ss)return t==="compositionend"||!ec&&Nf(t,i)?(t=Tf(),aa=Yl=Qi=null,ss=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Pf&&i.locale!=="ko"?null:i.data;default:return null}}var y0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Uf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!y0[t.type]:i==="textarea"}function Ff(t,i,o,c){Ne(c),i=ma(i,"onChange"),0<i.length&&(o=new $l("onChange","change",null,o,c),t.push({event:o,listeners:i}))}var lo=null,co=null;function S0(t){eh(t,0)}function da(t){var i=us(t);if(Je(i))return t}function M0(t,i){if(t==="change")return i}var Of=!1;if(d){var tc;if(d){var nc="oninput"in document;if(!nc){var kf=document.createElement("div");kf.setAttribute("oninput","return;"),nc=typeof kf.oninput=="function"}tc=nc}else tc=!1;Of=tc&&(!document.documentMode||9<document.documentMode)}function zf(){lo&&(lo.detachEvent("onpropertychange",Bf),co=lo=null)}function Bf(t){if(t.propertyName==="value"&&da(co)){var i=[];Ff(i,co,t,$(t)),Cn(S0,i)}}function E0(t,i,o){t==="focusin"?(zf(),lo=i,co=o,lo.attachEvent("onpropertychange",Bf)):t==="focusout"&&zf()}function w0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return da(co)}function T0(t,i){if(t==="click")return da(i)}function A0(t,i){if(t==="input"||t==="change")return da(i)}function C0(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Qn=typeof Object.is=="function"?Object.is:C0;function uo(t,i){if(Qn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),c=Object.keys(i);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var f=o[c];if(!h.call(i,f)||!Qn(t[f],i[f]))return!1}return!0}function Hf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Vf(t,i){var o=Hf(t);t=0;for(var c;o;){if(o.nodeType===3){if(c=t+o.textContent.length,t<=i&&c>=i)return{node:o,offset:i-t};t=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Hf(o)}}function Gf(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Gf(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function jf(){for(var t=window,i=Xe();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=Xe(t.document)}return i}function ic(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function R0(t){var i=jf(),o=t.focusedElem,c=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&Gf(o.ownerDocument.documentElement,o)){if(c!==null&&ic(o)){if(i=c.start,t=c.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var f=o.textContent.length,m=Math.min(c.start,f);c=c.end===void 0?m:Math.min(c.end,f),!t.extend&&m>c&&(f=c,c=m,m=f),f=Vf(o,m);var T=Vf(o,c);f&&T&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==T.node||t.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),t.removeAllRanges(),m>c?(t.addRange(i),t.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var b0=d&&"documentMode"in document&&11>=document.documentMode,os=null,rc=null,fo=null,sc=!1;function Wf(t,i,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;sc||os==null||os!==Xe(c)||(c=os,"selectionStart"in c&&ic(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),fo&&uo(fo,c)||(fo=c,c=ma(rc,"onSelect"),0<c.length&&(i=new $l("onSelect","select",null,i,o),t.push({event:i,listeners:c}),i.target=os)))}function fa(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var as={animationend:fa("Animation","AnimationEnd"),animationiteration:fa("Animation","AnimationIteration"),animationstart:fa("Animation","AnimationStart"),transitionend:fa("Transition","TransitionEnd")},oc={},Xf={};d&&(Xf=document.createElement("div").style,"AnimationEvent"in window||(delete as.animationend.animation,delete as.animationiteration.animation,delete as.animationstart.animation),"TransitionEvent"in window||delete as.transitionend.transition);function ha(t){if(oc[t])return oc[t];if(!as[t])return t;var i=as[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in Xf)return oc[t]=i[o];return t}var qf=ha("animationend"),Yf=ha("animationiteration"),$f=ha("animationstart"),Kf=ha("transitionend"),Zf=new Map,Jf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function er(t,i){Zf.set(t,i),l(i,[t])}for(var ac=0;ac<Jf.length;ac++){var lc=Jf[ac],P0=lc.toLowerCase(),D0=lc[0].toUpperCase()+lc.slice(1);er(P0,"on"+D0)}er(qf,"onAnimationEnd"),er(Yf,"onAnimationIteration"),er($f,"onAnimationStart"),er("dblclick","onDoubleClick"),er("focusin","onFocus"),er("focusout","onBlur"),er(Kf,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),L0=new Set("cancel close invalid load scroll toggle".split(" ").concat(ho));function Qf(t,i,o){var c=t.type||"unknown-event";t.currentTarget=o,Zo(c,i,void 0,t),t.currentTarget=null}function eh(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var c=t[o],f=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var T=c.length-1;0<=T;T--){var z=c[T],V=z.instance,ce=z.currentTarget;if(z=z.listener,V!==m&&f.isPropagationStopped())break e;Qf(f,z,ce),m=V}else for(T=0;T<c.length;T++){if(z=c[T],V=z.instance,ce=z.currentTarget,z=z.listener,V!==m&&f.isPropagationStopped())break e;Qf(f,z,ce),m=V}}}if(Ar)throw t=qi,Ar=!1,qi=null,t}function Ot(t,i){var o=i[gc];o===void 0&&(o=i[gc]=new Set);var c=t+"__bubble";o.has(c)||(th(i,t,2,!1),o.add(c))}function cc(t,i,o){var c=0;i&&(c|=4),th(o,t,c,i)}var pa="_reactListening"+Math.random().toString(36).slice(2);function po(t){if(!t[pa]){t[pa]=!0,r.forEach(function(o){o!=="selectionchange"&&(L0.has(o)||cc(o,!1,t),cc(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[pa]||(i[pa]=!0,cc("selectionchange",!1,i))}}function th(t,i,o,c){switch(wf(i)){case 1:var f=Xg;break;case 4:f=qg;break;default:f=Xl}o=f.bind(null,i,o,t),f=void 0,!ts||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),c?f!==void 0?t.addEventListener(i,o,{capture:!0,passive:f}):t.addEventListener(i,o,!0):f!==void 0?t.addEventListener(i,o,{passive:f}):t.addEventListener(i,o,!1)}function uc(t,i,o,c,f){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var z=c.stateNode.containerInfo;if(z===f||z.nodeType===8&&z.parentNode===f)break;if(T===4)for(T=c.return;T!==null;){var V=T.tag;if((V===3||V===4)&&(V=T.stateNode.containerInfo,V===f||V.nodeType===8&&V.parentNode===f))return;T=T.return}for(;z!==null;){if(T=Cr(z),T===null)return;if(V=T.tag,V===5||V===6){c=m=T;continue e}z=z.parentNode}}c=c.return}Cn(function(){var ce=m,Ee=$(o),Te=[];e:{var Se=Zf.get(t);if(Se!==void 0){var ke=$l,We=t;switch(t){case"keypress":if(la(o)===0)break e;case"keydown":case"keyup":ke=l0;break;case"focusin":We="focus",ke=Jl;break;case"focusout":We="blur",ke=Jl;break;case"beforeblur":case"afterblur":ke=Jl;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ke=Cf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ke=Kg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ke=d0;break;case qf:case Yf:case $f:ke=Qg;break;case Kf:ke=h0;break;case"scroll":ke=Yg;break;case"wheel":ke=m0;break;case"copy":case"cut":case"paste":ke=t0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ke=bf}var $e=(i&4)!==0,Yt=!$e&&t==="scroll",te=$e?Se!==null?Se+"Capture":null:Se;$e=[];for(var X=ce,ie;X!==null;){ie=X;var Re=ie.stateNode;if(ie.tag===5&&Re!==null&&(ie=Re,te!==null&&(Re=Mn(X,te),Re!=null&&$e.push(mo(X,Re,ie)))),Yt)break;X=X.return}0<$e.length&&(Se=new ke(Se,We,null,o,Ee),Te.push({event:Se,listeners:$e}))}}if((i&7)===0){e:{if(Se=t==="mouseover"||t==="pointerover",ke=t==="mouseout"||t==="pointerout",Se&&o!==Dt&&(We=o.relatedTarget||o.fromElement)&&(Cr(We)||We[Ti]))break e;if((ke||Se)&&(Se=Ee.window===Ee?Ee:(Se=Ee.ownerDocument)?Se.defaultView||Se.parentWindow:window,ke?(We=o.relatedTarget||o.toElement,ke=ce,We=We?Cr(We):null,We!==null&&(Yt=fi(We),We!==Yt||We.tag!==5&&We.tag!==6)&&(We=null)):(ke=null,We=ce),ke!==We)){if($e=Cf,Re="onMouseLeave",te="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&($e=bf,Re="onPointerLeave",te="onPointerEnter",X="pointer"),Yt=ke==null?Se:us(ke),ie=We==null?Se:us(We),Se=new $e(Re,X+"leave",ke,o,Ee),Se.target=Yt,Se.relatedTarget=ie,Re=null,Cr(Ee)===ce&&($e=new $e(te,X+"enter",We,o,Ee),$e.target=ie,$e.relatedTarget=Yt,Re=$e),Yt=Re,ke&&We)t:{for($e=ke,te=We,X=0,ie=$e;ie;ie=ls(ie))X++;for(ie=0,Re=te;Re;Re=ls(Re))ie++;for(;0<X-ie;)$e=ls($e),X--;for(;0<ie-X;)te=ls(te),ie--;for(;X--;){if($e===te||te!==null&&$e===te.alternate)break t;$e=ls($e),te=ls(te)}$e=null}else $e=null;ke!==null&&nh(Te,Se,ke,$e,!1),We!==null&&Yt!==null&&nh(Te,Yt,We,$e,!0)}}e:{if(Se=ce?us(ce):window,ke=Se.nodeName&&Se.nodeName.toLowerCase(),ke==="select"||ke==="input"&&Se.type==="file")var Ke=M0;else if(Uf(Se))if(Of)Ke=A0;else{Ke=w0;var nt=E0}else(ke=Se.nodeName)&&ke.toLowerCase()==="input"&&(Se.type==="checkbox"||Se.type==="radio")&&(Ke=T0);if(Ke&&(Ke=Ke(t,ce))){Ff(Te,Ke,o,Ee);break e}nt&&nt(t,Se,ce),t==="focusout"&&(nt=Se._wrapperState)&&nt.controlled&&Se.type==="number"&&yt(Se,"number",Se.value)}switch(nt=ce?us(ce):window,t){case"focusin":(Uf(nt)||nt.contentEditable==="true")&&(os=nt,rc=ce,fo=null);break;case"focusout":fo=rc=os=null;break;case"mousedown":sc=!0;break;case"contextmenu":case"mouseup":case"dragend":sc=!1,Wf(Te,o,Ee);break;case"selectionchange":if(b0)break;case"keydown":case"keyup":Wf(Te,o,Ee)}var it;if(ec)e:{switch(t){case"compositionstart":var ct="onCompositionStart";break e;case"compositionend":ct="onCompositionEnd";break e;case"compositionupdate":ct="onCompositionUpdate";break e}ct=void 0}else ss?Nf(t,o)&&(ct="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(ct="onCompositionStart");ct&&(Pf&&o.locale!=="ko"&&(ss||ct!=="onCompositionStart"?ct==="onCompositionEnd"&&ss&&(it=Tf()):(Qi=Ee,Yl="value"in Qi?Qi.value:Qi.textContent,ss=!0)),nt=ma(ce,ct),0<nt.length&&(ct=new Rf(ct,t,null,o,Ee),Te.push({event:ct,listeners:nt}),it?ct.data=it:(it=If(o),it!==null&&(ct.data=it)))),(it=v0?_0(t,o):x0(t,o))&&(ce=ma(ce,"onBeforeInput"),0<ce.length&&(Ee=new Rf("onBeforeInput","beforeinput",null,o,Ee),Te.push({event:Ee,listeners:ce}),Ee.data=it))}eh(Te,i)})}function mo(t,i,o){return{instance:t,listener:i,currentTarget:o}}function ma(t,i){for(var o=i+"Capture",c=[];t!==null;){var f=t,m=f.stateNode;f.tag===5&&m!==null&&(f=m,m=Mn(t,o),m!=null&&c.unshift(mo(t,m,f)),m=Mn(t,i),m!=null&&c.push(mo(t,m,f))),t=t.return}return c}function ls(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function nh(t,i,o,c,f){for(var m=i._reactName,T=[];o!==null&&o!==c;){var z=o,V=z.alternate,ce=z.stateNode;if(V!==null&&V===c)break;z.tag===5&&ce!==null&&(z=ce,f?(V=Mn(o,m),V!=null&&T.unshift(mo(o,V,z))):f||(V=Mn(o,m),V!=null&&T.push(mo(o,V,z)))),o=o.return}T.length!==0&&t.push({event:i,listeners:T})}var N0=/\r\n?/g,I0=/\u0000|\uFFFD/g;function ih(t){return(typeof t=="string"?t:""+t).replace(N0,`
`).replace(I0,"")}function ga(t,i,o){if(i=ih(i),ih(t)!==i&&o)throw Error(n(425))}function va(){}var dc=null,fc=null;function hc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var pc=typeof setTimeout=="function"?setTimeout:void 0,U0=typeof clearTimeout=="function"?clearTimeout:void 0,rh=typeof Promise=="function"?Promise:void 0,F0=typeof queueMicrotask=="function"?queueMicrotask:typeof rh<"u"?function(t){return rh.resolve(null).then(t).catch(O0)}:pc;function O0(t){setTimeout(function(){throw t})}function mc(t,i){var o=i,c=0;do{var f=o.nextSibling;if(t.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(c===0){t.removeChild(f),ro(i);return}c--}else o!=="$"&&o!=="$?"&&o!=="$!"||c++;o=f}while(o);ro(i)}function tr(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function sh(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var cs=Math.random().toString(36).slice(2),pi="__reactFiber$"+cs,go="__reactProps$"+cs,Ti="__reactContainer$"+cs,gc="__reactEvents$"+cs,k0="__reactListeners$"+cs,z0="__reactHandles$"+cs;function Cr(t){var i=t[pi];if(i)return i;for(var o=t.parentNode;o;){if(i=o[Ti]||o[pi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=sh(t);t!==null;){if(o=t[pi])return o;t=sh(t)}return i}t=o,o=t.parentNode}return null}function vo(t){return t=t[pi]||t[Ti],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function us(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function _a(t){return t[go]||null}var vc=[],ds=-1;function nr(t){return{current:t}}function kt(t){0>ds||(t.current=vc[ds],vc[ds]=null,ds--)}function Ut(t,i){ds++,vc[ds]=t.current,t.current=i}var ir={},mn=nr(ir),Rn=nr(!1),Rr=ir;function fs(t,i){var o=t.type.contextTypes;if(!o)return ir;var c=t.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var f={},m;for(m in o)f[m]=i[m];return c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=f),f}function bn(t){return t=t.childContextTypes,t!=null}function xa(){kt(Rn),kt(mn)}function oh(t,i,o){if(mn.current!==ir)throw Error(n(168));Ut(mn,i),Ut(Rn,o)}function ah(t,i,o){var c=t.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return o;c=c.getChildContext();for(var f in c)if(!(f in i))throw Error(n(108,Q(t)||"Unknown",f));return N({},o,c)}function ya(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ir,Rr=mn.current,Ut(mn,t),Ut(Rn,Rn.current),!0}function lh(t,i,o){var c=t.stateNode;if(!c)throw Error(n(169));o?(t=ah(t,i,Rr),c.__reactInternalMemoizedMergedChildContext=t,kt(Rn),kt(mn),Ut(mn,t)):kt(Rn),Ut(Rn,o)}var Ai=null,Sa=!1,_c=!1;function ch(t){Ai===null?Ai=[t]:Ai.push(t)}function B0(t){Sa=!0,ch(t)}function rr(){if(!_c&&Ai!==null){_c=!0;var t=0,i=At;try{var o=Ai;for(At=1;t<o.length;t++){var c=o[t];do c=c(!0);while(c!==null)}Ai=null,Sa=!1}catch(f){throw Ai!==null&&(Ai=Ai.slice(t+1)),na(Ae,rr),f}finally{At=i,_c=!1}}return null}var hs=[],ps=0,Ma=null,Ea=0,Wn=[],Xn=0,br=null,Ci=1,Ri="";function Pr(t,i){hs[ps++]=Ea,hs[ps++]=Ma,Ma=t,Ea=i}function uh(t,i,o){Wn[Xn++]=Ci,Wn[Xn++]=Ri,Wn[Xn++]=br,br=t;var c=Ci;t=Ri;var f=32-ht(c)-1;c&=~(1<<f),o+=1;var m=32-ht(i)+f;if(30<m){var T=f-f%5;m=(c&(1<<T)-1).toString(32),c>>=T,f-=T,Ci=1<<32-ht(i)+f|o<<f|c,Ri=m+t}else Ci=1<<m|o<<f|c,Ri=t}function xc(t){t.return!==null&&(Pr(t,1),uh(t,1,0))}function yc(t){for(;t===Ma;)Ma=hs[--ps],hs[ps]=null,Ea=hs[--ps],hs[ps]=null;for(;t===br;)br=Wn[--Xn],Wn[Xn]=null,Ri=Wn[--Xn],Wn[Xn]=null,Ci=Wn[--Xn],Wn[Xn]=null}var kn=null,zn=null,Vt=!1,ei=null;function dh(t,i){var o=Kn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function fh(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,kn=t,zn=tr(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,kn=t,zn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=br!==null?{id:Ci,overflow:Ri}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Kn(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,kn=t,zn=null,!0):!1;default:return!1}}function Sc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Mc(t){if(Vt){var i=zn;if(i){var o=i;if(!fh(t,i)){if(Sc(t))throw Error(n(418));i=tr(o.nextSibling);var c=kn;i&&fh(t,i)?dh(c,o):(t.flags=t.flags&-4097|2,Vt=!1,kn=t)}}else{if(Sc(t))throw Error(n(418));t.flags=t.flags&-4097|2,Vt=!1,kn=t}}}function hh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;kn=t}function wa(t){if(t!==kn)return!1;if(!Vt)return hh(t),Vt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!hc(t.type,t.memoizedProps)),i&&(i=zn)){if(Sc(t))throw ph(),Error(n(418));for(;i;)dh(t,i),i=tr(i.nextSibling)}if(hh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){zn=tr(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}zn=null}}else zn=kn?tr(t.stateNode.nextSibling):null;return!0}function ph(){for(var t=zn;t;)t=tr(t.nextSibling)}function ms(){zn=kn=null,Vt=!1}function Ec(t){ei===null?ei=[t]:ei.push(t)}var H0=C.ReactCurrentBatchConfig;function _o(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var c=o.stateNode}if(!c)throw Error(n(147,t));var f=c,m=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(T){var z=f.refs;T===null?delete z[m]:z[m]=T},i._stringRef=m,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function Ta(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function mh(t){var i=t._init;return i(t._payload)}function gh(t){function i(te,X){if(t){var ie=te.deletions;ie===null?(te.deletions=[X],te.flags|=16):ie.push(X)}}function o(te,X){if(!t)return null;for(;X!==null;)i(te,X),X=X.sibling;return null}function c(te,X){for(te=new Map;X!==null;)X.key!==null?te.set(X.key,X):te.set(X.index,X),X=X.sibling;return te}function f(te,X){return te=fr(te,X),te.index=0,te.sibling=null,te}function m(te,X,ie){return te.index=ie,t?(ie=te.alternate,ie!==null?(ie=ie.index,ie<X?(te.flags|=2,X):ie):(te.flags|=2,X)):(te.flags|=1048576,X)}function T(te){return t&&te.alternate===null&&(te.flags|=2),te}function z(te,X,ie,Re){return X===null||X.tag!==6?(X=pu(ie,te.mode,Re),X.return=te,X):(X=f(X,ie),X.return=te,X)}function V(te,X,ie,Re){var Ke=ie.type;return Ke===U?Ee(te,X,ie.props.children,Re,ie.key):X!==null&&(X.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===de&&mh(Ke)===X.type)?(Re=f(X,ie.props),Re.ref=_o(te,X,ie),Re.return=te,Re):(Re=$a(ie.type,ie.key,ie.props,null,te.mode,Re),Re.ref=_o(te,X,ie),Re.return=te,Re)}function ce(te,X,ie,Re){return X===null||X.tag!==4||X.stateNode.containerInfo!==ie.containerInfo||X.stateNode.implementation!==ie.implementation?(X=mu(ie,te.mode,Re),X.return=te,X):(X=f(X,ie.children||[]),X.return=te,X)}function Ee(te,X,ie,Re,Ke){return X===null||X.tag!==7?(X=kr(ie,te.mode,Re,Ke),X.return=te,X):(X=f(X,ie),X.return=te,X)}function Te(te,X,ie){if(typeof X=="string"&&X!==""||typeof X=="number")return X=pu(""+X,te.mode,ie),X.return=te,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case j:return ie=$a(X.type,X.key,X.props,null,te.mode,ie),ie.ref=_o(te,null,X),ie.return=te,ie;case B:return X=mu(X,te.mode,ie),X.return=te,X;case de:var Re=X._init;return Te(te,Re(X._payload),ie)}if(Ue(X)||le(X))return X=kr(X,te.mode,ie,null),X.return=te,X;Ta(te,X)}return null}function Se(te,X,ie,Re){var Ke=X!==null?X.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number")return Ke!==null?null:z(te,X,""+ie,Re);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case j:return ie.key===Ke?V(te,X,ie,Re):null;case B:return ie.key===Ke?ce(te,X,ie,Re):null;case de:return Ke=ie._init,Se(te,X,Ke(ie._payload),Re)}if(Ue(ie)||le(ie))return Ke!==null?null:Ee(te,X,ie,Re,null);Ta(te,ie)}return null}function ke(te,X,ie,Re,Ke){if(typeof Re=="string"&&Re!==""||typeof Re=="number")return te=te.get(ie)||null,z(X,te,""+Re,Ke);if(typeof Re=="object"&&Re!==null){switch(Re.$$typeof){case j:return te=te.get(Re.key===null?ie:Re.key)||null,V(X,te,Re,Ke);case B:return te=te.get(Re.key===null?ie:Re.key)||null,ce(X,te,Re,Ke);case de:var nt=Re._init;return ke(te,X,ie,nt(Re._payload),Ke)}if(Ue(Re)||le(Re))return te=te.get(ie)||null,Ee(X,te,Re,Ke,null);Ta(X,Re)}return null}function We(te,X,ie,Re){for(var Ke=null,nt=null,it=X,ct=X=0,an=null;it!==null&&ct<ie.length;ct++){it.index>ct?(an=it,it=null):an=it.sibling;var bt=Se(te,it,ie[ct],Re);if(bt===null){it===null&&(it=an);break}t&&it&&bt.alternate===null&&i(te,it),X=m(bt,X,ct),nt===null?Ke=bt:nt.sibling=bt,nt=bt,it=an}if(ct===ie.length)return o(te,it),Vt&&Pr(te,ct),Ke;if(it===null){for(;ct<ie.length;ct++)it=Te(te,ie[ct],Re),it!==null&&(X=m(it,X,ct),nt===null?Ke=it:nt.sibling=it,nt=it);return Vt&&Pr(te,ct),Ke}for(it=c(te,it);ct<ie.length;ct++)an=ke(it,te,ct,ie[ct],Re),an!==null&&(t&&an.alternate!==null&&it.delete(an.key===null?ct:an.key),X=m(an,X,ct),nt===null?Ke=an:nt.sibling=an,nt=an);return t&&it.forEach(function(hr){return i(te,hr)}),Vt&&Pr(te,ct),Ke}function $e(te,X,ie,Re){var Ke=le(ie);if(typeof Ke!="function")throw Error(n(150));if(ie=Ke.call(ie),ie==null)throw Error(n(151));for(var nt=Ke=null,it=X,ct=X=0,an=null,bt=ie.next();it!==null&&!bt.done;ct++,bt=ie.next()){it.index>ct?(an=it,it=null):an=it.sibling;var hr=Se(te,it,bt.value,Re);if(hr===null){it===null&&(it=an);break}t&&it&&hr.alternate===null&&i(te,it),X=m(hr,X,ct),nt===null?Ke=hr:nt.sibling=hr,nt=hr,it=an}if(bt.done)return o(te,it),Vt&&Pr(te,ct),Ke;if(it===null){for(;!bt.done;ct++,bt=ie.next())bt=Te(te,bt.value,Re),bt!==null&&(X=m(bt,X,ct),nt===null?Ke=bt:nt.sibling=bt,nt=bt);return Vt&&Pr(te,ct),Ke}for(it=c(te,it);!bt.done;ct++,bt=ie.next())bt=ke(it,te,ct,bt.value,Re),bt!==null&&(t&&bt.alternate!==null&&it.delete(bt.key===null?ct:bt.key),X=m(bt,X,ct),nt===null?Ke=bt:nt.sibling=bt,nt=bt);return t&&it.forEach(function(yv){return i(te,yv)}),Vt&&Pr(te,ct),Ke}function Yt(te,X,ie,Re){if(typeof ie=="object"&&ie!==null&&ie.type===U&&ie.key===null&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case j:e:{for(var Ke=ie.key,nt=X;nt!==null;){if(nt.key===Ke){if(Ke=ie.type,Ke===U){if(nt.tag===7){o(te,nt.sibling),X=f(nt,ie.props.children),X.return=te,te=X;break e}}else if(nt.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===de&&mh(Ke)===nt.type){o(te,nt.sibling),X=f(nt,ie.props),X.ref=_o(te,nt,ie),X.return=te,te=X;break e}o(te,nt);break}else i(te,nt);nt=nt.sibling}ie.type===U?(X=kr(ie.props.children,te.mode,Re,ie.key),X.return=te,te=X):(Re=$a(ie.type,ie.key,ie.props,null,te.mode,Re),Re.ref=_o(te,X,ie),Re.return=te,te=Re)}return T(te);case B:e:{for(nt=ie.key;X!==null;){if(X.key===nt)if(X.tag===4&&X.stateNode.containerInfo===ie.containerInfo&&X.stateNode.implementation===ie.implementation){o(te,X.sibling),X=f(X,ie.children||[]),X.return=te,te=X;break e}else{o(te,X);break}else i(te,X);X=X.sibling}X=mu(ie,te.mode,Re),X.return=te,te=X}return T(te);case de:return nt=ie._init,Yt(te,X,nt(ie._payload),Re)}if(Ue(ie))return We(te,X,ie,Re);if(le(ie))return $e(te,X,ie,Re);Ta(te,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"?(ie=""+ie,X!==null&&X.tag===6?(o(te,X.sibling),X=f(X,ie),X.return=te,te=X):(o(te,X),X=pu(ie,te.mode,Re),X.return=te,te=X),T(te)):o(te,X)}return Yt}var gs=gh(!0),vh=gh(!1),Aa=nr(null),Ca=null,vs=null,wc=null;function Tc(){wc=vs=Ca=null}function Ac(t){var i=Aa.current;kt(Aa),t._currentValue=i}function Cc(t,i,o){for(;t!==null;){var c=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),t===o)break;t=t.return}}function _s(t,i){Ca=t,wc=vs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Pn=!0),t.firstContext=null)}function qn(t){var i=t._currentValue;if(wc!==t)if(t={context:t,memoizedValue:i,next:null},vs===null){if(Ca===null)throw Error(n(308));vs=t,Ca.dependencies={lanes:0,firstContext:t}}else vs=vs.next=t;return i}var Dr=null;function Rc(t){Dr===null?Dr=[t]:Dr.push(t)}function _h(t,i,o,c){var f=i.interleaved;return f===null?(o.next=o,Rc(i)):(o.next=f.next,f.next=o),i.interleaved=o,bi(t,c)}function bi(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var sr=!1;function bc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Pi(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function or(t,i,o){var c=t.updateQueue;if(c===null)return null;if(c=c.shared,(Ct&2)!==0){var f=c.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),c.pending=i,bi(t,o)}return f=c.interleaved,f===null?(i.next=i,Rc(c)):(i.next=f.next,f.next=i),c.interleaved=i,bi(t,o)}function Ra(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var c=i.lanes;c&=t.pendingLanes,o|=c,i.lanes=o,rn(t,o)}}function yh(t,i){var o=t.updateQueue,c=t.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var T={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};m===null?f=m=T:m=m.next=T,o=o.next}while(o!==null);m===null?f=m=i:m=m.next=i}else f=m=i;o={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:c.shared,effects:c.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function ba(t,i,o,c){var f=t.updateQueue;sr=!1;var m=f.firstBaseUpdate,T=f.lastBaseUpdate,z=f.shared.pending;if(z!==null){f.shared.pending=null;var V=z,ce=V.next;V.next=null,T===null?m=ce:T.next=ce,T=V;var Ee=t.alternate;Ee!==null&&(Ee=Ee.updateQueue,z=Ee.lastBaseUpdate,z!==T&&(z===null?Ee.firstBaseUpdate=ce:z.next=ce,Ee.lastBaseUpdate=V))}if(m!==null){var Te=f.baseState;T=0,Ee=ce=V=null,z=m;do{var Se=z.lane,ke=z.eventTime;if((c&Se)===Se){Ee!==null&&(Ee=Ee.next={eventTime:ke,lane:0,tag:z.tag,payload:z.payload,callback:z.callback,next:null});e:{var We=t,$e=z;switch(Se=i,ke=o,$e.tag){case 1:if(We=$e.payload,typeof We=="function"){Te=We.call(ke,Te,Se);break e}Te=We;break e;case 3:We.flags=We.flags&-65537|128;case 0:if(We=$e.payload,Se=typeof We=="function"?We.call(ke,Te,Se):We,Se==null)break e;Te=N({},Te,Se);break e;case 2:sr=!0}}z.callback!==null&&z.lane!==0&&(t.flags|=64,Se=f.effects,Se===null?f.effects=[z]:Se.push(z))}else ke={eventTime:ke,lane:Se,tag:z.tag,payload:z.payload,callback:z.callback,next:null},Ee===null?(ce=Ee=ke,V=Te):Ee=Ee.next=ke,T|=Se;if(z=z.next,z===null){if(z=f.shared.pending,z===null)break;Se=z,z=Se.next,Se.next=null,f.lastBaseUpdate=Se,f.shared.pending=null}}while(!0);if(Ee===null&&(V=Te),f.baseState=V,f.firstBaseUpdate=ce,f.lastBaseUpdate=Ee,i=f.shared.interleaved,i!==null){f=i;do T|=f.lane,f=f.next;while(f!==i)}else m===null&&(f.shared.lanes=0);Ir|=T,t.lanes=T,t.memoizedState=Te}}function Sh(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var c=t[i],f=c.callback;if(f!==null){if(c.callback=null,c=o,typeof f!="function")throw Error(n(191,f));f.call(c)}}}var xo={},mi=nr(xo),yo=nr(xo),So=nr(xo);function Lr(t){if(t===xo)throw Error(n(174));return t}function Pc(t,i){switch(Ut(So,i),Ut(yo,t),Ut(mi,xo),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ye(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Ye(i,t)}kt(mi),Ut(mi,i)}function xs(){kt(mi),kt(yo),kt(So)}function Mh(t){Lr(So.current);var i=Lr(mi.current),o=Ye(i,t.type);i!==o&&(Ut(yo,t),Ut(mi,o))}function Dc(t){yo.current===t&&(kt(mi),kt(yo))}var Gt=nr(0);function Pa(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Lc=[];function Nc(){for(var t=0;t<Lc.length;t++)Lc[t]._workInProgressVersionPrimary=null;Lc.length=0}var Da=C.ReactCurrentDispatcher,Ic=C.ReactCurrentBatchConfig,Nr=0,jt=null,Jt=null,sn=null,La=!1,Mo=!1,Eo=0,V0=0;function gn(){throw Error(n(321))}function Uc(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!Qn(t[o],i[o]))return!1;return!0}function Fc(t,i,o,c,f,m){if(Nr=m,jt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Da.current=t===null||t.memoizedState===null?X0:q0,t=o(c,f),Mo){m=0;do{if(Mo=!1,Eo=0,25<=m)throw Error(n(301));m+=1,sn=Jt=null,i.updateQueue=null,Da.current=Y0,t=o(c,f)}while(Mo)}if(Da.current=Ua,i=Jt!==null&&Jt.next!==null,Nr=0,sn=Jt=jt=null,La=!1,i)throw Error(n(300));return t}function Oc(){var t=Eo!==0;return Eo=0,t}function gi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?jt.memoizedState=sn=t:sn=sn.next=t,sn}function Yn(){if(Jt===null){var t=jt.alternate;t=t!==null?t.memoizedState:null}else t=Jt.next;var i=sn===null?jt.memoizedState:sn.next;if(i!==null)sn=i,Jt=t;else{if(t===null)throw Error(n(310));Jt=t,t={memoizedState:Jt.memoizedState,baseState:Jt.baseState,baseQueue:Jt.baseQueue,queue:Jt.queue,next:null},sn===null?jt.memoizedState=sn=t:sn=sn.next=t}return sn}function wo(t,i){return typeof i=="function"?i(t):i}function kc(t){var i=Yn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var c=Jt,f=c.baseQueue,m=o.pending;if(m!==null){if(f!==null){var T=f.next;f.next=m.next,m.next=T}c.baseQueue=f=m,o.pending=null}if(f!==null){m=f.next,c=c.baseState;var z=T=null,V=null,ce=m;do{var Ee=ce.lane;if((Nr&Ee)===Ee)V!==null&&(V=V.next={lane:0,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null}),c=ce.hasEagerState?ce.eagerState:t(c,ce.action);else{var Te={lane:Ee,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null};V===null?(z=V=Te,T=c):V=V.next=Te,jt.lanes|=Ee,Ir|=Ee}ce=ce.next}while(ce!==null&&ce!==m);V===null?T=c:V.next=z,Qn(c,i.memoizedState)||(Pn=!0),i.memoizedState=c,i.baseState=T,i.baseQueue=V,o.lastRenderedState=c}if(t=o.interleaved,t!==null){f=t;do m=f.lane,jt.lanes|=m,Ir|=m,f=f.next;while(f!==t)}else f===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function zc(t){var i=Yn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var c=o.dispatch,f=o.pending,m=i.memoizedState;if(f!==null){o.pending=null;var T=f=f.next;do m=t(m,T.action),T=T.next;while(T!==f);Qn(m,i.memoizedState)||(Pn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),o.lastRenderedState=m}return[m,c]}function Eh(){}function wh(t,i){var o=jt,c=Yn(),f=i(),m=!Qn(c.memoizedState,f);if(m&&(c.memoizedState=f,Pn=!0),c=c.queue,Bc(Ch.bind(null,o,c,t),[t]),c.getSnapshot!==i||m||sn!==null&&sn.memoizedState.tag&1){if(o.flags|=2048,To(9,Ah.bind(null,o,c,f,i),void 0,null),on===null)throw Error(n(349));(Nr&30)!==0||Th(o,i,f)}return f}function Th(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=jt.updateQueue,i===null?(i={lastEffect:null,stores:null},jt.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function Ah(t,i,o,c){i.value=o,i.getSnapshot=c,Rh(i)&&bh(t)}function Ch(t,i,o){return o(function(){Rh(i)&&bh(t)})}function Rh(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!Qn(t,o)}catch{return!0}}function bh(t){var i=bi(t,1);i!==null&&ri(i,t,1,-1)}function Ph(t){var i=gi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wo,lastRenderedState:t},i.queue=t,t=t.dispatch=W0.bind(null,jt,t),[i.memoizedState,t]}function To(t,i,o,c){return t={tag:t,create:i,destroy:o,deps:c,next:null},i=jt.updateQueue,i===null?(i={lastEffect:null,stores:null},jt.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(c=o.next,o.next=t,t.next=c,i.lastEffect=t)),t}function Dh(){return Yn().memoizedState}function Na(t,i,o,c){var f=gi();jt.flags|=t,f.memoizedState=To(1|i,o,void 0,c===void 0?null:c)}function Ia(t,i,o,c){var f=Yn();c=c===void 0?null:c;var m=void 0;if(Jt!==null){var T=Jt.memoizedState;if(m=T.destroy,c!==null&&Uc(c,T.deps)){f.memoizedState=To(i,o,m,c);return}}jt.flags|=t,f.memoizedState=To(1|i,o,m,c)}function Lh(t,i){return Na(8390656,8,t,i)}function Bc(t,i){return Ia(2048,8,t,i)}function Nh(t,i){return Ia(4,2,t,i)}function Ih(t,i){return Ia(4,4,t,i)}function Uh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Fh(t,i,o){return o=o!=null?o.concat([t]):null,Ia(4,4,Uh.bind(null,i,t),o)}function Hc(){}function Oh(t,i){var o=Yn();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&Uc(i,c[1])?c[0]:(o.memoizedState=[t,i],t)}function kh(t,i){var o=Yn();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&Uc(i,c[1])?c[0]:(t=t(),o.memoizedState=[t,i],t)}function zh(t,i,o){return(Nr&21)===0?(t.baseState&&(t.baseState=!1,Pn=!0),t.memoizedState=o):(Qn(o,i)||(o=It(),jt.lanes|=o,Ir|=o,t.baseState=!0),i)}function G0(t,i){var o=At;At=o!==0&&4>o?o:4,t(!0);var c=Ic.transition;Ic.transition={};try{t(!1),i()}finally{At=o,Ic.transition=c}}function Bh(){return Yn().memoizedState}function j0(t,i,o){var c=ur(t);if(o={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null},Hh(t))Vh(i,o);else if(o=_h(t,i,o,c),o!==null){var f=Tn();ri(o,t,c,f),Gh(o,i,c)}}function W0(t,i,o){var c=ur(t),f={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null};if(Hh(t))Vh(i,f);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var T=i.lastRenderedState,z=m(T,o);if(f.hasEagerState=!0,f.eagerState=z,Qn(z,T)){var V=i.interleaved;V===null?(f.next=f,Rc(i)):(f.next=V.next,V.next=f),i.interleaved=f;return}}catch{}finally{}o=_h(t,i,f,c),o!==null&&(f=Tn(),ri(o,t,c,f),Gh(o,i,c))}}function Hh(t){var i=t.alternate;return t===jt||i!==null&&i===jt}function Vh(t,i){Mo=La=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function Gh(t,i,o){if((o&4194240)!==0){var c=i.lanes;c&=t.pendingLanes,o|=c,i.lanes=o,rn(t,o)}}var Ua={readContext:qn,useCallback:gn,useContext:gn,useEffect:gn,useImperativeHandle:gn,useInsertionEffect:gn,useLayoutEffect:gn,useMemo:gn,useReducer:gn,useRef:gn,useState:gn,useDebugValue:gn,useDeferredValue:gn,useTransition:gn,useMutableSource:gn,useSyncExternalStore:gn,useId:gn,unstable_isNewReconciler:!1},X0={readContext:qn,useCallback:function(t,i){return gi().memoizedState=[t,i===void 0?null:i],t},useContext:qn,useEffect:Lh,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Na(4194308,4,Uh.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Na(4194308,4,t,i)},useInsertionEffect:function(t,i){return Na(4,2,t,i)},useMemo:function(t,i){var o=gi();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var c=gi();return i=o!==void 0?o(i):i,c.memoizedState=c.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},c.queue=t,t=t.dispatch=j0.bind(null,jt,t),[c.memoizedState,t]},useRef:function(t){var i=gi();return t={current:t},i.memoizedState=t},useState:Ph,useDebugValue:Hc,useDeferredValue:function(t){return gi().memoizedState=t},useTransition:function(){var t=Ph(!1),i=t[0];return t=G0.bind(null,t[1]),gi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var c=jt,f=gi();if(Vt){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),on===null)throw Error(n(349));(Nr&30)!==0||Th(c,i,o)}f.memoizedState=o;var m={value:o,getSnapshot:i};return f.queue=m,Lh(Ch.bind(null,c,m,t),[t]),c.flags|=2048,To(9,Ah.bind(null,c,m,o,i),void 0,null),o},useId:function(){var t=gi(),i=on.identifierPrefix;if(Vt){var o=Ri,c=Ci;o=(c&~(1<<32-ht(c)-1)).toString(32)+o,i=":"+i+"R"+o,o=Eo++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=V0++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},q0={readContext:qn,useCallback:Oh,useContext:qn,useEffect:Bc,useImperativeHandle:Fh,useInsertionEffect:Nh,useLayoutEffect:Ih,useMemo:kh,useReducer:kc,useRef:Dh,useState:function(){return kc(wo)},useDebugValue:Hc,useDeferredValue:function(t){var i=Yn();return zh(i,Jt.memoizedState,t)},useTransition:function(){var t=kc(wo)[0],i=Yn().memoizedState;return[t,i]},useMutableSource:Eh,useSyncExternalStore:wh,useId:Bh,unstable_isNewReconciler:!1},Y0={readContext:qn,useCallback:Oh,useContext:qn,useEffect:Bc,useImperativeHandle:Fh,useInsertionEffect:Nh,useLayoutEffect:Ih,useMemo:kh,useReducer:zc,useRef:Dh,useState:function(){return zc(wo)},useDebugValue:Hc,useDeferredValue:function(t){var i=Yn();return Jt===null?i.memoizedState=t:zh(i,Jt.memoizedState,t)},useTransition:function(){var t=zc(wo)[0],i=Yn().memoizedState;return[t,i]},useMutableSource:Eh,useSyncExternalStore:wh,useId:Bh,unstable_isNewReconciler:!1};function ti(t,i){if(t&&t.defaultProps){i=N({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Vc(t,i,o,c){i=t.memoizedState,o=o(c,i),o=o==null?i:N({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Fa={isMounted:function(t){return(t=t._reactInternals)?fi(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var c=Tn(),f=ur(t),m=Pi(c,f);m.payload=i,o!=null&&(m.callback=o),i=or(t,m,f),i!==null&&(ri(i,t,f,c),Ra(i,t,f))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var c=Tn(),f=ur(t),m=Pi(c,f);m.tag=1,m.payload=i,o!=null&&(m.callback=o),i=or(t,m,f),i!==null&&(ri(i,t,f,c),Ra(i,t,f))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=Tn(),c=ur(t),f=Pi(o,c);f.tag=2,i!=null&&(f.callback=i),i=or(t,f,c),i!==null&&(ri(i,t,c,o),Ra(i,t,c))}};function jh(t,i,o,c,f,m,T){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(c,m,T):i.prototype&&i.prototype.isPureReactComponent?!uo(o,c)||!uo(f,m):!0}function Wh(t,i,o){var c=!1,f=ir,m=i.contextType;return typeof m=="object"&&m!==null?m=qn(m):(f=bn(i)?Rr:mn.current,c=i.contextTypes,m=(c=c!=null)?fs(t,f):ir),i=new i(o,m),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Fa,t.stateNode=i,i._reactInternals=t,c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=m),i}function Xh(t,i,o,c){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,c),i.state!==t&&Fa.enqueueReplaceState(i,i.state,null)}function Gc(t,i,o,c){var f=t.stateNode;f.props=o,f.state=t.memoizedState,f.refs={},bc(t);var m=i.contextType;typeof m=="object"&&m!==null?f.context=qn(m):(m=bn(i)?Rr:mn.current,f.context=fs(t,m)),f.state=t.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(Vc(t,i,m,o),f.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Fa.enqueueReplaceState(f,f.state,null),ba(t,o,f,c),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function ys(t,i){try{var o="",c=i;do o+=re(c),c=c.return;while(c);var f=o}catch(m){f=`
Error generating stack: `+m.message+`
`+m.stack}return{value:t,source:i,stack:f,digest:null}}function jc(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function Wc(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var $0=typeof WeakMap=="function"?WeakMap:Map;function qh(t,i,o){o=Pi(-1,o),o.tag=3,o.payload={element:null};var c=i.value;return o.callback=function(){Ga||(Ga=!0,ou=c),Wc(t,i)},o}function Yh(t,i,o){o=Pi(-1,o),o.tag=3;var c=t.type.getDerivedStateFromError;if(typeof c=="function"){var f=i.value;o.payload=function(){return c(f)},o.callback=function(){Wc(t,i)}}var m=t.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(o.callback=function(){Wc(t,i),typeof c!="function"&&(lr===null?lr=new Set([this]):lr.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})}),o}function $h(t,i,o){var c=t.pingCache;if(c===null){c=t.pingCache=new $0;var f=new Set;c.set(i,f)}else f=c.get(i),f===void 0&&(f=new Set,c.set(i,f));f.has(o)||(f.add(o),t=cv.bind(null,t,i,o),i.then(t,t))}function Kh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Zh(t,i,o,c,f){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Pi(-1,1),i.tag=2,or(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var K0=C.ReactCurrentOwner,Pn=!1;function wn(t,i,o,c){i.child=t===null?vh(i,null,o,c):gs(i,t.child,o,c)}function Jh(t,i,o,c,f){o=o.render;var m=i.ref;return _s(i,f),c=Fc(t,i,o,c,m,f),o=Oc(),t!==null&&!Pn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Di(t,i,f)):(Vt&&o&&xc(i),i.flags|=1,wn(t,i,c,f),i.child)}function Qh(t,i,o,c,f){if(t===null){var m=o.type;return typeof m=="function"&&!hu(m)&&m.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=m,ep(t,i,m,c,f)):(t=$a(o.type,null,c,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(m=t.child,(t.lanes&f)===0){var T=m.memoizedProps;if(o=o.compare,o=o!==null?o:uo,o(T,c)&&t.ref===i.ref)return Di(t,i,f)}return i.flags|=1,t=fr(m,c),t.ref=i.ref,t.return=i,i.child=t}function ep(t,i,o,c,f){if(t!==null){var m=t.memoizedProps;if(uo(m,c)&&t.ref===i.ref)if(Pn=!1,i.pendingProps=c=m,(t.lanes&f)!==0)(t.flags&131072)!==0&&(Pn=!0);else return i.lanes=t.lanes,Di(t,i,f)}return Xc(t,i,o,c,f)}function tp(t,i,o){var c=i.pendingProps,f=c.children,m=t!==null?t.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ut(Ms,Bn),Bn|=o;else{if((o&1073741824)===0)return t=m!==null?m.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Ut(Ms,Bn),Bn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:o,Ut(Ms,Bn),Bn|=c}else m!==null?(c=m.baseLanes|o,i.memoizedState=null):c=o,Ut(Ms,Bn),Bn|=c;return wn(t,i,f,o),i.child}function np(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Xc(t,i,o,c,f){var m=bn(o)?Rr:mn.current;return m=fs(i,m),_s(i,f),o=Fc(t,i,o,c,m,f),c=Oc(),t!==null&&!Pn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Di(t,i,f)):(Vt&&c&&xc(i),i.flags|=1,wn(t,i,o,f),i.child)}function ip(t,i,o,c,f){if(bn(o)){var m=!0;ya(i)}else m=!1;if(_s(i,f),i.stateNode===null)ka(t,i),Wh(i,o,c),Gc(i,o,c,f),c=!0;else if(t===null){var T=i.stateNode,z=i.memoizedProps;T.props=z;var V=T.context,ce=o.contextType;typeof ce=="object"&&ce!==null?ce=qn(ce):(ce=bn(o)?Rr:mn.current,ce=fs(i,ce));var Ee=o.getDerivedStateFromProps,Te=typeof Ee=="function"||typeof T.getSnapshotBeforeUpdate=="function";Te||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(z!==c||V!==ce)&&Xh(i,T,c,ce),sr=!1;var Se=i.memoizedState;T.state=Se,ba(i,c,T,f),V=i.memoizedState,z!==c||Se!==V||Rn.current||sr?(typeof Ee=="function"&&(Vc(i,o,Ee,c),V=i.memoizedState),(z=sr||jh(i,o,z,c,Se,V,ce))?(Te||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(i.flags|=4194308)):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=V),T.props=c,T.state=V,T.context=ce,c=z):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{T=i.stateNode,xh(t,i),z=i.memoizedProps,ce=i.type===i.elementType?z:ti(i.type,z),T.props=ce,Te=i.pendingProps,Se=T.context,V=o.contextType,typeof V=="object"&&V!==null?V=qn(V):(V=bn(o)?Rr:mn.current,V=fs(i,V));var ke=o.getDerivedStateFromProps;(Ee=typeof ke=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(z!==Te||Se!==V)&&Xh(i,T,c,V),sr=!1,Se=i.memoizedState,T.state=Se,ba(i,c,T,f);var We=i.memoizedState;z!==Te||Se!==We||Rn.current||sr?(typeof ke=="function"&&(Vc(i,o,ke,c),We=i.memoizedState),(ce=sr||jh(i,o,ce,c,Se,We,V)||!1)?(Ee||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(c,We,V),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(c,We,V)),typeof T.componentDidUpdate=="function"&&(i.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof T.componentDidUpdate!="function"||z===t.memoizedProps&&Se===t.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||z===t.memoizedProps&&Se===t.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=We),T.props=c,T.state=We,T.context=V,c=ce):(typeof T.componentDidUpdate!="function"||z===t.memoizedProps&&Se===t.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||z===t.memoizedProps&&Se===t.memoizedState||(i.flags|=1024),c=!1)}return qc(t,i,o,c,m,f)}function qc(t,i,o,c,f,m){np(t,i);var T=(i.flags&128)!==0;if(!c&&!T)return f&&lh(i,o,!1),Di(t,i,m);c=i.stateNode,K0.current=i;var z=T&&typeof o.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,t!==null&&T?(i.child=gs(i,t.child,null,m),i.child=gs(i,null,z,m)):wn(t,i,z,m),i.memoizedState=c.state,f&&lh(i,o,!0),i.child}function rp(t){var i=t.stateNode;i.pendingContext?oh(t,i.pendingContext,i.pendingContext!==i.context):i.context&&oh(t,i.context,!1),Pc(t,i.containerInfo)}function sp(t,i,o,c,f){return ms(),Ec(f),i.flags|=256,wn(t,i,o,c),i.child}var Yc={dehydrated:null,treeContext:null,retryLane:0};function $c(t){return{baseLanes:t,cachePool:null,transitions:null}}function op(t,i,o){var c=i.pendingProps,f=Gt.current,m=!1,T=(i.flags&128)!==0,z;if((z=T)||(z=t!==null&&t.memoizedState===null?!1:(f&2)!==0),z?(m=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),Ut(Gt,f&1),t===null)return Mc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(T=c.children,t=c.fallback,m?(c=i.mode,m=i.child,T={mode:"hidden",children:T},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=T):m=Ka(T,c,0,null),t=kr(t,c,o,null),m.return=i,t.return=i,m.sibling=t,i.child=m,i.child.memoizedState=$c(o),i.memoizedState=Yc,t):Kc(i,T));if(f=t.memoizedState,f!==null&&(z=f.dehydrated,z!==null))return Z0(t,i,T,c,z,f,o);if(m){m=c.fallback,T=i.mode,f=t.child,z=f.sibling;var V={mode:"hidden",children:c.children};return(T&1)===0&&i.child!==f?(c=i.child,c.childLanes=0,c.pendingProps=V,i.deletions=null):(c=fr(f,V),c.subtreeFlags=f.subtreeFlags&14680064),z!==null?m=fr(z,m):(m=kr(m,T,o,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,T=t.child.memoizedState,T=T===null?$c(o):{baseLanes:T.baseLanes|o,cachePool:null,transitions:T.transitions},m.memoizedState=T,m.childLanes=t.childLanes&~o,i.memoizedState=Yc,c}return m=t.child,t=m.sibling,c=fr(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=o),c.return=i,c.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=c,i.memoizedState=null,c}function Kc(t,i){return i=Ka({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Oa(t,i,o,c){return c!==null&&Ec(c),gs(i,t.child,null,o),t=Kc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Z0(t,i,o,c,f,m,T){if(o)return i.flags&256?(i.flags&=-257,c=jc(Error(n(422))),Oa(t,i,T,c)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(m=c.fallback,f=i.mode,c=Ka({mode:"visible",children:c.children},f,0,null),m=kr(m,f,T,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&gs(i,t.child,null,T),i.child.memoizedState=$c(T),i.memoizedState=Yc,m);if((i.mode&1)===0)return Oa(t,i,T,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var z=c.dgst;return c=z,m=Error(n(419)),c=jc(m,c,void 0),Oa(t,i,T,c)}if(z=(T&t.childLanes)!==0,Pn||z){if(c=on,c!==null){switch(T&-T){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(c.suspendedLanes|T))!==0?0:f,f!==0&&f!==m.retryLane&&(m.retryLane=f,bi(t,f),ri(c,t,f,-1))}return fu(),c=jc(Error(n(421))),Oa(t,i,T,c)}return f.data==="$?"?(i.flags|=128,i.child=t.child,i=uv.bind(null,t),f._reactRetry=i,null):(t=m.treeContext,zn=tr(f.nextSibling),kn=i,Vt=!0,ei=null,t!==null&&(Wn[Xn++]=Ci,Wn[Xn++]=Ri,Wn[Xn++]=br,Ci=t.id,Ri=t.overflow,br=i),i=Kc(i,c.children),i.flags|=4096,i)}function ap(t,i,o){t.lanes|=i;var c=t.alternate;c!==null&&(c.lanes|=i),Cc(t.return,i,o)}function Zc(t,i,o,c,f){var m=t.memoizedState;m===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:f}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=o,m.tailMode=f)}function lp(t,i,o){var c=i.pendingProps,f=c.revealOrder,m=c.tail;if(wn(t,i,c.children,o),c=Gt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ap(t,o,i);else if(t.tag===19)ap(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}c&=1}if(Ut(Gt,c),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(o=i.child,f=null;o!==null;)t=o.alternate,t!==null&&Pa(t)===null&&(f=o),o=o.sibling;o=f,o===null?(f=i.child,i.child=null):(f=o.sibling,o.sibling=null),Zc(i,!1,f,o,m);break;case"backwards":for(o=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&Pa(t)===null){i.child=f;break}t=f.sibling,f.sibling=o,o=f,f=t}Zc(i,!0,o,null,m);break;case"together":Zc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ka(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Di(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),Ir|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=fr(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=fr(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function J0(t,i,o){switch(i.tag){case 3:rp(i),ms();break;case 5:Mh(i);break;case 1:bn(i.type)&&ya(i);break;case 4:Pc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,f=i.memoizedProps.value;Ut(Aa,c._currentValue),c._currentValue=f;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Ut(Gt,Gt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?op(t,i,o):(Ut(Gt,Gt.current&1),t=Di(t,i,o),t!==null?t.sibling:null);Ut(Gt,Gt.current&1);break;case 19:if(c=(o&i.childLanes)!==0,(t.flags&128)!==0){if(c)return lp(t,i,o);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Ut(Gt,Gt.current),c)break;return null;case 22:case 23:return i.lanes=0,tp(t,i,o)}return Di(t,i,o)}var cp,Jc,up,dp;cp=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Jc=function(){},up=function(t,i,o,c){var f=t.memoizedProps;if(f!==c){t=i.stateNode,Lr(mi.current);var m=null;switch(o){case"input":f=k(t,f),c=k(t,c),m=[];break;case"select":f=N({},f,{value:void 0}),c=N({},c,{value:void 0}),m=[];break;case"textarea":f=b(t,f),c=b(t,c),m=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(t.onclick=va)}gt(o,c);var T;o=null;for(ce in f)if(!c.hasOwnProperty(ce)&&f.hasOwnProperty(ce)&&f[ce]!=null)if(ce==="style"){var z=f[ce];for(T in z)z.hasOwnProperty(T)&&(o||(o={}),o[T]="")}else ce!=="dangerouslySetInnerHTML"&&ce!=="children"&&ce!=="suppressContentEditableWarning"&&ce!=="suppressHydrationWarning"&&ce!=="autoFocus"&&(a.hasOwnProperty(ce)?m||(m=[]):(m=m||[]).push(ce,null));for(ce in c){var V=c[ce];if(z=f!=null?f[ce]:void 0,c.hasOwnProperty(ce)&&V!==z&&(V!=null||z!=null))if(ce==="style")if(z){for(T in z)!z.hasOwnProperty(T)||V&&V.hasOwnProperty(T)||(o||(o={}),o[T]="");for(T in V)V.hasOwnProperty(T)&&z[T]!==V[T]&&(o||(o={}),o[T]=V[T])}else o||(m||(m=[]),m.push(ce,o)),o=V;else ce==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,z=z?z.__html:void 0,V!=null&&z!==V&&(m=m||[]).push(ce,V)):ce==="children"?typeof V!="string"&&typeof V!="number"||(m=m||[]).push(ce,""+V):ce!=="suppressContentEditableWarning"&&ce!=="suppressHydrationWarning"&&(a.hasOwnProperty(ce)?(V!=null&&ce==="onScroll"&&Ot("scroll",t),m||z===V||(m=[])):(m=m||[]).push(ce,V))}o&&(m=m||[]).push("style",o);var ce=m;(i.updateQueue=ce)&&(i.flags|=4)}},dp=function(t,i,o,c){o!==c&&(i.flags|=4)};function Ao(t,i){if(!Vt)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:c.sibling=null}}function vn(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,c=0;if(i)for(var f=t.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=c,t.childLanes=o,i}function Q0(t,i,o){var c=i.pendingProps;switch(yc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vn(i),null;case 1:return bn(i.type)&&xa(),vn(i),null;case 3:return c=i.stateNode,xs(),kt(Rn),kt(mn),Nc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(t===null||t.child===null)&&(wa(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ei!==null&&(cu(ei),ei=null))),Jc(t,i),vn(i),null;case 5:Dc(i);var f=Lr(So.current);if(o=i.type,t!==null&&i.stateNode!=null)up(t,i,o,c,f),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(n(166));return vn(i),null}if(t=Lr(mi.current),wa(i)){c=i.stateNode,o=i.type;var m=i.memoizedProps;switch(c[pi]=i,c[go]=m,t=(i.mode&1)!==0,o){case"dialog":Ot("cancel",c),Ot("close",c);break;case"iframe":case"object":case"embed":Ot("load",c);break;case"video":case"audio":for(f=0;f<ho.length;f++)Ot(ho[f],c);break;case"source":Ot("error",c);break;case"img":case"image":case"link":Ot("error",c),Ot("load",c);break;case"details":Ot("toggle",c);break;case"input":Rt(c,m),Ot("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},Ot("invalid",c);break;case"textarea":se(c,m),Ot("invalid",c)}gt(o,m),f=null;for(var T in m)if(m.hasOwnProperty(T)){var z=m[T];T==="children"?typeof z=="string"?c.textContent!==z&&(m.suppressHydrationWarning!==!0&&ga(c.textContent,z,t),f=["children",z]):typeof z=="number"&&c.textContent!==""+z&&(m.suppressHydrationWarning!==!0&&ga(c.textContent,z,t),f=["children",""+z]):a.hasOwnProperty(T)&&z!=null&&T==="onScroll"&&Ot("scroll",c)}switch(o){case"input":Ze(c),He(c,m,!0);break;case"textarea":Ze(c),ye(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=va)}c=f,i.updateQueue=c,c!==null&&(i.flags|=4)}else{T=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ve(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=T.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof c.is=="string"?t=T.createElement(o,{is:c.is}):(t=T.createElement(o),o==="select"&&(T=t,c.multiple?T.multiple=!0:c.size&&(T.size=c.size))):t=T.createElementNS(t,o),t[pi]=i,t[go]=c,cp(t,i,!1,!1),i.stateNode=t;e:{switch(T=ut(o,c),o){case"dialog":Ot("cancel",t),Ot("close",t),f=c;break;case"iframe":case"object":case"embed":Ot("load",t),f=c;break;case"video":case"audio":for(f=0;f<ho.length;f++)Ot(ho[f],t);f=c;break;case"source":Ot("error",t),f=c;break;case"img":case"image":case"link":Ot("error",t),Ot("load",t),f=c;break;case"details":Ot("toggle",t),f=c;break;case"input":Rt(t,c),f=k(t,c),Ot("invalid",t);break;case"option":f=c;break;case"select":t._wrapperState={wasMultiple:!!c.multiple},f=N({},c,{value:void 0}),Ot("invalid",t);break;case"textarea":se(t,c),f=b(t,c),Ot("invalid",t);break;default:f=c}gt(o,f),z=f;for(m in z)if(z.hasOwnProperty(m)){var V=z[m];m==="style"?at(t,V):m==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&Fe(t,V)):m==="children"?typeof V=="string"?(o!=="textarea"||V!=="")&&ft(t,V):typeof V=="number"&&ft(t,""+V):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(a.hasOwnProperty(m)?V!=null&&m==="onScroll"&&Ot("scroll",t):V!=null&&L(t,m,V,T))}switch(o){case"input":Ze(t),He(t,c,!1);break;case"textarea":Ze(t),ye(t);break;case"option":c.value!=null&&t.setAttribute("value",""+he(c.value));break;case"select":t.multiple=!!c.multiple,m=c.value,m!=null?I(t,!!c.multiple,m,!1):c.defaultValue!=null&&I(t,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=va)}switch(o){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return vn(i),null;case 6:if(t&&i.stateNode!=null)dp(t,i,t.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(n(166));if(o=Lr(So.current),Lr(mi.current),wa(i)){if(c=i.stateNode,o=i.memoizedProps,c[pi]=i,(m=c.nodeValue!==o)&&(t=kn,t!==null))switch(t.tag){case 3:ga(c.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ga(c.nodeValue,o,(t.mode&1)!==0)}m&&(i.flags|=4)}else c=(o.nodeType===9?o:o.ownerDocument).createTextNode(c),c[pi]=i,i.stateNode=c}return vn(i),null;case 13:if(kt(Gt),c=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Vt&&zn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)ph(),ms(),i.flags|=98560,m=!1;else if(m=wa(i),c!==null&&c.dehydrated!==null){if(t===null){if(!m)throw Error(n(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(n(317));m[pi]=i}else ms(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;vn(i),m=!1}else ei!==null&&(cu(ei),ei=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(c=c!==null,c!==(t!==null&&t.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Gt.current&1)!==0?Qt===0&&(Qt=3):fu())),i.updateQueue!==null&&(i.flags|=4),vn(i),null);case 4:return xs(),Jc(t,i),t===null&&po(i.stateNode.containerInfo),vn(i),null;case 10:return Ac(i.type._context),vn(i),null;case 17:return bn(i.type)&&xa(),vn(i),null;case 19:if(kt(Gt),m=i.memoizedState,m===null)return vn(i),null;if(c=(i.flags&128)!==0,T=m.rendering,T===null)if(c)Ao(m,!1);else{if(Qt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(T=Pa(t),T!==null){for(i.flags|=128,Ao(m,!1),c=T.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=o,o=i.child;o!==null;)m=o,t=c,m.flags&=14680066,T=m.alternate,T===null?(m.childLanes=0,m.lanes=t,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=T.childLanes,m.lanes=T.lanes,m.child=T.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=T.memoizedProps,m.memoizedState=T.memoizedState,m.updateQueue=T.updateQueue,m.type=T.type,t=T.dependencies,m.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Ut(Gt,Gt.current&1|2),i.child}t=t.sibling}m.tail!==null&&ne()>Es&&(i.flags|=128,c=!0,Ao(m,!1),i.lanes=4194304)}else{if(!c)if(t=Pa(T),t!==null){if(i.flags|=128,c=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Ao(m,!0),m.tail===null&&m.tailMode==="hidden"&&!T.alternate&&!Vt)return vn(i),null}else 2*ne()-m.renderingStartTime>Es&&o!==1073741824&&(i.flags|=128,c=!0,Ao(m,!1),i.lanes=4194304);m.isBackwards?(T.sibling=i.child,i.child=T):(o=m.last,o!==null?o.sibling=T:i.child=T,m.last=T)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=ne(),i.sibling=null,o=Gt.current,Ut(Gt,c?o&1|2:o&1),i):(vn(i),null);case 22:case 23:return du(),c=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Bn&1073741824)!==0&&(vn(i),i.subtreeFlags&6&&(i.flags|=8192)):vn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function ev(t,i){switch(yc(i),i.tag){case 1:return bn(i.type)&&xa(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return xs(),kt(Rn),kt(mn),Nc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Dc(i),null;case 13:if(kt(Gt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));ms()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return kt(Gt),null;case 4:return xs(),null;case 10:return Ac(i.type._context),null;case 22:case 23:return du(),null;case 24:return null;default:return null}}var za=!1,_n=!1,tv=typeof WeakSet=="function"?WeakSet:Set,Ve=null;function Ss(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(c){qt(t,i,c)}else o.current=null}function Qc(t,i,o){try{o()}catch(c){qt(t,i,c)}}var fp=!1;function nv(t,i){if(dc=sa,t=jf(),ic(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var f=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var T=0,z=-1,V=-1,ce=0,Ee=0,Te=t,Se=null;t:for(;;){for(var ke;Te!==o||f!==0&&Te.nodeType!==3||(z=T+f),Te!==m||c!==0&&Te.nodeType!==3||(V=T+c),Te.nodeType===3&&(T+=Te.nodeValue.length),(ke=Te.firstChild)!==null;)Se=Te,Te=ke;for(;;){if(Te===t)break t;if(Se===o&&++ce===f&&(z=T),Se===m&&++Ee===c&&(V=T),(ke=Te.nextSibling)!==null)break;Te=Se,Se=Te.parentNode}Te=ke}o=z===-1||V===-1?null:{start:z,end:V}}else o=null}o=o||{start:0,end:0}}else o=null;for(fc={focusedElem:t,selectionRange:o},sa=!1,Ve=i;Ve!==null;)if(i=Ve,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Ve=t;else for(;Ve!==null;){i=Ve;try{var We=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(We!==null){var $e=We.memoizedProps,Yt=We.memoizedState,te=i.stateNode,X=te.getSnapshotBeforeUpdate(i.elementType===i.type?$e:ti(i.type,$e),Yt);te.__reactInternalSnapshotBeforeUpdate=X}break;case 3:var ie=i.stateNode.containerInfo;ie.nodeType===1?ie.textContent="":ie.nodeType===9&&ie.documentElement&&ie.removeChild(ie.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Re){qt(i,i.return,Re)}if(t=i.sibling,t!==null){t.return=i.return,Ve=t;break}Ve=i.return}return We=fp,fp=!1,We}function Co(t,i,o){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&t)===t){var m=f.destroy;f.destroy=void 0,m!==void 0&&Qc(i,o,m)}f=f.next}while(f!==c)}}function Ba(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var c=o.create;o.destroy=c()}o=o.next}while(o!==i)}}function eu(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function hp(t){var i=t.alternate;i!==null&&(t.alternate=null,hp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[pi],delete i[go],delete i[gc],delete i[k0],delete i[z0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function pp(t){return t.tag===5||t.tag===3||t.tag===4}function mp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||pp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function tu(t,i,o){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=va));else if(c!==4&&(t=t.child,t!==null))for(tu(t,i,o),t=t.sibling;t!==null;)tu(t,i,o),t=t.sibling}function nu(t,i,o){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(c!==4&&(t=t.child,t!==null))for(nu(t,i,o),t=t.sibling;t!==null;)nu(t,i,o),t=t.sibling}var un=null,ni=!1;function ar(t,i,o){for(o=o.child;o!==null;)gp(t,i,o),o=o.sibling}function gp(t,i,o){if(qe&&typeof qe.onCommitFiberUnmount=="function")try{qe.onCommitFiberUnmount(ot,o)}catch{}switch(o.tag){case 5:_n||Ss(o,i);case 6:var c=un,f=ni;un=null,ar(t,i,o),un=c,ni=f,un!==null&&(ni?(t=un,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):un.removeChild(o.stateNode));break;case 18:un!==null&&(ni?(t=un,o=o.stateNode,t.nodeType===8?mc(t.parentNode,o):t.nodeType===1&&mc(t,o),ro(t)):mc(un,o.stateNode));break;case 4:c=un,f=ni,un=o.stateNode.containerInfo,ni=!0,ar(t,i,o),un=c,ni=f;break;case 0:case 11:case 14:case 15:if(!_n&&(c=o.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var m=f,T=m.destroy;m=m.tag,T!==void 0&&((m&2)!==0||(m&4)!==0)&&Qc(o,i,T),f=f.next}while(f!==c)}ar(t,i,o);break;case 1:if(!_n&&(Ss(o,i),c=o.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=o.memoizedProps,c.state=o.memoizedState,c.componentWillUnmount()}catch(z){qt(o,i,z)}ar(t,i,o);break;case 21:ar(t,i,o);break;case 22:o.mode&1?(_n=(c=_n)||o.memoizedState!==null,ar(t,i,o),_n=c):ar(t,i,o);break;default:ar(t,i,o)}}function vp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new tv),i.forEach(function(c){var f=dv.bind(null,t,c);o.has(c)||(o.add(c),c.then(f,f))})}}function ii(t,i){var o=i.deletions;if(o!==null)for(var c=0;c<o.length;c++){var f=o[c];try{var m=t,T=i,z=T;e:for(;z!==null;){switch(z.tag){case 5:un=z.stateNode,ni=!1;break e;case 3:un=z.stateNode.containerInfo,ni=!0;break e;case 4:un=z.stateNode.containerInfo,ni=!0;break e}z=z.return}if(un===null)throw Error(n(160));gp(m,T,f),un=null,ni=!1;var V=f.alternate;V!==null&&(V.return=null),f.return=null}catch(ce){qt(f,i,ce)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)_p(i,t),i=i.sibling}function _p(t,i){var o=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ii(i,t),vi(t),c&4){try{Co(3,t,t.return),Ba(3,t)}catch($e){qt(t,t.return,$e)}try{Co(5,t,t.return)}catch($e){qt(t,t.return,$e)}}break;case 1:ii(i,t),vi(t),c&512&&o!==null&&Ss(o,o.return);break;case 5:if(ii(i,t),vi(t),c&512&&o!==null&&Ss(o,o.return),t.flags&32){var f=t.stateNode;try{ft(f,"")}catch($e){qt(t,t.return,$e)}}if(c&4&&(f=t.stateNode,f!=null)){var m=t.memoizedProps,T=o!==null?o.memoizedProps:m,z=t.type,V=t.updateQueue;if(t.updateQueue=null,V!==null)try{z==="input"&&m.type==="radio"&&m.name!=null&&et(f,m),ut(z,T);var ce=ut(z,m);for(T=0;T<V.length;T+=2){var Ee=V[T],Te=V[T+1];Ee==="style"?at(f,Te):Ee==="dangerouslySetInnerHTML"?Fe(f,Te):Ee==="children"?ft(f,Te):L(f,Ee,Te,ce)}switch(z){case"input":st(f,m);break;case"textarea":xe(f,m);break;case"select":var Se=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!m.multiple;var ke=m.value;ke!=null?I(f,!!m.multiple,ke,!1):Se!==!!m.multiple&&(m.defaultValue!=null?I(f,!!m.multiple,m.defaultValue,!0):I(f,!!m.multiple,m.multiple?[]:"",!1))}f[go]=m}catch($e){qt(t,t.return,$e)}}break;case 6:if(ii(i,t),vi(t),c&4){if(t.stateNode===null)throw Error(n(162));f=t.stateNode,m=t.memoizedProps;try{f.nodeValue=m}catch($e){qt(t,t.return,$e)}}break;case 3:if(ii(i,t),vi(t),c&4&&o!==null&&o.memoizedState.isDehydrated)try{ro(i.containerInfo)}catch($e){qt(t,t.return,$e)}break;case 4:ii(i,t),vi(t);break;case 13:ii(i,t),vi(t),f=t.child,f.flags&8192&&(m=f.memoizedState!==null,f.stateNode.isHidden=m,!m||f.alternate!==null&&f.alternate.memoizedState!==null||(su=ne())),c&4&&vp(t);break;case 22:if(Ee=o!==null&&o.memoizedState!==null,t.mode&1?(_n=(ce=_n)||Ee,ii(i,t),_n=ce):ii(i,t),vi(t),c&8192){if(ce=t.memoizedState!==null,(t.stateNode.isHidden=ce)&&!Ee&&(t.mode&1)!==0)for(Ve=t,Ee=t.child;Ee!==null;){for(Te=Ve=Ee;Ve!==null;){switch(Se=Ve,ke=Se.child,Se.tag){case 0:case 11:case 14:case 15:Co(4,Se,Se.return);break;case 1:Ss(Se,Se.return);var We=Se.stateNode;if(typeof We.componentWillUnmount=="function"){c=Se,o=Se.return;try{i=c,We.props=i.memoizedProps,We.state=i.memoizedState,We.componentWillUnmount()}catch($e){qt(c,o,$e)}}break;case 5:Ss(Se,Se.return);break;case 22:if(Se.memoizedState!==null){Sp(Te);continue}}ke!==null?(ke.return=Se,Ve=ke):Sp(Te)}Ee=Ee.sibling}e:for(Ee=null,Te=t;;){if(Te.tag===5){if(Ee===null){Ee=Te;try{f=Te.stateNode,ce?(m=f.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(z=Te.stateNode,V=Te.memoizedProps.style,T=V!=null&&V.hasOwnProperty("display")?V.display:null,z.style.display=tt("display",T))}catch($e){qt(t,t.return,$e)}}}else if(Te.tag===6){if(Ee===null)try{Te.stateNode.nodeValue=ce?"":Te.memoizedProps}catch($e){qt(t,t.return,$e)}}else if((Te.tag!==22&&Te.tag!==23||Te.memoizedState===null||Te===t)&&Te.child!==null){Te.child.return=Te,Te=Te.child;continue}if(Te===t)break e;for(;Te.sibling===null;){if(Te.return===null||Te.return===t)break e;Ee===Te&&(Ee=null),Te=Te.return}Ee===Te&&(Ee=null),Te.sibling.return=Te.return,Te=Te.sibling}}break;case 19:ii(i,t),vi(t),c&4&&vp(t);break;case 21:break;default:ii(i,t),vi(t)}}function vi(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(pp(o)){var c=o;break e}o=o.return}throw Error(n(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(ft(f,""),c.flags&=-33);var m=mp(t);nu(t,m,f);break;case 3:case 4:var T=c.stateNode.containerInfo,z=mp(t);tu(t,z,T);break;default:throw Error(n(161))}}catch(V){qt(t,t.return,V)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function iv(t,i,o){Ve=t,xp(t)}function xp(t,i,o){for(var c=(t.mode&1)!==0;Ve!==null;){var f=Ve,m=f.child;if(f.tag===22&&c){var T=f.memoizedState!==null||za;if(!T){var z=f.alternate,V=z!==null&&z.memoizedState!==null||_n;z=za;var ce=_n;if(za=T,(_n=V)&&!ce)for(Ve=f;Ve!==null;)T=Ve,V=T.child,T.tag===22&&T.memoizedState!==null?Mp(f):V!==null?(V.return=T,Ve=V):Mp(f);for(;m!==null;)Ve=m,xp(m),m=m.sibling;Ve=f,za=z,_n=ce}yp(t)}else(f.subtreeFlags&8772)!==0&&m!==null?(m.return=f,Ve=m):yp(t)}}function yp(t){for(;Ve!==null;){var i=Ve;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:_n||Ba(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!_n)if(o===null)c.componentDidMount();else{var f=i.elementType===i.type?o.memoizedProps:ti(i.type,o.memoizedProps);c.componentDidUpdate(f,o.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Sh(i,m,c);break;case 3:var T=i.updateQueue;if(T!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Sh(i,T,o)}break;case 5:var z=i.stateNode;if(o===null&&i.flags&4){o=z;var V=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&o.focus();break;case"img":V.src&&(o.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ce=i.alternate;if(ce!==null){var Ee=ce.memoizedState;if(Ee!==null){var Te=Ee.dehydrated;Te!==null&&ro(Te)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}_n||i.flags&512&&eu(i)}catch(Se){qt(i,i.return,Se)}}if(i===t){Ve=null;break}if(o=i.sibling,o!==null){o.return=i.return,Ve=o;break}Ve=i.return}}function Sp(t){for(;Ve!==null;){var i=Ve;if(i===t){Ve=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Ve=o;break}Ve=i.return}}function Mp(t){for(;Ve!==null;){var i=Ve;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Ba(4,i)}catch(V){qt(i,o,V)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var f=i.return;try{c.componentDidMount()}catch(V){qt(i,f,V)}}var m=i.return;try{eu(i)}catch(V){qt(i,m,V)}break;case 5:var T=i.return;try{eu(i)}catch(V){qt(i,T,V)}}}catch(V){qt(i,i.return,V)}if(i===t){Ve=null;break}var z=i.sibling;if(z!==null){z.return=i.return,Ve=z;break}Ve=i.return}}var rv=Math.ceil,Ha=C.ReactCurrentDispatcher,iu=C.ReactCurrentOwner,$n=C.ReactCurrentBatchConfig,Ct=0,on=null,$t=null,dn=0,Bn=0,Ms=nr(0),Qt=0,Ro=null,Ir=0,Va=0,ru=0,bo=null,Dn=null,su=0,Es=1/0,Li=null,Ga=!1,ou=null,lr=null,ja=!1,cr=null,Wa=0,Po=0,au=null,Xa=-1,qa=0;function Tn(){return(Ct&6)!==0?ne():Xa!==-1?Xa:Xa=ne()}function ur(t){return(t.mode&1)===0?1:(Ct&2)!==0&&dn!==0?dn&-dn:H0.transition!==null?(qa===0&&(qa=It()),qa):(t=At,t!==0||(t=window.event,t=t===void 0?16:wf(t.type)),t)}function ri(t,i,o,c){if(50<Po)throw Po=0,au=null,Error(n(185));nn(t,o,c),((Ct&2)===0||t!==on)&&(t===on&&((Ct&2)===0&&(Va|=o),Qt===4&&dr(t,dn)),Ln(t,c),o===1&&Ct===0&&(i.mode&1)===0&&(Es=ne()+500,Sa&&rr()))}function Ln(t,i){var o=t.callbackNode;En(t,i);var c=hn(t,t===on?dn:0);if(c===0)o!==null&&P(o),t.callbackNode=null,t.callbackPriority=0;else if(i=c&-c,t.callbackPriority!==i){if(o!=null&&P(o),i===1)t.tag===0?B0(wp.bind(null,t)):ch(wp.bind(null,t)),F0(function(){(Ct&6)===0&&rr()}),o=null;else{switch(hi(c)){case 1:o=Ae;break;case 4:o=De;break;case 16:o=Oe;break;case 536870912:o=lt;break;default:o=Oe}o=Lp(o,Ep.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function Ep(t,i){if(Xa=-1,qa=0,(Ct&6)!==0)throw Error(n(327));var o=t.callbackNode;if(ws()&&t.callbackNode!==o)return null;var c=hn(t,t===on?dn:0);if(c===0)return null;if((c&30)!==0||(c&t.expiredLanes)!==0||i)i=Ya(t,c);else{i=c;var f=Ct;Ct|=2;var m=Ap();(on!==t||dn!==i)&&(Li=null,Es=ne()+500,Fr(t,i));do try{av();break}catch(z){Tp(t,z)}while(!0);Tc(),Ha.current=m,Ct=f,$t!==null?i=0:(on=null,dn=0,i=Qt)}if(i!==0){if(i===2&&(f=wi(t),f!==0&&(c=f,i=lu(t,f))),i===1)throw o=Ro,Fr(t,0),dr(t,c),Ln(t,ne()),o;if(i===6)dr(t,c);else{if(f=t.current.alternate,(c&30)===0&&!sv(f)&&(i=Ya(t,c),i===2&&(m=wi(t),m!==0&&(c=m,i=lu(t,m))),i===1))throw o=Ro,Fr(t,0),dr(t,c),Ln(t,ne()),o;switch(t.finishedWork=f,t.finishedLanes=c,i){case 0:case 1:throw Error(n(345));case 2:Or(t,Dn,Li);break;case 3:if(dr(t,c),(c&130023424)===c&&(i=su+500-ne(),10<i)){if(hn(t,0)!==0)break;if(f=t.suspendedLanes,(f&c)!==c){Tn(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=pc(Or.bind(null,t,Dn,Li),i);break}Or(t,Dn,Li);break;case 4:if(dr(t,c),(c&4194240)===c)break;for(i=t.eventTimes,f=-1;0<c;){var T=31-ht(c);m=1<<T,T=i[T],T>f&&(f=T),c&=~m}if(c=f,c=ne()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*rv(c/1960))-c,10<c){t.timeoutHandle=pc(Or.bind(null,t,Dn,Li),c);break}Or(t,Dn,Li);break;case 5:Or(t,Dn,Li);break;default:throw Error(n(329))}}}return Ln(t,ne()),t.callbackNode===o?Ep.bind(null,t):null}function lu(t,i){var o=bo;return t.current.memoizedState.isDehydrated&&(Fr(t,i).flags|=256),t=Ya(t,i),t!==2&&(i=Dn,Dn=o,i!==null&&cu(i)),t}function cu(t){Dn===null?Dn=t:Dn.push.apply(Dn,t)}function sv(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var c=0;c<o.length;c++){var f=o[c],m=f.getSnapshot;f=f.value;try{if(!Qn(m(),f))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function dr(t,i){for(i&=~ru,i&=~Va,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-ht(i),c=1<<o;t[o]=-1,i&=~c}}function wp(t){if((Ct&6)!==0)throw Error(n(327));ws();var i=hn(t,0);if((i&1)===0)return Ln(t,ne()),null;var o=Ya(t,i);if(t.tag!==0&&o===2){var c=wi(t);c!==0&&(i=c,o=lu(t,c))}if(o===1)throw o=Ro,Fr(t,0),dr(t,i),Ln(t,ne()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Or(t,Dn,Li),Ln(t,ne()),null}function uu(t,i){var o=Ct;Ct|=1;try{return t(i)}finally{Ct=o,Ct===0&&(Es=ne()+500,Sa&&rr())}}function Ur(t){cr!==null&&cr.tag===0&&(Ct&6)===0&&ws();var i=Ct;Ct|=1;var o=$n.transition,c=At;try{if($n.transition=null,At=1,t)return t()}finally{At=c,$n.transition=o,Ct=i,(Ct&6)===0&&rr()}}function du(){Bn=Ms.current,kt(Ms)}function Fr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,U0(o)),$t!==null)for(o=$t.return;o!==null;){var c=o;switch(yc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&xa();break;case 3:xs(),kt(Rn),kt(mn),Nc();break;case 5:Dc(c);break;case 4:xs();break;case 13:kt(Gt);break;case 19:kt(Gt);break;case 10:Ac(c.type._context);break;case 22:case 23:du()}o=o.return}if(on=t,$t=t=fr(t.current,null),dn=Bn=i,Qt=0,Ro=null,ru=Va=Ir=0,Dn=bo=null,Dr!==null){for(i=0;i<Dr.length;i++)if(o=Dr[i],c=o.interleaved,c!==null){o.interleaved=null;var f=c.next,m=o.pending;if(m!==null){var T=m.next;m.next=f,c.next=T}o.pending=c}Dr=null}return t}function Tp(t,i){do{var o=$t;try{if(Tc(),Da.current=Ua,La){for(var c=jt.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}La=!1}if(Nr=0,sn=Jt=jt=null,Mo=!1,Eo=0,iu.current=null,o===null||o.return===null){Qt=1,Ro=i,$t=null;break}e:{var m=t,T=o.return,z=o,V=i;if(i=dn,z.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var ce=V,Ee=z,Te=Ee.tag;if((Ee.mode&1)===0&&(Te===0||Te===11||Te===15)){var Se=Ee.alternate;Se?(Ee.updateQueue=Se.updateQueue,Ee.memoizedState=Se.memoizedState,Ee.lanes=Se.lanes):(Ee.updateQueue=null,Ee.memoizedState=null)}var ke=Kh(T);if(ke!==null){ke.flags&=-257,Zh(ke,T,z,m,i),ke.mode&1&&$h(m,ce,i),i=ke,V=ce;var We=i.updateQueue;if(We===null){var $e=new Set;$e.add(V),i.updateQueue=$e}else We.add(V);break e}else{if((i&1)===0){$h(m,ce,i),fu();break e}V=Error(n(426))}}else if(Vt&&z.mode&1){var Yt=Kh(T);if(Yt!==null){(Yt.flags&65536)===0&&(Yt.flags|=256),Zh(Yt,T,z,m,i),Ec(ys(V,z));break e}}m=V=ys(V,z),Qt!==4&&(Qt=2),bo===null?bo=[m]:bo.push(m),m=T;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var te=qh(m,V,i);yh(m,te);break e;case 1:z=V;var X=m.type,ie=m.stateNode;if((m.flags&128)===0&&(typeof X.getDerivedStateFromError=="function"||ie!==null&&typeof ie.componentDidCatch=="function"&&(lr===null||!lr.has(ie)))){m.flags|=65536,i&=-i,m.lanes|=i;var Re=Yh(m,z,i);yh(m,Re);break e}}m=m.return}while(m!==null)}Rp(o)}catch(Ke){i=Ke,$t===o&&o!==null&&($t=o=o.return);continue}break}while(!0)}function Ap(){var t=Ha.current;return Ha.current=Ua,t===null?Ua:t}function fu(){(Qt===0||Qt===3||Qt===2)&&(Qt=4),on===null||(Ir&268435455)===0&&(Va&268435455)===0||dr(on,dn)}function Ya(t,i){var o=Ct;Ct|=2;var c=Ap();(on!==t||dn!==i)&&(Li=null,Fr(t,i));do try{ov();break}catch(f){Tp(t,f)}while(!0);if(Tc(),Ct=o,Ha.current=c,$t!==null)throw Error(n(261));return on=null,dn=0,Qt}function ov(){for(;$t!==null;)Cp($t)}function av(){for(;$t!==null&&!K();)Cp($t)}function Cp(t){var i=Dp(t.alternate,t,Bn);t.memoizedProps=t.pendingProps,i===null?Rp(t):$t=i,iu.current=null}function Rp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=Q0(o,i,Bn),o!==null){$t=o;return}}else{if(o=ev(o,i),o!==null){o.flags&=32767,$t=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Qt=6,$t=null;return}}if(i=i.sibling,i!==null){$t=i;return}$t=i=t}while(i!==null);Qt===0&&(Qt=5)}function Or(t,i,o){var c=At,f=$n.transition;try{$n.transition=null,At=1,lv(t,i,o,c)}finally{$n.transition=f,At=c}return null}function lv(t,i,o,c){do ws();while(cr!==null);if((Ct&6)!==0)throw Error(n(327));o=t.finishedWork;var f=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var m=o.lanes|o.childLanes;if(cn(t,m),t===on&&($t=on=null,dn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||ja||(ja=!0,Lp(Oe,function(){return ws(),null})),m=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||m){m=$n.transition,$n.transition=null;var T=At;At=1;var z=Ct;Ct|=4,iu.current=null,nv(t,o),_p(o,t),R0(fc),sa=!!dc,fc=dc=null,t.current=o,iv(o),ae(),Ct=z,At=T,$n.transition=m}else t.current=o;if(ja&&(ja=!1,cr=t,Wa=f),m=t.pendingLanes,m===0&&(lr=null),Mt(o.stateNode),Ln(t,ne()),i!==null)for(c=t.onRecoverableError,o=0;o<i.length;o++)f=i[o],c(f.value,{componentStack:f.stack,digest:f.digest});if(Ga)throw Ga=!1,t=ou,ou=null,t;return(Wa&1)!==0&&t.tag!==0&&ws(),m=t.pendingLanes,(m&1)!==0?t===au?Po++:(Po=0,au=t):Po=0,rr(),null}function ws(){if(cr!==null){var t=hi(Wa),i=$n.transition,o=At;try{if($n.transition=null,At=16>t?16:t,cr===null)var c=!1;else{if(t=cr,cr=null,Wa=0,(Ct&6)!==0)throw Error(n(331));var f=Ct;for(Ct|=4,Ve=t.current;Ve!==null;){var m=Ve,T=m.child;if((Ve.flags&16)!==0){var z=m.deletions;if(z!==null){for(var V=0;V<z.length;V++){var ce=z[V];for(Ve=ce;Ve!==null;){var Ee=Ve;switch(Ee.tag){case 0:case 11:case 15:Co(8,Ee,m)}var Te=Ee.child;if(Te!==null)Te.return=Ee,Ve=Te;else for(;Ve!==null;){Ee=Ve;var Se=Ee.sibling,ke=Ee.return;if(hp(Ee),Ee===ce){Ve=null;break}if(Se!==null){Se.return=ke,Ve=Se;break}Ve=ke}}}var We=m.alternate;if(We!==null){var $e=We.child;if($e!==null){We.child=null;do{var Yt=$e.sibling;$e.sibling=null,$e=Yt}while($e!==null)}}Ve=m}}if((m.subtreeFlags&2064)!==0&&T!==null)T.return=m,Ve=T;else e:for(;Ve!==null;){if(m=Ve,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Co(9,m,m.return)}var te=m.sibling;if(te!==null){te.return=m.return,Ve=te;break e}Ve=m.return}}var X=t.current;for(Ve=X;Ve!==null;){T=Ve;var ie=T.child;if((T.subtreeFlags&2064)!==0&&ie!==null)ie.return=T,Ve=ie;else e:for(T=X;Ve!==null;){if(z=Ve,(z.flags&2048)!==0)try{switch(z.tag){case 0:case 11:case 15:Ba(9,z)}}catch(Ke){qt(z,z.return,Ke)}if(z===T){Ve=null;break e}var Re=z.sibling;if(Re!==null){Re.return=z.return,Ve=Re;break e}Ve=z.return}}if(Ct=f,rr(),qe&&typeof qe.onPostCommitFiberRoot=="function")try{qe.onPostCommitFiberRoot(ot,t)}catch{}c=!0}return c}finally{At=o,$n.transition=i}}return!1}function bp(t,i,o){i=ys(o,i),i=qh(t,i,1),t=or(t,i,1),i=Tn(),t!==null&&(nn(t,1,i),Ln(t,i))}function qt(t,i,o){if(t.tag===3)bp(t,t,o);else for(;i!==null;){if(i.tag===3){bp(i,t,o);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(lr===null||!lr.has(c))){t=ys(o,t),t=Yh(i,t,1),i=or(i,t,1),t=Tn(),i!==null&&(nn(i,1,t),Ln(i,t));break}}i=i.return}}function cv(t,i,o){var c=t.pingCache;c!==null&&c.delete(i),i=Tn(),t.pingedLanes|=t.suspendedLanes&o,on===t&&(dn&o)===o&&(Qt===4||Qt===3&&(dn&130023424)===dn&&500>ne()-su?Fr(t,0):ru|=o),Ln(t,i)}function Pp(t,i){i===0&&((t.mode&1)===0?i=1:(i=Xt,Xt<<=1,(Xt&130023424)===0&&(Xt=4194304)));var o=Tn();t=bi(t,i),t!==null&&(nn(t,i,o),Ln(t,o))}function uv(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),Pp(t,o)}function dv(t,i){var o=0;switch(t.tag){case 13:var c=t.stateNode,f=t.memoizedState;f!==null&&(o=f.retryLane);break;case 19:c=t.stateNode;break;default:throw Error(n(314))}c!==null&&c.delete(i),Pp(t,o)}var Dp;Dp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||Rn.current)Pn=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return Pn=!1,J0(t,i,o);Pn=(t.flags&131072)!==0}else Pn=!1,Vt&&(i.flags&1048576)!==0&&uh(i,Ea,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;ka(t,i),t=i.pendingProps;var f=fs(i,mn.current);_s(i,o),f=Fc(null,i,c,t,f,o);var m=Oc();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,bn(c)?(m=!0,ya(i)):m=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,bc(i),f.updater=Fa,i.stateNode=f,f._reactInternals=i,Gc(i,c,t,o),i=qc(null,i,c,!0,m,o)):(i.tag=0,Vt&&m&&xc(i),wn(null,i,f,o),i=i.child),i;case 16:c=i.elementType;e:{switch(ka(t,i),t=i.pendingProps,f=c._init,c=f(c._payload),i.type=c,f=i.tag=hv(c),t=ti(c,t),f){case 0:i=Xc(null,i,c,t,o);break e;case 1:i=ip(null,i,c,t,o);break e;case 11:i=Jh(null,i,c,t,o);break e;case 14:i=Qh(null,i,c,ti(c.type,t),o);break e}throw Error(n(306,c,""))}return i;case 0:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:ti(c,f),Xc(t,i,c,f,o);case 1:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:ti(c,f),ip(t,i,c,f,o);case 3:e:{if(rp(i),t===null)throw Error(n(387));c=i.pendingProps,m=i.memoizedState,f=m.element,xh(t,i),ba(i,c,null,o);var T=i.memoizedState;if(c=T.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){f=ys(Error(n(423)),i),i=sp(t,i,c,o,f);break e}else if(c!==f){f=ys(Error(n(424)),i),i=sp(t,i,c,o,f);break e}else for(zn=tr(i.stateNode.containerInfo.firstChild),kn=i,Vt=!0,ei=null,o=vh(i,null,c,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(ms(),c===f){i=Di(t,i,o);break e}wn(t,i,c,o)}i=i.child}return i;case 5:return Mh(i),t===null&&Mc(i),c=i.type,f=i.pendingProps,m=t!==null?t.memoizedProps:null,T=f.children,hc(c,f)?T=null:m!==null&&hc(c,m)&&(i.flags|=32),np(t,i),wn(t,i,T,o),i.child;case 6:return t===null&&Mc(i),null;case 13:return op(t,i,o);case 4:return Pc(i,i.stateNode.containerInfo),c=i.pendingProps,t===null?i.child=gs(i,null,c,o):wn(t,i,c,o),i.child;case 11:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:ti(c,f),Jh(t,i,c,f,o);case 7:return wn(t,i,i.pendingProps,o),i.child;case 8:return wn(t,i,i.pendingProps.children,o),i.child;case 12:return wn(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(c=i.type._context,f=i.pendingProps,m=i.memoizedProps,T=f.value,Ut(Aa,c._currentValue),c._currentValue=T,m!==null)if(Qn(m.value,T)){if(m.children===f.children&&!Rn.current){i=Di(t,i,o);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var z=m.dependencies;if(z!==null){T=m.child;for(var V=z.firstContext;V!==null;){if(V.context===c){if(m.tag===1){V=Pi(-1,o&-o),V.tag=2;var ce=m.updateQueue;if(ce!==null){ce=ce.shared;var Ee=ce.pending;Ee===null?V.next=V:(V.next=Ee.next,Ee.next=V),ce.pending=V}}m.lanes|=o,V=m.alternate,V!==null&&(V.lanes|=o),Cc(m.return,o,i),z.lanes|=o;break}V=V.next}}else if(m.tag===10)T=m.type===i.type?null:m.child;else if(m.tag===18){if(T=m.return,T===null)throw Error(n(341));T.lanes|=o,z=T.alternate,z!==null&&(z.lanes|=o),Cc(T,o,i),T=m.sibling}else T=m.child;if(T!==null)T.return=m;else for(T=m;T!==null;){if(T===i){T=null;break}if(m=T.sibling,m!==null){m.return=T.return,T=m;break}T=T.return}m=T}wn(t,i,f.children,o),i=i.child}return i;case 9:return f=i.type,c=i.pendingProps.children,_s(i,o),f=qn(f),c=c(f),i.flags|=1,wn(t,i,c,o),i.child;case 14:return c=i.type,f=ti(c,i.pendingProps),f=ti(c.type,f),Qh(t,i,c,f,o);case 15:return ep(t,i,i.type,i.pendingProps,o);case 17:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:ti(c,f),ka(t,i),i.tag=1,bn(c)?(t=!0,ya(i)):t=!1,_s(i,o),Wh(i,c,f),Gc(i,c,f,o),qc(null,i,c,!0,t,o);case 19:return lp(t,i,o);case 22:return tp(t,i,o)}throw Error(n(156,i.tag))};function Lp(t,i){return na(t,i)}function fv(t,i,o,c){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(t,i,o,c){return new fv(t,i,o,c)}function hu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function hv(t){if(typeof t=="function")return hu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===oe)return 11;if(t===pe)return 14}return 2}function fr(t,i){var o=t.alternate;return o===null?(o=Kn(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function $a(t,i,o,c,f,m){var T=2;if(c=t,typeof t=="function")hu(t)&&(T=1);else if(typeof t=="string")T=5;else e:switch(t){case U:return kr(o.children,f,m,i);case F:T=8,f|=8;break;case D:return t=Kn(12,o,i,f|2),t.elementType=D,t.lanes=m,t;case ee:return t=Kn(13,o,i,f),t.elementType=ee,t.lanes=m,t;case ue:return t=Kn(19,o,i,f),t.elementType=ue,t.lanes=m,t;case me:return Ka(o,f,m,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case R:T=10;break e;case H:T=9;break e;case oe:T=11;break e;case pe:T=14;break e;case de:T=16,c=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Kn(T,o,i,f),i.elementType=t,i.type=c,i.lanes=m,i}function kr(t,i,o,c){return t=Kn(7,t,c,i),t.lanes=o,t}function Ka(t,i,o,c){return t=Kn(22,t,c,i),t.elementType=me,t.lanes=o,t.stateNode={isHidden:!1},t}function pu(t,i,o){return t=Kn(6,t,null,i),t.lanes=o,t}function mu(t,i,o){return i=Kn(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function pv(t,i,o,c,f){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pn(0),this.expirationTimes=pn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pn(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function gu(t,i,o,c,f,m,T,z,V){return t=new pv(t,i,o,z,V),i===1?(i=1,m===!0&&(i|=8)):i=0,m=Kn(3,null,null,i),t.current=m,m.stateNode=t,m.memoizedState={element:c,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},bc(m),t}function mv(t,i,o){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:B,key:c==null?null:""+c,children:t,containerInfo:i,implementation:o}}function Np(t){if(!t)return ir;t=t._reactInternals;e:{if(fi(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(bn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(bn(o))return ah(t,o,i)}return i}function Ip(t,i,o,c,f,m,T,z,V){return t=gu(o,c,!0,t,f,m,T,z,V),t.context=Np(null),o=t.current,c=Tn(),f=ur(o),m=Pi(c,f),m.callback=i??null,or(o,m,f),t.current.lanes=f,nn(t,f,c),Ln(t,c),t}function Za(t,i,o,c){var f=i.current,m=Tn(),T=ur(f);return o=Np(o),i.context===null?i.context=o:i.pendingContext=o,i=Pi(m,T),i.payload={element:t},c=c===void 0?null:c,c!==null&&(i.callback=c),t=or(f,i,T),t!==null&&(ri(t,f,T,m),Ra(t,f,T)),T}function Ja(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Up(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function vu(t,i){Up(t,i),(t=t.alternate)&&Up(t,i)}function gv(){return null}var Fp=typeof reportError=="function"?reportError:function(t){console.error(t)};function _u(t){this._internalRoot=t}Qa.prototype.render=_u.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Za(t,i,null,null)},Qa.prototype.unmount=_u.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Ur(function(){Za(null,t,null,null)}),i[Ti]=null}};function Qa(t){this._internalRoot=t}Qa.prototype.unstable_scheduleHydration=function(t){if(t){var i=xf();t={blockedOn:null,target:t,priority:i};for(var o=0;o<Ji.length&&i!==0&&i<Ji[o].priority;o++);Ji.splice(o,0,t),o===0&&Mf(t)}};function xu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function el(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Op(){}function vv(t,i,o,c,f){if(f){if(typeof c=="function"){var m=c;c=function(){var ce=Ja(T);m.call(ce)}}var T=Ip(i,c,t,0,null,!1,!1,"",Op);return t._reactRootContainer=T,t[Ti]=T.current,po(t.nodeType===8?t.parentNode:t),Ur(),T}for(;f=t.lastChild;)t.removeChild(f);if(typeof c=="function"){var z=c;c=function(){var ce=Ja(V);z.call(ce)}}var V=gu(t,0,!1,null,null,!1,!1,"",Op);return t._reactRootContainer=V,t[Ti]=V.current,po(t.nodeType===8?t.parentNode:t),Ur(function(){Za(i,V,o,c)}),V}function tl(t,i,o,c,f){var m=o._reactRootContainer;if(m){var T=m;if(typeof f=="function"){var z=f;f=function(){var V=Ja(T);z.call(V)}}Za(i,T,t,f)}else T=vv(o,i,t,f,c);return Ja(T)}vf=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=St(i.pendingLanes);o!==0&&(rn(i,o|1),Ln(i,ne()),(Ct&6)===0&&(Es=ne()+500,rr()))}break;case 13:Ur(function(){var c=bi(t,1);if(c!==null){var f=Tn();ri(c,t,1,f)}}),vu(t,1)}},jl=function(t){if(t.tag===13){var i=bi(t,134217728);if(i!==null){var o=Tn();ri(i,t,134217728,o)}vu(t,134217728)}},_f=function(t){if(t.tag===13){var i=ur(t),o=bi(t,i);if(o!==null){var c=Tn();ri(o,t,i,c)}vu(t,i)}},xf=function(){return At},yf=function(t,i){var o=At;try{return At=t,i()}finally{At=o}},Pe=function(t,i,o){switch(i){case"input":if(st(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var c=o[i];if(c!==t&&c.form===t.form){var f=_a(c);if(!f)throw Error(n(90));Je(c),st(c,f)}}}break;case"textarea":xe(t,o);break;case"select":i=o.value,i!=null&&I(t,!!o.multiple,i,!1)}},Ft=uu,Zt=Ur;var _v={usingClientEntryPoint:!1,Events:[vo,us,_a,Ne,dt,uu]},Do={findFiberByHostInstance:Cr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},xv={bundleType:Do.bundleType,version:Do.version,rendererPackageName:Do.rendererPackageName,rendererConfig:Do.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ea(t),t===null?null:t.stateNode},findFiberByHostInstance:Do.findFiberByHostInstance||gv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nl.isDisabled&&nl.supportsFiber)try{ot=nl.inject(xv),qe=nl}catch{}}return Nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_v,Nn.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xu(i))throw Error(n(200));return mv(t,i,null,o)},Nn.createRoot=function(t,i){if(!xu(t))throw Error(n(299));var o=!1,c="",f=Fp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=gu(t,1,!1,null,null,o,!1,c,f),t[Ti]=i.current,po(t.nodeType===8?t.parentNode:t),new _u(i)},Nn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=ea(i),t=t===null?null:t.stateNode,t},Nn.flushSync=function(t){return Ur(t)},Nn.hydrate=function(t,i,o){if(!el(i))throw Error(n(200));return tl(null,t,i,!0,o)},Nn.hydrateRoot=function(t,i,o){if(!xu(t))throw Error(n(405));var c=o!=null&&o.hydratedSources||null,f=!1,m="",T=Fp;if(o!=null&&(o.unstable_strictMode===!0&&(f=!0),o.identifierPrefix!==void 0&&(m=o.identifierPrefix),o.onRecoverableError!==void 0&&(T=o.onRecoverableError)),i=Ip(i,null,t,1,o??null,f,!1,m,T),t[Ti]=i.current,po(t),c)for(t=0;t<c.length;t++)o=c[t],f=o._getVersion,f=f(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,f]:i.mutableSourceEagerHydrationData.push(o,f);return new Qa(i)},Nn.render=function(t,i,o){if(!el(i))throw Error(n(200));return tl(null,t,i,!1,o)},Nn.unmountComponentAtNode=function(t){if(!el(t))throw Error(n(40));return t._reactRootContainer?(Ur(function(){tl(null,null,t,!1,function(){t._reactRootContainer=null,t[Ti]=null})}),!0):!1},Nn.unstable_batchedUpdates=uu,Nn.unstable_renderSubtreeIntoContainer=function(t,i,o,c){if(!el(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return tl(t,i,o,!1,c)},Nn.version="18.3.1-next-f1338f8080-20240426",Nn}var Wp;function Rv(){if(Wp)return Mu.exports;Wp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Mu.exports=Cv(),Mu.exports}var Xp;function bv(){if(Xp)return il;Xp=1;var s=Rv();return il.createRoot=s.createRoot,il.hydrateRoot=s.hydrateRoot,il}var Pv=bv();const Dv=Zm(Pv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Jm=(...s)=>s.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Nv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=ze.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:a="",children:l,iconNode:u,...d},h)=>ze.createElement("svg",{ref:h,...Nv,width:e,height:e,stroke:s,strokeWidth:r?Number(n)*24/Number(e):n,className:Jm("lucide",a),...d},[...u.map(([p,v])=>ze.createElement(p,v)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wt=(s,e)=>{const n=ze.forwardRef(({className:r,...a},l)=>ze.createElement(Iv,{ref:l,iconNode:e,className:Jm(`lucide-${Lv(s)}`,r),...a}));return n.displayName=`${s}`,n};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Fv=wt("ArrowRight",Uv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M6 12h.01M18 12h.01",key:"113zkx"}]],kv=wt("Banknote",Ov);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],Bv=wt("Bot",zv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],Vv=wt("Box",Hv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],jv=wt("CircleAlert",Gv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Kd=wt("CircleCheck",Wv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],qv=wt("CreditCard",Xv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Zd=wt("Eye",Yv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Qm=wt("Layers",$v);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Zv=wt("LoaderCircle",Kv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Qv=wt("Lock",Jv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e_=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]],t_=wt("LogOut",e_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n_=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],i_=wt("Mail",n_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r_=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],s_=wt("MapPin",r_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o_=[["path",{d:"M5 12h14",key:"1ays0h"}]],Jd=wt("Minus",o_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a_=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],l_=wt("Phone",a_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c_=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Il=wt("Plus",c_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u_=[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]],d_=wt("Printer",u_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f_=[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]],h_=wt("QrCode",f_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p_=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],m_=wt("RotateCcw",p_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g_=[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]],eg=wt("RotateCw",g_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v_=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],__=wt("Search",v_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x_=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],y_=wt("Send",x_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S_=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Qd=wt("ShieldCheck",S_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M_=[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]],zl=wt("ShoppingBag",M_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E_=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],w_=wt("ShoppingCart",E_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T_=[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]],A_=wt("SlidersHorizontal",T_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C_=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],tg=wt("Sparkles",C_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R_=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],b_=wt("Star",R_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P_=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],D_=wt("Tag",P_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L_=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],N_=wt("Trash2",L_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I_=[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]],U_=wt("Truck",I_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F_=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],ng=wt("User",F_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O_=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ks=wt("X",O_),ig=ze.createContext();function k_({children:s}){const[e,n]=ze.useState([]),[r,a]=ze.useState(!1),[l,u]=ze.useState(null),[d,h]=ze.useState("");ze.useEffect(()=>{const U=localStorage.getItem("dmart_cart");if(U)try{n(JSON.parse(U))}catch{n([])}},[]),ze.useEffect(()=>{localStorage.setItem("dmart_cart",JSON.stringify(e))},[e]);const p=(U,F=1)=>{n(D=>D.find(H=>H._id===U._id)?D.map(H=>H._id===U._id?{...H,quantity:H.quantity+F}:H):[...D,{_id:U._id,productId:U._id,name:U.name,price:U.price,mrp:U.mrp,unit:U.unit,imageUrl:U.imageUrl,category:U.category,quantity:F,model3d:U.model3d}]),a(!0)},v=U=>{n(F=>F.filter(D=>D._id!==U))},_=(U,F)=>{n(D=>D.map(R=>{if(R._id===U){const H=R.quantity+F;return H>0?{...R,quantity:H}:null}return R}).filter(Boolean))},y=()=>{n([]),u(null),localStorage.removeItem("dmart_cart")},M=U=>{const F=U.trim().toUpperCase();return F==="DMART50"?(u({code:"DMART50",discount:50,desc:"₹50 Instant Savings"}),h(""),!0):F==="SAVE100"?(u({code:"SAVE100",discount:100,desc:"₹100 Super Saver"}),h(""),!0):(h('Invalid coupon code. Try "DMART50"!'),!1)},E=()=>{u(null),h("")},A=e.reduce((U,F)=>U+F.price*F.quantity,0),S=e.reduce((U,F)=>U+(F.mrp||F.price)*F.quantity,0),x=l?l.discount:0,O=Math.round(A*.05),L=A===0||A>=499?0:49,C=Math.max(0,A+O+L-x),j=S-A+x,B=e.reduce((U,F)=>U+F.quantity,0);return g.jsx(ig.Provider,{value:{items:e,addToCart:p,removeFromCart:v,updateQuantity:_,clearCart:y,isCartOpen:r,setIsCartOpen:a,openCart:()=>a(!0),closeCart:()=>a(!1),appliedCoupon:l,applyCoupon:M,removeCoupon:E,couponError:d,subtotal:A,mrpTotal:S,discountAmount:x,taxAmount:O,deliveryFee:L,totalAmount:C,savingsAmount:j,totalItemsCount:B},children:s})}const es=()=>ze.useContext(ig),rg=ze.createContext(),Tu="http://localhost:5000/api";function z_({children:s}){const[e,n]=ze.useState(null),[r,a]=ze.useState(null),[l,u]=ze.useState(!0);ze.useEffect(()=>{const M=localStorage.getItem("dmart_token"),E=localStorage.getItem("dmart_user");M&&E&&(a(M),n(JSON.parse(E))),u(!1)},[]);const d=(M,E)=>{a(M),n(E),localStorage.setItem("dmart_token",M),localStorage.setItem("dmart_user",JSON.stringify(E))},h=async(M,E)=>{try{const A=await fetch(`${Tu}/auth/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:M,password:E})}),S=await A.json();if(!A.ok)throw new Error(S.message||"Login failed");return d(S.token,S.user),{success:!0}}catch(A){return{success:!1,error:A.message}}},p=async(M,E,A,S)=>{try{const x=await fetch(`${Tu}/auth/register`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:M,email:E,password:A,phone:S})}),O=await x.json();if(!x.ok)throw new Error(O.message||"Registration failed");return d(O.token,O.user),{success:!0}}catch(x){return{success:!1,error:x.message}}},v=async M=>{try{const E=await fetch(`${Tu}/auth/google`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(M)}),A=await E.json();if(!E.ok)throw new Error(A.message||"Google login failed");return d(A.token,A.user),{success:!0}}catch(E){return{success:!1,error:E.message}}},_=async()=>{const M={name:"Facebook Customer",email:`fb_user_${Math.floor(Math.random()*1e4)}@facebook.com`,avatar:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",phone:"9876543210"};return await v(M)},y=()=>{n(null),a(null),localStorage.removeItem("dmart_token"),localStorage.removeItem("dmart_user")};return g.jsx(rg.Provider,{value:{user:e,token:r,loading:l,loginWithEmail:h,registerWithEmail:p,loginWithGoogle:v,loginWithFacebook:_,logout:y},children:s})}const ef=()=>ze.useContext(rg);function B_({onOpenAuth:s,onSearchChange:e,searchTerm:n}){const{totalItemsCount:r,totalAmount:a,openCart:l}=es(),{user:u,logout:d}=ef();return g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"header-top",children:g.jsxs("div",{className:"container header-top-inner",children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem"},children:[g.jsx(s_,{size:14,color:"#f59e0b"}),g.jsxs("span",{children:["Delivery to: ",g.jsx("strong",{children:"Mumbai, 400001"})," (Standard 24hr slot)"]})]}),g.jsxs("div",{style:{display:"flex",gap:"1.2rem"},children:[g.jsx("span",{children:"📞 24x7 DMart Helpline: 1800-266-0000"}),g.jsx("span",{children:"💳 PhonePe & GPay UPI Accepted"})]})]})}),g.jsx("header",{className:"navbar",children:g.jsxs("div",{className:"nav-container",children:[g.jsxs("div",{className:"logo-brand",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:[g.jsx("div",{className:"logo-icon-3d",children:g.jsx(Vv,{size:24})}),g.jsxs("div",{children:[g.jsxs("div",{className:"logo-title",children:["DMart ",g.jsx("span",{style:{color:"var(--primary)"},children:"3D"})]}),g.jsx("div",{className:"logo-subtitle",children:"Interactive Commercial Superstore"})]})]}),g.jsxs("div",{className:"search-bar-wrapper",children:[g.jsx(__,{size:18,className:"search-icon-pos"}),g.jsx("input",{type:"text",placeholder:"Search groceries, gadgets, daily staples, 3D products...",className:"search-input",value:n,onChange:h=>e(h.target.value)})]}),g.jsxs("div",{className:"nav-actions",children:[u?g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.6rem"},children:[g.jsxs("div",{className:"btn-nav-action",style:{background:"#e8f5e9"},children:[g.jsx("img",{src:u.avatar||"https://api.dicebear.com/7.x/bottts/svg?seed=user",alt:"avatar",style:{width:24,height:24,borderRadius:"50%"}}),g.jsx("span",{children:u.name.split(" ")[0]})]}),g.jsx("button",{className:"btn-nav-action",onClick:d,title:"Logout",style:{padding:"0.55rem"},children:g.jsx(t_,{size:16})})]}):g.jsxs("button",{className:"btn-nav-action",onClick:s,children:[g.jsx(ng,{size:18}),g.jsx("span",{children:"Sign In / Join"})]}),g.jsxs("button",{className:"btn-cart-action",onClick:l,children:[g.jsx(w_,{size:20}),g.jsxs("span",{children:["₹",a]}),r>0&&g.jsx("span",{className:"cart-count-badge",children:r})]})]})]})})]})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const tf="174",H_=0,qp=1,V_=2,sg=1,og=2,ki=3,Er=0,Un=1,zi=2,Sr=0,Bs=1,Yp=2,$p=3,Kp=4,G_=5,Yr=100,j_=101,W_=102,X_=103,q_=104,Y_=200,$_=201,K_=202,Z_=203,ad=204,ld=205,J_=206,Q_=207,ex=208,tx=209,nx=210,ix=211,rx=212,sx=213,ox=214,cd=0,ud=1,dd=2,Gs=3,fd=4,hd=5,pd=6,md=7,ag=0,ax=1,lx=2,Mr=0,cx=1,ux=2,dx=3,fx=4,hx=5,px=6,mx=7,lg=300,js=301,Ws=302,gd=303,vd=304,Bl=306,_d=1e3,Kr=1001,xd=1002,ui=1003,gx=1004,rl=1005,yi=1006,Au=1007,Zr=1008,ji=1009,cg=1010,ug=1011,jo=1012,nf=1013,Jr=1014,Bi=1015,Wo=1016,rf=1017,sf=1018,Xs=1020,dg=35902,fg=1021,hg=1022,ci=1023,pg=1024,mg=1025,Hs=1026,qs=1027,gg=1028,of=1029,vg=1030,af=1031,lf=1033,Rl=33776,bl=33777,Pl=33778,Dl=33779,yd=35840,Sd=35841,Md=35842,Ed=35843,wd=36196,Td=37492,Ad=37496,Cd=37808,Rd=37809,bd=37810,Pd=37811,Dd=37812,Ld=37813,Nd=37814,Id=37815,Ud=37816,Fd=37817,Od=37818,kd=37819,zd=37820,Bd=37821,Ll=36492,Hd=36494,Vd=36495,_g=36283,Gd=36284,jd=36285,Wd=36286,vx=3200,_x=3201,xg=0,xx=1,yr="",Gn="srgb",Ys="srgb-linear",Ul="linear",Lt="srgb",Ts=7680,Zp=519,yx=512,Sx=513,Mx=514,yg=515,Ex=516,wx=517,Tx=518,Ax=519,Jp=35044,Qp="300 es",Hi=2e3,Fl=2001;class Zs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const a=r[e];if(a!==void 0){const l=a.indexOf(n);l!==-1&&a.splice(l,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,u=a.length;l<u;l++)a[l].call(this,e);e.target=null}}}const xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cu=Math.PI/180,Xd=180/Math.PI;function Xo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(xn[s&255]+xn[s>>8&255]+xn[s>>16&255]+xn[s>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[n&63|128]+xn[n>>8&255]+"-"+xn[n>>16&255]+xn[n>>24&255]+xn[r&255]+xn[r>>8&255]+xn[r>>16&255]+xn[r>>24&255]).toLowerCase()}function _t(s,e,n){return Math.max(e,Math.min(n,s))}function Cx(s,e){return(s%e+e)%e}function Ru(s,e,n){return(1-n)*s+n*e}function No(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function In(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class rt{constructor(e=0,n=0){rt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=_t(this.x,e.x,n.x),this.y=_t(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=_t(this.x,e,n),this.y=_t(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(_t(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*a+e.x,this.y=l*a+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pt{constructor(e,n,r,a,l,u,d,h,p){pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,l,u,d,h,p)}set(e,n,r,a,l,u,d,h,p){const v=this.elements;return v[0]=e,v[1]=a,v[2]=d,v[3]=n,v[4]=l,v[5]=h,v[6]=r,v[7]=u,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,l=this.elements,u=r[0],d=r[3],h=r[6],p=r[1],v=r[4],_=r[7],y=r[2],M=r[5],E=r[8],A=a[0],S=a[3],x=a[6],O=a[1],L=a[4],C=a[7],j=a[2],B=a[5],U=a[8];return l[0]=u*A+d*O+h*j,l[3]=u*S+d*L+h*B,l[6]=u*x+d*C+h*U,l[1]=p*A+v*O+_*j,l[4]=p*S+v*L+_*B,l[7]=p*x+v*C+_*U,l[2]=y*A+M*O+E*j,l[5]=y*S+M*L+E*B,l[8]=y*x+M*C+E*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],u=e[4],d=e[5],h=e[6],p=e[7],v=e[8];return n*u*v-n*d*p-r*l*v+r*d*h+a*l*p-a*u*h}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],u=e[4],d=e[5],h=e[6],p=e[7],v=e[8],_=v*u-d*p,y=d*h-v*l,M=p*l-u*h,E=n*_+r*y+a*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=_*A,e[1]=(a*p-v*r)*A,e[2]=(d*r-a*u)*A,e[3]=y*A,e[4]=(v*n-a*h)*A,e[5]=(a*l-d*n)*A,e[6]=M*A,e[7]=(r*h-p*n)*A,e[8]=(u*n-r*l)*A,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,l,u,d){const h=Math.cos(l),p=Math.sin(l);return this.set(r*h,r*p,-r*(h*u+p*d)+u+e,-a*p,a*h,-a*(-p*u+h*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(bu.makeScale(e,n)),this}rotate(e){return this.premultiply(bu.makeRotation(-e)),this}translate(e,n){return this.premultiply(bu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const bu=new pt;function Sg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ol(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Rx(){const s=Ol("canvas");return s.style.display="block",s}const em={};function Wr(s){s in em||(em[s]=!0,console.warn(s))}function bx(s,e,n){return new Promise(function(r,a){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:r()}}setTimeout(l,n)})}function Px(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Dx(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const tm=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nm=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Lx(){const s={enabled:!0,workingColorSpace:Ys,spaces:{},convert:function(a,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Lt&&(a.r=Gi(a.r),a.g=Gi(a.g),a.b=Gi(a.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Lt&&(a.r=Vs(a.r),a.g=Vs(a.g),a.b=Vs(a.b))),a},fromWorkingColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},toWorkingColorSpace:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===yr?Ul:this.spaces[a].transfer},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,u){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Ys]:{primaries:e,whitePoint:r,transfer:Ul,toXYZ:tm,fromXYZ:nm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Gn},outputColorSpaceConfig:{drawingBufferColorSpace:Gn}},[Gn]:{primaries:e,whitePoint:r,transfer:Lt,toXYZ:tm,fromXYZ:nm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Gn}}}),s}const Pt=Lx();function Gi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Vs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let As;class Nx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{As===void 0&&(As=Ol("canvas")),As.width=e.width,As.height=e.height;const r=As.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=As}return n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ol("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let u=0;u<l.length;u++)l[u]=Gi(l[u]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Gi(n[r]/255)*255):n[r]=Gi(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ix=0;class cf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ix++}),this.uuid=Xo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let u=0,d=a.length;u<d;u++)a[u].isDataTexture?l.push(Pu(a[u].image)):l.push(Pu(a[u]))}else l=Pu(a);r.url=l}return n||(e.images[this.uuid]=r),r}}function Pu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Nx.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ux=0;class Fn extends Zs{constructor(e=Fn.DEFAULT_IMAGE,n=Fn.DEFAULT_MAPPING,r=Kr,a=Kr,l=yi,u=Zr,d=ci,h=ji,p=Fn.DEFAULT_ANISOTROPY,v=yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ux++}),this.uuid=Xo(),this.name="",this.source=new cf(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=h,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _d:e.x=e.x-Math.floor(e.x);break;case Kr:e.x=e.x<0?0:1;break;case xd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _d:e.y=e.y-Math.floor(e.y);break;case Kr:e.y=e.y<0?0:1;break;case xd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=lg;Fn.DEFAULT_ANISOTROPY=1;class Nt{constructor(e=0,n=0,r=0,a=1){Nt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,l=this.w,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*a+u[12]*l,this.y=u[1]*n+u[5]*r+u[9]*a+u[13]*l,this.z=u[2]*n+u[6]*r+u[10]*a+u[14]*l,this.w=u[3]*n+u[7]*r+u[11]*a+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,l;const h=e.elements,p=h[0],v=h[4],_=h[8],y=h[1],M=h[5],E=h[9],A=h[2],S=h[6],x=h[10];if(Math.abs(v-y)<.01&&Math.abs(_-A)<.01&&Math.abs(E-S)<.01){if(Math.abs(v+y)<.1&&Math.abs(_+A)<.1&&Math.abs(E+S)<.1&&Math.abs(p+M+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const L=(p+1)/2,C=(M+1)/2,j=(x+1)/2,B=(v+y)/4,U=(_+A)/4,F=(E+S)/4;return L>C&&L>j?L<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(L),a=B/r,l=U/r):C>j?C<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(C),r=B/a,l=F/a):j<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(j),r=U/l,a=F/l),this.set(r,a,l,n),this}let O=Math.sqrt((S-E)*(S-E)+(_-A)*(_-A)+(y-v)*(y-v));return Math.abs(O)<.001&&(O=1),this.x=(S-E)/O,this.y=(_-A)/O,this.z=(y-v)/O,this.w=Math.acos((p+M+x-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=_t(this.x,e.x,n.x),this.y=_t(this.y,e.y,n.y),this.z=_t(this.z,e.z,n.z),this.w=_t(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=_t(this.x,e,n),this.y=_t(this.y,e,n),this.z=_t(this.z,e,n),this.w=_t(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Fx extends Zs{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Nt(0,0,e,n),this.scissorTest=!1,this.viewport=new Nt(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const l=new Fn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const u=r.count;for(let d=0;d<u;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},e.textures[n].image);this.textures[n].source=new cf(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qr extends Fx{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Mg extends Fn{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=ui,this.minFilter=ui,this.wrapR=Kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ox extends Fn{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=ui,this.minFilter=ui,this.wrapR=Kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qo{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,l,u,d){let h=r[a+0],p=r[a+1],v=r[a+2],_=r[a+3];const y=l[u+0],M=l[u+1],E=l[u+2],A=l[u+3];if(d===0){e[n+0]=h,e[n+1]=p,e[n+2]=v,e[n+3]=_;return}if(d===1){e[n+0]=y,e[n+1]=M,e[n+2]=E,e[n+3]=A;return}if(_!==A||h!==y||p!==M||v!==E){let S=1-d;const x=h*y+p*M+v*E+_*A,O=x>=0?1:-1,L=1-x*x;if(L>Number.EPSILON){const j=Math.sqrt(L),B=Math.atan2(j,x*O);S=Math.sin(S*B)/j,d=Math.sin(d*B)/j}const C=d*O;if(h=h*S+y*C,p=p*S+M*C,v=v*S+E*C,_=_*S+A*C,S===1-d){const j=1/Math.sqrt(h*h+p*p+v*v+_*_);h*=j,p*=j,v*=j,_*=j}}e[n]=h,e[n+1]=p,e[n+2]=v,e[n+3]=_}static multiplyQuaternionsFlat(e,n,r,a,l,u){const d=r[a],h=r[a+1],p=r[a+2],v=r[a+3],_=l[u],y=l[u+1],M=l[u+2],E=l[u+3];return e[n]=d*E+v*_+h*M-p*y,e[n+1]=h*E+v*y+p*_-d*M,e[n+2]=p*E+v*M+d*y-h*_,e[n+3]=v*E-d*_-h*y-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,l=e._z,u=e._order,d=Math.cos,h=Math.sin,p=d(r/2),v=d(a/2),_=d(l/2),y=h(r/2),M=h(a/2),E=h(l/2);switch(u){case"XYZ":this._x=y*v*_+p*M*E,this._y=p*M*_-y*v*E,this._z=p*v*E+y*M*_,this._w=p*v*_-y*M*E;break;case"YXZ":this._x=y*v*_+p*M*E,this._y=p*M*_-y*v*E,this._z=p*v*E-y*M*_,this._w=p*v*_+y*M*E;break;case"ZXY":this._x=y*v*_-p*M*E,this._y=p*M*_+y*v*E,this._z=p*v*E+y*M*_,this._w=p*v*_-y*M*E;break;case"ZYX":this._x=y*v*_-p*M*E,this._y=p*M*_+y*v*E,this._z=p*v*E-y*M*_,this._w=p*v*_+y*M*E;break;case"YZX":this._x=y*v*_+p*M*E,this._y=p*M*_+y*v*E,this._z=p*v*E-y*M*_,this._w=p*v*_-y*M*E;break;case"XZY":this._x=y*v*_-p*M*E,this._y=p*M*_-y*v*E,this._z=p*v*E+y*M*_,this._w=p*v*_+y*M*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],l=n[8],u=n[1],d=n[5],h=n[9],p=n[2],v=n[6],_=n[10],y=r+d+_;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(v-h)*M,this._y=(l-p)*M,this._z=(u-a)*M}else if(r>d&&r>_){const M=2*Math.sqrt(1+r-d-_);this._w=(v-h)/M,this._x=.25*M,this._y=(a+u)/M,this._z=(l+p)/M}else if(d>_){const M=2*Math.sqrt(1+d-r-_);this._w=(l-p)/M,this._x=(a+u)/M,this._y=.25*M,this._z=(h+v)/M}else{const M=2*Math.sqrt(1+_-r-d);this._w=(u-a)/M,this._x=(l+p)/M,this._y=(h+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,l=e._z,u=e._w,d=n._x,h=n._y,p=n._z,v=n._w;return this._x=r*v+u*d+a*p-l*h,this._y=a*v+u*h+l*d-r*p,this._z=l*v+u*p+r*h-a*d,this._w=u*v-r*d-a*h-l*p,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,l=this._z,u=this._w;let d=u*e._w+r*e._x+a*e._y+l*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=u,this._x=r,this._y=a,this._z=l,this;const h=1-d*d;if(h<=Number.EPSILON){const M=1-n;return this._w=M*u+n*this._w,this._x=M*r+n*this._x,this._y=M*a+n*this._y,this._z=M*l+n*this._z,this.normalize(),this}const p=Math.sqrt(h),v=Math.atan2(p,d),_=Math.sin((1-n)*v)/p,y=Math.sin(n*v)/p;return this._w=u*_+this._w*y,this._x=r*_+this._x*y,this._y=a*_+this._y*y,this._z=l*_+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(n),l*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,n=0,r=0){q.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(im.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(im.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*n+l[3]*r+l[6]*a,this.y=l[1]*n+l[4]*r+l[7]*a,this.z=l[2]*n+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,l=e.elements,u=1/(l[3]*n+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*n+l[4]*r+l[8]*a+l[12])*u,this.y=(l[1]*n+l[5]*r+l[9]*a+l[13])*u,this.z=(l[2]*n+l[6]*r+l[10]*a+l[14])*u,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,l=e.x,u=e.y,d=e.z,h=e.w,p=2*(u*a-d*r),v=2*(d*n-l*a),_=2*(l*r-u*n);return this.x=n+h*p+u*_-d*v,this.y=r+h*v+d*p-l*_,this.z=a+h*_+l*v-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*n+l[4]*r+l[8]*a,this.y=l[1]*n+l[5]*r+l[9]*a,this.z=l[2]*n+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=_t(this.x,e.x,n.x),this.y=_t(this.y,e.y,n.y),this.z=_t(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=_t(this.x,e,n),this.y=_t(this.y,e,n),this.z=_t(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,l=e.z,u=n.x,d=n.y,h=n.z;return this.x=a*h-l*d,this.y=l*u-r*h,this.z=r*d-a*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Du.copy(this).projectOnVector(e),this.sub(Du)}reflect(e){return this.sub(Du.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(_t(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Du=new q,im=new qo;class Yo{constructor(e=new q(1/0,1/0,1/0),n=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(si.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(si.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=si.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(n===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=l.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,si):si.fromBufferAttribute(l,u),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),sl.copy(r.boundingBox)),sl.applyMatrix4(e.matrixWorld),this.union(sl)}const a=e.children;for(let l=0,u=a.length;l<u;l++)this.expandByObject(a[l],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Io),ol.subVectors(this.max,Io),Cs.subVectors(e.a,Io),Rs.subVectors(e.b,Io),bs.subVectors(e.c,Io),pr.subVectors(Rs,Cs),mr.subVectors(bs,Rs),zr.subVectors(Cs,bs);let n=[0,-pr.z,pr.y,0,-mr.z,mr.y,0,-zr.z,zr.y,pr.z,0,-pr.x,mr.z,0,-mr.x,zr.z,0,-zr.x,-pr.y,pr.x,0,-mr.y,mr.x,0,-zr.y,zr.x,0];return!Lu(n,Cs,Rs,bs,ol)||(n=[1,0,0,0,1,0,0,0,1],!Lu(n,Cs,Rs,bs,ol))?!1:(al.crossVectors(pr,mr),n=[al.x,al.y,al.z],Lu(n,Cs,Rs,bs,ol))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ni=[new q,new q,new q,new q,new q,new q,new q,new q],si=new q,sl=new Yo,Cs=new q,Rs=new q,bs=new q,pr=new q,mr=new q,zr=new q,Io=new q,ol=new q,al=new q,Br=new q;function Lu(s,e,n,r,a){for(let l=0,u=s.length-3;l<=u;l+=3){Br.fromArray(s,l);const d=a.x*Math.abs(Br.x)+a.y*Math.abs(Br.y)+a.z*Math.abs(Br.z),h=e.dot(Br),p=n.dot(Br),v=r.dot(Br);if(Math.max(-Math.max(h,p,v),Math.min(h,p,v))>d)return!1}return!0}const kx=new Yo,Uo=new q,Nu=new q;class Hl{constructor(e=new q,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):kx.setFromPoints(e).getCenter(r);let a=0;for(let l=0,u=e.length;l<u;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Uo.subVectors(e,this.center);const n=Uo.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Uo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Uo.copy(e.center).add(Nu)),this.expandByPoint(Uo.copy(e.center).sub(Nu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ii=new q,Iu=new q,ll=new q,gr=new q,Uu=new q,cl=new q,Fu=new q;class Eg{constructor(e=new q,n=new q(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ii)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ii.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ii.copy(this.origin).addScaledVector(this.direction,n),Ii.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Iu.copy(e).add(n).multiplyScalar(.5),ll.copy(n).sub(e).normalize(),gr.copy(this.origin).sub(Iu);const l=e.distanceTo(n)*.5,u=-this.direction.dot(ll),d=gr.dot(this.direction),h=-gr.dot(ll),p=gr.lengthSq(),v=Math.abs(1-u*u);let _,y,M,E;if(v>0)if(_=u*h-d,y=u*d-h,E=l*v,_>=0)if(y>=-E)if(y<=E){const A=1/v;_*=A,y*=A,M=_*(_+u*y+2*d)+y*(u*_+y+2*h)+p}else y=l,_=Math.max(0,-(u*y+d)),M=-_*_+y*(y+2*h)+p;else y=-l,_=Math.max(0,-(u*y+d)),M=-_*_+y*(y+2*h)+p;else y<=-E?(_=Math.max(0,-(-u*l+d)),y=_>0?-l:Math.min(Math.max(-l,-h),l),M=-_*_+y*(y+2*h)+p):y<=E?(_=0,y=Math.min(Math.max(-l,-h),l),M=y*(y+2*h)+p):(_=Math.max(0,-(u*l+d)),y=_>0?l:Math.min(Math.max(-l,-h),l),M=-_*_+y*(y+2*h)+p);else y=u>0?-l:l,_=Math.max(0,-(u*y+d)),M=-_*_+y*(y+2*h)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),a&&a.copy(Iu).addScaledVector(ll,y),M}intersectSphere(e,n){Ii.subVectors(e.center,this.origin);const r=Ii.dot(this.direction),a=Ii.dot(Ii)-r*r,l=e.radius*e.radius;if(a>l)return null;const u=Math.sqrt(l-a),d=r-u,h=r+u;return h<0?null:d<0?this.at(h,n):this.at(d,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,l,u,d,h;const p=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,y=this.origin;return p>=0?(r=(e.min.x-y.x)*p,a=(e.max.x-y.x)*p):(r=(e.max.x-y.x)*p,a=(e.min.x-y.x)*p),v>=0?(l=(e.min.y-y.y)*v,u=(e.max.y-y.y)*v):(l=(e.max.y-y.y)*v,u=(e.min.y-y.y)*v),r>u||l>a||((l>r||isNaN(r))&&(r=l),(u<a||isNaN(a))&&(a=u),_>=0?(d=(e.min.z-y.z)*_,h=(e.max.z-y.z)*_):(d=(e.max.z-y.z)*_,h=(e.min.z-y.z)*_),r>h||d>a)||((d>r||r!==r)&&(r=d),(h<a||a!==a)&&(a=h),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Ii)!==null}intersectTriangle(e,n,r,a,l){Uu.subVectors(n,e),cl.subVectors(r,e),Fu.crossVectors(Uu,cl);let u=this.direction.dot(Fu),d;if(u>0){if(a)return null;d=1}else if(u<0)d=-1,u=-u;else return null;gr.subVectors(this.origin,e);const h=d*this.direction.dot(cl.crossVectors(gr,cl));if(h<0)return null;const p=d*this.direction.dot(Uu.cross(gr));if(p<0||h+p>u)return null;const v=-d*gr.dot(Fu);return v<0?null:this.at(v/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bt{constructor(e,n,r,a,l,u,d,h,p,v,_,y,M,E,A,S){Bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,l,u,d,h,p,v,_,y,M,E,A,S)}set(e,n,r,a,l,u,d,h,p,v,_,y,M,E,A,S){const x=this.elements;return x[0]=e,x[4]=n,x[8]=r,x[12]=a,x[1]=l,x[5]=u,x[9]=d,x[13]=h,x[2]=p,x[6]=v,x[10]=_,x[14]=y,x[3]=M,x[7]=E,x[11]=A,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/Ps.setFromMatrixColumn(e,0).length(),l=1/Ps.setFromMatrixColumn(e,1).length(),u=1/Ps.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*l,n[5]=r[5]*l,n[6]=r[6]*l,n[7]=0,n[8]=r[8]*u,n[9]=r[9]*u,n[10]=r[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,l=e.z,u=Math.cos(r),d=Math.sin(r),h=Math.cos(a),p=Math.sin(a),v=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const y=u*v,M=u*_,E=d*v,A=d*_;n[0]=h*v,n[4]=-h*_,n[8]=p,n[1]=M+E*p,n[5]=y-A*p,n[9]=-d*h,n[2]=A-y*p,n[6]=E+M*p,n[10]=u*h}else if(e.order==="YXZ"){const y=h*v,M=h*_,E=p*v,A=p*_;n[0]=y+A*d,n[4]=E*d-M,n[8]=u*p,n[1]=u*_,n[5]=u*v,n[9]=-d,n[2]=M*d-E,n[6]=A+y*d,n[10]=u*h}else if(e.order==="ZXY"){const y=h*v,M=h*_,E=p*v,A=p*_;n[0]=y-A*d,n[4]=-u*_,n[8]=E+M*d,n[1]=M+E*d,n[5]=u*v,n[9]=A-y*d,n[2]=-u*p,n[6]=d,n[10]=u*h}else if(e.order==="ZYX"){const y=u*v,M=u*_,E=d*v,A=d*_;n[0]=h*v,n[4]=E*p-M,n[8]=y*p+A,n[1]=h*_,n[5]=A*p+y,n[9]=M*p-E,n[2]=-p,n[6]=d*h,n[10]=u*h}else if(e.order==="YZX"){const y=u*h,M=u*p,E=d*h,A=d*p;n[0]=h*v,n[4]=A-y*_,n[8]=E*_+M,n[1]=_,n[5]=u*v,n[9]=-d*v,n[2]=-p*v,n[6]=M*_+E,n[10]=y-A*_}else if(e.order==="XZY"){const y=u*h,M=u*p,E=d*h,A=d*p;n[0]=h*v,n[4]=-_,n[8]=p*v,n[1]=y*_+A,n[5]=u*v,n[9]=M*_-E,n[2]=E*_-M,n[6]=d*v,n[10]=A*_+y}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zx,e,Bx)}lookAt(e,n,r){const a=this.elements;return Hn.subVectors(e,n),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),vr.crossVectors(r,Hn),vr.lengthSq()===0&&(Math.abs(r.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),vr.crossVectors(r,Hn)),vr.normalize(),ul.crossVectors(Hn,vr),a[0]=vr.x,a[4]=ul.x,a[8]=Hn.x,a[1]=vr.y,a[5]=ul.y,a[9]=Hn.y,a[2]=vr.z,a[6]=ul.z,a[10]=Hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,l=this.elements,u=r[0],d=r[4],h=r[8],p=r[12],v=r[1],_=r[5],y=r[9],M=r[13],E=r[2],A=r[6],S=r[10],x=r[14],O=r[3],L=r[7],C=r[11],j=r[15],B=a[0],U=a[4],F=a[8],D=a[12],R=a[1],H=a[5],oe=a[9],ee=a[13],ue=a[2],pe=a[6],de=a[10],me=a[14],G=a[3],le=a[7],N=a[11],w=a[15];return l[0]=u*B+d*R+h*ue+p*G,l[4]=u*U+d*H+h*pe+p*le,l[8]=u*F+d*oe+h*de+p*N,l[12]=u*D+d*ee+h*me+p*w,l[1]=v*B+_*R+y*ue+M*G,l[5]=v*U+_*H+y*pe+M*le,l[9]=v*F+_*oe+y*de+M*N,l[13]=v*D+_*ee+y*me+M*w,l[2]=E*B+A*R+S*ue+x*G,l[6]=E*U+A*H+S*pe+x*le,l[10]=E*F+A*oe+S*de+x*N,l[14]=E*D+A*ee+S*me+x*w,l[3]=O*B+L*R+C*ue+j*G,l[7]=O*U+L*H+C*pe+j*le,l[11]=O*F+L*oe+C*de+j*N,l[15]=O*D+L*ee+C*me+j*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],l=e[12],u=e[1],d=e[5],h=e[9],p=e[13],v=e[2],_=e[6],y=e[10],M=e[14],E=e[3],A=e[7],S=e[11],x=e[15];return E*(+l*h*_-a*p*_-l*d*y+r*p*y+a*d*M-r*h*M)+A*(+n*h*M-n*p*y+l*u*y-a*u*M+a*p*v-l*h*v)+S*(+n*p*_-n*d*M-l*u*_+r*u*M+l*d*v-r*p*v)+x*(-a*d*v-n*h*_+n*d*y+a*u*_-r*u*y+r*h*v)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],u=e[4],d=e[5],h=e[6],p=e[7],v=e[8],_=e[9],y=e[10],M=e[11],E=e[12],A=e[13],S=e[14],x=e[15],O=_*S*p-A*y*p+A*h*M-d*S*M-_*h*x+d*y*x,L=E*y*p-v*S*p-E*h*M+u*S*M+v*h*x-u*y*x,C=v*A*p-E*_*p+E*d*M-u*A*M-v*d*x+u*_*x,j=E*_*h-v*A*h-E*d*y+u*A*y+v*d*S-u*_*S,B=n*O+r*L+a*C+l*j;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/B;return e[0]=O*U,e[1]=(A*y*l-_*S*l-A*a*M+r*S*M+_*a*x-r*y*x)*U,e[2]=(d*S*l-A*h*l+A*a*p-r*S*p-d*a*x+r*h*x)*U,e[3]=(_*h*l-d*y*l-_*a*p+r*y*p+d*a*M-r*h*M)*U,e[4]=L*U,e[5]=(v*S*l-E*y*l+E*a*M-n*S*M-v*a*x+n*y*x)*U,e[6]=(E*h*l-u*S*l-E*a*p+n*S*p+u*a*x-n*h*x)*U,e[7]=(u*y*l-v*h*l+v*a*p-n*y*p-u*a*M+n*h*M)*U,e[8]=C*U,e[9]=(E*_*l-v*A*l-E*r*M+n*A*M+v*r*x-n*_*x)*U,e[10]=(u*A*l-E*d*l+E*r*p-n*A*p-u*r*x+n*d*x)*U,e[11]=(v*d*l-u*_*l-v*r*p+n*_*p+u*r*M-n*d*M)*U,e[12]=j*U,e[13]=(v*A*a-E*_*a+E*r*y-n*A*y-v*r*S+n*_*S)*U,e[14]=(E*d*a-u*A*a-E*r*h+n*A*h+u*r*S-n*d*S)*U,e[15]=(u*_*a-v*d*a+v*r*h-n*_*h-u*r*y+n*d*y)*U,this}scale(e){const n=this.elements,r=e.x,a=e.y,l=e.z;return n[0]*=r,n[4]*=a,n[8]*=l,n[1]*=r,n[5]*=a,n[9]*=l,n[2]*=r,n[6]*=a,n[10]*=l,n[3]*=r,n[7]*=a,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),l=1-r,u=e.x,d=e.y,h=e.z,p=l*u,v=l*d;return this.set(p*u+r,p*d-a*h,p*h+a*d,0,p*d+a*h,v*d+r,v*h-a*u,0,p*h-a*d,v*h+a*u,l*h*h+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,l,u){return this.set(1,r,l,0,e,1,u,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,l=n._x,u=n._y,d=n._z,h=n._w,p=l+l,v=u+u,_=d+d,y=l*p,M=l*v,E=l*_,A=u*v,S=u*_,x=d*_,O=h*p,L=h*v,C=h*_,j=r.x,B=r.y,U=r.z;return a[0]=(1-(A+x))*j,a[1]=(M+C)*j,a[2]=(E-L)*j,a[3]=0,a[4]=(M-C)*B,a[5]=(1-(y+x))*B,a[6]=(S+O)*B,a[7]=0,a[8]=(E+L)*U,a[9]=(S-O)*U,a[10]=(1-(y+A))*U,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let l=Ps.set(a[0],a[1],a[2]).length();const u=Ps.set(a[4],a[5],a[6]).length(),d=Ps.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],oi.copy(this);const p=1/l,v=1/u,_=1/d;return oi.elements[0]*=p,oi.elements[1]*=p,oi.elements[2]*=p,oi.elements[4]*=v,oi.elements[5]*=v,oi.elements[6]*=v,oi.elements[8]*=_,oi.elements[9]*=_,oi.elements[10]*=_,n.setFromRotationMatrix(oi),r.x=l,r.y=u,r.z=d,this}makePerspective(e,n,r,a,l,u,d=Hi){const h=this.elements,p=2*l/(n-e),v=2*l/(r-a),_=(n+e)/(n-e),y=(r+a)/(r-a);let M,E;if(d===Hi)M=-(u+l)/(u-l),E=-2*u*l/(u-l);else if(d===Fl)M=-u/(u-l),E=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return h[0]=p,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=v,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,r,a,l,u,d=Hi){const h=this.elements,p=1/(n-e),v=1/(r-a),_=1/(u-l),y=(n+e)*p,M=(r+a)*v;let E,A;if(d===Hi)E=(u+l)*_,A=-2*_;else if(d===Fl)E=l*_,A=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return h[0]=2*p,h[4]=0,h[8]=0,h[12]=-y,h[1]=0,h[5]=2*v,h[9]=0,h[13]=-M,h[2]=0,h[6]=0,h[10]=A,h[14]=-E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Ps=new q,oi=new Bt,zx=new q(0,0,0),Bx=new q(1,1,1),vr=new q,ul=new q,Hn=new q,rm=new Bt,sm=new qo;class Si{constructor(e=0,n=0,r=0,a=Si.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,l=a[0],u=a[4],d=a[8],h=a[1],p=a[5],v=a[9],_=a[2],y=a[6],M=a[10];switch(n){case"XYZ":this._y=Math.asin(_t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(_t(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-_t(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(_t(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-_t(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-v,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return rm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rm,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return sm.setFromEuler(this),this.setFromQuaternion(sm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Si.DEFAULT_ORDER="XYZ";class wg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Hx=0;const om=new q,Ds=new qo,Ui=new Bt,dl=new q,Fo=new q,Vx=new q,Gx=new qo,am=new q(1,0,0),lm=new q(0,1,0),cm=new q(0,0,1),um={type:"added"},jx={type:"removed"},Ls={type:"childadded",child:null},Ou={type:"childremoved",child:null};class fn extends Zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hx++}),this.uuid=Xo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fn.DEFAULT_UP.clone();const e=new q,n=new Si,r=new qo,a=new q(1,1,1);function l(){r.setFromEuler(n,!1)}function u(){n.setFromQuaternion(r,void 0,!1)}n._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Bt},normalMatrix:{value:new pt}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ds.setFromAxisAngle(e,n),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(e,n){return Ds.setFromAxisAngle(e,n),this.quaternion.premultiply(Ds),this}rotateX(e){return this.rotateOnAxis(am,e)}rotateY(e){return this.rotateOnAxis(lm,e)}rotateZ(e){return this.rotateOnAxis(cm,e)}translateOnAxis(e,n){return om.copy(e).applyQuaternion(this.quaternion),this.position.add(om.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(am,e)}translateY(e){return this.translateOnAxis(lm,e)}translateZ(e){return this.translateOnAxis(cm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?dl.copy(e):dl.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(Fo,dl,this.up):Ui.lookAt(dl,Fo,this.up),this.quaternion.setFromRotationMatrix(Ui),a&&(Ui.extractRotation(a.matrixWorld),Ds.setFromRotationMatrix(Ui),this.quaternion.premultiply(Ds.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(um),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(jx),Ou.child=e,this.dispatchEvent(Ou),Ou.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(um),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const u=this.children[r].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,e,Vx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,Gx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function l(d,h){return d[h.uuid]===void 0&&(d[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const h=d.shapes;if(Array.isArray(h))for(let p=0,v=h.length;p<v;p++){const _=h[p];l(e.shapes,_)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let h=0,p=this.material.length;h<p;h++)d.push(l(e.materials,this.material[h]));a.material=d}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const h=this.animations[d];a.animations.push(l(e.animations,h))}}if(n){const d=u(e.geometries),h=u(e.materials),p=u(e.textures),v=u(e.images),_=u(e.shapes),y=u(e.skeletons),M=u(e.animations),E=u(e.nodes);d.length>0&&(r.geometries=d),h.length>0&&(r.materials=h),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),_.length>0&&(r.shapes=_),y.length>0&&(r.skeletons=y),M.length>0&&(r.animations=M),E.length>0&&(r.nodes=E)}return r.object=a,r;function u(d){const h=[];for(const p in d){const v=d[p];delete v.metadata,h.push(v)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}fn.DEFAULT_UP=new q(0,1,0);fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ai=new q,Fi=new q,ku=new q,Oi=new q,Ns=new q,Is=new q,dm=new q,zu=new q,Bu=new q,Hu=new q,Vu=new Nt,Gu=new Nt,ju=new Nt;class li{constructor(e=new q,n=new q,r=new q){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),ai.subVectors(e,n),a.cross(ai);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,n,r,a,l){ai.subVectors(a,n),Fi.subVectors(r,n),ku.subVectors(e,n);const u=ai.dot(ai),d=ai.dot(Fi),h=ai.dot(ku),p=Fi.dot(Fi),v=Fi.dot(ku),_=u*p-d*d;if(_===0)return l.set(0,0,0),null;const y=1/_,M=(p*h-d*v)*y,E=(u*v-d*h)*y;return l.set(1-M-E,E,M)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(e,n,r,a,l,u,d,h){return this.getBarycoord(e,n,r,a,Oi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Oi.x),h.addScaledVector(u,Oi.y),h.addScaledVector(d,Oi.z),h)}static getInterpolatedAttribute(e,n,r,a,l,u){return Vu.setScalar(0),Gu.setScalar(0),ju.setScalar(0),Vu.fromBufferAttribute(e,n),Gu.fromBufferAttribute(e,r),ju.fromBufferAttribute(e,a),u.setScalar(0),u.addScaledVector(Vu,l.x),u.addScaledVector(Gu,l.y),u.addScaledVector(ju,l.z),u}static isFrontFacing(e,n,r,a){return ai.subVectors(r,n),Fi.subVectors(e,n),ai.cross(Fi).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ai.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),ai.cross(Fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return li.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,l){return li.getInterpolation(e,this.a,this.b,this.c,n,r,a,l)}containsPoint(e){return li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,l=this.c;let u,d;Ns.subVectors(a,r),Is.subVectors(l,r),zu.subVectors(e,r);const h=Ns.dot(zu),p=Is.dot(zu);if(h<=0&&p<=0)return n.copy(r);Bu.subVectors(e,a);const v=Ns.dot(Bu),_=Is.dot(Bu);if(v>=0&&_<=v)return n.copy(a);const y=h*_-v*p;if(y<=0&&h>=0&&v<=0)return u=h/(h-v),n.copy(r).addScaledVector(Ns,u);Hu.subVectors(e,l);const M=Ns.dot(Hu),E=Is.dot(Hu);if(E>=0&&M<=E)return n.copy(l);const A=M*p-h*E;if(A<=0&&p>=0&&E<=0)return d=p/(p-E),n.copy(r).addScaledVector(Is,d);const S=v*E-M*_;if(S<=0&&_-v>=0&&M-E>=0)return dm.subVectors(l,a),d=(_-v)/(_-v+(M-E)),n.copy(a).addScaledVector(dm,d);const x=1/(S+A+y);return u=A*x,d=y*x,n.copy(r).addScaledVector(Ns,u).addScaledVector(Is,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Tg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_r={h:0,s:0,l:0},fl={h:0,s:0,l:0};function Wu(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class xt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=Pt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Pt.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=Pt.workingColorSpace){if(e=Cx(e,1),n=_t(n,0,1),r=_t(r,0,1),n===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+n):r+n-r*n,u=2*r-l;this.r=Wu(u,l,e+1/3),this.g=Wu(u,l,e),this.b=Wu(u,l,e-1/3)}return Pt.toWorkingColorSpace(this,a),this}setStyle(e,n=Gn){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=a[1],d=a[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(l,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Gn){const r=Tg[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gi(e.r),this.g=Gi(e.g),this.b=Gi(e.b),this}copyLinearToSRGB(e){return this.r=Vs(e.r),this.g=Vs(e.g),this.b=Vs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gn){return Pt.fromWorkingColorSpace(yn.copy(this),e),Math.round(_t(yn.r*255,0,255))*65536+Math.round(_t(yn.g*255,0,255))*256+Math.round(_t(yn.b*255,0,255))}getHexString(e=Gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Pt.workingColorSpace){Pt.fromWorkingColorSpace(yn.copy(this),n);const r=yn.r,a=yn.g,l=yn.b,u=Math.max(r,a,l),d=Math.min(r,a,l);let h,p;const v=(d+u)/2;if(d===u)h=0,p=0;else{const _=u-d;switch(p=v<=.5?_/(u+d):_/(2-u-d),u){case r:h=(a-l)/_+(a<l?6:0);break;case a:h=(l-r)/_+2;break;case l:h=(r-a)/_+4;break}h/=6}return e.h=h,e.s=p,e.l=v,e}getRGB(e,n=Pt.workingColorSpace){return Pt.fromWorkingColorSpace(yn.copy(this),n),e.r=yn.r,e.g=yn.g,e.b=yn.b,e}getStyle(e=Gn){Pt.fromWorkingColorSpace(yn.copy(this),e);const n=yn.r,r=yn.g,a=yn.b;return e!==Gn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(_r),this.setHSL(_r.h+e,_r.s+n,_r.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(_r),e.getHSL(fl);const r=Ru(_r.h,fl.h,n),a=Ru(_r.s,fl.s,n),l=Ru(_r.l,fl.l,n);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*n+l[3]*r+l[6]*a,this.g=l[1]*n+l[4]*r+l[7]*a,this.b=l[2]*n+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yn=new xt;xt.NAMES=Tg;let Wx=0;class Js extends Zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wx++}),this.uuid=Xo(),this.name="",this.type="Material",this.blending=Bs,this.side=Er,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ad,this.blendDst=ld,this.blendEquation=Yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=Gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ts,this.stencilZFail=Ts,this.stencilZPass=Ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(r.blending=this.blending),this.side!==Er&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==ad&&(r.blendSrc=this.blendSrc),this.blendDst!==ld&&(r.blendDst=this.blendDst),this.blendEquation!==Yr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Gs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ts&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ts&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ts&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const u=[];for(const d in l){const h=l[d];delete h.metadata,u.push(h)}return u}if(n){const l=a(e.textures),u=a(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=n[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ag extends Js{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=ag,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Kt=new q,hl=new rt;let Xx=0;class di{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Xx++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Jp,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)hl.fromBufferAttribute(this,n),hl.applyMatrix3(e),this.setXY(n,hl.x,hl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Kt.fromBufferAttribute(this,n),Kt.applyMatrix3(e),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Kt.fromBufferAttribute(this,n),Kt.applyMatrix4(e),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Kt.fromBufferAttribute(this,n),Kt.applyNormalMatrix(e),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Kt.fromBufferAttribute(this,n),Kt.transformDirection(e),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=No(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=In(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=No(n,this.array)),n}setX(e,n){return this.normalized&&(n=In(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=No(n,this.array)),n}setY(e,n){return this.normalized&&(n=In(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=No(n,this.array)),n}setZ(e,n){return this.normalized&&(n=In(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=No(n,this.array)),n}setW(e,n){return this.normalized&&(n=In(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=In(n,this.array),r=In(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=In(n,this.array),r=In(r,this.array),a=In(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,l){return e*=this.itemSize,this.normalized&&(n=In(n,this.array),r=In(r,this.array),a=In(a,this.array),l=In(l,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jp&&(e.usage=this.usage),e}}class Cg extends di{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Rg extends di{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Sn extends di{constructor(e,n,r){super(new Float32Array(e),n,r)}}let qx=0;const Zn=new Bt,Xu=new fn,Us=new q,Vn=new Yo,Oo=new Yo,ln=new q;class Jn extends Zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qx++}),this.uuid=Xo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sg(e)?Rg:Cg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new pt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,n,r){return Zn.makeTranslation(e,n,r),this.applyMatrix4(Zn),this}scale(e,n,r){return Zn.makeScale(e,n,r),this.applyMatrix4(Zn),this}lookAt(e){return Xu.lookAt(e),Xu.updateMatrix(),this.applyMatrix4(Xu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Us).negate(),this.translate(Us.x,Us.y,Us.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,l=e.length;a<l;a++){const u=e[a];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Sn(r,3))}else{const r=Math.min(e.length,n.count);for(let a=0;a<r;a++){const l=e[a];n.setXYZ(a,l.x,l.y,l.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const l=n[r];Vn.setFromBufferAttribute(l),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const r=this.boundingSphere.center;if(Vn.setFromBufferAttribute(e),n)for(let l=0,u=n.length;l<u;l++){const d=n[l];Oo.setFromBufferAttribute(d),this.morphTargetsRelative?(ln.addVectors(Vn.min,Oo.min),Vn.expandByPoint(ln),ln.addVectors(Vn.max,Oo.max),Vn.expandByPoint(ln)):(Vn.expandByPoint(Oo.min),Vn.expandByPoint(Oo.max))}Vn.getCenter(r);let a=0;for(let l=0,u=e.count;l<u;l++)ln.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(ln));if(n)for(let l=0,u=n.length;l<u;l++){const d=n[l],h=this.morphTargetsRelative;for(let p=0,v=d.count;p<v;p++)ln.fromBufferAttribute(d,p),h&&(Us.fromBufferAttribute(e,p),ln.add(Us)),a=Math.max(a,r.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,l=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new di(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),d=[],h=[];for(let F=0;F<r.count;F++)d[F]=new q,h[F]=new q;const p=new q,v=new q,_=new q,y=new rt,M=new rt,E=new rt,A=new q,S=new q;function x(F,D,R){p.fromBufferAttribute(r,F),v.fromBufferAttribute(r,D),_.fromBufferAttribute(r,R),y.fromBufferAttribute(l,F),M.fromBufferAttribute(l,D),E.fromBufferAttribute(l,R),v.sub(p),_.sub(p),M.sub(y),E.sub(y);const H=1/(M.x*E.y-E.x*M.y);isFinite(H)&&(A.copy(v).multiplyScalar(E.y).addScaledVector(_,-M.y).multiplyScalar(H),S.copy(_).multiplyScalar(M.x).addScaledVector(v,-E.x).multiplyScalar(H),d[F].add(A),d[D].add(A),d[R].add(A),h[F].add(S),h[D].add(S),h[R].add(S))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let F=0,D=O.length;F<D;++F){const R=O[F],H=R.start,oe=R.count;for(let ee=H,ue=H+oe;ee<ue;ee+=3)x(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const L=new q,C=new q,j=new q,B=new q;function U(F){j.fromBufferAttribute(a,F),B.copy(j);const D=d[F];L.copy(D),L.sub(j.multiplyScalar(j.dot(D))).normalize(),C.crossVectors(B,D);const H=C.dot(h[F])<0?-1:1;u.setXYZW(F,L.x,L.y,L.z,H)}for(let F=0,D=O.length;F<D;++F){const R=O[F],H=R.start,oe=R.count;for(let ee=H,ue=H+oe;ee<ue;ee+=3)U(e.getX(ee+0)),U(e.getX(ee+1)),U(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new di(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let y=0,M=r.count;y<M;y++)r.setXYZ(y,0,0,0);const a=new q,l=new q,u=new q,d=new q,h=new q,p=new q,v=new q,_=new q;if(e)for(let y=0,M=e.count;y<M;y+=3){const E=e.getX(y+0),A=e.getX(y+1),S=e.getX(y+2);a.fromBufferAttribute(n,E),l.fromBufferAttribute(n,A),u.fromBufferAttribute(n,S),v.subVectors(u,l),_.subVectors(a,l),v.cross(_),d.fromBufferAttribute(r,E),h.fromBufferAttribute(r,A),p.fromBufferAttribute(r,S),d.add(v),h.add(v),p.add(v),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(A,h.x,h.y,h.z),r.setXYZ(S,p.x,p.y,p.z)}else for(let y=0,M=n.count;y<M;y+=3)a.fromBufferAttribute(n,y+0),l.fromBufferAttribute(n,y+1),u.fromBufferAttribute(n,y+2),v.subVectors(u,l),_.subVectors(a,l),v.cross(_),r.setXYZ(y+0,v.x,v.y,v.z),r.setXYZ(y+1,v.x,v.y,v.z),r.setXYZ(y+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)ln.fromBufferAttribute(e,n),ln.normalize(),e.setXYZ(n,ln.x,ln.y,ln.z)}toNonIndexed(){function e(d,h){const p=d.array,v=d.itemSize,_=d.normalized,y=new p.constructor(h.length*v);let M=0,E=0;for(let A=0,S=h.length;A<S;A++){d.isInterleavedBufferAttribute?M=h[A]*d.data.stride+d.offset:M=h[A]*v;for(let x=0;x<v;x++)y[E++]=p[M++]}return new di(y,v,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Jn,r=this.index.array,a=this.attributes;for(const d in a){const h=a[d],p=e(h,r);n.setAttribute(d,p)}const l=this.morphAttributes;for(const d in l){const h=[],p=l[d];for(let v=0,_=p.length;v<_;v++){const y=p[v],M=e(y,r);h.push(M)}n.morphAttributes[d]=h}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,h=u.length;d<h;d++){const p=u[d];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const h in r){const p=r[h];e.data.attributes[h]=p.toJSON(e.data)}const a={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],v=[];for(let _=0,y=p.length;_<y;_++){const M=p[_];v.push(M.toJSON(e.data))}v.length>0&&(a[h]=v,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const p in a){const v=a[p];this.setAttribute(p,v.clone(n))}const l=e.morphAttributes;for(const p in l){const v=[],_=l[p];for(let y=0,M=_.length;y<M;y++)v.push(_[y].clone(n));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,v=u.length;p<v;p++){const _=u[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fm=new Bt,Hr=new Eg,pl=new Hl,hm=new q,ml=new q,gl=new q,vl=new q,qu=new q,_l=new q,pm=new q,xl=new q;class zt extends fn{constructor(e=new Jn,n=new Ag){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(l&&d){_l.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const v=d[h],_=l[h];v!==0&&(qu.fromBufferAttribute(_,e),u?_l.addScaledVector(qu,v):_l.addScaledVector(qu.sub(n),v))}n.add(_l)}return n}raycast(e,n){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),pl.copy(r.boundingSphere),pl.applyMatrix4(l),Hr.copy(e.ray).recast(e.near),!(pl.containsPoint(Hr.origin)===!1&&(Hr.intersectSphere(pl,hm)===null||Hr.origin.distanceToSquared(hm)>(e.far-e.near)**2))&&(fm.copy(l).invert(),Hr.copy(e.ray).applyMatrix4(fm),!(r.boundingBox!==null&&Hr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Hr)))}_computeIntersections(e,n,r){let a;const l=this.geometry,u=this.material,d=l.index,h=l.attributes.position,p=l.attributes.uv,v=l.attributes.uv1,_=l.attributes.normal,y=l.groups,M=l.drawRange;if(d!==null)if(Array.isArray(u))for(let E=0,A=y.length;E<A;E++){const S=y[E],x=u[S.materialIndex],O=Math.max(S.start,M.start),L=Math.min(d.count,Math.min(S.start+S.count,M.start+M.count));for(let C=O,j=L;C<j;C+=3){const B=d.getX(C),U=d.getX(C+1),F=d.getX(C+2);a=yl(this,x,e,r,p,v,_,B,U,F),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=S.materialIndex,n.push(a))}}else{const E=Math.max(0,M.start),A=Math.min(d.count,M.start+M.count);for(let S=E,x=A;S<x;S+=3){const O=d.getX(S),L=d.getX(S+1),C=d.getX(S+2);a=yl(this,u,e,r,p,v,_,O,L,C),a&&(a.faceIndex=Math.floor(S/3),n.push(a))}}else if(h!==void 0)if(Array.isArray(u))for(let E=0,A=y.length;E<A;E++){const S=y[E],x=u[S.materialIndex],O=Math.max(S.start,M.start),L=Math.min(h.count,Math.min(S.start+S.count,M.start+M.count));for(let C=O,j=L;C<j;C+=3){const B=C,U=C+1,F=C+2;a=yl(this,x,e,r,p,v,_,B,U,F),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=S.materialIndex,n.push(a))}}else{const E=Math.max(0,M.start),A=Math.min(h.count,M.start+M.count);for(let S=E,x=A;S<x;S+=3){const O=S,L=S+1,C=S+2;a=yl(this,u,e,r,p,v,_,O,L,C),a&&(a.faceIndex=Math.floor(S/3),n.push(a))}}}}function Yx(s,e,n,r,a,l,u,d){let h;if(e.side===Un?h=r.intersectTriangle(u,l,a,!0,d):h=r.intersectTriangle(a,l,u,e.side===Er,d),h===null)return null;xl.copy(d),xl.applyMatrix4(s.matrixWorld);const p=n.ray.origin.distanceTo(xl);return p<n.near||p>n.far?null:{distance:p,point:xl.clone(),object:s}}function yl(s,e,n,r,a,l,u,d,h,p){s.getVertexPosition(d,ml),s.getVertexPosition(h,gl),s.getVertexPosition(p,vl);const v=Yx(s,e,n,r,ml,gl,vl,pm);if(v){const _=new q;li.getBarycoord(pm,ml,gl,vl,_),a&&(v.uv=li.getInterpolatedAttribute(a,d,h,p,_,new rt)),l&&(v.uv1=li.getInterpolatedAttribute(l,d,h,p,_,new rt)),u&&(v.normal=li.getInterpolatedAttribute(u,d,h,p,_,new q),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const y={a:d,b:h,c:p,normal:new q,materialIndex:0};li.getNormal(ml,gl,vl,y.normal),v.face=y,v.barycoord=_}return v}class Vi extends Jn{constructor(e=1,n=1,r=1,a=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:l,depthSegments:u};const d=this;a=Math.floor(a),l=Math.floor(l),u=Math.floor(u);const h=[],p=[],v=[],_=[];let y=0,M=0;E("z","y","x",-1,-1,r,n,e,u,l,0),E("z","y","x",1,-1,r,n,-e,u,l,1),E("x","z","y",1,1,e,r,n,a,u,2),E("x","z","y",1,-1,e,r,-n,a,u,3),E("x","y","z",1,-1,e,n,r,a,l,4),E("x","y","z",-1,-1,e,n,-r,a,l,5),this.setIndex(h),this.setAttribute("position",new Sn(p,3)),this.setAttribute("normal",new Sn(v,3)),this.setAttribute("uv",new Sn(_,2));function E(A,S,x,O,L,C,j,B,U,F,D){const R=C/U,H=j/F,oe=C/2,ee=j/2,ue=B/2,pe=U+1,de=F+1;let me=0,G=0;const le=new q;for(let N=0;N<de;N++){const w=N*H-ee;for(let W=0;W<pe;W++){const ge=W*R-oe;le[A]=ge*O,le[S]=w*L,le[x]=ue,p.push(le.x,le.y,le.z),le[A]=0,le[S]=0,le[x]=B>0?1:-1,v.push(le.x,le.y,le.z),_.push(W/U),_.push(1-N/F),me+=1}}for(let N=0;N<F;N++)for(let w=0;w<U;w++){const W=y+w+pe*N,ge=y+w+pe*(N+1),Y=y+(w+1)+pe*(N+1),re=y+(w+1)+pe*N;h.push(W,ge,re),h.push(ge,Y,re),G+=6}d.addGroup(M,G,D),M+=G,y+=me}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $s(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function An(s){const e={};for(let n=0;n<s.length;n++){const r=$s(s[n]);for(const a in r)e[a]=r[a]}return e}function $x(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function bg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Pt.workingColorSpace}const Kx={clone:$s,merge:An};var Zx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wr extends Js{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zx,this.fragmentShader=Jx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$s(e.uniforms),this.uniformsGroups=$x(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?n.uniforms[a]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[a]={type:"m4",value:u.toArray()}:n.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Pg extends fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=Hi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xr=new q,mm=new rt,gm=new rt;class jn extends Pg{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Xd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Cu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xd*2*Math.atan(Math.tan(Cu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xr.x,xr.y).multiplyScalar(-e/xr.z),xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(xr.x,xr.y).multiplyScalar(-e/xr.z)}getViewSize(e,n){return this.getViewBounds(e,mm,gm),n.subVectors(gm,mm)}setViewOffset(e,n,r,a,l,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Cu*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,l=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,p=u.fullHeight;l+=u.offsetX*a/h,n-=u.offsetY*r/p,a*=u.width/h,r*=u.height/p}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Fs=-90,Os=1;class Qx extends fn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new jn(Fs,Os,e,n);a.layers=this.layers,this.add(a);const l=new jn(Fs,Os,e,n);l.layers=this.layers,this.add(l);const u=new jn(Fs,Os,e,n);u.layers=this.layers,this.add(u);const d=new jn(Fs,Os,e,n);d.layers=this.layers,this.add(d);const h=new jn(Fs,Os,e,n);h.layers=this.layers,this.add(h);const p=new jn(Fs,Os,e,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,l,u,d,h]=n;for(const p of n)this.remove(p);if(e===Hi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Fl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of n)this.add(p),p.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,d,h,p,v]=this.children,_=e.getRenderTarget(),y=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,l),e.setRenderTarget(r,1,a),e.render(n,u),e.setRenderTarget(r,2,a),e.render(n,d),e.setRenderTarget(r,3,a),e.render(n,h),e.setRenderTarget(r,4,a),e.render(n,p),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,a),e.render(n,v),e.setRenderTarget(_,y,M),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class Dg extends Fn{constructor(e,n,r,a,l,u,d,h,p,v){e=e!==void 0?e:[],n=n!==void 0?n:js,super(e,n,r,a,l,u,d,h,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ey extends Qr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new Dg(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:yi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Vi(5,5,5),l=new wr({name:"CubemapFromEquirect",uniforms:$s(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Un,blending:Sr});l.uniforms.tEquirect.value=n;const u=new zt(a,l),d=n.minFilter;return n.minFilter===Zr&&(n.minFilter=yi),new Qx(1,10,this).update(e,u),n.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,n,r,a){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,r,a);e.setRenderTarget(l)}}class zo extends fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ty={type:"move"};class Yu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,l=null,u=null;const d=this._targetRay,h=this._grip,p=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const A of e.hand.values()){const S=n.getJointPose(A,r),x=this._getHandJoint(p,A);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const v=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],y=v.position.distanceTo(_.position),M=.02,E=.005;p.inputState.pinching&&y>M+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&y<=M-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));d!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(ty)))}return d!==null&&(d.visible=a!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new zo;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class ny extends fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Si,this.environmentIntensity=1,this.environmentRotation=new Si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const $u=new q,iy=new q,ry=new pt;class Xr{constructor(e=new q(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=$u.subVectors(r,n).cross(iy.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta($u),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:n.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||ry.getNormalMatrix(e),a=this.coplanarPoint($u).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vr=new Hl,Sl=new q;class uf{constructor(e=new Xr,n=new Xr,r=new Xr,a=new Xr,l=new Xr,u=new Xr){this.planes=[e,n,r,a,l,u]}set(e,n,r,a,l,u){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(a),d[4].copy(l),d[5].copy(u),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Hi){const r=this.planes,a=e.elements,l=a[0],u=a[1],d=a[2],h=a[3],p=a[4],v=a[5],_=a[6],y=a[7],M=a[8],E=a[9],A=a[10],S=a[11],x=a[12],O=a[13],L=a[14],C=a[15];if(r[0].setComponents(h-l,y-p,S-M,C-x).normalize(),r[1].setComponents(h+l,y+p,S+M,C+x).normalize(),r[2].setComponents(h+u,y+v,S+E,C+O).normalize(),r[3].setComponents(h-u,y-v,S-E,C-O).normalize(),r[4].setComponents(h-d,y-_,S-A,C-L).normalize(),n===Hi)r[5].setComponents(h+d,y+_,S+A,C+L).normalize();else if(n===Fl)r[5].setComponents(d,_,A,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vr)}intersectsSprite(e){return Vr.center.set(0,0,0),Vr.radius=.7071067811865476,Vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vr)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(Sl.x=a.normal.x>0?e.max.x:e.min.x,Sl.y=a.normal.y>0?e.max.y:e.min.y,Sl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Sl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Lg extends Js{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const vm=new Bt,qd=new Eg,Ml=new Hl,El=new q;class sy extends fn{constructor(e=new Jn,n=new Lg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,l=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ml.copy(r.boundingSphere),Ml.applyMatrix4(a),Ml.radius+=l,e.ray.intersectsSphere(Ml)===!1)return;vm.copy(a).invert(),qd.copy(e.ray).applyMatrix4(vm);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=d*d,p=r.index,_=r.attributes.position;if(p!==null){const y=Math.max(0,u.start),M=Math.min(p.count,u.start+u.count);for(let E=y,A=M;E<A;E++){const S=p.getX(E);El.fromBufferAttribute(_,S),_m(El,S,h,a,e,n,this)}}else{const y=Math.max(0,u.start),M=Math.min(_.count,u.start+u.count);for(let E=y,A=M;E<A;E++)El.fromBufferAttribute(_,E),_m(El,E,h,a,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function _m(s,e,n,r,a,l,u){const d=qd.distanceSqToPoint(s);if(d<n){const h=new q;qd.closestPointToPoint(s,h),h.applyMatrix4(r);const p=a.ray.origin.distanceTo(h);if(p<a.near||p>a.far)return;l.push({distance:p,distanceToRay:Math.sqrt(d),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class Ng extends Fn{constructor(e,n,r,a,l,u,d,h,p,v=Hs){if(v!==Hs&&v!==qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&v===Hs&&(r=Jr),r===void 0&&v===qs&&(r=Xs),super(null,a,l,u,d,h,v,r,p),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=d!==void 0?d:ui,this.minFilter=h!==void 0?h:ui,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new cf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Wi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,n){const r=this.getUtoTmapping(e);return this.getPoint(r,n)}getPoints(e=5){const n=[];for(let r=0;r<=e;r++)n.push(this.getPoint(r/e));return n}getSpacedPoints(e=5){const n=[];for(let r=0;r<=e;r++)n.push(this.getPointAt(r/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let r,a=this.getPoint(0),l=0;n.push(0);for(let u=1;u<=e;u++)r=this.getPoint(u/e),l+=r.distanceTo(a),n.push(l),a=r;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){const r=this.getLengths();let a=0;const l=r.length;let u;n?u=n:u=e*r[l-1];let d=0,h=l-1,p;for(;d<=h;)if(a=Math.floor(d+(h-d)/2),p=r[a]-u,p<0)d=a+1;else if(p>0)h=a-1;else{h=a;break}if(a=h,r[a]===u)return a/(l-1);const v=r[a],y=r[a+1]-v,M=(u-v)/y;return(a+M)/(l-1)}getTangent(e,n){let a=e-1e-4,l=e+1e-4;a<0&&(a=0),l>1&&(l=1);const u=this.getPoint(a),d=this.getPoint(l),h=n||(u.isVector2?new rt:new q);return h.copy(d).sub(u).normalize(),h}getTangentAt(e,n){const r=this.getUtoTmapping(e);return this.getTangent(r,n)}computeFrenetFrames(e,n=!1){const r=new q,a=[],l=[],u=[],d=new q,h=new Bt;for(let M=0;M<=e;M++){const E=M/e;a[M]=this.getTangentAt(E,new q)}l[0]=new q,u[0]=new q;let p=Number.MAX_VALUE;const v=Math.abs(a[0].x),_=Math.abs(a[0].y),y=Math.abs(a[0].z);v<=p&&(p=v,r.set(1,0,0)),_<=p&&(p=_,r.set(0,1,0)),y<=p&&r.set(0,0,1),d.crossVectors(a[0],r).normalize(),l[0].crossVectors(a[0],d),u[0].crossVectors(a[0],l[0]);for(let M=1;M<=e;M++){if(l[M]=l[M-1].clone(),u[M]=u[M-1].clone(),d.crossVectors(a[M-1],a[M]),d.length()>Number.EPSILON){d.normalize();const E=Math.acos(_t(a[M-1].dot(a[M]),-1,1));l[M].applyMatrix4(h.makeRotationAxis(d,E))}u[M].crossVectors(a[M],l[M])}if(n===!0){let M=Math.acos(_t(l[0].dot(l[e]),-1,1));M/=e,a[0].dot(d.crossVectors(l[0],l[e]))>0&&(M=-M);for(let E=1;E<=e;E++)l[E].applyMatrix4(h.makeRotationAxis(a[E],M*E)),u[E].crossVectors(a[E],l[E])}return{tangents:a,normals:l,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ig extends Wi{constructor(e=0,n=0,r=1,a=1,l=0,u=Math.PI*2,d=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=r,this.yRadius=a,this.aStartAngle=l,this.aEndAngle=u,this.aClockwise=d,this.aRotation=h}getPoint(e,n=new rt){const r=n,a=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const u=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=a;for(;l>a;)l-=a;l<Number.EPSILON&&(u?l=0:l=a),this.aClockwise===!0&&!u&&(l===a?l=-a:l=l-a);const d=this.aStartAngle+e*l;let h=this.aX+this.xRadius*Math.cos(d),p=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const v=Math.cos(this.aRotation),_=Math.sin(this.aRotation),y=h-this.aX,M=p-this.aY;h=y*v-M*_+this.aX,p=y*_+M*v+this.aY}return r.set(h,p)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class oy extends Ig{constructor(e,n,r,a,l,u){super(e,n,r,r,a,l,u),this.isArcCurve=!0,this.type="ArcCurve"}}function df(){let s=0,e=0,n=0,r=0;function a(l,u,d,h){s=l,e=d,n=-3*l+3*u-2*d-h,r=2*l-2*u+d+h}return{initCatmullRom:function(l,u,d,h,p){a(u,d,p*(d-l),p*(h-u))},initNonuniformCatmullRom:function(l,u,d,h,p,v,_){let y=(u-l)/p-(d-l)/(p+v)+(d-u)/v,M=(d-u)/v-(h-u)/(v+_)+(h-d)/_;y*=v,M*=v,a(u,d,y,M)},calc:function(l){const u=l*l,d=u*l;return s+e*l+n*u+r*d}}}const wl=new q,Ku=new df,Zu=new df,Ju=new df;class ay extends Wi{constructor(e=[],n=!1,r="centripetal",a=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=r,this.tension=a}getPoint(e,n=new q){const r=n,a=this.points,l=a.length,u=(l-(this.closed?0:1))*e;let d=Math.floor(u),h=u-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/l)+1)*l:h===0&&d===l-1&&(d=l-2,h=1);let p,v;this.closed||d>0?p=a[(d-1)%l]:(wl.subVectors(a[0],a[1]).add(a[0]),p=wl);const _=a[d%l],y=a[(d+1)%l];if(this.closed||d+2<l?v=a[(d+2)%l]:(wl.subVectors(a[l-1],a[l-2]).add(a[l-1]),v=wl),this.curveType==="centripetal"||this.curveType==="chordal"){const M=this.curveType==="chordal"?.5:.25;let E=Math.pow(p.distanceToSquared(_),M),A=Math.pow(_.distanceToSquared(y),M),S=Math.pow(y.distanceToSquared(v),M);A<1e-4&&(A=1),E<1e-4&&(E=A),S<1e-4&&(S=A),Ku.initNonuniformCatmullRom(p.x,_.x,y.x,v.x,E,A,S),Zu.initNonuniformCatmullRom(p.y,_.y,y.y,v.y,E,A,S),Ju.initNonuniformCatmullRom(p.z,_.z,y.z,v.z,E,A,S)}else this.curveType==="catmullrom"&&(Ku.initCatmullRom(p.x,_.x,y.x,v.x,this.tension),Zu.initCatmullRom(p.y,_.y,y.y,v.y,this.tension),Ju.initCatmullRom(p.z,_.z,y.z,v.z,this.tension));return r.set(Ku.calc(h),Zu.calc(h),Ju.calc(h)),r}copy(e){super.copy(e),this.points=[];for(let n=0,r=e.points.length;n<r;n++){const a=e.points[n];this.points.push(a.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,r=this.points.length;n<r;n++){const a=this.points[n];e.points.push(a.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,r=e.points.length;n<r;n++){const a=e.points[n];this.points.push(new q().fromArray(a))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function xm(s,e,n,r,a){const l=(r-e)*.5,u=(a-n)*.5,d=s*s,h=s*d;return(2*n-2*r+l+u)*h+(-3*n+3*r-2*l-u)*d+l*s+n}function ly(s,e){const n=1-s;return n*n*e}function cy(s,e){return 2*(1-s)*s*e}function uy(s,e){return s*s*e}function Vo(s,e,n,r){return ly(s,e)+cy(s,n)+uy(s,r)}function dy(s,e){const n=1-s;return n*n*n*e}function fy(s,e){const n=1-s;return 3*n*n*s*e}function hy(s,e){return 3*(1-s)*s*s*e}function py(s,e){return s*s*s*e}function Go(s,e,n,r,a){return dy(s,e)+fy(s,n)+hy(s,r)+py(s,a)}class my extends Wi{constructor(e=new rt,n=new rt,r=new rt,a=new rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=r,this.v3=a}getPoint(e,n=new rt){const r=n,a=this.v0,l=this.v1,u=this.v2,d=this.v3;return r.set(Go(e,a.x,l.x,u.x,d.x),Go(e,a.y,l.y,u.y,d.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class gy extends Wi{constructor(e=new q,n=new q,r=new q,a=new q){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=r,this.v3=a}getPoint(e,n=new q){const r=n,a=this.v0,l=this.v1,u=this.v2,d=this.v3;return r.set(Go(e,a.x,l.x,u.x,d.x),Go(e,a.y,l.y,u.y,d.y),Go(e,a.z,l.z,u.z,d.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class vy extends Wi{constructor(e=new rt,n=new rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new rt){const r=n;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new rt){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _y extends Wi{constructor(e=new q,n=new q){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new q){const r=n;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new q){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class xy extends Wi{constructor(e=new rt,n=new rt,r=new rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=r}getPoint(e,n=new rt){const r=n,a=this.v0,l=this.v1,u=this.v2;return r.set(Vo(e,a.x,l.x,u.x),Vo(e,a.y,l.y,u.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ff extends Wi{constructor(e=new q,n=new q,r=new q){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=r}getPoint(e,n=new q){const r=n,a=this.v0,l=this.v1,u=this.v2;return r.set(Vo(e,a.x,l.x,u.x),Vo(e,a.y,l.y,u.y),Vo(e,a.z,l.z,u.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class yy extends Wi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new rt){const r=n,a=this.points,l=(a.length-1)*e,u=Math.floor(l),d=l-u,h=a[u===0?u:u-1],p=a[u],v=a[u>a.length-2?a.length-1:u+1],_=a[u>a.length-3?a.length-1:u+2];return r.set(xm(d,h.x,p.x,v.x,_.x),xm(d,h.y,p.y,v.y,_.y)),r}copy(e){super.copy(e),this.points=[];for(let n=0,r=e.points.length;n<r;n++){const a=e.points[n];this.points.push(a.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,r=this.points.length;n<r;n++){const a=this.points[n];e.points.push(a.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,r=e.points.length;n<r;n++){const a=e.points[n];this.points.push(new rt().fromArray(a))}return this}}var Sy=Object.freeze({__proto__:null,ArcCurve:oy,CatmullRomCurve3:ay,CubicBezierCurve:my,CubicBezierCurve3:gy,EllipseCurve:Ig,LineCurve:vy,LineCurve3:_y,QuadraticBezierCurve:xy,QuadraticBezierCurve3:ff,SplineCurve:yy});class _i extends Jn{constructor(e=1,n=1,r=1,a=32,l=1,u=!1,d=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:r,radialSegments:a,heightSegments:l,openEnded:u,thetaStart:d,thetaLength:h};const p=this;a=Math.floor(a),l=Math.floor(l);const v=[],_=[],y=[],M=[];let E=0;const A=[],S=r/2;let x=0;O(),u===!1&&(e>0&&L(!0),n>0&&L(!1)),this.setIndex(v),this.setAttribute("position",new Sn(_,3)),this.setAttribute("normal",new Sn(y,3)),this.setAttribute("uv",new Sn(M,2));function O(){const C=new q,j=new q;let B=0;const U=(n-e)/r;for(let F=0;F<=l;F++){const D=[],R=F/l,H=R*(n-e)+e;for(let oe=0;oe<=a;oe++){const ee=oe/a,ue=ee*h+d,pe=Math.sin(ue),de=Math.cos(ue);j.x=H*pe,j.y=-R*r+S,j.z=H*de,_.push(j.x,j.y,j.z),C.set(pe,U,de).normalize(),y.push(C.x,C.y,C.z),M.push(ee,1-R),D.push(E++)}A.push(D)}for(let F=0;F<a;F++)for(let D=0;D<l;D++){const R=A[D][F],H=A[D+1][F],oe=A[D+1][F+1],ee=A[D][F+1];(e>0||D!==0)&&(v.push(R,H,ee),B+=3),(n>0||D!==l-1)&&(v.push(H,oe,ee),B+=3)}p.addGroup(x,B,0),x+=B}function L(C){const j=E,B=new rt,U=new q;let F=0;const D=C===!0?e:n,R=C===!0?1:-1;for(let oe=1;oe<=a;oe++)_.push(0,S*R,0),y.push(0,R,0),M.push(.5,.5),E++;const H=E;for(let oe=0;oe<=a;oe++){const ue=oe/a*h+d,pe=Math.cos(ue),de=Math.sin(ue);U.x=D*de,U.y=S*R,U.z=D*pe,_.push(U.x,U.y,U.z),y.push(0,R,0),B.x=pe*.5+.5,B.y=de*.5*R+.5,M.push(B.x,B.y),E++}for(let oe=0;oe<a;oe++){const ee=j+oe,ue=H+oe;C===!0?v.push(ue,ue+1,ee):v.push(ue+1,ue,ee),F+=3}p.addGroup(x,F,C===!0?1:2),x+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $o extends Jn{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const l=e/2,u=n/2,d=Math.floor(r),h=Math.floor(a),p=d+1,v=h+1,_=e/d,y=n/h,M=[],E=[],A=[],S=[];for(let x=0;x<v;x++){const O=x*y-u;for(let L=0;L<p;L++){const C=L*_-l;E.push(C,-O,0),A.push(0,0,1),S.push(L/d),S.push(1-x/h)}}for(let x=0;x<h;x++)for(let O=0;O<d;O++){const L=O+p*x,C=O+p*(x+1),j=O+1+p*(x+1),B=O+1+p*x;M.push(L,C,B),M.push(C,j,B)}this.setIndex(M),this.setAttribute("position",new Sn(E,3)),this.setAttribute("normal",new Sn(A,3)),this.setAttribute("uv",new Sn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $o(e.width,e.height,e.widthSegments,e.heightSegments)}}class kl extends Jn{constructor(e=1,n=.4,r=12,a=48,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:r,tubularSegments:a,arc:l},r=Math.floor(r),a=Math.floor(a);const u=[],d=[],h=[],p=[],v=new q,_=new q,y=new q;for(let M=0;M<=r;M++)for(let E=0;E<=a;E++){const A=E/a*l,S=M/r*Math.PI*2;_.x=(e+n*Math.cos(S))*Math.cos(A),_.y=(e+n*Math.cos(S))*Math.sin(A),_.z=n*Math.sin(S),d.push(_.x,_.y,_.z),v.x=e*Math.cos(A),v.y=e*Math.sin(A),y.subVectors(_,v).normalize(),h.push(y.x,y.y,y.z),p.push(E/a),p.push(M/r)}for(let M=1;M<=r;M++)for(let E=1;E<=a;E++){const A=(a+1)*M+E-1,S=(a+1)*(M-1)+E-1,x=(a+1)*(M-1)+E,O=(a+1)*M+E;u.push(A,S,O),u.push(S,x,O)}this.setIndex(u),this.setAttribute("position",new Sn(d,3)),this.setAttribute("normal",new Sn(h,3)),this.setAttribute("uv",new Sn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class hf extends Jn{constructor(e=new ff(new q(-1,-1,0),new q(-1,1,0),new q(1,1,0)),n=64,r=1,a=8,l=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:r,radialSegments:a,closed:l};const u=e.computeFrenetFrames(n,l);this.tangents=u.tangents,this.normals=u.normals,this.binormals=u.binormals;const d=new q,h=new q,p=new rt;let v=new q;const _=[],y=[],M=[],E=[];A(),this.setIndex(E),this.setAttribute("position",new Sn(_,3)),this.setAttribute("normal",new Sn(y,3)),this.setAttribute("uv",new Sn(M,2));function A(){for(let L=0;L<n;L++)S(L);S(l===!1?n:0),O(),x()}function S(L){v=e.getPointAt(L/n,v);const C=u.normals[L],j=u.binormals[L];for(let B=0;B<=a;B++){const U=B/a*Math.PI*2,F=Math.sin(U),D=-Math.cos(U);h.x=D*C.x+F*j.x,h.y=D*C.y+F*j.y,h.z=D*C.z+F*j.z,h.normalize(),y.push(h.x,h.y,h.z),d.x=v.x+r*h.x,d.y=v.y+r*h.y,d.z=v.z+r*h.z,_.push(d.x,d.y,d.z)}}function x(){for(let L=1;L<=n;L++)for(let C=1;C<=a;C++){const j=(a+1)*(L-1)+(C-1),B=(a+1)*L+(C-1),U=(a+1)*L+C,F=(a+1)*(L-1)+C;E.push(j,B,F),E.push(B,U,F)}}function O(){for(let L=0;L<=n;L++)for(let C=0;C<=a;C++)p.x=L/n,p.y=C/a,M.push(p.x,p.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new hf(new Sy[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Bo extends Js{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xg,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class My extends Bo{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new rt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return _t(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new xt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new xt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new xt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Ey extends Js{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class wy extends Js{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class pf extends fn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new xt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Qu=new Bt,ym=new q,Sm=new q;class Ug{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.map=null,this.mapPass=null,this.matrix=new Bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new uf,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;ym.setFromMatrixPosition(e.matrixWorld),n.position.copy(ym),Sm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Sm),n.updateMatrixWorld(),Qu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qu),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Qu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Mm=new Bt,ko=new q,ed=new q;class Ty extends Ug{constructor(){super(new jn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new rt(4,2),this._viewportCount=6,this._viewports=[new Nt(2,1,1,1),new Nt(0,1,1,1),new Nt(3,1,1,1),new Nt(1,1,1,1),new Nt(3,0,1,1),new Nt(1,0,1,1)],this._cubeDirections=[new q(1,0,0),new q(-1,0,0),new q(0,0,1),new q(0,0,-1),new q(0,1,0),new q(0,-1,0)],this._cubeUps=[new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,0,1),new q(0,0,-1)]}updateMatrices(e,n=0){const r=this.camera,a=this.matrix,l=e.distance||r.far;l!==r.far&&(r.far=l,r.updateProjectionMatrix()),ko.setFromMatrixPosition(e.matrixWorld),r.position.copy(ko),ed.copy(r.position),ed.add(this._cubeDirections[n]),r.up.copy(this._cubeUps[n]),r.lookAt(ed),r.updateMatrixWorld(),a.makeTranslation(-ko.x,-ko.y,-ko.z),Mm.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mm)}}class Em extends pf{constructor(e,n,r=0,a=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=a,this.shadow=new Ty}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Fg extends Pg{constructor(e=-1,n=1,r=1,a=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,u=r+e,d=a+n,h=a-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,d-=v*this.view.offsetY,h=d-v*this.view.height}this.projectionMatrix.makeOrthographic(l,u,d,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Ay extends Ug{constructor(){super(new Fg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Cy extends pf{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.target=new fn,this.shadow=new Ay}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ry extends pf{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class by extends jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class Py{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=wm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=wm();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function wm(){return performance.now()}function Tm(s,e,n,r){const a=Dy(r);switch(n){case fg:return s*e;case pg:return s*e;case mg:return s*e*2;case gg:return s*e/a.components*a.byteLength;case of:return s*e/a.components*a.byteLength;case vg:return s*e*2/a.components*a.byteLength;case af:return s*e*2/a.components*a.byteLength;case hg:return s*e*3/a.components*a.byteLength;case ci:return s*e*4/a.components*a.byteLength;case lf:return s*e*4/a.components*a.byteLength;case Rl:case bl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Pl:case Dl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Sd:case Ed:return Math.max(s,16)*Math.max(e,8)/4;case yd:case Md:return Math.max(s,8)*Math.max(e,8)/2;case wd:case Td:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ad:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Cd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Rd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case bd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Pd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Dd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ld:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Nd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Id:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Ud:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Fd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Od:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case kd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case zd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Bd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ll:case Hd:case Vd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case _g:case Gd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case jd:case Wd:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Dy(s){switch(s){case ji:case cg:return{byteLength:1,components:1};case jo:case ug:case Wo:return{byteLength:2,components:1};case rf:case sf:return{byteLength:2,components:4};case Jr:case nf:case Bi:return{byteLength:4,components:1};case dg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tf);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Og(){let s=null,e=!1,n=null,r=null;function a(l,u){n(l,u),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){s=l}}}function Ly(s){const e=new WeakMap;function n(d,h){const p=d.array,v=d.usage,_=p.byteLength,y=s.createBuffer();s.bindBuffer(h,y),s.bufferData(h,p,v),d.onUploadCallback();let M;if(p instanceof Float32Array)M=s.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=s.SHORT;else if(p instanceof Uint32Array)M=s.UNSIGNED_INT;else if(p instanceof Int32Array)M=s.INT;else if(p instanceof Int8Array)M=s.BYTE;else if(p instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function r(d,h,p){const v=h.array,_=h.updateRanges;if(s.bindBuffer(p,d),_.length===0)s.bufferSubData(p,0,v);else{_.sort((M,E)=>M.start-E.start);let y=0;for(let M=1;M<_.length;M++){const E=_[y],A=_[M];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++y,_[y]=A)}_.length=y+1;for(let M=0,E=_.length;M<E;M++){const A=_[M];s.bufferSubData(p,A.start*v.BYTES_PER_ELEMENT,v,A.start,A.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const h=e.get(d);h&&(s.deleteBuffer(h.buffer),e.delete(d))}function u(d,h){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,n(d,h));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,h),p.version=d.version}}return{get:a,remove:l,update:u}}var Ny=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Iy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Uy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Oy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ky=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,By=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Vy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Xy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,qy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Yy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,$y=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ky=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,eS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,tS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,nS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,iS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,rS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,sS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,oS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,aS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cS="gl_FragColor = linearToOutputTexel( gl_FragColor );",uS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,fS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,pS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,gS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_S=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,SS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,MS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ES=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,TS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,AS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,CS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,RS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,PS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,DS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,LS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,NS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,IS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,US=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,FS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,OS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,BS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,HS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,VS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,GS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,WS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,XS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,YS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,$S=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,KS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ZS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,JS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,nM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,iM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,oM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,aM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,lM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,mM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,vM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_M=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,yM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,SM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,MM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,EM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,TM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,AM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,CM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,RM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,PM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,DM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const LM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,NM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,zM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,BM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,HM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,VM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,GM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,WM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,XM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,qM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$M=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ZM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,QM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,e1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,t1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,i1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,a1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,l1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,c1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,u1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,d1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mt={alphahash_fragment:Ny,alphahash_pars_fragment:Iy,alphamap_fragment:Uy,alphamap_pars_fragment:Fy,alphatest_fragment:Oy,alphatest_pars_fragment:ky,aomap_fragment:zy,aomap_pars_fragment:By,batching_pars_vertex:Hy,batching_vertex:Vy,begin_vertex:Gy,beginnormal_vertex:jy,bsdfs:Wy,iridescence_fragment:Xy,bumpmap_pars_fragment:qy,clipping_planes_fragment:Yy,clipping_planes_pars_fragment:$y,clipping_planes_pars_vertex:Ky,clipping_planes_vertex:Zy,color_fragment:Jy,color_pars_fragment:Qy,color_pars_vertex:eS,color_vertex:tS,common:nS,cube_uv_reflection_fragment:iS,defaultnormal_vertex:rS,displacementmap_pars_vertex:sS,displacementmap_vertex:oS,emissivemap_fragment:aS,emissivemap_pars_fragment:lS,colorspace_fragment:cS,colorspace_pars_fragment:uS,envmap_fragment:dS,envmap_common_pars_fragment:fS,envmap_pars_fragment:hS,envmap_pars_vertex:pS,envmap_physical_pars_fragment:TS,envmap_vertex:mS,fog_vertex:gS,fog_pars_vertex:vS,fog_fragment:_S,fog_pars_fragment:xS,gradientmap_pars_fragment:yS,lightmap_pars_fragment:SS,lights_lambert_fragment:MS,lights_lambert_pars_fragment:ES,lights_pars_begin:wS,lights_toon_fragment:AS,lights_toon_pars_fragment:CS,lights_phong_fragment:RS,lights_phong_pars_fragment:bS,lights_physical_fragment:PS,lights_physical_pars_fragment:DS,lights_fragment_begin:LS,lights_fragment_maps:NS,lights_fragment_end:IS,logdepthbuf_fragment:US,logdepthbuf_pars_fragment:FS,logdepthbuf_pars_vertex:OS,logdepthbuf_vertex:kS,map_fragment:zS,map_pars_fragment:BS,map_particle_fragment:HS,map_particle_pars_fragment:VS,metalnessmap_fragment:GS,metalnessmap_pars_fragment:jS,morphinstance_vertex:WS,morphcolor_vertex:XS,morphnormal_vertex:qS,morphtarget_pars_vertex:YS,morphtarget_vertex:$S,normal_fragment_begin:KS,normal_fragment_maps:ZS,normal_pars_fragment:JS,normal_pars_vertex:QS,normal_vertex:eM,normalmap_pars_fragment:tM,clearcoat_normal_fragment_begin:nM,clearcoat_normal_fragment_maps:iM,clearcoat_pars_fragment:rM,iridescence_pars_fragment:sM,opaque_fragment:oM,packing:aM,premultiplied_alpha_fragment:lM,project_vertex:cM,dithering_fragment:uM,dithering_pars_fragment:dM,roughnessmap_fragment:fM,roughnessmap_pars_fragment:hM,shadowmap_pars_fragment:pM,shadowmap_pars_vertex:mM,shadowmap_vertex:gM,shadowmask_pars_fragment:vM,skinbase_vertex:_M,skinning_pars_vertex:xM,skinning_vertex:yM,skinnormal_vertex:SM,specularmap_fragment:MM,specularmap_pars_fragment:EM,tonemapping_fragment:wM,tonemapping_pars_fragment:TM,transmission_fragment:AM,transmission_pars_fragment:CM,uv_pars_fragment:RM,uv_pars_vertex:bM,uv_vertex:PM,worldpos_vertex:DM,background_vert:LM,background_frag:NM,backgroundCube_vert:IM,backgroundCube_frag:UM,cube_vert:FM,cube_frag:OM,depth_vert:kM,depth_frag:zM,distanceRGBA_vert:BM,distanceRGBA_frag:HM,equirect_vert:VM,equirect_frag:GM,linedashed_vert:jM,linedashed_frag:WM,meshbasic_vert:XM,meshbasic_frag:qM,meshlambert_vert:YM,meshlambert_frag:$M,meshmatcap_vert:KM,meshmatcap_frag:ZM,meshnormal_vert:JM,meshnormal_frag:QM,meshphong_vert:e1,meshphong_frag:t1,meshphysical_vert:n1,meshphysical_frag:i1,meshtoon_vert:r1,meshtoon_frag:s1,points_vert:o1,points_frag:a1,shadow_vert:l1,shadow_frag:c1,sprite_vert:u1,sprite_frag:d1},Le={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},xi={basic:{uniforms:An([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:An([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new xt(0)}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:An([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:An([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:An([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new xt(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:An([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:An([Le.points,Le.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:An([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:An([Le.common,Le.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:An([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:An([Le.sprite,Le.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distanceRGBA:{uniforms:An([Le.common,Le.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distanceRGBA_vert,fragmentShader:mt.distanceRGBA_frag},shadow:{uniforms:An([Le.lights,Le.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};xi.physical={uniforms:An([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const Tl={r:0,b:0,g:0},Gr=new Si,f1=new Bt;function h1(s,e,n,r,a,l,u){const d=new xt(0);let h=l===!0?0:1,p,v,_=null,y=0,M=null;function E(L){let C=L.isScene===!0?L.background:null;return C&&C.isTexture&&(C=(L.backgroundBlurriness>0?n:e).get(C)),C}function A(L){let C=!1;const j=E(L);j===null?x(d,h):j&&j.isColor&&(x(j,1),C=!0);const B=s.xr.getEnvironmentBlendMode();B==="additive"?r.buffers.color.setClear(0,0,0,1,u):B==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(s.autoClear||C)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(L,C){const j=E(C);j&&(j.isCubeTexture||j.mapping===Bl)?(v===void 0&&(v=new zt(new Vi(1,1,1),new wr({name:"BackgroundCubeMaterial",uniforms:$s(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(B,U,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(v)),Gr.copy(C.backgroundRotation),Gr.x*=-1,Gr.y*=-1,Gr.z*=-1,j.isCubeTexture&&j.isRenderTargetTexture===!1&&(Gr.y*=-1,Gr.z*=-1),v.material.uniforms.envMap.value=j,v.material.uniforms.flipEnvMap.value=j.isCubeTexture&&j.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(f1.makeRotationFromEuler(Gr)),v.material.toneMapped=Pt.getTransfer(j.colorSpace)!==Lt,(_!==j||y!==j.version||M!==s.toneMapping)&&(v.material.needsUpdate=!0,_=j,y=j.version,M=s.toneMapping),v.layers.enableAll(),L.unshift(v,v.geometry,v.material,0,0,null)):j&&j.isTexture&&(p===void 0&&(p=new zt(new $o(2,2),new wr({name:"BackgroundMaterial",uniforms:$s(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:Er,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=j,p.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,p.material.toneMapped=Pt.getTransfer(j.colorSpace)!==Lt,j.matrixAutoUpdate===!0&&j.updateMatrix(),p.material.uniforms.uvTransform.value.copy(j.matrix),(_!==j||y!==j.version||M!==s.toneMapping)&&(p.material.needsUpdate=!0,_=j,y=j.version,M=s.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function x(L,C){L.getRGB(Tl,bg(s)),r.buffers.color.setClear(Tl.r,Tl.g,Tl.b,C,u)}function O(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(L,C=1){d.set(L),h=C,x(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(L){h=L,x(d,h)},render:A,addToRenderList:S,dispose:O}}function p1(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=y(null);let l=a,u=!1;function d(R,H,oe,ee,ue){let pe=!1;const de=_(ee,oe,H);l!==de&&(l=de,p(l.object)),pe=M(R,ee,oe,ue),pe&&E(R,ee,oe,ue),ue!==null&&e.update(ue,s.ELEMENT_ARRAY_BUFFER),(pe||u)&&(u=!1,C(R,H,oe,ee),ue!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ue).buffer))}function h(){return s.createVertexArray()}function p(R){return s.bindVertexArray(R)}function v(R){return s.deleteVertexArray(R)}function _(R,H,oe){const ee=oe.wireframe===!0;let ue=r[R.id];ue===void 0&&(ue={},r[R.id]=ue);let pe=ue[H.id];pe===void 0&&(pe={},ue[H.id]=pe);let de=pe[ee];return de===void 0&&(de=y(h()),pe[ee]=de),de}function y(R){const H=[],oe=[],ee=[];for(let ue=0;ue<n;ue++)H[ue]=0,oe[ue]=0,ee[ue]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:oe,attributeDivisors:ee,object:R,attributes:{},index:null}}function M(R,H,oe,ee){const ue=l.attributes,pe=H.attributes;let de=0;const me=oe.getAttributes();for(const G in me)if(me[G].location>=0){const N=ue[G];let w=pe[G];if(w===void 0&&(G==="instanceMatrix"&&R.instanceMatrix&&(w=R.instanceMatrix),G==="instanceColor"&&R.instanceColor&&(w=R.instanceColor)),N===void 0||N.attribute!==w||w&&N.data!==w.data)return!0;de++}return l.attributesNum!==de||l.index!==ee}function E(R,H,oe,ee){const ue={},pe=H.attributes;let de=0;const me=oe.getAttributes();for(const G in me)if(me[G].location>=0){let N=pe[G];N===void 0&&(G==="instanceMatrix"&&R.instanceMatrix&&(N=R.instanceMatrix),G==="instanceColor"&&R.instanceColor&&(N=R.instanceColor));const w={};w.attribute=N,N&&N.data&&(w.data=N.data),ue[G]=w,de++}l.attributes=ue,l.attributesNum=de,l.index=ee}function A(){const R=l.newAttributes;for(let H=0,oe=R.length;H<oe;H++)R[H]=0}function S(R){x(R,0)}function x(R,H){const oe=l.newAttributes,ee=l.enabledAttributes,ue=l.attributeDivisors;oe[R]=1,ee[R]===0&&(s.enableVertexAttribArray(R),ee[R]=1),ue[R]!==H&&(s.vertexAttribDivisor(R,H),ue[R]=H)}function O(){const R=l.newAttributes,H=l.enabledAttributes;for(let oe=0,ee=H.length;oe<ee;oe++)H[oe]!==R[oe]&&(s.disableVertexAttribArray(oe),H[oe]=0)}function L(R,H,oe,ee,ue,pe,de){de===!0?s.vertexAttribIPointer(R,H,oe,ue,pe):s.vertexAttribPointer(R,H,oe,ee,ue,pe)}function C(R,H,oe,ee){A();const ue=ee.attributes,pe=oe.getAttributes(),de=H.defaultAttributeValues;for(const me in pe){const G=pe[me];if(G.location>=0){let le=ue[me];if(le===void 0&&(me==="instanceMatrix"&&R.instanceMatrix&&(le=R.instanceMatrix),me==="instanceColor"&&R.instanceColor&&(le=R.instanceColor)),le!==void 0){const N=le.normalized,w=le.itemSize,W=e.get(le);if(W===void 0)continue;const ge=W.buffer,Y=W.type,re=W.bytesPerElement,J=Y===s.INT||Y===s.UNSIGNED_INT||le.gpuType===nf;if(le.isInterleavedBufferAttribute){const Q=le.data,he=Q.stride,Me=le.offset;if(Q.isInstancedInterleavedBuffer){for(let Ce=0;Ce<G.locationSize;Ce++)x(G.location+Ce,Q.meshPerAttribute);R.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Ce=0;Ce<G.locationSize;Ce++)S(G.location+Ce);s.bindBuffer(s.ARRAY_BUFFER,ge);for(let Ce=0;Ce<G.locationSize;Ce++)L(G.location+Ce,w/G.locationSize,Y,N,he*re,(Me+w/G.locationSize*Ce)*re,J)}else{if(le.isInstancedBufferAttribute){for(let Q=0;Q<G.locationSize;Q++)x(G.location+Q,le.meshPerAttribute);R.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Q=0;Q<G.locationSize;Q++)S(G.location+Q);s.bindBuffer(s.ARRAY_BUFFER,ge);for(let Q=0;Q<G.locationSize;Q++)L(G.location+Q,w/G.locationSize,Y,N,w*re,w/G.locationSize*Q*re,J)}}else if(de!==void 0){const N=de[me];if(N!==void 0)switch(N.length){case 2:s.vertexAttrib2fv(G.location,N);break;case 3:s.vertexAttrib3fv(G.location,N);break;case 4:s.vertexAttrib4fv(G.location,N);break;default:s.vertexAttrib1fv(G.location,N)}}}}O()}function j(){F();for(const R in r){const H=r[R];for(const oe in H){const ee=H[oe];for(const ue in ee)v(ee[ue].object),delete ee[ue];delete H[oe]}delete r[R]}}function B(R){if(r[R.id]===void 0)return;const H=r[R.id];for(const oe in H){const ee=H[oe];for(const ue in ee)v(ee[ue].object),delete ee[ue];delete H[oe]}delete r[R.id]}function U(R){for(const H in r){const oe=r[H];if(oe[R.id]===void 0)continue;const ee=oe[R.id];for(const ue in ee)v(ee[ue].object),delete ee[ue];delete oe[R.id]}}function F(){D(),u=!0,l!==a&&(l=a,p(l.object))}function D(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:F,resetDefaultState:D,dispose:j,releaseStatesOfGeometry:B,releaseStatesOfProgram:U,initAttributes:A,enableAttribute:S,disableUnusedAttributes:O}}function m1(s,e,n){let r;function a(p){r=p}function l(p,v){s.drawArrays(r,p,v),n.update(v,r,1)}function u(p,v,_){_!==0&&(s.drawArraysInstanced(r,p,v,_),n.update(v,r,_))}function d(p,v,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,v,0,_);let M=0;for(let E=0;E<_;E++)M+=v[E];n.update(M,r,1)}function h(p,v,_,y){if(_===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<p.length;E++)u(p[E],v[E],y[E]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,v,0,y,0,_);let E=0;for(let A=0;A<_;A++)E+=v[A]*y[A];n.update(E,r,1)}}this.setMode=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function g1(s,e,n,r){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(U){return!(U!==ci&&r.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(U){const F=U===Wo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==ji&&r.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Bi&&!F)}function h(U){if(U==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const v=h(p);v!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const _=n.logarithmicDepthBuffer===!0,y=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),O=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),j=E>0,B=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reverseDepthBuffer:y,maxTextures:M,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:O,maxVaryings:L,maxFragmentUniforms:C,vertexTextures:j,maxSamples:B}}function v1(s){const e=this;let n=null,r=0,a=!1,l=!1;const u=new Xr,d=new pt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(_,y){const M=_.length!==0||y||r!==0||a;return a=y,r=_.length,M},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,y){n=v(_,y,0)},this.setState=function(_,y,M){const E=_.clippingPlanes,A=_.clipIntersection,S=_.clipShadows,x=s.get(_);if(!a||E===null||E.length===0||l&&!S)l?v(null):p();else{const O=l?0:r,L=O*4;let C=x.clippingState||null;h.value=C,C=v(E,y,L,M);for(let j=0;j!==L;++j)C[j]=n[j];x.clippingState=C,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=O}};function p(){h.value!==n&&(h.value=n,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(_,y,M,E){const A=_!==null?_.length:0;let S=null;if(A!==0){if(S=h.value,E!==!0||S===null){const x=M+A*4,O=y.matrixWorldInverse;d.getNormalMatrix(O),(S===null||S.length<x)&&(S=new Float32Array(x));for(let L=0,C=M;L!==A;++L,C+=4)u.copy(_[L]).applyMatrix4(O,d),u.normal.toArray(S,C),S[C+3]=u.constant}h.value=S,h.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,S}}function _1(s){let e=new WeakMap;function n(u,d){return d===gd?u.mapping=js:d===vd&&(u.mapping=Ws),u}function r(u){if(u&&u.isTexture){const d=u.mapping;if(d===gd||d===vd)if(e.has(u)){const h=e.get(u).texture;return n(h,u.mapping)}else{const h=u.image;if(h&&h.height>0){const p=new ey(h.height);return p.fromEquirectangularTexture(s,u),e.set(u,p),u.addEventListener("dispose",a),n(p.texture,u.mapping)}else return null}}return u}function a(u){const d=u.target;d.removeEventListener("dispose",a);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const zs=4,Am=[.125,.215,.35,.446,.526,.582],$r=20,td=new Fg,Cm=new xt;let nd=null,id=0,rd=0,sd=!1;const qr=(1+Math.sqrt(5))/2,ks=1/qr,Rm=[new q(-qr,ks,0),new q(qr,ks,0),new q(-ks,0,qr),new q(ks,0,qr),new q(0,qr,-ks),new q(0,qr,ks),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)],x1=new q;class bm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100,l={}){const{size:u=256,position:d=x1}=l;nd=this._renderer.getRenderTarget(),id=this._renderer.getActiveCubeFace(),rd=this._renderer.getActiveMipmapLevel(),sd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,r,a,h,d),n>0&&this._blur(h,0,0,n),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(nd,id,rd),this._renderer.xr.enabled=sd,e.scissorTest=!1,Al(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===js||e.mapping===Ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nd=this._renderer.getRenderTarget(),id=this._renderer.getActiveCubeFace(),rd=this._renderer.getActiveMipmapLevel(),sd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:yi,minFilter:yi,generateMipmaps:!1,type:Wo,format:ci,colorSpace:Ys,depthBuffer:!1},a=Pm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pm(e,n,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=y1(l)),this._blurMaterial=S1(l,e,n)}return a}_compileMaterial(e){const n=new zt(this._lodPlanes[0],e);this._renderer.compile(n,td)}_sceneToCubeUV(e,n,r,a,l){const h=new jn(90,1,n,r),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,y=_.autoClear,M=_.toneMapping;_.getClearColor(Cm),_.toneMapping=Mr,_.autoClear=!1;const E=new Ag({name:"PMREM.Background",side:Un,depthWrite:!1,depthTest:!1}),A=new zt(new Vi,E);let S=!1;const x=e.background;x?x.isColor&&(E.color.copy(x),e.background=null,S=!0):(E.color.copy(Cm),S=!0);for(let O=0;O<6;O++){const L=O%3;L===0?(h.up.set(0,p[O],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+v[O],l.y,l.z)):L===1?(h.up.set(0,0,p[O]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+v[O],l.z)):(h.up.set(0,p[O],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+v[O]));const C=this._cubeSize;Al(a,L*C,O>2?C:0,C,C),_.setRenderTarget(a),S&&_.render(A,h),_.render(e,h)}A.geometry.dispose(),A.material.dispose(),_.toneMapping=M,_.autoClear=y,e.background=x}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===js||e.mapping===Ws;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dm());const l=a?this._cubemapMaterial:this._equirectMaterial,u=new zt(this._lodPlanes[0],l),d=l.uniforms;d.envMap.value=e;const h=this._cubeSize;Al(n,0,0,3*h,2*h),r.setRenderTarget(n),r.render(u,td)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),d=Rm[(a-l-1)%Rm.length];this._blur(e,l-1,l,u,d)}n.autoClear=r}_blur(e,n,r,a,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,r,a,"latitudinal",l),this._halfBlur(u,e,r,r,a,"longitudinal",l)}_halfBlur(e,n,r,a,l,u,d){const h=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,_=new zt(this._lodPlanes[a],p),y=p.uniforms,M=this._sizeLods[r]-1,E=isFinite(l)?Math.PI/(2*M):2*Math.PI/(2*$r-1),A=l/E,S=isFinite(l)?1+Math.floor(v*A):$r;S>$r&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${$r}`);const x=[];let O=0;for(let U=0;U<$r;++U){const F=U/A,D=Math.exp(-F*F/2);x.push(D),U===0?O+=D:U<S&&(O+=2*D)}for(let U=0;U<x.length;U++)x[U]=x[U]/O;y.envMap.value=e.texture,y.samples.value=S,y.weights.value=x,y.latitudinal.value=u==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:L}=this;y.dTheta.value=E,y.mipInt.value=L-r;const C=this._sizeLods[a],j=3*C*(a>L-zs?a-L+zs:0),B=4*(this._cubeSize-C);Al(n,j,B,3*C,2*C),h.setRenderTarget(n),h.render(_,td)}}function y1(s){const e=[],n=[],r=[];let a=s;const l=s-zs+1+Am.length;for(let u=0;u<l;u++){const d=Math.pow(2,a);n.push(d);let h=1/d;u>s-zs?h=Am[u-s+zs-1]:u===0&&(h=0),r.push(h);const p=1/(d-2),v=-p,_=1+p,y=[v,v,_,v,_,_,v,v,_,_,v,_],M=6,E=6,A=3,S=2,x=1,O=new Float32Array(A*E*M),L=new Float32Array(S*E*M),C=new Float32Array(x*E*M);for(let B=0;B<M;B++){const U=B%3*2/3-1,F=B>2?0:-1,D=[U,F,0,U+2/3,F,0,U+2/3,F+1,0,U,F,0,U+2/3,F+1,0,U,F+1,0];O.set(D,A*E*B),L.set(y,S*E*B);const R=[B,B,B,B,B,B];C.set(R,x*E*B)}const j=new Jn;j.setAttribute("position",new di(O,A)),j.setAttribute("uv",new di(L,S)),j.setAttribute("faceIndex",new di(C,x)),e.push(j),a>zs&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function Pm(s,e,n){const r=new Qr(s,e,n);return r.texture.mapping=Bl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Al(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function S1(s,e,n){const r=new Float32Array($r),a=new q(0,1,0);return new wr({name:"SphericalGaussianBlur",defines:{n:$r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:mf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function Dm(){return new wr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function Lm(){return new wr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function mf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function M1(s){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const h=d.mapping,p=h===gd||h===vd,v=h===js||h===Ws;if(p||v){let _=e.get(d);const y=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return n===null&&(n=new bm(s)),_=p?n.fromEquirectangular(d,_):n.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),_.texture;if(_!==void 0)return _.texture;{const M=d.image;return p&&M&&M.height>0||v&&M&&a(M)?(n===null&&(n=new bm(s)),_=p?n.fromEquirectangular(d):n.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),d.addEventListener("dispose",l),_.texture):null}}}return d}function a(d){let h=0;const p=6;for(let v=0;v<p;v++)d[v]!==void 0&&h++;return h===p}function l(d){const h=d.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function u(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function E1(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&Wr("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function w1(s,e,n,r){const a={},l=new WeakMap;function u(_){const y=_.target;y.index!==null&&e.remove(y.index);for(const E in y.attributes)e.remove(y.attributes[E]);y.removeEventListener("dispose",u),delete a[y.id];const M=l.get(y);M&&(e.remove(M),l.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,n.memory.geometries--}function d(_,y){return a[y.id]===!0||(y.addEventListener("dispose",u),a[y.id]=!0,n.memory.geometries++),y}function h(_){const y=_.attributes;for(const M in y)e.update(y[M],s.ARRAY_BUFFER)}function p(_){const y=[],M=_.index,E=_.attributes.position;let A=0;if(M!==null){const O=M.array;A=M.version;for(let L=0,C=O.length;L<C;L+=3){const j=O[L+0],B=O[L+1],U=O[L+2];y.push(j,B,B,U,U,j)}}else if(E!==void 0){const O=E.array;A=E.version;for(let L=0,C=O.length/3-1;L<C;L+=3){const j=L+0,B=L+1,U=L+2;y.push(j,B,B,U,U,j)}}else return;const S=new(Sg(y)?Rg:Cg)(y,1);S.version=A;const x=l.get(_);x&&e.remove(x),l.set(_,S)}function v(_){const y=l.get(_);if(y){const M=_.index;M!==null&&y.version<M.version&&p(_)}else p(_);return l.get(_)}return{get:d,update:h,getWireframeAttribute:v}}function T1(s,e,n){let r;function a(y){r=y}let l,u;function d(y){l=y.type,u=y.bytesPerElement}function h(y,M){s.drawElements(r,M,l,y*u),n.update(M,r,1)}function p(y,M,E){E!==0&&(s.drawElementsInstanced(r,M,l,y*u,E),n.update(M,r,E))}function v(y,M,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,l,y,0,E);let S=0;for(let x=0;x<E;x++)S+=M[x];n.update(S,r,1)}function _(y,M,E,A){if(E===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<y.length;x++)p(y[x]/u,M[x],A[x]);else{S.multiDrawElementsInstancedWEBGL(r,M,0,l,y,0,A,0,E);let x=0;for(let O=0;O<E;O++)x+=M[O]*A[O];n.update(x,r,1)}}this.setMode=a,this.setIndex=d,this.render=h,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=_}function A1(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,d){switch(n.calls++,u){case s.TRIANGLES:n.triangles+=d*(l/3);break;case s.LINES:n.lines+=d*(l/2);break;case s.LINE_STRIP:n.lines+=d*(l-1);break;case s.LINE_LOOP:n.lines+=d*l;break;case s.POINTS:n.points+=d*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function C1(s,e,n){const r=new WeakMap,a=new Nt;function l(u,d,h){const p=u.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=v!==void 0?v.length:0;let y=r.get(d);if(y===void 0||y.count!==_){let R=function(){F.dispose(),r.delete(d),d.removeEventListener("dispose",R)};var M=R;y!==void 0&&y.texture.dispose();const E=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],O=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let C=0;E===!0&&(C=1),A===!0&&(C=2),S===!0&&(C=3);let j=d.attributes.position.count*C,B=1;j>e.maxTextureSize&&(B=Math.ceil(j/e.maxTextureSize),j=e.maxTextureSize);const U=new Float32Array(j*B*4*_),F=new Mg(U,j,B,_);F.type=Bi,F.needsUpdate=!0;const D=C*4;for(let H=0;H<_;H++){const oe=x[H],ee=O[H],ue=L[H],pe=j*B*4*H;for(let de=0;de<oe.count;de++){const me=de*D;E===!0&&(a.fromBufferAttribute(oe,de),U[pe+me+0]=a.x,U[pe+me+1]=a.y,U[pe+me+2]=a.z,U[pe+me+3]=0),A===!0&&(a.fromBufferAttribute(ee,de),U[pe+me+4]=a.x,U[pe+me+5]=a.y,U[pe+me+6]=a.z,U[pe+me+7]=0),S===!0&&(a.fromBufferAttribute(ue,de),U[pe+me+8]=a.x,U[pe+me+9]=a.y,U[pe+me+10]=a.z,U[pe+me+11]=ue.itemSize===4?a.w:1)}}y={count:_,texture:F,size:new rt(j,B)},r.set(d,y),d.addEventListener("dispose",R)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",u.morphTexture,n);else{let E=0;for(let S=0;S<p.length;S++)E+=p[S];const A=d.morphTargetsRelative?1:1-E;h.getUniforms().setValue(s,"morphTargetBaseInfluence",A),h.getUniforms().setValue(s,"morphTargetInfluences",p)}h.getUniforms().setValue(s,"morphTargetsTexture",y.texture,n),h.getUniforms().setValue(s,"morphTargetsTextureSize",y.size)}return{update:l}}function R1(s,e,n,r){let a=new WeakMap;function l(h){const p=r.render.frame,v=h.geometry,_=e.get(h,v);if(a.get(_)!==p&&(e.update(_),a.set(_,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),a.get(h)!==p&&(n.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,s.ARRAY_BUFFER),a.set(h,p))),h.isSkinnedMesh){const y=h.skeleton;a.get(y)!==p&&(y.update(),a.set(y,p))}return _}function u(){a=new WeakMap}function d(h){const p=h.target;p.removeEventListener("dispose",d),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:l,dispose:u}}const kg=new Fn,Nm=new Ng(1,1),zg=new Mg,Bg=new Ox,Hg=new Dg,Im=[],Um=[],Fm=new Float32Array(16),Om=new Float32Array(9),km=new Float32Array(4);function Qs(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let l=Im[a];if(l===void 0&&(l=new Float32Array(a),Im[a]=l),e!==0){r.toArray(l,0);for(let u=1,d=0;u!==e;++u)d+=n,s[u].toArray(l,d)}return l}function en(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function tn(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Vl(s,e){let n=Um[e];n===void 0&&(n=new Int32Array(e),Um[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function b1(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function P1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(en(n,e))return;s.uniform2fv(this.addr,e),tn(n,e)}}function D1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(en(n,e))return;s.uniform3fv(this.addr,e),tn(n,e)}}function L1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(en(n,e))return;s.uniform4fv(this.addr,e),tn(n,e)}}function N1(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(en(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),tn(n,e)}else{if(en(n,r))return;km.set(r),s.uniformMatrix2fv(this.addr,!1,km),tn(n,r)}}function I1(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(en(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),tn(n,e)}else{if(en(n,r))return;Om.set(r),s.uniformMatrix3fv(this.addr,!1,Om),tn(n,r)}}function U1(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(en(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),tn(n,e)}else{if(en(n,r))return;Fm.set(r),s.uniformMatrix4fv(this.addr,!1,Fm),tn(n,r)}}function F1(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function O1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(en(n,e))return;s.uniform2iv(this.addr,e),tn(n,e)}}function k1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(en(n,e))return;s.uniform3iv(this.addr,e),tn(n,e)}}function z1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(en(n,e))return;s.uniform4iv(this.addr,e),tn(n,e)}}function B1(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function H1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(en(n,e))return;s.uniform2uiv(this.addr,e),tn(n,e)}}function V1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(en(n,e))return;s.uniform3uiv(this.addr,e),tn(n,e)}}function G1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(en(n,e))return;s.uniform4uiv(this.addr,e),tn(n,e)}}function j1(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let l;this.type===s.SAMPLER_2D_SHADOW?(Nm.compareFunction=yg,l=Nm):l=kg,n.setTexture2D(e||l,a)}function W1(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||Bg,a)}function X1(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||Hg,a)}function q1(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||zg,a)}function Y1(s){switch(s){case 5126:return b1;case 35664:return P1;case 35665:return D1;case 35666:return L1;case 35674:return N1;case 35675:return I1;case 35676:return U1;case 5124:case 35670:return F1;case 35667:case 35671:return O1;case 35668:case 35672:return k1;case 35669:case 35673:return z1;case 5125:return B1;case 36294:return H1;case 36295:return V1;case 36296:return G1;case 35678:case 36198:case 36298:case 36306:case 35682:return j1;case 35679:case 36299:case 36307:return W1;case 35680:case 36300:case 36308:case 36293:return X1;case 36289:case 36303:case 36311:case 36292:return q1}}function $1(s,e){s.uniform1fv(this.addr,e)}function K1(s,e){const n=Qs(e,this.size,2);s.uniform2fv(this.addr,n)}function Z1(s,e){const n=Qs(e,this.size,3);s.uniform3fv(this.addr,n)}function J1(s,e){const n=Qs(e,this.size,4);s.uniform4fv(this.addr,n)}function Q1(s,e){const n=Qs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function eE(s,e){const n=Qs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function tE(s,e){const n=Qs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function nE(s,e){s.uniform1iv(this.addr,e)}function iE(s,e){s.uniform2iv(this.addr,e)}function rE(s,e){s.uniform3iv(this.addr,e)}function sE(s,e){s.uniform4iv(this.addr,e)}function oE(s,e){s.uniform1uiv(this.addr,e)}function aE(s,e){s.uniform2uiv(this.addr,e)}function lE(s,e){s.uniform3uiv(this.addr,e)}function cE(s,e){s.uniform4uiv(this.addr,e)}function uE(s,e,n){const r=this.cache,a=e.length,l=Vl(n,a);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let u=0;u!==a;++u)n.setTexture2D(e[u]||kg,l[u])}function dE(s,e,n){const r=this.cache,a=e.length,l=Vl(n,a);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let u=0;u!==a;++u)n.setTexture3D(e[u]||Bg,l[u])}function fE(s,e,n){const r=this.cache,a=e.length,l=Vl(n,a);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let u=0;u!==a;++u)n.setTextureCube(e[u]||Hg,l[u])}function hE(s,e,n){const r=this.cache,a=e.length,l=Vl(n,a);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let u=0;u!==a;++u)n.setTexture2DArray(e[u]||zg,l[u])}function pE(s){switch(s){case 5126:return $1;case 35664:return K1;case 35665:return Z1;case 35666:return J1;case 35674:return Q1;case 35675:return eE;case 35676:return tE;case 5124:case 35670:return nE;case 35667:case 35671:return iE;case 35668:case 35672:return rE;case 35669:case 35673:return sE;case 5125:return oE;case 36294:return aE;case 36295:return lE;case 36296:return cE;case 35678:case 36198:case 36298:case 36306:case 35682:return uE;case 35679:case 36299:case 36307:return dE;case 35680:case 36300:case 36308:case 36293:return fE;case 36289:case 36303:case 36311:case 36292:return hE}}class mE{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=Y1(n.type)}}class gE{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=pE(n.type)}}class vE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let l=0,u=a.length;l!==u;++l){const d=a[l];d.setValue(e,n[d.id],r)}}}const od=/(\w+)(\])?(\[|\.)?/g;function zm(s,e){s.seq.push(e),s.map[e.id]=e}function _E(s,e,n){const r=s.name,a=r.length;for(od.lastIndex=0;;){const l=od.exec(r),u=od.lastIndex;let d=l[1];const h=l[2]==="]",p=l[3];if(h&&(d=d|0),p===void 0||p==="["&&u+2===a){zm(n,p===void 0?new mE(d,s,e):new gE(d,s,e));break}else{let _=n.map[d];_===void 0&&(_=new vE(d),zm(n,_)),n=_}}}class Nl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const l=e.getActiveUniform(n,a),u=e.getUniformLocation(n,l.name);_E(l,u,this)}}setValue(e,n,r,a){const l=this.map[n];l!==void 0&&l.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let l=0,u=n.length;l!==u;++l){const d=n[l],h=r[d.id];h.needsUpdate!==!1&&d.setValue(e,h.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,l=e.length;a!==l;++a){const u=e[a];u.id in n&&r.push(u)}return r}}function Bm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const xE=37297;let yE=0;function SE(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,n.length);for(let u=a;u<l;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${n[u]}`)}return r.join(`
`)}const Hm=new pt;function ME(s){Pt._getMatrix(Hm,Pt.workingColorSpace,s);const e=`mat3( ${Hm.elements.map(n=>n.toFixed(4))} )`;switch(Pt.getTransfer(s)){case Ul:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Vm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const u=parseInt(l[1]);return n.toUpperCase()+`

`+a+`

`+SE(s.getShaderSource(e),u)}else return a}function EE(s,e){const n=ME(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function wE(s,e){let n;switch(e){case cx:n="Linear";break;case ux:n="Reinhard";break;case dx:n="Cineon";break;case fx:n="ACESFilmic";break;case px:n="AgX";break;case mx:n="Neutral";break;case hx:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Cl=new q;function TE(){Pt.getLuminanceCoefficients(Cl);const s=Cl.x.toFixed(4),e=Cl.y.toFixed(4),n=Cl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function AE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ho).join(`
`)}function CE(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function RE(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=s.getActiveAttrib(e,a),u=l.name;let d=1;l.type===s.FLOAT_MAT2&&(d=2),l.type===s.FLOAT_MAT3&&(d=3),l.type===s.FLOAT_MAT4&&(d=4),n[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:d}}return n}function Ho(s){return s!==""}function Gm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yd(s){return s.replace(bE,DE)}const PE=new Map;function DE(s,e){let n=mt[e];if(n===void 0){const r=PE.get(e);if(r!==void 0)n=mt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Yd(n)}const LE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wm(s){return s.replace(LE,NE)}function NE(s,e,n,r){let a="";for(let l=parseInt(e);l<parseInt(n);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function Xm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function IE(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===sg?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===og?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ki&&(e="SHADOWMAP_TYPE_VSM"),e}function UE(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case js:case Ws:e="ENVMAP_TYPE_CUBE";break;case Bl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function FE(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ws:e="ENVMAP_MODE_REFRACTION";break}return e}function OE(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ag:e="ENVMAP_BLENDING_MULTIPLY";break;case ax:e="ENVMAP_BLENDING_MIX";break;case lx:e="ENVMAP_BLENDING_ADD";break}return e}function kE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function zE(s,e,n,r){const a=s.getContext(),l=n.defines;let u=n.vertexShader,d=n.fragmentShader;const h=IE(n),p=UE(n),v=FE(n),_=OE(n),y=kE(n),M=AE(n),E=CE(l),A=a.createProgram();let S,x,O=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Ho).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Ho).join(`
`),x.length>0&&(x+=`
`)):(S=[Xm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ho).join(`
`),x=[Xm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+v:"",n.envMap?"#define "+_:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Mr?"#define TONE_MAPPING":"",n.toneMapping!==Mr?mt.tonemapping_pars_fragment:"",n.toneMapping!==Mr?wE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,EE("linearToOutputTexel",n.outputColorSpace),TE(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ho).join(`
`)),u=Yd(u),u=Gm(u,n),u=jm(u,n),d=Yd(d),d=Gm(d,n),d=jm(d,n),u=Wm(u),d=Wm(d),n.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",n.glslVersion===Qp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Qp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const L=O+S+u,C=O+x+d,j=Bm(a,a.VERTEX_SHADER,L),B=Bm(a,a.FRAGMENT_SHADER,C);a.attachShader(A,j),a.attachShader(A,B),n.index0AttributeName!==void 0?a.bindAttribLocation(A,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(A,0,"position"),a.linkProgram(A);function U(H){if(s.debug.checkShaderErrors){const oe=a.getProgramInfoLog(A).trim(),ee=a.getShaderInfoLog(j).trim(),ue=a.getShaderInfoLog(B).trim();let pe=!0,de=!0;if(a.getProgramParameter(A,a.LINK_STATUS)===!1)if(pe=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,A,j,B);else{const me=Vm(a,j,"vertex"),G=Vm(a,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(A,a.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+oe+`
`+me+`
`+G)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(ee===""||ue==="")&&(de=!1);de&&(H.diagnostics={runnable:pe,programLog:oe,vertexShader:{log:ee,prefix:S},fragmentShader:{log:ue,prefix:x}})}a.deleteShader(j),a.deleteShader(B),F=new Nl(a,A),D=RE(a,A)}let F;this.getUniforms=function(){return F===void 0&&U(this),F};let D;this.getAttributes=function(){return D===void 0&&U(this),D};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=a.getProgramParameter(A,xE)),R},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(A),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=yE++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=j,this.fragmentShader=B,this}let BE=0;class HE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(a)===!1&&(u.add(a),a.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new VE(e),n.set(e,r)),r}}class VE{constructor(e){this.id=BE++,this.code=e,this.usedTimes=0}}function GE(s,e,n,r,a,l,u){const d=new wg,h=new HE,p=new Set,v=[],_=a.logarithmicDepthBuffer,y=a.vertexTextures;let M=a.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(D){return p.add(D),D===0?"uv":`uv${D}`}function S(D,R,H,oe,ee){const ue=oe.fog,pe=ee.geometry,de=D.isMeshStandardMaterial?oe.environment:null,me=(D.isMeshStandardMaterial?n:e).get(D.envMap||de),G=me&&me.mapping===Bl?me.image.height:null,le=E[D.type];D.precision!==null&&(M=a.getMaxPrecision(D.precision),M!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",M,"instead."));const N=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,w=N!==void 0?N.length:0;let W=0;pe.morphAttributes.position!==void 0&&(W=1),pe.morphAttributes.normal!==void 0&&(W=2),pe.morphAttributes.color!==void 0&&(W=3);let ge,Y,re,J;if(le){const Tt=xi[le];ge=Tt.vertexShader,Y=Tt.fragmentShader}else ge=D.vertexShader,Y=D.fragmentShader,h.update(D),re=h.getVertexShaderID(D),J=h.getFragmentShaderID(D);const Q=s.getRenderTarget(),he=s.state.buffers.depth.getReversed(),Me=ee.isInstancedMesh===!0,Ce=ee.isBatchedMesh===!0,Ze=!!D.map,Je=!!D.matcap,Xe=!!me,k=!!D.aoMap,Rt=!!D.lightMap,et=!!D.bumpMap,st=!!D.normalMap,He=!!D.displacementMap,yt=!!D.emissiveMap,Ue=!!D.metalnessMap,I=!!D.roughnessMap,b=D.anisotropy>0,se=D.clearcoat>0,xe=D.dispersion>0,ye=D.iridescence>0,ve=D.sheen>0,Ye=D.transmission>0,be=b&&!!D.anisotropyMap,Fe=se&&!!D.clearcoatMap,ft=se&&!!D.clearcoatNormalMap,we=se&&!!D.clearcoatRoughnessMap,Be=ye&&!!D.iridescenceMap,tt=ye&&!!D.iridescenceThicknessMap,at=ve&&!!D.sheenColorMap,Ge=ve&&!!D.sheenRoughnessMap,gt=!!D.specularMap,ut=!!D.specularColorMap,Dt=!!D.specularIntensityMap,$=Ye&&!!D.transmissionMap,Pe=Ye&&!!D.thicknessMap,fe=!!D.gradientMap,_e=!!D.alphaMap,Ie=D.alphaTest>0,Ne=!!D.alphaHash,dt=!!D.extensions;let Ft=Mr;D.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ft=s.toneMapping);const Zt={shaderID:le,shaderType:D.type,shaderName:D.name,vertexShader:ge,fragmentShader:Y,defines:D.defines,customVertexShaderID:re,customFragmentShaderID:J,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:M,batching:Ce,batchingColor:Ce&&ee._colorsTexture!==null,instancing:Me,instancingColor:Me&&ee.instanceColor!==null,instancingMorph:Me&&ee.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:Q===null?s.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Ys,alphaToCoverage:!!D.alphaToCoverage,map:Ze,matcap:Je,envMap:Xe,envMapMode:Xe&&me.mapping,envMapCubeUVHeight:G,aoMap:k,lightMap:Rt,bumpMap:et,normalMap:st,displacementMap:y&&He,emissiveMap:yt,normalMapObjectSpace:st&&D.normalMapType===xx,normalMapTangentSpace:st&&D.normalMapType===xg,metalnessMap:Ue,roughnessMap:I,anisotropy:b,anisotropyMap:be,clearcoat:se,clearcoatMap:Fe,clearcoatNormalMap:ft,clearcoatRoughnessMap:we,dispersion:xe,iridescence:ye,iridescenceMap:Be,iridescenceThicknessMap:tt,sheen:ve,sheenColorMap:at,sheenRoughnessMap:Ge,specularMap:gt,specularColorMap:ut,specularIntensityMap:Dt,transmission:Ye,transmissionMap:$,thicknessMap:Pe,gradientMap:fe,opaque:D.transparent===!1&&D.blending===Bs&&D.alphaToCoverage===!1,alphaMap:_e,alphaTest:Ie,alphaHash:Ne,combine:D.combine,mapUv:Ze&&A(D.map.channel),aoMapUv:k&&A(D.aoMap.channel),lightMapUv:Rt&&A(D.lightMap.channel),bumpMapUv:et&&A(D.bumpMap.channel),normalMapUv:st&&A(D.normalMap.channel),displacementMapUv:He&&A(D.displacementMap.channel),emissiveMapUv:yt&&A(D.emissiveMap.channel),metalnessMapUv:Ue&&A(D.metalnessMap.channel),roughnessMapUv:I&&A(D.roughnessMap.channel),anisotropyMapUv:be&&A(D.anisotropyMap.channel),clearcoatMapUv:Fe&&A(D.clearcoatMap.channel),clearcoatNormalMapUv:ft&&A(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&A(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Be&&A(D.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&A(D.iridescenceThicknessMap.channel),sheenColorMapUv:at&&A(D.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&A(D.sheenRoughnessMap.channel),specularMapUv:gt&&A(D.specularMap.channel),specularColorMapUv:ut&&A(D.specularColorMap.channel),specularIntensityMapUv:Dt&&A(D.specularIntensityMap.channel),transmissionMapUv:$&&A(D.transmissionMap.channel),thicknessMapUv:Pe&&A(D.thicknessMap.channel),alphaMapUv:_e&&A(D.alphaMap.channel),vertexTangents:!!pe.attributes.tangent&&(st||b),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!pe.attributes.uv&&(Ze||_e),fog:!!ue,useFog:D.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:he,skinning:ee.isSkinnedMesh===!0,morphTargets:pe.morphAttributes.position!==void 0,morphNormals:pe.morphAttributes.normal!==void 0,morphColors:pe.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:W,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:D.dithering,shadowMapEnabled:s.shadowMap.enabled&&H.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ft,decodeVideoTexture:Ze&&D.map.isVideoTexture===!0&&Pt.getTransfer(D.map.colorSpace)===Lt,decodeVideoTextureEmissive:yt&&D.emissiveMap.isVideoTexture===!0&&Pt.getTransfer(D.emissiveMap.colorSpace)===Lt,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===zi,flipSided:D.side===Un,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:dt&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(dt&&D.extensions.multiDraw===!0||Ce)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Zt.vertexUv1s=p.has(1),Zt.vertexUv2s=p.has(2),Zt.vertexUv3s=p.has(3),p.clear(),Zt}function x(D){const R=[];if(D.shaderID?R.push(D.shaderID):(R.push(D.customVertexShaderID),R.push(D.customFragmentShaderID)),D.defines!==void 0)for(const H in D.defines)R.push(H),R.push(D.defines[H]);return D.isRawShaderMaterial===!1&&(O(R,D),L(R,D),R.push(s.outputColorSpace)),R.push(D.customProgramCacheKey),R.join()}function O(D,R){D.push(R.precision),D.push(R.outputColorSpace),D.push(R.envMapMode),D.push(R.envMapCubeUVHeight),D.push(R.mapUv),D.push(R.alphaMapUv),D.push(R.lightMapUv),D.push(R.aoMapUv),D.push(R.bumpMapUv),D.push(R.normalMapUv),D.push(R.displacementMapUv),D.push(R.emissiveMapUv),D.push(R.metalnessMapUv),D.push(R.roughnessMapUv),D.push(R.anisotropyMapUv),D.push(R.clearcoatMapUv),D.push(R.clearcoatNormalMapUv),D.push(R.clearcoatRoughnessMapUv),D.push(R.iridescenceMapUv),D.push(R.iridescenceThicknessMapUv),D.push(R.sheenColorMapUv),D.push(R.sheenRoughnessMapUv),D.push(R.specularMapUv),D.push(R.specularColorMapUv),D.push(R.specularIntensityMapUv),D.push(R.transmissionMapUv),D.push(R.thicknessMapUv),D.push(R.combine),D.push(R.fogExp2),D.push(R.sizeAttenuation),D.push(R.morphTargetsCount),D.push(R.morphAttributeCount),D.push(R.numDirLights),D.push(R.numPointLights),D.push(R.numSpotLights),D.push(R.numSpotLightMaps),D.push(R.numHemiLights),D.push(R.numRectAreaLights),D.push(R.numDirLightShadows),D.push(R.numPointLightShadows),D.push(R.numSpotLightShadows),D.push(R.numSpotLightShadowsWithMaps),D.push(R.numLightProbes),D.push(R.shadowMapType),D.push(R.toneMapping),D.push(R.numClippingPlanes),D.push(R.numClipIntersection),D.push(R.depthPacking)}function L(D,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),D.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reverseDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),D.push(d.mask)}function C(D){const R=E[D.type];let H;if(R){const oe=xi[R];H=Kx.clone(oe.uniforms)}else H=D.uniforms;return H}function j(D,R){let H;for(let oe=0,ee=v.length;oe<ee;oe++){const ue=v[oe];if(ue.cacheKey===R){H=ue,++H.usedTimes;break}}return H===void 0&&(H=new zE(s,R,D,l),v.push(H)),H}function B(D){if(--D.usedTimes===0){const R=v.indexOf(D);v[R]=v[v.length-1],v.pop(),D.destroy()}}function U(D){h.remove(D)}function F(){h.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:C,acquireProgram:j,releaseProgram:B,releaseShaderCache:U,programs:v,dispose:F}}function jE(){let s=new WeakMap;function e(u){return s.has(u)}function n(u){let d=s.get(u);return d===void 0&&(d={},s.set(u,d)),d}function r(u){s.delete(u)}function a(u,d,h){s.get(u)[d]=h}function l(){s=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:l}}function WE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function qm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Ym(){const s=[];let e=0;const n=[],r=[],a=[];function l(){e=0,n.length=0,r.length=0,a.length=0}function u(_,y,M,E,A,S){let x=s[e];return x===void 0?(x={id:_.id,object:_,geometry:y,material:M,groupOrder:E,renderOrder:_.renderOrder,z:A,group:S},s[e]=x):(x.id=_.id,x.object=_,x.geometry=y,x.material=M,x.groupOrder=E,x.renderOrder=_.renderOrder,x.z=A,x.group=S),e++,x}function d(_,y,M,E,A,S){const x=u(_,y,M,E,A,S);M.transmission>0?r.push(x):M.transparent===!0?a.push(x):n.push(x)}function h(_,y,M,E,A,S){const x=u(_,y,M,E,A,S);M.transmission>0?r.unshift(x):M.transparent===!0?a.unshift(x):n.unshift(x)}function p(_,y){n.length>1&&n.sort(_||WE),r.length>1&&r.sort(y||qm),a.length>1&&a.sort(y||qm)}function v(){for(let _=e,y=s.length;_<y;_++){const M=s[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:n,transmissive:r,transparent:a,init:l,push:d,unshift:h,finish:v,sort:p}}function XE(){let s=new WeakMap;function e(r,a){const l=s.get(r);let u;return l===void 0?(u=new Ym,s.set(r,[u])):a>=l.length?(u=new Ym,l.push(u)):u=l[a],u}function n(){s=new WeakMap}return{get:e,dispose:n}}function qE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new q,color:new xt};break;case"SpotLight":n={position:new q,direction:new q,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new q,color:new xt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new q,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":n={color:new xt,position:new q,halfWidth:new q,halfHeight:new q};break}return s[e.id]=n,n}}}function YE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let $E=0;function KE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function ZE(s){const e=new qE,n=YE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new q);const a=new q,l=new Bt,u=new Bt;function d(p){let v=0,_=0,y=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let M=0,E=0,A=0,S=0,x=0,O=0,L=0,C=0,j=0,B=0,U=0;p.sort(KE);for(let D=0,R=p.length;D<R;D++){const H=p[D],oe=H.color,ee=H.intensity,ue=H.distance,pe=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)v+=oe.r*ee,_+=oe.g*ee,y+=oe.b*ee;else if(H.isLightProbe){for(let de=0;de<9;de++)r.probe[de].addScaledVector(H.sh.coefficients[de],ee);U++}else if(H.isDirectionalLight){const de=e.get(H);if(de.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const me=H.shadow,G=n.get(H);G.shadowIntensity=me.intensity,G.shadowBias=me.bias,G.shadowNormalBias=me.normalBias,G.shadowRadius=me.radius,G.shadowMapSize=me.mapSize,r.directionalShadow[M]=G,r.directionalShadowMap[M]=pe,r.directionalShadowMatrix[M]=H.shadow.matrix,O++}r.directional[M]=de,M++}else if(H.isSpotLight){const de=e.get(H);de.position.setFromMatrixPosition(H.matrixWorld),de.color.copy(oe).multiplyScalar(ee),de.distance=ue,de.coneCos=Math.cos(H.angle),de.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),de.decay=H.decay,r.spot[A]=de;const me=H.shadow;if(H.map&&(r.spotLightMap[j]=H.map,j++,me.updateMatrices(H),H.castShadow&&B++),r.spotLightMatrix[A]=me.matrix,H.castShadow){const G=n.get(H);G.shadowIntensity=me.intensity,G.shadowBias=me.bias,G.shadowNormalBias=me.normalBias,G.shadowRadius=me.radius,G.shadowMapSize=me.mapSize,r.spotShadow[A]=G,r.spotShadowMap[A]=pe,C++}A++}else if(H.isRectAreaLight){const de=e.get(H);de.color.copy(oe).multiplyScalar(ee),de.halfWidth.set(H.width*.5,0,0),de.halfHeight.set(0,H.height*.5,0),r.rectArea[S]=de,S++}else if(H.isPointLight){const de=e.get(H);if(de.color.copy(H.color).multiplyScalar(H.intensity),de.distance=H.distance,de.decay=H.decay,H.castShadow){const me=H.shadow,G=n.get(H);G.shadowIntensity=me.intensity,G.shadowBias=me.bias,G.shadowNormalBias=me.normalBias,G.shadowRadius=me.radius,G.shadowMapSize=me.mapSize,G.shadowCameraNear=me.camera.near,G.shadowCameraFar=me.camera.far,r.pointShadow[E]=G,r.pointShadowMap[E]=pe,r.pointShadowMatrix[E]=H.shadow.matrix,L++}r.point[E]=de,E++}else if(H.isHemisphereLight){const de=e.get(H);de.skyColor.copy(H.color).multiplyScalar(ee),de.groundColor.copy(H.groundColor).multiplyScalar(ee),r.hemi[x]=de,x++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Le.LTC_FLOAT_1,r.rectAreaLTC2=Le.LTC_FLOAT_2):(r.rectAreaLTC1=Le.LTC_HALF_1,r.rectAreaLTC2=Le.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=_,r.ambient[2]=y;const F=r.hash;(F.directionalLength!==M||F.pointLength!==E||F.spotLength!==A||F.rectAreaLength!==S||F.hemiLength!==x||F.numDirectionalShadows!==O||F.numPointShadows!==L||F.numSpotShadows!==C||F.numSpotMaps!==j||F.numLightProbes!==U)&&(r.directional.length=M,r.spot.length=A,r.rectArea.length=S,r.point.length=E,r.hemi.length=x,r.directionalShadow.length=O,r.directionalShadowMap.length=O,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=O,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=C+j-B,r.spotLightMap.length=j,r.numSpotLightShadowsWithMaps=B,r.numLightProbes=U,F.directionalLength=M,F.pointLength=E,F.spotLength=A,F.rectAreaLength=S,F.hemiLength=x,F.numDirectionalShadows=O,F.numPointShadows=L,F.numSpotShadows=C,F.numSpotMaps=j,F.numLightProbes=U,r.version=$E++)}function h(p,v){let _=0,y=0,M=0,E=0,A=0;const S=v.matrixWorldInverse;for(let x=0,O=p.length;x<O;x++){const L=p[x];if(L.isDirectionalLight){const C=r.directional[_];C.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(S),_++}else if(L.isSpotLight){const C=r.spot[M];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(S),C.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(S),M++}else if(L.isRectAreaLight){const C=r.rectArea[E];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(S),u.identity(),l.copy(L.matrixWorld),l.premultiply(S),u.extractRotation(l),C.halfWidth.set(L.width*.5,0,0),C.halfHeight.set(0,L.height*.5,0),C.halfWidth.applyMatrix4(u),C.halfHeight.applyMatrix4(u),E++}else if(L.isPointLight){const C=r.point[y];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(S),y++}else if(L.isHemisphereLight){const C=r.hemi[A];C.direction.setFromMatrixPosition(L.matrixWorld),C.direction.transformDirection(S),A++}}}return{setup:d,setupView:h,state:r}}function $m(s){const e=new ZE(s),n=[],r=[];function a(v){p.camera=v,n.length=0,r.length=0}function l(v){n.push(v)}function u(v){r.push(v)}function d(){e.setup(n)}function h(v){e.setupView(n,v)}const p={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:p,setupLights:d,setupLightsView:h,pushLight:l,pushShadow:u}}function JE(s){let e=new WeakMap;function n(a,l=0){const u=e.get(a);let d;return u===void 0?(d=new $m(s),e.set(a,[d])):l>=u.length?(d=new $m(s),u.push(d)):d=u[l],d}function r(){e=new WeakMap}return{get:n,dispose:r}}const QE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ew=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function tw(s,e,n){let r=new uf;const a=new rt,l=new rt,u=new Nt,d=new Ey({depthPacking:_x}),h=new wy,p={},v=n.maxTextureSize,_={[Er]:Un,[Un]:Er,[zi]:zi},y=new wr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:QE,fragmentShader:ew}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const E=new Jn;E.setAttribute("position",new di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new zt(E,y),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sg;let x=this.type;this.render=function(B,U,F){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||B.length===0)return;const D=s.getRenderTarget(),R=s.getActiveCubeFace(),H=s.getActiveMipmapLevel(),oe=s.state;oe.setBlending(Sr),oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);const ee=x!==ki&&this.type===ki,ue=x===ki&&this.type!==ki;for(let pe=0,de=B.length;pe<de;pe++){const me=B[pe],G=me.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",me,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;a.copy(G.mapSize);const le=G.getFrameExtents();if(a.multiply(le),l.copy(G.mapSize),(a.x>v||a.y>v)&&(a.x>v&&(l.x=Math.floor(v/le.x),a.x=l.x*le.x,G.mapSize.x=l.x),a.y>v&&(l.y=Math.floor(v/le.y),a.y=l.y*le.y,G.mapSize.y=l.y)),G.map===null||ee===!0||ue===!0){const w=this.type!==ki?{minFilter:ui,magFilter:ui}:{};G.map!==null&&G.map.dispose(),G.map=new Qr(a.x,a.y,w),G.map.texture.name=me.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();const N=G.getViewportCount();for(let w=0;w<N;w++){const W=G.getViewport(w);u.set(l.x*W.x,l.y*W.y,l.x*W.z,l.y*W.w),oe.viewport(u),G.updateMatrices(me,w),r=G.getFrustum(),C(U,F,G.camera,me,this.type)}G.isPointLightShadow!==!0&&this.type===ki&&O(G,F),G.needsUpdate=!1}x=this.type,S.needsUpdate=!1,s.setRenderTarget(D,R,H)};function O(B,U){const F=e.update(A);y.defines.VSM_SAMPLES!==B.blurSamples&&(y.defines.VSM_SAMPLES=B.blurSamples,M.defines.VSM_SAMPLES=B.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Qr(a.x,a.y)),y.uniforms.shadow_pass.value=B.map.texture,y.uniforms.resolution.value=B.mapSize,y.uniforms.radius.value=B.radius,s.setRenderTarget(B.mapPass),s.clear(),s.renderBufferDirect(U,null,F,y,A,null),M.uniforms.shadow_pass.value=B.mapPass.texture,M.uniforms.resolution.value=B.mapSize,M.uniforms.radius.value=B.radius,s.setRenderTarget(B.map),s.clear(),s.renderBufferDirect(U,null,F,M,A,null)}function L(B,U,F,D){let R=null;const H=F.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(H!==void 0)R=H;else if(R=F.isPointLight===!0?h:d,s.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const oe=R.uuid,ee=U.uuid;let ue=p[oe];ue===void 0&&(ue={},p[oe]=ue);let pe=ue[ee];pe===void 0&&(pe=R.clone(),ue[ee]=pe,U.addEventListener("dispose",j)),R=pe}if(R.visible=U.visible,R.wireframe=U.wireframe,D===ki?R.side=U.shadowSide!==null?U.shadowSide:U.side:R.side=U.shadowSide!==null?U.shadowSide:_[U.side],R.alphaMap=U.alphaMap,R.alphaTest=U.alphaTest,R.map=U.map,R.clipShadows=U.clipShadows,R.clippingPlanes=U.clippingPlanes,R.clipIntersection=U.clipIntersection,R.displacementMap=U.displacementMap,R.displacementScale=U.displacementScale,R.displacementBias=U.displacementBias,R.wireframeLinewidth=U.wireframeLinewidth,R.linewidth=U.linewidth,F.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const oe=s.properties.get(R);oe.light=F}return R}function C(B,U,F,D,R){if(B.visible===!1)return;if(B.layers.test(U.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&R===ki)&&(!B.frustumCulled||r.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,B.matrixWorld);const ee=e.update(B),ue=B.material;if(Array.isArray(ue)){const pe=ee.groups;for(let de=0,me=pe.length;de<me;de++){const G=pe[de],le=ue[G.materialIndex];if(le&&le.visible){const N=L(B,le,D,R);B.onBeforeShadow(s,B,U,F,ee,N,G),s.renderBufferDirect(F,null,ee,N,B,G),B.onAfterShadow(s,B,U,F,ee,N,G)}}}else if(ue.visible){const pe=L(B,ue,D,R);B.onBeforeShadow(s,B,U,F,ee,pe,null),s.renderBufferDirect(F,null,ee,pe,B,null),B.onAfterShadow(s,B,U,F,ee,pe,null)}}const oe=B.children;for(let ee=0,ue=oe.length;ee<ue;ee++)C(oe[ee],U,F,D,R)}function j(B){B.target.removeEventListener("dispose",j);for(const F in p){const D=p[F],R=B.target.uuid;R in D&&(D[R].dispose(),delete D[R])}}}const nw={[cd]:ud,[dd]:pd,[fd]:md,[Gs]:hd,[ud]:cd,[pd]:dd,[md]:fd,[hd]:Gs};function iw(s,e){function n(){let $=!1;const Pe=new Nt;let fe=null;const _e=new Nt(0,0,0,0);return{setMask:function(Ie){fe!==Ie&&!$&&(s.colorMask(Ie,Ie,Ie,Ie),fe=Ie)},setLocked:function(Ie){$=Ie},setClear:function(Ie,Ne,dt,Ft,Zt){Zt===!0&&(Ie*=Ft,Ne*=Ft,dt*=Ft),Pe.set(Ie,Ne,dt,Ft),_e.equals(Pe)===!1&&(s.clearColor(Ie,Ne,dt,Ft),_e.copy(Pe))},reset:function(){$=!1,fe=null,_e.set(-1,0,0,0)}}}function r(){let $=!1,Pe=!1,fe=null,_e=null,Ie=null;return{setReversed:function(Ne){if(Pe!==Ne){const dt=e.get("EXT_clip_control");Pe?dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.ZERO_TO_ONE_EXT):dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.NEGATIVE_ONE_TO_ONE_EXT);const Ft=Ie;Ie=null,this.setClear(Ft)}Pe=Ne},getReversed:function(){return Pe},setTest:function(Ne){Ne?Q(s.DEPTH_TEST):he(s.DEPTH_TEST)},setMask:function(Ne){fe!==Ne&&!$&&(s.depthMask(Ne),fe=Ne)},setFunc:function(Ne){if(Pe&&(Ne=nw[Ne]),_e!==Ne){switch(Ne){case cd:s.depthFunc(s.NEVER);break;case ud:s.depthFunc(s.ALWAYS);break;case dd:s.depthFunc(s.LESS);break;case Gs:s.depthFunc(s.LEQUAL);break;case fd:s.depthFunc(s.EQUAL);break;case hd:s.depthFunc(s.GEQUAL);break;case pd:s.depthFunc(s.GREATER);break;case md:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}_e=Ne}},setLocked:function(Ne){$=Ne},setClear:function(Ne){Ie!==Ne&&(Pe&&(Ne=1-Ne),s.clearDepth(Ne),Ie=Ne)},reset:function(){$=!1,fe=null,_e=null,Ie=null,Pe=!1}}}function a(){let $=!1,Pe=null,fe=null,_e=null,Ie=null,Ne=null,dt=null,Ft=null,Zt=null;return{setTest:function(Tt){$||(Tt?Q(s.STENCIL_TEST):he(s.STENCIL_TEST))},setMask:function(Tt){Pe!==Tt&&!$&&(s.stencilMask(Tt),Pe=Tt)},setFunc:function(Tt,Cn,Mn){(fe!==Tt||_e!==Cn||Ie!==Mn)&&(s.stencilFunc(Tt,Cn,Mn),fe=Tt,_e=Cn,Ie=Mn)},setOp:function(Tt,Cn,Mn){(Ne!==Tt||dt!==Cn||Ft!==Mn)&&(s.stencilOp(Tt,Cn,Mn),Ne=Tt,dt=Cn,Ft=Mn)},setLocked:function(Tt){$=Tt},setClear:function(Tt){Zt!==Tt&&(s.clearStencil(Tt),Zt=Tt)},reset:function(){$=!1,Pe=null,fe=null,_e=null,Ie=null,Ne=null,dt=null,Ft=null,Zt=null}}}const l=new n,u=new r,d=new a,h=new WeakMap,p=new WeakMap;let v={},_={},y=new WeakMap,M=[],E=null,A=!1,S=null,x=null,O=null,L=null,C=null,j=null,B=null,U=new xt(0,0,0),F=0,D=!1,R=null,H=null,oe=null,ee=null,ue=null;const pe=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let de=!1,me=0;const G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(me=parseFloat(/^WebGL (\d)/.exec(G)[1]),de=me>=1):G.indexOf("OpenGL ES")!==-1&&(me=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),de=me>=2);let le=null,N={};const w=s.getParameter(s.SCISSOR_BOX),W=s.getParameter(s.VIEWPORT),ge=new Nt().fromArray(w),Y=new Nt().fromArray(W);function re($,Pe,fe,_e){const Ie=new Uint8Array(4),Ne=s.createTexture();s.bindTexture($,Ne),s.texParameteri($,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri($,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let dt=0;dt<fe;dt++)$===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY?s.texImage3D(Pe,0,s.RGBA,1,1,_e,0,s.RGBA,s.UNSIGNED_BYTE,Ie):s.texImage2D(Pe+dt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ie);return Ne}const J={};J[s.TEXTURE_2D]=re(s.TEXTURE_2D,s.TEXTURE_2D,1),J[s.TEXTURE_CUBE_MAP]=re(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[s.TEXTURE_2D_ARRAY]=re(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),J[s.TEXTURE_3D]=re(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),d.setClear(0),Q(s.DEPTH_TEST),u.setFunc(Gs),et(!1),st(qp),Q(s.CULL_FACE),k(Sr);function Q($){v[$]!==!0&&(s.enable($),v[$]=!0)}function he($){v[$]!==!1&&(s.disable($),v[$]=!1)}function Me($,Pe){return _[$]!==Pe?(s.bindFramebuffer($,Pe),_[$]=Pe,$===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Pe),$===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Pe),!0):!1}function Ce($,Pe){let fe=M,_e=!1;if($){fe=y.get(Pe),fe===void 0&&(fe=[],y.set(Pe,fe));const Ie=$.textures;if(fe.length!==Ie.length||fe[0]!==s.COLOR_ATTACHMENT0){for(let Ne=0,dt=Ie.length;Ne<dt;Ne++)fe[Ne]=s.COLOR_ATTACHMENT0+Ne;fe.length=Ie.length,_e=!0}}else fe[0]!==s.BACK&&(fe[0]=s.BACK,_e=!0);_e&&s.drawBuffers(fe)}function Ze($){return E!==$?(s.useProgram($),E=$,!0):!1}const Je={[Yr]:s.FUNC_ADD,[j_]:s.FUNC_SUBTRACT,[W_]:s.FUNC_REVERSE_SUBTRACT};Je[X_]=s.MIN,Je[q_]=s.MAX;const Xe={[Y_]:s.ZERO,[$_]:s.ONE,[K_]:s.SRC_COLOR,[ad]:s.SRC_ALPHA,[nx]:s.SRC_ALPHA_SATURATE,[ex]:s.DST_COLOR,[J_]:s.DST_ALPHA,[Z_]:s.ONE_MINUS_SRC_COLOR,[ld]:s.ONE_MINUS_SRC_ALPHA,[tx]:s.ONE_MINUS_DST_COLOR,[Q_]:s.ONE_MINUS_DST_ALPHA,[ix]:s.CONSTANT_COLOR,[rx]:s.ONE_MINUS_CONSTANT_COLOR,[sx]:s.CONSTANT_ALPHA,[ox]:s.ONE_MINUS_CONSTANT_ALPHA};function k($,Pe,fe,_e,Ie,Ne,dt,Ft,Zt,Tt){if($===Sr){A===!0&&(he(s.BLEND),A=!1);return}if(A===!1&&(Q(s.BLEND),A=!0),$!==G_){if($!==S||Tt!==D){if((x!==Yr||C!==Yr)&&(s.blendEquation(s.FUNC_ADD),x=Yr,C=Yr),Tt)switch($){case Bs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Yp:s.blendFunc(s.ONE,s.ONE);break;case $p:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Kp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}else switch($){case Bs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Yp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case $p:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Kp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}O=null,L=null,j=null,B=null,U.set(0,0,0),F=0,S=$,D=Tt}return}Ie=Ie||Pe,Ne=Ne||fe,dt=dt||_e,(Pe!==x||Ie!==C)&&(s.blendEquationSeparate(Je[Pe],Je[Ie]),x=Pe,C=Ie),(fe!==O||_e!==L||Ne!==j||dt!==B)&&(s.blendFuncSeparate(Xe[fe],Xe[_e],Xe[Ne],Xe[dt]),O=fe,L=_e,j=Ne,B=dt),(Ft.equals(U)===!1||Zt!==F)&&(s.blendColor(Ft.r,Ft.g,Ft.b,Zt),U.copy(Ft),F=Zt),S=$,D=!1}function Rt($,Pe){$.side===zi?he(s.CULL_FACE):Q(s.CULL_FACE);let fe=$.side===Un;Pe&&(fe=!fe),et(fe),$.blending===Bs&&$.transparent===!1?k(Sr):k($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.blendColor,$.blendAlpha,$.premultipliedAlpha),u.setFunc($.depthFunc),u.setTest($.depthTest),u.setMask($.depthWrite),l.setMask($.colorWrite);const _e=$.stencilWrite;d.setTest(_e),_e&&(d.setMask($.stencilWriteMask),d.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),d.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),yt($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?Q(s.SAMPLE_ALPHA_TO_COVERAGE):he(s.SAMPLE_ALPHA_TO_COVERAGE)}function et($){R!==$&&($?s.frontFace(s.CW):s.frontFace(s.CCW),R=$)}function st($){$!==H_?(Q(s.CULL_FACE),$!==H&&($===qp?s.cullFace(s.BACK):$===V_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):he(s.CULL_FACE),H=$}function He($){$!==oe&&(de&&s.lineWidth($),oe=$)}function yt($,Pe,fe){$?(Q(s.POLYGON_OFFSET_FILL),(ee!==Pe||ue!==fe)&&(s.polygonOffset(Pe,fe),ee=Pe,ue=fe)):he(s.POLYGON_OFFSET_FILL)}function Ue($){$?Q(s.SCISSOR_TEST):he(s.SCISSOR_TEST)}function I($){$===void 0&&($=s.TEXTURE0+pe-1),le!==$&&(s.activeTexture($),le=$)}function b($,Pe,fe){fe===void 0&&(le===null?fe=s.TEXTURE0+pe-1:fe=le);let _e=N[fe];_e===void 0&&(_e={type:void 0,texture:void 0},N[fe]=_e),(_e.type!==$||_e.texture!==Pe)&&(le!==fe&&(s.activeTexture(fe),le=fe),s.bindTexture($,Pe||J[$]),_e.type=$,_e.texture=Pe)}function se(){const $=N[le];$!==void 0&&$.type!==void 0&&(s.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function xe(){try{s.compressedTexImage2D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function ye(){try{s.compressedTexImage3D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function ve(){try{s.texSubImage2D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Ye(){try{s.texSubImage3D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function be(){try{s.compressedTexSubImage2D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Fe(){try{s.compressedTexSubImage3D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function ft(){try{s.texStorage2D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function we(){try{s.texStorage3D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Be(){try{s.texImage2D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function tt(){try{s.texImage3D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function at($){ge.equals($)===!1&&(s.scissor($.x,$.y,$.z,$.w),ge.copy($))}function Ge($){Y.equals($)===!1&&(s.viewport($.x,$.y,$.z,$.w),Y.copy($))}function gt($,Pe){let fe=p.get(Pe);fe===void 0&&(fe=new WeakMap,p.set(Pe,fe));let _e=fe.get($);_e===void 0&&(_e=s.getUniformBlockIndex(Pe,$.name),fe.set($,_e))}function ut($,Pe){const _e=p.get(Pe).get($);h.get(Pe)!==_e&&(s.uniformBlockBinding(Pe,_e,$.__bindingPointIndex),h.set(Pe,_e))}function Dt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},le=null,N={},_={},y=new WeakMap,M=[],E=null,A=!1,S=null,x=null,O=null,L=null,C=null,j=null,B=null,U=new xt(0,0,0),F=0,D=!1,R=null,H=null,oe=null,ee=null,ue=null,ge.set(0,0,s.canvas.width,s.canvas.height),Y.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),d.reset()}return{buffers:{color:l,depth:u,stencil:d},enable:Q,disable:he,bindFramebuffer:Me,drawBuffers:Ce,useProgram:Ze,setBlending:k,setMaterial:Rt,setFlipSided:et,setCullFace:st,setLineWidth:He,setPolygonOffset:yt,setScissorTest:Ue,activeTexture:I,bindTexture:b,unbindTexture:se,compressedTexImage2D:xe,compressedTexImage3D:ye,texImage2D:Be,texImage3D:tt,updateUBOMapping:gt,uniformBlockBinding:ut,texStorage2D:ft,texStorage3D:we,texSubImage2D:ve,texSubImage3D:Ye,compressedTexSubImage2D:be,compressedTexSubImage3D:Fe,scissor:at,viewport:Ge,reset:Dt}}function rw(s,e,n,r,a,l,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new rt,v=new WeakMap;let _;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(I,b){return M?new OffscreenCanvas(I,b):Ol("canvas")}function A(I,b,se){let xe=1;const ye=Ue(I);if((ye.width>se||ye.height>se)&&(xe=se/Math.max(ye.width,ye.height)),xe<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const ve=Math.floor(xe*ye.width),Ye=Math.floor(xe*ye.height);_===void 0&&(_=E(ve,Ye));const be=b?E(ve,Ye):_;return be.width=ve,be.height=Ye,be.getContext("2d").drawImage(I,0,0,ve,Ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+ve+"x"+Ye+")."),be}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+")."),I;return I}function S(I){return I.generateMipmaps}function x(I){s.generateMipmap(I)}function O(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(I,b,se,xe,ye=!1){if(I!==null){if(s[I]!==void 0)return s[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ve=b;if(b===s.RED&&(se===s.FLOAT&&(ve=s.R32F),se===s.HALF_FLOAT&&(ve=s.R16F),se===s.UNSIGNED_BYTE&&(ve=s.R8)),b===s.RED_INTEGER&&(se===s.UNSIGNED_BYTE&&(ve=s.R8UI),se===s.UNSIGNED_SHORT&&(ve=s.R16UI),se===s.UNSIGNED_INT&&(ve=s.R32UI),se===s.BYTE&&(ve=s.R8I),se===s.SHORT&&(ve=s.R16I),se===s.INT&&(ve=s.R32I)),b===s.RG&&(se===s.FLOAT&&(ve=s.RG32F),se===s.HALF_FLOAT&&(ve=s.RG16F),se===s.UNSIGNED_BYTE&&(ve=s.RG8)),b===s.RG_INTEGER&&(se===s.UNSIGNED_BYTE&&(ve=s.RG8UI),se===s.UNSIGNED_SHORT&&(ve=s.RG16UI),se===s.UNSIGNED_INT&&(ve=s.RG32UI),se===s.BYTE&&(ve=s.RG8I),se===s.SHORT&&(ve=s.RG16I),se===s.INT&&(ve=s.RG32I)),b===s.RGB_INTEGER&&(se===s.UNSIGNED_BYTE&&(ve=s.RGB8UI),se===s.UNSIGNED_SHORT&&(ve=s.RGB16UI),se===s.UNSIGNED_INT&&(ve=s.RGB32UI),se===s.BYTE&&(ve=s.RGB8I),se===s.SHORT&&(ve=s.RGB16I),se===s.INT&&(ve=s.RGB32I)),b===s.RGBA_INTEGER&&(se===s.UNSIGNED_BYTE&&(ve=s.RGBA8UI),se===s.UNSIGNED_SHORT&&(ve=s.RGBA16UI),se===s.UNSIGNED_INT&&(ve=s.RGBA32UI),se===s.BYTE&&(ve=s.RGBA8I),se===s.SHORT&&(ve=s.RGBA16I),se===s.INT&&(ve=s.RGBA32I)),b===s.RGB&&se===s.UNSIGNED_INT_5_9_9_9_REV&&(ve=s.RGB9_E5),b===s.RGBA){const Ye=ye?Ul:Pt.getTransfer(xe);se===s.FLOAT&&(ve=s.RGBA32F),se===s.HALF_FLOAT&&(ve=s.RGBA16F),se===s.UNSIGNED_BYTE&&(ve=Ye===Lt?s.SRGB8_ALPHA8:s.RGBA8),se===s.UNSIGNED_SHORT_4_4_4_4&&(ve=s.RGBA4),se===s.UNSIGNED_SHORT_5_5_5_1&&(ve=s.RGB5_A1)}return(ve===s.R16F||ve===s.R32F||ve===s.RG16F||ve===s.RG32F||ve===s.RGBA16F||ve===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ve}function C(I,b){let se;return I?b===null||b===Jr||b===Xs?se=s.DEPTH24_STENCIL8:b===Bi?se=s.DEPTH32F_STENCIL8:b===jo&&(se=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Jr||b===Xs?se=s.DEPTH_COMPONENT24:b===Bi?se=s.DEPTH_COMPONENT32F:b===jo&&(se=s.DEPTH_COMPONENT16),se}function j(I,b){return S(I)===!0||I.isFramebufferTexture&&I.minFilter!==ui&&I.minFilter!==yi?Math.log2(Math.max(b.width,b.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?b.mipmaps.length:1}function B(I){const b=I.target;b.removeEventListener("dispose",B),F(b),b.isVideoTexture&&v.delete(b)}function U(I){const b=I.target;b.removeEventListener("dispose",U),R(b)}function F(I){const b=r.get(I);if(b.__webglInit===void 0)return;const se=I.source,xe=y.get(se);if(xe){const ye=xe[b.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&D(I),Object.keys(xe).length===0&&y.delete(se)}r.remove(I)}function D(I){const b=r.get(I);s.deleteTexture(b.__webglTexture);const se=I.source,xe=y.get(se);delete xe[b.__cacheKey],u.memory.textures--}function R(I){const b=r.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),r.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let xe=0;xe<6;xe++){if(Array.isArray(b.__webglFramebuffer[xe]))for(let ye=0;ye<b.__webglFramebuffer[xe].length;ye++)s.deleteFramebuffer(b.__webglFramebuffer[xe][ye]);else s.deleteFramebuffer(b.__webglFramebuffer[xe]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[xe])}else{if(Array.isArray(b.__webglFramebuffer))for(let xe=0;xe<b.__webglFramebuffer.length;xe++)s.deleteFramebuffer(b.__webglFramebuffer[xe]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let xe=0;xe<b.__webglColorRenderbuffer.length;xe++)b.__webglColorRenderbuffer[xe]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[xe]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const se=I.textures;for(let xe=0,ye=se.length;xe<ye;xe++){const ve=r.get(se[xe]);ve.__webglTexture&&(s.deleteTexture(ve.__webglTexture),u.memory.textures--),r.remove(se[xe])}r.remove(I)}let H=0;function oe(){H=0}function ee(){const I=H;return I>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+a.maxTextures),H+=1,I}function ue(I){const b=[];return b.push(I.wrapS),b.push(I.wrapT),b.push(I.wrapR||0),b.push(I.magFilter),b.push(I.minFilter),b.push(I.anisotropy),b.push(I.internalFormat),b.push(I.format),b.push(I.type),b.push(I.generateMipmaps),b.push(I.premultiplyAlpha),b.push(I.flipY),b.push(I.unpackAlignment),b.push(I.colorSpace),b.join()}function pe(I,b){const se=r.get(I);if(I.isVideoTexture&&He(I),I.isRenderTargetTexture===!1&&I.version>0&&se.__version!==I.version){const xe=I.image;if(xe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(xe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(se,I,b);return}}n.bindTexture(s.TEXTURE_2D,se.__webglTexture,s.TEXTURE0+b)}function de(I,b){const se=r.get(I);if(I.version>0&&se.__version!==I.version){Y(se,I,b);return}n.bindTexture(s.TEXTURE_2D_ARRAY,se.__webglTexture,s.TEXTURE0+b)}function me(I,b){const se=r.get(I);if(I.version>0&&se.__version!==I.version){Y(se,I,b);return}n.bindTexture(s.TEXTURE_3D,se.__webglTexture,s.TEXTURE0+b)}function G(I,b){const se=r.get(I);if(I.version>0&&se.__version!==I.version){re(se,I,b);return}n.bindTexture(s.TEXTURE_CUBE_MAP,se.__webglTexture,s.TEXTURE0+b)}const le={[_d]:s.REPEAT,[Kr]:s.CLAMP_TO_EDGE,[xd]:s.MIRRORED_REPEAT},N={[ui]:s.NEAREST,[gx]:s.NEAREST_MIPMAP_NEAREST,[rl]:s.NEAREST_MIPMAP_LINEAR,[yi]:s.LINEAR,[Au]:s.LINEAR_MIPMAP_NEAREST,[Zr]:s.LINEAR_MIPMAP_LINEAR},w={[yx]:s.NEVER,[Ax]:s.ALWAYS,[Sx]:s.LESS,[yg]:s.LEQUAL,[Mx]:s.EQUAL,[Tx]:s.GEQUAL,[Ex]:s.GREATER,[wx]:s.NOTEQUAL};function W(I,b){if(b.type===Bi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===yi||b.magFilter===Au||b.magFilter===rl||b.magFilter===Zr||b.minFilter===yi||b.minFilter===Au||b.minFilter===rl||b.minFilter===Zr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,le[b.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,le[b.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,le[b.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,N[b.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,N[b.minFilter]),b.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,w[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===ui||b.minFilter!==rl&&b.minFilter!==Zr||b.type===Bi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const se=e.get("EXT_texture_filter_anisotropic");s.texParameterf(I,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,a.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function ge(I,b){let se=!1;I.__webglInit===void 0&&(I.__webglInit=!0,b.addEventListener("dispose",B));const xe=b.source;let ye=y.get(xe);ye===void 0&&(ye={},y.set(xe,ye));const ve=ue(b);if(ve!==I.__cacheKey){ye[ve]===void 0&&(ye[ve]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,se=!0),ye[ve].usedTimes++;const Ye=ye[I.__cacheKey];Ye!==void 0&&(ye[I.__cacheKey].usedTimes--,Ye.usedTimes===0&&D(b)),I.__cacheKey=ve,I.__webglTexture=ye[ve].texture}return se}function Y(I,b,se){let xe=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(xe=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(xe=s.TEXTURE_3D);const ye=ge(I,b),ve=b.source;n.bindTexture(xe,I.__webglTexture,s.TEXTURE0+se);const Ye=r.get(ve);if(ve.version!==Ye.__version||ye===!0){n.activeTexture(s.TEXTURE0+se);const be=Pt.getPrimaries(Pt.workingColorSpace),Fe=b.colorSpace===yr?null:Pt.getPrimaries(b.colorSpace),ft=b.colorSpace===yr||be===Fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let we=A(b.image,!1,a.maxTextureSize);we=yt(b,we);const Be=l.convert(b.format,b.colorSpace),tt=l.convert(b.type);let at=L(b.internalFormat,Be,tt,b.colorSpace,b.isVideoTexture);W(xe,b);let Ge;const gt=b.mipmaps,ut=b.isVideoTexture!==!0,Dt=Ye.__version===void 0||ye===!0,$=ve.dataReady,Pe=j(b,we);if(b.isDepthTexture)at=C(b.format===qs,b.type),Dt&&(ut?n.texStorage2D(s.TEXTURE_2D,1,at,we.width,we.height):n.texImage2D(s.TEXTURE_2D,0,at,we.width,we.height,0,Be,tt,null));else if(b.isDataTexture)if(gt.length>0){ut&&Dt&&n.texStorage2D(s.TEXTURE_2D,Pe,at,gt[0].width,gt[0].height);for(let fe=0,_e=gt.length;fe<_e;fe++)Ge=gt[fe],ut?$&&n.texSubImage2D(s.TEXTURE_2D,fe,0,0,Ge.width,Ge.height,Be,tt,Ge.data):n.texImage2D(s.TEXTURE_2D,fe,at,Ge.width,Ge.height,0,Be,tt,Ge.data);b.generateMipmaps=!1}else ut?(Dt&&n.texStorage2D(s.TEXTURE_2D,Pe,at,we.width,we.height),$&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,we.width,we.height,Be,tt,we.data)):n.texImage2D(s.TEXTURE_2D,0,at,we.width,we.height,0,Be,tt,we.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ut&&Dt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Pe,at,gt[0].width,gt[0].height,we.depth);for(let fe=0,_e=gt.length;fe<_e;fe++)if(Ge=gt[fe],b.format!==ci)if(Be!==null)if(ut){if($)if(b.layerUpdates.size>0){const Ie=Tm(Ge.width,Ge.height,b.format,b.type);for(const Ne of b.layerUpdates){const dt=Ge.data.subarray(Ne*Ie/Ge.data.BYTES_PER_ELEMENT,(Ne+1)*Ie/Ge.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,fe,0,0,Ne,Ge.width,Ge.height,1,Be,dt)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,fe,0,0,0,Ge.width,Ge.height,we.depth,Be,Ge.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,fe,at,Ge.width,Ge.height,we.depth,0,Ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ut?$&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,fe,0,0,0,Ge.width,Ge.height,we.depth,Be,tt,Ge.data):n.texImage3D(s.TEXTURE_2D_ARRAY,fe,at,Ge.width,Ge.height,we.depth,0,Be,tt,Ge.data)}else{ut&&Dt&&n.texStorage2D(s.TEXTURE_2D,Pe,at,gt[0].width,gt[0].height);for(let fe=0,_e=gt.length;fe<_e;fe++)Ge=gt[fe],b.format!==ci?Be!==null?ut?$&&n.compressedTexSubImage2D(s.TEXTURE_2D,fe,0,0,Ge.width,Ge.height,Be,Ge.data):n.compressedTexImage2D(s.TEXTURE_2D,fe,at,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?$&&n.texSubImage2D(s.TEXTURE_2D,fe,0,0,Ge.width,Ge.height,Be,tt,Ge.data):n.texImage2D(s.TEXTURE_2D,fe,at,Ge.width,Ge.height,0,Be,tt,Ge.data)}else if(b.isDataArrayTexture)if(ut){if(Dt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Pe,at,we.width,we.height,we.depth),$)if(b.layerUpdates.size>0){const fe=Tm(we.width,we.height,b.format,b.type);for(const _e of b.layerUpdates){const Ie=we.data.subarray(_e*fe/we.data.BYTES_PER_ELEMENT,(_e+1)*fe/we.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,_e,we.width,we.height,1,Be,tt,Ie)}b.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,we.width,we.height,we.depth,Be,tt,we.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,at,we.width,we.height,we.depth,0,Be,tt,we.data);else if(b.isData3DTexture)ut?(Dt&&n.texStorage3D(s.TEXTURE_3D,Pe,at,we.width,we.height,we.depth),$&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,we.width,we.height,we.depth,Be,tt,we.data)):n.texImage3D(s.TEXTURE_3D,0,at,we.width,we.height,we.depth,0,Be,tt,we.data);else if(b.isFramebufferTexture){if(Dt)if(ut)n.texStorage2D(s.TEXTURE_2D,Pe,at,we.width,we.height);else{let fe=we.width,_e=we.height;for(let Ie=0;Ie<Pe;Ie++)n.texImage2D(s.TEXTURE_2D,Ie,at,fe,_e,0,Be,tt,null),fe>>=1,_e>>=1}}else if(gt.length>0){if(ut&&Dt){const fe=Ue(gt[0]);n.texStorage2D(s.TEXTURE_2D,Pe,at,fe.width,fe.height)}for(let fe=0,_e=gt.length;fe<_e;fe++)Ge=gt[fe],ut?$&&n.texSubImage2D(s.TEXTURE_2D,fe,0,0,Be,tt,Ge):n.texImage2D(s.TEXTURE_2D,fe,at,Be,tt,Ge);b.generateMipmaps=!1}else if(ut){if(Dt){const fe=Ue(we);n.texStorage2D(s.TEXTURE_2D,Pe,at,fe.width,fe.height)}$&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Be,tt,we)}else n.texImage2D(s.TEXTURE_2D,0,at,Be,tt,we);S(b)&&x(xe),Ye.__version=ve.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function re(I,b,se){if(b.image.length!==6)return;const xe=ge(I,b),ye=b.source;n.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+se);const ve=r.get(ye);if(ye.version!==ve.__version||xe===!0){n.activeTexture(s.TEXTURE0+se);const Ye=Pt.getPrimaries(Pt.workingColorSpace),be=b.colorSpace===yr?null:Pt.getPrimaries(b.colorSpace),Fe=b.colorSpace===yr||Ye===be?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const ft=b.isCompressedTexture||b.image[0].isCompressedTexture,we=b.image[0]&&b.image[0].isDataTexture,Be=[];for(let _e=0;_e<6;_e++)!ft&&!we?Be[_e]=A(b.image[_e],!0,a.maxCubemapSize):Be[_e]=we?b.image[_e].image:b.image[_e],Be[_e]=yt(b,Be[_e]);const tt=Be[0],at=l.convert(b.format,b.colorSpace),Ge=l.convert(b.type),gt=L(b.internalFormat,at,Ge,b.colorSpace),ut=b.isVideoTexture!==!0,Dt=ve.__version===void 0||xe===!0,$=ye.dataReady;let Pe=j(b,tt);W(s.TEXTURE_CUBE_MAP,b);let fe;if(ft){ut&&Dt&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,gt,tt.width,tt.height);for(let _e=0;_e<6;_e++){fe=Be[_e].mipmaps;for(let Ie=0;Ie<fe.length;Ie++){const Ne=fe[Ie];b.format!==ci?at!==null?ut?$&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ie,0,0,Ne.width,Ne.height,at,Ne.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ie,gt,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ut?$&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ie,0,0,Ne.width,Ne.height,at,Ge,Ne.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ie,gt,Ne.width,Ne.height,0,at,Ge,Ne.data)}}}else{if(fe=b.mipmaps,ut&&Dt){fe.length>0&&Pe++;const _e=Ue(Be[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,gt,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(we){ut?$&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Be[_e].width,Be[_e].height,at,Ge,Be[_e].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,gt,Be[_e].width,Be[_e].height,0,at,Ge,Be[_e].data);for(let Ie=0;Ie<fe.length;Ie++){const dt=fe[Ie].image[_e].image;ut?$&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ie+1,0,0,dt.width,dt.height,at,Ge,dt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ie+1,gt,dt.width,dt.height,0,at,Ge,dt.data)}}else{ut?$&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,at,Ge,Be[_e]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,gt,at,Ge,Be[_e]);for(let Ie=0;Ie<fe.length;Ie++){const Ne=fe[Ie];ut?$&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ie+1,0,0,at,Ge,Ne.image[_e]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ie+1,gt,at,Ge,Ne.image[_e])}}}S(b)&&x(s.TEXTURE_CUBE_MAP),ve.__version=ye.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function J(I,b,se,xe,ye,ve){const Ye=l.convert(se.format,se.colorSpace),be=l.convert(se.type),Fe=L(se.internalFormat,Ye,be,se.colorSpace),ft=r.get(b),we=r.get(se);if(we.__renderTarget=b,!ft.__hasExternalTextures){const Be=Math.max(1,b.width>>ve),tt=Math.max(1,b.height>>ve);ye===s.TEXTURE_3D||ye===s.TEXTURE_2D_ARRAY?n.texImage3D(ye,ve,Fe,Be,tt,b.depth,0,Ye,be,null):n.texImage2D(ye,ve,Fe,Be,tt,0,Ye,be,null)}n.bindFramebuffer(s.FRAMEBUFFER,I),st(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,xe,ye,we.__webglTexture,0,et(b)):(ye===s.TEXTURE_2D||ye>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,xe,ye,we.__webglTexture,ve),n.bindFramebuffer(s.FRAMEBUFFER,null)}function Q(I,b,se){if(s.bindRenderbuffer(s.RENDERBUFFER,I),b.depthBuffer){const xe=b.depthTexture,ye=xe&&xe.isDepthTexture?xe.type:null,ve=C(b.stencilBuffer,ye),Ye=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,be=et(b);st(b)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,be,ve,b.width,b.height):se?s.renderbufferStorageMultisample(s.RENDERBUFFER,be,ve,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,ve,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ye,s.RENDERBUFFER,I)}else{const xe=b.textures;for(let ye=0;ye<xe.length;ye++){const ve=xe[ye],Ye=l.convert(ve.format,ve.colorSpace),be=l.convert(ve.type),Fe=L(ve.internalFormat,Ye,be,ve.colorSpace),ft=et(b);se&&st(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ft,Fe,b.width,b.height):st(b)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ft,Fe,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Fe,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function he(I,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,I),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xe=r.get(b.depthTexture);xe.__renderTarget=b,(!xe.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),pe(b.depthTexture,0);const ye=xe.__webglTexture,ve=et(b);if(b.depthTexture.format===Hs)st(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ye,0,ve):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ye,0);else if(b.depthTexture.format===qs)st(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ye,0,ve):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ye,0);else throw new Error("Unknown depthTexture format")}function Me(I){const b=r.get(I),se=I.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==I.depthTexture){const xe=I.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),xe){const ye=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,xe.removeEventListener("dispose",ye)};xe.addEventListener("dispose",ye),b.__depthDisposeCallback=ye}b.__boundDepthTexture=xe}if(I.depthTexture&&!b.__autoAllocateDepthBuffer){if(se)throw new Error("target.depthTexture not supported in Cube render targets");he(b.__webglFramebuffer,I)}else if(se){b.__webglDepthbuffer=[];for(let xe=0;xe<6;xe++)if(n.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[xe]),b.__webglDepthbuffer[xe]===void 0)b.__webglDepthbuffer[xe]=s.createRenderbuffer(),Q(b.__webglDepthbuffer[xe],I,!1);else{const ye=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ve=b.__webglDepthbuffer[xe];s.bindRenderbuffer(s.RENDERBUFFER,ve),s.framebufferRenderbuffer(s.FRAMEBUFFER,ye,s.RENDERBUFFER,ve)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),Q(b.__webglDepthbuffer,I,!1);else{const xe=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ye=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ye),s.framebufferRenderbuffer(s.FRAMEBUFFER,xe,s.RENDERBUFFER,ye)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Ce(I,b,se){const xe=r.get(I);b!==void 0&&J(xe.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),se!==void 0&&Me(I)}function Ze(I){const b=I.texture,se=r.get(I),xe=r.get(b);I.addEventListener("dispose",U);const ye=I.textures,ve=I.isWebGLCubeRenderTarget===!0,Ye=ye.length>1;if(Ye||(xe.__webglTexture===void 0&&(xe.__webglTexture=s.createTexture()),xe.__version=b.version,u.memory.textures++),ve){se.__webglFramebuffer=[];for(let be=0;be<6;be++)if(b.mipmaps&&b.mipmaps.length>0){se.__webglFramebuffer[be]=[];for(let Fe=0;Fe<b.mipmaps.length;Fe++)se.__webglFramebuffer[be][Fe]=s.createFramebuffer()}else se.__webglFramebuffer[be]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){se.__webglFramebuffer=[];for(let be=0;be<b.mipmaps.length;be++)se.__webglFramebuffer[be]=s.createFramebuffer()}else se.__webglFramebuffer=s.createFramebuffer();if(Ye)for(let be=0,Fe=ye.length;be<Fe;be++){const ft=r.get(ye[be]);ft.__webglTexture===void 0&&(ft.__webglTexture=s.createTexture(),u.memory.textures++)}if(I.samples>0&&st(I)===!1){se.__webglMultisampledFramebuffer=s.createFramebuffer(),se.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,se.__webglMultisampledFramebuffer);for(let be=0;be<ye.length;be++){const Fe=ye[be];se.__webglColorRenderbuffer[be]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,se.__webglColorRenderbuffer[be]);const ft=l.convert(Fe.format,Fe.colorSpace),we=l.convert(Fe.type),Be=L(Fe.internalFormat,ft,we,Fe.colorSpace,I.isXRRenderTarget===!0),tt=et(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,tt,Be,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,se.__webglColorRenderbuffer[be])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(se.__webglDepthRenderbuffer=s.createRenderbuffer(),Q(se.__webglDepthRenderbuffer,I,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ve){n.bindTexture(s.TEXTURE_CUBE_MAP,xe.__webglTexture),W(s.TEXTURE_CUBE_MAP,b);for(let be=0;be<6;be++)if(b.mipmaps&&b.mipmaps.length>0)for(let Fe=0;Fe<b.mipmaps.length;Fe++)J(se.__webglFramebuffer[be][Fe],I,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Fe);else J(se.__webglFramebuffer[be],I,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);S(b)&&x(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ye){for(let be=0,Fe=ye.length;be<Fe;be++){const ft=ye[be],we=r.get(ft);n.bindTexture(s.TEXTURE_2D,we.__webglTexture),W(s.TEXTURE_2D,ft),J(se.__webglFramebuffer,I,ft,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,0),S(ft)&&x(s.TEXTURE_2D)}n.unbindTexture()}else{let be=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(be=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(be,xe.__webglTexture),W(be,b),b.mipmaps&&b.mipmaps.length>0)for(let Fe=0;Fe<b.mipmaps.length;Fe++)J(se.__webglFramebuffer[Fe],I,b,s.COLOR_ATTACHMENT0,be,Fe);else J(se.__webglFramebuffer,I,b,s.COLOR_ATTACHMENT0,be,0);S(b)&&x(be),n.unbindTexture()}I.depthBuffer&&Me(I)}function Je(I){const b=I.textures;for(let se=0,xe=b.length;se<xe;se++){const ye=b[se];if(S(ye)){const ve=O(I),Ye=r.get(ye).__webglTexture;n.bindTexture(ve,Ye),x(ve),n.unbindTexture()}}}const Xe=[],k=[];function Rt(I){if(I.samples>0){if(st(I)===!1){const b=I.textures,se=I.width,xe=I.height;let ye=s.COLOR_BUFFER_BIT;const ve=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ye=r.get(I),be=b.length>1;if(be)for(let Fe=0;Fe<b.length;Fe++)n.bindFramebuffer(s.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer);for(let Fe=0;Fe<b.length;Fe++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ye|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ye|=s.STENCIL_BUFFER_BIT)),be){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ye.__webglColorRenderbuffer[Fe]);const ft=r.get(b[Fe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ft,0)}s.blitFramebuffer(0,0,se,xe,0,0,se,xe,ye,s.NEAREST),h===!0&&(Xe.length=0,k.length=0,Xe.push(s.COLOR_ATTACHMENT0+Fe),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Xe.push(ve),k.push(ve),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,k)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Xe))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),be)for(let Fe=0;Fe<b.length;Fe++){n.bindFramebuffer(s.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,Ye.__webglColorRenderbuffer[Fe]);const ft=r.get(b[Fe]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,ft,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&h){const b=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function et(I){return Math.min(a.maxSamples,I.samples)}function st(I){const b=r.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function He(I){const b=u.render.frame;v.get(I)!==b&&(v.set(I,b),I.update())}function yt(I,b){const se=I.colorSpace,xe=I.format,ye=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||se!==Ys&&se!==yr&&(Pt.getTransfer(se)===Lt?(xe!==ci||ye!==ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",se)),b}function Ue(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(p.width=I.naturalWidth||I.width,p.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(p.width=I.displayWidth,p.height=I.displayHeight):(p.width=I.width,p.height=I.height),p}this.allocateTextureUnit=ee,this.resetTextureUnits=oe,this.setTexture2D=pe,this.setTexture2DArray=de,this.setTexture3D=me,this.setTextureCube=G,this.rebindTextures=Ce,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=Rt,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=J,this.useMultisampledRTT=st}function sw(s,e){function n(r,a=yr){let l;const u=Pt.getTransfer(a);if(r===ji)return s.UNSIGNED_BYTE;if(r===rf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===sf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===dg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===cg)return s.BYTE;if(r===ug)return s.SHORT;if(r===jo)return s.UNSIGNED_SHORT;if(r===nf)return s.INT;if(r===Jr)return s.UNSIGNED_INT;if(r===Bi)return s.FLOAT;if(r===Wo)return s.HALF_FLOAT;if(r===fg)return s.ALPHA;if(r===hg)return s.RGB;if(r===ci)return s.RGBA;if(r===pg)return s.LUMINANCE;if(r===mg)return s.LUMINANCE_ALPHA;if(r===Hs)return s.DEPTH_COMPONENT;if(r===qs)return s.DEPTH_STENCIL;if(r===gg)return s.RED;if(r===of)return s.RED_INTEGER;if(r===vg)return s.RG;if(r===af)return s.RG_INTEGER;if(r===lf)return s.RGBA_INTEGER;if(r===Rl||r===bl||r===Pl||r===Dl)if(u===Lt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Rl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===bl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Pl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Dl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Rl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===bl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Pl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Dl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===yd||r===Sd||r===Md||r===Ed)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===yd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Sd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Md)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ed)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===wd||r===Td||r===Ad)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===wd||r===Td)return u===Lt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Ad)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Cd||r===Rd||r===bd||r===Pd||r===Dd||r===Ld||r===Nd||r===Id||r===Ud||r===Fd||r===Od||r===kd||r===zd||r===Bd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Cd)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Rd)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===bd)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Pd)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Dd)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ld)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Nd)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Id)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ud)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Fd)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Od)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===kd)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===zd)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Bd)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ll||r===Hd||r===Vd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Ll)return u===Lt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Hd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Vd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===_g||r===Gd||r===jd||r===Wd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Ll)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Gd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===jd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Wd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Xs?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}const ow=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,aw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class lw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new Fn,l=e.properties.get(a);l.__webglTexture=n.texture,(n.depthNear!==r.depthNear||n.depthFar!==r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new wr({vertexShader:ow,fragmentShader:aw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new zt(new $o(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class cw extends Zs{constructor(e,n){super();const r=this;let a=null,l=1,u=null,d="local-floor",h=1,p=null,v=null,_=null,y=null,M=null,E=null;const A=new lw,S=n.getContextAttributes();let x=null,O=null;const L=[],C=[],j=new rt;let B=null;const U=new jn;U.viewport=new Nt;const F=new jn;F.viewport=new Nt;const D=[U,F],R=new by;let H=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let re=L[Y];return re===void 0&&(re=new Yu,L[Y]=re),re.getTargetRaySpace()},this.getControllerGrip=function(Y){let re=L[Y];return re===void 0&&(re=new Yu,L[Y]=re),re.getGripSpace()},this.getHand=function(Y){let re=L[Y];return re===void 0&&(re=new Yu,L[Y]=re),re.getHandSpace()};function ee(Y){const re=C.indexOf(Y.inputSource);if(re===-1)return;const J=L[re];J!==void 0&&(J.update(Y.inputSource,Y.frame,p||u),J.dispatchEvent({type:Y.type,data:Y.inputSource}))}function ue(){a.removeEventListener("select",ee),a.removeEventListener("selectstart",ee),a.removeEventListener("selectend",ee),a.removeEventListener("squeeze",ee),a.removeEventListener("squeezestart",ee),a.removeEventListener("squeezeend",ee),a.removeEventListener("end",ue),a.removeEventListener("inputsourceschange",pe);for(let Y=0;Y<L.length;Y++){const re=C[Y];re!==null&&(C[Y]=null,L[Y].disconnect(re))}H=null,oe=null,A.reset(),e.setRenderTarget(x),M=null,y=null,_=null,a=null,O=null,ge.stop(),r.isPresenting=!1,e.setPixelRatio(B),e.setSize(j.width,j.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){l=Y,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){d=Y,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(Y){p=Y},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(Y){if(a=Y,a!==null){if(x=e.getRenderTarget(),a.addEventListener("select",ee),a.addEventListener("selectstart",ee),a.addEventListener("selectend",ee),a.addEventListener("squeeze",ee),a.addEventListener("squeezestart",ee),a.addEventListener("squeezeend",ee),a.addEventListener("end",ue),a.addEventListener("inputsourceschange",pe),S.xrCompatible!==!0&&await n.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(j),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let J=null,Q=null,he=null;S.depth&&(he=S.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,J=S.stencil?qs:Hs,Q=S.stencil?Xs:Jr);const Me={colorFormat:n.RGBA8,depthFormat:he,scaleFactor:l};_=new XRWebGLBinding(a,n),y=_.createProjectionLayer(Me),a.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),O=new Qr(y.textureWidth,y.textureHeight,{format:ci,type:ji,depthTexture:new Ng(y.textureWidth,y.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const J={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(a,n,J),a.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),O=new Qr(M.framebufferWidth,M.framebufferHeight,{format:ci,type:ji,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(h),p=null,u=await a.requestReferenceSpace(d),ge.setContext(a),ge.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function pe(Y){for(let re=0;re<Y.removed.length;re++){const J=Y.removed[re],Q=C.indexOf(J);Q>=0&&(C[Q]=null,L[Q].disconnect(J))}for(let re=0;re<Y.added.length;re++){const J=Y.added[re];let Q=C.indexOf(J);if(Q===-1){for(let Me=0;Me<L.length;Me++)if(Me>=C.length){C.push(J),Q=Me;break}else if(C[Me]===null){C[Me]=J,Q=Me;break}if(Q===-1)break}const he=L[Q];he&&he.connect(J)}}const de=new q,me=new q;function G(Y,re,J){de.setFromMatrixPosition(re.matrixWorld),me.setFromMatrixPosition(J.matrixWorld);const Q=de.distanceTo(me),he=re.projectionMatrix.elements,Me=J.projectionMatrix.elements,Ce=he[14]/(he[10]-1),Ze=he[14]/(he[10]+1),Je=(he[9]+1)/he[5],Xe=(he[9]-1)/he[5],k=(he[8]-1)/he[0],Rt=(Me[8]+1)/Me[0],et=Ce*k,st=Ce*Rt,He=Q/(-k+Rt),yt=He*-k;if(re.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(yt),Y.translateZ(He),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),he[10]===-1)Y.projectionMatrix.copy(re.projectionMatrix),Y.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const Ue=Ce+He,I=Ze+He,b=et-yt,se=st+(Q-yt),xe=Je*Ze/I*Ue,ye=Xe*Ze/I*Ue;Y.projectionMatrix.makePerspective(b,se,xe,ye,Ue,I),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function le(Y,re){re===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(re.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(a===null)return;let re=Y.near,J=Y.far;A.texture!==null&&(A.depthNear>0&&(re=A.depthNear),A.depthFar>0&&(J=A.depthFar)),R.near=F.near=U.near=re,R.far=F.far=U.far=J,(H!==R.near||oe!==R.far)&&(a.updateRenderState({depthNear:R.near,depthFar:R.far}),H=R.near,oe=R.far),U.layers.mask=Y.layers.mask|2,F.layers.mask=Y.layers.mask|4,R.layers.mask=U.layers.mask|F.layers.mask;const Q=Y.parent,he=R.cameras;le(R,Q);for(let Me=0;Me<he.length;Me++)le(he[Me],Q);he.length===2?G(R,U,F):R.projectionMatrix.copy(U.projectionMatrix),N(Y,R,Q)};function N(Y,re,J){J===null?Y.matrix.copy(re.matrixWorld):(Y.matrix.copy(J.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(re.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(re.projectionMatrix),Y.projectionMatrixInverse.copy(re.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Xd*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(y===null&&M===null))return h},this.setFoveation=function(Y){h=Y,y!==null&&(y.fixedFoveation=Y),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Y)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(R)};let w=null;function W(Y,re){if(v=re.getViewerPose(p||u),E=re,v!==null){const J=v.views;M!==null&&(e.setRenderTargetFramebuffer(O,M.framebuffer),e.setRenderTarget(O));let Q=!1;J.length!==R.cameras.length&&(R.cameras.length=0,Q=!0);for(let Ce=0;Ce<J.length;Ce++){const Ze=J[Ce];let Je=null;if(M!==null)Je=M.getViewport(Ze);else{const k=_.getViewSubImage(y,Ze);Je=k.viewport,Ce===0&&(e.setRenderTargetTextures(O,k.colorTexture,y.ignoreDepthValues?void 0:k.depthStencilTexture),e.setRenderTarget(O))}let Xe=D[Ce];Xe===void 0&&(Xe=new jn,Xe.layers.enable(Ce),Xe.viewport=new Nt,D[Ce]=Xe),Xe.matrix.fromArray(Ze.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(Ze.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(Je.x,Je.y,Je.width,Je.height),Ce===0&&(R.matrix.copy(Xe.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Q===!0&&R.cameras.push(Xe)}const he=a.enabledFeatures;if(he&&he.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&_){const Ce=_.getDepthInformation(J[0]);Ce&&Ce.isValid&&Ce.texture&&A.init(e,Ce,a.renderState)}}for(let J=0;J<L.length;J++){const Q=C[J],he=L[J];Q!==null&&he!==void 0&&he.update(Q,re,p||u)}w&&w(Y,re),re.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:re}),E=null}const ge=new Og;ge.setAnimationLoop(W),this.setAnimationLoop=function(Y){w=Y},this.dispose=function(){}}}const jr=new Si,uw=new Bt;function dw(s,e){function n(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function r(S,x){x.color.getRGB(S.fogColor.value,bg(s)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function a(S,x,O,L,C){x.isMeshBasicMaterial||x.isMeshLambertMaterial?l(S,x):x.isMeshToonMaterial?(l(S,x),_(S,x)):x.isMeshPhongMaterial?(l(S,x),v(S,x)):x.isMeshStandardMaterial?(l(S,x),y(S,x),x.isMeshPhysicalMaterial&&M(S,x,C)):x.isMeshMatcapMaterial?(l(S,x),E(S,x)):x.isMeshDepthMaterial?l(S,x):x.isMeshDistanceMaterial?(l(S,x),A(S,x)):x.isMeshNormalMaterial?l(S,x):x.isLineBasicMaterial?(u(S,x),x.isLineDashedMaterial&&d(S,x)):x.isPointsMaterial?h(S,x,O,L):x.isSpriteMaterial?p(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,n(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,n(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===Un&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,n(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===Un&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,n(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,n(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const O=e.get(x),L=O.envMap,C=O.envMapRotation;L&&(S.envMap.value=L,jr.copy(C),jr.x*=-1,jr.y*=-1,jr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(jr.y*=-1,jr.z*=-1),S.envMapRotation.value.setFromMatrix4(uw.makeRotationFromEuler(jr)),S.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,S.aoMapTransform))}function u(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,n(x.map,S.mapTransform))}function d(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function h(S,x,O,L){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*O,S.scale.value=L*.5,x.map&&(S.map.value=x.map,n(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function p(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,n(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function v(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function _(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function y(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function M(S,x,O){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Un&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=O.texture,S.transmissionSamplerSize.value.set(O.width,O.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,x){x.matcap&&(S.matcap.value=x.matcap)}function A(S,x){const O=e.get(x).light;S.referencePosition.value.setFromMatrixPosition(O.matrixWorld),S.nearDistance.value=O.shadow.camera.near,S.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function fw(s,e,n,r){let a={},l={},u=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(O,L){const C=L.program;r.uniformBlockBinding(O,C)}function p(O,L){let C=a[O.id];C===void 0&&(E(O),C=v(O),a[O.id]=C,O.addEventListener("dispose",S));const j=L.program;r.updateUBOMapping(O,j);const B=e.render.frame;l[O.id]!==B&&(y(O),l[O.id]=B)}function v(O){const L=_();O.__bindingPointIndex=L;const C=s.createBuffer(),j=O.__size,B=O.usage;return s.bindBuffer(s.UNIFORM_BUFFER,C),s.bufferData(s.UNIFORM_BUFFER,j,B),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,C),C}function _(){for(let O=0;O<d;O++)if(u.indexOf(O)===-1)return u.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(O){const L=a[O.id],C=O.uniforms,j=O.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let B=0,U=C.length;B<U;B++){const F=Array.isArray(C[B])?C[B]:[C[B]];for(let D=0,R=F.length;D<R;D++){const H=F[D];if(M(H,B,D,j)===!0){const oe=H.__offset,ee=Array.isArray(H.value)?H.value:[H.value];let ue=0;for(let pe=0;pe<ee.length;pe++){const de=ee[pe],me=A(de);typeof de=="number"||typeof de=="boolean"?(H.__data[0]=de,s.bufferSubData(s.UNIFORM_BUFFER,oe+ue,H.__data)):de.isMatrix3?(H.__data[0]=de.elements[0],H.__data[1]=de.elements[1],H.__data[2]=de.elements[2],H.__data[3]=0,H.__data[4]=de.elements[3],H.__data[5]=de.elements[4],H.__data[6]=de.elements[5],H.__data[7]=0,H.__data[8]=de.elements[6],H.__data[9]=de.elements[7],H.__data[10]=de.elements[8],H.__data[11]=0):(de.toArray(H.__data,ue),ue+=me.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,oe,H.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(O,L,C,j){const B=O.value,U=L+"_"+C;if(j[U]===void 0)return typeof B=="number"||typeof B=="boolean"?j[U]=B:j[U]=B.clone(),!0;{const F=j[U];if(typeof B=="number"||typeof B=="boolean"){if(F!==B)return j[U]=B,!0}else if(F.equals(B)===!1)return F.copy(B),!0}return!1}function E(O){const L=O.uniforms;let C=0;const j=16;for(let U=0,F=L.length;U<F;U++){const D=Array.isArray(L[U])?L[U]:[L[U]];for(let R=0,H=D.length;R<H;R++){const oe=D[R],ee=Array.isArray(oe.value)?oe.value:[oe.value];for(let ue=0,pe=ee.length;ue<pe;ue++){const de=ee[ue],me=A(de),G=C%j,le=G%me.boundary,N=G+le;C+=le,N!==0&&j-N<me.storage&&(C+=j-N),oe.__data=new Float32Array(me.storage/Float32Array.BYTES_PER_ELEMENT),oe.__offset=C,C+=me.storage}}}const B=C%j;return B>0&&(C+=j-B),O.__size=C,O.__cache={},this}function A(O){const L={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(L.boundary=4,L.storage=4):O.isVector2?(L.boundary=8,L.storage=8):O.isVector3||O.isColor?(L.boundary=16,L.storage=12):O.isVector4?(L.boundary=16,L.storage=16):O.isMatrix3?(L.boundary=48,L.storage=48):O.isMatrix4?(L.boundary=64,L.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),L}function S(O){const L=O.target;L.removeEventListener("dispose",S);const C=u.indexOf(L.__bindingPointIndex);u.splice(C,1),s.deleteBuffer(a[L.id]),delete a[L.id],delete l[L.id]}function x(){for(const O in a)s.deleteBuffer(a[O]);u=[],a={},l={}}return{bind:h,update:p,dispose:x}}class hw{constructor(e={}){const{canvas:n=Rx(),context:r=null,depth:a=!0,stencil:l=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=u;const E=new Uint32Array(4),A=new Int32Array(4);let S=null,x=null;const O=[],L=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Gn,this.toneMapping=Mr,this.toneMappingExposure=1;const C=this;let j=!1,B=0,U=0,F=null,D=-1,R=null;const H=new Nt,oe=new Nt;let ee=null;const ue=new xt(0);let pe=0,de=n.width,me=n.height,G=1,le=null,N=null;const w=new Nt(0,0,de,me),W=new Nt(0,0,de,me);let ge=!1;const Y=new uf;let re=!1,J=!1;this.transmissionResolutionScale=1;const Q=new Bt,he=new Bt,Me=new q,Ce=new Nt,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Je=!1;function Xe(){return F===null?G:1}let k=r;function Rt(P,K){return n.getContext(P,K)}try{const P={alpha:!0,depth:a,stencil:l,antialias:d,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${tf}`),n.addEventListener("webglcontextlost",_e,!1),n.addEventListener("webglcontextrestored",Ie,!1),n.addEventListener("webglcontextcreationerror",Ne,!1),k===null){const K="webgl2";if(k=Rt(K,P),k===null)throw Rt(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let et,st,He,yt,Ue,I,b,se,xe,ye,ve,Ye,be,Fe,ft,we,Be,tt,at,Ge,gt,ut,Dt,$;function Pe(){et=new E1(k),et.init(),ut=new sw(k,et),st=new g1(k,et,e,ut),He=new iw(k,et),st.reverseDepthBuffer&&y&&He.buffers.depth.setReversed(!0),yt=new A1(k),Ue=new jE,I=new rw(k,et,He,Ue,st,ut,yt),b=new _1(C),se=new M1(C),xe=new Ly(k),Dt=new p1(k,xe),ye=new w1(k,xe,yt,Dt),ve=new R1(k,ye,xe,yt),at=new C1(k,st,I),we=new v1(Ue),Ye=new GE(C,b,se,et,st,Dt,we),be=new dw(C,Ue),Fe=new XE,ft=new JE(et),tt=new h1(C,b,se,He,ve,M,h),Be=new tw(C,ve,st),$=new fw(k,yt,st,He),Ge=new m1(k,et,yt),gt=new T1(k,et,yt),yt.programs=Ye.programs,C.capabilities=st,C.extensions=et,C.properties=Ue,C.renderLists=Fe,C.shadowMap=Be,C.state=He,C.info=yt}Pe();const fe=new cw(C,k);this.xr=fe,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const P=et.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=et.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(P){P!==void 0&&(G=P,this.setSize(de,me,!1))},this.getSize=function(P){return P.set(de,me)},this.setSize=function(P,K,ae=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}de=P,me=K,n.width=Math.floor(P*G),n.height=Math.floor(K*G),ae===!0&&(n.style.width=P+"px",n.style.height=K+"px"),this.setViewport(0,0,P,K)},this.getDrawingBufferSize=function(P){return P.set(de*G,me*G).floor()},this.setDrawingBufferSize=function(P,K,ae){de=P,me=K,G=ae,n.width=Math.floor(P*ae),n.height=Math.floor(K*ae),this.setViewport(0,0,P,K)},this.getCurrentViewport=function(P){return P.copy(H)},this.getViewport=function(P){return P.copy(w)},this.setViewport=function(P,K,ae,ne){P.isVector4?w.set(P.x,P.y,P.z,P.w):w.set(P,K,ae,ne),He.viewport(H.copy(w).multiplyScalar(G).round())},this.getScissor=function(P){return P.copy(W)},this.setScissor=function(P,K,ae,ne){P.isVector4?W.set(P.x,P.y,P.z,P.w):W.set(P,K,ae,ne),He.scissor(oe.copy(W).multiplyScalar(G).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(P){He.setScissorTest(ge=P)},this.setOpaqueSort=function(P){le=P},this.setTransparentSort=function(P){N=P},this.getClearColor=function(P){return P.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor(...arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha(...arguments)},this.clear=function(P=!0,K=!0,ae=!0){let ne=0;if(P){let Z=!1;if(F!==null){const Ae=F.texture.format;Z=Ae===lf||Ae===af||Ae===of}if(Z){const Ae=F.texture.type,De=Ae===ji||Ae===Jr||Ae===jo||Ae===Xs||Ae===rf||Ae===sf,Oe=tt.getClearColor(),je=tt.getClearAlpha(),lt=Oe.r,ot=Oe.g,qe=Oe.b;De?(E[0]=lt,E[1]=ot,E[2]=qe,E[3]=je,k.clearBufferuiv(k.COLOR,0,E)):(A[0]=lt,A[1]=ot,A[2]=qe,A[3]=je,k.clearBufferiv(k.COLOR,0,A))}else ne|=k.COLOR_BUFFER_BIT}K&&(ne|=k.DEPTH_BUFFER_BIT),ae&&(ne|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",_e,!1),n.removeEventListener("webglcontextrestored",Ie,!1),n.removeEventListener("webglcontextcreationerror",Ne,!1),tt.dispose(),Fe.dispose(),ft.dispose(),Ue.dispose(),b.dispose(),se.dispose(),ve.dispose(),Dt.dispose(),$.dispose(),Ye.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",ts),fe.removeEventListener("sessionend",Xi),Mi.stop()};function _e(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),j=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),j=!1;const P=yt.autoReset,K=Be.enabled,ae=Be.autoUpdate,ne=Be.needsUpdate,Z=Be.type;Pe(),yt.autoReset=P,Be.enabled=K,Be.autoUpdate=ae,Be.needsUpdate=ne,Be.type=Z}function Ne(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function dt(P){const K=P.target;K.removeEventListener("dispose",dt),Ft(K)}function Ft(P){Zt(P),Ue.remove(P)}function Zt(P){const K=Ue.get(P).programs;K!==void 0&&(K.forEach(function(ae){Ye.releaseProgram(ae)}),P.isShaderMaterial&&Ye.releaseShaderCache(P))}this.renderBufferDirect=function(P,K,ae,ne,Z,Ae){K===null&&(K=Ze);const De=Z.isMesh&&Z.matrixWorld.determinant()<0,Oe=Jo(P,K,ae,ne,Z);He.setMaterial(ne,De);let je=ae.index,lt=1;if(ne.wireframe===!0){if(je=ye.getWireframeAttribute(ae),je===void 0)return;lt=2}const ot=ae.drawRange,qe=ae.attributes.position;let Mt=ot.start*lt,ht=(ot.start+ot.count)*lt;Ae!==null&&(Mt=Math.max(Mt,Ae.start*lt),ht=Math.min(ht,(Ae.start+Ae.count)*lt)),je!==null?(Mt=Math.max(Mt,0),ht=Math.min(ht,je.count)):qe!=null&&(Mt=Math.max(Mt,0),ht=Math.min(ht,qe.count));const Wt=ht-Mt;if(Wt<0||Wt===1/0)return;Dt.setup(Z,ne,Oe,ae,je);let Ht,Et=Ge;if(je!==null&&(Ht=xe.get(je),Et=gt,Et.setIndex(Ht)),Z.isMesh)ne.wireframe===!0?(He.setLineWidth(ne.wireframeLinewidth*Xe()),Et.setMode(k.LINES)):Et.setMode(k.TRIANGLES);else if(Z.isLine){let Qe=ne.linewidth;Qe===void 0&&(Qe=1),He.setLineWidth(Qe*Xe()),Z.isLineSegments?Et.setMode(k.LINES):Z.isLineLoop?Et.setMode(k.LINE_LOOP):Et.setMode(k.LINE_STRIP)}else Z.isPoints?Et.setMode(k.POINTS):Z.isSprite&&Et.setMode(k.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Wr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Et.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))Et.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Qe=Z._multiDrawStarts,Xt=Z._multiDrawCounts,St=Z._multiDrawCount,hn=je?xe.get(je).bytesPerElement:1,Yi=Ue.get(ne).currentProgram.getUniforms();for(let En=0;En<St;En++)Yi.setValue(k,"_gl_DrawID",En),Et.render(Qe[En]/hn,Xt[En])}else if(Z.isInstancedMesh)Et.renderInstances(Mt,Wt,Z.count);else if(ae.isInstancedBufferGeometry){const Qe=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Xt=Math.min(ae.instanceCount,Qe);Et.renderInstances(Mt,Wt,Xt)}else Et.render(Mt,Wt)};function Tt(P,K,ae){P.transparent===!0&&P.side===zi&&P.forceSinglePass===!1?(P.side=Un,P.needsUpdate=!0,ns(P,K,ae),P.side=Er,P.needsUpdate=!0,ns(P,K,ae),P.side=zi):ns(P,K,ae)}this.compile=function(P,K,ae=null){ae===null&&(ae=P),x=ft.get(ae),x.init(K),L.push(x),ae.traverseVisible(function(Z){Z.isLight&&Z.layers.test(K.layers)&&(x.pushLight(Z),Z.castShadow&&x.pushShadow(Z))}),P!==ae&&P.traverseVisible(function(Z){Z.isLight&&Z.layers.test(K.layers)&&(x.pushLight(Z),Z.castShadow&&x.pushShadow(Z))}),x.setupLights();const ne=new Set;return P.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Ae=Z.material;if(Ae)if(Array.isArray(Ae))for(let De=0;De<Ae.length;De++){const Oe=Ae[De];Tt(Oe,ae,Z),ne.add(Oe)}else Tt(Ae,ae,Z),ne.add(Ae)}),x=L.pop(),ne},this.compileAsync=function(P,K,ae=null){const ne=this.compile(P,K,ae);return new Promise(Z=>{function Ae(){if(ne.forEach(function(De){Ue.get(De).currentProgram.isReady()&&ne.delete(De)}),ne.size===0){Z(P);return}setTimeout(Ae,10)}et.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let Cn=null;function Mn(P){Cn&&Cn(P)}function ts(){Mi.stop()}function Xi(){Mi.start()}const Mi=new Og;Mi.setAnimationLoop(Mn),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(P){Cn=P,fe.setAnimationLoop(P),P===null?Mi.stop():Mi.start()},fe.addEventListener("sessionstart",ts),fe.addEventListener("sessionend",Xi),this.render=function(P,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(j===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(K),K=fe.getCamera()),P.isScene===!0&&P.onBeforeRender(C,P,K,F),x=ft.get(P,L.length),x.init(K),L.push(x),he.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),Y.setFromProjectionMatrix(he),J=this.localClippingEnabled,re=we.init(this.clippingPlanes,J),S=Fe.get(P,O.length),S.init(),O.push(S),fe.enabled===!0&&fe.isPresenting===!0){const Ae=C.xr.getDepthSensingMesh();Ae!==null&&Ei(Ae,K,-1/0,C.sortObjects)}Ei(P,K,0,C.sortObjects),S.finish(),C.sortObjects===!0&&S.sort(le,N),Je=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,Je&&tt.addToRenderList(S,P),this.info.render.frame++,re===!0&&we.beginShadows();const ae=x.state.shadowsArray;Be.render(ae,P,K),re===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset();const ne=S.opaque,Z=S.transmissive;if(x.setupLights(),K.isArrayCamera){const Ae=K.cameras;if(Z.length>0)for(let De=0,Oe=Ae.length;De<Oe;De++){const je=Ae[De];Ar(ne,Z,P,je)}Je&&tt.render(P);for(let De=0,Oe=Ae.length;De<Oe;De++){const je=Ae[De];Tr(S,P,je,je.viewport)}}else Z.length>0&&Ar(ne,Z,P,K),Je&&tt.render(P),Tr(S,P,K);F!==null&&U===0&&(I.updateMultisampleRenderTarget(F),I.updateRenderTargetMipmap(F)),P.isScene===!0&&P.onAfterRender(C,P,K),Dt.resetDefaultState(),D=-1,R=null,L.pop(),L.length>0?(x=L[L.length-1],re===!0&&we.setGlobalState(C.clippingPlanes,x.state.camera)):x=null,O.pop(),O.length>0?S=O[O.length-1]:S=null};function Ei(P,K,ae,ne){if(P.visible===!1)return;if(P.layers.test(K.layers)){if(P.isGroup)ae=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(K);else if(P.isLight)x.pushLight(P),P.castShadow&&x.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Y.intersectsSprite(P)){ne&&Ce.setFromMatrixPosition(P.matrixWorld).applyMatrix4(he);const De=ve.update(P),Oe=P.material;Oe.visible&&S.push(P,De,Oe,ae,Ce.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Y.intersectsObject(P))){const De=ve.update(P),Oe=P.material;if(ne&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Ce.copy(P.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),Ce.copy(De.boundingSphere.center)),Ce.applyMatrix4(P.matrixWorld).applyMatrix4(he)),Array.isArray(Oe)){const je=De.groups;for(let lt=0,ot=je.length;lt<ot;lt++){const qe=je[lt],Mt=Oe[qe.materialIndex];Mt&&Mt.visible&&S.push(P,De,Mt,ae,Ce.z,qe)}}else Oe.visible&&S.push(P,De,Oe,ae,Ce.z,null)}}const Ae=P.children;for(let De=0,Oe=Ae.length;De<Oe;De++)Ei(Ae[De],K,ae,ne)}function Tr(P,K,ae,ne){const Z=P.opaque,Ae=P.transmissive,De=P.transparent;x.setupLightsView(ae),re===!0&&we.setGlobalState(C.clippingPlanes,ae),ne&&He.viewport(H.copy(ne)),Z.length>0&&qi(Z,K,ae),Ae.length>0&&qi(Ae,K,ae),De.length>0&&qi(De,K,ae),He.buffers.depth.setTest(!0),He.buffers.depth.setMask(!0),He.buffers.color.setMask(!0),He.setPolygonOffset(!1)}function Ar(P,K,ae,ne){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[ne.id]===void 0&&(x.state.transmissionRenderTarget[ne.id]=new Qr(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?Wo:ji,minFilter:Zr,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Pt.workingColorSpace}));const Ae=x.state.transmissionRenderTarget[ne.id],De=ne.viewport||H;Ae.setSize(De.z*C.transmissionResolutionScale,De.w*C.transmissionResolutionScale);const Oe=C.getRenderTarget();C.setRenderTarget(Ae),C.getClearColor(ue),pe=C.getClearAlpha(),pe<1&&C.setClearColor(16777215,.5),C.clear(),Je&&tt.render(ae);const je=C.toneMapping;C.toneMapping=Mr;const lt=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),x.setupLightsView(ne),re===!0&&we.setGlobalState(C.clippingPlanes,ne),qi(P,ae,ne),I.updateMultisampleRenderTarget(Ae),I.updateRenderTargetMipmap(Ae),et.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let qe=0,Mt=K.length;qe<Mt;qe++){const ht=K[qe],Wt=ht.object,Ht=ht.geometry,Et=ht.material,Qe=ht.group;if(Et.side===zi&&Wt.layers.test(ne.layers)){const Xt=Et.side;Et.side=Un,Et.needsUpdate=!0,Ko(Wt,ae,ne,Ht,Et,Qe),Et.side=Xt,Et.needsUpdate=!0,ot=!0}}ot===!0&&(I.updateMultisampleRenderTarget(Ae),I.updateRenderTargetMipmap(Ae))}C.setRenderTarget(Oe),C.setClearColor(ue,pe),lt!==void 0&&(ne.viewport=lt),C.toneMapping=je}function qi(P,K,ae){const ne=K.isScene===!0?K.overrideMaterial:null;for(let Z=0,Ae=P.length;Z<Ae;Z++){const De=P[Z],Oe=De.object,je=De.geometry,lt=ne===null?De.material:ne,ot=De.group;Oe.layers.test(ae.layers)&&Ko(Oe,K,ae,je,lt,ot)}}function Ko(P,K,ae,ne,Z,Ae){P.onBeforeRender(C,K,ae,ne,Z,Ae),P.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),Z.onBeforeRender(C,K,ae,ne,P,Ae),Z.transparent===!0&&Z.side===zi&&Z.forceSinglePass===!1?(Z.side=Un,Z.needsUpdate=!0,C.renderBufferDirect(ae,K,ne,Z,P,Ae),Z.side=Er,Z.needsUpdate=!0,C.renderBufferDirect(ae,K,ne,Z,P,Ae),Z.side=zi):C.renderBufferDirect(ae,K,ne,Z,P,Ae),P.onAfterRender(C,K,ae,ne,Z,Ae)}function ns(P,K,ae){K.isScene!==!0&&(K=Ze);const ne=Ue.get(P),Z=x.state.lights,Ae=x.state.shadowsArray,De=Z.state.version,Oe=Ye.getParameters(P,Z.state,Ae,K,ae),je=Ye.getProgramCacheKey(Oe);let lt=ne.programs;ne.environment=P.isMeshStandardMaterial?K.environment:null,ne.fog=K.fog,ne.envMap=(P.isMeshStandardMaterial?se:b).get(P.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&P.envMap===null?K.environmentRotation:P.envMapRotation,lt===void 0&&(P.addEventListener("dispose",dt),lt=new Map,ne.programs=lt);let ot=lt.get(je);if(ot!==void 0){if(ne.currentProgram===ot&&ne.lightsStateVersion===De)return fi(P,Oe),ot}else Oe.uniforms=Ye.getUniforms(P),P.onBeforeCompile(Oe,C),ot=Ye.acquireProgram(Oe,je),lt.set(je,ot),ne.uniforms=Oe.uniforms;const qe=ne.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(qe.clippingPlanes=we.uniform),fi(P,Oe),ne.needsLights=Gl(P),ne.lightsStateVersion=De,ne.needsLights&&(qe.ambientLightColor.value=Z.state.ambient,qe.lightProbe.value=Z.state.probe,qe.directionalLights.value=Z.state.directional,qe.directionalLightShadows.value=Z.state.directionalShadow,qe.spotLights.value=Z.state.spot,qe.spotLightShadows.value=Z.state.spotShadow,qe.rectAreaLights.value=Z.state.rectArea,qe.ltc_1.value=Z.state.rectAreaLTC1,qe.ltc_2.value=Z.state.rectAreaLTC2,qe.pointLights.value=Z.state.point,qe.pointLightShadows.value=Z.state.pointShadow,qe.hemisphereLights.value=Z.state.hemi,qe.directionalShadowMap.value=Z.state.directionalShadowMap,qe.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,qe.spotShadowMap.value=Z.state.spotShadowMap,qe.spotLightMatrix.value=Z.state.spotLightMatrix,qe.spotLightMap.value=Z.state.spotLightMap,qe.pointShadowMap.value=Z.state.pointShadowMap,qe.pointShadowMatrix.value=Z.state.pointShadowMatrix),ne.currentProgram=ot,ne.uniformsList=null,ot}function Zo(P){if(P.uniformsList===null){const K=P.currentProgram.getUniforms();P.uniformsList=Nl.seqWithValue(K.seq,P.uniforms)}return P.uniformsList}function fi(P,K){const ae=Ue.get(P);ae.outputColorSpace=K.outputColorSpace,ae.batching=K.batching,ae.batchingColor=K.batchingColor,ae.instancing=K.instancing,ae.instancingColor=K.instancingColor,ae.instancingMorph=K.instancingMorph,ae.skinning=K.skinning,ae.morphTargets=K.morphTargets,ae.morphNormals=K.morphNormals,ae.morphColors=K.morphColors,ae.morphTargetsCount=K.morphTargetsCount,ae.numClippingPlanes=K.numClippingPlanes,ae.numIntersection=K.numClipIntersection,ae.vertexAlphas=K.vertexAlphas,ae.vertexTangents=K.vertexTangents,ae.toneMapping=K.toneMapping}function Jo(P,K,ae,ne,Z){K.isScene!==!0&&(K=Ze),I.resetTextureUnits();const Ae=K.fog,De=ne.isMeshStandardMaterial?K.environment:null,Oe=F===null?C.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Ys,je=(ne.isMeshStandardMaterial?se:b).get(ne.envMap||De),lt=ne.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,ot=!!ae.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),qe=!!ae.morphAttributes.position,Mt=!!ae.morphAttributes.normal,ht=!!ae.morphAttributes.color;let Wt=Mr;ne.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Wt=C.toneMapping);const Ht=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Et=Ht!==void 0?Ht.length:0,Qe=Ue.get(ne),Xt=x.state.lights;if(re===!0&&(J===!0||P!==R)){const cn=P===R&&ne.id===D;we.setState(ne,P,cn)}let St=!1;ne.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==Xt.state.version||Qe.outputColorSpace!==Oe||Z.isBatchedMesh&&Qe.batching===!1||!Z.isBatchedMesh&&Qe.batching===!0||Z.isBatchedMesh&&Qe.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Qe.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Qe.instancing===!1||!Z.isInstancedMesh&&Qe.instancing===!0||Z.isSkinnedMesh&&Qe.skinning===!1||!Z.isSkinnedMesh&&Qe.skinning===!0||Z.isInstancedMesh&&Qe.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Qe.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Qe.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Qe.instancingMorph===!1&&Z.morphTexture!==null||Qe.envMap!==je||ne.fog===!0&&Qe.fog!==Ae||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==we.numPlanes||Qe.numIntersection!==we.numIntersection)||Qe.vertexAlphas!==lt||Qe.vertexTangents!==ot||Qe.morphTargets!==qe||Qe.morphNormals!==Mt||Qe.morphColors!==ht||Qe.toneMapping!==Wt||Qe.morphTargetsCount!==Et)&&(St=!0):(St=!0,Qe.__version=ne.version);let hn=Qe.currentProgram;St===!0&&(hn=ns(ne,K,Z));let Yi=!1,En=!1,wi=!1;const It=hn.getUniforms(),pn=Qe.uniforms;if(He.useProgram(hn.program)&&(Yi=!0,En=!0,wi=!0),ne.id!==D&&(D=ne.id,En=!0),Yi||R!==P){He.buffers.depth.getReversed()?(Q.copy(P.projectionMatrix),Px(Q),Dx(Q),It.setValue(k,"projectionMatrix",Q)):It.setValue(k,"projectionMatrix",P.projectionMatrix),It.setValue(k,"viewMatrix",P.matrixWorldInverse);const rn=It.map.cameraPosition;rn!==void 0&&rn.setValue(k,Me.setFromMatrixPosition(P.matrixWorld)),st.logarithmicDepthBuffer&&It.setValue(k,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&It.setValue(k,"isOrthographic",P.isOrthographicCamera===!0),R!==P&&(R=P,En=!0,wi=!0)}if(Z.isSkinnedMesh){It.setOptional(k,Z,"bindMatrix"),It.setOptional(k,Z,"bindMatrixInverse");const cn=Z.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),It.setValue(k,"boneTexture",cn.boneTexture,I))}Z.isBatchedMesh&&(It.setOptional(k,Z,"batchingTexture"),It.setValue(k,"batchingTexture",Z._matricesTexture,I),It.setOptional(k,Z,"batchingIdTexture"),It.setValue(k,"batchingIdTexture",Z._indirectTexture,I),It.setOptional(k,Z,"batchingColorTexture"),Z._colorsTexture!==null&&It.setValue(k,"batchingColorTexture",Z._colorsTexture,I));const nn=ae.morphAttributes;if((nn.position!==void 0||nn.normal!==void 0||nn.color!==void 0)&&at.update(Z,ae,hn),(En||Qe.receiveShadow!==Z.receiveShadow)&&(Qe.receiveShadow=Z.receiveShadow,It.setValue(k,"receiveShadow",Z.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(pn.envMap.value=je,pn.flipEnvMap.value=je.isCubeTexture&&je.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&K.environment!==null&&(pn.envMapIntensity.value=K.environmentIntensity),En&&(It.setValue(k,"toneMappingExposure",C.toneMappingExposure),Qe.needsLights&&Qo(pn,wi),Ae&&ne.fog===!0&&be.refreshFogUniforms(pn,Ae),be.refreshMaterialUniforms(pn,ne,G,me,x.state.transmissionRenderTarget[P.id]),Nl.upload(k,Zo(Qe),pn,I)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Nl.upload(k,Zo(Qe),pn,I),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&It.setValue(k,"center",Z.center),It.setValue(k,"modelViewMatrix",Z.modelViewMatrix),It.setValue(k,"normalMatrix",Z.normalMatrix),It.setValue(k,"modelMatrix",Z.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const cn=ne.uniformsGroups;for(let rn=0,At=cn.length;rn<At;rn++){const hi=cn[rn];$.update(hi,hn),$.bind(hi,hn)}}return hn}function Qo(P,K){P.ambientLightColor.needsUpdate=K,P.lightProbe.needsUpdate=K,P.directionalLights.needsUpdate=K,P.directionalLightShadows.needsUpdate=K,P.pointLights.needsUpdate=K,P.pointLightShadows.needsUpdate=K,P.spotLights.needsUpdate=K,P.spotLightShadows.needsUpdate=K,P.rectAreaLights.needsUpdate=K,P.hemisphereLights.needsUpdate=K}function Gl(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(P,K,ae){Ue.get(P.texture).__webglTexture=K,Ue.get(P.depthTexture).__webglTexture=ae;const ne=Ue.get(P);ne.__hasExternalTextures=!0,ne.__autoAllocateDepthBuffer=ae===void 0,ne.__autoAllocateDepthBuffer||et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,K){const ae=Ue.get(P);ae.__webglFramebuffer=K,ae.__useDefaultFramebuffer=K===void 0};const ea=k.createFramebuffer();this.setRenderTarget=function(P,K=0,ae=0){F=P,B=K,U=ae;let ne=!0,Z=null,Ae=!1,De=!1;if(P){const je=Ue.get(P);if(je.__useDefaultFramebuffer!==void 0)He.bindFramebuffer(k.FRAMEBUFFER,null),ne=!1;else if(je.__webglFramebuffer===void 0)I.setupRenderTarget(P);else if(je.__hasExternalTextures)I.rebindTextures(P,Ue.get(P.texture).__webglTexture,Ue.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const qe=P.depthTexture;if(je.__boundDepthTexture!==qe){if(qe!==null&&Ue.has(qe)&&(P.width!==qe.image.width||P.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(P)}}const lt=P.texture;(lt.isData3DTexture||lt.isDataArrayTexture||lt.isCompressedArrayTexture)&&(De=!0);const ot=Ue.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(ot[K])?Z=ot[K][ae]:Z=ot[K],Ae=!0):P.samples>0&&I.useMultisampledRTT(P)===!1?Z=Ue.get(P).__webglMultisampledFramebuffer:Array.isArray(ot)?Z=ot[ae]:Z=ot,H.copy(P.viewport),oe.copy(P.scissor),ee=P.scissorTest}else H.copy(w).multiplyScalar(G).floor(),oe.copy(W).multiplyScalar(G).floor(),ee=ge;if(ae!==0&&(Z=ea),He.bindFramebuffer(k.FRAMEBUFFER,Z)&&ne&&He.drawBuffers(P,Z),He.viewport(H),He.scissor(oe),He.setScissorTest(ee),Ae){const je=Ue.get(P.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+K,je.__webglTexture,ae)}else if(De){const je=Ue.get(P.texture),lt=K;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,je.__webglTexture,ae,lt)}else if(P!==null&&ae!==0){const je=Ue.get(P.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,je.__webglTexture,ae)}D=-1},this.readRenderTargetPixels=function(P,K,ae,ne,Z,Ae,De){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=Ue.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&De!==void 0&&(Oe=Oe[De]),Oe){He.bindFramebuffer(k.FRAMEBUFFER,Oe);try{const je=P.texture,lt=je.format,ot=je.type;if(!st.textureFormatReadable(lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!st.textureTypeReadable(ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=P.width-ne&&ae>=0&&ae<=P.height-Z&&k.readPixels(K,ae,ne,Z,ut.convert(lt),ut.convert(ot),Ae)}finally{const je=F!==null?Ue.get(F).__webglFramebuffer:null;He.bindFramebuffer(k.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(P,K,ae,ne,Z,Ae,De){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=Ue.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&De!==void 0&&(Oe=Oe[De]),Oe){const je=P.texture,lt=je.format,ot=je.type;if(!st.textureFormatReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!st.textureTypeReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(K>=0&&K<=P.width-ne&&ae>=0&&ae<=P.height-Z){He.bindFramebuffer(k.FRAMEBUFFER,Oe);const qe=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,qe),k.bufferData(k.PIXEL_PACK_BUFFER,Ae.byteLength,k.STREAM_READ),k.readPixels(K,ae,ne,Z,ut.convert(lt),ut.convert(ot),0);const Mt=F!==null?Ue.get(F).__webglFramebuffer:null;He.bindFramebuffer(k.FRAMEBUFFER,Mt);const ht=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await bx(k,ht,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,qe),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Ae),k.deleteBuffer(qe),k.deleteSync(ht),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,K=null,ae=0){P.isTexture!==!0&&(Wr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),K=arguments[0]||null,P=arguments[1]);const ne=Math.pow(2,-ae),Z=Math.floor(P.image.width*ne),Ae=Math.floor(P.image.height*ne),De=K!==null?K.x:0,Oe=K!==null?K.y:0;I.setTexture2D(P,0),k.copyTexSubImage2D(k.TEXTURE_2D,ae,0,0,De,Oe,Z,Ae),He.unbindTexture()};const ta=k.createFramebuffer(),na=k.createFramebuffer();this.copyTextureToTexture=function(P,K,ae=null,ne=null,Z=0,Ae=null){P.isTexture!==!0&&(Wr("WebGLRenderer: copyTextureToTexture function signature has changed."),ne=arguments[0]||null,P=arguments[1],K=arguments[2],Ae=arguments[3]||0,ae=null),Ae===null&&(Z!==0?(Wr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ae=Z,Z=0):Ae=0);let De,Oe,je,lt,ot,qe,Mt,ht,Wt;const Ht=P.isCompressedTexture?P.mipmaps[Ae]:P.image;if(ae!==null)De=ae.max.x-ae.min.x,Oe=ae.max.y-ae.min.y,je=ae.isBox3?ae.max.z-ae.min.z:1,lt=ae.min.x,ot=ae.min.y,qe=ae.isBox3?ae.min.z:0;else{const nn=Math.pow(2,-Z);De=Math.floor(Ht.width*nn),Oe=Math.floor(Ht.height*nn),P.isDataArrayTexture?je=Ht.depth:P.isData3DTexture?je=Math.floor(Ht.depth*nn):je=1,lt=0,ot=0,qe=0}ne!==null?(Mt=ne.x,ht=ne.y,Wt=ne.z):(Mt=0,ht=0,Wt=0);const Et=ut.convert(K.format),Qe=ut.convert(K.type);let Xt;K.isData3DTexture?(I.setTexture3D(K,0),Xt=k.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(I.setTexture2DArray(K,0),Xt=k.TEXTURE_2D_ARRAY):(I.setTexture2D(K,0),Xt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,K.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,K.unpackAlignment);const St=k.getParameter(k.UNPACK_ROW_LENGTH),hn=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Yi=k.getParameter(k.UNPACK_SKIP_PIXELS),En=k.getParameter(k.UNPACK_SKIP_ROWS),wi=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Ht.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ht.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,lt),k.pixelStorei(k.UNPACK_SKIP_ROWS,ot),k.pixelStorei(k.UNPACK_SKIP_IMAGES,qe);const It=P.isDataArrayTexture||P.isData3DTexture,pn=K.isDataArrayTexture||K.isData3DTexture;if(P.isDepthTexture){const nn=Ue.get(P),cn=Ue.get(K),rn=Ue.get(nn.__renderTarget),At=Ue.get(cn.__renderTarget);He.bindFramebuffer(k.READ_FRAMEBUFFER,rn.__webglFramebuffer),He.bindFramebuffer(k.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let hi=0;hi<je;hi++)It&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ue.get(P).__webglTexture,Z,qe+hi),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ue.get(K).__webglTexture,Ae,Wt+hi)),k.blitFramebuffer(lt,ot,De,Oe,Mt,ht,De,Oe,k.DEPTH_BUFFER_BIT,k.NEAREST);He.bindFramebuffer(k.READ_FRAMEBUFFER,null),He.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(Z!==0||P.isRenderTargetTexture||Ue.has(P)){const nn=Ue.get(P),cn=Ue.get(K);He.bindFramebuffer(k.READ_FRAMEBUFFER,ta),He.bindFramebuffer(k.DRAW_FRAMEBUFFER,na);for(let rn=0;rn<je;rn++)It?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,nn.__webglTexture,Z,qe+rn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,nn.__webglTexture,Z),pn?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,cn.__webglTexture,Ae,Wt+rn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,cn.__webglTexture,Ae),Z!==0?k.blitFramebuffer(lt,ot,De,Oe,Mt,ht,De,Oe,k.COLOR_BUFFER_BIT,k.NEAREST):pn?k.copyTexSubImage3D(Xt,Ae,Mt,ht,Wt+rn,lt,ot,De,Oe):k.copyTexSubImage2D(Xt,Ae,Mt,ht,lt,ot,De,Oe);He.bindFramebuffer(k.READ_FRAMEBUFFER,null),He.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else pn?P.isDataTexture||P.isData3DTexture?k.texSubImage3D(Xt,Ae,Mt,ht,Wt,De,Oe,je,Et,Qe,Ht.data):K.isCompressedArrayTexture?k.compressedTexSubImage3D(Xt,Ae,Mt,ht,Wt,De,Oe,je,Et,Ht.data):k.texSubImage3D(Xt,Ae,Mt,ht,Wt,De,Oe,je,Et,Qe,Ht):P.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Ae,Mt,ht,De,Oe,Et,Qe,Ht.data):P.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Ae,Mt,ht,Ht.width,Ht.height,Et,Ht.data):k.texSubImage2D(k.TEXTURE_2D,Ae,Mt,ht,De,Oe,Et,Qe,Ht);k.pixelStorei(k.UNPACK_ROW_LENGTH,St),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,hn),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Yi),k.pixelStorei(k.UNPACK_SKIP_ROWS,En),k.pixelStorei(k.UNPACK_SKIP_IMAGES,wi),Ae===0&&K.generateMipmaps&&k.generateMipmap(Xt),He.unbindTexture()},this.copyTextureToTexture3D=function(P,K,ae=null,ne=null,Z=0){return P.isTexture!==!0&&(Wr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ae=arguments[0]||null,ne=arguments[1]||null,P=arguments[2],K=arguments[3],Z=arguments[4]||0),Wr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,K,ae,ne,Z)},this.initRenderTarget=function(P){Ue.get(P).__webglFramebuffer===void 0&&I.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?I.setTextureCube(P,0):P.isData3DTexture?I.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?I.setTexture2DArray(P,0):I.setTexture2D(P,0),He.unbindTexture()},this.resetState=function(){B=0,U=0,F=null,He.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=Pt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Pt._getUnpackColorSpace()}}function Vg({modelType:s="smartphone",primaryColor:e="#1e293b",secondaryColor:n="#38bdf8",accentColor:r="#0f172a",metalness:a=.8,roughness:l=.25,isWireframe:u=!1,autoRotate:d=!0,height:h="380px"}){const p=ze.useRef(null);return ze.useEffect(()=>{const v=p.current;if(!v)return;const _=v.clientWidth||400,y=v.clientHeight||380,M=new ny,E=new jn(45,_/y,.1,1e3);E.position.set(0,0,7);const A=new hw({antialias:!0,alpha:!0});A.setSize(_,y),A.setPixelRatio(Math.min(window.devicePixelRatio,2)),A.shadowMap.enabled=!0,A.shadowMap.type=og,A.outputColorSpace=Gn,v.appendChild(A.domElement);const S=new Ry(16777215,1.2);M.add(S);const x=new Cy(16777215,2);x.position.set(5,8,5),x.castShadow=!0,M.add(x);const O=new Em(43263,2.5,20);O.position.set(-6,3,-4),M.add(O);const L=new Em(16755268,1.8,20);L.position.set(6,-3,3),M.add(L);const C=new zo;M.add(C);const j=new Bo({color:new xt(e),metalness:a,roughness:l,wireframe:u}),B=new Bo({color:new xt(n),metalness:.9,roughness:.1,wireframe:u}),U=new Bo({color:new xt(r),metalness:.5,roughness:.5,wireframe:u});if(s==="smartphone"){const J=new Vi(2.2,4.4,.22,16,16,4),Q=new zt(J,j);Q.castShadow=!0,C.add(Q);const he=new $o(2,4.2),Me=new My({color:330516,roughness:.05,metalness:.1,transmission:.6,thickness:.2,reflectivity:.9}),Ce=new zt(he,Me);Ce.position.z=.12,C.add(Ce);const Ze=new Vi(.8,1.4,.12),Je=new zt(Ze,U);Je.position.set(.5,1.2,-.14),C.add(Je);for(let Xe=0;Xe<3;Xe++){const k=new _i(.16,.16,.16,32),Rt=new Bo({color:1118481,metalness:.95,roughness:.1}),et=new zt(k,Rt);et.rotation.x=Math.PI/2,et.position.set(.5,1.6-Xe*.4,-.16),C.add(et)}}else if(s==="headphone"){const J=new ff(new q(-1.6,-.2,0),new q(0,2.2,0),new q(1.6,-.2,0)),Q=new hf(J,64,.14,16,!1),he=new zt(Q,j);C.add(he),[-1.65,1.65].forEach((Me,Ce)=>{const Ze=new _i(.7,.7,.45,32),Je=new zt(Ze,B);Je.rotation.z=Math.PI/2,Je.position.set(Me,-.4,0),C.add(Je);const Xe=new kl(.65,.18,16,32),k=new zt(Xe,U);k.rotation.y=Math.PI/2,k.position.set(Me+(Ce===0?.2:-.2),-.4,0),C.add(k)})}else if(s==="can"){const J=new _i(1.2,1.2,3.4,48),Q=new zt(J,j);Q.castShadow=!0,C.add(Q);const he=new kl(1.2,.08,16,48),Me=new zt(he,B);Me.rotation.x=Math.PI/2,Me.position.y=1.7,C.add(Me);const Ce=Me.clone();Ce.position.y=-1.7,C.add(Ce)}else if(s==="bottle"){const J=new _i(1.1,1.1,2.5,32),Q=new zt(J,j);Q.position.y=-.5,C.add(Q);const he=new _i(.4,1,1.2,32),Me=new zt(he,j);Me.position.y=1.2,C.add(Me);const Ce=new _i(.45,.45,.5,32),Ze=new zt(Ce,B);Ze.position.y=1.95,C.add(Ze)}else if(s==="jar"){const J=new _i(1.3,1.25,2.4,32),Q=new zt(J,j);C.add(Q);const he=new _i(1.35,1.35,.4,32),Me=new zt(he,B);Me.position.y=1.35,C.add(Me)}else{const J=new Vi(2.4,3.2,1.5),Q=new zt(J,j);Q.castShadow=!0,C.add(Q);const he=new Vi(2.45,1,1.55),Me=new zt(he,B);C.add(Me)}const F=45,D=new Jn,R=new Float32Array(F*3);for(let J=0;J<F*3;J+=3)R[J]=(Math.random()-.5)*12,R[J+1]=(Math.random()-.5)*10,R[J+2]=(Math.random()-.5)*8;D.setAttribute("position",new di(R,3));const H=new Lg({color:45147,size:.12,transparent:!0,opacity:.6}),oe=new sy(D,H);M.add(oe);let ee=!1,ue={x:0,y:0},pe={x:0,y:0};const de=J=>{ee=!0,ue={x:J.clientX,y:J.clientY}},me=J=>{if(!ee)return;const Q=J.clientX-ue.x,he=J.clientY-ue.y;pe.y=Q*.008,pe.x=he*.008,C.rotation.y+=pe.y,C.rotation.x+=pe.x,ue={x:J.clientX,y:J.clientY}},G=()=>{ee=!1},le=J=>{J.touches.length===1&&(ee=!0,ue={x:J.touches[0].clientX,y:J.touches[0].clientY})},N=J=>{if(!ee||J.touches.length!==1)return;const Q=J.touches[0].clientX-ue.x,he=J.touches[0].clientY-ue.y;C.rotation.y+=Q*.008,C.rotation.x+=he*.008,ue={x:J.touches[0].clientX,y:J.touches[0].clientY}},w=A.domElement;w.addEventListener("mousedown",de),window.addEventListener("mousemove",me),window.addEventListener("mouseup",G),w.addEventListener("touchstart",le),w.addEventListener("touchmove",N),w.addEventListener("touchend",G);let W,ge=new Py;const Y=()=>{W=requestAnimationFrame(Y);const J=ge.getElapsedTime();ee||(d&&(C.rotation.y+=.012),C.position.y=Math.sin(J*2)*.12),oe.rotation.y=J*.04,A.render(M,E)};Y();const re=()=>{if(!p.current)return;const J=p.current.clientWidth,Q=p.current.clientHeight;E.aspect=J/Q,E.updateProjectionMatrix(),A.setSize(J,Q)};return window.addEventListener("resize",re),()=>{cancelAnimationFrame(W),window.removeEventListener("resize",re),w.removeEventListener("mousedown",de),window.removeEventListener("mousemove",me),window.removeEventListener("mouseup",G),w.removeEventListener("touchstart",le),w.removeEventListener("touchmove",N),w.removeEventListener("touchend",G),v&&A.domElement&&v.removeChild(A.domElement),A.dispose()}},[s,e,n,r,a,l,u,d]),g.jsx("div",{ref:p,className:"three-canvas-container",style:{height:h}})}function pw({featuredProduct:s,onInspect3D:e}){var E;const{addToCart:n}=es(),[r,a]=ze.useState("#1e293b"),[l,u]=ze.useState("#38bdf8"),[d,h]=ze.useState(!1),[p,v]=ze.useState(!0),_=[{label:"Titanium Slate",primary:"#1e293b",secondary:"#38bdf8"},{label:"DMart Emerald",primary:"#00733d",secondary:"#facc15"},{label:"Royal Sapphire",primary:"#1d4ed8",secondary:"#93c5fd"},{label:"Sunset Amber",primary:"#b45309",secondary:"#fef08a"}],y=A=>{a(A.primary),u(A.secondary)},M=()=>{s&&n({...s,selectedColor:r})};return g.jsx("section",{className:"hero-section",children:g.jsx("div",{className:"container",children:g.jsxs("div",{className:"hero-grid",children:[g.jsxs("div",{children:[g.jsxs("div",{className:"hero-tag",children:[g.jsx(tg,{size:16})," NEXT-GEN 3D SHOPPING EXPERIENCE"]}),g.jsxs("h1",{className:"hero-title",children:["Shop Daily Essentials & Tech with"," ",g.jsx("span",{className:"hero-title-highlight",children:"Interactive 3D Views"})]}),g.jsx("p",{className:"hero-desc",children:"Experience the future of commercial retail. Inspect products in 360-degree 3D, customize colors, get unbeatable DMart savings, and checkout seamlessly with PhonePe, Google Pay, or Cash on Delivery."}),g.jsxs("div",{className:"hero-features-chips",children:[g.jsxs("div",{className:"feature-chip",children:[g.jsx("span",{children:"🛡️"})," 100% Genuine Quality"]}),g.jsxs("div",{className:"feature-chip",children:[g.jsx("span",{children:"⚡"})," Express 24-Hour Delivery"]}),g.jsxs("div",{className:"feature-chip",children:[g.jsx("span",{children:"💰"})," Min. 20% Off Every Day"]}),g.jsxs("div",{className:"feature-chip",children:[g.jsx("span",{children:"🤖"})," AI Assistant Guided"]})]}),g.jsxs("div",{className:"hero-cta-group",children:[g.jsxs("button",{className:"btn-primary-lg",onClick:M,children:[g.jsx(zl,{size:20}),"Add Featured to Cart (₹",(s==null?void 0:s.price)||24999,")"]}),s&&g.jsxs("button",{className:"btn-secondary-lg",onClick:()=>e(s),children:[g.jsx(Zd,{size:18})," Inspect 3D"]})]})]}),g.jsx("div",{children:g.jsxs("div",{className:"three-hero-card",children:[g.jsxs("div",{className:"three-overlay-controls",children:[g.jsxs("button",{className:"three-control-btn",onClick:()=>v(!p),title:"Toggle Auto Rotation",children:[g.jsx(eg,{size:14,className:p?"spin-icon":""}),p?"Rotating":"Paused"]}),g.jsxs("button",{className:"three-control-btn",onClick:()=>h(!d),title:"Toggle Wireframe",children:[g.jsx(Qm,{size:14}),d?"Solid":"3D Wire"]})]}),g.jsx("div",{className:"three-drag-hint",children:g.jsx("span",{children:"🖱️ Drag to rotate 360°"})}),g.jsx(Vg,{modelType:((E=s==null?void 0:s.model3d)==null?void 0:E.type)||"smartphone",primaryColor:r,secondaryColor:l,isWireframe:d,autoRotate:p,height:"390px"}),g.jsxs("div",{className:"three-hero-info",children:[g.jsxs("div",{children:[g.jsx("div",{style:{fontSize:"0.8rem",fontWeight:700,color:"var(--primary)"},children:(s==null?void 0:s.badge)||"3D FLAGSHIP"}),g.jsx("div",{style:{fontWeight:800,fontSize:"1.05rem",color:"#0f172a"},children:(s==null?void 0:s.name)||"Galaxy Ultra 5G Pro"}),g.jsxs("div",{style:{fontSize:"0.82rem",color:"#64748b"},children:["DMart Price: ",g.jsxs("strong",{style:{color:"#0f172a"},children:["₹",(s==null?void 0:s.price)||24999]}),g.jsxs("span",{style:{textDecoration:"line-through",marginLeft:"6px"},children:["₹",(s==null?void 0:s.mrp)||29999]})]})]}),g.jsxs("div",{children:[g.jsx("div",{style:{fontSize:"0.72rem",fontWeight:700,color:"#64748b",marginBottom:"4px",textAlign:"right"},children:"CUSTOMIZE COLOR"}),g.jsx("div",{className:"three-color-picker",children:_.map((A,S)=>g.jsx("div",{className:`color-dot ${r===A.primary?"active":""}`,style:{backgroundColor:A.primary},onClick:()=>y(A),title:A.label},S))})]})]})]})})]})})})}function mw({product:s,onInspect3D:e}){const{items:n,addToCart:r,updateQuantity:a}=es(),l=n.find(h=>h._id===s._id),u=l?l.quantity:0,d=(s.mrp||s.price)-s.price;return g.jsxs("div",{className:"product-card",children:[g.jsxs("div",{className:"product-card-media",children:[s.badge&&g.jsx("div",{className:"badge-position",children:g.jsx("span",{className:`badge ${s.badge.includes("OFF")||s.badge.includes("HOT")?"badge-sale":s.badge.includes("SAVER")||s.badge.includes("BEST")?"badge-gold":"badge-primary"}`,children:s.badge})}),g.jsx("img",{src:s.imageUrl||"https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&auto=format&fit=crop&q=80",alt:s.name,className:"product-card-img",loading:"lazy"}),g.jsxs("button",{className:"btn-3d-inspect-trigger",onClick:()=>e(s),title:"Inspect in 3D",children:[g.jsx(Zd,{size:13}),g.jsx("span",{children:"3D View"})]})]}),g.jsxs("div",{className:"product-card-body",children:[g.jsxs("div",{className:"product-category-brand",children:[g.jsx("span",{children:s.brand}),g.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"2px",color:"#f59e0b"},children:[g.jsx(b_,{size:12,fill:"#f59e0b"})," ",s.rating||4.5]})]}),g.jsx("h3",{className:"product-title",title:s.name,children:s.name}),g.jsx("div",{className:"product-unit",children:s.unit||"1 pc"}),g.jsxs("div",{className:"product-pricing-row",children:[g.jsxs("span",{className:"price-current",children:["₹",s.price]}),s.mrp&&s.mrp>s.price&&g.jsxs("span",{className:"price-mrp",children:["₹",s.mrp]}),s.discountPercentage>0&&g.jsxs("span",{className:"price-discount-pill",children:[s.discountPercentage,"% OFF"]})]}),d>0&&g.jsxs("div",{className:"product-savings-note",children:["DMart Savings: ₹",d]}),g.jsx("div",{className:"product-card-actions",children:u===0?g.jsxs("button",{className:"btn-add-cart",onClick:()=>r(s,1),children:[g.jsx(Il,{size:16})," Add to Cart"]}):g.jsxs("div",{className:"quantity-stepper",children:[g.jsx("button",{className:"btn-stepper",onClick:()=>a(s._id,-1),children:g.jsx(Jd,{size:14})}),g.jsxs("span",{style:{fontWeight:800,fontSize:"0.9rem"},children:[u," added"]}),g.jsx("button",{className:"btn-stepper",onClick:()=>a(s._id,1),children:g.jsx(Il,{size:14})})]})})]})]})}function gw({products:s,categories:e,selectedCategory:n,onSelectCategory:r,sortBy:a,onSortChange:l,onInspect3D:u,loading:d}){return g.jsx("section",{className:"products-section",id:"products-catalog",children:g.jsxs("div",{className:"container",children:[g.jsx("div",{style:{marginBottom:"1.8rem"},children:g.jsxs("div",{className:"category-list",children:[g.jsx("button",{className:`category-pill ${n==="All"?"active":""}`,onClick:()=>r("All"),children:"All Categories"}),e.map(h=>g.jsx("button",{className:`category-pill ${n===h?"active":""}`,onClick:()=>r(h),children:h},h))]})}),g.jsxs("div",{className:"section-header",children:[g.jsxs("div",{children:[g.jsx("h2",{className:"section-title",children:n==="All"?"Commercial Superstore Catalog":n}),g.jsxs("p",{className:"section-subtitle",children:["Showing ",s.length," products with guaranteed low prices & interactive 3D models"]})]}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.6rem"},children:[g.jsx(A_,{size:16,color:"#64748b"}),g.jsxs("select",{className:"sort-select",value:a,onChange:h=>l(h.target.value),children:[g.jsx("option",{value:"default",children:"Featured Offers"}),g.jsx("option",{value:"discount",children:"Biggest Discount (%)"}),g.jsx("option",{value:"price-asc",children:"Price: Low to High"}),g.jsx("option",{value:"price-desc",children:"Price: High to Low"}),g.jsx("option",{value:"rating",children:"Highest Rated"})]})]})]}),d?g.jsx("div",{style:{textAlign:"center",padding:"4rem 0",color:"#64748b"},children:g.jsx("div",{style:{fontSize:"1.2rem",fontWeight:600},children:"Loading commercial inventory..."})}):s.length===0?g.jsxs("div",{style:{textAlign:"center",padding:"4rem 0",background:"#ffffff",borderRadius:"12px"},children:[g.jsx("div",{style:{fontSize:"2rem",marginBottom:"0.5rem"},children:"🔍"}),g.jsx("h3",{children:"No products found matching your search"}),g.jsx("p",{style:{color:"#64748b",marginTop:"0.5rem"},children:'Try searching for "oil", "rice", "phone", "boat", or click "All Categories"'}),g.jsx("button",{className:"btn-primary-lg",style:{margin:"1.5rem auto 0 auto"},onClick:()=>{r("All")},children:"Reset Filters"})]}):g.jsx("div",{className:"products-grid",children:s.map(h=>g.jsx(mw,{product:h,onInspect3D:u},h._id))})]})})}function vw({product:s,onClose:e}){var x,O,L,C,j,B,U;const{addToCart:n}=es(),[r,a]=ze.useState(1),[l,u]=ze.useState(!1),[d,h]=ze.useState(!0),[p,v]=ze.useState(((x=s.model3d)==null?void 0:x.primaryColor)||"#00733d"),[_,y]=ze.useState(((O=s.model3d)==null?void 0:O.secondaryColor)||"#ffffff"),[M,E]=ze.useState(!1);if(!s)return null;const A=[{label:"Default",primary:((L=s.model3d)==null?void 0:L.primaryColor)||"#00733d",secondary:((C=s.model3d)==null?void 0:C.secondaryColor)||"#ffffff"},{label:"Matte Obsidian",primary:"#0f172a",secondary:"#38bdf8"},{label:"Gold Amber",primary:"#d97706",secondary:"#fef3c7"},{label:"Crimson Ruby",primary:"#dc2626",secondary:"#ffffff"}],S=()=>{n({...s,model3d:{...s.model3d,primaryColor:p,secondaryColor:_}},r),E(!0),setTimeout(()=>{E(!1),e()},900)};return g.jsx("div",{className:"modal-backdrop",onClick:e,children:g.jsxs("div",{className:"modal-card modal-3d-layout",onClick:F=>F.stopPropagation(),children:[g.jsxs("div",{className:"modal-header",children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.6rem"},children:[g.jsx("span",{className:"badge badge-primary",children:"3D Interactive Viewer"}),g.jsx("span",{style:{fontWeight:700,fontSize:"1.1rem",color:"#0f172a"},children:s.name})]}),g.jsx("button",{className:"btn-close-modal",onClick:e,children:g.jsx(Ks,{size:18})})]}),g.jsx("div",{className:"modal-body",children:g.jsxs("div",{className:"inspect-3d-grid",children:[g.jsxs("div",{style:{background:"radial-gradient(circle at center, #f1f5f9 0%, #e2e8f0 100%)",borderRadius:"12px",position:"relative",overflow:"hidden",border:"1px solid var(--border)"},children:[g.jsxs("div",{className:"three-overlay-controls",children:[g.jsxs("button",{className:"three-control-btn",onClick:()=>h(!d),children:[g.jsx(eg,{size:13}),d?"Rotating":"Paused"]}),g.jsxs("button",{className:"three-control-btn",onClick:()=>u(!l),children:[g.jsx(Qm,{size:13}),l?"Solid":"Wireframe"]})]}),g.jsx("div",{className:"three-drag-hint",style:{bottom:"1rem"},children:g.jsx("span",{children:"🖱️ Click & Drag to inspect 360°"})}),g.jsx(Vg,{modelType:((j=s.model3d)==null?void 0:j.type)||"box",primaryColor:p,secondaryColor:_,metalness:((B=s.model3d)==null?void 0:B.metalness)||.5,roughness:((U=s.model3d)==null?void 0:U.roughness)||.3,isWireframe:l,autoRotate:d,height:"340px"})]}),g.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[g.jsxs("div",{style:{fontSize:"0.8rem",fontWeight:700,color:"var(--primary)"},children:[s.brand," • ",s.category]}),g.jsx("h2",{style:{fontSize:"1.3rem",margin:"0.3rem 0",color:"#0f172a"},children:s.name}),g.jsxs("div",{style:{fontSize:"0.85rem",color:"#64748b",marginBottom:"0.8rem"},children:["Unit: ",g.jsx("strong",{children:s.unit})]}),g.jsxs("div",{className:"product-pricing-row",style:{marginBottom:"0.8rem"},children:[g.jsxs("span",{className:"price-current",style:{fontSize:"1.6rem"},children:["₹",s.price]}),s.mrp>s.price&&g.jsxs("span",{className:"price-mrp",style:{fontSize:"1rem"},children:["₹",s.mrp]}),s.discountPercentage>0&&g.jsxs("span",{className:"price-discount-pill",children:[s.discountPercentage,"% OFF"]})]}),g.jsx("p",{style:{fontSize:"0.85rem",color:"#475569",marginBottom:"1rem",lineHeight:1.5},children:s.description}),g.jsxs("div",{style:{marginBottom:"1.2rem"},children:[g.jsx("label",{style:{fontSize:"0.75rem",fontWeight:700,color:"#64748b"},children:"CHOOSE 3D FINISH:"}),g.jsx("div",{style:{display:"flex",gap:"0.5rem",marginTop:"0.4rem"},children:A.map((F,D)=>g.jsx("button",{onClick:()=>{v(F.primary),y(F.secondary)},style:{padding:"0.3rem 0.6rem",fontSize:"0.75rem",fontWeight:600,borderRadius:"6px",border:p===F.primary?"2px solid var(--primary)":"1px solid var(--border)",background:p===F.primary?"var(--primary-light)":"#ffffff",color:p===F.primary?"var(--primary)":"#0f172a"},children:F.label},D))})]}),s.specs&&s.specs.length>0&&g.jsxs("div",{style:{marginBottom:"1.2rem",background:"#f8fafc",padding:"0.8rem",borderRadius:"8px"},children:[g.jsx("div",{style:{fontSize:"0.75rem",fontWeight:700,color:"#475569",marginBottom:"0.4rem"},children:"SPECIFICATIONS:"}),s.specs.map((F,D)=>g.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"0.8rem",padding:"2px 0"},children:[g.jsxs("span",{style:{color:"#64748b"},children:[F.key,":"]}),g.jsx("span",{style:{fontWeight:600,color:"#0f172a"},children:F.value})]},D))]}),g.jsxs("div",{style:{marginTop:"auto",display:"flex",gap:"0.8rem",alignItems:"center"},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",border:"1px solid var(--border)",borderRadius:"8px"},children:[g.jsx("button",{style:{padding:"0.5rem 0.7rem"},onClick:()=>a(Math.max(1,r-1)),children:g.jsx(Jd,{size:14})}),g.jsx("span",{style:{fontWeight:700,padding:"0 0.6rem",minWidth:"24px",textAlign:"center"},children:r}),g.jsx("button",{style:{padding:"0.5rem 0.7rem"},onClick:()=>a(r+1),children:g.jsx(Il,{size:14})})]}),g.jsx("button",{className:"btn-primary-lg",style:{flex:1,padding:"0.65rem 1rem"},onClick:S,children:M?g.jsxs(g.Fragment,{children:[g.jsx(Kd,{size:18})," Added to Cart!"]}):g.jsxs(g.Fragment,{children:[g.jsx(zl,{size:18})," Add ",r," to Cart (₹",s.price*r,")"]})})]})]})]})})]})})}function _w({onProceedCheckout:s}){const{items:e,isCartOpen:n,closeCart:r,updateQuantity:a,removeFromCart:l,subtotal:u,mrpTotal:d,discountAmount:h,taxAmount:p,deliveryFee:v,totalAmount:_,savingsAmount:y,appliedCoupon:M,applyCoupon:E,removeCoupon:A,couponError:S}=es(),[x,O]=ze.useState("");if(!n)return null;const L=C=>{C.preventDefault(),x.trim()&&E(x)};return g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"cart-drawer-backdrop",onClick:r}),g.jsxs("aside",{className:"cart-drawer",children:[g.jsxs("div",{className:"modal-header",style:{background:"#f8fafc"},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.6rem"},children:[g.jsx(zl,{size:20,color:"var(--primary)"}),g.jsxs("span",{style:{fontWeight:800,fontSize:"1.1rem"},children:["My Cart (",e.length," ",e.length===1?"item":"items",")"]})]}),g.jsx("button",{className:"btn-close-modal",onClick:r,children:g.jsx(Ks,{size:18})})]}),y>0&&g.jsxs("div",{style:{background:"#dcfce7",color:"#166534",padding:"0.6rem 1.25rem",fontSize:"0.82rem",fontWeight:700,display:"flex",alignItems:"center",justifyContent:"space-between"},children:[g.jsx("span",{children:"🎉 Total DMart Savings on this order:"}),g.jsxs("span",{children:["₹",y]})]}),g.jsx("div",{className:"cart-items-scroll",children:e.length===0?g.jsxs("div",{style:{textAlign:"center",padding:"4rem 1rem",color:"#64748b"},children:[g.jsx("div",{style:{fontSize:"3rem",marginBottom:"1rem"},children:"🛒"}),g.jsx("h4",{style:{color:"#0f172a",marginBottom:"0.4rem"},children:"Your cart is empty"}),g.jsx("p",{style:{fontSize:"0.85rem"},children:"Add grocery essentials or 3D gadgets to save money!"})]}):e.map(C=>g.jsxs("div",{className:"cart-item-card",children:[g.jsx("img",{src:C.imageUrl||"https://images.unsplash.com/photo-1542838132-92c53300491e?w=120&auto=format&fit=crop&q=80",alt:C.name,style:{width:"64px",height:"64px",objectFit:"cover",borderRadius:"8px"}}),g.jsxs("div",{style:{flex:1},children:[g.jsx("div",{style:{fontWeight:700,fontSize:"0.88rem",color:"#0f172a",lineHeight:1.3},children:C.name}),g.jsx("div",{style:{fontSize:"0.75rem",color:"#64748b",margin:"2px 0 6px 0"},children:C.unit}),g.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[g.jsxs("div",{children:[g.jsxs("span",{style:{fontWeight:800,fontSize:"0.95rem",color:"#0f172a"},children:["₹",C.price*C.quantity]}),C.mrp&&C.mrp>C.price&&g.jsxs("span",{style:{fontSize:"0.75rem",color:"#94a3b8",textDecoration:"line-through",marginLeft:"6px"},children:["₹",C.mrp*C.quantity]})]}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem"},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",border:"1px solid var(--border)",borderRadius:"6px",background:"#ffffff"},children:[g.jsx("button",{style:{padding:"3px 7px"},onClick:()=>a(C._id,-1),children:g.jsx(Jd,{size:12})}),g.jsx("span",{style:{fontSize:"0.85rem",fontWeight:700,padding:"0 5px"},children:C.quantity}),g.jsx("button",{style:{padding:"3px 7px"},onClick:()=>a(C._id,1),children:g.jsx(Il,{size:12})})]}),g.jsx("button",{style:{padding:"4px",color:"#ef4444"},onClick:()=>l(C._id),title:"Remove item",children:g.jsx(N_,{size:14})})]})]})]})]},C._id))}),e.length>0&&g.jsxs("div",{className:"cart-footer",children:[g.jsxs("div",{style:{marginBottom:"1rem"},children:[M?g.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",background:"#f0fdf4",border:"1px dashed #22c55e",padding:"0.5rem 0.8rem",borderRadius:"8px",fontSize:"0.82rem"},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem",color:"#15803d",fontWeight:700},children:[g.jsx(D_,{size:14})," '",M.code,"' Applied (-₹",M.discount,")"]}),g.jsx("button",{onClick:A,style:{fontSize:"0.75rem",color:"#dc2626",fontWeight:700},children:"Remove"})]}):g.jsxs("form",{onSubmit:L,style:{display:"flex",gap:"0.5rem"},children:[g.jsx("input",{type:"text",placeholder:"Enter Coupon (e.g. DMART50)",value:x,onChange:C=>O(C.target.value),style:{flex:1,padding:"0.45rem 0.75rem",border:"1px solid var(--border)",borderRadius:"6px",fontSize:"0.82rem"}}),g.jsx("button",{type:"submit",style:{background:"var(--primary)",color:"#ffffff",padding:"0.45rem 0.8rem",borderRadius:"6px",fontSize:"0.82rem",fontWeight:700},children:"Apply"})]}),S&&g.jsx("div",{style:{color:"#ef4444",fontSize:"0.75rem",marginTop:"4px"},children:S})]}),g.jsxs("div",{className:"bill-summary-row",children:[g.jsx("span",{children:"Item Total (MRP):"}),g.jsxs("span",{style:{textDecoration:"line-through"},children:["₹",d]})]}),g.jsxs("div",{className:"bill-summary-row",style:{color:"#166534",fontWeight:600},children:[g.jsx("span",{children:"DMart Discount:"}),g.jsxs("span",{children:["-₹",d-u]})]}),h>0&&g.jsxs("div",{className:"bill-summary-row",style:{color:"#166534",fontWeight:600},children:[g.jsx("span",{children:"Coupon Promo:"}),g.jsxs("span",{children:["-₹",h]})]}),g.jsxs("div",{className:"bill-summary-row",children:[g.jsx("span",{children:"Govt. Tax & GST (5%):"}),g.jsxs("span",{children:["₹",p]})]}),g.jsxs("div",{className:"bill-summary-row",children:[g.jsx("span",{children:"Delivery Fee:"}),g.jsx("span",{children:v===0?g.jsx("strong",{style:{color:"#166534"},children:"FREE"}):`₹${v}`})]}),v>0&&g.jsxs("div",{style:{fontSize:"0.72rem",color:"#b45309",marginBottom:"0.4rem"},children:["Add ₹",499-u," more for FREE delivery!"]}),g.jsxs("div",{className:"bill-total-row",children:[g.jsx("span",{children:"To Pay:"}),g.jsxs("span",{children:["₹",_]})]}),g.jsxs("button",{className:"btn-primary-lg",style:{width:"100%",marginTop:"1rem",justifyContent:"center"},onClick:()=>{r(),s()},children:[g.jsx("span",{children:"Proceed to Checkout"}),g.jsx(Fv,{size:18})]}),g.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"0.4rem",fontSize:"0.75rem",color:"#64748b",marginTop:"0.8rem"},children:[g.jsx(Qd,{size:14,color:"#166534"}),g.jsx("span",{children:"Safe & Secure Indian Payments: UPI & COD"})]})]})]})]})}var gf={};(function s(e,n,r,a){var l=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),u=typeof Path2D=="function"&&typeof DOMMatrix=="function",d=(function(){if(!e.OffscreenCanvas)return!1;try{var N=new OffscreenCanvas(1,1),w=N.getContext("2d");w.fillRect(0,0,1,1);var W=N.transferToImageBitmap();w.createPattern(W,"no-repeat")}catch{return!1}return!0})();function h(){}function p(N){var w=n.exports.Promise,W=w!==void 0?w:e.Promise;return typeof W=="function"?new W(N):(N(h,h),null)}var v=(function(N,w){return{transform:function(W){if(N)return W;if(w.has(W))return w.get(W);var ge=new OffscreenCanvas(W.width,W.height),Y=ge.getContext("2d");return Y.drawImage(W,0,0),w.set(W,ge),ge},clear:function(){w.clear()}}})(d,new Map),_=(function(){var N=Math.floor(16.666666666666668),w,W,ge={},Y=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(w=function(re){var J=Math.random();return ge[J]=requestAnimationFrame(function Q(he){Y===he||Y+N-1<he?(Y=he,delete ge[J],re()):ge[J]=requestAnimationFrame(Q)}),J},W=function(re){ge[re]&&cancelAnimationFrame(ge[re])}):(w=function(re){return setTimeout(re,N)},W=function(re){return clearTimeout(re)}),{frame:w,cancel:W}})(),y=(function(){var N,w,W={};function ge(Y){function re(J,Q){Y.postMessage({options:J||{},callback:Q})}Y.init=function(Q){var he=Q.transferControlToOffscreen();Y.postMessage({canvas:he},[he])},Y.fire=function(Q,he,Me){if(w)return re(Q,null),w;var Ce=Math.random().toString(36).slice(2);return w=p(function(Ze){function Je(Xe){Xe.data.callback===Ce&&(delete W[Ce],Y.removeEventListener("message",Je),w=null,v.clear(),Me(),Ze())}Y.addEventListener("message",Je),re(Q,Ce),W[Ce]=Je.bind(null,{data:{callback:Ce}})}),w},Y.reset=function(){Y.postMessage({reset:!0});for(var Q in W)W[Q](),delete W[Q]}}return function(){if(N)return N;if(!r&&l){var Y=["var CONFETTI, SIZE = {}, module = {};","("+s.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{N=new Worker(URL.createObjectURL(new Blob([Y])))}catch(re){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",re),null}ge(N)}return N}})(),M={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function E(N,w){return w?w(N):N}function A(N){return N!=null}function S(N,w,W){return E(N&&A(N[w])?N[w]:M[w],W)}function x(N){return N<0?0:Math.floor(N)}function O(N,w){return Math.floor(Math.random()*(w-N))+N}function L(N){return parseInt(N,16)}function C(N){return N.map(j)}function j(N){var w=String(N).replace(/[^0-9a-f]/gi,"");return w.length<6&&(w=w[0]+w[0]+w[1]+w[1]+w[2]+w[2]),{r:L(w.substring(0,2)),g:L(w.substring(2,4)),b:L(w.substring(4,6))}}function B(N){var w=S(N,"origin",Object);return w.x=S(w,"x",Number),w.y=S(w,"y",Number),w}function U(N){N.width=document.documentElement.clientWidth,N.height=document.documentElement.clientHeight}function F(N){var w=N.getBoundingClientRect();N.width=w.width,N.height=w.height}function D(N){var w=document.createElement("canvas");return w.style.position="fixed",w.style.top="0px",w.style.left="0px",w.style.pointerEvents="none",w.style.zIndex=N,w}function R(N,w,W,ge,Y,re,J,Q,he){N.save(),N.translate(w,W),N.rotate(re),N.scale(ge,Y),N.arc(0,0,1,J,Q,he),N.restore()}function H(N){var w=N.angle*(Math.PI/180),W=N.spread*(Math.PI/180);return{x:N.x,y:N.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:N.startVelocity*.5+Math.random()*N.startVelocity,angle2D:-w+(.5*W-Math.random()*W),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:N.color,shape:N.shape,tick:0,totalTicks:N.ticks,decay:N.decay,drift:N.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:N.gravity*3,ovalScalar:.6,scalar:N.scalar,flat:N.flat}}function oe(N,w){w.x+=Math.cos(w.angle2D)*w.velocity+w.drift,w.y+=Math.sin(w.angle2D)*w.velocity+w.gravity,w.velocity*=w.decay,w.flat?(w.wobble=0,w.wobbleX=w.x+10*w.scalar,w.wobbleY=w.y+10*w.scalar,w.tiltSin=0,w.tiltCos=0,w.random=1):(w.wobble+=w.wobbleSpeed,w.wobbleX=w.x+10*w.scalar*Math.cos(w.wobble),w.wobbleY=w.y+10*w.scalar*Math.sin(w.wobble),w.tiltAngle+=.1,w.tiltSin=Math.sin(w.tiltAngle),w.tiltCos=Math.cos(w.tiltAngle),w.random=Math.random()+2);var W=w.tick++/w.totalTicks,ge=w.x+w.random*w.tiltCos,Y=w.y+w.random*w.tiltSin,re=w.wobbleX+w.random*w.tiltCos,J=w.wobbleY+w.random*w.tiltSin;if(N.fillStyle="rgba("+w.color.r+", "+w.color.g+", "+w.color.b+", "+(1-W)+")",N.beginPath(),u&&w.shape.type==="path"&&typeof w.shape.path=="string"&&Array.isArray(w.shape.matrix))N.fill(me(w.shape.path,w.shape.matrix,w.x,w.y,Math.abs(re-ge)*.1,Math.abs(J-Y)*.1,Math.PI/10*w.wobble));else if(w.shape.type==="bitmap"){var Q=Math.PI/10*w.wobble,he=Math.abs(re-ge)*.1,Me=Math.abs(J-Y)*.1,Ce=w.shape.bitmap.width*w.scalar,Ze=w.shape.bitmap.height*w.scalar,Je=new DOMMatrix([Math.cos(Q)*he,Math.sin(Q)*he,-Math.sin(Q)*Me,Math.cos(Q)*Me,w.x,w.y]);Je.multiplySelf(new DOMMatrix(w.shape.matrix));var Xe=N.createPattern(v.transform(w.shape.bitmap),"no-repeat");Xe.setTransform(Je),N.globalAlpha=1-W,N.fillStyle=Xe,N.fillRect(w.x-Ce/2,w.y-Ze/2,Ce,Ze),N.globalAlpha=1}else if(w.shape==="circle")N.ellipse?N.ellipse(w.x,w.y,Math.abs(re-ge)*w.ovalScalar,Math.abs(J-Y)*w.ovalScalar,Math.PI/10*w.wobble,0,2*Math.PI):R(N,w.x,w.y,Math.abs(re-ge)*w.ovalScalar,Math.abs(J-Y)*w.ovalScalar,Math.PI/10*w.wobble,0,2*Math.PI);else if(w.shape==="star")for(var k=Math.PI/2*3,Rt=4*w.scalar,et=8*w.scalar,st=w.x,He=w.y,yt=5,Ue=Math.PI/yt;yt--;)st=w.x+Math.cos(k)*et,He=w.y+Math.sin(k)*et,N.lineTo(st,He),k+=Ue,st=w.x+Math.cos(k)*Rt,He=w.y+Math.sin(k)*Rt,N.lineTo(st,He),k+=Ue;else N.moveTo(Math.floor(w.x),Math.floor(w.y)),N.lineTo(Math.floor(w.wobbleX),Math.floor(Y)),N.lineTo(Math.floor(re),Math.floor(J)),N.lineTo(Math.floor(ge),Math.floor(w.wobbleY));return N.closePath(),N.fill(),w.tick<w.totalTicks}function ee(N,w,W,ge,Y){var re=w.slice(),J=N.getContext("2d"),Q,he,Me=p(function(Ce){function Ze(){Q=he=null,J.clearRect(0,0,ge.width,ge.height),v.clear(),Y(),Ce()}function Je(){r&&!(ge.width===a.width&&ge.height===a.height)&&(ge.width=N.width=a.width,ge.height=N.height=a.height),!ge.width&&!ge.height&&(W(N),ge.width=N.width,ge.height=N.height),J.clearRect(0,0,ge.width,ge.height),re=re.filter(function(Xe){return oe(J,Xe)}),re.length?Q=_.frame(Je):Ze()}Q=_.frame(Je),he=Ze});return{addFettis:function(Ce){return re=re.concat(Ce),Me},canvas:N,promise:Me,reset:function(){Q&&_.cancel(Q),he&&he()}}}function ue(N,w){var W=!N,ge=!!S(w||{},"resize"),Y=!1,re=S(w,"disableForReducedMotion",Boolean),J=l&&!!S(w||{},"useWorker"),Q=J?y():null,he=W?U:F,Me=N&&Q?!!N.__confetti_initialized:!1,Ce=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,Ze;function Je(k,Rt,et){for(var st=S(k,"particleCount",x),He=S(k,"angle",Number),yt=S(k,"spread",Number),Ue=S(k,"startVelocity",Number),I=S(k,"decay",Number),b=S(k,"gravity",Number),se=S(k,"drift",Number),xe=S(k,"colors",C),ye=S(k,"ticks",Number),ve=S(k,"shapes"),Ye=S(k,"scalar"),be=!!S(k,"flat"),Fe=B(k),ft=st,we=[],Be=N.width*Fe.x,tt=N.height*Fe.y;ft--;)we.push(H({x:Be,y:tt,angle:He,spread:yt,startVelocity:Ue,color:xe[ft%xe.length],shape:ve[O(0,ve.length)],ticks:ye,decay:I,gravity:b,drift:se,scalar:Ye,flat:be}));return Ze?Ze.addFettis(we):(Ze=ee(N,we,he,Rt,et),Ze.promise)}function Xe(k){var Rt=re||S(k,"disableForReducedMotion",Boolean),et=S(k,"zIndex",Number);if(Rt&&Ce)return p(function(Ue){Ue()});W&&Ze?N=Ze.canvas:W&&!N&&(N=D(et),document.body.appendChild(N)),ge&&!Me&&he(N);var st={width:N.width,height:N.height};Q&&!Me&&Q.init(N),Me=!0,Q&&(N.__confetti_initialized=!0);function He(){if(Q){var Ue={getBoundingClientRect:function(){if(!W)return N.getBoundingClientRect()}};he(Ue),Q.postMessage({resize:{width:Ue.width,height:Ue.height}});return}st.width=st.height=null}function yt(){Ze=null,ge&&(Y=!1,e.removeEventListener("resize",He)),W&&N&&(document.body.contains(N)&&document.body.removeChild(N),N=null,Me=!1)}return ge&&!Y&&(Y=!0,e.addEventListener("resize",He,!1)),Q?Q.fire(k,st,yt):Je(k,st,yt)}return Xe.reset=function(){Q&&Q.reset(),Ze&&Ze.reset()},Xe}var pe;function de(){return pe||(pe=ue(null,{useWorker:!0,resize:!0})),pe}function me(N,w,W,ge,Y,re,J){var Q=new Path2D(N),he=new Path2D;he.addPath(Q,new DOMMatrix(w));var Me=new Path2D;return Me.addPath(he,new DOMMatrix([Math.cos(J)*Y,Math.sin(J)*Y,-Math.sin(J)*re,Math.cos(J)*re,W,ge])),Me}function G(N){if(!u)throw new Error("path confetti are not supported in this browser");var w,W;typeof N=="string"?w=N:(w=N.path,W=N.matrix);var ge=new Path2D(w),Y=document.createElement("canvas"),re=Y.getContext("2d");if(!W){for(var J=1e3,Q=J,he=J,Me=0,Ce=0,Ze,Je,Xe=0;Xe<J;Xe+=2)for(var k=0;k<J;k+=2)re.isPointInPath(ge,Xe,k,"nonzero")&&(Q=Math.min(Q,Xe),he=Math.min(he,k),Me=Math.max(Me,Xe),Ce=Math.max(Ce,k));Ze=Me-Q,Je=Ce-he;var Rt=10,et=Math.min(Rt/Ze,Rt/Je);W=[et,0,0,et,-Math.round(Ze/2+Q)*et,-Math.round(Je/2+he)*et]}return{type:"path",path:w,matrix:W}}function le(N){var w,W=1,ge="#000000",Y='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof N=="string"?w=N:(w=N.text,W="scalar"in N?N.scalar:W,Y="fontFamily"in N?N.fontFamily:Y,ge="color"in N?N.color:ge);var re=10*W,J=""+re+"px "+Y,Q=new OffscreenCanvas(re,re),he=Q.getContext("2d");he.font=J;var Me=he.measureText(w),Ce=Math.ceil(Me.actualBoundingBoxRight+Me.actualBoundingBoxLeft),Ze=Math.ceil(Me.actualBoundingBoxAscent+Me.actualBoundingBoxDescent),Je=2,Xe=Me.actualBoundingBoxLeft+Je,k=Me.actualBoundingBoxAscent+Je;Ce+=Je+Je,Ze+=Je+Je,Q=new OffscreenCanvas(Ce,Ze),he=Q.getContext("2d"),he.font=J,he.fillStyle=ge,he.fillText(w,Xe,k);var Rt=1/W;return{type:"bitmap",bitmap:Q.transferToImageBitmap(),matrix:[Rt,0,0,Rt,-Ce*Rt/2,-Ze*Rt/2]}}n.exports=function(){return de().apply(this,arguments)},n.exports.reset=function(){de().reset()},n.exports.create=ue,n.exports.shapeFromPath=G,n.exports.shapeFromText=le})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),gf,!1);const xw=gf.exports;gf.exports.create;function yw({isOpen:s,onClose:e,onOrderPlaced:n}){var pe,de,me,G;const{items:r,totalAmount:a,discountAmount:l,clearCart:u}=es(),{user:d}=ef(),[h,p]=ze.useState((d==null?void 0:d.name)||"Richard R"),[v,_]=ze.useState((d==null?void 0:d.email)||"richard@example.com"),[y,M]=ze.useState((d==null?void 0:d.phone)||"9876543210"),[E,A]=ze.useState(((pe=d==null?void 0:d.address)==null?void 0:pe.street)||"Flat 402, Sunshine Towers, Link Road"),[S,x]=ze.useState(((de=d==null?void 0:d.address)==null?void 0:de.city)||"Mumbai"),[O,L]=ze.useState(((me=d==null?void 0:d.address)==null?void 0:me.state)||"Maharashtra"),[C,j]=ze.useState(((G=d==null?void 0:d.address)==null?void 0:G.pincode)||"400001"),[B,U]=ze.useState("phonepe"),[F,D]=ze.useState("richard@ybl"),[R,H]=ze.useState(!1),[oe,ee]=ze.useState("");if(!s)return null;const ue=async le=>{if(le.preventDefault(),!h||!v||!y||!E||!C){ee("Please complete all delivery details");return}H(!0),ee("");try{B!=="cod"&&await new Promise(ge=>setTimeout(ge,1500));const w=await fetch("http://localhost:5000/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({customerName:h,customerEmail:v,customerPhone:y,shippingAddress:{street:E,city:S,state:O,pincode:C},items:r,paymentMethod:B,discount:l})}),W=await w.json();if(!w.ok)throw new Error(W.message||"Payment processing failed");try{xw({particleCount:100,spread:70,origin:{y:.6}})}catch{}u(),H(!1),n(W.order,W.invoice)}catch(N){H(!1),ee(N.message||"Something went wrong while placing order")}};return g.jsx("div",{className:"modal-backdrop",onClick:e,children:g.jsxs("div",{className:"modal-card",style:{maxWidth:"640px"},onClick:le=>le.stopPropagation(),children:[g.jsxs("div",{className:"modal-header",children:[g.jsxs("div",{children:[g.jsx("h3",{style:{fontSize:"1.25rem",color:"#0f172a"},children:"Checkout & Payment"}),g.jsx("p",{style:{fontSize:"0.8rem",color:"#64748b"},children:"Complete your order with PhonePe, Google Pay UPI, or Cash on Delivery"})]}),g.jsx("button",{className:"btn-close-modal",onClick:e,children:g.jsx(Ks,{size:18})})]}),g.jsxs("form",{onSubmit:ue,className:"modal-body",children:[oe&&g.jsx("div",{style:{background:"#fef2f2",color:"#dc2626",padding:"0.6rem 1rem",borderRadius:"6px",fontSize:"0.85rem",marginBottom:"1rem"},children:oe}),g.jsxs("div",{style:{marginBottom:"1.4rem"},children:[g.jsx("h4",{style:{fontSize:"0.95rem",marginBottom:"0.8rem",color:"#1e293b"},children:"1. Delivery & Contact Information"}),g.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.8rem"},children:[g.jsxs("div",{children:[g.jsx("label",{style:{fontSize:"0.75rem",fontWeight:600,color:"#475569"},children:"Full Name"}),g.jsx("input",{type:"text",required:!0,value:h,onChange:le=>p(le.target.value),style:{width:"100%",padding:"0.5rem",border:"1px solid var(--border)",borderRadius:"6px",fontSize:"0.85rem"}})]}),g.jsxs("div",{children:[g.jsx("label",{style:{fontSize:"0.75rem",fontWeight:600,color:"#475569"},children:"Phone Number"}),g.jsx("input",{type:"tel",required:!0,value:y,onChange:le=>M(le.target.value),style:{width:"100%",padding:"0.5rem",border:"1px solid var(--border)",borderRadius:"6px",fontSize:"0.85rem"}})]})]}),g.jsxs("div",{style:{marginTop:"0.6rem"},children:[g.jsx("label",{style:{fontSize:"0.75rem",fontWeight:600,color:"#475569"},children:"Email Address (for Invoice)"}),g.jsx("input",{type:"email",required:!0,value:v,onChange:le=>_(le.target.value),style:{width:"100%",padding:"0.5rem",border:"1px solid var(--border)",borderRadius:"6px",fontSize:"0.85rem"}})]}),g.jsxs("div",{style:{marginTop:"0.6rem"},children:[g.jsx("label",{style:{fontSize:"0.75rem",fontWeight:600,color:"#475569"},children:"House / Flat / Street Address"}),g.jsx("input",{type:"text",required:!0,value:E,onChange:le=>A(le.target.value),style:{width:"100%",padding:"0.5rem",border:"1px solid var(--border)",borderRadius:"6px",fontSize:"0.85rem"}})]}),g.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"0.6rem",marginTop:"0.6rem"},children:[g.jsxs("div",{children:[g.jsx("label",{style:{fontSize:"0.75rem",fontWeight:600,color:"#475569"},children:"City"}),g.jsx("input",{type:"text",required:!0,value:S,onChange:le=>x(le.target.value),style:{width:"100%",padding:"0.5rem",border:"1px solid var(--border)",borderRadius:"6px",fontSize:"0.85rem"}})]}),g.jsxs("div",{children:[g.jsx("label",{style:{fontSize:"0.75rem",fontWeight:600,color:"#475569"},children:"State"}),g.jsx("input",{type:"text",required:!0,value:O,onChange:le=>L(le.target.value),style:{width:"100%",padding:"0.5rem",border:"1px solid var(--border)",borderRadius:"6px",fontSize:"0.85rem"}})]}),g.jsxs("div",{children:[g.jsx("label",{style:{fontSize:"0.75rem",fontWeight:600,color:"#475569"},children:"Pincode"}),g.jsx("input",{type:"text",required:!0,value:C,onChange:le=>j(le.target.value),style:{width:"100%",padding:"0.5rem",border:"1px solid var(--border)",borderRadius:"6px",fontSize:"0.85rem"}})]})]})]}),g.jsxs("div",{style:{borderTop:"1px solid var(--border)",paddingTop:"1.2rem",marginBottom:"1.2rem"},children:[g.jsx("h4",{style:{fontSize:"0.95rem",marginBottom:"0.8rem",color:"#1e293b"},children:"2. Select Payment Mode"}),g.jsxs("div",{className:"payment-methods-grid",children:[g.jsxs("div",{className:`payment-method-card ${B==="phonepe"?"selected":""}`,onClick:()=>{U("phonepe"),D("richard@ybl")},children:[g.jsx("div",{style:{width:38,height:38,borderRadius:"8px",background:"#5f259f",color:"#ffffff",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:"0.8rem"},children:"पे"}),g.jsx("div",{style:{fontWeight:700,fontSize:"0.85rem"},children:"PhonePe UPI"}),g.jsx("div",{style:{fontSize:"0.7rem",color:"#64748b"},children:"QR / App UPI"})]}),g.jsxs("div",{className:`payment-method-card ${B==="gpay"?"selected":""}`,onClick:()=>{U("gpay"),D("richard@okhdfcbank")},children:[g.jsx("div",{style:{width:38,height:38,borderRadius:"8px",background:"#1a73e8",color:"#ffffff",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:"0.85rem"},children:"GPay"}),g.jsx("div",{style:{fontWeight:700,fontSize:"0.85rem"},children:"Google Pay"}),g.jsx("div",{style:{fontSize:"0.7rem",color:"#64748b"},children:"Instant UPI"})]}),g.jsxs("div",{className:`payment-method-card ${B==="cod"?"selected":""}`,onClick:()=>U("cod"),children:[g.jsx("div",{style:{width:38,height:38,borderRadius:"8px",background:"#15803d",color:"#ffffff",display:"flex",alignItems:"center",justifyContent:"center"},children:g.jsx(kv,{size:20})}),g.jsx("div",{style:{fontWeight:700,fontSize:"0.85rem"},children:"Cash on Delivery"}),g.jsx("div",{style:{fontSize:"0.7rem",color:"#64748b"},children:"Pay at Doorstep"})]})]}),B!=="cod"?g.jsxs("div",{className:"upi-details-box",children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"0.4rem",fontWeight:700,fontSize:"0.88rem"},children:[g.jsx(h_,{size:18,color:B==="phonepe"?"#5f259f":"#1a73e8"}),g.jsxs("span",{children:["Scan to pay with ",B==="phonepe"?"PhonePe":"Google Pay"]})]}),g.jsx("img",{src:`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=upi://pay?pa=dmartretail@yesbank%26pn=DMart%20Commercial%26am=${a}%26cu=INR`,alt:"UPI QR Code",className:"qr-code-img"}),g.jsxs("div",{style:{fontSize:"0.8rem",color:"#64748b",margin:"0.4rem 0"},children:["Amount to Pay: ",g.jsxs("strong",{style:{color:"#0f172a"},children:["₹",a]})]}),g.jsxs("div",{style:{maxWidth:"300px",margin:"0.6rem auto 0 auto"},children:[g.jsxs("label",{style:{fontSize:"0.75rem",fontWeight:600,color:"#475569"},children:["Or enter your ",B==="phonepe"?"PhonePe":"Google Pay"," VPA / UPI ID:"]}),g.jsx("input",{type:"text",value:F,onChange:le=>D(le.target.value),placeholder:"mobile@upi or id@bank",style:{width:"100%",padding:"0.45rem",border:"1px solid var(--border)",borderRadius:"6px",textAlign:"center",fontWeight:600,marginTop:"4px"}})]})]}):g.jsxs("div",{style:{background:"#f0fdf4",border:"1px solid #bbf7d0",padding:"1rem",borderRadius:"8px",textAlign:"center"},children:[g.jsx(Kd,{size:24,color:"#15803d",style:{margin:"0 auto 4px auto"}}),g.jsx("div",{style:{fontWeight:700,color:"#15803d",fontSize:"0.9rem"},children:"Cash On Delivery Confirmed"}),g.jsxs("div",{style:{fontSize:"0.8rem",color:"#475569",marginTop:"4px"},children:["Please keep exact change of ",g.jsxs("strong",{children:["₹",a]})," ready at the time of delivery."]})]})]}),g.jsxs("div",{style:{borderTop:"1px solid var(--border)",paddingTop:"1rem"},children:[g.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.8rem"},children:[g.jsx("span",{style:{fontSize:"0.9rem",color:"#64748b"},children:"Final Payable Amount:"}),g.jsxs("span",{style:{fontSize:"1.4rem",fontWeight:800,color:"#0f172a"},children:["₹",a]})]}),g.jsx("button",{type:"submit",disabled:R,className:"btn-primary-lg",style:{width:"100%",justifyContent:"center"},children:R?g.jsxs(g.Fragment,{children:[g.jsx(Zv,{size:18,className:"spin-icon"}),g.jsxs("span",{children:["Processing ",B==="cod"?"Order":"UPI Payment","..."]})]}):g.jsxs(g.Fragment,{children:[g.jsx(Qd,{size:18}),g.jsx("span",{children:B==="cod"?`Confirm Cash on Delivery Order (₹${a})`:`Pay ₹${a} via ${B==="phonepe"?"PhonePe":"Google Pay"}`})]})})]})]})]})})}function Sw({order:s,invoice:e,onClose:n}){var l,u,d,h,p;if(!s)return null;const r=()=>{window.print()},a=new Date(s.createdAt||Date.now()).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"});return g.jsx("div",{className:"modal-backdrop",onClick:n,children:g.jsxs("div",{className:"modal-card invoice-modal-content",style:{maxWidth:"750px",width:"100%"},onClick:v=>v.stopPropagation(),children:[g.jsxs("div",{className:"modal-header no-print",children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.6rem"},children:[g.jsx(Kd,{size:20,color:"#166534"}),g.jsx("span",{style:{fontWeight:800,fontSize:"1.1rem",color:"#166534"},children:"Order Confirmed & Tax Invoice Generated"})]}),g.jsxs("div",{style:{display:"flex",gap:"0.6rem"},children:[g.jsxs("button",{className:"btn-nav-action",onClick:r,style:{background:"#f1f5f9",color:"#0f172a"},children:[g.jsx(d_,{size:16})," Print / Save PDF"]}),g.jsx("button",{className:"btn-close-modal",onClick:n,children:g.jsx(Ks,{size:18})})]})]}),g.jsxs("div",{className:"invoice-container",children:[g.jsxs("div",{className:"invoice-header-grid",children:[g.jsxs("div",{children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem",marginBottom:"0.4rem"},children:[g.jsx("div",{style:{background:"var(--primary)",color:"#ffffff",width:28,height:28,borderRadius:6,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800},children:"D"}),g.jsx("h2",{style:{fontSize:"1.4rem",fontWeight:800},children:"DMart 3D Retail Limited"})]}),g.jsxs("p",{style:{fontSize:"0.8rem",color:"#64748b"},children:["Avenue Supermarts Commercial Division",g.jsx("br",{}),"GSTIN: 27AABCA1234F1Z8 | CIN: L51900MH2000PLC126427",g.jsx("br",{}),"FSSAI Lic. No: 10014022002683"]})]}),g.jsxs("div",{style:{textAlign:"right"},children:[g.jsx("span",{className:"badge badge-primary",style:{marginBottom:"0.4rem"},children:"TAX INVOICE / CASH BILL"}),g.jsx("div",{style:{fontWeight:800,fontSize:"1rem",color:"#0f172a"},children:s.invoiceNumber||(e==null?void 0:e.invoiceNumber)}),g.jsxs("div",{style:{fontSize:"0.8rem",color:"#64748b"},children:["Order No: ",g.jsx("strong",{children:s.orderNumber})]}),g.jsxs("div",{style:{fontSize:"0.8rem",color:"#64748b"},children:["Date: ",a]})]})]}),g.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1.2fr 1fr",gap:"1.5rem",marginBottom:"1.5rem"},children:[g.jsxs("div",{style:{background:"#f8fafc",padding:"0.9rem",borderRadius:"8px",border:"1px solid var(--border)"},children:[g.jsx("div",{style:{fontSize:"0.75rem",fontWeight:700,color:"#64748b",textTransform:"uppercase",marginBottom:"0.3rem"},children:"Billed & Shipped To:"}),g.jsx("div",{style:{fontWeight:700,color:"#0f172a"},children:s.customerName}),g.jsxs("div",{style:{fontSize:"0.82rem",color:"#475569",marginTop:"2px"},children:[(l=s.shippingAddress)==null?void 0:l.street,", ",(u=s.shippingAddress)==null?void 0:u.city,", ",(d=s.shippingAddress)==null?void 0:d.state," - ",(h=s.shippingAddress)==null?void 0:h.pincode]}),g.jsxs("div",{style:{fontSize:"0.82rem",color:"#475569",marginTop:"4px"},children:["Phone: ",s.customerPhone," | Email: ",s.customerEmail]})]}),g.jsxs("div",{style:{background:"#f8fafc",padding:"0.9rem",borderRadius:"8px",border:"1px solid var(--border)"},children:[g.jsx("div",{style:{fontSize:"0.75rem",fontWeight:700,color:"#64748b",textTransform:"uppercase",marginBottom:"0.3rem"},children:"Payment Summary:"}),g.jsxs("div",{style:{fontSize:"0.82rem",marginBottom:"3px"},children:["Payment Mode:"," ",g.jsx("strong",{style:{textTransform:"uppercase",color:"var(--primary)"},children:s.paymentMethod==="phonepe"?"PhonePe UPI":s.paymentMethod==="gpay"?"Google Pay UPI":"Cash on Delivery (COD)"})]}),g.jsxs("div",{style:{fontSize:"0.82rem",marginBottom:"3px"},children:["Payment Status: ",g.jsx("strong",{children:s.paymentStatus})]}),g.jsxs("div",{style:{fontSize:"0.82rem",color:"#64748b"},children:["Transaction Ref: ",g.jsx("code",{style:{fontSize:"0.75rem"},children:s.transactionId||"TXN-CONFIRMED"})]})]})]}),g.jsxs("table",{className:"invoice-table",children:[g.jsx("thead",{children:g.jsxs("tr",{children:[g.jsx("th",{children:"#"}),g.jsx("th",{children:"Item Description"}),g.jsx("th",{children:"Unit"}),g.jsx("th",{children:"Rate (₹)"}),g.jsx("th",{children:"Qty"}),g.jsx("th",{style:{textAlign:"right"},children:"Total (₹)"})]})}),g.jsx("tbody",{children:(p=s.items)==null?void 0:p.map((v,_)=>g.jsxs("tr",{children:[g.jsx("td",{children:_+1}),g.jsx("td",{children:g.jsx("strong",{children:v.name})}),g.jsx("td",{children:v.unit}),g.jsxs("td",{children:["₹",v.price]}),g.jsx("td",{children:v.quantity}),g.jsxs("td",{style:{textAlign:"right",fontWeight:700},children:["₹",v.price*v.quantity]})]},_))})]}),g.jsx("div",{style:{display:"flex",justifyContent:"flex-end",marginTop:"1rem"},children:g.jsxs("div",{style:{width:"280px"},children:[g.jsxs("div",{className:"bill-summary-row",children:[g.jsx("span",{children:"Subtotal:"}),g.jsxs("span",{children:["₹",s.subtotal]})]}),s.discount>0&&g.jsxs("div",{className:"bill-summary-row",style:{color:"#166534",fontWeight:600},children:[g.jsx("span",{children:"Promotional Discount:"}),g.jsxs("span",{children:["-₹",s.discount]})]}),g.jsxs("div",{className:"bill-summary-row",children:[g.jsx("span",{children:"CGST (2.5%) + SGST (2.5%):"}),g.jsxs("span",{children:["₹",s.taxAmount]})]}),g.jsxs("div",{className:"bill-summary-row",children:[g.jsx("span",{children:"Delivery Charge:"}),g.jsx("span",{children:s.deliveryFee===0?"FREE":`₹${s.deliveryFee}`})]}),g.jsxs("div",{className:"bill-total-row",style:{fontSize:"1.25rem",color:"#0f172a"},children:[g.jsx("span",{children:"Total Amount Paid:"}),g.jsxs("span",{children:["₹",s.totalAmount]})]}),s.savingsAmount>0&&g.jsxs("div",{style:{background:"#dcfce7",color:"#166534",padding:"0.4rem 0.6rem",borderRadius:"6px",fontSize:"0.8rem",fontWeight:700,textAlign:"center",marginTop:"0.6rem"},children:["You Saved ₹",s.savingsAmount," with DMart Deals!"]})]})}),g.jsxs("div",{style:{borderTop:"1px solid var(--border)",paddingTop:"1rem",marginTop:"1.8rem",display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"0.75rem",color:"#94a3b8"},children:[g.jsx("span",{children:"This is a computer-generated tax invoice and requires no physical signature."}),g.jsx("span",{children:"Customer Support: help@dmart3d.com"})]})]}),g.jsx("div",{className:"modal-header no-print",style:{borderTop:"1px solid var(--border)"},children:g.jsx("button",{className:"btn-primary-lg",onClick:n,style:{width:"100%",justifyContent:"center"},children:"Continue Shopping"})})]})})}function Mw({isOpen:s,onClose:e}){const{loginWithEmail:n,registerWithEmail:r,loginWithGoogle:a,loginWithFacebook:l}=ef(),[u,d]=ze.useState(!0),[h,p]=ze.useState(""),[v,_]=ze.useState(""),[y,M]=ze.useState(""),[E,A]=ze.useState(""),[S,x]=ze.useState(""),[O,L]=ze.useState(!1);if(!s)return null;const C=async F=>{F.preventDefault(),x(""),L(!0);let D;u?D=await n(v,y):D=await r(h,v,y,E),L(!1),D.success?e():x(D.error||"Authentication failed")},j=async()=>{L(!0),x("");const F={googleId:`google_${Date.now()}`,name:"Google Shopper",email:"customer@gmail.com",avatar:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80"},D=await a(F);L(!1),D.success?e():x(D.error||"Google Login failed")},B=async()=>{L(!0),x("");const F=await l();L(!1),F.success?e():x(F.error||"Facebook Login failed")},U=async()=>{L(!0),_("richard@example.com"),M("demopass123");let F=await n("richard@example.com","demopass123");F.success||(F=await r("Richard R","richard@example.com","demopass123","9876543210")),L(!1),F.success&&e()};return g.jsx("div",{className:"modal-backdrop",onClick:e,children:g.jsxs("div",{className:"modal-card",style:{maxWidth:"440px"},onClick:F=>F.stopPropagation(),children:[g.jsxs("div",{className:"modal-header",children:[g.jsxs("div",{children:[g.jsx("h3",{style:{fontSize:"1.2rem",color:"#0f172a"},children:u?"Welcome Back":"Create DMart 3D Account"}),g.jsx("p",{style:{fontSize:"0.8rem",color:"#64748b"},children:"Unlock personalized 3D cart savings & express checkout"})]}),g.jsx("button",{className:"btn-close-modal",onClick:e,children:g.jsx(Ks,{size:18})})]}),g.jsxs("div",{className:"modal-body",children:[S&&g.jsxs("div",{style:{background:"#fef2f2",color:"#dc2626",padding:"0.6rem 0.9rem",borderRadius:"6px",fontSize:"0.82rem",marginBottom:"1rem",display:"flex",alignItems:"center",gap:"0.4rem"},children:[g.jsx(jv,{size:15}),g.jsx("span",{children:S})]}),g.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.6rem",marginBottom:"1.2rem"},children:[g.jsxs("button",{onClick:j,style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"0.7rem",padding:"0.65rem",border:"1.5px solid var(--border)",borderRadius:"8px",background:"#ffffff",fontWeight:600,fontSize:"0.88rem",color:"#1e293b"},children:[g.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",children:[g.jsx("path",{fill:"#4285F4",d:"M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.15z"}),g.jsx("path",{fill:"#34A853",d:"M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.94H1.24v3.15C3.26 21.36 7.33 24 12 24z"}),g.jsx("path",{fill:"#FBBC05",d:"M5.28 14.26c-.25-.72-.38-1.49-.38-2.26s.13-1.54.38-2.26V6.59H1.24C.45 8.16 0 9.94 0 12s.45 3.84 1.24 5.41l4.04-3.15z"}),g.jsx("path",{fill:"#EA4335",d:"M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.24 6.59l4.04 3.15c.95-2.84 3.6-4.99 6.72-4.99z"})]}),g.jsx("span",{children:"Continue with Google"})]}),g.jsxs("button",{onClick:B,style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"0.7rem",padding:"0.65rem",borderRadius:"8px",background:"#1877f2",color:"#ffffff",fontWeight:600,fontSize:"0.88rem"},children:[g.jsx("svg",{width:"18",height:"18",fill:"currentColor",viewBox:"0 0 24 24",children:g.jsx("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})}),g.jsx("span",{children:"Continue with Facebook"})]})]}),g.jsxs("div",{style:{display:"flex",alignItems:"center",margin:"1.2rem 0",color:"#94a3b8",fontSize:"0.78rem"},children:[g.jsx("div",{style:{flex:1,height:"1px",background:"var(--border)"}}),g.jsx("span",{style:{padding:"0 0.8rem"},children:"OR WITH EMAIL"}),g.jsx("div",{style:{flex:1,height:"1px",background:"var(--border)"}})]}),g.jsxs("div",{style:{display:"flex",background:"#f1f5f9",borderRadius:"8px",padding:"4px",marginBottom:"1rem"},children:[g.jsx("button",{onClick:()=>d(!0),style:{flex:1,padding:"0.45rem",borderRadius:"6px",fontSize:"0.82rem",fontWeight:700,background:u?"#ffffff":"transparent",color:u?"var(--primary)":"#64748b",boxShadow:u?"var(--shadow-sm)":"none"},children:"Sign In"}),g.jsx("button",{onClick:()=>d(!1),style:{flex:1,padding:"0.45rem",borderRadius:"6px",fontSize:"0.82rem",fontWeight:700,background:u?"transparent":"#ffffff",color:u?"#64748b":"var(--primary)",boxShadow:u?"none":"var(--shadow-sm)"},children:"Register"})]}),g.jsxs("form",{onSubmit:C,style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:[!u&&g.jsxs("div",{children:[g.jsx("label",{style:{fontSize:"0.75rem",fontWeight:600,color:"#475569"},children:"Full Name"}),g.jsxs("div",{style:{position:"relative"},children:[g.jsx(ng,{size:15,style:{position:"absolute",left:10,top:"50%",transform:"translateY(-50%)",color:"#94a3b8"}}),g.jsx("input",{type:"text",required:!0,placeholder:"e.g. Richard R",value:h,onChange:F=>p(F.target.value),style:{width:"100%",padding:"0.5rem 0.5rem 0.5rem 2.2rem",border:"1px solid var(--border)",borderRadius:"6px",fontSize:"0.85rem"}})]})]}),g.jsxs("div",{children:[g.jsx("label",{style:{fontSize:"0.75rem",fontWeight:600,color:"#475569"},children:"Email Address"}),g.jsxs("div",{style:{position:"relative"},children:[g.jsx(i_,{size:15,style:{position:"absolute",left:10,top:"50%",transform:"translateY(-50%)",color:"#94a3b8"}}),g.jsx("input",{type:"email",required:!0,placeholder:"name@domain.com",value:v,onChange:F=>_(F.target.value),style:{width:"100%",padding:"0.5rem 0.5rem 0.5rem 2.2rem",border:"1px solid var(--border)",borderRadius:"6px",fontSize:"0.85rem"}})]})]}),g.jsxs("div",{children:[g.jsx("label",{style:{fontSize:"0.75rem",fontWeight:600,color:"#475569"},children:"Password"}),g.jsxs("div",{style:{position:"relative"},children:[g.jsx(Qv,{size:15,style:{position:"absolute",left:10,top:"50%",transform:"translateY(-50%)",color:"#94a3b8"}}),g.jsx("input",{type:"password",required:!0,placeholder:"••••••••",value:y,onChange:F=>M(F.target.value),style:{width:"100%",padding:"0.5rem 0.5rem 0.5rem 2.2rem",border:"1px solid var(--border)",borderRadius:"6px",fontSize:"0.85rem"}})]})]}),!u&&g.jsxs("div",{children:[g.jsx("label",{style:{fontSize:"0.75rem",fontWeight:600,color:"#475569"},children:"Mobile Number"}),g.jsxs("div",{style:{position:"relative"},children:[g.jsx(l_,{size:15,style:{position:"absolute",left:10,top:"50%",transform:"translateY(-50%)",color:"#94a3b8"}}),g.jsx("input",{type:"tel",placeholder:"9876543210",value:E,onChange:F=>A(F.target.value),style:{width:"100%",padding:"0.5rem 0.5rem 0.5rem 2.2rem",border:"1px solid var(--border)",borderRadius:"6px",fontSize:"0.85rem"}})]})]}),g.jsx("button",{type:"submit",disabled:O,className:"btn-primary-lg",style:{width:"100%",justifyContent:"center",marginTop:"0.5rem",padding:"0.65rem"},children:O?"Please wait...":u?"Sign In to Account":"Create Account"})]}),g.jsx("div",{style:{textAlign:"center",marginTop:"1rem"},children:g.jsx("button",{onClick:U,style:{fontSize:"0.78rem",color:"var(--secondary)",textDecoration:"underline",fontWeight:600},children:"⚡ Quick Demo 1-Click Login (Richard R)"})})]})]})})}function Ew({onInspect3D:s}){const{addToCart:e,openCart:n}=es(),[r,a]=ze.useState(!1),[l,u]=ze.useState([{sender:"bot",text:"Hello! 👋 I am your DMart 3D Smart AI Shopping Assistant. Ask me about daily grocery discounts, 3D tech products, coupon deals, or payment options!",chips:["Fortune Oil Deals","5G Smartphone 3D","Payment Methods","Today Coupons"]}]),[d,h]=ze.useState(""),[p,v]=ze.useState(!1),_=ze.useRef(null);ze.useEffect(()=>{_.current&&(_.current.scrollTop=_.current.scrollHeight)},[l]);const y=async E=>{const A=E||d;if(!A.trim()||p)return;const S={sender:"user",text:A};u(x=>[...x,S]),h(""),v(!0);try{const O=await(await fetch("http://localhost:5000/api/ai-assistant/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:A})})).json(),L={sender:"bot",text:O.reply,chips:O.chips||[],recommendedProduct:O.recommendedProduct,intent:O.intent};u(C=>[...C,L])}catch{u(O=>[...O,{sender:"bot",text:"I can recommend top savings! Check out Fortune Sunflower Oil (25% off) or the 3D Galaxy Ultra 5G Pro in the store.",chips:["Show Groceries","Show Electronics"]}])}finally{v(!1)}},M=E=>{E==="View Cart"?n():y(E)};return g.jsxs(g.Fragment,{children:[g.jsxs("button",{className:"ai-assistant-fab",onClick:()=>a(!r),title:"Open DMart 3D AI Assistant",children:[g.jsx("div",{className:"ai-pulse-ring"}),g.jsx(Bv,{size:28})]}),r&&g.jsxs("div",{className:"ai-chat-window",children:[g.jsxs("div",{className:"ai-chat-header",children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.6rem"},children:[g.jsx("div",{style:{width:32,height:32,borderRadius:"50%",background:"linear-gradient(135deg, #00733d, #38bdf8)",display:"flex",alignItems:"center",justifyContent:"center",color:"#ffffff"},children:g.jsx(tg,{size:16})}),g.jsxs("div",{children:[g.jsx("div",{style:{fontWeight:800,fontSize:"0.92rem"},children:"DMart AI Copilot"}),g.jsx("div",{style:{fontSize:"0.72rem",color:"#94a3b8"},children:"Powered by Python AI Service"})]})]}),g.jsx("button",{onClick:()=>a(!1),style:{color:"#cbd5e1",padding:"4px"},children:g.jsx(Ks,{size:18})})]}),g.jsxs("div",{className:"ai-messages-list",ref:_,children:[l.map((E,A)=>g.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[g.jsxs("div",{className:`ai-bubble ${E.sender==="user"?"ai-bubble-user":"ai-bubble-bot"}`,children:[g.jsx("p",{style:{whiteSpace:"pre-line"},children:E.text}),E.recommendedProduct&&g.jsxs("div",{style:{background:"#f8fafc",border:"1px solid var(--border)",borderRadius:"8px",padding:"0.6rem",marginTop:"0.6rem",display:"flex",gap:"0.6rem",alignItems:"center"},children:[g.jsx("img",{src:E.recommendedProduct.imageUrl,alt:E.recommendedProduct.name,style:{width:50,height:50,borderRadius:6,objectFit:"cover"}}),g.jsxs("div",{style:{flex:1},children:[g.jsx("div",{style:{fontSize:"0.78rem",fontWeight:700,color:"#0f172a"},children:E.recommendedProduct.name}),g.jsxs("div",{style:{fontSize:"0.8rem",fontWeight:800,color:"var(--primary)"},children:["₹",E.recommendedProduct.price," ",g.jsxs("span",{style:{fontSize:"0.7rem",color:"#94a3b8",textDecoration:"line-through"},children:["₹",E.recommendedProduct.mrp]})]}),g.jsxs("div",{style:{display:"flex",gap:"0.4rem",marginTop:"4px"},children:[g.jsxs("button",{onClick:()=>e(E.recommendedProduct,1),style:{background:"var(--primary)",color:"#ffffff",fontSize:"0.72rem",padding:"2px 6px",borderRadius:"4px",fontWeight:700,display:"flex",alignItems:"center",gap:"2px"},children:[g.jsx(zl,{size:11})," Add to Cart"]}),g.jsxs("button",{onClick:()=>s(E.recommendedProduct),style:{background:"#ffffff",border:"1px solid var(--border)",fontSize:"0.72rem",padding:"2px 6px",borderRadius:"4px",fontWeight:600,display:"flex",alignItems:"center",gap:"2px"},children:[g.jsx(Zd,{size:11})," 3D View"]})]})]})]})]}),E.chips&&E.chips.length>0&&g.jsx("div",{className:"ai-chips-row",style:{padding:"0.3rem 0 0.5rem 0"},children:E.chips.map((S,x)=>g.jsx("button",{className:"ai-chip-btn",onClick:()=>M(S),children:S},x))})]},A)),p&&g.jsx("div",{className:"ai-bubble ai-bubble-bot",style:{fontStyle:"italic",color:"#64748b"},children:"Thinking & analyzing DMart catalog..."})]}),g.jsxs("form",{className:"ai-input-row",onSubmit:E=>{E.preventDefault(),y()},children:[g.jsx("input",{type:"text",placeholder:"Ask about deals, products, or UPI...",className:"ai-chat-input",value:d,onChange:E=>h(E.target.value)}),g.jsx("button",{type:"submit",className:"ai-send-btn",disabled:!d.trim(),children:g.jsx(y_,{size:15})})]})]})]})}const Km="http://localhost:5000/api";function ww(){const[s,e]=ze.useState([]),[n,r]=ze.useState([]),[a,l]=ze.useState("All"),[u,d]=ze.useState(""),[h,p]=ze.useState("default"),[v,_]=ze.useState(!0),[y,M]=ze.useState(null),[E,A]=ze.useState(!1),[S,x]=ze.useState(!1),[O,L]=ze.useState(null),[C,j]=ze.useState(null),B=async()=>{try{_(!0);let R=`${Km}/products?`;a&&a!=="All"&&(R+=`category=${encodeURIComponent(a)}&`),u&&(R+=`search=${encodeURIComponent(u)}&`),h!=="default"&&(R+=`sort=${encodeURIComponent(h)}&`);const oe=await(await fetch(R)).json();e(oe.products||[])}catch(R){console.error("Failed to load products:",R)}finally{_(!1)}},U=async()=>{try{const H=await(await fetch(`${Km}/products/categories`)).json();r(H||[])}catch(R){console.error("Failed to fetch categories:",R)}};ze.useEffect(()=>{U()},[]),ze.useEffect(()=>{const R=setTimeout(()=>{B()},250);return()=>clearTimeout(R)},[a,u,h]);const F=s.find(R=>{var H;return(H=R.badge)==null?void 0:H.includes("SHOWCASE")})||s[0],D=(R,H)=>{x(!1),L(R),j(H)};return g.jsxs("div",{className:"app-layout",children:[g.jsx(B_,{onOpenAuth:()=>A(!0),searchTerm:u,onSearchChange:d}),g.jsx(pw,{featuredProduct:F,onInspect3D:R=>M(R)}),g.jsx("section",{style:{background:"#ffffff",borderBottom:"1px solid var(--border)",padding:"1.2rem 0"},children:g.jsxs("div",{className:"container",style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:"1.5rem",textAlign:"center"},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"0.6rem"},children:[g.jsx(U_,{size:22,color:"var(--primary)"}),g.jsxs("div",{style:{textAlign:"left"},children:[g.jsx("div",{style:{fontWeight:700,fontSize:"0.88rem"},children:"Fast Doorstep Delivery"}),g.jsx("div",{style:{fontSize:"0.75rem",color:"#64748b"},children:"Same day & 24hr guaranteed slots"})]})]}),g.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"0.6rem"},children:[g.jsx(Qd,{size:22,color:"var(--primary)"}),g.jsxs("div",{style:{textAlign:"left"},children:[g.jsx("div",{style:{fontWeight:700,fontSize:"0.88rem"},children:"100% Quality Assurance"}),g.jsx("div",{style:{fontSize:"0.75rem",color:"#64748b"},children:"Direct from verified distributors"})]})]}),g.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"0.6rem"},children:[g.jsx(qv,{size:22,color:"var(--primary)"}),g.jsxs("div",{style:{textAlign:"left"},children:[g.jsx("div",{style:{fontWeight:700,fontSize:"0.88rem"},children:"PhonePe, GPay & COD"}),g.jsx("div",{style:{fontSize:"0.75rem",color:"#64748b"},children:"Zero payment friction & tax invoices"})]})]}),g.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"0.6rem"},children:[g.jsx(m_,{size:22,color:"var(--primary)"}),g.jsxs("div",{style:{textAlign:"left"},children:[g.jsx("div",{style:{fontWeight:700,fontSize:"0.88rem"},children:"Easy 7-Day Returns"}),g.jsx("div",{style:{fontSize:"0.75rem",color:"#64748b"},children:"Hassle-free replacement policy"})]})]})]})}),g.jsx("main",{children:g.jsx(gw,{products:s,categories:n,selectedCategory:a,onSelectCategory:l,sortBy:h,onSortChange:p,onInspect3D:R=>M(R),loading:v})}),g.jsxs("footer",{style:{background:"#0f172a",color:"#cbd5e1",padding:"3.5rem 0 1.5rem 0",marginTop:"4rem"},children:[g.jsxs("div",{className:"container",style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:"2rem",marginBottom:"2.5rem"},children:[g.jsxs("div",{children:[g.jsx("h4",{style:{color:"#ffffff",fontSize:"1.2rem",marginBottom:"0.8rem"},children:"DMart 3D"}),g.jsx("p",{style:{fontSize:"0.82rem",lineHeight:1.6,color:"#94a3b8"},children:"India's premier high-value retail superstore, reimagined with interactive 3D product previews, instant UPI payments, and intelligent AI shopping support."})]}),g.jsxs("div",{children:[g.jsx("h5",{style:{color:"#ffffff",marginBottom:"0.8rem",fontSize:"0.95rem"},children:"Quick Categories"}),g.jsxs("ul",{style:{listStyle:"none",fontSize:"0.82rem",display:"flex",flexDirection:"column",gap:"0.4rem",color:"#94a3b8"},children:[g.jsx("li",{children:"Groceries & Staples"}),g.jsx("li",{children:"Electronics & Gadgets"}),g.jsx("li",{children:"Beverages & Dairy"}),g.jsx("li",{children:"Personal Care & Hygiene"}),g.jsx("li",{children:"Home & Living Essentials"})]})]}),g.jsxs("div",{children:[g.jsx("h5",{style:{color:"#ffffff",marginBottom:"0.8rem",fontSize:"0.95rem"},children:"Supported Payments"}),g.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.5rem",marginBottom:"0.8rem"},children:[g.jsx("span",{style:{background:"#1e293b",padding:"0.3rem 0.6rem",borderRadius:"4px",fontSize:"0.75rem",color:"#ffffff"},children:"PhonePe UPI"}),g.jsx("span",{style:{background:"#1e293b",padding:"0.3rem 0.6rem",borderRadius:"4px",fontSize:"0.75rem",color:"#ffffff"},children:"Google Pay"}),g.jsx("span",{style:{background:"#1e293b",padding:"0.3rem 0.6rem",borderRadius:"4px",fontSize:"0.75rem",color:"#ffffff"},children:"Cash on Delivery"}),g.jsx("span",{style:{background:"#1e293b",padding:"0.3rem 0.6rem",borderRadius:"4px",fontSize:"0.75rem",color:"#ffffff"},children:"RuPay Cards"})]}),g.jsx("p",{style:{fontSize:"0.78rem",color:"#94a3b8"},children:"Instant GST Invoice generation on all orders."})]}),g.jsxs("div",{children:[g.jsx("h5",{style:{color:"#ffffff",marginBottom:"0.8rem",fontSize:"0.95rem"},children:"Customer Care"}),g.jsxs("p",{style:{fontSize:"0.82rem",color:"#94a3b8",lineHeight:1.6},children:["Toll-Free: 1800-266-0000",g.jsx("br",{}),"Email: support@dmart3d.com",g.jsx("br",{}),"Mon - Sun: 7:00 AM to 11:00 PM"]})]})]}),g.jsxs("div",{className:"container",style:{borderTop:"1px solid #334155",paddingTop:"1.2rem",textAlign:"center",fontSize:"0.78rem",color:"#64748b"},children:["© ",new Date().getFullYear()," DMart 3D Retail Commercial Platform. All rights reserved."]})]}),g.jsx(_w,{onProceedCheckout:()=>x(!0)}),g.jsx(yw,{isOpen:S,onClose:()=>x(!1),onOrderPlaced:D}),O&&g.jsx(Sw,{order:O,invoice:C,onClose:()=>L(null)}),y&&g.jsx(vw,{product:y,onClose:()=>M(null)}),g.jsx(Mw,{isOpen:E,onClose:()=>A(!1)}),g.jsx(Ew,{onInspect3D:R=>M(R)})]})}Dv.createRoot(document.getElementById("root")).render(g.jsx(wv.StrictMode,{children:g.jsx(z_,{children:g.jsx(k_,{children:g.jsx(ww,{})})})}));
