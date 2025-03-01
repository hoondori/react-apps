(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();var zp={exports:{}},ll={},jp={exports:{}},xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pv;function oP(){if(Pv)return xe;Pv=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),w=Symbol.iterator;function I(M){return M===null||typeof M!="object"?null:(M=w&&M[w]||M["@@iterator"],typeof M=="function"?M:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k=Object.assign,L={};function D(M,J,we){this.props=M,this.context=J,this.refs=L,this.updater=we||R}D.prototype.isReactComponent={},D.prototype.setState=function(M,J){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,J,"setState")},D.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function G(){}G.prototype=D.prototype;function K(M,J,we){this.props=M,this.context=J,this.refs=L,this.updater=we||R}var Q=K.prototype=new G;Q.constructor=K,k(Q,D.prototype),Q.isPureReactComponent=!0;var re=Array.isArray,me=Object.prototype.hasOwnProperty,de={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function S(M,J,we){var Ce,ke={},Le=null,je=null;if(J!=null)for(Ce in J.ref!==void 0&&(je=J.ref),J.key!==void 0&&(Le=""+J.key),J)me.call(J,Ce)&&!x.hasOwnProperty(Ce)&&(ke[Ce]=J[Ce]);var $e=arguments.length-2;if($e===1)ke.children=we;else if(1<$e){for(var Qe=Array($e),Dt=0;Dt<$e;Dt++)Qe[Dt]=arguments[Dt+2];ke.children=Qe}if(M&&M.defaultProps)for(Ce in $e=M.defaultProps,$e)ke[Ce]===void 0&&(ke[Ce]=$e[Ce]);return{$$typeof:n,type:M,key:Le,ref:je,props:ke,_owner:de.current}}function P(M,J){return{$$typeof:n,type:M.type,key:J,ref:M.ref,props:M.props,_owner:M._owner}}function N(M){return typeof M=="object"&&M!==null&&M.$$typeof===n}function O(M){var J={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(we){return J[we]})}var F=/\/+/g;function C(M,J){return typeof M=="object"&&M!==null&&M.key!=null?O(""+M.key):J.toString(36)}function gt(M,J,we,Ce,ke){var Le=typeof M;(Le==="undefined"||Le==="boolean")&&(M=null);var je=!1;if(M===null)je=!0;else switch(Le){case"string":case"number":je=!0;break;case"object":switch(M.$$typeof){case n:case e:je=!0}}if(je)return je=M,ke=ke(je),M=Ce===""?"."+C(je,0):Ce,re(ke)?(we="",M!=null&&(we=M.replace(F,"$&/")+"/"),gt(ke,J,we,"",function(Dt){return Dt})):ke!=null&&(N(ke)&&(ke=P(ke,we+(!ke.key||je&&je.key===ke.key?"":(""+ke.key).replace(F,"$&/")+"/")+M)),J.push(ke)),1;if(je=0,Ce=Ce===""?".":Ce+":",re(M))for(var $e=0;$e<M.length;$e++){Le=M[$e];var Qe=Ce+C(Le,$e);je+=gt(Le,J,we,Qe,ke)}else if(Qe=I(M),typeof Qe=="function")for(M=Qe.call(M),$e=0;!(Le=M.next()).done;)Le=Le.value,Qe=Ce+C(Le,$e++),je+=gt(Le,J,we,Qe,ke);else if(Le==="object")throw J=String(M),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.");return je}function Wt(M,J,we){if(M==null)return M;var Ce=[],ke=0;return gt(M,Ce,"","",function(Le){return J.call(we,Le,ke++)}),Ce}function Kt(M){if(M._status===-1){var J=M._result;J=J(),J.then(function(we){(M._status===0||M._status===-1)&&(M._status=1,M._result=we)},function(we){(M._status===0||M._status===-1)&&(M._status=2,M._result=we)}),M._status===-1&&(M._status=0,M._result=J)}if(M._status===1)return M._result.default;throw M._result}var Ke={current:null},oe={transition:null},Ee={ReactCurrentDispatcher:Ke,ReactCurrentBatchConfig:oe,ReactCurrentOwner:de};function he(){throw Error("act(...) is not supported in production builds of React.")}return xe.Children={map:Wt,forEach:function(M,J,we){Wt(M,function(){J.apply(this,arguments)},we)},count:function(M){var J=0;return Wt(M,function(){J++}),J},toArray:function(M){return Wt(M,function(J){return J})||[]},only:function(M){if(!N(M))throw Error("React.Children.only expected to receive a single React element child.");return M}},xe.Component=D,xe.Fragment=t,xe.Profiler=s,xe.PureComponent=K,xe.StrictMode=r,xe.Suspense=f,xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ee,xe.act=he,xe.cloneElement=function(M,J,we){if(M==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+M+".");var Ce=k({},M.props),ke=M.key,Le=M.ref,je=M._owner;if(J!=null){if(J.ref!==void 0&&(Le=J.ref,je=de.current),J.key!==void 0&&(ke=""+J.key),M.type&&M.type.defaultProps)var $e=M.type.defaultProps;for(Qe in J)me.call(J,Qe)&&!x.hasOwnProperty(Qe)&&(Ce[Qe]=J[Qe]===void 0&&$e!==void 0?$e[Qe]:J[Qe])}var Qe=arguments.length-2;if(Qe===1)Ce.children=we;else if(1<Qe){$e=Array(Qe);for(var Dt=0;Dt<Qe;Dt++)$e[Dt]=arguments[Dt+2];Ce.children=$e}return{$$typeof:n,type:M.type,key:ke,ref:Le,props:Ce,_owner:je}},xe.createContext=function(M){return M={$$typeof:u,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},M.Provider={$$typeof:a,_context:M},M.Consumer=M},xe.createElement=S,xe.createFactory=function(M){var J=S.bind(null,M);return J.type=M,J},xe.createRef=function(){return{current:null}},xe.forwardRef=function(M){return{$$typeof:h,render:M}},xe.isValidElement=N,xe.lazy=function(M){return{$$typeof:y,_payload:{_status:-1,_result:M},_init:Kt}},xe.memo=function(M,J){return{$$typeof:p,type:M,compare:J===void 0?null:J}},xe.startTransition=function(M){var J=oe.transition;oe.transition={};try{M()}finally{oe.transition=J}},xe.unstable_act=he,xe.useCallback=function(M,J){return Ke.current.useCallback(M,J)},xe.useContext=function(M){return Ke.current.useContext(M)},xe.useDebugValue=function(){},xe.useDeferredValue=function(M){return Ke.current.useDeferredValue(M)},xe.useEffect=function(M,J){return Ke.current.useEffect(M,J)},xe.useId=function(){return Ke.current.useId()},xe.useImperativeHandle=function(M,J,we){return Ke.current.useImperativeHandle(M,J,we)},xe.useInsertionEffect=function(M,J){return Ke.current.useInsertionEffect(M,J)},xe.useLayoutEffect=function(M,J){return Ke.current.useLayoutEffect(M,J)},xe.useMemo=function(M,J){return Ke.current.useMemo(M,J)},xe.useReducer=function(M,J,we){return Ke.current.useReducer(M,J,we)},xe.useRef=function(M){return Ke.current.useRef(M)},xe.useState=function(M){return Ke.current.useState(M)},xe.useSyncExternalStore=function(M,J,we){return Ke.current.useSyncExternalStore(M,J,we)},xe.useTransition=function(){return Ke.current.useTransition()},xe.version="18.3.1",xe}var Cv;function Gm(){return Cv||(Cv=1,jp.exports=oP()),jp.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kv;function aP(){if(kv)return ll;kv=1;var n=Gm(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(h,f,p){var y,w={},I=null,R=null;p!==void 0&&(I=""+p),f.key!==void 0&&(I=""+f.key),f.ref!==void 0&&(R=f.ref);for(y in f)r.call(f,y)&&!a.hasOwnProperty(y)&&(w[y]=f[y]);if(h&&h.defaultProps)for(y in f=h.defaultProps,f)w[y]===void 0&&(w[y]=f[y]);return{$$typeof:e,type:h,key:I,ref:R,props:w,_owner:s.current}}return ll.Fragment=t,ll.jsx=u,ll.jsxs=u,ll}var xv;function uP(){return xv||(xv=1,zp.exports=aP()),zp.exports}var le=uP(),H=Gm(),Dh={},$p={exports:{}},En={},qp={exports:{}},Gp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bv;function lP(){return bv||(bv=1,function(n){function e(oe,Ee){var he=oe.length;oe.push(Ee);e:for(;0<he;){var M=he-1>>>1,J=oe[M];if(0<s(J,Ee))oe[M]=Ee,oe[he]=J,he=M;else break e}}function t(oe){return oe.length===0?null:oe[0]}function r(oe){if(oe.length===0)return null;var Ee=oe[0],he=oe.pop();if(he!==Ee){oe[0]=he;e:for(var M=0,J=oe.length,we=J>>>1;M<we;){var Ce=2*(M+1)-1,ke=oe[Ce],Le=Ce+1,je=oe[Le];if(0>s(ke,he))Le<J&&0>s(je,ke)?(oe[M]=je,oe[Le]=he,M=Le):(oe[M]=ke,oe[Ce]=he,M=Ce);else if(Le<J&&0>s(je,he))oe[M]=je,oe[Le]=he,M=Le;else break e}}return Ee}function s(oe,Ee){var he=oe.sortIndex-Ee.sortIndex;return he!==0?he:oe.id-Ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var u=Date,h=u.now();n.unstable_now=function(){return u.now()-h}}var f=[],p=[],y=1,w=null,I=3,R=!1,k=!1,L=!1,D=typeof setTimeout=="function"?setTimeout:null,G=typeof clearTimeout=="function"?clearTimeout:null,K=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Q(oe){for(var Ee=t(p);Ee!==null;){if(Ee.callback===null)r(p);else if(Ee.startTime<=oe)r(p),Ee.sortIndex=Ee.expirationTime,e(f,Ee);else break;Ee=t(p)}}function re(oe){if(L=!1,Q(oe),!k)if(t(f)!==null)k=!0,Kt(me);else{var Ee=t(p);Ee!==null&&Ke(re,Ee.startTime-oe)}}function me(oe,Ee){k=!1,L&&(L=!1,G(S),S=-1),R=!0;var he=I;try{for(Q(Ee),w=t(f);w!==null&&(!(w.expirationTime>Ee)||oe&&!O());){var M=w.callback;if(typeof M=="function"){w.callback=null,I=w.priorityLevel;var J=M(w.expirationTime<=Ee);Ee=n.unstable_now(),typeof J=="function"?w.callback=J:w===t(f)&&r(f),Q(Ee)}else r(f);w=t(f)}if(w!==null)var we=!0;else{var Ce=t(p);Ce!==null&&Ke(re,Ce.startTime-Ee),we=!1}return we}finally{w=null,I=he,R=!1}}var de=!1,x=null,S=-1,P=5,N=-1;function O(){return!(n.unstable_now()-N<P)}function F(){if(x!==null){var oe=n.unstable_now();N=oe;var Ee=!0;try{Ee=x(!0,oe)}finally{Ee?C():(de=!1,x=null)}}else de=!1}var C;if(typeof K=="function")C=function(){K(F)};else if(typeof MessageChannel<"u"){var gt=new MessageChannel,Wt=gt.port2;gt.port1.onmessage=F,C=function(){Wt.postMessage(null)}}else C=function(){D(F,0)};function Kt(oe){x=oe,de||(de=!0,C())}function Ke(oe,Ee){S=D(function(){oe(n.unstable_now())},Ee)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(oe){oe.callback=null},n.unstable_continueExecution=function(){k||R||(k=!0,Kt(me))},n.unstable_forceFrameRate=function(oe){0>oe||125<oe?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<oe?Math.floor(1e3/oe):5},n.unstable_getCurrentPriorityLevel=function(){return I},n.unstable_getFirstCallbackNode=function(){return t(f)},n.unstable_next=function(oe){switch(I){case 1:case 2:case 3:var Ee=3;break;default:Ee=I}var he=I;I=Ee;try{return oe()}finally{I=he}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(oe,Ee){switch(oe){case 1:case 2:case 3:case 4:case 5:break;default:oe=3}var he=I;I=oe;try{return Ee()}finally{I=he}},n.unstable_scheduleCallback=function(oe,Ee,he){var M=n.unstable_now();switch(typeof he=="object"&&he!==null?(he=he.delay,he=typeof he=="number"&&0<he?M+he:M):he=M,oe){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=he+J,oe={id:y++,callback:Ee,priorityLevel:oe,startTime:he,expirationTime:J,sortIndex:-1},he>M?(oe.sortIndex=he,e(p,oe),t(f)===null&&oe===t(p)&&(L?(G(S),S=-1):L=!0,Ke(re,he-M))):(oe.sortIndex=J,e(f,oe),k||R||(k=!0,Kt(me))),oe},n.unstable_shouldYield=O,n.unstable_wrapCallback=function(oe){var Ee=I;return function(){var he=I;I=Ee;try{return oe.apply(this,arguments)}finally{I=he}}}}(Gp)),Gp}var Dv;function cP(){return Dv||(Dv=1,qp.exports=lP()),qp.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nv;function hP(){if(Nv)return En;Nv=1;var n=Gm(),e=cP();function t(i){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)o+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,s={};function a(i,o){u(i,o),u(i+"Capture",o)}function u(i,o){for(s[i]=o,i=0;i<o.length;i++)r.add(o[i])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},w={};function I(i){return f.call(w,i)?!0:f.call(y,i)?!1:p.test(i)?w[i]=!0:(y[i]=!0,!1)}function R(i,o,l,d){if(l!==null&&l.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return d?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function k(i,o,l,d){if(o===null||typeof o>"u"||R(i,o,l,d))return!0;if(d)return!1;if(l!==null)switch(l.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function L(i,o,l,d,m,_,E){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=d,this.attributeNamespace=m,this.mustUseProperty=l,this.propertyName=i,this.type=o,this.sanitizeURL=_,this.removeEmptyString=E}var D={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){D[i]=new L(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var o=i[0];D[o]=new L(o,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){D[i]=new L(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){D[i]=new L(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){D[i]=new L(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){D[i]=new L(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){D[i]=new L(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){D[i]=new L(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){D[i]=new L(i,5,!1,i.toLowerCase(),null,!1,!1)});var G=/[\-:]([a-z])/g;function K(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var o=i.replace(G,K);D[o]=new L(o,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var o=i.replace(G,K);D[o]=new L(o,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var o=i.replace(G,K);D[o]=new L(o,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){D[i]=new L(i,1,!1,i.toLowerCase(),null,!1,!1)}),D.xlinkHref=new L("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){D[i]=new L(i,1,!1,i.toLowerCase(),null,!0,!0)});function Q(i,o,l,d){var m=D.hasOwnProperty(o)?D[o]:null;(m!==null?m.type!==0:d||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(k(o,l,m,d)&&(l=null),d||m===null?I(o)&&(l===null?i.removeAttribute(o):i.setAttribute(o,""+l)):m.mustUseProperty?i[m.propertyName]=l===null?m.type===3?!1:"":l:(o=m.attributeName,d=m.attributeNamespace,l===null?i.removeAttribute(o):(m=m.type,l=m===3||m===4&&l===!0?"":""+l,d?i.setAttributeNS(d,o,l):i.setAttribute(o,l))))}var re=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,me=Symbol.for("react.element"),de=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),O=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),gt=Symbol.for("react.suspense_list"),Wt=Symbol.for("react.memo"),Kt=Symbol.for("react.lazy"),Ke=Symbol.for("react.offscreen"),oe=Symbol.iterator;function Ee(i){return i===null||typeof i!="object"?null:(i=oe&&i[oe]||i["@@iterator"],typeof i=="function"?i:null)}var he=Object.assign,M;function J(i){if(M===void 0)try{throw Error()}catch(l){var o=l.stack.trim().match(/\n( *(at )?)/);M=o&&o[1]||""}return`
`+M+i}var we=!1;function Ce(i,o){if(!i||we)return"";we=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch($){var d=$}Reflect.construct(i,[],o)}else{try{o.call()}catch($){d=$}i.call(o.prototype)}else{try{throw Error()}catch($){d=$}i()}}catch($){if($&&d&&typeof $.stack=="string"){for(var m=$.stack.split(`
`),_=d.stack.split(`
`),E=m.length-1,A=_.length-1;1<=E&&0<=A&&m[E]!==_[A];)A--;for(;1<=E&&0<=A;E--,A--)if(m[E]!==_[A]){if(E!==1||A!==1)do if(E--,A--,0>A||m[E]!==_[A]){var b=`
`+m[E].replace(" at new "," at ");return i.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",i.displayName)),b}while(1<=E&&0<=A);break}}}finally{we=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?J(i):""}function ke(i){switch(i.tag){case 5:return J(i.type);case 16:return J("Lazy");case 13:return J("Suspense");case 19:return J("SuspenseList");case 0:case 2:case 15:return i=Ce(i.type,!1),i;case 11:return i=Ce(i.type.render,!1),i;case 1:return i=Ce(i.type,!0),i;default:return""}}function Le(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case x:return"Fragment";case de:return"Portal";case P:return"Profiler";case S:return"StrictMode";case C:return"Suspense";case gt:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case O:return(i.displayName||"Context")+".Consumer";case N:return(i._context.displayName||"Context")+".Provider";case F:var o=i.render;return i=i.displayName,i||(i=o.displayName||o.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case Wt:return o=i.displayName||null,o!==null?o:Le(i.type)||"Memo";case Kt:o=i._payload,i=i._init;try{return Le(i(o))}catch{}}return null}function je(i){var o=i.type;switch(i.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=o.render,i=i.displayName||i.name||"",o.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Le(o);case 8:return o===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function $e(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Qe(i){var o=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function Dt(i){var o=Qe(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,o),d=""+i[o];if(!i.hasOwnProperty(o)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var m=l.get,_=l.set;return Object.defineProperty(i,o,{configurable:!0,get:function(){return m.call(this)},set:function(E){d=""+E,_.call(this,E)}}),Object.defineProperty(i,o,{enumerable:l.enumerable}),{getValue:function(){return d},setValue:function(E){d=""+E},stopTracking:function(){i._valueTracker=null,delete i[o]}}}}function Mr(i){i._valueTracker||(i._valueTracker=Dt(i))}function Do(i){if(!i)return!1;var o=i._valueTracker;if(!o)return!0;var l=o.getValue(),d="";return i&&(d=Qe(i)?i.checked?"true":"false":i.value),i=d,i!==l?(o.setValue(i),!0):!1}function Ri(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function As(i,o){var l=o.checked;return he({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function No(i,o){var l=o.defaultValue==null?"":o.defaultValue,d=o.checked!=null?o.checked:o.defaultChecked;l=$e(o.value!=null?o.value:l),i._wrapperState={initialChecked:d,initialValue:l,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function mu(i,o){o=o.checked,o!=null&&Q(i,"checked",o,!1)}function gu(i,o){mu(i,o);var l=$e(o.value),d=o.type;if(l!=null)d==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(d==="submit"||d==="reset"){i.removeAttribute("value");return}o.hasOwnProperty("value")?Vo(i,o.type,l):o.hasOwnProperty("defaultValue")&&Vo(i,o.type,$e(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(i.defaultChecked=!!o.defaultChecked)}function _c(i,o,l){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var d=o.type;if(!(d!=="submit"&&d!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+i._wrapperState.initialValue,l||o===i.value||(i.value=o),i.defaultValue=o}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function Vo(i,o,l){(o!=="number"||Ri(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var Fr=Array.isArray;function Ur(i,o,l,d){if(i=i.options,o){o={};for(var m=0;m<l.length;m++)o["$"+l[m]]=!0;for(l=0;l<i.length;l++)m=o.hasOwnProperty("$"+i[l].value),i[l].selected!==m&&(i[l].selected=m),m&&d&&(i[l].defaultSelected=!0)}else{for(l=""+$e(l),o=null,m=0;m<i.length;m++){if(i[m].value===l){i[m].selected=!0,d&&(i[m].defaultSelected=!0);return}o!==null||i[m].disabled||(o=i[m])}o!==null&&(o.selected=!0)}}function _u(i,o){if(o.dangerouslySetInnerHTML!=null)throw Error(t(91));return he({},o,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function Oo(i,o){var l=o.value;if(l==null){if(l=o.children,o=o.defaultValue,l!=null){if(o!=null)throw Error(t(92));if(Fr(l)){if(1<l.length)throw Error(t(93));l=l[0]}o=l}o==null&&(o=""),l=o}i._wrapperState={initialValue:$e(l)}}function Lo(i,o){var l=$e(o.value),d=$e(o.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),o.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),d!=null&&(i.defaultValue=""+d)}function yu(i){var o=i.textContent;o===i._wrapperState.initialValue&&o!==""&&o!==null&&(i.value=o)}function Rt(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function At(i,o){return i==null||i==="http://www.w3.org/1999/xhtml"?Rt(o):i==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var Br,vu=function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,l,d,m){MSApp.execUnsafeLocalFunction(function(){return i(o,l,d,m)})}:i}(function(i,o){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=o;else{for(Br=Br||document.createElement("div"),Br.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=Br.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;o.firstChild;)i.appendChild(o.firstChild)}});function Ai(i,o){if(o){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=o;return}}i.textContent=o}var Ps={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Cs=["Webkit","ms","Moz","O"];Object.keys(Ps).forEach(function(i){Cs.forEach(function(o){o=o+i.charAt(0).toUpperCase()+i.substring(1),Ps[o]=Ps[i]})});function wu(i,o,l){return o==null||typeof o=="boolean"||o===""?"":l||typeof o!="number"||o===0||Ps.hasOwnProperty(i)&&Ps[i]?(""+o).trim():o+"px"}function Eu(i,o){i=i.style;for(var l in o)if(o.hasOwnProperty(l)){var d=l.indexOf("--")===0,m=wu(l,o[l],d);l==="float"&&(l="cssFloat"),d?i.setProperty(l,m):i[l]=m}}var Iu=he({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Tu(i,o){if(o){if(Iu[i]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(t(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(t(61))}if(o.style!=null&&typeof o.style!="object")throw Error(t(62))}}function Su(i,o){if(i.indexOf("-")===-1)return typeof o.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ks=null;function Mo(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Fo=null,Vn=null,pr=null;function Uo(i){if(i=Hu(i)){if(typeof Fo!="function")throw Error(t(280));var o=i.stateNode;o&&(o=Kc(o),Fo(i.stateNode,i.type,o))}}function mr(i){Vn?pr?pr.push(i):pr=[i]:Vn=i}function Ru(){if(Vn){var i=Vn,o=pr;if(pr=Vn=null,Uo(i),o)for(i=0;i<o.length;i++)Uo(o[i])}}function xs(i,o){return i(o)}function Au(){}var zr=!1;function Pu(i,o,l){if(zr)return i(o,l);zr=!0;try{return xs(i,o,l)}finally{zr=!1,(Vn!==null||pr!==null)&&(Au(),Ru())}}function _t(i,o){var l=i.stateNode;if(l===null)return null;var d=Kc(l);if(d===null)return null;l=d[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(i=i.type,d=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!d;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,o,typeof l));return l}var Bo=!1;if(h)try{var Qn={};Object.defineProperty(Qn,"passive",{get:function(){Bo=!0}}),window.addEventListener("test",Qn,Qn),window.removeEventListener("test",Qn,Qn)}catch{Bo=!1}function bs(i,o,l,d,m,_,E,A,b){var $=Array.prototype.slice.call(arguments,3);try{o.apply(l,$)}catch(ee){this.onError(ee)}}var Ds=!1,zo=null,Jn=!1,Cu=null,mf={onError:function(i){Ds=!0,zo=i}};function jo(i,o,l,d,m,_,E,A,b){Ds=!1,zo=null,bs.apply(mf,arguments)}function yc(i,o,l,d,m,_,E,A,b){if(jo.apply(this,arguments),Ds){if(Ds){var $=zo;Ds=!1,zo=null}else throw Error(t(198));Jn||(Jn=!0,Cu=$)}}function Yn(i){var o=i,l=i;if(i.alternate)for(;o.return;)o=o.return;else{i=o;do o=i,o.flags&4098&&(l=o.return),i=o.return;while(i)}return o.tag===3?l:null}function Ns(i){if(i.tag===13){var o=i.memoizedState;if(o===null&&(i=i.alternate,i!==null&&(o=i.memoizedState)),o!==null)return o.dehydrated}return null}function Xn(i){if(Yn(i)!==i)throw Error(t(188))}function vc(i){var o=i.alternate;if(!o){if(o=Yn(i),o===null)throw Error(t(188));return o!==i?null:i}for(var l=i,d=o;;){var m=l.return;if(m===null)break;var _=m.alternate;if(_===null){if(d=m.return,d!==null){l=d;continue}break}if(m.child===_.child){for(_=m.child;_;){if(_===l)return Xn(m),i;if(_===d)return Xn(m),o;_=_.sibling}throw Error(t(188))}if(l.return!==d.return)l=m,d=_;else{for(var E=!1,A=m.child;A;){if(A===l){E=!0,l=m,d=_;break}if(A===d){E=!0,d=m,l=_;break}A=A.sibling}if(!E){for(A=_.child;A;){if(A===l){E=!0,l=_,d=m;break}if(A===d){E=!0,d=_,l=m;break}A=A.sibling}if(!E)throw Error(t(189))}}if(l.alternate!==d)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:o}function ku(i){return i=vc(i),i!==null?$o(i):null}function $o(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var o=$o(i);if(o!==null)return o;i=i.sibling}return null}var qo=e.unstable_scheduleCallback,xu=e.unstable_cancelCallback,wc=e.unstable_shouldYield,gf=e.unstable_requestPaint,Je=e.unstable_now,Ec=e.unstable_getCurrentPriorityLevel,Vs=e.unstable_ImmediatePriority,Pi=e.unstable_UserBlockingPriority,On=e.unstable_NormalPriority,bu=e.unstable_LowPriority,Ic=e.unstable_IdlePriority,Os=null,Rn=null;function Tc(i){if(Rn&&typeof Rn.onCommitFiberRoot=="function")try{Rn.onCommitFiberRoot(Os,i,void 0,(i.current.flags&128)===128)}catch{}}var rn=Math.clz32?Math.clz32:Rc,Du=Math.log,Sc=Math.LN2;function Rc(i){return i>>>=0,i===0?32:31-(Du(i)/Sc|0)|0}var Go=64,Wo=4194304;function Ci(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function Ls(i,o){var l=i.pendingLanes;if(l===0)return 0;var d=0,m=i.suspendedLanes,_=i.pingedLanes,E=l&268435455;if(E!==0){var A=E&~m;A!==0?d=Ci(A):(_&=E,_!==0&&(d=Ci(_)))}else E=l&~m,E!==0?d=Ci(E):_!==0&&(d=Ci(_));if(d===0)return 0;if(o!==0&&o!==d&&!(o&m)&&(m=d&-d,_=o&-o,m>=_||m===16&&(_&4194240)!==0))return o;if(d&4&&(d|=l&16),o=i.entangledLanes,o!==0)for(i=i.entanglements,o&=d;0<o;)l=31-rn(o),m=1<<l,d|=i[l],o&=~m;return d}function _f(i,o){switch(i){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jr(i,o){for(var l=i.suspendedLanes,d=i.pingedLanes,m=i.expirationTimes,_=i.pendingLanes;0<_;){var E=31-rn(_),A=1<<E,b=m[E];b===-1?(!(A&l)||A&d)&&(m[E]=_f(A,o)):b<=o&&(i.expiredLanes|=A),_&=~A}}function An(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function Ms(){var i=Go;return Go<<=1,!(Go&4194240)&&(Go=64),i}function ki(i){for(var o=[],l=0;31>l;l++)o.push(i);return o}function xi(i,o,l){i.pendingLanes|=o,o!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,o=31-rn(o),i[o]=l}function He(i,o){var l=i.pendingLanes&~o;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=o,i.mutableReadLanes&=o,i.entangledLanes&=o,o=i.entanglements;var d=i.eventTimes;for(i=i.expirationTimes;0<l;){var m=31-rn(l),_=1<<m;o[m]=0,d[m]=-1,i[m]=-1,l&=~_}}function bi(i,o){var l=i.entangledLanes|=o;for(i=i.entanglements;l;){var d=31-rn(l),m=1<<d;m&o|i[d]&o&&(i[d]|=o),l&=~m}}var Oe=0;function Di(i){return i&=-i,1<i?4<i?i&268435455?16:536870912:4:1}var Ac,Ko,Pc,Cc,kc,Nu=!1,gr=[],Ut=null,Zn=null,er=null,Ni=new Map,Ln=new Map,_r=[],yf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xc(i,o){switch(i){case"focusin":case"focusout":Ut=null;break;case"dragenter":case"dragleave":Zn=null;break;case"mouseover":case"mouseout":er=null;break;case"pointerover":case"pointerout":Ni.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ln.delete(o.pointerId)}}function pn(i,o,l,d,m,_){return i===null||i.nativeEvent!==_?(i={blockedOn:o,domEventName:l,eventSystemFlags:d,nativeEvent:_,targetContainers:[m]},o!==null&&(o=Hu(o),o!==null&&Ko(o)),i):(i.eventSystemFlags|=d,o=i.targetContainers,m!==null&&o.indexOf(m)===-1&&o.push(m),i)}function vf(i,o,l,d,m){switch(o){case"focusin":return Ut=pn(Ut,i,o,l,d,m),!0;case"dragenter":return Zn=pn(Zn,i,o,l,d,m),!0;case"mouseover":return er=pn(er,i,o,l,d,m),!0;case"pointerover":var _=m.pointerId;return Ni.set(_,pn(Ni.get(_)||null,i,o,l,d,m)),!0;case"gotpointercapture":return _=m.pointerId,Ln.set(_,pn(Ln.get(_)||null,i,o,l,d,m)),!0}return!1}function bc(i){var o=js(i.target);if(o!==null){var l=Yn(o);if(l!==null){if(o=l.tag,o===13){if(o=Ns(l),o!==null){i.blockedOn=o,kc(i.priority,function(){Pc(l)});return}}else if(o===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function $r(i){if(i.blockedOn!==null)return!1;for(var o=i.targetContainers;0<o.length;){var l=Ho(i.domEventName,i.eventSystemFlags,o[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var d=new l.constructor(l.type,l);ks=d,l.target.dispatchEvent(d),ks=null}else return o=Hu(l),o!==null&&Ko(o),i.blockedOn=l,!1;o.shift()}return!0}function Fs(i,o,l){$r(i)&&l.delete(o)}function Dc(){Nu=!1,Ut!==null&&$r(Ut)&&(Ut=null),Zn!==null&&$r(Zn)&&(Zn=null),er!==null&&$r(er)&&(er=null),Ni.forEach(Fs),Ln.forEach(Fs)}function tr(i,o){i.blockedOn===o&&(i.blockedOn=null,Nu||(Nu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Dc)))}function nr(i){function o(m){return tr(m,i)}if(0<gr.length){tr(gr[0],i);for(var l=1;l<gr.length;l++){var d=gr[l];d.blockedOn===i&&(d.blockedOn=null)}}for(Ut!==null&&tr(Ut,i),Zn!==null&&tr(Zn,i),er!==null&&tr(er,i),Ni.forEach(o),Ln.forEach(o),l=0;l<_r.length;l++)d=_r[l],d.blockedOn===i&&(d.blockedOn=null);for(;0<_r.length&&(l=_r[0],l.blockedOn===null);)bc(l),l.blockedOn===null&&_r.shift()}var qr=re.ReactCurrentBatchConfig,Vi=!0;function rt(i,o,l,d){var m=Oe,_=qr.transition;qr.transition=null;try{Oe=1,Vu(i,o,l,d)}finally{Oe=m,qr.transition=_}}function wf(i,o,l,d){var m=Oe,_=qr.transition;qr.transition=null;try{Oe=4,Vu(i,o,l,d)}finally{Oe=m,qr.transition=_}}function Vu(i,o,l,d){if(Vi){var m=Ho(i,o,l,d);if(m===null)bf(i,o,d,Us,l),xc(i,d);else if(vf(m,i,o,l,d))d.stopPropagation();else if(xc(i,d),o&4&&-1<yf.indexOf(i)){for(;m!==null;){var _=Hu(m);if(_!==null&&Ac(_),_=Ho(i,o,l,d),_===null&&bf(i,o,d,Us,l),_===m)break;m=_}m!==null&&d.stopPropagation()}else bf(i,o,d,null,l)}}var Us=null;function Ho(i,o,l,d){if(Us=null,i=Mo(d),i=js(i),i!==null)if(o=Yn(i),o===null)i=null;else if(l=o.tag,l===13){if(i=Ns(o),i!==null)return i;i=null}else if(l===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;i=null}else o!==i&&(i=null);return Us=i,null}function Ou(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ec()){case Vs:return 1;case Pi:return 4;case On:case bu:return 16;case Ic:return 536870912;default:return 16}default:return 16}}var Pn=null,Qo=null,mn=null;function Lu(){if(mn)return mn;var i,o=Qo,l=o.length,d,m="value"in Pn?Pn.value:Pn.textContent,_=m.length;for(i=0;i<l&&o[i]===m[i];i++);var E=l-i;for(d=1;d<=E&&o[l-d]===m[_-d];d++);return mn=m.slice(i,1<d?1-d:void 0)}function Jo(i){var o=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&o===13&&(i=13)):i=o,i===10&&(i=13),32<=i||i===13?i:0}function yr(){return!0}function Mu(){return!1}function Bt(i){function o(l,d,m,_,E){this._reactName=l,this._targetInst=m,this.type=d,this.nativeEvent=_,this.target=E,this.currentTarget=null;for(var A in i)i.hasOwnProperty(A)&&(l=i[A],this[A]=l?l(_):_[A]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?yr:Mu,this.isPropagationStopped=Mu,this}return he(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=yr)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=yr)},persist:function(){},isPersistent:yr}),o}var rr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yo=Bt(rr),vr=he({},rr,{view:0,detail:0}),Ef=Bt(vr),Xo,Gr,Oi,Bs=he({},vr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wr,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Oi&&(Oi&&i.type==="mousemove"?(Xo=i.screenX-Oi.screenX,Gr=i.screenY-Oi.screenY):Gr=Xo=0,Oi=i),Xo)},movementY:function(i){return"movementY"in i?i.movementY:Gr}}),Zo=Bt(Bs),Fu=he({},Bs,{dataTransfer:0}),Nc=Bt(Fu),ea=he({},vr,{relatedTarget:0}),ta=Bt(ea),Vc=he({},rr,{animationName:0,elapsedTime:0,pseudoElement:0}),Wr=Bt(Vc),Oc=he({},rr,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),Lc=Bt(Oc),Mc=he({},rr,{data:0}),Uu=Bt(Mc),na={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Uc(i){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(i):(i=Fc[i])?!!o[i]:!1}function wr(){return Uc}var c=he({},vr,{key:function(i){if(i.key){var o=na[i.key]||i.key;if(o!=="Unidentified")return o}return i.type==="keypress"?(i=Jo(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?sn[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wr,charCode:function(i){return i.type==="keypress"?Jo(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Jo(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),g=Bt(c),v=he({},Bs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),T=Bt(v),B=he({},vr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wr}),W=Bt(B),ie=he({},rr,{propertyName:0,elapsedTime:0,pseudoElement:0}),qe=Bt(ie),Pt=he({},Bs,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),Me=Bt(Pt),Nt=[9,13,27,32],It=h&&"CompositionEvent"in window,Mn=null;h&&"documentMode"in document&&(Mn=document.documentMode);var Cn=h&&"TextEvent"in window&&!Mn,zs=h&&(!It||Mn&&8<Mn&&11>=Mn),ra=" ",E_=!1;function I_(i,o){switch(i){case"keyup":return Nt.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function T_(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var ia=!1;function iA(i,o){switch(i){case"compositionend":return T_(o);case"keypress":return o.which!==32?null:(E_=!0,ra);case"textInput":return i=o.data,i===ra&&E_?null:i;default:return null}}function sA(i,o){if(ia)return i==="compositionend"||!It&&I_(i,o)?(i=Lu(),mn=Qo=Pn=null,ia=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return zs&&o.locale!=="ko"?null:o.data;default:return null}}var oA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function S_(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o==="input"?!!oA[i.type]:o==="textarea"}function R_(i,o,l,d){mr(d),o=qc(o,"onChange"),0<o.length&&(l=new Yo("onChange","change",null,l,d),i.push({event:l,listeners:o}))}var Bu=null,zu=null;function aA(i){$_(i,0)}function Bc(i){var o=la(i);if(Do(o))return i}function uA(i,o){if(i==="change")return o}var A_=!1;if(h){var If;if(h){var Tf="oninput"in document;if(!Tf){var P_=document.createElement("div");P_.setAttribute("oninput","return;"),Tf=typeof P_.oninput=="function"}If=Tf}else If=!1;A_=If&&(!document.documentMode||9<document.documentMode)}function C_(){Bu&&(Bu.detachEvent("onpropertychange",k_),zu=Bu=null)}function k_(i){if(i.propertyName==="value"&&Bc(zu)){var o=[];R_(o,zu,i,Mo(i)),Pu(aA,o)}}function lA(i,o,l){i==="focusin"?(C_(),Bu=o,zu=l,Bu.attachEvent("onpropertychange",k_)):i==="focusout"&&C_()}function cA(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Bc(zu)}function hA(i,o){if(i==="click")return Bc(o)}function dA(i,o){if(i==="input"||i==="change")return Bc(o)}function fA(i,o){return i===o&&(i!==0||1/i===1/o)||i!==i&&o!==o}var ir=typeof Object.is=="function"?Object.is:fA;function ju(i,o){if(ir(i,o))return!0;if(typeof i!="object"||i===null||typeof o!="object"||o===null)return!1;var l=Object.keys(i),d=Object.keys(o);if(l.length!==d.length)return!1;for(d=0;d<l.length;d++){var m=l[d];if(!f.call(o,m)||!ir(i[m],o[m]))return!1}return!0}function x_(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function b_(i,o){var l=x_(i);i=0;for(var d;l;){if(l.nodeType===3){if(d=i+l.textContent.length,i<=o&&d>=o)return{node:l,offset:o-i};i=d}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=x_(l)}}function D_(i,o){return i&&o?i===o?!0:i&&i.nodeType===3?!1:o&&o.nodeType===3?D_(i,o.parentNode):"contains"in i?i.contains(o):i.compareDocumentPosition?!!(i.compareDocumentPosition(o)&16):!1:!1}function N_(){for(var i=window,o=Ri();o instanceof i.HTMLIFrameElement;){try{var l=typeof o.contentWindow.location.href=="string"}catch{l=!1}if(l)i=o.contentWindow;else break;o=Ri(i.document)}return o}function Sf(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o&&(o==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||o==="textarea"||i.contentEditable==="true")}function pA(i){var o=N_(),l=i.focusedElem,d=i.selectionRange;if(o!==l&&l&&l.ownerDocument&&D_(l.ownerDocument.documentElement,l)){if(d!==null&&Sf(l)){if(o=d.start,i=d.end,i===void 0&&(i=o),"selectionStart"in l)l.selectionStart=o,l.selectionEnd=Math.min(i,l.value.length);else if(i=(o=l.ownerDocument||document)&&o.defaultView||window,i.getSelection){i=i.getSelection();var m=l.textContent.length,_=Math.min(d.start,m);d=d.end===void 0?_:Math.min(d.end,m),!i.extend&&_>d&&(m=d,d=_,_=m),m=b_(l,_);var E=b_(l,d);m&&E&&(i.rangeCount!==1||i.anchorNode!==m.node||i.anchorOffset!==m.offset||i.focusNode!==E.node||i.focusOffset!==E.offset)&&(o=o.createRange(),o.setStart(m.node,m.offset),i.removeAllRanges(),_>d?(i.addRange(o),i.extend(E.node,E.offset)):(o.setEnd(E.node,E.offset),i.addRange(o)))}}for(o=[],i=l;i=i.parentNode;)i.nodeType===1&&o.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<o.length;l++)i=o[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var mA=h&&"documentMode"in document&&11>=document.documentMode,sa=null,Rf=null,$u=null,Af=!1;function V_(i,o,l){var d=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Af||sa==null||sa!==Ri(d)||(d=sa,"selectionStart"in d&&Sf(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),$u&&ju($u,d)||($u=d,d=qc(Rf,"onSelect"),0<d.length&&(o=new Yo("onSelect","select",null,o,l),i.push({event:o,listeners:d}),o.target=sa)))}function zc(i,o){var l={};return l[i.toLowerCase()]=o.toLowerCase(),l["Webkit"+i]="webkit"+o,l["Moz"+i]="moz"+o,l}var oa={animationend:zc("Animation","AnimationEnd"),animationiteration:zc("Animation","AnimationIteration"),animationstart:zc("Animation","AnimationStart"),transitionend:zc("Transition","TransitionEnd")},Pf={},O_={};h&&(O_=document.createElement("div").style,"AnimationEvent"in window||(delete oa.animationend.animation,delete oa.animationiteration.animation,delete oa.animationstart.animation),"TransitionEvent"in window||delete oa.transitionend.transition);function jc(i){if(Pf[i])return Pf[i];if(!oa[i])return i;var o=oa[i],l;for(l in o)if(o.hasOwnProperty(l)&&l in O_)return Pf[i]=o[l];return i}var L_=jc("animationend"),M_=jc("animationiteration"),F_=jc("animationstart"),U_=jc("transitionend"),B_=new Map,z_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Li(i,o){B_.set(i,o),a(o,[i])}for(var Cf=0;Cf<z_.length;Cf++){var kf=z_[Cf],gA=kf.toLowerCase(),_A=kf[0].toUpperCase()+kf.slice(1);Li(gA,"on"+_A)}Li(L_,"onAnimationEnd"),Li(M_,"onAnimationIteration"),Li(F_,"onAnimationStart"),Li("dblclick","onDoubleClick"),Li("focusin","onFocus"),Li("focusout","onBlur"),Li(U_,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yA=new Set("cancel close invalid load scroll toggle".split(" ").concat(qu));function j_(i,o,l){var d=i.type||"unknown-event";i.currentTarget=l,yc(d,o,void 0,i),i.currentTarget=null}function $_(i,o){o=(o&4)!==0;for(var l=0;l<i.length;l++){var d=i[l],m=d.event;d=d.listeners;e:{var _=void 0;if(o)for(var E=d.length-1;0<=E;E--){var A=d[E],b=A.instance,$=A.currentTarget;if(A=A.listener,b!==_&&m.isPropagationStopped())break e;j_(m,A,$),_=b}else for(E=0;E<d.length;E++){if(A=d[E],b=A.instance,$=A.currentTarget,A=A.listener,b!==_&&m.isPropagationStopped())break e;j_(m,A,$),_=b}}}if(Jn)throw i=Cu,Jn=!1,Cu=null,i}function Ze(i,o){var l=o[Mf];l===void 0&&(l=o[Mf]=new Set);var d=i+"__bubble";l.has(d)||(q_(o,i,2,!1),l.add(d))}function xf(i,o,l){var d=0;o&&(d|=4),q_(l,i,d,o)}var $c="_reactListening"+Math.random().toString(36).slice(2);function Gu(i){if(!i[$c]){i[$c]=!0,r.forEach(function(l){l!=="selectionchange"&&(yA.has(l)||xf(l,!1,i),xf(l,!0,i))});var o=i.nodeType===9?i:i.ownerDocument;o===null||o[$c]||(o[$c]=!0,xf("selectionchange",!1,o))}}function q_(i,o,l,d){switch(Ou(o)){case 1:var m=rt;break;case 4:m=wf;break;default:m=Vu}l=m.bind(null,o,l,i),m=void 0,!Bo||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(m=!0),d?m!==void 0?i.addEventListener(o,l,{capture:!0,passive:m}):i.addEventListener(o,l,!0):m!==void 0?i.addEventListener(o,l,{passive:m}):i.addEventListener(o,l,!1)}function bf(i,o,l,d,m){var _=d;if(!(o&1)&&!(o&2)&&d!==null)e:for(;;){if(d===null)return;var E=d.tag;if(E===3||E===4){var A=d.stateNode.containerInfo;if(A===m||A.nodeType===8&&A.parentNode===m)break;if(E===4)for(E=d.return;E!==null;){var b=E.tag;if((b===3||b===4)&&(b=E.stateNode.containerInfo,b===m||b.nodeType===8&&b.parentNode===m))return;E=E.return}for(;A!==null;){if(E=js(A),E===null)return;if(b=E.tag,b===5||b===6){d=_=E;continue e}A=A.parentNode}}d=d.return}Pu(function(){var $=_,ee=Mo(l),te=[];e:{var X=B_.get(i);if(X!==void 0){var ue=Yo,pe=i;switch(i){case"keypress":if(Jo(l)===0)break e;case"keydown":case"keyup":ue=g;break;case"focusin":pe="focus",ue=ta;break;case"focusout":pe="blur",ue=ta;break;case"beforeblur":case"afterblur":ue=ta;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ue=Zo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ue=Nc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ue=W;break;case L_:case M_:case F_:ue=Wr;break;case U_:ue=qe;break;case"scroll":ue=Ef;break;case"wheel":ue=Me;break;case"copy":case"cut":case"paste":ue=Lc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ue=T}var _e=(o&4)!==0,yt=!_e&&i==="scroll",z=_e?X!==null?X+"Capture":null:X;_e=[];for(var V=$,j;V!==null;){j=V;var ne=j.stateNode;if(j.tag===5&&ne!==null&&(j=ne,z!==null&&(ne=_t(V,z),ne!=null&&_e.push(Wu(V,ne,j)))),yt)break;V=V.return}0<_e.length&&(X=new ue(X,pe,null,l,ee),te.push({event:X,listeners:_e}))}}if(!(o&7)){e:{if(X=i==="mouseover"||i==="pointerover",ue=i==="mouseout"||i==="pointerout",X&&l!==ks&&(pe=l.relatedTarget||l.fromElement)&&(js(pe)||pe[Kr]))break e;if((ue||X)&&(X=ee.window===ee?ee:(X=ee.ownerDocument)?X.defaultView||X.parentWindow:window,ue?(pe=l.relatedTarget||l.toElement,ue=$,pe=pe?js(pe):null,pe!==null&&(yt=Yn(pe),pe!==yt||pe.tag!==5&&pe.tag!==6)&&(pe=null)):(ue=null,pe=$),ue!==pe)){if(_e=Zo,ne="onMouseLeave",z="onMouseEnter",V="mouse",(i==="pointerout"||i==="pointerover")&&(_e=T,ne="onPointerLeave",z="onPointerEnter",V="pointer"),yt=ue==null?X:la(ue),j=pe==null?X:la(pe),X=new _e(ne,V+"leave",ue,l,ee),X.target=yt,X.relatedTarget=j,ne=null,js(ee)===$&&(_e=new _e(z,V+"enter",pe,l,ee),_e.target=j,_e.relatedTarget=yt,ne=_e),yt=ne,ue&&pe)t:{for(_e=ue,z=pe,V=0,j=_e;j;j=aa(j))V++;for(j=0,ne=z;ne;ne=aa(ne))j++;for(;0<V-j;)_e=aa(_e),V--;for(;0<j-V;)z=aa(z),j--;for(;V--;){if(_e===z||z!==null&&_e===z.alternate)break t;_e=aa(_e),z=aa(z)}_e=null}else _e=null;ue!==null&&G_(te,X,ue,_e,!1),pe!==null&&yt!==null&&G_(te,yt,pe,_e,!0)}}e:{if(X=$?la($):window,ue=X.nodeName&&X.nodeName.toLowerCase(),ue==="select"||ue==="input"&&X.type==="file")var ye=uA;else if(S_(X))if(A_)ye=dA;else{ye=cA;var Ie=lA}else(ue=X.nodeName)&&ue.toLowerCase()==="input"&&(X.type==="checkbox"||X.type==="radio")&&(ye=hA);if(ye&&(ye=ye(i,$))){R_(te,ye,l,ee);break e}Ie&&Ie(i,X,$),i==="focusout"&&(Ie=X._wrapperState)&&Ie.controlled&&X.type==="number"&&Vo(X,"number",X.value)}switch(Ie=$?la($):window,i){case"focusin":(S_(Ie)||Ie.contentEditable==="true")&&(sa=Ie,Rf=$,$u=null);break;case"focusout":$u=Rf=sa=null;break;case"mousedown":Af=!0;break;case"contextmenu":case"mouseup":case"dragend":Af=!1,V_(te,l,ee);break;case"selectionchange":if(mA)break;case"keydown":case"keyup":V_(te,l,ee)}var Te;if(It)e:{switch(i){case"compositionstart":var Re="onCompositionStart";break e;case"compositionend":Re="onCompositionEnd";break e;case"compositionupdate":Re="onCompositionUpdate";break e}Re=void 0}else ia?I_(i,l)&&(Re="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(Re="onCompositionStart");Re&&(zs&&l.locale!=="ko"&&(ia||Re!=="onCompositionStart"?Re==="onCompositionEnd"&&ia&&(Te=Lu()):(Pn=ee,Qo="value"in Pn?Pn.value:Pn.textContent,ia=!0)),Ie=qc($,Re),0<Ie.length&&(Re=new Uu(Re,i,null,l,ee),te.push({event:Re,listeners:Ie}),Te?Re.data=Te:(Te=T_(l),Te!==null&&(Re.data=Te)))),(Te=Cn?iA(i,l):sA(i,l))&&($=qc($,"onBeforeInput"),0<$.length&&(ee=new Uu("onBeforeInput","beforeinput",null,l,ee),te.push({event:ee,listeners:$}),ee.data=Te))}$_(te,o)})}function Wu(i,o,l){return{instance:i,listener:o,currentTarget:l}}function qc(i,o){for(var l=o+"Capture",d=[];i!==null;){var m=i,_=m.stateNode;m.tag===5&&_!==null&&(m=_,_=_t(i,l),_!=null&&d.unshift(Wu(i,_,m)),_=_t(i,o),_!=null&&d.push(Wu(i,_,m))),i=i.return}return d}function aa(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function G_(i,o,l,d,m){for(var _=o._reactName,E=[];l!==null&&l!==d;){var A=l,b=A.alternate,$=A.stateNode;if(b!==null&&b===d)break;A.tag===5&&$!==null&&(A=$,m?(b=_t(l,_),b!=null&&E.unshift(Wu(l,b,A))):m||(b=_t(l,_),b!=null&&E.push(Wu(l,b,A)))),l=l.return}E.length!==0&&i.push({event:o,listeners:E})}var vA=/\r\n?/g,wA=/\u0000|\uFFFD/g;function W_(i){return(typeof i=="string"?i:""+i).replace(vA,`
`).replace(wA,"")}function Gc(i,o,l){if(o=W_(o),W_(i)!==o&&l)throw Error(t(425))}function Wc(){}var Df=null,Nf=null;function Vf(i,o){return i==="textarea"||i==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var Of=typeof setTimeout=="function"?setTimeout:void 0,EA=typeof clearTimeout=="function"?clearTimeout:void 0,K_=typeof Promise=="function"?Promise:void 0,IA=typeof queueMicrotask=="function"?queueMicrotask:typeof K_<"u"?function(i){return K_.resolve(null).then(i).catch(TA)}:Of;function TA(i){setTimeout(function(){throw i})}function Lf(i,o){var l=o,d=0;do{var m=l.nextSibling;if(i.removeChild(l),m&&m.nodeType===8)if(l=m.data,l==="/$"){if(d===0){i.removeChild(m),nr(o);return}d--}else l!=="$"&&l!=="$?"&&l!=="$!"||d++;l=m}while(l);nr(o)}function Mi(i){for(;i!=null;i=i.nextSibling){var o=i.nodeType;if(o===1||o===3)break;if(o===8){if(o=i.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return i}function H_(i){i=i.previousSibling;for(var o=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(o===0)return i;o--}else l==="/$"&&o++}i=i.previousSibling}return null}var ua=Math.random().toString(36).slice(2),Er="__reactFiber$"+ua,Ku="__reactProps$"+ua,Kr="__reactContainer$"+ua,Mf="__reactEvents$"+ua,SA="__reactListeners$"+ua,RA="__reactHandles$"+ua;function js(i){var o=i[Er];if(o)return o;for(var l=i.parentNode;l;){if(o=l[Kr]||l[Er]){if(l=o.alternate,o.child!==null||l!==null&&l.child!==null)for(i=H_(i);i!==null;){if(l=i[Er])return l;i=H_(i)}return o}i=l,l=i.parentNode}return null}function Hu(i){return i=i[Er]||i[Kr],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function la(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function Kc(i){return i[Ku]||null}var Ff=[],ca=-1;function Fi(i){return{current:i}}function et(i){0>ca||(i.current=Ff[ca],Ff[ca]=null,ca--)}function Ye(i,o){ca++,Ff[ca]=i.current,i.current=o}var Ui={},Ht=Fi(Ui),gn=Fi(!1),$s=Ui;function ha(i,o){var l=i.type.contextTypes;if(!l)return Ui;var d=i.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===o)return d.__reactInternalMemoizedMaskedChildContext;var m={},_;for(_ in l)m[_]=o[_];return d&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=o,i.__reactInternalMemoizedMaskedChildContext=m),m}function _n(i){return i=i.childContextTypes,i!=null}function Hc(){et(gn),et(Ht)}function Q_(i,o,l){if(Ht.current!==Ui)throw Error(t(168));Ye(Ht,o),Ye(gn,l)}function J_(i,o,l){var d=i.stateNode;if(o=o.childContextTypes,typeof d.getChildContext!="function")return l;d=d.getChildContext();for(var m in d)if(!(m in o))throw Error(t(108,je(i)||"Unknown",m));return he({},l,d)}function Qc(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||Ui,$s=Ht.current,Ye(Ht,i),Ye(gn,gn.current),!0}function Y_(i,o,l){var d=i.stateNode;if(!d)throw Error(t(169));l?(i=J_(i,o,$s),d.__reactInternalMemoizedMergedChildContext=i,et(gn),et(Ht),Ye(Ht,i)):et(gn),Ye(gn,l)}var Hr=null,Jc=!1,Uf=!1;function X_(i){Hr===null?Hr=[i]:Hr.push(i)}function AA(i){Jc=!0,X_(i)}function Bi(){if(!Uf&&Hr!==null){Uf=!0;var i=0,o=Oe;try{var l=Hr;for(Oe=1;i<l.length;i++){var d=l[i];do d=d(!0);while(d!==null)}Hr=null,Jc=!1}catch(m){throw Hr!==null&&(Hr=Hr.slice(i+1)),qo(Vs,Bi),m}finally{Oe=o,Uf=!1}}return null}var da=[],fa=0,Yc=null,Xc=0,Fn=[],Un=0,qs=null,Qr=1,Jr="";function Gs(i,o){da[fa++]=Xc,da[fa++]=Yc,Yc=i,Xc=o}function Z_(i,o,l){Fn[Un++]=Qr,Fn[Un++]=Jr,Fn[Un++]=qs,qs=i;var d=Qr;i=Jr;var m=32-rn(d)-1;d&=~(1<<m),l+=1;var _=32-rn(o)+m;if(30<_){var E=m-m%5;_=(d&(1<<E)-1).toString(32),d>>=E,m-=E,Qr=1<<32-rn(o)+m|l<<m|d,Jr=_+i}else Qr=1<<_|l<<m|d,Jr=i}function Bf(i){i.return!==null&&(Gs(i,1),Z_(i,1,0))}function zf(i){for(;i===Yc;)Yc=da[--fa],da[fa]=null,Xc=da[--fa],da[fa]=null;for(;i===qs;)qs=Fn[--Un],Fn[Un]=null,Jr=Fn[--Un],Fn[Un]=null,Qr=Fn[--Un],Fn[Un]=null}var kn=null,xn=null,it=!1,sr=null;function ey(i,o){var l=$n(5,null,null,0);l.elementType="DELETED",l.stateNode=o,l.return=i,o=i.deletions,o===null?(i.deletions=[l],i.flags|=16):o.push(l)}function ty(i,o){switch(i.tag){case 5:var l=i.type;return o=o.nodeType!==1||l.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(i.stateNode=o,kn=i,xn=Mi(o.firstChild),!0):!1;case 6:return o=i.pendingProps===""||o.nodeType!==3?null:o,o!==null?(i.stateNode=o,kn=i,xn=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(l=qs!==null?{id:Qr,overflow:Jr}:null,i.memoizedState={dehydrated:o,treeContext:l,retryLane:1073741824},l=$n(18,null,null,0),l.stateNode=o,l.return=i,i.child=l,kn=i,xn=null,!0):!1;default:return!1}}function jf(i){return(i.mode&1)!==0&&(i.flags&128)===0}function $f(i){if(it){var o=xn;if(o){var l=o;if(!ty(i,o)){if(jf(i))throw Error(t(418));o=Mi(l.nextSibling);var d=kn;o&&ty(i,o)?ey(d,l):(i.flags=i.flags&-4097|2,it=!1,kn=i)}}else{if(jf(i))throw Error(t(418));i.flags=i.flags&-4097|2,it=!1,kn=i}}}function ny(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;kn=i}function Zc(i){if(i!==kn)return!1;if(!it)return ny(i),it=!0,!1;var o;if((o=i.tag!==3)&&!(o=i.tag!==5)&&(o=i.type,o=o!=="head"&&o!=="body"&&!Vf(i.type,i.memoizedProps)),o&&(o=xn)){if(jf(i))throw ry(),Error(t(418));for(;o;)ey(i,o),o=Mi(o.nextSibling)}if(ny(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,o=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(o===0){xn=Mi(i.nextSibling);break e}o--}else l!=="$"&&l!=="$!"&&l!=="$?"||o++}i=i.nextSibling}xn=null}}else xn=kn?Mi(i.stateNode.nextSibling):null;return!0}function ry(){for(var i=xn;i;)i=Mi(i.nextSibling)}function pa(){xn=kn=null,it=!1}function qf(i){sr===null?sr=[i]:sr.push(i)}var PA=re.ReactCurrentBatchConfig;function Qu(i,o,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var d=l.stateNode}if(!d)throw Error(t(147,i));var m=d,_=""+i;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===_?o.ref:(o=function(E){var A=m.refs;E===null?delete A[_]:A[_]=E},o._stringRef=_,o)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function eh(i,o){throw i=Object.prototype.toString.call(o),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":i))}function iy(i){var o=i._init;return o(i._payload)}function sy(i){function o(z,V){if(i){var j=z.deletions;j===null?(z.deletions=[V],z.flags|=16):j.push(V)}}function l(z,V){if(!i)return null;for(;V!==null;)o(z,V),V=V.sibling;return null}function d(z,V){for(z=new Map;V!==null;)V.key!==null?z.set(V.key,V):z.set(V.index,V),V=V.sibling;return z}function m(z,V){return z=Hi(z,V),z.index=0,z.sibling=null,z}function _(z,V,j){return z.index=j,i?(j=z.alternate,j!==null?(j=j.index,j<V?(z.flags|=2,V):j):(z.flags|=2,V)):(z.flags|=1048576,V)}function E(z){return i&&z.alternate===null&&(z.flags|=2),z}function A(z,V,j,ne){return V===null||V.tag!==6?(V=Op(j,z.mode,ne),V.return=z,V):(V=m(V,j),V.return=z,V)}function b(z,V,j,ne){var ye=j.type;return ye===x?ee(z,V,j.props.children,ne,j.key):V!==null&&(V.elementType===ye||typeof ye=="object"&&ye!==null&&ye.$$typeof===Kt&&iy(ye)===V.type)?(ne=m(V,j.props),ne.ref=Qu(z,V,j),ne.return=z,ne):(ne=Sh(j.type,j.key,j.props,null,z.mode,ne),ne.ref=Qu(z,V,j),ne.return=z,ne)}function $(z,V,j,ne){return V===null||V.tag!==4||V.stateNode.containerInfo!==j.containerInfo||V.stateNode.implementation!==j.implementation?(V=Lp(j,z.mode,ne),V.return=z,V):(V=m(V,j.children||[]),V.return=z,V)}function ee(z,V,j,ne,ye){return V===null||V.tag!==7?(V=Zs(j,z.mode,ne,ye),V.return=z,V):(V=m(V,j),V.return=z,V)}function te(z,V,j){if(typeof V=="string"&&V!==""||typeof V=="number")return V=Op(""+V,z.mode,j),V.return=z,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case me:return j=Sh(V.type,V.key,V.props,null,z.mode,j),j.ref=Qu(z,null,V),j.return=z,j;case de:return V=Lp(V,z.mode,j),V.return=z,V;case Kt:var ne=V._init;return te(z,ne(V._payload),j)}if(Fr(V)||Ee(V))return V=Zs(V,z.mode,j,null),V.return=z,V;eh(z,V)}return null}function X(z,V,j,ne){var ye=V!==null?V.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return ye!==null?null:A(z,V,""+j,ne);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case me:return j.key===ye?b(z,V,j,ne):null;case de:return j.key===ye?$(z,V,j,ne):null;case Kt:return ye=j._init,X(z,V,ye(j._payload),ne)}if(Fr(j)||Ee(j))return ye!==null?null:ee(z,V,j,ne,null);eh(z,j)}return null}function ue(z,V,j,ne,ye){if(typeof ne=="string"&&ne!==""||typeof ne=="number")return z=z.get(j)||null,A(V,z,""+ne,ye);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case me:return z=z.get(ne.key===null?j:ne.key)||null,b(V,z,ne,ye);case de:return z=z.get(ne.key===null?j:ne.key)||null,$(V,z,ne,ye);case Kt:var Ie=ne._init;return ue(z,V,j,Ie(ne._payload),ye)}if(Fr(ne)||Ee(ne))return z=z.get(j)||null,ee(V,z,ne,ye,null);eh(V,ne)}return null}function pe(z,V,j,ne){for(var ye=null,Ie=null,Te=V,Re=V=0,Lt=null;Te!==null&&Re<j.length;Re++){Te.index>Re?(Lt=Te,Te=null):Lt=Te.sibling;var Be=X(z,Te,j[Re],ne);if(Be===null){Te===null&&(Te=Lt);break}i&&Te&&Be.alternate===null&&o(z,Te),V=_(Be,V,Re),Ie===null?ye=Be:Ie.sibling=Be,Ie=Be,Te=Lt}if(Re===j.length)return l(z,Te),it&&Gs(z,Re),ye;if(Te===null){for(;Re<j.length;Re++)Te=te(z,j[Re],ne),Te!==null&&(V=_(Te,V,Re),Ie===null?ye=Te:Ie.sibling=Te,Ie=Te);return it&&Gs(z,Re),ye}for(Te=d(z,Te);Re<j.length;Re++)Lt=ue(Te,z,Re,j[Re],ne),Lt!==null&&(i&&Lt.alternate!==null&&Te.delete(Lt.key===null?Re:Lt.key),V=_(Lt,V,Re),Ie===null?ye=Lt:Ie.sibling=Lt,Ie=Lt);return i&&Te.forEach(function(Qi){return o(z,Qi)}),it&&Gs(z,Re),ye}function _e(z,V,j,ne){var ye=Ee(j);if(typeof ye!="function")throw Error(t(150));if(j=ye.call(j),j==null)throw Error(t(151));for(var Ie=ye=null,Te=V,Re=V=0,Lt=null,Be=j.next();Te!==null&&!Be.done;Re++,Be=j.next()){Te.index>Re?(Lt=Te,Te=null):Lt=Te.sibling;var Qi=X(z,Te,Be.value,ne);if(Qi===null){Te===null&&(Te=Lt);break}i&&Te&&Qi.alternate===null&&o(z,Te),V=_(Qi,V,Re),Ie===null?ye=Qi:Ie.sibling=Qi,Ie=Qi,Te=Lt}if(Be.done)return l(z,Te),it&&Gs(z,Re),ye;if(Te===null){for(;!Be.done;Re++,Be=j.next())Be=te(z,Be.value,ne),Be!==null&&(V=_(Be,V,Re),Ie===null?ye=Be:Ie.sibling=Be,Ie=Be);return it&&Gs(z,Re),ye}for(Te=d(z,Te);!Be.done;Re++,Be=j.next())Be=ue(Te,z,Re,Be.value,ne),Be!==null&&(i&&Be.alternate!==null&&Te.delete(Be.key===null?Re:Be.key),V=_(Be,V,Re),Ie===null?ye=Be:Ie.sibling=Be,Ie=Be);return i&&Te.forEach(function(sP){return o(z,sP)}),it&&Gs(z,Re),ye}function yt(z,V,j,ne){if(typeof j=="object"&&j!==null&&j.type===x&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case me:e:{for(var ye=j.key,Ie=V;Ie!==null;){if(Ie.key===ye){if(ye=j.type,ye===x){if(Ie.tag===7){l(z,Ie.sibling),V=m(Ie,j.props.children),V.return=z,z=V;break e}}else if(Ie.elementType===ye||typeof ye=="object"&&ye!==null&&ye.$$typeof===Kt&&iy(ye)===Ie.type){l(z,Ie.sibling),V=m(Ie,j.props),V.ref=Qu(z,Ie,j),V.return=z,z=V;break e}l(z,Ie);break}else o(z,Ie);Ie=Ie.sibling}j.type===x?(V=Zs(j.props.children,z.mode,ne,j.key),V.return=z,z=V):(ne=Sh(j.type,j.key,j.props,null,z.mode,ne),ne.ref=Qu(z,V,j),ne.return=z,z=ne)}return E(z);case de:e:{for(Ie=j.key;V!==null;){if(V.key===Ie)if(V.tag===4&&V.stateNode.containerInfo===j.containerInfo&&V.stateNode.implementation===j.implementation){l(z,V.sibling),V=m(V,j.children||[]),V.return=z,z=V;break e}else{l(z,V);break}else o(z,V);V=V.sibling}V=Lp(j,z.mode,ne),V.return=z,z=V}return E(z);case Kt:return Ie=j._init,yt(z,V,Ie(j._payload),ne)}if(Fr(j))return pe(z,V,j,ne);if(Ee(j))return _e(z,V,j,ne);eh(z,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,V!==null&&V.tag===6?(l(z,V.sibling),V=m(V,j),V.return=z,z=V):(l(z,V),V=Op(j,z.mode,ne),V.return=z,z=V),E(z)):l(z,V)}return yt}var ma=sy(!0),oy=sy(!1),th=Fi(null),nh=null,ga=null,Gf=null;function Wf(){Gf=ga=nh=null}function Kf(i){var o=th.current;et(th),i._currentValue=o}function Hf(i,o,l){for(;i!==null;){var d=i.alternate;if((i.childLanes&o)!==o?(i.childLanes|=o,d!==null&&(d.childLanes|=o)):d!==null&&(d.childLanes&o)!==o&&(d.childLanes|=o),i===l)break;i=i.return}}function _a(i,o){nh=i,Gf=ga=null,i=i.dependencies,i!==null&&i.firstContext!==null&&(i.lanes&o&&(yn=!0),i.firstContext=null)}function Bn(i){var o=i._currentValue;if(Gf!==i)if(i={context:i,memoizedValue:o,next:null},ga===null){if(nh===null)throw Error(t(308));ga=i,nh.dependencies={lanes:0,firstContext:i}}else ga=ga.next=i;return o}var Ws=null;function Qf(i){Ws===null?Ws=[i]:Ws.push(i)}function ay(i,o,l,d){var m=o.interleaved;return m===null?(l.next=l,Qf(o)):(l.next=m.next,m.next=l),o.interleaved=l,Yr(i,d)}function Yr(i,o){i.lanes|=o;var l=i.alternate;for(l!==null&&(l.lanes|=o),l=i,i=i.return;i!==null;)i.childLanes|=o,l=i.alternate,l!==null&&(l.childLanes|=o),l=i,i=i.return;return l.tag===3?l.stateNode:null}var zi=!1;function Jf(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function uy(i,o){i=i.updateQueue,o.updateQueue===i&&(o.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function Xr(i,o){return{eventTime:i,lane:o,tag:0,payload:null,callback:null,next:null}}function ji(i,o,l){var d=i.updateQueue;if(d===null)return null;if(d=d.shared,Ue&2){var m=d.pending;return m===null?o.next=o:(o.next=m.next,m.next=o),d.pending=o,Yr(i,l)}return m=d.interleaved,m===null?(o.next=o,Qf(d)):(o.next=m.next,m.next=o),d.interleaved=o,Yr(i,l)}function rh(i,o,l){if(o=o.updateQueue,o!==null&&(o=o.shared,(l&4194240)!==0)){var d=o.lanes;d&=i.pendingLanes,l|=d,o.lanes=l,bi(i,l)}}function ly(i,o){var l=i.updateQueue,d=i.alternate;if(d!==null&&(d=d.updateQueue,l===d)){var m=null,_=null;if(l=l.firstBaseUpdate,l!==null){do{var E={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};_===null?m=_=E:_=_.next=E,l=l.next}while(l!==null);_===null?m=_=o:_=_.next=o}else m=_=o;l={baseState:d.baseState,firstBaseUpdate:m,lastBaseUpdate:_,shared:d.shared,effects:d.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=o:i.next=o,l.lastBaseUpdate=o}function ih(i,o,l,d){var m=i.updateQueue;zi=!1;var _=m.firstBaseUpdate,E=m.lastBaseUpdate,A=m.shared.pending;if(A!==null){m.shared.pending=null;var b=A,$=b.next;b.next=null,E===null?_=$:E.next=$,E=b;var ee=i.alternate;ee!==null&&(ee=ee.updateQueue,A=ee.lastBaseUpdate,A!==E&&(A===null?ee.firstBaseUpdate=$:A.next=$,ee.lastBaseUpdate=b))}if(_!==null){var te=m.baseState;E=0,ee=$=b=null,A=_;do{var X=A.lane,ue=A.eventTime;if((d&X)===X){ee!==null&&(ee=ee.next={eventTime:ue,lane:0,tag:A.tag,payload:A.payload,callback:A.callback,next:null});e:{var pe=i,_e=A;switch(X=o,ue=l,_e.tag){case 1:if(pe=_e.payload,typeof pe=="function"){te=pe.call(ue,te,X);break e}te=pe;break e;case 3:pe.flags=pe.flags&-65537|128;case 0:if(pe=_e.payload,X=typeof pe=="function"?pe.call(ue,te,X):pe,X==null)break e;te=he({},te,X);break e;case 2:zi=!0}}A.callback!==null&&A.lane!==0&&(i.flags|=64,X=m.effects,X===null?m.effects=[A]:X.push(A))}else ue={eventTime:ue,lane:X,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ee===null?($=ee=ue,b=te):ee=ee.next=ue,E|=X;if(A=A.next,A===null){if(A=m.shared.pending,A===null)break;X=A,A=X.next,X.next=null,m.lastBaseUpdate=X,m.shared.pending=null}}while(!0);if(ee===null&&(b=te),m.baseState=b,m.firstBaseUpdate=$,m.lastBaseUpdate=ee,o=m.shared.interleaved,o!==null){m=o;do E|=m.lane,m=m.next;while(m!==o)}else _===null&&(m.shared.lanes=0);Qs|=E,i.lanes=E,i.memoizedState=te}}function cy(i,o,l){if(i=o.effects,o.effects=null,i!==null)for(o=0;o<i.length;o++){var d=i[o],m=d.callback;if(m!==null){if(d.callback=null,d=l,typeof m!="function")throw Error(t(191,m));m.call(d)}}}var Ju={},Ir=Fi(Ju),Yu=Fi(Ju),Xu=Fi(Ju);function Ks(i){if(i===Ju)throw Error(t(174));return i}function Yf(i,o){switch(Ye(Xu,o),Ye(Yu,i),Ye(Ir,Ju),i=o.nodeType,i){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:At(null,"");break;default:i=i===8?o.parentNode:o,o=i.namespaceURI||null,i=i.tagName,o=At(o,i)}et(Ir),Ye(Ir,o)}function ya(){et(Ir),et(Yu),et(Xu)}function hy(i){Ks(Xu.current);var o=Ks(Ir.current),l=At(o,i.type);o!==l&&(Ye(Yu,i),Ye(Ir,l))}function Xf(i){Yu.current===i&&(et(Ir),et(Yu))}var lt=Fi(0);function sh(i){for(var o=i;o!==null;){if(o.tag===13){var l=o.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if(o.flags&128)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var Zf=[];function ep(){for(var i=0;i<Zf.length;i++)Zf[i]._workInProgressVersionPrimary=null;Zf.length=0}var oh=re.ReactCurrentDispatcher,tp=re.ReactCurrentBatchConfig,Hs=0,ct=null,Ct=null,Vt=null,ah=!1,Zu=!1,el=0,CA=0;function Qt(){throw Error(t(321))}function np(i,o){if(o===null)return!1;for(var l=0;l<o.length&&l<i.length;l++)if(!ir(i[l],o[l]))return!1;return!0}function rp(i,o,l,d,m,_){if(Hs=_,ct=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,oh.current=i===null||i.memoizedState===null?DA:NA,i=l(d,m),Zu){_=0;do{if(Zu=!1,el=0,25<=_)throw Error(t(301));_+=1,Vt=Ct=null,o.updateQueue=null,oh.current=VA,i=l(d,m)}while(Zu)}if(oh.current=ch,o=Ct!==null&&Ct.next!==null,Hs=0,Vt=Ct=ct=null,ah=!1,o)throw Error(t(300));return i}function ip(){var i=el!==0;return el=0,i}function Tr(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Vt===null?ct.memoizedState=Vt=i:Vt=Vt.next=i,Vt}function zn(){if(Ct===null){var i=ct.alternate;i=i!==null?i.memoizedState:null}else i=Ct.next;var o=Vt===null?ct.memoizedState:Vt.next;if(o!==null)Vt=o,Ct=i;else{if(i===null)throw Error(t(310));Ct=i,i={memoizedState:Ct.memoizedState,baseState:Ct.baseState,baseQueue:Ct.baseQueue,queue:Ct.queue,next:null},Vt===null?ct.memoizedState=Vt=i:Vt=Vt.next=i}return Vt}function tl(i,o){return typeof o=="function"?o(i):o}function sp(i){var o=zn(),l=o.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var d=Ct,m=d.baseQueue,_=l.pending;if(_!==null){if(m!==null){var E=m.next;m.next=_.next,_.next=E}d.baseQueue=m=_,l.pending=null}if(m!==null){_=m.next,d=d.baseState;var A=E=null,b=null,$=_;do{var ee=$.lane;if((Hs&ee)===ee)b!==null&&(b=b.next={lane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),d=$.hasEagerState?$.eagerState:i(d,$.action);else{var te={lane:ee,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null};b===null?(A=b=te,E=d):b=b.next=te,ct.lanes|=ee,Qs|=ee}$=$.next}while($!==null&&$!==_);b===null?E=d:b.next=A,ir(d,o.memoizedState)||(yn=!0),o.memoizedState=d,o.baseState=E,o.baseQueue=b,l.lastRenderedState=d}if(i=l.interleaved,i!==null){m=i;do _=m.lane,ct.lanes|=_,Qs|=_,m=m.next;while(m!==i)}else m===null&&(l.lanes=0);return[o.memoizedState,l.dispatch]}function op(i){var o=zn(),l=o.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var d=l.dispatch,m=l.pending,_=o.memoizedState;if(m!==null){l.pending=null;var E=m=m.next;do _=i(_,E.action),E=E.next;while(E!==m);ir(_,o.memoizedState)||(yn=!0),o.memoizedState=_,o.baseQueue===null&&(o.baseState=_),l.lastRenderedState=_}return[_,d]}function dy(){}function fy(i,o){var l=ct,d=zn(),m=o(),_=!ir(d.memoizedState,m);if(_&&(d.memoizedState=m,yn=!0),d=d.queue,ap(gy.bind(null,l,d,i),[i]),d.getSnapshot!==o||_||Vt!==null&&Vt.memoizedState.tag&1){if(l.flags|=2048,nl(9,my.bind(null,l,d,m,o),void 0,null),Ot===null)throw Error(t(349));Hs&30||py(l,o,m)}return m}function py(i,o,l){i.flags|=16384,i={getSnapshot:o,value:l},o=ct.updateQueue,o===null?(o={lastEffect:null,stores:null},ct.updateQueue=o,o.stores=[i]):(l=o.stores,l===null?o.stores=[i]:l.push(i))}function my(i,o,l,d){o.value=l,o.getSnapshot=d,_y(o)&&yy(i)}function gy(i,o,l){return l(function(){_y(o)&&yy(i)})}function _y(i){var o=i.getSnapshot;i=i.value;try{var l=o();return!ir(i,l)}catch{return!0}}function yy(i){var o=Yr(i,1);o!==null&&lr(o,i,1,-1)}function vy(i){var o=Tr();return typeof i=="function"&&(i=i()),o.memoizedState=o.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:tl,lastRenderedState:i},o.queue=i,i=i.dispatch=bA.bind(null,ct,i),[o.memoizedState,i]}function nl(i,o,l,d){return i={tag:i,create:o,destroy:l,deps:d,next:null},o=ct.updateQueue,o===null?(o={lastEffect:null,stores:null},ct.updateQueue=o,o.lastEffect=i.next=i):(l=o.lastEffect,l===null?o.lastEffect=i.next=i:(d=l.next,l.next=i,i.next=d,o.lastEffect=i)),i}function wy(){return zn().memoizedState}function uh(i,o,l,d){var m=Tr();ct.flags|=i,m.memoizedState=nl(1|o,l,void 0,d===void 0?null:d)}function lh(i,o,l,d){var m=zn();d=d===void 0?null:d;var _=void 0;if(Ct!==null){var E=Ct.memoizedState;if(_=E.destroy,d!==null&&np(d,E.deps)){m.memoizedState=nl(o,l,_,d);return}}ct.flags|=i,m.memoizedState=nl(1|o,l,_,d)}function Ey(i,o){return uh(8390656,8,i,o)}function ap(i,o){return lh(2048,8,i,o)}function Iy(i,o){return lh(4,2,i,o)}function Ty(i,o){return lh(4,4,i,o)}function Sy(i,o){if(typeof o=="function")return i=i(),o(i),function(){o(null)};if(o!=null)return i=i(),o.current=i,function(){o.current=null}}function Ry(i,o,l){return l=l!=null?l.concat([i]):null,lh(4,4,Sy.bind(null,o,i),l)}function up(){}function Ay(i,o){var l=zn();o=o===void 0?null:o;var d=l.memoizedState;return d!==null&&o!==null&&np(o,d[1])?d[0]:(l.memoizedState=[i,o],i)}function Py(i,o){var l=zn();o=o===void 0?null:o;var d=l.memoizedState;return d!==null&&o!==null&&np(o,d[1])?d[0]:(i=i(),l.memoizedState=[i,o],i)}function Cy(i,o,l){return Hs&21?(ir(l,o)||(l=Ms(),ct.lanes|=l,Qs|=l,i.baseState=!0),o):(i.baseState&&(i.baseState=!1,yn=!0),i.memoizedState=l)}function kA(i,o){var l=Oe;Oe=l!==0&&4>l?l:4,i(!0);var d=tp.transition;tp.transition={};try{i(!1),o()}finally{Oe=l,tp.transition=d}}function ky(){return zn().memoizedState}function xA(i,o,l){var d=Wi(i);if(l={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null},xy(i))by(o,l);else if(l=ay(i,o,l,d),l!==null){var m=an();lr(l,i,d,m),Dy(l,o,d)}}function bA(i,o,l){var d=Wi(i),m={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null};if(xy(i))by(o,m);else{var _=i.alternate;if(i.lanes===0&&(_===null||_.lanes===0)&&(_=o.lastRenderedReducer,_!==null))try{var E=o.lastRenderedState,A=_(E,l);if(m.hasEagerState=!0,m.eagerState=A,ir(A,E)){var b=o.interleaved;b===null?(m.next=m,Qf(o)):(m.next=b.next,b.next=m),o.interleaved=m;return}}catch{}finally{}l=ay(i,o,m,d),l!==null&&(m=an(),lr(l,i,d,m),Dy(l,o,d))}}function xy(i){var o=i.alternate;return i===ct||o!==null&&o===ct}function by(i,o){Zu=ah=!0;var l=i.pending;l===null?o.next=o:(o.next=l.next,l.next=o),i.pending=o}function Dy(i,o,l){if(l&4194240){var d=o.lanes;d&=i.pendingLanes,l|=d,o.lanes=l,bi(i,l)}}var ch={readContext:Bn,useCallback:Qt,useContext:Qt,useEffect:Qt,useImperativeHandle:Qt,useInsertionEffect:Qt,useLayoutEffect:Qt,useMemo:Qt,useReducer:Qt,useRef:Qt,useState:Qt,useDebugValue:Qt,useDeferredValue:Qt,useTransition:Qt,useMutableSource:Qt,useSyncExternalStore:Qt,useId:Qt,unstable_isNewReconciler:!1},DA={readContext:Bn,useCallback:function(i,o){return Tr().memoizedState=[i,o===void 0?null:o],i},useContext:Bn,useEffect:Ey,useImperativeHandle:function(i,o,l){return l=l!=null?l.concat([i]):null,uh(4194308,4,Sy.bind(null,o,i),l)},useLayoutEffect:function(i,o){return uh(4194308,4,i,o)},useInsertionEffect:function(i,o){return uh(4,2,i,o)},useMemo:function(i,o){var l=Tr();return o=o===void 0?null:o,i=i(),l.memoizedState=[i,o],i},useReducer:function(i,o,l){var d=Tr();return o=l!==void 0?l(o):o,d.memoizedState=d.baseState=o,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:o},d.queue=i,i=i.dispatch=xA.bind(null,ct,i),[d.memoizedState,i]},useRef:function(i){var o=Tr();return i={current:i},o.memoizedState=i},useState:vy,useDebugValue:up,useDeferredValue:function(i){return Tr().memoizedState=i},useTransition:function(){var i=vy(!1),o=i[0];return i=kA.bind(null,i[1]),Tr().memoizedState=i,[o,i]},useMutableSource:function(){},useSyncExternalStore:function(i,o,l){var d=ct,m=Tr();if(it){if(l===void 0)throw Error(t(407));l=l()}else{if(l=o(),Ot===null)throw Error(t(349));Hs&30||py(d,o,l)}m.memoizedState=l;var _={value:l,getSnapshot:o};return m.queue=_,Ey(gy.bind(null,d,_,i),[i]),d.flags|=2048,nl(9,my.bind(null,d,_,l,o),void 0,null),l},useId:function(){var i=Tr(),o=Ot.identifierPrefix;if(it){var l=Jr,d=Qr;l=(d&~(1<<32-rn(d)-1)).toString(32)+l,o=":"+o+"R"+l,l=el++,0<l&&(o+="H"+l.toString(32)),o+=":"}else l=CA++,o=":"+o+"r"+l.toString(32)+":";return i.memoizedState=o},unstable_isNewReconciler:!1},NA={readContext:Bn,useCallback:Ay,useContext:Bn,useEffect:ap,useImperativeHandle:Ry,useInsertionEffect:Iy,useLayoutEffect:Ty,useMemo:Py,useReducer:sp,useRef:wy,useState:function(){return sp(tl)},useDebugValue:up,useDeferredValue:function(i){var o=zn();return Cy(o,Ct.memoizedState,i)},useTransition:function(){var i=sp(tl)[0],o=zn().memoizedState;return[i,o]},useMutableSource:dy,useSyncExternalStore:fy,useId:ky,unstable_isNewReconciler:!1},VA={readContext:Bn,useCallback:Ay,useContext:Bn,useEffect:ap,useImperativeHandle:Ry,useInsertionEffect:Iy,useLayoutEffect:Ty,useMemo:Py,useReducer:op,useRef:wy,useState:function(){return op(tl)},useDebugValue:up,useDeferredValue:function(i){var o=zn();return Ct===null?o.memoizedState=i:Cy(o,Ct.memoizedState,i)},useTransition:function(){var i=op(tl)[0],o=zn().memoizedState;return[i,o]},useMutableSource:dy,useSyncExternalStore:fy,useId:ky,unstable_isNewReconciler:!1};function or(i,o){if(i&&i.defaultProps){o=he({},o),i=i.defaultProps;for(var l in i)o[l]===void 0&&(o[l]=i[l]);return o}return o}function lp(i,o,l,d){o=i.memoizedState,l=l(d,o),l=l==null?o:he({},o,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var hh={isMounted:function(i){return(i=i._reactInternals)?Yn(i)===i:!1},enqueueSetState:function(i,o,l){i=i._reactInternals;var d=an(),m=Wi(i),_=Xr(d,m);_.payload=o,l!=null&&(_.callback=l),o=ji(i,_,m),o!==null&&(lr(o,i,m,d),rh(o,i,m))},enqueueReplaceState:function(i,o,l){i=i._reactInternals;var d=an(),m=Wi(i),_=Xr(d,m);_.tag=1,_.payload=o,l!=null&&(_.callback=l),o=ji(i,_,m),o!==null&&(lr(o,i,m,d),rh(o,i,m))},enqueueForceUpdate:function(i,o){i=i._reactInternals;var l=an(),d=Wi(i),m=Xr(l,d);m.tag=2,o!=null&&(m.callback=o),o=ji(i,m,d),o!==null&&(lr(o,i,d,l),rh(o,i,d))}};function Ny(i,o,l,d,m,_,E){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(d,_,E):o.prototype&&o.prototype.isPureReactComponent?!ju(l,d)||!ju(m,_):!0}function Vy(i,o,l){var d=!1,m=Ui,_=o.contextType;return typeof _=="object"&&_!==null?_=Bn(_):(m=_n(o)?$s:Ht.current,d=o.contextTypes,_=(d=d!=null)?ha(i,m):Ui),o=new o(l,_),i.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=hh,i.stateNode=o,o._reactInternals=i,d&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=m,i.__reactInternalMemoizedMaskedChildContext=_),o}function Oy(i,o,l,d){i=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(l,d),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(l,d),o.state!==i&&hh.enqueueReplaceState(o,o.state,null)}function cp(i,o,l,d){var m=i.stateNode;m.props=l,m.state=i.memoizedState,m.refs={},Jf(i);var _=o.contextType;typeof _=="object"&&_!==null?m.context=Bn(_):(_=_n(o)?$s:Ht.current,m.context=ha(i,_)),m.state=i.memoizedState,_=o.getDerivedStateFromProps,typeof _=="function"&&(lp(i,o,_,l),m.state=i.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(o=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),o!==m.state&&hh.enqueueReplaceState(m,m.state,null),ih(i,l,m,d),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308)}function va(i,o){try{var l="",d=o;do l+=ke(d),d=d.return;while(d);var m=l}catch(_){m=`
Error generating stack: `+_.message+`
`+_.stack}return{value:i,source:o,stack:m,digest:null}}function hp(i,o,l){return{value:i,source:null,stack:l??null,digest:o??null}}function dp(i,o){try{console.error(o.value)}catch(l){setTimeout(function(){throw l})}}var OA=typeof WeakMap=="function"?WeakMap:Map;function Ly(i,o,l){l=Xr(-1,l),l.tag=3,l.payload={element:null};var d=o.value;return l.callback=function(){yh||(yh=!0,Pp=d),dp(i,o)},l}function My(i,o,l){l=Xr(-1,l),l.tag=3;var d=i.type.getDerivedStateFromError;if(typeof d=="function"){var m=o.value;l.payload=function(){return d(m)},l.callback=function(){dp(i,o)}}var _=i.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(l.callback=function(){dp(i,o),typeof d!="function"&&(qi===null?qi=new Set([this]):qi.add(this));var E=o.stack;this.componentDidCatch(o.value,{componentStack:E!==null?E:""})}),l}function Fy(i,o,l){var d=i.pingCache;if(d===null){d=i.pingCache=new OA;var m=new Set;d.set(o,m)}else m=d.get(o),m===void 0&&(m=new Set,d.set(o,m));m.has(l)||(m.add(l),i=QA.bind(null,i,o,l),o.then(i,i))}function Uy(i){do{var o;if((o=i.tag===13)&&(o=i.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return i;i=i.return}while(i!==null);return null}function By(i,o,l,d,m){return i.mode&1?(i.flags|=65536,i.lanes=m,i):(i===o?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(o=Xr(-1,1),o.tag=2,ji(l,o,1))),l.lanes|=1),i)}var LA=re.ReactCurrentOwner,yn=!1;function on(i,o,l,d){o.child=i===null?oy(o,null,l,d):ma(o,i.child,l,d)}function zy(i,o,l,d,m){l=l.render;var _=o.ref;return _a(o,m),d=rp(i,o,l,d,_,m),l=ip(),i!==null&&!yn?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~m,Zr(i,o,m)):(it&&l&&Bf(o),o.flags|=1,on(i,o,d,m),o.child)}function jy(i,o,l,d,m){if(i===null){var _=l.type;return typeof _=="function"&&!Vp(_)&&_.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(o.tag=15,o.type=_,$y(i,o,_,d,m)):(i=Sh(l.type,null,d,o,o.mode,m),i.ref=o.ref,i.return=o,o.child=i)}if(_=i.child,!(i.lanes&m)){var E=_.memoizedProps;if(l=l.compare,l=l!==null?l:ju,l(E,d)&&i.ref===o.ref)return Zr(i,o,m)}return o.flags|=1,i=Hi(_,d),i.ref=o.ref,i.return=o,o.child=i}function $y(i,o,l,d,m){if(i!==null){var _=i.memoizedProps;if(ju(_,d)&&i.ref===o.ref)if(yn=!1,o.pendingProps=d=_,(i.lanes&m)!==0)i.flags&131072&&(yn=!0);else return o.lanes=i.lanes,Zr(i,o,m)}return fp(i,o,l,d,m)}function qy(i,o,l){var d=o.pendingProps,m=d.children,_=i!==null?i.memoizedState:null;if(d.mode==="hidden")if(!(o.mode&1))o.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ye(Ea,bn),bn|=l;else{if(!(l&1073741824))return i=_!==null?_.baseLanes|l:l,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:i,cachePool:null,transitions:null},o.updateQueue=null,Ye(Ea,bn),bn|=i,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=_!==null?_.baseLanes:l,Ye(Ea,bn),bn|=d}else _!==null?(d=_.baseLanes|l,o.memoizedState=null):d=l,Ye(Ea,bn),bn|=d;return on(i,o,m,l),o.child}function Gy(i,o){var l=o.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(o.flags|=512,o.flags|=2097152)}function fp(i,o,l,d,m){var _=_n(l)?$s:Ht.current;return _=ha(o,_),_a(o,m),l=rp(i,o,l,d,_,m),d=ip(),i!==null&&!yn?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~m,Zr(i,o,m)):(it&&d&&Bf(o),o.flags|=1,on(i,o,l,m),o.child)}function Wy(i,o,l,d,m){if(_n(l)){var _=!0;Qc(o)}else _=!1;if(_a(o,m),o.stateNode===null)fh(i,o),Vy(o,l,d),cp(o,l,d,m),d=!0;else if(i===null){var E=o.stateNode,A=o.memoizedProps;E.props=A;var b=E.context,$=l.contextType;typeof $=="object"&&$!==null?$=Bn($):($=_n(l)?$s:Ht.current,$=ha(o,$));var ee=l.getDerivedStateFromProps,te=typeof ee=="function"||typeof E.getSnapshotBeforeUpdate=="function";te||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(A!==d||b!==$)&&Oy(o,E,d,$),zi=!1;var X=o.memoizedState;E.state=X,ih(o,d,E,m),b=o.memoizedState,A!==d||X!==b||gn.current||zi?(typeof ee=="function"&&(lp(o,l,ee,d),b=o.memoizedState),(A=zi||Ny(o,l,A,d,X,b,$))?(te||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(o.flags|=4194308)):(typeof E.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=d,o.memoizedState=b),E.props=d,E.state=b,E.context=$,d=A):(typeof E.componentDidMount=="function"&&(o.flags|=4194308),d=!1)}else{E=o.stateNode,uy(i,o),A=o.memoizedProps,$=o.type===o.elementType?A:or(o.type,A),E.props=$,te=o.pendingProps,X=E.context,b=l.contextType,typeof b=="object"&&b!==null?b=Bn(b):(b=_n(l)?$s:Ht.current,b=ha(o,b));var ue=l.getDerivedStateFromProps;(ee=typeof ue=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(A!==te||X!==b)&&Oy(o,E,d,b),zi=!1,X=o.memoizedState,E.state=X,ih(o,d,E,m);var pe=o.memoizedState;A!==te||X!==pe||gn.current||zi?(typeof ue=="function"&&(lp(o,l,ue,d),pe=o.memoizedState),($=zi||Ny(o,l,$,d,X,pe,b)||!1)?(ee||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(d,pe,b),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(d,pe,b)),typeof E.componentDidUpdate=="function"&&(o.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof E.componentDidUpdate!="function"||A===i.memoizedProps&&X===i.memoizedState||(o.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||A===i.memoizedProps&&X===i.memoizedState||(o.flags|=1024),o.memoizedProps=d,o.memoizedState=pe),E.props=d,E.state=pe,E.context=b,d=$):(typeof E.componentDidUpdate!="function"||A===i.memoizedProps&&X===i.memoizedState||(o.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||A===i.memoizedProps&&X===i.memoizedState||(o.flags|=1024),d=!1)}return pp(i,o,l,d,_,m)}function pp(i,o,l,d,m,_){Gy(i,o);var E=(o.flags&128)!==0;if(!d&&!E)return m&&Y_(o,l,!1),Zr(i,o,_);d=o.stateNode,LA.current=o;var A=E&&typeof l.getDerivedStateFromError!="function"?null:d.render();return o.flags|=1,i!==null&&E?(o.child=ma(o,i.child,null,_),o.child=ma(o,null,A,_)):on(i,o,A,_),o.memoizedState=d.state,m&&Y_(o,l,!0),o.child}function Ky(i){var o=i.stateNode;o.pendingContext?Q_(i,o.pendingContext,o.pendingContext!==o.context):o.context&&Q_(i,o.context,!1),Yf(i,o.containerInfo)}function Hy(i,o,l,d,m){return pa(),qf(m),o.flags|=256,on(i,o,l,d),o.child}var mp={dehydrated:null,treeContext:null,retryLane:0};function gp(i){return{baseLanes:i,cachePool:null,transitions:null}}function Qy(i,o,l){var d=o.pendingProps,m=lt.current,_=!1,E=(o.flags&128)!==0,A;if((A=E)||(A=i!==null&&i.memoizedState===null?!1:(m&2)!==0),A?(_=!0,o.flags&=-129):(i===null||i.memoizedState!==null)&&(m|=1),Ye(lt,m&1),i===null)return $f(o),i=o.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?(o.mode&1?i.data==="$!"?o.lanes=8:o.lanes=1073741824:o.lanes=1,null):(E=d.children,i=d.fallback,_?(d=o.mode,_=o.child,E={mode:"hidden",children:E},!(d&1)&&_!==null?(_.childLanes=0,_.pendingProps=E):_=Rh(E,d,0,null),i=Zs(i,d,l,null),_.return=o,i.return=o,_.sibling=i,o.child=_,o.child.memoizedState=gp(l),o.memoizedState=mp,i):_p(o,E));if(m=i.memoizedState,m!==null&&(A=m.dehydrated,A!==null))return MA(i,o,E,d,A,m,l);if(_){_=d.fallback,E=o.mode,m=i.child,A=m.sibling;var b={mode:"hidden",children:d.children};return!(E&1)&&o.child!==m?(d=o.child,d.childLanes=0,d.pendingProps=b,o.deletions=null):(d=Hi(m,b),d.subtreeFlags=m.subtreeFlags&14680064),A!==null?_=Hi(A,_):(_=Zs(_,E,l,null),_.flags|=2),_.return=o,d.return=o,d.sibling=_,o.child=d,d=_,_=o.child,E=i.child.memoizedState,E=E===null?gp(l):{baseLanes:E.baseLanes|l,cachePool:null,transitions:E.transitions},_.memoizedState=E,_.childLanes=i.childLanes&~l,o.memoizedState=mp,d}return _=i.child,i=_.sibling,d=Hi(_,{mode:"visible",children:d.children}),!(o.mode&1)&&(d.lanes=l),d.return=o,d.sibling=null,i!==null&&(l=o.deletions,l===null?(o.deletions=[i],o.flags|=16):l.push(i)),o.child=d,o.memoizedState=null,d}function _p(i,o){return o=Rh({mode:"visible",children:o},i.mode,0,null),o.return=i,i.child=o}function dh(i,o,l,d){return d!==null&&qf(d),ma(o,i.child,null,l),i=_p(o,o.pendingProps.children),i.flags|=2,o.memoizedState=null,i}function MA(i,o,l,d,m,_,E){if(l)return o.flags&256?(o.flags&=-257,d=hp(Error(t(422))),dh(i,o,E,d)):o.memoizedState!==null?(o.child=i.child,o.flags|=128,null):(_=d.fallback,m=o.mode,d=Rh({mode:"visible",children:d.children},m,0,null),_=Zs(_,m,E,null),_.flags|=2,d.return=o,_.return=o,d.sibling=_,o.child=d,o.mode&1&&ma(o,i.child,null,E),o.child.memoizedState=gp(E),o.memoizedState=mp,_);if(!(o.mode&1))return dh(i,o,E,null);if(m.data==="$!"){if(d=m.nextSibling&&m.nextSibling.dataset,d)var A=d.dgst;return d=A,_=Error(t(419)),d=hp(_,d,void 0),dh(i,o,E,d)}if(A=(E&i.childLanes)!==0,yn||A){if(d=Ot,d!==null){switch(E&-E){case 4:m=2;break;case 16:m=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:m=32;break;case 536870912:m=268435456;break;default:m=0}m=m&(d.suspendedLanes|E)?0:m,m!==0&&m!==_.retryLane&&(_.retryLane=m,Yr(i,m),lr(d,i,m,-1))}return Np(),d=hp(Error(t(421))),dh(i,o,E,d)}return m.data==="$?"?(o.flags|=128,o.child=i.child,o=JA.bind(null,i),m._reactRetry=o,null):(i=_.treeContext,xn=Mi(m.nextSibling),kn=o,it=!0,sr=null,i!==null&&(Fn[Un++]=Qr,Fn[Un++]=Jr,Fn[Un++]=qs,Qr=i.id,Jr=i.overflow,qs=o),o=_p(o,d.children),o.flags|=4096,o)}function Jy(i,o,l){i.lanes|=o;var d=i.alternate;d!==null&&(d.lanes|=o),Hf(i.return,o,l)}function yp(i,o,l,d,m){var _=i.memoizedState;_===null?i.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:d,tail:l,tailMode:m}:(_.isBackwards=o,_.rendering=null,_.renderingStartTime=0,_.last=d,_.tail=l,_.tailMode=m)}function Yy(i,o,l){var d=o.pendingProps,m=d.revealOrder,_=d.tail;if(on(i,o,d.children,l),d=lt.current,d&2)d=d&1|2,o.flags|=128;else{if(i!==null&&i.flags&128)e:for(i=o.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&Jy(i,l,o);else if(i.tag===19)Jy(i,l,o);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===o)break e;for(;i.sibling===null;){if(i.return===null||i.return===o)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}d&=1}if(Ye(lt,d),!(o.mode&1))o.memoizedState=null;else switch(m){case"forwards":for(l=o.child,m=null;l!==null;)i=l.alternate,i!==null&&sh(i)===null&&(m=l),l=l.sibling;l=m,l===null?(m=o.child,o.child=null):(m=l.sibling,l.sibling=null),yp(o,!1,m,l,_);break;case"backwards":for(l=null,m=o.child,o.child=null;m!==null;){if(i=m.alternate,i!==null&&sh(i)===null){o.child=m;break}i=m.sibling,m.sibling=l,l=m,m=i}yp(o,!0,l,null,_);break;case"together":yp(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function fh(i,o){!(o.mode&1)&&i!==null&&(i.alternate=null,o.alternate=null,o.flags|=2)}function Zr(i,o,l){if(i!==null&&(o.dependencies=i.dependencies),Qs|=o.lanes,!(l&o.childLanes))return null;if(i!==null&&o.child!==i.child)throw Error(t(153));if(o.child!==null){for(i=o.child,l=Hi(i,i.pendingProps),o.child=l,l.return=o;i.sibling!==null;)i=i.sibling,l=l.sibling=Hi(i,i.pendingProps),l.return=o;l.sibling=null}return o.child}function FA(i,o,l){switch(o.tag){case 3:Ky(o),pa();break;case 5:hy(o);break;case 1:_n(o.type)&&Qc(o);break;case 4:Yf(o,o.stateNode.containerInfo);break;case 10:var d=o.type._context,m=o.memoizedProps.value;Ye(th,d._currentValue),d._currentValue=m;break;case 13:if(d=o.memoizedState,d!==null)return d.dehydrated!==null?(Ye(lt,lt.current&1),o.flags|=128,null):l&o.child.childLanes?Qy(i,o,l):(Ye(lt,lt.current&1),i=Zr(i,o,l),i!==null?i.sibling:null);Ye(lt,lt.current&1);break;case 19:if(d=(l&o.childLanes)!==0,i.flags&128){if(d)return Yy(i,o,l);o.flags|=128}if(m=o.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),Ye(lt,lt.current),d)break;return null;case 22:case 23:return o.lanes=0,qy(i,o,l)}return Zr(i,o,l)}var Xy,vp,Zy,ev;Xy=function(i,o){for(var l=o.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===o)break;for(;l.sibling===null;){if(l.return===null||l.return===o)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},vp=function(){},Zy=function(i,o,l,d){var m=i.memoizedProps;if(m!==d){i=o.stateNode,Ks(Ir.current);var _=null;switch(l){case"input":m=As(i,m),d=As(i,d),_=[];break;case"select":m=he({},m,{value:void 0}),d=he({},d,{value:void 0}),_=[];break;case"textarea":m=_u(i,m),d=_u(i,d),_=[];break;default:typeof m.onClick!="function"&&typeof d.onClick=="function"&&(i.onclick=Wc)}Tu(l,d);var E;l=null;for($ in m)if(!d.hasOwnProperty($)&&m.hasOwnProperty($)&&m[$]!=null)if($==="style"){var A=m[$];for(E in A)A.hasOwnProperty(E)&&(l||(l={}),l[E]="")}else $!=="dangerouslySetInnerHTML"&&$!=="children"&&$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&$!=="autoFocus"&&(s.hasOwnProperty($)?_||(_=[]):(_=_||[]).push($,null));for($ in d){var b=d[$];if(A=m!=null?m[$]:void 0,d.hasOwnProperty($)&&b!==A&&(b!=null||A!=null))if($==="style")if(A){for(E in A)!A.hasOwnProperty(E)||b&&b.hasOwnProperty(E)||(l||(l={}),l[E]="");for(E in b)b.hasOwnProperty(E)&&A[E]!==b[E]&&(l||(l={}),l[E]=b[E])}else l||(_||(_=[]),_.push($,l)),l=b;else $==="dangerouslySetInnerHTML"?(b=b?b.__html:void 0,A=A?A.__html:void 0,b!=null&&A!==b&&(_=_||[]).push($,b)):$==="children"?typeof b!="string"&&typeof b!="number"||(_=_||[]).push($,""+b):$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&(s.hasOwnProperty($)?(b!=null&&$==="onScroll"&&Ze("scroll",i),_||A===b||(_=[])):(_=_||[]).push($,b))}l&&(_=_||[]).push("style",l);var $=_;(o.updateQueue=$)&&(o.flags|=4)}},ev=function(i,o,l,d){l!==d&&(o.flags|=4)};function rl(i,o){if(!it)switch(i.tailMode){case"hidden":o=i.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var d=null;l!==null;)l.alternate!==null&&(d=l),l=l.sibling;d===null?o||i.tail===null?i.tail=null:i.tail.sibling=null:d.sibling=null}}function Jt(i){var o=i.alternate!==null&&i.alternate.child===i.child,l=0,d=0;if(o)for(var m=i.child;m!==null;)l|=m.lanes|m.childLanes,d|=m.subtreeFlags&14680064,d|=m.flags&14680064,m.return=i,m=m.sibling;else for(m=i.child;m!==null;)l|=m.lanes|m.childLanes,d|=m.subtreeFlags,d|=m.flags,m.return=i,m=m.sibling;return i.subtreeFlags|=d,i.childLanes=l,o}function UA(i,o,l){var d=o.pendingProps;switch(zf(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Jt(o),null;case 1:return _n(o.type)&&Hc(),Jt(o),null;case 3:return d=o.stateNode,ya(),et(gn),et(Ht),ep(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(i===null||i.child===null)&&(Zc(o)?o.flags|=4:i===null||i.memoizedState.isDehydrated&&!(o.flags&256)||(o.flags|=1024,sr!==null&&(xp(sr),sr=null))),vp(i,o),Jt(o),null;case 5:Xf(o);var m=Ks(Xu.current);if(l=o.type,i!==null&&o.stateNode!=null)Zy(i,o,l,d,m),i.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!d){if(o.stateNode===null)throw Error(t(166));return Jt(o),null}if(i=Ks(Ir.current),Zc(o)){d=o.stateNode,l=o.type;var _=o.memoizedProps;switch(d[Er]=o,d[Ku]=_,i=(o.mode&1)!==0,l){case"dialog":Ze("cancel",d),Ze("close",d);break;case"iframe":case"object":case"embed":Ze("load",d);break;case"video":case"audio":for(m=0;m<qu.length;m++)Ze(qu[m],d);break;case"source":Ze("error",d);break;case"img":case"image":case"link":Ze("error",d),Ze("load",d);break;case"details":Ze("toggle",d);break;case"input":No(d,_),Ze("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!_.multiple},Ze("invalid",d);break;case"textarea":Oo(d,_),Ze("invalid",d)}Tu(l,_),m=null;for(var E in _)if(_.hasOwnProperty(E)){var A=_[E];E==="children"?typeof A=="string"?d.textContent!==A&&(_.suppressHydrationWarning!==!0&&Gc(d.textContent,A,i),m=["children",A]):typeof A=="number"&&d.textContent!==""+A&&(_.suppressHydrationWarning!==!0&&Gc(d.textContent,A,i),m=["children",""+A]):s.hasOwnProperty(E)&&A!=null&&E==="onScroll"&&Ze("scroll",d)}switch(l){case"input":Mr(d),_c(d,_,!0);break;case"textarea":Mr(d),yu(d);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(d.onclick=Wc)}d=m,o.updateQueue=d,d!==null&&(o.flags|=4)}else{E=m.nodeType===9?m:m.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=Rt(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=E.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof d.is=="string"?i=E.createElement(l,{is:d.is}):(i=E.createElement(l),l==="select"&&(E=i,d.multiple?E.multiple=!0:d.size&&(E.size=d.size))):i=E.createElementNS(i,l),i[Er]=o,i[Ku]=d,Xy(i,o,!1,!1),o.stateNode=i;e:{switch(E=Su(l,d),l){case"dialog":Ze("cancel",i),Ze("close",i),m=d;break;case"iframe":case"object":case"embed":Ze("load",i),m=d;break;case"video":case"audio":for(m=0;m<qu.length;m++)Ze(qu[m],i);m=d;break;case"source":Ze("error",i),m=d;break;case"img":case"image":case"link":Ze("error",i),Ze("load",i),m=d;break;case"details":Ze("toggle",i),m=d;break;case"input":No(i,d),m=As(i,d),Ze("invalid",i);break;case"option":m=d;break;case"select":i._wrapperState={wasMultiple:!!d.multiple},m=he({},d,{value:void 0}),Ze("invalid",i);break;case"textarea":Oo(i,d),m=_u(i,d),Ze("invalid",i);break;default:m=d}Tu(l,m),A=m;for(_ in A)if(A.hasOwnProperty(_)){var b=A[_];_==="style"?Eu(i,b):_==="dangerouslySetInnerHTML"?(b=b?b.__html:void 0,b!=null&&vu(i,b)):_==="children"?typeof b=="string"?(l!=="textarea"||b!=="")&&Ai(i,b):typeof b=="number"&&Ai(i,""+b):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(s.hasOwnProperty(_)?b!=null&&_==="onScroll"&&Ze("scroll",i):b!=null&&Q(i,_,b,E))}switch(l){case"input":Mr(i),_c(i,d,!1);break;case"textarea":Mr(i),yu(i);break;case"option":d.value!=null&&i.setAttribute("value",""+$e(d.value));break;case"select":i.multiple=!!d.multiple,_=d.value,_!=null?Ur(i,!!d.multiple,_,!1):d.defaultValue!=null&&Ur(i,!!d.multiple,d.defaultValue,!0);break;default:typeof m.onClick=="function"&&(i.onclick=Wc)}switch(l){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return Jt(o),null;case 6:if(i&&o.stateNode!=null)ev(i,o,i.memoizedProps,d);else{if(typeof d!="string"&&o.stateNode===null)throw Error(t(166));if(l=Ks(Xu.current),Ks(Ir.current),Zc(o)){if(d=o.stateNode,l=o.memoizedProps,d[Er]=o,(_=d.nodeValue!==l)&&(i=kn,i!==null))switch(i.tag){case 3:Gc(d.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Gc(d.nodeValue,l,(i.mode&1)!==0)}_&&(o.flags|=4)}else d=(l.nodeType===9?l:l.ownerDocument).createTextNode(d),d[Er]=o,o.stateNode=d}return Jt(o),null;case 13:if(et(lt),d=o.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(it&&xn!==null&&o.mode&1&&!(o.flags&128))ry(),pa(),o.flags|=98560,_=!1;else if(_=Zc(o),d!==null&&d.dehydrated!==null){if(i===null){if(!_)throw Error(t(318));if(_=o.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[Er]=o}else pa(),!(o.flags&128)&&(o.memoizedState=null),o.flags|=4;Jt(o),_=!1}else sr!==null&&(xp(sr),sr=null),_=!0;if(!_)return o.flags&65536?o:null}return o.flags&128?(o.lanes=l,o):(d=d!==null,d!==(i!==null&&i.memoizedState!==null)&&d&&(o.child.flags|=8192,o.mode&1&&(i===null||lt.current&1?kt===0&&(kt=3):Np())),o.updateQueue!==null&&(o.flags|=4),Jt(o),null);case 4:return ya(),vp(i,o),i===null&&Gu(o.stateNode.containerInfo),Jt(o),null;case 10:return Kf(o.type._context),Jt(o),null;case 17:return _n(o.type)&&Hc(),Jt(o),null;case 19:if(et(lt),_=o.memoizedState,_===null)return Jt(o),null;if(d=(o.flags&128)!==0,E=_.rendering,E===null)if(d)rl(_,!1);else{if(kt!==0||i!==null&&i.flags&128)for(i=o.child;i!==null;){if(E=sh(i),E!==null){for(o.flags|=128,rl(_,!1),d=E.updateQueue,d!==null&&(o.updateQueue=d,o.flags|=4),o.subtreeFlags=0,d=l,l=o.child;l!==null;)_=l,i=d,_.flags&=14680066,E=_.alternate,E===null?(_.childLanes=0,_.lanes=i,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=E.childLanes,_.lanes=E.lanes,_.child=E.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=E.memoizedProps,_.memoizedState=E.memoizedState,_.updateQueue=E.updateQueue,_.type=E.type,i=E.dependencies,_.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return Ye(lt,lt.current&1|2),o.child}i=i.sibling}_.tail!==null&&Je()>Ia&&(o.flags|=128,d=!0,rl(_,!1),o.lanes=4194304)}else{if(!d)if(i=sh(E),i!==null){if(o.flags|=128,d=!0,l=i.updateQueue,l!==null&&(o.updateQueue=l,o.flags|=4),rl(_,!0),_.tail===null&&_.tailMode==="hidden"&&!E.alternate&&!it)return Jt(o),null}else 2*Je()-_.renderingStartTime>Ia&&l!==1073741824&&(o.flags|=128,d=!0,rl(_,!1),o.lanes=4194304);_.isBackwards?(E.sibling=o.child,o.child=E):(l=_.last,l!==null?l.sibling=E:o.child=E,_.last=E)}return _.tail!==null?(o=_.tail,_.rendering=o,_.tail=o.sibling,_.renderingStartTime=Je(),o.sibling=null,l=lt.current,Ye(lt,d?l&1|2:l&1),o):(Jt(o),null);case 22:case 23:return Dp(),d=o.memoizedState!==null,i!==null&&i.memoizedState!==null!==d&&(o.flags|=8192),d&&o.mode&1?bn&1073741824&&(Jt(o),o.subtreeFlags&6&&(o.flags|=8192)):Jt(o),null;case 24:return null;case 25:return null}throw Error(t(156,o.tag))}function BA(i,o){switch(zf(o),o.tag){case 1:return _n(o.type)&&Hc(),i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 3:return ya(),et(gn),et(Ht),ep(),i=o.flags,i&65536&&!(i&128)?(o.flags=i&-65537|128,o):null;case 5:return Xf(o),null;case 13:if(et(lt),i=o.memoizedState,i!==null&&i.dehydrated!==null){if(o.alternate===null)throw Error(t(340));pa()}return i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 19:return et(lt),null;case 4:return ya(),null;case 10:return Kf(o.type._context),null;case 22:case 23:return Dp(),null;case 24:return null;default:return null}}var ph=!1,Yt=!1,zA=typeof WeakSet=="function"?WeakSet:Set,fe=null;function wa(i,o){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(d){pt(i,o,d)}else l.current=null}function wp(i,o,l){try{l()}catch(d){pt(i,o,d)}}var tv=!1;function jA(i,o){if(Df=Vi,i=N_(),Sf(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var d=l.getSelection&&l.getSelection();if(d&&d.rangeCount!==0){l=d.anchorNode;var m=d.anchorOffset,_=d.focusNode;d=d.focusOffset;try{l.nodeType,_.nodeType}catch{l=null;break e}var E=0,A=-1,b=-1,$=0,ee=0,te=i,X=null;t:for(;;){for(var ue;te!==l||m!==0&&te.nodeType!==3||(A=E+m),te!==_||d!==0&&te.nodeType!==3||(b=E+d),te.nodeType===3&&(E+=te.nodeValue.length),(ue=te.firstChild)!==null;)X=te,te=ue;for(;;){if(te===i)break t;if(X===l&&++$===m&&(A=E),X===_&&++ee===d&&(b=E),(ue=te.nextSibling)!==null)break;te=X,X=te.parentNode}te=ue}l=A===-1||b===-1?null:{start:A,end:b}}else l=null}l=l||{start:0,end:0}}else l=null;for(Nf={focusedElem:i,selectionRange:l},Vi=!1,fe=o;fe!==null;)if(o=fe,i=o.child,(o.subtreeFlags&1028)!==0&&i!==null)i.return=o,fe=i;else for(;fe!==null;){o=fe;try{var pe=o.alternate;if(o.flags&1024)switch(o.tag){case 0:case 11:case 15:break;case 1:if(pe!==null){var _e=pe.memoizedProps,yt=pe.memoizedState,z=o.stateNode,V=z.getSnapshotBeforeUpdate(o.elementType===o.type?_e:or(o.type,_e),yt);z.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var j=o.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ne){pt(o,o.return,ne)}if(i=o.sibling,i!==null){i.return=o.return,fe=i;break}fe=o.return}return pe=tv,tv=!1,pe}function il(i,o,l){var d=o.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var m=d=d.next;do{if((m.tag&i)===i){var _=m.destroy;m.destroy=void 0,_!==void 0&&wp(o,l,_)}m=m.next}while(m!==d)}}function mh(i,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var l=o=o.next;do{if((l.tag&i)===i){var d=l.create;l.destroy=d()}l=l.next}while(l!==o)}}function Ep(i){var o=i.ref;if(o!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof o=="function"?o(i):o.current=i}}function nv(i){var o=i.alternate;o!==null&&(i.alternate=null,nv(o)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(o=i.stateNode,o!==null&&(delete o[Er],delete o[Ku],delete o[Mf],delete o[SA],delete o[RA])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function rv(i){return i.tag===5||i.tag===3||i.tag===4}function iv(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||rv(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Ip(i,o,l){var d=i.tag;if(d===5||d===6)i=i.stateNode,o?l.nodeType===8?l.parentNode.insertBefore(i,o):l.insertBefore(i,o):(l.nodeType===8?(o=l.parentNode,o.insertBefore(i,l)):(o=l,o.appendChild(i)),l=l._reactRootContainer,l!=null||o.onclick!==null||(o.onclick=Wc));else if(d!==4&&(i=i.child,i!==null))for(Ip(i,o,l),i=i.sibling;i!==null;)Ip(i,o,l),i=i.sibling}function Tp(i,o,l){var d=i.tag;if(d===5||d===6)i=i.stateNode,o?l.insertBefore(i,o):l.appendChild(i);else if(d!==4&&(i=i.child,i!==null))for(Tp(i,o,l),i=i.sibling;i!==null;)Tp(i,o,l),i=i.sibling}var zt=null,ar=!1;function $i(i,o,l){for(l=l.child;l!==null;)sv(i,o,l),l=l.sibling}function sv(i,o,l){if(Rn&&typeof Rn.onCommitFiberUnmount=="function")try{Rn.onCommitFiberUnmount(Os,l)}catch{}switch(l.tag){case 5:Yt||wa(l,o);case 6:var d=zt,m=ar;zt=null,$i(i,o,l),zt=d,ar=m,zt!==null&&(ar?(i=zt,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):zt.removeChild(l.stateNode));break;case 18:zt!==null&&(ar?(i=zt,l=l.stateNode,i.nodeType===8?Lf(i.parentNode,l):i.nodeType===1&&Lf(i,l),nr(i)):Lf(zt,l.stateNode));break;case 4:d=zt,m=ar,zt=l.stateNode.containerInfo,ar=!0,$i(i,o,l),zt=d,ar=m;break;case 0:case 11:case 14:case 15:if(!Yt&&(d=l.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){m=d=d.next;do{var _=m,E=_.destroy;_=_.tag,E!==void 0&&(_&2||_&4)&&wp(l,o,E),m=m.next}while(m!==d)}$i(i,o,l);break;case 1:if(!Yt&&(wa(l,o),d=l.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=l.memoizedProps,d.state=l.memoizedState,d.componentWillUnmount()}catch(A){pt(l,o,A)}$i(i,o,l);break;case 21:$i(i,o,l);break;case 22:l.mode&1?(Yt=(d=Yt)||l.memoizedState!==null,$i(i,o,l),Yt=d):$i(i,o,l);break;default:$i(i,o,l)}}function ov(i){var o=i.updateQueue;if(o!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new zA),o.forEach(function(d){var m=YA.bind(null,i,d);l.has(d)||(l.add(d),d.then(m,m))})}}function ur(i,o){var l=o.deletions;if(l!==null)for(var d=0;d<l.length;d++){var m=l[d];try{var _=i,E=o,A=E;e:for(;A!==null;){switch(A.tag){case 5:zt=A.stateNode,ar=!1;break e;case 3:zt=A.stateNode.containerInfo,ar=!0;break e;case 4:zt=A.stateNode.containerInfo,ar=!0;break e}A=A.return}if(zt===null)throw Error(t(160));sv(_,E,m),zt=null,ar=!1;var b=m.alternate;b!==null&&(b.return=null),m.return=null}catch($){pt(m,o,$)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)av(o,i),o=o.sibling}function av(i,o){var l=i.alternate,d=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(ur(o,i),Sr(i),d&4){try{il(3,i,i.return),mh(3,i)}catch(_e){pt(i,i.return,_e)}try{il(5,i,i.return)}catch(_e){pt(i,i.return,_e)}}break;case 1:ur(o,i),Sr(i),d&512&&l!==null&&wa(l,l.return);break;case 5:if(ur(o,i),Sr(i),d&512&&l!==null&&wa(l,l.return),i.flags&32){var m=i.stateNode;try{Ai(m,"")}catch(_e){pt(i,i.return,_e)}}if(d&4&&(m=i.stateNode,m!=null)){var _=i.memoizedProps,E=l!==null?l.memoizedProps:_,A=i.type,b=i.updateQueue;if(i.updateQueue=null,b!==null)try{A==="input"&&_.type==="radio"&&_.name!=null&&mu(m,_),Su(A,E);var $=Su(A,_);for(E=0;E<b.length;E+=2){var ee=b[E],te=b[E+1];ee==="style"?Eu(m,te):ee==="dangerouslySetInnerHTML"?vu(m,te):ee==="children"?Ai(m,te):Q(m,ee,te,$)}switch(A){case"input":gu(m,_);break;case"textarea":Lo(m,_);break;case"select":var X=m._wrapperState.wasMultiple;m._wrapperState.wasMultiple=!!_.multiple;var ue=_.value;ue!=null?Ur(m,!!_.multiple,ue,!1):X!==!!_.multiple&&(_.defaultValue!=null?Ur(m,!!_.multiple,_.defaultValue,!0):Ur(m,!!_.multiple,_.multiple?[]:"",!1))}m[Ku]=_}catch(_e){pt(i,i.return,_e)}}break;case 6:if(ur(o,i),Sr(i),d&4){if(i.stateNode===null)throw Error(t(162));m=i.stateNode,_=i.memoizedProps;try{m.nodeValue=_}catch(_e){pt(i,i.return,_e)}}break;case 3:if(ur(o,i),Sr(i),d&4&&l!==null&&l.memoizedState.isDehydrated)try{nr(o.containerInfo)}catch(_e){pt(i,i.return,_e)}break;case 4:ur(o,i),Sr(i);break;case 13:ur(o,i),Sr(i),m=i.child,m.flags&8192&&(_=m.memoizedState!==null,m.stateNode.isHidden=_,!_||m.alternate!==null&&m.alternate.memoizedState!==null||(Ap=Je())),d&4&&ov(i);break;case 22:if(ee=l!==null&&l.memoizedState!==null,i.mode&1?(Yt=($=Yt)||ee,ur(o,i),Yt=$):ur(o,i),Sr(i),d&8192){if($=i.memoizedState!==null,(i.stateNode.isHidden=$)&&!ee&&i.mode&1)for(fe=i,ee=i.child;ee!==null;){for(te=fe=ee;fe!==null;){switch(X=fe,ue=X.child,X.tag){case 0:case 11:case 14:case 15:il(4,X,X.return);break;case 1:wa(X,X.return);var pe=X.stateNode;if(typeof pe.componentWillUnmount=="function"){d=X,l=X.return;try{o=d,pe.props=o.memoizedProps,pe.state=o.memoizedState,pe.componentWillUnmount()}catch(_e){pt(d,l,_e)}}break;case 5:wa(X,X.return);break;case 22:if(X.memoizedState!==null){cv(te);continue}}ue!==null?(ue.return=X,fe=ue):cv(te)}ee=ee.sibling}e:for(ee=null,te=i;;){if(te.tag===5){if(ee===null){ee=te;try{m=te.stateNode,$?(_=m.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(A=te.stateNode,b=te.memoizedProps.style,E=b!=null&&b.hasOwnProperty("display")?b.display:null,A.style.display=wu("display",E))}catch(_e){pt(i,i.return,_e)}}}else if(te.tag===6){if(ee===null)try{te.stateNode.nodeValue=$?"":te.memoizedProps}catch(_e){pt(i,i.return,_e)}}else if((te.tag!==22&&te.tag!==23||te.memoizedState===null||te===i)&&te.child!==null){te.child.return=te,te=te.child;continue}if(te===i)break e;for(;te.sibling===null;){if(te.return===null||te.return===i)break e;ee===te&&(ee=null),te=te.return}ee===te&&(ee=null),te.sibling.return=te.return,te=te.sibling}}break;case 19:ur(o,i),Sr(i),d&4&&ov(i);break;case 21:break;default:ur(o,i),Sr(i)}}function Sr(i){var o=i.flags;if(o&2){try{e:{for(var l=i.return;l!==null;){if(rv(l)){var d=l;break e}l=l.return}throw Error(t(160))}switch(d.tag){case 5:var m=d.stateNode;d.flags&32&&(Ai(m,""),d.flags&=-33);var _=iv(i);Tp(i,_,m);break;case 3:case 4:var E=d.stateNode.containerInfo,A=iv(i);Ip(i,A,E);break;default:throw Error(t(161))}}catch(b){pt(i,i.return,b)}i.flags&=-3}o&4096&&(i.flags&=-4097)}function $A(i,o,l){fe=i,uv(i)}function uv(i,o,l){for(var d=(i.mode&1)!==0;fe!==null;){var m=fe,_=m.child;if(m.tag===22&&d){var E=m.memoizedState!==null||ph;if(!E){var A=m.alternate,b=A!==null&&A.memoizedState!==null||Yt;A=ph;var $=Yt;if(ph=E,(Yt=b)&&!$)for(fe=m;fe!==null;)E=fe,b=E.child,E.tag===22&&E.memoizedState!==null?hv(m):b!==null?(b.return=E,fe=b):hv(m);for(;_!==null;)fe=_,uv(_),_=_.sibling;fe=m,ph=A,Yt=$}lv(i)}else m.subtreeFlags&8772&&_!==null?(_.return=m,fe=_):lv(i)}}function lv(i){for(;fe!==null;){var o=fe;if(o.flags&8772){var l=o.alternate;try{if(o.flags&8772)switch(o.tag){case 0:case 11:case 15:Yt||mh(5,o);break;case 1:var d=o.stateNode;if(o.flags&4&&!Yt)if(l===null)d.componentDidMount();else{var m=o.elementType===o.type?l.memoizedProps:or(o.type,l.memoizedProps);d.componentDidUpdate(m,l.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var _=o.updateQueue;_!==null&&cy(o,_,d);break;case 3:var E=o.updateQueue;if(E!==null){if(l=null,o.child!==null)switch(o.child.tag){case 5:l=o.child.stateNode;break;case 1:l=o.child.stateNode}cy(o,E,l)}break;case 5:var A=o.stateNode;if(l===null&&o.flags&4){l=A;var b=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":b.autoFocus&&l.focus();break;case"img":b.src&&(l.src=b.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var $=o.alternate;if($!==null){var ee=$.memoizedState;if(ee!==null){var te=ee.dehydrated;te!==null&&nr(te)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Yt||o.flags&512&&Ep(o)}catch(X){pt(o,o.return,X)}}if(o===i){fe=null;break}if(l=o.sibling,l!==null){l.return=o.return,fe=l;break}fe=o.return}}function cv(i){for(;fe!==null;){var o=fe;if(o===i){fe=null;break}var l=o.sibling;if(l!==null){l.return=o.return,fe=l;break}fe=o.return}}function hv(i){for(;fe!==null;){var o=fe;try{switch(o.tag){case 0:case 11:case 15:var l=o.return;try{mh(4,o)}catch(b){pt(o,l,b)}break;case 1:var d=o.stateNode;if(typeof d.componentDidMount=="function"){var m=o.return;try{d.componentDidMount()}catch(b){pt(o,m,b)}}var _=o.return;try{Ep(o)}catch(b){pt(o,_,b)}break;case 5:var E=o.return;try{Ep(o)}catch(b){pt(o,E,b)}}}catch(b){pt(o,o.return,b)}if(o===i){fe=null;break}var A=o.sibling;if(A!==null){A.return=o.return,fe=A;break}fe=o.return}}var qA=Math.ceil,gh=re.ReactCurrentDispatcher,Sp=re.ReactCurrentOwner,jn=re.ReactCurrentBatchConfig,Ue=0,Ot=null,Tt=null,jt=0,bn=0,Ea=Fi(0),kt=0,sl=null,Qs=0,_h=0,Rp=0,ol=null,vn=null,Ap=0,Ia=1/0,ei=null,yh=!1,Pp=null,qi=null,vh=!1,Gi=null,wh=0,al=0,Cp=null,Eh=-1,Ih=0;function an(){return Ue&6?Je():Eh!==-1?Eh:Eh=Je()}function Wi(i){return i.mode&1?Ue&2&&jt!==0?jt&-jt:PA.transition!==null?(Ih===0&&(Ih=Ms()),Ih):(i=Oe,i!==0||(i=window.event,i=i===void 0?16:Ou(i.type)),i):1}function lr(i,o,l,d){if(50<al)throw al=0,Cp=null,Error(t(185));xi(i,l,d),(!(Ue&2)||i!==Ot)&&(i===Ot&&(!(Ue&2)&&(_h|=l),kt===4&&Ki(i,jt)),wn(i,d),l===1&&Ue===0&&!(o.mode&1)&&(Ia=Je()+500,Jc&&Bi()))}function wn(i,o){var l=i.callbackNode;jr(i,o);var d=Ls(i,i===Ot?jt:0);if(d===0)l!==null&&xu(l),i.callbackNode=null,i.callbackPriority=0;else if(o=d&-d,i.callbackPriority!==o){if(l!=null&&xu(l),o===1)i.tag===0?AA(fv.bind(null,i)):X_(fv.bind(null,i)),IA(function(){!(Ue&6)&&Bi()}),l=null;else{switch(Di(d)){case 1:l=Vs;break;case 4:l=Pi;break;case 16:l=On;break;case 536870912:l=Ic;break;default:l=On}l=Ev(l,dv.bind(null,i))}i.callbackPriority=o,i.callbackNode=l}}function dv(i,o){if(Eh=-1,Ih=0,Ue&6)throw Error(t(327));var l=i.callbackNode;if(Ta()&&i.callbackNode!==l)return null;var d=Ls(i,i===Ot?jt:0);if(d===0)return null;if(d&30||d&i.expiredLanes||o)o=Th(i,d);else{o=d;var m=Ue;Ue|=2;var _=mv();(Ot!==i||jt!==o)&&(ei=null,Ia=Je()+500,Ys(i,o));do try{KA();break}catch(A){pv(i,A)}while(!0);Wf(),gh.current=_,Ue=m,Tt!==null?o=0:(Ot=null,jt=0,o=kt)}if(o!==0){if(o===2&&(m=An(i),m!==0&&(d=m,o=kp(i,m))),o===1)throw l=sl,Ys(i,0),Ki(i,d),wn(i,Je()),l;if(o===6)Ki(i,d);else{if(m=i.current.alternate,!(d&30)&&!GA(m)&&(o=Th(i,d),o===2&&(_=An(i),_!==0&&(d=_,o=kp(i,_))),o===1))throw l=sl,Ys(i,0),Ki(i,d),wn(i,Je()),l;switch(i.finishedWork=m,i.finishedLanes=d,o){case 0:case 1:throw Error(t(345));case 2:Xs(i,vn,ei);break;case 3:if(Ki(i,d),(d&130023424)===d&&(o=Ap+500-Je(),10<o)){if(Ls(i,0)!==0)break;if(m=i.suspendedLanes,(m&d)!==d){an(),i.pingedLanes|=i.suspendedLanes&m;break}i.timeoutHandle=Of(Xs.bind(null,i,vn,ei),o);break}Xs(i,vn,ei);break;case 4:if(Ki(i,d),(d&4194240)===d)break;for(o=i.eventTimes,m=-1;0<d;){var E=31-rn(d);_=1<<E,E=o[E],E>m&&(m=E),d&=~_}if(d=m,d=Je()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*qA(d/1960))-d,10<d){i.timeoutHandle=Of(Xs.bind(null,i,vn,ei),d);break}Xs(i,vn,ei);break;case 5:Xs(i,vn,ei);break;default:throw Error(t(329))}}}return wn(i,Je()),i.callbackNode===l?dv.bind(null,i):null}function kp(i,o){var l=ol;return i.current.memoizedState.isDehydrated&&(Ys(i,o).flags|=256),i=Th(i,o),i!==2&&(o=vn,vn=l,o!==null&&xp(o)),i}function xp(i){vn===null?vn=i:vn.push.apply(vn,i)}function GA(i){for(var o=i;;){if(o.flags&16384){var l=o.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var d=0;d<l.length;d++){var m=l[d],_=m.getSnapshot;m=m.value;try{if(!ir(_(),m))return!1}catch{return!1}}}if(l=o.child,o.subtreeFlags&16384&&l!==null)l.return=o,o=l;else{if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function Ki(i,o){for(o&=~Rp,o&=~_h,i.suspendedLanes|=o,i.pingedLanes&=~o,i=i.expirationTimes;0<o;){var l=31-rn(o),d=1<<l;i[l]=-1,o&=~d}}function fv(i){if(Ue&6)throw Error(t(327));Ta();var o=Ls(i,0);if(!(o&1))return wn(i,Je()),null;var l=Th(i,o);if(i.tag!==0&&l===2){var d=An(i);d!==0&&(o=d,l=kp(i,d))}if(l===1)throw l=sl,Ys(i,0),Ki(i,o),wn(i,Je()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=o,Xs(i,vn,ei),wn(i,Je()),null}function bp(i,o){var l=Ue;Ue|=1;try{return i(o)}finally{Ue=l,Ue===0&&(Ia=Je()+500,Jc&&Bi())}}function Js(i){Gi!==null&&Gi.tag===0&&!(Ue&6)&&Ta();var o=Ue;Ue|=1;var l=jn.transition,d=Oe;try{if(jn.transition=null,Oe=1,i)return i()}finally{Oe=d,jn.transition=l,Ue=o,!(Ue&6)&&Bi()}}function Dp(){bn=Ea.current,et(Ea)}function Ys(i,o){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,EA(l)),Tt!==null)for(l=Tt.return;l!==null;){var d=l;switch(zf(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&Hc();break;case 3:ya(),et(gn),et(Ht),ep();break;case 5:Xf(d);break;case 4:ya();break;case 13:et(lt);break;case 19:et(lt);break;case 10:Kf(d.type._context);break;case 22:case 23:Dp()}l=l.return}if(Ot=i,Tt=i=Hi(i.current,null),jt=bn=o,kt=0,sl=null,Rp=_h=Qs=0,vn=ol=null,Ws!==null){for(o=0;o<Ws.length;o++)if(l=Ws[o],d=l.interleaved,d!==null){l.interleaved=null;var m=d.next,_=l.pending;if(_!==null){var E=_.next;_.next=m,d.next=E}l.pending=d}Ws=null}return i}function pv(i,o){do{var l=Tt;try{if(Wf(),oh.current=ch,ah){for(var d=ct.memoizedState;d!==null;){var m=d.queue;m!==null&&(m.pending=null),d=d.next}ah=!1}if(Hs=0,Vt=Ct=ct=null,Zu=!1,el=0,Sp.current=null,l===null||l.return===null){kt=1,sl=o,Tt=null;break}e:{var _=i,E=l.return,A=l,b=o;if(o=jt,A.flags|=32768,b!==null&&typeof b=="object"&&typeof b.then=="function"){var $=b,ee=A,te=ee.tag;if(!(ee.mode&1)&&(te===0||te===11||te===15)){var X=ee.alternate;X?(ee.updateQueue=X.updateQueue,ee.memoizedState=X.memoizedState,ee.lanes=X.lanes):(ee.updateQueue=null,ee.memoizedState=null)}var ue=Uy(E);if(ue!==null){ue.flags&=-257,By(ue,E,A,_,o),ue.mode&1&&Fy(_,$,o),o=ue,b=$;var pe=o.updateQueue;if(pe===null){var _e=new Set;_e.add(b),o.updateQueue=_e}else pe.add(b);break e}else{if(!(o&1)){Fy(_,$,o),Np();break e}b=Error(t(426))}}else if(it&&A.mode&1){var yt=Uy(E);if(yt!==null){!(yt.flags&65536)&&(yt.flags|=256),By(yt,E,A,_,o),qf(va(b,A));break e}}_=b=va(b,A),kt!==4&&(kt=2),ol===null?ol=[_]:ol.push(_),_=E;do{switch(_.tag){case 3:_.flags|=65536,o&=-o,_.lanes|=o;var z=Ly(_,b,o);ly(_,z);break e;case 1:A=b;var V=_.type,j=_.stateNode;if(!(_.flags&128)&&(typeof V.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(qi===null||!qi.has(j)))){_.flags|=65536,o&=-o,_.lanes|=o;var ne=My(_,A,o);ly(_,ne);break e}}_=_.return}while(_!==null)}_v(l)}catch(ye){o=ye,Tt===l&&l!==null&&(Tt=l=l.return);continue}break}while(!0)}function mv(){var i=gh.current;return gh.current=ch,i===null?ch:i}function Np(){(kt===0||kt===3||kt===2)&&(kt=4),Ot===null||!(Qs&268435455)&&!(_h&268435455)||Ki(Ot,jt)}function Th(i,o){var l=Ue;Ue|=2;var d=mv();(Ot!==i||jt!==o)&&(ei=null,Ys(i,o));do try{WA();break}catch(m){pv(i,m)}while(!0);if(Wf(),Ue=l,gh.current=d,Tt!==null)throw Error(t(261));return Ot=null,jt=0,kt}function WA(){for(;Tt!==null;)gv(Tt)}function KA(){for(;Tt!==null&&!wc();)gv(Tt)}function gv(i){var o=wv(i.alternate,i,bn);i.memoizedProps=i.pendingProps,o===null?_v(i):Tt=o,Sp.current=null}function _v(i){var o=i;do{var l=o.alternate;if(i=o.return,o.flags&32768){if(l=BA(l,o),l!==null){l.flags&=32767,Tt=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{kt=6,Tt=null;return}}else if(l=UA(l,o,bn),l!==null){Tt=l;return}if(o=o.sibling,o!==null){Tt=o;return}Tt=o=i}while(o!==null);kt===0&&(kt=5)}function Xs(i,o,l){var d=Oe,m=jn.transition;try{jn.transition=null,Oe=1,HA(i,o,l,d)}finally{jn.transition=m,Oe=d}return null}function HA(i,o,l,d){do Ta();while(Gi!==null);if(Ue&6)throw Error(t(327));l=i.finishedWork;var m=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var _=l.lanes|l.childLanes;if(He(i,_),i===Ot&&(Tt=Ot=null,jt=0),!(l.subtreeFlags&2064)&&!(l.flags&2064)||vh||(vh=!0,Ev(On,function(){return Ta(),null})),_=(l.flags&15990)!==0,l.subtreeFlags&15990||_){_=jn.transition,jn.transition=null;var E=Oe;Oe=1;var A=Ue;Ue|=4,Sp.current=null,jA(i,l),av(l,i),pA(Nf),Vi=!!Df,Nf=Df=null,i.current=l,$A(l),gf(),Ue=A,Oe=E,jn.transition=_}else i.current=l;if(vh&&(vh=!1,Gi=i,wh=m),_=i.pendingLanes,_===0&&(qi=null),Tc(l.stateNode),wn(i,Je()),o!==null)for(d=i.onRecoverableError,l=0;l<o.length;l++)m=o[l],d(m.value,{componentStack:m.stack,digest:m.digest});if(yh)throw yh=!1,i=Pp,Pp=null,i;return wh&1&&i.tag!==0&&Ta(),_=i.pendingLanes,_&1?i===Cp?al++:(al=0,Cp=i):al=0,Bi(),null}function Ta(){if(Gi!==null){var i=Di(wh),o=jn.transition,l=Oe;try{if(jn.transition=null,Oe=16>i?16:i,Gi===null)var d=!1;else{if(i=Gi,Gi=null,wh=0,Ue&6)throw Error(t(331));var m=Ue;for(Ue|=4,fe=i.current;fe!==null;){var _=fe,E=_.child;if(fe.flags&16){var A=_.deletions;if(A!==null){for(var b=0;b<A.length;b++){var $=A[b];for(fe=$;fe!==null;){var ee=fe;switch(ee.tag){case 0:case 11:case 15:il(8,ee,_)}var te=ee.child;if(te!==null)te.return=ee,fe=te;else for(;fe!==null;){ee=fe;var X=ee.sibling,ue=ee.return;if(nv(ee),ee===$){fe=null;break}if(X!==null){X.return=ue,fe=X;break}fe=ue}}}var pe=_.alternate;if(pe!==null){var _e=pe.child;if(_e!==null){pe.child=null;do{var yt=_e.sibling;_e.sibling=null,_e=yt}while(_e!==null)}}fe=_}}if(_.subtreeFlags&2064&&E!==null)E.return=_,fe=E;else e:for(;fe!==null;){if(_=fe,_.flags&2048)switch(_.tag){case 0:case 11:case 15:il(9,_,_.return)}var z=_.sibling;if(z!==null){z.return=_.return,fe=z;break e}fe=_.return}}var V=i.current;for(fe=V;fe!==null;){E=fe;var j=E.child;if(E.subtreeFlags&2064&&j!==null)j.return=E,fe=j;else e:for(E=V;fe!==null;){if(A=fe,A.flags&2048)try{switch(A.tag){case 0:case 11:case 15:mh(9,A)}}catch(ye){pt(A,A.return,ye)}if(A===E){fe=null;break e}var ne=A.sibling;if(ne!==null){ne.return=A.return,fe=ne;break e}fe=A.return}}if(Ue=m,Bi(),Rn&&typeof Rn.onPostCommitFiberRoot=="function")try{Rn.onPostCommitFiberRoot(Os,i)}catch{}d=!0}return d}finally{Oe=l,jn.transition=o}}return!1}function yv(i,o,l){o=va(l,o),o=Ly(i,o,1),i=ji(i,o,1),o=an(),i!==null&&(xi(i,1,o),wn(i,o))}function pt(i,o,l){if(i.tag===3)yv(i,i,l);else for(;o!==null;){if(o.tag===3){yv(o,i,l);break}else if(o.tag===1){var d=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(qi===null||!qi.has(d))){i=va(l,i),i=My(o,i,1),o=ji(o,i,1),i=an(),o!==null&&(xi(o,1,i),wn(o,i));break}}o=o.return}}function QA(i,o,l){var d=i.pingCache;d!==null&&d.delete(o),o=an(),i.pingedLanes|=i.suspendedLanes&l,Ot===i&&(jt&l)===l&&(kt===4||kt===3&&(jt&130023424)===jt&&500>Je()-Ap?Ys(i,0):Rp|=l),wn(i,o)}function vv(i,o){o===0&&(i.mode&1?(o=Wo,Wo<<=1,!(Wo&130023424)&&(Wo=4194304)):o=1);var l=an();i=Yr(i,o),i!==null&&(xi(i,o,l),wn(i,l))}function JA(i){var o=i.memoizedState,l=0;o!==null&&(l=o.retryLane),vv(i,l)}function YA(i,o){var l=0;switch(i.tag){case 13:var d=i.stateNode,m=i.memoizedState;m!==null&&(l=m.retryLane);break;case 19:d=i.stateNode;break;default:throw Error(t(314))}d!==null&&d.delete(o),vv(i,l)}var wv;wv=function(i,o,l){if(i!==null)if(i.memoizedProps!==o.pendingProps||gn.current)yn=!0;else{if(!(i.lanes&l)&&!(o.flags&128))return yn=!1,FA(i,o,l);yn=!!(i.flags&131072)}else yn=!1,it&&o.flags&1048576&&Z_(o,Xc,o.index);switch(o.lanes=0,o.tag){case 2:var d=o.type;fh(i,o),i=o.pendingProps;var m=ha(o,Ht.current);_a(o,l),m=rp(null,o,d,i,m,l);var _=ip();return o.flags|=1,typeof m=="object"&&m!==null&&typeof m.render=="function"&&m.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,_n(d)?(_=!0,Qc(o)):_=!1,o.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,Jf(o),m.updater=hh,o.stateNode=m,m._reactInternals=o,cp(o,d,i,l),o=pp(null,o,d,!0,_,l)):(o.tag=0,it&&_&&Bf(o),on(null,o,m,l),o=o.child),o;case 16:d=o.elementType;e:{switch(fh(i,o),i=o.pendingProps,m=d._init,d=m(d._payload),o.type=d,m=o.tag=ZA(d),i=or(d,i),m){case 0:o=fp(null,o,d,i,l);break e;case 1:o=Wy(null,o,d,i,l);break e;case 11:o=zy(null,o,d,i,l);break e;case 14:o=jy(null,o,d,or(d.type,i),l);break e}throw Error(t(306,d,""))}return o;case 0:return d=o.type,m=o.pendingProps,m=o.elementType===d?m:or(d,m),fp(i,o,d,m,l);case 1:return d=o.type,m=o.pendingProps,m=o.elementType===d?m:or(d,m),Wy(i,o,d,m,l);case 3:e:{if(Ky(o),i===null)throw Error(t(387));d=o.pendingProps,_=o.memoizedState,m=_.element,uy(i,o),ih(o,d,null,l);var E=o.memoizedState;if(d=E.element,_.isDehydrated)if(_={element:d,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},o.updateQueue.baseState=_,o.memoizedState=_,o.flags&256){m=va(Error(t(423)),o),o=Hy(i,o,d,l,m);break e}else if(d!==m){m=va(Error(t(424)),o),o=Hy(i,o,d,l,m);break e}else for(xn=Mi(o.stateNode.containerInfo.firstChild),kn=o,it=!0,sr=null,l=oy(o,null,d,l),o.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(pa(),d===m){o=Zr(i,o,l);break e}on(i,o,d,l)}o=o.child}return o;case 5:return hy(o),i===null&&$f(o),d=o.type,m=o.pendingProps,_=i!==null?i.memoizedProps:null,E=m.children,Vf(d,m)?E=null:_!==null&&Vf(d,_)&&(o.flags|=32),Gy(i,o),on(i,o,E,l),o.child;case 6:return i===null&&$f(o),null;case 13:return Qy(i,o,l);case 4:return Yf(o,o.stateNode.containerInfo),d=o.pendingProps,i===null?o.child=ma(o,null,d,l):on(i,o,d,l),o.child;case 11:return d=o.type,m=o.pendingProps,m=o.elementType===d?m:or(d,m),zy(i,o,d,m,l);case 7:return on(i,o,o.pendingProps,l),o.child;case 8:return on(i,o,o.pendingProps.children,l),o.child;case 12:return on(i,o,o.pendingProps.children,l),o.child;case 10:e:{if(d=o.type._context,m=o.pendingProps,_=o.memoizedProps,E=m.value,Ye(th,d._currentValue),d._currentValue=E,_!==null)if(ir(_.value,E)){if(_.children===m.children&&!gn.current){o=Zr(i,o,l);break e}}else for(_=o.child,_!==null&&(_.return=o);_!==null;){var A=_.dependencies;if(A!==null){E=_.child;for(var b=A.firstContext;b!==null;){if(b.context===d){if(_.tag===1){b=Xr(-1,l&-l),b.tag=2;var $=_.updateQueue;if($!==null){$=$.shared;var ee=$.pending;ee===null?b.next=b:(b.next=ee.next,ee.next=b),$.pending=b}}_.lanes|=l,b=_.alternate,b!==null&&(b.lanes|=l),Hf(_.return,l,o),A.lanes|=l;break}b=b.next}}else if(_.tag===10)E=_.type===o.type?null:_.child;else if(_.tag===18){if(E=_.return,E===null)throw Error(t(341));E.lanes|=l,A=E.alternate,A!==null&&(A.lanes|=l),Hf(E,l,o),E=_.sibling}else E=_.child;if(E!==null)E.return=_;else for(E=_;E!==null;){if(E===o){E=null;break}if(_=E.sibling,_!==null){_.return=E.return,E=_;break}E=E.return}_=E}on(i,o,m.children,l),o=o.child}return o;case 9:return m=o.type,d=o.pendingProps.children,_a(o,l),m=Bn(m),d=d(m),o.flags|=1,on(i,o,d,l),o.child;case 14:return d=o.type,m=or(d,o.pendingProps),m=or(d.type,m),jy(i,o,d,m,l);case 15:return $y(i,o,o.type,o.pendingProps,l);case 17:return d=o.type,m=o.pendingProps,m=o.elementType===d?m:or(d,m),fh(i,o),o.tag=1,_n(d)?(i=!0,Qc(o)):i=!1,_a(o,l),Vy(o,d,m),cp(o,d,m,l),pp(null,o,d,!0,i,l);case 19:return Yy(i,o,l);case 22:return qy(i,o,l)}throw Error(t(156,o.tag))};function Ev(i,o){return qo(i,o)}function XA(i,o,l,d){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(i,o,l,d){return new XA(i,o,l,d)}function Vp(i){return i=i.prototype,!(!i||!i.isReactComponent)}function ZA(i){if(typeof i=="function")return Vp(i)?1:0;if(i!=null){if(i=i.$$typeof,i===F)return 11;if(i===Wt)return 14}return 2}function Hi(i,o){var l=i.alternate;return l===null?(l=$n(i.tag,o,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=o,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,o=i.dependencies,l.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function Sh(i,o,l,d,m,_){var E=2;if(d=i,typeof i=="function")Vp(i)&&(E=1);else if(typeof i=="string")E=5;else e:switch(i){case x:return Zs(l.children,m,_,o);case S:E=8,m|=8;break;case P:return i=$n(12,l,o,m|2),i.elementType=P,i.lanes=_,i;case C:return i=$n(13,l,o,m),i.elementType=C,i.lanes=_,i;case gt:return i=$n(19,l,o,m),i.elementType=gt,i.lanes=_,i;case Ke:return Rh(l,m,_,o);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case N:E=10;break e;case O:E=9;break e;case F:E=11;break e;case Wt:E=14;break e;case Kt:E=16,d=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return o=$n(E,l,o,m),o.elementType=i,o.type=d,o.lanes=_,o}function Zs(i,o,l,d){return i=$n(7,i,d,o),i.lanes=l,i}function Rh(i,o,l,d){return i=$n(22,i,d,o),i.elementType=Ke,i.lanes=l,i.stateNode={isHidden:!1},i}function Op(i,o,l){return i=$n(6,i,null,o),i.lanes=l,i}function Lp(i,o,l){return o=$n(4,i.children!==null?i.children:[],i.key,o),o.lanes=l,o.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},o}function eP(i,o,l,d,m){this.tag=o,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ki(0),this.expirationTimes=ki(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ki(0),this.identifierPrefix=d,this.onRecoverableError=m,this.mutableSourceEagerHydrationData=null}function Mp(i,o,l,d,m,_,E,A,b){return i=new eP(i,o,l,A,b),o===1?(o=1,_===!0&&(o|=8)):o=0,_=$n(3,null,null,o),i.current=_,_.stateNode=i,_.memoizedState={element:d,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Jf(_),i}function tP(i,o,l){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:de,key:d==null?null:""+d,children:i,containerInfo:o,implementation:l}}function Iv(i){if(!i)return Ui;i=i._reactInternals;e:{if(Yn(i)!==i||i.tag!==1)throw Error(t(170));var o=i;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(_n(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(_n(l))return J_(i,l,o)}return o}function Tv(i,o,l,d,m,_,E,A,b){return i=Mp(l,d,!0,i,m,_,E,A,b),i.context=Iv(null),l=i.current,d=an(),m=Wi(l),_=Xr(d,m),_.callback=o??null,ji(l,_,m),i.current.lanes=m,xi(i,m,d),wn(i,d),i}function Ah(i,o,l,d){var m=o.current,_=an(),E=Wi(m);return l=Iv(l),o.context===null?o.context=l:o.pendingContext=l,o=Xr(_,E),o.payload={element:i},d=d===void 0?null:d,d!==null&&(o.callback=d),i=ji(m,o,E),i!==null&&(lr(i,m,E,_),rh(i,m,E)),E}function Ph(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function Sv(i,o){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<o?l:o}}function Fp(i,o){Sv(i,o),(i=i.alternate)&&Sv(i,o)}var Rv=typeof reportError=="function"?reportError:function(i){console.error(i)};function Up(i){this._internalRoot=i}Ch.prototype.render=Up.prototype.render=function(i){var o=this._internalRoot;if(o===null)throw Error(t(409));Ah(i,o,null,null)},Ch.prototype.unmount=Up.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var o=i.containerInfo;Js(function(){Ah(null,i,null,null)}),o[Kr]=null}};function Ch(i){this._internalRoot=i}Ch.prototype.unstable_scheduleHydration=function(i){if(i){var o=Cc();i={blockedOn:null,target:i,priority:o};for(var l=0;l<_r.length&&o!==0&&o<_r[l].priority;l++);_r.splice(l,0,i),l===0&&bc(i)}};function Bp(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function kh(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function Av(){}function nP(i,o,l,d,m){if(m){if(typeof d=="function"){var _=d;d=function(){var $=Ph(E);_.call($)}}var E=Tv(o,d,i,0,null,!1,!1,"",Av);return i._reactRootContainer=E,i[Kr]=E.current,Gu(i.nodeType===8?i.parentNode:i),Js(),E}for(;m=i.lastChild;)i.removeChild(m);if(typeof d=="function"){var A=d;d=function(){var $=Ph(b);A.call($)}}var b=Mp(i,0,!1,null,null,!1,!1,"",Av);return i._reactRootContainer=b,i[Kr]=b.current,Gu(i.nodeType===8?i.parentNode:i),Js(function(){Ah(o,b,l,d)}),b}function xh(i,o,l,d,m){var _=l._reactRootContainer;if(_){var E=_;if(typeof m=="function"){var A=m;m=function(){var b=Ph(E);A.call(b)}}Ah(o,E,i,m)}else E=nP(l,o,i,m,d);return Ph(E)}Ac=function(i){switch(i.tag){case 3:var o=i.stateNode;if(o.current.memoizedState.isDehydrated){var l=Ci(o.pendingLanes);l!==0&&(bi(o,l|1),wn(o,Je()),!(Ue&6)&&(Ia=Je()+500,Bi()))}break;case 13:Js(function(){var d=Yr(i,1);if(d!==null){var m=an();lr(d,i,1,m)}}),Fp(i,1)}},Ko=function(i){if(i.tag===13){var o=Yr(i,134217728);if(o!==null){var l=an();lr(o,i,134217728,l)}Fp(i,134217728)}},Pc=function(i){if(i.tag===13){var o=Wi(i),l=Yr(i,o);if(l!==null){var d=an();lr(l,i,o,d)}Fp(i,o)}},Cc=function(){return Oe},kc=function(i,o){var l=Oe;try{return Oe=i,o()}finally{Oe=l}},Fo=function(i,o,l){switch(o){case"input":if(gu(i,l),o=l.name,l.type==="radio"&&o!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<l.length;o++){var d=l[o];if(d!==i&&d.form===i.form){var m=Kc(d);if(!m)throw Error(t(90));Do(d),gu(d,m)}}}break;case"textarea":Lo(i,l);break;case"select":o=l.value,o!=null&&Ur(i,!!l.multiple,o,!1)}},xs=bp,Au=Js;var rP={usingClientEntryPoint:!1,Events:[Hu,la,Kc,mr,Ru,bp]},ul={findFiberByHostInstance:js,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},iP={bundleType:ul.bundleType,version:ul.version,rendererPackageName:ul.rendererPackageName,rendererConfig:ul.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:re.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=ku(i),i===null?null:i.stateNode},findFiberByHostInstance:ul.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bh.isDisabled&&bh.supportsFiber)try{Os=bh.inject(iP),Rn=bh}catch{}}return En.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rP,En.createPortal=function(i,o){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bp(o))throw Error(t(200));return tP(i,o,null,l)},En.createRoot=function(i,o){if(!Bp(i))throw Error(t(299));var l=!1,d="",m=Rv;return o!=null&&(o.unstable_strictMode===!0&&(l=!0),o.identifierPrefix!==void 0&&(d=o.identifierPrefix),o.onRecoverableError!==void 0&&(m=o.onRecoverableError)),o=Mp(i,1,!1,null,null,l,!1,d,m),i[Kr]=o.current,Gu(i.nodeType===8?i.parentNode:i),new Up(o)},En.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var o=i._reactInternals;if(o===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=ku(o),i=i===null?null:i.stateNode,i},En.flushSync=function(i){return Js(i)},En.hydrate=function(i,o,l){if(!kh(o))throw Error(t(200));return xh(null,i,o,!0,l)},En.hydrateRoot=function(i,o,l){if(!Bp(i))throw Error(t(405));var d=l!=null&&l.hydratedSources||null,m=!1,_="",E=Rv;if(l!=null&&(l.unstable_strictMode===!0&&(m=!0),l.identifierPrefix!==void 0&&(_=l.identifierPrefix),l.onRecoverableError!==void 0&&(E=l.onRecoverableError)),o=Tv(o,null,i,1,l??null,m,!1,_,E),i[Kr]=o.current,Gu(i),d)for(i=0;i<d.length;i++)l=d[i],m=l._getVersion,m=m(l._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[l,m]:o.mutableSourceEagerHydrationData.push(l,m);return new Ch(o)},En.render=function(i,o,l){if(!kh(o))throw Error(t(200));return xh(null,i,o,!1,l)},En.unmountComponentAtNode=function(i){if(!kh(i))throw Error(t(40));return i._reactRootContainer?(Js(function(){xh(null,null,i,!1,function(){i._reactRootContainer=null,i[Kr]=null})}),!0):!1},En.unstable_batchedUpdates=bp,En.unstable_renderSubtreeIntoContainer=function(i,o,l,d){if(!kh(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return xh(i,o,l,!1,d)},En.version="18.3.1-next-f1338f8080-20240426",En}var Vv;function dP(){if(Vv)return $p.exports;Vv=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),$p.exports=hP(),$p.exports}var Ov;function fP(){if(Ov)return Dh;Ov=1;var n=dP();return Dh.createRoot=n.createRoot,Dh.hydrateRoot=n.hydrateRoot,Dh}var pP=fP(),cl={},Lv;function mP(){if(Lv)return cl;Lv=1,Object.defineProperty(cl,"__esModule",{value:!0}),cl.parse=u,cl.serialize=p;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,r=/^[\u0020-\u003A\u003D-\u007E]*$/,s=Object.prototype.toString,a=(()=>{const I=function(){};return I.prototype=Object.create(null),I})();function u(I,R){const k=new a,L=I.length;if(L<2)return k;const D=(R==null?void 0:R.decode)||y;let G=0;do{const K=I.indexOf("=",G);if(K===-1)break;const Q=I.indexOf(";",G),re=Q===-1?L:Q;if(K>re){G=I.lastIndexOf(";",K-1)+1;continue}const me=h(I,G,K),de=f(I,K,me),x=I.slice(me,de);if(k[x]===void 0){let S=h(I,K+1,re),P=f(I,re,S);const N=D(I.slice(S,P));k[x]=N}G=re+1}while(G<L);return k}function h(I,R,k){do{const L=I.charCodeAt(R);if(L!==32&&L!==9)return R}while(++R<k);return k}function f(I,R,k){for(;R>k;){const L=I.charCodeAt(--R);if(L!==32&&L!==9)return R+1}return k}function p(I,R,k){const L=(k==null?void 0:k.encode)||encodeURIComponent;if(!n.test(I))throw new TypeError(`argument name is invalid: ${I}`);const D=L(R);if(!e.test(D))throw new TypeError(`argument val is invalid: ${R}`);let G=I+"="+D;if(!k)return G;if(k.maxAge!==void 0){if(!Number.isInteger(k.maxAge))throw new TypeError(`option maxAge is invalid: ${k.maxAge}`);G+="; Max-Age="+k.maxAge}if(k.domain){if(!t.test(k.domain))throw new TypeError(`option domain is invalid: ${k.domain}`);G+="; Domain="+k.domain}if(k.path){if(!r.test(k.path))throw new TypeError(`option path is invalid: ${k.path}`);G+="; Path="+k.path}if(k.expires){if(!w(k.expires)||!Number.isFinite(k.expires.valueOf()))throw new TypeError(`option expires is invalid: ${k.expires}`);G+="; Expires="+k.expires.toUTCString()}if(k.httpOnly&&(G+="; HttpOnly"),k.secure&&(G+="; Secure"),k.partitioned&&(G+="; Partitioned"),k.priority)switch(typeof k.priority=="string"?k.priority.toLowerCase():void 0){case"low":G+="; Priority=Low";break;case"medium":G+="; Priority=Medium";break;case"high":G+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${k.priority}`)}if(k.sameSite)switch(typeof k.sameSite=="string"?k.sameSite.toLowerCase():k.sameSite){case!0:case"strict":G+="; SameSite=Strict";break;case"lax":G+="; SameSite=Lax";break;case"none":G+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${k.sameSite}`)}return G}function y(I){if(I.indexOf("%")===-1)return I;try{return decodeURIComponent(I)}catch{return I}}function w(I){return s.call(I)==="[object Date]"}return cl}mP();/**
 * react-router v7.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Mv="popstate";function gP(n={}){function e(s,a){let{pathname:u="/",search:h="",hash:f=""}=Ro(s.location.hash.substring(1));return!u.startsWith("/")&&!u.startsWith(".")&&(u="/"+u),cm("",{pathname:u,search:h,hash:f},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function t(s,a){let u=s.document.querySelector("base"),h="";if(u&&u.getAttribute("href")){let f=s.location.href,p=f.indexOf("#");h=p===-1?f:f.slice(0,p)}return h+"#"+(typeof a=="string"?a:Dl(a))}function r(s,a){hr(s.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(a)})`)}return yP(e,t,r,n)}function ht(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function hr(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function _P(){return Math.random().toString(36).substring(2,10)}function Fv(n,e){return{usr:n.state,key:n.key,idx:e}}function cm(n,e,t=null,r){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?Ro(e):e,state:t,key:e&&e.key||r||_P()}}function Dl({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function Ro(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let r=n.indexOf("?");r>=0&&(e.search=n.substring(r),n=n.substring(0,r)),n&&(e.pathname=n)}return e}function yP(n,e,t,r={}){let{window:s=document.defaultView,v5Compat:a=!1}=r,u=s.history,h="POP",f=null,p=y();p==null&&(p=0,u.replaceState({...u.state,idx:p},""));function y(){return(u.state||{idx:null}).idx}function w(){h="POP";let D=y(),G=D==null?null:D-p;p=D,f&&f({action:h,location:L.location,delta:G})}function I(D,G){h="PUSH";let K=cm(L.location,D,G);t(K,D),p=y()+1;let Q=Fv(K,p),re=L.createHref(K);try{u.pushState(Q,"",re)}catch(me){if(me instanceof DOMException&&me.name==="DataCloneError")throw me;s.location.assign(re)}a&&f&&f({action:h,location:L.location,delta:1})}function R(D,G){h="REPLACE";let K=cm(L.location,D,G);t(K,D),p=y();let Q=Fv(K,p),re=L.createHref(K);u.replaceState(Q,"",re),a&&f&&f({action:h,location:L.location,delta:0})}function k(D){let G=s.location.origin!=="null"?s.location.origin:s.location.href,K=typeof D=="string"?D:Dl(D);return K=K.replace(/ $/,"%20"),ht(G,`No window.location.(origin|href) available to create URL for href: ${K}`),new URL(K,G)}let L={get action(){return h},get location(){return n(s,u)},listen(D){if(f)throw new Error("A history only accepts one active listener");return s.addEventListener(Mv,w),f=D,()=>{s.removeEventListener(Mv,w),f=null}},createHref(D){return e(s,D)},createURL:k,encodeLocation(D){let G=k(D);return{pathname:G.pathname,search:G.search,hash:G.hash}},push:I,replace:R,go(D){return u.go(D)}};return L}function $E(n,e,t="/"){return vP(n,e,t,!1)}function vP(n,e,t,r){let s=typeof e=="string"?Ro(e):e,a=us(s.pathname||"/",t);if(a==null)return null;let u=qE(n);wP(u);let h=null;for(let f=0;h==null&&f<u.length;++f){let p=bP(a);h=kP(u[f],p,r)}return h}function qE(n,e=[],t=[],r=""){let s=(a,u,h)=>{let f={relativePath:h===void 0?a.path||"":h,caseSensitive:a.caseSensitive===!0,childrenIndex:u,route:a};f.relativePath.startsWith("/")&&(ht(f.relativePath.startsWith(r),`Absolute route path "${f.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),f.relativePath=f.relativePath.slice(r.length));let p=ui([r,f.relativePath]),y=t.concat(f);a.children&&a.children.length>0&&(ht(a.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),qE(a.children,e,y,p)),!(a.path==null&&!a.index)&&e.push({path:p,score:PP(p,a.index),routesMeta:y})};return n.forEach((a,u)=>{var h;if(a.path===""||!((h=a.path)!=null&&h.includes("?")))s(a,u);else for(let f of GE(a.path))s(a,u,f)}),e}function GE(n){let e=n.split("/");if(e.length===0)return[];let[t,...r]=e,s=t.endsWith("?"),a=t.replace(/\?$/,"");if(r.length===0)return s?[a,""]:[a];let u=GE(r.join("/")),h=[];return h.push(...u.map(f=>f===""?a:[a,f].join("/"))),s&&h.push(...u),h.map(f=>n.startsWith("/")&&f===""?"/":f)}function wP(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:CP(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}var EP=/^:[\w-]+$/,IP=3,TP=2,SP=1,RP=10,AP=-2,Uv=n=>n==="*";function PP(n,e){let t=n.split("/"),r=t.length;return t.some(Uv)&&(r+=AP),e&&(r+=TP),t.filter(s=>!Uv(s)).reduce((s,a)=>s+(EP.test(a)?IP:a===""?SP:RP),r)}function CP(n,e){return n.length===e.length&&n.slice(0,-1).every((r,s)=>r===e[s])?n[n.length-1]-e[e.length-1]:0}function kP(n,e,t=!1){let{routesMeta:r}=n,s={},a="/",u=[];for(let h=0;h<r.length;++h){let f=r[h],p=h===r.length-1,y=a==="/"?e:e.slice(a.length)||"/",w=ad({path:f.relativePath,caseSensitive:f.caseSensitive,end:p},y),I=f.route;if(!w&&p&&t&&!r[r.length-1].route.index&&(w=ad({path:f.relativePath,caseSensitive:f.caseSensitive,end:!1},y)),!w)return null;Object.assign(s,w.params),u.push({params:s,pathname:ui([a,w.pathname]),pathnameBase:OP(ui([a,w.pathnameBase])),route:I}),w.pathnameBase!=="/"&&(a=ui([a,w.pathnameBase]))}return u}function ad(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,r]=xP(n.path,n.caseSensitive,n.end),s=e.match(t);if(!s)return null;let a=s[0],u=a.replace(/(.)\/+$/,"$1"),h=s.slice(1);return{params:r.reduce((p,{paramName:y,isOptional:w},I)=>{if(y==="*"){let k=h[I]||"";u=a.slice(0,a.length-k.length).replace(/(.)\/+$/,"$1")}const R=h[I];return w&&!R?p[y]=void 0:p[y]=(R||"").replace(/%2F/g,"/"),p},{}),pathname:a,pathnameBase:u,pattern:n}}function xP(n,e=!1,t=!0){hr(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let r=[],s="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,h,f)=>(r.push({paramName:h,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(r.push({paramName:"*"}),s+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?s+="\\/*$":n!==""&&n!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),r]}function bP(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return hr(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function us(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=n.charAt(t);return r&&r!=="/"?null:n.slice(t)||"/"}function DP(n,e="/"){let{pathname:t,search:r="",hash:s=""}=typeof n=="string"?Ro(n):n;return{pathname:t?t.startsWith("/")?t:NP(t,e):e,search:LP(r),hash:MP(s)}}function NP(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(s=>{s===".."?t.length>1&&t.pop():s!=="."&&t.push(s)}),t.length>1?t.join("/"):"/"}function Wp(n,e,t,r){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function VP(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function WE(n){let e=VP(n);return e.map((t,r)=>r===e.length-1?t.pathname:t.pathnameBase)}function KE(n,e,t,r=!1){let s;typeof n=="string"?s=Ro(n):(s={...n},ht(!s.pathname||!s.pathname.includes("?"),Wp("?","pathname","search",s)),ht(!s.pathname||!s.pathname.includes("#"),Wp("#","pathname","hash",s)),ht(!s.search||!s.search.includes("#"),Wp("#","search","hash",s)));let a=n===""||s.pathname==="",u=a?"/":s.pathname,h;if(u==null)h=t;else{let w=e.length-1;if(!r&&u.startsWith("..")){let I=u.split("/");for(;I[0]==="..";)I.shift(),w-=1;s.pathname=I.join("/")}h=w>=0?e[w]:"/"}let f=DP(s,h),p=u&&u!=="/"&&u.endsWith("/"),y=(a||u===".")&&t.endsWith("/");return!f.pathname.endsWith("/")&&(p||y)&&(f.pathname+="/"),f}var ui=n=>n.join("/").replace(/\/\/+/g,"/"),OP=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),LP=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,MP=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function FP(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var HE=["POST","PUT","PATCH","DELETE"];new Set(HE);var UP=["GET",...HE];new Set(UP);var ru=H.createContext(null);ru.displayName="DataRouter";var Dd=H.createContext(null);Dd.displayName="DataRouterState";var QE=H.createContext({isTransitioning:!1});QE.displayName="ViewTransition";var BP=H.createContext(new Map);BP.displayName="Fetchers";var zP=H.createContext(null);zP.displayName="Await";var Lr=H.createContext(null);Lr.displayName="Navigation";var Jl=H.createContext(null);Jl.displayName="Location";var _i=H.createContext({outlet:null,matches:[],isDataRoute:!1});_i.displayName="Route";var Wm=H.createContext(null);Wm.displayName="RouteError";function jP(n,{relative:e}={}){ht(Yl(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:r}=H.useContext(Lr),{hash:s,pathname:a,search:u}=Xl(n,{relative:e}),h=a;return t!=="/"&&(h=a==="/"?t:ui([t,a])),r.createHref({pathname:h,search:u,hash:s})}function Yl(){return H.useContext(Jl)!=null}function Ao(){return ht(Yl(),"useLocation() may be used only in the context of a <Router> component."),H.useContext(Jl).location}var JE="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function YE(n){H.useContext(Lr).static||H.useLayoutEffect(n)}function XE(){let{isDataRoute:n}=H.useContext(_i);return n?tC():$P()}function $P(){ht(Yl(),"useNavigate() may be used only in the context of a <Router> component.");let n=H.useContext(ru),{basename:e,navigator:t}=H.useContext(Lr),{matches:r}=H.useContext(_i),{pathname:s}=Ao(),a=JSON.stringify(WE(r)),u=H.useRef(!1);return YE(()=>{u.current=!0}),H.useCallback((f,p={})=>{if(hr(u.current,JE),!u.current)return;if(typeof f=="number"){t.go(f);return}let y=KE(f,JSON.parse(a),s,p.relative==="path");n==null&&e!=="/"&&(y.pathname=y.pathname==="/"?e:ui([e,y.pathname])),(p.replace?t.replace:t.push)(y,p.state,p)},[e,t,a,s,n])}H.createContext(null);function Xl(n,{relative:e}={}){let{matches:t}=H.useContext(_i),{pathname:r}=Ao(),s=JSON.stringify(WE(t));return H.useMemo(()=>KE(n,JSON.parse(s),r,e==="path"),[n,s,r,e])}function qP(n,e){return ZE(n,e)}function ZE(n,e,t,r){var G;ht(Yl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=H.useContext(Lr),{matches:a}=H.useContext(_i),u=a[a.length-1],h=u?u.params:{},f=u?u.pathname:"/",p=u?u.pathnameBase:"/",y=u&&u.route;{let K=y&&y.path||"";eI(f,!y||K.endsWith("*")||K.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${K}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${K}"> to <Route path="${K==="/"?"*":`${K}/*`}">.`)}let w=Ao(),I;if(e){let K=typeof e=="string"?Ro(e):e;ht(p==="/"||((G=K.pathname)==null?void 0:G.startsWith(p)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${K.pathname}" was given in the \`location\` prop.`),I=K}else I=w;let R=I.pathname||"/",k=R;if(p!=="/"){let K=p.replace(/^\//,"").split("/");k="/"+R.replace(/^\//,"").split("/").slice(K.length).join("/")}let L=$E(n,{pathname:k});hr(y||L!=null,`No routes matched location "${I.pathname}${I.search}${I.hash}" `),hr(L==null||L[L.length-1].route.element!==void 0||L[L.length-1].route.Component!==void 0||L[L.length-1].route.lazy!==void 0,`Matched leaf route at location "${I.pathname}${I.search}${I.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let D=QP(L&&L.map(K=>Object.assign({},K,{params:Object.assign({},h,K.params),pathname:ui([p,s.encodeLocation?s.encodeLocation(K.pathname).pathname:K.pathname]),pathnameBase:K.pathnameBase==="/"?p:ui([p,s.encodeLocation?s.encodeLocation(K.pathnameBase).pathname:K.pathnameBase])})),a,t,r);return e&&D?H.createElement(Jl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...I},navigationType:"POP"}},D):D}function GP(){let n=eC(),e=FP(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,r="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:r},a={padding:"2px 4px",backgroundColor:r},u=null;return console.error("Error handled by React Router default ErrorBoundary:",n),u=H.createElement(H.Fragment,null,H.createElement("p",null,"💿 Hey developer 👋"),H.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",H.createElement("code",{style:a},"ErrorBoundary")," or"," ",H.createElement("code",{style:a},"errorElement")," prop on your route.")),H.createElement(H.Fragment,null,H.createElement("h2",null,"Unexpected Application Error!"),H.createElement("h3",{style:{fontStyle:"italic"}},e),t?H.createElement("pre",{style:s},t):null,u)}var WP=H.createElement(GP,null),KP=class extends H.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?H.createElement(_i.Provider,{value:this.props.routeContext},H.createElement(Wm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function HP({routeContext:n,match:e,children:t}){let r=H.useContext(ru);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),H.createElement(_i.Provider,{value:n},t)}function QP(n,e=[],t=null,r=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let s=n,a=t==null?void 0:t.errors;if(a!=null){let f=s.findIndex(p=>p.route.id&&(a==null?void 0:a[p.route.id])!==void 0);ht(f>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`),s=s.slice(0,Math.min(s.length,f+1))}let u=!1,h=-1;if(t)for(let f=0;f<s.length;f++){let p=s[f];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(h=f),p.route.id){let{loaderData:y,errors:w}=t,I=p.route.loader&&!y.hasOwnProperty(p.route.id)&&(!w||w[p.route.id]===void 0);if(p.route.lazy||I){u=!0,h>=0?s=s.slice(0,h+1):s=[s[0]];break}}}return s.reduceRight((f,p,y)=>{let w,I=!1,R=null,k=null;t&&(w=a&&p.route.id?a[p.route.id]:void 0,R=p.route.errorElement||WP,u&&(h<0&&y===0?(eI("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),I=!0,k=null):h===y&&(I=!0,k=p.route.hydrateFallbackElement||null)));let L=e.concat(s.slice(0,y+1)),D=()=>{let G;return w?G=R:I?G=k:p.route.Component?G=H.createElement(p.route.Component,null):p.route.element?G=p.route.element:G=f,H.createElement(HP,{match:p,routeContext:{outlet:f,matches:L,isDataRoute:t!=null},children:G})};return t&&(p.route.ErrorBoundary||p.route.errorElement||y===0)?H.createElement(KP,{location:t.location,revalidation:t.revalidation,component:R,error:w,children:D(),routeContext:{outlet:null,matches:L,isDataRoute:!0}}):D()},null)}function Km(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function JP(n){let e=H.useContext(ru);return ht(e,Km(n)),e}function YP(n){let e=H.useContext(Dd);return ht(e,Km(n)),e}function XP(n){let e=H.useContext(_i);return ht(e,Km(n)),e}function Hm(n){let e=XP(n),t=e.matches[e.matches.length-1];return ht(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function ZP(){return Hm("useRouteId")}function eC(){var r;let n=H.useContext(Wm),e=YP("useRouteError"),t=Hm("useRouteError");return n!==void 0?n:(r=e.errors)==null?void 0:r[t]}function tC(){let{router:n}=JP("useNavigate"),e=Hm("useNavigate"),t=H.useRef(!1);return YE(()=>{t.current=!0}),H.useCallback(async(s,a={})=>{hr(t.current,JE),t.current&&(typeof s=="number"?n.navigate(s):await n.navigate(s,{fromRouteId:e,...a}))},[n,e])}var Bv={};function eI(n,e,t){!e&&!Bv[n]&&(Bv[n]=!0,hr(!1,t))}H.memo(nC);function nC({routes:n,future:e,state:t}){return ZE(n,void 0,t,e)}function Gh(n){ht(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function rC({basename:n="/",children:e=null,location:t,navigationType:r="POP",navigator:s,static:a=!1}){ht(!Yl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=n.replace(/^\/*/,"/"),h=H.useMemo(()=>({basename:u,navigator:s,static:a,future:{}}),[u,s,a]);typeof t=="string"&&(t=Ro(t));let{pathname:f="/",search:p="",hash:y="",state:w=null,key:I="default"}=t,R=H.useMemo(()=>{let k=us(f,u);return k==null?null:{location:{pathname:k,search:p,hash:y,state:w,key:I},navigationType:r}},[u,f,p,y,w,I,r]);return hr(R!=null,`<Router basename="${u}"> is not able to match the URL "${f}${p}${y}" because it does not start with the basename, so the <Router> won't render anything.`),R==null?null:H.createElement(Lr.Provider,{value:h},H.createElement(Jl.Provider,{children:e,value:R}))}function iC({children:n,location:e}){return qP(hm(n),e)}function hm(n,e=[]){let t=[];return H.Children.forEach(n,(r,s)=>{if(!H.isValidElement(r))return;let a=[...e,s];if(r.type===H.Fragment){t.push.apply(t,hm(r.props.children,a));return}ht(r.type===Gh,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ht(!r.props.index||!r.props.children,"An index route cannot have child routes.");let u={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(u.children=hm(r.props.children,a)),t.push(u)}),t}var Wh="get",Kh="application/x-www-form-urlencoded";function Nd(n){return n!=null&&typeof n.tagName=="string"}function sC(n){return Nd(n)&&n.tagName.toLowerCase()==="button"}function oC(n){return Nd(n)&&n.tagName.toLowerCase()==="form"}function aC(n){return Nd(n)&&n.tagName.toLowerCase()==="input"}function uC(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function lC(n,e){return n.button===0&&(!e||e==="_self")&&!uC(n)}var Nh=null;function cC(){if(Nh===null)try{new FormData(document.createElement("form"),0),Nh=!1}catch{Nh=!0}return Nh}var hC=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Kp(n){return n!=null&&!hC.has(n)?(hr(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Kh}"`),null):n}function dC(n,e){let t,r,s,a,u;if(oC(n)){let h=n.getAttribute("action");r=h?us(h,e):null,t=n.getAttribute("method")||Wh,s=Kp(n.getAttribute("enctype"))||Kh,a=new FormData(n)}else if(sC(n)||aC(n)&&(n.type==="submit"||n.type==="image")){let h=n.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let f=n.getAttribute("formaction")||h.getAttribute("action");if(r=f?us(f,e):null,t=n.getAttribute("formmethod")||h.getAttribute("method")||Wh,s=Kp(n.getAttribute("formenctype"))||Kp(h.getAttribute("enctype"))||Kh,a=new FormData(h,n),!cC()){let{name:p,type:y,value:w}=n;if(y==="image"){let I=p?`${p}.`:"";a.append(`${I}x`,"0"),a.append(`${I}y`,"0")}else p&&a.append(p,w)}}else{if(Nd(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Wh,r=null,s=Kh,u=n}return a&&s==="text/plain"&&(u=a,a=void 0),{action:r,method:t.toLowerCase(),encType:s,formData:a,body:u}}function Qm(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}async function fC(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function pC(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function mC(n,e,t){let r=await Promise.all(n.map(async s=>{let a=e.routes[s.route.id];if(a){let u=await fC(a,t);return u.links?u.links():[]}return[]}));return vC(r.flat(1).filter(pC).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function zv(n,e,t,r,s,a){let u=(f,p)=>t[p]?f.route.id!==t[p].route.id:!0,h=(f,p)=>{var y;return t[p].pathname!==f.pathname||((y=t[p].route.path)==null?void 0:y.endsWith("*"))&&t[p].params["*"]!==f.params["*"]};return a==="assets"?e.filter((f,p)=>u(f,p)||h(f,p)):a==="data"?e.filter((f,p)=>{var w;let y=r.routes[f.route.id];if(!y||!y.hasLoader)return!1;if(u(f,p)||h(f,p))return!0;if(f.route.shouldRevalidate){let I=f.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:((w=t[0])==null?void 0:w.params)||{},nextUrl:new URL(n,window.origin),nextParams:f.params,defaultShouldRevalidate:!0});if(typeof I=="boolean")return I}return!0}):[]}function gC(n,e){return _C(n.map(t=>{let r=e.routes[t.route.id];if(!r)return[];let s=[r.module];return r.imports&&(s=s.concat(r.imports)),s}).flat(1))}function _C(n){return[...new Set(n)]}function yC(n){let e={},t=Object.keys(n).sort();for(let r of t)e[r]=n[r];return e}function vC(n,e){let t=new Set;return new Set(e),n.reduce((r,s)=>{let a=JSON.stringify(yC(s));return t.has(a)||(t.add(a),r.push({key:a,link:s})),r},[])}function wC(n){let e=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function EC(){let n=H.useContext(ru);return Qm(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function IC(){let n=H.useContext(Dd);return Qm(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Jm=H.createContext(void 0);Jm.displayName="FrameworkContext";function tI(){let n=H.useContext(Jm);return Qm(n,"You must render this element inside a <HydratedRouter> element"),n}function TC(n,e){let t=H.useContext(Jm),[r,s]=H.useState(!1),[a,u]=H.useState(!1),{onFocus:h,onBlur:f,onMouseEnter:p,onMouseLeave:y,onTouchStart:w}=e,I=H.useRef(null);H.useEffect(()=>{if(n==="render"&&u(!0),n==="viewport"){let L=G=>{G.forEach(K=>{u(K.isIntersecting)})},D=new IntersectionObserver(L,{threshold:.5});return I.current&&D.observe(I.current),()=>{D.disconnect()}}},[n]),H.useEffect(()=>{if(r){let L=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(L)}}},[r]);let R=()=>{s(!0)},k=()=>{s(!1),u(!1)};return t?n!=="intent"?[a,I,{}]:[a,I,{onFocus:hl(h,R),onBlur:hl(f,k),onMouseEnter:hl(p,R),onMouseLeave:hl(y,k),onTouchStart:hl(w,R)}]:[!1,I,{}]}function hl(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function SC({page:n,...e}){let{router:t}=EC(),r=H.useMemo(()=>$E(t.routes,n,t.basename),[t.routes,n,t.basename]);return r?H.createElement(AC,{page:n,matches:r,...e}):null}function RC(n){let{manifest:e,routeModules:t}=tI(),[r,s]=H.useState([]);return H.useEffect(()=>{let a=!1;return mC(n,e,t).then(u=>{a||s(u)}),()=>{a=!0}},[n,e,t]),r}function AC({page:n,matches:e,...t}){let r=Ao(),{manifest:s,routeModules:a}=tI(),{loaderData:u,matches:h}=IC(),f=H.useMemo(()=>zv(n,e,h,s,r,"data"),[n,e,h,s,r]),p=H.useMemo(()=>zv(n,e,h,s,r,"assets"),[n,e,h,s,r]),y=H.useMemo(()=>{if(n===r.pathname+r.search+r.hash)return[];let R=new Set,k=!1;if(e.forEach(D=>{var K;let G=s.routes[D.route.id];!G||!G.hasLoader||(!f.some(Q=>Q.route.id===D.route.id)&&D.route.id in u&&((K=a[D.route.id])!=null&&K.shouldRevalidate)||G.hasClientLoader?k=!0:R.add(D.route.id))}),R.size===0)return[];let L=wC(n);return k&&R.size>0&&L.searchParams.set("_routes",e.filter(D=>R.has(D.route.id)).map(D=>D.route.id).join(",")),[L.pathname+L.search]},[u,r,s,f,e,n,a]),w=H.useMemo(()=>gC(p,s),[p,s]),I=RC(p);return H.createElement(H.Fragment,null,y.map(R=>H.createElement("link",{key:R,rel:"prefetch",as:"fetch",href:R,...t})),w.map(R=>H.createElement("link",{key:R,rel:"modulepreload",href:R,...t})),I.map(({key:R,link:k})=>H.createElement("link",{key:R,...k})))}function PC(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var nI=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{nI&&(window.__reactRouterVersion="7.1.3")}catch{}function CC({basename:n,children:e,window:t}){let r=H.useRef();r.current==null&&(r.current=gP({window:t,v5Compat:!0}));let s=r.current,[a,u]=H.useState({action:s.action,location:s.location}),h=H.useCallback(f=>{H.startTransition(()=>u(f))},[u]);return H.useLayoutEffect(()=>s.listen(h),[s,h]),H.createElement(rC,{basename:n,children:e,location:a.location,navigationType:a.action,navigator:s})}var rI=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ud=H.forwardRef(function({onClick:e,discover:t="render",prefetch:r="none",relative:s,reloadDocument:a,replace:u,state:h,target:f,to:p,preventScrollReset:y,viewTransition:w,...I},R){let{basename:k}=H.useContext(Lr),L=typeof p=="string"&&rI.test(p),D,G=!1;if(typeof p=="string"&&L&&(D=p,nI))try{let P=new URL(window.location.href),N=p.startsWith("//")?new URL(P.protocol+p):new URL(p),O=us(N.pathname,k);N.origin===P.origin&&O!=null?p=O+N.search+N.hash:G=!0}catch{hr(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let K=jP(p,{relative:s}),[Q,re,me]=TC(r,I),de=DC(p,{replace:u,state:h,target:f,preventScrollReset:y,relative:s,viewTransition:w});function x(P){e&&e(P),P.defaultPrevented||de(P)}let S=H.createElement("a",{...I,...me,href:D||K,onClick:G||a?e:x,ref:PC(R,re),target:f,"data-discover":!L&&t==="render"?"true":void 0});return Q&&!L?H.createElement(H.Fragment,null,S,H.createElement(SC,{page:K})):S});ud.displayName="Link";var kC=H.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:r="",end:s=!1,style:a,to:u,viewTransition:h,children:f,...p},y){let w=Xl(u,{relative:p.relative}),I=Ao(),R=H.useContext(Dd),{navigator:k,basename:L}=H.useContext(Lr),D=R!=null&&MC(w)&&h===!0,G=k.encodeLocation?k.encodeLocation(w).pathname:w.pathname,K=I.pathname,Q=R&&R.navigation&&R.navigation.location?R.navigation.location.pathname:null;t||(K=K.toLowerCase(),Q=Q?Q.toLowerCase():null,G=G.toLowerCase()),Q&&L&&(Q=us(Q,L)||Q);const re=G!=="/"&&G.endsWith("/")?G.length-1:G.length;let me=K===G||!s&&K.startsWith(G)&&K.charAt(re)==="/",de=Q!=null&&(Q===G||!s&&Q.startsWith(G)&&Q.charAt(G.length)==="/"),x={isActive:me,isPending:de,isTransitioning:D},S=me?e:void 0,P;typeof r=="function"?P=r(x):P=[r,me?"active":null,de?"pending":null,D?"transitioning":null].filter(Boolean).join(" ");let N=typeof a=="function"?a(x):a;return H.createElement(ud,{...p,"aria-current":S,className:P,ref:y,style:N,to:u,viewTransition:h},typeof f=="function"?f(x):f)});kC.displayName="NavLink";var xC=H.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:r,replace:s,state:a,method:u=Wh,action:h,onSubmit:f,relative:p,preventScrollReset:y,viewTransition:w,...I},R)=>{let k=OC(),L=LC(h,{relative:p}),D=u.toLowerCase()==="get"?"get":"post",G=typeof h=="string"&&rI.test(h),K=Q=>{if(f&&f(Q),Q.defaultPrevented)return;Q.preventDefault();let re=Q.nativeEvent.submitter,me=(re==null?void 0:re.getAttribute("formmethod"))||u;k(re||Q.currentTarget,{fetcherKey:e,method:me,navigate:t,replace:s,state:a,relative:p,preventScrollReset:y,viewTransition:w})};return H.createElement("form",{ref:R,method:D,action:L,onSubmit:r?f:K,...I,"data-discover":!G&&n==="render"?"true":void 0})});xC.displayName="Form";function bC(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function iI(n){let e=H.useContext(ru);return ht(e,bC(n)),e}function DC(n,{target:e,replace:t,state:r,preventScrollReset:s,relative:a,viewTransition:u}={}){let h=XE(),f=Ao(),p=Xl(n,{relative:a});return H.useCallback(y=>{if(lC(y,e)){y.preventDefault();let w=t!==void 0?t:Dl(f)===Dl(p);h(n,{replace:w,state:r,preventScrollReset:s,relative:a,viewTransition:u})}},[f,h,p,t,r,e,n,s,a,u])}var NC=0,VC=()=>`__${String(++NC)}__`;function OC(){let{router:n}=iI("useSubmit"),{basename:e}=H.useContext(Lr),t=ZP();return H.useCallback(async(r,s={})=>{let{action:a,method:u,encType:h,formData:f,body:p}=dC(r,e);if(s.navigate===!1){let y=s.fetcherKey||VC();await n.fetch(y,t,s.action||a,{preventScrollReset:s.preventScrollReset,formData:f,body:p,formMethod:s.method||u,formEncType:s.encType||h,flushSync:s.flushSync})}else await n.navigate(s.action||a,{preventScrollReset:s.preventScrollReset,formData:f,body:p,formMethod:s.method||u,formEncType:s.encType||h,replace:s.replace,state:s.state,fromRouteId:t,flushSync:s.flushSync,viewTransition:s.viewTransition})},[n,e,t])}function LC(n,{relative:e}={}){let{basename:t}=H.useContext(Lr),r=H.useContext(_i);ht(r,"useFormAction must be used inside a RouteContext");let[s]=r.matches.slice(-1),a={...Xl(n||".",{relative:e})},u=Ao();if(n==null){a.search=u.search;let h=new URLSearchParams(a.search),f=h.getAll("index");if(f.some(y=>y==="")){h.delete("index"),f.filter(w=>w).forEach(w=>h.append("index",w));let y=h.toString();a.search=y?`?${y}`:""}}return(!n||n===".")&&s.route.index&&(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(a.pathname=a.pathname==="/"?t:ui([t,a.pathname])),Dl(a)}function MC(n,e={}){let t=H.useContext(QE);ht(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=iI("useViewTransitionState"),s=Xl(n,{relative:e.relative});if(!t.isTransitioning)return!1;let a=us(t.currentLocation.pathname,r)||t.currentLocation.pathname,u=us(t.nextLocation.pathname,r)||t.nextLocation.pathname;return ad(s.pathname,u)!=null||ad(s.pathname,a)!=null}new TextEncoder;var jv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sI=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},FC=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const a=n[t++];e[r++]=String.fromCharCode((s&31)<<6|a&63)}else if(s>239&&s<365){const a=n[t++],u=n[t++],h=n[t++],f=((s&7)<<18|(a&63)<<12|(u&63)<<6|h&63)-65536;e[r++]=String.fromCharCode(55296+(f>>10)),e[r++]=String.fromCharCode(56320+(f&1023))}else{const a=n[t++],u=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(a&63)<<6|u&63)}}return e.join("")},oI={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const a=n[s],u=s+1<n.length,h=u?n[s+1]:0,f=s+2<n.length,p=f?n[s+2]:0,y=a>>2,w=(a&3)<<4|h>>4;let I=(h&15)<<2|p>>6,R=p&63;f||(R=64,u||(I=64)),r.push(t[y],t[w],t[I],t[R])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(sI(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):FC(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const a=t[n.charAt(s++)],h=s<n.length?t[n.charAt(s)]:0;++s;const p=s<n.length?t[n.charAt(s)]:64;++s;const w=s<n.length?t[n.charAt(s)]:64;if(++s,a==null||h==null||p==null||w==null)throw new UC;const I=a<<2|h>>4;if(r.push(I),p!==64){const R=h<<4&240|p>>2;if(r.push(R),w!==64){const k=p<<6&192|w;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class UC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const BC=function(n){const e=sI(n);return oI.encodeByteArray(e,!0)},ld=function(n){return BC(n).replace(/\./g,"")},aI=function(n){try{return oI.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function cd(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!zC(t)||(n[t]=cd(n[t],e[t]));return n}function zC(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jC=()=>uI().__FIREBASE_DEFAULTS__,$C=()=>{if(typeof process>"u"||typeof jv>"u")return;const n=jv.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},qC=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&aI(n[1]);return e&&JSON.parse(e)},Vd=()=>{try{return jC()||$C()||qC()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},GC=n=>{var e,t;return(t=(e=Vd())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},lI=()=>{var n;return(n=Vd())===null||n===void 0?void 0:n.config},cI=n=>{var e;return(e=Vd())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hI(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ld(JSON.stringify(t)),ld(JSON.stringify(u)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function KC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xt())}function HC(){var n;const e=(n=Vd())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function QC(){return typeof window<"u"||dI()}function dI(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function JC(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function YC(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function XC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ZC(){const n=xt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function fI(){return!HC()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function pI(){try{return typeof indexedDB=="object"}catch{return!1}}function e0(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var a;e(((a=s.error)===null||a===void 0?void 0:a.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t0="FirebaseError";class fr extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=t0,Object.setPrototypeOf(this,fr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Po.prototype.create)}}class Po{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,a=this.errors[e],u=a?n0(a,r):"Error",h=`${this.serviceName}: ${u} (${s}).`;return new fr(s,h,r)}}function n0(n,e){return n.replace(r0,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const r0=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $v(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function i0(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ba(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const a=n[s],u=e[s];if(qv(a)&&qv(u)){if(!Ba(a,u))return!1}else if(a!==u)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function qv(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zl(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function yl(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,a]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(a)}}),e}function vl(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function mI(n,e){const t=new s0(n,e);return t.subscribe.bind(t)}class s0{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");o0(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Hp),s.error===void 0&&(s.error=Hp),s.complete===void 0&&(s.complete=Hp);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function o0(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Hp(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(n){return n&&n._delegate?n._delegate:n}class dr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const to="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new WC;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(l0(e))try{this.getOrInitializeService({instanceIdentifier:to})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:s});r.resolve(a)}catch{}}}}clearInstance(e=to){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=to){return this.instances.has(e)}getOptions(e=to){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[a,u]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(a);r===h&&u.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),a=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;a.add(e),this.onInitCallbacks.set(s,a);const u=this.instances.get(s);return u&&e(u,s),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:u0(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=to){return this.component?this.component.multipleInstances?e:to:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function u0(n){return n===to?void 0:n}function l0(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new a0(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ym=[];var be;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(be||(be={}));const _I={debug:be.DEBUG,verbose:be.VERBOSE,info:be.INFO,warn:be.WARN,error:be.ERROR,silent:be.SILENT},c0=be.INFO,h0={[be.DEBUG]:"log",[be.VERBOSE]:"log",[be.INFO]:"info",[be.WARN]:"warn",[be.ERROR]:"error"},d0=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=h0[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Od{constructor(e){this.name=e,this._logLevel=c0,this._logHandler=d0,this._userLogHandler=null,Ym.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?_I[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,be.DEBUG,...e),this._logHandler(this,be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,be.VERBOSE,...e),this._logHandler(this,be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,be.INFO,...e),this._logHandler(this,be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,be.WARN,...e),this._logHandler(this,be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,be.ERROR,...e),this._logHandler(this,be.ERROR,...e)}}function f0(n){Ym.forEach(e=>{e.setLogLevel(n)})}function p0(n,e){for(const t of Ym){let r=null;e&&e.level&&(r=_I[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(s,a,...u)=>{const h=u.map(f=>{if(f==null)return null;if(typeof f=="string")return f;if(typeof f=="number"||typeof f=="boolean")return f.toString();if(f instanceof Error)return f.message;try{return JSON.stringify(f)}catch{return null}}).filter(f=>f).join(" ");a>=(r??s.logLevel)&&n({level:be[a].toLowerCase(),message:h,args:u,type:s.name})}}}const m0=(n,e)=>e.some(t=>n instanceof t);let Gv,Wv;function g0(){return Gv||(Gv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _0(){return Wv||(Wv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const yI=new WeakMap,dm=new WeakMap,vI=new WeakMap,Qp=new WeakMap,Xm=new WeakMap;function y0(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",a),n.removeEventListener("error",u)},a=()=>{t(ss(n.result)),s()},u=()=>{r(n.error),s()};n.addEventListener("success",a),n.addEventListener("error",u)});return e.then(t=>{t instanceof IDBCursor&&yI.set(t,n)}).catch(()=>{}),Xm.set(e,n),e}function v0(n){if(dm.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",u),n.removeEventListener("abort",u)},a=()=>{t(),s()},u=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",a),n.addEventListener("error",u),n.addEventListener("abort",u)});dm.set(n,e)}let fm={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return dm.get(n);if(e==="objectStoreNames")return n.objectStoreNames||vI.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ss(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function w0(n){fm=n(fm)}function E0(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Jp(this),e,...t);return vI.set(r,e.sort?e.sort():[e]),ss(r)}:_0().includes(n)?function(...e){return n.apply(Jp(this),e),ss(yI.get(this))}:function(...e){return ss(n.apply(Jp(this),e))}}function I0(n){return typeof n=="function"?E0(n):(n instanceof IDBTransaction&&v0(n),m0(n,g0())?new Proxy(n,fm):n)}function ss(n){if(n instanceof IDBRequest)return y0(n);if(Qp.has(n))return Qp.get(n);const e=I0(n);return e!==n&&(Qp.set(n,e),Xm.set(e,n)),e}const Jp=n=>Xm.get(n);function T0(n,e,{blocked:t,upgrade:r,blocking:s,terminated:a}={}){const u=indexedDB.open(n,e),h=ss(u);return r&&u.addEventListener("upgradeneeded",f=>{r(ss(u.result),f.oldVersion,f.newVersion,ss(u.transaction),f)}),t&&u.addEventListener("blocked",f=>t(f.oldVersion,f.newVersion,f)),h.then(f=>{a&&f.addEventListener("close",()=>a()),s&&f.addEventListener("versionchange",p=>s(p.oldVersion,p.newVersion,p))}).catch(()=>{}),h}const S0=["get","getKey","getAll","getAllKeys","count"],R0=["put","add","delete","clear"],Yp=new Map;function Kv(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Yp.get(e))return Yp.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=R0.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||S0.includes(t)))return;const a=async function(u,...h){const f=this.transaction(u,s?"readwrite":"readonly");let p=f.store;return r&&(p=p.index(h.shift())),(await Promise.all([p[t](...h),s&&f.done]))[0]};return Yp.set(e,a),a}w0(n=>({...n,get:(e,t,r)=>Kv(e,t)||n.get(e,t,r),has:(e,t)=>!!Kv(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(P0(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function P0(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hd="@firebase/app",pm="0.10.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi=new Od("@firebase/app"),C0="@firebase/app-compat",k0="@firebase/analytics-compat",x0="@firebase/analytics",b0="@firebase/app-check-compat",D0="@firebase/app-check",N0="@firebase/auth",V0="@firebase/auth-compat",O0="@firebase/database",L0="@firebase/data-connect",M0="@firebase/database-compat",F0="@firebase/functions",U0="@firebase/functions-compat",B0="@firebase/installations",z0="@firebase/installations-compat",j0="@firebase/messaging",$0="@firebase/messaging-compat",q0="@firebase/performance",G0="@firebase/performance-compat",W0="@firebase/remote-config",K0="@firebase/remote-config-compat",H0="@firebase/storage",Q0="@firebase/storage-compat",J0="@firebase/firestore",Y0="@firebase/vertexai",X0="@firebase/firestore-compat",Z0="firebase",ek="11.2.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls="[DEFAULT]",tk={[hd]:"fire-core",[C0]:"fire-core-compat",[x0]:"fire-analytics",[k0]:"fire-analytics-compat",[D0]:"fire-app-check",[b0]:"fire-app-check-compat",[N0]:"fire-auth",[V0]:"fire-auth-compat",[O0]:"fire-rtdb",[L0]:"fire-data-connect",[M0]:"fire-rtdb-compat",[F0]:"fire-fn",[U0]:"fire-fn-compat",[B0]:"fire-iid",[z0]:"fire-iid-compat",[j0]:"fire-fcm",[$0]:"fire-fcm-compat",[q0]:"fire-perf",[G0]:"fire-perf-compat",[W0]:"fire-rc",[K0]:"fire-rc-compat",[H0]:"fire-gcs",[Q0]:"fire-gcs-compat",[J0]:"fire-fst",[X0]:"fire-fst-compat",[Y0]:"fire-vertex","fire-js":"fire-js",[Z0]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs=new Map,za=new Map,ja=new Map;function Nl(n,e){try{n.container.addComponent(e)}catch(t){hi.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function wI(n,e){n.container.addOrOverwriteComponent(e)}function di(n){const e=n.name;if(ja.has(e))return hi.debug(`There were multiple attempts to register component ${e}.`),!1;ja.set(e,n);for(const t of cs.values())Nl(t,n);for(const t of za.values())Nl(t,n);return!0}function Ld(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function nk(n,e,t=ls){Ld(n,e).clearInstance(t)}function EI(n){return n.options!==void 0}function qn(n){return n.settings!==void 0}function rk(){ja.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ik={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Kn=new Po("app","Firebase",ik);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let II=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new dr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Kn.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sk extends II{constructor(e,t,r,s){const a=t.automaticDataCollectionEnabled!==void 0?t.automaticDataCollectionEnabled:!1,u={name:r,automaticDataCollectionEnabled:a};if(e.apiKey!==void 0)super(e,u,s);else{const h=e;super(h.options,u,s)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:a},t),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,Dn(hd,pm,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){eg(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw Kn.create("server-app-deleted")}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yi=ek;function Zm(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ls,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Kn.create("bad-app-name",{appName:String(s)});if(t||(t=lI()),!t)throw Kn.create("no-options");const a=cs.get(s);if(a){if(Ba(t,a.options)&&Ba(r,a.config))return a;throw Kn.create("duplicate-app",{appName:s})}const u=new gI(s);for(const f of ja.values())u.addComponent(f);const h=new II(t,r,u);return cs.set(s,h),h}function ok(n,e){if(QC()&&!dI())throw Kn.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let t;EI(n)?t=n.options:t=n;const r=Object.assign(Object.assign({},e),t);r.releaseOnDeref!==void 0&&delete r.releaseOnDeref;const s=p=>[...p].reduce((y,w)=>Math.imul(31,y)+w.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw Kn.create("finalization-registry-not-supported",{});const a=""+s(JSON.stringify(r)),u=za.get(a);if(u)return u.incRefCount(e.releaseOnDeref),u;const h=new gI(a);for(const p of ja.values())h.addComponent(p);const f=new sk(t,e,a,h);return za.set(a,f),f}function TI(n=ls){const e=cs.get(n);if(!e&&n===ls&&lI())return Zm();if(!e)throw Kn.create("no-app",{appName:n});return e}function ak(){return Array.from(cs.values())}async function eg(n){let e=!1;const t=n.name;cs.has(t)?(e=!0,cs.delete(t)):za.has(t)&&n.decRefCount()<=0&&(za.delete(t),e=!0),e&&(await Promise.all(n.container.getProviders().map(r=>r.delete())),n.isDeleted=!0)}function Dn(n,e,t){var r;let s=(r=tk[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const a=s.match(/\s|\//),u=e.match(/\s|\//);if(a||u){const h=[`Unable to register library "${s}" with version "${e}":`];a&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&u&&h.push("and"),u&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),hi.warn(h.join(" "));return}di(new dr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}function SI(n,e){if(n!==null&&typeof n!="function")throw Kn.create("invalid-log-argument");p0(n,e)}function RI(n){f0(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uk="firebase-heartbeat-database",lk=1,Vl="firebase-heartbeat-store";let Xp=null;function AI(){return Xp||(Xp=T0(uk,lk,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Vl)}catch(t){console.warn(t)}}}}).catch(n=>{throw Kn.create("idb-open",{originalErrorMessage:n.message})})),Xp}async function ck(n){try{const t=(await AI()).transaction(Vl),r=await t.objectStore(Vl).get(PI(n));return await t.done,r}catch(e){if(e instanceof fr)hi.warn(e.message);else{const t=Kn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});hi.warn(t.message)}}}async function Hv(n,e){try{const r=(await AI()).transaction(Vl,"readwrite");await r.objectStore(Vl).put(e,PI(n)),await r.done}catch(t){if(t instanceof fr)hi.warn(t.message);else{const r=Kn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});hi.warn(r.message)}}}function PI(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hk=1024,dk=30*24*60*60*1e3;class fk{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new mk(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=Qv();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(u=>u.date===a)?void 0:(this._heartbeatsCache.heartbeats.push({date:a,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(u=>{const h=new Date(u.date).valueOf();return Date.now()-h<=dk}),this._storage.overwrite(this._heartbeatsCache))}catch(r){hi.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Qv(),{heartbeatsToSend:r,unsentEntries:s}=pk(this._heartbeatsCache.heartbeats),a=ld(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(t){return hi.warn(t),""}}}function Qv(){return new Date().toISOString().substring(0,10)}function pk(n,e=hk){const t=[];let r=n.slice();for(const s of n){const a=t.find(u=>u.agent===s.agent);if(a){if(a.dates.push(s.date),Jv(t)>e){a.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Jv(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class mk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return pI()?e0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await ck(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Hv(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Hv(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Jv(n){return ld(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gk(n){di(new dr("platform-logger",e=>new A0(e),"PRIVATE")),di(new dr("heartbeat",e=>new fk(e),"PRIVATE")),Dn(hd,pm,n),Dn(hd,pm,"esm2017"),Dn("fire-js","")}gk("");const _k=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:fr,SDK_VERSION:yi,_DEFAULT_ENTRY_NAME:ls,_addComponent:Nl,_addOrOverwriteComponent:wI,_apps:cs,_clearComponents:rk,_components:ja,_getProvider:Ld,_isFirebaseApp:EI,_isFirebaseServerApp:qn,_registerComponent:di,_removeServiceInstance:nk,_serverApps:za,deleteApp:eg,getApp:TI,getApps:ak,initializeApp:Zm,initializeServerApp:ok,onLog:SI,registerVersion:Dn,setLogLevel:RI},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk{constructor(e,t){this._delegate=e,this.firebase=t,Nl(e,new dr("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),eg(this._delegate)))}_getService(e,t=ls){var r;this._delegate.checkDestroyed();const s=this._delegate.container.getProvider(e);return!s.isInitialized()&&((r=s.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&s.initialize(),s.getImmediate({identifier:t})}_removeServiceInstance(e,t=ls){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Nl(this._delegate,e)}_addOrOverwriteComponent(e){wI(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vk={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},Yv=new Po("app-compat","Firebase",vk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wk(n){const e={},t={__esModule:!0,initializeApp:a,app:s,registerVersion:Dn,setLogLevel:RI,onLog:SI,apps:null,SDK_VERSION:yi,INTERNAL:{registerComponent:h,removeApp:r,useAsService:f,modularAPIs:_k}};t.default=t,Object.defineProperty(t,"apps",{get:u});function r(p){delete e[p]}function s(p){if(p=p||ls,!$v(e,p))throw Yv.create("no-app",{appName:p});return e[p]}s.App=n;function a(p,y={}){const w=Zm(p,y);if($v(e,w.name))return e[w.name];const I=new n(w,t);return e[w.name]=I,I}function u(){return Object.keys(e).map(p=>e[p])}function h(p){const y=p.name,w=y.replace("-compat","");if(di(p)&&p.type==="PUBLIC"){const I=(R=s())=>{if(typeof R[w]!="function")throw Yv.create("invalid-app-argument",{appName:y});return R[w]()};p.serviceProps!==void 0&&cd(I,p.serviceProps),t[w]=I,n.prototype[w]=function(...R){return this._getService.bind(this,y).apply(this,p.multipleInstances?R:[])}}return p.type==="PUBLIC"?t[w]:null}function f(p,y){return y==="serverAuth"?null:y}return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CI(){const n=wk(yk);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:CI,extendNamespace:e,createSubscribe:mI,ErrorFactory:Po,deepExtend:cd});function e(t){cd(n,t)}return n}const Ek=CI();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xv=new Od("@firebase/app-compat"),Ik="@firebase/app-compat",Tk="0.2.48";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sk(n){Dn(Ik,Tk,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */try{const n=uI();if(n.firebase!==void 0){Xv.warn(`
      Warning: Firebase is already defined in the global scope. Please make sure
      Firebase library is only loaded once.
    `);const e=n.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&Xv.warn(`
        Warning: You are trying to load Firebase while using Firebase Performance standalone script.
        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
        `)}}catch{}const iu=Ek;Sk();var Rk="firebase",Ak="11.2.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */iu.registerVersion(Rk,Ak,"app-compat");function tg(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function kI(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Pk=kI,xI=new Po("auth","Firebase",kI());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd=new Od("@firebase/auth");function Ck(n,...e){dd.logLevel<=be.WARN&&dd.warn(`Auth (${yi}): ${n}`,...e)}function Hh(n,...e){dd.logLevel<=be.ERROR&&dd.error(`Auth (${yi}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(n,...e){throw rg(n,...e)}function cr(n,...e){return rg(n,...e)}function ng(n,e,t){const r=Object.assign(Object.assign({},Pk()),{[e]:t});return new Po("auth","Firebase",r).create(e,{appName:n.name})}function li(n){return ng(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function kk(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Hn(n,"argument-error"),ng(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function rg(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return xI.create(n,...e)}function Se(n,e,...t){if(!n)throw rg(e,...t)}function ii(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Hh(e),new Error(e)}function fi(n,e){n||ii(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mm(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function xk(){return Zv()==="http:"||Zv()==="https:"}function Zv(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(xk()||YC()||"connection"in navigator)?navigator.onLine:!0}function Dk(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,t){this.shortDelay=e,this.longDelay=t,fi(t>e,"Short delay should be less than long delay!"),this.isMobile=KC()||XC()}get(){return bk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ig(n,e){fi(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ii("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ii("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ii("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vk=new ec(3e4,6e4);function vs(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function vi(n,e,t,r,s={}){return DI(n,s,async()=>{let a={},u={};r&&(e==="GET"?u=r:a={body:JSON.stringify(r)});const h=Zl(Object.assign({key:n.config.apiKey},u)).slice(1),f=await n._getAdditionalHeaders();f["Content-Type"]="application/json",n.languageCode&&(f["X-Firebase-Locale"]=n.languageCode);const p=Object.assign({method:e,headers:f},a);return JC()||(p.referrerPolicy="no-referrer"),bI.fetch()(NI(n,n.config.apiHost,t,h),p)})}async function DI(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Nk),e);try{const s=new Lk(n),a=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const u=await a.json();if("needConfirmation"in u)throw Vh(n,"account-exists-with-different-credential",u);if(a.ok&&!("errorMessage"in u))return u;{const h=a.ok?u.errorMessage:u.error.message,[f,p]=h.split(" : ");if(f==="FEDERATED_USER_ID_ALREADY_LINKED")throw Vh(n,"credential-already-in-use",u);if(f==="EMAIL_EXISTS")throw Vh(n,"email-already-in-use",u);if(f==="USER_DISABLED")throw Vh(n,"user-disabled",u);const y=r[f]||f.toLowerCase().replace(/[_\s]+/g,"-");if(p)throw ng(n,y,p);Hn(n,y)}}catch(s){if(s instanceof fr)throw s;Hn(n,"network-request-failed",{message:String(s)})}}async function tc(n,e,t,r,s={}){const a=await vi(n,e,t,r,s);return"mfaPendingCredential"in a&&Hn(n,"multi-factor-auth-required",{_serverResponse:a}),a}function NI(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?ig(n.config,s):`${n.config.apiScheme}://${s}`}function Ok(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Lk{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(cr(this.auth,"network-request-failed")),Vk.get())})}}function Vh(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=cr(n,e,r);return s.customData._tokenResponse=t,s}function ew(n){return n!==void 0&&n.enterprise!==void 0}class Mk{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Ok(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Fk(n,e){return vi(n,"GET","/v2/recaptchaConfig",vs(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uk(n,e){return vi(n,"POST","/v1/accounts:delete",e)}async function VI(n,e){return vi(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Bk(n,e=!1){const t=Ve(n),r=await t.getIdToken(e),s=sg(r);Se(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const a=typeof s.firebase=="object"?s.firebase:void 0,u=a==null?void 0:a.sign_in_provider;return{claims:s,token:r,authTime:Sl(Zp(s.auth_time)),issuedAtTime:Sl(Zp(s.iat)),expirationTime:Sl(Zp(s.exp)),signInProvider:u||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function Zp(n){return Number(n)*1e3}function sg(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Hh("JWT malformed, contained fewer than 3 sections"),null;try{const s=aI(t);return s?JSON.parse(s):(Hh("Failed to decode base64 JWT payload"),null)}catch(s){return Hh("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function tw(n){const e=sg(n);return Se(e,"internal-error"),Se(typeof e.exp<"u","internal-error"),Se(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $a(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof fr&&zk(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function zk({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Sl(this.lastLoginAt),this.creationTime=Sl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fd(n){var e;const t=n.auth,r=await n.getIdToken(),s=await $a(n,VI(t,{idToken:r}));Se(s==null?void 0:s.users.length,t,"internal-error");const a=s.users[0];n._notifyReloadListener(a);const u=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?OI(a.providerUserInfo):[],h=qk(n.providerData,u),f=n.isAnonymous,p=!(n.email&&a.passwordHash)&&!(h!=null&&h.length),y=f?p:!1,w={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:h,metadata:new gm(a.createdAt,a.lastLoginAt),isAnonymous:y};Object.assign(n,w)}async function $k(n){const e=Ve(n);await fd(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function qk(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function OI(n){return n.map(e=>{var{providerId:t}=e,r=tg(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gk(n,e){const t=await DI(n,{},async()=>{const r=Zl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:a}=n.config,u=NI(n,s,"/v1/token",`key=${a}`),h=await n._getAdditionalHeaders();return h["Content-Type"]="application/x-www-form-urlencoded",bI.fetch()(u,{method:"POST",headers:h,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Wk(n,e){return vi(n,"POST","/v2/accounts:revokeToken",vs(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Se(e.idToken,"internal-error"),Se(typeof e.idToken<"u","internal-error"),Se(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):tw(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Se(e.length!==0,"internal-error");const t=tw(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Se(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:a}=await Gk(e,t);this.updateTokensAndExpiration(r,s,Number(a))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:a}=t,u=new Va;return r&&(Se(typeof r=="string","internal-error",{appName:e}),u.refreshToken=r),s&&(Se(typeof s=="string","internal-error",{appName:e}),u.accessToken=s),a&&(Se(typeof a=="number","internal-error",{appName:e}),u.expirationTime=a),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Va,this.toJSON())}_performRefresh(){return ii("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(n,e){Se(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class si{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,a=tg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new jk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new gm(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await $a(this,this.stsTokenManager.getToken(this.auth,e));return Se(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Bk(this,e)}reload(){return $k(this)}_assign(e){this!==e&&(Se(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new si(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await fd(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(qn(this.auth.app))return Promise.reject(li(this.auth));const e=await this.getIdToken();return await $a(this,Uk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,a,u,h,f,p,y;const w=(r=t.displayName)!==null&&r!==void 0?r:void 0,I=(s=t.email)!==null&&s!==void 0?s:void 0,R=(a=t.phoneNumber)!==null&&a!==void 0?a:void 0,k=(u=t.photoURL)!==null&&u!==void 0?u:void 0,L=(h=t.tenantId)!==null&&h!==void 0?h:void 0,D=(f=t._redirectEventId)!==null&&f!==void 0?f:void 0,G=(p=t.createdAt)!==null&&p!==void 0?p:void 0,K=(y=t.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:Q,emailVerified:re,isAnonymous:me,providerData:de,stsTokenManager:x}=t;Se(Q&&x,e,"internal-error");const S=Va.fromJSON(this.name,x);Se(typeof Q=="string",e,"internal-error"),Ji(w,e.name),Ji(I,e.name),Se(typeof re=="boolean",e,"internal-error"),Se(typeof me=="boolean",e,"internal-error"),Ji(R,e.name),Ji(k,e.name),Ji(L,e.name),Ji(D,e.name),Ji(G,e.name),Ji(K,e.name);const P=new si({uid:Q,auth:e,email:I,emailVerified:re,displayName:w,isAnonymous:me,photoURL:k,phoneNumber:R,tenantId:L,stsTokenManager:S,createdAt:G,lastLoginAt:K});return de&&Array.isArray(de)&&(P.providerData=de.map(N=>Object.assign({},N))),D&&(P._redirectEventId=D),P}static async _fromIdTokenResponse(e,t,r=!1){const s=new Va;s.updateFromServerResponse(t);const a=new si({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await fd(a),a}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];Se(s.localId!==void 0,"internal-error");const a=s.providerUserInfo!==void 0?OI(s.providerUserInfo):[],u=!(s.email&&s.passwordHash)&&!(a!=null&&a.length),h=new Va;h.updateFromIdToken(r);const f=new si({uid:s.localId,auth:e,stsTokenManager:h,isAnonymous:u}),p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new gm(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(a!=null&&a.length)};return Object.assign(f,p),f}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nw=new Map;function oi(n){fi(n instanceof Function,"Expected a class definition");let e=nw.get(n);return e?(fi(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,nw.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}LI.type="NONE";const rw=LI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qh(n,e,t){return`firebase:${n}:${e}:${t}`}class Oa{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:a}=this.auth;this.fullUserKey=Qh(this.userKey,s.apiKey,a),this.fullPersistenceKey=Qh("persistence",s.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?si._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Oa(oi(rw),e,r);const s=(await Promise.all(t.map(async p=>{if(await p._isAvailable())return p}))).filter(p=>p);let a=s[0]||oi(rw);const u=Qh(r,e.config.apiKey,e.name);let h=null;for(const p of t)try{const y=await p._get(u);if(y){const w=si._fromJSON(e,y);p!==a&&(h=w),a=p;break}}catch{}const f=s.filter(p=>p._shouldAllowMigration);return!a._shouldAllowMigration||!f.length?new Oa(a,e,r):(a=f[0],h&&await a._set(u,h.toJSON()),await Promise.all(t.map(async p=>{if(p!==a)try{await p._remove(u)}catch{}})),new Oa(a,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iw(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(BI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(MI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(jI(e))return"Blackberry";if($I(e))return"Webos";if(FI(e))return"Safari";if((e.includes("chrome/")||UI(e))&&!e.includes("edge/"))return"Chrome";if(zI(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function MI(n=xt()){return/firefox\//i.test(n)}function FI(n=xt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function UI(n=xt()){return/crios\//i.test(n)}function BI(n=xt()){return/iemobile/i.test(n)}function zI(n=xt()){return/android/i.test(n)}function jI(n=xt()){return/blackberry/i.test(n)}function $I(n=xt()){return/webos/i.test(n)}function og(n=xt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Kk(n=xt()){var e;return og(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Hk(){return ZC()&&document.documentMode===10}function qI(n=xt()){return og(n)||zI(n)||$I(n)||jI(n)||/windows phone/i.test(n)||BI(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GI(n,e=[]){let t;switch(n){case"Browser":t=iw(xt());break;case"Worker":t=`${iw(xt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${yi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=a=>new Promise((u,h)=>{try{const f=e(a);u(f)}catch(f){h(f)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jk(n,e={}){return vi(n,"GET","/v2/passwordPolicy",vs(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yk=6;class Xk{constructor(e){var t,r,s,a;const u=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=u.minPasswordLength)!==null&&t!==void 0?t:Yk,u.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=u.maxPasswordLength),u.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=u.containsLowercaseCharacter),u.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=u.containsUppercaseCharacter),u.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=u.containsNumericCharacter),u.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=u.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,a,u,h;const f={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,f),this.validatePasswordCharacterOptions(e,f),f.isValid&&(f.isValid=(t=f.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),f.isValid&&(f.isValid=(r=f.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),f.isValid&&(f.isValid=(s=f.containsLowercaseLetter)!==null&&s!==void 0?s:!0),f.isValid&&(f.isValid=(a=f.containsUppercaseLetter)!==null&&a!==void 0?a:!0),f.isValid&&(f.isValid=(u=f.containsNumericCharacter)!==null&&u!==void 0?u:!0),f.isValid&&(f.isValid=(h=f.containsNonAlphanumericCharacter)!==null&&h!==void 0?h:!0),f}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zk{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new sw(this),this.idTokenSubscription=new sw(this),this.beforeStateQueue=new Qk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=xI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=oi(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Oa.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await VI(this,{idToken:e}),r=await si._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(qn(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(h,h))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,h=s==null?void 0:s._redirectEventId,f=await this.tryRedirectSignIn(e);(!u||u===h)&&(f!=null&&f.user)&&(s=f.user,a=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(s)}catch(u){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await fd(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Dk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(qn(this.app))return Promise.reject(li(this));const t=e?Ve(e):null;return t&&Se(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Se(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return qn(this.app)?Promise.reject(li(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return qn(this.app)?Promise.reject(li(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(oi(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Jk(this),t=new Xk(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Po("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Wk(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&oi(e)||this._popupRedirectResolver;Se(t,this,"argument-error"),this.redirectPersistenceManager=await Oa.create(this,[oi(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let u=!1;const h=this._isInitialized?Promise.resolve():this._initializationPromise;if(Se(h,this,"internal-error"),h.then(()=>{u||a(this.currentUser)}),typeof t=="function"){const f=e.addObserver(t,r,s);return()=>{u=!0,f()}}else{const f=e.addObserver(t);return()=>{u=!0,f()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=GI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Ck(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ws(n){return Ve(n)}class sw{constructor(e){this.auth=e,this.observer=null,this.addObserver=mI(t=>this.observer=t)}get next(){return Se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Md={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ex(n){Md=n}function WI(n){return Md.loadJS(n)}function tx(){return Md.recaptchaEnterpriseScript}function nx(){return Md.gapiScript}function rx(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class ix{constructor(){this.enterprise=new sx}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class sx{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const ox="recaptcha-enterprise",KI="NO_RECAPTCHA";class ax{constructor(e){this.type=ox,this.auth=ws(e)}async verify(e="verify",t=!1){async function r(a){if(!t){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(u,h)=>{Fk(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(f=>{if(f.recaptchaKey===void 0)h(new Error("recaptcha Enterprise site key undefined"));else{const p=new Mk(f);return a.tenantId==null?a._agentRecaptchaConfig=p:a._tenantRecaptchaConfigs[a.tenantId]=p,u(p.siteKey)}}).catch(f=>{h(f)})})}function s(a,u,h){const f=window.grecaptcha;ew(f)?f.enterprise.ready(()=>{f.enterprise.execute(a,{action:e}).then(p=>{u(p)}).catch(()=>{u(KI)})}):h(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new ix().execute("siteKey",{action:"verify"}):new Promise((a,u)=>{r(this.auth).then(h=>{if(!t&&ew(window.grecaptcha))s(h,a,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let f=tx();f.length!==0&&(f+=h),WI(f).then(()=>{s(h,a,u)}).catch(p=>{u(p)})}}).catch(h=>{u(h)})})}}async function ow(n,e,t,r=!1,s=!1){const a=new ax(n);let u;if(s)u=KI;else try{u=await a.verify(t)}catch{u=await a.verify(t,!0)}const h=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in h){const f=h.phoneEnrollmentInfo.phoneNumber,p=h.phoneEnrollmentInfo.recaptchaToken;Object.assign(h,{phoneEnrollmentInfo:{phoneNumber:f,recaptchaToken:p,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in h){const f=h.phoneSignInInfo.recaptchaToken;Object.assign(h,{phoneSignInInfo:{recaptchaToken:f,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return h}return r?Object.assign(h,{captchaResp:u}):Object.assign(h,{captchaResponse:u}),Object.assign(h,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(h,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),h}async function _m(n,e,t,r,s){var a;if(!((a=n._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await ow(n,e,t,t==="getOobCode");return r(n,u)}else return r(n,e).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await ow(n,e,t,t==="getOobCode");return r(n,h)}else return Promise.reject(u)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ux(n,e){const t=Ld(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),a=t.getOptions();if(Ba(a,e??{}))return s;Hn(s,"already-initialized")}return t.initialize({options:e})}function lx(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(oi);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function cx(n,e,t){const r=ws(n);Se(r._canInitEmulator,r,"emulator-config-failed"),Se(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,a=HI(e),{host:u,port:h}=hx(e),f=h===null?"":`:${h}`;r.config.emulator={url:`${a}//${u}${f}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:u,port:h,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:s})}),dx()}function HI(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function hx(n){const e=HI(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const a=s[1];return{host:a,port:aw(r.substr(a.length+1))}}else{const[a,u]=r.split(":");return{host:a,port:aw(u)}}}function aw(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function dx(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ii("not implemented")}_getIdTokenResponse(e){return ii("not implemented")}_linkToIdToken(e,t){return ii("not implemented")}_getReauthenticationResolver(e){return ii("not implemented")}}async function fx(n,e){return vi(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function px(n,e){return tc(n,"POST","/v1/accounts:signInWithPassword",vs(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mx(n,e){return tc(n,"POST","/v1/accounts:signInWithEmailLink",vs(n,e))}async function gx(n,e){return tc(n,"POST","/v1/accounts:signInWithEmailLink",vs(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol extends ag{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Ol(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Ol(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _m(e,t,"signInWithPassword",px);case"emailLink":return mx(e,{email:this._email,oobCode:this._password});default:Hn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _m(e,r,"signUpPassword",fx);case"emailLink":return gx(e,{idToken:t,email:this._email,oobCode:this._password});default:Hn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function La(n,e){return tc(n,"POST","/v1/accounts:signInWithIdp",vs(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _x="http://localhost";class po extends ag{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new po(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Hn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,a=tg(t,["providerId","signInMethod"]);if(!r||!s)return null;const u=new po(r,s);return u.idToken=a.idToken||void 0,u.accessToken=a.accessToken||void 0,u.secret=a.secret,u.nonce=a.nonce,u.pendingToken=a.pendingToken||null,u}_getIdTokenResponse(e){const t=this.buildRequest();return La(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,La(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,La(e,t)}buildRequest(){const e={requestUri:_x,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Zl(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yx(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function vx(n){const e=yl(vl(n)).link,t=e?yl(vl(e)).deep_link_id:null,r=yl(vl(n)).deep_link_id;return(r?yl(vl(r)).link:null)||r||t||e||n}class ug{constructor(e){var t,r,s,a,u,h;const f=yl(vl(e)),p=(t=f.apiKey)!==null&&t!==void 0?t:null,y=(r=f.oobCode)!==null&&r!==void 0?r:null,w=yx((s=f.mode)!==null&&s!==void 0?s:null);Se(p&&y&&w,"argument-error"),this.apiKey=p,this.operation=w,this.code=y,this.continueUrl=(a=f.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(u=f.languageCode)!==null&&u!==void 0?u:null,this.tenantId=(h=f.tenantId)!==null&&h!==void 0?h:null}static parseLink(e){const t=vx(e);try{return new ug(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(){this.providerId=su.PROVIDER_ID}static credential(e,t){return Ol._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=ug.parseLink(t);return Se(r,"argument-error"),Ol._fromEmailAndCode(e,r.code,r.tenantId)}}su.PROVIDER_ID="password";su.EMAIL_PASSWORD_SIGN_IN_METHOD="password";su.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc extends lg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es extends nc{constructor(){super("facebook.com")}static credential(e){return po._fromParams({providerId:es.PROVIDER_ID,signInMethod:es.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return es.credentialFromTaggedObject(e)}static credentialFromError(e){return es.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return es.credential(e.oauthAccessToken)}catch{return null}}}es.FACEBOOK_SIGN_IN_METHOD="facebook.com";es.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti extends nc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return po._fromParams({providerId:ti.PROVIDER_ID,signInMethod:ti.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ti.credentialFromTaggedObject(e)}static credentialFromError(e){return ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return ti.credential(t,r)}catch{return null}}}ti.GOOGLE_SIGN_IN_METHOD="google.com";ti.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni extends nc{constructor(){super("github.com")}static credential(e){return po._fromParams({providerId:ni.PROVIDER_ID,signInMethod:ni.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ni.credentialFromTaggedObject(e)}static credentialFromError(e){return ni.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ni.credential(e.oauthAccessToken)}catch{return null}}}ni.GITHUB_SIGN_IN_METHOD="github.com";ni.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts extends nc{constructor(){super("twitter.com")}static credential(e,t){return po._fromParams({providerId:ts.PROVIDER_ID,signInMethod:ts.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ts.credentialFromTaggedObject(e)}static credentialFromError(e){return ts.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return ts.credential(t,r)}catch{return null}}}ts.TWITTER_SIGN_IN_METHOD="twitter.com";ts.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wx(n,e){return tc(n,"POST","/v1/accounts:signUp",vs(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const a=await si._fromIdTokenResponse(e,r,s),u=uw(r);return new mo({user:a,providerId:u,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=uw(r);return new mo({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function uw(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd extends fr{constructor(e,t,r,s){var a;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,pd.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new pd(e,t,r,s)}}function QI(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?pd._fromErrorAndOperation(n,a,e,r):a})}async function Ex(n,e,t=!1){const r=await $a(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return mo._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ix(n,e,t=!1){const{auth:r}=n;if(qn(r.app))return Promise.reject(li(r));const s="reauthenticate";try{const a=await $a(n,QI(r,s,e,n),t);Se(a.idToken,r,"internal-error");const u=sg(a.idToken);Se(u,r,"internal-error");const{sub:h}=u;return Se(n.uid===h,r,"user-mismatch"),mo._forOperation(n,s,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&Hn(r,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JI(n,e,t=!1){if(qn(n.app))return Promise.reject(li(n));const r="signIn",s=await QI(n,r,e),a=await mo._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(a.user),a}async function Tx(n,e){return JI(ws(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YI(n){const e=ws(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Sx(n,e,t){if(qn(n.app))return Promise.reject(li(n));const r=ws(n),u=await _m(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",wx).catch(f=>{throw f.code==="auth/password-does-not-meet-requirements"&&YI(n),f}),h=await mo._fromIdTokenResponse(r,"signIn",u);return await r._updateCurrentUser(h.user),h}function Rx(n,e,t){return qn(n.app)?Promise.reject(li(n)):Tx(Ve(n),su.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&YI(n),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ax(n,e){return vi(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Px(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=Ve(n),a={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},u=await $a(r,Ax(r.auth,a));r.displayName=u.displayName||null,r.photoURL=u.photoUrl||null;const h=r.providerData.find(({providerId:f})=>f==="password");h&&(h.displayName=r.displayName,h.photoURL=r.photoURL),await r._updateTokensIfNecessary(u)}function Cx(n,e,t,r){return Ve(n).onIdTokenChanged(e,t,r)}function kx(n,e,t){return Ve(n).beforeAuthStateChanged(e,t)}const md="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(md,"1"),this.storage.removeItem(md),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xx=1e3,bx=10;class ZI extends XI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=qI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((u,h,f)=>{this.notifyListeners(u,f)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const u=this.storage.getItem(r);!t&&this.localCache[r]===u||this.notifyListeners(r,u)},a=this.storage.getItem(r);Hk()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,bx):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},xx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ZI.type="LOCAL";const Dx=ZI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT extends XI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}eT.type="SESSION";const tT=eT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nx(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Fd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:a}=t.data,u=this.handlersMap[s];if(!(u!=null&&u.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const h=Array.from(u).map(async p=>p(t.origin,a)),f=await Nx(h);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:f})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Fd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cg(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let a,u;return new Promise((h,f)=>{const p=cg("",20);s.port1.start();const y=setTimeout(()=>{f(new Error("unsupported_event"))},r);u={messageChannel:s,onMessage(w){const I=w;if(I.data.eventId===p)switch(I.data.status){case"ack":clearTimeout(y),a=setTimeout(()=>{f(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),h(I.data.response);break;default:clearTimeout(y),clearTimeout(a),f(new Error("invalid_response"));break}}},this.handlers.add(u),s.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:p,data:t},[s.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kr(){return window}function Ox(n){kr().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nT(){return typeof kr().WorkerGlobalScope<"u"&&typeof kr().importScripts=="function"}async function Lx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Mx(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Fx(){return nT()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rT="firebaseLocalStorageDb",Ux=1,gd="firebaseLocalStorage",iT="fbase_key";class rc{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ud(n,e){return n.transaction([gd],e?"readwrite":"readonly").objectStore(gd)}function Bx(){const n=indexedDB.deleteDatabase(rT);return new rc(n).toPromise()}function ym(){const n=indexedDB.open(rT,Ux);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(gd,{keyPath:iT})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(gd)?e(r):(r.close(),await Bx(),e(await ym()))})})}async function lw(n,e,t){const r=Ud(n,!0).put({[iT]:e,value:t});return new rc(r).toPromise()}async function zx(n,e){const t=Ud(n,!1).get(e),r=await new rc(t).toPromise();return r===void 0?null:r.value}function cw(n,e){const t=Ud(n,!0).delete(e);return new rc(t).toPromise()}const jx=800,$x=3;class sT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ym(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>$x)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return nT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fd._getInstance(Fx()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Lx(),!this.activeServiceWorker)return;this.sender=new Vx(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Mx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ym();return await lw(e,md,"1"),await cw(e,md),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>lw(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>zx(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>cw(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const a=Ud(s,!1).getAll();return new rc(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:a}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(a)&&(this.notifyListeners(s,a),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),jx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}sT.type="LOCAL";const qx=sT;new ec(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oT(n,e){return e?oi(e):(Se(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg extends ag{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return La(e,this._buildIdpRequest())}_linkToIdToken(e,t){return La(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return La(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Gx(n){return JI(n.auth,new hg(n),n.bypassAuthState)}function Wx(n){const{auth:e,user:t}=n;return Se(t,e,"internal-error"),Ix(t,new hg(n),n.bypassAuthState)}async function Kx(n){const{auth:e,user:t}=n;return Se(t,e,"internal-error"),Ex(t,new hg(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT{constructor(e,t,r,s,a=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:a,error:u,type:h}=e;if(u){this.reject(u);return}const f={auth:this.auth,requestUri:t,sessionId:r,tenantId:a||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(h)(f))}catch(p){this.reject(p)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Gx;case"linkViaPopup":case"linkViaRedirect":return Kx;case"reauthViaPopup":case"reauthViaRedirect":return Wx;default:Hn(this.auth,"internal-error")}}resolve(e){fi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){fi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hx=new ec(2e3,1e4);async function Qx(n,e,t){if(qn(n.app))return Promise.reject(cr(n,"operation-not-supported-in-this-environment"));const r=ws(n);kk(n,e,lg);const s=oT(r,t);return new uo(r,"signInViaPopup",e,s).executeNotNull()}class uo extends aT{constructor(e,t,r,s,a){super(e,t,s,a),this.provider=r,this.authWindow=null,this.pollId=null,uo.currentPopupAction&&uo.currentPopupAction.cancel(),uo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Se(e,this.auth,"internal-error"),e}async onExecution(){fi(this.filter.length===1,"Popup operations only handle one event");const e=cg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(cr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(cr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,uo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(cr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Hx.get())};e()}}uo.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jx="pendingRedirect",Jh=new Map;class Yx extends aT{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Jh.get(this.auth._key());if(!e){try{const r=await Xx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Jh.set(this.auth._key(),e)}return this.bypassAuthState||Jh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Xx(n,e){const t=tb(e),r=eb(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function Zx(n,e){Jh.set(n._key(),e)}function eb(n){return oi(n._redirectPersistence)}function tb(n){return Qh(Jx,n.config.apiKey,n.name)}async function nb(n,e,t=!1){if(qn(n.app))return Promise.reject(li(n));const r=ws(n),s=oT(r,e),u=await new Yx(r,s,t).execute();return u&&!t&&(delete u.user._redirectEventId,await r._persistUserIfCurrent(u.user),await r._setRedirectUser(null,e)),u}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rb=10*60*1e3;class ib{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!sb(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!uT(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(cr(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=rb&&this.cachedEventUids.clear(),this.cachedEventUids.has(hw(e))}saveEventToCache(e){this.cachedEventUids.add(hw(e)),this.lastProcessedEventTime=Date.now()}}function hw(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function uT({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function sb(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return uT(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ob(n,e={}){return vi(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ab=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ub=/^https?/;async function lb(n){if(n.config.emulator)return;const{authorizedDomains:e}=await ob(n);for(const t of e)try{if(cb(t))return}catch{}Hn(n,"unauthorized-domain")}function cb(n){const e=mm(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const u=new URL(n);return u.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&u.hostname===r}if(!ub.test(t))return!1;if(ab.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hb=new ec(3e4,6e4);function dw(){const n=kr().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function db(n){return new Promise((e,t)=>{var r,s,a;function u(){dw(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{dw(),t(cr(n,"network-request-failed"))},timeout:hb.get()})}if(!((s=(r=kr().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((a=kr().gapi)===null||a===void 0)&&a.load)u();else{const h=rx("iframefcb");return kr()[h]=()=>{gapi.load?u():t(cr(n,"network-request-failed"))},WI(`${nx()}?onload=${h}`).catch(f=>t(f))}}).catch(e=>{throw Yh=null,e})}let Yh=null;function fb(n){return Yh=Yh||db(n),Yh}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pb=new ec(5e3,15e3),mb="__/auth/iframe",gb="emulator/auth/iframe",_b={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},yb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function vb(n){const e=n.config;Se(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ig(e,gb):`https://${n.config.authDomain}/${mb}`,r={apiKey:e.apiKey,appName:n.name,v:yi},s=yb.get(n.config.apiHost);s&&(r.eid=s);const a=n._getFrameworks();return a.length&&(r.fw=a.join(",")),`${t}?${Zl(r).slice(1)}`}async function wb(n){const e=await fb(n),t=kr().gapi;return Se(t,n,"internal-error"),e.open({where:document.body,url:vb(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_b,dontclear:!0},r=>new Promise(async(s,a)=>{await r.restyle({setHideOnLeave:!1});const u=cr(n,"network-request-failed"),h=kr().setTimeout(()=>{a(u)},pb.get());function f(){kr().clearTimeout(h),s(r)}r.ping(f).then(f,()=>{a(u)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ib=500,Tb=600,Sb="_blank",Rb="http://localhost";class fw{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ab(n,e,t,r=Ib,s=Tb){const a=Math.max((window.screen.availHeight-s)/2,0).toString(),u=Math.max((window.screen.availWidth-r)/2,0).toString();let h="";const f=Object.assign(Object.assign({},Eb),{width:r.toString(),height:s.toString(),top:a,left:u}),p=xt().toLowerCase();t&&(h=UI(p)?Sb:t),MI(p)&&(e=e||Rb,f.scrollbars="yes");const y=Object.entries(f).reduce((I,[R,k])=>`${I}${R}=${k},`,"");if(Kk(p)&&h!=="_self")return Pb(e||"",h),new fw(null);const w=window.open(e||"",h,y);Se(w,n,"popup-blocked");try{w.focus()}catch{}return new fw(w)}function Pb(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cb="__/auth/handler",kb="emulator/auth/handler",xb=encodeURIComponent("fac");async function pw(n,e,t,r,s,a){Se(n.config.authDomain,n,"auth-domain-config-required"),Se(n.config.apiKey,n,"invalid-api-key");const u={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:yi,eventId:s};if(e instanceof lg){e.setDefaultLanguage(n.languageCode),u.providerId=e.providerId||"",i0(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,w]of Object.entries({}))u[y]=w}if(e instanceof nc){const y=e.getScopes().filter(w=>w!=="");y.length>0&&(u.scopes=y.join(","))}n.tenantId&&(u.tid=n.tenantId);const h=u;for(const y of Object.keys(h))h[y]===void 0&&delete h[y];const f=await n._getAppCheckToken(),p=f?`#${xb}=${encodeURIComponent(f)}`:"";return`${bb(n)}?${Zl(h).slice(1)}${p}`}function bb({config:n}){return n.emulator?ig(n,kb):`https://${n.authDomain}/${Cb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const em="webStorageSupport";class Db{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=tT,this._completeRedirectFn=nb,this._overrideRedirectResult=Zx}async _openPopup(e,t,r,s){var a;fi((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const u=await pw(e,t,r,mm(),s);return Ab(e,u,cg())}async _openRedirect(e,t,r,s){await this._originValidation(e);const a=await pw(e,t,r,mm(),s);return Ox(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:a}=this.eventManagers[t];return s?Promise.resolve(s):(fi(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await wb(e),r=new ib(e);return t.register("authEvent",s=>(Se(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(em,{type:em},s=>{var a;const u=(a=s==null?void 0:s[0])===null||a===void 0?void 0:a[em];u!==void 0&&t(!!u),Hn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=lb(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return qI()||FI()||og()}}const Nb=Db;var mw="@firebase/auth",gw="1.8.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Se(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ob(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Lb(n){di(new dr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:u,authDomain:h}=r.options;Se(u&&!u.includes(":"),"invalid-api-key",{appName:r.name});const f={apiKey:u,authDomain:h,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:GI(n)},p=new Zk(r,s,a,f);return lx(p,t),p},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),di(new dr("auth-internal",e=>{const t=ws(e.getProvider("auth").getImmediate());return(r=>new Vb(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Dn(mw,gw,Ob(n)),Dn(mw,gw,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mb=5*60,Fb=cI("authIdTokenMaxAge")||Mb;let _w=null;const Ub=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Fb)return;const s=t==null?void 0:t.token;_w!==s&&(_w=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Bb(n=TI()){const e=Ld(n,"auth");if(e.isInitialized())return e.getImmediate();const t=ux(n,{popupRedirectResolver:Nb,persistence:[qx,Dx,tT]}),r=cI("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const u=Ub(a.toString());kx(t,u,()=>u(t.currentUser)),Cx(t,h=>u(h))}}const s=GC("auth");return s&&cx(t,`http://${s}`),t}function zb(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}ex({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const a=cr("internal-error");a.customData=s,t(a)},r.type="text/javascript",r.charset="UTF-8",zb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Lb("Browser");var yw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var os,lT;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,S){function P(){}P.prototype=S.prototype,x.D=S.prototype,x.prototype=new P,x.prototype.constructor=x,x.C=function(N,O,F){for(var C=Array(arguments.length-2),gt=2;gt<arguments.length;gt++)C[gt-2]=arguments[gt];return S.prototype[O].apply(N,C)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(x,S,P){P||(P=0);var N=Array(16);if(typeof S=="string")for(var O=0;16>O;++O)N[O]=S.charCodeAt(P++)|S.charCodeAt(P++)<<8|S.charCodeAt(P++)<<16|S.charCodeAt(P++)<<24;else for(O=0;16>O;++O)N[O]=S[P++]|S[P++]<<8|S[P++]<<16|S[P++]<<24;S=x.g[0],P=x.g[1],O=x.g[2];var F=x.g[3],C=S+(F^P&(O^F))+N[0]+3614090360&4294967295;S=P+(C<<7&4294967295|C>>>25),C=F+(O^S&(P^O))+N[1]+3905402710&4294967295,F=S+(C<<12&4294967295|C>>>20),C=O+(P^F&(S^P))+N[2]+606105819&4294967295,O=F+(C<<17&4294967295|C>>>15),C=P+(S^O&(F^S))+N[3]+3250441966&4294967295,P=O+(C<<22&4294967295|C>>>10),C=S+(F^P&(O^F))+N[4]+4118548399&4294967295,S=P+(C<<7&4294967295|C>>>25),C=F+(O^S&(P^O))+N[5]+1200080426&4294967295,F=S+(C<<12&4294967295|C>>>20),C=O+(P^F&(S^P))+N[6]+2821735955&4294967295,O=F+(C<<17&4294967295|C>>>15),C=P+(S^O&(F^S))+N[7]+4249261313&4294967295,P=O+(C<<22&4294967295|C>>>10),C=S+(F^P&(O^F))+N[8]+1770035416&4294967295,S=P+(C<<7&4294967295|C>>>25),C=F+(O^S&(P^O))+N[9]+2336552879&4294967295,F=S+(C<<12&4294967295|C>>>20),C=O+(P^F&(S^P))+N[10]+4294925233&4294967295,O=F+(C<<17&4294967295|C>>>15),C=P+(S^O&(F^S))+N[11]+2304563134&4294967295,P=O+(C<<22&4294967295|C>>>10),C=S+(F^P&(O^F))+N[12]+1804603682&4294967295,S=P+(C<<7&4294967295|C>>>25),C=F+(O^S&(P^O))+N[13]+4254626195&4294967295,F=S+(C<<12&4294967295|C>>>20),C=O+(P^F&(S^P))+N[14]+2792965006&4294967295,O=F+(C<<17&4294967295|C>>>15),C=P+(S^O&(F^S))+N[15]+1236535329&4294967295,P=O+(C<<22&4294967295|C>>>10),C=S+(O^F&(P^O))+N[1]+4129170786&4294967295,S=P+(C<<5&4294967295|C>>>27),C=F+(P^O&(S^P))+N[6]+3225465664&4294967295,F=S+(C<<9&4294967295|C>>>23),C=O+(S^P&(F^S))+N[11]+643717713&4294967295,O=F+(C<<14&4294967295|C>>>18),C=P+(F^S&(O^F))+N[0]+3921069994&4294967295,P=O+(C<<20&4294967295|C>>>12),C=S+(O^F&(P^O))+N[5]+3593408605&4294967295,S=P+(C<<5&4294967295|C>>>27),C=F+(P^O&(S^P))+N[10]+38016083&4294967295,F=S+(C<<9&4294967295|C>>>23),C=O+(S^P&(F^S))+N[15]+3634488961&4294967295,O=F+(C<<14&4294967295|C>>>18),C=P+(F^S&(O^F))+N[4]+3889429448&4294967295,P=O+(C<<20&4294967295|C>>>12),C=S+(O^F&(P^O))+N[9]+568446438&4294967295,S=P+(C<<5&4294967295|C>>>27),C=F+(P^O&(S^P))+N[14]+3275163606&4294967295,F=S+(C<<9&4294967295|C>>>23),C=O+(S^P&(F^S))+N[3]+4107603335&4294967295,O=F+(C<<14&4294967295|C>>>18),C=P+(F^S&(O^F))+N[8]+1163531501&4294967295,P=O+(C<<20&4294967295|C>>>12),C=S+(O^F&(P^O))+N[13]+2850285829&4294967295,S=P+(C<<5&4294967295|C>>>27),C=F+(P^O&(S^P))+N[2]+4243563512&4294967295,F=S+(C<<9&4294967295|C>>>23),C=O+(S^P&(F^S))+N[7]+1735328473&4294967295,O=F+(C<<14&4294967295|C>>>18),C=P+(F^S&(O^F))+N[12]+2368359562&4294967295,P=O+(C<<20&4294967295|C>>>12),C=S+(P^O^F)+N[5]+4294588738&4294967295,S=P+(C<<4&4294967295|C>>>28),C=F+(S^P^O)+N[8]+2272392833&4294967295,F=S+(C<<11&4294967295|C>>>21),C=O+(F^S^P)+N[11]+1839030562&4294967295,O=F+(C<<16&4294967295|C>>>16),C=P+(O^F^S)+N[14]+4259657740&4294967295,P=O+(C<<23&4294967295|C>>>9),C=S+(P^O^F)+N[1]+2763975236&4294967295,S=P+(C<<4&4294967295|C>>>28),C=F+(S^P^O)+N[4]+1272893353&4294967295,F=S+(C<<11&4294967295|C>>>21),C=O+(F^S^P)+N[7]+4139469664&4294967295,O=F+(C<<16&4294967295|C>>>16),C=P+(O^F^S)+N[10]+3200236656&4294967295,P=O+(C<<23&4294967295|C>>>9),C=S+(P^O^F)+N[13]+681279174&4294967295,S=P+(C<<4&4294967295|C>>>28),C=F+(S^P^O)+N[0]+3936430074&4294967295,F=S+(C<<11&4294967295|C>>>21),C=O+(F^S^P)+N[3]+3572445317&4294967295,O=F+(C<<16&4294967295|C>>>16),C=P+(O^F^S)+N[6]+76029189&4294967295,P=O+(C<<23&4294967295|C>>>9),C=S+(P^O^F)+N[9]+3654602809&4294967295,S=P+(C<<4&4294967295|C>>>28),C=F+(S^P^O)+N[12]+3873151461&4294967295,F=S+(C<<11&4294967295|C>>>21),C=O+(F^S^P)+N[15]+530742520&4294967295,O=F+(C<<16&4294967295|C>>>16),C=P+(O^F^S)+N[2]+3299628645&4294967295,P=O+(C<<23&4294967295|C>>>9),C=S+(O^(P|~F))+N[0]+4096336452&4294967295,S=P+(C<<6&4294967295|C>>>26),C=F+(P^(S|~O))+N[7]+1126891415&4294967295,F=S+(C<<10&4294967295|C>>>22),C=O+(S^(F|~P))+N[14]+2878612391&4294967295,O=F+(C<<15&4294967295|C>>>17),C=P+(F^(O|~S))+N[5]+4237533241&4294967295,P=O+(C<<21&4294967295|C>>>11),C=S+(O^(P|~F))+N[12]+1700485571&4294967295,S=P+(C<<6&4294967295|C>>>26),C=F+(P^(S|~O))+N[3]+2399980690&4294967295,F=S+(C<<10&4294967295|C>>>22),C=O+(S^(F|~P))+N[10]+4293915773&4294967295,O=F+(C<<15&4294967295|C>>>17),C=P+(F^(O|~S))+N[1]+2240044497&4294967295,P=O+(C<<21&4294967295|C>>>11),C=S+(O^(P|~F))+N[8]+1873313359&4294967295,S=P+(C<<6&4294967295|C>>>26),C=F+(P^(S|~O))+N[15]+4264355552&4294967295,F=S+(C<<10&4294967295|C>>>22),C=O+(S^(F|~P))+N[6]+2734768916&4294967295,O=F+(C<<15&4294967295|C>>>17),C=P+(F^(O|~S))+N[13]+1309151649&4294967295,P=O+(C<<21&4294967295|C>>>11),C=S+(O^(P|~F))+N[4]+4149444226&4294967295,S=P+(C<<6&4294967295|C>>>26),C=F+(P^(S|~O))+N[11]+3174756917&4294967295,F=S+(C<<10&4294967295|C>>>22),C=O+(S^(F|~P))+N[2]+718787259&4294967295,O=F+(C<<15&4294967295|C>>>17),C=P+(F^(O|~S))+N[9]+3951481745&4294967295,x.g[0]=x.g[0]+S&4294967295,x.g[1]=x.g[1]+(O+(C<<21&4294967295|C>>>11))&4294967295,x.g[2]=x.g[2]+O&4294967295,x.g[3]=x.g[3]+F&4294967295}r.prototype.u=function(x,S){S===void 0&&(S=x.length);for(var P=S-this.blockSize,N=this.B,O=this.h,F=0;F<S;){if(O==0)for(;F<=P;)s(this,x,F),F+=this.blockSize;if(typeof x=="string"){for(;F<S;)if(N[O++]=x.charCodeAt(F++),O==this.blockSize){s(this,N),O=0;break}}else for(;F<S;)if(N[O++]=x[F++],O==this.blockSize){s(this,N),O=0;break}}this.h=O,this.o+=S},r.prototype.v=function(){var x=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);x[0]=128;for(var S=1;S<x.length-8;++S)x[S]=0;var P=8*this.o;for(S=x.length-8;S<x.length;++S)x[S]=P&255,P/=256;for(this.u(x),x=Array(16),S=P=0;4>S;++S)for(var N=0;32>N;N+=8)x[P++]=this.g[S]>>>N&255;return x};function a(x,S){var P=h;return Object.prototype.hasOwnProperty.call(P,x)?P[x]:P[x]=S(x)}function u(x,S){this.h=S;for(var P=[],N=!0,O=x.length-1;0<=O;O--){var F=x[O]|0;N&&F==S||(P[O]=F,N=!1)}this.g=P}var h={};function f(x){return-128<=x&&128>x?a(x,function(S){return new u([S|0],0>S?-1:0)}):new u([x|0],0>x?-1:0)}function p(x){if(isNaN(x)||!isFinite(x))return w;if(0>x)return D(p(-x));for(var S=[],P=1,N=0;x>=P;N++)S[N]=x/P|0,P*=4294967296;return new u(S,0)}function y(x,S){if(x.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(x.charAt(0)=="-")return D(y(x.substring(1),S));if(0<=x.indexOf("-"))throw Error('number format error: interior "-" character');for(var P=p(Math.pow(S,8)),N=w,O=0;O<x.length;O+=8){var F=Math.min(8,x.length-O),C=parseInt(x.substring(O,O+F),S);8>F?(F=p(Math.pow(S,F)),N=N.j(F).add(p(C))):(N=N.j(P),N=N.add(p(C)))}return N}var w=f(0),I=f(1),R=f(16777216);n=u.prototype,n.m=function(){if(L(this))return-D(this).m();for(var x=0,S=1,P=0;P<this.g.length;P++){var N=this.i(P);x+=(0<=N?N:4294967296+N)*S,S*=4294967296}return x},n.toString=function(x){if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(k(this))return"0";if(L(this))return"-"+D(this).toString(x);for(var S=p(Math.pow(x,6)),P=this,N="";;){var O=re(P,S).g;P=G(P,O.j(S));var F=((0<P.g.length?P.g[0]:P.h)>>>0).toString(x);if(P=O,k(P))return F+N;for(;6>F.length;)F="0"+F;N=F+N}},n.i=function(x){return 0>x?0:x<this.g.length?this.g[x]:this.h};function k(x){if(x.h!=0)return!1;for(var S=0;S<x.g.length;S++)if(x.g[S]!=0)return!1;return!0}function L(x){return x.h==-1}n.l=function(x){return x=G(this,x),L(x)?-1:k(x)?0:1};function D(x){for(var S=x.g.length,P=[],N=0;N<S;N++)P[N]=~x.g[N];return new u(P,~x.h).add(I)}n.abs=function(){return L(this)?D(this):this},n.add=function(x){for(var S=Math.max(this.g.length,x.g.length),P=[],N=0,O=0;O<=S;O++){var F=N+(this.i(O)&65535)+(x.i(O)&65535),C=(F>>>16)+(this.i(O)>>>16)+(x.i(O)>>>16);N=C>>>16,F&=65535,C&=65535,P[O]=C<<16|F}return new u(P,P[P.length-1]&-2147483648?-1:0)};function G(x,S){return x.add(D(S))}n.j=function(x){if(k(this)||k(x))return w;if(L(this))return L(x)?D(this).j(D(x)):D(D(this).j(x));if(L(x))return D(this.j(D(x)));if(0>this.l(R)&&0>x.l(R))return p(this.m()*x.m());for(var S=this.g.length+x.g.length,P=[],N=0;N<2*S;N++)P[N]=0;for(N=0;N<this.g.length;N++)for(var O=0;O<x.g.length;O++){var F=this.i(N)>>>16,C=this.i(N)&65535,gt=x.i(O)>>>16,Wt=x.i(O)&65535;P[2*N+2*O]+=C*Wt,K(P,2*N+2*O),P[2*N+2*O+1]+=F*Wt,K(P,2*N+2*O+1),P[2*N+2*O+1]+=C*gt,K(P,2*N+2*O+1),P[2*N+2*O+2]+=F*gt,K(P,2*N+2*O+2)}for(N=0;N<S;N++)P[N]=P[2*N+1]<<16|P[2*N];for(N=S;N<2*S;N++)P[N]=0;return new u(P,0)};function K(x,S){for(;(x[S]&65535)!=x[S];)x[S+1]+=x[S]>>>16,x[S]&=65535,S++}function Q(x,S){this.g=x,this.h=S}function re(x,S){if(k(S))throw Error("division by zero");if(k(x))return new Q(w,w);if(L(x))return S=re(D(x),S),new Q(D(S.g),D(S.h));if(L(S))return S=re(x,D(S)),new Q(D(S.g),S.h);if(30<x.g.length){if(L(x)||L(S))throw Error("slowDivide_ only works with positive integers.");for(var P=I,N=S;0>=N.l(x);)P=me(P),N=me(N);var O=de(P,1),F=de(N,1);for(N=de(N,2),P=de(P,2);!k(N);){var C=F.add(N);0>=C.l(x)&&(O=O.add(P),F=C),N=de(N,1),P=de(P,1)}return S=G(x,O.j(S)),new Q(O,S)}for(O=w;0<=x.l(S);){for(P=Math.max(1,Math.floor(x.m()/S.m())),N=Math.ceil(Math.log(P)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),F=p(P),C=F.j(S);L(C)||0<C.l(x);)P-=N,F=p(P),C=F.j(S);k(F)&&(F=I),O=O.add(F),x=G(x,C)}return new Q(O,x)}n.A=function(x){return re(this,x).h},n.and=function(x){for(var S=Math.max(this.g.length,x.g.length),P=[],N=0;N<S;N++)P[N]=this.i(N)&x.i(N);return new u(P,this.h&x.h)},n.or=function(x){for(var S=Math.max(this.g.length,x.g.length),P=[],N=0;N<S;N++)P[N]=this.i(N)|x.i(N);return new u(P,this.h|x.h)},n.xor=function(x){for(var S=Math.max(this.g.length,x.g.length),P=[],N=0;N<S;N++)P[N]=this.i(N)^x.i(N);return new u(P,this.h^x.h)};function me(x){for(var S=x.g.length+1,P=[],N=0;N<S;N++)P[N]=x.i(N)<<1|x.i(N-1)>>>31;return new u(P,x.h)}function de(x,S){var P=S>>5;S%=32;for(var N=x.g.length-P,O=[],F=0;F<N;F++)O[F]=0<S?x.i(F+P)>>>S|x.i(F+P+1)<<32-S:x.i(F+P);return new u(O,x.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,lT=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=p,u.fromString=y,os=u}).apply(typeof yw<"u"?yw:typeof self<"u"?self:typeof window<"u"?window:{});var Oh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var cT,wl,hT,Xh,vm,dT,fT,pT;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,g,v){return c==Array.prototype||c==Object.prototype||(c[g]=v.value),c};function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Oh=="object"&&Oh];for(var g=0;g<c.length;++g){var v=c[g];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var r=t(this);function s(c,g){if(g)e:{var v=r;c=c.split(".");for(var T=0;T<c.length-1;T++){var B=c[T];if(!(B in v))break e;v=v[B]}c=c[c.length-1],T=v[c],g=g(T),g!=T&&g!=null&&e(v,c,{configurable:!0,writable:!0,value:g})}}function a(c,g){c instanceof String&&(c+="");var v=0,T=!1,B={next:function(){if(!T&&v<c.length){var W=v++;return{value:g(W,c[W]),done:!1}}return T=!0,{done:!0,value:void 0}}};return B[Symbol.iterator]=function(){return B},B}s("Array.prototype.values",function(c){return c||function(){return a(this,function(g,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},h=this||self;function f(c){var g=typeof c;return g=g!="object"?g:c?Array.isArray(c)?"array":g:"null",g=="array"||g=="object"&&typeof c.length=="number"}function p(c){var g=typeof c;return g=="object"&&c!=null||g=="function"}function y(c,g,v){return c.call.apply(c.bind,arguments)}function w(c,g,v){if(!c)throw Error();if(2<arguments.length){var T=Array.prototype.slice.call(arguments,2);return function(){var B=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(B,T),c.apply(g,B)}}return function(){return c.apply(g,arguments)}}function I(c,g,v){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:w,I.apply(null,arguments)}function R(c,g){var v=Array.prototype.slice.call(arguments,1);return function(){var T=v.slice();return T.push.apply(T,arguments),c.apply(this,T)}}function k(c,g){function v(){}v.prototype=g.prototype,c.aa=g.prototype,c.prototype=new v,c.prototype.constructor=c,c.Qb=function(T,B,W){for(var ie=Array(arguments.length-2),qe=2;qe<arguments.length;qe++)ie[qe-2]=arguments[qe];return g.prototype[B].apply(T,ie)}}function L(c){const g=c.length;if(0<g){const v=Array(g);for(let T=0;T<g;T++)v[T]=c[T];return v}return[]}function D(c,g){for(let v=1;v<arguments.length;v++){const T=arguments[v];if(f(T)){const B=c.length||0,W=T.length||0;c.length=B+W;for(let ie=0;ie<W;ie++)c[B+ie]=T[ie]}else c.push(T)}}class G{constructor(g,v){this.i=g,this.j=v,this.h=0,this.g=null}get(){let g;return 0<this.h?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function K(c){return/^[\s\xa0]*$/.test(c)}function Q(){var c=h.navigator;return c&&(c=c.userAgent)?c:""}function re(c){return re[" "](c),c}re[" "]=function(){};var me=Q().indexOf("Gecko")!=-1&&!(Q().toLowerCase().indexOf("webkit")!=-1&&Q().indexOf("Edge")==-1)&&!(Q().indexOf("Trident")!=-1||Q().indexOf("MSIE")!=-1)&&Q().indexOf("Edge")==-1;function de(c,g,v){for(const T in c)g.call(v,c[T],T,c)}function x(c,g){for(const v in c)g.call(void 0,c[v],v,c)}function S(c){const g={};for(const v in c)g[v]=c[v];return g}const P="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(c,g){let v,T;for(let B=1;B<arguments.length;B++){T=arguments[B];for(v in T)c[v]=T[v];for(let W=0;W<P.length;W++)v=P[W],Object.prototype.hasOwnProperty.call(T,v)&&(c[v]=T[v])}}function O(c){var g=1;c=c.split(":");const v=[];for(;0<g&&c.length;)v.push(c.shift()),g--;return c.length&&v.push(c.join(":")),v}function F(c){h.setTimeout(()=>{throw c},0)}function C(){var c=Ee;let g=null;return c.g&&(g=c.g,c.g=c.g.next,c.g||(c.h=null),g.next=null),g}class gt{constructor(){this.h=this.g=null}add(g,v){const T=Wt.get();T.set(g,v),this.h?this.h.next=T:this.g=T,this.h=T}}var Wt=new G(()=>new Kt,c=>c.reset());class Kt{constructor(){this.next=this.g=this.h=null}set(g,v){this.h=g,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let Ke,oe=!1,Ee=new gt,he=()=>{const c=h.Promise.resolve(void 0);Ke=()=>{c.then(M)}};var M=()=>{for(var c;c=C();){try{c.h.call(c.g)}catch(v){F(v)}var g=Wt;g.j(c),100>g.h&&(g.h++,c.next=g.g,g.g=c)}oe=!1};function J(){this.s=this.s,this.C=this.C}J.prototype.s=!1,J.prototype.ma=function(){this.s||(this.s=!0,this.N())},J.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function we(c,g){this.type=c,this.g=this.target=g,this.defaultPrevented=!1}we.prototype.h=function(){this.defaultPrevented=!0};var Ce=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var c=!1,g=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const v=()=>{};h.addEventListener("test",v,g),h.removeEventListener("test",v,g)}catch{}return c}();function ke(c,g){if(we.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var v=this.type=c.type,T=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=g,g=c.relatedTarget){if(me){e:{try{re(g.nodeName);var B=!0;break e}catch{}B=!1}B||(g=null)}}else v=="mouseover"?g=c.fromElement:v=="mouseout"&&(g=c.toElement);this.relatedTarget=g,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:Le[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&ke.aa.h.call(this)}}k(ke,we);var Le={2:"touch",3:"pen",4:"mouse"};ke.prototype.h=function(){ke.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var je="closure_listenable_"+(1e6*Math.random()|0),$e=0;function Qe(c,g,v,T,B){this.listener=c,this.proxy=null,this.src=g,this.type=v,this.capture=!!T,this.ha=B,this.key=++$e,this.da=this.fa=!1}function Dt(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Mr(c){this.src=c,this.g={},this.h=0}Mr.prototype.add=function(c,g,v,T,B){var W=c.toString();c=this.g[W],c||(c=this.g[W]=[],this.h++);var ie=Ri(c,g,T,B);return-1<ie?(g=c[ie],v||(g.fa=!1)):(g=new Qe(g,this.src,W,!!T,B),g.fa=v,c.push(g)),g};function Do(c,g){var v=g.type;if(v in c.g){var T=c.g[v],B=Array.prototype.indexOf.call(T,g,void 0),W;(W=0<=B)&&Array.prototype.splice.call(T,B,1),W&&(Dt(g),c.g[v].length==0&&(delete c.g[v],c.h--))}}function Ri(c,g,v,T){for(var B=0;B<c.length;++B){var W=c[B];if(!W.da&&W.listener==g&&W.capture==!!v&&W.ha==T)return B}return-1}var As="closure_lm_"+(1e6*Math.random()|0),No={};function mu(c,g,v,T,B){if(Array.isArray(g)){for(var W=0;W<g.length;W++)mu(c,g[W],v,T,B);return null}return v=yu(v),c&&c[je]?c.K(g,v,p(T)?!!T.capture:!1,B):gu(c,g,v,!1,T,B)}function gu(c,g,v,T,B,W){if(!g)throw Error("Invalid event type");var ie=p(B)?!!B.capture:!!B,qe=Oo(c);if(qe||(c[As]=qe=new Mr(c)),v=qe.add(g,v,T,ie,W),v.proxy)return v;if(T=_c(),v.proxy=T,T.src=c,T.listener=v,c.addEventListener)Ce||(B=ie),B===void 0&&(B=!1),c.addEventListener(g.toString(),T,B);else if(c.attachEvent)c.attachEvent(Ur(g.toString()),T);else if(c.addListener&&c.removeListener)c.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return v}function _c(){function c(v){return g.call(c.src,c.listener,v)}const g=_u;return c}function Vo(c,g,v,T,B){if(Array.isArray(g))for(var W=0;W<g.length;W++)Vo(c,g[W],v,T,B);else T=p(T)?!!T.capture:!!T,v=yu(v),c&&c[je]?(c=c.i,g=String(g).toString(),g in c.g&&(W=c.g[g],v=Ri(W,v,T,B),-1<v&&(Dt(W[v]),Array.prototype.splice.call(W,v,1),W.length==0&&(delete c.g[g],c.h--)))):c&&(c=Oo(c))&&(g=c.g[g.toString()],c=-1,g&&(c=Ri(g,v,T,B)),(v=-1<c?g[c]:null)&&Fr(v))}function Fr(c){if(typeof c!="number"&&c&&!c.da){var g=c.src;if(g&&g[je])Do(g.i,c);else{var v=c.type,T=c.proxy;g.removeEventListener?g.removeEventListener(v,T,c.capture):g.detachEvent?g.detachEvent(Ur(v),T):g.addListener&&g.removeListener&&g.removeListener(T),(v=Oo(g))?(Do(v,c),v.h==0&&(v.src=null,g[As]=null)):Dt(c)}}}function Ur(c){return c in No?No[c]:No[c]="on"+c}function _u(c,g){if(c.da)c=!0;else{g=new ke(g,this);var v=c.listener,T=c.ha||c.src;c.fa&&Fr(c),c=v.call(T,g)}return c}function Oo(c){return c=c[As],c instanceof Mr?c:null}var Lo="__closure_events_fn_"+(1e9*Math.random()>>>0);function yu(c){return typeof c=="function"?c:(c[Lo]||(c[Lo]=function(g){return c.handleEvent(g)}),c[Lo])}function Rt(){J.call(this),this.i=new Mr(this),this.M=this,this.F=null}k(Rt,J),Rt.prototype[je]=!0,Rt.prototype.removeEventListener=function(c,g,v,T){Vo(this,c,g,v,T)};function At(c,g){var v,T=c.F;if(T)for(v=[];T;T=T.F)v.push(T);if(c=c.M,T=g.type||g,typeof g=="string")g=new we(g,c);else if(g instanceof we)g.target=g.target||c;else{var B=g;g=new we(T,c),N(g,B)}if(B=!0,v)for(var W=v.length-1;0<=W;W--){var ie=g.g=v[W];B=Br(ie,T,!0,g)&&B}if(ie=g.g=c,B=Br(ie,T,!0,g)&&B,B=Br(ie,T,!1,g)&&B,v)for(W=0;W<v.length;W++)ie=g.g=v[W],B=Br(ie,T,!1,g)&&B}Rt.prototype.N=function(){if(Rt.aa.N.call(this),this.i){var c=this.i,g;for(g in c.g){for(var v=c.g[g],T=0;T<v.length;T++)Dt(v[T]);delete c.g[g],c.h--}}this.F=null},Rt.prototype.K=function(c,g,v,T){return this.i.add(String(c),g,!1,v,T)},Rt.prototype.L=function(c,g,v,T){return this.i.add(String(c),g,!0,v,T)};function Br(c,g,v,T){if(g=c.i.g[String(g)],!g)return!0;g=g.concat();for(var B=!0,W=0;W<g.length;++W){var ie=g[W];if(ie&&!ie.da&&ie.capture==v){var qe=ie.listener,Pt=ie.ha||ie.src;ie.fa&&Do(c.i,ie),B=qe.call(Pt,T)!==!1&&B}}return B&&!T.defaultPrevented}function vu(c,g,v){if(typeof c=="function")v&&(c=I(c,v));else if(c&&typeof c.handleEvent=="function")c=I(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(g)?-1:h.setTimeout(c,g||0)}function Ai(c){c.g=vu(()=>{c.g=null,c.i&&(c.i=!1,Ai(c))},c.l);const g=c.h;c.h=null,c.m.apply(null,g)}class Ps extends J{constructor(g,v){super(),this.m=g,this.l=v,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:Ai(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Cs(c){J.call(this),this.h=c,this.g={}}k(Cs,J);var wu=[];function Eu(c){de(c.g,function(g,v){this.g.hasOwnProperty(v)&&Fr(g)},c),c.g={}}Cs.prototype.N=function(){Cs.aa.N.call(this),Eu(this)},Cs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Iu=h.JSON.stringify,Tu=h.JSON.parse,Su=class{stringify(c){return h.JSON.stringify(c,void 0)}parse(c){return h.JSON.parse(c,void 0)}};function ks(){}ks.prototype.h=null;function Mo(c){return c.h||(c.h=c.i())}function Fo(){}var Vn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function pr(){we.call(this,"d")}k(pr,we);function Uo(){we.call(this,"c")}k(Uo,we);var mr={},Ru=null;function xs(){return Ru=Ru||new Rt}mr.La="serverreachability";function Au(c){we.call(this,mr.La,c)}k(Au,we);function zr(c){const g=xs();At(g,new Au(g))}mr.STAT_EVENT="statevent";function Pu(c,g){we.call(this,mr.STAT_EVENT,c),this.stat=g}k(Pu,we);function _t(c){const g=xs();At(g,new Pu(g,c))}mr.Ma="timingevent";function Bo(c,g){we.call(this,mr.Ma,c),this.size=g}k(Bo,we);function Qn(c,g){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){c()},g)}function bs(){this.g=!0}bs.prototype.xa=function(){this.g=!1};function Ds(c,g,v,T,B,W){c.info(function(){if(c.g)if(W)for(var ie="",qe=W.split("&"),Pt=0;Pt<qe.length;Pt++){var Me=qe[Pt].split("=");if(1<Me.length){var Nt=Me[0];Me=Me[1];var It=Nt.split("_");ie=2<=It.length&&It[1]=="type"?ie+(Nt+"="+Me+"&"):ie+(Nt+"=redacted&")}}else ie=null;else ie=W;return"XMLHTTP REQ ("+T+") [attempt "+B+"]: "+g+`
`+v+`
`+ie})}function zo(c,g,v,T,B,W,ie){c.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+B+"]: "+g+`
`+v+`
`+W+" "+ie})}function Jn(c,g,v,T){c.info(function(){return"XMLHTTP TEXT ("+g+"): "+mf(c,v)+(T?" "+T:"")})}function Cu(c,g){c.info(function(){return"TIMEOUT: "+g})}bs.prototype.info=function(){};function mf(c,g){if(!c.g)return g;if(!g)return null;try{var v=JSON.parse(g);if(v){for(c=0;c<v.length;c++)if(Array.isArray(v[c])){var T=v[c];if(!(2>T.length)){var B=T[1];if(Array.isArray(B)&&!(1>B.length)){var W=B[0];if(W!="noop"&&W!="stop"&&W!="close")for(var ie=1;ie<B.length;ie++)B[ie]=""}}}}return Iu(v)}catch{return g}}var jo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},yc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Yn;function Ns(){}k(Ns,ks),Ns.prototype.g=function(){return new XMLHttpRequest},Ns.prototype.i=function(){return{}},Yn=new Ns;function Xn(c,g,v,T){this.j=c,this.i=g,this.l=v,this.R=T||1,this.U=new Cs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new vc}function vc(){this.i=null,this.g="",this.h=!1}var ku={},$o={};function qo(c,g,v){c.L=1,c.v=bi(An(g)),c.m=v,c.P=!0,xu(c,null)}function xu(c,g){c.F=Date.now(),Je(c),c.A=An(c.v);var v=c.A,T=c.R;Array.isArray(T)||(T=[String(T)]),Ni(v.i,"t",T),c.C=0,v=c.j.J,c.h=new vc,c.g=Mc(c.j,v?g:null,!c.m),0<c.O&&(c.M=new Ps(I(c.Y,c,c.g),c.O)),g=c.U,v=c.g,T=c.ca;var B="readystatechange";Array.isArray(B)||(B&&(wu[0]=B.toString()),B=wu);for(var W=0;W<B.length;W++){var ie=mu(v,B[W],T||g.handleEvent,!1,g.h||g);if(!ie)break;g.g[ie.key]=ie}g=c.H?S(c.H):{},c.m?(c.u||(c.u="POST"),g["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,g)):(c.u="GET",c.g.ea(c.A,c.u,null,g)),zr(),Ds(c.i,c.u,c.A,c.l,c.R,c.m)}Xn.prototype.ca=function(c){c=c.target;const g=this.M;g&&mn(c)==3?g.j():this.Y(c)},Xn.prototype.Y=function(c){try{if(c==this.g)e:{const It=mn(this.g);var g=this.g.Ba();const Mn=this.g.Z();if(!(3>It)&&(It!=3||this.g&&(this.h.h||this.g.oa()||Lu(this.g)))){this.J||It!=4||g==7||(g==8||0>=Mn?zr(3):zr(2)),Vs(this);var v=this.g.Z();this.X=v;t:if(wc(this)){var T=Lu(this.g);c="";var B=T.length,W=mn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){On(this),Pi(this);var ie="";break t}this.h.i=new h.TextDecoder}for(g=0;g<B;g++)this.h.h=!0,c+=this.h.i.decode(T[g],{stream:!(W&&g==B-1)});T.length=0,this.h.g+=c,this.C=0,ie=this.h.g}else ie=this.g.oa();if(this.o=v==200,zo(this.i,this.u,this.A,this.l,this.R,It,v),this.o){if(this.T&&!this.K){t:{if(this.g){var qe,Pt=this.g;if((qe=Pt.g?Pt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!K(qe)){var Me=qe;break t}}Me=null}if(v=Me)Jn(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,bu(this,v);else{this.o=!1,this.s=3,_t(12),On(this),Pi(this);break e}}if(this.P){v=!0;let Cn;for(;!this.J&&this.C<ie.length;)if(Cn=gf(this,ie),Cn==$o){It==4&&(this.s=4,_t(14),v=!1),Jn(this.i,this.l,null,"[Incomplete Response]");break}else if(Cn==ku){this.s=4,_t(15),Jn(this.i,this.l,ie,"[Invalid Chunk]"),v=!1;break}else Jn(this.i,this.l,Cn,null),bu(this,Cn);if(wc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),It!=4||ie.length!=0||this.h.h||(this.s=1,_t(16),v=!1),this.o=this.o&&v,!v)Jn(this.i,this.l,ie,"[Invalid Chunked Response]"),On(this),Pi(this);else if(0<ie.length&&!this.W){this.W=!0;var Nt=this.j;Nt.g==this&&Nt.ba&&!Nt.M&&(Nt.j.info("Great, no buffering proxy detected. Bytes received: "+ie.length),Fu(Nt),Nt.M=!0,_t(11))}}else Jn(this.i,this.l,ie,null),bu(this,ie);It==4&&On(this),this.o&&!this.J&&(It==4?ta(this.j,this):(this.o=!1,Je(this)))}else Jo(this.g),v==400&&0<ie.indexOf("Unknown SID")?(this.s=3,_t(12)):(this.s=0,_t(13)),On(this),Pi(this)}}}catch{}finally{}};function wc(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function gf(c,g){var v=c.C,T=g.indexOf(`
`,v);return T==-1?$o:(v=Number(g.substring(v,T)),isNaN(v)?ku:(T+=1,T+v>g.length?$o:(g=g.slice(T,T+v),c.C=T+v,g)))}Xn.prototype.cancel=function(){this.J=!0,On(this)};function Je(c){c.S=Date.now()+c.I,Ec(c,c.I)}function Ec(c,g){if(c.B!=null)throw Error("WatchDog timer not null");c.B=Qn(I(c.ba,c),g)}function Vs(c){c.B&&(h.clearTimeout(c.B),c.B=null)}Xn.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(Cu(this.i,this.A),this.L!=2&&(zr(),_t(17)),On(this),this.s=2,Pi(this)):Ec(this,this.S-c)};function Pi(c){c.j.G==0||c.J||ta(c.j,c)}function On(c){Vs(c);var g=c.M;g&&typeof g.ma=="function"&&g.ma(),c.M=null,Eu(c.U),c.g&&(g=c.g,c.g=null,g.abort(),g.ma())}function bu(c,g){try{var v=c.j;if(v.G!=0&&(v.g==c||rn(v.h,c))){if(!c.K&&rn(v.h,c)&&v.G==3){try{var T=v.Da.g.parse(g)}catch{T=null}if(Array.isArray(T)&&T.length==3){var B=T;if(B[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<c.F)ea(v),rr(v);else break e;Zo(v),_t(18)}}else v.za=B[1],0<v.za-v.T&&37500>B[2]&&v.F&&v.v==0&&!v.C&&(v.C=Qn(I(v.Za,v),6e3));if(1>=Tc(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else Wr(v,11)}else if((c.K||v.g==c)&&ea(v),!K(g))for(B=v.Da.g.parse(g),g=0;g<B.length;g++){let Me=B[g];if(v.T=Me[0],Me=Me[1],v.G==2)if(Me[0]=="c"){v.K=Me[1],v.ia=Me[2];const Nt=Me[3];Nt!=null&&(v.la=Nt,v.j.info("VER="+v.la));const It=Me[4];It!=null&&(v.Aa=It,v.j.info("SVER="+v.Aa));const Mn=Me[5];Mn!=null&&typeof Mn=="number"&&0<Mn&&(T=1.5*Mn,v.L=T,v.j.info("backChannelRequestTimeoutMs_="+T)),T=v;const Cn=c.g;if(Cn){const zs=Cn.g?Cn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(zs){var W=T.h;W.g||zs.indexOf("spdy")==-1&&zs.indexOf("quic")==-1&&zs.indexOf("h2")==-1||(W.j=W.l,W.g=new Set,W.h&&(Du(W,W.h),W.h=null))}if(T.D){const ra=Cn.g?Cn.g.getResponseHeader("X-HTTP-Session-Id"):null;ra&&(T.ya=ra,He(T.I,T.D,ra))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-c.F,v.j.info("Handshake RTT: "+v.R+"ms")),T=v;var ie=c;if(T.qa=Lc(T,T.J?T.ia:null,T.W),ie.K){Sc(T.h,ie);var qe=ie,Pt=T.L;Pt&&(qe.I=Pt),qe.B&&(Vs(qe),Je(qe)),T.g=ie}else Bs(T);0<v.i.length&&vr(v)}else Me[0]!="stop"&&Me[0]!="close"||Wr(v,7);else v.G==3&&(Me[0]=="stop"||Me[0]=="close"?Me[0]=="stop"?Wr(v,7):Bt(v):Me[0]!="noop"&&v.l&&v.l.ta(Me),v.v=0)}}zr(4)}catch{}}var Ic=class{constructor(c,g){this.g=c,this.map=g}};function Os(c){this.l=c||10,h.PerformanceNavigationTiming?(c=h.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Rn(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Tc(c){return c.h?1:c.g?c.g.size:0}function rn(c,g){return c.h?c.h==g:c.g?c.g.has(g):!1}function Du(c,g){c.g?c.g.add(g):c.h=g}function Sc(c,g){c.h&&c.h==g?c.h=null:c.g&&c.g.has(g)&&c.g.delete(g)}Os.prototype.cancel=function(){if(this.i=Rc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Rc(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let g=c.i;for(const v of c.g.values())g=g.concat(v.D);return g}return L(c.i)}function Go(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(f(c)){for(var g=[],v=c.length,T=0;T<v;T++)g.push(c[T]);return g}g=[],v=0;for(T in c)g[v++]=c[T];return g}function Wo(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(f(c)||typeof c=="string"){var g=[];c=c.length;for(var v=0;v<c;v++)g.push(v);return g}g=[],v=0;for(const T in c)g[v++]=T;return g}}}function Ci(c,g){if(c.forEach&&typeof c.forEach=="function")c.forEach(g,void 0);else if(f(c)||typeof c=="string")Array.prototype.forEach.call(c,g,void 0);else for(var v=Wo(c),T=Go(c),B=T.length,W=0;W<B;W++)g.call(void 0,T[W],v&&v[W],c)}var Ls=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _f(c,g){if(c){c=c.split("&");for(var v=0;v<c.length;v++){var T=c[v].indexOf("="),B=null;if(0<=T){var W=c[v].substring(0,T);B=c[v].substring(T+1)}else W=c[v];g(W,B?decodeURIComponent(B.replace(/\+/g," ")):"")}}}function jr(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof jr){this.h=c.h,Ms(this,c.j),this.o=c.o,this.g=c.g,ki(this,c.s),this.l=c.l;var g=c.i,v=new gr;v.i=g.i,g.g&&(v.g=new Map(g.g),v.h=g.h),xi(this,v),this.m=c.m}else c&&(g=String(c).match(Ls))?(this.h=!1,Ms(this,g[1]||"",!0),this.o=Oe(g[2]||""),this.g=Oe(g[3]||"",!0),ki(this,g[4]),this.l=Oe(g[5]||"",!0),xi(this,g[6]||"",!0),this.m=Oe(g[7]||"")):(this.h=!1,this.i=new gr(null,this.h))}jr.prototype.toString=function(){var c=[],g=this.j;g&&c.push(Di(g,Ko,!0),":");var v=this.g;return(v||g=="file")&&(c.push("//"),(g=this.o)&&c.push(Di(g,Ko,!0),"@"),c.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&c.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&c.push("/"),c.push(Di(v,v.charAt(0)=="/"?Cc:Pc,!0))),(v=this.i.toString())&&c.push("?",v),(v=this.m)&&c.push("#",Di(v,Nu)),c.join("")};function An(c){return new jr(c)}function Ms(c,g,v){c.j=v?Oe(g,!0):g,c.j&&(c.j=c.j.replace(/:$/,""))}function ki(c,g){if(g){if(g=Number(g),isNaN(g)||0>g)throw Error("Bad port number "+g);c.s=g}else c.s=null}function xi(c,g,v){g instanceof gr?(c.i=g,_r(c.i,c.h)):(v||(g=Di(g,kc)),c.i=new gr(g,c.h))}function He(c,g,v){c.i.set(g,v)}function bi(c){return He(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Oe(c,g){return c?g?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Di(c,g,v){return typeof c=="string"?(c=encodeURI(c).replace(g,Ac),v&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function Ac(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Ko=/[#\/\?@]/g,Pc=/[#\?:]/g,Cc=/[#\?]/g,kc=/[#\?@]/g,Nu=/#/g;function gr(c,g){this.h=this.g=null,this.i=c||null,this.j=!!g}function Ut(c){c.g||(c.g=new Map,c.h=0,c.i&&_f(c.i,function(g,v){c.add(decodeURIComponent(g.replace(/\+/g," ")),v)}))}n=gr.prototype,n.add=function(c,g){Ut(this),this.i=null,c=Ln(this,c);var v=this.g.get(c);return v||this.g.set(c,v=[]),v.push(g),this.h+=1,this};function Zn(c,g){Ut(c),g=Ln(c,g),c.g.has(g)&&(c.i=null,c.h-=c.g.get(g).length,c.g.delete(g))}function er(c,g){return Ut(c),g=Ln(c,g),c.g.has(g)}n.forEach=function(c,g){Ut(this),this.g.forEach(function(v,T){v.forEach(function(B){c.call(g,B,T,this)},this)},this)},n.na=function(){Ut(this);const c=Array.from(this.g.values()),g=Array.from(this.g.keys()),v=[];for(let T=0;T<g.length;T++){const B=c[T];for(let W=0;W<B.length;W++)v.push(g[T])}return v},n.V=function(c){Ut(this);let g=[];if(typeof c=="string")er(this,c)&&(g=g.concat(this.g.get(Ln(this,c))));else{c=Array.from(this.g.values());for(let v=0;v<c.length;v++)g=g.concat(c[v])}return g},n.set=function(c,g){return Ut(this),this.i=null,c=Ln(this,c),er(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[g]),this.h+=1,this},n.get=function(c,g){return c?(c=this.V(c),0<c.length?String(c[0]):g):g};function Ni(c,g,v){Zn(c,g),0<v.length&&(c.i=null,c.g.set(Ln(c,g),L(v)),c.h+=v.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],g=Array.from(this.g.keys());for(var v=0;v<g.length;v++){var T=g[v];const W=encodeURIComponent(String(T)),ie=this.V(T);for(T=0;T<ie.length;T++){var B=W;ie[T]!==""&&(B+="="+encodeURIComponent(String(ie[T]))),c.push(B)}}return this.i=c.join("&")};function Ln(c,g){return g=String(g),c.j&&(g=g.toLowerCase()),g}function _r(c,g){g&&!c.j&&(Ut(c),c.i=null,c.g.forEach(function(v,T){var B=T.toLowerCase();T!=B&&(Zn(this,T),Ni(this,B,v))},c)),c.j=g}function yf(c,g){const v=new bs;if(h.Image){const T=new Image;T.onload=R(pn,v,"TestLoadImage: loaded",!0,g,T),T.onerror=R(pn,v,"TestLoadImage: error",!1,g,T),T.onabort=R(pn,v,"TestLoadImage: abort",!1,g,T),T.ontimeout=R(pn,v,"TestLoadImage: timeout",!1,g,T),h.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=c}else g(!1)}function xc(c,g){const v=new bs,T=new AbortController,B=setTimeout(()=>{T.abort(),pn(v,"TestPingServer: timeout",!1,g)},1e4);fetch(c,{signal:T.signal}).then(W=>{clearTimeout(B),W.ok?pn(v,"TestPingServer: ok",!0,g):pn(v,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(B),pn(v,"TestPingServer: error",!1,g)})}function pn(c,g,v,T,B){try{B&&(B.onload=null,B.onerror=null,B.onabort=null,B.ontimeout=null),T(v)}catch{}}function vf(){this.g=new Su}function bc(c,g,v){const T=v||"";try{Ci(c,function(B,W){let ie=B;p(B)&&(ie=Iu(B)),g.push(T+W+"="+encodeURIComponent(ie))})}catch(B){throw g.push(T+"type="+encodeURIComponent("_badmap")),B}}function $r(c){this.l=c.Ub||null,this.j=c.eb||!1}k($r,ks),$r.prototype.g=function(){return new Fs(this.l,this.j)},$r.prototype.i=function(c){return function(){return c}}({});function Fs(c,g){Rt.call(this),this.D=c,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Fs,Rt),n=Fs.prototype,n.open=function(c,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=g,this.readyState=1,nr(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const g={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(g.body=c),(this.D||h).fetch(new Request(this.A,g)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,tr(this)),this.readyState=0},n.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,nr(this)),this.g&&(this.readyState=3,nr(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Dc(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Dc(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}n.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var g=c.value?c.value:new Uint8Array(0);(g=this.v.decode(g,{stream:!c.done}))&&(this.response=this.responseText+=g)}c.done?tr(this):nr(this),this.readyState==3&&Dc(this)}},n.Ra=function(c){this.g&&(this.response=this.responseText=c,tr(this))},n.Qa=function(c){this.g&&(this.response=c,tr(this))},n.ga=function(){this.g&&tr(this)};function tr(c){c.readyState=4,c.l=null,c.j=null,c.v=null,nr(c)}n.setRequestHeader=function(c,g){this.u.append(c,g)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],g=this.h.entries();for(var v=g.next();!v.done;)v=v.value,c.push(v[0]+": "+v[1]),v=g.next();return c.join(`\r
`)};function nr(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Fs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function qr(c){let g="";return de(c,function(v,T){g+=T,g+=":",g+=v,g+=`\r
`}),g}function Vi(c,g,v){e:{for(T in v){var T=!1;break e}T=!0}T||(v=qr(v),typeof c=="string"?v!=null&&encodeURIComponent(String(v)):He(c,g,v))}function rt(c){Rt.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(rt,Rt);var wf=/^https?$/i,Vu=["POST","PUT"];n=rt.prototype,n.Ha=function(c){this.J=c},n.ea=function(c,g,v,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);g=g?g.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Yn.g(),this.v=this.o?Mo(this.o):Mo(Yn),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(g,String(c),!0),this.B=!1}catch(W){Us(this,W);return}if(c=v||"",v=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var B in T)v.set(B,T[B]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const W of T.keys())v.set(W,T.get(W));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(v.keys()).find(W=>W.toLowerCase()=="content-type"),B=h.FormData&&c instanceof h.FormData,!(0<=Array.prototype.indexOf.call(Vu,g,void 0))||T||B||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[W,ie]of v)this.g.setRequestHeader(W,ie);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Qo(this),this.u=!0,this.g.send(c),this.u=!1}catch(W){Us(this,W)}};function Us(c,g){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=g,c.m=5,Ho(c),Pn(c)}function Ho(c){c.A||(c.A=!0,At(c,"complete"),At(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,At(this,"complete"),At(this,"abort"),Pn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Pn(this,!0)),rt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ou(this):this.bb())},n.bb=function(){Ou(this)};function Ou(c){if(c.h&&typeof u<"u"&&(!c.v[1]||mn(c)!=4||c.Z()!=2)){if(c.u&&mn(c)==4)vu(c.Ea,0,c);else if(At(c,"readystatechange"),mn(c)==4){c.h=!1;try{const ie=c.Z();e:switch(ie){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break e;default:g=!1}var v;if(!(v=g)){var T;if(T=ie===0){var B=String(c.D).match(Ls)[1]||null;!B&&h.self&&h.self.location&&(B=h.self.location.protocol.slice(0,-1)),T=!wf.test(B?B.toLowerCase():"")}v=T}if(v)At(c,"complete"),At(c,"success");else{c.m=6;try{var W=2<mn(c)?c.g.statusText:""}catch{W=""}c.l=W+" ["+c.Z()+"]",Ho(c)}}finally{Pn(c)}}}}function Pn(c,g){if(c.g){Qo(c);const v=c.g,T=c.v[0]?()=>{}:null;c.g=null,c.v=null,g||At(c,"ready");try{v.onreadystatechange=T}catch{}}}function Qo(c){c.I&&(h.clearTimeout(c.I),c.I=null)}n.isActive=function(){return!!this.g};function mn(c){return c.g?c.g.readyState:0}n.Z=function(){try{return 2<mn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(c){if(this.g){var g=this.g.responseText;return c&&g.indexOf(c)==0&&(g=g.substring(c.length)),Tu(g)}};function Lu(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Jo(c){const g={};c=(c.g&&2<=mn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<c.length;T++){if(K(c[T]))continue;var v=O(c[T]);const B=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const W=g[B]||[];g[B]=W,W.push(v)}x(g,function(T){return T.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function yr(c,g,v){return v&&v.internalChannelParams&&v.internalChannelParams[c]||g}function Mu(c){this.Aa=0,this.i=[],this.j=new bs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=yr("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=yr("baseRetryDelayMs",5e3,c),this.cb=yr("retryDelaySeedMs",1e4,c),this.Wa=yr("forwardChannelMaxRetries",2,c),this.wa=yr("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Os(c&&c.concurrentRequestLimit),this.Da=new vf,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Mu.prototype,n.la=8,n.G=1,n.connect=function(c,g,v,T){_t(0),this.W=c,this.H=g||{},v&&T!==void 0&&(this.H.OSID=v,this.H.OAID=T),this.F=this.X,this.I=Lc(this,null,this.W),vr(this)};function Bt(c){if(Yo(c),c.G==3){var g=c.U++,v=An(c.I);if(He(v,"SID",c.K),He(v,"RID",g),He(v,"TYPE","terminate"),Gr(c,v),g=new Xn(c,c.j,g),g.L=2,g.v=bi(An(v)),v=!1,h.navigator&&h.navigator.sendBeacon)try{v=h.navigator.sendBeacon(g.v.toString(),"")}catch{}!v&&h.Image&&(new Image().src=g.v,v=!0),v||(g.g=Mc(g.j,null),g.g.ea(g.v)),g.F=Date.now(),Je(g)}Oc(c)}function rr(c){c.g&&(Fu(c),c.g.cancel(),c.g=null)}function Yo(c){rr(c),c.u&&(h.clearTimeout(c.u),c.u=null),ea(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&h.clearTimeout(c.s),c.s=null)}function vr(c){if(!Rn(c.h)&&!c.s){c.s=!0;var g=c.Ga;Ke||he(),oe||(Ke(),oe=!0),Ee.add(g,c),c.B=0}}function Ef(c,g){return Tc(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=g.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=Qn(I(c.Ga,c,g),Vc(c,c.B)),c.B++,!0)}n.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const B=new Xn(this,this.j,c);let W=this.o;if(this.S&&(W?(W=S(W),N(W,this.S)):W=this.S),this.m!==null||this.O||(B.H=W,W=null),this.P)e:{for(var g=0,v=0;v<this.i.length;v++){t:{var T=this.i[v];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break t}T=void 0}if(T===void 0)break;if(g+=T,4096<g){g=v;break e}if(g===4096||v===this.i.length-1){g=v+1;break e}}g=1e3}else g=1e3;g=Oi(this,B,g),v=An(this.I),He(v,"RID",c),He(v,"CVER",22),this.D&&He(v,"X-HTTP-Session-Id",this.D),Gr(this,v),W&&(this.O?g="headers="+encodeURIComponent(String(qr(W)))+"&"+g:this.m&&Vi(v,this.m,W)),Du(this.h,B),this.Ua&&He(v,"TYPE","init"),this.P?(He(v,"$req",g),He(v,"SID","null"),B.T=!0,qo(B,v,null)):qo(B,v,g),this.G=2}}else this.G==3&&(c?Xo(this,c):this.i.length==0||Rn(this.h)||Xo(this))};function Xo(c,g){var v;g?v=g.l:v=c.U++;const T=An(c.I);He(T,"SID",c.K),He(T,"RID",v),He(T,"AID",c.T),Gr(c,T),c.m&&c.o&&Vi(T,c.m,c.o),v=new Xn(c,c.j,v,c.B+1),c.m===null&&(v.H=c.o),g&&(c.i=g.D.concat(c.i)),g=Oi(c,v,1e3),v.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),Du(c.h,v),qo(v,T,g)}function Gr(c,g){c.H&&de(c.H,function(v,T){He(g,T,v)}),c.l&&Ci({},function(v,T){He(g,T,v)})}function Oi(c,g,v){v=Math.min(c.i.length,v);var T=c.l?I(c.l.Na,c.l,c):null;e:{var B=c.i;let W=-1;for(;;){const ie=["count="+v];W==-1?0<v?(W=B[0].g,ie.push("ofs="+W)):W=0:ie.push("ofs="+W);let qe=!0;for(let Pt=0;Pt<v;Pt++){let Me=B[Pt].g;const Nt=B[Pt].map;if(Me-=W,0>Me)W=Math.max(0,B[Pt].g-100),qe=!1;else try{bc(Nt,ie,"req"+Me+"_")}catch{T&&T(Nt)}}if(qe){T=ie.join("&");break e}}}return c=c.i.splice(0,v),g.D=c,T}function Bs(c){if(!c.g&&!c.u){c.Y=1;var g=c.Fa;Ke||he(),oe||(Ke(),oe=!0),Ee.add(g,c),c.v=0}}function Zo(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=Qn(I(c.Fa,c),Vc(c,c.v)),c.v++,!0)}n.Fa=function(){if(this.u=null,Nc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=Qn(I(this.ab,this),c)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,_t(10),rr(this),Nc(this))};function Fu(c){c.A!=null&&(h.clearTimeout(c.A),c.A=null)}function Nc(c){c.g=new Xn(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var g=An(c.qa);He(g,"RID","rpc"),He(g,"SID",c.K),He(g,"AID",c.T),He(g,"CI",c.F?"0":"1"),!c.F&&c.ja&&He(g,"TO",c.ja),He(g,"TYPE","xmlhttp"),Gr(c,g),c.m&&c.o&&Vi(g,c.m,c.o),c.L&&(c.g.I=c.L);var v=c.g;c=c.ia,v.L=1,v.v=bi(An(g)),v.m=null,v.P=!0,xu(v,c)}n.Za=function(){this.C!=null&&(this.C=null,rr(this),Zo(this),_t(19))};function ea(c){c.C!=null&&(h.clearTimeout(c.C),c.C=null)}function ta(c,g){var v=null;if(c.g==g){ea(c),Fu(c),c.g=null;var T=2}else if(rn(c.h,g))v=g.D,Sc(c.h,g),T=1;else return;if(c.G!=0){if(g.o)if(T==1){v=g.m?g.m.length:0,g=Date.now()-g.F;var B=c.B;T=xs(),At(T,new Bo(T,v)),vr(c)}else Bs(c);else if(B=g.s,B==3||B==0&&0<g.X||!(T==1&&Ef(c,g)||T==2&&Zo(c)))switch(v&&0<v.length&&(g=c.h,g.i=g.i.concat(v)),B){case 1:Wr(c,5);break;case 4:Wr(c,10);break;case 3:Wr(c,6);break;default:Wr(c,2)}}}function Vc(c,g){let v=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(v*=2),v*g}function Wr(c,g){if(c.j.info("Error code "+g),g==2){var v=I(c.fb,c),T=c.Xa;const B=!T;T=new jr(T||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||Ms(T,"https"),bi(T),B?yf(T.toString(),v):xc(T.toString(),v)}else _t(2);c.G=0,c.l&&c.l.sa(g),Oc(c),Yo(c)}n.fb=function(c){c?(this.j.info("Successfully pinged google.com"),_t(2)):(this.j.info("Failed to ping google.com"),_t(1))};function Oc(c){if(c.G=0,c.ka=[],c.l){const g=Rc(c.h);(g.length!=0||c.i.length!=0)&&(D(c.ka,g),D(c.ka,c.i),c.h.i.length=0,L(c.i),c.i.length=0),c.l.ra()}}function Lc(c,g,v){var T=v instanceof jr?An(v):new jr(v);if(T.g!="")g&&(T.g=g+"."+T.g),ki(T,T.s);else{var B=h.location;T=B.protocol,g=g?g+"."+B.hostname:B.hostname,B=+B.port;var W=new jr(null);T&&Ms(W,T),g&&(W.g=g),B&&ki(W,B),v&&(W.l=v),T=W}return v=c.D,g=c.ya,v&&g&&He(T,v,g),He(T,"VER",c.la),Gr(c,T),T}function Mc(c,g,v){if(g&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return g=c.Ca&&!c.pa?new rt(new $r({eb:v})):new rt(c.pa),g.Ha(c.J),g}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Uu(){}n=Uu.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function na(){}na.prototype.g=function(c,g){return new sn(c,g)};function sn(c,g){Rt.call(this),this.g=new Mu(g),this.l=c,this.h=g&&g.messageUrlParams||null,c=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(c?c["X-WebChannel-Content-Type"]=g.messageContentType:c={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.va&&(c?c["X-WebChannel-Client-Profile"]=g.va:c={"X-WebChannel-Client-Profile":g.va}),this.g.S=c,(c=g&&g.Sb)&&!K(c)&&(this.g.m=c),this.v=g&&g.supportsCrossDomainXhr||!1,this.u=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!K(g)&&(this.g.D=g,c=this.h,c!==null&&g in c&&(c=this.h,g in c&&delete c[g])),this.j=new wr(this)}k(sn,Rt),sn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},sn.prototype.close=function(){Bt(this.g)},sn.prototype.o=function(c){var g=this.g;if(typeof c=="string"){var v={};v.__data__=c,c=v}else this.u&&(v={},v.__data__=Iu(c),c=v);g.i.push(new Ic(g.Ya++,c)),g.G==3&&vr(g)},sn.prototype.N=function(){this.g.l=null,delete this.j,Bt(this.g),delete this.g,sn.aa.N.call(this)};function Fc(c){pr.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var g=c.__sm__;if(g){e:{for(const v in g){c=v;break e}c=void 0}(this.i=c)&&(c=this.i,g=g!==null&&c in g?g[c]:void 0),this.data=g}else this.data=c}k(Fc,pr);function Uc(){Uo.call(this),this.status=1}k(Uc,Uo);function wr(c){this.g=c}k(wr,Uu),wr.prototype.ua=function(){At(this.g,"a")},wr.prototype.ta=function(c){At(this.g,new Fc(c))},wr.prototype.sa=function(c){At(this.g,new Uc)},wr.prototype.ra=function(){At(this.g,"b")},na.prototype.createWebChannel=na.prototype.g,sn.prototype.send=sn.prototype.o,sn.prototype.open=sn.prototype.m,sn.prototype.close=sn.prototype.close,pT=function(){return new na},fT=function(){return xs()},dT=mr,vm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},jo.NO_ERROR=0,jo.TIMEOUT=8,jo.HTTP_ERROR=6,Xh=jo,yc.COMPLETE="complete",hT=yc,Fo.EventType=Vn,Vn.OPEN="a",Vn.CLOSE="b",Vn.ERROR="c",Vn.MESSAGE="d",Rt.prototype.listen=Rt.prototype.K,wl=Fo,rt.prototype.listenOnce=rt.prototype.L,rt.prototype.getLastError=rt.prototype.Ka,rt.prototype.getLastErrorCode=rt.prototype.Ba,rt.prototype.getStatus=rt.prototype.Z,rt.prototype.getResponseJson=rt.prototype.Oa,rt.prototype.getResponseText=rt.prototype.oa,rt.prototype.send=rt.prototype.ea,rt.prototype.setWithCredentials=rt.prototype.Ha,cT=rt}).apply(typeof Oh<"u"?Oh:typeof self<"u"?self:typeof window<"u"?window:{});const vw="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ft.UNAUTHENTICATED=new Ft(null),Ft.GOOGLE_CREDENTIALS=new Ft("google-credentials-uid"),Ft.FIRST_PARTY=new Ft("first-party-uid"),Ft.MOCK_USER=new Ft("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ou="11.2.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs=new Od("@firebase/firestore");function ka(){return hs.logLevel}function jb(n){hs.setLogLevel(n)}function Z(n,...e){if(hs.logLevel<=be.DEBUG){const t=e.map(dg);hs.debug(`Firestore (${ou}): ${n}`,...t)}}function vt(n,...e){if(hs.logLevel<=be.ERROR){const t=e.map(dg);hs.error(`Firestore (${ou}): ${n}`,...t)}}function Nr(n,...e){if(hs.logLevel<=be.WARN){const t=e.map(dg);hs.warn(`Firestore (${ou}): ${n}`,...t)}}function dg(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(n="Unexpected state"){const e=`FIRESTORE (${ou}) INTERNAL ASSERTION FAILED: `+n;throw vt(e),new Error(e)}function ge(n,e){n||ce()}function $b(n,e){n||ce()}function ae(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Y extends fr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mT{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class qb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ft.UNAUTHENTICATED))}shutdown(){}}class Gb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Wb{constructor(e){this.t=e,this.currentUser=Ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ge(this.o===void 0);let r=this.i;const s=f=>this.i!==r?(r=this.i,t(f)):Promise.resolve();let a=new Gt;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new Gt,e.enqueueRetryable(()=>s(this.currentUser))};const u=()=>{const f=a;e.enqueueRetryable(async()=>{await f.promise,await s(this.currentUser)})},h=f=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(f=>h(f)),setTimeout(()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?h(f):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new Gt)}},0),u()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ge(typeof r.accessToken=="string"),new mT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ge(e===null||typeof e=="string"),new Ft(e)}}class Kb{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Ft.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Hb{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new Kb(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Qb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Jb{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){ge(this.o===void 0);const r=a=>{a.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const u=a.token!==this.R;return this.R=a.token,Z("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable(()=>r(a))};const s=a=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(a=>s(a)),setTimeout(()=>{if(!this.appCheck){const a=this.A.getImmediate({optional:!0});a?s(a):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ge(typeof t.token=="string"),this.R=t.token,new Qb(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yb(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Yb(40);for(let a=0;a<s.length;++a)r.length<20&&s[a]<t&&(r+=e.charAt(s[a]%e.length))}return r}}function Ae(n,e){return n<e?-1:n>e?1:0}function qa(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}function _T(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{static now(){return ut.fromMillis(Date.now())}static fromDate(e){return ut.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new ut(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Y(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Y(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new Y(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Y(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ae(this.nanoseconds,e.nanoseconds):Ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{static fromTimestamp(e){return new ve(e)}static min(){return new ve(new ut(0,0))}static max(){return new ve(new ut(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e,t,r){t===void 0?t=0:t>e.length&&ce(),r===void 0?r=e.length-t:r>e.length-t&&ce(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Rr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Rr?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const a=Rr.compareSegments(e.get(s),t.get(s));if(a!==0)return a}return Math.sign(e.length-t.length)}static compareSegments(e,t){const r=Rr.isNumericId(e),s=Rr.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Rr.extractNumericId(e).compare(Rr.extractNumericId(t)):e<t?-1:e>t?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return os.fromString(e.substring(4,e.length-2))}}class De extends Rr{construct(e,t,r){return new De(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new Y(q.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new De(t)}static emptyPath(){return new De([])}}const Xb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ot extends Rr{construct(e,t,r){return new ot(e,t,r)}static isValidIdentifier(e){return Xb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ot.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ot(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const a=()=>{if(r.length===0)throw new Y(q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let u=!1;for(;s<e.length;){const h=e[s];if(h==="\\"){if(s+1===e.length)throw new Y(q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const f=e[s+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new Y(q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=f,s+=2}else h==="`"?(u=!u,s++):h!=="."||u?(r+=h,s++):(a(),s++)}if(a(),u)throw new Y(q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ot(t)}static emptyPath(){return new ot([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.path=e}static fromPath(e){return new se(De.fromString(e))}static fromName(e){return new se(De.fromString(e).popFirst(5))}static empty(){return new se(De.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&De.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return De.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new se(new De(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(e,t,r,s){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=s}}function wm(n){return n.fields.find(e=>e.kind===2)}function no(n){return n.fields.filter(e=>e.kind!==2)}_d.UNKNOWN_ID=-1;class Zh{constructor(e,t){this.fieldPath=e,this.kind=t}}class Ll{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Ll(0,Nn.min())}}function yT(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=ve.fromTimestamp(r===1e9?new ut(t+1,0):new ut(t,r));return new Nn(s,se.empty(),e)}function vT(n){return new Nn(n.readTime,n.key,-1)}class Nn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Nn(ve.min(),se.empty(),-1)}static max(){return new Nn(ve.max(),se.empty(),-1)}}function fg(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=se.comparator(n.documentKey,e.documentKey),t!==0?t:Ae(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ET{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Es(n){if(n.code!==q.FAILED_PRECONDITION||n.message!==wT)throw n;Z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ce(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new U((r,s)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(r,s)},this.catchCallback=a=>{this.wrapFailure(t,a).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof U?t:U.resolve(t)}catch(t){return U.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):U.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):U.reject(t)}static resolve(e){return new U((t,r)=>{t(e)})}static reject(e){return new U((t,r)=>{r(e)})}static waitFor(e){return new U((t,r)=>{let s=0,a=0,u=!1;e.forEach(h=>{++s,h.next(()=>{++a,u&&a===s&&t()},f=>r(f))}),u=!0,a===s&&t()})}static or(e){let t=U.resolve(!1);for(const r of e)t=t.next(s=>s?U.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,a)=>{r.push(t.call(this,s,a))}),this.waitFor(r)}static mapArray(e,t){return new U((r,s)=>{const a=e.length,u=new Array(a);let h=0;for(let f=0;f<a;f++){const p=f;t(e[p]).next(y=>{u[p]=y,++h,h===a&&r(u)},y=>s(y))}})}static doWhile(e,t){return new U((r,s)=>{const a=()=>{e()===!0?t().next(()=>{a()},s):r()};a()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{static open(e,t,r,s){try{return new Bd(t,e.transaction(s,r))}catch(a){throw new Rl(t,a)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new Gt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new Rl(e,t.error)):this.V.resolve()},this.transaction.onerror=r=>{const s=pg(r.target.error);this.V.reject(new Rl(e,s))}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(Z("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new eD(t)}}class xr{static delete(e){return Z("SimpleDb","Removing database:",e),ro(window.indexedDB.deleteDatabase(e)).toPromise()}static p(){if(!pI())return!1;if(xr.S())return!0;const e=xt(),t=xr.D(e),r=0<t&&t<10,s=IT(e),a=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||a)}static S(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.v)==="YES"}static C(e,t){return e.store(t)}static D(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}constructor(e,t,r){this.name=e,this.version=t,this.F=r,xr.D(xt())===12.2&&vt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async M(e){return this.db||(Z("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=a=>{const u=a.target.result;t(u)},s.onblocked=()=>{r(new Rl(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=a=>{const u=a.target.error;u.name==="VersionError"?r(new Y(q.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):u.name==="InvalidStateError"?r(new Y(q.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+u)):r(new Rl(e,u))},s.onupgradeneeded=a=>{Z("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',a.oldVersion);const u=a.target.result;this.F.O(u,s.transaction,a.oldVersion,this.version).next(()=>{Z("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=t=>this.N(t)),this.db}B(e){this.N=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,s){const a=t==="readonly";let u=0;for(;;){++u;try{this.db=await this.M(e);const h=Bd.open(this.db,e,a?"readonly":"readwrite",r),f=s(h).next(p=>(h.g(),p)).catch(p=>(h.abort(p),U.reject(p))).toPromise();return f.catch(()=>{}),await h.m,f}catch(h){const f=h,p=f.name!=="FirebaseError"&&u<3;if(Z("SimpleDb","Transaction failed with error:",f.message,"Retrying:",p),this.close(),!p)return Promise.reject(f)}}}close(){this.db&&this.db.close(),this.db=void 0}}function IT(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class Zb{constructor(e){this.L=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.L=e}done(){this.k=!0}$(e){this.q=e}delete(){return ro(this.L.delete())}}class Rl extends Y{constructor(e,t){super(q.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Is(n){return n.name==="IndexedDbTransactionError"}class eD{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(Z("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(Z("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),ro(r)}add(e){return Z("SimpleDb","ADD",this.store.name,e,e),ro(this.store.add(e))}get(e){return ro(this.store.get(e)).next(t=>(t===void 0&&(t=null),Z("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return Z("SimpleDb","DELETE",this.store.name,e),ro(this.store.delete(e))}count(){return Z("SimpleDb","COUNT",this.store.name),ro(this.store.count())}U(e,t){const r=this.options(e,t),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const a=s.getAll(r.range);return new U((u,h)=>{a.onerror=f=>{h(f.target.error)},a.onsuccess=f=>{u(f.target.result)}})}{const a=this.cursor(r),u=[];return this.W(a,(h,f)=>{u.push(f)}).next(()=>u)}}G(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new U((s,a)=>{r.onerror=u=>{a(u.target.error)},r.onsuccess=u=>{s(u.target.result)}})}j(e,t){Z("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,t);r.H=!1;const s=this.cursor(r);return this.W(s,(a,u,h)=>h.delete())}J(e,t){let r;t?r=e:(r={},t=e);const s=this.cursor(r);return this.W(s,t)}Y(e){const t=this.cursor({});return new U((r,s)=>{t.onerror=a=>{const u=pg(a.target.error);s(u)},t.onsuccess=a=>{const u=a.target.result;u?e(u.primaryKey,u.value).next(h=>{h?u.continue():r()}):r()}})}W(e,t){const r=[];return new U((s,a)=>{e.onerror=u=>{a(u.target.error)},e.onsuccess=u=>{const h=u.target.result;if(!h)return void s();const f=new Zb(h),p=t(h.primaryKey,h.value,f);if(p instanceof U){const y=p.catch(w=>(f.done(),U.reject(w)));r.push(y)}f.isDone?s():f.K===null?h.continue():h.continue(f.K)}}).next(()=>U.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.H?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function ro(n){return new U((e,t)=>{n.onsuccess=r=>{const s=r.target.result;e(s)},n.onerror=r=>{const s=pg(r.target.error);t(s)}})}let ww=!1;function pg(n){const e=xr.D(xt());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new Y("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return ww||(ww=!0,setTimeout(()=>{throw r},0)),r}}return n}class tD{constructor(e,t){this.asyncQueue=e,this.Z=t,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){Z("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{Z("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(t){Is(t)?Z("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",t):await Es(t)}await this.X(6e4)})}}class nD{constructor(e,t){this.localStore=e,this.persistence=t}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.te(t,e))}te(e,t){const r=new Set;let s=t,a=!0;return U.doWhile(()=>a===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(u=>{if(u!==null&&!r.has(u))return Z("IndexBackfiller",`Processing collection: ${u}`),this.ne(e,u,s).next(h=>{s-=h,r.add(u)});a=!1})).next(()=>t-s)}ne(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(s=>this.localStore.localDocuments.getNextDocuments(e,t,s,r).next(a=>{const u=a.changes;return this.localStore.indexManager.updateIndexEntries(e,u).next(()=>this.re(s,a)).next(h=>(Z("IndexBackfiller",`Updating offset: ${h}`),this.localStore.indexManager.updateCollectionGroup(e,t,h))).next(()=>u.size)}))}re(e,t){let r=e;return t.changes.forEach((s,a)=>{const u=vT(a);fg(u,r)>0&&(r=u)}),new Nn(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}In.oe=-1;function ic(n){return n==null}function Ml(n){return n===0&&1/n==-1/0}function TT(n){return typeof n=="number"&&Number.isInteger(n)&&!Ml(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Ew(e)),e=rD(n.get(t),e);return Ew(e)}function rD(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const a=n.charAt(s);switch(a){case"\0":t+="";break;case"":t+="";break;default:t+=a}}return t}function Ew(n){return n+""}function Pr(n){const e=n.length;if(ge(e>=2),e===2)return ge(n.charAt(0)===""&&n.charAt(1)===""),De.emptyPath();const t=e-2,r=[];let s="";for(let a=0;a<e;){const u=n.indexOf("",a);switch((u<0||u>t)&&ce(),n.charAt(u+1)){case"":const h=n.substring(a,u);let f;s.length===0?f=h:(s+=h,f=s,s=""),r.push(f);break;case"":s+=n.substring(a,u),s+="\0";break;case"":s+=n.substring(a,u+1);break;default:ce()}a=u+2}return new De(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iw=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ed(n,e){return[n,tn(e)]}function ST(n,e,t){return[n,tn(e),t]}const iD={},sD=["prefixPath","collectionGroup","readTime","documentId"],oD=["prefixPath","collectionGroup","documentId"],aD=["collectionGroup","readTime","prefixPath","documentId"],uD=["canonicalId","targetId"],lD=["targetId","path"],cD=["path","targetId"],hD=["collectionId","parent"],dD=["indexId","uid"],fD=["uid","sequenceNumber"],pD=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],mD=["indexId","uid","orderedDocumentKey"],gD=["userId","collectionPath","documentId"],_D=["userId","collectionPath","largestBatchId"],yD=["userId","collectionGroup","largestBatchId"],RT=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],vD=[...RT,"documentOverlays"],AT=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],PT=AT,mg=[...PT,"indexConfiguration","indexState","indexEntries"],wD=mg,ED=[...mg,"globals"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em extends ET{constructor(e,t){super(),this._e=e,this.currentSequenceNumber=t}}function bt(n,e){const t=ae(n);return xr.C(t._e,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tw(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ts(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function CT(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e,t){this.comparator=e,this.root=t||$t.EMPTY}insert(e,t){return new Xe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,$t.BLACK,null,null))}remove(e){return new Xe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,$t.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Lh(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Lh(this.root,e,this.comparator,!1)}getReverseIterator(){return new Lh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Lh(this.root,e,this.comparator,!0)}}class Lh{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?r(e.key,t):1,t&&s&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class $t{constructor(e,t,r,s,a){this.key=e,this.value=t,this.color=r??$t.RED,this.left=s??$t.EMPTY,this.right=a??$t.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,a){return new $t(e??this.key,t??this.value,r??this.color,s??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const a=r(e,s.key);return s=a<0?s.copy(null,null,null,s.left.insert(e,t,r),null):a===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return $t.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return $t.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,$t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,$t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ce();const e=this.left.check();if(e!==this.right.check())throw ce();return e+(this.isRed()?0:1)}}$t.EMPTY=null,$t.RED=!0,$t.BLACK=!1;$t.EMPTY=new class{constructor(){this.size=0}get key(){throw ce()}get value(){throw ce()}get color(){throw ce()}get left(){throw ce()}get right(){throw ce()}copy(e,t,r,s,a){return this}insert(e,t,r){return new $t(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.comparator=e,this.data=new Xe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Sw(this.data.getIterator())}getIteratorFrom(e){return new Sw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof We)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,a=r.getNext().key;if(this.comparator(s,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new We(this.comparator);return t.data=e,t}}class Sw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Sa(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e){this.fields=e,e.sort(ot.comparator)}static empty(){return new Tn([])}unionWith(e){let t=new We(ot.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Tn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return qa(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ID(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new kT("Invalid base64 string: "+a):a}}(e);return new mt(t)}static fromUint8Array(e){const t=function(s){let a="";for(let u=0;u<s.length;++u)a+=String.fromCharCode(s[u]);return a}(e);return new mt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}mt.EMPTY_BYTE_STRING=new mt("");const TD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function pi(n){if(ge(!!n),typeof n=="string"){let e=0;const t=TD.exec(n);if(ge(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:st(n.seconds),nanos:st(n.nanos)}}function st(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function mi(n){return typeof n=="string"?mt.fromBase64String(n):mt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zd(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function jd(n){const e=n.mapValue.fields.__previous_value__;return zd(e)?jd(e):e}function Fl(n){const e=pi(n.mapValue.fields.__local_write_time__.timestampValue);return new ut(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SD{constructor(e,t,r,s,a,u,h,f,p){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=a,this.forceLongPolling=u,this.autoDetectLongPolling=h,this.longPollingOptions=f,this.useFetchStreams=p}}class ds{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ds("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ds&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},td={nullValue:"NULL_VALUE"};function fs(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?zd(n)?4:xT(n)?9007199254740991:$d(n)?10:11:ce()}function Vr(n,e){if(n===e)return!0;const t=fs(n);if(t!==fs(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Fl(n).isEqual(Fl(e));case 3:return function(s,a){if(typeof s.timestampValue=="string"&&typeof a.timestampValue=="string"&&s.timestampValue.length===a.timestampValue.length)return s.timestampValue===a.timestampValue;const u=pi(s.timestampValue),h=pi(a.timestampValue);return u.seconds===h.seconds&&u.nanos===h.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,a){return mi(s.bytesValue).isEqual(mi(a.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,a){return st(s.geoPointValue.latitude)===st(a.geoPointValue.latitude)&&st(s.geoPointValue.longitude)===st(a.geoPointValue.longitude)}(n,e);case 2:return function(s,a){if("integerValue"in s&&"integerValue"in a)return st(s.integerValue)===st(a.integerValue);if("doubleValue"in s&&"doubleValue"in a){const u=st(s.doubleValue),h=st(a.doubleValue);return u===h?Ml(u)===Ml(h):isNaN(u)&&isNaN(h)}return!1}(n,e);case 9:return qa(n.arrayValue.values||[],e.arrayValue.values||[],Vr);case 10:case 11:return function(s,a){const u=s.mapValue.fields||{},h=a.mapValue.fields||{};if(Tw(u)!==Tw(h))return!1;for(const f in u)if(u.hasOwnProperty(f)&&(h[f]===void 0||!Vr(u[f],h[f])))return!1;return!0}(n,e);default:return ce()}}function Ul(n,e){return(n.values||[]).find(t=>Vr(t,e))!==void 0}function ps(n,e){if(n===e)return 0;const t=fs(n),r=fs(e);if(t!==r)return Ae(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ae(n.booleanValue,e.booleanValue);case 2:return function(a,u){const h=st(a.integerValue||a.doubleValue),f=st(u.integerValue||u.doubleValue);return h<f?-1:h>f?1:h===f?0:isNaN(h)?isNaN(f)?0:-1:1}(n,e);case 3:return Rw(n.timestampValue,e.timestampValue);case 4:return Rw(Fl(n),Fl(e));case 5:return Ae(n.stringValue,e.stringValue);case 6:return function(a,u){const h=mi(a),f=mi(u);return h.compareTo(f)}(n.bytesValue,e.bytesValue);case 7:return function(a,u){const h=a.split("/"),f=u.split("/");for(let p=0;p<h.length&&p<f.length;p++){const y=Ae(h[p],f[p]);if(y!==0)return y}return Ae(h.length,f.length)}(n.referenceValue,e.referenceValue);case 8:return function(a,u){const h=Ae(st(a.latitude),st(u.latitude));return h!==0?h:Ae(st(a.longitude),st(u.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Aw(n.arrayValue,e.arrayValue);case 10:return function(a,u){var h,f,p,y;const w=a.fields||{},I=u.fields||{},R=(h=w.value)===null||h===void 0?void 0:h.arrayValue,k=(f=I.value)===null||f===void 0?void 0:f.arrayValue,L=Ae(((p=R==null?void 0:R.values)===null||p===void 0?void 0:p.length)||0,((y=k==null?void 0:k.values)===null||y===void 0?void 0:y.length)||0);return L!==0?L:Aw(R,k)}(n.mapValue,e.mapValue);case 11:return function(a,u){if(a===is.mapValue&&u===is.mapValue)return 0;if(a===is.mapValue)return 1;if(u===is.mapValue)return-1;const h=a.fields||{},f=Object.keys(h),p=u.fields||{},y=Object.keys(p);f.sort(),y.sort();for(let w=0;w<f.length&&w<y.length;++w){const I=Ae(f[w],y[w]);if(I!==0)return I;const R=ps(h[f[w]],p[y[w]]);if(R!==0)return R}return Ae(f.length,y.length)}(n.mapValue,e.mapValue);default:throw ce()}}function Rw(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Ae(n,e);const t=pi(n),r=pi(e),s=Ae(t.seconds,r.seconds);return s!==0?s:Ae(t.nanos,r.nanos)}function Aw(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const a=ps(t[s],r[s]);if(a)return a}return Ae(t.length,r.length)}function Ga(n){return Im(n)}function Im(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=pi(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return mi(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return se.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const a of t.values||[])s?s=!1:r+=",",r+=Im(a);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",a=!0;for(const u of r)a?a=!1:s+=",",s+=`${u}:${Im(t.fields[u])}`;return s+"}"}(n.mapValue):ce()}function nd(n){switch(fs(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=jd(n);return e?16+nd(e):16;case 5:return 2*n.stringValue.length;case 6:return mi(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,a)=>s+nd(a),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return Ts(r.fields,(a,u)=>{s+=a.length+nd(u)}),s}(n.mapValue);default:throw ce()}}function go(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Tm(n){return!!n&&"integerValue"in n}function Bl(n){return!!n&&"arrayValue"in n}function Pw(n){return!!n&&"nullValue"in n}function Cw(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function rd(n){return!!n&&"mapValue"in n}function $d(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Al(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Ts(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Al(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Al(n.arrayValue.values[t]);return e}return Object.assign({},n)}function xT(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const bT={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function RD(n){return"nullValue"in n?td:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?go(ds.empty(),se.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?$d(n)?bT:{mapValue:{}}:ce()}function AD(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?go(ds.empty(),se.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?bT:"mapValue"in n?$d(n)?{mapValue:{}}:is:ce()}function kw(n,e){const t=ps(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function xw(n,e){const t=ps(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.value=e}static empty(){return new qt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!rd(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Al(t)}setAll(e){let t=ot.emptyPath(),r={},s=[];e.forEach((u,h)=>{if(!t.isImmediateParentOf(h)){const f=this.getFieldsMap(t);this.applyChanges(f,r,s),r={},s=[],t=h.popLast()}u?r[h.lastSegment()]=Al(u):s.push(h.lastSegment())});const a=this.getFieldsMap(t);this.applyChanges(a,r,s)}delete(e){const t=this.field(e.popLast());rd(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Vr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];rd(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Ts(t,(s,a)=>e[s]=a);for(const s of r)delete e[s]}clone(){return new qt(Al(this.value))}}function DT(n){const e=[];return Ts(n.fields,(t,r)=>{const s=new ot([t]);if(rd(r)){const a=DT(r.mapValue).fields;if(a.length===0)e.push(s);else for(const u of a)e.push(s.child(u))}else e.push(s)}),new Tn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,t,r,s,a,u,h){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=a,this.data=u,this.documentState=h}static newInvalidDocument(e){return new tt(e,0,ve.min(),ve.min(),ve.min(),qt.empty(),0)}static newFoundDocument(e,t,r,s){return new tt(e,1,t,ve.min(),r,s,0)}static newNoDocument(e,t){return new tt(e,2,t,ve.min(),ve.min(),qt.empty(),0)}static newUnknownDocument(e,t){return new tt(e,3,t,ve.min(),ve.min(),qt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ve.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=qt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=qt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ve.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,t){this.position=e,this.inclusive=t}}function bw(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const a=e[s],u=n.position[s];if(a.field.isKeyField()?r=se.comparator(se.fromName(u.referenceValue),t.key):r=ps(u,t.data.field(a.field)),a.dir==="desc"&&(r*=-1),r!==0)break}return r}function Dw(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Vr(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(e,t="asc"){this.field=e,this.dir=t}}function PD(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{}class Ne extends NT{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new CD(e,t,r):t==="array-contains"?new bD(e,r):t==="in"?new UT(e,r):t==="not-in"?new DD(e,r):t==="array-contains-any"?new ND(e,r):new Ne(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new kD(e,r):new xD(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(ps(t,this.value)):t!==null&&fs(this.value)===fs(t)&&this.matchesComparison(ps(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ce()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ge extends NT{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Ge(e,t)}matches(e){return Wa(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Wa(n){return n.op==="and"}function Sm(n){return n.op==="or"}function gg(n){return VT(n)&&Wa(n)}function VT(n){for(const e of n.filters)if(e instanceof Ge)return!1;return!0}function Rm(n){if(n instanceof Ne)return n.field.canonicalString()+n.op.toString()+Ga(n.value);if(gg(n))return n.filters.map(e=>Rm(e)).join(",");{const e=n.filters.map(t=>Rm(t)).join(",");return`${n.op}(${e})`}}function OT(n,e){return n instanceof Ne?function(r,s){return s instanceof Ne&&r.op===s.op&&r.field.isEqual(s.field)&&Vr(r.value,s.value)}(n,e):n instanceof Ge?function(r,s){return s instanceof Ge&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((a,u,h)=>a&&OT(u,s.filters[h]),!0):!1}(n,e):void ce()}function LT(n,e){const t=n.filters.concat(e);return Ge.create(t,n.op)}function MT(n){return n instanceof Ne?function(t){return`${t.field.canonicalString()} ${t.op} ${Ga(t.value)}`}(n):n instanceof Ge?function(t){return t.op.toString()+" {"+t.getFilters().map(MT).join(" ,")+"}"}(n):"Filter"}class CD extends Ne{constructor(e,t,r){super(e,t,r),this.key=se.fromName(r.referenceValue)}matches(e){const t=se.comparator(e.key,this.key);return this.matchesComparison(t)}}class kD extends Ne{constructor(e,t){super(e,"in",t),this.keys=FT("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class xD extends Ne{constructor(e,t){super(e,"not-in",t),this.keys=FT("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function FT(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>se.fromName(r.referenceValue))}class bD extends Ne{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Bl(t)&&Ul(t.arrayValue,this.value)}}class UT extends Ne{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ul(this.value.arrayValue,t)}}class DD extends Ne{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ul(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Ul(this.value.arrayValue,t)}}class ND extends Ne{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Bl(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Ul(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VD{constructor(e,t=null,r=[],s=[],a=null,u=null,h=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=a,this.startAt=u,this.endAt=h,this.ue=null}}function Am(n,e=null,t=[],r=[],s=null,a=null,u=null){return new VD(n,e,t,r,s,a,u)}function _o(n){const e=ae(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Rm(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(a){return a.field.canonicalString()+a.dir}(r)).join(","),ic(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Ga(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Ga(r)).join(",")),e.ue=t}return e.ue}function sc(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!PD(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!OT(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Dw(n.startAt,e.startAt)&&Dw(n.endAt,e.endAt)}function yd(n){return se.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function vd(n,e){return n.filters.filter(t=>t instanceof Ne&&t.field.isEqual(e))}function Nw(n,e,t){let r=td,s=!0;for(const a of vd(n,e)){let u=td,h=!0;switch(a.op){case"<":case"<=":u=RD(a.value);break;case"==":case"in":case">=":u=a.value;break;case">":u=a.value,h=!1;break;case"!=":case"not-in":u=td}kw({value:r,inclusive:s},{value:u,inclusive:h})<0&&(r=u,s=h)}if(t!==null){for(let a=0;a<n.orderBy.length;++a)if(n.orderBy[a].field.isEqual(e)){const u=t.position[a];kw({value:r,inclusive:s},{value:u,inclusive:t.inclusive})<0&&(r=u,s=t.inclusive);break}}return{value:r,inclusive:s}}function Vw(n,e,t){let r=is,s=!0;for(const a of vd(n,e)){let u=is,h=!0;switch(a.op){case">=":case">":u=AD(a.value),h=!1;break;case"==":case"in":case"<=":u=a.value;break;case"<":u=a.value,h=!1;break;case"!=":case"not-in":u=is}xw({value:r,inclusive:s},{value:u,inclusive:h})>0&&(r=u,s=h)}if(t!==null){for(let a=0;a<n.orderBy.length;++a)if(n.orderBy[a].field.isEqual(e)){const u=t.position[a];xw({value:r,inclusive:s},{value:u,inclusive:t.inclusive})>0&&(r=u,s=t.inclusive);break}}return{value:r,inclusive:s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e,t=null,r=[],s=[],a=null,u="F",h=null,f=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=a,this.limitType=u,this.startAt=h,this.endAt=f,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function BT(n,e,t,r,s,a,u,h){return new wi(n,e,t,r,s,a,u,h)}function au(n){return new wi(n)}function Ow(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function _g(n){return n.collectionGroup!==null}function Ma(n){const e=ae(n);if(e.ce===null){e.ce=[];const t=new Set;for(const a of e.explicitOrderBy)e.ce.push(a),t.add(a.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(u){let h=new We(ot.comparator);return u.filters.forEach(f=>{f.getFlattenedFilters().forEach(p=>{p.isInequality()&&(h=h.add(p.field))})}),h})(e).forEach(a=>{t.has(a.canonicalString())||a.isKeyField()||e.ce.push(new zl(a,r))}),t.has(ot.keyField().canonicalString())||e.ce.push(new zl(ot.keyField(),r))}return e.ce}function dn(n){const e=ae(n);return e.le||(e.le=OD(e,Ma(n))),e.le}function OD(n,e){if(n.limitType==="F")return Am(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const a=s.dir==="desc"?"asc":"desc";return new zl(s.field,a)});const t=n.endAt?new ms(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ms(n.startAt.position,n.startAt.inclusive):null;return Am(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Pm(n,e){const t=n.filters.concat([e]);return new wi(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function wd(n,e,t){return new wi(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function oc(n,e){return sc(dn(n),dn(e))&&n.limitType===e.limitType}function zT(n){return`${_o(dn(n))}|lt:${n.limitType}`}function xa(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>MT(s)).join(", ")}]`),ic(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Ga(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Ga(s)).join(",")),`Target(${r})`}(dn(n))}; limitType=${n.limitType})`}function ac(n,e){return e.isFoundDocument()&&function(r,s){const a=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(a):se.isDocumentKey(r.path)?r.path.isEqual(a):r.path.isImmediateParentOf(a)}(n,e)&&function(r,s){for(const a of Ma(r))if(!a.field.isKeyField()&&s.data.field(a.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const a of r.filters)if(!a.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(u,h,f){const p=bw(u,h,f);return u.inclusive?p<=0:p<0}(r.startAt,Ma(r),s)||r.endAt&&!function(u,h,f){const p=bw(u,h,f);return u.inclusive?p>=0:p>0}(r.endAt,Ma(r),s))}(n,e)}function jT(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function $T(n){return(e,t)=>{let r=!1;for(const s of Ma(n)){const a=LD(s,e,t);if(a!==0)return a;r=r||s.field.isKeyField()}return 0}}function LD(n,e,t){const r=n.field.isKeyField()?se.comparator(e.key,t.key):function(a,u,h){const f=u.data.field(a),p=h.data.field(a);return f!==null&&p!==null?ps(f,p):ce()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return ce()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,a]of r)if(this.equalsFn(s,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return void(s[a]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ts(this.inner,(t,r)=>{for(const[s,a]of r)e(s,a)})}isEmpty(){return CT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MD=new Xe(se.comparator);function Sn(){return MD}const qT=new Xe(se.comparator);function El(...n){let e=qT;for(const t of n)e=e.insert(t.key,t);return e}function GT(n){let e=qT;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Cr(){return Pl()}function WT(){return Pl()}function Pl(){return new Ei(n=>n.toString(),(n,e)=>n.isEqual(e))}const FD=new Xe(se.comparator),UD=new We(se.comparator);function Pe(...n){let e=UD;for(const t of n)e=e.add(t);return e}const BD=new We(Ae);function yg(){return BD}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vg(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ml(e)?"-0":e}}function KT(n){return{integerValue:""+n}}function HT(n,e){return TT(e)?KT(e):vg(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(){this._=void 0}}function zD(n,e,t){return n instanceof Ka?function(s,a){const u={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return a&&zd(a)&&(a=jd(a)),a&&(u.fields.__previous_value__=a),{mapValue:u}}(t,e):n instanceof yo?JT(n,e):n instanceof vo?YT(n,e):function(s,a){const u=QT(s,a),h=Lw(u)+Lw(s.Pe);return Tm(u)&&Tm(s.Pe)?KT(h):vg(s.serializer,h)}(n,e)}function jD(n,e,t){return n instanceof yo?JT(n,e):n instanceof vo?YT(n,e):t}function QT(n,e){return n instanceof Ha?function(r){return Tm(r)||function(a){return!!a&&"doubleValue"in a}(r)}(e)?e:{integerValue:0}:null}class Ka extends qd{}class yo extends qd{constructor(e){super(),this.elements=e}}function JT(n,e){const t=XT(e);for(const r of n.elements)t.some(s=>Vr(s,r))||t.push(r);return{arrayValue:{values:t}}}class vo extends qd{constructor(e){super(),this.elements=e}}function YT(n,e){let t=XT(e);for(const r of n.elements)t=t.filter(s=>!Vr(s,r));return{arrayValue:{values:t}}}class Ha extends qd{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Lw(n){return st(n.integerValue||n.doubleValue)}function XT(n){return Bl(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(e,t){this.field=e,this.transform=t}}function $D(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof yo&&s instanceof yo||r instanceof vo&&s instanceof vo?qa(r.elements,s.elements,Vr):r instanceof Ha&&s instanceof Ha?Vr(r.Pe,s.Pe):r instanceof Ka&&s instanceof Ka}(n.transform,e.transform)}class qD{constructor(e,t){this.version=e,this.transformResults=t}}class at{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new at}static exists(e){return new at(void 0,e)}static updateTime(e){return new at(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function id(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Gd{}function ZT(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new lu(n.key,at.none()):new uu(n.key,n.data,at.none());{const t=n.data,r=qt.empty();let s=new We(ot.comparator);for(let a of e.fields)if(!s.has(a)){let u=t.field(a);u===null&&a.length>1&&(a=a.popLast(),u=t.field(a)),u===null?r.delete(a):r.set(a,u),s=s.add(a)}return new Ii(n.key,r,new Tn(s.toArray()),at.none())}}function GD(n,e,t){n instanceof uu?function(s,a,u){const h=s.value.clone(),f=Fw(s.fieldTransforms,a,u.transformResults);h.setAll(f),a.convertToFoundDocument(u.version,h).setHasCommittedMutations()}(n,e,t):n instanceof Ii?function(s,a,u){if(!id(s.precondition,a))return void a.convertToUnknownDocument(u.version);const h=Fw(s.fieldTransforms,a,u.transformResults),f=a.data;f.setAll(eS(s)),f.setAll(h),a.convertToFoundDocument(u.version,f).setHasCommittedMutations()}(n,e,t):function(s,a,u){a.convertToNoDocument(u.version).setHasCommittedMutations()}(0,e,t)}function Cl(n,e,t,r){return n instanceof uu?function(a,u,h,f){if(!id(a.precondition,u))return h;const p=a.value.clone(),y=Uw(a.fieldTransforms,f,u);return p.setAll(y),u.convertToFoundDocument(u.version,p).setHasLocalMutations(),null}(n,e,t,r):n instanceof Ii?function(a,u,h,f){if(!id(a.precondition,u))return h;const p=Uw(a.fieldTransforms,f,u),y=u.data;return y.setAll(eS(a)),y.setAll(p),u.convertToFoundDocument(u.version,y).setHasLocalMutations(),h===null?null:h.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map(w=>w.field))}(n,e,t,r):function(a,u,h){return id(a.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):h}(n,e,t)}function WD(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),a=QT(r.transform,s||null);a!=null&&(t===null&&(t=qt.empty()),t.set(r.field,a))}return t||null}function Mw(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&qa(r,s,(a,u)=>$D(a,u))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class uu extends Gd{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ii extends Gd{constructor(e,t,r,s,a=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function eS(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Fw(n,e,t){const r=new Map;ge(n.length===t.length);for(let s=0;s<t.length;s++){const a=n[s],u=a.transform,h=e.data.field(a.field);r.set(a.field,jD(u,h,t[s]))}return r}function Uw(n,e,t){const r=new Map;for(const s of n){const a=s.transform,u=t.data.field(s.field);r.set(s.field,zD(a,u,e))}return r}class lu extends Gd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class wg extends Gd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const a=this.mutations[s];a.key.isEqual(e.key)&&GD(a,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Cl(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Cl(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=WT();return this.mutations.forEach(s=>{const a=e.get(s.key),u=a.overlayedDocument;let h=this.applyToLocalView(u,a.mutatedFields);h=t.has(s.key)?null:h;const f=ZT(u,h);f!==null&&r.set(s.key,f),u.isValidDocument()||u.convertToNoDocument(ve.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Pe())}isEqual(e){return this.batchId===e.batchId&&qa(this.mutations,e.mutations,(t,r)=>Mw(t,r))&&qa(this.baseMutations,e.baseMutations,(t,r)=>Mw(t,r))}}class Ig{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){ge(e.mutations.length===r.length);let s=function(){return FD}();const a=e.mutations;for(let u=0;u<a.length;u++)s=s.insert(a[u].key,r[u].version);return new Ig(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KD{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var St,Fe;function tS(n){switch(n){default:return ce();case q.CANCELLED:case q.UNKNOWN:case q.DEADLINE_EXCEEDED:case q.RESOURCE_EXHAUSTED:case q.INTERNAL:case q.UNAVAILABLE:case q.UNAUTHENTICATED:return!1;case q.INVALID_ARGUMENT:case q.NOT_FOUND:case q.ALREADY_EXISTS:case q.PERMISSION_DENIED:case q.FAILED_PRECONDITION:case q.ABORTED:case q.OUT_OF_RANGE:case q.UNIMPLEMENTED:case q.DATA_LOSS:return!0}}function nS(n){if(n===void 0)return vt("GRPC error has no .code"),q.UNKNOWN;switch(n){case St.OK:return q.OK;case St.CANCELLED:return q.CANCELLED;case St.UNKNOWN:return q.UNKNOWN;case St.DEADLINE_EXCEEDED:return q.DEADLINE_EXCEEDED;case St.RESOURCE_EXHAUSTED:return q.RESOURCE_EXHAUSTED;case St.INTERNAL:return q.INTERNAL;case St.UNAVAILABLE:return q.UNAVAILABLE;case St.UNAUTHENTICATED:return q.UNAUTHENTICATED;case St.INVALID_ARGUMENT:return q.INVALID_ARGUMENT;case St.NOT_FOUND:return q.NOT_FOUND;case St.ALREADY_EXISTS:return q.ALREADY_EXISTS;case St.PERMISSION_DENIED:return q.PERMISSION_DENIED;case St.FAILED_PRECONDITION:return q.FAILED_PRECONDITION;case St.ABORTED:return q.ABORTED;case St.OUT_OF_RANGE:return q.OUT_OF_RANGE;case St.UNIMPLEMENTED:return q.UNIMPLEMENTED;case St.DATA_LOSS:return q.DATA_LOSS;default:return ce()}}(Fe=St||(St={}))[Fe.OK=0]="OK",Fe[Fe.CANCELLED=1]="CANCELLED",Fe[Fe.UNKNOWN=2]="UNKNOWN",Fe[Fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Fe[Fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Fe[Fe.NOT_FOUND=5]="NOT_FOUND",Fe[Fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Fe[Fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Fe[Fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Fe[Fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Fe[Fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Fe[Fe.ABORTED=10]="ABORTED",Fe[Fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Fe[Fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Fe[Fe.INTERNAL=13]="INTERNAL",Fe[Fe.UNAVAILABLE=14]="UNAVAILABLE",Fe[Fe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rS(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HD=new os([4294967295,4294967295],0);function Bw(n){const e=rS().encode(n),t=new lT;return t.update(e),new Uint8Array(t.digest())}function zw(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new os([t,r],0),new os([s,a],0)]}class Sg{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Il(`Invalid padding: ${t}`);if(r<0)throw new Il(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Il(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Il(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=os.fromNumber(this.Te)}de(e,t,r){let s=e.add(t.multiply(os.fromNumber(r)));return s.compare(HD)===1&&(s=new os([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ie).toNumber()}Ee(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=Bw(e),[r,s]=zw(t);for(let a=0;a<this.hashCount;a++){const u=this.de(r,s,a);if(!this.Ee(u))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),u=new Sg(a,s,t);return r.forEach(h=>u.insert(h)),u}insert(e){if(this.Te===0)return;const t=Bw(e),[r,s]=zw(t);for(let a=0;a<this.hashCount;a++){const u=this.de(r,s,a);this.Ae(u)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Il extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(e,t,r,s,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,cc.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new lc(ve.min(),s,new Xe(Ae),Sn(),Pe())}}class cc{constructor(e,t,r,s,a){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new cc(r,t,Pe(),Pe(),Pe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class iS{constructor(e,t){this.targetId=e,this.me=t}}class sS{constructor(e,t,r=mt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class jw{constructor(){this.fe=0,this.ge=$w(),this.pe=mt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Pe(),t=Pe(),r=Pe();return this.ge.forEach((s,a)=>{switch(a){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:ce()}}),new cc(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=$w()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ge(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class QD{constructor(e){this.Be=e,this.Le=new Map,this.ke=Sn(),this.qe=Mh(),this.Qe=Mh(),this.Ke=new Xe(Ae)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const r=this.ze(t);switch(e.state){case 0:this.je(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.je(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),r.De(e.resumeToken));break;default:ce()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Le.forEach((r,s)=>{this.je(s)&&t(s)})}Je(e){const t=e.targetId,r=e.me.count,s=this.Ye(t);if(s){const a=s.target;if(yd(a))if(r===0){const u=new se(a.path);this.We(t,u,tt.newNoDocument(u,ve.min()))}else ge(r===1);else{const u=this.Ze(t);if(u!==r){const h=this.Xe(e),f=h?this.et(h,e,u):1;if(f!==0){this.He(t);const p=f===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,p)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:a=0}=t;let u,h;try{u=mi(r).toUint8Array()}catch(f){if(f instanceof kT)return Nr("Decoding the base64 bloom filter in existence filter failed ("+f.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw f}try{h=new Sg(u,s,a)}catch(f){return Nr(f instanceof Il?"BloomFilter error: ":"Applying bloom filter failed: ",f),null}return h.Te===0?null:h}et(e,t,r){return t.me.count===r-this.rt(e,t.targetId)?0:2}rt(e,t){const r=this.Be.getRemoteKeysForTarget(t);let s=0;return r.forEach(a=>{const u=this.Be.nt(),h=`projects/${u.projectId}/databases/${u.database}/documents/${a.path.canonicalString()}`;e.mightContain(h)||(this.We(t,a,null),s++)}),s}it(e){const t=new Map;this.Le.forEach((a,u)=>{const h=this.Ye(u);if(h){if(a.current&&yd(h.target)){const f=new se(h.target.path);this.st(f).has(u)||this.ot(u,f)||this.We(u,f,tt.newNoDocument(f,e))}a.be&&(t.set(u,a.ve()),a.Ce())}});let r=Pe();this.Qe.forEach((a,u)=>{let h=!0;u.forEachWhile(f=>{const p=this.Ye(f);return!p||p.purpose==="TargetPurposeLimboResolution"||(h=!1,!1)}),h&&(r=r.add(a))}),this.ke.forEach((a,u)=>u.setReadTime(e));const s=new lc(e,t,this.Ke,this.ke,r);return this.ke=Sn(),this.qe=Mh(),this.Qe=Mh(),this.Ke=new Xe(Ae),s}Ue(e,t){if(!this.je(e))return;const r=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,r){if(!this.je(e))return;const s=this.ze(e);this.ot(e,t)?s.Fe(t,1):s.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Le.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Le.get(e);return t||(t=new jw,this.Le.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new We(Ae),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new We(Ae),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||Z("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Le.get(e);return t&&t.Se?null:this.Be.ut(e)}He(e){this.Le.set(e,new jw),this.Be.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Be.getRemoteKeysForTarget(e).has(t)}}function Mh(){return new Xe(se.comparator)}function $w(){return new Xe(se.comparator)}const JD={asc:"ASCENDING",desc:"DESCENDING"},YD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},XD={and:"AND",or:"OR"};class ZD{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Cm(n,e){return n.useProto3Json||ic(e)?e:{value:e}}function Qa(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function oS(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function e1(n,e){return Qa(n,e.toTimestamp())}function wt(n){return ge(!!n),ve.fromTimestamp(function(t){const r=pi(t);return new ut(r.seconds,r.nanos)}(n))}function Rg(n,e){return km(n,e).canonicalString()}function km(n,e){const t=function(s){return new De(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function aS(n){const e=De.fromString(n);return ge(_S(e)),e}function jl(n,e){return Rg(n.databaseId,e.path)}function br(n,e){const t=aS(e);if(t.get(1)!==n.databaseId.projectId)throw new Y(q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new Y(q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new se(cS(t))}function uS(n,e){return Rg(n.databaseId,e)}function lS(n){const e=aS(n);return e.length===4?De.emptyPath():cS(e)}function xm(n){return new De(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function cS(n){return ge(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function qw(n,e,t){return{name:jl(n,e),fields:t.value.mapValue.fields}}function hS(n,e,t){const r=br(n,e.name),s=wt(e.updateTime),a=e.createTime?wt(e.createTime):ve.min(),u=new qt({mapValue:{fields:e.fields}}),h=tt.newFoundDocument(r,s,a,u);return t&&h.setHasCommittedMutations(),t?h.setHasCommittedMutations():h}function t1(n,e){return"found"in e?function(r,s){ge(!!s.found),s.found.name,s.found.updateTime;const a=br(r,s.found.name),u=wt(s.found.updateTime),h=s.found.createTime?wt(s.found.createTime):ve.min(),f=new qt({mapValue:{fields:s.found.fields}});return tt.newFoundDocument(a,u,h,f)}(n,e):"missing"in e?function(r,s){ge(!!s.missing),ge(!!s.readTime);const a=br(r,s.missing),u=wt(s.readTime);return tt.newNoDocument(a,u)}(n,e):ce()}function n1(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(p){return p==="NO_CHANGE"?0:p==="ADD"?1:p==="REMOVE"?2:p==="CURRENT"?3:p==="RESET"?4:ce()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],a=function(p,y){return p.useProto3Json?(ge(y===void 0||typeof y=="string"),mt.fromBase64String(y||"")):(ge(y===void 0||y instanceof Buffer||y instanceof Uint8Array),mt.fromUint8Array(y||new Uint8Array))}(n,e.targetChange.resumeToken),u=e.targetChange.cause,h=u&&function(p){const y=p.code===void 0?q.UNKNOWN:nS(p.code);return new Y(y,p.message||"")}(u);t=new sS(r,s,a,h||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=br(n,r.document.name),a=wt(r.document.updateTime),u=r.document.createTime?wt(r.document.createTime):ve.min(),h=new qt({mapValue:{fields:r.document.fields}}),f=tt.newFoundDocument(s,a,u,h),p=r.targetIds||[],y=r.removedTargetIds||[];t=new sd(p,y,f.key,f)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=br(n,r.document),a=r.readTime?wt(r.readTime):ve.min(),u=tt.newNoDocument(s,a),h=r.removedTargetIds||[];t=new sd([],h,u.key,u)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=br(n,r.document),a=r.removedTargetIds||[];t=new sd([],a,s,null)}else{if(!("filter"in e))return ce();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:a}=r,u=new KD(s,a),h=r.targetId;t=new iS(h,u)}}return t}function $l(n,e){let t;if(e instanceof uu)t={update:qw(n,e.key,e.value)};else if(e instanceof lu)t={delete:jl(n,e.key)};else if(e instanceof Ii)t={update:qw(n,e.key,e.data),updateMask:u1(e.fieldMask)};else{if(!(e instanceof wg))return ce();t={verify:jl(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(a,u){const h=u.transform;if(h instanceof Ka)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(h instanceof yo)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:h.elements}};if(h instanceof vo)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:h.elements}};if(h instanceof Ha)return{fieldPath:u.field.canonicalString(),increment:h.Pe};throw ce()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,a){return a.updateTime!==void 0?{updateTime:e1(s,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:ce()}(n,e.precondition)),t}function bm(n,e){const t=e.currentDocument?function(a){return a.updateTime!==void 0?at.updateTime(wt(a.updateTime)):a.exists!==void 0?at.exists(a.exists):at.none()}(e.currentDocument):at.none(),r=e.updateTransforms?e.updateTransforms.map(s=>function(u,h){let f=null;if("setToServerValue"in h)ge(h.setToServerValue==="REQUEST_TIME"),f=new Ka;else if("appendMissingElements"in h){const y=h.appendMissingElements.values||[];f=new yo(y)}else if("removeAllFromArray"in h){const y=h.removeAllFromArray.values||[];f=new vo(y)}else"increment"in h?f=new Ha(u,h.increment):ce();const p=ot.fromServerFormat(h.fieldPath);return new uc(p,f)}(n,s)):[];if(e.update){e.update.name;const s=br(n,e.update.name),a=new qt({mapValue:{fields:e.update.fields}});if(e.updateMask){const u=function(f){const p=f.fieldPaths||[];return new Tn(p.map(y=>ot.fromServerFormat(y)))}(e.updateMask);return new Ii(s,a,u,t,r)}return new uu(s,a,t,r)}if(e.delete){const s=br(n,e.delete);return new lu(s,t)}if(e.verify){const s=br(n,e.verify);return new wg(s,t)}return ce()}function r1(n,e){return n&&n.length>0?(ge(e!==void 0),n.map(t=>function(s,a){let u=s.updateTime?wt(s.updateTime):wt(a);return u.isEqual(ve.min())&&(u=wt(a)),new qD(u,s.transformResults||[])}(t,e))):[]}function dS(n,e){return{documents:[uS(n,e.path)]}}function fS(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=uS(n,s);const a=function(p){if(p.length!==0)return gS(Ge.create(p,"and"))}(e.filters);a&&(t.structuredQuery.where=a);const u=function(p){if(p.length!==0)return p.map(y=>function(I){return{field:ba(I.field),direction:s1(I.dir)}}(y))}(e.orderBy);u&&(t.structuredQuery.orderBy=u);const h=Cm(n,e.limit);return h!==null&&(t.structuredQuery.limit=h),e.startAt&&(t.structuredQuery.startAt=function(p){return{before:p.inclusive,values:p.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(p){return{before:!p.inclusive,values:p.position}}(e.endAt)),{ct:t,parent:s}}function pS(n){let e=lS(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){ge(r===1);const y=t.from[0];y.allDescendants?s=y.collectionId:e=e.child(y.collectionId)}let a=[];t.where&&(a=function(w){const I=mS(w);return I instanceof Ge&&gg(I)?I.getFilters():[I]}(t.where));let u=[];t.orderBy&&(u=function(w){return w.map(I=>function(k){return new zl(Da(k.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(I))}(t.orderBy));let h=null;t.limit&&(h=function(w){let I;return I=typeof w=="object"?w.value:w,ic(I)?null:I}(t.limit));let f=null;t.startAt&&(f=function(w){const I=!!w.before,R=w.values||[];return new ms(R,I)}(t.startAt));let p=null;return t.endAt&&(p=function(w){const I=!w.before,R=w.values||[];return new ms(R,I)}(t.endAt)),BT(e,s,u,a,h,"F",f,p)}function i1(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ce()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function mS(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Da(t.unaryFilter.field);return Ne.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Da(t.unaryFilter.field);return Ne.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=Da(t.unaryFilter.field);return Ne.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=Da(t.unaryFilter.field);return Ne.create(u,"!=",{nullValue:"NULL_VALUE"});default:return ce()}}(n):n.fieldFilter!==void 0?function(t){return Ne.create(Da(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ce()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Ge.create(t.compositeFilter.filters.map(r=>mS(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ce()}}(t.compositeFilter.op))}(n):ce()}function s1(n){return JD[n]}function o1(n){return YD[n]}function a1(n){return XD[n]}function ba(n){return{fieldPath:n.canonicalString()}}function Da(n){return ot.fromServerFormat(n.fieldPath)}function gS(n){return n instanceof Ne?function(t){if(t.op==="=="){if(Cw(t.value))return{unaryFilter:{field:ba(t.field),op:"IS_NAN"}};if(Pw(t.value))return{unaryFilter:{field:ba(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Cw(t.value))return{unaryFilter:{field:ba(t.field),op:"IS_NOT_NAN"}};if(Pw(t.value))return{unaryFilter:{field:ba(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ba(t.field),op:o1(t.op),value:t.value}}}(n):n instanceof Ge?function(t){const r=t.getFilters().map(s=>gS(s));return r.length===1?r[0]:{compositeFilter:{op:a1(t.op),filters:r}}}(n):ce()}function u1(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function _S(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,t,r,s,a=ve.min(),u=ve.min(),h=mt.EMPTY_BYTE_STRING,f=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=h,this.expectedCount=f}withSequenceNumber(e){return new ai(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ai(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ai(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ai(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS{constructor(e){this.ht=e}}function l1(n,e){let t;if(e.document)t=hS(n.ht,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=se.fromSegments(e.noDocument.path),s=Eo(e.noDocument.readTime);t=tt.newNoDocument(r,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return ce();{const r=se.fromSegments(e.unknownDocument.path),s=Eo(e.unknownDocument.version);t=tt.newUnknownDocument(r,s)}}return e.readTime&&t.setReadTime(function(s){const a=new ut(s[0],s[1]);return ve.fromTimestamp(a)}(e.readTime)),t}function Gw(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Ed(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(a,u){return{name:jl(a,u.key),fields:u.data.value.mapValue.fields,updateTime:Qa(a,u.version.toTimestamp()),createTime:Qa(a,u.createTime.toTimestamp())}}(n.ht,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:wo(e.version)};else{if(!e.isUnknownDocument())return ce();r.unknownDocument={path:t.path.toArray(),version:wo(e.version)}}return r}function Ed(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function wo(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Eo(n){const e=new ut(n.seconds,n.nanoseconds);return ve.fromTimestamp(e)}function io(n,e){const t=(e.baseMutations||[]).map(a=>bm(n.ht,a));for(let a=0;a<e.mutations.length-1;++a){const u=e.mutations[a];if(a+1<e.mutations.length&&e.mutations[a+1].transform!==void 0){const h=e.mutations[a+1];u.updateTransforms=h.transform.fieldTransforms,e.mutations.splice(a+1,1),++a}}const r=e.mutations.map(a=>bm(n.ht,a)),s=ut.fromMillis(e.localWriteTimeMs);return new Eg(e.batchId,s,t,r)}function Tl(n){const e=Eo(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?Eo(n.lastLimboFreeSnapshotVersion):ve.min();let r;return r=function(a){return a.documents!==void 0}(n.query)?function(a){return ge(a.documents.length===1),dn(au(lS(a.documents[0])))}(n.query):function(a){return dn(pS(a))}(n.query),new ai(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,mt.fromBase64String(n.resumeToken))}function vS(n,e){const t=wo(e.snapshotVersion),r=wo(e.lastLimboFreeSnapshotVersion);let s;s=yd(e.target)?dS(n.ht,e.target):fS(n.ht,e.target).ct;const a=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:_o(e.target),readTime:t,resumeToken:a,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:s}}function Ag(n){const e=pS({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?wd(e,e.limit,"L"):e}function tm(n,e){return new Tg(e.largestBatchId,bm(n.ht,e.overlayMutation))}function Ww(n,e){const t=e.path.lastSegment();return[n,tn(e.path.popLast()),t]}function Kw(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:wo(r.readTime),documentKey:tn(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c1{getBundleMetadata(e,t){return Hw(e).get(t).next(r=>{if(r)return function(a){return{id:a.bundleId,createTime:Eo(a.createTime),version:a.version}}(r)})}saveBundleMetadata(e,t){return Hw(e).put(function(s){return{bundleId:s.id,createTime:wo(wt(s.createTime)),version:s.version}}(t))}getNamedQuery(e,t){return Qw(e).get(t).next(r=>{if(r)return function(a){return{name:a.name,query:Ag(a.bundledQuery),readTime:Eo(a.readTime)}}(r)})}saveNamedQuery(e,t){return Qw(e).put(function(s){return{name:s.name,readTime:wo(wt(s.readTime)),bundledQuery:s.bundledQuery}}(t))}}function Hw(n){return bt(n,"bundles")}function Qw(n){return bt(n,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(e,t){this.serializer=e,this.userId=t}static Pt(e,t){const r=t.uid||"";return new Wd(e,r)}getOverlay(e,t){return dl(e).get(Ww(this.userId,t)).next(r=>r?tm(this.serializer,r):null)}getOverlays(e,t){const r=Cr();return U.forEach(t,s=>this.getOverlay(e,s).next(a=>{a!==null&&r.set(s,a)})).next(()=>r)}saveOverlays(e,t,r){const s=[];return r.forEach((a,u)=>{const h=new Tg(t,u);s.push(this.Tt(e,h))}),U.waitFor(s)}removeOverlaysForBatchId(e,t,r){const s=new Set;t.forEach(u=>s.add(tn(u.getCollectionPath())));const a=[];return s.forEach(u=>{const h=IDBKeyRange.bound([this.userId,u,r],[this.userId,u,r+1],!1,!0);a.push(dl(e).j("collectionPathOverlayIndex",h))}),U.waitFor(a)}getOverlaysForCollection(e,t,r){const s=Cr(),a=tn(t),u=IDBKeyRange.bound([this.userId,a,r],[this.userId,a,Number.POSITIVE_INFINITY],!0);return dl(e).U("collectionPathOverlayIndex",u).next(h=>{for(const f of h){const p=tm(this.serializer,f);s.set(p.getKey(),p)}return s})}getOverlaysForCollectionGroup(e,t,r,s){const a=Cr();let u;const h=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return dl(e).J({index:"collectionGroupOverlayIndex",range:h},(f,p,y)=>{const w=tm(this.serializer,p);a.size()<s||w.largestBatchId===u?(a.set(w.getKey(),w),u=w.largestBatchId):y.done()}).next(()=>a)}Tt(e,t){return dl(e).put(function(s,a,u){const[h,f,p]=Ww(a,u.mutation.key);return{userId:a,collectionPath:f,documentId:p,collectionGroup:u.mutation.key.getCollectionGroup(),largestBatchId:u.largestBatchId,overlayMutation:$l(s.ht,u.mutation)}}(this.serializer,this.userId,t))}}function dl(n){return bt(n,"documentOverlays")}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h1{It(e){return bt(e,"globals")}getSessionToken(e){return this.It(e).get("sessionToken").next(t=>{const r=t==null?void 0:t.value;return r?mt.fromUint8Array(r):mt.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.It(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(){}dt(e,t){this.Et(e,t),t.At()}Et(e,t){if("nullValue"in e)this.Rt(t,5);else if("booleanValue"in e)this.Rt(t,10),t.Vt(e.booleanValue?1:0);else if("integerValue"in e)this.Rt(t,15),t.Vt(st(e.integerValue));else if("doubleValue"in e){const r=st(e.doubleValue);isNaN(r)?this.Rt(t,13):(this.Rt(t,15),Ml(r)?t.Vt(0):t.Vt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Rt(t,20),typeof r=="string"&&(r=pi(r)),t.ft(`${r.seconds||""}`),t.Vt(r.nanos||0)}else if("stringValue"in e)this.gt(e.stringValue,t),this.yt(t);else if("bytesValue"in e)this.Rt(t,30),t.wt(mi(e.bytesValue)),this.yt(t);else if("referenceValue"in e)this.St(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.Rt(t,45),t.Vt(r.latitude||0),t.Vt(r.longitude||0)}else"mapValue"in e?xT(e)?this.Rt(t,Number.MAX_SAFE_INTEGER):$d(e)?this.bt(e.mapValue,t):(this.Dt(e.mapValue,t),this.yt(t)):"arrayValue"in e?(this.vt(e.arrayValue,t),this.yt(t)):ce()}gt(e,t){this.Rt(t,25),this.Ct(e,t)}Ct(e,t){t.ft(e)}Dt(e,t){const r=e.fields||{};this.Rt(t,55);for(const s of Object.keys(r))this.gt(s,t),this.Et(r[s],t)}bt(e,t){var r,s;const a=e.fields||{};this.Rt(t,53);const u="value",h=((s=(r=a[u].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.length)||0;this.Rt(t,15),t.Vt(st(h)),this.gt(u,t),this.Et(a[u],t)}vt(e,t){const r=e.values||[];this.Rt(t,50);for(const s of r)this.Et(s,t)}St(e,t){this.Rt(t,37),se.fromName(e).path.forEach(r=>{this.Rt(t,60),this.Ct(r,t)})}Rt(e,t){e.Vt(t)}yt(e){e.Vt(2)}}so.Ft=new so;function d1(n){if(n===0)return 8;let e=0;return!(n>>4)&&(e+=4,n<<=4),!(n>>6)&&(e+=2,n<<=2),!(n>>7)&&(e+=1),e}function Jw(n){const e=64-function(r){let s=0;for(let a=0;a<8;++a){const u=d1(255&r[a]);if(s+=u,u!==8)break}return s}(n);return Math.ceil(e/8)}class f1{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Mt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.xt(r.value),r=t.next();this.Ot()}Nt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Bt(r.value),r=t.next();this.Lt()}kt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.xt(r);else if(r<2048)this.xt(960|r>>>6),this.xt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.xt(480|r>>>12),this.xt(128|63&r>>>6),this.xt(128|63&r);else{const s=t.codePointAt(0);this.xt(240|s>>>18),this.xt(128|63&s>>>12),this.xt(128|63&s>>>6),this.xt(128|63&s)}}this.Ot()}qt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Bt(r);else if(r<2048)this.Bt(960|r>>>6),this.Bt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Bt(480|r>>>12),this.Bt(128|63&r>>>6),this.Bt(128|63&r);else{const s=t.codePointAt(0);this.Bt(240|s>>>18),this.Bt(128|63&s>>>12),this.Bt(128|63&s>>>6),this.Bt(128|63&s)}}this.Lt()}Qt(e){const t=this.Kt(e),r=Jw(t);this.$t(1+r),this.buffer[this.position++]=255&r;for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=255&t[s]}Ut(e){const t=this.Kt(e),r=Jw(t);this.$t(1+r),this.buffer[this.position++]=~(255&r);for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}Wt(){this.Gt(255),this.Gt(255)}zt(){this.jt(255),this.jt(255)}reset(){this.position=0}seed(e){this.$t(e.length),this.buffer.set(e,this.position),this.position+=e.length}Ht(){return this.buffer.slice(0,this.position)}Kt(e){const t=function(a){const u=new DataView(new ArrayBuffer(8));return u.setFloat64(0,a,!1),new Uint8Array(u.buffer)}(e),r=(128&t[0])!=0;t[0]^=r?255:128;for(let s=1;s<t.length;++s)t[s]^=r?255:0;return t}xt(e){const t=255&e;t===0?(this.Gt(0),this.Gt(255)):t===255?(this.Gt(255),this.Gt(0)):this.Gt(t)}Bt(e){const t=255&e;t===0?(this.jt(0),this.jt(255)):t===255?(this.jt(255),this.jt(0)):this.jt(e)}Ot(){this.Gt(0),this.Gt(1)}Lt(){this.jt(0),this.jt(1)}Gt(e){this.$t(1),this.buffer[this.position++]=e}jt(e){this.$t(1),this.buffer[this.position++]=~e}$t(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const s=new Uint8Array(r);s.set(this.buffer),this.buffer=s}}class p1{constructor(e){this.Jt=e}wt(e){this.Jt.Mt(e)}ft(e){this.Jt.kt(e)}Vt(e){this.Jt.Qt(e)}At(){this.Jt.Wt()}}class m1{constructor(e){this.Jt=e}wt(e){this.Jt.Nt(e)}ft(e){this.Jt.qt(e)}Vt(e){this.Jt.Ut(e)}At(){this.Jt.zt()}}class fl{constructor(){this.Jt=new f1,this.Yt=new p1(this.Jt),this.Zt=new m1(this.Jt)}seed(e){this.Jt.seed(e)}Xt(e){return e===0?this.Yt:this.Zt}Ht(){return this.Jt.Ht()}reset(){this.Jt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e,t,r,s){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=s}en(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new oo(this.indexId,this.documentKey,this.arrayValue,r)}}function Yi(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=Yw(n.arrayValue,e.arrayValue),t!==0?t:(t=Yw(n.directionalValue,e.directionalValue),t!==0?t:se.comparator(n.documentKey,e.documentKey)))}function Yw(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(e){this.tn=new We((t,r)=>ot.comparator(t.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.nn=e.orderBy,this.rn=[];for(const t of e.filters){const r=t;r.isInequality()?this.tn=this.tn.add(r):this.rn.push(r)}}get sn(){return this.tn.size>1}on(e){if(ge(e.collectionGroup===this.collectionId),this.sn)return!1;const t=wm(e);if(t!==void 0&&!this._n(t))return!1;const r=no(e);let s=new Set,a=0,u=0;for(;a<r.length&&this._n(r[a]);++a)s=s.add(r[a].fieldPath.canonicalString());if(a===r.length)return!0;if(this.tn.size>0){const h=this.tn.getIterator().getNext();if(!s.has(h.field.canonicalString())){const f=r[a];if(!this.an(h,f)||!this.un(this.nn[u++],f))return!1}++a}for(;a<r.length;++a){const h=r[a];if(u>=this.nn.length||!this.un(this.nn[u++],h))return!1}return!0}cn(){if(this.sn)return null;let e=new We(ot.comparator);const t=[];for(const r of this.rn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new Zh(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new Zh(r.field,0))}for(const r of this.nn)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new Zh(r.field,r.dir==="asc"?0:1)));return new _d(_d.UNKNOWN_ID,this.collectionId,t,Ll.empty())}_n(e){for(const t of this.rn)if(this.an(t,e))return!0;return!1}an(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}un(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wS(n){var e,t;if(ge(n instanceof Ne||n instanceof Ge),n instanceof Ne){if(n instanceof UT){const s=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(a=>Ne.create(n.field,"==",a)))||[];return Ge.create(s,"or")}return n}const r=n.filters.map(s=>wS(s));return Ge.create(r,n.op)}function g1(n){if(n.getFilters().length===0)return[];const e=Vm(wS(n));return ge(ES(e)),Dm(e)||Nm(e)?[e]:e.getFilters()}function Dm(n){return n instanceof Ne}function Nm(n){return n instanceof Ge&&gg(n)}function ES(n){return Dm(n)||Nm(n)||function(t){if(t instanceof Ge&&Sm(t)){for(const r of t.getFilters())if(!Dm(r)&&!Nm(r))return!1;return!0}return!1}(n)}function Vm(n){if(ge(n instanceof Ne||n instanceof Ge),n instanceof Ne)return n;if(n.filters.length===1)return Vm(n.filters[0]);const e=n.filters.map(r=>Vm(r));let t=Ge.create(e,n.op);return t=Id(t),ES(t)?t:(ge(t instanceof Ge),ge(Wa(t)),ge(t.filters.length>1),t.filters.reduce((r,s)=>Pg(r,s)))}function Pg(n,e){let t;return ge(n instanceof Ne||n instanceof Ge),ge(e instanceof Ne||e instanceof Ge),t=n instanceof Ne?e instanceof Ne?function(s,a){return Ge.create([s,a],"and")}(n,e):Zw(n,e):e instanceof Ne?Zw(e,n):function(s,a){if(ge(s.filters.length>0&&a.filters.length>0),Wa(s)&&Wa(a))return LT(s,a.getFilters());const u=Sm(s)?s:a,h=Sm(s)?a:s,f=u.filters.map(p=>Pg(p,h));return Ge.create(f,"or")}(n,e),Id(t)}function Zw(n,e){if(Wa(e))return LT(e,n.getFilters());{const t=e.filters.map(r=>Pg(n,r));return Ge.create(t,"or")}}function Id(n){if(ge(n instanceof Ne||n instanceof Ge),n instanceof Ne)return n;const e=n.getFilters();if(e.length===1)return Id(e[0]);if(VT(n))return n;const t=e.map(s=>Id(s)),r=[];return t.forEach(s=>{s instanceof Ne?r.push(s):s instanceof Ge&&(s.op===n.op?r.push(...s.filters):r.push(s))}),r.length===1?r[0]:Ge.create(r,n.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _1{constructor(){this.ln=new Cg}addToCollectionParentIndex(e,t){return this.ln.add(t),U.resolve()}getCollectionParents(e,t){return U.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return U.resolve()}deleteFieldIndex(e,t){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,t){return U.resolve()}getDocumentsMatchingTarget(e,t){return U.resolve(null)}getIndexType(e,t){return U.resolve(0)}getFieldIndexes(e,t){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,t){return U.resolve(Nn.min())}getMinOffsetFromCollectionGroup(e,t){return U.resolve(Nn.min())}updateCollectionGroup(e,t,r){return U.resolve()}updateIndexEntries(e,t){return U.resolve()}}class Cg{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new We(De.comparator),a=!s.has(r);return this.index[t]=s.add(r),a}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new We(De.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fh=new Uint8Array(0);class y1{constructor(e,t){this.databaseId=t,this.hn=new Cg,this.Pn=new Ei(r=>_o(r),(r,s)=>sc(r,s)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.hn.has(t)){const r=t.lastSegment(),s=t.popLast();e.addOnCommittedListener(()=>{this.hn.add(t)});const a={collectionId:r,parent:tn(s)};return eE(e).put(a)}return U.resolve()}getCollectionParents(e,t){const r=[],s=IDBKeyRange.bound([t,""],[_T(t),""],!1,!0);return eE(e).U(s).next(a=>{for(const u of a){if(u.collectionId!==t)break;r.push(Pr(u.parent))}return r})}addFieldIndex(e,t){const r=pl(e),s=function(h){return{indexId:h.indexId,collectionGroup:h.collectionGroup,fields:h.fields.map(f=>[f.fieldPath.canonicalString(),f.kind])}}(t);delete s.indexId;const a=r.add(s);if(t.indexState){const u=Aa(e);return a.next(h=>{u.put(Kw(h,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return a.next()}deleteFieldIndex(e,t){const r=pl(e),s=Aa(e),a=Ra(e);return r.delete(t.indexId).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>a.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=pl(e),r=Ra(e),s=Aa(e);return t.j().next(()=>r.j()).next(()=>s.j())}createTargetIndexes(e,t){return U.forEach(this.Tn(t),r=>this.getIndexType(e,r).next(s=>{if(s===0||s===1){const a=new Xw(r).cn();if(a!=null)return this.addFieldIndex(e,a)}}))}getDocumentsMatchingTarget(e,t){const r=Ra(e);let s=!0;const a=new Map;return U.forEach(this.Tn(t),u=>this.In(e,u).next(h=>{s&&(s=!!h),a.set(u,h)})).next(()=>{if(s){let u=Pe();const h=[];return U.forEach(a,(f,p)=>{Z("IndexedDbIndexManager",`Using index ${function(Q){return`id=${Q.indexId}|cg=${Q.collectionGroup}|f=${Q.fields.map(re=>`${re.fieldPath}:${re.kind}`).join(",")}`}(f)} to execute ${_o(t)}`);const y=function(Q,re){const me=wm(re);if(me===void 0)return null;for(const de of vd(Q,me.fieldPath))switch(de.op){case"array-contains-any":return de.value.arrayValue.values||[];case"array-contains":return[de.value]}return null}(p,f),w=function(Q,re){const me=new Map;for(const de of no(re))for(const x of vd(Q,de.fieldPath))switch(x.op){case"==":case"in":me.set(de.fieldPath.canonicalString(),x.value);break;case"not-in":case"!=":return me.set(de.fieldPath.canonicalString(),x.value),Array.from(me.values())}return null}(p,f),I=function(Q,re){const me=[];let de=!0;for(const x of no(re)){const S=x.kind===0?Nw(Q,x.fieldPath,Q.startAt):Vw(Q,x.fieldPath,Q.startAt);me.push(S.value),de&&(de=S.inclusive)}return new ms(me,de)}(p,f),R=function(Q,re){const me=[];let de=!0;for(const x of no(re)){const S=x.kind===0?Vw(Q,x.fieldPath,Q.endAt):Nw(Q,x.fieldPath,Q.endAt);me.push(S.value),de&&(de=S.inclusive)}return new ms(me,de)}(p,f),k=this.dn(f,p,I),L=this.dn(f,p,R),D=this.En(f,p,w),G=this.An(f.indexId,y,k,I.inclusive,L,R.inclusive,D);return U.forEach(G,K=>r.G(K,t.limit).next(Q=>{Q.forEach(re=>{const me=se.fromSegments(re.documentKey);u.has(me)||(u=u.add(me),h.push(me))})}))}).next(()=>h)}return U.resolve(null)})}Tn(e){let t=this.Pn.get(e);return t||(e.filters.length===0?t=[e]:t=g1(Ge.create(e.filters,"and")).map(r=>Am(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.Pn.set(e,t),t)}An(e,t,r,s,a,u,h){const f=(t!=null?t.length:1)*Math.max(r.length,a.length),p=f/(t!=null?t.length:1),y=[];for(let w=0;w<f;++w){const I=t?this.Rn(t[w/p]):Fh,R=this.Vn(e,I,r[w%p],s),k=this.mn(e,I,a[w%p],u),L=h.map(D=>this.Vn(e,I,D,!0));y.push(...this.createRange(R,k,L))}return y}Vn(e,t,r,s){const a=new oo(e,se.empty(),t,r);return s?a:a.en()}mn(e,t,r,s){const a=new oo(e,se.empty(),t,r);return s?a.en():a}In(e,t){const r=new Xw(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next(a=>{let u=null;for(const h of a)r.on(h)&&(!u||h.fields.length>u.fields.length)&&(u=h);return u})}getIndexType(e,t){let r=2;const s=this.Tn(t);return U.forEach(s,a=>this.In(e,a).next(u=>{u?r!==0&&u.fields.length<function(f){let p=new We(ot.comparator),y=!1;for(const w of f.filters)for(const I of w.getFlattenedFilters())I.field.isKeyField()||(I.op==="array-contains"||I.op==="array-contains-any"?y=!0:p=p.add(I.field));for(const w of f.orderBy)w.field.isKeyField()||(p=p.add(w.field));return p.size+(y?1:0)}(a)&&(r=1):r=0})).next(()=>function(u){return u.limit!==null}(t)&&s.length>1&&r===2?1:r)}fn(e,t){const r=new fl;for(const s of no(e)){const a=t.data.field(s.fieldPath);if(a==null)return null;const u=r.Xt(s.kind);so.Ft.dt(a,u)}return r.Ht()}Rn(e){const t=new fl;return so.Ft.dt(e,t.Xt(0)),t.Ht()}gn(e,t){const r=new fl;return so.Ft.dt(go(this.databaseId,t),r.Xt(function(a){const u=no(a);return u.length===0?0:u[u.length-1].kind}(e))),r.Ht()}En(e,t,r){if(r===null)return[];let s=[];s.push(new fl);let a=0;for(const u of no(e)){const h=r[a++];for(const f of s)if(this.pn(t,u.fieldPath)&&Bl(h))s=this.yn(s,u,h);else{const p=f.Xt(u.kind);so.Ft.dt(h,p)}}return this.wn(s)}dn(e,t,r){return this.En(e,t,r.position)}wn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].Ht();return t}yn(e,t,r){const s=[...e],a=[];for(const u of r.arrayValue.values||[])for(const h of s){const f=new fl;f.seed(h.Ht()),so.Ft.dt(u,f.Xt(t.kind)),a.push(f)}return a}pn(e,t){return!!e.filters.find(r=>r instanceof Ne&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=pl(e),s=Aa(e);return(t?r.U("collectionGroupIndex",IDBKeyRange.bound(t,t)):r.U()).next(a=>{const u=[];return U.forEach(a,h=>s.get([h.indexId,this.uid]).next(f=>{u.push(function(y,w){const I=w?new Ll(w.sequenceNumber,new Nn(Eo(w.readTime),new se(Pr(w.documentKey)),w.largestBatchId)):Ll.empty(),R=y.fields.map(([k,L])=>new Zh(ot.fromServerFormat(k),L));return new _d(y.indexId,y.collectionGroup,R,I)}(h,f))})).next(()=>u)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,s)=>{const a=r.indexState.sequenceNumber-s.indexState.sequenceNumber;return a!==0?a:Ae(r.collectionGroup,s.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const s=pl(e),a=Aa(e);return this.Sn(e).next(u=>s.U("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(h=>U.forEach(h,f=>a.put(Kw(f.indexId,this.uid,u,r)))))}updateIndexEntries(e,t){const r=new Map;return U.forEach(t,(s,a)=>{const u=r.get(s.collectionGroup);return(u?U.resolve(u):this.getFieldIndexes(e,s.collectionGroup)).next(h=>(r.set(s.collectionGroup,h),U.forEach(h,f=>this.bn(e,s,f).next(p=>{const y=this.Dn(a,f);return p.isEqual(y)?U.resolve():this.vn(e,a,f,p,y)}))))})}Cn(e,t,r,s){return Ra(e).put({indexId:s.indexId,uid:this.uid,arrayValue:s.arrayValue,directionalValue:s.directionalValue,orderedDocumentKey:this.gn(r,t.key),documentKey:t.key.path.toArray()})}Fn(e,t,r,s){return Ra(e).delete([s.indexId,this.uid,s.arrayValue,s.directionalValue,this.gn(r,t.key),t.key.path.toArray()])}bn(e,t,r){const s=Ra(e);let a=new We(Yi);return s.J({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.gn(r,t)])},(u,h)=>{a=a.add(new oo(r.indexId,t,h.arrayValue,h.directionalValue))}).next(()=>a)}Dn(e,t){let r=new We(Yi);const s=this.fn(t,e);if(s==null)return r;const a=wm(t);if(a!=null){const u=e.data.field(a.fieldPath);if(Bl(u))for(const h of u.arrayValue.values||[])r=r.add(new oo(t.indexId,e.key,this.Rn(h),s))}else r=r.add(new oo(t.indexId,e.key,Fh,s));return r}vn(e,t,r,s,a){Z("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const u=[];return function(f,p,y,w,I){const R=f.getIterator(),k=p.getIterator();let L=Sa(R),D=Sa(k);for(;L||D;){let G=!1,K=!1;if(L&&D){const Q=y(L,D);Q<0?K=!0:Q>0&&(G=!0)}else L!=null?K=!0:G=!0;G?(w(D),D=Sa(k)):K?(I(L),L=Sa(R)):(L=Sa(R),D=Sa(k))}}(s,a,Yi,h=>{u.push(this.Cn(e,t,r,h))},h=>{u.push(this.Fn(e,t,r,h))}),U.waitFor(u)}Sn(e){let t=1;return Aa(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,s,a)=>{a.done(),t=s.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((u,h)=>Yi(u,h)).filter((u,h,f)=>!h||Yi(u,f[h-1])!==0);const s=[];s.push(e);for(const u of r){const h=Yi(u,e),f=Yi(u,t);if(h===0)s[0]=e.en();else if(h>0&&f<0)s.push(u),s.push(u.en());else if(f>0)break}s.push(t);const a=[];for(let u=0;u<s.length;u+=2){if(this.Mn(s[u],s[u+1]))return[];const h=[s[u].indexId,this.uid,s[u].arrayValue,s[u].directionalValue,Fh,[]],f=[s[u+1].indexId,this.uid,s[u+1].arrayValue,s[u+1].directionalValue,Fh,[]];a.push(IDBKeyRange.bound(h,f))}return a}Mn(e,t){return Yi(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(tE)}getMinOffset(e,t){return U.mapArray(this.Tn(t),r=>this.In(e,r).next(s=>s||ce())).next(tE)}}function eE(n){return bt(n,"collectionParents")}function Ra(n){return bt(n,"indexEntries")}function pl(n){return bt(n,"indexConfiguration")}function Aa(n){return bt(n,"indexState")}function tE(n){ge(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const s=n[r].indexState.offset;fg(s,e)<0&&(e=s),t<s.largestBatchId&&(t=s.largestBatchId)}return new Nn(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nE={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Zt{static withCacheSize(e){return new Zt(e,Zt.DEFAULT_COLLECTION_PERCENTILE,Zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IS(n,e,t){const r=n.store("mutations"),s=n.store("documentMutations"),a=[],u=IDBKeyRange.only(t.batchId);let h=0;const f=r.J({range:u},(y,w,I)=>(h++,I.delete()));a.push(f.next(()=>{ge(h===1)}));const p=[];for(const y of t.mutations){const w=ST(e,y.key.path,t.batchId);a.push(s.delete(w)),p.push(y.key)}return U.waitFor(a).next(()=>p)}function Td(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw ce();e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zt.DEFAULT_COLLECTION_PERCENTILE=10,Zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Zt.DEFAULT=new Zt(41943040,Zt.DEFAULT_COLLECTION_PERCENTILE,Zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Zt.DISABLED=new Zt(-1,0,0);class Kd{constructor(e,t,r,s){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=s,this.xn={}}static Pt(e,t,r,s){ge(e.uid!=="");const a=e.isAuthenticated()?e.uid:"";return new Kd(a,t,r,s)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Xi(e).J({index:"userMutationsIndex",range:r},(s,a,u)=>{t=!1,u.done()}).next(()=>t)}addMutationBatch(e,t,r,s){const a=Na(e),u=Xi(e);return u.add({}).next(h=>{ge(typeof h=="number");const f=new Eg(h,t,r,s),p=function(R,k,L){const D=L.baseMutations.map(K=>$l(R.ht,K)),G=L.mutations.map(K=>$l(R.ht,K));return{userId:k,batchId:L.batchId,localWriteTimeMs:L.localWriteTime.toMillis(),baseMutations:D,mutations:G}}(this.serializer,this.userId,f),y=[];let w=new We((I,R)=>Ae(I.canonicalString(),R.canonicalString()));for(const I of s){const R=ST(this.userId,I.key.path,h);w=w.add(I.key.path.popLast()),y.push(u.put(p)),y.push(a.put(R,iD))}return w.forEach(I=>{y.push(this.indexManager.addToCollectionParentIndex(e,I))}),e.addOnCommittedListener(()=>{this.xn[h]=f.keys()}),U.waitFor(y).next(()=>f)})}lookupMutationBatch(e,t){return Xi(e).get(t).next(r=>r?(ge(r.userId===this.userId),io(this.serializer,r)):null)}On(e,t){return this.xn[t]?U.resolve(this.xn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const s=r.keys();return this.xn[t]=s,s}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=IDBKeyRange.lowerBound([this.userId,r]);let a=null;return Xi(e).J({index:"userMutationsIndex",range:s},(u,h,f)=>{h.userId===this.userId&&(ge(h.batchId>=r),a=io(this.serializer,h)),f.done()}).next(()=>a)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Xi(e).J({index:"userMutationsIndex",range:t,reverse:!0},(s,a,u)=>{r=a.batchId,u.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Xi(e).U("userMutationsIndex",t).next(r=>r.map(s=>io(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=ed(this.userId,t.path),s=IDBKeyRange.lowerBound(r),a=[];return Na(e).J({range:s},(u,h,f)=>{const[p,y,w]=u,I=Pr(y);if(p===this.userId&&t.path.isEqual(I))return Xi(e).get(w).next(R=>{if(!R)throw ce();ge(R.userId===this.userId),a.push(io(this.serializer,R))});f.done()}).next(()=>a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new We(Ae);const s=[];return t.forEach(a=>{const u=ed(this.userId,a.path),h=IDBKeyRange.lowerBound(u),f=Na(e).J({range:h},(p,y,w)=>{const[I,R,k]=p,L=Pr(R);I===this.userId&&a.path.isEqual(L)?r=r.add(k):w.done()});s.push(f)}),U.waitFor(s).next(()=>this.Nn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1,a=ed(this.userId,r),u=IDBKeyRange.lowerBound(a);let h=new We(Ae);return Na(e).J({range:u},(f,p,y)=>{const[w,I,R]=f,k=Pr(I);w===this.userId&&r.isPrefixOf(k)?k.length===s&&(h=h.add(R)):y.done()}).next(()=>this.Nn(e,h))}Nn(e,t){const r=[],s=[];return t.forEach(a=>{s.push(Xi(e).get(a).next(u=>{if(u===null)throw ce();ge(u.userId===this.userId),r.push(io(this.serializer,u))}))}),U.waitFor(s).next(()=>r)}removeMutationBatch(e,t){return IS(e._e,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.Bn(t.batchId)}),U.forEach(r,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}Bn(e){delete this.xn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return U.resolve();const r=IDBKeyRange.lowerBound(function(u){return[u]}(this.userId)),s=[];return Na(e).J({range:r},(a,u,h)=>{if(a[0]===this.userId){const f=Pr(a[1]);s.push(f)}else h.done()}).next(()=>{ge(s.length===0)})})}containsKey(e,t){return TS(e,this.userId,t)}Ln(e){return SS(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function TS(n,e,t){const r=ed(e,t.path),s=r[1],a=IDBKeyRange.lowerBound(r);let u=!1;return Na(n).J({range:a,H:!0},(h,f,p)=>{const[y,w,I]=h;y===e&&w===s&&(u=!0),p.done()}).next(()=>u)}function Xi(n){return bt(n,"mutations")}function Na(n){return bt(n,"documentMutations")}function SS(n){return bt(n,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new Io(0)}static Qn(){return new Io(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v1{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.Kn(e).next(t=>{const r=new Io(t.highestTargetId);return t.highestTargetId=r.next(),this.$n(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Kn(e).next(t=>ve.fromTimestamp(new ut(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Kn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.Kn(e).next(s=>(s.highestListenSequenceNumber=t,r&&(s.lastRemoteSnapshotVersion=r.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this.$n(e,s)))}addTargetData(e,t){return this.Un(e,t).next(()=>this.Kn(e).next(r=>(r.targetCount+=1,this.Wn(t,r),this.$n(e,r))))}updateTargetData(e,t){return this.Un(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Pa(e).delete(t.targetId)).next(()=>this.Kn(e)).next(r=>(ge(r.targetCount>0),r.targetCount-=1,this.$n(e,r)))}removeTargets(e,t,r){let s=0;const a=[];return Pa(e).J((u,h)=>{const f=Tl(h);f.sequenceNumber<=t&&r.get(f.targetId)===null&&(s++,a.push(this.removeTargetData(e,f)))}).next(()=>U.waitFor(a)).next(()=>s)}forEachTarget(e,t){return Pa(e).J((r,s)=>{const a=Tl(s);t(a)})}Kn(e){return rE(e).get("targetGlobalKey").next(t=>(ge(t!==null),t))}$n(e,t){return rE(e).put("targetGlobalKey",t)}Un(e,t){return Pa(e).put(vS(this.serializer,t))}Wn(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Kn(e).next(t=>t.targetCount)}getTargetData(e,t){const r=_o(t),s=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let a=null;return Pa(e).J({range:s,index:"queryTargetsIndex"},(u,h,f)=>{const p=Tl(h);sc(t,p.target)&&(a=p,f.done())}).next(()=>a)}addMatchingKeys(e,t,r){const s=[],a=ns(e);return t.forEach(u=>{const h=tn(u.path);s.push(a.put({targetId:r,path:h})),s.push(this.referenceDelegate.addReference(e,r,u))}),U.waitFor(s)}removeMatchingKeys(e,t,r){const s=ns(e);return U.forEach(t,a=>{const u=tn(a.path);return U.waitFor([s.delete([r,u]),this.referenceDelegate.removeReference(e,r,a)])})}removeMatchingKeysForTargetId(e,t){const r=ns(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(s)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),s=ns(e);let a=Pe();return s.J({range:r,H:!0},(u,h,f)=>{const p=Pr(u[1]),y=new se(p);a=a.add(y)}).next(()=>a)}containsKey(e,t){const r=tn(t.path),s=IDBKeyRange.bound([r],[_T(r)],!1,!0);let a=0;return ns(e).J({index:"documentTargetsIndex",H:!0,range:s},([u,h],f,p)=>{u!==0&&(a++,p.done())}).next(()=>a>0)}ut(e,t){return Pa(e).get(t).next(r=>r?Tl(r):null)}}function Pa(n){return bt(n,"targets")}function rE(n){return bt(n,"targetGlobal")}function ns(n){return bt(n,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iE([n,e],[t,r]){const s=Ae(n,t);return s===0?Ae(e,r):s}class w1{constructor(e){this.Gn=e,this.buffer=new We(iE),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();iE(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class RS{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){Z("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Is(t)?Z("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Es(t)}await this.Yn(3e5)})}}class E1{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return U.resolve(In.oe);const r=new w1(t);return this.Zn.forEachTarget(e,s=>r.Hn(s.sequenceNumber)).next(()=>this.Zn.er(e,s=>r.Hn(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Zn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(Z("LruGarbageCollector","Garbage collection skipped; disabled"),U.resolve(nE)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(Z("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),nE):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let r,s,a,u,h,f,p;const y=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(w=>(w>this.params.maximumSequenceNumbersToCollect?(Z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),s=this.params.maximumSequenceNumbersToCollect):s=w,u=Date.now(),this.nthSequenceNumber(e,s))).next(w=>(r=w,h=Date.now(),this.removeTargets(e,r,t))).next(w=>(a=w,f=Date.now(),this.removeOrphanedDocuments(e,r))).next(w=>(p=Date.now(),ka()<=be.DEBUG&&Z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-y}ms
	Determined least recently used ${s} in `+(h-u)+`ms
	Removed ${a} targets in `+(f-h)+`ms
	Removed ${w} documents in `+(p-f)+`ms
Total Duration: ${p-y}ms`),U.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:a,documentsRemoved:w})))}}function AS(n,e){return new E1(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I1{constructor(e,t){this.db=e,this.garbageCollector=AS(this,t)}Xn(e){const t=this.nr(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}nr(e){let t=0;return this.er(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}er(e,t){return this.rr(e,(r,s)=>t(s))}addReference(e,t,r){return Uh(e,r)}removeReference(e,t,r){return Uh(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return Uh(e,t)}ir(e,t){return function(s,a){let u=!1;return SS(s).Y(h=>TS(s,h,a).next(f=>(f&&(u=!0),U.resolve(!f)))).next(()=>u)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let a=0;return this.rr(e,(u,h)=>{if(h<=t){const f=this.ir(e,u).next(p=>{if(!p)return a++,r.getEntry(e,u).next(()=>(r.removeEntry(u,ve.min()),ns(e).delete(function(w){return[0,tn(w.path)]}(u))))});s.push(f)}}).next(()=>U.waitFor(s)).next(()=>r.apply(e)).next(()=>a)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return Uh(e,t)}rr(e,t){const r=ns(e);let s,a=In.oe;return r.J({index:"documentTargetsIndex"},([u,h],{path:f,sequenceNumber:p})=>{u===0?(a!==In.oe&&t(new se(Pr(s)),a),a=p,s=f):a=In.oe}).next(()=>{a!==In.oe&&t(new se(Pr(s)),a)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Uh(n,e){return ns(n).put(function(r,s){return{targetId:0,path:tn(r.path),sequenceNumber:s}}(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PS{constructor(){this.changes=new Ei(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,tt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?U.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T1{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return eo(e).put(r)}removeEntry(e,t,r){return eo(e).delete(function(a,u){const h=a.path.toArray();return[h.slice(0,h.length-2),h[h.length-2],Ed(u),h[h.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.sr(e,r)))}getEntry(e,t){let r=tt.newInvalidDocument(t);return eo(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(ml(t))},(s,a)=>{r=this._r(t,a)}).next(()=>r)}ar(e,t){let r={size:0,document:tt.newInvalidDocument(t)};return eo(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(ml(t))},(s,a)=>{r={document:this._r(t,a),size:Td(a)}}).next(()=>r)}getEntries(e,t){let r=Sn();return this.ur(e,t,(s,a)=>{const u=this._r(s,a);r=r.insert(s,u)}).next(()=>r)}cr(e,t){let r=Sn(),s=new Xe(se.comparator);return this.ur(e,t,(a,u)=>{const h=this._r(a,u);r=r.insert(a,h),s=s.insert(a,Td(u))}).next(()=>({documents:r,lr:s}))}ur(e,t,r){if(t.isEmpty())return U.resolve();let s=new We(aE);t.forEach(f=>s=s.add(f));const a=IDBKeyRange.bound(ml(s.first()),ml(s.last())),u=s.getIterator();let h=u.getNext();return eo(e).J({index:"documentKeyIndex",range:a},(f,p,y)=>{const w=se.fromSegments([...p.prefixPath,p.collectionGroup,p.documentId]);for(;h&&aE(h,w)<0;)r(h,null),h=u.getNext();h&&h.isEqual(w)&&(r(h,p),h=u.hasNext()?u.getNext():null),h?y.$(ml(h)):y.done()}).next(()=>{for(;h;)r(h,null),h=u.hasNext()?u.getNext():null})}getDocumentsMatchingQuery(e,t,r,s,a){const u=t.path,h=[u.popLast().toArray(),u.lastSegment(),Ed(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],f=[u.popLast().toArray(),u.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return eo(e).U(IDBKeyRange.bound(h,f,!0)).next(p=>{a==null||a.incrementDocumentReadCount(p.length);let y=Sn();for(const w of p){const I=this._r(se.fromSegments(w.prefixPath.concat(w.collectionGroup,w.documentId)),w);I.isFoundDocument()&&(ac(t,I)||s.has(I.key))&&(y=y.insert(I.key,I))}return y})}getAllFromCollectionGroup(e,t,r,s){let a=Sn();const u=oE(t,r),h=oE(t,Nn.max());return eo(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(u,h,!0)},(f,p,y)=>{const w=this._r(se.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);a=a.insert(w.key,w),a.size===s&&y.done()}).next(()=>a)}newChangeBuffer(e){return new S1(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return sE(e).get("remoteDocumentGlobalKey").next(t=>(ge(!!t),t))}sr(e,t){return sE(e).put("remoteDocumentGlobalKey",t)}_r(e,t){if(t){const r=l1(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(ve.min())))return r}return tt.newInvalidDocument(e)}}function CS(n){return new T1(n)}class S1 extends PS{constructor(e,t){super(),this.hr=e,this.trackRemovals=t,this.Pr=new Ei(r=>r.toString(),(r,s)=>r.isEqual(s))}applyChanges(e){const t=[];let r=0,s=new We((a,u)=>Ae(a.canonicalString(),u.canonicalString()));return this.changes.forEach((a,u)=>{const h=this.Pr.get(a);if(t.push(this.hr.removeEntry(e,a,h.readTime)),u.isValidDocument()){const f=Gw(this.hr.serializer,u);s=s.add(a.path.popLast());const p=Td(f);r+=p-h.size,t.push(this.hr.addEntry(e,a,f))}else if(r-=h.size,this.trackRemovals){const f=Gw(this.hr.serializer,u.convertToNoDocument(ve.min()));t.push(this.hr.addEntry(e,a,f))}}),s.forEach(a=>{t.push(this.hr.indexManager.addToCollectionParentIndex(e,a))}),t.push(this.hr.updateMetadata(e,r)),U.waitFor(t)}getFromCache(e,t){return this.hr.ar(e,t).next(r=>(this.Pr.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.hr.cr(e,t).next(({documents:r,lr:s})=>(s.forEach((a,u)=>{this.Pr.set(a,{size:u,readTime:r.get(a).readTime})}),r))}}function sE(n){return bt(n,"remoteDocumentGlobal")}function eo(n){return bt(n,"remoteDocumentsV14")}function ml(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function oE(n,e){const t=e.documentKey.path.toArray();return[n,Ed(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function aE(n,e){const t=n.path.toArray(),r=e.path.toArray();let s=0;for(let a=0;a<t.length-2&&a<r.length-2;++a)if(s=Ae(t[a],r[a]),s)return s;return s=Ae(t.length,r.length),s||(s=Ae(t[t.length-2],r[r.length-2]),s||Ae(t[t.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R1{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kS{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Cl(r.mutation,s,Tn.empty(),ut.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,Pe()).next(()=>r))}getLocalViewOfDocuments(e,t,r=Pe()){const s=Cr();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(a=>{let u=El();return a.forEach((h,f)=>{u=u.insert(h,f.overlayedDocument)}),u}))}getOverlayedDocuments(e,t){const r=Cr();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,Pe()))}populateOverlays(e,t,r){const s=[];return r.forEach(a=>{t.has(a)||s.push(a)}),this.documentOverlayCache.getOverlays(e,s).next(a=>{a.forEach((u,h)=>{t.set(u,h)})})}computeViews(e,t,r,s){let a=Sn();const u=Pl(),h=function(){return Pl()}();return t.forEach((f,p)=>{const y=r.get(p.key);s.has(p.key)&&(y===void 0||y.mutation instanceof Ii)?a=a.insert(p.key,p):y!==void 0?(u.set(p.key,y.mutation.getFieldMask()),Cl(y.mutation,p,y.mutation.getFieldMask(),ut.now())):u.set(p.key,Tn.empty())}),this.recalculateAndSaveOverlays(e,a).next(f=>(f.forEach((p,y)=>u.set(p,y)),t.forEach((p,y)=>{var w;return h.set(p,new R1(y,(w=u.get(p))!==null&&w!==void 0?w:null))}),h))}recalculateAndSaveOverlays(e,t){const r=Pl();let s=new Xe((u,h)=>u-h),a=Pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(u=>{for(const h of u)h.keys().forEach(f=>{const p=t.get(f);if(p===null)return;let y=r.get(f)||Tn.empty();y=h.applyToLocalView(p,y),r.set(f,y);const w=(s.get(h.batchId)||Pe()).add(f);s=s.insert(h.batchId,w)})}).next(()=>{const u=[],h=s.getReverseIterator();for(;h.hasNext();){const f=h.getNext(),p=f.key,y=f.value,w=WT();y.forEach(I=>{if(!a.has(I)){const R=ZT(t.get(I),r.get(I));R!==null&&w.set(I,R),a=a.add(I)}}),u.push(this.documentOverlayCache.saveOverlays(e,p,w))}return U.waitFor(u)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(u){return se.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):_g(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(a=>{const u=s-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-a.size):U.resolve(Cr());let h=-1,f=a;return u.next(p=>U.forEach(p,(y,w)=>(h<w.largestBatchId&&(h=w.largestBatchId),a.get(y)?U.resolve():this.remoteDocumentCache.getEntry(e,y).next(I=>{f=f.insert(y,I)}))).next(()=>this.populateOverlays(e,p,a)).next(()=>this.computeViews(e,f,p,Pe())).next(y=>({batchId:h,changes:GT(y)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new se(t)).next(r=>{let s=El();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const a=t.collectionGroup;let u=El();return this.indexManager.getCollectionParents(e,a).next(h=>U.forEach(h,f=>{const p=function(w,I){return new wi(I,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(t,f.child(a));return this.getDocumentsMatchingCollectionQuery(e,p,r,s).next(y=>{y.forEach((w,I)=>{u=u.insert(w,I)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(e,t,r,s){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(u=>(a=u,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,a,s))).next(u=>{a.forEach((f,p)=>{const y=p.getKey();u.get(y)===null&&(u=u.insert(y,tt.newInvalidDocument(y)))});let h=El();return u.forEach((f,p)=>{const y=a.get(f);y!==void 0&&Cl(y.mutation,p,Tn.empty(),ut.now()),ac(t,p)&&(h=h.insert(f,p))}),h})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A1{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return U.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:wt(s.createTime)}}(t)),U.resolve()}getNamedQuery(e,t){return U.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(s){return{name:s.name,query:Ag(s.bundledQuery),readTime:wt(s.readTime)}}(t)),U.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P1{constructor(){this.overlays=new Xe(se.comparator),this.dr=new Map}getOverlay(e,t){return U.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Cr();return U.forEach(t,s=>this.getOverlay(e,s).next(a=>{a!==null&&r.set(s,a)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,a)=>{this.Tt(e,t,a)}),U.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.dr.get(r);return s!==void 0&&(s.forEach(a=>this.overlays=this.overlays.remove(a)),this.dr.delete(r)),U.resolve()}getOverlaysForCollection(e,t,r){const s=Cr(),a=t.length+1,u=new se(t.child("")),h=this.overlays.getIteratorFrom(u);for(;h.hasNext();){const f=h.getNext().value,p=f.getKey();if(!t.isPrefixOf(p.path))break;p.path.length===a&&f.largestBatchId>r&&s.set(f.getKey(),f)}return U.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let a=new Xe((p,y)=>p-y);const u=this.overlays.getIterator();for(;u.hasNext();){const p=u.getNext().value;if(p.getKey().getCollectionGroup()===t&&p.largestBatchId>r){let y=a.get(p.largestBatchId);y===null&&(y=Cr(),a=a.insert(p.largestBatchId,y)),y.set(p.getKey(),p)}}const h=Cr(),f=a.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach((p,y)=>h.set(p,y)),!(h.size()>=s)););return U.resolve(h)}Tt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const u=this.dr.get(s.largestBatchId).delete(r.key);this.dr.set(s.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new Tg(t,r));let a=this.dr.get(t);a===void 0&&(a=Pe(),this.dr.set(t,a)),this.dr.set(t,a.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C1{constructor(){this.sessionToken=mt.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,U.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(){this.Er=new We(Mt.Ar),this.Rr=new We(Mt.Vr)}isEmpty(){return this.Er.isEmpty()}addReference(e,t){const r=new Mt(e,t);this.Er=this.Er.add(r),this.Rr=this.Rr.add(r)}mr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.gr(new Mt(e,t))}pr(e,t){e.forEach(r=>this.removeReference(r,t))}yr(e){const t=new se(new De([])),r=new Mt(t,e),s=new Mt(t,e+1),a=[];return this.Rr.forEachInRange([r,s],u=>{this.gr(u),a.push(u.key)}),a}wr(){this.Er.forEach(e=>this.gr(e))}gr(e){this.Er=this.Er.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new se(new De([])),r=new Mt(t,e),s=new Mt(t,e+1);let a=Pe();return this.Rr.forEachInRange([r,s],u=>{a=a.add(u.key)}),a}containsKey(e){const t=new Mt(e,0),r=this.Er.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Mt{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return se.comparator(e.key,t.key)||Ae(e.br,t.br)}static Vr(e,t){return Ae(e.br,t.br)||se.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k1{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new We(Mt.Ar)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const a=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new Eg(a,t,r,s);this.mutationQueue.push(u);for(const h of s)this.vr=this.vr.add(new Mt(h.key,a)),this.indexManager.addToCollectionParentIndex(e,h.key.path.popLast());return U.resolve(u)}lookupMutationBatch(e,t){return U.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Fr(r),a=s<0?0:s;return U.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Mt(t,0),s=new Mt(t,Number.POSITIVE_INFINITY),a=[];return this.vr.forEachInRange([r,s],u=>{const h=this.Cr(u.br);a.push(h)}),U.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new We(Ae);return t.forEach(s=>{const a=new Mt(s,0),u=new Mt(s,Number.POSITIVE_INFINITY);this.vr.forEachInRange([a,u],h=>{r=r.add(h.br)})}),U.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let a=r;se.isDocumentKey(a)||(a=a.child(""));const u=new Mt(new se(a),0);let h=new We(Ae);return this.vr.forEachWhile(f=>{const p=f.key.path;return!!r.isPrefixOf(p)&&(p.length===s&&(h=h.add(f.br)),!0)},u),U.resolve(this.Mr(h))}Mr(e){const t=[];return e.forEach(r=>{const s=this.Cr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){ge(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return U.forEach(t.mutations,s=>{const a=new Mt(s.key,t.batchId);return r=r.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.vr=r})}Bn(e){}containsKey(e,t){const r=new Mt(t,0),s=this.vr.firstAfterOrEqual(r);return U.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x1{constructor(e){this.Nr=e,this.docs=function(){return new Xe(se.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),a=s?s.size:0,u=this.Nr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:u}),this.size+=u-a,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return U.resolve(r?r.document.mutableCopy():tt.newInvalidDocument(t))}getEntries(e,t){let r=Sn();return t.forEach(s=>{const a=this.docs.get(s);r=r.insert(s,a?a.document.mutableCopy():tt.newInvalidDocument(s))}),U.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let a=Sn();const u=t.path,h=new se(u.child("__id-9223372036854775808__")),f=this.docs.getIteratorFrom(h);for(;f.hasNext();){const{key:p,value:{document:y}}=f.getNext();if(!u.isPrefixOf(p.path))break;p.path.length>u.length+1||fg(vT(y),r)<=0||(s.has(y.key)||ac(t,y))&&(a=a.insert(y.key,y.mutableCopy()))}return U.resolve(a)}getAllFromCollectionGroup(e,t,r,s){ce()}Br(e,t){return U.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new b1(this)}getSize(e){return U.resolve(this.size)}}class b1 extends PS{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.hr.addEntry(e,s)):this.hr.removeEntry(r)}),U.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D1{constructor(e){this.persistence=e,this.Lr=new Ei(t=>_o(t),sc),this.lastRemoteSnapshotVersion=ve.min(),this.highestTargetId=0,this.kr=0,this.qr=new kg,this.targetCount=0,this.Qr=Io.qn()}forEachTarget(e,t){return this.Lr.forEach((r,s)=>t(s)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.kr&&(this.kr=t),U.resolve()}Un(e){this.Lr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new Io(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,U.resolve()}updateTargetData(e,t){return this.Un(t),U.resolve()}removeTargetData(e,t){return this.Lr.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,t,r){let s=0;const a=[];return this.Lr.forEach((u,h)=>{h.sequenceNumber<=t&&r.get(h.targetId)===null&&(this.Lr.delete(u),a.push(this.removeMatchingKeysForTargetId(e,h.targetId)),s++)}),U.waitFor(a).next(()=>s)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,t){const r=this.Lr.get(t)||null;return U.resolve(r)}addMatchingKeys(e,t,r){return this.qr.mr(t,r),U.resolve()}removeMatchingKeys(e,t,r){this.qr.pr(t,r);const s=this.persistence.referenceDelegate,a=[];return s&&t.forEach(u=>{a.push(s.markPotentiallyOrphaned(e,u))}),U.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),U.resolve()}getMatchingKeysForTargetId(e,t){const r=this.qr.Sr(t);return U.resolve(r)}containsKey(e,t){return U.resolve(this.qr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(e,t){this.Kr={},this.overlays={},this.$r=new In(0),this.Ur=!1,this.Ur=!0,this.Wr=new C1,this.referenceDelegate=e(this),this.Gr=new D1(this),this.indexManager=new _1,this.remoteDocumentCache=function(s){return new x1(s)}(r=>this.referenceDelegate.zr(r)),this.serializer=new yS(t),this.jr=new A1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new P1,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Kr[e.toKey()];return r||(r=new k1(t,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,r){Z("MemoryPersistence","Starting transaction:",e);const s=new N1(this.$r.next());return this.referenceDelegate.Hr(),r(s).next(a=>this.referenceDelegate.Jr(s).next(()=>a)).toPromise().then(a=>(s.raiseOnCommittedEvent(),a))}Yr(e,t){return U.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,t)))}}class N1 extends ET{constructor(e){super(),this.currentSequenceNumber=e}}class Hd{constructor(e){this.persistence=e,this.Zr=new kg,this.Xr=null}static ei(e){return new Hd(e)}get ti(){if(this.Xr)return this.Xr;throw ce()}addReference(e,t,r){return this.Zr.addReference(r,t),this.ti.delete(r.toString()),U.resolve()}removeReference(e,t,r){return this.Zr.removeReference(r,t),this.ti.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),U.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(s=>this.ti.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(a=>this.ti.add(a.toString()))}).next(()=>r.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.ti,r=>{const s=se.fromPath(r);return this.ni(e,s).next(a=>{a||t.removeEntry(s,ve.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(r=>{r?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return U.or([()=>U.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class Sd{constructor(e,t){this.persistence=e,this.ri=new Ei(r=>tn(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=AS(this,t)}static ei(e,t){return new Sd(e,t)}Hr(){}Jr(e){return U.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}nr(e){let t=0;return this.er(e,r=>{t++}).next(()=>t)}er(e,t){return U.forEach(this.ri,(r,s)=>this.ir(e,r,s).next(a=>a?U.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),a=s.newChangeBuffer();return s.Br(e,u=>this.ir(e,u,t).next(h=>{h||(r++,a.removeEntry(u,ve.min()))})).next(()=>a.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),U.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.ri.set(r,e.currentSequenceNumber),U.resolve()}removeReference(e,t,r){return this.ri.set(r,e.currentSequenceNumber),U.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),U.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=nd(e.data.value)),t}ir(e,t,r){return U.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.ri.get(t);return U.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V1{constructor(e){this.serializer=e}O(e,t,r,s){const a=new Bd("createOrUpgrade",t);r<1&&s>=1&&(function(f){f.createObjectStore("owner")}(e),function(f){f.createObjectStore("mutationQueues",{keyPath:"userId"}),f.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Iw,{unique:!0}),f.createObjectStore("documentMutations")}(e),uE(e),function(f){f.createObjectStore("remoteDocuments")}(e));let u=U.resolve();return r<3&&s>=3&&(r!==0&&(function(f){f.deleteObjectStore("targetDocuments"),f.deleteObjectStore("targets"),f.deleteObjectStore("targetGlobal")}(e),uE(e)),u=u.next(()=>function(f){const p=f.store("targetGlobal"),y={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:ve.min().toTimestamp(),targetCount:0};return p.put("targetGlobalKey",y)}(a))),r<4&&s>=4&&(r!==0&&(u=u.next(()=>function(f,p){return p.store("mutations").U().next(y=>{f.deleteObjectStore("mutations"),f.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Iw,{unique:!0});const w=p.store("mutations"),I=y.map(R=>w.put(R));return U.waitFor(I)})}(e,a))),u=u.next(()=>{(function(f){f.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&s>=5&&(u=u.next(()=>this.ii(a))),r<6&&s>=6&&(u=u.next(()=>(function(f){f.createObjectStore("remoteDocumentGlobal")}(e),this.si(a)))),r<7&&s>=7&&(u=u.next(()=>this.oi(a))),r<8&&s>=8&&(u=u.next(()=>this._i(e,a))),r<9&&s>=9&&(u=u.next(()=>{(function(f){f.objectStoreNames.contains("remoteDocumentChanges")&&f.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&s>=10&&(u=u.next(()=>this.ai(a))),r<11&&s>=11&&(u=u.next(()=>{(function(f){f.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(f){f.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&s>=12&&(u=u.next(()=>{(function(f){const p=f.createObjectStore("documentOverlays",{keyPath:gD});p.createIndex("collectionPathOverlayIndex",_D,{unique:!1}),p.createIndex("collectionGroupOverlayIndex",yD,{unique:!1})})(e)})),r<13&&s>=13&&(u=u.next(()=>function(f){const p=f.createObjectStore("remoteDocumentsV14",{keyPath:sD});p.createIndex("documentKeyIndex",oD),p.createIndex("collectionGroupIndex",aD)}(e)).next(()=>this.ui(e,a)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&s>=14&&(u=u.next(()=>this.ci(e,a))),r<15&&s>=15&&(u=u.next(()=>function(f){f.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),f.createObjectStore("indexState",{keyPath:dD}).createIndex("sequenceNumberIndex",fD,{unique:!1}),f.createObjectStore("indexEntries",{keyPath:pD}).createIndex("documentKeyIndex",mD,{unique:!1})}(e))),r<16&&s>=16&&(u=u.next(()=>{t.objectStore("indexState").clear()}).next(()=>{t.objectStore("indexEntries").clear()})),r<17&&s>=17&&(u=u.next(()=>{(function(f){f.createObjectStore("globals",{keyPath:"name"})})(e)})),u}si(e){let t=0;return e.store("remoteDocuments").J((r,s)=>{t+=Td(s)}).next(()=>{const r={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}ii(e){const t=e.store("mutationQueues"),r=e.store("mutations");return t.U().next(s=>U.forEach(s,a=>{const u=IDBKeyRange.bound([a.userId,-1],[a.userId,a.lastAcknowledgedBatchId]);return r.U("userMutationsIndex",u).next(h=>U.forEach(h,f=>{ge(f.userId===a.userId);const p=io(this.serializer,f);return IS(e,a.userId,p).next(()=>{})}))}))}oi(e){const t=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(s=>{const a=[];return r.J((u,h)=>{const f=new De(u),p=function(w){return[0,tn(w)]}(f);a.push(t.get(p).next(y=>y?U.resolve():(w=>t.put({targetId:0,path:tn(w),sequenceNumber:s.highestListenSequenceNumber}))(f)))}).next(()=>U.waitFor(a))})}_i(e,t){e.createObjectStore("collectionParents",{keyPath:hD});const r=t.store("collectionParents"),s=new Cg,a=u=>{if(s.add(u)){const h=u.lastSegment(),f=u.popLast();return r.put({collectionId:h,parent:tn(f)})}};return t.store("remoteDocuments").J({H:!0},(u,h)=>{const f=new De(u);return a(f.popLast())}).next(()=>t.store("documentMutations").J({H:!0},([u,h,f],p)=>{const y=Pr(h);return a(y.popLast())}))}ai(e){const t=e.store("targets");return t.J((r,s)=>{const a=Tl(s),u=vS(this.serializer,a);return t.put(u)})}ui(e,t){const r=t.store("remoteDocuments"),s=[];return r.J((a,u)=>{const h=t.store("remoteDocumentsV14"),f=function(w){return w.document?new se(De.fromString(w.document.name).popFirst(5)):w.noDocument?se.fromSegments(w.noDocument.path):w.unknownDocument?se.fromSegments(w.unknownDocument.path):ce()}(u).path.toArray(),p={prefixPath:f.slice(0,f.length-2),collectionGroup:f[f.length-2],documentId:f[f.length-1],readTime:u.readTime||[0,0],unknownDocument:u.unknownDocument,noDocument:u.noDocument,document:u.document,hasCommittedMutations:!!u.hasCommittedMutations};s.push(h.put(p))}).next(()=>U.waitFor(s))}ci(e,t){const r=t.store("mutations"),s=CS(this.serializer),a=new xg(Hd.ei,this.serializer.ht);return r.U().next(u=>{const h=new Map;return u.forEach(f=>{var p;let y=(p=h.get(f.userId))!==null&&p!==void 0?p:Pe();io(this.serializer,f).keys().forEach(w=>y=y.add(w)),h.set(f.userId,y)}),U.forEach(h,(f,p)=>{const y=new Ft(p),w=Wd.Pt(this.serializer,y),I=a.getIndexManager(y),R=Kd.Pt(y,this.serializer,I,a.referenceDelegate);return new kS(s,R,w,I).recalculateAndSaveOverlaysForDocumentKeys(new Em(t,In.oe),f).next()})})}}function uE(n){n.createObjectStore("targetDocuments",{keyPath:lD}).createIndex("documentTargetsIndex",cD,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",uD,{unique:!0}),n.createObjectStore("targetGlobal")}const nm="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class bg{constructor(e,t,r,s,a,u,h,f,p,y,w=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.li=a,this.window=u,this.document=h,this.hi=p,this.Pi=y,this.Ti=w,this.$r=null,this.Ur=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ii=null,this.inForeground=!1,this.di=null,this.Ei=null,this.Ai=Number.NEGATIVE_INFINITY,this.Ri=I=>Promise.resolve(),!bg.p())throw new Y(q.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new I1(this,s),this.Vi=t+"main",this.serializer=new yS(f),this.mi=new xr(this.Vi,this.Ti,new V1(this.serializer)),this.Wr=new h1,this.Gr=new v1(this.referenceDelegate,this.serializer),this.remoteDocumentCache=CS(this.serializer),this.jr=new c1,this.window&&this.window.localStorage?this.fi=this.window.localStorage:(this.fi=null,y===!1&&vt("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.gi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new Y(q.FAILED_PRECONDITION,nm);return this.pi(),this.yi(),this.wi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Gr.getHighestSequenceNumber(e))}).then(e=>{this.$r=new In(e,this.hi)}).then(()=>{this.Ur=!0}).catch(e=>(this.mi&&this.mi.close(),Promise.reject(e)))}Si(e){return this.Ri=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.mi.B(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.li.enqueueAndForget(async()=>{this.started&&await this.gi()}))}gi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Bh(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.bi(e).next(t=>{t||(this.isPrimary=!1,this.li.enqueueRetryable(()=>this.Ri(!1)))})}).next(()=>this.Di(e)).next(t=>this.isPrimary&&!t?this.vi(e).next(()=>!1):!!t&&this.Ci(e).next(()=>!0))).catch(e=>{if(Is(e))return Z("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return Z("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.li.enqueueRetryable(()=>this.Ri(e)),this.isPrimary=e})}bi(e){return gl(e).get("owner").next(t=>U.resolve(this.Fi(t)))}Mi(e){return Bh(e).delete(this.clientId)}async xi(){if(this.isPrimary&&!this.Oi(this.Ai,18e5)){this.Ai=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=bt(t,"clientMetadata");return r.U().next(s=>{const a=this.Ni(s,18e5),u=s.filter(h=>a.indexOf(h)===-1);return U.forEach(u,h=>r.delete(h.clientId)).next(()=>u)})}).catch(()=>[]);if(this.fi)for(const t of e)this.fi.removeItem(this.Bi(t.clientId))}}wi(){this.Ei=this.li.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.gi().then(()=>this.xi()).then(()=>this.wi()))}Fi(e){return!!e&&e.ownerId===this.clientId}Di(e){return this.Pi?U.resolve(!0):gl(e).get("owner").next(t=>{if(t!==null&&this.Oi(t.leaseTimestampMs,5e3)&&!this.Li(t.ownerId)){if(this.Fi(t)&&this.networkEnabled)return!0;if(!this.Fi(t)){if(!t.allowTabSynchronization)throw new Y(q.FAILED_PRECONDITION,nm);return!1}}return!(!this.networkEnabled||!this.inForeground)||Bh(e).U().next(r=>this.Ni(r,5e3).find(s=>{if(this.clientId!==s.clientId){const a=!this.networkEnabled&&s.networkEnabled,u=!this.inForeground&&s.inForeground,h=this.networkEnabled===s.networkEnabled;if(a||u&&h)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&Z("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Ur=!1,this.ki(),this.Ei&&(this.Ei.cancel(),this.Ei=null),this.qi(),this.Qi(),await this.mi.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new Em(e,In.oe);return this.vi(t).next(()=>this.Mi(t))}),this.mi.close(),this.Ki()}Ni(e,t){return e.filter(r=>this.Oi(r.updateTimeMs,t)&&!this.Li(r.clientId))}$i(){return this.runTransaction("getActiveClients","readonly",e=>Bh(e).U().next(t=>this.Ni(t,18e5).map(r=>r.clientId)))}get started(){return this.Ur}getGlobalsCache(){return this.Wr}getMutationQueue(e,t){return Kd.Pt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new y1(e,this.serializer.ht.databaseId)}getDocumentOverlayCache(e){return Wd.Pt(this.serializer,e)}getBundleCache(){return this.jr}runTransaction(e,t,r){Z("IndexedDbPersistence","Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",a=function(f){return f===17?ED:f===16?wD:f===15?mg:f===14?PT:f===13?AT:f===12?vD:f===11?RT:void ce()}(this.Ti);let u;return this.mi.runTransaction(e,s,a,h=>(u=new Em(h,this.$r?this.$r.next():In.oe),t==="readwrite-primary"?this.bi(u).next(f=>!!f||this.Di(u)).next(f=>{if(!f)throw vt(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.li.enqueueRetryable(()=>this.Ri(!1)),new Y(q.FAILED_PRECONDITION,wT);return r(u)}).next(f=>this.Ci(u).next(()=>f)):this.Ui(u).next(()=>r(u)))).then(h=>(u.raiseOnCommittedEvent(),h))}Ui(e){return gl(e).get("owner").next(t=>{if(t!==null&&this.Oi(t.leaseTimestampMs,5e3)&&!this.Li(t.ownerId)&&!this.Fi(t)&&!(this.Pi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new Y(q.FAILED_PRECONDITION,nm)})}Ci(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return gl(e).put("owner",t)}static p(){return xr.p()}vi(e){const t=gl(e);return t.get("owner").next(r=>this.Fi(r)?(Z("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):U.resolve())}Oi(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(vt(`Detected an update time that is in the future: ${e} > ${r}`),!1))}pi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.di=()=>{this.li.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.gi()))},this.document.addEventListener("visibilitychange",this.di),this.inForeground=this.document.visibilityState==="visible")}qi(){this.di&&(this.document.removeEventListener("visibilitychange",this.di),this.di=null)}yi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Ii=()=>{this.ki();const t=/(?:Version|Mobile)\/1[456]/;fI()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.li.enterRestrictedMode(!0),this.li.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Ii))}Qi(){this.Ii&&(this.window.removeEventListener("pagehide",this.Ii),this.Ii=null)}Li(e){var t;try{const r=((t=this.fi)===null||t===void 0?void 0:t.getItem(this.Bi(e)))!==null;return Z("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return vt("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}ki(){if(this.fi)try{this.fi.setItem(this.Bi(this.clientId),String(Date.now()))}catch(e){vt("Failed to set zombie client id.",e)}}Ki(){if(this.fi)try{this.fi.removeItem(this.Bi(this.clientId))}catch{}}Bi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function gl(n){return bt(n,"owner")}function Bh(n){return bt(n,"clientMetadata")}function Dg(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Wi=r,this.Gi=s}static zi(e,t){let r=Pe(),s=Pe();for(const a of t.docChanges)switch(a.type){case 0:r=r.add(a.doc.key);break;case 1:s=s.add(a.doc.key)}return new Ng(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O1{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xS{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return fI()?8:IT(xt())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,r,s){const a={result:null};return this.Xi(e,t).next(u=>{a.result=u}).next(()=>{if(!a.result)return this.es(e,t,s,r).next(u=>{a.result=u})}).next(()=>{if(a.result)return;const u=new O1;return this.ts(e,t,u).next(h=>{if(a.result=h,this.Hi)return this.ns(e,t,u,h.size)})}).next(()=>a.result)}ns(e,t,r,s){return r.documentReadCount<this.Ji?(ka()<=be.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",xa(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),U.resolve()):(ka()<=be.DEBUG&&Z("QueryEngine","Query:",xa(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Yi*s?(ka()<=be.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",xa(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,dn(t))):U.resolve())}Xi(e,t){if(Ow(t))return U.resolve(null);let r=dn(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=wd(t,null,"F"),r=dn(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(a=>{const u=Pe(...a);return this.Zi.getDocuments(e,u).next(h=>this.indexManager.getMinOffset(e,r).next(f=>{const p=this.rs(t,h);return this.ss(t,p,u,f.readTime)?this.Xi(e,wd(t,null,"F")):this.os(e,p,t,f)}))})))}es(e,t,r,s){return Ow(t)||s.isEqual(ve.min())?U.resolve(null):this.Zi.getDocuments(e,r).next(a=>{const u=this.rs(t,a);return this.ss(t,u,r,s)?U.resolve(null):(ka()<=be.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),xa(t)),this.os(e,u,t,yT(s,-1)).next(h=>h))})}rs(e,t){let r=new We($T(e));return t.forEach((s,a)=>{ac(e,a)&&(r=r.add(a))}),r}ss(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(s)>0)}ts(e,t,r){return ka()<=be.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",xa(t)),this.Zi.getDocumentsMatchingQuery(e,t,Nn.min(),r)}os(e,t,r,s){return this.Zi.getDocumentsMatchingQuery(e,r,s).next(a=>(t.forEach(u=>{a=a.insert(u.key,u)}),a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L1{constructor(e,t,r,s){this.persistence=e,this._s=t,this.serializer=s,this.us=new Xe(Ae),this.cs=new Ei(a=>_o(a),sc),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new kS(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function bS(n,e,t,r){return new L1(n,e,t,r)}async function DS(n,e){const t=ae(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(a=>(s=a,t.Ps(e),t.mutationQueue.getAllMutationBatches(r))).next(a=>{const u=[],h=[];let f=Pe();for(const p of s){u.push(p.batchId);for(const y of p.mutations)f=f.add(y.key)}for(const p of a){h.push(p.batchId);for(const y of p.mutations)f=f.add(y.key)}return t.localDocuments.getDocuments(r,f).next(p=>({Ts:p,removedBatchIds:u,addedBatchIds:h}))})})}function M1(n,e){const t=ae(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),a=t.hs.newChangeBuffer({trackRemovals:!0});return function(h,f,p,y){const w=p.batch,I=w.keys();let R=U.resolve();return I.forEach(k=>{R=R.next(()=>y.getEntry(f,k)).next(L=>{const D=p.docVersions.get(k);ge(D!==null),L.version.compareTo(D)<0&&(w.applyToRemoteDocument(L,p),L.isValidDocument()&&(L.setReadTime(p.commitVersion),y.addEntry(L)))})}),R.next(()=>h.mutationQueue.removeMutationBatch(f,w))}(t,r,e,a).next(()=>a.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(h){let f=Pe();for(let p=0;p<h.mutationResults.length;++p)h.mutationResults[p].transformResults.length>0&&(f=f.add(h.batch.mutations[p].key));return f}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function NS(n){const e=ae(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function F1(n,e){const t=ae(n),r=e.snapshotVersion;let s=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",a=>{const u=t.hs.newChangeBuffer({trackRemovals:!0});s=t.us;const h=[];e.targetChanges.forEach((y,w)=>{const I=s.get(w);if(!I)return;h.push(t.Gr.removeMatchingKeys(a,y.removedDocuments,w).next(()=>t.Gr.addMatchingKeys(a,y.addedDocuments,w)));let R=I.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(w)!==null?R=R.withResumeToken(mt.EMPTY_BYTE_STRING,ve.min()).withLastLimboFreeSnapshotVersion(ve.min()):y.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(y.resumeToken,r)),s=s.insert(w,R),function(L,D,G){return L.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=3e8?!0:G.addedDocuments.size+G.modifiedDocuments.size+G.removedDocuments.size>0}(I,R,y)&&h.push(t.Gr.updateTargetData(a,R))});let f=Sn(),p=Pe();if(e.documentUpdates.forEach(y=>{e.resolvedLimboDocuments.has(y)&&h.push(t.persistence.referenceDelegate.updateLimboDocument(a,y))}),h.push(VS(a,u,e.documentUpdates).next(y=>{f=y.Is,p=y.ds})),!r.isEqual(ve.min())){const y=t.Gr.getLastRemoteSnapshotVersion(a).next(w=>t.Gr.setTargetsMetadata(a,a.currentSequenceNumber,r));h.push(y)}return U.waitFor(h).next(()=>u.apply(a)).next(()=>t.localDocuments.getLocalViewOfDocuments(a,f,p)).next(()=>f)}).then(a=>(t.us=s,a))}function VS(n,e,t){let r=Pe(),s=Pe();return t.forEach(a=>r=r.add(a)),e.getEntries(n,r).next(a=>{let u=Sn();return t.forEach((h,f)=>{const p=a.get(h);f.isFoundDocument()!==p.isFoundDocument()&&(s=s.add(h)),f.isNoDocument()&&f.version.isEqual(ve.min())?(e.removeEntry(h,f.readTime),u=u.insert(h,f)):!p.isValidDocument()||f.version.compareTo(p.version)>0||f.version.compareTo(p.version)===0&&p.hasPendingWrites?(e.addEntry(f),u=u.insert(h,f)):Z("LocalStore","Ignoring outdated watch update for ",h,". Current version:",p.version," Watch version:",f.version)}),{Is:u,ds:s}})}function U1(n,e){const t=ae(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Ja(n,e){const t=ae(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Gr.getTargetData(r,e).next(a=>a?(s=a,U.resolve(s)):t.Gr.allocateTargetId(r).next(u=>(s=new ai(e,u,"TargetPurposeListen",r.currentSequenceNumber),t.Gr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.us.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.us=t.us.insert(r.targetId,r),t.cs.set(e,r.targetId)),r})}async function Ya(n,e,t){const r=ae(n),s=r.us.get(e),a=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",a,u=>r.persistence.referenceDelegate.removeTarget(u,s))}catch(u){if(!Is(u))throw u;Z("LocalStore",`Failed to update sequence numbers for target ${e}: ${u}`)}r.us=r.us.remove(e),r.cs.delete(s.target)}function Rd(n,e,t){const r=ae(n);let s=ve.min(),a=Pe();return r.persistence.runTransaction("Execute query","readwrite",u=>function(f,p,y){const w=ae(f),I=w.cs.get(y);return I!==void 0?U.resolve(w.us.get(I)):w.Gr.getTargetData(p,y)}(r,u,dn(e)).next(h=>{if(h)return s=h.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(u,h.targetId).next(f=>{a=f})}).next(()=>r._s.getDocumentsMatchingQuery(u,e,t?s:ve.min(),t?a:Pe())).next(h=>(MS(r,jT(e),h),{documents:h,Es:a})))}function OS(n,e){const t=ae(n),r=ae(t.Gr),s=t.us.get(e);return s?Promise.resolve(s.target):t.persistence.runTransaction("Get target data","readonly",a=>r.ut(a,e).next(u=>u?u.target:null))}function LS(n,e){const t=ae(n),r=t.ls.get(e)||ve.min();return t.persistence.runTransaction("Get new document changes","readonly",s=>t.hs.getAllFromCollectionGroup(s,e,yT(r,-1),Number.MAX_SAFE_INTEGER)).then(s=>(MS(t,e,s),s))}function MS(n,e,t){let r=n.ls.get(e)||ve.min();t.forEach((s,a)=>{a.readTime.compareTo(r)>0&&(r=a.readTime)}),n.ls.set(e,r)}async function B1(n,e,t,r){const s=ae(n);let a=Pe(),u=Sn();for(const p of t){const y=e.As(p.metadata.name);p.document&&(a=a.add(y));const w=e.Rs(p);w.setReadTime(e.Vs(p.metadata.readTime)),u=u.insert(y,w)}const h=s.hs.newChangeBuffer({trackRemovals:!0}),f=await Ja(s,function(y){return dn(au(De.fromString(`__bundle__/docs/${y}`)))}(r));return s.persistence.runTransaction("Apply bundle documents","readwrite",p=>VS(p,h,u).next(y=>(h.apply(p),y)).next(y=>s.Gr.removeMatchingKeysForTargetId(p,f.targetId).next(()=>s.Gr.addMatchingKeys(p,a,f.targetId)).next(()=>s.localDocuments.getLocalViewOfDocuments(p,y.Is,y.ds)).next(()=>y.Is)))}async function z1(n,e,t=Pe()){const r=await Ja(n,dn(Ag(e.bundledQuery))),s=ae(n);return s.persistence.runTransaction("Save named query","readwrite",a=>{const u=wt(e.readTime);if(r.snapshotVersion.compareTo(u)>=0)return s.jr.saveNamedQuery(a,e);const h=r.withResumeToken(mt.EMPTY_BYTE_STRING,u);return s.us=s.us.insert(h.targetId,h),s.Gr.updateTargetData(a,h).next(()=>s.Gr.removeMatchingKeysForTargetId(a,r.targetId)).next(()=>s.Gr.addMatchingKeys(a,t,r.targetId)).next(()=>s.jr.saveNamedQuery(a,e))})}function lE(n,e){return`firestore_clients_${n}_${e}`}function cE(n,e,t){let r=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function rm(n,e){return`firestore_targets_${n}_${e}`}class Ad{constructor(e,t,r,s){this.user=e,this.batchId=t,this.state=r,this.error=s}static fs(e,t,r){const s=JSON.parse(r);let a,u=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return u&&s.error&&(u=typeof s.error.message=="string"&&typeof s.error.code=="string",u&&(a=new Y(s.error.code,s.error.message))),u?new Ad(e,t,s.state,a):(vt("SharedClientState",`Failed to parse mutation state for ID '${t}': ${r}`),null)}gs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class kl{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static fs(e,t){const r=JSON.parse(t);let s,a=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return a&&r.error&&(a=typeof r.error.message=="string"&&typeof r.error.code=="string",a&&(s=new Y(r.error.code,r.error.message))),a?new kl(e,r.state,s):(vt("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}gs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Pd{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static fs(e,t){const r=JSON.parse(t);let s=typeof r=="object"&&r.activeTargetIds instanceof Array,a=yg();for(let u=0;s&&u<r.activeTargetIds.length;++u)s=TT(r.activeTargetIds[u]),a=a.add(r.activeTargetIds[u]);return s?new Pd(e,a):(vt("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class Vg{constructor(e,t){this.clientId=e,this.onlineState=t}static fs(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new Vg(t.clientId,t.onlineState):(vt("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Om{constructor(){this.activeTargetIds=yg()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class im{constructor(e,t,r,s,a){this.window=e,this.li=t,this.persistenceKey=r,this.ws=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Ss=this.bs.bind(this),this.Ds=new Xe(Ae),this.started=!1,this.vs=[];const u=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=a,this.Cs=lE(this.persistenceKey,this.ws),this.Fs=function(f){return`firestore_sequence_number_${f}`}(this.persistenceKey),this.Ds=this.Ds.insert(this.ws,new Om),this.Ms=new RegExp(`^firestore_clients_${u}_([^_]*)$`),this.xs=new RegExp(`^firestore_mutations_${u}_(\\d+)(?:_(.*))?$`),this.Os=new RegExp(`^firestore_targets_${u}_(\\d+)$`),this.Ns=function(f){return`firestore_online_state_${f}`}(this.persistenceKey),this.Bs=function(f){return`firestore_bundle_loaded_v2_${f}`}(this.persistenceKey),this.window.addEventListener("storage",this.Ss)}static p(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.$i();for(const r of e){if(r===this.ws)continue;const s=this.getItem(lE(this.persistenceKey,r));if(s){const a=Pd.fs(r,s);a&&(this.Ds=this.Ds.insert(a.clientId,a))}}this.Ls();const t=this.storage.getItem(this.Ns);if(t){const r=this.ks(t);r&&this.qs(r)}for(const r of this.vs)this.bs(r);this.vs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Fs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Qs(this.Ds)}isActiveQueryTarget(e){let t=!1;return this.Ds.forEach((r,s)=>{s.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Ks(e,"pending")}updateMutationState(e,t,r){this.Ks(e,t,r),this.$s(e)}addLocalQueryTarget(e,t=!0){let r="not-current";if(this.isActiveQueryTarget(e)){const s=this.storage.getItem(rm(this.persistenceKey,e));if(s){const a=kl.fs(e,s);a&&(r=a.state)}}return t&&this.Us.ps(e),this.Ls(),r}removeLocalQueryTarget(e){this.Us.ys(e),this.Ls()}isLocalQueryTarget(e){return this.Us.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(rm(this.persistenceKey,e))}updateQueryState(e,t,r){this.Ws(e,t,r)}handleUserChange(e,t,r){t.forEach(s=>{this.$s(s)}),this.currentUser=e,r.forEach(s=>{this.addPendingMutation(s)})}setOnlineState(e){this.Gs(e)}notifyBundleLoaded(e){this.zs(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Ss),this.removeItem(this.Cs),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return Z("SharedClientState","READ",e,t),t}setItem(e,t){Z("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){Z("SharedClientState","REMOVE",e),this.storage.removeItem(e)}bs(e){const t=e;if(t.storageArea===this.storage){if(Z("SharedClientState","EVENT",t.key,t.newValue),t.key===this.Cs)return void vt("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.li.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Ms.test(t.key)){if(t.newValue==null){const r=this.js(t.key);return this.Hs(r,null)}{const r=this.Js(t.key,t.newValue);if(r)return this.Hs(r.clientId,r)}}else if(this.xs.test(t.key)){if(t.newValue!==null){const r=this.Ys(t.key,t.newValue);if(r)return this.Zs(r)}}else if(this.Os.test(t.key)){if(t.newValue!==null){const r=this.Xs(t.key,t.newValue);if(r)return this.eo(r)}}else if(t.key===this.Ns){if(t.newValue!==null){const r=this.ks(t.newValue);if(r)return this.qs(r)}}else if(t.key===this.Fs){const r=function(a){let u=In.oe;if(a!=null)try{const h=JSON.parse(a);ge(typeof h=="number"),u=h}catch(h){vt("SharedClientState","Failed to read sequence number from WebStorage",h)}return u}(t.newValue);r!==In.oe&&this.sequenceNumberHandler(r)}else if(t.key===this.Bs){const r=this.no(t.newValue);await Promise.all(r.map(s=>this.syncEngine.ro(s)))}}}else this.vs.push(t)})}}get Us(){return this.Ds.get(this.ws)}Ls(){this.setItem(this.Cs,this.Us.gs())}Ks(e,t,r){const s=new Ad(this.currentUser,e,t,r),a=cE(this.persistenceKey,this.currentUser,e);this.setItem(a,s.gs())}$s(e){const t=cE(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Gs(e){const t={clientId:this.ws,onlineState:e};this.storage.setItem(this.Ns,JSON.stringify(t))}Ws(e,t,r){const s=rm(this.persistenceKey,e),a=new kl(e,t,r);this.setItem(s,a.gs())}zs(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Bs,t)}js(e){const t=this.Ms.exec(e);return t?t[1]:null}Js(e,t){const r=this.js(e);return Pd.fs(r,t)}Ys(e,t){const r=this.xs.exec(e),s=Number(r[1]),a=r[2]!==void 0?r[2]:null;return Ad.fs(new Ft(a),s,t)}Xs(e,t){const r=this.Os.exec(e),s=Number(r[1]);return kl.fs(s,t)}ks(e){return Vg.fs(e)}no(e){return JSON.parse(e)}async Zs(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.io(e.batchId,e.state,e.error);Z("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}eo(e){return this.syncEngine.so(e.targetId,e.state,e.error)}Hs(e,t){const r=t?this.Ds.insert(e,t):this.Ds.remove(e),s=this.Qs(this.Ds),a=this.Qs(r),u=[],h=[];return a.forEach(f=>{s.has(f)||u.push(f)}),s.forEach(f=>{a.has(f)||h.push(f)}),this.syncEngine.oo(u,h).then(()=>{this.Ds=r})}qs(e){this.Ds.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Qs(e){let t=yg();return e.forEach((r,s)=>{t=t.unionWith(s.activeTargetIds)}),t}}class FS{constructor(){this._o=new Om,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,r){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new Om,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j1{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){Z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){Z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zh=null;function sm(){return zh===null?zh=function(){return 268435456+Math.round(2147483648*Math.random())}():zh++,"0x"+zh.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q1{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt="WebChannelConnection";class G1 extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+t.host,this.Mo=`projects/${s}/databases/${a}`,this.xo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${a}`}Oo(t,r,s,a,u){const h=sm(),f=this.No(t,r.toUriEncodedString());Z("RestConnection",`Sending RPC '${t}' ${h}:`,f,s);const p={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Bo(p,a,u),this.Lo(t,f,p,s).then(y=>(Z("RestConnection",`Received RPC '${t}' ${h}: `,y),y),y=>{throw Nr("RestConnection",`RPC '${t}' ${h} failed with error: `,y,"url: ",f,"request:",s),y})}ko(t,r,s,a,u,h){return this.Oo(t,r,s,a,u)}Bo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ou}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((a,u)=>t[u]=a),s&&s.headers.forEach((a,u)=>t[u]=a)}No(t,r){const s=$1[t];return`${this.Fo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Lo(e,t,r,s){const a=sm();return new Promise((u,h)=>{const f=new cT;f.setWithCredentials(!0),f.listenOnce(hT.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case Xh.NO_ERROR:const y=f.getResponseJson();Z(Xt,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(y)),u(y);break;case Xh.TIMEOUT:Z(Xt,`RPC '${e}' ${a} timed out`),h(new Y(q.DEADLINE_EXCEEDED,"Request time out"));break;case Xh.HTTP_ERROR:const w=f.getStatus();if(Z(Xt,`RPC '${e}' ${a} failed with status:`,w,"response text:",f.getResponseText()),w>0){let I=f.getResponseJson();Array.isArray(I)&&(I=I[0]);const R=I==null?void 0:I.error;if(R&&R.status&&R.message){const k=function(D){const G=D.toLowerCase().replace(/_/g,"-");return Object.values(q).indexOf(G)>=0?G:q.UNKNOWN}(R.status);h(new Y(k,R.message))}else h(new Y(q.UNKNOWN,"Server responded with status "+f.getStatus()))}else h(new Y(q.UNAVAILABLE,"Connection failed."));break;default:ce()}}finally{Z(Xt,`RPC '${e}' ${a} completed.`)}});const p=JSON.stringify(s);Z(Xt,`RPC '${e}' ${a} sending request:`,s),f.send(t,"POST",p,r,15)})}qo(e,t,r){const s=sm(),a=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],u=pT(),h=fT(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},p=this.longPollingOptions.timeoutSeconds;p!==void 0&&(f.longPollingTimeout=Math.round(1e3*p)),this.useFetchStreams&&(f.useFetchStreams=!0),this.Bo(f.initMessageHeaders,t,r),f.encodeInitMessageHeaders=!0;const y=a.join("");Z(Xt,`Creating RPC '${e}' stream ${s}: ${y}`,f);const w=u.createWebChannel(y,f);let I=!1,R=!1;const k=new q1({Eo:D=>{R?Z(Xt,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(I||(Z(Xt,`Opening RPC '${e}' stream ${s} transport.`),w.open(),I=!0),Z(Xt,`RPC '${e}' stream ${s} sending:`,D),w.send(D))},Ao:()=>w.close()}),L=(D,G,K)=>{D.listen(G,Q=>{try{K(Q)}catch(re){setTimeout(()=>{throw re},0)}})};return L(w,wl.EventType.OPEN,()=>{R||(Z(Xt,`RPC '${e}' stream ${s} transport opened.`),k.So())}),L(w,wl.EventType.CLOSE,()=>{R||(R=!0,Z(Xt,`RPC '${e}' stream ${s} transport closed`),k.Do())}),L(w,wl.EventType.ERROR,D=>{R||(R=!0,Nr(Xt,`RPC '${e}' stream ${s} transport errored:`,D),k.Do(new Y(q.UNAVAILABLE,"The operation could not be completed")))}),L(w,wl.EventType.MESSAGE,D=>{var G;if(!R){const K=D.data[0];ge(!!K);const Q=K,re=(Q==null?void 0:Q.error)||((G=Q[0])===null||G===void 0?void 0:G.error);if(re){Z(Xt,`RPC '${e}' stream ${s} received error:`,re);const me=re.status;let de=function(P){const N=St[P];if(N!==void 0)return nS(N)}(me),x=re.message;de===void 0&&(de=q.INTERNAL,x="Unknown error status: "+me+" with message "+re.message),R=!0,k.Do(new Y(de,x)),w.close()}else Z(Xt,`RPC '${e}' stream ${s} received:`,K),k.vo(K)}}),L(h,dT.STAT_EVENT,D=>{D.stat===vm.PROXY?Z(Xt,`RPC '${e}' stream ${s} detected buffering proxy`):D.stat===vm.NOPROXY&&Z(Xt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{k.bo()},0),k}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function US(){return typeof window<"u"?window:null}function od(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hc(n){return new ZD(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(e,t,r=1e3,s=1.5,a=6e4){this.li=e,this.timerId=t,this.Qo=r,this.Ko=s,this.$o=a,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),s=Math.max(0,t-r);s>0&&Z("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,s,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BS{constructor(e,t,r,s,a,u,h,f){this.li=e,this.Yo=r,this.Zo=s,this.connection=a,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=h,this.listener=f,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new Og(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===q.RESOURCE_EXHAUSTED?(vt(t.toString()),vt("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Xo===t&&this.I_(r,s)},r=>{e(()=>{const s=new Y(q.UNKNOWN,"Fetching auth token failed: "+r.message);return this.d_(s)})})}I_(e,t){const r=this.T_(this.Xo);this.stream=this.E_(e,t),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(s=>{r(()=>this.d_(s))}),this.stream.onMessage(s=>{r(()=>++this.n_==1?this.A_(s):this.onNext(s))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}d_(e){return Z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(Z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class W1 extends BS{constructor(e,t,r,s,a,u){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,u),this.serializer=a}E_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=n1(this.serializer,e),r=function(a){if(!("targetChange"in a))return ve.min();const u=a.targetChange;return u.targetIds&&u.targetIds.length?ve.min():u.readTime?wt(u.readTime):ve.min()}(e);return this.listener.R_(t,r)}V_(e){const t={};t.database=xm(this.serializer),t.addTarget=function(a,u){let h;const f=u.target;if(h=yd(f)?{documents:dS(a,f)}:{query:fS(a,f).ct},h.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){h.resumeToken=oS(a,u.resumeToken);const p=Cm(a,u.expectedCount);p!==null&&(h.expectedCount=p)}else if(u.snapshotVersion.compareTo(ve.min())>0){h.readTime=Qa(a,u.snapshotVersion.toTimestamp());const p=Cm(a,u.expectedCount);p!==null&&(h.expectedCount=p)}return h}(this.serializer,e);const r=i1(this.serializer,e);r&&(t.labels=r),this.c_(t)}m_(e){const t={};t.database=xm(this.serializer),t.removeTarget=e,this.c_(t)}}class K1 extends BS{constructor(e,t,r,s,a,u){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,u),this.serializer=a}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}E_(e,t){return this.connection.qo("Write",e,t)}A_(e){return ge(!!e.streamToken),this.lastStreamToken=e.streamToken,ge(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){ge(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=r1(e.writeResults,e.commitTime),r=wt(e.commitTime);return this.listener.y_(r,t)}w_(){const e={};e.database=xm(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>$l(this.serializer,r))};this.c_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H1 extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.S_=!1}b_(){if(this.S_)throw new Y(q.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,r,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Oo(e,km(t,r),s,a,u)).catch(a=>{throw a.name==="FirebaseError"?(a.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new Y(q.UNKNOWN,a.toString())})}ko(e,t,r,s,a){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.ko(e,km(t,r),s,u,h,a)).catch(u=>{throw u.name==="FirebaseError"?(u.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new Y(q.UNKNOWN,u.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class Q1{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(vt(t),this.C_=!1):Z("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1{constructor(e,t,r,s,a){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.B_=[],this.L_=new Map,this.k_=new Set,this.q_=[],this.Q_=a,this.Q_.uo(u=>{r.enqueueAndForget(async()=>{Ss(this)&&(Z("RemoteStore","Restarting streams for network reachability change."),await async function(f){const p=ae(f);p.k_.add(4),await cu(p),p.K_.set("Unknown"),p.k_.delete(4),await dc(p)}(this))})}),this.K_=new Q1(r,s)}}async function dc(n){if(Ss(n))for(const e of n.q_)await e(!0)}async function cu(n){for(const e of n.q_)await e(!1)}function Qd(n,e){const t=ae(n);t.L_.has(e.targetId)||(t.L_.set(e.targetId,e),Fg(t)?Mg(t):du(t).s_()&&Lg(t,e))}function Xa(n,e){const t=ae(n),r=du(t);t.L_.delete(e),r.s_()&&zS(t,e),t.L_.size===0&&(r.s_()?r.a_():Ss(t)&&t.K_.set("Unknown"))}function Lg(n,e){if(n.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ve.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}du(n).V_(e)}function zS(n,e){n.U_.xe(e),du(n).m_(e)}function Mg(n){n.U_=new QD({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>n.L_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),du(n).start(),n.K_.F_()}function Fg(n){return Ss(n)&&!du(n).i_()&&n.L_.size>0}function Ss(n){return ae(n).k_.size===0}function jS(n){n.U_=void 0}async function Y1(n){n.K_.set("Online")}async function X1(n){n.L_.forEach((e,t)=>{Lg(n,e)})}async function Z1(n,e){jS(n),Fg(n)?(n.K_.O_(e),Mg(n)):n.K_.set("Unknown")}async function eN(n,e,t){if(n.K_.set("Online"),e instanceof sS&&e.state===2&&e.cause)try{await async function(s,a){const u=a.cause;for(const h of a.targetIds)s.L_.has(h)&&(await s.remoteSyncer.rejectListen(h,u),s.L_.delete(h),s.U_.removeTarget(h))}(n,e)}catch(r){Z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Cd(n,r)}else if(e instanceof sd?n.U_.$e(e):e instanceof iS?n.U_.Je(e):n.U_.Ge(e),!t.isEqual(ve.min()))try{const r=await NS(n.localStore);t.compareTo(r)>=0&&await function(a,u){const h=a.U_.it(u);return h.targetChanges.forEach((f,p)=>{if(f.resumeToken.approximateByteSize()>0){const y=a.L_.get(p);y&&a.L_.set(p,y.withResumeToken(f.resumeToken,u))}}),h.targetMismatches.forEach((f,p)=>{const y=a.L_.get(f);if(!y)return;a.L_.set(f,y.withResumeToken(mt.EMPTY_BYTE_STRING,y.snapshotVersion)),zS(a,f);const w=new ai(y.target,f,p,y.sequenceNumber);Lg(a,w)}),a.remoteSyncer.applyRemoteEvent(h)}(n,t)}catch(r){Z("RemoteStore","Failed to raise snapshot:",r),await Cd(n,r)}}async function Cd(n,e,t){if(!Is(e))throw e;n.k_.add(1),await cu(n),n.K_.set("Offline"),t||(t=()=>NS(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{Z("RemoteStore","Retrying IndexedDB access"),await t(),n.k_.delete(1),await dc(n)})}function $S(n,e){return e().catch(t=>Cd(n,t,e))}async function hu(n){const e=ae(n),t=gs(e);let r=e.B_.length>0?e.B_[e.B_.length-1].batchId:-1;for(;tN(e);)try{const s=await U1(e.localStore,r);if(s===null){e.B_.length===0&&t.a_();break}r=s.batchId,nN(e,s)}catch(s){await Cd(e,s)}qS(e)&&GS(e)}function tN(n){return Ss(n)&&n.B_.length<10}function nN(n,e){n.B_.push(e);const t=gs(n);t.s_()&&t.f_&&t.g_(e.mutations)}function qS(n){return Ss(n)&&!gs(n).i_()&&n.B_.length>0}function GS(n){gs(n).start()}async function rN(n){gs(n).w_()}async function iN(n){const e=gs(n);for(const t of n.B_)e.g_(t.mutations)}async function sN(n,e,t){const r=n.B_.shift(),s=Ig.from(r,e,t);await $S(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await hu(n)}async function oN(n,e){e&&gs(n).f_&&await async function(r,s){if(function(u){return tS(u)&&u!==q.ABORTED}(s.code)){const a=r.B_.shift();gs(r).__(),await $S(r,()=>r.remoteSyncer.rejectFailedWrite(a.batchId,s)),await hu(r)}}(n,e),qS(n)&&GS(n)}async function dE(n,e){const t=ae(n);t.asyncQueue.verifyOperationInProgress(),Z("RemoteStore","RemoteStore received new credentials");const r=Ss(t);t.k_.add(3),await cu(t),r&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await dc(t)}async function Lm(n,e){const t=ae(n);e?(t.k_.delete(2),await dc(t)):e||(t.k_.add(2),await cu(t),t.K_.set("Unknown"))}function du(n){return n.W_||(n.W_=function(t,r,s){const a=ae(t);return a.b_(),new W1(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)}(n.datastore,n.asyncQueue,{Ro:Y1.bind(null,n),mo:X1.bind(null,n),po:Z1.bind(null,n),R_:eN.bind(null,n)}),n.q_.push(async e=>{e?(n.W_.__(),Fg(n)?Mg(n):n.K_.set("Unknown")):(await n.W_.stop(),jS(n))})),n.W_}function gs(n){return n.G_||(n.G_=function(t,r,s){const a=ae(t);return a.b_(),new K1(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)}(n.datastore,n.asyncQueue,{Ro:()=>Promise.resolve(),mo:rN.bind(null,n),po:oN.bind(null,n),p_:iN.bind(null,n),y_:sN.bind(null,n)}),n.q_.push(async e=>{e?(n.G_.__(),await hu(n)):(await n.G_.stop(),n.B_.length>0&&(Z("RemoteStore",`Stopping write stream with ${n.B_.length} pending writes`),n.B_=[]))})),n.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e,t,r,s,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=a,this.deferred=new Gt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,a){const u=Date.now()+r,h=new Ug(e,t,u,s,a);return h.start(r),h}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Y(q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function fu(n,e){if(vt("AsyncQueue",`${e}: ${n}`),Is(n))return new Y(q.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{static emptySet(e){return new Fa(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||se.comparator(t.key,r.key):(t,r)=>se.comparator(t.key,r.key),this.keyedMap=El(),this.sortedSet=new Xe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Fa)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,a=r.getNext().key;if(!s.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Fa;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(){this.z_=new Xe(se.comparator)}track(e){const t=e.doc.key,r=this.z_.get(t);r?e.type!==0&&r.type===3?this.z_=this.z_.insert(t,e):e.type===3&&r.type!==1?this.z_=this.z_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.z_=this.z_.remove(t):e.type===1&&r.type===2?this.z_=this.z_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):ce():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Za{constructor(e,t,r,s,a,u,h,f,p){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=a,this.fromCache=u,this.syncStateChanged=h,this.excludesMetadataChanges=f,this.hasCachedResults=p}static fromInitialDocuments(e,t,r,s,a){const u=[];return t.forEach(h=>{u.push({type:0,doc:h})}),new Za(e,t,Fa.emptySet(t),u,r,s,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&oc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aN{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class uN{constructor(){this.queries=pE(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,r){const s=ae(t),a=s.queries;s.queries=pE(),a.forEach((u,h)=>{for(const f of h.J_)f.onError(r)})})(this,new Y(q.ABORTED,"Firestore shutting down"))}}function pE(){return new Ei(n=>zT(n),oc)}async function Bg(n,e){const t=ae(n);let r=3;const s=e.query;let a=t.queries.get(s);a?!a.Y_()&&e.Z_()&&(r=2):(a=new aN,r=e.Z_()?0:1);try{switch(r){case 0:a.H_=await t.onListen(s,!0);break;case 1:a.H_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(u){const h=fu(u,`Initialization of query '${xa(e.query)}' failed`);return void e.onError(h)}t.queries.set(s,a),a.J_.push(e),e.ea(t.onlineState),a.H_&&e.ta(a.H_)&&jg(t)}async function zg(n,e){const t=ae(n),r=e.query;let s=3;const a=t.queries.get(r);if(a){const u=a.J_.indexOf(e);u>=0&&(a.J_.splice(u,1),a.J_.length===0?s=e.Z_()?0:1:!a.Y_()&&e.Z_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function lN(n,e){const t=ae(n);let r=!1;for(const s of e){const a=s.query,u=t.queries.get(a);if(u){for(const h of u.J_)h.ta(s)&&(r=!0);u.H_=s}}r&&jg(t)}function cN(n,e,t){const r=ae(n),s=r.queries.get(e);if(s)for(const a of s.J_)a.onError(t);r.queries.delete(e)}function jg(n){n.X_.forEach(e=>{e.next()})}var Mm,mE;(mE=Mm||(Mm={})).na="default",mE.Cache="cache";class $g{constructor(e,t,r){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Za(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const r=t!=="Offline";return(!this.options.ua||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=Za.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==Mm.Cache}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hN{constructor(e,t){this.ca=e,this.byteLength=t}la(){return"metadata"in this.ca}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(e){this.serializer=e}As(e){return br(this.serializer,e)}Rs(e){return e.metadata.exists?hS(this.serializer,e.document,!1):tt.newNoDocument(this.As(e.metadata.name),this.Vs(e.metadata.readTime))}Vs(e){return wt(e)}}class dN{constructor(e,t,r){this.ha=e,this.localStore=t,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=WS(e)}Pa(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.ca.namedQuery)this.queries.push(e.ca.namedQuery);else if(e.ca.documentMetadata){this.documents.push({metadata:e.ca.documentMetadata}),e.ca.documentMetadata.exists||++t;const r=De.fromString(e.ca.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.ca.document&&(this.documents[this.documents.length-1].document=e.ca.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}Ta(e){const t=new Map,r=new gE(this.serializer);for(const s of e)if(s.metadata.queries){const a=r.As(s.metadata.name);for(const u of s.metadata.queries){const h=(t.get(u)||Pe()).add(a);t.set(u,h)}}return t}async complete(){const e=await B1(this.localStore,new gE(this.serializer),this.documents,this.ha.id),t=this.Ta(this.documents);for(const r of this.queries)await z1(this.localStore,r,t.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Ia:this.collectionGroups,da:e}}}function WS(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KS{constructor(e){this.key=e}}class HS{constructor(e){this.key=e}}class QS{constructor(e,t){this.query=e,this.Ea=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=Pe(),this.mutatedKeys=Pe(),this.Va=$T(e),this.ma=new Fa(this.Va)}get fa(){return this.Ea}ga(e,t){const r=t?t.pa:new fE,s=t?t.ma:this.ma;let a=t?t.mutatedKeys:this.mutatedKeys,u=s,h=!1;const f=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,p=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((y,w)=>{const I=s.get(y),R=ac(this.query,w)?w:null,k=!!I&&this.mutatedKeys.has(I.key),L=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let D=!1;I&&R?I.data.isEqual(R.data)?k!==L&&(r.track({type:3,doc:R}),D=!0):this.ya(I,R)||(r.track({type:2,doc:R}),D=!0,(f&&this.Va(R,f)>0||p&&this.Va(R,p)<0)&&(h=!0)):!I&&R?(r.track({type:0,doc:R}),D=!0):I&&!R&&(r.track({type:1,doc:I}),D=!0,(f||p)&&(h=!0)),D&&(R?(u=u.add(R),a=L?a.add(y):a.delete(y)):(u=u.delete(y),a=a.delete(y)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const y=this.query.limitType==="F"?u.last():u.first();u=u.delete(y.key),a=a.delete(y.key),r.track({type:1,doc:y})}return{ma:u,pa:r,ss:h,mutatedKeys:a}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const a=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const u=e.pa.j_();u.sort((y,w)=>function(R,k){const L=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ce()}};return L(R)-L(k)}(y.type,w.type)||this.Va(y.doc,w.doc)),this.wa(r),s=s!=null&&s;const h=t&&!s?this.Sa():[],f=this.Ra.size===0&&this.current&&!s?1:0,p=f!==this.Aa;return this.Aa=f,u.length!==0||p?{snapshot:new Za(this.query,e.ma,a,u,e.mutatedKeys,f===0,p,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:h}:{ba:h}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new fE,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.Ea.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.Ea=this.Ea.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ea=this.Ea.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=Pe(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const t=[];return e.forEach(r=>{this.Ra.has(r)||t.push(new HS(r))}),this.Ra.forEach(r=>{e.has(r)||t.push(new KS(r))}),t}va(e){this.Ea=e.Es,this.Ra=Pe();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return Za.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class fN{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class pN{constructor(e){this.key=e,this.Fa=!1}}class mN{constructor(e,t,r,s,a,u){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=a,this.maxConcurrentLimboResolutions=u,this.Ma={},this.xa=new Ei(h=>zT(h),oc),this.Oa=new Map,this.Na=new Set,this.Ba=new Xe(se.comparator),this.La=new Map,this.ka=new kg,this.qa={},this.Qa=new Map,this.Ka=Io.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function gN(n,e,t=!0){const r=Jd(n);let s;const a=r.xa.get(e);return a?(r.sharedClientState.addLocalQueryTarget(a.targetId),s=a.view.Ca()):s=await JS(r,e,t,!0),s}async function _N(n,e){const t=Jd(n);await JS(t,e,!0,!1)}async function JS(n,e,t,r){const s=await Ja(n.localStore,dn(e)),a=s.targetId,u=n.sharedClientState.addLocalQueryTarget(a,t);let h;return r&&(h=await qg(n,e,a,u==="current",s.resumeToken)),n.isPrimaryClient&&t&&Qd(n.remoteStore,s),h}async function qg(n,e,t,r,s){n.Ua=(w,I,R)=>async function(L,D,G,K){let Q=D.view.ga(G);Q.ss&&(Q=await Rd(L.localStore,D.query,!1).then(({documents:x})=>D.view.ga(x,Q)));const re=K&&K.targetChanges.get(D.targetId),me=K&&K.targetMismatches.get(D.targetId)!=null,de=D.view.applyChanges(Q,L.isPrimaryClient,re,me);return Fm(L,D.targetId,de.ba),de.snapshot}(n,w,I,R);const a=await Rd(n.localStore,e,!0),u=new QS(e,a.Es),h=u.ga(a.documents),f=cc.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),p=u.applyChanges(h,n.isPrimaryClient,f);Fm(n,t,p.ba);const y=new fN(e,t,u);return n.xa.set(e,y),n.Oa.has(t)?n.Oa.get(t).push(e):n.Oa.set(t,[e]),p.snapshot}async function yN(n,e,t){const r=ae(n),s=r.xa.get(e),a=r.Oa.get(s.targetId);if(a.length>1)return r.Oa.set(s.targetId,a.filter(u=>!oc(u,e))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ya(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Xa(r.remoteStore,s.targetId),eu(r,s.targetId)}).catch(Es)):(eu(r,s.targetId),await Ya(r.localStore,s.targetId,!0))}async function vN(n,e){const t=ae(n),r=t.xa.get(e),s=t.Oa.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Xa(t.remoteStore,r.targetId))}async function wN(n,e,t){const r=Hg(n);try{const s=await function(u,h){const f=ae(u),p=ut.now(),y=h.reduce((R,k)=>R.add(k.key),Pe());let w,I;return f.persistence.runTransaction("Locally write mutations","readwrite",R=>{let k=Sn(),L=Pe();return f.hs.getEntries(R,y).next(D=>{k=D,k.forEach((G,K)=>{K.isValidDocument()||(L=L.add(G))})}).next(()=>f.localDocuments.getOverlayedDocuments(R,k)).next(D=>{w=D;const G=[];for(const K of h){const Q=WD(K,w.get(K.key).overlayedDocument);Q!=null&&G.push(new Ii(K.key,Q,DT(Q.value.mapValue),at.exists(!0)))}return f.mutationQueue.addMutationBatch(R,p,G,h)}).next(D=>{I=D;const G=D.applyToLocalDocumentSet(w,L);return f.documentOverlayCache.saveOverlays(R,D.batchId,G)})}).then(()=>({batchId:I.batchId,changes:GT(w)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(u,h,f){let p=u.qa[u.currentUser.toKey()];p||(p=new Xe(Ae)),p=p.insert(h,f),u.qa[u.currentUser.toKey()]=p}(r,s.batchId,t),await Ti(r,s.changes),await hu(r.remoteStore)}catch(s){const a=fu(s,"Failed to persist write");t.reject(a)}}async function YS(n,e){const t=ae(n);try{const r=await F1(t.localStore,e);e.targetChanges.forEach((s,a)=>{const u=t.La.get(a);u&&(ge(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?u.Fa=!0:s.modifiedDocuments.size>0?ge(u.Fa):s.removedDocuments.size>0&&(ge(u.Fa),u.Fa=!1))}),await Ti(t,r,e)}catch(r){await Es(r)}}function _E(n,e,t){const r=ae(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.xa.forEach((a,u)=>{const h=u.view.ea(e);h.snapshot&&s.push(h.snapshot)}),function(u,h){const f=ae(u);f.onlineState=h;let p=!1;f.queries.forEach((y,w)=>{for(const I of w.J_)I.ea(h)&&(p=!0)}),p&&jg(f)}(r.eventManager,e),s.length&&r.Ma.R_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function EN(n,e,t){const r=ae(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.La.get(e),a=s&&s.key;if(a){let u=new Xe(se.comparator);u=u.insert(a,tt.newNoDocument(a,ve.min()));const h=Pe().add(a),f=new lc(ve.min(),new Map,new Xe(Ae),u,h);await YS(r,f),r.Ba=r.Ba.remove(a),r.La.delete(e),Kg(r)}else await Ya(r.localStore,e,!1).then(()=>eu(r,e,t)).catch(Es)}async function IN(n,e){const t=ae(n),r=e.batch.batchId;try{const s=await M1(t.localStore,e);Wg(t,r,null),Gg(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Ti(t,s)}catch(s){await Es(s)}}async function TN(n,e,t){const r=ae(n);try{const s=await function(u,h){const f=ae(u);return f.persistence.runTransaction("Reject batch","readwrite-primary",p=>{let y;return f.mutationQueue.lookupMutationBatch(p,h).next(w=>(ge(w!==null),y=w.keys(),f.mutationQueue.removeMutationBatch(p,w))).next(()=>f.mutationQueue.performConsistencyCheck(p)).next(()=>f.documentOverlayCache.removeOverlaysForBatchId(p,y,h)).next(()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(p,y)).next(()=>f.localDocuments.getDocuments(p,y))})}(r.localStore,e);Wg(r,e,t),Gg(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Ti(r,s)}catch(s){await Es(s)}}async function SN(n,e){const t=ae(n);Ss(t.remoteStore)||Z("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(u){const h=ae(u);return h.persistence.runTransaction("Get highest unacknowledged batch id","readonly",f=>h.mutationQueue.getHighestUnacknowledgedBatchId(f))}(t.localStore);if(r===-1)return void e.resolve();const s=t.Qa.get(r)||[];s.push(e),t.Qa.set(r,s)}catch(r){const s=fu(r,"Initialization of waitForPendingWrites() operation failed");e.reject(s)}}function Gg(n,e){(n.Qa.get(e)||[]).forEach(t=>{t.resolve()}),n.Qa.delete(e)}function Wg(n,e,t){const r=ae(n);let s=r.qa[r.currentUser.toKey()];if(s){const a=s.get(e);a&&(t?a.reject(t):a.resolve(),s=s.remove(e)),r.qa[r.currentUser.toKey()]=s}}function eu(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Oa.get(e))n.xa.delete(r),t&&n.Ma.Wa(r,t);n.Oa.delete(e),n.isPrimaryClient&&n.ka.yr(e).forEach(r=>{n.ka.containsKey(r)||XS(n,r)})}function XS(n,e){n.Na.delete(e.path.canonicalString());const t=n.Ba.get(e);t!==null&&(Xa(n.remoteStore,t),n.Ba=n.Ba.remove(e),n.La.delete(t),Kg(n))}function Fm(n,e,t){for(const r of t)r instanceof KS?(n.ka.addReference(r.key,e),RN(n,r)):r instanceof HS?(Z("SyncEngine","Document no longer in limbo: "+r.key),n.ka.removeReference(r.key,e),n.ka.containsKey(r.key)||XS(n,r.key)):ce()}function RN(n,e){const t=e.key,r=t.path.canonicalString();n.Ba.get(t)||n.Na.has(r)||(Z("SyncEngine","New document in limbo: "+t),n.Na.add(r),Kg(n))}function Kg(n){for(;n.Na.size>0&&n.Ba.size<n.maxConcurrentLimboResolutions;){const e=n.Na.values().next().value;n.Na.delete(e);const t=new se(De.fromString(e)),r=n.Ka.next();n.La.set(r,new pN(t)),n.Ba=n.Ba.insert(t,r),Qd(n.remoteStore,new ai(dn(au(t.path)),r,"TargetPurposeLimboResolution",In.oe))}}async function Ti(n,e,t){const r=ae(n),s=[],a=[],u=[];r.xa.isEmpty()||(r.xa.forEach((h,f)=>{u.push(r.Ua(f,e,t).then(p=>{var y;if((p||t)&&r.isPrimaryClient){const w=p?!p.fromCache:(y=t==null?void 0:t.targetChanges.get(f.targetId))===null||y===void 0?void 0:y.current;r.sharedClientState.updateQueryState(f.targetId,w?"current":"not-current")}if(p){s.push(p);const w=Ng.zi(f.targetId,p);a.push(w)}}))}),await Promise.all(u),r.Ma.R_(s),await async function(f,p){const y=ae(f);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>U.forEach(p,I=>U.forEach(I.Wi,R=>y.persistence.referenceDelegate.addReference(w,I.targetId,R)).next(()=>U.forEach(I.Gi,R=>y.persistence.referenceDelegate.removeReference(w,I.targetId,R)))))}catch(w){if(!Is(w))throw w;Z("LocalStore","Failed to update sequence numbers: "+w)}for(const w of p){const I=w.targetId;if(!w.fromCache){const R=y.us.get(I),k=R.snapshotVersion,L=R.withLastLimboFreeSnapshotVersion(k);y.us=y.us.insert(I,L)}}}(r.localStore,a))}async function AN(n,e){const t=ae(n);if(!t.currentUser.isEqual(e)){Z("SyncEngine","User change. New user:",e.toKey());const r=await DS(t.localStore,e);t.currentUser=e,function(a,u){a.Qa.forEach(h=>{h.forEach(f=>{f.reject(new Y(q.CANCELLED,u))})}),a.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ti(t,r.Ts)}}function PN(n,e){const t=ae(n),r=t.La.get(e);if(r&&r.Fa)return Pe().add(r.key);{let s=Pe();const a=t.Oa.get(e);if(!a)return s;for(const u of a){const h=t.xa.get(u);s=s.unionWith(h.view.fa)}return s}}async function CN(n,e){const t=ae(n),r=await Rd(t.localStore,e.query,!0),s=e.view.va(r);return t.isPrimaryClient&&Fm(t,e.targetId,s.ba),s}async function kN(n,e){const t=ae(n);return LS(t.localStore,e).then(r=>Ti(t,r))}async function xN(n,e,t,r){const s=ae(n),a=await function(h,f){const p=ae(h),y=ae(p.mutationQueue);return p.persistence.runTransaction("Lookup mutation documents","readonly",w=>y.On(w,f).next(I=>I?p.localDocuments.getDocuments(w,I):U.resolve(null)))}(s.localStore,e);a!==null?(t==="pending"?await hu(s.remoteStore):t==="acknowledged"||t==="rejected"?(Wg(s,e,r||null),Gg(s,e),function(h,f){ae(ae(h).mutationQueue).Bn(f)}(s.localStore,e)):ce(),await Ti(s,a)):Z("SyncEngine","Cannot apply mutation batch with id: "+e)}async function bN(n,e){const t=ae(n);if(Jd(t),Hg(t),e===!0&&t.$a!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),s=await yE(t,r.toArray());t.$a=!0,await Lm(t.remoteStore,!0);for(const a of s)Qd(t.remoteStore,a)}else if(e===!1&&t.$a!==!1){const r=[];let s=Promise.resolve();t.Oa.forEach((a,u)=>{t.sharedClientState.isLocalQueryTarget(u)?r.push(u):s=s.then(()=>(eu(t,u),Ya(t.localStore,u,!0))),Xa(t.remoteStore,u)}),await s,await yE(t,r),function(u){const h=ae(u);h.La.forEach((f,p)=>{Xa(h.remoteStore,p)}),h.ka.wr(),h.La=new Map,h.Ba=new Xe(se.comparator)}(t),t.$a=!1,await Lm(t.remoteStore,!1)}}async function yE(n,e,t){const r=ae(n),s=[],a=[];for(const u of e){let h;const f=r.Oa.get(u);if(f&&f.length!==0){h=await Ja(r.localStore,dn(f[0]));for(const p of f){const y=r.xa.get(p),w=await CN(r,y);w.snapshot&&a.push(w.snapshot)}}else{const p=await OS(r.localStore,u);h=await Ja(r.localStore,p),await qg(r,ZS(p),u,!1,h.resumeToken)}s.push(h)}return r.Ma.R_(a),s}function ZS(n){return BT(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function DN(n){return function(t){return ae(ae(t).persistence).$i()}(ae(n).localStore)}async function NN(n,e,t,r){const s=ae(n);if(s.$a)return void Z("SyncEngine","Ignoring unexpected query state notification.");const a=s.Oa.get(e);if(a&&a.length>0)switch(t){case"current":case"not-current":{const u=await LS(s.localStore,jT(a[0])),h=lc.createSynthesizedRemoteEventForCurrentChange(e,t==="current",mt.EMPTY_BYTE_STRING);await Ti(s,u,h);break}case"rejected":await Ya(s.localStore,e,!0),eu(s,e,r);break;default:ce()}}async function VN(n,e,t){const r=Jd(n);if(r.$a){for(const s of e){if(r.Oa.has(s)&&r.sharedClientState.isActiveQueryTarget(s)){Z("SyncEngine","Adding an already active target "+s);continue}const a=await OS(r.localStore,s),u=await Ja(r.localStore,a);await qg(r,ZS(a),u.targetId,!1,u.resumeToken),Qd(r.remoteStore,u)}for(const s of t)r.Oa.has(s)&&await Ya(r.localStore,s,!1).then(()=>{Xa(r.remoteStore,s),eu(r,s)}).catch(Es)}}function Jd(n){const e=ae(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=YS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=PN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=EN.bind(null,e),e.Ma.R_=lN.bind(null,e.eventManager),e.Ma.Wa=cN.bind(null,e.eventManager),e}function Hg(n){const e=ae(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=IN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=TN.bind(null,e),e}function ON(n,e,t){const r=ae(n);(async function(a,u,h){try{const f=await u.getMetadata();if(await function(R,k){const L=ae(R),D=wt(k.createTime);return L.persistence.runTransaction("hasNewerBundle","readonly",G=>L.jr.getBundleMetadata(G,k.id)).then(G=>!!G&&G.createTime.compareTo(D)>=0)}(a.localStore,f))return await u.close(),h._completeWith(function(R){return{taskState:"Success",documentsLoaded:R.totalDocuments,bytesLoaded:R.totalBytes,totalDocuments:R.totalDocuments,totalBytes:R.totalBytes}}(f)),Promise.resolve(new Set);h._updateProgress(WS(f));const p=new dN(f,a.localStore,u.serializer);let y=await u.Ga();for(;y;){const I=await p.Pa(y);I&&h._updateProgress(I),y=await u.Ga()}const w=await p.complete();return await Ti(a,w.da,void 0),await function(R,k){const L=ae(R);return L.persistence.runTransaction("Save bundle","readwrite",D=>L.jr.saveBundleMetadata(D,k))}(a.localStore,f),h._completeWith(w.progress),Promise.resolve(w.Ia)}catch(f){return Nr("SyncEngine",`Loading bundle failed with ${f}`),h._failWith(f),Promise.resolve(new Set)}})(r,e,t).then(s=>{r.sharedClientState.notifyBundleLoaded(s)})}class ql{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=hc(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return bS(this.persistence,new xS,e.initialUser,this.serializer)}ja(e){return new xg(Hd.ei,this.serializer)}za(e){return new FS}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ql.provider={build:()=>new ql};class LN extends ql{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){ge(this.persistence.referenceDelegate instanceof Sd);const r=this.persistence.referenceDelegate.garbageCollector;return new RS(r,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?Zt.withCacheSize(this.cacheSizeBytes):Zt.DEFAULT;return new xg(r=>Sd.ei(r,t),this.serializer)}}class eR extends ql{constructor(e,t,r){super(),this.Za=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Za.initialize(this,e),await Hg(this.Za.syncEngine),await hu(this.Za.remoteStore),await this.persistence.Si(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}Ha(e){return bS(this.persistence,new xS,e.initialUser,this.serializer)}Ja(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new RS(r,e.asyncQueue,t)}Ya(e,t){const r=new nD(t,this.persistence);return new tD(e.asyncQueue,r)}ja(e){const t=Dg(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Zt.withCacheSize(this.cacheSizeBytes):Zt.DEFAULT;return new bg(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,US(),od(),this.serializer,this.sharedClientState,!!this.forceOwnership)}za(e){return new FS}}class MN extends eR{constructor(e,t){super(e,t,!1),this.Za=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Za.syncEngine;this.sharedClientState instanceof im&&(this.sharedClientState.syncEngine={io:xN.bind(null,t),so:NN.bind(null,t),oo:VN.bind(null,t),$i:DN.bind(null,t),ro:kN.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Si(async r=>{await bN(this.Za.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}za(e){const t=US();if(!im.p(t))throw new Y(q.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=Dg(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new im(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class Gl{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>_E(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=AN.bind(null,this.syncEngine),await Lm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new uN}()}createDatastore(e){const t=hc(e.databaseInfo.databaseId),r=function(a){return new G1(a)}(e.databaseInfo);return function(a,u,h,f){return new H1(a,u,h,f)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,a,u,h){return new J1(r,s,a,u,h)}(this.localStore,this.datastore,e.asyncQueue,t=>_E(this.syncEngine,t,0),function(){return hE.p()?new hE:new j1}())}createSyncEngine(e,t){return function(s,a,u,h,f,p,y){const w=new mN(s,a,u,h,f,p);return y&&(w.$a=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const a=ae(s);Z("RemoteStore","RemoteStore shutting down."),a.k_.add(5),await cu(a),a.Q_.shutdown(),a.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Gl.provider={build:()=>new Gl};function vE(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const r={value:n.slice(t,t+e),done:!1};return t+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):vt("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FN{constructor(e,t){this.tu=e,this.serializer=t,this.metadata=new Gt,this.buffer=new Uint8Array,this.nu=function(){return new TextDecoder("utf-8")}(),this.ru().then(r=>{r&&r.la()?this.metadata.resolve(r.ca.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.ca)}`))},r=>this.metadata.reject(r))}close(){return this.tu.cancel()}async getMetadata(){return this.metadata.promise}async Ga(){return await this.getMetadata(),this.ru()}async ru(){const e=await this.iu();if(e===null)return null;const t=this.nu.decode(e),r=Number(t);isNaN(r)&&this.su(`length string (${t}) is not valid number`);const s=await this.ou(r);return new hN(JSON.parse(s),e.length+r)}_u(){return this.buffer.findIndex(e=>e===123)}async iu(){for(;this._u()<0&&!await this.au(););if(this.buffer.length===0)return null;const e=this._u();e<0&&this.su("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async ou(e){for(;this.buffer.length<e;)await this.au()&&this.su("Reached the end of bundle when more is expected.");const t=this.nu.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}su(e){throw this.tu.cancel(),new Error(`Invalid bundle format: ${e}`)}async au(){const e=await this.tu.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UN{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new Y(q.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await async function(s,a){const u=ae(s),h={documents:a.map(w=>jl(u.serializer,w))},f=await u.ko("BatchGetDocuments",u.serializer.databaseId,De.emptyPath(),h,a.length),p=new Map;f.forEach(w=>{const I=t1(u.serializer,w);p.set(I.key.toString(),I)});const y=[];return a.forEach(w=>{const I=p.get(w.toString());ge(!!I),y.push(I)}),y}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new lu(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{const s=se.fromPath(r);this.mutations.push(new wg(s,this.precondition(s)))}),await async function(r,s){const a=ae(r),u={writes:s.map(h=>$l(a.serializer,h))};await a.Oo("Commit",a.serializer.databaseId,De.emptyPath(),u)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw ce();t=ve.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new Y(q.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(ve.min())?at.exists(!1):at.updateTime(t):at.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(ve.min()))throw new Y(q.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return at.updateTime(t)}return at.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BN{constructor(e,t,r,s,a){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=s,this.deferred=a,this.uu=r.maxAttempts,this.r_=new Og(this.asyncQueue,"transaction_retry")}cu(){this.uu-=1,this.lu()}lu(){this.r_.jo(async()=>{const e=new UN(this.datastore),t=this.hu(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(s=>{this.Pu(s)}))}).catch(r=>{this.Pu(r)})})}hu(e){try{const t=this.updateFunction(e);return!ic(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Pu(e){this.uu>0&&this.Tu(e)?(this.uu-=1,this.asyncQueue.enqueueAndForget(()=>(this.lu(),Promise.resolve()))):this.deferred.reject(e)}Tu(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!tS(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zN{constructor(e,t,r,s,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Ft.UNAUTHENTICATED,this.clientId=gT.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(r,async u=>{Z("FirestoreClient","Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(r,u=>(Z("FirestoreClient","Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Gt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=fu(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function om(n,e){n.asyncQueue.verifyOperationInProgress(),Z("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await DS(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function wE(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Qg(n);Z("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>dE(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>dE(e.remoteStore,s)),n._onlineComponents=e}async function Qg(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){Z("FirestoreClient","Using user provided OfflineComponentProvider");try{await om(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===q.FAILED_PRECONDITION||s.code===q.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Nr("Error using user provided cache. Falling back to memory cache: "+t),await om(n,new ql)}}else Z("FirestoreClient","Using default OfflineComponentProvider"),await om(n,new LN(void 0));return n._offlineComponents}async function Xd(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(Z("FirestoreClient","Using user provided OnlineComponentProvider"),await wE(n,n._uninitializedComponentsProvider._online)):(Z("FirestoreClient","Using default OnlineComponentProvider"),await wE(n,new Gl))),n._onlineComponents}function tR(n){return Qg(n).then(e=>e.persistence)}function Jg(n){return Qg(n).then(e=>e.localStore)}function nR(n){return Xd(n).then(e=>e.remoteStore)}function Yg(n){return Xd(n).then(e=>e.syncEngine)}function jN(n){return Xd(n).then(e=>e.datastore)}async function tu(n){const e=await Xd(n),t=e.eventManager;return t.onListen=gN.bind(null,e.syncEngine),t.onUnlisten=yN.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=_N.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=vN.bind(null,e.syncEngine),t}function $N(n){return n.asyncQueue.enqueue(async()=>{const e=await tR(n),t=await nR(n);return e.setNetworkEnabled(!0),function(s){const a=ae(s);return a.k_.delete(0),dc(a)}(t)})}function qN(n){return n.asyncQueue.enqueue(async()=>{const e=await tR(n),t=await nR(n);return e.setNetworkEnabled(!1),async function(s){const a=ae(s);a.k_.add(0),await cu(a),a.K_.set("Offline")}(t)})}function GN(n,e){const t=new Gt;return n.asyncQueue.enqueueAndForget(async()=>async function(s,a,u){try{const h=await function(p,y){const w=ae(p);return w.persistence.runTransaction("read document","readonly",I=>w.localDocuments.getDocument(I,y))}(s,a);h.isFoundDocument()?u.resolve(h):h.isNoDocument()?u.resolve(null):u.reject(new Y(q.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(h){const f=fu(h,`Failed to get document '${a} from cache`);u.reject(f)}}(await Jg(n),e,t)),t.promise}function rR(n,e,t={}){const r=new Gt;return n.asyncQueue.enqueueAndForget(async()=>function(a,u,h,f,p){const y=new Yd({next:I=>{y.eu(),u.enqueueAndForget(()=>zg(a,w));const R=I.docs.has(h);!R&&I.fromCache?p.reject(new Y(q.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&I.fromCache&&f&&f.source==="server"?p.reject(new Y(q.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):p.resolve(I)},error:I=>p.reject(I)}),w=new $g(au(h.path),y,{includeMetadataChanges:!0,ua:!0});return Bg(a,w)}(await tu(n),n.asyncQueue,e,t,r)),r.promise}function WN(n,e){const t=new Gt;return n.asyncQueue.enqueueAndForget(async()=>async function(s,a,u){try{const h=await Rd(s,a,!0),f=new QS(a,h.Es),p=f.ga(h.documents),y=f.applyChanges(p,!1);u.resolve(y.snapshot)}catch(h){const f=fu(h,`Failed to execute query '${a} against cache`);u.reject(f)}}(await Jg(n),e,t)),t.promise}function iR(n,e,t={}){const r=new Gt;return n.asyncQueue.enqueueAndForget(async()=>function(a,u,h,f,p){const y=new Yd({next:I=>{y.eu(),u.enqueueAndForget(()=>zg(a,w)),I.fromCache&&f.source==="server"?p.reject(new Y(q.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):p.resolve(I)},error:I=>p.reject(I)}),w=new $g(h,y,{includeMetadataChanges:!0,ua:!0});return Bg(a,w)}(await tu(n),n.asyncQueue,e,t,r)),r.promise}function KN(n,e){const t=new Yd(e);return n.asyncQueue.enqueueAndForget(async()=>function(s,a){ae(s).X_.add(a),a.next()}(await tu(n),t)),()=>{t.eu(),n.asyncQueue.enqueueAndForget(async()=>function(s,a){ae(s).X_.delete(a)}(await tu(n),t))}}function HN(n,e,t,r){const s=function(u,h){let f;return f=typeof u=="string"?rS().encode(u):u,function(y,w){return new FN(y,w)}(function(y,w){if(y instanceof Uint8Array)return vE(y,w);if(y instanceof ArrayBuffer)return vE(new Uint8Array(y),w);if(y instanceof ReadableStream)return y.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(f),h)}(t,hc(e));n.asyncQueue.enqueueAndForget(async()=>{ON(await Yg(n),s,r)})}function QN(n,e){return n.asyncQueue.enqueue(async()=>function(r,s){const a=ae(r);return a.persistence.runTransaction("Get named query","readonly",u=>a.jr.getNamedQuery(u,s))}(await Jg(n),e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sR(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EE=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xg(n,e,t){if(!t)throw new Y(q.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function oR(n,e,t,r){if(e===!0&&r===!0)throw new Y(q.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function IE(n){if(!se.isDocumentKey(n))throw new Y(q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function TE(n){if(se.isDocumentKey(n))throw new Y(q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Zd(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ce()}function ze(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new Y(q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Zd(n);throw new Y(q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function aR(n,e){if(e<=0)throw new Y(q.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Y(q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Y(q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}oR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=sR((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new Y(q.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new Y(q.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new Y(q.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class fc{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new SE({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Y(q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Y(q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new SE(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new qb;switch(r.type){case"firstParty":return new Hb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Y(q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=EE.get(t);r&&(Z("ComponentProvider","Removing Datastore"),EE.delete(t),r.terminate())}(this),Promise.resolve()}}function JN(n,e,t,r={}){var s;const a=(n=ze(n,fc))._getSettings(),u=`${e}:${t}`;if(a.host!=="firestore.googleapis.com"&&a.host!==u&&Nr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},a),{host:u,ssl:!1})),r.mockUserToken){let h,f;if(typeof r.mockUserToken=="string")h=r.mockUserToken,f=Ft.MOCK_USER;else{h=hI(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new Y(q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new Ft(p)}n._authCredentials=new Gb(new mT(h,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fn=class uR{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new uR(this.firestore,e,this._query)}},dt=class lR{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new as(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new lR(this.firestore,e,this._key)}},as=class cR extends fn{constructor(e,t,r){super(e,t,au(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new dt(this.firestore,null,new se(e))}withConverter(e){return new cR(this.firestore,e,this._path)}};function hR(n,e,...t){if(n=Ve(n),Xg("collection","path",e),n instanceof fc){const r=De.fromString(e,...t);return TE(r),new as(n,null,r)}{if(!(n instanceof dt||n instanceof as))throw new Y(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(De.fromString(e,...t));return TE(r),new as(n.firestore,null,r)}}function YN(n,e){if(n=ze(n,fc),Xg("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new Y(q.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new fn(n,null,function(r){return new wi(De.emptyPath(),r)}(e))}function kd(n,e,...t){if(n=Ve(n),arguments.length===1&&(e=gT.newId()),Xg("doc","path",e),n instanceof fc){const r=De.fromString(e,...t);return IE(r),new dt(n,null,new se(r))}{if(!(n instanceof dt||n instanceof as))throw new Y(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(De.fromString(e,...t));return IE(r),new dt(n.firestore,n instanceof as?n.converter:null,new se(r))}}function dR(n,e){return n=Ve(n),e=Ve(e),(n instanceof dt||n instanceof as)&&(e instanceof dt||e instanceof as)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function fR(n,e){return n=Ve(n),e=Ve(e),n instanceof fn&&e instanceof fn&&n.firestore===e.firestore&&oc(n._query,e._query)&&n.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE{constructor(e=Promise.resolve()){this.Iu=[],this.du=!1,this.Eu=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new Og(this,"async_queue_retry"),this.fu=()=>{const r=od();r&&Z("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const t=od();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.du}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.du){this.du=!0,this.Vu=e||!1;const t=od();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.du)return new Promise(()=>{});const t=new Gt;return this.yu(()=>this.du&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Is(e))throw e;Z("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const s=function(u){let h=u.message||"";return u.stack&&(h=u.stack.includes(u.message)?u.stack:u.message+`
`+u.stack),h}(r);throw vt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ru=!1,r))));return this.gu=t,t}enqueueAfterDelay(e,t,r){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const s=Ug.createAndSchedule(this,e,t,r,a=>this.Su(a));return this.Eu.push(s),s}pu(){this.Au&&ce()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.Eu)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.Eu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Eu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.Eu.indexOf(e);this.Eu.splice(t,1)}}function Um(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const a of r)if(a in s&&typeof s[a]=="function")return!0;return!1}(n,["next","error","complete"])}class XN{constructor(){this._progressObserver={},this._taskCompletionResolver=new Gt,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,r){this._progressObserver={next:e,error:t,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZN=-1;let Et=class extends fc{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new RE,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new RE(e),this._firestoreClient=void 0,await e}}};function nn(n){if(n._terminated)throw new Y(q.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||pR(n),n._firestoreClient}function pR(n){var e,t,r;const s=n._freezeSettings(),a=function(h,f,p,y){return new SD(h,f,p,y.host,y.ssl,y.experimentalForceLongPolling,y.experimentalAutoDetectLongPolling,sR(y.experimentalLongPollingOptions),y.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new zN(n._authCredentials,n._appCheckCredentials,n._queue,a,n._componentsProvider&&function(h){const f=h==null?void 0:h._online.build();return{_offline:h==null?void 0:h._offline.build(f),_online:f}}(n._componentsProvider))}function eV(n,e){Nr("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings();return mR(n,Gl.provider,{build:r=>new eR(r,t.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}async function tV(n){Nr("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=n._freezeSettings();mR(n,Gl.provider,{build:t=>new MN(t,e.cacheSizeBytes)})}function mR(n,e,t){if((n=ze(n,Et))._firestoreClient||n._terminated)throw new Y(q.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(n._componentsProvider||n._getSettings().localCache)throw new Y(q.FAILED_PRECONDITION,"SDK cache is already specified.");n._componentsProvider={_online:e,_offline:t},pR(n)}function nV(n){if(n._initialized&&!n._terminated)throw new Y(q.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new Gt;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!xr.p())return Promise.resolve();const s=r+"main";await xr.delete(s)}(Dg(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function rV(n){return function(t){const r=new Gt;return t.asyncQueue.enqueueAndForget(async()=>SN(await Yg(t),r)),r.promise}(nn(n=ze(n,Et)))}function iV(n){return $N(nn(n=ze(n,Et)))}function sV(n){return qN(nn(n=ze(n,Et)))}function oV(n,e){const t=nn(n=ze(n,Et)),r=new XN;return HN(t,n._databaseId,e,r),r}function aV(n,e){return QN(nn(n=ze(n,Et)),e).then(t=>t?new fn(n,null,t.query):null)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Or(mt.fromBase64String(e))}catch(t){throw new Y(q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Or(mt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _s=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new Y(q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ot(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Co=class{constructor(e){this._methodName=e}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Y(q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Y(q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ae(this._lat,e._lat)||Ae(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let a=0;a<r.length;++a)if(r[a]!==s[a])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uV=/^__.*__$/;class lV{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Ii(e,this.data,this.fieldMask,t,this.fieldTransforms):new uu(e,this.data,t,this.fieldTransforms)}}class gR{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Ii(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function _R(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ce()}}class tf{constructor(e,t,r,s,a,u){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,a===void 0&&this.Fu(),this.fieldTransforms=a||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new tf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.xu({path:r,Nu:!1});return s.Bu(e),s}Lu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.xu({path:r,Nu:!1});return s.Fu(),s}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return xd(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Bu(this.path.get(e))}Bu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(_R(this.Mu)&&uV.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class cV{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||hc(e)}$u(e,t,r,s=!1){return new tf({Mu:e,methodName:t,Ku:r,path:ot.emptyPath(),Nu:!1,Qu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ko(n){const e=n._freezeSettings(),t=hc(n._databaseId);return new cV(n._databaseId,!!e.ignoreUndefinedProperties,t)}function nf(n,e,t,r,s,a={}){const u=n.$u(a.merge||a.mergeFields?2:0,e,t,s);o_("Data must be an object, but it was:",u,r);const h=wR(r,u);let f,p;if(a.merge)f=new Tn(u.fieldMask),p=u.fieldTransforms;else if(a.mergeFields){const y=[];for(const w of a.mergeFields){const I=Bm(e,w,t);if(!u.contains(I))throw new Y(q.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);IR(y,I)||y.push(I)}f=new Tn(y),p=u.fieldTransforms.filter(w=>f.covers(w.field))}else f=null,p=u.fieldTransforms;return new lV(new qt(h),f,p)}class pc extends Co{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof pc}}function yR(n,e,t){return new tf({Mu:3,Ku:e.settings.Ku,methodName:n._methodName,Nu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class e_ extends Co{_toFieldTransform(e){return new uc(e.path,new Ka)}isEqual(e){return e instanceof e_}}class t_ extends Co{constructor(e,t){super(e),this.Uu=t}_toFieldTransform(e){const t=yR(this,e,!0),r=this.Uu.map(a=>xo(a,t)),s=new yo(r);return new uc(e.path,s)}isEqual(e){return e instanceof t_&&Ba(this.Uu,e.Uu)}}class n_ extends Co{constructor(e,t){super(e),this.Uu=t}_toFieldTransform(e){const t=yR(this,e,!0),r=this.Uu.map(a=>xo(a,t)),s=new vo(r);return new uc(e.path,s)}isEqual(e){return e instanceof n_&&Ba(this.Uu,e.Uu)}}class r_ extends Co{constructor(e,t){super(e),this.Wu=t}_toFieldTransform(e){const t=new Ha(e.serializer,HT(e.serializer,this.Wu));return new uc(e.path,t)}isEqual(e){return e instanceof r_&&this.Wu===e.Wu}}function i_(n,e,t,r){const s=n.$u(1,e,t);o_("Data must be an object, but it was:",s,r);const a=[],u=qt.empty();Ts(r,(f,p)=>{const y=a_(e,f,t);p=Ve(p);const w=s.Lu(y);if(p instanceof pc)a.push(y);else{const I=xo(p,w);I!=null&&(a.push(y),u.set(y,I))}});const h=new Tn(a);return new gR(u,h,s.fieldTransforms)}function s_(n,e,t,r,s,a){const u=n.$u(1,e,t),h=[Bm(e,r,t)],f=[s];if(a.length%2!=0)throw new Y(q.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let I=0;I<a.length;I+=2)h.push(Bm(e,a[I])),f.push(a[I+1]);const p=[],y=qt.empty();for(let I=h.length-1;I>=0;--I)if(!IR(p,h[I])){const R=h[I];let k=f[I];k=Ve(k);const L=u.Lu(R);if(k instanceof pc)p.push(R);else{const D=xo(k,L);D!=null&&(p.push(R),y.set(R,D))}}const w=new Tn(p);return new gR(y,w,u.fieldTransforms)}function vR(n,e,t,r=!1){return xo(t,n.$u(r?4:3,e))}function xo(n,e){if(ER(n=Ve(n)))return o_("Unsupported field value:",e,n),wR(n,e);if(n instanceof Co)return function(r,s){if(!_R(s.Mu))throw s.qu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.qu(`${r._methodName}() is not currently supported inside arrays`);const a=r._toFieldTransform(s);a&&s.fieldTransforms.push(a)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(r,s){const a=[];let u=0;for(const h of r){let f=xo(h,s.ku(u));f==null&&(f={nullValue:"NULL_VALUE"}),a.push(f),u++}return{arrayValue:{values:a}}}(n,e)}return function(r,s){if((r=Ve(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return HT(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const a=ut.fromDate(r);return{timestampValue:Qa(s.serializer,a)}}if(r instanceof ut){const a=new ut(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Qa(s.serializer,a)}}if(r instanceof ef)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Or)return{bytesValue:oS(s.serializer,r._byteString)};if(r instanceof dt){const a=s.databaseId,u=r.firestore._databaseId;if(!u.isEqual(a))throw s.qu(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:Rg(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Zg)return function(u,h){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:u.toArray().map(f=>{if(typeof f!="number")throw h.qu("VectorValues must only contain numeric values.");return vg(h.serializer,f)})}}}}}}(r,s);throw s.qu(`Unsupported field value: ${Zd(r)}`)}(n,e)}function wR(n,e){const t={};return CT(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ts(n,(r,s)=>{const a=xo(s,e.Ou(r));a!=null&&(t[r]=a)}),{mapValue:{fields:t}}}function ER(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ut||n instanceof ef||n instanceof Or||n instanceof dt||n instanceof Co||n instanceof Zg)}function o_(n,e,t){if(!ER(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=Zd(t);throw r==="an object"?e.qu(n+" a custom object"):e.qu(n+" "+r)}}function Bm(n,e,t){if((e=Ve(e))instanceof _s)return e._internalPath;if(typeof e=="string")return a_(n,e);throw xd("Field path arguments must be of type string or ",n,!1,void 0,t)}const hV=new RegExp("[~\\*/\\[\\]]");function a_(n,e,t){if(e.search(hV)>=0)throw xd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new _s(...e.split("."))._internalPath}catch{throw xd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function xd(n,e,t,r,s){const a=r&&!r.isEmpty(),u=s!==void 0;let h=`Function ${e}() called with invalid data`;t&&(h+=" (via `toFirestore()`)"),h+=". ";let f="";return(a||u)&&(f+=" (found",a&&(f+=` in field ${r}`),u&&(f+=` in document ${s}`),f+=")"),new Y(q.INVALID_ARGUMENT,h+n+f)}function IR(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e,t,r,s,a){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new dt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new dV(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(rf("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class dV extends Wl{data(){return super.data()}}function rf(n,e){return typeof e=="string"?a_(n,e):e instanceof _s?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TR(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new Y(q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class u_{}class mc extends u_{}function Zi(n,e,...t){let r=[];e instanceof u_&&r.push(e),r=r.concat(t),function(a){const u=a.filter(f=>f instanceof l_).length,h=a.filter(f=>f instanceof sf).length;if(u>1||u>0&&h>0)throw new Y(q.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class sf extends mc{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new sf(e,t,r)}_apply(e){const t=this._parse(e);return RR(e._query,t),new fn(e.firestore,e.converter,Pm(e._query,t))}_parse(e){const t=ko(e.firestore);return function(a,u,h,f,p,y,w){let I;if(p.isKeyField()){if(y==="array-contains"||y==="array-contains-any")throw new Y(q.INVALID_ARGUMENT,`Invalid Query. You can't perform '${y}' queries on documentId().`);if(y==="in"||y==="not-in"){PE(w,y);const R=[];for(const k of w)R.push(AE(f,a,k));I={arrayValue:{values:R}}}else I=AE(f,a,w)}else y!=="in"&&y!=="not-in"&&y!=="array-contains-any"||PE(w,y),I=vR(h,u,w,y==="in"||y==="not-in");return Ne.create(p,y,I)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function fV(n,e,t){const r=e,s=rf("where",n);return sf._create(s,r,t)}class l_ extends u_{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new l_(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Ge.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,a){let u=s;const h=a.getFlattenedFilters();for(const f of h)RR(u,f),u=Pm(u,f)}(e._query,t),new fn(e.firestore,e.converter,Pm(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class c_ extends mc{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new c_(e,t)}_apply(e){const t=function(s,a,u){if(s.startAt!==null)throw new Y(q.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new Y(q.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new zl(a,u)}(e._query,this._field,this._direction);return new fn(e.firestore,e.converter,function(s,a){const u=s.explicitOrderBy.concat([a]);return new wi(s.path,s.collectionGroup,u,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function pV(n,e="asc"){const t=e,r=rf("orderBy",n);return c_._create(r,t)}class of extends mc{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new of(e,t,r)}_apply(e){return new fn(e.firestore,e.converter,wd(e._query,this._limit,this._limitType))}}function mV(n){return aR("limit",n),of._create("limit",n,"F")}function gV(n){return aR("limitToLast",n),of._create("limitToLast",n,"L")}class af extends mc{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new af(e,t,r)}_apply(e){const t=SR(e,this.type,this._docOrFields,this._inclusive);return new fn(e.firestore,e.converter,function(s,a){return new wi(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,a,s.endAt)}(e._query,t))}}function _V(...n){return af._create("startAt",n,!0)}function yV(...n){return af._create("startAfter",n,!1)}class uf extends mc{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new uf(e,t,r)}_apply(e){const t=SR(e,this.type,this._docOrFields,this._inclusive);return new fn(e.firestore,e.converter,function(s,a){return new wi(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,s.startAt,a)}(e._query,t))}}function vV(...n){return uf._create("endBefore",n,!1)}function wV(...n){return uf._create("endAt",n,!0)}function SR(n,e,t,r){if(t[0]=Ve(t[0]),t[0]instanceof Wl)return function(a,u,h,f,p){if(!f)throw new Y(q.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${h}().`);const y=[];for(const w of Ma(a))if(w.field.isKeyField())y.push(go(u,f.key));else{const I=f.data.field(w.field);if(zd(I))throw new Y(q.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+w.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(I===null){const R=w.field.canonicalString();throw new Y(q.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${R}' (used as the orderBy) does not exist.`)}y.push(I)}return new ms(y,p)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const s=ko(n.firestore);return function(u,h,f,p,y,w){const I=u.explicitOrderBy;if(y.length>I.length)throw new Y(q.INVALID_ARGUMENT,`Too many arguments provided to ${p}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const R=[];for(let k=0;k<y.length;k++){const L=y[k];if(I[k].field.isKeyField()){if(typeof L!="string")throw new Y(q.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${p}(), but got a ${typeof L}`);if(!_g(u)&&L.indexOf("/")!==-1)throw new Y(q.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${p}() must be a plain document ID, but '${L}' contains a slash.`);const D=u.path.child(De.fromString(L));if(!se.isDocumentKey(D))throw new Y(q.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${p}() must result in a valid document path, but '${D}' is not because it contains an odd number of segments.`);const G=new se(D);R.push(go(h,G))}else{const D=vR(f,p,L);R.push(D)}}return new ms(R,w)}(n._query,n.firestore._databaseId,s,e,t,r)}}function AE(n,e,t){if(typeof(t=Ve(t))=="string"){if(t==="")throw new Y(q.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!_g(e)&&t.indexOf("/")!==-1)throw new Y(q.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(De.fromString(t));if(!se.isDocumentKey(r))throw new Y(q.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return go(n,new se(r))}if(t instanceof dt)return go(n,t._key);throw new Y(q.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Zd(t)}.`)}function PE(n,e){if(!Array.isArray(n)||n.length===0)throw new Y(q.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function RR(n,e){const t=function(s,a){for(const u of s)for(const h of u.getFlattenedFilters())if(a.indexOf(h.op)>=0)return h.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new Y(q.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Y(q.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class h_{convertValue(e,t="none"){switch(fs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return st(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(mi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ce()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Ts(e,(s,a)=>{r[s]=this.convertValue(a,t)}),r}convertVectorValue(e){var t,r,s;const a=(s=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(u=>st(u.doubleValue));return new Zg(a)}convertGeoPoint(e){return new ef(st(e.latitude),st(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=jd(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Fl(e));default:return null}}convertTimestamp(e){const t=pi(e);return new ut(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=De.fromString(e);ge(_S(r));const s=new ds(r.get(1),r.get(3)),a=new se(r.popFirst(5));return s.isEqual(t)||vt(`Document ${a} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lf(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class EV extends h_{constructor(e){super(),this.firestore=e}convertBytes(e){return new Or(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new dt(this.firestore,null,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let gi=class extends Wl{constructor(e,t,r,s,a,u){super(e,t,r,s,u),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new xl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(rf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}},xl=class extends gi{data(e={}){return super.data(e)}},ys=class{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new lo(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new xl(this._firestore,this._userDataWriter,r.key,r,new lo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Y(q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,a){if(s._snapshot.oldDocs.isEmpty()){let u=0;return s._snapshot.docChanges.map(h=>{const f=new xl(s._firestore,s._userDataWriter,h.doc.key,h.doc,new lo(s._snapshot.mutatedKeys.has(h.doc.key),s._snapshot.fromCache),s.query.converter);return h.doc,{type:"added",doc:f,oldIndex:-1,newIndex:u++}})}{let u=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(h=>a||h.type!==3).map(h=>{const f=new xl(s._firestore,s._userDataWriter,h.doc.key,h.doc,new lo(s._snapshot.mutatedKeys.has(h.doc.key),s._snapshot.fromCache),s.query.converter);let p=-1,y=-1;return h.type!==0&&(p=u.indexOf(h.doc.key),u=u.delete(h.doc.key)),h.type!==1&&(u=u.add(h.doc),y=u.indexOf(h.doc.key)),{type:IV(h.type),doc:f,oldIndex:p,newIndex:y}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}};function IV(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ce()}}function AR(n,e){return n instanceof gi&&e instanceof gi?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof ys&&e instanceof ys&&n._firestore===e._firestore&&fR(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TV(n){n=ze(n,dt);const e=ze(n.firestore,Et);return rR(nn(e),n._key).then(t=>d_(e,n,t))}class bo extends h_{constructor(e){super(),this.firestore=e}convertBytes(e){return new Or(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new dt(this.firestore,null,t)}}function SV(n){n=ze(n,dt);const e=ze(n.firestore,Et),t=nn(e),r=new bo(e);return GN(t,n._key).then(s=>new gi(e,r,n._key,s,new lo(s!==null&&s.hasLocalMutations,!0),n.converter))}function RV(n){n=ze(n,dt);const e=ze(n.firestore,Et);return rR(nn(e),n._key,{source:"server"}).then(t=>d_(e,n,t))}function AV(n){n=ze(n,fn);const e=ze(n.firestore,Et),t=nn(e),r=new bo(e);return TR(n._query),iR(t,n._query).then(s=>new ys(e,r,n,s))}function PV(n){n=ze(n,fn);const e=ze(n.firestore,Et),t=nn(e),r=new bo(e);return WN(t,n._query).then(s=>new ys(e,r,n,s))}function CV(n){n=ze(n,fn);const e=ze(n.firestore,Et),t=nn(e),r=new bo(e);return iR(t,n._query,{source:"server"}).then(s=>new ys(e,r,n,s))}function CE(n,e,t){n=ze(n,dt);const r=ze(n.firestore,Et),s=lf(n.converter,e,t);return gc(r,[nf(ko(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,at.none())])}function kE(n,e,t,...r){n=ze(n,dt);const s=ze(n.firestore,Et),a=ko(s);let u;return u=typeof(e=Ve(e))=="string"||e instanceof _s?s_(a,"updateDoc",n._key,e,t,r):i_(a,"updateDoc",n._key,e),gc(s,[u.toMutation(n._key,at.exists(!0))])}function kV(n){return gc(ze(n.firestore,Et),[new lu(n._key,at.none())])}function xV(n,e){const t=ze(n.firestore,Et),r=kd(n),s=lf(n.converter,e);return gc(t,[nf(ko(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,at.exists(!1))]).then(()=>r)}function PR(n,...e){var t,r,s;n=Ve(n);let a={includeMetadataChanges:!1,source:"default"},u=0;typeof e[u]!="object"||Um(e[u])||(a=e[u],u++);const h={includeMetadataChanges:a.includeMetadataChanges,source:a.source};if(Um(e[u])){const w=e[u];e[u]=(t=w.next)===null||t===void 0?void 0:t.bind(w),e[u+1]=(r=w.error)===null||r===void 0?void 0:r.bind(w),e[u+2]=(s=w.complete)===null||s===void 0?void 0:s.bind(w)}let f,p,y;if(n instanceof dt)p=ze(n.firestore,Et),y=au(n._key.path),f={next:w=>{e[u]&&e[u](d_(p,n,w))},error:e[u+1],complete:e[u+2]};else{const w=ze(n,fn);p=ze(w.firestore,Et),y=w._query;const I=new bo(p);f={next:R=>{e[u]&&e[u](new ys(p,I,w,R))},error:e[u+1],complete:e[u+2]},TR(n._query)}return function(I,R,k,L){const D=new Yd(L),G=new $g(R,D,k);return I.asyncQueue.enqueueAndForget(async()=>Bg(await tu(I),G)),()=>{D.eu(),I.asyncQueue.enqueueAndForget(async()=>zg(await tu(I),G))}}(nn(p),y,h,f)}function bV(n,e){return KN(nn(n=ze(n,Et)),Um(e)?e:{next:e})}function gc(n,e){return function(r,s){const a=new Gt;return r.asyncQueue.enqueueAndForget(async()=>wN(await Yg(r),s,a)),a.promise}(nn(n),e)}function d_(n,e,t){const r=t.docs.get(e._key),s=new bo(n);return new gi(n,s,e._key,r,new lo(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DV={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let NV=class{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=ko(e)}set(e,t,r){this._verifyNotCommitted();const s=rs(e,this._firestore),a=lf(s.converter,t,r),u=nf(this._dataReader,"WriteBatch.set",s._key,a,s.converter!==null,r);return this._mutations.push(u.toMutation(s._key,at.none())),this}update(e,t,r,...s){this._verifyNotCommitted();const a=rs(e,this._firestore);let u;return u=typeof(t=Ve(t))=="string"||t instanceof _s?s_(this._dataReader,"WriteBatch.update",a._key,t,r,s):i_(this._dataReader,"WriteBatch.update",a._key,t),this._mutations.push(u.toMutation(a._key,at.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=rs(e,this._firestore);return this._mutations=this._mutations.concat(new lu(t._key,at.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new Y(q.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function rs(n,e){if((n=Ve(n)).firestore!==e)throw new Y(q.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let VV=class extends class{constructor(t,r){this._firestore=t,this._transaction=r,this._dataReader=ko(t)}get(t){const r=rs(t,this._firestore),s=new EV(this._firestore);return this._transaction.lookup([r._key]).then(a=>{if(!a||a.length!==1)return ce();const u=a[0];if(u.isFoundDocument())return new Wl(this._firestore,s,u.key,u,r.converter);if(u.isNoDocument())return new Wl(this._firestore,s,r._key,null,r.converter);throw ce()})}set(t,r,s){const a=rs(t,this._firestore),u=lf(a.converter,r,s),h=nf(this._dataReader,"Transaction.set",a._key,u,a.converter!==null,s);return this._transaction.set(a._key,h),this}update(t,r,s,...a){const u=rs(t,this._firestore);let h;return h=typeof(r=Ve(r))=="string"||r instanceof _s?s_(this._dataReader,"Transaction.update",u._key,r,s,a):i_(this._dataReader,"Transaction.update",u._key,r),this._transaction.update(u._key,h),this}delete(t){const r=rs(t,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=rs(e,this._firestore),r=new bo(this._firestore);return super.get(e).then(s=>new gi(this._firestore,r,t._key,s._document,new lo(!1,!1),t.converter))}};function OV(n,e,t){n=ze(n,Et);const r=Object.assign(Object.assign({},DV),t);return function(a){if(a.maxAttempts<1)throw new Y(q.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(a,u,h){const f=new Gt;return a.asyncQueue.enqueueAndForget(async()=>{const p=await jN(a);new BN(a.asyncQueue,p,h,u,f).cu()}),f.promise}(nn(n),s=>e(new VV(n,s)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LV(){return new pc("deleteField")}function MV(){return new e_("serverTimestamp")}function FV(...n){return new t_("arrayUnion",n)}function UV(...n){return new n_("arrayRemove",n)}function BV(n){return new r_("increment",n)}(function(e,t=!0){(function(s){ou=s})(yi),di(new dr("firestore",(r,{instanceIdentifier:s,options:a})=>{const u=r.getProvider("app").getImmediate(),h=new Et(new Wb(r.getProvider("auth-internal")),new Jb(r.getProvider("app-check-internal")),function(p,y){if(!Object.prototype.hasOwnProperty.apply(p.options,["projectId"]))throw new Y(q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ds(p.options.projectId,y)}(u,s),u);return a=Object.assign({useFetchStreams:t},a),h._setSettings(a),h},"PUBLIC").setMultipleInstances(!0)),Dn(vw,"4.7.6",e),Dn(vw,"4.7.6","esm2017")})();const zV="@firebase/firestore-compat",jV="0.3.41";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f_(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new Y("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xE(){if(typeof Uint8Array>"u")throw new Y("unimplemented","Uint8Arrays are not available in this environment.")}function bE(){if(!ID())throw new Y("unimplemented","Blobs are unavailable in Firestore in this environment.")}let CR=class zm{constructor(e){this._delegate=e}static fromBase64String(e){return bE(),new zm(Or.fromBase64String(e))}static fromUint8Array(e){return xE(),new zm(Or.fromUint8Array(e))}toBase64(){return bE(),this._delegate.toBase64()}toUint8Array(){return xE(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jm(n){return $V(n,["next","error","complete"])}function $V(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qV{enableIndexedDbPersistence(e,t){return eV(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return tV(e._delegate)}clearIndexedDbPersistence(e){return nV(e._delegate)}}class kR{constructor(e,t,r){this._delegate=t,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof ds||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&Nr("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,r={}){JN(this._delegate,e,t,r)}enableNetwork(){return iV(this._delegate)}disableNetwork(){return sV(this._delegate)}enablePersistence(e){let t=!1,r=!1;return e&&(t=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,oR("synchronizeTabs",t,"experimentalForceOwningTab",r)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return rV(this._delegate)}onSnapshotsInSync(e){return bV(this._delegate,e)}get app(){if(!this._appCompat)throw new Y("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new nu(this,hR(this._delegate,e))}catch(t){throw cn(t,"collection()","Firestore.collection()")}}doc(e){try{return new Gn(this,kd(this._delegate,e))}catch(t){throw cn(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new ln(this,YN(this._delegate,e))}catch(t){throw cn(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return OV(this._delegate,t=>e(new xR(this,t)))}batch(){return nn(this._delegate),new bR(new NV(this._delegate,e=>gc(this._delegate,e)))}loadBundle(e){return oV(this._delegate,e)}namedQuery(e){return aV(this._delegate,e).then(t=>t?new ln(this,t):null)}}class cf extends h_{constructor(e){super(),this.firestore=e}convertBytes(e){return new CR(new Or(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return Gn.forKey(t,this.firestore,null)}}function GV(n){jb(n)}class xR{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new cf(e)}get(e){const t=co(e);return this._delegate.get(t).then(r=>new Kl(this._firestore,new gi(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,t.converter)))}set(e,t,r){const s=co(e);return r?(f_("Transaction.set",r),this._delegate.set(s,t,r)):this._delegate.set(s,t),this}update(e,t,r,...s){const a=co(e);return arguments.length===2?this._delegate.update(a,t):this._delegate.update(a,t,r,...s),this}delete(e){const t=co(e);return this._delegate.delete(t),this}}class bR{constructor(e){this._delegate=e}set(e,t,r){const s=co(e);return r?(f_("WriteBatch.set",r),this._delegate.set(s,t,r)):this._delegate.set(s,t),this}update(e,t,r,...s){const a=co(e);return arguments.length===2?this._delegate.update(a,t):this._delegate.update(a,t,r,...s),this}delete(e){const t=co(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class To{constructor(e,t,r){this._firestore=e,this._userDataWriter=t,this._delegate=r}fromFirestore(e,t){const r=new xl(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Hl(this._firestore,r),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const r=To.INSTANCES;let s=r.get(e);s||(s=new WeakMap,r.set(e,s));let a=s.get(t);return a||(a=new To(e,new cf(e),t),s.set(t,a)),a}}To.INSTANCES=new WeakMap;class Gn{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new cf(e)}static forPath(e,t,r){if(e.length%2!==0)throw new Y("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Gn(t,new dt(t._delegate,r,new se(e)))}static forKey(e,t,r){return new Gn(t,new dt(t._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new nu(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new nu(this.firestore,hR(this._delegate,e))}catch(t){throw cn(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=Ve(e),e instanceof dt?dR(this._delegate,e):!1}set(e,t){t=f_("DocumentReference.set",t);try{return t?CE(this._delegate,e,t):CE(this._delegate,e)}catch(r){throw cn(r,"setDoc()","DocumentReference.set()")}}update(e,t,...r){try{return arguments.length===1?kE(this._delegate,e):kE(this._delegate,e,t,...r)}catch(s){throw cn(s,"updateDoc()","DocumentReference.update()")}}delete(){return kV(this._delegate)}onSnapshot(...e){const t=DR(e),r=NR(e,s=>new Kl(this.firestore,new gi(this.firestore._delegate,this._userDataWriter,s._key,s._document,s.metadata,this._delegate.converter)));return PR(this._delegate,t,r)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=SV(this._delegate):(e==null?void 0:e.source)==="server"?t=RV(this._delegate):t=TV(this._delegate),t.then(r=>new Kl(this.firestore,new gi(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new Gn(this.firestore,e?this._delegate.withConverter(To.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function cn(n,e,t){return n.message=n.message.replace(e,t),n}function DR(n){for(const e of n)if(typeof e=="object"&&!jm(e))return e;return{}}function NR(n,e){var t,r;let s;return jm(n[0])?s=n[0]:jm(n[1])?s=n[1]:typeof n[0]=="function"?s={next:n[0],error:n[1],complete:n[2]}:s={next:n[1],error:n[2],complete:n[3]},{next:a=>{s.next&&s.next(e(a))},error:(t=s.error)===null||t===void 0?void 0:t.bind(s),complete:(r=s.complete)===null||r===void 0?void 0:r.bind(s)}}class Kl{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new Gn(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return AR(this._delegate,e._delegate)}}class Hl extends Kl{data(e){const t=this._delegate.data(e);return this._delegate._converter||$b(t!==void 0),t}}class ln{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new cf(e)}where(e,t,r){try{return new ln(this.firestore,Zi(this._delegate,fV(e,t,r)))}catch(s){throw cn(s,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new ln(this.firestore,Zi(this._delegate,pV(e,t)))}catch(r){throw cn(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new ln(this.firestore,Zi(this._delegate,mV(e)))}catch(t){throw cn(t,"limit()","Query.limit()")}}limitToLast(e){try{return new ln(this.firestore,Zi(this._delegate,gV(e)))}catch(t){throw cn(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new ln(this.firestore,Zi(this._delegate,_V(...e)))}catch(t){throw cn(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new ln(this.firestore,Zi(this._delegate,yV(...e)))}catch(t){throw cn(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new ln(this.firestore,Zi(this._delegate,vV(...e)))}catch(t){throw cn(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new ln(this.firestore,Zi(this._delegate,wV(...e)))}catch(t){throw cn(t,"endAt()","Query.endAt()")}}isEqual(e){return fR(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=PV(this._delegate):(e==null?void 0:e.source)==="server"?t=CV(this._delegate):t=AV(this._delegate),t.then(r=>new $m(this.firestore,new ys(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const t=DR(e),r=NR(e,s=>new $m(this.firestore,new ys(this.firestore._delegate,this._userDataWriter,this._delegate,s._snapshot)));return PR(this._delegate,t,r)}withConverter(e){return new ln(this.firestore,e?this._delegate.withConverter(To.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class WV{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new Hl(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class $m{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new ln(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Hl(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new WV(this._firestore,t))}forEach(e,t){this._delegate.forEach(r=>{e.call(t,new Hl(this._firestore,r))})}isEqual(e){return AR(this._delegate,e._delegate)}}class nu extends ln{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Gn(this.firestore,e):null}doc(e){try{return e===void 0?new Gn(this.firestore,kd(this._delegate)):new Gn(this.firestore,kd(this._delegate,e))}catch(t){throw cn(t,"doc()","CollectionReference.doc()")}}add(e){return xV(this._delegate,e).then(t=>new Gn(this.firestore,t))}isEqual(e){return dR(this._delegate,e._delegate)}withConverter(e){return new nu(this.firestore,e?this._delegate.withConverter(To.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function co(n){return ze(n,dt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(...e){this._delegate=new _s(...e)}static documentId(){return new p_(ot.keyField().canonicalString())}isEqual(e){return e=Ve(e),e instanceof _s?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{static serverTimestamp(){const e=MV();return e._methodName="FieldValue.serverTimestamp",new ao(e)}static delete(){const e=LV();return e._methodName="FieldValue.delete",new ao(e)}static arrayUnion(...e){const t=FV(...e);return t._methodName="FieldValue.arrayUnion",new ao(t)}static arrayRemove(...e){const t=UV(...e);return t._methodName="FieldValue.arrayRemove",new ao(t)}static increment(e){const t=BV(e);return t._methodName="FieldValue.increment",new ao(t)}constructor(e){this._delegate=e}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KV={Firestore:kR,GeoPoint:ef,Timestamp:ut,Blob:CR,Transaction:xR,WriteBatch:bR,DocumentReference:Gn,DocumentSnapshot:Kl,Query:ln,QueryDocumentSnapshot:Hl,QuerySnapshot:$m,CollectionReference:nu,FieldPath:p_,FieldValue:ao,setLogLevel:GV,CACHE_SIZE_UNLIMITED:ZN};function HV(n,e){n.INTERNAL.registerComponent(new dr("firestore-compat",t=>{const r=t.getProvider("app-compat").getImmediate(),s=t.getProvider("firestore").getImmediate();return e(r,s)},"PUBLIC").setServiceProps(Object.assign({},KV)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QV(n){HV(n,(e,t)=>new kR(e,t,new qV)),n.registerVersion(zV,jV)}QV(iu);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VR="firebasestorage.googleapis.com",OR="storageBucket",JV=2*60*1e3,YV=10*60*1e3,XV=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft extends fr{constructor(e,t,r=0){super(am(e),`Firebase Storage: ${t} (${am(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ft.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return am(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var nt;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(nt||(nt={}));function am(n){return"storage/"+n}function m_(){const n="An unknown error occurred, please check the error payload for server response.";return new ft(nt.UNKNOWN,n)}function ZV(n){return new ft(nt.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function eO(n){return new ft(nt.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function tO(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ft(nt.UNAUTHENTICATED,n)}function nO(){return new ft(nt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function rO(n){return new ft(nt.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function LR(){return new ft(nt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function MR(){return new ft(nt.CANCELED,"User canceled the upload/download.")}function iO(n){return new ft(nt.INVALID_URL,"Invalid URL '"+n+"'.")}function sO(n){return new ft(nt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function oO(){return new ft(nt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+OR+"' property when initializing the app?")}function FR(){return new ft(nt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function aO(){return new ft(nt.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function uO(){return new ft(nt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function lO(n){return new ft(nt.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Ua(n){return new ft(nt.INVALID_ARGUMENT,n)}function UR(){return new ft(nt.APP_DELETED,"The Firebase app was deleted.")}function BR(n){return new ft(nt.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function bl(n,e){return new ft(nt.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function _l(n){throw new ft(nt.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=en.makeFromUrl(e,t)}catch{return new en(e,"")}if(r.path==="")return r;throw sO(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function a(re){re.path.charAt(re.path.length-1)==="/"&&(re.path_=re.path_.slice(0,-1))}const u="(/(.*))?$",h=new RegExp("^gs://"+s+u,"i"),f={bucket:1,path:3};function p(re){re.path_=decodeURIComponent(re.path)}const y="v[A-Za-z0-9_]+",w=t.replace(/[.]/g,"\\."),I="(/([^?#]*).*)?$",R=new RegExp(`^https?://${w}/${y}/b/${s}/o${I}`,"i"),k={bucket:1,path:3},L=t===VR?"(?:storage.googleapis.com|storage.cloud.google.com)":t,D="([^?#]*)",G=new RegExp(`^https?://${L}/${s}/${D}`,"i"),Q=[{regex:h,indices:f,postModify:a},{regex:R,indices:k,postModify:p},{regex:G,indices:{bucket:1,path:2},postModify:p}];for(let re=0;re<Q.length;re++){const me=Q[re],de=me.regex.exec(e);if(de){const x=de[me.indices.bucket];let S=de[me.indices.path];S||(S=""),r=new en(x,S),me.postModify(r);break}}if(r==null)throw iO(e);return r}}class cO{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hO(n,e,t){let r=1,s=null,a=null,u=!1,h=0;function f(){return h===2}let p=!1;function y(...D){p||(p=!0,e.apply(null,D))}function w(D){s=setTimeout(()=>{s=null,n(R,f())},D)}function I(){a&&clearTimeout(a)}function R(D,...G){if(p){I();return}if(D){I(),y.call(null,D,...G);return}if(f()||u){I(),y.call(null,D,...G);return}r<64&&(r*=2);let Q;h===1?(h=2,Q=0):Q=(r+Math.random())*1e3,w(Q)}let k=!1;function L(D){k||(k=!0,I(),!p&&(s!==null?(D||(h=2),clearTimeout(s),w(0)):D||(h=1)))}return w(0),a=setTimeout(()=>{u=!0,L(!0)},t),L}function dO(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fO(n){return n!==void 0}function pO(n){return typeof n=="function"}function mO(n){return typeof n=="object"&&!Array.isArray(n)}function hf(n){return typeof n=="string"||n instanceof String}function DE(n){return g_()&&n instanceof Blob}function g_(){return typeof Blob<"u"}function qm(n,e,t,r){if(r<e)throw Ua(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw Ua(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rs(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function zR(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var ho;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(ho||(ho={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jR(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,a=e.indexOf(n)!==-1;return t||s||a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gO{constructor(e,t,r,s,a,u,h,f,p,y,w,I=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=a,this.additionalRetryCodes_=u,this.callback_=h,this.errorCallback_=f,this.timeout_=p,this.progressCallback_=y,this.connectionFactory_=w,this.retry=I,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((R,k)=>{this.resolve_=R,this.reject_=k,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new jh(!1,null,!0));return}const a=this.connectionFactory_();this.pendingConnection_=a;const u=h=>{const f=h.loaded,p=h.lengthComputable?h.total:-1;this.progressCallback_!==null&&this.progressCallback_(f,p)};this.progressCallback_!==null&&a.addUploadProgressListener(u),a.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&a.removeUploadProgressListener(u),this.pendingConnection_=null;const h=a.getErrorCode()===ho.NO_ERROR,f=a.getStatus();if(!h||jR(f,this.additionalRetryCodes_)&&this.retry){const y=a.getErrorCode()===ho.ABORT;r(!1,new jh(!1,null,y));return}const p=this.successCodes_.indexOf(f)!==-1;r(!0,new jh(p,a))})},t=(r,s)=>{const a=this.resolve_,u=this.reject_,h=s.connection;if(s.wasSuccessCode)try{const f=this.callback_(h,h.getResponse());fO(f)?a(f):a()}catch(f){u(f)}else if(h!==null){const f=m_();f.serverResponse=h.getErrorText(),this.errorCallback_?u(this.errorCallback_(h,f)):u(f)}else if(s.canceled){const f=this.appDelete_?UR():MR();u(f)}else{const f=LR();u(f)}};this.canceled_?t(!1,new jh(!1,null,!0)):this.backoffId_=hO(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&dO(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class jh{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function _O(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function yO(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function vO(n,e){e&&(n["X-Firebase-GMPID"]=e)}function wO(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function EO(n,e,t,r,s,a,u=!0){const h=zR(n.urlParams),f=n.url+h,p=Object.assign({},n.headers);return vO(p,e),_O(p,t),yO(p,a),wO(p,r),new gO(f,n.method,p,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,u)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IO(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function TO(...n){const e=IO();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(g_())return new Blob(n);throw new ft(nt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function SO(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RO(n){if(typeof atob>"u")throw lO("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class um{constructor(e,t){this.data=e,this.contentType=t||null}}function $R(n,e){switch(n){case Wn.RAW:return new um(qR(e));case Wn.BASE64:case Wn.BASE64URL:return new um(GR(n,e));case Wn.DATA_URL:return new um(PO(e),CO(e))}throw m_()}function qR(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const a=r,u=n.charCodeAt(++t);r=65536|(a&1023)<<10|u&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function AO(n){let e;try{e=decodeURIComponent(n)}catch{throw bl(Wn.DATA_URL,"Malformed data URL.")}return qR(e)}function GR(n,e){switch(n){case Wn.BASE64:{const s=e.indexOf("-")!==-1,a=e.indexOf("_")!==-1;if(s||a)throw bl(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Wn.BASE64URL:{const s=e.indexOf("+")!==-1,a=e.indexOf("/")!==-1;if(s||a)throw bl(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=RO(e)}catch(s){throw s.message.includes("polyfill")?s:bl(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}class WR{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw bl(Wn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=kO(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function PO(n){const e=new WR(n);return e.base64?GR(Wn.BASE64,e.rest):AO(e.rest)}function CO(n){return new WR(n).contentType}function kO(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,t){let r=0,s="";DE(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(DE(this.data_)){const r=this.data_,s=SO(r,e,t);return s===null?null:new ri(s)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new ri(r,!0)}}static getBlob(...e){if(g_()){const t=e.map(r=>r instanceof ri?r.data_:r);return new ri(TO.apply(null,t))}else{const t=e.map(u=>hf(u)?$R(Wn.RAW,u).data:u.data_);let r=0;t.forEach(u=>{r+=u.byteLength});const s=new Uint8Array(r);let a=0;return t.forEach(u=>{for(let h=0;h<u.length;h++)s[a++]=u[h]}),new ri(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __(n){let e;try{e=JSON.parse(n)}catch{return null}return mO(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xO(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function bO(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function KR(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DO(n,e){return e}class un{constructor(e,t,r,s){this.server=e,this.local=t||e,this.writable=!!r,this.xform=s||DO}}let $h=null;function NO(n){return!hf(n)||n.length<2?n:KR(n)}function df(){if($h)return $h;const n=[];n.push(new un("bucket")),n.push(new un("generation")),n.push(new un("metageneration")),n.push(new un("name","fullPath",!0));function e(a,u){return NO(u)}const t=new un("name");t.xform=e,n.push(t);function r(a,u){return u!==void 0?Number(u):u}const s=new un("size");return s.xform=r,n.push(s),n.push(new un("timeCreated")),n.push(new un("updated")),n.push(new un("md5Hash",null,!0)),n.push(new un("cacheControl",null,!0)),n.push(new un("contentDisposition",null,!0)),n.push(new un("contentEncoding",null,!0)),n.push(new un("contentLanguage",null,!0)),n.push(new un("contentType",null,!0)),n.push(new un("metadata","customMetadata",!0)),$h=n,$h}function VO(n,e){function t(){const r=n.bucket,s=n.fullPath,a=new en(r,s);return e._makeStorageReference(a)}Object.defineProperty(n,"ref",{get:t})}function OO(n,e,t){const r={};r.type="file";const s=t.length;for(let a=0;a<s;a++){const u=t[a];r[u.local]=u.xform(r,e[u.server])}return VO(r,n),r}function HR(n,e,t){const r=__(e);return r===null?null:OO(n,r,t)}function LO(n,e,t,r){const s=__(e);if(s===null||!hf(s.downloadTokens))return null;const a=s.downloadTokens;if(a.length===0)return null;const u=encodeURIComponent;return a.split(",").map(p=>{const y=n.bucket,w=n.fullPath,I="/b/"+u(y)+"/o/"+u(w),R=Rs(I,t,r),k=zR({alt:"media",token:p});return R+k})[0]}function y_(n,e){const t={},r=e.length;for(let s=0;s<r;s++){const a=e[s];a.writable&&(t[a.server]=n[a.local])}return JSON.stringify(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NE="prefixes",VE="items";function MO(n,e,t){const r={prefixes:[],items:[],nextPageToken:t.nextPageToken};if(t[NE])for(const s of t[NE]){const a=s.replace(/\/$/,""),u=n._makeStorageReference(new en(e,a));r.prefixes.push(u)}if(t[VE])for(const s of t[VE]){const a=n._makeStorageReference(new en(e,s.name));r.items.push(a)}return r}function FO(n,e,t){const r=__(t);return r===null?null:MO(n,e,r)}class Si{constructor(e,t,r,s){this.url=e,this.method=t,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dr(n){if(!n)throw m_()}function ff(n,e){function t(r,s){const a=HR(n,s,e);return Dr(a!==null),a}return t}function UO(n,e){function t(r,s){const a=FO(n,e,s);return Dr(a!==null),a}return t}function BO(n,e){function t(r,s){const a=HR(n,s,e);return Dr(a!==null),LO(a,s,n.host,n._protocol)}return t}function pu(n){function e(t,r){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=nO():s=tO():t.getStatus()===402?s=eO(n.bucket):t.getStatus()===403?s=rO(n.path):s=r,s.status=t.getStatus(),s.serverResponse=r.serverResponse,s}return e}function pf(n){const e=pu(n);function t(r,s){let a=e(r,s);return r.getStatus()===404&&(a=ZV(n.path)),a.serverResponse=s.serverResponse,a}return t}function QR(n,e,t){const r=e.fullServerUrl(),s=Rs(r,n.host,n._protocol),a="GET",u=n.maxOperationRetryTime,h=new Si(s,a,ff(n,t),u);return h.errorHandler=pf(e),h}function zO(n,e,t,r,s){const a={};e.isRoot?a.prefix="":a.prefix=e.path+"/",t.length>0&&(a.delimiter=t),r&&(a.pageToken=r),s&&(a.maxResults=s);const u=e.bucketOnlyServerUrl(),h=Rs(u,n.host,n._protocol),f="GET",p=n.maxOperationRetryTime,y=new Si(h,f,UO(n,e.bucket),p);return y.urlParams=a,y.errorHandler=pu(e),y}function jO(n,e,t){const r=e.fullServerUrl(),s=Rs(r,n.host,n._protocol),a="GET",u=n.maxOperationRetryTime,h=new Si(s,a,BO(n,t),u);return h.errorHandler=pf(e),h}function $O(n,e,t,r){const s=e.fullServerUrl(),a=Rs(s,n.host,n._protocol),u="PATCH",h=y_(t,r),f={"Content-Type":"application/json; charset=utf-8"},p=n.maxOperationRetryTime,y=new Si(a,u,ff(n,r),p);return y.headers=f,y.body=h,y.errorHandler=pf(e),y}function qO(n,e){const t=e.fullServerUrl(),r=Rs(t,n.host,n._protocol),s="DELETE",a=n.maxOperationRetryTime;function u(f,p){}const h=new Si(r,s,u,a);return h.successCodes=[200,204],h.errorHandler=pf(e),h}function GO(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function JR(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=GO(null,e)),r}function WO(n,e,t,r,s){const a=e.bucketOnlyServerUrl(),u={"X-Goog-Upload-Protocol":"multipart"};function h(){let Q="";for(let re=0;re<2;re++)Q=Q+Math.random().toString().slice(2);return Q}const f=h();u["Content-Type"]="multipart/related; boundary="+f;const p=JR(e,r,s),y=y_(p,t),w="--"+f+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+y+`\r
--`+f+`\r
Content-Type: `+p.contentType+`\r
\r
`,I=`\r
--`+f+"--",R=ri.getBlob(w,r,I);if(R===null)throw FR();const k={name:p.fullPath},L=Rs(a,n.host,n._protocol),D="POST",G=n.maxUploadRetryTime,K=new Si(L,D,ff(n,t),G);return K.urlParams=k,K.headers=u,K.body=R.uploadData(),K.errorHandler=pu(e),K}class bd{constructor(e,t,r,s){this.current=e,this.total=t,this.finalized=!!r,this.metadata=s||null}}function v_(n,e){let t=null;try{t=n.getResponseHeader("X-Goog-Upload-Status")}catch{Dr(!1)}return Dr(!!t&&(e||["active"]).indexOf(t)!==-1),t}function KO(n,e,t,r,s){const a=e.bucketOnlyServerUrl(),u=JR(e,r,s),h={name:u.fullPath},f=Rs(a,n.host,n._protocol),p="POST",y={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":u.contentType,"Content-Type":"application/json; charset=utf-8"},w=y_(u,t),I=n.maxUploadRetryTime;function R(L){v_(L);let D;try{D=L.getResponseHeader("X-Goog-Upload-URL")}catch{Dr(!1)}return Dr(hf(D)),D}const k=new Si(f,p,R,I);return k.urlParams=h,k.headers=y,k.body=w,k.errorHandler=pu(e),k}function HO(n,e,t,r){const s={"X-Goog-Upload-Command":"query"};function a(p){const y=v_(p,["active","final"]);let w=null;try{w=p.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Dr(!1)}w||Dr(!1);const I=Number(w);return Dr(!isNaN(I)),new bd(I,r.size(),y==="final")}const u="POST",h=n.maxUploadRetryTime,f=new Si(t,u,a,h);return f.headers=s,f.errorHandler=pu(e),f}const OE=256*1024;function QO(n,e,t,r,s,a,u,h){const f=new bd(0,0);if(u?(f.current=u.current,f.total=u.total):(f.current=0,f.total=r.size()),r.size()!==f.total)throw aO();const p=f.total-f.current;let y=p;s>0&&(y=Math.min(y,s));const w=f.current,I=w+y;let R="";y===0?R="finalize":p===y?R="upload, finalize":R="upload";const k={"X-Goog-Upload-Command":R,"X-Goog-Upload-Offset":`${f.current}`},L=r.slice(w,I);if(L===null)throw FR();function D(re,me){const de=v_(re,["active","final"]),x=f.current+y,S=r.size();let P;return de==="final"?P=ff(e,a)(re,me):P=null,new bd(x,S,de==="final",P)}const G="POST",K=e.maxUploadRetryTime,Q=new Si(t,G,D,K);return Q.headers=k,Q.body=L.uploadData(),Q.progressCallback=h||null,Q.errorHandler=pu(n),Q}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JO={STATE_CHANGED:"state_changed"},hn={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function lm(n){switch(n){case"running":case"pausing":case"canceling":return hn.RUNNING;case"paused":return hn.PAUSED;case"success":return hn.SUCCESS;case"canceled":return hn.CANCELED;case"error":return hn.ERROR;default:return hn.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YO{constructor(e,t,r){if(pO(e)||t!=null||r!=null)this.next=e,this.error=t??void 0,this.complete=r??void 0;else{const a=e;this.next=a.next,this.error=a.error,this.complete=a.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ca(n){return(...e)=>{Promise.resolve().then(()=>n(...e))}}class XO{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ho.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ho.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ho.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,s){if(this.sent_)throw _l("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),s!==void 0)for(const a in s)s.hasOwnProperty(a)&&this.xhr_.setRequestHeader(a,s[a].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw _l("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw _l("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw _l("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw _l("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class ZO extends XO{initXhr(){this.xhr_.responseType="text"}}function Ar(){return new ZO}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YR{isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}constructor(e,t,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=r,this._mappings=df(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=s=>{if(this._request=void 0,this._chunkMultiplier=1,s._codeEquals(nt.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const a=this.isExponentialBackoffExpired();if(jR(s.status,[]))if(a)s=LR();else{this.sleepTime=Math.max(this.sleepTime*2,XV),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=s,this._transition("error")}},this._metadataErrorHandler=s=>{this._request=void 0,s._codeEquals(nt.CANCELED)?this.completeTransitions_():(this._error=s,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((s,a)=>{this._resolve=s,this._reject=a,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([t,r])=>{switch(this._state){case"running":e(t,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,t)=>{const r=KO(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,Ar,e,t);this._request=s,s.getPromise().then(a=>{this._request=void 0,this._uploadUrl=a,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((t,r)=>{const s=HO(this._ref.storage,this._ref._location,e,this._blob),a=this._ref.storage._makeRequest(s,Ar,t,r);this._request=a,a.getPromise().then(u=>{u=u,this._request=void 0,this._updateProgress(u.current),this._needToFetchStatus=!1,u.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=OE*this._chunkMultiplier,t=new bd(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((s,a)=>{let u;try{u=QO(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(f){this._error=f,this._transition("error");return}const h=this._ref.storage._makeRequest(u,Ar,s,a,!1);this._request=h,h.getPromise().then(f=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(f.current),f.finalized?(this._metadata=f.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){OE*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,t)=>{const r=QR(this._ref.storage,this._ref._location,this._mappings),s=this._ref.storage._makeRequest(r,Ar,e,t);this._request=s,s.getPromise().then(a=>{this._request=void 0,this._metadata=a,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,t)=>{const r=WO(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,Ar,e,t);this._request=s,s.getPromise().then(a=>{this._request=void 0,this._metadata=a,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const t=this._state==="paused";this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=MR(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=lm(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,r,s){const a=new YO(t||void 0,r||void 0,s||void 0);return this._addObserver(a),()=>{this._removeObserver(a)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);t!==-1&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(t=>{this._notifyObserver(t)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(lm(this._state)){case hn.SUCCESS:Ca(this._resolve.bind(null,this.snapshot))();break;case hn.CANCELED:case hn.ERROR:const t=this._reject;Ca(t.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(lm(this._state)){case hn.RUNNING:case hn.PAUSED:e.next&&Ca(e.next.bind(e,this.snapshot))();break;case hn.SUCCESS:e.complete&&Ca(e.complete.bind(e))();break;case hn.CANCELED:case hn.ERROR:e.error&&Ca(e.error.bind(e,this._error))();break;default:e.error&&Ca(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e,t){this._service=e,t instanceof en?this._location=t:this._location=en.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new So(e,t)}get root(){const e=new en(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return KR(this._location.path)}get storage(){return this._service}get parent(){const e=xO(this._location.path);if(e===null)return null;const t=new en(this._location.bucket,e);return new So(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw BR(e)}}function eL(n,e,t){return n._throwIfRoot("uploadBytesResumable"),new YR(n,new ri(e),t)}function tL(n){const e={prefixes:[],items:[]};return XR(n,e).then(()=>e)}async function XR(n,e,t){const s=await ZR(n,{pageToken:t});e.prefixes.push(...s.prefixes),e.items.push(...s.items),s.nextPageToken!=null&&await XR(n,e,s.nextPageToken)}function ZR(n,e){e!=null&&typeof e.maxResults=="number"&&qm("options.maxResults",1,1e3,e.maxResults);const t=e||{},r=zO(n.storage,n._location,"/",t.pageToken,t.maxResults);return n.storage.makeRequestWithTokens(r,Ar)}function nL(n){n._throwIfRoot("getMetadata");const e=QR(n.storage,n._location,df());return n.storage.makeRequestWithTokens(e,Ar)}function rL(n,e){n._throwIfRoot("updateMetadata");const t=$O(n.storage,n._location,e,df());return n.storage.makeRequestWithTokens(t,Ar)}function iL(n){n._throwIfRoot("getDownloadURL");const e=jO(n.storage,n._location,df());return n.storage.makeRequestWithTokens(e,Ar).then(t=>{if(t===null)throw uO();return t})}function sL(n){n._throwIfRoot("deleteObject");const e=qO(n.storage,n._location);return n.storage.makeRequestWithTokens(e,Ar)}function eA(n,e){const t=bO(n._location.path,e),r=new en(n._location.bucket,t);return new So(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oL(n){return/^[A-Za-z]+:\/\//.test(n)}function aL(n,e){return new So(n,e)}function tA(n,e){if(n instanceof w_){const t=n;if(t._bucket==null)throw oO();const r=new So(t,t._bucket);return e!=null?tA(r,e):r}else return e!==void 0?eA(n,e):n}function uL(n,e){if(e&&oL(e)){if(n instanceof w_)return aL(n,e);throw Ua("To use ref(service, url), the first argument must be a Storage instance.")}else return tA(n,e)}function LE(n,e){const t=e==null?void 0:e[OR];return t==null?null:en.makeFromBucketSpec(t,n)}function lL(n,e,t,r={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:s}=r;s&&(n._overrideAuthToken=typeof s=="string"?s:hI(s,n.app.options.projectId))}class w_{constructor(e,t,r,s,a){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=a,this._bucket=null,this._host=VR,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=JV,this._maxUploadRetryTime=YV,this._requests=new Set,s!=null?this._bucket=en.makeFromBucketSpec(s,this._host):this._bucket=LE(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=en.makeFromBucketSpec(this._url,e):this._bucket=LE(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){qm("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){qm("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new So(this,e)}_makeRequest(e,t,r,s,a=!0){if(this._deleted)return new cO(UR());{const u=EO(e,this._appId,r,s,t,this._firebaseVersion,a);return this._requests.add(u),u.getPromise().then(()=>this._requests.delete(u),()=>this._requests.delete(u)),u}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const ME="@firebase/storage",FE="0.13.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cL="storage";function hL(n,e,t){return n=Ve(n),eL(n,e,t)}function dL(n){return n=Ve(n),nL(n)}function fL(n,e){return n=Ve(n),rL(n,e)}function pL(n,e){return n=Ve(n),ZR(n,e)}function mL(n){return n=Ve(n),tL(n)}function gL(n){return n=Ve(n),iL(n)}function _L(n){return n=Ve(n),sL(n)}function UE(n,e){return n=Ve(n),uL(n,e)}function yL(n,e){return eA(n,e)}function vL(n,e,t,r={}){lL(n,e,t,r)}function wL(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new w_(t,r,s,e,yi)}function EL(){di(new dr(cL,wL,"PUBLIC").setMultipleInstances(!0)),Dn(ME,FE,""),Dn(ME,FE,"esm2017")}EL();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(e,t,r){this._delegate=e,this.task=t,this.ref=r}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{constructor(e,t){this._delegate=e,this._ref=t,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new qh(this._delegate.snapshot,this,this._ref)}then(e,t){return this._delegate.then(r=>{if(e)return e(new qh(r,this,this._ref))},t)}on(e,t,r,s){let a;return t&&(typeof t=="function"?a=u=>t(new qh(u,this,this._ref)):a={next:t.next?u=>t.next(new qh(u,this,this._ref)):void 0,complete:t.complete||void 0,error:t.error||void 0}),this._delegate.on(e,a,r||void 0,s||void 0)}}class zE{constructor(e,t){this._delegate=e,this._service=t}get prefixes(){return this._delegate.prefixes.map(e=>new ci(e,this._service))}get items(){return this._delegate.items.map(e=>new ci(e,this._service))}get nextPageToken(){return this._delegate.nextPageToken||null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e,t){this._delegate=e,this.storage=t}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){const t=yL(this._delegate,e);return new ci(t,this.storage)}get root(){return new ci(this._delegate.root,this.storage)}get parent(){const e=this._delegate.parent;return e==null?null:new ci(e,this.storage)}put(e,t){return this._throwIfRoot("put"),new BE(hL(this._delegate,e,t),this)}putString(e,t=Wn.RAW,r){this._throwIfRoot("putString");const s=$R(t,e),a=Object.assign({},r);return a.contentType==null&&s.contentType!=null&&(a.contentType=s.contentType),new BE(new YR(this._delegate,new ri(s.data,!0),a),this)}listAll(){return mL(this._delegate).then(e=>new zE(e,this.storage))}list(e){return pL(this._delegate,e||void 0).then(t=>new zE(t,this.storage))}getMetadata(){return dL(this._delegate)}updateMetadata(e){return fL(this._delegate,e)}getDownloadURL(){return gL(this._delegate)}delete(){return this._throwIfRoot("delete"),_L(this._delegate)}_throwIfRoot(e){if(this._delegate._location.path==="")throw BR(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(e,t){this.app=e,this._delegate=t}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(e){if(jE(e))throw Ua("ref() expected a child path but got a URL, use refFromURL instead.");return new ci(UE(this._delegate,e),this)}refFromURL(e){if(!jE(e))throw Ua("refFromURL() expected a full URL but got a child path, use ref() instead.");try{en.makeFromUrl(e,this._delegate.host)}catch{throw Ua("refFromUrl() expected a valid full URL but got an invalid one.")}return new ci(UE(this._delegate,e),this)}setMaxUploadRetryTime(e){this._delegate.maxUploadRetryTime=e}setMaxOperationRetryTime(e){this._delegate.maxOperationRetryTime=e}useEmulator(e,t,r={}){vL(this._delegate,e,t,r)}}function jE(n){return/^[A-Za-z]+:\/\//.test(n)}const IL="@firebase/storage-compat",TL="0.3.15";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SL="storage-compat";function RL(n,{instanceIdentifier:e}){const t=n.getProvider("app-compat").getImmediate(),r=n.getProvider("storage").getImmediate({identifier:e});return new nA(t,r)}function AL(n){const e={TaskState:hn,TaskEvent:JO,StringFormat:Wn,Storage:nA,Reference:ci};n.INTERNAL.registerComponent(new dr(SL,RL,"PUBLIC").setServiceProps(e).setMultipleInstances(!0)),n.registerVersion(IL,TL)}AL(iu);const PL={apiKey:"AIzaSyDXH_WNVTJTc8yv8BNaqk9Pj6c2aTXuIlk",authDomain:"nwitter-6b81e.firebaseapp.com",projectId:"nwitter-6b81e",storageBucket:"nwitter-6b81e.firebasestorage.app",messagingSenderId:"652908789643",appId:"1:652908789643:web:a784814e12ba24077f798e"},CL=iu.initializeApp(PL),fo=Bb(CL),Ql=iu.firestore();iu.storage();const rA=({nweetObj:n,isOwner:e})=>{const[t,r]=H.useState(!1),[s,a]=H.useState(n.text),u=async()=>{window.confirm("정말 삭제할 생각?")&&await Ql.doc(`nweets/${n.id}`).delete()},h=()=>r(y=>!y),f=y=>{const{target:{value:w}}=y;a(w)},p=async y=>{y.preventDefault(),console.log(n.id,s),await Ql.doc(`nweets/${n.id}`).update({text:s}),r(!1)};return le.jsx("div",{children:t?le.jsxs(le.Fragment,{children:[le.jsxs("form",{onSubmit:p,children:[le.jsx("input",{onChange:f,value:s,required:!0}),le.jsx("input",{type:"submit",value:"Update Nweet"})]}),le.jsx("button",{onClick:h,children:"Cancel"})]}):le.jsxs(le.Fragment,{children:[le.jsx("h4",{children:n.text}),n.attachmentUrl&&le.jsx("img",{src:n.attachmentUrl,widht:"50px",height:"50px"}),e&&le.jsxs(le.Fragment,{children:[le.jsx("button",{onClick:u,children:"Delete Nweet"}),le.jsx("button",{onClick:h,children:"Edit Nweet"})]})]})})},kL=({userObj:n})=>{const[e,t]=H.useState(""),[r,s]=H.useState(""),a=async p=>{p.preventDefault();let y="";r!==""&&(y="fake download url"),await Ql.collection("nweets").add({text:e,createdAt:Date.now(),creatorId:n.uid,attachmentUrl:y}),t(""),s("")},u=p=>{p.preventDefault();const{target:{value:y}}=p;t(y)},h=p=>{const{target:{files:y}}=p,w=y[0],I=new FileReader;I.onloadend=R=>{const{currentTarget:{result:k}}=R;s(k)},I.readAsDataURL(w)},f=()=>s("");return le.jsxs("form",{onSubmit:a,children:[le.jsx("input",{type:"text",placeholder:"What's on your mind?",maxLength:120,value:e,onChange:u}),le.jsx("input",{type:"file",accept:"image/*",onChange:h}),le.jsx("input",{type:"submit",value:"Nweet"}),r&&le.jsxs("div",{children:[le.jsx("img",{src:r,width:"50px",height:"50px"}),le.jsx("button",{onClick:f,children:"Clear"})]})]})},xL=({userObj:n})=>{const[e,t]=H.useState([]);return H.useEffect(()=>{Ql.collection("nweets").onSnapshot(r=>{const s=r.docs.map(a=>({id:a.id,...a.data()}));t(s)})},[]),le.jsxs(le.Fragment,{children:[le.jsx(kL,{userObj:n}),le.jsx("div",{children:e.map(r=>le.jsx(rA,{nweetObj:r,isOwner:r.creatorId===n.uid},r.id))})]})},bL=()=>{const[n,e]=H.useState(""),[t,r]=H.useState(""),[s,a]=H.useState(!0),[u,h]=H.useState(""),f=()=>a(w=>!w),p=w=>{const{target:{name:I,value:R}}=w;I==="email"?e(R):I==="password"&&r(R)},y=async w=>{w.preventDefault();let I;try{s?I=await Sx(fo,n,t):I=await Rx(fo,n,t),console.log(I)}catch(R){h(R.message)}};return le.jsxs(le.Fragment,{children:[le.jsxs("form",{onSubmit:y,children:[le.jsx("input",{name:"email",type:"email",placeholder:"Email",required:!0,value:n,onChange:p}),le.jsx("input",{name:"password",type:"password",palceholder:"Password",required:!0,value:t,onChange:p}),le.jsx("input",{type:"submit",value:s?"Create Account":"Log In"}),u]}),le.jsx("span",{onClick:f,children:s?"Sign In":"Create Account"})]})},DL=()=>{const n=async e=>{const{target:{name:t}}=e;let r;t==="google"?r=new ti:t==="github"&&(r=new ni),await Qx(fo,r)};return le.jsxs("div",{children:[le.jsx(bL,{}),le.jsxs("div",{children:[le.jsx("button",{onClick:n,name:"google",children:"Continue with Google"}),le.jsx("button",{onClick:n,name:"github",children:"Continue with Github"})]})]})},NL=({userObj:n,refreshUser:e})=>{const t=XE(),[r,s]=H.useState([]),[a,u]=H.useState(""),h=()=>{fo.signOut(),t("/")},f=async()=>{const I=(await Ql.collection("nweets").where("creatorId","==",n.uid).orderBy("createdAt","asc").get()).docs.map(R=>({id:R.id,...R.data()}));s(I)};H.useEffect(()=>{f()},[]);const p=w=>{const{target:{value:I}}=w;u(I)},y=async w=>{w.preventDefault(),n.displayName!==a&&(await Px(n,{displayName:a}),e())};return le.jsxs(le.Fragment,{children:[le.jsxs("form",{onSubmit:y,children:[le.jsx("input",{onChange:p,value:a,type:"text",placeholder:"Display Name"}),le.jsx("input",{type:"submit",placeholder:"Update Profile"})]}),le.jsx("button",{onClick:h,children:"Log Out"}),le.jsx("div",{children:r.map(w=>le.jsx(rA,{nweetObj:w,isOwner:!0},w.id))})]})},VL=({userObj:n})=>le.jsx("nav",{children:le.jsxs("ul",{children:[le.jsx("li",{children:le.jsx(ud,{to:"/",children:"Home"})}),le.jsx("li",{children:le.jsx(ud,{to:"/profile",children:n.displayName})})]})}),OL=({refreshUser:n,isLoggedIn:e,userObj:t})=>le.jsxs(CC,{children:[e&&le.jsx(VL,{userObj:t}),le.jsx(iC,{children:e?le.jsxs(le.Fragment,{children:[le.jsx(Gh,{exact:!0,path:"/",element:le.jsx(xL,{userObj:t})}),le.jsx(Gh,{exact:!0,path:"/profile",element:le.jsx(NL,{userObj:t,refreshUser:n})})]}):le.jsx(Gh,{exact:!0,path:"/",element:le.jsx(DL,{})})})]});function LL(){const[n,e]=H.useState(!1),[t,r]=H.useState(!1),[s,a]=H.useState(null);H.useEffect(()=>{fo.onAuthStateChanged(h=>{h?(r(!0),a(h)):r(!1),e(!0)})},[]);const u=()=>{console.log("refreshUser called",fo.currentUser),a(fo.currentUser)};return le.jsx(le.Fragment,{children:n?le.jsx(OL,{refreshUser:u,isLoggedIn:t,userObj:s}):"Initializing..."})}pP.createRoot(document.getElementById("root")).render(le.jsx(H.StrictMode,{children:le.jsx(LL,{})}));
