(()=>{var Y1=Object.create;var Jv=Object.defineProperty;var j1=Object.getOwnPropertyDescriptor;var Z1=Object.getOwnPropertyNames;var J1=Object.getPrototypeOf,K1=Object.prototype.hasOwnProperty;var _r=(r,e)=>()=>{try{return e||r((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};var Q1=(r,e,t,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of Z1(e))!K1.call(r,o)&&o!==t&&Jv(r,o,{get:()=>e[o],enumerable:!(s=j1(e,o))||s.enumerable});return r};var Bi=(r,e,t)=>(t=r!=null?Y1(J1(r)):{},Q1(e||!r||!r.__esModule?Jv(t,"default",{value:r,enumerable:!0}):t,r));var cy=_r(nt=>{"use strict";var rp=Symbol.for("react.transitional.element"),eM=Symbol.for("react.portal"),tM=Symbol.for("react.fragment"),nM=Symbol.for("react.strict_mode"),iM=Symbol.for("react.profiler"),rM=Symbol.for("react.consumer"),sM=Symbol.for("react.context"),oM=Symbol.for("react.forward_ref"),aM=Symbol.for("react.suspense"),lM=Symbol.for("react.memo"),ny=Symbol.for("react.lazy"),uM=Symbol.for("react.activity"),cM=Symbol.for("react.view_transition"),Kv=Symbol.iterator;function fM(r){return r===null||typeof r!="object"?null:(r=Kv&&r[Kv]||r["@@iterator"],typeof r=="function"?r:null)}var iy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ry=Object.assign,sy={};function ta(r,e,t){this.props=r,this.context=e,this.refs=sy,this.updater=t||iy}ta.prototype.isReactComponent={};ta.prototype.setState=function(r,e){if(typeof r!="object"&&typeof r!="function"&&r!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,r,e,"setState")};ta.prototype.forceUpdate=function(r){this.updater.enqueueForceUpdate(this,r,"forceUpdate")};function oy(){}oy.prototype=ta.prototype;function sp(r,e,t){this.props=r,this.context=e,this.refs=sy,this.updater=t||iy}var op=sp.prototype=new oy;op.constructor=sp;ry(op,ta.prototype);op.isPureReactComponent=!0;var Qv=Array.isArray;function ip(){}var qt={H:null,A:null,T:null,S:null},ay=Object.prototype.hasOwnProperty;function ap(r,e,t){var s=t.ref;return{$$typeof:rp,type:r,key:e,ref:s!==void 0?s:null,props:t}}function dM(r,e){return ap(r.type,e,r.props)}function lp(r){return typeof r=="object"&&r!==null&&r.$$typeof===rp}function hM(r){var e={"=":"=0",":":"=2"};return"$"+r.replace(/[=:]/g,function(t){return e[t]})}var ey=/\/+/g;function np(r,e){return typeof r=="object"&&r!==null&&r.key!=null?hM(""+r.key):e.toString(36)}function pM(r){switch(r.status){case"fulfilled":return r.value;case"rejected":throw r.reason;default:switch(typeof r.status=="string"?r.then(ip,ip):(r.status="pending",r.then(function(e){r.status==="pending"&&(r.status="fulfilled",r.value=e)},function(e){r.status==="pending"&&(r.status="rejected",r.reason=e)})),r.status){case"fulfilled":return r.value;case"rejected":throw r.reason}}throw r}function ea(r,e,t,s,o){var u=typeof r;(u==="undefined"||u==="boolean")&&(r=null);var c=!1;if(r===null)c=!0;else switch(u){case"bigint":case"string":case"number":c=!0;break;case"object":switch(r.$$typeof){case rp:case eM:c=!0;break;case ny:return c=r._init,ea(c(r._payload),e,t,s,o)}}if(c)return o=o(r),c=s===""?"."+np(r,0):s,Qv(o)?(t="",c!=null&&(t=c.replace(ey,"$&/")+"/"),ea(o,e,t,"",function(m){return m})):o!=null&&(lp(o)&&(o=dM(o,t+(o.key==null||r&&r.key===o.key?"":(""+o.key).replace(ey,"$&/")+"/")+c)),e.push(o)),1;c=0;var d=s===""?".":s+":";if(Qv(r))for(var p=0;p<r.length;p++)s=r[p],u=d+np(s,p),c+=ea(s,e,t,u,o);else if(p=fM(r),typeof p=="function")for(r=p.call(r),p=0;!(s=r.next()).done;)s=s.value,u=d+np(s,p++),c+=ea(s,e,t,u,o);else if(u==="object"){if(typeof r.then=="function")return ea(pM(r),e,t,s,o);throw e=String(r),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return c}function ic(r,e,t){if(r==null)return r;var s=[],o=0;return ea(r,s,"","",function(u){return e.call(t,u,o++)}),s}function mM(r){if(r._status===-1){var e=r._result,t=e();t.then(function(s){(r._status===0||r._status===-1)&&(r._status=1,r._result=s,t.status===void 0&&(t.status="fulfilled",t.value=s))},function(s){(r._status===0||r._status===-1)&&(r._status=2,r._result=s,t.status===void 0&&(t.status="rejected",t.reason=s))}),r._status===-1&&(r._status=0,r._result=t)}if(r._status===1)return r._result.default;throw r._result}var ty=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)};function ly(r){var e=qt.T,t={};t.types=e!==null?e.types:null,qt.T=t;try{var s=r(),o=qt.S;o!==null&&o(t,s),typeof s=="object"&&s!==null&&typeof s.then=="function"&&s.then(ip,ty)}catch(u){ty(u)}finally{e!==null&&t.types!==null&&(e.types=t.types),qt.T=e}}function uy(r){var e=qt.T;if(e!==null){var t=e.types;t===null?e.types=[r]:t.indexOf(r)===-1&&t.push(r)}else ly(uy.bind(null,r))}var gM={map:ic,forEach:function(r,e,t){ic(r,function(){e.apply(this,arguments)},t)},count:function(r){var e=0;return ic(r,function(){e++}),e},toArray:function(r){return ic(r,function(e){return e})||[]},only:function(r){if(!lp(r))throw Error("React.Children.only expected to receive a single React element child.");return r}};nt.Activity=uM;nt.Children=gM;nt.Component=ta;nt.Fragment=tM;nt.Profiler=iM;nt.PureComponent=sp;nt.StrictMode=nM;nt.Suspense=aM;nt.ViewTransition=cM;nt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=qt;nt.__COMPILER_RUNTIME={__proto__:null,c:function(r){return qt.H.useMemoCache(r)}};nt.addTransitionType=uy;nt.cache=function(r){return function(){return r.apply(null,arguments)}};nt.cacheSignal=function(){return null};nt.cloneElement=function(r,e,t){if(r==null)throw Error("The argument must be a React element, but you passed "+r+".");var s=ry({},r.props),o=r.key;if(e!=null)for(u in e.key!==void 0&&(o=""+e.key),e)!ay.call(e,u)||u==="key"||u==="__self"||u==="__source"||u==="ref"&&e.ref===void 0||(s[u]=e[u]);var u=arguments.length-2;if(u===1)s.children=t;else if(1<u){for(var c=Array(u),d=0;d<u;d++)c[d]=arguments[d+2];s.children=c}return ap(r.type,o,s)};nt.createContext=function(r){return r={$$typeof:sM,_currentValue:r,_currentValue2:r,_threadCount:0,Provider:null,Consumer:null},r.Provider=r,r.Consumer={$$typeof:rM,_context:r},r};nt.createElement=function(r,e,t){var s,o={},u=null;if(e!=null)for(s in e.key!==void 0&&(u=""+e.key),e)ay.call(e,s)&&s!=="key"&&s!=="__self"&&s!=="__source"&&(o[s]=e[s]);var c=arguments.length-2;if(c===1)o.children=t;else if(1<c){for(var d=Array(c),p=0;p<c;p++)d[p]=arguments[p+2];o.children=d}if(r&&r.defaultProps)for(s in c=r.defaultProps,c)o[s]===void 0&&(o[s]=c[s]);return ap(r,u,o)};nt.createRef=function(){return{current:null}};nt.forwardRef=function(r){return{$$typeof:oM,render:r}};nt.isValidElement=lp;nt.lazy=function(r){return{$$typeof:ny,_payload:{_status:-1,_result:r},_init:mM}};nt.memo=function(r,e){return{$$typeof:lM,type:r,compare:e===void 0?null:e}};nt.startTransition=ly;nt.unstable_useCacheRefresh=function(){return qt.H.useCacheRefresh()};nt.use=function(r){return qt.H.use(r)};nt.useActionState=function(r,e,t){return qt.H.useActionState(r,e,t)};nt.useCallback=function(r,e){return qt.H.useCallback(r,e)};nt.useContext=function(r){return qt.H.useContext(r)};nt.useDebugValue=function(){};nt.useDeferredValue=function(r,e){return qt.H.useDeferredValue(r,e)};nt.useEffect=function(r,e){return qt.H.useEffect(r,e)};nt.useEffectEvent=function(r){return qt.H.useEffectEvent(r)};nt.useId=function(){return qt.H.useId()};nt.useImperativeHandle=function(r,e,t){return qt.H.useImperativeHandle(r,e,t)};nt.useInsertionEffect=function(r,e){return qt.H.useInsertionEffect(r,e)};nt.useLayoutEffect=function(r,e){return qt.H.useLayoutEffect(r,e)};nt.useMemo=function(r,e){return qt.H.useMemo(r,e)};nt.useOptimistic=function(r,e){return qt.H.useOptimistic(r,e)};nt.useReducer=function(r,e,t){return qt.H.useReducer(r,e,t)};nt.useRef=function(r){return qt.H.useRef(r)};nt.useState=function(r){return qt.H.useState(r)};nt.useSyncExternalStore=function(r,e,t){return qt.H.useSyncExternalStore(r,e,t)};nt.useTransition=function(){return qt.H.useTransition()};nt.version="19.3.1"});var bs=_r((_2,fy)=>{"use strict";fy.exports=cy()});var ab=_r(od=>{"use strict";var HC=Symbol.for("react.transitional.element"),VC=Symbol.for("react.fragment");function ob(r,e,t){var s=null;if(t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),"key"in e){t={};for(var o in e)o!=="key"&&(t[o]=e[o])}else t=e;return e=t.ref,{$$typeof:HC,type:r,key:s,ref:e!==void 0?e:null,props:t}}od.Fragment=VC;od.jsx=ob;od.jsxs=ob});var Yl=_r((J3,lb)=>{"use strict";lb.exports=ab()});var cb=_r(ub=>{"use strict";var Pa=bs();function GC(r,e){return r===e&&(r!==0||1/r===1/e)||r!==r&&e!==e}var WC=typeof Object.is=="function"?Object.is:GC,XC=Pa.useState,qC=Pa.useEffect,$C=Pa.useLayoutEffect,YC=Pa.useDebugValue;function jC(r,e){var t=e(),s=XC({inst:{value:t,getSnapshot:e}}),o=s[0].inst,u=s[1];return $C(function(){o.value=t,o.getSnapshot=e,Lm(o)&&u({inst:o})},[r,t,e]),qC(function(){return Lm(o)&&u({inst:o}),r(function(){Lm(o)&&u({inst:o})})},[r]),YC(t),t}function Lm(r){var e=r.getSnapshot;r=r.value;try{var t=e();return!WC(r,t)}catch{return!0}}function ZC(r,e){return e()}var JC=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?ZC:jC;ub.useSyncExternalStore=Pa.useSyncExternalStore!==void 0?Pa.useSyncExternalStore:JC});var db=_r((Q3,fb)=>{"use strict";fb.exports=cb()});var pb=_r(hb=>{"use strict";var ad=bs(),KC=db();function QC(r,e){return r===e&&(r!==0||1/r===1/e)||r!==r&&e!==e}var eR=typeof Object.is=="function"?Object.is:QC,tR=KC.useSyncExternalStore,nR=ad.useRef,iR=ad.useEffect,rR=ad.useMemo,sR=ad.useDebugValue;hb.useSyncExternalStoreWithSelector=function(r,e,t,s,o){var u=nR(null);if(u.current===null){var c={hasValue:!1,value:null};u.current=c}else c=u.current;u=rR(function(){function p(b){if(!m){if(m=!0,g=b,b=s(b),o!==void 0&&c.hasValue){var x=c.value;if(o(x,b))return _=x}return _=b}if(x=_,eR(g,b))return x;var C=s(b);return o!==void 0&&o(x,C)?(g=b,x):(g=b,_=C)}var m=!1,g,_,y=t===void 0?null:t;return[function(){return p(e())},y===null?void 0:function(){return p(y())}]},[e,t,s,o]);var d=tR(r,u[0],u[1]);return iR(function(){c.hasValue=!0,c.value=d},[d]),sR(d),d}});var gb=_r((tN,mb)=>{"use strict";mb.exports=pb()});var Ub=_r(Jt=>{"use strict";function Um(r,e){var t=r.length;r.push(e);e:for(;0<t;){var s=t-1>>>1,o=r[s];if(0<ld(o,e))r[s]=e,r[t]=o,t=s;else break e}}function Cr(r){return r.length===0?null:r[0]}function cd(r){if(r.length===0)return null;var e=r[0],t=r.pop();if(t!==e){r[0]=t;e:for(var s=0,o=r.length,u=o>>>1;s<u;){var c=2*(s+1)-1,d=r[c],p=c+1,m=r[p];if(0>ld(d,t))p<o&&0>ld(m,d)?(r[s]=m,r[p]=t,s=p):(r[s]=d,r[c]=t,s=c);else if(p<o&&0>ld(m,t))r[s]=m,r[p]=t,s=p;else break e}}return e}function ld(r,e){var t=r.sortIndex-e.sortIndex;return t!==0?t:r.id-e.id}Jt.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(Cb=performance,Jt.unstable_now=function(){return Cb.now()}):(Dm=Date,Rb=Dm.now(),Jt.unstable_now=function(){return Dm.now()-Rb});var Cb,Dm,Rb,es=[],ks=[],cR=1,Xi=null,ei=3,Om=!1,jl=!1,Zl=!1,zm=!1,Nb=typeof setTimeout=="function"?setTimeout:null,Lb=typeof clearTimeout=="function"?clearTimeout:null,Pb=typeof setImmediate<"u"?setImmediate:null;function ud(r){for(var e=Cr(ks);e!==null;){if(e.callback===null)cd(ks);else if(e.startTime<=r)cd(ks),e.sortIndex=e.expirationTime,Um(es,e);else break;e=Cr(ks)}}function Bm(r){if(Zl=!1,ud(r),!jl)if(Cr(es)!==null)jl=!0,Na||(Na=!0,Ia());else{var e=Cr(ks);e!==null&&Hm(Bm,e.startTime-r)}}var Na=!1,Jl=-1,Db=5,kb=-1;function Fb(){return zm?!0:!(Jt.unstable_now()-kb<Db)}function km(){if(zm=!1,Na){var r=Jt.unstable_now();kb=r;var e=!0;try{e:{jl=!1,Zl&&(Zl=!1,Lb(Jl),Jl=-1),Om=!0;var t=ei;try{t:{for(ud(r),Xi=Cr(es);Xi!==null&&!(Xi.expirationTime>r&&Fb());){var s=Xi.callback;if(typeof s=="function"){Xi.callback=null,ei=Xi.priorityLevel;var o=s(Xi.expirationTime<=r);if(r=Jt.unstable_now(),typeof o=="function"){Xi.callback=o,ud(r),e=!0;break t}Xi===Cr(es)&&cd(es),ud(r)}else cd(es);Xi=Cr(es)}if(Xi!==null)e=!0;else{var u=Cr(ks);u!==null&&Hm(Bm,u.startTime-r),e=!1}}break e}finally{Xi=null,ei=t,Om=!1}e=void 0}}finally{e?Ia():Na=!1}}}var Ia;typeof Pb=="function"?Ia=function(){Pb(km)}:typeof MessageChannel<"u"?(Fm=new MessageChannel,Ib=Fm.port2,Fm.port1.onmessage=km,Ia=function(){Ib.postMessage(null)}):Ia=function(){Nb(km,0)};var Fm,Ib;function Hm(r,e){Jl=Nb(function(){r(Jt.unstable_now())},e)}Jt.unstable_IdlePriority=5;Jt.unstable_ImmediatePriority=1;Jt.unstable_LowPriority=4;Jt.unstable_NormalPriority=3;Jt.unstable_Profiling=null;Jt.unstable_UserBlockingPriority=2;Jt.unstable_cancelCallback=function(r){r.callback=null};Jt.unstable_forceFrameRate=function(r){0>r||125<r?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Db=0<r?Math.floor(1e3/r):5};Jt.unstable_getCurrentPriorityLevel=function(){return ei};Jt.unstable_next=function(r){switch(ei){case 1:case 2:case 3:var e=3;break;default:e=ei}var t=ei;ei=e;try{return r()}finally{ei=t}};Jt.unstable_requestPaint=function(){zm=!0};Jt.unstable_runWithPriority=function(r,e){switch(r){case 1:case 2:case 3:case 4:case 5:break;default:r=3}var t=ei;ei=r;try{return e()}finally{ei=t}};Jt.unstable_scheduleCallback=function(r,e,t){var s=Jt.unstable_now();switch(typeof t=="object"&&t!==null?(t=t.delay,t=typeof t=="number"&&0<t?s+t:s):t=s,r){case 1:var o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3}return o=t+o,r={id:cR++,callback:e,priorityLevel:r,startTime:t,expirationTime:o,sortIndex:-1},t>s?(r.sortIndex=t,Um(ks,r),Cr(es)===null&&r===Cr(ks)&&(Zl?(Lb(Jl),Jl=-1):Zl=!0,Hm(Bm,t-s))):(r.sortIndex=o,Um(es,r),jl||Om||(jl=!0,Na||(Na=!0,Ia()))),r};Jt.unstable_shouldYield=Fb;Jt.unstable_wrapCallback=function(r){var e=ei;return function(){var t=ei;ei=e;try{return r.apply(this,arguments)}finally{ei=t}}}});var Vm=_r((aN,Ob)=>{"use strict";Ob.exports=Ub()});var Kt=Bi(bs()),Jb=Bi(bs());var Hy=0,Bp=1,Vy=2;var Hp=0,mo=1,wa=2,Ns=3,Ls=0,oi=1,Tr=2,go=0,Ta=1,Vp=2,Gp=3,Wp=4,Gy=5;var vo=100,Wy=101,Xy=102,qy=103,$y=104,Yy=200,jy=201,Zy=202,Jy=203,Xp=204,qp=205,Ky=206,Qy=207,e_=208,t_=209,n_=210,i_=211,r_=212,s_=213,o_=214,Nc=0,Lc=1,Dc=2,ga=3,kc=4,Fc=5,Uc=6,Oc=7,$p=0,a_=1,l_=2,pi=0,Yp=1,jp=2,Zp=3,kl=4,Jp=5,Kp=6,Qp=7;var em=300,yo=301,Ea=302,pf=303,mf=304,zc=1e3,Sr=1001,Bc=1002,Dn=1003,u_=1004;var Fl=1005;var ri=1006,gf=1007;var Jr=1008;var Kn=1009,tm=1010,nm=1011,Aa=1012,vf=1013,sr=1014,or=1015,ar=1016,yf=1017,_f=1018,_o=1020,im=35902,rm=35899,sm=1021,om=1022,Ri=1023,qr=1026,Kr=1027,am=1028,bf=1029,Ds=1030,Sf=1031;var xf=1033,Ul=33776,Ol=33777,zl=33778,Bl=33779,Mf=35840,wf=35841,Tf=35842,Ef=35843,Af=36196,Cf=37492,Rf=37496,Pf=37488,If=37489,Hl=37490,Nf=37491,Lf=37808,Df=37809,kf=37810,Ff=37811,Uf=37812,Of=37813,zf=37814,Bf=37815,Hf=37816,Vf=37817,Gf=37818,Wf=37819,Xf=37820,qf=37821,$f=36492,Yf=36494,jf=36495,Zf=36283,Jf=36284,Vl=36285,Kf=36286;var pl=2300,Hc=2301,Rc=2302,Np=2303,Lp=2400,Dp=2401,kp=2402;var c_=3200;var Qf=0,f_=1,Qr="",Nn="srgb",lo="srgb-linear",ml="linear",kt="srgb";var Pc=7680;var d_=519,h_=512,p_=513,m_=514,lm=515,g_=516,v_=517,um=518,cm=519,y_=35044;var fm="300 es",Vi=2e3,va=2001;function vM(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function yM(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function gl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function __(){let r=gl("canvas");return r.style.display="block",r}var dy={},ya=null;function dm(...r){let e="THREE."+r.shift();ya?ya("log",e,...r):console.log(e,...r)}function b_(r){let e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Ye(...r){r=b_(r);let e="THREE."+r.shift();if(ya)ya("warn",e,...r);else{let t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function et(...r){r=b_(r);let e="THREE."+r.shift();if(ya)ya("error",e,...r);else{let t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function hl(...r){let e=r.join(" ");e in dy||(dy[e]=!0,Ye(...r))}function S_(r,e,t){return new Promise(function(s,o){function u(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(u,t);break;default:s()}}setTimeout(u,t)})}var x_={[Nc]:Nc,[Dc]:Uc,[kc]:kc,[ga]:Fc,[Lc]:Lc,[Uc]:Dc,[Oc]:Oc,[Fc]:ga},Mr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){let s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){let s=this._listeners;if(s===void 0)return;let o=s[e];if(o!==void 0){let u=o.indexOf(t);u!==-1&&o.splice(u,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let s=t[e.type];if(s!==void 0){e.target=this;let o=s.slice(0);for(let u=0,c=o.length;u<c;u++)o[u].call(this,e);e.target=null}}},jn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ic=Math.PI/180,Vc=180/Math.PI;function Gl(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(jn[r&255]+jn[r>>8&255]+jn[r>>16&255]+jn[r>>24&255]+"-"+jn[e&255]+jn[e>>8&255]+"-"+jn[e>>16&15|64]+jn[e>>24&255]+"-"+jn[t&63|128]+jn[t>>8&255]+"-"+jn[t>>16&255]+jn[t>>24&255]+jn[s&255]+jn[s>>8&255]+jn[s>>16&255]+jn[s>>24&255]).toLowerCase()}function Mt(r,e,t){return Math.max(e,Math.min(t,r))}function _M(r,e){return(r%e+e)%e}function up(r,e,t){return(1-t)*r+t*e}function M_(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function hm(r){switch(r.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function bM(r,e){if(e.constructor===Float32Array)return r;let t=hm(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(r/t,-1)}function SM(r,e){if(e.constructor===Float32Array)return r;let t=hm(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(r*t)}var ym=class ym{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,s=this.y,o=e.elements;return this.x=o[0]*t+o[3]*s+o[6],this.y=o[1]*t+o[4]*s+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this}clampLength(e,t){let s=this.length();return this.divideScalar(s||1).multiplyScalar(Mt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let s=this.dot(e)/t;return Math.acos(Mt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let s=Math.cos(t),o=Math.sin(t),u=this.x-e.x,c=this.y-e.y;return this.x=u*s-c*o+e.x,this.y=u*o+c*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ym.prototype.isVector2=!0;var vt=ym,wr=class{constructor(e=0,t=0,s=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=o}static slerpFlat(e,t,s,o,u,c,d){let p=s[o+0],m=s[o+1],g=s[o+2],_=s[o+3],y=u[c+0],b=u[c+1],x=u[c+2],C=u[c+3];if(_!==C||p!==y||m!==b||g!==x){let S=p*y+m*b+g*x+_*C;S<0&&(y=-y,b=-b,x=-x,C=-C,S=-S);let v=1-d;if(S<.9995){let A=Math.acos(S),D=Math.sin(A);v=Math.sin(v*A)/D,d=Math.sin(d*A)/D,p=p*v+y*d,m=m*v+b*d,g=g*v+x*d,_=_*v+C*d}else{p=p*v+y*d,m=m*v+b*d,g=g*v+x*d,_=_*v+C*d;let A=1/Math.sqrt(p*p+m*m+g*g+_*_);p*=A,m*=A,g*=A,_*=A}}e[t]=p,e[t+1]=m,e[t+2]=g,e[t+3]=_}static multiplyQuaternionsFlat(e,t,s,o,u,c){let d=s[o],p=s[o+1],m=s[o+2],g=s[o+3],_=u[c],y=u[c+1],b=u[c+2],x=u[c+3];return e[t]=d*x+g*_+p*b-m*y,e[t+1]=p*x+g*y+m*_-d*b,e[t+2]=m*x+g*b+d*y-p*_,e[t+3]=g*x-d*_-p*y-m*b,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,o){return this._x=e,this._y=t,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let s=e._x,o=e._y,u=e._z,c=e._order,d=Math.cos,p=Math.sin,m=d(s/2),g=d(o/2),_=d(u/2),y=p(s/2),b=p(o/2),x=p(u/2);switch(c){case"XYZ":this._x=y*g*_+m*b*x,this._y=m*b*_-y*g*x,this._z=m*g*x+y*b*_,this._w=m*g*_-y*b*x;break;case"YXZ":this._x=y*g*_+m*b*x,this._y=m*b*_-y*g*x,this._z=m*g*x-y*b*_,this._w=m*g*_+y*b*x;break;case"ZXY":this._x=y*g*_-m*b*x,this._y=m*b*_+y*g*x,this._z=m*g*x+y*b*_,this._w=m*g*_-y*b*x;break;case"ZYX":this._x=y*g*_-m*b*x,this._y=m*b*_+y*g*x,this._z=m*g*x-y*b*_,this._w=m*g*_+y*b*x;break;case"YZX":this._x=y*g*_+m*b*x,this._y=m*b*_+y*g*x,this._z=m*g*x-y*b*_,this._w=m*g*_-y*b*x;break;case"XZY":this._x=y*g*_-m*b*x,this._y=m*b*_-y*g*x,this._z=m*g*x+y*b*_,this._w=m*g*_+y*b*x;break;default:Ye("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let s=t/2,o=Math.sin(s);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,s=t[0],o=t[4],u=t[8],c=t[1],d=t[5],p=t[9],m=t[2],g=t[6],_=t[10],y=s+d+_;if(y>0){let b=.5/Math.sqrt(y+1);this._w=.25/b,this._x=(g-p)*b,this._y=(u-m)*b,this._z=(c-o)*b}else if(s>d&&s>_){let b=2*Math.sqrt(1+s-d-_);this._w=(g-p)/b,this._x=.25*b,this._y=(o+c)/b,this._z=(u+m)/b}else if(d>_){let b=2*Math.sqrt(1+d-s-_);this._w=(u-m)/b,this._x=(o+c)/b,this._y=.25*b,this._z=(p+g)/b}else{let b=2*Math.sqrt(1+_-s-d);this._w=(c-o)/b,this._x=(u+m)/b,this._y=(p+g)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){let s=this.angleTo(e);if(s===0)return this;let o=Math.min(1,t/s);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let s=e._x,o=e._y,u=e._z,c=e._w,d=t._x,p=t._y,m=t._z,g=t._w;return this._x=s*g+c*d+o*m-u*p,this._y=o*g+c*p+u*d-s*m,this._z=u*g+c*m+s*p-o*d,this._w=c*g-s*d-o*p-u*m,this._onChangeCallback(),this}slerp(e,t){let s=e._x,o=e._y,u=e._z,c=e._w,d=this.dot(e);d<0&&(s=-s,o=-o,u=-u,c=-c,d=-d);let p=1-t;if(d<.9995){let m=Math.acos(d),g=Math.sin(m);p=Math.sin(p*m)/g,t=Math.sin(t*m)/g,this._x=this._x*p+s*t,this._y=this._y*p+o*t,this._z=this._z*p+u*t,this._w=this._w*p+c*t,this._onChangeCallback()}else this._x=this._x*p+s*t,this._y=this._y*p+o*t,this._z=this._z*p+u*t,this._w=this._w*p+c*t,this.normalize();return this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),o=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(o*Math.sin(e),o*Math.cos(e),u*Math.sin(t),u*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},_m=class _m{constructor(e=0,t=0,s=0){this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hy.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hy.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,s=this.y,o=this.z,u=e.elements;return this.x=u[0]*t+u[3]*s+u[6]*o,this.y=u[1]*t+u[4]*s+u[7]*o,this.z=u[2]*t+u[5]*s+u[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,s=this.y,o=this.z,u=e.elements,c=1/(u[3]*t+u[7]*s+u[11]*o+u[15]);return this.x=(u[0]*t+u[4]*s+u[8]*o+u[12])*c,this.y=(u[1]*t+u[5]*s+u[9]*o+u[13])*c,this.z=(u[2]*t+u[6]*s+u[10]*o+u[14])*c,this}applyQuaternion(e){let t=this.x,s=this.y,o=this.z,u=e.x,c=e.y,d=e.z,p=e.w,m=2*(c*o-d*s),g=2*(d*t-u*o),_=2*(u*s-c*t);return this.x=t+p*m+c*_-d*g,this.y=s+p*g+d*m-u*_,this.z=o+p*_+u*g-c*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,s=this.y,o=this.z,u=e.elements;return this.x=u[0]*t+u[4]*s+u[8]*o,this.y=u[1]*t+u[5]*s+u[9]*o,this.z=u[2]*t+u[6]*s+u[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this}clampLength(e,t){let s=this.length();return this.divideScalar(s||1).multiplyScalar(Mt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let s=e.x,o=e.y,u=e.z,c=t.x,d=t.y,p=t.z;return this.x=o*p-u*d,this.y=u*c-s*p,this.z=s*d-o*c,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return cp.copy(this).projectOnVector(e),this.sub(cp)}reflect(e){return this.sub(cp.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let s=this.dot(e)/t;return Math.acos(Mt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,s=this.y-e.y,o=this.z-e.z;return t*t+s*s+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){let o=Math.sin(t)*e;return this.x=o*Math.sin(s),this.y=Math.cos(t)*e,this.z=o*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};_m.prototype.isVector3=!0;var Y=_m,cp=new Y,hy=new wr,bm=class bm{constructor(e,t,s,o,u,c,d,p,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,o,u,c,d,p,m)}set(e,t,s,o,u,c,d,p,m){let g=this.elements;return g[0]=e,g[1]=o,g[2]=d,g[3]=t,g[4]=u,g[5]=p,g[6]=s,g[7]=c,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let s=e.elements,o=t.elements,u=this.elements,c=s[0],d=s[3],p=s[6],m=s[1],g=s[4],_=s[7],y=s[2],b=s[5],x=s[8],C=o[0],S=o[3],v=o[6],A=o[1],D=o[4],R=o[7],L=o[2],N=o[5],M=o[8];return u[0]=c*C+d*A+p*L,u[3]=c*S+d*D+p*N,u[6]=c*v+d*R+p*M,u[1]=m*C+g*A+_*L,u[4]=m*S+g*D+_*N,u[7]=m*v+g*R+_*M,u[2]=y*C+b*A+x*L,u[5]=y*S+b*D+x*N,u[8]=y*v+b*R+x*M,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],s=e[1],o=e[2],u=e[3],c=e[4],d=e[5],p=e[6],m=e[7],g=e[8];return t*c*g-t*d*m-s*u*g+s*d*p+o*u*m-o*c*p}invert(){let e=this.elements,t=e[0],s=e[1],o=e[2],u=e[3],c=e[4],d=e[5],p=e[6],m=e[7],g=e[8],_=g*c-d*m,y=d*p-g*u,b=m*u-c*p,x=t*_+s*y+o*b;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let C=1/x;return e[0]=_*C,e[1]=(o*m-g*s)*C,e[2]=(d*s-o*c)*C,e[3]=y*C,e[4]=(g*t-o*p)*C,e[5]=(o*u-d*t)*C,e[6]=b*C,e[7]=(s*p-m*t)*C,e[8]=(c*t-s*u)*C,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,o,u,c,d){let p=Math.cos(u),m=Math.sin(u);return this.set(s*p,s*m,-s*(p*c+m*d)+c+e,-o*m,o*p,-o*(-m*c+p*d)+d+t,0,0,1),this}scale(e,t){return hl("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(fp.makeScale(e,t)),this}rotate(e){return hl("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(fp.makeRotation(-e)),this}translate(e,t){return hl("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(fp.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,s=e.elements;for(let o=0;o<9;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){let s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};bm.prototype.isMatrix3=!0;var tt=bm,fp=new tt,py=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),my=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xM(){let r={enabled:!0,workingColorSpace:lo,spaces:{},convert:function(o,u,c){return this.enabled===!1||u===c||!u||!c||(this.spaces[u].transfer===kt&&(o.r=Xr(o.r),o.g=Xr(o.g),o.b=Xr(o.b)),this.spaces[u].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[u].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===kt&&(o.r=ma(o.r),o.g=ma(o.g),o.b=ma(o.b))),o},workingToColorSpace:function(o,u){return this.convert(o,this.workingColorSpace,u)},colorSpaceToWorking:function(o,u){return this.convert(o,u,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Qr?ml:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,u=this.workingColorSpace){return o.fromArray(this.spaces[u].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,u,c){return o.copy(this.spaces[c].fromXYZ).multiply(this.spaces[u].toXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[lo]:{primaries:e,whitePoint:s,transfer:ml,toXYZ:py,fromXYZ:my,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Nn},outputColorSpaceConfig:{drawingBufferColorSpace:Nn}},[Nn]:{primaries:e,whitePoint:s,transfer:kt,toXYZ:py,fromXYZ:my,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Nn}}}),r}var gt=xM();function Xr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ma(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var na,Gc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{na===void 0&&(na=gl("canvas")),na.width=e.width,na.height=e.height;let o=na.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),s=na}return s.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=gl("canvas");t.width=e.width,t.height=e.height;let s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);let o=s.getImageData(0,0,e.width,e.height),u=o.data;for(let c=0;c<u.length;c++)u[c]=Xr(u[c]/255)*255;return s.putImageData(o,0,0),t}else if(e.data){let t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(Xr(t[s]/255)*255):t[s]=Xr(t[s]);return{data:t,width:e.width,height:e.height}}else return Ye("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},MM=0,_a=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:MM++}),this.uuid=Gl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let u;if(Array.isArray(o)){u=[];for(let c=0,d=o.length;c<d;c++)o[c].isDataTexture?u.push(dp(o[c].image)):u.push(dp(o[c]))}else u=dp(o);s.url=u}return t||(e.images[this.uuid]=s),s}};function dp(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Gc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Ye("Texture: Unable to serialize Texture."),{})}var wM=0,hp=new Y,si=class r extends Mr{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,s=Sr,o=Sr,u=ri,c=Jr,d=Ri,p=Kn,m=r.DEFAULT_ANISOTROPY,g=Qr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wM++}),this.uuid=Gl(),this.name="",this.source=new _a(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=u,this.minFilter=c,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(hp).x}get height(){return this.source.getSize(hp).y}get depth(){return this.source.getSize(hp).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let s=e[t];if(s===void 0){Ye(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let o=this[t];if(o===void 0){Ye(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&s&&o.isVector2&&s.isVector2||o&&s&&o.isVector3&&s.isVector3||o&&s&&o.isMatrix3&&s.isMatrix3?o.copy(s):this[t]=s}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==em)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zc:e.x=e.x-Math.floor(e.x);break;case Sr:e.x=e.x<0?0:1;break;case Bc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zc:e.y=e.y-Math.floor(e.y);break;case Sr:e.y=e.y<0?0:1;break;case Bc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};si.DEFAULT_IMAGE=null;si.DEFAULT_MAPPING=em;si.DEFAULT_ANISOTROPY=1;var Sm=class Sm{constructor(e=0,t=0,s=0,o=1){this.x=e,this.y=t,this.z=s,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,o){return this.x=e,this.y=t,this.z=s,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,s=this.y,o=this.z,u=this.w,c=e.elements;return this.x=c[0]*t+c[4]*s+c[8]*o+c[12]*u,this.y=c[1]*t+c[5]*s+c[9]*o+c[13]*u,this.z=c[2]*t+c[6]*s+c[10]*o+c[14]*u,this.w=c[3]*t+c[7]*s+c[11]*o+c[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,o,u,p=e.elements,m=p[0],g=p[4],_=p[8],y=p[1],b=p[5],x=p[9],C=p[2],S=p[6],v=p[10];if(Math.abs(g-y)<.01&&Math.abs(_-C)<.01&&Math.abs(x-S)<.01){if(Math.abs(g+y)<.1&&Math.abs(_+C)<.1&&Math.abs(x+S)<.1&&Math.abs(m+b+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let D=(m+1)/2,R=(b+1)/2,L=(v+1)/2,N=(g+y)/4,M=(_+C)/4,P=(x+S)/4;return D>R&&D>L?D<.01?(s=0,o=.707106781,u=.707106781):(s=Math.sqrt(D),o=N/s,u=M/s):R>L?R<.01?(s=.707106781,o=0,u=.707106781):(o=Math.sqrt(R),s=N/o,u=P/o):L<.01?(s=.707106781,o=.707106781,u=0):(u=Math.sqrt(L),s=M/u,o=P/u),this.set(s,o,u,t),this}let A=Math.sqrt((S-x)*(S-x)+(_-C)*(_-C)+(y-g)*(y-g));return Math.abs(A)<.001&&(A=1),this.x=(S-x)/A,this.y=(_-C)/A,this.z=(y-g)/A,this.w=Math.acos((m+b+v-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this.w=Mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this.w=Mt(this.w,e,t),this}clampLength(e,t){let s=this.length();return this.divideScalar(s||1).multiplyScalar(Mt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Sm.prototype.isVector4=!0;var Zt=Sm,Wc=class extends Mr{constructor(e=1,t=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ri,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=s.depth,this.scissor=new Zt(0,0,e,t),this.scissorTest=!1,this.viewport=new Zt(0,0,e,t),this.textures=[];let o=s.count;for(let u=0;u<o;u++)this.textures[u]=new si({width:e,height:t,depth:s.depth}),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveColorBuffer=s.resolveColorBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.storeMultisampledColorBuffer=s.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=s.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=s.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:ri,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let o=0,u=this.textures.length;o<u;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=s,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,s=e.textures.length;t<s;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let o=Object.assign({},e.textures[t].image);this.textures[t].source=new _a(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ai=class extends Wc{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}},vl=class extends si{constructor(e=null,t=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Xc=class extends si{constructor(e=null,t=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var hf=class hf{constructor(e,t,s,o,u,c,d,p,m,g,_,y,b,x,C,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,o,u,c,d,p,m,g,_,y,b,x,C,S)}set(e,t,s,o,u,c,d,p,m,g,_,y,b,x,C,S){let v=this.elements;return v[0]=e,v[4]=t,v[8]=s,v[12]=o,v[1]=u,v[5]=c,v[9]=d,v[13]=p,v[2]=m,v[6]=g,v[10]=_,v[14]=y,v[3]=b,v[7]=x,v[11]=C,v[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new hf().fromArray(this.elements)}copy(e){let t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){let t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,s=e.elements,o=1/ia.setFromMatrixColumn(e,0).length(),u=1/ia.setFromMatrixColumn(e,1).length(),c=1/ia.setFromMatrixColumn(e,2).length();return t[0]=s[0]*o,t[1]=s[1]*o,t[2]=s[2]*o,t[3]=0,t[4]=s[4]*u,t[5]=s[5]*u,t[6]=s[6]*u,t[7]=0,t[8]=s[8]*c,t[9]=s[9]*c,t[10]=s[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,s=e.x,o=e.y,u=e.z,c=Math.cos(s),d=Math.sin(s),p=Math.cos(o),m=Math.sin(o),g=Math.cos(u),_=Math.sin(u);if(e.order==="XYZ"){let y=c*g,b=c*_,x=d*g,C=d*_;t[0]=p*g,t[4]=-p*_,t[8]=m,t[1]=b+x*m,t[5]=y-C*m,t[9]=-d*p,t[2]=C-y*m,t[6]=x+b*m,t[10]=c*p}else if(e.order==="YXZ"){let y=p*g,b=p*_,x=m*g,C=m*_;t[0]=y+C*d,t[4]=x*d-b,t[8]=c*m,t[1]=c*_,t[5]=c*g,t[9]=-d,t[2]=b*d-x,t[6]=C+y*d,t[10]=c*p}else if(e.order==="ZXY"){let y=p*g,b=p*_,x=m*g,C=m*_;t[0]=y-C*d,t[4]=-c*_,t[8]=x+b*d,t[1]=b+x*d,t[5]=c*g,t[9]=C-y*d,t[2]=-c*m,t[6]=d,t[10]=c*p}else if(e.order==="ZYX"){let y=c*g,b=c*_,x=d*g,C=d*_;t[0]=p*g,t[4]=x*m-b,t[8]=y*m+C,t[1]=p*_,t[5]=C*m+y,t[9]=b*m-x,t[2]=-m,t[6]=d*p,t[10]=c*p}else if(e.order==="YZX"){let y=c*p,b=c*m,x=d*p,C=d*m;t[0]=p*g,t[4]=C-y*_,t[8]=x*_+b,t[1]=_,t[5]=c*g,t[9]=-d*g,t[2]=-m*g,t[6]=b*_+x,t[10]=y-C*_}else if(e.order==="XZY"){let y=c*p,b=c*m,x=d*p,C=d*m;t[0]=p*g,t[4]=-_,t[8]=m*g,t[1]=y*_+C,t[5]=c*g,t[9]=b*_-x,t[2]=x*_-b,t[6]=d*g,t[10]=C*_+y}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(TM,e,EM)}lookAt(e,t,s){let o=this.elements;return Ti.subVectors(e,t),Ti.lengthSq()===0&&(Ti.z=1),Ti.normalize(),Ss.crossVectors(s,Ti),Ss.lengthSq()===0&&(Math.abs(s.z)===1?Ti.x+=1e-4:Ti.z+=1e-4,Ti.normalize(),Ss.crossVectors(s,Ti)),Ss.normalize(),rc.crossVectors(Ti,Ss),o[0]=Ss.x,o[4]=rc.x,o[8]=Ti.x,o[1]=Ss.y,o[5]=rc.y,o[9]=Ti.y,o[2]=Ss.z,o[6]=rc.z,o[10]=Ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let s=e.elements,o=t.elements,u=this.elements,c=s[0],d=s[4],p=s[8],m=s[12],g=s[1],_=s[5],y=s[9],b=s[13],x=s[2],C=s[6],S=s[10],v=s[14],A=s[3],D=s[7],R=s[11],L=s[15],N=o[0],M=o[4],P=o[8],V=o[12],F=o[1],B=o[5],W=o[9],Z=o[13],O=o[2],Q=o[6],se=o[10],ee=o[14],me=o[3],ne=o[7],ce=o[11],he=o[15];return u[0]=c*N+d*F+p*O+m*me,u[4]=c*M+d*B+p*Q+m*ne,u[8]=c*P+d*W+p*se+m*ce,u[12]=c*V+d*Z+p*ee+m*he,u[1]=g*N+_*F+y*O+b*me,u[5]=g*M+_*B+y*Q+b*ne,u[9]=g*P+_*W+y*se+b*ce,u[13]=g*V+_*Z+y*ee+b*he,u[2]=x*N+C*F+S*O+v*me,u[6]=x*M+C*B+S*Q+v*ne,u[10]=x*P+C*W+S*se+v*ce,u[14]=x*V+C*Z+S*ee+v*he,u[3]=A*N+D*F+R*O+L*me,u[7]=A*M+D*B+R*Q+L*ne,u[11]=A*P+D*W+R*se+L*ce,u[15]=A*V+D*Z+R*ee+L*he,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],s=e[4],o=e[8],u=e[12],c=e[1],d=e[5],p=e[9],m=e[13],g=e[2],_=e[6],y=e[10],b=e[14],x=e[3],C=e[7],S=e[11],v=e[15],A=p*b-m*y,D=d*b-m*_,R=d*y-p*_,L=c*b-m*g,N=c*y-p*g,M=c*_-d*g;return t*(C*A-S*D+v*R)-s*(x*A-S*L+v*N)+o*(x*D-C*L+v*M)-u*(x*R-C*N+S*M)}determinantAffine(){let e=this.elements,t=e[0],s=e[4],o=e[8],u=e[1],c=e[5],d=e[9],p=e[2],m=e[6],g=e[10];return t*(c*g-d*m)-s*(u*g-d*p)+o*(u*m-c*p)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){let o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=s),this}invert(){let e=this.elements,t=e[0],s=e[1],o=e[2],u=e[3],c=e[4],d=e[5],p=e[6],m=e[7],g=e[8],_=e[9],y=e[10],b=e[11],x=e[12],C=e[13],S=e[14],v=e[15],A=t*d-s*c,D=t*p-o*c,R=t*m-u*c,L=s*p-o*d,N=s*m-u*d,M=o*m-u*p,P=g*C-_*x,V=g*S-y*x,F=g*v-b*x,B=_*S-y*C,W=_*v-b*C,Z=y*v-b*S,O=A*Z-D*W+R*B+L*F-N*V+M*P;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Q=1/O;return e[0]=(d*Z-p*W+m*B)*Q,e[1]=(o*W-s*Z-u*B)*Q,e[2]=(C*M-S*N+v*L)*Q,e[3]=(y*N-_*M-b*L)*Q,e[4]=(p*F-c*Z-m*V)*Q,e[5]=(t*Z-o*F+u*V)*Q,e[6]=(S*R-x*M-v*D)*Q,e[7]=(g*M-y*R+b*D)*Q,e[8]=(c*W-d*F+m*P)*Q,e[9]=(s*F-t*W-u*P)*Q,e[10]=(x*N-C*R+v*A)*Q,e[11]=(_*R-g*N-b*A)*Q,e[12]=(d*V-c*B-p*P)*Q,e[13]=(t*B-s*V+o*P)*Q,e[14]=(C*D-x*L-S*A)*Q,e[15]=(g*L-_*D+y*A)*Q,this}scale(e){let t=this.elements,s=e.x,o=e.y,u=e.z;return t[0]*=s,t[4]*=o,t[8]*=u,t[1]*=s,t[5]*=o,t[9]*=u,t[2]*=s,t[6]*=o,t[10]*=u,t[3]*=s,t[7]*=o,t[11]*=u,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,o))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let s=Math.cos(t),o=Math.sin(t),u=1-s,c=e.x,d=e.y,p=e.z,m=u*c,g=u*d;return this.set(m*c+s,m*d-o*p,m*p+o*d,0,m*d+o*p,g*d+s,g*p-o*c,0,m*p-o*d,g*p+o*c,u*p*p+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,o,u,c){return this.set(1,s,u,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,s){let o=this.elements,u=t._x,c=t._y,d=t._z,p=t._w,m=u+u,g=c+c,_=d+d,y=u*m,b=u*g,x=u*_,C=c*g,S=c*_,v=d*_,A=p*m,D=p*g,R=p*_,L=s.x,N=s.y,M=s.z;return o[0]=(1-(C+v))*L,o[1]=(b+R)*L,o[2]=(x-D)*L,o[3]=0,o[4]=(b-R)*N,o[5]=(1-(y+v))*N,o[6]=(S+A)*N,o[7]=0,o[8]=(x+D)*M,o[9]=(S-A)*M,o[10]=(1-(y+C))*M,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,s){let o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];let u=this.determinantAffine();if(u===0)return s.set(1,1,1),t.identity(),this;let c=ia.set(o[0],o[1],o[2]).length(),d=ia.set(o[4],o[5],o[6]).length(),p=ia.set(o[8],o[9],o[10]).length();u<0&&(c=-c),er.copy(this);let m=1/c,g=1/d,_=1/p;return er.elements[0]*=m,er.elements[1]*=m,er.elements[2]*=m,er.elements[4]*=g,er.elements[5]*=g,er.elements[6]*=g,er.elements[8]*=_,er.elements[9]*=_,er.elements[10]*=_,t.setFromRotationMatrix(er),s.x=c,s.y=d,s.z=p,this}makePerspective(e,t,s,o,u,c,d=Vi,p=!1){let m=this.elements,g=2*u/(t-e),_=2*u/(s-o),y=(t+e)/(t-e),b=(s+o)/(s-o),x,C;if(p)x=u/(c-u),C=c*u/(c-u);else if(d===Vi)x=-(c+u)/(c-u),C=-2*c*u/(c-u);else if(d===va)x=-c/(c-u),C=-c*u/(c-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=g,m[4]=0,m[8]=y,m[12]=0,m[1]=0,m[5]=_,m[9]=b,m[13]=0,m[2]=0,m[6]=0,m[10]=x,m[14]=C,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,t,s,o,u,c,d=Vi,p=!1){let m=this.elements,g=2/(t-e),_=2/(s-o),y=-(t+e)/(t-e),b=-(s+o)/(s-o),x,C;if(p)x=1/(c-u),C=c/(c-u);else if(d===Vi)x=-2/(c-u),C=-(c+u)/(c-u);else if(d===va)x=-1/(c-u),C=-u/(c-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=g,m[4]=0,m[8]=0,m[12]=y,m[1]=0,m[5]=_,m[9]=0,m[13]=b,m[2]=0,m[6]=0,m[10]=x,m[14]=C,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){let t=this.elements,s=e.elements;for(let o=0;o<16;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){let s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}};hf.prototype.isMatrix4=!0;var $t=hf,ia=new Y,er=new $t,TM=new Y(0,0,0),EM=new Y(1,1,1),Ss=new Y,rc=new Y,Ti=new Y,gy=new $t,vy=new wr,$r=class r{constructor(e=0,t=0,s=0,o=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,o=this._order){return this._x=e,this._y=t,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){let o=e.elements,u=o[0],c=o[4],d=o[8],p=o[1],m=o[5],g=o[9],_=o[2],y=o[6],b=o[10];switch(t){case"XYZ":this._y=Math.asin(Mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,b),this._z=Math.atan2(-c,u)):(this._x=Math.atan2(y,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,b),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-_,u),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-_,b),this._z=Math.atan2(-c,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-Mt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(y,b),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-c,m));break;case"YZX":this._z=Math.asin(Mt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-_,u)):(this._x=0,this._y=Math.atan2(d,b));break;case"XZY":this._z=Math.asin(-Mt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(y,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,b),this._y=0);break;default:Ye("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return gy.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gy,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vy.setFromEuler(this),this.setFromQuaternion(vy,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$r.DEFAULT_ORDER="XYZ";var Yr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},AM=0,yy=new Y,ra=new wr,Or=new $t,sc=new Y,ll=new Y,CM=new Y,RM=new wr,_y=new Y(1,0,0),by=new Y(0,1,0),Sy=new Y(0,0,1),xy={type:"added"},PM={type:"removed"},sa={type:"childadded",child:null},pp={type:"childremoved",child:null},Jn=class r extends Mr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:AM++}),this.uuid=Gl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new Y,t=new $r,s=new wr,o=new Y(1,1,1);function u(){s.setFromEuler(t,!1)}function c(){t.setFromQuaternion(s,void 0,!1)}t._onChange(u),s._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new $t},normalMatrix:{value:new tt}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ra.setFromAxisAngle(e,t),this.quaternion.multiply(ra),this}rotateOnWorldAxis(e,t){return ra.setFromAxisAngle(e,t),this.quaternion.premultiply(ra),this}rotateX(e){return this.rotateOnAxis(_y,e)}rotateY(e){return this.rotateOnAxis(by,e)}rotateZ(e){return this.rotateOnAxis(Sy,e)}translateOnAxis(e,t){return yy.copy(e).applyQuaternion(this.quaternion),this.position.add(yy.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_y,e)}translateY(e){return this.translateOnAxis(by,e)}translateZ(e){return this.translateOnAxis(Sy,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Or.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?sc.copy(e):sc.set(e,t,s);let o=this.parent;this.updateWorldMatrix(!0,!1),ll.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Or.lookAt(ll,sc,this.up):Or.lookAt(sc,ll,this.up),this.quaternion.setFromRotationMatrix(Or),o&&(Or.extractRotation(o.matrixWorld),ra.setFromRotationMatrix(Or),this.quaternion.premultiply(ra.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xy),sa.child=e,this.dispatchEvent(sa),sa.child=null):et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(PM),pp.child=e,this.dispatchEvent(pp),pp.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Or.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Or.multiply(e.parent.matrixWorld)),e.applyMatrix4(Or),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xy),sa.child=e,this.dispatchEvent(sa),sa.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,o=this.children.length;s<o;s++){let c=this.children[s].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);let o=this.children;for(let u=0,c=o.length;u<c;u++)o[u].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ll,e,CM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ll,RM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,s=e.y,o=e.z,u=this.matrix.elements;u[12]+=t-u[0]*t-u[4]*s-u[8]*o,u[13]+=s-u[1]*t-u[5]*s-u[9]*o,u[14]+=o-u[2]*t-u[6]*s-u[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t,s=!1){let o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),t===!0){let u=this.children;for(let c=0,d=u.length;c<d;c++)u[c].updateWorldMatrix(!1,!0,s)}}toJSON(e){let t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=u(e.geometries,this.geometry);let d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){let p=d.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){let _=p[m];u(e.shapes,_)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(u(e.materials,this.material[p]));o.material=d}else o.material=u(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){let p=this.animations[d];o.animations.push(u(e.animations,p))}}if(t){let d=c(e.geometries),p=c(e.materials),m=c(e.textures),g=c(e.images),_=c(e.shapes),y=c(e.skeletons),b=c(e.animations),x=c(e.nodes);d.length>0&&(s.geometries=d),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),g.length>0&&(s.images=g),_.length>0&&(s.shapes=_),y.length>0&&(s.skeletons=y),b.length>0&&(s.animations=b),x.length>0&&(s.nodes=x)}return s.object=o,s;function c(d){let p=[];for(let m in d){let g=d[m];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){let o=e.children[s];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Jn.DEFAULT_UP=new Y(0,1,0);Jn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Wr=class extends Jn{constructor(){super(),this.isGroup=!0,this.type="Group"}},IM={type:"move"},ba=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let o=null,u=null,c=null,d=this._targetRay,p=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){c=!0;for(let C of e.hand.values()){let S=t.getJointPose(C,s),v=this._getHandJoint(m,C);S!==null&&(v.matrix.fromArray(S.transform.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=S.radius),v.visible=S!==null}let g=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],y=g.position.distanceTo(_.position),b=.02,x=.005;m.inputState.pinching&&y>b+x?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&y<=b-x&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=t.getPose(e.gripSpace,s),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(o=t.getPose(e.targetRaySpace,s),o===null&&u!==null&&(o=u),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(IM)))}return d!==null&&(d.visible=o!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let s=new Wr;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}},w_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xs={h:0,s:0,l:0},oc={h:0,s:0,l:0};function mp(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}var st=class{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){let o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.colorSpaceToWorking(this,t),this}setRGB(e,t,s,o=gt.workingColorSpace){return this.r=e,this.g=t,this.b=s,gt.colorSpaceToWorking(this,o),this}setHSL(e,t,s,o=gt.workingColorSpace){if(e=_M(e,1),t=Mt(t,0,1),s=Mt(s,0,1),t===0)this.r=this.g=this.b=s;else{let u=s<=.5?s*(1+t):s+t-s*t,c=2*s-u;this.r=mp(c,u,e+1/3),this.g=mp(c,u,e),this.b=mp(c,u,e-1/3)}return gt.colorSpaceToWorking(this,o),this}setStyle(e,t=Nn){function s(u){u!==void 0&&parseFloat(u)<1&&Ye("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let u,c=o[1],d=o[2];switch(c){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,t);if(u=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(100,parseFloat(u[1]))/100,Math.min(100,parseFloat(u[2]))/100,Math.min(100,parseFloat(u[3]))/100,t);break;case"hsl":case"hsla":if(u=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(d))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,t);break;default:Ye("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){let u=o[1],c=u.length;if(c===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(u,16),t);Ye("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nn){let s=w_[e.toLowerCase()];return s!==void 0?this.setHex(s,t):Ye("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xr(e.r),this.g=Xr(e.g),this.b=Xr(e.b),this}copyLinearToSRGB(e){return this.r=ma(e.r),this.g=ma(e.g),this.b=ma(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nn){return gt.workingToColorSpace(Zn.copy(this),e),Math.round(Mt(Zn.r*255,0,255))*65536+Math.round(Mt(Zn.g*255,0,255))*256+Math.round(Mt(Zn.b*255,0,255))}getHexString(e=Nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.workingToColorSpace(Zn.copy(this),t);let s=Zn.r,o=Zn.g,u=Zn.b,c=Math.max(s,o,u),d=Math.min(s,o,u),p,m,g=(d+c)/2;if(d===c)p=0,m=0;else{let _=c-d;switch(m=g<=.5?_/(c+d):_/(2-c-d),c){case s:p=(o-u)/_+(o<u?6:0);break;case o:p=(u-s)/_+2;break;case u:p=(s-o)/_+4;break}p/=6}return e.h=p,e.s=m,e.l=g,e}getRGB(e,t=gt.workingColorSpace){return gt.workingToColorSpace(Zn.copy(this),t),e.r=Zn.r,e.g=Zn.g,e.b=Zn.b,e}getStyle(e=Nn){gt.workingToColorSpace(Zn.copy(this),e);let t=Zn.r,s=Zn.g,o=Zn.b;return e!==Nn?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(o*255)})`}offsetHSL(e,t,s){return this.getHSL(xs),this.setHSL(xs.h+e,xs.s+t,xs.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(xs),e.getHSL(oc);let s=up(xs.h,oc.h,t),o=up(xs.s,oc.s,t),u=up(xs.l,oc.l,t);return this.setHSL(s,o,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,s=this.g,o=this.b,u=e.elements;return this.r=u[0]*t+u[3]*s+u[6]*o,this.g=u[1]*t+u[4]*s+u[7]*o,this.b=u[2]*t+u[5]*s+u[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Zn=new st;st.NAMES=w_;var yl=class extends Jn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $r,this.environmentIntensity=1,this.environmentRotation=new $r,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},tr=new Y,zr=new Y,gp=new Y,Br=new Y,oa=new Y,aa=new Y,My=new Y,vp=new Y,yp=new Y,_p=new Y,bp=new Zt,Sp=new Zt,xp=new Zt,Gr=class r{constructor(e=new Y,t=new Y,s=new Y){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,o){o.subVectors(s,t),tr.subVectors(e,t),o.cross(tr);let u=o.lengthSq();return u>0?o.multiplyScalar(1/Math.sqrt(u)):o.set(0,0,0)}static getBarycoord(e,t,s,o,u){tr.subVectors(o,t),zr.subVectors(s,t),gp.subVectors(e,t);let c=tr.dot(tr),d=tr.dot(zr),p=tr.dot(gp),m=zr.dot(zr),g=zr.dot(gp),_=c*m-d*d;if(_===0)return u.set(0,0,0),null;let y=1/_,b=(m*p-d*g)*y,x=(c*g-d*p)*y;return u.set(1-b-x,x,b)}static containsPoint(e,t,s,o){return this.getBarycoord(e,t,s,o,Br)===null?!1:Br.x>=0&&Br.y>=0&&Br.x+Br.y<=1}static getInterpolation(e,t,s,o,u,c,d,p){return this.getBarycoord(e,t,s,o,Br)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Br.x),p.addScaledVector(c,Br.y),p.addScaledVector(d,Br.z),p)}static getInterpolatedAttribute(e,t,s,o,u,c){return bp.setScalar(0),Sp.setScalar(0),xp.setScalar(0),bp.fromBufferAttribute(e,t),Sp.fromBufferAttribute(e,s),xp.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(bp,u.x),c.addScaledVector(Sp,u.y),c.addScaledVector(xp,u.z),c}static isFrontFacing(e,t,s,o){return tr.subVectors(s,t),zr.subVectors(e,t),tr.cross(zr).dot(o)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,o){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,s,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return tr.subVectors(this.c,this.b),zr.subVectors(this.a,this.b),tr.cross(zr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,o,u){return r.getInterpolation(e,this.a,this.b,this.c,t,s,o,u)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let s=this.a,o=this.b,u=this.c,c,d;oa.subVectors(o,s),aa.subVectors(u,s),vp.subVectors(e,s);let p=oa.dot(vp),m=aa.dot(vp);if(p<=0&&m<=0)return t.copy(s);yp.subVectors(e,o);let g=oa.dot(yp),_=aa.dot(yp);if(g>=0&&_<=g)return t.copy(o);let y=p*_-g*m;if(y<=0&&p>=0&&g<=0&&p-g>0)return c=p/(p-g),t.copy(s).addScaledVector(oa,c);_p.subVectors(e,u);let b=oa.dot(_p),x=aa.dot(_p);if(x>=0&&b<=x)return t.copy(u);let C=b*m-p*x;if(C<=0&&m>=0&&x<=0)return d=m/(m-x),t.copy(s).addScaledVector(aa,d);let S=g*x-b*_;if(S<=0&&_-g>=0&&b-x>=0)return My.subVectors(u,o),d=(_-g)/(_-g+(b-x)),t.copy(o).addScaledVector(My,d);let v=1/(S+C+y);return c=C*v,d=y*v,t.copy(s).addScaledVector(oa,c).addScaledVector(aa,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Es=class{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(nr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(nr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let s=nr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let s=e.geometry;if(s!==void 0){let u=s.getAttribute("position");if(t===!0&&u!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let c=0,d=u.count;c<d;c++)e.isMesh===!0?e.getVertexPosition(c,nr):nr.fromBufferAttribute(u,c),nr.applyMatrix4(e.matrixWorld),this.expandByPoint(nr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ac.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),ac.copy(s.boundingBox)),ac.applyMatrix4(e.matrixWorld),this.union(ac)}let o=e.children;for(let u=0,c=o.length;u<c;u++)this.expandByObject(o[u],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,nr),nr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ul),lc.subVectors(this.max,ul),la.subVectors(e.a,ul),ua.subVectors(e.b,ul),ca.subVectors(e.c,ul),Ms.subVectors(ua,la),ws.subVectors(ca,ua),ro.subVectors(la,ca);let t=[0,-Ms.z,Ms.y,0,-ws.z,ws.y,0,-ro.z,ro.y,Ms.z,0,-Ms.x,ws.z,0,-ws.x,ro.z,0,-ro.x,-Ms.y,Ms.x,0,-ws.y,ws.x,0,-ro.y,ro.x,0];return!Mp(t,la,ua,ca,lc)||(t=[1,0,0,0,1,0,0,0,1],!Mp(t,la,ua,ca,lc))?!1:(uc.crossVectors(Ms,ws),t=[uc.x,uc.y,uc.z],Mp(t,la,ua,ca,lc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Hr=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],nr=new Y,ac=new Es,la=new Y,ua=new Y,ca=new Y,Ms=new Y,ws=new Y,ro=new Y,ul=new Y,lc=new Y,uc=new Y,so=new Y;function Mp(r,e,t,s,o){for(let u=0,c=r.length-3;u<=c;u+=3){so.fromArray(r,u);let d=o.x*Math.abs(so.x)+o.y*Math.abs(so.y)+o.z*Math.abs(so.z),p=e.dot(so),m=t.dot(so),g=s.dot(so);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>d)return!1}return!0}var xn=new Y,cc=new vt,NM=0,xr=class extends Mr{constructor(e,t,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:NM++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=y_,this.updateRanges=[],this.gpuType=or,this.version=0,this._normalizationScale=e!==void 0?hm(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let o=0,u=this.itemSize;o<u;o++)this.array[e+o]=t.array[s+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)cc.fromBufferAttribute(this,t),cc.applyMatrix3(e),this.setXY(t,cc.x,cc.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix3(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix4(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)xn.fromBufferAttribute(this,t),xn.applyNormalMatrix(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)xn.fromBufferAttribute(this,t),xn.transformDirection(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=this._denormalize(s)),s}setComponent(e,t,s){return this.normalized&&(s=this._normalize(s)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,o){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),s=this._normalize(s),o=this._normalize(o)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this}setXYZW(e,t,s,o,u){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),s=this._normalize(s),o=this._normalize(o),u=this._normalize(u)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):bM(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):SM(e,this.array)}};var _l=class extends xr{constructor(e,t,s){super(new Uint16Array(e),t,s)}};var bl=class extends xr{constructor(e,t,s){super(new Uint32Array(e),t,s)}};var Ln=class extends xr{constructor(e,t,s){super(new Float32Array(e),t,s)}},LM=new Es,cl=new Y,wp=new Y,uo=class{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let s=this.center;t!==void 0?s.copy(t):LM.setFromPoints(e).getCenter(s);let o=0;for(let u=0,c=e.length;u<c;u++)o=Math.max(o,s.distanceToSquared(e[u]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;cl.subVectors(e,this.center);let t=cl.lengthSq();if(t>this.radius*this.radius){let s=Math.sqrt(t),o=(s-this.radius)*.5;this.center.addScaledVector(cl,o/s),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wp.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(cl.copy(e.center).add(wp)),this.expandByPoint(cl.copy(e.center).sub(wp))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},DM=0,Hi=new $t,Tp=new Jn,fa=new Y,Ei=new Es,fl=new Es,In=new Y,rr=class r extends Mr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:DM++}),this.uuid=Gl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vM(e)?bl:_l)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let s=this.attributes.normal;if(s!==void 0){let u=new tt().getNormalMatrix(e);s.applyNormalMatrix(u),s.needsUpdate=!0}let o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Hi.makeRotationFromQuaternion(e),this.applyMatrix4(Hi),this}rotateX(e){return Hi.makeRotationX(e),this.applyMatrix4(Hi),this}rotateY(e){return Hi.makeRotationY(e),this.applyMatrix4(Hi),this}rotateZ(e){return Hi.makeRotationZ(e),this.applyMatrix4(Hi),this}translate(e,t,s){return Hi.makeTranslation(e,t,s),this.applyMatrix4(Hi),this}scale(e,t,s){return Hi.makeScale(e,t,s),this.applyMatrix4(Hi),this}lookAt(e){return Tp.lookAt(e),Tp.updateMatrix(),this.applyMatrix4(Tp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fa).negate(),this.translate(fa.x,fa.y,fa.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let s=[];for(let o=0,u=e.length;o<u;o++){let c=e[o];s.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Ln(s,3))}else{let s=Math.min(e.length,t.count);for(let o=0;o<s;o++){let u=e[o];t.setXYZ(o,u.x,u.y,u.z||0)}e.length>t.count&&Ye("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Es);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let u=t[s];Ei.setFromBufferAttribute(u),this.morphTargetsRelative?(In.addVectors(this.boundingBox.min,Ei.min),this.boundingBox.expandByPoint(In),In.addVectors(this.boundingBox.max,Ei.max),this.boundingBox.expandByPoint(In)):(this.boundingBox.expandByPoint(Ei.min),this.boundingBox.expandByPoint(Ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new uo);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){let s=this.boundingSphere.center;if(Ei.setFromBufferAttribute(e),t)for(let u=0,c=t.length;u<c;u++){let d=t[u];fl.setFromBufferAttribute(d),this.morphTargetsRelative?(In.addVectors(Ei.min,fl.min),Ei.expandByPoint(In),In.addVectors(Ei.max,fl.max),Ei.expandByPoint(In)):(Ei.expandByPoint(fl.min),Ei.expandByPoint(fl.max))}Ei.getCenter(s);let o=0;for(let u=0,c=e.count;u<c;u++)In.fromBufferAttribute(e,u),o=Math.max(o,s.distanceToSquared(In));if(t)for(let u=0,c=t.length;u<c;u++){let d=t[u],p=this.morphTargetsRelative;for(let m=0,g=d.count;m<g;m++)In.fromBufferAttribute(d,m),p&&(fa.fromBufferAttribute(e,m),In.add(fa)),o=Math.max(o,s.distanceToSquared(In))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let s=t.position,o=t.normal,u=t.uv,c=this.getAttribute("tangent");(c===void 0||c.count!==s.count)&&(c=new xr(new Float32Array(4*s.count),4),this.setAttribute("tangent",c));let d=[],p=[],m=new Uint8Array(s.count);for(let V=0;V<s.count;V++)d[V]=new Y,p[V]=new Y;let g=new Y,_=new Y,y=new Y,b=new vt,x=new vt,C=new vt,S=new Y,v=new Y;function A(V,F,B){m[V]=m[F]=m[B]=1,g.fromBufferAttribute(s,V),_.fromBufferAttribute(s,F),y.fromBufferAttribute(s,B),b.fromBufferAttribute(u,V),x.fromBufferAttribute(u,F),C.fromBufferAttribute(u,B),_.sub(g),y.sub(g),x.sub(b),C.sub(b);let W=1/(x.x*C.y-C.x*x.y);isFinite(W)&&(S.copy(_).multiplyScalar(C.y).addScaledVector(y,-x.y).multiplyScalar(W),v.copy(y).multiplyScalar(x.x).addScaledVector(_,-C.x).multiplyScalar(W),d[V].add(S),d[F].add(S),d[B].add(S),p[V].add(v),p[F].add(v),p[B].add(v))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let V=0,F=D.length;V<F;++V){let B=D[V],W=B.start,Z=B.count;for(let O=W,Q=W+Z;O<Q;O+=3)A(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let R=new Y,L=new Y,N=new Y,M=new Y;function P(V){N.fromBufferAttribute(o,V),M.copy(N);let F=d[V];R.copy(F),R.sub(N.multiplyScalar(N.dot(F))).normalize(),L.crossVectors(M,F);let W=L.dot(p[V])<0?-1:1;c.setXYZW(V,R.x,R.y,R.z,W)}for(let V=0,F=s.count;V<F;++V)m[V]&&P(V);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==t.count)s=new xr(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let y=0,b=s.count;y<b;y++)s.setXYZ(y,0,0,0);let o=new Y,u=new Y,c=new Y,d=new Y,p=new Y,m=new Y,g=new Y,_=new Y;if(e)for(let y=0,b=e.count;y<b;y+=3){let x=e.getX(y+0),C=e.getX(y+1),S=e.getX(y+2);o.fromBufferAttribute(t,x),u.fromBufferAttribute(t,C),c.fromBufferAttribute(t,S),g.subVectors(c,u),_.subVectors(o,u),g.cross(_),d.fromBufferAttribute(s,x),p.fromBufferAttribute(s,C),m.fromBufferAttribute(s,S),d.add(g),p.add(g),m.add(g),s.setXYZ(x,d.x,d.y,d.z),s.setXYZ(C,p.x,p.y,p.z),s.setXYZ(S,m.x,m.y,m.z)}else for(let y=0,b=t.count;y<b;y+=3)o.fromBufferAttribute(t,y+0),u.fromBufferAttribute(t,y+1),c.fromBufferAttribute(t,y+2),g.subVectors(c,u),_.subVectors(o,u),g.cross(_),s.setXYZ(y+0,g.x,g.y,g.z),s.setXYZ(y+1,g.x,g.y,g.z),s.setXYZ(y+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)In.fromBufferAttribute(e,t),In.normalize(),e.setXYZ(t,In.x,In.y,In.z)}toNonIndexed(){function e(d,p){let m=d.array,g=d.itemSize,_=d.normalized,y=new m.constructor(p.length*g),b=0,x=0;for(let C=0,S=p.length;C<S;C++){d.isInterleavedBufferAttribute?b=p[C]*d.data.stride+d.offset:b=p[C]*g;for(let v=0;v<g;v++)y[x++]=m[b++]}return new xr(y,g,_)}if(this.index===null)return Ye("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,s=this.index.array,o=this.attributes;for(let d in o){let p=o[d],m=e(p,s);t.setAttribute(d,m)}let u=this.morphAttributes;for(let d in u){let p=[],m=u[d];for(let g=0,_=m.length;g<_;g++){let y=m[g],b=e(y,s);p.push(b)}t.morphAttributes[d]=p}t.morphTargetsRelative=this.morphTargetsRelative;let c=this.groups;for(let d=0,p=c.length;d<p;d++){let m=c[d];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let p=this.parameters;for(let m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let s=this.attributes;for(let p in s){let m=s[p];e.data.attributes[p]=m.toJSON(e.data)}let o={},u=!1;for(let p in this.morphAttributes){let m=this.morphAttributes[p],g=[];for(let _=0,y=m.length;_<y;_++){let b=m[_];g.push(b.toJSON(e.data))}g.length>0&&(o[p]=g,u=!0)}u&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);let c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));let d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let s=e.index;s!==null&&this.setIndex(s.clone());let o=e.attributes;for(let m in o){let g=o[m];this.setAttribute(m,g.clone(t))}let u=e.morphAttributes;for(let m in u){let g=[],_=u[m];for(let y=0,b=_.length;y<b;y++)g.push(_[y].clone(t));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;let c=e.groups;for(let m=0,g=c.length;m<g;m++){let _=c[m];this.addGroup(_.start,_.count,_.materialIndex)}let d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());let p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Ep=new Y,kM=new Y,FM=new tt,ir=class{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,o){return this.normal.set(e,t,s),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){let o=Ep.subVectors(s,t).cross(kM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,s=!0){let o=e.delta(Ep),u=this.normal.dot(o);if(u===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let c=-(e.start.dot(this.normal)+this.constant)/u;return s===!0&&(c<0||c>1)?null:t.copy(e.start).addScaledVector(o,c)}intersectsLine(e){let t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let s=t||FM.getNormalMatrix(e),o=this.coplanarPoint(Ep).applyMatrix4(e),u=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},UM=0,jr=class extends Mr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:UM++}),this.uuid=Gl(),this.name="",this.type="Material",this.blending=Ta,this.side=Ls,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xp,this.blendDst=qp,this.blendEquation=vo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=ga,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=d_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pc,this.stencilZFail=Pc,this.stencilZPass=Pc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let s=e[t];if(s===void 0){Ye(`Material: parameter '${t}' has value of undefined.`);continue}let o=this[t];if(o===void 0){Ye(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(s):o&&o.isVector2&&s&&s.isVector2||o&&o.isEuler&&s&&s.isEuler||o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[t]=s}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,s.blending=this.blending,s.side=this.side,s.shadowSide=this.shadowSide,s.vertexColors=this.vertexColors,s.opacity=this.opacity,s.transparent=this.transparent,s.blendSrc=this.blendSrc,s.blendDst=this.blendDst,s.blendEquation=this.blendEquation,s.blendSrcAlpha=this.blendSrcAlpha,s.blendDstAlpha=this.blendDstAlpha,s.blendEquationAlpha=this.blendEquationAlpha,s.blendColor=this.blendColor.getHex(),s.blendAlpha=this.blendAlpha,s.depthFunc=this.depthFunc,s.depthTest=this.depthTest,s.depthWrite=this.depthWrite,s.colorWrite=this.colorWrite,s.clipIntersection=this.clipIntersection,s.clipShadows=this.clipShadows,s.stencilWriteMask=this.stencilWriteMask,s.stencilFunc=this.stencilFunc,s.stencilRef=this.stencilRef,s.stencilFuncMask=this.stencilFuncMask,s.stencilFail=this.stencilFail,s.stencilZFail=this.stencilZFail,s.stencilZPass=this.stencilZPass,s.stencilWrite=this.stencilWrite,s.polygonOffset=this.polygonOffset,s.polygonOffsetFactor=this.polygonOffsetFactor,s.polygonOffsetUnits=this.polygonOffsetUnits,s.dithering=this.dithering,s.alphaTest=this.alphaTest,s.alphaHash=this.alphaHash,s.alphaToCoverage=this.alphaToCoverage,s.premultipliedAlpha=this.premultipliedAlpha,s.forceSinglePass=this.forceSinglePass,s.allowOverride=this.allowOverride,s.visible=this.visible,s.toneMapped=this.toneMapped,s.name=this.name,this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(s.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(s.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(s.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(s.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(s.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(s.clippingPlanes=this.clippingPlanes.map(u=>u.toJSON())),this.rotation!==void 0&&(s.rotation=this.rotation),this.depthPacking!==void 0&&(s.depthPacking=this.depthPacking),this.linewidth!==void 0&&(s.linewidth=this.linewidth),this.linecap!==void 0&&(s.linecap=this.linecap),this.linejoin!==void 0&&(s.linejoin=this.linejoin),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.wireframe!==void 0&&(s.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(s.flatShading=this.flatShading),this.fog!==void 0&&(s.fog=this.fog),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(u){let c=[];for(let d in u){let p=u[d];delete p.metadata,c.push(p)}return c}if(t){let u=o(e.textures),c=o(e.images);u.length>0&&(s.textures=u),c.length>0&&(s.images=c)}return s}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new st().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(s=>new ir().fromJSON(s))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new vt().fromArray(s)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new vt().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,s=null;if(t!==null){let o=t.length;s=new Array(o);for(let u=0;u!==o;++u)s[u]=t[u].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Vr=new Y,Ap=new Y,fc=new Y,dc=new Y,Sa=class{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Vr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vr.copy(this.origin).addScaledVector(this.direction,t),Vr.distanceToSquared(e))}distanceSqToSegment(e,t,s,o){Ap.copy(e).add(t).multiplyScalar(.5),fc.copy(t).sub(e).normalize(),dc.copy(this.origin).sub(Ap);let u=e.distanceTo(t)*.5,c=-this.direction.dot(fc),d=dc.dot(this.direction),p=-dc.dot(fc),m=dc.lengthSq(),g=Math.abs(1-c*c),_,y,b,x;if(g>0)if(_=c*p-d,y=c*d-p,x=u*g,_>=0)if(y>=-x)if(y<=x){let C=1/g;_*=C,y*=C,b=_*(_+c*y+2*d)+y*(c*_+y+2*p)+m}else y=u,_=Math.max(0,-(c*y+d)),b=-_*_+y*(y+2*p)+m;else y=-u,_=Math.max(0,-(c*y+d)),b=-_*_+y*(y+2*p)+m;else y<=-x?(_=Math.max(0,-(-c*u+d)),y=_>0?-u:Math.min(Math.max(-u,-p),u),b=-_*_+y*(y+2*p)+m):y<=x?(_=0,y=Math.min(Math.max(-u,-p),u),b=y*(y+2*p)+m):(_=Math.max(0,-(c*u+d)),y=_>0?u:Math.min(Math.max(-u,-p),u),b=-_*_+y*(y+2*p)+m);else y=c>0?-u:u,_=Math.max(0,-(c*y+d)),b=-_*_+y*(y+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(Ap).addScaledVector(fc,y),b}intersectSphere(e,t){if(e.radius<0)return null;Vr.subVectors(e.center,this.origin);let s=Vr.dot(this.direction),o=Vr.dot(Vr)-s*s,u=e.radius*e.radius;if(o>u)return null;let c=Math.sqrt(u-o),d=s-c,p=s+c;return p<0?null:d<0?this.at(p,t):this.at(d,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){let s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,o,u,c,d,p,m=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,y=this.origin;return m>=0?(s=(e.min.x-y.x)*m,o=(e.max.x-y.x)*m):(s=(e.max.x-y.x)*m,o=(e.min.x-y.x)*m),g>=0?(u=(e.min.y-y.y)*g,c=(e.max.y-y.y)*g):(u=(e.max.y-y.y)*g,c=(e.min.y-y.y)*g),s>c||u>o||((u>s||isNaN(s))&&(s=u),(c<o||isNaN(o))&&(o=c),_>=0?(d=(e.min.z-y.z)*_,p=(e.max.z-y.z)*_):(d=(e.max.z-y.z)*_,p=(e.min.z-y.z)*_),s>p||d>o)||((d>s||s!==s)&&(s=d),(p<o||o!==o)&&(o=p),o<0)?null:this.at(s>=0?s:o,t)}intersectsBox(e){return this.intersectBox(e,Vr)!==null}intersectTriangle(e,t,s,o,u){let c=this.origin,d=this.direction,p=d.x,m=d.y,g=d.z,_=e.x-c.x,y=e.y-c.y,b=e.z-c.z,x=t.x-c.x,C=t.y-c.y,S=t.z-c.z,v=s.x-c.x,A=s.y-c.y,D=s.z-c.z,R=Math.abs(p),L=Math.abs(m),N=Math.abs(g),M,P,V,F,B,W,Z,O,Q,se,ee,me;if(R>=L&&R>=N?(V=p,W=_,Q=x,me=v,p>=0?(M=m,P=g,F=y,B=b,Z=C,O=S,se=A,ee=D):(M=g,P=m,F=b,B=y,Z=S,O=C,se=D,ee=A)):L>=N?(V=m,W=y,Q=C,me=A,m>=0?(M=g,P=p,F=b,B=_,Z=S,O=x,se=D,ee=v):(M=p,P=g,F=_,B=b,Z=x,O=S,se=v,ee=D)):(V=g,W=b,Q=S,me=D,g>=0?(M=p,P=m,F=_,B=y,Z=x,O=C,se=v,ee=A):(M=m,P=p,F=y,B=_,Z=C,O=x,se=A,ee=v)),V===0)return null;let ne=M/V,ce=P/V,he=1/V,Be=F-ne*W,Ve=B-ce*W,re=Z-ne*Q,Pe=O-ce*Q,ke=se-ne*me,We=ee-ce*me,Ne=ke*Pe-We*re,Ke=Be*We-Ve*ke,zt=re*Ve-Pe*Be;if(o){if(Ne<0||Ke<0||zt<0)return null}else if((Ne<0||Ke<0||zt<0)&&(Ne>0||Ke>0||zt>0))return null;let qe=Ne+Ke+zt;if(qe===0)return null;let wt=he*(Ne*W+Ke*Q+zt*me);return(qe>0?wt<0:wt>0)?null:this.at(wt/qe,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xa=class extends jr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $r,this.combine=$p,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},wy=new $t,oo=new Sa,hc=new uo,Ty=new Y,pc=new Y,mc=new Y,gc=new Y,Cp=new Y,vc=new Y,Ey=new Y,yc=new Y,Gi=class extends Jn{constructor(e=new rr,t=new xa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){let o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,c=o.length;u<c;u++){let d=o[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,t){let s=this.geometry,o=s.attributes.position,u=s.morphAttributes.position,c=s.morphTargetsRelative;t.fromBufferAttribute(o,e);let d=this.morphTargetInfluences;if(u&&d){vc.set(0,0,0);for(let p=0,m=u.length;p<m;p++){let g=d[p],_=u[p];g!==0&&(Cp.fromBufferAttribute(_,e),c?vc.addScaledVector(Cp,g):vc.addScaledVector(Cp.sub(t),g))}t.add(vc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let s=this.geometry,o=this.material,u=this.matrixWorld;o!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),hc.copy(s.boundingSphere),hc.applyMatrix4(u),oo.copy(e.ray).recast(e.near),!(hc.containsPoint(oo.origin)===!1&&(oo.intersectSphere(hc,Ty)===null||oo.origin.distanceToSquared(Ty)>(e.far-e.near)**2))&&(wy.copy(u).invert(),oo.copy(e.ray).applyMatrix4(wy),!(s.boundingBox!==null&&oo.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,oo)))}_computeIntersections(e,t,s){let o,u=this.geometry,c=this.material,d=u.index,p=u.attributes.position,m=u.attributes.uv,g=u.attributes.uv1,_=u.attributes.normal,y=u.groups,b=u.drawRange;if(d!==null)if(Array.isArray(c))for(let x=0,C=y.length;x<C;x++){let S=y[x],v=c[S.materialIndex],A=Math.max(S.start,b.start),D=Math.min(d.count,Math.min(S.start+S.count,b.start+b.count));for(let R=A,L=D;R<L;R+=3){let N=d.getX(R),M=d.getX(R+1),P=d.getX(R+2);o=_c(this,v,e,s,m,g,_,N,M,P),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{let x=Math.max(0,b.start),C=Math.min(d.count,b.start+b.count);for(let S=x,v=C;S<v;S+=3){let A=d.getX(S),D=d.getX(S+1),R=d.getX(S+2);o=_c(this,c,e,s,m,g,_,A,D,R),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(p!==void 0)if(Array.isArray(c))for(let x=0,C=y.length;x<C;x++){let S=y[x],v=c[S.materialIndex],A=Math.max(S.start,b.start),D=Math.min(p.count,Math.min(S.start+S.count,b.start+b.count));for(let R=A,L=D;R<L;R+=3){let N=R,M=R+1,P=R+2;o=_c(this,v,e,s,m,g,_,N,M,P),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{let x=Math.max(0,b.start),C=Math.min(p.count,b.start+b.count);for(let S=x,v=C;S<v;S+=3){let A=S,D=S+1,R=S+2;o=_c(this,c,e,s,m,g,_,A,D,R),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}};function OM(r,e,t,s,o,u,c,d){let p;if(e.side===oi?p=s.intersectTriangle(c,u,o,!0,d):p=s.intersectTriangle(o,u,c,e.side===Ls,d),p===null)return null;yc.copy(d),yc.applyMatrix4(r.matrixWorld);let m=t.ray.origin.distanceTo(yc);return m<t.near||m>t.far?null:{distance:m,point:yc.clone(),object:r}}function _c(r,e,t,s,o,u,c,d,p,m){r.getVertexPosition(d,pc),r.getVertexPosition(p,mc),r.getVertexPosition(m,gc);let g=OM(r,e,t,s,pc,mc,gc,Ey);if(g){let _=new Y;Gr.getBarycoord(Ey,pc,mc,gc,_),o&&(g.uv=Gr.getInterpolatedAttribute(o,d,p,m,_,new vt)),u&&(g.uv1=Gr.getInterpolatedAttribute(u,d,p,m,_,new vt)),c&&(g.normal=Gr.getInterpolatedAttribute(c,d,p,m,_,new Y),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));let y={a:d,b:p,c:m,normal:new Y,materialIndex:0};Gr.getNormal(pc,mc,gc,y.normal),g.face=y,g.barycoord=_}return g}var qc=class extends si{constructor(e=null,t=1,s=1,o,u,c,d,p,m=Dn,g=Dn,_,y){super(null,c,d,p,m,g,o,u,_,y),this.isDataTexture=!0,this.image={data:e,width:t,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ao=new uo,zM=new vt(.5,.5),bc=new Y,As=class{constructor(e=new ir,t=new ir,s=new ir,o=new ir,u=new ir,c=new ir){this.planes=[e,t,s,o,u,c]}set(e,t,s,o,u,c){let d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(s),d[3].copy(o),d[4].copy(u),d[5].copy(c),this}copy(e){let t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=Vi,s=!1){let o=this.planes,u=e.elements,c=u[0],d=u[1],p=u[2],m=u[3],g=u[4],_=u[5],y=u[6],b=u[7],x=u[8],C=u[9],S=u[10],v=u[11],A=u[12],D=u[13],R=u[14],L=u[15];if(o[0].setComponents(m-c,b-g,v-x,L-A).normalize(),o[1].setComponents(m+c,b+g,v+x,L+A).normalize(),o[2].setComponents(m+d,b+_,v+C,L+D).normalize(),o[3].setComponents(m-d,b-_,v-C,L-D).normalize(),s)o[4].setComponents(p,y,S,R).normalize(),o[5].setComponents(m-p,b-y,v-S,L-R).normalize();else if(o[4].setComponents(m-p,b-y,v-S,L-R).normalize(),t===Vi)o[5].setComponents(m+p,b+y,v+S,L+R).normalize();else if(t===va)o[5].setComponents(p,y,S,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ao.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ao.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ao)}intersectsSprite(e){ao.center.set(0,0,0);let t=zM.distanceTo(e.center);return ao.radius=.7071067811865476+t,ao.applyMatrix4(e.matrixWorld),this.intersectsSphere(ao)}intersectsSphere(e){let t=this.planes,s=e.center,o=-e.radius;for(let u=0;u<6;u++)if(t[u].distanceToPoint(s)<o)return!1;return!0}intersectsBox(e){let t=this.planes;for(let s=0;s<6;s++){let o=t[s];if(bc.x=o.normal.x>0?e.max.x:e.min.x,bc.y=o.normal.y>0?e.max.y:e.min.y,bc.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(bc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Ay=new $t,$c=class r{constructor(){this.coordinateSystem=Vi,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,s=this._frustums;for(let o=0;o<t.length;o++){let u=t[o];Ay.multiplyMatrices(u.projectionMatrix,u.matrixWorldInverse),s[o]===void 0&&(s[o]=new As),s[o].setFromProjectionMatrix(Ay,u.coordinateSystem,u.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let s=0;s<this._count;s++)if(t[s].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let s=0;s<this._count;s++)if(t[s].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let s=0;s<this._count;s++)if(t[s].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let s=0;s<this._count;s++)if(t[s].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let s=0;s<this._count;s++)if(t[s].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,s=e._frustums;for(let o=0;o<e._count;o++)t[o]===void 0&&(t[o]=new As),t[o].copy(s[o]);return this._count=e._count,this}clone(){return new r().copy(this)}};var co=class extends jr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new st(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Yc=new Y,jc=new Y,Cy=new $t,dl=new Sa,Sc=new uo,Rp=new Y,Ry=new Y,Zc=class extends Jn{constructor(e=new rr,t=new co){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,s=[0];for(let o=1,u=t.count;o<u;o++)Yc.fromBufferAttribute(t,o-1),jc.fromBufferAttribute(t,o),s[o]=s[o-1],s[o]+=Yc.distanceTo(jc);e.setAttribute("lineDistance",new Ln(s,1))}else Ye("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let s=this.geometry,o=this.matrixWorld,u=e.params.Line.threshold,c=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Sc.copy(s.boundingSphere),Sc.applyMatrix4(o),Sc.radius+=u,e.ray.intersectsSphere(Sc)===!1)return;Cy.copy(o).invert(),dl.copy(e.ray).applyMatrix4(Cy);let d=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=this.isLineSegments?2:1,g=s.index,y=s.attributes.position;if(g!==null){let b=Math.max(0,c.start),x=Math.min(g.count,c.start+c.count);for(let C=b,S=x-1;C<S;C+=m){let v=g.getX(C),A=g.getX(C+1),D=xc(this,e,dl,p,v,A,C);D&&t.push(D)}if(this.isLineLoop){let C=g.getX(x-1),S=g.getX(b),v=xc(this,e,dl,p,C,S,x-1);v&&t.push(v)}}else{let b=Math.max(0,c.start),x=Math.min(y.count,c.start+c.count);for(let C=b,S=x-1;C<S;C+=m){let v=xc(this,e,dl,p,C,C+1,C);v&&t.push(v)}if(this.isLineLoop){let C=xc(this,e,dl,p,x-1,b,x-1);C&&t.push(C)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){let o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,c=o.length;u<c;u++){let d=o[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}};function xc(r,e,t,s,o,u,c){let d=r.geometry.attributes.position;if(Yc.fromBufferAttribute(d,o),jc.fromBufferAttribute(d,u),t.distanceSqToSegment(Yc,jc,Rp,Ry)>s)return;Rp.applyMatrix4(r.matrixWorld);let m=e.ray.origin.distanceTo(Rp);if(!(m<e.near||m>e.far))return{distance:m,point:Ry.clone().applyMatrix4(r.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:r}}var Py=new Y,Iy=new Y,Sl=class extends Zc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,s=[];for(let o=0,u=t.count;o<u;o+=2)Py.fromBufferAttribute(t,o),Iy.fromBufferAttribute(t,o+1),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+Py.distanceTo(Iy);e.setAttribute("lineDistance",new Ln(s,1))}else Ye("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var xl=class extends si{constructor(e=[],t=yo,s,o,u,c,d,p,m,g){super(e,t,s,o,u,c,d,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ml=class extends si{constructor(e,t,s,o,u,c,d,p,m){super(e,t,s,o,u,c,d,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Zr=class extends si{constructor(e,t,s=sr,o,u,c,d=Dn,p=Dn,m,g=qr,_=1){if(g!==qr&&g!==Kr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let y={width:e,height:t,depth:_};super(y,o,u,c,d,p,g,s,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new _a(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},wl=class extends Zr{constructor(e,t=sr,s=yo,o,u,c=Dn,d=Dn,p,m=qr){let g={width:e,height:e,depth:1},_=[g,g,g,g,g,g];super(e,e,t,s,o,u,c,d,p,m),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Tl=class extends si{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Cs=class r extends rr{constructor(e=1,t=1,s=1,o=1,u=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:o,heightSegments:u,depthSegments:c};let d=this;o=Math.floor(o),u=Math.floor(u),c=Math.floor(c);let p=[],m=[],g=[],_=[],y=0,b=0;x("z","y","x",-1,-1,s,t,e,c,u,0),x("z","y","x",1,-1,s,t,-e,c,u,1),x("x","z","y",1,1,e,s,t,o,c,2),x("x","z","y",1,-1,e,s,-t,o,c,3),x("x","y","z",1,-1,e,t,s,o,u,4),x("x","y","z",-1,-1,e,t,-s,o,u,5),this.setIndex(p),this.setAttribute("position",new Ln(m,3)),this.setAttribute("normal",new Ln(g,3)),this.setAttribute("uv",new Ln(_,2));function x(C,S,v,A,D,R,L,N,M,P,V){let F=R/M,B=L/P,W=R/2,Z=L/2,O=N/2,Q=M+1,se=P+1,ee=0,me=0,ne=new Y;for(let ce=0;ce<se;ce++){let he=ce*B-Z;for(let Be=0;Be<Q;Be++){let Ve=Be*F-W;ne[C]=Ve*A,ne[S]=he*D,ne[v]=O,m.push(ne.x,ne.y,ne.z),ne[C]=0,ne[S]=0,ne[v]=N>0?1:-1,g.push(ne.x,ne.y,ne.z),_.push(Be/M),_.push(1-ce/P),ee+=1}}for(let ce=0;ce<P;ce++)for(let he=0;he<M;he++){let Be=y+he+Q*ce,Ve=y+he+Q*(ce+1),re=y+(he+1)+Q*(ce+1),Pe=y+(he+1)+Q*ce;p.push(Be,Ve,Pe),p.push(Ve,re,Pe),me+=6}d.addGroup(b,me,V),b+=me,y+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var El=class r extends rr{constructor(e=1,t=1,s=1,o=32,u=1,c=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:s,radialSegments:o,heightSegments:u,openEnded:c,thetaStart:d,thetaLength:p};let m=this;o=Math.floor(o),u=Math.floor(u);let g=[],_=[],y=[],b=[],x=0,C=[],S=s/2,v=0;A(),c===!1&&(e>0&&D(!0),t>0&&D(!1)),this.setIndex(g),this.setAttribute("position",new Ln(_,3)),this.setAttribute("normal",new Ln(y,3)),this.setAttribute("uv",new Ln(b,2));function A(){let R=new Y,L=new Y,N=0,M=(t-e)/s;for(let P=0;P<=u;P++){let V=[],F=P/u,B=F*(t-e)+e;for(let W=0;W<=o;W++){let Z=W/o,O=Z*p+d,Q=Math.sin(O),se=Math.cos(O);L.x=B*Q,L.y=-F*s+S,L.z=B*se,_.push(L.x,L.y,L.z),R.set(Q,M,se).normalize(),y.push(R.x,R.y,R.z),b.push(Z,1-F),V.push(x++)}C.push(V)}for(let P=0;P<o;P++)for(let V=0;V<u;V++){let F=C[V][P],B=C[V+1][P],W=C[V+1][P+1],Z=C[V][P+1];(e>0||V!==0)&&(g.push(F,B,Z),N+=3),(t>0||V!==u-1)&&(g.push(B,W,Z),N+=3)}m.addGroup(v,N,0),v+=N}function D(R){let L=x,N=new vt,M=new Y,P=0,V=R===!0?e:t,F=R===!0?1:-1;for(let W=1;W<=o;W++)_.push(0,S*F,0),y.push(0,F,0),b.push(.5,.5),x++;let B=x;for(let W=0;W<=o;W++){let O=W/o*p+d,Q=Math.cos(O),se=Math.sin(O);M.x=V*se,M.y=S*F,M.z=V*Q,_.push(M.x,M.y,M.z),y.push(0,F,0),N.x=Q*.5+.5,N.y=se*.5*F+.5,b.push(N.x,N.y),x++}for(let W=0;W<o;W++){let Z=L+W,O=B+W;R===!0?g.push(O,O+1,Z):g.push(O+1,O,Z),P+=3}m.addGroup(v,P,R===!0?1:2),v+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Mc=new Y,wc=new Y,Pp=new Y,Tc=new Gr,Al=class extends rr{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let o=Math.pow(10,4),u=Math.cos(Ic*t),c=e.getIndex(),d=e.getAttribute("position"),p=c?c.count:d.count,m=[0,0,0],g=["a","b","c"],_=new Array(3),y=new Map,b=[];for(let x=0;x<p;x+=3){c?(m[0]=c.getX(x),m[1]=c.getX(x+1),m[2]=c.getX(x+2)):(m[0]=x,m[1]=x+1,m[2]=x+2);let{a:C,b:S,c:v}=Tc;if(C.fromBufferAttribute(d,m[0]),S.fromBufferAttribute(d,m[1]),v.fromBufferAttribute(d,m[2]),Tc.getNormal(Pp),_[0]=`${Math.round(C.x*o)},${Math.round(C.y*o)},${Math.round(C.z*o)}`,_[1]=`${Math.round(S.x*o)},${Math.round(S.y*o)},${Math.round(S.z*o)}`,_[2]=`${Math.round(v.x*o)},${Math.round(v.y*o)},${Math.round(v.z*o)}`,!(_[0]===_[1]||_[1]===_[2]||_[2]===_[0]))for(let A=0;A<3;A++){let D=(A+1)%3,R=_[A],L=_[D],N=Tc[g[A]],M=Tc[g[D]],P=`${R}_${L}`,V=`${L}_${R}`,F=y.get(V);F?(Pp.dot(F.normal)<=u&&(b.push(N.x,N.y,N.z),b.push(M.x,M.y,M.z)),y.set(V,null)):y.has(P)||y.set(P,{index0:m[A],index1:m[D],normal:Pp.clone()})}}for(let x of y.values())if(x){let{index0:C,index1:S}=x;Mc.fromBufferAttribute(d,C),wc.fromBufferAttribute(d,S),b.push(Mc.x,Mc.y,Mc.z),b.push(wc.x,wc.y,wc.z)}this.setAttribute("position",new Ln(b,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};var fo=class r extends rr{constructor(e=1,t=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:o};let u=e/2,c=t/2,d=Math.floor(s),p=Math.floor(o),m=d+1,g=p+1,_=e/d,y=t/p,b=[],x=[],C=[],S=[];for(let v=0;v<g;v++){let A=v*y-c;for(let D=0;D<m;D++){let R=D*_-u;x.push(R,-A,0),C.push(0,0,1),S.push(D/d),S.push(1-v/p)}}for(let v=0;v<p;v++)for(let A=0;A<d;A++){let D=A+m*v,R=A+m*(v+1),L=A+1+m*(v+1),N=A+1+m*v;b.push(D,R,N),b.push(R,L,N)}this.setIndex(b),this.setAttribute("position",new Ln(x,3)),this.setAttribute("normal",new Ln(C,3)),this.setAttribute("uv",new Ln(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}};function bo(r){let e={};for(let t in r){e[t]={};for(let s in r[t]){let o=r[t][s];if(Ny(o))o.isRenderTargetTexture?(Ye("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=o.clone();else if(Array.isArray(o))if(Ny(o[0])){let u=[];for(let c=0,d=o.length;c<d;c++)u[c]=o[c].clone();e[t][s]=u}else e[t][s]=o.slice();else e[t][s]=o}}return e}function Qn(r){let e={};for(let t=0;t<r.length;t++){let s=bo(r[t]);for(let o in s)e[o]=s[o]}return e}function Ny(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function BM(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function pm(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}var T_={clone:bo,merge:Qn},HM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,VM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Wi=class extends jr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=HM,this.fragmentShader=VM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bo(e.uniforms),this.uniformsGroups=BM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let o in this.uniforms){let c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let s={};for(let o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let s in e.uniforms){let o=e.uniforms[s];switch(this.uniforms[s]={},o.type){case"t":this.uniforms[s].value=t[o.value]||null;break;case"c":this.uniforms[s].value=new st().setHex(o.value);break;case"v2":this.uniforms[s].value=new vt().fromArray(o.value);break;case"v3":this.uniforms[s].value=new Y().fromArray(o.value);break;case"v4":this.uniforms[s].value=new Zt().fromArray(o.value);break;case"m3":this.uniforms[s].value=new tt().fromArray(o.value);break;case"m4":this.uniforms[s].value=new $t().fromArray(o.value);break;default:this.uniforms[s].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let s in e.extensions)this.extensions[s]=e.extensions[s];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Jc=class extends Wi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ho=class extends jr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new st(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new st(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qf,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $r,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Kc=class extends jr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=c_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Qc=class extends jr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function da(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Ec(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}var Rs=class{constructor(e,t,s,o){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=o!==void 0?o:new t.constructor(s),this.sampleValues=t,this.valueSize=s,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,s=this._cachedIndex,o=t[s],u=t[s-1];e:{t:{let c;n:{i:if(!(e<o)){for(let d=s+2;;){if(o===void 0){if(e<u)break i;return s=t.length,this._cachedIndex=s,this.copySampleValue_(s-1)}if(s===d)break;if(u=o,o=t[++s],e<o)break t}c=t.length;break n}if(!(e>=u)){let d=t[1];e<d&&(s=2,u=d);for(let p=s-2;;){if(u===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===p)break;if(o=u,u=t[--s-1],e>=u)break t}c=s,s=0;break n}break e}for(;s<c;){let d=s+c>>>1;e<t[d]?c=d:s=d+1}if(o=t[s],u=t[s-1],u===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(o===void 0)return s=t.length,this._cachedIndex=s,this.copySampleValue_(s-1)}this._cachedIndex=s,this.intervalChanged_(s,u,o)}return this.interpolate_(s,u,e,o)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,s=this.sampleValues,o=this.valueSize,u=e*o;for(let c=0;c!==o;++c)t[c]=s[u+c];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ef=class extends Rs{constructor(e,t,s,o){super(e,t,s,o),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Lp,endingEnd:Lp}}intervalChanged_(e,t,s){let o=this.parameterPositions,u=e-2,c=e+1,d=o[u],p=o[c];if(d===void 0)switch(this.getSettings_().endingStart){case Dp:u=e,d=2*t-s;break;case kp:u=o.length-2,d=t+o[u]-o[u+1];break;default:u=e,d=s}if(p===void 0)switch(this.getSettings_().endingEnd){case Dp:c=e,p=2*s-t;break;case kp:c=1,p=s+o[1]-o[0];break;default:c=e-1,p=t}let m=(s-t)*.5,g=this.valueSize;this._weightPrev=m/(t-d),this._weightNext=m/(p-s),this._offsetPrev=u*g,this._offsetNext=c*g}interpolate_(e,t,s,o){let u=this.resultBuffer,c=this.sampleValues,d=this.valueSize,p=e*d,m=p-d,g=this._offsetPrev,_=this._offsetNext,y=this._weightPrev,b=this._weightNext,x=(s-t)/(o-t),C=x*x,S=C*x,v=-y*S+2*y*C-y*x,A=(1+y)*S+(-1.5-2*y)*C+(-.5+y)*x+1,D=(-1-b)*S+(1.5+b)*C+.5*x,R=b*S-b*C;for(let L=0;L!==d;++L)u[L]=v*c[g+L]+A*c[m+L]+D*c[p+L]+R*c[_+L];return u}},tf=class extends Rs{constructor(e,t,s,o){super(e,t,s,o)}interpolate_(e,t,s,o){let u=this.resultBuffer,c=this.sampleValues,d=this.valueSize,p=e*d,m=p-d,g=(s-t)/(o-t),_=1-g;for(let y=0;y!==d;++y)u[y]=c[m+y]*_+c[p+y]*g;return u}},nf=class extends Rs{constructor(e,t,s,o){super(e,t,s,o)}interpolate_(e){return this.copySampleValue_(e-1)}},rf=class extends Rs{interpolate_(e,t,s,o){let u=this.resultBuffer,c=this.sampleValues,d=this.valueSize,p=e*d,m=p-d,g=this.inTangents,_=this.outTangents;if(!g||!_){let x=(s-t)/(o-t),C=1-x;for(let S=0;S!==d;++S)u[S]=c[m+S]*C+c[p+S]*x;return u}let y=d*2,b=e-1;for(let x=0;x!==d;++x){let C=c[m+x],S=c[p+x],v=b*y+x*2,A=_[v],D=_[v+1],R=e*y+x*2,L=g[R],N=g[R+1],M=WM(s,t,A,L,o);u[x]=E_(M,C,D,N,S)}return u}};function E_(r,e,t,s,o){let u=1-r;return u*u*u*e+3*u*u*r*t+3*u*r*r*s+r*r*r*o}function GM(r,e,t,s,o){let u=1-r;return 3*u*u*(t-e)+6*u*r*(s-t)+3*r*r*(o-s)}function WM(r,e,t,s,o){let u=(r-e)/(o-e);for(let c=0;c<8;c++){let d=E_(u,e,t,s,o)-r;if(Math.abs(d)<1e-10)break;let p=GM(u,e,t,s,o);if(Math.abs(p)<1e-10)break;u=Math.max(0,Math.min(1,u-d/p))}return u}var Ci=class{constructor(e,t,s,o){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=da(t,this.TimeBufferType),this.values=da(s,this.ValueBufferType),this.setInterpolation(o||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,s;if(t.toJSON!==this.toJSON)s=t.toJSON(e);else{s={name:e.name,times:da(e.times,Array),values:da(e.values,Array)};let o=e.getInterpolation();o!==e.DefaultInterpolation&&(s.interpolation=o),Ec(e.settings)&&(s.settings={inTangents:da(e.settings.inTangents,Array),outTangents:da(e.settings.outTangents,Array)})}return s.type=e.ValueTypeName,s}InterpolantFactoryMethodDiscrete(e){return new nf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new tf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ef(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new rf(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case pl:t=this.InterpolantFactoryMethodDiscrete;break;case Hc:t=this.InterpolantFactoryMethodLinear;break;case Rc:t=this.InterpolantFactoryMethodSmooth;break;case Np:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let s="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(s);return Ye("KeyframeTrack:",s),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return pl;case this.InterpolantFactoryMethodLinear:return Hc;case this.InterpolantFactoryMethodSmooth:return Rc;case this.InterpolantFactoryMethodBezier:return Np}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let s=0,o=t.length;s!==o;++s)t[s]+=e;Ec(this.settings)&&(Ly(this.settings.inTangents,e),Ly(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let s=0,o=t.length;s!==o;++s)t[s]*=e;Ec(this.settings)&&(Dy(this.settings.inTangents,e),Dy(this.settings.outTangents,e))}return this}trim(e,t){let s=this.times,o=s.length,u=0,c=o-1;for(;u!==o&&s[u]<e;)++u;for(;c!==-1&&s[c]>t;)--c;if(++c,u!==0||c!==o){u>=c&&(c=Math.max(c,1),u=c-1);let d=this.getValueSize();this.times=s.slice(u,c),this.values=this.values.slice(u*d,c*d)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(et("KeyframeTrack: Invalid value size in track.",this),e=!1);let s=this.times,o=this.values,u=s.length;u===0&&(et("KeyframeTrack: Track is empty.",this),e=!1);let c=null;for(let d=0;d!==u;d++){let p=s[d];if(typeof p=="number"&&isNaN(p)){et("KeyframeTrack: Time is not a valid number.",this,d,p),e=!1;break}if(c!==null&&c>p){et("KeyframeTrack: Out of order keys.",this,d,p,c),e=!1;break}c=p}if(o!==void 0&&yM(o))for(let d=0,p=o.length;d!==p;++d){let m=o[d];if(isNaN(m)){et("KeyframeTrack: Value is not a valid number.",this,d,m),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),s=this.getValueSize(),o=this.getInterpolation()===Rc,u=e.length-1,c=1;for(let d=1;d<u;++d){let p=!1,m=e[d],g=e[d+1];if(m!==g&&(d!==1||m!==e[0]))if(o)p=!0;else{let _=d*s,y=_-s,b=_+s;for(let x=0;x!==s;++x){let C=t[_+x];if(C!==t[y+x]||C!==t[b+x]){p=!0;break}}}if(p){if(d!==c){e[c]=e[d];let _=d*s,y=c*s;for(let b=0;b!==s;++b)t[y+b]=t[_+b]}++c}}if(u>0){e[c]=e[u];for(let d=u*s,p=c*s,m=0;m!==s;++m)t[p+m]=t[d+m];++c}return c!==e.length?(this.times=e.slice(0,c),this.values=t.slice(0,c*s)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),s=this.constructor,o=new s(this.name,e,t);return o.createInterpolant=this.createInterpolant,Ec(this.settings)&&(o.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),o}};function Ly(r,e){for(let t=0,s=r.length;t!==s;t+=2)r[t]+=e}function Dy(r,e){for(let t=0,s=r.length;t!==s;t+=2)r[t]*=e}Ci.prototype.ValueTypeName="";Ci.prototype.TimeBufferType=Float32Array;Ci.prototype.ValueBufferType=Float32Array;Ci.prototype.DefaultInterpolation=Hc;var Ps=class extends Ci{constructor(e,t,s){super(e,t,s)}};Ps.prototype.ValueTypeName="bool";Ps.prototype.ValueBufferType=Array;Ps.prototype.DefaultInterpolation=pl;Ps.prototype.InterpolantFactoryMethodLinear=void 0;Ps.prototype.InterpolantFactoryMethodSmooth=void 0;var sf=class extends Ci{constructor(e,t,s,o){super(e,t,s,o)}};sf.prototype.ValueTypeName="color";var of=class extends Ci{constructor(e,t,s,o){super(e,t,s,o)}};of.prototype.ValueTypeName="number";var af=class extends Rs{constructor(e,t,s,o){super(e,t,s,o)}interpolate_(e,t,s,o){let u=this.resultBuffer,c=this.sampleValues,d=this.valueSize,p=(s-t)/(o-t),m=e*d;for(let g=m+d;m!==g;m+=4)wr.slerpFlat(u,0,c,m-d,c,m,p);return u}},Cl=class extends Ci{constructor(e,t,s,o){super(e,t,s,o)}InterpolantFactoryMethodLinear(e){return new af(this.times,this.values,this.getValueSize(),e)}};Cl.prototype.ValueTypeName="quaternion";Cl.prototype.InterpolantFactoryMethodSmooth=void 0;var Is=class extends Ci{constructor(e,t,s){super(e,t,s)}};Is.prototype.ValueTypeName="string";Is.prototype.ValueBufferType=Array;Is.prototype.DefaultInterpolation=pl;Is.prototype.InterpolantFactoryMethodLinear=void 0;Is.prototype.InterpolantFactoryMethodSmooth=void 0;var lf=class extends Ci{constructor(e,t,s,o){super(e,t,s,o)}};lf.prototype.ValueTypeName="vector";var uf=class{constructor(e,t,s){let o=this,u=!1,c=0,d=0,p,m=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=s,this._abortController=null,this.itemStart=function(g){d++,u===!1&&o.onStart!==void 0&&o.onStart(g,c,d),u=!0},this.itemEnd=function(g){c++,o.onProgress!==void 0&&o.onProgress(g,c,d),c===d&&(u=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(g){o.onError!==void 0&&o.onError(g)},this.resolveURL=function(g){return g=g.normalize("NFC"),p?p(g):g},this.setURLModifier=function(g){return p=g,this},this.addHandler=function(g,_){return m.push(g,_),this},this.removeHandler=function(g){let _=m.indexOf(g);return _!==-1&&m.splice(_,2),this},this.getHandler=function(g){for(let _=0,y=m.length;_<y;_+=2){let b=m[_],x=m[_+1];if(b.global&&(b.lastIndex=0),b.test(g))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},A_=new uf,cf=class{constructor(e){this.manager=e!==void 0?e:A_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let s=this;return new Promise(function(o,u){s.load(e,o,t,u)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};cf.DEFAULT_MATERIAL_NAME="__DEFAULT";var Rl=class extends Jn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new st(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var Ip=new $t,ky=new Y,Fy=new Y,ff=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.mapType=Kn,this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new As,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new Zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;ky.setFromMatrixPosition(e.matrixWorld),t.position.copy(ky),Fy.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fy),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,s,o){Ip.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),s.setFromProjectionMatrix(Ip,e.coordinateSystem,e.reversedDepth);let u=this._frameExtents,c=o?o.z/u.x:1,d=o?o.w/u.y:1,p=o?o.x/u.x:0,m=o?o.y/u.y:0;e.coordinateSystem===va||e.reversedDepth?t.set(.5*c,0,0,.5*c+p,0,.5*d,0,.5*d+m,0,0,1,0,0,0,0,1):t.set(.5*c,0,0,.5*c+p,0,.5*d,0,.5*d+m,0,0,.5,.5,0,0,0,1),t.multiply(Ip)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ac=new Y,Cc=new wr,br=new Y,Pl=class extends Jn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=Vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ac,Cc,br),br.x===1&&br.y===1&&br.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ac,Cc,br.set(1,1,1)).invert()}updateWorldMatrix(e,t,s=!1){super.updateWorldMatrix(e,t,s),this.matrixWorld.decompose(Ac,Cc,br),br.x===1&&br.y===1&&br.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ac,Cc,br.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ts=new Y,Uy=new vt,Oy=new vt,ii=class extends Pl{constructor(e=50,t=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Vc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ic*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vc*2*Math.atan(Math.tan(Ic*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){Ts.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ts.x,Ts.y).multiplyScalar(-e/Ts.z),Ts.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ts.x,Ts.y).multiplyScalar(-e/Ts.z)}getViewSize(e,t){return this.getViewBounds(e,Uy,Oy),t.subVectors(Oy,Uy)}setViewOffset(e,t,s,o,u,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ic*.5*this.fov)/this.zoom,s=2*t,o=this.aspect*s,u=-.5*o,c=this.view;if(this.view!==null&&this.view.enabled){let p=c.fullWidth,m=c.fullHeight;u+=c.offsetX*o/p,t-=c.offsetY*s/m,o*=c.width/p,s*=c.height/m}let d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+o,t,t-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var po=class extends Pl{constructor(e=-1,t=1,s=1,o=-1,u=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=o,this.near=u,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,o,u,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2,u=s-e,c=s+e,d=o+t,p=o-t;if(this.view!==null&&this.view.enabled){let m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,c=u+m*this.view.width,d-=g*this.view.offsetY,p=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,c,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Fp=class extends ff{constructor(){super(new po(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Il=class extends Rl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Jn.DEFAULT_UP),this.updateMatrix(),this.target=new Jn,this.shadow=new Fp}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Nl=class extends Rl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var ha=-90,pa=1,Ma=class extends Jn{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;let o=new ii(ha,pa,e,t);o.layers=this.layers,this.add(o);let u=new ii(ha,pa,e,t);u.layers=this.layers,this.add(u);let c=new ii(ha,pa,e,t);c.layers=this.layers,this.add(c);let d=new ii(ha,pa,e,t);d.layers=this.layers,this.add(d);let p=new ii(ha,pa,e,t);p.layers=this.layers,this.add(p);let m=new ii(ha,pa,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[s,o,u,c,d,p]=t;for(let m of t)this.remove(m);if(e===Vi)s.up.set(0,1,0),s.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===va)s.up.set(0,-1,0),s.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:s,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[u,c,d,p,m,g]=this.children,_=e.getRenderTarget(),y=e.getActiveCubeFace(),b=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let C=s.texture.mipmapsAutoUpdate;s.texture.mipmapsAutoUpdate=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(s,0,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(s,1,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(s,2,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(s,3,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(s,4,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),s.texture.mipmapsAutoUpdate=C,e.setRenderTarget(s,5,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,g),e.setRenderTarget(_,y,b),e.xr.enabled=x,s.texture.needsPMREMUpdate=!0}},df=class extends ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var mm="\\[\\]\\.:\\/",XM=new RegExp("["+mm+"]","g"),gm="[^"+mm+"]",qM="[^"+mm.replace("\\.","")+"]",$M=/((?:WC+[\/:])*)/.source.replace("WC",gm),YM=/(WCOD+)?/.source.replace("WCOD",qM),jM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gm),ZM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gm),JM=new RegExp("^"+$M+YM+jM+ZM+"$"),KM=["material","materials","bones","map"],Up=class{constructor(e,t,s){let o=s||Yt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,o)}getValue(e,t){this.bind();let s=this._targetGroup.nCachedObjects_,o=this._bindings[s];o!==void 0&&o.getValue(e,t)}setValue(e,t){let s=this._bindings;for(let o=this._targetGroup.nCachedObjects_,u=s.length;o!==u;++o)s[o].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,s=e.length;t!==s;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,s=e.length;t!==s;++t)e[t].unbind()}},Yt=class r{constructor(e,t,s){this.path=t,this.parsedPath=s||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,s){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,s):new r(e,t,s)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(XM,"")}static parseTrackName(e){let t=JM.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let s={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},o=s.nodeName&&s.nodeName.lastIndexOf(".");if(o!==void 0&&o!==-1){let u=s.nodeName.substring(o+1);KM.indexOf(u)!==-1&&(s.nodeName=s.nodeName.substring(0,o),s.objectName=u)}if(s.propertyName===null||s.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return s}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let s=e.skeleton.getBoneByName(t);if(s!==void 0)return s}if(e.children){let s=function(u){for(let c=0;c<u.length;c++){let d=u[c];if(d.name===t||d.uuid===t)return d;let p=s(d.children);if(p)return p}return null},o=s(e.children);if(o)return o}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let s=this.resolvedProperty;for(let o=0,u=s.length;o!==u;++o)e[t++]=s[o]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let s=this.resolvedProperty;for(let o=0,u=s.length;o!==u;++o)s[o]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let s=this.resolvedProperty;for(let o=0,u=s.length;o!==u;++o)s[o]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let s=this.resolvedProperty;for(let o=0,u=s.length;o!==u;++o)s[o]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,s=t.objectName,o=t.propertyName,u=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ye("PropertyBinding: No target node found for track: "+this.path+".");return}if(s){let m=t.objectIndex;switch(s){case"materials":if(!e.material){et("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){et("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){et("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let g=0;g<e.length;g++)if(e[g].name===m){m=g;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){et("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){et("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[s]===void 0){et("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[s]}if(m!==void 0){if(e[m]===void 0){et("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[m]}}let c=e[o];if(c===void 0){let m=t.nodeName;et("PropertyBinding: Trying to update property for track: "+m+"."+o+" but it wasn't found.",e);return}let d=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?d=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(d=this.Versioning.MatrixWorldNeedsUpdate);let p=this.BindingType.Direct;if(u!==void 0){if(o==="morphTargetInfluences"){if(!e.geometry){et("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){et("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[u]!==void 0&&(u=e.morphTargetDictionary[u])}p=this.BindingType.ArrayElement,this.resolvedProperty=c,this.propertyIndex=u}else c.fromArray!==void 0&&c.toArray!==void 0?(p=this.BindingType.HasFromToArray,this.resolvedProperty=c):Array.isArray(c)?(p=this.BindingType.EntireArray,this.resolvedProperty=c):this.propertyName=o;this.getValue=this.GetterByBindingType[p],this.setValue=this.SetterByBindingTypeAndVersioning[p][d]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Yt.Composite=Up;Yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Yt.prototype.GetterByBindingType=[Yt.prototype._getValue_direct,Yt.prototype._getValue_array,Yt.prototype._getValue_arrayElement,Yt.prototype._getValue_toArray];Yt.prototype.SetterByBindingTypeAndVersioning=[[Yt.prototype._setValue_direct,Yt.prototype._setValue_direct_setNeedsUpdate,Yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_array,Yt.prototype._setValue_array_setNeedsUpdate,Yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_arrayElement,Yt.prototype._setValue_arrayElement_setNeedsUpdate,Yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_fromArray,Yt.prototype._setValue_fromArray_setNeedsUpdate,Yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var b2=new Float32Array(1);var zy=new $t,Ll=class{constructor(e,t,s=0,o=1/0){this.ray=new Sa(e,t),this.near=s,this.far=o,this.camera=null,this.layers=new Yr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):et("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return zy.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zy),this}intersectObject(e,t=!0,s=[]){return Op(e,this,s,t),s.sort(By),s}intersectObjects(e,t=!0,s=[]){for(let o=0,u=e.length;o<u;o++)Op(e[o],this,s,t);return s.sort(By),s}};function By(r,e){return r.distance-e.distance}function Op(r,e,t,s){let o=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(o=!1),o===!0&&s===!0){let u=r.children;for(let c=0,d=u.length;c<d;c++)Op(u[c],e,t,!0)}}var Dl=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ye("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var xm=class xm{constructor(e,t,s,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,s,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let s=0;s<4;s++)this.elements[s]=e[s+t];return this}set(e,t,s,o){let u=this.elements;return u[0]=e,u[2]=t,u[1]=s,u[3]=o,this}};xm.prototype.isMatrix2=!0;var zp=xm;function vm(r,e,t,s){let o=QM(s);switch(t){case sm:return r*e;case am:return r*e/o.components*o.byteLength;case bf:return r*e/o.components*o.byteLength;case Ds:return r*e*2/o.components*o.byteLength;case Sf:return r*e*2/o.components*o.byteLength;case om:return r*e*3/o.components*o.byteLength;case Ri:return r*e*4/o.components*o.byteLength;case xf:return r*e*4/o.components*o.byteLength;case Ul:case Ol:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case zl:case Bl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case wf:case Ef:return Math.max(r,16)*Math.max(e,8)/4;case Mf:case Tf:return Math.max(r,8)*Math.max(e,8)/2;case Af:case Cf:case Pf:case If:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Rf:case Hl:case Nf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Lf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Df:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case kf:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Ff:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Uf:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Of:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case zf:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Bf:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Hf:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Vf:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Gf:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Wf:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Xf:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case qf:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case $f:case Yf:case jf:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Zf:case Jf:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Vl:case Kf:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function QM(r){switch(r){case Kn:case tm:return{byteLength:1,components:1};case Aa:case nm:case ar:return{byteLength:2,components:1};case yf:case _f:return{byteLength:2,components:4};case sr:case vf:case or:return{byteLength:4,components:1};case im:case rm:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ye("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function j_(){let r=null,e=!1,t=null,s=null;function o(u,c){s=r.requestAnimationFrame(o),t(u,c)}return{start:function(){e!==!0&&t!==null&&r!==null&&(s=r.requestAnimationFrame(o),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(u){t=u},setContext:function(u){r=u}}}function tw(r){let e=new WeakMap;function t(d,p){let m=d.array,g=d.usage,_=m.byteLength,y=r.createBuffer();r.bindBuffer(p,y),r.bufferData(p,m,g),d.onUploadCallback();let b;if(m instanceof Float32Array)b=r.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)b=r.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?b=r.HALF_FLOAT:b=r.UNSIGNED_SHORT;else if(m instanceof Int16Array)b=r.SHORT;else if(m instanceof Uint32Array)b=r.UNSIGNED_INT;else if(m instanceof Int32Array)b=r.INT;else if(m instanceof Int8Array)b=r.BYTE;else if(m instanceof Uint8Array)b=r.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)b=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:y,type:b,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:_}}function s(d,p,m){let g=p.array,_=p.updateRanges;if(r.bindBuffer(m,d),_.length===0)r.bufferSubData(m,0,g);else{_.sort((b,x)=>b.start-x.start);let y=0;for(let b=1;b<_.length;b++){let x=_[y],C=_[b];C.start<=x.start+x.count+1?x.count=Math.max(x.count,C.start+C.count-x.start):(++y,_[y]=C)}_.length=y+1;for(let b=0,x=_.length;b<x;b++){let C=_[b];r.bufferSubData(m,C.start*g.BYTES_PER_ELEMENT,g,C.start,C.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);let p=e.get(d);p&&(r.deleteBuffer(p.buffer),e.delete(d))}function c(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){let g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}let m=e.get(d);if(m===void 0)e.set(d,t(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,d,p),m.version=d.version}}return{get:o,remove:u,update:c}}var nw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,iw=`#ifdef USE_ALPHAHASH
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
#endif`,rw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ow=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,aw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lw=`#ifdef USE_AOMAP
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
#endif`,uw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cw=`#ifdef USE_BATCHING
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
#endif`,fw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pw=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mw=`#ifdef USE_IRIDESCENCE
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
#endif`,gw=`#ifdef USE_BUMPMAP
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
#endif`,vw=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,yw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_w=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,xw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Mw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ww=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Tw=`#define PI 3.141592653589793
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
} // validated`,Ew=`vec3 transformedNormal = objectNormal;
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
#endif`,Aw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Iw="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lw=`#ifdef USE_ENVMAP
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
#endif`,Dw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,kw=`#ifdef USE_ENVMAP
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
#endif`,Fw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Uw=`#ifdef USE_ENVMAP
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
#endif`,Ow=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vw=`#ifdef USE_GRADIENTMAP
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
}`,Gw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ww=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qw=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,$w=`#ifdef USE_ENVMAP
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
#endif`,Yw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kw=`PhysicalMaterial material;
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
#endif`,Qw=`uniform sampler2D dfgLUT;
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
}`,eT=`
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
#endif`,tT=`#if defined( RE_IndirectDiffuse )
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
#endif`,nT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,iT=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,rT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fT=`#if defined( USE_POINTS_UV )
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
#endif`,dT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mT=`#if defined( USE_MORPHCOLORS )
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
#endif`,gT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vT=`#ifdef USE_MORPHTARGETS
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
#endif`,yT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_T=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ST=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,MT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,wT=`#ifdef USE_NORMALMAP
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
#endif`,TT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ET=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,AT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,CT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,RT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,PT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,IT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,NT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,LT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,DT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,FT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,UT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,OT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,BT=`float getShadowMask() {
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
}`,HT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,VT=`#ifdef USE_SKINNING
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
#endif`,GT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,WT=`#ifdef USE_SKINNING
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
#endif`,XT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$T=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,YT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jT=`#ifdef USE_TRANSMISSION
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
#endif`,ZT=`#ifdef USE_TRANSMISSION
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
#endif`,JT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,KT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,tE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nE=`uniform sampler2D t2D;
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
}`,iE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rE=`uniform float backgroundBlurriness;
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
}`,sE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aE=`#include <common>
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
}`,lE=`#if DEPTH_PACKING == 3200
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
}`,uE=`#define DISTANCE
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
}`,cE=`#define DISTANCE
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
}`,fE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hE=`uniform float scale;
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
}`,pE=`uniform vec3 diffuse;
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
}`,mE=`#include <common>
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
}`,gE=`uniform vec3 diffuse;
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
}`,vE=`#define LAMBERT
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
}`,yE=`#define LAMBERT
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
}`,_E=`#define MATCAP
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
}`,bE=`#define MATCAP
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
}`,SE=`#define NORMAL
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
}`,xE=`#define NORMAL
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
}`,ME=`#define PHONG
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
}`,wE=`#define PHONG
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
}`,TE=`#define STANDARD
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
}`,EE=`#define STANDARD
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
}`,AE=`#define TOON
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
}`,CE=`#define TOON
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
}`,RE=`uniform float size;
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
}`,PE=`uniform vec3 diffuse;
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
}`,IE=`#include <common>
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
}`,NE=`uniform vec3 color;
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
}`,LE=`uniform float rotation;
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
}`,DE=`uniform vec3 diffuse;
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
}`,ut={alphahash_fragment:nw,alphahash_pars_fragment:iw,alphamap_fragment:rw,alphamap_pars_fragment:sw,alphatest_fragment:ow,alphatest_pars_fragment:aw,aomap_fragment:lw,aomap_pars_fragment:uw,batching_pars_vertex:cw,batching_vertex:fw,begin_vertex:dw,beginnormal_vertex:hw,bsdfs:pw,iridescence_fragment:mw,bumpmap_pars_fragment:gw,clipping_planes_fragment:vw,clipping_planes_pars_fragment:yw,clipping_planes_pars_vertex:_w,clipping_planes_vertex:bw,color_fragment:Sw,color_pars_fragment:xw,color_pars_vertex:Mw,color_vertex:ww,common:Tw,defaultnormal_vertex:Ew,displacementmap_pars_vertex:Aw,displacementmap_vertex:Cw,emissivemap_fragment:Rw,emissivemap_pars_fragment:Pw,colorspace_fragment:Iw,colorspace_pars_fragment:Nw,envmap_fragment:Lw,envmap_common_pars_fragment:Dw,envmap_pars_fragment:kw,envmap_pars_vertex:Fw,envmap_physical_pars_fragment:$w,envmap_vertex:Uw,fog_vertex:Ow,fog_pars_vertex:zw,fog_fragment:Bw,fog_pars_fragment:Hw,gradientmap_pars_fragment:Vw,lightmap_pars_fragment:Gw,lights_lambert_fragment:Ww,lights_lambert_pars_fragment:Xw,lights_pars_begin:qw,lights_toon_fragment:Yw,lights_toon_pars_fragment:jw,lights_phong_fragment:Zw,lights_phong_pars_fragment:Jw,lights_physical_fragment:Kw,lights_physical_pars_fragment:Qw,lights_fragment_begin:eT,lights_fragment_maps:tT,lights_fragment_end:nT,lightprobes_pars_fragment:iT,logdepthbuf_fragment:rT,logdepthbuf_pars_fragment:sT,logdepthbuf_pars_vertex:oT,logdepthbuf_vertex:aT,map_fragment:lT,map_pars_fragment:uT,map_particle_fragment:cT,map_particle_pars_fragment:fT,metalnessmap_fragment:dT,metalnessmap_pars_fragment:hT,morphinstance_vertex:pT,morphcolor_vertex:mT,morphnormal_vertex:gT,morphtarget_pars_vertex:vT,morphtarget_vertex:yT,normal_fragment_begin:_T,normal_fragment_maps:bT,normal_pars_fragment:ST,normal_pars_vertex:xT,normal_vertex:MT,normalmap_pars_fragment:wT,clearcoat_normal_fragment_begin:TT,clearcoat_normal_fragment_maps:ET,clearcoat_pars_fragment:AT,iridescence_pars_fragment:CT,opaque_fragment:RT,packing:PT,premultiplied_alpha_fragment:IT,project_vertex:NT,dithering_fragment:LT,dithering_pars_fragment:DT,roughnessmap_fragment:kT,roughnessmap_pars_fragment:FT,shadowmap_pars_fragment:UT,shadowmap_pars_vertex:OT,shadowmap_vertex:zT,shadowmask_pars_fragment:BT,skinbase_vertex:HT,skinning_pars_vertex:VT,skinning_vertex:GT,skinnormal_vertex:WT,specularmap_fragment:XT,specularmap_pars_fragment:qT,tonemapping_fragment:$T,tonemapping_pars_fragment:YT,transmission_fragment:jT,transmission_pars_fragment:ZT,uv_pars_fragment:JT,uv_pars_vertex:KT,uv_vertex:QT,worldpos_vertex:eE,background_vert:tE,background_frag:nE,backgroundCube_vert:iE,backgroundCube_frag:rE,cube_vert:sE,cube_frag:oE,depth_vert:aE,depth_frag:lE,distance_vert:uE,distance_frag:cE,equirect_vert:fE,equirect_frag:dE,linedashed_vert:hE,linedashed_frag:pE,meshbasic_vert:mE,meshbasic_frag:gE,meshlambert_vert:vE,meshlambert_frag:yE,meshmatcap_vert:_E,meshmatcap_frag:bE,meshnormal_vert:SE,meshnormal_frag:xE,meshphong_vert:ME,meshphong_frag:wE,meshphysical_vert:TE,meshphysical_frag:EE,meshtoon_vert:AE,meshtoon_frag:CE,points_vert:RE,points_frag:PE,shadow_vert:IE,shadow_frag:NE,sprite_vert:LE,sprite_frag:DE},Le={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},Ar={basic:{uniforms:Qn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:Qn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new st(0)},envMapIntensity:{value:1}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:Qn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:Qn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:Qn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new st(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:Qn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:Qn([Le.points,Le.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:Qn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:Qn([Le.common,Le.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:Qn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:Qn([Le.sprite,Le.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distance:{uniforms:Qn([Le.common,Le.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distance_vert,fragmentShader:ut.distance_frag},shadow:{uniforms:Qn([Le.lights,Le.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};Ar.physical={uniforms:Qn([Ar.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new tt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};var ed={r:0,b:0,g:0},kE=new $t,Z_=new tt;Z_.set(-1,0,0,0,1,0,0,0,1);function FE(r,e,t,s,o,u){let c=new st(0),d=o===!0?0:1,p,m,g=null,_=0,y=null;function b(A){let D=A.isScene===!0?A.background:null;if(D&&D.isTexture){let R=A.backgroundBlurriness>0;D=e.get(D,R)}return D}function x(A){let D=!1,R=b(A);R===null?S(c,d):R&&R.isColor&&(S(R,1),D=!0);let L=r.xr.getEnvironmentBlendMode();L==="additive"?t.buffers.color.setClear(0,0,0,1,u):L==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,u),(r.autoClear||D)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function C(A,D){let R=b(D);R&&R.isCubeTexture?(m===void 0&&(m=new Gi(new Cs(1,1,1),new Wi({name:"BackgroundCubeMaterial",uniforms:bo(Ar.backgroundCube.uniforms),vertexShader:Ar.backgroundCube.vertexShader,fragmentShader:Ar.backgroundCube.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(L,N,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),m.material.uniforms.envMap.value=R,m.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(kE.makeRotationFromEuler(D.backgroundRotation)).transpose(),R.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(Z_),m.material.toneMapped=gt.getTransfer(R.colorSpace)!==kt,(g!==R||_!==R.version||y!==r.toneMapping)&&(m.material.needsUpdate=!0,g=R,_=R.version,y=r.toneMapping),m.layers.enableAll(),A.unshift(m,m.geometry,m.material,0,0,null)):R&&R.isTexture&&(p===void 0&&(p=new Gi(new fo(2,2),new Wi({name:"BackgroundMaterial",uniforms:bo(Ar.background.uniforms),vertexShader:Ar.background.vertexShader,fragmentShader:Ar.background.fragmentShader,side:Ls,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(p)),p.material.uniforms.t2D.value=R,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=gt.getTransfer(R.colorSpace)!==kt,R.matrixAutoUpdate===!0&&R.updateMatrix(),p.material.uniforms.uvTransform.value.copy(R.matrix),(g!==R||_!==R.version||y!==r.toneMapping)&&(p.material.needsUpdate=!0,g=R,_=R.version,y=r.toneMapping),p.layers.enableAll(),A.unshift(p,p.geometry,p.material,0,0,null))}function S(A,D){A.getRGB(ed,pm(r)),t.buffers.color.setClear(ed.r,ed.g,ed.b,D,u)}function v(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return c},setClearColor:function(A,D=1){c.set(A),d=D,S(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(A){d=A,S(c,d)},render:x,addToRenderList:C,dispose:v}}function UE(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},o=y(null),u=o,c=!1;function d(B,W,Z,O,Q){let se=!1,ee=_(B,O,Z,W);u!==ee&&(u=ee,m(u.object)),se=b(B,O,Z,Q),se&&x(B,O,Z,Q),Q!==null&&e.update(Q,r.ELEMENT_ARRAY_BUFFER),(se||c)&&(c=!1,R(B,W,Z,O),Q!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function p(){return r.createVertexArray()}function m(B){return r.bindVertexArray(B)}function g(B){return r.deleteVertexArray(B)}function _(B,W,Z,O){let Q=O.wireframe===!0,se=s[W.id];se===void 0&&(se={},s[W.id]=se);let ee=B.isInstancedMesh===!0?B.id:0,me=se[ee];me===void 0&&(me={},se[ee]=me);let ne=me[Z.id];ne===void 0&&(ne={},me[Z.id]=ne);let ce=ne[Q];return ce===void 0&&(ce=y(p()),ne[Q]=ce),ce}function y(B){let W=[],Z=[],O=[];for(let Q=0;Q<t;Q++)W[Q]=0,Z[Q]=0,O[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:Z,attributeDivisors:O,object:B,attributes:{},index:null}}function b(B,W,Z,O){let Q=u.attributes,se=W.attributes,ee=0,me=Z.getAttributes();for(let ne in me)if(me[ne].location>=0){let he=Q[ne],Be=se[ne];if(Be===void 0&&(ne==="instanceMatrix"&&B.instanceMatrix&&(Be=B.instanceMatrix),ne==="instanceColor"&&B.instanceColor&&(Be=B.instanceColor)),he===void 0||he.attribute!==Be||Be&&he.data!==Be.data)return!0;ee++}return u.attributesNum!==ee||u.index!==O}function x(B,W,Z,O){let Q={},se=W.attributes,ee=0,me=Z.getAttributes();for(let ne in me)if(me[ne].location>=0){let he=se[ne];he===void 0&&(ne==="instanceMatrix"&&B.instanceMatrix&&(he=B.instanceMatrix),ne==="instanceColor"&&B.instanceColor&&(he=B.instanceColor));let Be={};Be.attribute=he,he&&he.data&&(Be.data=he.data),Q[ne]=Be,ee++}u.attributes=Q,u.attributesNum=ee,u.index=O}function C(){let B=u.newAttributes;for(let W=0,Z=B.length;W<Z;W++)B[W]=0}function S(B){v(B,0)}function v(B,W){let Z=u.newAttributes,O=u.enabledAttributes,Q=u.attributeDivisors;Z[B]=1,O[B]===0&&(r.enableVertexAttribArray(B),O[B]=1),Q[B]!==W&&(r.vertexAttribDivisor(B,W),Q[B]=W)}function A(){let B=u.newAttributes,W=u.enabledAttributes;for(let Z=0,O=W.length;Z<O;Z++)W[Z]!==B[Z]&&(r.disableVertexAttribArray(Z),W[Z]=0)}function D(B,W,Z,O,Q,se,ee){ee===!0?r.vertexAttribIPointer(B,W,Z,Q,se):r.vertexAttribPointer(B,W,Z,O,Q,se)}function R(B,W,Z,O){C();let Q=O.attributes,se=Z.getAttributes(),ee=W.defaultAttributeValues;for(let me in se){let ne=se[me];if(ne.location>=0){let ce=Q[me];if(ce===void 0&&(me==="instanceMatrix"&&B.instanceMatrix&&(ce=B.instanceMatrix),me==="instanceColor"&&B.instanceColor&&(ce=B.instanceColor)),ce!==void 0){let he=ce.normalized,Be=ce.itemSize,Ve=e.get(ce);if(Ve===void 0)continue;let re=Ve.buffer,Pe=Ve.type,ke=Ve.bytesPerElement,We=Pe===r.INT||Pe===r.UNSIGNED_INT||ce.gpuType===vf;if(ce.isInterleavedBufferAttribute){let Ne=ce.data,Ke=Ne.isInterleavedBuffer===!0?Ne.stride:Ne.itemSize,zt=ce.offset;if(Ne.isInstancedInterleavedBuffer||Ne.isInstancedBufferAttribute){for(let qe=0;qe<ne.locationSize;qe++)v(ne.location+qe,Ne.meshPerAttribute);B.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Ne.meshPerAttribute*Ne.count)}else for(let qe=0;qe<ne.locationSize;qe++)S(ne.location+qe);r.bindBuffer(r.ARRAY_BUFFER,re);for(let qe=0;qe<ne.locationSize;qe++)D(ne.location+qe,Be/ne.locationSize,Pe,he,Ke*ke,(zt+Be/ne.locationSize*qe)*ke,We)}else{if(ce.isInstancedBufferAttribute){for(let Ne=0;Ne<ne.locationSize;Ne++)v(ne.location+Ne,ce.meshPerAttribute);B.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Ne=0;Ne<ne.locationSize;Ne++)S(ne.location+Ne);r.bindBuffer(r.ARRAY_BUFFER,re);for(let Ne=0;Ne<ne.locationSize;Ne++)D(ne.location+Ne,Be/ne.locationSize,Pe,he,Be*ke,Be/ne.locationSize*Ne*ke,We)}}else if(ee!==void 0){let he=ee[me];if(he!==void 0)switch(he.length){case 2:r.vertexAttrib2fv(ne.location,he);break;case 3:r.vertexAttrib3fv(ne.location,he);break;case 4:r.vertexAttrib4fv(ne.location,he);break;default:r.vertexAttrib1fv(ne.location,he)}}}}A()}function L(){V();for(let B in s){let W=s[B];for(let Z in W){let O=W[Z];for(let Q in O){let se=O[Q];for(let ee in se)g(se[ee].object),delete se[ee];delete O[Q]}}delete s[B]}}function N(B){if(s[B.id]===void 0)return;let W=s[B.id];for(let Z in W){let O=W[Z];for(let Q in O){let se=O[Q];for(let ee in se)g(se[ee].object),delete se[ee];delete O[Q]}}delete s[B.id]}function M(B){for(let W in s){let Z=s[W];for(let O in Z){let Q=Z[O];if(Q[B.id]===void 0)continue;let se=Q[B.id];for(let ee in se)g(se[ee].object),delete se[ee];delete Q[B.id]}}}function P(B){for(let W in s){let Z=s[W],O=B.isInstancedMesh===!0?B.id:0,Q=Z[O];if(Q!==void 0){for(let se in Q){let ee=Q[se];for(let me in ee)g(ee[me].object),delete ee[me];delete Q[se]}delete Z[O],Object.keys(Z).length===0&&delete s[W]}}}function V(){F(),c=!0,u!==o&&(u=o,m(u.object))}function F(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:V,resetDefaultState:F,dispose:L,releaseStatesOfGeometry:N,releaseStatesOfObject:P,releaseStatesOfProgram:M,initAttributes:C,enableAttribute:S,disableUnusedAttributes:A}}function OE(r,e,t){let s;function o(p){s=p}function u(p,m){r.drawArrays(s,p,m),t.update(m,s,1)}function c(p,m,g){g!==0&&(r.drawArraysInstanced(s,p,m,g),t.update(m,s,g))}function d(p,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,m,0,g);let y=0;for(let b=0;b<g;b++)y+=m[b];t.update(y,s,1)}this.setMode=o,this.render=u,this.renderInstances=c,this.renderMultiDraw=d}function zE(r,e,t,s){let o;function u(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){let M=e.get("EXT_texture_filter_anisotropic");o=r.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(M){return!(M!==Ri&&s.convert(M)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(M){let P=M===ar&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==Kn&&M!==or&&!P&&s.convert(M)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function p(M){if(M==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp",g=p(m);g!==m&&(Ye("WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);let _=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=t.logarithmicDepthBuffer===!0&&_===!1;t.reversedDepthBuffer===!0&&_===!1&&Ye("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&_===!0&&Ye("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let b=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),A=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),D=r.getParameter(r.MAX_VARYING_VECTORS),R=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),L=r.getParameter(r.MAX_SAMPLES),N=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:c,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:y,reversedDepthBuffer:_,maxTextures:b,maxVertexTextures:x,maxTextureSize:C,maxCubemapSize:S,maxAttributes:v,maxVertexUniforms:A,maxVaryings:D,maxFragmentUniforms:R,maxSamples:L,samples:N}}function BE(r){let e=this,t=null,s=0,o=!1,u=!1,c=new ir,d=new tt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,y){let b=_.length!==0||y||s!==0||o;return o=y,s=_.length,b},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(_,y){t=g(_,y,0)},this.setState=function(_,y,b){let x=_.clippingPlanes,C=_.clipIntersection,S=_.clipShadows,v=r.get(_);if(!o||x===null||x.length===0||u&&!S)u?g(null):m();else{let A=u?0:s,D=A*4,R=v.clippingState||null;p.value=R,R=g(x,y,D,b);for(let L=0;L!==D;++L)R[L]=t[L];v.clippingState=R,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=A}};function m(){p.value!==t&&(p.value=t,p.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function g(_,y,b,x){let C=_!==null?_.length:0,S=null;if(C!==0){if(S=p.value,x!==!0||S===null){let v=b+C*4,A=y.matrixWorldInverse;d.getNormalMatrix(A),(S===null||S.length<v)&&(S=new Float32Array(v));for(let D=0,R=b;D!==C;++D,R+=4)c.copy(_[D]).applyMatrix4(A,d),c.normal.toArray(S,R),S[R+3]=c.constant}p.value=S,p.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,S}}var ql=class extends Ai{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let s={width:e,height:e,depth:1},o=[s,s,s,s,s,s];this.texture=new xl(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Cs(5,5,5),u=new Wi({name:"CubemapFromEquirect",uniforms:bo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:oi,blending:go});u.uniforms.tEquirect.value=t;let c=new Gi(o,u),d=t.minFilter;return t.minFilter===Jr&&(t.minFilter=ri),new Ma(1,10,this).update(e,c),t.minFilter=d,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,s=!0,o=!0){let u=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,s,o);e.setRenderTarget(u)}},C_=256,HE=3,VE=20,J_=256,K_=16,GE=3,WE=new Y,XE=new st,nd=class r{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ma(1,10,null),this._boxMesh=new Gi(new Cs(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,s=.1,o=100,u={}){let{size:c=256,position:d=WE}=u,p=this._renderer;this._setSize(c);let m=this._allocateTarget(),g=this._getSourceTarget(!0);t>0&&(g.texture.mipmapsAutoUpdate=!1);let _=p.autoClear,y=p.autoClearColor,b=p.autoClearDepth,x=p.autoClearStencil,C=e.background;p.autoClear=!0,p.autoClearColor=!0,p.autoClearDepth=!0,p.autoClearStencil=!0,C===null&&(e.background=p.getClearColor(XE));let S=new Ma(s,o,g);return S.position.copy(d),S.update(p,e),p.autoClear=_,p.autoClearColor=y,p.autoClearDepth=b,p.autoClearStencil=x,e.background=C,t>0&&(g.texture.mipmapsAutoUpdate=!0,this._blur(m,t)),this._applyPMREM(m),m}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=I_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=P_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(C_,M_(e))}_fromTexture(e,t){e.mapping===yo||e.mapping===Ea?this._setSize(e.image.length===0?C_:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let s=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(s),s}_allocateTarget(){let e=this._cubeSize,t=R_(e,!1,!1),s=Math.log2(e)-HE;for(let o=0;o<=s;o++)t.texture.mipmaps.push({width:e>>o,height:e>>o});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,s=this._sourceTarget;return(s===null||s.width!==t||e&&s.depthBuffer===!1)&&(s!==null&&s.dispose(),this._sourceTarget=R_(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,s){let o=this._boxMesh,u=this._cubeCamera;o.material=s,u.renderTarget=e,u.activeMipmapLevel=t;let c=e.width>>t;e.viewport.set(0,0,c,c),u.update(this._renderer,o),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===yo||e.mapping===Ea?(this._cubemapMaterial===null&&(this._cubemapMaterial=I_()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=P_()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=qE(),this._integrationMaterial=$E());let t=this._cubeSize,s=e.texture.mipmaps.length-1,o=this._ggxMaterial.uniforms;o.envMap.value=this._sourceTarget.texture;let u=this._integrationMaterial.uniforms;u.envMap.value=this._sourceTarget.texture,u.sourceLod.value=Math.log2(t/K_);for(let c=0;c<=s;c++){let d=r.lodToRoughness(c,s);if(c>s-GE)u.roughness.value=d,this._renderCube(e,c,this._integrationMaterial);else{let p=d>0?Math.log2(t)+.5*Math.log2(6/(J_*Math.pow(d,4)))+.5:0;o.roughness.value=d,o.lodBias.value=p,this._renderCube(e,c,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=YE());let s=this._blurMaterial,o=s.uniforms,u=this._sourceTarget;o.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,o.envMap.value=u.texture,this._renderCube(e,0,s),o.envMap.value=e.texture,this._renderCube(u,0,s)}};function R_(r,e,t){return new ql(r,{minFilter:Jr,generateMipmaps:e,type:ar,colorSpace:lo,depthBuffer:t})}function $l(r,e,t){return new Wi({name:r,uniforms:e,vertexShader:ut.cube_vert,fragmentShader:t,side:oi,blending:go,depthTest:!1,depthWrite:!1})}function qE(){return $l("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${J_}u

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
	`)}function $E(){return $l("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:K_}},`

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
	`)}function YE(){return $l("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${VE}
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
	`)}function P_(){return $l("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function I_(){return $l("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function jE(r){let e=new WeakMap,t=new WeakMap,s=null;function o(y,b=!1){return y==null?null:b?c(y):u(y)}function u(y){if(y&&y.isTexture){let b=y.mapping;if(b===pf||b===mf)if(e.has(y)){let x=e.get(y).texture;return d(x,y.mapping)}else{let x=y.image;if(x&&x.height>0){let C=new ql(x.height);return C.fromEquirectangularTexture(r,y),e.set(y,C),y.addEventListener("dispose",m),d(C.texture,y.mapping)}else return null}}return y}function c(y){if(y&&y.isTexture&&y.isPMREMTexture!==!0){let b=y.mapping,x=b===pf||b===mf,C=b===yo||b===Ea;if(x||C){let S=t.get(y),v=S!==void 0?S.texture.pmremVersion:0;if(y.isRenderTargetTexture&&y.pmremVersion!==v)return s===null&&(s=new nd(r)),S=x?s.fromEquirectangular(y,S):s.fromCubemap(y,S),S.texture.pmremVersion=y.pmremVersion,t.set(y,S),S.texture;if(S!==void 0)return S.texture;{let A=y.image;return x&&A&&A.height>0||C&&A&&p(A)?(s===null&&(s=new nd(r)),S=x?s.fromEquirectangular(y):s.fromCubemap(y),S.texture.pmremVersion=y.pmremVersion,t.set(y,S),y.addEventListener("dispose",g),S.texture):null}}}return y}function d(y,b){return b===pf?y.mapping=yo:b===mf&&(y.mapping=Ea),y}function p(y){let b=0,x=6;for(let C=0;C<x;C++)y[C]!==void 0&&b++;return b===x}function m(y){let b=y.target;b.removeEventListener("dispose",m);let x=e.get(b);x!==void 0&&(e.delete(b),x.dispose())}function g(y){let b=y.target;b.removeEventListener("dispose",g);let x=t.get(b);x!==void 0&&(t.delete(b),x.dispose())}function _(){e=new WeakMap,t=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:o,dispose:_}}function ZE(r){let e={};function t(s){if(e[s]!==void 0)return e[s];let o=r.getExtension(s);return e[s]=o,o}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){let o=t(s);return o===null&&hl("WebGLRenderer: "+s+" extension not supported."),o}}}function JE(r,e,t,s){let o={},u=new WeakMap,c=new FinalizationRegistry(x=>delete o[x]);function d(x){p(x.target)}function p(x){x.index!==null&&e.remove(x.index);for(let S in x.attributes)e.remove(x.attributes[S]);x.removeEventListener("dispose",d),delete o[x.id],c.unregister(x);let C=u.get(x);C&&(e.remove(C),u.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function m(x,C){return o[C.id]!==void 0||(C.addEventListener("dispose",d),o[C.id]=new WeakRef(C),c.register(C,C.id,C),t.memory.geometries++),C}function g(x){let C=x.attributes;for(let S in C)e.update(C[S],r.ARRAY_BUFFER)}function _(x){let C=x.index,S=x.attributes.position,v=0;if(S===void 0)return;let A=C!==null?C.array.length:S.array.length/3-1,D=S.count>=65535?bl:_l,R=new D(Math.ceil(A/3)*6,1),L=R.array;if(C!==null){let M=C.array;v=C.version;for(let P=0,V=0;P<A;P+=3){let F=M[P+0],B=M[P+1],W=M[P+2];L[V++]=F,L[V++]=B,L[V++]=B,L[V++]=W,L[V++]=W,L[V++]=F}}else{v=S.version;for(let M=0,P=0;M<A;M+=3){let V=M+0,F=M+1,B=M+2;L[P++]=V,L[P++]=F,L[P++]=F,L[P++]=B,L[P++]=B,L[P++]=V}}R.version=v;let N=u.get(x);N&&e.remove(N),u.set(x,R)}function y(x){let C=u.get(x);if(C){let S=x.index;S!==null&&C.version<S.version&&_(x)}else _(x);return u.get(x)}function b(){for(let x in o){let C=o[x].deref();C!==void 0&&p(C)}}return{get:m,update:g,getWireframeAttribute:y,dispose:b}}function KE(r,e,t){let s;function o(_){s=_}let u,c;function d(_){u=_.type,c=_.bytesPerElement}function p(_,y){r.drawElements(s,y,u,_*c),t.update(y,s,1)}function m(_,y,b){b!==0&&(r.drawElementsInstanced(s,y,u,_*c,b),t.update(y,s,b))}function g(_,y,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,u,_,0,b);let C=0;for(let S=0;S<b;S++)C+=y[S];t.update(C,s,1)}this.setMode=o,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=g}function QE(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,c,d){switch(t.calls++,c){case r.TRIANGLES:t.triangles+=d*(u/3);break;case r.LINES:t.lines+=d*(u/2);break;case r.LINE_STRIP:t.lines+=d*(u-1);break;case r.LINE_LOOP:t.lines+=d*u;break;case r.POINTS:t.points+=d*u;break;default:et("WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:s}}function eA(r,e,t){let s=new WeakMap,o=new Zt;function u(c,d,p){let m=c.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0,y=s.get(d);if(y===void 0||y.count!==_){let V=function(){M.dispose(),s.delete(d),d.removeEventListener("dispose",V)};y!==void 0&&y.texture.dispose();let b=d.morphAttributes.position!==void 0,x=d.morphAttributes.normal!==void 0,C=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],v=d.morphAttributes.normal||[],A=d.morphAttributes.color||[],D=0;b===!0&&(D=1),x===!0&&(D=2),C===!0&&(D=3);let R=d.attributes.position.count*D,L=1;R>e.maxTextureSize&&(L=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);let N=new Float32Array(R*L*4*_),M=new vl(N,R,L,_);M.type=or,M.needsUpdate=!0;let P=D*4;for(let F=0;F<_;F++){let B=S[F],W=v[F],Z=A[F],O=R*L*4*F;for(let Q=0;Q<B.count;Q++){let se=Q*P;b===!0&&(o.fromBufferAttribute(B,Q),N[O+se+0]=o.x,N[O+se+1]=o.y,N[O+se+2]=o.z,N[O+se+3]=0),x===!0&&(o.fromBufferAttribute(W,Q),N[O+se+4]=o.x,N[O+se+5]=o.y,N[O+se+6]=o.z,N[O+se+7]=0),C===!0&&(o.fromBufferAttribute(Z,Q),N[O+se+8]=o.x,N[O+se+9]=o.y,N[O+se+10]=o.z,N[O+se+11]=Z.itemSize===4?o.w:1)}}y={count:_,texture:M,size:new vt(R,L)},s.set(d,y),d.addEventListener("dispose",V)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)p.getUniforms().setValue(r,"morphTexture",c.morphTexture,t);else{let b=0;for(let C=0;C<m.length;C++)b+=m[C];let x=d.morphTargetsRelative?1:1-b;p.getUniforms().setValue(r,"morphTargetBaseInfluence",x),p.getUniforms().setValue(r,"morphTargetInfluences",m)}p.getUniforms().setValue(r,"morphTargetsTexture",y.texture,t),p.getUniforms().setValue(r,"morphTargetsTextureSize",y.size)}return{update:u}}function tA(r,e,t,s,o){let u=new WeakMap;function c(m){let g=o.render.frame,_=m.geometry,y=e.get(m,_);if(u.get(y)!==g&&(e.update(y),u.set(y,g)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),u.get(m)!==g&&(t.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&t.update(m.instanceColor,r.ARRAY_BUFFER),u.set(m,g))),m.isSkinnedMesh){let b=m.skeleton;u.get(b)!==g&&(b.update(),u.set(b,g))}return y}function d(){u=new WeakMap}function p(m){let g=m.target;g.removeEventListener("dispose",p),s.releaseStatesOfObject(g),t.remove(g.instanceMatrix),g.instanceColor!==null&&t.remove(g.instanceColor)}return{update:c,dispose:d}}var nA={[Yp]:"LINEAR_TONE_MAPPING",[jp]:"REINHARD_TONE_MAPPING",[Zp]:"CINEON_TONE_MAPPING",[kl]:"ACES_FILMIC_TONE_MAPPING",[Kp]:"AGX_TONE_MAPPING",[Qp]:"NEUTRAL_TONE_MAPPING",[Jp]:"CUSTOM_TONE_MAPPING"};function iA(r,e,t,s,o,u){let c=new Ai(e,t,{type:r,depthBuffer:o,stencilBuffer:u,samples:s?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),d=null,p=null,m=null,g=new rr;g.setAttribute("position",new Ln([-1,3,0,-1,-1,0,3,-1,0],3)),g.setAttribute("uv",new Ln([0,2,0,0,2,0],2));let _=new Jc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),y=new Gi(g,_),b=new po(-1,1,1,-1,0,1),x=null,C=null,S=!1,v,A=null,D=[],R=!1;this.setSize=function(L,N){c.setSize(L,N),d!==null&&d.setSize(L,N),p!==null&&p.setSize(L,N);for(let M=0;M<D.length;M++){let P=D[M];P.setSize&&P.setSize(L,N)}},this.setEffects=function(L){D=L,R=D.length>0&&D[0].isRenderPass===!0;let N=c.width,M=c.height;D.length>0&&d===null&&(d=new Ai(N,M,{type:ar,depthBuffer:!1,stencilBuffer:!1}),p=new Ai(N,M,{type:ar,depthBuffer:!1,stencilBuffer:!1}));let P=o===!0&&D.some(V=>V.needsDepthTexture===!0);P!==(c.depthTexture!==null)&&(P===!0&&m===null&&(m=new Zr(N,M),u===!0&&(m.format=Kr,m.type=_o)),c.dispose(),c.depthTexture=P?m:null,c.resolveDepthBuffer=P,c.storeMultisampledDepthBuffer=P);for(let V=0;V<D.length;V++){let F=D[V];F.setSize&&F.setSize(N,M),P&&F.needsDepthTexture===!0&&F.setDepthTexture&&F.setDepthTexture(m)}},this.begin=function(L,N){if(S||L.toneMapping===pi&&D.length===0)return!1;if(A=N,N!==null){let M=N.width,P=N.height;(c.width!==M||c.height!==P)&&this.setSize(M,P)}return R===!1&&L.setRenderTarget(c),v=L.toneMapping,L.toneMapping=pi,!0},this.hasRenderPass=function(){return R},this.end=function(L,N){L.toneMapping=v,S=!0;let M=c,P=d;for(let V=0;V<D.length;V++){let F=D[V];F.enabled!==!1&&(F.render(L,P,M,N),F.needsSwap!==!1&&(M=P,P=P===d?p:d))}if(x!==L.outputColorSpace||C!==L.toneMapping){x=L.outputColorSpace,C=L.toneMapping,_.defines={},gt.getTransfer(x)===kt&&(_.defines.SRGB_TRANSFER="");let V=nA[C];V&&(_.defines[V]=""),_.needsUpdate=!0}_.uniforms.tDiffuse.value=M.texture,L.setRenderTarget(A),L.render(y,b),A=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){c.dispose(),d!==null&&d.dispose(),p!==null&&p.dispose(),g.dispose(),_.dispose()}}var Q_=new si,eb=new Zr(1,1),tb=new wl(1),nb=new vl,ib=new Xc,rb=new xl,N_=[],L_=[],D_=new Float32Array(16),k_=new Float32Array(9),F_=new Float32Array(4);function Ra(r,e,t){let s=r[0];if(s<=0||s>0)return r;let o=e*t,u=N_[o];if(u===void 0&&(u=new Float32Array(o),N_[o]=u),e!==0){s.toArray(u,0);for(let c=1,d=0;c!==e;++c)d+=t,r[c].toArray(u,d)}return u}function Tn(r,e){if(r.length!==e.length)return!1;for(let t=0,s=r.length;t<s;t++)if(r[t]!==e[t])return!1;return!0}function En(r,e){for(let t=0,s=e.length;t<s;t++)r[t]=e[t]}function rd(r,e){let t=L_[e];t===void 0&&(t=new Int32Array(e),L_[e]=t);for(let s=0;s!==e;++s)t[s]=r.allocateTextureUnit();return t}function rA(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function sA(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tn(t,e))return;r.uniform2fv(this.addr,e),En(t,e)}}function oA(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tn(t,e))return;r.uniform3fv(this.addr,e),En(t,e)}}function aA(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tn(t,e))return;r.uniform4fv(this.addr,e),En(t,e)}}function lA(r,e){let t=this.cache,s=e.elements;if(s===void 0){if(Tn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),En(t,e)}else{if(Tn(t,s))return;F_.set(s),r.uniformMatrix2fv(this.addr,!1,F_),En(t,s)}}function uA(r,e){let t=this.cache,s=e.elements;if(s===void 0){if(Tn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),En(t,e)}else{if(Tn(t,s))return;k_.set(s),r.uniformMatrix3fv(this.addr,!1,k_),En(t,s)}}function cA(r,e){let t=this.cache,s=e.elements;if(s===void 0){if(Tn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),En(t,e)}else{if(Tn(t,s))return;D_.set(s),r.uniformMatrix4fv(this.addr,!1,D_),En(t,s)}}function fA(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function dA(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tn(t,e))return;r.uniform2iv(this.addr,e),En(t,e)}}function hA(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tn(t,e))return;r.uniform3iv(this.addr,e),En(t,e)}}function pA(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tn(t,e))return;r.uniform4iv(this.addr,e),En(t,e)}}function mA(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function gA(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tn(t,e))return;r.uniform2uiv(this.addr,e),En(t,e)}}function vA(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tn(t,e))return;r.uniform3uiv(this.addr,e),En(t,e)}}function yA(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tn(t,e))return;r.uniform4uiv(this.addr,e),En(t,e)}}function sd(r){return r.version===0&&(r.compareFunction=cm,r.needsUpdate=!0),r}function _A(r,e,t){let s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o);let u;this.type===r.SAMPLER_2D_SHADOW?u=sd(eb):u=Q_,t.setTexture2D(e||u,o)}function bA(r,e,t){let s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture3D(e||ib,o)}function SA(r,e,t){let s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o);let u;this.type===r.SAMPLER_CUBE_SHADOW?u=sd(tb):u=rb,t.setTextureCube(e||u,o)}function xA(r,e,t){let s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture2DArray(e||nb,o)}function MA(r){switch(r){case 5126:return rA;case 35664:return sA;case 35665:return oA;case 35666:return aA;case 35674:return lA;case 35675:return uA;case 35676:return cA;case 5124:case 35670:return fA;case 35667:case 35671:return dA;case 35668:case 35672:return hA;case 35669:case 35673:return pA;case 5125:return mA;case 36294:return gA;case 36295:return vA;case 36296:return yA;case 35678:case 36198:case 36298:case 36306:case 35682:return _A;case 35679:case 36299:case 36307:return bA;case 35680:case 36300:case 36308:case 36293:return SA;case 36289:case 36303:case 36311:case 36292:return xA}}function wA(r,e){r.uniform1fv(this.addr,e)}function TA(r,e){let t=Ra(e,this.size,2);r.uniform2fv(this.addr,t)}function EA(r,e){let t=Ra(e,this.size,3);r.uniform3fv(this.addr,t)}function AA(r,e){let t=Ra(e,this.size,4);r.uniform4fv(this.addr,t)}function CA(r,e){let t=Ra(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function RA(r,e){let t=Ra(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function PA(r,e){let t=Ra(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function IA(r,e){r.uniform1iv(this.addr,e)}function NA(r,e){r.uniform2iv(this.addr,e)}function LA(r,e){r.uniform3iv(this.addr,e)}function DA(r,e){r.uniform4iv(this.addr,e)}function kA(r,e){r.uniform1uiv(this.addr,e)}function FA(r,e){r.uniform2uiv(this.addr,e)}function UA(r,e){r.uniform3uiv(this.addr,e)}function OA(r,e){r.uniform4uiv(this.addr,e)}function zA(r,e,t){let s=this.cache,o=e.length,u=rd(t,o);Tn(s,u)||(r.uniform1iv(this.addr,u),En(s,u));let c;this.type===r.SAMPLER_2D_SHADOW?c=sd(eb):c=Q_;for(let d=0;d!==o;++d)t.setTexture2D(e[d]||c,u[d])}function BA(r,e,t){let s=this.cache,o=e.length,u=rd(t,o);Tn(s,u)||(r.uniform1iv(this.addr,u),En(s,u));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||ib,u[c])}function HA(r,e,t){let s=this.cache,o=e.length,u=rd(t,o);Tn(s,u)||(r.uniform1iv(this.addr,u),En(s,u));let c;this.type===r.SAMPLER_CUBE_SHADOW?c=sd(tb):c=rb;for(let d=0;d!==o;++d)t.setTextureCube(e[d]||c,u[d])}function VA(r,e,t){let s=this.cache,o=e.length,u=rd(t,o);Tn(s,u)||(r.uniform1iv(this.addr,u),En(s,u));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||nb,u[c])}function GA(r){switch(r){case 5126:return wA;case 35664:return TA;case 35665:return EA;case 35666:return AA;case 35674:return CA;case 35675:return RA;case 35676:return PA;case 5124:case 35670:return IA;case 35667:case 35671:return NA;case 35668:case 35672:return LA;case 35669:case 35673:return DA;case 5125:return kA;case 36294:return FA;case 36295:return UA;case 36296:return OA;case 35678:case 36198:case 36298:case 36306:case 35682:return zA;case 35679:case 36299:case 36307:return BA;case 35680:case 36300:case 36308:case 36293:return HA;case 36289:case 36303:case 36311:case 36292:return VA}}var Tm=class{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=MA(t.type)}},Em=class{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=GA(t.type)}},Am=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){let o=this.seq;for(let u=0,c=o.length;u!==c;++u){let d=o[u];d.setValue(e,t[d.id],s)}}},Mm=/(\w+)(\])?(\[|\.)?/g;function U_(r,e){r.seq.push(e),r.map[e.id]=e}function WA(r,e,t){let s=r.name,o=s.length;for(Mm.lastIndex=0;;){let u=Mm.exec(s),c=Mm.lastIndex,d=u[1],p=u[2]==="]",m=u[3];if(p&&(d=d|0),m===void 0||m==="["&&c+2===o){U_(t,m===void 0?new Tm(d,r,e):new Em(d,r,e));break}else{let _=t.map[d];_===void 0&&(_=new Am(d),U_(t,_)),t=_}}}var Ca=class{constructor(e,t){this.seq=[],this.map={};let s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<s;++c){let d=e.getActiveUniform(t,c),p=e.getUniformLocation(t,d.name);WA(d,p,this)}let o=[],u=[];for(let c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(c):u.push(c);o.length>0&&(this.seq=o.concat(u))}setValue(e,t,s,o){let u=this.map[t];u!==void 0&&u.setValue(e,s,o)}setOptional(e,t,s){let o=t[s];o!==void 0&&this.setValue(e,s,o)}static upload(e,t,s,o){for(let u=0,c=t.length;u!==c;++u){let d=t[u],p=s[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,o)}}static seqWithValue(e,t){let s=[];for(let o=0,u=e.length;o!==u;++o){let c=e[o];c.id in t&&s.push(c)}return s}};function O_(r,e,t){let s=r.createShader(e);return r.shaderSource(s,t),r.compileShader(s),s}var XA=37297,qA=0;function $A(r,e){let t=r.split(`
`),s=[],o=Math.max(e-6,0),u=Math.min(e+6,t.length);for(let c=o;c<u;c++){let d=c+1;s.push(`${d===e?">":" "} ${d}: ${t[c]}`)}return s.join(`
`)}var z_=new tt;function YA(r){gt._getMatrix(z_,gt.workingColorSpace,r);let e=`mat3( ${z_.elements.map(t=>t.toFixed(4))} )`;switch(gt.getTransfer(r)){case ml:return[e,"LinearTransferOETF"];case kt:return[e,"sRGBTransferOETF"];default:return Ye("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function B_(r,e,t){let s=r.getShaderParameter(e,r.COMPILE_STATUS),u=(r.getShaderInfoLog(e)||"").trim();if(s&&u==="")return"";let c=/ERROR: 0:(\d+)/.exec(u);if(c){let d=parseInt(c[1]);return t.toUpperCase()+`

`+u+`

`+$A(r.getShaderSource(e),d)}else return u}function jA(r,e){let t=YA(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var ZA={[Yp]:"Linear",[jp]:"Reinhard",[Zp]:"Cineon",[kl]:"ACESFilmic",[Kp]:"AgX",[Qp]:"Neutral",[Jp]:"Custom"};function JA(r,e){let t=ZA[e];return t===void 0?(Ye("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var td=new Y;function KA(){gt.getLuminanceCoefficients(td);let r=td.x.toFixed(4),e=td.y.toFixed(4),t=td.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function QA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xl).join(`
`)}function eC(r){let e=[];for(let t in r){let s=r[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function tC(r,e){let t={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){let u=r.getActiveAttrib(e,o),c=u.name,d=1;u.type===r.FLOAT_MAT2&&(d=2),u.type===r.FLOAT_MAT3&&(d=3),u.type===r.FLOAT_MAT4&&(d=4),t[c]={type:u.type,location:r.getAttribLocation(e,c),locationSize:d}}return t}function Xl(r){return r!==""}function H_(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function V_(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var nC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cm(r){return r.replace(nC,iC)}function iC(r,e){let t=ut[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Cm(t)}var rC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function G_(r){return r.replace(rC,sC)}function sC(r,e,t,s){let o="";for(let u=parseInt(e);u<parseInt(t);u++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return o}function W_(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}var oC={[mo]:"SHADOWMAP_TYPE_PCF",[Ns]:"SHADOWMAP_TYPE_VSM"};function aC(r){return oC[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var lC={[Ea]:"ENVMAP_MODE_REFRACTION"};function uC(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":lC[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var cC={[$p]:"ENVMAP_BLENDING_MULTIPLY",[a_]:"ENVMAP_BLENDING_MIX",[l_]:"ENVMAP_BLENDING_ADD"};function fC(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":cC[r.combine]||"ENVMAP_BLENDING_NONE"}function dC(r,e,t,s){let o=r.getContext(),u=t.defines,c=t.vertexShader,d=t.fragmentShader,p=aC(t),m=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",g=uC(t),_=fC(t),y=QA(t),b=eC(u),x=o.createProgram(),C,S,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(C=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Xl).join(`
`),C.length>0&&(C+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Xl).join(`
`),S.length>0&&(S+=`
`)):(C=[W_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xl).join(`
`),S=[W_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",t.envMap?"#define "+_:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pi?"#define TONE_MAPPING":"",t.toneMapping!==pi?ut.tonemapping_pars_fragment:"",t.toneMapping!==pi?JA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,jA("linearToOutputTexel",t.outputColorSpace),KA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xl).join(`
`)),c=Cm(c),c=H_(c,t),c=V_(c,t),d=Cm(d),d=H_(d,t),d=V_(d,t),c=G_(c),d=G_(d),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,C=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+C,S=["#define varying in",t.glslVersion===fm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);let A=v+C+c,D=v+S+d,R=O_(o,o.VERTEX_SHADER,A),L=O_(o,o.FRAGMENT_SHADER,D);o.attachShader(x,R),o.attachShader(x,L),t.index0AttributeName!==void 0?o.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(x,0,"position"),o.linkProgram(x);function N(F){if(r.debug.checkShaderErrors){let B=o.getProgramInfoLog(x)||"",W=o.getShaderInfoLog(R)||"",Z=o.getShaderInfoLog(L)||"",O=B.trim(),Q=W.trim(),se=Z.trim(),ee=!0,me=!0;if(o.getProgramParameter(x,o.LINK_STATUS)===!1)if(ee=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,x,R,L);else{let ne=B_(o,R,"vertex"),ce=B_(o,L,"fragment");et("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(x,o.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+O+`
`+ne+`
`+ce)}else O!==""?Ye("WebGLProgram: Program Info Log:",O):(Q===""||se==="")&&(me=!1);me&&(F.diagnostics={runnable:ee,programLog:O,vertexShader:{log:Q,prefix:C},fragmentShader:{log:se,prefix:S}})}o.deleteShader(R),o.deleteShader(L),M=new Ca(o,x),P=tC(o,x)}let M;this.getUniforms=function(){return M===void 0&&N(this),M};let P;this.getAttributes=function(){return P===void 0&&N(this),P};let V=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=o.getProgramParameter(x,XA)),V},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=qA++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=L,this}var hC=0,Rm=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,s){let o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){let t=this.shaderCache,s=t.get(e);return s===void 0&&(s=new Pm(e),t.set(e,s)),s}},Pm=class{constructor(e){this.id=hC++,this.code=e,this.usedTimes=0}};function pC(r){return r===Ds||r===Hl||r===Vl}function mC(r,e,t,s,o,u){let c=new Yr,d=new Rm,p=new Set,m=[],g=new Map,_=s.logarithmicDepthBuffer,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(M){return p.add(M),M===0?"uv":`uv${M}`}function x(M,P,V,F,B,W){let Z=F.fog,O=B.geometry,Q=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?F.environment:null,se=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,ee=e.get(M.envMap||Q,se),me=y[M.type],ne=s.precision;M.precision!==null&&(ne=s.getMaxPrecision(M.precision),ne!==M.precision&&Ye("WebGLProgram.getParameters:",M.precision,"not supported, using",ne,"instead."));let ce=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,he=ce!==void 0?ce.length:0,Be=0;O.morphAttributes.position!==void 0&&(Be=1),O.morphAttributes.normal!==void 0&&(Be=2),O.morphAttributes.color!==void 0&&(Be=3);let Ve,re,Pe,ke;if(me){let Ae=Ar[me];Ve=Ae.vertexShader,re=Ae.fragmentShader}else{Ve=M.vertexShader,re=M.fragmentShader;let Ae=d.getVertexShaderStage(M),Rt=d.getFragmentShaderStage(M);d.update(M,Ae,Rt),Pe=Ae.id,ke=Rt.id}let We=r.getRenderTarget(),Ne=r.state.buffers.depth.getReversed(),Ke=B.isInstancedMesh===!0,zt=B.isBatchedMesh===!0,qe=!!M.map,wt=!!M.matcap,yt=!!ee,ft=yt&&ee.isPMREMTexture===!0,an=!!M.aoMap,Gt=!!M.lightMap,ln=!!M.bumpMap&&M.wireframe===!1,Bt=!!M.normalMap,Xn=!!M.displacementMap,Ht=!!M.emissiveMap,un=!!M.metalnessMap,kn=!!M.roughnessMap,qn=M.anisotropy>0,H=M.clearcoat>0,Fn=M.diffuseRoughness>0,Ct=M.dispersion>0,ot=M.retroreflectivity>0,Ee=M.iridescence>0,cn=M.sheen>0,Xe=M.transmission>0,je=qn&&!!M.anisotropyMap,I=H&&!!M.clearcoatMap,T=H&&!!M.clearcoatNormalMap,q=H&&!!M.clearcoatRoughnessMap,de=Fn&&!!M.diffuseRoughnessMap,ue=Ee&&!!M.iridescenceMap,xe=Ee&&!!M.iridescenceThicknessMap,Te=cn&&!!M.sheenColorMap,oe=cn&&!!M.sheenRoughnessMap,ae=!!M.specularMap,Me=!!M.specularColorMap,U=!!M.specularIntensityMap,le=Xe&&!!M.transmissionMap,ie=Xe&&!!M.thicknessMap,we=!!M.gradientMap,ye=!!M.alphaMap,be=M.alphaTest>0,He=!!M.alphaHash,rt=!!M.extensions,pe=pi;M.toneMapped&&(We===null||We.isXRRenderTarget===!0)&&(pe=r.toneMapping);let Ge=ft?ee.isCompressedCubeTexture?ee.image[0].mipmaps:ee.mipmaps:null,it={shaderID:me,shaderType:M.type,shaderName:M.name,vertexShader:Ve,fragmentShader:re,defines:M.defines,customVertexShaderID:Pe,customFragmentShaderID:ke,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:ne,batching:zt,batchingColor:zt&&B._colorsTexture!==null,instancing:Ke,instancingColor:Ke&&B.instanceColor!==null,instancingMorph:Ke&&B.morphTexture!==null,outputColorSpace:We===null?r.outputColorSpace:We.isXRRenderTarget===!0?We.texture.colorSpace:gt.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:qe,matcap:wt,envMap:yt,envMapMode:yt&&ee.mapping,envMapPMREM:ft,envMapMaxLod:ft?Ge.length-1:null,envMapSize:ft?Ge[0].width:null,aoMap:an,lightMap:Gt,bumpMap:ln,normalMap:Bt,displacementMap:Xn,emissiveMap:Ht,normalMapObjectSpace:Bt&&M.normalMapType===f_,normalMapTangentSpace:Bt&&M.normalMapType===Qf,packedNormalMap:Bt&&M.normalMapType===Qf&&pC(M.normalMap.format),metalnessMap:un,roughnessMap:kn,anisotropy:qn,anisotropyMap:je,clearcoat:H,clearcoatMap:I,clearcoatNormalMap:T,clearcoatRoughnessMap:q,diffuseRoughness:Fn,diffuseRoughnessMap:de,dispersion:Ct,retroreflection:ot,iridescence:Ee,iridescenceMap:ue,iridescenceThicknessMap:xe,sheen:cn,sheenColorMap:Te,sheenRoughnessMap:oe,specularMap:ae,specularColorMap:Me,specularIntensityMap:U,transmission:Xe,transmissionMap:le,thicknessMap:ie,gradientMap:we,opaque:M.transparent===!1&&M.blending===Ta&&M.alphaToCoverage===!1,alphaMap:ye,alphaTest:be,alphaHash:He,combine:M.combine,mapUv:qe&&b(M.map.channel),aoMapUv:an&&b(M.aoMap.channel),lightMapUv:Gt&&b(M.lightMap.channel),bumpMapUv:ln&&b(M.bumpMap.channel),normalMapUv:Bt&&b(M.normalMap.channel),displacementMapUv:Xn&&b(M.displacementMap.channel),emissiveMapUv:Ht&&b(M.emissiveMap.channel),metalnessMapUv:un&&b(M.metalnessMap.channel),roughnessMapUv:kn&&b(M.roughnessMap.channel),anisotropyMapUv:je&&b(M.anisotropyMap.channel),clearcoatMapUv:I&&b(M.clearcoatMap.channel),clearcoatNormalMapUv:T&&b(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&b(M.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:de&&b(M.diffuseRoughnessMap.channel),iridescenceMapUv:ue&&b(M.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&b(M.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&b(M.sheenColorMap.channel),sheenRoughnessMapUv:oe&&b(M.sheenRoughnessMap.channel),specularMapUv:ae&&b(M.specularMap.channel),specularColorMapUv:Me&&b(M.specularColorMap.channel),specularIntensityMapUv:U&&b(M.specularIntensityMap.channel),transmissionMapUv:le&&b(M.transmissionMap.channel),thicknessMapUv:ie&&b(M.thicknessMap.channel),alphaMapUv:ye&&b(M.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Bt||qn),vertexNormals:!!O.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!O.attributes.uv&&(qe||ye),fog:!!Z,useFog:M.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||O.attributes.normal===void 0&&Bt===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Ne,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:Be,numSunLights:P.sun.length,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numSunLightShadows:P.sunShadowMap.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:W.filter(Ae=>Ae.texture!==null).length,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&V.length>0,shadowMapType:r.shadowMap.type,toneMapping:pe,decodeVideoTexture:qe&&M.map.isVideoTexture===!0&&gt.getTransfer(M.map.colorSpace)===kt,decodeVideoTextureEmissive:Ht&&M.emissiveMap.isVideoTexture===!0&&gt.getTransfer(M.emissiveMap.colorSpace)===kt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Tr,flipSided:M.side===oi,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:rt&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&M.extensions.multiDraw===!0||zt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return it.vertexUv1s=p.has(1),it.vertexUv2s=p.has(2),it.vertexUv3s=p.has(3),p.clear(),it}function C(M){let P=[];if(M.shaderID?P.push(M.shaderID):(P.push(M.customVertexShaderID),P.push(M.customFragmentShaderID)),M.defines!==void 0)for(let V in M.defines)P.push(V),P.push(M.defines[V]);return M.isRawShaderMaterial===!1&&(S(P,M),v(P,M),P.push(r.outputColorSpace)),P.push(M.customProgramCacheKey),P.join()}function S(M,P){M.push(P.precision),M.push(P.outputColorSpace),M.push(P.envMapMode),M.push(P.envMapPMREM),M.push(P.envMapMaxLod),M.push(P.envMapSize),M.push(P.mapUv),M.push(P.alphaMapUv),M.push(P.lightMapUv),M.push(P.aoMapUv),M.push(P.bumpMapUv),M.push(P.normalMapUv),M.push(P.displacementMapUv),M.push(P.emissiveMapUv),M.push(P.metalnessMapUv),M.push(P.roughnessMapUv),M.push(P.anisotropyMapUv),M.push(P.clearcoatMapUv),M.push(P.clearcoatNormalMapUv),M.push(P.clearcoatRoughnessMapUv),M.push(P.diffuseRoughnessMapUv),M.push(P.iridescenceMapUv),M.push(P.iridescenceThicknessMapUv),M.push(P.sheenColorMapUv),M.push(P.sheenRoughnessMapUv),M.push(P.specularMapUv),M.push(P.specularColorMapUv),M.push(P.specularIntensityMapUv),M.push(P.transmissionMapUv),M.push(P.thicknessMapUv),M.push(P.combine),M.push(P.fogExp2),M.push(P.sizeAttenuation),M.push(P.morphTargetsCount),M.push(P.numSunLights),M.push(P.numDirLights),M.push(P.numPointLights),M.push(P.numSpotLights),M.push(P.numSpotLightMaps),M.push(P.numHemiLights),M.push(P.numRectAreaLights),M.push(P.numSunLightShadows),M.push(P.numDirLightShadows),M.push(P.numPointLightShadows),M.push(P.numSpotLightShadows),M.push(P.numSpotLightShadowsWithMaps),M.push(P.numLightProbes),M.push(P.numLightProbeGrids),M.push(P.shadowMapType),M.push(P.toneMapping),M.push(P.numClippingPlanes),M.push(P.numClipIntersection),M.push(P.depthPacking)}function v(M,P){c.disableAll(),P.instancing&&c.enable(0),P.instancingColor&&c.enable(1),P.instancingMorph&&c.enable(2),P.matcap&&c.enable(3),P.envMap&&c.enable(4),P.normalMapObjectSpace&&c.enable(5),P.normalMapTangentSpace&&c.enable(6),P.clearcoat&&c.enable(7),P.iridescence&&c.enable(8),P.alphaTest&&c.enable(9),P.vertexColors&&c.enable(10),P.vertexAlphas&&c.enable(11),P.vertexUv1s&&c.enable(12),P.vertexUv2s&&c.enable(13),P.vertexUv3s&&c.enable(14),P.vertexTangents&&c.enable(15),P.anisotropy&&c.enable(16),P.alphaHash&&c.enable(17),P.batching&&c.enable(18),P.dispersion&&c.enable(19),P.retroreflection&&c.enable(24),P.diffuseRoughness&&c.enable(25),P.batchingColor&&c.enable(20),P.gradientMap&&c.enable(21),P.packedNormalMap&&c.enable(22),P.vertexNormals&&c.enable(23),M.push(c.mask),c.disableAll(),P.fog&&c.enable(0),P.useFog&&c.enable(1),P.flatShading&&c.enable(2),P.logarithmicDepthBuffer&&c.enable(3),P.reversedDepthBuffer&&c.enable(4),P.skinning&&c.enable(5),P.morphTargets&&c.enable(6),P.morphNormals&&c.enable(7),P.morphColors&&c.enable(8),P.premultipliedAlpha&&c.enable(9),P.shadowMapEnabled&&c.enable(10),P.doubleSided&&c.enable(11),P.flipSided&&c.enable(12),P.useDepthPacking&&c.enable(13),P.dithering&&c.enable(14),P.transmission&&c.enable(15),P.sheen&&c.enable(16),P.opaque&&c.enable(17),P.pointsUvs&&c.enable(18),P.decodeVideoTexture&&c.enable(19),P.decodeVideoTextureEmissive&&c.enable(20),P.alphaToCoverage&&c.enable(21),P.numLightProbeGrids>0&&c.enable(22),P.hasPositionAttribute&&c.enable(23),M.push(c.mask)}function A(M){let P=y[M.type],V;if(P){let F=Ar[P];V=T_.clone(F.uniforms)}else V=M.uniforms;return V}function D(M,P){let V=g.get(P);return V!==void 0?++V.usedTimes:(V=new dC(r,P,M,o),m.push(V),g.set(P,V)),V}function R(M){if(--M.usedTimes===0){let P=m.indexOf(M);m[P]=m[m.length-1],m.pop(),g.delete(M.cacheKey),M.destroy()}}function L(M){d.remove(M)}function N(){d.dispose()}return{getParameters:x,getProgramCacheKey:C,getUniforms:A,acquireProgram:D,releaseProgram:R,releaseShaderCache:L,programs:m,dispose:N}}function gC(){let r=new WeakMap;function e(c){return r.has(c)}function t(c){let d=r.get(c);return d===void 0&&(d={},r.set(c,d)),d}function s(c){r.delete(c)}function o(c,d,p){r.get(c)[d]=p}function u(){r=new WeakMap}return{has:e,get:t,remove:s,update:o,dispose:u}}function vC(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function X_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function q_(){let r=[],e=0,t=[],s=[],o=[];function u(){e=0,t.length=0,s.length=0,o.length=0}function c(y){let b=0;return y.isInstancedMesh&&(b+=2),y.isSkinnedMesh&&(b+=1),b}function d(y,b,x,C,S,v){let A=r[e];return A===void 0?(A={id:y.id,object:y,geometry:b,material:x,materialVariant:c(y),groupOrder:C,renderOrder:y.renderOrder,z:S,group:v},r[e]=A):(A.id=y.id,A.object=y,A.geometry=b,A.material=x,A.materialVariant=c(y),A.groupOrder=C,A.renderOrder=y.renderOrder,A.z=S,A.group=v),e++,A}function p(y,b,x,C,S,v,A){A.reversedDepth===!0&&(S=-S);let D=d(y,b,x,C,S,v);x.transmission>0?s.push(D):x.transparent===!0?o.push(D):t.push(D)}function m(y,b,x,C,S,v){let A=d(y,b,x,C,S,v);x.transmission>0?s.unshift(A):x.transparent===!0?o.unshift(A):t.unshift(A)}function g(y,b){t.length>1&&t.sort(y||vC),s.length>1&&s.sort(b||X_),o.length>1&&o.sort(b||X_)}function _(){for(let y=e,b=r.length;y<b;y++){let x=r[y];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:s,transparent:o,init:u,push:p,unshift:m,finish:_,sort:g}}function yC(){let r=new WeakMap;function e(s,o){let u=r.get(s),c;return u===void 0?(c=new q_,r.set(s,[c])):o>=u.length?(c=new q_,u.push(c)):c=u[o],c}function t(){r=new WeakMap}return{get:e,dispose:t}}function _C(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new Y,color:new st};break;case"SpotLight":t={position:new Y,direction:new Y,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new st,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new st,groundColor:new st};break;case"RectAreaLight":t={color:new st,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return r[e.id]=t,t}}}function bC(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var SC=0;function xC(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function MC(r){let e=new _C,t=bC(),s={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new Y);let o=new Y,u=new $t,c=new $t;function d(m){let g=0,_=0,y=0;for(let W=0;W<9;W++)s.probe[W].set(0,0,0);let b=0,x=0,C=0,S=0,v=0,A=0,D=0,R=0,L=0,N=0,M=0,P=0,V=0,F=0;m.sort(xC);for(let W=0,Z=m.length;W<Z;W++){let O=m[W],Q=O.color,se=O.intensity,ee=O.distance,me=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===Ds?me=O.shadow.map.texture:me=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)g+=Q.r*se,_+=Q.g*se,y+=Q.b*se;else if(O.isLightProbe){for(let ne=0;ne<9;ne++)s.probe[ne].addScaledVector(O.sh.coefficients[ne],se);F++}else if(O.isSunLight){let ne=e.get(O);if(ne.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let ce=O.shadow,he=t.get(O);he.shadowIntensity=ce.intensity,he.shadowBias=ce.bias,he.shadowNormalBias=ce.normalBias,he.shadowRadius=ce.radius,he.shadowMapSize.copy(ce.mapSize).multiply(ce.getFrameExtents()),s.sunShadow[x]=he,s.sunShadowMap[x]=me;let Be=ce.getViewportCount();for(let Ve=0;Ve<Be;Ve++)s.sunShadowMatrix[C+Ve]=ce.getMatrix(Ve),s.sunShadowCascade[C+Ve]=ce._cascadeData[Ve];C+=Be,x++}s.sun[b]=ne,b++}else if(O.isDirectionalLight){let ne=e.get(O);if(ne.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let ce=O.shadow,he=t.get(O);he.shadowIntensity=ce.intensity,he.shadowBias=ce.bias,he.shadowNormalBias=ce.normalBias,he.shadowRadius=ce.radius,he.shadowMapSize=ce.mapSize,s.directionalShadow[S]=he,s.directionalShadowMap[S]=me,s.directionalShadowMatrix[S]=O.shadow.matrix,L++}s.directional[S]=ne,S++}else if(O.isSpotLight){let ne=e.get(O);ne.position.setFromMatrixPosition(O.matrixWorld),ne.color.copy(Q).multiplyScalar(se),ne.distance=ee,ne.coneCos=Math.cos(O.angle),ne.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),ne.decay=O.decay,s.spot[A]=ne;let ce=O.shadow;if(O.map&&(s.spotLightMap[P]=O.map,P++,ce.updateMatrices(O),O.castShadow&&V++),s.spotLightMatrix[A]=ce.matrix,O.castShadow){let he=t.get(O);he.shadowIntensity=ce.intensity,he.shadowBias=ce.bias,he.shadowNormalBias=ce.normalBias,he.shadowRadius=ce.radius,he.shadowMapSize=ce.mapSize,s.spotShadow[A]=he,s.spotShadowMap[A]=me,M++}A++}else if(O.isRectAreaLight){let ne=e.get(O);ne.color.copy(Q).multiplyScalar(se),ne.halfWidth.set(O.width*.5,0,0),ne.halfHeight.set(0,O.height*.5,0),s.rectArea[D]=ne,D++}else if(O.isPointLight){let ne=e.get(O);if(ne.color.copy(O.color).multiplyScalar(O.intensity),ne.distance=O.distance,ne.decay=O.decay,O.castShadow){let ce=O.shadow,he=t.get(O);he.shadowIntensity=ce.intensity,he.shadowBias=ce.bias,he.shadowNormalBias=ce.normalBias,he.shadowRadius=ce.radius,he.shadowMapSize=ce.mapSize,he.shadowCameraNear=ce.camera.near,he.shadowCameraFar=ce.camera.far,s.pointShadow[v]=he,s.pointShadowMap[v]=me,s.pointShadowMatrix[v]=O.shadow.matrix,N++}s.point[v]=ne,v++}else if(O.isHemisphereLight){let ne=e.get(O);ne.skyColor.copy(O.color).multiplyScalar(se),ne.groundColor.copy(O.groundColor).multiplyScalar(se),s.hemi[R]=ne,R++}}D>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Le.LTC_FLOAT_1,s.rectAreaLTC2=Le.LTC_FLOAT_2):(s.rectAreaLTC1=Le.LTC_HALF_1,s.rectAreaLTC2=Le.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=_,s.ambient[2]=y;let B=s.hash;(B.sunLength!==b||B.directionalLength!==S||B.pointLength!==v||B.spotLength!==A||B.rectAreaLength!==D||B.hemiLength!==R||B.numSunShadows!==x||B.numDirectionalShadows!==L||B.numPointShadows!==N||B.numSpotShadows!==M||B.numSpotMaps!==P||B.numLightProbes!==F)&&(s.sun.length=b,s.directional.length=S,s.spot.length=A,s.rectArea.length=D,s.point.length=v,s.hemi.length=R,s.sunShadow.length=x,s.sunShadowMap.length=x,s.sunShadowMatrix.length=C,s.sunShadowCascade.length=C,s.directionalShadow.length=L,s.directionalShadowMap.length=L,s.directionalShadowMatrix.length=L,s.pointShadow.length=N,s.pointShadowMap.length=N,s.pointShadowMatrix.length=N,s.spotShadow.length=M,s.spotShadowMap.length=M,s.spotLightMatrix.length=M+P-V,s.spotLightMap.length=P,s.numSpotLightShadowsWithMaps=V,s.numLightProbes=F,B.sunLength=b,B.directionalLength=S,B.pointLength=v,B.spotLength=A,B.rectAreaLength=D,B.hemiLength=R,B.numSunShadows=x,B.numDirectionalShadows=L,B.numPointShadows=N,B.numSpotShadows=M,B.numSpotMaps=P,B.numLightProbes=F,s.version=SC++)}function p(m,g){let _=0,y=0,b=0,x=0,C=0,S=0,v=g.matrixWorldInverse;for(let A=0,D=m.length;A<D;A++){let R=m[A];if(R.isSunLight){let L=s.sun[_];L.direction.setFromMatrixPosition(R.matrixWorld),L.direction.transformDirection(v),_++}else if(R.isDirectionalLight){let L=s.directional[y];L.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(v),y++}else if(R.isSpotLight){let L=s.spot[x];L.position.setFromMatrixPosition(R.matrixWorld),L.position.applyMatrix4(v),L.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(v),x++}else if(R.isRectAreaLight){let L=s.rectArea[C];L.position.setFromMatrixPosition(R.matrixWorld),L.position.applyMatrix4(v),c.identity(),u.copy(R.matrixWorld),u.premultiply(v),c.extractRotation(u),L.halfWidth.set(R.width*.5,0,0),L.halfHeight.set(0,R.height*.5,0),L.halfWidth.applyMatrix4(c),L.halfHeight.applyMatrix4(c),C++}else if(R.isPointLight){let L=s.point[b];L.position.setFromMatrixPosition(R.matrixWorld),L.position.applyMatrix4(v),b++}else if(R.isHemisphereLight){let L=s.hemi[S];L.direction.setFromMatrixPosition(R.matrixWorld),L.direction.transformDirection(v),S++}}}return{setup:d,setupView:p,state:s}}function $_(r){let e=new MC(r),t=[],s=[],o=[];function u(_){g.camera=_,t.length=0,s.length=0,o.length=0}function c(_){_.isLightProbeGrid?o.push(_):t.push(_)}function d(_){s.push(_)}function p(){e.setup(t),o.sort((_,y)=>_.priority-y.priority||_.id-y.id)}function m(_){e.setupView(t,_)}let g={lightsArray:t,shadowsArray:s,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:u,state:g,setupLights:p,setupLightsView:m,pushLight:c,pushShadow:d}}function wC(r){let e=new WeakMap;function t(o,u=0){let c=e.get(o),d;return c===void 0?(d=new $_(r),e.set(o,[d])):u>=c.length?(d=new $_(r),c.push(d)):d=c[u],d}function s(){e=new WeakMap}return{get:t,dispose:s}}var TC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,EC=`uniform sampler2D shadow_pass;
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
}`,AC=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],CC=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],Y_=new $t,Wl=new Y,wm=new Y;function RC(r,e,t){let s=new As,o=new vt,u=new vt,c=new Zt,d=new Kc,p=new Qc,m={},g=t.maxTextureSize,_={[Ls]:oi,[oi]:Ls,[Tr]:Tr},y=new Wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:TC,fragmentShader:EC}),b=y.clone();b.defines.HORIZONTAL_PASS=1;let x=new rr;x.setAttribute("position",new xr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let C=new Gi(x,y),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mo;let v=this.type;this.render=function(N,M,P){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||N.length===0)return;this.type===wa&&(Ye("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=mo);let V=r.getRenderTarget(),F=r.getActiveCubeFace(),B=r.getActiveMipmapLevel(),W=r.state;W.setBlending(go),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let Z=v!==this.type;Z&&M.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(Q=>Q.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,Q=N.length;O<Q;O++){let se=N[O],ee=se.shadow;if(ee===void 0){Ye("WebGLShadowMap:",se,"has no shadow.");continue}if(ee.autoUpdate===!1&&ee.needsUpdate===!1)continue;o.copy(ee.mapSize);let me=ee.getFrameExtents();o.multiply(me),u.copy(ee.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(u.x=Math.floor(g/me.x),o.x=u.x*me.x,ee.mapSize.x=u.x),o.y>g&&(u.y=Math.floor(g/me.y),o.y=u.y*me.y,ee.mapSize.y=u.y));let ne=r.state.buffers.depth.getReversed();if(ee.camera._reversedDepth=ne,ee.map===null||Z===!0){if(ee.map!==null&&(ee.map.depthTexture!==null&&(ee.map.depthTexture.dispose(),ee.map.depthTexture=null),ee.map.dispose()),this.type===Ns){if(se.isPointLight){Ye("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ee.map=new Ai(o.x,o.y,{format:Ds,type:ar,minFilter:ri,magFilter:ri,generateMipmaps:!1}),ee.map.texture.name=se.name+".shadowMap",ee.map.depthTexture=new Zr(o.x,o.y,or),ee.map.depthTexture.name=se.name+".shadowMapDepth",ee.map.depthTexture.format=qr,ee.map.depthTexture.compareFunction=null,ee.map.depthTexture.minFilter=Dn,ee.map.depthTexture.magFilter=Dn}else se.isPointLight?(ee.map=new ql(o.x),ee.map.depthTexture=new wl(o.x,sr)):(ee.map=new Ai(o.x,o.y),ee.map.depthTexture=new Zr(o.x,o.y,sr)),ee.map.depthTexture.name=se.name+".shadowMap",ee.map.depthTexture.format=qr,this.type===mo?(ee.map.depthTexture.compareFunction=ne?um:lm,ee.map.depthTexture.minFilter=ri,ee.map.depthTexture.magFilter=ri):(ee.map.depthTexture.compareFunction=null,ee.map.depthTexture.minFilter=Dn,ee.map.depthTexture.magFilter=Dn);ee.camera.updateProjectionMatrix()}ee.map.isWebGLCubeRenderTarget!==!0&&(ee.map.width!==o.x||ee.map.height!==o.y)&&ee.map.setSize(o.x,o.y);let ce=ee.map.isWebGLCubeRenderTarget?6:ee.getViewportCount();se.isPointLight!==!0&&ee.updateMatrices(se,P);let he=(ee.camera.layers.mask&4294967294)!==0?ee.camera.layers:P.layers;for(let Be=0;Be<ce;Be++){let Ve=ee.getCamera(Be);if(se.isPointLight){let re=ee.camera,Pe=ee.matrix,ke=se.distance||re.far;ke!==re.far&&(re.far=ke,re.updateProjectionMatrix()),Wl.setFromMatrixPosition(se.matrixWorld),re.position.copy(Wl),wm.copy(re.position),wm.add(AC[Be]),re.up.copy(CC[Be]),re.lookAt(wm),re.updateMatrixWorld(),Pe.makeTranslation(-Wl.x,-Wl.y,-Wl.z),Y_.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),ee._frustum.setFromProjectionMatrix(Y_,re.coordinateSystem,re.reversedDepth)}if(ee.map.isWebGLCubeRenderTarget)r.setRenderTarget(ee.map,Be),r.clear();else{Be===0&&(r.setRenderTarget(ee.map),r.clear());let re=ee.getViewport(Be);c.set(u.x*re.x,u.y*re.y,u.x*re.z,u.y*re.w),W.viewport(c)}s=ee.getFrustum(Be),R(M,P,Ve,se,he,this.type)}ee.isPointLightShadow!==!0&&this.type===Ns&&A(ee,P),ee.needsUpdate=!1}v=this.type,S.needsUpdate=!1,r.setRenderTarget(V,F,B)};function A(N,M){let P=e.update(C);y.defines.VSM_SAMPLES!==N.blurSamples&&(y.defines.VSM_SAMPLES=N.blurSamples,b.defines.VSM_SAMPLES=N.blurSamples,y.needsUpdate=!0,b.needsUpdate=!0),N.mapPass===null?N.mapPass=new Ai(o.x,o.y,{format:Ds,type:ar}):(N.mapPass.width!==N.map.width||N.mapPass.height!==N.map.height)&&N.mapPass.setSize(N.map.width,N.map.height),y.uniforms.shadow_pass.value=N.map.depthTexture,y.uniforms.resolution.value.set(N.map.width,N.map.height),y.uniforms.radius.value=N.radius,r.setRenderTarget(N.mapPass),r.clear(),r.renderBufferDirect(M,null,P,y,C,null),b.uniforms.shadow_pass.value=N.mapPass.texture,b.uniforms.resolution.value.set(N.map.width,N.map.height),b.uniforms.radius.value=N.radius,r.setRenderTarget(N.map),r.clear(),r.renderBufferDirect(M,null,P,b,C,null)}function D(N,M,P,V){let F=null,B=P.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(B!==void 0)F=B;else if(F=P.isPointLight===!0?p:d,r.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0||M.alphaToCoverage===!0){let W=F.uuid,Z=M.uuid,O=m[W];O===void 0&&(O={},m[W]=O);let Q=O[Z];Q===void 0&&(Q=F.clone(),O[Z]=Q,M.addEventListener("dispose",L)),F=Q}if(F.visible=M.visible,F.wireframe=M.wireframe,V===Ns?F.side=M.shadowSide!==null?M.shadowSide:M.side:F.side=M.shadowSide!==null?M.shadowSide:_[M.side],F.alphaMap=M.alphaMap,F.alphaTest=M.alphaToCoverage===!0?.5:M.alphaTest,F.map=M.map,F.clipShadows=M.clipShadows,F.clippingPlanes=M.clippingPlanes,F.clipIntersection=M.clipIntersection,F.displacementMap=M.displacementMap,F.displacementScale=M.displacementScale,F.displacementBias=M.displacementBias,F.wireframeLinewidth=M.wireframeLinewidth,F.linewidth=M.linewidth,P.isPointLight===!0&&F.isMeshDistanceMaterial===!0){let W=r.properties.get(F);W.light=P}return F}function R(N,M,P,V,F,B){if(N.visible===!1)return;if(N.layers.test(F)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&B===Ns)&&(!N.frustumCulled||N.intersectsFrustum(s))){N.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,N.matrixWorld);let O=e.update(N),Q=N.material;if(Array.isArray(Q)){let se=O.groups;for(let ee=0,me=se.length;ee<me;ee++){let ne=se[ee],ce=Q[ne.materialIndex];if(ce&&ce.visible){let he=D(N,ce,V,B);N.onBeforeShadow(r,N,M,P,O,he,ne),r.renderBufferDirect(P,null,O,he,N,ne),N.onAfterShadow(r,N,M,P,O,he,ne)}}}else if(Q.visible){let se=D(N,Q,V,B);N.onBeforeShadow(r,N,M,P,O,se,null),r.renderBufferDirect(P,null,O,se,N,null),N.onAfterShadow(r,N,M,P,O,se,null)}}let Z=N.children;for(let O=0,Q=Z.length;O<Q;O++)R(Z[O],M,P,V,F,B)}function L(N){N.target.removeEventListener("dispose",L);for(let P in m){let V=m[P],F=N.target.uuid;F in V&&(V[F].dispose(),delete V[F])}}}function PC(r,e){function t(){let U=!1,le=new Zt,ie=null,we=new Zt(0,0,0,0);return{setMask:function(ye){ie!==ye&&!U&&(r.colorMask(ye,ye,ye,ye),ie=ye)},setLocked:function(ye){U=ye},setClear:function(ye,be,He,rt,pe){pe===!0&&(ye*=rt,be*=rt,He*=rt),le.set(ye,be,He,rt),we.equals(le)===!1&&(r.clearColor(ye,be,He,rt),we.copy(le))},reset:function(){U=!1,ie=null,we.set(-1,0,0,0)}}}function s(){let U=!1,le=!1,ie=null,we=null,ye=null;return{setReversed:function(be){if(le!==be){let He=e.get("EXT_clip_control");be?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),le=be;let rt=ye;ye=null,this.setClear(rt)}},getReversed:function(){return le},setTest:function(be){be?Ne(r.DEPTH_TEST):Ke(r.DEPTH_TEST)},setMask:function(be){ie!==be&&!U&&(r.depthMask(be),ie=be)},setFunc:function(be){if(le&&(be=x_[be]),we!==be){switch(be){case Nc:r.depthFunc(r.NEVER);break;case Lc:r.depthFunc(r.ALWAYS);break;case Dc:r.depthFunc(r.LESS);break;case ga:r.depthFunc(r.LEQUAL);break;case kc:r.depthFunc(r.EQUAL);break;case Fc:r.depthFunc(r.GEQUAL);break;case Uc:r.depthFunc(r.GREATER);break;case Oc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}we=be}},setLocked:function(be){U=be},setClear:function(be){ye!==be&&(ye=be,le&&(be=1-be),r.clearDepth(be))},reset:function(){U=!1,ie=null,we=null,ye=null,le=!1}}}function o(){let U=!1,le=null,ie=null,we=null,ye=null,be=null,He=null,rt=null,pe=null;return{setTest:function(Ge){U||(Ge?Ne(r.STENCIL_TEST):Ke(r.STENCIL_TEST))},setMask:function(Ge){le!==Ge&&!U&&(r.stencilMask(Ge),le=Ge)},setFunc:function(Ge,it,Ae){(ie!==Ge||we!==it||ye!==Ae)&&(r.stencilFunc(Ge,it,Ae),ie=Ge,we=it,ye=Ae)},setOp:function(Ge,it,Ae){(be!==Ge||He!==it||rt!==Ae)&&(r.stencilOp(Ge,it,Ae),be=Ge,He=it,rt=Ae)},setLocked:function(Ge){U=Ge},setClear:function(Ge){pe!==Ge&&(r.clearStencil(Ge),pe=Ge)},reset:function(){U=!1,le=null,ie=null,we=null,ye=null,be=null,He=null,rt=null,pe=null}}}let u=new t,c=new s,d=new o,p={},m=new WeakMap,g={},_={},y={},b=new WeakMap,x=[],C=null,S=!1,v=null,A=null,D=null,R=null,L=null,N=null,M=null,P=new st(0,0,0),V=0,F=!1,B=null,W=null,Z=null,O=null,Q=null,se=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ee=!1,me=0,ne=r.getParameter(r.VERSION);ne.indexOf("WebGL")!==-1?(me=parseFloat(/^WebGL (\d)/.exec(ne)[1]),ee=me>=1):ne.indexOf("OpenGL ES")!==-1&&(me=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),ee=me>=2);let ce=null,he={},Be=r.getParameter(r.SCISSOR_BOX),Ve=r.getParameter(r.VIEWPORT),re=new Zt().fromArray(Be),Pe=new Zt().fromArray(Ve);function ke(U,le,ie,we){let ye=new Uint8Array(4),be=r.createTexture();r.bindTexture(U,be),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let He=0;He<ie;He++)U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY?r.texImage3D(le,0,r.RGBA,1,1,we,0,r.RGBA,r.UNSIGNED_BYTE,ye):r.texImage2D(le+He,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ye);return be}let We={};We[r.TEXTURE_2D]=ke(r.TEXTURE_2D,r.TEXTURE_2D,1),We[r.TEXTURE_CUBE_MAP]=ke(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),We[r.TEXTURE_2D_ARRAY]=ke(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),We[r.TEXTURE_3D]=ke(r.TEXTURE_3D,r.TEXTURE_3D,1,1),u.setClear(0,0,0,1),c.setClear(1),d.setClear(0),Ne(r.DEPTH_TEST),c.setFunc(ga),ln(!1),Bt(Bp),Ne(r.CULL_FACE),an(go);function Ne(U){g[U]!==!0&&(r.enable(U),g[U]=!0)}function Ke(U){g[U]!==!1&&(r.disable(U),g[U]=!1)}function zt(U,le){return y[U]!==le?(r.bindFramebuffer(U,le),y[U]=le,U===r.DRAW_FRAMEBUFFER&&(y[r.FRAMEBUFFER]=le),U===r.FRAMEBUFFER&&(y[r.DRAW_FRAMEBUFFER]=le),!0):!1}function qe(U,le){let ie=x,we=!1;if(U){ie=b.get(le),ie===void 0&&(ie=[],b.set(le,ie));let ye=U.textures;if(ie.length!==ye.length||ie[0]!==r.COLOR_ATTACHMENT0){for(let be=0,He=ye.length;be<He;be++)ie[be]=r.COLOR_ATTACHMENT0+be;ie.length=ye.length,we=!0}}else ie[0]!==r.BACK&&(ie[0]=r.BACK,we=!0);we&&r.drawBuffers(ie)}function wt(U){return C!==U?(r.useProgram(U),C=U,!0):!1}let yt={[vo]:r.FUNC_ADD,[Wy]:r.FUNC_SUBTRACT,[Xy]:r.FUNC_REVERSE_SUBTRACT};yt[qy]=r.MIN,yt[$y]=r.MAX;let ft={[Yy]:r.ZERO,[jy]:r.ONE,[Zy]:r.SRC_COLOR,[Xp]:r.SRC_ALPHA,[n_]:r.SRC_ALPHA_SATURATE,[e_]:r.DST_COLOR,[Ky]:r.DST_ALPHA,[Jy]:r.ONE_MINUS_SRC_COLOR,[qp]:r.ONE_MINUS_SRC_ALPHA,[t_]:r.ONE_MINUS_DST_COLOR,[Qy]:r.ONE_MINUS_DST_ALPHA,[i_]:r.CONSTANT_COLOR,[r_]:r.ONE_MINUS_CONSTANT_COLOR,[s_]:r.CONSTANT_ALPHA,[o_]:r.ONE_MINUS_CONSTANT_ALPHA};function an(U,le,ie,we,ye,be,He,rt,pe,Ge){if(U===go){S===!0&&(Ke(r.BLEND),S=!1);return}if(S===!1&&(Ne(r.BLEND),S=!0),U!==Gy){if(U!==v||Ge!==F){if((A!==vo||L!==vo)&&(r.blendEquation(r.FUNC_ADD),A=vo,L=vo),Ge)switch(U){case Ta:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Vp:r.blendFunc(r.ONE,r.ONE);break;case Gp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Wp:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:et("WebGLState: Invalid blending: ",U);break}else switch(U){case Ta:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Vp:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Gp:et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wp:et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:et("WebGLState: Invalid blending: ",U);break}D=null,R=null,N=null,M=null,P.set(0,0,0),V=0,v=U,F=Ge}return}ye=ye||le,be=be||ie,He=He||we,(le!==A||ye!==L)&&(r.blendEquationSeparate(yt[le],yt[ye]),A=le,L=ye),(ie!==D||we!==R||be!==N||He!==M)&&(r.blendFuncSeparate(ft[ie],ft[we],ft[be],ft[He]),D=ie,R=we,N=be,M=He),(rt.equals(P)===!1||pe!==V)&&(r.blendColor(rt.r,rt.g,rt.b,pe),P.copy(rt),V=pe),v=U,F=!1}function Gt(U,le){U.side===Tr?Ke(r.CULL_FACE):Ne(r.CULL_FACE);let ie=U.side===oi;le&&(ie=!ie),ln(ie),U.blending===Ta&&U.transparent===!1?an(go):an(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),c.setFunc(U.depthFunc),c.setTest(U.depthTest),c.setMask(U.depthWrite),u.setMask(U.colorWrite);let we=U.stencilWrite;d.setTest(we),we&&(d.setMask(U.stencilWriteMask),d.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),d.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ht(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Ne(r.SAMPLE_ALPHA_TO_COVERAGE):Ke(r.SAMPLE_ALPHA_TO_COVERAGE)}function ln(U){B!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),B=U)}function Bt(U){U!==Hy?(Ne(r.CULL_FACE),U!==W&&(U===Bp?r.cullFace(r.BACK):U===Vy?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ke(r.CULL_FACE),W=U}function Xn(U){U!==Z&&(ee&&r.lineWidth(U),Z=U)}function Ht(U,le,ie){U?(Ne(r.POLYGON_OFFSET_FILL),(O!==le||Q!==ie)&&(O=le,Q=ie,c.getReversed()&&(le=-le,ie=-ie),r.polygonOffset(le,ie))):Ke(r.POLYGON_OFFSET_FILL)}function un(U){U?Ne(r.SCISSOR_TEST):Ke(r.SCISSOR_TEST)}function kn(U){U===void 0&&(U=r.TEXTURE0+se-1),ce!==U&&(r.activeTexture(U),ce=U)}function qn(U,le,ie){ie===void 0&&(ce===null?ie=r.TEXTURE0+se-1:ie=ce);let we=he[ie];we===void 0&&(we={type:void 0,texture:void 0},he[ie]=we),(we.type!==U||we.texture!==le)&&(ce!==ie&&(r.activeTexture(ie),ce=ie),r.bindTexture(U,le||We[U]),we.type=U,we.texture=le)}function H(){let U=he[ce];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Fn(){try{r.compressedTexImage2D(...arguments)}catch(U){et("WebGLState:",U)}}function Ct(){try{r.compressedTexImage3D(...arguments)}catch(U){et("WebGLState:",U)}}function ot(){try{r.texSubImage2D(...arguments)}catch(U){et("WebGLState:",U)}}function Ee(){try{r.texSubImage3D(...arguments)}catch(U){et("WebGLState:",U)}}function cn(){try{r.compressedTexSubImage2D(...arguments)}catch(U){et("WebGLState:",U)}}function Xe(){try{r.compressedTexSubImage3D(...arguments)}catch(U){et("WebGLState:",U)}}function je(){try{r.texStorage2D(...arguments)}catch(U){et("WebGLState:",U)}}function I(){try{r.texStorage3D(...arguments)}catch(U){et("WebGLState:",U)}}function T(){try{r.texImage2D(...arguments)}catch(U){et("WebGLState:",U)}}function q(){try{r.texImage3D(...arguments)}catch(U){et("WebGLState:",U)}}function de(U){return _[U]!==void 0?_[U]:r.getParameter(U)}function ue(U,le){_[U]!==le&&(r.pixelStorei(U,le),_[U]=le)}function xe(U){re.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),re.copy(U))}function Te(U){Pe.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),Pe.copy(U))}function oe(U,le){let ie=m.get(le);ie===void 0&&(ie=new WeakMap,m.set(le,ie));let we=ie.get(U);we===void 0&&(we=r.getUniformBlockIndex(le,U.name),r.uniformBlockBinding(le,we,we),ie.set(U,we))}function ae(U,le,ie){let ye=m.get(le).get(U);p[ye]!==ie&&(r.bindBufferBase(r.UNIFORM_BUFFER,ye,ie),p[ye]=ie)}function Me(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),c.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),g={},_={},ce=null,he={},y={},p={},b=new WeakMap,x=[],C=null,S=!1,v=null,A=null,D=null,R=null,L=null,N=null,M=null,P=new st(0,0,0),V=0,F=!1,B=null,W=null,Z=null,O=null,Q=null,re.set(0,0,r.canvas.width,r.canvas.height),Pe.set(0,0,r.canvas.width,r.canvas.height),u.reset(),c.reset(),d.reset()}return{buffers:{color:u,depth:c,stencil:d},enable:Ne,disable:Ke,bindFramebuffer:zt,drawBuffers:qe,useProgram:wt,setBlending:an,setMaterial:Gt,setFlipSided:ln,setCullFace:Bt,setLineWidth:Xn,setPolygonOffset:Ht,setScissorTest:un,activeTexture:kn,bindTexture:qn,unbindTexture:H,compressedTexImage2D:Fn,compressedTexImage3D:Ct,texImage2D:T,texImage3D:q,pixelStorei:ue,getParameter:de,updateUBOMapping:oe,uniformBlockBinding:ae,texStorage2D:je,texStorage3D:I,texSubImage2D:ot,texSubImage3D:Ee,compressedTexSubImage2D:cn,compressedTexSubImage3D:Xe,scissor:xe,viewport:Te,reset:Me}}function IC(r,e,t,s,o,u,c){let d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new vt,g=new WeakMap,_=new Set,y,b=new WeakMap,x=new Set,C=new FinalizationRegistry(I=>x.delete(I)),S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(I,T){return S?new OffscreenCanvas(I,T):gl("canvas")}function A(I,T,q){let de=1,ue=je(I);if((ue.width>q||ue.height>q)&&(de=q/Math.max(ue.width,ue.height)),de<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let xe=Math.floor(de*ue.width),Te=Math.floor(de*ue.height);y===void 0&&(y=v(xe,Te));let oe=T?v(xe,Te):y;return oe.width=xe,oe.height=Te,oe.getContext("2d").drawImage(I,0,0,xe,Te),Ye("WebGLRenderer: Texture has been resized from ("+ue.width+"x"+ue.height+") to ("+xe+"x"+Te+")."),oe}else return"data"in I&&Ye("WebGLRenderer: Image in DataTexture is too big ("+ue.width+"x"+ue.height+")."),I;return I}function D(I){return I.generateMipmaps}function R(I){r.generateMipmap(I)}function L(I){return I.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?r.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function N(I,T,q,de,ue,xe=!1){if(I!==null){if(r[I]!==void 0)return r[I];Ye("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Te;de&&(Te=e.get("EXT_texture_norm16"),Te||Ye("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let oe=T;if(T===r.RED&&(q===r.FLOAT&&(oe=r.R32F),q===r.HALF_FLOAT&&(oe=r.R16F),q===r.UNSIGNED_BYTE&&(oe=r.R8),q===r.UNSIGNED_SHORT&&Te&&(oe=Te.R16_EXT),q===r.SHORT&&Te&&(oe=Te.R16_SNORM_EXT)),T===r.RED_INTEGER&&(q===r.UNSIGNED_BYTE&&(oe=r.R8UI),q===r.UNSIGNED_SHORT&&(oe=r.R16UI),q===r.UNSIGNED_INT&&(oe=r.R32UI),q===r.BYTE&&(oe=r.R8I),q===r.SHORT&&(oe=r.R16I),q===r.INT&&(oe=r.R32I)),T===r.RG&&(q===r.FLOAT&&(oe=r.RG32F),q===r.HALF_FLOAT&&(oe=r.RG16F),q===r.UNSIGNED_BYTE&&(oe=r.RG8),q===r.UNSIGNED_SHORT&&Te&&(oe=Te.RG16_EXT),q===r.SHORT&&Te&&(oe=Te.RG16_SNORM_EXT)),T===r.RG_INTEGER&&(q===r.UNSIGNED_BYTE&&(oe=r.RG8UI),q===r.UNSIGNED_SHORT&&(oe=r.RG16UI),q===r.UNSIGNED_INT&&(oe=r.RG32UI),q===r.BYTE&&(oe=r.RG8I),q===r.SHORT&&(oe=r.RG16I),q===r.INT&&(oe=r.RG32I)),T===r.RGB_INTEGER&&(q===r.UNSIGNED_BYTE&&(oe=r.RGB8UI),q===r.UNSIGNED_SHORT&&(oe=r.RGB16UI),q===r.UNSIGNED_INT&&(oe=r.RGB32UI),q===r.BYTE&&(oe=r.RGB8I),q===r.SHORT&&(oe=r.RGB16I),q===r.INT&&(oe=r.RGB32I)),T===r.RGBA_INTEGER&&(q===r.UNSIGNED_BYTE&&(oe=r.RGBA8UI),q===r.UNSIGNED_SHORT&&(oe=r.RGBA16UI),q===r.UNSIGNED_INT&&(oe=r.RGBA32UI),q===r.BYTE&&(oe=r.RGBA8I),q===r.SHORT&&(oe=r.RGBA16I),q===r.INT&&(oe=r.RGBA32I)),T===r.RGB&&(q===r.UNSIGNED_SHORT&&Te&&(oe=Te.RGB16_EXT),q===r.SHORT&&Te&&(oe=Te.RGB16_SNORM_EXT),q===r.UNSIGNED_INT_5_9_9_9_REV&&(oe=r.RGB9_E5),q===r.UNSIGNED_INT_10F_11F_11F_REV&&(oe=r.R11F_G11F_B10F)),T===r.RGBA){let ae=xe?ml:gt.getTransfer(ue);q===r.FLOAT&&(oe=r.RGBA32F),q===r.HALF_FLOAT&&(oe=r.RGBA16F),q===r.UNSIGNED_BYTE&&(oe=ae===kt?r.SRGB8_ALPHA8:r.RGBA8),q===r.UNSIGNED_SHORT&&Te&&(oe=Te.RGBA16_EXT),q===r.SHORT&&Te&&(oe=Te.RGBA16_SNORM_EXT),q===r.UNSIGNED_SHORT_4_4_4_4&&(oe=r.RGBA4),q===r.UNSIGNED_SHORT_5_5_5_1&&(oe=r.RGB5_A1)}return(oe===r.R16F||oe===r.R32F||oe===r.RG16F||oe===r.RG32F||oe===r.RGBA16F||oe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function M(I,T){let q;return I?T===null||T===sr||T===_o?q=r.DEPTH24_STENCIL8:T===or?q=r.DEPTH32F_STENCIL8:T===Aa&&(q=r.DEPTH24_STENCIL8,Ye("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===sr||T===_o?q=r.DEPTH_COMPONENT24:T===or?q=r.DEPTH_COMPONENT32F:T===Aa&&(q=r.DEPTH_COMPONENT16),q}function P(I,T){return D(I)===!0||I.isFramebufferTexture&&I.minFilter!==Dn&&I.minFilter!==ri?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function V(I){let T=new WeakRef(I);s.get(I).__ref=T,x.add(T),C.register(I,T,T)}function F(I){let T=s.get(I).__ref;T!==void 0&&(x.delete(T),C.unregister(T))}function B(I){Z(I.target)}function W(I){O(I.target)}function Z(I){I.removeEventListener("dispose",B),F(I),se(I),I.isVideoTexture&&g.delete(I),I.isHTMLTexture&&_.delete(I)}function O(I){I.removeEventListener("dispose",W),F(I),me(I)}function Q(){for(let I of x){let T=I.deref();T!==void 0&&(T.isRenderTarget===!0?O(T):Z(T))}x.clear(),_.clear()}function se(I){let T=s.get(I);if(T.__webglInit===void 0)return;let q=I.source,de=b.get(q);if(de){let ue=de[T.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&ee(I),Object.keys(de).length===0&&b.delete(q)}s.remove(I)}function ee(I){let T=s.get(I);r.deleteTexture(T.__webglTexture);let q=I.source,de=b.get(q);delete de[T.__cacheKey],c.memory.textures--}function me(I){let T=s.get(I);T.__depthDisposeCallback&&T.__depthDisposeCallback();let q=I.depthTexture;if(q&&q.renderTarget===I&&Z(q),I.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(T.__webglFramebuffer[ue]))for(let xe=0;xe<T.__webglFramebuffer[ue].length;xe++)r.deleteFramebuffer(T.__webglFramebuffer[ue][xe]);else r.deleteFramebuffer(T.__webglFramebuffer[ue]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[ue])}else{if(Array.isArray(T.__webglFramebuffer))for(let ue=0;ue<T.__webglFramebuffer.length;ue++)r.deleteFramebuffer(T.__webglFramebuffer[ue]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ue=0;ue<T.__webglColorRenderbuffer.length;ue++)T.__webglColorRenderbuffer[ue]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[ue]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let de=I.textures;for(let ue=0,xe=de.length;ue<xe;ue++){let Te=s.get(de[ue]);Te.__webglTexture&&(r.deleteTexture(Te.__webglTexture),c.memory.textures--),s.remove(de[ue])}s.remove(I)}let ne=0;function ce(){ne=0}function he(){return ne}function Be(I){ne=I}function Ve(){let I=ne;return I>=o.maxTextures&&Ye("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+o.maxTextures),ne+=1,I}function re(I){let T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.mipmapsAutoUpdate),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.colorSpace),T.join()}function Pe(I,T){let q=s.get(I);if(I.isVideoTexture&&cn(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&q.__version!==I.version){let de=I.image;if(de===null)Ye("WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)Ye("WebGLRenderer: Texture marked for update but image is incomplete");else{Gt(q,I,T);return}}else I.isExternalTexture&&(q.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,q.__webglTexture,r.TEXTURE0+T)}function ke(I,T){let q=s.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&q.__version!==I.version){Gt(q,I,T);return}else I.isExternalTexture&&(q.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,q.__webglTexture,r.TEXTURE0+T)}function We(I,T){let q=s.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&q.__version!==I.version){Gt(q,I,T);return}t.bindTexture(r.TEXTURE_3D,q.__webglTexture,r.TEXTURE0+T)}function Ne(I,T){let q=s.get(I);if(I.version>0&&q.__version!==I.version){ln(q,I,T);return}t.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture,r.TEXTURE0+T)}let Ke={[zc]:r.REPEAT,[Sr]:r.CLAMP_TO_EDGE,[Bc]:r.MIRRORED_REPEAT},zt={[Dn]:r.NEAREST,[u_]:r.NEAREST_MIPMAP_NEAREST,[Fl]:r.NEAREST_MIPMAP_LINEAR,[ri]:r.LINEAR,[gf]:r.LINEAR_MIPMAP_NEAREST,[Jr]:r.LINEAR_MIPMAP_LINEAR},qe={[h_]:r.NEVER,[cm]:r.ALWAYS,[p_]:r.LESS,[lm]:r.LEQUAL,[m_]:r.EQUAL,[um]:r.GEQUAL,[g_]:r.GREATER,[v_]:r.NOTEQUAL};function wt(I,T){if(T.type===or&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===ri||T.magFilter===gf||T.magFilter===Fl||T.magFilter===Jr||T.minFilter===ri||T.minFilter===gf||T.minFilter===Fl||T.minFilter===Jr)&&Ye("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(I,r.TEXTURE_WRAP_S,Ke[T.wrapS]),r.texParameteri(I,r.TEXTURE_WRAP_T,Ke[T.wrapT]),(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)&&r.texParameteri(I,r.TEXTURE_WRAP_R,Ke[T.wrapR]),r.texParameteri(I,r.TEXTURE_MAG_FILTER,zt[T.magFilter]),r.texParameteri(I,r.TEXTURE_MIN_FILTER,zt[T.minFilter]),T.compareFunction&&(r.texParameteri(I,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(I,r.TEXTURE_COMPARE_FUNC,qe[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Dn||T.minFilter!==Fl&&T.minFilter!==Jr||T.type===or&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){let q=e.get("EXT_texture_filter_anisotropic");r.texParameterf(I,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function yt(I,T){let q=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",B),V(T));let de=T.source,ue=b.get(de);ue===void 0&&(ue={},b.set(de,ue));let xe=re(T);if(xe!==I.__cacheKey){ue[xe]===void 0&&(ue[xe]={texture:r.createTexture(),usedTimes:0},c.memory.textures++,q=!0),ue[xe].usedTimes++;let Te=ue[I.__cacheKey];Te!==void 0&&(ue[I.__cacheKey].usedTimes--,Te.usedTimes===0&&ee(T)),I.__cacheKey=xe,I.__webglTexture=ue[xe].texture}return q}function ft(I,T,q){return Math.floor(Math.floor(I/q)/T)}function an(I,T,q,de){let xe=I.updateRanges;if(xe.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,q,de,T.data);else{xe.sort((U,le)=>U.start-le.start);let Te=0;for(let U=1;U<xe.length;U++){let le=xe[Te],ie=xe[U],we=le.start+le.count,ye=ft(ie.start,T.width,4),be=ft(le.start,T.width,4);ie.start<=we+1&&ye===be&&ft(ie.start+ie.count-1,T.width,4)===ye?le.count=Math.max(le.count,ie.start+ie.count-le.start):(++Te,xe[Te]=ie)}xe.length=Te+1;let oe=t.getParameter(r.UNPACK_ROW_LENGTH),ae=t.getParameter(r.UNPACK_SKIP_PIXELS),Me=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let U=0,le=xe.length;U<le;U++){let ie=xe[U],we=Math.floor(ie.start/4),ye=Math.ceil(ie.count/4),be=we%T.width,He=Math.floor(we/T.width),rt=ye,pe=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,be),t.pixelStorei(r.UNPACK_SKIP_ROWS,He),t.texSubImage2D(r.TEXTURE_2D,0,be,He,rt,pe,q,de,T.data)}I.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,oe),t.pixelStorei(r.UNPACK_SKIP_PIXELS,ae),t.pixelStorei(r.UNPACK_SKIP_ROWS,Me)}}function Gt(I,T,q){let de=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(de=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(de=r.TEXTURE_3D);let ue=yt(I,T),xe=T.source;t.bindTexture(de,I.__webglTexture,r.TEXTURE0+q);let Te=s.get(xe);if(xe.version!==Te.__version||ue===!0){if(t.activeTexture(r.TEXTURE0+q),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let pe=gt.getPrimaries(gt.workingColorSpace),Ge=T.colorSpace===Qr?null:gt.getPrimaries(T.colorSpace),it=T.colorSpace===Qr||pe===Ge?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,it)}t.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment);let ae=A(T.image,!1,o.maxTextureSize);ae=Xe(T,ae);let Me=u.convert(T.format,T.colorSpace),U=u.convert(T.type),le=N(T.internalFormat,Me,U,T.normalized,T.colorSpace,T.isVideoTexture);wt(de,T);let ie,we=T.mipmaps,ye=T.isVideoTexture!==!0,be=Te.__version===void 0||ue===!0,He=xe.dataReady,rt=P(T,ae);if(T.isDepthTexture)le=M(T.format===Kr,T.type),be&&(ye?t.texStorage2D(r.TEXTURE_2D,1,le,ae.width,ae.height):t.texImage2D(r.TEXTURE_2D,0,le,ae.width,ae.height,0,Me,U,null));else if(T.isDataTexture)if(we.length>0){ye&&be&&t.texStorage2D(r.TEXTURE_2D,rt,le,we[0].width,we[0].height);for(let pe=0,Ge=we.length;pe<Ge;pe++)ie=we[pe],ye?He&&t.texSubImage2D(r.TEXTURE_2D,pe,0,0,ie.width,ie.height,Me,U,ie.data):t.texImage2D(r.TEXTURE_2D,pe,le,ie.width,ie.height,0,Me,U,ie.data);T.generateMipmaps=!1}else ye?(be&&t.texStorage2D(r.TEXTURE_2D,rt,le,ae.width,ae.height),He&&an(T,ae,Me,U)):t.texImage2D(r.TEXTURE_2D,0,le,ae.width,ae.height,0,Me,U,ae.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ye&&be&&t.texStorage3D(r.TEXTURE_2D_ARRAY,rt,le,we[0].width,we[0].height,ae.depth);for(let pe=0,Ge=we.length;pe<Ge;pe++)if(ie=we[pe],T.format!==Ri)if(Me!==null)if(ye){if(He)if(T.layerUpdates.size>0){let it=vm(ie.width,ie.height,T.format,T.type);for(let Ae of T.layerUpdates){let Rt=ie.data.subarray(Ae*it/ie.data.BYTES_PER_ELEMENT,(Ae+1)*it/ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,pe,0,0,Ae,ie.width,ie.height,1,Me,Rt)}}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,pe,0,0,0,ie.width,ie.height,ae.depth,Me,ie.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,pe,le,ie.width,ie.height,ae.depth,0,ie.data,0,0);else Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ye?He&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,pe,0,0,0,ie.width,ie.height,ae.depth,Me,U,ie.data):t.texImage3D(r.TEXTURE_2D_ARRAY,pe,le,ie.width,ie.height,ae.depth,0,Me,U,ie.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{ye&&be&&t.texStorage2D(r.TEXTURE_2D,rt,le,we[0].width,we[0].height);for(let pe=0,Ge=we.length;pe<Ge;pe++)ie=we[pe],T.format!==Ri?Me!==null?ye?He&&t.compressedTexSubImage2D(r.TEXTURE_2D,pe,0,0,ie.width,ie.height,Me,ie.data):t.compressedTexImage2D(r.TEXTURE_2D,pe,le,ie.width,ie.height,0,ie.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ye?He&&t.texSubImage2D(r.TEXTURE_2D,pe,0,0,ie.width,ie.height,Me,U,ie.data):t.texImage2D(r.TEXTURE_2D,pe,le,ie.width,ie.height,0,Me,U,ie.data)}else if(T.isDataArrayTexture)if(ye){if(be&&t.texStorage3D(r.TEXTURE_2D_ARRAY,rt,le,ae.width,ae.height,ae.depth),He)if(T.layerUpdates.size>0){let pe=vm(ae.width,ae.height,T.format,T.type);for(let Ge of T.layerUpdates){let it=ae.data.subarray(Ge*pe/ae.data.BYTES_PER_ELEMENT,(Ge+1)*pe/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Ge,ae.width,ae.height,1,Me,U,it)}T.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Me,U,ae.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,le,ae.width,ae.height,ae.depth,0,Me,U,ae.data);else if(T.isData3DTexture)ye?(be&&t.texStorage3D(r.TEXTURE_3D,rt,le,ae.width,ae.height,ae.depth),He&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Me,U,ae.data)):t.texImage3D(r.TEXTURE_3D,0,le,ae.width,ae.height,ae.depth,0,Me,U,ae.data);else if(T.isFramebufferTexture){if(be)if(ye)t.texStorage2D(r.TEXTURE_2D,rt,le,ae.width,ae.height);else{let pe=ae.width,Ge=ae.height;for(let it=0;it<rt;it++)t.texImage2D(r.TEXTURE_2D,it,le,pe,Ge,0,Me,U,null),pe>>=1,Ge>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in r){let pe=r.canvas;if(pe.hasAttribute("layoutsubtree")||pe.setAttribute("layoutsubtree","true"),ae.parentNode!==pe){pe.appendChild(ae),_.add(T),pe.onpaint=Ge=>{let it=Ge.changedElements;for(let Ae of _)it.includes(Ae.image)&&(Ae.needsUpdate=!0)},pe.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,ae);else{let it=r.RGBA,Ae=r.RGBA,Rt=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,it,Ae,Rt,ae)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(we.length>0){if(ye&&be){let pe=je(we[0]);t.texStorage2D(r.TEXTURE_2D,rt,le,pe.width,pe.height)}for(let pe=0,Ge=we.length;pe<Ge;pe++)ie=we[pe],ye?He&&t.texSubImage2D(r.TEXTURE_2D,pe,0,0,Me,U,ie):t.texImage2D(r.TEXTURE_2D,pe,le,Me,U,ie);T.generateMipmaps=!1}else if(ye){if(be){let pe=je(ae);t.texStorage2D(r.TEXTURE_2D,rt,le,pe.width,pe.height)}He&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Me,U,ae)}else t.texImage2D(r.TEXTURE_2D,0,le,Me,U,ae);D(T)&&T.mipmapsAutoUpdate===!0&&R(de),Te.__version=xe.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function ln(I,T,q){if(T.image.length!==6)return;let de=yt(I,T),ue=T.source;t.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+q);let xe=s.get(ue);if(ue.version!==xe.__version||de===!0){t.activeTexture(r.TEXTURE0+q);let Te=gt.getPrimaries(gt.workingColorSpace),oe=T.colorSpace===Qr?null:gt.getPrimaries(T.colorSpace),ae=T.colorSpace===Qr||Te===oe?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let Me=T.isCompressedTexture||T.image[0].isCompressedTexture,U=T.image[0]&&T.image[0].isDataTexture,le=[];for(let Ae=0;Ae<6;Ae++)!Me&&!U?le[Ae]=A(T.image[Ae],!0,o.maxCubemapSize):le[Ae]=U?T.image[Ae].image:T.image[Ae],le[Ae]=Xe(T,le[Ae]);let ie=le[0],we=u.convert(T.format,T.colorSpace),ye=u.convert(T.type),be=N(T.internalFormat,we,ye,T.normalized,T.colorSpace),He=T.isVideoTexture!==!0,rt=xe.__version===void 0||de===!0,pe=ue.dataReady,Ge=P(T,ie);wt(r.TEXTURE_CUBE_MAP,T);let it;if(T.isDepthTexture){if(be=M(T.format===Kr,T.type),rt)if(He)t.texStorage2D(r.TEXTURE_CUBE_MAP,1,be,ie.width,ie.height);else for(let Ae=0;Ae<6;Ae++)t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,be,ie.width,ie.height,0,we,ye,null)}else if(Me){He&&rt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ge,be,ie.width,ie.height);for(let Ae=0;Ae<6;Ae++){it=le[Ae].mipmaps;for(let Rt=0;Rt<it.length;Rt++){let hn=it[Rt];T.format!==Ri?we!==null?He?pe&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Rt,0,0,hn.width,hn.height,we,hn.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Rt,be,hn.width,hn.height,0,hn.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Rt,0,0,hn.width,hn.height,we,ye,hn.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Rt,be,hn.width,hn.height,0,we,ye,hn.data)}}}else{if(it=T.mipmaps,He&&rt){it.length>0&&Ge++;let Ae=je(le[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Ge,be,Ae.width,Ae.height)}for(let Ae=0;Ae<6;Ae++)if(U){He?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,le[Ae].width,le[Ae].height,we,ye,le[Ae].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,be,le[Ae].width,le[Ae].height,0,we,ye,le[Ae].data);for(let Rt=0;Rt<it.length;Rt++){let mi=it[Rt].image[Ae].image;He?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Rt+1,0,0,mi.width,mi.height,we,ye,mi.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Rt+1,be,mi.width,mi.height,0,we,ye,mi.data)}}else{He?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,we,ye,le[Ae]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,be,we,ye,le[Ae]);for(let Rt=0;Rt<it.length;Rt++){let hn=it[Rt];He?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Rt+1,0,0,we,ye,hn.image[Ae]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Rt+1,be,we,ye,hn.image[Ae])}}}D(T)&&T.mipmapsAutoUpdate===!0&&R(r.TEXTURE_CUBE_MAP),xe.__version=ue.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function Bt(I,T,q,de,ue,xe){let Te=u.convert(q.format,q.colorSpace),oe=u.convert(q.type),ae=N(q.internalFormat,Te,oe,q.normalized,q.colorSpace),Me=s.get(T),U=s.get(q);if(U.__renderTarget=T,!Me.__hasExternalTextures){let le=Math.max(1,T.width>>xe),ie=Math.max(1,T.height>>xe);ue===r.TEXTURE_3D||ue===r.TEXTURE_2D_ARRAY?t.texImage3D(ue,xe,ae,le,ie,T.depth,0,Te,oe,null):t.texImage2D(ue,xe,ae,le,ie,0,Te,oe,null)}t.bindFramebuffer(r.FRAMEBUFFER,I),Ee(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,de,ue,U.__webglTexture,0,ot(T)):(ue===r.TEXTURE_2D||ue>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,de,ue,U.__webglTexture,xe),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Xn(I,T,q){if(r.bindRenderbuffer(r.RENDERBUFFER,I),T.depthBuffer){let de=T.depthTexture,ue=de&&de.isDepthTexture?de.type:null,xe=M(T.stencilBuffer,ue),Te=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Ee(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ot(T),xe,T.width,T.height):q?r.renderbufferStorageMultisample(r.RENDERBUFFER,ot(T),xe,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,xe,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Te,r.RENDERBUFFER,I)}else{let de=T.textures;for(let ue=0;ue<de.length;ue++){let xe=de[ue],Te=u.convert(xe.format,xe.colorSpace),oe=u.convert(xe.type),ae=N(xe.internalFormat,Te,oe,xe.normalized,xe.colorSpace);Ee(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ot(T),ae,T.width,T.height):q?r.renderbufferStorageMultisample(r.RENDERBUFFER,ot(T),ae,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,ae,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ht(I,T,q){let de=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ue=s.get(T.depthTexture);ue.__renderTarget=T;let xe=de?T.depthTexture.image[0]:T.depthTexture.image;(!ue.__webglTexture||xe.width!==T.width||xe.height!==T.height)&&(xe.width=T.width,xe.height=T.height,T.depthTexture.needsUpdate=!0),de?Ne(T.depthTexture,0):Pe(T.depthTexture,0);let Te=ue.__webglTexture,oe=ot(T),ae=de?r.TEXTURE_CUBE_MAP_POSITIVE_X+q:r.TEXTURE_2D,Me=T.depthTexture.format===Kr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(T.depthTexture.format===qr)Ee(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Me,ae,Te,0,oe):r.framebufferTexture2D(r.FRAMEBUFFER,Me,ae,Te,0);else if(T.depthTexture.format===Kr)Ee(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Me,ae,Te,0,oe):r.framebufferTexture2D(r.FRAMEBUFFER,Me,ae,Te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function un(I){let T=s.get(I),q=I.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==I.depthTexture){let de=I.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),de){let ue=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,de.removeEventListener("dispose",ue)};de.addEventListener("dispose",ue),T.__depthDisposeCallback=ue}T.__boundDepthTexture=de}if(I.depthTexture&&!T.__autoAllocateDepthBuffer)if(q)for(let de=0;de<6;de++)Ht(T.__webglFramebuffer[de],I,de);else I.texture.mipmaps.length>0?Ht(T.__webglFramebuffer[0],I,0):Ht(T.__webglFramebuffer,I,0);else if(q){T.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[de]),T.__webglDepthbuffer[de]===void 0)T.__webglDepthbuffer[de]=r.createRenderbuffer(),Xn(T.__webglDepthbuffer[de],I,!1);else{let ue=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,xe=T.__webglDepthbuffer[de];r.bindRenderbuffer(r.RENDERBUFFER,xe),r.framebufferRenderbuffer(r.FRAMEBUFFER,ue,r.RENDERBUFFER,xe)}}else if(I.texture.mipmaps.length>0?t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),Xn(T.__webglDepthbuffer,I,!1);else{let ue=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,xe=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,xe),r.framebufferRenderbuffer(r.FRAMEBUFFER,ue,r.RENDERBUFFER,xe)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function kn(I,T,q){let de=s.get(I);T!==void 0&&Bt(de.__webglFramebuffer,I,I.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),q!==void 0&&un(I)}function qn(I){let T=I.texture,q=s.get(I),de=s.get(T);I.addEventListener("dispose",W),V(I);let ue=I.textures,xe=I.isWebGLCubeRenderTarget===!0,Te=ue.length>1;if(Te||(de.__webglTexture===void 0&&(de.__webglTexture=r.createTexture()),de.__version=T.version,c.memory.textures++),xe){q.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(T.mipmaps.length>0){q.__webglFramebuffer[oe]=[];for(let ae=0;ae<T.mipmaps.length;ae++)q.__webglFramebuffer[oe][ae]=r.createFramebuffer()}else q.__webglFramebuffer[oe]=r.createFramebuffer()}else{if(T.mipmaps.length>0){q.__webglFramebuffer=[];for(let oe=0;oe<T.mipmaps.length;oe++)q.__webglFramebuffer[oe]=r.createFramebuffer()}else q.__webglFramebuffer=r.createFramebuffer();if(Te)for(let oe=0,ae=ue.length;oe<ae;oe++){let Me=s.get(ue[oe]);Me.__webglTexture===void 0&&(Me.__webglTexture=r.createTexture(),c.memory.textures++)}if(I.samples>0&&Ee(I)===!1){q.__webglMultisampledFramebuffer=r.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let oe=0;oe<ue.length;oe++){let ae=ue[oe];q.__webglColorRenderbuffer[oe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,q.__webglColorRenderbuffer[oe]);let Me=u.convert(ae.format,ae.colorSpace),U=u.convert(ae.type),le=N(ae.internalFormat,Me,U,ae.normalized,ae.colorSpace,I.isXRRenderTarget===!0),ie=ot(I);r.renderbufferStorageMultisample(r.RENDERBUFFER,ie,le,I.width,I.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.RENDERBUFFER,q.__webglColorRenderbuffer[oe])}r.bindRenderbuffer(r.RENDERBUFFER,null),I.depthBuffer&&(q.__webglDepthRenderbuffer=r.createRenderbuffer(),Xn(q.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(xe){t.bindTexture(r.TEXTURE_CUBE_MAP,de.__webglTexture),wt(r.TEXTURE_CUBE_MAP,T);for(let oe=0;oe<6;oe++)if(T.mipmaps.length>0)for(let ae=0;ae<T.mipmaps.length;ae++)Bt(q.__webglFramebuffer[oe][ae],I,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ae);else Bt(q.__webglFramebuffer[oe],I,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);D(T)?R(r.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}else if(Te){for(let oe=0,ae=ue.length;oe<ae;oe++){let Me=ue[oe],U=s.get(Me),le=r.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(le=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(le,U.__webglTexture),wt(le,Me),Bt(q.__webglFramebuffer,I,Me,r.COLOR_ATTACHMENT0+oe,le,0),D(Me)&&R(le)}t.unbindTexture()}else{let oe=r.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(oe=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(oe,de.__webglTexture),wt(oe,T),T.mipmaps.length>0)for(let ae=0;ae<T.mipmaps.length;ae++)Bt(q.__webglFramebuffer[ae],I,T,r.COLOR_ATTACHMENT0,oe,ae);else Bt(q.__webglFramebuffer,I,T,r.COLOR_ATTACHMENT0,oe,0);D(T)?R(oe):T.mipmaps.length>0&&r.texParameteri(oe,r.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}I.depthBuffer&&un(I)}function H(I){let T=I.textures;for(let q=0,de=T.length;q<de;q++){let ue=T[q];if(D(ue)&&ue.mipmapsAutoUpdate===!0){let xe=L(I),Te=s.get(ue).__webglTexture;t.bindTexture(xe,Te),R(xe),t.unbindTexture()}}}let Fn=[];function Ct(I){if(I.samples>0){if(Ee(I)===!1){let T=I.textures,q=I.width,de=I.height,ue=r.COLOR_BUFFER_BIT,xe=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Te=s.get(I),oe=T.length>1;if(oe)for(let Me=0;Me<T.length;Me++)t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),I.texture.mipmaps.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Me=0;Me<T.length;Me++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ue|=r.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ue|=r.STENCIL_BUFFER_BIT)),oe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Te.__webglColorRenderbuffer[Me]);let U=s.get(T[Me]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,U,0)}r.blitFramebuffer(0,0,q,de,0,0,q,de,ue,r.NEAREST),p===!0&&(Fn.length=0,Fn.push(r.COLOR_ATTACHMENT0+Me),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&Fn.push(xe),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Fn))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),oe)for(let Me=0;Me<T.length;Me++){t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.RENDERBUFFER,Te.__webglColorRenderbuffer[Me]);let U=s.get(T[Me]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.TEXTURE_2D,U,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&p){let T=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function ot(I){return Math.min(o.maxSamples,I.samples)}function Ee(I){let T=s.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function cn(I){let T=c.render.frame;g.get(I)!==T&&(g.set(I,T),I.update())}function Xe(I,T){let q=I.colorSpace,de=I.format,ue=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||q!==lo&&q!==Qr&&(gt.getTransfer(q)===kt?(de!==Ri||ue!==Kn)&&Ye("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):et("WebGLTextures: Unsupported texture color space:",q)),T}function je(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(m.width=I.naturalWidth||I.width,m.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(m.width=I.displayWidth,m.height=I.displayHeight):(m.width=I.width,m.height=I.height),m}this.allocateTextureUnit=Ve,this.resetTextureUnits=ce,this.getTextureUnits=he,this.setTextureUnits=Be,this.setTexture2D=Pe,this.setTexture2DArray=ke,this.setTexture3D=We,this.setTextureCube=Ne,this.rebindTextures=kn,this.setupRenderTarget=qn,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=un,this.setupFrameBufferTexture=Bt,this.useMultisampledRTT=Ee,this.dispose=Q}function NC(r,e){function t(s,o=Qr){let u,c=gt.getTransfer(o);if(s===Kn)return r.UNSIGNED_BYTE;if(s===yf)return r.UNSIGNED_SHORT_4_4_4_4;if(s===_f)return r.UNSIGNED_SHORT_5_5_5_1;if(s===im)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===rm)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===tm)return r.BYTE;if(s===nm)return r.SHORT;if(s===Aa)return r.UNSIGNED_SHORT;if(s===vf)return r.INT;if(s===sr)return r.UNSIGNED_INT;if(s===or)return r.FLOAT;if(s===ar)return r.HALF_FLOAT;if(s===sm)return r.ALPHA;if(s===om)return r.RGB;if(s===Ri)return r.RGBA;if(s===qr)return r.DEPTH_COMPONENT;if(s===Kr)return r.DEPTH_STENCIL;if(s===am)return r.RED;if(s===bf)return r.RED_INTEGER;if(s===Ds)return r.RG;if(s===Sf)return r.RG_INTEGER;if(s===xf)return r.RGBA_INTEGER;if(s===Ul||s===Ol||s===zl||s===Bl)if(c===kt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===Ul)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ol)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===zl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Bl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===Ul)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ol)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===zl)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Bl)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Mf||s===wf||s===Tf||s===Ef)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===Mf)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===wf)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Tf)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ef)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Af||s===Cf||s===Rf||s===Pf||s===If||s===Hl||s===Nf)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(s===Af||s===Cf)return c===kt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===Rf)return c===kt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(s===Pf)return u.COMPRESSED_R11_EAC;if(s===If)return u.COMPRESSED_SIGNED_R11_EAC;if(s===Hl)return u.COMPRESSED_RG11_EAC;if(s===Nf)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Lf||s===Df||s===kf||s===Ff||s===Uf||s===Of||s===zf||s===Bf||s===Hf||s===Vf||s===Gf||s===Wf||s===Xf||s===qf)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(s===Lf)return c===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Df)return c===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===kf)return c===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ff)return c===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Uf)return c===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Of)return c===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===zf)return c===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Bf)return c===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Hf)return c===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Vf)return c===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Gf)return c===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Wf)return c===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Xf)return c===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===qf)return c===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===$f||s===Yf||s===jf)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(s===$f)return c===kt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Yf)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===jf)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Zf||s===Jf||s===Vl||s===Kf)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(s===Zf)return u.COMPRESSED_RED_RGTC1_EXT;if(s===Jf)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Vl)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Kf)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===_o?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:t}}var LC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,DC=`
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

}`,Im=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let s=new Tl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,s=new Wi({vertexShader:LC,fragmentShader:DC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Gi(new fo(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Nm=class extends Mr{constructor(e,t){super();let s=this,o=null,u=1,c=null,d="local-floor",p=1,m=null,g=null,_=null,y=null,b=null,x=null,C=typeof XRWebGLBinding<"u",S=new Im,v={},A=t.getContextAttributes(),D=null,R=null,L=[],N=[],M=new vt,P=null,V=null,F=new ii;F.viewport=new Zt;let B=new ii;B.viewport=new Zt;let W=[F,B],Z=new df,O=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let Pe=L[re];return Pe===void 0&&(Pe=new ba,L[re]=Pe),Pe.getTargetRaySpace()},this.getControllerGrip=function(re){let Pe=L[re];return Pe===void 0&&(Pe=new ba,L[re]=Pe),Pe.getGripSpace()},this.getHand=function(re){let Pe=L[re];return Pe===void 0&&(Pe=new ba,L[re]=Pe),Pe.getHandSpace()};function se(re){let Pe=N.indexOf(re.inputSource);if(Pe===-1)return;let ke=L[Pe];ke!==void 0&&(ke.update(re.inputSource,re.frame,m||c),ke.dispatchEvent({type:re.type,data:re.inputSource}))}function ee(){o.removeEventListener("select",se),o.removeEventListener("selectstart",se),o.removeEventListener("selectend",se),o.removeEventListener("squeeze",se),o.removeEventListener("squeezestart",se),o.removeEventListener("squeezeend",se),o.removeEventListener("end",ee),o.removeEventListener("inputsourceschange",me);for(let re=0;re<L.length;re++){let Pe=N[re];Pe!==null&&(N[re]=null,L[re].disconnect(Pe))}O=null,Q=null,S.reset();for(let re in v)delete v[re];if(e.setRenderTarget(D),b=null,y=null,_=null,o=null,R=null,Ve.stop(),s.isPresenting=!1,e.setPixelRatio(P),e.setSize(M.width,M.height,!1),V!==null){let re=V.camera;re.fov=V.fov,re.zoom=V.zoom,re.updateProjectionMatrix(),V=null}s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){u=re,s.isPresenting===!0&&Ye("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){d=re,s.isPresenting===!0&&Ye("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||c},this.setReferenceSpace=function(re){m=re},this.getBaseLayer=function(){return y!==null?y:b},this.getBinding=function(){return _===null&&C&&(_=new XRWebGLBinding(o,t)),_},this.getFrame=function(){return x},this.getSession=function(){return o},this.setSession=async function(re){if(o=re,o!==null){if(D=e.getRenderTarget(),o.addEventListener("select",se),o.addEventListener("selectstart",se),o.addEventListener("selectend",se),o.addEventListener("squeeze",se),o.addEventListener("squeezestart",se),o.addEventListener("squeezeend",se),o.addEventListener("end",ee),o.addEventListener("inputsourceschange",me),A.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(M),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let ke=null,We=null,Ne=null;A.depth&&(Ne=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ke=A.stencil?Kr:qr,We=A.stencil?_o:sr);let Ke={colorFormat:t.RGBA8,depthFormat:Ne,scaleFactor:u};_=this.getBinding(),y=_.createProjectionLayer(Ke),o.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),R=new Ai(y.textureWidth,y.textureHeight,{format:Ri,type:Kn,depthTexture:new Zr(y.textureWidth,y.textureHeight,We,void 0,void 0,void 0,void 0,void 0,void 0,ke),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1,storeMultisampledDepthBuffer:y.ignoreDepthValues===!1,storeMultisampledStencilBuffer:y.ignoreDepthValues===!1})}else{let ke={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:u};b=new XRWebGLLayer(o,t,ke),o.updateRenderState({baseLayer:b}),e.setPixelRatio(1),e.setSize(b.framebufferWidth,b.framebufferHeight,!1),R=new Ai(b.framebufferWidth,b.framebufferHeight,{format:Ri,type:Kn,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1,storeMultisampledDepthBuffer:b.ignoreDepthValues===!1,storeMultisampledStencilBuffer:b.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(p),m=null,c=await o.requestReferenceSpace(d),Ve.setContext(o),Ve.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function me(re){for(let Pe=0;Pe<re.removed.length;Pe++){let ke=re.removed[Pe],We=N.indexOf(ke);We>=0&&(N[We]=null,L[We].disconnect(ke))}for(let Pe=0;Pe<re.added.length;Pe++){let ke=re.added[Pe],We=N.indexOf(ke);if(We===-1){for(let Ke=0;Ke<L.length;Ke++)if(Ke>=N.length){N.push(ke),We=Ke;break}else if(N[Ke]===null){N[Ke]=ke,We=Ke;break}if(We===-1)break}let Ne=L[We];Ne&&Ne.connect(ke)}}function ne(re,Pe){Pe===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(Pe.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(o===null)return;let Pe=re.near,ke=re.far;S.texture!==null&&(S.depthNear>0&&(Pe=S.depthNear),S.depthFar>0&&(ke=S.depthFar)),Z.near=B.near=F.near=Pe,Z.far=B.far=F.far=ke,(O!==Z.near||Q!==Z.far)&&(o.updateRenderState({depthNear:Z.near,depthFar:Z.far}),O=Z.near,Q=Z.far),Z.layers.mask=re.layers.mask|6,F.layers.mask=Z.layers.mask&-5,B.layers.mask=Z.layers.mask&-3;let We=re.parent,Ne=Z.cameras;ne(Z,We);for(let Ke=0;Ke<Ne.length;Ke++)ne(Ne[Ke],We);Z.projectionMatrix.copy(F.projectionMatrix),Z.projectionMatrixInverse.copy(F.projectionMatrixInverse),V===null&&re.isPerspectiveCamera&&(V={camera:re,fov:re.fov,zoom:re.zoom}),ce(re,Z,We)};function ce(re,Pe,ke){ke===null?re.matrix.copy(Pe.matrixWorld):(re.matrix.copy(ke.matrixWorld),re.matrix.invert(),re.matrix.multiply(Pe.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(Pe.projectionMatrix),re.projectionMatrixInverse.copy(Pe.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=Vc*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(y===null&&b===null))return p},this.setFoveation=function(re){p=re,y!==null&&(y.fixedFoveation=re),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=re)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(Z)},this.getCameraTexture=function(re){return v[re]};let he=null;function Be(re,Pe){if(g=Pe.getViewerPose(m||c),x=Pe,g!==null){let ke=g.views;b!==null&&(e.setRenderTargetFramebuffer(R,b.framebuffer),e.setRenderTarget(R));let We=!1;ke.length!==Z.cameras.length&&(Z.cameras.length=0,We=!0);for(let qe=0;qe<ke.length;qe++){let wt=ke[qe],yt=null;if(b!==null)yt=b.getViewport(wt);else{let an=_.getViewSubImage(y,wt);yt=an.viewport,qe===0&&(e.setRenderTargetTextures(R,an.colorTexture,an.depthStencilTexture),e.setRenderTarget(R))}let ft=W[qe];ft===void 0&&(ft=new ii,ft.layers.enable(qe),ft.viewport=new Zt,W[qe]=ft),ft.matrix.fromArray(wt.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(wt.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(yt.x,yt.y,yt.width,yt.height),qe===0&&(Z.matrix.copy(ft.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),We===!0&&Z.cameras.push(ft)}let Ne=o.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&C){_=s.getBinding();let qe=_.getDepthInformation(ke[0]);qe&&qe.isValid&&qe.texture&&S.init(qe,o.renderState)}if(Ne&&Ne.includes("camera-access")&&C){e.state.unbindTexture(),_=s.getBinding();for(let qe=0;qe<ke.length;qe++){let wt=ke[qe].camera;if(wt){let yt=v[wt];yt||(yt=new Tl,v[wt]=yt);let ft=_.getCameraImage(wt);yt.sourceTexture=ft}}}}for(let ke=0;ke<L.length;ke++){let We=N[ke],Ne=L[ke];We!==null&&Ne!==void 0&&Ne.update(We,Pe,m||c)}he&&he(re,Pe),Pe.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Pe}),x=null}let Ve=new j_;Ve.setAnimationLoop(Be),this.setAnimationLoop=function(re){he=re},this.dispose=function(){}}},kC=new $t,sb=new tt;sb.set(-1,0,0,0,1,0,0,0,1);function FC(r,e){function t(S,v){S.matrixAutoUpdate===!0&&S.updateMatrix(),v.value.copy(S.matrix)}function s(S,v){v.color.getRGB(S.fogColor.value,pm(r)),v.isFog?(S.fogNear.value=v.near,S.fogFar.value=v.far):v.isFogExp2&&(S.fogDensity.value=v.density)}function o(S,v,A,D,R){v.isNodeMaterial?v.uniformsNeedUpdate=!1:v.isMeshBasicMaterial?u(S,v):v.isMeshLambertMaterial?(u(S,v),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(u(S,v),_(S,v)):v.isMeshPhongMaterial?(u(S,v),g(S,v),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(u(S,v),y(S,v),v.isMeshPhysicalMaterial&&b(S,v,R)):v.isMeshMatcapMaterial?(u(S,v),x(S,v)):v.isMeshDepthMaterial?u(S,v):v.isMeshDistanceMaterial?(u(S,v),C(S,v)):v.isMeshNormalMaterial?u(S,v):v.isLineBasicMaterial?(c(S,v),v.isLineDashedMaterial&&d(S,v)):v.isPointsMaterial?p(S,v,A,D):v.isSpriteMaterial?m(S,v):v.isShadowMaterial?(S.color.value.copy(v.color),S.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function u(S,v){S.opacity.value=v.opacity,v.color&&S.diffuse.value.copy(v.color),v.emissive&&S.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(S.map.value=v.map,t(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,t(v.alphaMap,S.alphaMapTransform)),v.bumpMap&&(S.bumpMap.value=v.bumpMap,t(v.bumpMap,S.bumpMapTransform),S.bumpScale.value=v.bumpScale,v.side===oi&&(S.bumpScale.value*=-1)),v.normalMap&&(S.normalMap.value=v.normalMap,t(v.normalMap,S.normalMapTransform),S.normalScale.value.copy(v.normalScale),v.side===oi&&S.normalScale.value.negate()),v.displacementMap&&(S.displacementMap.value=v.displacementMap,t(v.displacementMap,S.displacementMapTransform),S.displacementScale.value=v.displacementScale,S.displacementBias.value=v.displacementBias),v.emissiveMap&&(S.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,S.emissiveMapTransform)),v.specularMap&&(S.specularMap.value=v.specularMap,t(v.specularMap,S.specularMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest);let A=e.get(v),D=A.envMap,R=A.envMapRotation;D&&(S.envMap.value=D,S.envMapRotation.value.setFromMatrix4(kC.makeRotationFromEuler(R)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(sb),S.reflectivity.value=v.reflectivity,S.ior.value=v.ior,S.refractionRatio.value=v.refractionRatio),v.lightMap&&(S.lightMap.value=v.lightMap,S.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,S.lightMapTransform)),v.aoMap&&(S.aoMap.value=v.aoMap,S.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,S.aoMapTransform))}function c(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,v.map&&(S.map.value=v.map,t(v.map,S.mapTransform))}function d(S,v){S.dashSize.value=v.dashSize,S.totalSize.value=v.dashSize+v.gapSize,S.scale.value=v.scale}function p(S,v,A,D){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.size.value=v.size*A,S.scale.value=D*.5,v.map&&(S.map.value=v.map,t(v.map,S.uvTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,t(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function m(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.rotation.value=v.rotation,v.map&&(S.map.value=v.map,t(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,t(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function g(S,v){S.specular.value.copy(v.specular),S.shininess.value=Math.max(v.shininess,1e-4)}function _(S,v){v.gradientMap&&(S.gradientMap.value=v.gradientMap)}function y(S,v){S.metalness.value=v.metalness,v.metalnessMap&&(S.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,S.metalnessMapTransform)),S.roughness.value=v.roughness,v.roughnessMap&&(S.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,S.roughnessMapTransform)),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)}function b(S,v,A){S.ior.value=v.ior,v.diffuseRoughness>0&&(S.diffuseRoughness.value=v.diffuseRoughness,v.diffuseRoughnessMap&&(S.diffuseRoughnessMap.value=v.diffuseRoughnessMap,t(v.diffuseRoughnessMap,S.diffuseRoughnessMapTransform))),v.sheen>0&&(S.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),S.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(S.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,S.sheenColorMapTransform)),v.sheenRoughnessMap&&(S.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,S.sheenRoughnessMapTransform))),v.clearcoat>0&&(S.clearcoat.value=v.clearcoat,S.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(S.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,S.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(S.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===oi&&S.clearcoatNormalScale.value.negate())),v.dispersion>0&&(S.dispersion.value=v.dispersion),v.retroreflectivity>0&&(S.retroreflectivity.value=v.retroreflectivity),v.iridescence>0&&(S.iridescence.value=v.iridescence,S.iridescenceIOR.value=v.iridescenceIOR,S.iridescenceThicknessMinimum.value=v.iridescenceThicknessMinimum,S.iridescenceThicknessMaximum.value=v.iridescenceThicknessMaximum,v.iridescenceMap&&(S.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,S.iridescenceMapTransform)),v.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),v.transmission>0&&(S.transmission.value=v.transmission,S.transmissionSamplerMap.value=A.texture,S.transmissionSamplerSize.value.set(A.width,A.height),v.transmissionMap&&(S.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,S.transmissionMapTransform)),S.thickness.value=v.thickness,v.thicknessMap&&(S.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=v.attenuationDistance,S.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(S.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(S.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=v.specularIntensity,S.specularColor.value.copy(v.specularColor),v.specularColorMap&&(S.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,S.specularColorMapTransform)),v.specularIntensityMap&&(S.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,S.specularIntensityMapTransform))}function x(S,v){v.matcap&&(S.matcap.value=v.matcap)}function C(S,v){let A=e.get(v).light;S.referencePosition.value.setFromMatrixPosition(A.matrixWorld),S.nearDistance.value=A.shadow.camera.near,S.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:o}}function UC(r,e,t,s){let o={},u={};function c(A,D){let R=D.program;s.uniformBlockBinding(A,R,o[A.id])}function d(A,D){let R=o[A.id];R===void 0&&(x(A),R=p(A),o[A.id]=R,A.addEventListener("dispose",S));let L=D.program;s.updateUBOMapping(A,L);let N=e.render.frame;u[A.id]!==N&&(m(A),u[A.id]=N)}function p(A){let D=r.createBuffer(),R=A.__size,L=A.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,R,L),r.bindBuffer(r.UNIFORM_BUFFER,null),D}function m(A){let D=o[A.id],R=A.uniforms,L=A.__cache;r.bindBuffer(r.UNIFORM_BUFFER,D);for(let N=0,M=R.length;N<M;N++){let P=R[N];if(Array.isArray(P))for(let V=0,F=P.length;V<F;V++)g(P[V],N,V,L);else g(P,N,0,L)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function g(A,D,R,L){if(y(A,D,R,L)===!0){let N=A.__offset,M=A.value;if(Array.isArray(M)){let P=0;for(let V=0;V<M.length;V++){let F=M[V],B=C(F,!0);_(F,A.__data,P),P+=B.storage/Float32Array.BYTES_PER_ELEMENT}}else _(M,A.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,N,A.__data)}}function _(A,D,R){typeof A=="number"||typeof A=="boolean"?D[R]=A:A.isMatrix3?(D[R]=A.elements[0],D[R+1]=A.elements[1],D[R+2]=A.elements[2],D[R+3]=0,D[R+4]=A.elements[3],D[R+5]=A.elements[4],D[R+6]=A.elements[5],D[R+7]=0,D[R+8]=A.elements[6],D[R+9]=A.elements[7],D[R+10]=A.elements[8],D[R+11]=0):ArrayBuffer.isView(A)?D.set(A.subarray(0,D.length-R),R):A.toArray(D,R)}function y(A,D,R,L){let N=A.value,M=D+"_"+R;if(Array.isArray(N)){L[M]===void 0&&(L[M]=[]);let P=L[M],V=!1;for(let F=0;F<N.length;F++)b(N[F],P,F)===!0&&(V=!0);return V}return b(N,L,M)}function b(A,D,R){if(D[R]===void 0)return typeof A=="number"||typeof A=="boolean"?D[R]=A:ArrayBuffer.isView(A)?D[R]=A.slice():D[R]=A.clone(),!0;{let L=D[R];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return D[R]=A,!0}else{if(ArrayBuffer.isView(A))return!0;if(L.equals(A)===!1)return L.copy(A),!0}}return!1}function x(A){let D=A.uniforms,R=0,L=16;for(let M=0,P=D.length;M<P;M++){let V=Array.isArray(D[M])?D[M]:[D[M]];for(let F=0,B=V.length;F<B;F++){let W=V[F],Z=Array.isArray(W.value)?W.value:[W.value],O=Array.isArray(D[M])||Array.isArray(W.value),Q=R;for(let ee=0,me=Z.length;ee<me;ee++){let ne=Z[ee],ce=C(ne,O),he=R%L,Be=he%ce.boundary,Ve=he+Be;R+=Be,Ve!==0&&L-Ve<ce.storage&&(R+=L-Ve),ee===0&&(Q=R),R+=ce.storage}let se=W.type==="int"?Int32Array:W.type==="uint"?Uint32Array:Float32Array;W.__data=new se((R-Q)/Float32Array.BYTES_PER_ELEMENT),W.__offset=Q}}let N=R%L;return N>0&&(R+=L-N),A.__size=R,A.__cache={},this}function C(A,D){let R={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(R.boundary=4,R.storage=4):A.isVector2?(R.boundary=8,R.storage=8):A.isVector3||A.isColor?(R.boundary=16,R.storage=12):A.isVector4?(R.boundary=16,R.storage=16):A.isMatrix3?(R.boundary=16,R.storage=48):A.isMatrix4?(R.boundary=16,R.storage=64):A.isTexture?Ye("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(A)?(R.boundary=16,R.storage=A.byteLength):Ye("WebGLRenderer: Unsupported uniform value type.",A),D===!0&&(R.boundary=16,R.storage=Math.ceil(R.storage/16)*16),R}function S(A){let D=A.target;D.removeEventListener("dispose",S),r.deleteBuffer(o[D.id]),delete o[D.id],delete u[D.id]}function v(){for(let A in o)r.deleteBuffer(o[A]);o={},u={}}return{bind:c,update:d,dispose:v}}var OC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Er=null;function zC(){return Er===null&&(Er=new qc(OC,16,16,Ds,ar),Er.name="DFG_LUT",Er.minFilter=ri,Er.magFilter=ri,Er.wrapS=Sr,Er.wrapT=Sr,Er.generateMipmaps=!1,Er.needsUpdate=!0),Er}var id=class{constructor(e={}){let{canvas:t=__(),context:s=null,depth:o=!0,stencil:u=!1,alpha:c=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:y=!1,outputBufferType:b=Kn}=e;this.isWebGLRenderer=!0;let x;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=s.getContextAttributes().alpha}else x=c;let C=b,S=new Set([xf,Sf,bf]),v=new Set([Kn,sr,Aa,_o,yf,_f]),A=new Uint32Array(4),D=new Int32Array(4),R={textures:[],min:[],max:[],resolution:[]},L=null,N=null,M=[],P=[],V=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let F=this,B=!1,W=null,Z=null,O=null,Q=null;this._outputColorSpace=Nn;let se=0,ee=0,me=null,ne=-1,ce=null,he=new Zt,Be=new Zt,Ve=null,re=new st(0),Pe=0,ke=t.width,We=t.height,Ne=1,Ke=null,zt=null,qe=new Zt(0,0,ke,We),wt=new Zt(0,0,ke,We),yt=!1,ft=new As,an=new $c,Gt=!1,ln=!1,Bt=new $t,Xn=new Y,Ht=new Zt,un={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},kn=!1;function qn(){return me===null?Ne:1}let H=s;function Fn(E,z){return t.getContext(E,z)}let Ct,ot,Ee,cn,Xe,je,I,T,q,de,ue,xe,Te,oe,ae,Me,U,le,ie,we,ye,be,He;try{let E={alpha:!0,depth:o,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ge,!1),t.addEventListener("webglcontextrestored",it,!1),t.addEventListener("webglcontextcreationerror",Ae,!1),H===null){let z="webgl2";if(H=Fn(z,E),H===null)throw Fn(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}rt()}catch(E){throw t.removeEventListener("webglcontextlost",Ge,!1),t.removeEventListener("webglcontextrestored",it,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),et("WebGLRenderer: "+E.message),E}function rt(){Ct=new ZE(H),Ct.init(),ye=new NC(H,Ct),ot=new zE(H,Ct,e,ye),Ee=new PC(H,Ct),ot.reversedDepthBuffer&&y&&Ee.buffers.depth.setReversed(!0),Z=H.createFramebuffer(),O=H.createFramebuffer(),Q=H.createFramebuffer(),cn=new QE(H),Xe=new gC,je=new IC(H,Ct,Ee,Xe,ot,ye,cn),I=new jE(F),T=new tw(H),be=new UE(H,T),q=new JE(H,T,cn,be),de=new tA(H,q,T,be,cn),le=new eA(H,ot,je),ae=new BE(Xe),ue=new mC(F,I,Ct,ot,be,ae),xe=new FC(F,Xe),Te=new yC,oe=new wC(Ct),U=new FE(F,I,Ee,de,x,p),Me=new RC(F,de,ot),He=new UC(H,cn,ot,Ee),ie=new OE(H,Ct,cn),we=new KE(H,Ct,cn),cn.programs=ue.programs,F.capabilities=ot,F.extensions=Ct,F.properties=Xe,F.renderLists=Te,F.shadowMap=Me,F.state=Ee,F.info=cn}C!==Kn&&(V=new iA(C,t.width,t.height,d,o,u));let pe=new Nm(F,H);this.xr=pe,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let E=Ct.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Ct.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Ne},this.setPixelRatio=function(E){E!==void 0&&(Ne=E,this.setSize(ke,We,!1))},this.getSize=function(E){return E.set(ke,We)},this.setSize=function(E,z,J=!0){if(pe.isPresenting){Ye("WebGLRenderer: Can't change size while VR device is presenting.");return}ke=E,We=z,t.width=Math.floor(E*Ne),t.height=Math.floor(z*Ne),J===!0&&(t.style.width=E+"px",t.style.height=z+"px"),V!==null&&V.setSize(t.width,t.height),this.setViewport(0,0,E,z)},this.getDrawingBufferSize=function(E){return E.set(ke*Ne,We*Ne).floor()},this.setDrawingBufferSize=function(E,z,J){ke=E,We=z,Ne=J,t.width=Math.floor(E*J),t.height=Math.floor(z*J),this.setViewport(0,0,E,z)},this.setEffects=function(E){if(C===Kn){et("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let z=0;z<E.length;z++)if(E[z].isOutputPass===!0){Ye("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}V.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(he)},this.getViewport=function(E){return E.copy(qe)},this.setViewport=function(E,z,J,X){E.isVector4?qe.set(E.x,E.y,E.z,E.w):qe.set(E,z,J,X),Ee.viewport(he.copy(qe).multiplyScalar(qn()).round())},this.getScissor=function(E){return E.copy(wt)},this.setScissor=function(E,z,J,X){E.isVector4?wt.set(E.x,E.y,E.z,E.w):wt.set(E,z,J,X),Ee.scissor(Be.copy(wt).multiplyScalar(qn()).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(E){Ee.setScissorTest(yt=E)},this.setOpaqueSort=function(E){Ke=E},this.setTransparentSort=function(E){zt=E},this.getClearColor=function(E){return E.copy(U.getClearColor())},this.setClearColor=function(){U.setClearColor(...arguments)},this.getClearAlpha=function(){return U.getClearAlpha()},this.setClearAlpha=function(){U.setClearAlpha(...arguments)},this.clear=function(E=!0,z=!0,J=!0){let X=0;if(E){let $=!1;if(me!==null){let _e=me.texture.format;$=S.has(_e)}if($){let _e=me.texture.type,Re=v.has(_e),Se=U.getClearColor(),Ie=U.getClearAlpha(),ze=Se.r,Fe=Se.g,lt=Se.b;Re?(A[0]=ze,A[1]=Fe,A[2]=lt,A[3]=Ie,H.clearBufferuiv(H.COLOR,0,A)):(D[0]=ze,D[1]=Fe,D[2]=lt,D[3]=Ie,H.clearBufferiv(H.COLOR,0,D))}else X|=H.COLOR_BUFFER_BIT}z&&(X|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(X|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&H.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),W=E},this.dispose=function(){t.removeEventListener("webglcontextlost",Ge,!1),t.removeEventListener("webglcontextrestored",it,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),U.dispose(),Te.dispose(),oe.dispose(),je.dispose(),Xe.dispose(),I.dispose(),de.dispose(),q.dispose(),be.dispose(),He.dispose(),ue.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",zs),pe.removeEventListener("sessionend",Bs),$i.stop()};function Ge(E){E.preventDefault(),dm("WebGLRenderer: Context Lost."),B=!0}function it(){dm("WebGLRenderer: Context Restored."),B=!1;let E=cn.autoReset,z=Me.enabled,J=Me.autoUpdate,X=Me.needsUpdate,$=Me.type;rt(),cn.autoReset=E,Me.enabled=z,Me.autoUpdate=J,Me.needsUpdate=X,Me.type=$}function Ae(E){et("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Rt(E){let z=E.target;z.removeEventListener("dispose",Rt),hn(z)}function hn(E){mi(E),Xe.remove(E)}function mi(E){let z=Xe.get(E).programs;z!==void 0&&(z.forEach(function(J){ue.releaseProgram(J)}),E.isShaderMaterial&&ue.releaseShaderCache(E))}this.renderBufferDirect=function(E,z,J,X,$,_e){z===null&&(z=un);let Re=$.isMesh&&$.matrixWorld.determinantAffine()<0,Se=Gs(E,z,J,X,$);Ee.setMaterial(X,Re);let Ie=J.index,ze=1;if(X.wireframe===!0){if(Ie=q.getWireframeAttribute(J),Ie===void 0)return;ze=2}let Fe=J.drawRange,lt=J.attributes.position,Ue=Fe.start*ze,dt=(Fe.start+Fe.count)*ze;_e!==null&&(Ue=Math.max(Ue,_e.start*ze),dt=Math.min(dt,(_e.start+_e.count)*ze)),Ie!==null?(Ue=Math.max(Ue,0),dt=Math.min(dt,Ie.count)):lt!=null&&(Ue=Math.max(Ue,0),dt=Math.min(dt,lt.count));let Qt=dt-Ue;if(Qt<0||Qt===1/0)return;be.setup($,X,Se,J,Ie);let Ut,Nt=ie;if(Ie!==null&&(Ut=T.get(Ie),Nt=we,Nt.setIndex(Ut)),$.isMesh)X.wireframe===!0?(Ee.setLineWidth(X.wireframeLinewidth*qn()),Nt.setMode(H.LINES)):Nt.setMode(H.TRIANGLES);else if($.isLine){let vn=X.linewidth;vn===void 0&&(vn=1),Ee.setLineWidth(vn*qn()),$.isLineSegments?Nt.setMode(H.LINES):$.isLineLoop?Nt.setMode(H.LINE_LOOP):Nt.setMode(H.LINE_STRIP)}else $.isPoints?Nt.setMode(H.POINTS):$.isSprite&&Nt.setMode(H.TRIANGLES);if($.isBatchedMesh)if(Ct.get("WEBGL_multi_draw"))Nt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let vn=$._multiDrawStarts,Oe=$._multiDrawCounts,Lt=$._multiDrawCount,$e=Ie?T.get(Ie).bytesPerElement:1,Ii=Xe.get(X).currentProgram.getUniforms();for(let fn=0;fn<Lt;fn++)Ii.setValue(H,"_gl_DrawID",fn),Nt.render(vn[fn]/$e,Oe[fn])}else if($.isInstancedMesh)Nt.renderInstances(Ue,Qt,$.count);else if(J.isInstancedBufferGeometry){let vn=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Oe=Math.min(J.instanceCount,vn);Nt.renderInstances(Ue,Qt,Oe)}else Nt.render(Ue,Qt)};function qi(E,z,J,X){W!==null&&E.isNodeMaterial&&W.setObject(X,E),Gt===!0&&ae.setState(E,J,!1),E.transparent===!0&&E.side===Tr&&E.forceSinglePass===!1?(E.side=oi,E.needsUpdate=!0,li(E,z,X),E.side=Ls,E.needsUpdate=!0,li(E,z,X),E.side=Tr):li(E,z,X)}this.compile=function(E,z,J=null){J===null&&(J=E),W!==null&&W.renderStart(E,z,J),N=oe.get(J),N.init(z),P.push(N),J.traverseVisible(function($){$.isLight&&$.layers.test(z.layers)&&(N.pushLight($),$.castShadow&&N.pushShadow($))}),E!==J&&E.traverseVisible(function($){$.isLight&&$.layers.test(z.layers)&&(N.pushLight($),$.castShadow&&N.pushShadow($))}),N.setupLights(),W!==null&&W.updateLights(N.state.lightsArray),ln=this.localClippingEnabled,Gt=ae.init(this.clippingPlanes,ln),Gt===!0&&ae.setGlobalState(this.clippingPlanes,z),W!==null&&Me.render(N.state.shadowsArray,J,z);let X=new Set;return E.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let _e=$.material;if(_e)if(Array.isArray(_e))for(let Re=0;Re<_e.length;Re++){let Se=_e[Re];qi(Se,J,z,$),X.add(Se)}else qi(_e,J,z,$),X.add(_e)}),N=P.pop(),W!==null&&W.renderEnd(),X},this.compileAsync=function(E,z,J=null){let X=this.compile(E,z,J);return new Promise($=>{function _e(){if(X.forEach(function(Re){let Ie=Xe.get(Re).currentProgram;(Ie===void 0||Ie.isReady())&&X.delete(Re)}),X.size===0){$(E);return}setTimeout(_e,10)}Ct.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let ns=null;function ou(E){ns&&ns(E)}function zs(){$i.stop()}function Bs(){$i.start()}let $i=new j_;$i.setAnimationLoop(ou),typeof self<"u"&&$i.setContext(self),this.setAnimationLoop=function(E){ns=E,pe.setAnimationLoop(E),E===null?$i.stop():$i.start()},pe.addEventListener("sessionstart",zs),pe.addEventListener("sessionend",Bs),this.render=function(E,z){if(z!==void 0&&z.isCamera!==!0){et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;W!==null&&W.renderStart(E,z);let J=pe.enabled===!0&&pe.isPresenting===!0,X=V!==null&&(me===null||J)&&V.begin(F,me);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(V===null||V.isCompositing()===!1)&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(z),z=pe.getCamera()),E.isScene===!0&&E.onBeforeRender(F,E,z,me),N=oe.get(E,P.length),N.init(z),N.state.textureUnits=je.getTextureUnits(),P.push(N),Bt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),z.isArrayCamera?an.setFromArrayCamera(z):ft.setFromProjectionMatrix(Bt,Vi,z.reversedDepth),ln=this.localClippingEnabled,Gt=ae.init(this.clippingPlanes,ln),L=Te.get(E,M.length),L.init(),M.push(L),this.info.render.frame++,pe.enabled===!0&&pe.isPresenting===!0){let Re=F.xr.getDepthSensingMesh();Re!==null&&Yi(Re,z,-1/0,F.sortObjects)}Yi(E,z,0,F.sortObjects),L.finish(),W!==null&&W.updateLights(N.state.lightsArray),F.sortObjects===!0&&L.sort(Ke,zt),kn=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,kn&&U.addToRenderList(L,E),this.info.autoReset===!0&&this.info.reset(),Gt===!0&&ae.beginShadows();let $=N.state.shadowsArray;if(Me.render($,E,z),Gt===!0&&ae.endShadows(),(X&&V.hasRenderPass())===!1){let Re=L.opaque,Se=L.transmissive;if(N.setupLights(),z.isArrayCamera){let Ie=z.cameras;if(Se.length>0)for(let ze=0,Fe=Ie.length;ze<Fe;ze++){let lt=Ie[ze];Hs(Re,Se,E,lt)}kn&&U.render(E);for(let ze=0,Fe=Ie.length;ze<Fe;ze++){let lt=Ie[ze];ka(L,E,lt,lt.viewport)}}else Se.length>0&&Hs(Re,Se,E,z),kn&&U.render(E),ka(L,E,z)}me!==null&&ee===0&&(je.updateMultisampleRenderTarget(me),je.updateRenderTargetMipmap(me)),X&&V.end(F),E.isScene===!0&&E.onAfterRender(F,E,z),be.resetDefaultState(),ne=-1,ce=null,P.pop(),P.length>0?(N=P[P.length-1],je.setTextureUnits(N.state.textureUnits),Gt===!0&&ae.setGlobalState(F.clippingPlanes,N.state.camera)):N=null,M.pop(),M.length>0?L=M[M.length-1]:L=null,W!==null&&W.renderEnd()};function Yi(E,z,J,X){if(E.visible===!1)return;if(E.layers.test(z.layers)){if(E.isGroup)J=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(z);else if(E.isLight)N.pushLight(E),E.castShadow&&N.pushShadow(E);else if(E.isSprite){let Re=z.isArrayCamera?an:ft;if(!E.frustumCulled||E.intersectsFrustum(Re)){X&&Ht.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Bt);let Se=de.update(E),Ie=E.material;Ie.visible&&L.push(E,Se,Ie,J,Ht.z,null,z)}}else if(E.isMesh||E.isLine||E.isPoints){let Re=z.isArrayCamera?an:ft;if(!E.frustumCulled||E.intersectsFrustum(Re)){let Se=de.update(E),Ie=E.material;if(X&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ht.copy(E.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Ht.copy(Se.boundingSphere.center)),Ht.applyMatrix4(E.matrixWorld).applyMatrix4(Bt)),Array.isArray(Ie)){let ze=Se.groups;for(let Fe=0,lt=ze.length;Fe<lt;Fe++){let Ue=ze[Fe],dt=Ie[Ue.materialIndex];dt&&dt.visible&&L.push(E,Se,dt,J,Ht.z,Ue,z)}}else Ie.visible&&L.push(E,Se,Ie,J,Ht.z,null,z)}}}let _e=E.children;for(let Re=0,Se=_e.length;Re<Se;Re++)Yi(_e[Re],z,J,X)}function ka(E,z,J,X){let{opaque:$,transmissive:_e,transparent:Re}=E;N.setupLightsView(J),Gt===!0&&ae.setGlobalState(F.clippingPlanes,J),X&&Ee.viewport(he.copy(X)),$.length>0&&is($,z,J),_e.length>0&&is(_e,z,J),Re.length>0&&is(Re,z,J),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function Hs(E,z,J,X){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[X.id]===void 0){let Ue=Ct.has("EXT_color_buffer_half_float")||Ct.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[X.id]=new Ai(1,1,{generateMipmaps:!0,type:Ue?ar:Kn,minFilter:Jr,samples:Math.max(4,ot.samples),stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:gt.workingColorSpace})}let _e=N.state.transmissionRenderTarget[X.id],Re=X.viewport||he;_e.setSize(Re.z*F.transmissionResolutionScale,Re.w*F.transmissionResolutionScale);let Se=F.getRenderTarget(),Ie=F.getActiveCubeFace(),ze=F.getActiveMipmapLevel();F.setRenderTarget(_e),F.getClearColor(re),Pe=F.getClearAlpha(),Pe<1&&F.setClearColor(16777215,.5),F.clear(),kn&&U.render(J);let Fe=F.toneMapping;F.toneMapping=pi;let lt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),N.setupLightsView(X),Gt===!0&&ae.setGlobalState(F.clippingPlanes,X),is(E,J,X),je.updateMultisampleRenderTarget(_e),je.updateRenderTargetMipmap(_e),Ct.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let dt=0,Qt=z.length;dt<Qt;dt++){let Ut=z[dt],{object:Nt,geometry:vn,material:Oe,group:Lt}=Ut;if(Oe.side===Tr&&Nt.layers.test(X.layers)){let $e=Oe.side;Oe.side=oi,Oe.needsUpdate=!0,Mo(Nt,J,X,vn,Oe,Lt),Oe.side=$e,Oe.needsUpdate=!0,Ue=!0}}Ue===!0&&(je.updateMultisampleRenderTarget(_e),je.updateRenderTargetMipmap(_e))}F.setRenderTarget(Se,Ie,ze),F.setClearColor(re,Pe),lt!==void 0&&(X.viewport=lt),F.toneMapping=Fe}function is(E,z,J){let X=z.isScene===!0?z.overrideMaterial:null;for(let $=0,_e=E.length;$<_e;$++){let Re=E[$],{object:Se,geometry:Ie,group:ze}=Re,Fe=Re.material;Fe.allowOverride===!0&&X!==null&&(Fe=X),Se.layers.test(J.layers)&&Mo(Se,z,J,Ie,Fe,ze)}}function Mo(E,z,J,X,$,_e){W!==null&&$.isNodeMaterial&&W.setObject(E,$),E.onBeforeRender(F,z,J,X,$,_e),E.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),$.onBeforeRender(F,z,J,X,E,_e),$.transparent===!0&&$.side===Tr&&$.forceSinglePass===!1?($.side=oi,$.needsUpdate=!0,F.renderBufferDirect(J,z,X,$,E,_e),$.side=Ls,$.needsUpdate=!0,F.renderBufferDirect(J,z,X,$,E,_e),$.side=Tr):F.renderBufferDirect(J,z,X,$,E,_e),E.onAfterRender(F,z,J,X,$,_e)}function ji(E){let z=0;for(let J of E)J.texture!==null&&z++;return z}function li(E,z,J){z.isScene!==!0&&(z=un);let X=Xe.get(E),$=N.state.lights,_e=N.state.shadowsArray,Re=$.state.version,Se=ue.getParameters(E,$.state,_e,z,J,N.state.lightProbeGridArray),Ie=ue.getProgramCacheKey(Se),ze=X.programs;X.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?z.environment:null,X.fog=z.fog;let Fe=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;X.envMap=I.get(E.envMap||X.environment,Fe),X.envMapRotation=X.environment!==null&&E.envMap===null?z.environmentRotation:E.envMapRotation,ze===void 0&&(E.addEventListener("dispose",Rt),ze=new Map,X.programs=ze,X.programVariants=new Map);let lt=ze.get(Ie);if(lt!==void 0){if(X.currentProgram===lt&&X.lightsStateVersion===Re)return rs(E,Se),lt}else Se.uniforms=ue.getUniforms(E),W!==null&&E.isNodeMaterial&&W.build(E,J,Se),E.onBeforeCompile(Se,F),lt=ue.acquireProgram(Se,Ie),ze.set(Ie,lt),X.uniforms=Se.uniforms;let Ue=X.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ue.clippingPlanes=ae.uniform),rs(E,Se),X.needsLights=lu(E),X.lightsStateVersion=Re,X.needsLights&&(Ue.ambientLightColor.value=$.state.ambient,Ue.lightProbe.value=$.state.probe,Ue.sunLights.value=$.state.sun,Ue.sunLightShadows.value=$.state.sunShadow,Ue.directionalLights.value=$.state.directional,Ue.directionalLightShadows.value=$.state.directionalShadow,Ue.spotLights.value=$.state.spot,Ue.spotLightShadows.value=$.state.spotShadow,Ue.rectAreaLights.value=$.state.rectArea,Ue.ltc_1.value=$.state.rectAreaLTC1,Ue.ltc_2.value=$.state.rectAreaLTC2,Ue.pointLights.value=$.state.point,Ue.pointLightShadows.value=$.state.pointShadow,Ue.hemisphereLights.value=$.state.hemi,Ue.sunShadowMatrix.value=$.state.sunShadowMatrix,Ue.sunShadowCascade.value=$.state.sunShadowCascade,Ue.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ue.spotLightMatrix.value=$.state.spotLightMatrix,Ue.spotLightMap.value=$.state.spotLightMap,Ue.pointShadowMatrix.value=$.state.pointShadowMatrix),X.numLightProbeGrids=ji(N.state.lightProbeGridArray),X.currentProgram=lt,X.uniformsList=null,lt}function Vs(E,z,J,X,$){let _e=Xe.get(E),Re=_e.currentProgram.id+","+X+","+$,Se=_e.programVariants.get(Re);return Se===void 0?(Se=li(E,z,J),_e.programVariants.set(Re,Se)):(_e.currentProgram=Se,_e.uniformsList=null,_e.outputColorSpace=X,_e.toneMapping=$),Se}function wo(E){if(E.uniformsList===null){let z=E.currentProgram.getUniforms();E.uniformsList=Ca.seqWithValue(z.seq,E.uniforms)}return E.uniformsList}function rs(E,z){let J=Xe.get(E);J.outputColorSpace=z.outputColorSpace,J.batching=z.batching,J.batchingColor=z.batchingColor,J.instancing=z.instancing,J.instancingColor=z.instancingColor,J.instancingMorph=z.instancingMorph,J.skinning=z.skinning,J.morphTargets=z.morphTargets,J.morphNormals=z.morphNormals,J.morphColors=z.morphColors,J.morphTargetsCount=z.morphTargetsCount,J.numClippingPlanes=z.numClippingPlanes,J.numIntersection=z.numClipIntersection,J.vertexAlphas=z.vertexAlphas,J.vertexTangents=z.vertexTangents,J.toneMapping=z.toneMapping}function Gs(E,z,J,X,$){z.isScene!==!0&&(z=un),je.resetTextureUnits();let _e=z.fog,Re=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?z.environment:null,Se=me===null?F.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:gt.workingColorSpace,Ie=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,ze=I.get(X.envMap||Re,Ie),Fe=X.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,lt=!!J.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ue=!!J.morphAttributes.position,dt=!!J.morphAttributes.normal,Qt=!!J.morphAttributes.color,Ut=pi;X.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(Ut=F.toneMapping);let Nt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,vn=Nt!==void 0?Nt.length:0,Oe=Xe.get(X),Lt=N.state.lights;if(Gt===!0&&(ln===!0||E!==ce)){let Wt=E===ce&&X.id===ne;ae.setState(X,E,Wt)}let $e=!1,Ii=!1;X.version===Oe.__version?Oe.needsLights&&Oe.lightsStateVersion!==Lt.state.version||$.isBatchedMesh&&Oe.batching===!1||!$.isBatchedMesh&&Oe.batching===!0||$.isBatchedMesh&&Oe.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&Oe.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&Oe.instancing===!1||!$.isInstancedMesh&&Oe.instancing===!0||$.isSkinnedMesh&&Oe.skinning===!1||!$.isSkinnedMesh&&Oe.skinning===!0||$.isInstancedMesh&&Oe.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Oe.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Oe.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Oe.instancingMorph===!1&&$.morphTexture!==null||Oe.envMap!==ze||X.fog===!0&&Oe.fog!==_e||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==ae.numPlanes||Oe.numIntersection!==ae.numIntersection)||Oe.vertexAlphas!==Fe||Oe.vertexTangents!==lt||Oe.morphTargets!==Ue||Oe.morphNormals!==dt||Oe.morphColors!==Qt||Oe.morphTargetsCount!==vn||Oe.numLightProbeGrids!==ji(N.state.lightProbeGridArray)?$e=!0:(Oe.outputColorSpace!==Se||Oe.toneMapping!==Ut)&&(Ii=!0):($e=!0,Oe.__version=X.version);let fn=Oe.currentProgram;($e===!0||Ii===!0)&&(fn=Ii===!0?Vs(X,z,$,Se,Ut):li(X,z,$),W&&X.isNodeMaterial&&W.onUpdateProgram(X,fn,Oe));let Rr=!1,Ni=!1,Un=!1,pt=fn.getUniforms(),pn=Oe.uniforms;if(Ee.useProgram(fn.program)&&(Rr=!0,Ni=!0,Un=!0),X.id!==ne&&(ne=X.id,Ni=!0),Rr||ce!==E){Ee.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),pt.setValue(H,"projectionMatrix",E.projectionMatrix),pt.setValue(H,"viewMatrix",E.matrixWorldInverse);let mn=pt.map.cameraPosition;mn!==void 0&&mn.setValue(H,Xn.setFromMatrixPosition(E.matrixWorld)),ot.logarithmicDepthBuffer&&pt.setValue(H,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&pt.setValue(H,"isOrthographic",E.isOrthographicCamera===!0),ce!==E&&(ce=E,Ni=!0,Un=!0)}if(Oe.needsLights&&(Lt.state.sunShadowMap.length>0&&pt.setValue(H,"sunShadowMap",Lt.state.sunShadowMap,je),Lt.state.directionalShadowMap.length>0&&pt.setValue(H,"directionalShadowMap",Lt.state.directionalShadowMap,je),Lt.state.spotShadowMap.length>0&&pt.setValue(H,"spotShadowMap",Lt.state.spotShadowMap,je),Lt.state.pointShadowMap.length>0&&pt.setValue(H,"pointShadowMap",Lt.state.pointShadowMap,je)),$.isSkinnedMesh){pt.setOptional(H,$,"bindMatrix"),pt.setOptional(H,$,"bindMatrixInverse");let Wt=$.skeleton;Wt&&(Wt.boneTexture===null&&Wt.computeBoneTexture(),pt.setValue(H,"boneTexture",Wt.boneTexture,je))}$.isBatchedMesh&&(pt.setOptional(H,$,"batchingTexture"),pt.setValue(H,"batchingTexture",$._matricesTexture,je),pt.setOptional(H,$,"batchingIdTexture"),pt.setValue(H,"batchingIdTexture",$._indirectTexture,je),pt.setOptional(H,$,"batchingColorTexture"),$._colorsTexture!==null&&pt.setValue(H,"batchingColorTexture",$._colorsTexture,je));let ti=J.morphAttributes;if((ti.position!==void 0||ti.normal!==void 0||ti.color!==void 0)&&le.update($,J,fn),(Ni||Oe.receiveShadow!==$.receiveShadow)&&(Oe.receiveShadow=$.receiveShadow,pt.setValue(H,"receiveShadow",$.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&z.environment!==null&&(pn.envMapIntensity.value=z.environmentIntensity),pn.dfgLUT!==void 0&&(pn.dfgLUT.value=zC()),Ni){if(pt.setValue(H,"toneMappingExposure",F.toneMappingExposure),Oe.needsLights&&au(pn,Un),_e&&X.fog===!0&&xe.refreshFogUniforms(pn,_e),xe.refreshMaterialUniforms(pn,X,Ne,We,N.state.transmissionRenderTarget[E.id]),Oe.needsLights&&Oe.numLightProbeGrids>0){let Wt=R,mn=0;for(let Li of N.state.lightProbeGridArray)Li.texture!==null&&(Wt.textures[mn]=Li.texture,Wt.min[mn]=Li.boundingBox.min,Wt.max[mn]=Li.boundingBox.max,Wt.resolution[mn]=Li.resolution,mn++);for(let Li in Wt)Wt[Li].length=mn;pn.probesSH.value=Wt.textures,pn.probesMin.value=Wt.min,pn.probesMax.value=Wt.max,pn.probesResolution.value=Wt.resolution}Ca.upload(H,wo(Oe),pn,je)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Ca.upload(H,wo(Oe),pn,je),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&pt.setValue(H,"center",$.center),pt.setValue(H,"modelViewMatrix",$.modelViewMatrix),pt.setValue(H,"normalMatrix",$.normalMatrix),pt.setValue(H,"modelMatrix",$.matrixWorld),X.uniformsGroups!==void 0){let Wt=X.uniformsGroups;for(let mn=0,Li=Wt.length;mn<Li;mn++){let Ua=Wt[mn];He.update(Ua,fn),He.bind(Ua,fn)}}return fn}function au(E,z){E.ambientLightColor.needsUpdate=z,E.lightProbe.needsUpdate=z,E.sunLights.needsUpdate=z,E.sunLightShadows.needsUpdate=z,E.directionalLights.needsUpdate=z,E.directionalLightShadows.needsUpdate=z,E.pointLights.needsUpdate=z,E.pointLightShadows.needsUpdate=z,E.spotLights.needsUpdate=z,E.spotLightShadows.needsUpdate=z,E.rectAreaLights.needsUpdate=z,E.hemisphereLights.needsUpdate=z}function lu(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return se},this.getActiveMipmapLevel=function(){return ee},this.getRenderTarget=function(){return me},this.setRenderTargetTextures=function(E,z,J){let X=Xe.get(E);X.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),Xe.get(E.texture).__webglTexture=z,Xe.get(E.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:J,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,z){let J=Xe.get(E);J.__webglFramebuffer=z,J.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(E,z=0,J=0){me=E,se=z,ee=J;let X=null,$=!1,_e=!1;if(E){let Se=Xe.get(E);if(Se.__useDefaultFramebuffer!==void 0){Ee.bindFramebuffer(H.FRAMEBUFFER,Se.__webglFramebuffer),he.copy(E.viewport),Be.copy(E.scissor),Ve=E.scissorTest,Ee.viewport(he),Ee.scissor(Be),Ee.setScissorTest(Ve),ne=-1;return}else if(Se.__webglFramebuffer===void 0)je.setupRenderTarget(E);else if(Se.__hasExternalTextures)je.rebindTextures(E,Xe.get(E.texture).__webglTexture,Xe.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Fe=E.depthTexture;if(Se.__boundDepthTexture!==Fe){if(Fe!==null&&Xe.has(Fe)&&(E.width!==Fe.image.width||E.height!==Fe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");je.setupDepthRenderbuffer(E)}}let Ie=E.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(_e=!0);let ze=Xe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(ze[z])?X=ze[z][J]:X=ze[z],$=!0):E.samples>0&&je.useMultisampledRTT(E)===!1?X=Xe.get(E).__webglMultisampledFramebuffer:Array.isArray(ze)?X=ze[J]:X=ze,he.copy(E.viewport),Be.copy(E.scissor),Ve=E.scissorTest}else he.copy(qe).multiplyScalar(Ne).floor(),Be.copy(wt).multiplyScalar(Ne).floor(),Ve=yt;if(J!==0&&(X=Z),Ee.bindFramebuffer(H.FRAMEBUFFER,X)&&Ee.drawBuffers(E,X),Ee.viewport(he),Ee.scissor(Be),Ee.setScissorTest(Ve),$){let Se=Xe.get(E.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+z,Se.__webglTexture,J)}else if(_e){let Se=z;for(let Ie=0;Ie<E.textures.length;Ie++){let ze=Xe.get(E.textures[Ie]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Ie,ze.__webglTexture,J,Se)}}else if(E!==null&&J!==0){let Se=Xe.get(E.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Se.__webglTexture,J)}ne=-1};function Fa(E){let z=Xe.get(E);return(z.__readFormat!==E.format||z.__readType!==E.type)&&(z.__readFormat=E.format,z.__readType=E.type,z.__formatReadable=ot.textureFormatReadable(E.format),z.__typeReadable=ot.textureTypeReadable(E.type)),z}this.readRenderTargetPixels=function(E,z,J,X,$,_e,Re,Se=0){if(!(E&&E.isWebGLRenderTarget)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=Xe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Re!==void 0&&(Ie=Ie[Re],Array.isArray(Ie)&&(Ie=Ie[0])),Ie){Ee.bindFramebuffer(H.FRAMEBUFFER,Ie);try{let ze=E.textures[Se],Fe=ze.format,lt=ze.type;E.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Se);let Ue=Fa(ze);if(Ue.__formatReadable===!1){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ue.__typeReadable===!1){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=E.width-X&&J>=0&&J<=E.height-$&&H.readPixels(z,J,X,$,ye.convert(Fe),ye.convert(lt),_e)}finally{let ze=me!==null?Xe.get(me).__webglFramebuffer:null;Ee.bindFramebuffer(H.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(E,z,J,X,$,_e,Re,Se=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=Xe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Re!==void 0&&(Ie=Ie[Re],Array.isArray(Ie)&&(Ie=Ie[0])),Ie)if(z>=0&&z<=E.width-X&&J>=0&&J<=E.height-$){Ee.bindFramebuffer(H.FRAMEBUFFER,Ie);let ze=E.textures[Se],Fe=ze.format,lt=ze.type;E.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Se);let Ue=Fa(ze);if(Ue.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ue.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let dt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,dt),H.bufferData(H.PIXEL_PACK_BUFFER,_e.byteLength,H.STREAM_READ),H.readPixels(z,J,X,$,ye.convert(Fe),ye.convert(lt),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let Qt=me!==null?Xe.get(me).__webglFramebuffer:null;Ee.bindFramebuffer(H.FRAMEBUFFER,Qt);let Ut=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await S_(H,Ut,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,dt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,_e),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(dt),H.deleteSync(Ut),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,z=null,J=0){let X=Math.pow(2,-J),$=Math.floor(E.image.width*X),_e=Math.floor(E.image.height*X),Re=z!==null?z.x:0,Se=z!==null?z.y:0;je.setTexture2D(E,0),H.copyTexSubImage2D(H.TEXTURE_2D,J,0,0,Re,Se,$,_e),Ee.unbindTexture()},this.copyTextureToTexture=function(E,z,J=null,X=null,$=0,_e=0){let Re,Se,Ie,ze,Fe,lt,Ue,dt,Qt,Ut=E.isCompressedTexture?E.mipmaps[_e]:E.image;if(J!==null)Re=J.max.x-J.min.x,Se=J.max.y-J.min.y,Ie=J.isBox3?J.max.z-J.min.z:1,ze=J.min.x,Fe=J.min.y,lt=J.isBox3?J.min.z:0;else{let pt=Math.pow(2,-$);Re=Math.floor(Ut.width*pt),Se=Math.floor(Ut.height*pt),E.isDataArrayTexture?Ie=Ut.depth:E.isData3DTexture?Ie=Math.floor(Ut.depth*pt):Ie=1,ze=0,Fe=0,lt=0}X!==null?(Ue=X.x,dt=X.y,Qt=X.z):(Ue=0,dt=0,Qt=0);let Nt=ye.convert(z.format),vn=ye.convert(z.type),Oe;z.isData3DTexture?(je.setTexture3D(z,0),Oe=H.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(je.setTexture2DArray(z,0),Oe=H.TEXTURE_2D_ARRAY):(je.setTexture2D(z,0),Oe=H.TEXTURE_2D),Ee.activeTexture(H.TEXTURE0),Ee.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,z.flipY),Ee.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),Ee.pixelStorei(H.UNPACK_ALIGNMENT,z.unpackAlignment);let Lt=Ee.getParameter(H.UNPACK_ROW_LENGTH),$e=Ee.getParameter(H.UNPACK_IMAGE_HEIGHT),Ii=Ee.getParameter(H.UNPACK_SKIP_PIXELS),fn=Ee.getParameter(H.UNPACK_SKIP_ROWS),Rr=Ee.getParameter(H.UNPACK_SKIP_IMAGES);Ee.pixelStorei(H.UNPACK_ROW_LENGTH,Ut.width),Ee.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ut.height),Ee.pixelStorei(H.UNPACK_SKIP_PIXELS,ze),Ee.pixelStorei(H.UNPACK_SKIP_ROWS,Fe),Ee.pixelStorei(H.UNPACK_SKIP_IMAGES,lt);let Ni=E.isDataArrayTexture||E.isData3DTexture,Un=z.isDataArrayTexture||z.isData3DTexture;if(E.isDepthTexture){let pt=Xe.get(E),pn=Xe.get(z),ti=Xe.get(pt.__renderTarget),Wt=Xe.get(pn.__renderTarget);Ee.bindFramebuffer(H.READ_FRAMEBUFFER,ti.__webglFramebuffer),Ee.bindFramebuffer(H.DRAW_FRAMEBUFFER,Wt.__webglFramebuffer);for(let mn=0;mn<Ie;mn++)Ni&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Xe.get(E).__webglTexture,$,lt+mn),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Xe.get(z).__webglTexture,_e,Qt+mn)),H.blitFramebuffer(ze,Fe,ze+Re,Fe+Se,Ue,dt,Ue+Re,dt+Se,H.DEPTH_BUFFER_BIT,H.NEAREST);Ee.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if($!==0||E.isRenderTargetTexture||Xe.has(E)){let pt=Xe.get(E),pn=Xe.get(z);Ee.bindFramebuffer(H.READ_FRAMEBUFFER,O),Ee.bindFramebuffer(H.DRAW_FRAMEBUFFER,Q);for(let ti=0;ti<Ie;ti++)Ni?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,pt.__webglTexture,$,lt+ti):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,pt.__webglTexture,$),Un?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,pn.__webglTexture,_e,Qt+ti):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,pn.__webglTexture,_e),$!==0?H.blitFramebuffer(ze,Fe,ze+Re,Fe+Se,Ue,dt,Ue+Re,dt+Se,H.COLOR_BUFFER_BIT,H.NEAREST):Un?H.copyTexSubImage3D(Oe,_e,Ue,dt,Qt+ti,ze,Fe,Re,Se):H.copyTexSubImage2D(Oe,_e,Ue,dt,ze,Fe,Re,Se);Ee.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Un?E.isDataTexture||E.isData3DTexture?H.texSubImage3D(Oe,_e,Ue,dt,Qt,Re,Se,Ie,Nt,vn,Ut.data):z.isCompressedArrayTexture?H.compressedTexSubImage3D(Oe,_e,Ue,dt,Qt,Re,Se,Ie,Nt,Ut.data):H.texSubImage3D(Oe,_e,Ue,dt,Qt,Re,Se,Ie,Nt,vn,Ut):E.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,_e,Ue,dt,Re,Se,Nt,vn,Ut.data):E.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,_e,Ue,dt,Ut.width,Ut.height,Nt,Ut.data):H.texSubImage2D(H.TEXTURE_2D,_e,Ue,dt,Re,Se,Nt,vn,Ut);Ee.pixelStorei(H.UNPACK_ROW_LENGTH,Lt),Ee.pixelStorei(H.UNPACK_IMAGE_HEIGHT,$e),Ee.pixelStorei(H.UNPACK_SKIP_PIXELS,Ii),Ee.pixelStorei(H.UNPACK_SKIP_ROWS,fn),Ee.pixelStorei(H.UNPACK_SKIP_IMAGES,Rr),_e===0&&z.generateMipmaps===!0&&z.mipmapsAutoUpdate===!0&&H.generateMipmap(Oe),Ee.unbindTexture()},this.initRenderTarget=function(E){Xe.get(E).__webglFramebuffer===void 0&&je.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?je.setTextureCube(E,0):E.isData3DTexture?je.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?je.setTexture2DArray(E,0):je.setTexture2D(E,0),Ee.unbindTexture()},this.resetState=function(){se=0,ee=0,me=null,Ee.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=gt._getDrawingBufferColorSpace(e),t.unpackColorSpace=gt._getUnpackColorSpace()}};var _d=Bi(Yl());var bb=Bi(bs(),1),Sb=Bi(gb(),1);var vb=r=>{let e,t=new Set,s=(m,g)=>{let _=typeof m=="function"?m(e):m;if(!Object.is(_,e)){let y=e;e=g??(typeof _!="object"||_===null)?_:Object.assign({},e,_),t.forEach(b=>b(e,y))}},o=()=>e,d={setState:s,getState:o,getInitialState:()=>p,subscribe:m=>(t.add(m),()=>t.delete(m))},p=e=r(s,o,d);return d},yb=(r=>r?vb(r):vb);var{useSyncExternalStoreWithSelector:oR}=Sb.default,aR=r=>r;function lR(r,e=aR,t){let s=oR(r.subscribe,r.getState,r.getInitialState,e,t);return bb.default.useDebugValue(s),s}var _b=(r,e)=>{let t=yb(r),s=(o,u=e)=>lR(t,o,u);return Object.assign(s,t),s},xb=((r,e)=>r?_b(r,e):_b);var uR=r=>typeof r=="object"&&typeof r.then=="function",So=[];function Mb(r,e,t=(s,o)=>s===o){if(r===e)return!0;if(!r||!e)return!1;let s=r.length;if(e.length!==s)return!1;for(let o=0;o<s;o++)if(!t(r[o],e[o]))return!1;return!0}function wb(r,e=null,t=!1,s={}){e===null&&(e=[r]);for(let u of So)if(Mb(e,u.keys,u.equal)){if(t)return;if(Object.prototype.hasOwnProperty.call(u,"error"))throw u.error;if(Object.prototype.hasOwnProperty.call(u,"response"))return s.lifespan&&s.lifespan>0&&(u.timeout&&clearTimeout(u.timeout),u.timeout=setTimeout(u.remove,s.lifespan)),u.response;if(!t)throw u.promise}let o={keys:e,equal:s.equal,remove:()=>{let u=So.indexOf(o);u!==-1&&So.splice(u,1)},promise:(uR(r)?r:r(...e)).then(u=>{o.response=u,s.lifespan&&s.lifespan>0&&(o.timeout=setTimeout(o.remove,s.lifespan))}).catch(u=>o.error=u)};if(So.push(o),!t)throw o.promise}var Tb=(r,e,t)=>wb(r,e,!1,t),Eb=(r,e,t)=>{wb(r,e,!0,t)};var Ab=r=>{if(r===void 0||r.length===0)So.splice(0,So.length);else{let e=So.find(t=>Mb(r,t.keys,t.equal));e&&e.remove()}};var Wn=Bi(Vm());var tg=((r,e)=>typeof window<"u"&&(((r=window.document)==null?void 0:r.createElement)||((e=window.navigator)==null?void 0:e.product)==="ReactNative"))()?Kt.useLayoutEffect:Kt.useEffect;function fR(r){let e=Kt.useRef(r);return tg(()=>{e.current=r},[r]),e}function ng(r){let e=r.root;for(;e.getState().previousRoot;)e=e.getState().previousRoot;return e}var Kb=r=>r&&r.isOrthographicCamera;var dR=r=>r!=null&&(typeof r=="string"||typeof r=="number"||r.isColor),zb=()=>{};function ig(r){var e;let t=typeof window<"u"?(e=window.devicePixelRatio)!=null?e:2:1;return Array.isArray(r)?Math.min(Math.max(r[0],t),r[1]):r}function hR(r){if(typeof window>"u"||typeof window.matchMedia!="function"||!window.devicePixelRatio)return()=>{};let e,t=()=>{try{var u,c;e=window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),typeof((u=e)==null?void 0:u.addEventListener)=="function"?e.addEventListener("change",o):(c=e)==null||c.addListener==null||c.addListener(o)}catch{e=void 0}},s=()=>{var u,c;typeof((u=e)==null?void 0:u.removeEventListener)=="function"?e.removeEventListener("change",o):(c=e)==null||c.removeListener==null||c.removeListener(o),e=void 0},o=()=>{s(),t(),r()};return t(),s}var gn={obj:r=>r===Object(r)&&!gn.arr(r)&&typeof r!="function",fun:r=>typeof r=="function",str:r=>typeof r=="string",num:r=>typeof r=="number",boo:r=>typeof r=="boolean",und:r=>r===void 0,nul:r=>r===null,arr:r=>Array.isArray(r),equ(r,e,{arrays:t="shallow",objects:s="reference",strict:o=!0}={}){if(typeof r!=typeof e||!!r!=!!e)return!1;if(gn.str(r)||gn.num(r)||gn.boo(r))return r===e;let u=gn.obj(r);if(u&&s==="reference")return r===e;let c=gn.arr(r);if(c&&t==="reference")return r===e;if((c||u)&&r===e)return!0;let d;for(d in r)if(!(d in e))return!1;if(u&&t==="shallow"&&s==="shallow"){for(d in o?e:r)if(!gn.equ(r[d],e[d],{strict:o,objects:"reference"}))return!1}else for(d in o?e:r)if(r[d]!==e[d])return!1;if(gn.und(d)){if(c&&r.length===0&&e.length===0||u&&Object.keys(r).length===0&&Object.keys(e).length===0)return!0;if(r!==e)return!1}return!0}};function Qb(r){let e={nodes:{},materials:{},meshes:{}};return r&&r.traverse(t=>{t.name&&(e.nodes[t.name]=t),t.material&&!e.materials[t.material.name]&&(e.materials[t.material.name]=t.material),t.isMesh&&!e.meshes[t.name]&&(e.meshes[t.name]=t)}),e}function eS(r){r.type!=="Scene"&&(r.dispose==null||r.dispose());for(let e in r){let t=r[e];t?.type!=="Scene"&&(t==null||t.dispose==null||t.dispose())}}var tS=["children","key","ref"];function jm(r){let e={};for(let t in r)tS.includes(t)||(e[t]=r[t]);return e}function hd(r,e,t,s){let o=r,u=o?.__r3f;return u||(u={root:e,type:t,parent:null,children:[],props:jm(s),object:o,eventCount:0,handlers:{},previousVisible:void 0,isHidden:!1},o&&(o.__r3f=u)),u}function eu(r,e){if(!e.includes("-"))return{root:r,key:e,target:r[e]};if(e in r)return{root:r,key:e,target:r[e]};let t=r,s=e.split("-");for(let o of s){if(typeof t!="object"||t===null){if(t!==void 0){let u=s.slice(s.indexOf(o)).join("-");return{root:t,key:u,target:void 0}}return{root:r,key:e,target:void 0}}e=o,r=t,t=t[e]}return{root:r,key:e,target:t}}var Bb=/-\d+$/;function pd(r,e){if(gn.str(e.props.attach)){if(Bb.test(e.props.attach)){let o=e.props.attach.replace(Bb,""),{root:u,key:c}=eu(r.object,o);Array.isArray(u[c])||(u[c]=[])}let{root:t,key:s}=eu(r.object,e.props.attach);e.previousAttach=t[s],t[s]=e.object}else gn.fun(e.props.attach)&&(e.previousAttach=e.props.attach(r.object,e.object))}function md(r,e){if(gn.str(e.props.attach)){let{root:t,key:s}=eu(r.object,e.props.attach),o=e.previousAttach;o===void 0?delete t[s]:t[s]=o}else e.previousAttach==null||e.previousAttach(r.object,e.object);delete e.previousAttach}var Zm=[...tS,"args","dispose","attach","object","onUpdate","dispose"],Hb=new Map;function pR(r){let e=Hb.get(r.constructor);try{e||(e=new r.constructor,Hb.set(r.constructor,e))}catch{}return e}function mR(r,e){let t={};for(let s in e)if(!Zm.includes(s)&&!gn.equ(e[s],r.props[s])){t[s]=e[s];for(let o in e)o.startsWith(`${s}-`)&&(t[o]=e[o])}for(let s in r.props){if(Zm.includes(s)||e.hasOwnProperty(s))continue;let{root:o,key:u}=eu(r.object,s);if(o.constructor&&o.constructor.length===0){let c=pR(o);gn.und(c)||(t[s]=c[u])}else t[s]=0}return t}var gR=["map","emissiveMap","sheenColorMap","specularColorMap","envMap"],vR=/^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/;function Fs(r,e){var t;let s=r.__r3f,o=s&&ng(s).getState(),u=s?.eventCount;for(let d in e){let p=e[d];if(Zm.includes(d))continue;if(s&&vR.test(d)){typeof p=="function"?s.handlers[d]=p:delete s.handlers[d],s.eventCount=Object.keys(s.handlers).length;continue}if(p===void 0)continue;if(d==="visible"&&s!=null&&s.isHidden&&s.previousVisible!==void 0){s.previousVisible=p;continue}let{root:m,key:g,target:_}=eu(r,d);if(_===void 0&&(typeof m!="object"||m===null))throw Error(`R3F: Cannot set "${d}". Ensure it is an object before setting "${g}".`);if(_ instanceof Yr&&p instanceof Yr)_.mask=p.mask;else if(_ instanceof st&&dR(p))_.set(p);else if(_!==null&&typeof _=="object"&&typeof _.set=="function"&&typeof _.copy=="function"&&p!=null&&p.constructor&&_.constructor===p.constructor)_.copy(p);else if(_!==null&&typeof _=="object"&&typeof _.set=="function"&&Array.isArray(p))typeof _.fromArray=="function"?_.fromArray(p):_.set(...p);else if(_!==null&&typeof _=="object"&&typeof _.set=="function"&&typeof p=="number")typeof _.setScalar=="function"?_.setScalar(p):_.set(p);else if(m instanceof Wi&&g==="uniforms"&&gn.obj(p)){gn.obj(m.uniforms)||(m.uniforms={});let y=m.uniforms,b=p;for(let x in b){let C=b[x],S=y[x];S?Object.assign(S,C):y[x]={...C}}}else{var c;m[g]=p,o&&!o.linear&&gR.includes(g)&&(c=m[g])!=null&&c.isTexture&&m[g].format===Ri&&m[g].type===Kn&&(m[g].colorSpace=Nn)}}if(s!=null&&s.parent&&o!=null&&o.internal&&(t=s.object)!=null&&t.isObject3D&&u!==s.eventCount){let d=s.object,p=o.internal.interaction.indexOf(d);p>-1&&o.internal.interaction.splice(p,1),s.eventCount&&d.raycast!==null&&o.internal.interaction.push(d)}return s&&s.props.attach===void 0&&(s.object.isBufferGeometry?s.props.attach="geometry":s.object.isMaterial&&(s.props.attach="material")),s&&nu(s),r}function nu(r){var e;if(!r.parent)return;r.props.onUpdate==null||r.props.onUpdate(r.object);let t=(e=r.root)==null||e.getState==null?void 0:e.getState();t&&t.internal.frames===0&&t.invalidate()}function yR(r,e){r.manual||(Kb(r)?(r.left=e.width/-2,r.right=e.width/2,r.top=e.height/2,r.bottom=e.height/-2):r.aspect=e.width/e.height,r.updateProjectionMatrix())}var ai=r=>r?.isObject3D;function _R(r){return(r.eventObject||r.object).uuid+"/"+r.index+r.instanceId}function bR(r,e,t,s){let o=t.get(e);o&&(t.delete(e),t.size===0&&(r.delete(s),o.target.releasePointerCapture(s)))}function SR(r,e,t){let{internal:s}=r.getState();for(let o=0;o<s.interaction.length;o++)s.interaction[o]===e&&(s.interaction[o]=t);for(let o=0;o<s.initialHits.length;o++)s.initialHits[o]===e&&(s.initialHits[o]=t);s.hovered.forEach((o,u)=>{if(o.eventObject===e||o.object===e){s.hovered.delete(u);let c={...o,eventObject:o.eventObject===e?t:o.eventObject,object:o.object===e?t:o.object};s.hovered.set(_R(c),c)}}),s.capturedMap.forEach(o=>{for(let[u,c]of Array.from(o)){let{intersection:d}=c;u!==e&&d.object!==e&&d.eventObject!==e||(u===e&&o.delete(u),o.set(u===e?t:u,{...c,intersection:{...d,object:d.object===e?t:d.object,eventObject:d.eventObject===e?t:d.eventObject}}))}})}function xR(r,e){let{internal:t}=r.getState();t.interaction=t.interaction.filter(s=>s!==e),t.initialHits=t.initialHits.filter(s=>s!==e),t.hovered.forEach((s,o)=>{(s.eventObject===e||s.object===e)&&t.hovered.delete(o)}),t.capturedMap.forEach((s,o)=>{bR(t.capturedMap,e,s,o)})}var rg=r=>typeof r?.then=="function",MR=r=>Object.assign(Promise.resolve(r),{status:"fulfilled",value:r}),wR=r=>{let e=Promise.reject(r);return e.catch(()=>{}),Object.assign(e,{status:"rejected",reason:r})},TR=()=>{let r,e,t=new Promise((s,o)=>{r=u=>{Object.assign(t,{status:"fulfilled",value:u}),s(u)},e=u=>{Object.assign(t,{status:"rejected",reason:u}),o(u)}});return t.status="pending",t.catch(()=>{}),{promise:t,resolve:r,reject:e}},sg=r=>!!(r!=null&&r.render);function ER(r,e){let t={canvas:r,powerPreference:"high-performance",antialias:!0,alpha:!0};return typeof e=="function"?e(t):sg(e)?e:new id({...t,...e})}function AR(r){if((r.hasInitialized==null?void 0:r.hasInitialized())===!1)return;let e=Ql(()=>{var t;return r.dispose?r.dispose():(t=r.renderLists)==null||t.dispose==null?void 0:t.dispose()});if(rg(e))return Promise.resolve(e).catch(t=>console.warn("[R3F] Error disposing renderer",t)).then(()=>Ql(()=>r.forceContextLoss==null?void 0:r.forceContextLoss()));Ql(()=>r.forceContextLoss==null?void 0:r.forceContextLoss())}function CR(r,e){if(r){if(e)return AR(r);Ql(()=>{var t;return(t=r.renderLists)==null||t.dispose==null?void 0:t.dispose()}),Ql(()=>r.forceContextLoss==null?void 0:r.forceContextLoss())}}function Ql(r){try{return r()}catch(e){console.warn("[R3F] Error while unmounting root; teardown may be incomplete:",e)}}var og=Kt.createContext(null),RR=(r,e)=>{let t=xb((d,p)=>{let m=new Y,g=new Y,_=new Y;function y(v=p().camera,A=g,D=p().size){let{width:R,height:L,top:N,left:M}=D,P=R/L;A.isVector3?_.copy(A):_.set(...A);let V=v.getWorldPosition(m).distanceTo(_);if(Kb(v))return{width:R/v.zoom,height:L/v.zoom,top:N,left:M,factor:1,distance:V,aspect:P};{let F=v.fov*Math.PI/180,B=2*Math.tan(F/2)*V,W=B*(R/L);return{width:W,height:B,top:N,left:M,factor:R/W,distance:V,aspect:P}}}let b,x=v=>d(A=>({performance:{...A.performance,current:v}})),C=new vt;return{set:d,get:p,gl:null,camera:null,raycaster:null,events:{priority:1,enabled:!0,connected:!1},scene:null,xr:null,invalidate:(v=1)=>r(p(),v),advance:(v,A)=>e(v,A,p()),legacy:!1,linear:!1,flat:!1,controls:null,clock:new Dl,pointer:C,mouse:C,frameloop:"always",onPointerMissed:void 0,performance:{current:1,min:.5,max:1,debounce:200,regress:()=>{let v=p();b&&clearTimeout(b),v.performance.current!==v.performance.min&&x(v.performance.min),b=setTimeout(()=>x(p().performance.max),v.performance.debounce)}},size:{width:0,height:0,top:0,left:0},viewport:{initialDpr:0,dpr:0,width:0,height:0,top:0,left:0,aspect:0,distance:0,factor:0,getCurrentViewport:y},setEvents:v=>d(A=>({...A,events:{...A.events,...v}})),setSize:(v,A,D=0,R=0)=>{let L=p().camera,N={width:v,height:A,top:D,left:R};d(M=>({size:N,viewport:{...M.viewport,...y(L,g,N)}}))},setDpr:v=>d(A=>{let D=ig(v);return{viewport:{...A.viewport,dpr:D,initialDpr:A.viewport.initialDpr||D}}}),setFrameloop:(v="always")=>{let A=p().clock;A.stop(),A.elapsedTime=0,v!=="never"&&(A.start(),A.elapsedTime=0),d(()=>({frameloop:v}))},previousRoot:void 0,internal:{interaction:[],hovered:new Map,subscribers:[],initialClick:[0,0],initialHits:[],capturedMap:new Map,lastEvent:Kt.createRef(),active:!1,frames:0,priority:0,subscribe:(v,A,D)=>{let R=p().internal;return R.priority=R.priority+(A>0?1:0),R.subscribers.push({ref:v,priority:A,store:D}),R.subscribers=R.subscribers.sort((L,N)=>L.priority-N.priority),()=>{let L=p().internal;L!=null&&L.subscribers&&(L.priority=L.priority-(A>0?1:0),L.subscribers=L.subscribers.filter(N=>N.ref!==v))}}}}}),s=t.getState(),o=s.size,u=s.viewport.dpr,c=s.camera;return t.subscribe(()=>{let{camera:d,size:p,viewport:m,gl:g,set:_}=t.getState();if(p.width!==o.width||p.height!==o.height||m.dpr!==u){o=p,u=m.dpr,yR(d,p),m.dpr>0&&g.setPixelRatio(m.dpr);let y=typeof HTMLCanvasElement<"u"&&g.domElement instanceof HTMLCanvasElement;g.setSize(p.width,p.height,y)}d!==c&&(c=d,_(y=>({viewport:{...y.viewport,...y.viewport.getCurrentViewport(d)}})))}),t.subscribe(d=>r(d)),t};function ag(){let r=Kt.useContext(og);if(!r)throw new Error("R3F: Hooks can only be used within the Canvas component!");return r}function iu(r=t=>t,e){return ag()(r,e)}function bd(r,e=0){let t=ag(),s=t.getState().internal.subscribe,o=fR(r);return tg(()=>s(o,e,t),[e,s,t]),null}var Vb=new WeakMap,PR=r=>{var e;return typeof r=="function"&&(r==null||(e=r.prototype)==null?void 0:e.constructor)===r};function nS(r,e){return function(t,...s){let o;return PR(t)?(o=Vb.get(t),o||(o=new t,Vb.set(t,o))):o=t,r&&r(o),Promise.all(s.map(u=>new Promise((c,d)=>o.load(u,p=>{ai(p?.scene)&&Object.assign(p,Qb(p.scene)),c(p)},e,p=>d(new Error(`Could not load ${u}: ${p?.message}`))))))}}function lg(r,e,t,s){let o=Array.isArray(e)?e:[e],u=Tb(nS(t,s),[r,...o],{equal:gn.equ});return Array.isArray(e)?u:u[0]}lg.preload=function(r,e,t){let s=Array.isArray(e)?e:[e];return Eb(nS(t),[r,...s])};lg.clear=function(r,e){let t=Array.isArray(e)?e:[e];return Ab([r,...t])};var IR=1,Gb=8,dd=32,Wb=2,NR=268435456,LR={objects:"shallow"};function DR(r,e){if(!e&&typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement&&r.parentElement){let{width:t,height:s,top:o,left:u}=r.parentElement.getBoundingClientRect();return{width:t,height:s,top:o,left:u}}else if(!e&&typeof OffscreenCanvas<"u"&&r instanceof OffscreenCanvas)return{width:r.width,height:r.height,top:0,left:0};return{width:0,height:0,top:0,left:0,...e}}function kR({store:r,configuration:e},t,s){let{gl:o,scene:u,camera:c,shadows:d=!1,linear:p=!1,flat:m=!1,legacy:g=!1,frameloop:_="always",dpr:y=[1,2],performance:b,onPointerMissed:x}=s,C=DR(t,s.size),S={...s,shadows:d,linear:p,flat:m,legacy:g,frameloop:_,size:C},v=r.getState(),A=v.gl,D=e.previous,R=F=>!D||!gn.equ(S[F],D[F],LR);e.previous=void 0;let L=v.raycaster;if(L||v.set({raycaster:L=new Ll}),R("raycaster")){var N;let{params:F,...B}=(N=s.raycaster)!=null?N:{};Fs(L,{...B,params:{...L.params,...F}})}if(!v.camera||v.camera===e.camera&&R("camera")){e.camera=c;let F=c?.isCamera,B=F?c:s.orthographic?new po(0,0,0,0,.1,1e3):new ii(75,0,.1,1e3);F||(B.position.z=5,c&&(Fs(B,c),B.manual||("aspect"in c||"left"in c||"right"in c||"bottom"in c||"top"in c)&&(B.manual=!0,B.updateProjectionMatrix())),!v.camera&&!(c!=null&&c.rotation)&&B.lookAt(0,0,0)),v.set({camera:B}),L.camera=B}if(!v.scene){let F;u!=null&&u.isScene?(F=u,hd(F,r,"",{})):(F=new yl,hd(F,r,"",{}),u&&Fs(F,u)),v.set({scene:F})}if(s.events&&!v.events.handlers&&v.set({events:s.events(r)}),R("size")&&v.setSize(C.width,C.height,C.top,C.left),v.viewport.dpr!==ig(y)&&v.setDpr(y),R("frameloop")&&v.setFrameloop(_),R("onPointerMissed")&&v.set({onPointerMissed:x}),b&&R("performance")&&v.set(F=>({performance:{...F.performance,...b}})),!v.xr){var M;let F=(Z,O)=>{let Q=r.getState();Q.frameloop!=="never"&&hg(Z,!0,Q,O)},B=()=>{let Z=r.getState();Z.gl.xr.enabled=Z.gl.xr.isPresenting,Z.gl.xr.setAnimationLoop(Z.gl.xr.isPresenting?F:null),Z.gl.xr.isPresenting||Pi(Z)},W={connect(){let Z=r.getState().gl;Z.xr.addEventListener("sessionstart",B),Z.xr.addEventListener("sessionend",B)},disconnect(){let Z=r.getState().gl;Z.xr.removeEventListener("sessionstart",B),Z.xr.removeEventListener("sessionend",B)}};typeof((M=A.xr)==null?void 0:M.addEventListener)=="function"&&W.connect(),v.set({xr:W})}if(A.shadowMap&&R("shadows")){let F=A.shadowMap.enabled,B=A.shadowMap.type;if(A.shadowMap.enabled=!!d,gn.boo(d))A.shadowMap.type=wa;else if(gn.str(d)){var P;let W={basic:Hp,percentage:mo,soft:wa,variance:Ns};A.shadowMap.type=(P=W[d])!=null?P:wa}else gn.obj(d)&&Object.assign(A.shadowMap,d);(F!==A.shadowMap.enabled||B!==A.shadowMap.type)&&(A.shadowMap.needsUpdate=!0)}let V=o&&!gn.fun(o)&&!sg(o)?o:void 0;R("legacy")&&(gt.enabled=!g,v.set({legacy:g})),R("linear")&&(V?.outputColorSpace===void 0&&(A.outputColorSpace=p?lo:Nn),v.set({linear:p})),R("flat")&&(V?.toneMapping===void 0&&(A.toneMapping=m?pi:kl),v.set({flat:m})),V&&R("gl")&&Fs(A,V),e.previous=S}function FR(r){let e=()=>{var o;return(o=r.store.getState().gl)==null?void 0:o.xr},t=()=>{var o,u,c,d;let p=r.store.getState();if((o=e())!=null&&o.isPresenting||(u=e())!=null&&u.getSession!=null&&u.getSession()){e().addEventListener("sessionend",t);return}(c=e())==null||c.removeEventListener==null||c.removeEventListener("sessionend",t);let m=r.configuration.previous;if(!m)return;let g=(d=m.dpr)!=null?d:[1,2];p.viewport.dpr!==ig(g)&&p.setDpr(g)},s=hR(t);return()=>{var o;s(),(o=e())==null||o.removeEventListener==null||o.removeEventListener("sessionend",t)}}var UR={name:"@react-three/fiber",version:"9.8.2",description:"A React renderer for Threejs",keywords:["react","renderer","fiber","three","threejs"],author:"Paul Henschel (https://github.com/drcmda)",license:"MIT",maintainers:["Josh Ellis (https://github.com/joshuaellis)","Cody Bennett (https://github.com/codyjasonbennett)","Kris Baumgarter (https://github.com/krispya)"],bugs:{url:"https://github.com/pmndrs/react-three-fiber/issues"},homepage:"https://github.com/pmndrs/react-three-fiber#readme",repository:{type:"git",url:"git+https://github.com/pmndrs/react-three-fiber.git"},collective:{type:"opencollective",url:"https://opencollective.com/react-three-fiber"},main:"dist/react-three-fiber.cjs.js",module:"dist/react-three-fiber.esm.js",types:"dist/react-three-fiber.cjs.d.ts","react-native":"native/dist/react-three-fiber-native.cjs.js",files:["dist","native","react-reconciler","CHANGELOG.md"],sideEffects:!1,preconstruct:{entrypoints:["index.tsx","native.tsx"]},scripts:{prebuild:"cp ../../readme.md readme.md"},devDependencies:{"@types/react-reconciler":"^0.33.0","react-reconciler":"^0.34.0"},dependencies:{"@babel/runtime":"^7.17.8","@types/webxr":"*","base64-js":"^1.5.1",buffer:"^6.0.3","its-fine":"^2.1.1","react-use-measure":"^2.1.7",scheduler:"^0.28.0","suspend-react":"^0.1.3","use-sync-external-store":"^1.4.0",zustand:"^5.0.3"},peerDependencies:{expo:">=43.0","expo-asset":">=8.4","expo-file-system":">=11.0","expo-gl":">=11.0",react:">=19 <19.4","react-dom":">=19 <19.4","react-native":">=0.78",three:">=0.156"},peerDependenciesMeta:{"react-dom":{optional:!0},"react-native":{optional:!0},expo:{optional:!0},"expo-asset":{optional:!0},"expo-file-system":{optional:!0},"expo-gl":{optional:!0}}};function OR(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Xb={exports:{}},Jm={exports:{}};Jm.exports;var qb;function zR(){return qb||(qb=1,(function(r){r.exports=function(e){function t(n,i,a,l){return new FS(n,i,a,l)}function s(){}function o(n){var i="https://react.dev/errors/"+n;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(n){for(var i=n,a=i;a&&!a.alternate;)i=a,(i.flags&4098)!==0&&(n=i.return),a=i.return;for(;i.return;)i=i.return;return i.tag===3?n:null}function c(n){if(u(n)!==n)throw Error(o(188))}function d(n){var i=n.alternate;if(!i){if(i=u(n),i===null)throw Error(o(188));return i!==n?null:n}for(var a=n,l=i;;){var f=a.return;if(f===null)break;var h=f.alternate;if(h===null){if(l=f.return,l!==null){a=l;continue}break}if(f.child===h.child){for(h=f.child;h;){if(h===a)return c(f),n;if(h===l)return c(f),i;h=h.sibling}throw Error(o(188))}if(a.return!==l.return)a=f,l=h;else{for(var w=!1,k=f.child;k;){if(k===a){w=!0,a=f,l=h;break}if(k===l){w=!0,l=f,a=h;break}k=k.sibling}if(!w){for(k=h.child;k;){if(k===a){w=!0,a=h,l=f;break}if(k===l){w=!0,l=h,a=f;break}k=k.sibling}if(!w)throw Error(o(189))}}if(a.alternate!==l)throw Error(o(190))}if(a.tag!==3)throw Error(o(188));return a.stateNode.current===a?n:i}function p(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n;for(n=n.child;n!==null;){if(i=p(n),i!==null)return i;n=n.sibling}return null}function m(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n;for(n=n.child;n!==null;){if(n.tag!==4&&(i=m(n),i!==null))return i;n=n.sibling}return null}function g(n){return n===null||typeof n!="object"?null:(n=hv&&n[hv]||n["@@iterator"],typeof n=="function"?n:null)}function _(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===GS?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Do:return"Fragment";case bh:return"Profiler";case fv:return"StrictMode";case xh:return"Suspense";case Mh:return"SuspenseList";case Th:return"Activity";case Eh:return"ViewTransition"}if(typeof n=="object")switch(n.$$typeof){case Lo:return"Portal";case Nr:return n.displayName||"Context";case dv:return(n._context.displayName||"Context")+".Consumer";case Sh:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case wh:return i=n.displayName||null,i!==null?i:_(n.type)||"Memo";case us:i=n._payload,n=n._init;try{return _(n(i))}catch{}}return null}function y(n){return{current:n}}function b(n){0>Uo||(n.current=Dh[Uo],Dh[Uo]=null,Uo--)}function x(n,i){Uo++,Dh[Uo]=n.current,n.current=i}function C(n){return n>>>=0,n===0?32:31-(P1(n)/I1|0)|0}function S(n){var i=n&42;if(i!==0)return i;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return n&-n;case 262144:case 524288:case 1048576:case 2097152:return n&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function v(n,i,a){var l=n.pendingLanes;if(l===0)return 0;var f=0,h=n.suspendedLanes,w=n.pingedLanes;n=n.warmLanes;var k=l&134217727;return k!==0?(l=k&~h,l!==0?f=S(l):(w&=k,w!==0?f=S(w):a||(a=k&~n,a!==0&&(f=S(a))))):(k=l&~h,k!==0?f=S(k):w!==0?f=S(w):a||(a=l&~n,a!==0&&(f=S(a)))),f===0?0:i!==0&&i!==f&&(i&h)===0&&(h=f&-f,a=i&-i,h>=a||h===32&&(a&4194048)!==0)?i:f}function A(n,i){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&i)===0}function D(n,i){(i&8)!==0&&(i|=i&32);var a=n.entangledLanes;if(a!==0)for(n=n.entanglements,a&=i;0<a;){var l=31-_i(a),f=1<<l;i|=n[l],a&=~f}return i}function R(n,i){switch(n){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function L(){var n=ku;return ku<<=1,(ku&62914560)===0&&(ku=4194304),n}function N(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function M(n,i){n.pendingLanes|=i,i!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function P(n,i,a,l,f,h){var w=n.pendingLanes;n.pendingLanes=a,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=a,n.entangledLanes&=a,n.errorRecoveryDisabledLanes&=a,n.shellSuspendCounter=0;var k=n.entanglements,K=n.expirationTimes,fe=n.hiddenUpdates;for(a=w&~a;0<a;){var ge=31-_i(a),Ce=1<<ge;k[ge]=0,K[ge]=-1;var De=fe[ge];if(De!==null)for(fe[ge]=null,ge=0;ge<De.length;ge++){var mt=De[ge];mt!==null&&(mt.lane&=-536870913)}a&=~Ce}l!==0&&V(n,l,0),h!==0&&f===0&&n.tag!==0&&(n.suspendedLanes|=h&~(w&~i))}function V(n,i,a){n.pendingLanes|=i,n.suspendedLanes&=~i;var l=31-_i(i);n.entangledLanes|=i,n.entanglements[l]=n.entanglements[l]|1073741824|a&261930}function F(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var l=31-_i(a),f=1<<l;f&i|n[l]&i&&(n[l]|=i),a&=~f}}function B(n,i){var a=i&-i;return a=(a&42)!==0?1:W(a),(a&(n.suspendedLanes|i))!==0?0:a}function W(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Z(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function O(n){if(typeof F1=="function"&&U1(n),bi&&typeof bi.setStrictMode=="function")try{bi.setStrictMode(Za,n)}catch{}}function Q(n,i){if(n.name!=null&&n.name!=="auto")return n.name;if(i.autoName!==null)return i.autoName;n=Qi.identifierPrefix;var a=O1++;return n="_"+n+"t_"+a.toString(32)+"_",i.autoName=n}function se(n){var i;if(n==null||typeof n=="string")return n;var a=null,l=Qo;if(l!==null)for(var f=0;f<l.length;f++){var h=n[l[f]];if(h!=null){if(h==="none")return"none";a=a==null?h:a+(" "+h)}}return(i=a)!=null?i:n.default}function ee(n,i){return n=se(n),i=se(i),i==null?n==="auto"?null:n:i==="auto"?null:i}function me(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}function ne(n){if(Uh===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);Uh=i&&i[1]||"",Vv=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Uh+n+Vv}function ce(n,i){if(!n||Oh)return"";Oh=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var Ce=function(){throw Error()};if(Object.defineProperty(Ce.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ce,[])}catch(Et){var De=Et}Reflect.construct(n,[],Ce)}else{try{Ce.call()}catch(Et){De=Et}Ce=!1;try{var mt=Object.getOwnPropertyDescriptor(n.prototype,"props");Object.defineProperty(n.prototype,"props",{configurable:!0,set:function(){throw Error()}}),Ce=!0,new n}finally{Ce&&(mt!==void 0?Object.defineProperty(n.prototype,"props",mt):delete n.prototype.props)}}}else{try{throw Error()}catch(Et){De=Et}(Ce=n())&&typeof Ce.catch=="function"&&Ce.catch(function(){})}}catch(Et){if(Et&&De&&typeof Et.stack=="string")return[Et.stack,De.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=l.DetermineComponentFrameRoot(),w=h[0],k=h[1];if(w&&k){var K=w.split(`
`),fe=k.split(`
`);for(f=l=0;l<K.length&&!K[l].includes("DetermineComponentFrameRoot");)l++;for(;f<fe.length&&!fe[f].includes("DetermineComponentFrameRoot");)f++;if(l===K.length||f===fe.length)for(l=K.length-1,f=fe.length-1;1<=l&&0<=f&&K[l]!==fe[f];)f--;for(;1<=l&&0<=f;l--,f--)if(K[l]!==fe[f]){if(l!==1||f!==1)do if(l--,f--,0>f||K[l]!==fe[f]){var ge=`
`+K[l].replace(" at new "," at ");return n.displayName&&ge.includes("<anonymous>")&&(ge=ge.replace("<anonymous>",n.displayName)),ge}while(1<=l&&0<=f);break}}}finally{Oh=!1,Error.prepareStackTrace=a}return(a=n?n.displayName||n.name:"")?ne(a):""}function he(n,i){switch(n.tag){case 26:case 27:case 5:return ne(n.type);case 16:return ne("Lazy");case 13:return n.child!==i&&i!==null?ne("Suspense Fallback"):ne("Suspense");case 19:return ne("SuspenseList");case 0:case 15:return ce(n.type,!1);case 11:return ce(n.type.render,!1);case 1:return ce(n.type,!0);case 31:return ne("Activity");case 30:return ne("ViewTransition");default:return""}}function Be(n){try{var i="",a=null;do i+=he(n,a),a=n,n=n.return;while(n);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}function Ve(n,i){if(typeof n=="object"&&n!==null){var a=Gv.get(n);return a!==void 0?a:(i={value:n,source:i,stack:Be(i)},Gv.set(n,i),i)}return{value:n,source:i,stack:Be(i)}}function re(n,i){zo[Bo++]=Ja,zo[Bo++]=Uu,Uu=n,Ja=i}function Pe(n,i,a){Fi[Ui++]=hr,Fi[Ui++]=pr,Fi[Ui++]=cs,cs=n;var l=hr;n=pr;var f=32-_i(l)-1;l&=~(1<<f),a+=1;var h=32-_i(i)+f;if(30<h){var w=f-f%5;h=(l&(1<<w)-1).toString(32),l>>=w,f-=w,hr=1<<32-_i(i)+f|a<<f|l,pr=h+n}else hr=1<<h|a<<f|l,pr=n}function ke(n){n.return!==null&&(re(n,1),Pe(n,1,0))}function We(n){for(;n===Uu;)Uu=zo[--Bo],zo[Bo]=null,Ja=zo[--Bo],zo[Bo]=null;for(;n===cs;)cs=Fi[--Ui],Fi[Ui]=null,pr=Fi[--Ui],Fi[Ui]=null,hr=Fi[--Ui],Fi[Ui]=null}function Ne(n,i){Fi[Ui++]=hr,Fi[Ui++]=pr,Fi[Ui++]=cs,hr=i.id,pr=i.overflow,cs=n}function Ke(n,i){x(fs,i),x(Ka,n),x(Hn,null),n=qS(i),b(Hn),x(Hn,n)}function zt(){b(Hn),b(Ka),b(fs)}function qe(n){var i=n.memoizedState;i!==null&&(i=i.memoizedState,fr?Dr._currentValue=i:Dr._currentValue2=i,x(Ou,n)),i=Hn.current;var a=$S(i,n.type);i!==a&&(x(Ka,n),x(Hn,a))}function wt(n){Ka.current===n&&(b(Hn),b(Ka)),Ou.current===n&&(b(Ou),fr?Dr._currentValue=ko:Dr._currentValue2=ko)}function yt(n){var i=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Xn(Ve(i,n)),zh}function ft(n,i){if(!Bn)throw Error(o(175));a1(n.stateNode,n.type,n.memoizedProps,i,n)||yt(n,!0)}function an(n){for(Cn=n.return;Cn;)switch(Cn.tag){case 5:case 31:case 13:Oi=!1;return;case 27:case 3:Oi=!0;return;default:Cn=Cn.return}}function Gt(n){if(!Bn||n!==Cn)return!1;if(!ht)return an(n),ht=!0,!1;var i=n.tag;if(tn?i!==3&&i!==27&&(i!==5||Pv(n.type)&&!Pu(n.type,n.memoizedProps))&&jt&&yt(n):i!==3&&(i!==5||Pv(n.type)&&!Pu(n.type,n.memoizedProps))&&jt&&yt(n),an(n),i===13){if(!Bn)throw Error(o(316));if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(o(317));jt=d1(n)}else if(i===31){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(o(317));jt=f1(n)}else jt=tn&&i===27?Jx(n.type,jt):Cn?Rv(n.stateNode):null;return!0}function ln(){Bn&&(jt=Cn=null,ht=!1)}function Bt(){var n=ds;return n!==null&&(hi===null?hi=n:hi.push.apply(hi,n),ds=null),n}function Xn(n){ds===null?ds=[n]:ds.push(n)}function Ht(n,i,a){fr?(x(zu,i._currentValue),i._currentValue=a):(x(zu,i._currentValue2),i._currentValue2=a)}function un(n){var i=zu.current;fr?n._currentValue=i:n._currentValue2=i,b(zu)}function kn(n,i,a){for(;n!==null;){var l=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),n===a)break;n=n.return}}function qn(n,i,a,l){var f=n.child;for(f!==null&&(f.return=n);f!==null;){var h=f.dependencies;if(h!==null){var w=f.child;h=h.firstContext;e:for(;h!==null;){var k=h;h=f;for(var K=0;K<i.length;K++)if(k.context===i[K]){h.lanes|=a,k=h.alternate,k!==null&&(k.lanes|=a),kn(h.return,a,n),l||(w=null);break e}h=k.next}}else if(f.tag===18){if(w=f.return,w===null)throw Error(o(341));w.lanes|=a,h=w.alternate,h!==null&&(h.lanes|=a),kn(w,a,n),w=null}else f.tag===13&&f.memoizedState!==null&&f.memoizedState.dehydrated===null?(f.lanes|=a,w=f.alternate,w!==null&&(w.lanes|=a),kn(f.return,a,n),w=f.child,w=w!==null?w.sibling:null):w=f.child;if(w!==null)w.return=f;else for(w=f;w!==null;){if(w===n){w=null;break}if(f=w.sibling,f!==null){f.return=w.return,w=f;break}w=w.return}f=w}}function H(n,i,a,l){n=null;for(var f=i,h=!1;f!==null;){if(!h){if((f.flags&524288)!==0)h=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var w=f.alternate;if(w===null)throw Error(o(387));if(w=w.memoizedProps,w!==null){var k=f.type;Si(f.pendingProps.value,w.value)||(n!==null?n.push(k):n=[k])}}else if(f===Ou.current){if(w=f.alternate,w===null)throw Error(o(387));w.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(n!==null?n.push(Dr):n=[Dr])}f=f.return}return n!==null&&qn(i,n,a,l),i.flags|=262144,n!==null}function Fn(n){for(n=n.firstContext;n!==null;){var i=n.context;if(!Si(fr?i._currentValue:i._currentValue2,n.memoizedValue))return!0;n=n.next}return!1}function Ct(n){$s=n,kr=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function ot(n){return cn($s,n)}function Ee(n,i){return $s===null&&Ct(n),cn(n,i)}function cn(n,i){var a=fr?i._currentValue:i._currentValue2;if(i={context:i,memoizedValue:a,next:null},kr===null){if(n===null)throw Error(o(308));kr=i,n.dependencies={lanes:0,firstContext:i},n.flags|=524288}else kr=kr.next=i;return a}function Xe(){return{controller:new B1,data:new Map,refCount:0}}function je(n){n.refCount--,n.refCount===0&&H1(V1,function(){n.controller.abort()})}function I(n,i){if((n.pendingLanes&4194048)!==0){var a=n.transitionTypes;for(a===null&&(a=n.transitionTypes=[]),n=0;n<i.length;n++){var l=i[n];a.indexOf(l)===-1&&a.push(l)}}}function T(n){var i=n.transitionTypes;return n.transitionTypes=null,i}function q(){}function de(n){n!==Vo&&n.next===null&&(Vo===null?Ho=Vo=n:Vo=Vo.next=n),Bu=!0,Bh||(Bh=!0,U())}function ue(n,i){if(!Hh&&Bu){Hh=!0;do for(var a=!1,l=Ho;l!==null;){if(!i)if(n!==0){var f=l.pendingLanes;if(f===0)var h=0;else{var w=l.suspendedLanes,k=l.pingedLanes;h=(1<<31-_i(42|n)+1)-1,h&=f&~(w&~k),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,Me(l,h))}else h=xt,h=v(l,l===Vt?h:0,l.cancelPendingCommit!==null||l.timeoutHandle!==qs),(h&3)===0||A(l,h)||(a=!0,Me(l,h));l=l.next}while(a);Hh=!1}}function xe(){Te()}function Te(){Bu=Bh=!1;var n=0;Ys!==0&&nx()&&(n=Ys);for(var i=ci(),a=null,l=Ho;l!==null;){var f=l.next,h=oe(l,i);h===0?(l.next=null,a===null?Ho=f:a.next=f,f===null&&(Vo=a)):(a=l,(n!==0||(h&3)!==0)&&(Bu=!0)),l=f}rn!==0&&rn!==5||ue(n,!1),Ys!==0&&(Ys=0)}function oe(n,i){for(var a=n.suspendedLanes,l=n.pingedLanes,f=n.expirationTimes,h=n.pendingLanes&-62914561;0<h;){var w=31-_i(h),k=1<<w,K=f[w];K===-1?((k&a)===0||(k&l)!==0)&&(f[w]=R(k,i)):K<=i&&(n.expiredLanes|=k),h&=~k}if(i=Vt,a=xt,a=v(n,n===i?a:0,n.cancelPendingCommit!==null||n.timeoutHandle!==qs),l=n.callbackNode,a===0||n===i&&(Ft===2||Ft===9)||n.cancelPendingCommit!==null)return l!==null&&l!==null&&kh(l),n.callbackNode=null,n.callbackPriority=0;if((a&3)===0||A(n,a)){if(i=a&-a,i===n.callbackPriority)return i;switch(l!==null&&kh(l),Z(a)){case 2:case 8:a=D1;break;case 32:a=Fh;break;case 268435456:a=k1;break;default:a=Fh}return l=ae.bind(null,n),a=Fu(a,l),n.callbackPriority=i,n.callbackNode=a,i}return l!==null&&l!==null&&kh(l),n.callbackPriority=2,n.callbackNode=null,2}function ae(n,i){if(rn!==0&&rn!==5)return n.callbackNode=null,n.callbackPriority=0,null;var a=n.callbackNode;if(qa()&&n.callbackNode!==a)return null;var l=xt;return l=v(n,n===Vt?l:0,n.cancelPendingCommit!==null||n.timeoutHandle!==qs),l===0?null:(W0(n,l,i),oe(n,ci()),n.callbackNode!=null&&n.callbackNode===a?ae.bind(null,n):null)}function Me(n,i){if(qa())return null;W0(n,i,!0)}function U(){cx?fx(function(){(bt&6)!==0?Fu(Bv,xe):Te()}):Fu(Bv,xe)}function le(){if(Ys===0){var n=js;n===0&&(n=Lu,Lu<<=1,(Lu&261888)===0&&(Lu=256)),Ys=n}return Ys}function ie(n,i){if(el===null){var a=el=[];Vh=0,js=le(),Go={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Vh++,i.then(we,we),i}function we(){if(--Vh===0&&(Qa=null,el!==null)){Go!==null&&(Go.status="fulfilled");var n=el;el=null,js=0,Go=null;for(var i=0;i<n.length;i++)(0,n[i])()}}function ye(n,i){var a=[],l={status:"pending",value:null,reason:null,then:function(f){a.push(f)}};return n.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<a.length;f++)(0,a[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<a.length;f++)(0,a[f])(void 0)}),l}function be(){var n=Zs.current;return n!==null?n:Vt.pooledCache}function He(n,i){i===null?x(Zs,Zs.current):x(Zs,i.pool)}function rt(){var n=be();return n===null?null:{parent:fr?nn._currentValue:nn._currentValue2,pool:n}}function pe(n,i){if(Si(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var f=a[l];if(!z1.call(i,f)||!Si(n[f],i[f]))return!1}return!0}function Ge(n){return n=n.status,n==="fulfilled"||n==="rejected"}function it(n,i,a){switch(a=n[a],a===void 0?n.push(i):a!==i&&(i.then(q,q),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,hn(n),n===void 0&&!("reason"in i)?Error(o(600)):n;default:if(typeof i.status=="string")i.then(q,q);else{if(n=Vt,n!==null&&100<n.shellSuspendCounter)throw Error(o(482));n=i,n.status="pending",n.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,hn(n),n}throw Js=i,Wo}}function Ae(n){try{var i=n._init;return i(n._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Js=a,Wo):a}}function Rt(){if(Js===null)throw Error(o(459));var n=Js;return Js=null,n}function hn(n){if(n===Wo||n===Hu)throw Error(o(483))}function mi(n){var i=tl;return tl+=1,Xo===null&&(Xo=[]),it(Xo,n,i)}function qi(n,i){i=i.props.ref,n.ref=i!==void 0?i:null}function ns(n,i){throw i.$$typeof===zS?Error(o(525)):(n=Object.prototype.toString.call(i),Error(o(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n)))}function ou(n){function i(j,G){if(n){var te=j.deletions;te===null?(j.deletions=[G],j.flags|=16):te.push(G)}}function a(j,G){if(!n)return null;for(;G!==null;)i(j,G),G=G.sibling;return null}function l(j){for(var G=new Map;j!==null;)j.key===null?G.set(j.index,j):G.set(j.key,j),j=j.sibling;return G}function f(j,G){return j=Ir(j,G),j.index=0,j.sibling=null,j}function h(j,G,te){return j.index=te,n?(te=j.alternate,te!==null?(te=te.index,te<G?(j.flags|=2,G):te):(j.flags|=134217730,G)):(j.flags|=1048576,G)}function w(j){return n&&j.alternate===null&&(j.flags|=134217730),j}function k(j,G,te,ve){return G===null||G.tag!==6?(G=gh(te,j.mode,ve),G.return=j,G):(G=f(G,te),G.return=j,G)}function K(j,G,te,ve){var Je=te.type;return Je===Do?(j=ge(j,G,te.props.children,ve,te.key),qi(j,te),j):G!==null&&(G.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===us&&Ae(Je)===G.type)?(G=f(G,te.props),qi(G,te),G.return=j,G):(G=Au(te.type,te.key,te.props,null,j.mode,ve),qi(G,te),G.return=j,G)}function fe(j,G,te,ve){return G===null||G.tag!==4||G.stateNode.containerInfo!==te.containerInfo||G.stateNode.implementation!==te.implementation?(G=vh(te,j.mode,ve),G.return=j,G):(G=f(G,te.children||[]),G.return=j,G)}function ge(j,G,te,ve,Je){return G===null||G.tag!==7?(G=Xs(te,j.mode,ve,Je),G.return=j,G):(G=f(G,te),G.return=j,G)}function Ce(j,G,te){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=gh(""+G,j.mode,te),G.return=j,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case Cu:return te=Au(G.type,G.key,G.props,null,j.mode,te),qi(te,G),te.return=j,te;case Lo:return G=vh(G,j.mode,te),G.return=j,G;case us:return G=Ae(G),Ce(j,G,te)}if(Ru(G)||g(G))return G=Xs(G,j.mode,te,null),G.return=j,G;if(typeof G.then=="function")return Ce(j,mi(G),te);if(G.$$typeof===Nr)return Ce(j,Ee(j,G),te);ns(j,G)}return null}function De(j,G,te,ve){var Je=G!==null?G.key:null;if(typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint")return Je!==null?null:k(j,G,""+te,ve);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case Cu:return te.key===Je?K(j,G,te,ve):null;case Lo:return te.key===Je?fe(j,G,te,ve):null;case us:return te=Ae(te),De(j,G,te,ve)}if(Ru(te)||g(te))return Je!==null?null:ge(j,G,te,ve,null);if(typeof te.then=="function")return De(j,G,mi(te),ve);if(te.$$typeof===Nr)return De(j,G,Ee(j,te),ve);ns(j,te)}return null}function mt(j,G,te,ve,Je){if(typeof ve=="string"&&ve!==""||typeof ve=="number"||typeof ve=="bigint")return j=j.get(te)||null,k(G,j,""+ve,Je);if(typeof ve=="object"&&ve!==null){switch(ve.$$typeof){case Cu:return j=j.get(ve.key===null?te:ve.key)||null,K(G,j,ve,Je);case Lo:return j=j.get(ve.key===null?te:ve.key)||null,fe(G,j,ve,Je);case us:return ve=Ae(ve),mt(j,G,te,ve,Je)}if(Ru(ve)||g(ve))return j=j.get(te)||null,ge(G,j,ve,Je,null);if(typeof ve.then=="function")return mt(j,G,te,mi(ve),Je);if(ve.$$typeof===Nr)return mt(j,G,te,Ee(G,ve),Je);ns(G,ve)}return null}function Et(j,G,te,ve){for(var Je=null,sn=null,Qe=G,It=G=0,Sn=null;Qe!==null&&It<te.length;It++){Qe.index>It?(Sn=Qe,Qe=null):Sn=Qe.sibling;var Tt=De(j,Qe,te[It],ve);if(Tt===null){Qe===null&&(Qe=Sn);break}n&&Qe&&Tt.alternate===null&&i(j,Qe),G=h(Tt,G,It),sn===null?Je=Tt:sn.sibling=Tt,sn=Tt,Qe=Sn}if(It===te.length)return a(j,Qe),ht&&re(j,It),Je;if(Qe===null){for(;It<te.length;It++)Qe=Ce(j,te[It],ve),Qe!==null&&(G=h(Qe,G,It),sn===null?Je=Qe:sn.sibling=Qe,sn=Qe);return ht&&re(j,It),Je}for(Qe=l(Qe);It<te.length;It++)Sn=mt(Qe,j,It,te[It],ve),Sn!==null&&(n&&(Tt=Sn.alternate,Tt!==null&&Qe.delete(Tt.key===null?It:Tt.key)),G=h(Sn,G,It),sn===null?Je=Sn:sn.sibling=Sn,sn=Sn);return n&&Qe.forEach(function(_s){return i(j,_s)}),ht&&re(j,It),Je}function ys(j,G,te,ve){if(te==null)throw Error(o(151));for(var Je=null,sn=null,Qe=G,It=G=0,Sn=null,Tt=te.next();Qe!==null&&!Tt.done;It++,Tt=te.next()){Qe.index>It?(Sn=Qe,Qe=null):Sn=Qe.sibling;var _s=De(j,Qe,Tt.value,ve);if(_s===null){Qe===null&&(Qe=Sn);break}n&&Qe&&_s.alternate===null&&i(j,Qe),G=h(_s,G,It),sn===null?Je=_s:sn.sibling=_s,sn=_s,Qe=Sn}if(Tt.done)return a(j,Qe),ht&&re(j,It),Je;if(Qe===null){for(;!Tt.done;It++,Tt=te.next())Tt=Ce(j,Tt.value,ve),Tt!==null&&(G=h(Tt,G,It),sn===null?Je=Tt:sn.sibling=Tt,sn=Tt);return ht&&re(j,It),Je}for(Qe=l(Qe);!Tt.done;It++,Tt=te.next())Tt=mt(Qe,j,It,Tt.value,ve),Tt!==null&&(n&&(Sn=Tt.alternate,Sn!==null&&Qe.delete(Sn.key===null?It:Sn.key)),G=h(Tt,G,It),sn===null?Je=Tt:sn.sibling=Tt,sn=Tt);return n&&Qe.forEach(function($1){return i(j,$1)}),ht&&re(j,It),Je}function io(j,G,te,ve){if(typeof te=="object"&&te!==null&&te.type===Do&&te.key===null&&te.props.ref===void 0&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case Cu:e:{for(var Je=te.key;G!==null;){if(G.key===Je){if(Je=te.type,Je===Do){if(G.tag===7){a(j,G.sibling),ve=f(G,te.props.children),qi(ve,te),ve.return=j,j=ve;break e}}else if(G.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===us&&Ae(Je)===G.type){a(j,G.sibling),ve=f(G,te.props),qi(ve,te),ve.return=j,j=ve;break e}a(j,G);break}else i(j,G);G=G.sibling}te.type===Do?(ve=Xs(te.props.children,j.mode,ve,te.key),qi(ve,te),ve.return=j,j=ve):(ve=Au(te.type,te.key,te.props,null,j.mode,ve),qi(ve,te),ve.return=j,j=ve)}return w(j);case Lo:e:{for(Je=te.key;G!==null;){if(G.key===Je)if(G.tag===4&&G.stateNode.containerInfo===te.containerInfo&&G.stateNode.implementation===te.implementation){a(j,G.sibling),ve=f(G,te.children||[]),ve.return=j,j=ve;break e}else{a(j,G);break}else i(j,G);G=G.sibling}ve=vh(te,j.mode,ve),ve.return=j,j=ve}return w(j);case us:return te=Ae(te),io(j,G,te,ve)}if(Ru(te))return Et(j,G,te,ve);if(g(te)){if(Je=g(te),typeof Je!="function")throw Error(o(150));return te=Je.call(te),ys(j,G,te,ve)}if(typeof te.then=="function")return io(j,G,mi(te),ve);if(te.$$typeof===Nr)return io(j,G,Ee(j,te),ve);ns(j,te)}return typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint"?(te=""+te,G!==null&&G.tag===6?(a(j,G.sibling),ve=f(G,te),ve.return=j,j=ve):(a(j,G),ve=gh(te,j.mode,ve),ve.return=j,j=ve),w(j)):a(j,G)}return function(j,G,te,ve){try{tl=0;var Je=io(j,G,te,ve);return Xo=null,Je}catch(Qe){if(Qe===Wo||Qe===Hu)throw Qe;var sn=t(29,Qe,null,j.mode);return sn.lanes=ve,sn.return=j,sn}}}function zs(){for(var n=qo,i=Wh=qo=0;i<n;){var a=zi[i];zi[i++]=null;var l=zi[i];zi[i++]=null;var f=zi[i];zi[i++]=null;var h=zi[i];if(zi[i++]=null,l!==null&&f!==null){var w=l.pending;w===null?f.next=f:(f.next=w.next,w.next=f),l.pending=f}h!==0&&ka(a,f,h)}}function Bs(n,i,a,l){zi[qo++]=n,zi[qo++]=i,zi[qo++]=a,zi[qo++]=l,Wh|=l,n.lanes|=l,n=n.alternate,n!==null&&(n.lanes|=l)}function $i(n,i,a,l){return Bs(n,i,a,l),Hs(n)}function Yi(n,i){return Bs(n,null,null,i),Hs(n)}function ka(n,i,a){n.lanes|=a;var l=n.alternate;l!==null&&(l.lanes|=a);for(var f=!1,h=n.return;h!==null;)h.childLanes|=a,l=h.alternate,l!==null&&(l.childLanes|=a),h.tag===22&&(n=h.stateNode,n===null||n._visibility&1||(f=!0)),n=h,h=h.return;return n.tag===3?(h=n.stateNode,f&&i!==null&&(f=31-_i(a),n=h.hiddenUpdates,l=n[f],l===null?n[f]=[i]:l.push(i),i.lane=a|536870912),h):null}function Hs(n){if(50<al)throw al=0,nc=null,Error(o(185));for(var i=n.return;i!==null;)n=i,i=n.return;return n.tag===3?n.stateNode:null}function is(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Mo(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function ji(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function li(n,i,a){var l=n.updateQueue;if(l===null)return null;if(l=l.shared,(bt&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=Hs(n),ka(n,null,a),i}return Bs(n,l,i,a),Hs(n)}function Vs(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var l=i.lanes;l&=n.pendingLanes,a|=l,i.lanes=a,F(n,a)}}function wo(n,i){var a=n.updateQueue,l=n.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var f=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var w={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?f=h=w:h=h.next=w,a=a.next}while(a!==null);h===null?f=h=i:h=h.next=i}else f=h=i;a={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:h,shared:l.shared,callbacks:l.callbacks},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function rs(){if(Xh){var n=Go;if(n!==null)throw n}}function Gs(n,i,a,l){Xh=!1;var f=n.updateQueue;hs=!1;var h=f.firstBaseUpdate,w=f.lastBaseUpdate,k=f.shared.pending;if(k!==null){f.shared.pending=null;var K=k,fe=K.next;K.next=null,w===null?h=fe:w.next=fe,w=K;var ge=n.alternate;ge!==null&&(ge=ge.updateQueue,k=ge.lastBaseUpdate,k!==w&&(k===null?ge.firstBaseUpdate=fe:k.next=fe,ge.lastBaseUpdate=K))}if(h!==null){var Ce=f.baseState;w=0,ge=fe=K=null,k=h;do{var De=k.lane&-536870913,mt=De!==k.lane;if(mt?(xt&De)===De:(l&De)===De){De!==0&&De===js&&(Xh=!0),ge!==null&&(ge=ge.next={lane:0,tag:k.tag,payload:k.payload,callback:null,next:null});e:{var Et=n,ys=k;De=i;var io=a;switch(ys.tag){case 1:if(Et=ys.payload,typeof Et=="function"){Ce=Et.call(io,Ce,De);break e}Ce=Et;break e;case 3:Et.flags=Et.flags&-65537|128;case 0:if(Et=ys.payload,De=typeof Et=="function"?Et.call(io,Ce,De):Et,De==null)break e;Ce=_h({},Ce,De);break e;case 2:hs=!0}}De=k.callback,De!==null&&(n.flags|=64,mt&&(n.flags|=8192),mt=f.callbacks,mt===null?f.callbacks=[De]:mt.push(De))}else mt={lane:De,tag:k.tag,payload:k.payload,callback:k.callback,next:null},ge===null?(fe=ge=mt,K=Ce):ge=ge.next=mt,w|=De;if(k=k.next,k===null){if(k=f.shared.pending,k===null)break;mt=k,k=mt.next,mt.next=null,f.lastBaseUpdate=mt,f.shared.pending=null}}while(!0);ge===null&&(K=Ce),f.baseState=K,f.firstBaseUpdate=fe,f.lastBaseUpdate=ge,h===null&&(f.shared.lanes=0),gs|=w,n.lanes=w,n.memoizedState=Ce}}function au(n,i){if(typeof n!="function")throw Error(o(191,n));n.call(i)}function lu(n,i){var a=n.callbacks;if(a!==null)for(n.callbacks=null,n=0;n<a.length;n++)au(a[n],i)}function Fa(n,i){n=Ur,x(Gu,n),x(ps,i),Ur=n|i.baseLanes}function E(){x(Gu,Ur),x(ps,ps.current)}function z(){Ur=Gu.current,b(ps),b(Gu)}function J(n){var i=n.alternate;x(Gn,Gn.current&1),x(Vn,n),ni===null&&(i===null||ps.current!==null||i.memoizedState!==null)&&(ni=n)}function X(n){x(Gn,Gn.current),x(Vn,n),ni===null&&(ni=n)}function $(n){n.tag===22?(x(Gn,Gn.current),x(Vn,n),ni===null&&(ni=n)):_e()}function _e(){x(Gn,Gn.current),x(Vn,Vn.current)}function Re(n){b(Vn),ni===n&&(ni=null),b(Gn)}function Se(n,i){x(Vn,Vn.current),x(Gn,i)}function Ie(n){b(Gn),b(Vn),ni===n&&(ni=null)}function ze(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Ph(a)||Ih(a)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!=="independent"){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function Fe(){throw Error(o(321))}function lt(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Si(n[a],i[a]))return!1;return!0}function Ue(n,i,a,l,f,h){return Fr=h,at=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ze.H=n===null||n.memoizedState===null?qv:$v,Qs=!1,h=a(l,f),Qs=!1,$o&&(h=Qt(i,a,l,f)),dt(n),h}function dt(n){Ze.H=qu;var i=Ot!==null&&Ot.next!==null;if(Fr=0,yn=Ot=at=null,Wu=!1,nl=0,Yo=null,i)throw Error(o(300));n===null||_n||(n=n.dependencies,n!==null&&Fn(n)&&(_n=!0))}function Qt(n,i,a,l){at=n;var f=0;do{if($o&&(Yo=null),nl=0,$o=!1,25<=f)throw Error(o(301));if(f+=1,yn=Ot=null,n.updateQueue!=null){var h=n.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}Ze.H=W1,h=i(a,l)}while($o);return h}function Ut(){var n=Ze.H,i=n.useState()[0];return i=typeof i.then=="function"?fn(i):i,n=n.useState()[0],(Ot!==null?Ot.memoizedState:null)!==n&&(at.flags|=1024),i}function Nt(){var n=Xu!==0;return Xu=0,n}function vn(n,i,a){i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~a}function Oe(n){if(Wu){for(n=n.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}Wu=!1}Fr=0,yn=Ot=at=null,$o=!1,nl=Xu=0,Yo=null}function Lt(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yn===null?at.memoizedState=yn=n:yn=yn.next=n,yn}function $e(){if(Ot===null){var n=at.alternate;n=n!==null?n.memoizedState:null}else n=Ot.next;var i=yn===null?at.memoizedState:yn.next;if(i!==null)yn=i,Ot=n;else{if(n===null)throw at.alternate===null?Error(o(467)):Error(o(310));Ot=n,n={memoizedState:Ot.memoizedState,baseState:Ot.baseState,baseQueue:Ot.baseQueue,queue:Ot.queue,next:null},yn===null?at.memoizedState=yn=n:yn=yn.next=n}return yn}function Ii(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function fn(n){var i=nl;return nl+=1,Yo===null&&(Yo=[]),n=it(Yo,n,i),i=at,(yn===null?i.memoizedState:yn.next)===null&&(i=i.alternate,Ze.H=i===null||i.memoizedState===null?qv:$v),n}function Rr(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return fn(n);if(n.$$typeof===VS)return;if(n.$$typeof===Nr)return ot(n)}throw Error(o(438,String(n)))}function Ni(n){var i=null,a=at.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var l=at.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=Ii(),at.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(n),l=0;l<n;l++)a[l]=HS;return i.index++,a}function Un(n,i){return typeof i=="function"?i(n):i}function pt(n){var i=$e();return pn(i,Ot,n)}function pn(n,i,a){var l=n.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=a;var f=n.baseQueue,h=l.pending;if(h!==null){if(f!==null){var w=f.next;f.next=h.next,h.next=w}i.baseQueue=f=h,l.pending=null}if(h=n.baseState,f===null)n.memoizedState=h;else{i=f.next;var k=w=null,K=null,fe=i,ge=!1;do{var Ce=fe.lane&-536870913;if(Ce!==fe.lane?(xt&Ce)===Ce:(Fr&Ce)===Ce){var De=fe.revertLane;if(De===0)K!==null&&(K=K.next={lane:0,revertLane:0,gesture:null,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null}),Ce===js&&(ge=!0);else if((Fr&De)===De){fe=fe.next,De===js&&(ge=!0);continue}else Ce={lane:0,revertLane:fe.revertLane,gesture:null,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null},K===null?(k=K=Ce,w=h):K=K.next=Ce,at.lanes|=De,gs|=De;Ce=fe.action,Qs&&a(h,Ce),h=fe.hasEagerState?fe.eagerState:a(h,Ce)}else De={lane:Ce,revertLane:fe.revertLane,gesture:fe.gesture,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null},K===null?(k=K=De,w=h):K=K.next=De,at.lanes|=Ce,gs|=Ce;fe=fe.next}while(fe!==null&&fe!==i);if(K===null?w=h:K.next=k,!Si(h,n.memoizedState)&&(_n=!0,ge&&(a=Go,a!==null)))throw a;n.memoizedState=h,n.baseState=w,n.baseQueue=K,l.lastRenderedState=h}return f===null&&(l.lanes=0),[n.memoizedState,l.dispatch]}function ti(n){var i=$e(),a=i.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=n;var l=a.dispatch,f=a.pending,h=i.memoizedState;if(f!==null){a.pending=null;var w=f=f.next;do h=n(h,w.action),w=w.next;while(w!==f);Si(h,i.memoizedState)||(_n=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),a.lastRenderedState=h}return[h,l]}function Wt(n,i,a){var l=at,f=$e(),h=ht;if(h){if(a===void 0)throw Error(o(407));a=a()}else a=i();var w=!Si((Ot||f).memoizedState,a);if(w&&(f.memoizedState=a,_n=!0),f=f.queue,wd(Ua.bind(null,l,f,n),[n]),n=f.getSnapshot!==i||w||yn!==null&&(yn.memoizedState.tag&1)!==0,To(n?9:8,{destroy:void 0},Li.bind(null,l,f,a,i),null),n){if(l.flags|=2048,Vt===null)throw Error(o(349));h||(Fr&127)!==0||mn(l,i,a)}return a}function mn(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=at.updateQueue,i===null?(i=Ii(),at.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Li(n,i,a,l){i.value=a,i.getSnapshot=l,vg(i)&&yg(n)}function Ua(n,i,a){return a(function(){vg(i)&&yg(n)})}function vg(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Si(n,a)}catch{return!0}}function yg(n){var i=Yi(n,2);i!==null&&ui(i,n,2)}function xd(n){var i=Lt();if(typeof n=="function"){var a=n;if(n=a(),Qs){O(!0);try{a()}finally{O(!1)}}}return i.memoizedState=i.baseState=n,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Un,lastRenderedState:n},i}function _g(n,i,a,l){return n.baseState=a,pn(n,Ot,typeof l=="function"?l:Un)}function dS(n,i,a,l,f){if(fu(n))throw Error(o(485));if(n=i.action,n!==null){var h={payload:f,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(w){h.listeners.push(w)}};Ze.T!==null?a(!0):h.isTransition=!1,l(h),a=i.pending,a===null?(h.next=i.pending=h,bg(i,h)):(h.next=a.next,i.pending=a.next=h)}}function bg(n,i){var a=i.action,l=i.payload,f=n.state;if(i.isTransition){var h=Ze.T,w={};w.types=h!==null?h.types:null,Ze.T=w;try{var k=a(f,l),K=Ze.S;K!==null&&K(w,k),Sg(n,i,k)}catch(fe){Md(n,i,fe)}finally{h!==null&&w.types!==null&&(h.types=w.types),Ze.T=h}}else try{h=a(f,l),Sg(n,i,h)}catch(fe){Md(n,i,fe)}}function Sg(n,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){xg(n,i,l)},function(l){return Md(n,i,l)}):xg(n,i,a)}function xg(n,i,a){i.status="fulfilled",i.value=a,Mg(i),n.state=a,i=n.pending,i!==null&&(a=i.next,a===i?n.pending=null:(a=a.next,i.next=a,bg(n,a)))}function Md(n,i,a){var l=n.pending;if(n.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=a,Mg(i),i=i.next;while(i!==l)}n.action=null}function Mg(n){n=n.listeners;for(var i=0;i<n.length;i++)(0,n[i])()}function wg(n,i){return i}function Tg(n,i){if(ht){var a=Vt.formState;if(a!==null){e:{var l=at;if(ht){if(jt){var f=jx(jt,Oi);if(f){jt=Rv(f),l=Zx(f);break e}}yt(l)}l=!1}l&&(i=a[0])}}a=Lt(),a.memoizedState=a.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wg,lastRenderedState:i},a.queue=l,a=Gg.bind(null,at,l),l.dispatch=a,l=xd(!1);var h=Cd.bind(null,at,!1,l.queue);return l=Lt(),f={state:i,dispatch:null,action:n,pending:null},l.queue=f,a=dS.bind(null,at,f,h,a),f.dispatch=a,l.memoizedState=n,[i,a,!1]}function Eg(n){var i=$e();return Ag(i,Ot,n)}function Ag(n,i,a){if(i=pn(n,i,wg)[0],n=pt(Un)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=fn(i)}catch(w){throw w===Wo?Hu:w}else l=i;i=$e();var f=i.queue,h=f.dispatch;return a!==i.memoizedState&&(at.flags|=2048,To(9,{destroy:void 0},hS.bind(null,f,a),null)),[l,h,n]}function hS(n,i){n.action=i}function Cg(n){var i=$e(),a=Ot;if(a!==null)return Ag(i,a,n);$e(),i=i.memoizedState,a=$e();var l=a.queue.dispatch;return a.memoizedState=n,[i,l,!1]}function To(n,i,a,l){return n={tag:n,create:a,deps:l,inst:i,next:null},i=at.updateQueue,i===null&&(i=Ii(),at.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=n.next=n:(l=a.next,a.next=n,n.next=l,i.lastEffect=n),n}function Rg(){return $e().memoizedState}function uu(n,i,a,l){var f=Lt();at.flags|=n,f.memoizedState=To(1|i,{destroy:void 0},a,l===void 0?null:l)}function cu(n,i,a,l){var f=$e();l=l===void 0?null:l;var h=f.memoizedState.inst;Ot!==null&&l!==null&&lt(l,Ot.memoizedState.deps)?f.memoizedState=To(i,h,a,l):(at.flags|=n,f.memoizedState=To(1|i,h,a,l))}function Pg(n,i){uu(8390656,8,n,i)}function wd(n,i){cu(2048,8,n,i)}function pS(n){at.flags|=4;var i=at.updateQueue;if(i===null)i=Ii(),at.updateQueue=i,i.events=[n];else{var a=i.events;a===null?i.events=[n]:a.push(n)}}function Ig(n){var i=$e().memoizedState;return pS({ref:i,nextImpl:n}),function(){if((bt&2)!==0)throw Error(o(440));return i.impl.apply(void 0,arguments)}}function Ng(n,i){return cu(4,2,n,i)}function Lg(n,i){return cu(4,4,n,i)}function Dg(n,i){if(typeof i=="function"){n=n();var a=i(n);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function kg(n,i,a){a=a!=null?a.concat([n]):null,cu(4,4,Dg.bind(null,i,n),a)}function Td(){}function Fg(n,i){var a=$e();i=i===void 0?null:i;var l=a.memoizedState;return i!==null&&lt(i,l[1])?l[0]:(a.memoizedState=[n,i],n)}function Ug(n,i){var a=$e();i=i===void 0?null:i;var l=a.memoizedState;if(i!==null&&lt(i,l[1]))return l[0];if(l=n(),Qs){O(!0);try{n()}finally{O(!1)}}return a.memoizedState=[l,i],l}function Ed(n,i,a){return a===void 0||(Fr&1073741824)!==0&&(xt&261930)===0?n.memoizedState=i:(n.memoizedState=a,n=G0(),at.lanes|=n,gs|=n,a)}function Og(n,i,a,l){return Si(a,i)?a:ps.current!==null?(n=Ed(n,a,l),Si(n,i)||(_n=!0),n):(Fr&106)===0||(Fr&1073741824)!==0&&(xt&261930)===0?(_n=!0,n.memoizedState=a):(n=G0(),at.lanes|=n,gs|=n,i)}function zg(n,i,a,l,f){var h=Lr();An(h!==0&&8>h?h:8);var w=Ze.T,k={};k.types=w!==null?w.types:null,Ze.T=k,Cd(n,!1,i,a);try{var K=f(),fe=Ze.S;if(fe!==null&&fe(k,K),K!==null&&typeof K=="object"&&typeof K.then=="function"){var ge=ye(K,l);Oa(n,i,ge,vi(n))}else Oa(n,i,l,vi(n))}catch(Ce){Oa(n,i,{then:function(){},status:"rejected",reason:Ce},vi())}finally{An(h),w!==null&&k.types!==null&&(w.types=k.types),Ze.T=w}}function Bg(n){var i=n.memoizedState;if(i!==null)return i;i={memoizedState:ko,baseState:ko,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Un,lastRenderedState:ko},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Un,lastRenderedState:a},next:null},n.memoizedState=i,n=n.alternate,n!==null&&(n.memoizedState=i),i}function Ad(){return ot(Dr)}function Hg(){return $e().memoizedState}function Vg(){return $e().memoizedState}function mS(n){for(var i=n.return;i!==null;){switch(i.tag){case 24:case 3:var a=vi();n=ji(a);var l=li(i,n,a);l!==null&&(ui(l,i,a),Vs(l,i,a)),i={cache:Xe()},n.payload=i;return}i=i.return}}function gS(n,i,a){var l=vi();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},fu(n)?Wg(i,a):(a=$i(n,i,a,l),a!==null&&(ui(a,n,l),Xg(a,i,l)))}function Gg(n,i,a){var l=vi();Oa(n,i,a,l)}function Oa(n,i,a,l){var f={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(fu(n))Wg(i,f);else{var h=n.alternate;if(n.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var w=i.lastRenderedState,k=h(w,a);if(f.hasEagerState=!0,f.eagerState=k,Si(k,w))return Bs(n,i,f,0),Vt===null&&zs(),!1}catch{}if(a=$i(n,i,f,l),a!==null)return ui(a,n,l),Xg(a,i,l),!0}return!1}function Cd(n,i,a,l){if(l={lane:2,revertLane:le(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},fu(n)){if(i)throw Error(o(479))}else i=$i(n,a,l,2),i!==null&&ui(i,n,2)}function fu(n){var i=n.alternate;return n===at||i!==null&&i===at}function Wg(n,i){$o=Wu=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Xg(n,i,a){if((a&4194048)!==0){var l=i.lanes;l&=n.pendingLanes,a|=l,i.lanes=a,F(n,a)}}function Rd(n,i,a,l){i=n.memoizedState,a=a(l,i),a=a==null?i:_h({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}function qg(n,i,a,l,f,h,w){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(l,h,w):i.prototype&&i.prototype.isPureReactComponent?!pe(a,l)||!pe(f,h):!0}function $g(n,i,a,l){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==n&&qh.enqueueReplaceState(i,i.state,null)}function Ws(n,i){var a=i;if("ref"in i){a={};for(var l in i)l!=="ref"&&(a[l]=i[l])}if(n=n.defaultProps){a===i&&(a=_h({},a));for(var f in n)a[f]===void 0&&(a[f]=n[f])}return a}function du(n,i){try{var a=n.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function Yg(n,i,a){try{var l=n.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Pd(n,i,a){return a=ji(a),a.tag=3,a.payload={element:null},a.callback=function(){du(n,i)},a}function jg(n){return n=ji(n),n.tag=3,n}function Zg(n,i,a,l){var f=a.type.getDerivedStateFromError;if(typeof f=="function"){var h=l.value;n.payload=function(){return f(h)},n.callback=function(){Yg(i,a,l)}}var w=a.stateNode;w!==null&&typeof w.componentDidCatch=="function"&&(n.callback=function(){Yg(i,a,l),typeof f!="function"&&(vs===null?vs=new Set([this]):vs.add(this));var k=l.stack;this.componentDidCatch(l.value,{componentStack:k!==null?k:""})})}function vS(n,i,a,l,f){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=a.alternate,i!==null&&H(i,a,f,!0),a=Vn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return ni===null?Tu():a.alternate===null&&dn===0&&(dn=3),a.flags&=-257,a.flags|=65536,a.lanes=f,l===Vu?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([l]):i.add(l),ph(n,l,f)),!1;case 22:return a.flags|=65536,l===Vu?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([l]):a.add(l)),ph(n,l,f)),!1}throw Error(o(435,a.tag))}return ph(n,l,f),Tu(),!1}if(ht)return i=Vn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==zh&&(n=Error(o(422),{cause:l}),Xn(Ve(n,a)))):(l!==zh&&(i=Error(o(423),{cause:l}),Xn(Ve(i,a))),n=n.current.alternate,n.flags|=65536,f&=-f,n.lanes|=f,l=Ve(l,a),f=Pd(n.stateNode,l,f),wo(n,f),dn!==4&&(dn=2)),!1;var h=Error(o(520),{cause:l});if(h=Ve(h,a),sl===null?sl=[h]:sl.push(h),dn!==4&&(dn=2),i===null)return!0;l=Ve(l,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,n=f&-f,a.lanes|=n,n=Pd(a.stateNode,l,n),wo(a,n),!1;case 1:if(i=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(vs===null||!vs.has(h))))return a.flags|=65536,f&=-f,a.lanes|=f,f=jg(f),Zg(f,n,a,l),wo(a,f),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}function wn(n,i,a,l){i.child=n===null?Xv(i,null,a,l):Ks(i,n.child,a,l)}function Jg(n,i,a,l,f){a=a.render;var h=i.ref;if("ref"in l){var w={};for(var k in l)k!=="ref"&&(w[k]=l[k])}else w=l;return Ct(i),l=Ue(n,i,a,w,h,f),k=Nt(),n!==null&&!_n?(vn(n,i,f),Pr(n,i,f)):(ht&&k&&ke(i),i.flags|=1,wn(n,i,l,f),i.child)}function Kg(n,i,a,l,f){if(n===null){var h=a.type;return typeof h=="function"&&!mh(h)&&h.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=h,Qg(n,i,h,l,f)):(n=Au(a.type,null,l,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(h=n.child,!Ud(n,f)){var w=h.memoizedProps;if(a=a.compare,a=a!==null?a:pe,a(w,l)&&n.ref===i.ref)return Pr(n,i,f)}return i.flags|=1,n=Ir(h,l),n.ref=i.ref,n.return=i,i.child=n}function Qg(n,i,a,l,f){if(n!==null){var h=n.memoizedProps;if(pe(h,l)&&n.ref===i.ref)if(_n=!1,i.pendingProps=l=h,Ud(n,f))(n.flags&131072)!==0&&(_n=!0);else return i.lanes=n.lanes,Pr(n,i,f)}return Id(n,i,a,l,f)}function e0(n,i,a,l){var f=l.children,h=n!==null?n.memoizedState:null;if(n===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,n!==null){for(l=i.child=n.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~h}else l=0,i.child=null;return t0(n,i,h,a,l)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},n!==null&&He(i,h!==null?h.cachePool:null),h!==null?Fa(i,h):E(),$(i);else return l=i.lanes=536870912,t0(n,i,h!==null?h.baseLanes|a:a,a,l)}else h!==null?(He(i,h.cachePool),Fa(i,h),_e(),i.memoizedState=null):(n!==null&&He(i,null),E(),_e());return wn(n,i,f,a),i.child}function za(n,i){return n!==null&&n.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function t0(n,i,a,l,f){var h=be();return h=h===null?null:{parent:fr?nn._currentValue:nn._currentValue2,pool:h},i.memoizedState={baseLanes:a,cachePool:h},n!==null&&He(i,null),E(),$(i),n!==null&&H(n,i,l,!0),i.childLanes=f,null}function hu(n,i){return i=pu({mode:i.mode,children:i.children},n.mode),i.ref=n.ref,n.child=i,i.return=n,i}function n0(n,i,a){return Ks(i,n.child,null,a),n=hu(i,i.pendingProps),n.flags|=2,Re(i),i.memoizedState=null,n}function yS(n,i,a){var l=i.pendingProps,f=(i.flags&128)!==0;if(i.flags&=-129,n===null){if(ht){if(l.mode==="hidden")return n=hu(i,l),i.lanes=536870912,n.memoizedState={baseLanes:0,cachePool:null},za(null,n);if(X(i),(n=jt)?(n=s1(n,Oi),n!==null&&(i.memoizedState={dehydrated:n,treeContext:cs!==null?{id:hr,overflow:pr}:null,retryLane:536870912,hydrationErrors:null},a=sv(n),a.return=i,i.child=a,Cn=i,jt=null)):n=null,n===null)throw yt(i);return i.lanes=536870912,null}return hu(i,l)}var h=n.memoizedState;if(h!==null){var w=h.dehydrated;if(X(i),f)if(i.flags&256)i.flags&=-257,i=n0(n,i,a);else if(i.memoizedState!==null)i.child=n.child,i.flags|=128,i=null;else throw Error(o(558));else if(_n||H(n,i,a,!1),f=(a&n.childLanes)!==0,_n||f){if(ps.current===null){if(l=Vt,l!==null&&(w=B(l,a),w!==0&&w!==h.retryLane))throw h.retryLane=w,Yi(n,w),ui(l,n,w),$h;Tu()}i=n0(n,i,a)}else n=h.treeContext,Bn&&(jt=e1(w),Cn=i,ht=!0,ds=null,Oi=!1,n!==null&&Ne(i,n)),i=hu(i,l),i.flags|=134221824;return i}return n=Ir(n.child,{mode:l.mode,children:l.children}),n.ref=i.ref,i.child=n,n.return=i,n}function Eo(n,i){var a=i.ref;if(a===null)n!==null&&n.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(o(284));(n===null||n.ref!==a)&&(i.flags|=4194816)}}function Id(n,i,a,l,f){return Ct(i),a=Ue(n,i,a,l,void 0,f),l=Nt(),n!==null&&!_n?(vn(n,i,f),Pr(n,i,f)):(ht&&l&&ke(i),i.flags|=1,wn(n,i,a,f),i.child)}function i0(n,i,a,l,f,h){return Ct(i),i.updateQueue=null,a=Qt(i,l,a,f),dt(n),l=Nt(),n!==null&&!_n?(vn(n,i,h),Pr(n,i,h)):(ht&&l&&ke(i),i.flags|=1,wn(n,i,a,h),i.child)}function r0(n,i,a,l,f){if(Ct(i),i.stateNode===null){var h=Oo,w=a.contextType;typeof w=="object"&&w!==null&&(h=ot(w)),h=new a(l,h),i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=qh,i.stateNode=h,h._reactInternals=i,h=i.stateNode,h.props=l,h.state=i.memoizedState,h.refs={},is(i),w=a.contextType,h.context=typeof w=="object"&&w!==null?ot(w):Oo,h.state=i.memoizedState,w=a.getDerivedStateFromProps,typeof w=="function"&&(Rd(i,a,w,l),h.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(w=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),w!==h.state&&qh.enqueueReplaceState(h,h.state,null),Gs(i,l,h,f),rs(),h.state=i.memoizedState),typeof h.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(n===null){h=i.stateNode;var k=i.memoizedProps,K=Ws(a,k);h.props=K;var fe=h.context,ge=a.contextType;w=Oo,typeof ge=="object"&&ge!==null&&(w=ot(ge));var Ce=a.getDerivedStateFromProps;ge=typeof Ce=="function"||typeof h.getSnapshotBeforeUpdate=="function",k=i.pendingProps!==k,ge||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(k||fe!==w)&&$g(i,h,l,w),hs=!1;var De=i.memoizedState;h.state=De,Gs(i,l,h,f),rs(),fe=i.memoizedState,k||De!==fe||hs?(typeof Ce=="function"&&(Rd(i,a,Ce,l),fe=i.memoizedState),(K=hs||qg(i,a,K,l,De,fe,w))?(ge||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(i.flags|=4194308)):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=fe),h.props=l,h.state=fe,h.context=w,l=K):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{h=i.stateNode,Mo(n,i),w=i.memoizedProps,ge=Ws(a,w),h.props=ge,Ce=i.pendingProps,De=h.context,fe=a.contextType,K=Oo,typeof fe=="object"&&fe!==null&&(K=ot(fe)),k=a.getDerivedStateFromProps,(fe=typeof k=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(w!==Ce||De!==K)&&$g(i,h,l,K),hs=!1,De=i.memoizedState,h.state=De,Gs(i,l,h,f),rs();var mt=i.memoizedState;w!==Ce||De!==mt||hs||n!==null&&n.dependencies!==null&&Fn(n.dependencies)?(typeof k=="function"&&(Rd(i,a,k,l),mt=i.memoizedState),(ge=hs||qg(i,a,ge,l,De,mt,K)||n!==null&&n.dependencies!==null&&Fn(n.dependencies))?(fe||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(l,mt,K),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(l,mt,K)),typeof h.componentDidUpdate=="function"&&(i.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof h.componentDidUpdate!="function"||w===n.memoizedProps&&De===n.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||w===n.memoizedProps&&De===n.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=mt),h.props=l,h.state=mt,h.context=K,l=ge):(typeof h.componentDidUpdate!="function"||w===n.memoizedProps&&De===n.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||w===n.memoizedProps&&De===n.memoizedState||(i.flags|=1024),l=!1)}return h=l,Eo(n,i),l=(i.flags&128)!==0,h||l?(h=i.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:h.render(),i.flags|=1,n!==null&&l?(i.child=Ks(i,n.child,null,f),i.child=Ks(i,null,a,f)):wn(n,i,a,f),i.memoizedState=h.state,n=i.child):n=Pr(n,i,f),n}function s0(n,i,a,l){return ln(),i.flags|=256,wn(n,i,a,l),i.child}function Nd(n){return{baseLanes:n,cachePool:rt()}}function Ld(n,i,a){return n=n!==null?n.childLanes&~a:0,i&&(n|=wi),n}function o0(n,i,a){var l=i.pendingProps,f=!1,h=(i.flags&128)!==0,w;if((w=h)||(w=n!==null&&n.memoizedState===null?!1:(Gn.current&2)!==0),w&&(f=!0,i.flags&=-129),w=(i.flags&32)!==0,i.flags&=-33,n===null){if(ht){if(f?J(i):_e(),(n=jt)?(n=o1(n,Oi),n!==null&&(i.memoizedState={dehydrated:n,treeContext:cs!==null?{id:hr,overflow:pr}:null,retryLane:536870912,hydrationErrors:null},a=sv(n),a.return=i,i.child=a,Cn=i,jt=null)):n=null,n===null)throw yt(i);return Ih(n)?i.lanes=32:i.lanes=536870912,null}return h=l.children,l=l.fallback,f?(_e(),f=i.mode,h=pu({mode:"hidden",children:h},f),l=Xs(l,f,a,null),h.return=i,l.return=i,h.sibling=l,i.child=h,l=i.child,l.memoizedState=Nd(a),l.childLanes=Ld(n,w,a),i.memoizedState=Yh,za(null,l)):(J(i),Dd(i,h))}var k=n.memoizedState;if(k!==null){var K=k.dehydrated;if(K!==null)return _S(n,i,h,w,l,K,k,a)}return f?(_e(),f=l.fallback,h=i.mode,k=n.child,K=k.sibling,l=Ir(k,{mode:"hidden",children:l.children}),l.subtreeFlags=k.subtreeFlags&1206910976,K!==null?f=Ir(K,f):(f=Xs(f,h,a,null),f.flags|=2),f.return=i,l.return=i,l.sibling=f,i.child=l,za(null,l),l=i.child,f=n.child.memoizedState,f===null?f=Nd(a):(h=f.cachePool,h!==null?(k=fr?nn._currentValue:nn._currentValue2,h=h.parent!==k?{parent:k,pool:k}:h):h=rt(),f={baseLanes:f.baseLanes|a,cachePool:h}),l.memoizedState=f,l.childLanes=Ld(n,w,a),i.memoizedState=Yh,za(n.child,l)):(J(i),a=n.child,n=a.sibling,a=Ir(a,{mode:"visible",children:l.children}),a.return=i,a.sibling=null,n!==null&&(w=i.deletions,w===null?(i.deletions=[n],i.flags|=16):w.push(n)),i.child=a,i.memoizedState=null,a)}function Dd(n,i){return i=pu({mode:"visible",children:i},n.mode),i.return=n,n.child=i}function pu(n,i){return n=t(22,n,null,i),n.lanes=0,n}function mu(n,i,a){return Ks(i,n.child,null,a),n=Dd(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function _S(n,i,a,l,f,h,w,k){if(a)return i.flags&256?(J(i),i.flags&=-257,mu(n,i,k)):i.memoizedState!==null?(_e(),i.child=n.child,i.flags|=128,null):(_e(),h=f.fallback,w=i.mode,f=pu({mode:"visible",children:f.children},w),h=Xs(h,w,k,null),h.flags|=2,f.return=i,h.return=i,f.sibling=h,i.child=f,Ks(i,n.child,null,k),f=i.child,f.memoizedState=Nd(k),f.childLanes=Ld(n,l,k),i.memoizedState=Yh,za(null,f));if(J(i),Ih(h))return l=$x(h).digest,l!==""&&(f=Error(o(419)),f.stack="",f.digest=l,Xn({value:f,source:null,stack:null})),mu(n,i,k);if(_n||H(n,i,k,!1),l=(k&n.childLanes)!==0,_n||l){if(ps.current!==null)return mu(n,i,k);if(l=Vt,l!==null&&(f=B(l,k),f!==0&&f!==w.retryLane))throw w.retryLane=f,Yi(n,f),ui(l,n,f),$h;return Ph(h)||Tu(),mu(n,i,k)}return Ph(h)?(i.flags|=192,i.child=n.child,null):(n=w.treeContext,Bn&&(jt=t1(h),Cn=i,ht=!0,ds=null,Oi=!1,n!==null&&Ne(i,n)),i=Dd(i,f.children),i.flags|=134221824,i)}function a0(n,i,a){n.lanes|=i;var l=n.alternate;l!==null&&(l.lanes|=i),kn(n.return,i,a)}function l0(n){for(var i=null;n!==null;){var a=n.alternate;a!==null&&ze(a)===null&&(i=n),n=n.sibling}return i}function gu(n,i,a,l,f,h){var w=n.memoizedState;w===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:f,treeForkCount:h}:(w.isBackwards=i,w.rendering=null,w.renderingStartTime=0,w.last=l,w.tail=a,w.tailMode=f,w.treeForkCount=h)}function kd(n){var i=n.child;for(n.child=null;i!==null;){var a=i.sibling;i.sibling=n.child,n.child=i,i=a}}function Fd(n,i,a){var l=i.pendingProps,f=l.revealOrder,h=l.tail;l=l.children;var w=Gn.current;if(i.flags&128)return Se(i,w),null;var k=(w&2)!==0;if(k?(w=w&1|2,i.flags|=128):w&=1,Se(i,w),f==="backwards"&&n!==null?(kd(n),wn(n,i,l,a),kd(n)):wn(n,i,l,a),l=ht?Ja:0,!k&&n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&a0(n,a,i);else if(n.tag===19)a0(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}switch(f){case"backwards":a=l0(i.child),a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null,kd(i)),gu(i,!0,f,null,h,l);break;case"unstable_legacy-backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&ze(n)===null){i.child=f;break}n=f.sibling,f.sibling=a,a=f,f=n}gu(i,!0,a,null,h,l);break;case"together":gu(i,!1,null,null,void 0,l);break;case"independent":i.memoizedState=null;break;default:a=l0(i.child),a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),gu(i,!1,f,a,h,l)}return i.child}function u0(n,i,a){var l=i.pendingProps;return Ht(i,i.type,l.value),wn(n,i,l.children,a),i.child}function Pr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),gs|=i.lanes,(a&i.childLanes)===0)if(n!==null){if(H(n,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(n!==null&&i.child!==n.child)throw Error(o(153));if(i.child!==null){for(n=i.child,a=Ir(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Ir(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Ud(n,i){return(n.lanes&i)!==0?!0:(n=n.dependencies,!!(n!==null&&Fn(n)))}function bS(n,i,a){switch(i.tag){case 3:Ke(i,i.stateNode.containerInfo),Ht(i,nn,n.memoizedState.cache),ln();break;case 27:case 5:qe(i);break;case 4:Ke(i,i.stateNode.containerInfo);break;case 10:Ht(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,X(i),null;break;case 13:var l=i.memoizedState;if(l!==null){if(l.dehydrated!==null)return J(i),i.flags|=128,null;l=H(n,i,a,!1);var f=i.child.childLanes;return l||(a&f)!==0?o0(n,i,a):(J(i),n=Pr(n,i,a),n!==null?n.sibling:null)}J(i);break;case 19:if(i.flags&128)return Fd(n,i,a);if(f=(n.flags&128)!==0,l=(a&i.childLanes)!==0,l||(H(n,i,a,!1),l=(a&i.childLanes)!==0),f){if(l)return Fd(n,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Se(i,Gn.current),l)break;return null;case 22:return i.lanes=0,e0(n,i,a,i.pendingProps);case 24:Ht(i,nn,n.memoizedState.cache)}return Pr(n,i,a)}function c0(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps)_n=!0;else{if(!Ud(n,a)&&(i.flags&128)===0)return _n=!1,bS(n,i,a);_n=(n.flags&131072)!==0}else _n=!1,ht&&(i.flags&1048576)!==0&&Pe(i,Ja,i.index);switch(i.lanes=0,i.tag){case 16:e:{var l=i.pendingProps;if(n=Ae(i.elementType),i.type=n,typeof n=="function")mh(n)?(l=Ws(n,l),i.tag=1,i=r0(null,i,n,l,a)):(i.tag=0,i=Id(null,i,n,l,a));else{if(n!=null){var f=n.$$typeof;if(f===Sh){i.tag=11,i=Jg(null,i,n,l,a);break e}else if(f===wh){i.tag=14,i=Kg(null,i,n,l,a);break e}else if(f===Nr){i.tag=10,i.type=n,i=u0(null,i,a);break e}}throw i=_(n)||n,Error(o(306,i,""))}}return i;case 0:return Id(n,i,i.type,i.pendingProps,a);case 1:return l=i.type,f=Ws(l,i.pendingProps),r0(n,i,l,f,a);case 3:e:{if(Ke(i,i.stateNode.containerInfo),n===null)throw Error(o(387));var h=i.pendingProps;f=i.memoizedState,l=f.element,Mo(n,i),Gs(i,h,null,a);var w=i.memoizedState;if(h=w.cache,Ht(i,nn,h),h!==f.cache&&qn(i,[nn],a,!0),rs(),h=w.element,Bn&&f.isDehydrated)if(f={element:h,isDehydrated:!1,cache:w.cache},i.updateQueue.baseState=f,i.memoizedState=f,i.flags&256){i=s0(n,i,h,a);break e}else if(h!==l){l=Ve(Error(o(424)),i),Xn(l),i=s0(n,i,h,a);break e}else for(Bn&&(jt=Qx(i.stateNode.containerInfo),Cn=i,ht=!0,ds=null,Oi=!0),a=Xv(i,null,h,a),i.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling;else{if(ln(),h===l){i=Pr(n,i,a);break e}wn(n,i,h,a)}i=i.child}return i;case 26:if(ki)return Eo(n,i),n===null?(a=Nv(i.type,null,i.pendingProps,null))?i.memoizedState=a:ht||(i.stateNode=kv(i.type,i.pendingProps,fs.current,i)):i.memoizedState=Nv(i.type,n.memoizedProps,i.pendingProps,n.memoizedState),null;case 27:if(tn)return qe(i),n===null&&tn&&ht&&(l=i.stateNode=Uv(i.type,i.pendingProps,fs.current,Hn.current,!1),Cn=i,Oi=!0,jt=n1(i.type,l,jt)),wn(n,i,i.pendingProps.children,a),Eo(n,i),n===null&&(i.flags|=4194304),i.child;case 5:return n===null&&ht&&(M1(i.type,i.pendingProps,Hn.current),(f=l=jt)&&(l=i1(l,i.type,i.pendingProps,Oi),l!==null?(i.stateNode=l,Cn=i,jt=Kx(l),Oi=!1,f=!0):f=!1),f||yt(i)),qe(i),f=i.type,h=i.pendingProps,w=n!==null?n.memoizedProps:null,l=h.children,Pu(f,h)?l=null:w!==null&&Pu(f,w)&&(i.flags|=32),i.memoizedState!==null&&(f=Ue(n,i,Ut,null,null,a),fr?Dr._currentValue=f:Dr._currentValue2=f),Eo(n,i),wn(n,i,l,a),i.child;case 6:return n===null&&ht&&(w1(i.pendingProps,Hn.current),(n=a=jt)&&(a=r1(a,i.pendingProps,Oi),a!==null?(i.stateNode=a,Cn=i,jt=null,n=!0):n=!1),n||yt(i)),null;case 13:return o0(n,i,a);case 4:return Ke(i,i.stateNode.containerInfo),l=i.pendingProps,n===null?i.child=Ks(i,null,l,a):wn(n,i,l,a),i.child;case 11:return Jg(n,i,i.type,i.pendingProps,a);case 7:return l=i.pendingProps,Eo(n,i),wn(n,i,l,a),i.child;case 8:return wn(n,i,i.pendingProps.children,a),i.child;case 12:return wn(n,i,i.pendingProps.children,a),i.child;case 10:return u0(n,i,a);case 9:return f=i.type._context,l=i.pendingProps.children,Ct(i),f=ot(f),l=l(f),i.flags|=1,wn(n,i,l,a),i.child;case 14:return Kg(n,i,i.type,i.pendingProps,a);case 15:return Qg(n,i,i.type,i.pendingProps,a);case 19:return Fd(n,i,a);case 31:return yS(n,i,a);case 22:return e0(n,i,a,i.pendingProps);case 24:return Ct(i),l=ot(nn),n===null?(f=be(),f===null&&(f=Vt,h=Xe(),f.pooledCache=h,h.refCount++,h!==null&&(f.pooledCacheLanes|=a),f=h),i.memoizedState={parent:l,cache:f},is(i),Ht(i,nn,f)):((n.lanes&a)!==0&&(Mo(n,i),Gs(i,null,null,a),rs()),f=n.memoizedState,h=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),Ht(i,nn,l)):(l=h.cache,Ht(i,nn,l),l!==f.cache&&qn(i,[nn],a,!0))),wn(n,i,i.pendingProps.children,a),i.child;case 30:return i.stateNode===null&&(i.stateNode={autoName:null,paired:null,clones:null,ref:null}),l=i.pendingProps,l.name!=null&&l.name!=="auto"?i.flags|=n===null?18882560:18874368:ht&&ke(i),n!==null&&n.memoizedProps.name!==l.name?i.flags|=4194816:Eo(n,i),wn(n,i,l.children,a),i.child;case 29:throw i.pendingProps}throw Error(o(156,i.tag))}function Zi(n){n.flags|=4}function vu(n){dr&&(n.flags|=8)}function f0(n,i){if(n!==null&&n.child===i.child)return!1;if((i.flags&16)!==0)return!0;for(n=i.child;n!==null;){if((n.flags&8218)!==0||(n.subtreeFlags&8218)!==0)return!0;n=n.sibling}return!1}function Od(n,i,a,l){if(en)for(a=i.child;a!==null;){if(a.tag===5||a.tag===6)Ah(n,a.stateNode);else if(!(a.tag===4||tn&&a.tag===27)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}else if(dr)for(var f=i.child;f!==null;){if(f.tag===5){var h=f.stateNode;a&&l&&(h=Av(h,f.type,f.memoizedProps)),Ah(n,h)}else if(f.tag===6)h=f.stateNode,a&&l&&(h=Cv(h,f.memoizedProps)),Ah(n,h);else if(f.tag!==4){if(f.tag===22&&f.memoizedState!==null)h=f.child,h!==null&&(h.return=f),Od(n,f,!0,!0);else if(f.child!==null){f.child.return=f,f=f.child;continue}}if(f===i)break;for(;f.sibling===null;){if(f.return===null||f.return===i)return;f=f.return}f.sibling.return=f.return,f=f.sibling}}function d0(n,i,a,l){var f=!1;if(dr)for(var h=i.child;h!==null;){if(h.tag===5){var w=h.stateNode;a&&l&&(w=Av(w,h.type,h.memoizedProps)),Tv(n,w)}else if(h.tag===6)w=h.stateNode,a&&l&&(w=Cv(w,h.memoizedProps)),Tv(n,w);else if(h.tag!==4){if(h.tag===22&&h.memoizedState!==null)f=h.child,f!==null&&(f.return=h),d0(n,h,!0,!0),f=!0;else if(h.child!==null){h.child.return=h,h=h.child;continue}}if(h===i)break;for(;h.sibling===null;){if(h.return===null||h.return===i)return f;h=h.return}h.sibling.return=h.return,h=h.sibling}return f}function h0(n,i){if(dr&&f0(n,i)){n=i.stateNode;var a=n.containerInfo,l=wv();d0(l,i,!1,!1),n.pendingChildren=l,Zi(i),qx(a,l)}}function zd(n,i,a,l){if(en)n.memoizedProps!==l&&Zi(i);else if(dr){var f=n.stateNode,h=n.memoizedProps;if((n=f0(n,i))||h!==l){var w=Hn.current;h=Xx(f,a,h,l,!n,null),h===f?i.stateNode=f:(vu(i),gv(h,a,l,w)&&Zi(i),i.stateNode=h,n&&Od(h,i,!1,!1))}else i.stateNode=f}}function Bd(n,i,a,l,f){if((n.mode&32)!==0&&(a===null?rx(i,l):sx(i,a,l))){if(n.flags|=16777216,(f&335544128)===f||Ch(i,l))if(yv(n.stateNode,i,l))n.flags|=8192;else if(Y0())n.flags|=8192;else throw Js=Vu,Gh}else n.flags&=-16777217}function p0(n,i){if(A1(i)){if(n.flags|=16777216,!Fv(i))if(Y0())n.flags|=8192;else throw Js=Vu,Gh}else n.flags&=-16777217}function yu(n,i){i!==null&&(n.flags|=4),n.flags&16384&&(i=n.tag!==22?L():536870912,n.lanes|=i,Zo|=i)}function Ba(n,i){if(!ht)switch(n.tailMode){case"visible":break;case"collapsed":for(var a=n.tail,l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:l.sibling=null;break;default:for(i=n.tail,a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null}}function Xt(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,l=0;if(i)for(var f=n.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags&1206910976,l|=f.flags&1206910976,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=l,n.childLanes=a,i}function SS(n,i,a){var l=i.pendingProps;switch(We(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xt(i),null;case 1:return Xt(i),null;case 3:return a=i.stateNode,l=null,n!==null&&(l=n.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),un(nn),zt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(n===null||n.child===null)&&(Gt(i)?Zi(i):n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Bt())),h0(n,i),Xt(i),null;case 26:if(ki){var f=i.type,h=i.memoizedState;return n===null?(Zi(i),h!==null?(Xt(i),p0(i,h)):(Xt(i),Bd(i,f,null,l,a))):h?h!==n.memoizedState?(Zi(i),Xt(i),p0(i,h)):(Xt(i),i.flags&=-16777217):(h=n.memoizedProps,en?h!==l&&Zi(i):zd(n,i,f,l),Xt(i),Bd(i,f,h,l,a)),null}case 27:if(tn){if(wt(i),a=fs.current,f=i.type,n!==null&&i.stateNode!=null)en?n.memoizedProps!==l&&Zi(i):zd(n,i,f,l);else{if(!l){if(i.stateNode===null)throw Error(o(166));return Xt(i),i.subtreeFlags&=-33554433,null}n=Hn.current,Gt(i)?ft(i,n):(n=Uv(f,l,a,n,!0),i.stateNode=n,Zi(i))}return Xt(i),i.subtreeFlags&=-33554433,null}case 5:if(wt(i),f=i.type,n!==null&&i.stateNode!=null)zd(n,i,f,l);else{if(!l){if(i.stateNode===null)throw Error(o(166));return Xt(i),i.subtreeFlags&=-33554433,null}if(h=Hn.current,Gt(i))ft(i,h),v1(i.stateNode,f,l,h)&&(i.flags|=64);else{var w=ZS(f,l,fs.current,h,i);vu(i),Od(w,i,!1,!1),i.stateNode=w,gv(w,f,l,h)&&Zi(i)}}return Xt(i),i.subtreeFlags&=-33554433,Bd(i,i.type,n===null?null:n.memoizedProps,i.pendingProps,a),null;case 6:if(n&&i.stateNode!=null)a=n.memoizedProps,en?a!==l&&Zi(i):dr&&(a!==l?(n=fs.current,a=Hn.current,vu(i),i.stateNode=vv(l,n,a,i)):i.stateNode=n.stateNode);else{if(typeof l!="string"&&i.stateNode===null)throw Error(o(166));if(n=fs.current,a=Hn.current,Gt(i)){if(!Bn)throw Error(o(176));if(n=i.stateNode,a=i.memoizedProps,l=null,f=Cn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}l1(n,a,i,l)||yt(i,!0)}else vu(i),i.stateNode=vv(l,n,a,i)}return Xt(i),null;case 31:if(a=i.memoizedState,n===null||n.memoizedState!==null){if(l=Gt(i),a!==null){if(n===null){if(!l)throw Error(o(318));if(!Bn)throw Error(o(556));if(n=i.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(o(557));u1(n,i)}else ln(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Xt(i),n=!1}else a=Bt(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=a),n=!0;if(!n)return i.flags&256?(Re(i),i):(Re(i),null);if((i.flags&128)!==0)throw Error(o(558))}return Xt(i),null;case 13:if(l=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(f=Gt(i),l!==null&&l.dehydrated!==null){if(n===null){if(!f)throw Error(o(318));if(!Bn)throw Error(o(344));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(o(317));c1(f,i)}else ln(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Xt(i),f=!1}else f=Bt(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(Re(i),i):(Re(i),null)}return Re(i),(i.flags&128)!==0?(i.lanes=a,i):(a=l!==null,n=n!==null&&n.memoizedState!==null,a&&(l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),h=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(h=l.memoizedState.cachePool.pool),h!==f&&(l.flags|=2048)),a!==n&&a&&(i.child.flags|=8192),yu(i,i.updateQueue),Xt(i),null);case 4:return zt(),h0(n,i),n===null&&ex(i.stateNode.containerInfo),i.flags|=67108864,Xt(i),null;case 10:return un(i.type),Xt(i),null;case 19:if(Ie(i),l=i.memoizedState,l===null)return Xt(i),null;if(f=(i.flags&128)!==0,h=l.rendering,h===null)if(f)Ba(l,!1);else{if(dn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(h=ze(n),h!==null){for(i.flags|=128,Ba(l,!1),n=h.updateQueue,i.updateQueue=n,yu(i,n),i.subtreeFlags=0,n=a,a=i.child;a!==null;)rv(a,n),a=a.sibling;return Se(i,Gn.current&1|2),ht&&re(i,l.treeForkCount),i.child}n=n.sibling}l.tail!==null&&ci()>ol&&(i.flags|=128,f=!0,Ba(l,!1),i.lanes=4194304)}else{if(!f)if(n=ze(h),n!==null){if(i.flags|=128,f=!0,n=n.updateQueue,i.updateQueue=n,yu(i,n),Ba(l,!0),l.tail===null&&l.tailMode!=="collapsed"&&l.tailMode!=="visible"&&!h.alternate&&!ht)return Xt(i),null}else 2*ci()-l.renderingStartTime>ol&&a!==536870912&&(i.flags|=128,f=!0,Ba(l,!1),i.lanes=4194304);l.isBackwards?(h.sibling=i.child,i.child=h):(n=l.last,n!==null?n.sibling=h:i.child=h,l.last=h)}if(l.tail!==null){n=l.tail;e:{for(a=n;a!==null;){if(a.alternate!==null){a=!1;break e}a=a.sibling}a=!0}return l.rendering=n,l.tail=n.sibling,l.renderingStartTime=ci(),n.sibling=null,h=Gn.current,h=f?h&1|2:h&1,l.tailMode==="visible"||l.tailMode==="collapsed"||!a||ht?Se(i,h):(a=h,x(Vn,i),x(Gn,a),ni===null&&(ni=i)),ht&&re(i,l.treeForkCount),n}return Xt(i),null;case 22:case 23:return Re(i),z(),l=i.memoizedState!==null,n!==null?n.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(a&536870912)!==0&&(i.flags&128)===0&&(Xt(i),i.subtreeFlags&6&&(i.flags|=8192)):Xt(i),a=i.updateQueue,a!==null&&yu(i,a.retryQueue),a=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==a&&(i.flags|=2048),n!==null&&b(Zs),null;case 24:return a=null,n!==null&&(a=n.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),un(nn),Xt(i),null;case 25:return null;case 30:return i.flags|=33554432,Xt(i),null}throw Error(o(156,i.tag))}function xS(n,i){switch(We(i),i.tag){case 1:return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return un(nn),zt(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 26:case 27:case 5:return wt(i),null;case 31:if(i.memoizedState!==null){if(Re(i),i.alternate===null)throw Error(o(340));ln()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 13:if(Re(i),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(o(340));ln()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ie(i),n=i.flags,n&65536?(i.flags=n&-65537|128,n=i.memoizedState,n!==null&&(n.rendering=null,n.tail=null),i.flags|=4,i):null;case 4:return zt(),null;case 10:return un(i.type),null;case 22:case 23:return Re(i),z(),n!==null&&b(Zs),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 24:return un(nn),null;case 25:return null;default:return null}}function m0(n,i){switch(We(i),i.tag){case 3:un(nn),zt();break;case 26:case 27:case 5:wt(i);break;case 4:zt();break;case 31:i.memoizedState!==null&&Re(i);break;case 13:Re(i);break;case 19:Ie(i);break;case 10:un(i.type);break;case 22:case 23:Re(i),z(),n!==null&&b(Zs);break;case 24:un(nn)}}function Ha(n,i){try{var a=i.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var f=l.next;a=f;do{if((a.tag&n)===n){l=void 0;var h=a.create,w=a.inst;l=h(),w.destroy=l}a=a.next}while(a!==f)}}catch(k){Pt(i,i.return,k)}}function ss(n,i,a){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var h=f.next;l=h;do{if((l.tag&n)===n){var w=l.inst,k=w.destroy;if(k!==void 0){w.destroy=void 0,f=i;var K=a,fe=k;try{fe()}catch(ge){Pt(f,K,ge)}}}l=l.next}while(l!==h)}}catch(ge){Pt(i,i.return,ge)}}function g0(n){var i=n.updateQueue;if(i!==null){var a=n.stateNode;try{lu(i,a)}catch(l){Pt(n,n.return,l)}}}function v0(n,i,a){a.props=Ws(n.type,n.memoizedProps),a.state=n.memoizedState;try{a.componentWillUnmount()}catch(l){Pt(n,i,l)}}function lr(n,i){try{var a=n.ref;if(a!==null){switch(n.tag){case 26:case 27:case 5:var l=$a(n.stateNode);break;case 30:var f=n.stateNode,h=Q(n.memoizedProps,f);(f.ref===null||f.ref.name!==h)&&(f.ref=xv(h)),l=f.ref;break;case 7:n.stateNode===null&&(n.stateNode=Vx(n)),l=n.stateNode;break;default:l=n.stateNode}typeof a=="function"?n.refCleanup=a(l):a.current=l}}catch(w){Pt(n,i,w)}}function On(n,i){var a=n.ref,l=n.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(f){Pt(n,i,f)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(f){Pt(n,i,f)}else a.current=null}function y0(){var n=Yn;return Yn=!1,n}function Va(n,i){if((n.tag===5||n.tag===27||n.tag===6)&&n.alternate===null&&i!==null)for(var a=0;a<i.length;a++)Mv(n.stateNode,i[a])}function _0(n){for(var i=n.return;i!==null&&(Vd(i)&&Mv(n.stateNode,i.stateNode),!Hd(i));)i=i.return}function Ga(n){for(var i=n.return;i!==null&&(Vd(i)&&Wx(n.stateNode,i.stateNode),!Hd(i));)i=i.return}function Hd(n){return n.tag===5||n.tag===3||(tn?n.tag===27:!1)}function Vd(n){return n&&n.tag===7&&n.stateNode!==null}function Gd(n){var i=n.type,a=n.memoizedProps,l=n.stateNode;try{Sx(l,i,a,n)}catch(f){Pt(n,n.return,f)}}function Wd(n,i,a){try{xx(n.stateNode,n.type,a,i,n)}catch(l){Pt(n,n.return,l)}}function b0(n){return n.tag===5||n.tag===3||(ki?n.tag===26:!1)||(tn?n.tag===27&&Fo(n.type):!1)||n.tag===4}function Xd(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||b0(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(tn&&n.tag===27&&Fo(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function qd(n,i,a,l){var f=n.tag;if(f===5||f===6)f=n.stateNode,i?wx(a,f,i):_x(a,f),Va(n,l),Yn=!0;else if(f!==4&&(tn&&f===27&&(Va(n,l),l=null,Fo(n.type)&&(a=n.stateNode,i=null)),n=n.child,n!==null))for(qd(n,i,a,l),n=n.sibling;n!==null;)qd(n,i,a,l),n=n.sibling}function _u(n,i,a,l){var f=n.tag;if(f===5||f===6)f=n.stateNode,i?Mx(a,f,i):yx(a,f),Va(n,l),Yn=!0;else if(f!==4&&(tn&&f===27&&(Va(n,l),l=null,Fo(n.type)&&(a=n.stateNode)),n=n.child,n!==null))for(_u(n,i,a,l),n=n.sibling;n!==null;)_u(n,i,a,l),n=n.sibling}function $d(n,i){if(n.tag===5||tn&&n.tag===27)Va(n,i);else if(n.tag!==4&&(n=n.child,n!==null))for($d(n,i),n=n.sibling;n!==null;)$d(n,i),n=n.sibling}function S0(n,i,a){n=n.containerInfo;try{Ev(n,a)}catch(l){Pt(i,i.return,l)}}function x0(n){var i=n.stateNode,a=n.memoizedProps;try{R1(n.type,a,i,n)}catch(l){Pt(n,n.return,l)}}function M0(n){(n.tag===30||(n.subtreeFlags&33554432)!==0)&&($u=!0)}function w0(){var n=mr;return mr=null,n}function Ao(n,i,a,l,f){return fi=0,T0(n.child,i,a,l,f)}function T0(n,i,a,l,f){if(!en)return!1;for(var h=!1;n!==null;){if(n.tag===5){var w=n.stateNode;if(l!==null){var k=Rh(w);l.push(k),Iu(k)&&(h=!0)}else h||Iu(Rh(w))&&(h=!0);$u=!0,Sv(w,fi===0?i:i+"_"+fi,a),fi++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&f||T0(n.child,i,a,l,f)&&(h=!0));n=n.sibling}return h}function ur(n,i){if(en)for(;n!==null;)n.tag===5?Ix(n.stateNode,n.memoizedProps):(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&i||ur(n.child,i)),n=n.sibling}function bu(n){if((n.subtreeFlags&18874368)!==0)for(n=n.child;n!==null;){if((n.tag!==22||n.memoizedState===null)&&(bu(n),n.tag===30&&(n.flags&18874368)!==0&&n.stateNode.paired)){var i=n.memoizedProps;if(i.name==null||i.name==="auto")throw Error(o(544));var a=i.name;i=ee(i.default,i.share),i!=="none"&&(Ao(n,a,i,null,!1)||ur(n.child,!1))}n=n.sibling}}function Yd(n,i){if(n.tag===30){var a=n.stateNode,l=n.memoizedProps,f=Q(l,a),h=ee(l.default,a.paired?l.share:l.enter);h!=="none"?Ao(n,f,h,null,!1)?(bu(n),a.paired||i||Po(n,l.onEnter)):ur(n.child,!1):bu(n)}else if((n.subtreeFlags&33554432)!==0)for(n=n.child;n!==null;)Yd(n,i),n=n.sibling;else bu(n)}function jd(n){if(xi!==null&&xi.size!==0){var i=xi;if((n.subtreeFlags&18874368)!==0)for(n=n.child;n!==null;){if(n.tag!==22||n.memoizedState===null){if(n.tag===30&&(n.flags&18874368)!==0){var a=n.memoizedProps,l=a.name;if(l!=null&&l!=="auto"){var f=i.get(l);if(f!==void 0){var h=ee(a.default,a.share);if(h!=="none"&&(Ao(n,l,h,null,!1)?(h=n.stateNode,f.paired=h,h.paired=f,Po(n,a.onShare)):ur(n.child,!1)),i.delete(l),i.size===0)break}}}jd(n)}n=n.sibling}}}function Zd(n){if(n.tag===30){var i=n.memoizedProps,a=Q(i,n.stateNode),l=xi!==null?xi.get(a):void 0,f=ee(i.default,l!==void 0?i.share:i.exit);f!=="none"&&(Ao(n,a,f,null,!1)?l!==void 0?(f=n.stateNode,l.paired=f,f.paired=l,xi.delete(a),Po(n,i.onShare)):Po(n,i.onExit):ur(n.child,!1)),xi!==null&&jd(n)}else if((n.subtreeFlags&33554432)!==0)for(n=n.child;n!==null;)Zd(n),n=n.sibling;else xi!==null&&jd(n)}function E0(n){for(n=n.child;n!==null;){if(n.tag===30){var i=n.memoizedProps,a=Q(i,n.stateNode);i=ee(i.default,i.update),n.flags&=-5,i!=="none"&&Ao(n,a,i,n.memoizedState=[],!1)}else(n.subtreeFlags&33554432)!==0&&E0(n);n=n.sibling}}function Jd(n){if((n.subtreeFlags&18874368)!==0)for(n=n.child;n!==null;){if(n.tag!==22||n.memoizedState===null){if(n.tag===30&&(n.flags&18874368)!==0){var i=n.stateNode;i.paired!==null&&(i.paired=null,ur(n.child,!1))}Jd(n)}n=n.sibling}}function Su(n){if(n.tag===30)n.stateNode.paired=null,ur(n.child,!1),Jd(n);else if((n.subtreeFlags&33554432)!==0)for(n=n.child;n!==null;)Su(n),n=n.sibling;else Jd(n)}function A0(n){for(n=n.child;n!==null;)n.tag===30?ur(n.child,!1):(n.subtreeFlags&33554432)!==0&&A0(n),n=n.sibling}function Kd(n,i,a,l,f,h,w){if(!en)return!1;for(var k=!1;i!==null;){if(i.tag===5){var K=i.stateNode;if(h!==null&&fi<h.length){var fe=h[fi],ge=Rh(K);(Iu(fe)||Iu(ge))&&(k=!0),(n.flags&4)===0&&Fx(fe,ge)&&(n.flags|=4),Ux(fe,ge)&&(n.flags|=32)}else n.flags|=32;(n.flags&4)!==0&&Sv(K,fi===0?a:a+"_"+fi,f),k&&(n.flags&4)!==0||(mr===null&&(mr=[]),mr.push(K,fi===0?l:l+"_"+fi,i.memoizedProps)),fi++}else(i.tag!==22||i.memoizedState===null)&&(i.tag===30&&w?n.flags|=i.flags&32:Kd(n,i.child,a,l,f,h,w)&&(k=!0));i=i.sibling}return k}function C0(n,i){for(n=n.child;n!==null;){if(n.tag===30){var a=n.memoizedProps,l=n.stateNode,f=Q(a,l),h=ee(a.default,a.update);if(i){l=l.clones;var w=l===null?null:l.map(kx)}else w=n.memoizedState,n.memoizedState=null;l=n;var k=n.child;fi=0,f=Kd(l,k,f,f,h,w,!1),(n.flags&4)!==0&&f&&(i||Po(n,a.onUpdate))}else(n.subtreeFlags&33554432)!==0&&C0(n,i);n=n.sibling}}function MS(n,i,a){for(YS(n.containerInfo),n=(a&335544064)===a,Pn=i,i=n?9270:1024;Pn!==null;){if(a=Pn,n){var l=a.deletions;if(l!==null)for(var f=0;f<l.length;f++)n&&Zd(l[f])}if(a.alternate===null&&(a.flags&2)!==0)n&&M0(a),xu(n);else{if(a.tag===22){if(l=a.alternate,a.memoizedState!==null){l!==null&&l.memoizedState===null&&n&&Zd(l),xu(n);continue}else if(l!==null&&l.memoizedState!==null){n&&M0(a),xu(n);continue}}l=a.child,(a.subtreeFlags&i)!==0&&l!==null?(l.return=a,Pn=l):(n&&E0(a),xu(n))}}xi=null}function xu(n){for(;Pn!==null;){var i=Pn,a=n,l=i.alternate,f=i.flags;switch(i.tag){case 0:case 11:case 15:break;case 1:if((f&1024)!==0&&l!==null){a=void 0,f=l.memoizedProps,l=l.memoizedState;var h=i.stateNode;try{var w=Ws(i.type,f);a=h.getSnapshotBeforeUpdate(w,l),h.__reactInternalSnapshotBeforeUpdate=a}catch(k){Pt(i,i.return,k)}}break;case 3:(f&1024)!==0&&en&&Hx(i.stateNode.containerInfo);break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&l!==null&&(a=Q(l.memoizedProps,l.stateNode),f=i.memoizedProps,f=ee(f.default,f.update),f!=="none"&&Ao(l,a,f,l.memoizedState=[],!0));break;default:if((f&1024)!==0)throw Error(o(163))}if(l=i.sibling,l!==null){l.return=i.return,Pn=l;break}Pn=i.return}}function R0(n,i,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:cr(n,a),l&4&&Ha(5,a);break;case 1:if(cr(n,a),l&4)if(n=a.stateNode,i===null)try{n.componentDidMount()}catch(w){Pt(a,a.return,w)}else{var f=Ws(a.type,i.memoizedProps);i=i.memoizedState;try{n.componentDidUpdate(f,i,n.__reactInternalSnapshotBeforeUpdate)}catch(w){Pt(a,a.return,w)}}l&64&&g0(a),l&512&&lr(a,a.return);break;case 3:if(cr(n,a),l&64&&(l=a.updateQueue,l!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=$a(a.child.stateNode);break;case 1:n=a.child.stateNode}try{lu(l,n)}catch(w){Pt(a,a.return,w)}}break;case 27:tn&&i===null&&l&4&&x0(a);case 26:case 5:if(cr(n,a),i===null){if(l&4)Gd(a);else if(l&64){n=a.type,i=a.memoizedProps,f=a.stateNode;try{h1(f,n,i,a)}catch(w){Pt(a,a.return,w)}}}l&512&&lr(a,a.return);break;case 12:cr(n,a);break;case 31:cr(n,a),l&4&&N0(n,a);break;case 13:cr(n,a),l&4&&L0(n,a),l&64&&(l=a.memoizedState,l!==null&&(l=l.dehydrated,l!==null&&(a=LS.bind(null,a),Yx(l,a))));break;case 22:if(l=a.memoizedState!==null||Rn,!l){var h=i!==null&&i.memoizedState!==null||Dt;i=Rn,f=Dt,Rn=l,(Dt=h)&&!f?(l=tn?2:0,(a.subtreeFlags&8772)!==0&&(l|=1),Ji(n,a,l)):cr(n,a),Rn=i,Dt=f}break;case 30:cr(n,a),l&512&&lr(a,a.return);break;case 7:l&512&&lr(a,a.return);default:cr(n,a)}}function Qd(n,i){if(en)for(n=n.child;n!==null;)P0(n,i),n=n.sibling}function P0(n,i){if(en)switch(n.tag){case 5:case 26:try{var a=n.stateNode;i?Ax(a):Rx(n.stateNode,n.memoizedProps)}catch(h){Pt(n,n.return,h)}eh(n,i);break;case 6:try{var l=n.stateNode;i?Cx(l):Px(l,n.memoizedProps),Yn=!0}catch(h){Pt(n,n.return,h)}break;case 18:try{var f=n.stateNode;i?S1(f):x1(n.stateNode)}catch(h){Pt(n,n.return,h)}break;case 22:case 23:n.memoizedState===null&&Qd(n,i);break;default:Qd(n,i)}}function eh(n,i){if(en&&n.subtreeFlags&67108864)for(n=n.child;n!==null;){var a=n,l=i;if(en)switch(a.tag){case 4:P0(a,l);break;case 22:a.memoizedState===null&&eh(a,l);break;default:eh(a,l)}n=n.sibling}}function I0(n){var i=n.alternate;i!==null&&(n.alternate=null,I0(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&ix(i)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function gi(n,i,a){for(a=a.child;a!==null;)th(n,i,a),a=a.sibling}function th(n,i,a){if(bi&&typeof bi.onCommitFiberUnmount=="function")try{bi.onCommitFiberUnmount(Za,a)}catch{}switch(a.tag){case 26:if(ki){Dt||On(a,i),gi(n,i,a),a.memoizedState?Dv(a.memoizedState):a.stateNode&&(Dt||Lh(a.stateNode));break}case 27:if(tn){Dt||On(a,i),Ga(a);var l=bn,f=di;Fo(a.type)&&(bn=a.stateNode,di=!1),gi(n,i,a),Ov(a.stateNode,a.type,a.memoizedProps),bn=l,di=f;break}case 5:Dt||On(a,i),Ga(a);case 6:if(a.tag===6&&Ga(a),en){if(l=bn,f=di,bn=null,gi(n,i,a),bn=l,di=f,bn!==null)if(di)try{Ex(bn,a.stateNode),Yn=!0}catch(h){Pt(a,i,h)}else try{Tx(bn,a.stateNode),Yn=!0}catch(h){Pt(a,i,h)}}else gi(n,i,a);break;case 18:en&&bn!==null&&(di?b1(bn,a.stateNode):_1(bn,a.stateNode));break;case 4:en?(l=bn,f=di,bn=a.stateNode.containerInfo,di=!0,gi(n,i,a),bn=l,di=f):(dr&&S0(a.stateNode,a,wv()),gi(n,i,a));break;case 0:case 11:case 14:case 15:ss(2,a,i),Dt||ss(4,a,i),gi(n,i,a);break;case 1:Dt||(On(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"&&v0(a,i,l)),gi(n,i,a);break;case 21:gi(n,i,a);break;case 22:Dt=(l=Dt)||a.memoizedState!==null,gi(n,i,a),Dt=l;break;case 30:On(a,i),gi(n,i,a);break;case 7:Dt||On(a,i),gi(n,i,a);break;default:gi(n,i,a)}}function N0(n,i){if(Bn&&i.memoizedState===null&&(n=i.alternate,n!==null&&(n=n.memoizedState,n!==null))){n=n.dehydrated;try{m1(n)}catch(a){Pt(i,i.return,a)}}}function L0(n,i){if(Bn&&i.memoizedState===null&&(n=i.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{g1(n)}catch(a){Pt(i,i.return,a)}}function wS(n){switch(n.tag){case 31:case 13:case 19:var i=n.stateNode;return i===null&&(i=n.stateNode=new Yv),i;case 22:return n=n.stateNode,i=n._retryCache,i===null&&(i=n._retryCache=new Yv),i;default:throw Error(o(435,n.tag))}}function Mu(n,i){var a=wS(n);i.forEach(function(l){if(!a.has(l)){a.add(l);var f=DS.bind(null,n,l);l.then(f,f)}})}function zn(n,i,a){var l=i.deletions;if(l!==null)for(var f=0;f<l.length;f++){var h=l[f],w=n,k=i;if(en){var K=k;e:for(;K!==null;){switch(K.tag){case 27:if(tn){if(Fo(K.type)){bn=K.stateNode,di=!1;break e}break}case 5:bn=K.stateNode,di=!1;break e;case 3:case 4:bn=K.stateNode.containerInfo,di=!0;break e}K=K.return}if(bn===null)throw Error(o(160));th(w,k,h),bn=null,di=!1}else th(w,k,h);w=h.alternate,w!==null&&(w.return=null),h.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)D0(i,n,a),i=i.sibling}function D0(n,i,a){var l=n.alternate,f=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(f&4&&(l=n.updateQueue,l=l!==null?l.events:null,l!==null))for(var h=0;h<l.length;h++){var w=l[h];w.ref.impl=w.nextImpl}zn(i,n,a),$n(n),f&4&&(ss(3,n,n.return),Ha(3,n),ss(5,n,n.return));break;case 1:zn(i,n,a),$n(n),f&512&&(Dt||l===null||On(l,l.return)),f&64&&Rn&&(n=n.updateQueue,n!==null&&(i=n.callbacks,i!==null&&(f=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=f===null?i:f.concat(i))));break;case 26:if(ki){h=Ki,zn(i,n,a),$n(n),f&512&&(Dt||l===null||On(l,l.return)),f&4&&(a=l!==null?l.memoizedState:null,f=n.memoizedState,l===null?f===null?n.stateNode===null?n.stateNode=Rn?kv(n.type,n.memoizedProps,i.containerInfo,n):T1(h,n.type,n.memoizedProps,n):Rn||Nh(h,n.type,n.stateNode):n.stateNode=Lv(h,f,n.memoizedProps):a!==f?(a===null?(i=l.stateNode,i===null||Dt||Lh(i)):Dv(a),f===null?Rn||Nh(h,n.type,n.stateNode):Lv(h,f,n.memoizedProps)):f===null&&n.stateNode!==null&&Wd(n,n.memoizedProps,l.memoizedProps));break}case 27:if(tn){zn(i,n,a),$n(n),f&512&&(Dt||l===null||On(l,l.return)),l!==null&&f&4&&Wd(n,n.memoizedProps,l.memoizedProps);break}case 5:if(h=gr,gr=!1,zn(i,n,a),gr=h,$n(n),f&512&&(Dt||l===null||On(l,l.return)),en){if(n.flags&32){i=n.stateNode;try{bv(i),Yn=!0}catch(ge){Pt(n,n.return,ge)}}f&4&&n.stateNode!=null&&(i=n.memoizedProps,Wd(n,i,l!==null?l.memoizedProps:i)),f&1024&&(jh=!0)}else dr&&n.alternate!==null&&(n.alternate.stateNode=n.stateNode);break;case 6:if(zn(i,n,a),$n(n),f&4&&en){if(n.stateNode===null)throw Error(o(162));i=n.memoizedProps,f=l!==null?l.memoizedProps:i,a=n.stateNode;try{bx(a,f,i),Yn=!0}catch(ge){Pt(n,n.return,ge)}}break;case 3:if(Yn=!1,ki?(E1(),h=Ki,Ki=Nu(i.containerInfo),zn(i,n,a),Ki=h):zn(i,n,a),$n(n),f&4){if(en&&Bn&&l!==null&&l.memoizedState.isDehydrated)try{p1(i.containerInfo)}catch(ge){Pt(n,n.return,ge)}if(dr){f=i.containerInfo,i=i.pendingChildren;try{Ev(f,i),Yn=!0}catch(ge){Pt(n,n.return,ge)}}}jh&&(jh=!1,k0(n)),Yn=!1;break;case 4:l=gr,gr=Rn,h=y0(),ki?(w=Ki,Ki=Nu(n.stateNode.containerInfo),zn(i,n,a),$n(n),Ki=w):(zn(i,n,a),$n(n)),Yn&&il&&(Yu=!0),Yn=h,gr=l,f&4&&dr&&S0(n.stateNode,n,n.stateNode.pendingChildren);break;case 12:zn(i,n,a),$n(n);break;case 31:zn(i,n,a),$n(n),f&4&&(i=n.updateQueue,i!==null&&(n.updateQueue=null,Mu(n,i)));break;case 13:zn(i,n,a),$n(n),n.child.flags&8192&&n.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(ec=ci()),f&4&&(i=n.updateQueue,i!==null&&(n.updateQueue=null,Mu(n,i)));break;case 22:h=n.memoizedState!==null,w=l!==null&&l.memoizedState!==null;var k=Rn,K=Dt,fe=gr;Rn=k||h,gr=fe||h,Dt=K||w,zn(i,n,a),Dt=K,gr=fe,Rn=k,$n(n),f&8192&&(i=n.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,!h||l===null||w||Rn||Dt||(i=tn?2:0,a=w||Dt,l=Rn,w=Dt,Rn=h||Rn,Dt=a,os(n,i),Rn=l,Dt=w),en&&(h||!gr)&&Qd(n,h)),f&4&&(i=n.updateQueue,i!==null&&(f=i.retryQueue,f!==null&&(i.retryQueue=null,Mu(n,f))));break;case 19:zn(i,n,a),$n(n),f&4&&(i=n.updateQueue,i!==null&&(n.updateQueue=null,Mu(n,i)));break;case 30:f&512&&(Dt||l===null||On(l,l.return)),f=y0(),h=il,w=(a&335544064)===a,k=n.memoizedProps,il=w&&ee(k.default,k.update)!=="none",zn(i,n,a),$n(n),w&&l!==null&&Yn&&(n.flags|=4),il=h,Yn=f;break;case 21:break;case 7:f&512&&(Dt||l===null||On(l,l.return)),l&&l.stateNode!==null&&Gx(n,l.stateNode);default:zn(i,n,a),$n(n)}}function $n(n){var i=n.flags;if(i&2){try{for(var a,l=n.return;l!==null;){if(b0(l)){a=l;break}l=l.return}l=null;for(var f=n.return;f!==null;){if(Vd(f)){var h=f.stateNode;l===null?l=[h]:l.push(h)}if(Hd(f))break;f=f.return}var w=l;if(en){if(a==null)throw Error(o(160));switch(a.tag){case 27:if(tn){var k=a.stateNode,K=Xd(n);_u(n,K,k,w);break}case 5:var fe=a.stateNode;a.flags&32&&(bv(fe),a.flags&=-33);var ge=Xd(n);_u(n,ge,fe,w);break;case 3:case 4:var Ce=a.stateNode.containerInfo,De=Xd(n);qd(n,De,Ce,w);break;default:throw Error(o(161))}}else $d(n,w)}catch(mt){Pt(n,n.return,mt)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function k0(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var i=n;k0(i),i.tag===5&&i.flags&1024&&ux(i.stateNode),n=n.sibling}}function Co(n,i){if(i.subtreeFlags&9270)for(i=i.child;i!==null;)F0(i,n),i=i.sibling;else C0(i,!1)}function F0(n,i){var a=n.alternate;if(a===null)Yd(n,!1);else switch(n.tag){case 3:if(Zh=vr=!1,w0(),Co(i,n),!vr&&!Yu){if(n=mr,n!==null)for(var l=0;l<n.length;l+=3)Nx(n[l],n[l+1],n[l+2]);Lx(i.containerInfo),Zh=!0}mr=null;break;case 5:Co(i,n);break;case 4:l=vr,vr=!1,Co(i,n),vr&&(Yu=!0),vr=l;break;case 22:n.memoizedState===null&&(a.memoizedState!==null?Yd(n,!1):Co(i,n));break;case 30:l=vr;var f=w0();vr=!1,Co(i,n),vr&&(n.flags|=4);var h=n.memoizedProps,w=n.stateNode;i=Q(h,w),w=Q(a.memoizedProps,w);var k=ee(h.default,h.update);k==="none"?a=!1:(h=a.memoizedState,a.memoizedState=null,a=n.child,fi=0,a=Kd(n,a,i,w,k,h,!0),fi!==(h===null?0:h.length)&&(n.flags|=32)),(n.flags&4)!==0&&a?(Po(n,n.memoizedProps.onUpdate),mr=f):f!==null&&(f.push.apply(f,mr),mr=f),vr=(n.flags&32)!==0?!0:l;break;default:Co(i,n)}}function cr(n,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)R0(n,i.alternate,i),i=i.sibling}function os(n,i){for(n=n.child;n!==null;){var a=n,l=i;switch(a.tag){case 0:case 11:case 14:case 15:ss(4,a,a.return),os(a,l);break;case 1:On(a,a.return);var f=a.stateNode;typeof f.componentWillUnmount=="function"&&v0(a,a.return,f),os(a,l);break;case 27:tn&&(l&2)!==0&&Ov(a.stateNode,a.type,a.memoizedProps);case 5:On(a,a.return),a.tag!==5&&a.tag!==27||Ga(a),os(a,l);break;case 6:Ga(a);break;case 26:On(a,a.return),ki&&(f=a.stateNode,a.memoizedState!==null||f===null||Dt||Lh(f)),os(a,l);break;case 22:a.memoizedState===null&&os(a,l);break;case 30:On(a,a.return),os(a,l);break;case 7:On(a,a.return);default:os(a,l)}n=n.sibling}}function Ji(n,i,a){for(a=(i.subtreeFlags&8772)!==0?a:a&-2,i=i.child;i!==null;){var l=i.alternate,f=n,h=i,w=h.flags,k=(a&1)!==0;switch(h.tag){case 0:case 11:case 15:Ji(f,h,a),Ha(4,h);break;case 1:if(Ji(f,h,a),l=h,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(ge){Pt(l,l.return,ge)}if(l=h,f=l.updateQueue,f!==null){var K=l.stateNode;try{var fe=f.shared.hiddenCallbacks;if(fe!==null)for(f.shared.hiddenCallbacks=null,f=0;f<fe.length;f++)au(fe[f],K)}catch(ge){Pt(l,l.return,ge)}}k&&w&64&&g0(h),lr(h,h.return);break;case 27:tn&&(a&2)!==0&&x0(h);case 5:h.tag!==5&&h.tag!==27||_0(h),Ji(f,h,a),k&&l===null&&w&4&&Gd(h),lr(h,h.return);break;case 6:_0(h);break;case 26:ki&&(K=h.stateNode,h.memoizedState!==null||K===null||Rn||Nh(Nu(K.ownerDocument),h.type,K)),Ji(f,h,a),k&&l===null&&w&4&&Gd(h),lr(h,h.return);break;case 12:Ji(f,h,a);break;case 31:Ji(f,h,a),k&&w&4&&N0(f,h);break;case 13:Ji(f,h,a),k&&w&4&&L0(f,h);break;case 22:h.memoizedState===null&&Ji(f,h,a),lr(h,h.return);break;case 30:Ji(f,h,a),lr(h,h.return);break;case 7:lr(h,h.return);default:Ji(f,h,a)}i=i.sibling}}function nh(n,i){var a=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),n=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(n=i.memoizedState.cachePool.pool),n!==a&&(n!=null&&n.refCount++,a!=null&&je(a))}function ih(n,i){n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&je(n))}function Di(n,i,a,l){var f=(a&335544064)===a;if(i.subtreeFlags&(f?10262:10256))for(i=i.child;i!==null;)U0(n,i,a,l),i=i.sibling;else f&&A0(i)}function U0(n,i,a,l){var f=(a&335544064)===a;f&&i.alternate===null&&i.return!==null&&i.return.alternate!==null&&Su(i);var h=i.flags;switch(i.tag){case 0:case 11:case 15:Di(n,i,a,l),h&2048&&Ha(9,i);break;case 1:Di(n,i,a,l);break;case 3:Di(n,i,a,l),f&&en&&Zh&&Dx(n.containerInfo),h&2048&&(n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&je(n)));break;case 12:if(h&2048){Di(n,i,a,l),n=i.stateNode;try{var w=i.memoizedProps,k=w.id,K=w.onPostCommit;typeof K=="function"&&K(k,i.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(fe){Pt(i,i.return,fe)}}else Di(n,i,a,l);break;case 31:Di(n,i,a,l);break;case 13:Di(n,i,a,l);break;case 23:break;case 22:w=i.stateNode,k=i.alternate,i.memoizedState!==null?(f&&k!==null&&k.memoizedState===null&&Su(k),w._visibility&2?Di(n,i,a,l):Wa(n,i)):(f&&k!==null&&k.memoizedState!==null&&Su(i),w._visibility&2?Di(n,i,a,l):(w._visibility|=2,Ro(n,i,a,l,(i.subtreeFlags&10256)!==0||!1))),h&2048&&nh(k,i);break;case 24:Di(n,i,a,l),h&2048&&ih(i.alternate,i);break;case 30:f&&(f=i.alternate,f!==null&&(ur(f.child,!0),ur(i.child,!0))),Di(n,i,a,l);break;default:Di(n,i,a,l)}}function Ro(n,i,a,l,f){for(f=f&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var h=n,w=i,k=a,K=l,fe=w.flags;switch(w.tag){case 0:case 11:case 15:Ro(h,w,k,K,f),Ha(8,w);break;case 23:break;case 22:var ge=w.stateNode;w.memoizedState!==null?ge._visibility&2?Ro(h,w,k,K,f):Wa(h,w):(ge._visibility|=2,Ro(h,w,k,K,f)),f&&fe&2048&&nh(w.alternate,w);break;case 24:Ro(h,w,k,K,f),f&&fe&2048&&ih(w.alternate,w);break;default:Ro(h,w,k,K,f)}i=i.sibling}}function Wa(n,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=n,l=i,f=l.flags;switch(l.tag){case 22:Wa(a,l),f&2048&&nh(l.alternate,l);break;case 24:Wa(a,l),f&2048&&ih(l.alternate,l);break;default:Wa(a,l)}i=i.sibling}}function as(n,i,a){if(n.subtreeFlags&eo)for(n=n.child;n!==null;)O0(n,i,a),n=n.sibling}function O0(n,i,a){switch(n.tag){case 26:if(as(n,i,a),n.flags&eo)if(n.memoizedState!==null)C1(a,Ki,n.memoizedState,n.memoizedProps);else{var l=n.stateNode,f=n.type;n=n.memoizedProps,((i&335544128)===i||Ch(f,n))&&_v(a,l,f,n)}break;case 5:as(n,i,a),n.flags&eo&&(l=n.stateNode,f=n.type,n=n.memoizedProps,((i&335544128)===i||Ch(f,n))&&_v(a,l,f,n));break;case 3:case 4:ki?(l=Ki,Ki=Nu(n.stateNode.containerInfo),as(n,i,a),Ki=l):as(n,i,a);break;case 22:n.memoizedState===null&&(l=n.alternate,l!==null&&l.memoizedState!==null?(l=eo,eo=16777216,as(n,i,a),eo=l):as(n,i,a));break;case 30:(n.flags&eo)!==0&&(l=n.memoizedProps.name,l!=null&&l!=="auto"&&(f=n.stateNode,f.paired=null,xi===null&&(xi=new Map),xi.set(l,f))),as(n,i,a);break;default:as(n,i,a)}}function z0(n){var i=n.alternate;if(i!==null&&(n=i.child,n!==null)){i.child=null;do i=n.sibling,n.sibling=null,n=i;while(n!==null)}}function Xa(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Pn=l,H0(l,n)}z0(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)B0(n),n=n.sibling}function B0(n){switch(n.tag){case 0:case 11:case 15:Xa(n),n.flags&2048&&ss(9,n,n.return);break;case 3:Xa(n);break;case 12:Xa(n);break;case 22:var i=n.stateNode;n.memoizedState!==null&&i._visibility&2&&(n.return===null||n.return.tag!==13)?(i._visibility&=-3,wu(n)):Xa(n);break;default:Xa(n)}}function wu(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Pn=l,H0(l,n)}z0(n)}for(n=n.child;n!==null;){switch(i=n,i.tag){case 0:case 11:case 15:ss(8,i,i.return),wu(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,wu(i));break;default:wu(i)}n=n.sibling}}function H0(n,i){for(;Pn!==null;){var a=Pn;switch(a.tag){case 0:case 11:case 15:ss(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:je(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Pn=l;else e:for(a=n;Pn!==null;){l=Pn;var f=l.sibling,h=l.return;if(I0(l),l===a){Pn=null;break e}if(f!==null){f.return=h,Pn=f;break e}Pn=h}}}function rh(n){var i=QS(n);if(i!=null){if(typeof i.memoizedProps["data-testname"]!="string")throw Error(o(364));return i}if(n=dx(n),n===null)throw Error(o(362));return n.stateNode.current}function sh(n,i){var a=n.tag;switch(i.$$typeof){case ju:if(n.type===i.value)return!0;break;case Zu:e:{for(i=i.value,n=[n,0],a=0;a<n.length;){var l=n[a++],f=l.tag,h=n[a++],w=i[h];if(f!==5&&f!==26&&f!==27||!ja(l)){for(;w!=null&&sh(l,w);)h++,w=i[h];if(h===i.length){i=!0;break e}else for(l=l.child;l!==null;)n.push(l,h),l=l.sibling}}i=!1}return i;case Ju:if((a===5||a===26||a===27)&&mx(n.stateNode,i.value))return!0;break;case Qu:if((a===5||a===6||a===26||a===27)&&(n=px(n),n!==null&&0<=n.indexOf(i.value)))return!0;break;case Ku:if((a===5||a===26||a===27)&&(n=n.memoizedProps["data-testname"],typeof n=="string"&&n.toLowerCase()===i.value.toLowerCase()))return!0;break;default:throw Error(o(365))}return!1}function oh(n){switch(n.$$typeof){case ju:return"<"+(_(n.value)||"Unknown")+">";case Zu:return":has("+(oh(n)||"")+")";case Ju:return'[role="'+n.value+'"]';case Qu:return'"'+n.value+'"';case Ku:return'[data-testname="'+n.value+'"]';default:throw Error(o(365))}}function V0(n,i){var a=[];n=[n,0];for(var l=0;l<n.length;){var f=n[l++],h=f.tag,w=n[l++],k=i[w];if(h!==5&&h!==26&&h!==27||!ja(f)){for(;k!=null&&sh(f,k);)w++,k=i[w];if(w===i.length)a.push(f);else for(f=f.child;f!==null;)n.push(f,w),f=f.sibling}}return a}function ah(n,i){if(!Ya)throw Error(o(363));n=rh(n),n=V0(n,i),i=[],n=Array.from(n);for(var a=0;a<n.length;){var l=n[a++],f=l.tag;if(f===5||f===26||f===27)ja(l)||i.push(l.stateNode);else for(l=l.child;l!==null;)n.push(l),l=l.sibling}return i}function vi(){return(bt&2)!==0&&xt!==0?xt&-xt:Ze.T!==null?le():tx()}function G0(){if(wi===0)if((xt&536870912)===0||ht){var n=Du;Du<<=1,(Du&3932160)===0&&(Du=262144),wi=n}else wi=536870912;return n=Vn.current,n!==null&&(n.flags|=32),wi}function Po(n,i){if(i!=null){var a=n.stateNode,l=a.ref;l===null&&(l=a.ref=xv(Q(n.memoizedProps,a))),Ko===null&&(Ko=[]),Ko.push(i.bind(null,l))}}function ui(n,i,a){(n===Vt&&(Ft===2||Ft===9)||n.cancelPendingCommit!==null)&&(Io(n,0),ls(n,xt,wi,!1)),M(n,a),((bt&2)===0||n!==Vt)&&(n===Vt&&((bt&2)===0&&(to|=a),dn===4&&ls(n,xt,wi,!1)),de(n))}function W0(n,i,a){if((bt&6)!==0)throw Error(o(327));var l=!a&&(i&127)===0&&(i&n.expiredLanes)===0||A(n,i),f=l?AS(n,i):uh(n,i,!0),h=l;do{if(f===0){jo&&!l&&ls(n,i,0,!1);break}else{if(a=n.current.alternate,h&&!TS(a)){f=uh(n,i,!1),h=!1;continue}if(f===2){if(h=i,n.errorRecoveryDisabledLanes&h)var w=0;else w=n.pendingLanes&-536870913,w=w!==0?w:w&536870912?536870912:0;if(w!==0){i=w;e:{var k=n;f=sl;var K=Bn&&k.current.memoizedState.isDehydrated;if(K&&(Io(k,w).flags|=256),w=uh(k,w,!1),w!==2&&w!==6){if(Jh&&!K){k.errorRecoveryDisabledLanes|=h,to|=h,f=4;break e}h=hi,hi=f,h!==null&&(hi===null?hi=h:hi.push.apply(hi,h))}f=w}if(h=!1,f!==2)continue}}if(f===1){Io(n,0),ls(n,i,0,!0);break}e:{switch(l=n,h=f,h){case 0:case 1:throw Error(o(345));case 4:if((i&4194048)!==i&&(i&62914560)!==i)break;case 6:ls(l,i,wi,!ms);break e;case 2:hi=null;break;case 3:case 5:break;default:throw Error(o(329))}if((i&62914560)===i&&(f=ec+300-ci(),10<f)){if(ls(l,i,wi,!ms),v(l,0,!0)!==0)break e;yr=i,l.timeoutHandle=JS(X0.bind(null,l,a,hi,tc,Qh,i,wi,to,Zo,ms,h,"Throttled",-0,0),f);break e}X0(l,a,hi,tc,Qh,i,wi,to,Zo,ms,h,null,-0,0)}}break}while(!0);de(n)}function X0(n,i,a,l,f,h,w,k,K,fe,ge,Ce,De,mt){n.timeoutHandle=qs;var Et=i.subtreeFlags,ys=(h&335544064)===h;if(Ce=null,(ys||Et&8192||(Et&16785408)===16785408)&&(Ce=ox(),xi=null,O0(i,h,Ce),ys&&ax(Ce,n.containerInfo),Et=(h&62914560)===h?ec-ci():(h&4194048)===h?jv-ci():0,Et=lx(Ce,Et),Et!==null)){yr=h,n.cancelPendingCommit=Et(ev.bind(null,n,i,h,a,l,f,w,k,K,fe,ge,Ce,null,De,mt)),ls(n,h,w,!fe);return}ev(n,i,h,a,l,f,w,k,K,fe,ge,Ce)}function TS(n){for(var i=n;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var f=a[l],h=f.getSnapshot;f=f.value;try{if(!Si(h(),f))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ls(n,i,a,l){i=D(n,i),i&=~Kh,i&=~to,n.suspendedLanes|=i,n.pingedLanes&=~i,l&&(n.warmLanes|=i),l=n.expirationTimes;for(var f=i;0<f;){var h=31-_i(f),w=1<<h;l[h]=-1,f&=~w}a!==0&&V(n,a,i)}function q0(){return(bt&6)===0?(ue(0,!1),!1):!0}function lh(){if(St!==null){if(Ft===0)var n=St.return;else n=St,kr=$s=null,Oe(n),Xo=null,tl=0,n=St;for(;n!==null;)m0(n.alternate,n),n=n.return;St=null}}function Io(n,i){var a=n.timeoutHandle;return a!==qs&&(n.timeoutHandle=qs,KS(a)),a=n.cancelPendingCommit,a!==null&&(n.cancelPendingCommit=null,a()),yr=0,lh(),Vt=n,St=a=Ir(n.current,null),xt=i,Ft=0,Mi=null,ms=!1,jo=A(n,i),Jh=!1,Zo=wi=Kh=to=gs=dn=0,hi=sl=null,Qh=!1,Ur=D(n,i),zs(),a}function $0(n,i){at=null,Ze.H=qu,i===Wo||i===Hu?(i=Rt(),Ft=3):i===Gh?(i=Rt(),Ft=4):Ft=i===$h?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Mi=i,St===null&&(dn=1,du(n,Ve(i,n.current)))}function Y0(){var n=Vn.current;return n===null?!0:(xt&4194048)===xt?ni===null:(xt&62914560)===xt||(xt&536870912)!==0?n===ni:!1}function j0(){var n=Ze.H;return Ze.H=qu,n===null?qu:n}function Z0(){var n=Ze.A;return Ze.A=X1,n}function Tu(){dn=4,ms||(xt&4194048)!==xt&&Vn.current!==null||(jo=!0),(gs&134217727)===0&&(to&134217727)===0||Vt===null||ls(Vt,xt,wi,!1)}function uh(n,i,a){var l=bt;bt|=2;var f=j0(),h=Z0();(Vt!==n||xt!==i)&&(tc=null,Io(n,i)),i=!1;var w=dn;e:do try{if(Ft!==0&&St!==null){var k=St,K=Mi;switch(Ft){case 8:lh(),w=6;break e;case 3:case 2:case 9:case 6:Vn.current===null&&(i=!0);var fe=Ft;if(Ft=0,Mi=null,No(n,k,K,fe),a&&jo){w=0;break e}break;default:fe=Ft,Ft=0,Mi=null,No(n,k,K,fe)}}ES(),w=dn;break}catch(ge){$0(n,ge)}while(!0);return i&&n.shellSuspendCounter++,kr=$s=null,bt=l,Ze.H=f,Ze.A=h,St===null&&(Vt=null,xt=0,zs()),w}function ES(){for(;St!==null;)J0(St)}function AS(n,i){var a=bt;bt|=2;var l=j0(),f=Z0();Vt!==n||xt!==i?(tc=null,ol=ci()+500,Io(n,i)):jo=A(n,i);e:do try{if(Ft!==0&&St!==null){i=St;var h=Mi;t:switch(Ft){case 1:Ft=0,Mi=null,No(n,i,h,1);break;case 2:case 9:if(Ge(h)){Ft=0,Mi=null,K0(i);break}i=function(){Ft!==2&&Ft!==9||Vt!==n||(Ft=7),de(n)},h.then(i,i);break e;case 3:Ft=7;break e;case 4:Ft=5;break e;case 7:Ge(h)?(Ft=0,Mi=null,K0(i)):(Ft=0,Mi=null,No(n,i,h,7));break;case 5:var w=null;switch(St.tag){case 26:w=St.memoizedState;case 5:case 27:var k=St,K=k.type,fe=k.pendingProps;if(w?Fv(w):yv(k.stateNode,K,fe)){Ft=0,Mi=null;var ge=k.sibling;if(ge!==null)St=ge;else{var Ce=k.return;Ce!==null?(St=Ce,Eu(Ce)):St=null}break t}}Ft=0,Mi=null,No(n,i,h,5);break;case 6:Ft=0,Mi=null,No(n,i,h,6);break;case 8:lh(),dn=6;break e;default:throw Error(o(462))}}CS();break}catch(De){$0(n,De)}while(!0);return kr=$s=null,Ze.H=l,Ze.A=f,bt=a,St!==null?0:(Vt=null,xt=0,zs(),dn)}function CS(){for(;St!==null&&!N1();)J0(St)}function J0(n){var i=c0(n.alternate,n,Ur);n.memoizedProps=n.pendingProps,i===null?Eu(n):St=i}function K0(n){var i=n,a=i.alternate;switch(i.tag){case 15:case 0:i=i0(a,i,i.pendingProps,i.type,void 0,xt);break;case 11:i=i0(a,i,i.pendingProps,i.type.render,i.ref,xt);break;case 5:Oe(i);var l=i;Bn&&l===Cn&&(ht?(an(l),l.tag===5&&l.stateNode!=null&&(jt=l.stateNode)):(an(l),ht=!0));default:m0(a,i),i=St=rv(i,Ur),i=c0(a,i,Ur)}n.memoizedProps=n.pendingProps,i===null?Eu(n):St=i}function No(n,i,a,l){kr=$s=null,Oe(i),Xo=null,tl=0;var f=i.return;try{if(vS(n,f,i,a,xt)){dn=1,du(n,Ve(a,n.current)),St=null;return}}catch(h){if(f!==null)throw St=f,h;dn=1,du(n,Ve(a,n.current)),St=null;return}i.flags&32768?(ht||l===1?n=!0:jo||(xt&536870912)!==0?n=!1:(ms=n=!0,(l===2||l===9||l===3||l===6)&&(l=Vn.current,l!==null&&l.tag===13&&(l.flags|=16384))),Q0(i,n)):Eu(i)}function Eu(n){var i=n;do{if((i.flags&32768)!==0){Q0(i,ms);return}n=i.return;var a=SS(i.alternate,i,Ur);if(a!==null){St=a;return}if(i=i.sibling,i!==null){St=i;return}St=i=n}while(i!==null);dn===0&&(dn=5)}function Q0(n,i){do{var a=xS(n.alternate,n);if(a!==null){a.flags&=32767,St=a;return}if(a=n.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(n=n.sibling,n!==null)){St=n;return}St=n=a}while(n!==null);dn=6,St=null}function ev(n,i,a,l,f,h,w,k,K,fe,ge,Ce){n.cancelPendingCommit=null;do qa();while(rn!==0);if((bt&6)!==0)throw Error(o(327));if(i!==null){if(i===n.current)throw Error(o(177));n===Vt&&(St=Vt=null,xt=0),no=i,Qi=n,yr=a,tp=f,Zv=l,RS(n,i,a,w,k,K,Ce)}}function RS(n,i,a,l,f,h,w){var k=i.lanes|i.childLanes;if(ep=k,k|=Wh,P(n,a,k,l,f,h),Ko=null,(a&335544064)===a?(Qo=T(n),l=10262):(Qo=null,l=10256),(i.subtreeFlags&l)!==0||(i.flags&l)!==0?(n.callbackNode=null,n.callbackPriority=0,kS(Fh,function(){return hh(),null})):(n.callbackNode=null,n.callbackPriority=0),$u=!1,l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=Ze.T,Ze.T=null,f=Lr(),An(2),h=bt,bt|=4;try{MS(n,i,a)}finally{bt=h,An(f),Ze.T=l}}rn=1,$u?Jo=Ox(w,n.containerInfo,Qo,ch,fh,IS,dh,hh,PS,null,null):(ch(),fh(),dh())}function PS(n){if(rn!==0){var i=Qi.onRecoverableError;i(n,{componentStack:null})}}function IS(){rn===3&&(rn=0,F0(no,Qi),rn=4)}function ch(){if(rn===1){rn=0;var n=Qi,i=no,a=yr,l=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||l){l=Ze.T,Ze.T=null;var f=Lr();An(2);var h=bt;bt|=4;try{il=Yu=!1,D0(i,n,a),jS(n.containerInfo)}finally{bt=h,An(f),Ze.T=l}}n.current=i,rn=2}}function fh(){if(rn===2){rn=0;var n=Qi,i=no,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=Ze.T,Ze.T=null;var l=Lr();An(2);var f=bt;bt|=4;try{R0(n,i.alternate,i)}finally{bt=f,An(l),Ze.T=a}}rn=3}}function dh(){if(rn===4||rn===3){rn=0;var n=Jo;Jo=null,L1();var i=Qi,a=no,l=yr,f=Zv,h=(l&335544064)===l?10262:10256;if((a.subtreeFlags&h)!==0||(a.flags&h)!==0?rn=5:(rn=0,no=Qi=null,tv(i,i.pendingLanes)),h=i.pendingLanes,h===0&&(vs=null),Z(l),a=a.stateNode,bi&&typeof bi.onCommitFiberRoot=="function")try{bi.onCommitFiberRoot(Za,a,void 0,(a.current.flags&128)===128)}catch{}if(f!==null){a=Ze.T,h=Lr(),An(2),Ze.T=null;try{for(var w=i.onRecoverableError,k=0;k<f.length;k++){var K=f[k];w(K.value,{componentStack:K.stack})}}finally{Ze.T=a,An(h)}}if(f=Ko,w=Qo,Qo=null,f!==null&&(Ko=null,w===null&&(w=[]),n!==null))for(K=0;K<f.length;K++)a=(0,f[K])(w),a!==void 0&&Bx(n,a);(yr&3)!==0&&qa(),de(i),h=i.pendingLanes,(l&261930)!==0&&(h&42)!==0?i===nc?al++:(al=0,nc=i):(al=0,nc=null),Bn&&y1(),ue(0,!1)}}function tv(n,i){(n.pooledCacheLanes&=i)===0&&(i=n.pooledCache,i!=null&&(n.pooledCache=null,je(i)))}function qa(){return Jo!==null&&(zx(Jo),Jo=null),ch(),fh(),dh(),hh()}function hh(){if(rn!==5)return!1;var n=Qi,i=ep;ep=0;var a=Z(yr),l=32>a?32:a;a=Ze.T;var f=Lr();try{An(l),Ze.T=null,l=tp,tp=null;var h=Qi,w=yr;if(rn=0,no=Qi=null,yr=0,(bt&6)!==0)throw Error(o(331));var k=bt;if(bt|=4,B0(h.current),U0(h,h.current,w,l),bt=k,ue(0,!1),bi&&typeof bi.onPostCommitFiberRoot=="function")try{bi.onPostCommitFiberRoot(Za,h)}catch{}return!0}finally{An(f),Ze.T=a,tv(n,i)}}function nv(n,i,a){i=Ve(a,i),i=Pd(n.stateNode,i,2),n=li(n,i,2),n!==null&&(M(n,2),de(n))}function Pt(n,i,a){if(n.tag===3)nv(n,n,a);else for(;i!==null;){if(i.tag===3){nv(i,n,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(vs===null||!vs.has(l))){n=Ve(a,n),a=jg(2),l=li(i,a,2),l!==null&&(Zg(a,l,i,n),M(l,2),de(l));break}}i=i.return}}function ph(n,i,a){var l=n.pingCache;if(l===null){l=n.pingCache=new q1;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(a)||(Jh=!0,f.add(a),n=NS.bind(null,n,i,a),i.then(n,n))}function NS(n,i,a){var l=n.pingCache;l!==null&&l.delete(i),n.pingedLanes|=n.suspendedLanes&a,n.warmLanes&=~a,Vt===n&&(xt&a)===a&&((dn===4||dn===3&&(xt&62914560)===xt&&300>ci()-ec)&&(bt&2)===0?Io(n,0):Kh|=a,Zo===xt&&(Zo=0)),de(n)}function iv(n,i){i===0&&(i=L()),n=Yi(n,i),n!==null&&(M(n,i),de(n))}function LS(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),iv(n,a)}function DS(n,i){var a=0;switch(n.tag){case 31:case 13:var l=n.stateNode,f=n.memoizedState;f!==null&&(a=f.retryLane);break;case 19:l=n.stateNode;break;case 22:l=n.stateNode._retryCache;break;default:throw Error(o(314))}l!==null&&l.delete(i),iv(n,a)}function kS(n,i){return Fu(n,i)}function FS(n,i,a,l){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Ir(n,i){var a=n.alternate;return a===null?(a=t(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&1206910976,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a.refCleanup=n.refCleanup,a}function rv(n,i){n.flags&=1206910978;var a=n.alternate;return a===null?(n.childLanes=0,n.lanes=i,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=a.childLanes,n.lanes=a.lanes,n.child=a.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=a.memoizedProps,n.memoizedState=a.memoizedState,n.updateQueue=a.updateQueue,n.type=a.type,i=a.dependencies,n.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),n}function Au(n,i,a,l,f,h){var w=0;if(l=n,typeof l=="function")mh(l)&&(w=1);else if(typeof l=="string")w=ki&&tn?Iv(n,a,Hn.current)?26:zv(n)?27:5:ki?Iv(n,a,Hn.current)?26:5:tn&&zv(n)?27:5;else e:switch(l){case Th:return n=t(31,a,i,f),n.elementType=Th,n.lanes=h,n;case Do:return Xs(a.children,f,h,i);case fv:w=8,f|=24;break;case bh:return n=t(12,a,i,f|2),n.elementType=bh,n.lanes=h,n;case xh:return n=t(13,a,i,f),n.elementType=xh,n.lanes=h,n;case Mh:return n=t(19,a,i,f),n.elementType=Mh,n.lanes=h,n;case BS:case Eh:return n=f|32,n=t(30,a,i,n),n.elementType=Eh,n.lanes=h,n.stateNode={autoName:null,paired:null,clones:null,ref:null},n;default:if(typeof l=="object"&&l!==null)switch(l.$$typeof){case Nr:w=10;break e;case dv:w=9;break e;case Sh:w=11;break e;case wh:w=14;break e;case us:w=16,l=null;break e}w=29,a=Error(o(130,n===null?"null":typeof n,"")),l=null}return i=t(w,a,i,f),i.elementType=n,i.type=l,i.lanes=h,i}function Xs(n,i,a,l){return n=t(7,n,l,i),n.lanes=a,n}function gh(n,i,a){return n=t(6,n,null,i),n.lanes=a,n}function sv(n){var i=t(18,null,null,0);return i.stateNode=n,i}function vh(n,i,a){return i=t(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function US(n,i,a,l,f,h,w,k,K){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=qs,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=N(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=N(0),this.hiddenUpdates=N(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=h,this.onRecoverableError=w,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=K,this.transitionTypes=null,this.incompleteTransitions=new Map}function ov(n,i,a,l,f,h,w,k,K,fe,ge,Ce){return n=new US(n,i,a,w,K,fe,ge,Ce,k),i=1,h===!0&&(i|=24),h=t(3,null,null,i),n.current=h,h.stateNode=n,i=Xe(),i.refCount++,n.pooledCache=i,i.refCount++,h.memoizedState={element:l,isDehydrated:a,cache:i},is(h),n}function av(n){return n?(n=Oo,n):Oo}function lv(n){var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(o(188)):(n=Object.keys(n).join(","),Error(o(268,n)));return n=d(i),n=n!==null?p(n):null,n===null?null:$a(n.stateNode)}function uv(n,i,a,l,f,h){f=av(f),l.context===null?l.context=f:l.pendingContext=f,l=ji(i),l.payload={element:a},h=h===void 0?null:h,h!==null&&(l.callback=h),a=li(n,l,i),a!==null&&(ui(a,n,i),Vs(a,n,i))}function cv(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function yh(n,i){cv(n,i),(n=n.alternate)&&cv(n,i)}var _t={},OS=Jb.default,yi=Wn.default,_h=Object.assign,zS=Symbol.for("react.element"),Cu=Symbol.for("react.transitional.element"),Lo=Symbol.for("react.portal"),Do=Symbol.for("react.fragment"),fv=Symbol.for("react.strict_mode"),bh=Symbol.for("react.profiler"),dv=Symbol.for("react.consumer"),Nr=Symbol.for("react.context"),Sh=Symbol.for("react.forward_ref"),xh=Symbol.for("react.suspense"),Mh=Symbol.for("react.suspense_list"),wh=Symbol.for("react.memo"),us=Symbol.for("react.lazy"),Th=Symbol.for("react.activity"),BS=Symbol.for("react.legacy_hidden"),HS=Symbol.for("react.memo_cache_sentinel"),Eh=Symbol.for("react.view_transition"),VS=Symbol.for("react.recoverable"),hv=Symbol.iterator,pv=Symbol.for("react.optimistic_key"),GS=Symbol.for("react.client.reference"),Ru=Array.isArray,Ze=OS.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,WS=e.rendererVersion,XS=e.rendererPackageName,mv=e.extraDevToolsConfig,$a=e.getPublicInstance,qS=e.getRootHostContext,$S=e.getChildHostContext,YS=e.prepareForCommit,jS=e.resetAfterCommit,ZS=e.createInstance;e.cloneMutableInstance;var Ah=e.appendInitialChild,gv=e.finalizeInitialChildren,Pu=e.shouldSetTextContent,vv=e.createTextInstance;e.cloneMutableTextInstance;var JS=e.scheduleTimeout,KS=e.cancelTimeout,qs=e.noTimeout,fr=e.isPrimaryRenderer;e.warnsIfNotActing;var en=e.supportsMutation,dr=e.supportsPersistence,Bn=e.supportsHydration,QS=e.getInstanceFromNode;e.beforeActiveInstanceBlur;var ex=e.preparePortalMount;e.prepareScopeUpdate,e.getInstanceFromScope;var An=e.setCurrentUpdatePriority,Lr=e.getCurrentUpdatePriority,tx=e.resolveUpdatePriority;e.trackSchedulerEvent,e.resolveEventType,e.resolveEventTimeStamp;var nx=e.shouldAttemptEagerTransition,ix=e.detachDeletedInstance;e.requestPostPaintCallback;var rx=e.maySuspendCommit,sx=e.maySuspendCommitOnUpdate,Ch=e.maySuspendCommitInSyncRender,yv=e.preloadInstance,ox=e.startSuspendingCommit,_v=e.suspendInstance,ax=e.suspendOnActiveViewTransition,lx=e.waitForCommitToBeReady;e.getSuspendedCommitReason;var ko=e.NotPendingTransition,Dr=e.HostTransitionContext,ux=e.resetFormInstance;e.bindToConsole;var cx=e.supportsMicrotasks,fx=e.scheduleMicrotask,Ya=e.supportsTestSelectors,dx=e.findFiberRoot,hx=e.getBoundingRect,px=e.getTextContent,ja=e.isHiddenSubtree,mx=e.matchAccessibilityRole,gx=e.setFocusIfFocusable,vx=e.setupIntersectionObserver,yx=e.appendChild,_x=e.appendChildToContainer,bx=e.commitTextUpdate,Sx=e.commitMount,xx=e.commitUpdate,Mx=e.insertBefore,wx=e.insertInContainerBefore,Tx=e.removeChild,Ex=e.removeChildFromContainer,bv=e.resetTextContent,Ax=e.hideInstance,Cx=e.hideTextInstance,Rx=e.unhideInstance,Px=e.unhideTextInstance,Sv=e.applyViewTransitionName,Ix=e.restoreViewTransitionName,Nx=e.cancelViewTransitionName,Lx=e.cancelRootViewTransitionName,Dx=e.restoreRootViewTransitionName;e.cloneRootViewTransitionContainer,e.removeRootViewTransitionClone;var Rh=e.measureInstance,kx=e.measureClonedInstance,Iu=e.wasInstanceInViewport,Fx=e.hasInstanceChanged,Ux=e.hasInstanceAffectedParent,Ox=e.startViewTransition;e.startGestureTransition;var zx=e.stopViewTransition,Bx=e.addViewTransitionFinishedListener;e.getCurrentGestureOffset;var xv=e.createViewTransitionInstance,Hx=e.clearContainer,Vx=e.createFragmentInstance,Gx=e.updateFragmentInstanceFiber,Mv=e.commitNewChildToFragmentInstance,Wx=e.deleteChildFromFragmentInstance,Xx=e.cloneInstance,wv=e.createContainerChildSet,Tv=e.appendChildToContainerChildSet,qx=e.finalizeContainerChildren,Ev=e.replaceContainerChildren,Av=e.cloneHiddenInstance,Cv=e.cloneHiddenTextInstance,Ph=e.isSuspenseInstancePending,Ih=e.isSuspenseInstanceFallback,$x=e.getSuspenseInstanceFallbackErrorDetails,Yx=e.registerSuspenseInstanceRetry,jx=e.canHydrateFormStateMarker,Zx=e.isFormStateMarkerMatching,Rv=e.getNextHydratableSibling,Jx=e.getNextHydratableSiblingAfterSingleton,Kx=e.getFirstHydratableChild,Qx=e.getFirstHydratableChildWithinContainer,e1=e.getFirstHydratableChildWithinActivityInstance,t1=e.getFirstHydratableChildWithinSuspenseInstance,n1=e.getFirstHydratableChildWithinSingleton,i1=e.canHydrateInstance,r1=e.canHydrateTextInstance,s1=e.canHydrateActivityInstance,o1=e.canHydrateSuspenseInstance,a1=e.hydrateInstance,l1=e.hydrateTextInstance,u1=e.hydrateActivityInstance,c1=e.hydrateSuspenseInstance,f1=e.getNextHydratableInstanceAfterActivityInstance,d1=e.getNextHydratableInstanceAfterSuspenseInstance,h1=e.commitHydratedInstance,p1=e.commitHydratedContainer,m1=e.commitHydratedActivityInstance,g1=e.commitHydratedSuspenseInstance,v1=e.finalizeHydratedChildren,y1=e.flushHydrationEvents;e.clearActivityBoundary;var _1=e.clearSuspenseBoundary;e.clearActivityBoundaryFromContainer;var b1=e.clearSuspenseBoundaryFromContainer,S1=e.hideDehydratedBoundary,x1=e.unhideDehydratedBoundary,Pv=e.shouldDeleteUnhydratedTailInstances;e.diffHydratedPropsForDevWarnings,e.diffHydratedTextForDevWarnings,e.describeHydratableInstanceForDevWarnings;var M1=e.validateHydratableInstance,w1=e.validateHydratableTextInstance,ki=e.supportsResources,Iv=e.isHostHoistableType,Nu=e.getHoistableRoot,Nv=e.getResource,Lv=e.acquireResource,Dv=e.releaseResource,T1=e.hydrateHoistable,Nh=e.mountHoistable,Lh=e.unmountHoistable,kv=e.createHoistableInstance,E1=e.prepareToCommitHoistables,A1=e.mayResourceSuspendCommit,Fv=e.preloadResource,C1=e.suspendResource,tn=e.supportsSingletons,Uv=e.resolveSingletonInstance,R1=e.acquireSingletonInstance,Ov=e.releaseSingletonInstance,zv=e.isHostSingletonType,Fo=e.isSingletonScope,Dh=[],Uo=-1,Oo={},_i=Math.clz32?Math.clz32:C,P1=Math.log,I1=Math.LN2,Lu=256,Du=262144,ku=4194304,Fu=yi.unstable_scheduleCallback,kh=yi.unstable_cancelCallback,N1=yi.unstable_shouldYield,L1=yi.unstable_requestPaint,ci=yi.unstable_now,Bv=yi.unstable_ImmediatePriority,D1=yi.unstable_UserBlockingPriority,Fh=yi.unstable_NormalPriority,k1=yi.unstable_IdlePriority,F1=yi.log,U1=yi.unstable_setDisableYieldValue,Za=null,bi=null,O1=0,Si=typeof Object.is=="function"?Object.is:me,Hv=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)},z1=Object.prototype.hasOwnProperty,Uh,Vv,Oh=!1,Gv=new WeakMap,zo=[],Bo=0,Uu=null,Ja=0,Fi=[],Ui=0,cs=null,hr=1,pr="",Hn=y(null),Ka=y(null),fs=y(null),Ou=y(null),Cn=null,jt=null,ht=!1,ds=null,Oi=!1,zh=Error(o(519)),zu=y(null),$s=null,kr=null,B1=typeof AbortController<"u"?AbortController:function(){var n=[],i=this.signal={aborted:!1,addEventListener:function(a,l){n.push(l)}};this.abort=function(){i.aborted=!0,n.forEach(function(a){return a()})}},H1=yi.unstable_scheduleCallback,V1=yi.unstable_NormalPriority,nn={$$typeof:Nr,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0},Qa=null,Ho=null,Vo=null,Bh=!1,Bu=!1,Hh=!1,Ys=0,el=null,Vh=0,js=0,Go=null,Wv=Ze.S;Ze.S=function(n,i){if(jv=ci(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&ie(n,i),Qa!==null)for(var a=Ho;a!==null;)I(a,Qa),a=a.next;if(a=n.types,a!=null){for(var l=Ho;l!==null;)I(l,a),l=l.next;if(js!==0){l=Qa,l===null&&(l=Qa=[]);for(var f=0;f<a.length;f++){var h=a[f];l.indexOf(h)===-1&&l.push(h)}}}Wv!==null&&Wv(n,i)};var Zs=y(null),Wo=Error(o(460)),Gh=Error(o(474)),Hu=Error(o(542)),Vu={then:function(){}},Js=null,Xo=null,tl=0,Ks=ou(!0),Xv=ou(!1),zi=[],qo=0,Wh=0,hs=!1,Xh=!1,ps=y(null),Gu=y(0),Vn=y(null),ni=null,Gn=y(0),Fr=0,at=null,Ot=null,yn=null,Wu=!1,$o=!1,Qs=!1,Xu=0,nl=0,Yo=null,G1=0,qu={readContext:ot,use:Rr,useCallback:Fe,useContext:Fe,useEffect:Fe,useImperativeHandle:Fe,useLayoutEffect:Fe,useInsertionEffect:Fe,useMemo:Fe,useReducer:Fe,useRef:Fe,useState:Fe,useDebugValue:Fe,useDeferredValue:Fe,useTransition:Fe,useSyncExternalStore:Fe,useId:Fe,useHostTransitionStatus:Fe,useFormState:Fe,useActionState:Fe,useOptimistic:Fe,useMemoCache:Fe,useCacheRefresh:Fe,useEffectEvent:Fe},qv={readContext:ot,use:Rr,useCallback:function(n,i){return Lt().memoizedState=[n,i===void 0?null:i],n},useContext:ot,useEffect:Pg,useImperativeHandle:function(n,i,a){a=a!=null?a.concat([n]):null,uu(4194308,4,Dg.bind(null,i,n),a)},useLayoutEffect:function(n,i){return uu(4194308,4,n,i)},useInsertionEffect:function(n,i){uu(4,2,n,i)},useMemo:function(n,i){var a=Lt();i=i===void 0?null:i;var l=n();if(Qs){O(!0);try{n()}finally{O(!1)}}return a.memoizedState=[l,i],l},useReducer:function(n,i,a){var l=Lt();if(a!==void 0){var f=a(i);if(Qs){O(!0);try{a(i)}finally{O(!1)}}}else f=i;return l.memoizedState=l.baseState=f,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:f},l.queue=n,n=n.dispatch=gS.bind(null,at,n),[l.memoizedState,n]},useRef:function(n){var i=Lt();return n={current:n},i.memoizedState=n},useState:function(n){n=xd(n);var i=n.queue,a=Gg.bind(null,at,i);return i.dispatch=a,[n.memoizedState,a]},useDebugValue:Td,useDeferredValue:function(n,i){var a=Lt();return Ed(a,n,i)},useTransition:function(){var n=xd(!1);return n=zg.bind(null,at,n.queue,!0,!1),Lt().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,i,a){var l=at,f=Lt();if(ht){if(a===void 0)throw Error(o(407));a=a()}else{if(a=i(),Vt===null)throw Error(o(349));(xt&127)!==0||mn(l,i,a)}f.memoizedState=a;var h={value:a,getSnapshot:i};return f.queue=h,Pg(Ua.bind(null,l,h,n),[n]),l.flags|=2048,To(9,{destroy:void 0},Li.bind(null,l,h,a,i),null),a},useId:function(){var n=Lt(),i=Vt.identifierPrefix;if(ht){var a=pr,l=hr;a=(l&~(1<<32-_i(l)-1)).toString(32)+a,i="_"+i+"R_"+a,a=Xu++,0<a&&(i+="H"+a.toString(32)),i+="_"}else a=G1++,i="_"+i+"r_"+a.toString(32)+"_";return n.memoizedState=i},useHostTransitionStatus:Ad,useFormState:Tg,useActionState:Tg,useOptimistic:function(n){var i=Lt();i.memoizedState=i.baseState=n;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=Cd.bind(null,at,!0,a),a.dispatch=i,[n,i]},useMemoCache:Ni,useCacheRefresh:function(){return Lt().memoizedState=mS.bind(null,at)},useEffectEvent:function(n){var i=Lt(),a={impl:n};return i.memoizedState=a,function(){if((bt&2)!==0)throw Error(o(440));return a.impl.apply(void 0,arguments)}}},$v={readContext:ot,use:Rr,useCallback:Fg,useContext:ot,useEffect:wd,useImperativeHandle:kg,useInsertionEffect:Ng,useLayoutEffect:Lg,useMemo:Ug,useReducer:pt,useRef:Rg,useState:function(){return pt(Un)},useDebugValue:Td,useDeferredValue:function(n,i){var a=$e();return Og(a,Ot.memoizedState,n,i)},useTransition:function(){var n=pt(Un)[0],i=$e().memoizedState;return[typeof n=="boolean"?n:fn(n),i]},useSyncExternalStore:Wt,useId:Hg,useHostTransitionStatus:Ad,useFormState:Eg,useActionState:Eg,useOptimistic:function(n,i){var a=$e();return _g(a,Ot,n,i)},useMemoCache:Ni,useCacheRefresh:Vg,useEffectEvent:Ig},W1={readContext:ot,use:Rr,useCallback:Fg,useContext:ot,useEffect:wd,useImperativeHandle:kg,useInsertionEffect:Ng,useLayoutEffect:Lg,useMemo:Ug,useReducer:ti,useRef:Rg,useState:function(){return ti(Un)},useDebugValue:Td,useDeferredValue:function(n,i){var a=$e();return Ot===null?Ed(a,n,i):Og(a,Ot.memoizedState,n,i)},useTransition:function(){var n=ti(Un)[0],i=$e().memoizedState;return[typeof n=="boolean"?n:fn(n),i]},useSyncExternalStore:Wt,useId:Hg,useHostTransitionStatus:Ad,useFormState:Cg,useActionState:Cg,useOptimistic:function(n,i){var a=$e();return Ot!==null?_g(a,Ot,n,i):(a.baseState=n,[n,a.queue.dispatch])},useMemoCache:Ni,useCacheRefresh:Vg,useEffectEvent:Ig},qh={enqueueSetState:function(n,i,a){n=n._reactInternals;var l=vi(),f=ji(l);f.payload=i,a!=null&&(f.callback=a),i=li(n,f,l),i!==null&&(ui(i,n,l),Vs(i,n,l))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var l=vi(),f=ji(l);f.tag=1,f.payload=i,a!=null&&(f.callback=a),i=li(n,f,l),i!==null&&(ui(i,n,l),Vs(i,n,l))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=vi(),l=ji(a);l.tag=2,i!=null&&(l.callback=i),i=li(n,l,a),i!==null&&(ui(i,n,a),Vs(i,n,a))}},$h=Error(o(461)),_n=!1,Yh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null},Yn=!1,$u=!1,xi=null,mr=null,fi=0,Rn=!1,Dt=!1,gr=!1,jh=!1,Yv=typeof WeakSet=="function"?WeakSet:Set,Pn=null,vr=!1,il=!1,Yu=!1,Zh=!1,bn=null,di=!1,Ki=null,eo=8192,X1={getCacheForType:function(n){var i=ot(nn),a=i.data.get(n);return a===void 0&&(a=n(),i.data.set(n,a)),a},cacheSignal:function(){return ot(nn).controller.signal}},ju=0,Zu=1,Ju=2,Ku=3,Qu=4;if(typeof Symbol=="function"&&Symbol.for){var rl=Symbol.for;ju=rl("selector.component"),Zu=rl("selector.has_pseudo_class"),Ju=rl("selector.role"),Ku=rl("selector.test_id"),Qu=rl("selector.text")}var q1=typeof WeakMap=="function"?WeakMap:Map,bt=0,Vt=null,St=null,xt=0,Ft=0,Mi=null,ms=!1,jo=!1,Jh=!1,Ur=0,dn=0,gs=0,to=0,Kh=0,wi=0,Zo=0,sl=null,hi=null,Qh=!1,ec=0,jv=0,ol=1/0,tc=null,vs=null,rn=0,Qi=null,no=null,yr=0,ep=0,tp=null,Zv=null,Jo=null,Ko=null,Qo=null,al=0,nc=null;return _t.attemptContinuousHydration=function(n){if(n.tag===13||n.tag===31){var i=Yi(n,67108864);i!==null&&ui(i,n,67108864),yh(n,67108864)}},_t.attemptHydrationAtCurrentPriority=function(n){if(n.tag===13||n.tag===31){var i=vi();i=W(i);var a=Yi(n,i);a!==null&&ui(a,n,i),yh(n,i)}},_t.attemptSynchronousHydration=function(n){switch(n.tag){case 3:if(n=n.stateNode,n.current.memoizedState.isDehydrated){var i=S(n.pendingLanes);if(i!==0){for(n.pendingLanes|=2,n.entangledLanes|=2;i;){var a=1<<31-_i(i);n.entanglements[1]|=a,i&=~a}de(n),(bt&6)===0&&(ol=ci()+500,ue(0,!1))}}break;case 31:case 13:i=Yi(n,2),i!==null&&ui(i,n,2),q0(),yh(n,2)}},_t.batchedUpdates=function(n,i){return n(i)},_t.createComponentSelector=function(n){return{$$typeof:ju,value:n}},_t.createContainer=function(n,i,a,l,f,h,w,k,K,fe){return ov(n,i,!1,null,a,l,h,null,w,k,K,fe)},_t.createHasPseudoClassSelector=function(n){return{$$typeof:Zu,value:n}},_t.createHydrationContainer=function(n,i,a,l,f,h,w,k,K,fe,ge,Ce,De,mt){var Et;return n=ov(a,l,!0,n,f,h,k,mt,K,fe,ge,Ce),n.context=av(null),a=n.current,l=vi(),l=W(l),f=ji(l),f.callback=(Et=i)!=null?Et:null,li(a,f,l),i=l,n.current.lanes=i,M(n,i),de(n),n},_t.createPortal=function(n,i,a){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Lo,key:l==null?null:l===pv?pv:""+l,children:n,containerInfo:i,implementation:a}},_t.createRoleSelector=function(n){return{$$typeof:Ju,value:n}},_t.createTestNameSelector=function(n){return{$$typeof:Ku,value:n}},_t.createTextSelector=function(n){return{$$typeof:Qu,value:n}},_t.defaultOnCaughtError=function(n){console.error(n)},_t.defaultOnRecoverableError=function(n){Hv(n)},_t.defaultOnUncaughtError=function(n){Hv(n)},_t.deferredUpdates=function(n){var i=Ze.T,a=Lr();try{return An(32),Ze.T=null,n()}finally{An(a),Ze.T=i}},_t.discreteUpdates=function(n,i,a,l,f){var h=Ze.T,w=Lr();try{return An(2),Ze.T=null,n(i,a,l,f)}finally{An(w),Ze.T=h,bt===0&&(ol=ci()+500)}},_t.findAllNodes=ah,_t.findBoundingRects=function(n,i){if(!Ya)throw Error(o(363));i=ah(n,i),n=[];for(var a=0;a<i.length;a++)n.push(hx(i[a]));for(i=n.length-1;0<i;i--){a=n[i];for(var l=a.x,f=l+a.width,h=a.y,w=h+a.height,k=i-1;0<=k;k--)if(i!==k){var K=n[k],fe=K.x,ge=fe+K.width,Ce=K.y,De=Ce+K.height;if(l>=fe&&h>=Ce&&f<=ge&&w<=De){n.splice(i,1);break}else if(l!==fe||a.width!==K.width||De<h||Ce>w){if(!(h!==Ce||a.height!==K.height||ge<l||fe>f)){fe>l&&(K.width+=fe-l,K.x=l),ge<f&&(K.width=f-fe),n.splice(i,1);break}}else{Ce>h&&(K.height+=Ce-h,K.y=h),De<w&&(K.height=w-Ce),n.splice(i,1);break}}}return n},_t.findHostInstance=lv,_t.findHostInstanceWithNoPortals=function(n){return n=d(n),n=n!==null?m(n):null,n===null?null:$a(n.stateNode)},_t.findHostInstanceWithWarning=function(n){return lv(n)},_t.flushPassiveEffects=qa,_t.flushSyncFromReconciler=function(n){var i=bt;bt|=1;var a=Ze.T,l=Lr();try{if(An(2),Ze.T=null,n)return n()}finally{An(l),Ze.T=a,bt=i,(bt&6)===0&&ue(0,!1)}},_t.flushSyncWork=q0,_t.focusWithin=function(n,i){if(!Ya)throw Error(o(363));for(n=rh(n),i=V0(n,i),i=Array.from(i),n=0;n<i.length;){var a=i[n++],l=a.tag;if(!ja(a)){if((l===5||l===26||l===27)&&gx(a.stateNode))return!0;for(a=a.child;a!==null;)i.push(a),a=a.sibling}}return!1},_t.getFindAllNodesFailureDescription=function(n,i){if(!Ya)throw Error(o(363));var a=0,l=[];n=[rh(n),0];for(var f=0;f<n.length;){var h=n[f++],w=h.tag,k=n[f++],K=i[k];if((w!==5&&w!==26&&w!==27||!ja(h))&&(sh(h,K)&&(l.push(oh(K)),k++,k>a&&(a=k)),k<i.length))for(h=h.child;h!==null;)n.push(h,k),h=h.sibling}if(a<i.length){for(n=[];a<i.length;a++)n.push(oh(i[a]));return`findAllNodes was able to match part of the selector:
  `+(l.join(" > ")+`

No matching component was found for:
  `)+n.join(" > ")}return null},_t.getPublicRootInstance=function(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 27:case 5:return $a(n.child.stateNode);default:return n.child.stateNode}},_t.injectIntoDevTools=function(){var n={bundleType:0,version:WS,rendererPackageName:XS,currentDispatcherRef:Ze,reconcilerVersion:"19.3.0"};if(mv!==null&&(n.rendererConfig=mv),typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u")n=!1;else{var i=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(i.isDisabled||!i.supportsFiber)n=!0;else{try{Za=i.inject(n),bi=i}catch{}n=!!i.checkDCE}}return n},_t.isAlreadyRendering=function(){return(bt&6)!==0},_t.observeVisibleRects=function(n,i,a,l){if(!Ya)throw Error(o(363));n=ah(n,i);var f=vx(n,a,l).disconnect;return{disconnect:function(){f()}}},_t.shouldError=function(){return null},_t.shouldSuspend=function(){return!1},_t.startHostTransition=function(n,i,a,l){if(n.tag!==5)throw Error(o(476));var f=Bg(n).queue;zg(n,f,i,ko,a===null?s:function(){var h=Bg(n);return h.next===null&&(h=n.alternate.memoizedState),Oa(n,h.next.queue,{},vi()),a(l)})},_t.updateContainer=function(n,i,a,l){var f=i.current,h=vi();return uv(f,h,n,i,a,l),h},_t.updateContainerSync=function(n,i,a,l){return uv(i.current,2,n,i,a,l),2},_t},r.exports.default=r.exports,Object.defineProperty(r.exports,"__esModule",{value:!0})})(Jm)),Jm.exports}var BR={exports:{}};BR.exports;var $b;function HR(){return $b||($b=1,Xb.exports=zR()),Xb.exports}var VR=HR(),GR=OR(VR),gd={},WR=0,Sd=r=>`${r[0].toUpperCase()}${r.slice(1)}`;function XR(r){return r in gd}function ug(r){return gd[r]}function cg(r){if(typeof r=="function"){let e=`${WR++}`;return gd[e]=r,e}else Object.assign(gd,r)}function qR(r){let e=GR(r);return e.injectIntoDevTools(),e}var iS=0,$R=/^three(?=[A-Z])/;function rS(r,e){let t=Sd(r),s=ug(t);if(r!=="primitive"&&!s)throw new Error(`R3F: ${t} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);if(r==="primitive"&&!e.object)throw new Error("R3F: Primitives without 'object' are invalid!");if(e.args!==void 0&&!Array.isArray(e.args))throw new Error("R3F: The args prop must be an array!")}function YR(r,e,t){var s;return r=XR(Sd(r))?r:r.replace($R,""),rS(r,e),r==="primitive"&&(s=e.object)!=null&&s.__r3f&&delete e.object.__r3f,hd(e.object,t,r,e)}function jR(r){if(!r.isHidden){var e;r.props.attach&&(e=r.parent)!=null&&e.object?md(r.parent,r):ai(r.object)&&(r.previousVisible=r.object.visible,r.object.visible=!1),r.isHidden=!0,nu(r)}}function sS(r){if(r.isHidden){var e;if(r.props.attach&&(e=r.parent)!=null&&e.object)pd(r.parent,r);else if(ai(r.object)){var t;r.object.visible=(t=r.previousVisible)!=null?t:!0}r.previousVisible=void 0,r.isHidden=!1,nu(r)}}function fg(r,e,t){let s=e.root.getState();if(!(!r.parent&&r.object!==s.scene)){if(!e.object){var o,u;let c=ug(Sd(e.type));e.object=(o=e.props.object)!=null?o:new c(...(u=e.props.args)!=null?u:[]),e.object.__r3f=e}if(Fs(e.object,e.props),e.props.attach)pd(r,e);else if(ai(e.object)&&ai(r.object)){let c=r.object.children.indexOf(t?.object);if(t&&c!==-1){let d=r.object.children.indexOf(e.object);if(d!==-1){r.object.children.splice(d,1);let p=d<c?c-1:c;r.object.children.splice(p,0,e.object)}else e.object.parent=r.object,r.object.children.splice(c,0,e.object),e.object.dispatchEvent({type:"added"}),r.object.dispatchEvent({type:"childadded",child:e.object})}else r.object.add(e.object)}for(let c of e.children)fg(e,c);nu(e)}}function Gm(r,e){if(e){if(e.parent===r){let t=r.children.indexOf(e);t!==-1&&r.children.splice(t,1)}e.parent=r,r.children.push(e),fg(r,e)}}function Yb(r,e,t){if(!e||!t)return;if(e.parent===r){let o=r.children.indexOf(e);o!==-1&&r.children.splice(o,1)}e.parent=r;let s=r.children.indexOf(t);s!==-1?r.children.splice(s,0,e):r.children.push(e),fg(r,e,t)}function oS(r){if(typeof r.dispose=="function"){let e=()=>{try{r.dispose()}catch{}};typeof IS_REACT_ACT_ENVIRONMENT<"u"?e():(0,Wn.unstable_scheduleCallback)(Wn.unstable_IdlePriority,e)}}function Km(r,e,t){if(!e)return;let s=!!e.parent;e.parent=null;let o=r.children.indexOf(e);o!==-1&&r.children.splice(o,1),e.props.attach?md(r,e):ai(e.object)&&ai(r.object)&&(r.object.remove(e.object),xR(ng(e),e.object));let u=e.props.dispose!==null&&t!==!1;for(let d=e.children.length-1;d>=0;d--){let p=e.children[d];Km(e,p,u)}if(e.children.length=0,delete e.object.__r3f,u&&e.type!=="primitive"&&e.object.type!=="Scene"&&oS(e.object),t===void 0&&s){var c;let d=(c=e.root)==null||c.getState==null?void 0:c.getState();d&&d.internal.frames===0&&d.invalidate()}}function ZR(r,e){for(let t of[r,r.alternate])if(t!==null)if(typeof t.ref=="function"){t.refCleanup==null||t.refCleanup();let s=t.ref(e);typeof s=="function"&&(t.refCleanup=s)}else t.ref&&(t.ref.current=e)}var tu=[];function JR(){if(tu.length!==0)try{KR()}finally{tu.length=0}}function KR(){for(let[t]of tu){let s=t.parent;if(s){t.props.attach?md(s,t):ai(t.object)&&ai(s.object)&&s.object.remove(t.object);for(let o of t.children)o.props.attach?md(t,o):ai(o.object)&&ai(t.object)&&t.object.remove(o.object)}t.isHidden&&sS(t),t.object.__r3f&&delete t.object.__r3f,t.type!=="primitive"&&oS(t.object)}for(let[t,s,o]of tu){t.props=s;let u=t.parent;if(u){var r,e;let c=ug(Sd(t.type)),d=t.object;t.object=(r=t.props.object)!=null?r:new c(...(e=t.props.args)!=null?e:[]),t.object.__r3f=t,ZR(o,t.object),SR(ng(t),d,t.object),Fs(t.object,t.props),t.props.attach?pd(u,t):ai(t.object)&&ai(u.object)&&u.object.add(t.object);for(let p of t.children)p.props.attach?pd(t,p):ai(p.object)&&ai(t.object)&&t.object.add(p.object);nu(t)}}}var Wm=()=>{},jb={},fd=iS;function QR(r){switch(r){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return Wb;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return Gb;case"message":switch((0,Wn.unstable_getCurrentPriorityLevel)()){case Wn.unstable_ImmediatePriority:return Wb;case Wn.unstable_UserBlockingPriority:return Gb;case Wn.unstable_NormalPriority:case Wn.unstable_LowPriority:return dd;case Wn.unstable_IdlePriority:return NR;default:return dd}default:return dd}}function e2(r){typeof queueMicrotask=="function"?queueMicrotask(r):typeof Promise<"u"?Promise.resolve().then(r).catch(e=>{setTimeout(()=>{throw e})}):setTimeout(r)}var xo=qR({isPrimaryRenderer:!1,warnsIfNotActing:!1,supportsMutation:!0,supportsPersistence:!1,supportsHydration:!1,createInstance:YR,removeChild:Km,appendChild:Gm,appendInitialChild:Gm,insertBefore:Yb,appendChildToContainer(r,e){let t=r.getState().scene.__r3f;!e||!t||Gm(t,e)},removeChildFromContainer(r,e){let t=r.getState().scene.__r3f;!e||!t||Km(t,e)},insertInContainerBefore(r,e,t){let s=r.getState().scene.__r3f;!e||!t||!s||Yb(s,e,t)},getRootHostContext:()=>jb,getChildHostContext:()=>jb,commitUpdate(r,e,t,s,o){var u,c,d;rS(e,s);let p=!1;if((r.type==="primitive"&&t.object!==s.object||((u=s.args)==null?void 0:u.length)!==((c=t.args)==null?void 0:c.length)||(d=s.args)!=null&&d.some((m,g)=>{var _;return m!==((_=t.args)==null?void 0:_[g])}))&&(p=!0),p)tu.push([r,jm(s),o]);else{let m=mR(r,s),g=r.props.attach;r.props=jm(s),g!==void 0?r.props.attach=g:delete r.props.attach,Object.keys(m).length&&Fs(r.object,m)}},finalizeInitialChildren:()=>!1,commitMount(){},getPublicInstance:r=>r?.object,prepareForCommit:()=>null,preparePortalMount:r=>hd(r.getState().scene,r,"",{}),resetAfterCommit:JR,shouldSetTextContent:()=>!1,clearContainer:()=>!1,hideInstance:jR,unhideInstance:sS,createTextInstance:Wm,hideTextInstance:Wm,unhideTextInstance:Wm,supportsMicrotasks:!0,scheduleMicrotask:e2,scheduleTimeout:typeof setTimeout=="function"?setTimeout:void 0,cancelTimeout:typeof clearTimeout=="function"?clearTimeout:void 0,noTimeout:-1,getInstanceFromNode:()=>null,beforeActiveInstanceBlur(){},afterActiveInstanceBlur(){},detachDeletedInstance(){},prepareScopeUpdate(){},getInstanceFromScope:()=>null,shouldAttemptEagerTransition:()=>!1,trackSchedulerEvent:()=>{},resolveEventType:()=>null,resolveEventTimeStamp:()=>-1.1,requestPostPaintCallback(){},maySuspendCommit:()=>!1,preloadInstance:()=>!0,suspendInstance(){},waitForCommitToBeReady:()=>null,NotPendingTransition:null,HostTransitionContext:Kt.createContext(null),setCurrentUpdatePriority(r){fd=r},getCurrentUpdatePriority(){return fd},resolveUpdatePriority(){var r;if(fd!==iS)return fd;let e=typeof window<"u"?(r=window.event)==null?void 0:r.type:void 0;return e===void 0?dd:QR(e)},resetFormInstance(){},rendererPackageName:"@react-three/fiber",rendererVersion:UR.version,applyViewTransitionName(r,e,t){},restoreViewTransitionName(r,e){},cancelViewTransitionName(r,e,t){},cancelRootViewTransitionName(r){},restoreRootViewTransitionName(r){},InstanceMeasurement:null,measureInstance:r=>null,wasInstanceInViewport:r=>!0,hasInstanceChanged:(r,e)=>!1,hasInstanceAffectedParent:(r,e)=>!1,suspendOnActiveViewTransition(r,e){},startViewTransition(r,e,t,s,o,u,c,d,p,m,g){return s(),o(),g?.(),c(),null},startGestureTransition(r,e,t,s,o,u,c,d,p,m){return c(),d(),m?.(),null},stopViewTransition(r){},addViewTransitionFinishedListener(r,e){e()},createViewTransitionInstance:r=>null,getCurrentGestureOffset(r){throw new Error("startGestureTransition is not yet supported in react-three-fiber.")},cloneMutableInstance(r,e){return r},cloneMutableTextInstance(r){return r},cloneRootViewTransitionContainer(r){throw new Error("Not implemented.")},removeRootViewTransitionClone(r,e){throw new Error("Not implemented.")},createFragmentInstance:r=>null,updateFragmentInstanceFiber(r,e){},commitNewChildToFragmentInstance(r,e){},deleteChildFromFragmentInstance(r,e){},measureClonedInstance:r=>null,maySuspendCommitOnUpdate:(r,e,t)=>!1,maySuspendCommitInSyncRender:(r,e)=>!1,startSuspendingCommit:()=>null,getSuspendedCommitReason:(r,e)=>null});var ts=new Map;function vd(r,e){let t=r.state;switch(e.type){case"use":return t.status==="disposed"?!1:(r.state={status:"open"},!0);case"unmount":return t.status==="disposed"?!1:(r.state={status:"closing",token:e.token},!0);case"dispose":return t.status!=="closing"||t.token!==e.token?!1:(r.state={status:"disposed"},!0)}}function dg(r){let e=ts.get(r),t=e?.fiber,s=e?.store;e&&console.warn("R3F.createRoot should only be called once!");let o=typeof reportError=="function"?reportError:console.error,u=s||RR(Pi,hg),c=t||xo.createContainer(u,IR,null,!1,null,"",o,o,o,null),d=e||{fiber:c,store:u,state:{status:"open"},ready:MR(void 0),configuration:{},ownsRenderer:!1};e||ts.set(r,d);let p=!1;return{get ready(){return d.ready},configure(m={}){if(!vd(d,{type:"use"}))return wR(new Error("R3F: Cannot configure a root after disposal has started."));let g=d.ready,{promise:_,resolve:y,reject:b}=TR();d.ready=_;let x=S=>{let v=u.getState();v.gl||(d.ownsRenderer=!sg(m.gl),v.set({gl:S})),kR(d,r,m),!d.unwatchDpr&&(m.dpr===void 0||Array.isArray(m.dpr))&&(d.unwatchDpr=FR(d)),y(this)},C=()=>{try{var S;let v=(S=u.getState().gl)!=null?S:ER(r,m.gl);rg(v)?Promise.resolve(v).then(x).catch(b):x(v)}catch(v){b(v)}};return g.status==="pending"?g.then(C,b):C(),_},render(m){if(!vd(d,{type:"use"}))return u;if(!u.getState().gl&&d.ready.status==="fulfilled"&&this.configure(),d.ready.status==="rejected")throw d.ready.reason;let g=()=>{var _;if(d.state.status!=="open"||d.ready.status==="rejected")return;if(d.ready.status==="pending"){d.ready.then(g,o);return}let y=(_=d.configuration.previous)==null?void 0:_.onCreated,b=(0,_d.jsx)(t2,{store:u,children:m,onCreated:y,rootElement:r});if(p){xo.updateContainer(b,c,null,zb);return}p=!0,xo.updateContainerSync(b,c,null,zb),xo.flushSyncWork()};return g(),u},unmount(){ts.get(r)===d&&aS(r)}}}function t2({store:r,children:e,onCreated:t,rootElement:s}){return tg(()=>{let o=r.getState();o.set(u=>({internal:{...u.internal,active:!0}})),t&&t(o),r.getState().events.connected||o.events.connect==null||o.events.connect(s)},[]),(0,_d.jsx)(og.Provider,{value:r,children:e})}function Kl(r){try{return r()}catch(e){console.warn("[R3F] Error while unmounting root; teardown may be incomplete:",e)}}function aS(r,e){let t=ts.get(r),s=Symbol("unmount");if(!t||!vd(t,{type:"unmount",token:s}))return;let o=()=>{var u;if(t.ready.status==="pending"){t.ready.then(o,o);return}if(!vd(t,{type:"dispose",token:s}))return;ts.delete(r);let c=t.store.getState();c.internal.active=!1,Kl(()=>t.unwatchDpr==null?void 0:t.unwatchDpr()),Kl(()=>c.events.disconnect==null?void 0:c.events.disconnect()),(u=c.gl)!=null&&u.xr&&Kl(()=>c.xr.disconnect()),c.scene&&Kl(()=>eS(c.scene));let d=Kl(()=>CR(c.gl,t.ownsRenderer));rg(d)?d.then(()=>e?.(r)):e?.(r)};xo.updateContainer(null,t.fiber,null,()=>{t.state.status!=="closing"||t.state.token!==s||xo.updateContainer(null,t.fiber,null,o)})}var n2=new Set,i2=new Set,r2=new Set;function Xm(r,e){if(r.size)for(let{callback:t}of r.values())t(e)}function Da(r,e){switch(r){case"before":return Xm(n2,e);case"after":return Xm(i2,e);case"tail":return Xm(r2,e)}}var qm,$m;function Qm(r,e,t){let s=e.clock.getDelta();e.frameloop==="never"&&typeof r=="number"&&(s=r-e.clock.elapsedTime,e.clock.oldTime=e.clock.elapsedTime,e.clock.elapsedTime=r),qm=e.internal.subscribers;for(let o=0;o<qm.length;o++)$m=qm[o],$m.ref.current($m.store.getState(),s,t);return!e.internal.priority&&e.gl.render&&e.gl.render(e.scene,e.camera),e.internal.frames=Math.max(0,e.internal.frames-1),e.frameloop==="always"?1:e.internal.frames}var yd=!1,eg=!1,Ym,Zb,La;function lS(r){Zb=requestAnimationFrame(lS),yd=!0,Ym=0,Da("before",r),eg=!0;for(let t of ts.values()){var e;La=t.store.getState(),La.internal.active&&(La.frameloop==="always"||La.internal.frames>0)&&!((e=La.gl.xr)!=null&&e.isPresenting)&&(Ym+=Qm(r,La))}if(eg=!1,Da("after",r),Ym===0)return Da("tail",r),yd=!1,cancelAnimationFrame(Zb)}function Pi(r,e=1){var t;if(!r)return ts.forEach(s=>Pi(s.store.getState(),e));(t=r.gl.xr)!=null&&t.isPresenting||!r.internal.active||r.frameloop==="never"||(e>1?r.internal.frames=Math.min(60,r.internal.frames+e):eg?r.internal.frames=2:r.internal.frames=1,yd||(yd=!0,requestAnimationFrame(lS)))}function hg(r,e=!0,t,s){if(e&&Da("before",r),t)Qm(r,t,s);else for(let o of ts.values())Qm(r,o.store.getState());e&&Da("after",r)}var Us=Bi(bs());var uS=Bi(Yl());var MN=Bi(Vm());var Os=Bi(bs()),on=Bi(Yl());cg({Group:Wr,Mesh:Gi,LineSegments:Sl,AmbientLight:Nl,DirectionalLight:Il});var At={target:0,p:0,tiltX:0,tiltY:0,tx:0,ty:0,visible:!0,still:!1},mg=new st("#C9A6FF"),s2=new st("#E9B949"),o2=new st("#6B2FD6"),a2=r=>1-Math.pow(1-r,3),gg=r=>r<0?0:r>1?1:r,Mn=(r,e,t)=>new Cs(r,e,t),ru=(r,e,t=18)=>new El(r,r,e,t),ct={rail:Mn(28,2,2),railZ:Mn(2,2,24),cross:Mn(2,1.5,24),bellypan:Mn(24,.25,24),footprint:Mn(34,.05,34),wheel:ru(2,1.6,20),module:Mn(5,3,5),motor:ru(1.05,3.6,16),tower:Mn(2,40,2),inner:Mn(1.4,30,1.4),topbar:Mn(16,1.6,1.6),chain:Mn(.3,36,.3),gearbox:ru(1.4,4,16),carriage:Mn(14,3,2),roller:ru(1.1,22,16),arm:Mn(2,1.5,9),sideplate:Mn(.5,6,9),board:Mn(18,.3,13),rio:Mn(5,1.2,4),pdh:Mn(6,1.4,5),battery:Mn(7,6,3),radio:Mn(4,1,2.6),breaker:ru(.8,1.2,14),bumperX:Mn(34,5,3),bumperZ:Mn(3,5,28),plate:new fo(14,3.2)},pg=new Map,fS=r=>(pg.has(r)||pg.set(r,new Al(r,20)),pg.get(r)),su=Math.PI/2,l2=[{at:.16,drop:8,items:[[ct.rail,[0,3,13]],[ct.rail,[0,3,-13]],[ct.railZ,[13,3,0]],[ct.railZ,[-13,3,0]],[ct.cross,[-4,2.75,0]],[ct.cross,[4,2.75,0]],[ct.bellypan,[0,2.1,0],null,"dark"]]},{at:.33,drop:10,items:[13,-13].flatMap(r=>[13,-13].flatMap(e=>{let t=r*.86,s=e*.86;return[[ct.module,[t,4.5,s]],[ct.wheel,[t,2,s],[0,0,su],"dark"],[ct.motor,[t-1.2,7.6,s],null,"dark"],[ct.motor,[t+1.3,7.6,s+.4],null,"dark"]]}))},{at:.5,drop:14,items:[[ct.tower,[-7,22,-6]],[ct.tower,[7,22,-6]],[ct.inner,[-5.4,26,-6]],[ct.inner,[5.4,26,-6]],[ct.topbar,[0,41.3,-6]],[ct.chain,[-7,22,-4.8],null,"dark"],[ct.chain,[7,22,-4.8],null,"dark"],[ct.gearbox,[0,5.6,-8],[0,0,su],"dark"],[ct.carriage,[0,30,-4.5]],[ct.arm,[-6,30,.5]],[ct.arm,[6,30,.5]],[ct.roller,[0,30,5],[0,0,su],"dark"],[ct.roller,[0,4.5,15.5],[0,0,su],"dark"],[ct.roller,[0,8,14],[0,0,su],"dark"],[ct.sideplate,[-11.3,6,13]],[ct.sideplate,[11.3,6,13]]]},{at:.66,drop:8,items:[[ct.board,[0,4.4,2]],[ct.rio,[-4,5.2,3]],[ct.pdh,[4.5,5.2,1]],[ct.radio,[4.5,5.1,6]],[ct.breaker,[-6.5,5.2,-1.5],null,"dark"],[ct.battery,[0,6.5,9],null,"dark"]]},{at:.82,drop:8,items:[[ct.bumperX,[0,3.5,16.5],null,"bumper"],[ct.bumperX,[0,3.5,-16.5],null,"bumper"],[ct.bumperZ,[16.5,3.5,0],null,"bumper"],[ct.bumperZ,[-16.5,3.5,0],null,"bumper"]],plates:!0}],cS=new Y(0,21,0),u2=new Y(70,52,78).normalize(),c2=31;function f2(){let r=iu(s=>s.camera),e=iu(s=>s.size.width),t=iu(s=>s.size.height);return(0,Os.useLayoutEffect)(()=>{if(!e||!t)return;let s=r.fov*Math.PI/180,o=2*Math.atan(Math.tan(s/2)*(e/t)),u=c2/Math.sin(Math.min(s,o)/2);r.position.copy(u2).multiplyScalar(u).add(cS),r.lookAt(cS),r.updateProjectionMatrix(),Pi()},[r,e,t]),null}function d2(){let r=document.createElement("canvas");r.width=512,r.height=118;let e=r.getContext("2d");e.fillStyle="#ffffff",e.textAlign="center",e.textBaseline="middle",e.font='italic 900 104px Saira, "Arial Narrow", sans-serif',e.fillText("11745",256,64);let t=new Ml(r);return t.colorSpace=Nn,t.anisotropy=4,t}function h2({at:r,drop:e,items:t,plates:s}){let o=(0,Os.useRef)(),u=(0,Os.useMemo)(()=>({line:new co({color:mg.clone(),transparent:!0,opacity:.12}),frame:new ho({color:"#241638",metalness:.55,roughness:.45,transparent:!0,opacity:0}),dark:new ho({color:"#0f0b16",metalness:.2,roughness:.8,transparent:!0,opacity:0}),bumper:new ho({color:o2.clone(),metalness:0,roughness:.9,transparent:!0,opacity:0}),plate:s?new xa({map:d2(),transparent:!0,opacity:0,depthWrite:!1}):null}),[s]);return bd(()=>{let c=gg((At.p-r)/.12),d=a2(c),p=gg((At.p-.9)/.08);o.current.position.y=c>0?(1-d)*e:0,u.line.opacity=.12+.88*d,u.line.color.copy(mg).lerp(s2,p),u.frame.opacity=.85*d,u.dark.opacity=.95*d,u.bumper.opacity=.97*d,u.plate&&(u.plate.opacity=d)}),(0,on.jsxs)("group",{ref:o,children:[t.map(([c,d,p,m="frame"],g)=>(0,on.jsxs)("group",{position:d,rotation:p||[0,0,0],children:[(0,on.jsx)("mesh",{geometry:c,material:u[m]}),(0,on.jsx)("lineSegments",{geometry:fS(c),material:u.line})]},g)),s&&(0,on.jsxs)(on.Fragment,{children:[(0,on.jsx)("mesh",{geometry:ct.plate,material:u.plate,position:[0,3.5,18.06]}),(0,on.jsx)("mesh",{geometry:ct.plate,material:u.plate,position:[0,3.5,-18.06],rotation:[0,Math.PI,0]})]})]})}function p2(){let r=(0,Os.useMemo)(()=>new co({color:mg.clone(),transparent:!0,opacity:.35}),[]);return(0,on.jsx)("lineSegments",{geometry:fS(ct.footprint),material:r,position:[0,0,0]})}function m2(){let r=(0,Os.useRef)();return bd((e,t)=>{let s=At.still?1:1-Math.exp(-t*7);At.p+=(At.target-At.p)*s,At.tiltX+=(At.tx-At.tiltX)*s,At.tiltY+=(At.ty-At.tiltY)*s,r.current.rotation.y=.65+At.p*Math.PI*1.25+At.tiltY*.35,r.current.rotation.x=At.tiltX*.12,(Math.abs(At.target-At.p)>4e-4||Math.abs(At.tx-At.tiltX)>.001||Math.abs(At.ty-At.tiltY)>.001)&&At.visible&&Pi()}),(0,on.jsxs)("group",{ref:r,children:[(0,on.jsx)(p2,{}),l2.map((e,t)=>(0,on.jsx)(h2,{...e},t))]})}function g2(){return(0,on.jsxs)(on.Fragment,{children:[(0,on.jsx)("ambientLight",{intensity:.7}),(0,on.jsx)("directionalLight",{position:[30,60,40],intensity:2.2}),(0,on.jsx)("directionalLight",{position:[-40,20,-30],intensity:1.4,color:"#8B3DFF"}),(0,on.jsx)(m2,{}),(0,on.jsx)(f2,{})]})}window.Robot3D={mount(r,{reduce:e=!1,label:t=""}={}){let s=document.createElement("canvas");s.className="robot3d",s.setAttribute("role","img"),t&&s.setAttribute("aria-label",t),r.prepend(s),At.still=e;let o=dg(s),u=()=>{let c=r.getBoundingClientRect();o.configure({size:{width:c.width,height:c.height,top:0,left:0},dpr:Math.min(window.devicePixelRatio||1,2),frameloop:"demand",flat:!0,gl:{antialias:!0,alpha:!0,powerPreference:"high-performance",toneMapping:pi},camera:{fov:30,near:1,far:800}}),Pi()};return u(),o.render((0,on.jsx)(g2,{})),new ResizeObserver(u).observe(r),new IntersectionObserver(([c])=>{At.visible=c.isIntersecting,At.visible&&Pi()},{rootMargin:"100px"}).observe(r),!e&&matchMedia("(hover: hover) and (pointer: fine)").matches&&(r.addEventListener("pointermove",c=>{let d=r.getBoundingClientRect();At.ty=((c.clientX-d.left)/d.width-.5)*2,At.tx=((c.clientY-d.top)/d.height-.5)*2,Pi()}),r.addEventListener("pointerleave",()=>{At.tx=0,At.ty=0,Pi()})),document.fonts?.ready.then(()=>Pi()),!0},setProgress(r){At.target=gg(r),At.still&&(At.p=At.target),Pi()}};})();
