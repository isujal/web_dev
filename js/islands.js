(()=>{var LM=Object.create;var Ay=Object.defineProperty;var DM=Object.getOwnPropertyDescriptor;var kM=Object.getOwnPropertyNames;var FM=Object.getPrototypeOf,UM=Object.prototype.hasOwnProperty;var Ar=(r,e)=>()=>{try{return e||r((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};var OM=(r,e,t,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of kM(e))!UM.call(r,o)&&o!==t&&Ay(r,o,{get:()=>e[o],enumerable:!(s=DM(e,o))||s.enumerable});return r};var ci=(r,e,t)=>(t=r!=null?LM(FM(r)):{},OM(e||!r||!r.__esModule?Ay(t,"default",{value:r,enumerable:!0}):t,r));var By=Ar(it=>{"use strict";var Ip=Symbol.for("react.transitional.element"),zM=Symbol.for("react.portal"),BM=Symbol.for("react.fragment"),HM=Symbol.for("react.strict_mode"),VM=Symbol.for("react.profiler"),GM=Symbol.for("react.consumer"),WM=Symbol.for("react.context"),XM=Symbol.for("react.forward_ref"),qM=Symbol.for("react.suspense"),$M=Symbol.for("react.memo"),Ny=Symbol.for("react.lazy"),YM=Symbol.for("react.activity"),jM=Symbol.for("react.view_transition"),Ry=Symbol.iterator;function ZM(r){return r===null||typeof r!="object"?null:(r=Ry&&r[Ry]||r["@@iterator"],typeof r=="function"?r:null)}var Ly={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Dy=Object.assign,ky={};function ma(r,e,t){this.props=r,this.context=e,this.refs=ky,this.updater=t||Ly}ma.prototype.isReactComponent={};ma.prototype.setState=function(r,e){if(typeof r!="object"&&typeof r!="function"&&r!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,r,e,"setState")};ma.prototype.forceUpdate=function(r){this.updater.enqueueForceUpdate(this,r,"forceUpdate")};function Fy(){}Fy.prototype=ma.prototype;function Np(r,e,t){this.props=r,this.context=e,this.refs=ky,this.updater=t||Ly}var Lp=Np.prototype=new Fy;Lp.constructor=Np;Dy(Lp,ma.prototype);Lp.isPureReactComponent=!0;var Cy=Array.isArray;function Pp(){}var jt={H:null,A:null,T:null,S:null},Uy=Object.prototype.hasOwnProperty;function Dp(r,e,t){var s=t.ref;return{$$typeof:Ip,type:r,key:e,ref:s!==void 0?s:null,props:t}}function JM(r,e){return Dp(r.type,e,r.props)}function kp(r){return typeof r=="object"&&r!==null&&r.$$typeof===Ip}function KM(r){var e={"=":"=0",":":"=2"};return"$"+r.replace(/[=:]/g,function(t){return e[t]})}var Py=/\/+/g;function Cp(r,e){return typeof r=="object"&&r!==null&&r.key!=null?KM(""+r.key):e.toString(36)}function QM(r){switch(r.status){case"fulfilled":return r.value;case"rejected":throw r.reason;default:switch(typeof r.status=="string"?r.then(Pp,Pp):(r.status="pending",r.then(function(e){r.status==="pending"&&(r.status="fulfilled",r.value=e)},function(e){r.status==="pending"&&(r.status="rejected",r.reason=e)})),r.status){case"fulfilled":return r.value;case"rejected":throw r.reason}}throw r}function pa(r,e,t,s,o){var l=typeof r;(l==="undefined"||l==="boolean")&&(r=null);var c=!1;if(r===null)c=!0;else switch(l){case"bigint":case"string":case"number":c=!0;break;case"object":switch(r.$$typeof){case Ip:case zM:c=!0;break;case Ny:return c=r._init,pa(c(r._payload),e,t,s,o)}}if(c)return o=o(r),c=s===""?"."+Cp(r,0):s,Cy(o)?(t="",c!=null&&(t=c.replace(Py,"$&/")+"/"),pa(o,e,t,"",function(m){return m})):o!=null&&(kp(o)&&(o=JM(o,t+(o.key==null||r&&r.key===o.key?"":(""+o.key).replace(Py,"$&/")+"/")+c)),e.push(o)),1;c=0;var f=s===""?".":s+":";if(Cy(r))for(var h=0;h<r.length;h++)s=r[h],l=f+Cp(s,h),c+=pa(s,e,t,l,o);else if(h=ZM(r),typeof h=="function")for(r=h.call(r),h=0;!(s=r.next()).done;)s=s.value,l=f+Cp(s,h++),c+=pa(s,e,t,l,o);else if(l==="object"){if(typeof r.then=="function")return pa(QM(r),e,t,s,o);throw e=String(r),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return c}function Rc(r,e,t){if(r==null)return r;var s=[],o=0;return pa(r,s,"","",function(l){return e.call(t,l,o++)}),s}function ew(r){if(r._status===-1){var e=r._result,t=e();t.then(function(s){(r._status===0||r._status===-1)&&(r._status=1,r._result=s,t.status===void 0&&(t.status="fulfilled",t.value=s))},function(s){(r._status===0||r._status===-1)&&(r._status=2,r._result=s,t.status===void 0&&(t.status="rejected",t.reason=s))}),r._status===-1&&(r._status=0,r._result=t)}if(r._status===1)return r._result.default;throw r._result}var Iy=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)};function Oy(r){var e=jt.T,t={};t.types=e!==null?e.types:null,jt.T=t;try{var s=r(),o=jt.S;o!==null&&o(t,s),typeof s=="object"&&s!==null&&typeof s.then=="function"&&s.then(Pp,Iy)}catch(l){Iy(l)}finally{e!==null&&t.types!==null&&(e.types=t.types),jt.T=e}}function zy(r){var e=jt.T;if(e!==null){var t=e.types;t===null?e.types=[r]:t.indexOf(r)===-1&&t.push(r)}else Oy(zy.bind(null,r))}var tw={map:Rc,forEach:function(r,e,t){Rc(r,function(){e.apply(this,arguments)},t)},count:function(r){var e=0;return Rc(r,function(){e++}),e},toArray:function(r){return Rc(r,function(e){return e})||[]},only:function(r){if(!kp(r))throw Error("React.Children.only expected to receive a single React element child.");return r}};it.Activity=YM;it.Children=tw;it.Component=ma;it.Fragment=BM;it.Profiler=VM;it.PureComponent=Np;it.StrictMode=HM;it.Suspense=qM;it.ViewTransition=jM;it.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=jt;it.__COMPILER_RUNTIME={__proto__:null,c:function(r){return jt.H.useMemoCache(r)}};it.addTransitionType=zy;it.cache=function(r){return function(){return r.apply(null,arguments)}};it.cacheSignal=function(){return null};it.cloneElement=function(r,e,t){if(r==null)throw Error("The argument must be a React element, but you passed "+r+".");var s=Dy({},r.props),o=r.key;if(e!=null)for(l in e.key!==void 0&&(o=""+e.key),e)!Uy.call(e,l)||l==="key"||l==="__self"||l==="__source"||l==="ref"&&e.ref===void 0||(s[l]=e[l]);var l=arguments.length-2;if(l===1)s.children=t;else if(1<l){for(var c=Array(l),f=0;f<l;f++)c[f]=arguments[f+2];s.children=c}return Dp(r.type,o,s)};it.createContext=function(r){return r={$$typeof:WM,_currentValue:r,_currentValue2:r,_threadCount:0,Provider:null,Consumer:null},r.Provider=r,r.Consumer={$$typeof:GM,_context:r},r};it.createElement=function(r,e,t){var s,o={},l=null;if(e!=null)for(s in e.key!==void 0&&(l=""+e.key),e)Uy.call(e,s)&&s!=="key"&&s!=="__self"&&s!=="__source"&&(o[s]=e[s]);var c=arguments.length-2;if(c===1)o.children=t;else if(1<c){for(var f=Array(c),h=0;h<c;h++)f[h]=arguments[h+2];o.children=f}if(r&&r.defaultProps)for(s in c=r.defaultProps,c)o[s]===void 0&&(o[s]=c[s]);return Dp(r,l,o)};it.createRef=function(){return{current:null}};it.forwardRef=function(r){return{$$typeof:XM,render:r}};it.isValidElement=kp;it.lazy=function(r){return{$$typeof:Ny,_payload:{_status:-1,_result:r},_init:ew}};it.memo=function(r,e){return{$$typeof:$M,type:r,compare:e===void 0?null:e}};it.startTransition=Oy;it.unstable_useCacheRefresh=function(){return jt.H.useCacheRefresh()};it.use=function(r){return jt.H.use(r)};it.useActionState=function(r,e,t){return jt.H.useActionState(r,e,t)};it.useCallback=function(r,e){return jt.H.useCallback(r,e)};it.useContext=function(r){return jt.H.useContext(r)};it.useDebugValue=function(){};it.useDeferredValue=function(r,e){return jt.H.useDeferredValue(r,e)};it.useEffect=function(r,e){return jt.H.useEffect(r,e)};it.useEffectEvent=function(r){return jt.H.useEffectEvent(r)};it.useId=function(){return jt.H.useId()};it.useImperativeHandle=function(r,e,t){return jt.H.useImperativeHandle(r,e,t)};it.useInsertionEffect=function(r,e){return jt.H.useInsertionEffect(r,e)};it.useLayoutEffect=function(r,e){return jt.H.useLayoutEffect(r,e)};it.useMemo=function(r,e){return jt.H.useMemo(r,e)};it.useOptimistic=function(r,e){return jt.H.useOptimistic(r,e)};it.useReducer=function(r,e,t){return jt.H.useReducer(r,e,t)};it.useRef=function(r){return jt.H.useRef(r)};it.useState=function(r){return jt.H.useState(r)};it.useSyncExternalStore=function(r,e,t){return jt.H.useSyncExternalStore(r,e,t)};it.useTransition=function(){return jt.H.useTransition()};it.version="19.3.1"});var Yr=Ar((NP,Hy)=>{"use strict";Hy.exports=By()});var W_=Ar(Nd=>{"use strict";var zC=Symbol.for("react.transitional.element"),BC=Symbol.for("react.fragment");function G_(r,e,t){var s=null;if(t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),"key"in e){t={};for(var o in e)o!=="key"&&(t[o]=e[o])}else t=e;return e=t.ref,{$$typeof:zC,type:r,key:s,ref:e!==void 0?e:null,props:t}}Nd.Fragment=BC;Nd.jsx=G_;Nd.jsxs=G_});var Lo=Ar((QN,X_)=>{"use strict";X_.exports=W_()});var $_=Ar(q_=>{"use strict";var Qa=Yr();function HC(r,e){return r===e&&(r!==0||1/r===1/e)||r!==r&&e!==e}var VC=typeof Object.is=="function"?Object.is:HC,GC=Qa.useState,WC=Qa.useEffect,XC=Qa.useLayoutEffect,qC=Qa.useDebugValue;function $C(r,e){var t=e(),s=GC({inst:{value:t,getSnapshot:e}}),o=s[0].inst,l=s[1];return XC(function(){o.value=t,o.getSnapshot=e,cg(o)&&l({inst:o})},[r,t,e]),WC(function(){return cg(o)&&l({inst:o}),r(function(){cg(o)&&l({inst:o})})},[r]),qC(t),t}function cg(r){var e=r.getSnapshot;r=r.value;try{var t=e();return!VC(r,t)}catch{return!0}}function YC(r,e){return e()}var jC=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?YC:$C;q_.useSyncExternalStore=Qa.useSyncExternalStore!==void 0?Qa.useSyncExternalStore:jC});var j_=Ar((tL,Y_)=>{"use strict";Y_.exports=$_()});var J_=Ar(Z_=>{"use strict";var Ld=Yr(),ZC=j_();function JC(r,e){return r===e&&(r!==0||1/r===1/e)||r!==r&&e!==e}var KC=typeof Object.is=="function"?Object.is:JC,QC=ZC.useSyncExternalStore,e2=Ld.useRef,t2=Ld.useEffect,n2=Ld.useMemo,i2=Ld.useDebugValue;Z_.useSyncExternalStoreWithSelector=function(r,e,t,s,o){var l=e2(null);if(l.current===null){var c={hasValue:!1,value:null};l.current=c}else c=l.current;l=n2(function(){function h(g){if(!m){if(m=!0,v=g,g=s(g),o!==void 0&&c.hasValue){var x=c.value;if(o(x,g))return _=x}return _=g}if(x=_,KC(v,g))return x;var R=s(g);return o!==void 0&&o(x,R)?(v=g,x):(v=g,_=R)}var m=!1,v,_,b=t===void 0?null:t;return[function(){return h(e())},b===null?void 0:function(){return h(b())}]},[e,t,s,o]);var f=QC(r,l[0],l[1]);return t2(function(){c.hasValue=!0,c.value=f},[f]),i2(f),f}});var Q_=Ar((iL,K_)=>{"use strict";K_.exports=J_()});var _S=Ar(tn=>{"use strict";function pg(r,e){var t=r.length;r.push(e);e:for(;0<t;){var s=t-1>>>1,o=r[s];if(0<Dd(o,e))r[s]=e,r[t]=o,t=s;else break e}}function Or(r){return r.length===0?null:r[0]}function Fd(r){if(r.length===0)return null;var e=r[0],t=r.pop();if(t!==e){r[0]=t;e:for(var s=0,o=r.length,l=o>>>1;s<l;){var c=2*(s+1)-1,f=r[c],h=c+1,m=r[h];if(0>Dd(f,t))h<o&&0>Dd(m,f)?(r[s]=m,r[h]=t,s=h):(r[s]=f,r[c]=t,s=c);else if(h<o&&0>Dd(m,t))r[s]=m,r[h]=t,s=h;else break e}}return e}function Dd(r,e){var t=r.sortIndex-e.sortIndex;return t!==0?t:r.id-e.id}tn.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(fS=performance,tn.unstable_now=function(){return fS.now()}):(fg=Date,dS=fg.now(),tn.unstable_now=function(){return fg.now()-dS});var fS,fg,dS,ds=[],Ws=[],l2=1,Qi=null,ai=3,mg=!1,yu=!1,bu=!1,gg=!1,mS=typeof setTimeout=="function"?setTimeout:null,gS=typeof clearTimeout=="function"?clearTimeout:null,hS=typeof setImmediate<"u"?setImmediate:null;function kd(r){for(var e=Or(Ws);e!==null;){if(e.callback===null)Fd(Ws);else if(e.startTime<=r)Fd(Ws),e.sortIndex=e.expirationTime,pg(ds,e);else break;e=Or(Ws)}}function vg(r){if(bu=!1,kd(r),!yu)if(Or(ds)!==null)yu=!0,tl||(tl=!0,el());else{var e=Or(Ws);e!==null&&yg(vg,e.startTime-r)}}var tl=!1,_u=-1,vS=5,yS=-1;function bS(){return gg?!0:!(tn.unstable_now()-yS<vS)}function dg(){if(gg=!1,tl){var r=tn.unstable_now();yS=r;var e=!0;try{e:{yu=!1,bu&&(bu=!1,gS(_u),_u=-1),mg=!0;var t=ai;try{t:{for(kd(r),Qi=Or(ds);Qi!==null&&!(Qi.expirationTime>r&&bS());){var s=Qi.callback;if(typeof s=="function"){Qi.callback=null,ai=Qi.priorityLevel;var o=s(Qi.expirationTime<=r);if(r=tn.unstable_now(),typeof o=="function"){Qi.callback=o,kd(r),e=!0;break t}Qi===Or(ds)&&Fd(ds),kd(r)}else Fd(ds);Qi=Or(ds)}if(Qi!==null)e=!0;else{var l=Or(Ws);l!==null&&yg(vg,l.startTime-r),e=!1}}break e}finally{Qi=null,ai=t,mg=!1}e=void 0}}finally{e?el():tl=!1}}}var el;typeof hS=="function"?el=function(){hS(dg)}:typeof MessageChannel<"u"?(hg=new MessageChannel,pS=hg.port2,hg.port1.onmessage=dg,el=function(){pS.postMessage(null)}):el=function(){mS(dg,0)};var hg,pS;function yg(r,e){_u=mS(function(){r(tn.unstable_now())},e)}tn.unstable_IdlePriority=5;tn.unstable_ImmediatePriority=1;tn.unstable_LowPriority=4;tn.unstable_NormalPriority=3;tn.unstable_Profiling=null;tn.unstable_UserBlockingPriority=2;tn.unstable_cancelCallback=function(r){r.callback=null};tn.unstable_forceFrameRate=function(r){0>r||125<r?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):vS=0<r?Math.floor(1e3/r):5};tn.unstable_getCurrentPriorityLevel=function(){return ai};tn.unstable_next=function(r){switch(ai){case 1:case 2:case 3:var e=3;break;default:e=ai}var t=ai;ai=e;try{return r()}finally{ai=t}};tn.unstable_requestPaint=function(){gg=!0};tn.unstable_runWithPriority=function(r,e){switch(r){case 1:case 2:case 3:case 4:case 5:break;default:r=3}var t=ai;ai=r;try{return e()}finally{ai=t}};tn.unstable_scheduleCallback=function(r,e,t){var s=tn.unstable_now();switch(typeof t=="object"&&t!==null?(t=t.delay,t=typeof t=="number"&&0<t?s+t:s):t=s,r){case 1:var o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3}return o=t+o,r={id:l2++,callback:e,priorityLevel:r,startTime:t,expirationTime:o,sortIndex:-1},t>s?(r.sortIndex=t,pg(Ws,r),Or(ds)===null&&r===Or(Ws)&&(bu?(gS(_u),_u=-1):bu=!0,yg(vg,t-s))):(r.sortIndex=o,pg(ds,r),yu||mg||(yu=!0,tl||(tl=!0,el()))),r};tn.unstable_shouldYield=bS;tn.unstable_wrapCallback=function(r){var e=ai;return function(){var t=ai;ai=e;try{return r.apply(this,arguments)}finally{ai=t}}}});var bg=Ar((uL,SS)=>{"use strict";SS.exports=_S()});var nn=ci(Yr()),DS=ci(Yr());var Mb=0,mm=1,wb=2;var gm=0,Ao=1,Xa=2,Hs=3,Vs=0,hi=1,Mi=2,Ro=0,qa=1,vm=2,ym=3,bm=4,Tb=5;var Co=100,Eb=101,Ab=102,Rb=103,Cb=104,Pb=200,Ib=201,Nb=202,Lb=203,_m=204,Sm=205,Db=206,kb=207,Fb=208,Ub=209,Ob=210,zb=211,Bb=212,Hb=213,Vb=214,sf=0,of=1,af=2,La=3,lf=4,uf=5,cf=6,ff=7,xm=0,Gb=1,Wb=2,ri=0,Mm=1,wm=2,Tm=3,ou=4,Em=5,Am=6,Rm=7;var Cm=300,Po=301,$a=302,zf=303,Bf=304,df=1e3,Cr=1001,hf=1002,Un=1003,Xb=1004;var au=1005;var di=1006,Hf=1007;var us=1008;var si=1009,Pm=1010,Im=1011,Ya=1012,Vf=1013,hr=1014,Ki=1015,pr=1016,Gf=1017,Wf=1018,Io=1020,Nm=35902,Lm=35899,Dm=1021,km=1022,zi=1023,ns=1026,cs=1027,Xf=1028,qf=1029,Gs=1030,$f=1031;var Yf=1033,lu=33776,uu=33777,cu=33778,fu=33779,jf=35840,Zf=35841,Jf=35842,Kf=35843,Qf=36196,ed=37492,td=37496,nd=37488,id=37489,du=37490,rd=37491,sd=37808,od=37809,ad=37810,ld=37811,ud=37812,cd=37813,fd=37814,dd=37815,hd=37816,pd=37817,md=37818,gd=37819,vd=37820,yd=37821,bd=36492,_d=36494,Sd=36495,xd=36283,Md=36284,hu=36285,wd=36286;var Bl=2300,pf=2301,tf=2302,am=2303,lm=2400,um=2401,cm=2402;var qb=3200;var Td=0,$b=1,fs="",An="srgb",bo="srgb-linear",Hl="linear",Ut="srgb";var nf=7680;var Yb=519,jb=512,Zb=513,Jb=514,Fm=515,Kb=516,Qb=517,Um=518,Om=519,e_=35044;var zm="300 es",Zi=2e3,Da=2001;function nw(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function iw(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function ka(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function t_(){let r=ka("canvas");return r.style.display="block",r}var Vy={},Fa=null;function Bm(...r){let e="THREE."+r.shift();Fa?Fa("log",e,...r):console.log(e,...r)}function n_(r){let e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function qe(...r){r=n_(r);let e="THREE."+r.shift();if(Fa)Fa("warn",e,...r);else{let t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function tt(...r){r=n_(r);let e="THREE."+r.shift();if(Fa)Fa("error",e,...r);else{let t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function yo(...r){let e=r.join(" ");e in Vy||(Vy[e]=!0,qe(...r))}function i_(r,e,t){return new Promise(function(s,o){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:s()}}setTimeout(l,t)})}var r_={[sf]:sf,[af]:cf,[lf]:lf,[La]:uf,[of]:of,[cf]:af,[ff]:ff,[uf]:La},Pr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){let s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){let s=this._listeners;if(s===void 0)return;let o=s[e];if(o!==void 0){let l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let s=t[e.type];if(s!==void 0){e.target=this;let o=s.slice(0);for(let l=0,c=o.length;l<c;l++)o[l].call(this,e);e.target=null}}},ti=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gy=1234567,Ia=Math.PI/180,Ua=180/Math.PI;function ja(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(ti[r&255]+ti[r>>8&255]+ti[r>>16&255]+ti[r>>24&255]+"-"+ti[e&255]+ti[e>>8&255]+"-"+ti[e>>16&15|64]+ti[e>>24&255]+"-"+ti[t&63|128]+ti[t>>8&255]+"-"+ti[t>>16&255]+ti[t>>24&255]+ti[s&255]+ti[s>>8&255]+ti[s>>16&255]+ti[s>>24&255]).toLowerCase()}function gt(r,e,t){return Math.max(e,Math.min(t,r))}function Hm(r,e){return(r%e+e)%e}function rw(r,e,t,s,o){return s+(r-e)*(o-s)/(t-e)}function sw(r,e,t){return r!==e?(t-r)/(e-r):0}function zl(r,e,t){return(1-t)*r+t*e}function ow(r,e,t,s){return zl(r,e,1-Math.exp(-t*s))}function aw(r,e=1){return e-Math.abs(Hm(r,e*2)-e)}function lw(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function uw(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function cw(r,e){return r+Math.floor(Math.random()*(e-r+1))}function fw(r,e){return r+Math.random()*(e-r)}function dw(r){return r*(.5-Math.random())}function hw(r){r!==void 0&&(Gy=r);let e=Gy+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function pw(r){return r*Ia}function mw(r){return r*Ua}function gw(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}function vw(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Vm(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function yw(r,e,t,s,o){let l=Math.cos,c=Math.sin,f=l(t/2),h=c(t/2),m=l((e+s)/2),v=c((e+s)/2),_=l((e-s)/2),b=c((e-s)/2),g=l((s-e)/2),x=c((s-e)/2);switch(o){case"XYX":r.set(f*v,h*_,h*b,f*m);break;case"YZY":r.set(h*b,f*v,h*_,f*m);break;case"ZXZ":r.set(h*_,h*b,f*v,f*m);break;case"XZX":r.set(f*v,h*x,h*g,f*m);break;case"YXY":r.set(h*g,f*v,h*x,f*m);break;case"ZYZ":r.set(h*x,h*g,f*v,f*m);break;default:qe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Gm(r){switch(r.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function s_(r,e){if(e.constructor===Float32Array)return r;let t=Gm(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(r/t,-1)}function o_(r,e){if(e.constructor===Float32Array)return r;let t=Gm(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(r*t)}var Ed={DEG2RAD:Ia,RAD2DEG:Ua,generateUUID:ja,clamp:gt,euclideanModulo:Hm,mapLinear:rw,inverseLerp:sw,lerp:zl,damp:ow,pingpong:aw,smoothstep:lw,smootherstep:uw,randInt:cw,randFloat:fw,randFloatSpread:dw,seededRandom:hw,degToRad:pw,radToDeg:mw,isPowerOfTwo:gw,ceilPowerOfTwo:vw,floorPowerOfTwo:Vm,setQuaternionFromProperEuler:yw,normalize:o_,denormalize:s_},jm=class jm{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,s=this.y,o=e.elements;return this.x=o[0]*t+o[3]*s+o[6],this.y=o[1]*t+o[4]*s+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this}clampLength(e,t){let s=this.length();return this.divideScalar(s||1).multiplyScalar(gt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let s=this.dot(e)/t;return Math.acos(gt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let s=Math.cos(t),o=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*s-c*o+e.x,this.y=l*o+c*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};jm.prototype.isVector2=!0;var ut=jm,Ir=class{constructor(e=0,t=0,s=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=o}static slerpFlat(e,t,s,o,l,c,f){let h=s[o+0],m=s[o+1],v=s[o+2],_=s[o+3],b=l[c+0],g=l[c+1],x=l[c+2],R=l[c+3];if(_!==R||h!==b||m!==g||v!==x){let S=h*b+m*g+v*x+_*R;S<0&&(b=-b,g=-g,x=-x,R=-R,S=-S);let y=1-f;if(S<.9995){let E=Math.acos(S),D=Math.sin(E);y=Math.sin(y*E)/D,f=Math.sin(f*E)/D,h=h*y+b*f,m=m*y+g*f,v=v*y+x*f,_=_*y+R*f}else{h=h*y+b*f,m=m*y+g*f,v=v*y+x*f,_=_*y+R*f;let E=1/Math.sqrt(h*h+m*m+v*v+_*_);h*=E,m*=E,v*=E,_*=E}}e[t]=h,e[t+1]=m,e[t+2]=v,e[t+3]=_}static multiplyQuaternionsFlat(e,t,s,o,l,c){let f=s[o],h=s[o+1],m=s[o+2],v=s[o+3],_=l[c],b=l[c+1],g=l[c+2],x=l[c+3];return e[t]=f*x+v*_+h*g-m*b,e[t+1]=h*x+v*b+m*_-f*g,e[t+2]=m*x+v*g+f*b-h*_,e[t+3]=v*x-f*_-h*b-m*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,o){return this._x=e,this._y=t,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let s=e._x,o=e._y,l=e._z,c=e._order,f=Math.cos,h=Math.sin,m=f(s/2),v=f(o/2),_=f(l/2),b=h(s/2),g=h(o/2),x=h(l/2);switch(c){case"XYZ":this._x=b*v*_+m*g*x,this._y=m*g*_-b*v*x,this._z=m*v*x+b*g*_,this._w=m*v*_-b*g*x;break;case"YXZ":this._x=b*v*_+m*g*x,this._y=m*g*_-b*v*x,this._z=m*v*x-b*g*_,this._w=m*v*_+b*g*x;break;case"ZXY":this._x=b*v*_-m*g*x,this._y=m*g*_+b*v*x,this._z=m*v*x+b*g*_,this._w=m*v*_-b*g*x;break;case"ZYX":this._x=b*v*_-m*g*x,this._y=m*g*_+b*v*x,this._z=m*v*x-b*g*_,this._w=m*v*_+b*g*x;break;case"YZX":this._x=b*v*_+m*g*x,this._y=m*g*_+b*v*x,this._z=m*v*x-b*g*_,this._w=m*v*_-b*g*x;break;case"XZY":this._x=b*v*_-m*g*x,this._y=m*g*_-b*v*x,this._z=m*v*x+b*g*_,this._w=m*v*_+b*g*x;break;default:qe("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let s=t/2,o=Math.sin(s);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,s=t[0],o=t[4],l=t[8],c=t[1],f=t[5],h=t[9],m=t[2],v=t[6],_=t[10],b=s+f+_;if(b>0){let g=.5/Math.sqrt(b+1);this._w=.25/g,this._x=(v-h)*g,this._y=(l-m)*g,this._z=(c-o)*g}else if(s>f&&s>_){let g=2*Math.sqrt(1+s-f-_);this._w=(v-h)/g,this._x=.25*g,this._y=(o+c)/g,this._z=(l+m)/g}else if(f>_){let g=2*Math.sqrt(1+f-s-_);this._w=(l-m)/g,this._x=(o+c)/g,this._y=.25*g,this._z=(h+v)/g}else{let g=2*Math.sqrt(1+_-s-f);this._w=(c-o)/g,this._x=(l+m)/g,this._y=(h+v)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){let s=this.angleTo(e);if(s===0)return this;let o=Math.min(1,t/s);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let s=e._x,o=e._y,l=e._z,c=e._w,f=t._x,h=t._y,m=t._z,v=t._w;return this._x=s*v+c*f+o*m-l*h,this._y=o*v+c*h+l*f-s*m,this._z=l*v+c*m+s*h-o*f,this._w=c*v-s*f-o*h-l*m,this._onChangeCallback(),this}slerp(e,t){let s=e._x,o=e._y,l=e._z,c=e._w,f=this.dot(e);f<0&&(s=-s,o=-o,l=-l,c=-c,f=-f);let h=1-t;if(f<.9995){let m=Math.acos(f),v=Math.sin(m);h=Math.sin(h*m)/v,t=Math.sin(t*m)/v,this._x=this._x*h+s*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+c*t,this._onChangeCallback()}else this._x=this._x*h+s*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+c*t,this.normalize();return this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),o=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Zm=class Zm{constructor(e=0,t=0,s=0){this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wy.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wy.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*o,this.y=l[1]*t+l[4]*s+l[7]*o,this.z=l[2]*t+l[5]*s+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,s=this.y,o=this.z,l=e.elements,c=1/(l[3]*t+l[7]*s+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*o+l[12])*c,this.y=(l[1]*t+l[5]*s+l[9]*o+l[13])*c,this.z=(l[2]*t+l[6]*s+l[10]*o+l[14])*c,this}applyQuaternion(e){let t=this.x,s=this.y,o=this.z,l=e.x,c=e.y,f=e.z,h=e.w,m=2*(c*o-f*s),v=2*(f*t-l*o),_=2*(l*s-c*t);return this.x=t+h*m+c*_-f*v,this.y=s+h*v+f*m-l*_,this.z=o+h*_+l*v-c*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*o,this.y=l[1]*t+l[5]*s+l[9]*o,this.z=l[2]*t+l[6]*s+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this}clampLength(e,t){let s=this.length();return this.divideScalar(s||1).multiplyScalar(gt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let s=e.x,o=e.y,l=e.z,c=t.x,f=t.y,h=t.z;return this.x=o*h-l*f,this.y=l*c-s*h,this.z=s*f-o*c,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Fp.copy(this).projectOnVector(e),this.sub(Fp)}reflect(e){return this.sub(Fp.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let s=this.dot(e)/t;return Math.acos(gt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,s=this.y-e.y,o=this.z-e.z;return t*t+s*s+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){let o=Math.sin(t)*e;return this.x=o*Math.sin(s),this.y=Math.cos(t)*e,this.z=o*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Zm.prototype.isVector3=!0;var V=Zm,Fp=new V,Wy=new Ir,Jm=class Jm{constructor(e,t,s,o,l,c,f,h,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,c,f,h,m)}set(e,t,s,o,l,c,f,h,m){let v=this.elements;return v[0]=e,v[1]=o,v[2]=f,v[3]=t,v[4]=l,v[5]=h,v[6]=s,v[7]=c,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let s=e.elements,o=t.elements,l=this.elements,c=s[0],f=s[3],h=s[6],m=s[1],v=s[4],_=s[7],b=s[2],g=s[5],x=s[8],R=o[0],S=o[3],y=o[6],E=o[1],D=o[4],C=o[7],N=o[2],L=o[5],M=o[8];return l[0]=c*R+f*E+h*N,l[3]=c*S+f*D+h*L,l[6]=c*y+f*C+h*M,l[1]=m*R+v*E+_*N,l[4]=m*S+v*D+_*L,l[7]=m*y+v*C+_*M,l[2]=b*R+g*E+x*N,l[5]=b*S+g*D+x*L,l[8]=b*y+g*C+x*M,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],c=e[4],f=e[5],h=e[6],m=e[7],v=e[8];return t*c*v-t*f*m-s*l*v+s*f*h+o*l*m-o*c*h}invert(){let e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],c=e[4],f=e[5],h=e[6],m=e[7],v=e[8],_=v*c-f*m,b=f*h-v*l,g=m*l-c*h,x=t*_+s*b+o*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let R=1/x;return e[0]=_*R,e[1]=(o*m-v*s)*R,e[2]=(f*s-o*c)*R,e[3]=b*R,e[4]=(v*t-o*h)*R,e[5]=(o*l-f*t)*R,e[6]=g*R,e[7]=(s*h-m*t)*R,e[8]=(c*t-s*l)*R,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,o,l,c,f){let h=Math.cos(l),m=Math.sin(l);return this.set(s*h,s*m,-s*(h*c+m*f)+c+e,-o*m,o*h,-o*(-m*c+h*f)+f+t,0,0,1),this}scale(e,t){return yo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Up.makeScale(e,t)),this}rotate(e){return yo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Up.makeRotation(-e)),this}translate(e,t){return yo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Up.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,s=e.elements;for(let o=0;o<9;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){let s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Jm.prototype.isMatrix3=!0;var nt=Jm,Up=new nt,Xy=new nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qy=new nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bw(){let r={enabled:!0,workingColorSpace:bo,spaces:{},convert:function(o,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Ut&&(o.r=ts(o.r),o.g=ts(o.g),o.b=ts(o.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ut&&(o.r=Na(o.r),o.g=Na(o.g),o.b=Na(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===fs?Hl:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,c){return o.copy(this.spaces[c].fromXYZ).multiply(this.spaces[l].toXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[bo]:{primaries:e,whitePoint:s,transfer:Hl,toXYZ:Xy,fromXYZ:qy,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:An},outputColorSpaceConfig:{drawingBufferColorSpace:An}},[An]:{primaries:e,whitePoint:s,transfer:Ut,toXYZ:Xy,fromXYZ:qy,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:An}}}),r}var bt=bw();function ts(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Na(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var ga,mf=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{ga===void 0&&(ga=ka("canvas")),ga.width=e.width,ga.height=e.height;let o=ga.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),s=ga}return s.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ka("canvas");t.width=e.width,t.height=e.height;let s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);let o=s.getImageData(0,0,e.width,e.height),l=o.data;for(let c=0;c<l.length;c++)l[c]=ts(l[c]/255)*255;return s.putImageData(o,0,0),t}else if(e.data){let t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(ts(t[s]/255)*255):t[s]=ts(t[s]);return{data:t,width:e.width,height:e.height}}else return qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},_w=0,Oa=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:_w++}),this.uuid=ja(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let c=0,f=o.length;c<f;c++)o[c].isDataTexture?l.push(Op(o[c].image)):l.push(Op(o[c]))}else l=Op(o);s.url=l}return t||(e.images[this.uuid]=s),s}};function Op(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?mf.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(qe("Texture: Unable to serialize Texture."),{})}var Sw=0,zp=new V,ii=class r extends Pr{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,s=Cr,o=Cr,l=di,c=us,f=zi,h=si,m=r.DEFAULT_ANISOTROPY,v=fs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sw++}),this.uuid=ja(),this.name="",this.source=new Oa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=l,this.minFilter=c,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=h,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(zp).x}get height(){return this.source.getSize(zp).y}get depth(){return this.source.getSize(zp).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let s=e[t];if(s===void 0){qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let o=this[t];if(o===void 0){qe(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&s&&o.isVector2&&s.isVector2||o&&s&&o.isVector3&&s.isVector3||o&&s&&o.isMatrix3&&s.isMatrix3?o.copy(s):this[t]=s}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case df:e.x=e.x-Math.floor(e.x);break;case Cr:e.x=e.x<0?0:1;break;case hf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case df:e.y=e.y-Math.floor(e.y);break;case Cr:e.y=e.y<0?0:1;break;case hf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};ii.DEFAULT_IMAGE=null;ii.DEFAULT_MAPPING=Cm;ii.DEFAULT_ANISOTROPY=1;var Km=class Km{constructor(e=0,t=0,s=0,o=1){this.x=e,this.y=t,this.z=s,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,o){return this.x=e,this.y=t,this.z=s,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,s=this.y,o=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*s+c[8]*o+c[12]*l,this.y=c[1]*t+c[5]*s+c[9]*o+c[13]*l,this.z=c[2]*t+c[6]*s+c[10]*o+c[14]*l,this.w=c[3]*t+c[7]*s+c[11]*o+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,o,l,h=e.elements,m=h[0],v=h[4],_=h[8],b=h[1],g=h[5],x=h[9],R=h[2],S=h[6],y=h[10];if(Math.abs(v-b)<.01&&Math.abs(_-R)<.01&&Math.abs(x-S)<.01){if(Math.abs(v+b)<.1&&Math.abs(_+R)<.1&&Math.abs(x+S)<.1&&Math.abs(m+g+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let D=(m+1)/2,C=(g+1)/2,N=(y+1)/2,L=(v+b)/4,M=(_+R)/4,P=(x+S)/4;return D>C&&D>N?D<.01?(s=0,o=.707106781,l=.707106781):(s=Math.sqrt(D),o=L/s,l=M/s):C>N?C<.01?(s=.707106781,o=0,l=.707106781):(o=Math.sqrt(C),s=L/o,l=P/o):N<.01?(s=.707106781,o=.707106781,l=0):(l=Math.sqrt(N),s=M/l,o=P/l),this.set(s,o,l,t),this}let E=Math.sqrt((S-x)*(S-x)+(_-R)*(_-R)+(b-v)*(b-v));return Math.abs(E)<.001&&(E=1),this.x=(S-x)/E,this.y=(_-R)/E,this.z=(b-v)/E,this.w=Math.acos((m+g+y-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this.w=gt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this.w=gt(this.w,e,t),this}clampLength(e,t){let s=this.length();return this.divideScalar(s||1).multiplyScalar(gt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Km.prototype.isVector4=!0;var en=Km,gf=class extends Pr{constructor(e=1,t=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:di,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=s.depth,this.scissor=new en(0,0,e,t),this.scissorTest=!1,this.viewport=new en(0,0,e,t),this.textures=[];let o=s.count;for(let l=0;l<o;l++)this.textures[l]=new ii({width:e,height:t,depth:s.depth}),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveColorBuffer=s.resolveColorBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.storeMultisampledColorBuffer=s.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=s.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=s.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:di,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=s,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,s=e.textures.length;t<s;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let o=Object.assign({},e.textures[t].image);this.textures[t].source=new Oa(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ui=class extends gf{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}},Vl=class extends ii{constructor(e=null,t=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=Un,this.minFilter=Un,this.wrapR=Cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var vf=class extends ii{constructor(e=null,t=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=Un,this.minFilter=Un,this.wrapR=Cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Of=class Of{constructor(e,t,s,o,l,c,f,h,m,v,_,b,g,x,R,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,c,f,h,m,v,_,b,g,x,R,S)}set(e,t,s,o,l,c,f,h,m,v,_,b,g,x,R,S){let y=this.elements;return y[0]=e,y[4]=t,y[8]=s,y[12]=o,y[1]=l,y[5]=c,y[9]=f,y[13]=h,y[2]=m,y[6]=v,y[10]=_,y[14]=b,y[3]=g,y[7]=x,y[11]=R,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Of().fromArray(this.elements)}copy(e){let t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){let t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,s=e.elements,o=1/va.setFromMatrixColumn(e,0).length(),l=1/va.setFromMatrixColumn(e,1).length(),c=1/va.setFromMatrixColumn(e,2).length();return t[0]=s[0]*o,t[1]=s[1]*o,t[2]=s[2]*o,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*c,t[9]=s[9]*c,t[10]=s[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,s=e.x,o=e.y,l=e.z,c=Math.cos(s),f=Math.sin(s),h=Math.cos(o),m=Math.sin(o),v=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){let b=c*v,g=c*_,x=f*v,R=f*_;t[0]=h*v,t[4]=-h*_,t[8]=m,t[1]=g+x*m,t[5]=b-R*m,t[9]=-f*h,t[2]=R-b*m,t[6]=x+g*m,t[10]=c*h}else if(e.order==="YXZ"){let b=h*v,g=h*_,x=m*v,R=m*_;t[0]=b+R*f,t[4]=x*f-g,t[8]=c*m,t[1]=c*_,t[5]=c*v,t[9]=-f,t[2]=g*f-x,t[6]=R+b*f,t[10]=c*h}else if(e.order==="ZXY"){let b=h*v,g=h*_,x=m*v,R=m*_;t[0]=b-R*f,t[4]=-c*_,t[8]=x+g*f,t[1]=g+x*f,t[5]=c*v,t[9]=R-b*f,t[2]=-c*m,t[6]=f,t[10]=c*h}else if(e.order==="ZYX"){let b=c*v,g=c*_,x=f*v,R=f*_;t[0]=h*v,t[4]=x*m-g,t[8]=b*m+R,t[1]=h*_,t[5]=R*m+b,t[9]=g*m-x,t[2]=-m,t[6]=f*h,t[10]=c*h}else if(e.order==="YZX"){let b=c*h,g=c*m,x=f*h,R=f*m;t[0]=h*v,t[4]=R-b*_,t[8]=x*_+g,t[1]=_,t[5]=c*v,t[9]=-f*v,t[2]=-m*v,t[6]=g*_+x,t[10]=b-R*_}else if(e.order==="XZY"){let b=c*h,g=c*m,x=f*h,R=f*m;t[0]=h*v,t[4]=-_,t[8]=m*v,t[1]=b*_+R,t[5]=c*v,t[9]=g*_-x,t[2]=x*_-g,t[6]=f*v,t[10]=R*_+b}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xw,e,Mw)}lookAt(e,t,s){let o=this.elements;return Di.subVectors(e,t),Di.lengthSq()===0&&(Di.z=1),Di.normalize(),Ns.crossVectors(s,Di),Ns.lengthSq()===0&&(Math.abs(s.z)===1?Di.x+=1e-4:Di.z+=1e-4,Di.normalize(),Ns.crossVectors(s,Di)),Ns.normalize(),Cc.crossVectors(Di,Ns),o[0]=Ns.x,o[4]=Cc.x,o[8]=Di.x,o[1]=Ns.y,o[5]=Cc.y,o[9]=Di.y,o[2]=Ns.z,o[6]=Cc.z,o[10]=Di.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let s=e.elements,o=t.elements,l=this.elements,c=s[0],f=s[4],h=s[8],m=s[12],v=s[1],_=s[5],b=s[9],g=s[13],x=s[2],R=s[6],S=s[10],y=s[14],E=s[3],D=s[7],C=s[11],N=s[15],L=o[0],M=o[4],P=o[8],G=o[12],F=o[1],B=o[5],W=o[9],j=o[13],O=o[2],K=o[6],se=o[10],ee=o[14],me=o[3],ne=o[7],ce=o[11],he=o[15];return l[0]=c*L+f*F+h*O+m*me,l[4]=c*M+f*B+h*K+m*ne,l[8]=c*P+f*W+h*se+m*ce,l[12]=c*G+f*j+h*ee+m*he,l[1]=v*L+_*F+b*O+g*me,l[5]=v*M+_*B+b*K+g*ne,l[9]=v*P+_*W+b*se+g*ce,l[13]=v*G+_*j+b*ee+g*he,l[2]=x*L+R*F+S*O+y*me,l[6]=x*M+R*B+S*K+y*ne,l[10]=x*P+R*W+S*se+y*ce,l[14]=x*G+R*j+S*ee+y*he,l[3]=E*L+D*F+C*O+N*me,l[7]=E*M+D*B+C*K+N*ne,l[11]=E*P+D*W+C*se+N*ce,l[15]=E*G+D*j+C*ee+N*he,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],s=e[4],o=e[8],l=e[12],c=e[1],f=e[5],h=e[9],m=e[13],v=e[2],_=e[6],b=e[10],g=e[14],x=e[3],R=e[7],S=e[11],y=e[15],E=h*g-m*b,D=f*g-m*_,C=f*b-h*_,N=c*g-m*v,L=c*b-h*v,M=c*_-f*v;return t*(R*E-S*D+y*C)-s*(x*E-S*N+y*L)+o*(x*D-R*N+y*M)-l*(x*C-R*L+S*M)}determinantAffine(){let e=this.elements,t=e[0],s=e[4],o=e[8],l=e[1],c=e[5],f=e[9],h=e[2],m=e[6],v=e[10];return t*(c*v-f*m)-s*(l*v-f*h)+o*(l*m-c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){let o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=s),this}invert(){let e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],c=e[4],f=e[5],h=e[6],m=e[7],v=e[8],_=e[9],b=e[10],g=e[11],x=e[12],R=e[13],S=e[14],y=e[15],E=t*f-s*c,D=t*h-o*c,C=t*m-l*c,N=s*h-o*f,L=s*m-l*f,M=o*m-l*h,P=v*R-_*x,G=v*S-b*x,F=v*y-g*x,B=_*S-b*R,W=_*y-g*R,j=b*y-g*S,O=E*j-D*W+C*B+N*F-L*G+M*P;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let K=1/O;return e[0]=(f*j-h*W+m*B)*K,e[1]=(o*W-s*j-l*B)*K,e[2]=(R*M-S*L+y*N)*K,e[3]=(b*L-_*M-g*N)*K,e[4]=(h*F-c*j-m*G)*K,e[5]=(t*j-o*F+l*G)*K,e[6]=(S*C-x*M-y*D)*K,e[7]=(v*M-b*C+g*D)*K,e[8]=(c*W-f*F+m*P)*K,e[9]=(s*F-t*W-l*P)*K,e[10]=(x*L-R*C+y*E)*K,e[11]=(_*C-v*L-g*E)*K,e[12]=(f*G-c*B-h*P)*K,e[13]=(t*B-s*G+o*P)*K,e[14]=(R*D-x*N-S*E)*K,e[15]=(v*N-_*D+b*E)*K,this}scale(e){let t=this.elements,s=e.x,o=e.y,l=e.z;return t[0]*=s,t[4]*=o,t[8]*=l,t[1]*=s,t[5]*=o,t[9]*=l,t[2]*=s,t[6]*=o,t[10]*=l,t[3]*=s,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,o))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let s=Math.cos(t),o=Math.sin(t),l=1-s,c=e.x,f=e.y,h=e.z,m=l*c,v=l*f;return this.set(m*c+s,m*f-o*h,m*h+o*f,0,m*f+o*h,v*f+s,v*h-o*c,0,m*h-o*f,v*h+o*c,l*h*h+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,o,l,c){return this.set(1,s,l,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,s){let o=this.elements,l=t._x,c=t._y,f=t._z,h=t._w,m=l+l,v=c+c,_=f+f,b=l*m,g=l*v,x=l*_,R=c*v,S=c*_,y=f*_,E=h*m,D=h*v,C=h*_,N=s.x,L=s.y,M=s.z;return o[0]=(1-(R+y))*N,o[1]=(g+C)*N,o[2]=(x-D)*N,o[3]=0,o[4]=(g-C)*L,o[5]=(1-(b+y))*L,o[6]=(S+E)*L,o[7]=0,o[8]=(x+D)*M,o[9]=(S-E)*M,o[10]=(1-(b+R))*M,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,s){let o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];let l=this.determinantAffine();if(l===0)return s.set(1,1,1),t.identity(),this;let c=va.set(o[0],o[1],o[2]).length(),f=va.set(o[4],o[5],o[6]).length(),h=va.set(o[8],o[9],o[10]).length();l<0&&(c=-c),lr.copy(this);let m=1/c,v=1/f,_=1/h;return lr.elements[0]*=m,lr.elements[1]*=m,lr.elements[2]*=m,lr.elements[4]*=v,lr.elements[5]*=v,lr.elements[6]*=v,lr.elements[8]*=_,lr.elements[9]*=_,lr.elements[10]*=_,t.setFromRotationMatrix(lr),s.x=c,s.y=f,s.z=h,this}makePerspective(e,t,s,o,l,c,f=Zi,h=!1){let m=this.elements,v=2*l/(t-e),_=2*l/(s-o),b=(t+e)/(t-e),g=(s+o)/(s-o),x,R;if(h)x=l/(c-l),R=c*l/(c-l);else if(f===Zi)x=-(c+l)/(c-l),R=-2*c*l/(c-l);else if(f===Da)x=-c/(c-l),R=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return m[0]=v,m[4]=0,m[8]=b,m[12]=0,m[1]=0,m[5]=_,m[9]=g,m[13]=0,m[2]=0,m[6]=0,m[10]=x,m[14]=R,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,t,s,o,l,c,f=Zi,h=!1){let m=this.elements,v=2/(t-e),_=2/(s-o),b=-(t+e)/(t-e),g=-(s+o)/(s-o),x,R;if(h)x=1/(c-l),R=c/(c-l);else if(f===Zi)x=-2/(c-l),R=-(c+l)/(c-l);else if(f===Da)x=-1/(c-l),R=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return m[0]=v,m[4]=0,m[8]=0,m[12]=b,m[1]=0,m[5]=_,m[9]=0,m[13]=g,m[2]=0,m[6]=0,m[10]=x,m[14]=R,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){let t=this.elements,s=e.elements;for(let o=0;o<16;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){let s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}};Of.prototype.isMatrix4=!0;var Ot=Of,va=new V,lr=new Ot,xw=new V(0,0,0),Mw=new V(1,1,1),Ns=new V,Cc=new V,Di=new V,$y=new Ot,Yy=new Ir,is=class r{constructor(e=0,t=0,s=0,o=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,o=this._order){return this._x=e,this._y=t,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){let o=e.elements,l=o[0],c=o[4],f=o[8],h=o[1],m=o[5],v=o[9],_=o[2],b=o[6],g=o[10];switch(t){case"XYZ":this._y=Math.asin(gt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-v,g),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(b,m),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(f,g),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(gt(b,-1,1)),Math.abs(b)<.9999999?(this._y=Math.atan2(-_,g),this._z=Math.atan2(-c,m)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-gt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(b,g),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-c,m));break;case"YZX":this._z=Math.asin(gt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(f,g));break;case"XZY":this._z=Math.asin(-gt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(b,m),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-v,g),this._y=0);break;default:qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return $y.makeRotationFromQuaternion(e),this.setFromRotationMatrix($y,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Yy.setFromEuler(this),this.setFromQuaternion(Yy,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};is.DEFAULT_ORDER="XYZ";var rs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ww=0,jy=new V,ya=new Ir,jr=new Ot,Pc=new V,Nl=new V,Tw=new V,Ew=new Ir,Zy=new V(1,0,0),Jy=new V(0,1,0),Ky=new V(0,0,1),Qy={type:"added"},Aw={type:"removed"},ba={type:"childadded",child:null},Bp={type:"childremoved",child:null},On=class r extends Pr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ww++}),this.uuid=ja(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new V,t=new is,s=new Ir,o=new V(1,1,1);function l(){s.setFromEuler(t,!1)}function c(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Ot},normalMatrix:{value:new nt}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ya.setFromAxisAngle(e,t),this.quaternion.multiply(ya),this}rotateOnWorldAxis(e,t){return ya.setFromAxisAngle(e,t),this.quaternion.premultiply(ya),this}rotateX(e){return this.rotateOnAxis(Zy,e)}rotateY(e){return this.rotateOnAxis(Jy,e)}rotateZ(e){return this.rotateOnAxis(Ky,e)}translateOnAxis(e,t){return jy.copy(e).applyQuaternion(this.quaternion),this.position.add(jy.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zy,e)}translateY(e){return this.translateOnAxis(Jy,e)}translateZ(e){return this.translateOnAxis(Ky,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(jr.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?Pc.copy(e):Pc.set(e,t,s);let o=this.parent;this.updateWorldMatrix(!0,!1),Nl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jr.lookAt(Nl,Pc,this.up):jr.lookAt(Pc,Nl,this.up),this.quaternion.setFromRotationMatrix(jr),o&&(jr.extractRotation(o.matrixWorld),ya.setFromRotationMatrix(jr),this.quaternion.premultiply(ya.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qy),ba.child=e,this.dispatchEvent(ba),ba.child=null):tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Aw),Bp.child=e,this.dispatchEvent(Bp),Bp.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),jr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jr.multiply(e.parent.matrixWorld)),e.applyMatrix4(jr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qy),ba.child=e,this.dispatchEvent(ba),ba.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,o=this.children.length;s<o;s++){let c=this.children[s].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);let o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nl,e,Tw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nl,Ew,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,s=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*s-l[8]*o,l[13]+=s-l[1]*t-l[5]*s-l[9]*o,l[14]+=o-l[2]*t-l[6]*s-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t,s=!1){let o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),t===!0){let l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0,s)}}toJSON(e){let t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);let f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){let h=f.shapes;if(Array.isArray(h))for(let m=0,v=h.length;m<v;m++){let _=h[m];l(e.shapes,_)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let f=[];for(let h=0,m=this.material.length;h<m;h++)f.push(l(e.materials,this.material[h]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){let h=this.animations[f];o.animations.push(l(e.animations,h))}}if(t){let f=c(e.geometries),h=c(e.materials),m=c(e.textures),v=c(e.images),_=c(e.shapes),b=c(e.skeletons),g=c(e.animations),x=c(e.nodes);f.length>0&&(s.geometries=f),h.length>0&&(s.materials=h),m.length>0&&(s.textures=m),v.length>0&&(s.images=v),_.length>0&&(s.shapes=_),b.length>0&&(s.skeletons=b),g.length>0&&(s.animations=g),x.length>0&&(s.nodes=x)}return s.object=o,s;function c(f){let h=[];for(let m in f){let v=f[m];delete v.metadata,h.push(v)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){let o=e.children[s];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};On.DEFAULT_UP=new V(0,1,0);On.DEFAULT_MATRIX_AUTO_UPDATE=!0;On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var fr=class extends On{constructor(){super(),this.isGroup=!0,this.type="Group"}},Rw={type:"move"},za=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let o=null,l=null,c=null,f=this._targetRay,h=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){c=!0;for(let R of e.hand.values()){let S=t.getJointPose(R,s),y=this._getHandJoint(m,R);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}let v=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],b=v.position.distanceTo(_.position),g=.02,x=.005;m.inputState.pinching&&b>g+x?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&b<=g-x&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.quaternion,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(o=t.getPose(e.targetRaySpace,s),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(Rw)))}return f!==null&&(f.visible=o!==null),h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let s=new fr;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}},a_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ls={h:0,s:0,l:0},Ic={h:0,s:0,l:0};function Hp(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}var je=class{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){let o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=An){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.colorSpaceToWorking(this,t),this}setRGB(e,t,s,o=bt.workingColorSpace){return this.r=e,this.g=t,this.b=s,bt.colorSpaceToWorking(this,o),this}setHSL(e,t,s,o=bt.workingColorSpace){if(e=Hm(e,1),t=gt(t,0,1),s=gt(s,0,1),t===0)this.r=this.g=this.b=s;else{let l=s<=.5?s*(1+t):s+t-s*t,c=2*s-l;this.r=Hp(c,l,e+1/3),this.g=Hp(c,l,e),this.b=Hp(c,l,e-1/3)}return bt.colorSpaceToWorking(this,o),this}setStyle(e,t=An){function s(l){l!==void 0&&parseFloat(l)<1&&qe("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l,c=o[1],f=o[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(100,parseFloat(l[1]))/100,Math.min(100,parseFloat(l[2]))/100,Math.min(100,parseFloat(l[3]))/100,t);break;case"hsl":case"hsla":if(l=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(f))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:qe("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){let l=o[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=An){let s=a_[e.toLowerCase()];return s!==void 0?this.setHex(s,t):qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ts(e.r),this.g=ts(e.g),this.b=ts(e.b),this}copyLinearToSRGB(e){return this.r=Na(e.r),this.g=Na(e.g),this.b=Na(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=An){return bt.workingToColorSpace(ni.copy(this),e),Math.round(gt(ni.r*255,0,255))*65536+Math.round(gt(ni.g*255,0,255))*256+Math.round(gt(ni.b*255,0,255))}getHexString(e=An){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bt.workingColorSpace){bt.workingToColorSpace(ni.copy(this),t);let s=ni.r,o=ni.g,l=ni.b,c=Math.max(s,o,l),f=Math.min(s,o,l),h,m,v=(f+c)/2;if(f===c)h=0,m=0;else{let _=c-f;switch(m=v<=.5?_/(c+f):_/(2-c-f),c){case s:h=(o-l)/_+(o<l?6:0);break;case o:h=(l-s)/_+2;break;case l:h=(s-o)/_+4;break}h/=6}return e.h=h,e.s=m,e.l=v,e}getRGB(e,t=bt.workingColorSpace){return bt.workingToColorSpace(ni.copy(this),t),e.r=ni.r,e.g=ni.g,e.b=ni.b,e}getStyle(e=An){bt.workingToColorSpace(ni.copy(this),e);let t=ni.r,s=ni.g,o=ni.b;return e!==An?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(o*255)})`}offsetHSL(e,t,s){return this.getHSL(Ls),this.setHSL(Ls.h+e,Ls.s+t,Ls.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(Ls),e.getHSL(Ic);let s=zl(Ls.h,Ic.h,t),o=zl(Ls.s,Ic.s,t),l=zl(Ls.l,Ic.l,t);return this.setHSL(s,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,s=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*o,this.g=l[1]*t+l[4]*s+l[7]*o,this.b=l[2]*t+l[5]*s+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ni=new je;je.NAMES=a_;var Gl=class r{constructor(e,t=1,s=1e3){this.isFog=!0,this.name="",this.color=new je(e),this.near=t,this.far=s}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},_o=class extends On{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new is,this.environmentIntensity=1,this.environmentRotation=new is,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ur=new V,Zr=new V,Vp=new V,Jr=new V,_a=new V,Sa=new V,eb=new V,Gp=new V,Wp=new V,Xp=new V,qp=new en,$p=new en,Yp=new en,es=class r{constructor(e=new V,t=new V,s=new V){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,o){o.subVectors(s,t),ur.subVectors(e,t),o.cross(ur);let l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,s,o,l){ur.subVectors(o,t),Zr.subVectors(s,t),Vp.subVectors(e,t);let c=ur.dot(ur),f=ur.dot(Zr),h=ur.dot(Vp),m=Zr.dot(Zr),v=Zr.dot(Vp),_=c*m-f*f;if(_===0)return l.set(0,0,0),null;let b=1/_,g=(m*h-f*v)*b,x=(c*v-f*h)*b;return l.set(1-g-x,x,g)}static containsPoint(e,t,s,o){return this.getBarycoord(e,t,s,o,Jr)===null?!1:Jr.x>=0&&Jr.y>=0&&Jr.x+Jr.y<=1}static getInterpolation(e,t,s,o,l,c,f,h){return this.getBarycoord(e,t,s,o,Jr)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Jr.x),h.addScaledVector(c,Jr.y),h.addScaledVector(f,Jr.z),h)}static getInterpolatedAttribute(e,t,s,o,l,c){return qp.setScalar(0),$p.setScalar(0),Yp.setScalar(0),qp.fromBufferAttribute(e,t),$p.fromBufferAttribute(e,s),Yp.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(qp,l.x),c.addScaledVector($p,l.y),c.addScaledVector(Yp,l.z),c}static isFrontFacing(e,t,s,o){return ur.subVectors(s,t),Zr.subVectors(e,t),ur.cross(Zr).dot(o)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,o){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,s,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ur.subVectors(this.c,this.b),Zr.subVectors(this.a,this.b),ur.cross(Zr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,o,l){return r.getInterpolation(e,this.a,this.b,this.c,t,s,o,l)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let s=this.a,o=this.b,l=this.c,c,f;_a.subVectors(o,s),Sa.subVectors(l,s),Gp.subVectors(e,s);let h=_a.dot(Gp),m=Sa.dot(Gp);if(h<=0&&m<=0)return t.copy(s);Wp.subVectors(e,o);let v=_a.dot(Wp),_=Sa.dot(Wp);if(v>=0&&_<=v)return t.copy(o);let b=h*_-v*m;if(b<=0&&h>=0&&v<=0&&h-v>0)return c=h/(h-v),t.copy(s).addScaledVector(_a,c);Xp.subVectors(e,l);let g=_a.dot(Xp),x=Sa.dot(Xp);if(x>=0&&g<=x)return t.copy(l);let R=g*m-h*x;if(R<=0&&m>=0&&x<=0)return f=m/(m-x),t.copy(s).addScaledVector(Sa,f);let S=v*x-g*_;if(S<=0&&_-v>=0&&g-x>=0)return eb.subVectors(l,o),f=(_-v)/(_-v+(g-x)),t.copy(o).addScaledVector(eb,f);let y=1/(S+R+b);return c=R*y,f=b*y,t.copy(s).addScaledVector(_a,c).addScaledVector(Sa,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Nr=class{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(cr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(cr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let s=cr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let s=e.geometry;if(s!==void 0){let l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,cr):cr.fromBufferAttribute(l,c),cr.applyMatrix4(e.matrixWorld),this.expandByPoint(cr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Nc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Nc.copy(s.boundingBox)),Nc.applyMatrix4(e.matrixWorld),this.union(Nc)}let o=e.children;for(let l=0,c=o.length;l<c;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,cr),cr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ll),Lc.subVectors(this.max,Ll),xa.subVectors(e.a,Ll),Ma.subVectors(e.b,Ll),wa.subVectors(e.c,Ll),Ds.subVectors(Ma,xa),ks.subVectors(wa,Ma),po.subVectors(xa,wa);let t=[0,-Ds.z,Ds.y,0,-ks.z,ks.y,0,-po.z,po.y,Ds.z,0,-Ds.x,ks.z,0,-ks.x,po.z,0,-po.x,-Ds.y,Ds.x,0,-ks.y,ks.x,0,-po.y,po.x,0];return!jp(t,xa,Ma,wa,Lc)||(t=[1,0,0,0,1,0,0,0,1],!jp(t,xa,Ma,wa,Lc))?!1:(Dc.crossVectors(Ds,ks),t=[Dc.x,Dc.y,Dc.z],jp(t,xa,Ma,wa,Lc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(cr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Kr=[new V,new V,new V,new V,new V,new V,new V,new V],cr=new V,Nc=new Nr,xa=new V,Ma=new V,wa=new V,Ds=new V,ks=new V,po=new V,Ll=new V,Lc=new V,Dc=new V,mo=new V;function jp(r,e,t,s,o){for(let l=0,c=r.length-3;l<=c;l+=3){mo.fromArray(r,l);let f=o.x*Math.abs(mo.x)+o.y*Math.abs(mo.y)+o.z*Math.abs(mo.z),h=e.dot(mo),m=t.dot(mo),v=s.dot(mo);if(Math.max(-Math.max(h,m,v),Math.min(h,m,v))>f)return!1}return!0}var En=new V,kc=new ut,Cw=0,dr=class extends Pr{constructor(e,t,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Cw++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=e_,this.updateRanges=[],this.gpuType=Ki,this.version=0,this._normalizationScale=e!==void 0?Gm(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[s+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)kc.fromBufferAttribute(this,t),kc.applyMatrix3(e),this.setXY(t,kc.x,kc.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)En.fromBufferAttribute(this,t),En.applyMatrix3(e),this.setXYZ(t,En.x,En.y,En.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)En.fromBufferAttribute(this,t),En.applyMatrix4(e),this.setXYZ(t,En.x,En.y,En.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)En.fromBufferAttribute(this,t),En.applyNormalMatrix(e),this.setXYZ(t,En.x,En.y,En.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)En.fromBufferAttribute(this,t),En.transformDirection(e),this.setXYZ(t,En.x,En.y,En.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=this._denormalize(s)),s}setComponent(e,t,s){return this.normalized&&(s=this._normalize(s)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,o){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),s=this._normalize(s),o=this._normalize(o)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this}setXYZW(e,t,s,o,l){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),s=this._normalize(s),o=this._normalize(o),l=this._normalize(l)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):s_(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):o_(e,this.array)}};var Wl=class extends dr{constructor(e,t,s){super(new Uint16Array(e),t,s)}};var Xl=class extends dr{constructor(e,t,s){super(new Uint32Array(e),t,s)}};var Qt=class extends dr{constructor(e,t,s){super(new Float32Array(e),t,s)}},Pw=new Nr,Dl=new V,Zp=new V,ss=class{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let s=this.center;t!==void 0?s.copy(t):Pw.setFromPoints(e).getCenter(s);let o=0;for(let l=0,c=e.length;l<c;l++)o=Math.max(o,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Dl.subVectors(e,this.center);let t=Dl.lengthSq();if(t>this.radius*this.radius){let s=Math.sqrt(t),o=(s-this.radius)*.5;this.center.addScaledVector(Dl,o/s),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zp.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Dl.copy(e.center).add(Zp)),this.expandByPoint(Dl.copy(e.center).sub(Zp))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Iw=0,ji=new Ot,Jp=new On,Ta=new V,ki=new Nr,kl=new Nr,Fn=new V,Si=class r extends Pr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Iw++}),this.uuid=ja(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nw(e)?Xl:Wl)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let s=this.attributes.normal;if(s!==void 0){let l=new nt().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}let o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ji.makeRotationFromQuaternion(e),this.applyMatrix4(ji),this}rotateX(e){return ji.makeRotationX(e),this.applyMatrix4(ji),this}rotateY(e){return ji.makeRotationY(e),this.applyMatrix4(ji),this}rotateZ(e){return ji.makeRotationZ(e),this.applyMatrix4(ji),this}translate(e,t,s){return ji.makeTranslation(e,t,s),this.applyMatrix4(ji),this}scale(e,t,s){return ji.makeScale(e,t,s),this.applyMatrix4(ji),this}lookAt(e){return Jp.lookAt(e),Jp.updateMatrix(),this.applyMatrix4(Jp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ta).negate(),this.translate(Ta.x,Ta.y,Ta.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let s=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];s.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Qt(s,3))}else{let s=Math.min(e.length,t.count);for(let o=0;o<s;o++){let l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let l=t[s];ki.setFromBufferAttribute(l),this.morphTargetsRelative?(Fn.addVectors(this.boundingBox.min,ki.min),this.boundingBox.expandByPoint(Fn),Fn.addVectors(this.boundingBox.max,ki.max),this.boundingBox.expandByPoint(Fn)):(this.boundingBox.expandByPoint(ki.min),this.boundingBox.expandByPoint(ki.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ss);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){let s=this.boundingSphere.center;if(ki.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){let f=t[l];kl.setFromBufferAttribute(f),this.morphTargetsRelative?(Fn.addVectors(ki.min,kl.min),ki.expandByPoint(Fn),Fn.addVectors(ki.max,kl.max),ki.expandByPoint(Fn)):(ki.expandByPoint(kl.min),ki.expandByPoint(kl.max))}ki.getCenter(s);let o=0;for(let l=0,c=e.count;l<c;l++)Fn.fromBufferAttribute(e,l),o=Math.max(o,s.distanceToSquared(Fn));if(t)for(let l=0,c=t.length;l<c;l++){let f=t[l],h=this.morphTargetsRelative;for(let m=0,v=f.count;m<v;m++)Fn.fromBufferAttribute(f,m),h&&(Ta.fromBufferAttribute(e,m),Fn.add(Ta)),o=Math.max(o,s.distanceToSquared(Fn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let s=t.position,o=t.normal,l=t.uv,c=this.getAttribute("tangent");(c===void 0||c.count!==s.count)&&(c=new dr(new Float32Array(4*s.count),4),this.setAttribute("tangent",c));let f=[],h=[],m=new Uint8Array(s.count);for(let G=0;G<s.count;G++)f[G]=new V,h[G]=new V;let v=new V,_=new V,b=new V,g=new ut,x=new ut,R=new ut,S=new V,y=new V;function E(G,F,B){m[G]=m[F]=m[B]=1,v.fromBufferAttribute(s,G),_.fromBufferAttribute(s,F),b.fromBufferAttribute(s,B),g.fromBufferAttribute(l,G),x.fromBufferAttribute(l,F),R.fromBufferAttribute(l,B),_.sub(v),b.sub(v),x.sub(g),R.sub(g);let W=1/(x.x*R.y-R.x*x.y);isFinite(W)&&(S.copy(_).multiplyScalar(R.y).addScaledVector(b,-x.y).multiplyScalar(W),y.copy(b).multiplyScalar(x.x).addScaledVector(_,-R.x).multiplyScalar(W),f[G].add(S),f[F].add(S),f[B].add(S),h[G].add(y),h[F].add(y),h[B].add(y))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let G=0,F=D.length;G<F;++G){let B=D[G],W=B.start,j=B.count;for(let O=W,K=W+j;O<K;O+=3)E(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let C=new V,N=new V,L=new V,M=new V;function P(G){L.fromBufferAttribute(o,G),M.copy(L);let F=f[G];C.copy(F),C.sub(L.multiplyScalar(L.dot(F))).normalize(),N.crossVectors(M,F);let W=N.dot(h[G])<0?-1:1;c.setXYZW(G,C.x,C.y,C.z,W)}for(let G=0,F=s.count;G<F;++G)m[G]&&P(G);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==t.count)s=new dr(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let b=0,g=s.count;b<g;b++)s.setXYZ(b,0,0,0);let o=new V,l=new V,c=new V,f=new V,h=new V,m=new V,v=new V,_=new V;if(e)for(let b=0,g=e.count;b<g;b+=3){let x=e.getX(b+0),R=e.getX(b+1),S=e.getX(b+2);o.fromBufferAttribute(t,x),l.fromBufferAttribute(t,R),c.fromBufferAttribute(t,S),v.subVectors(c,l),_.subVectors(o,l),v.cross(_),f.fromBufferAttribute(s,x),h.fromBufferAttribute(s,R),m.fromBufferAttribute(s,S),f.add(v),h.add(v),m.add(v),s.setXYZ(x,f.x,f.y,f.z),s.setXYZ(R,h.x,h.y,h.z),s.setXYZ(S,m.x,m.y,m.z)}else for(let b=0,g=t.count;b<g;b+=3)o.fromBufferAttribute(t,b+0),l.fromBufferAttribute(t,b+1),c.fromBufferAttribute(t,b+2),v.subVectors(c,l),_.subVectors(o,l),v.cross(_),s.setXYZ(b+0,v.x,v.y,v.z),s.setXYZ(b+1,v.x,v.y,v.z),s.setXYZ(b+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)Fn.fromBufferAttribute(e,t),Fn.normalize(),e.setXYZ(t,Fn.x,Fn.y,Fn.z)}toNonIndexed(){function e(f,h){let m=f.array,v=f.itemSize,_=f.normalized,b=new m.constructor(h.length*v),g=0,x=0;for(let R=0,S=h.length;R<S;R++){f.isInterleavedBufferAttribute?g=h[R]*f.data.stride+f.offset:g=h[R]*v;for(let y=0;y<v;y++)b[x++]=m[g++]}return new dr(b,v,_)}if(this.index===null)return qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,s=this.index.array,o=this.attributes;for(let f in o){let h=o[f],m=e(h,s);t.setAttribute(f,m)}let l=this.morphAttributes;for(let f in l){let h=[],m=l[f];for(let v=0,_=m.length;v<_;v++){let b=m[v],g=e(b,s);h.push(g)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;let c=this.groups;for(let f=0,h=c.length;f<h;f++){let m=c[f];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let h=this.parameters;for(let m in h)h[m]!==void 0&&(e[m]=h[m]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let s=this.attributes;for(let h in s){let m=s[h];e.data.attributes[h]=m.toJSON(e.data)}let o={},l=!1;for(let h in this.morphAttributes){let m=this.morphAttributes[h],v=[];for(let _=0,b=m.length;_<b;_++){let g=m[_];v.push(g.toJSON(e.data))}v.length>0&&(o[h]=v,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);let c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));let f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let s=e.index;s!==null&&this.setIndex(s.clone());let o=e.attributes;for(let m in o){let v=o[m];this.setAttribute(m,v.clone(t))}let l=e.morphAttributes;for(let m in l){let v=[],_=l[m];for(let b=0,g=_.length;b<g;b++)v.push(_[b].clone(t));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;let c=e.groups;for(let m=0,v=c.length;m<v;m++){let _=c[m];this.addGroup(_.start,_.count,_.materialIndex)}let f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());let h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Kp=new V,Nw=new V,Lw=new nt,Fi=class{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,o){return this.normal.set(e,t,s),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){let o=Kp.subVectors(s,t).cross(Nw.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,s=!0){let o=e.delta(Kp),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let c=-(e.start.dot(this.normal)+this.constant)/l;return s===!0&&(c<0||c>1)?null:t.copy(e.start).addScaledVector(o,c)}intersectsLine(e){let t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let s=t||Lw.getNormalMatrix(e),o=this.coplanarPoint(Kp).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Dw=0,os=class extends Pr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dw++}),this.uuid=ja(),this.name="",this.type="Material",this.blending=qa,this.side=Vs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_m,this.blendDst=Sm,this.blendEquation=Co,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=La,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yb,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=nf,this.stencilZFail=nf,this.stencilZPass=nf,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let s=e[t];if(s===void 0){qe(`Material: parameter '${t}' has value of undefined.`);continue}let o=this[t];if(o===void 0){qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(s):o&&o.isVector2&&s&&s.isVector2||o&&o.isEuler&&s&&s.isEuler||o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[t]=s}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,s.blending=this.blending,s.side=this.side,s.shadowSide=this.shadowSide,s.vertexColors=this.vertexColors,s.opacity=this.opacity,s.transparent=this.transparent,s.blendSrc=this.blendSrc,s.blendDst=this.blendDst,s.blendEquation=this.blendEquation,s.blendSrcAlpha=this.blendSrcAlpha,s.blendDstAlpha=this.blendDstAlpha,s.blendEquationAlpha=this.blendEquationAlpha,s.blendColor=this.blendColor.getHex(),s.blendAlpha=this.blendAlpha,s.depthFunc=this.depthFunc,s.depthTest=this.depthTest,s.depthWrite=this.depthWrite,s.colorWrite=this.colorWrite,s.clipIntersection=this.clipIntersection,s.clipShadows=this.clipShadows,s.stencilWriteMask=this.stencilWriteMask,s.stencilFunc=this.stencilFunc,s.stencilRef=this.stencilRef,s.stencilFuncMask=this.stencilFuncMask,s.stencilFail=this.stencilFail,s.stencilZFail=this.stencilZFail,s.stencilZPass=this.stencilZPass,s.stencilWrite=this.stencilWrite,s.polygonOffset=this.polygonOffset,s.polygonOffsetFactor=this.polygonOffsetFactor,s.polygonOffsetUnits=this.polygonOffsetUnits,s.dithering=this.dithering,s.alphaTest=this.alphaTest,s.alphaHash=this.alphaHash,s.alphaToCoverage=this.alphaToCoverage,s.premultipliedAlpha=this.premultipliedAlpha,s.forceSinglePass=this.forceSinglePass,s.allowOverride=this.allowOverride,s.visible=this.visible,s.toneMapped=this.toneMapped,s.name=this.name,this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(s.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(s.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(s.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(s.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(s.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(s.clippingPlanes=this.clippingPlanes.map(l=>l.toJSON())),this.rotation!==void 0&&(s.rotation=this.rotation),this.depthPacking!==void 0&&(s.depthPacking=this.depthPacking),this.linewidth!==void 0&&(s.linewidth=this.linewidth),this.linecap!==void 0&&(s.linecap=this.linecap),this.linejoin!==void 0&&(s.linejoin=this.linejoin),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.wireframe!==void 0&&(s.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(s.flatShading=this.flatShading),this.fog!==void 0&&(s.fog=this.fog),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(l){let c=[];for(let f in l){let h=l[f];delete h.metadata,c.push(h)}return c}if(t){let l=o(e.textures),c=o(e.images);l.length>0&&(s.textures=l),c.length>0&&(s.images=c)}return s}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new je().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(s=>new Fi().fromJSON(s))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new ut().fromArray(s)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ut().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,s=null;if(t!==null){let o=t.length;s=new Array(o);for(let l=0;l!==o;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Qr=new V,Qp=new V,Fc=new V,Uc=new V,Ba=class{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Qr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qr.copy(this.origin).addScaledVector(this.direction,t),Qr.distanceToSquared(e))}distanceSqToSegment(e,t,s,o){Qp.copy(e).add(t).multiplyScalar(.5),Fc.copy(t).sub(e).normalize(),Uc.copy(this.origin).sub(Qp);let l=e.distanceTo(t)*.5,c=-this.direction.dot(Fc),f=Uc.dot(this.direction),h=-Uc.dot(Fc),m=Uc.lengthSq(),v=Math.abs(1-c*c),_,b,g,x;if(v>0)if(_=c*h-f,b=c*f-h,x=l*v,_>=0)if(b>=-x)if(b<=x){let R=1/v;_*=R,b*=R,g=_*(_+c*b+2*f)+b*(c*_+b+2*h)+m}else b=l,_=Math.max(0,-(c*b+f)),g=-_*_+b*(b+2*h)+m;else b=-l,_=Math.max(0,-(c*b+f)),g=-_*_+b*(b+2*h)+m;else b<=-x?(_=Math.max(0,-(-c*l+f)),b=_>0?-l:Math.min(Math.max(-l,-h),l),g=-_*_+b*(b+2*h)+m):b<=x?(_=0,b=Math.min(Math.max(-l,-h),l),g=b*(b+2*h)+m):(_=Math.max(0,-(c*l+f)),b=_>0?l:Math.min(Math.max(-l,-h),l),g=-_*_+b*(b+2*h)+m);else b=c>0?-l:l,_=Math.max(0,-(c*b+f)),g=-_*_+b*(b+2*h)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(Qp).addScaledVector(Fc,b),g}intersectSphere(e,t){if(e.radius<0)return null;Qr.subVectors(e.center,this.origin);let s=Qr.dot(this.direction),o=Qr.dot(Qr)-s*s,l=e.radius*e.radius;if(o>l)return null;let c=Math.sqrt(l-o),f=s-c,h=s+c;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){let s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,o,l,c,f,h,m=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,b=this.origin;return m>=0?(s=(e.min.x-b.x)*m,o=(e.max.x-b.x)*m):(s=(e.max.x-b.x)*m,o=(e.min.x-b.x)*m),v>=0?(l=(e.min.y-b.y)*v,c=(e.max.y-b.y)*v):(l=(e.max.y-b.y)*v,c=(e.min.y-b.y)*v),s>c||l>o||((l>s||isNaN(s))&&(s=l),(c<o||isNaN(o))&&(o=c),_>=0?(f=(e.min.z-b.z)*_,h=(e.max.z-b.z)*_):(f=(e.max.z-b.z)*_,h=(e.min.z-b.z)*_),s>h||f>o)||((f>s||s!==s)&&(s=f),(h<o||o!==o)&&(o=h),o<0)?null:this.at(s>=0?s:o,t)}intersectsBox(e){return this.intersectBox(e,Qr)!==null}intersectTriangle(e,t,s,o,l){let c=this.origin,f=this.direction,h=f.x,m=f.y,v=f.z,_=e.x-c.x,b=e.y-c.y,g=e.z-c.z,x=t.x-c.x,R=t.y-c.y,S=t.z-c.z,y=s.x-c.x,E=s.y-c.y,D=s.z-c.z,C=Math.abs(h),N=Math.abs(m),L=Math.abs(v),M,P,G,F,B,W,j,O,K,se,ee,me;if(C>=N&&C>=L?(G=h,W=_,K=x,me=y,h>=0?(M=m,P=v,F=b,B=g,j=R,O=S,se=E,ee=D):(M=v,P=m,F=g,B=b,j=S,O=R,se=D,ee=E)):N>=L?(G=m,W=b,K=R,me=E,m>=0?(M=v,P=h,F=g,B=_,j=S,O=x,se=D,ee=y):(M=h,P=v,F=_,B=g,j=x,O=S,se=y,ee=D)):(G=v,W=g,K=S,me=D,v>=0?(M=h,P=m,F=_,B=b,j=x,O=R,se=y,ee=E):(M=m,P=h,F=b,B=_,j=R,O=x,se=E,ee=y)),G===0)return null;let ne=M/G,ce=P/G,he=1/G,Be=F-ne*W,Ve=B-ce*W,re=j-ne*K,Pe=O-ce*K,ke=se-ne*me,We=ee-ce*me,Ne=ke*Pe-We*re,Qe=Be*We-Ve*ke,Vt=re*Ve-Pe*Be;if(o){if(Ne<0||Qe<0||Vt<0)return null}else if((Ne<0||Qe<0||Vt<0)&&(Ne>0||Qe>0||Vt>0))return null;let $e=Ne+Qe+Vt;if($e===0)return null;let Tt=he*(Ne*W+Qe*K+Vt*me);return($e>0?Tt<0:Tt>0)?null:this.at(Tt/$e,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Lr=class extends os{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new is,this.combine=xm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},tb=new Ot,go=new Ba,Oc=new ss,nb=new V,zc=new V,Bc=new V,Hc=new V,em=new V,Vc=new V,ib=new V,Gc=new V,jn=class extends On{constructor(e=new Si,t=new Lr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){let o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){let f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){let s=this.geometry,o=s.attributes.position,l=s.morphAttributes.position,c=s.morphTargetsRelative;t.fromBufferAttribute(o,e);let f=this.morphTargetInfluences;if(l&&f){Vc.set(0,0,0);for(let h=0,m=l.length;h<m;h++){let v=f[h],_=l[h];v!==0&&(em.fromBufferAttribute(_,e),c?Vc.addScaledVector(em,v):Vc.addScaledVector(em.sub(t),v))}t.add(Vc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let s=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Oc.copy(s.boundingSphere),Oc.applyMatrix4(l),go.copy(e.ray).recast(e.near),!(Oc.containsPoint(go.origin)===!1&&(go.intersectSphere(Oc,nb)===null||go.origin.distanceToSquared(nb)>(e.far-e.near)**2))&&(tb.copy(l).invert(),go.copy(e.ray).applyMatrix4(tb),!(s.boundingBox!==null&&go.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,go)))}_computeIntersections(e,t,s){let o,l=this.geometry,c=this.material,f=l.index,h=l.attributes.position,m=l.attributes.uv,v=l.attributes.uv1,_=l.attributes.normal,b=l.groups,g=l.drawRange;if(f!==null)if(Array.isArray(c))for(let x=0,R=b.length;x<R;x++){let S=b[x],y=c[S.materialIndex],E=Math.max(S.start,g.start),D=Math.min(f.count,Math.min(S.start+S.count,g.start+g.count));for(let C=E,N=D;C<N;C+=3){let L=f.getX(C),M=f.getX(C+1),P=f.getX(C+2);o=Wc(this,y,e,s,m,v,_,L,M,P),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{let x=Math.max(0,g.start),R=Math.min(f.count,g.start+g.count);for(let S=x,y=R;S<y;S+=3){let E=f.getX(S),D=f.getX(S+1),C=f.getX(S+2);o=Wc(this,c,e,s,m,v,_,E,D,C),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(c))for(let x=0,R=b.length;x<R;x++){let S=b[x],y=c[S.materialIndex],E=Math.max(S.start,g.start),D=Math.min(h.count,Math.min(S.start+S.count,g.start+g.count));for(let C=E,N=D;C<N;C+=3){let L=C,M=C+1,P=C+2;o=Wc(this,y,e,s,m,v,_,L,M,P),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{let x=Math.max(0,g.start),R=Math.min(h.count,g.start+g.count);for(let S=x,y=R;S<y;S+=3){let E=S,D=S+1,C=S+2;o=Wc(this,c,e,s,m,v,_,E,D,C),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}};function kw(r,e,t,s,o,l,c,f){let h;if(e.side===hi?h=s.intersectTriangle(c,l,o,!0,f):h=s.intersectTriangle(o,l,c,e.side===Vs,f),h===null)return null;Gc.copy(f),Gc.applyMatrix4(r.matrixWorld);let m=t.ray.origin.distanceTo(Gc);return m<t.near||m>t.far?null:{distance:m,point:Gc.clone(),object:r}}function Wc(r,e,t,s,o,l,c,f,h,m){r.getVertexPosition(f,zc),r.getVertexPosition(h,Bc),r.getVertexPosition(m,Hc);let v=kw(r,e,t,s,zc,Bc,Hc,ib);if(v){let _=new V;es.getBarycoord(ib,zc,Bc,Hc,_),o&&(v.uv=es.getInterpolatedAttribute(o,f,h,m,_,new ut)),l&&(v.uv1=es.getInterpolatedAttribute(l,f,h,m,_,new ut)),c&&(v.normal=es.getInterpolatedAttribute(c,f,h,m,_,new V),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));let b={a:f,b:h,c:m,normal:new V,materialIndex:0};es.getNormal(zc,Bc,Hc,b.normal),v.face=b,v.barycoord=_}return v}var ql=class extends ii{constructor(e=null,t=1,s=1,o,l,c,f,h,m=Un,v=Un,_,b){super(null,c,f,h,m,v,o,l,_,b),this.isDataTexture=!0,this.image={data:e,width:t,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $l=class extends dr{constructor(e,t,s,o=1){super(e,t,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ea=new Ot,rb=new Ot,Xc=[],sb=new Nr,Fw=new Ot,Fl=new jn,Ul=new ss,Yl=class extends jn{constructor(e,t,s){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new $l(new Float32Array(s*16),16),this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let o=0;o<s;o++)this.setMatrixAt(o,Fw)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Nr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<t;s++)this.getMatrixAt(s,Ea),sb.copy(e.boundingBox).applyMatrix4(Ea),this.boundingBox.union(sb)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ss),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<t;s++)this.getMatrixAt(s,Ea),Ul.copy(e.boundingSphere).applyMatrix4(Ea),this.boundingSphere.union(Ul)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let s=t.morphTargetInfluences,o=this.morphTexture.source.data.data,l=s.length+1,c=e*l+1;for(let f=0;f<s.length;f++)s[f]=o[c+f]}raycast(e,t){let s=this.matrixWorld,o=this.count;if(Fl.geometry=this.geometry,Fl.material=this.material,Fl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ul.copy(this.boundingSphere),Ul.applyMatrix4(s),e.ray.intersectsSphere(Ul)!==!1))for(let l=0;l<o;l++){this.getMatrixAt(l,Ea),rb.multiplyMatrices(s,Ea),Fl.matrixWorld=rb,Fl.raycast(e,Xc);for(let c=0,f=Xc.length;c<f;c++){let h=Xc[c];h.instanceId=l,h.object=this,t.push(h)}Xc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new $l(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let s=t.morphTargetInfluences,o=s.length+1;this.morphTexture===null&&(this.morphTexture=new ql(new Float32Array(o*this.count),o,this.count,Xf,Ki));let l=this.morphTexture.source.data.data,c=0;for(let m=0;m<s.length;m++)c+=s[m];let f=this.geometry.morphTargetsRelative?1:1-c,h=o*e;return l[h]=f,l.set(s,h+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},vo=new ss,Uw=new ut(.5,.5),qc=new V,Us=class{constructor(e=new Fi,t=new Fi,s=new Fi,o=new Fi,l=new Fi,c=new Fi){this.planes=[e,t,s,o,l,c]}set(e,t,s,o,l,c){let f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(s),f[3].copy(o),f[4].copy(l),f[5].copy(c),this}copy(e){let t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=Zi,s=!1){let o=this.planes,l=e.elements,c=l[0],f=l[1],h=l[2],m=l[3],v=l[4],_=l[5],b=l[6],g=l[7],x=l[8],R=l[9],S=l[10],y=l[11],E=l[12],D=l[13],C=l[14],N=l[15];if(o[0].setComponents(m-c,g-v,y-x,N-E).normalize(),o[1].setComponents(m+c,g+v,y+x,N+E).normalize(),o[2].setComponents(m+f,g+_,y+R,N+D).normalize(),o[3].setComponents(m-f,g-_,y-R,N-D).normalize(),s)o[4].setComponents(h,b,S,C).normalize(),o[5].setComponents(m-h,g-b,y-S,N-C).normalize();else if(o[4].setComponents(m-h,g-b,y-S,N-C).normalize(),t===Zi)o[5].setComponents(m+h,g+b,y+S,N+C).normalize();else if(t===Da)o[5].setComponents(h,b,S,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vo.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vo.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vo)}intersectsSprite(e){vo.center.set(0,0,0);let t=Uw.distanceTo(e.center);return vo.radius=.7071067811865476+t,vo.applyMatrix4(e.matrixWorld),this.intersectsSphere(vo)}intersectsSphere(e){let t=this.planes,s=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<o)return!1;return!0}intersectsBox(e){let t=this.planes;for(let s=0;s<6;s++){let o=t[s];if(qc.x=o.normal.x>0?e.max.x:e.min.x,qc.y=o.normal.y>0?e.max.y:e.min.y,qc.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(qc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ob=new Ot,yf=class r{constructor(){this.coordinateSystem=Zi,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,s=this._frustums;for(let o=0;o<t.length;o++){let l=t[o];ob.multiplyMatrices(l.projectionMatrix,l.matrixWorldInverse),s[o]===void 0&&(s[o]=new Us),s[o].setFromProjectionMatrix(ob,l.coordinateSystem,l.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let s=0;s<this._count;s++)if(t[s].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let s=0;s<this._count;s++)if(t[s].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let s=0;s<this._count;s++)if(t[s].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let s=0;s<this._count;s++)if(t[s].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let s=0;s<this._count;s++)if(t[s].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,s=e._frustums;for(let o=0;o<e._count;o++)t[o]===void 0&&(t[o]=new Us),t[o].copy(s[o]);return this._count=e._count,this}clone(){return new r().copy(this)}};var Dr=class extends os{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},bf=new V,_f=new V,ab=new Ot,Ol=new Ba,$c=new ss,tm=new V,lb=new V,Sf=class extends On{constructor(e=new Si,t=new Dr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,s=[0];for(let o=1,l=t.count;o<l;o++)bf.fromBufferAttribute(t,o-1),_f.fromBufferAttribute(t,o),s[o]=s[o-1],s[o]+=bf.distanceTo(_f);e.setAttribute("lineDistance",new Qt(s,1))}else qe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let s=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,c=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),$c.copy(s.boundingSphere),$c.applyMatrix4(o),$c.radius+=l,e.ray.intersectsSphere($c)===!1)return;ab.copy(o).invert(),Ol.copy(e.ray).applyMatrix4(ab);let f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,m=this.isLineSegments?2:1,v=s.index,b=s.attributes.position;if(v!==null){let g=Math.max(0,c.start),x=Math.min(v.count,c.start+c.count);for(let R=g,S=x-1;R<S;R+=m){let y=v.getX(R),E=v.getX(R+1),D=Yc(this,e,Ol,h,y,E,R);D&&t.push(D)}if(this.isLineLoop){let R=v.getX(x-1),S=v.getX(g),y=Yc(this,e,Ol,h,R,S,x-1);y&&t.push(y)}}else{let g=Math.max(0,c.start),x=Math.min(b.count,c.start+c.count);for(let R=g,S=x-1;R<S;R+=m){let y=Yc(this,e,Ol,h,R,R+1,R);y&&t.push(y)}if(this.isLineLoop){let R=Yc(this,e,Ol,h,x-1,g,x-1);R&&t.push(R)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){let o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){let f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}};function Yc(r,e,t,s,o,l,c){let f=r.geometry.attributes.position;if(bf.fromBufferAttribute(f,o),_f.fromBufferAttribute(f,l),t.distanceSqToSegment(bf,_f,tm,lb)>s)return;tm.applyMatrix4(r.matrixWorld);let m=e.ray.origin.distanceTo(tm);if(!(m<e.near||m>e.far))return{distance:m,point:lb.clone().applyMatrix4(r.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:r}}var ub=new V,cb=new V,So=class extends Sf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,s=[];for(let o=0,l=t.count;o<l;o+=2)ub.fromBufferAttribute(t,o),cb.fromBufferAttribute(t,o+1),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+ub.distanceTo(cb);e.setAttribute("lineDistance",new Qt(s,1))}else qe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var jl=class extends ii{constructor(e=[],t=Po,s,o,l,c,f,h,m,v){super(e,t,s,o,l,c,f,h,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Zl=class extends ii{constructor(e,t,s,o,l,c,f,h,m){super(e,t,s,o,l,c,f,h,m),this.isCanvasTexture=!0,this.needsUpdate=!0}};var as=class extends ii{constructor(e,t,s=hr,o,l,c,f=Un,h=Un,m,v=ns,_=1){if(v!==ns&&v!==cs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let b={width:e,height:t,depth:_};super(b,o,l,c,f,h,v,s,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Oa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Jl=class extends as{constructor(e,t=hr,s=Po,o,l,c=Un,f=Un,h,m=ns){let v={width:e,height:e,depth:1},_=[v,v,v,v,v,v];super(e,e,t,s,o,l,c,f,h,m),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Kl=class extends ii{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},kr=class r extends Si{constructor(e=1,t=1,s=1,o=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:o,heightSegments:l,depthSegments:c};let f=this;o=Math.floor(o),l=Math.floor(l),c=Math.floor(c);let h=[],m=[],v=[],_=[],b=0,g=0;x("z","y","x",-1,-1,s,t,e,c,l,0),x("z","y","x",1,-1,s,t,-e,c,l,1),x("x","z","y",1,1,e,s,t,o,c,2),x("x","z","y",1,-1,e,s,-t,o,c,3),x("x","y","z",1,-1,e,t,s,o,l,4),x("x","y","z",-1,-1,e,t,-s,o,l,5),this.setIndex(h),this.setAttribute("position",new Qt(m,3)),this.setAttribute("normal",new Qt(v,3)),this.setAttribute("uv",new Qt(_,2));function x(R,S,y,E,D,C,N,L,M,P,G){let F=C/M,B=N/P,W=C/2,j=N/2,O=L/2,K=M+1,se=P+1,ee=0,me=0,ne=new V;for(let ce=0;ce<se;ce++){let he=ce*B-j;for(let Be=0;Be<K;Be++){let Ve=Be*F-W;ne[R]=Ve*E,ne[S]=he*D,ne[y]=O,m.push(ne.x,ne.y,ne.z),ne[R]=0,ne[S]=0,ne[y]=L>0?1:-1,v.push(ne.x,ne.y,ne.z),_.push(Be/M),_.push(1-ce/P),ee+=1}}for(let ce=0;ce<P;ce++)for(let he=0;he<M;he++){let Be=b+he+K*ce,Ve=b+he+K*(ce+1),re=b+(he+1)+K*(ce+1),Pe=b+(he+1)+K*ce;h.push(Be,Ve,Pe),h.push(Ve,re,Pe),me+=6}f.addGroup(g,me,G),g+=me,b+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var xo=class r extends Si{constructor(e=1,t=1,s=1,o=32,l=1,c=!1,f=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:s,radialSegments:o,heightSegments:l,openEnded:c,thetaStart:f,thetaLength:h};let m=this;o=Math.floor(o),l=Math.floor(l);let v=[],_=[],b=[],g=[],x=0,R=[],S=s/2,y=0;E(),c===!1&&(e>0&&D(!0),t>0&&D(!1)),this.setIndex(v),this.setAttribute("position",new Qt(_,3)),this.setAttribute("normal",new Qt(b,3)),this.setAttribute("uv",new Qt(g,2));function E(){let C=new V,N=new V,L=0,M=(t-e)/s;for(let P=0;P<=l;P++){let G=[],F=P/l,B=F*(t-e)+e;for(let W=0;W<=o;W++){let j=W/o,O=j*h+f,K=Math.sin(O),se=Math.cos(O);N.x=B*K,N.y=-F*s+S,N.z=B*se,_.push(N.x,N.y,N.z),C.set(K,M,se).normalize(),b.push(C.x,C.y,C.z),g.push(j,1-F),G.push(x++)}R.push(G)}for(let P=0;P<o;P++)for(let G=0;G<l;G++){let F=R[G][P],B=R[G+1][P],W=R[G+1][P+1],j=R[G][P+1];(e>0||G!==0)&&(v.push(F,B,j),L+=3),(t>0||G!==l-1)&&(v.push(B,W,j),L+=3)}m.addGroup(y,L,0),y+=L}function D(C){let N=x,L=new ut,M=new V,P=0,G=C===!0?e:t,F=C===!0?1:-1;for(let W=1;W<=o;W++)_.push(0,S*F,0),b.push(0,F,0),g.push(.5,.5),x++;let B=x;for(let W=0;W<=o;W++){let O=W/o*h+f,K=Math.cos(O),se=Math.sin(O);M.x=G*se,M.y=S*F,M.z=G*K,_.push(M.x,M.y,M.z),b.push(0,F,0),L.x=K*.5+.5,L.y=se*.5*F+.5,g.push(L.x,L.y),x++}for(let W=0;W<o;W++){let j=N+W,O=B+W;C===!0?v.push(O,O+1,j):v.push(O+1,O,j),P+=3}m.addGroup(y,P,C===!0?1:2),y+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var jc=new V,Zc=new V,nm=new V,Jc=new es,Ql=class extends Si{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let o=Math.pow(10,4),l=Math.cos(Ia*t),c=e.getIndex(),f=e.getAttribute("position"),h=c?c.count:f.count,m=[0,0,0],v=["a","b","c"],_=new Array(3),b=new Map,g=[];for(let x=0;x<h;x+=3){c?(m[0]=c.getX(x),m[1]=c.getX(x+1),m[2]=c.getX(x+2)):(m[0]=x,m[1]=x+1,m[2]=x+2);let{a:R,b:S,c:y}=Jc;if(R.fromBufferAttribute(f,m[0]),S.fromBufferAttribute(f,m[1]),y.fromBufferAttribute(f,m[2]),Jc.getNormal(nm),_[0]=`${Math.round(R.x*o)},${Math.round(R.y*o)},${Math.round(R.z*o)}`,_[1]=`${Math.round(S.x*o)},${Math.round(S.y*o)},${Math.round(S.z*o)}`,_[2]=`${Math.round(y.x*o)},${Math.round(y.y*o)},${Math.round(y.z*o)}`,!(_[0]===_[1]||_[1]===_[2]||_[2]===_[0]))for(let E=0;E<3;E++){let D=(E+1)%3,C=_[E],N=_[D],L=Jc[v[E]],M=Jc[v[D]],P=`${C}_${N}`,G=`${N}_${C}`,F=b.get(G);F?(nm.dot(F.normal)<=l&&(g.push(L.x,L.y,L.z),g.push(M.x,M.y,M.z)),b.set(G,null)):b.has(P)||b.set(P,{index0:m[E],index1:m[D],normal:nm.clone()})}}for(let x of b.values())if(x){let{index0:R,index1:S}=x;jc.fromBufferAttribute(f,R),Zc.fromBufferAttribute(f,S),g.push(jc.x,jc.y,jc.z),g.push(Zc.x,Zc.y,Zc.z)}this.setAttribute("position",new Qt(g,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},xf=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){qe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let s=this.getUtoTmapping(e);return this.getPoint(s,t)}getPoints(e=5){let t=[];for(let s=0;s<=e;s++)t.push(this.getPoint(s/e));return t}getSpacedPoints(e=5){let t=[];for(let s=0;s<=e;s++)t.push(this.getPointAt(s/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],s,o=this.getPoint(0),l=0;t.push(0);for(let c=1;c<=e;c++)s=this.getPoint(c/e),l+=s.distanceTo(o),t.push(l),o=s;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let s=this.getLengths(),o=0,l=s.length,c;t?c=t:c=e*s[l-1];let f=0,h=l-1,m;for(;f<=h;)if(o=Math.floor(f+(h-f)/2),m=s[o]-c,m<0)f=o+1;else if(m>0)h=o-1;else{h=o;break}if(o=h,s[o]===c)return o/(l-1);let v=s[o],b=s[o+1]-v,g=(c-v)/b;return(o+g)/(l-1)}getTangent(e,t){let o=e-1e-4,l=e+1e-4;o<0&&(o=0),l>1&&(l=1);let c=this.getPoint(o),f=this.getPoint(l),h=t||(c.isVector2?new ut:new V);return h.copy(f).sub(c).normalize(),h}getTangentAt(e,t){let s=this.getUtoTmapping(e);return this.getTangent(s,t)}computeFrenetFrames(e,t=!1){let s=new V,o=[],l=[],c=[],f=new V,h=new Ot;for(let g=0;g<=e;g++){let x=g/e;o[g]=this.getTangentAt(x,new V)}l[0]=new V,c[0]=new V;let m=Number.MAX_VALUE,v=Math.abs(o[0].x),_=Math.abs(o[0].y),b=Math.abs(o[0].z);v<=m&&(m=v,s.set(1,0,0)),_<=m&&(m=_,s.set(0,1,0)),b<=m&&s.set(0,0,1),f.crossVectors(o[0],s).normalize(),l[0].crossVectors(o[0],f),c[0].crossVectors(o[0],l[0]);for(let g=1;g<=e;g++){if(l[g]=l[g-1].clone(),c[g]=c[g-1].clone(),f.crossVectors(o[g-1],o[g]),f.length()>Number.EPSILON){f.normalize();let x=Math.acos(gt(o[g-1].dot(o[g]),-1,1));l[g].applyMatrix4(h.makeRotationAxis(f,x))}c[g].crossVectors(o[g],l[g])}if(t===!0){let g=Math.acos(gt(l[0].dot(l[e]),-1,1));g/=e,o[0].dot(f.crossVectors(l[0],l[e]))>0&&(g=-g);for(let x=1;x<=e;x++)l[x].applyMatrix4(h.makeRotationAxis(o[x],g*x)),c[x].crossVectors(o[x],l[x])}return{tangents:o,normals:l,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}};function Wm(){let r=0,e=0,t=0,s=0;function o(l,c,f,h){r=l,e=f,t=-3*l+3*c-2*f-h,s=2*l-2*c+f+h}return{initCatmullRom:function(l,c,f,h,m){o(c,f,m*(f-l),m*(h-c))},initNonuniformCatmullRom:function(l,c,f,h,m,v,_){let b=(c-l)/m-(f-l)/(m+v)+(f-c)/v,g=(f-c)/v-(h-c)/(v+_)+(h-f)/_;b*=v,g*=v,o(c,f,b,g)},calc:function(l){let c=l*l,f=c*l;return r+e*l+t*c+s*f}}}var fb=new V,db=new V,im=new Wm,rm=new Wm,sm=new Wm,Ha=class extends xf{constructor(e=[],t=!1,s="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=s,this.tension=o}getPoint(e,t=new V){let s=t,o=this.points,l=o.length,c=(l-(this.closed?0:1))*e,f=Math.floor(c),h=c-f;this.closed?f+=f>0?0:(Math.floor(Math.abs(f)/l)+1)*l:h===0&&f===l-1&&(f=l-2,h=1);let m,v;this.closed||f>0?m=o[(f-1)%l]:(db.subVectors(o[0],o[1]).add(o[0]),m=db);let _=o[f%l],b=o[(f+1)%l];if(this.closed||f+2<l?v=o[(f+2)%l]:(fb.subVectors(o[l-1],o[l-2]).add(o[l-1]),v=fb),this.curveType==="centripetal"||this.curveType==="chordal"){let g=this.curveType==="chordal"?.5:.25,x=Math.pow(m.distanceToSquared(_),g),R=Math.pow(_.distanceToSquared(b),g),S=Math.pow(b.distanceToSquared(v),g);R<1e-4&&(R=1),x<1e-4&&(x=R),S<1e-4&&(S=R),im.initNonuniformCatmullRom(m.x,_.x,b.x,v.x,x,R,S),rm.initNonuniformCatmullRom(m.y,_.y,b.y,v.y,x,R,S),sm.initNonuniformCatmullRom(m.z,_.z,b.z,v.z,x,R,S)}else this.curveType==="catmullrom"&&(im.initCatmullRom(m.x,_.x,b.x,v.x,this.tension),rm.initCatmullRom(m.y,_.y,b.y,v.y,this.tension),sm.initCatmullRom(m.z,_.z,b.z,v.z,this.tension));return s.set(im.calc(h),rm.calc(h),sm.calc(h)),s}copy(e){super.copy(e),this.points=[];for(let t=0,s=e.points.length;t<s;t++){let o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,s=this.points.length;t<s;t++){let o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,s=e.points.length;t<s;t++){let o=e.points[t];this.points.push(new V().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};var ls=class r extends Si{constructor(e=1,t=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:o};let l=e/2,c=t/2,f=Math.floor(s),h=Math.floor(o),m=f+1,v=h+1,_=e/f,b=t/h,g=[],x=[],R=[],S=[];for(let y=0;y<v;y++){let E=y*b-c;for(let D=0;D<m;D++){let C=D*_-l;x.push(C,-E,0),R.push(0,0,1),S.push(D/f),S.push(1-y/h)}}for(let y=0;y<h;y++)for(let E=0;E<f;E++){let D=E+m*y,C=E+m*(y+1),N=E+1+m*(y+1),L=E+1+m*y;g.push(D,C,L),g.push(C,N,L)}this.setIndex(g),this.setAttribute("position",new Qt(x,3)),this.setAttribute("normal",new Qt(R,3)),this.setAttribute("uv",new Qt(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}};var eu=class r extends Si{constructor(e=1,t=.4,s=12,o=48,l=Math.PI*2,c=0,f=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:s,tubularSegments:o,arc:l,thetaStart:c,thetaLength:f},s=Math.floor(s),o=Math.floor(o);let h=[],m=[],v=[],_=[],b=new V,g=new V,x=new V;for(let R=0;R<=s;R++){let S=c+R/s*f;for(let y=0;y<=o;y++){let E=y/o*l;g.x=(e+t*Math.cos(S))*Math.cos(E),g.y=(e+t*Math.cos(S))*Math.sin(E),g.z=t*Math.sin(S),m.push(g.x,g.y,g.z),b.x=e*Math.cos(E),b.y=e*Math.sin(E),x.subVectors(g,b).normalize(),v.push(x.x,x.y,x.z),_.push(y/o),_.push(R/s)}}for(let R=1;R<=s;R++)for(let S=1;S<=o;S++){let y=(o+1)*R+S-1,E=(o+1)*(R-1)+S-1,D=(o+1)*(R-1)+S,C=(o+1)*R+S;h.push(y,E,C),h.push(E,D,C)}this.setIndex(h),this.setAttribute("position",new Qt(m,3)),this.setAttribute("normal",new Qt(v,3)),this.setAttribute("uv",new Qt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function No(r){let e={};for(let t in r){e[t]={};for(let s in r[t]){let o=r[t][s];if(hb(o))o.isRenderTargetTexture?(qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=o.clone();else if(Array.isArray(o))if(hb(o[0])){let l=[];for(let c=0,f=o.length;c<f;c++)l[c]=o[c].clone();e[t][s]=l}else e[t][s]=o.slice();else e[t][s]=o}}return e}function oi(r){let e={};for(let t=0;t<r.length;t++){let s=No(r[t]);for(let o in s)e[o]=s[o]}return e}function hb(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function Ow(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Xm(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}var l_={clone:No,merge:oi},zw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ji=class extends os{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zw,this.fragmentShader=Bw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=No(e.uniforms),this.uniformsGroups=Ow(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let o in this.uniforms){let c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let s={};for(let o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let s in e.uniforms){let o=e.uniforms[s];switch(this.uniforms[s]={},o.type){case"t":this.uniforms[s].value=t[o.value]||null;break;case"c":this.uniforms[s].value=new je().setHex(o.value);break;case"v2":this.uniforms[s].value=new ut().fromArray(o.value);break;case"v3":this.uniforms[s].value=new V().fromArray(o.value);break;case"v4":this.uniforms[s].value=new en().fromArray(o.value);break;case"m3":this.uniforms[s].value=new nt().fromArray(o.value);break;case"m4":this.uniforms[s].value=new Ot().fromArray(o.value);break;default:this.uniforms[s].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let s in e.extensions)this.extensions[s]=e.extensions[s];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Mf=class extends Ji{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},xi=class extends os{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Td,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new is,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Va=class extends xi{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ut(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new je(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new je(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new je(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return yo('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){yo('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var wf=class extends os{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Tf=class extends os{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Aa(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Kc(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}var Os=class{constructor(e,t,s,o){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=o!==void 0?o:new t.constructor(s),this.sampleValues=t,this.valueSize=s,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,s=this._cachedIndex,o=t[s],l=t[s-1];e:{t:{let c;n:{i:if(!(e<o)){for(let f=s+2;;){if(o===void 0){if(e<l)break i;return s=t.length,this._cachedIndex=s,this.copySampleValue_(s-1)}if(s===f)break;if(l=o,o=t[++s],e<o)break t}c=t.length;break n}if(!(e>=l)){let f=t[1];e<f&&(s=2,l=f);for(let h=s-2;;){if(l===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===h)break;if(o=l,l=t[--s-1],e>=l)break t}c=s,s=0;break n}break e}for(;s<c;){let f=s+c>>>1;e<t[f]?c=f:s=f+1}if(o=t[s],l=t[s-1],l===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(o===void 0)return s=t.length,this._cachedIndex=s,this.copySampleValue_(s-1)}this._cachedIndex=s,this.intervalChanged_(s,l,o)}return this.interpolate_(s,l,e,o)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o;for(let c=0;c!==o;++c)t[c]=s[l+c];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ef=class extends Os{constructor(e,t,s,o){super(e,t,s,o),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:lm,endingEnd:lm}}intervalChanged_(e,t,s){let o=this.parameterPositions,l=e-2,c=e+1,f=o[l],h=o[c];if(f===void 0)switch(this.getSettings_().endingStart){case um:l=e,f=2*t-s;break;case cm:l=o.length-2,f=t+o[l]-o[l+1];break;default:l=e,f=s}if(h===void 0)switch(this.getSettings_().endingEnd){case um:c=e,h=2*s-t;break;case cm:c=1,h=s+o[1]-o[0];break;default:c=e-1,h=t}let m=(s-t)*.5,v=this.valueSize;this._weightPrev=m/(t-f),this._weightNext=m/(h-s),this._offsetPrev=l*v,this._offsetNext=c*v}interpolate_(e,t,s,o){let l=this.resultBuffer,c=this.sampleValues,f=this.valueSize,h=e*f,m=h-f,v=this._offsetPrev,_=this._offsetNext,b=this._weightPrev,g=this._weightNext,x=(s-t)/(o-t),R=x*x,S=R*x,y=-b*S+2*b*R-b*x,E=(1+b)*S+(-1.5-2*b)*R+(-.5+b)*x+1,D=(-1-g)*S+(1.5+g)*R+.5*x,C=g*S-g*R;for(let N=0;N!==f;++N)l[N]=y*c[v+N]+E*c[m+N]+D*c[h+N]+C*c[_+N];return l}},Af=class extends Os{constructor(e,t,s,o){super(e,t,s,o)}interpolate_(e,t,s,o){let l=this.resultBuffer,c=this.sampleValues,f=this.valueSize,h=e*f,m=h-f,v=(s-t)/(o-t),_=1-v;for(let b=0;b!==f;++b)l[b]=c[m+b]*_+c[h+b]*v;return l}},Rf=class extends Os{constructor(e,t,s,o){super(e,t,s,o)}interpolate_(e){return this.copySampleValue_(e-1)}},Cf=class extends Os{interpolate_(e,t,s,o){let l=this.resultBuffer,c=this.sampleValues,f=this.valueSize,h=e*f,m=h-f,v=this.inTangents,_=this.outTangents;if(!v||!_){let x=(s-t)/(o-t),R=1-x;for(let S=0;S!==f;++S)l[S]=c[m+S]*R+c[h+S]*x;return l}let b=f*2,g=e-1;for(let x=0;x!==f;++x){let R=c[m+x],S=c[h+x],y=g*b+x*2,E=_[y],D=_[y+1],C=e*b+x*2,N=v[C],L=v[C+1],M=Vw(s,t,E,N,o);l[x]=u_(M,R,D,L,S)}return l}};function u_(r,e,t,s,o){let l=1-r;return l*l*l*e+3*l*l*r*t+3*l*r*r*s+r*r*r*o}function Hw(r,e,t,s,o){let l=1-r;return 3*l*l*(t-e)+6*l*r*(s-t)+3*r*r*(o-s)}function Vw(r,e,t,s,o){let l=(r-e)/(o-e);for(let c=0;c<8;c++){let f=u_(l,e,t,s,o)-r;if(Math.abs(f)<1e-10)break;let h=Hw(l,e,t,s,o);if(Math.abs(h)<1e-10)break;l=Math.max(0,Math.min(1,l-f/h))}return l}var Oi=class{constructor(e,t,s,o){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Aa(t,this.TimeBufferType),this.values=Aa(s,this.ValueBufferType),this.setInterpolation(o||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,s;if(t.toJSON!==this.toJSON)s=t.toJSON(e);else{s={name:e.name,times:Aa(e.times,Array),values:Aa(e.values,Array)};let o=e.getInterpolation();o!==e.DefaultInterpolation&&(s.interpolation=o),Kc(e.settings)&&(s.settings={inTangents:Aa(e.settings.inTangents,Array),outTangents:Aa(e.settings.outTangents,Array)})}return s.type=e.ValueTypeName,s}InterpolantFactoryMethodDiscrete(e){return new Rf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Af(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ef(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Cf(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Bl:t=this.InterpolantFactoryMethodDiscrete;break;case pf:t=this.InterpolantFactoryMethodLinear;break;case tf:t=this.InterpolantFactoryMethodSmooth;break;case am:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let s="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(s);return qe("KeyframeTrack:",s),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Bl;case this.InterpolantFactoryMethodLinear:return pf;case this.InterpolantFactoryMethodSmooth:return tf;case this.InterpolantFactoryMethodBezier:return am}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let s=0,o=t.length;s!==o;++s)t[s]+=e;Kc(this.settings)&&(pb(this.settings.inTangents,e),pb(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let s=0,o=t.length;s!==o;++s)t[s]*=e;Kc(this.settings)&&(mb(this.settings.inTangents,e),mb(this.settings.outTangents,e))}return this}trim(e,t){let s=this.times,o=s.length,l=0,c=o-1;for(;l!==o&&s[l]<e;)++l;for(;c!==-1&&s[c]>t;)--c;if(++c,l!==0||c!==o){l>=c&&(c=Math.max(c,1),l=c-1);let f=this.getValueSize();this.times=s.slice(l,c),this.values=this.values.slice(l*f,c*f)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(tt("KeyframeTrack: Invalid value size in track.",this),e=!1);let s=this.times,o=this.values,l=s.length;l===0&&(tt("KeyframeTrack: Track is empty.",this),e=!1);let c=null;for(let f=0;f!==l;f++){let h=s[f];if(typeof h=="number"&&isNaN(h)){tt("KeyframeTrack: Time is not a valid number.",this,f,h),e=!1;break}if(c!==null&&c>h){tt("KeyframeTrack: Out of order keys.",this,f,h,c),e=!1;break}c=h}if(o!==void 0&&iw(o))for(let f=0,h=o.length;f!==h;++f){let m=o[f];if(isNaN(m)){tt("KeyframeTrack: Value is not a valid number.",this,f,m),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),s=this.getValueSize(),o=this.getInterpolation()===tf,l=e.length-1,c=1;for(let f=1;f<l;++f){let h=!1,m=e[f],v=e[f+1];if(m!==v&&(f!==1||m!==e[0]))if(o)h=!0;else{let _=f*s,b=_-s,g=_+s;for(let x=0;x!==s;++x){let R=t[_+x];if(R!==t[b+x]||R!==t[g+x]){h=!0;break}}}if(h){if(f!==c){e[c]=e[f];let _=f*s,b=c*s;for(let g=0;g!==s;++g)t[b+g]=t[_+g]}++c}}if(l>0){e[c]=e[l];for(let f=l*s,h=c*s,m=0;m!==s;++m)t[h+m]=t[f+m];++c}return c!==e.length?(this.times=e.slice(0,c),this.values=t.slice(0,c*s)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),s=this.constructor,o=new s(this.name,e,t);return o.createInterpolant=this.createInterpolant,Kc(this.settings)&&(o.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),o}};function pb(r,e){for(let t=0,s=r.length;t!==s;t+=2)r[t]+=e}function mb(r,e){for(let t=0,s=r.length;t!==s;t+=2)r[t]*=e}Oi.prototype.ValueTypeName="";Oi.prototype.TimeBufferType=Float32Array;Oi.prototype.ValueBufferType=Float32Array;Oi.prototype.DefaultInterpolation=pf;var zs=class extends Oi{constructor(e,t,s){super(e,t,s)}};zs.prototype.ValueTypeName="bool";zs.prototype.ValueBufferType=Array;zs.prototype.DefaultInterpolation=Bl;zs.prototype.InterpolantFactoryMethodLinear=void 0;zs.prototype.InterpolantFactoryMethodSmooth=void 0;var Pf=class extends Oi{constructor(e,t,s,o){super(e,t,s,o)}};Pf.prototype.ValueTypeName="color";var If=class extends Oi{constructor(e,t,s,o){super(e,t,s,o)}};If.prototype.ValueTypeName="number";var Nf=class extends Os{constructor(e,t,s,o){super(e,t,s,o)}interpolate_(e,t,s,o){let l=this.resultBuffer,c=this.sampleValues,f=this.valueSize,h=(s-t)/(o-t),m=e*f;for(let v=m+f;m!==v;m+=4)Ir.slerpFlat(l,0,c,m-f,c,m,h);return l}},tu=class extends Oi{constructor(e,t,s,o){super(e,t,s,o)}InterpolantFactoryMethodLinear(e){return new Nf(this.times,this.values,this.getValueSize(),e)}};tu.prototype.ValueTypeName="quaternion";tu.prototype.InterpolantFactoryMethodSmooth=void 0;var Bs=class extends Oi{constructor(e,t,s){super(e,t,s)}};Bs.prototype.ValueTypeName="string";Bs.prototype.ValueBufferType=Array;Bs.prototype.DefaultInterpolation=Bl;Bs.prototype.InterpolantFactoryMethodLinear=void 0;Bs.prototype.InterpolantFactoryMethodSmooth=void 0;var Lf=class extends Oi{constructor(e,t,s,o){super(e,t,s,o)}};Lf.prototype.ValueTypeName="vector";var rf={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(gb(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!gb(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function gb(r){try{let e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Df=class{constructor(e,t,s){let o=this,l=!1,c=0,f=0,h,m=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=s,this._abortController=null,this.itemStart=function(v){f++,l===!1&&o.onStart!==void 0&&o.onStart(v,c,f),l=!0},this.itemEnd=function(v){c++,o.onProgress!==void 0&&o.onProgress(v,c,f),c===f&&(l=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(v){o.onError!==void 0&&o.onError(v)},this.resolveURL=function(v){return v=v.normalize("NFC"),h?h(v):v},this.setURLModifier=function(v){return h=v,this},this.addHandler=function(v,_){return m.push(v,_),this},this.removeHandler=function(v){let _=m.indexOf(v);return _!==-1&&m.splice(_,2),this},this.getHandler=function(v){for(let _=0,b=m.length;_<b;_+=2){let g=m[_],x=m[_+1];if(g.global&&(g.lastIndex=0),g.test(v))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},c_=new Df,Ga=class{constructor(e){this.manager=e!==void 0?e:c_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let s=this;return new Promise(function(o,l){s.load(e,o,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Ga.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ra=new WeakMap,kf=class extends Ga{constructor(e){super(e)}load(e,t,s,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let l=this,c=rf.get(`image:${e}`);if(c!==void 0){if(c.complete===!0)l.manager.itemStart(e),setTimeout(function(){t&&t(c),l.manager.itemEnd(e)},0);else{let _=Ra.get(c);_===void 0&&(_=[],Ra.set(c,_)),_.push({onLoad:t,onError:o})}return c}let f=ka("img");function h(){v(),t&&t(this);let _=Ra.get(this)||[];for(let b=0;b<_.length;b++){let g=_[b];g.onLoad&&g.onLoad(this)}Ra.delete(this),l.manager.itemEnd(e)}function m(_){v(),o&&o(_),rf.remove(`image:${e}`);let b=Ra.get(this)||[];for(let g=0;g<b.length;g++){let x=b[g];x.onError&&x.onError(_)}Ra.delete(this),l.manager.itemError(e),l.manager.itemEnd(e)}function v(){f.removeEventListener("load",h,!1),f.removeEventListener("error",m,!1)}return f.addEventListener("load",h,!1),f.addEventListener("error",m,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),rf.add(`image:${e}`,f),l.manager.itemStart(e),f.fetchPriority=this.priority,f.src=e,f}};var nu=class extends Ga{constructor(e){super(e)}load(e,t,s,o){let l=new ii,c=new kf(this.manager);return c.setPriority(this.priority),c.setCache(this.cache),c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(f){l.image=f,l.needsUpdate=!0,t!==void 0&&t(l)},s,o),l}},iu=class extends On{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var om=new Ot,vb=new V,yb=new V,Ff=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.mapType=si,this.map=null,this.mapPass=null,this.matrix=new Ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Us,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new en(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;vb.setFromMatrixPosition(e.matrixWorld),t.position.copy(vb),yb.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(yb),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,s,o){om.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),s.setFromProjectionMatrix(om,e.coordinateSystem,e.reversedDepth);let l=this._frameExtents,c=o?o.z/l.x:1,f=o?o.w/l.y:1,h=o?o.x/l.x:0,m=o?o.y/l.y:0;e.coordinateSystem===Da||e.reversedDepth?t.set(.5*c,0,0,.5*c+h,0,.5*f,0,.5*f+m,0,0,1,0,0,0,0,1):t.set(.5*c,0,0,.5*c+h,0,.5*f,0,.5*f+m,0,0,.5,.5,0,0,0,1),t.multiply(om)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Qc=new V,ef=new Ir,Rr=new V,ru=class extends On{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot,this.coordinateSystem=Zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Qc,ef,Rr),Rr.x===1&&Rr.y===1&&Rr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qc,ef,Rr.set(1,1,1)).invert()}updateWorldMatrix(e,t,s=!1){super.updateWorldMatrix(e,t,s),this.matrixWorld.decompose(Qc,ef,Rr),Rr.x===1&&Rr.y===1&&Rr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qc,ef,Rr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Fs=new V,bb=new ut,_b=new ut,fi=class extends ru{constructor(e=50,t=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ua*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ia*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ua*2*Math.atan(Math.tan(Ia*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){Fs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fs.x,Fs.y).multiplyScalar(-e/Fs.z),Fs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Fs.x,Fs.y).multiplyScalar(-e/Fs.z)}getViewSize(e,t){return this.getViewBounds(e,bb,_b),t.subVectors(_b,bb)}setViewOffset(e,t,s,o,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ia*.5*this.fov)/this.zoom,s=2*t,o=this.aspect*s,l=-.5*o,c=this.view;if(this.view!==null&&this.view.enabled){let h=c.fullWidth,m=c.fullHeight;l+=c.offsetX*o/h,t-=c.offsetY*s/m,o*=c.width/h,s*=c.height/m}let f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Mo=class extends ru{constructor(e=-1,t=1,s=1,o=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=o,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,o,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2,l=s-e,c=s+e,f=o+t,h=o-t;if(this.view!==null&&this.view.enabled){let m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,c=l+m*this.view.width,f-=v*this.view.offsetY,h=f-v*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},fm=class extends Ff{constructor(){super(new Mo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},wo=class extends iu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(On.DEFAULT_UP),this.updateMatrix(),this.target=new On,this.shadow=new fm}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},To=class extends iu{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Ca=-90,Pa=1,Wa=class extends On{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;let o=new fi(Ca,Pa,e,t);o.layers=this.layers,this.add(o);let l=new fi(Ca,Pa,e,t);l.layers=this.layers,this.add(l);let c=new fi(Ca,Pa,e,t);c.layers=this.layers,this.add(c);let f=new fi(Ca,Pa,e,t);f.layers=this.layers,this.add(f);let h=new fi(Ca,Pa,e,t);h.layers=this.layers,this.add(h);let m=new fi(Ca,Pa,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[s,o,l,c,f,h]=t;for(let m of t)this.remove(m);if(e===Zi)s.up.set(0,1,0),s.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Da)s.up.set(0,-1,0),s.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:s,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[l,c,f,h,m,v]=this.children,_=e.getRenderTarget(),b=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let R=s.texture.mipmapsAutoUpdate;s.texture.mipmapsAutoUpdate=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(s,0,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(s,1,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(s,2,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(s,3,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(s,4,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),s.texture.mipmapsAutoUpdate=R,e.setRenderTarget(s,5,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,v),e.setRenderTarget(_,b,g),e.xr.enabled=x,s.texture.needsPMREMUpdate=!0}},Uf=class extends fi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var qm="\\[\\]\\.:\\/",Gw=new RegExp("["+qm+"]","g"),$m="[^"+qm+"]",Ww="[^"+qm.replace("\\.","")+"]",Xw=/((?:WC+[\/:])*)/.source.replace("WC",$m),qw=/(WCOD+)?/.source.replace("WCOD",Ww),$w=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$m),Yw=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$m),jw=new RegExp("^"+Xw+qw+$w+Yw+"$"),Zw=["material","materials","bones","map"],dm=class{constructor(e,t,s){let o=s||Zt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,o)}getValue(e,t){this.bind();let s=this._targetGroup.nCachedObjects_,o=this._bindings[s];o!==void 0&&o.getValue(e,t)}setValue(e,t){let s=this._bindings;for(let o=this._targetGroup.nCachedObjects_,l=s.length;o!==l;++o)s[o].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,s=e.length;t!==s;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,s=e.length;t!==s;++t)e[t].unbind()}},Zt=class r{constructor(e,t,s){this.path=t,this.parsedPath=s||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,s){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,s):new r(e,t,s)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Gw,"")}static parseTrackName(e){let t=jw.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let s={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},o=s.nodeName&&s.nodeName.lastIndexOf(".");if(o!==void 0&&o!==-1){let l=s.nodeName.substring(o+1);Zw.indexOf(l)!==-1&&(s.nodeName=s.nodeName.substring(0,o),s.objectName=l)}if(s.propertyName===null||s.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return s}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let s=e.skeleton.getBoneByName(t);if(s!==void 0)return s}if(e.children){let s=function(l){for(let c=0;c<l.length;c++){let f=l[c];if(f.name===t||f.uuid===t)return f;let h=s(f.children);if(h)return h}return null},o=s(e.children);if(o)return o}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let s=this.resolvedProperty;for(let o=0,l=s.length;o!==l;++o)e[t++]=s[o]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let s=this.resolvedProperty;for(let o=0,l=s.length;o!==l;++o)s[o]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let s=this.resolvedProperty;for(let o=0,l=s.length;o!==l;++o)s[o]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let s=this.resolvedProperty;for(let o=0,l=s.length;o!==l;++o)s[o]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,s=t.objectName,o=t.propertyName,l=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){qe("PropertyBinding: No target node found for track: "+this.path+".");return}if(s){let m=t.objectIndex;switch(s){case"materials":if(!e.material){tt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){tt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){tt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let v=0;v<e.length;v++)if(e[v].name===m){m=v;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){tt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){tt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[s]===void 0){tt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[s]}if(m!==void 0){if(e[m]===void 0){tt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[m]}}let c=e[o];if(c===void 0){let m=t.nodeName;tt("PropertyBinding: Trying to update property for track: "+m+"."+o+" but it wasn't found.",e);return}let f=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?f=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(f=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(l!==void 0){if(o==="morphTargetInfluences"){if(!e.geometry){tt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){tt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[l]!==void 0&&(l=e.morphTargetDictionary[l])}h=this.BindingType.ArrayElement,this.resolvedProperty=c,this.propertyIndex=l}else c.fromArray!==void 0&&c.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=c):Array.isArray(c)?(h=this.BindingType.EntireArray,this.resolvedProperty=c):this.propertyName=o;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][f]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Zt.Composite=dm;Zt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Zt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Zt.prototype.GetterByBindingType=[Zt.prototype._getValue_direct,Zt.prototype._getValue_array,Zt.prototype._getValue_arrayElement,Zt.prototype._getValue_toArray];Zt.prototype.SetterByBindingTypeAndVersioning=[[Zt.prototype._setValue_direct,Zt.prototype._setValue_direct_setNeedsUpdate,Zt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_array,Zt.prototype._setValue_array_setNeedsUpdate,Zt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_arrayElement,Zt.prototype._setValue_arrayElement_setNeedsUpdate,Zt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_fromArray,Zt.prototype._setValue_fromArray_setNeedsUpdate,Zt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var LP=new Float32Array(1);var Sb=new Ot,Eo=class{constructor(e,t,s=0,o=1/0){this.ray=new Ba(e,t),this.near=s,this.far=o,this.camera=null,this.layers=new rs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):tt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Sb.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Sb),this}intersectObject(e,t=!0,s=[]){return hm(e,this,s,t),s.sort(xb),s}intersectObjects(e,t=!0,s=[]){for(let o=0,l=e.length;o<l;o++)hm(e[o],this,s,t);return s.sort(xb),s}};function xb(r,e){return r.distance-e.distance}function hm(r,e,t,s){let o=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(o=!1),o===!0&&s===!0){let l=r.children;for(let c=0,f=l.length;c<f;c++)hm(l[c],e,t,!0)}}var su=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,qe("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var Qm=class Qm{constructor(e,t,s,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,s,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let s=0;s<4;s++)this.elements[s]=e[s+t];return this}set(e,t,s,o){let l=this.elements;return l[0]=e,l[2]=t,l[1]=s,l[3]=o,this}};Qm.prototype.isMatrix2=!0;var pm=Qm;function Ym(r,e,t,s){let o=Jw(s);switch(t){case Dm:return r*e;case Xf:return r*e/o.components*o.byteLength;case qf:return r*e/o.components*o.byteLength;case Gs:return r*e*2/o.components*o.byteLength;case $f:return r*e*2/o.components*o.byteLength;case km:return r*e*3/o.components*o.byteLength;case zi:return r*e*4/o.components*o.byteLength;case Yf:return r*e*4/o.components*o.byteLength;case lu:case uu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case cu:case fu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Zf:case Kf:return Math.max(r,16)*Math.max(e,8)/4;case jf:case Jf:return Math.max(r,8)*Math.max(e,8)/2;case Qf:case ed:case nd:case id:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case td:case du:case rd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case sd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case od:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case ad:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case ld:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case ud:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case cd:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case fd:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case dd:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case hd:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case pd:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case md:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case gd:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case vd:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case yd:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case bd:case _d:case Sd:return Math.ceil(r/4)*Math.ceil(e/4)*16;case xd:case Md:return Math.ceil(r/4)*Math.ceil(e/4)*8;case hu:case wd:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Jw(r){switch(r){case si:case Pm:return{byteLength:1,components:1};case Ya:case Im:case pr:return{byteLength:2,components:1};case Gf:case Wf:return{byteLength:2,components:4};case hr:case Vf:case Ki:return{byteLength:4,components:1};case Nm:case Lm:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function N_(){let r=null,e=!1,t=null,s=null;function o(l,c){s=r.requestAnimationFrame(o),t(l,c)}return{start:function(){e!==!0&&t!==null&&r!==null&&(s=r.requestAnimationFrame(o),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function Qw(r){let e=new WeakMap;function t(f,h){let m=f.array,v=f.usage,_=m.byteLength,b=r.createBuffer();r.bindBuffer(h,b),r.bufferData(h,m,v),f.onUploadCallback();let g;if(m instanceof Float32Array)g=r.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)g=r.HALF_FLOAT;else if(m instanceof Uint16Array)f.isFloat16BufferAttribute?g=r.HALF_FLOAT:g=r.UNSIGNED_SHORT;else if(m instanceof Int16Array)g=r.SHORT;else if(m instanceof Uint32Array)g=r.UNSIGNED_INT;else if(m instanceof Int32Array)g=r.INT;else if(m instanceof Int8Array)g=r.BYTE;else if(m instanceof Uint8Array)g=r.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)g=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:b,type:g,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:_}}function s(f,h,m){let v=h.array,_=h.updateRanges;if(r.bindBuffer(m,f),_.length===0)r.bufferSubData(m,0,v);else{_.sort((g,x)=>g.start-x.start);let b=0;for(let g=1;g<_.length;g++){let x=_[b],R=_[g];R.start<=x.start+x.count+1?x.count=Math.max(x.count,R.start+R.count-x.start):(++b,_[b]=R)}_.length=b+1;for(let g=0,x=_.length;g<x;g++){let R=_[g];r.bufferSubData(m,R.start*v.BYTES_PER_ELEMENT,v,R.start,R.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);let h=e.get(f);h&&(r.deleteBuffer(h.buffer),e.delete(f))}function c(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){let v=e.get(f);(!v||v.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}let m=e.get(f);if(m===void 0)e.set(f,t(f,h));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,f,h),m.version=f.version}}return{get:o,remove:l,update:c}}var eT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tT=`#ifdef USE_ALPHAHASH
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
#endif`,nT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,iT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,oT=`#ifdef USE_AOMAP
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
#endif`,aT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lT=`#ifdef USE_BATCHING
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
#endif`,uT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hT=`#ifdef USE_IRIDESCENCE
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
#endif`,pT=`#ifdef USE_BUMPMAP
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
#endif`,mT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,_T=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ST=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,xT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,MT=`#define PI 3.141592653589793
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
} // validated`,wT=`vec3 transformedNormal = objectNormal;
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
#endif`,TT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ET=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,AT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,RT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,CT="gl_FragColor = linearToOutputTexel( gl_FragColor );",PT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,IT=`#ifdef USE_ENVMAP
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
#endif`,NT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,LT=`#ifdef USE_ENVMAP
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
#endif`,DT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kT=`#ifdef USE_ENVMAP
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
#endif`,FT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,UT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,OT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,BT=`#ifdef USE_GRADIENTMAP
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
}`,HT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,VT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,GT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,WT=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,XT=`#ifdef USE_ENVMAP
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
#endif`,qT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$T=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,YT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ZT=`PhysicalMaterial material;
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
#endif`,JT=`uniform sampler2D dfgLUT;
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
}`,KT=`
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
#endif`,QT=`#if defined( RE_IndirectDiffuse )
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
#endif`,eE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tE=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,nE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,oE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,aE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,uE=`#if defined( USE_POINTS_UV )
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
#endif`,cE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hE=`#if defined( USE_MORPHCOLORS )
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
#endif`,pE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mE=`#ifdef USE_MORPHTARGETS
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
#endif`,gE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,yE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,bE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_E=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,xE=`#ifdef USE_NORMALMAP
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
#endif`,ME=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,TE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,EE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,AE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,RE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,CE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,PE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,IE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,NE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,LE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,DE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,FE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,UE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,OE=`float getShadowMask() {
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
}`,zE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,BE=`#ifdef USE_SKINNING
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
#endif`,HE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,VE=`#ifdef USE_SKINNING
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
#endif`,GE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,WE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,XE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$E=`#ifdef USE_TRANSMISSION
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
#endif`,YE=`#ifdef USE_TRANSMISSION
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
#endif`,jE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ZE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,JE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,KE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,QE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eA=`uniform sampler2D t2D;
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
}`,tA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nA=`uniform float backgroundBlurriness;
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
}`,iA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sA=`#include <common>
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
}`,oA=`#if DEPTH_PACKING == 3200
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
}`,aA=`#define DISTANCE
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
}`,lA=`#define DISTANCE
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
}`,uA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fA=`uniform float scale;
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
}`,dA=`uniform vec3 diffuse;
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
}`,hA=`#include <common>
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
}`,pA=`uniform vec3 diffuse;
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
}`,mA=`#define LAMBERT
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
}`,gA=`#define LAMBERT
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
}`,vA=`#define MATCAP
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
}`,yA=`#define MATCAP
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
}`,bA=`#define NORMAL
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
}`,_A=`#define NORMAL
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
}`,SA=`#define PHONG
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
}`,xA=`#define PHONG
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
}`,MA=`#define STANDARD
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
}`,wA=`#define STANDARD
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
}`,TA=`#define TOON
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
}`,EA=`#define TOON
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
}`,AA=`uniform float size;
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
}`,RA=`uniform vec3 diffuse;
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
}`,CA=`#include <common>
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
}`,PA=`uniform vec3 color;
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
}`,IA=`uniform float rotation;
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
}`,NA=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:eT,alphahash_pars_fragment:tT,alphamap_fragment:nT,alphamap_pars_fragment:iT,alphatest_fragment:rT,alphatest_pars_fragment:sT,aomap_fragment:oT,aomap_pars_fragment:aT,batching_pars_vertex:lT,batching_vertex:uT,begin_vertex:cT,beginnormal_vertex:fT,bsdfs:dT,iridescence_fragment:hT,bumpmap_pars_fragment:pT,clipping_planes_fragment:mT,clipping_planes_pars_fragment:gT,clipping_planes_pars_vertex:vT,clipping_planes_vertex:yT,color_fragment:bT,color_pars_fragment:_T,color_pars_vertex:ST,color_vertex:xT,common:MT,defaultnormal_vertex:wT,displacementmap_pars_vertex:TT,displacementmap_vertex:ET,emissivemap_fragment:AT,emissivemap_pars_fragment:RT,colorspace_fragment:CT,colorspace_pars_fragment:PT,envmap_fragment:IT,envmap_common_pars_fragment:NT,envmap_pars_fragment:LT,envmap_pars_vertex:DT,envmap_physical_pars_fragment:XT,envmap_vertex:kT,fog_vertex:FT,fog_pars_vertex:UT,fog_fragment:OT,fog_pars_fragment:zT,gradientmap_pars_fragment:BT,lightmap_pars_fragment:HT,lights_lambert_fragment:VT,lights_lambert_pars_fragment:GT,lights_pars_begin:WT,lights_toon_fragment:qT,lights_toon_pars_fragment:$T,lights_phong_fragment:YT,lights_phong_pars_fragment:jT,lights_physical_fragment:ZT,lights_physical_pars_fragment:JT,lights_fragment_begin:KT,lights_fragment_maps:QT,lights_fragment_end:eE,lightprobes_pars_fragment:tE,logdepthbuf_fragment:nE,logdepthbuf_pars_fragment:iE,logdepthbuf_pars_vertex:rE,logdepthbuf_vertex:sE,map_fragment:oE,map_pars_fragment:aE,map_particle_fragment:lE,map_particle_pars_fragment:uE,metalnessmap_fragment:cE,metalnessmap_pars_fragment:fE,morphinstance_vertex:dE,morphcolor_vertex:hE,morphnormal_vertex:pE,morphtarget_pars_vertex:mE,morphtarget_vertex:gE,normal_fragment_begin:vE,normal_fragment_maps:yE,normal_pars_fragment:bE,normal_pars_vertex:_E,normal_vertex:SE,normalmap_pars_fragment:xE,clearcoat_normal_fragment_begin:ME,clearcoat_normal_fragment_maps:wE,clearcoat_pars_fragment:TE,iridescence_pars_fragment:EE,opaque_fragment:AE,packing:RE,premultiplied_alpha_fragment:CE,project_vertex:PE,dithering_fragment:IE,dithering_pars_fragment:NE,roughnessmap_fragment:LE,roughnessmap_pars_fragment:DE,shadowmap_pars_fragment:kE,shadowmap_pars_vertex:FE,shadowmap_vertex:UE,shadowmask_pars_fragment:OE,skinbase_vertex:zE,skinning_pars_vertex:BE,skinning_vertex:HE,skinnormal_vertex:VE,specularmap_fragment:GE,specularmap_pars_fragment:WE,tonemapping_fragment:XE,tonemapping_pars_fragment:qE,transmission_fragment:$E,transmission_pars_fragment:YE,uv_pars_fragment:jE,uv_pars_vertex:ZE,uv_vertex:JE,worldpos_vertex:KE,background_vert:QE,background_frag:eA,backgroundCube_vert:tA,backgroundCube_frag:nA,cube_vert:iA,cube_frag:rA,depth_vert:sA,depth_frag:oA,distance_vert:aA,distance_frag:lA,equirect_vert:uA,equirect_frag:cA,linedashed_vert:fA,linedashed_frag:dA,meshbasic_vert:hA,meshbasic_frag:pA,meshlambert_vert:mA,meshlambert_frag:gA,meshmatcap_vert:vA,meshmatcap_frag:yA,meshnormal_vert:bA,meshnormal_frag:_A,meshphong_vert:SA,meshphong_frag:xA,meshphysical_vert:MA,meshphysical_frag:wA,meshtoon_vert:TA,meshtoon_frag:EA,points_vert:AA,points_frag:RA,shadow_vert:CA,shadow_frag:PA,sprite_vert:IA,sprite_frag:NA},Le={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},Ur={basic:{uniforms:oi([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:oi([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new je(0)},envMapIntensity:{value:1}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:oi([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:oi([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:oi([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new je(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:oi([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:oi([Le.points,Le.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:oi([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:oi([Le.common,Le.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:oi([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:oi([Le.sprite,Le.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distance:{uniforms:oi([Le.common,Le.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distance_vert,fragmentShader:dt.distance_frag},shadow:{uniforms:oi([Le.lights,Le.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};Ur.physical={uniforms:oi([Ur.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new nt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};var Ad={r:0,b:0,g:0},LA=new Ot,L_=new nt;L_.set(-1,0,0,0,1,0,0,0,1);function DA(r,e,t,s,o,l){let c=new je(0),f=o===!0?0:1,h,m,v=null,_=0,b=null;function g(E){let D=E.isScene===!0?E.background:null;if(D&&D.isTexture){let C=E.backgroundBlurriness>0;D=e.get(D,C)}return D}function x(E){let D=!1,C=g(E);C===null?S(c,f):C&&C.isColor&&(S(C,1),D=!0);let N=r.xr.getEnvironmentBlendMode();N==="additive"?t.buffers.color.setClear(0,0,0,1,l):N==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(r.autoClear||D)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function R(E,D){let C=g(D);C&&C.isCubeTexture?(m===void 0&&(m=new jn(new kr(1,1,1),new Ji({name:"BackgroundCubeMaterial",uniforms:No(Ur.backgroundCube.uniforms),vertexShader:Ur.backgroundCube.vertexShader,fragmentShader:Ur.backgroundCube.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(N,L,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),m.material.uniforms.envMap.value=C,m.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(LA.makeRotationFromEuler(D.backgroundRotation)).transpose(),C.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(L_),m.material.toneMapped=bt.getTransfer(C.colorSpace)!==Ut,(v!==C||_!==C.version||b!==r.toneMapping)&&(m.material.needsUpdate=!0,v=C,_=C.version,b=r.toneMapping),m.layers.enableAll(),E.unshift(m,m.geometry,m.material,0,0,null)):C&&C.isTexture&&(h===void 0&&(h=new jn(new ls(2,2),new Ji({name:"BackgroundMaterial",uniforms:No(Ur.background.uniforms),vertexShader:Ur.background.vertexShader,fragmentShader:Ur.background.fragmentShader,side:Vs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=C,h.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,h.material.toneMapped=bt.getTransfer(C.colorSpace)!==Ut,C.matrixAutoUpdate===!0&&C.updateMatrix(),h.material.uniforms.uvTransform.value.copy(C.matrix),(v!==C||_!==C.version||b!==r.toneMapping)&&(h.material.needsUpdate=!0,v=C,_=C.version,b=r.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null))}function S(E,D){E.getRGB(Ad,Xm(r)),t.buffers.color.setClear(Ad.r,Ad.g,Ad.b,D,l)}function y(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return c},setClearColor:function(E,D=1){c.set(E),f=D,S(c,f)},getClearAlpha:function(){return f},setClearAlpha:function(E){f=E,S(c,f)},render:x,addToRenderList:R,dispose:y}}function kA(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},o=b(null),l=o,c=!1;function f(B,W,j,O,K){let se=!1,ee=_(B,O,j,W);l!==ee&&(l=ee,m(l.object)),se=g(B,O,j,K),se&&x(B,O,j,K),K!==null&&e.update(K,r.ELEMENT_ARRAY_BUFFER),(se||c)&&(c=!1,C(B,W,j,O),K!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function h(){return r.createVertexArray()}function m(B){return r.bindVertexArray(B)}function v(B){return r.deleteVertexArray(B)}function _(B,W,j,O){let K=O.wireframe===!0,se=s[W.id];se===void 0&&(se={},s[W.id]=se);let ee=B.isInstancedMesh===!0?B.id:0,me=se[ee];me===void 0&&(me={},se[ee]=me);let ne=me[j.id];ne===void 0&&(ne={},me[j.id]=ne);let ce=ne[K];return ce===void 0&&(ce=b(h()),ne[K]=ce),ce}function b(B){let W=[],j=[],O=[];for(let K=0;K<t;K++)W[K]=0,j[K]=0,O[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:j,attributeDivisors:O,object:B,attributes:{},index:null}}function g(B,W,j,O){let K=l.attributes,se=W.attributes,ee=0,me=j.getAttributes();for(let ne in me)if(me[ne].location>=0){let he=K[ne],Be=se[ne];if(Be===void 0&&(ne==="instanceMatrix"&&B.instanceMatrix&&(Be=B.instanceMatrix),ne==="instanceColor"&&B.instanceColor&&(Be=B.instanceColor)),he===void 0||he.attribute!==Be||Be&&he.data!==Be.data)return!0;ee++}return l.attributesNum!==ee||l.index!==O}function x(B,W,j,O){let K={},se=W.attributes,ee=0,me=j.getAttributes();for(let ne in me)if(me[ne].location>=0){let he=se[ne];he===void 0&&(ne==="instanceMatrix"&&B.instanceMatrix&&(he=B.instanceMatrix),ne==="instanceColor"&&B.instanceColor&&(he=B.instanceColor));let Be={};Be.attribute=he,he&&he.data&&(Be.data=he.data),K[ne]=Be,ee++}l.attributes=K,l.attributesNum=ee,l.index=O}function R(){let B=l.newAttributes;for(let W=0,j=B.length;W<j;W++)B[W]=0}function S(B){y(B,0)}function y(B,W){let j=l.newAttributes,O=l.enabledAttributes,K=l.attributeDivisors;j[B]=1,O[B]===0&&(r.enableVertexAttribArray(B),O[B]=1),K[B]!==W&&(r.vertexAttribDivisor(B,W),K[B]=W)}function E(){let B=l.newAttributes,W=l.enabledAttributes;for(let j=0,O=W.length;j<O;j++)W[j]!==B[j]&&(r.disableVertexAttribArray(j),W[j]=0)}function D(B,W,j,O,K,se,ee){ee===!0?r.vertexAttribIPointer(B,W,j,K,se):r.vertexAttribPointer(B,W,j,O,K,se)}function C(B,W,j,O){R();let K=O.attributes,se=j.getAttributes(),ee=W.defaultAttributeValues;for(let me in se){let ne=se[me];if(ne.location>=0){let ce=K[me];if(ce===void 0&&(me==="instanceMatrix"&&B.instanceMatrix&&(ce=B.instanceMatrix),me==="instanceColor"&&B.instanceColor&&(ce=B.instanceColor)),ce!==void 0){let he=ce.normalized,Be=ce.itemSize,Ve=e.get(ce);if(Ve===void 0)continue;let re=Ve.buffer,Pe=Ve.type,ke=Ve.bytesPerElement,We=Pe===r.INT||Pe===r.UNSIGNED_INT||ce.gpuType===Vf;if(ce.isInterleavedBufferAttribute){let Ne=ce.data,Qe=Ne.isInterleavedBuffer===!0?Ne.stride:Ne.itemSize,Vt=ce.offset;if(Ne.isInstancedInterleavedBuffer||Ne.isInstancedBufferAttribute){for(let $e=0;$e<ne.locationSize;$e++)y(ne.location+$e,Ne.meshPerAttribute);B.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Ne.meshPerAttribute*Ne.count)}else for(let $e=0;$e<ne.locationSize;$e++)S(ne.location+$e);r.bindBuffer(r.ARRAY_BUFFER,re);for(let $e=0;$e<ne.locationSize;$e++)D(ne.location+$e,Be/ne.locationSize,Pe,he,Qe*ke,(Vt+Be/ne.locationSize*$e)*ke,We)}else{if(ce.isInstancedBufferAttribute){for(let Ne=0;Ne<ne.locationSize;Ne++)y(ne.location+Ne,ce.meshPerAttribute);B.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Ne=0;Ne<ne.locationSize;Ne++)S(ne.location+Ne);r.bindBuffer(r.ARRAY_BUFFER,re);for(let Ne=0;Ne<ne.locationSize;Ne++)D(ne.location+Ne,Be/ne.locationSize,Pe,he,Be*ke,Be/ne.locationSize*Ne*ke,We)}}else if(ee!==void 0){let he=ee[me];if(he!==void 0)switch(he.length){case 2:r.vertexAttrib2fv(ne.location,he);break;case 3:r.vertexAttrib3fv(ne.location,he);break;case 4:r.vertexAttrib4fv(ne.location,he);break;default:r.vertexAttrib1fv(ne.location,he)}}}}E()}function N(){G();for(let B in s){let W=s[B];for(let j in W){let O=W[j];for(let K in O){let se=O[K];for(let ee in se)v(se[ee].object),delete se[ee];delete O[K]}}delete s[B]}}function L(B){if(s[B.id]===void 0)return;let W=s[B.id];for(let j in W){let O=W[j];for(let K in O){let se=O[K];for(let ee in se)v(se[ee].object),delete se[ee];delete O[K]}}delete s[B.id]}function M(B){for(let W in s){let j=s[W];for(let O in j){let K=j[O];if(K[B.id]===void 0)continue;let se=K[B.id];for(let ee in se)v(se[ee].object),delete se[ee];delete K[B.id]}}}function P(B){for(let W in s){let j=s[W],O=B.isInstancedMesh===!0?B.id:0,K=j[O];if(K!==void 0){for(let se in K){let ee=K[se];for(let me in ee)v(ee[me].object),delete ee[me];delete K[se]}delete j[O],Object.keys(j).length===0&&delete s[W]}}}function G(){F(),c=!0,l!==o&&(l=o,m(l.object))}function F(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:G,resetDefaultState:F,dispose:N,releaseStatesOfGeometry:L,releaseStatesOfObject:P,releaseStatesOfProgram:M,initAttributes:R,enableAttribute:S,disableUnusedAttributes:E}}function FA(r,e,t){let s;function o(h){s=h}function l(h,m){r.drawArrays(s,h,m),t.update(m,s,1)}function c(h,m,v){v!==0&&(r.drawArraysInstanced(s,h,m,v),t.update(m,s,v))}function f(h,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,h,0,m,0,v);let b=0;for(let g=0;g<v;g++)b+=m[g];t.update(b,s,1)}this.setMode=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function UA(r,e,t,s){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){let M=e.get("EXT_texture_filter_anisotropic");o=r.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(M){return!(M!==zi&&s.convert(M)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(M){let P=M===pr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==si&&M!==Ki&&!P&&s.convert(M)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function h(M){if(M==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp",v=h(m);v!==m&&(qe("WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);let _=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),b=t.logarithmicDepthBuffer===!0&&_===!1;t.reversedDepthBuffer===!0&&_===!1&&qe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&_===!0&&qe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let g=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),E=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),D=r.getParameter(r.MAX_VARYING_VECTORS),C=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),N=r.getParameter(r.MAX_SAMPLES),L=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:f,precision:m,logarithmicDepthBuffer:b,reversedDepthBuffer:_,maxTextures:g,maxVertexTextures:x,maxTextureSize:R,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:E,maxVaryings:D,maxFragmentUniforms:C,maxSamples:N,samples:L}}function OA(r){let e=this,t=null,s=0,o=!1,l=!1,c=new Fi,f=new nt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(_,b){let g=_.length!==0||b||s!==0||o;return o=b,s=_.length,g},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,b){t=v(_,b,0)},this.setState=function(_,b,g){let x=_.clippingPlanes,R=_.clipIntersection,S=_.clipShadows,y=r.get(_);if(!o||x===null||x.length===0||l&&!S)l?v(null):m();else{let E=l?0:s,D=E*4,C=y.clippingState||null;h.value=C,C=v(x,b,D,g);for(let N=0;N!==D;++N)C[N]=t[N];y.clippingState=C,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=E}};function m(){h.value!==t&&(h.value=t,h.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(_,b,g,x){let R=_!==null?_.length:0,S=null;if(R!==0){if(S=h.value,x!==!0||S===null){let y=g+R*4,E=b.matrixWorldInverse;f.getNormalMatrix(E),(S===null||S.length<y)&&(S=new Float32Array(y));for(let D=0,C=g;D!==R;++D,C+=4)c.copy(_[D]).applyMatrix4(E,f),c.normal.toArray(S,C),S[C+3]=c.constant}h.value=S,h.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,S}}var gu=class extends Ui{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let s={width:e,height:e,depth:1},o=[s,s,s,s,s,s];this.texture=new jl(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new kr(5,5,5),l=new Ji({name:"CubemapFromEquirect",uniforms:No(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:hi,blending:Ro});l.uniforms.tEquirect.value=t;let c=new jn(o,l),f=t.minFilter;return t.minFilter===us&&(t.minFilter=di),new Wa(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,s=!0,o=!0){let l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,s,o);e.setRenderTarget(l)}},f_=256,zA=3,BA=20,D_=256,k_=16,HA=3,VA=new V,GA=new je,Ja=class r{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Wa(1,10,null),this._boxMesh=new jn(new kr(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,s=.1,o=100,l={}){let{size:c=256,position:f=VA}=l,h=this._renderer;this._setSize(c);let m=this._allocateTarget(),v=this._getSourceTarget(!0);t>0&&(v.texture.mipmapsAutoUpdate=!1);let _=h.autoClear,b=h.autoClearColor,g=h.autoClearDepth,x=h.autoClearStencil,R=e.background;h.autoClear=!0,h.autoClearColor=!0,h.autoClearDepth=!0,h.autoClearStencil=!0,R===null&&(e.background=h.getClearColor(GA));let S=new Wa(s,o,v);return S.position.copy(f),S.update(h,e),h.autoClear=_,h.autoClearColor=b,h.autoClearDepth=g,h.autoClearStencil=x,e.background=R,t>0&&(v.texture.mipmapsAutoUpdate=!0,this._blur(m,t)),this._applyPMREM(m),m}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=p_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=h_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(f_,Vm(e))}_fromTexture(e,t){e.mapping===Po||e.mapping===$a?this._setSize(e.image.length===0?f_:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let s=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(s),s}_allocateTarget(){let e=this._cubeSize,t=d_(e,!1,!1),s=Math.log2(e)-zA;for(let o=0;o<=s;o++)t.texture.mipmaps.push({width:e>>o,height:e>>o});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,s=this._sourceTarget;return(s===null||s.width!==t||e&&s.depthBuffer===!1)&&(s!==null&&s.dispose(),this._sourceTarget=d_(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,s){let o=this._boxMesh,l=this._cubeCamera;o.material=s,l.renderTarget=e,l.activeMipmapLevel=t;let c=e.width>>t;e.viewport.set(0,0,c,c),l.update(this._renderer,o),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Po||e.mapping===$a?(this._cubemapMaterial===null&&(this._cubemapMaterial=p_()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=h_()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=WA(),this._integrationMaterial=XA());let t=this._cubeSize,s=e.texture.mipmaps.length-1,o=this._ggxMaterial.uniforms;o.envMap.value=this._sourceTarget.texture;let l=this._integrationMaterial.uniforms;l.envMap.value=this._sourceTarget.texture,l.sourceLod.value=Math.log2(t/k_);for(let c=0;c<=s;c++){let f=r.lodToRoughness(c,s);if(c>s-HA)l.roughness.value=f,this._renderCube(e,c,this._integrationMaterial);else{let h=f>0?Math.log2(t)+.5*Math.log2(6/(D_*Math.pow(f,4)))+.5:0;o.roughness.value=f,o.lodBias.value=h,this._renderCube(e,c,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=qA());let s=this._blurMaterial,o=s.uniforms,l=this._sourceTarget;o.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,o.envMap.value=l.texture,this._renderCube(e,0,s),o.envMap.value=e.texture,this._renderCube(l,0,s)}};function d_(r,e,t){return new gu(r,{minFilter:us,generateMipmaps:e,type:pr,colorSpace:bo,depthBuffer:t})}function vu(r,e,t){return new Ji({name:r,uniforms:e,vertexShader:dt.cube_vert,fragmentShader:t,side:hi,blending:Ro,depthTest:!1,depthWrite:!1})}function WA(){return vu("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${D_}u

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
	`)}function XA(){return vu("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:k_}},`

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
	`)}function qA(){return vu("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${BA}
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
	`)}function h_(){return vu("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function p_(){return vu("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function $A(r){let e=new WeakMap,t=new WeakMap,s=null;function o(b,g=!1){return b==null?null:g?c(b):l(b)}function l(b){if(b&&b.isTexture){let g=b.mapping;if(g===zf||g===Bf)if(e.has(b)){let x=e.get(b).texture;return f(x,b.mapping)}else{let x=b.image;if(x&&x.height>0){let R=new gu(x.height);return R.fromEquirectangularTexture(r,b),e.set(b,R),b.addEventListener("dispose",m),f(R.texture,b.mapping)}else return null}}return b}function c(b){if(b&&b.isTexture&&b.isPMREMTexture!==!0){let g=b.mapping,x=g===zf||g===Bf,R=g===Po||g===$a;if(x||R){let S=t.get(b),y=S!==void 0?S.texture.pmremVersion:0;if(b.isRenderTargetTexture&&b.pmremVersion!==y)return s===null&&(s=new Ja(r)),S=x?s.fromEquirectangular(b,S):s.fromCubemap(b,S),S.texture.pmremVersion=b.pmremVersion,t.set(b,S),S.texture;if(S!==void 0)return S.texture;{let E=b.image;return x&&E&&E.height>0||R&&E&&h(E)?(s===null&&(s=new Ja(r)),S=x?s.fromEquirectangular(b):s.fromCubemap(b),S.texture.pmremVersion=b.pmremVersion,t.set(b,S),b.addEventListener("dispose",v),S.texture):null}}}return b}function f(b,g){return g===zf?b.mapping=Po:g===Bf&&(b.mapping=$a),b}function h(b){let g=0,x=6;for(let R=0;R<x;R++)b[R]!==void 0&&g++;return g===x}function m(b){let g=b.target;g.removeEventListener("dispose",m);let x=e.get(g);x!==void 0&&(e.delete(g),x.dispose())}function v(b){let g=b.target;g.removeEventListener("dispose",v);let x=t.get(g);x!==void 0&&(t.delete(g),x.dispose())}function _(){e=new WeakMap,t=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:o,dispose:_}}function YA(r){let e={};function t(s){if(e[s]!==void 0)return e[s];let o=r.getExtension(s);return e[s]=o,o}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){let o=t(s);return o===null&&yo("WebGLRenderer: "+s+" extension not supported."),o}}}function jA(r,e,t,s){let o={},l=new WeakMap,c=new FinalizationRegistry(x=>delete o[x]);function f(x){h(x.target)}function h(x){x.index!==null&&e.remove(x.index);for(let S in x.attributes)e.remove(x.attributes[S]);x.removeEventListener("dispose",f),delete o[x.id],c.unregister(x);let R=l.get(x);R&&(e.remove(R),l.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function m(x,R){return o[R.id]!==void 0||(R.addEventListener("dispose",f),o[R.id]=new WeakRef(R),c.register(R,R.id,R),t.memory.geometries++),R}function v(x){let R=x.attributes;for(let S in R)e.update(R[S],r.ARRAY_BUFFER)}function _(x){let R=x.index,S=x.attributes.position,y=0;if(S===void 0)return;let E=R!==null?R.array.length:S.array.length/3-1,D=S.count>=65535?Xl:Wl,C=new D(Math.ceil(E/3)*6,1),N=C.array;if(R!==null){let M=R.array;y=R.version;for(let P=0,G=0;P<E;P+=3){let F=M[P+0],B=M[P+1],W=M[P+2];N[G++]=F,N[G++]=B,N[G++]=B,N[G++]=W,N[G++]=W,N[G++]=F}}else{y=S.version;for(let M=0,P=0;M<E;M+=3){let G=M+0,F=M+1,B=M+2;N[P++]=G,N[P++]=F,N[P++]=F,N[P++]=B,N[P++]=B,N[P++]=G}}C.version=y;let L=l.get(x);L&&e.remove(L),l.set(x,C)}function b(x){let R=l.get(x);if(R){let S=x.index;S!==null&&R.version<S.version&&_(x)}else _(x);return l.get(x)}function g(){for(let x in o){let R=o[x].deref();R!==void 0&&h(R)}}return{get:m,update:v,getWireframeAttribute:b,dispose:g}}function ZA(r,e,t){let s;function o(_){s=_}let l,c;function f(_){l=_.type,c=_.bytesPerElement}function h(_,b){r.drawElements(s,b,l,_*c),t.update(b,s,1)}function m(_,b,g){g!==0&&(r.drawElementsInstanced(s,b,l,_*c,g),t.update(b,s,g))}function v(_,b,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,b,0,l,_,0,g);let R=0;for(let S=0;S<g;S++)R+=b[S];t.update(R,s,1)}this.setMode=o,this.setIndex=f,this.render=h,this.renderInstances=m,this.renderMultiDraw=v}function JA(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,c,f){switch(t.calls++,c){case r.TRIANGLES:t.triangles+=f*(l/3);break;case r.LINES:t.lines+=f*(l/2);break;case r.LINE_STRIP:t.lines+=f*(l-1);break;case r.LINE_LOOP:t.lines+=f*l;break;case r.POINTS:t.points+=f*l;break;default:tt("WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:s}}function KA(r,e,t){let s=new WeakMap,o=new en;function l(c,f,h){let m=c.morphTargetInfluences,v=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=v!==void 0?v.length:0,b=s.get(f);if(b===void 0||b.count!==_){let G=function(){M.dispose(),s.delete(f),f.removeEventListener("dispose",G)};b!==void 0&&b.texture.dispose();let g=f.morphAttributes.position!==void 0,x=f.morphAttributes.normal!==void 0,R=f.morphAttributes.color!==void 0,S=f.morphAttributes.position||[],y=f.morphAttributes.normal||[],E=f.morphAttributes.color||[],D=0;g===!0&&(D=1),x===!0&&(D=2),R===!0&&(D=3);let C=f.attributes.position.count*D,N=1;C>e.maxTextureSize&&(N=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);let L=new Float32Array(C*N*4*_),M=new Vl(L,C,N,_);M.type=Ki,M.needsUpdate=!0;let P=D*4;for(let F=0;F<_;F++){let B=S[F],W=y[F],j=E[F],O=C*N*4*F;for(let K=0;K<B.count;K++){let se=K*P;g===!0&&(o.fromBufferAttribute(B,K),L[O+se+0]=o.x,L[O+se+1]=o.y,L[O+se+2]=o.z,L[O+se+3]=0),x===!0&&(o.fromBufferAttribute(W,K),L[O+se+4]=o.x,L[O+se+5]=o.y,L[O+se+6]=o.z,L[O+se+7]=0),R===!0&&(o.fromBufferAttribute(j,K),L[O+se+8]=o.x,L[O+se+9]=o.y,L[O+se+10]=o.z,L[O+se+11]=j.itemSize===4?o.w:1)}}b={count:_,texture:M,size:new ut(C,N)},s.set(f,b),f.addEventListener("dispose",G)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(r,"morphTexture",c.morphTexture,t);else{let g=0;for(let R=0;R<m.length;R++)g+=m[R];let x=f.morphTargetsRelative?1:1-g;h.getUniforms().setValue(r,"morphTargetBaseInfluence",x),h.getUniforms().setValue(r,"morphTargetInfluences",m)}h.getUniforms().setValue(r,"morphTargetsTexture",b.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",b.size)}return{update:l}}function QA(r,e,t,s,o){let l=new WeakMap;function c(m){let v=o.render.frame,_=m.geometry,b=e.get(m,_);if(l.get(b)!==v&&(e.update(b),l.set(b,v)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==v&&(t.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&t.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,v))),m.isSkinnedMesh){let g=m.skeleton;l.get(g)!==v&&(g.update(),l.set(g,v))}return b}function f(){l=new WeakMap}function h(m){let v=m.target;v.removeEventListener("dispose",h),s.releaseStatesOfObject(v),t.remove(v.instanceMatrix),v.instanceColor!==null&&t.remove(v.instanceColor)}return{update:c,dispose:f}}var eR={[Mm]:"LINEAR_TONE_MAPPING",[wm]:"REINHARD_TONE_MAPPING",[Tm]:"CINEON_TONE_MAPPING",[ou]:"ACES_FILMIC_TONE_MAPPING",[Am]:"AGX_TONE_MAPPING",[Rm]:"NEUTRAL_TONE_MAPPING",[Em]:"CUSTOM_TONE_MAPPING"};function tR(r,e,t,s,o,l){let c=new Ui(e,t,{type:r,depthBuffer:o,stencilBuffer:l,samples:s?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),f=null,h=null,m=null,v=new Si;v.setAttribute("position",new Qt([-1,3,0,-1,-1,0,3,-1,0],3)),v.setAttribute("uv",new Qt([0,2,0,0,2,0],2));let _=new Mf({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),b=new jn(v,_),g=new Mo(-1,1,1,-1,0,1),x=null,R=null,S=!1,y,E=null,D=[],C=!1;this.setSize=function(N,L){c.setSize(N,L),f!==null&&f.setSize(N,L),h!==null&&h.setSize(N,L);for(let M=0;M<D.length;M++){let P=D[M];P.setSize&&P.setSize(N,L)}},this.setEffects=function(N){D=N,C=D.length>0&&D[0].isRenderPass===!0;let L=c.width,M=c.height;D.length>0&&f===null&&(f=new Ui(L,M,{type:pr,depthBuffer:!1,stencilBuffer:!1}),h=new Ui(L,M,{type:pr,depthBuffer:!1,stencilBuffer:!1}));let P=o===!0&&D.some(G=>G.needsDepthTexture===!0);P!==(c.depthTexture!==null)&&(P===!0&&m===null&&(m=new as(L,M),l===!0&&(m.format=cs,m.type=Io)),c.dispose(),c.depthTexture=P?m:null,c.resolveDepthBuffer=P,c.storeMultisampledDepthBuffer=P);for(let G=0;G<D.length;G++){let F=D[G];F.setSize&&F.setSize(L,M),P&&F.needsDepthTexture===!0&&F.setDepthTexture&&F.setDepthTexture(m)}},this.begin=function(N,L){if(S||N.toneMapping===ri&&D.length===0)return!1;if(E=L,L!==null){let M=L.width,P=L.height;(c.width!==M||c.height!==P)&&this.setSize(M,P)}return C===!1&&N.setRenderTarget(c),y=N.toneMapping,N.toneMapping=ri,!0},this.hasRenderPass=function(){return C},this.end=function(N,L){N.toneMapping=y,S=!0;let M=c,P=f;for(let G=0;G<D.length;G++){let F=D[G];F.enabled!==!1&&(F.render(N,P,M,L),F.needsSwap!==!1&&(M=P,P=P===f?h:f))}if(x!==N.outputColorSpace||R!==N.toneMapping){x=N.outputColorSpace,R=N.toneMapping,_.defines={},bt.getTransfer(x)===Ut&&(_.defines.SRGB_TRANSFER="");let G=eR[R];G&&(_.defines[G]=""),_.needsUpdate=!0}_.uniforms.tDiffuse.value=M.texture,N.setRenderTarget(E),N.render(b,g),E=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){c.dispose(),f!==null&&f.dispose(),h!==null&&h.dispose(),v.dispose(),_.dispose()}}var F_=new ii,U_=new as(1,1),O_=new Jl(1),z_=new Vl,B_=new vf,H_=new jl,m_=[],g_=[],v_=new Float32Array(16),y_=new Float32Array(9),b_=new Float32Array(4);function Ka(r,e,t){let s=r[0];if(s<=0||s>0)return r;let o=e*t,l=m_[o];if(l===void 0&&(l=new Float32Array(o),m_[o]=l),e!==0){s.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,r[c].toArray(l,f)}return l}function Pn(r,e){if(r.length!==e.length)return!1;for(let t=0,s=r.length;t<s;t++)if(r[t]!==e[t])return!1;return!0}function In(r,e){for(let t=0,s=e.length;t<s;t++)r[t]=e[t]}function Pd(r,e){let t=g_[e];t===void 0&&(t=new Int32Array(e),g_[e]=t);for(let s=0;s!==e;++s)t[s]=r.allocateTextureUnit();return t}function nR(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function iR(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pn(t,e))return;r.uniform2fv(this.addr,e),In(t,e)}}function rR(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pn(t,e))return;r.uniform3fv(this.addr,e),In(t,e)}}function sR(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pn(t,e))return;r.uniform4fv(this.addr,e),In(t,e)}}function oR(r,e){let t=this.cache,s=e.elements;if(s===void 0){if(Pn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),In(t,e)}else{if(Pn(t,s))return;b_.set(s),r.uniformMatrix2fv(this.addr,!1,b_),In(t,s)}}function aR(r,e){let t=this.cache,s=e.elements;if(s===void 0){if(Pn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),In(t,e)}else{if(Pn(t,s))return;y_.set(s),r.uniformMatrix3fv(this.addr,!1,y_),In(t,s)}}function lR(r,e){let t=this.cache,s=e.elements;if(s===void 0){if(Pn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),In(t,e)}else{if(Pn(t,s))return;v_.set(s),r.uniformMatrix4fv(this.addr,!1,v_),In(t,s)}}function uR(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function cR(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pn(t,e))return;r.uniform2iv(this.addr,e),In(t,e)}}function fR(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pn(t,e))return;r.uniform3iv(this.addr,e),In(t,e)}}function dR(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pn(t,e))return;r.uniform4iv(this.addr,e),In(t,e)}}function hR(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function pR(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pn(t,e))return;r.uniform2uiv(this.addr,e),In(t,e)}}function mR(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pn(t,e))return;r.uniform3uiv(this.addr,e),In(t,e)}}function gR(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pn(t,e))return;r.uniform4uiv(this.addr,e),In(t,e)}}function Id(r){return r.version===0&&(r.compareFunction=Om,r.needsUpdate=!0),r}function vR(r,e,t){let s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o);let l;this.type===r.SAMPLER_2D_SHADOW?l=Id(U_):l=F_,t.setTexture2D(e||l,o)}function yR(r,e,t){let s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture3D(e||B_,o)}function bR(r,e,t){let s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o);let l;this.type===r.SAMPLER_CUBE_SHADOW?l=Id(O_):l=H_,t.setTextureCube(e||l,o)}function _R(r,e,t){let s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture2DArray(e||z_,o)}function SR(r){switch(r){case 5126:return nR;case 35664:return iR;case 35665:return rR;case 35666:return sR;case 35674:return oR;case 35675:return aR;case 35676:return lR;case 5124:case 35670:return uR;case 35667:case 35671:return cR;case 35668:case 35672:return fR;case 35669:case 35673:return dR;case 5125:return hR;case 36294:return pR;case 36295:return mR;case 36296:return gR;case 35678:case 36198:case 36298:case 36306:case 35682:return vR;case 35679:case 36299:case 36307:return yR;case 35680:case 36300:case 36308:case 36293:return bR;case 36289:case 36303:case 36311:case 36292:return _R}}function xR(r,e){r.uniform1fv(this.addr,e)}function MR(r,e){let t=Ka(e,this.size,2);r.uniform2fv(this.addr,t)}function wR(r,e){let t=Ka(e,this.size,3);r.uniform3fv(this.addr,t)}function TR(r,e){let t=Ka(e,this.size,4);r.uniform4fv(this.addr,t)}function ER(r,e){let t=Ka(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function AR(r,e){let t=Ka(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function RR(r,e){let t=Ka(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function CR(r,e){r.uniform1iv(this.addr,e)}function PR(r,e){r.uniform2iv(this.addr,e)}function IR(r,e){r.uniform3iv(this.addr,e)}function NR(r,e){r.uniform4iv(this.addr,e)}function LR(r,e){r.uniform1uiv(this.addr,e)}function DR(r,e){r.uniform2uiv(this.addr,e)}function kR(r,e){r.uniform3uiv(this.addr,e)}function FR(r,e){r.uniform4uiv(this.addr,e)}function UR(r,e,t){let s=this.cache,o=e.length,l=Pd(t,o);Pn(s,l)||(r.uniform1iv(this.addr,l),In(s,l));let c;this.type===r.SAMPLER_2D_SHADOW?c=Id(U_):c=F_;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||c,l[f])}function OR(r,e,t){let s=this.cache,o=e.length,l=Pd(t,o);Pn(s,l)||(r.uniform1iv(this.addr,l),In(s,l));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||B_,l[c])}function zR(r,e,t){let s=this.cache,o=e.length,l=Pd(t,o);Pn(s,l)||(r.uniform1iv(this.addr,l),In(s,l));let c;this.type===r.SAMPLER_CUBE_SHADOW?c=Id(O_):c=H_;for(let f=0;f!==o;++f)t.setTextureCube(e[f]||c,l[f])}function BR(r,e,t){let s=this.cache,o=e.length,l=Pd(t,o);Pn(s,l)||(r.uniform1iv(this.addr,l),In(s,l));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||z_,l[c])}function HR(r){switch(r){case 5126:return xR;case 35664:return MR;case 35665:return wR;case 35666:return TR;case 35674:return ER;case 35675:return AR;case 35676:return RR;case 5124:case 35670:return CR;case 35667:case 35671:return PR;case 35668:case 35672:return IR;case 35669:case 35673:return NR;case 5125:return LR;case 36294:return DR;case 36295:return kR;case 36296:return FR;case 35678:case 36198:case 36298:case 36306:case 35682:return UR;case 35679:case 36299:case 36307:return OR;case 35680:case 36300:case 36308:case 36293:return zR;case 36289:case 36303:case 36311:case 36292:return BR}}var ng=class{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=SR(t.type)}},ig=class{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=HR(t.type)}},rg=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){let o=this.seq;for(let l=0,c=o.length;l!==c;++l){let f=o[l];f.setValue(e,t[f.id],s)}}},eg=/(\w+)(\])?(\[|\.)?/g;function __(r,e){r.seq.push(e),r.map[e.id]=e}function VR(r,e,t){let s=r.name,o=s.length;for(eg.lastIndex=0;;){let l=eg.exec(s),c=eg.lastIndex,f=l[1],h=l[2]==="]",m=l[3];if(h&&(f=f|0),m===void 0||m==="["&&c+2===o){__(t,m===void 0?new ng(f,r,e):new ig(f,r,e));break}else{let _=t.map[f];_===void 0&&(_=new rg(f),__(t,_)),t=_}}}var Za=class{constructor(e,t){this.seq=[],this.map={};let s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<s;++c){let f=e.getActiveUniform(t,c),h=e.getUniformLocation(t,f.name);VR(f,h,this)}let o=[],l=[];for(let c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(c):l.push(c);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,s,o){let l=this.map[t];l!==void 0&&l.setValue(e,s,o)}setOptional(e,t,s){let o=t[s];o!==void 0&&this.setValue(e,s,o)}static upload(e,t,s,o){for(let l=0,c=t.length;l!==c;++l){let f=t[l],h=s[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,o)}}static seqWithValue(e,t){let s=[];for(let o=0,l=e.length;o!==l;++o){let c=e[o];c.id in t&&s.push(c)}return s}};function S_(r,e,t){let s=r.createShader(e);return r.shaderSource(s,t),r.compileShader(s),s}var GR=37297,WR=0;function XR(r,e){let t=r.split(`
`),s=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=o;c<l;c++){let f=c+1;s.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return s.join(`
`)}var x_=new nt;function qR(r){bt._getMatrix(x_,bt.workingColorSpace,r);let e=`mat3( ${x_.elements.map(t=>t.toFixed(4))} )`;switch(bt.getTransfer(r)){case Hl:return[e,"LinearTransferOETF"];case Ut:return[e,"sRGBTransferOETF"];default:return qe("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function M_(r,e,t){let s=r.getShaderParameter(e,r.COMPILE_STATUS),l=(r.getShaderInfoLog(e)||"").trim();if(s&&l==="")return"";let c=/ERROR: 0:(\d+)/.exec(l);if(c){let f=parseInt(c[1]);return t.toUpperCase()+`

`+l+`

`+XR(r.getShaderSource(e),f)}else return l}function $R(r,e){let t=qR(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var YR={[Mm]:"Linear",[wm]:"Reinhard",[Tm]:"Cineon",[ou]:"ACESFilmic",[Am]:"AgX",[Rm]:"Neutral",[Em]:"Custom"};function jR(r,e){let t=YR[e];return t===void 0?(qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Rd=new V;function ZR(){bt.getLuminanceCoefficients(Rd);let r=Rd.x.toFixed(4),e=Rd.y.toFixed(4),t=Rd.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function JR(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mu).join(`
`)}function KR(r){let e=[];for(let t in r){let s=r[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function QR(r,e){let t={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){let l=r.getActiveAttrib(e,o),c=l.name,f=1;l.type===r.FLOAT_MAT2&&(f=2),l.type===r.FLOAT_MAT3&&(f=3),l.type===r.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:r.getAttribLocation(e,c),locationSize:f}}return t}function mu(r){return r!==""}function w_(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function T_(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var eC=/^[ \t]*#include +<([\w\d./]+)>/gm;function sg(r){return r.replace(eC,tC)}function tC(r,e){let t=dt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return sg(t)}var nC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function E_(r){return r.replace(nC,iC)}function iC(r,e,t,s){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function A_(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}var rC={[Ao]:"SHADOWMAP_TYPE_PCF",[Hs]:"SHADOWMAP_TYPE_VSM"};function sC(r){return rC[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var oC={[$a]:"ENVMAP_MODE_REFRACTION"};function aC(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":oC[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var lC={[xm]:"ENVMAP_BLENDING_MULTIPLY",[Gb]:"ENVMAP_BLENDING_MIX",[Wb]:"ENVMAP_BLENDING_ADD"};function uC(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":lC[r.combine]||"ENVMAP_BLENDING_NONE"}function cC(r,e,t,s){let o=r.getContext(),l=t.defines,c=t.vertexShader,f=t.fragmentShader,h=sC(t),m=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",v=aC(t),_=uC(t),b=JR(t),g=KR(l),x=o.createProgram(),R,S,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(R=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(mu).join(`
`),R.length>0&&(R+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(mu).join(`
`),S.length>0&&(S+=`
`)):(R=[A_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mu).join(`
`),S=[A_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+v:"",t.envMap?"#define "+_:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ri?"#define TONE_MAPPING":"",t.toneMapping!==ri?dt.tonemapping_pars_fragment:"",t.toneMapping!==ri?jR("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,$R("linearToOutputTexel",t.outputColorSpace),ZR(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(mu).join(`
`)),c=sg(c),c=w_(c,t),c=T_(c,t),f=sg(f),f=w_(f,t),f=T_(f,t),c=E_(c),f=E_(f),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,R=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+R,S=["#define varying in",t.glslVersion===zm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);let E=y+R+c,D=y+S+f,C=S_(o,o.VERTEX_SHADER,E),N=S_(o,o.FRAGMENT_SHADER,D);o.attachShader(x,C),o.attachShader(x,N),t.index0AttributeName!==void 0?o.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(x,0,"position"),o.linkProgram(x);function L(F){if(r.debug.checkShaderErrors){let B=o.getProgramInfoLog(x)||"",W=o.getShaderInfoLog(C)||"",j=o.getShaderInfoLog(N)||"",O=B.trim(),K=W.trim(),se=j.trim(),ee=!0,me=!0;if(o.getProgramParameter(x,o.LINK_STATUS)===!1)if(ee=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,x,C,N);else{let ne=M_(o,C,"vertex"),ce=M_(o,N,"fragment");tt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(x,o.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+O+`
`+ne+`
`+ce)}else O!==""?qe("WebGLProgram: Program Info Log:",O):(K===""||se==="")&&(me=!1);me&&(F.diagnostics={runnable:ee,programLog:O,vertexShader:{log:K,prefix:R},fragmentShader:{log:se,prefix:S}})}o.deleteShader(C),o.deleteShader(N),M=new Za(o,x),P=QR(o,x)}let M;this.getUniforms=function(){return M===void 0&&L(this),M};let P;this.getAttributes=function(){return P===void 0&&L(this),P};let G=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=o.getProgramParameter(x,GR)),G},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=WR++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=N,this}var fC=0,og=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,s){let o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){let t=this.shaderCache,s=t.get(e);return s===void 0&&(s=new ag(e),t.set(e,s)),s}},ag=class{constructor(e){this.id=fC++,this.code=e,this.usedTimes=0}};function dC(r){return r===Gs||r===du||r===hu}function hC(r,e,t,s,o,l){let c=new rs,f=new og,h=new Set,m=[],v=new Map,_=s.logarithmicDepthBuffer,b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return h.add(M),M===0?"uv":`uv${M}`}function x(M,P,G,F,B,W){let j=F.fog,O=B.geometry,K=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?F.environment:null,se=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,ee=e.get(M.envMap||K,se),me=b[M.type],ne=s.precision;M.precision!==null&&(ne=s.getMaxPrecision(M.precision),ne!==M.precision&&qe("WebGLProgram.getParameters:",M.precision,"not supported, using",ne,"instead."));let ce=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,he=ce!==void 0?ce.length:0,Be=0;O.morphAttributes.position!==void 0&&(Be=1),O.morphAttributes.normal!==void 0&&(Be=2),O.morphAttributes.color!==void 0&&(Be=3);let Ve,re,Pe,ke;if(me){let Ae=Ur[me];Ve=Ae.vertexShader,re=Ae.fragmentShader}else{Ve=M.vertexShader,re=M.fragmentShader;let Ae=f.getVertexShaderStage(M),Pt=f.getFragmentShaderStage(M);f.update(M,Ae,Pt),Pe=Ae.id,ke=Pt.id}let We=r.getRenderTarget(),Ne=r.state.buffers.depth.getReversed(),Qe=B.isInstancedMesh===!0,Vt=B.isBatchedMesh===!0,$e=!!M.map,Tt=!!M.matcap,_t=!!ee,ht=_t&&ee.isPMREMTexture===!0,fn=!!M.aoMap,qt=!!M.lightMap,dn=!!M.bumpMap&&M.wireframe===!1,Gt=!!M.normalMap,Jn=!!M.displacementMap,Wt=!!M.emissiveMap,hn=!!M.metalnessMap,Bn=!!M.roughnessMap,Kn=M.anisotropy>0,H=M.clearcoat>0,Hn=M.diffuseRoughness>0,Ct=M.dispersion>0,at=M.retroreflectivity>0,Ee=M.iridescence>0,pn=M.sheen>0,Xe=M.transmission>0,Ze=Kn&&!!M.anisotropyMap,I=H&&!!M.clearcoatMap,T=H&&!!M.clearcoatNormalMap,$=H&&!!M.clearcoatRoughnessMap,de=Hn&&!!M.diffuseRoughnessMap,ue=Ee&&!!M.iridescenceMap,xe=Ee&&!!M.iridescenceThicknessMap,Te=pn&&!!M.sheenColorMap,oe=pn&&!!M.sheenRoughnessMap,ae=!!M.specularMap,Me=!!M.specularColorMap,U=!!M.specularIntensityMap,le=Xe&&!!M.transmissionMap,ie=Xe&&!!M.thicknessMap,we=!!M.gradientMap,ye=!!M.alphaMap,_e=M.alphaTest>0,He=!!M.alphaHash,ot=!!M.extensions,pe=ri;M.toneMapped&&(We===null||We.isXRRenderTarget===!0)&&(pe=r.toneMapping);let Ge=ht?ee.isCompressedCubeTexture?ee.image[0].mipmaps:ee.mipmaps:null,st={shaderID:me,shaderType:M.type,shaderName:M.name,vertexShader:Ve,fragmentShader:re,defines:M.defines,customVertexShaderID:Pe,customFragmentShaderID:ke,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:ne,batching:Vt,batchingColor:Vt&&B._colorsTexture!==null,instancing:Qe,instancingColor:Qe&&B.instanceColor!==null,instancingMorph:Qe&&B.morphTexture!==null,outputColorSpace:We===null?r.outputColorSpace:We.isXRRenderTarget===!0?We.texture.colorSpace:bt.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:$e,matcap:Tt,envMap:_t,envMapMode:_t&&ee.mapping,envMapPMREM:ht,envMapMaxLod:ht?Ge.length-1:null,envMapSize:ht?Ge[0].width:null,aoMap:fn,lightMap:qt,bumpMap:dn,normalMap:Gt,displacementMap:Jn,emissiveMap:Wt,normalMapObjectSpace:Gt&&M.normalMapType===$b,normalMapTangentSpace:Gt&&M.normalMapType===Td,packedNormalMap:Gt&&M.normalMapType===Td&&dC(M.normalMap.format),metalnessMap:hn,roughnessMap:Bn,anisotropy:Kn,anisotropyMap:Ze,clearcoat:H,clearcoatMap:I,clearcoatNormalMap:T,clearcoatRoughnessMap:$,diffuseRoughness:Hn,diffuseRoughnessMap:de,dispersion:Ct,retroreflection:at,iridescence:Ee,iridescenceMap:ue,iridescenceThicknessMap:xe,sheen:pn,sheenColorMap:Te,sheenRoughnessMap:oe,specularMap:ae,specularColorMap:Me,specularIntensityMap:U,transmission:Xe,transmissionMap:le,thicknessMap:ie,gradientMap:we,opaque:M.transparent===!1&&M.blending===qa&&M.alphaToCoverage===!1,alphaMap:ye,alphaTest:_e,alphaHash:He,combine:M.combine,mapUv:$e&&g(M.map.channel),aoMapUv:fn&&g(M.aoMap.channel),lightMapUv:qt&&g(M.lightMap.channel),bumpMapUv:dn&&g(M.bumpMap.channel),normalMapUv:Gt&&g(M.normalMap.channel),displacementMapUv:Jn&&g(M.displacementMap.channel),emissiveMapUv:Wt&&g(M.emissiveMap.channel),metalnessMapUv:hn&&g(M.metalnessMap.channel),roughnessMapUv:Bn&&g(M.roughnessMap.channel),anisotropyMapUv:Ze&&g(M.anisotropyMap.channel),clearcoatMapUv:I&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:T&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&g(M.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:de&&g(M.diffuseRoughnessMap.channel),iridescenceMapUv:ue&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:oe&&g(M.sheenRoughnessMap.channel),specularMapUv:ae&&g(M.specularMap.channel),specularColorMapUv:Me&&g(M.specularColorMap.channel),specularIntensityMapUv:U&&g(M.specularIntensityMap.channel),transmissionMapUv:le&&g(M.transmissionMap.channel),thicknessMapUv:ie&&g(M.thicknessMap.channel),alphaMapUv:ye&&g(M.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Gt||Kn),vertexNormals:!!O.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!O.attributes.uv&&($e||ye),fog:!!j,useFog:M.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||O.attributes.normal===void 0&&Gt===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Ne,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:Be,numSunLights:P.sun.length,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numSunLightShadows:P.sunShadowMap.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:W.filter(Ae=>Ae.texture!==null).length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&G.length>0,shadowMapType:r.shadowMap.type,toneMapping:pe,decodeVideoTexture:$e&&M.map.isVideoTexture===!0&&bt.getTransfer(M.map.colorSpace)===Ut,decodeVideoTextureEmissive:Wt&&M.emissiveMap.isVideoTexture===!0&&bt.getTransfer(M.emissiveMap.colorSpace)===Ut,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Mi,flipSided:M.side===hi,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ot&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&M.extensions.multiDraw===!0||Vt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return st.vertexUv1s=h.has(1),st.vertexUv2s=h.has(2),st.vertexUv3s=h.has(3),h.clear(),st}function R(M){let P=[];if(M.shaderID?P.push(M.shaderID):(P.push(M.customVertexShaderID),P.push(M.customFragmentShaderID)),M.defines!==void 0)for(let G in M.defines)P.push(G),P.push(M.defines[G]);return M.isRawShaderMaterial===!1&&(S(P,M),y(P,M),P.push(r.outputColorSpace)),P.push(M.customProgramCacheKey),P.join()}function S(M,P){M.push(P.precision),M.push(P.outputColorSpace),M.push(P.envMapMode),M.push(P.envMapPMREM),M.push(P.envMapMaxLod),M.push(P.envMapSize),M.push(P.mapUv),M.push(P.alphaMapUv),M.push(P.lightMapUv),M.push(P.aoMapUv),M.push(P.bumpMapUv),M.push(P.normalMapUv),M.push(P.displacementMapUv),M.push(P.emissiveMapUv),M.push(P.metalnessMapUv),M.push(P.roughnessMapUv),M.push(P.anisotropyMapUv),M.push(P.clearcoatMapUv),M.push(P.clearcoatNormalMapUv),M.push(P.clearcoatRoughnessMapUv),M.push(P.diffuseRoughnessMapUv),M.push(P.iridescenceMapUv),M.push(P.iridescenceThicknessMapUv),M.push(P.sheenColorMapUv),M.push(P.sheenRoughnessMapUv),M.push(P.specularMapUv),M.push(P.specularColorMapUv),M.push(P.specularIntensityMapUv),M.push(P.transmissionMapUv),M.push(P.thicknessMapUv),M.push(P.combine),M.push(P.fogExp2),M.push(P.sizeAttenuation),M.push(P.morphTargetsCount),M.push(P.numSunLights),M.push(P.numDirLights),M.push(P.numPointLights),M.push(P.numSpotLights),M.push(P.numSpotLightMaps),M.push(P.numHemiLights),M.push(P.numRectAreaLights),M.push(P.numSunLightShadows),M.push(P.numDirLightShadows),M.push(P.numPointLightShadows),M.push(P.numSpotLightShadows),M.push(P.numSpotLightShadowsWithMaps),M.push(P.numLightProbes),M.push(P.numLightProbeGrids),M.push(P.shadowMapType),M.push(P.toneMapping),M.push(P.numClippingPlanes),M.push(P.numClipIntersection),M.push(P.depthPacking)}function y(M,P){c.disableAll(),P.instancing&&c.enable(0),P.instancingColor&&c.enable(1),P.instancingMorph&&c.enable(2),P.matcap&&c.enable(3),P.envMap&&c.enable(4),P.normalMapObjectSpace&&c.enable(5),P.normalMapTangentSpace&&c.enable(6),P.clearcoat&&c.enable(7),P.iridescence&&c.enable(8),P.alphaTest&&c.enable(9),P.vertexColors&&c.enable(10),P.vertexAlphas&&c.enable(11),P.vertexUv1s&&c.enable(12),P.vertexUv2s&&c.enable(13),P.vertexUv3s&&c.enable(14),P.vertexTangents&&c.enable(15),P.anisotropy&&c.enable(16),P.alphaHash&&c.enable(17),P.batching&&c.enable(18),P.dispersion&&c.enable(19),P.retroreflection&&c.enable(24),P.diffuseRoughness&&c.enable(25),P.batchingColor&&c.enable(20),P.gradientMap&&c.enable(21),P.packedNormalMap&&c.enable(22),P.vertexNormals&&c.enable(23),M.push(c.mask),c.disableAll(),P.fog&&c.enable(0),P.useFog&&c.enable(1),P.flatShading&&c.enable(2),P.logarithmicDepthBuffer&&c.enable(3),P.reversedDepthBuffer&&c.enable(4),P.skinning&&c.enable(5),P.morphTargets&&c.enable(6),P.morphNormals&&c.enable(7),P.morphColors&&c.enable(8),P.premultipliedAlpha&&c.enable(9),P.shadowMapEnabled&&c.enable(10),P.doubleSided&&c.enable(11),P.flipSided&&c.enable(12),P.useDepthPacking&&c.enable(13),P.dithering&&c.enable(14),P.transmission&&c.enable(15),P.sheen&&c.enable(16),P.opaque&&c.enable(17),P.pointsUvs&&c.enable(18),P.decodeVideoTexture&&c.enable(19),P.decodeVideoTextureEmissive&&c.enable(20),P.alphaToCoverage&&c.enable(21),P.numLightProbeGrids>0&&c.enable(22),P.hasPositionAttribute&&c.enable(23),M.push(c.mask)}function E(M){let P=b[M.type],G;if(P){let F=Ur[P];G=l_.clone(F.uniforms)}else G=M.uniforms;return G}function D(M,P){let G=v.get(P);return G!==void 0?++G.usedTimes:(G=new cC(r,P,M,o),m.push(G),v.set(P,G)),G}function C(M){if(--M.usedTimes===0){let P=m.indexOf(M);m[P]=m[m.length-1],m.pop(),v.delete(M.cacheKey),M.destroy()}}function N(M){f.remove(M)}function L(){f.dispose()}return{getParameters:x,getProgramCacheKey:R,getUniforms:E,acquireProgram:D,releaseProgram:C,releaseShaderCache:N,programs:m,dispose:L}}function pC(){let r=new WeakMap;function e(c){return r.has(c)}function t(c){let f=r.get(c);return f===void 0&&(f={},r.set(c,f)),f}function s(c){r.delete(c)}function o(c,f,h){r.get(c)[f]=h}function l(){r=new WeakMap}return{has:e,get:t,remove:s,update:o,dispose:l}}function mC(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function R_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function C_(){let r=[],e=0,t=[],s=[],o=[];function l(){e=0,t.length=0,s.length=0,o.length=0}function c(b){let g=0;return b.isInstancedMesh&&(g+=2),b.isSkinnedMesh&&(g+=1),g}function f(b,g,x,R,S,y){let E=r[e];return E===void 0?(E={id:b.id,object:b,geometry:g,material:x,materialVariant:c(b),groupOrder:R,renderOrder:b.renderOrder,z:S,group:y},r[e]=E):(E.id=b.id,E.object=b,E.geometry=g,E.material=x,E.materialVariant=c(b),E.groupOrder=R,E.renderOrder=b.renderOrder,E.z=S,E.group=y),e++,E}function h(b,g,x,R,S,y,E){E.reversedDepth===!0&&(S=-S);let D=f(b,g,x,R,S,y);x.transmission>0?s.push(D):x.transparent===!0?o.push(D):t.push(D)}function m(b,g,x,R,S,y){let E=f(b,g,x,R,S,y);x.transmission>0?s.unshift(E):x.transparent===!0?o.unshift(E):t.unshift(E)}function v(b,g){t.length>1&&t.sort(b||mC),s.length>1&&s.sort(g||R_),o.length>1&&o.sort(g||R_)}function _(){for(let b=e,g=r.length;b<g;b++){let x=r[b];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:s,transparent:o,init:l,push:h,unshift:m,finish:_,sort:v}}function gC(){let r=new WeakMap;function e(s,o){let l=r.get(s),c;return l===void 0?(c=new C_,r.set(s,[c])):o>=l.length?(c=new C_,l.push(c)):c=l[o],c}function t(){r=new WeakMap}return{get:e,dispose:t}}function vC(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new V,color:new je};break;case"SpotLight":t={position:new V,direction:new V,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new V,halfWidth:new V,halfHeight:new V};break}return r[e.id]=t,t}}}function yC(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var bC=0;function _C(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function SC(r){let e=new vC,t=yC(),s={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new V);let o=new V,l=new Ot,c=new Ot;function f(m){let v=0,_=0,b=0;for(let W=0;W<9;W++)s.probe[W].set(0,0,0);let g=0,x=0,R=0,S=0,y=0,E=0,D=0,C=0,N=0,L=0,M=0,P=0,G=0,F=0;m.sort(_C);for(let W=0,j=m.length;W<j;W++){let O=m[W],K=O.color,se=O.intensity,ee=O.distance,me=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===Gs?me=O.shadow.map.texture:me=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)v+=K.r*se,_+=K.g*se,b+=K.b*se;else if(O.isLightProbe){for(let ne=0;ne<9;ne++)s.probe[ne].addScaledVector(O.sh.coefficients[ne],se);F++}else if(O.isSunLight){let ne=e.get(O);if(ne.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let ce=O.shadow,he=t.get(O);he.shadowIntensity=ce.intensity,he.shadowBias=ce.bias,he.shadowNormalBias=ce.normalBias,he.shadowRadius=ce.radius,he.shadowMapSize.copy(ce.mapSize).multiply(ce.getFrameExtents()),s.sunShadow[x]=he,s.sunShadowMap[x]=me;let Be=ce.getViewportCount();for(let Ve=0;Ve<Be;Ve++)s.sunShadowMatrix[R+Ve]=ce.getMatrix(Ve),s.sunShadowCascade[R+Ve]=ce._cascadeData[Ve];R+=Be,x++}s.sun[g]=ne,g++}else if(O.isDirectionalLight){let ne=e.get(O);if(ne.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let ce=O.shadow,he=t.get(O);he.shadowIntensity=ce.intensity,he.shadowBias=ce.bias,he.shadowNormalBias=ce.normalBias,he.shadowRadius=ce.radius,he.shadowMapSize=ce.mapSize,s.directionalShadow[S]=he,s.directionalShadowMap[S]=me,s.directionalShadowMatrix[S]=O.shadow.matrix,N++}s.directional[S]=ne,S++}else if(O.isSpotLight){let ne=e.get(O);ne.position.setFromMatrixPosition(O.matrixWorld),ne.color.copy(K).multiplyScalar(se),ne.distance=ee,ne.coneCos=Math.cos(O.angle),ne.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),ne.decay=O.decay,s.spot[E]=ne;let ce=O.shadow;if(O.map&&(s.spotLightMap[P]=O.map,P++,ce.updateMatrices(O),O.castShadow&&G++),s.spotLightMatrix[E]=ce.matrix,O.castShadow){let he=t.get(O);he.shadowIntensity=ce.intensity,he.shadowBias=ce.bias,he.shadowNormalBias=ce.normalBias,he.shadowRadius=ce.radius,he.shadowMapSize=ce.mapSize,s.spotShadow[E]=he,s.spotShadowMap[E]=me,M++}E++}else if(O.isRectAreaLight){let ne=e.get(O);ne.color.copy(K).multiplyScalar(se),ne.halfWidth.set(O.width*.5,0,0),ne.halfHeight.set(0,O.height*.5,0),s.rectArea[D]=ne,D++}else if(O.isPointLight){let ne=e.get(O);if(ne.color.copy(O.color).multiplyScalar(O.intensity),ne.distance=O.distance,ne.decay=O.decay,O.castShadow){let ce=O.shadow,he=t.get(O);he.shadowIntensity=ce.intensity,he.shadowBias=ce.bias,he.shadowNormalBias=ce.normalBias,he.shadowRadius=ce.radius,he.shadowMapSize=ce.mapSize,he.shadowCameraNear=ce.camera.near,he.shadowCameraFar=ce.camera.far,s.pointShadow[y]=he,s.pointShadowMap[y]=me,s.pointShadowMatrix[y]=O.shadow.matrix,L++}s.point[y]=ne,y++}else if(O.isHemisphereLight){let ne=e.get(O);ne.skyColor.copy(O.color).multiplyScalar(se),ne.groundColor.copy(O.groundColor).multiplyScalar(se),s.hemi[C]=ne,C++}}D>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Le.LTC_FLOAT_1,s.rectAreaLTC2=Le.LTC_FLOAT_2):(s.rectAreaLTC1=Le.LTC_HALF_1,s.rectAreaLTC2=Le.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=_,s.ambient[2]=b;let B=s.hash;(B.sunLength!==g||B.directionalLength!==S||B.pointLength!==y||B.spotLength!==E||B.rectAreaLength!==D||B.hemiLength!==C||B.numSunShadows!==x||B.numDirectionalShadows!==N||B.numPointShadows!==L||B.numSpotShadows!==M||B.numSpotMaps!==P||B.numLightProbes!==F)&&(s.sun.length=g,s.directional.length=S,s.spot.length=E,s.rectArea.length=D,s.point.length=y,s.hemi.length=C,s.sunShadow.length=x,s.sunShadowMap.length=x,s.sunShadowMatrix.length=R,s.sunShadowCascade.length=R,s.directionalShadow.length=N,s.directionalShadowMap.length=N,s.directionalShadowMatrix.length=N,s.pointShadow.length=L,s.pointShadowMap.length=L,s.pointShadowMatrix.length=L,s.spotShadow.length=M,s.spotShadowMap.length=M,s.spotLightMatrix.length=M+P-G,s.spotLightMap.length=P,s.numSpotLightShadowsWithMaps=G,s.numLightProbes=F,B.sunLength=g,B.directionalLength=S,B.pointLength=y,B.spotLength=E,B.rectAreaLength=D,B.hemiLength=C,B.numSunShadows=x,B.numDirectionalShadows=N,B.numPointShadows=L,B.numSpotShadows=M,B.numSpotMaps=P,B.numLightProbes=F,s.version=bC++)}function h(m,v){let _=0,b=0,g=0,x=0,R=0,S=0,y=v.matrixWorldInverse;for(let E=0,D=m.length;E<D;E++){let C=m[E];if(C.isSunLight){let N=s.sun[_];N.direction.setFromMatrixPosition(C.matrixWorld),N.direction.transformDirection(y),_++}else if(C.isDirectionalLight){let N=s.directional[b];N.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),N.direction.sub(o),N.direction.transformDirection(y),b++}else if(C.isSpotLight){let N=s.spot[x];N.position.setFromMatrixPosition(C.matrixWorld),N.position.applyMatrix4(y),N.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),N.direction.sub(o),N.direction.transformDirection(y),x++}else if(C.isRectAreaLight){let N=s.rectArea[R];N.position.setFromMatrixPosition(C.matrixWorld),N.position.applyMatrix4(y),c.identity(),l.copy(C.matrixWorld),l.premultiply(y),c.extractRotation(l),N.halfWidth.set(C.width*.5,0,0),N.halfHeight.set(0,C.height*.5,0),N.halfWidth.applyMatrix4(c),N.halfHeight.applyMatrix4(c),R++}else if(C.isPointLight){let N=s.point[g];N.position.setFromMatrixPosition(C.matrixWorld),N.position.applyMatrix4(y),g++}else if(C.isHemisphereLight){let N=s.hemi[S];N.direction.setFromMatrixPosition(C.matrixWorld),N.direction.transformDirection(y),S++}}}return{setup:f,setupView:h,state:s}}function P_(r){let e=new SC(r),t=[],s=[],o=[];function l(_){v.camera=_,t.length=0,s.length=0,o.length=0}function c(_){_.isLightProbeGrid?o.push(_):t.push(_)}function f(_){s.push(_)}function h(){e.setup(t),o.sort((_,b)=>_.priority-b.priority||_.id-b.id)}function m(_){e.setupView(t,_)}let v={lightsArray:t,shadowsArray:s,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:v,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:f}}function xC(r){let e=new WeakMap;function t(o,l=0){let c=e.get(o),f;return c===void 0?(f=new P_(r),e.set(o,[f])):l>=c.length?(f=new P_(r),c.push(f)):f=c[l],f}function s(){e=new WeakMap}return{get:t,dispose:s}}var MC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wC=`uniform sampler2D shadow_pass;
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
}`,TC=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],EC=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],I_=new Ot,pu=new V,tg=new V;function AC(r,e,t){let s=new Us,o=new ut,l=new ut,c=new en,f=new wf,h=new Tf,m={},v=t.maxTextureSize,_={[Vs]:hi,[hi]:Vs,[Mi]:Mi},b=new Ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:MC,fragmentShader:wC}),g=b.clone();g.defines.HORIZONTAL_PASS=1;let x=new Si;x.setAttribute("position",new dr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let R=new jn(x,b),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ao;let y=this.type;this.render=function(L,M,P){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||L.length===0)return;this.type===Xa&&(qe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ao);let G=r.getRenderTarget(),F=r.getActiveCubeFace(),B=r.getActiveMipmapLevel(),W=r.state;W.setBlending(Ro),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let j=y!==this.type;j&&M.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(K=>K.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,K=L.length;O<K;O++){let se=L[O],ee=se.shadow;if(ee===void 0){qe("WebGLShadowMap:",se,"has no shadow.");continue}if(ee.autoUpdate===!1&&ee.needsUpdate===!1)continue;o.copy(ee.mapSize);let me=ee.getFrameExtents();o.multiply(me),l.copy(ee.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(l.x=Math.floor(v/me.x),o.x=l.x*me.x,ee.mapSize.x=l.x),o.y>v&&(l.y=Math.floor(v/me.y),o.y=l.y*me.y,ee.mapSize.y=l.y));let ne=r.state.buffers.depth.getReversed();if(ee.camera._reversedDepth=ne,ee.map===null||j===!0){if(ee.map!==null&&(ee.map.depthTexture!==null&&(ee.map.depthTexture.dispose(),ee.map.depthTexture=null),ee.map.dispose()),this.type===Hs){if(se.isPointLight){qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ee.map=new Ui(o.x,o.y,{format:Gs,type:pr,minFilter:di,magFilter:di,generateMipmaps:!1}),ee.map.texture.name=se.name+".shadowMap",ee.map.depthTexture=new as(o.x,o.y,Ki),ee.map.depthTexture.name=se.name+".shadowMapDepth",ee.map.depthTexture.format=ns,ee.map.depthTexture.compareFunction=null,ee.map.depthTexture.minFilter=Un,ee.map.depthTexture.magFilter=Un}else se.isPointLight?(ee.map=new gu(o.x),ee.map.depthTexture=new Jl(o.x,hr)):(ee.map=new Ui(o.x,o.y),ee.map.depthTexture=new as(o.x,o.y,hr)),ee.map.depthTexture.name=se.name+".shadowMap",ee.map.depthTexture.format=ns,this.type===Ao?(ee.map.depthTexture.compareFunction=ne?Um:Fm,ee.map.depthTexture.minFilter=di,ee.map.depthTexture.magFilter=di):(ee.map.depthTexture.compareFunction=null,ee.map.depthTexture.minFilter=Un,ee.map.depthTexture.magFilter=Un);ee.camera.updateProjectionMatrix()}ee.map.isWebGLCubeRenderTarget!==!0&&(ee.map.width!==o.x||ee.map.height!==o.y)&&ee.map.setSize(o.x,o.y);let ce=ee.map.isWebGLCubeRenderTarget?6:ee.getViewportCount();se.isPointLight!==!0&&ee.updateMatrices(se,P);let he=(ee.camera.layers.mask&4294967294)!==0?ee.camera.layers:P.layers;for(let Be=0;Be<ce;Be++){let Ve=ee.getCamera(Be);if(se.isPointLight){let re=ee.camera,Pe=ee.matrix,ke=se.distance||re.far;ke!==re.far&&(re.far=ke,re.updateProjectionMatrix()),pu.setFromMatrixPosition(se.matrixWorld),re.position.copy(pu),tg.copy(re.position),tg.add(TC[Be]),re.up.copy(EC[Be]),re.lookAt(tg),re.updateMatrixWorld(),Pe.makeTranslation(-pu.x,-pu.y,-pu.z),I_.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),ee._frustum.setFromProjectionMatrix(I_,re.coordinateSystem,re.reversedDepth)}if(ee.map.isWebGLCubeRenderTarget)r.setRenderTarget(ee.map,Be),r.clear();else{Be===0&&(r.setRenderTarget(ee.map),r.clear());let re=ee.getViewport(Be);c.set(l.x*re.x,l.y*re.y,l.x*re.z,l.y*re.w),W.viewport(c)}s=ee.getFrustum(Be),C(M,P,Ve,se,he,this.type)}ee.isPointLightShadow!==!0&&this.type===Hs&&E(ee,P),ee.needsUpdate=!1}y=this.type,S.needsUpdate=!1,r.setRenderTarget(G,F,B)};function E(L,M){let P=e.update(R);b.defines.VSM_SAMPLES!==L.blurSamples&&(b.defines.VSM_SAMPLES=L.blurSamples,g.defines.VSM_SAMPLES=L.blurSamples,b.needsUpdate=!0,g.needsUpdate=!0),L.mapPass===null?L.mapPass=new Ui(o.x,o.y,{format:Gs,type:pr}):(L.mapPass.width!==L.map.width||L.mapPass.height!==L.map.height)&&L.mapPass.setSize(L.map.width,L.map.height),b.uniforms.shadow_pass.value=L.map.depthTexture,b.uniforms.resolution.value.set(L.map.width,L.map.height),b.uniforms.radius.value=L.radius,r.setRenderTarget(L.mapPass),r.clear(),r.renderBufferDirect(M,null,P,b,R,null),g.uniforms.shadow_pass.value=L.mapPass.texture,g.uniforms.resolution.value.set(L.map.width,L.map.height),g.uniforms.radius.value=L.radius,r.setRenderTarget(L.map),r.clear(),r.renderBufferDirect(M,null,P,g,R,null)}function D(L,M,P,G){let F=null,B=P.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(B!==void 0)F=B;else if(F=P.isPointLight===!0?h:f,r.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0||M.alphaToCoverage===!0){let W=F.uuid,j=M.uuid,O=m[W];O===void 0&&(O={},m[W]=O);let K=O[j];K===void 0&&(K=F.clone(),O[j]=K,M.addEventListener("dispose",N)),F=K}if(F.visible=M.visible,F.wireframe=M.wireframe,G===Hs?F.side=M.shadowSide!==null?M.shadowSide:M.side:F.side=M.shadowSide!==null?M.shadowSide:_[M.side],F.alphaMap=M.alphaMap,F.alphaTest=M.alphaToCoverage===!0?.5:M.alphaTest,F.map=M.map,F.clipShadows=M.clipShadows,F.clippingPlanes=M.clippingPlanes,F.clipIntersection=M.clipIntersection,F.displacementMap=M.displacementMap,F.displacementScale=M.displacementScale,F.displacementBias=M.displacementBias,F.wireframeLinewidth=M.wireframeLinewidth,F.linewidth=M.linewidth,P.isPointLight===!0&&F.isMeshDistanceMaterial===!0){let W=r.properties.get(F);W.light=P}return F}function C(L,M,P,G,F,B){if(L.visible===!1)return;if(L.layers.test(F)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&B===Hs)&&(!L.frustumCulled||L.intersectsFrustum(s))){L.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,L.matrixWorld);let O=e.update(L),K=L.material;if(Array.isArray(K)){let se=O.groups;for(let ee=0,me=se.length;ee<me;ee++){let ne=se[ee],ce=K[ne.materialIndex];if(ce&&ce.visible){let he=D(L,ce,G,B);L.onBeforeShadow(r,L,M,P,O,he,ne),r.renderBufferDirect(P,null,O,he,L,ne),L.onAfterShadow(r,L,M,P,O,he,ne)}}}else if(K.visible){let se=D(L,K,G,B);L.onBeforeShadow(r,L,M,P,O,se,null),r.renderBufferDirect(P,null,O,se,L,null),L.onAfterShadow(r,L,M,P,O,se,null)}}let j=L.children;for(let O=0,K=j.length;O<K;O++)C(j[O],M,P,G,F,B)}function N(L){L.target.removeEventListener("dispose",N);for(let P in m){let G=m[P],F=L.target.uuid;F in G&&(G[F].dispose(),delete G[F])}}}function RC(r,e){function t(){let U=!1,le=new en,ie=null,we=new en(0,0,0,0);return{setMask:function(ye){ie!==ye&&!U&&(r.colorMask(ye,ye,ye,ye),ie=ye)},setLocked:function(ye){U=ye},setClear:function(ye,_e,He,ot,pe){pe===!0&&(ye*=ot,_e*=ot,He*=ot),le.set(ye,_e,He,ot),we.equals(le)===!1&&(r.clearColor(ye,_e,He,ot),we.copy(le))},reset:function(){U=!1,ie=null,we.set(-1,0,0,0)}}}function s(){let U=!1,le=!1,ie=null,we=null,ye=null;return{setReversed:function(_e){if(le!==_e){let He=e.get("EXT_clip_control");_e?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),le=_e;let ot=ye;ye=null,this.setClear(ot)}},getReversed:function(){return le},setTest:function(_e){_e?Ne(r.DEPTH_TEST):Qe(r.DEPTH_TEST)},setMask:function(_e){ie!==_e&&!U&&(r.depthMask(_e),ie=_e)},setFunc:function(_e){if(le&&(_e=r_[_e]),we!==_e){switch(_e){case sf:r.depthFunc(r.NEVER);break;case of:r.depthFunc(r.ALWAYS);break;case af:r.depthFunc(r.LESS);break;case La:r.depthFunc(r.LEQUAL);break;case lf:r.depthFunc(r.EQUAL);break;case uf:r.depthFunc(r.GEQUAL);break;case cf:r.depthFunc(r.GREATER);break;case ff:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}we=_e}},setLocked:function(_e){U=_e},setClear:function(_e){ye!==_e&&(ye=_e,le&&(_e=1-_e),r.clearDepth(_e))},reset:function(){U=!1,ie=null,we=null,ye=null,le=!1}}}function o(){let U=!1,le=null,ie=null,we=null,ye=null,_e=null,He=null,ot=null,pe=null;return{setTest:function(Ge){U||(Ge?Ne(r.STENCIL_TEST):Qe(r.STENCIL_TEST))},setMask:function(Ge){le!==Ge&&!U&&(r.stencilMask(Ge),le=Ge)},setFunc:function(Ge,st,Ae){(ie!==Ge||we!==st||ye!==Ae)&&(r.stencilFunc(Ge,st,Ae),ie=Ge,we=st,ye=Ae)},setOp:function(Ge,st,Ae){(_e!==Ge||He!==st||ot!==Ae)&&(r.stencilOp(Ge,st,Ae),_e=Ge,He=st,ot=Ae)},setLocked:function(Ge){U=Ge},setClear:function(Ge){pe!==Ge&&(r.clearStencil(Ge),pe=Ge)},reset:function(){U=!1,le=null,ie=null,we=null,ye=null,_e=null,He=null,ot=null,pe=null}}}let l=new t,c=new s,f=new o,h={},m=new WeakMap,v={},_={},b={},g=new WeakMap,x=[],R=null,S=!1,y=null,E=null,D=null,C=null,N=null,L=null,M=null,P=new je(0,0,0),G=0,F=!1,B=null,W=null,j=null,O=null,K=null,se=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ee=!1,me=0,ne=r.getParameter(r.VERSION);ne.indexOf("WebGL")!==-1?(me=parseFloat(/^WebGL (\d)/.exec(ne)[1]),ee=me>=1):ne.indexOf("OpenGL ES")!==-1&&(me=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),ee=me>=2);let ce=null,he={},Be=r.getParameter(r.SCISSOR_BOX),Ve=r.getParameter(r.VIEWPORT),re=new en().fromArray(Be),Pe=new en().fromArray(Ve);function ke(U,le,ie,we){let ye=new Uint8Array(4),_e=r.createTexture();r.bindTexture(U,_e),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let He=0;He<ie;He++)U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY?r.texImage3D(le,0,r.RGBA,1,1,we,0,r.RGBA,r.UNSIGNED_BYTE,ye):r.texImage2D(le+He,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ye);return _e}let We={};We[r.TEXTURE_2D]=ke(r.TEXTURE_2D,r.TEXTURE_2D,1),We[r.TEXTURE_CUBE_MAP]=ke(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),We[r.TEXTURE_2D_ARRAY]=ke(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),We[r.TEXTURE_3D]=ke(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),Ne(r.DEPTH_TEST),c.setFunc(La),dn(!1),Gt(mm),Ne(r.CULL_FACE),fn(Ro);function Ne(U){v[U]!==!0&&(r.enable(U),v[U]=!0)}function Qe(U){v[U]!==!1&&(r.disable(U),v[U]=!1)}function Vt(U,le){return b[U]!==le?(r.bindFramebuffer(U,le),b[U]=le,U===r.DRAW_FRAMEBUFFER&&(b[r.FRAMEBUFFER]=le),U===r.FRAMEBUFFER&&(b[r.DRAW_FRAMEBUFFER]=le),!0):!1}function $e(U,le){let ie=x,we=!1;if(U){ie=g.get(le),ie===void 0&&(ie=[],g.set(le,ie));let ye=U.textures;if(ie.length!==ye.length||ie[0]!==r.COLOR_ATTACHMENT0){for(let _e=0,He=ye.length;_e<He;_e++)ie[_e]=r.COLOR_ATTACHMENT0+_e;ie.length=ye.length,we=!0}}else ie[0]!==r.BACK&&(ie[0]=r.BACK,we=!0);we&&r.drawBuffers(ie)}function Tt(U){return R!==U?(r.useProgram(U),R=U,!0):!1}let _t={[Co]:r.FUNC_ADD,[Eb]:r.FUNC_SUBTRACT,[Ab]:r.FUNC_REVERSE_SUBTRACT};_t[Rb]=r.MIN,_t[Cb]=r.MAX;let ht={[Pb]:r.ZERO,[Ib]:r.ONE,[Nb]:r.SRC_COLOR,[_m]:r.SRC_ALPHA,[Ob]:r.SRC_ALPHA_SATURATE,[Fb]:r.DST_COLOR,[Db]:r.DST_ALPHA,[Lb]:r.ONE_MINUS_SRC_COLOR,[Sm]:r.ONE_MINUS_SRC_ALPHA,[Ub]:r.ONE_MINUS_DST_COLOR,[kb]:r.ONE_MINUS_DST_ALPHA,[zb]:r.CONSTANT_COLOR,[Bb]:r.ONE_MINUS_CONSTANT_COLOR,[Hb]:r.CONSTANT_ALPHA,[Vb]:r.ONE_MINUS_CONSTANT_ALPHA};function fn(U,le,ie,we,ye,_e,He,ot,pe,Ge){if(U===Ro){S===!0&&(Qe(r.BLEND),S=!1);return}if(S===!1&&(Ne(r.BLEND),S=!0),U!==Tb){if(U!==y||Ge!==F){if((E!==Co||N!==Co)&&(r.blendEquation(r.FUNC_ADD),E=Co,N=Co),Ge)switch(U){case qa:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case vm:r.blendFunc(r.ONE,r.ONE);break;case ym:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case bm:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:tt("WebGLState: Invalid blending: ",U);break}else switch(U){case qa:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case vm:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case ym:tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bm:tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:tt("WebGLState: Invalid blending: ",U);break}D=null,C=null,L=null,M=null,P.set(0,0,0),G=0,y=U,F=Ge}return}ye=ye||le,_e=_e||ie,He=He||we,(le!==E||ye!==N)&&(r.blendEquationSeparate(_t[le],_t[ye]),E=le,N=ye),(ie!==D||we!==C||_e!==L||He!==M)&&(r.blendFuncSeparate(ht[ie],ht[we],ht[_e],ht[He]),D=ie,C=we,L=_e,M=He),(ot.equals(P)===!1||pe!==G)&&(r.blendColor(ot.r,ot.g,ot.b,pe),P.copy(ot),G=pe),y=U,F=!1}function qt(U,le){U.side===Mi?Qe(r.CULL_FACE):Ne(r.CULL_FACE);let ie=U.side===hi;le&&(ie=!ie),dn(ie),U.blending===qa&&U.transparent===!1?fn(Ro):fn(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),c.setFunc(U.depthFunc),c.setTest(U.depthTest),c.setMask(U.depthWrite),l.setMask(U.colorWrite);let we=U.stencilWrite;f.setTest(we),we&&(f.setMask(U.stencilWriteMask),f.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),f.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Wt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Ne(r.SAMPLE_ALPHA_TO_COVERAGE):Qe(r.SAMPLE_ALPHA_TO_COVERAGE)}function dn(U){B!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),B=U)}function Gt(U){U!==Mb?(Ne(r.CULL_FACE),U!==W&&(U===mm?r.cullFace(r.BACK):U===wb?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Qe(r.CULL_FACE),W=U}function Jn(U){U!==j&&(ee&&r.lineWidth(U),j=U)}function Wt(U,le,ie){U?(Ne(r.POLYGON_OFFSET_FILL),(O!==le||K!==ie)&&(O=le,K=ie,c.getReversed()&&(le=-le,ie=-ie),r.polygonOffset(le,ie))):Qe(r.POLYGON_OFFSET_FILL)}function hn(U){U?Ne(r.SCISSOR_TEST):Qe(r.SCISSOR_TEST)}function Bn(U){U===void 0&&(U=r.TEXTURE0+se-1),ce!==U&&(r.activeTexture(U),ce=U)}function Kn(U,le,ie){ie===void 0&&(ce===null?ie=r.TEXTURE0+se-1:ie=ce);let we=he[ie];we===void 0&&(we={type:void 0,texture:void 0},he[ie]=we),(we.type!==U||we.texture!==le)&&(ce!==ie&&(r.activeTexture(ie),ce=ie),r.bindTexture(U,le||We[U]),we.type=U,we.texture=le)}function H(){let U=he[ce];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Hn(){try{r.compressedTexImage2D(...arguments)}catch(U){tt("WebGLState:",U)}}function Ct(){try{r.compressedTexImage3D(...arguments)}catch(U){tt("WebGLState:",U)}}function at(){try{r.texSubImage2D(...arguments)}catch(U){tt("WebGLState:",U)}}function Ee(){try{r.texSubImage3D(...arguments)}catch(U){tt("WebGLState:",U)}}function pn(){try{r.compressedTexSubImage2D(...arguments)}catch(U){tt("WebGLState:",U)}}function Xe(){try{r.compressedTexSubImage3D(...arguments)}catch(U){tt("WebGLState:",U)}}function Ze(){try{r.texStorage2D(...arguments)}catch(U){tt("WebGLState:",U)}}function I(){try{r.texStorage3D(...arguments)}catch(U){tt("WebGLState:",U)}}function T(){try{r.texImage2D(...arguments)}catch(U){tt("WebGLState:",U)}}function $(){try{r.texImage3D(...arguments)}catch(U){tt("WebGLState:",U)}}function de(U){return _[U]!==void 0?_[U]:r.getParameter(U)}function ue(U,le){_[U]!==le&&(r.pixelStorei(U,le),_[U]=le)}function xe(U){re.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),re.copy(U))}function Te(U){Pe.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),Pe.copy(U))}function oe(U,le){let ie=m.get(le);ie===void 0&&(ie=new WeakMap,m.set(le,ie));let we=ie.get(U);we===void 0&&(we=r.getUniformBlockIndex(le,U.name),r.uniformBlockBinding(le,we,we),ie.set(U,we))}function ae(U,le,ie){let ye=m.get(le).get(U);h[ye]!==ie&&(r.bindBufferBase(r.UNIFORM_BUFFER,ye,ie),h[ye]=ie)}function Me(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),c.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),v={},_={},ce=null,he={},b={},h={},g=new WeakMap,x=[],R=null,S=!1,y=null,E=null,D=null,C=null,N=null,L=null,M=null,P=new je(0,0,0),G=0,F=!1,B=null,W=null,j=null,O=null,K=null,re.set(0,0,r.canvas.width,r.canvas.height),Pe.set(0,0,r.canvas.width,r.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:Ne,disable:Qe,bindFramebuffer:Vt,drawBuffers:$e,useProgram:Tt,setBlending:fn,setMaterial:qt,setFlipSided:dn,setCullFace:Gt,setLineWidth:Jn,setPolygonOffset:Wt,setScissorTest:hn,activeTexture:Bn,bindTexture:Kn,unbindTexture:H,compressedTexImage2D:Hn,compressedTexImage3D:Ct,texImage2D:T,texImage3D:$,pixelStorei:ue,getParameter:de,updateUBOMapping:oe,uniformBlockBinding:ae,texStorage2D:Ze,texStorage3D:I,texSubImage2D:at,texSubImage3D:Ee,compressedTexSubImage2D:pn,compressedTexSubImage3D:Xe,scissor:xe,viewport:Te,reset:Me}}function CC(r,e,t,s,o,l,c){let f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new ut,v=new WeakMap,_=new Set,b,g=new WeakMap,x=new Set,R=new FinalizationRegistry(I=>x.delete(I)),S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(I,T){return S?new OffscreenCanvas(I,T):ka("canvas")}function E(I,T,$){let de=1,ue=Ze(I);if((ue.width>$||ue.height>$)&&(de=$/Math.max(ue.width,ue.height)),de<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let xe=Math.floor(de*ue.width),Te=Math.floor(de*ue.height);b===void 0&&(b=y(xe,Te));let oe=T?y(xe,Te):b;return oe.width=xe,oe.height=Te,oe.getContext("2d").drawImage(I,0,0,xe,Te),qe("WebGLRenderer: Texture has been resized from ("+ue.width+"x"+ue.height+") to ("+xe+"x"+Te+")."),oe}else return"data"in I&&qe("WebGLRenderer: Image in DataTexture is too big ("+ue.width+"x"+ue.height+")."),I;return I}function D(I){return I.generateMipmaps}function C(I){r.generateMipmap(I)}function N(I){return I.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?r.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(I,T,$,de,ue,xe=!1){if(I!==null){if(r[I]!==void 0)return r[I];qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Te;de&&(Te=e.get("EXT_texture_norm16"),Te||qe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let oe=T;if(T===r.RED&&($===r.FLOAT&&(oe=r.R32F),$===r.HALF_FLOAT&&(oe=r.R16F),$===r.UNSIGNED_BYTE&&(oe=r.R8),$===r.UNSIGNED_SHORT&&Te&&(oe=Te.R16_EXT),$===r.SHORT&&Te&&(oe=Te.R16_SNORM_EXT)),T===r.RED_INTEGER&&($===r.UNSIGNED_BYTE&&(oe=r.R8UI),$===r.UNSIGNED_SHORT&&(oe=r.R16UI),$===r.UNSIGNED_INT&&(oe=r.R32UI),$===r.BYTE&&(oe=r.R8I),$===r.SHORT&&(oe=r.R16I),$===r.INT&&(oe=r.R32I)),T===r.RG&&($===r.FLOAT&&(oe=r.RG32F),$===r.HALF_FLOAT&&(oe=r.RG16F),$===r.UNSIGNED_BYTE&&(oe=r.RG8),$===r.UNSIGNED_SHORT&&Te&&(oe=Te.RG16_EXT),$===r.SHORT&&Te&&(oe=Te.RG16_SNORM_EXT)),T===r.RG_INTEGER&&($===r.UNSIGNED_BYTE&&(oe=r.RG8UI),$===r.UNSIGNED_SHORT&&(oe=r.RG16UI),$===r.UNSIGNED_INT&&(oe=r.RG32UI),$===r.BYTE&&(oe=r.RG8I),$===r.SHORT&&(oe=r.RG16I),$===r.INT&&(oe=r.RG32I)),T===r.RGB_INTEGER&&($===r.UNSIGNED_BYTE&&(oe=r.RGB8UI),$===r.UNSIGNED_SHORT&&(oe=r.RGB16UI),$===r.UNSIGNED_INT&&(oe=r.RGB32UI),$===r.BYTE&&(oe=r.RGB8I),$===r.SHORT&&(oe=r.RGB16I),$===r.INT&&(oe=r.RGB32I)),T===r.RGBA_INTEGER&&($===r.UNSIGNED_BYTE&&(oe=r.RGBA8UI),$===r.UNSIGNED_SHORT&&(oe=r.RGBA16UI),$===r.UNSIGNED_INT&&(oe=r.RGBA32UI),$===r.BYTE&&(oe=r.RGBA8I),$===r.SHORT&&(oe=r.RGBA16I),$===r.INT&&(oe=r.RGBA32I)),T===r.RGB&&($===r.UNSIGNED_SHORT&&Te&&(oe=Te.RGB16_EXT),$===r.SHORT&&Te&&(oe=Te.RGB16_SNORM_EXT),$===r.UNSIGNED_INT_5_9_9_9_REV&&(oe=r.RGB9_E5),$===r.UNSIGNED_INT_10F_11F_11F_REV&&(oe=r.R11F_G11F_B10F)),T===r.RGBA){let ae=xe?Hl:bt.getTransfer(ue);$===r.FLOAT&&(oe=r.RGBA32F),$===r.HALF_FLOAT&&(oe=r.RGBA16F),$===r.UNSIGNED_BYTE&&(oe=ae===Ut?r.SRGB8_ALPHA8:r.RGBA8),$===r.UNSIGNED_SHORT&&Te&&(oe=Te.RGBA16_EXT),$===r.SHORT&&Te&&(oe=Te.RGBA16_SNORM_EXT),$===r.UNSIGNED_SHORT_4_4_4_4&&(oe=r.RGBA4),$===r.UNSIGNED_SHORT_5_5_5_1&&(oe=r.RGB5_A1)}return(oe===r.R16F||oe===r.R32F||oe===r.RG16F||oe===r.RG32F||oe===r.RGBA16F||oe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function M(I,T){let $;return I?T===null||T===hr||T===Io?$=r.DEPTH24_STENCIL8:T===Ki?$=r.DEPTH32F_STENCIL8:T===Ya&&($=r.DEPTH24_STENCIL8,qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===hr||T===Io?$=r.DEPTH_COMPONENT24:T===Ki?$=r.DEPTH_COMPONENT32F:T===Ya&&($=r.DEPTH_COMPONENT16),$}function P(I,T){return D(I)===!0||I.isFramebufferTexture&&I.minFilter!==Un&&I.minFilter!==di?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function G(I){let T=new WeakRef(I);s.get(I).__ref=T,x.add(T),R.register(I,T,T)}function F(I){let T=s.get(I).__ref;T!==void 0&&(x.delete(T),R.unregister(T))}function B(I){j(I.target)}function W(I){O(I.target)}function j(I){I.removeEventListener("dispose",B),F(I),se(I),I.isVideoTexture&&v.delete(I),I.isHTMLTexture&&_.delete(I)}function O(I){I.removeEventListener("dispose",W),F(I),me(I)}function K(){for(let I of x){let T=I.deref();T!==void 0&&(T.isRenderTarget===!0?O(T):j(T))}x.clear(),_.clear()}function se(I){let T=s.get(I);if(T.__webglInit===void 0)return;let $=I.source,de=g.get($);if(de){let ue=de[T.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&ee(I),Object.keys(de).length===0&&g.delete($)}s.remove(I)}function ee(I){let T=s.get(I);r.deleteTexture(T.__webglTexture);let $=I.source,de=g.get($);delete de[T.__cacheKey],c.memory.textures--}function me(I){let T=s.get(I);T.__depthDisposeCallback&&T.__depthDisposeCallback();let $=I.depthTexture;if($&&$.renderTarget===I&&j($),I.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(T.__webglFramebuffer[ue]))for(let xe=0;xe<T.__webglFramebuffer[ue].length;xe++)r.deleteFramebuffer(T.__webglFramebuffer[ue][xe]);else r.deleteFramebuffer(T.__webglFramebuffer[ue]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[ue])}else{if(Array.isArray(T.__webglFramebuffer))for(let ue=0;ue<T.__webglFramebuffer.length;ue++)r.deleteFramebuffer(T.__webglFramebuffer[ue]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ue=0;ue<T.__webglColorRenderbuffer.length;ue++)T.__webglColorRenderbuffer[ue]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[ue]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let de=I.textures;for(let ue=0,xe=de.length;ue<xe;ue++){let Te=s.get(de[ue]);Te.__webglTexture&&(r.deleteTexture(Te.__webglTexture),c.memory.textures--),s.remove(de[ue])}s.remove(I)}let ne=0;function ce(){ne=0}function he(){return ne}function Be(I){ne=I}function Ve(){let I=ne;return I>=o.maxTextures&&qe("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+o.maxTextures),ne+=1,I}function re(I){let T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.mipmapsAutoUpdate),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.colorSpace),T.join()}function Pe(I,T){let $=s.get(I);if(I.isVideoTexture&&pn(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&$.__version!==I.version){let de=I.image;if(de===null)qe("WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)qe("WebGLRenderer: Texture marked for update but image is incomplete");else{qt($,I,T);return}}else I.isExternalTexture&&($.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,$.__webglTexture,r.TEXTURE0+T)}function ke(I,T){let $=s.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&$.__version!==I.version){qt($,I,T);return}else I.isExternalTexture&&($.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,$.__webglTexture,r.TEXTURE0+T)}function We(I,T){let $=s.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&$.__version!==I.version){qt($,I,T);return}t.bindTexture(r.TEXTURE_3D,$.__webglTexture,r.TEXTURE0+T)}function Ne(I,T){let $=s.get(I);if(I.version>0&&$.__version!==I.version){dn($,I,T);return}t.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture,r.TEXTURE0+T)}let Qe={[df]:r.REPEAT,[Cr]:r.CLAMP_TO_EDGE,[hf]:r.MIRRORED_REPEAT},Vt={[Un]:r.NEAREST,[Xb]:r.NEAREST_MIPMAP_NEAREST,[au]:r.NEAREST_MIPMAP_LINEAR,[di]:r.LINEAR,[Hf]:r.LINEAR_MIPMAP_NEAREST,[us]:r.LINEAR_MIPMAP_LINEAR},$e={[jb]:r.NEVER,[Om]:r.ALWAYS,[Zb]:r.LESS,[Fm]:r.LEQUAL,[Jb]:r.EQUAL,[Um]:r.GEQUAL,[Kb]:r.GREATER,[Qb]:r.NOTEQUAL};function Tt(I,T){if(T.type===Ki&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===di||T.magFilter===Hf||T.magFilter===au||T.magFilter===us||T.minFilter===di||T.minFilter===Hf||T.minFilter===au||T.minFilter===us)&&qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(I,r.TEXTURE_WRAP_S,Qe[T.wrapS]),r.texParameteri(I,r.TEXTURE_WRAP_T,Qe[T.wrapT]),(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)&&r.texParameteri(I,r.TEXTURE_WRAP_R,Qe[T.wrapR]),r.texParameteri(I,r.TEXTURE_MAG_FILTER,Vt[T.magFilter]),r.texParameteri(I,r.TEXTURE_MIN_FILTER,Vt[T.minFilter]),T.compareFunction&&(r.texParameteri(I,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(I,r.TEXTURE_COMPARE_FUNC,$e[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Un||T.minFilter!==au&&T.minFilter!==us||T.type===Ki&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){let $=e.get("EXT_texture_filter_anisotropic");r.texParameterf(I,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function _t(I,T){let $=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",B),G(T));let de=T.source,ue=g.get(de);ue===void 0&&(ue={},g.set(de,ue));let xe=re(T);if(xe!==I.__cacheKey){ue[xe]===void 0&&(ue[xe]={texture:r.createTexture(),usedTimes:0},c.memory.textures++,$=!0),ue[xe].usedTimes++;let Te=ue[I.__cacheKey];Te!==void 0&&(ue[I.__cacheKey].usedTimes--,Te.usedTimes===0&&ee(T)),I.__cacheKey=xe,I.__webglTexture=ue[xe].texture}return $}function ht(I,T,$){return Math.floor(Math.floor(I/$)/T)}function fn(I,T,$,de){let xe=I.updateRanges;if(xe.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,$,de,T.data);else{xe.sort((U,le)=>U.start-le.start);let Te=0;for(let U=1;U<xe.length;U++){let le=xe[Te],ie=xe[U],we=le.start+le.count,ye=ht(ie.start,T.width,4),_e=ht(le.start,T.width,4);ie.start<=we+1&&ye===_e&&ht(ie.start+ie.count-1,T.width,4)===ye?le.count=Math.max(le.count,ie.start+ie.count-le.start):(++Te,xe[Te]=ie)}xe.length=Te+1;let oe=t.getParameter(r.UNPACK_ROW_LENGTH),ae=t.getParameter(r.UNPACK_SKIP_PIXELS),Me=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let U=0,le=xe.length;U<le;U++){let ie=xe[U],we=Math.floor(ie.start/4),ye=Math.ceil(ie.count/4),_e=we%T.width,He=Math.floor(we/T.width),ot=ye,pe=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,_e),t.pixelStorei(r.UNPACK_SKIP_ROWS,He),t.texSubImage2D(r.TEXTURE_2D,0,_e,He,ot,pe,$,de,T.data)}I.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,oe),t.pixelStorei(r.UNPACK_SKIP_PIXELS,ae),t.pixelStorei(r.UNPACK_SKIP_ROWS,Me)}}function qt(I,T,$){let de=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(de=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(de=r.TEXTURE_3D);let ue=_t(I,T),xe=T.source;t.bindTexture(de,I.__webglTexture,r.TEXTURE0+$);let Te=s.get(xe);if(xe.version!==Te.__version||ue===!0){if(t.activeTexture(r.TEXTURE0+$),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let pe=bt.getPrimaries(bt.workingColorSpace),Ge=T.colorSpace===fs?null:bt.getPrimaries(T.colorSpace),st=T.colorSpace===fs||pe===Ge?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,st)}t.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment);let ae=E(T.image,!1,o.maxTextureSize);ae=Xe(T,ae);let Me=l.convert(T.format,T.colorSpace),U=l.convert(T.type),le=L(T.internalFormat,Me,U,T.normalized,T.colorSpace,T.isVideoTexture);Tt(de,T);let ie,we=T.mipmaps,ye=T.isVideoTexture!==!0,_e=Te.__version===void 0||ue===!0,He=xe.dataReady,ot=P(T,ae);if(T.isDepthTexture)le=M(T.format===cs,T.type),_e&&(ye?t.texStorage2D(r.TEXTURE_2D,1,le,ae.width,ae.height):t.texImage2D(r.TEXTURE_2D,0,le,ae.width,ae.height,0,Me,U,null));else if(T.isDataTexture)if(we.length>0){ye&&_e&&t.texStorage2D(r.TEXTURE_2D,ot,le,we[0].width,we[0].height);for(let pe=0,Ge=we.length;pe<Ge;pe++)ie=we[pe],ye?He&&t.texSubImage2D(r.TEXTURE_2D,pe,0,0,ie.width,ie.height,Me,U,ie.data):t.texImage2D(r.TEXTURE_2D,pe,le,ie.width,ie.height,0,Me,U,ie.data);T.generateMipmaps=!1}else ye?(_e&&t.texStorage2D(r.TEXTURE_2D,ot,le,ae.width,ae.height),He&&fn(T,ae,Me,U)):t.texImage2D(r.TEXTURE_2D,0,le,ae.width,ae.height,0,Me,U,ae.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ye&&_e&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ot,le,we[0].width,we[0].height,ae.depth);for(let pe=0,Ge=we.length;pe<Ge;pe++)if(ie=we[pe],T.format!==zi)if(Me!==null)if(ye){if(He)if(T.layerUpdates.size>0){let st=Ym(ie.width,ie.height,T.format,T.type);for(let Ae of T.layerUpdates){let Pt=ie.data.subarray(Ae*st/ie.data.BYTES_PER_ELEMENT,(Ae+1)*st/ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,pe,0,0,Ae,ie.width,ie.height,1,Me,Pt)}}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,pe,0,0,0,ie.width,ie.height,ae.depth,Me,ie.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,pe,le,ie.width,ie.height,ae.depth,0,ie.data,0,0);else qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ye?He&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,pe,0,0,0,ie.width,ie.height,ae.depth,Me,U,ie.data):t.texImage3D(r.TEXTURE_2D_ARRAY,pe,le,ie.width,ie.height,ae.depth,0,Me,U,ie.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{ye&&_e&&t.texStorage2D(r.TEXTURE_2D,ot,le,we[0].width,we[0].height);for(let pe=0,Ge=we.length;pe<Ge;pe++)ie=we[pe],T.format!==zi?Me!==null?ye?He&&t.compressedTexSubImage2D(r.TEXTURE_2D,pe,0,0,ie.width,ie.height,Me,ie.data):t.compressedTexImage2D(r.TEXTURE_2D,pe,le,ie.width,ie.height,0,ie.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ye?He&&t.texSubImage2D(r.TEXTURE_2D,pe,0,0,ie.width,ie.height,Me,U,ie.data):t.texImage2D(r.TEXTURE_2D,pe,le,ie.width,ie.height,0,Me,U,ie.data)}else if(T.isDataArrayTexture)if(ye){if(_e&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ot,le,ae.width,ae.height,ae.depth),He)if(T.layerUpdates.size>0){let pe=Ym(ae.width,ae.height,T.format,T.type);for(let Ge of T.layerUpdates){let st=ae.data.subarray(Ge*pe/ae.data.BYTES_PER_ELEMENT,(Ge+1)*pe/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Ge,ae.width,ae.height,1,Me,U,st)}T.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Me,U,ae.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,le,ae.width,ae.height,ae.depth,0,Me,U,ae.data);else if(T.isData3DTexture)ye?(_e&&t.texStorage3D(r.TEXTURE_3D,ot,le,ae.width,ae.height,ae.depth),He&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Me,U,ae.data)):t.texImage3D(r.TEXTURE_3D,0,le,ae.width,ae.height,ae.depth,0,Me,U,ae.data);else if(T.isFramebufferTexture){if(_e)if(ye)t.texStorage2D(r.TEXTURE_2D,ot,le,ae.width,ae.height);else{let pe=ae.width,Ge=ae.height;for(let st=0;st<ot;st++)t.texImage2D(r.TEXTURE_2D,st,le,pe,Ge,0,Me,U,null),pe>>=1,Ge>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in r){let pe=r.canvas;if(pe.hasAttribute("layoutsubtree")||pe.setAttribute("layoutsubtree","true"),ae.parentNode!==pe){pe.appendChild(ae),_.add(T),pe.onpaint=Ge=>{let st=Ge.changedElements;for(let Ae of _)st.includes(Ae.image)&&(Ae.needsUpdate=!0)},pe.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,ae);else{let st=r.RGBA,Ae=r.RGBA,Pt=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,st,Ae,Pt,ae)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(we.length>0){if(ye&&_e){let pe=Ze(we[0]);t.texStorage2D(r.TEXTURE_2D,ot,le,pe.width,pe.height)}for(let pe=0,Ge=we.length;pe<Ge;pe++)ie=we[pe],ye?He&&t.texSubImage2D(r.TEXTURE_2D,pe,0,0,Me,U,ie):t.texImage2D(r.TEXTURE_2D,pe,le,Me,U,ie);T.generateMipmaps=!1}else if(ye){if(_e){let pe=Ze(ae);t.texStorage2D(r.TEXTURE_2D,ot,le,pe.width,pe.height)}He&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Me,U,ae)}else t.texImage2D(r.TEXTURE_2D,0,le,Me,U,ae);D(T)&&T.mipmapsAutoUpdate===!0&&C(de),Te.__version=xe.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function dn(I,T,$){if(T.image.length!==6)return;let de=_t(I,T),ue=T.source;t.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+$);let xe=s.get(ue);if(ue.version!==xe.__version||de===!0){t.activeTexture(r.TEXTURE0+$);let Te=bt.getPrimaries(bt.workingColorSpace),oe=T.colorSpace===fs?null:bt.getPrimaries(T.colorSpace),ae=T.colorSpace===fs||Te===oe?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let Me=T.isCompressedTexture||T.image[0].isCompressedTexture,U=T.image[0]&&T.image[0].isDataTexture,le=[];for(let Ae=0;Ae<6;Ae++)!Me&&!U?le[Ae]=E(T.image[Ae],!0,o.maxCubemapSize):le[Ae]=U?T.image[Ae].image:T.image[Ae],le[Ae]=Xe(T,le[Ae]);let ie=le[0],we=l.convert(T.format,T.colorSpace),ye=l.convert(T.type),_e=L(T.internalFormat,we,ye,T.normalized,T.colorSpace),He=T.isVideoTexture!==!0,ot=xe.__version===void 0||de===!0,pe=ue.dataReady,Ge=P(T,ie);Tt(r.TEXTURE_CUBE_MAP,T);let st;if(T.isDepthTexture){if(_e=M(T.format===cs,T.type),ot)if(He)t.texStorage2D(r.TEXTURE_CUBE_MAP,1,_e,ie.width,ie.height);else for(let Ae=0;Ae<6;Ae++)t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,_e,ie.width,ie.height,0,we,ye,null)}else if(Me){He&&ot&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ge,_e,ie.width,ie.height);for(let Ae=0;Ae<6;Ae++){st=le[Ae].mipmaps;for(let Pt=0;Pt<st.length;Pt++){let vn=st[Pt];T.format!==zi?we!==null?He?pe&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Pt,0,0,vn.width,vn.height,we,vn.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Pt,_e,vn.width,vn.height,0,vn.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Pt,0,0,vn.width,vn.height,we,ye,vn.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Pt,_e,vn.width,vn.height,0,we,ye,vn.data)}}}else{if(st=T.mipmaps,He&&ot){st.length>0&&Ge++;let Ae=Ze(le[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Ge,_e,Ae.width,Ae.height)}for(let Ae=0;Ae<6;Ae++)if(U){He?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,le[Ae].width,le[Ae].height,we,ye,le[Ae].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,_e,le[Ae].width,le[Ae].height,0,we,ye,le[Ae].data);for(let Pt=0;Pt<st.length;Pt++){let wi=st[Pt].image[Ae].image;He?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Pt+1,0,0,wi.width,wi.height,we,ye,wi.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Pt+1,_e,wi.width,wi.height,0,we,ye,wi.data)}}else{He?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,we,ye,le[Ae]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,_e,we,ye,le[Ae]);for(let Pt=0;Pt<st.length;Pt++){let vn=st[Pt];He?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Pt+1,0,0,we,ye,vn.image[Ae]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Pt+1,_e,we,ye,vn.image[Ae])}}}D(T)&&T.mipmapsAutoUpdate===!0&&C(r.TEXTURE_CUBE_MAP),xe.__version=ue.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function Gt(I,T,$,de,ue,xe){let Te=l.convert($.format,$.colorSpace),oe=l.convert($.type),ae=L($.internalFormat,Te,oe,$.normalized,$.colorSpace),Me=s.get(T),U=s.get($);if(U.__renderTarget=T,!Me.__hasExternalTextures){let le=Math.max(1,T.width>>xe),ie=Math.max(1,T.height>>xe);ue===r.TEXTURE_3D||ue===r.TEXTURE_2D_ARRAY?t.texImage3D(ue,xe,ae,le,ie,T.depth,0,Te,oe,null):t.texImage2D(ue,xe,ae,le,ie,0,Te,oe,null)}t.bindFramebuffer(r.FRAMEBUFFER,I),Ee(T)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,de,ue,U.__webglTexture,0,at(T)):(ue===r.TEXTURE_2D||ue>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,de,ue,U.__webglTexture,xe),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Jn(I,T,$){if(r.bindRenderbuffer(r.RENDERBUFFER,I),T.depthBuffer){let de=T.depthTexture,ue=de&&de.isDepthTexture?de.type:null,xe=M(T.stencilBuffer,ue),Te=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Ee(T)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,at(T),xe,T.width,T.height):$?r.renderbufferStorageMultisample(r.RENDERBUFFER,at(T),xe,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,xe,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Te,r.RENDERBUFFER,I)}else{let de=T.textures;for(let ue=0;ue<de.length;ue++){let xe=de[ue],Te=l.convert(xe.format,xe.colorSpace),oe=l.convert(xe.type),ae=L(xe.internalFormat,Te,oe,xe.normalized,xe.colorSpace);Ee(T)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,at(T),ae,T.width,T.height):$?r.renderbufferStorageMultisample(r.RENDERBUFFER,at(T),ae,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,ae,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Wt(I,T,$){let de=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ue=s.get(T.depthTexture);ue.__renderTarget=T;let xe=de?T.depthTexture.image[0]:T.depthTexture.image;(!ue.__webglTexture||xe.width!==T.width||xe.height!==T.height)&&(xe.width=T.width,xe.height=T.height,T.depthTexture.needsUpdate=!0),de?Ne(T.depthTexture,0):Pe(T.depthTexture,0);let Te=ue.__webglTexture,oe=at(T),ae=de?r.TEXTURE_CUBE_MAP_POSITIVE_X+$:r.TEXTURE_2D,Me=T.depthTexture.format===cs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(T.depthTexture.format===ns)Ee(T)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Me,ae,Te,0,oe):r.framebufferTexture2D(r.FRAMEBUFFER,Me,ae,Te,0);else if(T.depthTexture.format===cs)Ee(T)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Me,ae,Te,0,oe):r.framebufferTexture2D(r.FRAMEBUFFER,Me,ae,Te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function hn(I){let T=s.get(I),$=I.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==I.depthTexture){let de=I.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),de){let ue=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,de.removeEventListener("dispose",ue)};de.addEventListener("dispose",ue),T.__depthDisposeCallback=ue}T.__boundDepthTexture=de}if(I.depthTexture&&!T.__autoAllocateDepthBuffer)if($)for(let de=0;de<6;de++)Wt(T.__webglFramebuffer[de],I,de);else I.texture.mipmaps.length>0?Wt(T.__webglFramebuffer[0],I,0):Wt(T.__webglFramebuffer,I,0);else if($){T.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[de]),T.__webglDepthbuffer[de]===void 0)T.__webglDepthbuffer[de]=r.createRenderbuffer(),Jn(T.__webglDepthbuffer[de],I,!1);else{let ue=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,xe=T.__webglDepthbuffer[de];r.bindRenderbuffer(r.RENDERBUFFER,xe),r.framebufferRenderbuffer(r.FRAMEBUFFER,ue,r.RENDERBUFFER,xe)}}else if(I.texture.mipmaps.length>0?t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),Jn(T.__webglDepthbuffer,I,!1);else{let ue=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,xe=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,xe),r.framebufferRenderbuffer(r.FRAMEBUFFER,ue,r.RENDERBUFFER,xe)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Bn(I,T,$){let de=s.get(I);T!==void 0&&Gt(de.__webglFramebuffer,I,I.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),$!==void 0&&hn(I)}function Kn(I){let T=I.texture,$=s.get(I),de=s.get(T);I.addEventListener("dispose",W),G(I);let ue=I.textures,xe=I.isWebGLCubeRenderTarget===!0,Te=ue.length>1;if(Te||(de.__webglTexture===void 0&&(de.__webglTexture=r.createTexture()),de.__version=T.version,c.memory.textures++),xe){$.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(T.mipmaps.length>0){$.__webglFramebuffer[oe]=[];for(let ae=0;ae<T.mipmaps.length;ae++)$.__webglFramebuffer[oe][ae]=r.createFramebuffer()}else $.__webglFramebuffer[oe]=r.createFramebuffer()}else{if(T.mipmaps.length>0){$.__webglFramebuffer=[];for(let oe=0;oe<T.mipmaps.length;oe++)$.__webglFramebuffer[oe]=r.createFramebuffer()}else $.__webglFramebuffer=r.createFramebuffer();if(Te)for(let oe=0,ae=ue.length;oe<ae;oe++){let Me=s.get(ue[oe]);Me.__webglTexture===void 0&&(Me.__webglTexture=r.createTexture(),c.memory.textures++)}if(I.samples>0&&Ee(I)===!1){$.__webglMultisampledFramebuffer=r.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let oe=0;oe<ue.length;oe++){let ae=ue[oe];$.__webglColorRenderbuffer[oe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,$.__webglColorRenderbuffer[oe]);let Me=l.convert(ae.format,ae.colorSpace),U=l.convert(ae.type),le=L(ae.internalFormat,Me,U,ae.normalized,ae.colorSpace,I.isXRRenderTarget===!0),ie=at(I);r.renderbufferStorageMultisample(r.RENDERBUFFER,ie,le,I.width,I.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.RENDERBUFFER,$.__webglColorRenderbuffer[oe])}r.bindRenderbuffer(r.RENDERBUFFER,null),I.depthBuffer&&($.__webglDepthRenderbuffer=r.createRenderbuffer(),Jn($.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(xe){t.bindTexture(r.TEXTURE_CUBE_MAP,de.__webglTexture),Tt(r.TEXTURE_CUBE_MAP,T);for(let oe=0;oe<6;oe++)if(T.mipmaps.length>0)for(let ae=0;ae<T.mipmaps.length;ae++)Gt($.__webglFramebuffer[oe][ae],I,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ae);else Gt($.__webglFramebuffer[oe],I,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);D(T)?C(r.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}else if(Te){for(let oe=0,ae=ue.length;oe<ae;oe++){let Me=ue[oe],U=s.get(Me),le=r.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(le=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(le,U.__webglTexture),Tt(le,Me),Gt($.__webglFramebuffer,I,Me,r.COLOR_ATTACHMENT0+oe,le,0),D(Me)&&C(le)}t.unbindTexture()}else{let oe=r.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(oe=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(oe,de.__webglTexture),Tt(oe,T),T.mipmaps.length>0)for(let ae=0;ae<T.mipmaps.length;ae++)Gt($.__webglFramebuffer[ae],I,T,r.COLOR_ATTACHMENT0,oe,ae);else Gt($.__webglFramebuffer,I,T,r.COLOR_ATTACHMENT0,oe,0);D(T)?C(oe):T.mipmaps.length>0&&r.texParameteri(oe,r.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}I.depthBuffer&&hn(I)}function H(I){let T=I.textures;for(let $=0,de=T.length;$<de;$++){let ue=T[$];if(D(ue)&&ue.mipmapsAutoUpdate===!0){let xe=N(I),Te=s.get(ue).__webglTexture;t.bindTexture(xe,Te),C(xe),t.unbindTexture()}}}let Hn=[];function Ct(I){if(I.samples>0){if(Ee(I)===!1){let T=I.textures,$=I.width,de=I.height,ue=r.COLOR_BUFFER_BIT,xe=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Te=s.get(I),oe=T.length>1;if(oe)for(let Me=0;Me<T.length;Me++)t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),I.texture.mipmaps.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Me=0;Me<T.length;Me++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ue|=r.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ue|=r.STENCIL_BUFFER_BIT)),oe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Te.__webglColorRenderbuffer[Me]);let U=s.get(T[Me]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,U,0)}r.blitFramebuffer(0,0,$,de,0,0,$,de,ue,r.NEAREST),h===!0&&(Hn.length=0,Hn.push(r.COLOR_ATTACHMENT0+Me),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&Hn.push(xe),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Hn))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),oe)for(let Me=0;Me<T.length;Me++){t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.RENDERBUFFER,Te.__webglColorRenderbuffer[Me]);let U=s.get(T[Me]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.TEXTURE_2D,U,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&h){let T=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function at(I){return Math.min(o.maxSamples,I.samples)}function Ee(I){let T=s.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function pn(I){let T=c.render.frame;v.get(I)!==T&&(v.set(I,T),I.update())}function Xe(I,T){let $=I.colorSpace,de=I.format,ue=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||$!==bo&&$!==fs&&(bt.getTransfer($)===Ut?(de!==zi||ue!==si)&&qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):tt("WebGLTextures: Unsupported texture color space:",$)),T}function Ze(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(m.width=I.naturalWidth||I.width,m.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(m.width=I.displayWidth,m.height=I.displayHeight):(m.width=I.width,m.height=I.height),m}this.allocateTextureUnit=Ve,this.resetTextureUnits=ce,this.getTextureUnits=he,this.setTextureUnits=Be,this.setTexture2D=Pe,this.setTexture2DArray=ke,this.setTexture3D=We,this.setTextureCube=Ne,this.rebindTextures=Bn,this.setupRenderTarget=Kn,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=hn,this.setupFrameBufferTexture=Gt,this.useMultisampledRTT=Ee,this.dispose=K}function PC(r,e){function t(s,o=fs){let l,c=bt.getTransfer(o);if(s===si)return r.UNSIGNED_BYTE;if(s===Gf)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Wf)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Nm)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Lm)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Pm)return r.BYTE;if(s===Im)return r.SHORT;if(s===Ya)return r.UNSIGNED_SHORT;if(s===Vf)return r.INT;if(s===hr)return r.UNSIGNED_INT;if(s===Ki)return r.FLOAT;if(s===pr)return r.HALF_FLOAT;if(s===Dm)return r.ALPHA;if(s===km)return r.RGB;if(s===zi)return r.RGBA;if(s===ns)return r.DEPTH_COMPONENT;if(s===cs)return r.DEPTH_STENCIL;if(s===Xf)return r.RED;if(s===qf)return r.RED_INTEGER;if(s===Gs)return r.RG;if(s===$f)return r.RG_INTEGER;if(s===Yf)return r.RGBA_INTEGER;if(s===lu||s===uu||s===cu||s===fu)if(c===Ut)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===lu)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===uu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===cu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===fu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===lu)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===uu)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===cu)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===fu)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===jf||s===Zf||s===Jf||s===Kf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===jf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Zf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Jf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Kf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Qf||s===ed||s===td||s===nd||s===id||s===du||s===rd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===Qf||s===ed)return c===Ut?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===td)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(s===nd)return l.COMPRESSED_R11_EAC;if(s===id)return l.COMPRESSED_SIGNED_R11_EAC;if(s===du)return l.COMPRESSED_RG11_EAC;if(s===rd)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===sd||s===od||s===ad||s===ld||s===ud||s===cd||s===fd||s===dd||s===hd||s===pd||s===md||s===gd||s===vd||s===yd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===sd)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===od)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ad)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ld)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ud)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===cd)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===fd)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===dd)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===hd)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===pd)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===md)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===gd)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===vd)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===yd)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===bd||s===_d||s===Sd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===bd)return c===Ut?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===_d)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Sd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===xd||s===Md||s===hu||s===wd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===xd)return l.COMPRESSED_RED_RGTC1_EXT;if(s===Md)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===hu)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===wd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Io?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:t}}var IC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,NC=`
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

}`,lg=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let s=new Kl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,s=new Ji({vertexShader:IC,fragmentShader:NC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new jn(new ls(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ug=class extends Pr{constructor(e,t){super();let s=this,o=null,l=1,c=null,f="local-floor",h=1,m=null,v=null,_=null,b=null,g=null,x=null,R=typeof XRWebGLBinding<"u",S=new lg,y={},E=t.getContextAttributes(),D=null,C=null,N=[],L=[],M=new ut,P=null,G=null,F=new fi;F.viewport=new en;let B=new fi;B.viewport=new en;let W=[F,B],j=new Uf,O=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let Pe=N[re];return Pe===void 0&&(Pe=new za,N[re]=Pe),Pe.getTargetRaySpace()},this.getControllerGrip=function(re){let Pe=N[re];return Pe===void 0&&(Pe=new za,N[re]=Pe),Pe.getGripSpace()},this.getHand=function(re){let Pe=N[re];return Pe===void 0&&(Pe=new za,N[re]=Pe),Pe.getHandSpace()};function se(re){let Pe=L.indexOf(re.inputSource);if(Pe===-1)return;let ke=N[Pe];ke!==void 0&&(ke.update(re.inputSource,re.frame,m||c),ke.dispatchEvent({type:re.type,data:re.inputSource}))}function ee(){o.removeEventListener("select",se),o.removeEventListener("selectstart",se),o.removeEventListener("selectend",se),o.removeEventListener("squeeze",se),o.removeEventListener("squeezestart",se),o.removeEventListener("squeezeend",se),o.removeEventListener("end",ee),o.removeEventListener("inputsourceschange",me);for(let re=0;re<N.length;re++){let Pe=L[re];Pe!==null&&(L[re]=null,N[re].disconnect(Pe))}O=null,K=null,S.reset();for(let re in y)delete y[re];if(e.setRenderTarget(D),g=null,b=null,_=null,o=null,C=null,Ve.stop(),s.isPresenting=!1,e.setPixelRatio(P),e.setSize(M.width,M.height,!1),G!==null){let re=G.camera;re.fov=G.fov,re.zoom=G.zoom,re.updateProjectionMatrix(),G=null}s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){l=re,s.isPresenting===!0&&qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){f=re,s.isPresenting===!0&&qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||c},this.setReferenceSpace=function(re){m=re},this.getBaseLayer=function(){return b!==null?b:g},this.getBinding=function(){return _===null&&R&&(_=new XRWebGLBinding(o,t)),_},this.getFrame=function(){return x},this.getSession=function(){return o},this.setSession=async function(re){if(o=re,o!==null){if(D=e.getRenderTarget(),o.addEventListener("select",se),o.addEventListener("selectstart",se),o.addEventListener("selectend",se),o.addEventListener("squeeze",se),o.addEventListener("squeezestart",se),o.addEventListener("squeezeend",se),o.addEventListener("end",ee),o.addEventListener("inputsourceschange",me),E.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(M),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let ke=null,We=null,Ne=null;E.depth&&(Ne=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ke=E.stencil?cs:ns,We=E.stencil?Io:hr);let Qe={colorFormat:t.RGBA8,depthFormat:Ne,scaleFactor:l};_=this.getBinding(),b=_.createProjectionLayer(Qe),o.updateRenderState({layers:[b]}),e.setPixelRatio(1),e.setSize(b.textureWidth,b.textureHeight,!1),C=new Ui(b.textureWidth,b.textureHeight,{format:zi,type:si,depthTexture:new as(b.textureWidth,b.textureHeight,We,void 0,void 0,void 0,void 0,void 0,void 0,ke),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1,storeMultisampledDepthBuffer:b.ignoreDepthValues===!1,storeMultisampledStencilBuffer:b.ignoreDepthValues===!1})}else{let ke={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:l};g=new XRWebGLLayer(o,t,ke),o.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),C=new Ui(g.framebufferWidth,g.framebufferHeight,{format:zi,type:si,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(h),m=null,c=await o.requestReferenceSpace(f),Ve.setContext(o),Ve.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function me(re){for(let Pe=0;Pe<re.removed.length;Pe++){let ke=re.removed[Pe],We=L.indexOf(ke);We>=0&&(L[We]=null,N[We].disconnect(ke))}for(let Pe=0;Pe<re.added.length;Pe++){let ke=re.added[Pe],We=L.indexOf(ke);if(We===-1){for(let Qe=0;Qe<N.length;Qe++)if(Qe>=L.length){L.push(ke),We=Qe;break}else if(L[Qe]===null){L[Qe]=ke,We=Qe;break}if(We===-1)break}let Ne=N[We];Ne&&Ne.connect(ke)}}function ne(re,Pe){Pe===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(Pe.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(o===null)return;let Pe=re.near,ke=re.far;S.texture!==null&&(S.depthNear>0&&(Pe=S.depthNear),S.depthFar>0&&(ke=S.depthFar)),j.near=B.near=F.near=Pe,j.far=B.far=F.far=ke,(O!==j.near||K!==j.far)&&(o.updateRenderState({depthNear:j.near,depthFar:j.far}),O=j.near,K=j.far),j.layers.mask=re.layers.mask|6,F.layers.mask=j.layers.mask&-5,B.layers.mask=j.layers.mask&-3;let We=re.parent,Ne=j.cameras;ne(j,We);for(let Qe=0;Qe<Ne.length;Qe++)ne(Ne[Qe],We);j.projectionMatrix.copy(F.projectionMatrix),j.projectionMatrixInverse.copy(F.projectionMatrixInverse),G===null&&re.isPerspectiveCamera&&(G={camera:re,fov:re.fov,zoom:re.zoom}),ce(re,j,We)};function ce(re,Pe,ke){ke===null?re.matrix.copy(Pe.matrixWorld):(re.matrix.copy(ke.matrixWorld),re.matrix.invert(),re.matrix.multiply(Pe.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(Pe.projectionMatrix),re.projectionMatrixInverse.copy(Pe.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=Ua*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(b===null&&g===null))return h},this.setFoveation=function(re){h=re,b!==null&&(b.fixedFoveation=re),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=re)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(j)},this.getCameraTexture=function(re){return y[re]};let he=null;function Be(re,Pe){if(v=Pe.getViewerPose(m||c),x=Pe,v!==null){let ke=v.views;g!==null&&(e.setRenderTargetFramebuffer(C,g.framebuffer),e.setRenderTarget(C));let We=!1;ke.length!==j.cameras.length&&(j.cameras.length=0,We=!0);for(let $e=0;$e<ke.length;$e++){let Tt=ke[$e],_t=null;if(g!==null)_t=g.getViewport(Tt);else{let fn=_.getViewSubImage(b,Tt);_t=fn.viewport,$e===0&&(e.setRenderTargetTextures(C,fn.colorTexture,fn.depthStencilTexture),e.setRenderTarget(C))}let ht=W[$e];ht===void 0&&(ht=new fi,ht.layers.enable($e),ht.viewport=new en,W[$e]=ht),ht.matrix.fromArray(Tt.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(Tt.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(_t.x,_t.y,_t.width,_t.height),$e===0&&(j.matrix.copy(ht.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),We===!0&&j.cameras.push(ht)}let Ne=o.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&R){_=s.getBinding();let $e=_.getDepthInformation(ke[0]);$e&&$e.isValid&&$e.texture&&S.init($e,o.renderState)}if(Ne&&Ne.includes("camera-access")&&R){e.state.unbindTexture(),_=s.getBinding();for(let $e=0;$e<ke.length;$e++){let Tt=ke[$e].camera;if(Tt){let _t=y[Tt];_t||(_t=new Kl,y[Tt]=_t);let ht=_.getCameraImage(Tt);_t.sourceTexture=ht}}}}for(let ke=0;ke<N.length;ke++){let We=L[ke],Ne=N[ke];We!==null&&Ne!==void 0&&Ne.update(We,Pe,m||c)}he&&he(re,Pe),Pe.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Pe}),x=null}let Ve=new N_;Ve.setAnimationLoop(Be),this.setAnimationLoop=function(re){he=re},this.dispose=function(){}}},LC=new Ot,V_=new nt;V_.set(-1,0,0,0,1,0,0,0,1);function DC(r,e){function t(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function s(S,y){y.color.getRGB(S.fogColor.value,Xm(r)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function o(S,y,E,D,C){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?l(S,y):y.isMeshLambertMaterial?(l(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(l(S,y),_(S,y)):y.isMeshPhongMaterial?(l(S,y),v(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(l(S,y),b(S,y),y.isMeshPhysicalMaterial&&g(S,y,C)):y.isMeshMatcapMaterial?(l(S,y),x(S,y)):y.isMeshDepthMaterial?l(S,y):y.isMeshDistanceMaterial?(l(S,y),R(S,y)):y.isMeshNormalMaterial?l(S,y):y.isLineBasicMaterial?(c(S,y),y.isLineDashedMaterial&&f(S,y)):y.isPointsMaterial?h(S,y,E,D):y.isSpriteMaterial?m(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,t(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===hi&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,t(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===hi&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,t(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,t(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);let E=e.get(y),D=E.envMap,C=E.envMapRotation;D&&(S.envMap.value=D,S.envMapRotation.value.setFromMatrix4(LC.makeRotationFromEuler(C)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(V_),S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,S.aoMapTransform))}function c(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform))}function f(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function h(S,y,E,D){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*E,S.scale.value=D*.5,y.map&&(S.map.value=y.map,t(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function m(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function v(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function _(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function b(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function g(S,y,E){S.ior.value=y.ior,y.diffuseRoughness>0&&(S.diffuseRoughness.value=y.diffuseRoughness,y.diffuseRoughnessMap&&(S.diffuseRoughnessMap.value=y.diffuseRoughnessMap,t(y.diffuseRoughnessMap,S.diffuseRoughnessMapTransform))),y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===hi&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.retroreflectivity>0&&(S.retroreflectivity.value=y.retroreflectivity),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessMinimum,S.iridescenceThicknessMaximum.value=y.iridescenceThicknessMaximum,y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=E.texture,S.transmissionSamplerSize.value.set(E.width,E.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,S.specularIntensityMapTransform))}function x(S,y){y.matcap&&(S.matcap.value=y.matcap)}function R(S,y){let E=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(E.matrixWorld),S.nearDistance.value=E.shadow.camera.near,S.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:o}}function kC(r,e,t,s){let o={},l={};function c(E,D){let C=D.program;s.uniformBlockBinding(E,C,o[E.id])}function f(E,D){let C=o[E.id];C===void 0&&(x(E),C=h(E),o[E.id]=C,E.addEventListener("dispose",S));let N=D.program;s.updateUBOMapping(E,N);let L=e.render.frame;l[E.id]!==L&&(m(E),l[E.id]=L)}function h(E){let D=r.createBuffer(),C=E.__size,N=E.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,C,N),r.bindBuffer(r.UNIFORM_BUFFER,null),D}function m(E){let D=o[E.id],C=E.uniforms,N=E.__cache;r.bindBuffer(r.UNIFORM_BUFFER,D);for(let L=0,M=C.length;L<M;L++){let P=C[L];if(Array.isArray(P))for(let G=0,F=P.length;G<F;G++)v(P[G],L,G,N);else v(P,L,0,N)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function v(E,D,C,N){if(b(E,D,C,N)===!0){let L=E.__offset,M=E.value;if(Array.isArray(M)){let P=0;for(let G=0;G<M.length;G++){let F=M[G],B=R(F,!0);_(F,E.__data,P),P+=B.storage/Float32Array.BYTES_PER_ELEMENT}}else _(M,E.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,L,E.__data)}}function _(E,D,C){typeof E=="number"||typeof E=="boolean"?D[C]=E:E.isMatrix3?(D[C]=E.elements[0],D[C+1]=E.elements[1],D[C+2]=E.elements[2],D[C+3]=0,D[C+4]=E.elements[3],D[C+5]=E.elements[4],D[C+6]=E.elements[5],D[C+7]=0,D[C+8]=E.elements[6],D[C+9]=E.elements[7],D[C+10]=E.elements[8],D[C+11]=0):ArrayBuffer.isView(E)?D.set(E.subarray(0,D.length-C),C):E.toArray(D,C)}function b(E,D,C,N){let L=E.value,M=D+"_"+C;if(Array.isArray(L)){N[M]===void 0&&(N[M]=[]);let P=N[M],G=!1;for(let F=0;F<L.length;F++)g(L[F],P,F)===!0&&(G=!0);return G}return g(L,N,M)}function g(E,D,C){if(D[C]===void 0)return typeof E=="number"||typeof E=="boolean"?D[C]=E:ArrayBuffer.isView(E)?D[C]=E.slice():D[C]=E.clone(),!0;{let N=D[C];if(typeof E=="number"||typeof E=="boolean"){if(N!==E)return D[C]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(N.equals(E)===!1)return N.copy(E),!0}}return!1}function x(E){let D=E.uniforms,C=0,N=16;for(let M=0,P=D.length;M<P;M++){let G=Array.isArray(D[M])?D[M]:[D[M]];for(let F=0,B=G.length;F<B;F++){let W=G[F],j=Array.isArray(W.value)?W.value:[W.value],O=Array.isArray(D[M])||Array.isArray(W.value),K=C;for(let ee=0,me=j.length;ee<me;ee++){let ne=j[ee],ce=R(ne,O),he=C%N,Be=he%ce.boundary,Ve=he+Be;C+=Be,Ve!==0&&N-Ve<ce.storage&&(C+=N-Ve),ee===0&&(K=C),C+=ce.storage}let se=W.type==="int"?Int32Array:W.type==="uint"?Uint32Array:Float32Array;W.__data=new se((C-K)/Float32Array.BYTES_PER_ELEMENT),W.__offset=K}}let L=C%N;return L>0&&(C+=N-L),E.__size=C,E.__cache={},this}function R(E,D){let C={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(C.boundary=4,C.storage=4):E.isVector2?(C.boundary=8,C.storage=8):E.isVector3||E.isColor?(C.boundary=16,C.storage=12):E.isVector4?(C.boundary=16,C.storage=16):E.isMatrix3?(C.boundary=16,C.storage=48):E.isMatrix4?(C.boundary=16,C.storage=64):E.isTexture?qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(E)?(C.boundary=16,C.storage=E.byteLength):qe("WebGLRenderer: Unsupported uniform value type.",E),D===!0&&(C.boundary=16,C.storage=Math.ceil(C.storage/16)*16),C}function S(E){let D=E.target;D.removeEventListener("dispose",S),r.deleteBuffer(o[D.id]),delete o[D.id],delete l[D.id]}function y(){for(let E in o)r.deleteBuffer(o[E]);o={},l={}}return{bind:c,update:f,dispose:y}}var FC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Fr=null;function UC(){return Fr===null&&(Fr=new ql(FC,16,16,Gs,pr),Fr.name="DFG_LUT",Fr.minFilter=di,Fr.magFilter=di,Fr.wrapS=Cr,Fr.wrapT=Cr,Fr.generateMipmaps=!1,Fr.needsUpdate=!0),Fr}var Cd=class{constructor(e={}){let{canvas:t=t_(),context:s=null,depth:o=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:b=!1,outputBufferType:g=si}=e;this.isWebGLRenderer=!0;let x;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=s.getContextAttributes().alpha}else x=c;let R=g,S=new Set([Yf,$f,qf]),y=new Set([si,hr,Ya,Io,Gf,Wf]),E=new Uint32Array(4),D=new Int32Array(4),C={textures:[],min:[],max:[],resolution:[]},N=null,L=null,M=[],P=[],G=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let F=this,B=!1,W=null,j=null,O=null,K=null;this._outputColorSpace=An;let se=0,ee=0,me=null,ne=-1,ce=null,he=new en,Be=new en,Ve=null,re=new je(0),Pe=0,ke=t.width,We=t.height,Ne=1,Qe=null,Vt=null,$e=new en(0,0,ke,We),Tt=new en(0,0,ke,We),_t=!1,ht=new Us,fn=new yf,qt=!1,dn=!1,Gt=new Ot,Jn=new V,Wt=new en,hn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Bn=!1;function Kn(){return me===null?Ne:1}let H=s;function Hn(A,z){return t.getContext(A,z)}let Ct,at,Ee,pn,Xe,Ze,I,T,$,de,ue,xe,Te,oe,ae,Me,U,le,ie,we,ye,_e,He;try{let A={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ge,!1),t.addEventListener("webglcontextrestored",st,!1),t.addEventListener("webglcontextcreationerror",Ae,!1),H===null){let z="webgl2";if(H=Hn(z,A),H===null)throw Hn(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ot()}catch(A){throw t.removeEventListener("webglcontextlost",Ge,!1),t.removeEventListener("webglcontextrestored",st,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),tt("WebGLRenderer: "+A.message),A}function ot(){Ct=new YA(H),Ct.init(),ye=new PC(H,Ct),at=new UA(H,Ct,e,ye),Ee=new RC(H,Ct),at.reversedDepthBuffer&&b&&Ee.buffers.depth.setReversed(!0),j=H.createFramebuffer(),O=H.createFramebuffer(),K=H.createFramebuffer(),pn=new JA(H),Xe=new pC,Ze=new CC(H,Ct,Ee,Xe,at,ye,pn),I=new $A(F),T=new Qw(H),_e=new kA(H,T),$=new jA(H,T,pn,_e),de=new QA(H,$,T,_e,pn),le=new KA(H,at,Ze),ae=new OA(Xe),ue=new hC(F,I,Ct,at,_e,ae),xe=new DC(F,Xe),Te=new gC,oe=new xC(Ct),U=new DA(F,I,Ee,de,x,h),Me=new AC(F,de,at),He=new kC(H,pn,at,Ee),ie=new FA(H,Ct,pn),we=new ZA(H,Ct,pn),pn.programs=ue.programs,F.capabilities=at,F.extensions=Ct,F.properties=Xe,F.renderLists=Te,F.shadowMap=Me,F.state=Ee,F.info=pn}R!==si&&(G=new tR(R,t.width,t.height,f,o,l));let pe=new ug(F,H);this.xr=pe,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let A=Ct.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Ct.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Ne},this.setPixelRatio=function(A){A!==void 0&&(Ne=A,this.setSize(ke,We,!1))},this.getSize=function(A){return A.set(ke,We)},this.setSize=function(A,z,J=!0){if(pe.isPresenting){qe("WebGLRenderer: Can't change size while VR device is presenting.");return}ke=A,We=z,t.width=Math.floor(A*Ne),t.height=Math.floor(z*Ne),J===!0&&(t.style.width=A+"px",t.style.height=z+"px"),G!==null&&G.setSize(t.width,t.height),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(ke*Ne,We*Ne).floor()},this.setDrawingBufferSize=function(A,z,J){ke=A,We=z,Ne=J,t.width=Math.floor(A*J),t.height=Math.floor(z*J),this.setViewport(0,0,A,z)},this.setEffects=function(A){if(R===si){tt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let z=0;z<A.length;z++)if(A[z].isOutputPass===!0){qe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}G.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(he)},this.getViewport=function(A){return A.copy($e)},this.setViewport=function(A,z,J,q){A.isVector4?$e.set(A.x,A.y,A.z,A.w):$e.set(A,z,J,q),Ee.viewport(he.copy($e).multiplyScalar(Kn()).round())},this.getScissor=function(A){return A.copy(Tt)},this.setScissor=function(A,z,J,q){A.isVector4?Tt.set(A.x,A.y,A.z,A.w):Tt.set(A,z,J,q),Ee.scissor(Be.copy(Tt).multiplyScalar(Kn()).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(A){Ee.setScissorTest(_t=A)},this.setOpaqueSort=function(A){Qe=A},this.setTransparentSort=function(A){Vt=A},this.getClearColor=function(A){return A.copy(U.getClearColor())},this.setClearColor=function(){U.setClearColor(...arguments)},this.getClearAlpha=function(){return U.getClearAlpha()},this.setClearAlpha=function(){U.setClearAlpha(...arguments)},this.clear=function(A=!0,z=!0,J=!0){let q=0;if(A){let Y=!1;if(me!==null){let be=me.texture.format;Y=S.has(be)}if(Y){let be=me.texture.type,Ce=y.has(be),Se=U.getClearColor(),Ie=U.getClearAlpha(),ze=Se.r,Fe=Se.g,ft=Se.b;Ce?(E[0]=ze,E[1]=Fe,E[2]=ft,E[3]=Ie,H.clearBufferuiv(H.COLOR,0,E)):(D[0]=ze,D[1]=Fe,D[2]=ft,D[3]=Ie,H.clearBufferiv(H.COLOR,0,D))}else q|=H.COLOR_BUFFER_BIT}z&&(q|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(q|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&H.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),W=A},this.dispose=function(){t.removeEventListener("webglcontextlost",Ge,!1),t.removeEventListener("webglcontextrestored",st,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),U.dispose(),Te.dispose(),oe.dispose(),Ze.dispose(),Xe.dispose(),I.dispose(),de.dispose(),$.dispose(),_e.dispose(),He.dispose(),ue.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",Ys),pe.removeEventListener("sessionend",js),tr.stop()};function Ge(A){A.preventDefault(),Bm("WebGLRenderer: Context Lost."),B=!0}function st(){Bm("WebGLRenderer: Context Restored."),B=!1;let A=pn.autoReset,z=Me.enabled,J=Me.autoUpdate,q=Me.needsUpdate,Y=Me.type;ot(),pn.autoReset=A,Me.enabled=z,Me.autoUpdate=J,Me.needsUpdate=q,Me.type=Y}function Ae(A){tt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Pt(A){let z=A.target;z.removeEventListener("dispose",Pt),vn(z)}function vn(A){wi(A),Xe.remove(A)}function wi(A){let z=Xe.get(A).programs;z!==void 0&&(z.forEach(function(J){ue.releaseProgram(J)}),A.isShaderMaterial&&ue.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,J,q,Y,be){z===null&&(z=hn);let Ce=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,Se=Ks(A,z,J,q,Y);Ee.setMaterial(q,Ce);let Ie=J.index,ze=1;if(q.wireframe===!0){if(Ie=$.getWireframeAttribute(J),Ie===void 0)return;ze=2}let Fe=J.drawRange,ft=J.attributes.position,Ue=Fe.start*ze,pt=(Fe.start+Fe.count)*ze;be!==null&&(Ue=Math.max(Ue,be.start*ze),pt=Math.min(pt,(be.start+be.count)*ze)),Ie!==null?(Ue=Math.max(Ue,0),pt=Math.min(pt,Ie.count)):ft!=null&&(Ue=Math.max(Ue,0),pt=Math.min(pt,ft.count));let rn=pt-Ue;if(rn<0||rn===1/0)return;_e.setup(Y,q,Se,J,Ie);let Bt,Dt=ie;if(Ie!==null&&(Bt=T.get(Ie),Dt=we,Dt.setIndex(Bt)),Y.isMesh)q.wireframe===!0?(Ee.setLineWidth(q.wireframeLinewidth*Kn()),Dt.setMode(H.LINES)):Dt.setMode(H.TRIANGLES);else if(Y.isLine){let Sn=q.linewidth;Sn===void 0&&(Sn=1),Ee.setLineWidth(Sn*Kn()),Y.isLineSegments?Dt.setMode(H.LINES):Y.isLineLoop?Dt.setMode(H.LINE_LOOP):Dt.setMode(H.LINE_STRIP)}else Y.isPoints?Dt.setMode(H.POINTS):Y.isSprite&&Dt.setMode(H.TRIANGLES);if(Y.isBatchedMesh)if(Ct.get("WEBGL_multi_draw"))Dt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let Sn=Y._multiDrawStarts,Oe=Y._multiDrawCounts,kt=Y._multiDrawCount,Ye=Ie?T.get(Ie).bytesPerElement:1,Bi=Xe.get(q).currentProgram.getUniforms();for(let mn=0;mn<kt;mn++)Bi.setValue(H,"_gl_DrawID",mn),Dt.render(Sn[mn]/Ye,Oe[mn])}else if(Y.isInstancedMesh)Dt.renderInstances(Ue,rn,Y.count);else if(J.isInstancedBufferGeometry){let Sn=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Oe=Math.min(J.instanceCount,Sn);Dt.renderInstances(Ue,rn,Oe)}else Dt.render(Ue,rn)};function er(A,z,J,q){W!==null&&A.isNodeMaterial&&W.setObject(q,A),qt===!0&&ae.setState(A,J,!1),A.transparent===!0&&A.side===Mi&&A.forceSinglePass===!1?(A.side=hi,A.needsUpdate=!0,mi(A,z,q),A.side=Vs,A.needsUpdate=!0,mi(A,z,q),A.side=Mi):mi(A,z,q)}this.compile=function(A,z,J=null){J===null&&(J=A),W!==null&&W.renderStart(A,z,J),L=oe.get(J),L.init(z),P.push(L),J.traverseVisible(function(Y){Y.isLight&&Y.layers.test(z.layers)&&(L.pushLight(Y),Y.castShadow&&L.pushShadow(Y))}),A!==J&&A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(z.layers)&&(L.pushLight(Y),Y.castShadow&&L.pushShadow(Y))}),L.setupLights(),W!==null&&W.updateLights(L.state.lightsArray),dn=this.localClippingEnabled,qt=ae.init(this.clippingPlanes,dn),qt===!0&&ae.setGlobalState(this.clippingPlanes,z),W!==null&&Me.render(L.state.shadowsArray,J,z);let q=new Set;return A.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let be=Y.material;if(be)if(Array.isArray(be))for(let Ce=0;Ce<be.length;Ce++){let Se=be[Ce];er(Se,J,z,Y),q.add(Se)}else er(be,J,z,Y),q.add(be)}),L=P.pop(),W!==null&&W.renderEnd(),q},this.compileAsync=function(A,z,J=null){let q=this.compile(A,z,J);return new Promise(Y=>{function be(){if(q.forEach(function(Ce){let Ie=Xe.get(Ce).currentProgram;(Ie===void 0||Ie.isReady())&&q.delete(Ce)}),q.size===0){Y(A);return}setTimeout(be,10)}Ct.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let ps=null;function Iu(A){ps&&ps(A)}function Ys(){tr.stop()}function js(){tr.start()}let tr=new N_;tr.setAnimationLoop(Iu),typeof self<"u"&&tr.setContext(self),this.setAnimationLoop=function(A){ps=A,pe.setAnimationLoop(A),A===null?tr.stop():tr.start()},pe.addEventListener("sessionstart",Ys),pe.addEventListener("sessionend",js),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;W!==null&&W.renderStart(A,z);let J=pe.enabled===!0&&pe.isPresenting===!0,q=G!==null&&(me===null||J)&&G.begin(F,me);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(G===null||G.isCompositing()===!1)&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(z),z=pe.getCamera()),A.isScene===!0&&A.onBeforeRender(F,A,z,me),L=oe.get(A,P.length),L.init(z),L.state.textureUnits=Ze.getTextureUnits(),P.push(L),Gt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),z.isArrayCamera?fn.setFromArrayCamera(z):ht.setFromProjectionMatrix(Gt,Zi,z.reversedDepth),dn=this.localClippingEnabled,qt=ae.init(this.clippingPlanes,dn),N=Te.get(A,M.length),N.init(),M.push(N),this.info.render.frame++,pe.enabled===!0&&pe.isPresenting===!0){let Ce=F.xr.getDepthSensingMesh();Ce!==null&&nr(Ce,z,-1/0,F.sortObjects)}nr(A,z,0,F.sortObjects),N.finish(),W!==null&&W.updateLights(L.state.lightsArray),F.sortObjects===!0&&N.sort(Qe,Vt),Bn=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,Bn&&U.addToRenderList(N,A),this.info.autoReset===!0&&this.info.reset(),qt===!0&&ae.beginShadows();let Y=L.state.shadowsArray;if(Me.render(Y,A,z),qt===!0&&ae.endShadows(),(q&&G.hasRenderPass())===!1){let Ce=N.opaque,Se=N.transmissive;if(L.setupLights(),z.isArrayCamera){let Ie=z.cameras;if(Se.length>0)for(let ze=0,Fe=Ie.length;ze<Fe;ze++){let ft=Ie[ze];Zs(Ce,Se,A,ft)}Bn&&U.render(A);for(let ze=0,Fe=Ie.length;ze<Fe;ze++){let ft=Ie[ze];sl(N,A,ft,ft.viewport)}}else Se.length>0&&Zs(Ce,Se,A,z),Bn&&U.render(A),sl(N,A,z)}me!==null&&ee===0&&(Ze.updateMultisampleRenderTarget(me),Ze.updateRenderTargetMipmap(me)),q&&G.end(F),A.isScene===!0&&A.onAfterRender(F,A,z),_e.resetDefaultState(),ne=-1,ce=null,P.pop(),P.length>0?(L=P[P.length-1],Ze.setTextureUnits(L.state.textureUnits),qt===!0&&ae.setGlobalState(F.clippingPlanes,L.state.camera)):L=null,M.pop(),M.length>0?N=M[M.length-1]:N=null,W!==null&&W.renderEnd()};function nr(A,z,J,q){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)J=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)L.pushLight(A),A.castShadow&&L.pushShadow(A);else if(A.isSprite){let Ce=z.isArrayCamera?fn:ht;if(!A.frustumCulled||A.intersectsFrustum(Ce)){q&&Wt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Gt);let Se=de.update(A),Ie=A.material;Ie.visible&&N.push(A,Se,Ie,J,Wt.z,null,z)}}else if(A.isMesh||A.isLine||A.isPoints){let Ce=z.isArrayCamera?fn:ht;if(!A.frustumCulled||A.intersectsFrustum(Ce)){let Se=de.update(A),Ie=A.material;if(q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Wt.copy(A.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Wt.copy(Se.boundingSphere.center)),Wt.applyMatrix4(A.matrixWorld).applyMatrix4(Gt)),Array.isArray(Ie)){let ze=Se.groups;for(let Fe=0,ft=ze.length;Fe<ft;Fe++){let Ue=ze[Fe],pt=Ie[Ue.materialIndex];pt&&pt.visible&&N.push(A,Se,pt,J,Wt.z,Ue,z)}}else Ie.visible&&N.push(A,Se,Ie,J,Wt.z,null,z)}}}let be=A.children;for(let Ce=0,Se=be.length;Ce<Se;Ce++)nr(be[Ce],z,J,q)}function sl(A,z,J,q){let{opaque:Y,transmissive:be,transparent:Ce}=A;L.setupLightsView(J),qt===!0&&ae.setGlobalState(F.clippingPlanes,J),q&&Ee.viewport(he.copy(q)),Y.length>0&&ms(Y,z,J),be.length>0&&ms(be,z,J),Ce.length>0&&ms(Ce,z,J),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function Zs(A,z,J,q){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[q.id]===void 0){let Ue=Ct.has("EXT_color_buffer_half_float")||Ct.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[q.id]=new Ui(1,1,{generateMipmaps:!0,type:Ue?pr:si,minFilter:us,samples:Math.max(4,at.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:bt.workingColorSpace})}let be=L.state.transmissionRenderTarget[q.id],Ce=q.viewport||he;be.setSize(Ce.z*F.transmissionResolutionScale,Ce.w*F.transmissionResolutionScale);let Se=F.getRenderTarget(),Ie=F.getActiveCubeFace(),ze=F.getActiveMipmapLevel();F.setRenderTarget(be),F.getClearColor(re),Pe=F.getClearAlpha(),Pe<1&&F.setClearColor(16777215,.5),F.clear(),Bn&&U.render(J);let Fe=F.toneMapping;F.toneMapping=ri;let ft=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),L.setupLightsView(q),qt===!0&&ae.setGlobalState(F.clippingPlanes,q),ms(A,J,q),Ze.updateMultisampleRenderTarget(be),Ze.updateRenderTargetMipmap(be),Ct.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let pt=0,rn=z.length;pt<rn;pt++){let Bt=z[pt],{object:Dt,geometry:Sn,material:Oe,group:kt}=Bt;if(Oe.side===Mi&&Dt.layers.test(q.layers)){let Ye=Oe.side;Oe.side=hi,Oe.needsUpdate=!0,Uo(Dt,J,q,Sn,Oe,kt),Oe.side=Ye,Oe.needsUpdate=!0,Ue=!0}}Ue===!0&&(Ze.updateMultisampleRenderTarget(be),Ze.updateRenderTargetMipmap(be))}F.setRenderTarget(Se,Ie,ze),F.setClearColor(re,Pe),ft!==void 0&&(q.viewport=ft),F.toneMapping=Fe}function ms(A,z,J){let q=z.isScene===!0?z.overrideMaterial:null;for(let Y=0,be=A.length;Y<be;Y++){let Ce=A[Y],{object:Se,geometry:Ie,group:ze}=Ce,Fe=Ce.material;Fe.allowOverride===!0&&q!==null&&(Fe=q),Se.layers.test(J.layers)&&Uo(Se,z,J,Ie,Fe,ze)}}function Uo(A,z,J,q,Y,be){W!==null&&Y.isNodeMaterial&&W.setObject(A,Y),A.onBeforeRender(F,z,J,q,Y,be),A.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Y.onBeforeRender(F,z,J,q,A,be),Y.transparent===!0&&Y.side===Mi&&Y.forceSinglePass===!1?(Y.side=hi,Y.needsUpdate=!0,F.renderBufferDirect(J,z,q,Y,A,be),Y.side=Vs,Y.needsUpdate=!0,F.renderBufferDirect(J,z,q,Y,A,be),Y.side=Mi):F.renderBufferDirect(J,z,q,Y,A,be),A.onAfterRender(F,z,J,q,Y,be)}function ir(A){let z=0;for(let J of A)J.texture!==null&&z++;return z}function mi(A,z,J){z.isScene!==!0&&(z=hn);let q=Xe.get(A),Y=L.state.lights,be=L.state.shadowsArray,Ce=Y.state.version,Se=ue.getParameters(A,Y.state,be,z,J,L.state.lightProbeGridArray),Ie=ue.getProgramCacheKey(Se),ze=q.programs;q.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?z.environment:null,q.fog=z.fog;let Fe=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;q.envMap=I.get(A.envMap||q.environment,Fe),q.envMapRotation=q.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,ze===void 0&&(A.addEventListener("dispose",Pt),ze=new Map,q.programs=ze,q.programVariants=new Map);let ft=ze.get(Ie);if(ft!==void 0){if(q.currentProgram===ft&&q.lightsStateVersion===Ce)return gs(A,Se),ft}else Se.uniforms=ue.getUniforms(A),W!==null&&A.isNodeMaterial&&W.build(A,J,Se),A.onBeforeCompile(Se,F),ft=ue.acquireProgram(Se,Ie),ze.set(Ie,ft),q.uniforms=Se.uniforms;let Ue=q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ue.clippingPlanes=ae.uniform),gs(A,Se),q.needsLights=Lu(A),q.lightsStateVersion=Ce,q.needsLights&&(Ue.ambientLightColor.value=Y.state.ambient,Ue.lightProbe.value=Y.state.probe,Ue.sunLights.value=Y.state.sun,Ue.sunLightShadows.value=Y.state.sunShadow,Ue.directionalLights.value=Y.state.directional,Ue.directionalLightShadows.value=Y.state.directionalShadow,Ue.spotLights.value=Y.state.spot,Ue.spotLightShadows.value=Y.state.spotShadow,Ue.rectAreaLights.value=Y.state.rectArea,Ue.ltc_1.value=Y.state.rectAreaLTC1,Ue.ltc_2.value=Y.state.rectAreaLTC2,Ue.pointLights.value=Y.state.point,Ue.pointLightShadows.value=Y.state.pointShadow,Ue.hemisphereLights.value=Y.state.hemi,Ue.sunShadowMatrix.value=Y.state.sunShadowMatrix,Ue.sunShadowCascade.value=Y.state.sunShadowCascade,Ue.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ue.spotLightMatrix.value=Y.state.spotLightMatrix,Ue.spotLightMap.value=Y.state.spotLightMap,Ue.pointShadowMatrix.value=Y.state.pointShadowMatrix),q.numLightProbeGrids=ir(L.state.lightProbeGridArray),q.currentProgram=ft,q.uniformsList=null,ft}function Js(A,z,J,q,Y){let be=Xe.get(A),Ce=be.currentProgram.id+","+q+","+Y,Se=be.programVariants.get(Ce);return Se===void 0?(Se=mi(A,z,J),be.programVariants.set(Ce,Se)):(be.currentProgram=Se,be.uniformsList=null,be.outputColorSpace=q,be.toneMapping=Y),Se}function Oo(A){if(A.uniformsList===null){let z=A.currentProgram.getUniforms();A.uniformsList=Za.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function gs(A,z){let J=Xe.get(A);J.outputColorSpace=z.outputColorSpace,J.batching=z.batching,J.batchingColor=z.batchingColor,J.instancing=z.instancing,J.instancingColor=z.instancingColor,J.instancingMorph=z.instancingMorph,J.skinning=z.skinning,J.morphTargets=z.morphTargets,J.morphNormals=z.morphNormals,J.morphColors=z.morphColors,J.morphTargetsCount=z.morphTargetsCount,J.numClippingPlanes=z.numClippingPlanes,J.numIntersection=z.numClipIntersection,J.vertexAlphas=z.vertexAlphas,J.vertexTangents=z.vertexTangents,J.toneMapping=z.toneMapping}function Ks(A,z,J,q,Y){z.isScene!==!0&&(z=hn),Ze.resetTextureUnits();let be=z.fog,Ce=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?z.environment:null,Se=me===null?F.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:bt.workingColorSpace,Ie=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,ze=I.get(q.envMap||Ce,Ie),Fe=q.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,ft=!!J.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ue=!!J.morphAttributes.position,pt=!!J.morphAttributes.normal,rn=!!J.morphAttributes.color,Bt=ri;q.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(Bt=F.toneMapping);let Dt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Sn=Dt!==void 0?Dt.length:0,Oe=Xe.get(q),kt=L.state.lights;if(qt===!0&&(dn===!0||A!==ce)){let $t=A===ce&&q.id===ne;ae.setState(q,A,$t)}let Ye=!1,Bi=!1;q.version===Oe.__version?Oe.needsLights&&Oe.lightsStateVersion!==kt.state.version||Y.isBatchedMesh&&Oe.batching===!1||!Y.isBatchedMesh&&Oe.batching===!0||Y.isBatchedMesh&&Oe.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&Oe.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&Oe.instancing===!1||!Y.isInstancedMesh&&Oe.instancing===!0||Y.isSkinnedMesh&&Oe.skinning===!1||!Y.isSkinnedMesh&&Oe.skinning===!0||Y.isInstancedMesh&&Oe.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Oe.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Oe.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Oe.instancingMorph===!1&&Y.morphTexture!==null||Oe.envMap!==ze||q.fog===!0&&Oe.fog!==be||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==ae.numPlanes||Oe.numIntersection!==ae.numIntersection)||Oe.vertexAlphas!==Fe||Oe.vertexTangents!==ft||Oe.morphTargets!==Ue||Oe.morphNormals!==pt||Oe.morphColors!==rn||Oe.morphTargetsCount!==Sn||Oe.numLightProbeGrids!==ir(L.state.lightProbeGridArray)?Ye=!0:(Oe.outputColorSpace!==Se||Oe.toneMapping!==Bt)&&(Bi=!0):(Ye=!0,Oe.__version=q.version);let mn=Oe.currentProgram;(Ye===!0||Bi===!0)&&(mn=Bi===!0?Js(q,z,Y,Se,Bt):mi(q,z,Y),W&&q.isNodeMaterial&&W.onUpdateProgram(q,mn,Oe));let zr=!1,Hi=!1,Vn=!1,vt=mn.getUniforms(),yn=Oe.uniforms;if(Ee.useProgram(mn.program)&&(zr=!0,Hi=!0,Vn=!0),q.id!==ne&&(ne=q.id,Hi=!0),zr||ce!==A){Ee.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),vt.setValue(H,"projectionMatrix",A.projectionMatrix),vt.setValue(H,"viewMatrix",A.matrixWorldInverse);let bn=vt.map.cameraPosition;bn!==void 0&&bn.setValue(H,Jn.setFromMatrixPosition(A.matrixWorld)),at.logarithmicDepthBuffer&&vt.setValue(H,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&vt.setValue(H,"isOrthographic",A.isOrthographicCamera===!0),ce!==A&&(ce=A,Hi=!0,Vn=!0)}if(Oe.needsLights&&(kt.state.sunShadowMap.length>0&&vt.setValue(H,"sunShadowMap",kt.state.sunShadowMap,Ze),kt.state.directionalShadowMap.length>0&&vt.setValue(H,"directionalShadowMap",kt.state.directionalShadowMap,Ze),kt.state.spotShadowMap.length>0&&vt.setValue(H,"spotShadowMap",kt.state.spotShadowMap,Ze),kt.state.pointShadowMap.length>0&&vt.setValue(H,"pointShadowMap",kt.state.pointShadowMap,Ze)),Y.isSkinnedMesh){vt.setOptional(H,Y,"bindMatrix"),vt.setOptional(H,Y,"bindMatrixInverse");let $t=Y.skeleton;$t&&($t.boneTexture===null&&$t.computeBoneTexture(),vt.setValue(H,"boneTexture",$t.boneTexture,Ze))}Y.isBatchedMesh&&(vt.setOptional(H,Y,"batchingTexture"),vt.setValue(H,"batchingTexture",Y._matricesTexture,Ze),vt.setOptional(H,Y,"batchingIdTexture"),vt.setValue(H,"batchingIdTexture",Y._indirectTexture,Ze),vt.setOptional(H,Y,"batchingColorTexture"),Y._colorsTexture!==null&&vt.setValue(H,"batchingColorTexture",Y._colorsTexture,Ze));let li=J.morphAttributes;if((li.position!==void 0||li.normal!==void 0||li.color!==void 0)&&le.update(Y,J,mn),(Hi||Oe.receiveShadow!==Y.receiveShadow)&&(Oe.receiveShadow=Y.receiveShadow,vt.setValue(H,"receiveShadow",Y.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&z.environment!==null&&(yn.envMapIntensity.value=z.environmentIntensity),yn.dfgLUT!==void 0&&(yn.dfgLUT.value=UC()),Hi){if(vt.setValue(H,"toneMappingExposure",F.toneMappingExposure),Oe.needsLights&&Nu(yn,Vn),be&&q.fog===!0&&xe.refreshFogUniforms(yn,be),xe.refreshMaterialUniforms(yn,q,Ne,We,L.state.transmissionRenderTarget[A.id]),Oe.needsLights&&Oe.numLightProbeGrids>0){let $t=C,bn=0;for(let Vi of L.state.lightProbeGridArray)Vi.texture!==null&&($t.textures[bn]=Vi.texture,$t.min[bn]=Vi.boundingBox.min,$t.max[bn]=Vi.boundingBox.max,$t.resolution[bn]=Vi.resolution,bn++);for(let Vi in $t)$t[Vi].length=bn;yn.probesSH.value=$t.textures,yn.probesMin.value=$t.min,yn.probesMax.value=$t.max,yn.probesResolution.value=$t.resolution}Za.upload(H,Oo(Oe),yn,Ze)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Za.upload(H,Oo(Oe),yn,Ze),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&vt.setValue(H,"center",Y.center),vt.setValue(H,"modelViewMatrix",Y.modelViewMatrix),vt.setValue(H,"normalMatrix",Y.normalMatrix),vt.setValue(H,"modelMatrix",Y.matrixWorld),q.uniformsGroups!==void 0){let $t=q.uniformsGroups;for(let bn=0,Vi=$t.length;bn<Vi;bn++){let al=$t[bn];He.update(al,mn),He.bind(al,mn)}}return mn}function Nu(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.sunLights.needsUpdate=z,A.sunLightShadows.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function Lu(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return se},this.getActiveMipmapLevel=function(){return ee},this.getRenderTarget=function(){return me},this.setRenderTargetTextures=function(A,z,J){let q=Xe.get(A);q.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Xe.get(A.texture).__webglTexture=z,Xe.get(A.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:J,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,z){let J=Xe.get(A);J.__webglFramebuffer=z,J.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(A,z=0,J=0){me=A,se=z,ee=J;let q=null,Y=!1,be=!1;if(A){let Se=Xe.get(A);if(Se.__useDefaultFramebuffer!==void 0){Ee.bindFramebuffer(H.FRAMEBUFFER,Se.__webglFramebuffer),he.copy(A.viewport),Be.copy(A.scissor),Ve=A.scissorTest,Ee.viewport(he),Ee.scissor(Be),Ee.setScissorTest(Ve),ne=-1;return}else if(Se.__webglFramebuffer===void 0)Ze.setupRenderTarget(A);else if(Se.__hasExternalTextures)Ze.rebindTextures(A,Xe.get(A.texture).__webglTexture,Xe.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Fe=A.depthTexture;if(Se.__boundDepthTexture!==Fe){if(Fe!==null&&Xe.has(Fe)&&(A.width!==Fe.image.width||A.height!==Fe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ze.setupDepthRenderbuffer(A)}}let Ie=A.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(be=!0);let ze=Xe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ze[z])?q=ze[z][J]:q=ze[z],Y=!0):A.samples>0&&Ze.useMultisampledRTT(A)===!1?q=Xe.get(A).__webglMultisampledFramebuffer:Array.isArray(ze)?q=ze[J]:q=ze,he.copy(A.viewport),Be.copy(A.scissor),Ve=A.scissorTest}else he.copy($e).multiplyScalar(Ne).floor(),Be.copy(Tt).multiplyScalar(Ne).floor(),Ve=_t;if(J!==0&&(q=j),Ee.bindFramebuffer(H.FRAMEBUFFER,q)&&Ee.drawBuffers(A,q),Ee.viewport(he),Ee.scissor(Be),Ee.setScissorTest(Ve),Y){let Se=Xe.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+z,Se.__webglTexture,J)}else if(be){let Se=z;for(let Ie=0;Ie<A.textures.length;Ie++){let ze=Xe.get(A.textures[Ie]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Ie,ze.__webglTexture,J,Se)}}else if(A!==null&&J!==0){let Se=Xe.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Se.__webglTexture,J)}ne=-1};function ol(A){let z=Xe.get(A);return(z.__readFormat!==A.format||z.__readType!==A.type)&&(z.__readFormat=A.format,z.__readType=A.type,z.__formatReadable=at.textureFormatReadable(A.format),z.__typeReadable=at.textureTypeReadable(A.type)),z}this.readRenderTargetPixels=function(A,z,J,q,Y,be,Ce,Se=0){if(!(A&&A.isWebGLRenderTarget)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=Xe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ie=Ie[Ce],Array.isArray(Ie)&&(Ie=Ie[0])),Ie){Ee.bindFramebuffer(H.FRAMEBUFFER,Ie);try{let ze=A.textures[Se],Fe=ze.format,ft=ze.type;A.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Se);let Ue=ol(ze);if(Ue.__formatReadable===!1){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ue.__typeReadable===!1){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-q&&J>=0&&J<=A.height-Y&&H.readPixels(z,J,q,Y,ye.convert(Fe),ye.convert(ft),be)}finally{let ze=me!==null?Xe.get(me).__webglFramebuffer:null;Ee.bindFramebuffer(H.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(A,z,J,q,Y,be,Ce,Se=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=Xe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ie=Ie[Ce],Array.isArray(Ie)&&(Ie=Ie[0])),Ie)if(z>=0&&z<=A.width-q&&J>=0&&J<=A.height-Y){Ee.bindFramebuffer(H.FRAMEBUFFER,Ie);let ze=A.textures[Se],Fe=ze.format,ft=ze.type;A.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Se);let Ue=ol(ze);if(Ue.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ue.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let pt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,pt),H.bufferData(H.PIXEL_PACK_BUFFER,be.byteLength,H.STREAM_READ),H.readPixels(z,J,q,Y,ye.convert(Fe),ye.convert(ft),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let rn=me!==null?Xe.get(me).__webglFramebuffer:null;Ee.bindFramebuffer(H.FRAMEBUFFER,rn);let Bt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await i_(H,Bt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,pt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,be),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(pt),H.deleteSync(Bt),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,z=null,J=0){let q=Math.pow(2,-J),Y=Math.floor(A.image.width*q),be=Math.floor(A.image.height*q),Ce=z!==null?z.x:0,Se=z!==null?z.y:0;Ze.setTexture2D(A,0),H.copyTexSubImage2D(H.TEXTURE_2D,J,0,0,Ce,Se,Y,be),Ee.unbindTexture()},this.copyTextureToTexture=function(A,z,J=null,q=null,Y=0,be=0){let Ce,Se,Ie,ze,Fe,ft,Ue,pt,rn,Bt=A.isCompressedTexture?A.mipmaps[be]:A.image;if(J!==null)Ce=J.max.x-J.min.x,Se=J.max.y-J.min.y,Ie=J.isBox3?J.max.z-J.min.z:1,ze=J.min.x,Fe=J.min.y,ft=J.isBox3?J.min.z:0;else{let vt=Math.pow(2,-Y);Ce=Math.floor(Bt.width*vt),Se=Math.floor(Bt.height*vt),A.isDataArrayTexture?Ie=Bt.depth:A.isData3DTexture?Ie=Math.floor(Bt.depth*vt):Ie=1,ze=0,Fe=0,ft=0}q!==null?(Ue=q.x,pt=q.y,rn=q.z):(Ue=0,pt=0,rn=0);let Dt=ye.convert(z.format),Sn=ye.convert(z.type),Oe;z.isData3DTexture?(Ze.setTexture3D(z,0),Oe=H.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(Ze.setTexture2DArray(z,0),Oe=H.TEXTURE_2D_ARRAY):(Ze.setTexture2D(z,0),Oe=H.TEXTURE_2D),Ee.activeTexture(H.TEXTURE0),Ee.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,z.flipY),Ee.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),Ee.pixelStorei(H.UNPACK_ALIGNMENT,z.unpackAlignment);let kt=Ee.getParameter(H.UNPACK_ROW_LENGTH),Ye=Ee.getParameter(H.UNPACK_IMAGE_HEIGHT),Bi=Ee.getParameter(H.UNPACK_SKIP_PIXELS),mn=Ee.getParameter(H.UNPACK_SKIP_ROWS),zr=Ee.getParameter(H.UNPACK_SKIP_IMAGES);Ee.pixelStorei(H.UNPACK_ROW_LENGTH,Bt.width),Ee.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Bt.height),Ee.pixelStorei(H.UNPACK_SKIP_PIXELS,ze),Ee.pixelStorei(H.UNPACK_SKIP_ROWS,Fe),Ee.pixelStorei(H.UNPACK_SKIP_IMAGES,ft);let Hi=A.isDataArrayTexture||A.isData3DTexture,Vn=z.isDataArrayTexture||z.isData3DTexture;if(A.isDepthTexture){let vt=Xe.get(A),yn=Xe.get(z),li=Xe.get(vt.__renderTarget),$t=Xe.get(yn.__renderTarget);Ee.bindFramebuffer(H.READ_FRAMEBUFFER,li.__webglFramebuffer),Ee.bindFramebuffer(H.DRAW_FRAMEBUFFER,$t.__webglFramebuffer);for(let bn=0;bn<Ie;bn++)Hi&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Xe.get(A).__webglTexture,Y,ft+bn),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Xe.get(z).__webglTexture,be,rn+bn)),H.blitFramebuffer(ze,Fe,ze+Ce,Fe+Se,Ue,pt,Ue+Ce,pt+Se,H.DEPTH_BUFFER_BIT,H.NEAREST);Ee.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Y!==0||A.isRenderTargetTexture||Xe.has(A)){let vt=Xe.get(A),yn=Xe.get(z);Ee.bindFramebuffer(H.READ_FRAMEBUFFER,O),Ee.bindFramebuffer(H.DRAW_FRAMEBUFFER,K);for(let li=0;li<Ie;li++)Hi?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,vt.__webglTexture,Y,ft+li):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,vt.__webglTexture,Y),Vn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,yn.__webglTexture,be,rn+li):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,yn.__webglTexture,be),Y!==0?H.blitFramebuffer(ze,Fe,ze+Ce,Fe+Se,Ue,pt,Ue+Ce,pt+Se,H.COLOR_BUFFER_BIT,H.NEAREST):Vn?H.copyTexSubImage3D(Oe,be,Ue,pt,rn+li,ze,Fe,Ce,Se):H.copyTexSubImage2D(Oe,be,Ue,pt,ze,Fe,Ce,Se);Ee.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Vn?A.isDataTexture||A.isData3DTexture?H.texSubImage3D(Oe,be,Ue,pt,rn,Ce,Se,Ie,Dt,Sn,Bt.data):z.isCompressedArrayTexture?H.compressedTexSubImage3D(Oe,be,Ue,pt,rn,Ce,Se,Ie,Dt,Bt.data):H.texSubImage3D(Oe,be,Ue,pt,rn,Ce,Se,Ie,Dt,Sn,Bt):A.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,be,Ue,pt,Ce,Se,Dt,Sn,Bt.data):A.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,be,Ue,pt,Bt.width,Bt.height,Dt,Bt.data):H.texSubImage2D(H.TEXTURE_2D,be,Ue,pt,Ce,Se,Dt,Sn,Bt);Ee.pixelStorei(H.UNPACK_ROW_LENGTH,kt),Ee.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ye),Ee.pixelStorei(H.UNPACK_SKIP_PIXELS,Bi),Ee.pixelStorei(H.UNPACK_SKIP_ROWS,mn),Ee.pixelStorei(H.UNPACK_SKIP_IMAGES,zr),be===0&&z.generateMipmaps===!0&&z.mipmapsAutoUpdate===!0&&H.generateMipmap(Oe),Ee.unbindTexture()},this.initRenderTarget=function(A){Xe.get(A).__webglFramebuffer===void 0&&Ze.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Ze.setTextureCube(A,0):A.isData3DTexture?Ze.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Ze.setTexture2DArray(A,0):Ze.setTexture2D(A,0),Ee.unbindTexture()},this.resetState=function(){se=0,ee=0,me=null,Ee.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=bt._getDrawingBufferColorSpace(e),t.unpackColorSpace=bt._getUnpackColorSpace()}};var Xd=ci(Lo());var iS=ci(Yr(),1),rS=ci(Q_(),1);var eS=r=>{let e,t=new Set,s=(m,v)=>{let _=typeof m=="function"?m(e):m;if(!Object.is(_,e)){let b=e;e=v??(typeof _!="object"||_===null)?_:Object.assign({},e,_),t.forEach(g=>g(e,b))}},o=()=>e,f={setState:s,getState:o,getInitialState:()=>h,subscribe:m=>(t.add(m),()=>t.delete(m))},h=e=r(s,o,f);return f},tS=(r=>r?eS(r):eS);var{useSyncExternalStoreWithSelector:r2}=rS.default,s2=r=>r;function o2(r,e=s2,t){let s=r2(r.subscribe,r.getState,r.getInitialState,e,t);return iS.default.useDebugValue(s),s}var nS=(r,e)=>{let t=tS(r),s=(o,l=e)=>o2(t,o,l);return Object.assign(s,t),s},sS=((r,e)=>r?nS(r,e):nS);var a2=r=>typeof r=="object"&&typeof r.then=="function",Do=[];function oS(r,e,t=(s,o)=>s===o){if(r===e)return!0;if(!r||!e)return!1;let s=r.length;if(e.length!==s)return!1;for(let o=0;o<s;o++)if(!t(r[o],e[o]))return!1;return!0}function aS(r,e=null,t=!1,s={}){e===null&&(e=[r]);for(let l of Do)if(oS(e,l.keys,l.equal)){if(t)return;if(Object.prototype.hasOwnProperty.call(l,"error"))throw l.error;if(Object.prototype.hasOwnProperty.call(l,"response"))return s.lifespan&&s.lifespan>0&&(l.timeout&&clearTimeout(l.timeout),l.timeout=setTimeout(l.remove,s.lifespan)),l.response;if(!t)throw l.promise}let o={keys:e,equal:s.equal,remove:()=>{let l=Do.indexOf(o);l!==-1&&Do.splice(l,1)},promise:(a2(r)?r:r(...e)).then(l=>{o.response=l,s.lifespan&&s.lifespan>0&&(o.timeout=setTimeout(o.remove,s.lifespan))}).catch(l=>o.error=l)};if(Do.push(o),!t)throw o.promise}var lS=(r,e,t)=>aS(r,e,!1,t),uS=(r,e,t)=>{aS(r,e,!0,t)};var cS=r=>{if(r===void 0||r.length===0)Do.splice(0,Do.length);else{let e=Do.find(t=>oS(r,t.keys,t.equal));e&&e.remove()}};var Zn=ci(bg());var Ng=((r,e)=>typeof window<"u"&&(((r=window.document)==null?void 0:r.createElement)||((e=window.navigator)==null?void 0:e.product)==="ReactNative"))()?nn.useLayoutEffect:nn.useEffect;function u2(r){let e=nn.useRef(r);return Ng(()=>{e.current=r},[r]),e}function Lg(r){let e=r.root;for(;e.getState().previousRoot;)e=e.getState().previousRoot;return e}var kS=r=>r&&r.isOrthographicCamera;var c2=r=>r!=null&&(typeof r=="string"||typeof r=="number"||r.isColor),xS=()=>{};function Dg(r){var e;let t=typeof window<"u"?(e=window.devicePixelRatio)!=null?e:2:1;return Array.isArray(r)?Math.min(Math.max(r[0],t),r[1]):r}function f2(r){if(typeof window>"u"||typeof window.matchMedia!="function"||!window.devicePixelRatio)return()=>{};let e,t=()=>{try{var l,c;e=window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),typeof((l=e)==null?void 0:l.addEventListener)=="function"?e.addEventListener("change",o):(c=e)==null||c.addListener==null||c.addListener(o)}catch{e=void 0}},s=()=>{var l,c;typeof((l=e)==null?void 0:l.removeEventListener)=="function"?e.removeEventListener("change",o):(c=e)==null||c.removeListener==null||c.removeListener(o),e=void 0},o=()=>{s(),t(),r()};return t(),s}var _n={obj:r=>r===Object(r)&&!_n.arr(r)&&typeof r!="function",fun:r=>typeof r=="function",str:r=>typeof r=="string",num:r=>typeof r=="number",boo:r=>typeof r=="boolean",und:r=>r===void 0,nul:r=>r===null,arr:r=>Array.isArray(r),equ(r,e,{arrays:t="shallow",objects:s="reference",strict:o=!0}={}){if(typeof r!=typeof e||!!r!=!!e)return!1;if(_n.str(r)||_n.num(r)||_n.boo(r))return r===e;let l=_n.obj(r);if(l&&s==="reference")return r===e;let c=_n.arr(r);if(c&&t==="reference")return r===e;if((c||l)&&r===e)return!0;let f;for(f in r)if(!(f in e))return!1;if(l&&t==="shallow"&&s==="shallow"){for(f in o?e:r)if(!_n.equ(r[f],e[f],{strict:o,objects:"reference"}))return!1}else for(f in o?e:r)if(r[f]!==e[f])return!1;if(_n.und(f)){if(c&&r.length===0&&e.length===0||l&&Object.keys(r).length===0&&Object.keys(e).length===0)return!0;if(r!==e)return!1}return!0}};function FS(r){let e={nodes:{},materials:{},meshes:{}};return r&&r.traverse(t=>{t.name&&(e.nodes[t.name]=t),t.material&&!e.materials[t.material.name]&&(e.materials[t.material.name]=t.material),t.isMesh&&!e.meshes[t.name]&&(e.meshes[t.name]=t)}),e}function US(r){r.type!=="Scene"&&(r.dispose==null||r.dispose());for(let e in r){let t=r[e];t?.type!=="Scene"&&(t==null||t.dispose==null||t.dispose())}}var OS=["children","key","ref"];function Eg(r){let e={};for(let t in r)OS.includes(t)||(e[t]=r[t]);return e}function zd(r,e,t,s){let o=r,l=o?.__r3f;return l||(l={root:e,type:t,parent:null,children:[],props:Eg(s),object:o,eventCount:0,handlers:{},previousVisible:void 0,isHidden:!1},o&&(o.__r3f=l)),l}function Mu(r,e){if(!e.includes("-"))return{root:r,key:e,target:r[e]};if(e in r)return{root:r,key:e,target:r[e]};let t=r,s=e.split("-");for(let o of s){if(typeof t!="object"||t===null){if(t!==void 0){let l=s.slice(s.indexOf(o)).join("-");return{root:t,key:l,target:void 0}}return{root:r,key:e,target:void 0}}e=o,r=t,t=t[e]}return{root:r,key:e,target:t}}var MS=/-\d+$/;function Bd(r,e){if(_n.str(e.props.attach)){if(MS.test(e.props.attach)){let o=e.props.attach.replace(MS,""),{root:l,key:c}=Mu(r.object,o);Array.isArray(l[c])||(l[c]=[])}let{root:t,key:s}=Mu(r.object,e.props.attach);e.previousAttach=t[s],t[s]=e.object}else _n.fun(e.props.attach)&&(e.previousAttach=e.props.attach(r.object,e.object))}function Hd(r,e){if(_n.str(e.props.attach)){let{root:t,key:s}=Mu(r.object,e.props.attach),o=e.previousAttach;o===void 0?delete t[s]:t[s]=o}else e.previousAttach==null||e.previousAttach(r.object,e.object);delete e.previousAttach}var Ag=[...OS,"args","dispose","attach","object","onUpdate","dispose"],wS=new Map;function d2(r){let e=wS.get(r.constructor);try{e||(e=new r.constructor,wS.set(r.constructor,e))}catch{}return e}function h2(r,e){let t={};for(let s in e)if(!Ag.includes(s)&&!_n.equ(e[s],r.props[s])){t[s]=e[s];for(let o in e)o.startsWith(`${s}-`)&&(t[o]=e[o])}for(let s in r.props){if(Ag.includes(s)||e.hasOwnProperty(s))continue;let{root:o,key:l}=Mu(r.object,s);if(o.constructor&&o.constructor.length===0){let c=d2(o);_n.und(c)||(t[s]=c[l])}else t[s]=0}return t}var p2=["map","emissiveMap","sheenColorMap","specularColorMap","envMap"],m2=/^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/;function Xs(r,e){var t;let s=r.__r3f,o=s&&Lg(s).getState(),l=s?.eventCount;for(let f in e){let h=e[f];if(Ag.includes(f))continue;if(s&&m2.test(f)){typeof h=="function"?s.handlers[f]=h:delete s.handlers[f],s.eventCount=Object.keys(s.handlers).length;continue}if(h===void 0)continue;if(f==="visible"&&s!=null&&s.isHidden&&s.previousVisible!==void 0){s.previousVisible=h;continue}let{root:m,key:v,target:_}=Mu(r,f);if(_===void 0&&(typeof m!="object"||m===null))throw Error(`R3F: Cannot set "${f}". Ensure it is an object before setting "${v}".`);if(_ instanceof rs&&h instanceof rs)_.mask=h.mask;else if(_ instanceof je&&c2(h))_.set(h);else if(_!==null&&typeof _=="object"&&typeof _.set=="function"&&typeof _.copy=="function"&&h!=null&&h.constructor&&_.constructor===h.constructor)_.copy(h);else if(_!==null&&typeof _=="object"&&typeof _.set=="function"&&Array.isArray(h))typeof _.fromArray=="function"?_.fromArray(h):_.set(...h);else if(_!==null&&typeof _=="object"&&typeof _.set=="function"&&typeof h=="number")typeof _.setScalar=="function"?_.setScalar(h):_.set(h);else if(m instanceof Ji&&v==="uniforms"&&_n.obj(h)){_n.obj(m.uniforms)||(m.uniforms={});let b=m.uniforms,g=h;for(let x in g){let R=g[x],S=b[x];S?Object.assign(S,R):b[x]={...R}}}else{var c;m[v]=h,o&&!o.linear&&p2.includes(v)&&(c=m[v])!=null&&c.isTexture&&m[v].format===zi&&m[v].type===si&&(m[v].colorSpace=An)}}if(s!=null&&s.parent&&o!=null&&o.internal&&(t=s.object)!=null&&t.isObject3D&&l!==s.eventCount){let f=s.object,h=o.internal.interaction.indexOf(f);h>-1&&o.internal.interaction.splice(h,1),s.eventCount&&f.raycast!==null&&o.internal.interaction.push(f)}return s&&s.props.attach===void 0&&(s.object.isBufferGeometry?s.props.attach="geometry":s.object.isMaterial&&(s.props.attach="material")),s&&Tu(s),r}function Tu(r){var e;if(!r.parent)return;r.props.onUpdate==null||r.props.onUpdate(r.object);let t=(e=r.root)==null||e.getState==null?void 0:e.getState();t&&t.internal.frames===0&&t.invalidate()}function g2(r,e){r.manual||(kS(r)?(r.left=e.width/-2,r.right=e.width/2,r.top=e.height/2,r.bottom=e.height/-2):r.aspect=e.width/e.height,r.updateProjectionMatrix())}var pi=r=>r?.isObject3D;function v2(r){return(r.eventObject||r.object).uuid+"/"+r.index+r.instanceId}function y2(r,e,t,s){let o=t.get(e);o&&(t.delete(e),t.size===0&&(r.delete(s),o.target.releasePointerCapture(s)))}function b2(r,e,t){let{internal:s}=r.getState();for(let o=0;o<s.interaction.length;o++)s.interaction[o]===e&&(s.interaction[o]=t);for(let o=0;o<s.initialHits.length;o++)s.initialHits[o]===e&&(s.initialHits[o]=t);s.hovered.forEach((o,l)=>{if(o.eventObject===e||o.object===e){s.hovered.delete(l);let c={...o,eventObject:o.eventObject===e?t:o.eventObject,object:o.object===e?t:o.object};s.hovered.set(v2(c),c)}}),s.capturedMap.forEach(o=>{for(let[l,c]of Array.from(o)){let{intersection:f}=c;l!==e&&f.object!==e&&f.eventObject!==e||(l===e&&o.delete(l),o.set(l===e?t:l,{...c,intersection:{...f,object:f.object===e?t:f.object,eventObject:f.eventObject===e?t:f.eventObject}}))}})}function _2(r,e){let{internal:t}=r.getState();t.interaction=t.interaction.filter(s=>s!==e),t.initialHits=t.initialHits.filter(s=>s!==e),t.hovered.forEach((s,o)=>{(s.eventObject===e||s.object===e)&&t.hovered.delete(o)}),t.capturedMap.forEach((s,o)=>{y2(t.capturedMap,e,s,o)})}var kg=r=>typeof r?.then=="function",S2=r=>Object.assign(Promise.resolve(r),{status:"fulfilled",value:r}),x2=r=>{let e=Promise.reject(r);return e.catch(()=>{}),Object.assign(e,{status:"rejected",reason:r})},M2=()=>{let r,e,t=new Promise((s,o)=>{r=l=>{Object.assign(t,{status:"fulfilled",value:l}),s(l)},e=l=>{Object.assign(t,{status:"rejected",reason:l}),o(l)}});return t.status="pending",t.catch(()=>{}),{promise:t,resolve:r,reject:e}},Fg=r=>!!(r!=null&&r.render);function w2(r,e){let t={canvas:r,powerPreference:"high-performance",antialias:!0,alpha:!0};return typeof e=="function"?e(t):Fg(e)?e:new Cd({...t,...e})}function T2(r){if((r.hasInitialized==null?void 0:r.hasInitialized())===!1)return;let e=xu(()=>{var t;return r.dispose?r.dispose():(t=r.renderLists)==null||t.dispose==null?void 0:t.dispose()});if(kg(e))return Promise.resolve(e).catch(t=>console.warn("[R3F] Error disposing renderer",t)).then(()=>xu(()=>r.forceContextLoss==null?void 0:r.forceContextLoss()));xu(()=>r.forceContextLoss==null?void 0:r.forceContextLoss())}function E2(r,e){if(r){if(e)return T2(r);xu(()=>{var t;return(t=r.renderLists)==null||t.dispose==null?void 0:t.dispose()}),xu(()=>r.forceContextLoss==null?void 0:r.forceContextLoss())}}function xu(r){try{return r()}catch(e){console.warn("[R3F] Error while unmounting root; teardown may be incomplete:",e)}}var Ug=nn.createContext(null),A2=(r,e)=>{let t=sS((f,h)=>{let m=new V,v=new V,_=new V;function b(y=h().camera,E=v,D=h().size){let{width:C,height:N,top:L,left:M}=D,P=C/N;E.isVector3?_.copy(E):_.set(...E);let G=y.getWorldPosition(m).distanceTo(_);if(kS(y))return{width:C/y.zoom,height:N/y.zoom,top:L,left:M,factor:1,distance:G,aspect:P};{let F=y.fov*Math.PI/180,B=2*Math.tan(F/2)*G,W=B*(C/N);return{width:W,height:B,top:L,left:M,factor:C/W,distance:G,aspect:P}}}let g,x=y=>f(E=>({performance:{...E.performance,current:y}})),R=new ut;return{set:f,get:h,gl:null,camera:null,raycaster:null,events:{priority:1,enabled:!0,connected:!1},scene:null,xr:null,invalidate:(y=1)=>r(h(),y),advance:(y,E)=>e(y,E,h()),legacy:!1,linear:!1,flat:!1,controls:null,clock:new su,pointer:R,mouse:R,frameloop:"always",onPointerMissed:void 0,performance:{current:1,min:.5,max:1,debounce:200,regress:()=>{let y=h();g&&clearTimeout(g),y.performance.current!==y.performance.min&&x(y.performance.min),g=setTimeout(()=>x(h().performance.max),y.performance.debounce)}},size:{width:0,height:0,top:0,left:0},viewport:{initialDpr:0,dpr:0,width:0,height:0,top:0,left:0,aspect:0,distance:0,factor:0,getCurrentViewport:b},setEvents:y=>f(E=>({...E,events:{...E.events,...y}})),setSize:(y,E,D=0,C=0)=>{let N=h().camera,L={width:y,height:E,top:D,left:C};f(M=>({size:L,viewport:{...M.viewport,...b(N,v,L)}}))},setDpr:y=>f(E=>{let D=Dg(y);return{viewport:{...E.viewport,dpr:D,initialDpr:E.viewport.initialDpr||D}}}),setFrameloop:(y="always")=>{let E=h().clock;E.stop(),E.elapsedTime=0,y!=="never"&&(E.start(),E.elapsedTime=0),f(()=>({frameloop:y}))},previousRoot:void 0,internal:{interaction:[],hovered:new Map,subscribers:[],initialClick:[0,0],initialHits:[],capturedMap:new Map,lastEvent:nn.createRef(),active:!1,frames:0,priority:0,subscribe:(y,E,D)=>{let C=h().internal;return C.priority=C.priority+(E>0?1:0),C.subscribers.push({ref:y,priority:E,store:D}),C.subscribers=C.subscribers.sort((N,L)=>N.priority-L.priority),()=>{let N=h().internal;N!=null&&N.subscribers&&(N.priority=N.priority-(E>0?1:0),N.subscribers=N.subscribers.filter(L=>L.ref!==y))}}}}}),s=t.getState(),o=s.size,l=s.viewport.dpr,c=s.camera;return t.subscribe(()=>{let{camera:f,size:h,viewport:m,gl:v,set:_}=t.getState();if(h.width!==o.width||h.height!==o.height||m.dpr!==l){o=h,l=m.dpr,g2(f,h),m.dpr>0&&v.setPixelRatio(m.dpr);let b=typeof HTMLCanvasElement<"u"&&v.domElement instanceof HTMLCanvasElement;v.setSize(h.width,h.height,b)}f!==c&&(c=f,_(b=>({viewport:{...b.viewport,...b.viewport.getCurrentViewport(f)}})))}),t.subscribe(f=>r(f)),t};function Og(){let r=nn.useContext(Ug);if(!r)throw new Error("R3F: Hooks can only be used within the Canvas component!");return r}function zn(r=t=>t,e){return Og()(r,e)}function mr(r,e=0){let t=Og(),s=t.getState().internal.subscribe,o=u2(r);return Ng(()=>s(o,e,t),[e,s,t]),null}var TS=new WeakMap,R2=r=>{var e;return typeof r=="function"&&(r==null||(e=r.prototype)==null?void 0:e.constructor)===r};function zS(r,e){return function(t,...s){let o;return R2(t)?(o=TS.get(t),o||(o=new t,TS.set(t,o))):o=t,r&&r(o),Promise.all(s.map(l=>new Promise((c,f)=>o.load(l,h=>{pi(h?.scene)&&Object.assign(h,FS(h.scene)),c(h)},e,h=>f(new Error(`Could not load ${l}: ${h?.message}`))))))}}function zg(r,e,t,s){let o=Array.isArray(e)?e:[e],l=lS(zS(t,s),[r,...o],{equal:_n.equ});return Array.isArray(e)?l:l[0]}zg.preload=function(r,e,t){let s=Array.isArray(e)?e:[e];return uS(zS(t),[r,...s])};zg.clear=function(r,e){let t=Array.isArray(e)?e:[e];return cS([r,...t])};var C2=1,ES=8,Od=32,AS=2,P2=268435456,I2={objects:"shallow"};function N2(r,e){if(!e&&typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement&&r.parentElement){let{width:t,height:s,top:o,left:l}=r.parentElement.getBoundingClientRect();return{width:t,height:s,top:o,left:l}}else if(!e&&typeof OffscreenCanvas<"u"&&r instanceof OffscreenCanvas)return{width:r.width,height:r.height,top:0,left:0};return{width:0,height:0,top:0,left:0,...e}}function L2({store:r,configuration:e},t,s){let{gl:o,scene:l,camera:c,shadows:f=!1,linear:h=!1,flat:m=!1,legacy:v=!1,frameloop:_="always",dpr:b=[1,2],performance:g,onPointerMissed:x}=s,R=N2(t,s.size),S={...s,shadows:f,linear:h,flat:m,legacy:v,frameloop:_,size:R},y=r.getState(),E=y.gl,D=e.previous,C=F=>!D||!_n.equ(S[F],D[F],I2);e.previous=void 0;let N=y.raycaster;if(N||y.set({raycaster:N=new Eo}),C("raycaster")){var L;let{params:F,...B}=(L=s.raycaster)!=null?L:{};Xs(N,{...B,params:{...N.params,...F}})}if(!y.camera||y.camera===e.camera&&C("camera")){e.camera=c;let F=c?.isCamera,B=F?c:s.orthographic?new Mo(0,0,0,0,.1,1e3):new fi(75,0,.1,1e3);F||(B.position.z=5,c&&(Xs(B,c),B.manual||("aspect"in c||"left"in c||"right"in c||"bottom"in c||"top"in c)&&(B.manual=!0,B.updateProjectionMatrix())),!y.camera&&!(c!=null&&c.rotation)&&B.lookAt(0,0,0)),y.set({camera:B}),N.camera=B}if(!y.scene){let F;l!=null&&l.isScene?(F=l,zd(F,r,"",{})):(F=new _o,zd(F,r,"",{}),l&&Xs(F,l)),y.set({scene:F})}if(s.events&&!y.events.handlers&&y.set({events:s.events(r)}),C("size")&&y.setSize(R.width,R.height,R.top,R.left),y.viewport.dpr!==Dg(b)&&y.setDpr(b),C("frameloop")&&y.setFrameloop(_),C("onPointerMissed")&&y.set({onPointerMissed:x}),g&&C("performance")&&y.set(F=>({performance:{...F.performance,...g}})),!y.xr){var M;let F=(j,O)=>{let K=r.getState();K.frameloop!=="never"&&Vg(j,!0,K,O)},B=()=>{let j=r.getState();j.gl.xr.enabled=j.gl.xr.isPresenting,j.gl.xr.setAnimationLoop(j.gl.xr.isPresenting?F:null),j.gl.xr.isPresenting||Lt(j)},W={connect(){let j=r.getState().gl;j.xr.addEventListener("sessionstart",B),j.xr.addEventListener("sessionend",B)},disconnect(){let j=r.getState().gl;j.xr.removeEventListener("sessionstart",B),j.xr.removeEventListener("sessionend",B)}};typeof((M=E.xr)==null?void 0:M.addEventListener)=="function"&&W.connect(),y.set({xr:W})}if(E.shadowMap&&C("shadows")){let F=E.shadowMap.enabled,B=E.shadowMap.type;if(E.shadowMap.enabled=!!f,_n.boo(f))E.shadowMap.type=Xa;else if(_n.str(f)){var P;let W={basic:gm,percentage:Ao,soft:Xa,variance:Hs};E.shadowMap.type=(P=W[f])!=null?P:Xa}else _n.obj(f)&&Object.assign(E.shadowMap,f);(F!==E.shadowMap.enabled||B!==E.shadowMap.type)&&(E.shadowMap.needsUpdate=!0)}let G=o&&!_n.fun(o)&&!Fg(o)?o:void 0;C("legacy")&&(bt.enabled=!v,y.set({legacy:v})),C("linear")&&(G?.outputColorSpace===void 0&&(E.outputColorSpace=h?bo:An),y.set({linear:h})),C("flat")&&(G?.toneMapping===void 0&&(E.toneMapping=m?ri:ou),y.set({flat:m})),G&&C("gl")&&Xs(E,G),e.previous=S}function D2(r){let e=()=>{var o;return(o=r.store.getState().gl)==null?void 0:o.xr},t=()=>{var o,l,c,f;let h=r.store.getState();if((o=e())!=null&&o.isPresenting||(l=e())!=null&&l.getSession!=null&&l.getSession()){e().addEventListener("sessionend",t);return}(c=e())==null||c.removeEventListener==null||c.removeEventListener("sessionend",t);let m=r.configuration.previous;if(!m)return;let v=(f=m.dpr)!=null?f:[1,2];h.viewport.dpr!==Dg(v)&&h.setDpr(v)},s=f2(t);return()=>{var o;s(),(o=e())==null||o.removeEventListener==null||o.removeEventListener("sessionend",t)}}var k2={name:"@react-three/fiber",version:"9.8.2",description:"A React renderer for Threejs",keywords:["react","renderer","fiber","three","threejs"],author:"Paul Henschel (https://github.com/drcmda)",license:"MIT",maintainers:["Josh Ellis (https://github.com/joshuaellis)","Cody Bennett (https://github.com/codyjasonbennett)","Kris Baumgarter (https://github.com/krispya)"],bugs:{url:"https://github.com/pmndrs/react-three-fiber/issues"},homepage:"https://github.com/pmndrs/react-three-fiber#readme",repository:{type:"git",url:"git+https://github.com/pmndrs/react-three-fiber.git"},collective:{type:"opencollective",url:"https://opencollective.com/react-three-fiber"},main:"dist/react-three-fiber.cjs.js",module:"dist/react-three-fiber.esm.js",types:"dist/react-three-fiber.cjs.d.ts","react-native":"native/dist/react-three-fiber-native.cjs.js",files:["dist","native","react-reconciler","CHANGELOG.md"],sideEffects:!1,preconstruct:{entrypoints:["index.tsx","native.tsx"]},scripts:{prebuild:"cp ../../readme.md readme.md"},devDependencies:{"@types/react-reconciler":"^0.33.0","react-reconciler":"^0.34.0"},dependencies:{"@babel/runtime":"^7.17.8","@types/webxr":"*","base64-js":"^1.5.1",buffer:"^6.0.3","its-fine":"^2.1.1","react-use-measure":"^2.1.7",scheduler:"^0.28.0","suspend-react":"^0.1.3","use-sync-external-store":"^1.4.0",zustand:"^5.0.3"},peerDependencies:{expo:">=43.0","expo-asset":">=8.4","expo-file-system":">=11.0","expo-gl":">=11.0",react:">=19 <19.4","react-dom":">=19 <19.4","react-native":">=0.78",three:">=0.156"},peerDependenciesMeta:{"react-dom":{optional:!0},"react-native":{optional:!0},expo:{optional:!0},"expo-asset":{optional:!0},"expo-file-system":{optional:!0},"expo-gl":{optional:!0}}};function F2(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var RS={exports:{}},Rg={exports:{}};Rg.exports;var CS;function U2(){return CS||(CS=1,(function(r){r.exports=function(e){function t(n,i,a,u){return new Sx(n,i,a,u)}function s(){}function o(n){var i="https://react.dev/errors/"+n;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(n){for(var i=n,a=i;a&&!a.alternate;)i=a,(i.flags&4098)!==0&&(n=i.return),a=i.return;for(;i.return;)i=i.return;return i.tag===3?n:null}function c(n){if(l(n)!==n)throw Error(o(188))}function f(n){var i=n.alternate;if(!i){if(i=l(n),i===null)throw Error(o(188));return i!==n?null:n}for(var a=n,u=i;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(u=d.return,u!==null){a=u;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return c(d),n;if(p===u)return c(d),i;p=p.sibling}throw Error(o(188))}if(a.return!==u.return)a=d,u=p;else{for(var w=!1,k=d.child;k;){if(k===a){w=!0,a=d,u=p;break}if(k===u){w=!0,u=d,a=p;break}k=k.sibling}if(!w){for(k=p.child;k;){if(k===a){w=!0,a=p,u=d;break}if(k===u){w=!0,u=p,a=d;break}k=k.sibling}if(!w)throw Error(o(189))}}if(a.alternate!==u)throw Error(o(190))}if(a.tag!==3)throw Error(o(188));return a.stateNode.current===a?n:i}function h(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n;for(n=n.child;n!==null;){if(i=h(n),i!==null)return i;n=n.sibling}return null}function m(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n;for(n=n.child;n!==null;){if(n.tag!==4&&(i=m(n),i!==null))return i;n=n.sibling}return null}function v(n){return n===null||typeof n!="object"?null:(n=Gv&&n[Gv]||n["@@iterator"],typeof n=="function"?n:null)}function _(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===Rx?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Yo:return"Fragment";case $h:return"Profiler";case Hv:return"StrictMode";case jh:return"Suspense";case Zh:return"SuspenseList";case Kh:return"Activity";case Qh:return"ViewTransition"}if(typeof n=="object")switch(n.$$typeof){case $o:return"Portal";case Vr:return n.displayName||"Context";case Vv:return(n._context.displayName||"Context")+".Consumer";case Yh:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Jh:return i=n.displayName||null,i!==null?i:_(n.type)||"Memo";case Ss:i=n._payload,n=n._init;try{return _(n(i))}catch{}}return null}function b(n){return{current:n}}function g(n){0>Jo||(n.current=ap[Jo],ap[Jo]=null,Jo--)}function x(n,i){Jo++,ap[Jo]=n.current,n.current=i}function R(n){return n>>>=0,n===0?32:31-(mM(n)/gM|0)|0}function S(n){var i=n&42;if(i!==0)return i;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return n&-n;case 262144:case 524288:case 1048576:case 2097152:return n&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function y(n,i,a){var u=n.pendingLanes;if(u===0)return 0;var d=0,p=n.suspendedLanes,w=n.pingedLanes;n=n.warmLanes;var k=u&134217727;return k!==0?(u=k&~p,u!==0?d=S(u):(w&=k,w!==0?d=S(w):a||(a=k&~n,a!==0&&(d=S(a))))):(k=u&~p,k!==0?d=S(k):w!==0?d=S(w):a||(a=u&~n,a!==0&&(d=S(a)))),d===0?0:i!==0&&i!==d&&(i&p)===0&&(p=d&-d,a=i&-i,p>=a||p===32&&(a&4194048)!==0)?i:d}function E(n,i){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&i)===0}function D(n,i){(i&8)!==0&&(i|=i&32);var a=n.entangledLanes;if(a!==0)for(n=n.entanglements,a&=i;0<a;){var u=31-Ri(a),d=1<<u;i|=n[u],a&=~d}return i}function C(n,i){switch(n){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function N(){var n=oc;return oc<<=1,(oc&62914560)===0&&(oc=4194304),n}function L(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function M(n,i){n.pendingLanes|=i,i!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function P(n,i,a,u,d,p){var w=n.pendingLanes;n.pendingLanes=a,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=a,n.entangledLanes&=a,n.errorRecoveryDisabledLanes&=a,n.shellSuspendCounter=0;var k=n.entanglements,Q=n.expirationTimes,fe=n.hiddenUpdates;for(a=w&~a;0<a;){var ge=31-Ri(a),Re=1<<ge;k[ge]=0,Q[ge]=-1;var De=fe[ge];if(De!==null)for(fe[ge]=null,ge=0;ge<De.length;ge++){var yt=De[ge];yt!==null&&(yt.lane&=-536870913)}a&=~Re}u!==0&&G(n,u,0),p!==0&&d===0&&n.tag!==0&&(n.suspendedLanes|=p&~(w&~i))}function G(n,i,a){n.pendingLanes|=i,n.suspendedLanes&=~i;var u=31-Ri(i);n.entangledLanes|=i,n.entanglements[u]=n.entanglements[u]|1073741824|a&261930}function F(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var u=31-Ri(a),d=1<<u;d&i|n[u]&i&&(n[u]|=i),a&=~d}}function B(n,i){var a=i&-i;return a=(a&42)!==0?1:W(a),(a&(n.suspendedLanes|i))!==0?0:a}function W(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function j(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function O(n){if(typeof SM=="function"&&xM(n),Ci&&typeof Ci.setStrictMode=="function")try{Ci.setStrictMode(_l,n)}catch{}}function K(n,i){if(n.name!=null&&n.name!=="auto")return n.name;if(i.autoName!==null)return i.autoName;n=ar.identifierPrefix;var a=MM++;return n="_"+n+"t_"+a.toString(32)+"_",i.autoName=n}function se(n){var i;if(n==null||typeof n=="string")return n;var a=null,u=ha;if(u!==null)for(var d=0;d<u.length;d++){var p=n[u[d]];if(p!=null){if(p==="none")return"none";a=a==null?p:a+(" "+p)}}return(i=a)!=null?i:n.default}function ee(n,i){return n=se(n),i=se(i),i==null?n==="auto"?null:n:i==="auto"?null:i}function me(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}function ne(n){if(cp===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);cp=i&&i[1]||"",yy=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+cp+n+yy}function ce(n,i){if(!n||fp)return"";fp=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(i){var Re=function(){throw Error()};if(Object.defineProperty(Re.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Re,[])}catch(At){var De=At}Reflect.construct(n,[],Re)}else{try{Re.call()}catch(At){De=At}Re=!1;try{var yt=Object.getOwnPropertyDescriptor(n.prototype,"props");Object.defineProperty(n.prototype,"props",{configurable:!0,set:function(){throw Error()}}),Re=!0,new n}finally{Re&&(yt!==void 0?Object.defineProperty(n.prototype,"props",yt):delete n.prototype.props)}}}else{try{throw Error()}catch(At){De=At}(Re=n())&&typeof Re.catch=="function"&&Re.catch(function(){})}}catch(At){if(At&&De&&typeof At.stack=="string")return[At.stack,De.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=u.DetermineComponentFrameRoot(),w=p[0],k=p[1];if(w&&k){var Q=w.split(`
`),fe=k.split(`
`);for(d=u=0;u<Q.length&&!Q[u].includes("DetermineComponentFrameRoot");)u++;for(;d<fe.length&&!fe[d].includes("DetermineComponentFrameRoot");)d++;if(u===Q.length||d===fe.length)for(u=Q.length-1,d=fe.length-1;1<=u&&0<=d&&Q[u]!==fe[d];)d--;for(;1<=u&&0<=d;u--,d--)if(Q[u]!==fe[d]){if(u!==1||d!==1)do if(u--,d--,0>d||Q[u]!==fe[d]){var ge=`
`+Q[u].replace(" at new "," at ");return n.displayName&&ge.includes("<anonymous>")&&(ge=ge.replace("<anonymous>",n.displayName)),ge}while(1<=u&&0<=d);break}}}finally{fp=!1,Error.prepareStackTrace=a}return(a=n?n.displayName||n.name:"")?ne(a):""}function he(n,i){switch(n.tag){case 26:case 27:case 5:return ne(n.type);case 16:return ne("Lazy");case 13:return n.child!==i&&i!==null?ne("Suspense Fallback"):ne("Suspense");case 19:return ne("SuspenseList");case 0:case 15:return ce(n.type,!1);case 11:return ce(n.type.render,!1);case 1:return ce(n.type,!0);case 31:return ne("Activity");case 30:return ne("ViewTransition");default:return""}}function Be(n){try{var i="",a=null;do i+=he(n,a),a=n,n=n.return;while(n);return i}catch(u){return`
Error generating stack: `+u.message+`
`+u.stack}}function Ve(n,i){if(typeof n=="object"&&n!==null){var a=by.get(n);return a!==void 0?a:(i={value:n,source:i,stack:Be(i)},by.set(n,i),i)}return{value:n,source:i,stack:Be(i)}}function re(n,i){Qo[ea++]=Sl,Qo[ea++]=lc,lc=n,Sl=i}function Pe(n,i,a){Xi[qi++]=Sr,Xi[qi++]=xr,Xi[qi++]=xs,xs=n;var u=Sr;n=xr;var d=32-Ri(u)-1;u&=~(1<<d),a+=1;var p=32-Ri(i)+d;if(30<p){var w=d-d%5;p=(u&(1<<w)-1).toString(32),u>>=w,d-=w,Sr=1<<32-Ri(i)+d|a<<d|u,xr=p+n}else Sr=1<<p|a<<d|u,xr=n}function ke(n){n.return!==null&&(re(n,1),Pe(n,1,0))}function We(n){for(;n===lc;)lc=Qo[--ea],Qo[ea]=null,Sl=Qo[--ea],Qo[ea]=null;for(;n===xs;)xs=Xi[--qi],Xi[qi]=null,xr=Xi[--qi],Xi[qi]=null,Sr=Xi[--qi],Xi[qi]=null}function Ne(n,i){Xi[qi++]=Sr,Xi[qi++]=xr,Xi[qi++]=xs,Sr=i.id,xr=i.overflow,xs=n}function Qe(n,i){x(Ms,i),x(xl,n),x(qn,null),n=Ix(i),g(qn),x(qn,n)}function Vt(){g(qn),g(xl),g(Ms)}function $e(n){var i=n.memoizedState;i!==null&&(i=i.memoizedState,br?Wr._currentValue=i:Wr._currentValue2=i,x(uc,n)),i=qn.current;var a=Nx(i,n.type);i!==a&&(x(xl,n),x(qn,a))}function Tt(n){xl.current===n&&(g(qn),g(xl)),uc.current===n&&(g(uc),br?Wr._currentValue=jo:Wr._currentValue2=jo)}function _t(n){var i=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Jn(Ve(i,n)),dp}function ht(n,i){if(!Xn)throw Error(o(175));q1(n.stateNode,n.type,n.memoizedProps,i,n)||_t(n,!0)}function fn(n){for(Ln=n.return;Ln;)switch(Ln.tag){case 5:case 31:case 13:$i=!1;return;case 27:case 3:$i=!0;return;default:Ln=Ln.return}}function qt(n){if(!Xn||n!==Ln)return!1;if(!mt)return fn(n),mt=!0,!1;var i=n.tag;if(on?i!==3&&i!==27&&(i!==5||oy(n.type)&&!tc(n.type,n.memoizedProps))&&Kt&&_t(n):i!==3&&(i!==5||oy(n.type)&&!tc(n.type,n.memoizedProps))&&Kt&&_t(n),fn(n),i===13){if(!Xn)throw Error(o(316));if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(o(317));Kt=J1(n)}else if(i===31){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(o(317));Kt=Z1(n)}else Kt=on&&i===27?F1(n.type,Kt):Ln?sy(n.stateNode):null;return!0}function dn(){Xn&&(Kt=Ln=null,mt=!1)}function Gt(){var n=ws;return n!==null&&(_i===null?_i=n:_i.push.apply(_i,n),ws=null),n}function Jn(n){ws===null?ws=[n]:ws.push(n)}function Wt(n,i,a){br?(x(cc,i._currentValue),i._currentValue=a):(x(cc,i._currentValue2),i._currentValue2=a)}function hn(n){var i=cc.current;br?n._currentValue=i:n._currentValue2=i,g(cc)}function Bn(n,i,a){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===a)break;n=n.return}}function Kn(n,i,a,u){var d=n.child;for(d!==null&&(d.return=n);d!==null;){var p=d.dependencies;if(p!==null){var w=d.child;p=p.firstContext;e:for(;p!==null;){var k=p;p=d;for(var Q=0;Q<i.length;Q++)if(k.context===i[Q]){p.lanes|=a,k=p.alternate,k!==null&&(k.lanes|=a),Bn(p.return,a,n),u||(w=null);break e}p=k.next}}else if(d.tag===18){if(w=d.return,w===null)throw Error(o(341));w.lanes|=a,p=w.alternate,p!==null&&(p.lanes|=a),Bn(w,a,n),w=null}else d.tag===13&&d.memoizedState!==null&&d.memoizedState.dehydrated===null?(d.lanes|=a,w=d.alternate,w!==null&&(w.lanes|=a),Bn(d.return,a,n),w=d.child,w=w!==null?w.sibling:null):w=d.child;if(w!==null)w.return=d;else for(w=d;w!==null;){if(w===n){w=null;break}if(d=w.sibling,d!==null){d.return=w.return,w=d;break}w=w.return}d=w}}function H(n,i,a,u){n=null;for(var d=i,p=!1;d!==null;){if(!p){if((d.flags&524288)!==0)p=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var w=d.alternate;if(w===null)throw Error(o(387));if(w=w.memoizedProps,w!==null){var k=d.type;Pi(d.pendingProps.value,w.value)||(n!==null?n.push(k):n=[k])}}else if(d===uc.current){if(w=d.alternate,w===null)throw Error(o(387));w.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(n!==null?n.push(Wr):n=[Wr])}d=d.return}return n!==null&&Kn(i,n,a,u),i.flags|=262144,n!==null}function Hn(n){for(n=n.firstContext;n!==null;){var i=n.context;if(!Pi(br?i._currentValue:i._currentValue2,n.memoizedValue))return!0;n=n.next}return!1}function Ct(n){no=n,Xr=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function at(n){return pn(no,n)}function Ee(n,i){return no===null&&Ct(n),pn(n,i)}function pn(n,i){var a=br?i._currentValue:i._currentValue2;if(i={context:i,memoizedValue:a,next:null},Xr===null){if(n===null)throw Error(o(308));Xr=i,n.dependencies={lanes:0,firstContext:i},n.flags|=524288}else Xr=Xr.next=i;return a}function Xe(){return{controller:new TM,data:new Map,refCount:0}}function Ze(n){n.refCount--,n.refCount===0&&EM(AM,function(){n.controller.abort()})}function I(n,i){if((n.pendingLanes&4194048)!==0){var a=n.transitionTypes;for(a===null&&(a=n.transitionTypes=[]),n=0;n<i.length;n++){var u=i[n];a.indexOf(u)===-1&&a.push(u)}}}function T(n){var i=n.transitionTypes;return n.transitionTypes=null,i}function $(){}function de(n){n!==na&&n.next===null&&(na===null?ta=na=n:na=na.next=n),fc=!0,hp||(hp=!0,U())}function ue(n,i){if(!pp&&fc){pp=!0;do for(var a=!1,u=ta;u!==null;){if(!i)if(n!==0){var d=u.pendingLanes;if(d===0)var p=0;else{var w=u.suspendedLanes,k=u.pingedLanes;p=(1<<31-Ri(42|n)+1)-1,p&=d&~(w&~k),p=p&201326741?p&201326741|1:p?p|2:0}p!==0&&(a=!0,Me(u,p))}else p=wt,p=y(u,u===Xt?p:0,u.cancelPendingCommit!==null||u.timeoutHandle!==to),(p&3)===0||E(u,p)||(a=!0,Me(u,p));u=u.next}while(a);pp=!1}}function xe(){Te()}function Te(){fc=hp=!1;var n=0;io!==0&&Hx()&&(n=io);for(var i=vi(),a=null,u=ta;u!==null;){var d=u.next,p=oe(u,i);p===0?(u.next=null,a===null?ta=d:a.next=d,d===null&&(na=a)):(a=u,(n!==0||(p&3)!==0)&&(fc=!0)),u=d}ln!==0&&ln!==5||ue(n,!1),io!==0&&(io=0)}function oe(n,i){for(var a=n.suspendedLanes,u=n.pingedLanes,d=n.expirationTimes,p=n.pendingLanes&-62914561;0<p;){var w=31-Ri(p),k=1<<w,Q=d[w];Q===-1?((k&a)===0||(k&u)!==0)&&(d[w]=C(k,i)):Q<=i&&(n.expiredLanes|=k),p&=~k}if(i=Xt,a=wt,a=y(n,n===i?a:0,n.cancelPendingCommit!==null||n.timeoutHandle!==to),u=n.callbackNode,a===0||n===i&&(zt===2||zt===9)||n.cancelPendingCommit!==null)return u!==null&&u!==null&&lp(u),n.callbackNode=null,n.callbackPriority=0;if((a&3)===0||E(n,a)){if(i=a&-a,i===n.callbackPriority)return i;switch(u!==null&&lp(u),j(a)){case 2:case 8:a=bM;break;case 32:a=up;break;case 268435456:a=_M;break;default:a=up}return u=ae.bind(null,n),a=ac(a,u),n.callbackPriority=i,n.callbackNode=a,i}return u!==null&&u!==null&&lp(u),n.callbackPriority=2,n.callbackNode=null,2}function ae(n,i){if(ln!==0&&ln!==5)return n.callbackNode=null,n.callbackPriority=0,null;var a=n.callbackNode;if(gl()&&n.callbackNode!==a)return null;var u=wt;return u=y(n,n===Xt?u:0,n.cancelPendingCommit!==null||n.timeoutHandle!==to),u===0?null:(_v(n,u,i),oe(n,vi()),n.callbackNode!=null&&n.callbackNode===a?ae.bind(null,n):null)}function Me(n,i){if(gl())return null;_v(n,i,!0)}function U(){jx?Zx(function(){(xt&6)!==0?ac(gy,xe):Te()}):ac(gy,xe)}function le(){if(io===0){var n=ro;n===0&&(n=rc,rc<<=1,(rc&261888)===0&&(rc=256)),io=n}return io}function ie(n,i){if(wl===null){var a=wl=[];mp=0,ro=le(),ia={status:"pending",value:void 0,then:function(u){a.push(u)}}}return mp++,i.then(we,we),i}function we(){if(--mp===0&&(Ml=null,wl!==null)){ia!==null&&(ia.status="fulfilled");var n=wl;wl=null,ro=0,ia=null;for(var i=0;i<n.length;i++)(0,n[i])()}}function ye(n,i){var a=[],u={status:"pending",value:null,reason:null,then:function(d){a.push(d)}};return n.then(function(){u.status="fulfilled",u.value=i;for(var d=0;d<a.length;d++)(0,a[d])(i)},function(d){for(u.status="rejected",u.reason=d,d=0;d<a.length;d++)(0,a[d])(void 0)}),u}function _e(){var n=so.current;return n!==null?n:Xt.pooledCache}function He(n,i){i===null?x(so,so.current):x(so,i.pool)}function ot(){var n=_e();return n===null?null:{parent:br?an._currentValue:an._currentValue2,pool:n}}function pe(n,i){if(Pi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),u=Object.keys(i);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var d=a[u];if(!wM.call(i,d)||!Pi(n[d],i[d]))return!1}return!0}function Ge(n){return n=n.status,n==="fulfilled"||n==="rejected"}function st(n,i,a){switch(a=n[a],a===void 0?n.push(i):a!==i&&(i.then($,$),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,vn(n),n===void 0&&!("reason"in i)?Error(o(600)):n;default:if(typeof i.status=="string")i.then($,$);else{if(n=Xt,n!==null&&100<n.shellSuspendCounter)throw Error(o(482));n=i,n.status="pending",n.then(function(u){if(i.status==="pending"){var d=i;d.status="fulfilled",d.value=u}},function(u){if(i.status==="pending"){var d=i;d.status="rejected",d.reason=u}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,vn(n),n}throw oo=i,ra}}function Ae(n){try{var i=n._init;return i(n._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(oo=a,ra):a}}function Pt(){if(oo===null)throw Error(o(459));var n=oo;return oo=null,n}function vn(n){if(n===ra||n===dc)throw Error(o(483))}function wi(n){var i=Tl;return Tl+=1,sa===null&&(sa=[]),st(sa,n,i)}function er(n,i){i=i.props.ref,n.ref=i!==void 0?i:null}function ps(n,i){throw i.$$typeof===wx?Error(o(525)):(n=Object.prototype.toString.call(i),Error(o(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n)))}function Iu(n){function i(Z,X){if(n){var te=Z.deletions;te===null?(Z.deletions=[X],Z.flags|=16):te.push(X)}}function a(Z,X){if(!n)return null;for(;X!==null;)i(Z,X),X=X.sibling;return null}function u(Z){for(var X=new Map;Z!==null;)Z.key===null?X.set(Z.index,Z):X.set(Z.key,Z),Z=Z.sibling;return X}function d(Z,X){return Z=Hr(Z,X),Z.index=0,Z.sibling=null,Z}function p(Z,X,te){return Z.index=te,n?(te=Z.alternate,te!==null?(te=te.index,te<X?(Z.flags|=2,X):te):(Z.flags|=134217730,X)):(Z.flags|=1048576,X)}function w(Z){return n&&Z.alternate===null&&(Z.flags|=134217730),Z}function k(Z,X,te,ve){return X===null||X.tag!==6?(X=Gh(te,Z.mode,ve),X.return=Z,X):(X=d(X,te),X.return=Z,X)}function Q(Z,X,te,ve){var Ke=te.type;return Ke===Yo?(Z=ge(Z,X,te.props.children,ve,te.key),er(Z,te),Z):X!==null&&(X.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===Ss&&Ae(Ke)===X.type)?(X=d(X,te.props),er(X,te),X.return=Z,X):(X=Ku(te.type,te.key,te.props,null,Z.mode,ve),er(X,te),X.return=Z,X)}function fe(Z,X,te,ve){return X===null||X.tag!==4||X.stateNode.containerInfo!==te.containerInfo||X.stateNode.implementation!==te.implementation?(X=Wh(te,Z.mode,ve),X.return=Z,X):(X=d(X,te.children||[]),X.return=Z,X)}function ge(Z,X,te,ve,Ke){return X===null||X.tag!==7?(X=eo(te,Z.mode,ve,Ke),X.return=Z,X):(X=d(X,te),X.return=Z,X)}function Re(Z,X,te){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Gh(""+X,Z.mode,te),X.return=Z,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case Qu:return te=Ku(X.type,X.key,X.props,null,Z.mode,te),er(te,X),te.return=Z,te;case $o:return X=Wh(X,Z.mode,te),X.return=Z,X;case Ss:return X=Ae(X),Re(Z,X,te)}if(ec(X)||v(X))return X=eo(X,Z.mode,te,null),X.return=Z,X;if(typeof X.then=="function")return Re(Z,wi(X),te);if(X.$$typeof===Vr)return Re(Z,Ee(Z,X),te);ps(Z,X)}return null}function De(Z,X,te,ve){var Ke=X!==null?X.key:null;if(typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint")return Ke!==null?null:k(Z,X,""+te,ve);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case Qu:return te.key===Ke?Q(Z,X,te,ve):null;case $o:return te.key===Ke?fe(Z,X,te,ve):null;case Ss:return te=Ae(te),De(Z,X,te,ve)}if(ec(te)||v(te))return Ke!==null?null:ge(Z,X,te,ve,null);if(typeof te.then=="function")return De(Z,X,wi(te),ve);if(te.$$typeof===Vr)return De(Z,X,Ee(Z,te),ve);ps(Z,te)}return null}function yt(Z,X,te,ve,Ke){if(typeof ve=="string"&&ve!==""||typeof ve=="number"||typeof ve=="bigint")return Z=Z.get(te)||null,k(X,Z,""+ve,Ke);if(typeof ve=="object"&&ve!==null){switch(ve.$$typeof){case Qu:return Z=Z.get(ve.key===null?te:ve.key)||null,Q(X,Z,ve,Ke);case $o:return Z=Z.get(ve.key===null?te:ve.key)||null,fe(X,Z,ve,Ke);case Ss:return ve=Ae(ve),yt(Z,X,te,ve,Ke)}if(ec(ve)||v(ve))return Z=Z.get(te)||null,ge(X,Z,ve,Ke,null);if(typeof ve.then=="function")return yt(Z,X,te,wi(ve),Ke);if(ve.$$typeof===Vr)return yt(Z,X,te,Ee(X,ve),Ke);ps(X,ve)}return null}function At(Z,X,te,ve){for(var Ke=null,un=null,et=X,Nt=X=0,Tn=null;et!==null&&Nt<te.length;Nt++){et.index>Nt?(Tn=et,et=null):Tn=et.sibling;var Et=De(Z,et,te[Nt],ve);if(Et===null){et===null&&(et=Tn);break}n&&et&&Et.alternate===null&&i(Z,et),X=p(Et,X,Nt),un===null?Ke=Et:un.sibling=Et,un=Et,et=Tn}if(Nt===te.length)return a(Z,et),mt&&re(Z,Nt),Ke;if(et===null){for(;Nt<te.length;Nt++)et=Re(Z,te[Nt],ve),et!==null&&(X=p(et,X,Nt),un===null?Ke=et:un.sibling=et,un=et);return mt&&re(Z,Nt),Ke}for(et=u(et);Nt<te.length;Nt++)Tn=yt(et,Z,Nt,te[Nt],ve),Tn!==null&&(n&&(Et=Tn.alternate,Et!==null&&et.delete(Et.key===null?Nt:Et.key)),X=p(Tn,X,Nt),un===null?Ke=Tn:un.sibling=Tn,un=Tn);return n&&et.forEach(function(Is){return i(Z,Is)}),mt&&re(Z,Nt),Ke}function Ps(Z,X,te,ve){if(te==null)throw Error(o(151));for(var Ke=null,un=null,et=X,Nt=X=0,Tn=null,Et=te.next();et!==null&&!Et.done;Nt++,Et=te.next()){et.index>Nt?(Tn=et,et=null):Tn=et.sibling;var Is=De(Z,et,Et.value,ve);if(Is===null){et===null&&(et=Tn);break}n&&et&&Is.alternate===null&&i(Z,et),X=p(Is,X,Nt),un===null?Ke=Is:un.sibling=Is,un=Is,et=Tn}if(Et.done)return a(Z,et),mt&&re(Z,Nt),Ke;if(et===null){for(;!Et.done;Nt++,Et=te.next())Et=Re(Z,Et.value,ve),Et!==null&&(X=p(Et,X,Nt),un===null?Ke=Et:un.sibling=Et,un=Et);return mt&&re(Z,Nt),Ke}for(et=u(et);!Et.done;Nt++,Et=te.next())Et=yt(et,Z,Nt,Et.value,ve),Et!==null&&(n&&(Tn=Et.alternate,Tn!==null&&et.delete(Tn.key===null?Nt:Tn.key)),X=p(Et,X,Nt),un===null?Ke=Et:un.sibling=Et,un=Et);return n&&et.forEach(function(NM){return i(Z,NM)}),mt&&re(Z,Nt),Ke}function ho(Z,X,te,ve){if(typeof te=="object"&&te!==null&&te.type===Yo&&te.key===null&&te.props.ref===void 0&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case Qu:e:{for(var Ke=te.key;X!==null;){if(X.key===Ke){if(Ke=te.type,Ke===Yo){if(X.tag===7){a(Z,X.sibling),ve=d(X,te.props.children),er(ve,te),ve.return=Z,Z=ve;break e}}else if(X.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===Ss&&Ae(Ke)===X.type){a(Z,X.sibling),ve=d(X,te.props),er(ve,te),ve.return=Z,Z=ve;break e}a(Z,X);break}else i(Z,X);X=X.sibling}te.type===Yo?(ve=eo(te.props.children,Z.mode,ve,te.key),er(ve,te),ve.return=Z,Z=ve):(ve=Ku(te.type,te.key,te.props,null,Z.mode,ve),er(ve,te),ve.return=Z,Z=ve)}return w(Z);case $o:e:{for(Ke=te.key;X!==null;){if(X.key===Ke)if(X.tag===4&&X.stateNode.containerInfo===te.containerInfo&&X.stateNode.implementation===te.implementation){a(Z,X.sibling),ve=d(X,te.children||[]),ve.return=Z,Z=ve;break e}else{a(Z,X);break}else i(Z,X);X=X.sibling}ve=Wh(te,Z.mode,ve),ve.return=Z,Z=ve}return w(Z);case Ss:return te=Ae(te),ho(Z,X,te,ve)}if(ec(te))return At(Z,X,te,ve);if(v(te)){if(Ke=v(te),typeof Ke!="function")throw Error(o(150));return te=Ke.call(te),Ps(Z,X,te,ve)}if(typeof te.then=="function")return ho(Z,X,wi(te),ve);if(te.$$typeof===Vr)return ho(Z,X,Ee(Z,te),ve);ps(Z,te)}return typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint"?(te=""+te,X!==null&&X.tag===6?(a(Z,X.sibling),ve=d(X,te),ve.return=Z,Z=ve):(a(Z,X),ve=Gh(te,Z.mode,ve),ve.return=Z,Z=ve),w(Z)):a(Z,X)}return function(Z,X,te,ve){try{Tl=0;var Ke=ho(Z,X,te,ve);return sa=null,Ke}catch(et){if(et===ra||et===dc)throw et;var un=t(29,et,null,Z.mode);return un.lanes=ve,un.return=Z,un}}}function Ys(){for(var n=oa,i=vp=oa=0;i<n;){var a=Yi[i];Yi[i++]=null;var u=Yi[i];Yi[i++]=null;var d=Yi[i];Yi[i++]=null;var p=Yi[i];if(Yi[i++]=null,u!==null&&d!==null){var w=u.pending;w===null?d.next=d:(d.next=w.next,w.next=d),u.pending=d}p!==0&&sl(a,d,p)}}function js(n,i,a,u){Yi[oa++]=n,Yi[oa++]=i,Yi[oa++]=a,Yi[oa++]=u,vp|=u,n.lanes|=u,n=n.alternate,n!==null&&(n.lanes|=u)}function tr(n,i,a,u){return js(n,i,a,u),Zs(n)}function nr(n,i){return js(n,null,null,i),Zs(n)}function sl(n,i,a){n.lanes|=a;var u=n.alternate;u!==null&&(u.lanes|=a);for(var d=!1,p=n.return;p!==null;)p.childLanes|=a,u=p.alternate,u!==null&&(u.childLanes|=a),p.tag===22&&(n=p.stateNode,n===null||n._visibility&1||(d=!0)),n=p,p=p.return;return n.tag===3?(p=n.stateNode,d&&i!==null&&(d=31-Ri(a),n=p.hiddenUpdates,u=n[d],u===null?n[d]=[i]:u.push(i),i.lane=a|536870912),p):null}function Zs(n){if(50<Il)throw Il=0,Ac=null,Error(o(185));for(var i=n.return;i!==null;)n=i,i=n.return;return n.tag===3?n.stateNode:null}function ms(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Uo(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function ir(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function mi(n,i,a){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(xt&2)!==0){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,i=Zs(n),sl(n,null,a),i}return js(n,u,i,a),Zs(n)}function Js(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,F(n,a)}}function Oo(n,i){var a=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var w={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};p===null?d=p=w:p=p.next=w,a=a.next}while(a!==null);p===null?d=p=i:p=p.next=i}else d=p=i;a={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:u.shared,callbacks:u.callbacks},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function gs(){if(yp){var n=ia;if(n!==null)throw n}}function Ks(n,i,a,u){yp=!1;var d=n.updateQueue;Ts=!1;var p=d.firstBaseUpdate,w=d.lastBaseUpdate,k=d.shared.pending;if(k!==null){d.shared.pending=null;var Q=k,fe=Q.next;Q.next=null,w===null?p=fe:w.next=fe,w=Q;var ge=n.alternate;ge!==null&&(ge=ge.updateQueue,k=ge.lastBaseUpdate,k!==w&&(k===null?ge.firstBaseUpdate=fe:k.next=fe,ge.lastBaseUpdate=Q))}if(p!==null){var Re=d.baseState;w=0,ge=fe=Q=null,k=p;do{var De=k.lane&-536870913,yt=De!==k.lane;if(yt?(wt&De)===De:(u&De)===De){De!==0&&De===ro&&(yp=!0),ge!==null&&(ge=ge.next={lane:0,tag:k.tag,payload:k.payload,callback:null,next:null});e:{var At=n,Ps=k;De=i;var ho=a;switch(Ps.tag){case 1:if(At=Ps.payload,typeof At=="function"){Re=At.call(ho,Re,De);break e}Re=At;break e;case 3:At.flags=At.flags&-65537|128;case 0:if(At=Ps.payload,De=typeof At=="function"?At.call(ho,Re,De):At,De==null)break e;Re=qh({},Re,De);break e;case 2:Ts=!0}}De=k.callback,De!==null&&(n.flags|=64,yt&&(n.flags|=8192),yt=d.callbacks,yt===null?d.callbacks=[De]:yt.push(De))}else yt={lane:De,tag:k.tag,payload:k.payload,callback:k.callback,next:null},ge===null?(fe=ge=yt,Q=Re):ge=ge.next=yt,w|=De;if(k=k.next,k===null){if(k=d.shared.pending,k===null)break;yt=k,k=yt.next,yt.next=null,d.lastBaseUpdate=yt,d.shared.pending=null}}while(!0);ge===null&&(Q=Re),d.baseState=Q,d.firstBaseUpdate=fe,d.lastBaseUpdate=ge,p===null&&(d.shared.lanes=0),Rs|=w,n.lanes=w,n.memoizedState=Re}}function Nu(n,i){if(typeof n!="function")throw Error(o(191,n));n.call(i)}function Lu(n,i){var a=n.callbacks;if(a!==null)for(n.callbacks=null,n=0;n<a.length;n++)Nu(a[n],i)}function ol(n,i){n=$r,x(pc,n),x(Es,i),$r=n|i.baseLanes}function A(){x(pc,$r),x(Es,Es.current)}function z(){$r=pc.current,g(Es),g(pc)}function J(n){var i=n.alternate;x(Yn,Yn.current&1),x($n,n),ui===null&&(i===null||Es.current!==null||i.memoizedState!==null)&&(ui=n)}function q(n){x(Yn,Yn.current),x($n,n),ui===null&&(ui=n)}function Y(n){n.tag===22?(x(Yn,Yn.current),x($n,n),ui===null&&(ui=n)):be()}function be(){x(Yn,Yn.current),x($n,$n.current)}function Ce(n){g($n),ui===n&&(ui=null),g(Yn)}function Se(n,i){x($n,$n.current),x(Yn,i)}function Ie(n){g(Yn),g($n),ui===n&&(ui=null)}function ze(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||ip(a)||rp(a)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!=="independent"){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function Fe(){throw Error(o(321))}function ft(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Pi(n[a],i[a]))return!1;return!0}function Ue(n,i,a,u,d,p){return qr=p,lt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Je.H=n===null||n.memoizedState===null?xy:My,lo=!1,p=a(u,d),lo=!1,aa&&(p=rn(i,a,u,d)),pt(n),p}function pt(n){Je.H=vc;var i=Ht!==null&&Ht.next!==null;if(qr=0,xn=Ht=lt=null,mc=!1,El=0,la=null,i)throw Error(o(300));n===null||Mn||(n=n.dependencies,n!==null&&Hn(n)&&(Mn=!0))}function rn(n,i,a,u){lt=n;var d=0;do{if(aa&&(la=null),El=0,aa=!1,25<=d)throw Error(o(301));if(d+=1,xn=Ht=null,n.updateQueue!=null){var p=n.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}Je.H=CM,p=i(a,u)}while(aa);return p}function Bt(){var n=Je.H,i=n.useState()[0];return i=typeof i.then=="function"?mn(i):i,n=n.useState()[0],(Ht!==null?Ht.memoizedState:null)!==n&&(lt.flags|=1024),i}function Dt(){var n=gc!==0;return gc=0,n}function Sn(n,i,a){i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~a}function Oe(n){if(mc){for(n=n.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}mc=!1}qr=0,xn=Ht=lt=null,aa=!1,El=gc=0,la=null}function kt(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xn===null?lt.memoizedState=xn=n:xn=xn.next=n,xn}function Ye(){if(Ht===null){var n=lt.alternate;n=n!==null?n.memoizedState:null}else n=Ht.next;var i=xn===null?lt.memoizedState:xn.next;if(i!==null)xn=i,Ht=n;else{if(n===null)throw lt.alternate===null?Error(o(467)):Error(o(310));Ht=n,n={memoizedState:Ht.memoizedState,baseState:Ht.baseState,baseQueue:Ht.baseQueue,queue:Ht.queue,next:null},xn===null?lt.memoizedState=xn=n:xn=xn.next=n}return xn}function Bi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function mn(n){var i=El;return El+=1,la===null&&(la=[]),n=st(la,n,i),i=lt,(xn===null?i.memoizedState:xn.next)===null&&(i=i.alternate,Je.H=i===null||i.memoizedState===null?xy:My),n}function zr(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return mn(n);if(n.$$typeof===Ax)return;if(n.$$typeof===Vr)return at(n)}throw Error(o(438,String(n)))}function Hi(n){var i=null,a=lt.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var u=lt.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(i={data:u.data.map(function(d){return d.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=Bi(),lt.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(n),u=0;u<n;u++)a[u]=Ex;return i.index++,a}function Vn(n,i){return typeof i=="function"?i(n):i}function vt(n){var i=Ye();return yn(i,Ht,n)}function yn(n,i,a){var u=n.queue;if(u===null)throw Error(o(311));u.lastRenderedReducer=a;var d=n.baseQueue,p=u.pending;if(p!==null){if(d!==null){var w=d.next;d.next=p.next,p.next=w}i.baseQueue=d=p,u.pending=null}if(p=n.baseState,d===null)n.memoizedState=p;else{i=d.next;var k=w=null,Q=null,fe=i,ge=!1;do{var Re=fe.lane&-536870913;if(Re!==fe.lane?(wt&Re)===Re:(qr&Re)===Re){var De=fe.revertLane;if(De===0)Q!==null&&(Q=Q.next={lane:0,revertLane:0,gesture:null,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null}),Re===ro&&(ge=!0);else if((qr&De)===De){fe=fe.next,De===ro&&(ge=!0);continue}else Re={lane:0,revertLane:fe.revertLane,gesture:null,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null},Q===null?(k=Q=Re,w=p):Q=Q.next=Re,lt.lanes|=De,Rs|=De;Re=fe.action,lo&&a(p,Re),p=fe.hasEagerState?fe.eagerState:a(p,Re)}else De={lane:Re,revertLane:fe.revertLane,gesture:fe.gesture,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null},Q===null?(k=Q=De,w=p):Q=Q.next=De,lt.lanes|=Re,Rs|=Re;fe=fe.next}while(fe!==null&&fe!==i);if(Q===null?w=p:Q.next=k,!Pi(p,n.memoizedState)&&(Mn=!0,ge&&(a=ia,a!==null)))throw a;n.memoizedState=p,n.baseState=w,n.baseQueue=Q,u.lastRenderedState=p}return d===null&&(u.lanes=0),[n.memoizedState,u.dispatch]}function li(n){var i=Ye(),a=i.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=n;var u=a.dispatch,d=a.pending,p=i.memoizedState;if(d!==null){a.pending=null;var w=d=d.next;do p=n(p,w.action),w=w.next;while(w!==d);Pi(p,i.memoizedState)||(Mn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),a.lastRenderedState=p}return[p,u]}function $t(n,i,a){var u=lt,d=Ye(),p=mt;if(p){if(a===void 0)throw Error(o(407));a=a()}else a=i();var w=!Pi((Ht||d).memoizedState,a);if(w&&(d.memoizedState=a,Mn=!0),d=d.queue,Jd(al.bind(null,u,d,n),[n]),n=d.getSnapshot!==i||w||xn!==null&&(xn.memoizedState.tag&1)!==0,zo(n?9:8,{destroy:void 0},Vi.bind(null,u,d,a,i),null),n){if(u.flags|=2048,Xt===null)throw Error(o(349));p||(qr&127)!==0||bn(u,i,a)}return a}function bn(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=lt.updateQueue,i===null?(i=Bi(),lt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Vi(n,i,a,u){i.value=a,i.getSnapshot=u,$g(i)&&Yg(n)}function al(n,i,a){return a(function(){$g(i)&&Yg(n)})}function $g(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Pi(n,a)}catch{return!0}}function Yg(n){var i=nr(n,2);i!==null&&gi(i,n,2)}function jd(n){var i=kt();if(typeof n=="function"){var a=n;if(n=a(),lo){O(!0);try{a()}finally{O(!1)}}}return i.memoizedState=i.baseState=n,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vn,lastRenderedState:n},i}function jg(n,i,a,u){return n.baseState=a,yn(n,Ht,typeof u=="function"?u:Vn)}function JS(n,i,a,u,d){if(Fu(n))throw Error(o(485));if(n=i.action,n!==null){var p={payload:d,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(w){p.listeners.push(w)}};Je.T!==null?a(!0):p.isTransition=!1,u(p),a=i.pending,a===null?(p.next=i.pending=p,Zg(i,p)):(p.next=a.next,i.pending=a.next=p)}}function Zg(n,i){var a=i.action,u=i.payload,d=n.state;if(i.isTransition){var p=Je.T,w={};w.types=p!==null?p.types:null,Je.T=w;try{var k=a(d,u),Q=Je.S;Q!==null&&Q(w,k),Jg(n,i,k)}catch(fe){Zd(n,i,fe)}finally{p!==null&&w.types!==null&&(p.types=w.types),Je.T=p}}else try{p=a(d,u),Jg(n,i,p)}catch(fe){Zd(n,i,fe)}}function Jg(n,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(u){Kg(n,i,u)},function(u){return Zd(n,i,u)}):Kg(n,i,a)}function Kg(n,i,a){i.status="fulfilled",i.value=a,Qg(i),n.state=a,i=n.pending,i!==null&&(a=i.next,a===i?n.pending=null:(a=a.next,i.next=a,Zg(n,a)))}function Zd(n,i,a){var u=n.pending;if(n.pending=null,u!==null){u=u.next;do i.status="rejected",i.reason=a,Qg(i),i=i.next;while(i!==u)}n.action=null}function Qg(n){n=n.listeners;for(var i=0;i<n.length;i++)(0,n[i])()}function e0(n,i){return i}function t0(n,i){if(mt){var a=Xt.formState;if(a!==null){e:{var u=lt;if(mt){if(Kt){var d=D1(Kt,$i);if(d){Kt=sy(d),u=k1(d);break e}}_t(u)}u=!1}u&&(i=a[0])}}a=kt(),a.memoizedState=a.baseState=i,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e0,lastRenderedState:i},a.queue=u,a=b0.bind(null,lt,u),u.dispatch=a,u=jd(!1);var p=th.bind(null,lt,!1,u.queue);return u=kt(),d={state:i,dispatch:null,action:n,pending:null},u.queue=d,a=JS.bind(null,lt,d,p,a),d.dispatch=a,u.memoizedState=n,[i,a,!1]}function n0(n){var i=Ye();return i0(i,Ht,n)}function i0(n,i,a){if(i=yn(n,i,e0)[0],n=vt(Vn)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var u=mn(i)}catch(w){throw w===ra?dc:w}else u=i;i=Ye();var d=i.queue,p=d.dispatch;return a!==i.memoizedState&&(lt.flags|=2048,zo(9,{destroy:void 0},KS.bind(null,d,a),null)),[u,p,n]}function KS(n,i){n.action=i}function r0(n){var i=Ye(),a=Ht;if(a!==null)return i0(i,a,n);Ye(),i=i.memoizedState,a=Ye();var u=a.queue.dispatch;return a.memoizedState=n,[i,u,!1]}function zo(n,i,a,u){return n={tag:n,create:a,deps:u,inst:i,next:null},i=lt.updateQueue,i===null&&(i=Bi(),lt.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=n.next=n:(u=a.next,a.next=n,n.next=u,i.lastEffect=n),n}function s0(){return Ye().memoizedState}function Du(n,i,a,u){var d=kt();lt.flags|=n,d.memoizedState=zo(1|i,{destroy:void 0},a,u===void 0?null:u)}function ku(n,i,a,u){var d=Ye();u=u===void 0?null:u;var p=d.memoizedState.inst;Ht!==null&&u!==null&&ft(u,Ht.memoizedState.deps)?d.memoizedState=zo(i,p,a,u):(lt.flags|=n,d.memoizedState=zo(1|i,p,a,u))}function o0(n,i){Du(8390656,8,n,i)}function Jd(n,i){ku(2048,8,n,i)}function QS(n){lt.flags|=4;var i=lt.updateQueue;if(i===null)i=Bi(),lt.updateQueue=i,i.events=[n];else{var a=i.events;a===null?i.events=[n]:a.push(n)}}function a0(n){var i=Ye().memoizedState;return QS({ref:i,nextImpl:n}),function(){if((xt&2)!==0)throw Error(o(440));return i.impl.apply(void 0,arguments)}}function l0(n,i){return ku(4,2,n,i)}function u0(n,i){return ku(4,4,n,i)}function c0(n,i){if(typeof i=="function"){n=n();var a=i(n);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function f0(n,i,a){a=a!=null?a.concat([n]):null,ku(4,4,c0.bind(null,i,n),a)}function Kd(){}function d0(n,i){var a=Ye();i=i===void 0?null:i;var u=a.memoizedState;return i!==null&&ft(i,u[1])?u[0]:(a.memoizedState=[n,i],n)}function h0(n,i){var a=Ye();i=i===void 0?null:i;var u=a.memoizedState;if(i!==null&&ft(i,u[1]))return u[0];if(u=n(),lo){O(!0);try{n()}finally{O(!1)}}return a.memoizedState=[u,i],u}function Qd(n,i,a){return a===void 0||(qr&1073741824)!==0&&(wt&261930)===0?n.memoizedState=i:(n.memoizedState=a,n=bv(),lt.lanes|=n,Rs|=n,a)}function p0(n,i,a,u){return Pi(a,i)?a:Es.current!==null?(n=Qd(n,a,u),Pi(n,i)||(Mn=!0),n):(qr&106)===0||(qr&1073741824)!==0&&(wt&261930)===0?(Mn=!0,n.memoizedState=a):(n=bv(),lt.lanes|=n,Rs|=n,i)}function m0(n,i,a,u,d){var p=Gr();Nn(p!==0&&8>p?p:8);var w=Je.T,k={};k.types=w!==null?w.types:null,Je.T=k,th(n,!1,i,a);try{var Q=d(),fe=Je.S;if(fe!==null&&fe(k,Q),Q!==null&&typeof Q=="object"&&typeof Q.then=="function"){var ge=ye(Q,u);ll(n,i,ge,Ei(n))}else ll(n,i,u,Ei(n))}catch(Re){ll(n,i,{then:function(){},status:"rejected",reason:Re},Ei())}finally{Nn(p),w!==null&&k.types!==null&&(w.types=k.types),Je.T=w}}function g0(n){var i=n.memoizedState;if(i!==null)return i;i={memoizedState:jo,baseState:jo,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vn,lastRenderedState:jo},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vn,lastRenderedState:a},next:null},n.memoizedState=i,n=n.alternate,n!==null&&(n.memoizedState=i),i}function eh(){return at(Wr)}function v0(){return Ye().memoizedState}function y0(){return Ye().memoizedState}function ex(n){for(var i=n.return;i!==null;){switch(i.tag){case 24:case 3:var a=Ei();n=ir(a);var u=mi(i,n,a);u!==null&&(gi(u,i,a),Js(u,i,a)),i={cache:Xe()},n.payload=i;return}i=i.return}}function tx(n,i,a){var u=Ei();a={lane:u,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Fu(n)?_0(i,a):(a=tr(n,i,a,u),a!==null&&(gi(a,n,u),S0(a,i,u)))}function b0(n,i,a){var u=Ei();ll(n,i,a,u)}function ll(n,i,a,u){var d={lane:u,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Fu(n))_0(i,d);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var w=i.lastRenderedState,k=p(w,a);if(d.hasEagerState=!0,d.eagerState=k,Pi(k,w))return js(n,i,d,0),Xt===null&&Ys(),!1}catch{}if(a=tr(n,i,d,u),a!==null)return gi(a,n,u),S0(a,i,u),!0}return!1}function th(n,i,a,u){if(u={lane:2,revertLane:le(),gesture:null,action:u,hasEagerState:!1,eagerState:null,next:null},Fu(n)){if(i)throw Error(o(479))}else i=tr(n,a,u,2),i!==null&&gi(i,n,2)}function Fu(n){var i=n.alternate;return n===lt||i!==null&&i===lt}function _0(n,i){aa=mc=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function S0(n,i,a){if((a&4194048)!==0){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,F(n,a)}}function nh(n,i,a,u){i=n.memoizedState,a=a(u,i),a=a==null?i:qh({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}function x0(n,i,a,u,d,p,w){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,p,w):i.prototype&&i.prototype.isPureReactComponent?!pe(a,u)||!pe(d,p):!0}function M0(n,i,a,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,u),i.state!==n&&bp.enqueueReplaceState(i,i.state,null)}function Qs(n,i){var a=i;if("ref"in i){a={};for(var u in i)u!=="ref"&&(a[u]=i[u])}if(n=n.defaultProps){a===i&&(a=qh({},a));for(var d in n)a[d]===void 0&&(a[d]=n[d])}return a}function Uu(n,i){try{var a=n.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(u){setTimeout(function(){throw u})}}function w0(n,i,a){try{var u=n.onCaughtError;u(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function ih(n,i,a){return a=ir(a),a.tag=3,a.payload={element:null},a.callback=function(){Uu(n,i)},a}function T0(n){return n=ir(n),n.tag=3,n}function E0(n,i,a,u){var d=a.type.getDerivedStateFromError;if(typeof d=="function"){var p=u.value;n.payload=function(){return d(p)},n.callback=function(){w0(i,a,u)}}var w=a.stateNode;w!==null&&typeof w.componentDidCatch=="function"&&(n.callback=function(){w0(i,a,u),typeof d!="function"&&(Cs===null?Cs=new Set([this]):Cs.add(this));var k=u.stack;this.componentDidCatch(u.value,{componentStack:k!==null?k:""})})}function nx(n,i,a,u,d){if(a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(i=a.alternate,i!==null&&H(i,a,d,!0),a=$n.current,a!==null){switch(a.tag){case 31:case 13:case 19:return ui===null?Zu():a.alternate===null&&gn===0&&(gn=3),a.flags&=-257,a.flags|=65536,a.lanes=d,u===hc?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([u]):i.add(u),Hh(n,u,d)),!1;case 22:return a.flags|=65536,u===hc?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([u])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([u]):a.add(u)),Hh(n,u,d)),!1}throw Error(o(435,a.tag))}return Hh(n,u,d),Zu(),!1}if(mt)return i=$n.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=d,u!==dp&&(n=Error(o(422),{cause:u}),Jn(Ve(n,a)))):(u!==dp&&(i=Error(o(423),{cause:u}),Jn(Ve(i,a))),n=n.current.alternate,n.flags|=65536,d&=-d,n.lanes|=d,u=Ve(u,a),d=ih(n.stateNode,u,d),Oo(n,d),gn!==4&&(gn=2)),!1;var p=Error(o(520),{cause:u});if(p=Ve(p,a),Cl===null?Cl=[p]:Cl.push(p),gn!==4&&(gn=2),i===null)return!0;u=Ve(u,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,n=d&-d,a.lanes|=n,n=ih(a.stateNode,u,n),Oo(a,n),!1;case 1:if(i=a.type,p=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Cs===null||!Cs.has(p))))return a.flags|=65536,d&=-d,a.lanes|=d,d=T0(d),E0(d,n,a,u),Oo(a,d),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}function Cn(n,i,a,u){i.child=n===null?Sy(i,null,a,u):ao(i,n.child,a,u)}function A0(n,i,a,u,d){a=a.render;var p=i.ref;if("ref"in u){var w={};for(var k in u)k!=="ref"&&(w[k]=u[k])}else w=u;return Ct(i),u=Ue(n,i,a,w,p,d),k=Dt(),n!==null&&!Mn?(Sn(n,i,d),Br(n,i,d)):(mt&&k&&ke(i),i.flags|=1,Cn(n,i,u,d),i.child)}function R0(n,i,a,u,d){if(n===null){var p=a.type;return typeof p=="function"&&!Vh(p)&&p.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=p,C0(n,i,p,u,d)):(n=Ku(a.type,null,u,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(p=n.child,!ch(n,d)){var w=p.memoizedProps;if(a=a.compare,a=a!==null?a:pe,a(w,u)&&n.ref===i.ref)return Br(n,i,d)}return i.flags|=1,n=Hr(p,u),n.ref=i.ref,n.return=i,i.child=n}function C0(n,i,a,u,d){if(n!==null){var p=n.memoizedProps;if(pe(p,u)&&n.ref===i.ref)if(Mn=!1,i.pendingProps=u=p,ch(n,d))(n.flags&131072)!==0&&(Mn=!0);else return i.lanes=n.lanes,Br(n,i,d)}return rh(n,i,a,u,d)}function P0(n,i,a,u){var d=u.children,p=n!==null?n.memoizedState:null;if(n===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),u.mode==="hidden"){if((i.flags&128)!==0){if(p=p!==null?p.baseLanes|a:a,n!==null){for(u=i.child=n.child,d=0;u!==null;)d=d|u.lanes|u.childLanes,u=u.sibling;u=d&~p}else u=0,i.child=null;return I0(n,i,p,a,u)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},n!==null&&He(i,p!==null?p.cachePool:null),p!==null?ol(i,p):A(),Y(i);else return u=i.lanes=536870912,I0(n,i,p!==null?p.baseLanes|a:a,a,u)}else p!==null?(He(i,p.cachePool),ol(i,p),be(),i.memoizedState=null):(n!==null&&He(i,null),A(),be());return Cn(n,i,d,a),i.child}function ul(n,i){return n!==null&&n.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function I0(n,i,a,u,d){var p=_e();return p=p===null?null:{parent:br?an._currentValue:an._currentValue2,pool:p},i.memoizedState={baseLanes:a,cachePool:p},n!==null&&He(i,null),A(),Y(i),n!==null&&H(n,i,u,!0),i.childLanes=d,null}function Ou(n,i){return i=zu({mode:i.mode,children:i.children},n.mode),i.ref=n.ref,n.child=i,i.return=n,i}function N0(n,i,a){return ao(i,n.child,null,a),n=Ou(i,i.pendingProps),n.flags|=2,Ce(i),i.memoizedState=null,n}function ix(n,i,a){var u=i.pendingProps,d=(i.flags&128)!==0;if(i.flags&=-129,n===null){if(mt){if(u.mode==="hidden")return n=Ou(i,u),i.lanes=536870912,n.memoizedState={baseLanes:0,cachePool:null},ul(null,n);if(q(i),(n=Kt)?(n=W1(n,$i),n!==null&&(i.memoizedState={dehydrated:n,treeContext:xs!==null?{id:Sr,overflow:xr}:null,retryLane:536870912,hydrationErrors:null},a=kv(n),a.return=i,i.child=a,Ln=i,Kt=null)):n=null,n===null)throw _t(i);return i.lanes=536870912,null}return Ou(i,u)}var p=n.memoizedState;if(p!==null){var w=p.dehydrated;if(q(i),d)if(i.flags&256)i.flags&=-257,i=N0(n,i,a);else if(i.memoizedState!==null)i.child=n.child,i.flags|=128,i=null;else throw Error(o(558));else if(Mn||H(n,i,a,!1),d=(a&n.childLanes)!==0,Mn||d){if(Es.current===null){if(u=Xt,u!==null&&(w=B(u,a),w!==0&&w!==p.retryLane))throw p.retryLane=w,nr(n,w),gi(u,n,w),_p;Zu()}i=N0(n,i,a)}else n=p.treeContext,Xn&&(Kt=z1(w),Ln=i,mt=!0,ws=null,$i=!1,n!==null&&Ne(i,n)),i=Ou(i,u),i.flags|=134221824;return i}return n=Hr(n.child,{mode:u.mode,children:u.children}),n.ref=i.ref,i.child=n,n.return=i,n}function Bo(n,i){var a=i.ref;if(a===null)n!==null&&n.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(o(284));(n===null||n.ref!==a)&&(i.flags|=4194816)}}function rh(n,i,a,u,d){return Ct(i),a=Ue(n,i,a,u,void 0,d),u=Dt(),n!==null&&!Mn?(Sn(n,i,d),Br(n,i,d)):(mt&&u&&ke(i),i.flags|=1,Cn(n,i,a,d),i.child)}function L0(n,i,a,u,d,p){return Ct(i),i.updateQueue=null,a=rn(i,u,a,d),pt(n),u=Dt(),n!==null&&!Mn?(Sn(n,i,p),Br(n,i,p)):(mt&&u&&ke(i),i.flags|=1,Cn(n,i,a,p),i.child)}function D0(n,i,a,u,d){if(Ct(i),i.stateNode===null){var p=Ko,w=a.contextType;typeof w=="object"&&w!==null&&(p=at(w)),p=new a(u,p),i.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=bp,i.stateNode=p,p._reactInternals=i,p=i.stateNode,p.props=u,p.state=i.memoizedState,p.refs={},ms(i),w=a.contextType,p.context=typeof w=="object"&&w!==null?at(w):Ko,p.state=i.memoizedState,w=a.getDerivedStateFromProps,typeof w=="function"&&(nh(i,a,w,u),p.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(w=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),w!==p.state&&bp.enqueueReplaceState(p,p.state,null),Ks(i,u,p,d),gs(),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308),u=!0}else if(n===null){p=i.stateNode;var k=i.memoizedProps,Q=Qs(a,k);p.props=Q;var fe=p.context,ge=a.contextType;w=Ko,typeof ge=="object"&&ge!==null&&(w=at(ge));var Re=a.getDerivedStateFromProps;ge=typeof Re=="function"||typeof p.getSnapshotBeforeUpdate=="function",k=i.pendingProps!==k,ge||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(k||fe!==w)&&M0(i,p,u,w),Ts=!1;var De=i.memoizedState;p.state=De,Ks(i,u,p,d),gs(),fe=i.memoizedState,k||De!==fe||Ts?(typeof Re=="function"&&(nh(i,a,Re,u),fe=i.memoizedState),(Q=Ts||x0(i,a,Q,u,De,fe,w))?(ge||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(i.flags|=4194308)):(typeof p.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=fe),p.props=u,p.state=fe,p.context=w,u=Q):(typeof p.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{p=i.stateNode,Uo(n,i),w=i.memoizedProps,ge=Qs(a,w),p.props=ge,Re=i.pendingProps,De=p.context,fe=a.contextType,Q=Ko,typeof fe=="object"&&fe!==null&&(Q=at(fe)),k=a.getDerivedStateFromProps,(fe=typeof k=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(w!==Re||De!==Q)&&M0(i,p,u,Q),Ts=!1,De=i.memoizedState,p.state=De,Ks(i,u,p,d),gs();var yt=i.memoizedState;w!==Re||De!==yt||Ts||n!==null&&n.dependencies!==null&&Hn(n.dependencies)?(typeof k=="function"&&(nh(i,a,k,u),yt=i.memoizedState),(ge=Ts||x0(i,a,ge,u,De,yt,Q)||n!==null&&n.dependencies!==null&&Hn(n.dependencies))?(fe||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(u,yt,Q),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(u,yt,Q)),typeof p.componentDidUpdate=="function"&&(i.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof p.componentDidUpdate!="function"||w===n.memoizedProps&&De===n.memoizedState||(i.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||w===n.memoizedProps&&De===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=yt),p.props=u,p.state=yt,p.context=Q,u=ge):(typeof p.componentDidUpdate!="function"||w===n.memoizedProps&&De===n.memoizedState||(i.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||w===n.memoizedProps&&De===n.memoizedState||(i.flags|=1024),u=!1)}return p=u,Bo(n,i),u=(i.flags&128)!==0,p||u?(p=i.stateNode,a=u&&typeof a.getDerivedStateFromError!="function"?null:p.render(),i.flags|=1,n!==null&&u?(i.child=ao(i,n.child,null,d),i.child=ao(i,null,a,d)):Cn(n,i,a,d),i.memoizedState=p.state,n=i.child):n=Br(n,i,d),n}function k0(n,i,a,u){return dn(),i.flags|=256,Cn(n,i,a,u),i.child}function sh(n){return{baseLanes:n,cachePool:ot()}}function oh(n,i,a){return n=n!==null?n.childLanes&~a:0,i&&(n|=Li),n}function F0(n,i,a){var u=i.pendingProps,d=!1,p=(i.flags&128)!==0,w;if((w=p)||(w=n!==null&&n.memoizedState===null?!1:(Yn.current&2)!==0),w&&(d=!0,i.flags&=-129),w=(i.flags&32)!==0,i.flags&=-33,n===null){if(mt){if(d?J(i):be(),(n=Kt)?(n=X1(n,$i),n!==null&&(i.memoizedState={dehydrated:n,treeContext:xs!==null?{id:Sr,overflow:xr}:null,retryLane:536870912,hydrationErrors:null},a=kv(n),a.return=i,i.child=a,Ln=i,Kt=null)):n=null,n===null)throw _t(i);return rp(n)?i.lanes=32:i.lanes=536870912,null}return p=u.children,u=u.fallback,d?(be(),d=i.mode,p=zu({mode:"hidden",children:p},d),u=eo(u,d,a,null),p.return=i,u.return=i,p.sibling=u,i.child=p,u=i.child,u.memoizedState=sh(a),u.childLanes=oh(n,w,a),i.memoizedState=Sp,ul(null,u)):(J(i),ah(i,p))}var k=n.memoizedState;if(k!==null){var Q=k.dehydrated;if(Q!==null)return rx(n,i,p,w,u,Q,k,a)}return d?(be(),d=u.fallback,p=i.mode,k=n.child,Q=k.sibling,u=Hr(k,{mode:"hidden",children:u.children}),u.subtreeFlags=k.subtreeFlags&1206910976,Q!==null?d=Hr(Q,d):(d=eo(d,p,a,null),d.flags|=2),d.return=i,u.return=i,u.sibling=d,i.child=u,ul(null,u),u=i.child,d=n.child.memoizedState,d===null?d=sh(a):(p=d.cachePool,p!==null?(k=br?an._currentValue:an._currentValue2,p=p.parent!==k?{parent:k,pool:k}:p):p=ot(),d={baseLanes:d.baseLanes|a,cachePool:p}),u.memoizedState=d,u.childLanes=oh(n,w,a),i.memoizedState=Sp,ul(n.child,u)):(J(i),a=n.child,n=a.sibling,a=Hr(a,{mode:"visible",children:u.children}),a.return=i,a.sibling=null,n!==null&&(w=i.deletions,w===null?(i.deletions=[n],i.flags|=16):w.push(n)),i.child=a,i.memoizedState=null,a)}function ah(n,i){return i=zu({mode:"visible",children:i},n.mode),i.return=n,n.child=i}function zu(n,i){return n=t(22,n,null,i),n.lanes=0,n}function Bu(n,i,a){return ao(i,n.child,null,a),n=ah(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function rx(n,i,a,u,d,p,w,k){if(a)return i.flags&256?(J(i),i.flags&=-257,Bu(n,i,k)):i.memoizedState!==null?(be(),i.child=n.child,i.flags|=128,null):(be(),p=d.fallback,w=i.mode,d=zu({mode:"visible",children:d.children},w),p=eo(p,w,k,null),p.flags|=2,d.return=i,p.return=i,d.sibling=p,i.child=d,ao(i,n.child,null,k),d=i.child,d.memoizedState=sh(k),d.childLanes=oh(n,u,k),i.memoizedState=Sp,ul(null,d));if(J(i),rp(p))return u=N1(p).digest,u!==""&&(d=Error(o(419)),d.stack="",d.digest=u,Jn({value:d,source:null,stack:null})),Bu(n,i,k);if(Mn||H(n,i,k,!1),u=(k&n.childLanes)!==0,Mn||u){if(Es.current!==null)return Bu(n,i,k);if(u=Xt,u!==null&&(d=B(u,k),d!==0&&d!==w.retryLane))throw w.retryLane=d,nr(n,d),gi(u,n,d),_p;return ip(p)||Zu(),Bu(n,i,k)}return ip(p)?(i.flags|=192,i.child=n.child,null):(n=w.treeContext,Xn&&(Kt=B1(p),Ln=i,mt=!0,ws=null,$i=!1,n!==null&&Ne(i,n)),i=ah(i,d.children),i.flags|=134221824,i)}function U0(n,i,a){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),Bn(n.return,i,a)}function O0(n){for(var i=null;n!==null;){var a=n.alternate;a!==null&&ze(a)===null&&(i=n),n=n.sibling}return i}function Hu(n,i,a,u,d,p){var w=n.memoizedState;w===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:d,treeForkCount:p}:(w.isBackwards=i,w.rendering=null,w.renderingStartTime=0,w.last=u,w.tail=a,w.tailMode=d,w.treeForkCount=p)}function lh(n){var i=n.child;for(n.child=null;i!==null;){var a=i.sibling;i.sibling=n.child,n.child=i,i=a}}function uh(n,i,a){var u=i.pendingProps,d=u.revealOrder,p=u.tail;u=u.children;var w=Yn.current;if(i.flags&128)return Se(i,w),null;var k=(w&2)!==0;if(k?(w=w&1|2,i.flags|=128):w&=1,Se(i,w),d==="backwards"&&n!==null?(lh(n),Cn(n,i,u,a),lh(n)):Cn(n,i,u,a),u=mt?Sl:0,!k&&n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&U0(n,a,i);else if(n.tag===19)U0(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}switch(d){case"backwards":a=O0(i.child),a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null,lh(i)),Hu(i,!0,d,null,p,u);break;case"unstable_legacy-backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&ze(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Hu(i,!0,a,null,p,u);break;case"together":Hu(i,!1,null,null,void 0,u);break;case"independent":i.memoizedState=null;break;default:a=O0(i.child),a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),Hu(i,!1,d,a,p,u)}return i.child}function z0(n,i,a){var u=i.pendingProps;return Wt(i,i.type,u.value),Cn(n,i,u.children,a),i.child}function Br(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Rs|=i.lanes,(a&i.childLanes)===0)if(n!==null){if(H(n,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(n!==null&&i.child!==n.child)throw Error(o(153));if(i.child!==null){for(n=i.child,a=Hr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Hr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function ch(n,i){return(n.lanes&i)!==0?!0:(n=n.dependencies,!!(n!==null&&Hn(n)))}function sx(n,i,a){switch(i.tag){case 3:Qe(i,i.stateNode.containerInfo),Wt(i,an,n.memoizedState.cache),dn();break;case 27:case 5:$e(i);break;case 4:Qe(i,i.stateNode.containerInfo);break;case 10:Wt(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,q(i),null;break;case 13:var u=i.memoizedState;if(u!==null){if(u.dehydrated!==null)return J(i),i.flags|=128,null;u=H(n,i,a,!1);var d=i.child.childLanes;return u||(a&d)!==0?F0(n,i,a):(J(i),n=Br(n,i,a),n!==null?n.sibling:null)}J(i);break;case 19:if(i.flags&128)return uh(n,i,a);if(d=(n.flags&128)!==0,u=(a&i.childLanes)!==0,u||(H(n,i,a,!1),u=(a&i.childLanes)!==0),d){if(u)return uh(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Se(i,Yn.current),u)break;return null;case 22:return i.lanes=0,P0(n,i,a,i.pendingProps);case 24:Wt(i,an,n.memoizedState.cache)}return Br(n,i,a)}function B0(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps)Mn=!0;else{if(!ch(n,a)&&(i.flags&128)===0)return Mn=!1,sx(n,i,a);Mn=(n.flags&131072)!==0}else Mn=!1,mt&&(i.flags&1048576)!==0&&Pe(i,Sl,i.index);switch(i.lanes=0,i.tag){case 16:e:{var u=i.pendingProps;if(n=Ae(i.elementType),i.type=n,typeof n=="function")Vh(n)?(u=Qs(n,u),i.tag=1,i=D0(null,i,n,u,a)):(i.tag=0,i=rh(null,i,n,u,a));else{if(n!=null){var d=n.$$typeof;if(d===Yh){i.tag=11,i=A0(null,i,n,u,a);break e}else if(d===Jh){i.tag=14,i=R0(null,i,n,u,a);break e}else if(d===Vr){i.tag=10,i.type=n,i=z0(null,i,a);break e}}throw i=_(n)||n,Error(o(306,i,""))}}return i;case 0:return rh(n,i,i.type,i.pendingProps,a);case 1:return u=i.type,d=Qs(u,i.pendingProps),D0(n,i,u,d,a);case 3:e:{if(Qe(i,i.stateNode.containerInfo),n===null)throw Error(o(387));var p=i.pendingProps;d=i.memoizedState,u=d.element,Uo(n,i),Ks(i,p,null,a);var w=i.memoizedState;if(p=w.cache,Wt(i,an,p),p!==d.cache&&Kn(i,[an],a,!0),gs(),p=w.element,Xn&&d.isDehydrated)if(d={element:p,isDehydrated:!1,cache:w.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=k0(n,i,p,a);break e}else if(p!==u){u=Ve(Error(o(424)),i),Jn(u),i=k0(n,i,p,a);break e}else for(Xn&&(Kt=O1(i.stateNode.containerInfo),Ln=i,mt=!0,ws=null,$i=!0),a=Sy(i,null,p,a),i.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling;else{if(dn(),p===u){i=Br(n,i,a);break e}Cn(n,i,p,a)}i=i.child}return i;case 26:if(Wi)return Bo(n,i),n===null?(a=ly(i.type,null,i.pendingProps,null))?i.memoizedState=a:mt||(i.stateNode=fy(i.type,i.pendingProps,Ms.current,i)):i.memoizedState=ly(i.type,n.memoizedProps,i.pendingProps,n.memoizedState),null;case 27:if(on)return $e(i),n===null&&on&&mt&&(u=i.stateNode=hy(i.type,i.pendingProps,Ms.current,qn.current,!1),Ln=i,$i=!0,Kt=H1(i.type,u,Kt)),Cn(n,i,i.pendingProps.children,a),Bo(n,i),n===null&&(i.flags|=4194304),i.child;case 5:return n===null&&mt&&(lM(i.type,i.pendingProps,qn.current),(d=u=Kt)&&(u=V1(u,i.type,i.pendingProps,$i),u!==null?(i.stateNode=u,Ln=i,Kt=U1(u),$i=!1,d=!0):d=!1),d||_t(i)),$e(i),d=i.type,p=i.pendingProps,w=n!==null?n.memoizedProps:null,u=p.children,tc(d,p)?u=null:w!==null&&tc(d,w)&&(i.flags|=32),i.memoizedState!==null&&(d=Ue(n,i,Bt,null,null,a),br?Wr._currentValue=d:Wr._currentValue2=d),Bo(n,i),Cn(n,i,u,a),i.child;case 6:return n===null&&mt&&(uM(i.pendingProps,qn.current),(n=a=Kt)&&(a=G1(a,i.pendingProps,$i),a!==null?(i.stateNode=a,Ln=i,Kt=null,n=!0):n=!1),n||_t(i)),null;case 13:return F0(n,i,a);case 4:return Qe(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=ao(i,null,u,a):Cn(n,i,u,a),i.child;case 11:return A0(n,i,i.type,i.pendingProps,a);case 7:return u=i.pendingProps,Bo(n,i),Cn(n,i,u,a),i.child;case 8:return Cn(n,i,i.pendingProps.children,a),i.child;case 12:return Cn(n,i,i.pendingProps.children,a),i.child;case 10:return z0(n,i,a);case 9:return d=i.type._context,u=i.pendingProps.children,Ct(i),d=at(d),u=u(d),i.flags|=1,Cn(n,i,u,a),i.child;case 14:return R0(n,i,i.type,i.pendingProps,a);case 15:return C0(n,i,i.type,i.pendingProps,a);case 19:return uh(n,i,a);case 31:return ix(n,i,a);case 22:return P0(n,i,a,i.pendingProps);case 24:return Ct(i),u=at(an),n===null?(d=_e(),d===null&&(d=Xt,p=Xe(),d.pooledCache=p,p.refCount++,p!==null&&(d.pooledCacheLanes|=a),d=p),i.memoizedState={parent:u,cache:d},ms(i),Wt(i,an,d)):((n.lanes&a)!==0&&(Uo(n,i),Ks(i,null,null,a),gs()),d=n.memoizedState,p=i.memoizedState,d.parent!==u?(d={parent:u,cache:u},i.memoizedState=d,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=d),Wt(i,an,u)):(u=p.cache,Wt(i,an,u),u!==d.cache&&Kn(i,[an],a,!0))),Cn(n,i,i.pendingProps.children,a),i.child;case 30:return i.stateNode===null&&(i.stateNode={autoName:null,paired:null,clones:null,ref:null}),u=i.pendingProps,u.name!=null&&u.name!=="auto"?i.flags|=n===null?18882560:18874368:mt&&ke(i),n!==null&&n.memoizedProps.name!==u.name?i.flags|=4194816:Bo(n,i),Cn(n,i,u.children,a),i.child;case 29:throw i.pendingProps}throw Error(o(156,i.tag))}function rr(n){n.flags|=4}function Vu(n){_r&&(n.flags|=8)}function H0(n,i){if(n!==null&&n.child===i.child)return!1;if((i.flags&16)!==0)return!0;for(n=i.child;n!==null;){if((n.flags&8218)!==0||(n.subtreeFlags&8218)!==0)return!0;n=n.sibling}return!1}function fh(n,i,a,u){if(sn)for(a=i.child;a!==null;){if(a.tag===5||a.tag===6)ep(n,a.stateNode);else if(!(a.tag===4||on&&a.tag===27)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}else if(_r)for(var d=i.child;d!==null;){if(d.tag===5){var p=d.stateNode;a&&u&&(p=iy(p,d.type,d.memoizedProps)),ep(n,p)}else if(d.tag===6)p=d.stateNode,a&&u&&(p=ry(p,d.memoizedProps)),ep(n,p);else if(d.tag!==4){if(d.tag===22&&d.memoizedState!==null)p=d.child,p!==null&&(p.return=d),fh(n,d,!0,!0);else if(d.child!==null){d.child.return=d,d=d.child;continue}}if(d===i)break;for(;d.sibling===null;){if(d.return===null||d.return===i)return;d=d.return}d.sibling.return=d.return,d=d.sibling}}function V0(n,i,a,u){var d=!1;if(_r)for(var p=i.child;p!==null;){if(p.tag===5){var w=p.stateNode;a&&u&&(w=iy(w,p.type,p.memoizedProps)),ty(n,w)}else if(p.tag===6)w=p.stateNode,a&&u&&(w=ry(w,p.memoizedProps)),ty(n,w);else if(p.tag!==4){if(p.tag===22&&p.memoizedState!==null)d=p.child,d!==null&&(d.return=p),V0(n,p,!0,!0),d=!0;else if(p.child!==null){p.child.return=p,p=p.child;continue}}if(p===i)break;for(;p.sibling===null;){if(p.return===null||p.return===i)return d;p=p.return}p.sibling.return=p.return,p=p.sibling}return d}function G0(n,i){if(_r&&H0(n,i)){n=i.stateNode;var a=n.containerInfo,u=ey();V0(u,i,!1,!1),n.pendingChildren=u,rr(i),I1(a,u)}}function dh(n,i,a,u){if(sn)n.memoizedProps!==u&&rr(i);else if(_r){var d=n.stateNode,p=n.memoizedProps;if((n=H0(n,i))||p!==u){var w=qn.current;p=P1(d,a,p,u,!n,null),p===d?i.stateNode=d:(Vu(i),qv(p,a,u,w)&&rr(i),i.stateNode=p,n&&fh(p,i,!1,!1))}else i.stateNode=d}}function hh(n,i,a,u,d){if((n.mode&32)!==0&&(a===null?Gx(i,u):Wx(i,a,u))){if(n.flags|=16777216,(d&335544128)===d||tp(i,u))if(Yv(n.stateNode,i,u))n.flags|=8192;else if(wv())n.flags|=8192;else throw oo=hc,gp}else n.flags&=-16777217}function W0(n,i){if(dM(i)){if(n.flags|=16777216,!dy(i))if(wv())n.flags|=8192;else throw oo=hc,gp}else n.flags&=-16777217}function Gu(n,i){i!==null&&(n.flags|=4),n.flags&16384&&(i=n.tag!==22?N():536870912,n.lanes|=i,ca|=i)}function cl(n,i){if(!mt)switch(n.tailMode){case"visible":break;case"collapsed":for(var a=n.tail,u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null;break;default:for(i=n.tail,a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null}}function Yt(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,u=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,u|=d.subtreeFlags&1206910976,u|=d.flags&1206910976,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=u,n.childLanes=a,i}function ox(n,i,a){var u=i.pendingProps;switch(We(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yt(i),null;case 1:return Yt(i),null;case 3:return a=i.stateNode,u=null,n!==null&&(u=n.memoizedState.cache),i.memoizedState.cache!==u&&(i.flags|=2048),hn(an),Vt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(n===null||n.child===null)&&(qt(i)?rr(i):n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Gt())),G0(n,i),Yt(i),null;case 26:if(Wi){var d=i.type,p=i.memoizedState;return n===null?(rr(i),p!==null?(Yt(i),W0(i,p)):(Yt(i),hh(i,d,null,u,a))):p?p!==n.memoizedState?(rr(i),Yt(i),W0(i,p)):(Yt(i),i.flags&=-16777217):(p=n.memoizedProps,sn?p!==u&&rr(i):dh(n,i,d,u),Yt(i),hh(i,d,p,u,a)),null}case 27:if(on){if(Tt(i),a=Ms.current,d=i.type,n!==null&&i.stateNode!=null)sn?n.memoizedProps!==u&&rr(i):dh(n,i,d,u);else{if(!u){if(i.stateNode===null)throw Error(o(166));return Yt(i),i.subtreeFlags&=-33554433,null}n=qn.current,qt(i)?ht(i,n):(n=hy(d,u,a,n,!0),i.stateNode=n,rr(i))}return Yt(i),i.subtreeFlags&=-33554433,null}case 5:if(Tt(i),d=i.type,n!==null&&i.stateNode!=null)dh(n,i,d,u);else{if(!u){if(i.stateNode===null)throw Error(o(166));return Yt(i),i.subtreeFlags&=-33554433,null}if(p=qn.current,qt(i))ht(i,p),nM(i.stateNode,d,u,p)&&(i.flags|=64);else{var w=kx(d,u,Ms.current,p,i);Vu(i),fh(w,i,!1,!1),i.stateNode=w,qv(w,d,u,p)&&rr(i)}}return Yt(i),i.subtreeFlags&=-33554433,hh(i,i.type,n===null?null:n.memoizedProps,i.pendingProps,a),null;case 6:if(n&&i.stateNode!=null)a=n.memoizedProps,sn?a!==u&&rr(i):_r&&(a!==u?(n=Ms.current,a=qn.current,Vu(i),i.stateNode=$v(u,n,a,i)):i.stateNode=n.stateNode);else{if(typeof u!="string"&&i.stateNode===null)throw Error(o(166));if(n=Ms.current,a=qn.current,qt(i)){if(!Xn)throw Error(o(176));if(n=i.stateNode,a=i.memoizedProps,u=null,d=Ln,d!==null)switch(d.tag){case 27:case 5:u=d.memoizedProps}$1(n,a,i,u)||_t(i,!0)}else Vu(i),i.stateNode=$v(u,n,a,i)}return Yt(i),null;case 31:if(a=i.memoizedState,n===null||n.memoizedState!==null){if(u=qt(i),a!==null){if(n===null){if(!u)throw Error(o(318));if(!Xn)throw Error(o(556));if(n=i.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(o(557));Y1(n,i)}else dn(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Yt(i),n=!1}else a=Gt(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=a),n=!0;if(!n)return i.flags&256?(Ce(i),i):(Ce(i),null);if((i.flags&128)!==0)throw Error(o(558))}return Yt(i),null;case 13:if(u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(d=qt(i),u!==null&&u.dehydrated!==null){if(n===null){if(!d)throw Error(o(318));if(!Xn)throw Error(o(344));if(d=i.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(o(317));j1(d,i)}else dn(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Yt(i),d=!1}else d=Gt(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=d),d=!0;if(!d)return i.flags&256?(Ce(i),i):(Ce(i),null)}return Ce(i),(i.flags&128)!==0?(i.lanes=a,i):(a=u!==null,n=n!==null&&n.memoizedState!==null,a&&(u=i.child,d=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(d=u.alternate.memoizedState.cachePool.pool),p=null,u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(p=u.memoizedState.cachePool.pool),p!==d&&(u.flags|=2048)),a!==n&&a&&(i.child.flags|=8192),Gu(i,i.updateQueue),Yt(i),null);case 4:return Vt(),G0(n,i),n===null&&zx(i.stateNode.containerInfo),i.flags|=67108864,Yt(i),null;case 10:return hn(i.type),Yt(i),null;case 19:if(Ie(i),u=i.memoizedState,u===null)return Yt(i),null;if(d=(i.flags&128)!==0,p=u.rendering,p===null)if(d)cl(u,!1);else{if(gn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(p=ze(n),p!==null){for(i.flags|=128,cl(u,!1),n=p.updateQueue,i.updateQueue=n,Gu(i,n),i.subtreeFlags=0,n=a,a=i.child;a!==null;)Dv(a,n),a=a.sibling;return Se(i,Yn.current&1|2),mt&&re(i,u.treeForkCount),i.child}n=n.sibling}u.tail!==null&&vi()>Pl&&(i.flags|=128,d=!0,cl(u,!1),i.lanes=4194304)}else{if(!d)if(n=ze(p),n!==null){if(i.flags|=128,d=!0,n=n.updateQueue,i.updateQueue=n,Gu(i,n),cl(u,!0),u.tail===null&&u.tailMode!=="collapsed"&&u.tailMode!=="visible"&&!p.alternate&&!mt)return Yt(i),null}else 2*vi()-u.renderingStartTime>Pl&&a!==536870912&&(i.flags|=128,d=!0,cl(u,!1),i.lanes=4194304);u.isBackwards?(p.sibling=i.child,i.child=p):(n=u.last,n!==null?n.sibling=p:i.child=p,u.last=p)}if(u.tail!==null){n=u.tail;e:{for(a=n;a!==null;){if(a.alternate!==null){a=!1;break e}a=a.sibling}a=!0}return u.rendering=n,u.tail=n.sibling,u.renderingStartTime=vi(),n.sibling=null,p=Yn.current,p=d?p&1|2:p&1,u.tailMode==="visible"||u.tailMode==="collapsed"||!a||mt?Se(i,p):(a=p,x($n,i),x(Yn,a),ui===null&&(ui=i)),mt&&re(i,u.treeForkCount),n}return Yt(i),null;case 22:case 23:return Ce(i),z(),u=i.memoizedState!==null,n!==null?n.memoizedState!==null!==u&&(i.flags|=8192):u&&(i.flags|=8192),u?(a&536870912)!==0&&(i.flags&128)===0&&(Yt(i),i.subtreeFlags&6&&(i.flags|=8192)):Yt(i),a=i.updateQueue,a!==null&&Gu(i,a.retryQueue),a=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),u=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(u=i.memoizedState.cachePool.pool),u!==a&&(i.flags|=2048),n!==null&&g(so),null;case 24:return a=null,n!==null&&(a=n.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),hn(an),Yt(i),null;case 25:return null;case 30:return i.flags|=33554432,Yt(i),null}throw Error(o(156,i.tag))}function ax(n,i){switch(We(i),i.tag){case 1:return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return hn(an),Vt(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 26:case 27:case 5:return Tt(i),null;case 31:if(i.memoizedState!==null){if(Ce(i),i.alternate===null)throw Error(o(340));dn()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 13:if(Ce(i),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(o(340));dn()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ie(i),n=i.flags,n&65536?(i.flags=n&-65537|128,n=i.memoizedState,n!==null&&(n.rendering=null,n.tail=null),i.flags|=4,i):null;case 4:return Vt(),null;case 10:return hn(i.type),null;case 22:case 23:return Ce(i),z(),n!==null&&g(so),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 24:return hn(an),null;case 25:return null;default:return null}}function X0(n,i){switch(We(i),i.tag){case 3:hn(an),Vt();break;case 26:case 27:case 5:Tt(i);break;case 4:Vt();break;case 31:i.memoizedState!==null&&Ce(i);break;case 13:Ce(i);break;case 19:Ie(i);break;case 10:hn(i.type);break;case 22:case 23:Ce(i),z(),n!==null&&g(so);break;case 24:hn(an)}}function fl(n,i){try{var a=i.updateQueue,u=a!==null?a.lastEffect:null;if(u!==null){var d=u.next;a=d;do{if((a.tag&n)===n){u=void 0;var p=a.create,w=a.inst;u=p(),w.destroy=u}a=a.next}while(a!==d)}}catch(k){It(i,i.return,k)}}function vs(n,i,a){try{var u=i.updateQueue,d=u!==null?u.lastEffect:null;if(d!==null){var p=d.next;u=p;do{if((u.tag&n)===n){var w=u.inst,k=w.destroy;if(k!==void 0){w.destroy=void 0,d=i;var Q=a,fe=k;try{fe()}catch(ge){It(d,Q,ge)}}}u=u.next}while(u!==p)}}catch(ge){It(i,i.return,ge)}}function q0(n){var i=n.updateQueue;if(i!==null){var a=n.stateNode;try{Lu(i,a)}catch(u){It(n,n.return,u)}}}function $0(n,i,a){a.props=Qs(n.type,n.memoizedProps),a.state=n.memoizedState;try{a.componentWillUnmount()}catch(u){It(n,i,u)}}function gr(n,i){try{var a=n.ref;if(a!==null){switch(n.tag){case 26:case 27:case 5:var u=vl(n.stateNode);break;case 30:var d=n.stateNode,p=K(n.memoizedProps,d);(d.ref===null||d.ref.name!==p)&&(d.ref=Kv(p)),u=d.ref;break;case 7:n.stateNode===null&&(n.stateNode=A1(n)),u=n.stateNode;break;default:u=n.stateNode}typeof a=="function"?n.refCleanup=a(u):a.current=u}}catch(w){It(n,i,w)}}function Gn(n,i){var a=n.ref,u=n.refCleanup;if(a!==null)if(typeof u=="function")try{u()}catch(d){It(n,i,d)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(d){It(n,i,d)}else a.current=null}function Y0(){var n=ei;return ei=!1,n}function dl(n,i){if((n.tag===5||n.tag===27||n.tag===6)&&n.alternate===null&&i!==null)for(var a=0;a<i.length;a++)Qv(n.stateNode,i[a])}function j0(n){for(var i=n.return;i!==null&&(mh(i)&&Qv(n.stateNode,i.stateNode),!ph(i));)i=i.return}function hl(n){for(var i=n.return;i!==null&&(mh(i)&&C1(n.stateNode,i.stateNode),!ph(i));)i=i.return}function ph(n){return n.tag===5||n.tag===3||(on?n.tag===27:!1)}function mh(n){return n&&n.tag===7&&n.stateNode!==null}function gh(n){var i=n.type,a=n.memoizedProps,u=n.stateNode;try{o1(u,i,a,n)}catch(d){It(n,n.return,d)}}function vh(n,i,a){try{a1(n.stateNode,n.type,a,i,n)}catch(u){It(n,n.return,u)}}function Z0(n){return n.tag===5||n.tag===3||(Wi?n.tag===26:!1)||(on?n.tag===27&&Zo(n.type):!1)||n.tag===4}function yh(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Z0(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(on&&n.tag===27&&Zo(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function bh(n,i,a,u){var d=n.tag;if(d===5||d===6)d=n.stateNode,i?u1(a,d,i):r1(a,d),dl(n,u),ei=!0;else if(d!==4&&(on&&d===27&&(dl(n,u),u=null,Zo(n.type)&&(a=n.stateNode,i=null)),n=n.child,n!==null))for(bh(n,i,a,u),n=n.sibling;n!==null;)bh(n,i,a,u),n=n.sibling}function Wu(n,i,a,u){var d=n.tag;if(d===5||d===6)d=n.stateNode,i?l1(a,d,i):i1(a,d),dl(n,u),ei=!0;else if(d!==4&&(on&&d===27&&(dl(n,u),u=null,Zo(n.type)&&(a=n.stateNode)),n=n.child,n!==null))for(Wu(n,i,a,u),n=n.sibling;n!==null;)Wu(n,i,a,u),n=n.sibling}function _h(n,i){if(n.tag===5||on&&n.tag===27)dl(n,i);else if(n.tag!==4&&(n=n.child,n!==null))for(_h(n,i),n=n.sibling;n!==null;)_h(n,i),n=n.sibling}function J0(n,i,a){n=n.containerInfo;try{ny(n,a)}catch(u){It(i,i.return,u)}}function K0(n){var i=n.stateNode,a=n.memoizedProps;try{pM(n.type,a,i,n)}catch(u){It(n,n.return,u)}}function Q0(n){(n.tag===30||(n.subtreeFlags&33554432)!==0)&&(yc=!0)}function ev(){var n=Mr;return Mr=null,n}function Ho(n,i,a,u,d){return yi=0,tv(n.child,i,a,u,d)}function tv(n,i,a,u,d){if(!sn)return!1;for(var p=!1;n!==null;){if(n.tag===5){var w=n.stateNode;if(u!==null){var k=np(w);u.push(k),nc(k)&&(p=!0)}else p||nc(np(w))&&(p=!0);yc=!0,Jv(w,yi===0?i:i+"_"+yi,a),yi++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&d||tv(n.child,i,a,u,d)&&(p=!0));n=n.sibling}return p}function vr(n,i){if(sn)for(;n!==null;)n.tag===5?g1(n.stateNode,n.memoizedProps):(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&i||vr(n.child,i)),n=n.sibling}function Xu(n){if((n.subtreeFlags&18874368)!==0)for(n=n.child;n!==null;){if((n.tag!==22||n.memoizedState===null)&&(Xu(n),n.tag===30&&(n.flags&18874368)!==0&&n.stateNode.paired)){var i=n.memoizedProps;if(i.name==null||i.name==="auto")throw Error(o(544));var a=i.name;i=ee(i.default,i.share),i!=="none"&&(Ho(n,a,i,null,!1)||vr(n.child,!1))}n=n.sibling}}function Sh(n,i){if(n.tag===30){var a=n.stateNode,u=n.memoizedProps,d=K(u,a),p=ee(u.default,a.paired?u.share:u.enter);p!=="none"?Ho(n,d,p,null,!1)?(Xu(n),a.paired||i||Wo(n,u.onEnter)):vr(n.child,!1):Xu(n)}else if((n.subtreeFlags&33554432)!==0)for(n=n.child;n!==null;)Sh(n,i),n=n.sibling;else Xu(n)}function xh(n){if(Ii!==null&&Ii.size!==0){var i=Ii;if((n.subtreeFlags&18874368)!==0)for(n=n.child;n!==null;){if(n.tag!==22||n.memoizedState===null){if(n.tag===30&&(n.flags&18874368)!==0){var a=n.memoizedProps,u=a.name;if(u!=null&&u!=="auto"){var d=i.get(u);if(d!==void 0){var p=ee(a.default,a.share);if(p!=="none"&&(Ho(n,u,p,null,!1)?(p=n.stateNode,d.paired=p,p.paired=d,Wo(n,a.onShare)):vr(n.child,!1)),i.delete(u),i.size===0)break}}}xh(n)}n=n.sibling}}}function Mh(n){if(n.tag===30){var i=n.memoizedProps,a=K(i,n.stateNode),u=Ii!==null?Ii.get(a):void 0,d=ee(i.default,u!==void 0?i.share:i.exit);d!=="none"&&(Ho(n,a,d,null,!1)?u!==void 0?(d=n.stateNode,u.paired=d,d.paired=u,Ii.delete(a),Wo(n,i.onShare)):Wo(n,i.onExit):vr(n.child,!1)),Ii!==null&&xh(n)}else if((n.subtreeFlags&33554432)!==0)for(n=n.child;n!==null;)Mh(n),n=n.sibling;else Ii!==null&&xh(n)}function nv(n){for(n=n.child;n!==null;){if(n.tag===30){var i=n.memoizedProps,a=K(i,n.stateNode);i=ee(i.default,i.update),n.flags&=-5,i!=="none"&&Ho(n,a,i,n.memoizedState=[],!1)}else(n.subtreeFlags&33554432)!==0&&nv(n);n=n.sibling}}function wh(n){if((n.subtreeFlags&18874368)!==0)for(n=n.child;n!==null;){if(n.tag!==22||n.memoizedState===null){if(n.tag===30&&(n.flags&18874368)!==0){var i=n.stateNode;i.paired!==null&&(i.paired=null,vr(n.child,!1))}wh(n)}n=n.sibling}}function qu(n){if(n.tag===30)n.stateNode.paired=null,vr(n.child,!1),wh(n);else if((n.subtreeFlags&33554432)!==0)for(n=n.child;n!==null;)qu(n),n=n.sibling;else wh(n)}function iv(n){for(n=n.child;n!==null;)n.tag===30?vr(n.child,!1):(n.subtreeFlags&33554432)!==0&&iv(n),n=n.sibling}function Th(n,i,a,u,d,p,w){if(!sn)return!1;for(var k=!1;i!==null;){if(i.tag===5){var Q=i.stateNode;if(p!==null&&yi<p.length){var fe=p[yi],ge=np(Q);(nc(fe)||nc(ge))&&(k=!0),(n.flags&4)===0&&S1(fe,ge)&&(n.flags|=4),x1(fe,ge)&&(n.flags|=32)}else n.flags|=32;(n.flags&4)!==0&&Jv(Q,yi===0?a:a+"_"+yi,d),k&&(n.flags&4)!==0||(Mr===null&&(Mr=[]),Mr.push(Q,yi===0?u:u+"_"+yi,i.memoizedProps)),yi++}else(i.tag!==22||i.memoizedState===null)&&(i.tag===30&&w?n.flags|=i.flags&32:Th(n,i.child,a,u,d,p,w)&&(k=!0));i=i.sibling}return k}function rv(n,i){for(n=n.child;n!==null;){if(n.tag===30){var a=n.memoizedProps,u=n.stateNode,d=K(a,u),p=ee(a.default,a.update);if(i){u=u.clones;var w=u===null?null:u.map(_1)}else w=n.memoizedState,n.memoizedState=null;u=n;var k=n.child;yi=0,d=Th(u,k,d,d,p,w,!1),(n.flags&4)!==0&&d&&(i||Wo(n,a.onUpdate))}else(n.subtreeFlags&33554432)!==0&&rv(n,i);n=n.sibling}}function lx(n,i,a){for(Lx(n.containerInfo),n=(a&335544064)===a,kn=i,i=n?9270:1024;kn!==null;){if(a=kn,n){var u=a.deletions;if(u!==null)for(var d=0;d<u.length;d++)n&&Mh(u[d])}if(a.alternate===null&&(a.flags&2)!==0)n&&Q0(a),$u(n);else{if(a.tag===22){if(u=a.alternate,a.memoizedState!==null){u!==null&&u.memoizedState===null&&n&&Mh(u),$u(n);continue}else if(u!==null&&u.memoizedState!==null){n&&Q0(a),$u(n);continue}}u=a.child,(a.subtreeFlags&i)!==0&&u!==null?(u.return=a,kn=u):(n&&nv(a),$u(n))}}Ii=null}function $u(n){for(;kn!==null;){var i=kn,a=n,u=i.alternate,d=i.flags;switch(i.tag){case 0:case 11:case 15:break;case 1:if((d&1024)!==0&&u!==null){a=void 0,d=u.memoizedProps,u=u.memoizedState;var p=i.stateNode;try{var w=Qs(i.type,d);a=p.getSnapshotBeforeUpdate(w,u),p.__reactInternalSnapshotBeforeUpdate=a}catch(k){It(i,i.return,k)}}break;case 3:(d&1024)!==0&&sn&&E1(i.stateNode.containerInfo);break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&u!==null&&(a=K(u.memoizedProps,u.stateNode),d=i.memoizedProps,d=ee(d.default,d.update),d!=="none"&&Ho(u,a,d,u.memoizedState=[],!0));break;default:if((d&1024)!==0)throw Error(o(163))}if(u=i.sibling,u!==null){u.return=i.return,kn=u;break}kn=i.return}}function sv(n,i,a){var u=a.flags;switch(a.tag){case 0:case 11:case 15:yr(n,a),u&4&&fl(5,a);break;case 1:if(yr(n,a),u&4)if(n=a.stateNode,i===null)try{n.componentDidMount()}catch(w){It(a,a.return,w)}else{var d=Qs(a.type,i.memoizedProps);i=i.memoizedState;try{n.componentDidUpdate(d,i,n.__reactInternalSnapshotBeforeUpdate)}catch(w){It(a,a.return,w)}}u&64&&q0(a),u&512&&gr(a,a.return);break;case 3:if(yr(n,a),u&64&&(u=a.updateQueue,u!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=vl(a.child.stateNode);break;case 1:n=a.child.stateNode}try{Lu(u,n)}catch(w){It(a,a.return,w)}}break;case 27:on&&i===null&&u&4&&K0(a);case 26:case 5:if(yr(n,a),i===null){if(u&4)gh(a);else if(u&64){n=a.type,i=a.memoizedProps,d=a.stateNode;try{K1(d,n,i,a)}catch(w){It(a,a.return,w)}}}u&512&&gr(a,a.return);break;case 12:yr(n,a);break;case 31:yr(n,a),u&4&&lv(n,a);break;case 13:yr(n,a),u&4&&uv(n,a),u&64&&(u=a.memoizedState,u!==null&&(u=u.dehydrated,u!==null&&(a=yx.bind(null,a),L1(u,a))));break;case 22:if(u=a.memoizedState!==null||Dn,!u){var p=i!==null&&i.memoizedState!==null||Ft;i=Dn,d=Ft,Dn=u,(Ft=p)&&!d?(u=on?2:0,(a.subtreeFlags&8772)!==0&&(u|=1),sr(n,a,u)):yr(n,a),Dn=i,Ft=d}break;case 30:yr(n,a),u&512&&gr(a,a.return);break;case 7:u&512&&gr(a,a.return);default:yr(n,a)}}function Eh(n,i){if(sn)for(n=n.child;n!==null;)ov(n,i),n=n.sibling}function ov(n,i){if(sn)switch(n.tag){case 5:case 26:try{var a=n.stateNode;i?d1(a):p1(n.stateNode,n.memoizedProps)}catch(p){It(n,n.return,p)}Ah(n,i);break;case 6:try{var u=n.stateNode;i?h1(u):m1(u,n.memoizedProps),ei=!0}catch(p){It(n,n.return,p)}break;case 18:try{var d=n.stateNode;i?oM(d):aM(n.stateNode)}catch(p){It(n,n.return,p)}break;case 22:case 23:n.memoizedState===null&&Eh(n,i);break;default:Eh(n,i)}}function Ah(n,i){if(sn&&n.subtreeFlags&67108864)for(n=n.child;n!==null;){var a=n,u=i;if(sn)switch(a.tag){case 4:ov(a,u);break;case 22:a.memoizedState===null&&Ah(a,u);break;default:Ah(a,u)}n=n.sibling}}function av(n){var i=n.alternate;i!==null&&(n.alternate=null,av(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&Vx(i)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Ti(n,i,a){for(a=a.child;a!==null;)Rh(n,i,a),a=a.sibling}function Rh(n,i,a){if(Ci&&typeof Ci.onCommitFiberUnmount=="function")try{Ci.onCommitFiberUnmount(_l,a)}catch{}switch(a.tag){case 26:if(Wi){Ft||Gn(a,i),Ti(n,i,a),a.memoizedState?cy(a.memoizedState):a.stateNode&&(Ft||op(a.stateNode));break}case 27:if(on){Ft||Gn(a,i),hl(a);var u=wn,d=bi;Zo(a.type)&&(wn=a.stateNode,bi=!1),Ti(n,i,a),py(a.stateNode,a.type,a.memoizedProps),wn=u,bi=d;break}case 5:Ft||Gn(a,i),hl(a);case 6:if(a.tag===6&&hl(a),sn){if(u=wn,d=bi,wn=null,Ti(n,i,a),wn=u,bi=d,wn!==null)if(bi)try{f1(wn,a.stateNode),ei=!0}catch(p){It(a,i,p)}else try{c1(wn,a.stateNode),ei=!0}catch(p){It(a,i,p)}}else Ti(n,i,a);break;case 18:sn&&wn!==null&&(bi?sM(wn,a.stateNode):rM(wn,a.stateNode));break;case 4:sn?(u=wn,d=bi,wn=a.stateNode.containerInfo,bi=!0,Ti(n,i,a),wn=u,bi=d):(_r&&J0(a.stateNode,a,ey()),Ti(n,i,a));break;case 0:case 11:case 14:case 15:vs(2,a,i),Ft||vs(4,a,i),Ti(n,i,a);break;case 1:Ft||(Gn(a,i),u=a.stateNode,typeof u.componentWillUnmount=="function"&&$0(a,i,u)),Ti(n,i,a);break;case 21:Ti(n,i,a);break;case 22:Ft=(u=Ft)||a.memoizedState!==null,Ti(n,i,a),Ft=u;break;case 30:Gn(a,i),Ti(n,i,a);break;case 7:Ft||Gn(a,i),Ti(n,i,a);break;default:Ti(n,i,a)}}function lv(n,i){if(Xn&&i.memoizedState===null&&(n=i.alternate,n!==null&&(n=n.memoizedState,n!==null))){n=n.dehydrated;try{eM(n)}catch(a){It(i,i.return,a)}}}function uv(n,i){if(Xn&&i.memoizedState===null&&(n=i.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{tM(n)}catch(a){It(i,i.return,a)}}function ux(n){switch(n.tag){case 31:case 13:case 19:var i=n.stateNode;return i===null&&(i=n.stateNode=new wy),i;case 22:return n=n.stateNode,i=n._retryCache,i===null&&(i=n._retryCache=new wy),i;default:throw Error(o(435,n.tag))}}function Yu(n,i){var a=ux(n);i.forEach(function(u){if(!a.has(u)){a.add(u);var d=bx.bind(null,n,u);u.then(d,d)}})}function Wn(n,i,a){var u=i.deletions;if(u!==null)for(var d=0;d<u.length;d++){var p=u[d],w=n,k=i;if(sn){var Q=k;e:for(;Q!==null;){switch(Q.tag){case 27:if(on){if(Zo(Q.type)){wn=Q.stateNode,bi=!1;break e}break}case 5:wn=Q.stateNode,bi=!1;break e;case 3:case 4:wn=Q.stateNode.containerInfo,bi=!0;break e}Q=Q.return}if(wn===null)throw Error(o(160));Rh(w,k,p),wn=null,bi=!1}else Rh(w,k,p);w=p.alternate,w!==null&&(w.return=null),p.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)cv(i,n,a),i=i.sibling}function cv(n,i,a){var u=n.alternate,d=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(d&4&&(u=n.updateQueue,u=u!==null?u.events:null,u!==null))for(var p=0;p<u.length;p++){var w=u[p];w.ref.impl=w.nextImpl}Wn(i,n,a),Qn(n),d&4&&(vs(3,n,n.return),fl(3,n),vs(5,n,n.return));break;case 1:Wn(i,n,a),Qn(n),d&512&&(Ft||u===null||Gn(u,u.return)),d&64&&Dn&&(n=n.updateQueue,n!==null&&(i=n.callbacks,i!==null&&(d=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=d===null?i:d.concat(i))));break;case 26:if(Wi){p=or,Wn(i,n,a),Qn(n),d&512&&(Ft||u===null||Gn(u,u.return)),d&4&&(a=u!==null?u.memoizedState:null,d=n.memoizedState,u===null?d===null?n.stateNode===null?n.stateNode=Dn?fy(n.type,n.memoizedProps,i.containerInfo,n):cM(p,n.type,n.memoizedProps,n):Dn||sp(p,n.type,n.stateNode):n.stateNode=uy(p,d,n.memoizedProps):a!==d?(a===null?(i=u.stateNode,i===null||Ft||op(i)):cy(a),d===null?Dn||sp(p,n.type,n.stateNode):uy(p,d,n.memoizedProps)):d===null&&n.stateNode!==null&&vh(n,n.memoizedProps,u.memoizedProps));break}case 27:if(on){Wn(i,n,a),Qn(n),d&512&&(Ft||u===null||Gn(u,u.return)),u!==null&&d&4&&vh(n,n.memoizedProps,u.memoizedProps);break}case 5:if(p=wr,wr=!1,Wn(i,n,a),wr=p,Qn(n),d&512&&(Ft||u===null||Gn(u,u.return)),sn){if(n.flags&32){i=n.stateNode;try{Zv(i),ei=!0}catch(ge){It(n,n.return,ge)}}d&4&&n.stateNode!=null&&(i=n.memoizedProps,vh(n,i,u!==null?u.memoizedProps:i)),d&1024&&(xp=!0)}else _r&&n.alternate!==null&&(n.alternate.stateNode=n.stateNode);break;case 6:if(Wn(i,n,a),Qn(n),d&4&&sn){if(n.stateNode===null)throw Error(o(162));i=n.memoizedProps,d=u!==null?u.memoizedProps:i,a=n.stateNode;try{s1(a,d,i),ei=!0}catch(ge){It(n,n.return,ge)}}break;case 3:if(ei=!1,Wi?(fM(),p=or,or=ic(i.containerInfo),Wn(i,n,a),or=p):Wn(i,n,a),Qn(n),d&4){if(sn&&Xn&&u!==null&&u.memoizedState.isDehydrated)try{Q1(i.containerInfo)}catch(ge){It(n,n.return,ge)}if(_r){d=i.containerInfo,i=i.pendingChildren;try{ny(d,i),ei=!0}catch(ge){It(n,n.return,ge)}}}xp&&(xp=!1,fv(n)),ei=!1;break;case 4:u=wr,wr=Dn,p=Y0(),Wi?(w=or,or=ic(n.stateNode.containerInfo),Wn(i,n,a),Qn(n),or=w):(Wn(i,n,a),Qn(n)),ei&&Al&&(bc=!0),ei=p,wr=u,d&4&&_r&&J0(n.stateNode,n,n.stateNode.pendingChildren);break;case 12:Wn(i,n,a),Qn(n);break;case 31:Wn(i,n,a),Qn(n),d&4&&(i=n.updateQueue,i!==null&&(n.updateQueue=null,Yu(n,i)));break;case 13:Wn(i,n,a),Qn(n),n.child.flags&8192&&n.memoizedState!==null!=(u!==null&&u.memoizedState!==null)&&(Tc=vi()),d&4&&(i=n.updateQueue,i!==null&&(n.updateQueue=null,Yu(n,i)));break;case 22:p=n.memoizedState!==null,w=u!==null&&u.memoizedState!==null;var k=Dn,Q=Ft,fe=wr;Dn=k||p,wr=fe||p,Ft=Q||w,Wn(i,n,a),Ft=Q,wr=fe,Dn=k,Qn(n),d&8192&&(i=n.stateNode,i._visibility=p?i._visibility&-2:i._visibility|1,!p||u===null||w||Dn||Ft||(i=on?2:0,a=w||Ft,u=Dn,w=Ft,Dn=p||Dn,Ft=a,ys(n,i),Dn=u,Ft=w),sn&&(p||!wr)&&Eh(n,p)),d&4&&(i=n.updateQueue,i!==null&&(d=i.retryQueue,d!==null&&(i.retryQueue=null,Yu(n,d))));break;case 19:Wn(i,n,a),Qn(n),d&4&&(i=n.updateQueue,i!==null&&(n.updateQueue=null,Yu(n,i)));break;case 30:d&512&&(Ft||u===null||Gn(u,u.return)),d=Y0(),p=Al,w=(a&335544064)===a,k=n.memoizedProps,Al=w&&ee(k.default,k.update)!=="none",Wn(i,n,a),Qn(n),w&&u!==null&&ei&&(n.flags|=4),Al=p,ei=d;break;case 21:break;case 7:d&512&&(Ft||u===null||Gn(u,u.return)),u&&u.stateNode!==null&&R1(n,u.stateNode);default:Wn(i,n,a),Qn(n)}}function Qn(n){var i=n.flags;if(i&2){try{for(var a,u=n.return;u!==null;){if(Z0(u)){a=u;break}u=u.return}u=null;for(var d=n.return;d!==null;){if(mh(d)){var p=d.stateNode;u===null?u=[p]:u.push(p)}if(ph(d))break;d=d.return}var w=u;if(sn){if(a==null)throw Error(o(160));switch(a.tag){case 27:if(on){var k=a.stateNode,Q=yh(n);Wu(n,Q,k,w);break}case 5:var fe=a.stateNode;a.flags&32&&(Zv(fe),a.flags&=-33);var ge=yh(n);Wu(n,ge,fe,w);break;case 3:case 4:var Re=a.stateNode.containerInfo,De=yh(n);bh(n,De,Re,w);break;default:throw Error(o(161))}}else _h(n,w)}catch(yt){It(n,n.return,yt)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function fv(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var i=n;fv(i),i.tag===5&&i.flags&1024&&Yx(i.stateNode),n=n.sibling}}function Vo(n,i){if(i.subtreeFlags&9270)for(i=i.child;i!==null;)dv(i,n),i=i.sibling;else rv(i,!1)}function dv(n,i){var a=n.alternate;if(a===null)Sh(n,!1);else switch(n.tag){case 3:if(Mp=Tr=!1,ev(),Vo(i,n),!Tr&&!bc){if(n=Mr,n!==null)for(var u=0;u<n.length;u+=3)v1(n[u],n[u+1],n[u+2]);y1(i.containerInfo),Mp=!0}Mr=null;break;case 5:Vo(i,n);break;case 4:u=Tr,Tr=!1,Vo(i,n),Tr&&(bc=!0),Tr=u;break;case 22:n.memoizedState===null&&(a.memoizedState!==null?Sh(n,!1):Vo(i,n));break;case 30:u=Tr;var d=ev();Tr=!1,Vo(i,n),Tr&&(n.flags|=4);var p=n.memoizedProps,w=n.stateNode;i=K(p,w),w=K(a.memoizedProps,w);var k=ee(p.default,p.update);k==="none"?a=!1:(p=a.memoizedState,a.memoizedState=null,a=n.child,yi=0,a=Th(n,a,i,w,k,p,!0),yi!==(p===null?0:p.length)&&(n.flags|=32)),(n.flags&4)!==0&&a?(Wo(n,n.memoizedProps.onUpdate),Mr=d):d!==null&&(d.push.apply(d,Mr),Mr=d),Tr=(n.flags&32)!==0?!0:u;break;default:Vo(i,n)}}function yr(n,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)sv(n,i.alternate,i),i=i.sibling}function ys(n,i){for(n=n.child;n!==null;){var a=n,u=i;switch(a.tag){case 0:case 11:case 14:case 15:vs(4,a,a.return),ys(a,u);break;case 1:Gn(a,a.return);var d=a.stateNode;typeof d.componentWillUnmount=="function"&&$0(a,a.return,d),ys(a,u);break;case 27:on&&(u&2)!==0&&py(a.stateNode,a.type,a.memoizedProps);case 5:Gn(a,a.return),a.tag!==5&&a.tag!==27||hl(a),ys(a,u);break;case 6:hl(a);break;case 26:Gn(a,a.return),Wi&&(d=a.stateNode,a.memoizedState!==null||d===null||Ft||op(d)),ys(a,u);break;case 22:a.memoizedState===null&&ys(a,u);break;case 30:Gn(a,a.return),ys(a,u);break;case 7:Gn(a,a.return);default:ys(a,u)}n=n.sibling}}function sr(n,i,a){for(a=(i.subtreeFlags&8772)!==0?a:a&-2,i=i.child;i!==null;){var u=i.alternate,d=n,p=i,w=p.flags,k=(a&1)!==0;switch(p.tag){case 0:case 11:case 15:sr(d,p,a),fl(4,p);break;case 1:if(sr(d,p,a),u=p,d=u.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(ge){It(u,u.return,ge)}if(u=p,d=u.updateQueue,d!==null){var Q=u.stateNode;try{var fe=d.shared.hiddenCallbacks;if(fe!==null)for(d.shared.hiddenCallbacks=null,d=0;d<fe.length;d++)Nu(fe[d],Q)}catch(ge){It(u,u.return,ge)}}k&&w&64&&q0(p),gr(p,p.return);break;case 27:on&&(a&2)!==0&&K0(p);case 5:p.tag!==5&&p.tag!==27||j0(p),sr(d,p,a),k&&u===null&&w&4&&gh(p),gr(p,p.return);break;case 6:j0(p);break;case 26:Wi&&(Q=p.stateNode,p.memoizedState!==null||Q===null||Dn||sp(ic(Q.ownerDocument),p.type,Q)),sr(d,p,a),k&&u===null&&w&4&&gh(p),gr(p,p.return);break;case 12:sr(d,p,a);break;case 31:sr(d,p,a),k&&w&4&&lv(d,p);break;case 13:sr(d,p,a),k&&w&4&&uv(d,p);break;case 22:p.memoizedState===null&&sr(d,p,a),gr(p,p.return);break;case 30:sr(d,p,a),gr(p,p.return);break;case 7:gr(p,p.return);default:sr(d,p,a)}i=i.sibling}}function Ch(n,i){var a=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),n=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(n=i.memoizedState.cachePool.pool),n!==a&&(n!=null&&n.refCount++,a!=null&&Ze(a))}function Ph(n,i){n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&Ze(n))}function Gi(n,i,a,u){var d=(a&335544064)===a;if(i.subtreeFlags&(d?10262:10256))for(i=i.child;i!==null;)hv(n,i,a,u),i=i.sibling;else d&&iv(i)}function hv(n,i,a,u){var d=(a&335544064)===a;d&&i.alternate===null&&i.return!==null&&i.return.alternate!==null&&qu(i);var p=i.flags;switch(i.tag){case 0:case 11:case 15:Gi(n,i,a,u),p&2048&&fl(9,i);break;case 1:Gi(n,i,a,u);break;case 3:Gi(n,i,a,u),d&&sn&&Mp&&b1(n.containerInfo),p&2048&&(n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&Ze(n)));break;case 12:if(p&2048){Gi(n,i,a,u),n=i.stateNode;try{var w=i.memoizedProps,k=w.id,Q=w.onPostCommit;typeof Q=="function"&&Q(k,i.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(fe){It(i,i.return,fe)}}else Gi(n,i,a,u);break;case 31:Gi(n,i,a,u);break;case 13:Gi(n,i,a,u);break;case 23:break;case 22:w=i.stateNode,k=i.alternate,i.memoizedState!==null?(d&&k!==null&&k.memoizedState===null&&qu(k),w._visibility&2?Gi(n,i,a,u):pl(n,i)):(d&&k!==null&&k.memoizedState!==null&&qu(i),w._visibility&2?Gi(n,i,a,u):(w._visibility|=2,Go(n,i,a,u,(i.subtreeFlags&10256)!==0||!1))),p&2048&&Ch(k,i);break;case 24:Gi(n,i,a,u),p&2048&&Ph(i.alternate,i);break;case 30:d&&(d=i.alternate,d!==null&&(vr(d.child,!0),vr(i.child,!0))),Gi(n,i,a,u);break;default:Gi(n,i,a,u)}}function Go(n,i,a,u,d){for(d=d&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var p=n,w=i,k=a,Q=u,fe=w.flags;switch(w.tag){case 0:case 11:case 15:Go(p,w,k,Q,d),fl(8,w);break;case 23:break;case 22:var ge=w.stateNode;w.memoizedState!==null?ge._visibility&2?Go(p,w,k,Q,d):pl(p,w):(ge._visibility|=2,Go(p,w,k,Q,d)),d&&fe&2048&&Ch(w.alternate,w);break;case 24:Go(p,w,k,Q,d),d&&fe&2048&&Ph(w.alternate,w);break;default:Go(p,w,k,Q,d)}i=i.sibling}}function pl(n,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=n,u=i,d=u.flags;switch(u.tag){case 22:pl(a,u),d&2048&&Ch(u.alternate,u);break;case 24:pl(a,u),d&2048&&Ph(u.alternate,u);break;default:pl(a,u)}i=i.sibling}}function bs(n,i,a){if(n.subtreeFlags&uo)for(n=n.child;n!==null;)pv(n,i,a),n=n.sibling}function pv(n,i,a){switch(n.tag){case 26:if(bs(n,i,a),n.flags&uo)if(n.memoizedState!==null)hM(a,or,n.memoizedState,n.memoizedProps);else{var u=n.stateNode,d=n.type;n=n.memoizedProps,((i&335544128)===i||tp(d,n))&&jv(a,u,d,n)}break;case 5:bs(n,i,a),n.flags&uo&&(u=n.stateNode,d=n.type,n=n.memoizedProps,((i&335544128)===i||tp(d,n))&&jv(a,u,d,n));break;case 3:case 4:Wi?(u=or,or=ic(n.stateNode.containerInfo),bs(n,i,a),or=u):bs(n,i,a);break;case 22:n.memoizedState===null&&(u=n.alternate,u!==null&&u.memoizedState!==null?(u=uo,uo=16777216,bs(n,i,a),uo=u):bs(n,i,a));break;case 30:(n.flags&uo)!==0&&(u=n.memoizedProps.name,u!=null&&u!=="auto"&&(d=n.stateNode,d.paired=null,Ii===null&&(Ii=new Map),Ii.set(u,d))),bs(n,i,a);break;default:bs(n,i,a)}}function mv(n){var i=n.alternate;if(i!==null&&(n=i.child,n!==null)){i.child=null;do i=n.sibling,n.sibling=null,n=i;while(n!==null)}}function ml(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var u=i[a];kn=u,vv(u,n)}mv(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)gv(n),n=n.sibling}function gv(n){switch(n.tag){case 0:case 11:case 15:ml(n),n.flags&2048&&vs(9,n,n.return);break;case 3:ml(n);break;case 12:ml(n);break;case 22:var i=n.stateNode;n.memoizedState!==null&&i._visibility&2&&(n.return===null||n.return.tag!==13)?(i._visibility&=-3,ju(n)):ml(n);break;default:ml(n)}}function ju(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var u=i[a];kn=u,vv(u,n)}mv(n)}for(n=n.child;n!==null;){switch(i=n,i.tag){case 0:case 11:case 15:vs(8,i,i.return),ju(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,ju(i));break;default:ju(i)}n=n.sibling}}function vv(n,i){for(;kn!==null;){var a=kn;switch(a.tag){case 0:case 11:case 15:vs(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var u=a.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:Ze(a.memoizedState.cache)}if(u=a.child,u!==null)u.return=a,kn=u;else e:for(a=n;kn!==null;){u=kn;var d=u.sibling,p=u.return;if(av(u),u===a){kn=null;break e}if(d!==null){d.return=p,kn=d;break e}kn=p}}}function Ih(n){var i=Ox(n);if(i!=null){if(typeof i.memoizedProps["data-testname"]!="string")throw Error(o(364));return i}if(n=Jx(n),n===null)throw Error(o(362));return n.stateNode.current}function Nh(n,i){var a=n.tag;switch(i.$$typeof){case _c:if(n.type===i.value)return!0;break;case Sc:e:{for(i=i.value,n=[n,0],a=0;a<n.length;){var u=n[a++],d=u.tag,p=n[a++],w=i[p];if(d!==5&&d!==26&&d!==27||!bl(u)){for(;w!=null&&Nh(u,w);)p++,w=i[p];if(p===i.length){i=!0;break e}else for(u=u.child;u!==null;)n.push(u,p),u=u.sibling}}i=!1}return i;case xc:if((a===5||a===26||a===27)&&e1(n.stateNode,i.value))return!0;break;case wc:if((a===5||a===6||a===26||a===27)&&(n=Qx(n),n!==null&&0<=n.indexOf(i.value)))return!0;break;case Mc:if((a===5||a===26||a===27)&&(n=n.memoizedProps["data-testname"],typeof n=="string"&&n.toLowerCase()===i.value.toLowerCase()))return!0;break;default:throw Error(o(365))}return!1}function Lh(n){switch(n.$$typeof){case _c:return"<"+(_(n.value)||"Unknown")+">";case Sc:return":has("+(Lh(n)||"")+")";case xc:return'[role="'+n.value+'"]';case wc:return'"'+n.value+'"';case Mc:return'[data-testname="'+n.value+'"]';default:throw Error(o(365))}}function yv(n,i){var a=[];n=[n,0];for(var u=0;u<n.length;){var d=n[u++],p=d.tag,w=n[u++],k=i[w];if(p!==5&&p!==26&&p!==27||!bl(d)){for(;k!=null&&Nh(d,k);)w++,k=i[w];if(w===i.length)a.push(d);else for(d=d.child;d!==null;)n.push(d,w),d=d.sibling}}return a}function Dh(n,i){if(!yl)throw Error(o(363));n=Ih(n),n=yv(n,i),i=[],n=Array.from(n);for(var a=0;a<n.length;){var u=n[a++],d=u.tag;if(d===5||d===26||d===27)bl(u)||i.push(u.stateNode);else for(u=u.child;u!==null;)n.push(u),u=u.sibling}return i}function Ei(){return(xt&2)!==0&&wt!==0?wt&-wt:Je.T!==null?le():Bx()}function bv(){if(Li===0)if((wt&536870912)===0||mt){var n=sc;sc<<=1,(sc&3932160)===0&&(sc=262144),Li=n}else Li=536870912;return n=$n.current,n!==null&&(n.flags|=32),Li}function Wo(n,i){if(i!=null){var a=n.stateNode,u=a.ref;u===null&&(u=a.ref=Kv(K(n.memoizedProps,a))),da===null&&(da=[]),da.push(i.bind(null,u))}}function gi(n,i,a){(n===Xt&&(zt===2||zt===9)||n.cancelPendingCommit!==null)&&(Xo(n,0),_s(n,wt,Li,!1)),M(n,a),((xt&2)===0||n!==Xt)&&(n===Xt&&((xt&2)===0&&(co|=a),gn===4&&_s(n,wt,Li,!1)),de(n))}function _v(n,i,a){if((xt&6)!==0)throw Error(o(327));var u=!a&&(i&127)===0&&(i&n.expiredLanes)===0||E(n,i),d=u?dx(n,i):Fh(n,i,!0),p=u;do{if(d===0){ua&&!u&&_s(n,i,0,!1);break}else{if(a=n.current.alternate,p&&!cx(a)){d=Fh(n,i,!1),p=!1;continue}if(d===2){if(p=i,n.errorRecoveryDisabledLanes&p)var w=0;else w=n.pendingLanes&-536870913,w=w!==0?w:w&536870912?536870912:0;if(w!==0){i=w;e:{var k=n;d=Cl;var Q=Xn&&k.current.memoizedState.isDehydrated;if(Q&&(Xo(k,w).flags|=256),w=Fh(k,w,!1),w!==2&&w!==6){if(wp&&!Q){k.errorRecoveryDisabledLanes|=p,co|=p,d=4;break e}p=_i,_i=d,p!==null&&(_i===null?_i=p:_i.push.apply(_i,p))}d=w}if(p=!1,d!==2)continue}}if(d===1){Xo(n,0),_s(n,i,0,!0);break}e:{switch(u=n,p=d,p){case 0:case 1:throw Error(o(345));case 4:if((i&4194048)!==i&&(i&62914560)!==i)break;case 6:_s(u,i,Li,!As);break e;case 2:_i=null;break;case 3:case 5:break;default:throw Error(o(329))}if((i&62914560)===i&&(d=Tc+300-vi(),10<d)){if(_s(u,i,Li,!As),y(u,0,!0)!==0)break e;Er=i,u.timeoutHandle=Fx(Sv.bind(null,u,a,_i,Ec,Ep,i,Li,co,ca,As,p,"Throttled",-0,0),d);break e}Sv(u,a,_i,Ec,Ep,i,Li,co,ca,As,p,null,-0,0)}}break}while(!0);de(n)}function Sv(n,i,a,u,d,p,w,k,Q,fe,ge,Re,De,yt){n.timeoutHandle=to;var At=i.subtreeFlags,Ps=(p&335544064)===p;if(Re=null,(Ps||At&8192||(At&16785408)===16785408)&&(Re=Xx(),Ii=null,pv(i,p,Re),Ps&&qx(Re,n.containerInfo),At=(p&62914560)===p?Tc-vi():(p&4194048)===p?Ty-vi():0,At=$x(Re,At),At!==null)){Er=p,n.cancelPendingCommit=At(Pv.bind(null,n,i,p,a,u,d,w,k,Q,fe,ge,Re,null,De,yt)),_s(n,p,w,!fe);return}Pv(n,i,p,a,u,d,w,k,Q,fe,ge,Re)}function cx(n){for(var i=n;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var u=0;u<a.length;u++){var d=a[u],p=d.getSnapshot;d=d.value;try{if(!Pi(p(),d))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function _s(n,i,a,u){i=D(n,i),i&=~Tp,i&=~co,n.suspendedLanes|=i,n.pingedLanes&=~i,u&&(n.warmLanes|=i),u=n.expirationTimes;for(var d=i;0<d;){var p=31-Ri(d),w=1<<p;u[p]=-1,d&=~w}a!==0&&G(n,a,i)}function xv(){return(xt&6)===0?(ue(0,!1),!1):!0}function kh(){if(Mt!==null){if(zt===0)var n=Mt.return;else n=Mt,Xr=no=null,Oe(n),sa=null,Tl=0,n=Mt;for(;n!==null;)X0(n.alternate,n),n=n.return;Mt=null}}function Xo(n,i){var a=n.timeoutHandle;return a!==to&&(n.timeoutHandle=to,Ux(a)),a=n.cancelPendingCommit,a!==null&&(n.cancelPendingCommit=null,a()),Er=0,kh(),Xt=n,Mt=a=Hr(n.current,null),wt=i,zt=0,Ni=null,As=!1,ua=E(n,i),wp=!1,ca=Li=Tp=co=Rs=gn=0,_i=Cl=null,Ep=!1,$r=D(n,i),Ys(),a}function Mv(n,i){lt=null,Je.H=vc,i===ra||i===dc?(i=Pt(),zt=3):i===gp?(i=Pt(),zt=4):zt=i===_p?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Ni=i,Mt===null&&(gn=1,Uu(n,Ve(i,n.current)))}function wv(){var n=$n.current;return n===null?!0:(wt&4194048)===wt?ui===null:(wt&62914560)===wt||(wt&536870912)!==0?n===ui:!1}function Tv(){var n=Je.H;return Je.H=vc,n===null?vc:n}function Ev(){var n=Je.A;return Je.A=PM,n}function Zu(){gn=4,As||(wt&4194048)!==wt&&$n.current!==null||(ua=!0),(Rs&134217727)===0&&(co&134217727)===0||Xt===null||_s(Xt,wt,Li,!1)}function Fh(n,i,a){var u=xt;xt|=2;var d=Tv(),p=Ev();(Xt!==n||wt!==i)&&(Ec=null,Xo(n,i)),i=!1;var w=gn;e:do try{if(zt!==0&&Mt!==null){var k=Mt,Q=Ni;switch(zt){case 8:kh(),w=6;break e;case 3:case 2:case 9:case 6:$n.current===null&&(i=!0);var fe=zt;if(zt=0,Ni=null,qo(n,k,Q,fe),a&&ua){w=0;break e}break;default:fe=zt,zt=0,Ni=null,qo(n,k,Q,fe)}}fx(),w=gn;break}catch(ge){Mv(n,ge)}while(!0);return i&&n.shellSuspendCounter++,Xr=no=null,xt=u,Je.H=d,Je.A=p,Mt===null&&(Xt=null,wt=0,Ys()),w}function fx(){for(;Mt!==null;)Av(Mt)}function dx(n,i){var a=xt;xt|=2;var u=Tv(),d=Ev();Xt!==n||wt!==i?(Ec=null,Pl=vi()+500,Xo(n,i)):ua=E(n,i);e:do try{if(zt!==0&&Mt!==null){i=Mt;var p=Ni;t:switch(zt){case 1:zt=0,Ni=null,qo(n,i,p,1);break;case 2:case 9:if(Ge(p)){zt=0,Ni=null,Rv(i);break}i=function(){zt!==2&&zt!==9||Xt!==n||(zt=7),de(n)},p.then(i,i);break e;case 3:zt=7;break e;case 4:zt=5;break e;case 7:Ge(p)?(zt=0,Ni=null,Rv(i)):(zt=0,Ni=null,qo(n,i,p,7));break;case 5:var w=null;switch(Mt.tag){case 26:w=Mt.memoizedState;case 5:case 27:var k=Mt,Q=k.type,fe=k.pendingProps;if(w?dy(w):Yv(k.stateNode,Q,fe)){zt=0,Ni=null;var ge=k.sibling;if(ge!==null)Mt=ge;else{var Re=k.return;Re!==null?(Mt=Re,Ju(Re)):Mt=null}break t}}zt=0,Ni=null,qo(n,i,p,5);break;case 6:zt=0,Ni=null,qo(n,i,p,6);break;case 8:kh(),gn=6;break e;default:throw Error(o(462))}}hx();break}catch(De){Mv(n,De)}while(!0);return Xr=no=null,Je.H=u,Je.A=d,xt=a,Mt!==null?0:(Xt=null,wt=0,Ys(),gn)}function hx(){for(;Mt!==null&&!vM();)Av(Mt)}function Av(n){var i=B0(n.alternate,n,$r);n.memoizedProps=n.pendingProps,i===null?Ju(n):Mt=i}function Rv(n){var i=n,a=i.alternate;switch(i.tag){case 15:case 0:i=L0(a,i,i.pendingProps,i.type,void 0,wt);break;case 11:i=L0(a,i,i.pendingProps,i.type.render,i.ref,wt);break;case 5:Oe(i);var u=i;Xn&&u===Ln&&(mt?(fn(u),u.tag===5&&u.stateNode!=null&&(Kt=u.stateNode)):(fn(u),mt=!0));default:X0(a,i),i=Mt=Dv(i,$r),i=B0(a,i,$r)}n.memoizedProps=n.pendingProps,i===null?Ju(n):Mt=i}function qo(n,i,a,u){Xr=no=null,Oe(i),sa=null,Tl=0;var d=i.return;try{if(nx(n,d,i,a,wt)){gn=1,Uu(n,Ve(a,n.current)),Mt=null;return}}catch(p){if(d!==null)throw Mt=d,p;gn=1,Uu(n,Ve(a,n.current)),Mt=null;return}i.flags&32768?(mt||u===1?n=!0:ua||(wt&536870912)!==0?n=!1:(As=n=!0,(u===2||u===9||u===3||u===6)&&(u=$n.current,u!==null&&u.tag===13&&(u.flags|=16384))),Cv(i,n)):Ju(i)}function Ju(n){var i=n;do{if((i.flags&32768)!==0){Cv(i,As);return}n=i.return;var a=ox(i.alternate,i,$r);if(a!==null){Mt=a;return}if(i=i.sibling,i!==null){Mt=i;return}Mt=i=n}while(i!==null);gn===0&&(gn=5)}function Cv(n,i){do{var a=ax(n.alternate,n);if(a!==null){a.flags&=32767,Mt=a;return}if(a=n.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(n=n.sibling,n!==null)){Mt=n;return}Mt=n=a}while(n!==null);gn=6,Mt=null}function Pv(n,i,a,u,d,p,w,k,Q,fe,ge,Re){n.cancelPendingCommit=null;do gl();while(ln!==0);if((xt&6)!==0)throw Error(o(327));if(i!==null){if(i===n.current)throw Error(o(177));n===Xt&&(Mt=Xt=null,wt=0),fo=i,ar=n,Er=a,Rp=d,Ey=u,px(n,i,a,w,k,Q,Re)}}function px(n,i,a,u,d,p,w){var k=i.lanes|i.childLanes;if(Ap=k,k|=vp,P(n,a,k,u,d,p),da=null,(a&335544064)===a?(ha=T(n),u=10262):(ha=null,u=10256),(i.subtreeFlags&u)!==0||(i.flags&u)!==0?(n.callbackNode=null,n.callbackPriority=0,_x(up,function(){return Bh(),null})):(n.callbackNode=null,n.callbackPriority=0),yc=!1,u=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||u){u=Je.T,Je.T=null,d=Gr(),Nn(2),p=xt,xt|=4;try{lx(n,i,a)}finally{xt=p,Nn(d),Je.T=u}}ln=1,yc?fa=M1(w,n.containerInfo,ha,Uh,Oh,gx,zh,Bh,mx,null,null):(Uh(),Oh(),zh())}function mx(n){if(ln!==0){var i=ar.onRecoverableError;i(n,{componentStack:null})}}function gx(){ln===3&&(ln=0,dv(fo,ar),ln=4)}function Uh(){if(ln===1){ln=0;var n=ar,i=fo,a=Er,u=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||u){u=Je.T,Je.T=null;var d=Gr();Nn(2);var p=xt;xt|=4;try{Al=bc=!1,cv(i,n,a),Dx(n.containerInfo)}finally{xt=p,Nn(d),Je.T=u}}n.current=i,ln=2}}function Oh(){if(ln===2){ln=0;var n=ar,i=fo,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=Je.T,Je.T=null;var u=Gr();Nn(2);var d=xt;xt|=4;try{sv(n,i.alternate,i)}finally{xt=d,Nn(u),Je.T=a}}ln=3}}function zh(){if(ln===4||ln===3){ln=0;var n=fa;fa=null,yM();var i=ar,a=fo,u=Er,d=Ey,p=(u&335544064)===u?10262:10256;if((a.subtreeFlags&p)!==0||(a.flags&p)!==0?ln=5:(ln=0,fo=ar=null,Iv(i,i.pendingLanes)),p=i.pendingLanes,p===0&&(Cs=null),j(u),a=a.stateNode,Ci&&typeof Ci.onCommitFiberRoot=="function")try{Ci.onCommitFiberRoot(_l,a,void 0,(a.current.flags&128)===128)}catch{}if(d!==null){a=Je.T,p=Gr(),Nn(2),Je.T=null;try{for(var w=i.onRecoverableError,k=0;k<d.length;k++){var Q=d[k];w(Q.value,{componentStack:Q.stack})}}finally{Je.T=a,Nn(p)}}if(d=da,w=ha,ha=null,d!==null&&(da=null,w===null&&(w=[]),n!==null))for(Q=0;Q<d.length;Q++)a=(0,d[Q])(w),a!==void 0&&T1(n,a);(Er&3)!==0&&gl(),de(i),p=i.pendingLanes,(u&261930)!==0&&(p&42)!==0?i===Ac?Il++:(Il=0,Ac=i):(Il=0,Ac=null),Xn&&iM(),ue(0,!1)}}function Iv(n,i){(n.pooledCacheLanes&=i)===0&&(i=n.pooledCache,i!=null&&(n.pooledCache=null,Ze(i)))}function gl(){return fa!==null&&(w1(fa),fa=null),Uh(),Oh(),zh(),Bh()}function Bh(){if(ln!==5)return!1;var n=ar,i=Ap;Ap=0;var a=j(Er),u=32>a?32:a;a=Je.T;var d=Gr();try{Nn(u),Je.T=null,u=Rp,Rp=null;var p=ar,w=Er;if(ln=0,fo=ar=null,Er=0,(xt&6)!==0)throw Error(o(331));var k=xt;if(xt|=4,gv(p.current),hv(p,p.current,w,u),xt=k,ue(0,!1),Ci&&typeof Ci.onPostCommitFiberRoot=="function")try{Ci.onPostCommitFiberRoot(_l,p)}catch{}return!0}finally{Nn(d),Je.T=a,Iv(n,i)}}function Nv(n,i,a){i=Ve(a,i),i=ih(n.stateNode,i,2),n=mi(n,i,2),n!==null&&(M(n,2),de(n))}function It(n,i,a){if(n.tag===3)Nv(n,n,a);else for(;i!==null;){if(i.tag===3){Nv(i,n,a);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Cs===null||!Cs.has(u))){n=Ve(a,n),a=T0(2),u=mi(i,a,2),u!==null&&(E0(a,u,i,n),M(u,2),de(u));break}}i=i.return}}function Hh(n,i,a){var u=n.pingCache;if(u===null){u=n.pingCache=new IM;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(a)||(wp=!0,d.add(a),n=vx.bind(null,n,i,a),i.then(n,n))}function vx(n,i,a){var u=n.pingCache;u!==null&&u.delete(i),n.pingedLanes|=n.suspendedLanes&a,n.warmLanes&=~a,Xt===n&&(wt&a)===a&&((gn===4||gn===3&&(wt&62914560)===wt&&300>vi()-Tc)&&(xt&2)===0?Xo(n,0):Tp|=a,ca===wt&&(ca=0)),de(n)}function Lv(n,i){i===0&&(i=N()),n=nr(n,i),n!==null&&(M(n,i),de(n))}function yx(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Lv(n,a)}function bx(n,i){var a=0;switch(n.tag){case 31:case 13:var u=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:u=n.stateNode;break;case 22:u=n.stateNode._retryCache;break;default:throw Error(o(314))}u!==null&&u.delete(i),Lv(n,a)}function _x(n,i){return ac(n,i)}function Sx(n,i,a,u){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Hr(n,i){var a=n.alternate;return a===null?(a=t(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&1206910976,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a.refCleanup=n.refCleanup,a}function Dv(n,i){n.flags&=1206910978;var a=n.alternate;return a===null?(n.childLanes=0,n.lanes=i,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=a.childLanes,n.lanes=a.lanes,n.child=a.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=a.memoizedProps,n.memoizedState=a.memoizedState,n.updateQueue=a.updateQueue,n.type=a.type,i=a.dependencies,n.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),n}function Ku(n,i,a,u,d,p){var w=0;if(u=n,typeof u=="function")Vh(u)&&(w=1);else if(typeof u=="string")w=Wi&&on?ay(n,a,qn.current)?26:my(n)?27:5:Wi?ay(n,a,qn.current)?26:5:on&&my(n)?27:5;else e:switch(u){case Kh:return n=t(31,a,i,d),n.elementType=Kh,n.lanes=p,n;case Yo:return eo(a.children,d,p,i);case Hv:w=8,d|=24;break;case $h:return n=t(12,a,i,d|2),n.elementType=$h,n.lanes=p,n;case jh:return n=t(13,a,i,d),n.elementType=jh,n.lanes=p,n;case Zh:return n=t(19,a,i,d),n.elementType=Zh,n.lanes=p,n;case Tx:case Qh:return n=d|32,n=t(30,a,i,n),n.elementType=Qh,n.lanes=p,n.stateNode={autoName:null,paired:null,clones:null,ref:null},n;default:if(typeof u=="object"&&u!==null)switch(u.$$typeof){case Vr:w=10;break e;case Vv:w=9;break e;case Yh:w=11;break e;case Jh:w=14;break e;case Ss:w=16,u=null;break e}w=29,a=Error(o(130,n===null?"null":typeof n,"")),u=null}return i=t(w,a,i,d),i.elementType=n,i.type=u,i.lanes=p,i}function eo(n,i,a,u){return n=t(7,n,u,i),n.lanes=a,n}function Gh(n,i,a){return n=t(6,n,null,i),n.lanes=a,n}function kv(n){var i=t(18,null,null,0);return i.stateNode=n,i}function Wh(n,i,a){return i=t(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function xx(n,i,a,u,d,p,w,k,Q){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=to,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=L(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=L(0),this.hiddenUpdates=L(null),this.identifierPrefix=u,this.onUncaughtError=d,this.onCaughtError=p,this.onRecoverableError=w,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=Q,this.transitionTypes=null,this.incompleteTransitions=new Map}function Fv(n,i,a,u,d,p,w,k,Q,fe,ge,Re){return n=new xx(n,i,a,w,Q,fe,ge,Re,k),i=1,p===!0&&(i|=24),p=t(3,null,null,i),n.current=p,p.stateNode=n,i=Xe(),i.refCount++,n.pooledCache=i,i.refCount++,p.memoizedState={element:u,isDehydrated:a,cache:i},ms(p),n}function Uv(n){return n?(n=Ko,n):Ko}function Ov(n){var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(o(188)):(n=Object.keys(n).join(","),Error(o(268,n)));return n=f(i),n=n!==null?h(n):null,n===null?null:vl(n.stateNode)}function zv(n,i,a,u,d,p){d=Uv(d),u.context===null?u.context=d:u.pendingContext=d,u=ir(i),u.payload={element:a},p=p===void 0?null:p,p!==null&&(u.callback=p),a=mi(n,u,i),a!==null&&(gi(a,n,i),Js(a,n,i))}function Bv(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Xh(n,i){Bv(n,i),(n=n.alternate)&&Bv(n,i)}var St={},Mx=DS.default,Ai=Zn.default,qh=Object.assign,wx=Symbol.for("react.element"),Qu=Symbol.for("react.transitional.element"),$o=Symbol.for("react.portal"),Yo=Symbol.for("react.fragment"),Hv=Symbol.for("react.strict_mode"),$h=Symbol.for("react.profiler"),Vv=Symbol.for("react.consumer"),Vr=Symbol.for("react.context"),Yh=Symbol.for("react.forward_ref"),jh=Symbol.for("react.suspense"),Zh=Symbol.for("react.suspense_list"),Jh=Symbol.for("react.memo"),Ss=Symbol.for("react.lazy"),Kh=Symbol.for("react.activity"),Tx=Symbol.for("react.legacy_hidden"),Ex=Symbol.for("react.memo_cache_sentinel"),Qh=Symbol.for("react.view_transition"),Ax=Symbol.for("react.recoverable"),Gv=Symbol.iterator,Wv=Symbol.for("react.optimistic_key"),Rx=Symbol.for("react.client.reference"),ec=Array.isArray,Je=Mx.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Cx=e.rendererVersion,Px=e.rendererPackageName,Xv=e.extraDevToolsConfig,vl=e.getPublicInstance,Ix=e.getRootHostContext,Nx=e.getChildHostContext,Lx=e.prepareForCommit,Dx=e.resetAfterCommit,kx=e.createInstance;e.cloneMutableInstance;var ep=e.appendInitialChild,qv=e.finalizeInitialChildren,tc=e.shouldSetTextContent,$v=e.createTextInstance;e.cloneMutableTextInstance;var Fx=e.scheduleTimeout,Ux=e.cancelTimeout,to=e.noTimeout,br=e.isPrimaryRenderer;e.warnsIfNotActing;var sn=e.supportsMutation,_r=e.supportsPersistence,Xn=e.supportsHydration,Ox=e.getInstanceFromNode;e.beforeActiveInstanceBlur;var zx=e.preparePortalMount;e.prepareScopeUpdate,e.getInstanceFromScope;var Nn=e.setCurrentUpdatePriority,Gr=e.getCurrentUpdatePriority,Bx=e.resolveUpdatePriority;e.trackSchedulerEvent,e.resolveEventType,e.resolveEventTimeStamp;var Hx=e.shouldAttemptEagerTransition,Vx=e.detachDeletedInstance;e.requestPostPaintCallback;var Gx=e.maySuspendCommit,Wx=e.maySuspendCommitOnUpdate,tp=e.maySuspendCommitInSyncRender,Yv=e.preloadInstance,Xx=e.startSuspendingCommit,jv=e.suspendInstance,qx=e.suspendOnActiveViewTransition,$x=e.waitForCommitToBeReady;e.getSuspendedCommitReason;var jo=e.NotPendingTransition,Wr=e.HostTransitionContext,Yx=e.resetFormInstance;e.bindToConsole;var jx=e.supportsMicrotasks,Zx=e.scheduleMicrotask,yl=e.supportsTestSelectors,Jx=e.findFiberRoot,Kx=e.getBoundingRect,Qx=e.getTextContent,bl=e.isHiddenSubtree,e1=e.matchAccessibilityRole,t1=e.setFocusIfFocusable,n1=e.setupIntersectionObserver,i1=e.appendChild,r1=e.appendChildToContainer,s1=e.commitTextUpdate,o1=e.commitMount,a1=e.commitUpdate,l1=e.insertBefore,u1=e.insertInContainerBefore,c1=e.removeChild,f1=e.removeChildFromContainer,Zv=e.resetTextContent,d1=e.hideInstance,h1=e.hideTextInstance,p1=e.unhideInstance,m1=e.unhideTextInstance,Jv=e.applyViewTransitionName,g1=e.restoreViewTransitionName,v1=e.cancelViewTransitionName,y1=e.cancelRootViewTransitionName,b1=e.restoreRootViewTransitionName;e.cloneRootViewTransitionContainer,e.removeRootViewTransitionClone;var np=e.measureInstance,_1=e.measureClonedInstance,nc=e.wasInstanceInViewport,S1=e.hasInstanceChanged,x1=e.hasInstanceAffectedParent,M1=e.startViewTransition;e.startGestureTransition;var w1=e.stopViewTransition,T1=e.addViewTransitionFinishedListener;e.getCurrentGestureOffset;var Kv=e.createViewTransitionInstance,E1=e.clearContainer,A1=e.createFragmentInstance,R1=e.updateFragmentInstanceFiber,Qv=e.commitNewChildToFragmentInstance,C1=e.deleteChildFromFragmentInstance,P1=e.cloneInstance,ey=e.createContainerChildSet,ty=e.appendChildToContainerChildSet,I1=e.finalizeContainerChildren,ny=e.replaceContainerChildren,iy=e.cloneHiddenInstance,ry=e.cloneHiddenTextInstance,ip=e.isSuspenseInstancePending,rp=e.isSuspenseInstanceFallback,N1=e.getSuspenseInstanceFallbackErrorDetails,L1=e.registerSuspenseInstanceRetry,D1=e.canHydrateFormStateMarker,k1=e.isFormStateMarkerMatching,sy=e.getNextHydratableSibling,F1=e.getNextHydratableSiblingAfterSingleton,U1=e.getFirstHydratableChild,O1=e.getFirstHydratableChildWithinContainer,z1=e.getFirstHydratableChildWithinActivityInstance,B1=e.getFirstHydratableChildWithinSuspenseInstance,H1=e.getFirstHydratableChildWithinSingleton,V1=e.canHydrateInstance,G1=e.canHydrateTextInstance,W1=e.canHydrateActivityInstance,X1=e.canHydrateSuspenseInstance,q1=e.hydrateInstance,$1=e.hydrateTextInstance,Y1=e.hydrateActivityInstance,j1=e.hydrateSuspenseInstance,Z1=e.getNextHydratableInstanceAfterActivityInstance,J1=e.getNextHydratableInstanceAfterSuspenseInstance,K1=e.commitHydratedInstance,Q1=e.commitHydratedContainer,eM=e.commitHydratedActivityInstance,tM=e.commitHydratedSuspenseInstance,nM=e.finalizeHydratedChildren,iM=e.flushHydrationEvents;e.clearActivityBoundary;var rM=e.clearSuspenseBoundary;e.clearActivityBoundaryFromContainer;var sM=e.clearSuspenseBoundaryFromContainer,oM=e.hideDehydratedBoundary,aM=e.unhideDehydratedBoundary,oy=e.shouldDeleteUnhydratedTailInstances;e.diffHydratedPropsForDevWarnings,e.diffHydratedTextForDevWarnings,e.describeHydratableInstanceForDevWarnings;var lM=e.validateHydratableInstance,uM=e.validateHydratableTextInstance,Wi=e.supportsResources,ay=e.isHostHoistableType,ic=e.getHoistableRoot,ly=e.getResource,uy=e.acquireResource,cy=e.releaseResource,cM=e.hydrateHoistable,sp=e.mountHoistable,op=e.unmountHoistable,fy=e.createHoistableInstance,fM=e.prepareToCommitHoistables,dM=e.mayResourceSuspendCommit,dy=e.preloadResource,hM=e.suspendResource,on=e.supportsSingletons,hy=e.resolveSingletonInstance,pM=e.acquireSingletonInstance,py=e.releaseSingletonInstance,my=e.isHostSingletonType,Zo=e.isSingletonScope,ap=[],Jo=-1,Ko={},Ri=Math.clz32?Math.clz32:R,mM=Math.log,gM=Math.LN2,rc=256,sc=262144,oc=4194304,ac=Ai.unstable_scheduleCallback,lp=Ai.unstable_cancelCallback,vM=Ai.unstable_shouldYield,yM=Ai.unstable_requestPaint,vi=Ai.unstable_now,gy=Ai.unstable_ImmediatePriority,bM=Ai.unstable_UserBlockingPriority,up=Ai.unstable_NormalPriority,_M=Ai.unstable_IdlePriority,SM=Ai.log,xM=Ai.unstable_setDisableYieldValue,_l=null,Ci=null,MM=0,Pi=typeof Object.is=="function"?Object.is:me,vy=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)},wM=Object.prototype.hasOwnProperty,cp,yy,fp=!1,by=new WeakMap,Qo=[],ea=0,lc=null,Sl=0,Xi=[],qi=0,xs=null,Sr=1,xr="",qn=b(null),xl=b(null),Ms=b(null),uc=b(null),Ln=null,Kt=null,mt=!1,ws=null,$i=!1,dp=Error(o(519)),cc=b(null),no=null,Xr=null,TM=typeof AbortController<"u"?AbortController:function(){var n=[],i=this.signal={aborted:!1,addEventListener:function(a,u){n.push(u)}};this.abort=function(){i.aborted=!0,n.forEach(function(a){return a()})}},EM=Ai.unstable_scheduleCallback,AM=Ai.unstable_NormalPriority,an={$$typeof:Vr,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0},Ml=null,ta=null,na=null,hp=!1,fc=!1,pp=!1,io=0,wl=null,mp=0,ro=0,ia=null,_y=Je.S;Je.S=function(n,i){if(Ty=vi(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&ie(n,i),Ml!==null)for(var a=ta;a!==null;)I(a,Ml),a=a.next;if(a=n.types,a!=null){for(var u=ta;u!==null;)I(u,a),u=u.next;if(ro!==0){u=Ml,u===null&&(u=Ml=[]);for(var d=0;d<a.length;d++){var p=a[d];u.indexOf(p)===-1&&u.push(p)}}}_y!==null&&_y(n,i)};var so=b(null),ra=Error(o(460)),gp=Error(o(474)),dc=Error(o(542)),hc={then:function(){}},oo=null,sa=null,Tl=0,ao=Iu(!0),Sy=Iu(!1),Yi=[],oa=0,vp=0,Ts=!1,yp=!1,Es=b(null),pc=b(0),$n=b(null),ui=null,Yn=b(0),qr=0,lt=null,Ht=null,xn=null,mc=!1,aa=!1,lo=!1,gc=0,El=0,la=null,RM=0,vc={readContext:at,use:zr,useCallback:Fe,useContext:Fe,useEffect:Fe,useImperativeHandle:Fe,useLayoutEffect:Fe,useInsertionEffect:Fe,useMemo:Fe,useReducer:Fe,useRef:Fe,useState:Fe,useDebugValue:Fe,useDeferredValue:Fe,useTransition:Fe,useSyncExternalStore:Fe,useId:Fe,useHostTransitionStatus:Fe,useFormState:Fe,useActionState:Fe,useOptimistic:Fe,useMemoCache:Fe,useCacheRefresh:Fe,useEffectEvent:Fe},xy={readContext:at,use:zr,useCallback:function(n,i){return kt().memoizedState=[n,i===void 0?null:i],n},useContext:at,useEffect:o0,useImperativeHandle:function(n,i,a){a=a!=null?a.concat([n]):null,Du(4194308,4,c0.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Du(4194308,4,n,i)},useInsertionEffect:function(n,i){Du(4,2,n,i)},useMemo:function(n,i){var a=kt();i=i===void 0?null:i;var u=n();if(lo){O(!0);try{n()}finally{O(!1)}}return a.memoizedState=[u,i],u},useReducer:function(n,i,a){var u=kt();if(a!==void 0){var d=a(i);if(lo){O(!0);try{a(i)}finally{O(!1)}}}else d=i;return u.memoizedState=u.baseState=d,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:d},u.queue=n,n=n.dispatch=tx.bind(null,lt,n),[u.memoizedState,n]},useRef:function(n){var i=kt();return n={current:n},i.memoizedState=n},useState:function(n){n=jd(n);var i=n.queue,a=b0.bind(null,lt,i);return i.dispatch=a,[n.memoizedState,a]},useDebugValue:Kd,useDeferredValue:function(n,i){var a=kt();return Qd(a,n,i)},useTransition:function(){var n=jd(!1);return n=m0.bind(null,lt,n.queue,!0,!1),kt().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,i,a){var u=lt,d=kt();if(mt){if(a===void 0)throw Error(o(407));a=a()}else{if(a=i(),Xt===null)throw Error(o(349));(wt&127)!==0||bn(u,i,a)}d.memoizedState=a;var p={value:a,getSnapshot:i};return d.queue=p,o0(al.bind(null,u,p,n),[n]),u.flags|=2048,zo(9,{destroy:void 0},Vi.bind(null,u,p,a,i),null),a},useId:function(){var n=kt(),i=Xt.identifierPrefix;if(mt){var a=xr,u=Sr;a=(u&~(1<<32-Ri(u)-1)).toString(32)+a,i="_"+i+"R_"+a,a=gc++,0<a&&(i+="H"+a.toString(32)),i+="_"}else a=RM++,i="_"+i+"r_"+a.toString(32)+"_";return n.memoizedState=i},useHostTransitionStatus:eh,useFormState:t0,useActionState:t0,useOptimistic:function(n){var i=kt();i.memoizedState=i.baseState=n;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=th.bind(null,lt,!0,a),a.dispatch=i,[n,i]},useMemoCache:Hi,useCacheRefresh:function(){return kt().memoizedState=ex.bind(null,lt)},useEffectEvent:function(n){var i=kt(),a={impl:n};return i.memoizedState=a,function(){if((xt&2)!==0)throw Error(o(440));return a.impl.apply(void 0,arguments)}}},My={readContext:at,use:zr,useCallback:d0,useContext:at,useEffect:Jd,useImperativeHandle:f0,useInsertionEffect:l0,useLayoutEffect:u0,useMemo:h0,useReducer:vt,useRef:s0,useState:function(){return vt(Vn)},useDebugValue:Kd,useDeferredValue:function(n,i){var a=Ye();return p0(a,Ht.memoizedState,n,i)},useTransition:function(){var n=vt(Vn)[0],i=Ye().memoizedState;return[typeof n=="boolean"?n:mn(n),i]},useSyncExternalStore:$t,useId:v0,useHostTransitionStatus:eh,useFormState:n0,useActionState:n0,useOptimistic:function(n,i){var a=Ye();return jg(a,Ht,n,i)},useMemoCache:Hi,useCacheRefresh:y0,useEffectEvent:a0},CM={readContext:at,use:zr,useCallback:d0,useContext:at,useEffect:Jd,useImperativeHandle:f0,useInsertionEffect:l0,useLayoutEffect:u0,useMemo:h0,useReducer:li,useRef:s0,useState:function(){return li(Vn)},useDebugValue:Kd,useDeferredValue:function(n,i){var a=Ye();return Ht===null?Qd(a,n,i):p0(a,Ht.memoizedState,n,i)},useTransition:function(){var n=li(Vn)[0],i=Ye().memoizedState;return[typeof n=="boolean"?n:mn(n),i]},useSyncExternalStore:$t,useId:v0,useHostTransitionStatus:eh,useFormState:r0,useActionState:r0,useOptimistic:function(n,i){var a=Ye();return Ht!==null?jg(a,Ht,n,i):(a.baseState=n,[n,a.queue.dispatch])},useMemoCache:Hi,useCacheRefresh:y0,useEffectEvent:a0},bp={enqueueSetState:function(n,i,a){n=n._reactInternals;var u=Ei(),d=ir(u);d.payload=i,a!=null&&(d.callback=a),i=mi(n,d,u),i!==null&&(gi(i,n,u),Js(i,n,u))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var u=Ei(),d=ir(u);d.tag=1,d.payload=i,a!=null&&(d.callback=a),i=mi(n,d,u),i!==null&&(gi(i,n,u),Js(i,n,u))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Ei(),u=ir(a);u.tag=2,i!=null&&(u.callback=i),i=mi(n,u,a),i!==null&&(gi(i,n,a),Js(i,n,a))}},_p=Error(o(461)),Mn=!1,Sp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null},ei=!1,yc=!1,Ii=null,Mr=null,yi=0,Dn=!1,Ft=!1,wr=!1,xp=!1,wy=typeof WeakSet=="function"?WeakSet:Set,kn=null,Tr=!1,Al=!1,bc=!1,Mp=!1,wn=null,bi=!1,or=null,uo=8192,PM={getCacheForType:function(n){var i=at(an),a=i.data.get(n);return a===void 0&&(a=n(),i.data.set(n,a)),a},cacheSignal:function(){return at(an).controller.signal}},_c=0,Sc=1,xc=2,Mc=3,wc=4;if(typeof Symbol=="function"&&Symbol.for){var Rl=Symbol.for;_c=Rl("selector.component"),Sc=Rl("selector.has_pseudo_class"),xc=Rl("selector.role"),Mc=Rl("selector.test_id"),wc=Rl("selector.text")}var IM=typeof WeakMap=="function"?WeakMap:Map,xt=0,Xt=null,Mt=null,wt=0,zt=0,Ni=null,As=!1,ua=!1,wp=!1,$r=0,gn=0,Rs=0,co=0,Tp=0,Li=0,ca=0,Cl=null,_i=null,Ep=!1,Tc=0,Ty=0,Pl=1/0,Ec=null,Cs=null,ln=0,ar=null,fo=null,Er=0,Ap=0,Rp=null,Ey=null,fa=null,da=null,ha=null,Il=0,Ac=null;return St.attemptContinuousHydration=function(n){if(n.tag===13||n.tag===31){var i=nr(n,67108864);i!==null&&gi(i,n,67108864),Xh(n,67108864)}},St.attemptHydrationAtCurrentPriority=function(n){if(n.tag===13||n.tag===31){var i=Ei();i=W(i);var a=nr(n,i);a!==null&&gi(a,n,i),Xh(n,i)}},St.attemptSynchronousHydration=function(n){switch(n.tag){case 3:if(n=n.stateNode,n.current.memoizedState.isDehydrated){var i=S(n.pendingLanes);if(i!==0){for(n.pendingLanes|=2,n.entangledLanes|=2;i;){var a=1<<31-Ri(i);n.entanglements[1]|=a,i&=~a}de(n),(xt&6)===0&&(Pl=vi()+500,ue(0,!1))}}break;case 31:case 13:i=nr(n,2),i!==null&&gi(i,n,2),xv(),Xh(n,2)}},St.batchedUpdates=function(n,i){return n(i)},St.createComponentSelector=function(n){return{$$typeof:_c,value:n}},St.createContainer=function(n,i,a,u,d,p,w,k,Q,fe){return Fv(n,i,!1,null,a,u,p,null,w,k,Q,fe)},St.createHasPseudoClassSelector=function(n){return{$$typeof:Sc,value:n}},St.createHydrationContainer=function(n,i,a,u,d,p,w,k,Q,fe,ge,Re,De,yt){var At;return n=Fv(a,u,!0,n,d,p,k,yt,Q,fe,ge,Re),n.context=Uv(null),a=n.current,u=Ei(),u=W(u),d=ir(u),d.callback=(At=i)!=null?At:null,mi(a,d,u),i=u,n.current.lanes=i,M(n,i),de(n),n},St.createPortal=function(n,i,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$o,key:u==null?null:u===Wv?Wv:""+u,children:n,containerInfo:i,implementation:a}},St.createRoleSelector=function(n){return{$$typeof:xc,value:n}},St.createTestNameSelector=function(n){return{$$typeof:Mc,value:n}},St.createTextSelector=function(n){return{$$typeof:wc,value:n}},St.defaultOnCaughtError=function(n){console.error(n)},St.defaultOnRecoverableError=function(n){vy(n)},St.defaultOnUncaughtError=function(n){vy(n)},St.deferredUpdates=function(n){var i=Je.T,a=Gr();try{return Nn(32),Je.T=null,n()}finally{Nn(a),Je.T=i}},St.discreteUpdates=function(n,i,a,u,d){var p=Je.T,w=Gr();try{return Nn(2),Je.T=null,n(i,a,u,d)}finally{Nn(w),Je.T=p,xt===0&&(Pl=vi()+500)}},St.findAllNodes=Dh,St.findBoundingRects=function(n,i){if(!yl)throw Error(o(363));i=Dh(n,i),n=[];for(var a=0;a<i.length;a++)n.push(Kx(i[a]));for(i=n.length-1;0<i;i--){a=n[i];for(var u=a.x,d=u+a.width,p=a.y,w=p+a.height,k=i-1;0<=k;k--)if(i!==k){var Q=n[k],fe=Q.x,ge=fe+Q.width,Re=Q.y,De=Re+Q.height;if(u>=fe&&p>=Re&&d<=ge&&w<=De){n.splice(i,1);break}else if(u!==fe||a.width!==Q.width||De<p||Re>w){if(!(p!==Re||a.height!==Q.height||ge<u||fe>d)){fe>u&&(Q.width+=fe-u,Q.x=u),ge<d&&(Q.width=d-fe),n.splice(i,1);break}}else{Re>p&&(Q.height+=Re-p,Q.y=p),De<w&&(Q.height=w-Re),n.splice(i,1);break}}}return n},St.findHostInstance=Ov,St.findHostInstanceWithNoPortals=function(n){return n=f(n),n=n!==null?m(n):null,n===null?null:vl(n.stateNode)},St.findHostInstanceWithWarning=function(n){return Ov(n)},St.flushPassiveEffects=gl,St.flushSyncFromReconciler=function(n){var i=xt;xt|=1;var a=Je.T,u=Gr();try{if(Nn(2),Je.T=null,n)return n()}finally{Nn(u),Je.T=a,xt=i,(xt&6)===0&&ue(0,!1)}},St.flushSyncWork=xv,St.focusWithin=function(n,i){if(!yl)throw Error(o(363));for(n=Ih(n),i=yv(n,i),i=Array.from(i),n=0;n<i.length;){var a=i[n++],u=a.tag;if(!bl(a)){if((u===5||u===26||u===27)&&t1(a.stateNode))return!0;for(a=a.child;a!==null;)i.push(a),a=a.sibling}}return!1},St.getFindAllNodesFailureDescription=function(n,i){if(!yl)throw Error(o(363));var a=0,u=[];n=[Ih(n),0];for(var d=0;d<n.length;){var p=n[d++],w=p.tag,k=n[d++],Q=i[k];if((w!==5&&w!==26&&w!==27||!bl(p))&&(Nh(p,Q)&&(u.push(Lh(Q)),k++,k>a&&(a=k)),k<i.length))for(p=p.child;p!==null;)n.push(p,k),p=p.sibling}if(a<i.length){for(n=[];a<i.length;a++)n.push(Lh(i[a]));return`findAllNodes was able to match part of the selector:
  `+(u.join(" > ")+`

No matching component was found for:
  `)+n.join(" > ")}return null},St.getPublicRootInstance=function(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 27:case 5:return vl(n.child.stateNode);default:return n.child.stateNode}},St.injectIntoDevTools=function(){var n={bundleType:0,version:Cx,rendererPackageName:Px,currentDispatcherRef:Je,reconcilerVersion:"19.3.0"};if(Xv!==null&&(n.rendererConfig=Xv),typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u")n=!1;else{var i=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(i.isDisabled||!i.supportsFiber)n=!0;else{try{_l=i.inject(n),Ci=i}catch{}n=!!i.checkDCE}}return n},St.isAlreadyRendering=function(){return(xt&6)!==0},St.observeVisibleRects=function(n,i,a,u){if(!yl)throw Error(o(363));n=Dh(n,i);var d=n1(n,a,u).disconnect;return{disconnect:function(){d()}}},St.shouldError=function(){return null},St.shouldSuspend=function(){return!1},St.startHostTransition=function(n,i,a,u){if(n.tag!==5)throw Error(o(476));var d=g0(n).queue;m0(n,d,i,jo,a===null?s:function(){var p=g0(n);return p.next===null&&(p=n.alternate.memoizedState),ll(n,p.next.queue,{},Ei()),a(u)})},St.updateContainer=function(n,i,a,u){var d=i.current,p=Ei();return zv(d,p,n,i,a,u),p},St.updateContainerSync=function(n,i,a,u){return zv(i.current,2,n,i,a,u),2},St},r.exports.default=r.exports,Object.defineProperty(r.exports,"__esModule",{value:!0})})(Rg)),Rg.exports}var O2={exports:{}};O2.exports;var PS;function z2(){return PS||(PS=1,RS.exports=U2()),RS.exports}var B2=z2(),H2=F2(B2),Vd={},V2=0,qd=r=>`${r[0].toUpperCase()}${r.slice(1)}`;function G2(r){return r in Vd}function Bg(r){return Vd[r]}function Eu(r){if(typeof r=="function"){let e=`${V2++}`;return Vd[e]=r,e}else Object.assign(Vd,r)}function W2(r){let e=H2(r);return e.injectIntoDevTools(),e}var BS=0,X2=/^three(?=[A-Z])/;function HS(r,e){let t=qd(r),s=Bg(t);if(r!=="primitive"&&!s)throw new Error(`R3F: ${t} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);if(r==="primitive"&&!e.object)throw new Error("R3F: Primitives without 'object' are invalid!");if(e.args!==void 0&&!Array.isArray(e.args))throw new Error("R3F: The args prop must be an array!")}function q2(r,e,t){var s;return r=G2(qd(r))?r:r.replace(X2,""),HS(r,e),r==="primitive"&&(s=e.object)!=null&&s.__r3f&&delete e.object.__r3f,zd(e.object,t,r,e)}function $2(r){if(!r.isHidden){var e;r.props.attach&&(e=r.parent)!=null&&e.object?Hd(r.parent,r):pi(r.object)&&(r.previousVisible=r.object.visible,r.object.visible=!1),r.isHidden=!0,Tu(r)}}function VS(r){if(r.isHidden){var e;if(r.props.attach&&(e=r.parent)!=null&&e.object)Bd(r.parent,r);else if(pi(r.object)){var t;r.object.visible=(t=r.previousVisible)!=null?t:!0}r.previousVisible=void 0,r.isHidden=!1,Tu(r)}}function Hg(r,e,t){let s=e.root.getState();if(!(!r.parent&&r.object!==s.scene)){if(!e.object){var o,l;let c=Bg(qd(e.type));e.object=(o=e.props.object)!=null?o:new c(...(l=e.props.args)!=null?l:[]),e.object.__r3f=e}if(Xs(e.object,e.props),e.props.attach)Bd(r,e);else if(pi(e.object)&&pi(r.object)){let c=r.object.children.indexOf(t?.object);if(t&&c!==-1){let f=r.object.children.indexOf(e.object);if(f!==-1){r.object.children.splice(f,1);let h=f<c?c-1:c;r.object.children.splice(h,0,e.object)}else e.object.parent=r.object,r.object.children.splice(c,0,e.object),e.object.dispatchEvent({type:"added"}),r.object.dispatchEvent({type:"childadded",child:e.object})}else r.object.add(e.object)}for(let c of e.children)Hg(e,c);Tu(e)}}function _g(r,e){if(e){if(e.parent===r){let t=r.children.indexOf(e);t!==-1&&r.children.splice(t,1)}e.parent=r,r.children.push(e),Hg(r,e)}}function IS(r,e,t){if(!e||!t)return;if(e.parent===r){let o=r.children.indexOf(e);o!==-1&&r.children.splice(o,1)}e.parent=r;let s=r.children.indexOf(t);s!==-1?r.children.splice(s,0,e):r.children.push(e),Hg(r,e,t)}function GS(r){if(typeof r.dispose=="function"){let e=()=>{try{r.dispose()}catch{}};typeof IS_REACT_ACT_ENVIRONMENT<"u"?e():(0,Zn.unstable_scheduleCallback)(Zn.unstable_IdlePriority,e)}}function Cg(r,e,t){if(!e)return;let s=!!e.parent;e.parent=null;let o=r.children.indexOf(e);o!==-1&&r.children.splice(o,1),e.props.attach?Hd(r,e):pi(e.object)&&pi(r.object)&&(r.object.remove(e.object),_2(Lg(e),e.object));let l=e.props.dispose!==null&&t!==!1;for(let f=e.children.length-1;f>=0;f--){let h=e.children[f];Cg(e,h,l)}if(e.children.length=0,delete e.object.__r3f,l&&e.type!=="primitive"&&e.object.type!=="Scene"&&GS(e.object),t===void 0&&s){var c;let f=(c=e.root)==null||c.getState==null?void 0:c.getState();f&&f.internal.frames===0&&f.invalidate()}}function Y2(r,e){for(let t of[r,r.alternate])if(t!==null)if(typeof t.ref=="function"){t.refCleanup==null||t.refCleanup();let s=t.ref(e);typeof s=="function"&&(t.refCleanup=s)}else t.ref&&(t.ref.current=e)}var wu=[];function j2(){if(wu.length!==0)try{Z2()}finally{wu.length=0}}function Z2(){for(let[t]of wu){let s=t.parent;if(s){t.props.attach?Hd(s,t):pi(t.object)&&pi(s.object)&&s.object.remove(t.object);for(let o of t.children)o.props.attach?Hd(t,o):pi(o.object)&&pi(t.object)&&t.object.remove(o.object)}t.isHidden&&VS(t),t.object.__r3f&&delete t.object.__r3f,t.type!=="primitive"&&GS(t.object)}for(let[t,s,o]of wu){t.props=s;let l=t.parent;if(l){var r,e;let c=Bg(qd(t.type)),f=t.object;t.object=(r=t.props.object)!=null?r:new c(...(e=t.props.args)!=null?e:[]),t.object.__r3f=t,Y2(o,t.object),b2(Lg(t),f,t.object),Xs(t.object,t.props),t.props.attach?Bd(l,t):pi(t.object)&&pi(l.object)&&l.object.add(t.object);for(let h of t.children)h.props.attach?Bd(t,h):pi(h.object)&&pi(t.object)&&t.object.add(h.object);Tu(t)}}}var Sg=()=>{},NS={},Ud=BS;function J2(r){switch(r){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return AS;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return ES;case"message":switch((0,Zn.unstable_getCurrentPriorityLevel)()){case Zn.unstable_ImmediatePriority:return AS;case Zn.unstable_UserBlockingPriority:return ES;case Zn.unstable_NormalPriority:case Zn.unstable_LowPriority:return Od;case Zn.unstable_IdlePriority:return P2;default:return Od}default:return Od}}function K2(r){typeof queueMicrotask=="function"?queueMicrotask(r):typeof Promise<"u"?Promise.resolve().then(r).catch(e=>{setTimeout(()=>{throw e})}):setTimeout(r)}var ko=W2({isPrimaryRenderer:!1,warnsIfNotActing:!1,supportsMutation:!0,supportsPersistence:!1,supportsHydration:!1,createInstance:q2,removeChild:Cg,appendChild:_g,appendInitialChild:_g,insertBefore:IS,appendChildToContainer(r,e){let t=r.getState().scene.__r3f;!e||!t||_g(t,e)},removeChildFromContainer(r,e){let t=r.getState().scene.__r3f;!e||!t||Cg(t,e)},insertInContainerBefore(r,e,t){let s=r.getState().scene.__r3f;!e||!t||!s||IS(s,e,t)},getRootHostContext:()=>NS,getChildHostContext:()=>NS,commitUpdate(r,e,t,s,o){var l,c,f;HS(e,s);let h=!1;if((r.type==="primitive"&&t.object!==s.object||((l=s.args)==null?void 0:l.length)!==((c=t.args)==null?void 0:c.length)||(f=s.args)!=null&&f.some((m,v)=>{var _;return m!==((_=t.args)==null?void 0:_[v])}))&&(h=!0),h)wu.push([r,Eg(s),o]);else{let m=h2(r,s),v=r.props.attach;r.props=Eg(s),v!==void 0?r.props.attach=v:delete r.props.attach,Object.keys(m).length&&Xs(r.object,m)}},finalizeInitialChildren:()=>!1,commitMount(){},getPublicInstance:r=>r?.object,prepareForCommit:()=>null,preparePortalMount:r=>zd(r.getState().scene,r,"",{}),resetAfterCommit:j2,shouldSetTextContent:()=>!1,clearContainer:()=>!1,hideInstance:$2,unhideInstance:VS,createTextInstance:Sg,hideTextInstance:Sg,unhideTextInstance:Sg,supportsMicrotasks:!0,scheduleMicrotask:K2,scheduleTimeout:typeof setTimeout=="function"?setTimeout:void 0,cancelTimeout:typeof clearTimeout=="function"?clearTimeout:void 0,noTimeout:-1,getInstanceFromNode:()=>null,beforeActiveInstanceBlur(){},afterActiveInstanceBlur(){},detachDeletedInstance(){},prepareScopeUpdate(){},getInstanceFromScope:()=>null,shouldAttemptEagerTransition:()=>!1,trackSchedulerEvent:()=>{},resolveEventType:()=>null,resolveEventTimeStamp:()=>-1.1,requestPostPaintCallback(){},maySuspendCommit:()=>!1,preloadInstance:()=>!0,suspendInstance(){},waitForCommitToBeReady:()=>null,NotPendingTransition:null,HostTransitionContext:nn.createContext(null),setCurrentUpdatePriority(r){Ud=r},getCurrentUpdatePriority(){return Ud},resolveUpdatePriority(){var r;if(Ud!==BS)return Ud;let e=typeof window<"u"?(r=window.event)==null?void 0:r.type:void 0;return e===void 0?Od:J2(e)},resetFormInstance(){},rendererPackageName:"@react-three/fiber",rendererVersion:k2.version,applyViewTransitionName(r,e,t){},restoreViewTransitionName(r,e){},cancelViewTransitionName(r,e,t){},cancelRootViewTransitionName(r){},restoreRootViewTransitionName(r){},InstanceMeasurement:null,measureInstance:r=>null,wasInstanceInViewport:r=>!0,hasInstanceChanged:(r,e)=>!1,hasInstanceAffectedParent:(r,e)=>!1,suspendOnActiveViewTransition(r,e){},startViewTransition(r,e,t,s,o,l,c,f,h,m,v){return s(),o(),v?.(),c(),null},startGestureTransition(r,e,t,s,o,l,c,f,h,m){return c(),f(),m?.(),null},stopViewTransition(r){},addViewTransitionFinishedListener(r,e){e()},createViewTransitionInstance:r=>null,getCurrentGestureOffset(r){throw new Error("startGestureTransition is not yet supported in react-three-fiber.")},cloneMutableInstance(r,e){return r},cloneMutableTextInstance(r){return r},cloneRootViewTransitionContainer(r){throw new Error("Not implemented.")},removeRootViewTransitionClone(r,e){throw new Error("Not implemented.")},createFragmentInstance:r=>null,updateFragmentInstanceFiber(r,e){},commitNewChildToFragmentInstance(r,e){},deleteChildFromFragmentInstance(r,e){},measureClonedInstance:r=>null,maySuspendCommitOnUpdate:(r,e,t)=>!1,maySuspendCommitInSyncRender:(r,e)=>!1,startSuspendingCommit:()=>null,getSuspendedCommitReason:(r,e)=>null});var hs=new Map;function Gd(r,e){let t=r.state;switch(e.type){case"use":return t.status==="disposed"?!1:(r.state={status:"open"},!0);case"unmount":return t.status==="disposed"?!1:(r.state={status:"closing",token:e.token},!0);case"dispose":return t.status!=="closing"||t.token!==e.token?!1:(r.state={status:"disposed"},!0)}}function Au(r){let e=hs.get(r),t=e?.fiber,s=e?.store;e&&console.warn("R3F.createRoot should only be called once!");let o=typeof reportError=="function"?reportError:console.error,l=s||A2(Lt,Vg),c=t||ko.createContainer(l,C2,null,!1,null,"",o,o,o,null),f=e||{fiber:c,store:l,state:{status:"open"},ready:S2(void 0),configuration:{},ownsRenderer:!1};e||hs.set(r,f);let h=!1;return{get ready(){return f.ready},configure(m={}){if(!Gd(f,{type:"use"}))return x2(new Error("R3F: Cannot configure a root after disposal has started."));let v=f.ready,{promise:_,resolve:b,reject:g}=M2();f.ready=_;let x=S=>{let y=l.getState();y.gl||(f.ownsRenderer=!Fg(m.gl),y.set({gl:S})),L2(f,r,m),!f.unwatchDpr&&(m.dpr===void 0||Array.isArray(m.dpr))&&(f.unwatchDpr=D2(f)),b(this)},R=()=>{try{var S;let y=(S=l.getState().gl)!=null?S:w2(r,m.gl);kg(y)?Promise.resolve(y).then(x).catch(g):x(y)}catch(y){g(y)}};return v.status==="pending"?v.then(R,g):R(),_},render(m){if(!Gd(f,{type:"use"}))return l;if(!l.getState().gl&&f.ready.status==="fulfilled"&&this.configure(),f.ready.status==="rejected")throw f.ready.reason;let v=()=>{var _;if(f.state.status!=="open"||f.ready.status==="rejected")return;if(f.ready.status==="pending"){f.ready.then(v,o);return}let b=(_=f.configuration.previous)==null?void 0:_.onCreated,g=(0,Xd.jsx)(Q2,{store:l,children:m,onCreated:b,rootElement:r});if(h){ko.updateContainer(g,c,null,xS);return}h=!0,ko.updateContainerSync(g,c,null,xS),ko.flushSyncWork()};return v(),l},unmount(){hs.get(r)===f&&WS(r)}}}function Q2({store:r,children:e,onCreated:t,rootElement:s}){return Ng(()=>{let o=r.getState();o.set(l=>({internal:{...l.internal,active:!0}})),t&&t(o),r.getState().events.connected||o.events.connect==null||o.events.connect(s)},[]),(0,Xd.jsx)(Ug.Provider,{value:r,children:e})}function Su(r){try{return r()}catch(e){console.warn("[R3F] Error while unmounting root; teardown may be incomplete:",e)}}function WS(r,e){let t=hs.get(r),s=Symbol("unmount");if(!t||!Gd(t,{type:"unmount",token:s}))return;let o=()=>{var l;if(t.ready.status==="pending"){t.ready.then(o,o);return}if(!Gd(t,{type:"dispose",token:s}))return;hs.delete(r);let c=t.store.getState();c.internal.active=!1,Su(()=>t.unwatchDpr==null?void 0:t.unwatchDpr()),Su(()=>c.events.disconnect==null?void 0:c.events.disconnect()),(l=c.gl)!=null&&l.xr&&Su(()=>c.xr.disconnect()),c.scene&&Su(()=>US(c.scene));let f=Su(()=>E2(c.gl,t.ownsRenderer));kg(f)?f.then(()=>e?.(r)):e?.(r)};ko.updateContainer(null,t.fiber,null,()=>{t.state.status!=="closing"||t.state.token!==s||ko.updateContainer(null,t.fiber,null,o)})}var eP=new Set,tP=new Set,nP=new Set;function xg(r,e){if(r.size)for(let{callback:t}of r.values())t(e)}function il(r,e){switch(r){case"before":return xg(eP,e);case"after":return xg(tP,e);case"tail":return xg(nP,e)}}var Mg,wg;function Pg(r,e,t){let s=e.clock.getDelta();e.frameloop==="never"&&typeof r=="number"&&(s=r-e.clock.elapsedTime,e.clock.oldTime=e.clock.elapsedTime,e.clock.elapsedTime=r),Mg=e.internal.subscribers;for(let o=0;o<Mg.length;o++)wg=Mg[o],wg.ref.current(wg.store.getState(),s,t);return!e.internal.priority&&e.gl.render&&e.gl.render(e.scene,e.camera),e.internal.frames=Math.max(0,e.internal.frames-1),e.frameloop==="always"?1:e.internal.frames}var Wd=!1,Ig=!1,Tg,LS,nl;function XS(r){LS=requestAnimationFrame(XS),Wd=!0,Tg=0,il("before",r),Ig=!0;for(let t of hs.values()){var e;nl=t.store.getState(),nl.internal.active&&(nl.frameloop==="always"||nl.internal.frames>0)&&!((e=nl.gl.xr)!=null&&e.isPresenting)&&(Tg+=Pg(r,nl))}if(Ig=!1,il("after",r),Tg===0)return il("tail",r),Wd=!1,cancelAnimationFrame(LS)}function Lt(r,e=1){var t;if(!r)return hs.forEach(s=>Lt(s.store.getState(),e));(t=r.gl.xr)!=null&&t.isPresenting||!r.internal.active||r.frameloop==="never"||(e>1?r.internal.frames=Math.min(60,r.internal.frames+e):Ig?r.internal.frames=2:r.internal.frames=1,Wd||(Wd=!0,requestAnimationFrame(XS)))}function Vg(r,e=!0,t,s){if(e&&il("before",r),t)Pg(r,t,s);else for(let o of hs.values())Pg(r,o.store.getState());e&&il("after",r)}var qs=ci(Yr());var qS=ci(Lo());var TL=ci(bg());var $s=ci(Yr());var Rn=(r,e,t)=>new kr(r,e,t),Ru=(r,e,t=18)=>new xo(r,r,e,t),rt={rail:Rn(28,2,2),railZ:Rn(2,2,24),cross:Rn(2,1.5,24),bellypan:Rn(24,.25,24),footprint:Rn(34,.05,34),wheel:Ru(2,1.6,20),module:Rn(5,3,5),motor:Ru(1.05,3.6,16),tower:Rn(2,40,2),inner:Rn(1.4,30,1.4),topbar:Rn(16,1.6,1.6),chain:Rn(.3,36,.3),gearbox:Ru(1.4,4,16),carriage:Rn(14,3,2),roller:Ru(1.1,22,16),arm:Rn(2,1.5,9),sideplate:Rn(.5,6,9),board:Rn(18,.3,13),rio:Rn(5,1.2,4),pdh:Rn(6,1.4,5),battery:Rn(7,6,3),radio:Rn(4,1,2.6),breaker:Ru(.8,1.2,14),bumperX:Rn(34,5,3),bumperZ:Rn(3,5,28),plate:new ls(14,3.2)},Gg=new Map,rl=r=>(Gg.has(r)||Gg.set(r,new Ql(r,20)),Gg.get(r)),Cu=Math.PI/2,$d=[{at:.16,drop:8,items:[[rt.rail,[0,3,13]],[rt.rail,[0,3,-13]],[rt.railZ,[13,3,0]],[rt.railZ,[-13,3,0]],[rt.cross,[-4,2.75,0]],[rt.cross,[4,2.75,0]],[rt.bellypan,[0,2.1,0],null,"dark"]]},{at:.33,drop:10,items:[13,-13].flatMap(r=>[13,-13].flatMap(e=>{let t=r*.86,s=e*.86;return[[rt.module,[t,4.5,s]],[rt.wheel,[t,2,s],[0,0,Cu],"dark"],[rt.motor,[t-1.2,7.6,s],null,"dark"],[rt.motor,[t+1.3,7.6,s+.4],null,"dark"]]}))},{at:.5,drop:14,items:[[rt.tower,[-7,22,-6]],[rt.tower,[7,22,-6]],[rt.inner,[-5.4,26,-6]],[rt.inner,[5.4,26,-6]],[rt.topbar,[0,41.3,-6]],[rt.chain,[-7,22,-4.8],null,"dark"],[rt.chain,[7,22,-4.8],null,"dark"],[rt.gearbox,[0,5.6,-8],[0,0,Cu],"dark"],[rt.carriage,[0,30,-4.5]],[rt.arm,[-6,30,.5]],[rt.arm,[6,30,.5]],[rt.roller,[0,30,5],[0,0,Cu],"dark"],[rt.roller,[0,4.5,15.5],[0,0,Cu],"dark"],[rt.roller,[0,8,14],[0,0,Cu],"dark"],[rt.sideplate,[-11.3,6,13]],[rt.sideplate,[11.3,6,13]]]},{at:.66,drop:8,items:[[rt.board,[0,4.4,2]],[rt.rio,[-4,5.2,3]],[rt.pdh,[4.5,5.2,1]],[rt.radio,[4.5,5.1,6]],[rt.breaker,[-6.5,5.2,-1.5],null,"dark"],[rt.battery,[0,6.5,9],null,"dark"]]},{at:.82,drop:8,items:[[rt.bumperX,[0,3.5,16.5],null,"bumper"],[rt.bumperX,[0,3.5,-16.5],null,"bumper"],[rt.bumperZ,[16.5,3.5,0],null,"bumper"],[rt.bumperZ,[-16.5,3.5,0],null,"bumper"]],plates:!0}];function Yd(){let r=document.createElement("canvas");r.width=512,r.height=118;let e=r.getContext("2d");e.fillStyle="#ffffff",e.textAlign="center",e.textBaseline="middle",e.font='italic 900 104px Saira, "Arial Narrow", sans-serif',e.fillText("11745",256,64);let t=new Zl(r);return t.colorSpace=An,t.anisotropy=4,t}var cn=ci(Lo());Eu({Group:fr,Mesh:jn,LineSegments:So,AmbientLight:To,DirectionalLight:wo});var Rt={target:0,p:0,tiltX:0,tiltY:0,tx:0,ty:0,visible:!0,still:!1},Wg=new je("#C9A6FF"),iP=new je("#E9B949"),rP=new je("#6B2FD6"),sP=r=>1-Math.pow(1-r,3),Xg=r=>r<0?0:r>1?1:r,$S=new V(0,21,0),oP=new V(70,52,78).normalize(),aP=31;function lP(){let r=zn(s=>s.camera),e=zn(s=>s.size.width),t=zn(s=>s.size.height);return(0,$s.useLayoutEffect)(()=>{if(!e||!t)return;let s=r.fov*Math.PI/180,o=2*Math.atan(Math.tan(s/2)*(e/t)),l=aP/Math.sin(Math.min(s,o)/2);r.position.copy(oP).multiplyScalar(l).add($S),r.lookAt($S),r.updateProjectionMatrix(),Lt()},[r,e,t]),null}function uP({at:r,drop:e,items:t,plates:s}){let o=(0,$s.useRef)(),l=(0,$s.useMemo)(()=>({line:new Dr({color:Wg.clone(),transparent:!0,opacity:.12}),frame:new xi({color:"#241638",metalness:.55,roughness:.45,transparent:!0,opacity:0}),dark:new xi({color:"#0f0b16",metalness:.2,roughness:.8,transparent:!0,opacity:0}),bumper:new xi({color:rP.clone(),metalness:0,roughness:.9,transparent:!0,opacity:0}),plate:s?new Lr({map:Yd(),transparent:!0,opacity:0,depthWrite:!1}):null}),[s]);return mr(()=>{let c=Xg((Rt.p-r)/.12),f=sP(c),h=Xg((Rt.p-.9)/.08);o.current.position.y=c>0?(1-f)*e:0,l.line.opacity=.12+.88*f,l.line.color.copy(Wg).lerp(iP,h),l.frame.opacity=.85*f,l.dark.opacity=.95*f,l.bumper.opacity=.97*f,l.plate&&(l.plate.opacity=f)}),(0,cn.jsxs)("group",{ref:o,children:[t.map(([c,f,h,m="frame"],v)=>(0,cn.jsxs)("group",{position:f,rotation:h||[0,0,0],children:[(0,cn.jsx)("mesh",{geometry:c,material:l[m]}),(0,cn.jsx)("lineSegments",{geometry:rl(c),material:l.line})]},v)),s&&(0,cn.jsxs)(cn.Fragment,{children:[(0,cn.jsx)("mesh",{geometry:rt.plate,material:l.plate,position:[0,3.5,18.06]}),(0,cn.jsx)("mesh",{geometry:rt.plate,material:l.plate,position:[0,3.5,-18.06],rotation:[0,Math.PI,0]})]})]})}function cP(){let r=(0,$s.useMemo)(()=>new Dr({color:Wg.clone(),transparent:!0,opacity:.35}),[]);return(0,cn.jsx)("lineSegments",{geometry:rl(rt.footprint),material:r,position:[0,0,0]})}function fP(){let r=(0,$s.useRef)();return mr((e,t)=>{let s=Rt.still?1:1-Math.exp(-t*7);Rt.p+=(Rt.target-Rt.p)*s,Rt.tiltX+=(Rt.tx-Rt.tiltX)*s,Rt.tiltY+=(Rt.ty-Rt.tiltY)*s,r.current.rotation.y=.65+Rt.p*Math.PI*1.25+Rt.tiltY*.35,r.current.rotation.x=Rt.tiltX*.12,(Math.abs(Rt.target-Rt.p)>4e-4||Math.abs(Rt.tx-Rt.tiltX)>.001||Math.abs(Rt.ty-Rt.tiltY)>.001)&&Rt.visible&&Lt()}),(0,cn.jsxs)("group",{ref:r,children:[(0,cn.jsx)(cP,{}),$d.map((e,t)=>(0,cn.jsx)(uP,{...e},t))]})}function dP(){return(0,cn.jsxs)(cn.Fragment,{children:[(0,cn.jsx)("ambientLight",{intensity:.7}),(0,cn.jsx)("directionalLight",{position:[30,60,40],intensity:2.2}),(0,cn.jsx)("directionalLight",{position:[-40,20,-30],intensity:1.4,color:"#8B3DFF"}),(0,cn.jsx)(fP,{}),(0,cn.jsx)(lP,{})]})}window.Robot3D={mount(r,{reduce:e=!1,label:t=""}={}){let s=document.createElement("canvas");s.className="robot3d",s.setAttribute("role","img"),t&&s.setAttribute("aria-label",t),r.prepend(s),Rt.still=e;let o=Au(s),l=()=>{let c=r.getBoundingClientRect();o.configure({size:{width:c.width,height:c.height,top:0,left:0},dpr:Math.min(window.devicePixelRatio||1,2),frameloop:"demand",flat:!0,gl:{antialias:!0,alpha:!0,powerPreference:"high-performance",toneMapping:ri},camera:{fov:30,near:1,far:800}}),Lt()};return l(),o.render((0,cn.jsx)(dP,{})),new ResizeObserver(l).observe(r),new IntersectionObserver(([c])=>{Rt.visible=c.isIntersecting,Rt.visible&&Lt()},{rootMargin:"100px"}).observe(r),!e&&matchMedia("(hover: hover) and (pointer: fine)").matches&&(r.addEventListener("pointermove",c=>{let f=r.getBoundingClientRect();Rt.ty=((c.clientX-f.left)/f.width-.5)*2,Rt.tx=((c.clientY-f.top)/f.height-.5)*2,Lt()}),r.addEventListener("pointerleave",()=>{Rt.tx=0,Rt.ty=0,Lt()})),document.fonts?.ready.then(()=>Lt()),!0},setProgress(r){Rt.target=Xg(r),Rt.still&&(Rt.p=Rt.target),Lt()}};var Jt=ci(Yr());var ct=ci(Lo());Eu({Group:fr,Mesh:jn,LineSegments:So,InstancedMesh:Yl,AmbientLight:To,DirectionalLight:wo});var Fo=r=>r<0?0:r>1?1:r,Pu=r=>r>=1?1:1-Math.pow(2,-10*r),hP=r=>1-Math.pow(1-r,3),pP=r=>({reduce:r,t0:performance.now(),drag:!1,vx:0,rotY:0,px:9,py:9,onScreen:!0});function YS(r,e,t){return r.drag||(r.vx*=Math.exp(-e*3.2),r.rotY+=r.vx*e+(r.reduce?0:t*e)),r.drag||Math.abs(r.vx)>.002||!r.reduce&&t!==0}var mP={paper:{frame:"#ffffff",dark:"#dedad2",bumper:"#5E2A84",line:"#15121b",lineOp:.9,plate:!0,amb:1.1,key:1.6,fill:"#ffffff"},night:{frame:"#1b1820",dark:"#0e0d11",bumper:"#5E2A84",line:"#efece6",lineOp:.42,plate:!0,amb:.55,key:2.4,fill:"#8B3DFF"},clay:{frame:"#f3efe7",dark:"#d8d1c3",bumper:"#E9B949",line:"#2a1640",lineOp:.35,plate:!0,amb:.9,key:2,fill:"#ffffff"}},gP=new V(0,21,0),vP=new V(70,40,78).normalize(),yP=31;function jS({center:r=gP,view:e=vP,radius:t=yP,scale:s=1}){let o=zn(f=>f.camera),l=zn(f=>f.size.width),c=zn(f=>f.size.height);return(0,Jt.useLayoutEffect)(()=>{if(!l||!c)return;let f=o.fov*Math.PI/180,h=2*Math.atan(Math.tan(f/2)*(l/c)),m=t*s/Math.sin(Math.min(f,h)/2);o.position.copy(e).multiplyScalar(m).add(r),o.lookAt(r),o.updateProjectionMatrix(),Lt()},[o,l,c]),null}function bP({part:r,T:e,I:t}){let s=(0,Jt.useRef)(),o=(0,Jt.useMemo)(()=>({line:new Dr({color:e.line,transparent:!0,opacity:0}),frame:new xi({color:e.frame,roughness:.75,metalness:.05,transparent:!0,opacity:0}),dark:new xi({color:e.dark,roughness:.9,transparent:!0,opacity:0}),bumper:new xi({color:e.bumper,roughness:.85,transparent:!0,opacity:0}),plate:r.plates?new Lr({map:Yd(),transparent:!0,opacity:0,depthWrite:!1}):null}),[]);return mr(()=>{let l=t.reduce?1:Fo((performance.now()-t.t0-250)/2200),c=Fo((l-r.at*.9)/.16),f=hP(c);s.current.position.y=(1-f)*r.drop*1.4,o.line.opacity=e.lineOp*f,o.frame.opacity=f,o.dark.opacity=f,o.bumper.opacity=f,o.frame.transparent=o.dark.transparent=o.bumper.transparent=f<1,o.plate&&(o.plate.opacity=f)}),(0,ct.jsxs)("group",{ref:s,children:[r.items.map(([l,c,f,h="frame"],m)=>(0,ct.jsxs)("group",{position:c,rotation:f||[0,0,0],children:[(0,ct.jsx)("mesh",{geometry:l,material:o[h]}),(0,ct.jsx)("lineSegments",{geometry:rl(l),material:o.line})]},m)),r.plates&&(0,ct.jsxs)(ct.Fragment,{children:[(0,ct.jsx)("mesh",{geometry:rt.plate,material:o.plate,position:[0,3.5,18.06]}),(0,ct.jsx)("mesh",{geometry:rt.plate,material:o.plate,position:[0,3.5,-18.06],rotation:[0,Math.PI,0]})]})]})}function _P({T:r,I:e,opts:t}){let s=(0,Jt.useRef)(),o=(0,Jt.useMemo)(()=>new Dr({color:r.line,transparent:!0,opacity:r.lineOp*.45}),[]);return mr((l,c)=>{let f=YS(e,c,.16);s.current.rotation.y=.55+e.rotY;let h=performance.now()-e.t0<2800;(f||h)&&e.onScreen&&Lt()}),(0,ct.jsxs)(ct.Fragment,{children:[(0,ct.jsx)("ambientLight",{intensity:r.amb}),(0,ct.jsx)("directionalLight",{position:[30,70,50],intensity:r.key}),(0,ct.jsx)("directionalLight",{position:[-50,20,-30],intensity:.9,color:r.fill}),(0,ct.jsxs)("group",{ref:s,children:[(0,ct.jsx)("lineSegments",{geometry:rl(rt.footprint),material:o}),$d.map((l,c)=>(0,ct.jsx)(bP,{part:l,T:r,I:e},c))]}),(0,ct.jsx)(jS,{scale:t.fit||1})]})}var SP={paper:{rim:"#C9A04A",amb:1.2,key:1.8},night:{rim:"#E9B949",amb:.8,key:2.6}},xP=()=>new Va({color:"#8a5cff",metalness:1,roughness:.08,clearcoat:1,clearcoatRoughness:.03,iridescence:1,iridescenceIOR:1.45,iridescenceThicknessRange:[240,780],envMapIntensity:2.2,side:Mi});function MP({I:r,opts:e}){let t=zn(h=>h.gl),s=zn(h=>h.scene),o=(0,Jt.useRef)(),{geo:l,mat:c}=(0,Jt.useMemo)(()=>{let m=Array.from({length:16},(_,b)=>{let g=b/16*Math.PI*2;return new V(Math.cos(g)*18.5,Math.sin(g)*18.5,0)}),v=new Ha(m,!0,"catmullrom",.5);return{geo:qg({curve:v,closed:!0,len:400,cols:22,width:4.4,curl:2.2,twist:4,phase:.6,pulse:.3}),mat:xP()}},[]);(0,Jt.useLayoutEffect)(()=>{s.environment=ZS(t),Lt()},[t]);let f=l.index.count;return mr(()=>{let h=r.reduce?1:Fo((performance.now()-r.t0-500)/1900),m=Pu(h);l.setDrawRange(0,Math.max(6,Math.floor(f*m/6)*6)),o.current.rotation.set(.5+(r.ly||0)*.35,(r.lx||0)*.55,-.25+(1-m)*.8),r.onScreen&&h<1&&Lt()}),(0,ct.jsx)("group",{ref:o,position:[0,0,-7],children:(0,ct.jsx)("mesh",{geometry:l,material:c})})}function wP({T:r,I:e,opts:t}){let s=(0,Jt.useRef)(),o=(0,Jt.useMemo)(()=>{let c=new nu().load(t.badge||"../../assets/badge-520.webp",()=>Lt());c.colorSpace=An,c.anisotropy=8,c.center.set(.5,.5),c.rotation=Math.PI/2;let f=c.clone();f.needsUpdate=!0,f.repeat.set(-1,1);let h=new xi({color:r.rim,metalness:.6,roughness:.35}),m=v=>new Lr({map:v,toneMapped:!1});return{rim:h,faces:[h,m(c),m(f)]}},[]),l=(0,Jt.useMemo)(()=>({disc:new xo(10,10,1.2,96),ring:new eu(10,.45,18,120)}),[]);return mr((c,f)=>{let h=e.reduce?1:Fo((performance.now()-e.t0-150)/1600),m=Pu(h),v=YS(e,f,0),_=!(e.reduce||t.still),b=_?Math.sin((performance.now()-e.t0)/1600)*.16:0,g=Math.abs(e.px)<4&&Math.abs(e.py)<4,x=t.tilt&&g?Math.max(-1,Math.min(1,e.px))*.42:0,R=t.tilt&&g?Math.max(-1,Math.min(1,e.py))*-.32:0,S=1-Math.exp(-f*6);e.lx=(e.lx||0)+(x-(e.lx||0))*S,e.ly=(e.ly||0)+(R-(e.ly||0))*S;let y=Math.abs(x-e.lx)>.001||Math.abs(R-e.ly)>.001;s.current.rotation.y=(1-m)*-Math.PI*3+e.rotY+b*m+e.lx,s.current.rotation.x=(1-m)*.6+(_?Math.cos((performance.now()-e.t0)/2100)*.05*m:0)+e.ly,s.current.scale.setScalar(.7+.3*m),e.onScreen&&(_||v||y||h<1)&&Lt()}),(0,ct.jsxs)(ct.Fragment,{children:[(0,ct.jsx)("ambientLight",{intensity:r.amb}),(0,ct.jsx)("directionalLight",{position:[20,30,40],intensity:r.key}),(0,ct.jsx)("directionalLight",{position:[-30,-10,20],intensity:.6}),(0,ct.jsxs)("group",{ref:s,children:[(0,ct.jsx)("mesh",{geometry:l.disc,material:o.faces,rotation:[Math.PI/2,0,0]}),(0,ct.jsx)("mesh",{geometry:l.ring,material:o.rim})]}),t.halo&&(0,ct.jsx)(MP,{I:e,opts:t}),(0,ct.jsx)(jS,{center:new V(0,0,0),view:new V(0,0,1),radius:t.halo?21:11.5,scale:t.fit||1})]})}var TP={field:{unit:"#1c1924",hot:"#8B3DFF",lead:"#E9B949",amb:.55,key:2.4},paper:{unit:"#17141d",hot:"#6B2FD6",lead:"#E9B949",amb:1,key:1.7},night:{unit:"#2a2631",hot:"#8B3DFF",lead:"#E9B949",amb:.7,key:2.2}};function EP({T:r,I:e,opts:t}){let s=(0,Jt.useRef)(),o=zn(S=>S.size),l=zn(S=>S.camera),c=t.cols||26,f=t.rows||12,h=c*f,m=t.gap||3.2,v=t.zShift||0,_=zn(S=>S.scene),b=(0,Jt.useMemo)(()=>{let S=(y,E)=>y+Math.random()*(E-y);return Array.from({length:h},(y,E)=>{let D=E%c,C=Math.floor(E/c);return{x:(D-(c-1)/2)*m,z:(C-(f-1)/2)*m+v,sx:S(-50,50),sy:S(18,60),sz:S(-40,30),rx:S(-3,3),ry:S(-3,3),delay:C*.07+D*.012+S(0,.08),h:0}})},[]),g=(0,Jt.useMemo)(()=>({o:new On,c:new je,unit:new je(r.unit),hot:new je(r.hot),lead:new je(r.lead),ray:new Eo,plane:new Fi(new V(0,1,0),0),hit:new V(99,0,99),v2:new ut}),[]),x=(0,Jt.useMemo)(()=>new kr(1.7,1.1,1.7),[]),R=(0,Jt.useMemo)(()=>new xi({roughness:.6,metalness:.1}),[]);return(0,Jt.useLayoutEffect)(()=>{if(t.view==="floor"){let S=o.width<700;l.position.set(0,S?20:16,S?26:40),l.lookAt(0,0,S?-44:-30),l.fov=S?58:40,_.fog=new Gl(t.fog||"#000000",t.fogNear||40,t.fogFar||128)}else l.position.set(0,52,46),l.lookAt(0,0,3),l.fov=o.width<700?52:34;l.updateProjectionMatrix(),Lt()},[o.width,o.height]),mr(()=>{let S=(performance.now()-e.t0)/1e3-.2;g.v2.set(e.px,e.py),g.ray.setFromCamera(g.v2,l),g.ray.ray.intersectPlane(g.plane,g.hit)||g.hit.set(999,0,999);let y=!1;b.forEach((E,D)=>{let C=e.reduce?1:Fo((S-E.delay)/.9),N=Pu(C);C<1&&(y=!0);let L=Math.hypot(E.x-g.hit.x,E.z-g.hit.z),M=t.reach||9,P=Math.max(0,1-L/M)*(t.lift||2.2);E.h+=(P-E.h)*.16,Math.abs(P-E.h)>.01&&(y=!0),g.o.position.set(E.sx+(E.x-E.sx)*N,E.sy*(1-N)+.55+E.h,E.sz+(E.z-E.sz)*N),g.o.rotation.set(E.rx*(1-N),E.ry*(1-N),0),g.o.updateMatrix(),s.current.setMatrixAt(D,g.o.matrix);let G=D===Math.floor(f/2)*c+Math.floor(c/2);g.c.copy(G?g.lead:g.unit).lerp(g.hot,G?0:Math.min(1,E.h/1.6)),s.current.setColorAt(D,g.c)}),s.current.instanceMatrix.needsUpdate=!0,s.current.instanceColor&&(s.current.instanceColor.needsUpdate=!0),y&&e.onScreen&&Lt()}),(0,ct.jsxs)(ct.Fragment,{children:[(0,ct.jsx)("ambientLight",{intensity:r.amb}),(0,ct.jsx)("directionalLight",{position:[20,50,30],intensity:r.key}),(0,ct.jsx)("instancedMesh",{ref:s,args:[x,R,h]})]})}function ZS(r){let e=new _o,t=new ls(1,1),s=(c,f,h,m,v=0,_=0,b=1)=>{let g=new jn(t,new Lr({color:new je(c).multiplyScalar(b),side:Mi}));g.scale.set(f,h,1),g.position.set(...m),g.rotation.set(_,v,0),e.add(g)};s("#7a34ff",4,3,[-6,2,1],Math.PI/2,0,1.4),s("#3b1a8f",4,3,[-6,-2.5,-1],Math.PI/2,0,.8),s("#4636ff",3,2.5,[6,-1,2],-Math.PI/2,0,.75),s("#ff6fd0",2.4,1.6,[3,2.5,-5],0,0,1.8),s("#ffffff",12,.22,[0,5,-1],0,Math.PI/2,6),s("#ffffff",12,.12,[0,5,1.6],0,Math.PI/2,5),s("#ffffff",.18,6,[0,0,6],0,0,3),s("#ffcf7a",2.5,.3,[-3,-4,3],0,-Math.PI/2,2.5),s("#5a2bd9",14,14,[0,6,0],0,Math.PI/2,.45),s("#2a1470",14,14,[0,0,-7],0,0,.5);let o=new Ja(r),l=o.fromScene(e,.012).texture;return o.dispose(),l}function qg({len:r=300,cols:e=32,width:t=13,curl:s=7.5,twist:o=1.35,phase:l=.35,lift:c=0,curve:f,closed:h=!1,pulse:m=0}={}){let v=f||new Ha([new V(-112,-30,-40),new V(-62,-40,-6),new V(-14,-47,6),new V(30,-38,0),new V(58,-6,-12),new V(92,46,-40)],!1,"catmullrom",.5),_=[],b=[],g=[],x=new V(0,0,1),R=new V,S=new V,y=new V,E=h?r:r+1;for(let C=0;C<E;C++){let N=C/r,L=v.getPointAt(N).add(new V(0,c,0)),M=v.getTangentAt(N);S.crossVectors(M,x).normalize(),R.crossVectors(S,M).normalize();let P=N*Math.PI*o+l,G=Math.cos(P),F=Math.sin(P),B=h?t*(1-m+m*Math.sin(N*Math.PI*2*3)):t*(.7+.3*Math.sin(Math.PI*N));for(let W=0;W<=e;W++){let j=W/e*2-1,O=j*B,K=(j*j-.35)*s;y.copy(S).multiplyScalar(O*G+K*F).addScaledVector(R,-O*F+K*G).add(L),_.push(y.x,y.y,y.z),b.push(N,W/e)}}for(let C=0;C<r;C++)for(let N=0;N<e;N++){let L=C*(e+1)+N,M=(C+1)%E*(e+1)+N;g.push(L,M,L+1,L+1,M,M+1)}let D=new Si;return D.setAttribute("position",new Qt(_,3)),D.setAttribute("uv",new Qt(b,2)),D.setIndex(g),D.computeVertexNormals(),D.computeBoundingSphere(),D}var AP={night:{color:"#5a2bd9"}};function RP({T:r,I:e,opts:t}){let s=zn(g=>g.gl),o=zn(g=>g.scene),l=zn(g=>g.camera),c=zn(g=>g.size),f=(0,Jt.useRef)(),h=(0,Jt.useRef)(),{geo:m,geo2:v,mat:_}=(0,Jt.useMemo)(()=>{let g=qg(t.ribbon),x=qg({width:2.6,curl:.9,twist:2.4,phase:1.9,lift:11,cols:10}),R=new Va({color:r.color,metalness:1,roughness:.06,clearcoat:1,clearcoatRoughness:.03,iridescence:1,iridescenceIOR:1.4,iridescenceThicknessRange:[220,760],envMapIntensity:1.25,side:Mi});return{geo:g,geo2:x,mat:R}},[]);(0,Jt.useLayoutEffect)(()=>{o.environment=ZS(s),Lt()},[s]),(0,Jt.useLayoutEffect)(()=>{let g=c.width/c.height<.9;l.fov=35,l.position.set(0,0,g?175:118),l.lookAt(0,0,0),l.updateProjectionMatrix(),f.current.rotation.z=0,f.current.position.set(g?-14:0,g?-14:0,0),Lt()},[c.width,c.height]);let b=m.index.count;return mr((g,x)=>{let R=e.reduce?1:Fo((performance.now()-e.t0-120)/2400),S=Pu(R);m.setDrawRange(0,Math.max(6,Math.floor(b*S/6)*6));let y=Pu(Fo(R*1.15-.15));v.setDrawRange(0,Math.max(6,Math.floor(v.index.count*y/6)*6));let E=Math.abs(e.px)<4&&Math.abs(e.py)<4,D=!e.reduce&&E?Ed.clamp(e.px,-1,1):0,C=!e.reduce&&E?Ed.clamp(e.py,-1,1):0,N=1-Math.exp(-x*2.6);e.lx=(e.lx||0)+(D-(e.lx||0))*N,e.ly=(e.ly||0)+(C-(e.ly||0))*N,f.current.rotation.y=e.lx*.22+(1-S)*-.35,f.current.rotation.x=-e.ly*.16,h.current.position.y=(1-S)*-8;let L=Math.abs(D-e.lx)>8e-4||Math.abs(C-e.ly)>8e-4;e.onScreen&&(R<1||L)&&Lt()}),(0,ct.jsx)("group",{ref:f,children:(0,ct.jsxs)("group",{ref:h,children:[(0,ct.jsx)("mesh",{geometry:m,material:_}),(0,ct.jsx)("mesh",{geometry:v,material:_})]})})}var CP={robot:[_P,mP],coin:[wP,SP],ranks:[EP,TP],flow:[RP,AP]};window.Hero3D={mount(r,e={}){let{scene:t="robot",theme:s="paper",reduce:o=matchMedia("(prefers-reduced-motion: reduce)").matches,label:l=""}=e,[c,f]=CP[t],h=f[s]||Object.values(f)[0],m=pP(o),v=document.createElement("canvas");v.className="hero3d",l?(v.setAttribute("role","img"),v.setAttribute("aria-label",l)):v.setAttribute("aria-hidden","true"),r.prepend(v);let _=Au(v),b=()=>{let D=r.getBoundingClientRect();_.configure({size:{width:D.width,height:D.height,top:0,left:0},dpr:Math.min(window.devicePixelRatio||1,2),frameloop:"demand",flat:!0,gl:{antialias:!0,alpha:!0,powerPreference:"high-performance",toneMapping:ri},camera:{fov:30,near:1,far:900}}),Lt()};b(),_.render((0,ct.jsx)(c,{T:h,I:m,opts:e})),new ResizeObserver(b).observe(r),new IntersectionObserver(([D])=>{m.onScreen=D.isIntersecting,m.onScreen&&Lt()}).observe(r);let g=e.dragTarget||r,x=e.pointerTarget||r,R=0,S=0;g.addEventListener("pointerdown",D=>{t!=="ranks"&&(m.drag=!0,R=D.clientX,S=D.timeStamp,g.setPointerCapture?.(D.pointerId),Lt())});let y=D=>{let C=r.getBoundingClientRect();if(m.px=(D.clientX-C.left)/C.width*2-1,m.py=-((D.clientY-C.top)/C.height)*2+1,m.drag){let N=D.clientX-R,L=Math.max(1,D.timeStamp-S)/1e3;m.rotY+=N*.01,m.vx=N*.01/L,R=D.clientX,S=D.timeStamp}Lt()};x.addEventListener("pointermove",y),x!==g&&g.addEventListener("pointermove",y);let E=()=>{m.drag=!1,Lt()};return g.addEventListener("pointerup",E),g.addEventListener("pointercancel",E),x.addEventListener("pointerleave",()=>{m.px=9,m.py=9,Lt()}),document.fonts?.ready.then(()=>Lt()),!0}};})();
