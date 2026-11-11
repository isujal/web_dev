(()=>{var cM=Object.create;var ay=Object.defineProperty;var fM=Object.getOwnPropertyDescriptor;var dM=Object.getOwnPropertyNames;var hM=Object.getPrototypeOf,pM=Object.prototype.hasOwnProperty;var Sr=(r,e)=>()=>{try{return e||r((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};var mM=(r,e,t,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of dM(e))!pM.call(r,o)&&o!==t&&ay(r,o,{get:()=>e[o],enumerable:!(s=fM(e,o))||s.enumerable});return r};var Vi=(r,e,t)=>(t=r!=null?cM(hM(r)):{},mM(e||!r||!r.__esModule?ay(t,"default",{value:r,enumerable:!0}):t,r));var by=Sr(nt=>{"use strict";var gp=Symbol.for("react.transitional.element"),gM=Symbol.for("react.portal"),vM=Symbol.for("react.fragment"),yM=Symbol.for("react.strict_mode"),_M=Symbol.for("react.profiler"),bM=Symbol.for("react.consumer"),SM=Symbol.for("react.context"),xM=Symbol.for("react.forward_ref"),MM=Symbol.for("react.suspense"),wM=Symbol.for("react.memo"),dy=Symbol.for("react.lazy"),TM=Symbol.for("react.activity"),EM=Symbol.for("react.view_transition"),ly=Symbol.iterator;function AM(r){return r===null||typeof r!="object"?null:(r=ly&&r[ly]||r["@@iterator"],typeof r=="function"?r:null)}var hy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},py=Object.assign,my={};function ia(r,e,t){this.props=r,this.context=e,this.refs=my,this.updater=t||hy}ia.prototype.isReactComponent={};ia.prototype.setState=function(r,e){if(typeof r!="object"&&typeof r!="function"&&r!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,r,e,"setState")};ia.prototype.forceUpdate=function(r){this.updater.enqueueForceUpdate(this,r,"forceUpdate")};function gy(){}gy.prototype=ia.prototype;function vp(r,e,t){this.props=r,this.context=e,this.refs=my,this.updater=t||hy}var yp=vp.prototype=new gy;yp.constructor=vp;py(yp,ia.prototype);yp.isPureReactComponent=!0;var uy=Array.isArray;function mp(){}var $t={H:null,A:null,T:null,S:null},vy=Object.prototype.hasOwnProperty;function _p(r,e,t){var s=t.ref;return{$$typeof:gp,type:r,key:e,ref:s!==void 0?s:null,props:t}}function CM(r,e){return _p(r.type,e,r.props)}function bp(r){return typeof r=="object"&&r!==null&&r.$$typeof===gp}function RM(r){var e={"=":"=0",":":"=2"};return"$"+r.replace(/[=:]/g,function(t){return e[t]})}var cy=/\/+/g;function pp(r,e){return typeof r=="object"&&r!==null&&r.key!=null?RM(""+r.key):e.toString(36)}function PM(r){switch(r.status){case"fulfilled":return r.value;case"rejected":throw r.reason;default:switch(typeof r.status=="string"?r.then(mp,mp):(r.status="pending",r.then(function(e){r.status==="pending"&&(r.status="fulfilled",r.value=e)},function(e){r.status==="pending"&&(r.status="rejected",r.reason=e)})),r.status){case"fulfilled":return r.value;case"rejected":throw r.reason}}throw r}function na(r,e,t,s,o){var l=typeof r;(l==="undefined"||l==="boolean")&&(r=null);var c=!1;if(r===null)c=!0;else switch(l){case"bigint":case"string":case"number":c=!0;break;case"object":switch(r.$$typeof){case gp:case gM:c=!0;break;case dy:return c=r._init,na(c(r._payload),e,t,s,o)}}if(c)return o=o(r),c=s===""?"."+pp(r,0):s,uy(o)?(t="",c!=null&&(t=c.replace(cy,"$&/")+"/"),na(o,e,t,"",function(m){return m})):o!=null&&(bp(o)&&(o=CM(o,t+(o.key==null||r&&r.key===o.key?"":(""+o.key).replace(cy,"$&/")+"/")+c)),e.push(o)),1;c=0;var d=s===""?".":s+":";if(uy(r))for(var p=0;p<r.length;p++)s=r[p],l=d+pp(s,p),c+=na(s,e,t,l,o);else if(p=AM(r),typeof p=="function")for(r=p.call(r),p=0;!(s=r.next()).done;)s=s.value,l=d+pp(s,p++),c+=na(s,e,t,l,o);else if(l==="object"){if(typeof r.then=="function")return na(PM(r),e,t,s,o);throw e=String(r),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return c}function hc(r,e,t){if(r==null)return r;var s=[],o=0;return na(r,s,"","",function(l){return e.call(t,l,o++)}),s}function IM(r){if(r._status===-1){var e=r._result,t=e();t.then(function(s){(r._status===0||r._status===-1)&&(r._status=1,r._result=s,t.status===void 0&&(t.status="fulfilled",t.value=s))},function(s){(r._status===0||r._status===-1)&&(r._status=2,r._result=s,t.status===void 0&&(t.status="rejected",t.reason=s))}),r._status===-1&&(r._status=0,r._result=t)}if(r._status===1)return r._result.default;throw r._result}var fy=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)};function yy(r){var e=$t.T,t={};t.types=e!==null?e.types:null,$t.T=t;try{var s=r(),o=$t.S;o!==null&&o(t,s),typeof s=="object"&&s!==null&&typeof s.then=="function"&&s.then(mp,fy)}catch(l){fy(l)}finally{e!==null&&t.types!==null&&(e.types=t.types),$t.T=e}}function _y(r){var e=$t.T;if(e!==null){var t=e.types;t===null?e.types=[r]:t.indexOf(r)===-1&&t.push(r)}else yy(_y.bind(null,r))}var NM={map:hc,forEach:function(r,e,t){hc(r,function(){e.apply(this,arguments)},t)},count:function(r){var e=0;return hc(r,function(){e++}),e},toArray:function(r){return hc(r,function(e){return e})||[]},only:function(r){if(!bp(r))throw Error("React.Children.only expected to receive a single React element child.");return r}};nt.Activity=TM;nt.Children=NM;nt.Component=ia;nt.Fragment=vM;nt.Profiler=_M;nt.PureComponent=vp;nt.StrictMode=yM;nt.Suspense=MM;nt.ViewTransition=EM;nt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=$t;nt.__COMPILER_RUNTIME={__proto__:null,c:function(r){return $t.H.useMemoCache(r)}};nt.addTransitionType=_y;nt.cache=function(r){return function(){return r.apply(null,arguments)}};nt.cacheSignal=function(){return null};nt.cloneElement=function(r,e,t){if(r==null)throw Error("The argument must be a React element, but you passed "+r+".");var s=py({},r.props),o=r.key;if(e!=null)for(l in e.key!==void 0&&(o=""+e.key),e)!vy.call(e,l)||l==="key"||l==="__self"||l==="__source"||l==="ref"&&e.ref===void 0||(s[l]=e[l]);var l=arguments.length-2;if(l===1)s.children=t;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];s.children=c}return _p(r.type,o,s)};nt.createContext=function(r){return r={$$typeof:SM,_currentValue:r,_currentValue2:r,_threadCount:0,Provider:null,Consumer:null},r.Provider=r,r.Consumer={$$typeof:bM,_context:r},r};nt.createElement=function(r,e,t){var s,o={},l=null;if(e!=null)for(s in e.key!==void 0&&(l=""+e.key),e)vy.call(e,s)&&s!=="key"&&s!=="__self"&&s!=="__source"&&(o[s]=e[s]);var c=arguments.length-2;if(c===1)o.children=t;else if(1<c){for(var d=Array(c),p=0;p<c;p++)d[p]=arguments[p+2];o.children=d}if(r&&r.defaultProps)for(s in c=r.defaultProps,c)o[s]===void 0&&(o[s]=c[s]);return _p(r,l,o)};nt.createRef=function(){return{current:null}};nt.forwardRef=function(r){return{$$typeof:xM,render:r}};nt.isValidElement=bp;nt.lazy=function(r){return{$$typeof:dy,_payload:{_status:-1,_result:r},_init:IM}};nt.memo=function(r,e){return{$$typeof:wM,type:r,compare:e===void 0?null:e}};nt.startTransition=yy;nt.unstable_useCacheRefresh=function(){return $t.H.useCacheRefresh()};nt.use=function(r){return $t.H.use(r)};nt.useActionState=function(r,e,t){return $t.H.useActionState(r,e,t)};nt.useCallback=function(r,e){return $t.H.useCallback(r,e)};nt.useContext=function(r){return $t.H.useContext(r)};nt.useDebugValue=function(){};nt.useDeferredValue=function(r,e){return $t.H.useDeferredValue(r,e)};nt.useEffect=function(r,e){return $t.H.useEffect(r,e)};nt.useEffectEvent=function(r){return $t.H.useEffectEvent(r)};nt.useId=function(){return $t.H.useId()};nt.useImperativeHandle=function(r,e,t){return $t.H.useImperativeHandle(r,e,t)};nt.useInsertionEffect=function(r,e){return $t.H.useInsertionEffect(r,e)};nt.useLayoutEffect=function(r,e){return $t.H.useLayoutEffect(r,e)};nt.useMemo=function(r,e){return $t.H.useMemo(r,e)};nt.useOptimistic=function(r,e){return $t.H.useOptimistic(r,e)};nt.useReducer=function(r,e,t){return $t.H.useReducer(r,e,t)};nt.useRef=function(r){return $t.H.useRef(r)};nt.useState=function(r){return $t.H.useState(r)};nt.useSyncExternalStore=function(r,e,t){return $t.H.useSyncExternalStore(r,e,t)};nt.useTransition=function(){return $t.H.useTransition()};nt.version="19.3.1"});var ws=Sr((U2,Sy)=>{"use strict";Sy.exports=by()});var bb=Sr(yd=>{"use strict";var rR=Symbol.for("react.transitional.element"),sR=Symbol.for("react.fragment");function _b(r,e,t){var s=null;if(t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),"key"in e){t={};for(var o in e)o!=="key"&&(t[o]=e[o])}else t=e;return e=t.ref,{$$typeof:rR,type:r,key:s,ref:e!==void 0?e:null,props:t}}yd.Fragment=sR;yd.jsx=_b;yd.jsxs=_b});var su=Sr((uN,Sb)=>{"use strict";Sb.exports=bb()});var Mb=Sr(xb=>{"use strict";var Fa=ws();function oR(r,e){return r===e&&(r!==0||1/r===1/e)||r!==r&&e!==e}var aR=typeof Object.is=="function"?Object.is:oR,lR=Fa.useState,uR=Fa.useEffect,cR=Fa.useLayoutEffect,fR=Fa.useDebugValue;function dR(r,e){var t=e(),s=lR({inst:{value:t,getSnapshot:e}}),o=s[0].inst,l=s[1];return cR(function(){o.value=t,o.getSnapshot=e,Wm(o)&&l({inst:o})},[r,t,e]),uR(function(){return Wm(o)&&l({inst:o}),r(function(){Wm(o)&&l({inst:o})})},[r]),fR(t),t}function Wm(r){var e=r.getSnapshot;r=r.value;try{var t=e();return!aR(r,t)}catch{return!0}}function hR(r,e){return e()}var pR=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?hR:dR;xb.useSyncExternalStore=Fa.useSyncExternalStore!==void 0?Fa.useSyncExternalStore:pR});var Tb=Sr((fN,wb)=>{"use strict";wb.exports=Mb()});var Ab=Sr(Eb=>{"use strict";var _d=ws(),mR=Tb();function gR(r,e){return r===e&&(r!==0||1/r===1/e)||r!==r&&e!==e}var vR=typeof Object.is=="function"?Object.is:gR,yR=mR.useSyncExternalStore,_R=_d.useRef,bR=_d.useEffect,SR=_d.useMemo,xR=_d.useDebugValue;Eb.useSyncExternalStoreWithSelector=function(r,e,t,s,o){var l=_R(null);if(l.current===null){var c={hasValue:!1,value:null};l.current=c}else c=l.current;l=SR(function(){function p(b){if(!m){if(m=!0,v=b,b=s(b),o!==void 0&&c.hasValue){var x=c.value;if(o(x,b))return y=x}return y=b}if(x=y,vR(v,b))return x;var C=s(b);return o!==void 0&&o(x,C)?(v=b,x):(v=b,y=C)}var m=!1,v,y,_=t===void 0?null:t;return[function(){return p(e())},_===null?void 0:function(){return p(_())}]},[e,t,s,o]);var d=yR(r,l[0],l[1]);return bR(function(){c.hasValue=!0,c.value=d},[d]),xR(d),d}});var Rb=Sr((hN,Cb)=>{"use strict";Cb.exports=Ab()});var Zb=Sr(Jt=>{"use strict";function Ym(r,e){var t=r.length;r.push(e);e:for(;0<t;){var s=t-1>>>1,o=r[s];if(0<bd(o,e))r[s]=e,r[t]=o,t=s;else break e}}function Ir(r){return r.length===0?null:r[0]}function xd(r){if(r.length===0)return null;var e=r[0],t=r.pop();if(t!==e){r[0]=t;e:for(var s=0,o=r.length,l=o>>>1;s<l;){var c=2*(s+1)-1,d=r[c],p=c+1,m=r[p];if(0>bd(d,t))p<o&&0>bd(m,d)?(r[s]=m,r[p]=t,s=p):(r[s]=d,r[c]=t,s=c);else if(p<o&&0>bd(m,t))r[s]=m,r[p]=t,s=p;else break e}}return e}function bd(r,e){var t=r.sortIndex-e.sortIndex;return t!==0?t:r.id-e.id}Jt.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(Hb=performance,Jt.unstable_now=function(){return Hb.now()}):(Xm=Date,Vb=Xm.now(),Jt.unstable_now=function(){return Xm.now()-Vb});var Hb,Xm,Vb,rs=[],Us=[],AR=1,Yi=null,ni=3,jm=!1,ou=!1,au=!1,Zm=!1,Xb=typeof setTimeout=="function"?setTimeout:null,qb=typeof clearTimeout=="function"?clearTimeout:null,Gb=typeof setImmediate<"u"?setImmediate:null;function Sd(r){for(var e=Ir(Us);e!==null;){if(e.callback===null)xd(Us);else if(e.startTime<=r)xd(Us),e.sortIndex=e.expirationTime,Ym(rs,e);else break;e=Ir(Us)}}function Jm(r){if(au=!1,Sd(r),!ou)if(Ir(rs)!==null)ou=!0,Oa||(Oa=!0,Ua());else{var e=Ir(Us);e!==null&&Km(Jm,e.startTime-r)}}var Oa=!1,lu=-1,$b=5,Yb=-1;function jb(){return Zm?!0:!(Jt.unstable_now()-Yb<$b)}function qm(){if(Zm=!1,Oa){var r=Jt.unstable_now();Yb=r;var e=!0;try{e:{ou=!1,au&&(au=!1,qb(lu),lu=-1),jm=!0;var t=ni;try{t:{for(Sd(r),Yi=Ir(rs);Yi!==null&&!(Yi.expirationTime>r&&jb());){var s=Yi.callback;if(typeof s=="function"){Yi.callback=null,ni=Yi.priorityLevel;var o=s(Yi.expirationTime<=r);if(r=Jt.unstable_now(),typeof o=="function"){Yi.callback=o,Sd(r),e=!0;break t}Yi===Ir(rs)&&xd(rs),Sd(r)}else xd(rs);Yi=Ir(rs)}if(Yi!==null)e=!0;else{var l=Ir(Us);l!==null&&Km(Jm,l.startTime-r),e=!1}}break e}finally{Yi=null,ni=t,jm=!1}e=void 0}}finally{e?Ua():Oa=!1}}}var Ua;typeof Gb=="function"?Ua=function(){Gb(qm)}:typeof MessageChannel<"u"?($m=new MessageChannel,Wb=$m.port2,$m.port1.onmessage=qm,Ua=function(){Wb.postMessage(null)}):Ua=function(){Xb(qm,0)};var $m,Wb;function Km(r,e){lu=Xb(function(){r(Jt.unstable_now())},e)}Jt.unstable_IdlePriority=5;Jt.unstable_ImmediatePriority=1;Jt.unstable_LowPriority=4;Jt.unstable_NormalPriority=3;Jt.unstable_Profiling=null;Jt.unstable_UserBlockingPriority=2;Jt.unstable_cancelCallback=function(r){r.callback=null};Jt.unstable_forceFrameRate=function(r){0>r||125<r?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$b=0<r?Math.floor(1e3/r):5};Jt.unstable_getCurrentPriorityLevel=function(){return ni};Jt.unstable_next=function(r){switch(ni){case 1:case 2:case 3:var e=3;break;default:e=ni}var t=ni;ni=e;try{return r()}finally{ni=t}};Jt.unstable_requestPaint=function(){Zm=!0};Jt.unstable_runWithPriority=function(r,e){switch(r){case 1:case 2:case 3:case 4:case 5:break;default:r=3}var t=ni;ni=r;try{return e()}finally{ni=t}};Jt.unstable_scheduleCallback=function(r,e,t){var s=Jt.unstable_now();switch(typeof t=="object"&&t!==null?(t=t.delay,t=typeof t=="number"&&0<t?s+t:s):t=s,r){case 1:var o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3}return o=t+o,r={id:AR++,callback:e,priorityLevel:r,startTime:t,expirationTime:o,sortIndex:-1},t>s?(r.sortIndex=t,Ym(Us,r),Ir(rs)===null&&r===Ir(Us)&&(au?(qb(lu),lu=-1):au=!0,Km(Jm,t-s))):(r.sortIndex=o,Ym(rs,r),ou||jm||(ou=!0,Oa||(Oa=!0,Ua()))),r};Jt.unstable_shouldYield=jb;Jt.unstable_wrapCallback=function(r){var e=ni;return function(){var t=ni;ni=e;try{return r.apply(this,arguments)}finally{ni=t}}}});var Qm=Sr((_N,Jb)=>{"use strict";Jb.exports=Zb()});var Kt=Vi(ws()),cS=Vi(ws());var e_=0,Kp=1,t_=2;var Qp=0,go=1,Pa=2,Ds=3,ks=0,ai=1,Cr=2,vo=0,Ia=1,em=2,tm=3,nm=4,n_=5;var yo=100,i_=101,r_=102,s_=103,o_=104,a_=200,l_=201,u_=202,c_=203,im=204,rm=205,f_=206,d_=207,h_=208,p_=209,m_=210,g_=211,v_=212,y_=213,__=214,Wc=0,Xc=1,qc=2,ba=3,$c=4,Yc=5,jc=6,Zc=7,sm=0,b_=1,S_=2,gi=0,om=1,am=2,lm=3,ql=4,um=5,cm=6,fm=7;var dm=300,_o=301,Na=302,Tf=303,Ef=304,Jc=1e3,Mr=1001,Kc=1002,Dn=1003,x_=1004;var $l=1005;var oi=1006,Af=1007;var ts=1008;var ei=1009,hm=1010,pm=1011,La=1012,Cf=1013,lr=1014,$i=1015,ur=1016,Rf=1017,Pf=1018,bo=1020,mm=35902,gm=35899,vm=1021,ym=1022,Ni=1023,jr=1026,ns=1027,If=1028,Nf=1029,Fs=1030,Lf=1031;var Df=1033,Yl=33776,jl=33777,Zl=33778,Jl=33779,kf=35840,Ff=35841,Uf=35842,Of=35843,zf=36196,Bf=37492,Hf=37496,Vf=37488,Gf=37489,Kl=37490,Wf=37491,Xf=37808,qf=37809,$f=37810,Yf=37811,jf=37812,Zf=37813,Jf=37814,Kf=37815,Qf=37816,ed=37817,td=37818,nd=37819,id=37820,rd=37821,sd=36492,od=36494,ad=36495,ld=36283,ud=36284,Ql=36285,cd=36286;var Ml=2300,Qc=2301,Bc=2302,Wp=2303,Xp=2400,qp=2401,$p=2402;var M_=3200;var fd=0,w_=1,is="",Mn="srgb",uo="srgb-linear",wl="linear",kt="srgb";var Hc=7680;var T_=519,E_=512,A_=513,C_=514,_m=515,R_=516,P_=517,bm=518,Sm=519,I_=35044;var xm="300 es",Wi=2e3,Sa=2001;function LM(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function DM(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function xa(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function N_(){let r=xa("canvas");return r.style.display="block",r}var xy={},Ma=null;function Mm(...r){let e="THREE."+r.shift();Ma?Ma("log",e,...r):console.log(e,...r)}function L_(r){let e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Ye(...r){r=L_(r);let e="THREE."+r.shift();if(Ma)Ma("warn",e,...r);else{let t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function et(...r){r=L_(r);let e="THREE."+r.shift();if(Ma)Ma("error",e,...r);else{let t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function xl(...r){let e=r.join(" ");e in xy||(xy[e]=!0,Ye(...r))}function D_(r,e,t){return new Promise(function(s,o){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:s()}}setTimeout(l,t)})}var k_={[Wc]:Wc,[qc]:jc,[$c]:$c,[ba]:Yc,[Xc]:Xc,[jc]:qc,[Zc]:Zc,[Yc]:ba},wr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){let s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){let s=this._listeners;if(s===void 0)return;let o=s[e];if(o!==void 0){let l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let s=t[e.type];if(s!==void 0){e.target=this;let o=s.slice(0);for(let l=0,c=o.length;l<c;l++)o[l].call(this,e);e.target=null}}},Jn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Vc=Math.PI/180,ef=180/Math.PI;function eu(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Jn[r&255]+Jn[r>>8&255]+Jn[r>>16&255]+Jn[r>>24&255]+"-"+Jn[e&255]+Jn[e>>8&255]+"-"+Jn[e>>16&15|64]+Jn[e>>24&255]+"-"+Jn[t&63|128]+Jn[t>>8&255]+"-"+Jn[t>>16&255]+Jn[t>>24&255]+Jn[s&255]+Jn[s>>8&255]+Jn[s>>16&255]+Jn[s>>24&255]).toLowerCase()}function Mt(r,e,t){return Math.max(e,Math.min(t,r))}function kM(r,e){return(r%e+e)%e}function Sp(r,e,t){return(1-t)*r+t*e}function F_(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function wm(r){switch(r.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function FM(r,e){if(e.constructor===Float32Array)return r;let t=wm(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(r/t,-1)}function UM(r,e){if(e.constructor===Float32Array)return r;let t=wm(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(r*t)}var Rm=class Rm{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,s=this.y,o=e.elements;return this.x=o[0]*t+o[3]*s+o[6],this.y=o[1]*t+o[4]*s+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this}clampLength(e,t){let s=this.length();return this.divideScalar(s||1).multiplyScalar(Mt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let s=this.dot(e)/t;return Math.acos(Mt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let s=Math.cos(t),o=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*s-c*o+e.x,this.y=l*o+c*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Rm.prototype.isVector2=!0;var ct=Rm,Tr=class{constructor(e=0,t=0,s=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=o}static slerpFlat(e,t,s,o,l,c,d){let p=s[o+0],m=s[o+1],v=s[o+2],y=s[o+3],_=l[c+0],b=l[c+1],x=l[c+2],C=l[c+3];if(y!==C||p!==_||m!==b||v!==x){let S=p*_+m*b+v*x+y*C;S<0&&(_=-_,b=-b,x=-x,C=-C,S=-S);let g=1-d;if(S<.9995){let A=Math.acos(S),D=Math.sin(A);g=Math.sin(g*A)/D,d=Math.sin(d*A)/D,p=p*g+_*d,m=m*g+b*d,v=v*g+x*d,y=y*g+C*d}else{p=p*g+_*d,m=m*g+b*d,v=v*g+x*d,y=y*g+C*d;let A=1/Math.sqrt(p*p+m*m+v*v+y*y);p*=A,m*=A,v*=A,y*=A}}e[t]=p,e[t+1]=m,e[t+2]=v,e[t+3]=y}static multiplyQuaternionsFlat(e,t,s,o,l,c){let d=s[o],p=s[o+1],m=s[o+2],v=s[o+3],y=l[c],_=l[c+1],b=l[c+2],x=l[c+3];return e[t]=d*x+v*y+p*b-m*_,e[t+1]=p*x+v*_+m*y-d*b,e[t+2]=m*x+v*b+d*_-p*y,e[t+3]=v*x-d*y-p*_-m*b,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,o){return this._x=e,this._y=t,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let s=e._x,o=e._y,l=e._z,c=e._order,d=Math.cos,p=Math.sin,m=d(s/2),v=d(o/2),y=d(l/2),_=p(s/2),b=p(o/2),x=p(l/2);switch(c){case"XYZ":this._x=_*v*y+m*b*x,this._y=m*b*y-_*v*x,this._z=m*v*x+_*b*y,this._w=m*v*y-_*b*x;break;case"YXZ":this._x=_*v*y+m*b*x,this._y=m*b*y-_*v*x,this._z=m*v*x-_*b*y,this._w=m*v*y+_*b*x;break;case"ZXY":this._x=_*v*y-m*b*x,this._y=m*b*y+_*v*x,this._z=m*v*x+_*b*y,this._w=m*v*y-_*b*x;break;case"ZYX":this._x=_*v*y-m*b*x,this._y=m*b*y+_*v*x,this._z=m*v*x-_*b*y,this._w=m*v*y+_*b*x;break;case"YZX":this._x=_*v*y+m*b*x,this._y=m*b*y+_*v*x,this._z=m*v*x-_*b*y,this._w=m*v*y-_*b*x;break;case"XZY":this._x=_*v*y-m*b*x,this._y=m*b*y-_*v*x,this._z=m*v*x+_*b*y,this._w=m*v*y+_*b*x;break;default:Ye("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let s=t/2,o=Math.sin(s);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,s=t[0],o=t[4],l=t[8],c=t[1],d=t[5],p=t[9],m=t[2],v=t[6],y=t[10],_=s+d+y;if(_>0){let b=.5/Math.sqrt(_+1);this._w=.25/b,this._x=(v-p)*b,this._y=(l-m)*b,this._z=(c-o)*b}else if(s>d&&s>y){let b=2*Math.sqrt(1+s-d-y);this._w=(v-p)/b,this._x=.25*b,this._y=(o+c)/b,this._z=(l+m)/b}else if(d>y){let b=2*Math.sqrt(1+d-s-y);this._w=(l-m)/b,this._x=(o+c)/b,this._y=.25*b,this._z=(p+v)/b}else{let b=2*Math.sqrt(1+y-s-d);this._w=(c-o)/b,this._x=(l+m)/b,this._y=(p+v)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){let s=this.angleTo(e);if(s===0)return this;let o=Math.min(1,t/s);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let s=e._x,o=e._y,l=e._z,c=e._w,d=t._x,p=t._y,m=t._z,v=t._w;return this._x=s*v+c*d+o*m-l*p,this._y=o*v+c*p+l*d-s*m,this._z=l*v+c*m+s*p-o*d,this._w=c*v-s*d-o*p-l*m,this._onChangeCallback(),this}slerp(e,t){let s=e._x,o=e._y,l=e._z,c=e._w,d=this.dot(e);d<0&&(s=-s,o=-o,l=-l,c=-c,d=-d);let p=1-t;if(d<.9995){let m=Math.acos(d),v=Math.sin(m);p=Math.sin(p*m)/v,t=Math.sin(t*m)/v,this._x=this._x*p+s*t,this._y=this._y*p+o*t,this._z=this._z*p+l*t,this._w=this._w*p+c*t,this._onChangeCallback()}else this._x=this._x*p+s*t,this._y=this._y*p+o*t,this._z=this._z*p+l*t,this._w=this._w*p+c*t,this.normalize();return this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),o=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Pm=class Pm{constructor(e=0,t=0,s=0){this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(My.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(My.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*o,this.y=l[1]*t+l[4]*s+l[7]*o,this.z=l[2]*t+l[5]*s+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,s=this.y,o=this.z,l=e.elements,c=1/(l[3]*t+l[7]*s+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*o+l[12])*c,this.y=(l[1]*t+l[5]*s+l[9]*o+l[13])*c,this.z=(l[2]*t+l[6]*s+l[10]*o+l[14])*c,this}applyQuaternion(e){let t=this.x,s=this.y,o=this.z,l=e.x,c=e.y,d=e.z,p=e.w,m=2*(c*o-d*s),v=2*(d*t-l*o),y=2*(l*s-c*t);return this.x=t+p*m+c*y-d*v,this.y=s+p*v+d*m-l*y,this.z=o+p*y+l*v-c*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*o,this.y=l[1]*t+l[5]*s+l[9]*o,this.z=l[2]*t+l[6]*s+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this}clampLength(e,t){let s=this.length();return this.divideScalar(s||1).multiplyScalar(Mt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let s=e.x,o=e.y,l=e.z,c=t.x,d=t.y,p=t.z;return this.x=o*p-l*d,this.y=l*c-s*p,this.z=s*d-o*c,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return xp.copy(this).projectOnVector(e),this.sub(xp)}reflect(e){return this.sub(xp.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let s=this.dot(e)/t;return Math.acos(Mt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,s=this.y-e.y,o=this.z-e.z;return t*t+s*s+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){let o=Math.sin(t)*e;return this.x=o*Math.sin(s),this.y=Math.cos(t)*e,this.z=o*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Pm.prototype.isVector3=!0;var X=Pm,xp=new X,My=new Tr,Im=class Im{constructor(e,t,s,o,l,c,d,p,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,c,d,p,m)}set(e,t,s,o,l,c,d,p,m){let v=this.elements;return v[0]=e,v[1]=o,v[2]=d,v[3]=t,v[4]=l,v[5]=p,v[6]=s,v[7]=c,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let s=e.elements,o=t.elements,l=this.elements,c=s[0],d=s[3],p=s[6],m=s[1],v=s[4],y=s[7],_=s[2],b=s[5],x=s[8],C=o[0],S=o[3],g=o[6],A=o[1],D=o[4],R=o[7],L=o[2],N=o[5],M=o[8];return l[0]=c*C+d*A+p*L,l[3]=c*S+d*D+p*N,l[6]=c*g+d*R+p*M,l[1]=m*C+v*A+y*L,l[4]=m*S+v*D+y*N,l[7]=m*g+v*R+y*M,l[2]=_*C+b*A+x*L,l[5]=_*S+b*D+x*N,l[8]=_*g+b*R+x*M,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],c=e[4],d=e[5],p=e[6],m=e[7],v=e[8];return t*c*v-t*d*m-s*l*v+s*d*p+o*l*m-o*c*p}invert(){let e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],c=e[4],d=e[5],p=e[6],m=e[7],v=e[8],y=v*c-d*m,_=d*p-v*l,b=m*l-c*p,x=t*y+s*_+o*b;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let C=1/x;return e[0]=y*C,e[1]=(o*m-v*s)*C,e[2]=(d*s-o*c)*C,e[3]=_*C,e[4]=(v*t-o*p)*C,e[5]=(o*l-d*t)*C,e[6]=b*C,e[7]=(s*p-m*t)*C,e[8]=(c*t-s*l)*C,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,o,l,c,d){let p=Math.cos(l),m=Math.sin(l);return this.set(s*p,s*m,-s*(p*c+m*d)+c+e,-o*m,o*p,-o*(-m*c+p*d)+d+t,0,0,1),this}scale(e,t){return xl("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Mp.makeScale(e,t)),this}rotate(e){return xl("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Mp.makeRotation(-e)),this}translate(e,t){return xl("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Mp.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,s=e.elements;for(let o=0;o<9;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){let s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Im.prototype.isMatrix3=!0;var tt=Im,Mp=new tt,wy=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ty=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function OM(){let r={enabled:!0,workingColorSpace:uo,spaces:{},convert:function(o,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===kt&&(o.r=Yr(o.r),o.g=Yr(o.g),o.b=Yr(o.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===kt&&(o.r=_a(o.r),o.g=_a(o.g),o.b=_a(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===is?wl:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,c){return o.copy(this.spaces[c].fromXYZ).multiply(this.spaces[l].toXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[uo]:{primaries:e,whitePoint:s,transfer:wl,toXYZ:wy,fromXYZ:Ty,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Mn},outputColorSpaceConfig:{drawingBufferColorSpace:Mn}},[Mn]:{primaries:e,whitePoint:s,transfer:kt,toXYZ:wy,fromXYZ:Ty,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Mn}}}),r}var vt=OM();function Yr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function _a(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var ra,tf=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{ra===void 0&&(ra=xa("canvas")),ra.width=e.width,ra.height=e.height;let o=ra.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),s=ra}return s.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=xa("canvas");t.width=e.width,t.height=e.height;let s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);let o=s.getImageData(0,0,e.width,e.height),l=o.data;for(let c=0;c<l.length;c++)l[c]=Yr(l[c]/255)*255;return s.putImageData(o,0,0),t}else if(e.data){let t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(Yr(t[s]/255)*255):t[s]=Yr(t[s]);return{data:t,width:e.width,height:e.height}}else return Ye("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},zM=0,wa=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:zM++}),this.uuid=eu(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let c=0,d=o.length;c<d;c++)o[c].isDataTexture?l.push(wp(o[c].image)):l.push(wp(o[c]))}else l=wp(o);s.url=l}return t||(e.images[this.uuid]=s),s}};function wp(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?tf.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Ye("Texture: Unable to serialize Texture."),{})}var BM=0,Tp=new X,Qn=class r extends wr{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,s=Mr,o=Mr,l=oi,c=ts,d=Ni,p=ei,m=r.DEFAULT_ANISOTROPY,v=is){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:BM++}),this.uuid=eu(),this.name="",this.source=new wa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=l,this.minFilter=c,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Tp).x}get height(){return this.source.getSize(Tp).y}get depth(){return this.source.getSize(Tp).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let s=e[t];if(s===void 0){Ye(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let o=this[t];if(o===void 0){Ye(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&s&&o.isVector2&&s.isVector2||o&&s&&o.isVector3&&s.isVector3||o&&s&&o.isMatrix3&&s.isMatrix3?o.copy(s):this[t]=s}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jc:e.x=e.x-Math.floor(e.x);break;case Mr:e.x=e.x<0?0:1;break;case Kc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jc:e.y=e.y-Math.floor(e.y);break;case Mr:e.y=e.y<0?0:1;break;case Kc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Qn.DEFAULT_IMAGE=null;Qn.DEFAULT_MAPPING=dm;Qn.DEFAULT_ANISOTROPY=1;var Nm=class Nm{constructor(e=0,t=0,s=0,o=1){this.x=e,this.y=t,this.z=s,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,o){return this.x=e,this.y=t,this.z=s,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,s=this.y,o=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*s+c[8]*o+c[12]*l,this.y=c[1]*t+c[5]*s+c[9]*o+c[13]*l,this.z=c[2]*t+c[6]*s+c[10]*o+c[14]*l,this.w=c[3]*t+c[7]*s+c[11]*o+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,o,l,p=e.elements,m=p[0],v=p[4],y=p[8],_=p[1],b=p[5],x=p[9],C=p[2],S=p[6],g=p[10];if(Math.abs(v-_)<.01&&Math.abs(y-C)<.01&&Math.abs(x-S)<.01){if(Math.abs(v+_)<.1&&Math.abs(y+C)<.1&&Math.abs(x+S)<.1&&Math.abs(m+b+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let D=(m+1)/2,R=(b+1)/2,L=(g+1)/2,N=(v+_)/4,M=(y+C)/4,P=(x+S)/4;return D>R&&D>L?D<.01?(s=0,o=.707106781,l=.707106781):(s=Math.sqrt(D),o=N/s,l=M/s):R>L?R<.01?(s=.707106781,o=0,l=.707106781):(o=Math.sqrt(R),s=N/o,l=P/o):L<.01?(s=.707106781,o=.707106781,l=0):(l=Math.sqrt(L),s=M/l,o=P/l),this.set(s,o,l,t),this}let A=Math.sqrt((S-x)*(S-x)+(y-C)*(y-C)+(_-v)*(_-v));return Math.abs(A)<.001&&(A=1),this.x=(S-x)/A,this.y=(y-C)/A,this.z=(_-v)/A,this.w=Math.acos((m+b+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this.w=Mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this.w=Mt(this.w,e,t),this}clampLength(e,t){let s=this.length();return this.divideScalar(s||1).multiplyScalar(Mt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Nm.prototype.isVector4=!0;var Zt=Nm,nf=class extends wr{constructor(e=1,t=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:oi,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=s.depth,this.scissor=new Zt(0,0,e,t),this.scissorTest=!1,this.viewport=new Zt(0,0,e,t),this.textures=[];let o=s.count;for(let l=0;l<o;l++)this.textures[l]=new Qn({width:e,height:t,depth:s.depth}),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveColorBuffer=s.resolveColorBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.storeMultisampledColorBuffer=s.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=s.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=s.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:oi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=s,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,s=e.textures.length;t<s;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let o=Object.assign({},e.textures[t].image);this.textures[t].source=new wa(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pi=class extends nf{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}},Tl=class extends Qn{constructor(e=null,t=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var rf=class extends Qn{constructor(e=null,t=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var wf=class wf{constructor(e,t,s,o,l,c,d,p,m,v,y,_,b,x,C,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,c,d,p,m,v,y,_,b,x,C,S)}set(e,t,s,o,l,c,d,p,m,v,y,_,b,x,C,S){let g=this.elements;return g[0]=e,g[4]=t,g[8]=s,g[12]=o,g[1]=l,g[5]=c,g[9]=d,g[13]=p,g[2]=m,g[6]=v,g[10]=y,g[14]=_,g[3]=b,g[7]=x,g[11]=C,g[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wf().fromArray(this.elements)}copy(e){let t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){let t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,s=e.elements,o=1/sa.setFromMatrixColumn(e,0).length(),l=1/sa.setFromMatrixColumn(e,1).length(),c=1/sa.setFromMatrixColumn(e,2).length();return t[0]=s[0]*o,t[1]=s[1]*o,t[2]=s[2]*o,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*c,t[9]=s[9]*c,t[10]=s[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,s=e.x,o=e.y,l=e.z,c=Math.cos(s),d=Math.sin(s),p=Math.cos(o),m=Math.sin(o),v=Math.cos(l),y=Math.sin(l);if(e.order==="XYZ"){let _=c*v,b=c*y,x=d*v,C=d*y;t[0]=p*v,t[4]=-p*y,t[8]=m,t[1]=b+x*m,t[5]=_-C*m,t[9]=-d*p,t[2]=C-_*m,t[6]=x+b*m,t[10]=c*p}else if(e.order==="YXZ"){let _=p*v,b=p*y,x=m*v,C=m*y;t[0]=_+C*d,t[4]=x*d-b,t[8]=c*m,t[1]=c*y,t[5]=c*v,t[9]=-d,t[2]=b*d-x,t[6]=C+_*d,t[10]=c*p}else if(e.order==="ZXY"){let _=p*v,b=p*y,x=m*v,C=m*y;t[0]=_-C*d,t[4]=-c*y,t[8]=x+b*d,t[1]=b+x*d,t[5]=c*v,t[9]=C-_*d,t[2]=-c*m,t[6]=d,t[10]=c*p}else if(e.order==="ZYX"){let _=c*v,b=c*y,x=d*v,C=d*y;t[0]=p*v,t[4]=x*m-b,t[8]=_*m+C,t[1]=p*y,t[5]=C*m+_,t[9]=b*m-x,t[2]=-m,t[6]=d*p,t[10]=c*p}else if(e.order==="YZX"){let _=c*p,b=c*m,x=d*p,C=d*m;t[0]=p*v,t[4]=C-_*y,t[8]=x*y+b,t[1]=y,t[5]=c*v,t[9]=-d*v,t[2]=-m*v,t[6]=b*y+x,t[10]=_-C*y}else if(e.order==="XZY"){let _=c*p,b=c*m,x=d*p,C=d*m;t[0]=p*v,t[4]=-y,t[8]=m*v,t[1]=_*y+C,t[5]=c*v,t[9]=b*y-x,t[2]=x*y-b,t[6]=d*v,t[10]=C*y+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(HM,e,VM)}lookAt(e,t,s){let o=this.elements;return Ai.subVectors(e,t),Ai.lengthSq()===0&&(Ai.z=1),Ai.normalize(),Ts.crossVectors(s,Ai),Ts.lengthSq()===0&&(Math.abs(s.z)===1?Ai.x+=1e-4:Ai.z+=1e-4,Ai.normalize(),Ts.crossVectors(s,Ai)),Ts.normalize(),pc.crossVectors(Ai,Ts),o[0]=Ts.x,o[4]=pc.x,o[8]=Ai.x,o[1]=Ts.y,o[5]=pc.y,o[9]=Ai.y,o[2]=Ts.z,o[6]=pc.z,o[10]=Ai.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let s=e.elements,o=t.elements,l=this.elements,c=s[0],d=s[4],p=s[8],m=s[12],v=s[1],y=s[5],_=s[9],b=s[13],x=s[2],C=s[6],S=s[10],g=s[14],A=s[3],D=s[7],R=s[11],L=s[15],N=o[0],M=o[4],P=o[8],V=o[12],F=o[1],B=o[5],W=o[9],Z=o[13],O=o[2],Q=o[6],se=o[10],ee=o[14],me=o[3],ne=o[7],ce=o[11],he=o[15];return l[0]=c*N+d*F+p*O+m*me,l[4]=c*M+d*B+p*Q+m*ne,l[8]=c*P+d*W+p*se+m*ce,l[12]=c*V+d*Z+p*ee+m*he,l[1]=v*N+y*F+_*O+b*me,l[5]=v*M+y*B+_*Q+b*ne,l[9]=v*P+y*W+_*se+b*ce,l[13]=v*V+y*Z+_*ee+b*he,l[2]=x*N+C*F+S*O+g*me,l[6]=x*M+C*B+S*Q+g*ne,l[10]=x*P+C*W+S*se+g*ce,l[14]=x*V+C*Z+S*ee+g*he,l[3]=A*N+D*F+R*O+L*me,l[7]=A*M+D*B+R*Q+L*ne,l[11]=A*P+D*W+R*se+L*ce,l[15]=A*V+D*Z+R*ee+L*he,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],s=e[4],o=e[8],l=e[12],c=e[1],d=e[5],p=e[9],m=e[13],v=e[2],y=e[6],_=e[10],b=e[14],x=e[3],C=e[7],S=e[11],g=e[15],A=p*b-m*_,D=d*b-m*y,R=d*_-p*y,L=c*b-m*v,N=c*_-p*v,M=c*y-d*v;return t*(C*A-S*D+g*R)-s*(x*A-S*L+g*N)+o*(x*D-C*L+g*M)-l*(x*R-C*N+S*M)}determinantAffine(){let e=this.elements,t=e[0],s=e[4],o=e[8],l=e[1],c=e[5],d=e[9],p=e[2],m=e[6],v=e[10];return t*(c*v-d*m)-s*(l*v-d*p)+o*(l*m-c*p)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){let o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=s),this}invert(){let e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],c=e[4],d=e[5],p=e[6],m=e[7],v=e[8],y=e[9],_=e[10],b=e[11],x=e[12],C=e[13],S=e[14],g=e[15],A=t*d-s*c,D=t*p-o*c,R=t*m-l*c,L=s*p-o*d,N=s*m-l*d,M=o*m-l*p,P=v*C-y*x,V=v*S-_*x,F=v*g-b*x,B=y*S-_*C,W=y*g-b*C,Z=_*g-b*S,O=A*Z-D*W+R*B+L*F-N*V+M*P;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Q=1/O;return e[0]=(d*Z-p*W+m*B)*Q,e[1]=(o*W-s*Z-l*B)*Q,e[2]=(C*M-S*N+g*L)*Q,e[3]=(_*N-y*M-b*L)*Q,e[4]=(p*F-c*Z-m*V)*Q,e[5]=(t*Z-o*F+l*V)*Q,e[6]=(S*R-x*M-g*D)*Q,e[7]=(v*M-_*R+b*D)*Q,e[8]=(c*W-d*F+m*P)*Q,e[9]=(s*F-t*W-l*P)*Q,e[10]=(x*N-C*R+g*A)*Q,e[11]=(y*R-v*N-b*A)*Q,e[12]=(d*V-c*B-p*P)*Q,e[13]=(t*B-s*V+o*P)*Q,e[14]=(C*D-x*L-S*A)*Q,e[15]=(v*L-y*D+_*A)*Q,this}scale(e){let t=this.elements,s=e.x,o=e.y,l=e.z;return t[0]*=s,t[4]*=o,t[8]*=l,t[1]*=s,t[5]*=o,t[9]*=l,t[2]*=s,t[6]*=o,t[10]*=l,t[3]*=s,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,o))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let s=Math.cos(t),o=Math.sin(t),l=1-s,c=e.x,d=e.y,p=e.z,m=l*c,v=l*d;return this.set(m*c+s,m*d-o*p,m*p+o*d,0,m*d+o*p,v*d+s,v*p-o*c,0,m*p-o*d,v*p+o*c,l*p*p+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,o,l,c){return this.set(1,s,l,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,s){let o=this.elements,l=t._x,c=t._y,d=t._z,p=t._w,m=l+l,v=c+c,y=d+d,_=l*m,b=l*v,x=l*y,C=c*v,S=c*y,g=d*y,A=p*m,D=p*v,R=p*y,L=s.x,N=s.y,M=s.z;return o[0]=(1-(C+g))*L,o[1]=(b+R)*L,o[2]=(x-D)*L,o[3]=0,o[4]=(b-R)*N,o[5]=(1-(_+g))*N,o[6]=(S+A)*N,o[7]=0,o[8]=(x+D)*M,o[9]=(S-A)*M,o[10]=(1-(_+C))*M,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,s){let o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];let l=this.determinantAffine();if(l===0)return s.set(1,1,1),t.identity(),this;let c=sa.set(o[0],o[1],o[2]).length(),d=sa.set(o[4],o[5],o[6]).length(),p=sa.set(o[8],o[9],o[10]).length();l<0&&(c=-c),ir.copy(this);let m=1/c,v=1/d,y=1/p;return ir.elements[0]*=m,ir.elements[1]*=m,ir.elements[2]*=m,ir.elements[4]*=v,ir.elements[5]*=v,ir.elements[6]*=v,ir.elements[8]*=y,ir.elements[9]*=y,ir.elements[10]*=y,t.setFromRotationMatrix(ir),s.x=c,s.y=d,s.z=p,this}makePerspective(e,t,s,o,l,c,d=Wi,p=!1){let m=this.elements,v=2*l/(t-e),y=2*l/(s-o),_=(t+e)/(t-e),b=(s+o)/(s-o),x,C;if(p)x=l/(c-l),C=c*l/(c-l);else if(d===Wi)x=-(c+l)/(c-l),C=-2*c*l/(c-l);else if(d===Sa)x=-c/(c-l),C=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=v,m[4]=0,m[8]=_,m[12]=0,m[1]=0,m[5]=y,m[9]=b,m[13]=0,m[2]=0,m[6]=0,m[10]=x,m[14]=C,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,t,s,o,l,c,d=Wi,p=!1){let m=this.elements,v=2/(t-e),y=2/(s-o),_=-(t+e)/(t-e),b=-(s+o)/(s-o),x,C;if(p)x=1/(c-l),C=c/(c-l);else if(d===Wi)x=-2/(c-l),C=-(c+l)/(c-l);else if(d===Sa)x=-1/(c-l),C=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=v,m[4]=0,m[8]=0,m[12]=_,m[1]=0,m[5]=y,m[9]=0,m[13]=b,m[2]=0,m[6]=0,m[10]=x,m[14]=C,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){let t=this.elements,s=e.elements;for(let o=0;o<16;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){let s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}};wf.prototype.isMatrix4=!0;var Ut=wf,sa=new X,ir=new Ut,HM=new X(0,0,0),VM=new X(1,1,1),Ts=new X,pc=new X,Ai=new X,Ey=new Ut,Ay=new Tr,Zr=class r{constructor(e=0,t=0,s=0,o=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,o=this._order){return this._x=e,this._y=t,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){let o=e.elements,l=o[0],c=o[4],d=o[8],p=o[1],m=o[5],v=o[9],y=o[2],_=o[6],b=o[10];switch(t){case"XYZ":this._y=Math.asin(Mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,b),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(_,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,b),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-y,l),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-y,b),this._z=Math.atan2(-c,m)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-Mt(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(_,b),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-c,m));break;case"YZX":this._z=Math.asin(Mt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-y,l)):(this._x=0,this._y=Math.atan2(d,b));break;case"XZY":this._z=Math.asin(-Mt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(_,m),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-v,b),this._y=0);break;default:Ye("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return Ey.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ey,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ay.setFromEuler(this),this.setFromQuaternion(Ay,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Zr.DEFAULT_ORDER="XYZ";var Jr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},GM=0,Cy=new X,oa=new Tr,Hr=new Ut,mc=new X,ml=new X,WM=new X,XM=new Tr,Ry=new X(1,0,0),Py=new X(0,1,0),Iy=new X(0,0,1),Ny={type:"added"},qM={type:"removed"},aa={type:"childadded",child:null},Ep={type:"childremoved",child:null},kn=class r extends wr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:GM++}),this.uuid=eu(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new X,t=new Zr,s=new Tr,o=new X(1,1,1);function l(){s.setFromEuler(t,!1)}function c(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Ut},normalMatrix:{value:new tt}}),this.matrix=new Ut,this.matrixWorld=new Ut,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return oa.setFromAxisAngle(e,t),this.quaternion.multiply(oa),this}rotateOnWorldAxis(e,t){return oa.setFromAxisAngle(e,t),this.quaternion.premultiply(oa),this}rotateX(e){return this.rotateOnAxis(Ry,e)}rotateY(e){return this.rotateOnAxis(Py,e)}rotateZ(e){return this.rotateOnAxis(Iy,e)}translateOnAxis(e,t){return Cy.copy(e).applyQuaternion(this.quaternion),this.position.add(Cy.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ry,e)}translateY(e){return this.translateOnAxis(Py,e)}translateZ(e){return this.translateOnAxis(Iy,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hr.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?mc.copy(e):mc.set(e,t,s);let o=this.parent;this.updateWorldMatrix(!0,!1),ml.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hr.lookAt(ml,mc,this.up):Hr.lookAt(mc,ml,this.up),this.quaternion.setFromRotationMatrix(Hr),o&&(Hr.extractRotation(o.matrixWorld),oa.setFromRotationMatrix(Hr),this.quaternion.premultiply(oa.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ny),aa.child=e,this.dispatchEvent(aa),aa.child=null):et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qM),Ep.child=e,this.dispatchEvent(Ep),Ep.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ny),aa.child=e,this.dispatchEvent(aa),aa.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,o=this.children.length;s<o;s++){let c=this.children[s].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);let o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ml,e,WM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ml,XM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,s=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*s-l[8]*o,l[13]+=s-l[1]*t-l[5]*s-l[9]*o,l[14]+=o-l[2]*t-l[6]*s-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t,s=!1){let o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),t===!0){let l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0,s)}}toJSON(e){let t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);let d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){let p=d.shapes;if(Array.isArray(p))for(let m=0,v=p.length;m<v;m++){let y=p[m];l(e.shapes,y)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(l(e.materials,this.material[p]));o.material=d}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){let p=this.animations[d];o.animations.push(l(e.animations,p))}}if(t){let d=c(e.geometries),p=c(e.materials),m=c(e.textures),v=c(e.images),y=c(e.shapes),_=c(e.skeletons),b=c(e.animations),x=c(e.nodes);d.length>0&&(s.geometries=d),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),v.length>0&&(s.images=v),y.length>0&&(s.shapes=y),_.length>0&&(s.skeletons=_),b.length>0&&(s.animations=b),x.length>0&&(s.nodes=x)}return s.object=o,s;function c(d){let p=[];for(let m in d){let v=d[m];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){let o=e.children[s];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};kn.DEFAULT_UP=new X(0,1,0);kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var $r=class extends kn{constructor(){super(),this.isGroup=!0,this.type="Group"}},$M={type:"move"},Ta=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $r,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $r,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $r,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let o=null,l=null,c=null,d=this._targetRay,p=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){c=!0;for(let C of e.hand.values()){let S=t.getJointPose(C,s),g=this._getHandJoint(m,C);S!==null&&(g.matrix.fromArray(S.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=S.radius),g.visible=S!==null}let v=m.joints["index-finger-tip"],y=m.joints["thumb-tip"],_=v.position.distanceTo(y.position),b=.02,x=.005;m.inputState.pinching&&_>b+x?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&_<=b-x&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(o=t.getPose(e.targetRaySpace,s),o===null&&l!==null&&(o=l),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent($M)))}return d!==null&&(d.visible=o!==null),p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let s=new $r;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}},U_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Es={h:0,s:0,l:0},gc={h:0,s:0,l:0};function Ap(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}var rt=class{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){let o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.colorSpaceToWorking(this,t),this}setRGB(e,t,s,o=vt.workingColorSpace){return this.r=e,this.g=t,this.b=s,vt.colorSpaceToWorking(this,o),this}setHSL(e,t,s,o=vt.workingColorSpace){if(e=kM(e,1),t=Mt(t,0,1),s=Mt(s,0,1),t===0)this.r=this.g=this.b=s;else{let l=s<=.5?s*(1+t):s+t-s*t,c=2*s-l;this.r=Ap(c,l,e+1/3),this.g=Ap(c,l,e),this.b=Ap(c,l,e-1/3)}return vt.colorSpaceToWorking(this,o),this}setStyle(e,t=Mn){function s(l){l!==void 0&&parseFloat(l)<1&&Ye("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l,c=o[1],d=o[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(d))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(d))return s(l[4]),this.setRGB(Math.min(100,parseFloat(l[1]))/100,Math.min(100,parseFloat(l[2]))/100,Math.min(100,parseFloat(l[3]))/100,t);break;case"hsl":case"hsla":if(l=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(d))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:Ye("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){let l=o[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);Ye("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mn){let s=U_[e.toLowerCase()];return s!==void 0?this.setHex(s,t):Ye("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yr(e.r),this.g=Yr(e.g),this.b=Yr(e.b),this}copyLinearToSRGB(e){return this.r=_a(e.r),this.g=_a(e.g),this.b=_a(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mn){return vt.workingToColorSpace(Kn.copy(this),e),Math.round(Mt(Kn.r*255,0,255))*65536+Math.round(Mt(Kn.g*255,0,255))*256+Math.round(Mt(Kn.b*255,0,255))}getHexString(e=Mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.workingToColorSpace(Kn.copy(this),t);let s=Kn.r,o=Kn.g,l=Kn.b,c=Math.max(s,o,l),d=Math.min(s,o,l),p,m,v=(d+c)/2;if(d===c)p=0,m=0;else{let y=c-d;switch(m=v<=.5?y/(c+d):y/(2-c-d),c){case s:p=(o-l)/y+(o<l?6:0);break;case o:p=(l-s)/y+2;break;case l:p=(s-o)/y+4;break}p/=6}return e.h=p,e.s=m,e.l=v,e}getRGB(e,t=vt.workingColorSpace){return vt.workingToColorSpace(Kn.copy(this),t),e.r=Kn.r,e.g=Kn.g,e.b=Kn.b,e}getStyle(e=Mn){vt.workingToColorSpace(Kn.copy(this),e);let t=Kn.r,s=Kn.g,o=Kn.b;return e!==Mn?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(o*255)})`}offsetHSL(e,t,s){return this.getHSL(Es),this.setHSL(Es.h+e,Es.s+t,Es.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(Es),e.getHSL(gc);let s=Sp(Es.h,gc.h,t),o=Sp(Es.s,gc.s,t),l=Sp(Es.l,gc.l,t);return this.setHSL(s,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,s=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*o,this.g=l[1]*t+l[4]*s+l[7]*o,this.b=l[2]*t+l[5]*s+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Kn=new rt;rt.NAMES=U_;var El=class extends kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zr,this.environmentIntensity=1,this.environmentRotation=new Zr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},rr=new X,Vr=new X,Cp=new X,Gr=new X,la=new X,ua=new X,Ly=new X,Rp=new X,Pp=new X,Ip=new X,Np=new Zt,Lp=new Zt,Dp=new Zt,qr=class r{constructor(e=new X,t=new X,s=new X){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,o){o.subVectors(s,t),rr.subVectors(e,t),o.cross(rr);let l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,s,o,l){rr.subVectors(o,t),Vr.subVectors(s,t),Cp.subVectors(e,t);let c=rr.dot(rr),d=rr.dot(Vr),p=rr.dot(Cp),m=Vr.dot(Vr),v=Vr.dot(Cp),y=c*m-d*d;if(y===0)return l.set(0,0,0),null;let _=1/y,b=(m*p-d*v)*_,x=(c*v-d*p)*_;return l.set(1-b-x,x,b)}static containsPoint(e,t,s,o){return this.getBarycoord(e,t,s,o,Gr)===null?!1:Gr.x>=0&&Gr.y>=0&&Gr.x+Gr.y<=1}static getInterpolation(e,t,s,o,l,c,d,p){return this.getBarycoord(e,t,s,o,Gr)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,Gr.x),p.addScaledVector(c,Gr.y),p.addScaledVector(d,Gr.z),p)}static getInterpolatedAttribute(e,t,s,o,l,c){return Np.setScalar(0),Lp.setScalar(0),Dp.setScalar(0),Np.fromBufferAttribute(e,t),Lp.fromBufferAttribute(e,s),Dp.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(Np,l.x),c.addScaledVector(Lp,l.y),c.addScaledVector(Dp,l.z),c}static isFrontFacing(e,t,s,o){return rr.subVectors(s,t),Vr.subVectors(e,t),rr.cross(Vr).dot(o)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,o){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,s,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rr.subVectors(this.c,this.b),Vr.subVectors(this.a,this.b),rr.cross(Vr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,o,l){return r.getInterpolation(e,this.a,this.b,this.c,t,s,o,l)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let s=this.a,o=this.b,l=this.c,c,d;la.subVectors(o,s),ua.subVectors(l,s),Rp.subVectors(e,s);let p=la.dot(Rp),m=ua.dot(Rp);if(p<=0&&m<=0)return t.copy(s);Pp.subVectors(e,o);let v=la.dot(Pp),y=ua.dot(Pp);if(v>=0&&y<=v)return t.copy(o);let _=p*y-v*m;if(_<=0&&p>=0&&v<=0&&p-v>0)return c=p/(p-v),t.copy(s).addScaledVector(la,c);Ip.subVectors(e,l);let b=la.dot(Ip),x=ua.dot(Ip);if(x>=0&&b<=x)return t.copy(l);let C=b*m-p*x;if(C<=0&&m>=0&&x<=0)return d=m/(m-x),t.copy(s).addScaledVector(ua,d);let S=v*x-b*y;if(S<=0&&y-v>=0&&b-x>=0)return Ly.subVectors(l,o),d=(y-v)/(y-v+(b-x)),t.copy(o).addScaledVector(Ly,d);let g=1/(S+C+_);return c=C*g,d=_*g,t.copy(s).addScaledVector(la,c).addScaledVector(ua,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Er=class{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(sr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(sr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let s=sr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let s=e.geometry;if(s!==void 0){let l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let c=0,d=l.count;c<d;c++)e.isMesh===!0?e.getVertexPosition(c,sr):sr.fromBufferAttribute(l,c),sr.applyMatrix4(e.matrixWorld),this.expandByPoint(sr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),vc.copy(s.boundingBox)),vc.applyMatrix4(e.matrixWorld),this.union(vc)}let o=e.children;for(let l=0,c=o.length;l<c;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,sr),sr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gl),yc.subVectors(this.max,gl),ca.subVectors(e.a,gl),fa.subVectors(e.b,gl),da.subVectors(e.c,gl),As.subVectors(fa,ca),Cs.subVectors(da,fa),so.subVectors(ca,da);let t=[0,-As.z,As.y,0,-Cs.z,Cs.y,0,-so.z,so.y,As.z,0,-As.x,Cs.z,0,-Cs.x,so.z,0,-so.x,-As.y,As.x,0,-Cs.y,Cs.x,0,-so.y,so.x,0];return!kp(t,ca,fa,da,yc)||(t=[1,0,0,0,1,0,0,0,1],!kp(t,ca,fa,da,yc))?!1:(_c.crossVectors(As,Cs),t=[_c.x,_c.y,_c.z],kp(t,ca,fa,da,yc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(sr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Wr=[new X,new X,new X,new X,new X,new X,new X,new X],sr=new X,vc=new Er,ca=new X,fa=new X,da=new X,As=new X,Cs=new X,so=new X,gl=new X,yc=new X,_c=new X,oo=new X;function kp(r,e,t,s,o){for(let l=0,c=r.length-3;l<=c;l+=3){oo.fromArray(r,l);let d=o.x*Math.abs(oo.x)+o.y*Math.abs(oo.y)+o.z*Math.abs(oo.z),p=e.dot(oo),m=t.dot(oo),v=s.dot(oo);if(Math.max(-Math.max(p,m,v),Math.min(p,m,v))>d)return!1}return!0}var xn=new X,bc=new ct,YM=0,or=class extends wr{constructor(e,t,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:YM++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=I_,this.updateRanges=[],this.gpuType=$i,this.version=0,this._normalizationScale=e!==void 0?wm(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[s+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)bc.fromBufferAttribute(this,t),bc.applyMatrix3(e),this.setXY(t,bc.x,bc.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix3(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix4(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)xn.fromBufferAttribute(this,t),xn.applyNormalMatrix(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)xn.fromBufferAttribute(this,t),xn.transformDirection(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=this._denormalize(s)),s}setComponent(e,t,s){return this.normalized&&(s=this._normalize(s)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,o){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),s=this._normalize(s),o=this._normalize(o)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this}setXYZW(e,t,s,o,l){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),s=this._normalize(s),o=this._normalize(o),l=this._normalize(l)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):FM(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):UM(e,this.array)}};var Al=class extends or{constructor(e,t,s){super(new Uint16Array(e),t,s)}};var Cl=class extends or{constructor(e,t,s){super(new Uint32Array(e),t,s)}};var mn=class extends or{constructor(e,t,s){super(new Float32Array(e),t,s)}},jM=new Er,vl=new X,Fp=new X,Kr=class{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let s=this.center;t!==void 0?s.copy(t):jM.setFromPoints(e).getCenter(s);let o=0;for(let l=0,c=e.length;l<c;l++)o=Math.max(o,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vl.subVectors(e,this.center);let t=vl.lengthSq();if(t>this.radius*this.radius){let s=Math.sqrt(t),o=(s-this.radius)*.5;this.center.addScaledVector(vl,o/s),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fp.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vl.copy(e.center).add(Fp)),this.expandByPoint(vl.copy(e.center).sub(Fp))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ZM=0,Gi=new Ut,Up=new kn,ha=new X,Ci=new Er,yl=new Er,Ln=new X,Xi=class r extends wr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ZM++}),this.uuid=eu(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(LM(e)?Cl:Al)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let s=this.attributes.normal;if(s!==void 0){let l=new tt().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}let o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Gi.makeRotationFromQuaternion(e),this.applyMatrix4(Gi),this}rotateX(e){return Gi.makeRotationX(e),this.applyMatrix4(Gi),this}rotateY(e){return Gi.makeRotationY(e),this.applyMatrix4(Gi),this}rotateZ(e){return Gi.makeRotationZ(e),this.applyMatrix4(Gi),this}translate(e,t,s){return Gi.makeTranslation(e,t,s),this.applyMatrix4(Gi),this}scale(e,t,s){return Gi.makeScale(e,t,s),this.applyMatrix4(Gi),this}lookAt(e){return Up.lookAt(e),Up.updateMatrix(),this.applyMatrix4(Up.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ha).negate(),this.translate(ha.x,ha.y,ha.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let s=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];s.push(c.x,c.y,c.z||0)}this.setAttribute("position",new mn(s,3))}else{let s=Math.min(e.length,t.count);for(let o=0;o<s;o++){let l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&Ye("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Er);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let l=t[s];Ci.setFromBufferAttribute(l),this.morphTargetsRelative?(Ln.addVectors(this.boundingBox.min,Ci.min),this.boundingBox.expandByPoint(Ln),Ln.addVectors(this.boundingBox.max,Ci.max),this.boundingBox.expandByPoint(Ln)):(this.boundingBox.expandByPoint(Ci.min),this.boundingBox.expandByPoint(Ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){let s=this.boundingSphere.center;if(Ci.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){let d=t[l];yl.setFromBufferAttribute(d),this.morphTargetsRelative?(Ln.addVectors(Ci.min,yl.min),Ci.expandByPoint(Ln),Ln.addVectors(Ci.max,yl.max),Ci.expandByPoint(Ln)):(Ci.expandByPoint(yl.min),Ci.expandByPoint(yl.max))}Ci.getCenter(s);let o=0;for(let l=0,c=e.count;l<c;l++)Ln.fromBufferAttribute(e,l),o=Math.max(o,s.distanceToSquared(Ln));if(t)for(let l=0,c=t.length;l<c;l++){let d=t[l],p=this.morphTargetsRelative;for(let m=0,v=d.count;m<v;m++)Ln.fromBufferAttribute(d,m),p&&(ha.fromBufferAttribute(e,m),Ln.add(ha)),o=Math.max(o,s.distanceToSquared(Ln))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let s=t.position,o=t.normal,l=t.uv,c=this.getAttribute("tangent");(c===void 0||c.count!==s.count)&&(c=new or(new Float32Array(4*s.count),4),this.setAttribute("tangent",c));let d=[],p=[],m=new Uint8Array(s.count);for(let V=0;V<s.count;V++)d[V]=new X,p[V]=new X;let v=new X,y=new X,_=new X,b=new ct,x=new ct,C=new ct,S=new X,g=new X;function A(V,F,B){m[V]=m[F]=m[B]=1,v.fromBufferAttribute(s,V),y.fromBufferAttribute(s,F),_.fromBufferAttribute(s,B),b.fromBufferAttribute(l,V),x.fromBufferAttribute(l,F),C.fromBufferAttribute(l,B),y.sub(v),_.sub(v),x.sub(b),C.sub(b);let W=1/(x.x*C.y-C.x*x.y);isFinite(W)&&(S.copy(y).multiplyScalar(C.y).addScaledVector(_,-x.y).multiplyScalar(W),g.copy(_).multiplyScalar(x.x).addScaledVector(y,-C.x).multiplyScalar(W),d[V].add(S),d[F].add(S),d[B].add(S),p[V].add(g),p[F].add(g),p[B].add(g))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let V=0,F=D.length;V<F;++V){let B=D[V],W=B.start,Z=B.count;for(let O=W,Q=W+Z;O<Q;O+=3)A(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let R=new X,L=new X,N=new X,M=new X;function P(V){N.fromBufferAttribute(o,V),M.copy(N);let F=d[V];R.copy(F),R.sub(N.multiplyScalar(N.dot(F))).normalize(),L.crossVectors(M,F);let W=L.dot(p[V])<0?-1:1;c.setXYZW(V,R.x,R.y,R.z,W)}for(let V=0,F=s.count;V<F;++V)m[V]&&P(V);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==t.count)s=new or(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let _=0,b=s.count;_<b;_++)s.setXYZ(_,0,0,0);let o=new X,l=new X,c=new X,d=new X,p=new X,m=new X,v=new X,y=new X;if(e)for(let _=0,b=e.count;_<b;_+=3){let x=e.getX(_+0),C=e.getX(_+1),S=e.getX(_+2);o.fromBufferAttribute(t,x),l.fromBufferAttribute(t,C),c.fromBufferAttribute(t,S),v.subVectors(c,l),y.subVectors(o,l),v.cross(y),d.fromBufferAttribute(s,x),p.fromBufferAttribute(s,C),m.fromBufferAttribute(s,S),d.add(v),p.add(v),m.add(v),s.setXYZ(x,d.x,d.y,d.z),s.setXYZ(C,p.x,p.y,p.z),s.setXYZ(S,m.x,m.y,m.z)}else for(let _=0,b=t.count;_<b;_+=3)o.fromBufferAttribute(t,_+0),l.fromBufferAttribute(t,_+1),c.fromBufferAttribute(t,_+2),v.subVectors(c,l),y.subVectors(o,l),v.cross(y),s.setXYZ(_+0,v.x,v.y,v.z),s.setXYZ(_+1,v.x,v.y,v.z),s.setXYZ(_+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)Ln.fromBufferAttribute(e,t),Ln.normalize(),e.setXYZ(t,Ln.x,Ln.y,Ln.z)}toNonIndexed(){function e(d,p){let m=d.array,v=d.itemSize,y=d.normalized,_=new m.constructor(p.length*v),b=0,x=0;for(let C=0,S=p.length;C<S;C++){d.isInterleavedBufferAttribute?b=p[C]*d.data.stride+d.offset:b=p[C]*v;for(let g=0;g<v;g++)_[x++]=m[b++]}return new or(_,v,y)}if(this.index===null)return Ye("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,s=this.index.array,o=this.attributes;for(let d in o){let p=o[d],m=e(p,s);t.setAttribute(d,m)}let l=this.morphAttributes;for(let d in l){let p=[],m=l[d];for(let v=0,y=m.length;v<y;v++){let _=m[v],b=e(_,s);p.push(b)}t.morphAttributes[d]=p}t.morphTargetsRelative=this.morphTargetsRelative;let c=this.groups;for(let d=0,p=c.length;d<p;d++){let m=c[d];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let p=this.parameters;for(let m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let s=this.attributes;for(let p in s){let m=s[p];e.data.attributes[p]=m.toJSON(e.data)}let o={},l=!1;for(let p in this.morphAttributes){let m=this.morphAttributes[p],v=[];for(let y=0,_=m.length;y<_;y++){let b=m[y];v.push(b.toJSON(e.data))}v.length>0&&(o[p]=v,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);let c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));let d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let s=e.index;s!==null&&this.setIndex(s.clone());let o=e.attributes;for(let m in o){let v=o[m];this.setAttribute(m,v.clone(t))}let l=e.morphAttributes;for(let m in l){let v=[],y=l[m];for(let _=0,b=y.length;_<b;_++)v.push(y[_].clone(t));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;let c=e.groups;for(let m=0,v=c.length;m<v;m++){let y=c[m];this.addGroup(y.start,y.count,y.materialIndex)}let d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());let p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Op=new X,JM=new X,KM=new tt,Ri=class{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,o){return this.normal.set(e,t,s),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){let o=Op.subVectors(s,t).cross(JM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,s=!0){let o=e.delta(Op),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let c=-(e.start.dot(this.normal)+this.constant)/l;return s===!0&&(c<0||c>1)?null:t.copy(e.start).addScaledVector(o,c)}intersectsLine(e){let t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let s=t||KM.getNormalMatrix(e),o=this.coplanarPoint(Op).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},QM=0,Qr=class extends wr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:QM++}),this.uuid=eu(),this.name="",this.type="Material",this.blending=Ia,this.side=ks,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=im,this.blendDst=rm,this.blendEquation=yo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=ba,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=T_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hc,this.stencilZFail=Hc,this.stencilZPass=Hc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let s=e[t];if(s===void 0){Ye(`Material: parameter '${t}' has value of undefined.`);continue}let o=this[t];if(o===void 0){Ye(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(s):o&&o.isVector2&&s&&s.isVector2||o&&o.isEuler&&s&&s.isEuler||o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[t]=s}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,s.blending=this.blending,s.side=this.side,s.shadowSide=this.shadowSide,s.vertexColors=this.vertexColors,s.opacity=this.opacity,s.transparent=this.transparent,s.blendSrc=this.blendSrc,s.blendDst=this.blendDst,s.blendEquation=this.blendEquation,s.blendSrcAlpha=this.blendSrcAlpha,s.blendDstAlpha=this.blendDstAlpha,s.blendEquationAlpha=this.blendEquationAlpha,s.blendColor=this.blendColor.getHex(),s.blendAlpha=this.blendAlpha,s.depthFunc=this.depthFunc,s.depthTest=this.depthTest,s.depthWrite=this.depthWrite,s.colorWrite=this.colorWrite,s.clipIntersection=this.clipIntersection,s.clipShadows=this.clipShadows,s.stencilWriteMask=this.stencilWriteMask,s.stencilFunc=this.stencilFunc,s.stencilRef=this.stencilRef,s.stencilFuncMask=this.stencilFuncMask,s.stencilFail=this.stencilFail,s.stencilZFail=this.stencilZFail,s.stencilZPass=this.stencilZPass,s.stencilWrite=this.stencilWrite,s.polygonOffset=this.polygonOffset,s.polygonOffsetFactor=this.polygonOffsetFactor,s.polygonOffsetUnits=this.polygonOffsetUnits,s.dithering=this.dithering,s.alphaTest=this.alphaTest,s.alphaHash=this.alphaHash,s.alphaToCoverage=this.alphaToCoverage,s.premultipliedAlpha=this.premultipliedAlpha,s.forceSinglePass=this.forceSinglePass,s.allowOverride=this.allowOverride,s.visible=this.visible,s.toneMapped=this.toneMapped,s.name=this.name,this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(s.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(s.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(s.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(s.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(s.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(s.clippingPlanes=this.clippingPlanes.map(l=>l.toJSON())),this.rotation!==void 0&&(s.rotation=this.rotation),this.depthPacking!==void 0&&(s.depthPacking=this.depthPacking),this.linewidth!==void 0&&(s.linewidth=this.linewidth),this.linecap!==void 0&&(s.linecap=this.linecap),this.linejoin!==void 0&&(s.linejoin=this.linejoin),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.wireframe!==void 0&&(s.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(s.flatShading=this.flatShading),this.fog!==void 0&&(s.fog=this.fog),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(l){let c=[];for(let d in l){let p=l[d];delete p.metadata,c.push(p)}return c}if(t){let l=o(e.textures),c=o(e.images);l.length>0&&(s.textures=l),c.length>0&&(s.images=c)}return s}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new rt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(s=>new Ri().fromJSON(s))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new ct().fromArray(s)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ct().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,s=null;if(t!==null){let o=t.length;s=new Array(o);for(let l=0;l!==o;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Xr=new X,zp=new X,Sc=new X,xc=new X,Ea=class{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Xr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xr.copy(this.origin).addScaledVector(this.direction,t),Xr.distanceToSquared(e))}distanceSqToSegment(e,t,s,o){zp.copy(e).add(t).multiplyScalar(.5),Sc.copy(t).sub(e).normalize(),xc.copy(this.origin).sub(zp);let l=e.distanceTo(t)*.5,c=-this.direction.dot(Sc),d=xc.dot(this.direction),p=-xc.dot(Sc),m=xc.lengthSq(),v=Math.abs(1-c*c),y,_,b,x;if(v>0)if(y=c*p-d,_=c*d-p,x=l*v,y>=0)if(_>=-x)if(_<=x){let C=1/v;y*=C,_*=C,b=y*(y+c*_+2*d)+_*(c*y+_+2*p)+m}else _=l,y=Math.max(0,-(c*_+d)),b=-y*y+_*(_+2*p)+m;else _=-l,y=Math.max(0,-(c*_+d)),b=-y*y+_*(_+2*p)+m;else _<=-x?(y=Math.max(0,-(-c*l+d)),_=y>0?-l:Math.min(Math.max(-l,-p),l),b=-y*y+_*(_+2*p)+m):_<=x?(y=0,_=Math.min(Math.max(-l,-p),l),b=_*(_+2*p)+m):(y=Math.max(0,-(c*l+d)),_=y>0?l:Math.min(Math.max(-l,-p),l),b=-y*y+_*(_+2*p)+m);else _=c>0?-l:l,y=Math.max(0,-(c*_+d)),b=-y*y+_*(_+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,y),o&&o.copy(zp).addScaledVector(Sc,_),b}intersectSphere(e,t){if(e.radius<0)return null;Xr.subVectors(e.center,this.origin);let s=Xr.dot(this.direction),o=Xr.dot(Xr)-s*s,l=e.radius*e.radius;if(o>l)return null;let c=Math.sqrt(l-o),d=s-c,p=s+c;return p<0?null:d<0?this.at(p,t):this.at(d,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){let s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,o,l,c,d,p,m=1/this.direction.x,v=1/this.direction.y,y=1/this.direction.z,_=this.origin;return m>=0?(s=(e.min.x-_.x)*m,o=(e.max.x-_.x)*m):(s=(e.max.x-_.x)*m,o=(e.min.x-_.x)*m),v>=0?(l=(e.min.y-_.y)*v,c=(e.max.y-_.y)*v):(l=(e.max.y-_.y)*v,c=(e.min.y-_.y)*v),s>c||l>o||((l>s||isNaN(s))&&(s=l),(c<o||isNaN(o))&&(o=c),y>=0?(d=(e.min.z-_.z)*y,p=(e.max.z-_.z)*y):(d=(e.max.z-_.z)*y,p=(e.min.z-_.z)*y),s>p||d>o)||((d>s||s!==s)&&(s=d),(p<o||o!==o)&&(o=p),o<0)?null:this.at(s>=0?s:o,t)}intersectsBox(e){return this.intersectBox(e,Xr)!==null}intersectTriangle(e,t,s,o,l){let c=this.origin,d=this.direction,p=d.x,m=d.y,v=d.z,y=e.x-c.x,_=e.y-c.y,b=e.z-c.z,x=t.x-c.x,C=t.y-c.y,S=t.z-c.z,g=s.x-c.x,A=s.y-c.y,D=s.z-c.z,R=Math.abs(p),L=Math.abs(m),N=Math.abs(v),M,P,V,F,B,W,Z,O,Q,se,ee,me;if(R>=L&&R>=N?(V=p,W=y,Q=x,me=g,p>=0?(M=m,P=v,F=_,B=b,Z=C,O=S,se=A,ee=D):(M=v,P=m,F=b,B=_,Z=S,O=C,se=D,ee=A)):L>=N?(V=m,W=_,Q=C,me=A,m>=0?(M=v,P=p,F=b,B=y,Z=S,O=x,se=D,ee=g):(M=p,P=v,F=y,B=b,Z=x,O=S,se=g,ee=D)):(V=v,W=b,Q=S,me=D,v>=0?(M=p,P=m,F=y,B=_,Z=x,O=C,se=g,ee=A):(M=m,P=p,F=_,B=y,Z=C,O=x,se=A,ee=g)),V===0)return null;let ne=M/V,ce=P/V,he=1/V,Be=F-ne*W,Ve=B-ce*W,re=Z-ne*Q,Pe=O-ce*Q,ke=se-ne*me,We=ee-ce*me,Ne=ke*Pe-We*re,Ke=Be*We-Ve*ke,Bt=re*Ve-Pe*Be;if(o){if(Ne<0||Ke<0||Bt<0)return null}else if((Ne<0||Ke<0||Bt<0)&&(Ne>0||Ke>0||Bt>0))return null;let qe=Ne+Ke+Bt;if(qe===0)return null;let Tt=he*(Ne*W+Ke*Q+Bt*me);return(qe>0?Tt<0:Tt>0)?null:this.at(Tt/qe,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Aa=class extends Qr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zr,this.combine=sm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Dy=new Ut,ao=new Ea,Mc=new Kr,ky=new X,wc=new X,Tc=new X,Ec=new X,Bp=new X,Ac=new X,Fy=new X,Cc=new X,mi=class extends kn{constructor(e=new Xi,t=new Aa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){let o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){let d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){let s=this.geometry,o=s.attributes.position,l=s.morphAttributes.position,c=s.morphTargetsRelative;t.fromBufferAttribute(o,e);let d=this.morphTargetInfluences;if(l&&d){Ac.set(0,0,0);for(let p=0,m=l.length;p<m;p++){let v=d[p],y=l[p];v!==0&&(Bp.fromBufferAttribute(y,e),c?Ac.addScaledVector(Bp,v):Ac.addScaledVector(Bp.sub(t),v))}t.add(Ac)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let s=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Mc.copy(s.boundingSphere),Mc.applyMatrix4(l),ao.copy(e.ray).recast(e.near),!(Mc.containsPoint(ao.origin)===!1&&(ao.intersectSphere(Mc,ky)===null||ao.origin.distanceToSquared(ky)>(e.far-e.near)**2))&&(Dy.copy(l).invert(),ao.copy(e.ray).applyMatrix4(Dy),!(s.boundingBox!==null&&ao.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,ao)))}_computeIntersections(e,t,s){let o,l=this.geometry,c=this.material,d=l.index,p=l.attributes.position,m=l.attributes.uv,v=l.attributes.uv1,y=l.attributes.normal,_=l.groups,b=l.drawRange;if(d!==null)if(Array.isArray(c))for(let x=0,C=_.length;x<C;x++){let S=_[x],g=c[S.materialIndex],A=Math.max(S.start,b.start),D=Math.min(d.count,Math.min(S.start+S.count,b.start+b.count));for(let R=A,L=D;R<L;R+=3){let N=d.getX(R),M=d.getX(R+1),P=d.getX(R+2);o=Rc(this,g,e,s,m,v,y,N,M,P),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{let x=Math.max(0,b.start),C=Math.min(d.count,b.start+b.count);for(let S=x,g=C;S<g;S+=3){let A=d.getX(S),D=d.getX(S+1),R=d.getX(S+2);o=Rc(this,c,e,s,m,v,y,A,D,R),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(p!==void 0)if(Array.isArray(c))for(let x=0,C=_.length;x<C;x++){let S=_[x],g=c[S.materialIndex],A=Math.max(S.start,b.start),D=Math.min(p.count,Math.min(S.start+S.count,b.start+b.count));for(let R=A,L=D;R<L;R+=3){let N=R,M=R+1,P=R+2;o=Rc(this,g,e,s,m,v,y,N,M,P),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{let x=Math.max(0,b.start),C=Math.min(p.count,b.start+b.count);for(let S=x,g=C;S<g;S+=3){let A=S,D=S+1,R=S+2;o=Rc(this,c,e,s,m,v,y,A,D,R),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}};function ew(r,e,t,s,o,l,c,d){let p;if(e.side===ai?p=s.intersectTriangle(c,l,o,!0,d):p=s.intersectTriangle(o,l,c,e.side===ks,d),p===null)return null;Cc.copy(d),Cc.applyMatrix4(r.matrixWorld);let m=t.ray.origin.distanceTo(Cc);return m<t.near||m>t.far?null:{distance:m,point:Cc.clone(),object:r}}function Rc(r,e,t,s,o,l,c,d,p,m){r.getVertexPosition(d,wc),r.getVertexPosition(p,Tc),r.getVertexPosition(m,Ec);let v=ew(r,e,t,s,wc,Tc,Ec,Fy);if(v){let y=new X;qr.getBarycoord(Fy,wc,Tc,Ec,y),o&&(v.uv=qr.getInterpolatedAttribute(o,d,p,m,y,new ct)),l&&(v.uv1=qr.getInterpolatedAttribute(l,d,p,m,y,new ct)),c&&(v.normal=qr.getInterpolatedAttribute(c,d,p,m,y,new X),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));let _={a:d,b:p,c:m,normal:new X,materialIndex:0};qr.getNormal(wc,Tc,Ec,_.normal),v.face=_,v.barycoord=y}return v}var Rl=class extends Qn{constructor(e=null,t=1,s=1,o,l,c,d,p,m=Dn,v=Dn,y,_){super(null,c,d,p,m,v,o,l,y,_),this.isDataTexture=!0,this.image={data:e,width:t,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Pl=class extends or{constructor(e,t,s,o=1){super(e,t,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},pa=new Ut,Uy=new Ut,Pc=[],Oy=new Er,tw=new Ut,_l=new mi,bl=new Kr,Il=class extends mi{constructor(e,t,s){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Pl(new Float32Array(s*16),16),this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let o=0;o<s;o++)this.setMatrixAt(o,tw)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Er),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<t;s++)this.getMatrixAt(s,pa),Oy.copy(e.boundingBox).applyMatrix4(pa),this.boundingBox.union(Oy)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Kr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<t;s++)this.getMatrixAt(s,pa),bl.copy(e.boundingSphere).applyMatrix4(pa),this.boundingSphere.union(bl)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let s=t.morphTargetInfluences,o=this.morphTexture.source.data.data,l=s.length+1,c=e*l+1;for(let d=0;d<s.length;d++)s[d]=o[c+d]}raycast(e,t){let s=this.matrixWorld,o=this.count;if(_l.geometry=this.geometry,_l.material=this.material,_l.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bl.copy(this.boundingSphere),bl.applyMatrix4(s),e.ray.intersectsSphere(bl)!==!1))for(let l=0;l<o;l++){this.getMatrixAt(l,pa),Uy.multiplyMatrices(s,pa),_l.matrixWorld=Uy,_l.raycast(e,Pc);for(let c=0,d=Pc.length;c<d;c++){let p=Pc[c];p.instanceId=l,p.object=this,t.push(p)}Pc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Pl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let s=t.morphTargetInfluences,o=s.length+1;this.morphTexture===null&&(this.morphTexture=new Rl(new Float32Array(o*this.count),o,this.count,If,$i));let l=this.morphTexture.source.data.data,c=0;for(let m=0;m<s.length;m++)c+=s[m];let d=this.geometry.morphTargetsRelative?1:1-c,p=o*e;return l[p]=d,l.set(s,p+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},lo=new Kr,nw=new ct(.5,.5),Ic=new X,Ps=class{constructor(e=new Ri,t=new Ri,s=new Ri,o=new Ri,l=new Ri,c=new Ri){this.planes=[e,t,s,o,l,c]}set(e,t,s,o,l,c){let d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(s),d[3].copy(o),d[4].copy(l),d[5].copy(c),this}copy(e){let t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=Wi,s=!1){let o=this.planes,l=e.elements,c=l[0],d=l[1],p=l[2],m=l[3],v=l[4],y=l[5],_=l[6],b=l[7],x=l[8],C=l[9],S=l[10],g=l[11],A=l[12],D=l[13],R=l[14],L=l[15];if(o[0].setComponents(m-c,b-v,g-x,L-A).normalize(),o[1].setComponents(m+c,b+v,g+x,L+A).normalize(),o[2].setComponents(m+d,b+y,g+C,L+D).normalize(),o[3].setComponents(m-d,b-y,g-C,L-D).normalize(),s)o[4].setComponents(p,_,S,R).normalize(),o[5].setComponents(m-p,b-_,g-S,L-R).normalize();else if(o[4].setComponents(m-p,b-_,g-S,L-R).normalize(),t===Wi)o[5].setComponents(m+p,b+_,g+S,L+R).normalize();else if(t===Sa)o[5].setComponents(p,_,S,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),lo.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),lo.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(lo)}intersectsSprite(e){lo.center.set(0,0,0);let t=nw.distanceTo(e.center);return lo.radius=.7071067811865476+t,lo.applyMatrix4(e.matrixWorld),this.intersectsSphere(lo)}intersectsSphere(e){let t=this.planes,s=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<o)return!1;return!0}intersectsBox(e){let t=this.planes;for(let s=0;s<6;s++){let o=t[s];if(Ic.x=o.normal.x>0?e.max.x:e.min.x,Ic.y=o.normal.y>0?e.max.y:e.min.y,Ic.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Ic)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},zy=new Ut,sf=class r{constructor(){this.coordinateSystem=Wi,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,s=this._frustums;for(let o=0;o<t.length;o++){let l=t[o];zy.multiplyMatrices(l.projectionMatrix,l.matrixWorldInverse),s[o]===void 0&&(s[o]=new Ps),s[o].setFromProjectionMatrix(zy,l.coordinateSystem,l.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let s=0;s<this._count;s++)if(t[s].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let s=0;s<this._count;s++)if(t[s].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let s=0;s<this._count;s++)if(t[s].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let s=0;s<this._count;s++)if(t[s].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let s=0;s<this._count;s++)if(t[s].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,s=e._frustums;for(let o=0;o<e._count;o++)t[o]===void 0&&(t[o]=new Ps),t[o].copy(s[o]);return this._count=e._count,this}clone(){return new r().copy(this)}};var co=class extends Qr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},of=new X,af=new X,By=new Ut,Sl=new Ea,Nc=new Kr,Hp=new X,Hy=new X,lf=class extends kn{constructor(e=new Xi,t=new co){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,s=[0];for(let o=1,l=t.count;o<l;o++)of.fromBufferAttribute(t,o-1),af.fromBufferAttribute(t,o),s[o]=s[o-1],s[o]+=of.distanceTo(af);e.setAttribute("lineDistance",new mn(s,1))}else Ye("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let s=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,c=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Nc.copy(s.boundingSphere),Nc.applyMatrix4(o),Nc.radius+=l,e.ray.intersectsSphere(Nc)===!1)return;By.copy(o).invert(),Sl.copy(e.ray).applyMatrix4(By);let d=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=this.isLineSegments?2:1,v=s.index,_=s.attributes.position;if(v!==null){let b=Math.max(0,c.start),x=Math.min(v.count,c.start+c.count);for(let C=b,S=x-1;C<S;C+=m){let g=v.getX(C),A=v.getX(C+1),D=Lc(this,e,Sl,p,g,A,C);D&&t.push(D)}if(this.isLineLoop){let C=v.getX(x-1),S=v.getX(b),g=Lc(this,e,Sl,p,C,S,x-1);g&&t.push(g)}}else{let b=Math.max(0,c.start),x=Math.min(_.count,c.start+c.count);for(let C=b,S=x-1;C<S;C+=m){let g=Lc(this,e,Sl,p,C,C+1,C);g&&t.push(g)}if(this.isLineLoop){let C=Lc(this,e,Sl,p,x-1,b,x-1);C&&t.push(C)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){let o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){let d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}};function Lc(r,e,t,s,o,l,c){let d=r.geometry.attributes.position;if(of.fromBufferAttribute(d,o),af.fromBufferAttribute(d,l),t.distanceSqToSegment(of,af,Hp,Hy)>s)return;Hp.applyMatrix4(r.matrixWorld);let m=e.ray.origin.distanceTo(Hp);if(!(m<e.near||m>e.far))return{distance:m,point:Hy.clone().applyMatrix4(r.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:r}}var Vy=new X,Gy=new X,Nl=class extends lf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,s=[];for(let o=0,l=t.count;o<l;o+=2)Vy.fromBufferAttribute(t,o),Gy.fromBufferAttribute(t,o+1),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+Vy.distanceTo(Gy);e.setAttribute("lineDistance",new mn(s,1))}else Ye("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ll=class extends Qn{constructor(e=[],t=_o,s,o,l,c,d,p,m,v){super(e,t,s,o,l,c,d,p,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Dl=class extends Qn{constructor(e,t,s,o,l,c,d,p,m){super(e,t,s,o,l,c,d,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}};var es=class extends Qn{constructor(e,t,s=lr,o,l,c,d=Dn,p=Dn,m,v=jr,y=1){if(v!==jr&&v!==ns)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let _={width:e,height:t,depth:y};super(_,o,l,c,d,p,v,s,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new wa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},kl=class extends es{constructor(e,t=lr,s=_o,o,l,c=Dn,d=Dn,p,m=jr){let v={width:e,height:e,depth:1},y=[v,v,v,v,v,v];super(e,e,t,s,o,l,c,d,p,m),this.image=y,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Fl=class extends Qn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ar=class r extends Xi{constructor(e=1,t=1,s=1,o=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:o,heightSegments:l,depthSegments:c};let d=this;o=Math.floor(o),l=Math.floor(l),c=Math.floor(c);let p=[],m=[],v=[],y=[],_=0,b=0;x("z","y","x",-1,-1,s,t,e,c,l,0),x("z","y","x",1,-1,s,t,-e,c,l,1),x("x","z","y",1,1,e,s,t,o,c,2),x("x","z","y",1,-1,e,s,-t,o,c,3),x("x","y","z",1,-1,e,t,s,o,l,4),x("x","y","z",-1,-1,e,t,-s,o,l,5),this.setIndex(p),this.setAttribute("position",new mn(m,3)),this.setAttribute("normal",new mn(v,3)),this.setAttribute("uv",new mn(y,2));function x(C,S,g,A,D,R,L,N,M,P,V){let F=R/M,B=L/P,W=R/2,Z=L/2,O=N/2,Q=M+1,se=P+1,ee=0,me=0,ne=new X;for(let ce=0;ce<se;ce++){let he=ce*B-Z;for(let Be=0;Be<Q;Be++){let Ve=Be*F-W;ne[C]=Ve*A,ne[S]=he*D,ne[g]=O,m.push(ne.x,ne.y,ne.z),ne[C]=0,ne[S]=0,ne[g]=N>0?1:-1,v.push(ne.x,ne.y,ne.z),y.push(Be/M),y.push(1-ce/P),ee+=1}}for(let ce=0;ce<P;ce++)for(let he=0;he<M;he++){let Be=_+he+Q*ce,Ve=_+he+Q*(ce+1),re=_+(he+1)+Q*(ce+1),Pe=_+(he+1)+Q*ce;p.push(Be,Ve,Pe),p.push(Ve,re,Pe),me+=6}d.addGroup(b,me,V),b+=me,_+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var fo=class r extends Xi{constructor(e=1,t=1,s=1,o=32,l=1,c=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:s,radialSegments:o,heightSegments:l,openEnded:c,thetaStart:d,thetaLength:p};let m=this;o=Math.floor(o),l=Math.floor(l);let v=[],y=[],_=[],b=[],x=0,C=[],S=s/2,g=0;A(),c===!1&&(e>0&&D(!0),t>0&&D(!1)),this.setIndex(v),this.setAttribute("position",new mn(y,3)),this.setAttribute("normal",new mn(_,3)),this.setAttribute("uv",new mn(b,2));function A(){let R=new X,L=new X,N=0,M=(t-e)/s;for(let P=0;P<=l;P++){let V=[],F=P/l,B=F*(t-e)+e;for(let W=0;W<=o;W++){let Z=W/o,O=Z*p+d,Q=Math.sin(O),se=Math.cos(O);L.x=B*Q,L.y=-F*s+S,L.z=B*se,y.push(L.x,L.y,L.z),R.set(Q,M,se).normalize(),_.push(R.x,R.y,R.z),b.push(Z,1-F),V.push(x++)}C.push(V)}for(let P=0;P<o;P++)for(let V=0;V<l;V++){let F=C[V][P],B=C[V+1][P],W=C[V+1][P+1],Z=C[V][P+1];(e>0||V!==0)&&(v.push(F,B,Z),N+=3),(t>0||V!==l-1)&&(v.push(B,W,Z),N+=3)}m.addGroup(g,N,0),g+=N}function D(R){let L=x,N=new ct,M=new X,P=0,V=R===!0?e:t,F=R===!0?1:-1;for(let W=1;W<=o;W++)y.push(0,S*F,0),_.push(0,F,0),b.push(.5,.5),x++;let B=x;for(let W=0;W<=o;W++){let O=W/o*p+d,Q=Math.cos(O),se=Math.sin(O);M.x=V*se,M.y=S*F,M.z=V*Q,y.push(M.x,M.y,M.z),_.push(0,F,0),N.x=Q*.5+.5,N.y=se*.5*F+.5,b.push(N.x,N.y),x++}for(let W=0;W<o;W++){let Z=L+W,O=B+W;R===!0?v.push(O,O+1,Z):v.push(O+1,O,Z),P+=3}m.addGroup(g,P,R===!0?1:2),g+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Dc=new X,kc=new X,Vp=new X,Fc=new qr,Ul=class extends Xi{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let o=Math.pow(10,4),l=Math.cos(Vc*t),c=e.getIndex(),d=e.getAttribute("position"),p=c?c.count:d.count,m=[0,0,0],v=["a","b","c"],y=new Array(3),_=new Map,b=[];for(let x=0;x<p;x+=3){c?(m[0]=c.getX(x),m[1]=c.getX(x+1),m[2]=c.getX(x+2)):(m[0]=x,m[1]=x+1,m[2]=x+2);let{a:C,b:S,c:g}=Fc;if(C.fromBufferAttribute(d,m[0]),S.fromBufferAttribute(d,m[1]),g.fromBufferAttribute(d,m[2]),Fc.getNormal(Vp),y[0]=`${Math.round(C.x*o)},${Math.round(C.y*o)},${Math.round(C.z*o)}`,y[1]=`${Math.round(S.x*o)},${Math.round(S.y*o)},${Math.round(S.z*o)}`,y[2]=`${Math.round(g.x*o)},${Math.round(g.y*o)},${Math.round(g.z*o)}`,!(y[0]===y[1]||y[1]===y[2]||y[2]===y[0]))for(let A=0;A<3;A++){let D=(A+1)%3,R=y[A],L=y[D],N=Fc[v[A]],M=Fc[v[D]],P=`${R}_${L}`,V=`${L}_${R}`,F=_.get(V);F?(Vp.dot(F.normal)<=l&&(b.push(N.x,N.y,N.z),b.push(M.x,M.y,M.z)),_.set(V,null)):_.has(P)||_.set(P,{index0:m[A],index1:m[D],normal:Vp.clone()})}}for(let x of _.values())if(x){let{index0:C,index1:S}=x;Dc.fromBufferAttribute(d,C),kc.fromBufferAttribute(d,S),b.push(Dc.x,Dc.y,Dc.z),b.push(kc.x,kc.y,kc.z)}this.setAttribute("position",new mn(b,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};var ho=class r extends Xi{constructor(e=1,t=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:o};let l=e/2,c=t/2,d=Math.floor(s),p=Math.floor(o),m=d+1,v=p+1,y=e/d,_=t/p,b=[],x=[],C=[],S=[];for(let g=0;g<v;g++){let A=g*_-c;for(let D=0;D<m;D++){let R=D*y-l;x.push(R,-A,0),C.push(0,0,1),S.push(D/d),S.push(1-g/p)}}for(let g=0;g<p;g++)for(let A=0;A<d;A++){let D=A+m*g,R=A+m*(g+1),L=A+1+m*(g+1),N=A+1+m*g;b.push(D,R,N),b.push(R,L,N)}this.setIndex(b),this.setAttribute("position",new mn(x,3)),this.setAttribute("normal",new mn(C,3)),this.setAttribute("uv",new mn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ol=class r extends Xi{constructor(e=1,t=.4,s=12,o=48,l=Math.PI*2,c=0,d=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:s,tubularSegments:o,arc:l,thetaStart:c,thetaLength:d},s=Math.floor(s),o=Math.floor(o);let p=[],m=[],v=[],y=[],_=new X,b=new X,x=new X;for(let C=0;C<=s;C++){let S=c+C/s*d;for(let g=0;g<=o;g++){let A=g/o*l;b.x=(e+t*Math.cos(S))*Math.cos(A),b.y=(e+t*Math.cos(S))*Math.sin(A),b.z=t*Math.sin(S),m.push(b.x,b.y,b.z),_.x=e*Math.cos(A),_.y=e*Math.sin(A),x.subVectors(b,_).normalize(),v.push(x.x,x.y,x.z),y.push(g/o),y.push(C/s)}}for(let C=1;C<=s;C++)for(let S=1;S<=o;S++){let g=(o+1)*C+S-1,A=(o+1)*(C-1)+S-1,D=(o+1)*(C-1)+S,R=(o+1)*C+S;p.push(g,A,R),p.push(A,D,R)}this.setIndex(p),this.setAttribute("position",new mn(m,3)),this.setAttribute("normal",new mn(v,3)),this.setAttribute("uv",new mn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function So(r){let e={};for(let t in r){e[t]={};for(let s in r[t]){let o=r[t][s];if(Wy(o))o.isRenderTargetTexture?(Ye("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=o.clone();else if(Array.isArray(o))if(Wy(o[0])){let l=[];for(let c=0,d=o.length;c<d;c++)l[c]=o[c].clone();e[t][s]=l}else e[t][s]=o.slice();else e[t][s]=o}}return e}function ti(r){let e={};for(let t=0;t<r.length;t++){let s=So(r[t]);for(let o in s)e[o]=s[o]}return e}function Wy(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function iw(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Tm(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:vt.workingColorSpace}var O_={clone:So,merge:ti},rw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,qi=class extends Qr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rw,this.fragmentShader=sw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=So(e.uniforms),this.uniformsGroups=iw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let o in this.uniforms){let c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let s={};for(let o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let s in e.uniforms){let o=e.uniforms[s];switch(this.uniforms[s]={},o.type){case"t":this.uniforms[s].value=t[o.value]||null;break;case"c":this.uniforms[s].value=new rt().setHex(o.value);break;case"v2":this.uniforms[s].value=new ct().fromArray(o.value);break;case"v3":this.uniforms[s].value=new X().fromArray(o.value);break;case"v4":this.uniforms[s].value=new Zt().fromArray(o.value);break;case"m3":this.uniforms[s].value=new tt().fromArray(o.value);break;case"m4":this.uniforms[s].value=new Ut().fromArray(o.value);break;default:this.uniforms[s].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let s in e.extensions)this.extensions[s]=e.extensions[s];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},uf=class extends qi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ar=class extends Qr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fd,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var cf=class extends Qr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=M_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ff=class extends Qr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ma(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Uc(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}var Is=class{constructor(e,t,s,o){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=o!==void 0?o:new t.constructor(s),this.sampleValues=t,this.valueSize=s,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,s=this._cachedIndex,o=t[s],l=t[s-1];e:{t:{let c;n:{i:if(!(e<o)){for(let d=s+2;;){if(o===void 0){if(e<l)break i;return s=t.length,this._cachedIndex=s,this.copySampleValue_(s-1)}if(s===d)break;if(l=o,o=t[++s],e<o)break t}c=t.length;break n}if(!(e>=l)){let d=t[1];e<d&&(s=2,l=d);for(let p=s-2;;){if(l===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===p)break;if(o=l,l=t[--s-1],e>=l)break t}c=s,s=0;break n}break e}for(;s<c;){let d=s+c>>>1;e<t[d]?c=d:s=d+1}if(o=t[s],l=t[s-1],l===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(o===void 0)return s=t.length,this._cachedIndex=s,this.copySampleValue_(s-1)}this._cachedIndex=s,this.intervalChanged_(s,l,o)}return this.interpolate_(s,l,e,o)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o;for(let c=0;c!==o;++c)t[c]=s[l+c];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},df=class extends Is{constructor(e,t,s,o){super(e,t,s,o),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xp,endingEnd:Xp}}intervalChanged_(e,t,s){let o=this.parameterPositions,l=e-2,c=e+1,d=o[l],p=o[c];if(d===void 0)switch(this.getSettings_().endingStart){case qp:l=e,d=2*t-s;break;case $p:l=o.length-2,d=t+o[l]-o[l+1];break;default:l=e,d=s}if(p===void 0)switch(this.getSettings_().endingEnd){case qp:c=e,p=2*s-t;break;case $p:c=1,p=s+o[1]-o[0];break;default:c=e-1,p=t}let m=(s-t)*.5,v=this.valueSize;this._weightPrev=m/(t-d),this._weightNext=m/(p-s),this._offsetPrev=l*v,this._offsetNext=c*v}interpolate_(e,t,s,o){let l=this.resultBuffer,c=this.sampleValues,d=this.valueSize,p=e*d,m=p-d,v=this._offsetPrev,y=this._offsetNext,_=this._weightPrev,b=this._weightNext,x=(s-t)/(o-t),C=x*x,S=C*x,g=-_*S+2*_*C-_*x,A=(1+_)*S+(-1.5-2*_)*C+(-.5+_)*x+1,D=(-1-b)*S+(1.5+b)*C+.5*x,R=b*S-b*C;for(let L=0;L!==d;++L)l[L]=g*c[v+L]+A*c[m+L]+D*c[p+L]+R*c[y+L];return l}},hf=class extends Is{constructor(e,t,s,o){super(e,t,s,o)}interpolate_(e,t,s,o){let l=this.resultBuffer,c=this.sampleValues,d=this.valueSize,p=e*d,m=p-d,v=(s-t)/(o-t),y=1-v;for(let _=0;_!==d;++_)l[_]=c[m+_]*y+c[p+_]*v;return l}},pf=class extends Is{constructor(e,t,s,o){super(e,t,s,o)}interpolate_(e){return this.copySampleValue_(e-1)}},mf=class extends Is{interpolate_(e,t,s,o){let l=this.resultBuffer,c=this.sampleValues,d=this.valueSize,p=e*d,m=p-d,v=this.inTangents,y=this.outTangents;if(!v||!y){let x=(s-t)/(o-t),C=1-x;for(let S=0;S!==d;++S)l[S]=c[m+S]*C+c[p+S]*x;return l}let _=d*2,b=e-1;for(let x=0;x!==d;++x){let C=c[m+x],S=c[p+x],g=b*_+x*2,A=y[g],D=y[g+1],R=e*_+x*2,L=v[R],N=v[R+1],M=aw(s,t,A,L,o);l[x]=z_(M,C,D,N,S)}return l}};function z_(r,e,t,s,o){let l=1-r;return l*l*l*e+3*l*l*r*t+3*l*r*r*s+r*r*r*o}function ow(r,e,t,s,o){let l=1-r;return 3*l*l*(t-e)+6*l*r*(s-t)+3*r*r*(o-s)}function aw(r,e,t,s,o){let l=(r-e)/(o-e);for(let c=0;c<8;c++){let d=z_(l,e,t,s,o)-r;if(Math.abs(d)<1e-10)break;let p=ow(l,e,t,s,o);if(Math.abs(p)<1e-10)break;l=Math.max(0,Math.min(1,l-d/p))}return l}var Ii=class{constructor(e,t,s,o){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ma(t,this.TimeBufferType),this.values=ma(s,this.ValueBufferType),this.setInterpolation(o||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,s;if(t.toJSON!==this.toJSON)s=t.toJSON(e);else{s={name:e.name,times:ma(e.times,Array),values:ma(e.values,Array)};let o=e.getInterpolation();o!==e.DefaultInterpolation&&(s.interpolation=o),Uc(e.settings)&&(s.settings={inTangents:ma(e.settings.inTangents,Array),outTangents:ma(e.settings.outTangents,Array)})}return s.type=e.ValueTypeName,s}InterpolantFactoryMethodDiscrete(e){return new pf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new hf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new df(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new mf(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ml:t=this.InterpolantFactoryMethodDiscrete;break;case Qc:t=this.InterpolantFactoryMethodLinear;break;case Bc:t=this.InterpolantFactoryMethodSmooth;break;case Wp:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let s="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(s);return Ye("KeyframeTrack:",s),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ml;case this.InterpolantFactoryMethodLinear:return Qc;case this.InterpolantFactoryMethodSmooth:return Bc;case this.InterpolantFactoryMethodBezier:return Wp}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let s=0,o=t.length;s!==o;++s)t[s]+=e;Uc(this.settings)&&(Xy(this.settings.inTangents,e),Xy(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let s=0,o=t.length;s!==o;++s)t[s]*=e;Uc(this.settings)&&(qy(this.settings.inTangents,e),qy(this.settings.outTangents,e))}return this}trim(e,t){let s=this.times,o=s.length,l=0,c=o-1;for(;l!==o&&s[l]<e;)++l;for(;c!==-1&&s[c]>t;)--c;if(++c,l!==0||c!==o){l>=c&&(c=Math.max(c,1),l=c-1);let d=this.getValueSize();this.times=s.slice(l,c),this.values=this.values.slice(l*d,c*d)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(et("KeyframeTrack: Invalid value size in track.",this),e=!1);let s=this.times,o=this.values,l=s.length;l===0&&(et("KeyframeTrack: Track is empty.",this),e=!1);let c=null;for(let d=0;d!==l;d++){let p=s[d];if(typeof p=="number"&&isNaN(p)){et("KeyframeTrack: Time is not a valid number.",this,d,p),e=!1;break}if(c!==null&&c>p){et("KeyframeTrack: Out of order keys.",this,d,p,c),e=!1;break}c=p}if(o!==void 0&&DM(o))for(let d=0,p=o.length;d!==p;++d){let m=o[d];if(isNaN(m)){et("KeyframeTrack: Value is not a valid number.",this,d,m),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),s=this.getValueSize(),o=this.getInterpolation()===Bc,l=e.length-1,c=1;for(let d=1;d<l;++d){let p=!1,m=e[d],v=e[d+1];if(m!==v&&(d!==1||m!==e[0]))if(o)p=!0;else{let y=d*s,_=y-s,b=y+s;for(let x=0;x!==s;++x){let C=t[y+x];if(C!==t[_+x]||C!==t[b+x]){p=!0;break}}}if(p){if(d!==c){e[c]=e[d];let y=d*s,_=c*s;for(let b=0;b!==s;++b)t[_+b]=t[y+b]}++c}}if(l>0){e[c]=e[l];for(let d=l*s,p=c*s,m=0;m!==s;++m)t[p+m]=t[d+m];++c}return c!==e.length?(this.times=e.slice(0,c),this.values=t.slice(0,c*s)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),s=this.constructor,o=new s(this.name,e,t);return o.createInterpolant=this.createInterpolant,Uc(this.settings)&&(o.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),o}};function Xy(r,e){for(let t=0,s=r.length;t!==s;t+=2)r[t]+=e}function qy(r,e){for(let t=0,s=r.length;t!==s;t+=2)r[t]*=e}Ii.prototype.ValueTypeName="";Ii.prototype.TimeBufferType=Float32Array;Ii.prototype.ValueBufferType=Float32Array;Ii.prototype.DefaultInterpolation=Qc;var Ns=class extends Ii{constructor(e,t,s){super(e,t,s)}};Ns.prototype.ValueTypeName="bool";Ns.prototype.ValueBufferType=Array;Ns.prototype.DefaultInterpolation=Ml;Ns.prototype.InterpolantFactoryMethodLinear=void 0;Ns.prototype.InterpolantFactoryMethodSmooth=void 0;var gf=class extends Ii{constructor(e,t,s,o){super(e,t,s,o)}};gf.prototype.ValueTypeName="color";var vf=class extends Ii{constructor(e,t,s,o){super(e,t,s,o)}};vf.prototype.ValueTypeName="number";var yf=class extends Is{constructor(e,t,s,o){super(e,t,s,o)}interpolate_(e,t,s,o){let l=this.resultBuffer,c=this.sampleValues,d=this.valueSize,p=(s-t)/(o-t),m=e*d;for(let v=m+d;m!==v;m+=4)Tr.slerpFlat(l,0,c,m-d,c,m,p);return l}},zl=class extends Ii{constructor(e,t,s,o){super(e,t,s,o)}InterpolantFactoryMethodLinear(e){return new yf(this.times,this.values,this.getValueSize(),e)}};zl.prototype.ValueTypeName="quaternion";zl.prototype.InterpolantFactoryMethodSmooth=void 0;var Ls=class extends Ii{constructor(e,t,s){super(e,t,s)}};Ls.prototype.ValueTypeName="string";Ls.prototype.ValueBufferType=Array;Ls.prototype.DefaultInterpolation=Ml;Ls.prototype.InterpolantFactoryMethodLinear=void 0;Ls.prototype.InterpolantFactoryMethodSmooth=void 0;var _f=class extends Ii{constructor(e,t,s,o){super(e,t,s,o)}};_f.prototype.ValueTypeName="vector";var Gc={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&($y(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!$y(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function $y(r){try{let e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var bf=class{constructor(e,t,s){let o=this,l=!1,c=0,d=0,p,m=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=s,this._abortController=null,this.itemStart=function(v){d++,l===!1&&o.onStart!==void 0&&o.onStart(v,c,d),l=!0},this.itemEnd=function(v){c++,o.onProgress!==void 0&&o.onProgress(v,c,d),c===d&&(l=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(v){o.onError!==void 0&&o.onError(v)},this.resolveURL=function(v){return v=v.normalize("NFC"),p?p(v):v},this.setURLModifier=function(v){return p=v,this},this.addHandler=function(v,y){return m.push(v,y),this},this.removeHandler=function(v){let y=m.indexOf(v);return y!==-1&&m.splice(y,2),this},this.getHandler=function(v){for(let y=0,_=m.length;y<_;y+=2){let b=m[y],x=m[y+1];if(b.global&&(b.lastIndex=0),b.test(v))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},B_=new bf,Ca=class{constructor(e){this.manager=e!==void 0?e:B_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let s=this;return new Promise(function(o,l){s.load(e,o,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Ca.DEFAULT_MATERIAL_NAME="__DEFAULT";var ga=new WeakMap,Sf=class extends Ca{constructor(e){super(e)}load(e,t,s,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let l=this,c=Gc.get(`image:${e}`);if(c!==void 0){if(c.complete===!0)l.manager.itemStart(e),setTimeout(function(){t&&t(c),l.manager.itemEnd(e)},0);else{let y=ga.get(c);y===void 0&&(y=[],ga.set(c,y)),y.push({onLoad:t,onError:o})}return c}let d=xa("img");function p(){v(),t&&t(this);let y=ga.get(this)||[];for(let _=0;_<y.length;_++){let b=y[_];b.onLoad&&b.onLoad(this)}ga.delete(this),l.manager.itemEnd(e)}function m(y){v(),o&&o(y),Gc.remove(`image:${e}`);let _=ga.get(this)||[];for(let b=0;b<_.length;b++){let x=_[b];x.onError&&x.onError(y)}ga.delete(this),l.manager.itemError(e),l.manager.itemEnd(e)}function v(){d.removeEventListener("load",p,!1),d.removeEventListener("error",m,!1)}return d.addEventListener("load",p,!1),d.addEventListener("error",m,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),Gc.add(`image:${e}`,d),l.manager.itemStart(e),d.fetchPriority=this.priority,d.src=e,d}};var Bl=class extends Ca{constructor(e){super(e)}load(e,t,s,o){let l=new Qn,c=new Sf(this.manager);return c.setPriority(this.priority),c.setCache(this.cache),c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(d){l.image=d,l.needsUpdate=!0,t!==void 0&&t(l)},s,o),l}},Hl=class extends kn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new rt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var Gp=new Ut,Yy=new X,jy=new X,xf=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.mapType=ei,this.map=null,this.mapPass=null,this.matrix=new Ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ps,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new Zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Yy.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yy),jy.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(jy),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,s,o){Gp.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),s.setFromProjectionMatrix(Gp,e.coordinateSystem,e.reversedDepth);let l=this._frameExtents,c=o?o.z/l.x:1,d=o?o.w/l.y:1,p=o?o.x/l.x:0,m=o?o.y/l.y:0;e.coordinateSystem===Sa||e.reversedDepth?t.set(.5*c,0,0,.5*c+p,0,.5*d,0,.5*d+m,0,0,1,0,0,0,0,1):t.set(.5*c,0,0,.5*c+p,0,.5*d,0,.5*d+m,0,0,.5,.5,0,0,0,1),t.multiply(Gp)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Oc=new X,zc=new Tr,xr=new X,Vl=class extends kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ut,this.projectionMatrix=new Ut,this.projectionMatrixInverse=new Ut,this.coordinateSystem=Wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Oc,zc,xr),xr.x===1&&xr.y===1&&xr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oc,zc,xr.set(1,1,1)).invert()}updateWorldMatrix(e,t,s=!1){super.updateWorldMatrix(e,t,s),this.matrixWorld.decompose(Oc,zc,xr),xr.x===1&&xr.y===1&&xr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oc,zc,xr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Rs=new X,Zy=new ct,Jy=new ct,si=class extends Vl{constructor(e=50,t=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ef*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Vc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ef*2*Math.atan(Math.tan(Vc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){Rs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Rs.x,Rs.y).multiplyScalar(-e/Rs.z),Rs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Rs.x,Rs.y).multiplyScalar(-e/Rs.z)}getViewSize(e,t){return this.getViewBounds(e,Zy,Jy),t.subVectors(Jy,Zy)}setViewOffset(e,t,s,o,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Vc*.5*this.fov)/this.zoom,s=2*t,o=this.aspect*s,l=-.5*o,c=this.view;if(this.view!==null&&this.view.enabled){let p=c.fullWidth,m=c.fullHeight;l+=c.offsetX*o/p,t-=c.offsetY*s/m,o*=c.width/p,s*=c.height/m}let d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var po=class extends Vl{constructor(e=-1,t=1,s=1,o=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=o,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,o,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2,l=s-e,c=s+e,d=o+t,p=o-t;if(this.view!==null&&this.view.enabled){let m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,c=l+m*this.view.width,d-=v*this.view.offsetY,p=d-v*this.view.height}this.projectionMatrix.makeOrthographic(l,c,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Yp=class extends xf{constructor(){super(new po(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Gl=class extends Hl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kn.DEFAULT_UP),this.updateMatrix(),this.target=new kn,this.shadow=new Yp}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Wl=class extends Hl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var va=-90,ya=1,Ra=class extends kn{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;let o=new si(va,ya,e,t);o.layers=this.layers,this.add(o);let l=new si(va,ya,e,t);l.layers=this.layers,this.add(l);let c=new si(va,ya,e,t);c.layers=this.layers,this.add(c);let d=new si(va,ya,e,t);d.layers=this.layers,this.add(d);let p=new si(va,ya,e,t);p.layers=this.layers,this.add(p);let m=new si(va,ya,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[s,o,l,c,d,p]=t;for(let m of t)this.remove(m);if(e===Wi)s.up.set(0,1,0),s.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Sa)s.up.set(0,-1,0),s.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:s,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[l,c,d,p,m,v]=this.children,y=e.getRenderTarget(),_=e.getActiveCubeFace(),b=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let C=s.texture.mipmapsAutoUpdate;s.texture.mipmapsAutoUpdate=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(s,0,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(s,1,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(s,2,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(s,3,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(s,4,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),s.texture.mipmapsAutoUpdate=C,e.setRenderTarget(s,5,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,v),e.setRenderTarget(y,_,b),e.xr.enabled=x,s.texture.needsPMREMUpdate=!0}},Mf=class extends si{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Em="\\[\\]\\.:\\/",lw=new RegExp("["+Em+"]","g"),Am="[^"+Em+"]",uw="[^"+Em.replace("\\.","")+"]",cw=/((?:WC+[\/:])*)/.source.replace("WC",Am),fw=/(WCOD+)?/.source.replace("WCOD",uw),dw=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Am),hw=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Am),pw=new RegExp("^"+cw+fw+dw+hw+"$"),mw=["material","materials","bones","map"],jp=class{constructor(e,t,s){let o=s||Yt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,o)}getValue(e,t){this.bind();let s=this._targetGroup.nCachedObjects_,o=this._bindings[s];o!==void 0&&o.getValue(e,t)}setValue(e,t){let s=this._bindings;for(let o=this._targetGroup.nCachedObjects_,l=s.length;o!==l;++o)s[o].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,s=e.length;t!==s;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,s=e.length;t!==s;++t)e[t].unbind()}},Yt=class r{constructor(e,t,s){this.path=t,this.parsedPath=s||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,s){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,s):new r(e,t,s)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(lw,"")}static parseTrackName(e){let t=pw.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let s={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},o=s.nodeName&&s.nodeName.lastIndexOf(".");if(o!==void 0&&o!==-1){let l=s.nodeName.substring(o+1);mw.indexOf(l)!==-1&&(s.nodeName=s.nodeName.substring(0,o),s.objectName=l)}if(s.propertyName===null||s.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return s}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let s=e.skeleton.getBoneByName(t);if(s!==void 0)return s}if(e.children){let s=function(l){for(let c=0;c<l.length;c++){let d=l[c];if(d.name===t||d.uuid===t)return d;let p=s(d.children);if(p)return p}return null},o=s(e.children);if(o)return o}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let s=this.resolvedProperty;for(let o=0,l=s.length;o!==l;++o)e[t++]=s[o]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let s=this.resolvedProperty;for(let o=0,l=s.length;o!==l;++o)s[o]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let s=this.resolvedProperty;for(let o=0,l=s.length;o!==l;++o)s[o]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let s=this.resolvedProperty;for(let o=0,l=s.length;o!==l;++o)s[o]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,s=t.objectName,o=t.propertyName,l=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ye("PropertyBinding: No target node found for track: "+this.path+".");return}if(s){let m=t.objectIndex;switch(s){case"materials":if(!e.material){et("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){et("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){et("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let v=0;v<e.length;v++)if(e[v].name===m){m=v;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){et("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){et("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[s]===void 0){et("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[s]}if(m!==void 0){if(e[m]===void 0){et("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[m]}}let c=e[o];if(c===void 0){let m=t.nodeName;et("PropertyBinding: Trying to update property for track: "+m+"."+o+" but it wasn't found.",e);return}let d=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?d=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(d=this.Versioning.MatrixWorldNeedsUpdate);let p=this.BindingType.Direct;if(l!==void 0){if(o==="morphTargetInfluences"){if(!e.geometry){et("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){et("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[l]!==void 0&&(l=e.morphTargetDictionary[l])}p=this.BindingType.ArrayElement,this.resolvedProperty=c,this.propertyIndex=l}else c.fromArray!==void 0&&c.toArray!==void 0?(p=this.BindingType.HasFromToArray,this.resolvedProperty=c):Array.isArray(c)?(p=this.BindingType.EntireArray,this.resolvedProperty=c):this.propertyName=o;this.getValue=this.GetterByBindingType[p],this.setValue=this.SetterByBindingTypeAndVersioning[p][d]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Yt.Composite=jp;Yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Yt.prototype.GetterByBindingType=[Yt.prototype._getValue_direct,Yt.prototype._getValue_array,Yt.prototype._getValue_arrayElement,Yt.prototype._getValue_toArray];Yt.prototype.SetterByBindingTypeAndVersioning=[[Yt.prototype._setValue_direct,Yt.prototype._setValue_direct_setNeedsUpdate,Yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_array,Yt.prototype._setValue_array_setNeedsUpdate,Yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_arrayElement,Yt.prototype._setValue_arrayElement_setNeedsUpdate,Yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_fromArray,Yt.prototype._setValue_fromArray_setNeedsUpdate,Yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var O2=new Float32Array(1);var Ky=new Ut,mo=class{constructor(e,t,s=0,o=1/0){this.ray=new Ea(e,t),this.near=s,this.far=o,this.camera=null,this.layers=new Jr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):et("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ky.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ky),this}intersectObject(e,t=!0,s=[]){return Zp(e,this,s,t),s.sort(Qy),s}intersectObjects(e,t=!0,s=[]){for(let o=0,l=e.length;o<l;o++)Zp(e[o],this,s,t);return s.sort(Qy),s}};function Qy(r,e){return r.distance-e.distance}function Zp(r,e,t,s){let o=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(o=!1),o===!0&&s===!0){let l=r.children;for(let c=0,d=l.length;c<d;c++)Zp(l[c],e,t,!0)}}var Xl=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ye("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var Lm=class Lm{constructor(e,t,s,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,s,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let s=0;s<4;s++)this.elements[s]=e[s+t];return this}set(e,t,s,o){let l=this.elements;return l[0]=e,l[2]=t,l[1]=s,l[3]=o,this}};Lm.prototype.isMatrix2=!0;var Jp=Lm;function Cm(r,e,t,s){let o=gw(s);switch(t){case vm:return r*e;case If:return r*e/o.components*o.byteLength;case Nf:return r*e/o.components*o.byteLength;case Fs:return r*e*2/o.components*o.byteLength;case Lf:return r*e*2/o.components*o.byteLength;case ym:return r*e*3/o.components*o.byteLength;case Ni:return r*e*4/o.components*o.byteLength;case Df:return r*e*4/o.components*o.byteLength;case Yl:case jl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Zl:case Jl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ff:case Of:return Math.max(r,16)*Math.max(e,8)/4;case kf:case Uf:return Math.max(r,8)*Math.max(e,8)/2;case zf:case Bf:case Vf:case Gf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Hf:case Kl:case Wf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Xf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case qf:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case $f:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Yf:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case jf:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Zf:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Jf:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Kf:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Qf:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case ed:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case td:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case nd:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case id:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case rd:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case sd:case od:case ad:return Math.ceil(r/4)*Math.ceil(e/4)*16;case ld:case ud:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Ql:case cd:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function gw(r){switch(r){case ei:case hm:return{byteLength:1,components:1};case La:case pm:case ur:return{byteLength:2,components:1};case Rf:case Pf:return{byteLength:2,components:4};case lr:case Cf:case $i:return{byteLength:4,components:1};case mm:case gm:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ye("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function lb(){let r=null,e=!1,t=null,s=null;function o(l,c){s=r.requestAnimationFrame(o),t(l,c)}return{start:function(){e!==!0&&t!==null&&r!==null&&(s=r.requestAnimationFrame(o),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function yw(r){let e=new WeakMap;function t(d,p){let m=d.array,v=d.usage,y=m.byteLength,_=r.createBuffer();r.bindBuffer(p,_),r.bufferData(p,m,v),d.onUploadCallback();let b;if(m instanceof Float32Array)b=r.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)b=r.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?b=r.HALF_FLOAT:b=r.UNSIGNED_SHORT;else if(m instanceof Int16Array)b=r.SHORT;else if(m instanceof Uint32Array)b=r.UNSIGNED_INT;else if(m instanceof Int32Array)b=r.INT;else if(m instanceof Int8Array)b=r.BYTE;else if(m instanceof Uint8Array)b=r.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)b=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:_,type:b,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:y}}function s(d,p,m){let v=p.array,y=p.updateRanges;if(r.bindBuffer(m,d),y.length===0)r.bufferSubData(m,0,v);else{y.sort((b,x)=>b.start-x.start);let _=0;for(let b=1;b<y.length;b++){let x=y[_],C=y[b];C.start<=x.start+x.count+1?x.count=Math.max(x.count,C.start+C.count-x.start):(++_,y[_]=C)}y.length=_+1;for(let b=0,x=y.length;b<x;b++){let C=y[b];r.bufferSubData(m,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);let p=e.get(d);p&&(r.deleteBuffer(p.buffer),e.delete(d))}function c(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){let v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}let m=e.get(d);if(m===void 0)e.set(d,t(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,d,p),m.version=d.version}}return{get:o,remove:l,update:c}}var _w=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bw=`#ifdef USE_ALPHAHASH
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
#endif`,Sw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ww=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tw=`#ifdef USE_AOMAP
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
#endif`,Ew=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Aw=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Cw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Iw=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Nw=`#ifdef USE_IRIDESCENCE
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
#endif`,Lw=`#ifdef USE_BUMPMAP
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
#endif`,Dw=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Uw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ow=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,zw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Bw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Hw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Vw=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,Gw=`vec3 transformedNormal = objectNormal;
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
#endif`,Ww=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$w=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yw="gl_FragColor = linearToOutputTexel( gl_FragColor );",jw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Jw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Kw=`#ifdef USE_ENVMAP
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
#endif`,Qw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,eT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,tT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sT=`#ifdef USE_GRADIENTMAP
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
}`,oT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,aT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uT=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,cT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,fT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,gT=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vT=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,yT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_T=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bT=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,ST=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,MT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,TT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ET=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,AT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,CT=`#if defined( USE_POINTS_UV )
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
#endif`,RT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,PT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,IT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,NT=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,LT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,DT=`#ifdef USE_MORPHTARGETS
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
#endif`,kT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,FT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,UT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,OT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,HT=`#ifdef USE_NORMALMAP
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
#endif`,VT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,GT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,WT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,XT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$T=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,YT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ZT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,JT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,KT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,QT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,eE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,tE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,nE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,iE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,rE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sE=`#ifdef USE_SKINNING
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
#endif`,oE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,aE=`#ifdef USE_SKINNING
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
#endif`,lE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dE=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,hE=`#ifdef USE_TRANSMISSION
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
#endif`,pE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,mE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,gE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,vE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,yE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_E=`uniform sampler2D t2D;
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
}`,bE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SE=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ME=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wE=`#include <common>
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
}`,TE=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,EE=`#define DISTANCE
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
}`,AE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,CE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,RE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PE=`uniform float scale;
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
}`,IE=`uniform vec3 diffuse;
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
}`,NE=`#include <common>
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
}`,LE=`uniform vec3 diffuse;
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
}`,DE=`#define LAMBERT
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
}`,kE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,FE=`#define MATCAP
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
}`,UE=`#define MATCAP
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
}`,OE=`#define NORMAL
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
}`,zE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,BE=`#define PHONG
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
}`,HE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,VE=`#define STANDARD
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
}`,GE=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,WE=`#define TOON
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
}`,XE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,qE=`uniform float size;
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
}`,$E=`uniform vec3 diffuse;
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
}`,YE=`#include <common>
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
}`,jE=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,ZE=`uniform float rotation;
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
}`,JE=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:_w,alphahash_pars_fragment:bw,alphamap_fragment:Sw,alphamap_pars_fragment:xw,alphatest_fragment:Mw,alphatest_pars_fragment:ww,aomap_fragment:Tw,aomap_pars_fragment:Ew,batching_pars_vertex:Aw,batching_vertex:Cw,begin_vertex:Rw,beginnormal_vertex:Pw,bsdfs:Iw,iridescence_fragment:Nw,bumpmap_pars_fragment:Lw,clipping_planes_fragment:Dw,clipping_planes_pars_fragment:kw,clipping_planes_pars_vertex:Fw,clipping_planes_vertex:Uw,color_fragment:Ow,color_pars_fragment:zw,color_pars_vertex:Bw,color_vertex:Hw,common:Vw,defaultnormal_vertex:Gw,displacementmap_pars_vertex:Ww,displacementmap_vertex:Xw,emissivemap_fragment:qw,emissivemap_pars_fragment:$w,colorspace_fragment:Yw,colorspace_pars_fragment:jw,envmap_fragment:Zw,envmap_common_pars_fragment:Jw,envmap_pars_fragment:Kw,envmap_pars_vertex:Qw,envmap_physical_pars_fragment:cT,envmap_vertex:eT,fog_vertex:tT,fog_pars_vertex:nT,fog_fragment:iT,fog_pars_fragment:rT,gradientmap_pars_fragment:sT,lightmap_pars_fragment:oT,lights_lambert_fragment:aT,lights_lambert_pars_fragment:lT,lights_pars_begin:uT,lights_toon_fragment:fT,lights_toon_pars_fragment:dT,lights_phong_fragment:hT,lights_phong_pars_fragment:pT,lights_physical_fragment:mT,lights_physical_pars_fragment:gT,lights_fragment_begin:vT,lights_fragment_maps:yT,lights_fragment_end:_T,lightprobes_pars_fragment:bT,logdepthbuf_fragment:ST,logdepthbuf_pars_fragment:xT,logdepthbuf_pars_vertex:MT,logdepthbuf_vertex:wT,map_fragment:TT,map_pars_fragment:ET,map_particle_fragment:AT,map_particle_pars_fragment:CT,metalnessmap_fragment:RT,metalnessmap_pars_fragment:PT,morphinstance_vertex:IT,morphcolor_vertex:NT,morphnormal_vertex:LT,morphtarget_pars_vertex:DT,morphtarget_vertex:kT,normal_fragment_begin:FT,normal_fragment_maps:UT,normal_pars_fragment:OT,normal_pars_vertex:zT,normal_vertex:BT,normalmap_pars_fragment:HT,clearcoat_normal_fragment_begin:VT,clearcoat_normal_fragment_maps:GT,clearcoat_pars_fragment:WT,iridescence_pars_fragment:XT,opaque_fragment:qT,packing:$T,premultiplied_alpha_fragment:YT,project_vertex:jT,dithering_fragment:ZT,dithering_pars_fragment:JT,roughnessmap_fragment:KT,roughnessmap_pars_fragment:QT,shadowmap_pars_fragment:eE,shadowmap_pars_vertex:tE,shadowmap_vertex:nE,shadowmask_pars_fragment:iE,skinbase_vertex:rE,skinning_pars_vertex:sE,skinning_vertex:oE,skinnormal_vertex:aE,specularmap_fragment:lE,specularmap_pars_fragment:uE,tonemapping_fragment:cE,tonemapping_pars_fragment:fE,transmission_fragment:dE,transmission_pars_fragment:hE,uv_pars_fragment:pE,uv_pars_vertex:mE,uv_vertex:gE,worldpos_vertex:vE,background_vert:yE,background_frag:_E,backgroundCube_vert:bE,backgroundCube_frag:SE,cube_vert:xE,cube_frag:ME,depth_vert:wE,depth_frag:TE,distance_vert:EE,distance_frag:AE,equirect_vert:CE,equirect_frag:RE,linedashed_vert:PE,linedashed_frag:IE,meshbasic_vert:NE,meshbasic_frag:LE,meshlambert_vert:DE,meshlambert_frag:kE,meshmatcap_vert:FE,meshmatcap_frag:UE,meshnormal_vert:OE,meshnormal_frag:zE,meshphong_vert:BE,meshphong_frag:HE,meshphysical_vert:VE,meshphysical_frag:GE,meshtoon_vert:WE,meshtoon_frag:XE,points_vert:qE,points_frag:$E,shadow_vert:YE,shadow_frag:jE,sprite_vert:ZE,sprite_frag:JE},Le={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},Pr={basic:{uniforms:ti([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:ti([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new rt(0)},envMapIntensity:{value:1}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:ti([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:ti([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:ti([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new rt(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:ti([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:ti([Le.points,Le.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:ti([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:ti([Le.common,Le.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:ti([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:ti([Le.sprite,Le.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distance:{uniforms:ti([Le.common,Le.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distance_vert,fragmentShader:ft.distance_frag},shadow:{uniforms:ti([Le.lights,Le.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Pr.physical={uniforms:ti([Pr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new tt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};var dd={r:0,b:0,g:0},KE=new Ut,ub=new tt;ub.set(-1,0,0,0,1,0,0,0,1);function QE(r,e,t,s,o,l){let c=new rt(0),d=o===!0?0:1,p,m,v=null,y=0,_=null;function b(A){let D=A.isScene===!0?A.background:null;if(D&&D.isTexture){let R=A.backgroundBlurriness>0;D=e.get(D,R)}return D}function x(A){let D=!1,R=b(A);R===null?S(c,d):R&&R.isColor&&(S(R,1),D=!0);let L=r.xr.getEnvironmentBlendMode();L==="additive"?t.buffers.color.setClear(0,0,0,1,l):L==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(r.autoClear||D)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function C(A,D){let R=b(D);R&&R.isCubeTexture?(m===void 0&&(m=new mi(new Ar(1,1,1),new qi({name:"BackgroundCubeMaterial",uniforms:So(Pr.backgroundCube.uniforms),vertexShader:Pr.backgroundCube.vertexShader,fragmentShader:Pr.backgroundCube.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(L,N,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),m.material.uniforms.envMap.value=R,m.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(KE.makeRotationFromEuler(D.backgroundRotation)).transpose(),R.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(ub),m.material.toneMapped=vt.getTransfer(R.colorSpace)!==kt,(v!==R||y!==R.version||_!==r.toneMapping)&&(m.material.needsUpdate=!0,v=R,y=R.version,_=r.toneMapping),m.layers.enableAll(),A.unshift(m,m.geometry,m.material,0,0,null)):R&&R.isTexture&&(p===void 0&&(p=new mi(new ho(2,2),new qi({name:"BackgroundMaterial",uniforms:So(Pr.background.uniforms),vertexShader:Pr.background.vertexShader,fragmentShader:Pr.background.fragmentShader,side:ks,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(p)),p.material.uniforms.t2D.value=R,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=vt.getTransfer(R.colorSpace)!==kt,R.matrixAutoUpdate===!0&&R.updateMatrix(),p.material.uniforms.uvTransform.value.copy(R.matrix),(v!==R||y!==R.version||_!==r.toneMapping)&&(p.material.needsUpdate=!0,v=R,y=R.version,_=r.toneMapping),p.layers.enableAll(),A.unshift(p,p.geometry,p.material,0,0,null))}function S(A,D){A.getRGB(dd,Tm(r)),t.buffers.color.setClear(dd.r,dd.g,dd.b,D,l)}function g(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return c},setClearColor:function(A,D=1){c.set(A),d=D,S(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(A){d=A,S(c,d)},render:x,addToRenderList:C,dispose:g}}function eA(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},o=_(null),l=o,c=!1;function d(B,W,Z,O,Q){let se=!1,ee=y(B,O,Z,W);l!==ee&&(l=ee,m(l.object)),se=b(B,O,Z,Q),se&&x(B,O,Z,Q),Q!==null&&e.update(Q,r.ELEMENT_ARRAY_BUFFER),(se||c)&&(c=!1,R(B,W,Z,O),Q!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function p(){return r.createVertexArray()}function m(B){return r.bindVertexArray(B)}function v(B){return r.deleteVertexArray(B)}function y(B,W,Z,O){let Q=O.wireframe===!0,se=s[W.id];se===void 0&&(se={},s[W.id]=se);let ee=B.isInstancedMesh===!0?B.id:0,me=se[ee];me===void 0&&(me={},se[ee]=me);let ne=me[Z.id];ne===void 0&&(ne={},me[Z.id]=ne);let ce=ne[Q];return ce===void 0&&(ce=_(p()),ne[Q]=ce),ce}function _(B){let W=[],Z=[],O=[];for(let Q=0;Q<t;Q++)W[Q]=0,Z[Q]=0,O[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:Z,attributeDivisors:O,object:B,attributes:{},index:null}}function b(B,W,Z,O){let Q=l.attributes,se=W.attributes,ee=0,me=Z.getAttributes();for(let ne in me)if(me[ne].location>=0){let he=Q[ne],Be=se[ne];if(Be===void 0&&(ne==="instanceMatrix"&&B.instanceMatrix&&(Be=B.instanceMatrix),ne==="instanceColor"&&B.instanceColor&&(Be=B.instanceColor)),he===void 0||he.attribute!==Be||Be&&he.data!==Be.data)return!0;ee++}return l.attributesNum!==ee||l.index!==O}function x(B,W,Z,O){let Q={},se=W.attributes,ee=0,me=Z.getAttributes();for(let ne in me)if(me[ne].location>=0){let he=se[ne];he===void 0&&(ne==="instanceMatrix"&&B.instanceMatrix&&(he=B.instanceMatrix),ne==="instanceColor"&&B.instanceColor&&(he=B.instanceColor));let Be={};Be.attribute=he,he&&he.data&&(Be.data=he.data),Q[ne]=Be,ee++}l.attributes=Q,l.attributesNum=ee,l.index=O}function C(){let B=l.newAttributes;for(let W=0,Z=B.length;W<Z;W++)B[W]=0}function S(B){g(B,0)}function g(B,W){let Z=l.newAttributes,O=l.enabledAttributes,Q=l.attributeDivisors;Z[B]=1,O[B]===0&&(r.enableVertexAttribArray(B),O[B]=1),Q[B]!==W&&(r.vertexAttribDivisor(B,W),Q[B]=W)}function A(){let B=l.newAttributes,W=l.enabledAttributes;for(let Z=0,O=W.length;Z<O;Z++)W[Z]!==B[Z]&&(r.disableVertexAttribArray(Z),W[Z]=0)}function D(B,W,Z,O,Q,se,ee){ee===!0?r.vertexAttribIPointer(B,W,Z,Q,se):r.vertexAttribPointer(B,W,Z,O,Q,se)}function R(B,W,Z,O){C();let Q=O.attributes,se=Z.getAttributes(),ee=W.defaultAttributeValues;for(let me in se){let ne=se[me];if(ne.location>=0){let ce=Q[me];if(ce===void 0&&(me==="instanceMatrix"&&B.instanceMatrix&&(ce=B.instanceMatrix),me==="instanceColor"&&B.instanceColor&&(ce=B.instanceColor)),ce!==void 0){let he=ce.normalized,Be=ce.itemSize,Ve=e.get(ce);if(Ve===void 0)continue;let re=Ve.buffer,Pe=Ve.type,ke=Ve.bytesPerElement,We=Pe===r.INT||Pe===r.UNSIGNED_INT||ce.gpuType===Cf;if(ce.isInterleavedBufferAttribute){let Ne=ce.data,Ke=Ne.isInterleavedBuffer===!0?Ne.stride:Ne.itemSize,Bt=ce.offset;if(Ne.isInstancedInterleavedBuffer||Ne.isInstancedBufferAttribute){for(let qe=0;qe<ne.locationSize;qe++)g(ne.location+qe,Ne.meshPerAttribute);B.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Ne.meshPerAttribute*Ne.count)}else for(let qe=0;qe<ne.locationSize;qe++)S(ne.location+qe);r.bindBuffer(r.ARRAY_BUFFER,re);for(let qe=0;qe<ne.locationSize;qe++)D(ne.location+qe,Be/ne.locationSize,Pe,he,Ke*ke,(Bt+Be/ne.locationSize*qe)*ke,We)}else{if(ce.isInstancedBufferAttribute){for(let Ne=0;Ne<ne.locationSize;Ne++)g(ne.location+Ne,ce.meshPerAttribute);B.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Ne=0;Ne<ne.locationSize;Ne++)S(ne.location+Ne);r.bindBuffer(r.ARRAY_BUFFER,re);for(let Ne=0;Ne<ne.locationSize;Ne++)D(ne.location+Ne,Be/ne.locationSize,Pe,he,Be*ke,Be/ne.locationSize*Ne*ke,We)}}else if(ee!==void 0){let he=ee[me];if(he!==void 0)switch(he.length){case 2:r.vertexAttrib2fv(ne.location,he);break;case 3:r.vertexAttrib3fv(ne.location,he);break;case 4:r.vertexAttrib4fv(ne.location,he);break;default:r.vertexAttrib1fv(ne.location,he)}}}}A()}function L(){V();for(let B in s){let W=s[B];for(let Z in W){let O=W[Z];for(let Q in O){let se=O[Q];for(let ee in se)v(se[ee].object),delete se[ee];delete O[Q]}}delete s[B]}}function N(B){if(s[B.id]===void 0)return;let W=s[B.id];for(let Z in W){let O=W[Z];for(let Q in O){let se=O[Q];for(let ee in se)v(se[ee].object),delete se[ee];delete O[Q]}}delete s[B.id]}function M(B){for(let W in s){let Z=s[W];for(let O in Z){let Q=Z[O];if(Q[B.id]===void 0)continue;let se=Q[B.id];for(let ee in se)v(se[ee].object),delete se[ee];delete Q[B.id]}}}function P(B){for(let W in s){let Z=s[W],O=B.isInstancedMesh===!0?B.id:0,Q=Z[O];if(Q!==void 0){for(let se in Q){let ee=Q[se];for(let me in ee)v(ee[me].object),delete ee[me];delete Q[se]}delete Z[O],Object.keys(Z).length===0&&delete s[W]}}}function V(){F(),c=!0,l!==o&&(l=o,m(l.object))}function F(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:V,resetDefaultState:F,dispose:L,releaseStatesOfGeometry:N,releaseStatesOfObject:P,releaseStatesOfProgram:M,initAttributes:C,enableAttribute:S,disableUnusedAttributes:A}}function tA(r,e,t){let s;function o(p){s=p}function l(p,m){r.drawArrays(s,p,m),t.update(m,s,1)}function c(p,m,v){v!==0&&(r.drawArraysInstanced(s,p,m,v),t.update(m,s,v))}function d(p,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,m,0,v);let _=0;for(let b=0;b<v;b++)_+=m[b];t.update(_,s,1)}this.setMode=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function nA(r,e,t,s){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){let M=e.get("EXT_texture_filter_anisotropic");o=r.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(M){return!(M!==Ni&&s.convert(M)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(M){let P=M===ur&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==ei&&M!==$i&&!P&&s.convert(M)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function p(M){if(M==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp",v=p(m);v!==m&&(Ye("WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);let y=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),_=t.logarithmicDepthBuffer===!0&&y===!1;t.reversedDepthBuffer===!0&&y===!1&&Ye("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&y===!0&&Ye("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let b=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),A=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),D=r.getParameter(r.MAX_VARYING_VECTORS),R=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),L=r.getParameter(r.MAX_SAMPLES),N=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:c,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:_,reversedDepthBuffer:y,maxTextures:b,maxVertexTextures:x,maxTextureSize:C,maxCubemapSize:S,maxAttributes:g,maxVertexUniforms:A,maxVaryings:D,maxFragmentUniforms:R,maxSamples:L,samples:N}}function iA(r){let e=this,t=null,s=0,o=!1,l=!1,c=new Ri,d=new tt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(y,_){let b=y.length!==0||_||s!==0||o;return o=_,s=y.length,b},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(y,_){t=v(y,_,0)},this.setState=function(y,_,b){let x=y.clippingPlanes,C=y.clipIntersection,S=y.clipShadows,g=r.get(y);if(!o||x===null||x.length===0||l&&!S)l?v(null):m();else{let A=l?0:s,D=A*4,R=g.clippingState||null;p.value=R,R=v(x,_,D,b);for(let L=0;L!==D;++L)R[L]=t[L];g.clippingState=R,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=A}};function m(){p.value!==t&&(p.value=t,p.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(y,_,b,x){let C=y!==null?y.length:0,S=null;if(C!==0){if(S=p.value,x!==!0||S===null){let g=b+C*4,A=_.matrixWorldInverse;d.getNormalMatrix(A),(S===null||S.length<g)&&(S=new Float32Array(g));for(let D=0,R=b;D!==C;++D,R+=4)c.copy(y[D]).applyMatrix4(A,d),c.normal.toArray(S,R),S[R+3]=c.constant}p.value=S,p.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,S}}var iu=class extends Pi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let s={width:e,height:e,depth:1},o=[s,s,s,s,s,s];this.texture=new Ll(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Ar(5,5,5),l=new qi({name:"CubemapFromEquirect",uniforms:So(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:ai,blending:vo});l.uniforms.tEquirect.value=t;let c=new mi(o,l),d=t.minFilter;return t.minFilter===ts&&(t.minFilter=oi),new Ra(1,10,this).update(e,c),t.minFilter=d,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,s=!0,o=!0){let l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,s,o);e.setRenderTarget(l)}},H_=256,rA=3,sA=20,cb=256,fb=16,oA=3,aA=new X,lA=new rt,pd=class r{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ra(1,10,null),this._boxMesh=new mi(new Ar(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,s=.1,o=100,l={}){let{size:c=256,position:d=aA}=l,p=this._renderer;this._setSize(c);let m=this._allocateTarget(),v=this._getSourceTarget(!0);t>0&&(v.texture.mipmapsAutoUpdate=!1);let y=p.autoClear,_=p.autoClearColor,b=p.autoClearDepth,x=p.autoClearStencil,C=e.background;p.autoClear=!0,p.autoClearColor=!0,p.autoClearDepth=!0,p.autoClearStencil=!0,C===null&&(e.background=p.getClearColor(lA));let S=new Ra(s,o,v);return S.position.copy(d),S.update(p,e),p.autoClear=y,p.autoClearColor=_,p.autoClearDepth=b,p.autoClearStencil=x,e.background=C,t>0&&(v.texture.mipmapsAutoUpdate=!0,this._blur(m,t)),this._applyPMREM(m),m}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=W_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=G_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(H_,F_(e))}_fromTexture(e,t){e.mapping===_o||e.mapping===Na?this._setSize(e.image.length===0?H_:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let s=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(s),s}_allocateTarget(){let e=this._cubeSize,t=V_(e,!1,!1),s=Math.log2(e)-rA;for(let o=0;o<=s;o++)t.texture.mipmaps.push({width:e>>o,height:e>>o});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,s=this._sourceTarget;return(s===null||s.width!==t||e&&s.depthBuffer===!1)&&(s!==null&&s.dispose(),this._sourceTarget=V_(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,s){let o=this._boxMesh,l=this._cubeCamera;o.material=s,l.renderTarget=e,l.activeMipmapLevel=t;let c=e.width>>t;e.viewport.set(0,0,c,c),l.update(this._renderer,o),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===_o||e.mapping===Na?(this._cubemapMaterial===null&&(this._cubemapMaterial=W_()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=G_()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=uA(),this._integrationMaterial=cA());let t=this._cubeSize,s=e.texture.mipmaps.length-1,o=this._ggxMaterial.uniforms;o.envMap.value=this._sourceTarget.texture;let l=this._integrationMaterial.uniforms;l.envMap.value=this._sourceTarget.texture,l.sourceLod.value=Math.log2(t/fb);for(let c=0;c<=s;c++){let d=r.lodToRoughness(c,s);if(c>s-oA)l.roughness.value=d,this._renderCube(e,c,this._integrationMaterial);else{let p=d>0?Math.log2(t)+.5*Math.log2(6/(cb*Math.pow(d,4)))+.5:0;o.roughness.value=d,o.lodBias.value=p,this._renderCube(e,c,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=fA());let s=this._blurMaterial,o=s.uniforms,l=this._sourceTarget;o.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,o.envMap.value=l.texture,this._renderCube(e,0,s),o.envMap.value=e.texture,this._renderCube(l,0,s)}};function V_(r,e,t){return new iu(r,{minFilter:ts,generateMipmaps:e,type:ur,colorSpace:uo,depthBuffer:t})}function ru(r,e,t){return new qi({name:r,uniforms:e,vertexShader:ft.cube_vert,fragmentShader:t,side:ai,blending:vo,depthTest:!1,depthWrite:!1})}function uA(){return ru("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${cb}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function cA(){return ru("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:fb}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function fA(){return ru("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${sA}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function G_(){return ru("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function W_(){return ru("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function dA(r){let e=new WeakMap,t=new WeakMap,s=null;function o(_,b=!1){return _==null?null:b?c(_):l(_)}function l(_){if(_&&_.isTexture){let b=_.mapping;if(b===Tf||b===Ef)if(e.has(_)){let x=e.get(_).texture;return d(x,_.mapping)}else{let x=_.image;if(x&&x.height>0){let C=new iu(x.height);return C.fromEquirectangularTexture(r,_),e.set(_,C),_.addEventListener("dispose",m),d(C.texture,_.mapping)}else return null}}return _}function c(_){if(_&&_.isTexture&&_.isPMREMTexture!==!0){let b=_.mapping,x=b===Tf||b===Ef,C=b===_o||b===Na;if(x||C){let S=t.get(_),g=S!==void 0?S.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==g)return s===null&&(s=new pd(r)),S=x?s.fromEquirectangular(_,S):s.fromCubemap(_,S),S.texture.pmremVersion=_.pmremVersion,t.set(_,S),S.texture;if(S!==void 0)return S.texture;{let A=_.image;return x&&A&&A.height>0||C&&A&&p(A)?(s===null&&(s=new pd(r)),S=x?s.fromEquirectangular(_):s.fromCubemap(_),S.texture.pmremVersion=_.pmremVersion,t.set(_,S),_.addEventListener("dispose",v),S.texture):null}}}return _}function d(_,b){return b===Tf?_.mapping=_o:b===Ef&&(_.mapping=Na),_}function p(_){let b=0,x=6;for(let C=0;C<x;C++)_[C]!==void 0&&b++;return b===x}function m(_){let b=_.target;b.removeEventListener("dispose",m);let x=e.get(b);x!==void 0&&(e.delete(b),x.dispose())}function v(_){let b=_.target;b.removeEventListener("dispose",v);let x=t.get(b);x!==void 0&&(t.delete(b),x.dispose())}function y(){e=new WeakMap,t=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:o,dispose:y}}function hA(r){let e={};function t(s){if(e[s]!==void 0)return e[s];let o=r.getExtension(s);return e[s]=o,o}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){let o=t(s);return o===null&&xl("WebGLRenderer: "+s+" extension not supported."),o}}}function pA(r,e,t,s){let o={},l=new WeakMap,c=new FinalizationRegistry(x=>delete o[x]);function d(x){p(x.target)}function p(x){x.index!==null&&e.remove(x.index);for(let S in x.attributes)e.remove(x.attributes[S]);x.removeEventListener("dispose",d),delete o[x.id],c.unregister(x);let C=l.get(x);C&&(e.remove(C),l.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function m(x,C){return o[C.id]!==void 0||(C.addEventListener("dispose",d),o[C.id]=new WeakRef(C),c.register(C,C.id,C),t.memory.geometries++),C}function v(x){let C=x.attributes;for(let S in C)e.update(C[S],r.ARRAY_BUFFER)}function y(x){let C=x.index,S=x.attributes.position,g=0;if(S===void 0)return;let A=C!==null?C.array.length:S.array.length/3-1,D=S.count>=65535?Cl:Al,R=new D(Math.ceil(A/3)*6,1),L=R.array;if(C!==null){let M=C.array;g=C.version;for(let P=0,V=0;P<A;P+=3){let F=M[P+0],B=M[P+1],W=M[P+2];L[V++]=F,L[V++]=B,L[V++]=B,L[V++]=W,L[V++]=W,L[V++]=F}}else{g=S.version;for(let M=0,P=0;M<A;M+=3){let V=M+0,F=M+1,B=M+2;L[P++]=V,L[P++]=F,L[P++]=F,L[P++]=B,L[P++]=B,L[P++]=V}}R.version=g;let N=l.get(x);N&&e.remove(N),l.set(x,R)}function _(x){let C=l.get(x);if(C){let S=x.index;S!==null&&C.version<S.version&&y(x)}else y(x);return l.get(x)}function b(){for(let x in o){let C=o[x].deref();C!==void 0&&p(C)}}return{get:m,update:v,getWireframeAttribute:_,dispose:b}}function mA(r,e,t){let s;function o(y){s=y}let l,c;function d(y){l=y.type,c=y.bytesPerElement}function p(y,_){r.drawElements(s,_,l,y*c),t.update(_,s,1)}function m(y,_,b){b!==0&&(r.drawElementsInstanced(s,_,l,y*c,b),t.update(_,s,b))}function v(y,_,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,_,0,l,y,0,b);let C=0;for(let S=0;S<b;S++)C+=_[S];t.update(C,s,1)}this.setMode=o,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=v}function gA(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,c,d){switch(t.calls++,c){case r.TRIANGLES:t.triangles+=d*(l/3);break;case r.LINES:t.lines+=d*(l/2);break;case r.LINE_STRIP:t.lines+=d*(l-1);break;case r.LINE_LOOP:t.lines+=d*l;break;case r.POINTS:t.points+=d*l;break;default:et("WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:s}}function vA(r,e,t){let s=new WeakMap,o=new Zt;function l(c,d,p){let m=c.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,y=v!==void 0?v.length:0,_=s.get(d);if(_===void 0||_.count!==y){let V=function(){M.dispose(),s.delete(d),d.removeEventListener("dispose",V)};_!==void 0&&_.texture.dispose();let b=d.morphAttributes.position!==void 0,x=d.morphAttributes.normal!==void 0,C=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],g=d.morphAttributes.normal||[],A=d.morphAttributes.color||[],D=0;b===!0&&(D=1),x===!0&&(D=2),C===!0&&(D=3);let R=d.attributes.position.count*D,L=1;R>e.maxTextureSize&&(L=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);let N=new Float32Array(R*L*4*y),M=new Tl(N,R,L,y);M.type=$i,M.needsUpdate=!0;let P=D*4;for(let F=0;F<y;F++){let B=S[F],W=g[F],Z=A[F],O=R*L*4*F;for(let Q=0;Q<B.count;Q++){let se=Q*P;b===!0&&(o.fromBufferAttribute(B,Q),N[O+se+0]=o.x,N[O+se+1]=o.y,N[O+se+2]=o.z,N[O+se+3]=0),x===!0&&(o.fromBufferAttribute(W,Q),N[O+se+4]=o.x,N[O+se+5]=o.y,N[O+se+6]=o.z,N[O+se+7]=0),C===!0&&(o.fromBufferAttribute(Z,Q),N[O+se+8]=o.x,N[O+se+9]=o.y,N[O+se+10]=o.z,N[O+se+11]=Z.itemSize===4?o.w:1)}}_={count:y,texture:M,size:new ct(R,L)},s.set(d,_),d.addEventListener("dispose",V)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)p.getUniforms().setValue(r,"morphTexture",c.morphTexture,t);else{let b=0;for(let C=0;C<m.length;C++)b+=m[C];let x=d.morphTargetsRelative?1:1-b;p.getUniforms().setValue(r,"morphTargetBaseInfluence",x),p.getUniforms().setValue(r,"morphTargetInfluences",m)}p.getUniforms().setValue(r,"morphTargetsTexture",_.texture,t),p.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}return{update:l}}function yA(r,e,t,s,o){let l=new WeakMap;function c(m){let v=o.render.frame,y=m.geometry,_=e.get(m,y);if(l.get(_)!==v&&(e.update(_),l.set(_,v)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),l.get(m)!==v&&(t.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&t.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,v))),m.isSkinnedMesh){let b=m.skeleton;l.get(b)!==v&&(b.update(),l.set(b,v))}return _}function d(){l=new WeakMap}function p(m){let v=m.target;v.removeEventListener("dispose",p),s.releaseStatesOfObject(v),t.remove(v.instanceMatrix),v.instanceColor!==null&&t.remove(v.instanceColor)}return{update:c,dispose:d}}var _A={[om]:"LINEAR_TONE_MAPPING",[am]:"REINHARD_TONE_MAPPING",[lm]:"CINEON_TONE_MAPPING",[ql]:"ACES_FILMIC_TONE_MAPPING",[cm]:"AGX_TONE_MAPPING",[fm]:"NEUTRAL_TONE_MAPPING",[um]:"CUSTOM_TONE_MAPPING"};function bA(r,e,t,s,o,l){let c=new Pi(e,t,{type:r,depthBuffer:o,stencilBuffer:l,samples:s?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),d=null,p=null,m=null,v=new Xi;v.setAttribute("position",new mn([-1,3,0,-1,-1,0,3,-1,0],3)),v.setAttribute("uv",new mn([0,2,0,0,2,0],2));let y=new uf({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),_=new mi(v,y),b=new po(-1,1,1,-1,0,1),x=null,C=null,S=!1,g,A=null,D=[],R=!1;this.setSize=function(L,N){c.setSize(L,N),d!==null&&d.setSize(L,N),p!==null&&p.setSize(L,N);for(let M=0;M<D.length;M++){let P=D[M];P.setSize&&P.setSize(L,N)}},this.setEffects=function(L){D=L,R=D.length>0&&D[0].isRenderPass===!0;let N=c.width,M=c.height;D.length>0&&d===null&&(d=new Pi(N,M,{type:ur,depthBuffer:!1,stencilBuffer:!1}),p=new Pi(N,M,{type:ur,depthBuffer:!1,stencilBuffer:!1}));let P=o===!0&&D.some(V=>V.needsDepthTexture===!0);P!==(c.depthTexture!==null)&&(P===!0&&m===null&&(m=new es(N,M),l===!0&&(m.format=ns,m.type=bo)),c.dispose(),c.depthTexture=P?m:null,c.resolveDepthBuffer=P,c.storeMultisampledDepthBuffer=P);for(let V=0;V<D.length;V++){let F=D[V];F.setSize&&F.setSize(N,M),P&&F.needsDepthTexture===!0&&F.setDepthTexture&&F.setDepthTexture(m)}},this.begin=function(L,N){if(S||L.toneMapping===gi&&D.length===0)return!1;if(A=N,N!==null){let M=N.width,P=N.height;(c.width!==M||c.height!==P)&&this.setSize(M,P)}return R===!1&&L.setRenderTarget(c),g=L.toneMapping,L.toneMapping=gi,!0},this.hasRenderPass=function(){return R},this.end=function(L,N){L.toneMapping=g,S=!0;let M=c,P=d;for(let V=0;V<D.length;V++){let F=D[V];F.enabled!==!1&&(F.render(L,P,M,N),F.needsSwap!==!1&&(M=P,P=P===d?p:d))}if(x!==L.outputColorSpace||C!==L.toneMapping){x=L.outputColorSpace,C=L.toneMapping,y.defines={},vt.getTransfer(x)===kt&&(y.defines.SRGB_TRANSFER="");let V=_A[C];V&&(y.defines[V]=""),y.needsUpdate=!0}y.uniforms.tDiffuse.value=M.texture,L.setRenderTarget(A),L.render(_,b),A=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){c.dispose(),d!==null&&d.dispose(),p!==null&&p.dispose(),v.dispose(),y.dispose()}}var db=new Qn,hb=new es(1,1),pb=new kl(1),mb=new Tl,gb=new rf,vb=new Ll,X_=[],q_=[],$_=new Float32Array(16),Y_=new Float32Array(9),j_=new Float32Array(4);function ka(r,e,t){let s=r[0];if(s<=0||s>0)return r;let o=e*t,l=X_[o];if(l===void 0&&(l=new Float32Array(o),X_[o]=l),e!==0){s.toArray(l,0);for(let c=1,d=0;c!==e;++c)d+=t,r[c].toArray(l,d)}return l}function En(r,e){if(r.length!==e.length)return!1;for(let t=0,s=r.length;t<s;t++)if(r[t]!==e[t])return!1;return!0}function An(r,e){for(let t=0,s=e.length;t<s;t++)r[t]=e[t]}function gd(r,e){let t=q_[e];t===void 0&&(t=new Int32Array(e),q_[e]=t);for(let s=0;s!==e;++s)t[s]=r.allocateTextureUnit();return t}function SA(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function xA(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(En(t,e))return;r.uniform2fv(this.addr,e),An(t,e)}}function MA(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(En(t,e))return;r.uniform3fv(this.addr,e),An(t,e)}}function wA(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(En(t,e))return;r.uniform4fv(this.addr,e),An(t,e)}}function TA(r,e){let t=this.cache,s=e.elements;if(s===void 0){if(En(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),An(t,e)}else{if(En(t,s))return;j_.set(s),r.uniformMatrix2fv(this.addr,!1,j_),An(t,s)}}function EA(r,e){let t=this.cache,s=e.elements;if(s===void 0){if(En(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),An(t,e)}else{if(En(t,s))return;Y_.set(s),r.uniformMatrix3fv(this.addr,!1,Y_),An(t,s)}}function AA(r,e){let t=this.cache,s=e.elements;if(s===void 0){if(En(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),An(t,e)}else{if(En(t,s))return;$_.set(s),r.uniformMatrix4fv(this.addr,!1,$_),An(t,s)}}function CA(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function RA(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(En(t,e))return;r.uniform2iv(this.addr,e),An(t,e)}}function PA(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(En(t,e))return;r.uniform3iv(this.addr,e),An(t,e)}}function IA(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(En(t,e))return;r.uniform4iv(this.addr,e),An(t,e)}}function NA(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function LA(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(En(t,e))return;r.uniform2uiv(this.addr,e),An(t,e)}}function DA(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(En(t,e))return;r.uniform3uiv(this.addr,e),An(t,e)}}function kA(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(En(t,e))return;r.uniform4uiv(this.addr,e),An(t,e)}}function vd(r){return r.version===0&&(r.compareFunction=Sm,r.needsUpdate=!0),r}function FA(r,e,t){let s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o);let l;this.type===r.SAMPLER_2D_SHADOW?l=vd(hb):l=db,t.setTexture2D(e||l,o)}function UA(r,e,t){let s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture3D(e||gb,o)}function OA(r,e,t){let s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o);let l;this.type===r.SAMPLER_CUBE_SHADOW?l=vd(pb):l=vb,t.setTextureCube(e||l,o)}function zA(r,e,t){let s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture2DArray(e||mb,o)}function BA(r){switch(r){case 5126:return SA;case 35664:return xA;case 35665:return MA;case 35666:return wA;case 35674:return TA;case 35675:return EA;case 35676:return AA;case 5124:case 35670:return CA;case 35667:case 35671:return RA;case 35668:case 35672:return PA;case 35669:case 35673:return IA;case 5125:return NA;case 36294:return LA;case 36295:return DA;case 36296:return kA;case 35678:case 36198:case 36298:case 36306:case 35682:return FA;case 35679:case 36299:case 36307:return UA;case 35680:case 36300:case 36308:case 36293:return OA;case 36289:case 36303:case 36311:case 36292:return zA}}function HA(r,e){r.uniform1fv(this.addr,e)}function VA(r,e){let t=ka(e,this.size,2);r.uniform2fv(this.addr,t)}function GA(r,e){let t=ka(e,this.size,3);r.uniform3fv(this.addr,t)}function WA(r,e){let t=ka(e,this.size,4);r.uniform4fv(this.addr,t)}function XA(r,e){let t=ka(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function qA(r,e){let t=ka(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function $A(r,e){let t=ka(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function YA(r,e){r.uniform1iv(this.addr,e)}function jA(r,e){r.uniform2iv(this.addr,e)}function ZA(r,e){r.uniform3iv(this.addr,e)}function JA(r,e){r.uniform4iv(this.addr,e)}function KA(r,e){r.uniform1uiv(this.addr,e)}function QA(r,e){r.uniform2uiv(this.addr,e)}function eC(r,e){r.uniform3uiv(this.addr,e)}function tC(r,e){r.uniform4uiv(this.addr,e)}function nC(r,e,t){let s=this.cache,o=e.length,l=gd(t,o);En(s,l)||(r.uniform1iv(this.addr,l),An(s,l));let c;this.type===r.SAMPLER_2D_SHADOW?c=vd(hb):c=db;for(let d=0;d!==o;++d)t.setTexture2D(e[d]||c,l[d])}function iC(r,e,t){let s=this.cache,o=e.length,l=gd(t,o);En(s,l)||(r.uniform1iv(this.addr,l),An(s,l));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||gb,l[c])}function rC(r,e,t){let s=this.cache,o=e.length,l=gd(t,o);En(s,l)||(r.uniform1iv(this.addr,l),An(s,l));let c;this.type===r.SAMPLER_CUBE_SHADOW?c=vd(pb):c=vb;for(let d=0;d!==o;++d)t.setTextureCube(e[d]||c,l[d])}function sC(r,e,t){let s=this.cache,o=e.length,l=gd(t,o);En(s,l)||(r.uniform1iv(this.addr,l),An(s,l));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||mb,l[c])}function oC(r){switch(r){case 5126:return HA;case 35664:return VA;case 35665:return GA;case 35666:return WA;case 35674:return XA;case 35675:return qA;case 35676:return $A;case 5124:case 35670:return YA;case 35667:case 35671:return jA;case 35668:case 35672:return ZA;case 35669:case 35673:return JA;case 5125:return KA;case 36294:return QA;case 36295:return eC;case 36296:return tC;case 35678:case 36198:case 36298:case 36306:case 35682:return nC;case 35679:case 36299:case 36307:return iC;case 35680:case 36300:case 36308:case 36293:return rC;case 36289:case 36303:case 36311:case 36292:return sC}}var Fm=class{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=BA(t.type)}},Um=class{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=oC(t.type)}},Om=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){let o=this.seq;for(let l=0,c=o.length;l!==c;++l){let d=o[l];d.setValue(e,t[d.id],s)}}},Dm=/(\w+)(\])?(\[|\.)?/g;function Z_(r,e){r.seq.push(e),r.map[e.id]=e}function aC(r,e,t){let s=r.name,o=s.length;for(Dm.lastIndex=0;;){let l=Dm.exec(s),c=Dm.lastIndex,d=l[1],p=l[2]==="]",m=l[3];if(p&&(d=d|0),m===void 0||m==="["&&c+2===o){Z_(t,m===void 0?new Fm(d,r,e):new Um(d,r,e));break}else{let y=t.map[d];y===void 0&&(y=new Om(d),Z_(t,y)),t=y}}}var Da=class{constructor(e,t){this.seq=[],this.map={};let s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<s;++c){let d=e.getActiveUniform(t,c),p=e.getUniformLocation(t,d.name);aC(d,p,this)}let o=[],l=[];for(let c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(c):l.push(c);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,s,o){let l=this.map[t];l!==void 0&&l.setValue(e,s,o)}setOptional(e,t,s){let o=t[s];o!==void 0&&this.setValue(e,s,o)}static upload(e,t,s,o){for(let l=0,c=t.length;l!==c;++l){let d=t[l],p=s[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,o)}}static seqWithValue(e,t){let s=[];for(let o=0,l=e.length;o!==l;++o){let c=e[o];c.id in t&&s.push(c)}return s}};function J_(r,e,t){let s=r.createShader(e);return r.shaderSource(s,t),r.compileShader(s),s}var lC=37297,uC=0;function cC(r,e){let t=r.split(`
`),s=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=o;c<l;c++){let d=c+1;s.push(`${d===e?">":" "} ${d}: ${t[c]}`)}return s.join(`
`)}var K_=new tt;function fC(r){vt._getMatrix(K_,vt.workingColorSpace,r);let e=`mat3( ${K_.elements.map(t=>t.toFixed(4))} )`;switch(vt.getTransfer(r)){case wl:return[e,"LinearTransferOETF"];case kt:return[e,"sRGBTransferOETF"];default:return Ye("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Q_(r,e,t){let s=r.getShaderParameter(e,r.COMPILE_STATUS),l=(r.getShaderInfoLog(e)||"").trim();if(s&&l==="")return"";let c=/ERROR: 0:(\d+)/.exec(l);if(c){let d=parseInt(c[1]);return t.toUpperCase()+`

`+l+`

`+cC(r.getShaderSource(e),d)}else return l}function dC(r,e){let t=fC(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var hC={[om]:"Linear",[am]:"Reinhard",[lm]:"Cineon",[ql]:"ACESFilmic",[cm]:"AgX",[fm]:"Neutral",[um]:"Custom"};function pC(r,e){let t=hC[e];return t===void 0?(Ye("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var hd=new X;function mC(){vt.getLuminanceCoefficients(hd);let r=hd.x.toFixed(4),e=hd.y.toFixed(4),t=hd.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gC(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(nu).join(`
`)}function vC(r){let e=[];for(let t in r){let s=r[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function yC(r,e){let t={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){let l=r.getActiveAttrib(e,o),c=l.name,d=1;l.type===r.FLOAT_MAT2&&(d=2),l.type===r.FLOAT_MAT3&&(d=3),l.type===r.FLOAT_MAT4&&(d=4),t[c]={type:l.type,location:r.getAttribLocation(e,c),locationSize:d}}return t}function nu(r){return r!==""}function eb(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function tb(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var _C=/^[ \t]*#include +<([\w\d./]+)>/gm;function zm(r){return r.replace(_C,bC)}function bC(r,e){let t=ft[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return zm(t)}var SC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nb(r){return r.replace(SC,xC)}function xC(r,e,t,s){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function ib(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var MC={[go]:"SHADOWMAP_TYPE_PCF",[Ds]:"SHADOWMAP_TYPE_VSM"};function wC(r){return MC[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var TC={[Na]:"ENVMAP_MODE_REFRACTION"};function EC(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":TC[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var AC={[sm]:"ENVMAP_BLENDING_MULTIPLY",[b_]:"ENVMAP_BLENDING_MIX",[S_]:"ENVMAP_BLENDING_ADD"};function CC(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":AC[r.combine]||"ENVMAP_BLENDING_NONE"}function RC(r,e,t,s){let o=r.getContext(),l=t.defines,c=t.vertexShader,d=t.fragmentShader,p=wC(t),m=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",v=EC(t),y=CC(t),_=gC(t),b=vC(l),x=o.createProgram(),C,S,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(C=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(nu).join(`
`),C.length>0&&(C+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(nu).join(`
`),S.length>0&&(S+=`
`)):(C=[ib(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(nu).join(`
`),S=[ib(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+v:"",t.envMap?"#define "+y:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gi?"#define TONE_MAPPING":"",t.toneMapping!==gi?ft.tonemapping_pars_fragment:"",t.toneMapping!==gi?pC("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,dC("linearToOutputTexel",t.outputColorSpace),mC(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(nu).join(`
`)),c=zm(c),c=eb(c,t),c=tb(c,t),d=zm(d),d=eb(d,t),d=tb(d,t),c=nb(c),d=nb(d),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,C=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+C,S=["#define varying in",t.glslVersion===xm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);let A=g+C+c,D=g+S+d,R=J_(o,o.VERTEX_SHADER,A),L=J_(o,o.FRAGMENT_SHADER,D);o.attachShader(x,R),o.attachShader(x,L),t.index0AttributeName!==void 0?o.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(x,0,"position"),o.linkProgram(x);function N(F){if(r.debug.checkShaderErrors){let B=o.getProgramInfoLog(x)||"",W=o.getShaderInfoLog(R)||"",Z=o.getShaderInfoLog(L)||"",O=B.trim(),Q=W.trim(),se=Z.trim(),ee=!0,me=!0;if(o.getProgramParameter(x,o.LINK_STATUS)===!1)if(ee=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,x,R,L);else{let ne=Q_(o,R,"vertex"),ce=Q_(o,L,"fragment");et("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(x,o.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+O+`
`+ne+`
`+ce)}else O!==""?Ye("WebGLProgram: Program Info Log:",O):(Q===""||se==="")&&(me=!1);me&&(F.diagnostics={runnable:ee,programLog:O,vertexShader:{log:Q,prefix:C},fragmentShader:{log:se,prefix:S}})}o.deleteShader(R),o.deleteShader(L),M=new Da(o,x),P=yC(o,x)}let M;this.getUniforms=function(){return M===void 0&&N(this),M};let P;this.getAttributes=function(){return P===void 0&&N(this),P};let V=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=o.getProgramParameter(x,lC)),V},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=uC++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=L,this}var PC=0,Bm=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,s){let o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){let t=this.shaderCache,s=t.get(e);return s===void 0&&(s=new Hm(e),t.set(e,s)),s}},Hm=class{constructor(e){this.id=PC++,this.code=e,this.usedTimes=0}};function IC(r){return r===Fs||r===Kl||r===Ql}function NC(r,e,t,s,o,l){let c=new Jr,d=new Bm,p=new Set,m=[],v=new Map,y=s.logarithmicDepthBuffer,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(M){return p.add(M),M===0?"uv":`uv${M}`}function x(M,P,V,F,B,W){let Z=F.fog,O=B.geometry,Q=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?F.environment:null,se=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,ee=e.get(M.envMap||Q,se),me=_[M.type],ne=s.precision;M.precision!==null&&(ne=s.getMaxPrecision(M.precision),ne!==M.precision&&Ye("WebGLProgram.getParameters:",M.precision,"not supported, using",ne,"instead."));let ce=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,he=ce!==void 0?ce.length:0,Be=0;O.morphAttributes.position!==void 0&&(Be=1),O.morphAttributes.normal!==void 0&&(Be=2),O.morphAttributes.color!==void 0&&(Be=3);let Ve,re,Pe,ke;if(me){let Ae=Pr[me];Ve=Ae.vertexShader,re=Ae.fragmentShader}else{Ve=M.vertexShader,re=M.fragmentShader;let Ae=d.getVertexShaderStage(M),Rt=d.getFragmentShaderStage(M);d.update(M,Ae,Rt),Pe=Ae.id,ke=Rt.id}let We=r.getRenderTarget(),Ne=r.state.buffers.depth.getReversed(),Ke=B.isInstancedMesh===!0,Bt=B.isBatchedMesh===!0,qe=!!M.map,Tt=!!M.matcap,yt=!!ee,dt=yt&&ee.isPMREMTexture===!0,on=!!M.aoMap,Wt=!!M.lightMap,an=!!M.bumpMap&&M.wireframe===!1,Ht=!!M.normalMap,$n=!!M.displacementMap,Vt=!!M.emissiveMap,ln=!!M.metalnessMap,Fn=!!M.roughnessMap,Yn=M.anisotropy>0,H=M.clearcoat>0,Un=M.diffuseRoughness>0,Ct=M.dispersion>0,ot=M.retroreflectivity>0,Ee=M.iridescence>0,un=M.sheen>0,Xe=M.transmission>0,je=Yn&&!!M.anisotropyMap,I=H&&!!M.clearcoatMap,T=H&&!!M.clearcoatNormalMap,$=H&&!!M.clearcoatRoughnessMap,de=Un&&!!M.diffuseRoughnessMap,ue=Ee&&!!M.iridescenceMap,xe=Ee&&!!M.iridescenceThicknessMap,Te=un&&!!M.sheenColorMap,oe=un&&!!M.sheenRoughnessMap,ae=!!M.specularMap,Me=!!M.specularColorMap,U=!!M.specularIntensityMap,le=Xe&&!!M.transmissionMap,ie=Xe&&!!M.thicknessMap,we=!!M.gradientMap,ye=!!M.alphaMap,be=M.alphaTest>0,He=!!M.alphaHash,st=!!M.extensions,pe=gi;M.toneMapped&&(We===null||We.isXRRenderTarget===!0)&&(pe=r.toneMapping);let Ge=dt?ee.isCompressedCubeTexture?ee.image[0].mipmaps:ee.mipmaps:null,it={shaderID:me,shaderType:M.type,shaderName:M.name,vertexShader:Ve,fragmentShader:re,defines:M.defines,customVertexShaderID:Pe,customFragmentShaderID:ke,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:ne,batching:Bt,batchingColor:Bt&&B._colorsTexture!==null,instancing:Ke,instancingColor:Ke&&B.instanceColor!==null,instancingMorph:Ke&&B.morphTexture!==null,outputColorSpace:We===null?r.outputColorSpace:We.isXRRenderTarget===!0?We.texture.colorSpace:vt.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:qe,matcap:Tt,envMap:yt,envMapMode:yt&&ee.mapping,envMapPMREM:dt,envMapMaxLod:dt?Ge.length-1:null,envMapSize:dt?Ge[0].width:null,aoMap:on,lightMap:Wt,bumpMap:an,normalMap:Ht,displacementMap:$n,emissiveMap:Vt,normalMapObjectSpace:Ht&&M.normalMapType===w_,normalMapTangentSpace:Ht&&M.normalMapType===fd,packedNormalMap:Ht&&M.normalMapType===fd&&IC(M.normalMap.format),metalnessMap:ln,roughnessMap:Fn,anisotropy:Yn,anisotropyMap:je,clearcoat:H,clearcoatMap:I,clearcoatNormalMap:T,clearcoatRoughnessMap:$,diffuseRoughness:Un,diffuseRoughnessMap:de,dispersion:Ct,retroreflection:ot,iridescence:Ee,iridescenceMap:ue,iridescenceThicknessMap:xe,sheen:un,sheenColorMap:Te,sheenRoughnessMap:oe,specularMap:ae,specularColorMap:Me,specularIntensityMap:U,transmission:Xe,transmissionMap:le,thicknessMap:ie,gradientMap:we,opaque:M.transparent===!1&&M.blending===Ia&&M.alphaToCoverage===!1,alphaMap:ye,alphaTest:be,alphaHash:He,combine:M.combine,mapUv:qe&&b(M.map.channel),aoMapUv:on&&b(M.aoMap.channel),lightMapUv:Wt&&b(M.lightMap.channel),bumpMapUv:an&&b(M.bumpMap.channel),normalMapUv:Ht&&b(M.normalMap.channel),displacementMapUv:$n&&b(M.displacementMap.channel),emissiveMapUv:Vt&&b(M.emissiveMap.channel),metalnessMapUv:ln&&b(M.metalnessMap.channel),roughnessMapUv:Fn&&b(M.roughnessMap.channel),anisotropyMapUv:je&&b(M.anisotropyMap.channel),clearcoatMapUv:I&&b(M.clearcoatMap.channel),clearcoatNormalMapUv:T&&b(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&b(M.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:de&&b(M.diffuseRoughnessMap.channel),iridescenceMapUv:ue&&b(M.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&b(M.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&b(M.sheenColorMap.channel),sheenRoughnessMapUv:oe&&b(M.sheenRoughnessMap.channel),specularMapUv:ae&&b(M.specularMap.channel),specularColorMapUv:Me&&b(M.specularColorMap.channel),specularIntensityMapUv:U&&b(M.specularIntensityMap.channel),transmissionMapUv:le&&b(M.transmissionMap.channel),thicknessMapUv:ie&&b(M.thicknessMap.channel),alphaMapUv:ye&&b(M.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Ht||Yn),vertexNormals:!!O.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!O.attributes.uv&&(qe||ye),fog:!!Z,useFog:M.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||O.attributes.normal===void 0&&Ht===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:Ne,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:Be,numSunLights:P.sun.length,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numSunLightShadows:P.sunShadowMap.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:W.filter(Ae=>Ae.texture!==null).length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&V.length>0,shadowMapType:r.shadowMap.type,toneMapping:pe,decodeVideoTexture:qe&&M.map.isVideoTexture===!0&&vt.getTransfer(M.map.colorSpace)===kt,decodeVideoTextureEmissive:Vt&&M.emissiveMap.isVideoTexture===!0&&vt.getTransfer(M.emissiveMap.colorSpace)===kt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Cr,flipSided:M.side===ai,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:st&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&M.extensions.multiDraw===!0||Bt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return it.vertexUv1s=p.has(1),it.vertexUv2s=p.has(2),it.vertexUv3s=p.has(3),p.clear(),it}function C(M){let P=[];if(M.shaderID?P.push(M.shaderID):(P.push(M.customVertexShaderID),P.push(M.customFragmentShaderID)),M.defines!==void 0)for(let V in M.defines)P.push(V),P.push(M.defines[V]);return M.isRawShaderMaterial===!1&&(S(P,M),g(P,M),P.push(r.outputColorSpace)),P.push(M.customProgramCacheKey),P.join()}function S(M,P){M.push(P.precision),M.push(P.outputColorSpace),M.push(P.envMapMode),M.push(P.envMapPMREM),M.push(P.envMapMaxLod),M.push(P.envMapSize),M.push(P.mapUv),M.push(P.alphaMapUv),M.push(P.lightMapUv),M.push(P.aoMapUv),M.push(P.bumpMapUv),M.push(P.normalMapUv),M.push(P.displacementMapUv),M.push(P.emissiveMapUv),M.push(P.metalnessMapUv),M.push(P.roughnessMapUv),M.push(P.anisotropyMapUv),M.push(P.clearcoatMapUv),M.push(P.clearcoatNormalMapUv),M.push(P.clearcoatRoughnessMapUv),M.push(P.diffuseRoughnessMapUv),M.push(P.iridescenceMapUv),M.push(P.iridescenceThicknessMapUv),M.push(P.sheenColorMapUv),M.push(P.sheenRoughnessMapUv),M.push(P.specularMapUv),M.push(P.specularColorMapUv),M.push(P.specularIntensityMapUv),M.push(P.transmissionMapUv),M.push(P.thicknessMapUv),M.push(P.combine),M.push(P.fogExp2),M.push(P.sizeAttenuation),M.push(P.morphTargetsCount),M.push(P.numSunLights),M.push(P.numDirLights),M.push(P.numPointLights),M.push(P.numSpotLights),M.push(P.numSpotLightMaps),M.push(P.numHemiLights),M.push(P.numRectAreaLights),M.push(P.numSunLightShadows),M.push(P.numDirLightShadows),M.push(P.numPointLightShadows),M.push(P.numSpotLightShadows),M.push(P.numSpotLightShadowsWithMaps),M.push(P.numLightProbes),M.push(P.numLightProbeGrids),M.push(P.shadowMapType),M.push(P.toneMapping),M.push(P.numClippingPlanes),M.push(P.numClipIntersection),M.push(P.depthPacking)}function g(M,P){c.disableAll(),P.instancing&&c.enable(0),P.instancingColor&&c.enable(1),P.instancingMorph&&c.enable(2),P.matcap&&c.enable(3),P.envMap&&c.enable(4),P.normalMapObjectSpace&&c.enable(5),P.normalMapTangentSpace&&c.enable(6),P.clearcoat&&c.enable(7),P.iridescence&&c.enable(8),P.alphaTest&&c.enable(9),P.vertexColors&&c.enable(10),P.vertexAlphas&&c.enable(11),P.vertexUv1s&&c.enable(12),P.vertexUv2s&&c.enable(13),P.vertexUv3s&&c.enable(14),P.vertexTangents&&c.enable(15),P.anisotropy&&c.enable(16),P.alphaHash&&c.enable(17),P.batching&&c.enable(18),P.dispersion&&c.enable(19),P.retroreflection&&c.enable(24),P.diffuseRoughness&&c.enable(25),P.batchingColor&&c.enable(20),P.gradientMap&&c.enable(21),P.packedNormalMap&&c.enable(22),P.vertexNormals&&c.enable(23),M.push(c.mask),c.disableAll(),P.fog&&c.enable(0),P.useFog&&c.enable(1),P.flatShading&&c.enable(2),P.logarithmicDepthBuffer&&c.enable(3),P.reversedDepthBuffer&&c.enable(4),P.skinning&&c.enable(5),P.morphTargets&&c.enable(6),P.morphNormals&&c.enable(7),P.morphColors&&c.enable(8),P.premultipliedAlpha&&c.enable(9),P.shadowMapEnabled&&c.enable(10),P.doubleSided&&c.enable(11),P.flipSided&&c.enable(12),P.useDepthPacking&&c.enable(13),P.dithering&&c.enable(14),P.transmission&&c.enable(15),P.sheen&&c.enable(16),P.opaque&&c.enable(17),P.pointsUvs&&c.enable(18),P.decodeVideoTexture&&c.enable(19),P.decodeVideoTextureEmissive&&c.enable(20),P.alphaToCoverage&&c.enable(21),P.numLightProbeGrids>0&&c.enable(22),P.hasPositionAttribute&&c.enable(23),M.push(c.mask)}function A(M){let P=_[M.type],V;if(P){let F=Pr[P];V=O_.clone(F.uniforms)}else V=M.uniforms;return V}function D(M,P){let V=v.get(P);return V!==void 0?++V.usedTimes:(V=new RC(r,P,M,o),m.push(V),v.set(P,V)),V}function R(M){if(--M.usedTimes===0){let P=m.indexOf(M);m[P]=m[m.length-1],m.pop(),v.delete(M.cacheKey),M.destroy()}}function L(M){d.remove(M)}function N(){d.dispose()}return{getParameters:x,getProgramCacheKey:C,getUniforms:A,acquireProgram:D,releaseProgram:R,releaseShaderCache:L,programs:m,dispose:N}}function LC(){let r=new WeakMap;function e(c){return r.has(c)}function t(c){let d=r.get(c);return d===void 0&&(d={},r.set(c,d)),d}function s(c){r.delete(c)}function o(c,d,p){r.get(c)[d]=p}function l(){r=new WeakMap}return{has:e,get:t,remove:s,update:o,dispose:l}}function DC(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function rb(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function sb(){let r=[],e=0,t=[],s=[],o=[];function l(){e=0,t.length=0,s.length=0,o.length=0}function c(_){let b=0;return _.isInstancedMesh&&(b+=2),_.isSkinnedMesh&&(b+=1),b}function d(_,b,x,C,S,g){let A=r[e];return A===void 0?(A={id:_.id,object:_,geometry:b,material:x,materialVariant:c(_),groupOrder:C,renderOrder:_.renderOrder,z:S,group:g},r[e]=A):(A.id=_.id,A.object=_,A.geometry=b,A.material=x,A.materialVariant=c(_),A.groupOrder=C,A.renderOrder=_.renderOrder,A.z=S,A.group=g),e++,A}function p(_,b,x,C,S,g,A){A.reversedDepth===!0&&(S=-S);let D=d(_,b,x,C,S,g);x.transmission>0?s.push(D):x.transparent===!0?o.push(D):t.push(D)}function m(_,b,x,C,S,g){let A=d(_,b,x,C,S,g);x.transmission>0?s.unshift(A):x.transparent===!0?o.unshift(A):t.unshift(A)}function v(_,b){t.length>1&&t.sort(_||DC),s.length>1&&s.sort(b||rb),o.length>1&&o.sort(b||rb)}function y(){for(let _=e,b=r.length;_<b;_++){let x=r[_];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:s,transparent:o,init:l,push:p,unshift:m,finish:y,sort:v}}function kC(){let r=new WeakMap;function e(s,o){let l=r.get(s),c;return l===void 0?(c=new sb,r.set(s,[c])):o>=l.length?(c=new sb,l.push(c)):c=l[o],c}function t(){r=new WeakMap}return{get:e,dispose:t}}function FC(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new X,color:new rt};break;case"SpotLight":t={position:new X,direction:new X,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":t={color:new rt,position:new X,halfWidth:new X,halfHeight:new X};break}return r[e.id]=t,t}}}function UC(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var OC=0;function zC(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function BC(r){let e=new FC,t=UC(),s={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new X);let o=new X,l=new Ut,c=new Ut;function d(m){let v=0,y=0,_=0;for(let W=0;W<9;W++)s.probe[W].set(0,0,0);let b=0,x=0,C=0,S=0,g=0,A=0,D=0,R=0,L=0,N=0,M=0,P=0,V=0,F=0;m.sort(zC);for(let W=0,Z=m.length;W<Z;W++){let O=m[W],Q=O.color,se=O.intensity,ee=O.distance,me=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===Fs?me=O.shadow.map.texture:me=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)v+=Q.r*se,y+=Q.g*se,_+=Q.b*se;else if(O.isLightProbe){for(let ne=0;ne<9;ne++)s.probe[ne].addScaledVector(O.sh.coefficients[ne],se);F++}else if(O.isSunLight){let ne=e.get(O);if(ne.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let ce=O.shadow,he=t.get(O);he.shadowIntensity=ce.intensity,he.shadowBias=ce.bias,he.shadowNormalBias=ce.normalBias,he.shadowRadius=ce.radius,he.shadowMapSize.copy(ce.mapSize).multiply(ce.getFrameExtents()),s.sunShadow[x]=he,s.sunShadowMap[x]=me;let Be=ce.getViewportCount();for(let Ve=0;Ve<Be;Ve++)s.sunShadowMatrix[C+Ve]=ce.getMatrix(Ve),s.sunShadowCascade[C+Ve]=ce._cascadeData[Ve];C+=Be,x++}s.sun[b]=ne,b++}else if(O.isDirectionalLight){let ne=e.get(O);if(ne.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let ce=O.shadow,he=t.get(O);he.shadowIntensity=ce.intensity,he.shadowBias=ce.bias,he.shadowNormalBias=ce.normalBias,he.shadowRadius=ce.radius,he.shadowMapSize=ce.mapSize,s.directionalShadow[S]=he,s.directionalShadowMap[S]=me,s.directionalShadowMatrix[S]=O.shadow.matrix,L++}s.directional[S]=ne,S++}else if(O.isSpotLight){let ne=e.get(O);ne.position.setFromMatrixPosition(O.matrixWorld),ne.color.copy(Q).multiplyScalar(se),ne.distance=ee,ne.coneCos=Math.cos(O.angle),ne.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),ne.decay=O.decay,s.spot[A]=ne;let ce=O.shadow;if(O.map&&(s.spotLightMap[P]=O.map,P++,ce.updateMatrices(O),O.castShadow&&V++),s.spotLightMatrix[A]=ce.matrix,O.castShadow){let he=t.get(O);he.shadowIntensity=ce.intensity,he.shadowBias=ce.bias,he.shadowNormalBias=ce.normalBias,he.shadowRadius=ce.radius,he.shadowMapSize=ce.mapSize,s.spotShadow[A]=he,s.spotShadowMap[A]=me,M++}A++}else if(O.isRectAreaLight){let ne=e.get(O);ne.color.copy(Q).multiplyScalar(se),ne.halfWidth.set(O.width*.5,0,0),ne.halfHeight.set(0,O.height*.5,0),s.rectArea[D]=ne,D++}else if(O.isPointLight){let ne=e.get(O);if(ne.color.copy(O.color).multiplyScalar(O.intensity),ne.distance=O.distance,ne.decay=O.decay,O.castShadow){let ce=O.shadow,he=t.get(O);he.shadowIntensity=ce.intensity,he.shadowBias=ce.bias,he.shadowNormalBias=ce.normalBias,he.shadowRadius=ce.radius,he.shadowMapSize=ce.mapSize,he.shadowCameraNear=ce.camera.near,he.shadowCameraFar=ce.camera.far,s.pointShadow[g]=he,s.pointShadowMap[g]=me,s.pointShadowMatrix[g]=O.shadow.matrix,N++}s.point[g]=ne,g++}else if(O.isHemisphereLight){let ne=e.get(O);ne.skyColor.copy(O.color).multiplyScalar(se),ne.groundColor.copy(O.groundColor).multiplyScalar(se),s.hemi[R]=ne,R++}}D>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Le.LTC_FLOAT_1,s.rectAreaLTC2=Le.LTC_FLOAT_2):(s.rectAreaLTC1=Le.LTC_HALF_1,s.rectAreaLTC2=Le.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=y,s.ambient[2]=_;let B=s.hash;(B.sunLength!==b||B.directionalLength!==S||B.pointLength!==g||B.spotLength!==A||B.rectAreaLength!==D||B.hemiLength!==R||B.numSunShadows!==x||B.numDirectionalShadows!==L||B.numPointShadows!==N||B.numSpotShadows!==M||B.numSpotMaps!==P||B.numLightProbes!==F)&&(s.sun.length=b,s.directional.length=S,s.spot.length=A,s.rectArea.length=D,s.point.length=g,s.hemi.length=R,s.sunShadow.length=x,s.sunShadowMap.length=x,s.sunShadowMatrix.length=C,s.sunShadowCascade.length=C,s.directionalShadow.length=L,s.directionalShadowMap.length=L,s.directionalShadowMatrix.length=L,s.pointShadow.length=N,s.pointShadowMap.length=N,s.pointShadowMatrix.length=N,s.spotShadow.length=M,s.spotShadowMap.length=M,s.spotLightMatrix.length=M+P-V,s.spotLightMap.length=P,s.numSpotLightShadowsWithMaps=V,s.numLightProbes=F,B.sunLength=b,B.directionalLength=S,B.pointLength=g,B.spotLength=A,B.rectAreaLength=D,B.hemiLength=R,B.numSunShadows=x,B.numDirectionalShadows=L,B.numPointShadows=N,B.numSpotShadows=M,B.numSpotMaps=P,B.numLightProbes=F,s.version=OC++)}function p(m,v){let y=0,_=0,b=0,x=0,C=0,S=0,g=v.matrixWorldInverse;for(let A=0,D=m.length;A<D;A++){let R=m[A];if(R.isSunLight){let L=s.sun[y];L.direction.setFromMatrixPosition(R.matrixWorld),L.direction.transformDirection(g),y++}else if(R.isDirectionalLight){let L=s.directional[_];L.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(g),_++}else if(R.isSpotLight){let L=s.spot[x];L.position.setFromMatrixPosition(R.matrixWorld),L.position.applyMatrix4(g),L.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(g),x++}else if(R.isRectAreaLight){let L=s.rectArea[C];L.position.setFromMatrixPosition(R.matrixWorld),L.position.applyMatrix4(g),c.identity(),l.copy(R.matrixWorld),l.premultiply(g),c.extractRotation(l),L.halfWidth.set(R.width*.5,0,0),L.halfHeight.set(0,R.height*.5,0),L.halfWidth.applyMatrix4(c),L.halfHeight.applyMatrix4(c),C++}else if(R.isPointLight){let L=s.point[b];L.position.setFromMatrixPosition(R.matrixWorld),L.position.applyMatrix4(g),b++}else if(R.isHemisphereLight){let L=s.hemi[S];L.direction.setFromMatrixPosition(R.matrixWorld),L.direction.transformDirection(g),S++}}}return{setup:d,setupView:p,state:s}}function ob(r){let e=new BC(r),t=[],s=[],o=[];function l(y){v.camera=y,t.length=0,s.length=0,o.length=0}function c(y){y.isLightProbeGrid?o.push(y):t.push(y)}function d(y){s.push(y)}function p(){e.setup(t),o.sort((y,_)=>y.priority-_.priority||y.id-_.id)}function m(y){e.setupView(t,y)}let v={lightsArray:t,shadowsArray:s,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:v,setupLights:p,setupLightsView:m,pushLight:c,pushShadow:d}}function HC(r){let e=new WeakMap;function t(o,l=0){let c=e.get(o),d;return c===void 0?(d=new ob(r),e.set(o,[d])):l>=c.length?(d=new ob(r),c.push(d)):d=c[l],d}function s(){e=new WeakMap}return{get:t,dispose:s}}var VC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,WC=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],XC=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],ab=new Ut,tu=new X,km=new X;function qC(r,e,t){let s=new Ps,o=new ct,l=new ct,c=new Zt,d=new cf,p=new ff,m={},v=t.maxTextureSize,y={[ks]:ai,[ai]:ks,[Cr]:Cr},_=new qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:VC,fragmentShader:GC}),b=_.clone();b.defines.HORIZONTAL_PASS=1;let x=new Xi;x.setAttribute("position",new or(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let C=new mi(x,_),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=go;let g=this.type;this.render=function(N,M,P){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||N.length===0)return;this.type===Pa&&(Ye("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=go);let V=r.getRenderTarget(),F=r.getActiveCubeFace(),B=r.getActiveMipmapLevel(),W=r.state;W.setBlending(vo),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let Z=g!==this.type;Z&&M.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(Q=>Q.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,Q=N.length;O<Q;O++){let se=N[O],ee=se.shadow;if(ee===void 0){Ye("WebGLShadowMap:",se,"has no shadow.");continue}if(ee.autoUpdate===!1&&ee.needsUpdate===!1)continue;o.copy(ee.mapSize);let me=ee.getFrameExtents();o.multiply(me),l.copy(ee.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(l.x=Math.floor(v/me.x),o.x=l.x*me.x,ee.mapSize.x=l.x),o.y>v&&(l.y=Math.floor(v/me.y),o.y=l.y*me.y,ee.mapSize.y=l.y));let ne=r.state.buffers.depth.getReversed();if(ee.camera._reversedDepth=ne,ee.map===null||Z===!0){if(ee.map!==null&&(ee.map.depthTexture!==null&&(ee.map.depthTexture.dispose(),ee.map.depthTexture=null),ee.map.dispose()),this.type===Ds){if(se.isPointLight){Ye("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ee.map=new Pi(o.x,o.y,{format:Fs,type:ur,minFilter:oi,magFilter:oi,generateMipmaps:!1}),ee.map.texture.name=se.name+".shadowMap",ee.map.depthTexture=new es(o.x,o.y,$i),ee.map.depthTexture.name=se.name+".shadowMapDepth",ee.map.depthTexture.format=jr,ee.map.depthTexture.compareFunction=null,ee.map.depthTexture.minFilter=Dn,ee.map.depthTexture.magFilter=Dn}else se.isPointLight?(ee.map=new iu(o.x),ee.map.depthTexture=new kl(o.x,lr)):(ee.map=new Pi(o.x,o.y),ee.map.depthTexture=new es(o.x,o.y,lr)),ee.map.depthTexture.name=se.name+".shadowMap",ee.map.depthTexture.format=jr,this.type===go?(ee.map.depthTexture.compareFunction=ne?bm:_m,ee.map.depthTexture.minFilter=oi,ee.map.depthTexture.magFilter=oi):(ee.map.depthTexture.compareFunction=null,ee.map.depthTexture.minFilter=Dn,ee.map.depthTexture.magFilter=Dn);ee.camera.updateProjectionMatrix()}ee.map.isWebGLCubeRenderTarget!==!0&&(ee.map.width!==o.x||ee.map.height!==o.y)&&ee.map.setSize(o.x,o.y);let ce=ee.map.isWebGLCubeRenderTarget?6:ee.getViewportCount();se.isPointLight!==!0&&ee.updateMatrices(se,P);let he=(ee.camera.layers.mask&4294967294)!==0?ee.camera.layers:P.layers;for(let Be=0;Be<ce;Be++){let Ve=ee.getCamera(Be);if(se.isPointLight){let re=ee.camera,Pe=ee.matrix,ke=se.distance||re.far;ke!==re.far&&(re.far=ke,re.updateProjectionMatrix()),tu.setFromMatrixPosition(se.matrixWorld),re.position.copy(tu),km.copy(re.position),km.add(WC[Be]),re.up.copy(XC[Be]),re.lookAt(km),re.updateMatrixWorld(),Pe.makeTranslation(-tu.x,-tu.y,-tu.z),ab.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),ee._frustum.setFromProjectionMatrix(ab,re.coordinateSystem,re.reversedDepth)}if(ee.map.isWebGLCubeRenderTarget)r.setRenderTarget(ee.map,Be),r.clear();else{Be===0&&(r.setRenderTarget(ee.map),r.clear());let re=ee.getViewport(Be);c.set(l.x*re.x,l.y*re.y,l.x*re.z,l.y*re.w),W.viewport(c)}s=ee.getFrustum(Be),R(M,P,Ve,se,he,this.type)}ee.isPointLightShadow!==!0&&this.type===Ds&&A(ee,P),ee.needsUpdate=!1}g=this.type,S.needsUpdate=!1,r.setRenderTarget(V,F,B)};function A(N,M){let P=e.update(C);_.defines.VSM_SAMPLES!==N.blurSamples&&(_.defines.VSM_SAMPLES=N.blurSamples,b.defines.VSM_SAMPLES=N.blurSamples,_.needsUpdate=!0,b.needsUpdate=!0),N.mapPass===null?N.mapPass=new Pi(o.x,o.y,{format:Fs,type:ur}):(N.mapPass.width!==N.map.width||N.mapPass.height!==N.map.height)&&N.mapPass.setSize(N.map.width,N.map.height),_.uniforms.shadow_pass.value=N.map.depthTexture,_.uniforms.resolution.value.set(N.map.width,N.map.height),_.uniforms.radius.value=N.radius,r.setRenderTarget(N.mapPass),r.clear(),r.renderBufferDirect(M,null,P,_,C,null),b.uniforms.shadow_pass.value=N.mapPass.texture,b.uniforms.resolution.value.set(N.map.width,N.map.height),b.uniforms.radius.value=N.radius,r.setRenderTarget(N.map),r.clear(),r.renderBufferDirect(M,null,P,b,C,null)}function D(N,M,P,V){let F=null,B=P.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(B!==void 0)F=B;else if(F=P.isPointLight===!0?p:d,r.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0||M.alphaToCoverage===!0){let W=F.uuid,Z=M.uuid,O=m[W];O===void 0&&(O={},m[W]=O);let Q=O[Z];Q===void 0&&(Q=F.clone(),O[Z]=Q,M.addEventListener("dispose",L)),F=Q}if(F.visible=M.visible,F.wireframe=M.wireframe,V===Ds?F.side=M.shadowSide!==null?M.shadowSide:M.side:F.side=M.shadowSide!==null?M.shadowSide:y[M.side],F.alphaMap=M.alphaMap,F.alphaTest=M.alphaToCoverage===!0?.5:M.alphaTest,F.map=M.map,F.clipShadows=M.clipShadows,F.clippingPlanes=M.clippingPlanes,F.clipIntersection=M.clipIntersection,F.displacementMap=M.displacementMap,F.displacementScale=M.displacementScale,F.displacementBias=M.displacementBias,F.wireframeLinewidth=M.wireframeLinewidth,F.linewidth=M.linewidth,P.isPointLight===!0&&F.isMeshDistanceMaterial===!0){let W=r.properties.get(F);W.light=P}return F}function R(N,M,P,V,F,B){if(N.visible===!1)return;if(N.layers.test(F)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&B===Ds)&&(!N.frustumCulled||N.intersectsFrustum(s))){N.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,N.matrixWorld);let O=e.update(N),Q=N.material;if(Array.isArray(Q)){let se=O.groups;for(let ee=0,me=se.length;ee<me;ee++){let ne=se[ee],ce=Q[ne.materialIndex];if(ce&&ce.visible){let he=D(N,ce,V,B);N.onBeforeShadow(r,N,M,P,O,he,ne),r.renderBufferDirect(P,null,O,he,N,ne),N.onAfterShadow(r,N,M,P,O,he,ne)}}}else if(Q.visible){let se=D(N,Q,V,B);N.onBeforeShadow(r,N,M,P,O,se,null),r.renderBufferDirect(P,null,O,se,N,null),N.onAfterShadow(r,N,M,P,O,se,null)}}let Z=N.children;for(let O=0,Q=Z.length;O<Q;O++)R(Z[O],M,P,V,F,B)}function L(N){N.target.removeEventListener("dispose",L);for(let P in m){let V=m[P],F=N.target.uuid;F in V&&(V[F].dispose(),delete V[F])}}}function $C(r,e){function t(){let U=!1,le=new Zt,ie=null,we=new Zt(0,0,0,0);return{setMask:function(ye){ie!==ye&&!U&&(r.colorMask(ye,ye,ye,ye),ie=ye)},setLocked:function(ye){U=ye},setClear:function(ye,be,He,st,pe){pe===!0&&(ye*=st,be*=st,He*=st),le.set(ye,be,He,st),we.equals(le)===!1&&(r.clearColor(ye,be,He,st),we.copy(le))},reset:function(){U=!1,ie=null,we.set(-1,0,0,0)}}}function s(){let U=!1,le=!1,ie=null,we=null,ye=null;return{setReversed:function(be){if(le!==be){let He=e.get("EXT_clip_control");be?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),le=be;let st=ye;ye=null,this.setClear(st)}},getReversed:function(){return le},setTest:function(be){be?Ne(r.DEPTH_TEST):Ke(r.DEPTH_TEST)},setMask:function(be){ie!==be&&!U&&(r.depthMask(be),ie=be)},setFunc:function(be){if(le&&(be=k_[be]),we!==be){switch(be){case Wc:r.depthFunc(r.NEVER);break;case Xc:r.depthFunc(r.ALWAYS);break;case qc:r.depthFunc(r.LESS);break;case ba:r.depthFunc(r.LEQUAL);break;case $c:r.depthFunc(r.EQUAL);break;case Yc:r.depthFunc(r.GEQUAL);break;case jc:r.depthFunc(r.GREATER);break;case Zc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}we=be}},setLocked:function(be){U=be},setClear:function(be){ye!==be&&(ye=be,le&&(be=1-be),r.clearDepth(be))},reset:function(){U=!1,ie=null,we=null,ye=null,le=!1}}}function o(){let U=!1,le=null,ie=null,we=null,ye=null,be=null,He=null,st=null,pe=null;return{setTest:function(Ge){U||(Ge?Ne(r.STENCIL_TEST):Ke(r.STENCIL_TEST))},setMask:function(Ge){le!==Ge&&!U&&(r.stencilMask(Ge),le=Ge)},setFunc:function(Ge,it,Ae){(ie!==Ge||we!==it||ye!==Ae)&&(r.stencilFunc(Ge,it,Ae),ie=Ge,we=it,ye=Ae)},setOp:function(Ge,it,Ae){(be!==Ge||He!==it||st!==Ae)&&(r.stencilOp(Ge,it,Ae),be=Ge,He=it,st=Ae)},setLocked:function(Ge){U=Ge},setClear:function(Ge){pe!==Ge&&(r.clearStencil(Ge),pe=Ge)},reset:function(){U=!1,le=null,ie=null,we=null,ye=null,be=null,He=null,st=null,pe=null}}}let l=new t,c=new s,d=new o,p={},m=new WeakMap,v={},y={},_={},b=new WeakMap,x=[],C=null,S=!1,g=null,A=null,D=null,R=null,L=null,N=null,M=null,P=new rt(0,0,0),V=0,F=!1,B=null,W=null,Z=null,O=null,Q=null,se=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ee=!1,me=0,ne=r.getParameter(r.VERSION);ne.indexOf("WebGL")!==-1?(me=parseFloat(/^WebGL (\d)/.exec(ne)[1]),ee=me>=1):ne.indexOf("OpenGL ES")!==-1&&(me=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),ee=me>=2);let ce=null,he={},Be=r.getParameter(r.SCISSOR_BOX),Ve=r.getParameter(r.VIEWPORT),re=new Zt().fromArray(Be),Pe=new Zt().fromArray(Ve);function ke(U,le,ie,we){let ye=new Uint8Array(4),be=r.createTexture();r.bindTexture(U,be),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let He=0;He<ie;He++)U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY?r.texImage3D(le,0,r.RGBA,1,1,we,0,r.RGBA,r.UNSIGNED_BYTE,ye):r.texImage2D(le+He,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ye);return be}let We={};We[r.TEXTURE_2D]=ke(r.TEXTURE_2D,r.TEXTURE_2D,1),We[r.TEXTURE_CUBE_MAP]=ke(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),We[r.TEXTURE_2D_ARRAY]=ke(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),We[r.TEXTURE_3D]=ke(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),d.setClear(0),Ne(r.DEPTH_TEST),c.setFunc(ba),an(!1),Ht(Kp),Ne(r.CULL_FACE),on(vo);function Ne(U){v[U]!==!0&&(r.enable(U),v[U]=!0)}function Ke(U){v[U]!==!1&&(r.disable(U),v[U]=!1)}function Bt(U,le){return _[U]!==le?(r.bindFramebuffer(U,le),_[U]=le,U===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=le),U===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=le),!0):!1}function qe(U,le){let ie=x,we=!1;if(U){ie=b.get(le),ie===void 0&&(ie=[],b.set(le,ie));let ye=U.textures;if(ie.length!==ye.length||ie[0]!==r.COLOR_ATTACHMENT0){for(let be=0,He=ye.length;be<He;be++)ie[be]=r.COLOR_ATTACHMENT0+be;ie.length=ye.length,we=!0}}else ie[0]!==r.BACK&&(ie[0]=r.BACK,we=!0);we&&r.drawBuffers(ie)}function Tt(U){return C!==U?(r.useProgram(U),C=U,!0):!1}let yt={[yo]:r.FUNC_ADD,[i_]:r.FUNC_SUBTRACT,[r_]:r.FUNC_REVERSE_SUBTRACT};yt[s_]=r.MIN,yt[o_]=r.MAX;let dt={[a_]:r.ZERO,[l_]:r.ONE,[u_]:r.SRC_COLOR,[im]:r.SRC_ALPHA,[m_]:r.SRC_ALPHA_SATURATE,[h_]:r.DST_COLOR,[f_]:r.DST_ALPHA,[c_]:r.ONE_MINUS_SRC_COLOR,[rm]:r.ONE_MINUS_SRC_ALPHA,[p_]:r.ONE_MINUS_DST_COLOR,[d_]:r.ONE_MINUS_DST_ALPHA,[g_]:r.CONSTANT_COLOR,[v_]:r.ONE_MINUS_CONSTANT_COLOR,[y_]:r.CONSTANT_ALPHA,[__]:r.ONE_MINUS_CONSTANT_ALPHA};function on(U,le,ie,we,ye,be,He,st,pe,Ge){if(U===vo){S===!0&&(Ke(r.BLEND),S=!1);return}if(S===!1&&(Ne(r.BLEND),S=!0),U!==n_){if(U!==g||Ge!==F){if((A!==yo||L!==yo)&&(r.blendEquation(r.FUNC_ADD),A=yo,L=yo),Ge)switch(U){case Ia:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case em:r.blendFunc(r.ONE,r.ONE);break;case tm:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case nm:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:et("WebGLState: Invalid blending: ",U);break}else switch(U){case Ia:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case em:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case tm:et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case nm:et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:et("WebGLState: Invalid blending: ",U);break}D=null,R=null,N=null,M=null,P.set(0,0,0),V=0,g=U,F=Ge}return}ye=ye||le,be=be||ie,He=He||we,(le!==A||ye!==L)&&(r.blendEquationSeparate(yt[le],yt[ye]),A=le,L=ye),(ie!==D||we!==R||be!==N||He!==M)&&(r.blendFuncSeparate(dt[ie],dt[we],dt[be],dt[He]),D=ie,R=we,N=be,M=He),(st.equals(P)===!1||pe!==V)&&(r.blendColor(st.r,st.g,st.b,pe),P.copy(st),V=pe),g=U,F=!1}function Wt(U,le){U.side===Cr?Ke(r.CULL_FACE):Ne(r.CULL_FACE);let ie=U.side===ai;le&&(ie=!ie),an(ie),U.blending===Ia&&U.transparent===!1?on(vo):on(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),c.setFunc(U.depthFunc),c.setTest(U.depthTest),c.setMask(U.depthWrite),l.setMask(U.colorWrite);let we=U.stencilWrite;d.setTest(we),we&&(d.setMask(U.stencilWriteMask),d.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),d.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Vt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Ne(r.SAMPLE_ALPHA_TO_COVERAGE):Ke(r.SAMPLE_ALPHA_TO_COVERAGE)}function an(U){B!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),B=U)}function Ht(U){U!==e_?(Ne(r.CULL_FACE),U!==W&&(U===Kp?r.cullFace(r.BACK):U===t_?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ke(r.CULL_FACE),W=U}function $n(U){U!==Z&&(ee&&r.lineWidth(U),Z=U)}function Vt(U,le,ie){U?(Ne(r.POLYGON_OFFSET_FILL),(O!==le||Q!==ie)&&(O=le,Q=ie,c.getReversed()&&(le=-le,ie=-ie),r.polygonOffset(le,ie))):Ke(r.POLYGON_OFFSET_FILL)}function ln(U){U?Ne(r.SCISSOR_TEST):Ke(r.SCISSOR_TEST)}function Fn(U){U===void 0&&(U=r.TEXTURE0+se-1),ce!==U&&(r.activeTexture(U),ce=U)}function Yn(U,le,ie){ie===void 0&&(ce===null?ie=r.TEXTURE0+se-1:ie=ce);let we=he[ie];we===void 0&&(we={type:void 0,texture:void 0},he[ie]=we),(we.type!==U||we.texture!==le)&&(ce!==ie&&(r.activeTexture(ie),ce=ie),r.bindTexture(U,le||We[U]),we.type=U,we.texture=le)}function H(){let U=he[ce];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Un(){try{r.compressedTexImage2D(...arguments)}catch(U){et("WebGLState:",U)}}function Ct(){try{r.compressedTexImage3D(...arguments)}catch(U){et("WebGLState:",U)}}function ot(){try{r.texSubImage2D(...arguments)}catch(U){et("WebGLState:",U)}}function Ee(){try{r.texSubImage3D(...arguments)}catch(U){et("WebGLState:",U)}}function un(){try{r.compressedTexSubImage2D(...arguments)}catch(U){et("WebGLState:",U)}}function Xe(){try{r.compressedTexSubImage3D(...arguments)}catch(U){et("WebGLState:",U)}}function je(){try{r.texStorage2D(...arguments)}catch(U){et("WebGLState:",U)}}function I(){try{r.texStorage3D(...arguments)}catch(U){et("WebGLState:",U)}}function T(){try{r.texImage2D(...arguments)}catch(U){et("WebGLState:",U)}}function $(){try{r.texImage3D(...arguments)}catch(U){et("WebGLState:",U)}}function de(U){return y[U]!==void 0?y[U]:r.getParameter(U)}function ue(U,le){y[U]!==le&&(r.pixelStorei(U,le),y[U]=le)}function xe(U){re.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),re.copy(U))}function Te(U){Pe.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),Pe.copy(U))}function oe(U,le){let ie=m.get(le);ie===void 0&&(ie=new WeakMap,m.set(le,ie));let we=ie.get(U);we===void 0&&(we=r.getUniformBlockIndex(le,U.name),r.uniformBlockBinding(le,we,we),ie.set(U,we))}function ae(U,le,ie){let ye=m.get(le).get(U);p[ye]!==ie&&(r.bindBufferBase(r.UNIFORM_BUFFER,ye,ie),p[ye]=ie)}function Me(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),c.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),v={},y={},ce=null,he={},_={},p={},b=new WeakMap,x=[],C=null,S=!1,g=null,A=null,D=null,R=null,L=null,N=null,M=null,P=new rt(0,0,0),V=0,F=!1,B=null,W=null,Z=null,O=null,Q=null,re.set(0,0,r.canvas.width,r.canvas.height),Pe.set(0,0,r.canvas.width,r.canvas.height),l.reset(),c.reset(),d.reset()}return{buffers:{color:l,depth:c,stencil:d},enable:Ne,disable:Ke,bindFramebuffer:Bt,drawBuffers:qe,useProgram:Tt,setBlending:on,setMaterial:Wt,setFlipSided:an,setCullFace:Ht,setLineWidth:$n,setPolygonOffset:Vt,setScissorTest:ln,activeTexture:Fn,bindTexture:Yn,unbindTexture:H,compressedTexImage2D:Un,compressedTexImage3D:Ct,texImage2D:T,texImage3D:$,pixelStorei:ue,getParameter:de,updateUBOMapping:oe,uniformBlockBinding:ae,texStorage2D:je,texStorage3D:I,texSubImage2D:ot,texSubImage3D:Ee,compressedTexSubImage2D:un,compressedTexSubImage3D:Xe,scissor:xe,viewport:Te,reset:Me}}function YC(r,e,t,s,o,l,c){let d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new ct,v=new WeakMap,y=new Set,_,b=new WeakMap,x=new Set,C=new FinalizationRegistry(I=>x.delete(I)),S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,T){return S?new OffscreenCanvas(I,T):xa("canvas")}function A(I,T,$){let de=1,ue=je(I);if((ue.width>$||ue.height>$)&&(de=$/Math.max(ue.width,ue.height)),de<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let xe=Math.floor(de*ue.width),Te=Math.floor(de*ue.height);_===void 0&&(_=g(xe,Te));let oe=T?g(xe,Te):_;return oe.width=xe,oe.height=Te,oe.getContext("2d").drawImage(I,0,0,xe,Te),Ye("WebGLRenderer: Texture has been resized from ("+ue.width+"x"+ue.height+") to ("+xe+"x"+Te+")."),oe}else return"data"in I&&Ye("WebGLRenderer: Image in DataTexture is too big ("+ue.width+"x"+ue.height+")."),I;return I}function D(I){return I.generateMipmaps}function R(I){r.generateMipmap(I)}function L(I){return I.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?r.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function N(I,T,$,de,ue,xe=!1){if(I!==null){if(r[I]!==void 0)return r[I];Ye("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Te;de&&(Te=e.get("EXT_texture_norm16"),Te||Ye("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let oe=T;if(T===r.RED&&($===r.FLOAT&&(oe=r.R32F),$===r.HALF_FLOAT&&(oe=r.R16F),$===r.UNSIGNED_BYTE&&(oe=r.R8),$===r.UNSIGNED_SHORT&&Te&&(oe=Te.R16_EXT),$===r.SHORT&&Te&&(oe=Te.R16_SNORM_EXT)),T===r.RED_INTEGER&&($===r.UNSIGNED_BYTE&&(oe=r.R8UI),$===r.UNSIGNED_SHORT&&(oe=r.R16UI),$===r.UNSIGNED_INT&&(oe=r.R32UI),$===r.BYTE&&(oe=r.R8I),$===r.SHORT&&(oe=r.R16I),$===r.INT&&(oe=r.R32I)),T===r.RG&&($===r.FLOAT&&(oe=r.RG32F),$===r.HALF_FLOAT&&(oe=r.RG16F),$===r.UNSIGNED_BYTE&&(oe=r.RG8),$===r.UNSIGNED_SHORT&&Te&&(oe=Te.RG16_EXT),$===r.SHORT&&Te&&(oe=Te.RG16_SNORM_EXT)),T===r.RG_INTEGER&&($===r.UNSIGNED_BYTE&&(oe=r.RG8UI),$===r.UNSIGNED_SHORT&&(oe=r.RG16UI),$===r.UNSIGNED_INT&&(oe=r.RG32UI),$===r.BYTE&&(oe=r.RG8I),$===r.SHORT&&(oe=r.RG16I),$===r.INT&&(oe=r.RG32I)),T===r.RGB_INTEGER&&($===r.UNSIGNED_BYTE&&(oe=r.RGB8UI),$===r.UNSIGNED_SHORT&&(oe=r.RGB16UI),$===r.UNSIGNED_INT&&(oe=r.RGB32UI),$===r.BYTE&&(oe=r.RGB8I),$===r.SHORT&&(oe=r.RGB16I),$===r.INT&&(oe=r.RGB32I)),T===r.RGBA_INTEGER&&($===r.UNSIGNED_BYTE&&(oe=r.RGBA8UI),$===r.UNSIGNED_SHORT&&(oe=r.RGBA16UI),$===r.UNSIGNED_INT&&(oe=r.RGBA32UI),$===r.BYTE&&(oe=r.RGBA8I),$===r.SHORT&&(oe=r.RGBA16I),$===r.INT&&(oe=r.RGBA32I)),T===r.RGB&&($===r.UNSIGNED_SHORT&&Te&&(oe=Te.RGB16_EXT),$===r.SHORT&&Te&&(oe=Te.RGB16_SNORM_EXT),$===r.UNSIGNED_INT_5_9_9_9_REV&&(oe=r.RGB9_E5),$===r.UNSIGNED_INT_10F_11F_11F_REV&&(oe=r.R11F_G11F_B10F)),T===r.RGBA){let ae=xe?wl:vt.getTransfer(ue);$===r.FLOAT&&(oe=r.RGBA32F),$===r.HALF_FLOAT&&(oe=r.RGBA16F),$===r.UNSIGNED_BYTE&&(oe=ae===kt?r.SRGB8_ALPHA8:r.RGBA8),$===r.UNSIGNED_SHORT&&Te&&(oe=Te.RGBA16_EXT),$===r.SHORT&&Te&&(oe=Te.RGBA16_SNORM_EXT),$===r.UNSIGNED_SHORT_4_4_4_4&&(oe=r.RGBA4),$===r.UNSIGNED_SHORT_5_5_5_1&&(oe=r.RGB5_A1)}return(oe===r.R16F||oe===r.R32F||oe===r.RG16F||oe===r.RG32F||oe===r.RGBA16F||oe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function M(I,T){let $;return I?T===null||T===lr||T===bo?$=r.DEPTH24_STENCIL8:T===$i?$=r.DEPTH32F_STENCIL8:T===La&&($=r.DEPTH24_STENCIL8,Ye("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===lr||T===bo?$=r.DEPTH_COMPONENT24:T===$i?$=r.DEPTH_COMPONENT32F:T===La&&($=r.DEPTH_COMPONENT16),$}function P(I,T){return D(I)===!0||I.isFramebufferTexture&&I.minFilter!==Dn&&I.minFilter!==oi?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function V(I){let T=new WeakRef(I);s.get(I).__ref=T,x.add(T),C.register(I,T,T)}function F(I){let T=s.get(I).__ref;T!==void 0&&(x.delete(T),C.unregister(T))}function B(I){Z(I.target)}function W(I){O(I.target)}function Z(I){I.removeEventListener("dispose",B),F(I),se(I),I.isVideoTexture&&v.delete(I),I.isHTMLTexture&&y.delete(I)}function O(I){I.removeEventListener("dispose",W),F(I),me(I)}function Q(){for(let I of x){let T=I.deref();T!==void 0&&(T.isRenderTarget===!0?O(T):Z(T))}x.clear(),y.clear()}function se(I){let T=s.get(I);if(T.__webglInit===void 0)return;let $=I.source,de=b.get($);if(de){let ue=de[T.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&ee(I),Object.keys(de).length===0&&b.delete($)}s.remove(I)}function ee(I){let T=s.get(I);r.deleteTexture(T.__webglTexture);let $=I.source,de=b.get($);delete de[T.__cacheKey],c.memory.textures--}function me(I){let T=s.get(I);T.__depthDisposeCallback&&T.__depthDisposeCallback();let $=I.depthTexture;if($&&$.renderTarget===I&&Z($),I.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(T.__webglFramebuffer[ue]))for(let xe=0;xe<T.__webglFramebuffer[ue].length;xe++)r.deleteFramebuffer(T.__webglFramebuffer[ue][xe]);else r.deleteFramebuffer(T.__webglFramebuffer[ue]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[ue])}else{if(Array.isArray(T.__webglFramebuffer))for(let ue=0;ue<T.__webglFramebuffer.length;ue++)r.deleteFramebuffer(T.__webglFramebuffer[ue]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ue=0;ue<T.__webglColorRenderbuffer.length;ue++)T.__webglColorRenderbuffer[ue]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[ue]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let de=I.textures;for(let ue=0,xe=de.length;ue<xe;ue++){let Te=s.get(de[ue]);Te.__webglTexture&&(r.deleteTexture(Te.__webglTexture),c.memory.textures--),s.remove(de[ue])}s.remove(I)}let ne=0;function ce(){ne=0}function he(){return ne}function Be(I){ne=I}function Ve(){let I=ne;return I>=o.maxTextures&&Ye("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+o.maxTextures),ne+=1,I}function re(I){let T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.mipmapsAutoUpdate),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.colorSpace),T.join()}function Pe(I,T){let $=s.get(I);if(I.isVideoTexture&&un(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&$.__version!==I.version){let de=I.image;if(de===null)Ye("WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)Ye("WebGLRenderer: Texture marked for update but image is incomplete");else{Wt($,I,T);return}}else I.isExternalTexture&&($.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,$.__webglTexture,r.TEXTURE0+T)}function ke(I,T){let $=s.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&$.__version!==I.version){Wt($,I,T);return}else I.isExternalTexture&&($.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,$.__webglTexture,r.TEXTURE0+T)}function We(I,T){let $=s.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&$.__version!==I.version){Wt($,I,T);return}t.bindTexture(r.TEXTURE_3D,$.__webglTexture,r.TEXTURE0+T)}function Ne(I,T){let $=s.get(I);if(I.version>0&&$.__version!==I.version){an($,I,T);return}t.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture,r.TEXTURE0+T)}let Ke={[Jc]:r.REPEAT,[Mr]:r.CLAMP_TO_EDGE,[Kc]:r.MIRRORED_REPEAT},Bt={[Dn]:r.NEAREST,[x_]:r.NEAREST_MIPMAP_NEAREST,[$l]:r.NEAREST_MIPMAP_LINEAR,[oi]:r.LINEAR,[Af]:r.LINEAR_MIPMAP_NEAREST,[ts]:r.LINEAR_MIPMAP_LINEAR},qe={[E_]:r.NEVER,[Sm]:r.ALWAYS,[A_]:r.LESS,[_m]:r.LEQUAL,[C_]:r.EQUAL,[bm]:r.GEQUAL,[R_]:r.GREATER,[P_]:r.NOTEQUAL};function Tt(I,T){if(T.type===$i&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===oi||T.magFilter===Af||T.magFilter===$l||T.magFilter===ts||T.minFilter===oi||T.minFilter===Af||T.minFilter===$l||T.minFilter===ts)&&Ye("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(I,r.TEXTURE_WRAP_S,Ke[T.wrapS]),r.texParameteri(I,r.TEXTURE_WRAP_T,Ke[T.wrapT]),(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)&&r.texParameteri(I,r.TEXTURE_WRAP_R,Ke[T.wrapR]),r.texParameteri(I,r.TEXTURE_MAG_FILTER,Bt[T.magFilter]),r.texParameteri(I,r.TEXTURE_MIN_FILTER,Bt[T.minFilter]),T.compareFunction&&(r.texParameteri(I,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(I,r.TEXTURE_COMPARE_FUNC,qe[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Dn||T.minFilter!==$l&&T.minFilter!==ts||T.type===$i&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){let $=e.get("EXT_texture_filter_anisotropic");r.texParameterf(I,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function yt(I,T){let $=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",B),V(T));let de=T.source,ue=b.get(de);ue===void 0&&(ue={},b.set(de,ue));let xe=re(T);if(xe!==I.__cacheKey){ue[xe]===void 0&&(ue[xe]={texture:r.createTexture(),usedTimes:0},c.memory.textures++,$=!0),ue[xe].usedTimes++;let Te=ue[I.__cacheKey];Te!==void 0&&(ue[I.__cacheKey].usedTimes--,Te.usedTimes===0&&ee(T)),I.__cacheKey=xe,I.__webglTexture=ue[xe].texture}return $}function dt(I,T,$){return Math.floor(Math.floor(I/$)/T)}function on(I,T,$,de){let xe=I.updateRanges;if(xe.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,$,de,T.data);else{xe.sort((U,le)=>U.start-le.start);let Te=0;for(let U=1;U<xe.length;U++){let le=xe[Te],ie=xe[U],we=le.start+le.count,ye=dt(ie.start,T.width,4),be=dt(le.start,T.width,4);ie.start<=we+1&&ye===be&&dt(ie.start+ie.count-1,T.width,4)===ye?le.count=Math.max(le.count,ie.start+ie.count-le.start):(++Te,xe[Te]=ie)}xe.length=Te+1;let oe=t.getParameter(r.UNPACK_ROW_LENGTH),ae=t.getParameter(r.UNPACK_SKIP_PIXELS),Me=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let U=0,le=xe.length;U<le;U++){let ie=xe[U],we=Math.floor(ie.start/4),ye=Math.ceil(ie.count/4),be=we%T.width,He=Math.floor(we/T.width),st=ye,pe=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,be),t.pixelStorei(r.UNPACK_SKIP_ROWS,He),t.texSubImage2D(r.TEXTURE_2D,0,be,He,st,pe,$,de,T.data)}I.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,oe),t.pixelStorei(r.UNPACK_SKIP_PIXELS,ae),t.pixelStorei(r.UNPACK_SKIP_ROWS,Me)}}function Wt(I,T,$){let de=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(de=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(de=r.TEXTURE_3D);let ue=yt(I,T),xe=T.source;t.bindTexture(de,I.__webglTexture,r.TEXTURE0+$);let Te=s.get(xe);if(xe.version!==Te.__version||ue===!0){if(t.activeTexture(r.TEXTURE0+$),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let pe=vt.getPrimaries(vt.workingColorSpace),Ge=T.colorSpace===is?null:vt.getPrimaries(T.colorSpace),it=T.colorSpace===is||pe===Ge?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,it)}t.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment);let ae=A(T.image,!1,o.maxTextureSize);ae=Xe(T,ae);let Me=l.convert(T.format,T.colorSpace),U=l.convert(T.type),le=N(T.internalFormat,Me,U,T.normalized,T.colorSpace,T.isVideoTexture);Tt(de,T);let ie,we=T.mipmaps,ye=T.isVideoTexture!==!0,be=Te.__version===void 0||ue===!0,He=xe.dataReady,st=P(T,ae);if(T.isDepthTexture)le=M(T.format===ns,T.type),be&&(ye?t.texStorage2D(r.TEXTURE_2D,1,le,ae.width,ae.height):t.texImage2D(r.TEXTURE_2D,0,le,ae.width,ae.height,0,Me,U,null));else if(T.isDataTexture)if(we.length>0){ye&&be&&t.texStorage2D(r.TEXTURE_2D,st,le,we[0].width,we[0].height);for(let pe=0,Ge=we.length;pe<Ge;pe++)ie=we[pe],ye?He&&t.texSubImage2D(r.TEXTURE_2D,pe,0,0,ie.width,ie.height,Me,U,ie.data):t.texImage2D(r.TEXTURE_2D,pe,le,ie.width,ie.height,0,Me,U,ie.data);T.generateMipmaps=!1}else ye?(be&&t.texStorage2D(r.TEXTURE_2D,st,le,ae.width,ae.height),He&&on(T,ae,Me,U)):t.texImage2D(r.TEXTURE_2D,0,le,ae.width,ae.height,0,Me,U,ae.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ye&&be&&t.texStorage3D(r.TEXTURE_2D_ARRAY,st,le,we[0].width,we[0].height,ae.depth);for(let pe=0,Ge=we.length;pe<Ge;pe++)if(ie=we[pe],T.format!==Ni)if(Me!==null)if(ye){if(He)if(T.layerUpdates.size>0){let it=Cm(ie.width,ie.height,T.format,T.type);for(let Ae of T.layerUpdates){let Rt=ie.data.subarray(Ae*it/ie.data.BYTES_PER_ELEMENT,(Ae+1)*it/ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,pe,0,0,Ae,ie.width,ie.height,1,Me,Rt)}}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,pe,0,0,0,ie.width,ie.height,ae.depth,Me,ie.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,pe,le,ie.width,ie.height,ae.depth,0,ie.data,0,0);else Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ye?He&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,pe,0,0,0,ie.width,ie.height,ae.depth,Me,U,ie.data):t.texImage3D(r.TEXTURE_2D_ARRAY,pe,le,ie.width,ie.height,ae.depth,0,Me,U,ie.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{ye&&be&&t.texStorage2D(r.TEXTURE_2D,st,le,we[0].width,we[0].height);for(let pe=0,Ge=we.length;pe<Ge;pe++)ie=we[pe],T.format!==Ni?Me!==null?ye?He&&t.compressedTexSubImage2D(r.TEXTURE_2D,pe,0,0,ie.width,ie.height,Me,ie.data):t.compressedTexImage2D(r.TEXTURE_2D,pe,le,ie.width,ie.height,0,ie.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ye?He&&t.texSubImage2D(r.TEXTURE_2D,pe,0,0,ie.width,ie.height,Me,U,ie.data):t.texImage2D(r.TEXTURE_2D,pe,le,ie.width,ie.height,0,Me,U,ie.data)}else if(T.isDataArrayTexture)if(ye){if(be&&t.texStorage3D(r.TEXTURE_2D_ARRAY,st,le,ae.width,ae.height,ae.depth),He)if(T.layerUpdates.size>0){let pe=Cm(ae.width,ae.height,T.format,T.type);for(let Ge of T.layerUpdates){let it=ae.data.subarray(Ge*pe/ae.data.BYTES_PER_ELEMENT,(Ge+1)*pe/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Ge,ae.width,ae.height,1,Me,U,it)}T.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Me,U,ae.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,le,ae.width,ae.height,ae.depth,0,Me,U,ae.data);else if(T.isData3DTexture)ye?(be&&t.texStorage3D(r.TEXTURE_3D,st,le,ae.width,ae.height,ae.depth),He&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Me,U,ae.data)):t.texImage3D(r.TEXTURE_3D,0,le,ae.width,ae.height,ae.depth,0,Me,U,ae.data);else if(T.isFramebufferTexture){if(be)if(ye)t.texStorage2D(r.TEXTURE_2D,st,le,ae.width,ae.height);else{let pe=ae.width,Ge=ae.height;for(let it=0;it<st;it++)t.texImage2D(r.TEXTURE_2D,it,le,pe,Ge,0,Me,U,null),pe>>=1,Ge>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in r){let pe=r.canvas;if(pe.hasAttribute("layoutsubtree")||pe.setAttribute("layoutsubtree","true"),ae.parentNode!==pe){pe.appendChild(ae),y.add(T),pe.onpaint=Ge=>{let it=Ge.changedElements;for(let Ae of y)it.includes(Ae.image)&&(Ae.needsUpdate=!0)},pe.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,ae);else{let it=r.RGBA,Ae=r.RGBA,Rt=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,it,Ae,Rt,ae)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(we.length>0){if(ye&&be){let pe=je(we[0]);t.texStorage2D(r.TEXTURE_2D,st,le,pe.width,pe.height)}for(let pe=0,Ge=we.length;pe<Ge;pe++)ie=we[pe],ye?He&&t.texSubImage2D(r.TEXTURE_2D,pe,0,0,Me,U,ie):t.texImage2D(r.TEXTURE_2D,pe,le,Me,U,ie);T.generateMipmaps=!1}else if(ye){if(be){let pe=je(ae);t.texStorage2D(r.TEXTURE_2D,st,le,pe.width,pe.height)}He&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Me,U,ae)}else t.texImage2D(r.TEXTURE_2D,0,le,Me,U,ae);D(T)&&T.mipmapsAutoUpdate===!0&&R(de),Te.__version=xe.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function an(I,T,$){if(T.image.length!==6)return;let de=yt(I,T),ue=T.source;t.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+$);let xe=s.get(ue);if(ue.version!==xe.__version||de===!0){t.activeTexture(r.TEXTURE0+$);let Te=vt.getPrimaries(vt.workingColorSpace),oe=T.colorSpace===is?null:vt.getPrimaries(T.colorSpace),ae=T.colorSpace===is||Te===oe?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let Me=T.isCompressedTexture||T.image[0].isCompressedTexture,U=T.image[0]&&T.image[0].isDataTexture,le=[];for(let Ae=0;Ae<6;Ae++)!Me&&!U?le[Ae]=A(T.image[Ae],!0,o.maxCubemapSize):le[Ae]=U?T.image[Ae].image:T.image[Ae],le[Ae]=Xe(T,le[Ae]);let ie=le[0],we=l.convert(T.format,T.colorSpace),ye=l.convert(T.type),be=N(T.internalFormat,we,ye,T.normalized,T.colorSpace),He=T.isVideoTexture!==!0,st=xe.__version===void 0||de===!0,pe=ue.dataReady,Ge=P(T,ie);Tt(r.TEXTURE_CUBE_MAP,T);let it;if(T.isDepthTexture){if(be=M(T.format===ns,T.type),st)if(He)t.texStorage2D(r.TEXTURE_CUBE_MAP,1,be,ie.width,ie.height);else for(let Ae=0;Ae<6;Ae++)t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,be,ie.width,ie.height,0,we,ye,null)}else if(Me){He&&st&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ge,be,ie.width,ie.height);for(let Ae=0;Ae<6;Ae++){it=le[Ae].mipmaps;for(let Rt=0;Rt<it.length;Rt++){let dn=it[Rt];T.format!==Ni?we!==null?He?pe&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Rt,0,0,dn.width,dn.height,we,dn.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Rt,be,dn.width,dn.height,0,dn.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Rt,0,0,dn.width,dn.height,we,ye,dn.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Rt,be,dn.width,dn.height,0,we,ye,dn.data)}}}else{if(it=T.mipmaps,He&&st){it.length>0&&Ge++;let Ae=je(le[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Ge,be,Ae.width,Ae.height)}for(let Ae=0;Ae<6;Ae++)if(U){He?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,le[Ae].width,le[Ae].height,we,ye,le[Ae].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,be,le[Ae].width,le[Ae].height,0,we,ye,le[Ae].data);for(let Rt=0;Rt<it.length;Rt++){let vi=it[Rt].image[Ae].image;He?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Rt+1,0,0,vi.width,vi.height,we,ye,vi.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Rt+1,be,vi.width,vi.height,0,we,ye,vi.data)}}else{He?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,we,ye,le[Ae]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,be,we,ye,le[Ae]);for(let Rt=0;Rt<it.length;Rt++){let dn=it[Rt];He?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Rt+1,0,0,we,ye,dn.image[Ae]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Rt+1,be,we,ye,dn.image[Ae])}}}D(T)&&T.mipmapsAutoUpdate===!0&&R(r.TEXTURE_CUBE_MAP),xe.__version=ue.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function Ht(I,T,$,de,ue,xe){let Te=l.convert($.format,$.colorSpace),oe=l.convert($.type),ae=N($.internalFormat,Te,oe,$.normalized,$.colorSpace),Me=s.get(T),U=s.get($);if(U.__renderTarget=T,!Me.__hasExternalTextures){let le=Math.max(1,T.width>>xe),ie=Math.max(1,T.height>>xe);ue===r.TEXTURE_3D||ue===r.TEXTURE_2D_ARRAY?t.texImage3D(ue,xe,ae,le,ie,T.depth,0,Te,oe,null):t.texImage2D(ue,xe,ae,le,ie,0,Te,oe,null)}t.bindFramebuffer(r.FRAMEBUFFER,I),Ee(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,de,ue,U.__webglTexture,0,ot(T)):(ue===r.TEXTURE_2D||ue>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,de,ue,U.__webglTexture,xe),t.bindFramebuffer(r.FRAMEBUFFER,null)}function $n(I,T,$){if(r.bindRenderbuffer(r.RENDERBUFFER,I),T.depthBuffer){let de=T.depthTexture,ue=de&&de.isDepthTexture?de.type:null,xe=M(T.stencilBuffer,ue),Te=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Ee(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ot(T),xe,T.width,T.height):$?r.renderbufferStorageMultisample(r.RENDERBUFFER,ot(T),xe,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,xe,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Te,r.RENDERBUFFER,I)}else{let de=T.textures;for(let ue=0;ue<de.length;ue++){let xe=de[ue],Te=l.convert(xe.format,xe.colorSpace),oe=l.convert(xe.type),ae=N(xe.internalFormat,Te,oe,xe.normalized,xe.colorSpace);Ee(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ot(T),ae,T.width,T.height):$?r.renderbufferStorageMultisample(r.RENDERBUFFER,ot(T),ae,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,ae,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Vt(I,T,$){let de=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ue=s.get(T.depthTexture);ue.__renderTarget=T;let xe=de?T.depthTexture.image[0]:T.depthTexture.image;(!ue.__webglTexture||xe.width!==T.width||xe.height!==T.height)&&(xe.width=T.width,xe.height=T.height,T.depthTexture.needsUpdate=!0),de?Ne(T.depthTexture,0):Pe(T.depthTexture,0);let Te=ue.__webglTexture,oe=ot(T),ae=de?r.TEXTURE_CUBE_MAP_POSITIVE_X+$:r.TEXTURE_2D,Me=T.depthTexture.format===ns?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(T.depthTexture.format===jr)Ee(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Me,ae,Te,0,oe):r.framebufferTexture2D(r.FRAMEBUFFER,Me,ae,Te,0);else if(T.depthTexture.format===ns)Ee(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Me,ae,Te,0,oe):r.framebufferTexture2D(r.FRAMEBUFFER,Me,ae,Te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ln(I){let T=s.get(I),$=I.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==I.depthTexture){let de=I.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),de){let ue=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,de.removeEventListener("dispose",ue)};de.addEventListener("dispose",ue),T.__depthDisposeCallback=ue}T.__boundDepthTexture=de}if(I.depthTexture&&!T.__autoAllocateDepthBuffer)if($)for(let de=0;de<6;de++)Vt(T.__webglFramebuffer[de],I,de);else I.texture.mipmaps.length>0?Vt(T.__webglFramebuffer[0],I,0):Vt(T.__webglFramebuffer,I,0);else if($){T.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[de]),T.__webglDepthbuffer[de]===void 0)T.__webglDepthbuffer[de]=r.createRenderbuffer(),$n(T.__webglDepthbuffer[de],I,!1);else{let ue=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,xe=T.__webglDepthbuffer[de];r.bindRenderbuffer(r.RENDERBUFFER,xe),r.framebufferRenderbuffer(r.FRAMEBUFFER,ue,r.RENDERBUFFER,xe)}}else if(I.texture.mipmaps.length>0?t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),$n(T.__webglDepthbuffer,I,!1);else{let ue=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,xe=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,xe),r.framebufferRenderbuffer(r.FRAMEBUFFER,ue,r.RENDERBUFFER,xe)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Fn(I,T,$){let de=s.get(I);T!==void 0&&Ht(de.__webglFramebuffer,I,I.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),$!==void 0&&ln(I)}function Yn(I){let T=I.texture,$=s.get(I),de=s.get(T);I.addEventListener("dispose",W),V(I);let ue=I.textures,xe=I.isWebGLCubeRenderTarget===!0,Te=ue.length>1;if(Te||(de.__webglTexture===void 0&&(de.__webglTexture=r.createTexture()),de.__version=T.version,c.memory.textures++),xe){$.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(T.mipmaps.length>0){$.__webglFramebuffer[oe]=[];for(let ae=0;ae<T.mipmaps.length;ae++)$.__webglFramebuffer[oe][ae]=r.createFramebuffer()}else $.__webglFramebuffer[oe]=r.createFramebuffer()}else{if(T.mipmaps.length>0){$.__webglFramebuffer=[];for(let oe=0;oe<T.mipmaps.length;oe++)$.__webglFramebuffer[oe]=r.createFramebuffer()}else $.__webglFramebuffer=r.createFramebuffer();if(Te)for(let oe=0,ae=ue.length;oe<ae;oe++){let Me=s.get(ue[oe]);Me.__webglTexture===void 0&&(Me.__webglTexture=r.createTexture(),c.memory.textures++)}if(I.samples>0&&Ee(I)===!1){$.__webglMultisampledFramebuffer=r.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let oe=0;oe<ue.length;oe++){let ae=ue[oe];$.__webglColorRenderbuffer[oe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,$.__webglColorRenderbuffer[oe]);let Me=l.convert(ae.format,ae.colorSpace),U=l.convert(ae.type),le=N(ae.internalFormat,Me,U,ae.normalized,ae.colorSpace,I.isXRRenderTarget===!0),ie=ot(I);r.renderbufferStorageMultisample(r.RENDERBUFFER,ie,le,I.width,I.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.RENDERBUFFER,$.__webglColorRenderbuffer[oe])}r.bindRenderbuffer(r.RENDERBUFFER,null),I.depthBuffer&&($.__webglDepthRenderbuffer=r.createRenderbuffer(),$n($.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(xe){t.bindTexture(r.TEXTURE_CUBE_MAP,de.__webglTexture),Tt(r.TEXTURE_CUBE_MAP,T);for(let oe=0;oe<6;oe++)if(T.mipmaps.length>0)for(let ae=0;ae<T.mipmaps.length;ae++)Ht($.__webglFramebuffer[oe][ae],I,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ae);else Ht($.__webglFramebuffer[oe],I,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);D(T)?R(r.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}else if(Te){for(let oe=0,ae=ue.length;oe<ae;oe++){let Me=ue[oe],U=s.get(Me),le=r.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(le=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(le,U.__webglTexture),Tt(le,Me),Ht($.__webglFramebuffer,I,Me,r.COLOR_ATTACHMENT0+oe,le,0),D(Me)&&R(le)}t.unbindTexture()}else{let oe=r.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(oe=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(oe,de.__webglTexture),Tt(oe,T),T.mipmaps.length>0)for(let ae=0;ae<T.mipmaps.length;ae++)Ht($.__webglFramebuffer[ae],I,T,r.COLOR_ATTACHMENT0,oe,ae);else Ht($.__webglFramebuffer,I,T,r.COLOR_ATTACHMENT0,oe,0);D(T)?R(oe):T.mipmaps.length>0&&r.texParameteri(oe,r.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}I.depthBuffer&&ln(I)}function H(I){let T=I.textures;for(let $=0,de=T.length;$<de;$++){let ue=T[$];if(D(ue)&&ue.mipmapsAutoUpdate===!0){let xe=L(I),Te=s.get(ue).__webglTexture;t.bindTexture(xe,Te),R(xe),t.unbindTexture()}}}let Un=[];function Ct(I){if(I.samples>0){if(Ee(I)===!1){let T=I.textures,$=I.width,de=I.height,ue=r.COLOR_BUFFER_BIT,xe=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Te=s.get(I),oe=T.length>1;if(oe)for(let Me=0;Me<T.length;Me++)t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),I.texture.mipmaps.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Me=0;Me<T.length;Me++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ue|=r.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ue|=r.STENCIL_BUFFER_BIT)),oe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Te.__webglColorRenderbuffer[Me]);let U=s.get(T[Me]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,U,0)}r.blitFramebuffer(0,0,$,de,0,0,$,de,ue,r.NEAREST),p===!0&&(Un.length=0,Un.push(r.COLOR_ATTACHMENT0+Me),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&Un.push(xe),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Un))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),oe)for(let Me=0;Me<T.length;Me++){t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.RENDERBUFFER,Te.__webglColorRenderbuffer[Me]);let U=s.get(T[Me]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.TEXTURE_2D,U,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&p){let T=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function ot(I){return Math.min(o.maxSamples,I.samples)}function Ee(I){let T=s.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function un(I){let T=c.render.frame;v.get(I)!==T&&(v.set(I,T),I.update())}function Xe(I,T){let $=I.colorSpace,de=I.format,ue=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||$!==uo&&$!==is&&(vt.getTransfer($)===kt?(de!==Ni||ue!==ei)&&Ye("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):et("WebGLTextures: Unsupported texture color space:",$)),T}function je(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(m.width=I.naturalWidth||I.width,m.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(m.width=I.displayWidth,m.height=I.displayHeight):(m.width=I.width,m.height=I.height),m}this.allocateTextureUnit=Ve,this.resetTextureUnits=ce,this.getTextureUnits=he,this.setTextureUnits=Be,this.setTexture2D=Pe,this.setTexture2DArray=ke,this.setTexture3D=We,this.setTextureCube=Ne,this.rebindTextures=Fn,this.setupRenderTarget=Yn,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=ln,this.setupFrameBufferTexture=Ht,this.useMultisampledRTT=Ee,this.dispose=Q}function jC(r,e){function t(s,o=is){let l,c=vt.getTransfer(o);if(s===ei)return r.UNSIGNED_BYTE;if(s===Rf)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Pf)return r.UNSIGNED_SHORT_5_5_5_1;if(s===mm)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===gm)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===hm)return r.BYTE;if(s===pm)return r.SHORT;if(s===La)return r.UNSIGNED_SHORT;if(s===Cf)return r.INT;if(s===lr)return r.UNSIGNED_INT;if(s===$i)return r.FLOAT;if(s===ur)return r.HALF_FLOAT;if(s===vm)return r.ALPHA;if(s===ym)return r.RGB;if(s===Ni)return r.RGBA;if(s===jr)return r.DEPTH_COMPONENT;if(s===ns)return r.DEPTH_STENCIL;if(s===If)return r.RED;if(s===Nf)return r.RED_INTEGER;if(s===Fs)return r.RG;if(s===Lf)return r.RG_INTEGER;if(s===Df)return r.RGBA_INTEGER;if(s===Yl||s===jl||s===Zl||s===Jl)if(c===kt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===Yl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===jl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Zl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Jl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===Yl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===jl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Zl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Jl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===kf||s===Ff||s===Uf||s===Of)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===kf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ff)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Uf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Of)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===zf||s===Bf||s===Hf||s===Vf||s===Gf||s===Kl||s===Wf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===zf||s===Bf)return c===kt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===Hf)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(s===Vf)return l.COMPRESSED_R11_EAC;if(s===Gf)return l.COMPRESSED_SIGNED_R11_EAC;if(s===Kl)return l.COMPRESSED_RG11_EAC;if(s===Wf)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Xf||s===qf||s===$f||s===Yf||s===jf||s===Zf||s===Jf||s===Kf||s===Qf||s===ed||s===td||s===nd||s===id||s===rd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===Xf)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===qf)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===$f)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Yf)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===jf)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Zf)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Jf)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Kf)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Qf)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ed)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===td)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===nd)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===id)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===rd)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===sd||s===od||s===ad)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===sd)return c===kt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===od)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===ad)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===ld||s===ud||s===Ql||s===cd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===ld)return l.COMPRESSED_RED_RGTC1_EXT;if(s===ud)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ql)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===cd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===bo?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:t}}var ZC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,JC=`
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

}`,Vm=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let s=new Fl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,s=new qi({vertexShader:ZC,fragmentShader:JC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new mi(new ho(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Gm=class extends wr{constructor(e,t){super();let s=this,o=null,l=1,c=null,d="local-floor",p=1,m=null,v=null,y=null,_=null,b=null,x=null,C=typeof XRWebGLBinding<"u",S=new Vm,g={},A=t.getContextAttributes(),D=null,R=null,L=[],N=[],M=new ct,P=null,V=null,F=new si;F.viewport=new Zt;let B=new si;B.viewport=new Zt;let W=[F,B],Z=new Mf,O=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let Pe=L[re];return Pe===void 0&&(Pe=new Ta,L[re]=Pe),Pe.getTargetRaySpace()},this.getControllerGrip=function(re){let Pe=L[re];return Pe===void 0&&(Pe=new Ta,L[re]=Pe),Pe.getGripSpace()},this.getHand=function(re){let Pe=L[re];return Pe===void 0&&(Pe=new Ta,L[re]=Pe),Pe.getHandSpace()};function se(re){let Pe=N.indexOf(re.inputSource);if(Pe===-1)return;let ke=L[Pe];ke!==void 0&&(ke.update(re.inputSource,re.frame,m||c),ke.dispatchEvent({type:re.type,data:re.inputSource}))}function ee(){o.removeEventListener("select",se),o.removeEventListener("selectstart",se),o.removeEventListener("selectend",se),o.removeEventListener("squeeze",se),o.removeEventListener("squeezestart",se),o.removeEventListener("squeezeend",se),o.removeEventListener("end",ee),o.removeEventListener("inputsourceschange",me);for(let re=0;re<L.length;re++){let Pe=N[re];Pe!==null&&(N[re]=null,L[re].disconnect(Pe))}O=null,Q=null,S.reset();for(let re in g)delete g[re];if(e.setRenderTarget(D),b=null,_=null,y=null,o=null,R=null,Ve.stop(),s.isPresenting=!1,e.setPixelRatio(P),e.setSize(M.width,M.height,!1),V!==null){let re=V.camera;re.fov=V.fov,re.zoom=V.zoom,re.updateProjectionMatrix(),V=null}s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){l=re,s.isPresenting===!0&&Ye("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){d=re,s.isPresenting===!0&&Ye("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||c},this.setReferenceSpace=function(re){m=re},this.getBaseLayer=function(){return _!==null?_:b},this.getBinding=function(){return y===null&&C&&(y=new XRWebGLBinding(o,t)),y},this.getFrame=function(){return x},this.getSession=function(){return o},this.setSession=async function(re){if(o=re,o!==null){if(D=e.getRenderTarget(),o.addEventListener("select",se),o.addEventListener("selectstart",se),o.addEventListener("selectend",se),o.addEventListener("squeeze",se),o.addEventListener("squeezestart",se),o.addEventListener("squeezeend",se),o.addEventListener("end",ee),o.addEventListener("inputsourceschange",me),A.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(M),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let ke=null,We=null,Ne=null;A.depth&&(Ne=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ke=A.stencil?ns:jr,We=A.stencil?bo:lr);let Ke={colorFormat:t.RGBA8,depthFormat:Ne,scaleFactor:l};y=this.getBinding(),_=y.createProjectionLayer(Ke),o.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),R=new Pi(_.textureWidth,_.textureHeight,{format:Ni,type:ei,depthTexture:new es(_.textureWidth,_.textureHeight,We,void 0,void 0,void 0,void 0,void 0,void 0,ke),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}else{let ke={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:l};b=new XRWebGLLayer(o,t,ke),o.updateRenderState({baseLayer:b}),e.setPixelRatio(1),e.setSize(b.framebufferWidth,b.framebufferHeight,!1),R=new Pi(b.framebufferWidth,b.framebufferHeight,{format:Ni,type:ei,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1,storeMultisampledDepthBuffer:b.ignoreDepthValues===!1,storeMultisampledStencilBuffer:b.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(p),m=null,c=await o.requestReferenceSpace(d),Ve.setContext(o),Ve.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function me(re){for(let Pe=0;Pe<re.removed.length;Pe++){let ke=re.removed[Pe],We=N.indexOf(ke);We>=0&&(N[We]=null,L[We].disconnect(ke))}for(let Pe=0;Pe<re.added.length;Pe++){let ke=re.added[Pe],We=N.indexOf(ke);if(We===-1){for(let Ke=0;Ke<L.length;Ke++)if(Ke>=N.length){N.push(ke),We=Ke;break}else if(N[Ke]===null){N[Ke]=ke,We=Ke;break}if(We===-1)break}let Ne=L[We];Ne&&Ne.connect(ke)}}function ne(re,Pe){Pe===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(Pe.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(o===null)return;let Pe=re.near,ke=re.far;S.texture!==null&&(S.depthNear>0&&(Pe=S.depthNear),S.depthFar>0&&(ke=S.depthFar)),Z.near=B.near=F.near=Pe,Z.far=B.far=F.far=ke,(O!==Z.near||Q!==Z.far)&&(o.updateRenderState({depthNear:Z.near,depthFar:Z.far}),O=Z.near,Q=Z.far),Z.layers.mask=re.layers.mask|6,F.layers.mask=Z.layers.mask&-5,B.layers.mask=Z.layers.mask&-3;let We=re.parent,Ne=Z.cameras;ne(Z,We);for(let Ke=0;Ke<Ne.length;Ke++)ne(Ne[Ke],We);Z.projectionMatrix.copy(F.projectionMatrix),Z.projectionMatrixInverse.copy(F.projectionMatrixInverse),V===null&&re.isPerspectiveCamera&&(V={camera:re,fov:re.fov,zoom:re.zoom}),ce(re,Z,We)};function ce(re,Pe,ke){ke===null?re.matrix.copy(Pe.matrixWorld):(re.matrix.copy(ke.matrixWorld),re.matrix.invert(),re.matrix.multiply(Pe.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(Pe.projectionMatrix),re.projectionMatrixInverse.copy(Pe.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=ef*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(_===null&&b===null))return p},this.setFoveation=function(re){p=re,_!==null&&(_.fixedFoveation=re),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=re)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(Z)},this.getCameraTexture=function(re){return g[re]};let he=null;function Be(re,Pe){if(v=Pe.getViewerPose(m||c),x=Pe,v!==null){let ke=v.views;b!==null&&(e.setRenderTargetFramebuffer(R,b.framebuffer),e.setRenderTarget(R));let We=!1;ke.length!==Z.cameras.length&&(Z.cameras.length=0,We=!0);for(let qe=0;qe<ke.length;qe++){let Tt=ke[qe],yt=null;if(b!==null)yt=b.getViewport(Tt);else{let on=y.getViewSubImage(_,Tt);yt=on.viewport,qe===0&&(e.setRenderTargetTextures(R,on.colorTexture,on.depthStencilTexture),e.setRenderTarget(R))}let dt=W[qe];dt===void 0&&(dt=new si,dt.layers.enable(qe),dt.viewport=new Zt,W[qe]=dt),dt.matrix.fromArray(Tt.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(Tt.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(yt.x,yt.y,yt.width,yt.height),qe===0&&(Z.matrix.copy(dt.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),We===!0&&Z.cameras.push(dt)}let Ne=o.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&C){y=s.getBinding();let qe=y.getDepthInformation(ke[0]);qe&&qe.isValid&&qe.texture&&S.init(qe,o.renderState)}if(Ne&&Ne.includes("camera-access")&&C){e.state.unbindTexture(),y=s.getBinding();for(let qe=0;qe<ke.length;qe++){let Tt=ke[qe].camera;if(Tt){let yt=g[Tt];yt||(yt=new Fl,g[Tt]=yt);let dt=y.getCameraImage(Tt);yt.sourceTexture=dt}}}}for(let ke=0;ke<L.length;ke++){let We=N[ke],Ne=L[ke];We!==null&&Ne!==void 0&&Ne.update(We,Pe,m||c)}he&&he(re,Pe),Pe.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Pe}),x=null}let Ve=new lb;Ve.setAnimationLoop(Be),this.setAnimationLoop=function(re){he=re},this.dispose=function(){}}},KC=new Ut,yb=new tt;yb.set(-1,0,0,0,1,0,0,0,1);function QC(r,e){function t(S,g){S.matrixAutoUpdate===!0&&S.updateMatrix(),g.value.copy(S.matrix)}function s(S,g){g.color.getRGB(S.fogColor.value,Tm(r)),g.isFog?(S.fogNear.value=g.near,S.fogFar.value=g.far):g.isFogExp2&&(S.fogDensity.value=g.density)}function o(S,g,A,D,R){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?l(S,g):g.isMeshLambertMaterial?(l(S,g),g.envMap&&(S.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(l(S,g),y(S,g)):g.isMeshPhongMaterial?(l(S,g),v(S,g),g.envMap&&(S.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(l(S,g),_(S,g),g.isMeshPhysicalMaterial&&b(S,g,R)):g.isMeshMatcapMaterial?(l(S,g),x(S,g)):g.isMeshDepthMaterial?l(S,g):g.isMeshDistanceMaterial?(l(S,g),C(S,g)):g.isMeshNormalMaterial?l(S,g):g.isLineBasicMaterial?(c(S,g),g.isLineDashedMaterial&&d(S,g)):g.isPointsMaterial?p(S,g,A,D):g.isSpriteMaterial?m(S,g):g.isShadowMaterial?(S.color.value.copy(g.color),S.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function l(S,g){S.opacity.value=g.opacity,g.color&&S.diffuse.value.copy(g.color),g.emissive&&S.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(S.map.value=g.map,t(g.map,S.mapTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,t(g.alphaMap,S.alphaMapTransform)),g.bumpMap&&(S.bumpMap.value=g.bumpMap,t(g.bumpMap,S.bumpMapTransform),S.bumpScale.value=g.bumpScale,g.side===ai&&(S.bumpScale.value*=-1)),g.normalMap&&(S.normalMap.value=g.normalMap,t(g.normalMap,S.normalMapTransform),S.normalScale.value.copy(g.normalScale),g.side===ai&&S.normalScale.value.negate()),g.displacementMap&&(S.displacementMap.value=g.displacementMap,t(g.displacementMap,S.displacementMapTransform),S.displacementScale.value=g.displacementScale,S.displacementBias.value=g.displacementBias),g.emissiveMap&&(S.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,S.emissiveMapTransform)),g.specularMap&&(S.specularMap.value=g.specularMap,t(g.specularMap,S.specularMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest);let A=e.get(g),D=A.envMap,R=A.envMapRotation;D&&(S.envMap.value=D,S.envMapRotation.value.setFromMatrix4(KC.makeRotationFromEuler(R)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(yb),S.reflectivity.value=g.reflectivity,S.ior.value=g.ior,S.refractionRatio.value=g.refractionRatio),g.lightMap&&(S.lightMap.value=g.lightMap,S.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,S.lightMapTransform)),g.aoMap&&(S.aoMap.value=g.aoMap,S.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,S.aoMapTransform))}function c(S,g){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,g.map&&(S.map.value=g.map,t(g.map,S.mapTransform))}function d(S,g){S.dashSize.value=g.dashSize,S.totalSize.value=g.dashSize+g.gapSize,S.scale.value=g.scale}function p(S,g,A,D){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,S.size.value=g.size*A,S.scale.value=D*.5,g.map&&(S.map.value=g.map,t(g.map,S.uvTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,t(g.alphaMap,S.alphaMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest)}function m(S,g){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,S.rotation.value=g.rotation,g.map&&(S.map.value=g.map,t(g.map,S.mapTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,t(g.alphaMap,S.alphaMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest)}function v(S,g){S.specular.value.copy(g.specular),S.shininess.value=Math.max(g.shininess,1e-4)}function y(S,g){g.gradientMap&&(S.gradientMap.value=g.gradientMap)}function _(S,g){S.metalness.value=g.metalness,g.metalnessMap&&(S.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,S.metalnessMapTransform)),S.roughness.value=g.roughness,g.roughnessMap&&(S.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,S.roughnessMapTransform)),g.envMap&&(S.envMapIntensity.value=g.envMapIntensity)}function b(S,g,A){S.ior.value=g.ior,g.diffuseRoughness>0&&(S.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(S.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,S.diffuseRoughnessMapTransform))),g.sheen>0&&(S.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),S.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(S.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,S.sheenColorMapTransform)),g.sheenRoughnessMap&&(S.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,S.sheenRoughnessMapTransform))),g.clearcoat>0&&(S.clearcoat.value=g.clearcoat,S.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(S.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,S.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(S.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===ai&&S.clearcoatNormalScale.value.negate())),g.dispersion>0&&(S.dispersion.value=g.dispersion),g.retroreflectivity>0&&(S.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(S.iridescence.value=g.iridescence,S.iridescenceIOR.value=g.iridescenceIOR,S.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,S.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(S.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,S.iridescenceMapTransform)),g.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),g.transmission>0&&(S.transmission.value=g.transmission,S.transmissionSamplerMap.value=A.texture,S.transmissionSamplerSize.value.set(A.width,A.height),g.transmissionMap&&(S.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,S.transmissionMapTransform)),S.thickness.value=g.thickness,g.thicknessMap&&(S.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=g.attenuationDistance,S.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(S.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(S.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=g.specularIntensity,S.specularColor.value.copy(g.specularColor),g.specularColorMap&&(S.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,S.specularColorMapTransform)),g.specularIntensityMap&&(S.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,S.specularIntensityMapTransform))}function x(S,g){g.matcap&&(S.matcap.value=g.matcap)}function C(S,g){let A=e.get(g).light;S.referencePosition.value.setFromMatrixPosition(A.matrixWorld),S.nearDistance.value=A.shadow.camera.near,S.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:o}}function eR(r,e,t,s){let o={},l={};function c(A,D){let R=D.program;s.uniformBlockBinding(A,R,o[A.id])}function d(A,D){let R=o[A.id];R===void 0&&(x(A),R=p(A),o[A.id]=R,A.addEventListener("dispose",S));let L=D.program;s.updateUBOMapping(A,L);let N=e.render.frame;l[A.id]!==N&&(m(A),l[A.id]=N)}function p(A){let D=r.createBuffer(),R=A.__size,L=A.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,R,L),r.bindBuffer(r.UNIFORM_BUFFER,null),D}function m(A){let D=o[A.id],R=A.uniforms,L=A.__cache;r.bindBuffer(r.UNIFORM_BUFFER,D);for(let N=0,M=R.length;N<M;N++){let P=R[N];if(Array.isArray(P))for(let V=0,F=P.length;V<F;V++)v(P[V],N,V,L);else v(P,N,0,L)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function v(A,D,R,L){if(_(A,D,R,L)===!0){let N=A.__offset,M=A.value;if(Array.isArray(M)){let P=0;for(let V=0;V<M.length;V++){let F=M[V],B=C(F,!0);y(F,A.__data,P),P+=B.storage/Float32Array.BYTES_PER_ELEMENT}}else y(M,A.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,N,A.__data)}}function y(A,D,R){typeof A=="number"||typeof A=="boolean"?D[R]=A:A.isMatrix3?(D[R]=A.elements[0],D[R+1]=A.elements[1],D[R+2]=A.elements[2],D[R+3]=0,D[R+4]=A.elements[3],D[R+5]=A.elements[4],D[R+6]=A.elements[5],D[R+7]=0,D[R+8]=A.elements[6],D[R+9]=A.elements[7],D[R+10]=A.elements[8],D[R+11]=0):ArrayBuffer.isView(A)?D.set(A.subarray(0,D.length-R),R):A.toArray(D,R)}function _(A,D,R,L){let N=A.value,M=D+"_"+R;if(Array.isArray(N)){L[M]===void 0&&(L[M]=[]);let P=L[M],V=!1;for(let F=0;F<N.length;F++)b(N[F],P,F)===!0&&(V=!0);return V}return b(N,L,M)}function b(A,D,R){if(D[R]===void 0)return typeof A=="number"||typeof A=="boolean"?D[R]=A:ArrayBuffer.isView(A)?D[R]=A.slice():D[R]=A.clone(),!0;{let L=D[R];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return D[R]=A,!0}else{if(ArrayBuffer.isView(A))return!0;if(L.equals(A)===!1)return L.copy(A),!0}}return!1}function x(A){let D=A.uniforms,R=0,L=16;for(let M=0,P=D.length;M<P;M++){let V=Array.isArray(D[M])?D[M]:[D[M]];for(let F=0,B=V.length;F<B;F++){let W=V[F],Z=Array.isArray(W.value)?W.value:[W.value],O=Array.isArray(D[M])||Array.isArray(W.value),Q=R;for(let ee=0,me=Z.length;ee<me;ee++){let ne=Z[ee],ce=C(ne,O),he=R%L,Be=he%ce.boundary,Ve=he+Be;R+=Be,Ve!==0&&L-Ve<ce.storage&&(R+=L-Ve),ee===0&&(Q=R),R+=ce.storage}let se=W.type==="int"?Int32Array:W.type==="uint"?Uint32Array:Float32Array;W.__data=new se((R-Q)/Float32Array.BYTES_PER_ELEMENT),W.__offset=Q}}let N=R%L;return N>0&&(R+=L-N),A.__size=R,A.__cache={},this}function C(A,D){let R={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(R.boundary=4,R.storage=4):A.isVector2?(R.boundary=8,R.storage=8):A.isVector3||A.isColor?(R.boundary=16,R.storage=12):A.isVector4?(R.boundary=16,R.storage=16):A.isMatrix3?(R.boundary=16,R.storage=48):A.isMatrix4?(R.boundary=16,R.storage=64):A.isTexture?Ye("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(A)?(R.boundary=16,R.storage=A.byteLength):Ye("WebGLRenderer: Unsupported uniform value type.",A),D===!0&&(R.boundary=16,R.storage=Math.ceil(R.storage/16)*16),R}function S(A){let D=A.target;D.removeEventListener("dispose",S),r.deleteBuffer(o[D.id]),delete o[D.id],delete l[D.id]}function g(){for(let A in o)r.deleteBuffer(o[A]);o={},l={}}return{bind:c,update:d,dispose:g}}var tR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Rr=null;function nR(){return Rr===null&&(Rr=new Rl(tR,16,16,Fs,ur),Rr.name="DFG_LUT",Rr.minFilter=oi,Rr.magFilter=oi,Rr.wrapS=Mr,Rr.wrapT=Mr,Rr.generateMipmaps=!1,Rr.needsUpdate=!0),Rr}var md=class{constructor(e={}){let{canvas:t=N_(),context:s=null,depth:o=!0,stencil:l=!1,alpha:c=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:y=!1,reversedDepthBuffer:_=!1,outputBufferType:b=ei}=e;this.isWebGLRenderer=!0;let x;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=s.getContextAttributes().alpha}else x=c;let C=b,S=new Set([Df,Lf,Nf]),g=new Set([ei,lr,La,bo,Rf,Pf]),A=new Uint32Array(4),D=new Int32Array(4),R={textures:[],min:[],max:[],resolution:[]},L=null,N=null,M=[],P=[],V=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let F=this,B=!1,W=null,Z=null,O=null,Q=null;this._outputColorSpace=Mn;let se=0,ee=0,me=null,ne=-1,ce=null,he=new Zt,Be=new Zt,Ve=null,re=new rt(0),Pe=0,ke=t.width,We=t.height,Ne=1,Ke=null,Bt=null,qe=new Zt(0,0,ke,We),Tt=new Zt(0,0,ke,We),yt=!1,dt=new Ps,on=new sf,Wt=!1,an=!1,Ht=new Ut,$n=new X,Vt=new Zt,ln={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Fn=!1;function Yn(){return me===null?Ne:1}let H=s;function Un(E,z){return t.getContext(E,z)}let Ct,ot,Ee,un,Xe,je,I,T,$,de,ue,xe,Te,oe,ae,Me,U,le,ie,we,ye,be,He;try{let E={alpha:!0,depth:o,stencil:l,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:y};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ge,!1),t.addEventListener("webglcontextrestored",it,!1),t.addEventListener("webglcontextcreationerror",Ae,!1),H===null){let z="webgl2";if(H=Un(z,E),H===null)throw Un(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}st()}catch(E){throw t.removeEventListener("webglcontextlost",Ge,!1),t.removeEventListener("webglcontextrestored",it,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),et("WebGLRenderer: "+E.message),E}function st(){Ct=new hA(H),Ct.init(),ye=new jC(H,Ct),ot=new nA(H,Ct,e,ye),Ee=new $C(H,Ct),ot.reversedDepthBuffer&&_&&Ee.buffers.depth.setReversed(!0),Z=H.createFramebuffer(),O=H.createFramebuffer(),Q=H.createFramebuffer(),un=new gA(H),Xe=new LC,je=new YC(H,Ct,Ee,Xe,ot,ye,un),I=new dA(F),T=new yw(H),be=new eA(H,T),$=new pA(H,T,un,be),de=new yA(H,$,T,be,un),le=new vA(H,ot,je),ae=new iA(Xe),ue=new NC(F,I,Ct,ot,be,ae),xe=new QC(F,Xe),Te=new kC,oe=new HC(Ct),U=new QE(F,I,Ee,de,x,p),Me=new qC(F,de,ot),He=new eR(H,un,ot,Ee),ie=new tA(H,Ct,un),we=new mA(H,Ct,un),un.programs=ue.programs,F.capabilities=ot,F.extensions=Ct,F.properties=Xe,F.renderLists=Te,F.shadowMap=Me,F.state=Ee,F.info=un}C!==ei&&(V=new bA(C,t.width,t.height,d,o,l));let pe=new Gm(F,H);this.xr=pe,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let E=Ct.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Ct.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Ne},this.setPixelRatio=function(E){E!==void 0&&(Ne=E,this.setSize(ke,We,!1))},this.getSize=function(E){return E.set(ke,We)},this.setSize=function(E,z,J=!0){if(pe.isPresenting){Ye("WebGLRenderer: Can't change size while VR device is presenting.");return}ke=E,We=z,t.width=Math.floor(E*Ne),t.height=Math.floor(z*Ne),J===!0&&(t.style.width=E+"px",t.style.height=z+"px"),V!==null&&V.setSize(t.width,t.height),this.setViewport(0,0,E,z)},this.getDrawingBufferSize=function(E){return E.set(ke*Ne,We*Ne).floor()},this.setDrawingBufferSize=function(E,z,J){ke=E,We=z,Ne=J,t.width=Math.floor(E*J),t.height=Math.floor(z*J),this.setViewport(0,0,E,z)},this.setEffects=function(E){if(C===ei){et("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let z=0;z<E.length;z++)if(E[z].isOutputPass===!0){Ye("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}V.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(he)},this.getViewport=function(E){return E.copy(qe)},this.setViewport=function(E,z,J,q){E.isVector4?qe.set(E.x,E.y,E.z,E.w):qe.set(E,z,J,q),Ee.viewport(he.copy(qe).multiplyScalar(Yn()).round())},this.getScissor=function(E){return E.copy(Tt)},this.setScissor=function(E,z,J,q){E.isVector4?Tt.set(E.x,E.y,E.z,E.w):Tt.set(E,z,J,q),Ee.scissor(Be.copy(Tt).multiplyScalar(Yn()).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(E){Ee.setScissorTest(yt=E)},this.setOpaqueSort=function(E){Ke=E},this.setTransparentSort=function(E){Bt=E},this.getClearColor=function(E){return E.copy(U.getClearColor())},this.setClearColor=function(){U.setClearColor(...arguments)},this.getClearAlpha=function(){return U.getClearAlpha()},this.setClearAlpha=function(){U.setClearAlpha(...arguments)},this.clear=function(E=!0,z=!0,J=!0){let q=0;if(E){let Y=!1;if(me!==null){let _e=me.texture.format;Y=S.has(_e)}if(Y){let _e=me.texture.type,Re=g.has(_e),Se=U.getClearColor(),Ie=U.getClearAlpha(),ze=Se.r,Fe=Se.g,ut=Se.b;Re?(A[0]=ze,A[1]=Fe,A[2]=ut,A[3]=Ie,H.clearBufferuiv(H.COLOR,0,A)):(D[0]=ze,D[1]=Fe,D[2]=ut,D[3]=Ie,H.clearBufferiv(H.COLOR,0,D))}else q|=H.COLOR_BUFFER_BIT}z&&(q|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(q|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&H.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),W=E},this.dispose=function(){t.removeEventListener("webglcontextlost",Ge,!1),t.removeEventListener("webglcontextrestored",it,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),U.dispose(),Te.dispose(),oe.dispose(),je.dispose(),Xe.dispose(),I.dispose(),de.dispose(),$.dispose(),be.dispose(),He.dispose(),ue.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",Bs),pe.removeEventListener("sessionend",Hs),Zi.stop()};function Ge(E){E.preventDefault(),Mm("WebGLRenderer: Context Lost."),B=!0}function it(){Mm("WebGLRenderer: Context Restored."),B=!1;let E=un.autoReset,z=Me.enabled,J=Me.autoUpdate,q=Me.needsUpdate,Y=Me.type;st(),un.autoReset=E,Me.enabled=z,Me.autoUpdate=J,Me.needsUpdate=q,Me.type=Y}function Ae(E){et("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Rt(E){let z=E.target;z.removeEventListener("dispose",Rt),dn(z)}function dn(E){vi(E),Xe.remove(E)}function vi(E){let z=Xe.get(E).programs;z!==void 0&&(z.forEach(function(J){ue.releaseProgram(J)}),E.isShaderMaterial&&ue.releaseShaderCache(E))}this.renderBufferDirect=function(E,z,J,q,Y,_e){z===null&&(z=ln);let Re=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,Se=Ws(E,z,J,q,Y);Ee.setMaterial(q,Re);let Ie=J.index,ze=1;if(q.wireframe===!0){if(Ie=$.getWireframeAttribute(J),Ie===void 0)return;ze=2}let Fe=J.drawRange,ut=J.attributes.position,Ue=Fe.start*ze,ht=(Fe.start+Fe.count)*ze;_e!==null&&(Ue=Math.max(Ue,_e.start*ze),ht=Math.min(ht,(_e.start+_e.count)*ze)),Ie!==null?(Ue=Math.max(Ue,0),ht=Math.min(ht,Ie.count)):ut!=null&&(Ue=Math.max(Ue,0),ht=Math.min(ht,ut.count));let Qt=ht-Ue;if(Qt<0||Qt===1/0)return;be.setup(Y,q,Se,J,Ie);let Ot,Nt=ie;if(Ie!==null&&(Ot=T.get(Ie),Nt=we,Nt.setIndex(Ot)),Y.isMesh)q.wireframe===!0?(Ee.setLineWidth(q.wireframeLinewidth*Yn()),Nt.setMode(H.LINES)):Nt.setMode(H.TRIANGLES);else if(Y.isLine){let vn=q.linewidth;vn===void 0&&(vn=1),Ee.setLineWidth(vn*Yn()),Y.isLineSegments?Nt.setMode(H.LINES):Y.isLineLoop?Nt.setMode(H.LINE_LOOP):Nt.setMode(H.LINE_STRIP)}else Y.isPoints?Nt.setMode(H.POINTS):Y.isSprite&&Nt.setMode(H.TRIANGLES);if(Y.isBatchedMesh)if(Ct.get("WEBGL_multi_draw"))Nt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let vn=Y._multiDrawStarts,Oe=Y._multiDrawCounts,Lt=Y._multiDrawCount,$e=Ie?T.get(Ie).bytesPerElement:1,Li=Xe.get(q).currentProgram.getUniforms();for(let cn=0;cn<Lt;cn++)Li.setValue(H,"_gl_DrawID",cn),Nt.render(vn[cn]/$e,Oe[cn])}else if(Y.isInstancedMesh)Nt.renderInstances(Ue,Qt,Y.count);else if(J.isInstancedBufferGeometry){let vn=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Oe=Math.min(J.instanceCount,vn);Nt.renderInstances(Ue,Qt,Oe)}else Nt.render(Ue,Qt)};function ji(E,z,J,q){W!==null&&E.isNodeMaterial&&W.setObject(q,E),Wt===!0&&ae.setState(E,J,!1),E.transparent===!0&&E.side===Cr&&E.forceSinglePass===!1?(E.side=ai,E.needsUpdate=!0,ui(E,z,q),E.side=ks,E.needsUpdate=!0,ui(E,z,q),E.side=Cr):ui(E,z,q)}this.compile=function(E,z,J=null){J===null&&(J=E),W!==null&&W.renderStart(E,z,J),N=oe.get(J),N.init(z),P.push(N),J.traverseVisible(function(Y){Y.isLight&&Y.layers.test(z.layers)&&(N.pushLight(Y),Y.castShadow&&N.pushShadow(Y))}),E!==J&&E.traverseVisible(function(Y){Y.isLight&&Y.layers.test(z.layers)&&(N.pushLight(Y),Y.castShadow&&N.pushShadow(Y))}),N.setupLights(),W!==null&&W.updateLights(N.state.lightsArray),an=this.localClippingEnabled,Wt=ae.init(this.clippingPlanes,an),Wt===!0&&ae.setGlobalState(this.clippingPlanes,z),W!==null&&Me.render(N.state.shadowsArray,J,z);let q=new Set;return E.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let _e=Y.material;if(_e)if(Array.isArray(_e))for(let Re=0;Re<_e.length;Re++){let Se=_e[Re];ji(Se,J,z,Y),q.add(Se)}else ji(_e,J,z,Y),q.add(_e)}),N=P.pop(),W!==null&&W.renderEnd(),q},this.compileAsync=function(E,z,J=null){let q=this.compile(E,z,J);return new Promise(Y=>{function _e(){if(q.forEach(function(Re){let Ie=Xe.get(Re).currentProgram;(Ie===void 0||Ie.isReady())&&q.delete(Re)}),q.size===0){Y(E);return}setTimeout(_e,10)}Ct.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let os=null;function gu(E){os&&os(E)}function Bs(){Zi.stop()}function Hs(){Zi.start()}let Zi=new lb;Zi.setAnimationLoop(gu),typeof self<"u"&&Zi.setContext(self),this.setAnimationLoop=function(E){os=E,pe.setAnimationLoop(E),E===null?Zi.stop():Zi.start()},pe.addEventListener("sessionstart",Bs),pe.addEventListener("sessionend",Hs),this.render=function(E,z){if(z!==void 0&&z.isCamera!==!0){et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;W!==null&&W.renderStart(E,z);let J=pe.enabled===!0&&pe.isPresenting===!0,q=V!==null&&(me===null||J)&&V.begin(F,me);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(V===null||V.isCompositing()===!1)&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(z),z=pe.getCamera()),E.isScene===!0&&E.onBeforeRender(F,E,z,me),N=oe.get(E,P.length),N.init(z),N.state.textureUnits=je.getTextureUnits(),P.push(N),Ht.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),z.isArrayCamera?on.setFromArrayCamera(z):dt.setFromProjectionMatrix(Ht,Wi,z.reversedDepth),an=this.localClippingEnabled,Wt=ae.init(this.clippingPlanes,an),L=Te.get(E,M.length),L.init(),M.push(L),this.info.render.frame++,pe.enabled===!0&&pe.isPresenting===!0){let Re=F.xr.getDepthSensingMesh();Re!==null&&Ji(Re,z,-1/0,F.sortObjects)}Ji(E,z,0,F.sortObjects),L.finish(),W!==null&&W.updateLights(N.state.lightsArray),F.sortObjects===!0&&L.sort(Ke,Bt),Fn=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,Fn&&U.addToRenderList(L,E),this.info.autoReset===!0&&this.info.reset(),Wt===!0&&ae.beginShadows();let Y=N.state.shadowsArray;if(Me.render(Y,E,z),Wt===!0&&ae.endShadows(),(q&&V.hasRenderPass())===!1){let Re=L.opaque,Se=L.transmissive;if(N.setupLights(),z.isArrayCamera){let Ie=z.cameras;if(Se.length>0)for(let ze=0,Fe=Ie.length;ze<Fe;ze++){let ut=Ie[ze];Vs(Re,Se,E,ut)}Fn&&U.render(E);for(let ze=0,Fe=Ie.length;ze<Fe;ze++){let ut=Ie[ze];Va(L,E,ut,ut.viewport)}}else Se.length>0&&Vs(Re,Se,E,z),Fn&&U.render(E),Va(L,E,z)}me!==null&&ee===0&&(je.updateMultisampleRenderTarget(me),je.updateRenderTargetMipmap(me)),q&&V.end(F),E.isScene===!0&&E.onAfterRender(F,E,z),be.resetDefaultState(),ne=-1,ce=null,P.pop(),P.length>0?(N=P[P.length-1],je.setTextureUnits(N.state.textureUnits),Wt===!0&&ae.setGlobalState(F.clippingPlanes,N.state.camera)):N=null,M.pop(),M.length>0?L=M[M.length-1]:L=null,W!==null&&W.renderEnd()};function Ji(E,z,J,q){if(E.visible===!1)return;if(E.layers.test(z.layers)){if(E.isGroup)J=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(z);else if(E.isLight)N.pushLight(E),E.castShadow&&N.pushShadow(E);else if(E.isSprite){let Re=z.isArrayCamera?on:dt;if(!E.frustumCulled||E.intersectsFrustum(Re)){q&&Vt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ht);let Se=de.update(E),Ie=E.material;Ie.visible&&L.push(E,Se,Ie,J,Vt.z,null,z)}}else if(E.isMesh||E.isLine||E.isPoints){let Re=z.isArrayCamera?on:dt;if(!E.frustumCulled||E.intersectsFrustum(Re)){let Se=de.update(E),Ie=E.material;if(q&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Vt.copy(E.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Vt.copy(Se.boundingSphere.center)),Vt.applyMatrix4(E.matrixWorld).applyMatrix4(Ht)),Array.isArray(Ie)){let ze=Se.groups;for(let Fe=0,ut=ze.length;Fe<ut;Fe++){let Ue=ze[Fe],ht=Ie[Ue.materialIndex];ht&&ht.visible&&L.push(E,Se,ht,J,Vt.z,Ue,z)}}else Ie.visible&&L.push(E,Se,Ie,J,Vt.z,null,z)}}}let _e=E.children;for(let Re=0,Se=_e.length;Re<Se;Re++)Ji(_e[Re],z,J,q)}function Va(E,z,J,q){let{opaque:Y,transmissive:_e,transparent:Re}=E;N.setupLightsView(J),Wt===!0&&ae.setGlobalState(F.clippingPlanes,J),q&&Ee.viewport(he.copy(q)),Y.length>0&&as(Y,z,J),_e.length>0&&as(_e,z,J),Re.length>0&&as(Re,z,J),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function Vs(E,z,J,q){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[q.id]===void 0){let Ue=Ct.has("EXT_color_buffer_half_float")||Ct.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[q.id]=new Pi(1,1,{generateMipmaps:!0,type:Ue?ur:ei,minFilter:ts,samples:Math.max(4,ot.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:vt.workingColorSpace})}let _e=N.state.transmissionRenderTarget[q.id],Re=q.viewport||he;_e.setSize(Re.z*F.transmissionResolutionScale,Re.w*F.transmissionResolutionScale);let Se=F.getRenderTarget(),Ie=F.getActiveCubeFace(),ze=F.getActiveMipmapLevel();F.setRenderTarget(_e),F.getClearColor(re),Pe=F.getClearAlpha(),Pe<1&&F.setClearColor(16777215,.5),F.clear(),Fn&&U.render(J);let Fe=F.toneMapping;F.toneMapping=gi;let ut=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),N.setupLightsView(q),Wt===!0&&ae.setGlobalState(F.clippingPlanes,q),as(E,J,q),je.updateMultisampleRenderTarget(_e),je.updateRenderTargetMipmap(_e),Ct.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let ht=0,Qt=z.length;ht<Qt;ht++){let Ot=z[ht],{object:Nt,geometry:vn,material:Oe,group:Lt}=Ot;if(Oe.side===Cr&&Nt.layers.test(q.layers)){let $e=Oe.side;Oe.side=ai,Oe.needsUpdate=!0,To(Nt,J,q,vn,Oe,Lt),Oe.side=$e,Oe.needsUpdate=!0,Ue=!0}}Ue===!0&&(je.updateMultisampleRenderTarget(_e),je.updateRenderTargetMipmap(_e))}F.setRenderTarget(Se,Ie,ze),F.setClearColor(re,Pe),ut!==void 0&&(q.viewport=ut),F.toneMapping=Fe}function as(E,z,J){let q=z.isScene===!0?z.overrideMaterial:null;for(let Y=0,_e=E.length;Y<_e;Y++){let Re=E[Y],{object:Se,geometry:Ie,group:ze}=Re,Fe=Re.material;Fe.allowOverride===!0&&q!==null&&(Fe=q),Se.layers.test(J.layers)&&To(Se,z,J,Ie,Fe,ze)}}function To(E,z,J,q,Y,_e){W!==null&&Y.isNodeMaterial&&W.setObject(E,Y),E.onBeforeRender(F,z,J,q,Y,_e),E.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),Y.onBeforeRender(F,z,J,q,E,_e),Y.transparent===!0&&Y.side===Cr&&Y.forceSinglePass===!1?(Y.side=ai,Y.needsUpdate=!0,F.renderBufferDirect(J,z,q,Y,E,_e),Y.side=ks,Y.needsUpdate=!0,F.renderBufferDirect(J,z,q,Y,E,_e),Y.side=Cr):F.renderBufferDirect(J,z,q,Y,E,_e),E.onAfterRender(F,z,J,q,Y,_e)}function Ki(E){let z=0;for(let J of E)J.texture!==null&&z++;return z}function ui(E,z,J){z.isScene!==!0&&(z=ln);let q=Xe.get(E),Y=N.state.lights,_e=N.state.shadowsArray,Re=Y.state.version,Se=ue.getParameters(E,Y.state,_e,z,J,N.state.lightProbeGridArray),Ie=ue.getProgramCacheKey(Se),ze=q.programs;q.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?z.environment:null,q.fog=z.fog;let Fe=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;q.envMap=I.get(E.envMap||q.environment,Fe),q.envMapRotation=q.environment!==null&&E.envMap===null?z.environmentRotation:E.envMapRotation,ze===void 0&&(E.addEventListener("dispose",Rt),ze=new Map,q.programs=ze,q.programVariants=new Map);let ut=ze.get(Ie);if(ut!==void 0){if(q.currentProgram===ut&&q.lightsStateVersion===Re)return ls(E,Se),ut}else Se.uniforms=ue.getUniforms(E),W!==null&&E.isNodeMaterial&&W.build(E,J,Se),E.onBeforeCompile(Se,F),ut=ue.acquireProgram(Se,Ie),ze.set(Ie,ut),q.uniforms=Se.uniforms;let Ue=q.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ue.clippingPlanes=ae.uniform),ls(E,Se),q.needsLights=yu(E),q.lightsStateVersion=Re,q.needsLights&&(Ue.ambientLightColor.value=Y.state.ambient,Ue.lightProbe.value=Y.state.probe,Ue.sunLights.value=Y.state.sun,Ue.sunLightShadows.value=Y.state.sunShadow,Ue.directionalLights.value=Y.state.directional,Ue.directionalLightShadows.value=Y.state.directionalShadow,Ue.spotLights.value=Y.state.spot,Ue.spotLightShadows.value=Y.state.spotShadow,Ue.rectAreaLights.value=Y.state.rectArea,Ue.ltc_1.value=Y.state.rectAreaLTC1,Ue.ltc_2.value=Y.state.rectAreaLTC2,Ue.pointLights.value=Y.state.point,Ue.pointLightShadows.value=Y.state.pointShadow,Ue.hemisphereLights.value=Y.state.hemi,Ue.sunShadowMatrix.value=Y.state.sunShadowMatrix,Ue.sunShadowCascade.value=Y.state.sunShadowCascade,Ue.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ue.spotLightMatrix.value=Y.state.spotLightMatrix,Ue.spotLightMap.value=Y.state.spotLightMap,Ue.pointShadowMatrix.value=Y.state.pointShadowMatrix),q.numLightProbeGrids=Ki(N.state.lightProbeGridArray),q.currentProgram=ut,q.uniformsList=null,ut}function Gs(E,z,J,q,Y){let _e=Xe.get(E),Re=_e.currentProgram.id+","+q+","+Y,Se=_e.programVariants.get(Re);return Se===void 0?(Se=ui(E,z,J),_e.programVariants.set(Re,Se)):(_e.currentProgram=Se,_e.uniformsList=null,_e.outputColorSpace=q,_e.toneMapping=Y),Se}function Eo(E){if(E.uniformsList===null){let z=E.currentProgram.getUniforms();E.uniformsList=Da.seqWithValue(z.seq,E.uniforms)}return E.uniformsList}function ls(E,z){let J=Xe.get(E);J.outputColorSpace=z.outputColorSpace,J.batching=z.batching,J.batchingColor=z.batchingColor,J.instancing=z.instancing,J.instancingColor=z.instancingColor,J.instancingMorph=z.instancingMorph,J.skinning=z.skinning,J.morphTargets=z.morphTargets,J.morphNormals=z.morphNormals,J.morphColors=z.morphColors,J.morphTargetsCount=z.morphTargetsCount,J.numClippingPlanes=z.numClippingPlanes,J.numIntersection=z.numClipIntersection,J.vertexAlphas=z.vertexAlphas,J.vertexTangents=z.vertexTangents,J.toneMapping=z.toneMapping}function Ws(E,z,J,q,Y){z.isScene!==!0&&(z=ln),je.resetTextureUnits();let _e=z.fog,Re=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?z.environment:null,Se=me===null?F.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:vt.workingColorSpace,Ie=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,ze=I.get(q.envMap||Re,Ie),Fe=q.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,ut=!!J.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ue=!!J.morphAttributes.position,ht=!!J.morphAttributes.normal,Qt=!!J.morphAttributes.color,Ot=gi;q.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(Ot=F.toneMapping);let Nt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,vn=Nt!==void 0?Nt.length:0,Oe=Xe.get(q),Lt=N.state.lights;if(Wt===!0&&(an===!0||E!==ce)){let Xt=E===ce&&q.id===ne;ae.setState(q,E,Xt)}let $e=!1,Li=!1;q.version===Oe.__version?Oe.needsLights&&Oe.lightsStateVersion!==Lt.state.version||Y.isBatchedMesh&&Oe.batching===!1||!Y.isBatchedMesh&&Oe.batching===!0||Y.isBatchedMesh&&Oe.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&Oe.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&Oe.instancing===!1||!Y.isInstancedMesh&&Oe.instancing===!0||Y.isSkinnedMesh&&Oe.skinning===!1||!Y.isSkinnedMesh&&Oe.skinning===!0||Y.isInstancedMesh&&Oe.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Oe.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Oe.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Oe.instancingMorph===!1&&Y.morphTexture!==null||Oe.envMap!==ze||q.fog===!0&&Oe.fog!==_e||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==ae.numPlanes||Oe.numIntersection!==ae.numIntersection)||Oe.vertexAlphas!==Fe||Oe.vertexTangents!==ut||Oe.morphTargets!==Ue||Oe.morphNormals!==ht||Oe.morphColors!==Qt||Oe.morphTargetsCount!==vn||Oe.numLightProbeGrids!==Ki(N.state.lightProbeGridArray)?$e=!0:(Oe.outputColorSpace!==Se||Oe.toneMapping!==Ot)&&(Li=!0):($e=!0,Oe.__version=q.version);let cn=Oe.currentProgram;($e===!0||Li===!0)&&(cn=Li===!0?Gs(q,z,Y,Se,Ot):ui(q,z,Y),W&&q.isNodeMaterial&&W.onUpdateProgram(q,cn,Oe));let Nr=!1,Di=!1,On=!1,mt=cn.getUniforms(),hn=Oe.uniforms;if(Ee.useProgram(cn.program)&&(Nr=!0,Di=!0,On=!0),q.id!==ne&&(ne=q.id,Di=!0),Nr||ce!==E){Ee.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),mt.setValue(H,"projectionMatrix",E.projectionMatrix),mt.setValue(H,"viewMatrix",E.matrixWorldInverse);let pn=mt.map.cameraPosition;pn!==void 0&&pn.setValue(H,$n.setFromMatrixPosition(E.matrixWorld)),ot.logarithmicDepthBuffer&&mt.setValue(H,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&mt.setValue(H,"isOrthographic",E.isOrthographicCamera===!0),ce!==E&&(ce=E,Di=!0,On=!0)}if(Oe.needsLights&&(Lt.state.sunShadowMap.length>0&&mt.setValue(H,"sunShadowMap",Lt.state.sunShadowMap,je),Lt.state.directionalShadowMap.length>0&&mt.setValue(H,"directionalShadowMap",Lt.state.directionalShadowMap,je),Lt.state.spotShadowMap.length>0&&mt.setValue(H,"spotShadowMap",Lt.state.spotShadowMap,je),Lt.state.pointShadowMap.length>0&&mt.setValue(H,"pointShadowMap",Lt.state.pointShadowMap,je)),Y.isSkinnedMesh){mt.setOptional(H,Y,"bindMatrix"),mt.setOptional(H,Y,"bindMatrixInverse");let Xt=Y.skeleton;Xt&&(Xt.boneTexture===null&&Xt.computeBoneTexture(),mt.setValue(H,"boneTexture",Xt.boneTexture,je))}Y.isBatchedMesh&&(mt.setOptional(H,Y,"batchingTexture"),mt.setValue(H,"batchingTexture",Y._matricesTexture,je),mt.setOptional(H,Y,"batchingIdTexture"),mt.setValue(H,"batchingIdTexture",Y._indirectTexture,je),mt.setOptional(H,Y,"batchingColorTexture"),Y._colorsTexture!==null&&mt.setValue(H,"batchingColorTexture",Y._colorsTexture,je));let ii=J.morphAttributes;if((ii.position!==void 0||ii.normal!==void 0||ii.color!==void 0)&&le.update(Y,J,cn),(Di||Oe.receiveShadow!==Y.receiveShadow)&&(Oe.receiveShadow=Y.receiveShadow,mt.setValue(H,"receiveShadow",Y.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&z.environment!==null&&(hn.envMapIntensity.value=z.environmentIntensity),hn.dfgLUT!==void 0&&(hn.dfgLUT.value=nR()),Di){if(mt.setValue(H,"toneMappingExposure",F.toneMappingExposure),Oe.needsLights&&vu(hn,On),_e&&q.fog===!0&&xe.refreshFogUniforms(hn,_e),xe.refreshMaterialUniforms(hn,q,Ne,We,N.state.transmissionRenderTarget[E.id]),Oe.needsLights&&Oe.numLightProbeGrids>0){let Xt=R,pn=0;for(let ki of N.state.lightProbeGridArray)ki.texture!==null&&(Xt.textures[pn]=ki.texture,Xt.min[pn]=ki.boundingBox.min,Xt.max[pn]=ki.boundingBox.max,Xt.resolution[pn]=ki.resolution,pn++);for(let ki in Xt)Xt[ki].length=pn;hn.probesSH.value=Xt.textures,hn.probesMin.value=Xt.min,hn.probesMax.value=Xt.max,hn.probesResolution.value=Xt.resolution}Da.upload(H,Eo(Oe),hn,je)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Da.upload(H,Eo(Oe),hn,je),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&mt.setValue(H,"center",Y.center),mt.setValue(H,"modelViewMatrix",Y.modelViewMatrix),mt.setValue(H,"normalMatrix",Y.normalMatrix),mt.setValue(H,"modelMatrix",Y.matrixWorld),q.uniformsGroups!==void 0){let Xt=q.uniformsGroups;for(let pn=0,ki=Xt.length;pn<ki;pn++){let Wa=Xt[pn];He.update(Wa,cn),He.bind(Wa,cn)}}return cn}function vu(E,z){E.ambientLightColor.needsUpdate=z,E.lightProbe.needsUpdate=z,E.sunLights.needsUpdate=z,E.sunLightShadows.needsUpdate=z,E.directionalLights.needsUpdate=z,E.directionalLightShadows.needsUpdate=z,E.pointLights.needsUpdate=z,E.pointLightShadows.needsUpdate=z,E.spotLights.needsUpdate=z,E.spotLightShadows.needsUpdate=z,E.rectAreaLights.needsUpdate=z,E.hemisphereLights.needsUpdate=z}function yu(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return se},this.getActiveMipmapLevel=function(){return ee},this.getRenderTarget=function(){return me},this.setRenderTargetTextures=function(E,z,J){let q=Xe.get(E);q.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Xe.get(E.texture).__webglTexture=z,Xe.get(E.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:J,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,z){let J=Xe.get(E);J.__webglFramebuffer=z,J.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(E,z=0,J=0){me=E,se=z,ee=J;let q=null,Y=!1,_e=!1;if(E){let Se=Xe.get(E);if(Se.__useDefaultFramebuffer!==void 0){Ee.bindFramebuffer(H.FRAMEBUFFER,Se.__webglFramebuffer),he.copy(E.viewport),Be.copy(E.scissor),Ve=E.scissorTest,Ee.viewport(he),Ee.scissor(Be),Ee.setScissorTest(Ve),ne=-1;return}else if(Se.__webglFramebuffer===void 0)je.setupRenderTarget(E);else if(Se.__hasExternalTextures)je.rebindTextures(E,Xe.get(E.texture).__webglTexture,Xe.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Fe=E.depthTexture;if(Se.__boundDepthTexture!==Fe){if(Fe!==null&&Xe.has(Fe)&&(E.width!==Fe.image.width||E.height!==Fe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");je.setupDepthRenderbuffer(E)}}let Ie=E.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(_e=!0);let ze=Xe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(ze[z])?q=ze[z][J]:q=ze[z],Y=!0):E.samples>0&&je.useMultisampledRTT(E)===!1?q=Xe.get(E).__webglMultisampledFramebuffer:Array.isArray(ze)?q=ze[J]:q=ze,he.copy(E.viewport),Be.copy(E.scissor),Ve=E.scissorTest}else he.copy(qe).multiplyScalar(Ne).floor(),Be.copy(Tt).multiplyScalar(Ne).floor(),Ve=yt;if(J!==0&&(q=Z),Ee.bindFramebuffer(H.FRAMEBUFFER,q)&&Ee.drawBuffers(E,q),Ee.viewport(he),Ee.scissor(Be),Ee.setScissorTest(Ve),Y){let Se=Xe.get(E.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+z,Se.__webglTexture,J)}else if(_e){let Se=z;for(let Ie=0;Ie<E.textures.length;Ie++){let ze=Xe.get(E.textures[Ie]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Ie,ze.__webglTexture,J,Se)}}else if(E!==null&&J!==0){let Se=Xe.get(E.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Se.__webglTexture,J)}ne=-1};function Ga(E){let z=Xe.get(E);return(z.__readFormat!==E.format||z.__readType!==E.type)&&(z.__readFormat=E.format,z.__readType=E.type,z.__formatReadable=ot.textureFormatReadable(E.format),z.__typeReadable=ot.textureTypeReadable(E.type)),z}this.readRenderTargetPixels=function(E,z,J,q,Y,_e,Re,Se=0){if(!(E&&E.isWebGLRenderTarget)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=Xe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Re!==void 0&&(Ie=Ie[Re],Array.isArray(Ie)&&(Ie=Ie[0])),Ie){Ee.bindFramebuffer(H.FRAMEBUFFER,Ie);try{let ze=E.textures[Se],Fe=ze.format,ut=ze.type;E.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Se);let Ue=Ga(ze);if(Ue.__formatReadable===!1){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ue.__typeReadable===!1){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=E.width-q&&J>=0&&J<=E.height-Y&&H.readPixels(z,J,q,Y,ye.convert(Fe),ye.convert(ut),_e)}finally{let ze=me!==null?Xe.get(me).__webglFramebuffer:null;Ee.bindFramebuffer(H.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(E,z,J,q,Y,_e,Re,Se=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=Xe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Re!==void 0&&(Ie=Ie[Re],Array.isArray(Ie)&&(Ie=Ie[0])),Ie)if(z>=0&&z<=E.width-q&&J>=0&&J<=E.height-Y){Ee.bindFramebuffer(H.FRAMEBUFFER,Ie);let ze=E.textures[Se],Fe=ze.format,ut=ze.type;E.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Se);let Ue=Ga(ze);if(Ue.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ue.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ht=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,ht),H.bufferData(H.PIXEL_PACK_BUFFER,_e.byteLength,H.STREAM_READ),H.readPixels(z,J,q,Y,ye.convert(Fe),ye.convert(ut),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let Qt=me!==null?Xe.get(me).__webglFramebuffer:null;Ee.bindFramebuffer(H.FRAMEBUFFER,Qt);let Ot=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await D_(H,Ot,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,ht),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,_e),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(ht),H.deleteSync(Ot),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,z=null,J=0){let q=Math.pow(2,-J),Y=Math.floor(E.image.width*q),_e=Math.floor(E.image.height*q),Re=z!==null?z.x:0,Se=z!==null?z.y:0;je.setTexture2D(E,0),H.copyTexSubImage2D(H.TEXTURE_2D,J,0,0,Re,Se,Y,_e),Ee.unbindTexture()},this.copyTextureToTexture=function(E,z,J=null,q=null,Y=0,_e=0){let Re,Se,Ie,ze,Fe,ut,Ue,ht,Qt,Ot=E.isCompressedTexture?E.mipmaps[_e]:E.image;if(J!==null)Re=J.max.x-J.min.x,Se=J.max.y-J.min.y,Ie=J.isBox3?J.max.z-J.min.z:1,ze=J.min.x,Fe=J.min.y,ut=J.isBox3?J.min.z:0;else{let mt=Math.pow(2,-Y);Re=Math.floor(Ot.width*mt),Se=Math.floor(Ot.height*mt),E.isDataArrayTexture?Ie=Ot.depth:E.isData3DTexture?Ie=Math.floor(Ot.depth*mt):Ie=1,ze=0,Fe=0,ut=0}q!==null?(Ue=q.x,ht=q.y,Qt=q.z):(Ue=0,ht=0,Qt=0);let Nt=ye.convert(z.format),vn=ye.convert(z.type),Oe;z.isData3DTexture?(je.setTexture3D(z,0),Oe=H.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(je.setTexture2DArray(z,0),Oe=H.TEXTURE_2D_ARRAY):(je.setTexture2D(z,0),Oe=H.TEXTURE_2D),Ee.activeTexture(H.TEXTURE0),Ee.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,z.flipY),Ee.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),Ee.pixelStorei(H.UNPACK_ALIGNMENT,z.unpackAlignment);let Lt=Ee.getParameter(H.UNPACK_ROW_LENGTH),$e=Ee.getParameter(H.UNPACK_IMAGE_HEIGHT),Li=Ee.getParameter(H.UNPACK_SKIP_PIXELS),cn=Ee.getParameter(H.UNPACK_SKIP_ROWS),Nr=Ee.getParameter(H.UNPACK_SKIP_IMAGES);Ee.pixelStorei(H.UNPACK_ROW_LENGTH,Ot.width),Ee.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ot.height),Ee.pixelStorei(H.UNPACK_SKIP_PIXELS,ze),Ee.pixelStorei(H.UNPACK_SKIP_ROWS,Fe),Ee.pixelStorei(H.UNPACK_SKIP_IMAGES,ut);let Di=E.isDataArrayTexture||E.isData3DTexture,On=z.isDataArrayTexture||z.isData3DTexture;if(E.isDepthTexture){let mt=Xe.get(E),hn=Xe.get(z),ii=Xe.get(mt.__renderTarget),Xt=Xe.get(hn.__renderTarget);Ee.bindFramebuffer(H.READ_FRAMEBUFFER,ii.__webglFramebuffer),Ee.bindFramebuffer(H.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer);for(let pn=0;pn<Ie;pn++)Di&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Xe.get(E).__webglTexture,Y,ut+pn),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Xe.get(z).__webglTexture,_e,Qt+pn)),H.blitFramebuffer(ze,Fe,ze+Re,Fe+Se,Ue,ht,Ue+Re,ht+Se,H.DEPTH_BUFFER_BIT,H.NEAREST);Ee.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Y!==0||E.isRenderTargetTexture||Xe.has(E)){let mt=Xe.get(E),hn=Xe.get(z);Ee.bindFramebuffer(H.READ_FRAMEBUFFER,O),Ee.bindFramebuffer(H.DRAW_FRAMEBUFFER,Q);for(let ii=0;ii<Ie;ii++)Di?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,mt.__webglTexture,Y,ut+ii):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,mt.__webglTexture,Y),On?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,hn.__webglTexture,_e,Qt+ii):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,hn.__webglTexture,_e),Y!==0?H.blitFramebuffer(ze,Fe,ze+Re,Fe+Se,Ue,ht,Ue+Re,ht+Se,H.COLOR_BUFFER_BIT,H.NEAREST):On?H.copyTexSubImage3D(Oe,_e,Ue,ht,Qt+ii,ze,Fe,Re,Se):H.copyTexSubImage2D(Oe,_e,Ue,ht,ze,Fe,Re,Se);Ee.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else On?E.isDataTexture||E.isData3DTexture?H.texSubImage3D(Oe,_e,Ue,ht,Qt,Re,Se,Ie,Nt,vn,Ot.data):z.isCompressedArrayTexture?H.compressedTexSubImage3D(Oe,_e,Ue,ht,Qt,Re,Se,Ie,Nt,Ot.data):H.texSubImage3D(Oe,_e,Ue,ht,Qt,Re,Se,Ie,Nt,vn,Ot):E.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,_e,Ue,ht,Re,Se,Nt,vn,Ot.data):E.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,_e,Ue,ht,Ot.width,Ot.height,Nt,Ot.data):H.texSubImage2D(H.TEXTURE_2D,_e,Ue,ht,Re,Se,Nt,vn,Ot);Ee.pixelStorei(H.UNPACK_ROW_LENGTH,Lt),Ee.pixelStorei(H.UNPACK_IMAGE_HEIGHT,$e),Ee.pixelStorei(H.UNPACK_SKIP_PIXELS,Li),Ee.pixelStorei(H.UNPACK_SKIP_ROWS,cn),Ee.pixelStorei(H.UNPACK_SKIP_IMAGES,Nr),_e===0&&z.generateMipmaps===!0&&z.mipmapsAutoUpdate===!0&&H.generateMipmap(Oe),Ee.unbindTexture()},this.initRenderTarget=function(E){Xe.get(E).__webglFramebuffer===void 0&&je.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?je.setTextureCube(E,0):E.isData3DTexture?je.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?je.setTexture2DArray(E,0):je.setTexture2D(E,0),Ee.unbindTexture()},this.resetState=function(){se=0,ee=0,me=null,Ee.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=vt._getDrawingBufferColorSpace(e),t.unpackColorSpace=vt._getUnpackColorSpace()}};var Id=Vi(su());var Lb=Vi(ws(),1),Db=Vi(Rb(),1);var Pb=r=>{let e,t=new Set,s=(m,v)=>{let y=typeof m=="function"?m(e):m;if(!Object.is(y,e)){let _=e;e=v??(typeof y!="object"||y===null)?y:Object.assign({},e,y),t.forEach(b=>b(e,_))}},o=()=>e,d={setState:s,getState:o,getInitialState:()=>p,subscribe:m=>(t.add(m),()=>t.delete(m))},p=e=r(s,o,d);return d},Ib=(r=>r?Pb(r):Pb);var{useSyncExternalStoreWithSelector:MR}=Db.default,wR=r=>r;function TR(r,e=wR,t){let s=MR(r.subscribe,r.getState,r.getInitialState,e,t);return Lb.default.useDebugValue(s),s}var Nb=(r,e)=>{let t=Ib(r),s=(o,l=e)=>TR(t,o,l);return Object.assign(s,t),s},kb=((r,e)=>r?Nb(r,e):Nb);var ER=r=>typeof r=="object"&&typeof r.then=="function",xo=[];function Fb(r,e,t=(s,o)=>s===o){if(r===e)return!0;if(!r||!e)return!1;let s=r.length;if(e.length!==s)return!1;for(let o=0;o<s;o++)if(!t(r[o],e[o]))return!1;return!0}function Ub(r,e=null,t=!1,s={}){e===null&&(e=[r]);for(let l of xo)if(Fb(e,l.keys,l.equal)){if(t)return;if(Object.prototype.hasOwnProperty.call(l,"error"))throw l.error;if(Object.prototype.hasOwnProperty.call(l,"response"))return s.lifespan&&s.lifespan>0&&(l.timeout&&clearTimeout(l.timeout),l.timeout=setTimeout(l.remove,s.lifespan)),l.response;if(!t)throw l.promise}let o={keys:e,equal:s.equal,remove:()=>{let l=xo.indexOf(o);l!==-1&&xo.splice(l,1)},promise:(ER(r)?r:r(...e)).then(l=>{o.response=l,s.lifespan&&s.lifespan>0&&(o.timeout=setTimeout(o.remove,s.lifespan))}).catch(l=>o.error=l)};if(xo.push(o),!t)throw o.promise}var Ob=(r,e,t)=>Ub(r,e,!1,t),zb=(r,e,t)=>{Ub(r,e,!0,t)};var Bb=r=>{if(r===void 0||r.length===0)xo.splice(0,xo.length);else{let e=xo.find(t=>Fb(r,t.keys,t.equal));e&&e.remove()}};var Xn=Vi(Qm());var dg=((r,e)=>typeof window<"u"&&(((r=window.document)==null?void 0:r.createElement)||((e=window.navigator)==null?void 0:e.product)==="ReactNative"))()?Kt.useLayoutEffect:Kt.useEffect;function CR(r){let e=Kt.useRef(r);return dg(()=>{e.current=r},[r]),e}function hg(r){let e=r.root;for(;e.getState().previousRoot;)e=e.getState().previousRoot;return e}var fS=r=>r&&r.isOrthographicCamera;var RR=r=>r!=null&&(typeof r=="string"||typeof r=="number"||r.isColor),Kb=()=>{};function pg(r){var e;let t=typeof window<"u"?(e=window.devicePixelRatio)!=null?e:2:1;return Array.isArray(r)?Math.min(Math.max(r[0],t),r[1]):r}function PR(r){if(typeof window>"u"||typeof window.matchMedia!="function"||!window.devicePixelRatio)return()=>{};let e,t=()=>{try{var l,c;e=window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),typeof((l=e)==null?void 0:l.addEventListener)=="function"?e.addEventListener("change",o):(c=e)==null||c.addListener==null||c.addListener(o)}catch{e=void 0}},s=()=>{var l,c;typeof((l=e)==null?void 0:l.removeEventListener)=="function"?e.removeEventListener("change",o):(c=e)==null||c.removeListener==null||c.removeListener(o),e=void 0},o=()=>{s(),t(),r()};return t(),s}var gn={obj:r=>r===Object(r)&&!gn.arr(r)&&typeof r!="function",fun:r=>typeof r=="function",str:r=>typeof r=="string",num:r=>typeof r=="number",boo:r=>typeof r=="boolean",und:r=>r===void 0,nul:r=>r===null,arr:r=>Array.isArray(r),equ(r,e,{arrays:t="shallow",objects:s="reference",strict:o=!0}={}){if(typeof r!=typeof e||!!r!=!!e)return!1;if(gn.str(r)||gn.num(r)||gn.boo(r))return r===e;let l=gn.obj(r);if(l&&s==="reference")return r===e;let c=gn.arr(r);if(c&&t==="reference")return r===e;if((c||l)&&r===e)return!0;let d;for(d in r)if(!(d in e))return!1;if(l&&t==="shallow"&&s==="shallow"){for(d in o?e:r)if(!gn.equ(r[d],e[d],{strict:o,objects:"reference"}))return!1}else for(d in o?e:r)if(r[d]!==e[d])return!1;if(gn.und(d)){if(c&&r.length===0&&e.length===0||l&&Object.keys(r).length===0&&Object.keys(e).length===0)return!0;if(r!==e)return!1}return!0}};function dS(r){let e={nodes:{},materials:{},meshes:{}};return r&&r.traverse(t=>{t.name&&(e.nodes[t.name]=t),t.material&&!e.materials[t.material.name]&&(e.materials[t.material.name]=t.material),t.isMesh&&!e.meshes[t.name]&&(e.meshes[t.name]=t)}),e}function hS(r){r.type!=="Scene"&&(r.dispose==null||r.dispose());for(let e in r){let t=r[e];t?.type!=="Scene"&&(t==null||t.dispose==null||t.dispose())}}var pS=["children","key","ref"];function og(r){let e={};for(let t in r)pS.includes(t)||(e[t]=r[t]);return e}function Td(r,e,t,s){let o=r,l=o?.__r3f;return l||(l={root:e,type:t,parent:null,children:[],props:og(s),object:o,eventCount:0,handlers:{},previousVisible:void 0,isHidden:!1},o&&(o.__r3f=l)),l}function fu(r,e){if(!e.includes("-"))return{root:r,key:e,target:r[e]};if(e in r)return{root:r,key:e,target:r[e]};let t=r,s=e.split("-");for(let o of s){if(typeof t!="object"||t===null){if(t!==void 0){let l=s.slice(s.indexOf(o)).join("-");return{root:t,key:l,target:void 0}}return{root:r,key:e,target:void 0}}e=o,r=t,t=t[e]}return{root:r,key:e,target:t}}var Qb=/-\d+$/;function Ed(r,e){if(gn.str(e.props.attach)){if(Qb.test(e.props.attach)){let o=e.props.attach.replace(Qb,""),{root:l,key:c}=fu(r.object,o);Array.isArray(l[c])||(l[c]=[])}let{root:t,key:s}=fu(r.object,e.props.attach);e.previousAttach=t[s],t[s]=e.object}else gn.fun(e.props.attach)&&(e.previousAttach=e.props.attach(r.object,e.object))}function Ad(r,e){if(gn.str(e.props.attach)){let{root:t,key:s}=fu(r.object,e.props.attach),o=e.previousAttach;o===void 0?delete t[s]:t[s]=o}else e.previousAttach==null||e.previousAttach(r.object,e.object);delete e.previousAttach}var ag=[...pS,"args","dispose","attach","object","onUpdate","dispose"],eS=new Map;function IR(r){let e=eS.get(r.constructor);try{e||(e=new r.constructor,eS.set(r.constructor,e))}catch{}return e}function NR(r,e){let t={};for(let s in e)if(!ag.includes(s)&&!gn.equ(e[s],r.props[s])){t[s]=e[s];for(let o in e)o.startsWith(`${s}-`)&&(t[o]=e[o])}for(let s in r.props){if(ag.includes(s)||e.hasOwnProperty(s))continue;let{root:o,key:l}=fu(r.object,s);if(o.constructor&&o.constructor.length===0){let c=IR(o);gn.und(c)||(t[s]=c[l])}else t[s]=0}return t}var LR=["map","emissiveMap","sheenColorMap","specularColorMap","envMap"],DR=/^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/;function Os(r,e){var t;let s=r.__r3f,o=s&&hg(s).getState(),l=s?.eventCount;for(let d in e){let p=e[d];if(ag.includes(d))continue;if(s&&DR.test(d)){typeof p=="function"?s.handlers[d]=p:delete s.handlers[d],s.eventCount=Object.keys(s.handlers).length;continue}if(p===void 0)continue;if(d==="visible"&&s!=null&&s.isHidden&&s.previousVisible!==void 0){s.previousVisible=p;continue}let{root:m,key:v,target:y}=fu(r,d);if(y===void 0&&(typeof m!="object"||m===null))throw Error(`R3F: Cannot set "${d}". Ensure it is an object before setting "${v}".`);if(y instanceof Jr&&p instanceof Jr)y.mask=p.mask;else if(y instanceof rt&&RR(p))y.set(p);else if(y!==null&&typeof y=="object"&&typeof y.set=="function"&&typeof y.copy=="function"&&p!=null&&p.constructor&&y.constructor===p.constructor)y.copy(p);else if(y!==null&&typeof y=="object"&&typeof y.set=="function"&&Array.isArray(p))typeof y.fromArray=="function"?y.fromArray(p):y.set(...p);else if(y!==null&&typeof y=="object"&&typeof y.set=="function"&&typeof p=="number")typeof y.setScalar=="function"?y.setScalar(p):y.set(p);else if(m instanceof qi&&v==="uniforms"&&gn.obj(p)){gn.obj(m.uniforms)||(m.uniforms={});let _=m.uniforms,b=p;for(let x in b){let C=b[x],S=_[x];S?Object.assign(S,C):_[x]={...C}}}else{var c;m[v]=p,o&&!o.linear&&LR.includes(v)&&(c=m[v])!=null&&c.isTexture&&m[v].format===Ni&&m[v].type===ei&&(m[v].colorSpace=Mn)}}if(s!=null&&s.parent&&o!=null&&o.internal&&(t=s.object)!=null&&t.isObject3D&&l!==s.eventCount){let d=s.object,p=o.internal.interaction.indexOf(d);p>-1&&o.internal.interaction.splice(p,1),s.eventCount&&d.raycast!==null&&o.internal.interaction.push(d)}return s&&s.props.attach===void 0&&(s.object.isBufferGeometry?s.props.attach="geometry":s.object.isMaterial&&(s.props.attach="material")),s&&hu(s),r}function hu(r){var e;if(!r.parent)return;r.props.onUpdate==null||r.props.onUpdate(r.object);let t=(e=r.root)==null||e.getState==null?void 0:e.getState();t&&t.internal.frames===0&&t.invalidate()}function kR(r,e){r.manual||(fS(r)?(r.left=e.width/-2,r.right=e.width/2,r.top=e.height/2,r.bottom=e.height/-2):r.aspect=e.width/e.height,r.updateProjectionMatrix())}var li=r=>r?.isObject3D;function FR(r){return(r.eventObject||r.object).uuid+"/"+r.index+r.instanceId}function UR(r,e,t,s){let o=t.get(e);o&&(t.delete(e),t.size===0&&(r.delete(s),o.target.releasePointerCapture(s)))}function OR(r,e,t){let{internal:s}=r.getState();for(let o=0;o<s.interaction.length;o++)s.interaction[o]===e&&(s.interaction[o]=t);for(let o=0;o<s.initialHits.length;o++)s.initialHits[o]===e&&(s.initialHits[o]=t);s.hovered.forEach((o,l)=>{if(o.eventObject===e||o.object===e){s.hovered.delete(l);let c={...o,eventObject:o.eventObject===e?t:o.eventObject,object:o.object===e?t:o.object};s.hovered.set(FR(c),c)}}),s.capturedMap.forEach(o=>{for(let[l,c]of Array.from(o)){let{intersection:d}=c;l!==e&&d.object!==e&&d.eventObject!==e||(l===e&&o.delete(l),o.set(l===e?t:l,{...c,intersection:{...d,object:d.object===e?t:d.object,eventObject:d.eventObject===e?t:d.eventObject}}))}})}function zR(r,e){let{internal:t}=r.getState();t.interaction=t.interaction.filter(s=>s!==e),t.initialHits=t.initialHits.filter(s=>s!==e),t.hovered.forEach((s,o)=>{(s.eventObject===e||s.object===e)&&t.hovered.delete(o)}),t.capturedMap.forEach((s,o)=>{UR(t.capturedMap,e,s,o)})}var mg=r=>typeof r?.then=="function",BR=r=>Object.assign(Promise.resolve(r),{status:"fulfilled",value:r}),HR=r=>{let e=Promise.reject(r);return e.catch(()=>{}),Object.assign(e,{status:"rejected",reason:r})},VR=()=>{let r,e,t=new Promise((s,o)=>{r=l=>{Object.assign(t,{status:"fulfilled",value:l}),s(l)},e=l=>{Object.assign(t,{status:"rejected",reason:l}),o(l)}});return t.status="pending",t.catch(()=>{}),{promise:t,resolve:r,reject:e}},gg=r=>!!(r!=null&&r.render);function GR(r,e){let t={canvas:r,powerPreference:"high-performance",antialias:!0,alpha:!0};return typeof e=="function"?e(t):gg(e)?e:new md({...t,...e})}function WR(r){if((r.hasInitialized==null?void 0:r.hasInitialized())===!1)return;let e=cu(()=>{var t;return r.dispose?r.dispose():(t=r.renderLists)==null||t.dispose==null?void 0:t.dispose()});if(mg(e))return Promise.resolve(e).catch(t=>console.warn("[R3F] Error disposing renderer",t)).then(()=>cu(()=>r.forceContextLoss==null?void 0:r.forceContextLoss()));cu(()=>r.forceContextLoss==null?void 0:r.forceContextLoss())}function XR(r,e){if(r){if(e)return WR(r);cu(()=>{var t;return(t=r.renderLists)==null||t.dispose==null?void 0:t.dispose()}),cu(()=>r.forceContextLoss==null?void 0:r.forceContextLoss())}}function cu(r){try{return r()}catch(e){console.warn("[R3F] Error while unmounting root; teardown may be incomplete:",e)}}var vg=Kt.createContext(null),qR=(r,e)=>{let t=kb((d,p)=>{let m=new X,v=new X,y=new X;function _(g=p().camera,A=v,D=p().size){let{width:R,height:L,top:N,left:M}=D,P=R/L;A.isVector3?y.copy(A):y.set(...A);let V=g.getWorldPosition(m).distanceTo(y);if(fS(g))return{width:R/g.zoom,height:L/g.zoom,top:N,left:M,factor:1,distance:V,aspect:P};{let F=g.fov*Math.PI/180,B=2*Math.tan(F/2)*V,W=B*(R/L);return{width:W,height:B,top:N,left:M,factor:R/W,distance:V,aspect:P}}}let b,x=g=>d(A=>({performance:{...A.performance,current:g}})),C=new ct;return{set:d,get:p,gl:null,camera:null,raycaster:null,events:{priority:1,enabled:!0,connected:!1},scene:null,xr:null,invalidate:(g=1)=>r(p(),g),advance:(g,A)=>e(g,A,p()),legacy:!1,linear:!1,flat:!1,controls:null,clock:new Xl,pointer:C,mouse:C,frameloop:"always",onPointerMissed:void 0,performance:{current:1,min:.5,max:1,debounce:200,regress:()=>{let g=p();b&&clearTimeout(b),g.performance.current!==g.performance.min&&x(g.performance.min),b=setTimeout(()=>x(p().performance.max),g.performance.debounce)}},size:{width:0,height:0,top:0,left:0},viewport:{initialDpr:0,dpr:0,width:0,height:0,top:0,left:0,aspect:0,distance:0,factor:0,getCurrentViewport:_},setEvents:g=>d(A=>({...A,events:{...A.events,...g}})),setSize:(g,A,D=0,R=0)=>{let L=p().camera,N={width:g,height:A,top:D,left:R};d(M=>({size:N,viewport:{...M.viewport,..._(L,v,N)}}))},setDpr:g=>d(A=>{let D=pg(g);return{viewport:{...A.viewport,dpr:D,initialDpr:A.viewport.initialDpr||D}}}),setFrameloop:(g="always")=>{let A=p().clock;A.stop(),A.elapsedTime=0,g!=="never"&&(A.start(),A.elapsedTime=0),d(()=>({frameloop:g}))},previousRoot:void 0,internal:{interaction:[],hovered:new Map,subscribers:[],initialClick:[0,0],initialHits:[],capturedMap:new Map,lastEvent:Kt.createRef(),active:!1,frames:0,priority:0,subscribe:(g,A,D)=>{let R=p().internal;return R.priority=R.priority+(A>0?1:0),R.subscribers.push({ref:g,priority:A,store:D}),R.subscribers=R.subscribers.sort((L,N)=>L.priority-N.priority),()=>{let L=p().internal;L!=null&&L.subscribers&&(L.priority=L.priority-(A>0?1:0),L.subscribers=L.subscribers.filter(N=>N.ref!==g))}}}}}),s=t.getState(),o=s.size,l=s.viewport.dpr,c=s.camera;return t.subscribe(()=>{let{camera:d,size:p,viewport:m,gl:v,set:y}=t.getState();if(p.width!==o.width||p.height!==o.height||m.dpr!==l){o=p,l=m.dpr,kR(d,p),m.dpr>0&&v.setPixelRatio(m.dpr);let _=typeof HTMLCanvasElement<"u"&&v.domElement instanceof HTMLCanvasElement;v.setSize(p.width,p.height,_)}d!==c&&(c=d,y(_=>({viewport:{..._.viewport,..._.viewport.getCurrentViewport(d)}})))}),t.subscribe(d=>r(d)),t};function yg(){let r=Kt.useContext(vg);if(!r)throw new Error("R3F: Hooks can only be used within the Canvas component!");return r}function wo(r=t=>t,e){return yg()(r,e)}function Ha(r,e=0){let t=yg(),s=t.getState().internal.subscribe,o=CR(r);return dg(()=>s(o,e,t),[e,s,t]),null}var tS=new WeakMap,$R=r=>{var e;return typeof r=="function"&&(r==null||(e=r.prototype)==null?void 0:e.constructor)===r};function mS(r,e){return function(t,...s){let o;return $R(t)?(o=tS.get(t),o||(o=new t,tS.set(t,o))):o=t,r&&r(o),Promise.all(s.map(l=>new Promise((c,d)=>o.load(l,p=>{li(p?.scene)&&Object.assign(p,dS(p.scene)),c(p)},e,p=>d(new Error(`Could not load ${l}: ${p?.message}`))))))}}function _g(r,e,t,s){let o=Array.isArray(e)?e:[e],l=Ob(mS(t,s),[r,...o],{equal:gn.equ});return Array.isArray(e)?l:l[0]}_g.preload=function(r,e,t){let s=Array.isArray(e)?e:[e];return zb(mS(t),[r,...s])};_g.clear=function(r,e){let t=Array.isArray(e)?e:[e];return Bb([r,...t])};var YR=1,nS=8,wd=32,iS=2,jR=268435456,ZR={objects:"shallow"};function JR(r,e){if(!e&&typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement&&r.parentElement){let{width:t,height:s,top:o,left:l}=r.parentElement.getBoundingClientRect();return{width:t,height:s,top:o,left:l}}else if(!e&&typeof OffscreenCanvas<"u"&&r instanceof OffscreenCanvas)return{width:r.width,height:r.height,top:0,left:0};return{width:0,height:0,top:0,left:0,...e}}function KR({store:r,configuration:e},t,s){let{gl:o,scene:l,camera:c,shadows:d=!1,linear:p=!1,flat:m=!1,legacy:v=!1,frameloop:y="always",dpr:_=[1,2],performance:b,onPointerMissed:x}=s,C=JR(t,s.size),S={...s,shadows:d,linear:p,flat:m,legacy:v,frameloop:y,size:C},g=r.getState(),A=g.gl,D=e.previous,R=F=>!D||!gn.equ(S[F],D[F],ZR);e.previous=void 0;let L=g.raycaster;if(L||g.set({raycaster:L=new mo}),R("raycaster")){var N;let{params:F,...B}=(N=s.raycaster)!=null?N:{};Os(L,{...B,params:{...L.params,...F}})}if(!g.camera||g.camera===e.camera&&R("camera")){e.camera=c;let F=c?.isCamera,B=F?c:s.orthographic?new po(0,0,0,0,.1,1e3):new si(75,0,.1,1e3);F||(B.position.z=5,c&&(Os(B,c),B.manual||("aspect"in c||"left"in c||"right"in c||"bottom"in c||"top"in c)&&(B.manual=!0,B.updateProjectionMatrix())),!g.camera&&!(c!=null&&c.rotation)&&B.lookAt(0,0,0)),g.set({camera:B}),L.camera=B}if(!g.scene){let F;l!=null&&l.isScene?(F=l,Td(F,r,"",{})):(F=new El,Td(F,r,"",{}),l&&Os(F,l)),g.set({scene:F})}if(s.events&&!g.events.handlers&&g.set({events:s.events(r)}),R("size")&&g.setSize(C.width,C.height,C.top,C.left),g.viewport.dpr!==pg(_)&&g.setDpr(_),R("frameloop")&&g.setFrameloop(y),R("onPointerMissed")&&g.set({onPointerMissed:x}),b&&R("performance")&&g.set(F=>({performance:{...F.performance,...b}})),!g.xr){var M;let F=(Z,O)=>{let Q=r.getState();Q.frameloop!=="never"&&wg(Z,!0,Q,O)},B=()=>{let Z=r.getState();Z.gl.xr.enabled=Z.gl.xr.isPresenting,Z.gl.xr.setAnimationLoop(Z.gl.xr.isPresenting?F:null),Z.gl.xr.isPresenting||Cn(Z)},W={connect(){let Z=r.getState().gl;Z.xr.addEventListener("sessionstart",B),Z.xr.addEventListener("sessionend",B)},disconnect(){let Z=r.getState().gl;Z.xr.removeEventListener("sessionstart",B),Z.xr.removeEventListener("sessionend",B)}};typeof((M=A.xr)==null?void 0:M.addEventListener)=="function"&&W.connect(),g.set({xr:W})}if(A.shadowMap&&R("shadows")){let F=A.shadowMap.enabled,B=A.shadowMap.type;if(A.shadowMap.enabled=!!d,gn.boo(d))A.shadowMap.type=Pa;else if(gn.str(d)){var P;let W={basic:Qp,percentage:go,soft:Pa,variance:Ds};A.shadowMap.type=(P=W[d])!=null?P:Pa}else gn.obj(d)&&Object.assign(A.shadowMap,d);(F!==A.shadowMap.enabled||B!==A.shadowMap.type)&&(A.shadowMap.needsUpdate=!0)}let V=o&&!gn.fun(o)&&!gg(o)?o:void 0;R("legacy")&&(vt.enabled=!v,g.set({legacy:v})),R("linear")&&(V?.outputColorSpace===void 0&&(A.outputColorSpace=p?uo:Mn),g.set({linear:p})),R("flat")&&(V?.toneMapping===void 0&&(A.toneMapping=m?gi:ql),g.set({flat:m})),V&&R("gl")&&Os(A,V),e.previous=S}function QR(r){let e=()=>{var o;return(o=r.store.getState().gl)==null?void 0:o.xr},t=()=>{var o,l,c,d;let p=r.store.getState();if((o=e())!=null&&o.isPresenting||(l=e())!=null&&l.getSession!=null&&l.getSession()){e().addEventListener("sessionend",t);return}(c=e())==null||c.removeEventListener==null||c.removeEventListener("sessionend",t);let m=r.configuration.previous;if(!m)return;let v=(d=m.dpr)!=null?d:[1,2];p.viewport.dpr!==pg(v)&&p.setDpr(v)},s=PR(t);return()=>{var o;s(),(o=e())==null||o.removeEventListener==null||o.removeEventListener("sessionend",t)}}var e2={name:"@react-three/fiber",version:"9.8.2",description:"A React renderer for Threejs",keywords:["react","renderer","fiber","three","threejs"],author:"Paul Henschel (https://github.com/drcmda)",license:"MIT",maintainers:["Josh Ellis (https://github.com/joshuaellis)","Cody Bennett (https://github.com/codyjasonbennett)","Kris Baumgarter (https://github.com/krispya)"],bugs:{url:"https://github.com/pmndrs/react-three-fiber/issues"},homepage:"https://github.com/pmndrs/react-three-fiber#readme",repository:{type:"git",url:"git+https://github.com/pmndrs/react-three-fiber.git"},collective:{type:"opencollective",url:"https://opencollective.com/react-three-fiber"},main:"dist/react-three-fiber.cjs.js",module:"dist/react-three-fiber.esm.js",types:"dist/react-three-fiber.cjs.d.ts","react-native":"native/dist/react-three-fiber-native.cjs.js",files:["dist","native","react-reconciler","CHANGELOG.md"],sideEffects:!1,preconstruct:{entrypoints:["index.tsx","native.tsx"]},scripts:{prebuild:"cp ../../readme.md readme.md"},devDependencies:{"@types/react-reconciler":"^0.33.0","react-reconciler":"^0.34.0"},dependencies:{"@babel/runtime":"^7.17.8","@types/webxr":"*","base64-js":"^1.5.1",buffer:"^6.0.3","its-fine":"^2.1.1","react-use-measure":"^2.1.7",scheduler:"^0.28.0","suspend-react":"^0.1.3","use-sync-external-store":"^1.4.0",zustand:"^5.0.3"},peerDependencies:{expo:">=43.0","expo-asset":">=8.4","expo-file-system":">=11.0","expo-gl":">=11.0",react:">=19 <19.4","react-dom":">=19 <19.4","react-native":">=0.78",three:">=0.156"},peerDependenciesMeta:{"react-dom":{optional:!0},"react-native":{optional:!0},expo:{optional:!0},"expo-asset":{optional:!0},"expo-file-system":{optional:!0},"expo-gl":{optional:!0}}};function t2(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var rS={exports:{}},lg={exports:{}};lg.exports;var sS;function n2(){return sS||(sS=1,(function(r){r.exports=function(e){function t(n,i,a,u){return new KS(n,i,a,u)}function s(){}function o(n){var i="https://react.dev/errors/"+n;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(n){for(var i=n,a=i;a&&!a.alternate;)i=a,(i.flags&4098)!==0&&(n=i.return),a=i.return;for(;i.return;)i=i.return;return i.tag===3?n:null}function c(n){if(l(n)!==n)throw Error(o(188))}function d(n){var i=n.alternate;if(!i){if(i=l(n),i===null)throw Error(o(188));return i!==n?null:n}for(var a=n,u=i;;){var f=a.return;if(f===null)break;var h=f.alternate;if(h===null){if(u=f.return,u!==null){a=u;continue}break}if(f.child===h.child){for(h=f.child;h;){if(h===a)return c(f),n;if(h===u)return c(f),i;h=h.sibling}throw Error(o(188))}if(a.return!==u.return)a=f,u=h;else{for(var w=!1,k=f.child;k;){if(k===a){w=!0,a=f,u=h;break}if(k===u){w=!0,u=f,a=h;break}k=k.sibling}if(!w){for(k=h.child;k;){if(k===a){w=!0,a=h,u=f;break}if(k===u){w=!0,u=h,a=f;break}k=k.sibling}if(!w)throw Error(o(189))}}if(a.alternate!==u)throw Error(o(190))}if(a.tag!==3)throw Error(o(188));return a.stateNode.current===a?n:i}function p(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n;for(n=n.child;n!==null;){if(i=p(n),i!==null)return i;n=n.sibling}return null}function m(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n;for(n=n.child;n!==null;){if(n.tag!==4&&(i=m(n),i!==null))return i;n=n.sibling}return null}function v(n){return n===null||typeof n!="object"?null:(n=Mv&&n[Mv]||n["@@iterator"],typeof n=="function"?n:null)}function y(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===sx?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Fo:return"Fragment";case Nh:return"Profiler";case Sv:return"StrictMode";case Dh:return"Suspense";case kh:return"SuspenseList";case Uh:return"Activity";case Oh:return"ViewTransition"}if(typeof n=="object")switch(n.$$typeof){case ko:return"Portal";case kr:return n.displayName||"Context";case xv:return(n._context.displayName||"Context")+".Consumer";case Lh:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Fh:return i=n.displayName||null,i!==null?i:y(n.type)||"Memo";case hs:i=n._payload,n=n._init;try{return y(n(i))}catch{}}return null}function _(n){return{current:n}}function b(n){0>zo||(n.current=qh[zo],qh[zo]=null,zo--)}function x(n,i){zo++,qh[zo]=n.current,n.current=i}function C(n){return n>>>=0,n===0?32:31-(q1(n)/$1|0)|0}function S(n){var i=n&42;if(i!==0)return i;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return n&-n;case 262144:case 524288:case 1048576:case 2097152:return n&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function g(n,i,a){var u=n.pendingLanes;if(u===0)return 0;var f=0,h=n.suspendedLanes,w=n.pingedLanes;n=n.warmLanes;var k=u&134217727;return k!==0?(u=k&~h,u!==0?f=S(u):(w&=k,w!==0?f=S(w):a||(a=k&~n,a!==0&&(f=S(a))))):(k=u&~h,k!==0?f=S(k):w!==0?f=S(w):a||(a=u&~n,a!==0&&(f=S(a)))),f===0?0:i!==0&&i!==f&&(i&h)===0&&(h=f&-f,a=i&-i,h>=a||h===32&&(a&4194048)!==0)?i:f}function A(n,i){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&i)===0}function D(n,i){(i&8)!==0&&(i|=i&32);var a=n.entangledLanes;if(a!==0)for(n=n.entanglements,a&=i;0<a;){var u=31-Si(a),f=1<<u;i|=n[u],a&=~f}return i}function R(n,i){switch(n){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function L(){var n=Xu;return Xu<<=1,(Xu&62914560)===0&&(Xu=4194304),n}function N(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function M(n,i){n.pendingLanes|=i,i!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function P(n,i,a,u,f,h){var w=n.pendingLanes;n.pendingLanes=a,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=a,n.entangledLanes&=a,n.errorRecoveryDisabledLanes&=a,n.shellSuspendCounter=0;var k=n.entanglements,K=n.expirationTimes,fe=n.hiddenUpdates;for(a=w&~a;0<a;){var ge=31-Si(a),Ce=1<<ge;k[ge]=0,K[ge]=-1;var De=fe[ge];if(De!==null)for(fe[ge]=null,ge=0;ge<De.length;ge++){var gt=De[ge];gt!==null&&(gt.lane&=-536870913)}a&=~Ce}u!==0&&V(n,u,0),h!==0&&f===0&&n.tag!==0&&(n.suspendedLanes|=h&~(w&~i))}function V(n,i,a){n.pendingLanes|=i,n.suspendedLanes&=~i;var u=31-Si(i);n.entangledLanes|=i,n.entanglements[u]=n.entanglements[u]|1073741824|a&261930}function F(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var u=31-Si(a),f=1<<u;f&i|n[u]&i&&(n[u]|=i),a&=~f}}function B(n,i){var a=i&-i;return a=(a&42)!==0?1:W(a),(a&(n.suspendedLanes|i))!==0?0:a}function W(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Z(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function O(n){if(typeof K1=="function"&&Q1(n),xi&&typeof xi.setStrictMode=="function")try{xi.setStrictMode(il,n)}catch{}}function Q(n,i){if(n.name!=null&&n.name!=="auto")return n.name;if(i.autoName!==null)return i.autoName;n=nr.identifierPrefix;var a=eM++;return n="_"+n+"t_"+a.toString(32)+"_",i.autoName=n}function se(n){var i;if(n==null||typeof n=="string")return n;var a=null,u=ta;if(u!==null)for(var f=0;f<u.length;f++){var h=n[u[f]];if(h!=null){if(h==="none")return"none";a=a==null?h:a+(" "+h)}}return(i=a)!=null?i:n.default}function ee(n,i){return n=se(n),i=se(i),i==null?n==="auto"?null:n:i==="auto"?null:i}function me(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}function ne(n){if(jh===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);jh=i&&i[1]||"",Kv=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+jh+n+Kv}function ce(n,i){if(!n||Zh)return"";Zh=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(i){var Ce=function(){throw Error()};if(Object.defineProperty(Ce.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ce,[])}catch(At){var De=At}Reflect.construct(n,[],Ce)}else{try{Ce.call()}catch(At){De=At}Ce=!1;try{var gt=Object.getOwnPropertyDescriptor(n.prototype,"props");Object.defineProperty(n.prototype,"props",{configurable:!0,set:function(){throw Error()}}),Ce=!0,new n}finally{Ce&&(gt!==void 0?Object.defineProperty(n.prototype,"props",gt):delete n.prototype.props)}}}else{try{throw Error()}catch(At){De=At}(Ce=n())&&typeof Ce.catch=="function"&&Ce.catch(function(){})}}catch(At){if(At&&De&&typeof At.stack=="string")return[At.stack,De.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=u.DetermineComponentFrameRoot(),w=h[0],k=h[1];if(w&&k){var K=w.split(`
`),fe=k.split(`
`);for(f=u=0;u<K.length&&!K[u].includes("DetermineComponentFrameRoot");)u++;for(;f<fe.length&&!fe[f].includes("DetermineComponentFrameRoot");)f++;if(u===K.length||f===fe.length)for(u=K.length-1,f=fe.length-1;1<=u&&0<=f&&K[u]!==fe[f];)f--;for(;1<=u&&0<=f;u--,f--)if(K[u]!==fe[f]){if(u!==1||f!==1)do if(u--,f--,0>f||K[u]!==fe[f]){var ge=`
`+K[u].replace(" at new "," at ");return n.displayName&&ge.includes("<anonymous>")&&(ge=ge.replace("<anonymous>",n.displayName)),ge}while(1<=u&&0<=f);break}}}finally{Zh=!1,Error.prepareStackTrace=a}return(a=n?n.displayName||n.name:"")?ne(a):""}function he(n,i){switch(n.tag){case 26:case 27:case 5:return ne(n.type);case 16:return ne("Lazy");case 13:return n.child!==i&&i!==null?ne("Suspense Fallback"):ne("Suspense");case 19:return ne("SuspenseList");case 0:case 15:return ce(n.type,!1);case 11:return ce(n.type.render,!1);case 1:return ce(n.type,!0);case 31:return ne("Activity");case 30:return ne("ViewTransition");default:return""}}function Be(n){try{var i="",a=null;do i+=he(n,a),a=n,n=n.return;while(n);return i}catch(u){return`
Error generating stack: `+u.message+`
`+u.stack}}function Ve(n,i){if(typeof n=="object"&&n!==null){var a=Qv.get(n);return a!==void 0?a:(i={value:n,source:i,stack:Be(i)},Qv.set(n,i),i)}return{value:n,source:i,stack:Be(i)}}function re(n,i){Ho[Vo++]=rl,Ho[Vo++]=$u,$u=n,rl=i}function Pe(n,i,a){Oi[zi++]=mr,Oi[zi++]=gr,Oi[zi++]=ps,ps=n;var u=mr;n=gr;var f=32-Si(u)-1;u&=~(1<<f),a+=1;var h=32-Si(i)+f;if(30<h){var w=f-f%5;h=(u&(1<<w)-1).toString(32),u>>=w,f-=w,mr=1<<32-Si(i)+f|a<<f|u,gr=h+n}else mr=1<<h|a<<f|u,gr=n}function ke(n){n.return!==null&&(re(n,1),Pe(n,1,0))}function We(n){for(;n===$u;)$u=Ho[--Vo],Ho[Vo]=null,rl=Ho[--Vo],Ho[Vo]=null;for(;n===ps;)ps=Oi[--zi],Oi[zi]=null,gr=Oi[--zi],Oi[zi]=null,mr=Oi[--zi],Oi[zi]=null}function Ne(n,i){Oi[zi++]=mr,Oi[zi++]=gr,Oi[zi++]=ps,mr=i.id,gr=i.overflow,ps=n}function Ke(n,i){x(ms,i),x(sl,n),x(Vn,null),n=lx(i),b(Vn),x(Vn,n)}function Bt(){b(Vn),b(sl),b(ms)}function qe(n){var i=n.memoizedState;i!==null&&(i=i.memoizedState,hr?Ur._currentValue=i:Ur._currentValue2=i,x(Yu,n)),i=Vn.current;var a=ux(i,n.type);i!==a&&(x(sl,n),x(Vn,a))}function Tt(n){sl.current===n&&(b(Vn),b(sl)),Yu.current===n&&(b(Yu),hr?Ur._currentValue=Uo:Ur._currentValue2=Uo)}function yt(n){var i=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw $n(Ve(i,n)),Jh}function dt(n,i){if(!Hn)throw Error(o(175));M1(n.stateNode,n.type,n.memoizedProps,i,n)||yt(n,!0)}function on(n){for(Pn=n.return;Pn;)switch(Pn.tag){case 5:case 31:case 13:Bi=!1;return;case 27:case 3:Bi=!0;return;default:Pn=Pn.return}}function Wt(n){if(!Hn||n!==Pn)return!1;if(!pt)return on(n),pt=!0,!1;var i=n.tag;if(tn?i!==3&&i!==27&&(i!==5||Bv(n.type)&&!Bu(n.type,n.memoizedProps))&&jt&&yt(n):i!==3&&(i!==5||Bv(n.type)&&!Bu(n.type,n.memoizedProps))&&jt&&yt(n),on(n),i===13){if(!Hn)throw Error(o(316));if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(o(317));jt=C1(n)}else if(i===31){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(o(317));jt=A1(n)}else jt=tn&&i===27?h1(n.type,jt):Pn?zv(n.stateNode):null;return!0}function an(){Hn&&(jt=Pn=null,pt=!1)}function Ht(){var n=gs;return n!==null&&(pi===null?pi=n:pi.push.apply(pi,n),gs=null),n}function $n(n){gs===null?gs=[n]:gs.push(n)}function Vt(n,i,a){hr?(x(ju,i._currentValue),i._currentValue=a):(x(ju,i._currentValue2),i._currentValue2=a)}function ln(n){var i=ju.current;hr?n._currentValue=i:n._currentValue2=i,b(ju)}function Fn(n,i,a){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===a)break;n=n.return}}function Yn(n,i,a,u){var f=n.child;for(f!==null&&(f.return=n);f!==null;){var h=f.dependencies;if(h!==null){var w=f.child;h=h.firstContext;e:for(;h!==null;){var k=h;h=f;for(var K=0;K<i.length;K++)if(k.context===i[K]){h.lanes|=a,k=h.alternate,k!==null&&(k.lanes|=a),Fn(h.return,a,n),u||(w=null);break e}h=k.next}}else if(f.tag===18){if(w=f.return,w===null)throw Error(o(341));w.lanes|=a,h=w.alternate,h!==null&&(h.lanes|=a),Fn(w,a,n),w=null}else f.tag===13&&f.memoizedState!==null&&f.memoizedState.dehydrated===null?(f.lanes|=a,w=f.alternate,w!==null&&(w.lanes|=a),Fn(f.return,a,n),w=f.child,w=w!==null?w.sibling:null):w=f.child;if(w!==null)w.return=f;else for(w=f;w!==null;){if(w===n){w=null;break}if(f=w.sibling,f!==null){f.return=w.return,w=f;break}w=w.return}f=w}}function H(n,i,a,u){n=null;for(var f=i,h=!1;f!==null;){if(!h){if((f.flags&524288)!==0)h=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var w=f.alternate;if(w===null)throw Error(o(387));if(w=w.memoizedProps,w!==null){var k=f.type;Mi(f.pendingProps.value,w.value)||(n!==null?n.push(k):n=[k])}}else if(f===Yu.current){if(w=f.alternate,w===null)throw Error(o(387));w.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(n!==null?n.push(Ur):n=[Ur])}f=f.return}return n!==null&&Yn(i,n,a,u),i.flags|=262144,n!==null}function Un(n){for(n=n.firstContext;n!==null;){var i=n.context;if(!Mi(hr?i._currentValue:i._currentValue2,n.memoizedValue))return!0;n=n.next}return!1}function Ct(n){Ys=n,Or=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function ot(n){return un(Ys,n)}function Ee(n,i){return Ys===null&&Ct(n),un(n,i)}function un(n,i){var a=hr?i._currentValue:i._currentValue2;if(i={context:i,memoizedValue:a,next:null},Or===null){if(n===null)throw Error(o(308));Or=i,n.dependencies={lanes:0,firstContext:i},n.flags|=524288}else Or=Or.next=i;return a}function Xe(){return{controller:new nM,data:new Map,refCount:0}}function je(n){n.refCount--,n.refCount===0&&iM(rM,function(){n.controller.abort()})}function I(n,i){if((n.pendingLanes&4194048)!==0){var a=n.transitionTypes;for(a===null&&(a=n.transitionTypes=[]),n=0;n<i.length;n++){var u=i[n];a.indexOf(u)===-1&&a.push(u)}}}function T(n){var i=n.transitionTypes;return n.transitionTypes=null,i}function $(){}function de(n){n!==Wo&&n.next===null&&(Wo===null?Go=Wo=n:Wo=Wo.next=n),Zu=!0,Kh||(Kh=!0,U())}function ue(n,i){if(!Qh&&Zu){Qh=!0;do for(var a=!1,u=Go;u!==null;){if(!i)if(n!==0){var f=u.pendingLanes;if(f===0)var h=0;else{var w=u.suspendedLanes,k=u.pingedLanes;h=(1<<31-Si(42|n)+1)-1,h&=f&~(w&~k),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,Me(u,h))}else h=xt,h=g(u,u===Gt?h:0,u.cancelPendingCommit!==null||u.timeoutHandle!==$s),(h&3)===0||A(u,h)||(a=!0,Me(u,h));u=u.next}while(a);Qh=!1}}function xe(){Te()}function Te(){Zu=Kh=!1;var n=0;js!==0&&yx()&&(n=js);for(var i=fi(),a=null,u=Go;u!==null;){var f=u.next,h=oe(u,i);h===0?(u.next=null,a===null?Go=f:a.next=f,f===null&&(Wo=a)):(a=u,(n!==0||(h&3)!==0)&&(Zu=!0)),u=f}rn!==0&&rn!==5||ue(n,!1),js!==0&&(js=0)}function oe(n,i){for(var a=n.suspendedLanes,u=n.pingedLanes,f=n.expirationTimes,h=n.pendingLanes&-62914561;0<h;){var w=31-Si(h),k=1<<w,K=f[w];K===-1?((k&a)===0||(k&u)!==0)&&(f[w]=R(k,i)):K<=i&&(n.expiredLanes|=k),h&=~k}if(i=Gt,a=xt,a=g(n,n===i?a:0,n.cancelPendingCommit!==null||n.timeoutHandle!==$s),u=n.callbackNode,a===0||n===i&&(Ft===2||Ft===9)||n.cancelPendingCommit!==null)return u!==null&&u!==null&&$h(u),n.callbackNode=null,n.callbackPriority=0;if((a&3)===0||A(n,a)){if(i=a&-a,i===n.callbackPriority)return i;switch(u!==null&&$h(u),Z(a)){case 2:case 8:a=Z1;break;case 32:a=Yh;break;case 268435456:a=J1;break;default:a=Yh}return u=ae.bind(null,n),a=qu(a,u),n.callbackPriority=i,n.callbackNode=a,i}return u!==null&&u!==null&&$h(u),n.callbackPriority=2,n.callbackNode=null,2}function ae(n,i){if(rn!==0&&rn!==5)return n.callbackNode=null,n.callbackPriority=0,null;var a=n.callbackNode;if(Qa()&&n.callbackNode!==a)return null;var u=xt;return u=g(n,n===Gt?u:0,n.cancelPendingCommit!==null||n.timeoutHandle!==$s),u===0?null:(ev(n,u,i),oe(n,fi()),n.callbackNode!=null&&n.callbackNode===a?ae.bind(null,n):null)}function Me(n,i){if(Qa())return null;ev(n,i,!0)}function U(){Ex?Ax(function(){(bt&6)!==0?qu(Zv,xe):Te()}):qu(Zv,xe)}function le(){if(js===0){var n=Zs;n===0&&(n=Gu,Gu<<=1,(Gu&261888)===0&&(Gu=256)),js=n}return js}function ie(n,i){if(al===null){var a=al=[];ep=0,Zs=le(),Xo={status:"pending",value:void 0,then:function(u){a.push(u)}}}return ep++,i.then(we,we),i}function we(){if(--ep===0&&(ol=null,al!==null)){Xo!==null&&(Xo.status="fulfilled");var n=al;al=null,Zs=0,Xo=null;for(var i=0;i<n.length;i++)(0,n[i])()}}function ye(n,i){var a=[],u={status:"pending",value:null,reason:null,then:function(f){a.push(f)}};return n.then(function(){u.status="fulfilled",u.value=i;for(var f=0;f<a.length;f++)(0,a[f])(i)},function(f){for(u.status="rejected",u.reason=f,f=0;f<a.length;f++)(0,a[f])(void 0)}),u}function be(){var n=Js.current;return n!==null?n:Gt.pooledCache}function He(n,i){i===null?x(Js,Js.current):x(Js,i.pool)}function st(){var n=be();return n===null?null:{parent:hr?nn._currentValue:nn._currentValue2,pool:n}}function pe(n,i){if(Mi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),u=Object.keys(i);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var f=a[u];if(!tM.call(i,f)||!Mi(n[f],i[f]))return!1}return!0}function Ge(n){return n=n.status,n==="fulfilled"||n==="rejected"}function it(n,i,a){switch(a=n[a],a===void 0?n.push(i):a!==i&&(i.then($,$),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,dn(n),n===void 0&&!("reason"in i)?Error(o(600)):n;default:if(typeof i.status=="string")i.then($,$);else{if(n=Gt,n!==null&&100<n.shellSuspendCounter)throw Error(o(482));n=i,n.status="pending",n.then(function(u){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=u}},function(u){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=u}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,dn(n),n}throw Ks=i,qo}}function Ae(n){try{var i=n._init;return i(n._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ks=a,qo):a}}function Rt(){if(Ks===null)throw Error(o(459));var n=Ks;return Ks=null,n}function dn(n){if(n===qo||n===Ju)throw Error(o(483))}function vi(n){var i=ll;return ll+=1,$o===null&&($o=[]),it($o,n,i)}function ji(n,i){i=i.props.ref,n.ref=i!==void 0?i:null}function os(n,i){throw i.$$typeof===tx?Error(o(525)):(n=Object.prototype.toString.call(i),Error(o(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n)))}function gu(n){function i(j,G){if(n){var te=j.deletions;te===null?(j.deletions=[G],j.flags|=16):te.push(G)}}function a(j,G){if(!n)return null;for(;G!==null;)i(j,G),G=G.sibling;return null}function u(j){for(var G=new Map;j!==null;)j.key===null?G.set(j.index,j):G.set(j.key,j),j=j.sibling;return G}function f(j,G){return j=Dr(j,G),j.index=0,j.sibling=null,j}function h(j,G,te){return j.index=te,n?(te=j.alternate,te!==null?(te=te.index,te<G?(j.flags|=2,G):te):(j.flags|=134217730,G)):(j.flags|=1048576,G)}function w(j){return n&&j.alternate===null&&(j.flags|=134217730),j}function k(j,G,te,ve){return G===null||G.tag!==6?(G=Ch(te,j.mode,ve),G.return=j,G):(G=f(G,te),G.return=j,G)}function K(j,G,te,ve){var Je=te.type;return Je===Fo?(j=ge(j,G,te.props.children,ve,te.key),ji(j,te),j):G!==null&&(G.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===hs&&Ae(Je)===G.type)?(G=f(G,te.props),ji(G,te),G.return=j,G):(G=Uu(te.type,te.key,te.props,null,j.mode,ve),ji(G,te),G.return=j,G)}function fe(j,G,te,ve){return G===null||G.tag!==4||G.stateNode.containerInfo!==te.containerInfo||G.stateNode.implementation!==te.implementation?(G=Rh(te,j.mode,ve),G.return=j,G):(G=f(G,te.children||[]),G.return=j,G)}function ge(j,G,te,ve,Je){return G===null||G.tag!==7?(G=qs(te,j.mode,ve,Je),G.return=j,G):(G=f(G,te),G.return=j,G)}function Ce(j,G,te){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=Ch(""+G,j.mode,te),G.return=j,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case Ou:return te=Uu(G.type,G.key,G.props,null,j.mode,te),ji(te,G),te.return=j,te;case ko:return G=Rh(G,j.mode,te),G.return=j,G;case hs:return G=Ae(G),Ce(j,G,te)}if(zu(G)||v(G))return G=qs(G,j.mode,te,null),G.return=j,G;if(typeof G.then=="function")return Ce(j,vi(G),te);if(G.$$typeof===kr)return Ce(j,Ee(j,G),te);os(j,G)}return null}function De(j,G,te,ve){var Je=G!==null?G.key:null;if(typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint")return Je!==null?null:k(j,G,""+te,ve);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case Ou:return te.key===Je?K(j,G,te,ve):null;case ko:return te.key===Je?fe(j,G,te,ve):null;case hs:return te=Ae(te),De(j,G,te,ve)}if(zu(te)||v(te))return Je!==null?null:ge(j,G,te,ve,null);if(typeof te.then=="function")return De(j,G,vi(te),ve);if(te.$$typeof===kr)return De(j,G,Ee(j,te),ve);os(j,te)}return null}function gt(j,G,te,ve,Je){if(typeof ve=="string"&&ve!==""||typeof ve=="number"||typeof ve=="bigint")return j=j.get(te)||null,k(G,j,""+ve,Je);if(typeof ve=="object"&&ve!==null){switch(ve.$$typeof){case Ou:return j=j.get(ve.key===null?te:ve.key)||null,K(G,j,ve,Je);case ko:return j=j.get(ve.key===null?te:ve.key)||null,fe(G,j,ve,Je);case hs:return ve=Ae(ve),gt(j,G,te,ve,Je)}if(zu(ve)||v(ve))return j=j.get(te)||null,ge(G,j,ve,Je,null);if(typeof ve.then=="function")return gt(j,G,te,vi(ve),Je);if(ve.$$typeof===kr)return gt(j,G,te,Ee(G,ve),Je);os(G,ve)}return null}function At(j,G,te,ve){for(var Je=null,sn=null,Qe=G,It=G=0,Sn=null;Qe!==null&&It<te.length;It++){Qe.index>It?(Sn=Qe,Qe=null):Sn=Qe.sibling;var Et=De(j,Qe,te[It],ve);if(Et===null){Qe===null&&(Qe=Sn);break}n&&Qe&&Et.alternate===null&&i(j,Qe),G=h(Et,G,It),sn===null?Je=Et:sn.sibling=Et,sn=Et,Qe=Sn}if(It===te.length)return a(j,Qe),pt&&re(j,It),Je;if(Qe===null){for(;It<te.length;It++)Qe=Ce(j,te[It],ve),Qe!==null&&(G=h(Qe,G,It),sn===null?Je=Qe:sn.sibling=Qe,sn=Qe);return pt&&re(j,It),Je}for(Qe=u(Qe);It<te.length;It++)Sn=gt(Qe,j,It,te[It],ve),Sn!==null&&(n&&(Et=Sn.alternate,Et!==null&&Qe.delete(Et.key===null?It:Et.key)),G=h(Sn,G,It),sn===null?Je=Sn:sn.sibling=Sn,sn=Sn);return n&&Qe.forEach(function(Ms){return i(j,Ms)}),pt&&re(j,It),Je}function xs(j,G,te,ve){if(te==null)throw Error(o(151));for(var Je=null,sn=null,Qe=G,It=G=0,Sn=null,Et=te.next();Qe!==null&&!Et.done;It++,Et=te.next()){Qe.index>It?(Sn=Qe,Qe=null):Sn=Qe.sibling;var Ms=De(j,Qe,Et.value,ve);if(Ms===null){Qe===null&&(Qe=Sn);break}n&&Qe&&Ms.alternate===null&&i(j,Qe),G=h(Ms,G,It),sn===null?Je=Ms:sn.sibling=Ms,sn=Ms,Qe=Sn}if(Et.done)return a(j,Qe),pt&&re(j,It),Je;if(Qe===null){for(;!Et.done;It++,Et=te.next())Et=Ce(j,Et.value,ve),Et!==null&&(G=h(Et,G,It),sn===null?Je=Et:sn.sibling=Et,sn=Et);return pt&&re(j,It),Je}for(Qe=u(Qe);!Et.done;It++,Et=te.next())Et=gt(Qe,j,It,Et.value,ve),Et!==null&&(n&&(Sn=Et.alternate,Sn!==null&&Qe.delete(Sn.key===null?It:Sn.key)),G=h(Et,G,It),sn===null?Je=Et:sn.sibling=Et,sn=Et);return n&&Qe.forEach(function(uM){return i(j,uM)}),pt&&re(j,It),Je}function ro(j,G,te,ve){if(typeof te=="object"&&te!==null&&te.type===Fo&&te.key===null&&te.props.ref===void 0&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case Ou:e:{for(var Je=te.key;G!==null;){if(G.key===Je){if(Je=te.type,Je===Fo){if(G.tag===7){a(j,G.sibling),ve=f(G,te.props.children),ji(ve,te),ve.return=j,j=ve;break e}}else if(G.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===hs&&Ae(Je)===G.type){a(j,G.sibling),ve=f(G,te.props),ji(ve,te),ve.return=j,j=ve;break e}a(j,G);break}else i(j,G);G=G.sibling}te.type===Fo?(ve=qs(te.props.children,j.mode,ve,te.key),ji(ve,te),ve.return=j,j=ve):(ve=Uu(te.type,te.key,te.props,null,j.mode,ve),ji(ve,te),ve.return=j,j=ve)}return w(j);case ko:e:{for(Je=te.key;G!==null;){if(G.key===Je)if(G.tag===4&&G.stateNode.containerInfo===te.containerInfo&&G.stateNode.implementation===te.implementation){a(j,G.sibling),ve=f(G,te.children||[]),ve.return=j,j=ve;break e}else{a(j,G);break}else i(j,G);G=G.sibling}ve=Rh(te,j.mode,ve),ve.return=j,j=ve}return w(j);case hs:return te=Ae(te),ro(j,G,te,ve)}if(zu(te))return At(j,G,te,ve);if(v(te)){if(Je=v(te),typeof Je!="function")throw Error(o(150));return te=Je.call(te),xs(j,G,te,ve)}if(typeof te.then=="function")return ro(j,G,vi(te),ve);if(te.$$typeof===kr)return ro(j,G,Ee(j,te),ve);os(j,te)}return typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint"?(te=""+te,G!==null&&G.tag===6?(a(j,G.sibling),ve=f(G,te),ve.return=j,j=ve):(a(j,G),ve=Ch(te,j.mode,ve),ve.return=j,j=ve),w(j)):a(j,G)}return function(j,G,te,ve){try{ll=0;var Je=ro(j,G,te,ve);return $o=null,Je}catch(Qe){if(Qe===qo||Qe===Ju)throw Qe;var sn=t(29,Qe,null,j.mode);return sn.lanes=ve,sn.return=j,sn}}}function Bs(){for(var n=Yo,i=np=Yo=0;i<n;){var a=Hi[i];Hi[i++]=null;var u=Hi[i];Hi[i++]=null;var f=Hi[i];Hi[i++]=null;var h=Hi[i];if(Hi[i++]=null,u!==null&&f!==null){var w=u.pending;w===null?f.next=f:(f.next=w.next,w.next=f),u.pending=f}h!==0&&Va(a,f,h)}}function Hs(n,i,a,u){Hi[Yo++]=n,Hi[Yo++]=i,Hi[Yo++]=a,Hi[Yo++]=u,np|=u,n.lanes|=u,n=n.alternate,n!==null&&(n.lanes|=u)}function Zi(n,i,a,u){return Hs(n,i,a,u),Vs(n)}function Ji(n,i){return Hs(n,null,null,i),Vs(n)}function Va(n,i,a){n.lanes|=a;var u=n.alternate;u!==null&&(u.lanes|=a);for(var f=!1,h=n.return;h!==null;)h.childLanes|=a,u=h.alternate,u!==null&&(u.childLanes|=a),h.tag===22&&(n=h.stateNode,n===null||n._visibility&1||(f=!0)),n=h,h=h.return;return n.tag===3?(h=n.stateNode,f&&i!==null&&(f=31-Si(a),n=h.hiddenUpdates,u=n[f],u===null?n[f]=[i]:u.push(i),i.lane=a|536870912),h):null}function Vs(n){if(50<pl)throw pl=0,dc=null,Error(o(185));for(var i=n.return;i!==null;)n=i,i=n.return;return n.tag===3?n.stateNode:null}function as(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function To(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function Ki(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function ui(n,i,a){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(bt&2)!==0){var f=u.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),u.pending=i,i=Vs(n),Va(n,null,a),i}return Hs(n,u,i,a),Vs(n)}function Gs(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,F(n,a)}}function Eo(n,i){var a=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var f=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var w={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?f=h=w:h=h.next=w,a=a.next}while(a!==null);h===null?f=h=i:h=h.next=i}else f=h=i;a={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:h,shared:u.shared,callbacks:u.callbacks},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function ls(){if(ip){var n=Xo;if(n!==null)throw n}}function Ws(n,i,a,u){ip=!1;var f=n.updateQueue;vs=!1;var h=f.firstBaseUpdate,w=f.lastBaseUpdate,k=f.shared.pending;if(k!==null){f.shared.pending=null;var K=k,fe=K.next;K.next=null,w===null?h=fe:w.next=fe,w=K;var ge=n.alternate;ge!==null&&(ge=ge.updateQueue,k=ge.lastBaseUpdate,k!==w&&(k===null?ge.firstBaseUpdate=fe:k.next=fe,ge.lastBaseUpdate=K))}if(h!==null){var Ce=f.baseState;w=0,ge=fe=K=null,k=h;do{var De=k.lane&-536870913,gt=De!==k.lane;if(gt?(xt&De)===De:(u&De)===De){De!==0&&De===Zs&&(ip=!0),ge!==null&&(ge=ge.next={lane:0,tag:k.tag,payload:k.payload,callback:null,next:null});e:{var At=n,xs=k;De=i;var ro=a;switch(xs.tag){case 1:if(At=xs.payload,typeof At=="function"){Ce=At.call(ro,Ce,De);break e}Ce=At;break e;case 3:At.flags=At.flags&-65537|128;case 0:if(At=xs.payload,De=typeof At=="function"?At.call(ro,Ce,De):At,De==null)break e;Ce=Ih({},Ce,De);break e;case 2:vs=!0}}De=k.callback,De!==null&&(n.flags|=64,gt&&(n.flags|=8192),gt=f.callbacks,gt===null?f.callbacks=[De]:gt.push(De))}else gt={lane:De,tag:k.tag,payload:k.payload,callback:k.callback,next:null},ge===null?(fe=ge=gt,K=Ce):ge=ge.next=gt,w|=De;if(k=k.next,k===null){if(k=f.shared.pending,k===null)break;gt=k,k=gt.next,gt.next=null,f.lastBaseUpdate=gt,f.shared.pending=null}}while(!0);ge===null&&(K=Ce),f.baseState=K,f.firstBaseUpdate=fe,f.lastBaseUpdate=ge,h===null&&(f.shared.lanes=0),bs|=w,n.lanes=w,n.memoizedState=Ce}}function vu(n,i){if(typeof n!="function")throw Error(o(191,n));n.call(i)}function yu(n,i){var a=n.callbacks;if(a!==null)for(n.callbacks=null,n=0;n<a.length;n++)vu(a[n],i)}function Ga(n,i){n=Br,x(Qu,n),x(ys,i),Br=n|i.baseLanes}function E(){x(Qu,Br),x(ys,ys.current)}function z(){Br=Qu.current,b(ys),b(Qu)}function J(n){var i=n.alternate;x(Wn,Wn.current&1),x(Gn,n),ri===null&&(i===null||ys.current!==null||i.memoizedState!==null)&&(ri=n)}function q(n){x(Wn,Wn.current),x(Gn,n),ri===null&&(ri=n)}function Y(n){n.tag===22?(x(Wn,Wn.current),x(Gn,n),ri===null&&(ri=n)):_e()}function _e(){x(Wn,Wn.current),x(Gn,Gn.current)}function Re(n){b(Gn),ri===n&&(ri=null),b(Wn)}function Se(n,i){x(Gn,Gn.current),x(Wn,i)}function Ie(n){b(Wn),b(Gn),ri===n&&(ri=null)}function ze(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Vh(a)||Gh(a)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!=="independent"){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function Fe(){throw Error(o(321))}function ut(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Mi(n[a],i[a]))return!1;return!0}function Ue(n,i,a,u,f,h){return zr=h,at=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ze.H=n===null||n.memoizedState===null?ny:iy,eo=!1,h=a(u,f),eo=!1,jo&&(h=Qt(i,a,u,f)),ht(n),h}function ht(n){Ze.H=nc;var i=zt!==null&&zt.next!==null;if(zr=0,yn=zt=at=null,ec=!1,ul=0,Zo=null,i)throw Error(o(300));n===null||_n||(n=n.dependencies,n!==null&&Un(n)&&(_n=!0))}function Qt(n,i,a,u){at=n;var f=0;do{if(jo&&(Zo=null),ul=0,jo=!1,25<=f)throw Error(o(301));if(f+=1,yn=zt=null,n.updateQueue!=null){var h=n.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}Ze.H=oM,h=i(a,u)}while(jo);return h}function Ot(){var n=Ze.H,i=n.useState()[0];return i=typeof i.then=="function"?cn(i):i,n=n.useState()[0],(zt!==null?zt.memoizedState:null)!==n&&(at.flags|=1024),i}function Nt(){var n=tc!==0;return tc=0,n}function vn(n,i,a){i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~a}function Oe(n){if(ec){for(n=n.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}ec=!1}zr=0,yn=zt=at=null,jo=!1,ul=tc=0,Zo=null}function Lt(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yn===null?at.memoizedState=yn=n:yn=yn.next=n,yn}function $e(){if(zt===null){var n=at.alternate;n=n!==null?n.memoizedState:null}else n=zt.next;var i=yn===null?at.memoizedState:yn.next;if(i!==null)yn=i,zt=n;else{if(n===null)throw at.alternate===null?Error(o(467)):Error(o(310));zt=n,n={memoizedState:zt.memoizedState,baseState:zt.baseState,baseQueue:zt.baseQueue,queue:zt.queue,next:null},yn===null?at.memoizedState=yn=n:yn=yn.next=n}return yn}function Li(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function cn(n){var i=ul;return ul+=1,Zo===null&&(Zo=[]),n=it(Zo,n,i),i=at,(yn===null?i.memoizedState:yn.next)===null&&(i=i.alternate,Ze.H=i===null||i.memoizedState===null?ny:iy),n}function Nr(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return cn(n);if(n.$$typeof===rx)return;if(n.$$typeof===kr)return ot(n)}throw Error(o(438,String(n)))}function Di(n){var i=null,a=at.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var u=at.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(i={data:u.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=Li(),at.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(n),u=0;u<n;u++)a[u]=ix;return i.index++,a}function On(n,i){return typeof i=="function"?i(n):i}function mt(n){var i=$e();return hn(i,zt,n)}function hn(n,i,a){var u=n.queue;if(u===null)throw Error(o(311));u.lastRenderedReducer=a;var f=n.baseQueue,h=u.pending;if(h!==null){if(f!==null){var w=f.next;f.next=h.next,h.next=w}i.baseQueue=f=h,u.pending=null}if(h=n.baseState,f===null)n.memoizedState=h;else{i=f.next;var k=w=null,K=null,fe=i,ge=!1;do{var Ce=fe.lane&-536870913;if(Ce!==fe.lane?(xt&Ce)===Ce:(zr&Ce)===Ce){var De=fe.revertLane;if(De===0)K!==null&&(K=K.next={lane:0,revertLane:0,gesture:null,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null}),Ce===Zs&&(ge=!0);else if((zr&De)===De){fe=fe.next,De===Zs&&(ge=!0);continue}else Ce={lane:0,revertLane:fe.revertLane,gesture:null,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null},K===null?(k=K=Ce,w=h):K=K.next=Ce,at.lanes|=De,bs|=De;Ce=fe.action,eo&&a(h,Ce),h=fe.hasEagerState?fe.eagerState:a(h,Ce)}else De={lane:Ce,revertLane:fe.revertLane,gesture:fe.gesture,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null},K===null?(k=K=De,w=h):K=K.next=De,at.lanes|=Ce,bs|=Ce;fe=fe.next}while(fe!==null&&fe!==i);if(K===null?w=h:K.next=k,!Mi(h,n.memoizedState)&&(_n=!0,ge&&(a=Xo,a!==null)))throw a;n.memoizedState=h,n.baseState=w,n.baseQueue=K,u.lastRenderedState=h}return f===null&&(u.lanes=0),[n.memoizedState,u.dispatch]}function ii(n){var i=$e(),a=i.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=n;var u=a.dispatch,f=a.pending,h=i.memoizedState;if(f!==null){a.pending=null;var w=f=f.next;do h=n(h,w.action),w=w.next;while(w!==f);Mi(h,i.memoizedState)||(_n=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),a.lastRenderedState=h}return[h,u]}function Xt(n,i,a){var u=at,f=$e(),h=pt;if(h){if(a===void 0)throw Error(o(407));a=a()}else a=i();var w=!Mi((zt||f).memoizedState,a);if(w&&(f.memoizedState=a,_n=!0),f=f.queue,Fd(Wa.bind(null,u,f,n),[n]),n=f.getSnapshot!==i||w||yn!==null&&(yn.memoizedState.tag&1)!==0,Ao(n?9:8,{destroy:void 0},ki.bind(null,u,f,a,i),null),n){if(u.flags|=2048,Gt===null)throw Error(o(349));h||(zr&127)!==0||pn(u,i,a)}return a}function pn(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=at.updateQueue,i===null?(i=Li(),at.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function ki(n,i,a,u){i.value=a,i.getSnapshot=u,Ag(i)&&Cg(n)}function Wa(n,i,a){return a(function(){Ag(i)&&Cg(n)})}function Ag(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Mi(n,a)}catch{return!0}}function Cg(n){var i=Ji(n,2);i!==null&&ci(i,n,2)}function Dd(n){var i=Lt();if(typeof n=="function"){var a=n;if(n=a(),eo){O(!0);try{a()}finally{O(!1)}}}return i.memoizedState=i.baseState=n,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:On,lastRenderedState:n},i}function Rg(n,i,a,u){return n.baseState=a,hn(n,zt,typeof u=="function"?u:On)}function CS(n,i,a,u,f){if(Su(n))throw Error(o(485));if(n=i.action,n!==null){var h={payload:f,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(w){h.listeners.push(w)}};Ze.T!==null?a(!0):h.isTransition=!1,u(h),a=i.pending,a===null?(h.next=i.pending=h,Pg(i,h)):(h.next=a.next,i.pending=a.next=h)}}function Pg(n,i){var a=i.action,u=i.payload,f=n.state;if(i.isTransition){var h=Ze.T,w={};w.types=h!==null?h.types:null,Ze.T=w;try{var k=a(f,u),K=Ze.S;K!==null&&K(w,k),Ig(n,i,k)}catch(fe){kd(n,i,fe)}finally{h!==null&&w.types!==null&&(h.types=w.types),Ze.T=h}}else try{h=a(f,u),Ig(n,i,h)}catch(fe){kd(n,i,fe)}}function Ig(n,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(u){Ng(n,i,u)},function(u){return kd(n,i,u)}):Ng(n,i,a)}function Ng(n,i,a){i.status="fulfilled",i.value=a,Lg(i),n.state=a,i=n.pending,i!==null&&(a=i.next,a===i?n.pending=null:(a=a.next,i.next=a,Pg(n,a)))}function kd(n,i,a){var u=n.pending;if(n.pending=null,u!==null){u=u.next;do i.status="rejected",i.reason=a,Lg(i),i=i.next;while(i!==u)}n.action=null}function Lg(n){n=n.listeners;for(var i=0;i<n.length;i++)(0,n[i])()}function Dg(n,i){return i}function kg(n,i){if(pt){var a=Gt.formState;if(a!==null){e:{var u=at;if(pt){if(jt){var f=f1(jt,Bi);if(f){jt=zv(f),u=d1(f);break e}}yt(u)}u=!1}u&&(i=a[0])}}a=Lt(),a.memoizedState=a.baseState=i,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Dg,lastRenderedState:i},a.queue=u,a=Qg.bind(null,at,u),u.dispatch=a,u=Dd(!1);var h=Bd.bind(null,at,!1,u.queue);return u=Lt(),f={state:i,dispatch:null,action:n,pending:null},u.queue=f,a=CS.bind(null,at,f,h,a),f.dispatch=a,u.memoizedState=n,[i,a,!1]}function Fg(n){var i=$e();return Ug(i,zt,n)}function Ug(n,i,a){if(i=hn(n,i,Dg)[0],n=mt(On)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var u=cn(i)}catch(w){throw w===qo?Ju:w}else u=i;i=$e();var f=i.queue,h=f.dispatch;return a!==i.memoizedState&&(at.flags|=2048,Ao(9,{destroy:void 0},RS.bind(null,f,a),null)),[u,h,n]}function RS(n,i){n.action=i}function Og(n){var i=$e(),a=zt;if(a!==null)return Ug(i,a,n);$e(),i=i.memoizedState,a=$e();var u=a.queue.dispatch;return a.memoizedState=n,[i,u,!1]}function Ao(n,i,a,u){return n={tag:n,create:a,deps:u,inst:i,next:null},i=at.updateQueue,i===null&&(i=Li(),at.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=n.next=n:(u=a.next,a.next=n,n.next=u,i.lastEffect=n),n}function zg(){return $e().memoizedState}function _u(n,i,a,u){var f=Lt();at.flags|=n,f.memoizedState=Ao(1|i,{destroy:void 0},a,u===void 0?null:u)}function bu(n,i,a,u){var f=$e();u=u===void 0?null:u;var h=f.memoizedState.inst;zt!==null&&u!==null&&ut(u,zt.memoizedState.deps)?f.memoizedState=Ao(i,h,a,u):(at.flags|=n,f.memoizedState=Ao(1|i,h,a,u))}function Bg(n,i){_u(8390656,8,n,i)}function Fd(n,i){bu(2048,8,n,i)}function PS(n){at.flags|=4;var i=at.updateQueue;if(i===null)i=Li(),at.updateQueue=i,i.events=[n];else{var a=i.events;a===null?i.events=[n]:a.push(n)}}function Hg(n){var i=$e().memoizedState;return PS({ref:i,nextImpl:n}),function(){if((bt&2)!==0)throw Error(o(440));return i.impl.apply(void 0,arguments)}}function Vg(n,i){return bu(4,2,n,i)}function Gg(n,i){return bu(4,4,n,i)}function Wg(n,i){if(typeof i=="function"){n=n();var a=i(n);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Xg(n,i,a){a=a!=null?a.concat([n]):null,bu(4,4,Wg.bind(null,i,n),a)}function Ud(){}function qg(n,i){var a=$e();i=i===void 0?null:i;var u=a.memoizedState;return i!==null&&ut(i,u[1])?u[0]:(a.memoizedState=[n,i],n)}function $g(n,i){var a=$e();i=i===void 0?null:i;var u=a.memoizedState;if(i!==null&&ut(i,u[1]))return u[0];if(u=n(),eo){O(!0);try{n()}finally{O(!1)}}return a.memoizedState=[u,i],u}function Od(n,i,a){return a===void 0||(zr&1073741824)!==0&&(xt&261930)===0?n.memoizedState=i:(n.memoizedState=a,n=Q0(),at.lanes|=n,bs|=n,a)}function Yg(n,i,a,u){return Mi(a,i)?a:ys.current!==null?(n=Od(n,a,u),Mi(n,i)||(_n=!0),n):(zr&106)===0||(zr&1073741824)!==0&&(xt&261930)===0?(_n=!0,n.memoizedState=a):(n=Q0(),at.lanes|=n,bs|=n,i)}function jg(n,i,a,u,f){var h=Fr();Rn(h!==0&&8>h?h:8);var w=Ze.T,k={};k.types=w!==null?w.types:null,Ze.T=k,Bd(n,!1,i,a);try{var K=f(),fe=Ze.S;if(fe!==null&&fe(k,K),K!==null&&typeof K=="object"&&typeof K.then=="function"){var ge=ye(K,u);Xa(n,i,ge,_i(n))}else Xa(n,i,u,_i(n))}catch(Ce){Xa(n,i,{then:function(){},status:"rejected",reason:Ce},_i())}finally{Rn(h),w!==null&&k.types!==null&&(w.types=k.types),Ze.T=w}}function Zg(n){var i=n.memoizedState;if(i!==null)return i;i={memoizedState:Uo,baseState:Uo,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:On,lastRenderedState:Uo},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:On,lastRenderedState:a},next:null},n.memoizedState=i,n=n.alternate,n!==null&&(n.memoizedState=i),i}function zd(){return ot(Ur)}function Jg(){return $e().memoizedState}function Kg(){return $e().memoizedState}function IS(n){for(var i=n.return;i!==null;){switch(i.tag){case 24:case 3:var a=_i();n=Ki(a);var u=ui(i,n,a);u!==null&&(ci(u,i,a),Gs(u,i,a)),i={cache:Xe()},n.payload=i;return}i=i.return}}function NS(n,i,a){var u=_i();a={lane:u,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Su(n)?e0(i,a):(a=Zi(n,i,a,u),a!==null&&(ci(a,n,u),t0(a,i,u)))}function Qg(n,i,a){var u=_i();Xa(n,i,a,u)}function Xa(n,i,a,u){var f={lane:u,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Su(n))e0(i,f);else{var h=n.alternate;if(n.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var w=i.lastRenderedState,k=h(w,a);if(f.hasEagerState=!0,f.eagerState=k,Mi(k,w))return Hs(n,i,f,0),Gt===null&&Bs(),!1}catch{}if(a=Zi(n,i,f,u),a!==null)return ci(a,n,u),t0(a,i,u),!0}return!1}function Bd(n,i,a,u){if(u={lane:2,revertLane:le(),gesture:null,action:u,hasEagerState:!1,eagerState:null,next:null},Su(n)){if(i)throw Error(o(479))}else i=Zi(n,a,u,2),i!==null&&ci(i,n,2)}function Su(n){var i=n.alternate;return n===at||i!==null&&i===at}function e0(n,i){jo=ec=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function t0(n,i,a){if((a&4194048)!==0){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,F(n,a)}}function Hd(n,i,a,u){i=n.memoizedState,a=a(u,i),a=a==null?i:Ih({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}function n0(n,i,a,u,f,h,w){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,h,w):i.prototype&&i.prototype.isPureReactComponent?!pe(a,u)||!pe(f,h):!0}function i0(n,i,a,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,u),i.state!==n&&rp.enqueueReplaceState(i,i.state,null)}function Xs(n,i){var a=i;if("ref"in i){a={};for(var u in i)u!=="ref"&&(a[u]=i[u])}if(n=n.defaultProps){a===i&&(a=Ih({},a));for(var f in n)a[f]===void 0&&(a[f]=n[f])}return a}function xu(n,i){try{var a=n.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(u){setTimeout(function(){throw u})}}function r0(n,i,a){try{var u=n.onCaughtError;u(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Vd(n,i,a){return a=Ki(a),a.tag=3,a.payload={element:null},a.callback=function(){xu(n,i)},a}function s0(n){return n=Ki(n),n.tag=3,n}function o0(n,i,a,u){var f=a.type.getDerivedStateFromError;if(typeof f=="function"){var h=u.value;n.payload=function(){return f(h)},n.callback=function(){r0(i,a,u)}}var w=a.stateNode;w!==null&&typeof w.componentDidCatch=="function"&&(n.callback=function(){r0(i,a,u),typeof f!="function"&&(Ss===null?Ss=new Set([this]):Ss.add(this));var k=u.stack;this.componentDidCatch(u.value,{componentStack:k!==null?k:""})})}function LS(n,i,a,u,f){if(a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(i=a.alternate,i!==null&&H(i,a,f,!0),a=Gn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return ri===null?ku():a.alternate===null&&fn===0&&(fn=3),a.flags&=-257,a.flags|=65536,a.lanes=f,u===Ku?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([u]):i.add(u),Eh(n,u,f)),!1;case 22:return a.flags|=65536,u===Ku?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([u])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([u]):a.add(u)),Eh(n,u,f)),!1}throw Error(o(435,a.tag))}return Eh(n,u,f),ku(),!1}if(pt)return i=Gn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,u!==Jh&&(n=Error(o(422),{cause:u}),$n(Ve(n,a)))):(u!==Jh&&(i=Error(o(423),{cause:u}),$n(Ve(i,a))),n=n.current.alternate,n.flags|=65536,f&=-f,n.lanes|=f,u=Ve(u,a),f=Vd(n.stateNode,u,f),Eo(n,f),fn!==4&&(fn=2)),!1;var h=Error(o(520),{cause:u});if(h=Ve(h,a),dl===null?dl=[h]:dl.push(h),fn!==4&&(fn=2),i===null)return!0;u=Ve(u,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,n=f&-f,a.lanes|=n,n=Vd(a.stateNode,u,n),Eo(a,n),!1;case 1:if(i=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Ss===null||!Ss.has(h))))return a.flags|=65536,f&=-f,a.lanes|=f,f=s0(f),o0(f,n,a,u),Eo(a,f),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}function Tn(n,i,a,u){i.child=n===null?ty(i,null,a,u):Qs(i,n.child,a,u)}function a0(n,i,a,u,f){a=a.render;var h=i.ref;if("ref"in u){var w={};for(var k in u)k!=="ref"&&(w[k]=u[k])}else w=u;return Ct(i),u=Ue(n,i,a,w,h,f),k=Nt(),n!==null&&!_n?(vn(n,i,f),Lr(n,i,f)):(pt&&k&&ke(i),i.flags|=1,Tn(n,i,u,f),i.child)}function l0(n,i,a,u,f){if(n===null){var h=a.type;return typeof h=="function"&&!Ah(h)&&h.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=h,u0(n,i,h,u,f)):(n=Uu(a.type,null,u,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(h=n.child,!jd(n,f)){var w=h.memoizedProps;if(a=a.compare,a=a!==null?a:pe,a(w,u)&&n.ref===i.ref)return Lr(n,i,f)}return i.flags|=1,n=Dr(h,u),n.ref=i.ref,n.return=i,i.child=n}function u0(n,i,a,u,f){if(n!==null){var h=n.memoizedProps;if(pe(h,u)&&n.ref===i.ref)if(_n=!1,i.pendingProps=u=h,jd(n,f))(n.flags&131072)!==0&&(_n=!0);else return i.lanes=n.lanes,Lr(n,i,f)}return Gd(n,i,a,u,f)}function c0(n,i,a,u){var f=u.children,h=n!==null?n.memoizedState:null;if(n===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),u.mode==="hidden"){if((i.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,n!==null){for(u=i.child=n.child,f=0;u!==null;)f=f|u.lanes|u.childLanes,u=u.sibling;u=f&~h}else u=0,i.child=null;return f0(n,i,h,a,u)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},n!==null&&He(i,h!==null?h.cachePool:null),h!==null?Ga(i,h):E(),Y(i);else return u=i.lanes=536870912,f0(n,i,h!==null?h.baseLanes|a:a,a,u)}else h!==null?(He(i,h.cachePool),Ga(i,h),_e(),i.memoizedState=null):(n!==null&&He(i,null),E(),_e());return Tn(n,i,f,a),i.child}function qa(n,i){return n!==null&&n.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function f0(n,i,a,u,f){var h=be();return h=h===null?null:{parent:hr?nn._currentValue:nn._currentValue2,pool:h},i.memoizedState={baseLanes:a,cachePool:h},n!==null&&He(i,null),E(),Y(i),n!==null&&H(n,i,u,!0),i.childLanes=f,null}function Mu(n,i){return i=wu({mode:i.mode,children:i.children},n.mode),i.ref=n.ref,n.child=i,i.return=n,i}function d0(n,i,a){return Qs(i,n.child,null,a),n=Mu(i,i.pendingProps),n.flags|=2,Re(i),i.memoizedState=null,n}function DS(n,i,a){var u=i.pendingProps,f=(i.flags&128)!==0;if(i.flags&=-129,n===null){if(pt){if(u.mode==="hidden")return n=Mu(i,u),i.lanes=536870912,n.memoizedState={baseLanes:0,cachePool:null},qa(null,n);if(q(i),(n=jt)?(n=S1(n,Bi),n!==null&&(i.memoizedState={dehydrated:n,treeContext:ps!==null?{id:mr,overflow:gr}:null,retryLane:536870912,hydrationErrors:null},a=mv(n),a.return=i,i.child=a,Pn=i,jt=null)):n=null,n===null)throw yt(i);return i.lanes=536870912,null}return Mu(i,u)}var h=n.memoizedState;if(h!==null){var w=h.dehydrated;if(q(i),f)if(i.flags&256)i.flags&=-257,i=d0(n,i,a);else if(i.memoizedState!==null)i.child=n.child,i.flags|=128,i=null;else throw Error(o(558));else if(_n||H(n,i,a,!1),f=(a&n.childLanes)!==0,_n||f){if(ys.current===null){if(u=Gt,u!==null&&(w=B(u,a),w!==0&&w!==h.retryLane))throw h.retryLane=w,Ji(n,w),ci(u,n,w),sp;ku()}i=d0(n,i,a)}else n=h.treeContext,Hn&&(jt=g1(w),Pn=i,pt=!0,gs=null,Bi=!1,n!==null&&Ne(i,n)),i=Mu(i,u),i.flags|=134221824;return i}return n=Dr(n.child,{mode:u.mode,children:u.children}),n.ref=i.ref,i.child=n,n.return=i,n}function Co(n,i){var a=i.ref;if(a===null)n!==null&&n.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(o(284));(n===null||n.ref!==a)&&(i.flags|=4194816)}}function Gd(n,i,a,u,f){return Ct(i),a=Ue(n,i,a,u,void 0,f),u=Nt(),n!==null&&!_n?(vn(n,i,f),Lr(n,i,f)):(pt&&u&&ke(i),i.flags|=1,Tn(n,i,a,f),i.child)}function h0(n,i,a,u,f,h){return Ct(i),i.updateQueue=null,a=Qt(i,u,a,f),ht(n),u=Nt(),n!==null&&!_n?(vn(n,i,h),Lr(n,i,h)):(pt&&u&&ke(i),i.flags|=1,Tn(n,i,a,h),i.child)}function p0(n,i,a,u,f){if(Ct(i),i.stateNode===null){var h=Bo,w=a.contextType;typeof w=="object"&&w!==null&&(h=ot(w)),h=new a(u,h),i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=rp,i.stateNode=h,h._reactInternals=i,h=i.stateNode,h.props=u,h.state=i.memoizedState,h.refs={},as(i),w=a.contextType,h.context=typeof w=="object"&&w!==null?ot(w):Bo,h.state=i.memoizedState,w=a.getDerivedStateFromProps,typeof w=="function"&&(Hd(i,a,w,u),h.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(w=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),w!==h.state&&rp.enqueueReplaceState(h,h.state,null),Ws(i,u,h,f),ls(),h.state=i.memoizedState),typeof h.componentDidMount=="function"&&(i.flags|=4194308),u=!0}else if(n===null){h=i.stateNode;var k=i.memoizedProps,K=Xs(a,k);h.props=K;var fe=h.context,ge=a.contextType;w=Bo,typeof ge=="object"&&ge!==null&&(w=ot(ge));var Ce=a.getDerivedStateFromProps;ge=typeof Ce=="function"||typeof h.getSnapshotBeforeUpdate=="function",k=i.pendingProps!==k,ge||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(k||fe!==w)&&i0(i,h,u,w),vs=!1;var De=i.memoizedState;h.state=De,Ws(i,u,h,f),ls(),fe=i.memoizedState,k||De!==fe||vs?(typeof Ce=="function"&&(Hd(i,a,Ce,u),fe=i.memoizedState),(K=vs||n0(i,a,K,u,De,fe,w))?(ge||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(i.flags|=4194308)):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=fe),h.props=u,h.state=fe,h.context=w,u=K):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{h=i.stateNode,To(n,i),w=i.memoizedProps,ge=Xs(a,w),h.props=ge,Ce=i.pendingProps,De=h.context,fe=a.contextType,K=Bo,typeof fe=="object"&&fe!==null&&(K=ot(fe)),k=a.getDerivedStateFromProps,(fe=typeof k=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(w!==Ce||De!==K)&&i0(i,h,u,K),vs=!1,De=i.memoizedState,h.state=De,Ws(i,u,h,f),ls();var gt=i.memoizedState;w!==Ce||De!==gt||vs||n!==null&&n.dependencies!==null&&Un(n.dependencies)?(typeof k=="function"&&(Hd(i,a,k,u),gt=i.memoizedState),(ge=vs||n0(i,a,ge,u,De,gt,K)||n!==null&&n.dependencies!==null&&Un(n.dependencies))?(fe||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(u,gt,K),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(u,gt,K)),typeof h.componentDidUpdate=="function"&&(i.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof h.componentDidUpdate!="function"||w===n.memoizedProps&&De===n.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||w===n.memoizedProps&&De===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=gt),h.props=u,h.state=gt,h.context=K,u=ge):(typeof h.componentDidUpdate!="function"||w===n.memoizedProps&&De===n.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||w===n.memoizedProps&&De===n.memoizedState||(i.flags|=1024),u=!1)}return h=u,Co(n,i),u=(i.flags&128)!==0,h||u?(h=i.stateNode,a=u&&typeof a.getDerivedStateFromError!="function"?null:h.render(),i.flags|=1,n!==null&&u?(i.child=Qs(i,n.child,null,f),i.child=Qs(i,null,a,f)):Tn(n,i,a,f),i.memoizedState=h.state,n=i.child):n=Lr(n,i,f),n}function m0(n,i,a,u){return an(),i.flags|=256,Tn(n,i,a,u),i.child}function Wd(n){return{baseLanes:n,cachePool:st()}}function Xd(n,i,a){return n=n!==null?n.childLanes&~a:0,i&&(n|=Ei),n}function g0(n,i,a){var u=i.pendingProps,f=!1,h=(i.flags&128)!==0,w;if((w=h)||(w=n!==null&&n.memoizedState===null?!1:(Wn.current&2)!==0),w&&(f=!0,i.flags&=-129),w=(i.flags&32)!==0,i.flags&=-33,n===null){if(pt){if(f?J(i):_e(),(n=jt)?(n=x1(n,Bi),n!==null&&(i.memoizedState={dehydrated:n,treeContext:ps!==null?{id:mr,overflow:gr}:null,retryLane:536870912,hydrationErrors:null},a=mv(n),a.return=i,i.child=a,Pn=i,jt=null)):n=null,n===null)throw yt(i);return Gh(n)?i.lanes=32:i.lanes=536870912,null}return h=u.children,u=u.fallback,f?(_e(),f=i.mode,h=wu({mode:"hidden",children:h},f),u=qs(u,f,a,null),h.return=i,u.return=i,h.sibling=u,i.child=h,u=i.child,u.memoizedState=Wd(a),u.childLanes=Xd(n,w,a),i.memoizedState=op,qa(null,u)):(J(i),qd(i,h))}var k=n.memoizedState;if(k!==null){var K=k.dehydrated;if(K!==null)return kS(n,i,h,w,u,K,k,a)}return f?(_e(),f=u.fallback,h=i.mode,k=n.child,K=k.sibling,u=Dr(k,{mode:"hidden",children:u.children}),u.subtreeFlags=k.subtreeFlags&1206910976,K!==null?f=Dr(K,f):(f=qs(f,h,a,null),f.flags|=2),f.return=i,u.return=i,u.sibling=f,i.child=u,qa(null,u),u=i.child,f=n.child.memoizedState,f===null?f=Wd(a):(h=f.cachePool,h!==null?(k=hr?nn._currentValue:nn._currentValue2,h=h.parent!==k?{parent:k,pool:k}:h):h=st(),f={baseLanes:f.baseLanes|a,cachePool:h}),u.memoizedState=f,u.childLanes=Xd(n,w,a),i.memoizedState=op,qa(n.child,u)):(J(i),a=n.child,n=a.sibling,a=Dr(a,{mode:"visible",children:u.children}),a.return=i,a.sibling=null,n!==null&&(w=i.deletions,w===null?(i.deletions=[n],i.flags|=16):w.push(n)),i.child=a,i.memoizedState=null,a)}function qd(n,i){return i=wu({mode:"visible",children:i},n.mode),i.return=n,n.child=i}function wu(n,i){return n=t(22,n,null,i),n.lanes=0,n}function Tu(n,i,a){return Qs(i,n.child,null,a),n=qd(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function kS(n,i,a,u,f,h,w,k){if(a)return i.flags&256?(J(i),i.flags&=-257,Tu(n,i,k)):i.memoizedState!==null?(_e(),i.child=n.child,i.flags|=128,null):(_e(),h=f.fallback,w=i.mode,f=wu({mode:"visible",children:f.children},w),h=qs(h,w,k,null),h.flags|=2,f.return=i,h.return=i,f.sibling=h,i.child=f,Qs(i,n.child,null,k),f=i.child,f.memoizedState=Wd(k),f.childLanes=Xd(n,u,k),i.memoizedState=op,qa(null,f));if(J(i),Gh(h))return u=u1(h).digest,u!==""&&(f=Error(o(419)),f.stack="",f.digest=u,$n({value:f,source:null,stack:null})),Tu(n,i,k);if(_n||H(n,i,k,!1),u=(k&n.childLanes)!==0,_n||u){if(ys.current!==null)return Tu(n,i,k);if(u=Gt,u!==null&&(f=B(u,k),f!==0&&f!==w.retryLane))throw w.retryLane=f,Ji(n,f),ci(u,n,f),sp;return Vh(h)||ku(),Tu(n,i,k)}return Vh(h)?(i.flags|=192,i.child=n.child,null):(n=w.treeContext,Hn&&(jt=v1(h),Pn=i,pt=!0,gs=null,Bi=!1,n!==null&&Ne(i,n)),i=qd(i,f.children),i.flags|=134221824,i)}function v0(n,i,a){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),Fn(n.return,i,a)}function y0(n){for(var i=null;n!==null;){var a=n.alternate;a!==null&&ze(a)===null&&(i=n),n=n.sibling}return i}function Eu(n,i,a,u,f,h){var w=n.memoizedState;w===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:f,treeForkCount:h}:(w.isBackwards=i,w.rendering=null,w.renderingStartTime=0,w.last=u,w.tail=a,w.tailMode=f,w.treeForkCount=h)}function $d(n){var i=n.child;for(n.child=null;i!==null;){var a=i.sibling;i.sibling=n.child,n.child=i,i=a}}function Yd(n,i,a){var u=i.pendingProps,f=u.revealOrder,h=u.tail;u=u.children;var w=Wn.current;if(i.flags&128)return Se(i,w),null;var k=(w&2)!==0;if(k?(w=w&1|2,i.flags|=128):w&=1,Se(i,w),f==="backwards"&&n!==null?($d(n),Tn(n,i,u,a),$d(n)):Tn(n,i,u,a),u=pt?rl:0,!k&&n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&v0(n,a,i);else if(n.tag===19)v0(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}switch(f){case"backwards":a=y0(i.child),a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null,$d(i)),Eu(i,!0,f,null,h,u);break;case"unstable_legacy-backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&ze(n)===null){i.child=f;break}n=f.sibling,f.sibling=a,a=f,f=n}Eu(i,!0,a,null,h,u);break;case"together":Eu(i,!1,null,null,void 0,u);break;case"independent":i.memoizedState=null;break;default:a=y0(i.child),a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),Eu(i,!1,f,a,h,u)}return i.child}function _0(n,i,a){var u=i.pendingProps;return Vt(i,i.type,u.value),Tn(n,i,u.children,a),i.child}function Lr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),bs|=i.lanes,(a&i.childLanes)===0)if(n!==null){if(H(n,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(n!==null&&i.child!==n.child)throw Error(o(153));if(i.child!==null){for(n=i.child,a=Dr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Dr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function jd(n,i){return(n.lanes&i)!==0?!0:(n=n.dependencies,!!(n!==null&&Un(n)))}function FS(n,i,a){switch(i.tag){case 3:Ke(i,i.stateNode.containerInfo),Vt(i,nn,n.memoizedState.cache),an();break;case 27:case 5:qe(i);break;case 4:Ke(i,i.stateNode.containerInfo);break;case 10:Vt(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,q(i),null;break;case 13:var u=i.memoizedState;if(u!==null){if(u.dehydrated!==null)return J(i),i.flags|=128,null;u=H(n,i,a,!1);var f=i.child.childLanes;return u||(a&f)!==0?g0(n,i,a):(J(i),n=Lr(n,i,a),n!==null?n.sibling:null)}J(i);break;case 19:if(i.flags&128)return Yd(n,i,a);if(f=(n.flags&128)!==0,u=(a&i.childLanes)!==0,u||(H(n,i,a,!1),u=(a&i.childLanes)!==0),f){if(u)return Yd(n,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Se(i,Wn.current),u)break;return null;case 22:return i.lanes=0,c0(n,i,a,i.pendingProps);case 24:Vt(i,nn,n.memoizedState.cache)}return Lr(n,i,a)}function b0(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps)_n=!0;else{if(!jd(n,a)&&(i.flags&128)===0)return _n=!1,FS(n,i,a);_n=(n.flags&131072)!==0}else _n=!1,pt&&(i.flags&1048576)!==0&&Pe(i,rl,i.index);switch(i.lanes=0,i.tag){case 16:e:{var u=i.pendingProps;if(n=Ae(i.elementType),i.type=n,typeof n=="function")Ah(n)?(u=Xs(n,u),i.tag=1,i=p0(null,i,n,u,a)):(i.tag=0,i=Gd(null,i,n,u,a));else{if(n!=null){var f=n.$$typeof;if(f===Lh){i.tag=11,i=a0(null,i,n,u,a);break e}else if(f===Fh){i.tag=14,i=l0(null,i,n,u,a);break e}else if(f===kr){i.tag=10,i.type=n,i=_0(null,i,a);break e}}throw i=y(n)||n,Error(o(306,i,""))}}return i;case 0:return Gd(n,i,i.type,i.pendingProps,a);case 1:return u=i.type,f=Xs(u,i.pendingProps),p0(n,i,u,f,a);case 3:e:{if(Ke(i,i.stateNode.containerInfo),n===null)throw Error(o(387));var h=i.pendingProps;f=i.memoizedState,u=f.element,To(n,i),Ws(i,h,null,a);var w=i.memoizedState;if(h=w.cache,Vt(i,nn,h),h!==f.cache&&Yn(i,[nn],a,!0),ls(),h=w.element,Hn&&f.isDehydrated)if(f={element:h,isDehydrated:!1,cache:w.cache},i.updateQueue.baseState=f,i.memoizedState=f,i.flags&256){i=m0(n,i,h,a);break e}else if(h!==u){u=Ve(Error(o(424)),i),$n(u),i=m0(n,i,h,a);break e}else for(Hn&&(jt=m1(i.stateNode.containerInfo),Pn=i,pt=!0,gs=null,Bi=!0),a=ty(i,null,h,a),i.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling;else{if(an(),h===u){i=Lr(n,i,a);break e}Tn(n,i,h,a)}i=i.child}return i;case 26:if(Ui)return Co(n,i),n===null?(a=Vv(i.type,null,i.pendingProps,null))?i.memoizedState=a:pt||(i.stateNode=Xv(i.type,i.pendingProps,ms.current,i)):i.memoizedState=Vv(i.type,n.memoizedProps,i.pendingProps,n.memoizedState),null;case 27:if(tn)return qe(i),n===null&&tn&&pt&&(u=i.stateNode=$v(i.type,i.pendingProps,ms.current,Vn.current,!1),Pn=i,Bi=!0,jt=y1(i.type,u,jt)),Tn(n,i,i.pendingProps.children,a),Co(n,i),n===null&&(i.flags|=4194304),i.child;case 5:return n===null&&pt&&(z1(i.type,i.pendingProps,Vn.current),(f=u=jt)&&(u=_1(u,i.type,i.pendingProps,Bi),u!==null?(i.stateNode=u,Pn=i,jt=p1(u),Bi=!1,f=!0):f=!1),f||yt(i)),qe(i),f=i.type,h=i.pendingProps,w=n!==null?n.memoizedProps:null,u=h.children,Bu(f,h)?u=null:w!==null&&Bu(f,w)&&(i.flags|=32),i.memoizedState!==null&&(f=Ue(n,i,Ot,null,null,a),hr?Ur._currentValue=f:Ur._currentValue2=f),Co(n,i),Tn(n,i,u,a),i.child;case 6:return n===null&&pt&&(B1(i.pendingProps,Vn.current),(n=a=jt)&&(a=b1(a,i.pendingProps,Bi),a!==null?(i.stateNode=a,Pn=i,jt=null,n=!0):n=!1),n||yt(i)),null;case 13:return g0(n,i,a);case 4:return Ke(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=Qs(i,null,u,a):Tn(n,i,u,a),i.child;case 11:return a0(n,i,i.type,i.pendingProps,a);case 7:return u=i.pendingProps,Co(n,i),Tn(n,i,u,a),i.child;case 8:return Tn(n,i,i.pendingProps.children,a),i.child;case 12:return Tn(n,i,i.pendingProps.children,a),i.child;case 10:return _0(n,i,a);case 9:return f=i.type._context,u=i.pendingProps.children,Ct(i),f=ot(f),u=u(f),i.flags|=1,Tn(n,i,u,a),i.child;case 14:return l0(n,i,i.type,i.pendingProps,a);case 15:return u0(n,i,i.type,i.pendingProps,a);case 19:return Yd(n,i,a);case 31:return DS(n,i,a);case 22:return c0(n,i,a,i.pendingProps);case 24:return Ct(i),u=ot(nn),n===null?(f=be(),f===null&&(f=Gt,h=Xe(),f.pooledCache=h,h.refCount++,h!==null&&(f.pooledCacheLanes|=a),f=h),i.memoizedState={parent:u,cache:f},as(i),Vt(i,nn,f)):((n.lanes&a)!==0&&(To(n,i),Ws(i,null,null,a),ls()),f=n.memoizedState,h=i.memoizedState,f.parent!==u?(f={parent:u,cache:u},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),Vt(i,nn,u)):(u=h.cache,Vt(i,nn,u),u!==f.cache&&Yn(i,[nn],a,!0))),Tn(n,i,i.pendingProps.children,a),i.child;case 30:return i.stateNode===null&&(i.stateNode={autoName:null,paired:null,clones:null,ref:null}),u=i.pendingProps,u.name!=null&&u.name!=="auto"?i.flags|=n===null?18882560:18874368:pt&&ke(i),n!==null&&n.memoizedProps.name!==u.name?i.flags|=4194816:Co(n,i),Tn(n,i,u.children,a),i.child;case 29:throw i.pendingProps}throw Error(o(156,i.tag))}function Qi(n){n.flags|=4}function Au(n){pr&&(n.flags|=8)}function S0(n,i){if(n!==null&&n.child===i.child)return!1;if((i.flags&16)!==0)return!0;for(n=i.child;n!==null;){if((n.flags&8218)!==0||(n.subtreeFlags&8218)!==0)return!0;n=n.sibling}return!1}function Zd(n,i,a,u){if(en)for(a=i.child;a!==null;){if(a.tag===5||a.tag===6)zh(n,a.stateNode);else if(!(a.tag===4||tn&&a.tag===27)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}else if(pr)for(var f=i.child;f!==null;){if(f.tag===5){var h=f.stateNode;a&&u&&(h=Uv(h,f.type,f.memoizedProps)),zh(n,h)}else if(f.tag===6)h=f.stateNode,a&&u&&(h=Ov(h,f.memoizedProps)),zh(n,h);else if(f.tag!==4){if(f.tag===22&&f.memoizedState!==null)h=f.child,h!==null&&(h.return=f),Zd(n,f,!0,!0);else if(f.child!==null){f.child.return=f,f=f.child;continue}}if(f===i)break;for(;f.sibling===null;){if(f.return===null||f.return===i)return;f=f.return}f.sibling.return=f.return,f=f.sibling}}function x0(n,i,a,u){var f=!1;if(pr)for(var h=i.child;h!==null;){if(h.tag===5){var w=h.stateNode;a&&u&&(w=Uv(w,h.type,h.memoizedProps)),kv(n,w)}else if(h.tag===6)w=h.stateNode,a&&u&&(w=Ov(w,h.memoizedProps)),kv(n,w);else if(h.tag!==4){if(h.tag===22&&h.memoizedState!==null)f=h.child,f!==null&&(f.return=h),x0(n,h,!0,!0),f=!0;else if(h.child!==null){h.child.return=h,h=h.child;continue}}if(h===i)break;for(;h.sibling===null;){if(h.return===null||h.return===i)return f;h=h.return}h.sibling.return=h.return,h=h.sibling}return f}function M0(n,i){if(pr&&S0(n,i)){n=i.stateNode;var a=n.containerInfo,u=Dv();x0(u,i,!1,!1),n.pendingChildren=u,Qi(i),l1(a,u)}}function Jd(n,i,a,u){if(en)n.memoizedProps!==u&&Qi(i);else if(pr){var f=n.stateNode,h=n.memoizedProps;if((n=S0(n,i))||h!==u){var w=Vn.current;h=a1(f,a,h,u,!n,null),h===f?i.stateNode=f:(Au(i),Ev(h,a,u,w)&&Qi(i),i.stateNode=h,n&&Zd(h,i,!1,!1))}else i.stateNode=f}}function Kd(n,i,a,u,f){if((n.mode&32)!==0&&(a===null?bx(i,u):Sx(i,a,u))){if(n.flags|=16777216,(f&335544128)===f||Bh(i,u))if(Cv(n.stateNode,i,u))n.flags|=8192;else if(rv())n.flags|=8192;else throw Ks=Ku,tp}else n.flags&=-16777217}function w0(n,i){if(G1(i)){if(n.flags|=16777216,!qv(i))if(rv())n.flags|=8192;else throw Ks=Ku,tp}else n.flags&=-16777217}function Cu(n,i){i!==null&&(n.flags|=4),n.flags&16384&&(i=n.tag!==22?L():536870912,n.lanes|=i,Ko|=i)}function $a(n,i){if(!pt)switch(n.tailMode){case"visible":break;case"collapsed":for(var a=n.tail,u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null;break;default:for(i=n.tail,a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null}}function qt(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,u=0;if(i)for(var f=n.child;f!==null;)a|=f.lanes|f.childLanes,u|=f.subtreeFlags&1206910976,u|=f.flags&1206910976,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)a|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=u,n.childLanes=a,i}function US(n,i,a){var u=i.pendingProps;switch(We(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(i),null;case 1:return qt(i),null;case 3:return a=i.stateNode,u=null,n!==null&&(u=n.memoizedState.cache),i.memoizedState.cache!==u&&(i.flags|=2048),ln(nn),Bt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(n===null||n.child===null)&&(Wt(i)?Qi(i):n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Ht())),M0(n,i),qt(i),null;case 26:if(Ui){var f=i.type,h=i.memoizedState;return n===null?(Qi(i),h!==null?(qt(i),w0(i,h)):(qt(i),Kd(i,f,null,u,a))):h?h!==n.memoizedState?(Qi(i),qt(i),w0(i,h)):(qt(i),i.flags&=-16777217):(h=n.memoizedProps,en?h!==u&&Qi(i):Jd(n,i,f,u),qt(i),Kd(i,f,h,u,a)),null}case 27:if(tn){if(Tt(i),a=ms.current,f=i.type,n!==null&&i.stateNode!=null)en?n.memoizedProps!==u&&Qi(i):Jd(n,i,f,u);else{if(!u){if(i.stateNode===null)throw Error(o(166));return qt(i),i.subtreeFlags&=-33554433,null}n=Vn.current,Wt(i)?dt(i,n):(n=$v(f,u,a,n,!0),i.stateNode=n,Qi(i))}return qt(i),i.subtreeFlags&=-33554433,null}case 5:if(Tt(i),f=i.type,n!==null&&i.stateNode!=null)Jd(n,i,f,u);else{if(!u){if(i.stateNode===null)throw Error(o(166));return qt(i),i.subtreeFlags&=-33554433,null}if(h=Vn.current,Wt(i))dt(i,h),L1(i.stateNode,f,u,h)&&(i.flags|=64);else{var w=dx(f,u,ms.current,h,i);Au(i),Zd(w,i,!1,!1),i.stateNode=w,Ev(w,f,u,h)&&Qi(i)}}return qt(i),i.subtreeFlags&=-33554433,Kd(i,i.type,n===null?null:n.memoizedProps,i.pendingProps,a),null;case 6:if(n&&i.stateNode!=null)a=n.memoizedProps,en?a!==u&&Qi(i):pr&&(a!==u?(n=ms.current,a=Vn.current,Au(i),i.stateNode=Av(u,n,a,i)):i.stateNode=n.stateNode);else{if(typeof u!="string"&&i.stateNode===null)throw Error(o(166));if(n=ms.current,a=Vn.current,Wt(i)){if(!Hn)throw Error(o(176));if(n=i.stateNode,a=i.memoizedProps,u=null,f=Pn,f!==null)switch(f.tag){case 27:case 5:u=f.memoizedProps}w1(n,a,i,u)||yt(i,!0)}else Au(i),i.stateNode=Av(u,n,a,i)}return qt(i),null;case 31:if(a=i.memoizedState,n===null||n.memoizedState!==null){if(u=Wt(i),a!==null){if(n===null){if(!u)throw Error(o(318));if(!Hn)throw Error(o(556));if(n=i.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(o(557));T1(n,i)}else an(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;qt(i),n=!1}else a=Ht(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=a),n=!0;if(!n)return i.flags&256?(Re(i),i):(Re(i),null);if((i.flags&128)!==0)throw Error(o(558))}return qt(i),null;case 13:if(u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(f=Wt(i),u!==null&&u.dehydrated!==null){if(n===null){if(!f)throw Error(o(318));if(!Hn)throw Error(o(344));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(o(317));E1(f,i)}else an(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;qt(i),f=!1}else f=Ht(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(Re(i),i):(Re(i),null)}return Re(i),(i.flags&128)!==0?(i.lanes=a,i):(a=u!==null,n=n!==null&&n.memoizedState!==null,a&&(u=i.child,f=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(f=u.alternate.memoizedState.cachePool.pool),h=null,u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(h=u.memoizedState.cachePool.pool),h!==f&&(u.flags|=2048)),a!==n&&a&&(i.child.flags|=8192),Cu(i,i.updateQueue),qt(i),null);case 4:return Bt(),M0(n,i),n===null&&gx(i.stateNode.containerInfo),i.flags|=67108864,qt(i),null;case 10:return ln(i.type),qt(i),null;case 19:if(Ie(i),u=i.memoizedState,u===null)return qt(i),null;if(f=(i.flags&128)!==0,h=u.rendering,h===null)if(f)$a(u,!1);else{if(fn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(h=ze(n),h!==null){for(i.flags|=128,$a(u,!1),n=h.updateQueue,i.updateQueue=n,Cu(i,n),i.subtreeFlags=0,n=a,a=i.child;a!==null;)pv(a,n),a=a.sibling;return Se(i,Wn.current&1|2),pt&&re(i,u.treeForkCount),i.child}n=n.sibling}u.tail!==null&&fi()>hl&&(i.flags|=128,f=!0,$a(u,!1),i.lanes=4194304)}else{if(!f)if(n=ze(h),n!==null){if(i.flags|=128,f=!0,n=n.updateQueue,i.updateQueue=n,Cu(i,n),$a(u,!0),u.tail===null&&u.tailMode!=="collapsed"&&u.tailMode!=="visible"&&!h.alternate&&!pt)return qt(i),null}else 2*fi()-u.renderingStartTime>hl&&a!==536870912&&(i.flags|=128,f=!0,$a(u,!1),i.lanes=4194304);u.isBackwards?(h.sibling=i.child,i.child=h):(n=u.last,n!==null?n.sibling=h:i.child=h,u.last=h)}if(u.tail!==null){n=u.tail;e:{for(a=n;a!==null;){if(a.alternate!==null){a=!1;break e}a=a.sibling}a=!0}return u.rendering=n,u.tail=n.sibling,u.renderingStartTime=fi(),n.sibling=null,h=Wn.current,h=f?h&1|2:h&1,u.tailMode==="visible"||u.tailMode==="collapsed"||!a||pt?Se(i,h):(a=h,x(Gn,i),x(Wn,a),ri===null&&(ri=i)),pt&&re(i,u.treeForkCount),n}return qt(i),null;case 22:case 23:return Re(i),z(),u=i.memoizedState!==null,n!==null?n.memoizedState!==null!==u&&(i.flags|=8192):u&&(i.flags|=8192),u?(a&536870912)!==0&&(i.flags&128)===0&&(qt(i),i.subtreeFlags&6&&(i.flags|=8192)):qt(i),a=i.updateQueue,a!==null&&Cu(i,a.retryQueue),a=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),u=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(u=i.memoizedState.cachePool.pool),u!==a&&(i.flags|=2048),n!==null&&b(Js),null;case 24:return a=null,n!==null&&(a=n.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),ln(nn),qt(i),null;case 25:return null;case 30:return i.flags|=33554432,qt(i),null}throw Error(o(156,i.tag))}function OS(n,i){switch(We(i),i.tag){case 1:return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return ln(nn),Bt(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 26:case 27:case 5:return Tt(i),null;case 31:if(i.memoizedState!==null){if(Re(i),i.alternate===null)throw Error(o(340));an()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 13:if(Re(i),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(o(340));an()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ie(i),n=i.flags,n&65536?(i.flags=n&-65537|128,n=i.memoizedState,n!==null&&(n.rendering=null,n.tail=null),i.flags|=4,i):null;case 4:return Bt(),null;case 10:return ln(i.type),null;case 22:case 23:return Re(i),z(),n!==null&&b(Js),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 24:return ln(nn),null;case 25:return null;default:return null}}function T0(n,i){switch(We(i),i.tag){case 3:ln(nn),Bt();break;case 26:case 27:case 5:Tt(i);break;case 4:Bt();break;case 31:i.memoizedState!==null&&Re(i);break;case 13:Re(i);break;case 19:Ie(i);break;case 10:ln(i.type);break;case 22:case 23:Re(i),z(),n!==null&&b(Js);break;case 24:ln(nn)}}function Ya(n,i){try{var a=i.updateQueue,u=a!==null?a.lastEffect:null;if(u!==null){var f=u.next;a=f;do{if((a.tag&n)===n){u=void 0;var h=a.create,w=a.inst;u=h(),w.destroy=u}a=a.next}while(a!==f)}}catch(k){Pt(i,i.return,k)}}function us(n,i,a){try{var u=i.updateQueue,f=u!==null?u.lastEffect:null;if(f!==null){var h=f.next;u=h;do{if((u.tag&n)===n){var w=u.inst,k=w.destroy;if(k!==void 0){w.destroy=void 0,f=i;var K=a,fe=k;try{fe()}catch(ge){Pt(f,K,ge)}}}u=u.next}while(u!==h)}}catch(ge){Pt(i,i.return,ge)}}function E0(n){var i=n.updateQueue;if(i!==null){var a=n.stateNode;try{yu(i,a)}catch(u){Pt(n,n.return,u)}}}function A0(n,i,a){a.props=Xs(n.type,n.memoizedProps),a.state=n.memoizedState;try{a.componentWillUnmount()}catch(u){Pt(n,i,u)}}function cr(n,i){try{var a=n.ref;if(a!==null){switch(n.tag){case 26:case 27:case 5:var u=el(n.stateNode);break;case 30:var f=n.stateNode,h=Q(n.memoizedProps,f);(f.ref===null||f.ref.name!==h)&&(f.ref=Nv(h)),u=f.ref;break;case 7:n.stateNode===null&&(n.stateNode=r1(n)),u=n.stateNode;break;default:u=n.stateNode}typeof a=="function"?n.refCleanup=a(u):a.current=u}}catch(w){Pt(n,i,w)}}function zn(n,i){var a=n.ref,u=n.refCleanup;if(a!==null)if(typeof u=="function")try{u()}catch(f){Pt(n,i,f)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(f){Pt(n,i,f)}else a.current=null}function C0(){var n=Zn;return Zn=!1,n}function ja(n,i){if((n.tag===5||n.tag===27||n.tag===6)&&n.alternate===null&&i!==null)for(var a=0;a<i.length;a++)Lv(n.stateNode,i[a])}function R0(n){for(var i=n.return;i!==null&&(eh(i)&&Lv(n.stateNode,i.stateNode),!Qd(i));)i=i.return}function Za(n){for(var i=n.return;i!==null&&(eh(i)&&o1(n.stateNode,i.stateNode),!Qd(i));)i=i.return}function Qd(n){return n.tag===5||n.tag===3||(tn?n.tag===27:!1)}function eh(n){return n&&n.tag===7&&n.stateNode!==null}function th(n){var i=n.type,a=n.memoizedProps,u=n.stateNode;try{Ux(u,i,a,n)}catch(f){Pt(n,n.return,f)}}function nh(n,i,a){try{Ox(n.stateNode,n.type,a,i,n)}catch(u){Pt(n,n.return,u)}}function P0(n){return n.tag===5||n.tag===3||(Ui?n.tag===26:!1)||(tn?n.tag===27&&Oo(n.type):!1)||n.tag===4}function ih(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||P0(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(tn&&n.tag===27&&Oo(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function rh(n,i,a,u){var f=n.tag;if(f===5||f===6)f=n.stateNode,i?Bx(a,f,i):kx(a,f),ja(n,u),Zn=!0;else if(f!==4&&(tn&&f===27&&(ja(n,u),u=null,Oo(n.type)&&(a=n.stateNode,i=null)),n=n.child,n!==null))for(rh(n,i,a,u),n=n.sibling;n!==null;)rh(n,i,a,u),n=n.sibling}function Ru(n,i,a,u){var f=n.tag;if(f===5||f===6)f=n.stateNode,i?zx(a,f,i):Dx(a,f),ja(n,u),Zn=!0;else if(f!==4&&(tn&&f===27&&(ja(n,u),u=null,Oo(n.type)&&(a=n.stateNode)),n=n.child,n!==null))for(Ru(n,i,a,u),n=n.sibling;n!==null;)Ru(n,i,a,u),n=n.sibling}function sh(n,i){if(n.tag===5||tn&&n.tag===27)ja(n,i);else if(n.tag!==4&&(n=n.child,n!==null))for(sh(n,i),n=n.sibling;n!==null;)sh(n,i),n=n.sibling}function I0(n,i,a){n=n.containerInfo;try{Fv(n,a)}catch(u){Pt(i,i.return,u)}}function N0(n){var i=n.stateNode,a=n.memoizedProps;try{X1(n.type,a,i,n)}catch(u){Pt(n,n.return,u)}}function L0(n){(n.tag===30||(n.subtreeFlags&33554432)!==0)&&(ic=!0)}function D0(){var n=vr;return vr=null,n}function Ro(n,i,a,u,f){return di=0,k0(n.child,i,a,u,f)}function k0(n,i,a,u,f){if(!en)return!1;for(var h=!1;n!==null;){if(n.tag===5){var w=n.stateNode;if(u!==null){var k=Hh(w);u.push(k),Hu(k)&&(h=!0)}else h||Hu(Hh(w))&&(h=!0);ic=!0,Iv(w,di===0?i:i+"_"+di,a),di++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&f||k0(n.child,i,a,u,f)&&(h=!0));n=n.sibling}return h}function fr(n,i){if(en)for(;n!==null;)n.tag===5?$x(n.stateNode,n.memoizedProps):(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&i||fr(n.child,i)),n=n.sibling}function Pu(n){if((n.subtreeFlags&18874368)!==0)for(n=n.child;n!==null;){if((n.tag!==22||n.memoizedState===null)&&(Pu(n),n.tag===30&&(n.flags&18874368)!==0&&n.stateNode.paired)){var i=n.memoizedProps;if(i.name==null||i.name==="auto")throw Error(o(544));var a=i.name;i=ee(i.default,i.share),i!=="none"&&(Ro(n,a,i,null,!1)||fr(n.child,!1))}n=n.sibling}}function oh(n,i){if(n.tag===30){var a=n.stateNode,u=n.memoizedProps,f=Q(u,a),h=ee(u.default,a.paired?u.share:u.enter);h!=="none"?Ro(n,f,h,null,!1)?(Pu(n),a.paired||i||No(n,u.onEnter)):fr(n.child,!1):Pu(n)}else if((n.subtreeFlags&33554432)!==0)for(n=n.child;n!==null;)oh(n,i),n=n.sibling;else Pu(n)}function ah(n){if(wi!==null&&wi.size!==0){var i=wi;if((n.subtreeFlags&18874368)!==0)for(n=n.child;n!==null;){if(n.tag!==22||n.memoizedState===null){if(n.tag===30&&(n.flags&18874368)!==0){var a=n.memoizedProps,u=a.name;if(u!=null&&u!=="auto"){var f=i.get(u);if(f!==void 0){var h=ee(a.default,a.share);if(h!=="none"&&(Ro(n,u,h,null,!1)?(h=n.stateNode,f.paired=h,h.paired=f,No(n,a.onShare)):fr(n.child,!1)),i.delete(u),i.size===0)break}}}ah(n)}n=n.sibling}}}function lh(n){if(n.tag===30){var i=n.memoizedProps,a=Q(i,n.stateNode),u=wi!==null?wi.get(a):void 0,f=ee(i.default,u!==void 0?i.share:i.exit);f!=="none"&&(Ro(n,a,f,null,!1)?u!==void 0?(f=n.stateNode,u.paired=f,f.paired=u,wi.delete(a),No(n,i.onShare)):No(n,i.onExit):fr(n.child,!1)),wi!==null&&ah(n)}else if((n.subtreeFlags&33554432)!==0)for(n=n.child;n!==null;)lh(n),n=n.sibling;else wi!==null&&ah(n)}function F0(n){for(n=n.child;n!==null;){if(n.tag===30){var i=n.memoizedProps,a=Q(i,n.stateNode);i=ee(i.default,i.update),n.flags&=-5,i!=="none"&&Ro(n,a,i,n.memoizedState=[],!1)}else(n.subtreeFlags&33554432)!==0&&F0(n);n=n.sibling}}function uh(n){if((n.subtreeFlags&18874368)!==0)for(n=n.child;n!==null;){if(n.tag!==22||n.memoizedState===null){if(n.tag===30&&(n.flags&18874368)!==0){var i=n.stateNode;i.paired!==null&&(i.paired=null,fr(n.child,!1))}uh(n)}n=n.sibling}}function Iu(n){if(n.tag===30)n.stateNode.paired=null,fr(n.child,!1),uh(n);else if((n.subtreeFlags&33554432)!==0)for(n=n.child;n!==null;)Iu(n),n=n.sibling;else uh(n)}function U0(n){for(n=n.child;n!==null;)n.tag===30?fr(n.child,!1):(n.subtreeFlags&33554432)!==0&&U0(n),n=n.sibling}function ch(n,i,a,u,f,h,w){if(!en)return!1;for(var k=!1;i!==null;){if(i.tag===5){var K=i.stateNode;if(h!==null&&di<h.length){var fe=h[di],ge=Hh(K);(Hu(fe)||Hu(ge))&&(k=!0),(n.flags&4)===0&&Kx(fe,ge)&&(n.flags|=4),Qx(fe,ge)&&(n.flags|=32)}else n.flags|=32;(n.flags&4)!==0&&Iv(K,di===0?a:a+"_"+di,f),k&&(n.flags&4)!==0||(vr===null&&(vr=[]),vr.push(K,di===0?u:u+"_"+di,i.memoizedProps)),di++}else(i.tag!==22||i.memoizedState===null)&&(i.tag===30&&w?n.flags|=i.flags&32:ch(n,i.child,a,u,f,h,w)&&(k=!0));i=i.sibling}return k}function O0(n,i){for(n=n.child;n!==null;){if(n.tag===30){var a=n.memoizedProps,u=n.stateNode,f=Q(a,u),h=ee(a.default,a.update);if(i){u=u.clones;var w=u===null?null:u.map(Jx)}else w=n.memoizedState,n.memoizedState=null;u=n;var k=n.child;di=0,f=ch(u,k,f,f,h,w,!1),(n.flags&4)!==0&&f&&(i||No(n,a.onUpdate))}else(n.subtreeFlags&33554432)!==0&&O0(n,i);n=n.sibling}}function zS(n,i,a){for(cx(n.containerInfo),n=(a&335544064)===a,Nn=i,i=n?9270:1024;Nn!==null;){if(a=Nn,n){var u=a.deletions;if(u!==null)for(var f=0;f<u.length;f++)n&&lh(u[f])}if(a.alternate===null&&(a.flags&2)!==0)n&&L0(a),Nu(n);else{if(a.tag===22){if(u=a.alternate,a.memoizedState!==null){u!==null&&u.memoizedState===null&&n&&lh(u),Nu(n);continue}else if(u!==null&&u.memoizedState!==null){n&&L0(a),Nu(n);continue}}u=a.child,(a.subtreeFlags&i)!==0&&u!==null?(u.return=a,Nn=u):(n&&F0(a),Nu(n))}}wi=null}function Nu(n){for(;Nn!==null;){var i=Nn,a=n,u=i.alternate,f=i.flags;switch(i.tag){case 0:case 11:case 15:break;case 1:if((f&1024)!==0&&u!==null){a=void 0,f=u.memoizedProps,u=u.memoizedState;var h=i.stateNode;try{var w=Xs(i.type,f);a=h.getSnapshotBeforeUpdate(w,u),h.__reactInternalSnapshotBeforeUpdate=a}catch(k){Pt(i,i.return,k)}}break;case 3:(f&1024)!==0&&en&&i1(i.stateNode.containerInfo);break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&u!==null&&(a=Q(u.memoizedProps,u.stateNode),f=i.memoizedProps,f=ee(f.default,f.update),f!=="none"&&Ro(u,a,f,u.memoizedState=[],!0));break;default:if((f&1024)!==0)throw Error(o(163))}if(u=i.sibling,u!==null){u.return=i.return,Nn=u;break}Nn=i.return}}function z0(n,i,a){var u=a.flags;switch(a.tag){case 0:case 11:case 15:dr(n,a),u&4&&Ya(5,a);break;case 1:if(dr(n,a),u&4)if(n=a.stateNode,i===null)try{n.componentDidMount()}catch(w){Pt(a,a.return,w)}else{var f=Xs(a.type,i.memoizedProps);i=i.memoizedState;try{n.componentDidUpdate(f,i,n.__reactInternalSnapshotBeforeUpdate)}catch(w){Pt(a,a.return,w)}}u&64&&E0(a),u&512&&cr(a,a.return);break;case 3:if(dr(n,a),u&64&&(u=a.updateQueue,u!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=el(a.child.stateNode);break;case 1:n=a.child.stateNode}try{yu(u,n)}catch(w){Pt(a,a.return,w)}}break;case 27:tn&&i===null&&u&4&&N0(a);case 26:case 5:if(dr(n,a),i===null){if(u&4)th(a);else if(u&64){n=a.type,i=a.memoizedProps,f=a.stateNode;try{R1(f,n,i,a)}catch(w){Pt(a,a.return,w)}}}u&512&&cr(a,a.return);break;case 12:dr(n,a);break;case 31:dr(n,a),u&4&&V0(n,a);break;case 13:dr(n,a),u&4&&G0(n,a),u&64&&(u=a.memoizedState,u!==null&&(u=u.dehydrated,u!==null&&(a=jS.bind(null,a),c1(u,a))));break;case 22:if(u=a.memoizedState!==null||In,!u){var h=i!==null&&i.memoizedState!==null||Dt;i=In,f=Dt,In=u,(Dt=h)&&!f?(u=tn?2:0,(a.subtreeFlags&8772)!==0&&(u|=1),er(n,a,u)):dr(n,a),In=i,Dt=f}break;case 30:dr(n,a),u&512&&cr(a,a.return);break;case 7:u&512&&cr(a,a.return);default:dr(n,a)}}function fh(n,i){if(en)for(n=n.child;n!==null;)B0(n,i),n=n.sibling}function B0(n,i){if(en)switch(n.tag){case 5:case 26:try{var a=n.stateNode;i?Gx(a):Xx(n.stateNode,n.memoizedProps)}catch(h){Pt(n,n.return,h)}dh(n,i);break;case 6:try{var u=n.stateNode;i?Wx(u):qx(u,n.memoizedProps),Zn=!0}catch(h){Pt(n,n.return,h)}break;case 18:try{var f=n.stateNode;i?U1(f):O1(n.stateNode)}catch(h){Pt(n,n.return,h)}break;case 22:case 23:n.memoizedState===null&&fh(n,i);break;default:fh(n,i)}}function dh(n,i){if(en&&n.subtreeFlags&67108864)for(n=n.child;n!==null;){var a=n,u=i;if(en)switch(a.tag){case 4:B0(a,u);break;case 22:a.memoizedState===null&&dh(a,u);break;default:dh(a,u)}n=n.sibling}}function H0(n){var i=n.alternate;i!==null&&(n.alternate=null,H0(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&_x(i)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function yi(n,i,a){for(a=a.child;a!==null;)hh(n,i,a),a=a.sibling}function hh(n,i,a){if(xi&&typeof xi.onCommitFiberUnmount=="function")try{xi.onCommitFiberUnmount(il,a)}catch{}switch(a.tag){case 26:if(Ui){Dt||zn(a,i),yi(n,i,a),a.memoizedState?Wv(a.memoizedState):a.stateNode&&(Dt||Xh(a.stateNode));break}case 27:if(tn){Dt||zn(a,i),Za(a);var u=bn,f=hi;Oo(a.type)&&(bn=a.stateNode,hi=!1),yi(n,i,a),Yv(a.stateNode,a.type,a.memoizedProps),bn=u,hi=f;break}case 5:Dt||zn(a,i),Za(a);case 6:if(a.tag===6&&Za(a),en){if(u=bn,f=hi,bn=null,yi(n,i,a),bn=u,hi=f,bn!==null)if(hi)try{Vx(bn,a.stateNode),Zn=!0}catch(h){Pt(a,i,h)}else try{Hx(bn,a.stateNode),Zn=!0}catch(h){Pt(a,i,h)}}else yi(n,i,a);break;case 18:en&&bn!==null&&(hi?F1(bn,a.stateNode):k1(bn,a.stateNode));break;case 4:en?(u=bn,f=hi,bn=a.stateNode.containerInfo,hi=!0,yi(n,i,a),bn=u,hi=f):(pr&&I0(a.stateNode,a,Dv()),yi(n,i,a));break;case 0:case 11:case 14:case 15:us(2,a,i),Dt||us(4,a,i),yi(n,i,a);break;case 1:Dt||(zn(a,i),u=a.stateNode,typeof u.componentWillUnmount=="function"&&A0(a,i,u)),yi(n,i,a);break;case 21:yi(n,i,a);break;case 22:Dt=(u=Dt)||a.memoizedState!==null,yi(n,i,a),Dt=u;break;case 30:zn(a,i),yi(n,i,a);break;case 7:Dt||zn(a,i),yi(n,i,a);break;default:yi(n,i,a)}}function V0(n,i){if(Hn&&i.memoizedState===null&&(n=i.alternate,n!==null&&(n=n.memoizedState,n!==null))){n=n.dehydrated;try{I1(n)}catch(a){Pt(i,i.return,a)}}}function G0(n,i){if(Hn&&i.memoizedState===null&&(n=i.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{N1(n)}catch(a){Pt(i,i.return,a)}}function BS(n){switch(n.tag){case 31:case 13:case 19:var i=n.stateNode;return i===null&&(i=n.stateNode=new ry),i;case 22:return n=n.stateNode,i=n._retryCache,i===null&&(i=n._retryCache=new ry),i;default:throw Error(o(435,n.tag))}}function Lu(n,i){var a=BS(n);i.forEach(function(u){if(!a.has(u)){a.add(u);var f=ZS.bind(null,n,u);u.then(f,f)}})}function Bn(n,i,a){var u=i.deletions;if(u!==null)for(var f=0;f<u.length;f++){var h=u[f],w=n,k=i;if(en){var K=k;e:for(;K!==null;){switch(K.tag){case 27:if(tn){if(Oo(K.type)){bn=K.stateNode,hi=!1;break e}break}case 5:bn=K.stateNode,hi=!1;break e;case 3:case 4:bn=K.stateNode.containerInfo,hi=!0;break e}K=K.return}if(bn===null)throw Error(o(160));hh(w,k,h),bn=null,hi=!1}else hh(w,k,h);w=h.alternate,w!==null&&(w.return=null),h.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)W0(i,n,a),i=i.sibling}function W0(n,i,a){var u=n.alternate,f=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(f&4&&(u=n.updateQueue,u=u!==null?u.events:null,u!==null))for(var h=0;h<u.length;h++){var w=u[h];w.ref.impl=w.nextImpl}Bn(i,n,a),jn(n),f&4&&(us(3,n,n.return),Ya(3,n),us(5,n,n.return));break;case 1:Bn(i,n,a),jn(n),f&512&&(Dt||u===null||zn(u,u.return)),f&64&&In&&(n=n.updateQueue,n!==null&&(i=n.callbacks,i!==null&&(f=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=f===null?i:f.concat(i))));break;case 26:if(Ui){h=tr,Bn(i,n,a),jn(n),f&512&&(Dt||u===null||zn(u,u.return)),f&4&&(a=u!==null?u.memoizedState:null,f=n.memoizedState,u===null?f===null?n.stateNode===null?n.stateNode=In?Xv(n.type,n.memoizedProps,i.containerInfo,n):H1(h,n.type,n.memoizedProps,n):In||Wh(h,n.type,n.stateNode):n.stateNode=Gv(h,f,n.memoizedProps):a!==f?(a===null?(i=u.stateNode,i===null||Dt||Xh(i)):Wv(a),f===null?In||Wh(h,n.type,n.stateNode):Gv(h,f,n.memoizedProps)):f===null&&n.stateNode!==null&&nh(n,n.memoizedProps,u.memoizedProps));break}case 27:if(tn){Bn(i,n,a),jn(n),f&512&&(Dt||u===null||zn(u,u.return)),u!==null&&f&4&&nh(n,n.memoizedProps,u.memoizedProps);break}case 5:if(h=yr,yr=!1,Bn(i,n,a),yr=h,jn(n),f&512&&(Dt||u===null||zn(u,u.return)),en){if(n.flags&32){i=n.stateNode;try{Pv(i),Zn=!0}catch(ge){Pt(n,n.return,ge)}}f&4&&n.stateNode!=null&&(i=n.memoizedProps,nh(n,i,u!==null?u.memoizedProps:i)),f&1024&&(ap=!0)}else pr&&n.alternate!==null&&(n.alternate.stateNode=n.stateNode);break;case 6:if(Bn(i,n,a),jn(n),f&4&&en){if(n.stateNode===null)throw Error(o(162));i=n.memoizedProps,f=u!==null?u.memoizedProps:i,a=n.stateNode;try{Fx(a,f,i),Zn=!0}catch(ge){Pt(n,n.return,ge)}}break;case 3:if(Zn=!1,Ui?(V1(),h=tr,tr=Vu(i.containerInfo),Bn(i,n,a),tr=h):Bn(i,n,a),jn(n),f&4){if(en&&Hn&&u!==null&&u.memoizedState.isDehydrated)try{P1(i.containerInfo)}catch(ge){Pt(n,n.return,ge)}if(pr){f=i.containerInfo,i=i.pendingChildren;try{Fv(f,i),Zn=!0}catch(ge){Pt(n,n.return,ge)}}}ap&&(ap=!1,X0(n)),Zn=!1;break;case 4:u=yr,yr=In,h=C0(),Ui?(w=tr,tr=Vu(n.stateNode.containerInfo),Bn(i,n,a),jn(n),tr=w):(Bn(i,n,a),jn(n)),Zn&&cl&&(rc=!0),Zn=h,yr=u,f&4&&pr&&I0(n.stateNode,n,n.stateNode.pendingChildren);break;case 12:Bn(i,n,a),jn(n);break;case 31:Bn(i,n,a),jn(n),f&4&&(i=n.updateQueue,i!==null&&(n.updateQueue=null,Lu(n,i)));break;case 13:Bn(i,n,a),jn(n),n.child.flags&8192&&n.memoizedState!==null!=(u!==null&&u.memoizedState!==null)&&(cc=fi()),f&4&&(i=n.updateQueue,i!==null&&(n.updateQueue=null,Lu(n,i)));break;case 22:h=n.memoizedState!==null,w=u!==null&&u.memoizedState!==null;var k=In,K=Dt,fe=yr;In=k||h,yr=fe||h,Dt=K||w,Bn(i,n,a),Dt=K,yr=fe,In=k,jn(n),f&8192&&(i=n.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,!h||u===null||w||In||Dt||(i=tn?2:0,a=w||Dt,u=In,w=Dt,In=h||In,Dt=a,cs(n,i),In=u,Dt=w),en&&(h||!yr)&&fh(n,h)),f&4&&(i=n.updateQueue,i!==null&&(f=i.retryQueue,f!==null&&(i.retryQueue=null,Lu(n,f))));break;case 19:Bn(i,n,a),jn(n),f&4&&(i=n.updateQueue,i!==null&&(n.updateQueue=null,Lu(n,i)));break;case 30:f&512&&(Dt||u===null||zn(u,u.return)),f=C0(),h=cl,w=(a&335544064)===a,k=n.memoizedProps,cl=w&&ee(k.default,k.update)!=="none",Bn(i,n,a),jn(n),w&&u!==null&&Zn&&(n.flags|=4),cl=h,Zn=f;break;case 21:break;case 7:f&512&&(Dt||u===null||zn(u,u.return)),u&&u.stateNode!==null&&s1(n,u.stateNode);default:Bn(i,n,a),jn(n)}}function jn(n){var i=n.flags;if(i&2){try{for(var a,u=n.return;u!==null;){if(P0(u)){a=u;break}u=u.return}u=null;for(var f=n.return;f!==null;){if(eh(f)){var h=f.stateNode;u===null?u=[h]:u.push(h)}if(Qd(f))break;f=f.return}var w=u;if(en){if(a==null)throw Error(o(160));switch(a.tag){case 27:if(tn){var k=a.stateNode,K=ih(n);Ru(n,K,k,w);break}case 5:var fe=a.stateNode;a.flags&32&&(Pv(fe),a.flags&=-33);var ge=ih(n);Ru(n,ge,fe,w);break;case 3:case 4:var Ce=a.stateNode.containerInfo,De=ih(n);rh(n,De,Ce,w);break;default:throw Error(o(161))}}else sh(n,w)}catch(gt){Pt(n,n.return,gt)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function X0(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var i=n;X0(i),i.tag===5&&i.flags&1024&&Tx(i.stateNode),n=n.sibling}}function Po(n,i){if(i.subtreeFlags&9270)for(i=i.child;i!==null;)q0(i,n),i=i.sibling;else O0(i,!1)}function q0(n,i){var a=n.alternate;if(a===null)oh(n,!1);else switch(n.tag){case 3:if(lp=_r=!1,D0(),Po(i,n),!_r&&!rc){if(n=vr,n!==null)for(var u=0;u<n.length;u+=3)Yx(n[u],n[u+1],n[u+2]);jx(i.containerInfo),lp=!0}vr=null;break;case 5:Po(i,n);break;case 4:u=_r,_r=!1,Po(i,n),_r&&(rc=!0),_r=u;break;case 22:n.memoizedState===null&&(a.memoizedState!==null?oh(n,!1):Po(i,n));break;case 30:u=_r;var f=D0();_r=!1,Po(i,n),_r&&(n.flags|=4);var h=n.memoizedProps,w=n.stateNode;i=Q(h,w),w=Q(a.memoizedProps,w);var k=ee(h.default,h.update);k==="none"?a=!1:(h=a.memoizedState,a.memoizedState=null,a=n.child,di=0,a=ch(n,a,i,w,k,h,!0),di!==(h===null?0:h.length)&&(n.flags|=32)),(n.flags&4)!==0&&a?(No(n,n.memoizedProps.onUpdate),vr=f):f!==null&&(f.push.apply(f,vr),vr=f),_r=(n.flags&32)!==0?!0:u;break;default:Po(i,n)}}function dr(n,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)z0(n,i.alternate,i),i=i.sibling}function cs(n,i){for(n=n.child;n!==null;){var a=n,u=i;switch(a.tag){case 0:case 11:case 14:case 15:us(4,a,a.return),cs(a,u);break;case 1:zn(a,a.return);var f=a.stateNode;typeof f.componentWillUnmount=="function"&&A0(a,a.return,f),cs(a,u);break;case 27:tn&&(u&2)!==0&&Yv(a.stateNode,a.type,a.memoizedProps);case 5:zn(a,a.return),a.tag!==5&&a.tag!==27||Za(a),cs(a,u);break;case 6:Za(a);break;case 26:zn(a,a.return),Ui&&(f=a.stateNode,a.memoizedState!==null||f===null||Dt||Xh(f)),cs(a,u);break;case 22:a.memoizedState===null&&cs(a,u);break;case 30:zn(a,a.return),cs(a,u);break;case 7:zn(a,a.return);default:cs(a,u)}n=n.sibling}}function er(n,i,a){for(a=(i.subtreeFlags&8772)!==0?a:a&-2,i=i.child;i!==null;){var u=i.alternate,f=n,h=i,w=h.flags,k=(a&1)!==0;switch(h.tag){case 0:case 11:case 15:er(f,h,a),Ya(4,h);break;case 1:if(er(f,h,a),u=h,f=u.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(ge){Pt(u,u.return,ge)}if(u=h,f=u.updateQueue,f!==null){var K=u.stateNode;try{var fe=f.shared.hiddenCallbacks;if(fe!==null)for(f.shared.hiddenCallbacks=null,f=0;f<fe.length;f++)vu(fe[f],K)}catch(ge){Pt(u,u.return,ge)}}k&&w&64&&E0(h),cr(h,h.return);break;case 27:tn&&(a&2)!==0&&N0(h);case 5:h.tag!==5&&h.tag!==27||R0(h),er(f,h,a),k&&u===null&&w&4&&th(h),cr(h,h.return);break;case 6:R0(h);break;case 26:Ui&&(K=h.stateNode,h.memoizedState!==null||K===null||In||Wh(Vu(K.ownerDocument),h.type,K)),er(f,h,a),k&&u===null&&w&4&&th(h),cr(h,h.return);break;case 12:er(f,h,a);break;case 31:er(f,h,a),k&&w&4&&V0(f,h);break;case 13:er(f,h,a),k&&w&4&&G0(f,h);break;case 22:h.memoizedState===null&&er(f,h,a),cr(h,h.return);break;case 30:er(f,h,a),cr(h,h.return);break;case 7:cr(h,h.return);default:er(f,h,a)}i=i.sibling}}function ph(n,i){var a=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),n=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(n=i.memoizedState.cachePool.pool),n!==a&&(n!=null&&n.refCount++,a!=null&&je(a))}function mh(n,i){n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&je(n))}function Fi(n,i,a,u){var f=(a&335544064)===a;if(i.subtreeFlags&(f?10262:10256))for(i=i.child;i!==null;)$0(n,i,a,u),i=i.sibling;else f&&U0(i)}function $0(n,i,a,u){var f=(a&335544064)===a;f&&i.alternate===null&&i.return!==null&&i.return.alternate!==null&&Iu(i);var h=i.flags;switch(i.tag){case 0:case 11:case 15:Fi(n,i,a,u),h&2048&&Ya(9,i);break;case 1:Fi(n,i,a,u);break;case 3:Fi(n,i,a,u),f&&en&&lp&&Zx(n.containerInfo),h&2048&&(n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&je(n)));break;case 12:if(h&2048){Fi(n,i,a,u),n=i.stateNode;try{var w=i.memoizedProps,k=w.id,K=w.onPostCommit;typeof K=="function"&&K(k,i.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(fe){Pt(i,i.return,fe)}}else Fi(n,i,a,u);break;case 31:Fi(n,i,a,u);break;case 13:Fi(n,i,a,u);break;case 23:break;case 22:w=i.stateNode,k=i.alternate,i.memoizedState!==null?(f&&k!==null&&k.memoizedState===null&&Iu(k),w._visibility&2?Fi(n,i,a,u):Ja(n,i)):(f&&k!==null&&k.memoizedState!==null&&Iu(i),w._visibility&2?Fi(n,i,a,u):(w._visibility|=2,Io(n,i,a,u,(i.subtreeFlags&10256)!==0||!1))),h&2048&&ph(k,i);break;case 24:Fi(n,i,a,u),h&2048&&mh(i.alternate,i);break;case 30:f&&(f=i.alternate,f!==null&&(fr(f.child,!0),fr(i.child,!0))),Fi(n,i,a,u);break;default:Fi(n,i,a,u)}}function Io(n,i,a,u,f){for(f=f&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var h=n,w=i,k=a,K=u,fe=w.flags;switch(w.tag){case 0:case 11:case 15:Io(h,w,k,K,f),Ya(8,w);break;case 23:break;case 22:var ge=w.stateNode;w.memoizedState!==null?ge._visibility&2?Io(h,w,k,K,f):Ja(h,w):(ge._visibility|=2,Io(h,w,k,K,f)),f&&fe&2048&&ph(w.alternate,w);break;case 24:Io(h,w,k,K,f),f&&fe&2048&&mh(w.alternate,w);break;default:Io(h,w,k,K,f)}i=i.sibling}}function Ja(n,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=n,u=i,f=u.flags;switch(u.tag){case 22:Ja(a,u),f&2048&&ph(u.alternate,u);break;case 24:Ja(a,u),f&2048&&mh(u.alternate,u);break;default:Ja(a,u)}i=i.sibling}}function fs(n,i,a){if(n.subtreeFlags&to)for(n=n.child;n!==null;)Y0(n,i,a),n=n.sibling}function Y0(n,i,a){switch(n.tag){case 26:if(fs(n,i,a),n.flags&to)if(n.memoizedState!==null)W1(a,tr,n.memoizedState,n.memoizedProps);else{var u=n.stateNode,f=n.type;n=n.memoizedProps,((i&335544128)===i||Bh(f,n))&&Rv(a,u,f,n)}break;case 5:fs(n,i,a),n.flags&to&&(u=n.stateNode,f=n.type,n=n.memoizedProps,((i&335544128)===i||Bh(f,n))&&Rv(a,u,f,n));break;case 3:case 4:Ui?(u=tr,tr=Vu(n.stateNode.containerInfo),fs(n,i,a),tr=u):fs(n,i,a);break;case 22:n.memoizedState===null&&(u=n.alternate,u!==null&&u.memoizedState!==null?(u=to,to=16777216,fs(n,i,a),to=u):fs(n,i,a));break;case 30:(n.flags&to)!==0&&(u=n.memoizedProps.name,u!=null&&u!=="auto"&&(f=n.stateNode,f.paired=null,wi===null&&(wi=new Map),wi.set(u,f))),fs(n,i,a);break;default:fs(n,i,a)}}function j0(n){var i=n.alternate;if(i!==null&&(n=i.child,n!==null)){i.child=null;do i=n.sibling,n.sibling=null,n=i;while(n!==null)}}function Ka(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var u=i[a];Nn=u,J0(u,n)}j0(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Z0(n),n=n.sibling}function Z0(n){switch(n.tag){case 0:case 11:case 15:Ka(n),n.flags&2048&&us(9,n,n.return);break;case 3:Ka(n);break;case 12:Ka(n);break;case 22:var i=n.stateNode;n.memoizedState!==null&&i._visibility&2&&(n.return===null||n.return.tag!==13)?(i._visibility&=-3,Du(n)):Ka(n);break;default:Ka(n)}}function Du(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var u=i[a];Nn=u,J0(u,n)}j0(n)}for(n=n.child;n!==null;){switch(i=n,i.tag){case 0:case 11:case 15:us(8,i,i.return),Du(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,Du(i));break;default:Du(i)}n=n.sibling}}function J0(n,i){for(;Nn!==null;){var a=Nn;switch(a.tag){case 0:case 11:case 15:us(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var u=a.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:je(a.memoizedState.cache)}if(u=a.child,u!==null)u.return=a,Nn=u;else e:for(a=n;Nn!==null;){u=Nn;var f=u.sibling,h=u.return;if(H0(u),u===a){Nn=null;break e}if(f!==null){f.return=h,Nn=f;break e}Nn=h}}}function gh(n){var i=mx(n);if(i!=null){if(typeof i.memoizedProps["data-testname"]!="string")throw Error(o(364));return i}if(n=Cx(n),n===null)throw Error(o(362));return n.stateNode.current}function vh(n,i){var a=n.tag;switch(i.$$typeof){case sc:if(n.type===i.value)return!0;break;case oc:e:{for(i=i.value,n=[n,0],a=0;a<n.length;){var u=n[a++],f=u.tag,h=n[a++],w=i[h];if(f!==5&&f!==26&&f!==27||!nl(u)){for(;w!=null&&vh(u,w);)h++,w=i[h];if(h===i.length){i=!0;break e}else for(u=u.child;u!==null;)n.push(u,h),u=u.sibling}}i=!1}return i;case ac:if((a===5||a===26||a===27)&&Ix(n.stateNode,i.value))return!0;break;case uc:if((a===5||a===6||a===26||a===27)&&(n=Px(n),n!==null&&0<=n.indexOf(i.value)))return!0;break;case lc:if((a===5||a===26||a===27)&&(n=n.memoizedProps["data-testname"],typeof n=="string"&&n.toLowerCase()===i.value.toLowerCase()))return!0;break;default:throw Error(o(365))}return!1}function yh(n){switch(n.$$typeof){case sc:return"<"+(y(n.value)||"Unknown")+">";case oc:return":has("+(yh(n)||"")+")";case ac:return'[role="'+n.value+'"]';case uc:return'"'+n.value+'"';case lc:return'[data-testname="'+n.value+'"]';default:throw Error(o(365))}}function K0(n,i){var a=[];n=[n,0];for(var u=0;u<n.length;){var f=n[u++],h=f.tag,w=n[u++],k=i[w];if(h!==5&&h!==26&&h!==27||!nl(f)){for(;k!=null&&vh(f,k);)w++,k=i[w];if(w===i.length)a.push(f);else for(f=f.child;f!==null;)n.push(f,w),f=f.sibling}}return a}function _h(n,i){if(!tl)throw Error(o(363));n=gh(n),n=K0(n,i),i=[],n=Array.from(n);for(var a=0;a<n.length;){var u=n[a++],f=u.tag;if(f===5||f===26||f===27)nl(u)||i.push(u.stateNode);else for(u=u.child;u!==null;)n.push(u),u=u.sibling}return i}function _i(){return(bt&2)!==0&&xt!==0?xt&-xt:Ze.T!==null?le():vx()}function Q0(){if(Ei===0)if((xt&536870912)===0||pt){var n=Wu;Wu<<=1,(Wu&3932160)===0&&(Wu=262144),Ei=n}else Ei=536870912;return n=Gn.current,n!==null&&(n.flags|=32),Ei}function No(n,i){if(i!=null){var a=n.stateNode,u=a.ref;u===null&&(u=a.ref=Nv(Q(n.memoizedProps,a))),ea===null&&(ea=[]),ea.push(i.bind(null,u))}}function ci(n,i,a){(n===Gt&&(Ft===2||Ft===9)||n.cancelPendingCommit!==null)&&(Lo(n,0),ds(n,xt,Ei,!1)),M(n,a),((bt&2)===0||n!==Gt)&&(n===Gt&&((bt&2)===0&&(no|=a),fn===4&&ds(n,xt,Ei,!1)),de(n))}function ev(n,i,a){if((bt&6)!==0)throw Error(o(327));var u=!a&&(i&127)===0&&(i&n.expiredLanes)===0||A(n,i),f=u?GS(n,i):Sh(n,i,!0),h=u;do{if(f===0){Jo&&!u&&ds(n,i,0,!1);break}else{if(a=n.current.alternate,h&&!HS(a)){f=Sh(n,i,!1),h=!1;continue}if(f===2){if(h=i,n.errorRecoveryDisabledLanes&h)var w=0;else w=n.pendingLanes&-536870913,w=w!==0?w:w&536870912?536870912:0;if(w!==0){i=w;e:{var k=n;f=dl;var K=Hn&&k.current.memoizedState.isDehydrated;if(K&&(Lo(k,w).flags|=256),w=Sh(k,w,!1),w!==2&&w!==6){if(up&&!K){k.errorRecoveryDisabledLanes|=h,no|=h,f=4;break e}h=pi,pi=f,h!==null&&(pi===null?pi=h:pi.push.apply(pi,h))}f=w}if(h=!1,f!==2)continue}}if(f===1){Lo(n,0),ds(n,i,0,!0);break}e:{switch(u=n,h=f,h){case 0:case 1:throw Error(o(345));case 4:if((i&4194048)!==i&&(i&62914560)!==i)break;case 6:ds(u,i,Ei,!_s);break e;case 2:pi=null;break;case 3:case 5:break;default:throw Error(o(329))}if((i&62914560)===i&&(f=cc+300-fi(),10<f)){if(ds(u,i,Ei,!_s),g(u,0,!0)!==0)break e;br=i,u.timeoutHandle=hx(tv.bind(null,u,a,pi,fc,fp,i,Ei,no,Ko,_s,h,"Throttled",-0,0),f);break e}tv(u,a,pi,fc,fp,i,Ei,no,Ko,_s,h,null,-0,0)}}break}while(!0);de(n)}function tv(n,i,a,u,f,h,w,k,K,fe,ge,Ce,De,gt){n.timeoutHandle=$s;var At=i.subtreeFlags,xs=(h&335544064)===h;if(Ce=null,(xs||At&8192||(At&16785408)===16785408)&&(Ce=xx(),wi=null,Y0(i,h,Ce),xs&&Mx(Ce,n.containerInfo),At=(h&62914560)===h?cc-fi():(h&4194048)===h?sy-fi():0,At=wx(Ce,At),At!==null)){br=h,n.cancelPendingCommit=At(cv.bind(null,n,i,h,a,u,f,w,k,K,fe,ge,Ce,null,De,gt)),ds(n,h,w,!fe);return}cv(n,i,h,a,u,f,w,k,K,fe,ge,Ce)}function HS(n){for(var i=n;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var u=0;u<a.length;u++){var f=a[u],h=f.getSnapshot;f=f.value;try{if(!Mi(h(),f))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ds(n,i,a,u){i=D(n,i),i&=~cp,i&=~no,n.suspendedLanes|=i,n.pingedLanes&=~i,u&&(n.warmLanes|=i),u=n.expirationTimes;for(var f=i;0<f;){var h=31-Si(f),w=1<<h;u[h]=-1,f&=~w}a!==0&&V(n,a,i)}function nv(){return(bt&6)===0?(ue(0,!1),!1):!0}function bh(){if(St!==null){if(Ft===0)var n=St.return;else n=St,Or=Ys=null,Oe(n),$o=null,ll=0,n=St;for(;n!==null;)T0(n.alternate,n),n=n.return;St=null}}function Lo(n,i){var a=n.timeoutHandle;return a!==$s&&(n.timeoutHandle=$s,px(a)),a=n.cancelPendingCommit,a!==null&&(n.cancelPendingCommit=null,a()),br=0,bh(),Gt=n,St=a=Dr(n.current,null),xt=i,Ft=0,Ti=null,_s=!1,Jo=A(n,i),up=!1,Ko=Ei=cp=no=bs=fn=0,pi=dl=null,fp=!1,Br=D(n,i),Bs(),a}function iv(n,i){at=null,Ze.H=nc,i===qo||i===Ju?(i=Rt(),Ft=3):i===tp?(i=Rt(),Ft=4):Ft=i===sp?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Ti=i,St===null&&(fn=1,xu(n,Ve(i,n.current)))}function rv(){var n=Gn.current;return n===null?!0:(xt&4194048)===xt?ri===null:(xt&62914560)===xt||(xt&536870912)!==0?n===ri:!1}function sv(){var n=Ze.H;return Ze.H=nc,n===null?nc:n}function ov(){var n=Ze.A;return Ze.A=aM,n}function ku(){fn=4,_s||(xt&4194048)!==xt&&Gn.current!==null||(Jo=!0),(bs&134217727)===0&&(no&134217727)===0||Gt===null||ds(Gt,xt,Ei,!1)}function Sh(n,i,a){var u=bt;bt|=2;var f=sv(),h=ov();(Gt!==n||xt!==i)&&(fc=null,Lo(n,i)),i=!1;var w=fn;e:do try{if(Ft!==0&&St!==null){var k=St,K=Ti;switch(Ft){case 8:bh(),w=6;break e;case 3:case 2:case 9:case 6:Gn.current===null&&(i=!0);var fe=Ft;if(Ft=0,Ti=null,Do(n,k,K,fe),a&&Jo){w=0;break e}break;default:fe=Ft,Ft=0,Ti=null,Do(n,k,K,fe)}}VS(),w=fn;break}catch(ge){iv(n,ge)}while(!0);return i&&n.shellSuspendCounter++,Or=Ys=null,bt=u,Ze.H=f,Ze.A=h,St===null&&(Gt=null,xt=0,Bs()),w}function VS(){for(;St!==null;)av(St)}function GS(n,i){var a=bt;bt|=2;var u=sv(),f=ov();Gt!==n||xt!==i?(fc=null,hl=fi()+500,Lo(n,i)):Jo=A(n,i);e:do try{if(Ft!==0&&St!==null){i=St;var h=Ti;t:switch(Ft){case 1:Ft=0,Ti=null,Do(n,i,h,1);break;case 2:case 9:if(Ge(h)){Ft=0,Ti=null,lv(i);break}i=function(){Ft!==2&&Ft!==9||Gt!==n||(Ft=7),de(n)},h.then(i,i);break e;case 3:Ft=7;break e;case 4:Ft=5;break e;case 7:Ge(h)?(Ft=0,Ti=null,lv(i)):(Ft=0,Ti=null,Do(n,i,h,7));break;case 5:var w=null;switch(St.tag){case 26:w=St.memoizedState;case 5:case 27:var k=St,K=k.type,fe=k.pendingProps;if(w?qv(w):Cv(k.stateNode,K,fe)){Ft=0,Ti=null;var ge=k.sibling;if(ge!==null)St=ge;else{var Ce=k.return;Ce!==null?(St=Ce,Fu(Ce)):St=null}break t}}Ft=0,Ti=null,Do(n,i,h,5);break;case 6:Ft=0,Ti=null,Do(n,i,h,6);break;case 8:bh(),fn=6;break e;default:throw Error(o(462))}}WS();break}catch(De){iv(n,De)}while(!0);return Or=Ys=null,Ze.H=u,Ze.A=f,bt=a,St!==null?0:(Gt=null,xt=0,Bs(),fn)}function WS(){for(;St!==null&&!Y1();)av(St)}function av(n){var i=b0(n.alternate,n,Br);n.memoizedProps=n.pendingProps,i===null?Fu(n):St=i}function lv(n){var i=n,a=i.alternate;switch(i.tag){case 15:case 0:i=h0(a,i,i.pendingProps,i.type,void 0,xt);break;case 11:i=h0(a,i,i.pendingProps,i.type.render,i.ref,xt);break;case 5:Oe(i);var u=i;Hn&&u===Pn&&(pt?(on(u),u.tag===5&&u.stateNode!=null&&(jt=u.stateNode)):(on(u),pt=!0));default:T0(a,i),i=St=pv(i,Br),i=b0(a,i,Br)}n.memoizedProps=n.pendingProps,i===null?Fu(n):St=i}function Do(n,i,a,u){Or=Ys=null,Oe(i),$o=null,ll=0;var f=i.return;try{if(LS(n,f,i,a,xt)){fn=1,xu(n,Ve(a,n.current)),St=null;return}}catch(h){if(f!==null)throw St=f,h;fn=1,xu(n,Ve(a,n.current)),St=null;return}i.flags&32768?(pt||u===1?n=!0:Jo||(xt&536870912)!==0?n=!1:(_s=n=!0,(u===2||u===9||u===3||u===6)&&(u=Gn.current,u!==null&&u.tag===13&&(u.flags|=16384))),uv(i,n)):Fu(i)}function Fu(n){var i=n;do{if((i.flags&32768)!==0){uv(i,_s);return}n=i.return;var a=US(i.alternate,i,Br);if(a!==null){St=a;return}if(i=i.sibling,i!==null){St=i;return}St=i=n}while(i!==null);fn===0&&(fn=5)}function uv(n,i){do{var a=OS(n.alternate,n);if(a!==null){a.flags&=32767,St=a;return}if(a=n.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(n=n.sibling,n!==null)){St=n;return}St=n=a}while(n!==null);fn=6,St=null}function cv(n,i,a,u,f,h,w,k,K,fe,ge,Ce){n.cancelPendingCommit=null;do Qa();while(rn!==0);if((bt&6)!==0)throw Error(o(327));if(i!==null){if(i===n.current)throw Error(o(177));n===Gt&&(St=Gt=null,xt=0),io=i,nr=n,br=a,hp=f,oy=u,XS(n,i,a,w,k,K,Ce)}}function XS(n,i,a,u,f,h,w){var k=i.lanes|i.childLanes;if(dp=k,k|=np,P(n,a,k,u,f,h),ea=null,(a&335544064)===a?(ta=T(n),u=10262):(ta=null,u=10256),(i.subtreeFlags&u)!==0||(i.flags&u)!==0?(n.callbackNode=null,n.callbackPriority=0,JS(Yh,function(){return Th(),null})):(n.callbackNode=null,n.callbackPriority=0),ic=!1,u=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||u){u=Ze.T,Ze.T=null,f=Fr(),Rn(2),h=bt,bt|=4;try{zS(n,i,a)}finally{bt=h,Rn(f),Ze.T=u}}rn=1,ic?Qo=e1(w,n.containerInfo,ta,xh,Mh,$S,wh,Th,qS,null,null):(xh(),Mh(),wh())}function qS(n){if(rn!==0){var i=nr.onRecoverableError;i(n,{componentStack:null})}}function $S(){rn===3&&(rn=0,q0(io,nr),rn=4)}function xh(){if(rn===1){rn=0;var n=nr,i=io,a=br,u=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||u){u=Ze.T,Ze.T=null;var f=Fr();Rn(2);var h=bt;bt|=4;try{cl=rc=!1,W0(i,n,a),fx(n.containerInfo)}finally{bt=h,Rn(f),Ze.T=u}}n.current=i,rn=2}}function Mh(){if(rn===2){rn=0;var n=nr,i=io,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=Ze.T,Ze.T=null;var u=Fr();Rn(2);var f=bt;bt|=4;try{z0(n,i.alternate,i)}finally{bt=f,Rn(u),Ze.T=a}}rn=3}}function wh(){if(rn===4||rn===3){rn=0;var n=Qo;Qo=null,j1();var i=nr,a=io,u=br,f=oy,h=(u&335544064)===u?10262:10256;if((a.subtreeFlags&h)!==0||(a.flags&h)!==0?rn=5:(rn=0,io=nr=null,fv(i,i.pendingLanes)),h=i.pendingLanes,h===0&&(Ss=null),Z(u),a=a.stateNode,xi&&typeof xi.onCommitFiberRoot=="function")try{xi.onCommitFiberRoot(il,a,void 0,(a.current.flags&128)===128)}catch{}if(f!==null){a=Ze.T,h=Fr(),Rn(2),Ze.T=null;try{for(var w=i.onRecoverableError,k=0;k<f.length;k++){var K=f[k];w(K.value,{componentStack:K.stack})}}finally{Ze.T=a,Rn(h)}}if(f=ea,w=ta,ta=null,f!==null&&(ea=null,w===null&&(w=[]),n!==null))for(K=0;K<f.length;K++)a=(0,f[K])(w),a!==void 0&&n1(n,a);(br&3)!==0&&Qa(),de(i),h=i.pendingLanes,(u&261930)!==0&&(h&42)!==0?i===dc?pl++:(pl=0,dc=i):(pl=0,dc=null),Hn&&D1(),ue(0,!1)}}function fv(n,i){(n.pooledCacheLanes&=i)===0&&(i=n.pooledCache,i!=null&&(n.pooledCache=null,je(i)))}function Qa(){return Qo!==null&&(t1(Qo),Qo=null),xh(),Mh(),wh(),Th()}function Th(){if(rn!==5)return!1;var n=nr,i=dp;dp=0;var a=Z(br),u=32>a?32:a;a=Ze.T;var f=Fr();try{Rn(u),Ze.T=null,u=hp,hp=null;var h=nr,w=br;if(rn=0,io=nr=null,br=0,(bt&6)!==0)throw Error(o(331));var k=bt;if(bt|=4,Z0(h.current),$0(h,h.current,w,u),bt=k,ue(0,!1),xi&&typeof xi.onPostCommitFiberRoot=="function")try{xi.onPostCommitFiberRoot(il,h)}catch{}return!0}finally{Rn(f),Ze.T=a,fv(n,i)}}function dv(n,i,a){i=Ve(a,i),i=Vd(n.stateNode,i,2),n=ui(n,i,2),n!==null&&(M(n,2),de(n))}function Pt(n,i,a){if(n.tag===3)dv(n,n,a);else for(;i!==null;){if(i.tag===3){dv(i,n,a);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Ss===null||!Ss.has(u))){n=Ve(a,n),a=s0(2),u=ui(i,a,2),u!==null&&(o0(a,u,i,n),M(u,2),de(u));break}}i=i.return}}function Eh(n,i,a){var u=n.pingCache;if(u===null){u=n.pingCache=new lM;var f=new Set;u.set(i,f)}else f=u.get(i),f===void 0&&(f=new Set,u.set(i,f));f.has(a)||(up=!0,f.add(a),n=YS.bind(null,n,i,a),i.then(n,n))}function YS(n,i,a){var u=n.pingCache;u!==null&&u.delete(i),n.pingedLanes|=n.suspendedLanes&a,n.warmLanes&=~a,Gt===n&&(xt&a)===a&&((fn===4||fn===3&&(xt&62914560)===xt&&300>fi()-cc)&&(bt&2)===0?Lo(n,0):cp|=a,Ko===xt&&(Ko=0)),de(n)}function hv(n,i){i===0&&(i=L()),n=Ji(n,i),n!==null&&(M(n,i),de(n))}function jS(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),hv(n,a)}function ZS(n,i){var a=0;switch(n.tag){case 31:case 13:var u=n.stateNode,f=n.memoizedState;f!==null&&(a=f.retryLane);break;case 19:u=n.stateNode;break;case 22:u=n.stateNode._retryCache;break;default:throw Error(o(314))}u!==null&&u.delete(i),hv(n,a)}function JS(n,i){return qu(n,i)}function KS(n,i,a,u){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ah(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Dr(n,i){var a=n.alternate;return a===null?(a=t(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&1206910976,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a.refCleanup=n.refCleanup,a}function pv(n,i){n.flags&=1206910978;var a=n.alternate;return a===null?(n.childLanes=0,n.lanes=i,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=a.childLanes,n.lanes=a.lanes,n.child=a.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=a.memoizedProps,n.memoizedState=a.memoizedState,n.updateQueue=a.updateQueue,n.type=a.type,i=a.dependencies,n.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),n}function Uu(n,i,a,u,f,h){var w=0;if(u=n,typeof u=="function")Ah(u)&&(w=1);else if(typeof u=="string")w=Ui&&tn?Hv(n,a,Vn.current)?26:jv(n)?27:5:Ui?Hv(n,a,Vn.current)?26:5:tn&&jv(n)?27:5;else e:switch(u){case Uh:return n=t(31,a,i,f),n.elementType=Uh,n.lanes=h,n;case Fo:return qs(a.children,f,h,i);case Sv:w=8,f|=24;break;case Nh:return n=t(12,a,i,f|2),n.elementType=Nh,n.lanes=h,n;case Dh:return n=t(13,a,i,f),n.elementType=Dh,n.lanes=h,n;case kh:return n=t(19,a,i,f),n.elementType=kh,n.lanes=h,n;case nx:case Oh:return n=f|32,n=t(30,a,i,n),n.elementType=Oh,n.lanes=h,n.stateNode={autoName:null,paired:null,clones:null,ref:null},n;default:if(typeof u=="object"&&u!==null)switch(u.$$typeof){case kr:w=10;break e;case xv:w=9;break e;case Lh:w=11;break e;case Fh:w=14;break e;case hs:w=16,u=null;break e}w=29,a=Error(o(130,n===null?"null":typeof n,"")),u=null}return i=t(w,a,i,f),i.elementType=n,i.type=u,i.lanes=h,i}function qs(n,i,a,u){return n=t(7,n,u,i),n.lanes=a,n}function Ch(n,i,a){return n=t(6,n,null,i),n.lanes=a,n}function mv(n){var i=t(18,null,null,0);return i.stateNode=n,i}function Rh(n,i,a){return i=t(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function QS(n,i,a,u,f,h,w,k,K){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=$s,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=N(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=N(0),this.hiddenUpdates=N(null),this.identifierPrefix=u,this.onUncaughtError=f,this.onCaughtError=h,this.onRecoverableError=w,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=K,this.transitionTypes=null,this.incompleteTransitions=new Map}function gv(n,i,a,u,f,h,w,k,K,fe,ge,Ce){return n=new QS(n,i,a,w,K,fe,ge,Ce,k),i=1,h===!0&&(i|=24),h=t(3,null,null,i),n.current=h,h.stateNode=n,i=Xe(),i.refCount++,n.pooledCache=i,i.refCount++,h.memoizedState={element:u,isDehydrated:a,cache:i},as(h),n}function vv(n){return n?(n=Bo,n):Bo}function yv(n){var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(o(188)):(n=Object.keys(n).join(","),Error(o(268,n)));return n=d(i),n=n!==null?p(n):null,n===null?null:el(n.stateNode)}function _v(n,i,a,u,f,h){f=vv(f),u.context===null?u.context=f:u.pendingContext=f,u=Ki(i),u.payload={element:a},h=h===void 0?null:h,h!==null&&(u.callback=h),a=ui(n,u,i),a!==null&&(ci(a,n,i),Gs(a,n,i))}function bv(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Ph(n,i){bv(n,i),(n=n.alternate)&&bv(n,i)}var _t={},ex=cS.default,bi=Xn.default,Ih=Object.assign,tx=Symbol.for("react.element"),Ou=Symbol.for("react.transitional.element"),ko=Symbol.for("react.portal"),Fo=Symbol.for("react.fragment"),Sv=Symbol.for("react.strict_mode"),Nh=Symbol.for("react.profiler"),xv=Symbol.for("react.consumer"),kr=Symbol.for("react.context"),Lh=Symbol.for("react.forward_ref"),Dh=Symbol.for("react.suspense"),kh=Symbol.for("react.suspense_list"),Fh=Symbol.for("react.memo"),hs=Symbol.for("react.lazy"),Uh=Symbol.for("react.activity"),nx=Symbol.for("react.legacy_hidden"),ix=Symbol.for("react.memo_cache_sentinel"),Oh=Symbol.for("react.view_transition"),rx=Symbol.for("react.recoverable"),Mv=Symbol.iterator,wv=Symbol.for("react.optimistic_key"),sx=Symbol.for("react.client.reference"),zu=Array.isArray,Ze=ex.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ox=e.rendererVersion,ax=e.rendererPackageName,Tv=e.extraDevToolsConfig,el=e.getPublicInstance,lx=e.getRootHostContext,ux=e.getChildHostContext,cx=e.prepareForCommit,fx=e.resetAfterCommit,dx=e.createInstance;e.cloneMutableInstance;var zh=e.appendInitialChild,Ev=e.finalizeInitialChildren,Bu=e.shouldSetTextContent,Av=e.createTextInstance;e.cloneMutableTextInstance;var hx=e.scheduleTimeout,px=e.cancelTimeout,$s=e.noTimeout,hr=e.isPrimaryRenderer;e.warnsIfNotActing;var en=e.supportsMutation,pr=e.supportsPersistence,Hn=e.supportsHydration,mx=e.getInstanceFromNode;e.beforeActiveInstanceBlur;var gx=e.preparePortalMount;e.prepareScopeUpdate,e.getInstanceFromScope;var Rn=e.setCurrentUpdatePriority,Fr=e.getCurrentUpdatePriority,vx=e.resolveUpdatePriority;e.trackSchedulerEvent,e.resolveEventType,e.resolveEventTimeStamp;var yx=e.shouldAttemptEagerTransition,_x=e.detachDeletedInstance;e.requestPostPaintCallback;var bx=e.maySuspendCommit,Sx=e.maySuspendCommitOnUpdate,Bh=e.maySuspendCommitInSyncRender,Cv=e.preloadInstance,xx=e.startSuspendingCommit,Rv=e.suspendInstance,Mx=e.suspendOnActiveViewTransition,wx=e.waitForCommitToBeReady;e.getSuspendedCommitReason;var Uo=e.NotPendingTransition,Ur=e.HostTransitionContext,Tx=e.resetFormInstance;e.bindToConsole;var Ex=e.supportsMicrotasks,Ax=e.scheduleMicrotask,tl=e.supportsTestSelectors,Cx=e.findFiberRoot,Rx=e.getBoundingRect,Px=e.getTextContent,nl=e.isHiddenSubtree,Ix=e.matchAccessibilityRole,Nx=e.setFocusIfFocusable,Lx=e.setupIntersectionObserver,Dx=e.appendChild,kx=e.appendChildToContainer,Fx=e.commitTextUpdate,Ux=e.commitMount,Ox=e.commitUpdate,zx=e.insertBefore,Bx=e.insertInContainerBefore,Hx=e.removeChild,Vx=e.removeChildFromContainer,Pv=e.resetTextContent,Gx=e.hideInstance,Wx=e.hideTextInstance,Xx=e.unhideInstance,qx=e.unhideTextInstance,Iv=e.applyViewTransitionName,$x=e.restoreViewTransitionName,Yx=e.cancelViewTransitionName,jx=e.cancelRootViewTransitionName,Zx=e.restoreRootViewTransitionName;e.cloneRootViewTransitionContainer,e.removeRootViewTransitionClone;var Hh=e.measureInstance,Jx=e.measureClonedInstance,Hu=e.wasInstanceInViewport,Kx=e.hasInstanceChanged,Qx=e.hasInstanceAffectedParent,e1=e.startViewTransition;e.startGestureTransition;var t1=e.stopViewTransition,n1=e.addViewTransitionFinishedListener;e.getCurrentGestureOffset;var Nv=e.createViewTransitionInstance,i1=e.clearContainer,r1=e.createFragmentInstance,s1=e.updateFragmentInstanceFiber,Lv=e.commitNewChildToFragmentInstance,o1=e.deleteChildFromFragmentInstance,a1=e.cloneInstance,Dv=e.createContainerChildSet,kv=e.appendChildToContainerChildSet,l1=e.finalizeContainerChildren,Fv=e.replaceContainerChildren,Uv=e.cloneHiddenInstance,Ov=e.cloneHiddenTextInstance,Vh=e.isSuspenseInstancePending,Gh=e.isSuspenseInstanceFallback,u1=e.getSuspenseInstanceFallbackErrorDetails,c1=e.registerSuspenseInstanceRetry,f1=e.canHydrateFormStateMarker,d1=e.isFormStateMarkerMatching,zv=e.getNextHydratableSibling,h1=e.getNextHydratableSiblingAfterSingleton,p1=e.getFirstHydratableChild,m1=e.getFirstHydratableChildWithinContainer,g1=e.getFirstHydratableChildWithinActivityInstance,v1=e.getFirstHydratableChildWithinSuspenseInstance,y1=e.getFirstHydratableChildWithinSingleton,_1=e.canHydrateInstance,b1=e.canHydrateTextInstance,S1=e.canHydrateActivityInstance,x1=e.canHydrateSuspenseInstance,M1=e.hydrateInstance,w1=e.hydrateTextInstance,T1=e.hydrateActivityInstance,E1=e.hydrateSuspenseInstance,A1=e.getNextHydratableInstanceAfterActivityInstance,C1=e.getNextHydratableInstanceAfterSuspenseInstance,R1=e.commitHydratedInstance,P1=e.commitHydratedContainer,I1=e.commitHydratedActivityInstance,N1=e.commitHydratedSuspenseInstance,L1=e.finalizeHydratedChildren,D1=e.flushHydrationEvents;e.clearActivityBoundary;var k1=e.clearSuspenseBoundary;e.clearActivityBoundaryFromContainer;var F1=e.clearSuspenseBoundaryFromContainer,U1=e.hideDehydratedBoundary,O1=e.unhideDehydratedBoundary,Bv=e.shouldDeleteUnhydratedTailInstances;e.diffHydratedPropsForDevWarnings,e.diffHydratedTextForDevWarnings,e.describeHydratableInstanceForDevWarnings;var z1=e.validateHydratableInstance,B1=e.validateHydratableTextInstance,Ui=e.supportsResources,Hv=e.isHostHoistableType,Vu=e.getHoistableRoot,Vv=e.getResource,Gv=e.acquireResource,Wv=e.releaseResource,H1=e.hydrateHoistable,Wh=e.mountHoistable,Xh=e.unmountHoistable,Xv=e.createHoistableInstance,V1=e.prepareToCommitHoistables,G1=e.mayResourceSuspendCommit,qv=e.preloadResource,W1=e.suspendResource,tn=e.supportsSingletons,$v=e.resolveSingletonInstance,X1=e.acquireSingletonInstance,Yv=e.releaseSingletonInstance,jv=e.isHostSingletonType,Oo=e.isSingletonScope,qh=[],zo=-1,Bo={},Si=Math.clz32?Math.clz32:C,q1=Math.log,$1=Math.LN2,Gu=256,Wu=262144,Xu=4194304,qu=bi.unstable_scheduleCallback,$h=bi.unstable_cancelCallback,Y1=bi.unstable_shouldYield,j1=bi.unstable_requestPaint,fi=bi.unstable_now,Zv=bi.unstable_ImmediatePriority,Z1=bi.unstable_UserBlockingPriority,Yh=bi.unstable_NormalPriority,J1=bi.unstable_IdlePriority,K1=bi.log,Q1=bi.unstable_setDisableYieldValue,il=null,xi=null,eM=0,Mi=typeof Object.is=="function"?Object.is:me,Jv=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)},tM=Object.prototype.hasOwnProperty,jh,Kv,Zh=!1,Qv=new WeakMap,Ho=[],Vo=0,$u=null,rl=0,Oi=[],zi=0,ps=null,mr=1,gr="",Vn=_(null),sl=_(null),ms=_(null),Yu=_(null),Pn=null,jt=null,pt=!1,gs=null,Bi=!1,Jh=Error(o(519)),ju=_(null),Ys=null,Or=null,nM=typeof AbortController<"u"?AbortController:function(){var n=[],i=this.signal={aborted:!1,addEventListener:function(a,u){n.push(u)}};this.abort=function(){i.aborted=!0,n.forEach(function(a){return a()})}},iM=bi.unstable_scheduleCallback,rM=bi.unstable_NormalPriority,nn={$$typeof:kr,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0},ol=null,Go=null,Wo=null,Kh=!1,Zu=!1,Qh=!1,js=0,al=null,ep=0,Zs=0,Xo=null,ey=Ze.S;Ze.S=function(n,i){if(sy=fi(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&ie(n,i),ol!==null)for(var a=Go;a!==null;)I(a,ol),a=a.next;if(a=n.types,a!=null){for(var u=Go;u!==null;)I(u,a),u=u.next;if(Zs!==0){u=ol,u===null&&(u=ol=[]);for(var f=0;f<a.length;f++){var h=a[f];u.indexOf(h)===-1&&u.push(h)}}}ey!==null&&ey(n,i)};var Js=_(null),qo=Error(o(460)),tp=Error(o(474)),Ju=Error(o(542)),Ku={then:function(){}},Ks=null,$o=null,ll=0,Qs=gu(!0),ty=gu(!1),Hi=[],Yo=0,np=0,vs=!1,ip=!1,ys=_(null),Qu=_(0),Gn=_(null),ri=null,Wn=_(0),zr=0,at=null,zt=null,yn=null,ec=!1,jo=!1,eo=!1,tc=0,ul=0,Zo=null,sM=0,nc={readContext:ot,use:Nr,useCallback:Fe,useContext:Fe,useEffect:Fe,useImperativeHandle:Fe,useLayoutEffect:Fe,useInsertionEffect:Fe,useMemo:Fe,useReducer:Fe,useRef:Fe,useState:Fe,useDebugValue:Fe,useDeferredValue:Fe,useTransition:Fe,useSyncExternalStore:Fe,useId:Fe,useHostTransitionStatus:Fe,useFormState:Fe,useActionState:Fe,useOptimistic:Fe,useMemoCache:Fe,useCacheRefresh:Fe,useEffectEvent:Fe},ny={readContext:ot,use:Nr,useCallback:function(n,i){return Lt().memoizedState=[n,i===void 0?null:i],n},useContext:ot,useEffect:Bg,useImperativeHandle:function(n,i,a){a=a!=null?a.concat([n]):null,_u(4194308,4,Wg.bind(null,i,n),a)},useLayoutEffect:function(n,i){return _u(4194308,4,n,i)},useInsertionEffect:function(n,i){_u(4,2,n,i)},useMemo:function(n,i){var a=Lt();i=i===void 0?null:i;var u=n();if(eo){O(!0);try{n()}finally{O(!1)}}return a.memoizedState=[u,i],u},useReducer:function(n,i,a){var u=Lt();if(a!==void 0){var f=a(i);if(eo){O(!0);try{a(i)}finally{O(!1)}}}else f=i;return u.memoizedState=u.baseState=f,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:f},u.queue=n,n=n.dispatch=NS.bind(null,at,n),[u.memoizedState,n]},useRef:function(n){var i=Lt();return n={current:n},i.memoizedState=n},useState:function(n){n=Dd(n);var i=n.queue,a=Qg.bind(null,at,i);return i.dispatch=a,[n.memoizedState,a]},useDebugValue:Ud,useDeferredValue:function(n,i){var a=Lt();return Od(a,n,i)},useTransition:function(){var n=Dd(!1);return n=jg.bind(null,at,n.queue,!0,!1),Lt().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,i,a){var u=at,f=Lt();if(pt){if(a===void 0)throw Error(o(407));a=a()}else{if(a=i(),Gt===null)throw Error(o(349));(xt&127)!==0||pn(u,i,a)}f.memoizedState=a;var h={value:a,getSnapshot:i};return f.queue=h,Bg(Wa.bind(null,u,h,n),[n]),u.flags|=2048,Ao(9,{destroy:void 0},ki.bind(null,u,h,a,i),null),a},useId:function(){var n=Lt(),i=Gt.identifierPrefix;if(pt){var a=gr,u=mr;a=(u&~(1<<32-Si(u)-1)).toString(32)+a,i="_"+i+"R_"+a,a=tc++,0<a&&(i+="H"+a.toString(32)),i+="_"}else a=sM++,i="_"+i+"r_"+a.toString(32)+"_";return n.memoizedState=i},useHostTransitionStatus:zd,useFormState:kg,useActionState:kg,useOptimistic:function(n){var i=Lt();i.memoizedState=i.baseState=n;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=Bd.bind(null,at,!0,a),a.dispatch=i,[n,i]},useMemoCache:Di,useCacheRefresh:function(){return Lt().memoizedState=IS.bind(null,at)},useEffectEvent:function(n){var i=Lt(),a={impl:n};return i.memoizedState=a,function(){if((bt&2)!==0)throw Error(o(440));return a.impl.apply(void 0,arguments)}}},iy={readContext:ot,use:Nr,useCallback:qg,useContext:ot,useEffect:Fd,useImperativeHandle:Xg,useInsertionEffect:Vg,useLayoutEffect:Gg,useMemo:$g,useReducer:mt,useRef:zg,useState:function(){return mt(On)},useDebugValue:Ud,useDeferredValue:function(n,i){var a=$e();return Yg(a,zt.memoizedState,n,i)},useTransition:function(){var n=mt(On)[0],i=$e().memoizedState;return[typeof n=="boolean"?n:cn(n),i]},useSyncExternalStore:Xt,useId:Jg,useHostTransitionStatus:zd,useFormState:Fg,useActionState:Fg,useOptimistic:function(n,i){var a=$e();return Rg(a,zt,n,i)},useMemoCache:Di,useCacheRefresh:Kg,useEffectEvent:Hg},oM={readContext:ot,use:Nr,useCallback:qg,useContext:ot,useEffect:Fd,useImperativeHandle:Xg,useInsertionEffect:Vg,useLayoutEffect:Gg,useMemo:$g,useReducer:ii,useRef:zg,useState:function(){return ii(On)},useDebugValue:Ud,useDeferredValue:function(n,i){var a=$e();return zt===null?Od(a,n,i):Yg(a,zt.memoizedState,n,i)},useTransition:function(){var n=ii(On)[0],i=$e().memoizedState;return[typeof n=="boolean"?n:cn(n),i]},useSyncExternalStore:Xt,useId:Jg,useHostTransitionStatus:zd,useFormState:Og,useActionState:Og,useOptimistic:function(n,i){var a=$e();return zt!==null?Rg(a,zt,n,i):(a.baseState=n,[n,a.queue.dispatch])},useMemoCache:Di,useCacheRefresh:Kg,useEffectEvent:Hg},rp={enqueueSetState:function(n,i,a){n=n._reactInternals;var u=_i(),f=Ki(u);f.payload=i,a!=null&&(f.callback=a),i=ui(n,f,u),i!==null&&(ci(i,n,u),Gs(i,n,u))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var u=_i(),f=Ki(u);f.tag=1,f.payload=i,a!=null&&(f.callback=a),i=ui(n,f,u),i!==null&&(ci(i,n,u),Gs(i,n,u))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=_i(),u=Ki(a);u.tag=2,i!=null&&(u.callback=i),i=ui(n,u,a),i!==null&&(ci(i,n,a),Gs(i,n,a))}},sp=Error(o(461)),_n=!1,op={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null},Zn=!1,ic=!1,wi=null,vr=null,di=0,In=!1,Dt=!1,yr=!1,ap=!1,ry=typeof WeakSet=="function"?WeakSet:Set,Nn=null,_r=!1,cl=!1,rc=!1,lp=!1,bn=null,hi=!1,tr=null,to=8192,aM={getCacheForType:function(n){var i=ot(nn),a=i.data.get(n);return a===void 0&&(a=n(),i.data.set(n,a)),a},cacheSignal:function(){return ot(nn).controller.signal}},sc=0,oc=1,ac=2,lc=3,uc=4;if(typeof Symbol=="function"&&Symbol.for){var fl=Symbol.for;sc=fl("selector.component"),oc=fl("selector.has_pseudo_class"),ac=fl("selector.role"),lc=fl("selector.test_id"),uc=fl("selector.text")}var lM=typeof WeakMap=="function"?WeakMap:Map,bt=0,Gt=null,St=null,xt=0,Ft=0,Ti=null,_s=!1,Jo=!1,up=!1,Br=0,fn=0,bs=0,no=0,cp=0,Ei=0,Ko=0,dl=null,pi=null,fp=!1,cc=0,sy=0,hl=1/0,fc=null,Ss=null,rn=0,nr=null,io=null,br=0,dp=0,hp=null,oy=null,Qo=null,ea=null,ta=null,pl=0,dc=null;return _t.attemptContinuousHydration=function(n){if(n.tag===13||n.tag===31){var i=Ji(n,67108864);i!==null&&ci(i,n,67108864),Ph(n,67108864)}},_t.attemptHydrationAtCurrentPriority=function(n){if(n.tag===13||n.tag===31){var i=_i();i=W(i);var a=Ji(n,i);a!==null&&ci(a,n,i),Ph(n,i)}},_t.attemptSynchronousHydration=function(n){switch(n.tag){case 3:if(n=n.stateNode,n.current.memoizedState.isDehydrated){var i=S(n.pendingLanes);if(i!==0){for(n.pendingLanes|=2,n.entangledLanes|=2;i;){var a=1<<31-Si(i);n.entanglements[1]|=a,i&=~a}de(n),(bt&6)===0&&(hl=fi()+500,ue(0,!1))}}break;case 31:case 13:i=Ji(n,2),i!==null&&ci(i,n,2),nv(),Ph(n,2)}},_t.batchedUpdates=function(n,i){return n(i)},_t.createComponentSelector=function(n){return{$$typeof:sc,value:n}},_t.createContainer=function(n,i,a,u,f,h,w,k,K,fe){return gv(n,i,!1,null,a,u,h,null,w,k,K,fe)},_t.createHasPseudoClassSelector=function(n){return{$$typeof:oc,value:n}},_t.createHydrationContainer=function(n,i,a,u,f,h,w,k,K,fe,ge,Ce,De,gt){var At;return n=gv(a,u,!0,n,f,h,k,gt,K,fe,ge,Ce),n.context=vv(null),a=n.current,u=_i(),u=W(u),f=Ki(u),f.callback=(At=i)!=null?At:null,ui(a,f,u),i=u,n.current.lanes=i,M(n,i),de(n),n},_t.createPortal=function(n,i,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ko,key:u==null?null:u===wv?wv:""+u,children:n,containerInfo:i,implementation:a}},_t.createRoleSelector=function(n){return{$$typeof:ac,value:n}},_t.createTestNameSelector=function(n){return{$$typeof:lc,value:n}},_t.createTextSelector=function(n){return{$$typeof:uc,value:n}},_t.defaultOnCaughtError=function(n){console.error(n)},_t.defaultOnRecoverableError=function(n){Jv(n)},_t.defaultOnUncaughtError=function(n){Jv(n)},_t.deferredUpdates=function(n){var i=Ze.T,a=Fr();try{return Rn(32),Ze.T=null,n()}finally{Rn(a),Ze.T=i}},_t.discreteUpdates=function(n,i,a,u,f){var h=Ze.T,w=Fr();try{return Rn(2),Ze.T=null,n(i,a,u,f)}finally{Rn(w),Ze.T=h,bt===0&&(hl=fi()+500)}},_t.findAllNodes=_h,_t.findBoundingRects=function(n,i){if(!tl)throw Error(o(363));i=_h(n,i),n=[];for(var a=0;a<i.length;a++)n.push(Rx(i[a]));for(i=n.length-1;0<i;i--){a=n[i];for(var u=a.x,f=u+a.width,h=a.y,w=h+a.height,k=i-1;0<=k;k--)if(i!==k){var K=n[k],fe=K.x,ge=fe+K.width,Ce=K.y,De=Ce+K.height;if(u>=fe&&h>=Ce&&f<=ge&&w<=De){n.splice(i,1);break}else if(u!==fe||a.width!==K.width||De<h||Ce>w){if(!(h!==Ce||a.height!==K.height||ge<u||fe>f)){fe>u&&(K.width+=fe-u,K.x=u),ge<f&&(K.width=f-fe),n.splice(i,1);break}}else{Ce>h&&(K.height+=Ce-h,K.y=h),De<w&&(K.height=w-Ce),n.splice(i,1);break}}}return n},_t.findHostInstance=yv,_t.findHostInstanceWithNoPortals=function(n){return n=d(n),n=n!==null?m(n):null,n===null?null:el(n.stateNode)},_t.findHostInstanceWithWarning=function(n){return yv(n)},_t.flushPassiveEffects=Qa,_t.flushSyncFromReconciler=function(n){var i=bt;bt|=1;var a=Ze.T,u=Fr();try{if(Rn(2),Ze.T=null,n)return n()}finally{Rn(u),Ze.T=a,bt=i,(bt&6)===0&&ue(0,!1)}},_t.flushSyncWork=nv,_t.focusWithin=function(n,i){if(!tl)throw Error(o(363));for(n=gh(n),i=K0(n,i),i=Array.from(i),n=0;n<i.length;){var a=i[n++],u=a.tag;if(!nl(a)){if((u===5||u===26||u===27)&&Nx(a.stateNode))return!0;for(a=a.child;a!==null;)i.push(a),a=a.sibling}}return!1},_t.getFindAllNodesFailureDescription=function(n,i){if(!tl)throw Error(o(363));var a=0,u=[];n=[gh(n),0];for(var f=0;f<n.length;){var h=n[f++],w=h.tag,k=n[f++],K=i[k];if((w!==5&&w!==26&&w!==27||!nl(h))&&(vh(h,K)&&(u.push(yh(K)),k++,k>a&&(a=k)),k<i.length))for(h=h.child;h!==null;)n.push(h,k),h=h.sibling}if(a<i.length){for(n=[];a<i.length;a++)n.push(yh(i[a]));return`findAllNodes was able to match part of the selector:
  `+(u.join(" > ")+`

No matching component was found for:
  `)+n.join(" > ")}return null},_t.getPublicRootInstance=function(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 27:case 5:return el(n.child.stateNode);default:return n.child.stateNode}},_t.injectIntoDevTools=function(){var n={bundleType:0,version:ox,rendererPackageName:ax,currentDispatcherRef:Ze,reconcilerVersion:"19.3.0"};if(Tv!==null&&(n.rendererConfig=Tv),typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u")n=!1;else{var i=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(i.isDisabled||!i.supportsFiber)n=!0;else{try{il=i.inject(n),xi=i}catch{}n=!!i.checkDCE}}return n},_t.isAlreadyRendering=function(){return(bt&6)!==0},_t.observeVisibleRects=function(n,i,a,u){if(!tl)throw Error(o(363));n=_h(n,i);var f=Lx(n,a,u).disconnect;return{disconnect:function(){f()}}},_t.shouldError=function(){return null},_t.shouldSuspend=function(){return!1},_t.startHostTransition=function(n,i,a,u){if(n.tag!==5)throw Error(o(476));var f=Zg(n).queue;jg(n,f,i,Uo,a===null?s:function(){var h=Zg(n);return h.next===null&&(h=n.alternate.memoizedState),Xa(n,h.next.queue,{},_i()),a(u)})},_t.updateContainer=function(n,i,a,u){var f=i.current,h=_i();return _v(f,h,n,i,a,u),h},_t.updateContainerSync=function(n,i,a,u){return _v(i.current,2,n,i,a,u),2},_t},r.exports.default=r.exports,Object.defineProperty(r.exports,"__esModule",{value:!0})})(lg)),lg.exports}var i2={exports:{}};i2.exports;var oS;function r2(){return oS||(oS=1,rS.exports=n2()),rS.exports}var s2=r2(),o2=t2(s2),Cd={},a2=0,Nd=r=>`${r[0].toUpperCase()}${r.slice(1)}`;function l2(r){return r in Cd}function bg(r){return Cd[r]}function Sg(r){if(typeof r=="function"){let e=`${a2++}`;return Cd[e]=r,e}else Object.assign(Cd,r)}function u2(r){let e=o2(r);return e.injectIntoDevTools(),e}var gS=0,c2=/^three(?=[A-Z])/;function vS(r,e){let t=Nd(r),s=bg(t);if(r!=="primitive"&&!s)throw new Error(`R3F: ${t} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);if(r==="primitive"&&!e.object)throw new Error("R3F: Primitives without 'object' are invalid!");if(e.args!==void 0&&!Array.isArray(e.args))throw new Error("R3F: The args prop must be an array!")}function f2(r,e,t){var s;return r=l2(Nd(r))?r:r.replace(c2,""),vS(r,e),r==="primitive"&&(s=e.object)!=null&&s.__r3f&&delete e.object.__r3f,Td(e.object,t,r,e)}function d2(r){if(!r.isHidden){var e;r.props.attach&&(e=r.parent)!=null&&e.object?Ad(r.parent,r):li(r.object)&&(r.previousVisible=r.object.visible,r.object.visible=!1),r.isHidden=!0,hu(r)}}function yS(r){if(r.isHidden){var e;if(r.props.attach&&(e=r.parent)!=null&&e.object)Ed(r.parent,r);else if(li(r.object)){var t;r.object.visible=(t=r.previousVisible)!=null?t:!0}r.previousVisible=void 0,r.isHidden=!1,hu(r)}}function xg(r,e,t){let s=e.root.getState();if(!(!r.parent&&r.object!==s.scene)){if(!e.object){var o,l;let c=bg(Nd(e.type));e.object=(o=e.props.object)!=null?o:new c(...(l=e.props.args)!=null?l:[]),e.object.__r3f=e}if(Os(e.object,e.props),e.props.attach)Ed(r,e);else if(li(e.object)&&li(r.object)){let c=r.object.children.indexOf(t?.object);if(t&&c!==-1){let d=r.object.children.indexOf(e.object);if(d!==-1){r.object.children.splice(d,1);let p=d<c?c-1:c;r.object.children.splice(p,0,e.object)}else e.object.parent=r.object,r.object.children.splice(c,0,e.object),e.object.dispatchEvent({type:"added"}),r.object.dispatchEvent({type:"childadded",child:e.object})}else r.object.add(e.object)}for(let c of e.children)xg(e,c);hu(e)}}function eg(r,e){if(e){if(e.parent===r){let t=r.children.indexOf(e);t!==-1&&r.children.splice(t,1)}e.parent=r,r.children.push(e),xg(r,e)}}function aS(r,e,t){if(!e||!t)return;if(e.parent===r){let o=r.children.indexOf(e);o!==-1&&r.children.splice(o,1)}e.parent=r;let s=r.children.indexOf(t);s!==-1?r.children.splice(s,0,e):r.children.push(e),xg(r,e,t)}function _S(r){if(typeof r.dispose=="function"){let e=()=>{try{r.dispose()}catch{}};typeof IS_REACT_ACT_ENVIRONMENT<"u"?e():(0,Xn.unstable_scheduleCallback)(Xn.unstable_IdlePriority,e)}}function ug(r,e,t){if(!e)return;let s=!!e.parent;e.parent=null;let o=r.children.indexOf(e);o!==-1&&r.children.splice(o,1),e.props.attach?Ad(r,e):li(e.object)&&li(r.object)&&(r.object.remove(e.object),zR(hg(e),e.object));let l=e.props.dispose!==null&&t!==!1;for(let d=e.children.length-1;d>=0;d--){let p=e.children[d];ug(e,p,l)}if(e.children.length=0,delete e.object.__r3f,l&&e.type!=="primitive"&&e.object.type!=="Scene"&&_S(e.object),t===void 0&&s){var c;let d=(c=e.root)==null||c.getState==null?void 0:c.getState();d&&d.internal.frames===0&&d.invalidate()}}function h2(r,e){for(let t of[r,r.alternate])if(t!==null)if(typeof t.ref=="function"){t.refCleanup==null||t.refCleanup();let s=t.ref(e);typeof s=="function"&&(t.refCleanup=s)}else t.ref&&(t.ref.current=e)}var du=[];function p2(){if(du.length!==0)try{m2()}finally{du.length=0}}function m2(){for(let[t]of du){let s=t.parent;if(s){t.props.attach?Ad(s,t):li(t.object)&&li(s.object)&&s.object.remove(t.object);for(let o of t.children)o.props.attach?Ad(t,o):li(o.object)&&li(t.object)&&t.object.remove(o.object)}t.isHidden&&yS(t),t.object.__r3f&&delete t.object.__r3f,t.type!=="primitive"&&_S(t.object)}for(let[t,s,o]of du){t.props=s;let l=t.parent;if(l){var r,e;let c=bg(Nd(t.type)),d=t.object;t.object=(r=t.props.object)!=null?r:new c(...(e=t.props.args)!=null?e:[]),t.object.__r3f=t,h2(o,t.object),OR(hg(t),d,t.object),Os(t.object,t.props),t.props.attach?Ed(l,t):li(t.object)&&li(l.object)&&l.object.add(t.object);for(let p of t.children)p.props.attach?Ed(t,p):li(p.object)&&li(t.object)&&t.object.add(p.object);hu(t)}}}var tg=()=>{},lS={},Md=gS;function g2(r){switch(r){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return iS;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return nS;case"message":switch((0,Xn.unstable_getCurrentPriorityLevel)()){case Xn.unstable_ImmediatePriority:return iS;case Xn.unstable_UserBlockingPriority:return nS;case Xn.unstable_NormalPriority:case Xn.unstable_LowPriority:return wd;case Xn.unstable_IdlePriority:return jR;default:return wd}default:return wd}}function v2(r){typeof queueMicrotask=="function"?queueMicrotask(r):typeof Promise<"u"?Promise.resolve().then(r).catch(e=>{setTimeout(()=>{throw e})}):setTimeout(r)}var Mo=u2({isPrimaryRenderer:!1,warnsIfNotActing:!1,supportsMutation:!0,supportsPersistence:!1,supportsHydration:!1,createInstance:f2,removeChild:ug,appendChild:eg,appendInitialChild:eg,insertBefore:aS,appendChildToContainer(r,e){let t=r.getState().scene.__r3f;!e||!t||eg(t,e)},removeChildFromContainer(r,e){let t=r.getState().scene.__r3f;!e||!t||ug(t,e)},insertInContainerBefore(r,e,t){let s=r.getState().scene.__r3f;!e||!t||!s||aS(s,e,t)},getRootHostContext:()=>lS,getChildHostContext:()=>lS,commitUpdate(r,e,t,s,o){var l,c,d;vS(e,s);let p=!1;if((r.type==="primitive"&&t.object!==s.object||((l=s.args)==null?void 0:l.length)!==((c=t.args)==null?void 0:c.length)||(d=s.args)!=null&&d.some((m,v)=>{var y;return m!==((y=t.args)==null?void 0:y[v])}))&&(p=!0),p)du.push([r,og(s),o]);else{let m=NR(r,s),v=r.props.attach;r.props=og(s),v!==void 0?r.props.attach=v:delete r.props.attach,Object.keys(m).length&&Os(r.object,m)}},finalizeInitialChildren:()=>!1,commitMount(){},getPublicInstance:r=>r?.object,prepareForCommit:()=>null,preparePortalMount:r=>Td(r.getState().scene,r,"",{}),resetAfterCommit:p2,shouldSetTextContent:()=>!1,clearContainer:()=>!1,hideInstance:d2,unhideInstance:yS,createTextInstance:tg,hideTextInstance:tg,unhideTextInstance:tg,supportsMicrotasks:!0,scheduleMicrotask:v2,scheduleTimeout:typeof setTimeout=="function"?setTimeout:void 0,cancelTimeout:typeof clearTimeout=="function"?clearTimeout:void 0,noTimeout:-1,getInstanceFromNode:()=>null,beforeActiveInstanceBlur(){},afterActiveInstanceBlur(){},detachDeletedInstance(){},prepareScopeUpdate(){},getInstanceFromScope:()=>null,shouldAttemptEagerTransition:()=>!1,trackSchedulerEvent:()=>{},resolveEventType:()=>null,resolveEventTimeStamp:()=>-1.1,requestPostPaintCallback(){},maySuspendCommit:()=>!1,preloadInstance:()=>!0,suspendInstance(){},waitForCommitToBeReady:()=>null,NotPendingTransition:null,HostTransitionContext:Kt.createContext(null),setCurrentUpdatePriority(r){Md=r},getCurrentUpdatePriority(){return Md},resolveUpdatePriority(){var r;if(Md!==gS)return Md;let e=typeof window<"u"?(r=window.event)==null?void 0:r.type:void 0;return e===void 0?wd:g2(e)},resetFormInstance(){},rendererPackageName:"@react-three/fiber",rendererVersion:e2.version,applyViewTransitionName(r,e,t){},restoreViewTransitionName(r,e){},cancelViewTransitionName(r,e,t){},cancelRootViewTransitionName(r){},restoreRootViewTransitionName(r){},InstanceMeasurement:null,measureInstance:r=>null,wasInstanceInViewport:r=>!0,hasInstanceChanged:(r,e)=>!1,hasInstanceAffectedParent:(r,e)=>!1,suspendOnActiveViewTransition(r,e){},startViewTransition(r,e,t,s,o,l,c,d,p,m,v){return s(),o(),v?.(),c(),null},startGestureTransition(r,e,t,s,o,l,c,d,p,m){return c(),d(),m?.(),null},stopViewTransition(r){},addViewTransitionFinishedListener(r,e){e()},createViewTransitionInstance:r=>null,getCurrentGestureOffset(r){throw new Error("startGestureTransition is not yet supported in react-three-fiber.")},cloneMutableInstance(r,e){return r},cloneMutableTextInstance(r){return r},cloneRootViewTransitionContainer(r){throw new Error("Not implemented.")},removeRootViewTransitionClone(r,e){throw new Error("Not implemented.")},createFragmentInstance:r=>null,updateFragmentInstanceFiber(r,e){},commitNewChildToFragmentInstance(r,e){},deleteChildFromFragmentInstance(r,e){},measureClonedInstance:r=>null,maySuspendCommitOnUpdate:(r,e,t)=>!1,maySuspendCommitInSyncRender:(r,e)=>!1,startSuspendingCommit:()=>null,getSuspendedCommitReason:(r,e)=>null});var ss=new Map;function Rd(r,e){let t=r.state;switch(e.type){case"use":return t.status==="disposed"?!1:(r.state={status:"open"},!0);case"unmount":return t.status==="disposed"?!1:(r.state={status:"closing",token:e.token},!0);case"dispose":return t.status!=="closing"||t.token!==e.token?!1:(r.state={status:"disposed"},!0)}}function Mg(r){let e=ss.get(r),t=e?.fiber,s=e?.store;e&&console.warn("R3F.createRoot should only be called once!");let o=typeof reportError=="function"?reportError:console.error,l=s||qR(Cn,wg),c=t||Mo.createContainer(l,YR,null,!1,null,"",o,o,o,null),d=e||{fiber:c,store:l,state:{status:"open"},ready:BR(void 0),configuration:{},ownsRenderer:!1};e||ss.set(r,d);let p=!1;return{get ready(){return d.ready},configure(m={}){if(!Rd(d,{type:"use"}))return HR(new Error("R3F: Cannot configure a root after disposal has started."));let v=d.ready,{promise:y,resolve:_,reject:b}=VR();d.ready=y;let x=S=>{let g=l.getState();g.gl||(d.ownsRenderer=!gg(m.gl),g.set({gl:S})),KR(d,r,m),!d.unwatchDpr&&(m.dpr===void 0||Array.isArray(m.dpr))&&(d.unwatchDpr=QR(d)),_(this)},C=()=>{try{var S;let g=(S=l.getState().gl)!=null?S:GR(r,m.gl);mg(g)?Promise.resolve(g).then(x).catch(b):x(g)}catch(g){b(g)}};return v.status==="pending"?v.then(C,b):C(),y},render(m){if(!Rd(d,{type:"use"}))return l;if(!l.getState().gl&&d.ready.status==="fulfilled"&&this.configure(),d.ready.status==="rejected")throw d.ready.reason;let v=()=>{var y;if(d.state.status!=="open"||d.ready.status==="rejected")return;if(d.ready.status==="pending"){d.ready.then(v,o);return}let _=(y=d.configuration.previous)==null?void 0:y.onCreated,b=(0,Id.jsx)(y2,{store:l,children:m,onCreated:_,rootElement:r});if(p){Mo.updateContainer(b,c,null,Kb);return}p=!0,Mo.updateContainerSync(b,c,null,Kb),Mo.flushSyncWork()};return v(),l},unmount(){ss.get(r)===d&&bS(r)}}}function y2({store:r,children:e,onCreated:t,rootElement:s}){return dg(()=>{let o=r.getState();o.set(l=>({internal:{...l.internal,active:!0}})),t&&t(o),r.getState().events.connected||o.events.connect==null||o.events.connect(s)},[]),(0,Id.jsx)(vg.Provider,{value:r,children:e})}function uu(r){try{return r()}catch(e){console.warn("[R3F] Error while unmounting root; teardown may be incomplete:",e)}}function bS(r,e){let t=ss.get(r),s=Symbol("unmount");if(!t||!Rd(t,{type:"unmount",token:s}))return;let o=()=>{var l;if(t.ready.status==="pending"){t.ready.then(o,o);return}if(!Rd(t,{type:"dispose",token:s}))return;ss.delete(r);let c=t.store.getState();c.internal.active=!1,uu(()=>t.unwatchDpr==null?void 0:t.unwatchDpr()),uu(()=>c.events.disconnect==null?void 0:c.events.disconnect()),(l=c.gl)!=null&&l.xr&&uu(()=>c.xr.disconnect()),c.scene&&uu(()=>hS(c.scene));let d=uu(()=>XR(c.gl,t.ownsRenderer));mg(d)?d.then(()=>e?.(r)):e?.(r)};Mo.updateContainer(null,t.fiber,null,()=>{t.state.status!=="closing"||t.state.token!==s||Mo.updateContainer(null,t.fiber,null,o)})}var _2=new Set,b2=new Set,S2=new Set;function ng(r,e){if(r.size)for(let{callback:t}of r.values())t(e)}function Ba(r,e){switch(r){case"before":return ng(_2,e);case"after":return ng(b2,e);case"tail":return ng(S2,e)}}var ig,rg;function cg(r,e,t){let s=e.clock.getDelta();e.frameloop==="never"&&typeof r=="number"&&(s=r-e.clock.elapsedTime,e.clock.oldTime=e.clock.elapsedTime,e.clock.elapsedTime=r),ig=e.internal.subscribers;for(let o=0;o<ig.length;o++)rg=ig[o],rg.ref.current(rg.store.getState(),s,t);return!e.internal.priority&&e.gl.render&&e.gl.render(e.scene,e.camera),e.internal.frames=Math.max(0,e.internal.frames-1),e.frameloop==="always"?1:e.internal.frames}var Pd=!1,fg=!1,sg,uS,za;function SS(r){uS=requestAnimationFrame(SS),Pd=!0,sg=0,Ba("before",r),fg=!0;for(let t of ss.values()){var e;za=t.store.getState(),za.internal.active&&(za.frameloop==="always"||za.internal.frames>0)&&!((e=za.gl.xr)!=null&&e.isPresenting)&&(sg+=cg(r,za))}if(fg=!1,Ba("after",r),sg===0)return Ba("tail",r),Pd=!1,cancelAnimationFrame(uS)}function Cn(r,e=1){var t;if(!r)return ss.forEach(s=>Cn(s.store.getState(),e));(t=r.gl.xr)!=null&&t.isPresenting||!r.internal.active||r.frameloop==="never"||(e>1?r.internal.frames=Math.min(60,r.internal.frames+e):fg?r.internal.frames=2:r.internal.frames=1,Pd||(Pd=!0,requestAnimationFrame(SS)))}function wg(r,e=!0,t,s){if(e&&Ba("before",r),t)cg(r,t,s);else for(let o of ss.values())cg(r,o.store.getState());e&&Ba("after",r)}var zs=Vi(ws());var xS=Vi(su());var kN=Vi(Qm());var qn=Vi(ws());var wn=(r,e,t)=>new Ar(r,e,t),pu=(r,e,t=18)=>new fo(r,r,e,t),lt={rail:wn(28,2,2),railZ:wn(2,2,24),cross:wn(2,1.5,24),bellypan:wn(24,.25,24),footprint:wn(34,.05,34),wheel:pu(2,1.6,20),module:wn(5,3,5),motor:pu(1.05,3.6,16),tower:wn(2,40,2),inner:wn(1.4,30,1.4),topbar:wn(16,1.6,1.6),chain:wn(.3,36,.3),gearbox:pu(1.4,4,16),carriage:wn(14,3,2),roller:pu(1.1,22,16),arm:wn(2,1.5,9),sideplate:wn(.5,6,9),board:wn(18,.3,13),rio:wn(5,1.2,4),pdh:wn(6,1.4,5),battery:wn(7,6,3),radio:wn(4,1,2.6),breaker:pu(.8,1.2,14),bumperX:wn(34,5,3),bumperZ:wn(3,5,28),plate:new ho(14,3.2)},Tg=new Map,Eg=r=>(Tg.has(r)||Tg.set(r,new Ul(r,20)),Tg.get(r)),mu=Math.PI/2,MS=[{at:.16,drop:8,items:[[lt.rail,[0,3,13]],[lt.rail,[0,3,-13]],[lt.railZ,[13,3,0]],[lt.railZ,[-13,3,0]],[lt.cross,[-4,2.75,0]],[lt.cross,[4,2.75,0]],[lt.bellypan,[0,2.1,0],null,"dark"]]},{at:.33,drop:10,items:[13,-13].flatMap(r=>[13,-13].flatMap(e=>{let t=r*.86,s=e*.86;return[[lt.module,[t,4.5,s]],[lt.wheel,[t,2,s],[0,0,mu],"dark"],[lt.motor,[t-1.2,7.6,s],null,"dark"],[lt.motor,[t+1.3,7.6,s+.4],null,"dark"]]}))},{at:.5,drop:14,items:[[lt.tower,[-7,22,-6]],[lt.tower,[7,22,-6]],[lt.inner,[-5.4,26,-6]],[lt.inner,[5.4,26,-6]],[lt.topbar,[0,41.3,-6]],[lt.chain,[-7,22,-4.8],null,"dark"],[lt.chain,[7,22,-4.8],null,"dark"],[lt.gearbox,[0,5.6,-8],[0,0,mu],"dark"],[lt.carriage,[0,30,-4.5]],[lt.arm,[-6,30,.5]],[lt.arm,[6,30,.5]],[lt.roller,[0,30,5],[0,0,mu],"dark"],[lt.roller,[0,4.5,15.5],[0,0,mu],"dark"],[lt.roller,[0,8,14],[0,0,mu],"dark"],[lt.sideplate,[-11.3,6,13]],[lt.sideplate,[11.3,6,13]]]},{at:.66,drop:8,items:[[lt.board,[0,4.4,2]],[lt.rio,[-4,5.2,3]],[lt.pdh,[4.5,5.2,1]],[lt.radio,[4.5,5.1,6]],[lt.breaker,[-6.5,5.2,-1.5],null,"dark"],[lt.battery,[0,6.5,9],null,"dark"]]},{at:.82,drop:8,items:[[lt.bumperX,[0,3.5,16.5],null,"bumper"],[lt.bumperX,[0,3.5,-16.5],null,"bumper"],[lt.bumperZ,[16.5,3.5,0],null,"bumper"],[lt.bumperZ,[-16.5,3.5,0],null,"bumper"]],plates:!0}];function wS(){let r=document.createElement("canvas");r.width=512,r.height=118;let e=r.getContext("2d");e.fillStyle="#ffffff",e.textAlign="center",e.textBaseline="middle",e.font='italic 900 104px Saira, "Arial Narrow", sans-serif',e.fillText("11745",256,64);let t=new Dl(r);return t.colorSpace=Mn,t.anisotropy=4,t}var wt=Vi(su());Sg({Group:$r,Mesh:mi,LineSegments:Nl,InstancedMesh:Il,AmbientLight:Wl,DirectionalLight:Gl});var Ld=r=>r<0?0:r>1?1:r,TS=r=>r>=1?1:1-Math.pow(2,-10*r),x2=r=>1-Math.pow(1-r,3),M2=r=>({reduce:r,t0:performance.now(),drag:!1,vx:0,rotY:0,px:9,py:9,onScreen:!0});function ES(r,e,t){return r.drag||(r.vx*=Math.exp(-e*3.2),r.rotY+=r.vx*e+(r.reduce?0:t*e)),r.drag||Math.abs(r.vx)>.002||!r.reduce&&t!==0}var w2={paper:{frame:"#ffffff",dark:"#dedad2",bumper:"#5E2A84",line:"#15121b",lineOp:.9,plate:!0,amb:1.1,key:1.6,fill:"#ffffff"},night:{frame:"#1b1820",dark:"#0e0d11",bumper:"#5E2A84",line:"#efece6",lineOp:.42,plate:!0,amb:.55,key:2.4,fill:"#8B3DFF"},clay:{frame:"#f3efe7",dark:"#d8d1c3",bumper:"#E9B949",line:"#2a1640",lineOp:.35,plate:!0,amb:.9,key:2,fill:"#ffffff"}},T2=new X(0,21,0),E2=new X(70,40,78).normalize(),A2=31;function AS({center:r=T2,view:e=E2,radius:t=A2,scale:s=1}){let o=wo(d=>d.camera),l=wo(d=>d.size.width),c=wo(d=>d.size.height);return(0,qn.useLayoutEffect)(()=>{if(!l||!c)return;let d=o.fov*Math.PI/180,p=2*Math.atan(Math.tan(d/2)*(l/c)),m=t*s/Math.sin(Math.min(d,p)/2);o.position.copy(e).multiplyScalar(m).add(r),o.lookAt(r),o.updateProjectionMatrix(),Cn()},[o,l,c]),null}function C2({part:r,T:e,I:t}){let s=(0,qn.useRef)(),o=(0,qn.useMemo)(()=>({line:new co({color:e.line,transparent:!0,opacity:0}),frame:new ar({color:e.frame,roughness:.75,metalness:.05,transparent:!0,opacity:0}),dark:new ar({color:e.dark,roughness:.9,transparent:!0,opacity:0}),bumper:new ar({color:e.bumper,roughness:.85,transparent:!0,opacity:0}),plate:r.plates?new Aa({map:wS(),transparent:!0,opacity:0,depthWrite:!1}):null}),[]);return Ha(()=>{let l=t.reduce?1:Ld((performance.now()-t.t0-250)/2200),c=Ld((l-r.at*.9)/.16),d=x2(c);s.current.position.y=(1-d)*r.drop*1.4,o.line.opacity=e.lineOp*d,o.frame.opacity=d,o.dark.opacity=d,o.bumper.opacity=d,o.frame.transparent=o.dark.transparent=o.bumper.transparent=d<1,o.plate&&(o.plate.opacity=d)}),(0,wt.jsxs)("group",{ref:s,children:[r.items.map(([l,c,d,p="frame"],m)=>(0,wt.jsxs)("group",{position:c,rotation:d||[0,0,0],children:[(0,wt.jsx)("mesh",{geometry:l,material:o[p]}),(0,wt.jsx)("lineSegments",{geometry:Eg(l),material:o.line})]},m)),r.plates&&(0,wt.jsxs)(wt.Fragment,{children:[(0,wt.jsx)("mesh",{geometry:lt.plate,material:o.plate,position:[0,3.5,18.06]}),(0,wt.jsx)("mesh",{geometry:lt.plate,material:o.plate,position:[0,3.5,-18.06],rotation:[0,Math.PI,0]})]})]})}function R2({T:r,I:e,opts:t}){let s=(0,qn.useRef)(),o=(0,qn.useMemo)(()=>new co({color:r.line,transparent:!0,opacity:r.lineOp*.45}),[]);return Ha((l,c)=>{let d=ES(e,c,.16);s.current.rotation.y=.55+e.rotY;let p=performance.now()-e.t0<2800;(d||p)&&e.onScreen&&Cn()}),(0,wt.jsxs)(wt.Fragment,{children:[(0,wt.jsx)("ambientLight",{intensity:r.amb}),(0,wt.jsx)("directionalLight",{position:[30,70,50],intensity:r.key}),(0,wt.jsx)("directionalLight",{position:[-50,20,-30],intensity:.9,color:r.fill}),(0,wt.jsxs)("group",{ref:s,children:[(0,wt.jsx)("lineSegments",{geometry:Eg(lt.footprint),material:o}),MS.map((l,c)=>(0,wt.jsx)(C2,{part:l,T:r,I:e},c))]}),(0,wt.jsx)(AS,{scale:t.fit||1})]})}var P2={paper:{rim:"#C9A04A",amb:1.2,key:1.8},night:{rim:"#E9B949",amb:.8,key:2.6}};function I2({T:r,I:e,opts:t}){let s=(0,qn.useRef)(),o=(0,qn.useMemo)(()=>{let c=new Bl().load(t.badge||"../../assets/badge-520.webp",()=>Cn());c.colorSpace=Mn,c.anisotropy=8,c.center.set(.5,.5),c.rotation=Math.PI/2;let d=c.clone();d.needsUpdate=!0,d.repeat.set(-1,1);let p=new ar({color:r.rim,metalness:.6,roughness:.35});return{rim:p,faces:[p,new ar({map:c,roughness:.55}),new ar({map:d,roughness:.55})]}},[]),l=(0,qn.useMemo)(()=>({disc:new fo(10,10,1.2,96),ring:new Ol(10,.45,18,120)}),[]);return Ha((c,d)=>{let p=e.reduce?1:Ld((performance.now()-e.t0-150)/1600),m=TS(p),v=ES(e,d,0),y=e.reduce?0:Math.sin((performance.now()-e.t0)/1600)*.16;s.current.rotation.y=(1-m)*-Math.PI*3+e.rotY+y*m,s.current.rotation.x=(1-m)*.6+Math.cos((performance.now()-e.t0)/2100)*.05*m*(e.reduce?0:1),s.current.scale.setScalar(.7+.3*m),e.onScreen&&!e.reduce?Cn():(v||p<1)&&Cn()}),(0,wt.jsxs)(wt.Fragment,{children:[(0,wt.jsx)("ambientLight",{intensity:r.amb}),(0,wt.jsx)("directionalLight",{position:[20,30,40],intensity:r.key}),(0,wt.jsx)("directionalLight",{position:[-30,-10,20],intensity:.6}),(0,wt.jsxs)("group",{ref:s,children:[(0,wt.jsx)("mesh",{geometry:l.disc,material:o.faces,rotation:[Math.PI/2,0,0]}),(0,wt.jsx)("mesh",{geometry:l.ring,material:o.rim})]}),(0,wt.jsx)(AS,{center:new X(0,0,0),view:new X(0,0,1),radius:11.5,scale:t.fit||1})]})}var N2={paper:{unit:"#17141d",hot:"#6B2FD6",lead:"#E9B949",amb:1,key:1.7},night:{unit:"#2a2631",hot:"#8B3DFF",lead:"#E9B949",amb:.7,key:2.2}};function L2({T:r,I:e,opts:t}){let s=(0,qn.useRef)(),o=wo(x=>x.size),l=wo(x=>x.camera),c=t.cols||26,d=t.rows||12,p=c*d,m=3.2,v=(0,qn.useMemo)(()=>{let x=(C,S)=>C+Math.random()*(S-C);return Array.from({length:p},(C,S)=>{let g=S%c,A=Math.floor(S/c);return{x:(g-(c-1)/2)*m,z:(A-(d-1)/2)*m,sx:x(-50,50),sy:x(18,60),sz:x(-40,30),rx:x(-3,3),ry:x(-3,3),delay:A*.07+g*.012+x(0,.08),h:0}})},[]),y=(0,qn.useMemo)(()=>({o:new kn,c:new rt,unit:new rt(r.unit),hot:new rt(r.hot),lead:new rt(r.lead),ray:new mo,plane:new Ri(new X(0,1,0),0),hit:new X(99,0,99),v2:new ct}),[]),_=(0,qn.useMemo)(()=>new Ar(1.7,1.1,1.7),[]),b=(0,qn.useMemo)(()=>new ar({roughness:.6,metalness:.1}),[]);return(0,qn.useLayoutEffect)(()=>{l.position.set(0,52,46),l.lookAt(0,0,3),l.fov=o.width<700?52:34,l.updateProjectionMatrix(),Cn()},[o.width,o.height]),Ha(()=>{let x=(performance.now()-e.t0)/1e3-.2;y.v2.set(e.px,e.py),y.ray.setFromCamera(y.v2,l),y.ray.ray.intersectPlane(y.plane,y.hit)||y.hit.set(999,0,999);let C=!1;v.forEach((S,g)=>{let A=e.reduce?1:Ld((x-S.delay)/.9),D=TS(A);A<1&&(C=!0);let R=Math.hypot(S.x-y.hit.x,S.z-y.hit.z),L=Math.max(0,1-R/9)*2.2;S.h+=(L-S.h)*.16,Math.abs(L-S.h)>.01&&(C=!0),y.o.position.set(S.sx+(S.x-S.sx)*D,S.sy*(1-D)+.55+S.h,S.sz+(S.z-S.sz)*D),y.o.rotation.set(S.rx*(1-D),S.ry*(1-D),0),y.o.updateMatrix(),s.current.setMatrixAt(g,y.o.matrix);let N=g===Math.floor(d/2)*c+Math.floor(c/2);y.c.copy(N?y.lead:y.unit).lerp(y.hot,N?0:Math.min(1,S.h/1.6)),s.current.setColorAt(g,y.c)}),s.current.instanceMatrix.needsUpdate=!0,s.current.instanceColor&&(s.current.instanceColor.needsUpdate=!0),C&&e.onScreen&&Cn()}),(0,wt.jsxs)(wt.Fragment,{children:[(0,wt.jsx)("ambientLight",{intensity:r.amb}),(0,wt.jsx)("directionalLight",{position:[20,50,30],intensity:r.key}),(0,wt.jsx)("instancedMesh",{ref:s,args:[_,b,p]})]})}var D2={robot:[R2,w2],coin:[I2,P2],ranks:[L2,N2]};window.Hero3D={mount(r,e={}){let{scene:t="robot",theme:s="paper",reduce:o=matchMedia("(prefers-reduced-motion: reduce)").matches,label:l=""}=e,[c,d]=D2[t],p=d[s]||Object.values(d)[0],m=M2(o),v=document.createElement("canvas");v.className="hero3d",l?(v.setAttribute("role","img"),v.setAttribute("aria-label",l)):v.setAttribute("aria-hidden","true"),r.prepend(v);let y=Mg(v),_=()=>{let g=r.getBoundingClientRect();y.configure({size:{width:g.width,height:g.height,top:0,left:0},dpr:Math.min(window.devicePixelRatio||1,2),frameloop:"demand",flat:!0,gl:{antialias:!0,alpha:!0,powerPreference:"high-performance",toneMapping:gi},camera:{fov:30,near:1,far:900}}),Cn()};_(),y.render((0,wt.jsx)(c,{T:p,I:m,opts:e})),new ResizeObserver(_).observe(r),new IntersectionObserver(([g])=>{m.onScreen=g.isIntersecting,m.onScreen&&Cn()}).observe(r);let b=e.pointerTarget||r,x=0,C=0;b.addEventListener("pointerdown",g=>{t!=="ranks"&&(m.drag=!0,x=g.clientX,C=g.timeStamp,b.setPointerCapture?.(g.pointerId),Cn())}),b.addEventListener("pointermove",g=>{let A=r.getBoundingClientRect();if(m.px=(g.clientX-A.left)/A.width*2-1,m.py=-((g.clientY-A.top)/A.height)*2+1,m.drag){let D=g.clientX-x,R=Math.max(1,g.timeStamp-C)/1e3;m.rotY+=D*.01,m.vx=D*.01/R,x=g.clientX,C=g.timeStamp}Cn()});let S=()=>{m.drag=!1,Cn()};return b.addEventListener("pointerup",S),b.addEventListener("pointercancel",S),b.addEventListener("pointerleave",()=>{m.px=9,m.py=9,Cn()}),document.fonts?.ready.then(()=>Cn()),!0}};})();
