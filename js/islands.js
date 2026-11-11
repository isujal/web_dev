(()=>{var FM=Object.create;var Py=Object.defineProperty;var UM=Object.getOwnPropertyDescriptor;var zM=Object.getOwnPropertyNames;var OM=Object.getPrototypeOf,BM=Object.prototype.hasOwnProperty;var Ar=(r,e)=>()=>{try{return e||r((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};var HM=(r,e,t,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of zM(e))!BM.call(r,o)&&o!==t&&Py(r,o,{get:()=>e[o],enumerable:!(s=UM(e,o))||s.enumerable});return r};var fi=(r,e,t)=>(t=r!=null?FM(OM(r)):{},HM(e||!r||!r.__esModule?Py(t,"default",{value:r,enumerable:!0}):t,r));var Gy=Ar(rt=>{"use strict";var kp=Symbol.for("react.transitional.element"),VM=Symbol.for("react.portal"),GM=Symbol.for("react.fragment"),WM=Symbol.for("react.strict_mode"),XM=Symbol.for("react.profiler"),qM=Symbol.for("react.consumer"),$M=Symbol.for("react.context"),YM=Symbol.for("react.forward_ref"),jM=Symbol.for("react.suspense"),ZM=Symbol.for("react.memo"),Dy=Symbol.for("react.lazy"),JM=Symbol.for("react.activity"),KM=Symbol.for("react.view_transition"),Iy=Symbol.iterator;function QM(r){return r===null||typeof r!="object"?null:(r=Iy&&r[Iy]||r["@@iterator"],typeof r=="function"?r:null)}var Fy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Uy=Object.assign,zy={};function ma(r,e,t){this.props=r,this.context=e,this.refs=zy,this.updater=t||Fy}ma.prototype.isReactComponent={};ma.prototype.setState=function(r,e){if(typeof r!="object"&&typeof r!="function"&&r!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,r,e,"setState")};ma.prototype.forceUpdate=function(r){this.updater.enqueueForceUpdate(this,r,"forceUpdate")};function Oy(){}Oy.prototype=ma.prototype;function Dp(r,e,t){this.props=r,this.context=e,this.refs=zy,this.updater=t||Fy}var Fp=Dp.prototype=new Oy;Fp.constructor=Dp;Uy(Fp,ma.prototype);Fp.isPureReactComponent=!0;var Ny=Array.isArray;function Lp(){}var Jt={H:null,A:null,T:null,S:null},By=Object.prototype.hasOwnProperty;function Up(r,e,t){var s=t.ref;return{$$typeof:kp,type:r,key:e,ref:s!==void 0?s:null,props:t}}function ew(r,e){return Up(r.type,e,r.props)}function zp(r){return typeof r=="object"&&r!==null&&r.$$typeof===kp}function tw(r){var e={"=":"=0",":":"=2"};return"$"+r.replace(/[=:]/g,function(t){return e[t]})}var Ly=/\/+/g;function Np(r,e){return typeof r=="object"&&r!==null&&r.key!=null?tw(""+r.key):e.toString(36)}function nw(r){switch(r.status){case"fulfilled":return r.value;case"rejected":throw r.reason;default:switch(typeof r.status=="string"?r.then(Lp,Lp):(r.status="pending",r.then(function(e){r.status==="pending"&&(r.status="fulfilled",r.value=e)},function(e){r.status==="pending"&&(r.status="rejected",r.reason=e)})),r.status){case"fulfilled":return r.value;case"rejected":throw r.reason}}throw r}function pa(r,e,t,s,o){var l=typeof r;(l==="undefined"||l==="boolean")&&(r=null);var c=!1;if(r===null)c=!0;else switch(l){case"bigint":case"string":case"number":c=!0;break;case"object":switch(r.$$typeof){case kp:case VM:c=!0;break;case Dy:return c=r._init,pa(c(r._payload),e,t,s,o)}}if(c)return o=o(r),c=s===""?"."+Np(r,0):s,Ny(o)?(t="",c!=null&&(t=c.replace(Ly,"$&/")+"/"),pa(o,e,t,"",function(m){return m})):o!=null&&(zp(o)&&(o=ew(o,t+(o.key==null||r&&r.key===o.key?"":(""+o.key).replace(Ly,"$&/")+"/")+c)),e.push(o)),1;c=0;var f=s===""?".":s+":";if(Ny(r))for(var h=0;h<r.length;h++)s=r[h],l=f+Np(s,h),c+=pa(s,e,t,l,o);else if(h=QM(r),typeof h=="function")for(r=h.call(r),h=0;!(s=r.next()).done;)s=s.value,l=f+Np(s,h++),c+=pa(s,e,t,l,o);else if(l==="object"){if(typeof r.then=="function")return pa(nw(r),e,t,s,o);throw e=String(r),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return c}function Nc(r,e,t){if(r==null)return r;var s=[],o=0;return pa(r,s,"","",function(l){return e.call(t,l,o++)}),s}function iw(r){if(r._status===-1){var e=r._result,t=e();t.then(function(s){(r._status===0||r._status===-1)&&(r._status=1,r._result=s,t.status===void 0&&(t.status="fulfilled",t.value=s))},function(s){(r._status===0||r._status===-1)&&(r._status=2,r._result=s,t.status===void 0&&(t.status="rejected",t.reason=s))}),r._status===-1&&(r._status=0,r._result=t)}if(r._status===1)return r._result.default;throw r._result}var ky=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)};function Hy(r){var e=Jt.T,t={};t.types=e!==null?e.types:null,Jt.T=t;try{var s=r(),o=Jt.S;o!==null&&o(t,s),typeof s=="object"&&s!==null&&typeof s.then=="function"&&s.then(Lp,ky)}catch(l){ky(l)}finally{e!==null&&t.types!==null&&(e.types=t.types),Jt.T=e}}function Vy(r){var e=Jt.T;if(e!==null){var t=e.types;t===null?e.types=[r]:t.indexOf(r)===-1&&t.push(r)}else Hy(Vy.bind(null,r))}var rw={map:Nc,forEach:function(r,e,t){Nc(r,function(){e.apply(this,arguments)},t)},count:function(r){var e=0;return Nc(r,function(){e++}),e},toArray:function(r){return Nc(r,function(e){return e})||[]},only:function(r){if(!zp(r))throw Error("React.Children.only expected to receive a single React element child.");return r}};rt.Activity=JM;rt.Children=rw;rt.Component=ma;rt.Fragment=GM;rt.Profiler=XM;rt.PureComponent=Dp;rt.StrictMode=WM;rt.Suspense=jM;rt.ViewTransition=KM;rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Jt;rt.__COMPILER_RUNTIME={__proto__:null,c:function(r){return Jt.H.useMemoCache(r)}};rt.addTransitionType=Vy;rt.cache=function(r){return function(){return r.apply(null,arguments)}};rt.cacheSignal=function(){return null};rt.cloneElement=function(r,e,t){if(r==null)throw Error("The argument must be a React element, but you passed "+r+".");var s=Uy({},r.props),o=r.key;if(e!=null)for(l in e.key!==void 0&&(o=""+e.key),e)!By.call(e,l)||l==="key"||l==="__self"||l==="__source"||l==="ref"&&e.ref===void 0||(s[l]=e[l]);var l=arguments.length-2;if(l===1)s.children=t;else if(1<l){for(var c=Array(l),f=0;f<l;f++)c[f]=arguments[f+2];s.children=c}return Up(r.type,o,s)};rt.createContext=function(r){return r={$$typeof:$M,_currentValue:r,_currentValue2:r,_threadCount:0,Provider:null,Consumer:null},r.Provider=r,r.Consumer={$$typeof:qM,_context:r},r};rt.createElement=function(r,e,t){var s,o={},l=null;if(e!=null)for(s in e.key!==void 0&&(l=""+e.key),e)By.call(e,s)&&s!=="key"&&s!=="__self"&&s!=="__source"&&(o[s]=e[s]);var c=arguments.length-2;if(c===1)o.children=t;else if(1<c){for(var f=Array(c),h=0;h<c;h++)f[h]=arguments[h+2];o.children=f}if(r&&r.defaultProps)for(s in c=r.defaultProps,c)o[s]===void 0&&(o[s]=c[s]);return Up(r,l,o)};rt.createRef=function(){return{current:null}};rt.forwardRef=function(r){return{$$typeof:YM,render:r}};rt.isValidElement=zp;rt.lazy=function(r){return{$$typeof:Dy,_payload:{_status:-1,_result:r},_init:iw}};rt.memo=function(r,e){return{$$typeof:ZM,type:r,compare:e===void 0?null:e}};rt.startTransition=Hy;rt.unstable_useCacheRefresh=function(){return Jt.H.useCacheRefresh()};rt.use=function(r){return Jt.H.use(r)};rt.useActionState=function(r,e,t){return Jt.H.useActionState(r,e,t)};rt.useCallback=function(r,e){return Jt.H.useCallback(r,e)};rt.useContext=function(r){return Jt.H.useContext(r)};rt.useDebugValue=function(){};rt.useDeferredValue=function(r,e){return Jt.H.useDeferredValue(r,e)};rt.useEffect=function(r,e){return Jt.H.useEffect(r,e)};rt.useEffectEvent=function(r){return Jt.H.useEffectEvent(r)};rt.useId=function(){return Jt.H.useId()};rt.useImperativeHandle=function(r,e,t){return Jt.H.useImperativeHandle(r,e,t)};rt.useInsertionEffect=function(r,e){return Jt.H.useInsertionEffect(r,e)};rt.useLayoutEffect=function(r,e){return Jt.H.useLayoutEffect(r,e)};rt.useMemo=function(r,e){return Jt.H.useMemo(r,e)};rt.useOptimistic=function(r,e){return Jt.H.useOptimistic(r,e)};rt.useReducer=function(r,e,t){return Jt.H.useReducer(r,e,t)};rt.useRef=function(r){return Jt.H.useRef(r)};rt.useState=function(r){return Jt.H.useState(r)};rt.useSyncExternalStore=function(r,e,t){return Jt.H.useSyncExternalStore(r,e,t)};rt.useTransition=function(){return Jt.H.useTransition()};rt.version="19.3.1"});var Yr=Ar((OP,Wy)=>{"use strict";Wy.exports=Gy()});var $_=Ar(Dd=>{"use strict";var V2=Symbol.for("react.transitional.element"),G2=Symbol.for("react.fragment");function q_(r,e,t){var s=null;if(t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),"key"in e){t={};for(var o in e)o!=="key"&&(t[o]=e[o])}else t=e;return e=t.ref,{$$typeof:V2,type:r,key:s,ref:e!==void 0?e:null,props:t}}Dd.Fragment=G2;Dd.jsx=q_;Dd.jsxs=q_});var ko=Ar((rL,Y_)=>{"use strict";Y_.exports=$_()});var Z_=Ar(j_=>{"use strict";var el=Yr();function W2(r,e){return r===e&&(r!==0||1/r===1/e)||r!==r&&e!==e}var X2=typeof Object.is=="function"?Object.is:W2,q2=el.useState,$2=el.useEffect,Y2=el.useLayoutEffect,j2=el.useDebugValue;function Z2(r,e){var t=e(),s=q2({inst:{value:t,getSnapshot:e}}),o=s[0].inst,l=s[1];return Y2(function(){o.value=t,o.getSnapshot=e,dg(o)&&l({inst:o})},[r,t,e]),$2(function(){return dg(o)&&l({inst:o}),r(function(){dg(o)&&l({inst:o})})},[r]),j2(t),t}function dg(r){var e=r.getSnapshot;r=r.value;try{var t=e();return!X2(r,t)}catch{return!0}}function J2(r,e){return e()}var K2=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?J2:Z2;j_.useSyncExternalStore=el.useSyncExternalStore!==void 0?el.useSyncExternalStore:K2});var K_=Ar((oL,J_)=>{"use strict";J_.exports=Z_()});var eS=Ar(Q_=>{"use strict";var Fd=Yr(),Q2=K_();function eC(r,e){return r===e&&(r!==0||1/r===1/e)||r!==r&&e!==e}var tC=typeof Object.is=="function"?Object.is:eC,nC=Q2.useSyncExternalStore,iC=Fd.useRef,rC=Fd.useEffect,sC=Fd.useMemo,oC=Fd.useDebugValue;Q_.useSyncExternalStoreWithSelector=function(r,e,t,s,o){var l=iC(null);if(l.current===null){var c={hasValue:!1,value:null};l.current=c}else c=l.current;l=sC(function(){function h(v){if(!m){if(m=!0,g=v,v=s(v),o!==void 0&&c.hasValue){var x=c.value;if(o(x,v))return _=x}return _=v}if(x=_,tC(g,v))return x;var A=s(v);return o!==void 0&&o(x,A)?(g=v,x):(g=v,_=A)}var m=!1,g,_,b=t===void 0?null:t;return[function(){return h(e())},b===null?void 0:function(){return h(b())}]},[e,t,s,o]);var f=nC(r,l[0],l[1]);return rC(function(){c.hasValue=!0,c.value=f},[f]),oC(f),f}});var nS=Ar((lL,tS)=>{"use strict";tS.exports=eS()});var MS=Ar(tn=>{"use strict";function gg(r,e){var t=r.length;r.push(e);e:for(;0<t;){var s=t-1>>>1,o=r[s];if(0<Ud(o,e))r[s]=e,r[t]=o,t=s;else break e}}function zr(r){return r.length===0?null:r[0]}function Od(r){if(r.length===0)return null;var e=r[0],t=r.pop();if(t!==e){r[0]=t;e:for(var s=0,o=r.length,l=o>>>1;s<l;){var c=2*(s+1)-1,f=r[c],h=c+1,m=r[h];if(0>Ud(f,t))h<o&&0>Ud(m,f)?(r[s]=m,r[h]=t,s=h):(r[s]=f,r[c]=t,s=c);else if(h<o&&0>Ud(m,t))r[s]=m,r[h]=t,s=h;else break e}}return e}function Ud(r,e){var t=r.sortIndex-e.sortIndex;return t!==0?t:r.id-e.id}tn.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(pS=performance,tn.unstable_now=function(){return pS.now()}):(hg=Date,mS=hg.now(),tn.unstable_now=function(){return hg.now()-mS});var pS,hg,mS,ds=[],Ws=[],fC=1,Qi=null,li=3,vg=!1,Mu=!1,wu=!1,yg=!1,yS=typeof setTimeout=="function"?setTimeout:null,bS=typeof clearTimeout=="function"?clearTimeout:null,gS=typeof setImmediate<"u"?setImmediate:null;function zd(r){for(var e=zr(Ws);e!==null;){if(e.callback===null)Od(Ws);else if(e.startTime<=r)Od(Ws),e.sortIndex=e.expirationTime,gg(ds,e);else break;e=zr(Ws)}}function bg(r){if(wu=!1,zd(r),!Mu)if(zr(ds)!==null)Mu=!0,nl||(nl=!0,tl());else{var e=zr(Ws);e!==null&&_g(bg,e.startTime-r)}}var nl=!1,Tu=-1,_S=5,SS=-1;function xS(){return yg?!0:!(tn.unstable_now()-SS<_S)}function pg(){if(yg=!1,nl){var r=tn.unstable_now();SS=r;var e=!0;try{e:{Mu=!1,wu&&(wu=!1,bS(Tu),Tu=-1),vg=!0;var t=li;try{t:{for(zd(r),Qi=zr(ds);Qi!==null&&!(Qi.expirationTime>r&&xS());){var s=Qi.callback;if(typeof s=="function"){Qi.callback=null,li=Qi.priorityLevel;var o=s(Qi.expirationTime<=r);if(r=tn.unstable_now(),typeof o=="function"){Qi.callback=o,zd(r),e=!0;break t}Qi===zr(ds)&&Od(ds),zd(r)}else Od(ds);Qi=zr(ds)}if(Qi!==null)e=!0;else{var l=zr(Ws);l!==null&&_g(bg,l.startTime-r),e=!1}}break e}finally{Qi=null,li=t,vg=!1}e=void 0}}finally{e?tl():nl=!1}}}var tl;typeof gS=="function"?tl=function(){gS(pg)}:typeof MessageChannel<"u"?(mg=new MessageChannel,vS=mg.port2,mg.port1.onmessage=pg,tl=function(){vS.postMessage(null)}):tl=function(){yS(pg,0)};var mg,vS;function _g(r,e){Tu=yS(function(){r(tn.unstable_now())},e)}tn.unstable_IdlePriority=5;tn.unstable_ImmediatePriority=1;tn.unstable_LowPriority=4;tn.unstable_NormalPriority=3;tn.unstable_Profiling=null;tn.unstable_UserBlockingPriority=2;tn.unstable_cancelCallback=function(r){r.callback=null};tn.unstable_forceFrameRate=function(r){0>r||125<r?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_S=0<r?Math.floor(1e3/r):5};tn.unstable_getCurrentPriorityLevel=function(){return li};tn.unstable_next=function(r){switch(li){case 1:case 2:case 3:var e=3;break;default:e=li}var t=li;li=e;try{return r()}finally{li=t}};tn.unstable_requestPaint=function(){yg=!0};tn.unstable_runWithPriority=function(r,e){switch(r){case 1:case 2:case 3:case 4:case 5:break;default:r=3}var t=li;li=r;try{return e()}finally{li=t}};tn.unstable_scheduleCallback=function(r,e,t){var s=tn.unstable_now();switch(typeof t=="object"&&t!==null?(t=t.delay,t=typeof t=="number"&&0<t?s+t:s):t=s,r){case 1:var o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3}return o=t+o,r={id:fC++,callback:e,priorityLevel:r,startTime:t,expirationTime:o,sortIndex:-1},t>s?(r.sortIndex=t,gg(Ws,r),zr(ds)===null&&r===zr(Ws)&&(wu?(bS(Tu),Tu=-1):wu=!0,_g(bg,t-s))):(r.sortIndex=o,gg(ds,r),Mu||vg||(Mu=!0,nl||(nl=!0,tl()))),r};tn.unstable_shouldYield=xS;tn.unstable_wrapCallback=function(r){var e=li;return function(){var t=li;li=e;try{return r.apply(this,arguments)}finally{li=t}}}});var Sg=Ar((pL,wS)=>{"use strict";wS.exports=MS()});var nn=fi(Yr()),US=fi(Yr());var Eb=0,ym=1,Ab=2;var bm=0,Ro=1,Xa=2,Hs=3,Vs=0,mi=1,wi=2,Co=0,qa=1,cu=2,_m=3,Sm=4,Rb=5;var Po=100,Cb=101,Pb=102,Ib=103,Nb=104,Lb=200,kb=201,Db=202,Fb=203,xm=204,Mm=205,Ub=206,zb=207,Ob=208,Bb=209,Hb=210,Vb=211,Gb=212,Wb=213,Xb=214,uf=0,cf=1,ff=2,La=3,df=4,hf=5,pf=6,mf=7,wm=0,qb=1,$b=2,si=0,Tm=1,Em=2,Am=3,fu=4,Rm=5,Cm=6,Pm=7;var Im=300,Io=301,$a=302,Gf=303,Wf=304,gf=1e3,Cr=1001,vf=1002,zn=1003,Yb=1004;var du=1005;var hi=1006,Xf=1007;var us=1008;var oi=1009,Nm=1010,Lm=1011,Ya=1012,qf=1013,pr=1014,Ki=1015,mr=1016,$f=1017,Yf=1018,No=1020,km=35902,Dm=35899,Fm=1021,Um=1022,Bi=1023,ns=1026,cs=1027,jf=1028,Zf=1029,Gs=1030,Jf=1031;var Kf=1033,hu=33776,pu=33777,mu=33778,gu=33779,Qf=35840,ed=35841,td=35842,nd=35843,id=36196,rd=37492,sd=37496,od=37488,ad=37489,vu=37490,ld=37491,ud=37808,cd=37809,fd=37810,dd=37811,hd=37812,pd=37813,md=37814,gd=37815,vd=37816,yd=37817,bd=37818,_d=37819,Sd=37820,xd=37821,Md=36492,wd=36494,Td=36495,Ed=36283,Ad=36284,yu=36285,Rd=36286;var Vl=2300,yf=2301,of=2302,cm=2303,fm=2400,dm=2401,hm=2402;var jb=3200;var Cd=0,Zb=1,fs="",An="srgb",_o="srgb-linear",Gl="linear",zt="srgb";var af=7680;var Jb=519,Kb=512,Qb=513,e_=514,zm=515,t_=516,n_=517,Om=518,Bm=519,i_=35044;var Hm="300 es",Ji=2e3,ka=2001;function sw(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ow(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Da(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function r_(){let r=Da("canvas");return r.style.display="block",r}var Xy={},Fa=null;function Vm(...r){let e="THREE."+r.shift();Fa?Fa("log",e,...r):console.log(e,...r)}function s_(r){let e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function $e(...r){r=s_(r);let e="THREE."+r.shift();if(Fa)Fa("warn",e,...r);else{let t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function nt(...r){r=s_(r);let e="THREE."+r.shift();if(Fa)Fa("error",e,...r);else{let t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function bo(...r){let e=r.join(" ");e in Xy||(Xy[e]=!0,$e(...r))}function o_(r,e,t){return new Promise(function(s,o){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:s()}}setTimeout(l,t)})}var a_={[uf]:uf,[ff]:pf,[df]:df,[La]:hf,[cf]:cf,[pf]:ff,[mf]:mf,[hf]:La},Pr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){let s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){let s=this._listeners;if(s===void 0)return;let o=s[e];if(o!==void 0){let l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let s=t[e.type];if(s!==void 0){e.target=this;let o=s.slice(0);for(let l=0,c=o.length;l<c;l++)o[l].call(this,e);e.target=null}}},ti=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qy=1234567,Ia=Math.PI/180,Ua=180/Math.PI;function ja(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(ti[r&255]+ti[r>>8&255]+ti[r>>16&255]+ti[r>>24&255]+"-"+ti[e&255]+ti[e>>8&255]+"-"+ti[e>>16&15|64]+ti[e>>24&255]+"-"+ti[t&63|128]+ti[t>>8&255]+"-"+ti[t>>16&255]+ti[t>>24&255]+ti[s&255]+ti[s>>8&255]+ti[s>>16&255]+ti[s>>24&255]).toLowerCase()}function gt(r,e,t){return Math.max(e,Math.min(t,r))}function Gm(r,e){return(r%e+e)%e}function aw(r,e,t,s,o){return s+(r-e)*(o-s)/(t-e)}function lw(r,e,t){return r!==e?(t-r)/(e-r):0}function Hl(r,e,t){return(1-t)*r+t*e}function uw(r,e,t,s){return Hl(r,e,1-Math.exp(-t*s))}function cw(r,e=1){return e-Math.abs(Gm(r,e*2)-e)}function fw(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function dw(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function hw(r,e){return r+Math.floor(Math.random()*(e-r+1))}function pw(r,e){return r+Math.random()*(e-r)}function mw(r){return r*(.5-Math.random())}function gw(r){r!==void 0&&(qy=r);let e=qy+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function vw(r){return r*Ia}function yw(r){return r*Ua}function bw(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}function _w(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Wm(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Sw(r,e,t,s,o){let l=Math.cos,c=Math.sin,f=l(t/2),h=c(t/2),m=l((e+s)/2),g=c((e+s)/2),_=l((e-s)/2),b=c((e-s)/2),v=l((s-e)/2),x=c((s-e)/2);switch(o){case"XYX":r.set(f*g,h*_,h*b,f*m);break;case"YZY":r.set(h*b,f*g,h*_,f*m);break;case"ZXZ":r.set(h*_,h*b,f*g,f*m);break;case"XZX":r.set(f*g,h*x,h*v,f*m);break;case"YXY":r.set(h*v,f*g,h*x,f*m);break;case"ZYZ":r.set(h*x,h*v,f*g,f*m);break;default:$e("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Xm(r){switch(r.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function l_(r,e){if(e.constructor===Float32Array)return r;let t=Xm(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(r/t,-1)}function u_(r,e){if(e.constructor===Float32Array)return r;let t=Xm(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(r*t)}var Za={DEG2RAD:Ia,RAD2DEG:Ua,generateUUID:ja,clamp:gt,euclideanModulo:Gm,mapLinear:aw,inverseLerp:lw,lerp:Hl,damp:uw,pingpong:cw,smoothstep:fw,smootherstep:dw,randInt:hw,randFloat:pw,randFloatSpread:mw,seededRandom:gw,degToRad:vw,radToDeg:yw,isPowerOfTwo:bw,ceilPowerOfTwo:_w,floorPowerOfTwo:Wm,setQuaternionFromProperEuler:Sw,normalize:u_,denormalize:l_},Jm=class Jm{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,s=this.y,o=e.elements;return this.x=o[0]*t+o[3]*s+o[6],this.y=o[1]*t+o[4]*s+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this}clampLength(e,t){let s=this.length();return this.divideScalar(s||1).multiplyScalar(gt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let s=this.dot(e)/t;return Math.acos(gt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let s=Math.cos(t),o=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*s-c*o+e.x,this.y=l*o+c*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Jm.prototype.isVector2=!0;var lt=Jm,Ir=class{constructor(e=0,t=0,s=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=o}static slerpFlat(e,t,s,o,l,c,f){let h=s[o+0],m=s[o+1],g=s[o+2],_=s[o+3],b=l[c+0],v=l[c+1],x=l[c+2],A=l[c+3];if(_!==A||h!==b||m!==v||g!==x){let S=h*b+m*v+g*x+_*A;S<0&&(b=-b,v=-v,x=-x,A=-A,S=-S);let y=1-f;if(S<.9995){let w=Math.acos(S),L=Math.sin(w);y=Math.sin(y*w)/L,f=Math.sin(f*w)/L,h=h*y+b*f,m=m*y+v*f,g=g*y+x*f,_=_*y+A*f}else{h=h*y+b*f,m=m*y+v*f,g=g*y+x*f,_=_*y+A*f;let w=1/Math.sqrt(h*h+m*m+g*g+_*_);h*=w,m*=w,g*=w,_*=w}}e[t]=h,e[t+1]=m,e[t+2]=g,e[t+3]=_}static multiplyQuaternionsFlat(e,t,s,o,l,c){let f=s[o],h=s[o+1],m=s[o+2],g=s[o+3],_=l[c],b=l[c+1],v=l[c+2],x=l[c+3];return e[t]=f*x+g*_+h*v-m*b,e[t+1]=h*x+g*b+m*_-f*v,e[t+2]=m*x+g*v+f*b-h*_,e[t+3]=g*x-f*_-h*b-m*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,o){return this._x=e,this._y=t,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let s=e._x,o=e._y,l=e._z,c=e._order,f=Math.cos,h=Math.sin,m=f(s/2),g=f(o/2),_=f(l/2),b=h(s/2),v=h(o/2),x=h(l/2);switch(c){case"XYZ":this._x=b*g*_+m*v*x,this._y=m*v*_-b*g*x,this._z=m*g*x+b*v*_,this._w=m*g*_-b*v*x;break;case"YXZ":this._x=b*g*_+m*v*x,this._y=m*v*_-b*g*x,this._z=m*g*x-b*v*_,this._w=m*g*_+b*v*x;break;case"ZXY":this._x=b*g*_-m*v*x,this._y=m*v*_+b*g*x,this._z=m*g*x+b*v*_,this._w=m*g*_-b*v*x;break;case"ZYX":this._x=b*g*_-m*v*x,this._y=m*v*_+b*g*x,this._z=m*g*x-b*v*_,this._w=m*g*_+b*v*x;break;case"YZX":this._x=b*g*_+m*v*x,this._y=m*v*_+b*g*x,this._z=m*g*x-b*v*_,this._w=m*g*_-b*v*x;break;case"XZY":this._x=b*g*_-m*v*x,this._y=m*v*_-b*g*x,this._z=m*g*x+b*v*_,this._w=m*g*_+b*v*x;break;default:$e("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let s=t/2,o=Math.sin(s);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,s=t[0],o=t[4],l=t[8],c=t[1],f=t[5],h=t[9],m=t[2],g=t[6],_=t[10],b=s+f+_;if(b>0){let v=.5/Math.sqrt(b+1);this._w=.25/v,this._x=(g-h)*v,this._y=(l-m)*v,this._z=(c-o)*v}else if(s>f&&s>_){let v=2*Math.sqrt(1+s-f-_);this._w=(g-h)/v,this._x=.25*v,this._y=(o+c)/v,this._z=(l+m)/v}else if(f>_){let v=2*Math.sqrt(1+f-s-_);this._w=(l-m)/v,this._x=(o+c)/v,this._y=.25*v,this._z=(h+g)/v}else{let v=2*Math.sqrt(1+_-s-f);this._w=(c-o)/v,this._x=(l+m)/v,this._y=(h+g)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){let s=this.angleTo(e);if(s===0)return this;let o=Math.min(1,t/s);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let s=e._x,o=e._y,l=e._z,c=e._w,f=t._x,h=t._y,m=t._z,g=t._w;return this._x=s*g+c*f+o*m-l*h,this._y=o*g+c*h+l*f-s*m,this._z=l*g+c*m+s*h-o*f,this._w=c*g-s*f-o*h-l*m,this._onChangeCallback(),this}slerp(e,t){let s=e._x,o=e._y,l=e._z,c=e._w,f=this.dot(e);f<0&&(s=-s,o=-o,l=-l,c=-c,f=-f);let h=1-t;if(f<.9995){let m=Math.acos(f),g=Math.sin(m);h=Math.sin(h*m)/g,t=Math.sin(t*m)/g,this._x=this._x*h+s*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+c*t,this._onChangeCallback()}else this._x=this._x*h+s*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+c*t,this.normalize();return this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),o=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Km=class Km{constructor(e=0,t=0,s=0){this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($y.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($y.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*o,this.y=l[1]*t+l[4]*s+l[7]*o,this.z=l[2]*t+l[5]*s+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,s=this.y,o=this.z,l=e.elements,c=1/(l[3]*t+l[7]*s+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*o+l[12])*c,this.y=(l[1]*t+l[5]*s+l[9]*o+l[13])*c,this.z=(l[2]*t+l[6]*s+l[10]*o+l[14])*c,this}applyQuaternion(e){let t=this.x,s=this.y,o=this.z,l=e.x,c=e.y,f=e.z,h=e.w,m=2*(c*o-f*s),g=2*(f*t-l*o),_=2*(l*s-c*t);return this.x=t+h*m+c*_-f*g,this.y=s+h*g+f*m-l*_,this.z=o+h*_+l*g-c*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*o,this.y=l[1]*t+l[5]*s+l[9]*o,this.z=l[2]*t+l[6]*s+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this}clampLength(e,t){let s=this.length();return this.divideScalar(s||1).multiplyScalar(gt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let s=e.x,o=e.y,l=e.z,c=t.x,f=t.y,h=t.z;return this.x=o*h-l*f,this.y=l*c-s*h,this.z=s*f-o*c,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Op.copy(this).projectOnVector(e),this.sub(Op)}reflect(e){return this.sub(Op.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let s=this.dot(e)/t;return Math.acos(gt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,s=this.y-e.y,o=this.z-e.z;return t*t+s*s+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){let o=Math.sin(t)*e;return this.x=o*Math.sin(s),this.y=Math.cos(t)*e,this.z=o*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Km.prototype.isVector3=!0;var H=Km,Op=new H,$y=new Ir,Qm=class Qm{constructor(e,t,s,o,l,c,f,h,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,c,f,h,m)}set(e,t,s,o,l,c,f,h,m){let g=this.elements;return g[0]=e,g[1]=o,g[2]=f,g[3]=t,g[4]=l,g[5]=h,g[6]=s,g[7]=c,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let s=e.elements,o=t.elements,l=this.elements,c=s[0],f=s[3],h=s[6],m=s[1],g=s[4],_=s[7],b=s[2],v=s[5],x=s[8],A=o[0],S=o[3],y=o[6],w=o[1],L=o[4],C=o[7],I=o[2],N=o[5],M=o[8];return l[0]=c*A+f*w+h*I,l[3]=c*S+f*L+h*N,l[6]=c*y+f*C+h*M,l[1]=m*A+g*w+_*I,l[4]=m*S+g*L+_*N,l[7]=m*y+g*C+_*M,l[2]=b*A+v*w+x*I,l[5]=b*S+v*L+x*N,l[8]=b*y+v*C+x*M,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],c=e[4],f=e[5],h=e[6],m=e[7],g=e[8];return t*c*g-t*f*m-s*l*g+s*f*h+o*l*m-o*c*h}invert(){let e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],c=e[4],f=e[5],h=e[6],m=e[7],g=e[8],_=g*c-f*m,b=f*h-g*l,v=m*l-c*h,x=t*_+s*b+o*v;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let A=1/x;return e[0]=_*A,e[1]=(o*m-g*s)*A,e[2]=(f*s-o*c)*A,e[3]=b*A,e[4]=(g*t-o*h)*A,e[5]=(o*l-f*t)*A,e[6]=v*A,e[7]=(s*h-m*t)*A,e[8]=(c*t-s*l)*A,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,o,l,c,f){let h=Math.cos(l),m=Math.sin(l);return this.set(s*h,s*m,-s*(h*c+m*f)+c+e,-o*m,o*h,-o*(-m*c+h*f)+f+t,0,0,1),this}scale(e,t){return bo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Bp.makeScale(e,t)),this}rotate(e){return bo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Bp.makeRotation(-e)),this}translate(e,t){return bo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Bp.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,s=e.elements;for(let o=0;o<9;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){let s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Qm.prototype.isMatrix3=!0;var it=Qm,Bp=new it,Yy=new it().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jy=new it().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xw(){let r={enabled:!0,workingColorSpace:_o,spaces:{},convert:function(o,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===zt&&(o.r=ts(o.r),o.g=ts(o.g),o.b=ts(o.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===zt&&(o.r=Na(o.r),o.g=Na(o.g),o.b=Na(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===fs?Gl:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,c){return o.copy(this.spaces[c].fromXYZ).multiply(this.spaces[l].toXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[_o]:{primaries:e,whitePoint:s,transfer:Gl,toXYZ:Yy,fromXYZ:jy,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:An},outputColorSpaceConfig:{drawingBufferColorSpace:An}},[An]:{primaries:e,whitePoint:s,transfer:zt,toXYZ:Yy,fromXYZ:jy,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:An}}}),r}var bt=xw();function ts(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Na(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var ga,bf=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{ga===void 0&&(ga=Da("canvas")),ga.width=e.width,ga.height=e.height;let o=ga.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),s=ga}return s.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Da("canvas");t.width=e.width,t.height=e.height;let s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);let o=s.getImageData(0,0,e.width,e.height),l=o.data;for(let c=0;c<l.length;c++)l[c]=ts(l[c]/255)*255;return s.putImageData(o,0,0),t}else if(e.data){let t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(ts(t[s]/255)*255):t[s]=ts(t[s]);return{data:t,width:e.width,height:e.height}}else return $e("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Mw=0,za=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Mw++}),this.uuid=ja(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let c=0,f=o.length;c<f;c++)o[c].isDataTexture?l.push(Hp(o[c].image)):l.push(Hp(o[c]))}else l=Hp(o);s.url=l}return t||(e.images[this.uuid]=s),s}};function Hp(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?bf.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:($e("Texture: Unable to serialize Texture."),{})}var ww=0,Vp=new H,ii=class r extends Pr{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,s=Cr,o=Cr,l=hi,c=us,f=Bi,h=oi,m=r.DEFAULT_ANISOTROPY,g=fs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ww++}),this.uuid=ja(),this.name="",this.source=new za(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=l,this.minFilter=c,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=h,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Vp).x}get height(){return this.source.getSize(Vp).y}get depth(){return this.source.getSize(Vp).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let s=e[t];if(s===void 0){$e(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let o=this[t];if(o===void 0){$e(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&s&&o.isVector2&&s.isVector2||o&&s&&o.isVector3&&s.isVector3||o&&s&&o.isMatrix3&&s.isMatrix3?o.copy(s):this[t]=s}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Im)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gf:e.x=e.x-Math.floor(e.x);break;case Cr:e.x=e.x<0?0:1;break;case vf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gf:e.y=e.y-Math.floor(e.y);break;case Cr:e.y=e.y<0?0:1;break;case vf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};ii.DEFAULT_IMAGE=null;ii.DEFAULT_MAPPING=Im;ii.DEFAULT_ANISOTROPY=1;var eg=class eg{constructor(e=0,t=0,s=0,o=1){this.x=e,this.y=t,this.z=s,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,o){return this.x=e,this.y=t,this.z=s,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,s=this.y,o=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*s+c[8]*o+c[12]*l,this.y=c[1]*t+c[5]*s+c[9]*o+c[13]*l,this.z=c[2]*t+c[6]*s+c[10]*o+c[14]*l,this.w=c[3]*t+c[7]*s+c[11]*o+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,o,l,h=e.elements,m=h[0],g=h[4],_=h[8],b=h[1],v=h[5],x=h[9],A=h[2],S=h[6],y=h[10];if(Math.abs(g-b)<.01&&Math.abs(_-A)<.01&&Math.abs(x-S)<.01){if(Math.abs(g+b)<.1&&Math.abs(_+A)<.1&&Math.abs(x+S)<.1&&Math.abs(m+v+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let L=(m+1)/2,C=(v+1)/2,I=(y+1)/2,N=(g+b)/4,M=(_+A)/4,P=(x+S)/4;return L>C&&L>I?L<.01?(s=0,o=.707106781,l=.707106781):(s=Math.sqrt(L),o=N/s,l=M/s):C>I?C<.01?(s=.707106781,o=0,l=.707106781):(o=Math.sqrt(C),s=N/o,l=P/o):I<.01?(s=.707106781,o=.707106781,l=0):(l=Math.sqrt(I),s=M/l,o=P/l),this.set(s,o,l,t),this}let w=Math.sqrt((S-x)*(S-x)+(_-A)*(_-A)+(b-g)*(b-g));return Math.abs(w)<.001&&(w=1),this.x=(S-x)/w,this.y=(_-A)/w,this.z=(b-g)/w,this.w=Math.acos((m+v+y-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this.w=gt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this.w=gt(this.w,e,t),this}clampLength(e,t){let s=this.length();return this.divideScalar(s||1).multiplyScalar(gt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};eg.prototype.isVector4=!0;var en=eg,_f=class extends Pr{constructor(e=1,t=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hi,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=s.depth,this.scissor=new en(0,0,e,t),this.scissorTest=!1,this.viewport=new en(0,0,e,t),this.textures=[];let o=s.count;for(let l=0;l<o;l++)this.textures[l]=new ii({width:e,height:t,depth:s.depth}),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveColorBuffer=s.resolveColorBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.storeMultisampledColorBuffer=s.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=s.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=s.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:hi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=s,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,s=e.textures.length;t<s;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let o=Object.assign({},e.textures[t].image);this.textures[t].source=new za(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},zi=class extends _f{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}},Wl=class extends ii{constructor(e=null,t=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=zn,this.minFilter=zn,this.wrapR=Cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Sf=class extends ii{constructor(e=null,t=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=zn,this.minFilter=zn,this.wrapR=Cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Vf=class Vf{constructor(e,t,s,o,l,c,f,h,m,g,_,b,v,x,A,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,c,f,h,m,g,_,b,v,x,A,S)}set(e,t,s,o,l,c,f,h,m,g,_,b,v,x,A,S){let y=this.elements;return y[0]=e,y[4]=t,y[8]=s,y[12]=o,y[1]=l,y[5]=c,y[9]=f,y[13]=h,y[2]=m,y[6]=g,y[10]=_,y[14]=b,y[3]=v,y[7]=x,y[11]=A,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vf().fromArray(this.elements)}copy(e){let t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){let t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,s=e.elements,o=1/va.setFromMatrixColumn(e,0).length(),l=1/va.setFromMatrixColumn(e,1).length(),c=1/va.setFromMatrixColumn(e,2).length();return t[0]=s[0]*o,t[1]=s[1]*o,t[2]=s[2]*o,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*c,t[9]=s[9]*c,t[10]=s[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,s=e.x,o=e.y,l=e.z,c=Math.cos(s),f=Math.sin(s),h=Math.cos(o),m=Math.sin(o),g=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){let b=c*g,v=c*_,x=f*g,A=f*_;t[0]=h*g,t[4]=-h*_,t[8]=m,t[1]=v+x*m,t[5]=b-A*m,t[9]=-f*h,t[2]=A-b*m,t[6]=x+v*m,t[10]=c*h}else if(e.order==="YXZ"){let b=h*g,v=h*_,x=m*g,A=m*_;t[0]=b+A*f,t[4]=x*f-v,t[8]=c*m,t[1]=c*_,t[5]=c*g,t[9]=-f,t[2]=v*f-x,t[6]=A+b*f,t[10]=c*h}else if(e.order==="ZXY"){let b=h*g,v=h*_,x=m*g,A=m*_;t[0]=b-A*f,t[4]=-c*_,t[8]=x+v*f,t[1]=v+x*f,t[5]=c*g,t[9]=A-b*f,t[2]=-c*m,t[6]=f,t[10]=c*h}else if(e.order==="ZYX"){let b=c*g,v=c*_,x=f*g,A=f*_;t[0]=h*g,t[4]=x*m-v,t[8]=b*m+A,t[1]=h*_,t[5]=A*m+b,t[9]=v*m-x,t[2]=-m,t[6]=f*h,t[10]=c*h}else if(e.order==="YZX"){let b=c*h,v=c*m,x=f*h,A=f*m;t[0]=h*g,t[4]=A-b*_,t[8]=x*_+v,t[1]=_,t[5]=c*g,t[9]=-f*g,t[2]=-m*g,t[6]=v*_+x,t[10]=b-A*_}else if(e.order==="XZY"){let b=c*h,v=c*m,x=f*h,A=f*m;t[0]=h*g,t[4]=-_,t[8]=m*g,t[1]=b*_+A,t[5]=c*g,t[9]=v*_-x,t[2]=x*_-v,t[6]=f*g,t[10]=A*_+b}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Tw,e,Ew)}lookAt(e,t,s){let o=this.elements;return Di.subVectors(e,t),Di.lengthSq()===0&&(Di.z=1),Di.normalize(),Ns.crossVectors(s,Di),Ns.lengthSq()===0&&(Math.abs(s.z)===1?Di.x+=1e-4:Di.z+=1e-4,Di.normalize(),Ns.crossVectors(s,Di)),Ns.normalize(),Lc.crossVectors(Di,Ns),o[0]=Ns.x,o[4]=Lc.x,o[8]=Di.x,o[1]=Ns.y,o[5]=Lc.y,o[9]=Di.y,o[2]=Ns.z,o[6]=Lc.z,o[10]=Di.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let s=e.elements,o=t.elements,l=this.elements,c=s[0],f=s[4],h=s[8],m=s[12],g=s[1],_=s[5],b=s[9],v=s[13],x=s[2],A=s[6],S=s[10],y=s[14],w=s[3],L=s[7],C=s[11],I=s[15],N=o[0],M=o[4],P=o[8],G=o[12],F=o[1],B=o[5],W=o[9],j=o[13],z=o[2],K=o[6],se=o[10],ee=o[14],me=o[3],ne=o[7],ce=o[11],he=o[15];return l[0]=c*N+f*F+h*z+m*me,l[4]=c*M+f*B+h*K+m*ne,l[8]=c*P+f*W+h*se+m*ce,l[12]=c*G+f*j+h*ee+m*he,l[1]=g*N+_*F+b*z+v*me,l[5]=g*M+_*B+b*K+v*ne,l[9]=g*P+_*W+b*se+v*ce,l[13]=g*G+_*j+b*ee+v*he,l[2]=x*N+A*F+S*z+y*me,l[6]=x*M+A*B+S*K+y*ne,l[10]=x*P+A*W+S*se+y*ce,l[14]=x*G+A*j+S*ee+y*he,l[3]=w*N+L*F+C*z+I*me,l[7]=w*M+L*B+C*K+I*ne,l[11]=w*P+L*W+C*se+I*ce,l[15]=w*G+L*j+C*ee+I*he,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],s=e[4],o=e[8],l=e[12],c=e[1],f=e[5],h=e[9],m=e[13],g=e[2],_=e[6],b=e[10],v=e[14],x=e[3],A=e[7],S=e[11],y=e[15],w=h*v-m*b,L=f*v-m*_,C=f*b-h*_,I=c*v-m*g,N=c*b-h*g,M=c*_-f*g;return t*(A*w-S*L+y*C)-s*(x*w-S*I+y*N)+o*(x*L-A*I+y*M)-l*(x*C-A*N+S*M)}determinantAffine(){let e=this.elements,t=e[0],s=e[4],o=e[8],l=e[1],c=e[5],f=e[9],h=e[2],m=e[6],g=e[10];return t*(c*g-f*m)-s*(l*g-f*h)+o*(l*m-c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){let o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=s),this}invert(){let e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],c=e[4],f=e[5],h=e[6],m=e[7],g=e[8],_=e[9],b=e[10],v=e[11],x=e[12],A=e[13],S=e[14],y=e[15],w=t*f-s*c,L=t*h-o*c,C=t*m-l*c,I=s*h-o*f,N=s*m-l*f,M=o*m-l*h,P=g*A-_*x,G=g*S-b*x,F=g*y-v*x,B=_*S-b*A,W=_*y-v*A,j=b*y-v*S,z=w*j-L*W+C*B+I*F-N*G+M*P;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let K=1/z;return e[0]=(f*j-h*W+m*B)*K,e[1]=(o*W-s*j-l*B)*K,e[2]=(A*M-S*N+y*I)*K,e[3]=(b*N-_*M-v*I)*K,e[4]=(h*F-c*j-m*G)*K,e[5]=(t*j-o*F+l*G)*K,e[6]=(S*C-x*M-y*L)*K,e[7]=(g*M-b*C+v*L)*K,e[8]=(c*W-f*F+m*P)*K,e[9]=(s*F-t*W-l*P)*K,e[10]=(x*N-A*C+y*w)*K,e[11]=(_*C-g*N-v*w)*K,e[12]=(f*G-c*B-h*P)*K,e[13]=(t*B-s*G+o*P)*K,e[14]=(A*L-x*I-S*w)*K,e[15]=(g*I-_*L+b*w)*K,this}scale(e){let t=this.elements,s=e.x,o=e.y,l=e.z;return t[0]*=s,t[4]*=o,t[8]*=l,t[1]*=s,t[5]*=o,t[9]*=l,t[2]*=s,t[6]*=o,t[10]*=l,t[3]*=s,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,o))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let s=Math.cos(t),o=Math.sin(t),l=1-s,c=e.x,f=e.y,h=e.z,m=l*c,g=l*f;return this.set(m*c+s,m*f-o*h,m*h+o*f,0,m*f+o*h,g*f+s,g*h-o*c,0,m*h-o*f,g*h+o*c,l*h*h+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,o,l,c){return this.set(1,s,l,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,s){let o=this.elements,l=t._x,c=t._y,f=t._z,h=t._w,m=l+l,g=c+c,_=f+f,b=l*m,v=l*g,x=l*_,A=c*g,S=c*_,y=f*_,w=h*m,L=h*g,C=h*_,I=s.x,N=s.y,M=s.z;return o[0]=(1-(A+y))*I,o[1]=(v+C)*I,o[2]=(x-L)*I,o[3]=0,o[4]=(v-C)*N,o[5]=(1-(b+y))*N,o[6]=(S+w)*N,o[7]=0,o[8]=(x+L)*M,o[9]=(S-w)*M,o[10]=(1-(b+A))*M,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,s){let o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];let l=this.determinantAffine();if(l===0)return s.set(1,1,1),t.identity(),this;let c=va.set(o[0],o[1],o[2]).length(),f=va.set(o[4],o[5],o[6]).length(),h=va.set(o[8],o[9],o[10]).length();l<0&&(c=-c),ur.copy(this);let m=1/c,g=1/f,_=1/h;return ur.elements[0]*=m,ur.elements[1]*=m,ur.elements[2]*=m,ur.elements[4]*=g,ur.elements[5]*=g,ur.elements[6]*=g,ur.elements[8]*=_,ur.elements[9]*=_,ur.elements[10]*=_,t.setFromRotationMatrix(ur),s.x=c,s.y=f,s.z=h,this}makePerspective(e,t,s,o,l,c,f=Ji,h=!1){let m=this.elements,g=2*l/(t-e),_=2*l/(s-o),b=(t+e)/(t-e),v=(s+o)/(s-o),x,A;if(h)x=l/(c-l),A=c*l/(c-l);else if(f===Ji)x=-(c+l)/(c-l),A=-2*c*l/(c-l);else if(f===ka)x=-c/(c-l),A=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return m[0]=g,m[4]=0,m[8]=b,m[12]=0,m[1]=0,m[5]=_,m[9]=v,m[13]=0,m[2]=0,m[6]=0,m[10]=x,m[14]=A,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,t,s,o,l,c,f=Ji,h=!1){let m=this.elements,g=2/(t-e),_=2/(s-o),b=-(t+e)/(t-e),v=-(s+o)/(s-o),x,A;if(h)x=1/(c-l),A=c/(c-l);else if(f===Ji)x=-2/(c-l),A=-(c+l)/(c-l);else if(f===ka)x=-1/(c-l),A=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return m[0]=g,m[4]=0,m[8]=0,m[12]=b,m[1]=0,m[5]=_,m[9]=0,m[13]=v,m[2]=0,m[6]=0,m[10]=x,m[14]=A,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){let t=this.elements,s=e.elements;for(let o=0;o<16;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){let s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}};Vf.prototype.isMatrix4=!0;var Ot=Vf,va=new H,ur=new Ot,Tw=new H(0,0,0),Ew=new H(1,1,1),Ns=new H,Lc=new H,Di=new H,Zy=new Ot,Jy=new Ir,is=class r{constructor(e=0,t=0,s=0,o=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,o=this._order){return this._x=e,this._y=t,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){let o=e.elements,l=o[0],c=o[4],f=o[8],h=o[1],m=o[5],g=o[9],_=o[2],b=o[6],v=o[10];switch(t){case"XYZ":this._y=Math.asin(gt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,v),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(b,m),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,v),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(gt(b,-1,1)),Math.abs(b)<.9999999?(this._y=Math.atan2(-_,v),this._z=Math.atan2(-c,m)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-gt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(b,v),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-c,m));break;case"YZX":this._z=Math.asin(gt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(f,v));break;case"XZY":this._z=Math.asin(-gt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(b,m),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-g,v),this._y=0);break;default:$e("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return Zy.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zy,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Jy.setFromEuler(this),this.setFromQuaternion(Jy,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};is.DEFAULT_ORDER="XYZ";var rs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Aw=0,Ky=new H,ya=new Ir,jr=new Ot,kc=new H,kl=new H,Rw=new H,Cw=new Ir,Qy=new H(1,0,0),eb=new H(0,1,0),tb=new H(0,0,1),nb={type:"added"},Pw={type:"removed"},ba={type:"childadded",child:null},Gp={type:"childremoved",child:null},On=class r extends Pr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Aw++}),this.uuid=ja(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new H,t=new is,s=new Ir,o=new H(1,1,1);function l(){s.setFromEuler(t,!1)}function c(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Ot},normalMatrix:{value:new it}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ya.setFromAxisAngle(e,t),this.quaternion.multiply(ya),this}rotateOnWorldAxis(e,t){return ya.setFromAxisAngle(e,t),this.quaternion.premultiply(ya),this}rotateX(e){return this.rotateOnAxis(Qy,e)}rotateY(e){return this.rotateOnAxis(eb,e)}rotateZ(e){return this.rotateOnAxis(tb,e)}translateOnAxis(e,t){return Ky.copy(e).applyQuaternion(this.quaternion),this.position.add(Ky.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Qy,e)}translateY(e){return this.translateOnAxis(eb,e)}translateZ(e){return this.translateOnAxis(tb,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(jr.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?kc.copy(e):kc.set(e,t,s);let o=this.parent;this.updateWorldMatrix(!0,!1),kl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jr.lookAt(kl,kc,this.up):jr.lookAt(kc,kl,this.up),this.quaternion.setFromRotationMatrix(jr),o&&(jr.extractRotation(o.matrixWorld),ya.setFromRotationMatrix(jr),this.quaternion.premultiply(ya.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(nb),ba.child=e,this.dispatchEvent(ba),ba.child=null):nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Pw),Gp.child=e,this.dispatchEvent(Gp),Gp.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),jr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jr.multiply(e.parent.matrixWorld)),e.applyMatrix4(jr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(nb),ba.child=e,this.dispatchEvent(ba),ba.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,o=this.children.length;s<o;s++){let c=this.children[s].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);let o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kl,e,Rw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kl,Cw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,s=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*s-l[8]*o,l[13]+=s-l[1]*t-l[5]*s-l[9]*o,l[14]+=o-l[2]*t-l[6]*s-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t,s=!1){let o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),t===!0){let l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0,s)}}toJSON(e){let t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);let f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){let h=f.shapes;if(Array.isArray(h))for(let m=0,g=h.length;m<g;m++){let _=h[m];l(e.shapes,_)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let f=[];for(let h=0,m=this.material.length;h<m;h++)f.push(l(e.materials,this.material[h]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){let h=this.animations[f];o.animations.push(l(e.animations,h))}}if(t){let f=c(e.geometries),h=c(e.materials),m=c(e.textures),g=c(e.images),_=c(e.shapes),b=c(e.skeletons),v=c(e.animations),x=c(e.nodes);f.length>0&&(s.geometries=f),h.length>0&&(s.materials=h),m.length>0&&(s.textures=m),g.length>0&&(s.images=g),_.length>0&&(s.shapes=_),b.length>0&&(s.skeletons=b),v.length>0&&(s.animations=v),x.length>0&&(s.nodes=x)}return s.object=o,s;function c(f){let h=[];for(let m in f){let g=f[m];delete g.metadata,h.push(g)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){let o=e.children[s];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};On.DEFAULT_UP=new H(0,1,0);On.DEFAULT_MATRIX_AUTO_UPDATE=!0;On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var dr=class extends On{constructor(){super(),this.isGroup=!0,this.type="Group"}},Iw={type:"move"},Oa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let o=null,l=null,c=null,f=this._targetRay,h=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){c=!0;for(let A of e.hand.values()){let S=t.getJointPose(A,s),y=this._getHandJoint(m,A);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}let g=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],b=g.position.distanceTo(_.position),v=.02,x=.005;m.inputState.pinching&&b>v+x?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&b<=v-x&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.quaternion,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(o=t.getPose(e.targetRaySpace,s),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(Iw)))}return f!==null&&(f.visible=o!==null),h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let s=new dr;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}},c_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ls={h:0,s:0,l:0},Dc={h:0,s:0,l:0};function Wp(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}var We=class{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){let o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=An){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.colorSpaceToWorking(this,t),this}setRGB(e,t,s,o=bt.workingColorSpace){return this.r=e,this.g=t,this.b=s,bt.colorSpaceToWorking(this,o),this}setHSL(e,t,s,o=bt.workingColorSpace){if(e=Gm(e,1),t=gt(t,0,1),s=gt(s,0,1),t===0)this.r=this.g=this.b=s;else{let l=s<=.5?s*(1+t):s+t-s*t,c=2*s-l;this.r=Wp(c,l,e+1/3),this.g=Wp(c,l,e),this.b=Wp(c,l,e-1/3)}return bt.colorSpaceToWorking(this,o),this}setStyle(e,t=An){function s(l){l!==void 0&&parseFloat(l)<1&&$e("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l,c=o[1],f=o[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(100,parseFloat(l[1]))/100,Math.min(100,parseFloat(l[2]))/100,Math.min(100,parseFloat(l[3]))/100,t);break;case"hsl":case"hsla":if(l=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(f))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:$e("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){let l=o[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);$e("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=An){let s=c_[e.toLowerCase()];return s!==void 0?this.setHex(s,t):$e("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ts(e.r),this.g=ts(e.g),this.b=ts(e.b),this}copyLinearToSRGB(e){return this.r=Na(e.r),this.g=Na(e.g),this.b=Na(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=An){return bt.workingToColorSpace(ni.copy(this),e),Math.round(gt(ni.r*255,0,255))*65536+Math.round(gt(ni.g*255,0,255))*256+Math.round(gt(ni.b*255,0,255))}getHexString(e=An){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bt.workingColorSpace){bt.workingToColorSpace(ni.copy(this),t);let s=ni.r,o=ni.g,l=ni.b,c=Math.max(s,o,l),f=Math.min(s,o,l),h,m,g=(f+c)/2;if(f===c)h=0,m=0;else{let _=c-f;switch(m=g<=.5?_/(c+f):_/(2-c-f),c){case s:h=(o-l)/_+(o<l?6:0);break;case o:h=(l-s)/_+2;break;case l:h=(s-o)/_+4;break}h/=6}return e.h=h,e.s=m,e.l=g,e}getRGB(e,t=bt.workingColorSpace){return bt.workingToColorSpace(ni.copy(this),t),e.r=ni.r,e.g=ni.g,e.b=ni.b,e}getStyle(e=An){bt.workingToColorSpace(ni.copy(this),e);let t=ni.r,s=ni.g,o=ni.b;return e!==An?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(o*255)})`}offsetHSL(e,t,s){return this.getHSL(Ls),this.setHSL(Ls.h+e,Ls.s+t,Ls.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(Ls),e.getHSL(Dc);let s=Hl(Ls.h,Dc.h,t),o=Hl(Ls.s,Dc.s,t),l=Hl(Ls.l,Dc.l,t);return this.setHSL(s,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,s=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*o,this.g=l[1]*t+l[4]*s+l[7]*o,this.b=l[2]*t+l[5]*s+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ni=new We;We.NAMES=c_;var Xl=class r{constructor(e,t=1,s=1e3){this.isFog=!0,this.name="",this.color=new We(e),this.near=t,this.far=s}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},So=class extends On{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new is,this.environmentIntensity=1,this.environmentRotation=new is,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},cr=new H,Zr=new H,Xp=new H,Jr=new H,_a=new H,Sa=new H,ib=new H,qp=new H,$p=new H,Yp=new H,jp=new en,Zp=new en,Jp=new en,es=class r{constructor(e=new H,t=new H,s=new H){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,o){o.subVectors(s,t),cr.subVectors(e,t),o.cross(cr);let l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,s,o,l){cr.subVectors(o,t),Zr.subVectors(s,t),Xp.subVectors(e,t);let c=cr.dot(cr),f=cr.dot(Zr),h=cr.dot(Xp),m=Zr.dot(Zr),g=Zr.dot(Xp),_=c*m-f*f;if(_===0)return l.set(0,0,0),null;let b=1/_,v=(m*h-f*g)*b,x=(c*g-f*h)*b;return l.set(1-v-x,x,v)}static containsPoint(e,t,s,o){return this.getBarycoord(e,t,s,o,Jr)===null?!1:Jr.x>=0&&Jr.y>=0&&Jr.x+Jr.y<=1}static getInterpolation(e,t,s,o,l,c,f,h){return this.getBarycoord(e,t,s,o,Jr)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Jr.x),h.addScaledVector(c,Jr.y),h.addScaledVector(f,Jr.z),h)}static getInterpolatedAttribute(e,t,s,o,l,c){return jp.setScalar(0),Zp.setScalar(0),Jp.setScalar(0),jp.fromBufferAttribute(e,t),Zp.fromBufferAttribute(e,s),Jp.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(jp,l.x),c.addScaledVector(Zp,l.y),c.addScaledVector(Jp,l.z),c}static isFrontFacing(e,t,s,o){return cr.subVectors(s,t),Zr.subVectors(e,t),cr.cross(Zr).dot(o)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,o){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,s,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return cr.subVectors(this.c,this.b),Zr.subVectors(this.a,this.b),cr.cross(Zr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,o,l){return r.getInterpolation(e,this.a,this.b,this.c,t,s,o,l)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let s=this.a,o=this.b,l=this.c,c,f;_a.subVectors(o,s),Sa.subVectors(l,s),qp.subVectors(e,s);let h=_a.dot(qp),m=Sa.dot(qp);if(h<=0&&m<=0)return t.copy(s);$p.subVectors(e,o);let g=_a.dot($p),_=Sa.dot($p);if(g>=0&&_<=g)return t.copy(o);let b=h*_-g*m;if(b<=0&&h>=0&&g<=0&&h-g>0)return c=h/(h-g),t.copy(s).addScaledVector(_a,c);Yp.subVectors(e,l);let v=_a.dot(Yp),x=Sa.dot(Yp);if(x>=0&&v<=x)return t.copy(l);let A=v*m-h*x;if(A<=0&&m>=0&&x<=0)return f=m/(m-x),t.copy(s).addScaledVector(Sa,f);let S=g*x-v*_;if(S<=0&&_-g>=0&&v-x>=0)return ib.subVectors(l,o),f=(_-g)/(_-g+(v-x)),t.copy(o).addScaledVector(ib,f);let y=1/(S+A+b);return c=A*y,f=b*y,t.copy(s).addScaledVector(_a,c).addScaledVector(Sa,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Nr=class{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(fr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(fr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let s=fr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let s=e.geometry;if(s!==void 0){let l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,fr):fr.fromBufferAttribute(l,c),fr.applyMatrix4(e.matrixWorld),this.expandByPoint(fr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Fc.copy(s.boundingBox)),Fc.applyMatrix4(e.matrixWorld),this.union(Fc)}let o=e.children;for(let l=0,c=o.length;l<c;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fr),fr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Dl),Uc.subVectors(this.max,Dl),xa.subVectors(e.a,Dl),Ma.subVectors(e.b,Dl),wa.subVectors(e.c,Dl),ks.subVectors(Ma,xa),Ds.subVectors(wa,Ma),mo.subVectors(xa,wa);let t=[0,-ks.z,ks.y,0,-Ds.z,Ds.y,0,-mo.z,mo.y,ks.z,0,-ks.x,Ds.z,0,-Ds.x,mo.z,0,-mo.x,-ks.y,ks.x,0,-Ds.y,Ds.x,0,-mo.y,mo.x,0];return!Kp(t,xa,Ma,wa,Uc)||(t=[1,0,0,0,1,0,0,0,1],!Kp(t,xa,Ma,wa,Uc))?!1:(zc.crossVectors(ks,Ds),t=[zc.x,zc.y,zc.z],Kp(t,xa,Ma,wa,Uc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Kr=[new H,new H,new H,new H,new H,new H,new H,new H],fr=new H,Fc=new Nr,xa=new H,Ma=new H,wa=new H,ks=new H,Ds=new H,mo=new H,Dl=new H,Uc=new H,zc=new H,go=new H;function Kp(r,e,t,s,o){for(let l=0,c=r.length-3;l<=c;l+=3){go.fromArray(r,l);let f=o.x*Math.abs(go.x)+o.y*Math.abs(go.y)+o.z*Math.abs(go.z),h=e.dot(go),m=t.dot(go),g=s.dot(go);if(Math.max(-Math.max(h,m,g),Math.min(h,m,g))>f)return!1}return!0}var En=new H,Oc=new lt,Nw=0,hr=class extends Pr{constructor(e,t,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Nw++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=i_,this.updateRanges=[],this.gpuType=Ki,this.version=0,this._normalizationScale=e!==void 0?Xm(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[s+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)Oc.fromBufferAttribute(this,t),Oc.applyMatrix3(e),this.setXY(t,Oc.x,Oc.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)En.fromBufferAttribute(this,t),En.applyMatrix3(e),this.setXYZ(t,En.x,En.y,En.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)En.fromBufferAttribute(this,t),En.applyMatrix4(e),this.setXYZ(t,En.x,En.y,En.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)En.fromBufferAttribute(this,t),En.applyNormalMatrix(e),this.setXYZ(t,En.x,En.y,En.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)En.fromBufferAttribute(this,t),En.transformDirection(e),this.setXYZ(t,En.x,En.y,En.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=this._denormalize(s)),s}setComponent(e,t,s){return this.normalized&&(s=this._normalize(s)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,o){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),s=this._normalize(s),o=this._normalize(o)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this}setXYZW(e,t,s,o,l){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),s=this._normalize(s),o=this._normalize(o),l=this._normalize(l)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):l_(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):u_(e,this.array)}};var ql=class extends hr{constructor(e,t,s){super(new Uint16Array(e),t,s)}};var $l=class extends hr{constructor(e,t,s){super(new Uint32Array(e),t,s)}};var Bt=class extends hr{constructor(e,t,s){super(new Float32Array(e),t,s)}},Lw=new Nr,Fl=new H,Qp=new H,ss=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let s=this.center;t!==void 0?s.copy(t):Lw.setFromPoints(e).getCenter(s);let o=0;for(let l=0,c=e.length;l<c;l++)o=Math.max(o,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fl.subVectors(e,this.center);let t=Fl.lengthSq();if(t>this.radius*this.radius){let s=Math.sqrt(t),o=(s-this.radius)*.5;this.center.addScaledVector(Fl,o/s),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qp.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fl.copy(e.center).add(Qp)),this.expandByPoint(Fl.copy(e.center).sub(Qp))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},kw=0,Zi=new Ot,em=new On,Ta=new H,Fi=new Nr,Ul=new Nr,Un=new H,ri=class r extends Pr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kw++}),this.uuid=ja(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sw(e)?$l:ql)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let s=this.attributes.normal;if(s!==void 0){let l=new it().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}let o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Zi.makeRotationFromQuaternion(e),this.applyMatrix4(Zi),this}rotateX(e){return Zi.makeRotationX(e),this.applyMatrix4(Zi),this}rotateY(e){return Zi.makeRotationY(e),this.applyMatrix4(Zi),this}rotateZ(e){return Zi.makeRotationZ(e),this.applyMatrix4(Zi),this}translate(e,t,s){return Zi.makeTranslation(e,t,s),this.applyMatrix4(Zi),this}scale(e,t,s){return Zi.makeScale(e,t,s),this.applyMatrix4(Zi),this}lookAt(e){return em.lookAt(e),em.updateMatrix(),this.applyMatrix4(em.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ta).negate(),this.translate(Ta.x,Ta.y,Ta.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let s=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];s.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Bt(s,3))}else{let s=Math.min(e.length,t.count);for(let o=0;o<s;o++){let l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&$e("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let l=t[s];Fi.setFromBufferAttribute(l),this.morphTargetsRelative?(Un.addVectors(this.boundingBox.min,Fi.min),this.boundingBox.expandByPoint(Un),Un.addVectors(this.boundingBox.max,Fi.max),this.boundingBox.expandByPoint(Un)):(this.boundingBox.expandByPoint(Fi.min),this.boundingBox.expandByPoint(Fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ss);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){let s=this.boundingSphere.center;if(Fi.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){let f=t[l];Ul.setFromBufferAttribute(f),this.morphTargetsRelative?(Un.addVectors(Fi.min,Ul.min),Fi.expandByPoint(Un),Un.addVectors(Fi.max,Ul.max),Fi.expandByPoint(Un)):(Fi.expandByPoint(Ul.min),Fi.expandByPoint(Ul.max))}Fi.getCenter(s);let o=0;for(let l=0,c=e.count;l<c;l++)Un.fromBufferAttribute(e,l),o=Math.max(o,s.distanceToSquared(Un));if(t)for(let l=0,c=t.length;l<c;l++){let f=t[l],h=this.morphTargetsRelative;for(let m=0,g=f.count;m<g;m++)Un.fromBufferAttribute(f,m),h&&(Ta.fromBufferAttribute(e,m),Un.add(Ta)),o=Math.max(o,s.distanceToSquared(Un))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let s=t.position,o=t.normal,l=t.uv,c=this.getAttribute("tangent");(c===void 0||c.count!==s.count)&&(c=new hr(new Float32Array(4*s.count),4),this.setAttribute("tangent",c));let f=[],h=[],m=new Uint8Array(s.count);for(let G=0;G<s.count;G++)f[G]=new H,h[G]=new H;let g=new H,_=new H,b=new H,v=new lt,x=new lt,A=new lt,S=new H,y=new H;function w(G,F,B){m[G]=m[F]=m[B]=1,g.fromBufferAttribute(s,G),_.fromBufferAttribute(s,F),b.fromBufferAttribute(s,B),v.fromBufferAttribute(l,G),x.fromBufferAttribute(l,F),A.fromBufferAttribute(l,B),_.sub(g),b.sub(g),x.sub(v),A.sub(v);let W=1/(x.x*A.y-A.x*x.y);isFinite(W)&&(S.copy(_).multiplyScalar(A.y).addScaledVector(b,-x.y).multiplyScalar(W),y.copy(b).multiplyScalar(x.x).addScaledVector(_,-A.x).multiplyScalar(W),f[G].add(S),f[F].add(S),f[B].add(S),h[G].add(y),h[F].add(y),h[B].add(y))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let G=0,F=L.length;G<F;++G){let B=L[G],W=B.start,j=B.count;for(let z=W,K=W+j;z<K;z+=3)w(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let C=new H,I=new H,N=new H,M=new H;function P(G){N.fromBufferAttribute(o,G),M.copy(N);let F=f[G];C.copy(F),C.sub(N.multiplyScalar(N.dot(F))).normalize(),I.crossVectors(M,F);let W=I.dot(h[G])<0?-1:1;c.setXYZW(G,C.x,C.y,C.z,W)}for(let G=0,F=s.count;G<F;++G)m[G]&&P(G);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==t.count)s=new hr(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let b=0,v=s.count;b<v;b++)s.setXYZ(b,0,0,0);let o=new H,l=new H,c=new H,f=new H,h=new H,m=new H,g=new H,_=new H;if(e)for(let b=0,v=e.count;b<v;b+=3){let x=e.getX(b+0),A=e.getX(b+1),S=e.getX(b+2);o.fromBufferAttribute(t,x),l.fromBufferAttribute(t,A),c.fromBufferAttribute(t,S),g.subVectors(c,l),_.subVectors(o,l),g.cross(_),f.fromBufferAttribute(s,x),h.fromBufferAttribute(s,A),m.fromBufferAttribute(s,S),f.add(g),h.add(g),m.add(g),s.setXYZ(x,f.x,f.y,f.z),s.setXYZ(A,h.x,h.y,h.z),s.setXYZ(S,m.x,m.y,m.z)}else for(let b=0,v=t.count;b<v;b+=3)o.fromBufferAttribute(t,b+0),l.fromBufferAttribute(t,b+1),c.fromBufferAttribute(t,b+2),g.subVectors(c,l),_.subVectors(o,l),g.cross(_),s.setXYZ(b+0,g.x,g.y,g.z),s.setXYZ(b+1,g.x,g.y,g.z),s.setXYZ(b+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)Un.fromBufferAttribute(e,t),Un.normalize(),e.setXYZ(t,Un.x,Un.y,Un.z)}toNonIndexed(){function e(f,h){let m=f.array,g=f.itemSize,_=f.normalized,b=new m.constructor(h.length*g),v=0,x=0;for(let A=0,S=h.length;A<S;A++){f.isInterleavedBufferAttribute?v=h[A]*f.data.stride+f.offset:v=h[A]*g;for(let y=0;y<g;y++)b[x++]=m[v++]}return new hr(b,g,_)}if(this.index===null)return $e("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,s=this.index.array,o=this.attributes;for(let f in o){let h=o[f],m=e(h,s);t.setAttribute(f,m)}let l=this.morphAttributes;for(let f in l){let h=[],m=l[f];for(let g=0,_=m.length;g<_;g++){let b=m[g],v=e(b,s);h.push(v)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;let c=this.groups;for(let f=0,h=c.length;f<h;f++){let m=c[f];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let h=this.parameters;for(let m in h)h[m]!==void 0&&(e[m]=h[m]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let s=this.attributes;for(let h in s){let m=s[h];e.data.attributes[h]=m.toJSON(e.data)}let o={},l=!1;for(let h in this.morphAttributes){let m=this.morphAttributes[h],g=[];for(let _=0,b=m.length;_<b;_++){let v=m[_];g.push(v.toJSON(e.data))}g.length>0&&(o[h]=g,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);let c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));let f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let s=e.index;s!==null&&this.setIndex(s.clone());let o=e.attributes;for(let m in o){let g=o[m];this.setAttribute(m,g.clone(t))}let l=e.morphAttributes;for(let m in l){let g=[],_=l[m];for(let b=0,v=_.length;b<v;b++)g.push(_[b].clone(t));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;let c=e.groups;for(let m=0,g=c.length;m<g;m++){let _=c[m];this.addGroup(_.start,_.count,_.materialIndex)}let f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());let h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var tm=new H,Dw=new H,Fw=new it,Ui=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,o){return this.normal.set(e,t,s),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){let o=tm.subVectors(s,t).cross(Dw.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,s=!0){let o=e.delta(tm),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let c=-(e.start.dot(this.normal)+this.constant)/l;return s===!0&&(c<0||c>1)?null:t.copy(e.start).addScaledVector(o,c)}intersectsLine(e){let t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let s=t||Fw.getNormalMatrix(e),o=this.coplanarPoint(tm).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Uw=0,os=class extends Pr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Uw++}),this.uuid=ja(),this.name="",this.type="Material",this.blending=qa,this.side=Vs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xm,this.blendDst=Mm,this.blendEquation=Po,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=La,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jb,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=af,this.stencilZFail=af,this.stencilZPass=af,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let s=e[t];if(s===void 0){$e(`Material: parameter '${t}' has value of undefined.`);continue}let o=this[t];if(o===void 0){$e(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(s):o&&o.isVector2&&s&&s.isVector2||o&&o.isEuler&&s&&s.isEuler||o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[t]=s}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,s.blending=this.blending,s.side=this.side,s.shadowSide=this.shadowSide,s.vertexColors=this.vertexColors,s.opacity=this.opacity,s.transparent=this.transparent,s.blendSrc=this.blendSrc,s.blendDst=this.blendDst,s.blendEquation=this.blendEquation,s.blendSrcAlpha=this.blendSrcAlpha,s.blendDstAlpha=this.blendDstAlpha,s.blendEquationAlpha=this.blendEquationAlpha,s.blendColor=this.blendColor.getHex(),s.blendAlpha=this.blendAlpha,s.depthFunc=this.depthFunc,s.depthTest=this.depthTest,s.depthWrite=this.depthWrite,s.colorWrite=this.colorWrite,s.clipIntersection=this.clipIntersection,s.clipShadows=this.clipShadows,s.stencilWriteMask=this.stencilWriteMask,s.stencilFunc=this.stencilFunc,s.stencilRef=this.stencilRef,s.stencilFuncMask=this.stencilFuncMask,s.stencilFail=this.stencilFail,s.stencilZFail=this.stencilZFail,s.stencilZPass=this.stencilZPass,s.stencilWrite=this.stencilWrite,s.polygonOffset=this.polygonOffset,s.polygonOffsetFactor=this.polygonOffsetFactor,s.polygonOffsetUnits=this.polygonOffsetUnits,s.dithering=this.dithering,s.alphaTest=this.alphaTest,s.alphaHash=this.alphaHash,s.alphaToCoverage=this.alphaToCoverage,s.premultipliedAlpha=this.premultipliedAlpha,s.forceSinglePass=this.forceSinglePass,s.allowOverride=this.allowOverride,s.visible=this.visible,s.toneMapped=this.toneMapped,s.name=this.name,this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(s.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(s.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(s.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(s.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(s.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(s.clippingPlanes=this.clippingPlanes.map(l=>l.toJSON())),this.rotation!==void 0&&(s.rotation=this.rotation),this.depthPacking!==void 0&&(s.depthPacking=this.depthPacking),this.linewidth!==void 0&&(s.linewidth=this.linewidth),this.linecap!==void 0&&(s.linecap=this.linecap),this.linejoin!==void 0&&(s.linejoin=this.linejoin),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.wireframe!==void 0&&(s.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(s.flatShading=this.flatShading),this.fog!==void 0&&(s.fog=this.fog),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(l){let c=[];for(let f in l){let h=l[f];delete h.metadata,c.push(h)}return c}if(t){let l=o(e.textures),c=o(e.images);l.length>0&&(s.textures=l),c.length>0&&(s.images=c)}return s}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new We().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(s=>new Ui().fromJSON(s))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new lt().fromArray(s)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new lt().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,s=null;if(t!==null){let o=t.length;s=new Array(o);for(let l=0;l!==o;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Qr=new H,nm=new H,Bc=new H,Hc=new H,Ba=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Qr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qr.copy(this.origin).addScaledVector(this.direction,t),Qr.distanceToSquared(e))}distanceSqToSegment(e,t,s,o){nm.copy(e).add(t).multiplyScalar(.5),Bc.copy(t).sub(e).normalize(),Hc.copy(this.origin).sub(nm);let l=e.distanceTo(t)*.5,c=-this.direction.dot(Bc),f=Hc.dot(this.direction),h=-Hc.dot(Bc),m=Hc.lengthSq(),g=Math.abs(1-c*c),_,b,v,x;if(g>0)if(_=c*h-f,b=c*f-h,x=l*g,_>=0)if(b>=-x)if(b<=x){let A=1/g;_*=A,b*=A,v=_*(_+c*b+2*f)+b*(c*_+b+2*h)+m}else b=l,_=Math.max(0,-(c*b+f)),v=-_*_+b*(b+2*h)+m;else b=-l,_=Math.max(0,-(c*b+f)),v=-_*_+b*(b+2*h)+m;else b<=-x?(_=Math.max(0,-(-c*l+f)),b=_>0?-l:Math.min(Math.max(-l,-h),l),v=-_*_+b*(b+2*h)+m):b<=x?(_=0,b=Math.min(Math.max(-l,-h),l),v=b*(b+2*h)+m):(_=Math.max(0,-(c*l+f)),b=_>0?l:Math.min(Math.max(-l,-h),l),v=-_*_+b*(b+2*h)+m);else b=c>0?-l:l,_=Math.max(0,-(c*b+f)),v=-_*_+b*(b+2*h)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(nm).addScaledVector(Bc,b),v}intersectSphere(e,t){if(e.radius<0)return null;Qr.subVectors(e.center,this.origin);let s=Qr.dot(this.direction),o=Qr.dot(Qr)-s*s,l=e.radius*e.radius;if(o>l)return null;let c=Math.sqrt(l-o),f=s-c,h=s+c;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){let s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,o,l,c,f,h,m=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,b=this.origin;return m>=0?(s=(e.min.x-b.x)*m,o=(e.max.x-b.x)*m):(s=(e.max.x-b.x)*m,o=(e.min.x-b.x)*m),g>=0?(l=(e.min.y-b.y)*g,c=(e.max.y-b.y)*g):(l=(e.max.y-b.y)*g,c=(e.min.y-b.y)*g),s>c||l>o||((l>s||isNaN(s))&&(s=l),(c<o||isNaN(o))&&(o=c),_>=0?(f=(e.min.z-b.z)*_,h=(e.max.z-b.z)*_):(f=(e.max.z-b.z)*_,h=(e.min.z-b.z)*_),s>h||f>o)||((f>s||s!==s)&&(s=f),(h<o||o!==o)&&(o=h),o<0)?null:this.at(s>=0?s:o,t)}intersectsBox(e){return this.intersectBox(e,Qr)!==null}intersectTriangle(e,t,s,o,l){let c=this.origin,f=this.direction,h=f.x,m=f.y,g=f.z,_=e.x-c.x,b=e.y-c.y,v=e.z-c.z,x=t.x-c.x,A=t.y-c.y,S=t.z-c.z,y=s.x-c.x,w=s.y-c.y,L=s.z-c.z,C=Math.abs(h),I=Math.abs(m),N=Math.abs(g),M,P,G,F,B,W,j,z,K,se,ee,me;if(C>=I&&C>=N?(G=h,W=_,K=x,me=y,h>=0?(M=m,P=g,F=b,B=v,j=A,z=S,se=w,ee=L):(M=g,P=m,F=v,B=b,j=S,z=A,se=L,ee=w)):I>=N?(G=m,W=b,K=A,me=w,m>=0?(M=g,P=h,F=v,B=_,j=S,z=x,se=L,ee=y):(M=h,P=g,F=_,B=v,j=x,z=S,se=y,ee=L)):(G=g,W=v,K=S,me=L,g>=0?(M=h,P=m,F=_,B=b,j=x,z=A,se=y,ee=w):(M=m,P=h,F=b,B=_,j=A,z=x,se=w,ee=y)),G===0)return null;let ne=M/G,ce=P/G,he=1/G,Be=F-ne*W,Ve=B-ce*W,re=j-ne*K,Pe=z-ce*K,De=se-ne*me,Xe=ee-ce*me,Ne=De*Pe-Xe*re,et=Be*Xe-Ve*De,Wt=re*Ve-Pe*Be;if(o){if(Ne<0||et<0||Wt<0)return null}else if((Ne<0||et<0||Wt<0)&&(Ne>0||et>0||Wt>0))return null;let Ye=Ne+et+Wt;if(Ye===0)return null;let Et=he*(Ne*W+et*K+Wt*me);return(Ye>0?Et<0:Et>0)?null:this.at(Et/Ye,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Lr=class extends os{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new is,this.combine=wm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},rb=new Ot,vo=new Ba,Vc=new ss,sb=new H,Gc=new H,Wc=new H,Xc=new H,im=new H,qc=new H,ob=new H,$c=new H,jn=class extends On{constructor(e=new ri,t=new Lr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){let o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){let f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){let s=this.geometry,o=s.attributes.position,l=s.morphAttributes.position,c=s.morphTargetsRelative;t.fromBufferAttribute(o,e);let f=this.morphTargetInfluences;if(l&&f){qc.set(0,0,0);for(let h=0,m=l.length;h<m;h++){let g=f[h],_=l[h];g!==0&&(im.fromBufferAttribute(_,e),c?qc.addScaledVector(im,g):qc.addScaledVector(im.sub(t),g))}t.add(qc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let s=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Vc.copy(s.boundingSphere),Vc.applyMatrix4(l),vo.copy(e.ray).recast(e.near),!(Vc.containsPoint(vo.origin)===!1&&(vo.intersectSphere(Vc,sb)===null||vo.origin.distanceToSquared(sb)>(e.far-e.near)**2))&&(rb.copy(l).invert(),vo.copy(e.ray).applyMatrix4(rb),!(s.boundingBox!==null&&vo.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,vo)))}_computeIntersections(e,t,s){let o,l=this.geometry,c=this.material,f=l.index,h=l.attributes.position,m=l.attributes.uv,g=l.attributes.uv1,_=l.attributes.normal,b=l.groups,v=l.drawRange;if(f!==null)if(Array.isArray(c))for(let x=0,A=b.length;x<A;x++){let S=b[x],y=c[S.materialIndex],w=Math.max(S.start,v.start),L=Math.min(f.count,Math.min(S.start+S.count,v.start+v.count));for(let C=w,I=L;C<I;C+=3){let N=f.getX(C),M=f.getX(C+1),P=f.getX(C+2);o=Yc(this,y,e,s,m,g,_,N,M,P),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{let x=Math.max(0,v.start),A=Math.min(f.count,v.start+v.count);for(let S=x,y=A;S<y;S+=3){let w=f.getX(S),L=f.getX(S+1),C=f.getX(S+2);o=Yc(this,c,e,s,m,g,_,w,L,C),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(c))for(let x=0,A=b.length;x<A;x++){let S=b[x],y=c[S.materialIndex],w=Math.max(S.start,v.start),L=Math.min(h.count,Math.min(S.start+S.count,v.start+v.count));for(let C=w,I=L;C<I;C+=3){let N=C,M=C+1,P=C+2;o=Yc(this,y,e,s,m,g,_,N,M,P),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{let x=Math.max(0,v.start),A=Math.min(h.count,v.start+v.count);for(let S=x,y=A;S<y;S+=3){let w=S,L=S+1,C=S+2;o=Yc(this,c,e,s,m,g,_,w,L,C),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}};function zw(r,e,t,s,o,l,c,f){let h;if(e.side===mi?h=s.intersectTriangle(c,l,o,!0,f):h=s.intersectTriangle(o,l,c,e.side===Vs,f),h===null)return null;$c.copy(f),$c.applyMatrix4(r.matrixWorld);let m=t.ray.origin.distanceTo($c);return m<t.near||m>t.far?null:{distance:m,point:$c.clone(),object:r}}function Yc(r,e,t,s,o,l,c,f,h,m){r.getVertexPosition(f,Gc),r.getVertexPosition(h,Wc),r.getVertexPosition(m,Xc);let g=zw(r,e,t,s,Gc,Wc,Xc,ob);if(g){let _=new H;es.getBarycoord(ob,Gc,Wc,Xc,_),o&&(g.uv=es.getInterpolatedAttribute(o,f,h,m,_,new lt)),l&&(g.uv1=es.getInterpolatedAttribute(l,f,h,m,_,new lt)),c&&(g.normal=es.getInterpolatedAttribute(c,f,h,m,_,new H),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));let b={a:f,b:h,c:m,normal:new H,materialIndex:0};es.getNormal(Gc,Wc,Xc,b.normal),g.face=b,g.barycoord=_}return g}var Yl=class extends ii{constructor(e=null,t=1,s=1,o,l,c,f,h,m=zn,g=zn,_,b){super(null,c,f,h,m,g,o,l,_,b),this.isDataTexture=!0,this.image={data:e,width:t,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var jl=class extends hr{constructor(e,t,s,o=1){super(e,t,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ea=new Ot,ab=new Ot,jc=[],lb=new Nr,Ow=new Ot,zl=new jn,Ol=new ss,Zl=class extends jn{constructor(e,t,s){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new jl(new Float32Array(s*16),16),this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let o=0;o<s;o++)this.setMatrixAt(o,Ow)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Nr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<t;s++)this.getMatrixAt(s,Ea),lb.copy(e.boundingBox).applyMatrix4(Ea),this.boundingBox.union(lb)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ss),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<t;s++)this.getMatrixAt(s,Ea),Ol.copy(e.boundingSphere).applyMatrix4(Ea),this.boundingSphere.union(Ol)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let s=t.morphTargetInfluences,o=this.morphTexture.source.data.data,l=s.length+1,c=e*l+1;for(let f=0;f<s.length;f++)s[f]=o[c+f]}raycast(e,t){let s=this.matrixWorld,o=this.count;if(zl.geometry=this.geometry,zl.material=this.material,zl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ol.copy(this.boundingSphere),Ol.applyMatrix4(s),e.ray.intersectsSphere(Ol)!==!1))for(let l=0;l<o;l++){this.getMatrixAt(l,Ea),ab.multiplyMatrices(s,Ea),zl.matrixWorld=ab,zl.raycast(e,jc);for(let c=0,f=jc.length;c<f;c++){let h=jc[c];h.instanceId=l,h.object=this,t.push(h)}jc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new jl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let s=t.morphTargetInfluences,o=s.length+1;this.morphTexture===null&&(this.morphTexture=new Yl(new Float32Array(o*this.count),o,this.count,jf,Ki));let l=this.morphTexture.source.data.data,c=0;for(let m=0;m<s.length;m++)c+=s[m];let f=this.geometry.morphTargetsRelative?1:1-c,h=o*e;return l[h]=f,l.set(s,h+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},yo=new ss,Bw=new lt(.5,.5),Zc=new H,Us=class{constructor(e=new Ui,t=new Ui,s=new Ui,o=new Ui,l=new Ui,c=new Ui){this.planes=[e,t,s,o,l,c]}set(e,t,s,o,l,c){let f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(s),f[3].copy(o),f[4].copy(l),f[5].copy(c),this}copy(e){let t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=Ji,s=!1){let o=this.planes,l=e.elements,c=l[0],f=l[1],h=l[2],m=l[3],g=l[4],_=l[5],b=l[6],v=l[7],x=l[8],A=l[9],S=l[10],y=l[11],w=l[12],L=l[13],C=l[14],I=l[15];if(o[0].setComponents(m-c,v-g,y-x,I-w).normalize(),o[1].setComponents(m+c,v+g,y+x,I+w).normalize(),o[2].setComponents(m+f,v+_,y+A,I+L).normalize(),o[3].setComponents(m-f,v-_,y-A,I-L).normalize(),s)o[4].setComponents(h,b,S,C).normalize(),o[5].setComponents(m-h,v-b,y-S,I-C).normalize();else if(o[4].setComponents(m-h,v-b,y-S,I-C).normalize(),t===Ji)o[5].setComponents(m+h,v+b,y+S,I+C).normalize();else if(t===ka)o[5].setComponents(h,b,S,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yo.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),yo.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yo)}intersectsSprite(e){yo.center.set(0,0,0);let t=Bw.distanceTo(e.center);return yo.radius=.7071067811865476+t,yo.applyMatrix4(e.matrixWorld),this.intersectsSphere(yo)}intersectsSphere(e){let t=this.planes,s=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<o)return!1;return!0}intersectsBox(e){let t=this.planes;for(let s=0;s<6;s++){let o=t[s];if(Zc.x=o.normal.x>0?e.max.x:e.min.x,Zc.y=o.normal.y>0?e.max.y:e.min.y,Zc.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Zc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ub=new Ot,xf=class r{constructor(){this.coordinateSystem=Ji,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,s=this._frustums;for(let o=0;o<t.length;o++){let l=t[o];ub.multiplyMatrices(l.projectionMatrix,l.matrixWorldInverse),s[o]===void 0&&(s[o]=new Us),s[o].setFromProjectionMatrix(ub,l.coordinateSystem,l.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let s=0;s<this._count;s++)if(t[s].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let s=0;s<this._count;s++)if(t[s].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let s=0;s<this._count;s++)if(t[s].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let s=0;s<this._count;s++)if(t[s].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let s=0;s<this._count;s++)if(t[s].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,s=e._frustums;for(let o=0;o<e._count;o++)t[o]===void 0&&(t[o]=new Us),t[o].copy(s[o]);return this._count=e._count,this}clone(){return new r().copy(this)}};var kr=class extends os{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Mf=new H,wf=new H,cb=new Ot,Bl=new Ba,Jc=new ss,rm=new H,fb=new H,Tf=class extends On{constructor(e=new ri,t=new kr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,s=[0];for(let o=1,l=t.count;o<l;o++)Mf.fromBufferAttribute(t,o-1),wf.fromBufferAttribute(t,o),s[o]=s[o-1],s[o]+=Mf.distanceTo(wf);e.setAttribute("lineDistance",new Bt(s,1))}else $e("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let s=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,c=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Jc.copy(s.boundingSphere),Jc.applyMatrix4(o),Jc.radius+=l,e.ray.intersectsSphere(Jc)===!1)return;cb.copy(o).invert(),Bl.copy(e.ray).applyMatrix4(cb);let f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,m=this.isLineSegments?2:1,g=s.index,b=s.attributes.position;if(g!==null){let v=Math.max(0,c.start),x=Math.min(g.count,c.start+c.count);for(let A=v,S=x-1;A<S;A+=m){let y=g.getX(A),w=g.getX(A+1),L=Kc(this,e,Bl,h,y,w,A);L&&t.push(L)}if(this.isLineLoop){let A=g.getX(x-1),S=g.getX(v),y=Kc(this,e,Bl,h,A,S,x-1);y&&t.push(y)}}else{let v=Math.max(0,c.start),x=Math.min(b.count,c.start+c.count);for(let A=v,S=x-1;A<S;A+=m){let y=Kc(this,e,Bl,h,A,A+1,A);y&&t.push(y)}if(this.isLineLoop){let A=Kc(this,e,Bl,h,x-1,v,x-1);A&&t.push(A)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){let o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){let f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}};function Kc(r,e,t,s,o,l,c){let f=r.geometry.attributes.position;if(Mf.fromBufferAttribute(f,o),wf.fromBufferAttribute(f,l),t.distanceSqToSegment(Mf,wf,rm,fb)>s)return;rm.applyMatrix4(r.matrixWorld);let m=e.ray.origin.distanceTo(rm);if(!(m<e.near||m>e.far))return{distance:m,point:fb.clone().applyMatrix4(r.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:r}}var db=new H,hb=new H,xo=class extends Tf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,s=[];for(let o=0,l=t.count;o<l;o+=2)db.fromBufferAttribute(t,o),hb.fromBufferAttribute(t,o+1),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+db.distanceTo(hb);e.setAttribute("lineDistance",new Bt(s,1))}else $e("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Jl=class extends ii{constructor(e=[],t=Io,s,o,l,c,f,h,m,g){super(e,t,s,o,l,c,f,h,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Kl=class extends ii{constructor(e,t,s,o,l,c,f,h,m){super(e,t,s,o,l,c,f,h,m),this.isCanvasTexture=!0,this.needsUpdate=!0}};var as=class extends ii{constructor(e,t,s=pr,o,l,c,f=zn,h=zn,m,g=ns,_=1){if(g!==ns&&g!==cs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let b={width:e,height:t,depth:_};super(b,o,l,c,f,h,g,s,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new za(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ql=class extends as{constructor(e,t=pr,s=Io,o,l,c=zn,f=zn,h,m=ns){let g={width:e,height:e,depth:1},_=[g,g,g,g,g,g];super(e,e,t,s,o,l,c,f,h,m),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},eu=class extends ii{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Dr=class r extends ri{constructor(e=1,t=1,s=1,o=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:o,heightSegments:l,depthSegments:c};let f=this;o=Math.floor(o),l=Math.floor(l),c=Math.floor(c);let h=[],m=[],g=[],_=[],b=0,v=0;x("z","y","x",-1,-1,s,t,e,c,l,0),x("z","y","x",1,-1,s,t,-e,c,l,1),x("x","z","y",1,1,e,s,t,o,c,2),x("x","z","y",1,-1,e,s,-t,o,c,3),x("x","y","z",1,-1,e,t,s,o,l,4),x("x","y","z",-1,-1,e,t,-s,o,l,5),this.setIndex(h),this.setAttribute("position",new Bt(m,3)),this.setAttribute("normal",new Bt(g,3)),this.setAttribute("uv",new Bt(_,2));function x(A,S,y,w,L,C,I,N,M,P,G){let F=C/M,B=I/P,W=C/2,j=I/2,z=N/2,K=M+1,se=P+1,ee=0,me=0,ne=new H;for(let ce=0;ce<se;ce++){let he=ce*B-j;for(let Be=0;Be<K;Be++){let Ve=Be*F-W;ne[A]=Ve*w,ne[S]=he*L,ne[y]=z,m.push(ne.x,ne.y,ne.z),ne[A]=0,ne[S]=0,ne[y]=N>0?1:-1,g.push(ne.x,ne.y,ne.z),_.push(Be/M),_.push(1-ce/P),ee+=1}}for(let ce=0;ce<P;ce++)for(let he=0;he<M;he++){let Be=b+he+K*ce,Ve=b+he+K*(ce+1),re=b+(he+1)+K*(ce+1),Pe=b+(he+1)+K*ce;h.push(Be,Ve,Pe),h.push(Ve,re,Pe),me+=6}f.addGroup(v,me,G),v+=me,b+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Mo=class r extends ri{constructor(e=1,t=1,s=1,o=32,l=1,c=!1,f=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:s,radialSegments:o,heightSegments:l,openEnded:c,thetaStart:f,thetaLength:h};let m=this;o=Math.floor(o),l=Math.floor(l);let g=[],_=[],b=[],v=[],x=0,A=[],S=s/2,y=0;w(),c===!1&&(e>0&&L(!0),t>0&&L(!1)),this.setIndex(g),this.setAttribute("position",new Bt(_,3)),this.setAttribute("normal",new Bt(b,3)),this.setAttribute("uv",new Bt(v,2));function w(){let C=new H,I=new H,N=0,M=(t-e)/s;for(let P=0;P<=l;P++){let G=[],F=P/l,B=F*(t-e)+e;for(let W=0;W<=o;W++){let j=W/o,z=j*h+f,K=Math.sin(z),se=Math.cos(z);I.x=B*K,I.y=-F*s+S,I.z=B*se,_.push(I.x,I.y,I.z),C.set(K,M,se).normalize(),b.push(C.x,C.y,C.z),v.push(j,1-F),G.push(x++)}A.push(G)}for(let P=0;P<o;P++)for(let G=0;G<l;G++){let F=A[G][P],B=A[G+1][P],W=A[G+1][P+1],j=A[G][P+1];(e>0||G!==0)&&(g.push(F,B,j),N+=3),(t>0||G!==l-1)&&(g.push(B,W,j),N+=3)}m.addGroup(y,N,0),y+=N}function L(C){let I=x,N=new lt,M=new H,P=0,G=C===!0?e:t,F=C===!0?1:-1;for(let W=1;W<=o;W++)_.push(0,S*F,0),b.push(0,F,0),v.push(.5,.5),x++;let B=x;for(let W=0;W<=o;W++){let z=W/o*h+f,K=Math.cos(z),se=Math.sin(z);M.x=G*se,M.y=S*F,M.z=G*K,_.push(M.x,M.y,M.z),b.push(0,F,0),N.x=K*.5+.5,N.y=se*.5*F+.5,v.push(N.x,N.y),x++}for(let W=0;W<o;W++){let j=I+W,z=B+W;C===!0?g.push(z,z+1,j):g.push(z+1,z,j),P+=3}m.addGroup(y,P,C===!0?1:2),y+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Qc=new H,ef=new H,sm=new H,tf=new es,tu=class extends ri{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let o=Math.pow(10,4),l=Math.cos(Ia*t),c=e.getIndex(),f=e.getAttribute("position"),h=c?c.count:f.count,m=[0,0,0],g=["a","b","c"],_=new Array(3),b=new Map,v=[];for(let x=0;x<h;x+=3){c?(m[0]=c.getX(x),m[1]=c.getX(x+1),m[2]=c.getX(x+2)):(m[0]=x,m[1]=x+1,m[2]=x+2);let{a:A,b:S,c:y}=tf;if(A.fromBufferAttribute(f,m[0]),S.fromBufferAttribute(f,m[1]),y.fromBufferAttribute(f,m[2]),tf.getNormal(sm),_[0]=`${Math.round(A.x*o)},${Math.round(A.y*o)},${Math.round(A.z*o)}`,_[1]=`${Math.round(S.x*o)},${Math.round(S.y*o)},${Math.round(S.z*o)}`,_[2]=`${Math.round(y.x*o)},${Math.round(y.y*o)},${Math.round(y.z*o)}`,!(_[0]===_[1]||_[1]===_[2]||_[2]===_[0]))for(let w=0;w<3;w++){let L=(w+1)%3,C=_[w],I=_[L],N=tf[g[w]],M=tf[g[L]],P=`${C}_${I}`,G=`${I}_${C}`,F=b.get(G);F?(sm.dot(F.normal)<=l&&(v.push(N.x,N.y,N.z),v.push(M.x,M.y,M.z)),b.set(G,null)):b.has(P)||b.set(P,{index0:m[w],index1:m[L],normal:sm.clone()})}}for(let x of b.values())if(x){let{index0:A,index1:S}=x;Qc.fromBufferAttribute(f,A),ef.fromBufferAttribute(f,S),v.push(Qc.x,Qc.y,Qc.z),v.push(ef.x,ef.y,ef.z)}this.setAttribute("position",new Bt(v,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Ef=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){$e("Curve: .getPoint() not implemented.")}getPointAt(e,t){let s=this.getUtoTmapping(e);return this.getPoint(s,t)}getPoints(e=5){let t=[];for(let s=0;s<=e;s++)t.push(this.getPoint(s/e));return t}getSpacedPoints(e=5){let t=[];for(let s=0;s<=e;s++)t.push(this.getPointAt(s/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],s,o=this.getPoint(0),l=0;t.push(0);for(let c=1;c<=e;c++)s=this.getPoint(c/e),l+=s.distanceTo(o),t.push(l),o=s;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let s=this.getLengths(),o=0,l=s.length,c;t?c=t:c=e*s[l-1];let f=0,h=l-1,m;for(;f<=h;)if(o=Math.floor(f+(h-f)/2),m=s[o]-c,m<0)f=o+1;else if(m>0)h=o-1;else{h=o;break}if(o=h,s[o]===c)return o/(l-1);let g=s[o],b=s[o+1]-g,v=(c-g)/b;return(o+v)/(l-1)}getTangent(e,t){let o=e-1e-4,l=e+1e-4;o<0&&(o=0),l>1&&(l=1);let c=this.getPoint(o),f=this.getPoint(l),h=t||(c.isVector2?new lt:new H);return h.copy(f).sub(c).normalize(),h}getTangentAt(e,t){let s=this.getUtoTmapping(e);return this.getTangent(s,t)}computeFrenetFrames(e,t=!1){let s=new H,o=[],l=[],c=[],f=new H,h=new Ot;for(let v=0;v<=e;v++){let x=v/e;o[v]=this.getTangentAt(x,new H)}l[0]=new H,c[0]=new H;let m=Number.MAX_VALUE,g=Math.abs(o[0].x),_=Math.abs(o[0].y),b=Math.abs(o[0].z);g<=m&&(m=g,s.set(1,0,0)),_<=m&&(m=_,s.set(0,1,0)),b<=m&&s.set(0,0,1),f.crossVectors(o[0],s).normalize(),l[0].crossVectors(o[0],f),c[0].crossVectors(o[0],l[0]);for(let v=1;v<=e;v++){if(l[v]=l[v-1].clone(),c[v]=c[v-1].clone(),f.crossVectors(o[v-1],o[v]),f.length()>Number.EPSILON){f.normalize();let x=Math.acos(gt(o[v-1].dot(o[v]),-1,1));l[v].applyMatrix4(h.makeRotationAxis(f,x))}c[v].crossVectors(o[v],l[v])}if(t===!0){let v=Math.acos(gt(l[0].dot(l[e]),-1,1));v/=e,o[0].dot(f.crossVectors(l[0],l[e]))>0&&(v=-v);for(let x=1;x<=e;x++)l[x].applyMatrix4(h.makeRotationAxis(o[x],v*x)),c[x].crossVectors(o[x],l[x])}return{tangents:o,normals:l,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}};function qm(){let r=0,e=0,t=0,s=0;function o(l,c,f,h){r=l,e=f,t=-3*l+3*c-2*f-h,s=2*l-2*c+f+h}return{initCatmullRom:function(l,c,f,h,m){o(c,f,m*(f-l),m*(h-c))},initNonuniformCatmullRom:function(l,c,f,h,m,g,_){let b=(c-l)/m-(f-l)/(m+g)+(f-c)/g,v=(f-c)/g-(h-c)/(g+_)+(h-f)/_;b*=g,v*=g,o(c,f,b,v)},calc:function(l){let c=l*l,f=c*l;return r+e*l+t*c+s*f}}}var pb=new H,mb=new H,om=new qm,am=new qm,lm=new qm,Ha=class extends Ef{constructor(e=[],t=!1,s="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=s,this.tension=o}getPoint(e,t=new H){let s=t,o=this.points,l=o.length,c=(l-(this.closed?0:1))*e,f=Math.floor(c),h=c-f;this.closed?f+=f>0?0:(Math.floor(Math.abs(f)/l)+1)*l:h===0&&f===l-1&&(f=l-2,h=1);let m,g;this.closed||f>0?m=o[(f-1)%l]:(mb.subVectors(o[0],o[1]).add(o[0]),m=mb);let _=o[f%l],b=o[(f+1)%l];if(this.closed||f+2<l?g=o[(f+2)%l]:(pb.subVectors(o[l-1],o[l-2]).add(o[l-1]),g=pb),this.curveType==="centripetal"||this.curveType==="chordal"){let v=this.curveType==="chordal"?.5:.25,x=Math.pow(m.distanceToSquared(_),v),A=Math.pow(_.distanceToSquared(b),v),S=Math.pow(b.distanceToSquared(g),v);A<1e-4&&(A=1),x<1e-4&&(x=A),S<1e-4&&(S=A),om.initNonuniformCatmullRom(m.x,_.x,b.x,g.x,x,A,S),am.initNonuniformCatmullRom(m.y,_.y,b.y,g.y,x,A,S),lm.initNonuniformCatmullRom(m.z,_.z,b.z,g.z,x,A,S)}else this.curveType==="catmullrom"&&(om.initCatmullRom(m.x,_.x,b.x,g.x,this.tension),am.initCatmullRom(m.y,_.y,b.y,g.y,this.tension),lm.initCatmullRom(m.z,_.z,b.z,g.z,this.tension));return s.set(om.calc(h),am.calc(h),lm.calc(h)),s}copy(e){super.copy(e),this.points=[];for(let t=0,s=e.points.length;t<s;t++){let o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,s=this.points.length;t<s;t++){let o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,s=e.points.length;t<s;t++){let o=e.points[t];this.points.push(new H().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};var ls=class r extends ri{constructor(e=1,t=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:o};let l=e/2,c=t/2,f=Math.floor(s),h=Math.floor(o),m=f+1,g=h+1,_=e/f,b=t/h,v=[],x=[],A=[],S=[];for(let y=0;y<g;y++){let w=y*b-c;for(let L=0;L<m;L++){let C=L*_-l;x.push(C,-w,0),A.push(0,0,1),S.push(L/f),S.push(1-y/h)}}for(let y=0;y<h;y++)for(let w=0;w<f;w++){let L=w+m*y,C=w+m*(y+1),I=w+1+m*(y+1),N=w+1+m*y;v.push(L,C,N),v.push(C,I,N)}this.setIndex(v),this.setAttribute("position",new Bt(x,3)),this.setAttribute("normal",new Bt(A,3)),this.setAttribute("uv",new Bt(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},nu=class r extends ri{constructor(e=.5,t=1,s=32,o=1,l=0,c=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:s,phiSegments:o,thetaStart:l,thetaLength:c},s=Math.max(3,s),o=Math.max(1,o);let f=[],h=[],m=[],g=[],_=e,b=(t-e)/o,v=new H,x=new lt;for(let A=0;A<=o;A++){for(let S=0;S<=s;S++){let y=l+S/s*c;v.x=_*Math.cos(y),v.y=_*Math.sin(y),h.push(v.x,v.y,v.z),m.push(0,0,1),x.x=(v.x/t+1)/2,x.y=(v.y/t+1)/2,g.push(x.x,x.y)}_+=b}for(let A=0;A<o;A++){let S=A*(s+1);for(let y=0;y<s;y++){let w=y+S,L=w,C=w+s+1,I=w+s+2,N=w+1;f.push(L,C,N),f.push(C,I,N)}}this.setIndex(f),this.setAttribute("position",new Bt(h,3)),this.setAttribute("normal",new Bt(m,3)),this.setAttribute("uv",new Bt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var iu=class r extends ri{constructor(e=1,t=32,s=16,o=0,l=Math.PI*2,c=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:s,phiStart:o,phiLength:l,thetaStart:c,thetaLength:f},t=Math.max(3,Math.floor(t)),s=Math.max(2,Math.floor(s));let h=Math.min(c+f,Math.PI),m=0,g=[],_=new H,b=new H,v=[],x=[],A=[],S=[];for(let y=0;y<=s;y++){let w=[],L=y/s,C=c+L*f,I=e*Math.cos(C),N=Math.sqrt(e*e-I*I),M=0;y===0&&c===0?M=.5/t:y===s&&h===Math.PI&&(M=-.5/t);for(let P=0;P<=t;P++){let G=P/t,F=o+G*l;_.x=-N*Math.cos(F),_.y=I,_.z=N*Math.sin(F),x.push(_.x,_.y,_.z),b.copy(_).normalize(),A.push(b.x,b.y,b.z),S.push(G+M,1-L),w.push(m++)}g.push(w)}for(let y=0;y<s;y++)for(let w=0;w<t;w++){let L=g[y][w+1],C=g[y][w],I=g[y+1][w],N=g[y+1][w+1];(y!==0||c>0)&&v.push(L,C,N),(y!==s-1||h<Math.PI)&&v.push(C,I,N)}this.setIndex(v),this.setAttribute("position",new Bt(x,3)),this.setAttribute("normal",new Bt(A,3)),this.setAttribute("uv",new Bt(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ru=class r extends ri{constructor(e=1,t=.4,s=12,o=48,l=Math.PI*2,c=0,f=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:s,tubularSegments:o,arc:l,thetaStart:c,thetaLength:f},s=Math.floor(s),o=Math.floor(o);let h=[],m=[],g=[],_=[],b=new H,v=new H,x=new H;for(let A=0;A<=s;A++){let S=c+A/s*f;for(let y=0;y<=o;y++){let w=y/o*l;v.x=(e+t*Math.cos(S))*Math.cos(w),v.y=(e+t*Math.cos(S))*Math.sin(w),v.z=t*Math.sin(S),m.push(v.x,v.y,v.z),b.x=e*Math.cos(w),b.y=e*Math.sin(w),x.subVectors(v,b).normalize(),g.push(x.x,x.y,x.z),_.push(y/o),_.push(A/s)}}for(let A=1;A<=s;A++)for(let S=1;S<=o;S++){let y=(o+1)*A+S-1,w=(o+1)*(A-1)+S-1,L=(o+1)*(A-1)+S,C=(o+1)*A+S;h.push(y,w,C),h.push(w,L,C)}this.setIndex(h),this.setAttribute("position",new Bt(m,3)),this.setAttribute("normal",new Bt(g,3)),this.setAttribute("uv",new Bt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Lo(r){let e={};for(let t in r){e[t]={};for(let s in r[t]){let o=r[t][s];if(gb(o))o.isRenderTargetTexture?($e("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=o.clone();else if(Array.isArray(o))if(gb(o[0])){let l=[];for(let c=0,f=o.length;c<f;c++)l[c]=o[c].clone();e[t][s]=l}else e[t][s]=o.slice();else e[t][s]=o}}return e}function ai(r){let e={};for(let t=0;t<r.length;t++){let s=Lo(r[t]);for(let o in s)e[o]=s[o]}return e}function gb(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function Hw(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function $m(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}var f_={clone:Lo,merge:ai},Vw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,pi=class extends os{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vw,this.fragmentShader=Gw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Lo(e.uniforms),this.uniformsGroups=Hw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let o in this.uniforms){let c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let s={};for(let o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let s in e.uniforms){let o=e.uniforms[s];switch(this.uniforms[s]={},o.type){case"t":this.uniforms[s].value=t[o.value]||null;break;case"c":this.uniforms[s].value=new We().setHex(o.value);break;case"v2":this.uniforms[s].value=new lt().fromArray(o.value);break;case"v3":this.uniforms[s].value=new H().fromArray(o.value);break;case"v4":this.uniforms[s].value=new en().fromArray(o.value);break;case"m3":this.uniforms[s].value=new it().fromArray(o.value);break;case"m4":this.uniforms[s].value=new Ot().fromArray(o.value);break;default:this.uniforms[s].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let s in e.extensions)this.extensions[s]=e.extensions[s];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Af=class extends pi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Mi=class extends os{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cd,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new is,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Va=class extends Mi{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new lt(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new We(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new We(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new We(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return bo('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){bo('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Rf=class extends os{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Cf=class extends os{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Aa(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function nf(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}var zs=class{constructor(e,t,s,o){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=o!==void 0?o:new t.constructor(s),this.sampleValues=t,this.valueSize=s,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,s=this._cachedIndex,o=t[s],l=t[s-1];e:{t:{let c;n:{i:if(!(e<o)){for(let f=s+2;;){if(o===void 0){if(e<l)break i;return s=t.length,this._cachedIndex=s,this.copySampleValue_(s-1)}if(s===f)break;if(l=o,o=t[++s],e<o)break t}c=t.length;break n}if(!(e>=l)){let f=t[1];e<f&&(s=2,l=f);for(let h=s-2;;){if(l===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===h)break;if(o=l,l=t[--s-1],e>=l)break t}c=s,s=0;break n}break e}for(;s<c;){let f=s+c>>>1;e<t[f]?c=f:s=f+1}if(o=t[s],l=t[s-1],l===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(o===void 0)return s=t.length,this._cachedIndex=s,this.copySampleValue_(s-1)}this._cachedIndex=s,this.intervalChanged_(s,l,o)}return this.interpolate_(s,l,e,o)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o;for(let c=0;c!==o;++c)t[c]=s[l+c];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Pf=class extends zs{constructor(e,t,s,o){super(e,t,s,o),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fm,endingEnd:fm}}intervalChanged_(e,t,s){let o=this.parameterPositions,l=e-2,c=e+1,f=o[l],h=o[c];if(f===void 0)switch(this.getSettings_().endingStart){case dm:l=e,f=2*t-s;break;case hm:l=o.length-2,f=t+o[l]-o[l+1];break;default:l=e,f=s}if(h===void 0)switch(this.getSettings_().endingEnd){case dm:c=e,h=2*s-t;break;case hm:c=1,h=s+o[1]-o[0];break;default:c=e-1,h=t}let m=(s-t)*.5,g=this.valueSize;this._weightPrev=m/(t-f),this._weightNext=m/(h-s),this._offsetPrev=l*g,this._offsetNext=c*g}interpolate_(e,t,s,o){let l=this.resultBuffer,c=this.sampleValues,f=this.valueSize,h=e*f,m=h-f,g=this._offsetPrev,_=this._offsetNext,b=this._weightPrev,v=this._weightNext,x=(s-t)/(o-t),A=x*x,S=A*x,y=-b*S+2*b*A-b*x,w=(1+b)*S+(-1.5-2*b)*A+(-.5+b)*x+1,L=(-1-v)*S+(1.5+v)*A+.5*x,C=v*S-v*A;for(let I=0;I!==f;++I)l[I]=y*c[g+I]+w*c[m+I]+L*c[h+I]+C*c[_+I];return l}},If=class extends zs{constructor(e,t,s,o){super(e,t,s,o)}interpolate_(e,t,s,o){let l=this.resultBuffer,c=this.sampleValues,f=this.valueSize,h=e*f,m=h-f,g=(s-t)/(o-t),_=1-g;for(let b=0;b!==f;++b)l[b]=c[m+b]*_+c[h+b]*g;return l}},Nf=class extends zs{constructor(e,t,s,o){super(e,t,s,o)}interpolate_(e){return this.copySampleValue_(e-1)}},Lf=class extends zs{interpolate_(e,t,s,o){let l=this.resultBuffer,c=this.sampleValues,f=this.valueSize,h=e*f,m=h-f,g=this.inTangents,_=this.outTangents;if(!g||!_){let x=(s-t)/(o-t),A=1-x;for(let S=0;S!==f;++S)l[S]=c[m+S]*A+c[h+S]*x;return l}let b=f*2,v=e-1;for(let x=0;x!==f;++x){let A=c[m+x],S=c[h+x],y=v*b+x*2,w=_[y],L=_[y+1],C=e*b+x*2,I=g[C],N=g[C+1],M=Xw(s,t,w,I,o);l[x]=d_(M,A,L,N,S)}return l}};function d_(r,e,t,s,o){let l=1-r;return l*l*l*e+3*l*l*r*t+3*l*r*r*s+r*r*r*o}function Ww(r,e,t,s,o){let l=1-r;return 3*l*l*(t-e)+6*l*r*(s-t)+3*r*r*(o-s)}function Xw(r,e,t,s,o){let l=(r-e)/(o-e);for(let c=0;c<8;c++){let f=d_(l,e,t,s,o)-r;if(Math.abs(f)<1e-10)break;let h=Ww(l,e,t,s,o);if(Math.abs(h)<1e-10)break;l=Math.max(0,Math.min(1,l-f/h))}return l}var Oi=class{constructor(e,t,s,o){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Aa(t,this.TimeBufferType),this.values=Aa(s,this.ValueBufferType),this.setInterpolation(o||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,s;if(t.toJSON!==this.toJSON)s=t.toJSON(e);else{s={name:e.name,times:Aa(e.times,Array),values:Aa(e.values,Array)};let o=e.getInterpolation();o!==e.DefaultInterpolation&&(s.interpolation=o),nf(e.settings)&&(s.settings={inTangents:Aa(e.settings.inTangents,Array),outTangents:Aa(e.settings.outTangents,Array)})}return s.type=e.ValueTypeName,s}InterpolantFactoryMethodDiscrete(e){return new Nf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new If(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Pf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Lf(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Vl:t=this.InterpolantFactoryMethodDiscrete;break;case yf:t=this.InterpolantFactoryMethodLinear;break;case of:t=this.InterpolantFactoryMethodSmooth;break;case cm:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let s="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(s);return $e("KeyframeTrack:",s),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Vl;case this.InterpolantFactoryMethodLinear:return yf;case this.InterpolantFactoryMethodSmooth:return of;case this.InterpolantFactoryMethodBezier:return cm}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let s=0,o=t.length;s!==o;++s)t[s]+=e;nf(this.settings)&&(vb(this.settings.inTangents,e),vb(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let s=0,o=t.length;s!==o;++s)t[s]*=e;nf(this.settings)&&(yb(this.settings.inTangents,e),yb(this.settings.outTangents,e))}return this}trim(e,t){let s=this.times,o=s.length,l=0,c=o-1;for(;l!==o&&s[l]<e;)++l;for(;c!==-1&&s[c]>t;)--c;if(++c,l!==0||c!==o){l>=c&&(c=Math.max(c,1),l=c-1);let f=this.getValueSize();this.times=s.slice(l,c),this.values=this.values.slice(l*f,c*f)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(nt("KeyframeTrack: Invalid value size in track.",this),e=!1);let s=this.times,o=this.values,l=s.length;l===0&&(nt("KeyframeTrack: Track is empty.",this),e=!1);let c=null;for(let f=0;f!==l;f++){let h=s[f];if(typeof h=="number"&&isNaN(h)){nt("KeyframeTrack: Time is not a valid number.",this,f,h),e=!1;break}if(c!==null&&c>h){nt("KeyframeTrack: Out of order keys.",this,f,h,c),e=!1;break}c=h}if(o!==void 0&&ow(o))for(let f=0,h=o.length;f!==h;++f){let m=o[f];if(isNaN(m)){nt("KeyframeTrack: Value is not a valid number.",this,f,m),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),s=this.getValueSize(),o=this.getInterpolation()===of,l=e.length-1,c=1;for(let f=1;f<l;++f){let h=!1,m=e[f],g=e[f+1];if(m!==g&&(f!==1||m!==e[0]))if(o)h=!0;else{let _=f*s,b=_-s,v=_+s;for(let x=0;x!==s;++x){let A=t[_+x];if(A!==t[b+x]||A!==t[v+x]){h=!0;break}}}if(h){if(f!==c){e[c]=e[f];let _=f*s,b=c*s;for(let v=0;v!==s;++v)t[b+v]=t[_+v]}++c}}if(l>0){e[c]=e[l];for(let f=l*s,h=c*s,m=0;m!==s;++m)t[h+m]=t[f+m];++c}return c!==e.length?(this.times=e.slice(0,c),this.values=t.slice(0,c*s)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),s=this.constructor,o=new s(this.name,e,t);return o.createInterpolant=this.createInterpolant,nf(this.settings)&&(o.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),o}};function vb(r,e){for(let t=0,s=r.length;t!==s;t+=2)r[t]+=e}function yb(r,e){for(let t=0,s=r.length;t!==s;t+=2)r[t]*=e}Oi.prototype.ValueTypeName="";Oi.prototype.TimeBufferType=Float32Array;Oi.prototype.ValueBufferType=Float32Array;Oi.prototype.DefaultInterpolation=yf;var Os=class extends Oi{constructor(e,t,s){super(e,t,s)}};Os.prototype.ValueTypeName="bool";Os.prototype.ValueBufferType=Array;Os.prototype.DefaultInterpolation=Vl;Os.prototype.InterpolantFactoryMethodLinear=void 0;Os.prototype.InterpolantFactoryMethodSmooth=void 0;var kf=class extends Oi{constructor(e,t,s,o){super(e,t,s,o)}};kf.prototype.ValueTypeName="color";var Df=class extends Oi{constructor(e,t,s,o){super(e,t,s,o)}};Df.prototype.ValueTypeName="number";var Ff=class extends zs{constructor(e,t,s,o){super(e,t,s,o)}interpolate_(e,t,s,o){let l=this.resultBuffer,c=this.sampleValues,f=this.valueSize,h=(s-t)/(o-t),m=e*f;for(let g=m+f;m!==g;m+=4)Ir.slerpFlat(l,0,c,m-f,c,m,h);return l}},su=class extends Oi{constructor(e,t,s,o){super(e,t,s,o)}InterpolantFactoryMethodLinear(e){return new Ff(this.times,this.values,this.getValueSize(),e)}};su.prototype.ValueTypeName="quaternion";su.prototype.InterpolantFactoryMethodSmooth=void 0;var Bs=class extends Oi{constructor(e,t,s){super(e,t,s)}};Bs.prototype.ValueTypeName="string";Bs.prototype.ValueBufferType=Array;Bs.prototype.DefaultInterpolation=Vl;Bs.prototype.InterpolantFactoryMethodLinear=void 0;Bs.prototype.InterpolantFactoryMethodSmooth=void 0;var Uf=class extends Oi{constructor(e,t,s,o){super(e,t,s,o)}};Uf.prototype.ValueTypeName="vector";var lf={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(bb(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!bb(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function bb(r){try{let e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var zf=class{constructor(e,t,s){let o=this,l=!1,c=0,f=0,h,m=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=s,this._abortController=null,this.itemStart=function(g){f++,l===!1&&o.onStart!==void 0&&o.onStart(g,c,f),l=!0},this.itemEnd=function(g){c++,o.onProgress!==void 0&&o.onProgress(g,c,f),c===f&&(l=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(g){o.onError!==void 0&&o.onError(g)},this.resolveURL=function(g){return g=g.normalize("NFC"),h?h(g):g},this.setURLModifier=function(g){return h=g,this},this.addHandler=function(g,_){return m.push(g,_),this},this.removeHandler=function(g){let _=m.indexOf(g);return _!==-1&&m.splice(_,2),this},this.getHandler=function(g){for(let _=0,b=m.length;_<b;_+=2){let v=m[_],x=m[_+1];if(v.global&&(v.lastIndex=0),v.test(g))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},h_=new zf,Ga=class{constructor(e){this.manager=e!==void 0?e:h_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let s=this;return new Promise(function(o,l){s.load(e,o,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Ga.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ra=new WeakMap,Of=class extends Ga{constructor(e){super(e)}load(e,t,s,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let l=this,c=lf.get(`image:${e}`);if(c!==void 0){if(c.complete===!0)l.manager.itemStart(e),setTimeout(function(){t&&t(c),l.manager.itemEnd(e)},0);else{let _=Ra.get(c);_===void 0&&(_=[],Ra.set(c,_)),_.push({onLoad:t,onError:o})}return c}let f=Da("img");function h(){g(),t&&t(this);let _=Ra.get(this)||[];for(let b=0;b<_.length;b++){let v=_[b];v.onLoad&&v.onLoad(this)}Ra.delete(this),l.manager.itemEnd(e)}function m(_){g(),o&&o(_),lf.remove(`image:${e}`);let b=Ra.get(this)||[];for(let v=0;v<b.length;v++){let x=b[v];x.onError&&x.onError(_)}Ra.delete(this),l.manager.itemError(e),l.manager.itemEnd(e)}function g(){f.removeEventListener("load",h,!1),f.removeEventListener("error",m,!1)}return f.addEventListener("load",h,!1),f.addEventListener("error",m,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),lf.add(`image:${e}`,f),l.manager.itemStart(e),f.fetchPriority=this.priority,f.src=e,f}};var ou=class extends Ga{constructor(e){super(e)}load(e,t,s,o){let l=new ii,c=new Of(this.manager);return c.setPriority(this.priority),c.setCache(this.cache),c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(f){l.image=f,l.needsUpdate=!0,t!==void 0&&t(l)},s,o),l}},au=class extends On{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var um=new Ot,_b=new H,Sb=new H,Bf=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.mapType=oi,this.map=null,this.mapPass=null,this.matrix=new Ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Us,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new en(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;_b.setFromMatrixPosition(e.matrixWorld),t.position.copy(_b),Sb.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Sb),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,s,o){um.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),s.setFromProjectionMatrix(um,e.coordinateSystem,e.reversedDepth);let l=this._frameExtents,c=o?o.z/l.x:1,f=o?o.w/l.y:1,h=o?o.x/l.x:0,m=o?o.y/l.y:0;e.coordinateSystem===ka||e.reversedDepth?t.set(.5*c,0,0,.5*c+h,0,.5*f,0,.5*f+m,0,0,1,0,0,0,0,1):t.set(.5*c,0,0,.5*c+h,0,.5*f,0,.5*f+m,0,0,.5,.5,0,0,0,1),t.multiply(um)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},rf=new H,sf=new Ir,Rr=new H,lu=class extends On{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot,this.coordinateSystem=Ji,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(rf,sf,Rr),Rr.x===1&&Rr.y===1&&Rr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(rf,sf,Rr.set(1,1,1)).invert()}updateWorldMatrix(e,t,s=!1){super.updateWorldMatrix(e,t,s),this.matrixWorld.decompose(rf,sf,Rr),Rr.x===1&&Rr.y===1&&Rr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(rf,sf,Rr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Fs=new H,xb=new lt,Mb=new lt,di=class extends lu{constructor(e=50,t=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ua*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ia*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ua*2*Math.atan(Math.tan(Ia*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){Fs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fs.x,Fs.y).multiplyScalar(-e/Fs.z),Fs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Fs.x,Fs.y).multiplyScalar(-e/Fs.z)}getViewSize(e,t){return this.getViewBounds(e,xb,Mb),t.subVectors(Mb,xb)}setViewOffset(e,t,s,o,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ia*.5*this.fov)/this.zoom,s=2*t,o=this.aspect*s,l=-.5*o,c=this.view;if(this.view!==null&&this.view.enabled){let h=c.fullWidth,m=c.fullHeight;l+=c.offsetX*o/h,t-=c.offsetY*s/m,o*=c.width/h,s*=c.height/m}let f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var wo=class extends lu{constructor(e=-1,t=1,s=1,o=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=o,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,o,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2,l=s-e,c=s+e,f=o+t,h=o-t;if(this.view!==null&&this.view.enabled){let m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,c=l+m*this.view.width,f-=g*this.view.offsetY,h=f-g*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},pm=class extends Bf{constructor(){super(new wo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},To=class extends au{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(On.DEFAULT_UP),this.updateMatrix(),this.target=new On,this.shadow=new pm}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Eo=class extends au{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Ca=-90,Pa=1,Wa=class extends On{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;let o=new di(Ca,Pa,e,t);o.layers=this.layers,this.add(o);let l=new di(Ca,Pa,e,t);l.layers=this.layers,this.add(l);let c=new di(Ca,Pa,e,t);c.layers=this.layers,this.add(c);let f=new di(Ca,Pa,e,t);f.layers=this.layers,this.add(f);let h=new di(Ca,Pa,e,t);h.layers=this.layers,this.add(h);let m=new di(Ca,Pa,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[s,o,l,c,f,h]=t;for(let m of t)this.remove(m);if(e===Ji)s.up.set(0,1,0),s.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===ka)s.up.set(0,-1,0),s.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:s,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[l,c,f,h,m,g]=this.children,_=e.getRenderTarget(),b=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let A=s.texture.mipmapsAutoUpdate;s.texture.mipmapsAutoUpdate=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(s,0,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(s,1,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(s,2,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(s,3,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(s,4,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),s.texture.mipmapsAutoUpdate=A,e.setRenderTarget(s,5,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,g),e.setRenderTarget(_,b,v),e.xr.enabled=x,s.texture.needsPMREMUpdate=!0}},Hf=class extends di{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Ym="\\[\\]\\.:\\/",qw=new RegExp("["+Ym+"]","g"),jm="[^"+Ym+"]",$w="[^"+Ym.replace("\\.","")+"]",Yw=/((?:WC+[\/:])*)/.source.replace("WC",jm),jw=/(WCOD+)?/.source.replace("WCOD",$w),Zw=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",jm),Jw=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",jm),Kw=new RegExp("^"+Yw+jw+Zw+Jw+"$"),Qw=["material","materials","bones","map"],mm=class{constructor(e,t,s){let o=s||Kt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,o)}getValue(e,t){this.bind();let s=this._targetGroup.nCachedObjects_,o=this._bindings[s];o!==void 0&&o.getValue(e,t)}setValue(e,t){let s=this._bindings;for(let o=this._targetGroup.nCachedObjects_,l=s.length;o!==l;++o)s[o].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,s=e.length;t!==s;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,s=e.length;t!==s;++t)e[t].unbind()}},Kt=class r{constructor(e,t,s){this.path=t,this.parsedPath=s||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,s){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,s):new r(e,t,s)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(qw,"")}static parseTrackName(e){let t=Kw.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let s={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},o=s.nodeName&&s.nodeName.lastIndexOf(".");if(o!==void 0&&o!==-1){let l=s.nodeName.substring(o+1);Qw.indexOf(l)!==-1&&(s.nodeName=s.nodeName.substring(0,o),s.objectName=l)}if(s.propertyName===null||s.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return s}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let s=e.skeleton.getBoneByName(t);if(s!==void 0)return s}if(e.children){let s=function(l){for(let c=0;c<l.length;c++){let f=l[c];if(f.name===t||f.uuid===t)return f;let h=s(f.children);if(h)return h}return null},o=s(e.children);if(o)return o}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let s=this.resolvedProperty;for(let o=0,l=s.length;o!==l;++o)e[t++]=s[o]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let s=this.resolvedProperty;for(let o=0,l=s.length;o!==l;++o)s[o]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let s=this.resolvedProperty;for(let o=0,l=s.length;o!==l;++o)s[o]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let s=this.resolvedProperty;for(let o=0,l=s.length;o!==l;++o)s[o]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,s=t.objectName,o=t.propertyName,l=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){$e("PropertyBinding: No target node found for track: "+this.path+".");return}if(s){let m=t.objectIndex;switch(s){case"materials":if(!e.material){nt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){nt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){nt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let g=0;g<e.length;g++)if(e[g].name===m){m=g;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){nt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){nt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[s]===void 0){nt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[s]}if(m!==void 0){if(e[m]===void 0){nt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[m]}}let c=e[o];if(c===void 0){let m=t.nodeName;nt("PropertyBinding: Trying to update property for track: "+m+"."+o+" but it wasn't found.",e);return}let f=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?f=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(f=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(l!==void 0){if(o==="morphTargetInfluences"){if(!e.geometry){nt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){nt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[l]!==void 0&&(l=e.morphTargetDictionary[l])}h=this.BindingType.ArrayElement,this.resolvedProperty=c,this.propertyIndex=l}else c.fromArray!==void 0&&c.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=c):Array.isArray(c)?(h=this.BindingType.EntireArray,this.resolvedProperty=c):this.propertyName=o;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][f]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Kt.Composite=mm;Kt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Kt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Kt.prototype.GetterByBindingType=[Kt.prototype._getValue_direct,Kt.prototype._getValue_array,Kt.prototype._getValue_arrayElement,Kt.prototype._getValue_toArray];Kt.prototype.SetterByBindingTypeAndVersioning=[[Kt.prototype._setValue_direct,Kt.prototype._setValue_direct_setNeedsUpdate,Kt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Kt.prototype._setValue_array,Kt.prototype._setValue_array_setNeedsUpdate,Kt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Kt.prototype._setValue_arrayElement,Kt.prototype._setValue_arrayElement_setNeedsUpdate,Kt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Kt.prototype._setValue_fromArray,Kt.prototype._setValue_fromArray_setNeedsUpdate,Kt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var BP=new Float32Array(1);var wb=new Ot,Ao=class{constructor(e,t,s=0,o=1/0){this.ray=new Ba(e,t),this.near=s,this.far=o,this.camera=null,this.layers=new rs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):nt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return wb.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(wb),this}intersectObject(e,t=!0,s=[]){return gm(e,this,s,t),s.sort(Tb),s}intersectObjects(e,t=!0,s=[]){for(let o=0,l=e.length;o<l;o++)gm(e[o],this,s,t);return s.sort(Tb),s}};function Tb(r,e){return r.distance-e.distance}function gm(r,e,t,s){let o=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(o=!1),o===!0&&s===!0){let l=r.children;for(let c=0,f=l.length;c<f;c++)gm(l[c],e,t,!0)}}var uu=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,$e("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var tg=class tg{constructor(e,t,s,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,s,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let s=0;s<4;s++)this.elements[s]=e[s+t];return this}set(e,t,s,o){let l=this.elements;return l[0]=e,l[2]=t,l[1]=s,l[3]=o,this}};tg.prototype.isMatrix2=!0;var vm=tg;function Zm(r,e,t,s){let o=eT(s);switch(t){case Fm:return r*e;case jf:return r*e/o.components*o.byteLength;case Zf:return r*e/o.components*o.byteLength;case Gs:return r*e*2/o.components*o.byteLength;case Jf:return r*e*2/o.components*o.byteLength;case Um:return r*e*3/o.components*o.byteLength;case Bi:return r*e*4/o.components*o.byteLength;case Kf:return r*e*4/o.components*o.byteLength;case hu:case pu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case mu:case gu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ed:case nd:return Math.max(r,16)*Math.max(e,8)/4;case Qf:case td:return Math.max(r,8)*Math.max(e,8)/2;case id:case rd:case od:case ad:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case sd:case vu:case ld:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ud:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case cd:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case fd:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case dd:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case hd:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case pd:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case md:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case gd:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case vd:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case yd:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case bd:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case _d:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Sd:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case xd:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Md:case wd:case Td:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Ed:case Ad:return Math.ceil(r/4)*Math.ceil(e/4)*8;case yu:case Rd:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function eT(r){switch(r){case oi:case Nm:return{byteLength:1,components:1};case Ya:case Lm:case mr:return{byteLength:2,components:1};case $f:case Yf:return{byteLength:2,components:4};case pr:case qf:case Ki:return{byteLength:4,components:1};case km:case Dm:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?$e("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function D_(){let r=null,e=!1,t=null,s=null;function o(l,c){s=r.requestAnimationFrame(o),t(l,c)}return{start:function(){e!==!0&&t!==null&&r!==null&&(s=r.requestAnimationFrame(o),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function nT(r){let e=new WeakMap;function t(f,h){let m=f.array,g=f.usage,_=m.byteLength,b=r.createBuffer();r.bindBuffer(h,b),r.bufferData(h,m,g),f.onUploadCallback();let v;if(m instanceof Float32Array)v=r.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)v=r.HALF_FLOAT;else if(m instanceof Uint16Array)f.isFloat16BufferAttribute?v=r.HALF_FLOAT:v=r.UNSIGNED_SHORT;else if(m instanceof Int16Array)v=r.SHORT;else if(m instanceof Uint32Array)v=r.UNSIGNED_INT;else if(m instanceof Int32Array)v=r.INT;else if(m instanceof Int8Array)v=r.BYTE;else if(m instanceof Uint8Array)v=r.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)v=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:b,type:v,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:_}}function s(f,h,m){let g=h.array,_=h.updateRanges;if(r.bindBuffer(m,f),_.length===0)r.bufferSubData(m,0,g);else{_.sort((v,x)=>v.start-x.start);let b=0;for(let v=1;v<_.length;v++){let x=_[b],A=_[v];A.start<=x.start+x.count+1?x.count=Math.max(x.count,A.start+A.count-x.start):(++b,_[b]=A)}_.length=b+1;for(let v=0,x=_.length;v<x;v++){let A=_[v];r.bufferSubData(m,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);let h=e.get(f);h&&(r.deleteBuffer(h.buffer),e.delete(f))}function c(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){let g=e.get(f);(!g||g.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}let m=e.get(f);if(m===void 0)e.set(f,t(f,h));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,f,h),m.version=f.version}}return{get:o,remove:l,update:c}}var iT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rT=`#ifdef USE_ALPHAHASH
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
#endif`,sT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,oT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,aT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uT=`#ifdef USE_AOMAP
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
#endif`,cT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fT=`#ifdef USE_BATCHING
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
#endif`,dT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gT=`#ifdef USE_IRIDESCENCE
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
#endif`,vT=`#ifdef USE_BUMPMAP
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
#endif`,yT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_T=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ST=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,MT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,wT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,TT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ET=`#define PI 3.141592653589793
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
} // validated`,AT=`vec3 transformedNormal = objectNormal;
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
#endif`,RT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,CT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,PT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,IT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,NT="gl_FragColor = linearToOutputTexel( gl_FragColor );",LT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kT=`#ifdef USE_ENVMAP
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
#endif`,DT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,FT=`#ifdef USE_ENVMAP
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
#endif`,UT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zT=`#ifdef USE_ENVMAP
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
#endif`,OT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,BT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,HT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,VT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,GT=`#ifdef USE_GRADIENTMAP
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
}`,WT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,XT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$T=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,YT=`#ifdef USE_ENVMAP
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
#endif`,jT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ZT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,JT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,KT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,QT=`PhysicalMaterial material;
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
#endif`,eE=`uniform sampler2D dfgLUT;
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
}`,tE=`
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
#endif`,nE=`#if defined( RE_IndirectDiffuse )
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
#endif`,iE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rE=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,sE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,oE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,uE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,dE=`#if defined( USE_POINTS_UV )
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
#endif`,hE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gE=`#if defined( USE_MORPHCOLORS )
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
#endif`,vE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yE=`#ifdef USE_MORPHTARGETS
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
#endif`,bE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_E=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,SE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ME=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,TE=`#ifdef USE_NORMALMAP
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
#endif`,EE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,AE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,RE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,CE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,PE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,IE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,NE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,LE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,DE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,FE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,UE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,OE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,BE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,HE=`float getShadowMask() {
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
}`,VE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,GE=`#ifdef USE_SKINNING
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
#endif`,WE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,XE=`#ifdef USE_SKINNING
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
#endif`,qE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$E=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,YE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ZE=`#ifdef USE_TRANSMISSION
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
#endif`,JE=`#ifdef USE_TRANSMISSION
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
#endif`,KE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,nA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iA=`uniform sampler2D t2D;
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
}`,rA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sA=`uniform float backgroundBlurriness;
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
}`,oA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lA=`#include <common>
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
}`,uA=`#if DEPTH_PACKING == 3200
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
}`,cA=`#define DISTANCE
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
}`,fA=`#define DISTANCE
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
}`,dA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pA=`uniform float scale;
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
}`,mA=`uniform vec3 diffuse;
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
}`,gA=`#include <common>
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
}`,vA=`uniform vec3 diffuse;
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
}`,yA=`#define LAMBERT
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
}`,bA=`#define LAMBERT
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
}`,_A=`#define MATCAP
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
}`,SA=`#define MATCAP
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
}`,xA=`#define NORMAL
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
}`,MA=`#define NORMAL
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
}`,wA=`#define PHONG
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
}`,TA=`#define PHONG
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
}`,EA=`#define STANDARD
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
}`,AA=`#define STANDARD
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
}`,RA=`#define TOON
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
}`,CA=`#define TOON
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
}`,PA=`uniform float size;
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
}`,IA=`uniform vec3 diffuse;
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
}`,NA=`#include <common>
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
}`,LA=`uniform vec3 color;
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
}`,kA=`uniform float rotation;
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
}`,DA=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:iT,alphahash_pars_fragment:rT,alphamap_fragment:sT,alphamap_pars_fragment:oT,alphatest_fragment:aT,alphatest_pars_fragment:lT,aomap_fragment:uT,aomap_pars_fragment:cT,batching_pars_vertex:fT,batching_vertex:dT,begin_vertex:hT,beginnormal_vertex:pT,bsdfs:mT,iridescence_fragment:gT,bumpmap_pars_fragment:vT,clipping_planes_fragment:yT,clipping_planes_pars_fragment:bT,clipping_planes_pars_vertex:_T,clipping_planes_vertex:ST,color_fragment:xT,color_pars_fragment:MT,color_pars_vertex:wT,color_vertex:TT,common:ET,defaultnormal_vertex:AT,displacementmap_pars_vertex:RT,displacementmap_vertex:CT,emissivemap_fragment:PT,emissivemap_pars_fragment:IT,colorspace_fragment:NT,colorspace_pars_fragment:LT,envmap_fragment:kT,envmap_common_pars_fragment:DT,envmap_pars_fragment:FT,envmap_pars_vertex:UT,envmap_physical_pars_fragment:YT,envmap_vertex:zT,fog_vertex:OT,fog_pars_vertex:BT,fog_fragment:HT,fog_pars_fragment:VT,gradientmap_pars_fragment:GT,lightmap_pars_fragment:WT,lights_lambert_fragment:XT,lights_lambert_pars_fragment:qT,lights_pars_begin:$T,lights_toon_fragment:jT,lights_toon_pars_fragment:ZT,lights_phong_fragment:JT,lights_phong_pars_fragment:KT,lights_physical_fragment:QT,lights_physical_pars_fragment:eE,lights_fragment_begin:tE,lights_fragment_maps:nE,lights_fragment_end:iE,lightprobes_pars_fragment:rE,logdepthbuf_fragment:sE,logdepthbuf_pars_fragment:oE,logdepthbuf_pars_vertex:aE,logdepthbuf_vertex:lE,map_fragment:uE,map_pars_fragment:cE,map_particle_fragment:fE,map_particle_pars_fragment:dE,metalnessmap_fragment:hE,metalnessmap_pars_fragment:pE,morphinstance_vertex:mE,morphcolor_vertex:gE,morphnormal_vertex:vE,morphtarget_pars_vertex:yE,morphtarget_vertex:bE,normal_fragment_begin:_E,normal_fragment_maps:SE,normal_pars_fragment:xE,normal_pars_vertex:ME,normal_vertex:wE,normalmap_pars_fragment:TE,clearcoat_normal_fragment_begin:EE,clearcoat_normal_fragment_maps:AE,clearcoat_pars_fragment:RE,iridescence_pars_fragment:CE,opaque_fragment:PE,packing:IE,premultiplied_alpha_fragment:NE,project_vertex:LE,dithering_fragment:kE,dithering_pars_fragment:DE,roughnessmap_fragment:FE,roughnessmap_pars_fragment:UE,shadowmap_pars_fragment:zE,shadowmap_pars_vertex:OE,shadowmap_vertex:BE,shadowmask_pars_fragment:HE,skinbase_vertex:VE,skinning_pars_vertex:GE,skinning_vertex:WE,skinnormal_vertex:XE,specularmap_fragment:qE,specularmap_pars_fragment:$E,tonemapping_fragment:YE,tonemapping_pars_fragment:jE,transmission_fragment:ZE,transmission_pars_fragment:JE,uv_pars_fragment:KE,uv_pars_vertex:QE,uv_vertex:eA,worldpos_vertex:tA,background_vert:nA,background_frag:iA,backgroundCube_vert:rA,backgroundCube_frag:sA,cube_vert:oA,cube_frag:aA,depth_vert:lA,depth_frag:uA,distance_vert:cA,distance_frag:fA,equirect_vert:dA,equirect_frag:hA,linedashed_vert:pA,linedashed_frag:mA,meshbasic_vert:gA,meshbasic_frag:vA,meshlambert_vert:yA,meshlambert_frag:bA,meshmatcap_vert:_A,meshmatcap_frag:SA,meshnormal_vert:xA,meshnormal_frag:MA,meshphong_vert:wA,meshphong_frag:TA,meshphysical_vert:EA,meshphysical_frag:AA,meshtoon_vert:RA,meshtoon_frag:CA,points_vert:PA,points_frag:IA,shadow_vert:NA,shadow_frag:LA,sprite_vert:kA,sprite_frag:DA},Le={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},Ur={basic:{uniforms:ai([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:ai([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new We(0)},envMapIntensity:{value:1}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:ai([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:ai([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:ai([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new We(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:ai([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:ai([Le.points,Le.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:ai([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:ai([Le.common,Le.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:ai([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:ai([Le.sprite,Le.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distance:{uniforms:ai([Le.common,Le.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distance_vert,fragmentShader:dt.distance_frag},shadow:{uniforms:ai([Le.lights,Le.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};Ur.physical={uniforms:ai([Ur.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new it},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};var Pd={r:0,b:0,g:0},FA=new Ot,F_=new it;F_.set(-1,0,0,0,1,0,0,0,1);function UA(r,e,t,s,o,l){let c=new We(0),f=o===!0?0:1,h,m,g=null,_=0,b=null;function v(w){let L=w.isScene===!0?w.background:null;if(L&&L.isTexture){let C=w.backgroundBlurriness>0;L=e.get(L,C)}return L}function x(w){let L=!1,C=v(w);C===null?S(c,f):C&&C.isColor&&(S(C,1),L=!0);let I=r.xr.getEnvironmentBlendMode();I==="additive"?t.buffers.color.setClear(0,0,0,1,l):I==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(r.autoClear||L)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function A(w,L){let C=v(L);C&&C.isCubeTexture?(m===void 0&&(m=new jn(new Dr(1,1,1),new pi({name:"BackgroundCubeMaterial",uniforms:Lo(Ur.backgroundCube.uniforms),vertexShader:Ur.backgroundCube.vertexShader,fragmentShader:Ur.backgroundCube.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(I,N,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),m.material.uniforms.envMap.value=C,m.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(FA.makeRotationFromEuler(L.backgroundRotation)).transpose(),C.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(F_),m.material.toneMapped=bt.getTransfer(C.colorSpace)!==zt,(g!==C||_!==C.version||b!==r.toneMapping)&&(m.material.needsUpdate=!0,g=C,_=C.version,b=r.toneMapping),m.layers.enableAll(),w.unshift(m,m.geometry,m.material,0,0,null)):C&&C.isTexture&&(h===void 0&&(h=new jn(new ls(2,2),new pi({name:"BackgroundMaterial",uniforms:Lo(Ur.background.uniforms),vertexShader:Ur.background.vertexShader,fragmentShader:Ur.background.fragmentShader,side:Vs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=C,h.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,h.material.toneMapped=bt.getTransfer(C.colorSpace)!==zt,C.matrixAutoUpdate===!0&&C.updateMatrix(),h.material.uniforms.uvTransform.value.copy(C.matrix),(g!==C||_!==C.version||b!==r.toneMapping)&&(h.material.needsUpdate=!0,g=C,_=C.version,b=r.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null))}function S(w,L){w.getRGB(Pd,$m(r)),t.buffers.color.setClear(Pd.r,Pd.g,Pd.b,L,l)}function y(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return c},setClearColor:function(w,L=1){c.set(w),f=L,S(c,f)},getClearAlpha:function(){return f},setClearAlpha:function(w){f=w,S(c,f)},render:x,addToRenderList:A,dispose:y}}function zA(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},o=b(null),l=o,c=!1;function f(B,W,j,z,K){let se=!1,ee=_(B,z,j,W);l!==ee&&(l=ee,m(l.object)),se=v(B,z,j,K),se&&x(B,z,j,K),K!==null&&e.update(K,r.ELEMENT_ARRAY_BUFFER),(se||c)&&(c=!1,C(B,W,j,z),K!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function h(){return r.createVertexArray()}function m(B){return r.bindVertexArray(B)}function g(B){return r.deleteVertexArray(B)}function _(B,W,j,z){let K=z.wireframe===!0,se=s[W.id];se===void 0&&(se={},s[W.id]=se);let ee=B.isInstancedMesh===!0?B.id:0,me=se[ee];me===void 0&&(me={},se[ee]=me);let ne=me[j.id];ne===void 0&&(ne={},me[j.id]=ne);let ce=ne[K];return ce===void 0&&(ce=b(h()),ne[K]=ce),ce}function b(B){let W=[],j=[],z=[];for(let K=0;K<t;K++)W[K]=0,j[K]=0,z[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:j,attributeDivisors:z,object:B,attributes:{},index:null}}function v(B,W,j,z){let K=l.attributes,se=W.attributes,ee=0,me=j.getAttributes();for(let ne in me)if(me[ne].location>=0){let he=K[ne],Be=se[ne];if(Be===void 0&&(ne==="instanceMatrix"&&B.instanceMatrix&&(Be=B.instanceMatrix),ne==="instanceColor"&&B.instanceColor&&(Be=B.instanceColor)),he===void 0||he.attribute!==Be||Be&&he.data!==Be.data)return!0;ee++}return l.attributesNum!==ee||l.index!==z}function x(B,W,j,z){let K={},se=W.attributes,ee=0,me=j.getAttributes();for(let ne in me)if(me[ne].location>=0){let he=se[ne];he===void 0&&(ne==="instanceMatrix"&&B.instanceMatrix&&(he=B.instanceMatrix),ne==="instanceColor"&&B.instanceColor&&(he=B.instanceColor));let Be={};Be.attribute=he,he&&he.data&&(Be.data=he.data),K[ne]=Be,ee++}l.attributes=K,l.attributesNum=ee,l.index=z}function A(){let B=l.newAttributes;for(let W=0,j=B.length;W<j;W++)B[W]=0}function S(B){y(B,0)}function y(B,W){let j=l.newAttributes,z=l.enabledAttributes,K=l.attributeDivisors;j[B]=1,z[B]===0&&(r.enableVertexAttribArray(B),z[B]=1),K[B]!==W&&(r.vertexAttribDivisor(B,W),K[B]=W)}function w(){let B=l.newAttributes,W=l.enabledAttributes;for(let j=0,z=W.length;j<z;j++)W[j]!==B[j]&&(r.disableVertexAttribArray(j),W[j]=0)}function L(B,W,j,z,K,se,ee){ee===!0?r.vertexAttribIPointer(B,W,j,K,se):r.vertexAttribPointer(B,W,j,z,K,se)}function C(B,W,j,z){A();let K=z.attributes,se=j.getAttributes(),ee=W.defaultAttributeValues;for(let me in se){let ne=se[me];if(ne.location>=0){let ce=K[me];if(ce===void 0&&(me==="instanceMatrix"&&B.instanceMatrix&&(ce=B.instanceMatrix),me==="instanceColor"&&B.instanceColor&&(ce=B.instanceColor)),ce!==void 0){let he=ce.normalized,Be=ce.itemSize,Ve=e.get(ce);if(Ve===void 0)continue;let re=Ve.buffer,Pe=Ve.type,De=Ve.bytesPerElement,Xe=Pe===r.INT||Pe===r.UNSIGNED_INT||ce.gpuType===qf;if(ce.isInterleavedBufferAttribute){let Ne=ce.data,et=Ne.isInterleavedBuffer===!0?Ne.stride:Ne.itemSize,Wt=ce.offset;if(Ne.isInstancedInterleavedBuffer||Ne.isInstancedBufferAttribute){for(let Ye=0;Ye<ne.locationSize;Ye++)y(ne.location+Ye,Ne.meshPerAttribute);B.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Ne.meshPerAttribute*Ne.count)}else for(let Ye=0;Ye<ne.locationSize;Ye++)S(ne.location+Ye);r.bindBuffer(r.ARRAY_BUFFER,re);for(let Ye=0;Ye<ne.locationSize;Ye++)L(ne.location+Ye,Be/ne.locationSize,Pe,he,et*De,(Wt+Be/ne.locationSize*Ye)*De,Xe)}else{if(ce.isInstancedBufferAttribute){for(let Ne=0;Ne<ne.locationSize;Ne++)y(ne.location+Ne,ce.meshPerAttribute);B.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Ne=0;Ne<ne.locationSize;Ne++)S(ne.location+Ne);r.bindBuffer(r.ARRAY_BUFFER,re);for(let Ne=0;Ne<ne.locationSize;Ne++)L(ne.location+Ne,Be/ne.locationSize,Pe,he,Be*De,Be/ne.locationSize*Ne*De,Xe)}}else if(ee!==void 0){let he=ee[me];if(he!==void 0)switch(he.length){case 2:r.vertexAttrib2fv(ne.location,he);break;case 3:r.vertexAttrib3fv(ne.location,he);break;case 4:r.vertexAttrib4fv(ne.location,he);break;default:r.vertexAttrib1fv(ne.location,he)}}}}w()}function I(){G();for(let B in s){let W=s[B];for(let j in W){let z=W[j];for(let K in z){let se=z[K];for(let ee in se)g(se[ee].object),delete se[ee];delete z[K]}}delete s[B]}}function N(B){if(s[B.id]===void 0)return;let W=s[B.id];for(let j in W){let z=W[j];for(let K in z){let se=z[K];for(let ee in se)g(se[ee].object),delete se[ee];delete z[K]}}delete s[B.id]}function M(B){for(let W in s){let j=s[W];for(let z in j){let K=j[z];if(K[B.id]===void 0)continue;let se=K[B.id];for(let ee in se)g(se[ee].object),delete se[ee];delete K[B.id]}}}function P(B){for(let W in s){let j=s[W],z=B.isInstancedMesh===!0?B.id:0,K=j[z];if(K!==void 0){for(let se in K){let ee=K[se];for(let me in ee)g(ee[me].object),delete ee[me];delete K[se]}delete j[z],Object.keys(j).length===0&&delete s[W]}}}function G(){F(),c=!0,l!==o&&(l=o,m(l.object))}function F(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:G,resetDefaultState:F,dispose:I,releaseStatesOfGeometry:N,releaseStatesOfObject:P,releaseStatesOfProgram:M,initAttributes:A,enableAttribute:S,disableUnusedAttributes:w}}function OA(r,e,t){let s;function o(h){s=h}function l(h,m){r.drawArrays(s,h,m),t.update(m,s,1)}function c(h,m,g){g!==0&&(r.drawArraysInstanced(s,h,m,g),t.update(m,s,g))}function f(h,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,h,0,m,0,g);let b=0;for(let v=0;v<g;v++)b+=m[v];t.update(b,s,1)}this.setMode=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function BA(r,e,t,s){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){let M=e.get("EXT_texture_filter_anisotropic");o=r.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(M){return!(M!==Bi&&s.convert(M)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(M){let P=M===mr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==oi&&M!==Ki&&!P&&s.convert(M)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function h(M){if(M==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp",g=h(m);g!==m&&($e("WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);let _=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),b=t.logarithmicDepthBuffer===!0&&_===!1;t.reversedDepthBuffer===!0&&_===!1&&$e("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&_===!0&&$e("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let v=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),w=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),C=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),I=r.getParameter(r.MAX_SAMPLES),N=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:f,precision:m,logarithmicDepthBuffer:b,reversedDepthBuffer:_,maxTextures:v,maxVertexTextures:x,maxTextureSize:A,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:w,maxVaryings:L,maxFragmentUniforms:C,maxSamples:I,samples:N}}function HA(r){let e=this,t=null,s=0,o=!1,l=!1,c=new Ui,f=new it,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(_,b){let v=_.length!==0||b||s!==0||o;return o=b,s=_.length,v},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,b){t=g(_,b,0)},this.setState=function(_,b,v){let x=_.clippingPlanes,A=_.clipIntersection,S=_.clipShadows,y=r.get(_);if(!o||x===null||x.length===0||l&&!S)l?g(null):m();else{let w=l?0:s,L=w*4,C=y.clippingState||null;h.value=C,C=g(x,b,L,v);for(let I=0;I!==L;++I)C[I]=t[I];y.clippingState=C,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=w}};function m(){h.value!==t&&(h.value=t,h.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function g(_,b,v,x){let A=_!==null?_.length:0,S=null;if(A!==0){if(S=h.value,x!==!0||S===null){let y=v+A*4,w=b.matrixWorldInverse;f.getNormalMatrix(w),(S===null||S.length<y)&&(S=new Float32Array(y));for(let L=0,C=v;L!==A;++L,C+=4)c.copy(_[L]).applyMatrix4(w,f),c.normal.toArray(S,C),S[C+3]=c.constant}h.value=S,h.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,S}}var Su=class extends zi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let s={width:e,height:e,depth:1},o=[s,s,s,s,s,s];this.texture=new Jl(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Dr(5,5,5),l=new pi({name:"CubemapFromEquirect",uniforms:Lo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:mi,blending:Co});l.uniforms.tEquirect.value=t;let c=new jn(o,l),f=t.minFilter;return t.minFilter===us&&(t.minFilter=hi),new Wa(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,s=!0,o=!0){let l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,s,o);e.setRenderTarget(l)}},p_=256,VA=3,GA=20,U_=256,z_=16,WA=3,XA=new H,qA=new We,Ka=class r{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Wa(1,10,null),this._boxMesh=new jn(new Dr(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,s=.1,o=100,l={}){let{size:c=256,position:f=XA}=l,h=this._renderer;this._setSize(c);let m=this._allocateTarget(),g=this._getSourceTarget(!0);t>0&&(g.texture.mipmapsAutoUpdate=!1);let _=h.autoClear,b=h.autoClearColor,v=h.autoClearDepth,x=h.autoClearStencil,A=e.background;h.autoClear=!0,h.autoClearColor=!0,h.autoClearDepth=!0,h.autoClearStencil=!0,A===null&&(e.background=h.getClearColor(qA));let S=new Wa(s,o,g);return S.position.copy(f),S.update(h,e),h.autoClear=_,h.autoClearColor=b,h.autoClearDepth=v,h.autoClearStencil=x,e.background=A,t>0&&(g.texture.mipmapsAutoUpdate=!0,this._blur(m,t)),this._applyPMREM(m),m}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=v_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=g_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(p_,Wm(e))}_fromTexture(e,t){e.mapping===Io||e.mapping===$a?this._setSize(e.image.length===0?p_:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let s=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(s),s}_allocateTarget(){let e=this._cubeSize,t=m_(e,!1,!1),s=Math.log2(e)-VA;for(let o=0;o<=s;o++)t.texture.mipmaps.push({width:e>>o,height:e>>o});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,s=this._sourceTarget;return(s===null||s.width!==t||e&&s.depthBuffer===!1)&&(s!==null&&s.dispose(),this._sourceTarget=m_(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,s){let o=this._boxMesh,l=this._cubeCamera;o.material=s,l.renderTarget=e,l.activeMipmapLevel=t;let c=e.width>>t;e.viewport.set(0,0,c,c),l.update(this._renderer,o),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Io||e.mapping===$a?(this._cubemapMaterial===null&&(this._cubemapMaterial=v_()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=g_()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=$A(),this._integrationMaterial=YA());let t=this._cubeSize,s=e.texture.mipmaps.length-1,o=this._ggxMaterial.uniforms;o.envMap.value=this._sourceTarget.texture;let l=this._integrationMaterial.uniforms;l.envMap.value=this._sourceTarget.texture,l.sourceLod.value=Math.log2(t/z_);for(let c=0;c<=s;c++){let f=r.lodToRoughness(c,s);if(c>s-WA)l.roughness.value=f,this._renderCube(e,c,this._integrationMaterial);else{let h=f>0?Math.log2(t)+.5*Math.log2(6/(U_*Math.pow(f,4)))+.5:0;o.roughness.value=f,o.lodBias.value=h,this._renderCube(e,c,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=jA());let s=this._blurMaterial,o=s.uniforms,l=this._sourceTarget;o.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,o.envMap.value=l.texture,this._renderCube(e,0,s),o.envMap.value=e.texture,this._renderCube(l,0,s)}};function m_(r,e,t){return new Su(r,{minFilter:us,generateMipmaps:e,type:mr,colorSpace:_o,depthBuffer:t})}function xu(r,e,t){return new pi({name:r,uniforms:e,vertexShader:dt.cube_vert,fragmentShader:t,side:mi,blending:Co,depthTest:!1,depthWrite:!1})}function $A(){return xu("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${U_}u

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
	`)}function YA(){return xu("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:z_}},`

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
	`)}function jA(){return xu("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${GA}
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
	`)}function g_(){return xu("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function v_(){return xu("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function ZA(r){let e=new WeakMap,t=new WeakMap,s=null;function o(b,v=!1){return b==null?null:v?c(b):l(b)}function l(b){if(b&&b.isTexture){let v=b.mapping;if(v===Gf||v===Wf)if(e.has(b)){let x=e.get(b).texture;return f(x,b.mapping)}else{let x=b.image;if(x&&x.height>0){let A=new Su(x.height);return A.fromEquirectangularTexture(r,b),e.set(b,A),b.addEventListener("dispose",m),f(A.texture,b.mapping)}else return null}}return b}function c(b){if(b&&b.isTexture&&b.isPMREMTexture!==!0){let v=b.mapping,x=v===Gf||v===Wf,A=v===Io||v===$a;if(x||A){let S=t.get(b),y=S!==void 0?S.texture.pmremVersion:0;if(b.isRenderTargetTexture&&b.pmremVersion!==y)return s===null&&(s=new Ka(r)),S=x?s.fromEquirectangular(b,S):s.fromCubemap(b,S),S.texture.pmremVersion=b.pmremVersion,t.set(b,S),S.texture;if(S!==void 0)return S.texture;{let w=b.image;return x&&w&&w.height>0||A&&w&&h(w)?(s===null&&(s=new Ka(r)),S=x?s.fromEquirectangular(b):s.fromCubemap(b),S.texture.pmremVersion=b.pmremVersion,t.set(b,S),b.addEventListener("dispose",g),S.texture):null}}}return b}function f(b,v){return v===Gf?b.mapping=Io:v===Wf&&(b.mapping=$a),b}function h(b){let v=0,x=6;for(let A=0;A<x;A++)b[A]!==void 0&&v++;return v===x}function m(b){let v=b.target;v.removeEventListener("dispose",m);let x=e.get(v);x!==void 0&&(e.delete(v),x.dispose())}function g(b){let v=b.target;v.removeEventListener("dispose",g);let x=t.get(v);x!==void 0&&(t.delete(v),x.dispose())}function _(){e=new WeakMap,t=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:o,dispose:_}}function JA(r){let e={};function t(s){if(e[s]!==void 0)return e[s];let o=r.getExtension(s);return e[s]=o,o}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){let o=t(s);return o===null&&bo("WebGLRenderer: "+s+" extension not supported."),o}}}function KA(r,e,t,s){let o={},l=new WeakMap,c=new FinalizationRegistry(x=>delete o[x]);function f(x){h(x.target)}function h(x){x.index!==null&&e.remove(x.index);for(let S in x.attributes)e.remove(x.attributes[S]);x.removeEventListener("dispose",f),delete o[x.id],c.unregister(x);let A=l.get(x);A&&(e.remove(A),l.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function m(x,A){return o[A.id]!==void 0||(A.addEventListener("dispose",f),o[A.id]=new WeakRef(A),c.register(A,A.id,A),t.memory.geometries++),A}function g(x){let A=x.attributes;for(let S in A)e.update(A[S],r.ARRAY_BUFFER)}function _(x){let A=x.index,S=x.attributes.position,y=0;if(S===void 0)return;let w=A!==null?A.array.length:S.array.length/3-1,L=S.count>=65535?$l:ql,C=new L(Math.ceil(w/3)*6,1),I=C.array;if(A!==null){let M=A.array;y=A.version;for(let P=0,G=0;P<w;P+=3){let F=M[P+0],B=M[P+1],W=M[P+2];I[G++]=F,I[G++]=B,I[G++]=B,I[G++]=W,I[G++]=W,I[G++]=F}}else{y=S.version;for(let M=0,P=0;M<w;M+=3){let G=M+0,F=M+1,B=M+2;I[P++]=G,I[P++]=F,I[P++]=F,I[P++]=B,I[P++]=B,I[P++]=G}}C.version=y;let N=l.get(x);N&&e.remove(N),l.set(x,C)}function b(x){let A=l.get(x);if(A){let S=x.index;S!==null&&A.version<S.version&&_(x)}else _(x);return l.get(x)}function v(){for(let x in o){let A=o[x].deref();A!==void 0&&h(A)}}return{get:m,update:g,getWireframeAttribute:b,dispose:v}}function QA(r,e,t){let s;function o(_){s=_}let l,c;function f(_){l=_.type,c=_.bytesPerElement}function h(_,b){r.drawElements(s,b,l,_*c),t.update(b,s,1)}function m(_,b,v){v!==0&&(r.drawElementsInstanced(s,b,l,_*c,v),t.update(b,s,v))}function g(_,b,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,b,0,l,_,0,v);let A=0;for(let S=0;S<v;S++)A+=b[S];t.update(A,s,1)}this.setMode=o,this.setIndex=f,this.render=h,this.renderInstances=m,this.renderMultiDraw=g}function eR(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,c,f){switch(t.calls++,c){case r.TRIANGLES:t.triangles+=f*(l/3);break;case r.LINES:t.lines+=f*(l/2);break;case r.LINE_STRIP:t.lines+=f*(l-1);break;case r.LINE_LOOP:t.lines+=f*l;break;case r.POINTS:t.points+=f*l;break;default:nt("WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:s}}function tR(r,e,t){let s=new WeakMap,o=new en;function l(c,f,h){let m=c.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=g!==void 0?g.length:0,b=s.get(f);if(b===void 0||b.count!==_){let G=function(){M.dispose(),s.delete(f),f.removeEventListener("dispose",G)};b!==void 0&&b.texture.dispose();let v=f.morphAttributes.position!==void 0,x=f.morphAttributes.normal!==void 0,A=f.morphAttributes.color!==void 0,S=f.morphAttributes.position||[],y=f.morphAttributes.normal||[],w=f.morphAttributes.color||[],L=0;v===!0&&(L=1),x===!0&&(L=2),A===!0&&(L=3);let C=f.attributes.position.count*L,I=1;C>e.maxTextureSize&&(I=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);let N=new Float32Array(C*I*4*_),M=new Wl(N,C,I,_);M.type=Ki,M.needsUpdate=!0;let P=L*4;for(let F=0;F<_;F++){let B=S[F],W=y[F],j=w[F],z=C*I*4*F;for(let K=0;K<B.count;K++){let se=K*P;v===!0&&(o.fromBufferAttribute(B,K),N[z+se+0]=o.x,N[z+se+1]=o.y,N[z+se+2]=o.z,N[z+se+3]=0),x===!0&&(o.fromBufferAttribute(W,K),N[z+se+4]=o.x,N[z+se+5]=o.y,N[z+se+6]=o.z,N[z+se+7]=0),A===!0&&(o.fromBufferAttribute(j,K),N[z+se+8]=o.x,N[z+se+9]=o.y,N[z+se+10]=o.z,N[z+se+11]=j.itemSize===4?o.w:1)}}b={count:_,texture:M,size:new lt(C,I)},s.set(f,b),f.addEventListener("dispose",G)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(r,"morphTexture",c.morphTexture,t);else{let v=0;for(let A=0;A<m.length;A++)v+=m[A];let x=f.morphTargetsRelative?1:1-v;h.getUniforms().setValue(r,"morphTargetBaseInfluence",x),h.getUniforms().setValue(r,"morphTargetInfluences",m)}h.getUniforms().setValue(r,"morphTargetsTexture",b.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",b.size)}return{update:l}}function nR(r,e,t,s,o){let l=new WeakMap;function c(m){let g=o.render.frame,_=m.geometry,b=e.get(m,_);if(l.get(b)!==g&&(e.update(b),l.set(b,g)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==g&&(t.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&t.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,g))),m.isSkinnedMesh){let v=m.skeleton;l.get(v)!==g&&(v.update(),l.set(v,g))}return b}function f(){l=new WeakMap}function h(m){let g=m.target;g.removeEventListener("dispose",h),s.releaseStatesOfObject(g),t.remove(g.instanceMatrix),g.instanceColor!==null&&t.remove(g.instanceColor)}return{update:c,dispose:f}}var iR={[Tm]:"LINEAR_TONE_MAPPING",[Em]:"REINHARD_TONE_MAPPING",[Am]:"CINEON_TONE_MAPPING",[fu]:"ACES_FILMIC_TONE_MAPPING",[Cm]:"AGX_TONE_MAPPING",[Pm]:"NEUTRAL_TONE_MAPPING",[Rm]:"CUSTOM_TONE_MAPPING"};function rR(r,e,t,s,o,l){let c=new zi(e,t,{type:r,depthBuffer:o,stencilBuffer:l,samples:s?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),f=null,h=null,m=null,g=new ri;g.setAttribute("position",new Bt([-1,3,0,-1,-1,0,3,-1,0],3)),g.setAttribute("uv",new Bt([0,2,0,0,2,0],2));let _=new Af({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),b=new jn(g,_),v=new wo(-1,1,1,-1,0,1),x=null,A=null,S=!1,y,w=null,L=[],C=!1;this.setSize=function(I,N){c.setSize(I,N),f!==null&&f.setSize(I,N),h!==null&&h.setSize(I,N);for(let M=0;M<L.length;M++){let P=L[M];P.setSize&&P.setSize(I,N)}},this.setEffects=function(I){L=I,C=L.length>0&&L[0].isRenderPass===!0;let N=c.width,M=c.height;L.length>0&&f===null&&(f=new zi(N,M,{type:mr,depthBuffer:!1,stencilBuffer:!1}),h=new zi(N,M,{type:mr,depthBuffer:!1,stencilBuffer:!1}));let P=o===!0&&L.some(G=>G.needsDepthTexture===!0);P!==(c.depthTexture!==null)&&(P===!0&&m===null&&(m=new as(N,M),l===!0&&(m.format=cs,m.type=No)),c.dispose(),c.depthTexture=P?m:null,c.resolveDepthBuffer=P,c.storeMultisampledDepthBuffer=P);for(let G=0;G<L.length;G++){let F=L[G];F.setSize&&F.setSize(N,M),P&&F.needsDepthTexture===!0&&F.setDepthTexture&&F.setDepthTexture(m)}},this.begin=function(I,N){if(S||I.toneMapping===si&&L.length===0)return!1;if(w=N,N!==null){let M=N.width,P=N.height;(c.width!==M||c.height!==P)&&this.setSize(M,P)}return C===!1&&I.setRenderTarget(c),y=I.toneMapping,I.toneMapping=si,!0},this.hasRenderPass=function(){return C},this.end=function(I,N){I.toneMapping=y,S=!0;let M=c,P=f;for(let G=0;G<L.length;G++){let F=L[G];F.enabled!==!1&&(F.render(I,P,M,N),F.needsSwap!==!1&&(M=P,P=P===f?h:f))}if(x!==I.outputColorSpace||A!==I.toneMapping){x=I.outputColorSpace,A=I.toneMapping,_.defines={},bt.getTransfer(x)===zt&&(_.defines.SRGB_TRANSFER="");let G=iR[A];G&&(_.defines[G]=""),_.needsUpdate=!0}_.uniforms.tDiffuse.value=M.texture,I.setRenderTarget(w),I.render(b,v),w=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){c.dispose(),f!==null&&f.dispose(),h!==null&&h.dispose(),g.dispose(),_.dispose()}}var O_=new ii,B_=new as(1,1),H_=new Ql(1),V_=new Wl,G_=new Sf,W_=new Jl,y_=[],b_=[],__=new Float32Array(16),S_=new Float32Array(9),x_=new Float32Array(4);function Qa(r,e,t){let s=r[0];if(s<=0||s>0)return r;let o=e*t,l=y_[o];if(l===void 0&&(l=new Float32Array(o),y_[o]=l),e!==0){s.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,r[c].toArray(l,f)}return l}function In(r,e){if(r.length!==e.length)return!1;for(let t=0,s=r.length;t<s;t++)if(r[t]!==e[t])return!1;return!0}function Nn(r,e){for(let t=0,s=e.length;t<s;t++)r[t]=e[t]}function Ld(r,e){let t=b_[e];t===void 0&&(t=new Int32Array(e),b_[e]=t);for(let s=0;s!==e;++s)t[s]=r.allocateTextureUnit();return t}function sR(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function oR(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(In(t,e))return;r.uniform2fv(this.addr,e),Nn(t,e)}}function aR(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(In(t,e))return;r.uniform3fv(this.addr,e),Nn(t,e)}}function lR(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(In(t,e))return;r.uniform4fv(this.addr,e),Nn(t,e)}}function uR(r,e){let t=this.cache,s=e.elements;if(s===void 0){if(In(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Nn(t,e)}else{if(In(t,s))return;x_.set(s),r.uniformMatrix2fv(this.addr,!1,x_),Nn(t,s)}}function cR(r,e){let t=this.cache,s=e.elements;if(s===void 0){if(In(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Nn(t,e)}else{if(In(t,s))return;S_.set(s),r.uniformMatrix3fv(this.addr,!1,S_),Nn(t,s)}}function fR(r,e){let t=this.cache,s=e.elements;if(s===void 0){if(In(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Nn(t,e)}else{if(In(t,s))return;__.set(s),r.uniformMatrix4fv(this.addr,!1,__),Nn(t,s)}}function dR(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function hR(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(In(t,e))return;r.uniform2iv(this.addr,e),Nn(t,e)}}function pR(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(In(t,e))return;r.uniform3iv(this.addr,e),Nn(t,e)}}function mR(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(In(t,e))return;r.uniform4iv(this.addr,e),Nn(t,e)}}function gR(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function vR(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(In(t,e))return;r.uniform2uiv(this.addr,e),Nn(t,e)}}function yR(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(In(t,e))return;r.uniform3uiv(this.addr,e),Nn(t,e)}}function bR(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(In(t,e))return;r.uniform4uiv(this.addr,e),Nn(t,e)}}function kd(r){return r.version===0&&(r.compareFunction=Bm,r.needsUpdate=!0),r}function _R(r,e,t){let s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o);let l;this.type===r.SAMPLER_2D_SHADOW?l=kd(B_):l=O_,t.setTexture2D(e||l,o)}function SR(r,e,t){let s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture3D(e||G_,o)}function xR(r,e,t){let s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o);let l;this.type===r.SAMPLER_CUBE_SHADOW?l=kd(H_):l=W_,t.setTextureCube(e||l,o)}function MR(r,e,t){let s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture2DArray(e||V_,o)}function wR(r){switch(r){case 5126:return sR;case 35664:return oR;case 35665:return aR;case 35666:return lR;case 35674:return uR;case 35675:return cR;case 35676:return fR;case 5124:case 35670:return dR;case 35667:case 35671:return hR;case 35668:case 35672:return pR;case 35669:case 35673:return mR;case 5125:return gR;case 36294:return vR;case 36295:return yR;case 36296:return bR;case 35678:case 36198:case 36298:case 36306:case 35682:return _R;case 35679:case 36299:case 36307:return SR;case 35680:case 36300:case 36308:case 36293:return xR;case 36289:case 36303:case 36311:case 36292:return MR}}function TR(r,e){r.uniform1fv(this.addr,e)}function ER(r,e){let t=Qa(e,this.size,2);r.uniform2fv(this.addr,t)}function AR(r,e){let t=Qa(e,this.size,3);r.uniform3fv(this.addr,t)}function RR(r,e){let t=Qa(e,this.size,4);r.uniform4fv(this.addr,t)}function CR(r,e){let t=Qa(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function PR(r,e){let t=Qa(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function IR(r,e){let t=Qa(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function NR(r,e){r.uniform1iv(this.addr,e)}function LR(r,e){r.uniform2iv(this.addr,e)}function kR(r,e){r.uniform3iv(this.addr,e)}function DR(r,e){r.uniform4iv(this.addr,e)}function FR(r,e){r.uniform1uiv(this.addr,e)}function UR(r,e){r.uniform2uiv(this.addr,e)}function zR(r,e){r.uniform3uiv(this.addr,e)}function OR(r,e){r.uniform4uiv(this.addr,e)}function BR(r,e,t){let s=this.cache,o=e.length,l=Ld(t,o);In(s,l)||(r.uniform1iv(this.addr,l),Nn(s,l));let c;this.type===r.SAMPLER_2D_SHADOW?c=kd(B_):c=O_;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||c,l[f])}function HR(r,e,t){let s=this.cache,o=e.length,l=Ld(t,o);In(s,l)||(r.uniform1iv(this.addr,l),Nn(s,l));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||G_,l[c])}function VR(r,e,t){let s=this.cache,o=e.length,l=Ld(t,o);In(s,l)||(r.uniform1iv(this.addr,l),Nn(s,l));let c;this.type===r.SAMPLER_CUBE_SHADOW?c=kd(H_):c=W_;for(let f=0;f!==o;++f)t.setTextureCube(e[f]||c,l[f])}function GR(r,e,t){let s=this.cache,o=e.length,l=Ld(t,o);In(s,l)||(r.uniform1iv(this.addr,l),Nn(s,l));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||V_,l[c])}function WR(r){switch(r){case 5126:return TR;case 35664:return ER;case 35665:return AR;case 35666:return RR;case 35674:return CR;case 35675:return PR;case 35676:return IR;case 5124:case 35670:return NR;case 35667:case 35671:return LR;case 35668:case 35672:return kR;case 35669:case 35673:return DR;case 5125:return FR;case 36294:return UR;case 36295:return zR;case 36296:return OR;case 35678:case 36198:case 36298:case 36306:case 35682:return BR;case 35679:case 36299:case 36307:return HR;case 35680:case 36300:case 36308:case 36293:return VR;case 36289:case 36303:case 36311:case 36292:return GR}}var rg=class{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=wR(t.type)}},sg=class{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=WR(t.type)}},og=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){let o=this.seq;for(let l=0,c=o.length;l!==c;++l){let f=o[l];f.setValue(e,t[f.id],s)}}},ng=/(\w+)(\])?(\[|\.)?/g;function M_(r,e){r.seq.push(e),r.map[e.id]=e}function XR(r,e,t){let s=r.name,o=s.length;for(ng.lastIndex=0;;){let l=ng.exec(s),c=ng.lastIndex,f=l[1],h=l[2]==="]",m=l[3];if(h&&(f=f|0),m===void 0||m==="["&&c+2===o){M_(t,m===void 0?new rg(f,r,e):new sg(f,r,e));break}else{let _=t.map[f];_===void 0&&(_=new og(f),M_(t,_)),t=_}}}var Ja=class{constructor(e,t){this.seq=[],this.map={};let s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<s;++c){let f=e.getActiveUniform(t,c),h=e.getUniformLocation(t,f.name);XR(f,h,this)}let o=[],l=[];for(let c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(c):l.push(c);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,s,o){let l=this.map[t];l!==void 0&&l.setValue(e,s,o)}setOptional(e,t,s){let o=t[s];o!==void 0&&this.setValue(e,s,o)}static upload(e,t,s,o){for(let l=0,c=t.length;l!==c;++l){let f=t[l],h=s[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,o)}}static seqWithValue(e,t){let s=[];for(let o=0,l=e.length;o!==l;++o){let c=e[o];c.id in t&&s.push(c)}return s}};function w_(r,e,t){let s=r.createShader(e);return r.shaderSource(s,t),r.compileShader(s),s}var qR=37297,$R=0;function YR(r,e){let t=r.split(`
`),s=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=o;c<l;c++){let f=c+1;s.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return s.join(`
`)}var T_=new it;function jR(r){bt._getMatrix(T_,bt.workingColorSpace,r);let e=`mat3( ${T_.elements.map(t=>t.toFixed(4))} )`;switch(bt.getTransfer(r)){case Gl:return[e,"LinearTransferOETF"];case zt:return[e,"sRGBTransferOETF"];default:return $e("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function E_(r,e,t){let s=r.getShaderParameter(e,r.COMPILE_STATUS),l=(r.getShaderInfoLog(e)||"").trim();if(s&&l==="")return"";let c=/ERROR: 0:(\d+)/.exec(l);if(c){let f=parseInt(c[1]);return t.toUpperCase()+`

`+l+`

`+YR(r.getShaderSource(e),f)}else return l}function ZR(r,e){let t=jR(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var JR={[Tm]:"Linear",[Em]:"Reinhard",[Am]:"Cineon",[fu]:"ACESFilmic",[Cm]:"AgX",[Pm]:"Neutral",[Rm]:"Custom"};function KR(r,e){let t=JR[e];return t===void 0?($e("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Id=new H;function QR(){bt.getLuminanceCoefficients(Id);let r=Id.x.toFixed(4),e=Id.y.toFixed(4),t=Id.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function e2(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_u).join(`
`)}function t2(r){let e=[];for(let t in r){let s=r[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function n2(r,e){let t={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){let l=r.getActiveAttrib(e,o),c=l.name,f=1;l.type===r.FLOAT_MAT2&&(f=2),l.type===r.FLOAT_MAT3&&(f=3),l.type===r.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:r.getAttribLocation(e,c),locationSize:f}}return t}function _u(r){return r!==""}function A_(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function R_(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var i2=/^[ \t]*#include +<([\w\d./]+)>/gm;function ag(r){return r.replace(i2,r2)}function r2(r,e){let t=dt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return ag(t)}var s2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function C_(r){return r.replace(s2,o2)}function o2(r,e,t,s){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function P_(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}var a2={[Ro]:"SHADOWMAP_TYPE_PCF",[Hs]:"SHADOWMAP_TYPE_VSM"};function l2(r){return a2[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var u2={[$a]:"ENVMAP_MODE_REFRACTION"};function c2(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":u2[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var f2={[wm]:"ENVMAP_BLENDING_MULTIPLY",[qb]:"ENVMAP_BLENDING_MIX",[$b]:"ENVMAP_BLENDING_ADD"};function d2(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":f2[r.combine]||"ENVMAP_BLENDING_NONE"}function h2(r,e,t,s){let o=r.getContext(),l=t.defines,c=t.vertexShader,f=t.fragmentShader,h=l2(t),m=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",g=c2(t),_=d2(t),b=e2(t),v=t2(l),x=o.createProgram(),A,S,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(A=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(_u).join(`
`),A.length>0&&(A+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(_u).join(`
`),S.length>0&&(S+=`
`)):(A=[P_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_u).join(`
`),S=[P_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",t.envMap?"#define "+_:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==si?"#define TONE_MAPPING":"",t.toneMapping!==si?dt.tonemapping_pars_fragment:"",t.toneMapping!==si?KR("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,ZR("linearToOutputTexel",t.outputColorSpace),QR(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_u).join(`
`)),c=ag(c),c=A_(c,t),c=R_(c,t),f=ag(f),f=A_(f,t),f=R_(f,t),c=C_(c),f=C_(f),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,A=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+A,S=["#define varying in",t.glslVersion===Hm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);let w=y+A+c,L=y+S+f,C=w_(o,o.VERTEX_SHADER,w),I=w_(o,o.FRAGMENT_SHADER,L);o.attachShader(x,C),o.attachShader(x,I),t.index0AttributeName!==void 0?o.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(x,0,"position"),o.linkProgram(x);function N(F){if(r.debug.checkShaderErrors){let B=o.getProgramInfoLog(x)||"",W=o.getShaderInfoLog(C)||"",j=o.getShaderInfoLog(I)||"",z=B.trim(),K=W.trim(),se=j.trim(),ee=!0,me=!0;if(o.getProgramParameter(x,o.LINK_STATUS)===!1)if(ee=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,x,C,I);else{let ne=E_(o,C,"vertex"),ce=E_(o,I,"fragment");nt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(x,o.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+z+`
`+ne+`
`+ce)}else z!==""?$e("WebGLProgram: Program Info Log:",z):(K===""||se==="")&&(me=!1);me&&(F.diagnostics={runnable:ee,programLog:z,vertexShader:{log:K,prefix:A},fragmentShader:{log:se,prefix:S}})}o.deleteShader(C),o.deleteShader(I),M=new Ja(o,x),P=n2(o,x)}let M;this.getUniforms=function(){return M===void 0&&N(this),M};let P;this.getAttributes=function(){return P===void 0&&N(this),P};let G=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=o.getProgramParameter(x,qR)),G},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$R++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=I,this}var p2=0,lg=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,s){let o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){let t=this.shaderCache,s=t.get(e);return s===void 0&&(s=new ug(e),t.set(e,s)),s}},ug=class{constructor(e){this.id=p2++,this.code=e,this.usedTimes=0}};function m2(r){return r===Gs||r===vu||r===yu}function g2(r,e,t,s,o,l){let c=new rs,f=new lg,h=new Set,m=[],g=new Map,_=s.logarithmicDepthBuffer,b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return h.add(M),M===0?"uv":`uv${M}`}function x(M,P,G,F,B,W){let j=F.fog,z=B.geometry,K=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?F.environment:null,se=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,ee=e.get(M.envMap||K,se),me=b[M.type],ne=s.precision;M.precision!==null&&(ne=s.getMaxPrecision(M.precision),ne!==M.precision&&$e("WebGLProgram.getParameters:",M.precision,"not supported, using",ne,"instead."));let ce=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,he=ce!==void 0?ce.length:0,Be=0;z.morphAttributes.position!==void 0&&(Be=1),z.morphAttributes.normal!==void 0&&(Be=2),z.morphAttributes.color!==void 0&&(Be=3);let Ve,re,Pe,De;if(me){let Ae=Ur[me];Ve=Ae.vertexShader,re=Ae.fragmentShader}else{Ve=M.vertexShader,re=M.fragmentShader;let Ae=f.getVertexShaderStage(M),It=f.getFragmentShaderStage(M);f.update(M,Ae,It),Pe=Ae.id,De=It.id}let Xe=r.getRenderTarget(),Ne=r.state.buffers.depth.getReversed(),et=B.isInstancedMesh===!0,Wt=B.isBatchedMesh===!0,Ye=!!M.map,Et=!!M.matcap,_t=!!ee,ht=_t&&ee.isPMREMTexture===!0,fn=!!M.aoMap,Yt=!!M.lightMap,dn=!!M.bumpMap&&M.wireframe===!1,Xt=!!M.normalMap,Jn=!!M.displacementMap,qt=!!M.emissiveMap,hn=!!M.metalnessMap,Bn=!!M.roughnessMap,Kn=M.anisotropy>0,V=M.clearcoat>0,Hn=M.diffuseRoughness>0,Pt=M.dispersion>0,ut=M.retroreflectivity>0,Ee=M.iridescence>0,pn=M.sheen>0,qe=M.transmission>0,Ze=Kn&&!!M.anisotropyMap,k=V&&!!M.clearcoatMap,E=V&&!!M.clearcoatNormalMap,$=V&&!!M.clearcoatRoughnessMap,de=Hn&&!!M.diffuseRoughnessMap,ue=Ee&&!!M.iridescenceMap,xe=Ee&&!!M.iridescenceThicknessMap,Te=pn&&!!M.sheenColorMap,oe=pn&&!!M.sheenRoughnessMap,ae=!!M.specularMap,Me=!!M.specularColorMap,U=!!M.specularIntensityMap,le=qe&&!!M.transmissionMap,ie=qe&&!!M.thicknessMap,we=!!M.gradientMap,ye=!!M.alphaMap,_e=M.alphaTest>0,He=!!M.alphaHash,at=!!M.extensions,pe=si;M.toneMapped&&(Xe===null||Xe.isXRRenderTarget===!0)&&(pe=r.toneMapping);let Ge=ht?ee.isCompressedCubeTexture?ee.image[0].mipmaps:ee.mipmaps:null,ot={shaderID:me,shaderType:M.type,shaderName:M.name,vertexShader:Ve,fragmentShader:re,defines:M.defines,customVertexShaderID:Pe,customFragmentShaderID:De,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:ne,batching:Wt,batchingColor:Wt&&B._colorsTexture!==null,instancing:et,instancingColor:et&&B.instanceColor!==null,instancingMorph:et&&B.morphTexture!==null,outputColorSpace:Xe===null?r.outputColorSpace:Xe.isXRRenderTarget===!0?Xe.texture.colorSpace:bt.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:Ye,matcap:Et,envMap:_t,envMapMode:_t&&ee.mapping,envMapPMREM:ht,envMapMaxLod:ht?Ge.length-1:null,envMapSize:ht?Ge[0].width:null,aoMap:fn,lightMap:Yt,bumpMap:dn,normalMap:Xt,displacementMap:Jn,emissiveMap:qt,normalMapObjectSpace:Xt&&M.normalMapType===Zb,normalMapTangentSpace:Xt&&M.normalMapType===Cd,packedNormalMap:Xt&&M.normalMapType===Cd&&m2(M.normalMap.format),metalnessMap:hn,roughnessMap:Bn,anisotropy:Kn,anisotropyMap:Ze,clearcoat:V,clearcoatMap:k,clearcoatNormalMap:E,clearcoatRoughnessMap:$,diffuseRoughness:Hn,diffuseRoughnessMap:de,dispersion:Pt,retroreflection:ut,iridescence:Ee,iridescenceMap:ue,iridescenceThicknessMap:xe,sheen:pn,sheenColorMap:Te,sheenRoughnessMap:oe,specularMap:ae,specularColorMap:Me,specularIntensityMap:U,transmission:qe,transmissionMap:le,thicknessMap:ie,gradientMap:we,opaque:M.transparent===!1&&M.blending===qa&&M.alphaToCoverage===!1,alphaMap:ye,alphaTest:_e,alphaHash:He,combine:M.combine,mapUv:Ye&&v(M.map.channel),aoMapUv:fn&&v(M.aoMap.channel),lightMapUv:Yt&&v(M.lightMap.channel),bumpMapUv:dn&&v(M.bumpMap.channel),normalMapUv:Xt&&v(M.normalMap.channel),displacementMapUv:Jn&&v(M.displacementMap.channel),emissiveMapUv:qt&&v(M.emissiveMap.channel),metalnessMapUv:hn&&v(M.metalnessMap.channel),roughnessMapUv:Bn&&v(M.roughnessMap.channel),anisotropyMapUv:Ze&&v(M.anisotropyMap.channel),clearcoatMapUv:k&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:E&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&v(M.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:de&&v(M.diffuseRoughnessMap.channel),iridescenceMapUv:ue&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:oe&&v(M.sheenRoughnessMap.channel),specularMapUv:ae&&v(M.specularMap.channel),specularColorMapUv:Me&&v(M.specularColorMap.channel),specularIntensityMapUv:U&&v(M.specularIntensityMap.channel),transmissionMapUv:le&&v(M.transmissionMap.channel),thicknessMapUv:ie&&v(M.thicknessMap.channel),alphaMapUv:ye&&v(M.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Xt||Kn),vertexNormals:!!z.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!z.attributes.uv&&(Ye||ye),fog:!!j,useFog:M.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||z.attributes.normal===void 0&&Xt===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Ne,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:Be,numSunLights:P.sun.length,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numSunLightShadows:P.sunShadowMap.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:W.filter(Ae=>Ae.texture!==null).length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&G.length>0,shadowMapType:r.shadowMap.type,toneMapping:pe,decodeVideoTexture:Ye&&M.map.isVideoTexture===!0&&bt.getTransfer(M.map.colorSpace)===zt,decodeVideoTextureEmissive:qt&&M.emissiveMap.isVideoTexture===!0&&bt.getTransfer(M.emissiveMap.colorSpace)===zt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===wi,flipSided:M.side===mi,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:at&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&M.extensions.multiDraw===!0||Wt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ot.vertexUv1s=h.has(1),ot.vertexUv2s=h.has(2),ot.vertexUv3s=h.has(3),h.clear(),ot}function A(M){let P=[];if(M.shaderID?P.push(M.shaderID):(P.push(M.customVertexShaderID),P.push(M.customFragmentShaderID)),M.defines!==void 0)for(let G in M.defines)P.push(G),P.push(M.defines[G]);return M.isRawShaderMaterial===!1&&(S(P,M),y(P,M),P.push(r.outputColorSpace)),P.push(M.customProgramCacheKey),P.join()}function S(M,P){M.push(P.precision),M.push(P.outputColorSpace),M.push(P.envMapMode),M.push(P.envMapPMREM),M.push(P.envMapMaxLod),M.push(P.envMapSize),M.push(P.mapUv),M.push(P.alphaMapUv),M.push(P.lightMapUv),M.push(P.aoMapUv),M.push(P.bumpMapUv),M.push(P.normalMapUv),M.push(P.displacementMapUv),M.push(P.emissiveMapUv),M.push(P.metalnessMapUv),M.push(P.roughnessMapUv),M.push(P.anisotropyMapUv),M.push(P.clearcoatMapUv),M.push(P.clearcoatNormalMapUv),M.push(P.clearcoatRoughnessMapUv),M.push(P.diffuseRoughnessMapUv),M.push(P.iridescenceMapUv),M.push(P.iridescenceThicknessMapUv),M.push(P.sheenColorMapUv),M.push(P.sheenRoughnessMapUv),M.push(P.specularMapUv),M.push(P.specularColorMapUv),M.push(P.specularIntensityMapUv),M.push(P.transmissionMapUv),M.push(P.thicknessMapUv),M.push(P.combine),M.push(P.fogExp2),M.push(P.sizeAttenuation),M.push(P.morphTargetsCount),M.push(P.numSunLights),M.push(P.numDirLights),M.push(P.numPointLights),M.push(P.numSpotLights),M.push(P.numSpotLightMaps),M.push(P.numHemiLights),M.push(P.numRectAreaLights),M.push(P.numSunLightShadows),M.push(P.numDirLightShadows),M.push(P.numPointLightShadows),M.push(P.numSpotLightShadows),M.push(P.numSpotLightShadowsWithMaps),M.push(P.numLightProbes),M.push(P.numLightProbeGrids),M.push(P.shadowMapType),M.push(P.toneMapping),M.push(P.numClippingPlanes),M.push(P.numClipIntersection),M.push(P.depthPacking)}function y(M,P){c.disableAll(),P.instancing&&c.enable(0),P.instancingColor&&c.enable(1),P.instancingMorph&&c.enable(2),P.matcap&&c.enable(3),P.envMap&&c.enable(4),P.normalMapObjectSpace&&c.enable(5),P.normalMapTangentSpace&&c.enable(6),P.clearcoat&&c.enable(7),P.iridescence&&c.enable(8),P.alphaTest&&c.enable(9),P.vertexColors&&c.enable(10),P.vertexAlphas&&c.enable(11),P.vertexUv1s&&c.enable(12),P.vertexUv2s&&c.enable(13),P.vertexUv3s&&c.enable(14),P.vertexTangents&&c.enable(15),P.anisotropy&&c.enable(16),P.alphaHash&&c.enable(17),P.batching&&c.enable(18),P.dispersion&&c.enable(19),P.retroreflection&&c.enable(24),P.diffuseRoughness&&c.enable(25),P.batchingColor&&c.enable(20),P.gradientMap&&c.enable(21),P.packedNormalMap&&c.enable(22),P.vertexNormals&&c.enable(23),M.push(c.mask),c.disableAll(),P.fog&&c.enable(0),P.useFog&&c.enable(1),P.flatShading&&c.enable(2),P.logarithmicDepthBuffer&&c.enable(3),P.reversedDepthBuffer&&c.enable(4),P.skinning&&c.enable(5),P.morphTargets&&c.enable(6),P.morphNormals&&c.enable(7),P.morphColors&&c.enable(8),P.premultipliedAlpha&&c.enable(9),P.shadowMapEnabled&&c.enable(10),P.doubleSided&&c.enable(11),P.flipSided&&c.enable(12),P.useDepthPacking&&c.enable(13),P.dithering&&c.enable(14),P.transmission&&c.enable(15),P.sheen&&c.enable(16),P.opaque&&c.enable(17),P.pointsUvs&&c.enable(18),P.decodeVideoTexture&&c.enable(19),P.decodeVideoTextureEmissive&&c.enable(20),P.alphaToCoverage&&c.enable(21),P.numLightProbeGrids>0&&c.enable(22),P.hasPositionAttribute&&c.enable(23),M.push(c.mask)}function w(M){let P=b[M.type],G;if(P){let F=Ur[P];G=f_.clone(F.uniforms)}else G=M.uniforms;return G}function L(M,P){let G=g.get(P);return G!==void 0?++G.usedTimes:(G=new h2(r,P,M,o),m.push(G),g.set(P,G)),G}function C(M){if(--M.usedTimes===0){let P=m.indexOf(M);m[P]=m[m.length-1],m.pop(),g.delete(M.cacheKey),M.destroy()}}function I(M){f.remove(M)}function N(){f.dispose()}return{getParameters:x,getProgramCacheKey:A,getUniforms:w,acquireProgram:L,releaseProgram:C,releaseShaderCache:I,programs:m,dispose:N}}function v2(){let r=new WeakMap;function e(c){return r.has(c)}function t(c){let f=r.get(c);return f===void 0&&(f={},r.set(c,f)),f}function s(c){r.delete(c)}function o(c,f,h){r.get(c)[f]=h}function l(){r=new WeakMap}return{has:e,get:t,remove:s,update:o,dispose:l}}function y2(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function I_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function N_(){let r=[],e=0,t=[],s=[],o=[];function l(){e=0,t.length=0,s.length=0,o.length=0}function c(b){let v=0;return b.isInstancedMesh&&(v+=2),b.isSkinnedMesh&&(v+=1),v}function f(b,v,x,A,S,y){let w=r[e];return w===void 0?(w={id:b.id,object:b,geometry:v,material:x,materialVariant:c(b),groupOrder:A,renderOrder:b.renderOrder,z:S,group:y},r[e]=w):(w.id=b.id,w.object=b,w.geometry=v,w.material=x,w.materialVariant=c(b),w.groupOrder=A,w.renderOrder=b.renderOrder,w.z=S,w.group=y),e++,w}function h(b,v,x,A,S,y,w){w.reversedDepth===!0&&(S=-S);let L=f(b,v,x,A,S,y);x.transmission>0?s.push(L):x.transparent===!0?o.push(L):t.push(L)}function m(b,v,x,A,S,y){let w=f(b,v,x,A,S,y);x.transmission>0?s.unshift(w):x.transparent===!0?o.unshift(w):t.unshift(w)}function g(b,v){t.length>1&&t.sort(b||y2),s.length>1&&s.sort(v||I_),o.length>1&&o.sort(v||I_)}function _(){for(let b=e,v=r.length;b<v;b++){let x=r[b];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:s,transparent:o,init:l,push:h,unshift:m,finish:_,sort:g}}function b2(){let r=new WeakMap;function e(s,o){let l=r.get(s),c;return l===void 0?(c=new N_,r.set(s,[c])):o>=l.length?(c=new N_,l.push(c)):c=l[o],c}function t(){r=new WeakMap}return{get:e,dispose:t}}function _2(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new H,color:new We};break;case"SpotLight":t={position:new H,direction:new H,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new H,halfWidth:new H,halfHeight:new H};break}return r[e.id]=t,t}}}function S2(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var x2=0;function M2(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function w2(r){let e=new _2,t=S2(),s={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new H);let o=new H,l=new Ot,c=new Ot;function f(m){let g=0,_=0,b=0;for(let W=0;W<9;W++)s.probe[W].set(0,0,0);let v=0,x=0,A=0,S=0,y=0,w=0,L=0,C=0,I=0,N=0,M=0,P=0,G=0,F=0;m.sort(M2);for(let W=0,j=m.length;W<j;W++){let z=m[W],K=z.color,se=z.intensity,ee=z.distance,me=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===Gs?me=z.shadow.map.texture:me=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)g+=K.r*se,_+=K.g*se,b+=K.b*se;else if(z.isLightProbe){for(let ne=0;ne<9;ne++)s.probe[ne].addScaledVector(z.sh.coefficients[ne],se);F++}else if(z.isSunLight){let ne=e.get(z);if(ne.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){let ce=z.shadow,he=t.get(z);he.shadowIntensity=ce.intensity,he.shadowBias=ce.bias,he.shadowNormalBias=ce.normalBias,he.shadowRadius=ce.radius,he.shadowMapSize.copy(ce.mapSize).multiply(ce.getFrameExtents()),s.sunShadow[x]=he,s.sunShadowMap[x]=me;let Be=ce.getViewportCount();for(let Ve=0;Ve<Be;Ve++)s.sunShadowMatrix[A+Ve]=ce.getMatrix(Ve),s.sunShadowCascade[A+Ve]=ce._cascadeData[Ve];A+=Be,x++}s.sun[v]=ne,v++}else if(z.isDirectionalLight){let ne=e.get(z);if(ne.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){let ce=z.shadow,he=t.get(z);he.shadowIntensity=ce.intensity,he.shadowBias=ce.bias,he.shadowNormalBias=ce.normalBias,he.shadowRadius=ce.radius,he.shadowMapSize=ce.mapSize,s.directionalShadow[S]=he,s.directionalShadowMap[S]=me,s.directionalShadowMatrix[S]=z.shadow.matrix,I++}s.directional[S]=ne,S++}else if(z.isSpotLight){let ne=e.get(z);ne.position.setFromMatrixPosition(z.matrixWorld),ne.color.copy(K).multiplyScalar(se),ne.distance=ee,ne.coneCos=Math.cos(z.angle),ne.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),ne.decay=z.decay,s.spot[w]=ne;let ce=z.shadow;if(z.map&&(s.spotLightMap[P]=z.map,P++,ce.updateMatrices(z),z.castShadow&&G++),s.spotLightMatrix[w]=ce.matrix,z.castShadow){let he=t.get(z);he.shadowIntensity=ce.intensity,he.shadowBias=ce.bias,he.shadowNormalBias=ce.normalBias,he.shadowRadius=ce.radius,he.shadowMapSize=ce.mapSize,s.spotShadow[w]=he,s.spotShadowMap[w]=me,M++}w++}else if(z.isRectAreaLight){let ne=e.get(z);ne.color.copy(K).multiplyScalar(se),ne.halfWidth.set(z.width*.5,0,0),ne.halfHeight.set(0,z.height*.5,0),s.rectArea[L]=ne,L++}else if(z.isPointLight){let ne=e.get(z);if(ne.color.copy(z.color).multiplyScalar(z.intensity),ne.distance=z.distance,ne.decay=z.decay,z.castShadow){let ce=z.shadow,he=t.get(z);he.shadowIntensity=ce.intensity,he.shadowBias=ce.bias,he.shadowNormalBias=ce.normalBias,he.shadowRadius=ce.radius,he.shadowMapSize=ce.mapSize,he.shadowCameraNear=ce.camera.near,he.shadowCameraFar=ce.camera.far,s.pointShadow[y]=he,s.pointShadowMap[y]=me,s.pointShadowMatrix[y]=z.shadow.matrix,N++}s.point[y]=ne,y++}else if(z.isHemisphereLight){let ne=e.get(z);ne.skyColor.copy(z.color).multiplyScalar(se),ne.groundColor.copy(z.groundColor).multiplyScalar(se),s.hemi[C]=ne,C++}}L>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Le.LTC_FLOAT_1,s.rectAreaLTC2=Le.LTC_FLOAT_2):(s.rectAreaLTC1=Le.LTC_HALF_1,s.rectAreaLTC2=Le.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=_,s.ambient[2]=b;let B=s.hash;(B.sunLength!==v||B.directionalLength!==S||B.pointLength!==y||B.spotLength!==w||B.rectAreaLength!==L||B.hemiLength!==C||B.numSunShadows!==x||B.numDirectionalShadows!==I||B.numPointShadows!==N||B.numSpotShadows!==M||B.numSpotMaps!==P||B.numLightProbes!==F)&&(s.sun.length=v,s.directional.length=S,s.spot.length=w,s.rectArea.length=L,s.point.length=y,s.hemi.length=C,s.sunShadow.length=x,s.sunShadowMap.length=x,s.sunShadowMatrix.length=A,s.sunShadowCascade.length=A,s.directionalShadow.length=I,s.directionalShadowMap.length=I,s.directionalShadowMatrix.length=I,s.pointShadow.length=N,s.pointShadowMap.length=N,s.pointShadowMatrix.length=N,s.spotShadow.length=M,s.spotShadowMap.length=M,s.spotLightMatrix.length=M+P-G,s.spotLightMap.length=P,s.numSpotLightShadowsWithMaps=G,s.numLightProbes=F,B.sunLength=v,B.directionalLength=S,B.pointLength=y,B.spotLength=w,B.rectAreaLength=L,B.hemiLength=C,B.numSunShadows=x,B.numDirectionalShadows=I,B.numPointShadows=N,B.numSpotShadows=M,B.numSpotMaps=P,B.numLightProbes=F,s.version=x2++)}function h(m,g){let _=0,b=0,v=0,x=0,A=0,S=0,y=g.matrixWorldInverse;for(let w=0,L=m.length;w<L;w++){let C=m[w];if(C.isSunLight){let I=s.sun[_];I.direction.setFromMatrixPosition(C.matrixWorld),I.direction.transformDirection(y),_++}else if(C.isDirectionalLight){let I=s.directional[b];I.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),I.direction.sub(o),I.direction.transformDirection(y),b++}else if(C.isSpotLight){let I=s.spot[x];I.position.setFromMatrixPosition(C.matrixWorld),I.position.applyMatrix4(y),I.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),I.direction.sub(o),I.direction.transformDirection(y),x++}else if(C.isRectAreaLight){let I=s.rectArea[A];I.position.setFromMatrixPosition(C.matrixWorld),I.position.applyMatrix4(y),c.identity(),l.copy(C.matrixWorld),l.premultiply(y),c.extractRotation(l),I.halfWidth.set(C.width*.5,0,0),I.halfHeight.set(0,C.height*.5,0),I.halfWidth.applyMatrix4(c),I.halfHeight.applyMatrix4(c),A++}else if(C.isPointLight){let I=s.point[v];I.position.setFromMatrixPosition(C.matrixWorld),I.position.applyMatrix4(y),v++}else if(C.isHemisphereLight){let I=s.hemi[S];I.direction.setFromMatrixPosition(C.matrixWorld),I.direction.transformDirection(y),S++}}}return{setup:f,setupView:h,state:s}}function L_(r){let e=new w2(r),t=[],s=[],o=[];function l(_){g.camera=_,t.length=0,s.length=0,o.length=0}function c(_){_.isLightProbeGrid?o.push(_):t.push(_)}function f(_){s.push(_)}function h(){e.setup(t),o.sort((_,b)=>_.priority-b.priority||_.id-b.id)}function m(_){e.setupView(t,_)}let g={lightsArray:t,shadowsArray:s,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:g,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:f}}function T2(r){let e=new WeakMap;function t(o,l=0){let c=e.get(o),f;return c===void 0?(f=new L_(r),e.set(o,[f])):l>=c.length?(f=new L_(r),c.push(f)):f=c[l],f}function s(){e=new WeakMap}return{get:t,dispose:s}}var E2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,A2=`uniform sampler2D shadow_pass;
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
}`,R2=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],C2=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],k_=new Ot,bu=new H,ig=new H;function P2(r,e,t){let s=new Us,o=new lt,l=new lt,c=new en,f=new Rf,h=new Cf,m={},g=t.maxTextureSize,_={[Vs]:mi,[mi]:Vs,[wi]:wi},b=new pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:E2,fragmentShader:A2}),v=b.clone();v.defines.HORIZONTAL_PASS=1;let x=new ri;x.setAttribute("position",new hr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let A=new jn(x,b),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ro;let y=this.type;this.render=function(N,M,P){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||N.length===0)return;this.type===Xa&&($e("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ro);let G=r.getRenderTarget(),F=r.getActiveCubeFace(),B=r.getActiveMipmapLevel(),W=r.state;W.setBlending(Co),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let j=y!==this.type;j&&M.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(K=>K.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,K=N.length;z<K;z++){let se=N[z],ee=se.shadow;if(ee===void 0){$e("WebGLShadowMap:",se,"has no shadow.");continue}if(ee.autoUpdate===!1&&ee.needsUpdate===!1)continue;o.copy(ee.mapSize);let me=ee.getFrameExtents();o.multiply(me),l.copy(ee.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(l.x=Math.floor(g/me.x),o.x=l.x*me.x,ee.mapSize.x=l.x),o.y>g&&(l.y=Math.floor(g/me.y),o.y=l.y*me.y,ee.mapSize.y=l.y));let ne=r.state.buffers.depth.getReversed();if(ee.camera._reversedDepth=ne,ee.map===null||j===!0){if(ee.map!==null&&(ee.map.depthTexture!==null&&(ee.map.depthTexture.dispose(),ee.map.depthTexture=null),ee.map.dispose()),this.type===Hs){if(se.isPointLight){$e("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ee.map=new zi(o.x,o.y,{format:Gs,type:mr,minFilter:hi,magFilter:hi,generateMipmaps:!1}),ee.map.texture.name=se.name+".shadowMap",ee.map.depthTexture=new as(o.x,o.y,Ki),ee.map.depthTexture.name=se.name+".shadowMapDepth",ee.map.depthTexture.format=ns,ee.map.depthTexture.compareFunction=null,ee.map.depthTexture.minFilter=zn,ee.map.depthTexture.magFilter=zn}else se.isPointLight?(ee.map=new Su(o.x),ee.map.depthTexture=new Ql(o.x,pr)):(ee.map=new zi(o.x,o.y),ee.map.depthTexture=new as(o.x,o.y,pr)),ee.map.depthTexture.name=se.name+".shadowMap",ee.map.depthTexture.format=ns,this.type===Ro?(ee.map.depthTexture.compareFunction=ne?Om:zm,ee.map.depthTexture.minFilter=hi,ee.map.depthTexture.magFilter=hi):(ee.map.depthTexture.compareFunction=null,ee.map.depthTexture.minFilter=zn,ee.map.depthTexture.magFilter=zn);ee.camera.updateProjectionMatrix()}ee.map.isWebGLCubeRenderTarget!==!0&&(ee.map.width!==o.x||ee.map.height!==o.y)&&ee.map.setSize(o.x,o.y);let ce=ee.map.isWebGLCubeRenderTarget?6:ee.getViewportCount();se.isPointLight!==!0&&ee.updateMatrices(se,P);let he=(ee.camera.layers.mask&4294967294)!==0?ee.camera.layers:P.layers;for(let Be=0;Be<ce;Be++){let Ve=ee.getCamera(Be);if(se.isPointLight){let re=ee.camera,Pe=ee.matrix,De=se.distance||re.far;De!==re.far&&(re.far=De,re.updateProjectionMatrix()),bu.setFromMatrixPosition(se.matrixWorld),re.position.copy(bu),ig.copy(re.position),ig.add(R2[Be]),re.up.copy(C2[Be]),re.lookAt(ig),re.updateMatrixWorld(),Pe.makeTranslation(-bu.x,-bu.y,-bu.z),k_.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),ee._frustum.setFromProjectionMatrix(k_,re.coordinateSystem,re.reversedDepth)}if(ee.map.isWebGLCubeRenderTarget)r.setRenderTarget(ee.map,Be),r.clear();else{Be===0&&(r.setRenderTarget(ee.map),r.clear());let re=ee.getViewport(Be);c.set(l.x*re.x,l.y*re.y,l.x*re.z,l.y*re.w),W.viewport(c)}s=ee.getFrustum(Be),C(M,P,Ve,se,he,this.type)}ee.isPointLightShadow!==!0&&this.type===Hs&&w(ee,P),ee.needsUpdate=!1}y=this.type,S.needsUpdate=!1,r.setRenderTarget(G,F,B)};function w(N,M){let P=e.update(A);b.defines.VSM_SAMPLES!==N.blurSamples&&(b.defines.VSM_SAMPLES=N.blurSamples,v.defines.VSM_SAMPLES=N.blurSamples,b.needsUpdate=!0,v.needsUpdate=!0),N.mapPass===null?N.mapPass=new zi(o.x,o.y,{format:Gs,type:mr}):(N.mapPass.width!==N.map.width||N.mapPass.height!==N.map.height)&&N.mapPass.setSize(N.map.width,N.map.height),b.uniforms.shadow_pass.value=N.map.depthTexture,b.uniforms.resolution.value.set(N.map.width,N.map.height),b.uniforms.radius.value=N.radius,r.setRenderTarget(N.mapPass),r.clear(),r.renderBufferDirect(M,null,P,b,A,null),v.uniforms.shadow_pass.value=N.mapPass.texture,v.uniforms.resolution.value.set(N.map.width,N.map.height),v.uniforms.radius.value=N.radius,r.setRenderTarget(N.map),r.clear(),r.renderBufferDirect(M,null,P,v,A,null)}function L(N,M,P,G){let F=null,B=P.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(B!==void 0)F=B;else if(F=P.isPointLight===!0?h:f,r.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0||M.alphaToCoverage===!0){let W=F.uuid,j=M.uuid,z=m[W];z===void 0&&(z={},m[W]=z);let K=z[j];K===void 0&&(K=F.clone(),z[j]=K,M.addEventListener("dispose",I)),F=K}if(F.visible=M.visible,F.wireframe=M.wireframe,G===Hs?F.side=M.shadowSide!==null?M.shadowSide:M.side:F.side=M.shadowSide!==null?M.shadowSide:_[M.side],F.alphaMap=M.alphaMap,F.alphaTest=M.alphaToCoverage===!0?.5:M.alphaTest,F.map=M.map,F.clipShadows=M.clipShadows,F.clippingPlanes=M.clippingPlanes,F.clipIntersection=M.clipIntersection,F.displacementMap=M.displacementMap,F.displacementScale=M.displacementScale,F.displacementBias=M.displacementBias,F.wireframeLinewidth=M.wireframeLinewidth,F.linewidth=M.linewidth,P.isPointLight===!0&&F.isMeshDistanceMaterial===!0){let W=r.properties.get(F);W.light=P}return F}function C(N,M,P,G,F,B){if(N.visible===!1)return;if(N.layers.test(F)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&B===Hs)&&(!N.frustumCulled||N.intersectsFrustum(s))){N.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,N.matrixWorld);let z=e.update(N),K=N.material;if(Array.isArray(K)){let se=z.groups;for(let ee=0,me=se.length;ee<me;ee++){let ne=se[ee],ce=K[ne.materialIndex];if(ce&&ce.visible){let he=L(N,ce,G,B);N.onBeforeShadow(r,N,M,P,z,he,ne),r.renderBufferDirect(P,null,z,he,N,ne),N.onAfterShadow(r,N,M,P,z,he,ne)}}}else if(K.visible){let se=L(N,K,G,B);N.onBeforeShadow(r,N,M,P,z,se,null),r.renderBufferDirect(P,null,z,se,N,null),N.onAfterShadow(r,N,M,P,z,se,null)}}let j=N.children;for(let z=0,K=j.length;z<K;z++)C(j[z],M,P,G,F,B)}function I(N){N.target.removeEventListener("dispose",I);for(let P in m){let G=m[P],F=N.target.uuid;F in G&&(G[F].dispose(),delete G[F])}}}function I2(r,e){function t(){let U=!1,le=new en,ie=null,we=new en(0,0,0,0);return{setMask:function(ye){ie!==ye&&!U&&(r.colorMask(ye,ye,ye,ye),ie=ye)},setLocked:function(ye){U=ye},setClear:function(ye,_e,He,at,pe){pe===!0&&(ye*=at,_e*=at,He*=at),le.set(ye,_e,He,at),we.equals(le)===!1&&(r.clearColor(ye,_e,He,at),we.copy(le))},reset:function(){U=!1,ie=null,we.set(-1,0,0,0)}}}function s(){let U=!1,le=!1,ie=null,we=null,ye=null;return{setReversed:function(_e){if(le!==_e){let He=e.get("EXT_clip_control");_e?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),le=_e;let at=ye;ye=null,this.setClear(at)}},getReversed:function(){return le},setTest:function(_e){_e?Ne(r.DEPTH_TEST):et(r.DEPTH_TEST)},setMask:function(_e){ie!==_e&&!U&&(r.depthMask(_e),ie=_e)},setFunc:function(_e){if(le&&(_e=a_[_e]),we!==_e){switch(_e){case uf:r.depthFunc(r.NEVER);break;case cf:r.depthFunc(r.ALWAYS);break;case ff:r.depthFunc(r.LESS);break;case La:r.depthFunc(r.LEQUAL);break;case df:r.depthFunc(r.EQUAL);break;case hf:r.depthFunc(r.GEQUAL);break;case pf:r.depthFunc(r.GREATER);break;case mf:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}we=_e}},setLocked:function(_e){U=_e},setClear:function(_e){ye!==_e&&(ye=_e,le&&(_e=1-_e),r.clearDepth(_e))},reset:function(){U=!1,ie=null,we=null,ye=null,le=!1}}}function o(){let U=!1,le=null,ie=null,we=null,ye=null,_e=null,He=null,at=null,pe=null;return{setTest:function(Ge){U||(Ge?Ne(r.STENCIL_TEST):et(r.STENCIL_TEST))},setMask:function(Ge){le!==Ge&&!U&&(r.stencilMask(Ge),le=Ge)},setFunc:function(Ge,ot,Ae){(ie!==Ge||we!==ot||ye!==Ae)&&(r.stencilFunc(Ge,ot,Ae),ie=Ge,we=ot,ye=Ae)},setOp:function(Ge,ot,Ae){(_e!==Ge||He!==ot||at!==Ae)&&(r.stencilOp(Ge,ot,Ae),_e=Ge,He=ot,at=Ae)},setLocked:function(Ge){U=Ge},setClear:function(Ge){pe!==Ge&&(r.clearStencil(Ge),pe=Ge)},reset:function(){U=!1,le=null,ie=null,we=null,ye=null,_e=null,He=null,at=null,pe=null}}}let l=new t,c=new s,f=new o,h={},m=new WeakMap,g={},_={},b={},v=new WeakMap,x=[],A=null,S=!1,y=null,w=null,L=null,C=null,I=null,N=null,M=null,P=new We(0,0,0),G=0,F=!1,B=null,W=null,j=null,z=null,K=null,se=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ee=!1,me=0,ne=r.getParameter(r.VERSION);ne.indexOf("WebGL")!==-1?(me=parseFloat(/^WebGL (\d)/.exec(ne)[1]),ee=me>=1):ne.indexOf("OpenGL ES")!==-1&&(me=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),ee=me>=2);let ce=null,he={},Be=r.getParameter(r.SCISSOR_BOX),Ve=r.getParameter(r.VIEWPORT),re=new en().fromArray(Be),Pe=new en().fromArray(Ve);function De(U,le,ie,we){let ye=new Uint8Array(4),_e=r.createTexture();r.bindTexture(U,_e),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let He=0;He<ie;He++)U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY?r.texImage3D(le,0,r.RGBA,1,1,we,0,r.RGBA,r.UNSIGNED_BYTE,ye):r.texImage2D(le+He,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ye);return _e}let Xe={};Xe[r.TEXTURE_2D]=De(r.TEXTURE_2D,r.TEXTURE_2D,1),Xe[r.TEXTURE_CUBE_MAP]=De(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Xe[r.TEXTURE_2D_ARRAY]=De(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Xe[r.TEXTURE_3D]=De(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),Ne(r.DEPTH_TEST),c.setFunc(La),dn(!1),Xt(ym),Ne(r.CULL_FACE),fn(Co);function Ne(U){g[U]!==!0&&(r.enable(U),g[U]=!0)}function et(U){g[U]!==!1&&(r.disable(U),g[U]=!1)}function Wt(U,le){return b[U]!==le?(r.bindFramebuffer(U,le),b[U]=le,U===r.DRAW_FRAMEBUFFER&&(b[r.FRAMEBUFFER]=le),U===r.FRAMEBUFFER&&(b[r.DRAW_FRAMEBUFFER]=le),!0):!1}function Ye(U,le){let ie=x,we=!1;if(U){ie=v.get(le),ie===void 0&&(ie=[],v.set(le,ie));let ye=U.textures;if(ie.length!==ye.length||ie[0]!==r.COLOR_ATTACHMENT0){for(let _e=0,He=ye.length;_e<He;_e++)ie[_e]=r.COLOR_ATTACHMENT0+_e;ie.length=ye.length,we=!0}}else ie[0]!==r.BACK&&(ie[0]=r.BACK,we=!0);we&&r.drawBuffers(ie)}function Et(U){return A!==U?(r.useProgram(U),A=U,!0):!1}let _t={[Po]:r.FUNC_ADD,[Cb]:r.FUNC_SUBTRACT,[Pb]:r.FUNC_REVERSE_SUBTRACT};_t[Ib]=r.MIN,_t[Nb]=r.MAX;let ht={[Lb]:r.ZERO,[kb]:r.ONE,[Db]:r.SRC_COLOR,[xm]:r.SRC_ALPHA,[Hb]:r.SRC_ALPHA_SATURATE,[Ob]:r.DST_COLOR,[Ub]:r.DST_ALPHA,[Fb]:r.ONE_MINUS_SRC_COLOR,[Mm]:r.ONE_MINUS_SRC_ALPHA,[Bb]:r.ONE_MINUS_DST_COLOR,[zb]:r.ONE_MINUS_DST_ALPHA,[Vb]:r.CONSTANT_COLOR,[Gb]:r.ONE_MINUS_CONSTANT_COLOR,[Wb]:r.CONSTANT_ALPHA,[Xb]:r.ONE_MINUS_CONSTANT_ALPHA};function fn(U,le,ie,we,ye,_e,He,at,pe,Ge){if(U===Co){S===!0&&(et(r.BLEND),S=!1);return}if(S===!1&&(Ne(r.BLEND),S=!0),U!==Rb){if(U!==y||Ge!==F){if((w!==Po||I!==Po)&&(r.blendEquation(r.FUNC_ADD),w=Po,I=Po),Ge)switch(U){case qa:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case cu:r.blendFunc(r.ONE,r.ONE);break;case _m:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Sm:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:nt("WebGLState: Invalid blending: ",U);break}else switch(U){case qa:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case cu:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case _m:nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Sm:nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:nt("WebGLState: Invalid blending: ",U);break}L=null,C=null,N=null,M=null,P.set(0,0,0),G=0,y=U,F=Ge}return}ye=ye||le,_e=_e||ie,He=He||we,(le!==w||ye!==I)&&(r.blendEquationSeparate(_t[le],_t[ye]),w=le,I=ye),(ie!==L||we!==C||_e!==N||He!==M)&&(r.blendFuncSeparate(ht[ie],ht[we],ht[_e],ht[He]),L=ie,C=we,N=_e,M=He),(at.equals(P)===!1||pe!==G)&&(r.blendColor(at.r,at.g,at.b,pe),P.copy(at),G=pe),y=U,F=!1}function Yt(U,le){U.side===wi?et(r.CULL_FACE):Ne(r.CULL_FACE);let ie=U.side===mi;le&&(ie=!ie),dn(ie),U.blending===qa&&U.transparent===!1?fn(Co):fn(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),c.setFunc(U.depthFunc),c.setTest(U.depthTest),c.setMask(U.depthWrite),l.setMask(U.colorWrite);let we=U.stencilWrite;f.setTest(we),we&&(f.setMask(U.stencilWriteMask),f.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),f.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),qt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Ne(r.SAMPLE_ALPHA_TO_COVERAGE):et(r.SAMPLE_ALPHA_TO_COVERAGE)}function dn(U){B!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),B=U)}function Xt(U){U!==Eb?(Ne(r.CULL_FACE),U!==W&&(U===ym?r.cullFace(r.BACK):U===Ab?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):et(r.CULL_FACE),W=U}function Jn(U){U!==j&&(ee&&r.lineWidth(U),j=U)}function qt(U,le,ie){U?(Ne(r.POLYGON_OFFSET_FILL),(z!==le||K!==ie)&&(z=le,K=ie,c.getReversed()&&(le=-le,ie=-ie),r.polygonOffset(le,ie))):et(r.POLYGON_OFFSET_FILL)}function hn(U){U?Ne(r.SCISSOR_TEST):et(r.SCISSOR_TEST)}function Bn(U){U===void 0&&(U=r.TEXTURE0+se-1),ce!==U&&(r.activeTexture(U),ce=U)}function Kn(U,le,ie){ie===void 0&&(ce===null?ie=r.TEXTURE0+se-1:ie=ce);let we=he[ie];we===void 0&&(we={type:void 0,texture:void 0},he[ie]=we),(we.type!==U||we.texture!==le)&&(ce!==ie&&(r.activeTexture(ie),ce=ie),r.bindTexture(U,le||Xe[U]),we.type=U,we.texture=le)}function V(){let U=he[ce];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Hn(){try{r.compressedTexImage2D(...arguments)}catch(U){nt("WebGLState:",U)}}function Pt(){try{r.compressedTexImage3D(...arguments)}catch(U){nt("WebGLState:",U)}}function ut(){try{r.texSubImage2D(...arguments)}catch(U){nt("WebGLState:",U)}}function Ee(){try{r.texSubImage3D(...arguments)}catch(U){nt("WebGLState:",U)}}function pn(){try{r.compressedTexSubImage2D(...arguments)}catch(U){nt("WebGLState:",U)}}function qe(){try{r.compressedTexSubImage3D(...arguments)}catch(U){nt("WebGLState:",U)}}function Ze(){try{r.texStorage2D(...arguments)}catch(U){nt("WebGLState:",U)}}function k(){try{r.texStorage3D(...arguments)}catch(U){nt("WebGLState:",U)}}function E(){try{r.texImage2D(...arguments)}catch(U){nt("WebGLState:",U)}}function $(){try{r.texImage3D(...arguments)}catch(U){nt("WebGLState:",U)}}function de(U){return _[U]!==void 0?_[U]:r.getParameter(U)}function ue(U,le){_[U]!==le&&(r.pixelStorei(U,le),_[U]=le)}function xe(U){re.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),re.copy(U))}function Te(U){Pe.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),Pe.copy(U))}function oe(U,le){let ie=m.get(le);ie===void 0&&(ie=new WeakMap,m.set(le,ie));let we=ie.get(U);we===void 0&&(we=r.getUniformBlockIndex(le,U.name),r.uniformBlockBinding(le,we,we),ie.set(U,we))}function ae(U,le,ie){let ye=m.get(le).get(U);h[ye]!==ie&&(r.bindBufferBase(r.UNIFORM_BUFFER,ye,ie),h[ye]=ie)}function Me(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),c.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),g={},_={},ce=null,he={},b={},h={},v=new WeakMap,x=[],A=null,S=!1,y=null,w=null,L=null,C=null,I=null,N=null,M=null,P=new We(0,0,0),G=0,F=!1,B=null,W=null,j=null,z=null,K=null,re.set(0,0,r.canvas.width,r.canvas.height),Pe.set(0,0,r.canvas.width,r.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:Ne,disable:et,bindFramebuffer:Wt,drawBuffers:Ye,useProgram:Et,setBlending:fn,setMaterial:Yt,setFlipSided:dn,setCullFace:Xt,setLineWidth:Jn,setPolygonOffset:qt,setScissorTest:hn,activeTexture:Bn,bindTexture:Kn,unbindTexture:V,compressedTexImage2D:Hn,compressedTexImage3D:Pt,texImage2D:E,texImage3D:$,pixelStorei:ue,getParameter:de,updateUBOMapping:oe,uniformBlockBinding:ae,texStorage2D:Ze,texStorage3D:k,texSubImage2D:ut,texSubImage3D:Ee,compressedTexSubImage2D:pn,compressedTexSubImage3D:qe,scissor:xe,viewport:Te,reset:Me}}function N2(r,e,t,s,o,l,c){let f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new lt,g=new WeakMap,_=new Set,b,v=new WeakMap,x=new Set,A=new FinalizationRegistry(k=>x.delete(k)),S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(k,E){return S?new OffscreenCanvas(k,E):Da("canvas")}function w(k,E,$){let de=1,ue=Ze(k);if((ue.width>$||ue.height>$)&&(de=$/Math.max(ue.width,ue.height)),de<1)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap||typeof VideoFrame<"u"&&k instanceof VideoFrame){let xe=Math.floor(de*ue.width),Te=Math.floor(de*ue.height);b===void 0&&(b=y(xe,Te));let oe=E?y(xe,Te):b;return oe.width=xe,oe.height=Te,oe.getContext("2d").drawImage(k,0,0,xe,Te),$e("WebGLRenderer: Texture has been resized from ("+ue.width+"x"+ue.height+") to ("+xe+"x"+Te+")."),oe}else return"data"in k&&$e("WebGLRenderer: Image in DataTexture is too big ("+ue.width+"x"+ue.height+")."),k;return k}function L(k){return k.generateMipmaps}function C(k){r.generateMipmap(k)}function I(k){return k.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:k.isWebGL3DRenderTarget?r.TEXTURE_3D:k.isWebGLArrayRenderTarget||k.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function N(k,E,$,de,ue,xe=!1){if(k!==null){if(r[k]!==void 0)return r[k];$e("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let Te;de&&(Te=e.get("EXT_texture_norm16"),Te||$e("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let oe=E;if(E===r.RED&&($===r.FLOAT&&(oe=r.R32F),$===r.HALF_FLOAT&&(oe=r.R16F),$===r.UNSIGNED_BYTE&&(oe=r.R8),$===r.UNSIGNED_SHORT&&Te&&(oe=Te.R16_EXT),$===r.SHORT&&Te&&(oe=Te.R16_SNORM_EXT)),E===r.RED_INTEGER&&($===r.UNSIGNED_BYTE&&(oe=r.R8UI),$===r.UNSIGNED_SHORT&&(oe=r.R16UI),$===r.UNSIGNED_INT&&(oe=r.R32UI),$===r.BYTE&&(oe=r.R8I),$===r.SHORT&&(oe=r.R16I),$===r.INT&&(oe=r.R32I)),E===r.RG&&($===r.FLOAT&&(oe=r.RG32F),$===r.HALF_FLOAT&&(oe=r.RG16F),$===r.UNSIGNED_BYTE&&(oe=r.RG8),$===r.UNSIGNED_SHORT&&Te&&(oe=Te.RG16_EXT),$===r.SHORT&&Te&&(oe=Te.RG16_SNORM_EXT)),E===r.RG_INTEGER&&($===r.UNSIGNED_BYTE&&(oe=r.RG8UI),$===r.UNSIGNED_SHORT&&(oe=r.RG16UI),$===r.UNSIGNED_INT&&(oe=r.RG32UI),$===r.BYTE&&(oe=r.RG8I),$===r.SHORT&&(oe=r.RG16I),$===r.INT&&(oe=r.RG32I)),E===r.RGB_INTEGER&&($===r.UNSIGNED_BYTE&&(oe=r.RGB8UI),$===r.UNSIGNED_SHORT&&(oe=r.RGB16UI),$===r.UNSIGNED_INT&&(oe=r.RGB32UI),$===r.BYTE&&(oe=r.RGB8I),$===r.SHORT&&(oe=r.RGB16I),$===r.INT&&(oe=r.RGB32I)),E===r.RGBA_INTEGER&&($===r.UNSIGNED_BYTE&&(oe=r.RGBA8UI),$===r.UNSIGNED_SHORT&&(oe=r.RGBA16UI),$===r.UNSIGNED_INT&&(oe=r.RGBA32UI),$===r.BYTE&&(oe=r.RGBA8I),$===r.SHORT&&(oe=r.RGBA16I),$===r.INT&&(oe=r.RGBA32I)),E===r.RGB&&($===r.UNSIGNED_SHORT&&Te&&(oe=Te.RGB16_EXT),$===r.SHORT&&Te&&(oe=Te.RGB16_SNORM_EXT),$===r.UNSIGNED_INT_5_9_9_9_REV&&(oe=r.RGB9_E5),$===r.UNSIGNED_INT_10F_11F_11F_REV&&(oe=r.R11F_G11F_B10F)),E===r.RGBA){let ae=xe?Gl:bt.getTransfer(ue);$===r.FLOAT&&(oe=r.RGBA32F),$===r.HALF_FLOAT&&(oe=r.RGBA16F),$===r.UNSIGNED_BYTE&&(oe=ae===zt?r.SRGB8_ALPHA8:r.RGBA8),$===r.UNSIGNED_SHORT&&Te&&(oe=Te.RGBA16_EXT),$===r.SHORT&&Te&&(oe=Te.RGBA16_SNORM_EXT),$===r.UNSIGNED_SHORT_4_4_4_4&&(oe=r.RGBA4),$===r.UNSIGNED_SHORT_5_5_5_1&&(oe=r.RGB5_A1)}return(oe===r.R16F||oe===r.R32F||oe===r.RG16F||oe===r.RG32F||oe===r.RGBA16F||oe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function M(k,E){let $;return k?E===null||E===pr||E===No?$=r.DEPTH24_STENCIL8:E===Ki?$=r.DEPTH32F_STENCIL8:E===Ya&&($=r.DEPTH24_STENCIL8,$e("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===pr||E===No?$=r.DEPTH_COMPONENT24:E===Ki?$=r.DEPTH_COMPONENT32F:E===Ya&&($=r.DEPTH_COMPONENT16),$}function P(k,E){return L(k)===!0||k.isFramebufferTexture&&k.minFilter!==zn&&k.minFilter!==hi?Math.log2(Math.max(E.width,E.height))+1:k.mipmaps.length>0?k.mipmaps.length:k.isCompressedTexture&&Array.isArray(k.image)?E.mipmaps.length:1}function G(k){let E=new WeakRef(k);s.get(k).__ref=E,x.add(E),A.register(k,E,E)}function F(k){let E=s.get(k).__ref;E!==void 0&&(x.delete(E),A.unregister(E))}function B(k){j(k.target)}function W(k){z(k.target)}function j(k){k.removeEventListener("dispose",B),F(k),se(k),k.isVideoTexture&&g.delete(k),k.isHTMLTexture&&_.delete(k)}function z(k){k.removeEventListener("dispose",W),F(k),me(k)}function K(){for(let k of x){let E=k.deref();E!==void 0&&(E.isRenderTarget===!0?z(E):j(E))}x.clear(),_.clear()}function se(k){let E=s.get(k);if(E.__webglInit===void 0)return;let $=k.source,de=v.get($);if(de){let ue=de[E.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&ee(k),Object.keys(de).length===0&&v.delete($)}s.remove(k)}function ee(k){let E=s.get(k);r.deleteTexture(E.__webglTexture);let $=k.source,de=v.get($);delete de[E.__cacheKey],c.memory.textures--}function me(k){let E=s.get(k);E.__depthDisposeCallback&&E.__depthDisposeCallback();let $=k.depthTexture;if($&&$.renderTarget===k&&j($),k.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(E.__webglFramebuffer[ue]))for(let xe=0;xe<E.__webglFramebuffer[ue].length;xe++)r.deleteFramebuffer(E.__webglFramebuffer[ue][xe]);else r.deleteFramebuffer(E.__webglFramebuffer[ue]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[ue])}else{if(Array.isArray(E.__webglFramebuffer))for(let ue=0;ue<E.__webglFramebuffer.length;ue++)r.deleteFramebuffer(E.__webglFramebuffer[ue]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ue=0;ue<E.__webglColorRenderbuffer.length;ue++)E.__webglColorRenderbuffer[ue]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[ue]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let de=k.textures;for(let ue=0,xe=de.length;ue<xe;ue++){let Te=s.get(de[ue]);Te.__webglTexture&&(r.deleteTexture(Te.__webglTexture),c.memory.textures--),s.remove(de[ue])}s.remove(k)}let ne=0;function ce(){ne=0}function he(){return ne}function Be(k){ne=k}function Ve(){let k=ne;return k>=o.maxTextures&&$e("WebGLTextures: Trying to use "+(k+1)+" texture units while this GPU supports only "+o.maxTextures),ne+=1,k}function re(k){let E=[];return E.push(k.wrapS),E.push(k.wrapT),E.push(k.wrapR||0),E.push(k.magFilter),E.push(k.minFilter),E.push(k.anisotropy),E.push(k.internalFormat),E.push(k.format),E.push(k.type),E.push(k.generateMipmaps),E.push(k.mipmapsAutoUpdate),E.push(k.premultiplyAlpha),E.push(k.flipY),E.push(k.unpackAlignment),E.push(k.colorSpace),E.join()}function Pe(k,E){let $=s.get(k);if(k.isVideoTexture&&pn(k),k.isRenderTargetTexture===!1&&k.isExternalTexture!==!0&&k.version>0&&$.__version!==k.version){let de=k.image;if(de===null)$e("WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)$e("WebGLRenderer: Texture marked for update but image is incomplete");else{Yt($,k,E);return}}else k.isExternalTexture&&($.__webglTexture=k.sourceTexture?k.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,$.__webglTexture,r.TEXTURE0+E)}function De(k,E){let $=s.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&$.__version!==k.version){Yt($,k,E);return}else k.isExternalTexture&&($.__webglTexture=k.sourceTexture?k.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,$.__webglTexture,r.TEXTURE0+E)}function Xe(k,E){let $=s.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&$.__version!==k.version){Yt($,k,E);return}t.bindTexture(r.TEXTURE_3D,$.__webglTexture,r.TEXTURE0+E)}function Ne(k,E){let $=s.get(k);if(k.version>0&&$.__version!==k.version){dn($,k,E);return}t.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture,r.TEXTURE0+E)}let et={[gf]:r.REPEAT,[Cr]:r.CLAMP_TO_EDGE,[vf]:r.MIRRORED_REPEAT},Wt={[zn]:r.NEAREST,[Yb]:r.NEAREST_MIPMAP_NEAREST,[du]:r.NEAREST_MIPMAP_LINEAR,[hi]:r.LINEAR,[Xf]:r.LINEAR_MIPMAP_NEAREST,[us]:r.LINEAR_MIPMAP_LINEAR},Ye={[Kb]:r.NEVER,[Bm]:r.ALWAYS,[Qb]:r.LESS,[zm]:r.LEQUAL,[e_]:r.EQUAL,[Om]:r.GEQUAL,[t_]:r.GREATER,[n_]:r.NOTEQUAL};function Et(k,E){if(E.type===Ki&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===hi||E.magFilter===Xf||E.magFilter===du||E.magFilter===us||E.minFilter===hi||E.minFilter===Xf||E.minFilter===du||E.minFilter===us)&&$e("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(k,r.TEXTURE_WRAP_S,et[E.wrapS]),r.texParameteri(k,r.TEXTURE_WRAP_T,et[E.wrapT]),(k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY)&&r.texParameteri(k,r.TEXTURE_WRAP_R,et[E.wrapR]),r.texParameteri(k,r.TEXTURE_MAG_FILTER,Wt[E.magFilter]),r.texParameteri(k,r.TEXTURE_MIN_FILTER,Wt[E.minFilter]),E.compareFunction&&(r.texParameteri(k,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(k,r.TEXTURE_COMPARE_FUNC,Ye[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===zn||E.minFilter!==du&&E.minFilter!==us||E.type===Ki&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){let $=e.get("EXT_texture_filter_anisotropic");r.texParameterf(k,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function _t(k,E){let $=!1;k.__webglInit===void 0&&(k.__webglInit=!0,E.addEventListener("dispose",B),G(E));let de=E.source,ue=v.get(de);ue===void 0&&(ue={},v.set(de,ue));let xe=re(E);if(xe!==k.__cacheKey){ue[xe]===void 0&&(ue[xe]={texture:r.createTexture(),usedTimes:0},c.memory.textures++,$=!0),ue[xe].usedTimes++;let Te=ue[k.__cacheKey];Te!==void 0&&(ue[k.__cacheKey].usedTimes--,Te.usedTimes===0&&ee(E)),k.__cacheKey=xe,k.__webglTexture=ue[xe].texture}return $}function ht(k,E,$){return Math.floor(Math.floor(k/$)/E)}function fn(k,E,$,de){let xe=k.updateRanges;if(xe.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,$,de,E.data);else{xe.sort((U,le)=>U.start-le.start);let Te=0;for(let U=1;U<xe.length;U++){let le=xe[Te],ie=xe[U],we=le.start+le.count,ye=ht(ie.start,E.width,4),_e=ht(le.start,E.width,4);ie.start<=we+1&&ye===_e&&ht(ie.start+ie.count-1,E.width,4)===ye?le.count=Math.max(le.count,ie.start+ie.count-le.start):(++Te,xe[Te]=ie)}xe.length=Te+1;let oe=t.getParameter(r.UNPACK_ROW_LENGTH),ae=t.getParameter(r.UNPACK_SKIP_PIXELS),Me=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let U=0,le=xe.length;U<le;U++){let ie=xe[U],we=Math.floor(ie.start/4),ye=Math.ceil(ie.count/4),_e=we%E.width,He=Math.floor(we/E.width),at=ye,pe=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,_e),t.pixelStorei(r.UNPACK_SKIP_ROWS,He),t.texSubImage2D(r.TEXTURE_2D,0,_e,He,at,pe,$,de,E.data)}k.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,oe),t.pixelStorei(r.UNPACK_SKIP_PIXELS,ae),t.pixelStorei(r.UNPACK_SKIP_ROWS,Me)}}function Yt(k,E,$){let de=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(de=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(de=r.TEXTURE_3D);let ue=_t(k,E),xe=E.source;t.bindTexture(de,k.__webglTexture,r.TEXTURE0+$);let Te=s.get(xe);if(xe.version!==Te.__version||ue===!0){if(t.activeTexture(r.TEXTURE0+$),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let pe=bt.getPrimaries(bt.workingColorSpace),Ge=E.colorSpace===fs?null:bt.getPrimaries(E.colorSpace),ot=E.colorSpace===fs||pe===Ge?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot)}t.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment);let ae=w(E.image,!1,o.maxTextureSize);ae=qe(E,ae);let Me=l.convert(E.format,E.colorSpace),U=l.convert(E.type),le=N(E.internalFormat,Me,U,E.normalized,E.colorSpace,E.isVideoTexture);Et(de,E);let ie,we=E.mipmaps,ye=E.isVideoTexture!==!0,_e=Te.__version===void 0||ue===!0,He=xe.dataReady,at=P(E,ae);if(E.isDepthTexture)le=M(E.format===cs,E.type),_e&&(ye?t.texStorage2D(r.TEXTURE_2D,1,le,ae.width,ae.height):t.texImage2D(r.TEXTURE_2D,0,le,ae.width,ae.height,0,Me,U,null));else if(E.isDataTexture)if(we.length>0){ye&&_e&&t.texStorage2D(r.TEXTURE_2D,at,le,we[0].width,we[0].height);for(let pe=0,Ge=we.length;pe<Ge;pe++)ie=we[pe],ye?He&&t.texSubImage2D(r.TEXTURE_2D,pe,0,0,ie.width,ie.height,Me,U,ie.data):t.texImage2D(r.TEXTURE_2D,pe,le,ie.width,ie.height,0,Me,U,ie.data);E.generateMipmaps=!1}else ye?(_e&&t.texStorage2D(r.TEXTURE_2D,at,le,ae.width,ae.height),He&&fn(E,ae,Me,U)):t.texImage2D(r.TEXTURE_2D,0,le,ae.width,ae.height,0,Me,U,ae.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ye&&_e&&t.texStorage3D(r.TEXTURE_2D_ARRAY,at,le,we[0].width,we[0].height,ae.depth);for(let pe=0,Ge=we.length;pe<Ge;pe++)if(ie=we[pe],E.format!==Bi)if(Me!==null)if(ye){if(He)if(E.layerUpdates.size>0){let ot=Zm(ie.width,ie.height,E.format,E.type);for(let Ae of E.layerUpdates){let It=ie.data.subarray(Ae*ot/ie.data.BYTES_PER_ELEMENT,(Ae+1)*ot/ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,pe,0,0,Ae,ie.width,ie.height,1,Me,It)}}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,pe,0,0,0,ie.width,ie.height,ae.depth,Me,ie.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,pe,le,ie.width,ie.height,ae.depth,0,ie.data,0,0);else $e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ye?He&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,pe,0,0,0,ie.width,ie.height,ae.depth,Me,U,ie.data):t.texImage3D(r.TEXTURE_2D_ARRAY,pe,le,ie.width,ie.height,ae.depth,0,Me,U,ie.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{ye&&_e&&t.texStorage2D(r.TEXTURE_2D,at,le,we[0].width,we[0].height);for(let pe=0,Ge=we.length;pe<Ge;pe++)ie=we[pe],E.format!==Bi?Me!==null?ye?He&&t.compressedTexSubImage2D(r.TEXTURE_2D,pe,0,0,ie.width,ie.height,Me,ie.data):t.compressedTexImage2D(r.TEXTURE_2D,pe,le,ie.width,ie.height,0,ie.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ye?He&&t.texSubImage2D(r.TEXTURE_2D,pe,0,0,ie.width,ie.height,Me,U,ie.data):t.texImage2D(r.TEXTURE_2D,pe,le,ie.width,ie.height,0,Me,U,ie.data)}else if(E.isDataArrayTexture)if(ye){if(_e&&t.texStorage3D(r.TEXTURE_2D_ARRAY,at,le,ae.width,ae.height,ae.depth),He)if(E.layerUpdates.size>0){let pe=Zm(ae.width,ae.height,E.format,E.type);for(let Ge of E.layerUpdates){let ot=ae.data.subarray(Ge*pe/ae.data.BYTES_PER_ELEMENT,(Ge+1)*pe/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Ge,ae.width,ae.height,1,Me,U,ot)}E.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Me,U,ae.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,le,ae.width,ae.height,ae.depth,0,Me,U,ae.data);else if(E.isData3DTexture)ye?(_e&&t.texStorage3D(r.TEXTURE_3D,at,le,ae.width,ae.height,ae.depth),He&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Me,U,ae.data)):t.texImage3D(r.TEXTURE_3D,0,le,ae.width,ae.height,ae.depth,0,Me,U,ae.data);else if(E.isFramebufferTexture){if(_e)if(ye)t.texStorage2D(r.TEXTURE_2D,at,le,ae.width,ae.height);else{let pe=ae.width,Ge=ae.height;for(let ot=0;ot<at;ot++)t.texImage2D(r.TEXTURE_2D,ot,le,pe,Ge,0,Me,U,null),pe>>=1,Ge>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in r){let pe=r.canvas;if(pe.hasAttribute("layoutsubtree")||pe.setAttribute("layoutsubtree","true"),ae.parentNode!==pe){pe.appendChild(ae),_.add(E),pe.onpaint=Ge=>{let ot=Ge.changedElements;for(let Ae of _)ot.includes(Ae.image)&&(Ae.needsUpdate=!0)},pe.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,ae);else{let ot=r.RGBA,Ae=r.RGBA,It=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,ot,Ae,It,ae)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(we.length>0){if(ye&&_e){let pe=Ze(we[0]);t.texStorage2D(r.TEXTURE_2D,at,le,pe.width,pe.height)}for(let pe=0,Ge=we.length;pe<Ge;pe++)ie=we[pe],ye?He&&t.texSubImage2D(r.TEXTURE_2D,pe,0,0,Me,U,ie):t.texImage2D(r.TEXTURE_2D,pe,le,Me,U,ie);E.generateMipmaps=!1}else if(ye){if(_e){let pe=Ze(ae);t.texStorage2D(r.TEXTURE_2D,at,le,pe.width,pe.height)}He&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Me,U,ae)}else t.texImage2D(r.TEXTURE_2D,0,le,Me,U,ae);L(E)&&E.mipmapsAutoUpdate===!0&&C(de),Te.__version=xe.version,E.onUpdate&&E.onUpdate(E)}k.__version=E.version}function dn(k,E,$){if(E.image.length!==6)return;let de=_t(k,E),ue=E.source;t.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+$);let xe=s.get(ue);if(ue.version!==xe.__version||de===!0){t.activeTexture(r.TEXTURE0+$);let Te=bt.getPrimaries(bt.workingColorSpace),oe=E.colorSpace===fs?null:bt.getPrimaries(E.colorSpace),ae=E.colorSpace===fs||Te===oe?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let Me=E.isCompressedTexture||E.image[0].isCompressedTexture,U=E.image[0]&&E.image[0].isDataTexture,le=[];for(let Ae=0;Ae<6;Ae++)!Me&&!U?le[Ae]=w(E.image[Ae],!0,o.maxCubemapSize):le[Ae]=U?E.image[Ae].image:E.image[Ae],le[Ae]=qe(E,le[Ae]);let ie=le[0],we=l.convert(E.format,E.colorSpace),ye=l.convert(E.type),_e=N(E.internalFormat,we,ye,E.normalized,E.colorSpace),He=E.isVideoTexture!==!0,at=xe.__version===void 0||de===!0,pe=ue.dataReady,Ge=P(E,ie);Et(r.TEXTURE_CUBE_MAP,E);let ot;if(E.isDepthTexture){if(_e=M(E.format===cs,E.type),at)if(He)t.texStorage2D(r.TEXTURE_CUBE_MAP,1,_e,ie.width,ie.height);else for(let Ae=0;Ae<6;Ae++)t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,_e,ie.width,ie.height,0,we,ye,null)}else if(Me){He&&at&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ge,_e,ie.width,ie.height);for(let Ae=0;Ae<6;Ae++){ot=le[Ae].mipmaps;for(let It=0;It<ot.length;It++){let vn=ot[It];E.format!==Bi?we!==null?He?pe&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,It,0,0,vn.width,vn.height,we,vn.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,It,_e,vn.width,vn.height,0,vn.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,It,0,0,vn.width,vn.height,we,ye,vn.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,It,_e,vn.width,vn.height,0,we,ye,vn.data)}}}else{if(ot=E.mipmaps,He&&at){ot.length>0&&Ge++;let Ae=Ze(le[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Ge,_e,Ae.width,Ae.height)}for(let Ae=0;Ae<6;Ae++)if(U){He?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,le[Ae].width,le[Ae].height,we,ye,le[Ae].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,_e,le[Ae].width,le[Ae].height,0,we,ye,le[Ae].data);for(let It=0;It<ot.length;It++){let Ti=ot[It].image[Ae].image;He?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,It+1,0,0,Ti.width,Ti.height,we,ye,Ti.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,It+1,_e,Ti.width,Ti.height,0,we,ye,Ti.data)}}else{He?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,we,ye,le[Ae]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,_e,we,ye,le[Ae]);for(let It=0;It<ot.length;It++){let vn=ot[It];He?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,It+1,0,0,we,ye,vn.image[Ae]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,It+1,_e,we,ye,vn.image[Ae])}}}L(E)&&E.mipmapsAutoUpdate===!0&&C(r.TEXTURE_CUBE_MAP),xe.__version=ue.version,E.onUpdate&&E.onUpdate(E)}k.__version=E.version}function Xt(k,E,$,de,ue,xe){let Te=l.convert($.format,$.colorSpace),oe=l.convert($.type),ae=N($.internalFormat,Te,oe,$.normalized,$.colorSpace),Me=s.get(E),U=s.get($);if(U.__renderTarget=E,!Me.__hasExternalTextures){let le=Math.max(1,E.width>>xe),ie=Math.max(1,E.height>>xe);ue===r.TEXTURE_3D||ue===r.TEXTURE_2D_ARRAY?t.texImage3D(ue,xe,ae,le,ie,E.depth,0,Te,oe,null):t.texImage2D(ue,xe,ae,le,ie,0,Te,oe,null)}t.bindFramebuffer(r.FRAMEBUFFER,k),Ee(E)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,de,ue,U.__webglTexture,0,ut(E)):(ue===r.TEXTURE_2D||ue>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,de,ue,U.__webglTexture,xe),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Jn(k,E,$){if(r.bindRenderbuffer(r.RENDERBUFFER,k),E.depthBuffer){let de=E.depthTexture,ue=de&&de.isDepthTexture?de.type:null,xe=M(E.stencilBuffer,ue),Te=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Ee(E)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ut(E),xe,E.width,E.height):$?r.renderbufferStorageMultisample(r.RENDERBUFFER,ut(E),xe,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,xe,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Te,r.RENDERBUFFER,k)}else{let de=E.textures;for(let ue=0;ue<de.length;ue++){let xe=de[ue],Te=l.convert(xe.format,xe.colorSpace),oe=l.convert(xe.type),ae=N(xe.internalFormat,Te,oe,xe.normalized,xe.colorSpace);Ee(E)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ut(E),ae,E.width,E.height):$?r.renderbufferStorageMultisample(r.RENDERBUFFER,ut(E),ae,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,ae,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function qt(k,E,$){let de=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,k),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ue=s.get(E.depthTexture);ue.__renderTarget=E;let xe=de?E.depthTexture.image[0]:E.depthTexture.image;(!ue.__webglTexture||xe.width!==E.width||xe.height!==E.height)&&(xe.width=E.width,xe.height=E.height,E.depthTexture.needsUpdate=!0),de?Ne(E.depthTexture,0):Pe(E.depthTexture,0);let Te=ue.__webglTexture,oe=ut(E),ae=de?r.TEXTURE_CUBE_MAP_POSITIVE_X+$:r.TEXTURE_2D,Me=E.depthTexture.format===cs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===ns)Ee(E)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Me,ae,Te,0,oe):r.framebufferTexture2D(r.FRAMEBUFFER,Me,ae,Te,0);else if(E.depthTexture.format===cs)Ee(E)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Me,ae,Te,0,oe):r.framebufferTexture2D(r.FRAMEBUFFER,Me,ae,Te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function hn(k){let E=s.get(k),$=k.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==k.depthTexture){let de=k.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),de){let ue=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,de.removeEventListener("dispose",ue)};de.addEventListener("dispose",ue),E.__depthDisposeCallback=ue}E.__boundDepthTexture=de}if(k.depthTexture&&!E.__autoAllocateDepthBuffer)if($)for(let de=0;de<6;de++)qt(E.__webglFramebuffer[de],k,de);else k.texture.mipmaps.length>0?qt(E.__webglFramebuffer[0],k,0):qt(E.__webglFramebuffer,k,0);else if($){E.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[de]),E.__webglDepthbuffer[de]===void 0)E.__webglDepthbuffer[de]=r.createRenderbuffer(),Jn(E.__webglDepthbuffer[de],k,!1);else{let ue=k.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,xe=E.__webglDepthbuffer[de];r.bindRenderbuffer(r.RENDERBUFFER,xe),r.framebufferRenderbuffer(r.FRAMEBUFFER,ue,r.RENDERBUFFER,xe)}}else if(k.texture.mipmaps.length>0?t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),Jn(E.__webglDepthbuffer,k,!1);else{let ue=k.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,xe=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,xe),r.framebufferRenderbuffer(r.FRAMEBUFFER,ue,r.RENDERBUFFER,xe)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Bn(k,E,$){let de=s.get(k);E!==void 0&&Xt(de.__webglFramebuffer,k,k.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),$!==void 0&&hn(k)}function Kn(k){let E=k.texture,$=s.get(k),de=s.get(E);k.addEventListener("dispose",W),G(k);let ue=k.textures,xe=k.isWebGLCubeRenderTarget===!0,Te=ue.length>1;if(Te||(de.__webglTexture===void 0&&(de.__webglTexture=r.createTexture()),de.__version=E.version,c.memory.textures++),xe){$.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(E.mipmaps.length>0){$.__webglFramebuffer[oe]=[];for(let ae=0;ae<E.mipmaps.length;ae++)$.__webglFramebuffer[oe][ae]=r.createFramebuffer()}else $.__webglFramebuffer[oe]=r.createFramebuffer()}else{if(E.mipmaps.length>0){$.__webglFramebuffer=[];for(let oe=0;oe<E.mipmaps.length;oe++)$.__webglFramebuffer[oe]=r.createFramebuffer()}else $.__webglFramebuffer=r.createFramebuffer();if(Te)for(let oe=0,ae=ue.length;oe<ae;oe++){let Me=s.get(ue[oe]);Me.__webglTexture===void 0&&(Me.__webglTexture=r.createTexture(),c.memory.textures++)}if(k.samples>0&&Ee(k)===!1){$.__webglMultisampledFramebuffer=r.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let oe=0;oe<ue.length;oe++){let ae=ue[oe];$.__webglColorRenderbuffer[oe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,$.__webglColorRenderbuffer[oe]);let Me=l.convert(ae.format,ae.colorSpace),U=l.convert(ae.type),le=N(ae.internalFormat,Me,U,ae.normalized,ae.colorSpace,k.isXRRenderTarget===!0),ie=ut(k);r.renderbufferStorageMultisample(r.RENDERBUFFER,ie,le,k.width,k.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.RENDERBUFFER,$.__webglColorRenderbuffer[oe])}r.bindRenderbuffer(r.RENDERBUFFER,null),k.depthBuffer&&($.__webglDepthRenderbuffer=r.createRenderbuffer(),Jn($.__webglDepthRenderbuffer,k,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(xe){t.bindTexture(r.TEXTURE_CUBE_MAP,de.__webglTexture),Et(r.TEXTURE_CUBE_MAP,E);for(let oe=0;oe<6;oe++)if(E.mipmaps.length>0)for(let ae=0;ae<E.mipmaps.length;ae++)Xt($.__webglFramebuffer[oe][ae],k,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ae);else Xt($.__webglFramebuffer[oe],k,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);L(E)?C(r.TEXTURE_CUBE_MAP):E.mipmaps.length>0&&r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}else if(Te){for(let oe=0,ae=ue.length;oe<ae;oe++){let Me=ue[oe],U=s.get(Me),le=r.TEXTURE_2D;(k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(le=k.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(le,U.__webglTexture),Et(le,Me),Xt($.__webglFramebuffer,k,Me,r.COLOR_ATTACHMENT0+oe,le,0),L(Me)&&C(le)}t.unbindTexture()}else{let oe=r.TEXTURE_2D;if((k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(oe=k.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(oe,de.__webglTexture),Et(oe,E),E.mipmaps.length>0)for(let ae=0;ae<E.mipmaps.length;ae++)Xt($.__webglFramebuffer[ae],k,E,r.COLOR_ATTACHMENT0,oe,ae);else Xt($.__webglFramebuffer,k,E,r.COLOR_ATTACHMENT0,oe,0);L(E)?C(oe):E.mipmaps.length>0&&r.texParameteri(oe,r.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}k.depthBuffer&&hn(k)}function V(k){let E=k.textures;for(let $=0,de=E.length;$<de;$++){let ue=E[$];if(L(ue)&&ue.mipmapsAutoUpdate===!0){let xe=I(k),Te=s.get(ue).__webglTexture;t.bindTexture(xe,Te),C(xe),t.unbindTexture()}}}let Hn=[];function Pt(k){if(k.samples>0){if(Ee(k)===!1){let E=k.textures,$=k.width,de=k.height,ue=r.COLOR_BUFFER_BIT,xe=k.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Te=s.get(k),oe=E.length>1;if(oe)for(let Me=0;Me<E.length;Me++)t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),k.texture.mipmaps.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Me=0;Me<E.length;Me++){if(k.resolveDepthBuffer&&(k.depthBuffer&&(ue|=r.DEPTH_BUFFER_BIT),k.stencilBuffer&&k.resolveStencilBuffer&&(ue|=r.STENCIL_BUFFER_BIT)),oe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Te.__webglColorRenderbuffer[Me]);let U=s.get(E[Me]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,U,0)}r.blitFramebuffer(0,0,$,de,0,0,$,de,ue,r.NEAREST),h===!0&&(Hn.length=0,Hn.push(r.COLOR_ATTACHMENT0+Me),k.depthBuffer&&k.storeMultisampledDepthBuffer===!1&&Hn.push(xe),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Hn))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),oe)for(let Me=0;Me<E.length;Me++){t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.RENDERBUFFER,Te.__webglColorRenderbuffer[Me]);let U=s.get(E[Me]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.TEXTURE_2D,U,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(k.depthBuffer&&k.storeMultisampledDepthBuffer===!1&&h){let E=k.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function ut(k){return Math.min(o.maxSamples,k.samples)}function Ee(k){let E=s.get(k);return k.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function pn(k){let E=c.render.frame;g.get(k)!==E&&(g.set(k,E),k.update())}function qe(k,E){let $=k.colorSpace,de=k.format,ue=k.type;return k.isCompressedTexture===!0||k.isVideoTexture===!0||$!==_o&&$!==fs&&(bt.getTransfer($)===zt?(de!==Bi||ue!==oi)&&$e("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):nt("WebGLTextures: Unsupported texture color space:",$)),E}function Ze(k){return typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement?(m.width=k.naturalWidth||k.width,m.height=k.naturalHeight||k.height):typeof VideoFrame<"u"&&k instanceof VideoFrame?(m.width=k.displayWidth,m.height=k.displayHeight):(m.width=k.width,m.height=k.height),m}this.allocateTextureUnit=Ve,this.resetTextureUnits=ce,this.getTextureUnits=he,this.setTextureUnits=Be,this.setTexture2D=Pe,this.setTexture2DArray=De,this.setTexture3D=Xe,this.setTextureCube=Ne,this.rebindTextures=Bn,this.setupRenderTarget=Kn,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=hn,this.setupFrameBufferTexture=Xt,this.useMultisampledRTT=Ee,this.dispose=K}function L2(r,e){function t(s,o=fs){let l,c=bt.getTransfer(o);if(s===oi)return r.UNSIGNED_BYTE;if(s===$f)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Yf)return r.UNSIGNED_SHORT_5_5_5_1;if(s===km)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Dm)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Nm)return r.BYTE;if(s===Lm)return r.SHORT;if(s===Ya)return r.UNSIGNED_SHORT;if(s===qf)return r.INT;if(s===pr)return r.UNSIGNED_INT;if(s===Ki)return r.FLOAT;if(s===mr)return r.HALF_FLOAT;if(s===Fm)return r.ALPHA;if(s===Um)return r.RGB;if(s===Bi)return r.RGBA;if(s===ns)return r.DEPTH_COMPONENT;if(s===cs)return r.DEPTH_STENCIL;if(s===jf)return r.RED;if(s===Zf)return r.RED_INTEGER;if(s===Gs)return r.RG;if(s===Jf)return r.RG_INTEGER;if(s===Kf)return r.RGBA_INTEGER;if(s===hu||s===pu||s===mu||s===gu)if(c===zt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===hu)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===pu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===mu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===gu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===hu)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===pu)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===mu)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===gu)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Qf||s===ed||s===td||s===nd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===Qf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ed)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===td)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===nd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===id||s===rd||s===sd||s===od||s===ad||s===vu||s===ld)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===id||s===rd)return c===zt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===sd)return c===zt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(s===od)return l.COMPRESSED_R11_EAC;if(s===ad)return l.COMPRESSED_SIGNED_R11_EAC;if(s===vu)return l.COMPRESSED_RG11_EAC;if(s===ld)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===ud||s===cd||s===fd||s===dd||s===hd||s===pd||s===md||s===gd||s===vd||s===yd||s===bd||s===_d||s===Sd||s===xd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===ud)return c===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===cd)return c===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===fd)return c===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===dd)return c===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===hd)return c===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===pd)return c===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===md)return c===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===gd)return c===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===vd)return c===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===yd)return c===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===bd)return c===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===_d)return c===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Sd)return c===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===xd)return c===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Md||s===wd||s===Td)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===Md)return c===zt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===wd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Td)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ed||s===Ad||s===yu||s===Rd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===Ed)return l.COMPRESSED_RED_RGTC1_EXT;if(s===Ad)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===yu)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Rd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===No?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:t}}var k2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,D2=`
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

}`,cg=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let s=new eu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,s=new pi({vertexShader:k2,fragmentShader:D2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new jn(new ls(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},fg=class extends Pr{constructor(e,t){super();let s=this,o=null,l=1,c=null,f="local-floor",h=1,m=null,g=null,_=null,b=null,v=null,x=null,A=typeof XRWebGLBinding<"u",S=new cg,y={},w=t.getContextAttributes(),L=null,C=null,I=[],N=[],M=new lt,P=null,G=null,F=new di;F.viewport=new en;let B=new di;B.viewport=new en;let W=[F,B],j=new Hf,z=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let Pe=I[re];return Pe===void 0&&(Pe=new Oa,I[re]=Pe),Pe.getTargetRaySpace()},this.getControllerGrip=function(re){let Pe=I[re];return Pe===void 0&&(Pe=new Oa,I[re]=Pe),Pe.getGripSpace()},this.getHand=function(re){let Pe=I[re];return Pe===void 0&&(Pe=new Oa,I[re]=Pe),Pe.getHandSpace()};function se(re){let Pe=N.indexOf(re.inputSource);if(Pe===-1)return;let De=I[Pe];De!==void 0&&(De.update(re.inputSource,re.frame,m||c),De.dispatchEvent({type:re.type,data:re.inputSource}))}function ee(){o.removeEventListener("select",se),o.removeEventListener("selectstart",se),o.removeEventListener("selectend",se),o.removeEventListener("squeeze",se),o.removeEventListener("squeezestart",se),o.removeEventListener("squeezeend",se),o.removeEventListener("end",ee),o.removeEventListener("inputsourceschange",me);for(let re=0;re<I.length;re++){let Pe=N[re];Pe!==null&&(N[re]=null,I[re].disconnect(Pe))}z=null,K=null,S.reset();for(let re in y)delete y[re];if(e.setRenderTarget(L),v=null,b=null,_=null,o=null,C=null,Ve.stop(),s.isPresenting=!1,e.setPixelRatio(P),e.setSize(M.width,M.height,!1),G!==null){let re=G.camera;re.fov=G.fov,re.zoom=G.zoom,re.updateProjectionMatrix(),G=null}s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){l=re,s.isPresenting===!0&&$e("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){f=re,s.isPresenting===!0&&$e("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||c},this.setReferenceSpace=function(re){m=re},this.getBaseLayer=function(){return b!==null?b:v},this.getBinding=function(){return _===null&&A&&(_=new XRWebGLBinding(o,t)),_},this.getFrame=function(){return x},this.getSession=function(){return o},this.setSession=async function(re){if(o=re,o!==null){if(L=e.getRenderTarget(),o.addEventListener("select",se),o.addEventListener("selectstart",se),o.addEventListener("selectend",se),o.addEventListener("squeeze",se),o.addEventListener("squeezestart",se),o.addEventListener("squeezeend",se),o.addEventListener("end",ee),o.addEventListener("inputsourceschange",me),w.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(M),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let De=null,Xe=null,Ne=null;w.depth&&(Ne=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,De=w.stencil?cs:ns,Xe=w.stencil?No:pr);let et={colorFormat:t.RGBA8,depthFormat:Ne,scaleFactor:l};_=this.getBinding(),b=_.createProjectionLayer(et),o.updateRenderState({layers:[b]}),e.setPixelRatio(1),e.setSize(b.textureWidth,b.textureHeight,!1),C=new zi(b.textureWidth,b.textureHeight,{format:Bi,type:oi,depthTexture:new as(b.textureWidth,b.textureHeight,Xe,void 0,void 0,void 0,void 0,void 0,void 0,De),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1,storeMultisampledDepthBuffer:b.ignoreDepthValues===!1,storeMultisampledStencilBuffer:b.ignoreDepthValues===!1})}else{let De={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:l};v=new XRWebGLLayer(o,t,De),o.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),C=new zi(v.framebufferWidth,v.framebufferHeight,{format:Bi,type:oi,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1,storeMultisampledDepthBuffer:v.ignoreDepthValues===!1,storeMultisampledStencilBuffer:v.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(h),m=null,c=await o.requestReferenceSpace(f),Ve.setContext(o),Ve.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function me(re){for(let Pe=0;Pe<re.removed.length;Pe++){let De=re.removed[Pe],Xe=N.indexOf(De);Xe>=0&&(N[Xe]=null,I[Xe].disconnect(De))}for(let Pe=0;Pe<re.added.length;Pe++){let De=re.added[Pe],Xe=N.indexOf(De);if(Xe===-1){for(let et=0;et<I.length;et++)if(et>=N.length){N.push(De),Xe=et;break}else if(N[et]===null){N[et]=De,Xe=et;break}if(Xe===-1)break}let Ne=I[Xe];Ne&&Ne.connect(De)}}function ne(re,Pe){Pe===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(Pe.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(o===null)return;let Pe=re.near,De=re.far;S.texture!==null&&(S.depthNear>0&&(Pe=S.depthNear),S.depthFar>0&&(De=S.depthFar)),j.near=B.near=F.near=Pe,j.far=B.far=F.far=De,(z!==j.near||K!==j.far)&&(o.updateRenderState({depthNear:j.near,depthFar:j.far}),z=j.near,K=j.far),j.layers.mask=re.layers.mask|6,F.layers.mask=j.layers.mask&-5,B.layers.mask=j.layers.mask&-3;let Xe=re.parent,Ne=j.cameras;ne(j,Xe);for(let et=0;et<Ne.length;et++)ne(Ne[et],Xe);j.projectionMatrix.copy(F.projectionMatrix),j.projectionMatrixInverse.copy(F.projectionMatrixInverse),G===null&&re.isPerspectiveCamera&&(G={camera:re,fov:re.fov,zoom:re.zoom}),ce(re,j,Xe)};function ce(re,Pe,De){De===null?re.matrix.copy(Pe.matrixWorld):(re.matrix.copy(De.matrixWorld),re.matrix.invert(),re.matrix.multiply(Pe.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(Pe.projectionMatrix),re.projectionMatrixInverse.copy(Pe.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=Ua*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(b===null&&v===null))return h},this.setFoveation=function(re){h=re,b!==null&&(b.fixedFoveation=re),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=re)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(j)},this.getCameraTexture=function(re){return y[re]};let he=null;function Be(re,Pe){if(g=Pe.getViewerPose(m||c),x=Pe,g!==null){let De=g.views;v!==null&&(e.setRenderTargetFramebuffer(C,v.framebuffer),e.setRenderTarget(C));let Xe=!1;De.length!==j.cameras.length&&(j.cameras.length=0,Xe=!0);for(let Ye=0;Ye<De.length;Ye++){let Et=De[Ye],_t=null;if(v!==null)_t=v.getViewport(Et);else{let fn=_.getViewSubImage(b,Et);_t=fn.viewport,Ye===0&&(e.setRenderTargetTextures(C,fn.colorTexture,fn.depthStencilTexture),e.setRenderTarget(C))}let ht=W[Ye];ht===void 0&&(ht=new di,ht.layers.enable(Ye),ht.viewport=new en,W[Ye]=ht),ht.matrix.fromArray(Et.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(Et.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(_t.x,_t.y,_t.width,_t.height),Ye===0&&(j.matrix.copy(ht.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),Xe===!0&&j.cameras.push(ht)}let Ne=o.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&A){_=s.getBinding();let Ye=_.getDepthInformation(De[0]);Ye&&Ye.isValid&&Ye.texture&&S.init(Ye,o.renderState)}if(Ne&&Ne.includes("camera-access")&&A){e.state.unbindTexture(),_=s.getBinding();for(let Ye=0;Ye<De.length;Ye++){let Et=De[Ye].camera;if(Et){let _t=y[Et];_t||(_t=new eu,y[Et]=_t);let ht=_.getCameraImage(Et);_t.sourceTexture=ht}}}}for(let De=0;De<I.length;De++){let Xe=N[De],Ne=I[De];Xe!==null&&Ne!==void 0&&Ne.update(Xe,Pe,m||c)}he&&he(re,Pe),Pe.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Pe}),x=null}let Ve=new D_;Ve.setAnimationLoop(Be),this.setAnimationLoop=function(re){he=re},this.dispose=function(){}}},F2=new Ot,X_=new it;X_.set(-1,0,0,0,1,0,0,0,1);function U2(r,e){function t(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function s(S,y){y.color.getRGB(S.fogColor.value,$m(r)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function o(S,y,w,L,C){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?l(S,y):y.isMeshLambertMaterial?(l(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(l(S,y),_(S,y)):y.isMeshPhongMaterial?(l(S,y),g(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(l(S,y),b(S,y),y.isMeshPhysicalMaterial&&v(S,y,C)):y.isMeshMatcapMaterial?(l(S,y),x(S,y)):y.isMeshDepthMaterial?l(S,y):y.isMeshDistanceMaterial?(l(S,y),A(S,y)):y.isMeshNormalMaterial?l(S,y):y.isLineBasicMaterial?(c(S,y),y.isLineDashedMaterial&&f(S,y)):y.isPointsMaterial?h(S,y,w,L):y.isSpriteMaterial?m(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,t(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===mi&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,t(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===mi&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,t(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,t(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);let w=e.get(y),L=w.envMap,C=w.envMapRotation;L&&(S.envMap.value=L,S.envMapRotation.value.setFromMatrix4(F2.makeRotationFromEuler(C)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(X_),S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,S.aoMapTransform))}function c(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform))}function f(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function h(S,y,w,L){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*w,S.scale.value=L*.5,y.map&&(S.map.value=y.map,t(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function m(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function g(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function _(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function b(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function v(S,y,w){S.ior.value=y.ior,y.diffuseRoughness>0&&(S.diffuseRoughness.value=y.diffuseRoughness,y.diffuseRoughnessMap&&(S.diffuseRoughnessMap.value=y.diffuseRoughnessMap,t(y.diffuseRoughnessMap,S.diffuseRoughnessMapTransform))),y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===mi&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.retroreflectivity>0&&(S.retroreflectivity.value=y.retroreflectivity),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessMinimum,S.iridescenceThicknessMaximum.value=y.iridescenceThicknessMaximum,y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=w.texture,S.transmissionSamplerSize.value.set(w.width,w.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,S.specularIntensityMapTransform))}function x(S,y){y.matcap&&(S.matcap.value=y.matcap)}function A(S,y){let w=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(w.matrixWorld),S.nearDistance.value=w.shadow.camera.near,S.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:o}}function z2(r,e,t,s){let o={},l={};function c(w,L){let C=L.program;s.uniformBlockBinding(w,C,o[w.id])}function f(w,L){let C=o[w.id];C===void 0&&(x(w),C=h(w),o[w.id]=C,w.addEventListener("dispose",S));let I=L.program;s.updateUBOMapping(w,I);let N=e.render.frame;l[w.id]!==N&&(m(w),l[w.id]=N)}function h(w){let L=r.createBuffer(),C=w.__size,I=w.usage;return r.bindBuffer(r.UNIFORM_BUFFER,L),r.bufferData(r.UNIFORM_BUFFER,C,I),r.bindBuffer(r.UNIFORM_BUFFER,null),L}function m(w){let L=o[w.id],C=w.uniforms,I=w.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let N=0,M=C.length;N<M;N++){let P=C[N];if(Array.isArray(P))for(let G=0,F=P.length;G<F;G++)g(P[G],N,G,I);else g(P,N,0,I)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function g(w,L,C,I){if(b(w,L,C,I)===!0){let N=w.__offset,M=w.value;if(Array.isArray(M)){let P=0;for(let G=0;G<M.length;G++){let F=M[G],B=A(F,!0);_(F,w.__data,P),P+=B.storage/Float32Array.BYTES_PER_ELEMENT}}else _(M,w.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,N,w.__data)}}function _(w,L,C){typeof w=="number"||typeof w=="boolean"?L[C]=w:w.isMatrix3?(L[C]=w.elements[0],L[C+1]=w.elements[1],L[C+2]=w.elements[2],L[C+3]=0,L[C+4]=w.elements[3],L[C+5]=w.elements[4],L[C+6]=w.elements[5],L[C+7]=0,L[C+8]=w.elements[6],L[C+9]=w.elements[7],L[C+10]=w.elements[8],L[C+11]=0):ArrayBuffer.isView(w)?L.set(w.subarray(0,L.length-C),C):w.toArray(L,C)}function b(w,L,C,I){let N=w.value,M=L+"_"+C;if(Array.isArray(N)){I[M]===void 0&&(I[M]=[]);let P=I[M],G=!1;for(let F=0;F<N.length;F++)v(N[F],P,F)===!0&&(G=!0);return G}return v(N,I,M)}function v(w,L,C){if(L[C]===void 0)return typeof w=="number"||typeof w=="boolean"?L[C]=w:ArrayBuffer.isView(w)?L[C]=w.slice():L[C]=w.clone(),!0;{let I=L[C];if(typeof w=="number"||typeof w=="boolean"){if(I!==w)return L[C]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(I.equals(w)===!1)return I.copy(w),!0}}return!1}function x(w){let L=w.uniforms,C=0,I=16;for(let M=0,P=L.length;M<P;M++){let G=Array.isArray(L[M])?L[M]:[L[M]];for(let F=0,B=G.length;F<B;F++){let W=G[F],j=Array.isArray(W.value)?W.value:[W.value],z=Array.isArray(L[M])||Array.isArray(W.value),K=C;for(let ee=0,me=j.length;ee<me;ee++){let ne=j[ee],ce=A(ne,z),he=C%I,Be=he%ce.boundary,Ve=he+Be;C+=Be,Ve!==0&&I-Ve<ce.storage&&(C+=I-Ve),ee===0&&(K=C),C+=ce.storage}let se=W.type==="int"?Int32Array:W.type==="uint"?Uint32Array:Float32Array;W.__data=new se((C-K)/Float32Array.BYTES_PER_ELEMENT),W.__offset=K}}let N=C%I;return N>0&&(C+=I-N),w.__size=C,w.__cache={},this}function A(w,L){let C={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(C.boundary=4,C.storage=4):w.isVector2?(C.boundary=8,C.storage=8):w.isVector3||w.isColor?(C.boundary=16,C.storage=12):w.isVector4?(C.boundary=16,C.storage=16):w.isMatrix3?(C.boundary=16,C.storage=48):w.isMatrix4?(C.boundary=16,C.storage=64):w.isTexture?$e("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(C.boundary=16,C.storage=w.byteLength):$e("WebGLRenderer: Unsupported uniform value type.",w),L===!0&&(C.boundary=16,C.storage=Math.ceil(C.storage/16)*16),C}function S(w){let L=w.target;L.removeEventListener("dispose",S),r.deleteBuffer(o[L.id]),delete o[L.id],delete l[L.id]}function y(){for(let w in o)r.deleteBuffer(o[w]);o={},l={}}return{bind:c,update:f,dispose:y}}var O2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Fr=null;function B2(){return Fr===null&&(Fr=new Yl(O2,16,16,Gs,mr),Fr.name="DFG_LUT",Fr.minFilter=hi,Fr.magFilter=hi,Fr.wrapS=Cr,Fr.wrapT=Cr,Fr.generateMipmaps=!1,Fr.needsUpdate=!0),Fr}var Nd=class{constructor(e={}){let{canvas:t=r_(),context:s=null,depth:o=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:b=!1,outputBufferType:v=oi}=e;this.isWebGLRenderer=!0;let x;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=s.getContextAttributes().alpha}else x=c;let A=v,S=new Set([Kf,Jf,Zf]),y=new Set([oi,pr,Ya,No,$f,Yf]),w=new Uint32Array(4),L=new Int32Array(4),C={textures:[],min:[],max:[],resolution:[]},I=null,N=null,M=[],P=[],G=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let F=this,B=!1,W=null,j=null,z=null,K=null;this._outputColorSpace=An;let se=0,ee=0,me=null,ne=-1,ce=null,he=new en,Be=new en,Ve=null,re=new We(0),Pe=0,De=t.width,Xe=t.height,Ne=1,et=null,Wt=null,Ye=new en(0,0,De,Xe),Et=new en(0,0,De,Xe),_t=!1,ht=new Us,fn=new xf,Yt=!1,dn=!1,Xt=new Ot,Jn=new H,qt=new en,hn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Bn=!1;function Kn(){return me===null?Ne:1}let V=s;function Hn(R,O){return t.getContext(R,O)}let Pt,ut,Ee,pn,qe,Ze,k,E,$,de,ue,xe,Te,oe,ae,Me,U,le,ie,we,ye,_e,He;try{let R={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ge,!1),t.addEventListener("webglcontextrestored",ot,!1),t.addEventListener("webglcontextcreationerror",Ae,!1),V===null){let O="webgl2";if(V=Hn(O,R),V===null)throw Hn(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}at()}catch(R){throw t.removeEventListener("webglcontextlost",Ge,!1),t.removeEventListener("webglcontextrestored",ot,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),nt("WebGLRenderer: "+R.message),R}function at(){Pt=new JA(V),Pt.init(),ye=new L2(V,Pt),ut=new BA(V,Pt,e,ye),Ee=new I2(V,Pt),ut.reversedDepthBuffer&&b&&Ee.buffers.depth.setReversed(!0),j=V.createFramebuffer(),z=V.createFramebuffer(),K=V.createFramebuffer(),pn=new eR(V),qe=new v2,Ze=new N2(V,Pt,Ee,qe,ut,ye,pn),k=new ZA(F),E=new nT(V),_e=new zA(V,E),$=new KA(V,E,pn,_e),de=new nR(V,$,E,_e,pn),le=new tR(V,ut,Ze),ae=new HA(qe),ue=new g2(F,k,Pt,ut,_e,ae),xe=new U2(F,qe),Te=new b2,oe=new T2(Pt),U=new UA(F,k,Ee,de,x,h),Me=new P2(F,de,ut),He=new z2(V,pn,ut,Ee),ie=new OA(V,Pt,pn),we=new QA(V,Pt,pn),pn.programs=ue.programs,F.capabilities=ut,F.extensions=Pt,F.properties=qe,F.renderLists=Te,F.shadowMap=Me,F.state=Ee,F.info=pn}A!==oi&&(G=new rR(A,t.width,t.height,f,o,l));let pe=new fg(F,V);this.xr=pe,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let R=Pt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=Pt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Ne},this.setPixelRatio=function(R){R!==void 0&&(Ne=R,this.setSize(De,Xe,!1))},this.getSize=function(R){return R.set(De,Xe)},this.setSize=function(R,O,J=!0){if(pe.isPresenting){$e("WebGLRenderer: Can't change size while VR device is presenting.");return}De=R,Xe=O,t.width=Math.floor(R*Ne),t.height=Math.floor(O*Ne),J===!0&&(t.style.width=R+"px",t.style.height=O+"px"),G!==null&&G.setSize(t.width,t.height),this.setViewport(0,0,R,O)},this.getDrawingBufferSize=function(R){return R.set(De*Ne,Xe*Ne).floor()},this.setDrawingBufferSize=function(R,O,J){De=R,Xe=O,Ne=J,t.width=Math.floor(R*J),t.height=Math.floor(O*J),this.setViewport(0,0,R,O)},this.setEffects=function(R){if(A===oi){nt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let O=0;O<R.length;O++)if(R[O].isOutputPass===!0){$e("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}G.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(he)},this.getViewport=function(R){return R.copy(Ye)},this.setViewport=function(R,O,J,q){R.isVector4?Ye.set(R.x,R.y,R.z,R.w):Ye.set(R,O,J,q),Ee.viewport(he.copy(Ye).multiplyScalar(Kn()).round())},this.getScissor=function(R){return R.copy(Et)},this.setScissor=function(R,O,J,q){R.isVector4?Et.set(R.x,R.y,R.z,R.w):Et.set(R,O,J,q),Ee.scissor(Be.copy(Et).multiplyScalar(Kn()).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(R){Ee.setScissorTest(_t=R)},this.setOpaqueSort=function(R){et=R},this.setTransparentSort=function(R){Wt=R},this.getClearColor=function(R){return R.copy(U.getClearColor())},this.setClearColor=function(){U.setClearColor(...arguments)},this.getClearAlpha=function(){return U.getClearAlpha()},this.setClearAlpha=function(){U.setClearAlpha(...arguments)},this.clear=function(R=!0,O=!0,J=!0){let q=0;if(R){let Y=!1;if(me!==null){let be=me.texture.format;Y=S.has(be)}if(Y){let be=me.texture.type,Ce=y.has(be),Se=U.getClearColor(),Ie=U.getClearAlpha(),Oe=Se.r,Fe=Se.g,ft=Se.b;Ce?(w[0]=Oe,w[1]=Fe,w[2]=ft,w[3]=Ie,V.clearBufferuiv(V.COLOR,0,w)):(L[0]=Oe,L[1]=Fe,L[2]=ft,L[3]=Ie,V.clearBufferiv(V.COLOR,0,L))}else q|=V.COLOR_BUFFER_BIT}O&&(q|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(q|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&V.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),W=R},this.dispose=function(){t.removeEventListener("webglcontextlost",Ge,!1),t.removeEventListener("webglcontextrestored",ot,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),U.dispose(),Te.dispose(),oe.dispose(),Ze.dispose(),qe.dispose(),k.dispose(),de.dispose(),$.dispose(),_e.dispose(),He.dispose(),ue.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",js),pe.removeEventListener("sessionend",Zs),nr.stop()};function Ge(R){R.preventDefault(),Vm("WebGLRenderer: Context Lost."),B=!0}function ot(){Vm("WebGLRenderer: Context Restored."),B=!1;let R=pn.autoReset,O=Me.enabled,J=Me.autoUpdate,q=Me.needsUpdate,Y=Me.type;at(),pn.autoReset=R,Me.enabled=O,Me.autoUpdate=J,Me.needsUpdate=q,Me.type=Y}function Ae(R){nt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function It(R){let O=R.target;O.removeEventListener("dispose",It),vn(O)}function vn(R){Ti(R),qe.remove(R)}function Ti(R){let O=qe.get(R).programs;O!==void 0&&(O.forEach(function(J){ue.releaseProgram(J)}),R.isShaderMaterial&&ue.releaseShaderCache(R))}this.renderBufferDirect=function(R,O,J,q,Y,be){O===null&&(O=hn);let Ce=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,Se=Qs(R,O,J,q,Y);Ee.setMaterial(q,Ce);let Ie=J.index,Oe=1;if(q.wireframe===!0){if(Ie=$.getWireframeAttribute(J),Ie===void 0)return;Oe=2}let Fe=J.drawRange,ft=J.attributes.position,Ue=Fe.start*Oe,pt=(Fe.start+Fe.count)*Oe;be!==null&&(Ue=Math.max(Ue,be.start*Oe),pt=Math.min(pt,(be.start+be.count)*Oe)),Ie!==null?(Ue=Math.max(Ue,0),pt=Math.min(pt,Ie.count)):ft!=null&&(Ue=Math.max(Ue,0),pt=Math.min(pt,ft.count));let rn=pt-Ue;if(rn<0||rn===1/0)return;_e.setup(Y,q,Se,J,Ie);let Vt,Dt=ie;if(Ie!==null&&(Vt=E.get(Ie),Dt=we,Dt.setIndex(Vt)),Y.isMesh)q.wireframe===!0?(Ee.setLineWidth(q.wireframeLinewidth*Kn()),Dt.setMode(V.LINES)):Dt.setMode(V.TRIANGLES);else if(Y.isLine){let Sn=q.linewidth;Sn===void 0&&(Sn=1),Ee.setLineWidth(Sn*Kn()),Y.isLineSegments?Dt.setMode(V.LINES):Y.isLineLoop?Dt.setMode(V.LINE_LOOP):Dt.setMode(V.LINE_STRIP)}else Y.isPoints?Dt.setMode(V.POINTS):Y.isSprite&&Dt.setMode(V.TRIANGLES);if(Y.isBatchedMesh)if(Pt.get("WEBGL_multi_draw"))Dt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let Sn=Y._multiDrawStarts,ze=Y._multiDrawCounts,Ft=Y._multiDrawCount,je=Ie?E.get(Ie).bytesPerElement:1,Hi=qe.get(q).currentProgram.getUniforms();for(let mn=0;mn<Ft;mn++)Hi.setValue(V,"_gl_DrawID",mn),Dt.render(Sn[mn]/je,ze[mn])}else if(Y.isInstancedMesh)Dt.renderInstances(Ue,rn,Y.count);else if(J.isInstancedBufferGeometry){let Sn=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,ze=Math.min(J.instanceCount,Sn);Dt.renderInstances(Ue,rn,ze)}else Dt.render(Ue,rn)};function tr(R,O,J,q){W!==null&&R.isNodeMaterial&&W.setObject(q,R),Yt===!0&&ae.setState(R,J,!1),R.transparent===!0&&R.side===wi&&R.forceSinglePass===!1?(R.side=mi,R.needsUpdate=!0,vi(R,O,q),R.side=Vs,R.needsUpdate=!0,vi(R,O,q),R.side=wi):vi(R,O,q)}this.compile=function(R,O,J=null){J===null&&(J=R),W!==null&&W.renderStart(R,O,J),N=oe.get(J),N.init(O),P.push(N),J.traverseVisible(function(Y){Y.isLight&&Y.layers.test(O.layers)&&(N.pushLight(Y),Y.castShadow&&N.pushShadow(Y))}),R!==J&&R.traverseVisible(function(Y){Y.isLight&&Y.layers.test(O.layers)&&(N.pushLight(Y),Y.castShadow&&N.pushShadow(Y))}),N.setupLights(),W!==null&&W.updateLights(N.state.lightsArray),dn=this.localClippingEnabled,Yt=ae.init(this.clippingPlanes,dn),Yt===!0&&ae.setGlobalState(this.clippingPlanes,O),W!==null&&Me.render(N.state.shadowsArray,J,O);let q=new Set;return R.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let be=Y.material;if(be)if(Array.isArray(be))for(let Ce=0;Ce<be.length;Ce++){let Se=be[Ce];tr(Se,J,O,Y),q.add(Se)}else tr(be,J,O,Y),q.add(be)}),N=P.pop(),W!==null&&W.renderEnd(),q},this.compileAsync=function(R,O,J=null){let q=this.compile(R,O,J);return new Promise(Y=>{function be(){if(q.forEach(function(Ce){let Ie=qe.get(Ce).currentProgram;(Ie===void 0||Ie.isReady())&&q.delete(Ce)}),q.size===0){Y(R);return}setTimeout(be,10)}Pt.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let ps=null;function Du(R){ps&&ps(R)}function js(){nr.stop()}function Zs(){nr.start()}let nr=new D_;nr.setAnimationLoop(Du),typeof self<"u"&&nr.setContext(self),this.setAnimationLoop=function(R){ps=R,pe.setAnimationLoop(R),R===null?nr.stop():nr.start()},pe.addEventListener("sessionstart",js),pe.addEventListener("sessionend",Zs),this.render=function(R,O){if(O!==void 0&&O.isCamera!==!0){nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;W!==null&&W.renderStart(R,O);let J=pe.enabled===!0&&pe.isPresenting===!0,q=G!==null&&(me===null||J)&&G.begin(F,me);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(G===null||G.isCompositing()===!1)&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(O),O=pe.getCamera()),R.isScene===!0&&R.onBeforeRender(F,R,O,me),N=oe.get(R,P.length),N.init(O),N.state.textureUnits=Ze.getTextureUnits(),P.push(N),Xt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),O.isArrayCamera?fn.setFromArrayCamera(O):ht.setFromProjectionMatrix(Xt,Ji,O.reversedDepth),dn=this.localClippingEnabled,Yt=ae.init(this.clippingPlanes,dn),I=Te.get(R,M.length),I.init(),M.push(I),this.info.render.frame++,pe.enabled===!0&&pe.isPresenting===!0){let Ce=F.xr.getDepthSensingMesh();Ce!==null&&ir(Ce,O,-1/0,F.sortObjects)}ir(R,O,0,F.sortObjects),I.finish(),W!==null&&W.updateLights(N.state.lightsArray),F.sortObjects===!0&&I.sort(et,Wt),Bn=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,Bn&&U.addToRenderList(I,R),this.info.autoReset===!0&&this.info.reset(),Yt===!0&&ae.beginShadows();let Y=N.state.shadowsArray;if(Me.render(Y,R,O),Yt===!0&&ae.endShadows(),(q&&G.hasRenderPass())===!1){let Ce=I.opaque,Se=I.transmissive;if(N.setupLights(),O.isArrayCamera){let Ie=O.cameras;if(Se.length>0)for(let Oe=0,Fe=Ie.length;Oe<Fe;Oe++){let ft=Ie[Oe];Js(Ce,Se,R,ft)}Bn&&U.render(R);for(let Oe=0,Fe=Ie.length;Oe<Fe;Oe++){let ft=Ie[Oe];al(I,R,ft,ft.viewport)}}else Se.length>0&&Js(Ce,Se,R,O),Bn&&U.render(R),al(I,R,O)}me!==null&&ee===0&&(Ze.updateMultisampleRenderTarget(me),Ze.updateRenderTargetMipmap(me)),q&&G.end(F),R.isScene===!0&&R.onAfterRender(F,R,O),_e.resetDefaultState(),ne=-1,ce=null,P.pop(),P.length>0?(N=P[P.length-1],Ze.setTextureUnits(N.state.textureUnits),Yt===!0&&ae.setGlobalState(F.clippingPlanes,N.state.camera)):N=null,M.pop(),M.length>0?I=M[M.length-1]:I=null,W!==null&&W.renderEnd()};function ir(R,O,J,q){if(R.visible===!1)return;if(R.layers.test(O.layers)){if(R.isGroup)J=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(O);else if(R.isLight)N.pushLight(R),R.castShadow&&N.pushShadow(R);else if(R.isSprite){let Ce=O.isArrayCamera?fn:ht;if(!R.frustumCulled||R.intersectsFrustum(Ce)){q&&qt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Xt);let Se=de.update(R),Ie=R.material;Ie.visible&&I.push(R,Se,Ie,J,qt.z,null,O)}}else if(R.isMesh||R.isLine||R.isPoints){let Ce=O.isArrayCamera?fn:ht;if(!R.frustumCulled||R.intersectsFrustum(Ce)){let Se=de.update(R),Ie=R.material;if(q&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),qt.copy(R.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),qt.copy(Se.boundingSphere.center)),qt.applyMatrix4(R.matrixWorld).applyMatrix4(Xt)),Array.isArray(Ie)){let Oe=Se.groups;for(let Fe=0,ft=Oe.length;Fe<ft;Fe++){let Ue=Oe[Fe],pt=Ie[Ue.materialIndex];pt&&pt.visible&&I.push(R,Se,pt,J,qt.z,Ue,O)}}else Ie.visible&&I.push(R,Se,Ie,J,qt.z,null,O)}}}let be=R.children;for(let Ce=0,Se=be.length;Ce<Se;Ce++)ir(be[Ce],O,J,q)}function al(R,O,J,q){let{opaque:Y,transmissive:be,transparent:Ce}=R;N.setupLightsView(J),Yt===!0&&ae.setGlobalState(F.clippingPlanes,J),q&&Ee.viewport(he.copy(q)),Y.length>0&&ms(Y,O,J),be.length>0&&ms(be,O,J),Ce.length>0&&ms(Ce,O,J),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function Js(R,O,J,q){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[q.id]===void 0){let Ue=Pt.has("EXT_color_buffer_half_float")||Pt.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[q.id]=new zi(1,1,{generateMipmaps:!0,type:Ue?mr:oi,minFilter:us,samples:Math.max(4,ut.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:bt.workingColorSpace})}let be=N.state.transmissionRenderTarget[q.id],Ce=q.viewport||he;be.setSize(Ce.z*F.transmissionResolutionScale,Ce.w*F.transmissionResolutionScale);let Se=F.getRenderTarget(),Ie=F.getActiveCubeFace(),Oe=F.getActiveMipmapLevel();F.setRenderTarget(be),F.getClearColor(re),Pe=F.getClearAlpha(),Pe<1&&F.setClearColor(16777215,.5),F.clear(),Bn&&U.render(J);let Fe=F.toneMapping;F.toneMapping=si;let ft=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),N.setupLightsView(q),Yt===!0&&ae.setGlobalState(F.clippingPlanes,q),ms(R,J,q),Ze.updateMultisampleRenderTarget(be),Ze.updateRenderTargetMipmap(be),Pt.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let pt=0,rn=O.length;pt<rn;pt++){let Vt=O[pt],{object:Dt,geometry:Sn,material:ze,group:Ft}=Vt;if(ze.side===wi&&Dt.layers.test(q.layers)){let je=ze.side;ze.side=mi,ze.needsUpdate=!0,Uo(Dt,J,q,Sn,ze,Ft),ze.side=je,ze.needsUpdate=!0,Ue=!0}}Ue===!0&&(Ze.updateMultisampleRenderTarget(be),Ze.updateRenderTargetMipmap(be))}F.setRenderTarget(Se,Ie,Oe),F.setClearColor(re,Pe),ft!==void 0&&(q.viewport=ft),F.toneMapping=Fe}function ms(R,O,J){let q=O.isScene===!0?O.overrideMaterial:null;for(let Y=0,be=R.length;Y<be;Y++){let Ce=R[Y],{object:Se,geometry:Ie,group:Oe}=Ce,Fe=Ce.material;Fe.allowOverride===!0&&q!==null&&(Fe=q),Se.layers.test(J.layers)&&Uo(Se,O,J,Ie,Fe,Oe)}}function Uo(R,O,J,q,Y,be){W!==null&&Y.isNodeMaterial&&W.setObject(R,Y),R.onBeforeRender(F,O,J,q,Y,be),R.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Y.onBeforeRender(F,O,J,q,R,be),Y.transparent===!0&&Y.side===wi&&Y.forceSinglePass===!1?(Y.side=mi,Y.needsUpdate=!0,F.renderBufferDirect(J,O,q,Y,R,be),Y.side=Vs,Y.needsUpdate=!0,F.renderBufferDirect(J,O,q,Y,R,be),Y.side=wi):F.renderBufferDirect(J,O,q,Y,R,be),R.onAfterRender(F,O,J,q,Y,be)}function rr(R){let O=0;for(let J of R)J.texture!==null&&O++;return O}function vi(R,O,J){O.isScene!==!0&&(O=hn);let q=qe.get(R),Y=N.state.lights,be=N.state.shadowsArray,Ce=Y.state.version,Se=ue.getParameters(R,Y.state,be,O,J,N.state.lightProbeGridArray),Ie=ue.getProgramCacheKey(Se),Oe=q.programs;q.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?O.environment:null,q.fog=O.fog;let Fe=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;q.envMap=k.get(R.envMap||q.environment,Fe),q.envMapRotation=q.environment!==null&&R.envMap===null?O.environmentRotation:R.envMapRotation,Oe===void 0&&(R.addEventListener("dispose",It),Oe=new Map,q.programs=Oe,q.programVariants=new Map);let ft=Oe.get(Ie);if(ft!==void 0){if(q.currentProgram===ft&&q.lightsStateVersion===Ce)return gs(R,Se),ft}else Se.uniforms=ue.getUniforms(R),W!==null&&R.isNodeMaterial&&W.build(R,J,Se),R.onBeforeCompile(Se,F),ft=ue.acquireProgram(Se,Ie),Oe.set(Ie,ft),q.uniforms=Se.uniforms;let Ue=q.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ue.clippingPlanes=ae.uniform),gs(R,Se),q.needsLights=Uu(R),q.lightsStateVersion=Ce,q.needsLights&&(Ue.ambientLightColor.value=Y.state.ambient,Ue.lightProbe.value=Y.state.probe,Ue.sunLights.value=Y.state.sun,Ue.sunLightShadows.value=Y.state.sunShadow,Ue.directionalLights.value=Y.state.directional,Ue.directionalLightShadows.value=Y.state.directionalShadow,Ue.spotLights.value=Y.state.spot,Ue.spotLightShadows.value=Y.state.spotShadow,Ue.rectAreaLights.value=Y.state.rectArea,Ue.ltc_1.value=Y.state.rectAreaLTC1,Ue.ltc_2.value=Y.state.rectAreaLTC2,Ue.pointLights.value=Y.state.point,Ue.pointLightShadows.value=Y.state.pointShadow,Ue.hemisphereLights.value=Y.state.hemi,Ue.sunShadowMatrix.value=Y.state.sunShadowMatrix,Ue.sunShadowCascade.value=Y.state.sunShadowCascade,Ue.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ue.spotLightMatrix.value=Y.state.spotLightMatrix,Ue.spotLightMap.value=Y.state.spotLightMap,Ue.pointShadowMatrix.value=Y.state.pointShadowMatrix),q.numLightProbeGrids=rr(N.state.lightProbeGridArray),q.currentProgram=ft,q.uniformsList=null,ft}function Ks(R,O,J,q,Y){let be=qe.get(R),Ce=be.currentProgram.id+","+q+","+Y,Se=be.programVariants.get(Ce);return Se===void 0?(Se=vi(R,O,J),be.programVariants.set(Ce,Se)):(be.currentProgram=Se,be.uniformsList=null,be.outputColorSpace=q,be.toneMapping=Y),Se}function zo(R){if(R.uniformsList===null){let O=R.currentProgram.getUniforms();R.uniformsList=Ja.seqWithValue(O.seq,R.uniforms)}return R.uniformsList}function gs(R,O){let J=qe.get(R);J.outputColorSpace=O.outputColorSpace,J.batching=O.batching,J.batchingColor=O.batchingColor,J.instancing=O.instancing,J.instancingColor=O.instancingColor,J.instancingMorph=O.instancingMorph,J.skinning=O.skinning,J.morphTargets=O.morphTargets,J.morphNormals=O.morphNormals,J.morphColors=O.morphColors,J.morphTargetsCount=O.morphTargetsCount,J.numClippingPlanes=O.numClippingPlanes,J.numIntersection=O.numClipIntersection,J.vertexAlphas=O.vertexAlphas,J.vertexTangents=O.vertexTangents,J.toneMapping=O.toneMapping}function Qs(R,O,J,q,Y){O.isScene!==!0&&(O=hn),Ze.resetTextureUnits();let be=O.fog,Ce=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?O.environment:null,Se=me===null?F.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:bt.workingColorSpace,Ie=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Oe=k.get(q.envMap||Ce,Ie),Fe=q.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,ft=!!J.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ue=!!J.morphAttributes.position,pt=!!J.morphAttributes.normal,rn=!!J.morphAttributes.color,Vt=si;q.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(Vt=F.toneMapping);let Dt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Sn=Dt!==void 0?Dt.length:0,ze=qe.get(q),Ft=N.state.lights;if(Yt===!0&&(dn===!0||R!==ce)){let jt=R===ce&&q.id===ne;ae.setState(q,R,jt)}let je=!1,Hi=!1;q.version===ze.__version?ze.needsLights&&ze.lightsStateVersion!==Ft.state.version||Y.isBatchedMesh&&ze.batching===!1||!Y.isBatchedMesh&&ze.batching===!0||Y.isBatchedMesh&&ze.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&ze.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&ze.instancing===!1||!Y.isInstancedMesh&&ze.instancing===!0||Y.isSkinnedMesh&&ze.skinning===!1||!Y.isSkinnedMesh&&ze.skinning===!0||Y.isInstancedMesh&&ze.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&ze.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&ze.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&ze.instancingMorph===!1&&Y.morphTexture!==null||ze.envMap!==Oe||q.fog===!0&&ze.fog!==be||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==ae.numPlanes||ze.numIntersection!==ae.numIntersection)||ze.vertexAlphas!==Fe||ze.vertexTangents!==ft||ze.morphTargets!==Ue||ze.morphNormals!==pt||ze.morphColors!==rn||ze.morphTargetsCount!==Sn||ze.numLightProbeGrids!==rr(N.state.lightProbeGridArray)?je=!0:(ze.outputColorSpace!==Se||ze.toneMapping!==Vt)&&(Hi=!0):(je=!0,ze.__version=q.version);let mn=ze.currentProgram;(je===!0||Hi===!0)&&(mn=Hi===!0?Ks(q,O,Y,Se,Vt):vi(q,O,Y),W&&q.isNodeMaterial&&W.onUpdateProgram(q,mn,ze));let Or=!1,Vi=!1,Vn=!1,vt=mn.getUniforms(),yn=ze.uniforms;if(Ee.useProgram(mn.program)&&(Or=!0,Vi=!0,Vn=!0),q.id!==ne&&(ne=q.id,Vi=!0),Or||ce!==R){Ee.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),vt.setValue(V,"projectionMatrix",R.projectionMatrix),vt.setValue(V,"viewMatrix",R.matrixWorldInverse);let bn=vt.map.cameraPosition;bn!==void 0&&bn.setValue(V,Jn.setFromMatrixPosition(R.matrixWorld)),ut.logarithmicDepthBuffer&&vt.setValue(V,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&vt.setValue(V,"isOrthographic",R.isOrthographicCamera===!0),ce!==R&&(ce=R,Vi=!0,Vn=!0)}if(ze.needsLights&&(Ft.state.sunShadowMap.length>0&&vt.setValue(V,"sunShadowMap",Ft.state.sunShadowMap,Ze),Ft.state.directionalShadowMap.length>0&&vt.setValue(V,"directionalShadowMap",Ft.state.directionalShadowMap,Ze),Ft.state.spotShadowMap.length>0&&vt.setValue(V,"spotShadowMap",Ft.state.spotShadowMap,Ze),Ft.state.pointShadowMap.length>0&&vt.setValue(V,"pointShadowMap",Ft.state.pointShadowMap,Ze)),Y.isSkinnedMesh){vt.setOptional(V,Y,"bindMatrix"),vt.setOptional(V,Y,"bindMatrixInverse");let jt=Y.skeleton;jt&&(jt.boneTexture===null&&jt.computeBoneTexture(),vt.setValue(V,"boneTexture",jt.boneTexture,Ze))}Y.isBatchedMesh&&(vt.setOptional(V,Y,"batchingTexture"),vt.setValue(V,"batchingTexture",Y._matricesTexture,Ze),vt.setOptional(V,Y,"batchingIdTexture"),vt.setValue(V,"batchingIdTexture",Y._indirectTexture,Ze),vt.setOptional(V,Y,"batchingColorTexture"),Y._colorsTexture!==null&&vt.setValue(V,"batchingColorTexture",Y._colorsTexture,Ze));let ui=J.morphAttributes;if((ui.position!==void 0||ui.normal!==void 0||ui.color!==void 0)&&le.update(Y,J,mn),(Vi||ze.receiveShadow!==Y.receiveShadow)&&(ze.receiveShadow=Y.receiveShadow,vt.setValue(V,"receiveShadow",Y.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&O.environment!==null&&(yn.envMapIntensity.value=O.environmentIntensity),yn.dfgLUT!==void 0&&(yn.dfgLUT.value=B2()),Vi){if(vt.setValue(V,"toneMappingExposure",F.toneMappingExposure),ze.needsLights&&Fu(yn,Vn),be&&q.fog===!0&&xe.refreshFogUniforms(yn,be),xe.refreshMaterialUniforms(yn,q,Ne,Xe,N.state.transmissionRenderTarget[R.id]),ze.needsLights&&ze.numLightProbeGrids>0){let jt=C,bn=0;for(let Gi of N.state.lightProbeGridArray)Gi.texture!==null&&(jt.textures[bn]=Gi.texture,jt.min[bn]=Gi.boundingBox.min,jt.max[bn]=Gi.boundingBox.max,jt.resolution[bn]=Gi.resolution,bn++);for(let Gi in jt)jt[Gi].length=bn;yn.probesSH.value=jt.textures,yn.probesMin.value=jt.min,yn.probesMax.value=jt.max,yn.probesResolution.value=jt.resolution}Ja.upload(V,zo(ze),yn,Ze)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Ja.upload(V,zo(ze),yn,Ze),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&vt.setValue(V,"center",Y.center),vt.setValue(V,"modelViewMatrix",Y.modelViewMatrix),vt.setValue(V,"normalMatrix",Y.normalMatrix),vt.setValue(V,"modelMatrix",Y.matrixWorld),q.uniformsGroups!==void 0){let jt=q.uniformsGroups;for(let bn=0,Gi=jt.length;bn<Gi;bn++){let ul=jt[bn];He.update(ul,mn),He.bind(ul,mn)}}return mn}function Fu(R,O){R.ambientLightColor.needsUpdate=O,R.lightProbe.needsUpdate=O,R.sunLights.needsUpdate=O,R.sunLightShadows.needsUpdate=O,R.directionalLights.needsUpdate=O,R.directionalLightShadows.needsUpdate=O,R.pointLights.needsUpdate=O,R.pointLightShadows.needsUpdate=O,R.spotLights.needsUpdate=O,R.spotLightShadows.needsUpdate=O,R.rectAreaLights.needsUpdate=O,R.hemisphereLights.needsUpdate=O}function Uu(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return se},this.getActiveMipmapLevel=function(){return ee},this.getRenderTarget=function(){return me},this.setRenderTargetTextures=function(R,O,J){let q=qe.get(R);q.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),qe.get(R.texture).__webglTexture=O,qe.get(R.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:J,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,O){let J=qe.get(R);J.__webglFramebuffer=O,J.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(R,O=0,J=0){me=R,se=O,ee=J;let q=null,Y=!1,be=!1;if(R){let Se=qe.get(R);if(Se.__useDefaultFramebuffer!==void 0){Ee.bindFramebuffer(V.FRAMEBUFFER,Se.__webglFramebuffer),he.copy(R.viewport),Be.copy(R.scissor),Ve=R.scissorTest,Ee.viewport(he),Ee.scissor(Be),Ee.setScissorTest(Ve),ne=-1;return}else if(Se.__webglFramebuffer===void 0)Ze.setupRenderTarget(R);else if(Se.__hasExternalTextures)Ze.rebindTextures(R,qe.get(R.texture).__webglTexture,qe.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let Fe=R.depthTexture;if(Se.__boundDepthTexture!==Fe){if(Fe!==null&&qe.has(Fe)&&(R.width!==Fe.image.width||R.height!==Fe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ze.setupDepthRenderbuffer(R)}}let Ie=R.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(be=!0);let Oe=qe.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Oe[O])?q=Oe[O][J]:q=Oe[O],Y=!0):R.samples>0&&Ze.useMultisampledRTT(R)===!1?q=qe.get(R).__webglMultisampledFramebuffer:Array.isArray(Oe)?q=Oe[J]:q=Oe,he.copy(R.viewport),Be.copy(R.scissor),Ve=R.scissorTest}else he.copy(Ye).multiplyScalar(Ne).floor(),Be.copy(Et).multiplyScalar(Ne).floor(),Ve=_t;if(J!==0&&(q=j),Ee.bindFramebuffer(V.FRAMEBUFFER,q)&&Ee.drawBuffers(R,q),Ee.viewport(he),Ee.scissor(Be),Ee.setScissorTest(Ve),Y){let Se=qe.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+O,Se.__webglTexture,J)}else if(be){let Se=O;for(let Ie=0;Ie<R.textures.length;Ie++){let Oe=qe.get(R.textures[Ie]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Ie,Oe.__webglTexture,J,Se)}}else if(R!==null&&J!==0){let Se=qe.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Se.__webglTexture,J)}ne=-1};function ll(R){let O=qe.get(R);return(O.__readFormat!==R.format||O.__readType!==R.type)&&(O.__readFormat=R.format,O.__readType=R.type,O.__formatReadable=ut.textureFormatReadable(R.format),O.__typeReadable=ut.textureTypeReadable(R.type)),O}this.readRenderTargetPixels=function(R,O,J,q,Y,be,Ce,Se=0){if(!(R&&R.isWebGLRenderTarget)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=qe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ie=Ie[Ce],Array.isArray(Ie)&&(Ie=Ie[0])),Ie){Ee.bindFramebuffer(V.FRAMEBUFFER,Ie);try{let Oe=R.textures[Se],Fe=Oe.format,ft=Oe.type;R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Se);let Ue=ll(Oe);if(Ue.__formatReadable===!1){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ue.__typeReadable===!1){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=R.width-q&&J>=0&&J<=R.height-Y&&V.readPixels(O,J,q,Y,ye.convert(Fe),ye.convert(ft),be)}finally{let Oe=me!==null?qe.get(me).__webglFramebuffer:null;Ee.bindFramebuffer(V.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(R,O,J,q,Y,be,Ce,Se=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=qe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ie=Ie[Ce],Array.isArray(Ie)&&(Ie=Ie[0])),Ie)if(O>=0&&O<=R.width-q&&J>=0&&J<=R.height-Y){Ee.bindFramebuffer(V.FRAMEBUFFER,Ie);let Oe=R.textures[Se],Fe=Oe.format,ft=Oe.type;R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Se);let Ue=ll(Oe);if(Ue.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ue.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let pt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,pt),V.bufferData(V.PIXEL_PACK_BUFFER,be.byteLength,V.STREAM_READ),V.readPixels(O,J,q,Y,ye.convert(Fe),ye.convert(ft),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);let rn=me!==null?qe.get(me).__webglFramebuffer:null;Ee.bindFramebuffer(V.FRAMEBUFFER,rn);let Vt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await o_(V,Vt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,pt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,be),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(pt),V.deleteSync(Vt),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,O=null,J=0){let q=Math.pow(2,-J),Y=Math.floor(R.image.width*q),be=Math.floor(R.image.height*q),Ce=O!==null?O.x:0,Se=O!==null?O.y:0;Ze.setTexture2D(R,0),V.copyTexSubImage2D(V.TEXTURE_2D,J,0,0,Ce,Se,Y,be),Ee.unbindTexture()},this.copyTextureToTexture=function(R,O,J=null,q=null,Y=0,be=0){let Ce,Se,Ie,Oe,Fe,ft,Ue,pt,rn,Vt=R.isCompressedTexture?R.mipmaps[be]:R.image;if(J!==null)Ce=J.max.x-J.min.x,Se=J.max.y-J.min.y,Ie=J.isBox3?J.max.z-J.min.z:1,Oe=J.min.x,Fe=J.min.y,ft=J.isBox3?J.min.z:0;else{let vt=Math.pow(2,-Y);Ce=Math.floor(Vt.width*vt),Se=Math.floor(Vt.height*vt),R.isDataArrayTexture?Ie=Vt.depth:R.isData3DTexture?Ie=Math.floor(Vt.depth*vt):Ie=1,Oe=0,Fe=0,ft=0}q!==null?(Ue=q.x,pt=q.y,rn=q.z):(Ue=0,pt=0,rn=0);let Dt=ye.convert(O.format),Sn=ye.convert(O.type),ze;O.isData3DTexture?(Ze.setTexture3D(O,0),ze=V.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Ze.setTexture2DArray(O,0),ze=V.TEXTURE_2D_ARRAY):(Ze.setTexture2D(O,0),ze=V.TEXTURE_2D),Ee.activeTexture(V.TEXTURE0),Ee.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,O.flipY),Ee.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),Ee.pixelStorei(V.UNPACK_ALIGNMENT,O.unpackAlignment);let Ft=Ee.getParameter(V.UNPACK_ROW_LENGTH),je=Ee.getParameter(V.UNPACK_IMAGE_HEIGHT),Hi=Ee.getParameter(V.UNPACK_SKIP_PIXELS),mn=Ee.getParameter(V.UNPACK_SKIP_ROWS),Or=Ee.getParameter(V.UNPACK_SKIP_IMAGES);Ee.pixelStorei(V.UNPACK_ROW_LENGTH,Vt.width),Ee.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Vt.height),Ee.pixelStorei(V.UNPACK_SKIP_PIXELS,Oe),Ee.pixelStorei(V.UNPACK_SKIP_ROWS,Fe),Ee.pixelStorei(V.UNPACK_SKIP_IMAGES,ft);let Vi=R.isDataArrayTexture||R.isData3DTexture,Vn=O.isDataArrayTexture||O.isData3DTexture;if(R.isDepthTexture){let vt=qe.get(R),yn=qe.get(O),ui=qe.get(vt.__renderTarget),jt=qe.get(yn.__renderTarget);Ee.bindFramebuffer(V.READ_FRAMEBUFFER,ui.__webglFramebuffer),Ee.bindFramebuffer(V.DRAW_FRAMEBUFFER,jt.__webglFramebuffer);for(let bn=0;bn<Ie;bn++)Vi&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,qe.get(R).__webglTexture,Y,ft+bn),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,qe.get(O).__webglTexture,be,rn+bn)),V.blitFramebuffer(Oe,Fe,Oe+Ce,Fe+Se,Ue,pt,Ue+Ce,pt+Se,V.DEPTH_BUFFER_BIT,V.NEAREST);Ee.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Y!==0||R.isRenderTargetTexture||qe.has(R)){let vt=qe.get(R),yn=qe.get(O);Ee.bindFramebuffer(V.READ_FRAMEBUFFER,z),Ee.bindFramebuffer(V.DRAW_FRAMEBUFFER,K);for(let ui=0;ui<Ie;ui++)Vi?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,vt.__webglTexture,Y,ft+ui):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,vt.__webglTexture,Y),Vn?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,yn.__webglTexture,be,rn+ui):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,yn.__webglTexture,be),Y!==0?V.blitFramebuffer(Oe,Fe,Oe+Ce,Fe+Se,Ue,pt,Ue+Ce,pt+Se,V.COLOR_BUFFER_BIT,V.NEAREST):Vn?V.copyTexSubImage3D(ze,be,Ue,pt,rn+ui,Oe,Fe,Ce,Se):V.copyTexSubImage2D(ze,be,Ue,pt,Oe,Fe,Ce,Se);Ee.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Vn?R.isDataTexture||R.isData3DTexture?V.texSubImage3D(ze,be,Ue,pt,rn,Ce,Se,Ie,Dt,Sn,Vt.data):O.isCompressedArrayTexture?V.compressedTexSubImage3D(ze,be,Ue,pt,rn,Ce,Se,Ie,Dt,Vt.data):V.texSubImage3D(ze,be,Ue,pt,rn,Ce,Se,Ie,Dt,Sn,Vt):R.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,be,Ue,pt,Ce,Se,Dt,Sn,Vt.data):R.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,be,Ue,pt,Vt.width,Vt.height,Dt,Vt.data):V.texSubImage2D(V.TEXTURE_2D,be,Ue,pt,Ce,Se,Dt,Sn,Vt);Ee.pixelStorei(V.UNPACK_ROW_LENGTH,Ft),Ee.pixelStorei(V.UNPACK_IMAGE_HEIGHT,je),Ee.pixelStorei(V.UNPACK_SKIP_PIXELS,Hi),Ee.pixelStorei(V.UNPACK_SKIP_ROWS,mn),Ee.pixelStorei(V.UNPACK_SKIP_IMAGES,Or),be===0&&O.generateMipmaps===!0&&O.mipmapsAutoUpdate===!0&&V.generateMipmap(ze),Ee.unbindTexture()},this.initRenderTarget=function(R){qe.get(R).__webglFramebuffer===void 0&&Ze.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Ze.setTextureCube(R,0):R.isData3DTexture?Ze.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Ze.setTexture2DArray(R,0):Ze.setTexture2D(R,0),Ee.unbindTexture()},this.resetState=function(){se=0,ee=0,me=null,Ee.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=bt._getDrawingBufferColorSpace(e),t.unpackColorSpace=bt._getUnpackColorSpace()}};var Yd=fi(ko());var oS=fi(Yr(),1),aS=fi(nS(),1);var iS=r=>{let e,t=new Set,s=(m,g)=>{let _=typeof m=="function"?m(e):m;if(!Object.is(_,e)){let b=e;e=g??(typeof _!="object"||_===null)?_:Object.assign({},e,_),t.forEach(v=>v(e,b))}},o=()=>e,f={setState:s,getState:o,getInitialState:()=>h,subscribe:m=>(t.add(m),()=>t.delete(m))},h=e=r(s,o,f);return f},rS=(r=>r?iS(r):iS);var{useSyncExternalStoreWithSelector:aC}=aS.default,lC=r=>r;function uC(r,e=lC,t){let s=aC(r.subscribe,r.getState,r.getInitialState,e,t);return oS.default.useDebugValue(s),s}var sS=(r,e)=>{let t=rS(r),s=(o,l=e)=>uC(t,o,l);return Object.assign(s,t),s},lS=((r,e)=>r?sS(r,e):sS);var cC=r=>typeof r=="object"&&typeof r.then=="function",Do=[];function uS(r,e,t=(s,o)=>s===o){if(r===e)return!0;if(!r||!e)return!1;let s=r.length;if(e.length!==s)return!1;for(let o=0;o<s;o++)if(!t(r[o],e[o]))return!1;return!0}function cS(r,e=null,t=!1,s={}){e===null&&(e=[r]);for(let l of Do)if(uS(e,l.keys,l.equal)){if(t)return;if(Object.prototype.hasOwnProperty.call(l,"error"))throw l.error;if(Object.prototype.hasOwnProperty.call(l,"response"))return s.lifespan&&s.lifespan>0&&(l.timeout&&clearTimeout(l.timeout),l.timeout=setTimeout(l.remove,s.lifespan)),l.response;if(!t)throw l.promise}let o={keys:e,equal:s.equal,remove:()=>{let l=Do.indexOf(o);l!==-1&&Do.splice(l,1)},promise:(cC(r)?r:r(...e)).then(l=>{o.response=l,s.lifespan&&s.lifespan>0&&(o.timeout=setTimeout(o.remove,s.lifespan))}).catch(l=>o.error=l)};if(Do.push(o),!t)throw o.promise}var fS=(r,e,t)=>cS(r,e,!1,t),dS=(r,e,t)=>{cS(r,e,!0,t)};var hS=r=>{if(r===void 0||r.length===0)Do.splice(0,Do.length);else{let e=Do.find(t=>uS(r,t.keys,t.equal));e&&e.remove()}};var Zn=fi(Sg());var kg=((r,e)=>typeof window<"u"&&(((r=window.document)==null?void 0:r.createElement)||((e=window.navigator)==null?void 0:e.product)==="ReactNative"))()?nn.useLayoutEffect:nn.useEffect;function dC(r){let e=nn.useRef(r);return kg(()=>{e.current=r},[r]),e}function Dg(r){let e=r.root;for(;e.getState().previousRoot;)e=e.getState().previousRoot;return e}var zS=r=>r&&r.isOrthographicCamera;var hC=r=>r!=null&&(typeof r=="string"||typeof r=="number"||r.isColor),TS=()=>{};function Fg(r){var e;let t=typeof window<"u"?(e=window.devicePixelRatio)!=null?e:2:1;return Array.isArray(r)?Math.min(Math.max(r[0],t),r[1]):r}function pC(r){if(typeof window>"u"||typeof window.matchMedia!="function"||!window.devicePixelRatio)return()=>{};let e,t=()=>{try{var l,c;e=window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),typeof((l=e)==null?void 0:l.addEventListener)=="function"?e.addEventListener("change",o):(c=e)==null||c.addListener==null||c.addListener(o)}catch{e=void 0}},s=()=>{var l,c;typeof((l=e)==null?void 0:l.removeEventListener)=="function"?e.removeEventListener("change",o):(c=e)==null||c.removeListener==null||c.removeListener(o),e=void 0},o=()=>{s(),t(),r()};return t(),s}var _n={obj:r=>r===Object(r)&&!_n.arr(r)&&typeof r!="function",fun:r=>typeof r=="function",str:r=>typeof r=="string",num:r=>typeof r=="number",boo:r=>typeof r=="boolean",und:r=>r===void 0,nul:r=>r===null,arr:r=>Array.isArray(r),equ(r,e,{arrays:t="shallow",objects:s="reference",strict:o=!0}={}){if(typeof r!=typeof e||!!r!=!!e)return!1;if(_n.str(r)||_n.num(r)||_n.boo(r))return r===e;let l=_n.obj(r);if(l&&s==="reference")return r===e;let c=_n.arr(r);if(c&&t==="reference")return r===e;if((c||l)&&r===e)return!0;let f;for(f in r)if(!(f in e))return!1;if(l&&t==="shallow"&&s==="shallow"){for(f in o?e:r)if(!_n.equ(r[f],e[f],{strict:o,objects:"reference"}))return!1}else for(f in o?e:r)if(r[f]!==e[f])return!1;if(_n.und(f)){if(c&&r.length===0&&e.length===0||l&&Object.keys(r).length===0&&Object.keys(e).length===0)return!0;if(r!==e)return!1}return!0}};function OS(r){let e={nodes:{},materials:{},meshes:{}};return r&&r.traverse(t=>{t.name&&(e.nodes[t.name]=t),t.material&&!e.materials[t.material.name]&&(e.materials[t.material.name]=t.material),t.isMesh&&!e.meshes[t.name]&&(e.meshes[t.name]=t)}),e}function BS(r){r.type!=="Scene"&&(r.dispose==null||r.dispose());for(let e in r){let t=r[e];t?.type!=="Scene"&&(t==null||t.dispose==null||t.dispose())}}var HS=["children","key","ref"];function Rg(r){let e={};for(let t in r)HS.includes(t)||(e[t]=r[t]);return e}function Vd(r,e,t,s){let o=r,l=o?.__r3f;return l||(l={root:e,type:t,parent:null,children:[],props:Rg(s),object:o,eventCount:0,handlers:{},previousVisible:void 0,isHidden:!1},o&&(o.__r3f=l)),l}function Ru(r,e){if(!e.includes("-"))return{root:r,key:e,target:r[e]};if(e in r)return{root:r,key:e,target:r[e]};let t=r,s=e.split("-");for(let o of s){if(typeof t!="object"||t===null){if(t!==void 0){let l=s.slice(s.indexOf(o)).join("-");return{root:t,key:l,target:void 0}}return{root:r,key:e,target:void 0}}e=o,r=t,t=t[e]}return{root:r,key:e,target:t}}var ES=/-\d+$/;function Gd(r,e){if(_n.str(e.props.attach)){if(ES.test(e.props.attach)){let o=e.props.attach.replace(ES,""),{root:l,key:c}=Ru(r.object,o);Array.isArray(l[c])||(l[c]=[])}let{root:t,key:s}=Ru(r.object,e.props.attach);e.previousAttach=t[s],t[s]=e.object}else _n.fun(e.props.attach)&&(e.previousAttach=e.props.attach(r.object,e.object))}function Wd(r,e){if(_n.str(e.props.attach)){let{root:t,key:s}=Ru(r.object,e.props.attach),o=e.previousAttach;o===void 0?delete t[s]:t[s]=o}else e.previousAttach==null||e.previousAttach(r.object,e.object);delete e.previousAttach}var Cg=[...HS,"args","dispose","attach","object","onUpdate","dispose"],AS=new Map;function mC(r){let e=AS.get(r.constructor);try{e||(e=new r.constructor,AS.set(r.constructor,e))}catch{}return e}function gC(r,e){let t={};for(let s in e)if(!Cg.includes(s)&&!_n.equ(e[s],r.props[s])){t[s]=e[s];for(let o in e)o.startsWith(`${s}-`)&&(t[o]=e[o])}for(let s in r.props){if(Cg.includes(s)||e.hasOwnProperty(s))continue;let{root:o,key:l}=Ru(r.object,s);if(o.constructor&&o.constructor.length===0){let c=mC(o);_n.und(c)||(t[s]=c[l])}else t[s]=0}return t}var vC=["map","emissiveMap","sheenColorMap","specularColorMap","envMap"],yC=/^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/;function Xs(r,e){var t;let s=r.__r3f,o=s&&Dg(s).getState(),l=s?.eventCount;for(let f in e){let h=e[f];if(Cg.includes(f))continue;if(s&&yC.test(f)){typeof h=="function"?s.handlers[f]=h:delete s.handlers[f],s.eventCount=Object.keys(s.handlers).length;continue}if(h===void 0)continue;if(f==="visible"&&s!=null&&s.isHidden&&s.previousVisible!==void 0){s.previousVisible=h;continue}let{root:m,key:g,target:_}=Ru(r,f);if(_===void 0&&(typeof m!="object"||m===null))throw Error(`R3F: Cannot set "${f}". Ensure it is an object before setting "${g}".`);if(_ instanceof rs&&h instanceof rs)_.mask=h.mask;else if(_ instanceof We&&hC(h))_.set(h);else if(_!==null&&typeof _=="object"&&typeof _.set=="function"&&typeof _.copy=="function"&&h!=null&&h.constructor&&_.constructor===h.constructor)_.copy(h);else if(_!==null&&typeof _=="object"&&typeof _.set=="function"&&Array.isArray(h))typeof _.fromArray=="function"?_.fromArray(h):_.set(...h);else if(_!==null&&typeof _=="object"&&typeof _.set=="function"&&typeof h=="number")typeof _.setScalar=="function"?_.setScalar(h):_.set(h);else if(m instanceof pi&&g==="uniforms"&&_n.obj(h)){_n.obj(m.uniforms)||(m.uniforms={});let b=m.uniforms,v=h;for(let x in v){let A=v[x],S=b[x];S?Object.assign(S,A):b[x]={...A}}}else{var c;m[g]=h,o&&!o.linear&&vC.includes(g)&&(c=m[g])!=null&&c.isTexture&&m[g].format===Bi&&m[g].type===oi&&(m[g].colorSpace=An)}}if(s!=null&&s.parent&&o!=null&&o.internal&&(t=s.object)!=null&&t.isObject3D&&l!==s.eventCount){let f=s.object,h=o.internal.interaction.indexOf(f);h>-1&&o.internal.interaction.splice(h,1),s.eventCount&&f.raycast!==null&&o.internal.interaction.push(f)}return s&&s.props.attach===void 0&&(s.object.isBufferGeometry?s.props.attach="geometry":s.object.isMaterial&&(s.props.attach="material")),s&&Pu(s),r}function Pu(r){var e;if(!r.parent)return;r.props.onUpdate==null||r.props.onUpdate(r.object);let t=(e=r.root)==null||e.getState==null?void 0:e.getState();t&&t.internal.frames===0&&t.invalidate()}function bC(r,e){r.manual||(zS(r)?(r.left=e.width/-2,r.right=e.width/2,r.top=e.height/2,r.bottom=e.height/-2):r.aspect=e.width/e.height,r.updateProjectionMatrix())}var gi=r=>r?.isObject3D;function _C(r){return(r.eventObject||r.object).uuid+"/"+r.index+r.instanceId}function SC(r,e,t,s){let o=t.get(e);o&&(t.delete(e),t.size===0&&(r.delete(s),o.target.releasePointerCapture(s)))}function xC(r,e,t){let{internal:s}=r.getState();for(let o=0;o<s.interaction.length;o++)s.interaction[o]===e&&(s.interaction[o]=t);for(let o=0;o<s.initialHits.length;o++)s.initialHits[o]===e&&(s.initialHits[o]=t);s.hovered.forEach((o,l)=>{if(o.eventObject===e||o.object===e){s.hovered.delete(l);let c={...o,eventObject:o.eventObject===e?t:o.eventObject,object:o.object===e?t:o.object};s.hovered.set(_C(c),c)}}),s.capturedMap.forEach(o=>{for(let[l,c]of Array.from(o)){let{intersection:f}=c;l!==e&&f.object!==e&&f.eventObject!==e||(l===e&&o.delete(l),o.set(l===e?t:l,{...c,intersection:{...f,object:f.object===e?t:f.object,eventObject:f.eventObject===e?t:f.eventObject}}))}})}function MC(r,e){let{internal:t}=r.getState();t.interaction=t.interaction.filter(s=>s!==e),t.initialHits=t.initialHits.filter(s=>s!==e),t.hovered.forEach((s,o)=>{(s.eventObject===e||s.object===e)&&t.hovered.delete(o)}),t.capturedMap.forEach((s,o)=>{SC(t.capturedMap,e,s,o)})}var Ug=r=>typeof r?.then=="function",wC=r=>Object.assign(Promise.resolve(r),{status:"fulfilled",value:r}),TC=r=>{let e=Promise.reject(r);return e.catch(()=>{}),Object.assign(e,{status:"rejected",reason:r})},EC=()=>{let r,e,t=new Promise((s,o)=>{r=l=>{Object.assign(t,{status:"fulfilled",value:l}),s(l)},e=l=>{Object.assign(t,{status:"rejected",reason:l}),o(l)}});return t.status="pending",t.catch(()=>{}),{promise:t,resolve:r,reject:e}},zg=r=>!!(r!=null&&r.render);function AC(r,e){let t={canvas:r,powerPreference:"high-performance",antialias:!0,alpha:!0};return typeof e=="function"?e(t):zg(e)?e:new Nd({...t,...e})}function RC(r){if((r.hasInitialized==null?void 0:r.hasInitialized())===!1)return;let e=Au(()=>{var t;return r.dispose?r.dispose():(t=r.renderLists)==null||t.dispose==null?void 0:t.dispose()});if(Ug(e))return Promise.resolve(e).catch(t=>console.warn("[R3F] Error disposing renderer",t)).then(()=>Au(()=>r.forceContextLoss==null?void 0:r.forceContextLoss()));Au(()=>r.forceContextLoss==null?void 0:r.forceContextLoss())}function CC(r,e){if(r){if(e)return RC(r);Au(()=>{var t;return(t=r.renderLists)==null||t.dispose==null?void 0:t.dispose()}),Au(()=>r.forceContextLoss==null?void 0:r.forceContextLoss())}}function Au(r){try{return r()}catch(e){console.warn("[R3F] Error while unmounting root; teardown may be incomplete:",e)}}var Og=nn.createContext(null),PC=(r,e)=>{let t=lS((f,h)=>{let m=new H,g=new H,_=new H;function b(y=h().camera,w=g,L=h().size){let{width:C,height:I,top:N,left:M}=L,P=C/I;w.isVector3?_.copy(w):_.set(...w);let G=y.getWorldPosition(m).distanceTo(_);if(zS(y))return{width:C/y.zoom,height:I/y.zoom,top:N,left:M,factor:1,distance:G,aspect:P};{let F=y.fov*Math.PI/180,B=2*Math.tan(F/2)*G,W=B*(C/I);return{width:W,height:B,top:N,left:M,factor:C/W,distance:G,aspect:P}}}let v,x=y=>f(w=>({performance:{...w.performance,current:y}})),A=new lt;return{set:f,get:h,gl:null,camera:null,raycaster:null,events:{priority:1,enabled:!0,connected:!1},scene:null,xr:null,invalidate:(y=1)=>r(h(),y),advance:(y,w)=>e(y,w,h()),legacy:!1,linear:!1,flat:!1,controls:null,clock:new uu,pointer:A,mouse:A,frameloop:"always",onPointerMissed:void 0,performance:{current:1,min:.5,max:1,debounce:200,regress:()=>{let y=h();v&&clearTimeout(v),y.performance.current!==y.performance.min&&x(y.performance.min),v=setTimeout(()=>x(h().performance.max),y.performance.debounce)}},size:{width:0,height:0,top:0,left:0},viewport:{initialDpr:0,dpr:0,width:0,height:0,top:0,left:0,aspect:0,distance:0,factor:0,getCurrentViewport:b},setEvents:y=>f(w=>({...w,events:{...w.events,...y}})),setSize:(y,w,L=0,C=0)=>{let I=h().camera,N={width:y,height:w,top:L,left:C};f(M=>({size:N,viewport:{...M.viewport,...b(I,g,N)}}))},setDpr:y=>f(w=>{let L=Fg(y);return{viewport:{...w.viewport,dpr:L,initialDpr:w.viewport.initialDpr||L}}}),setFrameloop:(y="always")=>{let w=h().clock;w.stop(),w.elapsedTime=0,y!=="never"&&(w.start(),w.elapsedTime=0),f(()=>({frameloop:y}))},previousRoot:void 0,internal:{interaction:[],hovered:new Map,subscribers:[],initialClick:[0,0],initialHits:[],capturedMap:new Map,lastEvent:nn.createRef(),active:!1,frames:0,priority:0,subscribe:(y,w,L)=>{let C=h().internal;return C.priority=C.priority+(w>0?1:0),C.subscribers.push({ref:y,priority:w,store:L}),C.subscribers=C.subscribers.sort((I,N)=>I.priority-N.priority),()=>{let I=h().internal;I!=null&&I.subscribers&&(I.priority=I.priority-(w>0?1:0),I.subscribers=I.subscribers.filter(N=>N.ref!==y))}}}}}),s=t.getState(),o=s.size,l=s.viewport.dpr,c=s.camera;return t.subscribe(()=>{let{camera:f,size:h,viewport:m,gl:g,set:_}=t.getState();if(h.width!==o.width||h.height!==o.height||m.dpr!==l){o=h,l=m.dpr,bC(f,h),m.dpr>0&&g.setPixelRatio(m.dpr);let b=typeof HTMLCanvasElement<"u"&&g.domElement instanceof HTMLCanvasElement;g.setSize(h.width,h.height,b)}f!==c&&(c=f,_(b=>({viewport:{...b.viewport,...b.viewport.getCurrentViewport(f)}})))}),t.subscribe(f=>r(f)),t};function Bg(){let r=nn.useContext(Og);if(!r)throw new Error("R3F: Hooks can only be used within the Canvas component!");return r}function Rn(r=t=>t,e){return Bg()(r,e)}function er(r,e=0){let t=Bg(),s=t.getState().internal.subscribe,o=dC(r);return kg(()=>s(o,e,t),[e,s,t]),null}var RS=new WeakMap,IC=r=>{var e;return typeof r=="function"&&(r==null||(e=r.prototype)==null?void 0:e.constructor)===r};function VS(r,e){return function(t,...s){let o;return IC(t)?(o=RS.get(t),o||(o=new t,RS.set(t,o))):o=t,r&&r(o),Promise.all(s.map(l=>new Promise((c,f)=>o.load(l,h=>{gi(h?.scene)&&Object.assign(h,OS(h.scene)),c(h)},e,h=>f(new Error(`Could not load ${l}: ${h?.message}`))))))}}function Hg(r,e,t,s){let o=Array.isArray(e)?e:[e],l=fS(VS(t,s),[r,...o],{equal:_n.equ});return Array.isArray(e)?l:l[0]}Hg.preload=function(r,e,t){let s=Array.isArray(e)?e:[e];return dS(VS(t),[r,...s])};Hg.clear=function(r,e){let t=Array.isArray(e)?e:[e];return hS([r,...t])};var NC=1,CS=8,Hd=32,PS=2,LC=268435456,kC={objects:"shallow"};function DC(r,e){if(!e&&typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement&&r.parentElement){let{width:t,height:s,top:o,left:l}=r.parentElement.getBoundingClientRect();return{width:t,height:s,top:o,left:l}}else if(!e&&typeof OffscreenCanvas<"u"&&r instanceof OffscreenCanvas)return{width:r.width,height:r.height,top:0,left:0};return{width:0,height:0,top:0,left:0,...e}}function FC({store:r,configuration:e},t,s){let{gl:o,scene:l,camera:c,shadows:f=!1,linear:h=!1,flat:m=!1,legacy:g=!1,frameloop:_="always",dpr:b=[1,2],performance:v,onPointerMissed:x}=s,A=DC(t,s.size),S={...s,shadows:f,linear:h,flat:m,legacy:g,frameloop:_,size:A},y=r.getState(),w=y.gl,L=e.previous,C=F=>!L||!_n.equ(S[F],L[F],kC);e.previous=void 0;let I=y.raycaster;if(I||y.set({raycaster:I=new Ao}),C("raycaster")){var N;let{params:F,...B}=(N=s.raycaster)!=null?N:{};Xs(I,{...B,params:{...I.params,...F}})}if(!y.camera||y.camera===e.camera&&C("camera")){e.camera=c;let F=c?.isCamera,B=F?c:s.orthographic?new wo(0,0,0,0,.1,1e3):new di(75,0,.1,1e3);F||(B.position.z=5,c&&(Xs(B,c),B.manual||("aspect"in c||"left"in c||"right"in c||"bottom"in c||"top"in c)&&(B.manual=!0,B.updateProjectionMatrix())),!y.camera&&!(c!=null&&c.rotation)&&B.lookAt(0,0,0)),y.set({camera:B}),I.camera=B}if(!y.scene){let F;l!=null&&l.isScene?(F=l,Vd(F,r,"",{})):(F=new So,Vd(F,r,"",{}),l&&Xs(F,l)),y.set({scene:F})}if(s.events&&!y.events.handlers&&y.set({events:s.events(r)}),C("size")&&y.setSize(A.width,A.height,A.top,A.left),y.viewport.dpr!==Fg(b)&&y.setDpr(b),C("frameloop")&&y.setFrameloop(_),C("onPointerMissed")&&y.set({onPointerMissed:x}),v&&C("performance")&&y.set(F=>({performance:{...F.performance,...v}})),!y.xr){var M;let F=(j,z)=>{let K=r.getState();K.frameloop!=="never"&&Wg(j,!0,K,z)},B=()=>{let j=r.getState();j.gl.xr.enabled=j.gl.xr.isPresenting,j.gl.xr.setAnimationLoop(j.gl.xr.isPresenting?F:null),j.gl.xr.isPresenting||Tt(j)},W={connect(){let j=r.getState().gl;j.xr.addEventListener("sessionstart",B),j.xr.addEventListener("sessionend",B)},disconnect(){let j=r.getState().gl;j.xr.removeEventListener("sessionstart",B),j.xr.removeEventListener("sessionend",B)}};typeof((M=w.xr)==null?void 0:M.addEventListener)=="function"&&W.connect(),y.set({xr:W})}if(w.shadowMap&&C("shadows")){let F=w.shadowMap.enabled,B=w.shadowMap.type;if(w.shadowMap.enabled=!!f,_n.boo(f))w.shadowMap.type=Xa;else if(_n.str(f)){var P;let W={basic:bm,percentage:Ro,soft:Xa,variance:Hs};w.shadowMap.type=(P=W[f])!=null?P:Xa}else _n.obj(f)&&Object.assign(w.shadowMap,f);(F!==w.shadowMap.enabled||B!==w.shadowMap.type)&&(w.shadowMap.needsUpdate=!0)}let G=o&&!_n.fun(o)&&!zg(o)?o:void 0;C("legacy")&&(bt.enabled=!g,y.set({legacy:g})),C("linear")&&(G?.outputColorSpace===void 0&&(w.outputColorSpace=h?_o:An),y.set({linear:h})),C("flat")&&(G?.toneMapping===void 0&&(w.toneMapping=m?si:fu),y.set({flat:m})),G&&C("gl")&&Xs(w,G),e.previous=S}function UC(r){let e=()=>{var o;return(o=r.store.getState().gl)==null?void 0:o.xr},t=()=>{var o,l,c,f;let h=r.store.getState();if((o=e())!=null&&o.isPresenting||(l=e())!=null&&l.getSession!=null&&l.getSession()){e().addEventListener("sessionend",t);return}(c=e())==null||c.removeEventListener==null||c.removeEventListener("sessionend",t);let m=r.configuration.previous;if(!m)return;let g=(f=m.dpr)!=null?f:[1,2];h.viewport.dpr!==Fg(g)&&h.setDpr(g)},s=pC(t);return()=>{var o;s(),(o=e())==null||o.removeEventListener==null||o.removeEventListener("sessionend",t)}}var zC={name:"@react-three/fiber",version:"9.8.2",description:"A React renderer for Threejs",keywords:["react","renderer","fiber","three","threejs"],author:"Paul Henschel (https://github.com/drcmda)",license:"MIT",maintainers:["Josh Ellis (https://github.com/joshuaellis)","Cody Bennett (https://github.com/codyjasonbennett)","Kris Baumgarter (https://github.com/krispya)"],bugs:{url:"https://github.com/pmndrs/react-three-fiber/issues"},homepage:"https://github.com/pmndrs/react-three-fiber#readme",repository:{type:"git",url:"git+https://github.com/pmndrs/react-three-fiber.git"},collective:{type:"opencollective",url:"https://opencollective.com/react-three-fiber"},main:"dist/react-three-fiber.cjs.js",module:"dist/react-three-fiber.esm.js",types:"dist/react-three-fiber.cjs.d.ts","react-native":"native/dist/react-three-fiber-native.cjs.js",files:["dist","native","react-reconciler","CHANGELOG.md"],sideEffects:!1,preconstruct:{entrypoints:["index.tsx","native.tsx"]},scripts:{prebuild:"cp ../../readme.md readme.md"},devDependencies:{"@types/react-reconciler":"^0.33.0","react-reconciler":"^0.34.0"},dependencies:{"@babel/runtime":"^7.17.8","@types/webxr":"*","base64-js":"^1.5.1",buffer:"^6.0.3","its-fine":"^2.1.1","react-use-measure":"^2.1.7",scheduler:"^0.28.0","suspend-react":"^0.1.3","use-sync-external-store":"^1.4.0",zustand:"^5.0.3"},peerDependencies:{expo:">=43.0","expo-asset":">=8.4","expo-file-system":">=11.0","expo-gl":">=11.0",react:">=19 <19.4","react-dom":">=19 <19.4","react-native":">=0.78",three:">=0.156"},peerDependenciesMeta:{"react-dom":{optional:!0},"react-native":{optional:!0},expo:{optional:!0},"expo-asset":{optional:!0},"expo-file-system":{optional:!0},"expo-gl":{optional:!0}}};function OC(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var IS={exports:{}},Pg={exports:{}};Pg.exports;var NS;function BC(){return NS||(NS=1,(function(r){r.exports=function(e){function t(n,i,a,u){return new wx(n,i,a,u)}function s(){}function o(n){var i="https://react.dev/errors/"+n;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(n){for(var i=n,a=i;a&&!a.alternate;)i=a,(i.flags&4098)!==0&&(n=i.return),a=i.return;for(;i.return;)i=i.return;return i.tag===3?n:null}function c(n){if(l(n)!==n)throw Error(o(188))}function f(n){var i=n.alternate;if(!i){if(i=l(n),i===null)throw Error(o(188));return i!==n?null:n}for(var a=n,u=i;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(u=d.return,u!==null){a=u;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return c(d),n;if(p===u)return c(d),i;p=p.sibling}throw Error(o(188))}if(a.return!==u.return)a=d,u=p;else{for(var T=!1,D=d.child;D;){if(D===a){T=!0,a=d,u=p;break}if(D===u){T=!0,u=d,a=p;break}D=D.sibling}if(!T){for(D=p.child;D;){if(D===a){T=!0,a=p,u=d;break}if(D===u){T=!0,u=p,a=d;break}D=D.sibling}if(!T)throw Error(o(189))}}if(a.alternate!==u)throw Error(o(190))}if(a.tag!==3)throw Error(o(188));return a.stateNode.current===a?n:i}function h(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n;for(n=n.child;n!==null;){if(i=h(n),i!==null)return i;n=n.sibling}return null}function m(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n;for(n=n.child;n!==null;){if(n.tag!==4&&(i=m(n),i!==null))return i;n=n.sibling}return null}function g(n){return n===null||typeof n!="object"?null:(n=qv&&n[qv]||n["@@iterator"],typeof n=="function"?n:null)}function _(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===Ix?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Yo:return"Fragment";case Zh:return"Profiler";case Wv:return"StrictMode";case Kh:return"Suspense";case Qh:return"SuspenseList";case tp:return"Activity";case np:return"ViewTransition"}if(typeof n=="object")switch(n.$$typeof){case $o:return"Portal";case Vr:return n.displayName||"Context";case Xv:return(n._context.displayName||"Context")+".Consumer";case Jh:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ep:return i=n.displayName||null,i!==null?i:_(n.type)||"Memo";case Ss:i=n._payload,n=n._init;try{return _(n(i))}catch{}}return null}function b(n){return{current:n}}function v(n){0>Jo||(n.current=cp[Jo],cp[Jo]=null,Jo--)}function x(n,i){Jo++,cp[Jo]=n.current,n.current=i}function A(n){return n>>>=0,n===0?32:31-(yM(n)/bM|0)|0}function S(n){var i=n&42;if(i!==0)return i;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return n&-n;case 262144:case 524288:case 1048576:case 2097152:return n&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function y(n,i,a){var u=n.pendingLanes;if(u===0)return 0;var d=0,p=n.suspendedLanes,T=n.pingedLanes;n=n.warmLanes;var D=u&134217727;return D!==0?(u=D&~p,u!==0?d=S(u):(T&=D,T!==0?d=S(T):a||(a=D&~n,a!==0&&(d=S(a))))):(D=u&~p,D!==0?d=S(D):T!==0?d=S(T):a||(a=u&~n,a!==0&&(d=S(a)))),d===0?0:i!==0&&i!==d&&(i&p)===0&&(p=d&-d,a=i&-i,p>=a||p===32&&(a&4194048)!==0)?i:d}function w(n,i){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&i)===0}function L(n,i){(i&8)!==0&&(i|=i&32);var a=n.entangledLanes;if(a!==0)for(n=n.entanglements,a&=i;0<a;){var u=31-Ci(a),d=1<<u;i|=n[u],a&=~d}return i}function C(n,i){switch(n){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function I(){var n=cc;return cc<<=1,(cc&62914560)===0&&(cc=4194304),n}function N(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function M(n,i){n.pendingLanes|=i,i!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function P(n,i,a,u,d,p){var T=n.pendingLanes;n.pendingLanes=a,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=a,n.entangledLanes&=a,n.errorRecoveryDisabledLanes&=a,n.shellSuspendCounter=0;var D=n.entanglements,Q=n.expirationTimes,fe=n.hiddenUpdates;for(a=T&~a;0<a;){var ge=31-Ci(a),Re=1<<ge;D[ge]=0,Q[ge]=-1;var ke=fe[ge];if(ke!==null)for(fe[ge]=null,ge=0;ge<ke.length;ge++){var yt=ke[ge];yt!==null&&(yt.lane&=-536870913)}a&=~Re}u!==0&&G(n,u,0),p!==0&&d===0&&n.tag!==0&&(n.suspendedLanes|=p&~(T&~i))}function G(n,i,a){n.pendingLanes|=i,n.suspendedLanes&=~i;var u=31-Ci(i);n.entangledLanes|=i,n.entanglements[u]=n.entanglements[u]|1073741824|a&261930}function F(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var u=31-Ci(a),d=1<<u;d&i|n[u]&i&&(n[u]|=i),a&=~d}}function B(n,i){var a=i&-i;return a=(a&42)!==0?1:W(a),(a&(n.suspendedLanes|i))!==0?0:a}function W(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function j(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function z(n){if(typeof wM=="function"&&TM(n),Pi&&typeof Pi.setStrictMode=="function")try{Pi.setStrictMode(xl,n)}catch{}}function K(n,i){if(n.name!=null&&n.name!=="auto")return n.name;if(i.autoName!==null)return i.autoName;n=lr.identifierPrefix;var a=EM++;return n="_"+n+"t_"+a.toString(32)+"_",i.autoName=n}function se(n){var i;if(n==null||typeof n=="string")return n;var a=null,u=ha;if(u!==null)for(var d=0;d<u.length;d++){var p=n[u[d]];if(p!=null){if(p==="none")return"none";a=a==null?p:a+(" "+p)}}return(i=a)!=null?i:n.default}function ee(n,i){return n=se(n),i=se(i),i==null?n==="auto"?null:n:i==="auto"?null:i}function me(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}function ne(n){if(hp===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);hp=i&&i[1]||"",Sy=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+hp+n+Sy}function ce(n,i){if(!n||pp)return"";pp=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(i){var Re=function(){throw Error()};if(Object.defineProperty(Re.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Re,[])}catch(Rt){var ke=Rt}Reflect.construct(n,[],Re)}else{try{Re.call()}catch(Rt){ke=Rt}Re=!1;try{var yt=Object.getOwnPropertyDescriptor(n.prototype,"props");Object.defineProperty(n.prototype,"props",{configurable:!0,set:function(){throw Error()}}),Re=!0,new n}finally{Re&&(yt!==void 0?Object.defineProperty(n.prototype,"props",yt):delete n.prototype.props)}}}else{try{throw Error()}catch(Rt){ke=Rt}(Re=n())&&typeof Re.catch=="function"&&Re.catch(function(){})}}catch(Rt){if(Rt&&ke&&typeof Rt.stack=="string")return[Rt.stack,ke.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=u.DetermineComponentFrameRoot(),T=p[0],D=p[1];if(T&&D){var Q=T.split(`
`),fe=D.split(`
`);for(d=u=0;u<Q.length&&!Q[u].includes("DetermineComponentFrameRoot");)u++;for(;d<fe.length&&!fe[d].includes("DetermineComponentFrameRoot");)d++;if(u===Q.length||d===fe.length)for(u=Q.length-1,d=fe.length-1;1<=u&&0<=d&&Q[u]!==fe[d];)d--;for(;1<=u&&0<=d;u--,d--)if(Q[u]!==fe[d]){if(u!==1||d!==1)do if(u--,d--,0>d||Q[u]!==fe[d]){var ge=`
`+Q[u].replace(" at new "," at ");return n.displayName&&ge.includes("<anonymous>")&&(ge=ge.replace("<anonymous>",n.displayName)),ge}while(1<=u&&0<=d);break}}}finally{pp=!1,Error.prepareStackTrace=a}return(a=n?n.displayName||n.name:"")?ne(a):""}function he(n,i){switch(n.tag){case 26:case 27:case 5:return ne(n.type);case 16:return ne("Lazy");case 13:return n.child!==i&&i!==null?ne("Suspense Fallback"):ne("Suspense");case 19:return ne("SuspenseList");case 0:case 15:return ce(n.type,!1);case 11:return ce(n.type.render,!1);case 1:return ce(n.type,!0);case 31:return ne("Activity");case 30:return ne("ViewTransition");default:return""}}function Be(n){try{var i="",a=null;do i+=he(n,a),a=n,n=n.return;while(n);return i}catch(u){return`
Error generating stack: `+u.message+`
`+u.stack}}function Ve(n,i){if(typeof n=="object"&&n!==null){var a=xy.get(n);return a!==void 0?a:(i={value:n,source:i,stack:Be(i)},xy.set(n,i),i)}return{value:n,source:i,stack:Be(i)}}function re(n,i){Qo[ea++]=Ml,Qo[ea++]=dc,dc=n,Ml=i}function Pe(n,i,a){qi[$i++]=Sr,qi[$i++]=xr,qi[$i++]=xs,xs=n;var u=Sr;n=xr;var d=32-Ci(u)-1;u&=~(1<<d),a+=1;var p=32-Ci(i)+d;if(30<p){var T=d-d%5;p=(u&(1<<T)-1).toString(32),u>>=T,d-=T,Sr=1<<32-Ci(i)+d|a<<d|u,xr=p+n}else Sr=1<<p|a<<d|u,xr=n}function De(n){n.return!==null&&(re(n,1),Pe(n,1,0))}function Xe(n){for(;n===dc;)dc=Qo[--ea],Qo[ea]=null,Ml=Qo[--ea],Qo[ea]=null;for(;n===xs;)xs=qi[--$i],qi[$i]=null,xr=qi[--$i],qi[$i]=null,Sr=qi[--$i],qi[$i]=null}function Ne(n,i){qi[$i++]=Sr,qi[$i++]=xr,qi[$i++]=xs,Sr=i.id,xr=i.overflow,xs=n}function et(n,i){x(Ms,i),x(wl,n),x(qn,null),n=kx(i),v(qn),x(qn,n)}function Wt(){v(qn),v(wl),v(Ms)}function Ye(n){var i=n.memoizedState;i!==null&&(i=i.memoizedState,br?Wr._currentValue=i:Wr._currentValue2=i,x(hc,n)),i=qn.current;var a=Dx(i,n.type);i!==a&&(x(wl,n),x(qn,a))}function Et(n){wl.current===n&&(v(qn),v(wl)),hc.current===n&&(v(hc),br?Wr._currentValue=jo:Wr._currentValue2=jo)}function _t(n){var i=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Jn(Ve(i,n)),mp}function ht(n,i){if(!Xn)throw Error(o(175));j1(n.stateNode,n.type,n.memoizedProps,i,n)||_t(n,!0)}function fn(n){for(kn=n.return;kn;)switch(kn.tag){case 5:case 31:case 13:Yi=!1;return;case 27:case 3:Yi=!0;return;default:kn=kn.return}}function Yt(n){if(!Xn||n!==kn)return!1;if(!mt)return fn(n),mt=!0,!1;var i=n.tag;if(on?i!==3&&i!==27&&(i!==5||uy(n.type)&&!sc(n.type,n.memoizedProps))&&Qt&&_t(n):i!==3&&(i!==5||uy(n.type)&&!sc(n.type,n.memoizedProps))&&Qt&&_t(n),fn(n),i===13){if(!Xn)throw Error(o(316));if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(o(317));Qt=eM(n)}else if(i===31){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(o(317));Qt=Q1(n)}else Qt=on&&i===27?O1(n.type,Qt):kn?ly(n.stateNode):null;return!0}function dn(){Xn&&(Qt=kn=null,mt=!1)}function Xt(){var n=ws;return n!==null&&(xi===null?xi=n:xi.push.apply(xi,n),ws=null),n}function Jn(n){ws===null?ws=[n]:ws.push(n)}function qt(n,i,a){br?(x(pc,i._currentValue),i._currentValue=a):(x(pc,i._currentValue2),i._currentValue2=a)}function hn(n){var i=pc.current;br?n._currentValue=i:n._currentValue2=i,v(pc)}function Bn(n,i,a){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===a)break;n=n.return}}function Kn(n,i,a,u){var d=n.child;for(d!==null&&(d.return=n);d!==null;){var p=d.dependencies;if(p!==null){var T=d.child;p=p.firstContext;e:for(;p!==null;){var D=p;p=d;for(var Q=0;Q<i.length;Q++)if(D.context===i[Q]){p.lanes|=a,D=p.alternate,D!==null&&(D.lanes|=a),Bn(p.return,a,n),u||(T=null);break e}p=D.next}}else if(d.tag===18){if(T=d.return,T===null)throw Error(o(341));T.lanes|=a,p=T.alternate,p!==null&&(p.lanes|=a),Bn(T,a,n),T=null}else d.tag===13&&d.memoizedState!==null&&d.memoizedState.dehydrated===null?(d.lanes|=a,T=d.alternate,T!==null&&(T.lanes|=a),Bn(d.return,a,n),T=d.child,T=T!==null?T.sibling:null):T=d.child;if(T!==null)T.return=d;else for(T=d;T!==null;){if(T===n){T=null;break}if(d=T.sibling,d!==null){d.return=T.return,T=d;break}T=T.return}d=T}}function V(n,i,a,u){n=null;for(var d=i,p=!1;d!==null;){if(!p){if((d.flags&524288)!==0)p=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var T=d.alternate;if(T===null)throw Error(o(387));if(T=T.memoizedProps,T!==null){var D=d.type;Ii(d.pendingProps.value,T.value)||(n!==null?n.push(D):n=[D])}}else if(d===hc.current){if(T=d.alternate,T===null)throw Error(o(387));T.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(n!==null?n.push(Wr):n=[Wr])}d=d.return}return n!==null&&Kn(i,n,a,u),i.flags|=262144,n!==null}function Hn(n){for(n=n.firstContext;n!==null;){var i=n.context;if(!Ii(br?i._currentValue:i._currentValue2,n.memoizedValue))return!0;n=n.next}return!1}function Pt(n){io=n,Xr=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function ut(n){return pn(io,n)}function Ee(n,i){return io===null&&Pt(n),pn(n,i)}function pn(n,i){var a=br?i._currentValue:i._currentValue2;if(i={context:i,memoizedValue:a,next:null},Xr===null){if(n===null)throw Error(o(308));Xr=i,n.dependencies={lanes:0,firstContext:i},n.flags|=524288}else Xr=Xr.next=i;return a}function qe(){return{controller:new RM,data:new Map,refCount:0}}function Ze(n){n.refCount--,n.refCount===0&&CM(PM,function(){n.controller.abort()})}function k(n,i){if((n.pendingLanes&4194048)!==0){var a=n.transitionTypes;for(a===null&&(a=n.transitionTypes=[]),n=0;n<i.length;n++){var u=i[n];a.indexOf(u)===-1&&a.push(u)}}}function E(n){var i=n.transitionTypes;return n.transitionTypes=null,i}function $(){}function de(n){n!==na&&n.next===null&&(na===null?ta=na=n:na=na.next=n),mc=!0,gp||(gp=!0,U())}function ue(n,i){if(!vp&&mc){vp=!0;do for(var a=!1,u=ta;u!==null;){if(!i)if(n!==0){var d=u.pendingLanes;if(d===0)var p=0;else{var T=u.suspendedLanes,D=u.pingedLanes;p=(1<<31-Ci(42|n)+1)-1,p&=d&~(T&~D),p=p&201326741?p&201326741|1:p?p|2:0}p!==0&&(a=!0,Me(u,p))}else p=wt,p=y(u,u===$t?p:0,u.cancelPendingCommit!==null||u.timeoutHandle!==no),(p&3)===0||w(u,p)||(a=!0,Me(u,p));u=u.next}while(a);vp=!1}}function xe(){Te()}function Te(){mc=gp=!1;var n=0;ro!==0&&Wx()&&(n=ro);for(var i=bi(),a=null,u=ta;u!==null;){var d=u.next,p=oe(u,i);p===0?(u.next=null,a===null?ta=d:a.next=d,d===null&&(na=a)):(a=u,(n!==0||(p&3)!==0)&&(mc=!0)),u=d}ln!==0&&ln!==5||ue(n,!1),ro!==0&&(ro=0)}function oe(n,i){for(var a=n.suspendedLanes,u=n.pingedLanes,d=n.expirationTimes,p=n.pendingLanes&-62914561;0<p;){var T=31-Ci(p),D=1<<T,Q=d[T];Q===-1?((D&a)===0||(D&u)!==0)&&(d[T]=C(D,i)):Q<=i&&(n.expiredLanes|=D),p&=~D}if(i=$t,a=wt,a=y(n,n===i?a:0,n.cancelPendingCommit!==null||n.timeoutHandle!==no),u=n.callbackNode,a===0||n===i&&(Ht===2||Ht===9)||n.cancelPendingCommit!==null)return u!==null&&u!==null&&fp(u),n.callbackNode=null,n.callbackPriority=0;if((a&3)===0||w(n,a)){if(i=a&-a,i===n.callbackPriority)return i;switch(u!==null&&fp(u),j(a)){case 2:case 8:a=xM;break;case 32:a=dp;break;case 268435456:a=MM;break;default:a=dp}return u=ae.bind(null,n),a=fc(a,u),n.callbackPriority=i,n.callbackNode=a,i}return u!==null&&u!==null&&fp(u),n.callbackPriority=2,n.callbackNode=null,2}function ae(n,i){if(ln!==0&&ln!==5)return n.callbackNode=null,n.callbackPriority=0,null;var a=n.callbackNode;if(yl()&&n.callbackNode!==a)return null;var u=wt;return u=y(n,n===$t?u:0,n.cancelPendingCommit!==null||n.timeoutHandle!==no),u===0?null:(Mv(n,u,i),oe(n,bi()),n.callbackNode!=null&&n.callbackNode===a?ae.bind(null,n):null)}function Me(n,i){if(yl())return null;Mv(n,i,!0)}function U(){Kx?Qx(function(){(xt&6)!==0?fc(by,xe):Te()}):fc(by,xe)}function le(){if(ro===0){var n=so;n===0&&(n=lc,lc<<=1,(lc&261888)===0&&(lc=256)),ro=n}return ro}function ie(n,i){if(El===null){var a=El=[];yp=0,so=le(),ia={status:"pending",value:void 0,then:function(u){a.push(u)}}}return yp++,i.then(we,we),i}function we(){if(--yp===0&&(Tl=null,El!==null)){ia!==null&&(ia.status="fulfilled");var n=El;El=null,so=0,ia=null;for(var i=0;i<n.length;i++)(0,n[i])()}}function ye(n,i){var a=[],u={status:"pending",value:null,reason:null,then:function(d){a.push(d)}};return n.then(function(){u.status="fulfilled",u.value=i;for(var d=0;d<a.length;d++)(0,a[d])(i)},function(d){for(u.status="rejected",u.reason=d,d=0;d<a.length;d++)(0,a[d])(void 0)}),u}function _e(){var n=oo.current;return n!==null?n:$t.pooledCache}function He(n,i){i===null?x(oo,oo.current):x(oo,i.pool)}function at(){var n=_e();return n===null?null:{parent:br?an._currentValue:an._currentValue2,pool:n}}function pe(n,i){if(Ii(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),u=Object.keys(i);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var d=a[u];if(!AM.call(i,d)||!Ii(n[d],i[d]))return!1}return!0}function Ge(n){return n=n.status,n==="fulfilled"||n==="rejected"}function ot(n,i,a){switch(a=n[a],a===void 0?n.push(i):a!==i&&(i.then($,$),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,vn(n),n===void 0&&!("reason"in i)?Error(o(600)):n;default:if(typeof i.status=="string")i.then($,$);else{if(n=$t,n!==null&&100<n.shellSuspendCounter)throw Error(o(482));n=i,n.status="pending",n.then(function(u){if(i.status==="pending"){var d=i;d.status="fulfilled",d.value=u}},function(u){if(i.status==="pending"){var d=i;d.status="rejected",d.reason=u}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,vn(n),n}throw ao=i,ra}}function Ae(n){try{var i=n._init;return i(n._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ao=a,ra):a}}function It(){if(ao===null)throw Error(o(459));var n=ao;return ao=null,n}function vn(n){if(n===ra||n===gc)throw Error(o(483))}function Ti(n){var i=Al;return Al+=1,sa===null&&(sa=[]),ot(sa,n,i)}function tr(n,i){i=i.props.ref,n.ref=i!==void 0?i:null}function ps(n,i){throw i.$$typeof===Ax?Error(o(525)):(n=Object.prototype.toString.call(i),Error(o(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n)))}function Du(n){function i(Z,X){if(n){var te=Z.deletions;te===null?(Z.deletions=[X],Z.flags|=16):te.push(X)}}function a(Z,X){if(!n)return null;for(;X!==null;)i(Z,X),X=X.sibling;return null}function u(Z){for(var X=new Map;Z!==null;)Z.key===null?X.set(Z.index,Z):X.set(Z.key,Z),Z=Z.sibling;return X}function d(Z,X){return Z=Hr(Z,X),Z.index=0,Z.sibling=null,Z}function p(Z,X,te){return Z.index=te,n?(te=Z.alternate,te!==null?(te=te.index,te<X?(Z.flags|=2,X):te):(Z.flags|=134217730,X)):(Z.flags|=1048576,X)}function T(Z){return n&&Z.alternate===null&&(Z.flags|=134217730),Z}function D(Z,X,te,ve){return X===null||X.tag!==6?(X=qh(te,Z.mode,ve),X.return=Z,X):(X=d(X,te),X.return=Z,X)}function Q(Z,X,te,ve){var Ke=te.type;return Ke===Yo?(Z=ge(Z,X,te.props.children,ve,te.key),tr(Z,te),Z):X!==null&&(X.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===Ss&&Ae(Ke)===X.type)?(X=d(X,te.props),tr(X,te),X.return=Z,X):(X=nc(te.type,te.key,te.props,null,Z.mode,ve),tr(X,te),X.return=Z,X)}function fe(Z,X,te,ve){return X===null||X.tag!==4||X.stateNode.containerInfo!==te.containerInfo||X.stateNode.implementation!==te.implementation?(X=$h(te,Z.mode,ve),X.return=Z,X):(X=d(X,te.children||[]),X.return=Z,X)}function ge(Z,X,te,ve,Ke){return X===null||X.tag!==7?(X=to(te,Z.mode,ve,Ke),X.return=Z,X):(X=d(X,te),X.return=Z,X)}function Re(Z,X,te){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=qh(""+X,Z.mode,te),X.return=Z,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case ic:return te=nc(X.type,X.key,X.props,null,Z.mode,te),tr(te,X),te.return=Z,te;case $o:return X=$h(X,Z.mode,te),X.return=Z,X;case Ss:return X=Ae(X),Re(Z,X,te)}if(rc(X)||g(X))return X=to(X,Z.mode,te,null),X.return=Z,X;if(typeof X.then=="function")return Re(Z,Ti(X),te);if(X.$$typeof===Vr)return Re(Z,Ee(Z,X),te);ps(Z,X)}return null}function ke(Z,X,te,ve){var Ke=X!==null?X.key:null;if(typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint")return Ke!==null?null:D(Z,X,""+te,ve);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case ic:return te.key===Ke?Q(Z,X,te,ve):null;case $o:return te.key===Ke?fe(Z,X,te,ve):null;case Ss:return te=Ae(te),ke(Z,X,te,ve)}if(rc(te)||g(te))return Ke!==null?null:ge(Z,X,te,ve,null);if(typeof te.then=="function")return ke(Z,X,Ti(te),ve);if(te.$$typeof===Vr)return ke(Z,X,Ee(Z,te),ve);ps(Z,te)}return null}function yt(Z,X,te,ve,Ke){if(typeof ve=="string"&&ve!==""||typeof ve=="number"||typeof ve=="bigint")return Z=Z.get(te)||null,D(X,Z,""+ve,Ke);if(typeof ve=="object"&&ve!==null){switch(ve.$$typeof){case ic:return Z=Z.get(ve.key===null?te:ve.key)||null,Q(X,Z,ve,Ke);case $o:return Z=Z.get(ve.key===null?te:ve.key)||null,fe(X,Z,ve,Ke);case Ss:return ve=Ae(ve),yt(Z,X,te,ve,Ke)}if(rc(ve)||g(ve))return Z=Z.get(te)||null,ge(X,Z,ve,Ke,null);if(typeof ve.then=="function")return yt(Z,X,te,Ti(ve),Ke);if(ve.$$typeof===Vr)return yt(Z,X,te,Ee(X,ve),Ke);ps(X,ve)}return null}function Rt(Z,X,te,ve){for(var Ke=null,un=null,tt=X,Lt=X=0,Tn=null;tt!==null&&Lt<te.length;Lt++){tt.index>Lt?(Tn=tt,tt=null):Tn=tt.sibling;var At=ke(Z,tt,te[Lt],ve);if(At===null){tt===null&&(tt=Tn);break}n&&tt&&At.alternate===null&&i(Z,tt),X=p(At,X,Lt),un===null?Ke=At:un.sibling=At,un=At,tt=Tn}if(Lt===te.length)return a(Z,tt),mt&&re(Z,Lt),Ke;if(tt===null){for(;Lt<te.length;Lt++)tt=Re(Z,te[Lt],ve),tt!==null&&(X=p(tt,X,Lt),un===null?Ke=tt:un.sibling=tt,un=tt);return mt&&re(Z,Lt),Ke}for(tt=u(tt);Lt<te.length;Lt++)Tn=yt(tt,Z,Lt,te[Lt],ve),Tn!==null&&(n&&(At=Tn.alternate,At!==null&&tt.delete(At.key===null?Lt:At.key)),X=p(Tn,X,Lt),un===null?Ke=Tn:un.sibling=Tn,un=Tn);return n&&tt.forEach(function(Is){return i(Z,Is)}),mt&&re(Z,Lt),Ke}function Ps(Z,X,te,ve){if(te==null)throw Error(o(151));for(var Ke=null,un=null,tt=X,Lt=X=0,Tn=null,At=te.next();tt!==null&&!At.done;Lt++,At=te.next()){tt.index>Lt?(Tn=tt,tt=null):Tn=tt.sibling;var Is=ke(Z,tt,At.value,ve);if(Is===null){tt===null&&(tt=Tn);break}n&&tt&&Is.alternate===null&&i(Z,tt),X=p(Is,X,Lt),un===null?Ke=Is:un.sibling=Is,un=Is,tt=Tn}if(At.done)return a(Z,tt),mt&&re(Z,Lt),Ke;if(tt===null){for(;!At.done;Lt++,At=te.next())At=Re(Z,At.value,ve),At!==null&&(X=p(At,X,Lt),un===null?Ke=At:un.sibling=At,un=At);return mt&&re(Z,Lt),Ke}for(tt=u(tt);!At.done;Lt++,At=te.next())At=yt(tt,Z,Lt,At.value,ve),At!==null&&(n&&(Tn=At.alternate,Tn!==null&&tt.delete(Tn.key===null?Lt:Tn.key)),X=p(At,X,Lt),un===null?Ke=At:un.sibling=At,un=At);return n&&tt.forEach(function(DM){return i(Z,DM)}),mt&&re(Z,Lt),Ke}function po(Z,X,te,ve){if(typeof te=="object"&&te!==null&&te.type===Yo&&te.key===null&&te.props.ref===void 0&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case ic:e:{for(var Ke=te.key;X!==null;){if(X.key===Ke){if(Ke=te.type,Ke===Yo){if(X.tag===7){a(Z,X.sibling),ve=d(X,te.props.children),tr(ve,te),ve.return=Z,Z=ve;break e}}else if(X.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===Ss&&Ae(Ke)===X.type){a(Z,X.sibling),ve=d(X,te.props),tr(ve,te),ve.return=Z,Z=ve;break e}a(Z,X);break}else i(Z,X);X=X.sibling}te.type===Yo?(ve=to(te.props.children,Z.mode,ve,te.key),tr(ve,te),ve.return=Z,Z=ve):(ve=nc(te.type,te.key,te.props,null,Z.mode,ve),tr(ve,te),ve.return=Z,Z=ve)}return T(Z);case $o:e:{for(Ke=te.key;X!==null;){if(X.key===Ke)if(X.tag===4&&X.stateNode.containerInfo===te.containerInfo&&X.stateNode.implementation===te.implementation){a(Z,X.sibling),ve=d(X,te.children||[]),ve.return=Z,Z=ve;break e}else{a(Z,X);break}else i(Z,X);X=X.sibling}ve=$h(te,Z.mode,ve),ve.return=Z,Z=ve}return T(Z);case Ss:return te=Ae(te),po(Z,X,te,ve)}if(rc(te))return Rt(Z,X,te,ve);if(g(te)){if(Ke=g(te),typeof Ke!="function")throw Error(o(150));return te=Ke.call(te),Ps(Z,X,te,ve)}if(typeof te.then=="function")return po(Z,X,Ti(te),ve);if(te.$$typeof===Vr)return po(Z,X,Ee(Z,te),ve);ps(Z,te)}return typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint"?(te=""+te,X!==null&&X.tag===6?(a(Z,X.sibling),ve=d(X,te),ve.return=Z,Z=ve):(a(Z,X),ve=qh(te,Z.mode,ve),ve.return=Z,Z=ve),T(Z)):a(Z,X)}return function(Z,X,te,ve){try{Al=0;var Ke=po(Z,X,te,ve);return sa=null,Ke}catch(tt){if(tt===ra||tt===gc)throw tt;var un=t(29,tt,null,Z.mode);return un.lanes=ve,un.return=Z,un}}}function js(){for(var n=oa,i=_p=oa=0;i<n;){var a=ji[i];ji[i++]=null;var u=ji[i];ji[i++]=null;var d=ji[i];ji[i++]=null;var p=ji[i];if(ji[i++]=null,u!==null&&d!==null){var T=u.pending;T===null?d.next=d:(d.next=T.next,T.next=d),u.pending=d}p!==0&&al(a,d,p)}}function Zs(n,i,a,u){ji[oa++]=n,ji[oa++]=i,ji[oa++]=a,ji[oa++]=u,_p|=u,n.lanes|=u,n=n.alternate,n!==null&&(n.lanes|=u)}function nr(n,i,a,u){return Zs(n,i,a,u),Js(n)}function ir(n,i){return Zs(n,null,null,i),Js(n)}function al(n,i,a){n.lanes|=a;var u=n.alternate;u!==null&&(u.lanes|=a);for(var d=!1,p=n.return;p!==null;)p.childLanes|=a,u=p.alternate,u!==null&&(u.childLanes|=a),p.tag===22&&(n=p.stateNode,n===null||n._visibility&1||(d=!0)),n=p,p=p.return;return n.tag===3?(p=n.stateNode,d&&i!==null&&(d=31-Ci(a),n=p.hiddenUpdates,u=n[d],u===null?n[d]=[i]:u.push(i),i.lane=a|536870912),p):null}function Js(n){if(50<Ll)throw Ll=0,Ic=null,Error(o(185));for(var i=n.return;i!==null;)n=i,i=n.return;return n.tag===3?n.stateNode:null}function ms(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Uo(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function rr(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function vi(n,i,a){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(xt&2)!==0){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,i=Js(n),al(n,null,a),i}return Zs(n,u,i,a),Js(n)}function Ks(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,F(n,a)}}function zo(n,i){var a=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var T={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};p===null?d=p=T:p=p.next=T,a=a.next}while(a!==null);p===null?d=p=i:p=p.next=i}else d=p=i;a={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:u.shared,callbacks:u.callbacks},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function gs(){if(Sp){var n=ia;if(n!==null)throw n}}function Qs(n,i,a,u){Sp=!1;var d=n.updateQueue;Ts=!1;var p=d.firstBaseUpdate,T=d.lastBaseUpdate,D=d.shared.pending;if(D!==null){d.shared.pending=null;var Q=D,fe=Q.next;Q.next=null,T===null?p=fe:T.next=fe,T=Q;var ge=n.alternate;ge!==null&&(ge=ge.updateQueue,D=ge.lastBaseUpdate,D!==T&&(D===null?ge.firstBaseUpdate=fe:D.next=fe,ge.lastBaseUpdate=Q))}if(p!==null){var Re=d.baseState;T=0,ge=fe=Q=null,D=p;do{var ke=D.lane&-536870913,yt=ke!==D.lane;if(yt?(wt&ke)===ke:(u&ke)===ke){ke!==0&&ke===so&&(Sp=!0),ge!==null&&(ge=ge.next={lane:0,tag:D.tag,payload:D.payload,callback:null,next:null});e:{var Rt=n,Ps=D;ke=i;var po=a;switch(Ps.tag){case 1:if(Rt=Ps.payload,typeof Rt=="function"){Re=Rt.call(po,Re,ke);break e}Re=Rt;break e;case 3:Rt.flags=Rt.flags&-65537|128;case 0:if(Rt=Ps.payload,ke=typeof Rt=="function"?Rt.call(po,Re,ke):Rt,ke==null)break e;Re=jh({},Re,ke);break e;case 2:Ts=!0}}ke=D.callback,ke!==null&&(n.flags|=64,yt&&(n.flags|=8192),yt=d.callbacks,yt===null?d.callbacks=[ke]:yt.push(ke))}else yt={lane:ke,tag:D.tag,payload:D.payload,callback:D.callback,next:null},ge===null?(fe=ge=yt,Q=Re):ge=ge.next=yt,T|=ke;if(D=D.next,D===null){if(D=d.shared.pending,D===null)break;yt=D,D=yt.next,yt.next=null,d.lastBaseUpdate=yt,d.shared.pending=null}}while(!0);ge===null&&(Q=Re),d.baseState=Q,d.firstBaseUpdate=fe,d.lastBaseUpdate=ge,p===null&&(d.shared.lanes=0),Rs|=T,n.lanes=T,n.memoizedState=Re}}function Fu(n,i){if(typeof n!="function")throw Error(o(191,n));n.call(i)}function Uu(n,i){var a=n.callbacks;if(a!==null)for(n.callbacks=null,n=0;n<a.length;n++)Fu(a[n],i)}function ll(n,i){n=$r,x(yc,n),x(Es,i),$r=n|i.baseLanes}function R(){x(yc,$r),x(Es,Es.current)}function O(){$r=yc.current,v(Es),v(yc)}function J(n){var i=n.alternate;x(Yn,Yn.current&1),x($n,n),ci===null&&(i===null||Es.current!==null||i.memoizedState!==null)&&(ci=n)}function q(n){x(Yn,Yn.current),x($n,n),ci===null&&(ci=n)}function Y(n){n.tag===22?(x(Yn,Yn.current),x($n,n),ci===null&&(ci=n)):be()}function be(){x(Yn,Yn.current),x($n,$n.current)}function Ce(n){v($n),ci===n&&(ci=null),v(Yn)}function Se(n,i){x($n,$n.current),x(Yn,i)}function Ie(n){v(Yn),v($n),ci===n&&(ci=null)}function Oe(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||op(a)||ap(a)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!=="independent"){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function Fe(){throw Error(o(321))}function ft(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Ii(n[a],i[a]))return!1;return!0}function Ue(n,i,a,u,d,p){return qr=p,ct=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Je.H=n===null||n.memoizedState===null?Ty:Ey,uo=!1,p=a(u,d),uo=!1,aa&&(p=rn(i,a,u,d)),pt(n),p}function pt(n){Je.H=Sc;var i=Gt!==null&&Gt.next!==null;if(qr=0,xn=Gt=ct=null,bc=!1,Rl=0,la=null,i)throw Error(o(300));n===null||Mn||(n=n.dependencies,n!==null&&Hn(n)&&(Mn=!0))}function rn(n,i,a,u){ct=n;var d=0;do{if(aa&&(la=null),Rl=0,aa=!1,25<=d)throw Error(o(301));if(d+=1,xn=Gt=null,n.updateQueue!=null){var p=n.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}Je.H=NM,p=i(a,u)}while(aa);return p}function Vt(){var n=Je.H,i=n.useState()[0];return i=typeof i.then=="function"?mn(i):i,n=n.useState()[0],(Gt!==null?Gt.memoizedState:null)!==n&&(ct.flags|=1024),i}function Dt(){var n=_c!==0;return _c=0,n}function Sn(n,i,a){i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~a}function ze(n){if(bc){for(n=n.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}bc=!1}qr=0,xn=Gt=ct=null,aa=!1,Rl=_c=0,la=null}function Ft(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xn===null?ct.memoizedState=xn=n:xn=xn.next=n,xn}function je(){if(Gt===null){var n=ct.alternate;n=n!==null?n.memoizedState:null}else n=Gt.next;var i=xn===null?ct.memoizedState:xn.next;if(i!==null)xn=i,Gt=n;else{if(n===null)throw ct.alternate===null?Error(o(467)):Error(o(310));Gt=n,n={memoizedState:Gt.memoizedState,baseState:Gt.baseState,baseQueue:Gt.baseQueue,queue:Gt.queue,next:null},xn===null?ct.memoizedState=xn=n:xn=xn.next=n}return xn}function Hi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function mn(n){var i=Rl;return Rl+=1,la===null&&(la=[]),n=ot(la,n,i),i=ct,(xn===null?i.memoizedState:xn.next)===null&&(i=i.alternate,Je.H=i===null||i.memoizedState===null?Ty:Ey),n}function Or(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return mn(n);if(n.$$typeof===Px)return;if(n.$$typeof===Vr)return ut(n)}throw Error(o(438,String(n)))}function Vi(n){var i=null,a=ct.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var u=ct.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(i={data:u.data.map(function(d){return d.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=Hi(),ct.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(n),u=0;u<n;u++)a[u]=Cx;return i.index++,a}function Vn(n,i){return typeof i=="function"?i(n):i}function vt(n){var i=je();return yn(i,Gt,n)}function yn(n,i,a){var u=n.queue;if(u===null)throw Error(o(311));u.lastRenderedReducer=a;var d=n.baseQueue,p=u.pending;if(p!==null){if(d!==null){var T=d.next;d.next=p.next,p.next=T}i.baseQueue=d=p,u.pending=null}if(p=n.baseState,d===null)n.memoizedState=p;else{i=d.next;var D=T=null,Q=null,fe=i,ge=!1;do{var Re=fe.lane&-536870913;if(Re!==fe.lane?(wt&Re)===Re:(qr&Re)===Re){var ke=fe.revertLane;if(ke===0)Q!==null&&(Q=Q.next={lane:0,revertLane:0,gesture:null,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null}),Re===so&&(ge=!0);else if((qr&ke)===ke){fe=fe.next,ke===so&&(ge=!0);continue}else Re={lane:0,revertLane:fe.revertLane,gesture:null,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null},Q===null?(D=Q=Re,T=p):Q=Q.next=Re,ct.lanes|=ke,Rs|=ke;Re=fe.action,uo&&a(p,Re),p=fe.hasEagerState?fe.eagerState:a(p,Re)}else ke={lane:Re,revertLane:fe.revertLane,gesture:fe.gesture,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null},Q===null?(D=Q=ke,T=p):Q=Q.next=ke,ct.lanes|=Re,Rs|=Re;fe=fe.next}while(fe!==null&&fe!==i);if(Q===null?T=p:Q.next=D,!Ii(p,n.memoizedState)&&(Mn=!0,ge&&(a=ia,a!==null)))throw a;n.memoizedState=p,n.baseState=T,n.baseQueue=Q,u.lastRenderedState=p}return d===null&&(u.lanes=0),[n.memoizedState,u.dispatch]}function ui(n){var i=je(),a=i.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=n;var u=a.dispatch,d=a.pending,p=i.memoizedState;if(d!==null){a.pending=null;var T=d=d.next;do p=n(p,T.action),T=T.next;while(T!==d);Ii(p,i.memoizedState)||(Mn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),a.lastRenderedState=p}return[p,u]}function jt(n,i,a){var u=ct,d=je(),p=mt;if(p){if(a===void 0)throw Error(o(407));a=a()}else a=i();var T=!Ii((Gt||d).memoizedState,a);if(T&&(d.memoizedState=a,Mn=!0),d=d.queue,eh(ul.bind(null,u,d,n),[n]),n=d.getSnapshot!==i||T||xn!==null&&(xn.memoizedState.tag&1)!==0,Oo(n?9:8,{destroy:void 0},Gi.bind(null,u,d,a,i),null),n){if(u.flags|=2048,$t===null)throw Error(o(349));p||(qr&127)!==0||bn(u,i,a)}return a}function bn(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=ct.updateQueue,i===null?(i=Hi(),ct.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Gi(n,i,a,u){i.value=a,i.getSnapshot=u,Zg(i)&&Jg(n)}function ul(n,i,a){return a(function(){Zg(i)&&Jg(n)})}function Zg(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Ii(n,a)}catch{return!0}}function Jg(n){var i=ir(n,2);i!==null&&yi(i,n,2)}function Kd(n){var i=Ft();if(typeof n=="function"){var a=n;if(n=a(),uo){z(!0);try{a()}finally{z(!1)}}}return i.memoizedState=i.baseState=n,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vn,lastRenderedState:n},i}function Kg(n,i,a,u){return n.baseState=a,yn(n,Gt,typeof u=="function"?u:Vn)}function ex(n,i,a,u,d){if(Bu(n))throw Error(o(485));if(n=i.action,n!==null){var p={payload:d,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(T){p.listeners.push(T)}};Je.T!==null?a(!0):p.isTransition=!1,u(p),a=i.pending,a===null?(p.next=i.pending=p,Qg(i,p)):(p.next=a.next,i.pending=a.next=p)}}function Qg(n,i){var a=i.action,u=i.payload,d=n.state;if(i.isTransition){var p=Je.T,T={};T.types=p!==null?p.types:null,Je.T=T;try{var D=a(d,u),Q=Je.S;Q!==null&&Q(T,D),e0(n,i,D)}catch(fe){Qd(n,i,fe)}finally{p!==null&&T.types!==null&&(p.types=T.types),Je.T=p}}else try{p=a(d,u),e0(n,i,p)}catch(fe){Qd(n,i,fe)}}function e0(n,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(u){t0(n,i,u)},function(u){return Qd(n,i,u)}):t0(n,i,a)}function t0(n,i,a){i.status="fulfilled",i.value=a,n0(i),n.state=a,i=n.pending,i!==null&&(a=i.next,a===i?n.pending=null:(a=a.next,i.next=a,Qg(n,a)))}function Qd(n,i,a){var u=n.pending;if(n.pending=null,u!==null){u=u.next;do i.status="rejected",i.reason=a,n0(i),i=i.next;while(i!==u)}n.action=null}function n0(n){n=n.listeners;for(var i=0;i<n.length;i++)(0,n[i])()}function i0(n,i){return i}function r0(n,i){if(mt){var a=$t.formState;if(a!==null){e:{var u=ct;if(mt){if(Qt){var d=U1(Qt,Yi);if(d){Qt=ly(d),u=z1(d);break e}}_t(u)}u=!1}u&&(i=a[0])}}a=Ft(),a.memoizedState=a.baseState=i,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:i0,lastRenderedState:i},a.queue=u,a=x0.bind(null,ct,u),u.dispatch=a,u=Kd(!1);var p=rh.bind(null,ct,!1,u.queue);return u=Ft(),d={state:i,dispatch:null,action:n,pending:null},u.queue=d,a=ex.bind(null,ct,d,p,a),d.dispatch=a,u.memoizedState=n,[i,a,!1]}function s0(n){var i=je();return o0(i,Gt,n)}function o0(n,i,a){if(i=yn(n,i,i0)[0],n=vt(Vn)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var u=mn(i)}catch(T){throw T===ra?gc:T}else u=i;i=je();var d=i.queue,p=d.dispatch;return a!==i.memoizedState&&(ct.flags|=2048,Oo(9,{destroy:void 0},tx.bind(null,d,a),null)),[u,p,n]}function tx(n,i){n.action=i}function a0(n){var i=je(),a=Gt;if(a!==null)return o0(i,a,n);je(),i=i.memoizedState,a=je();var u=a.queue.dispatch;return a.memoizedState=n,[i,u,!1]}function Oo(n,i,a,u){return n={tag:n,create:a,deps:u,inst:i,next:null},i=ct.updateQueue,i===null&&(i=Hi(),ct.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=n.next=n:(u=a.next,a.next=n,n.next=u,i.lastEffect=n),n}function l0(){return je().memoizedState}function zu(n,i,a,u){var d=Ft();ct.flags|=n,d.memoizedState=Oo(1|i,{destroy:void 0},a,u===void 0?null:u)}function Ou(n,i,a,u){var d=je();u=u===void 0?null:u;var p=d.memoizedState.inst;Gt!==null&&u!==null&&ft(u,Gt.memoizedState.deps)?d.memoizedState=Oo(i,p,a,u):(ct.flags|=n,d.memoizedState=Oo(1|i,p,a,u))}function u0(n,i){zu(8390656,8,n,i)}function eh(n,i){Ou(2048,8,n,i)}function nx(n){ct.flags|=4;var i=ct.updateQueue;if(i===null)i=Hi(),ct.updateQueue=i,i.events=[n];else{var a=i.events;a===null?i.events=[n]:a.push(n)}}function c0(n){var i=je().memoizedState;return nx({ref:i,nextImpl:n}),function(){if((xt&2)!==0)throw Error(o(440));return i.impl.apply(void 0,arguments)}}function f0(n,i){return Ou(4,2,n,i)}function d0(n,i){return Ou(4,4,n,i)}function h0(n,i){if(typeof i=="function"){n=n();var a=i(n);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function p0(n,i,a){a=a!=null?a.concat([n]):null,Ou(4,4,h0.bind(null,i,n),a)}function th(){}function m0(n,i){var a=je();i=i===void 0?null:i;var u=a.memoizedState;return i!==null&&ft(i,u[1])?u[0]:(a.memoizedState=[n,i],n)}function g0(n,i){var a=je();i=i===void 0?null:i;var u=a.memoizedState;if(i!==null&&ft(i,u[1]))return u[0];if(u=n(),uo){z(!0);try{n()}finally{z(!1)}}return a.memoizedState=[u,i],u}function nh(n,i,a){return a===void 0||(qr&1073741824)!==0&&(wt&261930)===0?n.memoizedState=i:(n.memoizedState=a,n=xv(),ct.lanes|=n,Rs|=n,a)}function v0(n,i,a,u){return Ii(a,i)?a:Es.current!==null?(n=nh(n,a,u),Ii(n,i)||(Mn=!0),n):(qr&106)===0||(qr&1073741824)!==0&&(wt&261930)===0?(Mn=!0,n.memoizedState=a):(n=xv(),ct.lanes|=n,Rs|=n,i)}function y0(n,i,a,u,d){var p=Gr();Ln(p!==0&&8>p?p:8);var T=Je.T,D={};D.types=T!==null?T.types:null,Je.T=D,rh(n,!1,i,a);try{var Q=d(),fe=Je.S;if(fe!==null&&fe(D,Q),Q!==null&&typeof Q=="object"&&typeof Q.then=="function"){var ge=ye(Q,u);cl(n,i,ge,Ai(n))}else cl(n,i,u,Ai(n))}catch(Re){cl(n,i,{then:function(){},status:"rejected",reason:Re},Ai())}finally{Ln(p),T!==null&&D.types!==null&&(T.types=D.types),Je.T=T}}function b0(n){var i=n.memoizedState;if(i!==null)return i;i={memoizedState:jo,baseState:jo,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vn,lastRenderedState:jo},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vn,lastRenderedState:a},next:null},n.memoizedState=i,n=n.alternate,n!==null&&(n.memoizedState=i),i}function ih(){return ut(Wr)}function _0(){return je().memoizedState}function S0(){return je().memoizedState}function ix(n){for(var i=n.return;i!==null;){switch(i.tag){case 24:case 3:var a=Ai();n=rr(a);var u=vi(i,n,a);u!==null&&(yi(u,i,a),Ks(u,i,a)),i={cache:qe()},n.payload=i;return}i=i.return}}function rx(n,i,a){var u=Ai();a={lane:u,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Bu(n)?M0(i,a):(a=nr(n,i,a,u),a!==null&&(yi(a,n,u),w0(a,i,u)))}function x0(n,i,a){var u=Ai();cl(n,i,a,u)}function cl(n,i,a,u){var d={lane:u,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Bu(n))M0(i,d);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var T=i.lastRenderedState,D=p(T,a);if(d.hasEagerState=!0,d.eagerState=D,Ii(D,T))return Zs(n,i,d,0),$t===null&&js(),!1}catch{}if(a=nr(n,i,d,u),a!==null)return yi(a,n,u),w0(a,i,u),!0}return!1}function rh(n,i,a,u){if(u={lane:2,revertLane:le(),gesture:null,action:u,hasEagerState:!1,eagerState:null,next:null},Bu(n)){if(i)throw Error(o(479))}else i=nr(n,a,u,2),i!==null&&yi(i,n,2)}function Bu(n){var i=n.alternate;return n===ct||i!==null&&i===ct}function M0(n,i){aa=bc=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function w0(n,i,a){if((a&4194048)!==0){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,F(n,a)}}function sh(n,i,a,u){i=n.memoizedState,a=a(u,i),a=a==null?i:jh({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}function T0(n,i,a,u,d,p,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,p,T):i.prototype&&i.prototype.isPureReactComponent?!pe(a,u)||!pe(d,p):!0}function E0(n,i,a,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,u),i.state!==n&&xp.enqueueReplaceState(i,i.state,null)}function eo(n,i){var a=i;if("ref"in i){a={};for(var u in i)u!=="ref"&&(a[u]=i[u])}if(n=n.defaultProps){a===i&&(a=jh({},a));for(var d in n)a[d]===void 0&&(a[d]=n[d])}return a}function Hu(n,i){try{var a=n.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(u){setTimeout(function(){throw u})}}function A0(n,i,a){try{var u=n.onCaughtError;u(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function oh(n,i,a){return a=rr(a),a.tag=3,a.payload={element:null},a.callback=function(){Hu(n,i)},a}function R0(n){return n=rr(n),n.tag=3,n}function C0(n,i,a,u){var d=a.type.getDerivedStateFromError;if(typeof d=="function"){var p=u.value;n.payload=function(){return d(p)},n.callback=function(){A0(i,a,u)}}var T=a.stateNode;T!==null&&typeof T.componentDidCatch=="function"&&(n.callback=function(){A0(i,a,u),typeof d!="function"&&(Cs===null?Cs=new Set([this]):Cs.add(this));var D=u.stack;this.componentDidCatch(u.value,{componentStack:D!==null?D:""})})}function sx(n,i,a,u,d){if(a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(i=a.alternate,i!==null&&V(i,a,d,!0),a=$n.current,a!==null){switch(a.tag){case 31:case 13:case 19:return ci===null?ec():a.alternate===null&&gn===0&&(gn=3),a.flags&=-257,a.flags|=65536,a.lanes=d,u===vc?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([u]):i.add(u),Wh(n,u,d)),!1;case 22:return a.flags|=65536,u===vc?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([u])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([u]):a.add(u)),Wh(n,u,d)),!1}throw Error(o(435,a.tag))}return Wh(n,u,d),ec(),!1}if(mt)return i=$n.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=d,u!==mp&&(n=Error(o(422),{cause:u}),Jn(Ve(n,a)))):(u!==mp&&(i=Error(o(423),{cause:u}),Jn(Ve(i,a))),n=n.current.alternate,n.flags|=65536,d&=-d,n.lanes|=d,u=Ve(u,a),d=oh(n.stateNode,u,d),zo(n,d),gn!==4&&(gn=2)),!1;var p=Error(o(520),{cause:u});if(p=Ve(p,a),Il===null?Il=[p]:Il.push(p),gn!==4&&(gn=2),i===null)return!0;u=Ve(u,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,n=d&-d,a.lanes|=n,n=oh(a.stateNode,u,n),zo(a,n),!1;case 1:if(i=a.type,p=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Cs===null||!Cs.has(p))))return a.flags|=65536,d&=-d,a.lanes|=d,d=R0(d),C0(d,n,a,u),zo(a,d),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}function Pn(n,i,a,u){i.child=n===null?wy(i,null,a,u):lo(i,n.child,a,u)}function P0(n,i,a,u,d){a=a.render;var p=i.ref;if("ref"in u){var T={};for(var D in u)D!=="ref"&&(T[D]=u[D])}else T=u;return Pt(i),u=Ue(n,i,a,T,p,d),D=Dt(),n!==null&&!Mn?(Sn(n,i,d),Br(n,i,d)):(mt&&D&&De(i),i.flags|=1,Pn(n,i,u,d),i.child)}function I0(n,i,a,u,d){if(n===null){var p=a.type;return typeof p=="function"&&!Xh(p)&&p.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=p,N0(n,i,p,u,d)):(n=nc(a.type,null,u,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(p=n.child,!hh(n,d)){var T=p.memoizedProps;if(a=a.compare,a=a!==null?a:pe,a(T,u)&&n.ref===i.ref)return Br(n,i,d)}return i.flags|=1,n=Hr(p,u),n.ref=i.ref,n.return=i,i.child=n}function N0(n,i,a,u,d){if(n!==null){var p=n.memoizedProps;if(pe(p,u)&&n.ref===i.ref)if(Mn=!1,i.pendingProps=u=p,hh(n,d))(n.flags&131072)!==0&&(Mn=!0);else return i.lanes=n.lanes,Br(n,i,d)}return ah(n,i,a,u,d)}function L0(n,i,a,u){var d=u.children,p=n!==null?n.memoizedState:null;if(n===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),u.mode==="hidden"){if((i.flags&128)!==0){if(p=p!==null?p.baseLanes|a:a,n!==null){for(u=i.child=n.child,d=0;u!==null;)d=d|u.lanes|u.childLanes,u=u.sibling;u=d&~p}else u=0,i.child=null;return k0(n,i,p,a,u)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},n!==null&&He(i,p!==null?p.cachePool:null),p!==null?ll(i,p):R(),Y(i);else return u=i.lanes=536870912,k0(n,i,p!==null?p.baseLanes|a:a,a,u)}else p!==null?(He(i,p.cachePool),ll(i,p),be(),i.memoizedState=null):(n!==null&&He(i,null),R(),be());return Pn(n,i,d,a),i.child}function fl(n,i){return n!==null&&n.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function k0(n,i,a,u,d){var p=_e();return p=p===null?null:{parent:br?an._currentValue:an._currentValue2,pool:p},i.memoizedState={baseLanes:a,cachePool:p},n!==null&&He(i,null),R(),Y(i),n!==null&&V(n,i,u,!0),i.childLanes=d,null}function Vu(n,i){return i=Gu({mode:i.mode,children:i.children},n.mode),i.ref=n.ref,n.child=i,i.return=n,i}function D0(n,i,a){return lo(i,n.child,null,a),n=Vu(i,i.pendingProps),n.flags|=2,Ce(i),i.memoizedState=null,n}function ox(n,i,a){var u=i.pendingProps,d=(i.flags&128)!==0;if(i.flags&=-129,n===null){if(mt){if(u.mode==="hidden")return n=Vu(i,u),i.lanes=536870912,n.memoizedState={baseLanes:0,cachePool:null},fl(null,n);if(q(i),(n=Qt)?(n=$1(n,Yi),n!==null&&(i.memoizedState={dehydrated:n,treeContext:xs!==null?{id:Sr,overflow:xr}:null,retryLane:536870912,hydrationErrors:null},a=zv(n),a.return=i,i.child=a,kn=i,Qt=null)):n=null,n===null)throw _t(i);return i.lanes=536870912,null}return Vu(i,u)}var p=n.memoizedState;if(p!==null){var T=p.dehydrated;if(q(i),d)if(i.flags&256)i.flags&=-257,i=D0(n,i,a);else if(i.memoizedState!==null)i.child=n.child,i.flags|=128,i=null;else throw Error(o(558));else if(Mn||V(n,i,a,!1),d=(a&n.childLanes)!==0,Mn||d){if(Es.current===null){if(u=$t,u!==null&&(T=B(u,a),T!==0&&T!==p.retryLane))throw p.retryLane=T,ir(n,T),yi(u,n,T),Mp;ec()}i=D0(n,i,a)}else n=p.treeContext,Xn&&(Qt=V1(T),kn=i,mt=!0,ws=null,Yi=!1,n!==null&&Ne(i,n)),i=Vu(i,u),i.flags|=134221824;return i}return n=Hr(n.child,{mode:u.mode,children:u.children}),n.ref=i.ref,i.child=n,n.return=i,n}function Bo(n,i){var a=i.ref;if(a===null)n!==null&&n.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(o(284));(n===null||n.ref!==a)&&(i.flags|=4194816)}}function ah(n,i,a,u,d){return Pt(i),a=Ue(n,i,a,u,void 0,d),u=Dt(),n!==null&&!Mn?(Sn(n,i,d),Br(n,i,d)):(mt&&u&&De(i),i.flags|=1,Pn(n,i,a,d),i.child)}function F0(n,i,a,u,d,p){return Pt(i),i.updateQueue=null,a=rn(i,u,a,d),pt(n),u=Dt(),n!==null&&!Mn?(Sn(n,i,p),Br(n,i,p)):(mt&&u&&De(i),i.flags|=1,Pn(n,i,a,p),i.child)}function U0(n,i,a,u,d){if(Pt(i),i.stateNode===null){var p=Ko,T=a.contextType;typeof T=="object"&&T!==null&&(p=ut(T)),p=new a(u,p),i.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=xp,i.stateNode=p,p._reactInternals=i,p=i.stateNode,p.props=u,p.state=i.memoizedState,p.refs={},ms(i),T=a.contextType,p.context=typeof T=="object"&&T!==null?ut(T):Ko,p.state=i.memoizedState,T=a.getDerivedStateFromProps,typeof T=="function"&&(sh(i,a,T,u),p.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(T=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),T!==p.state&&xp.enqueueReplaceState(p,p.state,null),Qs(i,u,p,d),gs(),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308),u=!0}else if(n===null){p=i.stateNode;var D=i.memoizedProps,Q=eo(a,D);p.props=Q;var fe=p.context,ge=a.contextType;T=Ko,typeof ge=="object"&&ge!==null&&(T=ut(ge));var Re=a.getDerivedStateFromProps;ge=typeof Re=="function"||typeof p.getSnapshotBeforeUpdate=="function",D=i.pendingProps!==D,ge||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(D||fe!==T)&&E0(i,p,u,T),Ts=!1;var ke=i.memoizedState;p.state=ke,Qs(i,u,p,d),gs(),fe=i.memoizedState,D||ke!==fe||Ts?(typeof Re=="function"&&(sh(i,a,Re,u),fe=i.memoizedState),(Q=Ts||T0(i,a,Q,u,ke,fe,T))?(ge||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(i.flags|=4194308)):(typeof p.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=fe),p.props=u,p.state=fe,p.context=T,u=Q):(typeof p.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{p=i.stateNode,Uo(n,i),T=i.memoizedProps,ge=eo(a,T),p.props=ge,Re=i.pendingProps,ke=p.context,fe=a.contextType,Q=Ko,typeof fe=="object"&&fe!==null&&(Q=ut(fe)),D=a.getDerivedStateFromProps,(fe=typeof D=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(T!==Re||ke!==Q)&&E0(i,p,u,Q),Ts=!1,ke=i.memoizedState,p.state=ke,Qs(i,u,p,d),gs();var yt=i.memoizedState;T!==Re||ke!==yt||Ts||n!==null&&n.dependencies!==null&&Hn(n.dependencies)?(typeof D=="function"&&(sh(i,a,D,u),yt=i.memoizedState),(ge=Ts||T0(i,a,ge,u,ke,yt,Q)||n!==null&&n.dependencies!==null&&Hn(n.dependencies))?(fe||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(u,yt,Q),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(u,yt,Q)),typeof p.componentDidUpdate=="function"&&(i.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof p.componentDidUpdate!="function"||T===n.memoizedProps&&ke===n.memoizedState||(i.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&ke===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=yt),p.props=u,p.state=yt,p.context=Q,u=ge):(typeof p.componentDidUpdate!="function"||T===n.memoizedProps&&ke===n.memoizedState||(i.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&ke===n.memoizedState||(i.flags|=1024),u=!1)}return p=u,Bo(n,i),u=(i.flags&128)!==0,p||u?(p=i.stateNode,a=u&&typeof a.getDerivedStateFromError!="function"?null:p.render(),i.flags|=1,n!==null&&u?(i.child=lo(i,n.child,null,d),i.child=lo(i,null,a,d)):Pn(n,i,a,d),i.memoizedState=p.state,n=i.child):n=Br(n,i,d),n}function z0(n,i,a,u){return dn(),i.flags|=256,Pn(n,i,a,u),i.child}function lh(n){return{baseLanes:n,cachePool:at()}}function uh(n,i,a){return n=n!==null?n.childLanes&~a:0,i&&(n|=ki),n}function O0(n,i,a){var u=i.pendingProps,d=!1,p=(i.flags&128)!==0,T;if((T=p)||(T=n!==null&&n.memoizedState===null?!1:(Yn.current&2)!==0),T&&(d=!0,i.flags&=-129),T=(i.flags&32)!==0,i.flags&=-33,n===null){if(mt){if(d?J(i):be(),(n=Qt)?(n=Y1(n,Yi),n!==null&&(i.memoizedState={dehydrated:n,treeContext:xs!==null?{id:Sr,overflow:xr}:null,retryLane:536870912,hydrationErrors:null},a=zv(n),a.return=i,i.child=a,kn=i,Qt=null)):n=null,n===null)throw _t(i);return ap(n)?i.lanes=32:i.lanes=536870912,null}return p=u.children,u=u.fallback,d?(be(),d=i.mode,p=Gu({mode:"hidden",children:p},d),u=to(u,d,a,null),p.return=i,u.return=i,p.sibling=u,i.child=p,u=i.child,u.memoizedState=lh(a),u.childLanes=uh(n,T,a),i.memoizedState=wp,fl(null,u)):(J(i),ch(i,p))}var D=n.memoizedState;if(D!==null){var Q=D.dehydrated;if(Q!==null)return ax(n,i,p,T,u,Q,D,a)}return d?(be(),d=u.fallback,p=i.mode,D=n.child,Q=D.sibling,u=Hr(D,{mode:"hidden",children:u.children}),u.subtreeFlags=D.subtreeFlags&1206910976,Q!==null?d=Hr(Q,d):(d=to(d,p,a,null),d.flags|=2),d.return=i,u.return=i,u.sibling=d,i.child=u,fl(null,u),u=i.child,d=n.child.memoizedState,d===null?d=lh(a):(p=d.cachePool,p!==null?(D=br?an._currentValue:an._currentValue2,p=p.parent!==D?{parent:D,pool:D}:p):p=at(),d={baseLanes:d.baseLanes|a,cachePool:p}),u.memoizedState=d,u.childLanes=uh(n,T,a),i.memoizedState=wp,fl(n.child,u)):(J(i),a=n.child,n=a.sibling,a=Hr(a,{mode:"visible",children:u.children}),a.return=i,a.sibling=null,n!==null&&(T=i.deletions,T===null?(i.deletions=[n],i.flags|=16):T.push(n)),i.child=a,i.memoizedState=null,a)}function ch(n,i){return i=Gu({mode:"visible",children:i},n.mode),i.return=n,n.child=i}function Gu(n,i){return n=t(22,n,null,i),n.lanes=0,n}function Wu(n,i,a){return lo(i,n.child,null,a),n=ch(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function ax(n,i,a,u,d,p,T,D){if(a)return i.flags&256?(J(i),i.flags&=-257,Wu(n,i,D)):i.memoizedState!==null?(be(),i.child=n.child,i.flags|=128,null):(be(),p=d.fallback,T=i.mode,d=Gu({mode:"visible",children:d.children},T),p=to(p,T,D,null),p.flags|=2,d.return=i,p.return=i,d.sibling=p,i.child=d,lo(i,n.child,null,D),d=i.child,d.memoizedState=lh(D),d.childLanes=uh(n,u,D),i.memoizedState=wp,fl(null,d));if(J(i),ap(p))return u=D1(p).digest,u!==""&&(d=Error(o(419)),d.stack="",d.digest=u,Jn({value:d,source:null,stack:null})),Wu(n,i,D);if(Mn||V(n,i,D,!1),u=(D&n.childLanes)!==0,Mn||u){if(Es.current!==null)return Wu(n,i,D);if(u=$t,u!==null&&(d=B(u,D),d!==0&&d!==T.retryLane))throw T.retryLane=d,ir(n,d),yi(u,n,d),Mp;return op(p)||ec(),Wu(n,i,D)}return op(p)?(i.flags|=192,i.child=n.child,null):(n=T.treeContext,Xn&&(Qt=G1(p),kn=i,mt=!0,ws=null,Yi=!1,n!==null&&Ne(i,n)),i=ch(i,d.children),i.flags|=134221824,i)}function B0(n,i,a){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),Bn(n.return,i,a)}function H0(n){for(var i=null;n!==null;){var a=n.alternate;a!==null&&Oe(a)===null&&(i=n),n=n.sibling}return i}function Xu(n,i,a,u,d,p){var T=n.memoizedState;T===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:d,treeForkCount:p}:(T.isBackwards=i,T.rendering=null,T.renderingStartTime=0,T.last=u,T.tail=a,T.tailMode=d,T.treeForkCount=p)}function fh(n){var i=n.child;for(n.child=null;i!==null;){var a=i.sibling;i.sibling=n.child,n.child=i,i=a}}function dh(n,i,a){var u=i.pendingProps,d=u.revealOrder,p=u.tail;u=u.children;var T=Yn.current;if(i.flags&128)return Se(i,T),null;var D=(T&2)!==0;if(D?(T=T&1|2,i.flags|=128):T&=1,Se(i,T),d==="backwards"&&n!==null?(fh(n),Pn(n,i,u,a),fh(n)):Pn(n,i,u,a),u=mt?Ml:0,!D&&n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&B0(n,a,i);else if(n.tag===19)B0(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}switch(d){case"backwards":a=H0(i.child),a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null,fh(i)),Xu(i,!0,d,null,p,u);break;case"unstable_legacy-backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Oe(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Xu(i,!0,a,null,p,u);break;case"together":Xu(i,!1,null,null,void 0,u);break;case"independent":i.memoizedState=null;break;default:a=H0(i.child),a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),Xu(i,!1,d,a,p,u)}return i.child}function V0(n,i,a){var u=i.pendingProps;return qt(i,i.type,u.value),Pn(n,i,u.children,a),i.child}function Br(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Rs|=i.lanes,(a&i.childLanes)===0)if(n!==null){if(V(n,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(n!==null&&i.child!==n.child)throw Error(o(153));if(i.child!==null){for(n=i.child,a=Hr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Hr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function hh(n,i){return(n.lanes&i)!==0?!0:(n=n.dependencies,!!(n!==null&&Hn(n)))}function lx(n,i,a){switch(i.tag){case 3:et(i,i.stateNode.containerInfo),qt(i,an,n.memoizedState.cache),dn();break;case 27:case 5:Ye(i);break;case 4:et(i,i.stateNode.containerInfo);break;case 10:qt(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,q(i),null;break;case 13:var u=i.memoizedState;if(u!==null){if(u.dehydrated!==null)return J(i),i.flags|=128,null;u=V(n,i,a,!1);var d=i.child.childLanes;return u||(a&d)!==0?O0(n,i,a):(J(i),n=Br(n,i,a),n!==null?n.sibling:null)}J(i);break;case 19:if(i.flags&128)return dh(n,i,a);if(d=(n.flags&128)!==0,u=(a&i.childLanes)!==0,u||(V(n,i,a,!1),u=(a&i.childLanes)!==0),d){if(u)return dh(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Se(i,Yn.current),u)break;return null;case 22:return i.lanes=0,L0(n,i,a,i.pendingProps);case 24:qt(i,an,n.memoizedState.cache)}return Br(n,i,a)}function G0(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps)Mn=!0;else{if(!hh(n,a)&&(i.flags&128)===0)return Mn=!1,lx(n,i,a);Mn=(n.flags&131072)!==0}else Mn=!1,mt&&(i.flags&1048576)!==0&&Pe(i,Ml,i.index);switch(i.lanes=0,i.tag){case 16:e:{var u=i.pendingProps;if(n=Ae(i.elementType),i.type=n,typeof n=="function")Xh(n)?(u=eo(n,u),i.tag=1,i=U0(null,i,n,u,a)):(i.tag=0,i=ah(null,i,n,u,a));else{if(n!=null){var d=n.$$typeof;if(d===Jh){i.tag=11,i=P0(null,i,n,u,a);break e}else if(d===ep){i.tag=14,i=I0(null,i,n,u,a);break e}else if(d===Vr){i.tag=10,i.type=n,i=V0(null,i,a);break e}}throw i=_(n)||n,Error(o(306,i,""))}}return i;case 0:return ah(n,i,i.type,i.pendingProps,a);case 1:return u=i.type,d=eo(u,i.pendingProps),U0(n,i,u,d,a);case 3:e:{if(et(i,i.stateNode.containerInfo),n===null)throw Error(o(387));var p=i.pendingProps;d=i.memoizedState,u=d.element,Uo(n,i),Qs(i,p,null,a);var T=i.memoizedState;if(p=T.cache,qt(i,an,p),p!==d.cache&&Kn(i,[an],a,!0),gs(),p=T.element,Xn&&d.isDehydrated)if(d={element:p,isDehydrated:!1,cache:T.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=z0(n,i,p,a);break e}else if(p!==u){u=Ve(Error(o(424)),i),Jn(u),i=z0(n,i,p,a);break e}else for(Xn&&(Qt=H1(i.stateNode.containerInfo),kn=i,mt=!0,ws=null,Yi=!0),a=wy(i,null,p,a),i.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling;else{if(dn(),p===u){i=Br(n,i,a);break e}Pn(n,i,p,a)}i=i.child}return i;case 26:if(Xi)return Bo(n,i),n===null?(a=fy(i.type,null,i.pendingProps,null))?i.memoizedState=a:mt||(i.stateNode=py(i.type,i.pendingProps,Ms.current,i)):i.memoizedState=fy(i.type,n.memoizedProps,i.pendingProps,n.memoizedState),null;case 27:if(on)return Ye(i),n===null&&on&&mt&&(u=i.stateNode=gy(i.type,i.pendingProps,Ms.current,qn.current,!1),kn=i,Yi=!0,Qt=W1(i.type,u,Qt)),Pn(n,i,i.pendingProps.children,a),Bo(n,i),n===null&&(i.flags|=4194304),i.child;case 5:return n===null&&mt&&(fM(i.type,i.pendingProps,qn.current),(d=u=Qt)&&(u=X1(u,i.type,i.pendingProps,Yi),u!==null?(i.stateNode=u,kn=i,Qt=B1(u),Yi=!1,d=!0):d=!1),d||_t(i)),Ye(i),d=i.type,p=i.pendingProps,T=n!==null?n.memoizedProps:null,u=p.children,sc(d,p)?u=null:T!==null&&sc(d,T)&&(i.flags|=32),i.memoizedState!==null&&(d=Ue(n,i,Vt,null,null,a),br?Wr._currentValue=d:Wr._currentValue2=d),Bo(n,i),Pn(n,i,u,a),i.child;case 6:return n===null&&mt&&(dM(i.pendingProps,qn.current),(n=a=Qt)&&(a=q1(a,i.pendingProps,Yi),a!==null?(i.stateNode=a,kn=i,Qt=null,n=!0):n=!1),n||_t(i)),null;case 13:return O0(n,i,a);case 4:return et(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=lo(i,null,u,a):Pn(n,i,u,a),i.child;case 11:return P0(n,i,i.type,i.pendingProps,a);case 7:return u=i.pendingProps,Bo(n,i),Pn(n,i,u,a),i.child;case 8:return Pn(n,i,i.pendingProps.children,a),i.child;case 12:return Pn(n,i,i.pendingProps.children,a),i.child;case 10:return V0(n,i,a);case 9:return d=i.type._context,u=i.pendingProps.children,Pt(i),d=ut(d),u=u(d),i.flags|=1,Pn(n,i,u,a),i.child;case 14:return I0(n,i,i.type,i.pendingProps,a);case 15:return N0(n,i,i.type,i.pendingProps,a);case 19:return dh(n,i,a);case 31:return ox(n,i,a);case 22:return L0(n,i,a,i.pendingProps);case 24:return Pt(i),u=ut(an),n===null?(d=_e(),d===null&&(d=$t,p=qe(),d.pooledCache=p,p.refCount++,p!==null&&(d.pooledCacheLanes|=a),d=p),i.memoizedState={parent:u,cache:d},ms(i),qt(i,an,d)):((n.lanes&a)!==0&&(Uo(n,i),Qs(i,null,null,a),gs()),d=n.memoizedState,p=i.memoizedState,d.parent!==u?(d={parent:u,cache:u},i.memoizedState=d,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=d),qt(i,an,u)):(u=p.cache,qt(i,an,u),u!==d.cache&&Kn(i,[an],a,!0))),Pn(n,i,i.pendingProps.children,a),i.child;case 30:return i.stateNode===null&&(i.stateNode={autoName:null,paired:null,clones:null,ref:null}),u=i.pendingProps,u.name!=null&&u.name!=="auto"?i.flags|=n===null?18882560:18874368:mt&&De(i),n!==null&&n.memoizedProps.name!==u.name?i.flags|=4194816:Bo(n,i),Pn(n,i,u.children,a),i.child;case 29:throw i.pendingProps}throw Error(o(156,i.tag))}function sr(n){n.flags|=4}function qu(n){_r&&(n.flags|=8)}function W0(n,i){if(n!==null&&n.child===i.child)return!1;if((i.flags&16)!==0)return!0;for(n=i.child;n!==null;){if((n.flags&8218)!==0||(n.subtreeFlags&8218)!==0)return!0;n=n.sibling}return!1}function ph(n,i,a,u){if(sn)for(a=i.child;a!==null;){if(a.tag===5||a.tag===6)ip(n,a.stateNode);else if(!(a.tag===4||on&&a.tag===27)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}else if(_r)for(var d=i.child;d!==null;){if(d.tag===5){var p=d.stateNode;a&&u&&(p=oy(p,d.type,d.memoizedProps)),ip(n,p)}else if(d.tag===6)p=d.stateNode,a&&u&&(p=ay(p,d.memoizedProps)),ip(n,p);else if(d.tag!==4){if(d.tag===22&&d.memoizedState!==null)p=d.child,p!==null&&(p.return=d),ph(n,d,!0,!0);else if(d.child!==null){d.child.return=d,d=d.child;continue}}if(d===i)break;for(;d.sibling===null;){if(d.return===null||d.return===i)return;d=d.return}d.sibling.return=d.return,d=d.sibling}}function X0(n,i,a,u){var d=!1;if(_r)for(var p=i.child;p!==null;){if(p.tag===5){var T=p.stateNode;a&&u&&(T=oy(T,p.type,p.memoizedProps)),ry(n,T)}else if(p.tag===6)T=p.stateNode,a&&u&&(T=ay(T,p.memoizedProps)),ry(n,T);else if(p.tag!==4){if(p.tag===22&&p.memoizedState!==null)d=p.child,d!==null&&(d.return=p),X0(n,p,!0,!0),d=!0;else if(p.child!==null){p.child.return=p,p=p.child;continue}}if(p===i)break;for(;p.sibling===null;){if(p.return===null||p.return===i)return d;p=p.return}p.sibling.return=p.return,p=p.sibling}return d}function q0(n,i){if(_r&&W0(n,i)){n=i.stateNode;var a=n.containerInfo,u=iy();X0(u,i,!1,!1),n.pendingChildren=u,sr(i),k1(a,u)}}function mh(n,i,a,u){if(sn)n.memoizedProps!==u&&sr(i);else if(_r){var d=n.stateNode,p=n.memoizedProps;if((n=W0(n,i))||p!==u){var T=qn.current;p=L1(d,a,p,u,!n,null),p===d?i.stateNode=d:(qu(i),jv(p,a,u,T)&&sr(i),i.stateNode=p,n&&ph(p,i,!1,!1))}else i.stateNode=d}}function gh(n,i,a,u,d){if((n.mode&32)!==0&&(a===null?qx(i,u):$x(i,a,u))){if(n.flags|=16777216,(d&335544128)===d||rp(i,u))if(Jv(n.stateNode,i,u))n.flags|=8192;else if(Av())n.flags|=8192;else throw ao=vc,bp}else n.flags&=-16777217}function $0(n,i){if(mM(i)){if(n.flags|=16777216,!my(i))if(Av())n.flags|=8192;else throw ao=vc,bp}else n.flags&=-16777217}function $u(n,i){i!==null&&(n.flags|=4),n.flags&16384&&(i=n.tag!==22?I():536870912,n.lanes|=i,ca|=i)}function dl(n,i){if(!mt)switch(n.tailMode){case"visible":break;case"collapsed":for(var a=n.tail,u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null;break;default:for(i=n.tail,a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null}}function Zt(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,u=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,u|=d.subtreeFlags&1206910976,u|=d.flags&1206910976,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=u,n.childLanes=a,i}function ux(n,i,a){var u=i.pendingProps;switch(Xe(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zt(i),null;case 1:return Zt(i),null;case 3:return a=i.stateNode,u=null,n!==null&&(u=n.memoizedState.cache),i.memoizedState.cache!==u&&(i.flags|=2048),hn(an),Wt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(n===null||n.child===null)&&(Yt(i)?sr(i):n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Xt())),q0(n,i),Zt(i),null;case 26:if(Xi){var d=i.type,p=i.memoizedState;return n===null?(sr(i),p!==null?(Zt(i),$0(i,p)):(Zt(i),gh(i,d,null,u,a))):p?p!==n.memoizedState?(sr(i),Zt(i),$0(i,p)):(Zt(i),i.flags&=-16777217):(p=n.memoizedProps,sn?p!==u&&sr(i):mh(n,i,d,u),Zt(i),gh(i,d,p,u,a)),null}case 27:if(on){if(Et(i),a=Ms.current,d=i.type,n!==null&&i.stateNode!=null)sn?n.memoizedProps!==u&&sr(i):mh(n,i,d,u);else{if(!u){if(i.stateNode===null)throw Error(o(166));return Zt(i),i.subtreeFlags&=-33554433,null}n=qn.current,Yt(i)?ht(i,n):(n=gy(d,u,a,n,!0),i.stateNode=n,sr(i))}return Zt(i),i.subtreeFlags&=-33554433,null}case 5:if(Et(i),d=i.type,n!==null&&i.stateNode!=null)mh(n,i,d,u);else{if(!u){if(i.stateNode===null)throw Error(o(166));return Zt(i),i.subtreeFlags&=-33554433,null}if(p=qn.current,Yt(i))ht(i,p),sM(i.stateNode,d,u,p)&&(i.flags|=64);else{var T=zx(d,u,Ms.current,p,i);qu(i),ph(T,i,!1,!1),i.stateNode=T,jv(T,d,u,p)&&sr(i)}}return Zt(i),i.subtreeFlags&=-33554433,gh(i,i.type,n===null?null:n.memoizedProps,i.pendingProps,a),null;case 6:if(n&&i.stateNode!=null)a=n.memoizedProps,sn?a!==u&&sr(i):_r&&(a!==u?(n=Ms.current,a=qn.current,qu(i),i.stateNode=Zv(u,n,a,i)):i.stateNode=n.stateNode);else{if(typeof u!="string"&&i.stateNode===null)throw Error(o(166));if(n=Ms.current,a=qn.current,Yt(i)){if(!Xn)throw Error(o(176));if(n=i.stateNode,a=i.memoizedProps,u=null,d=kn,d!==null)switch(d.tag){case 27:case 5:u=d.memoizedProps}Z1(n,a,i,u)||_t(i,!0)}else qu(i),i.stateNode=Zv(u,n,a,i)}return Zt(i),null;case 31:if(a=i.memoizedState,n===null||n.memoizedState!==null){if(u=Yt(i),a!==null){if(n===null){if(!u)throw Error(o(318));if(!Xn)throw Error(o(556));if(n=i.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(o(557));J1(n,i)}else dn(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Zt(i),n=!1}else a=Xt(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=a),n=!0;if(!n)return i.flags&256?(Ce(i),i):(Ce(i),null);if((i.flags&128)!==0)throw Error(o(558))}return Zt(i),null;case 13:if(u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(d=Yt(i),u!==null&&u.dehydrated!==null){if(n===null){if(!d)throw Error(o(318));if(!Xn)throw Error(o(344));if(d=i.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(o(317));K1(d,i)}else dn(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Zt(i),d=!1}else d=Xt(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=d),d=!0;if(!d)return i.flags&256?(Ce(i),i):(Ce(i),null)}return Ce(i),(i.flags&128)!==0?(i.lanes=a,i):(a=u!==null,n=n!==null&&n.memoizedState!==null,a&&(u=i.child,d=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(d=u.alternate.memoizedState.cachePool.pool),p=null,u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(p=u.memoizedState.cachePool.pool),p!==d&&(u.flags|=2048)),a!==n&&a&&(i.child.flags|=8192),$u(i,i.updateQueue),Zt(i),null);case 4:return Wt(),q0(n,i),n===null&&Vx(i.stateNode.containerInfo),i.flags|=67108864,Zt(i),null;case 10:return hn(i.type),Zt(i),null;case 19:if(Ie(i),u=i.memoizedState,u===null)return Zt(i),null;if(d=(i.flags&128)!==0,p=u.rendering,p===null)if(d)dl(u,!1);else{if(gn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(p=Oe(n),p!==null){for(i.flags|=128,dl(u,!1),n=p.updateQueue,i.updateQueue=n,$u(i,n),i.subtreeFlags=0,n=a,a=i.child;a!==null;)Uv(a,n),a=a.sibling;return Se(i,Yn.current&1|2),mt&&re(i,u.treeForkCount),i.child}n=n.sibling}u.tail!==null&&bi()>Nl&&(i.flags|=128,d=!0,dl(u,!1),i.lanes=4194304)}else{if(!d)if(n=Oe(p),n!==null){if(i.flags|=128,d=!0,n=n.updateQueue,i.updateQueue=n,$u(i,n),dl(u,!0),u.tail===null&&u.tailMode!=="collapsed"&&u.tailMode!=="visible"&&!p.alternate&&!mt)return Zt(i),null}else 2*bi()-u.renderingStartTime>Nl&&a!==536870912&&(i.flags|=128,d=!0,dl(u,!1),i.lanes=4194304);u.isBackwards?(p.sibling=i.child,i.child=p):(n=u.last,n!==null?n.sibling=p:i.child=p,u.last=p)}if(u.tail!==null){n=u.tail;e:{for(a=n;a!==null;){if(a.alternate!==null){a=!1;break e}a=a.sibling}a=!0}return u.rendering=n,u.tail=n.sibling,u.renderingStartTime=bi(),n.sibling=null,p=Yn.current,p=d?p&1|2:p&1,u.tailMode==="visible"||u.tailMode==="collapsed"||!a||mt?Se(i,p):(a=p,x($n,i),x(Yn,a),ci===null&&(ci=i)),mt&&re(i,u.treeForkCount),n}return Zt(i),null;case 22:case 23:return Ce(i),O(),u=i.memoizedState!==null,n!==null?n.memoizedState!==null!==u&&(i.flags|=8192):u&&(i.flags|=8192),u?(a&536870912)!==0&&(i.flags&128)===0&&(Zt(i),i.subtreeFlags&6&&(i.flags|=8192)):Zt(i),a=i.updateQueue,a!==null&&$u(i,a.retryQueue),a=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),u=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(u=i.memoizedState.cachePool.pool),u!==a&&(i.flags|=2048),n!==null&&v(oo),null;case 24:return a=null,n!==null&&(a=n.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),hn(an),Zt(i),null;case 25:return null;case 30:return i.flags|=33554432,Zt(i),null}throw Error(o(156,i.tag))}function cx(n,i){switch(Xe(i),i.tag){case 1:return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return hn(an),Wt(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 26:case 27:case 5:return Et(i),null;case 31:if(i.memoizedState!==null){if(Ce(i),i.alternate===null)throw Error(o(340));dn()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 13:if(Ce(i),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(o(340));dn()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ie(i),n=i.flags,n&65536?(i.flags=n&-65537|128,n=i.memoizedState,n!==null&&(n.rendering=null,n.tail=null),i.flags|=4,i):null;case 4:return Wt(),null;case 10:return hn(i.type),null;case 22:case 23:return Ce(i),O(),n!==null&&v(oo),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 24:return hn(an),null;case 25:return null;default:return null}}function Y0(n,i){switch(Xe(i),i.tag){case 3:hn(an),Wt();break;case 26:case 27:case 5:Et(i);break;case 4:Wt();break;case 31:i.memoizedState!==null&&Ce(i);break;case 13:Ce(i);break;case 19:Ie(i);break;case 10:hn(i.type);break;case 22:case 23:Ce(i),O(),n!==null&&v(oo);break;case 24:hn(an)}}function hl(n,i){try{var a=i.updateQueue,u=a!==null?a.lastEffect:null;if(u!==null){var d=u.next;a=d;do{if((a.tag&n)===n){u=void 0;var p=a.create,T=a.inst;u=p(),T.destroy=u}a=a.next}while(a!==d)}}catch(D){Nt(i,i.return,D)}}function vs(n,i,a){try{var u=i.updateQueue,d=u!==null?u.lastEffect:null;if(d!==null){var p=d.next;u=p;do{if((u.tag&n)===n){var T=u.inst,D=T.destroy;if(D!==void 0){T.destroy=void 0,d=i;var Q=a,fe=D;try{fe()}catch(ge){Nt(d,Q,ge)}}}u=u.next}while(u!==p)}}catch(ge){Nt(i,i.return,ge)}}function j0(n){var i=n.updateQueue;if(i!==null){var a=n.stateNode;try{Uu(i,a)}catch(u){Nt(n,n.return,u)}}}function Z0(n,i,a){a.props=eo(n.type,n.memoizedProps),a.state=n.memoizedState;try{a.componentWillUnmount()}catch(u){Nt(n,i,u)}}function gr(n,i){try{var a=n.ref;if(a!==null){switch(n.tag){case 26:case 27:case 5:var u=bl(n.stateNode);break;case 30:var d=n.stateNode,p=K(n.memoizedProps,d);(d.ref===null||d.ref.name!==p)&&(d.ref=ty(p)),u=d.ref;break;case 7:n.stateNode===null&&(n.stateNode=P1(n)),u=n.stateNode;break;default:u=n.stateNode}typeof a=="function"?n.refCleanup=a(u):a.current=u}}catch(T){Nt(n,i,T)}}function Gn(n,i){var a=n.ref,u=n.refCleanup;if(a!==null)if(typeof u=="function")try{u()}catch(d){Nt(n,i,d)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(d){Nt(n,i,d)}else a.current=null}function J0(){var n=ei;return ei=!1,n}function pl(n,i){if((n.tag===5||n.tag===27||n.tag===6)&&n.alternate===null&&i!==null)for(var a=0;a<i.length;a++)ny(n.stateNode,i[a])}function K0(n){for(var i=n.return;i!==null&&(yh(i)&&ny(n.stateNode,i.stateNode),!vh(i));)i=i.return}function ml(n){for(var i=n.return;i!==null&&(yh(i)&&N1(n.stateNode,i.stateNode),!vh(i));)i=i.return}function vh(n){return n.tag===5||n.tag===3||(on?n.tag===27:!1)}function yh(n){return n&&n.tag===7&&n.stateNode!==null}function bh(n){var i=n.type,a=n.memoizedProps,u=n.stateNode;try{u1(u,i,a,n)}catch(d){Nt(n,n.return,d)}}function _h(n,i,a){try{c1(n.stateNode,n.type,a,i,n)}catch(u){Nt(n,n.return,u)}}function Q0(n){return n.tag===5||n.tag===3||(Xi?n.tag===26:!1)||(on?n.tag===27&&Zo(n.type):!1)||n.tag===4}function Sh(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Q0(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(on&&n.tag===27&&Zo(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function xh(n,i,a,u){var d=n.tag;if(d===5||d===6)d=n.stateNode,i?d1(a,d,i):a1(a,d),pl(n,u),ei=!0;else if(d!==4&&(on&&d===27&&(pl(n,u),u=null,Zo(n.type)&&(a=n.stateNode,i=null)),n=n.child,n!==null))for(xh(n,i,a,u),n=n.sibling;n!==null;)xh(n,i,a,u),n=n.sibling}function Yu(n,i,a,u){var d=n.tag;if(d===5||d===6)d=n.stateNode,i?f1(a,d,i):o1(a,d),pl(n,u),ei=!0;else if(d!==4&&(on&&d===27&&(pl(n,u),u=null,Zo(n.type)&&(a=n.stateNode)),n=n.child,n!==null))for(Yu(n,i,a,u),n=n.sibling;n!==null;)Yu(n,i,a,u),n=n.sibling}function Mh(n,i){if(n.tag===5||on&&n.tag===27)pl(n,i);else if(n.tag!==4&&(n=n.child,n!==null))for(Mh(n,i),n=n.sibling;n!==null;)Mh(n,i),n=n.sibling}function ev(n,i,a){n=n.containerInfo;try{sy(n,a)}catch(u){Nt(i,i.return,u)}}function tv(n){var i=n.stateNode,a=n.memoizedProps;try{vM(n.type,a,i,n)}catch(u){Nt(n,n.return,u)}}function nv(n){(n.tag===30||(n.subtreeFlags&33554432)!==0)&&(xc=!0)}function iv(){var n=Mr;return Mr=null,n}function Ho(n,i,a,u,d){return _i=0,rv(n.child,i,a,u,d)}function rv(n,i,a,u,d){if(!sn)return!1;for(var p=!1;n!==null;){if(n.tag===5){var T=n.stateNode;if(u!==null){var D=sp(T);u.push(D),oc(D)&&(p=!0)}else p||oc(sp(T))&&(p=!0);xc=!0,ey(T,_i===0?i:i+"_"+_i,a),_i++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&d||rv(n.child,i,a,u,d)&&(p=!0));n=n.sibling}return p}function vr(n,i){if(sn)for(;n!==null;)n.tag===5?b1(n.stateNode,n.memoizedProps):(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&i||vr(n.child,i)),n=n.sibling}function ju(n){if((n.subtreeFlags&18874368)!==0)for(n=n.child;n!==null;){if((n.tag!==22||n.memoizedState===null)&&(ju(n),n.tag===30&&(n.flags&18874368)!==0&&n.stateNode.paired)){var i=n.memoizedProps;if(i.name==null||i.name==="auto")throw Error(o(544));var a=i.name;i=ee(i.default,i.share),i!=="none"&&(Ho(n,a,i,null,!1)||vr(n.child,!1))}n=n.sibling}}function wh(n,i){if(n.tag===30){var a=n.stateNode,u=n.memoizedProps,d=K(u,a),p=ee(u.default,a.paired?u.share:u.enter);p!=="none"?Ho(n,d,p,null,!1)?(ju(n),a.paired||i||Wo(n,u.onEnter)):vr(n.child,!1):ju(n)}else if((n.subtreeFlags&33554432)!==0)for(n=n.child;n!==null;)wh(n,i),n=n.sibling;else ju(n)}function Th(n){if(Ni!==null&&Ni.size!==0){var i=Ni;if((n.subtreeFlags&18874368)!==0)for(n=n.child;n!==null;){if(n.tag!==22||n.memoizedState===null){if(n.tag===30&&(n.flags&18874368)!==0){var a=n.memoizedProps,u=a.name;if(u!=null&&u!=="auto"){var d=i.get(u);if(d!==void 0){var p=ee(a.default,a.share);if(p!=="none"&&(Ho(n,u,p,null,!1)?(p=n.stateNode,d.paired=p,p.paired=d,Wo(n,a.onShare)):vr(n.child,!1)),i.delete(u),i.size===0)break}}}Th(n)}n=n.sibling}}}function Eh(n){if(n.tag===30){var i=n.memoizedProps,a=K(i,n.stateNode),u=Ni!==null?Ni.get(a):void 0,d=ee(i.default,u!==void 0?i.share:i.exit);d!=="none"&&(Ho(n,a,d,null,!1)?u!==void 0?(d=n.stateNode,u.paired=d,d.paired=u,Ni.delete(a),Wo(n,i.onShare)):Wo(n,i.onExit):vr(n.child,!1)),Ni!==null&&Th(n)}else if((n.subtreeFlags&33554432)!==0)for(n=n.child;n!==null;)Eh(n),n=n.sibling;else Ni!==null&&Th(n)}function sv(n){for(n=n.child;n!==null;){if(n.tag===30){var i=n.memoizedProps,a=K(i,n.stateNode);i=ee(i.default,i.update),n.flags&=-5,i!=="none"&&Ho(n,a,i,n.memoizedState=[],!1)}else(n.subtreeFlags&33554432)!==0&&sv(n);n=n.sibling}}function Ah(n){if((n.subtreeFlags&18874368)!==0)for(n=n.child;n!==null;){if(n.tag!==22||n.memoizedState===null){if(n.tag===30&&(n.flags&18874368)!==0){var i=n.stateNode;i.paired!==null&&(i.paired=null,vr(n.child,!1))}Ah(n)}n=n.sibling}}function Zu(n){if(n.tag===30)n.stateNode.paired=null,vr(n.child,!1),Ah(n);else if((n.subtreeFlags&33554432)!==0)for(n=n.child;n!==null;)Zu(n),n=n.sibling;else Ah(n)}function ov(n){for(n=n.child;n!==null;)n.tag===30?vr(n.child,!1):(n.subtreeFlags&33554432)!==0&&ov(n),n=n.sibling}function Rh(n,i,a,u,d,p,T){if(!sn)return!1;for(var D=!1;i!==null;){if(i.tag===5){var Q=i.stateNode;if(p!==null&&_i<p.length){var fe=p[_i],ge=sp(Q);(oc(fe)||oc(ge))&&(D=!0),(n.flags&4)===0&&w1(fe,ge)&&(n.flags|=4),T1(fe,ge)&&(n.flags|=32)}else n.flags|=32;(n.flags&4)!==0&&ey(Q,_i===0?a:a+"_"+_i,d),D&&(n.flags&4)!==0||(Mr===null&&(Mr=[]),Mr.push(Q,_i===0?u:u+"_"+_i,i.memoizedProps)),_i++}else(i.tag!==22||i.memoizedState===null)&&(i.tag===30&&T?n.flags|=i.flags&32:Rh(n,i.child,a,u,d,p,T)&&(D=!0));i=i.sibling}return D}function av(n,i){for(n=n.child;n!==null;){if(n.tag===30){var a=n.memoizedProps,u=n.stateNode,d=K(a,u),p=ee(a.default,a.update);if(i){u=u.clones;var T=u===null?null:u.map(M1)}else T=n.memoizedState,n.memoizedState=null;u=n;var D=n.child;_i=0,d=Rh(u,D,d,d,p,T,!1),(n.flags&4)!==0&&d&&(i||Wo(n,a.onUpdate))}else(n.subtreeFlags&33554432)!==0&&av(n,i);n=n.sibling}}function fx(n,i,a){for(Fx(n.containerInfo),n=(a&335544064)===a,Fn=i,i=n?9270:1024;Fn!==null;){if(a=Fn,n){var u=a.deletions;if(u!==null)for(var d=0;d<u.length;d++)n&&Eh(u[d])}if(a.alternate===null&&(a.flags&2)!==0)n&&nv(a),Ju(n);else{if(a.tag===22){if(u=a.alternate,a.memoizedState!==null){u!==null&&u.memoizedState===null&&n&&Eh(u),Ju(n);continue}else if(u!==null&&u.memoizedState!==null){n&&nv(a),Ju(n);continue}}u=a.child,(a.subtreeFlags&i)!==0&&u!==null?(u.return=a,Fn=u):(n&&sv(a),Ju(n))}}Ni=null}function Ju(n){for(;Fn!==null;){var i=Fn,a=n,u=i.alternate,d=i.flags;switch(i.tag){case 0:case 11:case 15:break;case 1:if((d&1024)!==0&&u!==null){a=void 0,d=u.memoizedProps,u=u.memoizedState;var p=i.stateNode;try{var T=eo(i.type,d);a=p.getSnapshotBeforeUpdate(T,u),p.__reactInternalSnapshotBeforeUpdate=a}catch(D){Nt(i,i.return,D)}}break;case 3:(d&1024)!==0&&sn&&C1(i.stateNode.containerInfo);break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&u!==null&&(a=K(u.memoizedProps,u.stateNode),d=i.memoizedProps,d=ee(d.default,d.update),d!=="none"&&Ho(u,a,d,u.memoizedState=[],!0));break;default:if((d&1024)!==0)throw Error(o(163))}if(u=i.sibling,u!==null){u.return=i.return,Fn=u;break}Fn=i.return}}function lv(n,i,a){var u=a.flags;switch(a.tag){case 0:case 11:case 15:yr(n,a),u&4&&hl(5,a);break;case 1:if(yr(n,a),u&4)if(n=a.stateNode,i===null)try{n.componentDidMount()}catch(T){Nt(a,a.return,T)}else{var d=eo(a.type,i.memoizedProps);i=i.memoizedState;try{n.componentDidUpdate(d,i,n.__reactInternalSnapshotBeforeUpdate)}catch(T){Nt(a,a.return,T)}}u&64&&j0(a),u&512&&gr(a,a.return);break;case 3:if(yr(n,a),u&64&&(u=a.updateQueue,u!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=bl(a.child.stateNode);break;case 1:n=a.child.stateNode}try{Uu(u,n)}catch(T){Nt(a,a.return,T)}}break;case 27:on&&i===null&&u&4&&tv(a);case 26:case 5:if(yr(n,a),i===null){if(u&4)bh(a);else if(u&64){n=a.type,i=a.memoizedProps,d=a.stateNode;try{tM(d,n,i,a)}catch(T){Nt(a,a.return,T)}}}u&512&&gr(a,a.return);break;case 12:yr(n,a);break;case 31:yr(n,a),u&4&&fv(n,a);break;case 13:yr(n,a),u&4&&dv(n,a),u&64&&(u=a.memoizedState,u!==null&&(u=u.dehydrated,u!==null&&(a=Sx.bind(null,a),F1(u,a))));break;case 22:if(u=a.memoizedState!==null||Dn,!u){var p=i!==null&&i.memoizedState!==null||Ut;i=Dn,d=Ut,Dn=u,(Ut=p)&&!d?(u=on?2:0,(a.subtreeFlags&8772)!==0&&(u|=1),or(n,a,u)):yr(n,a),Dn=i,Ut=d}break;case 30:yr(n,a),u&512&&gr(a,a.return);break;case 7:u&512&&gr(a,a.return);default:yr(n,a)}}function Ch(n,i){if(sn)for(n=n.child;n!==null;)uv(n,i),n=n.sibling}function uv(n,i){if(sn)switch(n.tag){case 5:case 26:try{var a=n.stateNode;i?m1(a):v1(n.stateNode,n.memoizedProps)}catch(p){Nt(n,n.return,p)}Ph(n,i);break;case 6:try{var u=n.stateNode;i?g1(u):y1(u,n.memoizedProps),ei=!0}catch(p){Nt(n,n.return,p)}break;case 18:try{var d=n.stateNode;i?uM(d):cM(n.stateNode)}catch(p){Nt(n,n.return,p)}break;case 22:case 23:n.memoizedState===null&&Ch(n,i);break;default:Ch(n,i)}}function Ph(n,i){if(sn&&n.subtreeFlags&67108864)for(n=n.child;n!==null;){var a=n,u=i;if(sn)switch(a.tag){case 4:uv(a,u);break;case 22:a.memoizedState===null&&Ph(a,u);break;default:Ph(a,u)}n=n.sibling}}function cv(n){var i=n.alternate;i!==null&&(n.alternate=null,cv(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&Xx(i)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Ei(n,i,a){for(a=a.child;a!==null;)Ih(n,i,a),a=a.sibling}function Ih(n,i,a){if(Pi&&typeof Pi.onCommitFiberUnmount=="function")try{Pi.onCommitFiberUnmount(xl,a)}catch{}switch(a.tag){case 26:if(Xi){Ut||Gn(a,i),Ei(n,i,a),a.memoizedState?hy(a.memoizedState):a.stateNode&&(Ut||up(a.stateNode));break}case 27:if(on){Ut||Gn(a,i),ml(a);var u=wn,d=Si;Zo(a.type)&&(wn=a.stateNode,Si=!1),Ei(n,i,a),vy(a.stateNode,a.type,a.memoizedProps),wn=u,Si=d;break}case 5:Ut||Gn(a,i),ml(a);case 6:if(a.tag===6&&ml(a),sn){if(u=wn,d=Si,wn=null,Ei(n,i,a),wn=u,Si=d,wn!==null)if(Si)try{p1(wn,a.stateNode),ei=!0}catch(p){Nt(a,i,p)}else try{h1(wn,a.stateNode),ei=!0}catch(p){Nt(a,i,p)}}else Ei(n,i,a);break;case 18:sn&&wn!==null&&(Si?lM(wn,a.stateNode):aM(wn,a.stateNode));break;case 4:sn?(u=wn,d=Si,wn=a.stateNode.containerInfo,Si=!0,Ei(n,i,a),wn=u,Si=d):(_r&&ev(a.stateNode,a,iy()),Ei(n,i,a));break;case 0:case 11:case 14:case 15:vs(2,a,i),Ut||vs(4,a,i),Ei(n,i,a);break;case 1:Ut||(Gn(a,i),u=a.stateNode,typeof u.componentWillUnmount=="function"&&Z0(a,i,u)),Ei(n,i,a);break;case 21:Ei(n,i,a);break;case 22:Ut=(u=Ut)||a.memoizedState!==null,Ei(n,i,a),Ut=u;break;case 30:Gn(a,i),Ei(n,i,a);break;case 7:Ut||Gn(a,i),Ei(n,i,a);break;default:Ei(n,i,a)}}function fv(n,i){if(Xn&&i.memoizedState===null&&(n=i.alternate,n!==null&&(n=n.memoizedState,n!==null))){n=n.dehydrated;try{iM(n)}catch(a){Nt(i,i.return,a)}}}function dv(n,i){if(Xn&&i.memoizedState===null&&(n=i.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{rM(n)}catch(a){Nt(i,i.return,a)}}function dx(n){switch(n.tag){case 31:case 13:case 19:var i=n.stateNode;return i===null&&(i=n.stateNode=new Ay),i;case 22:return n=n.stateNode,i=n._retryCache,i===null&&(i=n._retryCache=new Ay),i;default:throw Error(o(435,n.tag))}}function Ku(n,i){var a=dx(n);i.forEach(function(u){if(!a.has(u)){a.add(u);var d=xx.bind(null,n,u);u.then(d,d)}})}function Wn(n,i,a){var u=i.deletions;if(u!==null)for(var d=0;d<u.length;d++){var p=u[d],T=n,D=i;if(sn){var Q=D;e:for(;Q!==null;){switch(Q.tag){case 27:if(on){if(Zo(Q.type)){wn=Q.stateNode,Si=!1;break e}break}case 5:wn=Q.stateNode,Si=!1;break e;case 3:case 4:wn=Q.stateNode.containerInfo,Si=!0;break e}Q=Q.return}if(wn===null)throw Error(o(160));Ih(T,D,p),wn=null,Si=!1}else Ih(T,D,p);T=p.alternate,T!==null&&(T.return=null),p.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)hv(i,n,a),i=i.sibling}function hv(n,i,a){var u=n.alternate,d=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(d&4&&(u=n.updateQueue,u=u!==null?u.events:null,u!==null))for(var p=0;p<u.length;p++){var T=u[p];T.ref.impl=T.nextImpl}Wn(i,n,a),Qn(n),d&4&&(vs(3,n,n.return),hl(3,n),vs(5,n,n.return));break;case 1:Wn(i,n,a),Qn(n),d&512&&(Ut||u===null||Gn(u,u.return)),d&64&&Dn&&(n=n.updateQueue,n!==null&&(i=n.callbacks,i!==null&&(d=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=d===null?i:d.concat(i))));break;case 26:if(Xi){p=ar,Wn(i,n,a),Qn(n),d&512&&(Ut||u===null||Gn(u,u.return)),d&4&&(a=u!==null?u.memoizedState:null,d=n.memoizedState,u===null?d===null?n.stateNode===null?n.stateNode=Dn?py(n.type,n.memoizedProps,i.containerInfo,n):hM(p,n.type,n.memoizedProps,n):Dn||lp(p,n.type,n.stateNode):n.stateNode=dy(p,d,n.memoizedProps):a!==d?(a===null?(i=u.stateNode,i===null||Ut||up(i)):hy(a),d===null?Dn||lp(p,n.type,n.stateNode):dy(p,d,n.memoizedProps)):d===null&&n.stateNode!==null&&_h(n,n.memoizedProps,u.memoizedProps));break}case 27:if(on){Wn(i,n,a),Qn(n),d&512&&(Ut||u===null||Gn(u,u.return)),u!==null&&d&4&&_h(n,n.memoizedProps,u.memoizedProps);break}case 5:if(p=wr,wr=!1,Wn(i,n,a),wr=p,Qn(n),d&512&&(Ut||u===null||Gn(u,u.return)),sn){if(n.flags&32){i=n.stateNode;try{Qv(i),ei=!0}catch(ge){Nt(n,n.return,ge)}}d&4&&n.stateNode!=null&&(i=n.memoizedProps,_h(n,i,u!==null?u.memoizedProps:i)),d&1024&&(Tp=!0)}else _r&&n.alternate!==null&&(n.alternate.stateNode=n.stateNode);break;case 6:if(Wn(i,n,a),Qn(n),d&4&&sn){if(n.stateNode===null)throw Error(o(162));i=n.memoizedProps,d=u!==null?u.memoizedProps:i,a=n.stateNode;try{l1(a,d,i),ei=!0}catch(ge){Nt(n,n.return,ge)}}break;case 3:if(ei=!1,Xi?(pM(),p=ar,ar=ac(i.containerInfo),Wn(i,n,a),ar=p):Wn(i,n,a),Qn(n),d&4){if(sn&&Xn&&u!==null&&u.memoizedState.isDehydrated)try{nM(i.containerInfo)}catch(ge){Nt(n,n.return,ge)}if(_r){d=i.containerInfo,i=i.pendingChildren;try{sy(d,i),ei=!0}catch(ge){Nt(n,n.return,ge)}}}Tp&&(Tp=!1,pv(n)),ei=!1;break;case 4:u=wr,wr=Dn,p=J0(),Xi?(T=ar,ar=ac(n.stateNode.containerInfo),Wn(i,n,a),Qn(n),ar=T):(Wn(i,n,a),Qn(n)),ei&&Cl&&(Mc=!0),ei=p,wr=u,d&4&&_r&&ev(n.stateNode,n,n.stateNode.pendingChildren);break;case 12:Wn(i,n,a),Qn(n);break;case 31:Wn(i,n,a),Qn(n),d&4&&(i=n.updateQueue,i!==null&&(n.updateQueue=null,Ku(n,i)));break;case 13:Wn(i,n,a),Qn(n),n.child.flags&8192&&n.memoizedState!==null!=(u!==null&&u.memoizedState!==null)&&(Cc=bi()),d&4&&(i=n.updateQueue,i!==null&&(n.updateQueue=null,Ku(n,i)));break;case 22:p=n.memoizedState!==null,T=u!==null&&u.memoizedState!==null;var D=Dn,Q=Ut,fe=wr;Dn=D||p,wr=fe||p,Ut=Q||T,Wn(i,n,a),Ut=Q,wr=fe,Dn=D,Qn(n),d&8192&&(i=n.stateNode,i._visibility=p?i._visibility&-2:i._visibility|1,!p||u===null||T||Dn||Ut||(i=on?2:0,a=T||Ut,u=Dn,T=Ut,Dn=p||Dn,Ut=a,ys(n,i),Dn=u,Ut=T),sn&&(p||!wr)&&Ch(n,p)),d&4&&(i=n.updateQueue,i!==null&&(d=i.retryQueue,d!==null&&(i.retryQueue=null,Ku(n,d))));break;case 19:Wn(i,n,a),Qn(n),d&4&&(i=n.updateQueue,i!==null&&(n.updateQueue=null,Ku(n,i)));break;case 30:d&512&&(Ut||u===null||Gn(u,u.return)),d=J0(),p=Cl,T=(a&335544064)===a,D=n.memoizedProps,Cl=T&&ee(D.default,D.update)!=="none",Wn(i,n,a),Qn(n),T&&u!==null&&ei&&(n.flags|=4),Cl=p,ei=d;break;case 21:break;case 7:d&512&&(Ut||u===null||Gn(u,u.return)),u&&u.stateNode!==null&&I1(n,u.stateNode);default:Wn(i,n,a),Qn(n)}}function Qn(n){var i=n.flags;if(i&2){try{for(var a,u=n.return;u!==null;){if(Q0(u)){a=u;break}u=u.return}u=null;for(var d=n.return;d!==null;){if(yh(d)){var p=d.stateNode;u===null?u=[p]:u.push(p)}if(vh(d))break;d=d.return}var T=u;if(sn){if(a==null)throw Error(o(160));switch(a.tag){case 27:if(on){var D=a.stateNode,Q=Sh(n);Yu(n,Q,D,T);break}case 5:var fe=a.stateNode;a.flags&32&&(Qv(fe),a.flags&=-33);var ge=Sh(n);Yu(n,ge,fe,T);break;case 3:case 4:var Re=a.stateNode.containerInfo,ke=Sh(n);xh(n,ke,Re,T);break;default:throw Error(o(161))}}else Mh(n,T)}catch(yt){Nt(n,n.return,yt)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function pv(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var i=n;pv(i),i.tag===5&&i.flags&1024&&Jx(i.stateNode),n=n.sibling}}function Vo(n,i){if(i.subtreeFlags&9270)for(i=i.child;i!==null;)mv(i,n),i=i.sibling;else av(i,!1)}function mv(n,i){var a=n.alternate;if(a===null)wh(n,!1);else switch(n.tag){case 3:if(Ep=Tr=!1,iv(),Vo(i,n),!Tr&&!Mc){if(n=Mr,n!==null)for(var u=0;u<n.length;u+=3)_1(n[u],n[u+1],n[u+2]);S1(i.containerInfo),Ep=!0}Mr=null;break;case 5:Vo(i,n);break;case 4:u=Tr,Tr=!1,Vo(i,n),Tr&&(Mc=!0),Tr=u;break;case 22:n.memoizedState===null&&(a.memoizedState!==null?wh(n,!1):Vo(i,n));break;case 30:u=Tr;var d=iv();Tr=!1,Vo(i,n),Tr&&(n.flags|=4);var p=n.memoizedProps,T=n.stateNode;i=K(p,T),T=K(a.memoizedProps,T);var D=ee(p.default,p.update);D==="none"?a=!1:(p=a.memoizedState,a.memoizedState=null,a=n.child,_i=0,a=Rh(n,a,i,T,D,p,!0),_i!==(p===null?0:p.length)&&(n.flags|=32)),(n.flags&4)!==0&&a?(Wo(n,n.memoizedProps.onUpdate),Mr=d):d!==null&&(d.push.apply(d,Mr),Mr=d),Tr=(n.flags&32)!==0?!0:u;break;default:Vo(i,n)}}function yr(n,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)lv(n,i.alternate,i),i=i.sibling}function ys(n,i){for(n=n.child;n!==null;){var a=n,u=i;switch(a.tag){case 0:case 11:case 14:case 15:vs(4,a,a.return),ys(a,u);break;case 1:Gn(a,a.return);var d=a.stateNode;typeof d.componentWillUnmount=="function"&&Z0(a,a.return,d),ys(a,u);break;case 27:on&&(u&2)!==0&&vy(a.stateNode,a.type,a.memoizedProps);case 5:Gn(a,a.return),a.tag!==5&&a.tag!==27||ml(a),ys(a,u);break;case 6:ml(a);break;case 26:Gn(a,a.return),Xi&&(d=a.stateNode,a.memoizedState!==null||d===null||Ut||up(d)),ys(a,u);break;case 22:a.memoizedState===null&&ys(a,u);break;case 30:Gn(a,a.return),ys(a,u);break;case 7:Gn(a,a.return);default:ys(a,u)}n=n.sibling}}function or(n,i,a){for(a=(i.subtreeFlags&8772)!==0?a:a&-2,i=i.child;i!==null;){var u=i.alternate,d=n,p=i,T=p.flags,D=(a&1)!==0;switch(p.tag){case 0:case 11:case 15:or(d,p,a),hl(4,p);break;case 1:if(or(d,p,a),u=p,d=u.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(ge){Nt(u,u.return,ge)}if(u=p,d=u.updateQueue,d!==null){var Q=u.stateNode;try{var fe=d.shared.hiddenCallbacks;if(fe!==null)for(d.shared.hiddenCallbacks=null,d=0;d<fe.length;d++)Fu(fe[d],Q)}catch(ge){Nt(u,u.return,ge)}}D&&T&64&&j0(p),gr(p,p.return);break;case 27:on&&(a&2)!==0&&tv(p);case 5:p.tag!==5&&p.tag!==27||K0(p),or(d,p,a),D&&u===null&&T&4&&bh(p),gr(p,p.return);break;case 6:K0(p);break;case 26:Xi&&(Q=p.stateNode,p.memoizedState!==null||Q===null||Dn||lp(ac(Q.ownerDocument),p.type,Q)),or(d,p,a),D&&u===null&&T&4&&bh(p),gr(p,p.return);break;case 12:or(d,p,a);break;case 31:or(d,p,a),D&&T&4&&fv(d,p);break;case 13:or(d,p,a),D&&T&4&&dv(d,p);break;case 22:p.memoizedState===null&&or(d,p,a),gr(p,p.return);break;case 30:or(d,p,a),gr(p,p.return);break;case 7:gr(p,p.return);default:or(d,p,a)}i=i.sibling}}function Nh(n,i){var a=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),n=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(n=i.memoizedState.cachePool.pool),n!==a&&(n!=null&&n.refCount++,a!=null&&Ze(a))}function Lh(n,i){n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&Ze(n))}function Wi(n,i,a,u){var d=(a&335544064)===a;if(i.subtreeFlags&(d?10262:10256))for(i=i.child;i!==null;)gv(n,i,a,u),i=i.sibling;else d&&ov(i)}function gv(n,i,a,u){var d=(a&335544064)===a;d&&i.alternate===null&&i.return!==null&&i.return.alternate!==null&&Zu(i);var p=i.flags;switch(i.tag){case 0:case 11:case 15:Wi(n,i,a,u),p&2048&&hl(9,i);break;case 1:Wi(n,i,a,u);break;case 3:Wi(n,i,a,u),d&&sn&&Ep&&x1(n.containerInfo),p&2048&&(n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&Ze(n)));break;case 12:if(p&2048){Wi(n,i,a,u),n=i.stateNode;try{var T=i.memoizedProps,D=T.id,Q=T.onPostCommit;typeof Q=="function"&&Q(D,i.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(fe){Nt(i,i.return,fe)}}else Wi(n,i,a,u);break;case 31:Wi(n,i,a,u);break;case 13:Wi(n,i,a,u);break;case 23:break;case 22:T=i.stateNode,D=i.alternate,i.memoizedState!==null?(d&&D!==null&&D.memoizedState===null&&Zu(D),T._visibility&2?Wi(n,i,a,u):gl(n,i)):(d&&D!==null&&D.memoizedState!==null&&Zu(i),T._visibility&2?Wi(n,i,a,u):(T._visibility|=2,Go(n,i,a,u,(i.subtreeFlags&10256)!==0||!1))),p&2048&&Nh(D,i);break;case 24:Wi(n,i,a,u),p&2048&&Lh(i.alternate,i);break;case 30:d&&(d=i.alternate,d!==null&&(vr(d.child,!0),vr(i.child,!0))),Wi(n,i,a,u);break;default:Wi(n,i,a,u)}}function Go(n,i,a,u,d){for(d=d&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var p=n,T=i,D=a,Q=u,fe=T.flags;switch(T.tag){case 0:case 11:case 15:Go(p,T,D,Q,d),hl(8,T);break;case 23:break;case 22:var ge=T.stateNode;T.memoizedState!==null?ge._visibility&2?Go(p,T,D,Q,d):gl(p,T):(ge._visibility|=2,Go(p,T,D,Q,d)),d&&fe&2048&&Nh(T.alternate,T);break;case 24:Go(p,T,D,Q,d),d&&fe&2048&&Lh(T.alternate,T);break;default:Go(p,T,D,Q,d)}i=i.sibling}}function gl(n,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=n,u=i,d=u.flags;switch(u.tag){case 22:gl(a,u),d&2048&&Nh(u.alternate,u);break;case 24:gl(a,u),d&2048&&Lh(u.alternate,u);break;default:gl(a,u)}i=i.sibling}}function bs(n,i,a){if(n.subtreeFlags&co)for(n=n.child;n!==null;)vv(n,i,a),n=n.sibling}function vv(n,i,a){switch(n.tag){case 26:if(bs(n,i,a),n.flags&co)if(n.memoizedState!==null)gM(a,ar,n.memoizedState,n.memoizedProps);else{var u=n.stateNode,d=n.type;n=n.memoizedProps,((i&335544128)===i||rp(d,n))&&Kv(a,u,d,n)}break;case 5:bs(n,i,a),n.flags&co&&(u=n.stateNode,d=n.type,n=n.memoizedProps,((i&335544128)===i||rp(d,n))&&Kv(a,u,d,n));break;case 3:case 4:Xi?(u=ar,ar=ac(n.stateNode.containerInfo),bs(n,i,a),ar=u):bs(n,i,a);break;case 22:n.memoizedState===null&&(u=n.alternate,u!==null&&u.memoizedState!==null?(u=co,co=16777216,bs(n,i,a),co=u):bs(n,i,a));break;case 30:(n.flags&co)!==0&&(u=n.memoizedProps.name,u!=null&&u!=="auto"&&(d=n.stateNode,d.paired=null,Ni===null&&(Ni=new Map),Ni.set(u,d))),bs(n,i,a);break;default:bs(n,i,a)}}function yv(n){var i=n.alternate;if(i!==null&&(n=i.child,n!==null)){i.child=null;do i=n.sibling,n.sibling=null,n=i;while(n!==null)}}function vl(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var u=i[a];Fn=u,_v(u,n)}yv(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)bv(n),n=n.sibling}function bv(n){switch(n.tag){case 0:case 11:case 15:vl(n),n.flags&2048&&vs(9,n,n.return);break;case 3:vl(n);break;case 12:vl(n);break;case 22:var i=n.stateNode;n.memoizedState!==null&&i._visibility&2&&(n.return===null||n.return.tag!==13)?(i._visibility&=-3,Qu(n)):vl(n);break;default:vl(n)}}function Qu(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var u=i[a];Fn=u,_v(u,n)}yv(n)}for(n=n.child;n!==null;){switch(i=n,i.tag){case 0:case 11:case 15:vs(8,i,i.return),Qu(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,Qu(i));break;default:Qu(i)}n=n.sibling}}function _v(n,i){for(;Fn!==null;){var a=Fn;switch(a.tag){case 0:case 11:case 15:vs(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var u=a.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:Ze(a.memoizedState.cache)}if(u=a.child,u!==null)u.return=a,Fn=u;else e:for(a=n;Fn!==null;){u=Fn;var d=u.sibling,p=u.return;if(cv(u),u===a){Fn=null;break e}if(d!==null){d.return=p,Fn=d;break e}Fn=p}}}function kh(n){var i=Hx(n);if(i!=null){if(typeof i.memoizedProps["data-testname"]!="string")throw Error(o(364));return i}if(n=e1(n),n===null)throw Error(o(362));return n.stateNode.current}function Dh(n,i){var a=n.tag;switch(i.$$typeof){case wc:if(n.type===i.value)return!0;break;case Tc:e:{for(i=i.value,n=[n,0],a=0;a<n.length;){var u=n[a++],d=u.tag,p=n[a++],T=i[p];if(d!==5&&d!==26&&d!==27||!Sl(u)){for(;T!=null&&Dh(u,T);)p++,T=i[p];if(p===i.length){i=!0;break e}else for(u=u.child;u!==null;)n.push(u,p),u=u.sibling}}i=!1}return i;case Ec:if((a===5||a===26||a===27)&&i1(n.stateNode,i.value))return!0;break;case Rc:if((a===5||a===6||a===26||a===27)&&(n=n1(n),n!==null&&0<=n.indexOf(i.value)))return!0;break;case Ac:if((a===5||a===26||a===27)&&(n=n.memoizedProps["data-testname"],typeof n=="string"&&n.toLowerCase()===i.value.toLowerCase()))return!0;break;default:throw Error(o(365))}return!1}function Fh(n){switch(n.$$typeof){case wc:return"<"+(_(n.value)||"Unknown")+">";case Tc:return":has("+(Fh(n)||"")+")";case Ec:return'[role="'+n.value+'"]';case Rc:return'"'+n.value+'"';case Ac:return'[data-testname="'+n.value+'"]';default:throw Error(o(365))}}function Sv(n,i){var a=[];n=[n,0];for(var u=0;u<n.length;){var d=n[u++],p=d.tag,T=n[u++],D=i[T];if(p!==5&&p!==26&&p!==27||!Sl(d)){for(;D!=null&&Dh(d,D);)T++,D=i[T];if(T===i.length)a.push(d);else for(d=d.child;d!==null;)n.push(d,T),d=d.sibling}}return a}function Uh(n,i){if(!_l)throw Error(o(363));n=kh(n),n=Sv(n,i),i=[],n=Array.from(n);for(var a=0;a<n.length;){var u=n[a++],d=u.tag;if(d===5||d===26||d===27)Sl(u)||i.push(u.stateNode);else for(u=u.child;u!==null;)n.push(u),u=u.sibling}return i}function Ai(){return(xt&2)!==0&&wt!==0?wt&-wt:Je.T!==null?le():Gx()}function xv(){if(ki===0)if((wt&536870912)===0||mt){var n=uc;uc<<=1,(uc&3932160)===0&&(uc=262144),ki=n}else ki=536870912;return n=$n.current,n!==null&&(n.flags|=32),ki}function Wo(n,i){if(i!=null){var a=n.stateNode,u=a.ref;u===null&&(u=a.ref=ty(K(n.memoizedProps,a))),da===null&&(da=[]),da.push(i.bind(null,u))}}function yi(n,i,a){(n===$t&&(Ht===2||Ht===9)||n.cancelPendingCommit!==null)&&(Xo(n,0),_s(n,wt,ki,!1)),M(n,a),((xt&2)===0||n!==$t)&&(n===$t&&((xt&2)===0&&(fo|=a),gn===4&&_s(n,wt,ki,!1)),de(n))}function Mv(n,i,a){if((xt&6)!==0)throw Error(o(327));var u=!a&&(i&127)===0&&(i&n.expiredLanes)===0||w(n,i),d=u?mx(n,i):Oh(n,i,!0),p=u;do{if(d===0){ua&&!u&&_s(n,i,0,!1);break}else{if(a=n.current.alternate,p&&!hx(a)){d=Oh(n,i,!1),p=!1;continue}if(d===2){if(p=i,n.errorRecoveryDisabledLanes&p)var T=0;else T=n.pendingLanes&-536870913,T=T!==0?T:T&536870912?536870912:0;if(T!==0){i=T;e:{var D=n;d=Il;var Q=Xn&&D.current.memoizedState.isDehydrated;if(Q&&(Xo(D,T).flags|=256),T=Oh(D,T,!1),T!==2&&T!==6){if(Ap&&!Q){D.errorRecoveryDisabledLanes|=p,fo|=p,d=4;break e}p=xi,xi=d,p!==null&&(xi===null?xi=p:xi.push.apply(xi,p))}d=T}if(p=!1,d!==2)continue}}if(d===1){Xo(n,0),_s(n,i,0,!0);break}e:{switch(u=n,p=d,p){case 0:case 1:throw Error(o(345));case 4:if((i&4194048)!==i&&(i&62914560)!==i)break;case 6:_s(u,i,ki,!As);break e;case 2:xi=null;break;case 3:case 5:break;default:throw Error(o(329))}if((i&62914560)===i&&(d=Cc+300-bi(),10<d)){if(_s(u,i,ki,!As),y(u,0,!0)!==0)break e;Er=i,u.timeoutHandle=Ox(wv.bind(null,u,a,xi,Pc,Cp,i,ki,fo,ca,As,p,"Throttled",-0,0),d);break e}wv(u,a,xi,Pc,Cp,i,ki,fo,ca,As,p,null,-0,0)}}break}while(!0);de(n)}function wv(n,i,a,u,d,p,T,D,Q,fe,ge,Re,ke,yt){n.timeoutHandle=no;var Rt=i.subtreeFlags,Ps=(p&335544064)===p;if(Re=null,(Ps||Rt&8192||(Rt&16785408)===16785408)&&(Re=Yx(),Ni=null,vv(i,p,Re),Ps&&jx(Re,n.containerInfo),Rt=(p&62914560)===p?Cc-bi():(p&4194048)===p?Ry-bi():0,Rt=Zx(Re,Rt),Rt!==null)){Er=p,n.cancelPendingCommit=Rt(Lv.bind(null,n,i,p,a,u,d,T,D,Q,fe,ge,Re,null,ke,yt)),_s(n,p,T,!fe);return}Lv(n,i,p,a,u,d,T,D,Q,fe,ge,Re)}function hx(n){for(var i=n;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var u=0;u<a.length;u++){var d=a[u],p=d.getSnapshot;d=d.value;try{if(!Ii(p(),d))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function _s(n,i,a,u){i=L(n,i),i&=~Rp,i&=~fo,n.suspendedLanes|=i,n.pingedLanes&=~i,u&&(n.warmLanes|=i),u=n.expirationTimes;for(var d=i;0<d;){var p=31-Ci(d),T=1<<p;u[p]=-1,d&=~T}a!==0&&G(n,a,i)}function Tv(){return(xt&6)===0?(ue(0,!1),!1):!0}function zh(){if(Mt!==null){if(Ht===0)var n=Mt.return;else n=Mt,Xr=io=null,ze(n),sa=null,Al=0,n=Mt;for(;n!==null;)Y0(n.alternate,n),n=n.return;Mt=null}}function Xo(n,i){var a=n.timeoutHandle;return a!==no&&(n.timeoutHandle=no,Bx(a)),a=n.cancelPendingCommit,a!==null&&(n.cancelPendingCommit=null,a()),Er=0,zh(),$t=n,Mt=a=Hr(n.current,null),wt=i,Ht=0,Li=null,As=!1,ua=w(n,i),Ap=!1,ca=ki=Rp=fo=Rs=gn=0,xi=Il=null,Cp=!1,$r=L(n,i),js(),a}function Ev(n,i){ct=null,Je.H=Sc,i===ra||i===gc?(i=It(),Ht=3):i===bp?(i=It(),Ht=4):Ht=i===Mp?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Li=i,Mt===null&&(gn=1,Hu(n,Ve(i,n.current)))}function Av(){var n=$n.current;return n===null?!0:(wt&4194048)===wt?ci===null:(wt&62914560)===wt||(wt&536870912)!==0?n===ci:!1}function Rv(){var n=Je.H;return Je.H=Sc,n===null?Sc:n}function Cv(){var n=Je.A;return Je.A=LM,n}function ec(){gn=4,As||(wt&4194048)!==wt&&$n.current!==null||(ua=!0),(Rs&134217727)===0&&(fo&134217727)===0||$t===null||_s($t,wt,ki,!1)}function Oh(n,i,a){var u=xt;xt|=2;var d=Rv(),p=Cv();($t!==n||wt!==i)&&(Pc=null,Xo(n,i)),i=!1;var T=gn;e:do try{if(Ht!==0&&Mt!==null){var D=Mt,Q=Li;switch(Ht){case 8:zh(),T=6;break e;case 3:case 2:case 9:case 6:$n.current===null&&(i=!0);var fe=Ht;if(Ht=0,Li=null,qo(n,D,Q,fe),a&&ua){T=0;break e}break;default:fe=Ht,Ht=0,Li=null,qo(n,D,Q,fe)}}px(),T=gn;break}catch(ge){Ev(n,ge)}while(!0);return i&&n.shellSuspendCounter++,Xr=io=null,xt=u,Je.H=d,Je.A=p,Mt===null&&($t=null,wt=0,js()),T}function px(){for(;Mt!==null;)Pv(Mt)}function mx(n,i){var a=xt;xt|=2;var u=Rv(),d=Cv();$t!==n||wt!==i?(Pc=null,Nl=bi()+500,Xo(n,i)):ua=w(n,i);e:do try{if(Ht!==0&&Mt!==null){i=Mt;var p=Li;t:switch(Ht){case 1:Ht=0,Li=null,qo(n,i,p,1);break;case 2:case 9:if(Ge(p)){Ht=0,Li=null,Iv(i);break}i=function(){Ht!==2&&Ht!==9||$t!==n||(Ht=7),de(n)},p.then(i,i);break e;case 3:Ht=7;break e;case 4:Ht=5;break e;case 7:Ge(p)?(Ht=0,Li=null,Iv(i)):(Ht=0,Li=null,qo(n,i,p,7));break;case 5:var T=null;switch(Mt.tag){case 26:T=Mt.memoizedState;case 5:case 27:var D=Mt,Q=D.type,fe=D.pendingProps;if(T?my(T):Jv(D.stateNode,Q,fe)){Ht=0,Li=null;var ge=D.sibling;if(ge!==null)Mt=ge;else{var Re=D.return;Re!==null?(Mt=Re,tc(Re)):Mt=null}break t}}Ht=0,Li=null,qo(n,i,p,5);break;case 6:Ht=0,Li=null,qo(n,i,p,6);break;case 8:zh(),gn=6;break e;default:throw Error(o(462))}}gx();break}catch(ke){Ev(n,ke)}while(!0);return Xr=io=null,Je.H=u,Je.A=d,xt=a,Mt!==null?0:($t=null,wt=0,js(),gn)}function gx(){for(;Mt!==null&&!_M();)Pv(Mt)}function Pv(n){var i=G0(n.alternate,n,$r);n.memoizedProps=n.pendingProps,i===null?tc(n):Mt=i}function Iv(n){var i=n,a=i.alternate;switch(i.tag){case 15:case 0:i=F0(a,i,i.pendingProps,i.type,void 0,wt);break;case 11:i=F0(a,i,i.pendingProps,i.type.render,i.ref,wt);break;case 5:ze(i);var u=i;Xn&&u===kn&&(mt?(fn(u),u.tag===5&&u.stateNode!=null&&(Qt=u.stateNode)):(fn(u),mt=!0));default:Y0(a,i),i=Mt=Uv(i,$r),i=G0(a,i,$r)}n.memoizedProps=n.pendingProps,i===null?tc(n):Mt=i}function qo(n,i,a,u){Xr=io=null,ze(i),sa=null,Al=0;var d=i.return;try{if(sx(n,d,i,a,wt)){gn=1,Hu(n,Ve(a,n.current)),Mt=null;return}}catch(p){if(d!==null)throw Mt=d,p;gn=1,Hu(n,Ve(a,n.current)),Mt=null;return}i.flags&32768?(mt||u===1?n=!0:ua||(wt&536870912)!==0?n=!1:(As=n=!0,(u===2||u===9||u===3||u===6)&&(u=$n.current,u!==null&&u.tag===13&&(u.flags|=16384))),Nv(i,n)):tc(i)}function tc(n){var i=n;do{if((i.flags&32768)!==0){Nv(i,As);return}n=i.return;var a=ux(i.alternate,i,$r);if(a!==null){Mt=a;return}if(i=i.sibling,i!==null){Mt=i;return}Mt=i=n}while(i!==null);gn===0&&(gn=5)}function Nv(n,i){do{var a=cx(n.alternate,n);if(a!==null){a.flags&=32767,Mt=a;return}if(a=n.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(n=n.sibling,n!==null)){Mt=n;return}Mt=n=a}while(n!==null);gn=6,Mt=null}function Lv(n,i,a,u,d,p,T,D,Q,fe,ge,Re){n.cancelPendingCommit=null;do yl();while(ln!==0);if((xt&6)!==0)throw Error(o(327));if(i!==null){if(i===n.current)throw Error(o(177));n===$t&&(Mt=$t=null,wt=0),ho=i,lr=n,Er=a,Ip=d,Cy=u,vx(n,i,a,T,D,Q,Re)}}function vx(n,i,a,u,d,p,T){var D=i.lanes|i.childLanes;if(Pp=D,D|=_p,P(n,a,D,u,d,p),da=null,(a&335544064)===a?(ha=E(n),u=10262):(ha=null,u=10256),(i.subtreeFlags&u)!==0||(i.flags&u)!==0?(n.callbackNode=null,n.callbackPriority=0,Mx(dp,function(){return Gh(),null})):(n.callbackNode=null,n.callbackPriority=0),xc=!1,u=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||u){u=Je.T,Je.T=null,d=Gr(),Ln(2),p=xt,xt|=4;try{fx(n,i,a)}finally{xt=p,Ln(d),Je.T=u}}ln=1,xc?fa=E1(T,n.containerInfo,ha,Bh,Hh,bx,Vh,Gh,yx,null,null):(Bh(),Hh(),Vh())}function yx(n){if(ln!==0){var i=lr.onRecoverableError;i(n,{componentStack:null})}}function bx(){ln===3&&(ln=0,mv(ho,lr),ln=4)}function Bh(){if(ln===1){ln=0;var n=lr,i=ho,a=Er,u=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||u){u=Je.T,Je.T=null;var d=Gr();Ln(2);var p=xt;xt|=4;try{Cl=Mc=!1,hv(i,n,a),Ux(n.containerInfo)}finally{xt=p,Ln(d),Je.T=u}}n.current=i,ln=2}}function Hh(){if(ln===2){ln=0;var n=lr,i=ho,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=Je.T,Je.T=null;var u=Gr();Ln(2);var d=xt;xt|=4;try{lv(n,i.alternate,i)}finally{xt=d,Ln(u),Je.T=a}}ln=3}}function Vh(){if(ln===4||ln===3){ln=0;var n=fa;fa=null,SM();var i=lr,a=ho,u=Er,d=Cy,p=(u&335544064)===u?10262:10256;if((a.subtreeFlags&p)!==0||(a.flags&p)!==0?ln=5:(ln=0,ho=lr=null,kv(i,i.pendingLanes)),p=i.pendingLanes,p===0&&(Cs=null),j(u),a=a.stateNode,Pi&&typeof Pi.onCommitFiberRoot=="function")try{Pi.onCommitFiberRoot(xl,a,void 0,(a.current.flags&128)===128)}catch{}if(d!==null){a=Je.T,p=Gr(),Ln(2),Je.T=null;try{for(var T=i.onRecoverableError,D=0;D<d.length;D++){var Q=d[D];T(Q.value,{componentStack:Q.stack})}}finally{Je.T=a,Ln(p)}}if(d=da,T=ha,ha=null,d!==null&&(da=null,T===null&&(T=[]),n!==null))for(Q=0;Q<d.length;Q++)a=(0,d[Q])(T),a!==void 0&&R1(n,a);(Er&3)!==0&&yl(),de(i),p=i.pendingLanes,(u&261930)!==0&&(p&42)!==0?i===Ic?Ll++:(Ll=0,Ic=i):(Ll=0,Ic=null),Xn&&oM(),ue(0,!1)}}function kv(n,i){(n.pooledCacheLanes&=i)===0&&(i=n.pooledCache,i!=null&&(n.pooledCache=null,Ze(i)))}function yl(){return fa!==null&&(A1(fa),fa=null),Bh(),Hh(),Vh(),Gh()}function Gh(){if(ln!==5)return!1;var n=lr,i=Pp;Pp=0;var a=j(Er),u=32>a?32:a;a=Je.T;var d=Gr();try{Ln(u),Je.T=null,u=Ip,Ip=null;var p=lr,T=Er;if(ln=0,ho=lr=null,Er=0,(xt&6)!==0)throw Error(o(331));var D=xt;if(xt|=4,bv(p.current),gv(p,p.current,T,u),xt=D,ue(0,!1),Pi&&typeof Pi.onPostCommitFiberRoot=="function")try{Pi.onPostCommitFiberRoot(xl,p)}catch{}return!0}finally{Ln(d),Je.T=a,kv(n,i)}}function Dv(n,i,a){i=Ve(a,i),i=oh(n.stateNode,i,2),n=vi(n,i,2),n!==null&&(M(n,2),de(n))}function Nt(n,i,a){if(n.tag===3)Dv(n,n,a);else for(;i!==null;){if(i.tag===3){Dv(i,n,a);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Cs===null||!Cs.has(u))){n=Ve(a,n),a=R0(2),u=vi(i,a,2),u!==null&&(C0(a,u,i,n),M(u,2),de(u));break}}i=i.return}}function Wh(n,i,a){var u=n.pingCache;if(u===null){u=n.pingCache=new kM;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(a)||(Ap=!0,d.add(a),n=_x.bind(null,n,i,a),i.then(n,n))}function _x(n,i,a){var u=n.pingCache;u!==null&&u.delete(i),n.pingedLanes|=n.suspendedLanes&a,n.warmLanes&=~a,$t===n&&(wt&a)===a&&((gn===4||gn===3&&(wt&62914560)===wt&&300>bi()-Cc)&&(xt&2)===0?Xo(n,0):Rp|=a,ca===wt&&(ca=0)),de(n)}function Fv(n,i){i===0&&(i=I()),n=ir(n,i),n!==null&&(M(n,i),de(n))}function Sx(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Fv(n,a)}function xx(n,i){var a=0;switch(n.tag){case 31:case 13:var u=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:u=n.stateNode;break;case 22:u=n.stateNode._retryCache;break;default:throw Error(o(314))}u!==null&&u.delete(i),Fv(n,a)}function Mx(n,i){return fc(n,i)}function wx(n,i,a,u){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Hr(n,i){var a=n.alternate;return a===null?(a=t(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&1206910976,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a.refCleanup=n.refCleanup,a}function Uv(n,i){n.flags&=1206910978;var a=n.alternate;return a===null?(n.childLanes=0,n.lanes=i,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=a.childLanes,n.lanes=a.lanes,n.child=a.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=a.memoizedProps,n.memoizedState=a.memoizedState,n.updateQueue=a.updateQueue,n.type=a.type,i=a.dependencies,n.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),n}function nc(n,i,a,u,d,p){var T=0;if(u=n,typeof u=="function")Xh(u)&&(T=1);else if(typeof u=="string")T=Xi&&on?cy(n,a,qn.current)?26:yy(n)?27:5:Xi?cy(n,a,qn.current)?26:5:on&&yy(n)?27:5;else e:switch(u){case tp:return n=t(31,a,i,d),n.elementType=tp,n.lanes=p,n;case Yo:return to(a.children,d,p,i);case Wv:T=8,d|=24;break;case Zh:return n=t(12,a,i,d|2),n.elementType=Zh,n.lanes=p,n;case Kh:return n=t(13,a,i,d),n.elementType=Kh,n.lanes=p,n;case Qh:return n=t(19,a,i,d),n.elementType=Qh,n.lanes=p,n;case Rx:case np:return n=d|32,n=t(30,a,i,n),n.elementType=np,n.lanes=p,n.stateNode={autoName:null,paired:null,clones:null,ref:null},n;default:if(typeof u=="object"&&u!==null)switch(u.$$typeof){case Vr:T=10;break e;case Xv:T=9;break e;case Jh:T=11;break e;case ep:T=14;break e;case Ss:T=16,u=null;break e}T=29,a=Error(o(130,n===null?"null":typeof n,"")),u=null}return i=t(T,a,i,d),i.elementType=n,i.type=u,i.lanes=p,i}function to(n,i,a,u){return n=t(7,n,u,i),n.lanes=a,n}function qh(n,i,a){return n=t(6,n,null,i),n.lanes=a,n}function zv(n){var i=t(18,null,null,0);return i.stateNode=n,i}function $h(n,i,a){return i=t(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Tx(n,i,a,u,d,p,T,D,Q){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=no,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=N(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=N(0),this.hiddenUpdates=N(null),this.identifierPrefix=u,this.onUncaughtError=d,this.onCaughtError=p,this.onRecoverableError=T,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=Q,this.transitionTypes=null,this.incompleteTransitions=new Map}function Ov(n,i,a,u,d,p,T,D,Q,fe,ge,Re){return n=new Tx(n,i,a,T,Q,fe,ge,Re,D),i=1,p===!0&&(i|=24),p=t(3,null,null,i),n.current=p,p.stateNode=n,i=qe(),i.refCount++,n.pooledCache=i,i.refCount++,p.memoizedState={element:u,isDehydrated:a,cache:i},ms(p),n}function Bv(n){return n?(n=Ko,n):Ko}function Hv(n){var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(o(188)):(n=Object.keys(n).join(","),Error(o(268,n)));return n=f(i),n=n!==null?h(n):null,n===null?null:bl(n.stateNode)}function Vv(n,i,a,u,d,p){d=Bv(d),u.context===null?u.context=d:u.pendingContext=d,u=rr(i),u.payload={element:a},p=p===void 0?null:p,p!==null&&(u.callback=p),a=vi(n,u,i),a!==null&&(yi(a,n,i),Ks(a,n,i))}function Gv(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Yh(n,i){Gv(n,i),(n=n.alternate)&&Gv(n,i)}var St={},Ex=US.default,Ri=Zn.default,jh=Object.assign,Ax=Symbol.for("react.element"),ic=Symbol.for("react.transitional.element"),$o=Symbol.for("react.portal"),Yo=Symbol.for("react.fragment"),Wv=Symbol.for("react.strict_mode"),Zh=Symbol.for("react.profiler"),Xv=Symbol.for("react.consumer"),Vr=Symbol.for("react.context"),Jh=Symbol.for("react.forward_ref"),Kh=Symbol.for("react.suspense"),Qh=Symbol.for("react.suspense_list"),ep=Symbol.for("react.memo"),Ss=Symbol.for("react.lazy"),tp=Symbol.for("react.activity"),Rx=Symbol.for("react.legacy_hidden"),Cx=Symbol.for("react.memo_cache_sentinel"),np=Symbol.for("react.view_transition"),Px=Symbol.for("react.recoverable"),qv=Symbol.iterator,$v=Symbol.for("react.optimistic_key"),Ix=Symbol.for("react.client.reference"),rc=Array.isArray,Je=Ex.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Nx=e.rendererVersion,Lx=e.rendererPackageName,Yv=e.extraDevToolsConfig,bl=e.getPublicInstance,kx=e.getRootHostContext,Dx=e.getChildHostContext,Fx=e.prepareForCommit,Ux=e.resetAfterCommit,zx=e.createInstance;e.cloneMutableInstance;var ip=e.appendInitialChild,jv=e.finalizeInitialChildren,sc=e.shouldSetTextContent,Zv=e.createTextInstance;e.cloneMutableTextInstance;var Ox=e.scheduleTimeout,Bx=e.cancelTimeout,no=e.noTimeout,br=e.isPrimaryRenderer;e.warnsIfNotActing;var sn=e.supportsMutation,_r=e.supportsPersistence,Xn=e.supportsHydration,Hx=e.getInstanceFromNode;e.beforeActiveInstanceBlur;var Vx=e.preparePortalMount;e.prepareScopeUpdate,e.getInstanceFromScope;var Ln=e.setCurrentUpdatePriority,Gr=e.getCurrentUpdatePriority,Gx=e.resolveUpdatePriority;e.trackSchedulerEvent,e.resolveEventType,e.resolveEventTimeStamp;var Wx=e.shouldAttemptEagerTransition,Xx=e.detachDeletedInstance;e.requestPostPaintCallback;var qx=e.maySuspendCommit,$x=e.maySuspendCommitOnUpdate,rp=e.maySuspendCommitInSyncRender,Jv=e.preloadInstance,Yx=e.startSuspendingCommit,Kv=e.suspendInstance,jx=e.suspendOnActiveViewTransition,Zx=e.waitForCommitToBeReady;e.getSuspendedCommitReason;var jo=e.NotPendingTransition,Wr=e.HostTransitionContext,Jx=e.resetFormInstance;e.bindToConsole;var Kx=e.supportsMicrotasks,Qx=e.scheduleMicrotask,_l=e.supportsTestSelectors,e1=e.findFiberRoot,t1=e.getBoundingRect,n1=e.getTextContent,Sl=e.isHiddenSubtree,i1=e.matchAccessibilityRole,r1=e.setFocusIfFocusable,s1=e.setupIntersectionObserver,o1=e.appendChild,a1=e.appendChildToContainer,l1=e.commitTextUpdate,u1=e.commitMount,c1=e.commitUpdate,f1=e.insertBefore,d1=e.insertInContainerBefore,h1=e.removeChild,p1=e.removeChildFromContainer,Qv=e.resetTextContent,m1=e.hideInstance,g1=e.hideTextInstance,v1=e.unhideInstance,y1=e.unhideTextInstance,ey=e.applyViewTransitionName,b1=e.restoreViewTransitionName,_1=e.cancelViewTransitionName,S1=e.cancelRootViewTransitionName,x1=e.restoreRootViewTransitionName;e.cloneRootViewTransitionContainer,e.removeRootViewTransitionClone;var sp=e.measureInstance,M1=e.measureClonedInstance,oc=e.wasInstanceInViewport,w1=e.hasInstanceChanged,T1=e.hasInstanceAffectedParent,E1=e.startViewTransition;e.startGestureTransition;var A1=e.stopViewTransition,R1=e.addViewTransitionFinishedListener;e.getCurrentGestureOffset;var ty=e.createViewTransitionInstance,C1=e.clearContainer,P1=e.createFragmentInstance,I1=e.updateFragmentInstanceFiber,ny=e.commitNewChildToFragmentInstance,N1=e.deleteChildFromFragmentInstance,L1=e.cloneInstance,iy=e.createContainerChildSet,ry=e.appendChildToContainerChildSet,k1=e.finalizeContainerChildren,sy=e.replaceContainerChildren,oy=e.cloneHiddenInstance,ay=e.cloneHiddenTextInstance,op=e.isSuspenseInstancePending,ap=e.isSuspenseInstanceFallback,D1=e.getSuspenseInstanceFallbackErrorDetails,F1=e.registerSuspenseInstanceRetry,U1=e.canHydrateFormStateMarker,z1=e.isFormStateMarkerMatching,ly=e.getNextHydratableSibling,O1=e.getNextHydratableSiblingAfterSingleton,B1=e.getFirstHydratableChild,H1=e.getFirstHydratableChildWithinContainer,V1=e.getFirstHydratableChildWithinActivityInstance,G1=e.getFirstHydratableChildWithinSuspenseInstance,W1=e.getFirstHydratableChildWithinSingleton,X1=e.canHydrateInstance,q1=e.canHydrateTextInstance,$1=e.canHydrateActivityInstance,Y1=e.canHydrateSuspenseInstance,j1=e.hydrateInstance,Z1=e.hydrateTextInstance,J1=e.hydrateActivityInstance,K1=e.hydrateSuspenseInstance,Q1=e.getNextHydratableInstanceAfterActivityInstance,eM=e.getNextHydratableInstanceAfterSuspenseInstance,tM=e.commitHydratedInstance,nM=e.commitHydratedContainer,iM=e.commitHydratedActivityInstance,rM=e.commitHydratedSuspenseInstance,sM=e.finalizeHydratedChildren,oM=e.flushHydrationEvents;e.clearActivityBoundary;var aM=e.clearSuspenseBoundary;e.clearActivityBoundaryFromContainer;var lM=e.clearSuspenseBoundaryFromContainer,uM=e.hideDehydratedBoundary,cM=e.unhideDehydratedBoundary,uy=e.shouldDeleteUnhydratedTailInstances;e.diffHydratedPropsForDevWarnings,e.diffHydratedTextForDevWarnings,e.describeHydratableInstanceForDevWarnings;var fM=e.validateHydratableInstance,dM=e.validateHydratableTextInstance,Xi=e.supportsResources,cy=e.isHostHoistableType,ac=e.getHoistableRoot,fy=e.getResource,dy=e.acquireResource,hy=e.releaseResource,hM=e.hydrateHoistable,lp=e.mountHoistable,up=e.unmountHoistable,py=e.createHoistableInstance,pM=e.prepareToCommitHoistables,mM=e.mayResourceSuspendCommit,my=e.preloadResource,gM=e.suspendResource,on=e.supportsSingletons,gy=e.resolveSingletonInstance,vM=e.acquireSingletonInstance,vy=e.releaseSingletonInstance,yy=e.isHostSingletonType,Zo=e.isSingletonScope,cp=[],Jo=-1,Ko={},Ci=Math.clz32?Math.clz32:A,yM=Math.log,bM=Math.LN2,lc=256,uc=262144,cc=4194304,fc=Ri.unstable_scheduleCallback,fp=Ri.unstable_cancelCallback,_M=Ri.unstable_shouldYield,SM=Ri.unstable_requestPaint,bi=Ri.unstable_now,by=Ri.unstable_ImmediatePriority,xM=Ri.unstable_UserBlockingPriority,dp=Ri.unstable_NormalPriority,MM=Ri.unstable_IdlePriority,wM=Ri.log,TM=Ri.unstable_setDisableYieldValue,xl=null,Pi=null,EM=0,Ii=typeof Object.is=="function"?Object.is:me,_y=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)},AM=Object.prototype.hasOwnProperty,hp,Sy,pp=!1,xy=new WeakMap,Qo=[],ea=0,dc=null,Ml=0,qi=[],$i=0,xs=null,Sr=1,xr="",qn=b(null),wl=b(null),Ms=b(null),hc=b(null),kn=null,Qt=null,mt=!1,ws=null,Yi=!1,mp=Error(o(519)),pc=b(null),io=null,Xr=null,RM=typeof AbortController<"u"?AbortController:function(){var n=[],i=this.signal={aborted:!1,addEventListener:function(a,u){n.push(u)}};this.abort=function(){i.aborted=!0,n.forEach(function(a){return a()})}},CM=Ri.unstable_scheduleCallback,PM=Ri.unstable_NormalPriority,an={$$typeof:Vr,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0},Tl=null,ta=null,na=null,gp=!1,mc=!1,vp=!1,ro=0,El=null,yp=0,so=0,ia=null,My=Je.S;Je.S=function(n,i){if(Ry=bi(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&ie(n,i),Tl!==null)for(var a=ta;a!==null;)k(a,Tl),a=a.next;if(a=n.types,a!=null){for(var u=ta;u!==null;)k(u,a),u=u.next;if(so!==0){u=Tl,u===null&&(u=Tl=[]);for(var d=0;d<a.length;d++){var p=a[d];u.indexOf(p)===-1&&u.push(p)}}}My!==null&&My(n,i)};var oo=b(null),ra=Error(o(460)),bp=Error(o(474)),gc=Error(o(542)),vc={then:function(){}},ao=null,sa=null,Al=0,lo=Du(!0),wy=Du(!1),ji=[],oa=0,_p=0,Ts=!1,Sp=!1,Es=b(null),yc=b(0),$n=b(null),ci=null,Yn=b(0),qr=0,ct=null,Gt=null,xn=null,bc=!1,aa=!1,uo=!1,_c=0,Rl=0,la=null,IM=0,Sc={readContext:ut,use:Or,useCallback:Fe,useContext:Fe,useEffect:Fe,useImperativeHandle:Fe,useLayoutEffect:Fe,useInsertionEffect:Fe,useMemo:Fe,useReducer:Fe,useRef:Fe,useState:Fe,useDebugValue:Fe,useDeferredValue:Fe,useTransition:Fe,useSyncExternalStore:Fe,useId:Fe,useHostTransitionStatus:Fe,useFormState:Fe,useActionState:Fe,useOptimistic:Fe,useMemoCache:Fe,useCacheRefresh:Fe,useEffectEvent:Fe},Ty={readContext:ut,use:Or,useCallback:function(n,i){return Ft().memoizedState=[n,i===void 0?null:i],n},useContext:ut,useEffect:u0,useImperativeHandle:function(n,i,a){a=a!=null?a.concat([n]):null,zu(4194308,4,h0.bind(null,i,n),a)},useLayoutEffect:function(n,i){return zu(4194308,4,n,i)},useInsertionEffect:function(n,i){zu(4,2,n,i)},useMemo:function(n,i){var a=Ft();i=i===void 0?null:i;var u=n();if(uo){z(!0);try{n()}finally{z(!1)}}return a.memoizedState=[u,i],u},useReducer:function(n,i,a){var u=Ft();if(a!==void 0){var d=a(i);if(uo){z(!0);try{a(i)}finally{z(!1)}}}else d=i;return u.memoizedState=u.baseState=d,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:d},u.queue=n,n=n.dispatch=rx.bind(null,ct,n),[u.memoizedState,n]},useRef:function(n){var i=Ft();return n={current:n},i.memoizedState=n},useState:function(n){n=Kd(n);var i=n.queue,a=x0.bind(null,ct,i);return i.dispatch=a,[n.memoizedState,a]},useDebugValue:th,useDeferredValue:function(n,i){var a=Ft();return nh(a,n,i)},useTransition:function(){var n=Kd(!1);return n=y0.bind(null,ct,n.queue,!0,!1),Ft().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,i,a){var u=ct,d=Ft();if(mt){if(a===void 0)throw Error(o(407));a=a()}else{if(a=i(),$t===null)throw Error(o(349));(wt&127)!==0||bn(u,i,a)}d.memoizedState=a;var p={value:a,getSnapshot:i};return d.queue=p,u0(ul.bind(null,u,p,n),[n]),u.flags|=2048,Oo(9,{destroy:void 0},Gi.bind(null,u,p,a,i),null),a},useId:function(){var n=Ft(),i=$t.identifierPrefix;if(mt){var a=xr,u=Sr;a=(u&~(1<<32-Ci(u)-1)).toString(32)+a,i="_"+i+"R_"+a,a=_c++,0<a&&(i+="H"+a.toString(32)),i+="_"}else a=IM++,i="_"+i+"r_"+a.toString(32)+"_";return n.memoizedState=i},useHostTransitionStatus:ih,useFormState:r0,useActionState:r0,useOptimistic:function(n){var i=Ft();i.memoizedState=i.baseState=n;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=rh.bind(null,ct,!0,a),a.dispatch=i,[n,i]},useMemoCache:Vi,useCacheRefresh:function(){return Ft().memoizedState=ix.bind(null,ct)},useEffectEvent:function(n){var i=Ft(),a={impl:n};return i.memoizedState=a,function(){if((xt&2)!==0)throw Error(o(440));return a.impl.apply(void 0,arguments)}}},Ey={readContext:ut,use:Or,useCallback:m0,useContext:ut,useEffect:eh,useImperativeHandle:p0,useInsertionEffect:f0,useLayoutEffect:d0,useMemo:g0,useReducer:vt,useRef:l0,useState:function(){return vt(Vn)},useDebugValue:th,useDeferredValue:function(n,i){var a=je();return v0(a,Gt.memoizedState,n,i)},useTransition:function(){var n=vt(Vn)[0],i=je().memoizedState;return[typeof n=="boolean"?n:mn(n),i]},useSyncExternalStore:jt,useId:_0,useHostTransitionStatus:ih,useFormState:s0,useActionState:s0,useOptimistic:function(n,i){var a=je();return Kg(a,Gt,n,i)},useMemoCache:Vi,useCacheRefresh:S0,useEffectEvent:c0},NM={readContext:ut,use:Or,useCallback:m0,useContext:ut,useEffect:eh,useImperativeHandle:p0,useInsertionEffect:f0,useLayoutEffect:d0,useMemo:g0,useReducer:ui,useRef:l0,useState:function(){return ui(Vn)},useDebugValue:th,useDeferredValue:function(n,i){var a=je();return Gt===null?nh(a,n,i):v0(a,Gt.memoizedState,n,i)},useTransition:function(){var n=ui(Vn)[0],i=je().memoizedState;return[typeof n=="boolean"?n:mn(n),i]},useSyncExternalStore:jt,useId:_0,useHostTransitionStatus:ih,useFormState:a0,useActionState:a0,useOptimistic:function(n,i){var a=je();return Gt!==null?Kg(a,Gt,n,i):(a.baseState=n,[n,a.queue.dispatch])},useMemoCache:Vi,useCacheRefresh:S0,useEffectEvent:c0},xp={enqueueSetState:function(n,i,a){n=n._reactInternals;var u=Ai(),d=rr(u);d.payload=i,a!=null&&(d.callback=a),i=vi(n,d,u),i!==null&&(yi(i,n,u),Ks(i,n,u))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var u=Ai(),d=rr(u);d.tag=1,d.payload=i,a!=null&&(d.callback=a),i=vi(n,d,u),i!==null&&(yi(i,n,u),Ks(i,n,u))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Ai(),u=rr(a);u.tag=2,i!=null&&(u.callback=i),i=vi(n,u,a),i!==null&&(yi(i,n,a),Ks(i,n,a))}},Mp=Error(o(461)),Mn=!1,wp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null},ei=!1,xc=!1,Ni=null,Mr=null,_i=0,Dn=!1,Ut=!1,wr=!1,Tp=!1,Ay=typeof WeakSet=="function"?WeakSet:Set,Fn=null,Tr=!1,Cl=!1,Mc=!1,Ep=!1,wn=null,Si=!1,ar=null,co=8192,LM={getCacheForType:function(n){var i=ut(an),a=i.data.get(n);return a===void 0&&(a=n(),i.data.set(n,a)),a},cacheSignal:function(){return ut(an).controller.signal}},wc=0,Tc=1,Ec=2,Ac=3,Rc=4;if(typeof Symbol=="function"&&Symbol.for){var Pl=Symbol.for;wc=Pl("selector.component"),Tc=Pl("selector.has_pseudo_class"),Ec=Pl("selector.role"),Ac=Pl("selector.test_id"),Rc=Pl("selector.text")}var kM=typeof WeakMap=="function"?WeakMap:Map,xt=0,$t=null,Mt=null,wt=0,Ht=0,Li=null,As=!1,ua=!1,Ap=!1,$r=0,gn=0,Rs=0,fo=0,Rp=0,ki=0,ca=0,Il=null,xi=null,Cp=!1,Cc=0,Ry=0,Nl=1/0,Pc=null,Cs=null,ln=0,lr=null,ho=null,Er=0,Pp=0,Ip=null,Cy=null,fa=null,da=null,ha=null,Ll=0,Ic=null;return St.attemptContinuousHydration=function(n){if(n.tag===13||n.tag===31){var i=ir(n,67108864);i!==null&&yi(i,n,67108864),Yh(n,67108864)}},St.attemptHydrationAtCurrentPriority=function(n){if(n.tag===13||n.tag===31){var i=Ai();i=W(i);var a=ir(n,i);a!==null&&yi(a,n,i),Yh(n,i)}},St.attemptSynchronousHydration=function(n){switch(n.tag){case 3:if(n=n.stateNode,n.current.memoizedState.isDehydrated){var i=S(n.pendingLanes);if(i!==0){for(n.pendingLanes|=2,n.entangledLanes|=2;i;){var a=1<<31-Ci(i);n.entanglements[1]|=a,i&=~a}de(n),(xt&6)===0&&(Nl=bi()+500,ue(0,!1))}}break;case 31:case 13:i=ir(n,2),i!==null&&yi(i,n,2),Tv(),Yh(n,2)}},St.batchedUpdates=function(n,i){return n(i)},St.createComponentSelector=function(n){return{$$typeof:wc,value:n}},St.createContainer=function(n,i,a,u,d,p,T,D,Q,fe){return Ov(n,i,!1,null,a,u,p,null,T,D,Q,fe)},St.createHasPseudoClassSelector=function(n){return{$$typeof:Tc,value:n}},St.createHydrationContainer=function(n,i,a,u,d,p,T,D,Q,fe,ge,Re,ke,yt){var Rt;return n=Ov(a,u,!0,n,d,p,D,yt,Q,fe,ge,Re),n.context=Bv(null),a=n.current,u=Ai(),u=W(u),d=rr(u),d.callback=(Rt=i)!=null?Rt:null,vi(a,d,u),i=u,n.current.lanes=i,M(n,i),de(n),n},St.createPortal=function(n,i,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$o,key:u==null?null:u===$v?$v:""+u,children:n,containerInfo:i,implementation:a}},St.createRoleSelector=function(n){return{$$typeof:Ec,value:n}},St.createTestNameSelector=function(n){return{$$typeof:Ac,value:n}},St.createTextSelector=function(n){return{$$typeof:Rc,value:n}},St.defaultOnCaughtError=function(n){console.error(n)},St.defaultOnRecoverableError=function(n){_y(n)},St.defaultOnUncaughtError=function(n){_y(n)},St.deferredUpdates=function(n){var i=Je.T,a=Gr();try{return Ln(32),Je.T=null,n()}finally{Ln(a),Je.T=i}},St.discreteUpdates=function(n,i,a,u,d){var p=Je.T,T=Gr();try{return Ln(2),Je.T=null,n(i,a,u,d)}finally{Ln(T),Je.T=p,xt===0&&(Nl=bi()+500)}},St.findAllNodes=Uh,St.findBoundingRects=function(n,i){if(!_l)throw Error(o(363));i=Uh(n,i),n=[];for(var a=0;a<i.length;a++)n.push(t1(i[a]));for(i=n.length-1;0<i;i--){a=n[i];for(var u=a.x,d=u+a.width,p=a.y,T=p+a.height,D=i-1;0<=D;D--)if(i!==D){var Q=n[D],fe=Q.x,ge=fe+Q.width,Re=Q.y,ke=Re+Q.height;if(u>=fe&&p>=Re&&d<=ge&&T<=ke){n.splice(i,1);break}else if(u!==fe||a.width!==Q.width||ke<p||Re>T){if(!(p!==Re||a.height!==Q.height||ge<u||fe>d)){fe>u&&(Q.width+=fe-u,Q.x=u),ge<d&&(Q.width=d-fe),n.splice(i,1);break}}else{Re>p&&(Q.height+=Re-p,Q.y=p),ke<T&&(Q.height=T-Re),n.splice(i,1);break}}}return n},St.findHostInstance=Hv,St.findHostInstanceWithNoPortals=function(n){return n=f(n),n=n!==null?m(n):null,n===null?null:bl(n.stateNode)},St.findHostInstanceWithWarning=function(n){return Hv(n)},St.flushPassiveEffects=yl,St.flushSyncFromReconciler=function(n){var i=xt;xt|=1;var a=Je.T,u=Gr();try{if(Ln(2),Je.T=null,n)return n()}finally{Ln(u),Je.T=a,xt=i,(xt&6)===0&&ue(0,!1)}},St.flushSyncWork=Tv,St.focusWithin=function(n,i){if(!_l)throw Error(o(363));for(n=kh(n),i=Sv(n,i),i=Array.from(i),n=0;n<i.length;){var a=i[n++],u=a.tag;if(!Sl(a)){if((u===5||u===26||u===27)&&r1(a.stateNode))return!0;for(a=a.child;a!==null;)i.push(a),a=a.sibling}}return!1},St.getFindAllNodesFailureDescription=function(n,i){if(!_l)throw Error(o(363));var a=0,u=[];n=[kh(n),0];for(var d=0;d<n.length;){var p=n[d++],T=p.tag,D=n[d++],Q=i[D];if((T!==5&&T!==26&&T!==27||!Sl(p))&&(Dh(p,Q)&&(u.push(Fh(Q)),D++,D>a&&(a=D)),D<i.length))for(p=p.child;p!==null;)n.push(p,D),p=p.sibling}if(a<i.length){for(n=[];a<i.length;a++)n.push(Fh(i[a]));return`findAllNodes was able to match part of the selector:
  `+(u.join(" > ")+`

No matching component was found for:
  `)+n.join(" > ")}return null},St.getPublicRootInstance=function(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 27:case 5:return bl(n.child.stateNode);default:return n.child.stateNode}},St.injectIntoDevTools=function(){var n={bundleType:0,version:Nx,rendererPackageName:Lx,currentDispatcherRef:Je,reconcilerVersion:"19.3.0"};if(Yv!==null&&(n.rendererConfig=Yv),typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u")n=!1;else{var i=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(i.isDisabled||!i.supportsFiber)n=!0;else{try{xl=i.inject(n),Pi=i}catch{}n=!!i.checkDCE}}return n},St.isAlreadyRendering=function(){return(xt&6)!==0},St.observeVisibleRects=function(n,i,a,u){if(!_l)throw Error(o(363));n=Uh(n,i);var d=s1(n,a,u).disconnect;return{disconnect:function(){d()}}},St.shouldError=function(){return null},St.shouldSuspend=function(){return!1},St.startHostTransition=function(n,i,a,u){if(n.tag!==5)throw Error(o(476));var d=b0(n).queue;y0(n,d,i,jo,a===null?s:function(){var p=b0(n);return p.next===null&&(p=n.alternate.memoizedState),cl(n,p.next.queue,{},Ai()),a(u)})},St.updateContainer=function(n,i,a,u){var d=i.current,p=Ai();return Vv(d,p,n,i,a,u),p},St.updateContainerSync=function(n,i,a,u){return Vv(i.current,2,n,i,a,u),2},St},r.exports.default=r.exports,Object.defineProperty(r.exports,"__esModule",{value:!0})})(Pg)),Pg.exports}var HC={exports:{}};HC.exports;var LS;function VC(){return LS||(LS=1,IS.exports=BC()),IS.exports}var GC=VC(),WC=OC(GC),Xd={},XC=0,jd=r=>`${r[0].toUpperCase()}${r.slice(1)}`;function qC(r){return r in Xd}function Vg(r){return Xd[r]}function Iu(r){if(typeof r=="function"){let e=`${XC++}`;return Xd[e]=r,e}else Object.assign(Xd,r)}function $C(r){let e=WC(r);return e.injectIntoDevTools(),e}var GS=0,YC=/^three(?=[A-Z])/;function WS(r,e){let t=jd(r),s=Vg(t);if(r!=="primitive"&&!s)throw new Error(`R3F: ${t} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);if(r==="primitive"&&!e.object)throw new Error("R3F: Primitives without 'object' are invalid!");if(e.args!==void 0&&!Array.isArray(e.args))throw new Error("R3F: The args prop must be an array!")}function jC(r,e,t){var s;return r=qC(jd(r))?r:r.replace(YC,""),WS(r,e),r==="primitive"&&(s=e.object)!=null&&s.__r3f&&delete e.object.__r3f,Vd(e.object,t,r,e)}function ZC(r){if(!r.isHidden){var e;r.props.attach&&(e=r.parent)!=null&&e.object?Wd(r.parent,r):gi(r.object)&&(r.previousVisible=r.object.visible,r.object.visible=!1),r.isHidden=!0,Pu(r)}}function XS(r){if(r.isHidden){var e;if(r.props.attach&&(e=r.parent)!=null&&e.object)Gd(r.parent,r);else if(gi(r.object)){var t;r.object.visible=(t=r.previousVisible)!=null?t:!0}r.previousVisible=void 0,r.isHidden=!1,Pu(r)}}function Gg(r,e,t){let s=e.root.getState();if(!(!r.parent&&r.object!==s.scene)){if(!e.object){var o,l;let c=Vg(jd(e.type));e.object=(o=e.props.object)!=null?o:new c(...(l=e.props.args)!=null?l:[]),e.object.__r3f=e}if(Xs(e.object,e.props),e.props.attach)Gd(r,e);else if(gi(e.object)&&gi(r.object)){let c=r.object.children.indexOf(t?.object);if(t&&c!==-1){let f=r.object.children.indexOf(e.object);if(f!==-1){r.object.children.splice(f,1);let h=f<c?c-1:c;r.object.children.splice(h,0,e.object)}else e.object.parent=r.object,r.object.children.splice(c,0,e.object),e.object.dispatchEvent({type:"added"}),r.object.dispatchEvent({type:"childadded",child:e.object})}else r.object.add(e.object)}for(let c of e.children)Gg(e,c);Pu(e)}}function xg(r,e){if(e){if(e.parent===r){let t=r.children.indexOf(e);t!==-1&&r.children.splice(t,1)}e.parent=r,r.children.push(e),Gg(r,e)}}function kS(r,e,t){if(!e||!t)return;if(e.parent===r){let o=r.children.indexOf(e);o!==-1&&r.children.splice(o,1)}e.parent=r;let s=r.children.indexOf(t);s!==-1?r.children.splice(s,0,e):r.children.push(e),Gg(r,e,t)}function qS(r){if(typeof r.dispose=="function"){let e=()=>{try{r.dispose()}catch{}};typeof IS_REACT_ACT_ENVIRONMENT<"u"?e():(0,Zn.unstable_scheduleCallback)(Zn.unstable_IdlePriority,e)}}function Ig(r,e,t){if(!e)return;let s=!!e.parent;e.parent=null;let o=r.children.indexOf(e);o!==-1&&r.children.splice(o,1),e.props.attach?Wd(r,e):gi(e.object)&&gi(r.object)&&(r.object.remove(e.object),MC(Dg(e),e.object));let l=e.props.dispose!==null&&t!==!1;for(let f=e.children.length-1;f>=0;f--){let h=e.children[f];Ig(e,h,l)}if(e.children.length=0,delete e.object.__r3f,l&&e.type!=="primitive"&&e.object.type!=="Scene"&&qS(e.object),t===void 0&&s){var c;let f=(c=e.root)==null||c.getState==null?void 0:c.getState();f&&f.internal.frames===0&&f.invalidate()}}function JC(r,e){for(let t of[r,r.alternate])if(t!==null)if(typeof t.ref=="function"){t.refCleanup==null||t.refCleanup();let s=t.ref(e);typeof s=="function"&&(t.refCleanup=s)}else t.ref&&(t.ref.current=e)}var Cu=[];function KC(){if(Cu.length!==0)try{QC()}finally{Cu.length=0}}function QC(){for(let[t]of Cu){let s=t.parent;if(s){t.props.attach?Wd(s,t):gi(t.object)&&gi(s.object)&&s.object.remove(t.object);for(let o of t.children)o.props.attach?Wd(t,o):gi(o.object)&&gi(t.object)&&t.object.remove(o.object)}t.isHidden&&XS(t),t.object.__r3f&&delete t.object.__r3f,t.type!=="primitive"&&qS(t.object)}for(let[t,s,o]of Cu){t.props=s;let l=t.parent;if(l){var r,e;let c=Vg(jd(t.type)),f=t.object;t.object=(r=t.props.object)!=null?r:new c(...(e=t.props.args)!=null?e:[]),t.object.__r3f=t,JC(o,t.object),xC(Dg(t),f,t.object),Xs(t.object,t.props),t.props.attach?Gd(l,t):gi(t.object)&&gi(l.object)&&l.object.add(t.object);for(let h of t.children)h.props.attach?Gd(t,h):gi(h.object)&&gi(t.object)&&t.object.add(h.object);Pu(t)}}}var Mg=()=>{},DS={},Bd=GS;function eP(r){switch(r){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return PS;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return CS;case"message":switch((0,Zn.unstable_getCurrentPriorityLevel)()){case Zn.unstable_ImmediatePriority:return PS;case Zn.unstable_UserBlockingPriority:return CS;case Zn.unstable_NormalPriority:case Zn.unstable_LowPriority:return Hd;case Zn.unstable_IdlePriority:return LC;default:return Hd}default:return Hd}}function tP(r){typeof queueMicrotask=="function"?queueMicrotask(r):typeof Promise<"u"?Promise.resolve().then(r).catch(e=>{setTimeout(()=>{throw e})}):setTimeout(r)}var Fo=$C({isPrimaryRenderer:!1,warnsIfNotActing:!1,supportsMutation:!0,supportsPersistence:!1,supportsHydration:!1,createInstance:jC,removeChild:Ig,appendChild:xg,appendInitialChild:xg,insertBefore:kS,appendChildToContainer(r,e){let t=r.getState().scene.__r3f;!e||!t||xg(t,e)},removeChildFromContainer(r,e){let t=r.getState().scene.__r3f;!e||!t||Ig(t,e)},insertInContainerBefore(r,e,t){let s=r.getState().scene.__r3f;!e||!t||!s||kS(s,e,t)},getRootHostContext:()=>DS,getChildHostContext:()=>DS,commitUpdate(r,e,t,s,o){var l,c,f;WS(e,s);let h=!1;if((r.type==="primitive"&&t.object!==s.object||((l=s.args)==null?void 0:l.length)!==((c=t.args)==null?void 0:c.length)||(f=s.args)!=null&&f.some((m,g)=>{var _;return m!==((_=t.args)==null?void 0:_[g])}))&&(h=!0),h)Cu.push([r,Rg(s),o]);else{let m=gC(r,s),g=r.props.attach;r.props=Rg(s),g!==void 0?r.props.attach=g:delete r.props.attach,Object.keys(m).length&&Xs(r.object,m)}},finalizeInitialChildren:()=>!1,commitMount(){},getPublicInstance:r=>r?.object,prepareForCommit:()=>null,preparePortalMount:r=>Vd(r.getState().scene,r,"",{}),resetAfterCommit:KC,shouldSetTextContent:()=>!1,clearContainer:()=>!1,hideInstance:ZC,unhideInstance:XS,createTextInstance:Mg,hideTextInstance:Mg,unhideTextInstance:Mg,supportsMicrotasks:!0,scheduleMicrotask:tP,scheduleTimeout:typeof setTimeout=="function"?setTimeout:void 0,cancelTimeout:typeof clearTimeout=="function"?clearTimeout:void 0,noTimeout:-1,getInstanceFromNode:()=>null,beforeActiveInstanceBlur(){},afterActiveInstanceBlur(){},detachDeletedInstance(){},prepareScopeUpdate(){},getInstanceFromScope:()=>null,shouldAttemptEagerTransition:()=>!1,trackSchedulerEvent:()=>{},resolveEventType:()=>null,resolveEventTimeStamp:()=>-1.1,requestPostPaintCallback(){},maySuspendCommit:()=>!1,preloadInstance:()=>!0,suspendInstance(){},waitForCommitToBeReady:()=>null,NotPendingTransition:null,HostTransitionContext:nn.createContext(null),setCurrentUpdatePriority(r){Bd=r},getCurrentUpdatePriority(){return Bd},resolveUpdatePriority(){var r;if(Bd!==GS)return Bd;let e=typeof window<"u"?(r=window.event)==null?void 0:r.type:void 0;return e===void 0?Hd:eP(e)},resetFormInstance(){},rendererPackageName:"@react-three/fiber",rendererVersion:zC.version,applyViewTransitionName(r,e,t){},restoreViewTransitionName(r,e){},cancelViewTransitionName(r,e,t){},cancelRootViewTransitionName(r){},restoreRootViewTransitionName(r){},InstanceMeasurement:null,measureInstance:r=>null,wasInstanceInViewport:r=>!0,hasInstanceChanged:(r,e)=>!1,hasInstanceAffectedParent:(r,e)=>!1,suspendOnActiveViewTransition(r,e){},startViewTransition(r,e,t,s,o,l,c,f,h,m,g){return s(),o(),g?.(),c(),null},startGestureTransition(r,e,t,s,o,l,c,f,h,m){return c(),f(),m?.(),null},stopViewTransition(r){},addViewTransitionFinishedListener(r,e){e()},createViewTransitionInstance:r=>null,getCurrentGestureOffset(r){throw new Error("startGestureTransition is not yet supported in react-three-fiber.")},cloneMutableInstance(r,e){return r},cloneMutableTextInstance(r){return r},cloneRootViewTransitionContainer(r){throw new Error("Not implemented.")},removeRootViewTransitionClone(r,e){throw new Error("Not implemented.")},createFragmentInstance:r=>null,updateFragmentInstanceFiber(r,e){},commitNewChildToFragmentInstance(r,e){},deleteChildFromFragmentInstance(r,e){},measureClonedInstance:r=>null,maySuspendCommitOnUpdate:(r,e,t)=>!1,maySuspendCommitInSyncRender:(r,e)=>!1,startSuspendingCommit:()=>null,getSuspendedCommitReason:(r,e)=>null});var hs=new Map;function qd(r,e){let t=r.state;switch(e.type){case"use":return t.status==="disposed"?!1:(r.state={status:"open"},!0);case"unmount":return t.status==="disposed"?!1:(r.state={status:"closing",token:e.token},!0);case"dispose":return t.status!=="closing"||t.token!==e.token?!1:(r.state={status:"disposed"},!0)}}function Nu(r){let e=hs.get(r),t=e?.fiber,s=e?.store;e&&console.warn("R3F.createRoot should only be called once!");let o=typeof reportError=="function"?reportError:console.error,l=s||PC(Tt,Wg),c=t||Fo.createContainer(l,NC,null,!1,null,"",o,o,o,null),f=e||{fiber:c,store:l,state:{status:"open"},ready:wC(void 0),configuration:{},ownsRenderer:!1};e||hs.set(r,f);let h=!1;return{get ready(){return f.ready},configure(m={}){if(!qd(f,{type:"use"}))return TC(new Error("R3F: Cannot configure a root after disposal has started."));let g=f.ready,{promise:_,resolve:b,reject:v}=EC();f.ready=_;let x=S=>{let y=l.getState();y.gl||(f.ownsRenderer=!zg(m.gl),y.set({gl:S})),FC(f,r,m),!f.unwatchDpr&&(m.dpr===void 0||Array.isArray(m.dpr))&&(f.unwatchDpr=UC(f)),b(this)},A=()=>{try{var S;let y=(S=l.getState().gl)!=null?S:AC(r,m.gl);Ug(y)?Promise.resolve(y).then(x).catch(v):x(y)}catch(y){v(y)}};return g.status==="pending"?g.then(A,v):A(),_},render(m){if(!qd(f,{type:"use"}))return l;if(!l.getState().gl&&f.ready.status==="fulfilled"&&this.configure(),f.ready.status==="rejected")throw f.ready.reason;let g=()=>{var _;if(f.state.status!=="open"||f.ready.status==="rejected")return;if(f.ready.status==="pending"){f.ready.then(g,o);return}let b=(_=f.configuration.previous)==null?void 0:_.onCreated,v=(0,Yd.jsx)(nP,{store:l,children:m,onCreated:b,rootElement:r});if(h){Fo.updateContainer(v,c,null,TS);return}h=!0,Fo.updateContainerSync(v,c,null,TS),Fo.flushSyncWork()};return g(),l},unmount(){hs.get(r)===f&&$S(r)}}}function nP({store:r,children:e,onCreated:t,rootElement:s}){return kg(()=>{let o=r.getState();o.set(l=>({internal:{...l.internal,active:!0}})),t&&t(o),r.getState().events.connected||o.events.connect==null||o.events.connect(s)},[]),(0,Yd.jsx)(Og.Provider,{value:r,children:e})}function Eu(r){try{return r()}catch(e){console.warn("[R3F] Error while unmounting root; teardown may be incomplete:",e)}}function $S(r,e){let t=hs.get(r),s=Symbol("unmount");if(!t||!qd(t,{type:"unmount",token:s}))return;let o=()=>{var l;if(t.ready.status==="pending"){t.ready.then(o,o);return}if(!qd(t,{type:"dispose",token:s}))return;hs.delete(r);let c=t.store.getState();c.internal.active=!1,Eu(()=>t.unwatchDpr==null?void 0:t.unwatchDpr()),Eu(()=>c.events.disconnect==null?void 0:c.events.disconnect()),(l=c.gl)!=null&&l.xr&&Eu(()=>c.xr.disconnect()),c.scene&&Eu(()=>BS(c.scene));let f=Eu(()=>CC(c.gl,t.ownsRenderer));Ug(f)?f.then(()=>e?.(r)):e?.(r)};Fo.updateContainer(null,t.fiber,null,()=>{t.state.status!=="closing"||t.state.token!==s||Fo.updateContainer(null,t.fiber,null,o)})}var iP=new Set,rP=new Set,sP=new Set;function wg(r,e){if(r.size)for(let{callback:t}of r.values())t(e)}function rl(r,e){switch(r){case"before":return wg(iP,e);case"after":return wg(rP,e);case"tail":return wg(sP,e)}}var Tg,Eg;function Ng(r,e,t){let s=e.clock.getDelta();e.frameloop==="never"&&typeof r=="number"&&(s=r-e.clock.elapsedTime,e.clock.oldTime=e.clock.elapsedTime,e.clock.elapsedTime=r),Tg=e.internal.subscribers;for(let o=0;o<Tg.length;o++)Eg=Tg[o],Eg.ref.current(Eg.store.getState(),s,t);return!e.internal.priority&&e.gl.render&&e.gl.render(e.scene,e.camera),e.internal.frames=Math.max(0,e.internal.frames-1),e.frameloop==="always"?1:e.internal.frames}var $d=!1,Lg=!1,Ag,FS,il;function YS(r){FS=requestAnimationFrame(YS),$d=!0,Ag=0,rl("before",r),Lg=!0;for(let t of hs.values()){var e;il=t.store.getState(),il.internal.active&&(il.frameloop==="always"||il.internal.frames>0)&&!((e=il.gl.xr)!=null&&e.isPresenting)&&(Ag+=Ng(r,il))}if(Lg=!1,rl("after",r),Ag===0)return rl("tail",r),$d=!1,cancelAnimationFrame(FS)}function Tt(r,e=1){var t;if(!r)return hs.forEach(s=>Tt(s.store.getState(),e));(t=r.gl.xr)!=null&&t.isPresenting||!r.internal.active||r.frameloop==="never"||(e>1?r.internal.frames=Math.min(60,r.internal.frames+e):Lg?r.internal.frames=2:r.internal.frames=1,$d||($d=!0,requestAnimationFrame(YS)))}function Wg(r,e=!0,t,s){if(e&&rl("before",r),t)Ng(r,t,s);else for(let o of hs.values())Ng(r,o.store.getState());e&&rl("after",r)}var qs=fi(Yr());var jS=fi(ko());var PL=fi(Sg());var $s=fi(Yr());var Cn=(r,e,t)=>new Dr(r,e,t),Lu=(r,e,t=18)=>new Mo(r,r,e,t),st={rail:Cn(28,2,2),railZ:Cn(2,2,24),cross:Cn(2,1.5,24),bellypan:Cn(24,.25,24),footprint:Cn(34,.05,34),wheel:Lu(2,1.6,20),module:Cn(5,3,5),motor:Lu(1.05,3.6,16),tower:Cn(2,40,2),inner:Cn(1.4,30,1.4),topbar:Cn(16,1.6,1.6),chain:Cn(.3,36,.3),gearbox:Lu(1.4,4,16),carriage:Cn(14,3,2),roller:Lu(1.1,22,16),arm:Cn(2,1.5,9),sideplate:Cn(.5,6,9),board:Cn(18,.3,13),rio:Cn(5,1.2,4),pdh:Cn(6,1.4,5),battery:Cn(7,6,3),radio:Cn(4,1,2.6),breaker:Lu(.8,1.2,14),bumperX:Cn(34,5,3),bumperZ:Cn(3,5,28),plate:new ls(14,3.2)},Xg=new Map,sl=r=>(Xg.has(r)||Xg.set(r,new tu(r,20)),Xg.get(r)),ku=Math.PI/2,Zd=[{at:.16,drop:8,items:[[st.rail,[0,3,13]],[st.rail,[0,3,-13]],[st.railZ,[13,3,0]],[st.railZ,[-13,3,0]],[st.cross,[-4,2.75,0]],[st.cross,[4,2.75,0]],[st.bellypan,[0,2.1,0],null,"dark"]]},{at:.33,drop:10,items:[13,-13].flatMap(r=>[13,-13].flatMap(e=>{let t=r*.86,s=e*.86;return[[st.module,[t,4.5,s]],[st.wheel,[t,2,s],[0,0,ku],"dark"],[st.motor,[t-1.2,7.6,s],null,"dark"],[st.motor,[t+1.3,7.6,s+.4],null,"dark"]]}))},{at:.5,drop:14,items:[[st.tower,[-7,22,-6]],[st.tower,[7,22,-6]],[st.inner,[-5.4,26,-6]],[st.inner,[5.4,26,-6]],[st.topbar,[0,41.3,-6]],[st.chain,[-7,22,-4.8],null,"dark"],[st.chain,[7,22,-4.8],null,"dark"],[st.gearbox,[0,5.6,-8],[0,0,ku],"dark"],[st.carriage,[0,30,-4.5]],[st.arm,[-6,30,.5]],[st.arm,[6,30,.5]],[st.roller,[0,30,5],[0,0,ku],"dark"],[st.roller,[0,4.5,15.5],[0,0,ku],"dark"],[st.roller,[0,8,14],[0,0,ku],"dark"],[st.sideplate,[-11.3,6,13]],[st.sideplate,[11.3,6,13]]]},{at:.66,drop:8,items:[[st.board,[0,4.4,2]],[st.rio,[-4,5.2,3]],[st.pdh,[4.5,5.2,1]],[st.radio,[4.5,5.1,6]],[st.breaker,[-6.5,5.2,-1.5],null,"dark"],[st.battery,[0,6.5,9],null,"dark"]]},{at:.82,drop:8,items:[[st.bumperX,[0,3.5,16.5],null,"bumper"],[st.bumperX,[0,3.5,-16.5],null,"bumper"],[st.bumperZ,[16.5,3.5,0],null,"bumper"],[st.bumperZ,[-16.5,3.5,0],null,"bumper"]],plates:!0}];function Jd(){let r=document.createElement("canvas");r.width=512,r.height=118;let e=r.getContext("2d");e.fillStyle="#ffffff",e.textAlign="center",e.textBaseline="middle",e.font='italic 900 104px Saira, "Arial Narrow", sans-serif',e.fillText("11745",256,64);let t=new Kl(r);return t.colorSpace=An,t.anisotropy=4,t}var cn=fi(ko());Iu({Group:dr,Mesh:jn,LineSegments:xo,AmbientLight:Eo,DirectionalLight:To});var Ct={target:0,p:0,tiltX:0,tiltY:0,tx:0,ty:0,visible:!0,still:!1},qg=new We("#C9A6FF"),oP=new We("#E9B949"),aP=new We("#6B2FD6"),lP=r=>1-Math.pow(1-r,3),$g=r=>r<0?0:r>1?1:r,ZS=new H(0,21,0),uP=new H(70,52,78).normalize(),cP=31;function fP(){let r=Rn(s=>s.camera),e=Rn(s=>s.size.width),t=Rn(s=>s.size.height);return(0,$s.useLayoutEffect)(()=>{if(!e||!t)return;let s=r.fov*Math.PI/180,o=2*Math.atan(Math.tan(s/2)*(e/t)),l=cP/Math.sin(Math.min(s,o)/2);r.position.copy(uP).multiplyScalar(l).add(ZS),r.lookAt(ZS),r.updateProjectionMatrix(),Tt()},[r,e,t]),null}function dP({at:r,drop:e,items:t,plates:s}){let o=(0,$s.useRef)(),l=(0,$s.useMemo)(()=>({line:new kr({color:qg.clone(),transparent:!0,opacity:.12}),frame:new Mi({color:"#241638",metalness:.55,roughness:.45,transparent:!0,opacity:0}),dark:new Mi({color:"#0f0b16",metalness:.2,roughness:.8,transparent:!0,opacity:0}),bumper:new Mi({color:aP.clone(),metalness:0,roughness:.9,transparent:!0,opacity:0}),plate:s?new Lr({map:Jd(),transparent:!0,opacity:0,depthWrite:!1}):null}),[s]);return er(()=>{let c=$g((Ct.p-r)/.12),f=lP(c),h=$g((Ct.p-.9)/.08);o.current.position.y=c>0?(1-f)*e:0,l.line.opacity=.12+.88*f,l.line.color.copy(qg).lerp(oP,h),l.frame.opacity=.85*f,l.dark.opacity=.95*f,l.bumper.opacity=.97*f,l.plate&&(l.plate.opacity=f)}),(0,cn.jsxs)("group",{ref:o,children:[t.map(([c,f,h,m="frame"],g)=>(0,cn.jsxs)("group",{position:f,rotation:h||[0,0,0],children:[(0,cn.jsx)("mesh",{geometry:c,material:l[m]}),(0,cn.jsx)("lineSegments",{geometry:sl(c),material:l.line})]},g)),s&&(0,cn.jsxs)(cn.Fragment,{children:[(0,cn.jsx)("mesh",{geometry:st.plate,material:l.plate,position:[0,3.5,18.06]}),(0,cn.jsx)("mesh",{geometry:st.plate,material:l.plate,position:[0,3.5,-18.06],rotation:[0,Math.PI,0]})]})]})}function hP(){let r=(0,$s.useMemo)(()=>new kr({color:qg.clone(),transparent:!0,opacity:.35}),[]);return(0,cn.jsx)("lineSegments",{geometry:sl(st.footprint),material:r,position:[0,0,0]})}function pP(){let r=(0,$s.useRef)();return er((e,t)=>{let s=Ct.still?1:1-Math.exp(-t*7);Ct.p+=(Ct.target-Ct.p)*s,Ct.tiltX+=(Ct.tx-Ct.tiltX)*s,Ct.tiltY+=(Ct.ty-Ct.tiltY)*s,r.current.rotation.y=.65+Ct.p*Math.PI*1.25+Ct.tiltY*.35,r.current.rotation.x=Ct.tiltX*.12,(Math.abs(Ct.target-Ct.p)>4e-4||Math.abs(Ct.tx-Ct.tiltX)>.001||Math.abs(Ct.ty-Ct.tiltY)>.001)&&Ct.visible&&Tt()}),(0,cn.jsxs)("group",{ref:r,children:[(0,cn.jsx)(hP,{}),Zd.map((e,t)=>(0,cn.jsx)(dP,{...e},t))]})}function mP(){return(0,cn.jsxs)(cn.Fragment,{children:[(0,cn.jsx)("ambientLight",{intensity:.7}),(0,cn.jsx)("directionalLight",{position:[30,60,40],intensity:2.2}),(0,cn.jsx)("directionalLight",{position:[-40,20,-30],intensity:1.4,color:"#8B3DFF"}),(0,cn.jsx)(pP,{}),(0,cn.jsx)(fP,{})]})}window.Robot3D={mount(r,{reduce:e=!1,label:t=""}={}){let s=document.createElement("canvas");s.className="robot3d",s.setAttribute("role","img"),t&&s.setAttribute("aria-label",t),r.prepend(s),Ct.still=e;let o=Nu(s),l=()=>{let c=r.getBoundingClientRect();o.configure({size:{width:c.width,height:c.height,top:0,left:0},dpr:Math.min(window.devicePixelRatio||1,2),frameloop:"demand",flat:!0,gl:{antialias:!0,alpha:!0,powerPreference:"high-performance",toneMapping:si},camera:{fov:30,near:1,far:800}}),Tt()};return l(),o.render((0,cn.jsx)(mP,{})),new ResizeObserver(l).observe(r),new IntersectionObserver(([c])=>{Ct.visible=c.isIntersecting,Ct.visible&&Tt()},{rootMargin:"100px"}).observe(r),!e&&matchMedia("(hover: hover) and (pointer: fine)").matches&&(r.addEventListener("pointermove",c=>{let f=r.getBoundingClientRect();Ct.ty=((c.clientX-f.left)/f.width-.5)*2,Ct.tx=((c.clientY-f.top)/f.height-.5)*2,Tt()}),r.addEventListener("pointerleave",()=>{Ct.tx=0,Ct.ty=0,Tt()})),document.fonts?.ready.then(()=>Tt()),!0},setProgress(r){Ct.target=$g(r),Ct.still&&(Ct.p=Ct.target),Tt()}};var kt=fi(Yr());var Qe=fi(ko());Iu({Group:dr,Mesh:jn,LineSegments:xo,InstancedMesh:Zl,AmbientLight:Eo,DirectionalLight:To});var Ys=r=>r<0?0:r>1?1:r,ol=r=>r>=1?1:1-Math.pow(2,-10*r),gP=r=>1-Math.pow(1-r,3),vP=r=>({reduce:r,t0:performance.now(),drag:!1,vx:0,rotY:0,px:9,py:9,onScreen:!0});function JS(r,e,t){return r.drag||(r.vx*=Math.exp(-e*3.2),r.rotY+=r.vx*e+(r.reduce?0:t*e)),r.drag||Math.abs(r.vx)>.002||!r.reduce&&t!==0}var yP={paper:{frame:"#ffffff",dark:"#dedad2",bumper:"#5E2A84",line:"#15121b",lineOp:.9,plate:!0,amb:1.1,key:1.6,fill:"#ffffff"},night:{frame:"#1b1820",dark:"#0e0d11",bumper:"#5E2A84",line:"#efece6",lineOp:.42,plate:!0,amb:.55,key:2.4,fill:"#8B3DFF"},clay:{frame:"#f3efe7",dark:"#d8d1c3",bumper:"#E9B949",line:"#2a1640",lineOp:.35,plate:!0,amb:.9,key:2,fill:"#ffffff"}},bP=new H(0,21,0),_P=new H(70,40,78).normalize(),SP=31;function KS({center:r=bP,view:e=_P,radius:t=SP,scale:s=1}){let o=Rn(f=>f.camera),l=Rn(f=>f.size.width),c=Rn(f=>f.size.height);return(0,kt.useLayoutEffect)(()=>{if(!l||!c)return;let f=o.fov*Math.PI/180,h=2*Math.atan(Math.tan(f/2)*(l/c)),m=t*s/Math.sin(Math.min(f,h)/2);o.position.copy(e).multiplyScalar(m).add(r),o.lookAt(r),o.updateProjectionMatrix(),Tt()},[o,l,c]),null}function xP({part:r,T:e,I:t}){let s=(0,kt.useRef)(),o=(0,kt.useMemo)(()=>({line:new kr({color:e.line,transparent:!0,opacity:0}),frame:new Mi({color:e.frame,roughness:.75,metalness:.05,transparent:!0,opacity:0}),dark:new Mi({color:e.dark,roughness:.9,transparent:!0,opacity:0}),bumper:new Mi({color:e.bumper,roughness:.85,transparent:!0,opacity:0}),plate:r.plates?new Lr({map:Jd(),transparent:!0,opacity:0,depthWrite:!1}):null}),[]);return er(()=>{let l=t.reduce?1:Ys((performance.now()-t.t0-250)/2200),c=Ys((l-r.at*.9)/.16),f=gP(c);s.current.position.y=(1-f)*r.drop*1.4,o.line.opacity=e.lineOp*f,o.frame.opacity=f,o.dark.opacity=f,o.bumper.opacity=f,o.frame.transparent=o.dark.transparent=o.bumper.transparent=f<1,o.plate&&(o.plate.opacity=f)}),(0,Qe.jsxs)("group",{ref:s,children:[r.items.map(([l,c,f,h="frame"],m)=>(0,Qe.jsxs)("group",{position:c,rotation:f||[0,0,0],children:[(0,Qe.jsx)("mesh",{geometry:l,material:o[h]}),(0,Qe.jsx)("lineSegments",{geometry:sl(l),material:o.line})]},m)),r.plates&&(0,Qe.jsxs)(Qe.Fragment,{children:[(0,Qe.jsx)("mesh",{geometry:st.plate,material:o.plate,position:[0,3.5,18.06]}),(0,Qe.jsx)("mesh",{geometry:st.plate,material:o.plate,position:[0,3.5,-18.06],rotation:[0,Math.PI,0]})]})]})}function MP({T:r,I:e,opts:t}){let s=(0,kt.useRef)(),o=(0,kt.useMemo)(()=>new kr({color:r.line,transparent:!0,opacity:r.lineOp*.45}),[]);return er((l,c)=>{let f=JS(e,c,.16);s.current.rotation.y=.55+e.rotY;let h=performance.now()-e.t0<2800;(f||h)&&e.onScreen&&Tt()}),(0,Qe.jsxs)(Qe.Fragment,{children:[(0,Qe.jsx)("ambientLight",{intensity:r.amb}),(0,Qe.jsx)("directionalLight",{position:[30,70,50],intensity:r.key}),(0,Qe.jsx)("directionalLight",{position:[-50,20,-30],intensity:.9,color:r.fill}),(0,Qe.jsxs)("group",{ref:s,children:[(0,Qe.jsx)("lineSegments",{geometry:sl(st.footprint),material:o}),Zd.map((l,c)=>(0,Qe.jsx)(xP,{part:l,T:r,I:e},c))]}),(0,Qe.jsx)(KS,{scale:t.fit||1})]})}var wP={paper:{rim:"#C9A04A",amb:1.2,key:1.8},night:{rim:"#E9B949",amb:.8,key:2.6}},TP=()=>new Va({color:"#8a5cff",metalness:1,roughness:.08,clearcoat:1,clearcoatRoughness:.03,iridescence:1,iridescenceIOR:1.45,iridescenceThicknessRange:[240,780],envMapIntensity:2.2,side:wi});function EP({I:r,opts:e}){let t=Rn(h=>h.gl),s=Rn(h=>h.scene),o=(0,kt.useRef)(),{geo:l,mat:c}=(0,kt.useMemo)(()=>{let m=Array.from({length:16},(_,b)=>{let v=b/16*Math.PI*2;return new H(Math.cos(v)*18.5,Math.sin(v)*18.5,0)}),g=new Ha(m,!0,"catmullrom",.5);return{geo:jg({curve:g,closed:!0,len:400,cols:22,width:4.4,curl:2.2,twist:4,phase:.6,pulse:.3}),mat:TP()}},[]);(0,kt.useLayoutEffect)(()=>{s.environment=QS(t),Tt()},[t]);let f=l.index.count;return er(()=>{let h=r.reduce?1:Ys((performance.now()-r.t0-500)/1900),m=ol(h);l.setDrawRange(0,Math.max(6,Math.floor(f*m/6)*6)),o.current.rotation.set(.5+(r.ly||0)*.35,(r.lx||0)*.55,-.25+(1-m)*.8),r.onScreen&&h<1&&Tt()}),(0,Qe.jsx)("group",{ref:o,position:[0,0,-7],children:(0,Qe.jsx)("mesh",{geometry:l,material:c})})}var Yg=(r,e,t,s)=>new pi({transparent:!0,depthWrite:!1,blending:cu,toneMapped:!1,uniforms:{uColor:{value:new We(r)},uR:{value:e},uW:{value:t},uK:{value:s}},vertexShader:"varying vec2 vP; void main(){ vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform vec3 uColor; uniform float uR, uW, uK; varying vec2 vP; void main(){ float d = abs(length(vP) - uR); float a = exp(-d * d / (uW * uW)) * uK; gl_FragColor = vec4(uColor * a, a); }"});function AP({gref:r}){let e=(0,kt.useMemo)(()=>({plane:new nu(9.6,17,160,1),line:Yg("#e9b949",10.95,.09,1.2),halo:Yg("#8b3dff",12.6,.16,1.35),soft:Yg("#6b2fd6",12.6,1.5,.35)}),[]);return(0,kt.useLayoutEffect)(()=>{r.current.userData.tick=(t,s)=>{let o=.82+.18*Math.sin(t*1.4);e.line.uniforms.uK.value=1.2*s,e.halo.uniforms.uK.value=1.35*s*o,e.soft.uniforms.uK.value=.35*s*o}},[]),(0,Qe.jsxs)("group",{ref:r,position:[0,0,-.9],children:[(0,Qe.jsx)("mesh",{geometry:e.plane,material:e.soft}),(0,Qe.jsx)("mesh",{geometry:e.plane,material:e.halo}),(0,Qe.jsx)("mesh",{geometry:e.plane,material:e.line})]})}function RP({T:r,I:e,opts:t}){let s=(0,kt.useRef)(),o=(0,kt.useRef)(),l=(0,kt.useMemo)(()=>{let f=new ou().load(t.badge||"../../assets/badge-520.webp",()=>Tt());f.colorSpace=An,f.anisotropy=8,f.center.set(.5,.5),f.rotation=Math.PI/2;let h=f.clone();h.needsUpdate=!0,h.repeat.set(-1,1);let m=new Mi({color:r.rim,metalness:.6,roughness:.35}),g=_=>new Lr({map:_,toneMapped:!1});return{rim:m,faces:[m,g(f),g(h)]}},[]),c=(0,kt.useMemo)(()=>({disc:new Mo(10,10,1.2,96),ring:new ru(10,.45,18,120)}),[]);return er((f,h)=>{let m=e.reduce?1:Ys((performance.now()-e.t0-150)/1600),g=ol(m),_=JS(e,h,0),b=!(e.reduce||t.still),v=b?Math.sin((performance.now()-e.t0)/1600)*.16:0,x=Math.abs(e.px)<4&&Math.abs(e.py)<4,A=t.tilt&&x?Math.max(-1,Math.min(1,e.px))*.42:0,S=t.tilt&&x?Math.max(-1,Math.min(1,e.py))*-.32:0,y=1-Math.exp(-h*6);e.lx=(e.lx||0)+(A-(e.lx||0))*y,e.ly=(e.ly||0)+(S-(e.ly||0))*y;let w=Math.abs(A-e.lx)>.001||Math.abs(S-e.ly)>.001;if(t.fixed){let L=(performance.now()-e.t0)/1e3,C=e.reduce?0:Math.sin(L*1.1)*.35;s.current.rotation.set(0,0,0),s.current.position.y=C-(1-g)*1.5,s.current.scale.setScalar(.94+.06*g),o.current&&(o.current.position.y=C,o.current.userData.tick(L,g)),e.onScreen&&(!e.reduce||w||m<1)&&Tt();return}s.current.rotation.y=(1-g)*-Math.PI*3+e.rotY+v*g+e.lx,s.current.rotation.x=(1-g)*.6+(b?Math.cos((performance.now()-e.t0)/2100)*.05*g:0)+e.ly,s.current.scale.setScalar(.7+.3*g),e.onScreen&&(b||_||w||m<1)&&Tt()}),(0,Qe.jsxs)(Qe.Fragment,{children:[(0,Qe.jsx)("ambientLight",{intensity:r.amb}),(0,Qe.jsx)("directionalLight",{position:[20,30,40],intensity:r.key}),(0,Qe.jsx)("directionalLight",{position:[-30,-10,20],intensity:.6}),(0,Qe.jsxs)("group",{ref:s,children:[(0,Qe.jsx)("mesh",{geometry:c.disc,material:l.faces,rotation:[Math.PI/2,0,0]}),(0,Qe.jsx)("mesh",{geometry:c.ring,material:l.rim})]}),t.glow&&(0,Qe.jsx)(AP,{gref:o}),t.halo&&(0,Qe.jsx)(EP,{I:e,opts:t}),(0,Qe.jsx)(KS,{center:new H(0,0,0),view:new H(0,0,1),radius:t.halo?21:11.5,scale:t.fit||1})]})}var CP={field:{unit:"#1c1924",hot:"#8B3DFF",lead:"#E9B949",amb:.55,key:2.4},paper:{unit:"#17141d",hot:"#6B2FD6",lead:"#E9B949",amb:1,key:1.7},night:{unit:"#2a2631",hot:"#8B3DFF",lead:"#E9B949",amb:.7,key:2.2}};function PP({T:r,I:e,opts:t}){let s=(0,kt.useRef)(),o=Rn(S=>S.size),l=Rn(S=>S.camera),c=t.cols||26,f=t.rows||12,h=c*f,m=t.gap||3.2,g=t.zShift||0,_=Rn(S=>S.scene),b=(0,kt.useMemo)(()=>{let S=(y,w)=>y+Math.random()*(w-y);return Array.from({length:h},(y,w)=>{let L=w%c,C=Math.floor(w/c);return{x:(L-(c-1)/2)*m,z:(C-(f-1)/2)*m+g,sx:S(-50,50),sy:S(18,60),sz:S(-40,30),rx:S(-3,3),ry:S(-3,3),delay:C*.07+L*.012+S(0,.08),h:0}})},[]),v=(0,kt.useMemo)(()=>({o:new On,c:new We,unit:new We(r.unit),hot:new We(r.hot),lead:new We(r.lead),ray:new Ao,plane:new Ui(new H(0,1,0),0),hit:new H(99,0,99),v2:new lt}),[]),x=(0,kt.useMemo)(()=>new Dr(1.7,1.1,1.7),[]),A=(0,kt.useMemo)(()=>new Mi({roughness:.6,metalness:.1}),[]);return(0,kt.useLayoutEffect)(()=>{if(t.view==="floor"){let S=o.width<700;l.position.set(0,S?20:16,S?26:40),l.lookAt(0,0,S?-44:-30),l.fov=S?58:40,_.fog=new Xl(t.fog||"#000000",t.fogNear||40,t.fogFar||128)}else l.position.set(0,52,46),l.lookAt(0,0,3),l.fov=o.width<700?52:34;l.updateProjectionMatrix(),Tt()},[o.width,o.height]),er(()=>{let S=(performance.now()-e.t0)/1e3-.2;v.v2.set(e.px,e.py),v.ray.setFromCamera(v.v2,l),v.ray.ray.intersectPlane(v.plane,v.hit)||v.hit.set(999,0,999);let y=!1;b.forEach((w,L)=>{let C=e.reduce?1:Ys((S-w.delay)/.9),I=ol(C);C<1&&(y=!0);let N=Math.hypot(w.x-v.hit.x,w.z-v.hit.z),M=t.reach||9,P=Math.max(0,1-N/M)*(t.lift||2.2);w.h+=(P-w.h)*.16,Math.abs(P-w.h)>.01&&(y=!0),v.o.position.set(w.sx+(w.x-w.sx)*I,w.sy*(1-I)+.55+w.h,w.sz+(w.z-w.sz)*I),v.o.rotation.set(w.rx*(1-I),w.ry*(1-I),0),v.o.updateMatrix(),s.current.setMatrixAt(L,v.o.matrix);let G=L===Math.floor(f/2)*c+Math.floor(c/2);v.c.copy(G?v.lead:v.unit).lerp(v.hot,G?0:Math.min(1,w.h/1.6)),s.current.setColorAt(L,v.c)}),s.current.instanceMatrix.needsUpdate=!0,s.current.instanceColor&&(s.current.instanceColor.needsUpdate=!0),y&&e.onScreen&&Tt()}),(0,Qe.jsxs)(Qe.Fragment,{children:[(0,Qe.jsx)("ambientLight",{intensity:r.amb}),(0,Qe.jsx)("directionalLight",{position:[20,50,30],intensity:r.key}),(0,Qe.jsx)("instancedMesh",{ref:s,args:[x,A,h]})]})}function QS(r){let e=new So,t=new ls(1,1),s=(c,f,h,m,g=0,_=0,b=1)=>{let v=new jn(t,new Lr({color:new We(c).multiplyScalar(b),side:wi}));v.scale.set(f,h,1),v.position.set(...m),v.rotation.set(_,g,0),e.add(v)};s("#7a34ff",4,3,[-6,2,1],Math.PI/2,0,1.4),s("#3b1a8f",4,3,[-6,-2.5,-1],Math.PI/2,0,.8),s("#4636ff",3,2.5,[6,-1,2],-Math.PI/2,0,.75),s("#ff6fd0",2.4,1.6,[3,2.5,-5],0,0,1.8),s("#ffffff",12,.22,[0,5,-1],0,Math.PI/2,6),s("#ffffff",12,.12,[0,5,1.6],0,Math.PI/2,5),s("#ffffff",.18,6,[0,0,6],0,0,3),s("#ffcf7a",2.5,.3,[-3,-4,3],0,-Math.PI/2,2.5),s("#5a2bd9",14,14,[0,6,0],0,Math.PI/2,.45),s("#2a1470",14,14,[0,0,-7],0,0,.5);let o=new Ka(r),l=o.fromScene(e,.012).texture;return o.dispose(),l}function jg({len:r=300,cols:e=32,width:t=13,curl:s=7.5,twist:o=1.35,phase:l=.35,lift:c=0,curve:f,closed:h=!1,pulse:m=0}={}){let g=f||new Ha([new H(-112,-30,-40),new H(-62,-40,-6),new H(-14,-47,6),new H(30,-38,0),new H(58,-6,-12),new H(92,46,-40)],!1,"catmullrom",.5),_=[],b=[],v=[],x=new H(0,0,1),A=new H,S=new H,y=new H,w=h?r:r+1;for(let C=0;C<w;C++){let I=C/r,N=g.getPointAt(I).add(new H(0,c,0)),M=g.getTangentAt(I);S.crossVectors(M,x).normalize(),A.crossVectors(S,M).normalize();let P=I*Math.PI*o+l,G=Math.cos(P),F=Math.sin(P),B=h?t*(1-m+m*Math.sin(I*Math.PI*2*3)):t*(.7+.3*Math.sin(Math.PI*I));for(let W=0;W<=e;W++){let j=W/e*2-1,z=j*B,K=(j*j-.35)*s;y.copy(S).multiplyScalar(z*G+K*F).addScaledVector(A,-z*F+K*G).add(N),_.push(y.x,y.y,y.z),b.push(I,W/e)}}for(let C=0;C<r;C++)for(let I=0;I<e;I++){let N=C*(e+1)+I,M=(C+1)%w*(e+1)+I;v.push(N,M,N+1,N+1,M,M+1)}let L=new ri;return L.setAttribute("position",new Bt(_,3)),L.setAttribute("uv",new Bt(b,2)),L.setIndex(v),L.computeVertexNormals(),L.computeBoundingSphere(),L}var IP={night:{color:"#5a2bd9"}};function NP({T:r,I:e,opts:t}){let s=Rn(v=>v.gl),o=Rn(v=>v.scene),l=Rn(v=>v.camera),c=Rn(v=>v.size),f=(0,kt.useRef)(),h=(0,kt.useRef)(),{geo:m,geo2:g,mat:_}=(0,kt.useMemo)(()=>{let v=jg(t.ribbon),x=jg({width:2.6,curl:.9,twist:2.4,phase:1.9,lift:11,cols:10}),A=new Va({color:r.color,metalness:1,roughness:.06,clearcoat:1,clearcoatRoughness:.03,iridescence:1,iridescenceIOR:1.4,iridescenceThicknessRange:[220,760],envMapIntensity:1.25,side:wi});return{geo:v,geo2:x,mat:A}},[]);(0,kt.useLayoutEffect)(()=>{o.environment=QS(s),Tt()},[s]),(0,kt.useLayoutEffect)(()=>{let v=c.width/c.height<.9;l.fov=35,l.position.set(0,0,v?175:118),l.lookAt(0,0,0),l.updateProjectionMatrix(),f.current.rotation.z=0,f.current.position.set(v?-14:0,v?-14:0,0),Tt()},[c.width,c.height]);let b=m.index.count;return er((v,x)=>{let A=e.reduce?1:Ys((performance.now()-e.t0-120)/2400),S=ol(A);m.setDrawRange(0,Math.max(6,Math.floor(b*S/6)*6));let y=ol(Ys(A*1.15-.15));g.setDrawRange(0,Math.max(6,Math.floor(g.index.count*y/6)*6));let w=Math.abs(e.px)<4&&Math.abs(e.py)<4,L=!e.reduce&&w?Za.clamp(e.px,-1,1):0,C=!e.reduce&&w?Za.clamp(e.py,-1,1):0,I=1-Math.exp(-x*2.6);e.lx=(e.lx||0)+(L-(e.lx||0))*I,e.ly=(e.ly||0)+(C-(e.ly||0))*I,f.current.rotation.y=e.lx*.22+(1-S)*-.35,f.current.rotation.x=-e.ly*.16,h.current.position.y=(1-S)*-8;let N=Math.abs(L-e.lx)>8e-4||Math.abs(C-e.ly)>8e-4;e.onScreen&&(A<1||N)&&Tt()}),(0,Qe.jsx)("group",{ref:f,children:(0,Qe.jsxs)("group",{ref:h,children:[(0,Qe.jsx)("mesh",{geometry:m,material:_}),(0,Qe.jsx)("mesh",{geometry:g,material:_})]})})}var LP=(r,e,t)=>new pi({uniforms:{uBase:{value:new We(r)},uRim:{value:new We(e)},uKey:{value:new We(t)},uA:{value:0}},transparent:!0,toneMapped:!1,vertexShader:`varying vec3 vN; varying vec3 vV;
    void main(){ vec4 mv = modelViewMatrix * vec4(position, 1.0); vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform vec3 uBase, uRim, uKey; uniform float uA; varying vec3 vN; varying vec3 vV;
    void main(){
      float f = 1.0 - max(dot(normalize(vN), normalize(vV)), 0.0);
      float rim = pow(f, 3.2);                                  // the glowing edge
      float line = smoothstep(0.86, 0.93, f) * (1.0 - smoothstep(0.95, 1.0, f)); // a crisp inner rim line
      float key = pow(max(dot(normalize(vN), normalize(vec3(0.55, 0.6, 0.6))), 0.0), 2.0); // soft light, upper right
      vec3 c = uBase + uKey * key * 0.55 + uRim * (rim * 1.25 + line * 0.9);
      gl_FragColor = vec4(c, uA);
    }`}),kP={night:{base:"#07030f",rim:"#8f4dff",key:"#3a1a8a"}};function DP({T:r,I:e,opts:t}){let s=Rn(h=>h.camera),o=Rn(h=>h.size),l=(0,kt.useRef)(),c=(0,kt.useMemo)(()=>{let h=new iu(1,96,64);return[[-74,-30,-10,34,0],[84,18,-18,38,.12],[50,-52,6,15,.24]].map(([m,g,_,b,v])=>({x:m,y:g,z:_,r:b,d:v,geo:h,mat:LP(r.base,r.rim,r.key)}))},[]),f=(0,kt.useRef)([]);return(0,kt.useLayoutEffect)(()=>{s.fov=35,s.position.set(0,0,160),s.lookAt(0,0,0),s.updateProjectionMatrix(),Tt()},[o.width,o.height]),er((h,m)=>{let g=(performance.now()-e.t0)/1e3,_=Math.abs(e.px)<4&&Math.abs(e.py)<4,b=!e.reduce&&_?Za.clamp(e.px,-1,1):0,v=!e.reduce&&_?Za.clamp(e.py,-1,1):0,x=1-Math.exp(-m*2.2);e.ox=(e.ox||0)+(b-(e.ox||0))*x,e.oy=(e.oy||0)+(v-(e.oy||0))*x;let A=Math.tan(s.fov*Math.PI/360)*160*(o.width/o.height),S=A/80,y=Math.abs(b-e.ox)>8e-4||Math.abs(v-e.oy)>8e-4;c.forEach((w,L)=>{let C=e.reduce?1:Ys((g-.15-w.d)/1.6),I=ol(C);C<1&&(y=!0);let N=f.current[L];if(!N)return;let M=1+w.z/60;N.position.set(w.x*S+e.ox*3.5*M,w.y+(1-I)*-14+e.oy*2.5*M,w.z),N.scale.setScalar(w.r*(.92+.08*I)),w.mat.uniforms.uA.value=I}),y&&e.onScreen&&Tt()}),(0,Qe.jsx)("group",{ref:l,children:c.map((h,m)=>(0,Qe.jsx)("mesh",{ref:g=>f.current[m]=g,geometry:h.geo,material:h.mat},m))})}var FP={robot:[MP,yP],coin:[RP,wP],ranks:[PP,CP],flow:[NP,IP],orbs:[DP,kP]};window.Hero3D={mount(r,e={}){let{scene:t="robot",theme:s="paper",reduce:o=matchMedia("(prefers-reduced-motion: reduce)").matches,label:l=""}=e,[c,f]=FP[t],h=f[s]||Object.values(f)[0],m=vP(o),g=document.createElement("canvas");g.className="hero3d",l?(g.setAttribute("role","img"),g.setAttribute("aria-label",l)):g.setAttribute("aria-hidden","true"),r.prepend(g);let _=Nu(g),b=()=>{let L=r.getBoundingClientRect();_.configure({size:{width:L.width,height:L.height,top:0,left:0},dpr:Math.min(window.devicePixelRatio||1,2),frameloop:"demand",flat:!0,gl:{antialias:!0,alpha:!0,powerPreference:"high-performance",toneMapping:si},camera:{fov:30,near:1,far:900}}),Tt()};b(),_.render((0,Qe.jsx)(c,{T:h,I:m,opts:e})),new ResizeObserver(b).observe(r),new IntersectionObserver(([L])=>{m.onScreen=L.isIntersecting,m.onScreen&&Tt()}).observe(r);let v=e.dragTarget||r,x=e.pointerTarget||r,A=0,S=0;v.addEventListener("pointerdown",L=>{t==="ranks"||t==="orbs"||e.fixed||(m.drag=!0,A=L.clientX,S=L.timeStamp,v.setPointerCapture?.(L.pointerId),Tt())});let y=L=>{let C=r.getBoundingClientRect();if(m.px=(L.clientX-C.left)/C.width*2-1,m.py=-((L.clientY-C.top)/C.height)*2+1,m.drag){let I=L.clientX-A,N=Math.max(1,L.timeStamp-S)/1e3;m.rotY+=I*.01,m.vx=I*.01/N,A=L.clientX,S=L.timeStamp}Tt()};x.addEventListener("pointermove",y),x!==v&&v.addEventListener("pointermove",y);let w=()=>{m.drag=!1,Tt()};return v.addEventListener("pointerup",w),v.addEventListener("pointercancel",w),x.addEventListener("pointerleave",()=>{m.px=9,m.py=9,Tt()}),document.fonts?.ready.then(()=>Tt()),!0}};})();
