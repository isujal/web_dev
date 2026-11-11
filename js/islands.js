(()=>{var vM=Object.create;var my=Object.defineProperty;var yM=Object.getOwnPropertyDescriptor;var bM=Object.getOwnPropertyNames;var _M=Object.getPrototypeOf,SM=Object.prototype.hasOwnProperty;var Tr=(r,e)=>()=>{try{return e||r((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};var xM=(r,e,t,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of bM(e))!SM.call(r,o)&&o!==t&&my(r,o,{get:()=>e[o],enumerable:!(s=yM(e,o))||s.enumerable});return r};var ui=(r,e,t)=>(t=r!=null?vM(_M(r)):{},xM(e||!r||!r.__esModule?my(t,"default",{value:r,enumerable:!0}):t,r));var Cy=Tr(it=>{"use strict";var Tp=Symbol.for("react.transitional.element"),MM=Symbol.for("react.portal"),wM=Symbol.for("react.fragment"),TM=Symbol.for("react.strict_mode"),EM=Symbol.for("react.profiler"),AM=Symbol.for("react.consumer"),CM=Symbol.for("react.context"),RM=Symbol.for("react.forward_ref"),PM=Symbol.for("react.suspense"),IM=Symbol.for("react.memo"),_y=Symbol.for("react.lazy"),NM=Symbol.for("react.activity"),LM=Symbol.for("react.view_transition"),gy=Symbol.iterator;function DM(r){return r===null||typeof r!="object"?null:(r=gy&&r[gy]||r["@@iterator"],typeof r=="function"?r:null)}var Sy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},xy=Object.assign,My={};function da(r,e,t){this.props=r,this.context=e,this.refs=My,this.updater=t||Sy}da.prototype.isReactComponent={};da.prototype.setState=function(r,e){if(typeof r!="object"&&typeof r!="function"&&r!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,r,e,"setState")};da.prototype.forceUpdate=function(r){this.updater.enqueueForceUpdate(this,r,"forceUpdate")};function wy(){}wy.prototype=da.prototype;function Ep(r,e,t){this.props=r,this.context=e,this.refs=My,this.updater=t||Sy}var Ap=Ep.prototype=new wy;Ap.constructor=Ep;xy(Ap,da.prototype);Ap.isPureReactComponent=!0;var vy=Array.isArray;function wp(){}var jt={H:null,A:null,T:null,S:null},Ty=Object.prototype.hasOwnProperty;function Cp(r,e,t){var s=t.ref;return{$$typeof:Tp,type:r,key:e,ref:s!==void 0?s:null,props:t}}function kM(r,e){return Cp(r.type,e,r.props)}function Rp(r){return typeof r=="object"&&r!==null&&r.$$typeof===Tp}function FM(r){var e={"=":"=0",":":"=2"};return"$"+r.replace(/[=:]/g,function(t){return e[t]})}var yy=/\/+/g;function Mp(r,e){return typeof r=="object"&&r!==null&&r.key!=null?FM(""+r.key):e.toString(36)}function UM(r){switch(r.status){case"fulfilled":return r.value;case"rejected":throw r.reason;default:switch(typeof r.status=="string"?r.then(wp,wp):(r.status="pending",r.then(function(e){r.status==="pending"&&(r.status="fulfilled",r.value=e)},function(e){r.status==="pending"&&(r.status="rejected",r.reason=e)})),r.status){case"fulfilled":return r.value;case"rejected":throw r.reason}}throw r}function fa(r,e,t,s,o){var l=typeof r;(l==="undefined"||l==="boolean")&&(r=null);var c=!1;if(r===null)c=!0;else switch(l){case"bigint":case"string":case"number":c=!0;break;case"object":switch(r.$$typeof){case Tp:case MM:c=!0;break;case _y:return c=r._init,fa(c(r._payload),e,t,s,o)}}if(c)return o=o(r),c=s===""?"."+Mp(r,0):s,vy(o)?(t="",c!=null&&(t=c.replace(yy,"$&/")+"/"),fa(o,e,t,"",function(m){return m})):o!=null&&(Rp(o)&&(o=kM(o,t+(o.key==null||r&&r.key===o.key?"":(""+o.key).replace(yy,"$&/")+"/")+c)),e.push(o)),1;c=0;var d=s===""?".":s+":";if(vy(r))for(var p=0;p<r.length;p++)s=r[p],l=d+Mp(s,p),c+=fa(s,e,t,l,o);else if(p=DM(r),typeof p=="function")for(r=p.call(r),p=0;!(s=r.next()).done;)s=s.value,l=d+Mp(s,p++),c+=fa(s,e,t,l,o);else if(l==="object"){if(typeof r.then=="function")return fa(UM(r),e,t,s,o);throw e=String(r),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return c}function _c(r,e,t){if(r==null)return r;var s=[],o=0;return fa(r,s,"","",function(l){return e.call(t,l,o++)}),s}function OM(r){if(r._status===-1){var e=r._result,t=e();t.then(function(s){(r._status===0||r._status===-1)&&(r._status=1,r._result=s,t.status===void 0&&(t.status="fulfilled",t.value=s))},function(s){(r._status===0||r._status===-1)&&(r._status=2,r._result=s,t.status===void 0&&(t.status="rejected",t.reason=s))}),r._status===-1&&(r._status=0,r._result=t)}if(r._status===1)return r._result.default;throw r._result}var by=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)};function Ey(r){var e=jt.T,t={};t.types=e!==null?e.types:null,jt.T=t;try{var s=r(),o=jt.S;o!==null&&o(t,s),typeof s=="object"&&s!==null&&typeof s.then=="function"&&s.then(wp,by)}catch(l){by(l)}finally{e!==null&&t.types!==null&&(e.types=t.types),jt.T=e}}function Ay(r){var e=jt.T;if(e!==null){var t=e.types;t===null?e.types=[r]:t.indexOf(r)===-1&&t.push(r)}else Ey(Ay.bind(null,r))}var zM={map:_c,forEach:function(r,e,t){_c(r,function(){e.apply(this,arguments)},t)},count:function(r){var e=0;return _c(r,function(){e++}),e},toArray:function(r){return _c(r,function(e){return e})||[]},only:function(r){if(!Rp(r))throw Error("React.Children.only expected to receive a single React element child.");return r}};it.Activity=NM;it.Children=zM;it.Component=da;it.Fragment=wM;it.Profiler=EM;it.PureComponent=Ep;it.StrictMode=TM;it.Suspense=PM;it.ViewTransition=LM;it.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=jt;it.__COMPILER_RUNTIME={__proto__:null,c:function(r){return jt.H.useMemoCache(r)}};it.addTransitionType=Ay;it.cache=function(r){return function(){return r.apply(null,arguments)}};it.cacheSignal=function(){return null};it.cloneElement=function(r,e,t){if(r==null)throw Error("The argument must be a React element, but you passed "+r+".");var s=xy({},r.props),o=r.key;if(e!=null)for(l in e.key!==void 0&&(o=""+e.key),e)!Ty.call(e,l)||l==="key"||l==="__self"||l==="__source"||l==="ref"&&e.ref===void 0||(s[l]=e[l]);var l=arguments.length-2;if(l===1)s.children=t;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];s.children=c}return Cp(r.type,o,s)};it.createContext=function(r){return r={$$typeof:CM,_currentValue:r,_currentValue2:r,_threadCount:0,Provider:null,Consumer:null},r.Provider=r,r.Consumer={$$typeof:AM,_context:r},r};it.createElement=function(r,e,t){var s,o={},l=null;if(e!=null)for(s in e.key!==void 0&&(l=""+e.key),e)Ty.call(e,s)&&s!=="key"&&s!=="__self"&&s!=="__source"&&(o[s]=e[s]);var c=arguments.length-2;if(c===1)o.children=t;else if(1<c){for(var d=Array(c),p=0;p<c;p++)d[p]=arguments[p+2];o.children=d}if(r&&r.defaultProps)for(s in c=r.defaultProps,c)o[s]===void 0&&(o[s]=c[s]);return Cp(r,l,o)};it.createRef=function(){return{current:null}};it.forwardRef=function(r){return{$$typeof:RM,render:r}};it.isValidElement=Rp;it.lazy=function(r){return{$$typeof:_y,_payload:{_status:-1,_result:r},_init:OM}};it.memo=function(r,e){return{$$typeof:IM,type:r,compare:e===void 0?null:e}};it.startTransition=Ey;it.unstable_useCacheRefresh=function(){return jt.H.useCacheRefresh()};it.use=function(r){return jt.H.use(r)};it.useActionState=function(r,e,t){return jt.H.useActionState(r,e,t)};it.useCallback=function(r,e){return jt.H.useCallback(r,e)};it.useContext=function(r){return jt.H.useContext(r)};it.useDebugValue=function(){};it.useDeferredValue=function(r,e){return jt.H.useDeferredValue(r,e)};it.useEffect=function(r,e){return jt.H.useEffect(r,e)};it.useEffectEvent=function(r){return jt.H.useEffectEvent(r)};it.useId=function(){return jt.H.useId()};it.useImperativeHandle=function(r,e,t){return jt.H.useImperativeHandle(r,e,t)};it.useInsertionEffect=function(r,e){return jt.H.useInsertionEffect(r,e)};it.useLayoutEffect=function(r,e){return jt.H.useLayoutEffect(r,e)};it.useMemo=function(r,e){return jt.H.useMemo(r,e)};it.useOptimistic=function(r,e){return jt.H.useOptimistic(r,e)};it.useReducer=function(r,e,t){return jt.H.useReducer(r,e,t)};it.useRef=function(r){return jt.H.useRef(r)};it.useState=function(r){return jt.H.useState(r)};it.useSyncExternalStore=function(r,e,t){return jt.H.useSyncExternalStore(r,e,t)};it.useTransition=function(){return jt.H.useTransition()};it.version="19.3.1"});var qr=Tr((eP,Ry)=>{"use strict";Ry.exports=Cy()});var C_=Tr(Td=>{"use strict";var fR=Symbol.for("react.transitional.element"),dR=Symbol.for("react.fragment");function A_(r,e,t){var s=null;if(t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),"key"in e){t={};for(var o in e)o!=="key"&&(t[o]=e[o])}else t=e;return e=t.ref,{$$typeof:fR,type:r,key:s,ref:e!==void 0?e:null,props:t}}Td.Fragment=dR;Td.jsx=A_;Td.jsxs=A_});var Io=Tr((TN,R_)=>{"use strict";R_.exports=C_()});var I_=Tr(P_=>{"use strict";var Wa=qr();function hR(r,e){return r===e&&(r!==0||1/r===1/e)||r!==r&&e!==e}var pR=typeof Object.is=="function"?Object.is:hR,mR=Wa.useState,gR=Wa.useEffect,vR=Wa.useLayoutEffect,yR=Wa.useDebugValue;function bR(r,e){var t=e(),s=mR({inst:{value:t,getSnapshot:e}}),o=s[0].inst,l=s[1];return vR(function(){o.value=t,o.getSnapshot=e,Qm(o)&&l({inst:o})},[r,t,e]),gR(function(){return Qm(o)&&l({inst:o}),r(function(){Qm(o)&&l({inst:o})})},[r]),yR(t),t}function Qm(r){var e=r.getSnapshot;r=r.value;try{var t=e();return!pR(r,t)}catch{return!0}}function _R(r,e){return e()}var SR=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?_R:bR;P_.useSyncExternalStore=Wa.useSyncExternalStore!==void 0?Wa.useSyncExternalStore:SR});var L_=Tr((AN,N_)=>{"use strict";N_.exports=I_()});var k_=Tr(D_=>{"use strict";var Ed=qr(),xR=L_();function MR(r,e){return r===e&&(r!==0||1/r===1/e)||r!==r&&e!==e}var wR=typeof Object.is=="function"?Object.is:MR,TR=xR.useSyncExternalStore,ER=Ed.useRef,AR=Ed.useEffect,CR=Ed.useMemo,RR=Ed.useDebugValue;D_.useSyncExternalStoreWithSelector=function(r,e,t,s,o){var l=ER(null);if(l.current===null){var c={hasValue:!1,value:null};l.current=c}else c=l.current;l=CR(function(){function p(y){if(!m){if(m=!0,g=y,y=s(y),o!==void 0&&c.hasValue){var x=c.value;if(o(x,y))return _=x}return _=y}if(x=_,wR(g,y))return x;var C=s(y);return o!==void 0&&o(x,C)?(g=y,x):(g=y,_=C)}var m=!1,g,_,b=t===void 0?null:t;return[function(){return p(e())},b===null?void 0:function(){return p(b())}]},[e,t,s,o]);var d=TR(r,l[0],l[1]);return AR(function(){c.hasValue=!0,c.value=d},[d]),RR(d),d}});var U_=Tr((RN,F_)=>{"use strict";F_.exports=k_()});var rS=Tr(Qt=>{"use strict";function ig(r,e){var t=r.length;r.push(e);e:for(;0<t;){var s=t-1>>>1,o=r[s];if(0<Ad(o,e))r[s]=e,r[t]=o,t=s;else break e}}function Fr(r){return r.length===0?null:r[0]}function Rd(r){if(r.length===0)return null;var e=r[0],t=r.pop();if(t!==e){r[0]=t;e:for(var s=0,o=r.length,l=o>>>1;s<l;){var c=2*(s+1)-1,d=r[c],p=c+1,m=r[p];if(0>Ad(d,t))p<o&&0>Ad(m,d)?(r[s]=m,r[p]=t,s=p):(r[s]=d,r[c]=t,s=c);else if(p<o&&0>Ad(m,t))r[s]=m,r[p]=t,s=p;else break e}}return e}function Ad(r,e){var t=r.sortIndex-e.sortIndex;return t!==0?t:r.id-e.id}Qt.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(j_=performance,Qt.unstable_now=function(){return j_.now()}):(eg=Date,Z_=eg.now(),Qt.unstable_now=function(){return eg.now()-Z_});var j_,eg,Z_,us=[],Gs=[],DR=1,Ji=null,oi=3,rg=!1,fu=!1,du=!1,sg=!1,Q_=typeof setTimeout=="function"?setTimeout:null,eS=typeof clearTimeout=="function"?clearTimeout:null,J_=typeof setImmediate<"u"?setImmediate:null;function Cd(r){for(var e=Fr(Gs);e!==null;){if(e.callback===null)Rd(Gs);else if(e.startTime<=r)Rd(Gs),e.sortIndex=e.expirationTime,ig(us,e);else break;e=Fr(Gs)}}function og(r){if(du=!1,Cd(r),!fu)if(Fr(us)!==null)fu=!0,qa||(qa=!0,Xa());else{var e=Fr(Gs);e!==null&&ag(og,e.startTime-r)}}var qa=!1,hu=-1,tS=5,nS=-1;function iS(){return sg?!0:!(Qt.unstable_now()-nS<tS)}function tg(){if(sg=!1,qa){var r=Qt.unstable_now();nS=r;var e=!0;try{e:{fu=!1,du&&(du=!1,eS(hu),hu=-1),rg=!0;var t=oi;try{t:{for(Cd(r),Ji=Fr(us);Ji!==null&&!(Ji.expirationTime>r&&iS());){var s=Ji.callback;if(typeof s=="function"){Ji.callback=null,oi=Ji.priorityLevel;var o=s(Ji.expirationTime<=r);if(r=Qt.unstable_now(),typeof o=="function"){Ji.callback=o,Cd(r),e=!0;break t}Ji===Fr(us)&&Rd(us),Cd(r)}else Rd(us);Ji=Fr(us)}if(Ji!==null)e=!0;else{var l=Fr(Gs);l!==null&&ag(og,l.startTime-r),e=!1}}break e}finally{Ji=null,oi=t,rg=!1}e=void 0}}finally{e?Xa():qa=!1}}}var Xa;typeof J_=="function"?Xa=function(){J_(tg)}:typeof MessageChannel<"u"?(ng=new MessageChannel,K_=ng.port2,ng.port1.onmessage=tg,Xa=function(){K_.postMessage(null)}):Xa=function(){Q_(tg,0)};var ng,K_;function ag(r,e){hu=Q_(function(){r(Qt.unstable_now())},e)}Qt.unstable_IdlePriority=5;Qt.unstable_ImmediatePriority=1;Qt.unstable_LowPriority=4;Qt.unstable_NormalPriority=3;Qt.unstable_Profiling=null;Qt.unstable_UserBlockingPriority=2;Qt.unstable_cancelCallback=function(r){r.callback=null};Qt.unstable_forceFrameRate=function(r){0>r||125<r?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):tS=0<r?Math.floor(1e3/r):5};Qt.unstable_getCurrentPriorityLevel=function(){return oi};Qt.unstable_next=function(r){switch(oi){case 1:case 2:case 3:var e=3;break;default:e=oi}var t=oi;oi=e;try{return r()}finally{oi=t}};Qt.unstable_requestPaint=function(){sg=!0};Qt.unstable_runWithPriority=function(r,e){switch(r){case 1:case 2:case 3:case 4:case 5:break;default:r=3}var t=oi;oi=r;try{return e()}finally{oi=t}};Qt.unstable_scheduleCallback=function(r,e,t){var s=Qt.unstable_now();switch(typeof t=="object"&&t!==null?(t=t.delay,t=typeof t=="number"&&0<t?s+t:s):t=s,r){case 1:var o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3}return o=t+o,r={id:DR++,callback:e,priorityLevel:r,startTime:t,expirationTime:o,sortIndex:-1},t>s?(r.sortIndex=t,ig(Gs,r),Fr(us)===null&&r===Fr(Gs)&&(du?(eS(hu),hu=-1):du=!0,ag(og,t-s))):(r.sortIndex=o,ig(us,r),fu||rg||(fu=!0,qa||(qa=!0,Xa()))),r};Qt.unstable_shouldYield=iS;Qt.unstable_wrapCallback=function(r){var e=oi;return function(){var t=oi;oi=e;try{return r.apply(this,arguments)}finally{oi=t}}}});var lg=Tr((kN,sS)=>{"use strict";sS.exports=rS()});var en=ui(qr()),yS=ui(qr());var lb=0,am=1,ub=2;var lm=0,To=1,Oa=2,Bs=3,Hs=0,hi=1,Lr=2,Eo=0,za=1,um=2,cm=3,fm=4,cb=5;var Ao=100,fb=101,db=102,hb=103,pb=104,mb=200,gb=201,vb=202,yb=203,dm=204,hm=205,bb=206,_b=207,Sb=208,xb=209,Mb=210,wb=211,Tb=212,Eb=213,Ab=214,Jc=0,Kc=1,Qc=2,Ra=3,ef=4,tf=5,nf=6,rf=7,pm=0,Cb=1,Rb=2,ii=0,mm=1,gm=2,vm=3,Kl=4,ym=5,bm=6,_m=7;var Sm=300,Co=301,Ba=302,Nf=303,Lf=304,sf=1e3,Ar=1001,of=1002,Fn=1003,Pb=1004;var Ql=1005;var fi=1006,Df=1007;var os=1008;var ri=1009,xm=1010,Mm=1011,Ha=1012,kf=1013,dr=1014,Zi=1015,hr=1016,Ff=1017,Uf=1018,Ro=1020,wm=35902,Tm=35899,Em=1021,Am=1022,Fi=1023,es=1026,as=1027,Of=1028,zf=1029,Vs=1030,Bf=1031;var Hf=1033,eu=33776,tu=33777,nu=33778,iu=33779,Vf=35840,Gf=35841,Wf=35842,Xf=35843,qf=36196,$f=37492,Yf=37496,jf=37488,Zf=37489,ru=37490,Jf=37491,Kf=37808,Qf=37809,ed=37810,td=37811,nd=37812,id=37813,rd=37814,sd=37815,od=37816,ad=37817,ld=37818,ud=37819,cd=37820,fd=37821,dd=36492,hd=36494,pd=36495,md=36283,gd=36284,su=36285,vd=36286;var Il=2300,af=2301,$c=2302,Qp=2303,em=2400,tm=2401,nm=2402;var Ib=3200;var yd=0,Nb=1,ls="",En="srgb",vo="srgb-linear",Nl="linear",Ft="srgb";var Yc=7680;var Lb=519,Db=512,kb=513,Fb=514,Cm=515,Ub=516,Ob=517,Rm=518,Pm=519,zb=35044;var Im="300 es",$i=2e3,Pa=2001;function BM(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function HM(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Ia(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Bb(){let r=Ia("canvas");return r.style.display="block",r}var Py={},Na=null;function Nm(...r){let e="THREE."+r.shift();Na?Na("log",e,...r):console.log(e,...r)}function Hb(r){let e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Ye(...r){r=Hb(r);let e="THREE."+r.shift();if(Na)Na("warn",e,...r);else{let t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function tt(...r){r=Hb(r);let e="THREE."+r.shift();if(Na)Na("error",e,...r);else{let t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function Pl(...r){let e=r.join(" ");e in Py||(Py[e]=!0,Ye(...r))}function Vb(r,e,t){return new Promise(function(s,o){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:s()}}setTimeout(l,t)})}var Gb={[Jc]:Jc,[Qc]:nf,[ef]:ef,[Ra]:tf,[Kc]:Kc,[nf]:Qc,[rf]:rf,[tf]:Ra},Cr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){let s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){let s=this._listeners;if(s===void 0)return;let o=s[e];if(o!==void 0){let l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let s=t[e.type];if(s!==void 0){e.target=this;let o=s.slice(0);for(let l=0,c=o.length;l<c;l++)o[l].call(this,e);e.target=null}}},Qn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var jc=Math.PI/180,lf=180/Math.PI;function ou(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Qn[r&255]+Qn[r>>8&255]+Qn[r>>16&255]+Qn[r>>24&255]+"-"+Qn[e&255]+Qn[e>>8&255]+"-"+Qn[e>>16&15|64]+Qn[e>>24&255]+"-"+Qn[t&63|128]+Qn[t>>8&255]+"-"+Qn[t>>16&255]+Qn[t>>24&255]+Qn[s&255]+Qn[s>>8&255]+Qn[s>>16&255]+Qn[s>>24&255]).toLowerCase()}function Mt(r,e,t){return Math.max(e,Math.min(t,r))}function VM(r,e){return(r%e+e)%e}function Pp(r,e,t){return(1-t)*r+t*e}function Wb(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Lm(r){switch(r.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function GM(r,e){if(e.constructor===Float32Array)return r;let t=Lm(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(r/t,-1)}function WM(r,e){if(e.constructor===Float32Array)return r;let t=Lm(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(r*t)}var Om=class Om{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,s=this.y,o=e.elements;return this.x=o[0]*t+o[3]*s+o[6],this.y=o[1]*t+o[4]*s+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this}clampLength(e,t){let s=this.length();return this.divideScalar(s||1).multiplyScalar(Mt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let s=this.dot(e)/t;return Math.acos(Mt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let s=Math.cos(t),o=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*s-c*o+e.x,this.y=l*o+c*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Om.prototype.isVector2=!0;var ct=Om,Rr=class{constructor(e=0,t=0,s=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=o}static slerpFlat(e,t,s,o,l,c,d){let p=s[o+0],m=s[o+1],g=s[o+2],_=s[o+3],b=l[c+0],y=l[c+1],x=l[c+2],C=l[c+3];if(_!==C||p!==b||m!==y||g!==x){let S=p*b+m*y+g*x+_*C;S<0&&(b=-b,y=-y,x=-x,C=-C,S=-S);let v=1-d;if(S<.9995){let A=Math.acos(S),L=Math.sin(A);v=Math.sin(v*A)/L,d=Math.sin(d*A)/L,p=p*v+b*d,m=m*v+y*d,g=g*v+x*d,_=_*v+C*d}else{p=p*v+b*d,m=m*v+y*d,g=g*v+x*d,_=_*v+C*d;let A=1/Math.sqrt(p*p+m*m+g*g+_*_);p*=A,m*=A,g*=A,_*=A}}e[t]=p,e[t+1]=m,e[t+2]=g,e[t+3]=_}static multiplyQuaternionsFlat(e,t,s,o,l,c){let d=s[o],p=s[o+1],m=s[o+2],g=s[o+3],_=l[c],b=l[c+1],y=l[c+2],x=l[c+3];return e[t]=d*x+g*_+p*y-m*b,e[t+1]=p*x+g*b+m*_-d*y,e[t+2]=m*x+g*y+d*b-p*_,e[t+3]=g*x-d*_-p*b-m*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,o){return this._x=e,this._y=t,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let s=e._x,o=e._y,l=e._z,c=e._order,d=Math.cos,p=Math.sin,m=d(s/2),g=d(o/2),_=d(l/2),b=p(s/2),y=p(o/2),x=p(l/2);switch(c){case"XYZ":this._x=b*g*_+m*y*x,this._y=m*y*_-b*g*x,this._z=m*g*x+b*y*_,this._w=m*g*_-b*y*x;break;case"YXZ":this._x=b*g*_+m*y*x,this._y=m*y*_-b*g*x,this._z=m*g*x-b*y*_,this._w=m*g*_+b*y*x;break;case"ZXY":this._x=b*g*_-m*y*x,this._y=m*y*_+b*g*x,this._z=m*g*x+b*y*_,this._w=m*g*_-b*y*x;break;case"ZYX":this._x=b*g*_-m*y*x,this._y=m*y*_+b*g*x,this._z=m*g*x-b*y*_,this._w=m*g*_+b*y*x;break;case"YZX":this._x=b*g*_+m*y*x,this._y=m*y*_+b*g*x,this._z=m*g*x-b*y*_,this._w=m*g*_-b*y*x;break;case"XZY":this._x=b*g*_-m*y*x,this._y=m*y*_-b*g*x,this._z=m*g*x+b*y*_,this._w=m*g*_+b*y*x;break;default:Ye("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let s=t/2,o=Math.sin(s);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,s=t[0],o=t[4],l=t[8],c=t[1],d=t[5],p=t[9],m=t[2],g=t[6],_=t[10],b=s+d+_;if(b>0){let y=.5/Math.sqrt(b+1);this._w=.25/y,this._x=(g-p)*y,this._y=(l-m)*y,this._z=(c-o)*y}else if(s>d&&s>_){let y=2*Math.sqrt(1+s-d-_);this._w=(g-p)/y,this._x=.25*y,this._y=(o+c)/y,this._z=(l+m)/y}else if(d>_){let y=2*Math.sqrt(1+d-s-_);this._w=(l-m)/y,this._x=(o+c)/y,this._y=.25*y,this._z=(p+g)/y}else{let y=2*Math.sqrt(1+_-s-d);this._w=(c-o)/y,this._x=(l+m)/y,this._y=(p+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){let s=this.angleTo(e);if(s===0)return this;let o=Math.min(1,t/s);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let s=e._x,o=e._y,l=e._z,c=e._w,d=t._x,p=t._y,m=t._z,g=t._w;return this._x=s*g+c*d+o*m-l*p,this._y=o*g+c*p+l*d-s*m,this._z=l*g+c*m+s*p-o*d,this._w=c*g-s*d-o*p-l*m,this._onChangeCallback(),this}slerp(e,t){let s=e._x,o=e._y,l=e._z,c=e._w,d=this.dot(e);d<0&&(s=-s,o=-o,l=-l,c=-c,d=-d);let p=1-t;if(d<.9995){let m=Math.acos(d),g=Math.sin(m);p=Math.sin(p*m)/g,t=Math.sin(t*m)/g,this._x=this._x*p+s*t,this._y=this._y*p+o*t,this._z=this._z*p+l*t,this._w=this._w*p+c*t,this._onChangeCallback()}else this._x=this._x*p+s*t,this._y=this._y*p+o*t,this._z=this._z*p+l*t,this._w=this._w*p+c*t,this.normalize();return this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),o=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},zm=class zm{constructor(e=0,t=0,s=0){this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Iy.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Iy.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*o,this.y=l[1]*t+l[4]*s+l[7]*o,this.z=l[2]*t+l[5]*s+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,s=this.y,o=this.z,l=e.elements,c=1/(l[3]*t+l[7]*s+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*o+l[12])*c,this.y=(l[1]*t+l[5]*s+l[9]*o+l[13])*c,this.z=(l[2]*t+l[6]*s+l[10]*o+l[14])*c,this}applyQuaternion(e){let t=this.x,s=this.y,o=this.z,l=e.x,c=e.y,d=e.z,p=e.w,m=2*(c*o-d*s),g=2*(d*t-l*o),_=2*(l*s-c*t);return this.x=t+p*m+c*_-d*g,this.y=s+p*g+d*m-l*_,this.z=o+p*_+l*g-c*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*o,this.y=l[1]*t+l[5]*s+l[9]*o,this.z=l[2]*t+l[6]*s+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this}clampLength(e,t){let s=this.length();return this.divideScalar(s||1).multiplyScalar(Mt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let s=e.x,o=e.y,l=e.z,c=t.x,d=t.y,p=t.z;return this.x=o*p-l*d,this.y=l*c-s*p,this.z=s*d-o*c,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Ip.copy(this).projectOnVector(e),this.sub(Ip)}reflect(e){return this.sub(Ip.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let s=this.dot(e)/t;return Math.acos(Mt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,s=this.y-e.y,o=this.z-e.z;return t*t+s*s+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){let o=Math.sin(t)*e;return this.x=o*Math.sin(s),this.y=Math.cos(t)*e,this.z=o*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};zm.prototype.isVector3=!0;var X=zm,Ip=new X,Iy=new Rr,Bm=class Bm{constructor(e,t,s,o,l,c,d,p,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,c,d,p,m)}set(e,t,s,o,l,c,d,p,m){let g=this.elements;return g[0]=e,g[1]=o,g[2]=d,g[3]=t,g[4]=l,g[5]=p,g[6]=s,g[7]=c,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let s=e.elements,o=t.elements,l=this.elements,c=s[0],d=s[3],p=s[6],m=s[1],g=s[4],_=s[7],b=s[2],y=s[5],x=s[8],C=o[0],S=o[3],v=o[6],A=o[1],L=o[4],R=o[7],D=o[2],N=o[5],M=o[8];return l[0]=c*C+d*A+p*D,l[3]=c*S+d*L+p*N,l[6]=c*v+d*R+p*M,l[1]=m*C+g*A+_*D,l[4]=m*S+g*L+_*N,l[7]=m*v+g*R+_*M,l[2]=b*C+y*A+x*D,l[5]=b*S+y*L+x*N,l[8]=b*v+y*R+x*M,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],c=e[4],d=e[5],p=e[6],m=e[7],g=e[8];return t*c*g-t*d*m-s*l*g+s*d*p+o*l*m-o*c*p}invert(){let e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],c=e[4],d=e[5],p=e[6],m=e[7],g=e[8],_=g*c-d*m,b=d*p-g*l,y=m*l-c*p,x=t*_+s*b+o*y;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let C=1/x;return e[0]=_*C,e[1]=(o*m-g*s)*C,e[2]=(d*s-o*c)*C,e[3]=b*C,e[4]=(g*t-o*p)*C,e[5]=(o*l-d*t)*C,e[6]=y*C,e[7]=(s*p-m*t)*C,e[8]=(c*t-s*l)*C,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,o,l,c,d){let p=Math.cos(l),m=Math.sin(l);return this.set(s*p,s*m,-s*(p*c+m*d)+c+e,-o*m,o*p,-o*(-m*c+p*d)+d+t,0,0,1),this}scale(e,t){return Pl("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Np.makeScale(e,t)),this}rotate(e){return Pl("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Np.makeRotation(-e)),this}translate(e,t){return Pl("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Np.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,s=e.elements;for(let o=0;o<9;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){let s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Bm.prototype.isMatrix3=!0;var nt=Bm,Np=new nt,Ny=new nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ly=new nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function XM(){let r={enabled:!0,workingColorSpace:vo,spaces:{},convert:function(o,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Ft&&(o.r=Qr(o.r),o.g=Qr(o.g),o.b=Qr(o.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ft&&(o.r=Ca(o.r),o.g=Ca(o.g),o.b=Ca(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===ls?Nl:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,c){return o.copy(this.spaces[c].fromXYZ).multiply(this.spaces[l].toXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[vo]:{primaries:e,whitePoint:s,transfer:Nl,toXYZ:Ny,fromXYZ:Ly,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:En},outputColorSpaceConfig:{drawingBufferColorSpace:En}},[En]:{primaries:e,whitePoint:s,transfer:Ft,toXYZ:Ny,fromXYZ:Ly,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:En}}}),r}var vt=XM();function Qr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ca(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var ha,uf=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{ha===void 0&&(ha=Ia("canvas")),ha.width=e.width,ha.height=e.height;let o=ha.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),s=ha}return s.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ia("canvas");t.width=e.width,t.height=e.height;let s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);let o=s.getImageData(0,0,e.width,e.height),l=o.data;for(let c=0;c<l.length;c++)l[c]=Qr(l[c]/255)*255;return s.putImageData(o,0,0),t}else if(e.data){let t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(Qr(t[s]/255)*255):t[s]=Qr(t[s]);return{data:t,width:e.width,height:e.height}}else return Ye("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},qM=0,La=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:qM++}),this.uuid=ou(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let c=0,d=o.length;c<d;c++)o[c].isDataTexture?l.push(Lp(o[c].image)):l.push(Lp(o[c]))}else l=Lp(o);s.url=l}return t||(e.images[this.uuid]=s),s}};function Lp(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?uf.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Ye("Texture: Unable to serialize Texture."),{})}var $M=0,Dp=new X,ti=class r extends Cr{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,s=Ar,o=Ar,l=fi,c=os,d=Fi,p=ri,m=r.DEFAULT_ANISOTROPY,g=ls){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$M++}),this.uuid=ou(),this.name="",this.source=new La(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=l,this.minFilter=c,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Dp).x}get height(){return this.source.getSize(Dp).y}get depth(){return this.source.getSize(Dp).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let s=e[t];if(s===void 0){Ye(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let o=this[t];if(o===void 0){Ye(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&s&&o.isVector2&&s.isVector2||o&&s&&o.isVector3&&s.isVector3||o&&s&&o.isMatrix3&&s.isMatrix3?o.copy(s):this[t]=s}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sf:e.x=e.x-Math.floor(e.x);break;case Ar:e.x=e.x<0?0:1;break;case of:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sf:e.y=e.y-Math.floor(e.y);break;case Ar:e.y=e.y<0?0:1;break;case of:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};ti.DEFAULT_IMAGE=null;ti.DEFAULT_MAPPING=Sm;ti.DEFAULT_ANISOTROPY=1;var Hm=class Hm{constructor(e=0,t=0,s=0,o=1){this.x=e,this.y=t,this.z=s,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,o){return this.x=e,this.y=t,this.z=s,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,s=this.y,o=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*s+c[8]*o+c[12]*l,this.y=c[1]*t+c[5]*s+c[9]*o+c[13]*l,this.z=c[2]*t+c[6]*s+c[10]*o+c[14]*l,this.w=c[3]*t+c[7]*s+c[11]*o+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,o,l,p=e.elements,m=p[0],g=p[4],_=p[8],b=p[1],y=p[5],x=p[9],C=p[2],S=p[6],v=p[10];if(Math.abs(g-b)<.01&&Math.abs(_-C)<.01&&Math.abs(x-S)<.01){if(Math.abs(g+b)<.1&&Math.abs(_+C)<.1&&Math.abs(x+S)<.1&&Math.abs(m+y+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let L=(m+1)/2,R=(y+1)/2,D=(v+1)/2,N=(g+b)/4,M=(_+C)/4,P=(x+S)/4;return L>R&&L>D?L<.01?(s=0,o=.707106781,l=.707106781):(s=Math.sqrt(L),o=N/s,l=M/s):R>D?R<.01?(s=.707106781,o=0,l=.707106781):(o=Math.sqrt(R),s=N/o,l=P/o):D<.01?(s=.707106781,o=.707106781,l=0):(l=Math.sqrt(D),s=M/l,o=P/l),this.set(s,o,l,t),this}let A=Math.sqrt((S-x)*(S-x)+(_-C)*(_-C)+(b-g)*(b-g));return Math.abs(A)<.001&&(A=1),this.x=(S-x)/A,this.y=(_-C)/A,this.z=(b-g)/A,this.w=Math.acos((m+y+v-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this.w=Mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this.w=Mt(this.w,e,t),this}clampLength(e,t){let s=this.length();return this.divideScalar(s||1).multiplyScalar(Mt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Hm.prototype.isVector4=!0;var Kt=Hm,cf=class extends Cr{constructor(e=1,t=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fi,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=s.depth,this.scissor=new Kt(0,0,e,t),this.scissorTest=!1,this.viewport=new Kt(0,0,e,t),this.textures=[];let o=s.count;for(let l=0;l<o;l++)this.textures[l]=new ti({width:e,height:t,depth:s.depth}),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveColorBuffer=s.resolveColorBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.storeMultisampledColorBuffer=s.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=s.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=s.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:fi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=s,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,s=e.textures.length;t<s;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let o=Object.assign({},e.textures[t].image);this.textures[t].source=new La(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Di=class extends cf{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}},Ll=class extends ti{constructor(e=null,t=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ff=class extends ti{constructor(e=null,t=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var If=class If{constructor(e,t,s,o,l,c,d,p,m,g,_,b,y,x,C,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,c,d,p,m,g,_,b,y,x,C,S)}set(e,t,s,o,l,c,d,p,m,g,_,b,y,x,C,S){let v=this.elements;return v[0]=e,v[4]=t,v[8]=s,v[12]=o,v[1]=l,v[5]=c,v[9]=d,v[13]=p,v[2]=m,v[6]=g,v[10]=_,v[14]=b,v[3]=y,v[7]=x,v[11]=C,v[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new If().fromArray(this.elements)}copy(e){let t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){let t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,s=e.elements,o=1/pa.setFromMatrixColumn(e,0).length(),l=1/pa.setFromMatrixColumn(e,1).length(),c=1/pa.setFromMatrixColumn(e,2).length();return t[0]=s[0]*o,t[1]=s[1]*o,t[2]=s[2]*o,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*c,t[9]=s[9]*c,t[10]=s[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,s=e.x,o=e.y,l=e.z,c=Math.cos(s),d=Math.sin(s),p=Math.cos(o),m=Math.sin(o),g=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){let b=c*g,y=c*_,x=d*g,C=d*_;t[0]=p*g,t[4]=-p*_,t[8]=m,t[1]=y+x*m,t[5]=b-C*m,t[9]=-d*p,t[2]=C-b*m,t[6]=x+y*m,t[10]=c*p}else if(e.order==="YXZ"){let b=p*g,y=p*_,x=m*g,C=m*_;t[0]=b+C*d,t[4]=x*d-y,t[8]=c*m,t[1]=c*_,t[5]=c*g,t[9]=-d,t[2]=y*d-x,t[6]=C+b*d,t[10]=c*p}else if(e.order==="ZXY"){let b=p*g,y=p*_,x=m*g,C=m*_;t[0]=b-C*d,t[4]=-c*_,t[8]=x+y*d,t[1]=y+x*d,t[5]=c*g,t[9]=C-b*d,t[2]=-c*m,t[6]=d,t[10]=c*p}else if(e.order==="ZYX"){let b=c*g,y=c*_,x=d*g,C=d*_;t[0]=p*g,t[4]=x*m-y,t[8]=b*m+C,t[1]=p*_,t[5]=C*m+b,t[9]=y*m-x,t[2]=-m,t[6]=d*p,t[10]=c*p}else if(e.order==="YZX"){let b=c*p,y=c*m,x=d*p,C=d*m;t[0]=p*g,t[4]=C-b*_,t[8]=x*_+y,t[1]=_,t[5]=c*g,t[9]=-d*g,t[2]=-m*g,t[6]=y*_+x,t[10]=b-C*_}else if(e.order==="XZY"){let b=c*p,y=c*m,x=d*p,C=d*m;t[0]=p*g,t[4]=-_,t[8]=m*g,t[1]=b*_+C,t[5]=c*g,t[9]=y*_-x,t[2]=x*_-y,t[6]=d*g,t[10]=C*_+b}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(YM,e,jM)}lookAt(e,t,s){let o=this.elements;return Ii.subVectors(e,t),Ii.lengthSq()===0&&(Ii.z=1),Ii.normalize(),Ps.crossVectors(s,Ii),Ps.lengthSq()===0&&(Math.abs(s.z)===1?Ii.x+=1e-4:Ii.z+=1e-4,Ii.normalize(),Ps.crossVectors(s,Ii)),Ps.normalize(),Sc.crossVectors(Ii,Ps),o[0]=Ps.x,o[4]=Sc.x,o[8]=Ii.x,o[1]=Ps.y,o[5]=Sc.y,o[9]=Ii.y,o[2]=Ps.z,o[6]=Sc.z,o[10]=Ii.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let s=e.elements,o=t.elements,l=this.elements,c=s[0],d=s[4],p=s[8],m=s[12],g=s[1],_=s[5],b=s[9],y=s[13],x=s[2],C=s[6],S=s[10],v=s[14],A=s[3],L=s[7],R=s[11],D=s[15],N=o[0],M=o[4],P=o[8],V=o[12],F=o[1],B=o[5],W=o[9],Z=o[13],O=o[2],Q=o[6],se=o[10],ee=o[14],me=o[3],ne=o[7],ce=o[11],he=o[15];return l[0]=c*N+d*F+p*O+m*me,l[4]=c*M+d*B+p*Q+m*ne,l[8]=c*P+d*W+p*se+m*ce,l[12]=c*V+d*Z+p*ee+m*he,l[1]=g*N+_*F+b*O+y*me,l[5]=g*M+_*B+b*Q+y*ne,l[9]=g*P+_*W+b*se+y*ce,l[13]=g*V+_*Z+b*ee+y*he,l[2]=x*N+C*F+S*O+v*me,l[6]=x*M+C*B+S*Q+v*ne,l[10]=x*P+C*W+S*se+v*ce,l[14]=x*V+C*Z+S*ee+v*he,l[3]=A*N+L*F+R*O+D*me,l[7]=A*M+L*B+R*Q+D*ne,l[11]=A*P+L*W+R*se+D*ce,l[15]=A*V+L*Z+R*ee+D*he,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],s=e[4],o=e[8],l=e[12],c=e[1],d=e[5],p=e[9],m=e[13],g=e[2],_=e[6],b=e[10],y=e[14],x=e[3],C=e[7],S=e[11],v=e[15],A=p*y-m*b,L=d*y-m*_,R=d*b-p*_,D=c*y-m*g,N=c*b-p*g,M=c*_-d*g;return t*(C*A-S*L+v*R)-s*(x*A-S*D+v*N)+o*(x*L-C*D+v*M)-l*(x*R-C*N+S*M)}determinantAffine(){let e=this.elements,t=e[0],s=e[4],o=e[8],l=e[1],c=e[5],d=e[9],p=e[2],m=e[6],g=e[10];return t*(c*g-d*m)-s*(l*g-d*p)+o*(l*m-c*p)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){let o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=s),this}invert(){let e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],c=e[4],d=e[5],p=e[6],m=e[7],g=e[8],_=e[9],b=e[10],y=e[11],x=e[12],C=e[13],S=e[14],v=e[15],A=t*d-s*c,L=t*p-o*c,R=t*m-l*c,D=s*p-o*d,N=s*m-l*d,M=o*m-l*p,P=g*C-_*x,V=g*S-b*x,F=g*v-y*x,B=_*S-b*C,W=_*v-y*C,Z=b*v-y*S,O=A*Z-L*W+R*B+D*F-N*V+M*P;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Q=1/O;return e[0]=(d*Z-p*W+m*B)*Q,e[1]=(o*W-s*Z-l*B)*Q,e[2]=(C*M-S*N+v*D)*Q,e[3]=(b*N-_*M-y*D)*Q,e[4]=(p*F-c*Z-m*V)*Q,e[5]=(t*Z-o*F+l*V)*Q,e[6]=(S*R-x*M-v*L)*Q,e[7]=(g*M-b*R+y*L)*Q,e[8]=(c*W-d*F+m*P)*Q,e[9]=(s*F-t*W-l*P)*Q,e[10]=(x*N-C*R+v*A)*Q,e[11]=(_*R-g*N-y*A)*Q,e[12]=(d*V-c*B-p*P)*Q,e[13]=(t*B-s*V+o*P)*Q,e[14]=(C*L-x*D-S*A)*Q,e[15]=(g*D-_*L+b*A)*Q,this}scale(e){let t=this.elements,s=e.x,o=e.y,l=e.z;return t[0]*=s,t[4]*=o,t[8]*=l,t[1]*=s,t[5]*=o,t[9]*=l,t[2]*=s,t[6]*=o,t[10]*=l,t[3]*=s,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,o))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let s=Math.cos(t),o=Math.sin(t),l=1-s,c=e.x,d=e.y,p=e.z,m=l*c,g=l*d;return this.set(m*c+s,m*d-o*p,m*p+o*d,0,m*d+o*p,g*d+s,g*p-o*c,0,m*p-o*d,g*p+o*c,l*p*p+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,o,l,c){return this.set(1,s,l,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,s){let o=this.elements,l=t._x,c=t._y,d=t._z,p=t._w,m=l+l,g=c+c,_=d+d,b=l*m,y=l*g,x=l*_,C=c*g,S=c*_,v=d*_,A=p*m,L=p*g,R=p*_,D=s.x,N=s.y,M=s.z;return o[0]=(1-(C+v))*D,o[1]=(y+R)*D,o[2]=(x-L)*D,o[3]=0,o[4]=(y-R)*N,o[5]=(1-(b+v))*N,o[6]=(S+A)*N,o[7]=0,o[8]=(x+L)*M,o[9]=(S-A)*M,o[10]=(1-(b+C))*M,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,s){let o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];let l=this.determinantAffine();if(l===0)return s.set(1,1,1),t.identity(),this;let c=pa.set(o[0],o[1],o[2]).length(),d=pa.set(o[4],o[5],o[6]).length(),p=pa.set(o[8],o[9],o[10]).length();l<0&&(c=-c),ar.copy(this);let m=1/c,g=1/d,_=1/p;return ar.elements[0]*=m,ar.elements[1]*=m,ar.elements[2]*=m,ar.elements[4]*=g,ar.elements[5]*=g,ar.elements[6]*=g,ar.elements[8]*=_,ar.elements[9]*=_,ar.elements[10]*=_,t.setFromRotationMatrix(ar),s.x=c,s.y=d,s.z=p,this}makePerspective(e,t,s,o,l,c,d=$i,p=!1){let m=this.elements,g=2*l/(t-e),_=2*l/(s-o),b=(t+e)/(t-e),y=(s+o)/(s-o),x,C;if(p)x=l/(c-l),C=c*l/(c-l);else if(d===$i)x=-(c+l)/(c-l),C=-2*c*l/(c-l);else if(d===Pa)x=-c/(c-l),C=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=g,m[4]=0,m[8]=b,m[12]=0,m[1]=0,m[5]=_,m[9]=y,m[13]=0,m[2]=0,m[6]=0,m[10]=x,m[14]=C,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,t,s,o,l,c,d=$i,p=!1){let m=this.elements,g=2/(t-e),_=2/(s-o),b=-(t+e)/(t-e),y=-(s+o)/(s-o),x,C;if(p)x=1/(c-l),C=c/(c-l);else if(d===$i)x=-2/(c-l),C=-(c+l)/(c-l);else if(d===Pa)x=-1/(c-l),C=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=g,m[4]=0,m[8]=0,m[12]=b,m[1]=0,m[5]=_,m[9]=0,m[13]=y,m[2]=0,m[6]=0,m[10]=x,m[14]=C,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){let t=this.elements,s=e.elements;for(let o=0;o<16;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){let s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}};If.prototype.isMatrix4=!0;var Ot=If,pa=new X,ar=new Ot,YM=new X(0,0,0),jM=new X(1,1,1),Ps=new X,Sc=new X,Ii=new X,Dy=new Ot,ky=new Rr,ts=class r{constructor(e=0,t=0,s=0,o=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,o=this._order){return this._x=e,this._y=t,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){let o=e.elements,l=o[0],c=o[4],d=o[8],p=o[1],m=o[5],g=o[9],_=o[2],b=o[6],y=o[10];switch(t){case"XYZ":this._y=Math.asin(Mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(b,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(b,-1,1)),Math.abs(b)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-c,m)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-Mt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(b,y),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-c,m));break;case"YZX":this._z=Math.asin(Mt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-Mt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(b,m),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-g,y),this._y=0);break;default:Ye("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return Dy.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dy,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ky.setFromEuler(this),this.setFromQuaternion(ky,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ts.DEFAULT_ORDER="XYZ";var ns=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ZM=0,Fy=new X,ma=new Rr,$r=new Ot,xc=new X,Ml=new X,JM=new X,KM=new Rr,Uy=new X(1,0,0),Oy=new X(0,1,0),zy=new X(0,0,1),By={type:"added"},QM={type:"removed"},ga={type:"childadded",child:null},kp={type:"childremoved",child:null},Un=class r extends Cr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ZM++}),this.uuid=ou(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new X,t=new ts,s=new Rr,o=new X(1,1,1);function l(){s.setFromEuler(t,!1)}function c(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Ot},normalMatrix:{value:new nt}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ns,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ma.setFromAxisAngle(e,t),this.quaternion.multiply(ma),this}rotateOnWorldAxis(e,t){return ma.setFromAxisAngle(e,t),this.quaternion.premultiply(ma),this}rotateX(e){return this.rotateOnAxis(Uy,e)}rotateY(e){return this.rotateOnAxis(Oy,e)}rotateZ(e){return this.rotateOnAxis(zy,e)}translateOnAxis(e,t){return Fy.copy(e).applyQuaternion(this.quaternion),this.position.add(Fy.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Uy,e)}translateY(e){return this.translateOnAxis(Oy,e)}translateZ(e){return this.translateOnAxis(zy,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($r.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?xc.copy(e):xc.set(e,t,s);let o=this.parent;this.updateWorldMatrix(!0,!1),Ml.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$r.lookAt(Ml,xc,this.up):$r.lookAt(xc,Ml,this.up),this.quaternion.setFromRotationMatrix($r),o&&($r.extractRotation(o.matrixWorld),ma.setFromRotationMatrix($r),this.quaternion.premultiply(ma.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(By),ga.child=e,this.dispatchEvent(ga),ga.child=null):tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(QM),kp.child=e,this.dispatchEvent(kp),kp.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$r.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$r.multiply(e.parent.matrixWorld)),e.applyMatrix4($r),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(By),ga.child=e,this.dispatchEvent(ga),ga.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,o=this.children.length;s<o;s++){let c=this.children[s].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);let o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ml,e,JM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ml,KM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,s=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*s-l[8]*o,l[13]+=s-l[1]*t-l[5]*s-l[9]*o,l[14]+=o-l[2]*t-l[6]*s-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t,s=!1){let o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),t===!0){let l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0,s)}}toJSON(e){let t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);let d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){let p=d.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){let _=p[m];l(e.shapes,_)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(l(e.materials,this.material[p]));o.material=d}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){let p=this.animations[d];o.animations.push(l(e.animations,p))}}if(t){let d=c(e.geometries),p=c(e.materials),m=c(e.textures),g=c(e.images),_=c(e.shapes),b=c(e.skeletons),y=c(e.animations),x=c(e.nodes);d.length>0&&(s.geometries=d),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),g.length>0&&(s.images=g),_.length>0&&(s.shapes=_),b.length>0&&(s.skeletons=b),y.length>0&&(s.animations=y),x.length>0&&(s.nodes=x)}return s.object=o,s;function c(d){let p=[];for(let m in d){let g=d[m];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){let o=e.children[s];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Un.DEFAULT_UP=new X(0,1,0);Un.DEFAULT_MATRIX_AUTO_UPDATE=!0;Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var cr=class extends Un{constructor(){super(),this.isGroup=!0,this.type="Group"}},ew={type:"move"},Da=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let o=null,l=null,c=null,d=this._targetRay,p=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){c=!0;for(let C of e.hand.values()){let S=t.getJointPose(C,s),v=this._getHandJoint(m,C);S!==null&&(v.matrix.fromArray(S.transform.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=S.radius),v.visible=S!==null}let g=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],b=g.position.distanceTo(_.position),y=.02,x=.005;m.inputState.pinching&&b>y+x?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&b<=y-x&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(o=t.getPose(e.targetRaySpace,s),o===null&&l!==null&&(o=l),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(ew)))}return d!==null&&(d.visible=o!==null),p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let s=new cr;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}},Xb={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Is={h:0,s:0,l:0},Mc={h:0,s:0,l:0};function Fp(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}var Ke=class{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){let o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=En){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.colorSpaceToWorking(this,t),this}setRGB(e,t,s,o=vt.workingColorSpace){return this.r=e,this.g=t,this.b=s,vt.colorSpaceToWorking(this,o),this}setHSL(e,t,s,o=vt.workingColorSpace){if(e=VM(e,1),t=Mt(t,0,1),s=Mt(s,0,1),t===0)this.r=this.g=this.b=s;else{let l=s<=.5?s*(1+t):s+t-s*t,c=2*s-l;this.r=Fp(c,l,e+1/3),this.g=Fp(c,l,e),this.b=Fp(c,l,e-1/3)}return vt.colorSpaceToWorking(this,o),this}setStyle(e,t=En){function s(l){l!==void 0&&parseFloat(l)<1&&Ye("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l,c=o[1],d=o[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(d))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(d))return s(l[4]),this.setRGB(Math.min(100,parseFloat(l[1]))/100,Math.min(100,parseFloat(l[2]))/100,Math.min(100,parseFloat(l[3]))/100,t);break;case"hsl":case"hsla":if(l=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(d))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:Ye("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){let l=o[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);Ye("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=En){let s=Xb[e.toLowerCase()];return s!==void 0?this.setHex(s,t):Ye("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qr(e.r),this.g=Qr(e.g),this.b=Qr(e.b),this}copyLinearToSRGB(e){return this.r=Ca(e.r),this.g=Ca(e.g),this.b=Ca(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=En){return vt.workingToColorSpace(ei.copy(this),e),Math.round(Mt(ei.r*255,0,255))*65536+Math.round(Mt(ei.g*255,0,255))*256+Math.round(Mt(ei.b*255,0,255))}getHexString(e=En){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.workingToColorSpace(ei.copy(this),t);let s=ei.r,o=ei.g,l=ei.b,c=Math.max(s,o,l),d=Math.min(s,o,l),p,m,g=(d+c)/2;if(d===c)p=0,m=0;else{let _=c-d;switch(m=g<=.5?_/(c+d):_/(2-c-d),c){case s:p=(o-l)/_+(o<l?6:0);break;case o:p=(l-s)/_+2;break;case l:p=(s-o)/_+4;break}p/=6}return e.h=p,e.s=m,e.l=g,e}getRGB(e,t=vt.workingColorSpace){return vt.workingToColorSpace(ei.copy(this),t),e.r=ei.r,e.g=ei.g,e.b=ei.b,e}getStyle(e=En){vt.workingToColorSpace(ei.copy(this),e);let t=ei.r,s=ei.g,o=ei.b;return e!==En?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(o*255)})`}offsetHSL(e,t,s){return this.getHSL(Is),this.setHSL(Is.h+e,Is.s+t,Is.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(Is),e.getHSL(Mc);let s=Pp(Is.h,Mc.h,t),o=Pp(Is.s,Mc.s,t),l=Pp(Is.l,Mc.l,t);return this.setHSL(s,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,s=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*o,this.g=l[1]*t+l[4]*s+l[7]*o,this.b=l[2]*t+l[5]*s+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ei=new Ke;Ke.NAMES=Xb;var Dl=class r{constructor(e,t=1,s=1e3){this.isFog=!0,this.name="",this.color=new Ke(e),this.near=t,this.far=s}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},kl=class extends Un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ts,this.environmentIntensity=1,this.environmentRotation=new ts,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},lr=new X,Yr=new X,Up=new X,jr=new X,va=new X,ya=new X,Hy=new X,Op=new X,zp=new X,Bp=new X,Hp=new Kt,Vp=new Kt,Gp=new Kt,Kr=class r{constructor(e=new X,t=new X,s=new X){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,o){o.subVectors(s,t),lr.subVectors(e,t),o.cross(lr);let l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,s,o,l){lr.subVectors(o,t),Yr.subVectors(s,t),Up.subVectors(e,t);let c=lr.dot(lr),d=lr.dot(Yr),p=lr.dot(Up),m=Yr.dot(Yr),g=Yr.dot(Up),_=c*m-d*d;if(_===0)return l.set(0,0,0),null;let b=1/_,y=(m*p-d*g)*b,x=(c*g-d*p)*b;return l.set(1-y-x,x,y)}static containsPoint(e,t,s,o){return this.getBarycoord(e,t,s,o,jr)===null?!1:jr.x>=0&&jr.y>=0&&jr.x+jr.y<=1}static getInterpolation(e,t,s,o,l,c,d,p){return this.getBarycoord(e,t,s,o,jr)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,jr.x),p.addScaledVector(c,jr.y),p.addScaledVector(d,jr.z),p)}static getInterpolatedAttribute(e,t,s,o,l,c){return Hp.setScalar(0),Vp.setScalar(0),Gp.setScalar(0),Hp.fromBufferAttribute(e,t),Vp.fromBufferAttribute(e,s),Gp.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(Hp,l.x),c.addScaledVector(Vp,l.y),c.addScaledVector(Gp,l.z),c}static isFrontFacing(e,t,s,o){return lr.subVectors(s,t),Yr.subVectors(e,t),lr.cross(Yr).dot(o)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,o){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,s,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return lr.subVectors(this.c,this.b),Yr.subVectors(this.a,this.b),lr.cross(Yr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,o,l){return r.getInterpolation(e,this.a,this.b,this.c,t,s,o,l)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let s=this.a,o=this.b,l=this.c,c,d;va.subVectors(o,s),ya.subVectors(l,s),Op.subVectors(e,s);let p=va.dot(Op),m=ya.dot(Op);if(p<=0&&m<=0)return t.copy(s);zp.subVectors(e,o);let g=va.dot(zp),_=ya.dot(zp);if(g>=0&&_<=g)return t.copy(o);let b=p*_-g*m;if(b<=0&&p>=0&&g<=0&&p-g>0)return c=p/(p-g),t.copy(s).addScaledVector(va,c);Bp.subVectors(e,l);let y=va.dot(Bp),x=ya.dot(Bp);if(x>=0&&y<=x)return t.copy(l);let C=y*m-p*x;if(C<=0&&m>=0&&x<=0)return d=m/(m-x),t.copy(s).addScaledVector(ya,d);let S=g*x-y*_;if(S<=0&&_-g>=0&&y-x>=0)return Hy.subVectors(l,o),d=(_-g)/(_-g+(y-x)),t.copy(o).addScaledVector(Hy,d);let v=1/(S+C+b);return c=C*v,d=b*v,t.copy(s).addScaledVector(va,c).addScaledVector(ya,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Pr=class{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(ur.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(ur.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let s=ur.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let s=e.geometry;if(s!==void 0){let l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let c=0,d=l.count;c<d;c++)e.isMesh===!0?e.getVertexPosition(c,ur):ur.fromBufferAttribute(l,c),ur.applyMatrix4(e.matrixWorld),this.expandByPoint(ur);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),wc.copy(s.boundingBox)),wc.applyMatrix4(e.matrixWorld),this.union(wc)}let o=e.children;for(let l=0,c=o.length;l<c;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ur),ur.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wl),Tc.subVectors(this.max,wl),ba.subVectors(e.a,wl),_a.subVectors(e.b,wl),Sa.subVectors(e.c,wl),Ns.subVectors(_a,ba),Ls.subVectors(Sa,_a),ho.subVectors(ba,Sa);let t=[0,-Ns.z,Ns.y,0,-Ls.z,Ls.y,0,-ho.z,ho.y,Ns.z,0,-Ns.x,Ls.z,0,-Ls.x,ho.z,0,-ho.x,-Ns.y,Ns.x,0,-Ls.y,Ls.x,0,-ho.y,ho.x,0];return!Wp(t,ba,_a,Sa,Tc)||(t=[1,0,0,0,1,0,0,0,1],!Wp(t,ba,_a,Sa,Tc))?!1:(Ec.crossVectors(Ns,Ls),t=[Ec.x,Ec.y,Ec.z],Wp(t,ba,_a,Sa,Tc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ur).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ur).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Zr=[new X,new X,new X,new X,new X,new X,new X,new X],ur=new X,wc=new Pr,ba=new X,_a=new X,Sa=new X,Ns=new X,Ls=new X,ho=new X,wl=new X,Tc=new X,Ec=new X,po=new X;function Wp(r,e,t,s,o){for(let l=0,c=r.length-3;l<=c;l+=3){po.fromArray(r,l);let d=o.x*Math.abs(po.x)+o.y*Math.abs(po.y)+o.z*Math.abs(po.z),p=e.dot(po),m=t.dot(po),g=s.dot(po);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>d)return!1}return!0}var Tn=new X,Ac=new ct,tw=0,fr=class extends Cr{constructor(e,t,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:tw++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=zb,this.updateRanges=[],this.gpuType=Zi,this.version=0,this._normalizationScale=e!==void 0?Lm(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[s+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)Ac.fromBufferAttribute(this,t),Ac.applyMatrix3(e),this.setXY(t,Ac.x,Ac.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)Tn.fromBufferAttribute(this,t),Tn.applyMatrix3(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)Tn.fromBufferAttribute(this,t),Tn.applyMatrix4(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)Tn.fromBufferAttribute(this,t),Tn.applyNormalMatrix(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)Tn.fromBufferAttribute(this,t),Tn.transformDirection(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=this._denormalize(s)),s}setComponent(e,t,s){return this.normalized&&(s=this._normalize(s)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,o){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),s=this._normalize(s),o=this._normalize(o)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this}setXYZW(e,t,s,o,l){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),s=this._normalize(s),o=this._normalize(o),l=this._normalize(l)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):GM(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):WM(e,this.array)}};var Fl=class extends fr{constructor(e,t,s){super(new Uint16Array(e),t,s)}};var Ul=class extends fr{constructor(e,t,s){super(new Uint32Array(e),t,s)}};var yn=class extends fr{constructor(e,t,s){super(new Float32Array(e),t,s)}},nw=new Pr,Tl=new X,Xp=new X,is=class{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let s=this.center;t!==void 0?s.copy(t):nw.setFromPoints(e).getCenter(s);let o=0;for(let l=0,c=e.length;l<c;l++)o=Math.max(o,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Tl.subVectors(e,this.center);let t=Tl.lengthSq();if(t>this.radius*this.radius){let s=Math.sqrt(t),o=(s-this.radius)*.5;this.center.addScaledVector(Tl,o/s),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xp.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Tl.copy(e.center).add(Xp)),this.expandByPoint(Tl.copy(e.center).sub(Xp))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},iw=0,qi=new Ot,qp=new Un,xa=new X,Ni=new Pr,El=new Pr,kn=new X,Yi=class r extends Cr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:iw++}),this.uuid=ou(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(BM(e)?Ul:Fl)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let s=this.attributes.normal;if(s!==void 0){let l=new nt().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}let o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return qi.makeRotationFromQuaternion(e),this.applyMatrix4(qi),this}rotateX(e){return qi.makeRotationX(e),this.applyMatrix4(qi),this}rotateY(e){return qi.makeRotationY(e),this.applyMatrix4(qi),this}rotateZ(e){return qi.makeRotationZ(e),this.applyMatrix4(qi),this}translate(e,t,s){return qi.makeTranslation(e,t,s),this.applyMatrix4(qi),this}scale(e,t,s){return qi.makeScale(e,t,s),this.applyMatrix4(qi),this}lookAt(e){return qp.lookAt(e),qp.updateMatrix(),this.applyMatrix4(qp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xa).negate(),this.translate(xa.x,xa.y,xa.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let s=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];s.push(c.x,c.y,c.z||0)}this.setAttribute("position",new yn(s,3))}else{let s=Math.min(e.length,t.count);for(let o=0;o<s;o++){let l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&Ye("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let l=t[s];Ni.setFromBufferAttribute(l),this.morphTargetsRelative?(kn.addVectors(this.boundingBox.min,Ni.min),this.boundingBox.expandByPoint(kn),kn.addVectors(this.boundingBox.max,Ni.max),this.boundingBox.expandByPoint(kn)):(this.boundingBox.expandByPoint(Ni.min),this.boundingBox.expandByPoint(Ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new is);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){let s=this.boundingSphere.center;if(Ni.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){let d=t[l];El.setFromBufferAttribute(d),this.morphTargetsRelative?(kn.addVectors(Ni.min,El.min),Ni.expandByPoint(kn),kn.addVectors(Ni.max,El.max),Ni.expandByPoint(kn)):(Ni.expandByPoint(El.min),Ni.expandByPoint(El.max))}Ni.getCenter(s);let o=0;for(let l=0,c=e.count;l<c;l++)kn.fromBufferAttribute(e,l),o=Math.max(o,s.distanceToSquared(kn));if(t)for(let l=0,c=t.length;l<c;l++){let d=t[l],p=this.morphTargetsRelative;for(let m=0,g=d.count;m<g;m++)kn.fromBufferAttribute(d,m),p&&(xa.fromBufferAttribute(e,m),kn.add(xa)),o=Math.max(o,s.distanceToSquared(kn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let s=t.position,o=t.normal,l=t.uv,c=this.getAttribute("tangent");(c===void 0||c.count!==s.count)&&(c=new fr(new Float32Array(4*s.count),4),this.setAttribute("tangent",c));let d=[],p=[],m=new Uint8Array(s.count);for(let V=0;V<s.count;V++)d[V]=new X,p[V]=new X;let g=new X,_=new X,b=new X,y=new ct,x=new ct,C=new ct,S=new X,v=new X;function A(V,F,B){m[V]=m[F]=m[B]=1,g.fromBufferAttribute(s,V),_.fromBufferAttribute(s,F),b.fromBufferAttribute(s,B),y.fromBufferAttribute(l,V),x.fromBufferAttribute(l,F),C.fromBufferAttribute(l,B),_.sub(g),b.sub(g),x.sub(y),C.sub(y);let W=1/(x.x*C.y-C.x*x.y);isFinite(W)&&(S.copy(_).multiplyScalar(C.y).addScaledVector(b,-x.y).multiplyScalar(W),v.copy(b).multiplyScalar(x.x).addScaledVector(_,-C.x).multiplyScalar(W),d[V].add(S),d[F].add(S),d[B].add(S),p[V].add(v),p[F].add(v),p[B].add(v))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let V=0,F=L.length;V<F;++V){let B=L[V],W=B.start,Z=B.count;for(let O=W,Q=W+Z;O<Q;O+=3)A(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let R=new X,D=new X,N=new X,M=new X;function P(V){N.fromBufferAttribute(o,V),M.copy(N);let F=d[V];R.copy(F),R.sub(N.multiplyScalar(N.dot(F))).normalize(),D.crossVectors(M,F);let W=D.dot(p[V])<0?-1:1;c.setXYZW(V,R.x,R.y,R.z,W)}for(let V=0,F=s.count;V<F;++V)m[V]&&P(V);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==t.count)s=new fr(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let b=0,y=s.count;b<y;b++)s.setXYZ(b,0,0,0);let o=new X,l=new X,c=new X,d=new X,p=new X,m=new X,g=new X,_=new X;if(e)for(let b=0,y=e.count;b<y;b+=3){let x=e.getX(b+0),C=e.getX(b+1),S=e.getX(b+2);o.fromBufferAttribute(t,x),l.fromBufferAttribute(t,C),c.fromBufferAttribute(t,S),g.subVectors(c,l),_.subVectors(o,l),g.cross(_),d.fromBufferAttribute(s,x),p.fromBufferAttribute(s,C),m.fromBufferAttribute(s,S),d.add(g),p.add(g),m.add(g),s.setXYZ(x,d.x,d.y,d.z),s.setXYZ(C,p.x,p.y,p.z),s.setXYZ(S,m.x,m.y,m.z)}else for(let b=0,y=t.count;b<y;b+=3)o.fromBufferAttribute(t,b+0),l.fromBufferAttribute(t,b+1),c.fromBufferAttribute(t,b+2),g.subVectors(c,l),_.subVectors(o,l),g.cross(_),s.setXYZ(b+0,g.x,g.y,g.z),s.setXYZ(b+1,g.x,g.y,g.z),s.setXYZ(b+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)kn.fromBufferAttribute(e,t),kn.normalize(),e.setXYZ(t,kn.x,kn.y,kn.z)}toNonIndexed(){function e(d,p){let m=d.array,g=d.itemSize,_=d.normalized,b=new m.constructor(p.length*g),y=0,x=0;for(let C=0,S=p.length;C<S;C++){d.isInterleavedBufferAttribute?y=p[C]*d.data.stride+d.offset:y=p[C]*g;for(let v=0;v<g;v++)b[x++]=m[y++]}return new fr(b,g,_)}if(this.index===null)return Ye("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,s=this.index.array,o=this.attributes;for(let d in o){let p=o[d],m=e(p,s);t.setAttribute(d,m)}let l=this.morphAttributes;for(let d in l){let p=[],m=l[d];for(let g=0,_=m.length;g<_;g++){let b=m[g],y=e(b,s);p.push(y)}t.morphAttributes[d]=p}t.morphTargetsRelative=this.morphTargetsRelative;let c=this.groups;for(let d=0,p=c.length;d<p;d++){let m=c[d];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let p=this.parameters;for(let m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let s=this.attributes;for(let p in s){let m=s[p];e.data.attributes[p]=m.toJSON(e.data)}let o={},l=!1;for(let p in this.morphAttributes){let m=this.morphAttributes[p],g=[];for(let _=0,b=m.length;_<b;_++){let y=m[_];g.push(y.toJSON(e.data))}g.length>0&&(o[p]=g,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);let c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));let d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let s=e.index;s!==null&&this.setIndex(s.clone());let o=e.attributes;for(let m in o){let g=o[m];this.setAttribute(m,g.clone(t))}let l=e.morphAttributes;for(let m in l){let g=[],_=l[m];for(let b=0,y=_.length;b<y;b++)g.push(_[b].clone(t));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;let c=e.groups;for(let m=0,g=c.length;m<g;m++){let _=c[m];this.addGroup(_.start,_.count,_.materialIndex)}let d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());let p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var $p=new X,rw=new X,sw=new nt,Li=class{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,o){return this.normal.set(e,t,s),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){let o=$p.subVectors(s,t).cross(rw.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,s=!0){let o=e.delta($p),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let c=-(e.start.dot(this.normal)+this.constant)/l;return s===!0&&(c<0||c>1)?null:t.copy(e.start).addScaledVector(o,c)}intersectsLine(e){let t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let s=t||sw.getNormalMatrix(e),o=this.coplanarPoint($p).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},ow=0,rs=class extends Cr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ow++}),this.uuid=ou(),this.name="",this.type="Material",this.blending=za,this.side=Hs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dm,this.blendDst=hm,this.blendEquation=Ao,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=Ra,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lb,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yc,this.stencilZFail=Yc,this.stencilZPass=Yc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let s=e[t];if(s===void 0){Ye(`Material: parameter '${t}' has value of undefined.`);continue}let o=this[t];if(o===void 0){Ye(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(s):o&&o.isVector2&&s&&s.isVector2||o&&o.isEuler&&s&&s.isEuler||o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[t]=s}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,s.blending=this.blending,s.side=this.side,s.shadowSide=this.shadowSide,s.vertexColors=this.vertexColors,s.opacity=this.opacity,s.transparent=this.transparent,s.blendSrc=this.blendSrc,s.blendDst=this.blendDst,s.blendEquation=this.blendEquation,s.blendSrcAlpha=this.blendSrcAlpha,s.blendDstAlpha=this.blendDstAlpha,s.blendEquationAlpha=this.blendEquationAlpha,s.blendColor=this.blendColor.getHex(),s.blendAlpha=this.blendAlpha,s.depthFunc=this.depthFunc,s.depthTest=this.depthTest,s.depthWrite=this.depthWrite,s.colorWrite=this.colorWrite,s.clipIntersection=this.clipIntersection,s.clipShadows=this.clipShadows,s.stencilWriteMask=this.stencilWriteMask,s.stencilFunc=this.stencilFunc,s.stencilRef=this.stencilRef,s.stencilFuncMask=this.stencilFuncMask,s.stencilFail=this.stencilFail,s.stencilZFail=this.stencilZFail,s.stencilZPass=this.stencilZPass,s.stencilWrite=this.stencilWrite,s.polygonOffset=this.polygonOffset,s.polygonOffsetFactor=this.polygonOffsetFactor,s.polygonOffsetUnits=this.polygonOffsetUnits,s.dithering=this.dithering,s.alphaTest=this.alphaTest,s.alphaHash=this.alphaHash,s.alphaToCoverage=this.alphaToCoverage,s.premultipliedAlpha=this.premultipliedAlpha,s.forceSinglePass=this.forceSinglePass,s.allowOverride=this.allowOverride,s.visible=this.visible,s.toneMapped=this.toneMapped,s.name=this.name,this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(s.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(s.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(s.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(s.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(s.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(s.clippingPlanes=this.clippingPlanes.map(l=>l.toJSON())),this.rotation!==void 0&&(s.rotation=this.rotation),this.depthPacking!==void 0&&(s.depthPacking=this.depthPacking),this.linewidth!==void 0&&(s.linewidth=this.linewidth),this.linecap!==void 0&&(s.linecap=this.linecap),this.linejoin!==void 0&&(s.linejoin=this.linejoin),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.wireframe!==void 0&&(s.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(s.flatShading=this.flatShading),this.fog!==void 0&&(s.fog=this.fog),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(l){let c=[];for(let d in l){let p=l[d];delete p.metadata,c.push(p)}return c}if(t){let l=o(e.textures),c=o(e.images);l.length>0&&(s.textures=l),c.length>0&&(s.images=c)}return s}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ke().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(s=>new Li().fromJSON(s))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new ct().fromArray(s)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ct().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,s=null;if(t!==null){let o=t.length;s=new Array(o);for(let l=0;l!==o;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Jr=new X,Yp=new X,Cc=new X,Rc=new X,ka=class{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Jr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Jr.copy(this.origin).addScaledVector(this.direction,t),Jr.distanceToSquared(e))}distanceSqToSegment(e,t,s,o){Yp.copy(e).add(t).multiplyScalar(.5),Cc.copy(t).sub(e).normalize(),Rc.copy(this.origin).sub(Yp);let l=e.distanceTo(t)*.5,c=-this.direction.dot(Cc),d=Rc.dot(this.direction),p=-Rc.dot(Cc),m=Rc.lengthSq(),g=Math.abs(1-c*c),_,b,y,x;if(g>0)if(_=c*p-d,b=c*d-p,x=l*g,_>=0)if(b>=-x)if(b<=x){let C=1/g;_*=C,b*=C,y=_*(_+c*b+2*d)+b*(c*_+b+2*p)+m}else b=l,_=Math.max(0,-(c*b+d)),y=-_*_+b*(b+2*p)+m;else b=-l,_=Math.max(0,-(c*b+d)),y=-_*_+b*(b+2*p)+m;else b<=-x?(_=Math.max(0,-(-c*l+d)),b=_>0?-l:Math.min(Math.max(-l,-p),l),y=-_*_+b*(b+2*p)+m):b<=x?(_=0,b=Math.min(Math.max(-l,-p),l),y=b*(b+2*p)+m):(_=Math.max(0,-(c*l+d)),b=_>0?l:Math.min(Math.max(-l,-p),l),y=-_*_+b*(b+2*p)+m);else b=c>0?-l:l,_=Math.max(0,-(c*b+d)),y=-_*_+b*(b+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(Yp).addScaledVector(Cc,b),y}intersectSphere(e,t){if(e.radius<0)return null;Jr.subVectors(e.center,this.origin);let s=Jr.dot(this.direction),o=Jr.dot(Jr)-s*s,l=e.radius*e.radius;if(o>l)return null;let c=Math.sqrt(l-o),d=s-c,p=s+c;return p<0?null:d<0?this.at(p,t):this.at(d,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){let s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,o,l,c,d,p,m=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,b=this.origin;return m>=0?(s=(e.min.x-b.x)*m,o=(e.max.x-b.x)*m):(s=(e.max.x-b.x)*m,o=(e.min.x-b.x)*m),g>=0?(l=(e.min.y-b.y)*g,c=(e.max.y-b.y)*g):(l=(e.max.y-b.y)*g,c=(e.min.y-b.y)*g),s>c||l>o||((l>s||isNaN(s))&&(s=l),(c<o||isNaN(o))&&(o=c),_>=0?(d=(e.min.z-b.z)*_,p=(e.max.z-b.z)*_):(d=(e.max.z-b.z)*_,p=(e.min.z-b.z)*_),s>p||d>o)||((d>s||s!==s)&&(s=d),(p<o||o!==o)&&(o=p),o<0)?null:this.at(s>=0?s:o,t)}intersectsBox(e){return this.intersectBox(e,Jr)!==null}intersectTriangle(e,t,s,o,l){let c=this.origin,d=this.direction,p=d.x,m=d.y,g=d.z,_=e.x-c.x,b=e.y-c.y,y=e.z-c.z,x=t.x-c.x,C=t.y-c.y,S=t.z-c.z,v=s.x-c.x,A=s.y-c.y,L=s.z-c.z,R=Math.abs(p),D=Math.abs(m),N=Math.abs(g),M,P,V,F,B,W,Z,O,Q,se,ee,me;if(R>=D&&R>=N?(V=p,W=_,Q=x,me=v,p>=0?(M=m,P=g,F=b,B=y,Z=C,O=S,se=A,ee=L):(M=g,P=m,F=y,B=b,Z=S,O=C,se=L,ee=A)):D>=N?(V=m,W=b,Q=C,me=A,m>=0?(M=g,P=p,F=y,B=_,Z=S,O=x,se=L,ee=v):(M=p,P=g,F=_,B=y,Z=x,O=S,se=v,ee=L)):(V=g,W=y,Q=S,me=L,g>=0?(M=p,P=m,F=_,B=b,Z=x,O=C,se=v,ee=A):(M=m,P=p,F=b,B=_,Z=C,O=x,se=A,ee=v)),V===0)return null;let ne=M/V,ce=P/V,he=1/V,Be=F-ne*W,Ve=B-ce*W,re=Z-ne*Q,Pe=O-ce*Q,ke=se-ne*me,We=ee-ce*me,Ne=ke*Pe-We*re,Qe=Be*We-Ve*ke,Ht=re*Ve-Pe*Be;if(o){if(Ne<0||Qe<0||Ht<0)return null}else if((Ne<0||Qe<0||Ht<0)&&(Ne>0||Qe>0||Ht>0))return null;let qe=Ne+Qe+Ht;if(qe===0)return null;let Tt=he*(Ne*W+Qe*Q+Ht*me);return(qe>0?Tt<0:Tt>0)?null:this.at(Tt/qe,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ks=class extends rs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ts,this.combine=pm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Vy=new Ot,mo=new ka,Pc=new is,Gy=new X,Ic=new X,Nc=new X,Lc=new X,jp=new X,Dc=new X,Wy=new X,kc=new X,ni=class extends Un{constructor(e=new Yi,t=new ks){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){let o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){let d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){let s=this.geometry,o=s.attributes.position,l=s.morphAttributes.position,c=s.morphTargetsRelative;t.fromBufferAttribute(o,e);let d=this.morphTargetInfluences;if(l&&d){Dc.set(0,0,0);for(let p=0,m=l.length;p<m;p++){let g=d[p],_=l[p];g!==0&&(jp.fromBufferAttribute(_,e),c?Dc.addScaledVector(jp,g):Dc.addScaledVector(jp.sub(t),g))}t.add(Dc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let s=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Pc.copy(s.boundingSphere),Pc.applyMatrix4(l),mo.copy(e.ray).recast(e.near),!(Pc.containsPoint(mo.origin)===!1&&(mo.intersectSphere(Pc,Gy)===null||mo.origin.distanceToSquared(Gy)>(e.far-e.near)**2))&&(Vy.copy(l).invert(),mo.copy(e.ray).applyMatrix4(Vy),!(s.boundingBox!==null&&mo.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,mo)))}_computeIntersections(e,t,s){let o,l=this.geometry,c=this.material,d=l.index,p=l.attributes.position,m=l.attributes.uv,g=l.attributes.uv1,_=l.attributes.normal,b=l.groups,y=l.drawRange;if(d!==null)if(Array.isArray(c))for(let x=0,C=b.length;x<C;x++){let S=b[x],v=c[S.materialIndex],A=Math.max(S.start,y.start),L=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let R=A,D=L;R<D;R+=3){let N=d.getX(R),M=d.getX(R+1),P=d.getX(R+2);o=Fc(this,v,e,s,m,g,_,N,M,P),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{let x=Math.max(0,y.start),C=Math.min(d.count,y.start+y.count);for(let S=x,v=C;S<v;S+=3){let A=d.getX(S),L=d.getX(S+1),R=d.getX(S+2);o=Fc(this,c,e,s,m,g,_,A,L,R),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(p!==void 0)if(Array.isArray(c))for(let x=0,C=b.length;x<C;x++){let S=b[x],v=c[S.materialIndex],A=Math.max(S.start,y.start),L=Math.min(p.count,Math.min(S.start+S.count,y.start+y.count));for(let R=A,D=L;R<D;R+=3){let N=R,M=R+1,P=R+2;o=Fc(this,v,e,s,m,g,_,N,M,P),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{let x=Math.max(0,y.start),C=Math.min(p.count,y.start+y.count);for(let S=x,v=C;S<v;S+=3){let A=S,L=S+1,R=S+2;o=Fc(this,c,e,s,m,g,_,A,L,R),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}};function aw(r,e,t,s,o,l,c,d){let p;if(e.side===hi?p=s.intersectTriangle(c,l,o,!0,d):p=s.intersectTriangle(o,l,c,e.side===Hs,d),p===null)return null;kc.copy(d),kc.applyMatrix4(r.matrixWorld);let m=t.ray.origin.distanceTo(kc);return m<t.near||m>t.far?null:{distance:m,point:kc.clone(),object:r}}function Fc(r,e,t,s,o,l,c,d,p,m){r.getVertexPosition(d,Ic),r.getVertexPosition(p,Nc),r.getVertexPosition(m,Lc);let g=aw(r,e,t,s,Ic,Nc,Lc,Wy);if(g){let _=new X;Kr.getBarycoord(Wy,Ic,Nc,Lc,_),o&&(g.uv=Kr.getInterpolatedAttribute(o,d,p,m,_,new ct)),l&&(g.uv1=Kr.getInterpolatedAttribute(l,d,p,m,_,new ct)),c&&(g.normal=Kr.getInterpolatedAttribute(c,d,p,m,_,new X),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));let b={a:d,b:p,c:m,normal:new X,materialIndex:0};Kr.getNormal(Ic,Nc,Lc,b.normal),g.face=b,g.barycoord=_}return g}var Ol=class extends ti{constructor(e=null,t=1,s=1,o,l,c,d,p,m=Fn,g=Fn,_,b){super(null,c,d,p,m,g,o,l,_,b),this.isDataTexture=!0,this.image={data:e,width:t,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var zl=class extends fr{constructor(e,t,s,o=1){super(e,t,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ma=new Ot,Xy=new Ot,Uc=[],qy=new Pr,lw=new Ot,Al=new ni,Cl=new is,Bl=class extends ni{constructor(e,t,s){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new zl(new Float32Array(s*16),16),this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let o=0;o<s;o++)this.setMatrixAt(o,lw)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Pr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<t;s++)this.getMatrixAt(s,Ma),qy.copy(e.boundingBox).applyMatrix4(Ma),this.boundingBox.union(qy)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new is),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<t;s++)this.getMatrixAt(s,Ma),Cl.copy(e.boundingSphere).applyMatrix4(Ma),this.boundingSphere.union(Cl)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let s=t.morphTargetInfluences,o=this.morphTexture.source.data.data,l=s.length+1,c=e*l+1;for(let d=0;d<s.length;d++)s[d]=o[c+d]}raycast(e,t){let s=this.matrixWorld,o=this.count;if(Al.geometry=this.geometry,Al.material=this.material,Al.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Cl.copy(this.boundingSphere),Cl.applyMatrix4(s),e.ray.intersectsSphere(Cl)!==!1))for(let l=0;l<o;l++){this.getMatrixAt(l,Ma),Xy.multiplyMatrices(s,Ma),Al.matrixWorld=Xy,Al.raycast(e,Uc);for(let c=0,d=Uc.length;c<d;c++){let p=Uc[c];p.instanceId=l,p.object=this,t.push(p)}Uc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new zl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let s=t.morphTargetInfluences,o=s.length+1;this.morphTexture===null&&(this.morphTexture=new Ol(new Float32Array(o*this.count),o,this.count,Of,Zi));let l=this.morphTexture.source.data.data,c=0;for(let m=0;m<s.length;m++)c+=s[m];let d=this.geometry.morphTargetsRelative?1:1-c,p=o*e;return l[p]=d,l.set(s,p+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},go=new is,uw=new ct(.5,.5),Oc=new X,Fs=class{constructor(e=new Li,t=new Li,s=new Li,o=new Li,l=new Li,c=new Li){this.planes=[e,t,s,o,l,c]}set(e,t,s,o,l,c){let d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(s),d[3].copy(o),d[4].copy(l),d[5].copy(c),this}copy(e){let t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=$i,s=!1){let o=this.planes,l=e.elements,c=l[0],d=l[1],p=l[2],m=l[3],g=l[4],_=l[5],b=l[6],y=l[7],x=l[8],C=l[9],S=l[10],v=l[11],A=l[12],L=l[13],R=l[14],D=l[15];if(o[0].setComponents(m-c,y-g,v-x,D-A).normalize(),o[1].setComponents(m+c,y+g,v+x,D+A).normalize(),o[2].setComponents(m+d,y+_,v+C,D+L).normalize(),o[3].setComponents(m-d,y-_,v-C,D-L).normalize(),s)o[4].setComponents(p,b,S,R).normalize(),o[5].setComponents(m-p,y-b,v-S,D-R).normalize();else if(o[4].setComponents(m-p,y-b,v-S,D-R).normalize(),t===$i)o[5].setComponents(m+p,y+b,v+S,D+R).normalize();else if(t===Pa)o[5].setComponents(p,b,S,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),go.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),go.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(go)}intersectsSprite(e){go.center.set(0,0,0);let t=uw.distanceTo(e.center);return go.radius=.7071067811865476+t,go.applyMatrix4(e.matrixWorld),this.intersectsSphere(go)}intersectsSphere(e){let t=this.planes,s=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<o)return!1;return!0}intersectsBox(e){let t=this.planes;for(let s=0;s<6;s++){let o=t[s];if(Oc.x=o.normal.x>0?e.max.x:e.min.x,Oc.y=o.normal.y>0?e.max.y:e.min.y,Oc.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Oc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},$y=new Ot,df=class r{constructor(){this.coordinateSystem=$i,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,s=this._frustums;for(let o=0;o<t.length;o++){let l=t[o];$y.multiplyMatrices(l.projectionMatrix,l.matrixWorldInverse),s[o]===void 0&&(s[o]=new Fs),s[o].setFromProjectionMatrix($y,l.coordinateSystem,l.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let s=0;s<this._count;s++)if(t[s].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let s=0;s<this._count;s++)if(t[s].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let s=0;s<this._count;s++)if(t[s].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let s=0;s<this._count;s++)if(t[s].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let s=0;s<this._count;s++)if(t[s].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,s=e._frustums;for(let o=0;o<e._count;o++)t[o]===void 0&&(t[o]=new Fs),t[o].copy(s[o]);return this._count=e._count,this}clone(){return new r().copy(this)}};var Ir=class extends rs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},hf=new X,pf=new X,Yy=new Ot,Rl=new ka,zc=new is,Zp=new X,jy=new X,mf=class extends Un{constructor(e=new Yi,t=new Ir){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,s=[0];for(let o=1,l=t.count;o<l;o++)hf.fromBufferAttribute(t,o-1),pf.fromBufferAttribute(t,o),s[o]=s[o-1],s[o]+=hf.distanceTo(pf);e.setAttribute("lineDistance",new yn(s,1))}else Ye("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let s=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,c=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),zc.copy(s.boundingSphere),zc.applyMatrix4(o),zc.radius+=l,e.ray.intersectsSphere(zc)===!1)return;Yy.copy(o).invert(),Rl.copy(e.ray).applyMatrix4(Yy);let d=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=this.isLineSegments?2:1,g=s.index,b=s.attributes.position;if(g!==null){let y=Math.max(0,c.start),x=Math.min(g.count,c.start+c.count);for(let C=y,S=x-1;C<S;C+=m){let v=g.getX(C),A=g.getX(C+1),L=Bc(this,e,Rl,p,v,A,C);L&&t.push(L)}if(this.isLineLoop){let C=g.getX(x-1),S=g.getX(y),v=Bc(this,e,Rl,p,C,S,x-1);v&&t.push(v)}}else{let y=Math.max(0,c.start),x=Math.min(b.count,c.start+c.count);for(let C=y,S=x-1;C<S;C+=m){let v=Bc(this,e,Rl,p,C,C+1,C);v&&t.push(v)}if(this.isLineLoop){let C=Bc(this,e,Rl,p,x-1,y,x-1);C&&t.push(C)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){let o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){let d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}};function Bc(r,e,t,s,o,l,c){let d=r.geometry.attributes.position;if(hf.fromBufferAttribute(d,o),pf.fromBufferAttribute(d,l),t.distanceSqToSegment(hf,pf,Zp,jy)>s)return;Zp.applyMatrix4(r.matrixWorld);let m=e.ray.origin.distanceTo(Zp);if(!(m<e.near||m>e.far))return{distance:m,point:jy.clone().applyMatrix4(r.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:r}}var Zy=new X,Jy=new X,yo=class extends mf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,s=[];for(let o=0,l=t.count;o<l;o+=2)Zy.fromBufferAttribute(t,o),Jy.fromBufferAttribute(t,o+1),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+Zy.distanceTo(Jy);e.setAttribute("lineDistance",new yn(s,1))}else Ye("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Hl=class extends ti{constructor(e=[],t=Co,s,o,l,c,d,p,m,g){super(e,t,s,o,l,c,d,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Vl=class extends ti{constructor(e,t,s,o,l,c,d,p,m){super(e,t,s,o,l,c,d,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ss=class extends ti{constructor(e,t,s=dr,o,l,c,d=Fn,p=Fn,m,g=es,_=1){if(g!==es&&g!==as)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let b={width:e,height:t,depth:_};super(b,o,l,c,d,p,g,s,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new La(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Gl=class extends ss{constructor(e,t=dr,s=Co,o,l,c=Fn,d=Fn,p,m=es){let g={width:e,height:e,depth:1},_=[g,g,g,g,g,g];super(e,e,t,s,o,l,c,d,p,m),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Wl=class extends ti{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Nr=class r extends Yi{constructor(e=1,t=1,s=1,o=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:o,heightSegments:l,depthSegments:c};let d=this;o=Math.floor(o),l=Math.floor(l),c=Math.floor(c);let p=[],m=[],g=[],_=[],b=0,y=0;x("z","y","x",-1,-1,s,t,e,c,l,0),x("z","y","x",1,-1,s,t,-e,c,l,1),x("x","z","y",1,1,e,s,t,o,c,2),x("x","z","y",1,-1,e,s,-t,o,c,3),x("x","y","z",1,-1,e,t,s,o,l,4),x("x","y","z",-1,-1,e,t,-s,o,l,5),this.setIndex(p),this.setAttribute("position",new yn(m,3)),this.setAttribute("normal",new yn(g,3)),this.setAttribute("uv",new yn(_,2));function x(C,S,v,A,L,R,D,N,M,P,V){let F=R/M,B=D/P,W=R/2,Z=D/2,O=N/2,Q=M+1,se=P+1,ee=0,me=0,ne=new X;for(let ce=0;ce<se;ce++){let he=ce*B-Z;for(let Be=0;Be<Q;Be++){let Ve=Be*F-W;ne[C]=Ve*A,ne[S]=he*L,ne[v]=O,m.push(ne.x,ne.y,ne.z),ne[C]=0,ne[S]=0,ne[v]=N>0?1:-1,g.push(ne.x,ne.y,ne.z),_.push(Be/M),_.push(1-ce/P),ee+=1}}for(let ce=0;ce<P;ce++)for(let he=0;he<M;he++){let Be=b+he+Q*ce,Ve=b+he+Q*(ce+1),re=b+(he+1)+Q*(ce+1),Pe=b+(he+1)+Q*ce;p.push(Be,Ve,Pe),p.push(Ve,re,Pe),me+=6}d.addGroup(y,me,V),y+=me,b+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var bo=class r extends Yi{constructor(e=1,t=1,s=1,o=32,l=1,c=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:s,radialSegments:o,heightSegments:l,openEnded:c,thetaStart:d,thetaLength:p};let m=this;o=Math.floor(o),l=Math.floor(l);let g=[],_=[],b=[],y=[],x=0,C=[],S=s/2,v=0;A(),c===!1&&(e>0&&L(!0),t>0&&L(!1)),this.setIndex(g),this.setAttribute("position",new yn(_,3)),this.setAttribute("normal",new yn(b,3)),this.setAttribute("uv",new yn(y,2));function A(){let R=new X,D=new X,N=0,M=(t-e)/s;for(let P=0;P<=l;P++){let V=[],F=P/l,B=F*(t-e)+e;for(let W=0;W<=o;W++){let Z=W/o,O=Z*p+d,Q=Math.sin(O),se=Math.cos(O);D.x=B*Q,D.y=-F*s+S,D.z=B*se,_.push(D.x,D.y,D.z),R.set(Q,M,se).normalize(),b.push(R.x,R.y,R.z),y.push(Z,1-F),V.push(x++)}C.push(V)}for(let P=0;P<o;P++)for(let V=0;V<l;V++){let F=C[V][P],B=C[V+1][P],W=C[V+1][P+1],Z=C[V][P+1];(e>0||V!==0)&&(g.push(F,B,Z),N+=3),(t>0||V!==l-1)&&(g.push(B,W,Z),N+=3)}m.addGroup(v,N,0),v+=N}function L(R){let D=x,N=new ct,M=new X,P=0,V=R===!0?e:t,F=R===!0?1:-1;for(let W=1;W<=o;W++)_.push(0,S*F,0),b.push(0,F,0),y.push(.5,.5),x++;let B=x;for(let W=0;W<=o;W++){let O=W/o*p+d,Q=Math.cos(O),se=Math.sin(O);M.x=V*se,M.y=S*F,M.z=V*Q,_.push(M.x,M.y,M.z),b.push(0,F,0),N.x=Q*.5+.5,N.y=se*.5*F+.5,y.push(N.x,N.y),x++}for(let W=0;W<o;W++){let Z=D+W,O=B+W;R===!0?g.push(O,O+1,Z):g.push(O+1,O,Z),P+=3}m.addGroup(v,P,R===!0?1:2),v+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Hc=new X,Vc=new X,Jp=new X,Gc=new Kr,Xl=class extends Yi{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let o=Math.pow(10,4),l=Math.cos(jc*t),c=e.getIndex(),d=e.getAttribute("position"),p=c?c.count:d.count,m=[0,0,0],g=["a","b","c"],_=new Array(3),b=new Map,y=[];for(let x=0;x<p;x+=3){c?(m[0]=c.getX(x),m[1]=c.getX(x+1),m[2]=c.getX(x+2)):(m[0]=x,m[1]=x+1,m[2]=x+2);let{a:C,b:S,c:v}=Gc;if(C.fromBufferAttribute(d,m[0]),S.fromBufferAttribute(d,m[1]),v.fromBufferAttribute(d,m[2]),Gc.getNormal(Jp),_[0]=`${Math.round(C.x*o)},${Math.round(C.y*o)},${Math.round(C.z*o)}`,_[1]=`${Math.round(S.x*o)},${Math.round(S.y*o)},${Math.round(S.z*o)}`,_[2]=`${Math.round(v.x*o)},${Math.round(v.y*o)},${Math.round(v.z*o)}`,!(_[0]===_[1]||_[1]===_[2]||_[2]===_[0]))for(let A=0;A<3;A++){let L=(A+1)%3,R=_[A],D=_[L],N=Gc[g[A]],M=Gc[g[L]],P=`${R}_${D}`,V=`${D}_${R}`,F=b.get(V);F?(Jp.dot(F.normal)<=l&&(y.push(N.x,N.y,N.z),y.push(M.x,M.y,M.z)),b.set(V,null)):b.has(P)||b.set(P,{index0:m[A],index1:m[L],normal:Jp.clone()})}}for(let x of b.values())if(x){let{index0:C,index1:S}=x;Hc.fromBufferAttribute(d,C),Vc.fromBufferAttribute(d,S),y.push(Hc.x,Hc.y,Hc.z),y.push(Vc.x,Vc.y,Vc.z)}this.setAttribute("position",new yn(y,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};var _o=class r extends Yi{constructor(e=1,t=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:o};let l=e/2,c=t/2,d=Math.floor(s),p=Math.floor(o),m=d+1,g=p+1,_=e/d,b=t/p,y=[],x=[],C=[],S=[];for(let v=0;v<g;v++){let A=v*b-c;for(let L=0;L<m;L++){let R=L*_-l;x.push(R,-A,0),C.push(0,0,1),S.push(L/d),S.push(1-v/p)}}for(let v=0;v<p;v++)for(let A=0;A<d;A++){let L=A+m*v,R=A+m*(v+1),D=A+1+m*(v+1),N=A+1+m*v;y.push(L,R,N),y.push(R,D,N)}this.setIndex(y),this.setAttribute("position",new yn(x,3)),this.setAttribute("normal",new yn(C,3)),this.setAttribute("uv",new yn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}};var ql=class r extends Yi{constructor(e=1,t=.4,s=12,o=48,l=Math.PI*2,c=0,d=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:s,tubularSegments:o,arc:l,thetaStart:c,thetaLength:d},s=Math.floor(s),o=Math.floor(o);let p=[],m=[],g=[],_=[],b=new X,y=new X,x=new X;for(let C=0;C<=s;C++){let S=c+C/s*d;for(let v=0;v<=o;v++){let A=v/o*l;y.x=(e+t*Math.cos(S))*Math.cos(A),y.y=(e+t*Math.cos(S))*Math.sin(A),y.z=t*Math.sin(S),m.push(y.x,y.y,y.z),b.x=e*Math.cos(A),b.y=e*Math.sin(A),x.subVectors(y,b).normalize(),g.push(x.x,x.y,x.z),_.push(v/o),_.push(C/s)}}for(let C=1;C<=s;C++)for(let S=1;S<=o;S++){let v=(o+1)*C+S-1,A=(o+1)*(C-1)+S-1,L=(o+1)*(C-1)+S,R=(o+1)*C+S;p.push(v,A,R),p.push(A,L,R)}this.setIndex(p),this.setAttribute("position",new yn(m,3)),this.setAttribute("normal",new yn(g,3)),this.setAttribute("uv",new yn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Po(r){let e={};for(let t in r){e[t]={};for(let s in r[t]){let o=r[t][s];if(Ky(o))o.isRenderTargetTexture?(Ye("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=o.clone();else if(Array.isArray(o))if(Ky(o[0])){let l=[];for(let c=0,d=o.length;c<d;c++)l[c]=o[c].clone();e[t][s]=l}else e[t][s]=o.slice();else e[t][s]=o}}return e}function si(r){let e={};for(let t=0;t<r.length;t++){let s=Po(r[t]);for(let o in s)e[o]=s[o]}return e}function Ky(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function cw(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Dm(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:vt.workingColorSpace}var qb={clone:Po,merge:si},fw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ji=class extends rs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fw,this.fragmentShader=dw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Po(e.uniforms),this.uniformsGroups=cw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let o in this.uniforms){let c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let s={};for(let o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let s in e.uniforms){let o=e.uniforms[s];switch(this.uniforms[s]={},o.type){case"t":this.uniforms[s].value=t[o.value]||null;break;case"c":this.uniforms[s].value=new Ke().setHex(o.value);break;case"v2":this.uniforms[s].value=new ct().fromArray(o.value);break;case"v3":this.uniforms[s].value=new X().fromArray(o.value);break;case"v4":this.uniforms[s].value=new Kt().fromArray(o.value);break;case"m3":this.uniforms[s].value=new nt().fromArray(o.value);break;case"m4":this.uniforms[s].value=new Ot().fromArray(o.value);break;default:this.uniforms[s].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let s in e.extensions)this.extensions[s]=e.extensions[s];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},gf=class extends ji{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},di=class extends rs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yd,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ts,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var vf=class extends rs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ib,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},yf=class extends rs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function wa(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Wc(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}var Us=class{constructor(e,t,s,o){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=o!==void 0?o:new t.constructor(s),this.sampleValues=t,this.valueSize=s,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,s=this._cachedIndex,o=t[s],l=t[s-1];e:{t:{let c;n:{i:if(!(e<o)){for(let d=s+2;;){if(o===void 0){if(e<l)break i;return s=t.length,this._cachedIndex=s,this.copySampleValue_(s-1)}if(s===d)break;if(l=o,o=t[++s],e<o)break t}c=t.length;break n}if(!(e>=l)){let d=t[1];e<d&&(s=2,l=d);for(let p=s-2;;){if(l===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===p)break;if(o=l,l=t[--s-1],e>=l)break t}c=s,s=0;break n}break e}for(;s<c;){let d=s+c>>>1;e<t[d]?c=d:s=d+1}if(o=t[s],l=t[s-1],l===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(o===void 0)return s=t.length,this._cachedIndex=s,this.copySampleValue_(s-1)}this._cachedIndex=s,this.intervalChanged_(s,l,o)}return this.interpolate_(s,l,e,o)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o;for(let c=0;c!==o;++c)t[c]=s[l+c];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},bf=class extends Us{constructor(e,t,s,o){super(e,t,s,o),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:em,endingEnd:em}}intervalChanged_(e,t,s){let o=this.parameterPositions,l=e-2,c=e+1,d=o[l],p=o[c];if(d===void 0)switch(this.getSettings_().endingStart){case tm:l=e,d=2*t-s;break;case nm:l=o.length-2,d=t+o[l]-o[l+1];break;default:l=e,d=s}if(p===void 0)switch(this.getSettings_().endingEnd){case tm:c=e,p=2*s-t;break;case nm:c=1,p=s+o[1]-o[0];break;default:c=e-1,p=t}let m=(s-t)*.5,g=this.valueSize;this._weightPrev=m/(t-d),this._weightNext=m/(p-s),this._offsetPrev=l*g,this._offsetNext=c*g}interpolate_(e,t,s,o){let l=this.resultBuffer,c=this.sampleValues,d=this.valueSize,p=e*d,m=p-d,g=this._offsetPrev,_=this._offsetNext,b=this._weightPrev,y=this._weightNext,x=(s-t)/(o-t),C=x*x,S=C*x,v=-b*S+2*b*C-b*x,A=(1+b)*S+(-1.5-2*b)*C+(-.5+b)*x+1,L=(-1-y)*S+(1.5+y)*C+.5*x,R=y*S-y*C;for(let D=0;D!==d;++D)l[D]=v*c[g+D]+A*c[m+D]+L*c[p+D]+R*c[_+D];return l}},_f=class extends Us{constructor(e,t,s,o){super(e,t,s,o)}interpolate_(e,t,s,o){let l=this.resultBuffer,c=this.sampleValues,d=this.valueSize,p=e*d,m=p-d,g=(s-t)/(o-t),_=1-g;for(let b=0;b!==d;++b)l[b]=c[m+b]*_+c[p+b]*g;return l}},Sf=class extends Us{constructor(e,t,s,o){super(e,t,s,o)}interpolate_(e){return this.copySampleValue_(e-1)}},xf=class extends Us{interpolate_(e,t,s,o){let l=this.resultBuffer,c=this.sampleValues,d=this.valueSize,p=e*d,m=p-d,g=this.inTangents,_=this.outTangents;if(!g||!_){let x=(s-t)/(o-t),C=1-x;for(let S=0;S!==d;++S)l[S]=c[m+S]*C+c[p+S]*x;return l}let b=d*2,y=e-1;for(let x=0;x!==d;++x){let C=c[m+x],S=c[p+x],v=y*b+x*2,A=_[v],L=_[v+1],R=e*b+x*2,D=g[R],N=g[R+1],M=pw(s,t,A,D,o);l[x]=$b(M,C,L,N,S)}return l}};function $b(r,e,t,s,o){let l=1-r;return l*l*l*e+3*l*l*r*t+3*l*r*r*s+r*r*r*o}function hw(r,e,t,s,o){let l=1-r;return 3*l*l*(t-e)+6*l*r*(s-t)+3*r*r*(o-s)}function pw(r,e,t,s,o){let l=(r-e)/(o-e);for(let c=0;c<8;c++){let d=$b(l,e,t,s,o)-r;if(Math.abs(d)<1e-10)break;let p=hw(l,e,t,s,o);if(Math.abs(p)<1e-10)break;l=Math.max(0,Math.min(1,l-d/p))}return l}var ki=class{constructor(e,t,s,o){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=wa(t,this.TimeBufferType),this.values=wa(s,this.ValueBufferType),this.setInterpolation(o||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,s;if(t.toJSON!==this.toJSON)s=t.toJSON(e);else{s={name:e.name,times:wa(e.times,Array),values:wa(e.values,Array)};let o=e.getInterpolation();o!==e.DefaultInterpolation&&(s.interpolation=o),Wc(e.settings)&&(s.settings={inTangents:wa(e.settings.inTangents,Array),outTangents:wa(e.settings.outTangents,Array)})}return s.type=e.ValueTypeName,s}InterpolantFactoryMethodDiscrete(e){return new Sf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new _f(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new bf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new xf(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Il:t=this.InterpolantFactoryMethodDiscrete;break;case af:t=this.InterpolantFactoryMethodLinear;break;case $c:t=this.InterpolantFactoryMethodSmooth;break;case Qp:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let s="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(s);return Ye("KeyframeTrack:",s),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Il;case this.InterpolantFactoryMethodLinear:return af;case this.InterpolantFactoryMethodSmooth:return $c;case this.InterpolantFactoryMethodBezier:return Qp}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let s=0,o=t.length;s!==o;++s)t[s]+=e;Wc(this.settings)&&(Qy(this.settings.inTangents,e),Qy(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let s=0,o=t.length;s!==o;++s)t[s]*=e;Wc(this.settings)&&(eb(this.settings.inTangents,e),eb(this.settings.outTangents,e))}return this}trim(e,t){let s=this.times,o=s.length,l=0,c=o-1;for(;l!==o&&s[l]<e;)++l;for(;c!==-1&&s[c]>t;)--c;if(++c,l!==0||c!==o){l>=c&&(c=Math.max(c,1),l=c-1);let d=this.getValueSize();this.times=s.slice(l,c),this.values=this.values.slice(l*d,c*d)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(tt("KeyframeTrack: Invalid value size in track.",this),e=!1);let s=this.times,o=this.values,l=s.length;l===0&&(tt("KeyframeTrack: Track is empty.",this),e=!1);let c=null;for(let d=0;d!==l;d++){let p=s[d];if(typeof p=="number"&&isNaN(p)){tt("KeyframeTrack: Time is not a valid number.",this,d,p),e=!1;break}if(c!==null&&c>p){tt("KeyframeTrack: Out of order keys.",this,d,p,c),e=!1;break}c=p}if(o!==void 0&&HM(o))for(let d=0,p=o.length;d!==p;++d){let m=o[d];if(isNaN(m)){tt("KeyframeTrack: Value is not a valid number.",this,d,m),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),s=this.getValueSize(),o=this.getInterpolation()===$c,l=e.length-1,c=1;for(let d=1;d<l;++d){let p=!1,m=e[d],g=e[d+1];if(m!==g&&(d!==1||m!==e[0]))if(o)p=!0;else{let _=d*s,b=_-s,y=_+s;for(let x=0;x!==s;++x){let C=t[_+x];if(C!==t[b+x]||C!==t[y+x]){p=!0;break}}}if(p){if(d!==c){e[c]=e[d];let _=d*s,b=c*s;for(let y=0;y!==s;++y)t[b+y]=t[_+y]}++c}}if(l>0){e[c]=e[l];for(let d=l*s,p=c*s,m=0;m!==s;++m)t[p+m]=t[d+m];++c}return c!==e.length?(this.times=e.slice(0,c),this.values=t.slice(0,c*s)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),s=this.constructor,o=new s(this.name,e,t);return o.createInterpolant=this.createInterpolant,Wc(this.settings)&&(o.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),o}};function Qy(r,e){for(let t=0,s=r.length;t!==s;t+=2)r[t]+=e}function eb(r,e){for(let t=0,s=r.length;t!==s;t+=2)r[t]*=e}ki.prototype.ValueTypeName="";ki.prototype.TimeBufferType=Float32Array;ki.prototype.ValueBufferType=Float32Array;ki.prototype.DefaultInterpolation=af;var Os=class extends ki{constructor(e,t,s){super(e,t,s)}};Os.prototype.ValueTypeName="bool";Os.prototype.ValueBufferType=Array;Os.prototype.DefaultInterpolation=Il;Os.prototype.InterpolantFactoryMethodLinear=void 0;Os.prototype.InterpolantFactoryMethodSmooth=void 0;var Mf=class extends ki{constructor(e,t,s,o){super(e,t,s,o)}};Mf.prototype.ValueTypeName="color";var wf=class extends ki{constructor(e,t,s,o){super(e,t,s,o)}};wf.prototype.ValueTypeName="number";var Tf=class extends Us{constructor(e,t,s,o){super(e,t,s,o)}interpolate_(e,t,s,o){let l=this.resultBuffer,c=this.sampleValues,d=this.valueSize,p=(s-t)/(o-t),m=e*d;for(let g=m+d;m!==g;m+=4)Rr.slerpFlat(l,0,c,m-d,c,m,p);return l}},$l=class extends ki{constructor(e,t,s,o){super(e,t,s,o)}InterpolantFactoryMethodLinear(e){return new Tf(this.times,this.values,this.getValueSize(),e)}};$l.prototype.ValueTypeName="quaternion";$l.prototype.InterpolantFactoryMethodSmooth=void 0;var zs=class extends ki{constructor(e,t,s){super(e,t,s)}};zs.prototype.ValueTypeName="string";zs.prototype.ValueBufferType=Array;zs.prototype.DefaultInterpolation=Il;zs.prototype.InterpolantFactoryMethodLinear=void 0;zs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ef=class extends ki{constructor(e,t,s,o){super(e,t,s,o)}};Ef.prototype.ValueTypeName="vector";var Zc={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(tb(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!tb(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function tb(r){try{let e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Af=class{constructor(e,t,s){let o=this,l=!1,c=0,d=0,p,m=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=s,this._abortController=null,this.itemStart=function(g){d++,l===!1&&o.onStart!==void 0&&o.onStart(g,c,d),l=!0},this.itemEnd=function(g){c++,o.onProgress!==void 0&&o.onProgress(g,c,d),c===d&&(l=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(g){o.onError!==void 0&&o.onError(g)},this.resolveURL=function(g){return g=g.normalize("NFC"),p?p(g):g},this.setURLModifier=function(g){return p=g,this},this.addHandler=function(g,_){return m.push(g,_),this},this.removeHandler=function(g){let _=m.indexOf(g);return _!==-1&&m.splice(_,2),this},this.getHandler=function(g){for(let _=0,b=m.length;_<b;_+=2){let y=m[_],x=m[_+1];if(y.global&&(y.lastIndex=0),y.test(g))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Yb=new Af,Fa=class{constructor(e){this.manager=e!==void 0?e:Yb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let s=this;return new Promise(function(o,l){s.load(e,o,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Fa.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ta=new WeakMap,Cf=class extends Fa{constructor(e){super(e)}load(e,t,s,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let l=this,c=Zc.get(`image:${e}`);if(c!==void 0){if(c.complete===!0)l.manager.itemStart(e),setTimeout(function(){t&&t(c),l.manager.itemEnd(e)},0);else{let _=Ta.get(c);_===void 0&&(_=[],Ta.set(c,_)),_.push({onLoad:t,onError:o})}return c}let d=Ia("img");function p(){g(),t&&t(this);let _=Ta.get(this)||[];for(let b=0;b<_.length;b++){let y=_[b];y.onLoad&&y.onLoad(this)}Ta.delete(this),l.manager.itemEnd(e)}function m(_){g(),o&&o(_),Zc.remove(`image:${e}`);let b=Ta.get(this)||[];for(let y=0;y<b.length;y++){let x=b[y];x.onError&&x.onError(_)}Ta.delete(this),l.manager.itemError(e),l.manager.itemEnd(e)}function g(){d.removeEventListener("load",p,!1),d.removeEventListener("error",m,!1)}return d.addEventListener("load",p,!1),d.addEventListener("error",m,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),Zc.add(`image:${e}`,d),l.manager.itemStart(e),d.fetchPriority=this.priority,d.src=e,d}};var Yl=class extends Fa{constructor(e){super(e)}load(e,t,s,o){let l=new ti,c=new Cf(this.manager);return c.setPriority(this.priority),c.setCache(this.cache),c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(d){l.image=d,l.needsUpdate=!0,t!==void 0&&t(l)},s,o),l}},jl=class extends Un{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var Kp=new Ot,nb=new X,ib=new X,Rf=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.mapType=ri,this.map=null,this.mapPass=null,this.matrix=new Ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fs,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new Kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;nb.setFromMatrixPosition(e.matrixWorld),t.position.copy(nb),ib.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ib),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,s,o){Kp.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),s.setFromProjectionMatrix(Kp,e.coordinateSystem,e.reversedDepth);let l=this._frameExtents,c=o?o.z/l.x:1,d=o?o.w/l.y:1,p=o?o.x/l.x:0,m=o?o.y/l.y:0;e.coordinateSystem===Pa||e.reversedDepth?t.set(.5*c,0,0,.5*c+p,0,.5*d,0,.5*d+m,0,0,1,0,0,0,0,1):t.set(.5*c,0,0,.5*c+p,0,.5*d,0,.5*d+m,0,0,.5,.5,0,0,0,1),t.multiply(Kp)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Xc=new X,qc=new Rr,Er=new X,Zl=class extends Un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot,this.coordinateSystem=$i,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Xc,qc,Er),Er.x===1&&Er.y===1&&Er.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xc,qc,Er.set(1,1,1)).invert()}updateWorldMatrix(e,t,s=!1){super.updateWorldMatrix(e,t,s),this.matrixWorld.decompose(Xc,qc,Er),Er.x===1&&Er.y===1&&Er.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xc,qc,Er.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ds=new X,rb=new ct,sb=new ct,ci=class extends Zl{constructor(e=50,t=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=lf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(jc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return lf*2*Math.atan(Math.tan(jc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){Ds.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ds.x,Ds.y).multiplyScalar(-e/Ds.z),Ds.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ds.x,Ds.y).multiplyScalar(-e/Ds.z)}getViewSize(e,t){return this.getViewBounds(e,rb,sb),t.subVectors(sb,rb)}setViewOffset(e,t,s,o,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(jc*.5*this.fov)/this.zoom,s=2*t,o=this.aspect*s,l=-.5*o,c=this.view;if(this.view!==null&&this.view.enabled){let p=c.fullWidth,m=c.fullHeight;l+=c.offsetX*o/p,t-=c.offsetY*s/m,o*=c.width/p,s*=c.height/m}let d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var So=class extends Zl{constructor(e=-1,t=1,s=1,o=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=o,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,o,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2,l=s-e,c=s+e,d=o+t,p=o-t;if(this.view!==null&&this.view.enabled){let m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,c=l+m*this.view.width,d-=g*this.view.offsetY,p=d-g*this.view.height}this.projectionMatrix.makeOrthographic(l,c,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},im=class extends Rf{constructor(){super(new So(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},xo=class extends jl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Un.DEFAULT_UP),this.updateMatrix(),this.target=new Un,this.shadow=new im}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Mo=class extends jl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Ea=-90,Aa=1,Ua=class extends Un{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;let o=new ci(Ea,Aa,e,t);o.layers=this.layers,this.add(o);let l=new ci(Ea,Aa,e,t);l.layers=this.layers,this.add(l);let c=new ci(Ea,Aa,e,t);c.layers=this.layers,this.add(c);let d=new ci(Ea,Aa,e,t);d.layers=this.layers,this.add(d);let p=new ci(Ea,Aa,e,t);p.layers=this.layers,this.add(p);let m=new ci(Ea,Aa,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[s,o,l,c,d,p]=t;for(let m of t)this.remove(m);if(e===$i)s.up.set(0,1,0),s.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Pa)s.up.set(0,-1,0),s.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:s,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[l,c,d,p,m,g]=this.children,_=e.getRenderTarget(),b=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let C=s.texture.mipmapsAutoUpdate;s.texture.mipmapsAutoUpdate=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(s,0,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(s,1,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(s,2,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(s,3,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(s,4,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),s.texture.mipmapsAutoUpdate=C,e.setRenderTarget(s,5,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,g),e.setRenderTarget(_,b,y),e.xr.enabled=x,s.texture.needsPMREMUpdate=!0}},Pf=class extends ci{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var km="\\[\\]\\.:\\/",mw=new RegExp("["+km+"]","g"),Fm="[^"+km+"]",gw="[^"+km.replace("\\.","")+"]",vw=/((?:WC+[\/:])*)/.source.replace("WC",Fm),yw=/(WCOD+)?/.source.replace("WCOD",gw),bw=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fm),_w=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fm),Sw=new RegExp("^"+vw+yw+bw+_w+"$"),xw=["material","materials","bones","map"],rm=class{constructor(e,t,s){let o=s||Zt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,o)}getValue(e,t){this.bind();let s=this._targetGroup.nCachedObjects_,o=this._bindings[s];o!==void 0&&o.getValue(e,t)}setValue(e,t){let s=this._bindings;for(let o=this._targetGroup.nCachedObjects_,l=s.length;o!==l;++o)s[o].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,s=e.length;t!==s;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,s=e.length;t!==s;++t)e[t].unbind()}},Zt=class r{constructor(e,t,s){this.path=t,this.parsedPath=s||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,s){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,s):new r(e,t,s)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(mw,"")}static parseTrackName(e){let t=Sw.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let s={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},o=s.nodeName&&s.nodeName.lastIndexOf(".");if(o!==void 0&&o!==-1){let l=s.nodeName.substring(o+1);xw.indexOf(l)!==-1&&(s.nodeName=s.nodeName.substring(0,o),s.objectName=l)}if(s.propertyName===null||s.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return s}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let s=e.skeleton.getBoneByName(t);if(s!==void 0)return s}if(e.children){let s=function(l){for(let c=0;c<l.length;c++){let d=l[c];if(d.name===t||d.uuid===t)return d;let p=s(d.children);if(p)return p}return null},o=s(e.children);if(o)return o}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let s=this.resolvedProperty;for(let o=0,l=s.length;o!==l;++o)e[t++]=s[o]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let s=this.resolvedProperty;for(let o=0,l=s.length;o!==l;++o)s[o]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let s=this.resolvedProperty;for(let o=0,l=s.length;o!==l;++o)s[o]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let s=this.resolvedProperty;for(let o=0,l=s.length;o!==l;++o)s[o]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,s=t.objectName,o=t.propertyName,l=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ye("PropertyBinding: No target node found for track: "+this.path+".");return}if(s){let m=t.objectIndex;switch(s){case"materials":if(!e.material){tt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){tt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){tt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let g=0;g<e.length;g++)if(e[g].name===m){m=g;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){tt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){tt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[s]===void 0){tt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[s]}if(m!==void 0){if(e[m]===void 0){tt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[m]}}let c=e[o];if(c===void 0){let m=t.nodeName;tt("PropertyBinding: Trying to update property for track: "+m+"."+o+" but it wasn't found.",e);return}let d=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?d=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(d=this.Versioning.MatrixWorldNeedsUpdate);let p=this.BindingType.Direct;if(l!==void 0){if(o==="morphTargetInfluences"){if(!e.geometry){tt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){tt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[l]!==void 0&&(l=e.morphTargetDictionary[l])}p=this.BindingType.ArrayElement,this.resolvedProperty=c,this.propertyIndex=l}else c.fromArray!==void 0&&c.toArray!==void 0?(p=this.BindingType.HasFromToArray,this.resolvedProperty=c):Array.isArray(c)?(p=this.BindingType.EntireArray,this.resolvedProperty=c):this.propertyName=o;this.getValue=this.GetterByBindingType[p],this.setValue=this.SetterByBindingTypeAndVersioning[p][d]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Zt.Composite=rm;Zt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Zt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Zt.prototype.GetterByBindingType=[Zt.prototype._getValue_direct,Zt.prototype._getValue_array,Zt.prototype._getValue_arrayElement,Zt.prototype._getValue_toArray];Zt.prototype.SetterByBindingTypeAndVersioning=[[Zt.prototype._setValue_direct,Zt.prototype._setValue_direct_setNeedsUpdate,Zt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_array,Zt.prototype._setValue_array_setNeedsUpdate,Zt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_arrayElement,Zt.prototype._setValue_arrayElement_setNeedsUpdate,Zt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_fromArray,Zt.prototype._setValue_fromArray_setNeedsUpdate,Zt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var tP=new Float32Array(1);var ob=new Ot,wo=class{constructor(e,t,s=0,o=1/0){this.ray=new ka(e,t),this.near=s,this.far=o,this.camera=null,this.layers=new ns,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):tt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ob.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ob),this}intersectObject(e,t=!0,s=[]){return sm(e,this,s,t),s.sort(ab),s}intersectObjects(e,t=!0,s=[]){for(let o=0,l=e.length;o<l;o++)sm(e[o],this,s,t);return s.sort(ab),s}};function ab(r,e){return r.distance-e.distance}function sm(r,e,t,s){let o=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(o=!1),o===!0&&s===!0){let l=r.children;for(let c=0,d=l.length;c<d;c++)sm(l[c],e,t,!0)}}var Jl=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ye("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var Vm=class Vm{constructor(e,t,s,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,s,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let s=0;s<4;s++)this.elements[s]=e[s+t];return this}set(e,t,s,o){let l=this.elements;return l[0]=e,l[2]=t,l[1]=s,l[3]=o,this}};Vm.prototype.isMatrix2=!0;var om=Vm;function Um(r,e,t,s){let o=Mw(s);switch(t){case Em:return r*e;case Of:return r*e/o.components*o.byteLength;case zf:return r*e/o.components*o.byteLength;case Vs:return r*e*2/o.components*o.byteLength;case Bf:return r*e*2/o.components*o.byteLength;case Am:return r*e*3/o.components*o.byteLength;case Fi:return r*e*4/o.components*o.byteLength;case Hf:return r*e*4/o.components*o.byteLength;case eu:case tu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case nu:case iu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Gf:case Xf:return Math.max(r,16)*Math.max(e,8)/4;case Vf:case Wf:return Math.max(r,8)*Math.max(e,8)/2;case qf:case $f:case jf:case Zf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Yf:case ru:case Jf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Kf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Qf:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case ed:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case td:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case nd:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case id:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case rd:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case sd:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case od:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case ad:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case ld:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case ud:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case cd:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case fd:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case dd:case hd:case pd:return Math.ceil(r/4)*Math.ceil(e/4)*16;case md:case gd:return Math.ceil(r/4)*Math.ceil(e/4)*8;case su:case vd:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Mw(r){switch(r){case ri:case xm:return{byteLength:1,components:1};case Ha:case Mm:case hr:return{byteLength:2,components:1};case Ff:case Uf:return{byteLength:2,components:4};case dr:case kf:case Zi:return{byteLength:4,components:1};case wm:case Tm:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ye("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function g_(){let r=null,e=!1,t=null,s=null;function o(l,c){s=r.requestAnimationFrame(o),t(l,c)}return{start:function(){e!==!0&&t!==null&&r!==null&&(s=r.requestAnimationFrame(o),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function Tw(r){let e=new WeakMap;function t(d,p){let m=d.array,g=d.usage,_=m.byteLength,b=r.createBuffer();r.bindBuffer(p,b),r.bufferData(p,m,g),d.onUploadCallback();let y;if(m instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)y=r.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=r.SHORT;else if(m instanceof Uint32Array)y=r.UNSIGNED_INT;else if(m instanceof Int32Array)y=r.INT;else if(m instanceof Int8Array)y=r.BYTE;else if(m instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:b,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:_}}function s(d,p,m){let g=p.array,_=p.updateRanges;if(r.bindBuffer(m,d),_.length===0)r.bufferSubData(m,0,g);else{_.sort((y,x)=>y.start-x.start);let b=0;for(let y=1;y<_.length;y++){let x=_[b],C=_[y];C.start<=x.start+x.count+1?x.count=Math.max(x.count,C.start+C.count-x.start):(++b,_[b]=C)}_.length=b+1;for(let y=0,x=_.length;y<x;y++){let C=_[y];r.bufferSubData(m,C.start*g.BYTES_PER_ELEMENT,g,C.start,C.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);let p=e.get(d);p&&(r.deleteBuffer(p.buffer),e.delete(d))}function c(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){let g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}let m=e.get(d);if(m===void 0)e.set(d,t(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,d,p),m.version=d.version}}return{get:o,remove:l,update:c}}var Ew=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Aw=`#ifdef USE_ALPHAHASH
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
#endif`,Cw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Iw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nw=`#ifdef USE_AOMAP
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
#endif`,Lw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dw=`#ifdef USE_BATCHING
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
#endif`,kw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Uw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ow=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zw=`#ifdef USE_IRIDESCENCE
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
#endif`,Bw=`#ifdef USE_BUMPMAP
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
#endif`,Hw=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Vw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ww=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,qw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,$w=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Yw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,jw=`#define PI 3.141592653589793
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
} // validated`,Zw=`vec3 transformedNormal = objectNormal;
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
#endif`,Jw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tT="gl_FragColor = linearToOutputTexel( gl_FragColor );",nT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,iT=`#ifdef USE_ENVMAP
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
#endif`,rT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,sT=`#ifdef USE_ENVMAP
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
#endif`,oT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,aT=`#ifdef USE_ENVMAP
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
#endif`,lT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dT=`#ifdef USE_GRADIENTMAP
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
}`,hT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gT=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,vT=`#ifdef USE_ENVMAP
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
#endif`,yT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_T=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ST=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xT=`PhysicalMaterial material;
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
#endif`,MT=`uniform sampler2D dfgLUT;
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
}`,wT=`
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
#endif`,TT=`#if defined( RE_IndirectDiffuse )
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
#endif`,ET=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,AT=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,CT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,RT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,NT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,LT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,DT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kT=`#if defined( USE_POINTS_UV )
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
#endif`,FT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,UT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,OT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zT=`#if defined( USE_MORPHCOLORS )
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
#endif`,BT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,HT=`#ifdef USE_MORPHTARGETS
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
#endif`,VT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,GT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,WT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,XT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$T=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,YT=`#ifdef USE_NORMALMAP
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
#endif`,jT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ZT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,JT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,KT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,QT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,eE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,tE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,iE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,oE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,aE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,uE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cE=`float getShadowMask() {
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
}`,fE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dE=`#ifdef USE_SKINNING
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
#endif`,hE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pE=`#ifdef USE_SKINNING
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
#endif`,mE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,bE=`#ifdef USE_TRANSMISSION
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
#endif`,_E=`#ifdef USE_TRANSMISSION
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
#endif`,SE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ME=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,TE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,EE=`uniform sampler2D t2D;
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
}`,AE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CE=`uniform float backgroundBlurriness;
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
}`,RE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,PE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IE=`#include <common>
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
}`,NE=`#if DEPTH_PACKING == 3200
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
}`,LE=`#define DISTANCE
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
}`,DE=`#define DISTANCE
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
}`,kE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,FE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UE=`uniform float scale;
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
}`,OE=`uniform vec3 diffuse;
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
}`,zE=`#include <common>
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
}`,BE=`uniform vec3 diffuse;
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
}`,HE=`#define LAMBERT
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
}`,VE=`#define LAMBERT
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
}`,GE=`#define MATCAP
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
}`,WE=`#define MATCAP
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
}`,XE=`#define NORMAL
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
}`,qE=`#define NORMAL
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
}`,$E=`#define PHONG
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
}`,YE=`#define PHONG
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
}`,jE=`#define STANDARD
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
}`,ZE=`#define STANDARD
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
}`,JE=`#define TOON
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
}`,KE=`#define TOON
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
}`,QE=`uniform float size;
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
}`,eA=`uniform vec3 diffuse;
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
}`,tA=`#include <common>
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
}`,nA=`uniform vec3 color;
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
}`,iA=`uniform float rotation;
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
}`,rA=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:Ew,alphahash_pars_fragment:Aw,alphamap_fragment:Cw,alphamap_pars_fragment:Rw,alphatest_fragment:Pw,alphatest_pars_fragment:Iw,aomap_fragment:Nw,aomap_pars_fragment:Lw,batching_pars_vertex:Dw,batching_vertex:kw,begin_vertex:Fw,beginnormal_vertex:Uw,bsdfs:Ow,iridescence_fragment:zw,bumpmap_pars_fragment:Bw,clipping_planes_fragment:Hw,clipping_planes_pars_fragment:Vw,clipping_planes_pars_vertex:Gw,clipping_planes_vertex:Ww,color_fragment:Xw,color_pars_fragment:qw,color_pars_vertex:$w,color_vertex:Yw,common:jw,defaultnormal_vertex:Zw,displacementmap_pars_vertex:Jw,displacementmap_vertex:Kw,emissivemap_fragment:Qw,emissivemap_pars_fragment:eT,colorspace_fragment:tT,colorspace_pars_fragment:nT,envmap_fragment:iT,envmap_common_pars_fragment:rT,envmap_pars_fragment:sT,envmap_pars_vertex:oT,envmap_physical_pars_fragment:vT,envmap_vertex:aT,fog_vertex:lT,fog_pars_vertex:uT,fog_fragment:cT,fog_pars_fragment:fT,gradientmap_pars_fragment:dT,lightmap_pars_fragment:hT,lights_lambert_fragment:pT,lights_lambert_pars_fragment:mT,lights_pars_begin:gT,lights_toon_fragment:yT,lights_toon_pars_fragment:bT,lights_phong_fragment:_T,lights_phong_pars_fragment:ST,lights_physical_fragment:xT,lights_physical_pars_fragment:MT,lights_fragment_begin:wT,lights_fragment_maps:TT,lights_fragment_end:ET,lightprobes_pars_fragment:AT,logdepthbuf_fragment:CT,logdepthbuf_pars_fragment:RT,logdepthbuf_pars_vertex:PT,logdepthbuf_vertex:IT,map_fragment:NT,map_pars_fragment:LT,map_particle_fragment:DT,map_particle_pars_fragment:kT,metalnessmap_fragment:FT,metalnessmap_pars_fragment:UT,morphinstance_vertex:OT,morphcolor_vertex:zT,morphnormal_vertex:BT,morphtarget_pars_vertex:HT,morphtarget_vertex:VT,normal_fragment_begin:GT,normal_fragment_maps:WT,normal_pars_fragment:XT,normal_pars_vertex:qT,normal_vertex:$T,normalmap_pars_fragment:YT,clearcoat_normal_fragment_begin:jT,clearcoat_normal_fragment_maps:ZT,clearcoat_pars_fragment:JT,iridescence_pars_fragment:KT,opaque_fragment:QT,packing:eE,premultiplied_alpha_fragment:tE,project_vertex:nE,dithering_fragment:iE,dithering_pars_fragment:rE,roughnessmap_fragment:sE,roughnessmap_pars_fragment:oE,shadowmap_pars_fragment:aE,shadowmap_pars_vertex:lE,shadowmap_vertex:uE,shadowmask_pars_fragment:cE,skinbase_vertex:fE,skinning_pars_vertex:dE,skinning_vertex:hE,skinnormal_vertex:pE,specularmap_fragment:mE,specularmap_pars_fragment:gE,tonemapping_fragment:vE,tonemapping_pars_fragment:yE,transmission_fragment:bE,transmission_pars_fragment:_E,uv_pars_fragment:SE,uv_pars_vertex:xE,uv_vertex:ME,worldpos_vertex:wE,background_vert:TE,background_frag:EE,backgroundCube_vert:AE,backgroundCube_frag:CE,cube_vert:RE,cube_frag:PE,depth_vert:IE,depth_frag:NE,distance_vert:LE,distance_frag:DE,equirect_vert:kE,equirect_frag:FE,linedashed_vert:UE,linedashed_frag:OE,meshbasic_vert:zE,meshbasic_frag:BE,meshlambert_vert:HE,meshlambert_frag:VE,meshmatcap_vert:GE,meshmatcap_frag:WE,meshnormal_vert:XE,meshnormal_frag:qE,meshphong_vert:$E,meshphong_frag:YE,meshphysical_vert:jE,meshphysical_frag:ZE,meshtoon_vert:JE,meshtoon_frag:KE,points_vert:QE,points_frag:eA,shadow_vert:tA,shadow_frag:nA,sprite_vert:iA,sprite_frag:rA},Le={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},kr={basic:{uniforms:si([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:si([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Ke(0)},envMapIntensity:{value:1}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:si([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:si([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:si([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new Ke(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:si([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:si([Le.points,Le.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:si([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:si([Le.common,Le.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:si([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:si([Le.sprite,Le.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distance:{uniforms:si([Le.common,Le.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distance_vert,fragmentShader:ft.distance_frag},shadow:{uniforms:si([Le.lights,Le.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};kr.physical={uniforms:si([kr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new nt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};var bd={r:0,b:0,g:0},sA=new Ot,v_=new nt;v_.set(-1,0,0,0,1,0,0,0,1);function oA(r,e,t,s,o,l){let c=new Ke(0),d=o===!0?0:1,p,m,g=null,_=0,b=null;function y(A){let L=A.isScene===!0?A.background:null;if(L&&L.isTexture){let R=A.backgroundBlurriness>0;L=e.get(L,R)}return L}function x(A){let L=!1,R=y(A);R===null?S(c,d):R&&R.isColor&&(S(R,1),L=!0);let D=r.xr.getEnvironmentBlendMode();D==="additive"?t.buffers.color.setClear(0,0,0,1,l):D==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(r.autoClear||L)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function C(A,L){let R=y(L);R&&R.isCubeTexture?(m===void 0&&(m=new ni(new Nr(1,1,1),new ji({name:"BackgroundCubeMaterial",uniforms:Po(kr.backgroundCube.uniforms),vertexShader:kr.backgroundCube.vertexShader,fragmentShader:kr.backgroundCube.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(D,N,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),m.material.uniforms.envMap.value=R,m.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(sA.makeRotationFromEuler(L.backgroundRotation)).transpose(),R.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(v_),m.material.toneMapped=vt.getTransfer(R.colorSpace)!==Ft,(g!==R||_!==R.version||b!==r.toneMapping)&&(m.material.needsUpdate=!0,g=R,_=R.version,b=r.toneMapping),m.layers.enableAll(),A.unshift(m,m.geometry,m.material,0,0,null)):R&&R.isTexture&&(p===void 0&&(p=new ni(new _o(2,2),new ji({name:"BackgroundMaterial",uniforms:Po(kr.background.uniforms),vertexShader:kr.background.vertexShader,fragmentShader:kr.background.fragmentShader,side:Hs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(p)),p.material.uniforms.t2D.value=R,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.toneMapped=vt.getTransfer(R.colorSpace)!==Ft,R.matrixAutoUpdate===!0&&R.updateMatrix(),p.material.uniforms.uvTransform.value.copy(R.matrix),(g!==R||_!==R.version||b!==r.toneMapping)&&(p.material.needsUpdate=!0,g=R,_=R.version,b=r.toneMapping),p.layers.enableAll(),A.unshift(p,p.geometry,p.material,0,0,null))}function S(A,L){A.getRGB(bd,Dm(r)),t.buffers.color.setClear(bd.r,bd.g,bd.b,L,l)}function v(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return c},setClearColor:function(A,L=1){c.set(A),d=L,S(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(A){d=A,S(c,d)},render:x,addToRenderList:C,dispose:v}}function aA(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},o=b(null),l=o,c=!1;function d(B,W,Z,O,Q){let se=!1,ee=_(B,O,Z,W);l!==ee&&(l=ee,m(l.object)),se=y(B,O,Z,Q),se&&x(B,O,Z,Q),Q!==null&&e.update(Q,r.ELEMENT_ARRAY_BUFFER),(se||c)&&(c=!1,R(B,W,Z,O),Q!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function p(){return r.createVertexArray()}function m(B){return r.bindVertexArray(B)}function g(B){return r.deleteVertexArray(B)}function _(B,W,Z,O){let Q=O.wireframe===!0,se=s[W.id];se===void 0&&(se={},s[W.id]=se);let ee=B.isInstancedMesh===!0?B.id:0,me=se[ee];me===void 0&&(me={},se[ee]=me);let ne=me[Z.id];ne===void 0&&(ne={},me[Z.id]=ne);let ce=ne[Q];return ce===void 0&&(ce=b(p()),ne[Q]=ce),ce}function b(B){let W=[],Z=[],O=[];for(let Q=0;Q<t;Q++)W[Q]=0,Z[Q]=0,O[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:Z,attributeDivisors:O,object:B,attributes:{},index:null}}function y(B,W,Z,O){let Q=l.attributes,se=W.attributes,ee=0,me=Z.getAttributes();for(let ne in me)if(me[ne].location>=0){let he=Q[ne],Be=se[ne];if(Be===void 0&&(ne==="instanceMatrix"&&B.instanceMatrix&&(Be=B.instanceMatrix),ne==="instanceColor"&&B.instanceColor&&(Be=B.instanceColor)),he===void 0||he.attribute!==Be||Be&&he.data!==Be.data)return!0;ee++}return l.attributesNum!==ee||l.index!==O}function x(B,W,Z,O){let Q={},se=W.attributes,ee=0,me=Z.getAttributes();for(let ne in me)if(me[ne].location>=0){let he=se[ne];he===void 0&&(ne==="instanceMatrix"&&B.instanceMatrix&&(he=B.instanceMatrix),ne==="instanceColor"&&B.instanceColor&&(he=B.instanceColor));let Be={};Be.attribute=he,he&&he.data&&(Be.data=he.data),Q[ne]=Be,ee++}l.attributes=Q,l.attributesNum=ee,l.index=O}function C(){let B=l.newAttributes;for(let W=0,Z=B.length;W<Z;W++)B[W]=0}function S(B){v(B,0)}function v(B,W){let Z=l.newAttributes,O=l.enabledAttributes,Q=l.attributeDivisors;Z[B]=1,O[B]===0&&(r.enableVertexAttribArray(B),O[B]=1),Q[B]!==W&&(r.vertexAttribDivisor(B,W),Q[B]=W)}function A(){let B=l.newAttributes,W=l.enabledAttributes;for(let Z=0,O=W.length;Z<O;Z++)W[Z]!==B[Z]&&(r.disableVertexAttribArray(Z),W[Z]=0)}function L(B,W,Z,O,Q,se,ee){ee===!0?r.vertexAttribIPointer(B,W,Z,Q,se):r.vertexAttribPointer(B,W,Z,O,Q,se)}function R(B,W,Z,O){C();let Q=O.attributes,se=Z.getAttributes(),ee=W.defaultAttributeValues;for(let me in se){let ne=se[me];if(ne.location>=0){let ce=Q[me];if(ce===void 0&&(me==="instanceMatrix"&&B.instanceMatrix&&(ce=B.instanceMatrix),me==="instanceColor"&&B.instanceColor&&(ce=B.instanceColor)),ce!==void 0){let he=ce.normalized,Be=ce.itemSize,Ve=e.get(ce);if(Ve===void 0)continue;let re=Ve.buffer,Pe=Ve.type,ke=Ve.bytesPerElement,We=Pe===r.INT||Pe===r.UNSIGNED_INT||ce.gpuType===kf;if(ce.isInterleavedBufferAttribute){let Ne=ce.data,Qe=Ne.isInterleavedBuffer===!0?Ne.stride:Ne.itemSize,Ht=ce.offset;if(Ne.isInstancedInterleavedBuffer||Ne.isInstancedBufferAttribute){for(let qe=0;qe<ne.locationSize;qe++)v(ne.location+qe,Ne.meshPerAttribute);B.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Ne.meshPerAttribute*Ne.count)}else for(let qe=0;qe<ne.locationSize;qe++)S(ne.location+qe);r.bindBuffer(r.ARRAY_BUFFER,re);for(let qe=0;qe<ne.locationSize;qe++)L(ne.location+qe,Be/ne.locationSize,Pe,he,Qe*ke,(Ht+Be/ne.locationSize*qe)*ke,We)}else{if(ce.isInstancedBufferAttribute){for(let Ne=0;Ne<ne.locationSize;Ne++)v(ne.location+Ne,ce.meshPerAttribute);B.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Ne=0;Ne<ne.locationSize;Ne++)S(ne.location+Ne);r.bindBuffer(r.ARRAY_BUFFER,re);for(let Ne=0;Ne<ne.locationSize;Ne++)L(ne.location+Ne,Be/ne.locationSize,Pe,he,Be*ke,Be/ne.locationSize*Ne*ke,We)}}else if(ee!==void 0){let he=ee[me];if(he!==void 0)switch(he.length){case 2:r.vertexAttrib2fv(ne.location,he);break;case 3:r.vertexAttrib3fv(ne.location,he);break;case 4:r.vertexAttrib4fv(ne.location,he);break;default:r.vertexAttrib1fv(ne.location,he)}}}}A()}function D(){V();for(let B in s){let W=s[B];for(let Z in W){let O=W[Z];for(let Q in O){let se=O[Q];for(let ee in se)g(se[ee].object),delete se[ee];delete O[Q]}}delete s[B]}}function N(B){if(s[B.id]===void 0)return;let W=s[B.id];for(let Z in W){let O=W[Z];for(let Q in O){let se=O[Q];for(let ee in se)g(se[ee].object),delete se[ee];delete O[Q]}}delete s[B.id]}function M(B){for(let W in s){let Z=s[W];for(let O in Z){let Q=Z[O];if(Q[B.id]===void 0)continue;let se=Q[B.id];for(let ee in se)g(se[ee].object),delete se[ee];delete Q[B.id]}}}function P(B){for(let W in s){let Z=s[W],O=B.isInstancedMesh===!0?B.id:0,Q=Z[O];if(Q!==void 0){for(let se in Q){let ee=Q[se];for(let me in ee)g(ee[me].object),delete ee[me];delete Q[se]}delete Z[O],Object.keys(Z).length===0&&delete s[W]}}}function V(){F(),c=!0,l!==o&&(l=o,m(l.object))}function F(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:V,resetDefaultState:F,dispose:D,releaseStatesOfGeometry:N,releaseStatesOfObject:P,releaseStatesOfProgram:M,initAttributes:C,enableAttribute:S,disableUnusedAttributes:A}}function lA(r,e,t){let s;function o(p){s=p}function l(p,m){r.drawArrays(s,p,m),t.update(m,s,1)}function c(p,m,g){g!==0&&(r.drawArraysInstanced(s,p,m,g),t.update(m,s,g))}function d(p,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,m,0,g);let b=0;for(let y=0;y<g;y++)b+=m[y];t.update(b,s,1)}this.setMode=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function uA(r,e,t,s){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){let M=e.get("EXT_texture_filter_anisotropic");o=r.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(M){return!(M!==Fi&&s.convert(M)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(M){let P=M===hr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==ri&&M!==Zi&&!P&&s.convert(M)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function p(M){if(M==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp",g=p(m);g!==m&&(Ye("WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);let _=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),b=t.logarithmicDepthBuffer===!0&&_===!1;t.reversedDepthBuffer===!0&&_===!1&&Ye("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&_===!0&&Ye("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),A=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),R=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),D=r.getParameter(r.MAX_SAMPLES),N=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:c,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:b,reversedDepthBuffer:_,maxTextures:y,maxVertexTextures:x,maxTextureSize:C,maxCubemapSize:S,maxAttributes:v,maxVertexUniforms:A,maxVaryings:L,maxFragmentUniforms:R,maxSamples:D,samples:N}}function cA(r){let e=this,t=null,s=0,o=!1,l=!1,c=new Li,d=new nt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,b){let y=_.length!==0||b||s!==0||o;return o=b,s=_.length,y},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,b){t=g(_,b,0)},this.setState=function(_,b,y){let x=_.clippingPlanes,C=_.clipIntersection,S=_.clipShadows,v=r.get(_);if(!o||x===null||x.length===0||l&&!S)l?g(null):m();else{let A=l?0:s,L=A*4,R=v.clippingState||null;p.value=R,R=g(x,b,L,y);for(let D=0;D!==L;++D)R[D]=t[D];v.clippingState=R,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=A}};function m(){p.value!==t&&(p.value=t,p.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function g(_,b,y,x){let C=_!==null?_.length:0,S=null;if(C!==0){if(S=p.value,x!==!0||S===null){let v=y+C*4,A=b.matrixWorldInverse;d.getNormalMatrix(A),(S===null||S.length<v)&&(S=new Float32Array(v));for(let L=0,R=y;L!==C;++L,R+=4)c.copy(_[L]).applyMatrix4(A,d),c.normal.toArray(S,R),S[R+3]=c.constant}p.value=S,p.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,S}}var uu=class extends Di{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let s={width:e,height:e,depth:1},o=[s,s,s,s,s,s];this.texture=new Hl(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Nr(5,5,5),l=new ji({name:"CubemapFromEquirect",uniforms:Po(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:hi,blending:Eo});l.uniforms.tEquirect.value=t;let c=new ni(o,l),d=t.minFilter;return t.minFilter===os&&(t.minFilter=fi),new Ua(1,10,this).update(e,c),t.minFilter=d,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,s=!0,o=!0){let l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,s,o);e.setRenderTarget(l)}},jb=256,fA=3,dA=20,y_=256,b_=16,hA=3,pA=new X,mA=new Ke,Sd=class r{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ua(1,10,null),this._boxMesh=new ni(new Nr(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,s=.1,o=100,l={}){let{size:c=256,position:d=pA}=l,p=this._renderer;this._setSize(c);let m=this._allocateTarget(),g=this._getSourceTarget(!0);t>0&&(g.texture.mipmapsAutoUpdate=!1);let _=p.autoClear,b=p.autoClearColor,y=p.autoClearDepth,x=p.autoClearStencil,C=e.background;p.autoClear=!0,p.autoClearColor=!0,p.autoClearDepth=!0,p.autoClearStencil=!0,C===null&&(e.background=p.getClearColor(mA));let S=new Ua(s,o,g);return S.position.copy(d),S.update(p,e),p.autoClear=_,p.autoClearColor=b,p.autoClearDepth=y,p.autoClearStencil=x,e.background=C,t>0&&(g.texture.mipmapsAutoUpdate=!0,this._blur(m,t)),this._applyPMREM(m),m}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kb(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jb(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(jb,Wb(e))}_fromTexture(e,t){e.mapping===Co||e.mapping===Ba?this._setSize(e.image.length===0?jb:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let s=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(s),s}_allocateTarget(){let e=this._cubeSize,t=Zb(e,!1,!1),s=Math.log2(e)-fA;for(let o=0;o<=s;o++)t.texture.mipmaps.push({width:e>>o,height:e>>o});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,s=this._sourceTarget;return(s===null||s.width!==t||e&&s.depthBuffer===!1)&&(s!==null&&s.dispose(),this._sourceTarget=Zb(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,s){let o=this._boxMesh,l=this._cubeCamera;o.material=s,l.renderTarget=e,l.activeMipmapLevel=t;let c=e.width>>t;e.viewport.set(0,0,c,c),l.update(this._renderer,o),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Co||e.mapping===Ba?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kb()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Jb()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=gA(),this._integrationMaterial=vA());let t=this._cubeSize,s=e.texture.mipmaps.length-1,o=this._ggxMaterial.uniforms;o.envMap.value=this._sourceTarget.texture;let l=this._integrationMaterial.uniforms;l.envMap.value=this._sourceTarget.texture,l.sourceLod.value=Math.log2(t/b_);for(let c=0;c<=s;c++){let d=r.lodToRoughness(c,s);if(c>s-hA)l.roughness.value=d,this._renderCube(e,c,this._integrationMaterial);else{let p=d>0?Math.log2(t)+.5*Math.log2(6/(y_*Math.pow(d,4)))+.5:0;o.roughness.value=d,o.lodBias.value=p,this._renderCube(e,c,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=yA());let s=this._blurMaterial,o=s.uniforms,l=this._sourceTarget;o.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,o.envMap.value=l.texture,this._renderCube(e,0,s),o.envMap.value=e.texture,this._renderCube(l,0,s)}};function Zb(r,e,t){return new uu(r,{minFilter:os,generateMipmaps:e,type:hr,colorSpace:vo,depthBuffer:t})}function cu(r,e,t){return new ji({name:r,uniforms:e,vertexShader:ft.cube_vert,fragmentShader:t,side:hi,blending:Eo,depthTest:!1,depthWrite:!1})}function gA(){return cu("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${y_}u

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
	`)}function vA(){return cu("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:b_}},`

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
	`)}function yA(){return cu("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${dA}
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
	`)}function Jb(){return cu("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Kb(){return cu("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function bA(r){let e=new WeakMap,t=new WeakMap,s=null;function o(b,y=!1){return b==null?null:y?c(b):l(b)}function l(b){if(b&&b.isTexture){let y=b.mapping;if(y===Nf||y===Lf)if(e.has(b)){let x=e.get(b).texture;return d(x,b.mapping)}else{let x=b.image;if(x&&x.height>0){let C=new uu(x.height);return C.fromEquirectangularTexture(r,b),e.set(b,C),b.addEventListener("dispose",m),d(C.texture,b.mapping)}else return null}}return b}function c(b){if(b&&b.isTexture&&b.isPMREMTexture!==!0){let y=b.mapping,x=y===Nf||y===Lf,C=y===Co||y===Ba;if(x||C){let S=t.get(b),v=S!==void 0?S.texture.pmremVersion:0;if(b.isRenderTargetTexture&&b.pmremVersion!==v)return s===null&&(s=new Sd(r)),S=x?s.fromEquirectangular(b,S):s.fromCubemap(b,S),S.texture.pmremVersion=b.pmremVersion,t.set(b,S),S.texture;if(S!==void 0)return S.texture;{let A=b.image;return x&&A&&A.height>0||C&&A&&p(A)?(s===null&&(s=new Sd(r)),S=x?s.fromEquirectangular(b):s.fromCubemap(b),S.texture.pmremVersion=b.pmremVersion,t.set(b,S),b.addEventListener("dispose",g),S.texture):null}}}return b}function d(b,y){return y===Nf?b.mapping=Co:y===Lf&&(b.mapping=Ba),b}function p(b){let y=0,x=6;for(let C=0;C<x;C++)b[C]!==void 0&&y++;return y===x}function m(b){let y=b.target;y.removeEventListener("dispose",m);let x=e.get(y);x!==void 0&&(e.delete(y),x.dispose())}function g(b){let y=b.target;y.removeEventListener("dispose",g);let x=t.get(y);x!==void 0&&(t.delete(y),x.dispose())}function _(){e=new WeakMap,t=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:o,dispose:_}}function _A(r){let e={};function t(s){if(e[s]!==void 0)return e[s];let o=r.getExtension(s);return e[s]=o,o}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){let o=t(s);return o===null&&Pl("WebGLRenderer: "+s+" extension not supported."),o}}}function SA(r,e,t,s){let o={},l=new WeakMap,c=new FinalizationRegistry(x=>delete o[x]);function d(x){p(x.target)}function p(x){x.index!==null&&e.remove(x.index);for(let S in x.attributes)e.remove(x.attributes[S]);x.removeEventListener("dispose",d),delete o[x.id],c.unregister(x);let C=l.get(x);C&&(e.remove(C),l.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function m(x,C){return o[C.id]!==void 0||(C.addEventListener("dispose",d),o[C.id]=new WeakRef(C),c.register(C,C.id,C),t.memory.geometries++),C}function g(x){let C=x.attributes;for(let S in C)e.update(C[S],r.ARRAY_BUFFER)}function _(x){let C=x.index,S=x.attributes.position,v=0;if(S===void 0)return;let A=C!==null?C.array.length:S.array.length/3-1,L=S.count>=65535?Ul:Fl,R=new L(Math.ceil(A/3)*6,1),D=R.array;if(C!==null){let M=C.array;v=C.version;for(let P=0,V=0;P<A;P+=3){let F=M[P+0],B=M[P+1],W=M[P+2];D[V++]=F,D[V++]=B,D[V++]=B,D[V++]=W,D[V++]=W,D[V++]=F}}else{v=S.version;for(let M=0,P=0;M<A;M+=3){let V=M+0,F=M+1,B=M+2;D[P++]=V,D[P++]=F,D[P++]=F,D[P++]=B,D[P++]=B,D[P++]=V}}R.version=v;let N=l.get(x);N&&e.remove(N),l.set(x,R)}function b(x){let C=l.get(x);if(C){let S=x.index;S!==null&&C.version<S.version&&_(x)}else _(x);return l.get(x)}function y(){for(let x in o){let C=o[x].deref();C!==void 0&&p(C)}}return{get:m,update:g,getWireframeAttribute:b,dispose:y}}function xA(r,e,t){let s;function o(_){s=_}let l,c;function d(_){l=_.type,c=_.bytesPerElement}function p(_,b){r.drawElements(s,b,l,_*c),t.update(b,s,1)}function m(_,b,y){y!==0&&(r.drawElementsInstanced(s,b,l,_*c,y),t.update(b,s,y))}function g(_,b,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,b,0,l,_,0,y);let C=0;for(let S=0;S<y;S++)C+=b[S];t.update(C,s,1)}this.setMode=o,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=g}function MA(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,c,d){switch(t.calls++,c){case r.TRIANGLES:t.triangles+=d*(l/3);break;case r.LINES:t.lines+=d*(l/2);break;case r.LINE_STRIP:t.lines+=d*(l-1);break;case r.LINE_LOOP:t.lines+=d*l;break;case r.POINTS:t.points+=d*l;break;default:tt("WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:s}}function wA(r,e,t){let s=new WeakMap,o=new Kt;function l(c,d,p){let m=c.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0,b=s.get(d);if(b===void 0||b.count!==_){let V=function(){M.dispose(),s.delete(d),d.removeEventListener("dispose",V)};b!==void 0&&b.texture.dispose();let y=d.morphAttributes.position!==void 0,x=d.morphAttributes.normal!==void 0,C=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],v=d.morphAttributes.normal||[],A=d.morphAttributes.color||[],L=0;y===!0&&(L=1),x===!0&&(L=2),C===!0&&(L=3);let R=d.attributes.position.count*L,D=1;R>e.maxTextureSize&&(D=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);let N=new Float32Array(R*D*4*_),M=new Ll(N,R,D,_);M.type=Zi,M.needsUpdate=!0;let P=L*4;for(let F=0;F<_;F++){let B=S[F],W=v[F],Z=A[F],O=R*D*4*F;for(let Q=0;Q<B.count;Q++){let se=Q*P;y===!0&&(o.fromBufferAttribute(B,Q),N[O+se+0]=o.x,N[O+se+1]=o.y,N[O+se+2]=o.z,N[O+se+3]=0),x===!0&&(o.fromBufferAttribute(W,Q),N[O+se+4]=o.x,N[O+se+5]=o.y,N[O+se+6]=o.z,N[O+se+7]=0),C===!0&&(o.fromBufferAttribute(Z,Q),N[O+se+8]=o.x,N[O+se+9]=o.y,N[O+se+10]=o.z,N[O+se+11]=Z.itemSize===4?o.w:1)}}b={count:_,texture:M,size:new ct(R,D)},s.set(d,b),d.addEventListener("dispose",V)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)p.getUniforms().setValue(r,"morphTexture",c.morphTexture,t);else{let y=0;for(let C=0;C<m.length;C++)y+=m[C];let x=d.morphTargetsRelative?1:1-y;p.getUniforms().setValue(r,"morphTargetBaseInfluence",x),p.getUniforms().setValue(r,"morphTargetInfluences",m)}p.getUniforms().setValue(r,"morphTargetsTexture",b.texture,t),p.getUniforms().setValue(r,"morphTargetsTextureSize",b.size)}return{update:l}}function TA(r,e,t,s,o){let l=new WeakMap;function c(m){let g=o.render.frame,_=m.geometry,b=e.get(m,_);if(l.get(b)!==g&&(e.update(b),l.set(b,g)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),l.get(m)!==g&&(t.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&t.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,g))),m.isSkinnedMesh){let y=m.skeleton;l.get(y)!==g&&(y.update(),l.set(y,g))}return b}function d(){l=new WeakMap}function p(m){let g=m.target;g.removeEventListener("dispose",p),s.releaseStatesOfObject(g),t.remove(g.instanceMatrix),g.instanceColor!==null&&t.remove(g.instanceColor)}return{update:c,dispose:d}}var EA={[mm]:"LINEAR_TONE_MAPPING",[gm]:"REINHARD_TONE_MAPPING",[vm]:"CINEON_TONE_MAPPING",[Kl]:"ACES_FILMIC_TONE_MAPPING",[bm]:"AGX_TONE_MAPPING",[_m]:"NEUTRAL_TONE_MAPPING",[ym]:"CUSTOM_TONE_MAPPING"};function AA(r,e,t,s,o,l){let c=new Di(e,t,{type:r,depthBuffer:o,stencilBuffer:l,samples:s?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),d=null,p=null,m=null,g=new Yi;g.setAttribute("position",new yn([-1,3,0,-1,-1,0,3,-1,0],3)),g.setAttribute("uv",new yn([0,2,0,0,2,0],2));let _=new gf({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),b=new ni(g,_),y=new So(-1,1,1,-1,0,1),x=null,C=null,S=!1,v,A=null,L=[],R=!1;this.setSize=function(D,N){c.setSize(D,N),d!==null&&d.setSize(D,N),p!==null&&p.setSize(D,N);for(let M=0;M<L.length;M++){let P=L[M];P.setSize&&P.setSize(D,N)}},this.setEffects=function(D){L=D,R=L.length>0&&L[0].isRenderPass===!0;let N=c.width,M=c.height;L.length>0&&d===null&&(d=new Di(N,M,{type:hr,depthBuffer:!1,stencilBuffer:!1}),p=new Di(N,M,{type:hr,depthBuffer:!1,stencilBuffer:!1}));let P=o===!0&&L.some(V=>V.needsDepthTexture===!0);P!==(c.depthTexture!==null)&&(P===!0&&m===null&&(m=new ss(N,M),l===!0&&(m.format=as,m.type=Ro)),c.dispose(),c.depthTexture=P?m:null,c.resolveDepthBuffer=P,c.storeMultisampledDepthBuffer=P);for(let V=0;V<L.length;V++){let F=L[V];F.setSize&&F.setSize(N,M),P&&F.needsDepthTexture===!0&&F.setDepthTexture&&F.setDepthTexture(m)}},this.begin=function(D,N){if(S||D.toneMapping===ii&&L.length===0)return!1;if(A=N,N!==null){let M=N.width,P=N.height;(c.width!==M||c.height!==P)&&this.setSize(M,P)}return R===!1&&D.setRenderTarget(c),v=D.toneMapping,D.toneMapping=ii,!0},this.hasRenderPass=function(){return R},this.end=function(D,N){D.toneMapping=v,S=!0;let M=c,P=d;for(let V=0;V<L.length;V++){let F=L[V];F.enabled!==!1&&(F.render(D,P,M,N),F.needsSwap!==!1&&(M=P,P=P===d?p:d))}if(x!==D.outputColorSpace||C!==D.toneMapping){x=D.outputColorSpace,C=D.toneMapping,_.defines={},vt.getTransfer(x)===Ft&&(_.defines.SRGB_TRANSFER="");let V=EA[C];V&&(_.defines[V]=""),_.needsUpdate=!0}_.uniforms.tDiffuse.value=M.texture,D.setRenderTarget(A),D.render(b,y),A=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){c.dispose(),d!==null&&d.dispose(),p!==null&&p.dispose(),g.dispose(),_.dispose()}}var __=new ti,S_=new ss(1,1),x_=new Gl(1),M_=new Ll,w_=new ff,T_=new Hl,Qb=[],e_=[],t_=new Float32Array(16),n_=new Float32Array(9),i_=new Float32Array(4);function Ga(r,e,t){let s=r[0];if(s<=0||s>0)return r;let o=e*t,l=Qb[o];if(l===void 0&&(l=new Float32Array(o),Qb[o]=l),e!==0){s.toArray(l,0);for(let c=1,d=0;c!==e;++c)d+=t,r[c].toArray(l,d)}return l}function Rn(r,e){if(r.length!==e.length)return!1;for(let t=0,s=r.length;t<s;t++)if(r[t]!==e[t])return!1;return!0}function Pn(r,e){for(let t=0,s=e.length;t<s;t++)r[t]=e[t]}function Md(r,e){let t=e_[e];t===void 0&&(t=new Int32Array(e),e_[e]=t);for(let s=0;s!==e;++s)t[s]=r.allocateTextureUnit();return t}function CA(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function RA(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rn(t,e))return;r.uniform2fv(this.addr,e),Pn(t,e)}}function PA(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rn(t,e))return;r.uniform3fv(this.addr,e),Pn(t,e)}}function IA(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rn(t,e))return;r.uniform4fv(this.addr,e),Pn(t,e)}}function NA(r,e){let t=this.cache,s=e.elements;if(s===void 0){if(Rn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Pn(t,e)}else{if(Rn(t,s))return;i_.set(s),r.uniformMatrix2fv(this.addr,!1,i_),Pn(t,s)}}function LA(r,e){let t=this.cache,s=e.elements;if(s===void 0){if(Rn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Pn(t,e)}else{if(Rn(t,s))return;n_.set(s),r.uniformMatrix3fv(this.addr,!1,n_),Pn(t,s)}}function DA(r,e){let t=this.cache,s=e.elements;if(s===void 0){if(Rn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Pn(t,e)}else{if(Rn(t,s))return;t_.set(s),r.uniformMatrix4fv(this.addr,!1,t_),Pn(t,s)}}function kA(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function FA(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rn(t,e))return;r.uniform2iv(this.addr,e),Pn(t,e)}}function UA(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rn(t,e))return;r.uniform3iv(this.addr,e),Pn(t,e)}}function OA(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rn(t,e))return;r.uniform4iv(this.addr,e),Pn(t,e)}}function zA(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function BA(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rn(t,e))return;r.uniform2uiv(this.addr,e),Pn(t,e)}}function HA(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rn(t,e))return;r.uniform3uiv(this.addr,e),Pn(t,e)}}function VA(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rn(t,e))return;r.uniform4uiv(this.addr,e),Pn(t,e)}}function wd(r){return r.version===0&&(r.compareFunction=Pm,r.needsUpdate=!0),r}function GA(r,e,t){let s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o);let l;this.type===r.SAMPLER_2D_SHADOW?l=wd(S_):l=__,t.setTexture2D(e||l,o)}function WA(r,e,t){let s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture3D(e||w_,o)}function XA(r,e,t){let s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o);let l;this.type===r.SAMPLER_CUBE_SHADOW?l=wd(x_):l=T_,t.setTextureCube(e||l,o)}function qA(r,e,t){let s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture2DArray(e||M_,o)}function $A(r){switch(r){case 5126:return CA;case 35664:return RA;case 35665:return PA;case 35666:return IA;case 35674:return NA;case 35675:return LA;case 35676:return DA;case 5124:case 35670:return kA;case 35667:case 35671:return FA;case 35668:case 35672:return UA;case 35669:case 35673:return OA;case 5125:return zA;case 36294:return BA;case 36295:return HA;case 36296:return VA;case 35678:case 36198:case 36298:case 36306:case 35682:return GA;case 35679:case 36299:case 36307:return WA;case 35680:case 36300:case 36308:case 36293:return XA;case 36289:case 36303:case 36311:case 36292:return qA}}function YA(r,e){r.uniform1fv(this.addr,e)}function jA(r,e){let t=Ga(e,this.size,2);r.uniform2fv(this.addr,t)}function ZA(r,e){let t=Ga(e,this.size,3);r.uniform3fv(this.addr,t)}function JA(r,e){let t=Ga(e,this.size,4);r.uniform4fv(this.addr,t)}function KA(r,e){let t=Ga(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function QA(r,e){let t=Ga(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function eC(r,e){let t=Ga(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function tC(r,e){r.uniform1iv(this.addr,e)}function nC(r,e){r.uniform2iv(this.addr,e)}function iC(r,e){r.uniform3iv(this.addr,e)}function rC(r,e){r.uniform4iv(this.addr,e)}function sC(r,e){r.uniform1uiv(this.addr,e)}function oC(r,e){r.uniform2uiv(this.addr,e)}function aC(r,e){r.uniform3uiv(this.addr,e)}function lC(r,e){r.uniform4uiv(this.addr,e)}function uC(r,e,t){let s=this.cache,o=e.length,l=Md(t,o);Rn(s,l)||(r.uniform1iv(this.addr,l),Pn(s,l));let c;this.type===r.SAMPLER_2D_SHADOW?c=wd(S_):c=__;for(let d=0;d!==o;++d)t.setTexture2D(e[d]||c,l[d])}function cC(r,e,t){let s=this.cache,o=e.length,l=Md(t,o);Rn(s,l)||(r.uniform1iv(this.addr,l),Pn(s,l));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||w_,l[c])}function fC(r,e,t){let s=this.cache,o=e.length,l=Md(t,o);Rn(s,l)||(r.uniform1iv(this.addr,l),Pn(s,l));let c;this.type===r.SAMPLER_CUBE_SHADOW?c=wd(x_):c=T_;for(let d=0;d!==o;++d)t.setTextureCube(e[d]||c,l[d])}function dC(r,e,t){let s=this.cache,o=e.length,l=Md(t,o);Rn(s,l)||(r.uniform1iv(this.addr,l),Pn(s,l));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||M_,l[c])}function hC(r){switch(r){case 5126:return YA;case 35664:return jA;case 35665:return ZA;case 35666:return JA;case 35674:return KA;case 35675:return QA;case 35676:return eC;case 5124:case 35670:return tC;case 35667:case 35671:return nC;case 35668:case 35672:return iC;case 35669:case 35673:return rC;case 5125:return sC;case 36294:return oC;case 36295:return aC;case 36296:return lC;case 35678:case 36198:case 36298:case 36306:case 35682:return uC;case 35679:case 36299:case 36307:return cC;case 35680:case 36300:case 36308:case 36293:return fC;case 36289:case 36303:case 36311:case 36292:return dC}}var Xm=class{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=$A(t.type)}},qm=class{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=hC(t.type)}},$m=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){let o=this.seq;for(let l=0,c=o.length;l!==c;++l){let d=o[l];d.setValue(e,t[d.id],s)}}},Gm=/(\w+)(\])?(\[|\.)?/g;function r_(r,e){r.seq.push(e),r.map[e.id]=e}function pC(r,e,t){let s=r.name,o=s.length;for(Gm.lastIndex=0;;){let l=Gm.exec(s),c=Gm.lastIndex,d=l[1],p=l[2]==="]",m=l[3];if(p&&(d=d|0),m===void 0||m==="["&&c+2===o){r_(t,m===void 0?new Xm(d,r,e):new qm(d,r,e));break}else{let _=t.map[d];_===void 0&&(_=new $m(d),r_(t,_)),t=_}}}var Va=class{constructor(e,t){this.seq=[],this.map={};let s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<s;++c){let d=e.getActiveUniform(t,c),p=e.getUniformLocation(t,d.name);pC(d,p,this)}let o=[],l=[];for(let c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(c):l.push(c);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,s,o){let l=this.map[t];l!==void 0&&l.setValue(e,s,o)}setOptional(e,t,s){let o=t[s];o!==void 0&&this.setValue(e,s,o)}static upload(e,t,s,o){for(let l=0,c=t.length;l!==c;++l){let d=t[l],p=s[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,o)}}static seqWithValue(e,t){let s=[];for(let o=0,l=e.length;o!==l;++o){let c=e[o];c.id in t&&s.push(c)}return s}};function s_(r,e,t){let s=r.createShader(e);return r.shaderSource(s,t),r.compileShader(s),s}var mC=37297,gC=0;function vC(r,e){let t=r.split(`
`),s=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=o;c<l;c++){let d=c+1;s.push(`${d===e?">":" "} ${d}: ${t[c]}`)}return s.join(`
`)}var o_=new nt;function yC(r){vt._getMatrix(o_,vt.workingColorSpace,r);let e=`mat3( ${o_.elements.map(t=>t.toFixed(4))} )`;switch(vt.getTransfer(r)){case Nl:return[e,"LinearTransferOETF"];case Ft:return[e,"sRGBTransferOETF"];default:return Ye("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function a_(r,e,t){let s=r.getShaderParameter(e,r.COMPILE_STATUS),l=(r.getShaderInfoLog(e)||"").trim();if(s&&l==="")return"";let c=/ERROR: 0:(\d+)/.exec(l);if(c){let d=parseInt(c[1]);return t.toUpperCase()+`

`+l+`

`+vC(r.getShaderSource(e),d)}else return l}function bC(r,e){let t=yC(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var _C={[mm]:"Linear",[gm]:"Reinhard",[vm]:"Cineon",[Kl]:"ACESFilmic",[bm]:"AgX",[_m]:"Neutral",[ym]:"Custom"};function SC(r,e){let t=_C[e];return t===void 0?(Ye("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var _d=new X;function xC(){vt.getLuminanceCoefficients(_d);let r=_d.x.toFixed(4),e=_d.y.toFixed(4),t=_d.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function MC(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lu).join(`
`)}function wC(r){let e=[];for(let t in r){let s=r[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function TC(r,e){let t={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){let l=r.getActiveAttrib(e,o),c=l.name,d=1;l.type===r.FLOAT_MAT2&&(d=2),l.type===r.FLOAT_MAT3&&(d=3),l.type===r.FLOAT_MAT4&&(d=4),t[c]={type:l.type,location:r.getAttribLocation(e,c),locationSize:d}}return t}function lu(r){return r!==""}function l_(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function u_(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var EC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ym(r){return r.replace(EC,AC)}function AC(r,e){let t=ft[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Ym(t)}var CC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function c_(r){return r.replace(CC,RC)}function RC(r,e,t,s){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function f_(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}var PC={[To]:"SHADOWMAP_TYPE_PCF",[Bs]:"SHADOWMAP_TYPE_VSM"};function IC(r){return PC[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var NC={[Ba]:"ENVMAP_MODE_REFRACTION"};function LC(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":NC[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var DC={[pm]:"ENVMAP_BLENDING_MULTIPLY",[Cb]:"ENVMAP_BLENDING_MIX",[Rb]:"ENVMAP_BLENDING_ADD"};function kC(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":DC[r.combine]||"ENVMAP_BLENDING_NONE"}function FC(r,e,t,s){let o=r.getContext(),l=t.defines,c=t.vertexShader,d=t.fragmentShader,p=IC(t),m=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",g=LC(t),_=kC(t),b=MC(t),y=wC(l),x=o.createProgram(),C,S,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(C=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(lu).join(`
`),C.length>0&&(C+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(lu).join(`
`),S.length>0&&(S+=`
`)):(C=[f_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lu).join(`
`),S=[f_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",t.envMap?"#define "+_:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ii?"#define TONE_MAPPING":"",t.toneMapping!==ii?ft.tonemapping_pars_fragment:"",t.toneMapping!==ii?SC("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,bC("linearToOutputTexel",t.outputColorSpace),xC(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(lu).join(`
`)),c=Ym(c),c=l_(c,t),c=u_(c,t),d=Ym(d),d=l_(d,t),d=u_(d,t),c=c_(c),d=c_(d),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,C=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+C,S=["#define varying in",t.glslVersion===Im?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Im?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);let A=v+C+c,L=v+S+d,R=s_(o,o.VERTEX_SHADER,A),D=s_(o,o.FRAGMENT_SHADER,L);o.attachShader(x,R),o.attachShader(x,D),t.index0AttributeName!==void 0?o.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(x,0,"position"),o.linkProgram(x);function N(F){if(r.debug.checkShaderErrors){let B=o.getProgramInfoLog(x)||"",W=o.getShaderInfoLog(R)||"",Z=o.getShaderInfoLog(D)||"",O=B.trim(),Q=W.trim(),se=Z.trim(),ee=!0,me=!0;if(o.getProgramParameter(x,o.LINK_STATUS)===!1)if(ee=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,x,R,D);else{let ne=a_(o,R,"vertex"),ce=a_(o,D,"fragment");tt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(x,o.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+O+`
`+ne+`
`+ce)}else O!==""?Ye("WebGLProgram: Program Info Log:",O):(Q===""||se==="")&&(me=!1);me&&(F.diagnostics={runnable:ee,programLog:O,vertexShader:{log:Q,prefix:C},fragmentShader:{log:se,prefix:S}})}o.deleteShader(R),o.deleteShader(D),M=new Va(o,x),P=TC(o,x)}let M;this.getUniforms=function(){return M===void 0&&N(this),M};let P;this.getAttributes=function(){return P===void 0&&N(this),P};let V=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=o.getProgramParameter(x,mC)),V},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=gC++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=D,this}var UC=0,jm=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,s){let o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){let t=this.shaderCache,s=t.get(e);return s===void 0&&(s=new Zm(e),t.set(e,s)),s}},Zm=class{constructor(e){this.id=UC++,this.code=e,this.usedTimes=0}};function OC(r){return r===Vs||r===ru||r===su}function zC(r,e,t,s,o,l){let c=new ns,d=new jm,p=new Set,m=[],g=new Map,_=s.logarithmicDepthBuffer,b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(M){return p.add(M),M===0?"uv":`uv${M}`}function x(M,P,V,F,B,W){let Z=F.fog,O=B.geometry,Q=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?F.environment:null,se=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,ee=e.get(M.envMap||Q,se),me=b[M.type],ne=s.precision;M.precision!==null&&(ne=s.getMaxPrecision(M.precision),ne!==M.precision&&Ye("WebGLProgram.getParameters:",M.precision,"not supported, using",ne,"instead."));let ce=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,he=ce!==void 0?ce.length:0,Be=0;O.morphAttributes.position!==void 0&&(Be=1),O.morphAttributes.normal!==void 0&&(Be=2),O.morphAttributes.color!==void 0&&(Be=3);let Ve,re,Pe,ke;if(me){let Ae=kr[me];Ve=Ae.vertexShader,re=Ae.fragmentShader}else{Ve=M.vertexShader,re=M.fragmentShader;let Ae=d.getVertexShaderStage(M),Pt=d.getFragmentShaderStage(M);d.update(M,Ae,Pt),Pe=Ae.id,ke=Pt.id}let We=r.getRenderTarget(),Ne=r.state.buffers.depth.getReversed(),Qe=B.isInstancedMesh===!0,Ht=B.isBatchedMesh===!0,qe=!!M.map,Tt=!!M.matcap,yt=!!ee,dt=yt&&ee.isPMREMTexture===!0,un=!!M.aoMap,qt=!!M.lightMap,cn=!!M.bumpMap&&M.wireframe===!1,Vt=!!M.normalMap,jn=!!M.displacementMap,Gt=!!M.emissiveMap,fn=!!M.metalnessMap,On=!!M.roughnessMap,Zn=M.anisotropy>0,H=M.clearcoat>0,zn=M.diffuseRoughness>0,Rt=M.dispersion>0,at=M.retroreflectivity>0,Ee=M.iridescence>0,dn=M.sheen>0,Xe=M.transmission>0,je=Zn&&!!M.anisotropyMap,I=H&&!!M.clearcoatMap,T=H&&!!M.clearcoatNormalMap,$=H&&!!M.clearcoatRoughnessMap,de=zn&&!!M.diffuseRoughnessMap,ue=Ee&&!!M.iridescenceMap,xe=Ee&&!!M.iridescenceThicknessMap,Te=dn&&!!M.sheenColorMap,oe=dn&&!!M.sheenRoughnessMap,ae=!!M.specularMap,Me=!!M.specularColorMap,U=!!M.specularIntensityMap,le=Xe&&!!M.transmissionMap,ie=Xe&&!!M.thicknessMap,we=!!M.gradientMap,ye=!!M.alphaMap,_e=M.alphaTest>0,He=!!M.alphaHash,ot=!!M.extensions,pe=ii;M.toneMapped&&(We===null||We.isXRRenderTarget===!0)&&(pe=r.toneMapping);let Ge=dt?ee.isCompressedCubeTexture?ee.image[0].mipmaps:ee.mipmaps:null,st={shaderID:me,shaderType:M.type,shaderName:M.name,vertexShader:Ve,fragmentShader:re,defines:M.defines,customVertexShaderID:Pe,customFragmentShaderID:ke,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:ne,batching:Ht,batchingColor:Ht&&B._colorsTexture!==null,instancing:Qe,instancingColor:Qe&&B.instanceColor!==null,instancingMorph:Qe&&B.morphTexture!==null,outputColorSpace:We===null?r.outputColorSpace:We.isXRRenderTarget===!0?We.texture.colorSpace:vt.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:qe,matcap:Tt,envMap:yt,envMapMode:yt&&ee.mapping,envMapPMREM:dt,envMapMaxLod:dt?Ge.length-1:null,envMapSize:dt?Ge[0].width:null,aoMap:un,lightMap:qt,bumpMap:cn,normalMap:Vt,displacementMap:jn,emissiveMap:Gt,normalMapObjectSpace:Vt&&M.normalMapType===Nb,normalMapTangentSpace:Vt&&M.normalMapType===yd,packedNormalMap:Vt&&M.normalMapType===yd&&OC(M.normalMap.format),metalnessMap:fn,roughnessMap:On,anisotropy:Zn,anisotropyMap:je,clearcoat:H,clearcoatMap:I,clearcoatNormalMap:T,clearcoatRoughnessMap:$,diffuseRoughness:zn,diffuseRoughnessMap:de,dispersion:Rt,retroreflection:at,iridescence:Ee,iridescenceMap:ue,iridescenceThicknessMap:xe,sheen:dn,sheenColorMap:Te,sheenRoughnessMap:oe,specularMap:ae,specularColorMap:Me,specularIntensityMap:U,transmission:Xe,transmissionMap:le,thicknessMap:ie,gradientMap:we,opaque:M.transparent===!1&&M.blending===za&&M.alphaToCoverage===!1,alphaMap:ye,alphaTest:_e,alphaHash:He,combine:M.combine,mapUv:qe&&y(M.map.channel),aoMapUv:un&&y(M.aoMap.channel),lightMapUv:qt&&y(M.lightMap.channel),bumpMapUv:cn&&y(M.bumpMap.channel),normalMapUv:Vt&&y(M.normalMap.channel),displacementMapUv:jn&&y(M.displacementMap.channel),emissiveMapUv:Gt&&y(M.emissiveMap.channel),metalnessMapUv:fn&&y(M.metalnessMap.channel),roughnessMapUv:On&&y(M.roughnessMap.channel),anisotropyMapUv:je&&y(M.anisotropyMap.channel),clearcoatMapUv:I&&y(M.clearcoatMap.channel),clearcoatNormalMapUv:T&&y(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&y(M.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:de&&y(M.diffuseRoughnessMap.channel),iridescenceMapUv:ue&&y(M.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&y(M.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&y(M.sheenColorMap.channel),sheenRoughnessMapUv:oe&&y(M.sheenRoughnessMap.channel),specularMapUv:ae&&y(M.specularMap.channel),specularColorMapUv:Me&&y(M.specularColorMap.channel),specularIntensityMapUv:U&&y(M.specularIntensityMap.channel),transmissionMapUv:le&&y(M.transmissionMap.channel),thicknessMapUv:ie&&y(M.thicknessMap.channel),alphaMapUv:ye&&y(M.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Vt||Zn),vertexNormals:!!O.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!O.attributes.uv&&(qe||ye),fog:!!Z,useFog:M.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||O.attributes.normal===void 0&&Vt===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Ne,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:Be,numSunLights:P.sun.length,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numSunLightShadows:P.sunShadowMap.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:W.filter(Ae=>Ae.texture!==null).length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&V.length>0,shadowMapType:r.shadowMap.type,toneMapping:pe,decodeVideoTexture:qe&&M.map.isVideoTexture===!0&&vt.getTransfer(M.map.colorSpace)===Ft,decodeVideoTextureEmissive:Gt&&M.emissiveMap.isVideoTexture===!0&&vt.getTransfer(M.emissiveMap.colorSpace)===Ft,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Lr,flipSided:M.side===hi,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ot&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&M.extensions.multiDraw===!0||Ht)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return st.vertexUv1s=p.has(1),st.vertexUv2s=p.has(2),st.vertexUv3s=p.has(3),p.clear(),st}function C(M){let P=[];if(M.shaderID?P.push(M.shaderID):(P.push(M.customVertexShaderID),P.push(M.customFragmentShaderID)),M.defines!==void 0)for(let V in M.defines)P.push(V),P.push(M.defines[V]);return M.isRawShaderMaterial===!1&&(S(P,M),v(P,M),P.push(r.outputColorSpace)),P.push(M.customProgramCacheKey),P.join()}function S(M,P){M.push(P.precision),M.push(P.outputColorSpace),M.push(P.envMapMode),M.push(P.envMapPMREM),M.push(P.envMapMaxLod),M.push(P.envMapSize),M.push(P.mapUv),M.push(P.alphaMapUv),M.push(P.lightMapUv),M.push(P.aoMapUv),M.push(P.bumpMapUv),M.push(P.normalMapUv),M.push(P.displacementMapUv),M.push(P.emissiveMapUv),M.push(P.metalnessMapUv),M.push(P.roughnessMapUv),M.push(P.anisotropyMapUv),M.push(P.clearcoatMapUv),M.push(P.clearcoatNormalMapUv),M.push(P.clearcoatRoughnessMapUv),M.push(P.diffuseRoughnessMapUv),M.push(P.iridescenceMapUv),M.push(P.iridescenceThicknessMapUv),M.push(P.sheenColorMapUv),M.push(P.sheenRoughnessMapUv),M.push(P.specularMapUv),M.push(P.specularColorMapUv),M.push(P.specularIntensityMapUv),M.push(P.transmissionMapUv),M.push(P.thicknessMapUv),M.push(P.combine),M.push(P.fogExp2),M.push(P.sizeAttenuation),M.push(P.morphTargetsCount),M.push(P.numSunLights),M.push(P.numDirLights),M.push(P.numPointLights),M.push(P.numSpotLights),M.push(P.numSpotLightMaps),M.push(P.numHemiLights),M.push(P.numRectAreaLights),M.push(P.numSunLightShadows),M.push(P.numDirLightShadows),M.push(P.numPointLightShadows),M.push(P.numSpotLightShadows),M.push(P.numSpotLightShadowsWithMaps),M.push(P.numLightProbes),M.push(P.numLightProbeGrids),M.push(P.shadowMapType),M.push(P.toneMapping),M.push(P.numClippingPlanes),M.push(P.numClipIntersection),M.push(P.depthPacking)}function v(M,P){c.disableAll(),P.instancing&&c.enable(0),P.instancingColor&&c.enable(1),P.instancingMorph&&c.enable(2),P.matcap&&c.enable(3),P.envMap&&c.enable(4),P.normalMapObjectSpace&&c.enable(5),P.normalMapTangentSpace&&c.enable(6),P.clearcoat&&c.enable(7),P.iridescence&&c.enable(8),P.alphaTest&&c.enable(9),P.vertexColors&&c.enable(10),P.vertexAlphas&&c.enable(11),P.vertexUv1s&&c.enable(12),P.vertexUv2s&&c.enable(13),P.vertexUv3s&&c.enable(14),P.vertexTangents&&c.enable(15),P.anisotropy&&c.enable(16),P.alphaHash&&c.enable(17),P.batching&&c.enable(18),P.dispersion&&c.enable(19),P.retroreflection&&c.enable(24),P.diffuseRoughness&&c.enable(25),P.batchingColor&&c.enable(20),P.gradientMap&&c.enable(21),P.packedNormalMap&&c.enable(22),P.vertexNormals&&c.enable(23),M.push(c.mask),c.disableAll(),P.fog&&c.enable(0),P.useFog&&c.enable(1),P.flatShading&&c.enable(2),P.logarithmicDepthBuffer&&c.enable(3),P.reversedDepthBuffer&&c.enable(4),P.skinning&&c.enable(5),P.morphTargets&&c.enable(6),P.morphNormals&&c.enable(7),P.morphColors&&c.enable(8),P.premultipliedAlpha&&c.enable(9),P.shadowMapEnabled&&c.enable(10),P.doubleSided&&c.enable(11),P.flipSided&&c.enable(12),P.useDepthPacking&&c.enable(13),P.dithering&&c.enable(14),P.transmission&&c.enable(15),P.sheen&&c.enable(16),P.opaque&&c.enable(17),P.pointsUvs&&c.enable(18),P.decodeVideoTexture&&c.enable(19),P.decodeVideoTextureEmissive&&c.enable(20),P.alphaToCoverage&&c.enable(21),P.numLightProbeGrids>0&&c.enable(22),P.hasPositionAttribute&&c.enable(23),M.push(c.mask)}function A(M){let P=b[M.type],V;if(P){let F=kr[P];V=qb.clone(F.uniforms)}else V=M.uniforms;return V}function L(M,P){let V=g.get(P);return V!==void 0?++V.usedTimes:(V=new FC(r,P,M,o),m.push(V),g.set(P,V)),V}function R(M){if(--M.usedTimes===0){let P=m.indexOf(M);m[P]=m[m.length-1],m.pop(),g.delete(M.cacheKey),M.destroy()}}function D(M){d.remove(M)}function N(){d.dispose()}return{getParameters:x,getProgramCacheKey:C,getUniforms:A,acquireProgram:L,releaseProgram:R,releaseShaderCache:D,programs:m,dispose:N}}function BC(){let r=new WeakMap;function e(c){return r.has(c)}function t(c){let d=r.get(c);return d===void 0&&(d={},r.set(c,d)),d}function s(c){r.delete(c)}function o(c,d,p){r.get(c)[d]=p}function l(){r=new WeakMap}return{has:e,get:t,remove:s,update:o,dispose:l}}function HC(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function d_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function h_(){let r=[],e=0,t=[],s=[],o=[];function l(){e=0,t.length=0,s.length=0,o.length=0}function c(b){let y=0;return b.isInstancedMesh&&(y+=2),b.isSkinnedMesh&&(y+=1),y}function d(b,y,x,C,S,v){let A=r[e];return A===void 0?(A={id:b.id,object:b,geometry:y,material:x,materialVariant:c(b),groupOrder:C,renderOrder:b.renderOrder,z:S,group:v},r[e]=A):(A.id=b.id,A.object=b,A.geometry=y,A.material=x,A.materialVariant=c(b),A.groupOrder=C,A.renderOrder=b.renderOrder,A.z=S,A.group=v),e++,A}function p(b,y,x,C,S,v,A){A.reversedDepth===!0&&(S=-S);let L=d(b,y,x,C,S,v);x.transmission>0?s.push(L):x.transparent===!0?o.push(L):t.push(L)}function m(b,y,x,C,S,v){let A=d(b,y,x,C,S,v);x.transmission>0?s.unshift(A):x.transparent===!0?o.unshift(A):t.unshift(A)}function g(b,y){t.length>1&&t.sort(b||HC),s.length>1&&s.sort(y||d_),o.length>1&&o.sort(y||d_)}function _(){for(let b=e,y=r.length;b<y;b++){let x=r[b];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:s,transparent:o,init:l,push:p,unshift:m,finish:_,sort:g}}function VC(){let r=new WeakMap;function e(s,o){let l=r.get(s),c;return l===void 0?(c=new h_,r.set(s,[c])):o>=l.length?(c=new h_,l.push(c)):c=l[o],c}function t(){r=new WeakMap}return{get:e,dispose:t}}function GC(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new X,color:new Ke};break;case"SpotLight":t={position:new X,direction:new X,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new X,halfWidth:new X,halfHeight:new X};break}return r[e.id]=t,t}}}function WC(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var XC=0;function qC(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function $C(r){let e=new GC,t=WC(),s={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new X);let o=new X,l=new Ot,c=new Ot;function d(m){let g=0,_=0,b=0;for(let W=0;W<9;W++)s.probe[W].set(0,0,0);let y=0,x=0,C=0,S=0,v=0,A=0,L=0,R=0,D=0,N=0,M=0,P=0,V=0,F=0;m.sort(qC);for(let W=0,Z=m.length;W<Z;W++){let O=m[W],Q=O.color,se=O.intensity,ee=O.distance,me=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===Vs?me=O.shadow.map.texture:me=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)g+=Q.r*se,_+=Q.g*se,b+=Q.b*se;else if(O.isLightProbe){for(let ne=0;ne<9;ne++)s.probe[ne].addScaledVector(O.sh.coefficients[ne],se);F++}else if(O.isSunLight){let ne=e.get(O);if(ne.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let ce=O.shadow,he=t.get(O);he.shadowIntensity=ce.intensity,he.shadowBias=ce.bias,he.shadowNormalBias=ce.normalBias,he.shadowRadius=ce.radius,he.shadowMapSize.copy(ce.mapSize).multiply(ce.getFrameExtents()),s.sunShadow[x]=he,s.sunShadowMap[x]=me;let Be=ce.getViewportCount();for(let Ve=0;Ve<Be;Ve++)s.sunShadowMatrix[C+Ve]=ce.getMatrix(Ve),s.sunShadowCascade[C+Ve]=ce._cascadeData[Ve];C+=Be,x++}s.sun[y]=ne,y++}else if(O.isDirectionalLight){let ne=e.get(O);if(ne.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let ce=O.shadow,he=t.get(O);he.shadowIntensity=ce.intensity,he.shadowBias=ce.bias,he.shadowNormalBias=ce.normalBias,he.shadowRadius=ce.radius,he.shadowMapSize=ce.mapSize,s.directionalShadow[S]=he,s.directionalShadowMap[S]=me,s.directionalShadowMatrix[S]=O.shadow.matrix,D++}s.directional[S]=ne,S++}else if(O.isSpotLight){let ne=e.get(O);ne.position.setFromMatrixPosition(O.matrixWorld),ne.color.copy(Q).multiplyScalar(se),ne.distance=ee,ne.coneCos=Math.cos(O.angle),ne.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),ne.decay=O.decay,s.spot[A]=ne;let ce=O.shadow;if(O.map&&(s.spotLightMap[P]=O.map,P++,ce.updateMatrices(O),O.castShadow&&V++),s.spotLightMatrix[A]=ce.matrix,O.castShadow){let he=t.get(O);he.shadowIntensity=ce.intensity,he.shadowBias=ce.bias,he.shadowNormalBias=ce.normalBias,he.shadowRadius=ce.radius,he.shadowMapSize=ce.mapSize,s.spotShadow[A]=he,s.spotShadowMap[A]=me,M++}A++}else if(O.isRectAreaLight){let ne=e.get(O);ne.color.copy(Q).multiplyScalar(se),ne.halfWidth.set(O.width*.5,0,0),ne.halfHeight.set(0,O.height*.5,0),s.rectArea[L]=ne,L++}else if(O.isPointLight){let ne=e.get(O);if(ne.color.copy(O.color).multiplyScalar(O.intensity),ne.distance=O.distance,ne.decay=O.decay,O.castShadow){let ce=O.shadow,he=t.get(O);he.shadowIntensity=ce.intensity,he.shadowBias=ce.bias,he.shadowNormalBias=ce.normalBias,he.shadowRadius=ce.radius,he.shadowMapSize=ce.mapSize,he.shadowCameraNear=ce.camera.near,he.shadowCameraFar=ce.camera.far,s.pointShadow[v]=he,s.pointShadowMap[v]=me,s.pointShadowMatrix[v]=O.shadow.matrix,N++}s.point[v]=ne,v++}else if(O.isHemisphereLight){let ne=e.get(O);ne.skyColor.copy(O.color).multiplyScalar(se),ne.groundColor.copy(O.groundColor).multiplyScalar(se),s.hemi[R]=ne,R++}}L>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Le.LTC_FLOAT_1,s.rectAreaLTC2=Le.LTC_FLOAT_2):(s.rectAreaLTC1=Le.LTC_HALF_1,s.rectAreaLTC2=Le.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=_,s.ambient[2]=b;let B=s.hash;(B.sunLength!==y||B.directionalLength!==S||B.pointLength!==v||B.spotLength!==A||B.rectAreaLength!==L||B.hemiLength!==R||B.numSunShadows!==x||B.numDirectionalShadows!==D||B.numPointShadows!==N||B.numSpotShadows!==M||B.numSpotMaps!==P||B.numLightProbes!==F)&&(s.sun.length=y,s.directional.length=S,s.spot.length=A,s.rectArea.length=L,s.point.length=v,s.hemi.length=R,s.sunShadow.length=x,s.sunShadowMap.length=x,s.sunShadowMatrix.length=C,s.sunShadowCascade.length=C,s.directionalShadow.length=D,s.directionalShadowMap.length=D,s.directionalShadowMatrix.length=D,s.pointShadow.length=N,s.pointShadowMap.length=N,s.pointShadowMatrix.length=N,s.spotShadow.length=M,s.spotShadowMap.length=M,s.spotLightMatrix.length=M+P-V,s.spotLightMap.length=P,s.numSpotLightShadowsWithMaps=V,s.numLightProbes=F,B.sunLength=y,B.directionalLength=S,B.pointLength=v,B.spotLength=A,B.rectAreaLength=L,B.hemiLength=R,B.numSunShadows=x,B.numDirectionalShadows=D,B.numPointShadows=N,B.numSpotShadows=M,B.numSpotMaps=P,B.numLightProbes=F,s.version=XC++)}function p(m,g){let _=0,b=0,y=0,x=0,C=0,S=0,v=g.matrixWorldInverse;for(let A=0,L=m.length;A<L;A++){let R=m[A];if(R.isSunLight){let D=s.sun[_];D.direction.setFromMatrixPosition(R.matrixWorld),D.direction.transformDirection(v),_++}else if(R.isDirectionalLight){let D=s.directional[b];D.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),D.direction.sub(o),D.direction.transformDirection(v),b++}else if(R.isSpotLight){let D=s.spot[x];D.position.setFromMatrixPosition(R.matrixWorld),D.position.applyMatrix4(v),D.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),D.direction.sub(o),D.direction.transformDirection(v),x++}else if(R.isRectAreaLight){let D=s.rectArea[C];D.position.setFromMatrixPosition(R.matrixWorld),D.position.applyMatrix4(v),c.identity(),l.copy(R.matrixWorld),l.premultiply(v),c.extractRotation(l),D.halfWidth.set(R.width*.5,0,0),D.halfHeight.set(0,R.height*.5,0),D.halfWidth.applyMatrix4(c),D.halfHeight.applyMatrix4(c),C++}else if(R.isPointLight){let D=s.point[y];D.position.setFromMatrixPosition(R.matrixWorld),D.position.applyMatrix4(v),y++}else if(R.isHemisphereLight){let D=s.hemi[S];D.direction.setFromMatrixPosition(R.matrixWorld),D.direction.transformDirection(v),S++}}}return{setup:d,setupView:p,state:s}}function p_(r){let e=new $C(r),t=[],s=[],o=[];function l(_){g.camera=_,t.length=0,s.length=0,o.length=0}function c(_){_.isLightProbeGrid?o.push(_):t.push(_)}function d(_){s.push(_)}function p(){e.setup(t),o.sort((_,b)=>_.priority-b.priority||_.id-b.id)}function m(_){e.setupView(t,_)}let g={lightsArray:t,shadowsArray:s,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:g,setupLights:p,setupLightsView:m,pushLight:c,pushShadow:d}}function YC(r){let e=new WeakMap;function t(o,l=0){let c=e.get(o),d;return c===void 0?(d=new p_(r),e.set(o,[d])):l>=c.length?(d=new p_(r),c.push(d)):d=c[l],d}function s(){e=new WeakMap}return{get:t,dispose:s}}var jC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ZC=`uniform sampler2D shadow_pass;
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
}`,JC=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],KC=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],m_=new Ot,au=new X,Wm=new X;function QC(r,e,t){let s=new Fs,o=new ct,l=new ct,c=new Kt,d=new vf,p=new yf,m={},g=t.maxTextureSize,_={[Hs]:hi,[hi]:Hs,[Lr]:Lr},b=new ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:jC,fragmentShader:ZC}),y=b.clone();y.defines.HORIZONTAL_PASS=1;let x=new Yi;x.setAttribute("position",new fr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let C=new ni(x,b),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=To;let v=this.type;this.render=function(N,M,P){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||N.length===0)return;this.type===Oa&&(Ye("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=To);let V=r.getRenderTarget(),F=r.getActiveCubeFace(),B=r.getActiveMipmapLevel(),W=r.state;W.setBlending(Eo),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let Z=v!==this.type;Z&&M.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(Q=>Q.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,Q=N.length;O<Q;O++){let se=N[O],ee=se.shadow;if(ee===void 0){Ye("WebGLShadowMap:",se,"has no shadow.");continue}if(ee.autoUpdate===!1&&ee.needsUpdate===!1)continue;o.copy(ee.mapSize);let me=ee.getFrameExtents();o.multiply(me),l.copy(ee.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(l.x=Math.floor(g/me.x),o.x=l.x*me.x,ee.mapSize.x=l.x),o.y>g&&(l.y=Math.floor(g/me.y),o.y=l.y*me.y,ee.mapSize.y=l.y));let ne=r.state.buffers.depth.getReversed();if(ee.camera._reversedDepth=ne,ee.map===null||Z===!0){if(ee.map!==null&&(ee.map.depthTexture!==null&&(ee.map.depthTexture.dispose(),ee.map.depthTexture=null),ee.map.dispose()),this.type===Bs){if(se.isPointLight){Ye("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ee.map=new Di(o.x,o.y,{format:Vs,type:hr,minFilter:fi,magFilter:fi,generateMipmaps:!1}),ee.map.texture.name=se.name+".shadowMap",ee.map.depthTexture=new ss(o.x,o.y,Zi),ee.map.depthTexture.name=se.name+".shadowMapDepth",ee.map.depthTexture.format=es,ee.map.depthTexture.compareFunction=null,ee.map.depthTexture.minFilter=Fn,ee.map.depthTexture.magFilter=Fn}else se.isPointLight?(ee.map=new uu(o.x),ee.map.depthTexture=new Gl(o.x,dr)):(ee.map=new Di(o.x,o.y),ee.map.depthTexture=new ss(o.x,o.y,dr)),ee.map.depthTexture.name=se.name+".shadowMap",ee.map.depthTexture.format=es,this.type===To?(ee.map.depthTexture.compareFunction=ne?Rm:Cm,ee.map.depthTexture.minFilter=fi,ee.map.depthTexture.magFilter=fi):(ee.map.depthTexture.compareFunction=null,ee.map.depthTexture.minFilter=Fn,ee.map.depthTexture.magFilter=Fn);ee.camera.updateProjectionMatrix()}ee.map.isWebGLCubeRenderTarget!==!0&&(ee.map.width!==o.x||ee.map.height!==o.y)&&ee.map.setSize(o.x,o.y);let ce=ee.map.isWebGLCubeRenderTarget?6:ee.getViewportCount();se.isPointLight!==!0&&ee.updateMatrices(se,P);let he=(ee.camera.layers.mask&4294967294)!==0?ee.camera.layers:P.layers;for(let Be=0;Be<ce;Be++){let Ve=ee.getCamera(Be);if(se.isPointLight){let re=ee.camera,Pe=ee.matrix,ke=se.distance||re.far;ke!==re.far&&(re.far=ke,re.updateProjectionMatrix()),au.setFromMatrixPosition(se.matrixWorld),re.position.copy(au),Wm.copy(re.position),Wm.add(JC[Be]),re.up.copy(KC[Be]),re.lookAt(Wm),re.updateMatrixWorld(),Pe.makeTranslation(-au.x,-au.y,-au.z),m_.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),ee._frustum.setFromProjectionMatrix(m_,re.coordinateSystem,re.reversedDepth)}if(ee.map.isWebGLCubeRenderTarget)r.setRenderTarget(ee.map,Be),r.clear();else{Be===0&&(r.setRenderTarget(ee.map),r.clear());let re=ee.getViewport(Be);c.set(l.x*re.x,l.y*re.y,l.x*re.z,l.y*re.w),W.viewport(c)}s=ee.getFrustum(Be),R(M,P,Ve,se,he,this.type)}ee.isPointLightShadow!==!0&&this.type===Bs&&A(ee,P),ee.needsUpdate=!1}v=this.type,S.needsUpdate=!1,r.setRenderTarget(V,F,B)};function A(N,M){let P=e.update(C);b.defines.VSM_SAMPLES!==N.blurSamples&&(b.defines.VSM_SAMPLES=N.blurSamples,y.defines.VSM_SAMPLES=N.blurSamples,b.needsUpdate=!0,y.needsUpdate=!0),N.mapPass===null?N.mapPass=new Di(o.x,o.y,{format:Vs,type:hr}):(N.mapPass.width!==N.map.width||N.mapPass.height!==N.map.height)&&N.mapPass.setSize(N.map.width,N.map.height),b.uniforms.shadow_pass.value=N.map.depthTexture,b.uniforms.resolution.value.set(N.map.width,N.map.height),b.uniforms.radius.value=N.radius,r.setRenderTarget(N.mapPass),r.clear(),r.renderBufferDirect(M,null,P,b,C,null),y.uniforms.shadow_pass.value=N.mapPass.texture,y.uniforms.resolution.value.set(N.map.width,N.map.height),y.uniforms.radius.value=N.radius,r.setRenderTarget(N.map),r.clear(),r.renderBufferDirect(M,null,P,y,C,null)}function L(N,M,P,V){let F=null,B=P.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(B!==void 0)F=B;else if(F=P.isPointLight===!0?p:d,r.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0||M.alphaToCoverage===!0){let W=F.uuid,Z=M.uuid,O=m[W];O===void 0&&(O={},m[W]=O);let Q=O[Z];Q===void 0&&(Q=F.clone(),O[Z]=Q,M.addEventListener("dispose",D)),F=Q}if(F.visible=M.visible,F.wireframe=M.wireframe,V===Bs?F.side=M.shadowSide!==null?M.shadowSide:M.side:F.side=M.shadowSide!==null?M.shadowSide:_[M.side],F.alphaMap=M.alphaMap,F.alphaTest=M.alphaToCoverage===!0?.5:M.alphaTest,F.map=M.map,F.clipShadows=M.clipShadows,F.clippingPlanes=M.clippingPlanes,F.clipIntersection=M.clipIntersection,F.displacementMap=M.displacementMap,F.displacementScale=M.displacementScale,F.displacementBias=M.displacementBias,F.wireframeLinewidth=M.wireframeLinewidth,F.linewidth=M.linewidth,P.isPointLight===!0&&F.isMeshDistanceMaterial===!0){let W=r.properties.get(F);W.light=P}return F}function R(N,M,P,V,F,B){if(N.visible===!1)return;if(N.layers.test(F)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&B===Bs)&&(!N.frustumCulled||N.intersectsFrustum(s))){N.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,N.matrixWorld);let O=e.update(N),Q=N.material;if(Array.isArray(Q)){let se=O.groups;for(let ee=0,me=se.length;ee<me;ee++){let ne=se[ee],ce=Q[ne.materialIndex];if(ce&&ce.visible){let he=L(N,ce,V,B);N.onBeforeShadow(r,N,M,P,O,he,ne),r.renderBufferDirect(P,null,O,he,N,ne),N.onAfterShadow(r,N,M,P,O,he,ne)}}}else if(Q.visible){let se=L(N,Q,V,B);N.onBeforeShadow(r,N,M,P,O,se,null),r.renderBufferDirect(P,null,O,se,N,null),N.onAfterShadow(r,N,M,P,O,se,null)}}let Z=N.children;for(let O=0,Q=Z.length;O<Q;O++)R(Z[O],M,P,V,F,B)}function D(N){N.target.removeEventListener("dispose",D);for(let P in m){let V=m[P],F=N.target.uuid;F in V&&(V[F].dispose(),delete V[F])}}}function eR(r,e){function t(){let U=!1,le=new Kt,ie=null,we=new Kt(0,0,0,0);return{setMask:function(ye){ie!==ye&&!U&&(r.colorMask(ye,ye,ye,ye),ie=ye)},setLocked:function(ye){U=ye},setClear:function(ye,_e,He,ot,pe){pe===!0&&(ye*=ot,_e*=ot,He*=ot),le.set(ye,_e,He,ot),we.equals(le)===!1&&(r.clearColor(ye,_e,He,ot),we.copy(le))},reset:function(){U=!1,ie=null,we.set(-1,0,0,0)}}}function s(){let U=!1,le=!1,ie=null,we=null,ye=null;return{setReversed:function(_e){if(le!==_e){let He=e.get("EXT_clip_control");_e?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),le=_e;let ot=ye;ye=null,this.setClear(ot)}},getReversed:function(){return le},setTest:function(_e){_e?Ne(r.DEPTH_TEST):Qe(r.DEPTH_TEST)},setMask:function(_e){ie!==_e&&!U&&(r.depthMask(_e),ie=_e)},setFunc:function(_e){if(le&&(_e=Gb[_e]),we!==_e){switch(_e){case Jc:r.depthFunc(r.NEVER);break;case Kc:r.depthFunc(r.ALWAYS);break;case Qc:r.depthFunc(r.LESS);break;case Ra:r.depthFunc(r.LEQUAL);break;case ef:r.depthFunc(r.EQUAL);break;case tf:r.depthFunc(r.GEQUAL);break;case nf:r.depthFunc(r.GREATER);break;case rf:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}we=_e}},setLocked:function(_e){U=_e},setClear:function(_e){ye!==_e&&(ye=_e,le&&(_e=1-_e),r.clearDepth(_e))},reset:function(){U=!1,ie=null,we=null,ye=null,le=!1}}}function o(){let U=!1,le=null,ie=null,we=null,ye=null,_e=null,He=null,ot=null,pe=null;return{setTest:function(Ge){U||(Ge?Ne(r.STENCIL_TEST):Qe(r.STENCIL_TEST))},setMask:function(Ge){le!==Ge&&!U&&(r.stencilMask(Ge),le=Ge)},setFunc:function(Ge,st,Ae){(ie!==Ge||we!==st||ye!==Ae)&&(r.stencilFunc(Ge,st,Ae),ie=Ge,we=st,ye=Ae)},setOp:function(Ge,st,Ae){(_e!==Ge||He!==st||ot!==Ae)&&(r.stencilOp(Ge,st,Ae),_e=Ge,He=st,ot=Ae)},setLocked:function(Ge){U=Ge},setClear:function(Ge){pe!==Ge&&(r.clearStencil(Ge),pe=Ge)},reset:function(){U=!1,le=null,ie=null,we=null,ye=null,_e=null,He=null,ot=null,pe=null}}}let l=new t,c=new s,d=new o,p={},m=new WeakMap,g={},_={},b={},y=new WeakMap,x=[],C=null,S=!1,v=null,A=null,L=null,R=null,D=null,N=null,M=null,P=new Ke(0,0,0),V=0,F=!1,B=null,W=null,Z=null,O=null,Q=null,se=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ee=!1,me=0,ne=r.getParameter(r.VERSION);ne.indexOf("WebGL")!==-1?(me=parseFloat(/^WebGL (\d)/.exec(ne)[1]),ee=me>=1):ne.indexOf("OpenGL ES")!==-1&&(me=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),ee=me>=2);let ce=null,he={},Be=r.getParameter(r.SCISSOR_BOX),Ve=r.getParameter(r.VIEWPORT),re=new Kt().fromArray(Be),Pe=new Kt().fromArray(Ve);function ke(U,le,ie,we){let ye=new Uint8Array(4),_e=r.createTexture();r.bindTexture(U,_e),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let He=0;He<ie;He++)U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY?r.texImage3D(le,0,r.RGBA,1,1,we,0,r.RGBA,r.UNSIGNED_BYTE,ye):r.texImage2D(le+He,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ye);return _e}let We={};We[r.TEXTURE_2D]=ke(r.TEXTURE_2D,r.TEXTURE_2D,1),We[r.TEXTURE_CUBE_MAP]=ke(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),We[r.TEXTURE_2D_ARRAY]=ke(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),We[r.TEXTURE_3D]=ke(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),d.setClear(0),Ne(r.DEPTH_TEST),c.setFunc(Ra),cn(!1),Vt(am),Ne(r.CULL_FACE),un(Eo);function Ne(U){g[U]!==!0&&(r.enable(U),g[U]=!0)}function Qe(U){g[U]!==!1&&(r.disable(U),g[U]=!1)}function Ht(U,le){return b[U]!==le?(r.bindFramebuffer(U,le),b[U]=le,U===r.DRAW_FRAMEBUFFER&&(b[r.FRAMEBUFFER]=le),U===r.FRAMEBUFFER&&(b[r.DRAW_FRAMEBUFFER]=le),!0):!1}function qe(U,le){let ie=x,we=!1;if(U){ie=y.get(le),ie===void 0&&(ie=[],y.set(le,ie));let ye=U.textures;if(ie.length!==ye.length||ie[0]!==r.COLOR_ATTACHMENT0){for(let _e=0,He=ye.length;_e<He;_e++)ie[_e]=r.COLOR_ATTACHMENT0+_e;ie.length=ye.length,we=!0}}else ie[0]!==r.BACK&&(ie[0]=r.BACK,we=!0);we&&r.drawBuffers(ie)}function Tt(U){return C!==U?(r.useProgram(U),C=U,!0):!1}let yt={[Ao]:r.FUNC_ADD,[fb]:r.FUNC_SUBTRACT,[db]:r.FUNC_REVERSE_SUBTRACT};yt[hb]=r.MIN,yt[pb]=r.MAX;let dt={[mb]:r.ZERO,[gb]:r.ONE,[vb]:r.SRC_COLOR,[dm]:r.SRC_ALPHA,[Mb]:r.SRC_ALPHA_SATURATE,[Sb]:r.DST_COLOR,[bb]:r.DST_ALPHA,[yb]:r.ONE_MINUS_SRC_COLOR,[hm]:r.ONE_MINUS_SRC_ALPHA,[xb]:r.ONE_MINUS_DST_COLOR,[_b]:r.ONE_MINUS_DST_ALPHA,[wb]:r.CONSTANT_COLOR,[Tb]:r.ONE_MINUS_CONSTANT_COLOR,[Eb]:r.CONSTANT_ALPHA,[Ab]:r.ONE_MINUS_CONSTANT_ALPHA};function un(U,le,ie,we,ye,_e,He,ot,pe,Ge){if(U===Eo){S===!0&&(Qe(r.BLEND),S=!1);return}if(S===!1&&(Ne(r.BLEND),S=!0),U!==cb){if(U!==v||Ge!==F){if((A!==Ao||D!==Ao)&&(r.blendEquation(r.FUNC_ADD),A=Ao,D=Ao),Ge)switch(U){case za:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case um:r.blendFunc(r.ONE,r.ONE);break;case cm:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case fm:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:tt("WebGLState: Invalid blending: ",U);break}else switch(U){case za:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case um:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case cm:tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fm:tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:tt("WebGLState: Invalid blending: ",U);break}L=null,R=null,N=null,M=null,P.set(0,0,0),V=0,v=U,F=Ge}return}ye=ye||le,_e=_e||ie,He=He||we,(le!==A||ye!==D)&&(r.blendEquationSeparate(yt[le],yt[ye]),A=le,D=ye),(ie!==L||we!==R||_e!==N||He!==M)&&(r.blendFuncSeparate(dt[ie],dt[we],dt[_e],dt[He]),L=ie,R=we,N=_e,M=He),(ot.equals(P)===!1||pe!==V)&&(r.blendColor(ot.r,ot.g,ot.b,pe),P.copy(ot),V=pe),v=U,F=!1}function qt(U,le){U.side===Lr?Qe(r.CULL_FACE):Ne(r.CULL_FACE);let ie=U.side===hi;le&&(ie=!ie),cn(ie),U.blending===za&&U.transparent===!1?un(Eo):un(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),c.setFunc(U.depthFunc),c.setTest(U.depthTest),c.setMask(U.depthWrite),l.setMask(U.colorWrite);let we=U.stencilWrite;d.setTest(we),we&&(d.setMask(U.stencilWriteMask),d.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),d.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Gt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Ne(r.SAMPLE_ALPHA_TO_COVERAGE):Qe(r.SAMPLE_ALPHA_TO_COVERAGE)}function cn(U){B!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),B=U)}function Vt(U){U!==lb?(Ne(r.CULL_FACE),U!==W&&(U===am?r.cullFace(r.BACK):U===ub?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Qe(r.CULL_FACE),W=U}function jn(U){U!==Z&&(ee&&r.lineWidth(U),Z=U)}function Gt(U,le,ie){U?(Ne(r.POLYGON_OFFSET_FILL),(O!==le||Q!==ie)&&(O=le,Q=ie,c.getReversed()&&(le=-le,ie=-ie),r.polygonOffset(le,ie))):Qe(r.POLYGON_OFFSET_FILL)}function fn(U){U?Ne(r.SCISSOR_TEST):Qe(r.SCISSOR_TEST)}function On(U){U===void 0&&(U=r.TEXTURE0+se-1),ce!==U&&(r.activeTexture(U),ce=U)}function Zn(U,le,ie){ie===void 0&&(ce===null?ie=r.TEXTURE0+se-1:ie=ce);let we=he[ie];we===void 0&&(we={type:void 0,texture:void 0},he[ie]=we),(we.type!==U||we.texture!==le)&&(ce!==ie&&(r.activeTexture(ie),ce=ie),r.bindTexture(U,le||We[U]),we.type=U,we.texture=le)}function H(){let U=he[ce];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function zn(){try{r.compressedTexImage2D(...arguments)}catch(U){tt("WebGLState:",U)}}function Rt(){try{r.compressedTexImage3D(...arguments)}catch(U){tt("WebGLState:",U)}}function at(){try{r.texSubImage2D(...arguments)}catch(U){tt("WebGLState:",U)}}function Ee(){try{r.texSubImage3D(...arguments)}catch(U){tt("WebGLState:",U)}}function dn(){try{r.compressedTexSubImage2D(...arguments)}catch(U){tt("WebGLState:",U)}}function Xe(){try{r.compressedTexSubImage3D(...arguments)}catch(U){tt("WebGLState:",U)}}function je(){try{r.texStorage2D(...arguments)}catch(U){tt("WebGLState:",U)}}function I(){try{r.texStorage3D(...arguments)}catch(U){tt("WebGLState:",U)}}function T(){try{r.texImage2D(...arguments)}catch(U){tt("WebGLState:",U)}}function $(){try{r.texImage3D(...arguments)}catch(U){tt("WebGLState:",U)}}function de(U){return _[U]!==void 0?_[U]:r.getParameter(U)}function ue(U,le){_[U]!==le&&(r.pixelStorei(U,le),_[U]=le)}function xe(U){re.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),re.copy(U))}function Te(U){Pe.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),Pe.copy(U))}function oe(U,le){let ie=m.get(le);ie===void 0&&(ie=new WeakMap,m.set(le,ie));let we=ie.get(U);we===void 0&&(we=r.getUniformBlockIndex(le,U.name),r.uniformBlockBinding(le,we,we),ie.set(U,we))}function ae(U,le,ie){let ye=m.get(le).get(U);p[ye]!==ie&&(r.bindBufferBase(r.UNIFORM_BUFFER,ye,ie),p[ye]=ie)}function Me(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),c.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),g={},_={},ce=null,he={},b={},p={},y=new WeakMap,x=[],C=null,S=!1,v=null,A=null,L=null,R=null,D=null,N=null,M=null,P=new Ke(0,0,0),V=0,F=!1,B=null,W=null,Z=null,O=null,Q=null,re.set(0,0,r.canvas.width,r.canvas.height),Pe.set(0,0,r.canvas.width,r.canvas.height),l.reset(),c.reset(),d.reset()}return{buffers:{color:l,depth:c,stencil:d},enable:Ne,disable:Qe,bindFramebuffer:Ht,drawBuffers:qe,useProgram:Tt,setBlending:un,setMaterial:qt,setFlipSided:cn,setCullFace:Vt,setLineWidth:jn,setPolygonOffset:Gt,setScissorTest:fn,activeTexture:On,bindTexture:Zn,unbindTexture:H,compressedTexImage2D:zn,compressedTexImage3D:Rt,texImage2D:T,texImage3D:$,pixelStorei:ue,getParameter:de,updateUBOMapping:oe,uniformBlockBinding:ae,texStorage2D:je,texStorage3D:I,texSubImage2D:at,texSubImage3D:Ee,compressedTexSubImage2D:dn,compressedTexSubImage3D:Xe,scissor:xe,viewport:Te,reset:Me}}function tR(r,e,t,s,o,l,c){let d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new ct,g=new WeakMap,_=new Set,b,y=new WeakMap,x=new Set,C=new FinalizationRegistry(I=>x.delete(I)),S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(I,T){return S?new OffscreenCanvas(I,T):Ia("canvas")}function A(I,T,$){let de=1,ue=je(I);if((ue.width>$||ue.height>$)&&(de=$/Math.max(ue.width,ue.height)),de<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let xe=Math.floor(de*ue.width),Te=Math.floor(de*ue.height);b===void 0&&(b=v(xe,Te));let oe=T?v(xe,Te):b;return oe.width=xe,oe.height=Te,oe.getContext("2d").drawImage(I,0,0,xe,Te),Ye("WebGLRenderer: Texture has been resized from ("+ue.width+"x"+ue.height+") to ("+xe+"x"+Te+")."),oe}else return"data"in I&&Ye("WebGLRenderer: Image in DataTexture is too big ("+ue.width+"x"+ue.height+")."),I;return I}function L(I){return I.generateMipmaps}function R(I){r.generateMipmap(I)}function D(I){return I.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?r.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function N(I,T,$,de,ue,xe=!1){if(I!==null){if(r[I]!==void 0)return r[I];Ye("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Te;de&&(Te=e.get("EXT_texture_norm16"),Te||Ye("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let oe=T;if(T===r.RED&&($===r.FLOAT&&(oe=r.R32F),$===r.HALF_FLOAT&&(oe=r.R16F),$===r.UNSIGNED_BYTE&&(oe=r.R8),$===r.UNSIGNED_SHORT&&Te&&(oe=Te.R16_EXT),$===r.SHORT&&Te&&(oe=Te.R16_SNORM_EXT)),T===r.RED_INTEGER&&($===r.UNSIGNED_BYTE&&(oe=r.R8UI),$===r.UNSIGNED_SHORT&&(oe=r.R16UI),$===r.UNSIGNED_INT&&(oe=r.R32UI),$===r.BYTE&&(oe=r.R8I),$===r.SHORT&&(oe=r.R16I),$===r.INT&&(oe=r.R32I)),T===r.RG&&($===r.FLOAT&&(oe=r.RG32F),$===r.HALF_FLOAT&&(oe=r.RG16F),$===r.UNSIGNED_BYTE&&(oe=r.RG8),$===r.UNSIGNED_SHORT&&Te&&(oe=Te.RG16_EXT),$===r.SHORT&&Te&&(oe=Te.RG16_SNORM_EXT)),T===r.RG_INTEGER&&($===r.UNSIGNED_BYTE&&(oe=r.RG8UI),$===r.UNSIGNED_SHORT&&(oe=r.RG16UI),$===r.UNSIGNED_INT&&(oe=r.RG32UI),$===r.BYTE&&(oe=r.RG8I),$===r.SHORT&&(oe=r.RG16I),$===r.INT&&(oe=r.RG32I)),T===r.RGB_INTEGER&&($===r.UNSIGNED_BYTE&&(oe=r.RGB8UI),$===r.UNSIGNED_SHORT&&(oe=r.RGB16UI),$===r.UNSIGNED_INT&&(oe=r.RGB32UI),$===r.BYTE&&(oe=r.RGB8I),$===r.SHORT&&(oe=r.RGB16I),$===r.INT&&(oe=r.RGB32I)),T===r.RGBA_INTEGER&&($===r.UNSIGNED_BYTE&&(oe=r.RGBA8UI),$===r.UNSIGNED_SHORT&&(oe=r.RGBA16UI),$===r.UNSIGNED_INT&&(oe=r.RGBA32UI),$===r.BYTE&&(oe=r.RGBA8I),$===r.SHORT&&(oe=r.RGBA16I),$===r.INT&&(oe=r.RGBA32I)),T===r.RGB&&($===r.UNSIGNED_SHORT&&Te&&(oe=Te.RGB16_EXT),$===r.SHORT&&Te&&(oe=Te.RGB16_SNORM_EXT),$===r.UNSIGNED_INT_5_9_9_9_REV&&(oe=r.RGB9_E5),$===r.UNSIGNED_INT_10F_11F_11F_REV&&(oe=r.R11F_G11F_B10F)),T===r.RGBA){let ae=xe?Nl:vt.getTransfer(ue);$===r.FLOAT&&(oe=r.RGBA32F),$===r.HALF_FLOAT&&(oe=r.RGBA16F),$===r.UNSIGNED_BYTE&&(oe=ae===Ft?r.SRGB8_ALPHA8:r.RGBA8),$===r.UNSIGNED_SHORT&&Te&&(oe=Te.RGBA16_EXT),$===r.SHORT&&Te&&(oe=Te.RGBA16_SNORM_EXT),$===r.UNSIGNED_SHORT_4_4_4_4&&(oe=r.RGBA4),$===r.UNSIGNED_SHORT_5_5_5_1&&(oe=r.RGB5_A1)}return(oe===r.R16F||oe===r.R32F||oe===r.RG16F||oe===r.RG32F||oe===r.RGBA16F||oe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function M(I,T){let $;return I?T===null||T===dr||T===Ro?$=r.DEPTH24_STENCIL8:T===Zi?$=r.DEPTH32F_STENCIL8:T===Ha&&($=r.DEPTH24_STENCIL8,Ye("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===dr||T===Ro?$=r.DEPTH_COMPONENT24:T===Zi?$=r.DEPTH_COMPONENT32F:T===Ha&&($=r.DEPTH_COMPONENT16),$}function P(I,T){return L(I)===!0||I.isFramebufferTexture&&I.minFilter!==Fn&&I.minFilter!==fi?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function V(I){let T=new WeakRef(I);s.get(I).__ref=T,x.add(T),C.register(I,T,T)}function F(I){let T=s.get(I).__ref;T!==void 0&&(x.delete(T),C.unregister(T))}function B(I){Z(I.target)}function W(I){O(I.target)}function Z(I){I.removeEventListener("dispose",B),F(I),se(I),I.isVideoTexture&&g.delete(I),I.isHTMLTexture&&_.delete(I)}function O(I){I.removeEventListener("dispose",W),F(I),me(I)}function Q(){for(let I of x){let T=I.deref();T!==void 0&&(T.isRenderTarget===!0?O(T):Z(T))}x.clear(),_.clear()}function se(I){let T=s.get(I);if(T.__webglInit===void 0)return;let $=I.source,de=y.get($);if(de){let ue=de[T.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&ee(I),Object.keys(de).length===0&&y.delete($)}s.remove(I)}function ee(I){let T=s.get(I);r.deleteTexture(T.__webglTexture);let $=I.source,de=y.get($);delete de[T.__cacheKey],c.memory.textures--}function me(I){let T=s.get(I);T.__depthDisposeCallback&&T.__depthDisposeCallback();let $=I.depthTexture;if($&&$.renderTarget===I&&Z($),I.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(T.__webglFramebuffer[ue]))for(let xe=0;xe<T.__webglFramebuffer[ue].length;xe++)r.deleteFramebuffer(T.__webglFramebuffer[ue][xe]);else r.deleteFramebuffer(T.__webglFramebuffer[ue]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[ue])}else{if(Array.isArray(T.__webglFramebuffer))for(let ue=0;ue<T.__webglFramebuffer.length;ue++)r.deleteFramebuffer(T.__webglFramebuffer[ue]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ue=0;ue<T.__webglColorRenderbuffer.length;ue++)T.__webglColorRenderbuffer[ue]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[ue]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let de=I.textures;for(let ue=0,xe=de.length;ue<xe;ue++){let Te=s.get(de[ue]);Te.__webglTexture&&(r.deleteTexture(Te.__webglTexture),c.memory.textures--),s.remove(de[ue])}s.remove(I)}let ne=0;function ce(){ne=0}function he(){return ne}function Be(I){ne=I}function Ve(){let I=ne;return I>=o.maxTextures&&Ye("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+o.maxTextures),ne+=1,I}function re(I){let T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.mipmapsAutoUpdate),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.colorSpace),T.join()}function Pe(I,T){let $=s.get(I);if(I.isVideoTexture&&dn(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&$.__version!==I.version){let de=I.image;if(de===null)Ye("WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)Ye("WebGLRenderer: Texture marked for update but image is incomplete");else{qt($,I,T);return}}else I.isExternalTexture&&($.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,$.__webglTexture,r.TEXTURE0+T)}function ke(I,T){let $=s.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&$.__version!==I.version){qt($,I,T);return}else I.isExternalTexture&&($.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,$.__webglTexture,r.TEXTURE0+T)}function We(I,T){let $=s.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&$.__version!==I.version){qt($,I,T);return}t.bindTexture(r.TEXTURE_3D,$.__webglTexture,r.TEXTURE0+T)}function Ne(I,T){let $=s.get(I);if(I.version>0&&$.__version!==I.version){cn($,I,T);return}t.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture,r.TEXTURE0+T)}let Qe={[sf]:r.REPEAT,[Ar]:r.CLAMP_TO_EDGE,[of]:r.MIRRORED_REPEAT},Ht={[Fn]:r.NEAREST,[Pb]:r.NEAREST_MIPMAP_NEAREST,[Ql]:r.NEAREST_MIPMAP_LINEAR,[fi]:r.LINEAR,[Df]:r.LINEAR_MIPMAP_NEAREST,[os]:r.LINEAR_MIPMAP_LINEAR},qe={[Db]:r.NEVER,[Pm]:r.ALWAYS,[kb]:r.LESS,[Cm]:r.LEQUAL,[Fb]:r.EQUAL,[Rm]:r.GEQUAL,[Ub]:r.GREATER,[Ob]:r.NOTEQUAL};function Tt(I,T){if(T.type===Zi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===fi||T.magFilter===Df||T.magFilter===Ql||T.magFilter===os||T.minFilter===fi||T.minFilter===Df||T.minFilter===Ql||T.minFilter===os)&&Ye("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(I,r.TEXTURE_WRAP_S,Qe[T.wrapS]),r.texParameteri(I,r.TEXTURE_WRAP_T,Qe[T.wrapT]),(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)&&r.texParameteri(I,r.TEXTURE_WRAP_R,Qe[T.wrapR]),r.texParameteri(I,r.TEXTURE_MAG_FILTER,Ht[T.magFilter]),r.texParameteri(I,r.TEXTURE_MIN_FILTER,Ht[T.minFilter]),T.compareFunction&&(r.texParameteri(I,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(I,r.TEXTURE_COMPARE_FUNC,qe[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Fn||T.minFilter!==Ql&&T.minFilter!==os||T.type===Zi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){let $=e.get("EXT_texture_filter_anisotropic");r.texParameterf(I,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function yt(I,T){let $=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",B),V(T));let de=T.source,ue=y.get(de);ue===void 0&&(ue={},y.set(de,ue));let xe=re(T);if(xe!==I.__cacheKey){ue[xe]===void 0&&(ue[xe]={texture:r.createTexture(),usedTimes:0},c.memory.textures++,$=!0),ue[xe].usedTimes++;let Te=ue[I.__cacheKey];Te!==void 0&&(ue[I.__cacheKey].usedTimes--,Te.usedTimes===0&&ee(T)),I.__cacheKey=xe,I.__webglTexture=ue[xe].texture}return $}function dt(I,T,$){return Math.floor(Math.floor(I/$)/T)}function un(I,T,$,de){let xe=I.updateRanges;if(xe.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,$,de,T.data);else{xe.sort((U,le)=>U.start-le.start);let Te=0;for(let U=1;U<xe.length;U++){let le=xe[Te],ie=xe[U],we=le.start+le.count,ye=dt(ie.start,T.width,4),_e=dt(le.start,T.width,4);ie.start<=we+1&&ye===_e&&dt(ie.start+ie.count-1,T.width,4)===ye?le.count=Math.max(le.count,ie.start+ie.count-le.start):(++Te,xe[Te]=ie)}xe.length=Te+1;let oe=t.getParameter(r.UNPACK_ROW_LENGTH),ae=t.getParameter(r.UNPACK_SKIP_PIXELS),Me=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let U=0,le=xe.length;U<le;U++){let ie=xe[U],we=Math.floor(ie.start/4),ye=Math.ceil(ie.count/4),_e=we%T.width,He=Math.floor(we/T.width),ot=ye,pe=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,_e),t.pixelStorei(r.UNPACK_SKIP_ROWS,He),t.texSubImage2D(r.TEXTURE_2D,0,_e,He,ot,pe,$,de,T.data)}I.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,oe),t.pixelStorei(r.UNPACK_SKIP_PIXELS,ae),t.pixelStorei(r.UNPACK_SKIP_ROWS,Me)}}function qt(I,T,$){let de=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(de=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(de=r.TEXTURE_3D);let ue=yt(I,T),xe=T.source;t.bindTexture(de,I.__webglTexture,r.TEXTURE0+$);let Te=s.get(xe);if(xe.version!==Te.__version||ue===!0){if(t.activeTexture(r.TEXTURE0+$),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let pe=vt.getPrimaries(vt.workingColorSpace),Ge=T.colorSpace===ls?null:vt.getPrimaries(T.colorSpace),st=T.colorSpace===ls||pe===Ge?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,st)}t.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment);let ae=A(T.image,!1,o.maxTextureSize);ae=Xe(T,ae);let Me=l.convert(T.format,T.colorSpace),U=l.convert(T.type),le=N(T.internalFormat,Me,U,T.normalized,T.colorSpace,T.isVideoTexture);Tt(de,T);let ie,we=T.mipmaps,ye=T.isVideoTexture!==!0,_e=Te.__version===void 0||ue===!0,He=xe.dataReady,ot=P(T,ae);if(T.isDepthTexture)le=M(T.format===as,T.type),_e&&(ye?t.texStorage2D(r.TEXTURE_2D,1,le,ae.width,ae.height):t.texImage2D(r.TEXTURE_2D,0,le,ae.width,ae.height,0,Me,U,null));else if(T.isDataTexture)if(we.length>0){ye&&_e&&t.texStorage2D(r.TEXTURE_2D,ot,le,we[0].width,we[0].height);for(let pe=0,Ge=we.length;pe<Ge;pe++)ie=we[pe],ye?He&&t.texSubImage2D(r.TEXTURE_2D,pe,0,0,ie.width,ie.height,Me,U,ie.data):t.texImage2D(r.TEXTURE_2D,pe,le,ie.width,ie.height,0,Me,U,ie.data);T.generateMipmaps=!1}else ye?(_e&&t.texStorage2D(r.TEXTURE_2D,ot,le,ae.width,ae.height),He&&un(T,ae,Me,U)):t.texImage2D(r.TEXTURE_2D,0,le,ae.width,ae.height,0,Me,U,ae.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ye&&_e&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ot,le,we[0].width,we[0].height,ae.depth);for(let pe=0,Ge=we.length;pe<Ge;pe++)if(ie=we[pe],T.format!==Fi)if(Me!==null)if(ye){if(He)if(T.layerUpdates.size>0){let st=Um(ie.width,ie.height,T.format,T.type);for(let Ae of T.layerUpdates){let Pt=ie.data.subarray(Ae*st/ie.data.BYTES_PER_ELEMENT,(Ae+1)*st/ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,pe,0,0,Ae,ie.width,ie.height,1,Me,Pt)}}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,pe,0,0,0,ie.width,ie.height,ae.depth,Me,ie.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,pe,le,ie.width,ie.height,ae.depth,0,ie.data,0,0);else Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ye?He&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,pe,0,0,0,ie.width,ie.height,ae.depth,Me,U,ie.data):t.texImage3D(r.TEXTURE_2D_ARRAY,pe,le,ie.width,ie.height,ae.depth,0,Me,U,ie.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{ye&&_e&&t.texStorage2D(r.TEXTURE_2D,ot,le,we[0].width,we[0].height);for(let pe=0,Ge=we.length;pe<Ge;pe++)ie=we[pe],T.format!==Fi?Me!==null?ye?He&&t.compressedTexSubImage2D(r.TEXTURE_2D,pe,0,0,ie.width,ie.height,Me,ie.data):t.compressedTexImage2D(r.TEXTURE_2D,pe,le,ie.width,ie.height,0,ie.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ye?He&&t.texSubImage2D(r.TEXTURE_2D,pe,0,0,ie.width,ie.height,Me,U,ie.data):t.texImage2D(r.TEXTURE_2D,pe,le,ie.width,ie.height,0,Me,U,ie.data)}else if(T.isDataArrayTexture)if(ye){if(_e&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ot,le,ae.width,ae.height,ae.depth),He)if(T.layerUpdates.size>0){let pe=Um(ae.width,ae.height,T.format,T.type);for(let Ge of T.layerUpdates){let st=ae.data.subarray(Ge*pe/ae.data.BYTES_PER_ELEMENT,(Ge+1)*pe/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Ge,ae.width,ae.height,1,Me,U,st)}T.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Me,U,ae.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,le,ae.width,ae.height,ae.depth,0,Me,U,ae.data);else if(T.isData3DTexture)ye?(_e&&t.texStorage3D(r.TEXTURE_3D,ot,le,ae.width,ae.height,ae.depth),He&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Me,U,ae.data)):t.texImage3D(r.TEXTURE_3D,0,le,ae.width,ae.height,ae.depth,0,Me,U,ae.data);else if(T.isFramebufferTexture){if(_e)if(ye)t.texStorage2D(r.TEXTURE_2D,ot,le,ae.width,ae.height);else{let pe=ae.width,Ge=ae.height;for(let st=0;st<ot;st++)t.texImage2D(r.TEXTURE_2D,st,le,pe,Ge,0,Me,U,null),pe>>=1,Ge>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in r){let pe=r.canvas;if(pe.hasAttribute("layoutsubtree")||pe.setAttribute("layoutsubtree","true"),ae.parentNode!==pe){pe.appendChild(ae),_.add(T),pe.onpaint=Ge=>{let st=Ge.changedElements;for(let Ae of _)st.includes(Ae.image)&&(Ae.needsUpdate=!0)},pe.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,ae);else{let st=r.RGBA,Ae=r.RGBA,Pt=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,st,Ae,Pt,ae)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(we.length>0){if(ye&&_e){let pe=je(we[0]);t.texStorage2D(r.TEXTURE_2D,ot,le,pe.width,pe.height)}for(let pe=0,Ge=we.length;pe<Ge;pe++)ie=we[pe],ye?He&&t.texSubImage2D(r.TEXTURE_2D,pe,0,0,Me,U,ie):t.texImage2D(r.TEXTURE_2D,pe,le,Me,U,ie);T.generateMipmaps=!1}else if(ye){if(_e){let pe=je(ae);t.texStorage2D(r.TEXTURE_2D,ot,le,pe.width,pe.height)}He&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Me,U,ae)}else t.texImage2D(r.TEXTURE_2D,0,le,Me,U,ae);L(T)&&T.mipmapsAutoUpdate===!0&&R(de),Te.__version=xe.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function cn(I,T,$){if(T.image.length!==6)return;let de=yt(I,T),ue=T.source;t.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+$);let xe=s.get(ue);if(ue.version!==xe.__version||de===!0){t.activeTexture(r.TEXTURE0+$);let Te=vt.getPrimaries(vt.workingColorSpace),oe=T.colorSpace===ls?null:vt.getPrimaries(T.colorSpace),ae=T.colorSpace===ls||Te===oe?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let Me=T.isCompressedTexture||T.image[0].isCompressedTexture,U=T.image[0]&&T.image[0].isDataTexture,le=[];for(let Ae=0;Ae<6;Ae++)!Me&&!U?le[Ae]=A(T.image[Ae],!0,o.maxCubemapSize):le[Ae]=U?T.image[Ae].image:T.image[Ae],le[Ae]=Xe(T,le[Ae]);let ie=le[0],we=l.convert(T.format,T.colorSpace),ye=l.convert(T.type),_e=N(T.internalFormat,we,ye,T.normalized,T.colorSpace),He=T.isVideoTexture!==!0,ot=xe.__version===void 0||de===!0,pe=ue.dataReady,Ge=P(T,ie);Tt(r.TEXTURE_CUBE_MAP,T);let st;if(T.isDepthTexture){if(_e=M(T.format===as,T.type),ot)if(He)t.texStorage2D(r.TEXTURE_CUBE_MAP,1,_e,ie.width,ie.height);else for(let Ae=0;Ae<6;Ae++)t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,_e,ie.width,ie.height,0,we,ye,null)}else if(Me){He&&ot&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ge,_e,ie.width,ie.height);for(let Ae=0;Ae<6;Ae++){st=le[Ae].mipmaps;for(let Pt=0;Pt<st.length;Pt++){let mn=st[Pt];T.format!==Fi?we!==null?He?pe&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Pt,0,0,mn.width,mn.height,we,mn.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Pt,_e,mn.width,mn.height,0,mn.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Pt,0,0,mn.width,mn.height,we,ye,mn.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Pt,_e,mn.width,mn.height,0,we,ye,mn.data)}}}else{if(st=T.mipmaps,He&&ot){st.length>0&&Ge++;let Ae=je(le[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Ge,_e,Ae.width,Ae.height)}for(let Ae=0;Ae<6;Ae++)if(U){He?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,le[Ae].width,le[Ae].height,we,ye,le[Ae].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,_e,le[Ae].width,le[Ae].height,0,we,ye,le[Ae].data);for(let Pt=0;Pt<st.length;Pt++){let Si=st[Pt].image[Ae].image;He?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Pt+1,0,0,Si.width,Si.height,we,ye,Si.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Pt+1,_e,Si.width,Si.height,0,we,ye,Si.data)}}else{He?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,we,ye,le[Ae]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,_e,we,ye,le[Ae]);for(let Pt=0;Pt<st.length;Pt++){let mn=st[Pt];He?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Pt+1,0,0,we,ye,mn.image[Ae]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Pt+1,_e,we,ye,mn.image[Ae])}}}L(T)&&T.mipmapsAutoUpdate===!0&&R(r.TEXTURE_CUBE_MAP),xe.__version=ue.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function Vt(I,T,$,de,ue,xe){let Te=l.convert($.format,$.colorSpace),oe=l.convert($.type),ae=N($.internalFormat,Te,oe,$.normalized,$.colorSpace),Me=s.get(T),U=s.get($);if(U.__renderTarget=T,!Me.__hasExternalTextures){let le=Math.max(1,T.width>>xe),ie=Math.max(1,T.height>>xe);ue===r.TEXTURE_3D||ue===r.TEXTURE_2D_ARRAY?t.texImage3D(ue,xe,ae,le,ie,T.depth,0,Te,oe,null):t.texImage2D(ue,xe,ae,le,ie,0,Te,oe,null)}t.bindFramebuffer(r.FRAMEBUFFER,I),Ee(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,de,ue,U.__webglTexture,0,at(T)):(ue===r.TEXTURE_2D||ue>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,de,ue,U.__webglTexture,xe),t.bindFramebuffer(r.FRAMEBUFFER,null)}function jn(I,T,$){if(r.bindRenderbuffer(r.RENDERBUFFER,I),T.depthBuffer){let de=T.depthTexture,ue=de&&de.isDepthTexture?de.type:null,xe=M(T.stencilBuffer,ue),Te=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Ee(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,at(T),xe,T.width,T.height):$?r.renderbufferStorageMultisample(r.RENDERBUFFER,at(T),xe,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,xe,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Te,r.RENDERBUFFER,I)}else{let de=T.textures;for(let ue=0;ue<de.length;ue++){let xe=de[ue],Te=l.convert(xe.format,xe.colorSpace),oe=l.convert(xe.type),ae=N(xe.internalFormat,Te,oe,xe.normalized,xe.colorSpace);Ee(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,at(T),ae,T.width,T.height):$?r.renderbufferStorageMultisample(r.RENDERBUFFER,at(T),ae,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,ae,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Gt(I,T,$){let de=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ue=s.get(T.depthTexture);ue.__renderTarget=T;let xe=de?T.depthTexture.image[0]:T.depthTexture.image;(!ue.__webglTexture||xe.width!==T.width||xe.height!==T.height)&&(xe.width=T.width,xe.height=T.height,T.depthTexture.needsUpdate=!0),de?Ne(T.depthTexture,0):Pe(T.depthTexture,0);let Te=ue.__webglTexture,oe=at(T),ae=de?r.TEXTURE_CUBE_MAP_POSITIVE_X+$:r.TEXTURE_2D,Me=T.depthTexture.format===as?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(T.depthTexture.format===es)Ee(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Me,ae,Te,0,oe):r.framebufferTexture2D(r.FRAMEBUFFER,Me,ae,Te,0);else if(T.depthTexture.format===as)Ee(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Me,ae,Te,0,oe):r.framebufferTexture2D(r.FRAMEBUFFER,Me,ae,Te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function fn(I){let T=s.get(I),$=I.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==I.depthTexture){let de=I.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),de){let ue=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,de.removeEventListener("dispose",ue)};de.addEventListener("dispose",ue),T.__depthDisposeCallback=ue}T.__boundDepthTexture=de}if(I.depthTexture&&!T.__autoAllocateDepthBuffer)if($)for(let de=0;de<6;de++)Gt(T.__webglFramebuffer[de],I,de);else I.texture.mipmaps.length>0?Gt(T.__webglFramebuffer[0],I,0):Gt(T.__webglFramebuffer,I,0);else if($){T.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[de]),T.__webglDepthbuffer[de]===void 0)T.__webglDepthbuffer[de]=r.createRenderbuffer(),jn(T.__webglDepthbuffer[de],I,!1);else{let ue=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,xe=T.__webglDepthbuffer[de];r.bindRenderbuffer(r.RENDERBUFFER,xe),r.framebufferRenderbuffer(r.FRAMEBUFFER,ue,r.RENDERBUFFER,xe)}}else if(I.texture.mipmaps.length>0?t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),jn(T.__webglDepthbuffer,I,!1);else{let ue=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,xe=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,xe),r.framebufferRenderbuffer(r.FRAMEBUFFER,ue,r.RENDERBUFFER,xe)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function On(I,T,$){let de=s.get(I);T!==void 0&&Vt(de.__webglFramebuffer,I,I.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),$!==void 0&&fn(I)}function Zn(I){let T=I.texture,$=s.get(I),de=s.get(T);I.addEventListener("dispose",W),V(I);let ue=I.textures,xe=I.isWebGLCubeRenderTarget===!0,Te=ue.length>1;if(Te||(de.__webglTexture===void 0&&(de.__webglTexture=r.createTexture()),de.__version=T.version,c.memory.textures++),xe){$.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(T.mipmaps.length>0){$.__webglFramebuffer[oe]=[];for(let ae=0;ae<T.mipmaps.length;ae++)$.__webglFramebuffer[oe][ae]=r.createFramebuffer()}else $.__webglFramebuffer[oe]=r.createFramebuffer()}else{if(T.mipmaps.length>0){$.__webglFramebuffer=[];for(let oe=0;oe<T.mipmaps.length;oe++)$.__webglFramebuffer[oe]=r.createFramebuffer()}else $.__webglFramebuffer=r.createFramebuffer();if(Te)for(let oe=0,ae=ue.length;oe<ae;oe++){let Me=s.get(ue[oe]);Me.__webglTexture===void 0&&(Me.__webglTexture=r.createTexture(),c.memory.textures++)}if(I.samples>0&&Ee(I)===!1){$.__webglMultisampledFramebuffer=r.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let oe=0;oe<ue.length;oe++){let ae=ue[oe];$.__webglColorRenderbuffer[oe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,$.__webglColorRenderbuffer[oe]);let Me=l.convert(ae.format,ae.colorSpace),U=l.convert(ae.type),le=N(ae.internalFormat,Me,U,ae.normalized,ae.colorSpace,I.isXRRenderTarget===!0),ie=at(I);r.renderbufferStorageMultisample(r.RENDERBUFFER,ie,le,I.width,I.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.RENDERBUFFER,$.__webglColorRenderbuffer[oe])}r.bindRenderbuffer(r.RENDERBUFFER,null),I.depthBuffer&&($.__webglDepthRenderbuffer=r.createRenderbuffer(),jn($.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(xe){t.bindTexture(r.TEXTURE_CUBE_MAP,de.__webglTexture),Tt(r.TEXTURE_CUBE_MAP,T);for(let oe=0;oe<6;oe++)if(T.mipmaps.length>0)for(let ae=0;ae<T.mipmaps.length;ae++)Vt($.__webglFramebuffer[oe][ae],I,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ae);else Vt($.__webglFramebuffer[oe],I,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);L(T)?R(r.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}else if(Te){for(let oe=0,ae=ue.length;oe<ae;oe++){let Me=ue[oe],U=s.get(Me),le=r.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(le=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(le,U.__webglTexture),Tt(le,Me),Vt($.__webglFramebuffer,I,Me,r.COLOR_ATTACHMENT0+oe,le,0),L(Me)&&R(le)}t.unbindTexture()}else{let oe=r.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(oe=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(oe,de.__webglTexture),Tt(oe,T),T.mipmaps.length>0)for(let ae=0;ae<T.mipmaps.length;ae++)Vt($.__webglFramebuffer[ae],I,T,r.COLOR_ATTACHMENT0,oe,ae);else Vt($.__webglFramebuffer,I,T,r.COLOR_ATTACHMENT0,oe,0);L(T)?R(oe):T.mipmaps.length>0&&r.texParameteri(oe,r.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}I.depthBuffer&&fn(I)}function H(I){let T=I.textures;for(let $=0,de=T.length;$<de;$++){let ue=T[$];if(L(ue)&&ue.mipmapsAutoUpdate===!0){let xe=D(I),Te=s.get(ue).__webglTexture;t.bindTexture(xe,Te),R(xe),t.unbindTexture()}}}let zn=[];function Rt(I){if(I.samples>0){if(Ee(I)===!1){let T=I.textures,$=I.width,de=I.height,ue=r.COLOR_BUFFER_BIT,xe=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Te=s.get(I),oe=T.length>1;if(oe)for(let Me=0;Me<T.length;Me++)t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),I.texture.mipmaps.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Me=0;Me<T.length;Me++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ue|=r.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ue|=r.STENCIL_BUFFER_BIT)),oe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Te.__webglColorRenderbuffer[Me]);let U=s.get(T[Me]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,U,0)}r.blitFramebuffer(0,0,$,de,0,0,$,de,ue,r.NEAREST),p===!0&&(zn.length=0,zn.push(r.COLOR_ATTACHMENT0+Me),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&zn.push(xe),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,zn))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),oe)for(let Me=0;Me<T.length;Me++){t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.RENDERBUFFER,Te.__webglColorRenderbuffer[Me]);let U=s.get(T[Me]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.TEXTURE_2D,U,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&p){let T=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function at(I){return Math.min(o.maxSamples,I.samples)}function Ee(I){let T=s.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function dn(I){let T=c.render.frame;g.get(I)!==T&&(g.set(I,T),I.update())}function Xe(I,T){let $=I.colorSpace,de=I.format,ue=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||$!==vo&&$!==ls&&(vt.getTransfer($)===Ft?(de!==Fi||ue!==ri)&&Ye("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):tt("WebGLTextures: Unsupported texture color space:",$)),T}function je(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(m.width=I.naturalWidth||I.width,m.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(m.width=I.displayWidth,m.height=I.displayHeight):(m.width=I.width,m.height=I.height),m}this.allocateTextureUnit=Ve,this.resetTextureUnits=ce,this.getTextureUnits=he,this.setTextureUnits=Be,this.setTexture2D=Pe,this.setTexture2DArray=ke,this.setTexture3D=We,this.setTextureCube=Ne,this.rebindTextures=On,this.setupRenderTarget=Zn,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=Rt,this.setupDepthRenderbuffer=fn,this.setupFrameBufferTexture=Vt,this.useMultisampledRTT=Ee,this.dispose=Q}function nR(r,e){function t(s,o=ls){let l,c=vt.getTransfer(o);if(s===ri)return r.UNSIGNED_BYTE;if(s===Ff)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Uf)return r.UNSIGNED_SHORT_5_5_5_1;if(s===wm)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Tm)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===xm)return r.BYTE;if(s===Mm)return r.SHORT;if(s===Ha)return r.UNSIGNED_SHORT;if(s===kf)return r.INT;if(s===dr)return r.UNSIGNED_INT;if(s===Zi)return r.FLOAT;if(s===hr)return r.HALF_FLOAT;if(s===Em)return r.ALPHA;if(s===Am)return r.RGB;if(s===Fi)return r.RGBA;if(s===es)return r.DEPTH_COMPONENT;if(s===as)return r.DEPTH_STENCIL;if(s===Of)return r.RED;if(s===zf)return r.RED_INTEGER;if(s===Vs)return r.RG;if(s===Bf)return r.RG_INTEGER;if(s===Hf)return r.RGBA_INTEGER;if(s===eu||s===tu||s===nu||s===iu)if(c===Ft)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===eu)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===tu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===nu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===iu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===eu)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===tu)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===nu)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===iu)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Vf||s===Gf||s===Wf||s===Xf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===Vf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Gf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Wf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Xf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===qf||s===$f||s===Yf||s===jf||s===Zf||s===ru||s===Jf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===qf||s===$f)return c===Ft?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===Yf)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(s===jf)return l.COMPRESSED_R11_EAC;if(s===Zf)return l.COMPRESSED_SIGNED_R11_EAC;if(s===ru)return l.COMPRESSED_RG11_EAC;if(s===Jf)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Kf||s===Qf||s===ed||s===td||s===nd||s===id||s===rd||s===sd||s===od||s===ad||s===ld||s===ud||s===cd||s===fd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===Kf)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Qf)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ed)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===td)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===nd)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===id)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===rd)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===sd)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===od)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ad)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ld)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ud)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===cd)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===fd)return c===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===dd||s===hd||s===pd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===dd)return c===Ft?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===hd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===pd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===md||s===gd||s===su||s===vd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===md)return l.COMPRESSED_RED_RGTC1_EXT;if(s===gd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===su)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===vd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ro?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:t}}var iR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rR=`
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

}`,Jm=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let s=new Wl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,s=new ji({vertexShader:iR,fragmentShader:rR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ni(new _o(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Km=class extends Cr{constructor(e,t){super();let s=this,o=null,l=1,c=null,d="local-floor",p=1,m=null,g=null,_=null,b=null,y=null,x=null,C=typeof XRWebGLBinding<"u",S=new Jm,v={},A=t.getContextAttributes(),L=null,R=null,D=[],N=[],M=new ct,P=null,V=null,F=new ci;F.viewport=new Kt;let B=new ci;B.viewport=new Kt;let W=[F,B],Z=new Pf,O=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let Pe=D[re];return Pe===void 0&&(Pe=new Da,D[re]=Pe),Pe.getTargetRaySpace()},this.getControllerGrip=function(re){let Pe=D[re];return Pe===void 0&&(Pe=new Da,D[re]=Pe),Pe.getGripSpace()},this.getHand=function(re){let Pe=D[re];return Pe===void 0&&(Pe=new Da,D[re]=Pe),Pe.getHandSpace()};function se(re){let Pe=N.indexOf(re.inputSource);if(Pe===-1)return;let ke=D[Pe];ke!==void 0&&(ke.update(re.inputSource,re.frame,m||c),ke.dispatchEvent({type:re.type,data:re.inputSource}))}function ee(){o.removeEventListener("select",se),o.removeEventListener("selectstart",se),o.removeEventListener("selectend",se),o.removeEventListener("squeeze",se),o.removeEventListener("squeezestart",se),o.removeEventListener("squeezeend",se),o.removeEventListener("end",ee),o.removeEventListener("inputsourceschange",me);for(let re=0;re<D.length;re++){let Pe=N[re];Pe!==null&&(N[re]=null,D[re].disconnect(Pe))}O=null,Q=null,S.reset();for(let re in v)delete v[re];if(e.setRenderTarget(L),y=null,b=null,_=null,o=null,R=null,Ve.stop(),s.isPresenting=!1,e.setPixelRatio(P),e.setSize(M.width,M.height,!1),V!==null){let re=V.camera;re.fov=V.fov,re.zoom=V.zoom,re.updateProjectionMatrix(),V=null}s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){l=re,s.isPresenting===!0&&Ye("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){d=re,s.isPresenting===!0&&Ye("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||c},this.setReferenceSpace=function(re){m=re},this.getBaseLayer=function(){return b!==null?b:y},this.getBinding=function(){return _===null&&C&&(_=new XRWebGLBinding(o,t)),_},this.getFrame=function(){return x},this.getSession=function(){return o},this.setSession=async function(re){if(o=re,o!==null){if(L=e.getRenderTarget(),o.addEventListener("select",se),o.addEventListener("selectstart",se),o.addEventListener("selectend",se),o.addEventListener("squeeze",se),o.addEventListener("squeezestart",se),o.addEventListener("squeezeend",se),o.addEventListener("end",ee),o.addEventListener("inputsourceschange",me),A.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(M),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let ke=null,We=null,Ne=null;A.depth&&(Ne=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ke=A.stencil?as:es,We=A.stencil?Ro:dr);let Qe={colorFormat:t.RGBA8,depthFormat:Ne,scaleFactor:l};_=this.getBinding(),b=_.createProjectionLayer(Qe),o.updateRenderState({layers:[b]}),e.setPixelRatio(1),e.setSize(b.textureWidth,b.textureHeight,!1),R=new Di(b.textureWidth,b.textureHeight,{format:Fi,type:ri,depthTexture:new ss(b.textureWidth,b.textureHeight,We,void 0,void 0,void 0,void 0,void 0,void 0,ke),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1,storeMultisampledDepthBuffer:b.ignoreDepthValues===!1,storeMultisampledStencilBuffer:b.ignoreDepthValues===!1})}else{let ke={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(o,t,ke),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),R=new Di(y.framebufferWidth,y.framebufferHeight,{format:Fi,type:ri,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1,storeMultisampledDepthBuffer:y.ignoreDepthValues===!1,storeMultisampledStencilBuffer:y.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(p),m=null,c=await o.requestReferenceSpace(d),Ve.setContext(o),Ve.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function me(re){for(let Pe=0;Pe<re.removed.length;Pe++){let ke=re.removed[Pe],We=N.indexOf(ke);We>=0&&(N[We]=null,D[We].disconnect(ke))}for(let Pe=0;Pe<re.added.length;Pe++){let ke=re.added[Pe],We=N.indexOf(ke);if(We===-1){for(let Qe=0;Qe<D.length;Qe++)if(Qe>=N.length){N.push(ke),We=Qe;break}else if(N[Qe]===null){N[Qe]=ke,We=Qe;break}if(We===-1)break}let Ne=D[We];Ne&&Ne.connect(ke)}}function ne(re,Pe){Pe===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(Pe.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(o===null)return;let Pe=re.near,ke=re.far;S.texture!==null&&(S.depthNear>0&&(Pe=S.depthNear),S.depthFar>0&&(ke=S.depthFar)),Z.near=B.near=F.near=Pe,Z.far=B.far=F.far=ke,(O!==Z.near||Q!==Z.far)&&(o.updateRenderState({depthNear:Z.near,depthFar:Z.far}),O=Z.near,Q=Z.far),Z.layers.mask=re.layers.mask|6,F.layers.mask=Z.layers.mask&-5,B.layers.mask=Z.layers.mask&-3;let We=re.parent,Ne=Z.cameras;ne(Z,We);for(let Qe=0;Qe<Ne.length;Qe++)ne(Ne[Qe],We);Z.projectionMatrix.copy(F.projectionMatrix),Z.projectionMatrixInverse.copy(F.projectionMatrixInverse),V===null&&re.isPerspectiveCamera&&(V={camera:re,fov:re.fov,zoom:re.zoom}),ce(re,Z,We)};function ce(re,Pe,ke){ke===null?re.matrix.copy(Pe.matrixWorld):(re.matrix.copy(ke.matrixWorld),re.matrix.invert(),re.matrix.multiply(Pe.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(Pe.projectionMatrix),re.projectionMatrixInverse.copy(Pe.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=lf*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(b===null&&y===null))return p},this.setFoveation=function(re){p=re,b!==null&&(b.fixedFoveation=re),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=re)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(Z)},this.getCameraTexture=function(re){return v[re]};let he=null;function Be(re,Pe){if(g=Pe.getViewerPose(m||c),x=Pe,g!==null){let ke=g.views;y!==null&&(e.setRenderTargetFramebuffer(R,y.framebuffer),e.setRenderTarget(R));let We=!1;ke.length!==Z.cameras.length&&(Z.cameras.length=0,We=!0);for(let qe=0;qe<ke.length;qe++){let Tt=ke[qe],yt=null;if(y!==null)yt=y.getViewport(Tt);else{let un=_.getViewSubImage(b,Tt);yt=un.viewport,qe===0&&(e.setRenderTargetTextures(R,un.colorTexture,un.depthStencilTexture),e.setRenderTarget(R))}let dt=W[qe];dt===void 0&&(dt=new ci,dt.layers.enable(qe),dt.viewport=new Kt,W[qe]=dt),dt.matrix.fromArray(Tt.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(Tt.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(yt.x,yt.y,yt.width,yt.height),qe===0&&(Z.matrix.copy(dt.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),We===!0&&Z.cameras.push(dt)}let Ne=o.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&C){_=s.getBinding();let qe=_.getDepthInformation(ke[0]);qe&&qe.isValid&&qe.texture&&S.init(qe,o.renderState)}if(Ne&&Ne.includes("camera-access")&&C){e.state.unbindTexture(),_=s.getBinding();for(let qe=0;qe<ke.length;qe++){let Tt=ke[qe].camera;if(Tt){let yt=v[Tt];yt||(yt=new Wl,v[Tt]=yt);let dt=_.getCameraImage(Tt);yt.sourceTexture=dt}}}}for(let ke=0;ke<D.length;ke++){let We=N[ke],Ne=D[ke];We!==null&&Ne!==void 0&&Ne.update(We,Pe,m||c)}he&&he(re,Pe),Pe.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Pe}),x=null}let Ve=new g_;Ve.setAnimationLoop(Be),this.setAnimationLoop=function(re){he=re},this.dispose=function(){}}},sR=new Ot,E_=new nt;E_.set(-1,0,0,0,1,0,0,0,1);function oR(r,e){function t(S,v){S.matrixAutoUpdate===!0&&S.updateMatrix(),v.value.copy(S.matrix)}function s(S,v){v.color.getRGB(S.fogColor.value,Dm(r)),v.isFog?(S.fogNear.value=v.near,S.fogFar.value=v.far):v.isFogExp2&&(S.fogDensity.value=v.density)}function o(S,v,A,L,R){v.isNodeMaterial?v.uniformsNeedUpdate=!1:v.isMeshBasicMaterial?l(S,v):v.isMeshLambertMaterial?(l(S,v),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(l(S,v),_(S,v)):v.isMeshPhongMaterial?(l(S,v),g(S,v),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(l(S,v),b(S,v),v.isMeshPhysicalMaterial&&y(S,v,R)):v.isMeshMatcapMaterial?(l(S,v),x(S,v)):v.isMeshDepthMaterial?l(S,v):v.isMeshDistanceMaterial?(l(S,v),C(S,v)):v.isMeshNormalMaterial?l(S,v):v.isLineBasicMaterial?(c(S,v),v.isLineDashedMaterial&&d(S,v)):v.isPointsMaterial?p(S,v,A,L):v.isSpriteMaterial?m(S,v):v.isShadowMaterial?(S.color.value.copy(v.color),S.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(S,v){S.opacity.value=v.opacity,v.color&&S.diffuse.value.copy(v.color),v.emissive&&S.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(S.map.value=v.map,t(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,t(v.alphaMap,S.alphaMapTransform)),v.bumpMap&&(S.bumpMap.value=v.bumpMap,t(v.bumpMap,S.bumpMapTransform),S.bumpScale.value=v.bumpScale,v.side===hi&&(S.bumpScale.value*=-1)),v.normalMap&&(S.normalMap.value=v.normalMap,t(v.normalMap,S.normalMapTransform),S.normalScale.value.copy(v.normalScale),v.side===hi&&S.normalScale.value.negate()),v.displacementMap&&(S.displacementMap.value=v.displacementMap,t(v.displacementMap,S.displacementMapTransform),S.displacementScale.value=v.displacementScale,S.displacementBias.value=v.displacementBias),v.emissiveMap&&(S.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,S.emissiveMapTransform)),v.specularMap&&(S.specularMap.value=v.specularMap,t(v.specularMap,S.specularMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest);let A=e.get(v),L=A.envMap,R=A.envMapRotation;L&&(S.envMap.value=L,S.envMapRotation.value.setFromMatrix4(sR.makeRotationFromEuler(R)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(E_),S.reflectivity.value=v.reflectivity,S.ior.value=v.ior,S.refractionRatio.value=v.refractionRatio),v.lightMap&&(S.lightMap.value=v.lightMap,S.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,S.lightMapTransform)),v.aoMap&&(S.aoMap.value=v.aoMap,S.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,S.aoMapTransform))}function c(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,v.map&&(S.map.value=v.map,t(v.map,S.mapTransform))}function d(S,v){S.dashSize.value=v.dashSize,S.totalSize.value=v.dashSize+v.gapSize,S.scale.value=v.scale}function p(S,v,A,L){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.size.value=v.size*A,S.scale.value=L*.5,v.map&&(S.map.value=v.map,t(v.map,S.uvTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,t(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function m(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.rotation.value=v.rotation,v.map&&(S.map.value=v.map,t(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,t(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function g(S,v){S.specular.value.copy(v.specular),S.shininess.value=Math.max(v.shininess,1e-4)}function _(S,v){v.gradientMap&&(S.gradientMap.value=v.gradientMap)}function b(S,v){S.metalness.value=v.metalness,v.metalnessMap&&(S.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,S.metalnessMapTransform)),S.roughness.value=v.roughness,v.roughnessMap&&(S.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,S.roughnessMapTransform)),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)}function y(S,v,A){S.ior.value=v.ior,v.diffuseRoughness>0&&(S.diffuseRoughness.value=v.diffuseRoughness,v.diffuseRoughnessMap&&(S.diffuseRoughnessMap.value=v.diffuseRoughnessMap,t(v.diffuseRoughnessMap,S.diffuseRoughnessMapTransform))),v.sheen>0&&(S.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),S.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(S.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,S.sheenColorMapTransform)),v.sheenRoughnessMap&&(S.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,S.sheenRoughnessMapTransform))),v.clearcoat>0&&(S.clearcoat.value=v.clearcoat,S.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(S.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,S.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(S.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===hi&&S.clearcoatNormalScale.value.negate())),v.dispersion>0&&(S.dispersion.value=v.dispersion),v.retroreflectivity>0&&(S.retroreflectivity.value=v.retroreflectivity),v.iridescence>0&&(S.iridescence.value=v.iridescence,S.iridescenceIOR.value=v.iridescenceIOR,S.iridescenceThicknessMinimum.value=v.iridescenceThicknessMinimum,S.iridescenceThicknessMaximum.value=v.iridescenceThicknessMaximum,v.iridescenceMap&&(S.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,S.iridescenceMapTransform)),v.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),v.transmission>0&&(S.transmission.value=v.transmission,S.transmissionSamplerMap.value=A.texture,S.transmissionSamplerSize.value.set(A.width,A.height),v.transmissionMap&&(S.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,S.transmissionMapTransform)),S.thickness.value=v.thickness,v.thicknessMap&&(S.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=v.attenuationDistance,S.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(S.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(S.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=v.specularIntensity,S.specularColor.value.copy(v.specularColor),v.specularColorMap&&(S.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,S.specularColorMapTransform)),v.specularIntensityMap&&(S.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,S.specularIntensityMapTransform))}function x(S,v){v.matcap&&(S.matcap.value=v.matcap)}function C(S,v){let A=e.get(v).light;S.referencePosition.value.setFromMatrixPosition(A.matrixWorld),S.nearDistance.value=A.shadow.camera.near,S.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:o}}function aR(r,e,t,s){let o={},l={};function c(A,L){let R=L.program;s.uniformBlockBinding(A,R,o[A.id])}function d(A,L){let R=o[A.id];R===void 0&&(x(A),R=p(A),o[A.id]=R,A.addEventListener("dispose",S));let D=L.program;s.updateUBOMapping(A,D);let N=e.render.frame;l[A.id]!==N&&(m(A),l[A.id]=N)}function p(A){let L=r.createBuffer(),R=A.__size,D=A.usage;return r.bindBuffer(r.UNIFORM_BUFFER,L),r.bufferData(r.UNIFORM_BUFFER,R,D),r.bindBuffer(r.UNIFORM_BUFFER,null),L}function m(A){let L=o[A.id],R=A.uniforms,D=A.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let N=0,M=R.length;N<M;N++){let P=R[N];if(Array.isArray(P))for(let V=0,F=P.length;V<F;V++)g(P[V],N,V,D);else g(P,N,0,D)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function g(A,L,R,D){if(b(A,L,R,D)===!0){let N=A.__offset,M=A.value;if(Array.isArray(M)){let P=0;for(let V=0;V<M.length;V++){let F=M[V],B=C(F,!0);_(F,A.__data,P),P+=B.storage/Float32Array.BYTES_PER_ELEMENT}}else _(M,A.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,N,A.__data)}}function _(A,L,R){typeof A=="number"||typeof A=="boolean"?L[R]=A:A.isMatrix3?(L[R]=A.elements[0],L[R+1]=A.elements[1],L[R+2]=A.elements[2],L[R+3]=0,L[R+4]=A.elements[3],L[R+5]=A.elements[4],L[R+6]=A.elements[5],L[R+7]=0,L[R+8]=A.elements[6],L[R+9]=A.elements[7],L[R+10]=A.elements[8],L[R+11]=0):ArrayBuffer.isView(A)?L.set(A.subarray(0,L.length-R),R):A.toArray(L,R)}function b(A,L,R,D){let N=A.value,M=L+"_"+R;if(Array.isArray(N)){D[M]===void 0&&(D[M]=[]);let P=D[M],V=!1;for(let F=0;F<N.length;F++)y(N[F],P,F)===!0&&(V=!0);return V}return y(N,D,M)}function y(A,L,R){if(L[R]===void 0)return typeof A=="number"||typeof A=="boolean"?L[R]=A:ArrayBuffer.isView(A)?L[R]=A.slice():L[R]=A.clone(),!0;{let D=L[R];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return L[R]=A,!0}else{if(ArrayBuffer.isView(A))return!0;if(D.equals(A)===!1)return D.copy(A),!0}}return!1}function x(A){let L=A.uniforms,R=0,D=16;for(let M=0,P=L.length;M<P;M++){let V=Array.isArray(L[M])?L[M]:[L[M]];for(let F=0,B=V.length;F<B;F++){let W=V[F],Z=Array.isArray(W.value)?W.value:[W.value],O=Array.isArray(L[M])||Array.isArray(W.value),Q=R;for(let ee=0,me=Z.length;ee<me;ee++){let ne=Z[ee],ce=C(ne,O),he=R%D,Be=he%ce.boundary,Ve=he+Be;R+=Be,Ve!==0&&D-Ve<ce.storage&&(R+=D-Ve),ee===0&&(Q=R),R+=ce.storage}let se=W.type==="int"?Int32Array:W.type==="uint"?Uint32Array:Float32Array;W.__data=new se((R-Q)/Float32Array.BYTES_PER_ELEMENT),W.__offset=Q}}let N=R%D;return N>0&&(R+=D-N),A.__size=R,A.__cache={},this}function C(A,L){let R={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(R.boundary=4,R.storage=4):A.isVector2?(R.boundary=8,R.storage=8):A.isVector3||A.isColor?(R.boundary=16,R.storage=12):A.isVector4?(R.boundary=16,R.storage=16):A.isMatrix3?(R.boundary=16,R.storage=48):A.isMatrix4?(R.boundary=16,R.storage=64):A.isTexture?Ye("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(A)?(R.boundary=16,R.storage=A.byteLength):Ye("WebGLRenderer: Unsupported uniform value type.",A),L===!0&&(R.boundary=16,R.storage=Math.ceil(R.storage/16)*16),R}function S(A){let L=A.target;L.removeEventListener("dispose",S),r.deleteBuffer(o[L.id]),delete o[L.id],delete l[L.id]}function v(){for(let A in o)r.deleteBuffer(o[A]);o={},l={}}return{bind:c,update:d,dispose:v}}var lR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Dr=null;function uR(){return Dr===null&&(Dr=new Ol(lR,16,16,Vs,hr),Dr.name="DFG_LUT",Dr.minFilter=fi,Dr.magFilter=fi,Dr.wrapS=Ar,Dr.wrapT=Ar,Dr.generateMipmaps=!1,Dr.needsUpdate=!0),Dr}var xd=class{constructor(e={}){let{canvas:t=Bb(),context:s=null,depth:o=!0,stencil:l=!1,alpha:c=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:b=!1,outputBufferType:y=ri}=e;this.isWebGLRenderer=!0;let x;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=s.getContextAttributes().alpha}else x=c;let C=y,S=new Set([Hf,Bf,zf]),v=new Set([ri,dr,Ha,Ro,Ff,Uf]),A=new Uint32Array(4),L=new Int32Array(4),R={textures:[],min:[],max:[],resolution:[]},D=null,N=null,M=[],P=[],V=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let F=this,B=!1,W=null,Z=null,O=null,Q=null;this._outputColorSpace=En;let se=0,ee=0,me=null,ne=-1,ce=null,he=new Kt,Be=new Kt,Ve=null,re=new Ke(0),Pe=0,ke=t.width,We=t.height,Ne=1,Qe=null,Ht=null,qe=new Kt(0,0,ke,We),Tt=new Kt(0,0,ke,We),yt=!1,dt=new Fs,un=new df,qt=!1,cn=!1,Vt=new Ot,jn=new X,Gt=new Kt,fn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},On=!1;function Zn(){return me===null?Ne:1}let H=s;function zn(E,z){return t.getContext(E,z)}let Rt,at,Ee,dn,Xe,je,I,T,$,de,ue,xe,Te,oe,ae,Me,U,le,ie,we,ye,_e,He;try{let E={alpha:!0,depth:o,stencil:l,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ge,!1),t.addEventListener("webglcontextrestored",st,!1),t.addEventListener("webglcontextcreationerror",Ae,!1),H===null){let z="webgl2";if(H=zn(z,E),H===null)throw zn(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ot()}catch(E){throw t.removeEventListener("webglcontextlost",Ge,!1),t.removeEventListener("webglcontextrestored",st,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),tt("WebGLRenderer: "+E.message),E}function ot(){Rt=new _A(H),Rt.init(),ye=new nR(H,Rt),at=new uA(H,Rt,e,ye),Ee=new eR(H,Rt),at.reversedDepthBuffer&&b&&Ee.buffers.depth.setReversed(!0),Z=H.createFramebuffer(),O=H.createFramebuffer(),Q=H.createFramebuffer(),dn=new MA(H),Xe=new BC,je=new tR(H,Rt,Ee,Xe,at,ye,dn),I=new bA(F),T=new Tw(H),_e=new aA(H,T),$=new SA(H,T,dn,_e),de=new TA(H,$,T,_e,dn),le=new wA(H,at,je),ae=new cA(Xe),ue=new zC(F,I,Rt,at,_e,ae),xe=new oR(F,Xe),Te=new VC,oe=new YC(Rt),U=new oA(F,I,Ee,de,x,p),Me=new QC(F,de,at),He=new aR(H,dn,at,Ee),ie=new lA(H,Rt,dn),we=new xA(H,Rt,dn),dn.programs=ue.programs,F.capabilities=at,F.extensions=Rt,F.properties=Xe,F.renderLists=Te,F.shadowMap=Me,F.state=Ee,F.info=dn}C!==ri&&(V=new AA(C,t.width,t.height,d,o,l));let pe=new Km(F,H);this.xr=pe,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let E=Rt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Rt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Ne},this.setPixelRatio=function(E){E!==void 0&&(Ne=E,this.setSize(ke,We,!1))},this.getSize=function(E){return E.set(ke,We)},this.setSize=function(E,z,J=!0){if(pe.isPresenting){Ye("WebGLRenderer: Can't change size while VR device is presenting.");return}ke=E,We=z,t.width=Math.floor(E*Ne),t.height=Math.floor(z*Ne),J===!0&&(t.style.width=E+"px",t.style.height=z+"px"),V!==null&&V.setSize(t.width,t.height),this.setViewport(0,0,E,z)},this.getDrawingBufferSize=function(E){return E.set(ke*Ne,We*Ne).floor()},this.setDrawingBufferSize=function(E,z,J){ke=E,We=z,Ne=J,t.width=Math.floor(E*J),t.height=Math.floor(z*J),this.setViewport(0,0,E,z)},this.setEffects=function(E){if(C===ri){tt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let z=0;z<E.length;z++)if(E[z].isOutputPass===!0){Ye("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}V.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(he)},this.getViewport=function(E){return E.copy(qe)},this.setViewport=function(E,z,J,q){E.isVector4?qe.set(E.x,E.y,E.z,E.w):qe.set(E,z,J,q),Ee.viewport(he.copy(qe).multiplyScalar(Zn()).round())},this.getScissor=function(E){return E.copy(Tt)},this.setScissor=function(E,z,J,q){E.isVector4?Tt.set(E.x,E.y,E.z,E.w):Tt.set(E,z,J,q),Ee.scissor(Be.copy(Tt).multiplyScalar(Zn()).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(E){Ee.setScissorTest(yt=E)},this.setOpaqueSort=function(E){Qe=E},this.setTransparentSort=function(E){Ht=E},this.getClearColor=function(E){return E.copy(U.getClearColor())},this.setClearColor=function(){U.setClearColor(...arguments)},this.getClearAlpha=function(){return U.getClearAlpha()},this.setClearAlpha=function(){U.setClearAlpha(...arguments)},this.clear=function(E=!0,z=!0,J=!0){let q=0;if(E){let Y=!1;if(me!==null){let be=me.texture.format;Y=S.has(be)}if(Y){let be=me.texture.type,Re=v.has(be),Se=U.getClearColor(),Ie=U.getClearAlpha(),ze=Se.r,Fe=Se.g,ut=Se.b;Re?(A[0]=ze,A[1]=Fe,A[2]=ut,A[3]=Ie,H.clearBufferuiv(H.COLOR,0,A)):(L[0]=ze,L[1]=Fe,L[2]=ut,L[3]=Ie,H.clearBufferiv(H.COLOR,0,L))}else q|=H.COLOR_BUFFER_BIT}z&&(q|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(q|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&H.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),W=E},this.dispose=function(){t.removeEventListener("webglcontextlost",Ge,!1),t.removeEventListener("webglcontextrestored",st,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),U.dispose(),Te.dispose(),oe.dispose(),je.dispose(),Xe.dispose(),I.dispose(),de.dispose(),$.dispose(),_e.dispose(),He.dispose(),ue.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",$s),pe.removeEventListener("sessionend",Ys),er.stop()};function Ge(E){E.preventDefault(),Nm("WebGLRenderer: Context Lost."),B=!0}function st(){Nm("WebGLRenderer: Context Restored."),B=!1;let E=dn.autoReset,z=Me.enabled,J=Me.autoUpdate,q=Me.needsUpdate,Y=Me.type;ot(),dn.autoReset=E,Me.enabled=z,Me.autoUpdate=J,Me.needsUpdate=q,Me.type=Y}function Ae(E){tt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Pt(E){let z=E.target;z.removeEventListener("dispose",Pt),mn(z)}function mn(E){Si(E),Xe.remove(E)}function Si(E){let z=Xe.get(E).programs;z!==void 0&&(z.forEach(function(J){ue.releaseProgram(J)}),E.isShaderMaterial&&ue.releaseShaderCache(E))}this.renderBufferDirect=function(E,z,J,q,Y,be){z===null&&(z=fn);let Re=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,Se=Js(E,z,J,q,Y);Ee.setMaterial(q,Re);let Ie=J.index,ze=1;if(q.wireframe===!0){if(Ie=$.getWireframeAttribute(J),Ie===void 0)return;ze=2}let Fe=J.drawRange,ut=J.attributes.position,Ue=Fe.start*ze,ht=(Fe.start+Fe.count)*ze;be!==null&&(Ue=Math.max(Ue,be.start*ze),ht=Math.min(ht,(be.start+be.count)*ze)),Ie!==null?(Ue=Math.max(Ue,0),ht=Math.min(ht,Ie.count)):ut!=null&&(Ue=Math.max(Ue,0),ht=Math.min(ht,ut.count));let tn=ht-Ue;if(tn<0||tn===1/0)return;_e.setup(Y,q,Se,J,Ie);let zt,Lt=ie;if(Ie!==null&&(zt=T.get(Ie),Lt=we,Lt.setIndex(zt)),Y.isMesh)q.wireframe===!0?(Ee.setLineWidth(q.wireframeLinewidth*Zn()),Lt.setMode(H.LINES)):Lt.setMode(H.TRIANGLES);else if(Y.isLine){let _n=q.linewidth;_n===void 0&&(_n=1),Ee.setLineWidth(_n*Zn()),Y.isLineSegments?Lt.setMode(H.LINES):Y.isLineLoop?Lt.setMode(H.LINE_LOOP):Lt.setMode(H.LINE_STRIP)}else Y.isPoints?Lt.setMode(H.POINTS):Y.isSprite&&Lt.setMode(H.TRIANGLES);if(Y.isBatchedMesh)if(Rt.get("WEBGL_multi_draw"))Lt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let _n=Y._multiDrawStarts,Oe=Y._multiDrawCounts,Dt=Y._multiDrawCount,$e=Ie?T.get(Ie).bytesPerElement:1,Ui=Xe.get(q).currentProgram.getUniforms();for(let hn=0;hn<Dt;hn++)Ui.setValue(H,"_gl_DrawID",hn),Lt.render(_n[hn]/$e,Oe[hn])}else if(Y.isInstancedMesh)Lt.renderInstances(Ue,tn,Y.count);else if(J.isInstancedBufferGeometry){let _n=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Oe=Math.min(J.instanceCount,_n);Lt.renderInstances(Ue,tn,Oe)}else Lt.render(Ue,tn)};function Qi(E,z,J,q){W!==null&&E.isNodeMaterial&&W.setObject(q,E),qt===!0&&ae.setState(E,J,!1),E.transparent===!0&&E.side===Lr&&E.forceSinglePass===!1?(E.side=hi,E.needsUpdate=!0,mi(E,z,q),E.side=Hs,E.needsUpdate=!0,mi(E,z,q),E.side=Lr):mi(E,z,q)}this.compile=function(E,z,J=null){J===null&&(J=E),W!==null&&W.renderStart(E,z,J),N=oe.get(J),N.init(z),P.push(N),J.traverseVisible(function(Y){Y.isLight&&Y.layers.test(z.layers)&&(N.pushLight(Y),Y.castShadow&&N.pushShadow(Y))}),E!==J&&E.traverseVisible(function(Y){Y.isLight&&Y.layers.test(z.layers)&&(N.pushLight(Y),Y.castShadow&&N.pushShadow(Y))}),N.setupLights(),W!==null&&W.updateLights(N.state.lightsArray),cn=this.localClippingEnabled,qt=ae.init(this.clippingPlanes,cn),qt===!0&&ae.setGlobalState(this.clippingPlanes,z),W!==null&&Me.render(N.state.shadowsArray,J,z);let q=new Set;return E.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let be=Y.material;if(be)if(Array.isArray(be))for(let Re=0;Re<be.length;Re++){let Se=be[Re];Qi(Se,J,z,Y),q.add(Se)}else Qi(be,J,z,Y),q.add(be)}),N=P.pop(),W!==null&&W.renderEnd(),q},this.compileAsync=function(E,z,J=null){let q=this.compile(E,z,J);return new Promise(Y=>{function be(){if(q.forEach(function(Re){let Ie=Xe.get(Re).currentProgram;(Ie===void 0||Ie.isReady())&&q.delete(Re)}),q.size===0){Y(E);return}setTimeout(be,10)}Rt.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let ds=null;function Mu(E){ds&&ds(E)}function $s(){er.stop()}function Ys(){er.start()}let er=new g_;er.setAnimationLoop(Mu),typeof self<"u"&&er.setContext(self),this.setAnimationLoop=function(E){ds=E,pe.setAnimationLoop(E),E===null?er.stop():er.start()},pe.addEventListener("sessionstart",$s),pe.addEventListener("sessionend",Ys),this.render=function(E,z){if(z!==void 0&&z.isCamera!==!0){tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;W!==null&&W.renderStart(E,z);let J=pe.enabled===!0&&pe.isPresenting===!0,q=V!==null&&(me===null||J)&&V.begin(F,me);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(V===null||V.isCompositing()===!1)&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(z),z=pe.getCamera()),E.isScene===!0&&E.onBeforeRender(F,E,z,me),N=oe.get(E,P.length),N.init(z),N.state.textureUnits=je.getTextureUnits(),P.push(N),Vt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),z.isArrayCamera?un.setFromArrayCamera(z):dt.setFromProjectionMatrix(Vt,$i,z.reversedDepth),cn=this.localClippingEnabled,qt=ae.init(this.clippingPlanes,cn),D=Te.get(E,M.length),D.init(),M.push(D),this.info.render.frame++,pe.enabled===!0&&pe.isPresenting===!0){let Re=F.xr.getDepthSensingMesh();Re!==null&&tr(Re,z,-1/0,F.sortObjects)}tr(E,z,0,F.sortObjects),D.finish(),W!==null&&W.updateLights(N.state.lightsArray),F.sortObjects===!0&&D.sort(Qe,Ht),On=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,On&&U.addToRenderList(D,E),this.info.autoReset===!0&&this.info.reset(),qt===!0&&ae.beginShadows();let Y=N.state.shadowsArray;if(Me.render(Y,E,z),qt===!0&&ae.endShadows(),(q&&V.hasRenderPass())===!1){let Re=D.opaque,Se=D.transmissive;if(N.setupLights(),z.isArrayCamera){let Ie=z.cameras;if(Se.length>0)for(let ze=0,Fe=Ie.length;ze<Fe;ze++){let ut=Ie[ze];js(Re,Se,E,ut)}On&&U.render(E);for(let ze=0,Fe=Ie.length;ze<Fe;ze++){let ut=Ie[ze];Za(D,E,ut,ut.viewport)}}else Se.length>0&&js(Re,Se,E,z),On&&U.render(E),Za(D,E,z)}me!==null&&ee===0&&(je.updateMultisampleRenderTarget(me),je.updateRenderTargetMipmap(me)),q&&V.end(F),E.isScene===!0&&E.onAfterRender(F,E,z),_e.resetDefaultState(),ne=-1,ce=null,P.pop(),P.length>0?(N=P[P.length-1],je.setTextureUnits(N.state.textureUnits),qt===!0&&ae.setGlobalState(F.clippingPlanes,N.state.camera)):N=null,M.pop(),M.length>0?D=M[M.length-1]:D=null,W!==null&&W.renderEnd()};function tr(E,z,J,q){if(E.visible===!1)return;if(E.layers.test(z.layers)){if(E.isGroup)J=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(z);else if(E.isLight)N.pushLight(E),E.castShadow&&N.pushShadow(E);else if(E.isSprite){let Re=z.isArrayCamera?un:dt;if(!E.frustumCulled||E.intersectsFrustum(Re)){q&&Gt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Vt);let Se=de.update(E),Ie=E.material;Ie.visible&&D.push(E,Se,Ie,J,Gt.z,null,z)}}else if(E.isMesh||E.isLine||E.isPoints){let Re=z.isArrayCamera?un:dt;if(!E.frustumCulled||E.intersectsFrustum(Re)){let Se=de.update(E),Ie=E.material;if(q&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Gt.copy(E.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Gt.copy(Se.boundingSphere.center)),Gt.applyMatrix4(E.matrixWorld).applyMatrix4(Vt)),Array.isArray(Ie)){let ze=Se.groups;for(let Fe=0,ut=ze.length;Fe<ut;Fe++){let Ue=ze[Fe],ht=Ie[Ue.materialIndex];ht&&ht.visible&&D.push(E,Se,ht,J,Gt.z,Ue,z)}}else Ie.visible&&D.push(E,Se,Ie,J,Gt.z,null,z)}}}let be=E.children;for(let Re=0,Se=be.length;Re<Se;Re++)tr(be[Re],z,J,q)}function Za(E,z,J,q){let{opaque:Y,transmissive:be,transparent:Re}=E;N.setupLightsView(J),qt===!0&&ae.setGlobalState(F.clippingPlanes,J),q&&Ee.viewport(he.copy(q)),Y.length>0&&hs(Y,z,J),be.length>0&&hs(be,z,J),Re.length>0&&hs(Re,z,J),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function js(E,z,J,q){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[q.id]===void 0){let Ue=Rt.has("EXT_color_buffer_half_float")||Rt.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[q.id]=new Di(1,1,{generateMipmaps:!0,type:Ue?hr:ri,minFilter:os,samples:Math.max(4,at.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:vt.workingColorSpace})}let be=N.state.transmissionRenderTarget[q.id],Re=q.viewport||he;be.setSize(Re.z*F.transmissionResolutionScale,Re.w*F.transmissionResolutionScale);let Se=F.getRenderTarget(),Ie=F.getActiveCubeFace(),ze=F.getActiveMipmapLevel();F.setRenderTarget(be),F.getClearColor(re),Pe=F.getClearAlpha(),Pe<1&&F.setClearColor(16777215,.5),F.clear(),On&&U.render(J);let Fe=F.toneMapping;F.toneMapping=ii;let ut=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),N.setupLightsView(q),qt===!0&&ae.setGlobalState(F.clippingPlanes,q),hs(E,J,q),je.updateMultisampleRenderTarget(be),je.updateRenderTargetMipmap(be),Rt.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let ht=0,tn=z.length;ht<tn;ht++){let zt=z[ht],{object:Lt,geometry:_n,material:Oe,group:Dt}=zt;if(Oe.side===Lr&&Lt.layers.test(q.layers)){let $e=Oe.side;Oe.side=hi,Oe.needsUpdate=!0,Do(Lt,J,q,_n,Oe,Dt),Oe.side=$e,Oe.needsUpdate=!0,Ue=!0}}Ue===!0&&(je.updateMultisampleRenderTarget(be),je.updateRenderTargetMipmap(be))}F.setRenderTarget(Se,Ie,ze),F.setClearColor(re,Pe),ut!==void 0&&(q.viewport=ut),F.toneMapping=Fe}function hs(E,z,J){let q=z.isScene===!0?z.overrideMaterial:null;for(let Y=0,be=E.length;Y<be;Y++){let Re=E[Y],{object:Se,geometry:Ie,group:ze}=Re,Fe=Re.material;Fe.allowOverride===!0&&q!==null&&(Fe=q),Se.layers.test(J.layers)&&Do(Se,z,J,Ie,Fe,ze)}}function Do(E,z,J,q,Y,be){W!==null&&Y.isNodeMaterial&&W.setObject(E,Y),E.onBeforeRender(F,z,J,q,Y,be),E.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),Y.onBeforeRender(F,z,J,q,E,be),Y.transparent===!0&&Y.side===Lr&&Y.forceSinglePass===!1?(Y.side=hi,Y.needsUpdate=!0,F.renderBufferDirect(J,z,q,Y,E,be),Y.side=Hs,Y.needsUpdate=!0,F.renderBufferDirect(J,z,q,Y,E,be),Y.side=Lr):F.renderBufferDirect(J,z,q,Y,E,be),E.onAfterRender(F,z,J,q,Y,be)}function nr(E){let z=0;for(let J of E)J.texture!==null&&z++;return z}function mi(E,z,J){z.isScene!==!0&&(z=fn);let q=Xe.get(E),Y=N.state.lights,be=N.state.shadowsArray,Re=Y.state.version,Se=ue.getParameters(E,Y.state,be,z,J,N.state.lightProbeGridArray),Ie=ue.getProgramCacheKey(Se),ze=q.programs;q.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?z.environment:null,q.fog=z.fog;let Fe=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;q.envMap=I.get(E.envMap||q.environment,Fe),q.envMapRotation=q.environment!==null&&E.envMap===null?z.environmentRotation:E.envMapRotation,ze===void 0&&(E.addEventListener("dispose",Pt),ze=new Map,q.programs=ze,q.programVariants=new Map);let ut=ze.get(Ie);if(ut!==void 0){if(q.currentProgram===ut&&q.lightsStateVersion===Re)return ps(E,Se),ut}else Se.uniforms=ue.getUniforms(E),W!==null&&E.isNodeMaterial&&W.build(E,J,Se),E.onBeforeCompile(Se,F),ut=ue.acquireProgram(Se,Ie),ze.set(Ie,ut),q.uniforms=Se.uniforms;let Ue=q.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ue.clippingPlanes=ae.uniform),ps(E,Se),q.needsLights=Tu(E),q.lightsStateVersion=Re,q.needsLights&&(Ue.ambientLightColor.value=Y.state.ambient,Ue.lightProbe.value=Y.state.probe,Ue.sunLights.value=Y.state.sun,Ue.sunLightShadows.value=Y.state.sunShadow,Ue.directionalLights.value=Y.state.directional,Ue.directionalLightShadows.value=Y.state.directionalShadow,Ue.spotLights.value=Y.state.spot,Ue.spotLightShadows.value=Y.state.spotShadow,Ue.rectAreaLights.value=Y.state.rectArea,Ue.ltc_1.value=Y.state.rectAreaLTC1,Ue.ltc_2.value=Y.state.rectAreaLTC2,Ue.pointLights.value=Y.state.point,Ue.pointLightShadows.value=Y.state.pointShadow,Ue.hemisphereLights.value=Y.state.hemi,Ue.sunShadowMatrix.value=Y.state.sunShadowMatrix,Ue.sunShadowCascade.value=Y.state.sunShadowCascade,Ue.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ue.spotLightMatrix.value=Y.state.spotLightMatrix,Ue.spotLightMap.value=Y.state.spotLightMap,Ue.pointShadowMatrix.value=Y.state.pointShadowMatrix),q.numLightProbeGrids=nr(N.state.lightProbeGridArray),q.currentProgram=ut,q.uniformsList=null,ut}function Zs(E,z,J,q,Y){let be=Xe.get(E),Re=be.currentProgram.id+","+q+","+Y,Se=be.programVariants.get(Re);return Se===void 0?(Se=mi(E,z,J),be.programVariants.set(Re,Se)):(be.currentProgram=Se,be.uniformsList=null,be.outputColorSpace=q,be.toneMapping=Y),Se}function ko(E){if(E.uniformsList===null){let z=E.currentProgram.getUniforms();E.uniformsList=Va.seqWithValue(z.seq,E.uniforms)}return E.uniformsList}function ps(E,z){let J=Xe.get(E);J.outputColorSpace=z.outputColorSpace,J.batching=z.batching,J.batchingColor=z.batchingColor,J.instancing=z.instancing,J.instancingColor=z.instancingColor,J.instancingMorph=z.instancingMorph,J.skinning=z.skinning,J.morphTargets=z.morphTargets,J.morphNormals=z.morphNormals,J.morphColors=z.morphColors,J.morphTargetsCount=z.morphTargetsCount,J.numClippingPlanes=z.numClippingPlanes,J.numIntersection=z.numClipIntersection,J.vertexAlphas=z.vertexAlphas,J.vertexTangents=z.vertexTangents,J.toneMapping=z.toneMapping}function Js(E,z,J,q,Y){z.isScene!==!0&&(z=fn),je.resetTextureUnits();let be=z.fog,Re=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?z.environment:null,Se=me===null?F.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:vt.workingColorSpace,Ie=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,ze=I.get(q.envMap||Re,Ie),Fe=q.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,ut=!!J.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ue=!!J.morphAttributes.position,ht=!!J.morphAttributes.normal,tn=!!J.morphAttributes.color,zt=ii;q.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(zt=F.toneMapping);let Lt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,_n=Lt!==void 0?Lt.length:0,Oe=Xe.get(q),Dt=N.state.lights;if(qt===!0&&(cn===!0||E!==ce)){let $t=E===ce&&q.id===ne;ae.setState(q,E,$t)}let $e=!1,Ui=!1;q.version===Oe.__version?Oe.needsLights&&Oe.lightsStateVersion!==Dt.state.version||Y.isBatchedMesh&&Oe.batching===!1||!Y.isBatchedMesh&&Oe.batching===!0||Y.isBatchedMesh&&Oe.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&Oe.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&Oe.instancing===!1||!Y.isInstancedMesh&&Oe.instancing===!0||Y.isSkinnedMesh&&Oe.skinning===!1||!Y.isSkinnedMesh&&Oe.skinning===!0||Y.isInstancedMesh&&Oe.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Oe.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Oe.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Oe.instancingMorph===!1&&Y.morphTexture!==null||Oe.envMap!==ze||q.fog===!0&&Oe.fog!==be||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==ae.numPlanes||Oe.numIntersection!==ae.numIntersection)||Oe.vertexAlphas!==Fe||Oe.vertexTangents!==ut||Oe.morphTargets!==Ue||Oe.morphNormals!==ht||Oe.morphColors!==tn||Oe.morphTargetsCount!==_n||Oe.numLightProbeGrids!==nr(N.state.lightProbeGridArray)?$e=!0:(Oe.outputColorSpace!==Se||Oe.toneMapping!==zt)&&(Ui=!0):($e=!0,Oe.__version=q.version);let hn=Oe.currentProgram;($e===!0||Ui===!0)&&(hn=Ui===!0?Zs(q,z,Y,Se,zt):mi(q,z,Y),W&&q.isNodeMaterial&&W.onUpdateProgram(q,hn,Oe));let Ur=!1,Oi=!1,Bn=!1,mt=hn.getUniforms(),gn=Oe.uniforms;if(Ee.useProgram(hn.program)&&(Ur=!0,Oi=!0,Bn=!0),q.id!==ne&&(ne=q.id,Oi=!0),Ur||ce!==E){Ee.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),mt.setValue(H,"projectionMatrix",E.projectionMatrix),mt.setValue(H,"viewMatrix",E.matrixWorldInverse);let vn=mt.map.cameraPosition;vn!==void 0&&vn.setValue(H,jn.setFromMatrixPosition(E.matrixWorld)),at.logarithmicDepthBuffer&&mt.setValue(H,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&mt.setValue(H,"isOrthographic",E.isOrthographicCamera===!0),ce!==E&&(ce=E,Oi=!0,Bn=!0)}if(Oe.needsLights&&(Dt.state.sunShadowMap.length>0&&mt.setValue(H,"sunShadowMap",Dt.state.sunShadowMap,je),Dt.state.directionalShadowMap.length>0&&mt.setValue(H,"directionalShadowMap",Dt.state.directionalShadowMap,je),Dt.state.spotShadowMap.length>0&&mt.setValue(H,"spotShadowMap",Dt.state.spotShadowMap,je),Dt.state.pointShadowMap.length>0&&mt.setValue(H,"pointShadowMap",Dt.state.pointShadowMap,je)),Y.isSkinnedMesh){mt.setOptional(H,Y,"bindMatrix"),mt.setOptional(H,Y,"bindMatrixInverse");let $t=Y.skeleton;$t&&($t.boneTexture===null&&$t.computeBoneTexture(),mt.setValue(H,"boneTexture",$t.boneTexture,je))}Y.isBatchedMesh&&(mt.setOptional(H,Y,"batchingTexture"),mt.setValue(H,"batchingTexture",Y._matricesTexture,je),mt.setOptional(H,Y,"batchingIdTexture"),mt.setValue(H,"batchingIdTexture",Y._indirectTexture,je),mt.setOptional(H,Y,"batchingColorTexture"),Y._colorsTexture!==null&&mt.setValue(H,"batchingColorTexture",Y._colorsTexture,je));let ai=J.morphAttributes;if((ai.position!==void 0||ai.normal!==void 0||ai.color!==void 0)&&le.update(Y,J,hn),(Oi||Oe.receiveShadow!==Y.receiveShadow)&&(Oe.receiveShadow=Y.receiveShadow,mt.setValue(H,"receiveShadow",Y.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&z.environment!==null&&(gn.envMapIntensity.value=z.environmentIntensity),gn.dfgLUT!==void 0&&(gn.dfgLUT.value=uR()),Oi){if(mt.setValue(H,"toneMappingExposure",F.toneMappingExposure),Oe.needsLights&&wu(gn,Bn),be&&q.fog===!0&&xe.refreshFogUniforms(gn,be),xe.refreshMaterialUniforms(gn,q,Ne,We,N.state.transmissionRenderTarget[E.id]),Oe.needsLights&&Oe.numLightProbeGrids>0){let $t=R,vn=0;for(let zi of N.state.lightProbeGridArray)zi.texture!==null&&($t.textures[vn]=zi.texture,$t.min[vn]=zi.boundingBox.min,$t.max[vn]=zi.boundingBox.max,$t.resolution[vn]=zi.resolution,vn++);for(let zi in $t)$t[zi].length=vn;gn.probesSH.value=$t.textures,gn.probesMin.value=$t.min,gn.probesMax.value=$t.max,gn.probesResolution.value=$t.resolution}Va.upload(H,ko(Oe),gn,je)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Va.upload(H,ko(Oe),gn,je),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&mt.setValue(H,"center",Y.center),mt.setValue(H,"modelViewMatrix",Y.modelViewMatrix),mt.setValue(H,"normalMatrix",Y.normalMatrix),mt.setValue(H,"modelMatrix",Y.matrixWorld),q.uniformsGroups!==void 0){let $t=q.uniformsGroups;for(let vn=0,zi=$t.length;vn<zi;vn++){let Ka=$t[vn];He.update(Ka,hn),He.bind(Ka,hn)}}return hn}function wu(E,z){E.ambientLightColor.needsUpdate=z,E.lightProbe.needsUpdate=z,E.sunLights.needsUpdate=z,E.sunLightShadows.needsUpdate=z,E.directionalLights.needsUpdate=z,E.directionalLightShadows.needsUpdate=z,E.pointLights.needsUpdate=z,E.pointLightShadows.needsUpdate=z,E.spotLights.needsUpdate=z,E.spotLightShadows.needsUpdate=z,E.rectAreaLights.needsUpdate=z,E.hemisphereLights.needsUpdate=z}function Tu(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return se},this.getActiveMipmapLevel=function(){return ee},this.getRenderTarget=function(){return me},this.setRenderTargetTextures=function(E,z,J){let q=Xe.get(E);q.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Xe.get(E.texture).__webglTexture=z,Xe.get(E.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:J,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,z){let J=Xe.get(E);J.__webglFramebuffer=z,J.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(E,z=0,J=0){me=E,se=z,ee=J;let q=null,Y=!1,be=!1;if(E){let Se=Xe.get(E);if(Se.__useDefaultFramebuffer!==void 0){Ee.bindFramebuffer(H.FRAMEBUFFER,Se.__webglFramebuffer),he.copy(E.viewport),Be.copy(E.scissor),Ve=E.scissorTest,Ee.viewport(he),Ee.scissor(Be),Ee.setScissorTest(Ve),ne=-1;return}else if(Se.__webglFramebuffer===void 0)je.setupRenderTarget(E);else if(Se.__hasExternalTextures)je.rebindTextures(E,Xe.get(E.texture).__webglTexture,Xe.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Fe=E.depthTexture;if(Se.__boundDepthTexture!==Fe){if(Fe!==null&&Xe.has(Fe)&&(E.width!==Fe.image.width||E.height!==Fe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");je.setupDepthRenderbuffer(E)}}let Ie=E.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(be=!0);let ze=Xe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(ze[z])?q=ze[z][J]:q=ze[z],Y=!0):E.samples>0&&je.useMultisampledRTT(E)===!1?q=Xe.get(E).__webglMultisampledFramebuffer:Array.isArray(ze)?q=ze[J]:q=ze,he.copy(E.viewport),Be.copy(E.scissor),Ve=E.scissorTest}else he.copy(qe).multiplyScalar(Ne).floor(),Be.copy(Tt).multiplyScalar(Ne).floor(),Ve=yt;if(J!==0&&(q=Z),Ee.bindFramebuffer(H.FRAMEBUFFER,q)&&Ee.drawBuffers(E,q),Ee.viewport(he),Ee.scissor(Be),Ee.setScissorTest(Ve),Y){let Se=Xe.get(E.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+z,Se.__webglTexture,J)}else if(be){let Se=z;for(let Ie=0;Ie<E.textures.length;Ie++){let ze=Xe.get(E.textures[Ie]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Ie,ze.__webglTexture,J,Se)}}else if(E!==null&&J!==0){let Se=Xe.get(E.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Se.__webglTexture,J)}ne=-1};function Ja(E){let z=Xe.get(E);return(z.__readFormat!==E.format||z.__readType!==E.type)&&(z.__readFormat=E.format,z.__readType=E.type,z.__formatReadable=at.textureFormatReadable(E.format),z.__typeReadable=at.textureTypeReadable(E.type)),z}this.readRenderTargetPixels=function(E,z,J,q,Y,be,Re,Se=0){if(!(E&&E.isWebGLRenderTarget)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=Xe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Re!==void 0&&(Ie=Ie[Re],Array.isArray(Ie)&&(Ie=Ie[0])),Ie){Ee.bindFramebuffer(H.FRAMEBUFFER,Ie);try{let ze=E.textures[Se],Fe=ze.format,ut=ze.type;E.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Se);let Ue=Ja(ze);if(Ue.__formatReadable===!1){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ue.__typeReadable===!1){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=E.width-q&&J>=0&&J<=E.height-Y&&H.readPixels(z,J,q,Y,ye.convert(Fe),ye.convert(ut),be)}finally{let ze=me!==null?Xe.get(me).__webglFramebuffer:null;Ee.bindFramebuffer(H.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(E,z,J,q,Y,be,Re,Se=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=Xe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Re!==void 0&&(Ie=Ie[Re],Array.isArray(Ie)&&(Ie=Ie[0])),Ie)if(z>=0&&z<=E.width-q&&J>=0&&J<=E.height-Y){Ee.bindFramebuffer(H.FRAMEBUFFER,Ie);let ze=E.textures[Se],Fe=ze.format,ut=ze.type;E.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Se);let Ue=Ja(ze);if(Ue.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ue.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ht=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,ht),H.bufferData(H.PIXEL_PACK_BUFFER,be.byteLength,H.STREAM_READ),H.readPixels(z,J,q,Y,ye.convert(Fe),ye.convert(ut),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let tn=me!==null?Xe.get(me).__webglFramebuffer:null;Ee.bindFramebuffer(H.FRAMEBUFFER,tn);let zt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Vb(H,zt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,ht),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,be),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(ht),H.deleteSync(zt),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,z=null,J=0){let q=Math.pow(2,-J),Y=Math.floor(E.image.width*q),be=Math.floor(E.image.height*q),Re=z!==null?z.x:0,Se=z!==null?z.y:0;je.setTexture2D(E,0),H.copyTexSubImage2D(H.TEXTURE_2D,J,0,0,Re,Se,Y,be),Ee.unbindTexture()},this.copyTextureToTexture=function(E,z,J=null,q=null,Y=0,be=0){let Re,Se,Ie,ze,Fe,ut,Ue,ht,tn,zt=E.isCompressedTexture?E.mipmaps[be]:E.image;if(J!==null)Re=J.max.x-J.min.x,Se=J.max.y-J.min.y,Ie=J.isBox3?J.max.z-J.min.z:1,ze=J.min.x,Fe=J.min.y,ut=J.isBox3?J.min.z:0;else{let mt=Math.pow(2,-Y);Re=Math.floor(zt.width*mt),Se=Math.floor(zt.height*mt),E.isDataArrayTexture?Ie=zt.depth:E.isData3DTexture?Ie=Math.floor(zt.depth*mt):Ie=1,ze=0,Fe=0,ut=0}q!==null?(Ue=q.x,ht=q.y,tn=q.z):(Ue=0,ht=0,tn=0);let Lt=ye.convert(z.format),_n=ye.convert(z.type),Oe;z.isData3DTexture?(je.setTexture3D(z,0),Oe=H.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(je.setTexture2DArray(z,0),Oe=H.TEXTURE_2D_ARRAY):(je.setTexture2D(z,0),Oe=H.TEXTURE_2D),Ee.activeTexture(H.TEXTURE0),Ee.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,z.flipY),Ee.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),Ee.pixelStorei(H.UNPACK_ALIGNMENT,z.unpackAlignment);let Dt=Ee.getParameter(H.UNPACK_ROW_LENGTH),$e=Ee.getParameter(H.UNPACK_IMAGE_HEIGHT),Ui=Ee.getParameter(H.UNPACK_SKIP_PIXELS),hn=Ee.getParameter(H.UNPACK_SKIP_ROWS),Ur=Ee.getParameter(H.UNPACK_SKIP_IMAGES);Ee.pixelStorei(H.UNPACK_ROW_LENGTH,zt.width),Ee.pixelStorei(H.UNPACK_IMAGE_HEIGHT,zt.height),Ee.pixelStorei(H.UNPACK_SKIP_PIXELS,ze),Ee.pixelStorei(H.UNPACK_SKIP_ROWS,Fe),Ee.pixelStorei(H.UNPACK_SKIP_IMAGES,ut);let Oi=E.isDataArrayTexture||E.isData3DTexture,Bn=z.isDataArrayTexture||z.isData3DTexture;if(E.isDepthTexture){let mt=Xe.get(E),gn=Xe.get(z),ai=Xe.get(mt.__renderTarget),$t=Xe.get(gn.__renderTarget);Ee.bindFramebuffer(H.READ_FRAMEBUFFER,ai.__webglFramebuffer),Ee.bindFramebuffer(H.DRAW_FRAMEBUFFER,$t.__webglFramebuffer);for(let vn=0;vn<Ie;vn++)Oi&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Xe.get(E).__webglTexture,Y,ut+vn),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Xe.get(z).__webglTexture,be,tn+vn)),H.blitFramebuffer(ze,Fe,ze+Re,Fe+Se,Ue,ht,Ue+Re,ht+Se,H.DEPTH_BUFFER_BIT,H.NEAREST);Ee.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Y!==0||E.isRenderTargetTexture||Xe.has(E)){let mt=Xe.get(E),gn=Xe.get(z);Ee.bindFramebuffer(H.READ_FRAMEBUFFER,O),Ee.bindFramebuffer(H.DRAW_FRAMEBUFFER,Q);for(let ai=0;ai<Ie;ai++)Oi?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,mt.__webglTexture,Y,ut+ai):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,mt.__webglTexture,Y),Bn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,gn.__webglTexture,be,tn+ai):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,gn.__webglTexture,be),Y!==0?H.blitFramebuffer(ze,Fe,ze+Re,Fe+Se,Ue,ht,Ue+Re,ht+Se,H.COLOR_BUFFER_BIT,H.NEAREST):Bn?H.copyTexSubImage3D(Oe,be,Ue,ht,tn+ai,ze,Fe,Re,Se):H.copyTexSubImage2D(Oe,be,Ue,ht,ze,Fe,Re,Se);Ee.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Bn?E.isDataTexture||E.isData3DTexture?H.texSubImage3D(Oe,be,Ue,ht,tn,Re,Se,Ie,Lt,_n,zt.data):z.isCompressedArrayTexture?H.compressedTexSubImage3D(Oe,be,Ue,ht,tn,Re,Se,Ie,Lt,zt.data):H.texSubImage3D(Oe,be,Ue,ht,tn,Re,Se,Ie,Lt,_n,zt):E.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,be,Ue,ht,Re,Se,Lt,_n,zt.data):E.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,be,Ue,ht,zt.width,zt.height,Lt,zt.data):H.texSubImage2D(H.TEXTURE_2D,be,Ue,ht,Re,Se,Lt,_n,zt);Ee.pixelStorei(H.UNPACK_ROW_LENGTH,Dt),Ee.pixelStorei(H.UNPACK_IMAGE_HEIGHT,$e),Ee.pixelStorei(H.UNPACK_SKIP_PIXELS,Ui),Ee.pixelStorei(H.UNPACK_SKIP_ROWS,hn),Ee.pixelStorei(H.UNPACK_SKIP_IMAGES,Ur),be===0&&z.generateMipmaps===!0&&z.mipmapsAutoUpdate===!0&&H.generateMipmap(Oe),Ee.unbindTexture()},this.initRenderTarget=function(E){Xe.get(E).__webglFramebuffer===void 0&&je.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?je.setTextureCube(E,0):E.isData3DTexture?je.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?je.setTexture2DArray(E,0):je.setTexture2D(E,0),Ee.unbindTexture()},this.resetState=function(){se=0,ee=0,me=null,Ee.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=vt._getDrawingBufferColorSpace(e),t.unpackColorSpace=vt._getUnpackColorSpace()}};var Od=ui(Io());var H_=ui(qr(),1),V_=ui(U_(),1);var O_=r=>{let e,t=new Set,s=(m,g)=>{let _=typeof m=="function"?m(e):m;if(!Object.is(_,e)){let b=e;e=g??(typeof _!="object"||_===null)?_:Object.assign({},e,_),t.forEach(y=>y(e,b))}},o=()=>e,d={setState:s,getState:o,getInitialState:()=>p,subscribe:m=>(t.add(m),()=>t.delete(m))},p=e=r(s,o,d);return d},z_=(r=>r?O_(r):O_);var{useSyncExternalStoreWithSelector:PR}=V_.default,IR=r=>r;function NR(r,e=IR,t){let s=PR(r.subscribe,r.getState,r.getInitialState,e,t);return H_.default.useDebugValue(s),s}var B_=(r,e)=>{let t=z_(r),s=(o,l=e)=>NR(t,o,l);return Object.assign(s,t),s},G_=((r,e)=>r?B_(r,e):B_);var LR=r=>typeof r=="object"&&typeof r.then=="function",No=[];function W_(r,e,t=(s,o)=>s===o){if(r===e)return!0;if(!r||!e)return!1;let s=r.length;if(e.length!==s)return!1;for(let o=0;o<s;o++)if(!t(r[o],e[o]))return!1;return!0}function X_(r,e=null,t=!1,s={}){e===null&&(e=[r]);for(let l of No)if(W_(e,l.keys,l.equal)){if(t)return;if(Object.prototype.hasOwnProperty.call(l,"error"))throw l.error;if(Object.prototype.hasOwnProperty.call(l,"response"))return s.lifespan&&s.lifespan>0&&(l.timeout&&clearTimeout(l.timeout),l.timeout=setTimeout(l.remove,s.lifespan)),l.response;if(!t)throw l.promise}let o={keys:e,equal:s.equal,remove:()=>{let l=No.indexOf(o);l!==-1&&No.splice(l,1)},promise:(LR(r)?r:r(...e)).then(l=>{o.response=l,s.lifespan&&s.lifespan>0&&(o.timeout=setTimeout(o.remove,s.lifespan))}).catch(l=>o.error=l)};if(No.push(o),!t)throw o.promise}var q_=(r,e,t)=>X_(r,e,!1,t),$_=(r,e,t)=>{X_(r,e,!0,t)};var Y_=r=>{if(r===void 0||r.length===0)No.splice(0,No.length);else{let e=No.find(t=>W_(r,t.keys,t.equal));e&&e.remove()}};var $n=ui(lg());var Sg=((r,e)=>typeof window<"u"&&(((r=window.document)==null?void 0:r.createElement)||((e=window.navigator)==null?void 0:e.product)==="ReactNative"))()?en.useLayoutEffect:en.useEffect;function kR(r){let e=en.useRef(r);return Sg(()=>{e.current=r},[r]),e}function xg(r){let e=r.root;for(;e.getState().previousRoot;)e=e.getState().previousRoot;return e}var bS=r=>r&&r.isOrthographicCamera;var FR=r=>r!=null&&(typeof r=="string"||typeof r=="number"||r.isColor),oS=()=>{};function Mg(r){var e;let t=typeof window<"u"?(e=window.devicePixelRatio)!=null?e:2:1;return Array.isArray(r)?Math.min(Math.max(r[0],t),r[1]):r}function UR(r){if(typeof window>"u"||typeof window.matchMedia!="function"||!window.devicePixelRatio)return()=>{};let e,t=()=>{try{var l,c;e=window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),typeof((l=e)==null?void 0:l.addEventListener)=="function"?e.addEventListener("change",o):(c=e)==null||c.addListener==null||c.addListener(o)}catch{e=void 0}},s=()=>{var l,c;typeof((l=e)==null?void 0:l.removeEventListener)=="function"?e.removeEventListener("change",o):(c=e)==null||c.removeListener==null||c.removeListener(o),e=void 0},o=()=>{s(),t(),r()};return t(),s}var bn={obj:r=>r===Object(r)&&!bn.arr(r)&&typeof r!="function",fun:r=>typeof r=="function",str:r=>typeof r=="string",num:r=>typeof r=="number",boo:r=>typeof r=="boolean",und:r=>r===void 0,nul:r=>r===null,arr:r=>Array.isArray(r),equ(r,e,{arrays:t="shallow",objects:s="reference",strict:o=!0}={}){if(typeof r!=typeof e||!!r!=!!e)return!1;if(bn.str(r)||bn.num(r)||bn.boo(r))return r===e;let l=bn.obj(r);if(l&&s==="reference")return r===e;let c=bn.arr(r);if(c&&t==="reference")return r===e;if((c||l)&&r===e)return!0;let d;for(d in r)if(!(d in e))return!1;if(l&&t==="shallow"&&s==="shallow"){for(d in o?e:r)if(!bn.equ(r[d],e[d],{strict:o,objects:"reference"}))return!1}else for(d in o?e:r)if(r[d]!==e[d])return!1;if(bn.und(d)){if(c&&r.length===0&&e.length===0||l&&Object.keys(r).length===0&&Object.keys(e).length===0)return!0;if(r!==e)return!1}return!0}};function _S(r){let e={nodes:{},materials:{},meshes:{}};return r&&r.traverse(t=>{t.name&&(e.nodes[t.name]=t),t.material&&!e.materials[t.material.name]&&(e.materials[t.material.name]=t.material),t.isMesh&&!e.meshes[t.name]&&(e.meshes[t.name]=t)}),e}function SS(r){r.type!=="Scene"&&(r.dispose==null||r.dispose());for(let e in r){let t=r[e];t?.type!=="Scene"&&(t==null||t.dispose==null||t.dispose())}}var xS=["children","key","ref"];function mg(r){let e={};for(let t in r)xS.includes(t)||(e[t]=r[t]);return e}function Nd(r,e,t,s){let o=r,l=o?.__r3f;return l||(l={root:e,type:t,parent:null,children:[],props:mg(s),object:o,eventCount:0,handlers:{},previousVisible:void 0,isHidden:!1},o&&(o.__r3f=l)),l}function gu(r,e){if(!e.includes("-"))return{root:r,key:e,target:r[e]};if(e in r)return{root:r,key:e,target:r[e]};let t=r,s=e.split("-");for(let o of s){if(typeof t!="object"||t===null){if(t!==void 0){let l=s.slice(s.indexOf(o)).join("-");return{root:t,key:l,target:void 0}}return{root:r,key:e,target:void 0}}e=o,r=t,t=t[e]}return{root:r,key:e,target:t}}var aS=/-\d+$/;function Ld(r,e){if(bn.str(e.props.attach)){if(aS.test(e.props.attach)){let o=e.props.attach.replace(aS,""),{root:l,key:c}=gu(r.object,o);Array.isArray(l[c])||(l[c]=[])}let{root:t,key:s}=gu(r.object,e.props.attach);e.previousAttach=t[s],t[s]=e.object}else bn.fun(e.props.attach)&&(e.previousAttach=e.props.attach(r.object,e.object))}function Dd(r,e){if(bn.str(e.props.attach)){let{root:t,key:s}=gu(r.object,e.props.attach),o=e.previousAttach;o===void 0?delete t[s]:t[s]=o}else e.previousAttach==null||e.previousAttach(r.object,e.object);delete e.previousAttach}var gg=[...xS,"args","dispose","attach","object","onUpdate","dispose"],lS=new Map;function OR(r){let e=lS.get(r.constructor);try{e||(e=new r.constructor,lS.set(r.constructor,e))}catch{}return e}function zR(r,e){let t={};for(let s in e)if(!gg.includes(s)&&!bn.equ(e[s],r.props[s])){t[s]=e[s];for(let o in e)o.startsWith(`${s}-`)&&(t[o]=e[o])}for(let s in r.props){if(gg.includes(s)||e.hasOwnProperty(s))continue;let{root:o,key:l}=gu(r.object,s);if(o.constructor&&o.constructor.length===0){let c=OR(o);bn.und(c)||(t[s]=c[l])}else t[s]=0}return t}var BR=["map","emissiveMap","sheenColorMap","specularColorMap","envMap"],HR=/^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/;function Ws(r,e){var t;let s=r.__r3f,o=s&&xg(s).getState(),l=s?.eventCount;for(let d in e){let p=e[d];if(gg.includes(d))continue;if(s&&HR.test(d)){typeof p=="function"?s.handlers[d]=p:delete s.handlers[d],s.eventCount=Object.keys(s.handlers).length;continue}if(p===void 0)continue;if(d==="visible"&&s!=null&&s.isHidden&&s.previousVisible!==void 0){s.previousVisible=p;continue}let{root:m,key:g,target:_}=gu(r,d);if(_===void 0&&(typeof m!="object"||m===null))throw Error(`R3F: Cannot set "${d}". Ensure it is an object before setting "${g}".`);if(_ instanceof ns&&p instanceof ns)_.mask=p.mask;else if(_ instanceof Ke&&FR(p))_.set(p);else if(_!==null&&typeof _=="object"&&typeof _.set=="function"&&typeof _.copy=="function"&&p!=null&&p.constructor&&_.constructor===p.constructor)_.copy(p);else if(_!==null&&typeof _=="object"&&typeof _.set=="function"&&Array.isArray(p))typeof _.fromArray=="function"?_.fromArray(p):_.set(...p);else if(_!==null&&typeof _=="object"&&typeof _.set=="function"&&typeof p=="number")typeof _.setScalar=="function"?_.setScalar(p):_.set(p);else if(m instanceof ji&&g==="uniforms"&&bn.obj(p)){bn.obj(m.uniforms)||(m.uniforms={});let b=m.uniforms,y=p;for(let x in y){let C=y[x],S=b[x];S?Object.assign(S,C):b[x]={...C}}}else{var c;m[g]=p,o&&!o.linear&&BR.includes(g)&&(c=m[g])!=null&&c.isTexture&&m[g].format===Fi&&m[g].type===ri&&(m[g].colorSpace=En)}}if(s!=null&&s.parent&&o!=null&&o.internal&&(t=s.object)!=null&&t.isObject3D&&l!==s.eventCount){let d=s.object,p=o.internal.interaction.indexOf(d);p>-1&&o.internal.interaction.splice(p,1),s.eventCount&&d.raycast!==null&&o.internal.interaction.push(d)}return s&&s.props.attach===void 0&&(s.object.isBufferGeometry?s.props.attach="geometry":s.object.isMaterial&&(s.props.attach="material")),s&&yu(s),r}function yu(r){var e;if(!r.parent)return;r.props.onUpdate==null||r.props.onUpdate(r.object);let t=(e=r.root)==null||e.getState==null?void 0:e.getState();t&&t.internal.frames===0&&t.invalidate()}function VR(r,e){r.manual||(bS(r)?(r.left=e.width/-2,r.right=e.width/2,r.top=e.height/2,r.bottom=e.height/-2):r.aspect=e.width/e.height,r.updateProjectionMatrix())}var pi=r=>r?.isObject3D;function GR(r){return(r.eventObject||r.object).uuid+"/"+r.index+r.instanceId}function WR(r,e,t,s){let o=t.get(e);o&&(t.delete(e),t.size===0&&(r.delete(s),o.target.releasePointerCapture(s)))}function XR(r,e,t){let{internal:s}=r.getState();for(let o=0;o<s.interaction.length;o++)s.interaction[o]===e&&(s.interaction[o]=t);for(let o=0;o<s.initialHits.length;o++)s.initialHits[o]===e&&(s.initialHits[o]=t);s.hovered.forEach((o,l)=>{if(o.eventObject===e||o.object===e){s.hovered.delete(l);let c={...o,eventObject:o.eventObject===e?t:o.eventObject,object:o.object===e?t:o.object};s.hovered.set(GR(c),c)}}),s.capturedMap.forEach(o=>{for(let[l,c]of Array.from(o)){let{intersection:d}=c;l!==e&&d.object!==e&&d.eventObject!==e||(l===e&&o.delete(l),o.set(l===e?t:l,{...c,intersection:{...d,object:d.object===e?t:d.object,eventObject:d.eventObject===e?t:d.eventObject}}))}})}function qR(r,e){let{internal:t}=r.getState();t.interaction=t.interaction.filter(s=>s!==e),t.initialHits=t.initialHits.filter(s=>s!==e),t.hovered.forEach((s,o)=>{(s.eventObject===e||s.object===e)&&t.hovered.delete(o)}),t.capturedMap.forEach((s,o)=>{WR(t.capturedMap,e,s,o)})}var wg=r=>typeof r?.then=="function",$R=r=>Object.assign(Promise.resolve(r),{status:"fulfilled",value:r}),YR=r=>{let e=Promise.reject(r);return e.catch(()=>{}),Object.assign(e,{status:"rejected",reason:r})},jR=()=>{let r,e,t=new Promise((s,o)=>{r=l=>{Object.assign(t,{status:"fulfilled",value:l}),s(l)},e=l=>{Object.assign(t,{status:"rejected",reason:l}),o(l)}});return t.status="pending",t.catch(()=>{}),{promise:t,resolve:r,reject:e}},Tg=r=>!!(r!=null&&r.render);function ZR(r,e){let t={canvas:r,powerPreference:"high-performance",antialias:!0,alpha:!0};return typeof e=="function"?e(t):Tg(e)?e:new xd({...t,...e})}function JR(r){if((r.hasInitialized==null?void 0:r.hasInitialized())===!1)return;let e=mu(()=>{var t;return r.dispose?r.dispose():(t=r.renderLists)==null||t.dispose==null?void 0:t.dispose()});if(wg(e))return Promise.resolve(e).catch(t=>console.warn("[R3F] Error disposing renderer",t)).then(()=>mu(()=>r.forceContextLoss==null?void 0:r.forceContextLoss()));mu(()=>r.forceContextLoss==null?void 0:r.forceContextLoss())}function KR(r,e){if(r){if(e)return JR(r);mu(()=>{var t;return(t=r.renderLists)==null||t.dispose==null?void 0:t.dispose()}),mu(()=>r.forceContextLoss==null?void 0:r.forceContextLoss())}}function mu(r){try{return r()}catch(e){console.warn("[R3F] Error while unmounting root; teardown may be incomplete:",e)}}var Eg=en.createContext(null),QR=(r,e)=>{let t=G_((d,p)=>{let m=new X,g=new X,_=new X;function b(v=p().camera,A=g,L=p().size){let{width:R,height:D,top:N,left:M}=L,P=R/D;A.isVector3?_.copy(A):_.set(...A);let V=v.getWorldPosition(m).distanceTo(_);if(bS(v))return{width:R/v.zoom,height:D/v.zoom,top:N,left:M,factor:1,distance:V,aspect:P};{let F=v.fov*Math.PI/180,B=2*Math.tan(F/2)*V,W=B*(R/D);return{width:W,height:B,top:N,left:M,factor:R/W,distance:V,aspect:P}}}let y,x=v=>d(A=>({performance:{...A.performance,current:v}})),C=new ct;return{set:d,get:p,gl:null,camera:null,raycaster:null,events:{priority:1,enabled:!0,connected:!1},scene:null,xr:null,invalidate:(v=1)=>r(p(),v),advance:(v,A)=>e(v,A,p()),legacy:!1,linear:!1,flat:!1,controls:null,clock:new Jl,pointer:C,mouse:C,frameloop:"always",onPointerMissed:void 0,performance:{current:1,min:.5,max:1,debounce:200,regress:()=>{let v=p();y&&clearTimeout(y),v.performance.current!==v.performance.min&&x(v.performance.min),y=setTimeout(()=>x(p().performance.max),v.performance.debounce)}},size:{width:0,height:0,top:0,left:0},viewport:{initialDpr:0,dpr:0,width:0,height:0,top:0,left:0,aspect:0,distance:0,factor:0,getCurrentViewport:b},setEvents:v=>d(A=>({...A,events:{...A.events,...v}})),setSize:(v,A,L=0,R=0)=>{let D=p().camera,N={width:v,height:A,top:L,left:R};d(M=>({size:N,viewport:{...M.viewport,...b(D,g,N)}}))},setDpr:v=>d(A=>{let L=Mg(v);return{viewport:{...A.viewport,dpr:L,initialDpr:A.viewport.initialDpr||L}}}),setFrameloop:(v="always")=>{let A=p().clock;A.stop(),A.elapsedTime=0,v!=="never"&&(A.start(),A.elapsedTime=0),d(()=>({frameloop:v}))},previousRoot:void 0,internal:{interaction:[],hovered:new Map,subscribers:[],initialClick:[0,0],initialHits:[],capturedMap:new Map,lastEvent:en.createRef(),active:!1,frames:0,priority:0,subscribe:(v,A,L)=>{let R=p().internal;return R.priority=R.priority+(A>0?1:0),R.subscribers.push({ref:v,priority:A,store:L}),R.subscribers=R.subscribers.sort((D,N)=>D.priority-N.priority),()=>{let D=p().internal;D!=null&&D.subscribers&&(D.priority=D.priority-(A>0?1:0),D.subscribers=D.subscribers.filter(N=>N.ref!==v))}}}}}),s=t.getState(),o=s.size,l=s.viewport.dpr,c=s.camera;return t.subscribe(()=>{let{camera:d,size:p,viewport:m,gl:g,set:_}=t.getState();if(p.width!==o.width||p.height!==o.height||m.dpr!==l){o=p,l=m.dpr,VR(d,p),m.dpr>0&&g.setPixelRatio(m.dpr);let b=typeof HTMLCanvasElement<"u"&&g.domElement instanceof HTMLCanvasElement;g.setSize(p.width,p.height,b)}d!==c&&(c=d,_(b=>({viewport:{...b.viewport,...b.viewport.getCurrentViewport(d)}})))}),t.subscribe(d=>r(d)),t};function Ag(){let r=en.useContext(Eg);if(!r)throw new Error("R3F: Hooks can only be used within the Canvas component!");return r}function Ki(r=t=>t,e){return Ag()(r,e)}function fs(r,e=0){let t=Ag(),s=t.getState().internal.subscribe,o=kR(r);return Sg(()=>s(o,e,t),[e,s,t]),null}var uS=new WeakMap,e2=r=>{var e;return typeof r=="function"&&(r==null||(e=r.prototype)==null?void 0:e.constructor)===r};function MS(r,e){return function(t,...s){let o;return e2(t)?(o=uS.get(t),o||(o=new t,uS.set(t,o))):o=t,r&&r(o),Promise.all(s.map(l=>new Promise((c,d)=>o.load(l,p=>{pi(p?.scene)&&Object.assign(p,_S(p.scene)),c(p)},e,p=>d(new Error(`Could not load ${l}: ${p?.message}`))))))}}function Cg(r,e,t,s){let o=Array.isArray(e)?e:[e],l=q_(MS(t,s),[r,...o],{equal:bn.equ});return Array.isArray(e)?l:l[0]}Cg.preload=function(r,e,t){let s=Array.isArray(e)?e:[e];return $_(MS(t),[r,...s])};Cg.clear=function(r,e){let t=Array.isArray(e)?e:[e];return Y_([r,...t])};var t2=1,cS=8,Id=32,fS=2,n2=268435456,i2={objects:"shallow"};function r2(r,e){if(!e&&typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement&&r.parentElement){let{width:t,height:s,top:o,left:l}=r.parentElement.getBoundingClientRect();return{width:t,height:s,top:o,left:l}}else if(!e&&typeof OffscreenCanvas<"u"&&r instanceof OffscreenCanvas)return{width:r.width,height:r.height,top:0,left:0};return{width:0,height:0,top:0,left:0,...e}}function s2({store:r,configuration:e},t,s){let{gl:o,scene:l,camera:c,shadows:d=!1,linear:p=!1,flat:m=!1,legacy:g=!1,frameloop:_="always",dpr:b=[1,2],performance:y,onPointerMissed:x}=s,C=r2(t,s.size),S={...s,shadows:d,linear:p,flat:m,legacy:g,frameloop:_,size:C},v=r.getState(),A=v.gl,L=e.previous,R=F=>!L||!bn.equ(S[F],L[F],i2);e.previous=void 0;let D=v.raycaster;if(D||v.set({raycaster:D=new wo}),R("raycaster")){var N;let{params:F,...B}=(N=s.raycaster)!=null?N:{};Ws(D,{...B,params:{...D.params,...F}})}if(!v.camera||v.camera===e.camera&&R("camera")){e.camera=c;let F=c?.isCamera,B=F?c:s.orthographic?new So(0,0,0,0,.1,1e3):new ci(75,0,.1,1e3);F||(B.position.z=5,c&&(Ws(B,c),B.manual||("aspect"in c||"left"in c||"right"in c||"bottom"in c||"top"in c)&&(B.manual=!0,B.updateProjectionMatrix())),!v.camera&&!(c!=null&&c.rotation)&&B.lookAt(0,0,0)),v.set({camera:B}),D.camera=B}if(!v.scene){let F;l!=null&&l.isScene?(F=l,Nd(F,r,"",{})):(F=new kl,Nd(F,r,"",{}),l&&Ws(F,l)),v.set({scene:F})}if(s.events&&!v.events.handlers&&v.set({events:s.events(r)}),R("size")&&v.setSize(C.width,C.height,C.top,C.left),v.viewport.dpr!==Mg(b)&&v.setDpr(b),R("frameloop")&&v.setFrameloop(_),R("onPointerMissed")&&v.set({onPointerMissed:x}),y&&R("performance")&&v.set(F=>({performance:{...F.performance,...y}})),!v.xr){var M;let F=(Z,O)=>{let Q=r.getState();Q.frameloop!=="never"&&Ig(Z,!0,Q,O)},B=()=>{let Z=r.getState();Z.gl.xr.enabled=Z.gl.xr.isPresenting,Z.gl.xr.setAnimationLoop(Z.gl.xr.isPresenting?F:null),Z.gl.xr.isPresenting||Xt(Z)},W={connect(){let Z=r.getState().gl;Z.xr.addEventListener("sessionstart",B),Z.xr.addEventListener("sessionend",B)},disconnect(){let Z=r.getState().gl;Z.xr.removeEventListener("sessionstart",B),Z.xr.removeEventListener("sessionend",B)}};typeof((M=A.xr)==null?void 0:M.addEventListener)=="function"&&W.connect(),v.set({xr:W})}if(A.shadowMap&&R("shadows")){let F=A.shadowMap.enabled,B=A.shadowMap.type;if(A.shadowMap.enabled=!!d,bn.boo(d))A.shadowMap.type=Oa;else if(bn.str(d)){var P;let W={basic:lm,percentage:To,soft:Oa,variance:Bs};A.shadowMap.type=(P=W[d])!=null?P:Oa}else bn.obj(d)&&Object.assign(A.shadowMap,d);(F!==A.shadowMap.enabled||B!==A.shadowMap.type)&&(A.shadowMap.needsUpdate=!0)}let V=o&&!bn.fun(o)&&!Tg(o)?o:void 0;R("legacy")&&(vt.enabled=!g,v.set({legacy:g})),R("linear")&&(V?.outputColorSpace===void 0&&(A.outputColorSpace=p?vo:En),v.set({linear:p})),R("flat")&&(V?.toneMapping===void 0&&(A.toneMapping=m?ii:Kl),v.set({flat:m})),V&&R("gl")&&Ws(A,V),e.previous=S}function o2(r){let e=()=>{var o;return(o=r.store.getState().gl)==null?void 0:o.xr},t=()=>{var o,l,c,d;let p=r.store.getState();if((o=e())!=null&&o.isPresenting||(l=e())!=null&&l.getSession!=null&&l.getSession()){e().addEventListener("sessionend",t);return}(c=e())==null||c.removeEventListener==null||c.removeEventListener("sessionend",t);let m=r.configuration.previous;if(!m)return;let g=(d=m.dpr)!=null?d:[1,2];p.viewport.dpr!==Mg(g)&&p.setDpr(g)},s=UR(t);return()=>{var o;s(),(o=e())==null||o.removeEventListener==null||o.removeEventListener("sessionend",t)}}var a2={name:"@react-three/fiber",version:"9.8.2",description:"A React renderer for Threejs",keywords:["react","renderer","fiber","three","threejs"],author:"Paul Henschel (https://github.com/drcmda)",license:"MIT",maintainers:["Josh Ellis (https://github.com/joshuaellis)","Cody Bennett (https://github.com/codyjasonbennett)","Kris Baumgarter (https://github.com/krispya)"],bugs:{url:"https://github.com/pmndrs/react-three-fiber/issues"},homepage:"https://github.com/pmndrs/react-three-fiber#readme",repository:{type:"git",url:"git+https://github.com/pmndrs/react-three-fiber.git"},collective:{type:"opencollective",url:"https://opencollective.com/react-three-fiber"},main:"dist/react-three-fiber.cjs.js",module:"dist/react-three-fiber.esm.js",types:"dist/react-three-fiber.cjs.d.ts","react-native":"native/dist/react-three-fiber-native.cjs.js",files:["dist","native","react-reconciler","CHANGELOG.md"],sideEffects:!1,preconstruct:{entrypoints:["index.tsx","native.tsx"]},scripts:{prebuild:"cp ../../readme.md readme.md"},devDependencies:{"@types/react-reconciler":"^0.33.0","react-reconciler":"^0.34.0"},dependencies:{"@babel/runtime":"^7.17.8","@types/webxr":"*","base64-js":"^1.5.1",buffer:"^6.0.3","its-fine":"^2.1.1","react-use-measure":"^2.1.7",scheduler:"^0.28.0","suspend-react":"^0.1.3","use-sync-external-store":"^1.4.0",zustand:"^5.0.3"},peerDependencies:{expo:">=43.0","expo-asset":">=8.4","expo-file-system":">=11.0","expo-gl":">=11.0",react:">=19 <19.4","react-dom":">=19 <19.4","react-native":">=0.78",three:">=0.156"},peerDependenciesMeta:{"react-dom":{optional:!0},"react-native":{optional:!0},expo:{optional:!0},"expo-asset":{optional:!0},"expo-file-system":{optional:!0},"expo-gl":{optional:!0}}};function l2(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var dS={exports:{}},vg={exports:{}};vg.exports;var hS;function u2(){return hS||(hS=1,(function(r){r.exports=function(e){function t(n,i,a,u){return new sx(n,i,a,u)}function s(){}function o(n){var i="https://react.dev/errors/"+n;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(n){for(var i=n,a=i;a&&!a.alternate;)i=a,(i.flags&4098)!==0&&(n=i.return),a=i.return;for(;i.return;)i=i.return;return i.tag===3?n:null}function c(n){if(l(n)!==n)throw Error(o(188))}function d(n){var i=n.alternate;if(!i){if(i=l(n),i===null)throw Error(o(188));return i!==n?null:n}for(var a=n,u=i;;){var f=a.return;if(f===null)break;var h=f.alternate;if(h===null){if(u=f.return,u!==null){a=u;continue}break}if(f.child===h.child){for(h=f.child;h;){if(h===a)return c(f),n;if(h===u)return c(f),i;h=h.sibling}throw Error(o(188))}if(a.return!==u.return)a=f,u=h;else{for(var w=!1,k=f.child;k;){if(k===a){w=!0,a=f,u=h;break}if(k===u){w=!0,u=f,a=h;break}k=k.sibling}if(!w){for(k=h.child;k;){if(k===a){w=!0,a=h,u=f;break}if(k===u){w=!0,u=h,a=f;break}k=k.sibling}if(!w)throw Error(o(189))}}if(a.alternate!==u)throw Error(o(190))}if(a.tag!==3)throw Error(o(188));return a.stateNode.current===a?n:i}function p(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n;for(n=n.child;n!==null;){if(i=p(n),i!==null)return i;n=n.sibling}return null}function m(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n;for(n=n.child;n!==null;){if(n.tag!==4&&(i=m(n),i!==null))return i;n=n.sibling}return null}function g(n){return n===null||typeof n!="object"?null:(n=Iv&&n[Iv]||n["@@iterator"],typeof n=="function"?n:null)}function _(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===dx?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Xo:return"Fragment";case Hh:return"Profiler";case Rv:return"StrictMode";case Gh:return"Suspense";case Wh:return"SuspenseList";case qh:return"Activity";case $h:return"ViewTransition"}if(typeof n=="object")switch(n.$$typeof){case Wo:return"Portal";case Br:return n.displayName||"Context";case Pv:return(n._context.displayName||"Context")+".Consumer";case Vh:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Xh:return i=n.displayName||null,i!==null?i:_(n.type)||"Memo";case bs:i=n._payload,n=n._init;try{return _(n(i))}catch{}}return null}function b(n){return{current:n}}function y(n){0>Yo||(n.current=tp[Yo],tp[Yo]=null,Yo--)}function x(n,i){Yo++,tp[Yo]=n.current,n.current=i}function C(n){return n>>>=0,n===0?32:31-(Q1(n)/eM|0)|0}function S(n){var i=n&42;if(i!==0)return i;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return n&-n;case 262144:case 524288:case 1048576:case 2097152:return n&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function v(n,i,a){var u=n.pendingLanes;if(u===0)return 0;var f=0,h=n.suspendedLanes,w=n.pingedLanes;n=n.warmLanes;var k=u&134217727;return k!==0?(u=k&~h,u!==0?f=S(u):(w&=k,w!==0?f=S(w):a||(a=k&~n,a!==0&&(f=S(a))))):(k=u&~h,k!==0?f=S(k):w!==0?f=S(w):a||(a=u&~n,a!==0&&(f=S(a)))),f===0?0:i!==0&&i!==f&&(i&h)===0&&(h=f&-f,a=i&-i,h>=a||h===32&&(a&4194048)!==0)?i:f}function A(n,i){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&i)===0}function L(n,i){(i&8)!==0&&(i|=i&32);var a=n.entangledLanes;if(a!==0)for(n=n.entanglements,a&=i;0<a;){var u=31-Ti(a),f=1<<u;i|=n[u],a&=~f}return i}function R(n,i){switch(n){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function D(){var n=Ku;return Ku<<=1,(Ku&62914560)===0&&(Ku=4194304),n}function N(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function M(n,i){n.pendingLanes|=i,i!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function P(n,i,a,u,f,h){var w=n.pendingLanes;n.pendingLanes=a,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=a,n.entangledLanes&=a,n.errorRecoveryDisabledLanes&=a,n.shellSuspendCounter=0;var k=n.entanglements,K=n.expirationTimes,fe=n.hiddenUpdates;for(a=w&~a;0<a;){var ge=31-Ti(a),Ce=1<<ge;k[ge]=0,K[ge]=-1;var De=fe[ge];if(De!==null)for(fe[ge]=null,ge=0;ge<De.length;ge++){var gt=De[ge];gt!==null&&(gt.lane&=-536870913)}a&=~Ce}u!==0&&V(n,u,0),h!==0&&f===0&&n.tag!==0&&(n.suspendedLanes|=h&~(w&~i))}function V(n,i,a){n.pendingLanes|=i,n.suspendedLanes&=~i;var u=31-Ti(i);n.entangledLanes|=i,n.entanglements[u]=n.entanglements[u]|1073741824|a&261930}function F(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var u=31-Ti(a),f=1<<u;f&i|n[u]&i&&(n[u]|=i),a&=~f}}function B(n,i){var a=i&-i;return a=(a&42)!==0?1:W(a),(a&(n.suspendedLanes|i))!==0?0:a}function W(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Z(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function O(n){if(typeof sM=="function"&&oM(n),Ei&&typeof Ei.setStrictMode=="function")try{Ei.setStrictMode(fl,n)}catch{}}function Q(n,i){if(n.name!=null&&n.name!=="auto")return n.name;if(i.autoName!==null)return i.autoName;n=or.identifierPrefix;var a=aM++;return n="_"+n+"t_"+a.toString(32)+"_",i.autoName=n}function se(n){var i;if(n==null||typeof n=="string")return n;var a=null,u=ca;if(u!==null)for(var f=0;f<u.length;f++){var h=n[u[f]];if(h!=null){if(h==="none")return"none";a=a==null?h:a+(" "+h)}}return(i=a)!=null?i:n.default}function ee(n,i){return n=se(n),i=se(i),i==null?n==="auto"?null:n:i==="auto"?null:i}function me(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}function ne(n){if(rp===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);rp=i&&i[1]||"",oy=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+rp+n+oy}function ce(n,i){if(!n||sp)return"";sp=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(i){var Ce=function(){throw Error()};if(Object.defineProperty(Ce.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ce,[])}catch(At){var De=At}Reflect.construct(n,[],Ce)}else{try{Ce.call()}catch(At){De=At}Ce=!1;try{var gt=Object.getOwnPropertyDescriptor(n.prototype,"props");Object.defineProperty(n.prototype,"props",{configurable:!0,set:function(){throw Error()}}),Ce=!0,new n}finally{Ce&&(gt!==void 0?Object.defineProperty(n.prototype,"props",gt):delete n.prototype.props)}}}else{try{throw Error()}catch(At){De=At}(Ce=n())&&typeof Ce.catch=="function"&&Ce.catch(function(){})}}catch(At){if(At&&De&&typeof At.stack=="string")return[At.stack,De.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=u.DetermineComponentFrameRoot(),w=h[0],k=h[1];if(w&&k){var K=w.split(`
`),fe=k.split(`
`);for(f=u=0;u<K.length&&!K[u].includes("DetermineComponentFrameRoot");)u++;for(;f<fe.length&&!fe[f].includes("DetermineComponentFrameRoot");)f++;if(u===K.length||f===fe.length)for(u=K.length-1,f=fe.length-1;1<=u&&0<=f&&K[u]!==fe[f];)f--;for(;1<=u&&0<=f;u--,f--)if(K[u]!==fe[f]){if(u!==1||f!==1)do if(u--,f--,0>f||K[u]!==fe[f]){var ge=`
`+K[u].replace(" at new "," at ");return n.displayName&&ge.includes("<anonymous>")&&(ge=ge.replace("<anonymous>",n.displayName)),ge}while(1<=u&&0<=f);break}}}finally{sp=!1,Error.prepareStackTrace=a}return(a=n?n.displayName||n.name:"")?ne(a):""}function he(n,i){switch(n.tag){case 26:case 27:case 5:return ne(n.type);case 16:return ne("Lazy");case 13:return n.child!==i&&i!==null?ne("Suspense Fallback"):ne("Suspense");case 19:return ne("SuspenseList");case 0:case 15:return ce(n.type,!1);case 11:return ce(n.type.render,!1);case 1:return ce(n.type,!0);case 31:return ne("Activity");case 30:return ne("ViewTransition");default:return""}}function Be(n){try{var i="",a=null;do i+=he(n,a),a=n,n=n.return;while(n);return i}catch(u){return`
Error generating stack: `+u.message+`
`+u.stack}}function Ve(n,i){if(typeof n=="object"&&n!==null){var a=ay.get(n);return a!==void 0?a:(i={value:n,source:i,stack:Be(i)},ay.set(n,i),i)}return{value:n,source:i,stack:Be(i)}}function re(n,i){Zo[Jo++]=dl,Zo[Jo++]=ec,ec=n,dl=i}function Pe(n,i,a){Vi[Gi++]=br,Vi[Gi++]=_r,Vi[Gi++]=_s,_s=n;var u=br;n=_r;var f=32-Ti(u)-1;u&=~(1<<f),a+=1;var h=32-Ti(i)+f;if(30<h){var w=f-f%5;h=(u&(1<<w)-1).toString(32),u>>=w,f-=w,br=1<<32-Ti(i)+f|a<<f|u,_r=h+n}else br=1<<h|a<<f|u,_r=n}function ke(n){n.return!==null&&(re(n,1),Pe(n,1,0))}function We(n){for(;n===ec;)ec=Zo[--Jo],Zo[Jo]=null,dl=Zo[--Jo],Zo[Jo]=null;for(;n===_s;)_s=Vi[--Gi],Vi[Gi]=null,_r=Vi[--Gi],Vi[Gi]=null,br=Vi[--Gi],Vi[Gi]=null}function Ne(n,i){Vi[Gi++]=br,Vi[Gi++]=_r,Vi[Gi++]=_s,br=i.id,_r=i.overflow,_s=n}function Qe(n,i){x(Ss,i),x(hl,n),x(Wn,null),n=mx(i),y(Wn),x(Wn,n)}function Ht(){y(Wn),y(hl),y(Ss)}function qe(n){var i=n.memoizedState;i!==null&&(i=i.memoizedState,vr?Vr._currentValue=i:Vr._currentValue2=i,x(tc,n)),i=Wn.current;var a=gx(i,n.type);i!==a&&(x(hl,n),x(Wn,a))}function Tt(n){hl.current===n&&(y(Wn),y(hl)),tc.current===n&&(y(tc),vr?Vr._currentValue=qo:Vr._currentValue2=qo)}function yt(n){var i=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw jn(Ve(i,n)),op}function dt(n,i){if(!Gn)throw Error(o(175));P1(n.stateNode,n.type,n.memoizedProps,i,n)||yt(n,!0)}function un(n){for(Nn=n.return;Nn;)switch(Nn.tag){case 5:case 31:case 13:Wi=!1;return;case 27:case 3:Wi=!0;return;default:Nn=Nn.return}}function qt(n){if(!Gn||n!==Nn)return!1;if(!pt)return un(n),pt=!0,!1;var i=n.tag;if(rn?i!==3&&i!==27&&(i!==5||Yv(n.type)&&!$u(n.type,n.memoizedProps))&&Jt&&yt(n):i!==3&&(i!==5||Yv(n.type)&&!$u(n.type,n.memoizedProps))&&Jt&&yt(n),un(n),i===13){if(!Gn)throw Error(o(316));if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(o(317));Jt=k1(n)}else if(i===31){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(o(317));Jt=D1(n)}else Jt=rn&&i===27?_1(n.type,Jt):Nn?$v(n.stateNode):null;return!0}function cn(){Gn&&(Jt=Nn=null,pt=!1)}function Vt(){var n=xs;return n!==null&&(_i===null?_i=n:_i.push.apply(_i,n),xs=null),n}function jn(n){xs===null?xs=[n]:xs.push(n)}function Gt(n,i,a){vr?(x(nc,i._currentValue),i._currentValue=a):(x(nc,i._currentValue2),i._currentValue2=a)}function fn(n){var i=nc.current;vr?n._currentValue=i:n._currentValue2=i,y(nc)}function On(n,i,a){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===a)break;n=n.return}}function Zn(n,i,a,u){var f=n.child;for(f!==null&&(f.return=n);f!==null;){var h=f.dependencies;if(h!==null){var w=f.child;h=h.firstContext;e:for(;h!==null;){var k=h;h=f;for(var K=0;K<i.length;K++)if(k.context===i[K]){h.lanes|=a,k=h.alternate,k!==null&&(k.lanes|=a),On(h.return,a,n),u||(w=null);break e}h=k.next}}else if(f.tag===18){if(w=f.return,w===null)throw Error(o(341));w.lanes|=a,h=w.alternate,h!==null&&(h.lanes|=a),On(w,a,n),w=null}else f.tag===13&&f.memoizedState!==null&&f.memoizedState.dehydrated===null?(f.lanes|=a,w=f.alternate,w!==null&&(w.lanes|=a),On(f.return,a,n),w=f.child,w=w!==null?w.sibling:null):w=f.child;if(w!==null)w.return=f;else for(w=f;w!==null;){if(w===n){w=null;break}if(f=w.sibling,f!==null){f.return=w.return,w=f;break}w=w.return}f=w}}function H(n,i,a,u){n=null;for(var f=i,h=!1;f!==null;){if(!h){if((f.flags&524288)!==0)h=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var w=f.alternate;if(w===null)throw Error(o(387));if(w=w.memoizedProps,w!==null){var k=f.type;Ai(f.pendingProps.value,w.value)||(n!==null?n.push(k):n=[k])}}else if(f===tc.current){if(w=f.alternate,w===null)throw Error(o(387));w.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(n!==null?n.push(Vr):n=[Vr])}f=f.return}return n!==null&&Zn(i,n,a,u),i.flags|=262144,n!==null}function zn(n){for(n=n.firstContext;n!==null;){var i=n.context;if(!Ai(vr?i._currentValue:i._currentValue2,n.memoizedValue))return!0;n=n.next}return!1}function Rt(n){to=n,Gr=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function at(n){return dn(to,n)}function Ee(n,i){return to===null&&Rt(n),dn(n,i)}function dn(n,i){var a=vr?i._currentValue:i._currentValue2;if(i={context:i,memoizedValue:a,next:null},Gr===null){if(n===null)throw Error(o(308));Gr=i,n.dependencies={lanes:0,firstContext:i},n.flags|=524288}else Gr=Gr.next=i;return a}function Xe(){return{controller:new uM,data:new Map,refCount:0}}function je(n){n.refCount--,n.refCount===0&&cM(fM,function(){n.controller.abort()})}function I(n,i){if((n.pendingLanes&4194048)!==0){var a=n.transitionTypes;for(a===null&&(a=n.transitionTypes=[]),n=0;n<i.length;n++){var u=i[n];a.indexOf(u)===-1&&a.push(u)}}}function T(n){var i=n.transitionTypes;return n.transitionTypes=null,i}function $(){}function de(n){n!==Qo&&n.next===null&&(Qo===null?Ko=Qo=n:Qo=Qo.next=n),ic=!0,ap||(ap=!0,U())}function ue(n,i){if(!lp&&ic){lp=!0;do for(var a=!1,u=Ko;u!==null;){if(!i)if(n!==0){var f=u.pendingLanes;if(f===0)var h=0;else{var w=u.suspendedLanes,k=u.pingedLanes;h=(1<<31-Ti(42|n)+1)-1,h&=f&~(w&~k),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,Me(u,h))}else h=xt,h=v(u,u===Wt?h:0,u.cancelPendingCommit!==null||u.timeoutHandle!==eo),(h&3)===0||A(u,h)||(a=!0,Me(u,h));u=u.next}while(a);lp=!1}}function xe(){Te()}function Te(){ic=ap=!1;var n=0;no!==0&&Tx()&&(n=no);for(var i=vi(),a=null,u=Ko;u!==null;){var f=u.next,h=oe(u,i);h===0?(u.next=null,a===null?Ko=f:a.next=f,f===null&&(Qo=a)):(a=u,(n!==0||(h&3)!==0)&&(ic=!0)),u=f}on!==0&&on!==5||ue(n,!1),no!==0&&(no=0)}function oe(n,i){for(var a=n.suspendedLanes,u=n.pingedLanes,f=n.expirationTimes,h=n.pendingLanes&-62914561;0<h;){var w=31-Ti(h),k=1<<w,K=f[w];K===-1?((k&a)===0||(k&u)!==0)&&(f[w]=R(k,i)):K<=i&&(n.expiredLanes|=k),h&=~k}if(i=Wt,a=xt,a=v(n,n===i?a:0,n.cancelPendingCommit!==null||n.timeoutHandle!==eo),u=n.callbackNode,a===0||n===i&&(Ut===2||Ut===9)||n.cancelPendingCommit!==null)return u!==null&&u!==null&&np(u),n.callbackNode=null,n.callbackPriority=0;if((a&3)===0||A(n,a)){if(i=a&-a,i===n.callbackPriority)return i;switch(u!==null&&np(u),Z(a)){case 2:case 8:a=iM;break;case 32:a=ip;break;case 268435456:a=rM;break;default:a=ip}return u=ae.bind(null,n),a=Qu(a,u),n.callbackPriority=i,n.callbackNode=a,i}return u!==null&&u!==null&&np(u),n.callbackPriority=2,n.callbackNode=null,2}function ae(n,i){if(on!==0&&on!==5)return n.callbackNode=null,n.callbackPriority=0,null;var a=n.callbackNode;if(al()&&n.callbackNode!==a)return null;var u=xt;return u=v(n,n===Wt?u:0,n.cancelPendingCommit!==null||n.timeoutHandle!==eo),u===0?null:(lv(n,u,i),oe(n,vi()),n.callbackNode!=null&&n.callbackNode===a?ae.bind(null,n):null)}function Me(n,i){if(al())return null;lv(n,i,!0)}function U(){Lx?Dx(function(){(_t&6)!==0?Qu(ry,xe):Te()}):Qu(ry,xe)}function le(){if(no===0){var n=io;n===0&&(n=Zu,Zu<<=1,(Zu&261888)===0&&(Zu=256)),no=n}return no}function ie(n,i){if(ml===null){var a=ml=[];up=0,io=le(),ea={status:"pending",value:void 0,then:function(u){a.push(u)}}}return up++,i.then(we,we),i}function we(){if(--up===0&&(pl=null,ml!==null)){ea!==null&&(ea.status="fulfilled");var n=ml;ml=null,io=0,ea=null;for(var i=0;i<n.length;i++)(0,n[i])()}}function ye(n,i){var a=[],u={status:"pending",value:null,reason:null,then:function(f){a.push(f)}};return n.then(function(){u.status="fulfilled",u.value=i;for(var f=0;f<a.length;f++)(0,a[f])(i)},function(f){for(u.status="rejected",u.reason=f,f=0;f<a.length;f++)(0,a[f])(void 0)}),u}function _e(){var n=ro.current;return n!==null?n:Wt.pooledCache}function He(n,i){i===null?x(ro,ro.current):x(ro,i.pool)}function ot(){var n=_e();return n===null?null:{parent:vr?sn._currentValue:sn._currentValue2,pool:n}}function pe(n,i){if(Ai(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),u=Object.keys(i);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var f=a[u];if(!lM.call(i,f)||!Ai(n[f],i[f]))return!1}return!0}function Ge(n){return n=n.status,n==="fulfilled"||n==="rejected"}function st(n,i,a){switch(a=n[a],a===void 0?n.push(i):a!==i&&(i.then($,$),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,mn(n),n===void 0&&!("reason"in i)?Error(o(600)):n;default:if(typeof i.status=="string")i.then($,$);else{if(n=Wt,n!==null&&100<n.shellSuspendCounter)throw Error(o(482));n=i,n.status="pending",n.then(function(u){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=u}},function(u){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=u}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,mn(n),n}throw so=i,ta}}function Ae(n){try{var i=n._init;return i(n._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(so=a,ta):a}}function Pt(){if(so===null)throw Error(o(459));var n=so;return so=null,n}function mn(n){if(n===ta||n===rc)throw Error(o(483))}function Si(n){var i=gl;return gl+=1,na===null&&(na=[]),st(na,n,i)}function Qi(n,i){i=i.props.ref,n.ref=i!==void 0?i:null}function ds(n,i){throw i.$$typeof===lx?Error(o(525)):(n=Object.prototype.toString.call(i),Error(o(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n)))}function Mu(n){function i(j,G){if(n){var te=j.deletions;te===null?(j.deletions=[G],j.flags|=16):te.push(G)}}function a(j,G){if(!n)return null;for(;G!==null;)i(j,G),G=G.sibling;return null}function u(j){for(var G=new Map;j!==null;)j.key===null?G.set(j.index,j):G.set(j.key,j),j=j.sibling;return G}function f(j,G){return j=zr(j,G),j.index=0,j.sibling=null,j}function h(j,G,te){return j.index=te,n?(te=j.alternate,te!==null?(te=te.index,te<G?(j.flags|=2,G):te):(j.flags|=134217730,G)):(j.flags|=1048576,G)}function w(j){return n&&j.alternate===null&&(j.flags|=134217730),j}function k(j,G,te,ve){return G===null||G.tag!==6?(G=Uh(te,j.mode,ve),G.return=j,G):(G=f(G,te),G.return=j,G)}function K(j,G,te,ve){var Je=te.type;return Je===Xo?(j=ge(j,G,te.props.children,ve,te.key),Qi(j,te),j):G!==null&&(G.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===bs&&Ae(Je)===G.type)?(G=f(G,te.props),Qi(G,te),G.return=j,G):(G=Wu(te.type,te.key,te.props,null,j.mode,ve),Qi(G,te),G.return=j,G)}function fe(j,G,te,ve){return G===null||G.tag!==4||G.stateNode.containerInfo!==te.containerInfo||G.stateNode.implementation!==te.implementation?(G=Oh(te,j.mode,ve),G.return=j,G):(G=f(G,te.children||[]),G.return=j,G)}function ge(j,G,te,ve,Je){return G===null||G.tag!==7?(G=Qs(te,j.mode,ve,Je),G.return=j,G):(G=f(G,te),G.return=j,G)}function Ce(j,G,te){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=Uh(""+G,j.mode,te),G.return=j,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case Xu:return te=Wu(G.type,G.key,G.props,null,j.mode,te),Qi(te,G),te.return=j,te;case Wo:return G=Oh(G,j.mode,te),G.return=j,G;case bs:return G=Ae(G),Ce(j,G,te)}if(qu(G)||g(G))return G=Qs(G,j.mode,te,null),G.return=j,G;if(typeof G.then=="function")return Ce(j,Si(G),te);if(G.$$typeof===Br)return Ce(j,Ee(j,G),te);ds(j,G)}return null}function De(j,G,te,ve){var Je=G!==null?G.key:null;if(typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint")return Je!==null?null:k(j,G,""+te,ve);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case Xu:return te.key===Je?K(j,G,te,ve):null;case Wo:return te.key===Je?fe(j,G,te,ve):null;case bs:return te=Ae(te),De(j,G,te,ve)}if(qu(te)||g(te))return Je!==null?null:ge(j,G,te,ve,null);if(typeof te.then=="function")return De(j,G,Si(te),ve);if(te.$$typeof===Br)return De(j,G,Ee(j,te),ve);ds(j,te)}return null}function gt(j,G,te,ve,Je){if(typeof ve=="string"&&ve!==""||typeof ve=="number"||typeof ve=="bigint")return j=j.get(te)||null,k(G,j,""+ve,Je);if(typeof ve=="object"&&ve!==null){switch(ve.$$typeof){case Xu:return j=j.get(ve.key===null?te:ve.key)||null,K(G,j,ve,Je);case Wo:return j=j.get(ve.key===null?te:ve.key)||null,fe(G,j,ve,Je);case bs:return ve=Ae(ve),gt(j,G,te,ve,Je)}if(qu(ve)||g(ve))return j=j.get(te)||null,ge(G,j,ve,Je,null);if(typeof ve.then=="function")return gt(j,G,te,Si(ve),Je);if(ve.$$typeof===Br)return gt(j,G,te,Ee(G,ve),Je);ds(G,ve)}return null}function At(j,G,te,ve){for(var Je=null,an=null,et=G,Nt=G=0,wn=null;et!==null&&Nt<te.length;Nt++){et.index>Nt?(wn=et,et=null):wn=et.sibling;var Et=De(j,et,te[Nt],ve);if(Et===null){et===null&&(et=wn);break}n&&et&&Et.alternate===null&&i(j,et),G=h(Et,G,Nt),an===null?Je=Et:an.sibling=Et,an=Et,et=wn}if(Nt===te.length)return a(j,et),pt&&re(j,Nt),Je;if(et===null){for(;Nt<te.length;Nt++)et=Ce(j,te[Nt],ve),et!==null&&(G=h(et,G,Nt),an===null?Je=et:an.sibling=et,an=et);return pt&&re(j,Nt),Je}for(et=u(et);Nt<te.length;Nt++)wn=gt(et,j,Nt,te[Nt],ve),wn!==null&&(n&&(Et=wn.alternate,Et!==null&&et.delete(Et.key===null?Nt:Et.key)),G=h(wn,G,Nt),an===null?Je=wn:an.sibling=wn,an=wn);return n&&et.forEach(function(Rs){return i(j,Rs)}),pt&&re(j,Nt),Je}function Cs(j,G,te,ve){if(te==null)throw Error(o(151));for(var Je=null,an=null,et=G,Nt=G=0,wn=null,Et=te.next();et!==null&&!Et.done;Nt++,Et=te.next()){et.index>Nt?(wn=et,et=null):wn=et.sibling;var Rs=De(j,et,Et.value,ve);if(Rs===null){et===null&&(et=wn);break}n&&et&&Rs.alternate===null&&i(j,et),G=h(Rs,G,Nt),an===null?Je=Rs:an.sibling=Rs,an=Rs,et=wn}if(Et.done)return a(j,et),pt&&re(j,Nt),Je;if(et===null){for(;!Et.done;Nt++,Et=te.next())Et=Ce(j,Et.value,ve),Et!==null&&(G=h(Et,G,Nt),an===null?Je=Et:an.sibling=Et,an=Et);return pt&&re(j,Nt),Je}for(et=u(et);!Et.done;Nt++,Et=te.next())Et=gt(et,j,Nt,Et.value,ve),Et!==null&&(n&&(wn=Et.alternate,wn!==null&&et.delete(wn.key===null?Nt:wn.key)),G=h(Et,G,Nt),an===null?Je=Et:an.sibling=Et,an=Et);return n&&et.forEach(function(gM){return i(j,gM)}),pt&&re(j,Nt),Je}function fo(j,G,te,ve){if(typeof te=="object"&&te!==null&&te.type===Xo&&te.key===null&&te.props.ref===void 0&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case Xu:e:{for(var Je=te.key;G!==null;){if(G.key===Je){if(Je=te.type,Je===Xo){if(G.tag===7){a(j,G.sibling),ve=f(G,te.props.children),Qi(ve,te),ve.return=j,j=ve;break e}}else if(G.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===bs&&Ae(Je)===G.type){a(j,G.sibling),ve=f(G,te.props),Qi(ve,te),ve.return=j,j=ve;break e}a(j,G);break}else i(j,G);G=G.sibling}te.type===Xo?(ve=Qs(te.props.children,j.mode,ve,te.key),Qi(ve,te),ve.return=j,j=ve):(ve=Wu(te.type,te.key,te.props,null,j.mode,ve),Qi(ve,te),ve.return=j,j=ve)}return w(j);case Wo:e:{for(Je=te.key;G!==null;){if(G.key===Je)if(G.tag===4&&G.stateNode.containerInfo===te.containerInfo&&G.stateNode.implementation===te.implementation){a(j,G.sibling),ve=f(G,te.children||[]),ve.return=j,j=ve;break e}else{a(j,G);break}else i(j,G);G=G.sibling}ve=Oh(te,j.mode,ve),ve.return=j,j=ve}return w(j);case bs:return te=Ae(te),fo(j,G,te,ve)}if(qu(te))return At(j,G,te,ve);if(g(te)){if(Je=g(te),typeof Je!="function")throw Error(o(150));return te=Je.call(te),Cs(j,G,te,ve)}if(typeof te.then=="function")return fo(j,G,Si(te),ve);if(te.$$typeof===Br)return fo(j,G,Ee(j,te),ve);ds(j,te)}return typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint"?(te=""+te,G!==null&&G.tag===6?(a(j,G.sibling),ve=f(G,te),ve.return=j,j=ve):(a(j,G),ve=Uh(te,j.mode,ve),ve.return=j,j=ve),w(j)):a(j,G)}return function(j,G,te,ve){try{gl=0;var Je=fo(j,G,te,ve);return na=null,Je}catch(et){if(et===ta||et===rc)throw et;var an=t(29,et,null,j.mode);return an.lanes=ve,an.return=j,an}}}function $s(){for(var n=ia,i=fp=ia=0;i<n;){var a=Xi[i];Xi[i++]=null;var u=Xi[i];Xi[i++]=null;var f=Xi[i];Xi[i++]=null;var h=Xi[i];if(Xi[i++]=null,u!==null&&f!==null){var w=u.pending;w===null?f.next=f:(f.next=w.next,w.next=f),u.pending=f}h!==0&&Za(a,f,h)}}function Ys(n,i,a,u){Xi[ia++]=n,Xi[ia++]=i,Xi[ia++]=a,Xi[ia++]=u,fp|=u,n.lanes|=u,n=n.alternate,n!==null&&(n.lanes|=u)}function er(n,i,a,u){return Ys(n,i,a,u),js(n)}function tr(n,i){return Ys(n,null,null,i),js(n)}function Za(n,i,a){n.lanes|=a;var u=n.alternate;u!==null&&(u.lanes|=a);for(var f=!1,h=n.return;h!==null;)h.childLanes|=a,u=h.alternate,u!==null&&(u.childLanes|=a),h.tag===22&&(n=h.stateNode,n===null||n._visibility&1||(f=!0)),n=h,h=h.return;return n.tag===3?(h=n.stateNode,f&&i!==null&&(f=31-Ti(a),n=h.hiddenUpdates,u=n[f],u===null?n[f]=[i]:u.push(i),i.lane=a|536870912),h):null}function js(n){if(50<xl)throw xl=0,bc=null,Error(o(185));for(var i=n.return;i!==null;)n=i,i=n.return;return n.tag===3?n.stateNode:null}function hs(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Do(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function nr(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function mi(n,i,a){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(_t&2)!==0){var f=u.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),u.pending=i,i=js(n),Za(n,null,a),i}return Ys(n,u,i,a),js(n)}function Zs(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,F(n,a)}}function ko(n,i){var a=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var f=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var w={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?f=h=w:h=h.next=w,a=a.next}while(a!==null);h===null?f=h=i:h=h.next=i}else f=h=i;a={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:h,shared:u.shared,callbacks:u.callbacks},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function ps(){if(dp){var n=ea;if(n!==null)throw n}}function Js(n,i,a,u){dp=!1;var f=n.updateQueue;Ms=!1;var h=f.firstBaseUpdate,w=f.lastBaseUpdate,k=f.shared.pending;if(k!==null){f.shared.pending=null;var K=k,fe=K.next;K.next=null,w===null?h=fe:w.next=fe,w=K;var ge=n.alternate;ge!==null&&(ge=ge.updateQueue,k=ge.lastBaseUpdate,k!==w&&(k===null?ge.firstBaseUpdate=fe:k.next=fe,ge.lastBaseUpdate=K))}if(h!==null){var Ce=f.baseState;w=0,ge=fe=K=null,k=h;do{var De=k.lane&-536870913,gt=De!==k.lane;if(gt?(xt&De)===De:(u&De)===De){De!==0&&De===io&&(dp=!0),ge!==null&&(ge=ge.next={lane:0,tag:k.tag,payload:k.payload,callback:null,next:null});e:{var At=n,Cs=k;De=i;var fo=a;switch(Cs.tag){case 1:if(At=Cs.payload,typeof At=="function"){Ce=At.call(fo,Ce,De);break e}Ce=At;break e;case 3:At.flags=At.flags&-65537|128;case 0:if(At=Cs.payload,De=typeof At=="function"?At.call(fo,Ce,De):At,De==null)break e;Ce=Bh({},Ce,De);break e;case 2:Ms=!0}}De=k.callback,De!==null&&(n.flags|=64,gt&&(n.flags|=8192),gt=f.callbacks,gt===null?f.callbacks=[De]:gt.push(De))}else gt={lane:De,tag:k.tag,payload:k.payload,callback:k.callback,next:null},ge===null?(fe=ge=gt,K=Ce):ge=ge.next=gt,w|=De;if(k=k.next,k===null){if(k=f.shared.pending,k===null)break;gt=k,k=gt.next,gt.next=null,f.lastBaseUpdate=gt,f.shared.pending=null}}while(!0);ge===null&&(K=Ce),f.baseState=K,f.firstBaseUpdate=fe,f.lastBaseUpdate=ge,h===null&&(f.shared.lanes=0),Es|=w,n.lanes=w,n.memoizedState=Ce}}function wu(n,i){if(typeof n!="function")throw Error(o(191,n));n.call(i)}function Tu(n,i){var a=n.callbacks;if(a!==null)for(n.callbacks=null,n=0;n<a.length;n++)wu(a[n],i)}function Ja(n,i){n=Xr,x(oc,n),x(ws,i),Xr=n|i.baseLanes}function E(){x(oc,Xr),x(ws,ws.current)}function z(){Xr=oc.current,y(ws),y(oc)}function J(n){var i=n.alternate;x(qn,qn.current&1),x(Xn,n),li===null&&(i===null||ws.current!==null||i.memoizedState!==null)&&(li=n)}function q(n){x(qn,qn.current),x(Xn,n),li===null&&(li=n)}function Y(n){n.tag===22?(x(qn,qn.current),x(Xn,n),li===null&&(li=n)):be()}function be(){x(qn,qn.current),x(Xn,Xn.current)}function Re(n){y(Xn),li===n&&(li=null),y(qn)}function Se(n,i){x(Xn,Xn.current),x(qn,i)}function Ie(n){y(qn),y(Xn),li===n&&(li=null)}function ze(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Jh(a)||Kh(a)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!=="independent"){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function Fe(){throw Error(o(321))}function ut(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Ai(n[a],i[a]))return!1;return!0}function Ue(n,i,a,u,f,h){return Wr=h,lt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ze.H=n===null||n.memoizedState===null?cy:fy,ao=!1,h=a(u,f),ao=!1,ra&&(h=tn(i,a,u,f)),ht(n),h}function ht(n){Ze.H=uc;var i=Bt!==null&&Bt.next!==null;if(Wr=0,Sn=Bt=lt=null,ac=!1,vl=0,sa=null,i)throw Error(o(300));n===null||xn||(n=n.dependencies,n!==null&&zn(n)&&(xn=!0))}function tn(n,i,a,u){lt=n;var f=0;do{if(ra&&(sa=null),vl=0,ra=!1,25<=f)throw Error(o(301));if(f+=1,Sn=Bt=null,n.updateQueue!=null){var h=n.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}Ze.H=hM,h=i(a,u)}while(ra);return h}function zt(){var n=Ze.H,i=n.useState()[0];return i=typeof i.then=="function"?hn(i):i,n=n.useState()[0],(Bt!==null?Bt.memoizedState:null)!==n&&(lt.flags|=1024),i}function Lt(){var n=lc!==0;return lc=0,n}function _n(n,i,a){i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~a}function Oe(n){if(ac){for(n=n.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}ac=!1}Wr=0,Sn=Bt=lt=null,ra=!1,vl=lc=0,sa=null}function Dt(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Sn===null?lt.memoizedState=Sn=n:Sn=Sn.next=n,Sn}function $e(){if(Bt===null){var n=lt.alternate;n=n!==null?n.memoizedState:null}else n=Bt.next;var i=Sn===null?lt.memoizedState:Sn.next;if(i!==null)Sn=i,Bt=n;else{if(n===null)throw lt.alternate===null?Error(o(467)):Error(o(310));Bt=n,n={memoizedState:Bt.memoizedState,baseState:Bt.baseState,baseQueue:Bt.baseQueue,queue:Bt.queue,next:null},Sn===null?lt.memoizedState=Sn=n:Sn=Sn.next=n}return Sn}function Ui(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function hn(n){var i=vl;return vl+=1,sa===null&&(sa=[]),n=st(sa,n,i),i=lt,(Sn===null?i.memoizedState:Sn.next)===null&&(i=i.alternate,Ze.H=i===null||i.memoizedState===null?cy:fy),n}function Ur(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return hn(n);if(n.$$typeof===fx)return;if(n.$$typeof===Br)return at(n)}throw Error(o(438,String(n)))}function Oi(n){var i=null,a=lt.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var u=lt.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(i={data:u.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=Ui(),lt.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(n),u=0;u<n;u++)a[u]=cx;return i.index++,a}function Bn(n,i){return typeof i=="function"?i(n):i}function mt(n){var i=$e();return gn(i,Bt,n)}function gn(n,i,a){var u=n.queue;if(u===null)throw Error(o(311));u.lastRenderedReducer=a;var f=n.baseQueue,h=u.pending;if(h!==null){if(f!==null){var w=f.next;f.next=h.next,h.next=w}i.baseQueue=f=h,u.pending=null}if(h=n.baseState,f===null)n.memoizedState=h;else{i=f.next;var k=w=null,K=null,fe=i,ge=!1;do{var Ce=fe.lane&-536870913;if(Ce!==fe.lane?(xt&Ce)===Ce:(Wr&Ce)===Ce){var De=fe.revertLane;if(De===0)K!==null&&(K=K.next={lane:0,revertLane:0,gesture:null,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null}),Ce===io&&(ge=!0);else if((Wr&De)===De){fe=fe.next,De===io&&(ge=!0);continue}else Ce={lane:0,revertLane:fe.revertLane,gesture:null,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null},K===null?(k=K=Ce,w=h):K=K.next=Ce,lt.lanes|=De,Es|=De;Ce=fe.action,ao&&a(h,Ce),h=fe.hasEagerState?fe.eagerState:a(h,Ce)}else De={lane:Ce,revertLane:fe.revertLane,gesture:fe.gesture,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null},K===null?(k=K=De,w=h):K=K.next=De,lt.lanes|=Ce,Es|=Ce;fe=fe.next}while(fe!==null&&fe!==i);if(K===null?w=h:K.next=k,!Ai(h,n.memoizedState)&&(xn=!0,ge&&(a=ea,a!==null)))throw a;n.memoizedState=h,n.baseState=w,n.baseQueue=K,u.lastRenderedState=h}return f===null&&(u.lanes=0),[n.memoizedState,u.dispatch]}function ai(n){var i=$e(),a=i.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=n;var u=a.dispatch,f=a.pending,h=i.memoizedState;if(f!==null){a.pending=null;var w=f=f.next;do h=n(h,w.action),w=w.next;while(w!==f);Ai(h,i.memoizedState)||(xn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),a.lastRenderedState=h}return[h,u]}function $t(n,i,a){var u=lt,f=$e(),h=pt;if(h){if(a===void 0)throw Error(o(407));a=a()}else a=i();var w=!Ai((Bt||f).memoizedState,a);if(w&&(f.memoizedState=a,xn=!0),f=f.queue,Xd(Ka.bind(null,u,f,n),[n]),n=f.getSnapshot!==i||w||Sn!==null&&(Sn.memoizedState.tag&1)!==0,Fo(n?9:8,{destroy:void 0},zi.bind(null,u,f,a,i),null),n){if(u.flags|=2048,Wt===null)throw Error(o(349));h||(Wr&127)!==0||vn(u,i,a)}return a}function vn(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=lt.updateQueue,i===null?(i=Ui(),lt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function zi(n,i,a,u){i.value=a,i.getSnapshot=u,kg(i)&&Fg(n)}function Ka(n,i,a){return a(function(){kg(i)&&Fg(n)})}function kg(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Ai(n,a)}catch{return!0}}function Fg(n){var i=tr(n,2);i!==null&&gi(i,n,2)}function Gd(n){var i=Dt();if(typeof n=="function"){var a=n;if(n=a(),ao){O(!0);try{a()}finally{O(!1)}}}return i.memoizedState=i.baseState=n,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bn,lastRenderedState:n},i}function Ug(n,i,a,u){return n.baseState=a,gn(n,Bt,typeof u=="function"?u:Bn)}function kS(n,i,a,u,f){if(Cu(n))throw Error(o(485));if(n=i.action,n!==null){var h={payload:f,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(w){h.listeners.push(w)}};Ze.T!==null?a(!0):h.isTransition=!1,u(h),a=i.pending,a===null?(h.next=i.pending=h,Og(i,h)):(h.next=a.next,i.pending=a.next=h)}}function Og(n,i){var a=i.action,u=i.payload,f=n.state;if(i.isTransition){var h=Ze.T,w={};w.types=h!==null?h.types:null,Ze.T=w;try{var k=a(f,u),K=Ze.S;K!==null&&K(w,k),zg(n,i,k)}catch(fe){Wd(n,i,fe)}finally{h!==null&&w.types!==null&&(h.types=w.types),Ze.T=h}}else try{h=a(f,u),zg(n,i,h)}catch(fe){Wd(n,i,fe)}}function zg(n,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(u){Bg(n,i,u)},function(u){return Wd(n,i,u)}):Bg(n,i,a)}function Bg(n,i,a){i.status="fulfilled",i.value=a,Hg(i),n.state=a,i=n.pending,i!==null&&(a=i.next,a===i?n.pending=null:(a=a.next,i.next=a,Og(n,a)))}function Wd(n,i,a){var u=n.pending;if(n.pending=null,u!==null){u=u.next;do i.status="rejected",i.reason=a,Hg(i),i=i.next;while(i!==u)}n.action=null}function Hg(n){n=n.listeners;for(var i=0;i<n.length;i++)(0,n[i])()}function Vg(n,i){return i}function Gg(n,i){if(pt){var a=Wt.formState;if(a!==null){e:{var u=lt;if(pt){if(Jt){var f=y1(Jt,Wi);if(f){Jt=$v(f),u=b1(f);break e}}yt(u)}u=!1}u&&(i=a[0])}}a=Dt(),a.memoizedState=a.baseState=i,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vg,lastRenderedState:i},a.queue=u,a=a0.bind(null,lt,u),u.dispatch=a,u=Gd(!1);var h=jd.bind(null,lt,!1,u.queue);return u=Dt(),f={state:i,dispatch:null,action:n,pending:null},u.queue=f,a=kS.bind(null,lt,f,h,a),f.dispatch=a,u.memoizedState=n,[i,a,!1]}function Wg(n){var i=$e();return Xg(i,Bt,n)}function Xg(n,i,a){if(i=gn(n,i,Vg)[0],n=mt(Bn)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var u=hn(i)}catch(w){throw w===ta?rc:w}else u=i;i=$e();var f=i.queue,h=f.dispatch;return a!==i.memoizedState&&(lt.flags|=2048,Fo(9,{destroy:void 0},FS.bind(null,f,a),null)),[u,h,n]}function FS(n,i){n.action=i}function qg(n){var i=$e(),a=Bt;if(a!==null)return Xg(i,a,n);$e(),i=i.memoizedState,a=$e();var u=a.queue.dispatch;return a.memoizedState=n,[i,u,!1]}function Fo(n,i,a,u){return n={tag:n,create:a,deps:u,inst:i,next:null},i=lt.updateQueue,i===null&&(i=Ui(),lt.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=n.next=n:(u=a.next,a.next=n,n.next=u,i.lastEffect=n),n}function $g(){return $e().memoizedState}function Eu(n,i,a,u){var f=Dt();lt.flags|=n,f.memoizedState=Fo(1|i,{destroy:void 0},a,u===void 0?null:u)}function Au(n,i,a,u){var f=$e();u=u===void 0?null:u;var h=f.memoizedState.inst;Bt!==null&&u!==null&&ut(u,Bt.memoizedState.deps)?f.memoizedState=Fo(i,h,a,u):(lt.flags|=n,f.memoizedState=Fo(1|i,h,a,u))}function Yg(n,i){Eu(8390656,8,n,i)}function Xd(n,i){Au(2048,8,n,i)}function US(n){lt.flags|=4;var i=lt.updateQueue;if(i===null)i=Ui(),lt.updateQueue=i,i.events=[n];else{var a=i.events;a===null?i.events=[n]:a.push(n)}}function jg(n){var i=$e().memoizedState;return US({ref:i,nextImpl:n}),function(){if((_t&2)!==0)throw Error(o(440));return i.impl.apply(void 0,arguments)}}function Zg(n,i){return Au(4,2,n,i)}function Jg(n,i){return Au(4,4,n,i)}function Kg(n,i){if(typeof i=="function"){n=n();var a=i(n);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Qg(n,i,a){a=a!=null?a.concat([n]):null,Au(4,4,Kg.bind(null,i,n),a)}function qd(){}function e0(n,i){var a=$e();i=i===void 0?null:i;var u=a.memoizedState;return i!==null&&ut(i,u[1])?u[0]:(a.memoizedState=[n,i],n)}function t0(n,i){var a=$e();i=i===void 0?null:i;var u=a.memoizedState;if(i!==null&&ut(i,u[1]))return u[0];if(u=n(),ao){O(!0);try{n()}finally{O(!1)}}return a.memoizedState=[u,i],u}function $d(n,i,a){return a===void 0||(Wr&1073741824)!==0&&(xt&261930)===0?n.memoizedState=i:(n.memoizedState=a,n=av(),lt.lanes|=n,Es|=n,a)}function n0(n,i,a,u){return Ai(a,i)?a:ws.current!==null?(n=$d(n,a,u),Ai(n,i)||(xn=!0),n):(Wr&106)===0||(Wr&1073741824)!==0&&(xt&261930)===0?(xn=!0,n.memoizedState=a):(n=av(),lt.lanes|=n,Es|=n,i)}function i0(n,i,a,u,f){var h=Hr();In(h!==0&&8>h?h:8);var w=Ze.T,k={};k.types=w!==null?w.types:null,Ze.T=k,jd(n,!1,i,a);try{var K=f(),fe=Ze.S;if(fe!==null&&fe(k,K),K!==null&&typeof K=="object"&&typeof K.then=="function"){var ge=ye(K,u);Qa(n,i,ge,Mi(n))}else Qa(n,i,u,Mi(n))}catch(Ce){Qa(n,i,{then:function(){},status:"rejected",reason:Ce},Mi())}finally{In(h),w!==null&&k.types!==null&&(w.types=k.types),Ze.T=w}}function r0(n){var i=n.memoizedState;if(i!==null)return i;i={memoizedState:qo,baseState:qo,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bn,lastRenderedState:qo},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bn,lastRenderedState:a},next:null},n.memoizedState=i,n=n.alternate,n!==null&&(n.memoizedState=i),i}function Yd(){return at(Vr)}function s0(){return $e().memoizedState}function o0(){return $e().memoizedState}function OS(n){for(var i=n.return;i!==null;){switch(i.tag){case 24:case 3:var a=Mi();n=nr(a);var u=mi(i,n,a);u!==null&&(gi(u,i,a),Zs(u,i,a)),i={cache:Xe()},n.payload=i;return}i=i.return}}function zS(n,i,a){var u=Mi();a={lane:u,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Cu(n)?l0(i,a):(a=er(n,i,a,u),a!==null&&(gi(a,n,u),u0(a,i,u)))}function a0(n,i,a){var u=Mi();Qa(n,i,a,u)}function Qa(n,i,a,u){var f={lane:u,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Cu(n))l0(i,f);else{var h=n.alternate;if(n.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var w=i.lastRenderedState,k=h(w,a);if(f.hasEagerState=!0,f.eagerState=k,Ai(k,w))return Ys(n,i,f,0),Wt===null&&$s(),!1}catch{}if(a=er(n,i,f,u),a!==null)return gi(a,n,u),u0(a,i,u),!0}return!1}function jd(n,i,a,u){if(u={lane:2,revertLane:le(),gesture:null,action:u,hasEagerState:!1,eagerState:null,next:null},Cu(n)){if(i)throw Error(o(479))}else i=er(n,a,u,2),i!==null&&gi(i,n,2)}function Cu(n){var i=n.alternate;return n===lt||i!==null&&i===lt}function l0(n,i){ra=ac=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function u0(n,i,a){if((a&4194048)!==0){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,F(n,a)}}function Zd(n,i,a,u){i=n.memoizedState,a=a(u,i),a=a==null?i:Bh({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}function c0(n,i,a,u,f,h,w){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,h,w):i.prototype&&i.prototype.isPureReactComponent?!pe(a,u)||!pe(f,h):!0}function f0(n,i,a,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,u),i.state!==n&&hp.enqueueReplaceState(i,i.state,null)}function Ks(n,i){var a=i;if("ref"in i){a={};for(var u in i)u!=="ref"&&(a[u]=i[u])}if(n=n.defaultProps){a===i&&(a=Bh({},a));for(var f in n)a[f]===void 0&&(a[f]=n[f])}return a}function Ru(n,i){try{var a=n.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(u){setTimeout(function(){throw u})}}function d0(n,i,a){try{var u=n.onCaughtError;u(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Jd(n,i,a){return a=nr(a),a.tag=3,a.payload={element:null},a.callback=function(){Ru(n,i)},a}function h0(n){return n=nr(n),n.tag=3,n}function p0(n,i,a,u){var f=a.type.getDerivedStateFromError;if(typeof f=="function"){var h=u.value;n.payload=function(){return f(h)},n.callback=function(){d0(i,a,u)}}var w=a.stateNode;w!==null&&typeof w.componentDidCatch=="function"&&(n.callback=function(){d0(i,a,u),typeof f!="function"&&(As===null?As=new Set([this]):As.add(this));var k=u.stack;this.componentDidCatch(u.value,{componentStack:k!==null?k:""})})}function BS(n,i,a,u,f){if(a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(i=a.alternate,i!==null&&H(i,a,f,!0),a=Xn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return li===null?Vu():a.alternate===null&&pn===0&&(pn=3),a.flags&=-257,a.flags|=65536,a.lanes=f,u===sc?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([u]):i.add(u),kh(n,u,f)),!1;case 22:return a.flags|=65536,u===sc?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([u])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([u]):a.add(u)),kh(n,u,f)),!1}throw Error(o(435,a.tag))}return kh(n,u,f),Vu(),!1}if(pt)return i=Xn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,u!==op&&(n=Error(o(422),{cause:u}),jn(Ve(n,a)))):(u!==op&&(i=Error(o(423),{cause:u}),jn(Ve(i,a))),n=n.current.alternate,n.flags|=65536,f&=-f,n.lanes|=f,u=Ve(u,a),f=Jd(n.stateNode,u,f),ko(n,f),pn!==4&&(pn=2)),!1;var h=Error(o(520),{cause:u});if(h=Ve(h,a),_l===null?_l=[h]:_l.push(h),pn!==4&&(pn=2),i===null)return!0;u=Ve(u,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,n=f&-f,a.lanes|=n,n=Jd(a.stateNode,u,n),ko(a,n),!1;case 1:if(i=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(As===null||!As.has(h))))return a.flags|=65536,f&=-f,a.lanes|=f,f=h0(f),p0(f,n,a,u),ko(a,f),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}function Cn(n,i,a,u){i.child=n===null?uy(i,null,a,u):oo(i,n.child,a,u)}function m0(n,i,a,u,f){a=a.render;var h=i.ref;if("ref"in u){var w={};for(var k in u)k!=="ref"&&(w[k]=u[k])}else w=u;return Rt(i),u=Ue(n,i,a,w,h,f),k=Lt(),n!==null&&!xn?(_n(n,i,f),Or(n,i,f)):(pt&&k&&ke(i),i.flags|=1,Cn(n,i,u,f),i.child)}function g0(n,i,a,u,f){if(n===null){var h=a.type;return typeof h=="function"&&!Fh(h)&&h.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=h,v0(n,i,h,u,f)):(n=Wu(a.type,null,u,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(h=n.child,!rh(n,f)){var w=h.memoizedProps;if(a=a.compare,a=a!==null?a:pe,a(w,u)&&n.ref===i.ref)return Or(n,i,f)}return i.flags|=1,n=zr(h,u),n.ref=i.ref,n.return=i,i.child=n}function v0(n,i,a,u,f){if(n!==null){var h=n.memoizedProps;if(pe(h,u)&&n.ref===i.ref)if(xn=!1,i.pendingProps=u=h,rh(n,f))(n.flags&131072)!==0&&(xn=!0);else return i.lanes=n.lanes,Or(n,i,f)}return Kd(n,i,a,u,f)}function y0(n,i,a,u){var f=u.children,h=n!==null?n.memoizedState:null;if(n===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),u.mode==="hidden"){if((i.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,n!==null){for(u=i.child=n.child,f=0;u!==null;)f=f|u.lanes|u.childLanes,u=u.sibling;u=f&~h}else u=0,i.child=null;return b0(n,i,h,a,u)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},n!==null&&He(i,h!==null?h.cachePool:null),h!==null?Ja(i,h):E(),Y(i);else return u=i.lanes=536870912,b0(n,i,h!==null?h.baseLanes|a:a,a,u)}else h!==null?(He(i,h.cachePool),Ja(i,h),be(),i.memoizedState=null):(n!==null&&He(i,null),E(),be());return Cn(n,i,f,a),i.child}function el(n,i){return n!==null&&n.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function b0(n,i,a,u,f){var h=_e();return h=h===null?null:{parent:vr?sn._currentValue:sn._currentValue2,pool:h},i.memoizedState={baseLanes:a,cachePool:h},n!==null&&He(i,null),E(),Y(i),n!==null&&H(n,i,u,!0),i.childLanes=f,null}function Pu(n,i){return i=Iu({mode:i.mode,children:i.children},n.mode),i.ref=n.ref,n.child=i,i.return=n,i}function _0(n,i,a){return oo(i,n.child,null,a),n=Pu(i,i.pendingProps),n.flags|=2,Re(i),i.memoizedState=null,n}function HS(n,i,a){var u=i.pendingProps,f=(i.flags&128)!==0;if(i.flags&=-129,n===null){if(pt){if(u.mode==="hidden")return n=Pu(i,u),i.lanes=536870912,n.memoizedState={baseLanes:0,cachePool:null},el(null,n);if(q(i),(n=Jt)?(n=C1(n,Wi),n!==null&&(i.memoizedState={dehydrated:n,treeContext:_s!==null?{id:br,overflow:_r}:null,retryLane:536870912,hydrationErrors:null},a=Mv(n),a.return=i,i.child=a,Nn=i,Jt=null)):n=null,n===null)throw yt(i);return i.lanes=536870912,null}return Pu(i,u)}var h=n.memoizedState;if(h!==null){var w=h.dehydrated;if(q(i),f)if(i.flags&256)i.flags&=-257,i=_0(n,i,a);else if(i.memoizedState!==null)i.child=n.child,i.flags|=128,i=null;else throw Error(o(558));else if(xn||H(n,i,a,!1),f=(a&n.childLanes)!==0,xn||f){if(ws.current===null){if(u=Wt,u!==null&&(w=B(u,a),w!==0&&w!==h.retryLane))throw h.retryLane=w,tr(n,w),gi(u,n,w),pp;Vu()}i=_0(n,i,a)}else n=h.treeContext,Gn&&(Jt=M1(w),Nn=i,pt=!0,xs=null,Wi=!1,n!==null&&Ne(i,n)),i=Pu(i,u),i.flags|=134221824;return i}return n=zr(n.child,{mode:u.mode,children:u.children}),n.ref=i.ref,i.child=n,n.return=i,n}function Uo(n,i){var a=i.ref;if(a===null)n!==null&&n.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(o(284));(n===null||n.ref!==a)&&(i.flags|=4194816)}}function Kd(n,i,a,u,f){return Rt(i),a=Ue(n,i,a,u,void 0,f),u=Lt(),n!==null&&!xn?(_n(n,i,f),Or(n,i,f)):(pt&&u&&ke(i),i.flags|=1,Cn(n,i,a,f),i.child)}function S0(n,i,a,u,f,h){return Rt(i),i.updateQueue=null,a=tn(i,u,a,f),ht(n),u=Lt(),n!==null&&!xn?(_n(n,i,h),Or(n,i,h)):(pt&&u&&ke(i),i.flags|=1,Cn(n,i,a,h),i.child)}function x0(n,i,a,u,f){if(Rt(i),i.stateNode===null){var h=jo,w=a.contextType;typeof w=="object"&&w!==null&&(h=at(w)),h=new a(u,h),i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=hp,i.stateNode=h,h._reactInternals=i,h=i.stateNode,h.props=u,h.state=i.memoizedState,h.refs={},hs(i),w=a.contextType,h.context=typeof w=="object"&&w!==null?at(w):jo,h.state=i.memoizedState,w=a.getDerivedStateFromProps,typeof w=="function"&&(Zd(i,a,w,u),h.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(w=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),w!==h.state&&hp.enqueueReplaceState(h,h.state,null),Js(i,u,h,f),ps(),h.state=i.memoizedState),typeof h.componentDidMount=="function"&&(i.flags|=4194308),u=!0}else if(n===null){h=i.stateNode;var k=i.memoizedProps,K=Ks(a,k);h.props=K;var fe=h.context,ge=a.contextType;w=jo,typeof ge=="object"&&ge!==null&&(w=at(ge));var Ce=a.getDerivedStateFromProps;ge=typeof Ce=="function"||typeof h.getSnapshotBeforeUpdate=="function",k=i.pendingProps!==k,ge||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(k||fe!==w)&&f0(i,h,u,w),Ms=!1;var De=i.memoizedState;h.state=De,Js(i,u,h,f),ps(),fe=i.memoizedState,k||De!==fe||Ms?(typeof Ce=="function"&&(Zd(i,a,Ce,u),fe=i.memoizedState),(K=Ms||c0(i,a,K,u,De,fe,w))?(ge||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(i.flags|=4194308)):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=fe),h.props=u,h.state=fe,h.context=w,u=K):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{h=i.stateNode,Do(n,i),w=i.memoizedProps,ge=Ks(a,w),h.props=ge,Ce=i.pendingProps,De=h.context,fe=a.contextType,K=jo,typeof fe=="object"&&fe!==null&&(K=at(fe)),k=a.getDerivedStateFromProps,(fe=typeof k=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(w!==Ce||De!==K)&&f0(i,h,u,K),Ms=!1,De=i.memoizedState,h.state=De,Js(i,u,h,f),ps();var gt=i.memoizedState;w!==Ce||De!==gt||Ms||n!==null&&n.dependencies!==null&&zn(n.dependencies)?(typeof k=="function"&&(Zd(i,a,k,u),gt=i.memoizedState),(ge=Ms||c0(i,a,ge,u,De,gt,K)||n!==null&&n.dependencies!==null&&zn(n.dependencies))?(fe||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(u,gt,K),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(u,gt,K)),typeof h.componentDidUpdate=="function"&&(i.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof h.componentDidUpdate!="function"||w===n.memoizedProps&&De===n.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||w===n.memoizedProps&&De===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=gt),h.props=u,h.state=gt,h.context=K,u=ge):(typeof h.componentDidUpdate!="function"||w===n.memoizedProps&&De===n.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||w===n.memoizedProps&&De===n.memoizedState||(i.flags|=1024),u=!1)}return h=u,Uo(n,i),u=(i.flags&128)!==0,h||u?(h=i.stateNode,a=u&&typeof a.getDerivedStateFromError!="function"?null:h.render(),i.flags|=1,n!==null&&u?(i.child=oo(i,n.child,null,f),i.child=oo(i,null,a,f)):Cn(n,i,a,f),i.memoizedState=h.state,n=i.child):n=Or(n,i,f),n}function M0(n,i,a,u){return cn(),i.flags|=256,Cn(n,i,a,u),i.child}function Qd(n){return{baseLanes:n,cachePool:ot()}}function eh(n,i,a){return n=n!==null?n.childLanes&~a:0,i&&(n|=Pi),n}function w0(n,i,a){var u=i.pendingProps,f=!1,h=(i.flags&128)!==0,w;if((w=h)||(w=n!==null&&n.memoizedState===null?!1:(qn.current&2)!==0),w&&(f=!0,i.flags&=-129),w=(i.flags&32)!==0,i.flags&=-33,n===null){if(pt){if(f?J(i):be(),(n=Jt)?(n=R1(n,Wi),n!==null&&(i.memoizedState={dehydrated:n,treeContext:_s!==null?{id:br,overflow:_r}:null,retryLane:536870912,hydrationErrors:null},a=Mv(n),a.return=i,i.child=a,Nn=i,Jt=null)):n=null,n===null)throw yt(i);return Kh(n)?i.lanes=32:i.lanes=536870912,null}return h=u.children,u=u.fallback,f?(be(),f=i.mode,h=Iu({mode:"hidden",children:h},f),u=Qs(u,f,a,null),h.return=i,u.return=i,h.sibling=u,i.child=h,u=i.child,u.memoizedState=Qd(a),u.childLanes=eh(n,w,a),i.memoizedState=mp,el(null,u)):(J(i),th(i,h))}var k=n.memoizedState;if(k!==null){var K=k.dehydrated;if(K!==null)return VS(n,i,h,w,u,K,k,a)}return f?(be(),f=u.fallback,h=i.mode,k=n.child,K=k.sibling,u=zr(k,{mode:"hidden",children:u.children}),u.subtreeFlags=k.subtreeFlags&1206910976,K!==null?f=zr(K,f):(f=Qs(f,h,a,null),f.flags|=2),f.return=i,u.return=i,u.sibling=f,i.child=u,el(null,u),u=i.child,f=n.child.memoizedState,f===null?f=Qd(a):(h=f.cachePool,h!==null?(k=vr?sn._currentValue:sn._currentValue2,h=h.parent!==k?{parent:k,pool:k}:h):h=ot(),f={baseLanes:f.baseLanes|a,cachePool:h}),u.memoizedState=f,u.childLanes=eh(n,w,a),i.memoizedState=mp,el(n.child,u)):(J(i),a=n.child,n=a.sibling,a=zr(a,{mode:"visible",children:u.children}),a.return=i,a.sibling=null,n!==null&&(w=i.deletions,w===null?(i.deletions=[n],i.flags|=16):w.push(n)),i.child=a,i.memoizedState=null,a)}function th(n,i){return i=Iu({mode:"visible",children:i},n.mode),i.return=n,n.child=i}function Iu(n,i){return n=t(22,n,null,i),n.lanes=0,n}function Nu(n,i,a){return oo(i,n.child,null,a),n=th(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function VS(n,i,a,u,f,h,w,k){if(a)return i.flags&256?(J(i),i.flags&=-257,Nu(n,i,k)):i.memoizedState!==null?(be(),i.child=n.child,i.flags|=128,null):(be(),h=f.fallback,w=i.mode,f=Iu({mode:"visible",children:f.children},w),h=Qs(h,w,k,null),h.flags|=2,f.return=i,h.return=i,f.sibling=h,i.child=f,oo(i,n.child,null,k),f=i.child,f.memoizedState=Qd(k),f.childLanes=eh(n,u,k),i.memoizedState=mp,el(null,f));if(J(i),Kh(h))return u=g1(h).digest,u!==""&&(f=Error(o(419)),f.stack="",f.digest=u,jn({value:f,source:null,stack:null})),Nu(n,i,k);if(xn||H(n,i,k,!1),u=(k&n.childLanes)!==0,xn||u){if(ws.current!==null)return Nu(n,i,k);if(u=Wt,u!==null&&(f=B(u,k),f!==0&&f!==w.retryLane))throw w.retryLane=f,tr(n,f),gi(u,n,f),pp;return Jh(h)||Vu(),Nu(n,i,k)}return Jh(h)?(i.flags|=192,i.child=n.child,null):(n=w.treeContext,Gn&&(Jt=w1(h),Nn=i,pt=!0,xs=null,Wi=!1,n!==null&&Ne(i,n)),i=th(i,f.children),i.flags|=134221824,i)}function T0(n,i,a){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),On(n.return,i,a)}function E0(n){for(var i=null;n!==null;){var a=n.alternate;a!==null&&ze(a)===null&&(i=n),n=n.sibling}return i}function Lu(n,i,a,u,f,h){var w=n.memoizedState;w===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:f,treeForkCount:h}:(w.isBackwards=i,w.rendering=null,w.renderingStartTime=0,w.last=u,w.tail=a,w.tailMode=f,w.treeForkCount=h)}function nh(n){var i=n.child;for(n.child=null;i!==null;){var a=i.sibling;i.sibling=n.child,n.child=i,i=a}}function ih(n,i,a){var u=i.pendingProps,f=u.revealOrder,h=u.tail;u=u.children;var w=qn.current;if(i.flags&128)return Se(i,w),null;var k=(w&2)!==0;if(k?(w=w&1|2,i.flags|=128):w&=1,Se(i,w),f==="backwards"&&n!==null?(nh(n),Cn(n,i,u,a),nh(n)):Cn(n,i,u,a),u=pt?dl:0,!k&&n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&T0(n,a,i);else if(n.tag===19)T0(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}switch(f){case"backwards":a=E0(i.child),a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null,nh(i)),Lu(i,!0,f,null,h,u);break;case"unstable_legacy-backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&ze(n)===null){i.child=f;break}n=f.sibling,f.sibling=a,a=f,f=n}Lu(i,!0,a,null,h,u);break;case"together":Lu(i,!1,null,null,void 0,u);break;case"independent":i.memoizedState=null;break;default:a=E0(i.child),a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),Lu(i,!1,f,a,h,u)}return i.child}function A0(n,i,a){var u=i.pendingProps;return Gt(i,i.type,u.value),Cn(n,i,u.children,a),i.child}function Or(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Es|=i.lanes,(a&i.childLanes)===0)if(n!==null){if(H(n,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(n!==null&&i.child!==n.child)throw Error(o(153));if(i.child!==null){for(n=i.child,a=zr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=zr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function rh(n,i){return(n.lanes&i)!==0?!0:(n=n.dependencies,!!(n!==null&&zn(n)))}function GS(n,i,a){switch(i.tag){case 3:Qe(i,i.stateNode.containerInfo),Gt(i,sn,n.memoizedState.cache),cn();break;case 27:case 5:qe(i);break;case 4:Qe(i,i.stateNode.containerInfo);break;case 10:Gt(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,q(i),null;break;case 13:var u=i.memoizedState;if(u!==null){if(u.dehydrated!==null)return J(i),i.flags|=128,null;u=H(n,i,a,!1);var f=i.child.childLanes;return u||(a&f)!==0?w0(n,i,a):(J(i),n=Or(n,i,a),n!==null?n.sibling:null)}J(i);break;case 19:if(i.flags&128)return ih(n,i,a);if(f=(n.flags&128)!==0,u=(a&i.childLanes)!==0,u||(H(n,i,a,!1),u=(a&i.childLanes)!==0),f){if(u)return ih(n,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Se(i,qn.current),u)break;return null;case 22:return i.lanes=0,y0(n,i,a,i.pendingProps);case 24:Gt(i,sn,n.memoizedState.cache)}return Or(n,i,a)}function C0(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps)xn=!0;else{if(!rh(n,a)&&(i.flags&128)===0)return xn=!1,GS(n,i,a);xn=(n.flags&131072)!==0}else xn=!1,pt&&(i.flags&1048576)!==0&&Pe(i,dl,i.index);switch(i.lanes=0,i.tag){case 16:e:{var u=i.pendingProps;if(n=Ae(i.elementType),i.type=n,typeof n=="function")Fh(n)?(u=Ks(n,u),i.tag=1,i=x0(null,i,n,u,a)):(i.tag=0,i=Kd(null,i,n,u,a));else{if(n!=null){var f=n.$$typeof;if(f===Vh){i.tag=11,i=m0(null,i,n,u,a);break e}else if(f===Xh){i.tag=14,i=g0(null,i,n,u,a);break e}else if(f===Br){i.tag=10,i.type=n,i=A0(null,i,a);break e}}throw i=_(n)||n,Error(o(306,i,""))}}return i;case 0:return Kd(n,i,i.type,i.pendingProps,a);case 1:return u=i.type,f=Ks(u,i.pendingProps),x0(n,i,u,f,a);case 3:e:{if(Qe(i,i.stateNode.containerInfo),n===null)throw Error(o(387));var h=i.pendingProps;f=i.memoizedState,u=f.element,Do(n,i),Js(i,h,null,a);var w=i.memoizedState;if(h=w.cache,Gt(i,sn,h),h!==f.cache&&Zn(i,[sn],a,!0),ps(),h=w.element,Gn&&f.isDehydrated)if(f={element:h,isDehydrated:!1,cache:w.cache},i.updateQueue.baseState=f,i.memoizedState=f,i.flags&256){i=M0(n,i,h,a);break e}else if(h!==u){u=Ve(Error(o(424)),i),jn(u),i=M0(n,i,h,a);break e}else for(Gn&&(Jt=x1(i.stateNode.containerInfo),Nn=i,pt=!0,xs=null,Wi=!0),a=uy(i,null,h,a),i.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling;else{if(cn(),h===u){i=Or(n,i,a);break e}Cn(n,i,h,a)}i=i.child}return i;case 26:if(Hi)return Uo(n,i),n===null?(a=Zv(i.type,null,i.pendingProps,null))?i.memoizedState=a:pt||(i.stateNode=Qv(i.type,i.pendingProps,Ss.current,i)):i.memoizedState=Zv(i.type,n.memoizedProps,i.pendingProps,n.memoizedState),null;case 27:if(rn)return qe(i),n===null&&rn&&pt&&(u=i.stateNode=ty(i.type,i.pendingProps,Ss.current,Wn.current,!1),Nn=i,Wi=!0,Jt=T1(i.type,u,Jt)),Cn(n,i,i.pendingProps.children,a),Uo(n,i),n===null&&(i.flags|=4194304),i.child;case 5:return n===null&&pt&&(q1(i.type,i.pendingProps,Wn.current),(f=u=Jt)&&(u=E1(u,i.type,i.pendingProps,Wi),u!==null?(i.stateNode=u,Nn=i,Jt=S1(u),Wi=!1,f=!0):f=!1),f||yt(i)),qe(i),f=i.type,h=i.pendingProps,w=n!==null?n.memoizedProps:null,u=h.children,$u(f,h)?u=null:w!==null&&$u(f,w)&&(i.flags|=32),i.memoizedState!==null&&(f=Ue(n,i,zt,null,null,a),vr?Vr._currentValue=f:Vr._currentValue2=f),Uo(n,i),Cn(n,i,u,a),i.child;case 6:return n===null&&pt&&($1(i.pendingProps,Wn.current),(n=a=Jt)&&(a=A1(a,i.pendingProps,Wi),a!==null?(i.stateNode=a,Nn=i,Jt=null,n=!0):n=!1),n||yt(i)),null;case 13:return w0(n,i,a);case 4:return Qe(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=oo(i,null,u,a):Cn(n,i,u,a),i.child;case 11:return m0(n,i,i.type,i.pendingProps,a);case 7:return u=i.pendingProps,Uo(n,i),Cn(n,i,u,a),i.child;case 8:return Cn(n,i,i.pendingProps.children,a),i.child;case 12:return Cn(n,i,i.pendingProps.children,a),i.child;case 10:return A0(n,i,a);case 9:return f=i.type._context,u=i.pendingProps.children,Rt(i),f=at(f),u=u(f),i.flags|=1,Cn(n,i,u,a),i.child;case 14:return g0(n,i,i.type,i.pendingProps,a);case 15:return v0(n,i,i.type,i.pendingProps,a);case 19:return ih(n,i,a);case 31:return HS(n,i,a);case 22:return y0(n,i,a,i.pendingProps);case 24:return Rt(i),u=at(sn),n===null?(f=_e(),f===null&&(f=Wt,h=Xe(),f.pooledCache=h,h.refCount++,h!==null&&(f.pooledCacheLanes|=a),f=h),i.memoizedState={parent:u,cache:f},hs(i),Gt(i,sn,f)):((n.lanes&a)!==0&&(Do(n,i),Js(i,null,null,a),ps()),f=n.memoizedState,h=i.memoizedState,f.parent!==u?(f={parent:u,cache:u},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),Gt(i,sn,u)):(u=h.cache,Gt(i,sn,u),u!==f.cache&&Zn(i,[sn],a,!0))),Cn(n,i,i.pendingProps.children,a),i.child;case 30:return i.stateNode===null&&(i.stateNode={autoName:null,paired:null,clones:null,ref:null}),u=i.pendingProps,u.name!=null&&u.name!=="auto"?i.flags|=n===null?18882560:18874368:pt&&ke(i),n!==null&&n.memoizedProps.name!==u.name?i.flags|=4194816:Uo(n,i),Cn(n,i,u.children,a),i.child;case 29:throw i.pendingProps}throw Error(o(156,i.tag))}function ir(n){n.flags|=4}function Du(n){yr&&(n.flags|=8)}function R0(n,i){if(n!==null&&n.child===i.child)return!1;if((i.flags&16)!==0)return!0;for(n=i.child;n!==null;){if((n.flags&8218)!==0||(n.subtreeFlags&8218)!==0)return!0;n=n.sibling}return!1}function sh(n,i,a,u){if(nn)for(a=i.child;a!==null;){if(a.tag===5||a.tag===6)Yh(n,a.stateNode);else if(!(a.tag===4||rn&&a.tag===27)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}else if(yr)for(var f=i.child;f!==null;){if(f.tag===5){var h=f.stateNode;a&&u&&(h=Xv(h,f.type,f.memoizedProps)),Yh(n,h)}else if(f.tag===6)h=f.stateNode,a&&u&&(h=qv(h,f.memoizedProps)),Yh(n,h);else if(f.tag!==4){if(f.tag===22&&f.memoizedState!==null)h=f.child,h!==null&&(h.return=f),sh(n,f,!0,!0);else if(f.child!==null){f.child.return=f,f=f.child;continue}}if(f===i)break;for(;f.sibling===null;){if(f.return===null||f.return===i)return;f=f.return}f.sibling.return=f.return,f=f.sibling}}function P0(n,i,a,u){var f=!1;if(yr)for(var h=i.child;h!==null;){if(h.tag===5){var w=h.stateNode;a&&u&&(w=Xv(w,h.type,h.memoizedProps)),Gv(n,w)}else if(h.tag===6)w=h.stateNode,a&&u&&(w=qv(w,h.memoizedProps)),Gv(n,w);else if(h.tag!==4){if(h.tag===22&&h.memoizedState!==null)f=h.child,f!==null&&(f.return=h),P0(n,h,!0,!0),f=!0;else if(h.child!==null){h.child.return=h,h=h.child;continue}}if(h===i)break;for(;h.sibling===null;){if(h.return===null||h.return===i)return f;h=h.return}h.sibling.return=h.return,h=h.sibling}return f}function I0(n,i){if(yr&&R0(n,i)){n=i.stateNode;var a=n.containerInfo,u=Vv();P0(u,i,!1,!1),n.pendingChildren=u,ir(i),m1(a,u)}}function oh(n,i,a,u){if(nn)n.memoizedProps!==u&&ir(i);else if(yr){var f=n.stateNode,h=n.memoizedProps;if((n=R0(n,i))||h!==u){var w=Wn.current;h=p1(f,a,h,u,!n,null),h===f?i.stateNode=f:(Du(i),Dv(h,a,u,w)&&ir(i),i.stateNode=h,n&&sh(h,i,!1,!1))}else i.stateNode=f}}function ah(n,i,a,u,f){if((n.mode&32)!==0&&(a===null?Ax(i,u):Cx(i,a,u))){if(n.flags|=16777216,(f&335544128)===f||jh(i,u))if(Fv(n.stateNode,i,u))n.flags|=8192;else if(dv())n.flags|=8192;else throw so=sc,cp}else n.flags&=-16777217}function N0(n,i){if(Z1(i)){if(n.flags|=16777216,!ey(i))if(dv())n.flags|=8192;else throw so=sc,cp}else n.flags&=-16777217}function ku(n,i){i!==null&&(n.flags|=4),n.flags&16384&&(i=n.tag!==22?D():536870912,n.lanes|=i,aa|=i)}function tl(n,i){if(!pt)switch(n.tailMode){case"visible":break;case"collapsed":for(var a=n.tail,u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null;break;default:for(i=n.tail,a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null}}function Yt(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,u=0;if(i)for(var f=n.child;f!==null;)a|=f.lanes|f.childLanes,u|=f.subtreeFlags&1206910976,u|=f.flags&1206910976,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)a|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=u,n.childLanes=a,i}function WS(n,i,a){var u=i.pendingProps;switch(We(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yt(i),null;case 1:return Yt(i),null;case 3:return a=i.stateNode,u=null,n!==null&&(u=n.memoizedState.cache),i.memoizedState.cache!==u&&(i.flags|=2048),fn(sn),Ht(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(n===null||n.child===null)&&(qt(i)?ir(i):n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Vt())),I0(n,i),Yt(i),null;case 26:if(Hi){var f=i.type,h=i.memoizedState;return n===null?(ir(i),h!==null?(Yt(i),N0(i,h)):(Yt(i),ah(i,f,null,u,a))):h?h!==n.memoizedState?(ir(i),Yt(i),N0(i,h)):(Yt(i),i.flags&=-16777217):(h=n.memoizedProps,nn?h!==u&&ir(i):oh(n,i,f,u),Yt(i),ah(i,f,h,u,a)),null}case 27:if(rn){if(Tt(i),a=Ss.current,f=i.type,n!==null&&i.stateNode!=null)nn?n.memoizedProps!==u&&ir(i):oh(n,i,f,u);else{if(!u){if(i.stateNode===null)throw Error(o(166));return Yt(i),i.subtreeFlags&=-33554433,null}n=Wn.current,qt(i)?dt(i,n):(n=ty(f,u,a,n,!0),i.stateNode=n,ir(i))}return Yt(i),i.subtreeFlags&=-33554433,null}case 5:if(Tt(i),f=i.type,n!==null&&i.stateNode!=null)oh(n,i,f,u);else{if(!u){if(i.stateNode===null)throw Error(o(166));return Yt(i),i.subtreeFlags&=-33554433,null}if(h=Wn.current,qt(i))dt(i,h),B1(i.stateNode,f,u,h)&&(i.flags|=64);else{var w=bx(f,u,Ss.current,h,i);Du(i),sh(w,i,!1,!1),i.stateNode=w,Dv(w,f,u,h)&&ir(i)}}return Yt(i),i.subtreeFlags&=-33554433,ah(i,i.type,n===null?null:n.memoizedProps,i.pendingProps,a),null;case 6:if(n&&i.stateNode!=null)a=n.memoizedProps,nn?a!==u&&ir(i):yr&&(a!==u?(n=Ss.current,a=Wn.current,Du(i),i.stateNode=kv(u,n,a,i)):i.stateNode=n.stateNode);else{if(typeof u!="string"&&i.stateNode===null)throw Error(o(166));if(n=Ss.current,a=Wn.current,qt(i)){if(!Gn)throw Error(o(176));if(n=i.stateNode,a=i.memoizedProps,u=null,f=Nn,f!==null)switch(f.tag){case 27:case 5:u=f.memoizedProps}I1(n,a,i,u)||yt(i,!0)}else Du(i),i.stateNode=kv(u,n,a,i)}return Yt(i),null;case 31:if(a=i.memoizedState,n===null||n.memoizedState!==null){if(u=qt(i),a!==null){if(n===null){if(!u)throw Error(o(318));if(!Gn)throw Error(o(556));if(n=i.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(o(557));N1(n,i)}else cn(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Yt(i),n=!1}else a=Vt(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=a),n=!0;if(!n)return i.flags&256?(Re(i),i):(Re(i),null);if((i.flags&128)!==0)throw Error(o(558))}return Yt(i),null;case 13:if(u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(f=qt(i),u!==null&&u.dehydrated!==null){if(n===null){if(!f)throw Error(o(318));if(!Gn)throw Error(o(344));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(o(317));L1(f,i)}else cn(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Yt(i),f=!1}else f=Vt(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(Re(i),i):(Re(i),null)}return Re(i),(i.flags&128)!==0?(i.lanes=a,i):(a=u!==null,n=n!==null&&n.memoizedState!==null,a&&(u=i.child,f=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(f=u.alternate.memoizedState.cachePool.pool),h=null,u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(h=u.memoizedState.cachePool.pool),h!==f&&(u.flags|=2048)),a!==n&&a&&(i.child.flags|=8192),ku(i,i.updateQueue),Yt(i),null);case 4:return Ht(),I0(n,i),n===null&&Mx(i.stateNode.containerInfo),i.flags|=67108864,Yt(i),null;case 10:return fn(i.type),Yt(i),null;case 19:if(Ie(i),u=i.memoizedState,u===null)return Yt(i),null;if(f=(i.flags&128)!==0,h=u.rendering,h===null)if(f)tl(u,!1);else{if(pn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(h=ze(n),h!==null){for(i.flags|=128,tl(u,!1),n=h.updateQueue,i.updateQueue=n,ku(i,n),i.subtreeFlags=0,n=a,a=i.child;a!==null;)xv(a,n),a=a.sibling;return Se(i,qn.current&1|2),pt&&re(i,u.treeForkCount),i.child}n=n.sibling}u.tail!==null&&vi()>Sl&&(i.flags|=128,f=!0,tl(u,!1),i.lanes=4194304)}else{if(!f)if(n=ze(h),n!==null){if(i.flags|=128,f=!0,n=n.updateQueue,i.updateQueue=n,ku(i,n),tl(u,!0),u.tail===null&&u.tailMode!=="collapsed"&&u.tailMode!=="visible"&&!h.alternate&&!pt)return Yt(i),null}else 2*vi()-u.renderingStartTime>Sl&&a!==536870912&&(i.flags|=128,f=!0,tl(u,!1),i.lanes=4194304);u.isBackwards?(h.sibling=i.child,i.child=h):(n=u.last,n!==null?n.sibling=h:i.child=h,u.last=h)}if(u.tail!==null){n=u.tail;e:{for(a=n;a!==null;){if(a.alternate!==null){a=!1;break e}a=a.sibling}a=!0}return u.rendering=n,u.tail=n.sibling,u.renderingStartTime=vi(),n.sibling=null,h=qn.current,h=f?h&1|2:h&1,u.tailMode==="visible"||u.tailMode==="collapsed"||!a||pt?Se(i,h):(a=h,x(Xn,i),x(qn,a),li===null&&(li=i)),pt&&re(i,u.treeForkCount),n}return Yt(i),null;case 22:case 23:return Re(i),z(),u=i.memoizedState!==null,n!==null?n.memoizedState!==null!==u&&(i.flags|=8192):u&&(i.flags|=8192),u?(a&536870912)!==0&&(i.flags&128)===0&&(Yt(i),i.subtreeFlags&6&&(i.flags|=8192)):Yt(i),a=i.updateQueue,a!==null&&ku(i,a.retryQueue),a=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),u=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(u=i.memoizedState.cachePool.pool),u!==a&&(i.flags|=2048),n!==null&&y(ro),null;case 24:return a=null,n!==null&&(a=n.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),fn(sn),Yt(i),null;case 25:return null;case 30:return i.flags|=33554432,Yt(i),null}throw Error(o(156,i.tag))}function XS(n,i){switch(We(i),i.tag){case 1:return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return fn(sn),Ht(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 26:case 27:case 5:return Tt(i),null;case 31:if(i.memoizedState!==null){if(Re(i),i.alternate===null)throw Error(o(340));cn()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 13:if(Re(i),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(o(340));cn()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ie(i),n=i.flags,n&65536?(i.flags=n&-65537|128,n=i.memoizedState,n!==null&&(n.rendering=null,n.tail=null),i.flags|=4,i):null;case 4:return Ht(),null;case 10:return fn(i.type),null;case 22:case 23:return Re(i),z(),n!==null&&y(ro),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 24:return fn(sn),null;case 25:return null;default:return null}}function L0(n,i){switch(We(i),i.tag){case 3:fn(sn),Ht();break;case 26:case 27:case 5:Tt(i);break;case 4:Ht();break;case 31:i.memoizedState!==null&&Re(i);break;case 13:Re(i);break;case 19:Ie(i);break;case 10:fn(i.type);break;case 22:case 23:Re(i),z(),n!==null&&y(ro);break;case 24:fn(sn)}}function nl(n,i){try{var a=i.updateQueue,u=a!==null?a.lastEffect:null;if(u!==null){var f=u.next;a=f;do{if((a.tag&n)===n){u=void 0;var h=a.create,w=a.inst;u=h(),w.destroy=u}a=a.next}while(a!==f)}}catch(k){It(i,i.return,k)}}function ms(n,i,a){try{var u=i.updateQueue,f=u!==null?u.lastEffect:null;if(f!==null){var h=f.next;u=h;do{if((u.tag&n)===n){var w=u.inst,k=w.destroy;if(k!==void 0){w.destroy=void 0,f=i;var K=a,fe=k;try{fe()}catch(ge){It(f,K,ge)}}}u=u.next}while(u!==h)}}catch(ge){It(i,i.return,ge)}}function D0(n){var i=n.updateQueue;if(i!==null){var a=n.stateNode;try{Tu(i,a)}catch(u){It(n,n.return,u)}}}function k0(n,i,a){a.props=Ks(n.type,n.memoizedProps),a.state=n.memoizedState;try{a.componentWillUnmount()}catch(u){It(n,i,u)}}function pr(n,i){try{var a=n.ref;if(a!==null){switch(n.tag){case 26:case 27:case 5:var u=ll(n.stateNode);break;case 30:var f=n.stateNode,h=Q(n.memoizedProps,f);(f.ref===null||f.ref.name!==h)&&(f.ref=Bv(h)),u=f.ref;break;case 7:n.stateNode===null&&(n.stateNode=f1(n)),u=n.stateNode;break;default:u=n.stateNode}typeof a=="function"?n.refCleanup=a(u):a.current=u}}catch(w){It(n,i,w)}}function Hn(n,i){var a=n.ref,u=n.refCleanup;if(a!==null)if(typeof u=="function")try{u()}catch(f){It(n,i,f)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(f){It(n,i,f)}else a.current=null}function F0(){var n=Kn;return Kn=!1,n}function il(n,i){if((n.tag===5||n.tag===27||n.tag===6)&&n.alternate===null&&i!==null)for(var a=0;a<i.length;a++)Hv(n.stateNode,i[a])}function U0(n){for(var i=n.return;i!==null&&(uh(i)&&Hv(n.stateNode,i.stateNode),!lh(i));)i=i.return}function rl(n){for(var i=n.return;i!==null&&(uh(i)&&h1(n.stateNode,i.stateNode),!lh(i));)i=i.return}function lh(n){return n.tag===5||n.tag===3||(rn?n.tag===27:!1)}function uh(n){return n&&n.tag===7&&n.stateNode!==null}function ch(n){var i=n.type,a=n.memoizedProps,u=n.stateNode;try{Wx(u,i,a,n)}catch(f){It(n,n.return,f)}}function fh(n,i,a){try{Xx(n.stateNode,n.type,a,i,n)}catch(u){It(n,n.return,u)}}function O0(n){return n.tag===5||n.tag===3||(Hi?n.tag===26:!1)||(rn?n.tag===27&&$o(n.type):!1)||n.tag===4}function dh(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||O0(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(rn&&n.tag===27&&$o(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function hh(n,i,a,u){var f=n.tag;if(f===5||f===6)f=n.stateNode,i?$x(a,f,i):Vx(a,f),il(n,u),Kn=!0;else if(f!==4&&(rn&&f===27&&(il(n,u),u=null,$o(n.type)&&(a=n.stateNode,i=null)),n=n.child,n!==null))for(hh(n,i,a,u),n=n.sibling;n!==null;)hh(n,i,a,u),n=n.sibling}function Fu(n,i,a,u){var f=n.tag;if(f===5||f===6)f=n.stateNode,i?qx(a,f,i):Hx(a,f),il(n,u),Kn=!0;else if(f!==4&&(rn&&f===27&&(il(n,u),u=null,$o(n.type)&&(a=n.stateNode)),n=n.child,n!==null))for(Fu(n,i,a,u),n=n.sibling;n!==null;)Fu(n,i,a,u),n=n.sibling}function ph(n,i){if(n.tag===5||rn&&n.tag===27)il(n,i);else if(n.tag!==4&&(n=n.child,n!==null))for(ph(n,i),n=n.sibling;n!==null;)ph(n,i),n=n.sibling}function z0(n,i,a){n=n.containerInfo;try{Wv(n,a)}catch(u){It(i,i.return,u)}}function B0(n){var i=n.stateNode,a=n.memoizedProps;try{K1(n.type,a,i,n)}catch(u){It(n,n.return,u)}}function H0(n){(n.tag===30||(n.subtreeFlags&33554432)!==0)&&(cc=!0)}function V0(){var n=Sr;return Sr=null,n}function Oo(n,i,a,u,f){return yi=0,G0(n.child,i,a,u,f)}function G0(n,i,a,u,f){if(!nn)return!1;for(var h=!1;n!==null;){if(n.tag===5){var w=n.stateNode;if(u!==null){var k=Zh(w);u.push(k),Yu(k)&&(h=!0)}else h||Yu(Zh(w))&&(h=!0);cc=!0,zv(w,yi===0?i:i+"_"+yi,a),yi++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&f||G0(n.child,i,a,u,f)&&(h=!0));n=n.sibling}return h}function mr(n,i){if(nn)for(;n!==null;)n.tag===5?e1(n.stateNode,n.memoizedProps):(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&i||mr(n.child,i)),n=n.sibling}function Uu(n){if((n.subtreeFlags&18874368)!==0)for(n=n.child;n!==null;){if((n.tag!==22||n.memoizedState===null)&&(Uu(n),n.tag===30&&(n.flags&18874368)!==0&&n.stateNode.paired)){var i=n.memoizedProps;if(i.name==null||i.name==="auto")throw Error(o(544));var a=i.name;i=ee(i.default,i.share),i!=="none"&&(Oo(n,a,i,null,!1)||mr(n.child,!1))}n=n.sibling}}function mh(n,i){if(n.tag===30){var a=n.stateNode,u=n.memoizedProps,f=Q(u,a),h=ee(u.default,a.paired?u.share:u.enter);h!=="none"?Oo(n,f,h,null,!1)?(Uu(n),a.paired||i||Ho(n,u.onEnter)):mr(n.child,!1):Uu(n)}else if((n.subtreeFlags&33554432)!==0)for(n=n.child;n!==null;)mh(n,i),n=n.sibling;else Uu(n)}function gh(n){if(Ci!==null&&Ci.size!==0){var i=Ci;if((n.subtreeFlags&18874368)!==0)for(n=n.child;n!==null;){if(n.tag!==22||n.memoizedState===null){if(n.tag===30&&(n.flags&18874368)!==0){var a=n.memoizedProps,u=a.name;if(u!=null&&u!=="auto"){var f=i.get(u);if(f!==void 0){var h=ee(a.default,a.share);if(h!=="none"&&(Oo(n,u,h,null,!1)?(h=n.stateNode,f.paired=h,h.paired=f,Ho(n,a.onShare)):mr(n.child,!1)),i.delete(u),i.size===0)break}}}gh(n)}n=n.sibling}}}function vh(n){if(n.tag===30){var i=n.memoizedProps,a=Q(i,n.stateNode),u=Ci!==null?Ci.get(a):void 0,f=ee(i.default,u!==void 0?i.share:i.exit);f!=="none"&&(Oo(n,a,f,null,!1)?u!==void 0?(f=n.stateNode,u.paired=f,f.paired=u,Ci.delete(a),Ho(n,i.onShare)):Ho(n,i.onExit):mr(n.child,!1)),Ci!==null&&gh(n)}else if((n.subtreeFlags&33554432)!==0)for(n=n.child;n!==null;)vh(n),n=n.sibling;else Ci!==null&&gh(n)}function W0(n){for(n=n.child;n!==null;){if(n.tag===30){var i=n.memoizedProps,a=Q(i,n.stateNode);i=ee(i.default,i.update),n.flags&=-5,i!=="none"&&Oo(n,a,i,n.memoizedState=[],!1)}else(n.subtreeFlags&33554432)!==0&&W0(n);n=n.sibling}}function yh(n){if((n.subtreeFlags&18874368)!==0)for(n=n.child;n!==null;){if(n.tag!==22||n.memoizedState===null){if(n.tag===30&&(n.flags&18874368)!==0){var i=n.stateNode;i.paired!==null&&(i.paired=null,mr(n.child,!1))}yh(n)}n=n.sibling}}function Ou(n){if(n.tag===30)n.stateNode.paired=null,mr(n.child,!1),yh(n);else if((n.subtreeFlags&33554432)!==0)for(n=n.child;n!==null;)Ou(n),n=n.sibling;else yh(n)}function X0(n){for(n=n.child;n!==null;)n.tag===30?mr(n.child,!1):(n.subtreeFlags&33554432)!==0&&X0(n),n=n.sibling}function bh(n,i,a,u,f,h,w){if(!nn)return!1;for(var k=!1;i!==null;){if(i.tag===5){var K=i.stateNode;if(h!==null&&yi<h.length){var fe=h[yi],ge=Zh(K);(Yu(fe)||Yu(ge))&&(k=!0),(n.flags&4)===0&&s1(fe,ge)&&(n.flags|=4),o1(fe,ge)&&(n.flags|=32)}else n.flags|=32;(n.flags&4)!==0&&zv(K,yi===0?a:a+"_"+yi,f),k&&(n.flags&4)!==0||(Sr===null&&(Sr=[]),Sr.push(K,yi===0?u:u+"_"+yi,i.memoizedProps)),yi++}else(i.tag!==22||i.memoizedState===null)&&(i.tag===30&&w?n.flags|=i.flags&32:bh(n,i.child,a,u,f,h,w)&&(k=!0));i=i.sibling}return k}function q0(n,i){for(n=n.child;n!==null;){if(n.tag===30){var a=n.memoizedProps,u=n.stateNode,f=Q(a,u),h=ee(a.default,a.update);if(i){u=u.clones;var w=u===null?null:u.map(r1)}else w=n.memoizedState,n.memoizedState=null;u=n;var k=n.child;yi=0,f=bh(u,k,f,f,h,w,!1),(n.flags&4)!==0&&f&&(i||Ho(n,a.onUpdate))}else(n.subtreeFlags&33554432)!==0&&q0(n,i);n=n.sibling}}function qS(n,i,a){for(vx(n.containerInfo),n=(a&335544064)===a,Dn=i,i=n?9270:1024;Dn!==null;){if(a=Dn,n){var u=a.deletions;if(u!==null)for(var f=0;f<u.length;f++)n&&vh(u[f])}if(a.alternate===null&&(a.flags&2)!==0)n&&H0(a),zu(n);else{if(a.tag===22){if(u=a.alternate,a.memoizedState!==null){u!==null&&u.memoizedState===null&&n&&vh(u),zu(n);continue}else if(u!==null&&u.memoizedState!==null){n&&H0(a),zu(n);continue}}u=a.child,(a.subtreeFlags&i)!==0&&u!==null?(u.return=a,Dn=u):(n&&W0(a),zu(n))}}Ci=null}function zu(n){for(;Dn!==null;){var i=Dn,a=n,u=i.alternate,f=i.flags;switch(i.tag){case 0:case 11:case 15:break;case 1:if((f&1024)!==0&&u!==null){a=void 0,f=u.memoizedProps,u=u.memoizedState;var h=i.stateNode;try{var w=Ks(i.type,f);a=h.getSnapshotBeforeUpdate(w,u),h.__reactInternalSnapshotBeforeUpdate=a}catch(k){It(i,i.return,k)}}break;case 3:(f&1024)!==0&&nn&&c1(i.stateNode.containerInfo);break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&u!==null&&(a=Q(u.memoizedProps,u.stateNode),f=i.memoizedProps,f=ee(f.default,f.update),f!=="none"&&Oo(u,a,f,u.memoizedState=[],!0));break;default:if((f&1024)!==0)throw Error(o(163))}if(u=i.sibling,u!==null){u.return=i.return,Dn=u;break}Dn=i.return}}function $0(n,i,a){var u=a.flags;switch(a.tag){case 0:case 11:case 15:gr(n,a),u&4&&nl(5,a);break;case 1:if(gr(n,a),u&4)if(n=a.stateNode,i===null)try{n.componentDidMount()}catch(w){It(a,a.return,w)}else{var f=Ks(a.type,i.memoizedProps);i=i.memoizedState;try{n.componentDidUpdate(f,i,n.__reactInternalSnapshotBeforeUpdate)}catch(w){It(a,a.return,w)}}u&64&&D0(a),u&512&&pr(a,a.return);break;case 3:if(gr(n,a),u&64&&(u=a.updateQueue,u!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=ll(a.child.stateNode);break;case 1:n=a.child.stateNode}try{Tu(u,n)}catch(w){It(a,a.return,w)}}break;case 27:rn&&i===null&&u&4&&B0(a);case 26:case 5:if(gr(n,a),i===null){if(u&4)ch(a);else if(u&64){n=a.type,i=a.memoizedProps,f=a.stateNode;try{F1(f,n,i,a)}catch(w){It(a,a.return,w)}}}u&512&&pr(a,a.return);break;case 12:gr(n,a);break;case 31:gr(n,a),u&4&&Z0(n,a);break;case 13:gr(n,a),u&4&&J0(n,a),u&64&&(u=a.memoizedState,u!==null&&(u=u.dehydrated,u!==null&&(a=nx.bind(null,a),v1(u,a))));break;case 22:if(u=a.memoizedState!==null||Ln,!u){var h=i!==null&&i.memoizedState!==null||kt;i=Ln,f=kt,Ln=u,(kt=h)&&!f?(u=rn?2:0,(a.subtreeFlags&8772)!==0&&(u|=1),rr(n,a,u)):gr(n,a),Ln=i,kt=f}break;case 30:gr(n,a),u&512&&pr(a,a.return);break;case 7:u&512&&pr(a,a.return);default:gr(n,a)}}function _h(n,i){if(nn)for(n=n.child;n!==null;)Y0(n,i),n=n.sibling}function Y0(n,i){if(nn)switch(n.tag){case 5:case 26:try{var a=n.stateNode;i?Zx(a):Kx(n.stateNode,n.memoizedProps)}catch(h){It(n,n.return,h)}Sh(n,i);break;case 6:try{var u=n.stateNode;i?Jx(u):Qx(u,n.memoizedProps),Kn=!0}catch(h){It(n,n.return,h)}break;case 18:try{var f=n.stateNode;i?W1(f):X1(n.stateNode)}catch(h){It(n,n.return,h)}break;case 22:case 23:n.memoizedState===null&&_h(n,i);break;default:_h(n,i)}}function Sh(n,i){if(nn&&n.subtreeFlags&67108864)for(n=n.child;n!==null;){var a=n,u=i;if(nn)switch(a.tag){case 4:Y0(a,u);break;case 22:a.memoizedState===null&&Sh(a,u);break;default:Sh(a,u)}n=n.sibling}}function j0(n){var i=n.alternate;i!==null&&(n.alternate=null,j0(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&Ex(i)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function xi(n,i,a){for(a=a.child;a!==null;)xh(n,i,a),a=a.sibling}function xh(n,i,a){if(Ei&&typeof Ei.onCommitFiberUnmount=="function")try{Ei.onCommitFiberUnmount(fl,a)}catch{}switch(a.tag){case 26:if(Hi){kt||Hn(a,i),xi(n,i,a),a.memoizedState?Kv(a.memoizedState):a.stateNode&&(kt||ep(a.stateNode));break}case 27:if(rn){kt||Hn(a,i),rl(a);var u=Mn,f=bi;$o(a.type)&&(Mn=a.stateNode,bi=!1),xi(n,i,a),ny(a.stateNode,a.type,a.memoizedProps),Mn=u,bi=f;break}case 5:kt||Hn(a,i),rl(a);case 6:if(a.tag===6&&rl(a),nn){if(u=Mn,f=bi,Mn=null,xi(n,i,a),Mn=u,bi=f,Mn!==null)if(bi)try{jx(Mn,a.stateNode),Kn=!0}catch(h){It(a,i,h)}else try{Yx(Mn,a.stateNode),Kn=!0}catch(h){It(a,i,h)}}else xi(n,i,a);break;case 18:nn&&Mn!==null&&(bi?G1(Mn,a.stateNode):V1(Mn,a.stateNode));break;case 4:nn?(u=Mn,f=bi,Mn=a.stateNode.containerInfo,bi=!0,xi(n,i,a),Mn=u,bi=f):(yr&&z0(a.stateNode,a,Vv()),xi(n,i,a));break;case 0:case 11:case 14:case 15:ms(2,a,i),kt||ms(4,a,i),xi(n,i,a);break;case 1:kt||(Hn(a,i),u=a.stateNode,typeof u.componentWillUnmount=="function"&&k0(a,i,u)),xi(n,i,a);break;case 21:xi(n,i,a);break;case 22:kt=(u=kt)||a.memoizedState!==null,xi(n,i,a),kt=u;break;case 30:Hn(a,i),xi(n,i,a);break;case 7:kt||Hn(a,i),xi(n,i,a);break;default:xi(n,i,a)}}function Z0(n,i){if(Gn&&i.memoizedState===null&&(n=i.alternate,n!==null&&(n=n.memoizedState,n!==null))){n=n.dehydrated;try{O1(n)}catch(a){It(i,i.return,a)}}}function J0(n,i){if(Gn&&i.memoizedState===null&&(n=i.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{z1(n)}catch(a){It(i,i.return,a)}}function $S(n){switch(n.tag){case 31:case 13:case 19:var i=n.stateNode;return i===null&&(i=n.stateNode=new dy),i;case 22:return n=n.stateNode,i=n._retryCache,i===null&&(i=n._retryCache=new dy),i;default:throw Error(o(435,n.tag))}}function Bu(n,i){var a=$S(n);i.forEach(function(u){if(!a.has(u)){a.add(u);var f=ix.bind(null,n,u);u.then(f,f)}})}function Vn(n,i,a){var u=i.deletions;if(u!==null)for(var f=0;f<u.length;f++){var h=u[f],w=n,k=i;if(nn){var K=k;e:for(;K!==null;){switch(K.tag){case 27:if(rn){if($o(K.type)){Mn=K.stateNode,bi=!1;break e}break}case 5:Mn=K.stateNode,bi=!1;break e;case 3:case 4:Mn=K.stateNode.containerInfo,bi=!0;break e}K=K.return}if(Mn===null)throw Error(o(160));xh(w,k,h),Mn=null,bi=!1}else xh(w,k,h);w=h.alternate,w!==null&&(w.return=null),h.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)K0(i,n,a),i=i.sibling}function K0(n,i,a){var u=n.alternate,f=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(f&4&&(u=n.updateQueue,u=u!==null?u.events:null,u!==null))for(var h=0;h<u.length;h++){var w=u[h];w.ref.impl=w.nextImpl}Vn(i,n,a),Jn(n),f&4&&(ms(3,n,n.return),nl(3,n),ms(5,n,n.return));break;case 1:Vn(i,n,a),Jn(n),f&512&&(kt||u===null||Hn(u,u.return)),f&64&&Ln&&(n=n.updateQueue,n!==null&&(i=n.callbacks,i!==null&&(f=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=f===null?i:f.concat(i))));break;case 26:if(Hi){h=sr,Vn(i,n,a),Jn(n),f&512&&(kt||u===null||Hn(u,u.return)),f&4&&(a=u!==null?u.memoizedState:null,f=n.memoizedState,u===null?f===null?n.stateNode===null?n.stateNode=Ln?Qv(n.type,n.memoizedProps,i.containerInfo,n):Y1(h,n.type,n.memoizedProps,n):Ln||Qh(h,n.type,n.stateNode):n.stateNode=Jv(h,f,n.memoizedProps):a!==f?(a===null?(i=u.stateNode,i===null||kt||ep(i)):Kv(a),f===null?Ln||Qh(h,n.type,n.stateNode):Jv(h,f,n.memoizedProps)):f===null&&n.stateNode!==null&&fh(n,n.memoizedProps,u.memoizedProps));break}case 27:if(rn){Vn(i,n,a),Jn(n),f&512&&(kt||u===null||Hn(u,u.return)),u!==null&&f&4&&fh(n,n.memoizedProps,u.memoizedProps);break}case 5:if(h=xr,xr=!1,Vn(i,n,a),xr=h,Jn(n),f&512&&(kt||u===null||Hn(u,u.return)),nn){if(n.flags&32){i=n.stateNode;try{Ov(i),Kn=!0}catch(ge){It(n,n.return,ge)}}f&4&&n.stateNode!=null&&(i=n.memoizedProps,fh(n,i,u!==null?u.memoizedProps:i)),f&1024&&(gp=!0)}else yr&&n.alternate!==null&&(n.alternate.stateNode=n.stateNode);break;case 6:if(Vn(i,n,a),Jn(n),f&4&&nn){if(n.stateNode===null)throw Error(o(162));i=n.memoizedProps,f=u!==null?u.memoizedProps:i,a=n.stateNode;try{Gx(a,f,i),Kn=!0}catch(ge){It(n,n.return,ge)}}break;case 3:if(Kn=!1,Hi?(j1(),h=sr,sr=ju(i.containerInfo),Vn(i,n,a),sr=h):Vn(i,n,a),Jn(n),f&4){if(nn&&Gn&&u!==null&&u.memoizedState.isDehydrated)try{U1(i.containerInfo)}catch(ge){It(n,n.return,ge)}if(yr){f=i.containerInfo,i=i.pendingChildren;try{Wv(f,i),Kn=!0}catch(ge){It(n,n.return,ge)}}}gp&&(gp=!1,Q0(n)),Kn=!1;break;case 4:u=xr,xr=Ln,h=F0(),Hi?(w=sr,sr=ju(n.stateNode.containerInfo),Vn(i,n,a),Jn(n),sr=w):(Vn(i,n,a),Jn(n)),Kn&&yl&&(fc=!0),Kn=h,xr=u,f&4&&yr&&z0(n.stateNode,n,n.stateNode.pendingChildren);break;case 12:Vn(i,n,a),Jn(n);break;case 31:Vn(i,n,a),Jn(n),f&4&&(i=n.updateQueue,i!==null&&(n.updateQueue=null,Bu(n,i)));break;case 13:Vn(i,n,a),Jn(n),n.child.flags&8192&&n.memoizedState!==null!=(u!==null&&u.memoizedState!==null)&&(vc=vi()),f&4&&(i=n.updateQueue,i!==null&&(n.updateQueue=null,Bu(n,i)));break;case 22:h=n.memoizedState!==null,w=u!==null&&u.memoizedState!==null;var k=Ln,K=kt,fe=xr;Ln=k||h,xr=fe||h,kt=K||w,Vn(i,n,a),kt=K,xr=fe,Ln=k,Jn(n),f&8192&&(i=n.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,!h||u===null||w||Ln||kt||(i=rn?2:0,a=w||kt,u=Ln,w=kt,Ln=h||Ln,kt=a,gs(n,i),Ln=u,kt=w),nn&&(h||!xr)&&_h(n,h)),f&4&&(i=n.updateQueue,i!==null&&(f=i.retryQueue,f!==null&&(i.retryQueue=null,Bu(n,f))));break;case 19:Vn(i,n,a),Jn(n),f&4&&(i=n.updateQueue,i!==null&&(n.updateQueue=null,Bu(n,i)));break;case 30:f&512&&(kt||u===null||Hn(u,u.return)),f=F0(),h=yl,w=(a&335544064)===a,k=n.memoizedProps,yl=w&&ee(k.default,k.update)!=="none",Vn(i,n,a),Jn(n),w&&u!==null&&Kn&&(n.flags|=4),yl=h,Kn=f;break;case 21:break;case 7:f&512&&(kt||u===null||Hn(u,u.return)),u&&u.stateNode!==null&&d1(n,u.stateNode);default:Vn(i,n,a),Jn(n)}}function Jn(n){var i=n.flags;if(i&2){try{for(var a,u=n.return;u!==null;){if(O0(u)){a=u;break}u=u.return}u=null;for(var f=n.return;f!==null;){if(uh(f)){var h=f.stateNode;u===null?u=[h]:u.push(h)}if(lh(f))break;f=f.return}var w=u;if(nn){if(a==null)throw Error(o(160));switch(a.tag){case 27:if(rn){var k=a.stateNode,K=dh(n);Fu(n,K,k,w);break}case 5:var fe=a.stateNode;a.flags&32&&(Ov(fe),a.flags&=-33);var ge=dh(n);Fu(n,ge,fe,w);break;case 3:case 4:var Ce=a.stateNode.containerInfo,De=dh(n);hh(n,De,Ce,w);break;default:throw Error(o(161))}}else ph(n,w)}catch(gt){It(n,n.return,gt)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Q0(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var i=n;Q0(i),i.tag===5&&i.flags&1024&&Nx(i.stateNode),n=n.sibling}}function zo(n,i){if(i.subtreeFlags&9270)for(i=i.child;i!==null;)ev(i,n),i=i.sibling;else q0(i,!1)}function ev(n,i){var a=n.alternate;if(a===null)mh(n,!1);else switch(n.tag){case 3:if(vp=Mr=!1,V0(),zo(i,n),!Mr&&!fc){if(n=Sr,n!==null)for(var u=0;u<n.length;u+=3)t1(n[u],n[u+1],n[u+2]);n1(i.containerInfo),vp=!0}Sr=null;break;case 5:zo(i,n);break;case 4:u=Mr,Mr=!1,zo(i,n),Mr&&(fc=!0),Mr=u;break;case 22:n.memoizedState===null&&(a.memoizedState!==null?mh(n,!1):zo(i,n));break;case 30:u=Mr;var f=V0();Mr=!1,zo(i,n),Mr&&(n.flags|=4);var h=n.memoizedProps,w=n.stateNode;i=Q(h,w),w=Q(a.memoizedProps,w);var k=ee(h.default,h.update);k==="none"?a=!1:(h=a.memoizedState,a.memoizedState=null,a=n.child,yi=0,a=bh(n,a,i,w,k,h,!0),yi!==(h===null?0:h.length)&&(n.flags|=32)),(n.flags&4)!==0&&a?(Ho(n,n.memoizedProps.onUpdate),Sr=f):f!==null&&(f.push.apply(f,Sr),Sr=f),Mr=(n.flags&32)!==0?!0:u;break;default:zo(i,n)}}function gr(n,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)$0(n,i.alternate,i),i=i.sibling}function gs(n,i){for(n=n.child;n!==null;){var a=n,u=i;switch(a.tag){case 0:case 11:case 14:case 15:ms(4,a,a.return),gs(a,u);break;case 1:Hn(a,a.return);var f=a.stateNode;typeof f.componentWillUnmount=="function"&&k0(a,a.return,f),gs(a,u);break;case 27:rn&&(u&2)!==0&&ny(a.stateNode,a.type,a.memoizedProps);case 5:Hn(a,a.return),a.tag!==5&&a.tag!==27||rl(a),gs(a,u);break;case 6:rl(a);break;case 26:Hn(a,a.return),Hi&&(f=a.stateNode,a.memoizedState!==null||f===null||kt||ep(f)),gs(a,u);break;case 22:a.memoizedState===null&&gs(a,u);break;case 30:Hn(a,a.return),gs(a,u);break;case 7:Hn(a,a.return);default:gs(a,u)}n=n.sibling}}function rr(n,i,a){for(a=(i.subtreeFlags&8772)!==0?a:a&-2,i=i.child;i!==null;){var u=i.alternate,f=n,h=i,w=h.flags,k=(a&1)!==0;switch(h.tag){case 0:case 11:case 15:rr(f,h,a),nl(4,h);break;case 1:if(rr(f,h,a),u=h,f=u.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(ge){It(u,u.return,ge)}if(u=h,f=u.updateQueue,f!==null){var K=u.stateNode;try{var fe=f.shared.hiddenCallbacks;if(fe!==null)for(f.shared.hiddenCallbacks=null,f=0;f<fe.length;f++)wu(fe[f],K)}catch(ge){It(u,u.return,ge)}}k&&w&64&&D0(h),pr(h,h.return);break;case 27:rn&&(a&2)!==0&&B0(h);case 5:h.tag!==5&&h.tag!==27||U0(h),rr(f,h,a),k&&u===null&&w&4&&ch(h),pr(h,h.return);break;case 6:U0(h);break;case 26:Hi&&(K=h.stateNode,h.memoizedState!==null||K===null||Ln||Qh(ju(K.ownerDocument),h.type,K)),rr(f,h,a),k&&u===null&&w&4&&ch(h),pr(h,h.return);break;case 12:rr(f,h,a);break;case 31:rr(f,h,a),k&&w&4&&Z0(f,h);break;case 13:rr(f,h,a),k&&w&4&&J0(f,h);break;case 22:h.memoizedState===null&&rr(f,h,a),pr(h,h.return);break;case 30:rr(f,h,a),pr(h,h.return);break;case 7:pr(h,h.return);default:rr(f,h,a)}i=i.sibling}}function Mh(n,i){var a=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),n=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(n=i.memoizedState.cachePool.pool),n!==a&&(n!=null&&n.refCount++,a!=null&&je(a))}function wh(n,i){n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&je(n))}function Bi(n,i,a,u){var f=(a&335544064)===a;if(i.subtreeFlags&(f?10262:10256))for(i=i.child;i!==null;)tv(n,i,a,u),i=i.sibling;else f&&X0(i)}function tv(n,i,a,u){var f=(a&335544064)===a;f&&i.alternate===null&&i.return!==null&&i.return.alternate!==null&&Ou(i);var h=i.flags;switch(i.tag){case 0:case 11:case 15:Bi(n,i,a,u),h&2048&&nl(9,i);break;case 1:Bi(n,i,a,u);break;case 3:Bi(n,i,a,u),f&&nn&&vp&&i1(n.containerInfo),h&2048&&(n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&je(n)));break;case 12:if(h&2048){Bi(n,i,a,u),n=i.stateNode;try{var w=i.memoizedProps,k=w.id,K=w.onPostCommit;typeof K=="function"&&K(k,i.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(fe){It(i,i.return,fe)}}else Bi(n,i,a,u);break;case 31:Bi(n,i,a,u);break;case 13:Bi(n,i,a,u);break;case 23:break;case 22:w=i.stateNode,k=i.alternate,i.memoizedState!==null?(f&&k!==null&&k.memoizedState===null&&Ou(k),w._visibility&2?Bi(n,i,a,u):sl(n,i)):(f&&k!==null&&k.memoizedState!==null&&Ou(i),w._visibility&2?Bi(n,i,a,u):(w._visibility|=2,Bo(n,i,a,u,(i.subtreeFlags&10256)!==0||!1))),h&2048&&Mh(k,i);break;case 24:Bi(n,i,a,u),h&2048&&wh(i.alternate,i);break;case 30:f&&(f=i.alternate,f!==null&&(mr(f.child,!0),mr(i.child,!0))),Bi(n,i,a,u);break;default:Bi(n,i,a,u)}}function Bo(n,i,a,u,f){for(f=f&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var h=n,w=i,k=a,K=u,fe=w.flags;switch(w.tag){case 0:case 11:case 15:Bo(h,w,k,K,f),nl(8,w);break;case 23:break;case 22:var ge=w.stateNode;w.memoizedState!==null?ge._visibility&2?Bo(h,w,k,K,f):sl(h,w):(ge._visibility|=2,Bo(h,w,k,K,f)),f&&fe&2048&&Mh(w.alternate,w);break;case 24:Bo(h,w,k,K,f),f&&fe&2048&&wh(w.alternate,w);break;default:Bo(h,w,k,K,f)}i=i.sibling}}function sl(n,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=n,u=i,f=u.flags;switch(u.tag){case 22:sl(a,u),f&2048&&Mh(u.alternate,u);break;case 24:sl(a,u),f&2048&&wh(u.alternate,u);break;default:sl(a,u)}i=i.sibling}}function vs(n,i,a){if(n.subtreeFlags&lo)for(n=n.child;n!==null;)nv(n,i,a),n=n.sibling}function nv(n,i,a){switch(n.tag){case 26:if(vs(n,i,a),n.flags&lo)if(n.memoizedState!==null)J1(a,sr,n.memoizedState,n.memoizedProps);else{var u=n.stateNode,f=n.type;n=n.memoizedProps,((i&335544128)===i||jh(f,n))&&Uv(a,u,f,n)}break;case 5:vs(n,i,a),n.flags&lo&&(u=n.stateNode,f=n.type,n=n.memoizedProps,((i&335544128)===i||jh(f,n))&&Uv(a,u,f,n));break;case 3:case 4:Hi?(u=sr,sr=ju(n.stateNode.containerInfo),vs(n,i,a),sr=u):vs(n,i,a);break;case 22:n.memoizedState===null&&(u=n.alternate,u!==null&&u.memoizedState!==null?(u=lo,lo=16777216,vs(n,i,a),lo=u):vs(n,i,a));break;case 30:(n.flags&lo)!==0&&(u=n.memoizedProps.name,u!=null&&u!=="auto"&&(f=n.stateNode,f.paired=null,Ci===null&&(Ci=new Map),Ci.set(u,f))),vs(n,i,a);break;default:vs(n,i,a)}}function iv(n){var i=n.alternate;if(i!==null&&(n=i.child,n!==null)){i.child=null;do i=n.sibling,n.sibling=null,n=i;while(n!==null)}}function ol(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var u=i[a];Dn=u,sv(u,n)}iv(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)rv(n),n=n.sibling}function rv(n){switch(n.tag){case 0:case 11:case 15:ol(n),n.flags&2048&&ms(9,n,n.return);break;case 3:ol(n);break;case 12:ol(n);break;case 22:var i=n.stateNode;n.memoizedState!==null&&i._visibility&2&&(n.return===null||n.return.tag!==13)?(i._visibility&=-3,Hu(n)):ol(n);break;default:ol(n)}}function Hu(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var u=i[a];Dn=u,sv(u,n)}iv(n)}for(n=n.child;n!==null;){switch(i=n,i.tag){case 0:case 11:case 15:ms(8,i,i.return),Hu(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,Hu(i));break;default:Hu(i)}n=n.sibling}}function sv(n,i){for(;Dn!==null;){var a=Dn;switch(a.tag){case 0:case 11:case 15:ms(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var u=a.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:je(a.memoizedState.cache)}if(u=a.child,u!==null)u.return=a,Dn=u;else e:for(a=n;Dn!==null;){u=Dn;var f=u.sibling,h=u.return;if(j0(u),u===a){Dn=null;break e}if(f!==null){f.return=h,Dn=f;break e}Dn=h}}}function Th(n){var i=xx(n);if(i!=null){if(typeof i.memoizedProps["data-testname"]!="string")throw Error(o(364));return i}if(n=kx(n),n===null)throw Error(o(362));return n.stateNode.current}function Eh(n,i){var a=n.tag;switch(i.$$typeof){case dc:if(n.type===i.value)return!0;break;case hc:e:{for(i=i.value,n=[n,0],a=0;a<n.length;){var u=n[a++],f=u.tag,h=n[a++],w=i[h];if(f!==5&&f!==26&&f!==27||!cl(u)){for(;w!=null&&Eh(u,w);)h++,w=i[h];if(h===i.length){i=!0;break e}else for(u=u.child;u!==null;)n.push(u,h),u=u.sibling}}i=!1}return i;case pc:if((a===5||a===26||a===27)&&Ox(n.stateNode,i.value))return!0;break;case gc:if((a===5||a===6||a===26||a===27)&&(n=Ux(n),n!==null&&0<=n.indexOf(i.value)))return!0;break;case mc:if((a===5||a===26||a===27)&&(n=n.memoizedProps["data-testname"],typeof n=="string"&&n.toLowerCase()===i.value.toLowerCase()))return!0;break;default:throw Error(o(365))}return!1}function Ah(n){switch(n.$$typeof){case dc:return"<"+(_(n.value)||"Unknown")+">";case hc:return":has("+(Ah(n)||"")+")";case pc:return'[role="'+n.value+'"]';case gc:return'"'+n.value+'"';case mc:return'[data-testname="'+n.value+'"]';default:throw Error(o(365))}}function ov(n,i){var a=[];n=[n,0];for(var u=0;u<n.length;){var f=n[u++],h=f.tag,w=n[u++],k=i[w];if(h!==5&&h!==26&&h!==27||!cl(f)){for(;k!=null&&Eh(f,k);)w++,k=i[w];if(w===i.length)a.push(f);else for(f=f.child;f!==null;)n.push(f,w),f=f.sibling}}return a}function Ch(n,i){if(!ul)throw Error(o(363));n=Th(n),n=ov(n,i),i=[],n=Array.from(n);for(var a=0;a<n.length;){var u=n[a++],f=u.tag;if(f===5||f===26||f===27)cl(u)||i.push(u.stateNode);else for(u=u.child;u!==null;)n.push(u),u=u.sibling}return i}function Mi(){return(_t&2)!==0&&xt!==0?xt&-xt:Ze.T!==null?le():wx()}function av(){if(Pi===0)if((xt&536870912)===0||pt){var n=Ju;Ju<<=1,(Ju&3932160)===0&&(Ju=262144),Pi=n}else Pi=536870912;return n=Xn.current,n!==null&&(n.flags|=32),Pi}function Ho(n,i){if(i!=null){var a=n.stateNode,u=a.ref;u===null&&(u=a.ref=Bv(Q(n.memoizedProps,a))),ua===null&&(ua=[]),ua.push(i.bind(null,u))}}function gi(n,i,a){(n===Wt&&(Ut===2||Ut===9)||n.cancelPendingCommit!==null)&&(Vo(n,0),ys(n,xt,Pi,!1)),M(n,a),((_t&2)===0||n!==Wt)&&(n===Wt&&((_t&2)===0&&(uo|=a),pn===4&&ys(n,xt,Pi,!1)),de(n))}function lv(n,i,a){if((_t&6)!==0)throw Error(o(327));var u=!a&&(i&127)===0&&(i&n.expiredLanes)===0||A(n,i),f=u?ZS(n,i):Ph(n,i,!0),h=u;do{if(f===0){oa&&!u&&ys(n,i,0,!1);break}else{if(a=n.current.alternate,h&&!YS(a)){f=Ph(n,i,!1),h=!1;continue}if(f===2){if(h=i,n.errorRecoveryDisabledLanes&h)var w=0;else w=n.pendingLanes&-536870913,w=w!==0?w:w&536870912?536870912:0;if(w!==0){i=w;e:{var k=n;f=_l;var K=Gn&&k.current.memoizedState.isDehydrated;if(K&&(Vo(k,w).flags|=256),w=Ph(k,w,!1),w!==2&&w!==6){if(yp&&!K){k.errorRecoveryDisabledLanes|=h,uo|=h,f=4;break e}h=_i,_i=f,h!==null&&(_i===null?_i=h:_i.push.apply(_i,h))}f=w}if(h=!1,f!==2)continue}}if(f===1){Vo(n,0),ys(n,i,0,!0);break}e:{switch(u=n,h=f,h){case 0:case 1:throw Error(o(345));case 4:if((i&4194048)!==i&&(i&62914560)!==i)break;case 6:ys(u,i,Pi,!Ts);break e;case 2:_i=null;break;case 3:case 5:break;default:throw Error(o(329))}if((i&62914560)===i&&(f=vc+300-vi(),10<f)){if(ys(u,i,Pi,!Ts),v(u,0,!0)!==0)break e;wr=i,u.timeoutHandle=_x(uv.bind(null,u,a,_i,yc,_p,i,Pi,uo,aa,Ts,h,"Throttled",-0,0),f);break e}uv(u,a,_i,yc,_p,i,Pi,uo,aa,Ts,h,null,-0,0)}}break}while(!0);de(n)}function uv(n,i,a,u,f,h,w,k,K,fe,ge,Ce,De,gt){n.timeoutHandle=eo;var At=i.subtreeFlags,Cs=(h&335544064)===h;if(Ce=null,(Cs||At&8192||(At&16785408)===16785408)&&(Ce=Rx(),Ci=null,nv(i,h,Ce),Cs&&Px(Ce,n.containerInfo),At=(h&62914560)===h?vc-vi():(h&4194048)===h?hy-vi():0,At=Ix(Ce,At),At!==null)){wr=h,n.cancelPendingCommit=At(yv.bind(null,n,i,h,a,u,f,w,k,K,fe,ge,Ce,null,De,gt)),ys(n,h,w,!fe);return}yv(n,i,h,a,u,f,w,k,K,fe,ge,Ce)}function YS(n){for(var i=n;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var u=0;u<a.length;u++){var f=a[u],h=f.getSnapshot;f=f.value;try{if(!Ai(h(),f))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ys(n,i,a,u){i=L(n,i),i&=~bp,i&=~uo,n.suspendedLanes|=i,n.pingedLanes&=~i,u&&(n.warmLanes|=i),u=n.expirationTimes;for(var f=i;0<f;){var h=31-Ti(f),w=1<<h;u[h]=-1,f&=~w}a!==0&&V(n,a,i)}function cv(){return(_t&6)===0?(ue(0,!1),!1):!0}function Rh(){if(St!==null){if(Ut===0)var n=St.return;else n=St,Gr=to=null,Oe(n),na=null,gl=0,n=St;for(;n!==null;)L0(n.alternate,n),n=n.return;St=null}}function Vo(n,i){var a=n.timeoutHandle;return a!==eo&&(n.timeoutHandle=eo,Sx(a)),a=n.cancelPendingCommit,a!==null&&(n.cancelPendingCommit=null,a()),wr=0,Rh(),Wt=n,St=a=zr(n.current,null),xt=i,Ut=0,Ri=null,Ts=!1,oa=A(n,i),yp=!1,aa=Pi=bp=uo=Es=pn=0,_i=_l=null,_p=!1,Xr=L(n,i),$s(),a}function fv(n,i){lt=null,Ze.H=uc,i===ta||i===rc?(i=Pt(),Ut=3):i===cp?(i=Pt(),Ut=4):Ut=i===pp?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Ri=i,St===null&&(pn=1,Ru(n,Ve(i,n.current)))}function dv(){var n=Xn.current;return n===null?!0:(xt&4194048)===xt?li===null:(xt&62914560)===xt||(xt&536870912)!==0?n===li:!1}function hv(){var n=Ze.H;return Ze.H=uc,n===null?uc:n}function pv(){var n=Ze.A;return Ze.A=pM,n}function Vu(){pn=4,Ts||(xt&4194048)!==xt&&Xn.current!==null||(oa=!0),(Es&134217727)===0&&(uo&134217727)===0||Wt===null||ys(Wt,xt,Pi,!1)}function Ph(n,i,a){var u=_t;_t|=2;var f=hv(),h=pv();(Wt!==n||xt!==i)&&(yc=null,Vo(n,i)),i=!1;var w=pn;e:do try{if(Ut!==0&&St!==null){var k=St,K=Ri;switch(Ut){case 8:Rh(),w=6;break e;case 3:case 2:case 9:case 6:Xn.current===null&&(i=!0);var fe=Ut;if(Ut=0,Ri=null,Go(n,k,K,fe),a&&oa){w=0;break e}break;default:fe=Ut,Ut=0,Ri=null,Go(n,k,K,fe)}}jS(),w=pn;break}catch(ge){fv(n,ge)}while(!0);return i&&n.shellSuspendCounter++,Gr=to=null,_t=u,Ze.H=f,Ze.A=h,St===null&&(Wt=null,xt=0,$s()),w}function jS(){for(;St!==null;)mv(St)}function ZS(n,i){var a=_t;_t|=2;var u=hv(),f=pv();Wt!==n||xt!==i?(yc=null,Sl=vi()+500,Vo(n,i)):oa=A(n,i);e:do try{if(Ut!==0&&St!==null){i=St;var h=Ri;t:switch(Ut){case 1:Ut=0,Ri=null,Go(n,i,h,1);break;case 2:case 9:if(Ge(h)){Ut=0,Ri=null,gv(i);break}i=function(){Ut!==2&&Ut!==9||Wt!==n||(Ut=7),de(n)},h.then(i,i);break e;case 3:Ut=7;break e;case 4:Ut=5;break e;case 7:Ge(h)?(Ut=0,Ri=null,gv(i)):(Ut=0,Ri=null,Go(n,i,h,7));break;case 5:var w=null;switch(St.tag){case 26:w=St.memoizedState;case 5:case 27:var k=St,K=k.type,fe=k.pendingProps;if(w?ey(w):Fv(k.stateNode,K,fe)){Ut=0,Ri=null;var ge=k.sibling;if(ge!==null)St=ge;else{var Ce=k.return;Ce!==null?(St=Ce,Gu(Ce)):St=null}break t}}Ut=0,Ri=null,Go(n,i,h,5);break;case 6:Ut=0,Ri=null,Go(n,i,h,6);break;case 8:Rh(),pn=6;break e;default:throw Error(o(462))}}JS();break}catch(De){fv(n,De)}while(!0);return Gr=to=null,Ze.H=u,Ze.A=f,_t=a,St!==null?0:(Wt=null,xt=0,$s(),pn)}function JS(){for(;St!==null&&!tM();)mv(St)}function mv(n){var i=C0(n.alternate,n,Xr);n.memoizedProps=n.pendingProps,i===null?Gu(n):St=i}function gv(n){var i=n,a=i.alternate;switch(i.tag){case 15:case 0:i=S0(a,i,i.pendingProps,i.type,void 0,xt);break;case 11:i=S0(a,i,i.pendingProps,i.type.render,i.ref,xt);break;case 5:Oe(i);var u=i;Gn&&u===Nn&&(pt?(un(u),u.tag===5&&u.stateNode!=null&&(Jt=u.stateNode)):(un(u),pt=!0));default:L0(a,i),i=St=xv(i,Xr),i=C0(a,i,Xr)}n.memoizedProps=n.pendingProps,i===null?Gu(n):St=i}function Go(n,i,a,u){Gr=to=null,Oe(i),na=null,gl=0;var f=i.return;try{if(BS(n,f,i,a,xt)){pn=1,Ru(n,Ve(a,n.current)),St=null;return}}catch(h){if(f!==null)throw St=f,h;pn=1,Ru(n,Ve(a,n.current)),St=null;return}i.flags&32768?(pt||u===1?n=!0:oa||(xt&536870912)!==0?n=!1:(Ts=n=!0,(u===2||u===9||u===3||u===6)&&(u=Xn.current,u!==null&&u.tag===13&&(u.flags|=16384))),vv(i,n)):Gu(i)}function Gu(n){var i=n;do{if((i.flags&32768)!==0){vv(i,Ts);return}n=i.return;var a=WS(i.alternate,i,Xr);if(a!==null){St=a;return}if(i=i.sibling,i!==null){St=i;return}St=i=n}while(i!==null);pn===0&&(pn=5)}function vv(n,i){do{var a=XS(n.alternate,n);if(a!==null){a.flags&=32767,St=a;return}if(a=n.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(n=n.sibling,n!==null)){St=n;return}St=n=a}while(n!==null);pn=6,St=null}function yv(n,i,a,u,f,h,w,k,K,fe,ge,Ce){n.cancelPendingCommit=null;do al();while(on!==0);if((_t&6)!==0)throw Error(o(327));if(i!==null){if(i===n.current)throw Error(o(177));n===Wt&&(St=Wt=null,xt=0),co=i,or=n,wr=a,xp=f,py=u,KS(n,i,a,w,k,K,Ce)}}function KS(n,i,a,u,f,h,w){var k=i.lanes|i.childLanes;if(Sp=k,k|=fp,P(n,a,k,u,f,h),ua=null,(a&335544064)===a?(ca=T(n),u=10262):(ca=null,u=10256),(i.subtreeFlags&u)!==0||(i.flags&u)!==0?(n.callbackNode=null,n.callbackPriority=0,rx(ip,function(){return Dh(),null})):(n.callbackNode=null,n.callbackPriority=0),cc=!1,u=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||u){u=Ze.T,Ze.T=null,f=Hr(),In(2),h=_t,_t|=4;try{qS(n,i,a)}finally{_t=h,In(f),Ze.T=u}}on=1,cc?la=a1(w,n.containerInfo,ca,Ih,Nh,ex,Lh,Dh,QS,null,null):(Ih(),Nh(),Lh())}function QS(n){if(on!==0){var i=or.onRecoverableError;i(n,{componentStack:null})}}function ex(){on===3&&(on=0,ev(co,or),on=4)}function Ih(){if(on===1){on=0;var n=or,i=co,a=wr,u=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||u){u=Ze.T,Ze.T=null;var f=Hr();In(2);var h=_t;_t|=4;try{yl=fc=!1,K0(i,n,a),yx(n.containerInfo)}finally{_t=h,In(f),Ze.T=u}}n.current=i,on=2}}function Nh(){if(on===2){on=0;var n=or,i=co,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=Ze.T,Ze.T=null;var u=Hr();In(2);var f=_t;_t|=4;try{$0(n,i.alternate,i)}finally{_t=f,In(u),Ze.T=a}}on=3}}function Lh(){if(on===4||on===3){on=0;var n=la;la=null,nM();var i=or,a=co,u=wr,f=py,h=(u&335544064)===u?10262:10256;if((a.subtreeFlags&h)!==0||(a.flags&h)!==0?on=5:(on=0,co=or=null,bv(i,i.pendingLanes)),h=i.pendingLanes,h===0&&(As=null),Z(u),a=a.stateNode,Ei&&typeof Ei.onCommitFiberRoot=="function")try{Ei.onCommitFiberRoot(fl,a,void 0,(a.current.flags&128)===128)}catch{}if(f!==null){a=Ze.T,h=Hr(),In(2),Ze.T=null;try{for(var w=i.onRecoverableError,k=0;k<f.length;k++){var K=f[k];w(K.value,{componentStack:K.stack})}}finally{Ze.T=a,In(h)}}if(f=ua,w=ca,ca=null,f!==null&&(ua=null,w===null&&(w=[]),n!==null))for(K=0;K<f.length;K++)a=(0,f[K])(w),a!==void 0&&u1(n,a);(wr&3)!==0&&al(),de(i),h=i.pendingLanes,(u&261930)!==0&&(h&42)!==0?i===bc?xl++:(xl=0,bc=i):(xl=0,bc=null),Gn&&H1(),ue(0,!1)}}function bv(n,i){(n.pooledCacheLanes&=i)===0&&(i=n.pooledCache,i!=null&&(n.pooledCache=null,je(i)))}function al(){return la!==null&&(l1(la),la=null),Ih(),Nh(),Lh(),Dh()}function Dh(){if(on!==5)return!1;var n=or,i=Sp;Sp=0;var a=Z(wr),u=32>a?32:a;a=Ze.T;var f=Hr();try{In(u),Ze.T=null,u=xp,xp=null;var h=or,w=wr;if(on=0,co=or=null,wr=0,(_t&6)!==0)throw Error(o(331));var k=_t;if(_t|=4,rv(h.current),tv(h,h.current,w,u),_t=k,ue(0,!1),Ei&&typeof Ei.onPostCommitFiberRoot=="function")try{Ei.onPostCommitFiberRoot(fl,h)}catch{}return!0}finally{In(f),Ze.T=a,bv(n,i)}}function _v(n,i,a){i=Ve(a,i),i=Jd(n.stateNode,i,2),n=mi(n,i,2),n!==null&&(M(n,2),de(n))}function It(n,i,a){if(n.tag===3)_v(n,n,a);else for(;i!==null;){if(i.tag===3){_v(i,n,a);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(As===null||!As.has(u))){n=Ve(a,n),a=h0(2),u=mi(i,a,2),u!==null&&(p0(a,u,i,n),M(u,2),de(u));break}}i=i.return}}function kh(n,i,a){var u=n.pingCache;if(u===null){u=n.pingCache=new mM;var f=new Set;u.set(i,f)}else f=u.get(i),f===void 0&&(f=new Set,u.set(i,f));f.has(a)||(yp=!0,f.add(a),n=tx.bind(null,n,i,a),i.then(n,n))}function tx(n,i,a){var u=n.pingCache;u!==null&&u.delete(i),n.pingedLanes|=n.suspendedLanes&a,n.warmLanes&=~a,Wt===n&&(xt&a)===a&&((pn===4||pn===3&&(xt&62914560)===xt&&300>vi()-vc)&&(_t&2)===0?Vo(n,0):bp|=a,aa===xt&&(aa=0)),de(n)}function Sv(n,i){i===0&&(i=D()),n=tr(n,i),n!==null&&(M(n,i),de(n))}function nx(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Sv(n,a)}function ix(n,i){var a=0;switch(n.tag){case 31:case 13:var u=n.stateNode,f=n.memoizedState;f!==null&&(a=f.retryLane);break;case 19:u=n.stateNode;break;case 22:u=n.stateNode._retryCache;break;default:throw Error(o(314))}u!==null&&u.delete(i),Sv(n,a)}function rx(n,i){return Qu(n,i)}function sx(n,i,a,u){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function zr(n,i){var a=n.alternate;return a===null?(a=t(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&1206910976,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a.refCleanup=n.refCleanup,a}function xv(n,i){n.flags&=1206910978;var a=n.alternate;return a===null?(n.childLanes=0,n.lanes=i,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=a.childLanes,n.lanes=a.lanes,n.child=a.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=a.memoizedProps,n.memoizedState=a.memoizedState,n.updateQueue=a.updateQueue,n.type=a.type,i=a.dependencies,n.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),n}function Wu(n,i,a,u,f,h){var w=0;if(u=n,typeof u=="function")Fh(u)&&(w=1);else if(typeof u=="string")w=Hi&&rn?jv(n,a,Wn.current)?26:iy(n)?27:5:Hi?jv(n,a,Wn.current)?26:5:rn&&iy(n)?27:5;else e:switch(u){case qh:return n=t(31,a,i,f),n.elementType=qh,n.lanes=h,n;case Xo:return Qs(a.children,f,h,i);case Rv:w=8,f|=24;break;case Hh:return n=t(12,a,i,f|2),n.elementType=Hh,n.lanes=h,n;case Gh:return n=t(13,a,i,f),n.elementType=Gh,n.lanes=h,n;case Wh:return n=t(19,a,i,f),n.elementType=Wh,n.lanes=h,n;case ux:case $h:return n=f|32,n=t(30,a,i,n),n.elementType=$h,n.lanes=h,n.stateNode={autoName:null,paired:null,clones:null,ref:null},n;default:if(typeof u=="object"&&u!==null)switch(u.$$typeof){case Br:w=10;break e;case Pv:w=9;break e;case Vh:w=11;break e;case Xh:w=14;break e;case bs:w=16,u=null;break e}w=29,a=Error(o(130,n===null?"null":typeof n,"")),u=null}return i=t(w,a,i,f),i.elementType=n,i.type=u,i.lanes=h,i}function Qs(n,i,a,u){return n=t(7,n,u,i),n.lanes=a,n}function Uh(n,i,a){return n=t(6,n,null,i),n.lanes=a,n}function Mv(n){var i=t(18,null,null,0);return i.stateNode=n,i}function Oh(n,i,a){return i=t(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function ox(n,i,a,u,f,h,w,k,K){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=eo,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=N(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=N(0),this.hiddenUpdates=N(null),this.identifierPrefix=u,this.onUncaughtError=f,this.onCaughtError=h,this.onRecoverableError=w,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=K,this.transitionTypes=null,this.incompleteTransitions=new Map}function wv(n,i,a,u,f,h,w,k,K,fe,ge,Ce){return n=new ox(n,i,a,w,K,fe,ge,Ce,k),i=1,h===!0&&(i|=24),h=t(3,null,null,i),n.current=h,h.stateNode=n,i=Xe(),i.refCount++,n.pooledCache=i,i.refCount++,h.memoizedState={element:u,isDehydrated:a,cache:i},hs(h),n}function Tv(n){return n?(n=jo,n):jo}function Ev(n){var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(o(188)):(n=Object.keys(n).join(","),Error(o(268,n)));return n=d(i),n=n!==null?p(n):null,n===null?null:ll(n.stateNode)}function Av(n,i,a,u,f,h){f=Tv(f),u.context===null?u.context=f:u.pendingContext=f,u=nr(i),u.payload={element:a},h=h===void 0?null:h,h!==null&&(u.callback=h),a=mi(n,u,i),a!==null&&(gi(a,n,i),Zs(a,n,i))}function Cv(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function zh(n,i){Cv(n,i),(n=n.alternate)&&Cv(n,i)}var bt={},ax=yS.default,wi=$n.default,Bh=Object.assign,lx=Symbol.for("react.element"),Xu=Symbol.for("react.transitional.element"),Wo=Symbol.for("react.portal"),Xo=Symbol.for("react.fragment"),Rv=Symbol.for("react.strict_mode"),Hh=Symbol.for("react.profiler"),Pv=Symbol.for("react.consumer"),Br=Symbol.for("react.context"),Vh=Symbol.for("react.forward_ref"),Gh=Symbol.for("react.suspense"),Wh=Symbol.for("react.suspense_list"),Xh=Symbol.for("react.memo"),bs=Symbol.for("react.lazy"),qh=Symbol.for("react.activity"),ux=Symbol.for("react.legacy_hidden"),cx=Symbol.for("react.memo_cache_sentinel"),$h=Symbol.for("react.view_transition"),fx=Symbol.for("react.recoverable"),Iv=Symbol.iterator,Nv=Symbol.for("react.optimistic_key"),dx=Symbol.for("react.client.reference"),qu=Array.isArray,Ze=ax.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,hx=e.rendererVersion,px=e.rendererPackageName,Lv=e.extraDevToolsConfig,ll=e.getPublicInstance,mx=e.getRootHostContext,gx=e.getChildHostContext,vx=e.prepareForCommit,yx=e.resetAfterCommit,bx=e.createInstance;e.cloneMutableInstance;var Yh=e.appendInitialChild,Dv=e.finalizeInitialChildren,$u=e.shouldSetTextContent,kv=e.createTextInstance;e.cloneMutableTextInstance;var _x=e.scheduleTimeout,Sx=e.cancelTimeout,eo=e.noTimeout,vr=e.isPrimaryRenderer;e.warnsIfNotActing;var nn=e.supportsMutation,yr=e.supportsPersistence,Gn=e.supportsHydration,xx=e.getInstanceFromNode;e.beforeActiveInstanceBlur;var Mx=e.preparePortalMount;e.prepareScopeUpdate,e.getInstanceFromScope;var In=e.setCurrentUpdatePriority,Hr=e.getCurrentUpdatePriority,wx=e.resolveUpdatePriority;e.trackSchedulerEvent,e.resolveEventType,e.resolveEventTimeStamp;var Tx=e.shouldAttemptEagerTransition,Ex=e.detachDeletedInstance;e.requestPostPaintCallback;var Ax=e.maySuspendCommit,Cx=e.maySuspendCommitOnUpdate,jh=e.maySuspendCommitInSyncRender,Fv=e.preloadInstance,Rx=e.startSuspendingCommit,Uv=e.suspendInstance,Px=e.suspendOnActiveViewTransition,Ix=e.waitForCommitToBeReady;e.getSuspendedCommitReason;var qo=e.NotPendingTransition,Vr=e.HostTransitionContext,Nx=e.resetFormInstance;e.bindToConsole;var Lx=e.supportsMicrotasks,Dx=e.scheduleMicrotask,ul=e.supportsTestSelectors,kx=e.findFiberRoot,Fx=e.getBoundingRect,Ux=e.getTextContent,cl=e.isHiddenSubtree,Ox=e.matchAccessibilityRole,zx=e.setFocusIfFocusable,Bx=e.setupIntersectionObserver,Hx=e.appendChild,Vx=e.appendChildToContainer,Gx=e.commitTextUpdate,Wx=e.commitMount,Xx=e.commitUpdate,qx=e.insertBefore,$x=e.insertInContainerBefore,Yx=e.removeChild,jx=e.removeChildFromContainer,Ov=e.resetTextContent,Zx=e.hideInstance,Jx=e.hideTextInstance,Kx=e.unhideInstance,Qx=e.unhideTextInstance,zv=e.applyViewTransitionName,e1=e.restoreViewTransitionName,t1=e.cancelViewTransitionName,n1=e.cancelRootViewTransitionName,i1=e.restoreRootViewTransitionName;e.cloneRootViewTransitionContainer,e.removeRootViewTransitionClone;var Zh=e.measureInstance,r1=e.measureClonedInstance,Yu=e.wasInstanceInViewport,s1=e.hasInstanceChanged,o1=e.hasInstanceAffectedParent,a1=e.startViewTransition;e.startGestureTransition;var l1=e.stopViewTransition,u1=e.addViewTransitionFinishedListener;e.getCurrentGestureOffset;var Bv=e.createViewTransitionInstance,c1=e.clearContainer,f1=e.createFragmentInstance,d1=e.updateFragmentInstanceFiber,Hv=e.commitNewChildToFragmentInstance,h1=e.deleteChildFromFragmentInstance,p1=e.cloneInstance,Vv=e.createContainerChildSet,Gv=e.appendChildToContainerChildSet,m1=e.finalizeContainerChildren,Wv=e.replaceContainerChildren,Xv=e.cloneHiddenInstance,qv=e.cloneHiddenTextInstance,Jh=e.isSuspenseInstancePending,Kh=e.isSuspenseInstanceFallback,g1=e.getSuspenseInstanceFallbackErrorDetails,v1=e.registerSuspenseInstanceRetry,y1=e.canHydrateFormStateMarker,b1=e.isFormStateMarkerMatching,$v=e.getNextHydratableSibling,_1=e.getNextHydratableSiblingAfterSingleton,S1=e.getFirstHydratableChild,x1=e.getFirstHydratableChildWithinContainer,M1=e.getFirstHydratableChildWithinActivityInstance,w1=e.getFirstHydratableChildWithinSuspenseInstance,T1=e.getFirstHydratableChildWithinSingleton,E1=e.canHydrateInstance,A1=e.canHydrateTextInstance,C1=e.canHydrateActivityInstance,R1=e.canHydrateSuspenseInstance,P1=e.hydrateInstance,I1=e.hydrateTextInstance,N1=e.hydrateActivityInstance,L1=e.hydrateSuspenseInstance,D1=e.getNextHydratableInstanceAfterActivityInstance,k1=e.getNextHydratableInstanceAfterSuspenseInstance,F1=e.commitHydratedInstance,U1=e.commitHydratedContainer,O1=e.commitHydratedActivityInstance,z1=e.commitHydratedSuspenseInstance,B1=e.finalizeHydratedChildren,H1=e.flushHydrationEvents;e.clearActivityBoundary;var V1=e.clearSuspenseBoundary;e.clearActivityBoundaryFromContainer;var G1=e.clearSuspenseBoundaryFromContainer,W1=e.hideDehydratedBoundary,X1=e.unhideDehydratedBoundary,Yv=e.shouldDeleteUnhydratedTailInstances;e.diffHydratedPropsForDevWarnings,e.diffHydratedTextForDevWarnings,e.describeHydratableInstanceForDevWarnings;var q1=e.validateHydratableInstance,$1=e.validateHydratableTextInstance,Hi=e.supportsResources,jv=e.isHostHoistableType,ju=e.getHoistableRoot,Zv=e.getResource,Jv=e.acquireResource,Kv=e.releaseResource,Y1=e.hydrateHoistable,Qh=e.mountHoistable,ep=e.unmountHoistable,Qv=e.createHoistableInstance,j1=e.prepareToCommitHoistables,Z1=e.mayResourceSuspendCommit,ey=e.preloadResource,J1=e.suspendResource,rn=e.supportsSingletons,ty=e.resolveSingletonInstance,K1=e.acquireSingletonInstance,ny=e.releaseSingletonInstance,iy=e.isHostSingletonType,$o=e.isSingletonScope,tp=[],Yo=-1,jo={},Ti=Math.clz32?Math.clz32:C,Q1=Math.log,eM=Math.LN2,Zu=256,Ju=262144,Ku=4194304,Qu=wi.unstable_scheduleCallback,np=wi.unstable_cancelCallback,tM=wi.unstable_shouldYield,nM=wi.unstable_requestPaint,vi=wi.unstable_now,ry=wi.unstable_ImmediatePriority,iM=wi.unstable_UserBlockingPriority,ip=wi.unstable_NormalPriority,rM=wi.unstable_IdlePriority,sM=wi.log,oM=wi.unstable_setDisableYieldValue,fl=null,Ei=null,aM=0,Ai=typeof Object.is=="function"?Object.is:me,sy=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)},lM=Object.prototype.hasOwnProperty,rp,oy,sp=!1,ay=new WeakMap,Zo=[],Jo=0,ec=null,dl=0,Vi=[],Gi=0,_s=null,br=1,_r="",Wn=b(null),hl=b(null),Ss=b(null),tc=b(null),Nn=null,Jt=null,pt=!1,xs=null,Wi=!1,op=Error(o(519)),nc=b(null),to=null,Gr=null,uM=typeof AbortController<"u"?AbortController:function(){var n=[],i=this.signal={aborted:!1,addEventListener:function(a,u){n.push(u)}};this.abort=function(){i.aborted=!0,n.forEach(function(a){return a()})}},cM=wi.unstable_scheduleCallback,fM=wi.unstable_NormalPriority,sn={$$typeof:Br,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0},pl=null,Ko=null,Qo=null,ap=!1,ic=!1,lp=!1,no=0,ml=null,up=0,io=0,ea=null,ly=Ze.S;Ze.S=function(n,i){if(hy=vi(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&ie(n,i),pl!==null)for(var a=Ko;a!==null;)I(a,pl),a=a.next;if(a=n.types,a!=null){for(var u=Ko;u!==null;)I(u,a),u=u.next;if(io!==0){u=pl,u===null&&(u=pl=[]);for(var f=0;f<a.length;f++){var h=a[f];u.indexOf(h)===-1&&u.push(h)}}}ly!==null&&ly(n,i)};var ro=b(null),ta=Error(o(460)),cp=Error(o(474)),rc=Error(o(542)),sc={then:function(){}},so=null,na=null,gl=0,oo=Mu(!0),uy=Mu(!1),Xi=[],ia=0,fp=0,Ms=!1,dp=!1,ws=b(null),oc=b(0),Xn=b(null),li=null,qn=b(0),Wr=0,lt=null,Bt=null,Sn=null,ac=!1,ra=!1,ao=!1,lc=0,vl=0,sa=null,dM=0,uc={readContext:at,use:Ur,useCallback:Fe,useContext:Fe,useEffect:Fe,useImperativeHandle:Fe,useLayoutEffect:Fe,useInsertionEffect:Fe,useMemo:Fe,useReducer:Fe,useRef:Fe,useState:Fe,useDebugValue:Fe,useDeferredValue:Fe,useTransition:Fe,useSyncExternalStore:Fe,useId:Fe,useHostTransitionStatus:Fe,useFormState:Fe,useActionState:Fe,useOptimistic:Fe,useMemoCache:Fe,useCacheRefresh:Fe,useEffectEvent:Fe},cy={readContext:at,use:Ur,useCallback:function(n,i){return Dt().memoizedState=[n,i===void 0?null:i],n},useContext:at,useEffect:Yg,useImperativeHandle:function(n,i,a){a=a!=null?a.concat([n]):null,Eu(4194308,4,Kg.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Eu(4194308,4,n,i)},useInsertionEffect:function(n,i){Eu(4,2,n,i)},useMemo:function(n,i){var a=Dt();i=i===void 0?null:i;var u=n();if(ao){O(!0);try{n()}finally{O(!1)}}return a.memoizedState=[u,i],u},useReducer:function(n,i,a){var u=Dt();if(a!==void 0){var f=a(i);if(ao){O(!0);try{a(i)}finally{O(!1)}}}else f=i;return u.memoizedState=u.baseState=f,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:f},u.queue=n,n=n.dispatch=zS.bind(null,lt,n),[u.memoizedState,n]},useRef:function(n){var i=Dt();return n={current:n},i.memoizedState=n},useState:function(n){n=Gd(n);var i=n.queue,a=a0.bind(null,lt,i);return i.dispatch=a,[n.memoizedState,a]},useDebugValue:qd,useDeferredValue:function(n,i){var a=Dt();return $d(a,n,i)},useTransition:function(){var n=Gd(!1);return n=i0.bind(null,lt,n.queue,!0,!1),Dt().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,i,a){var u=lt,f=Dt();if(pt){if(a===void 0)throw Error(o(407));a=a()}else{if(a=i(),Wt===null)throw Error(o(349));(xt&127)!==0||vn(u,i,a)}f.memoizedState=a;var h={value:a,getSnapshot:i};return f.queue=h,Yg(Ka.bind(null,u,h,n),[n]),u.flags|=2048,Fo(9,{destroy:void 0},zi.bind(null,u,h,a,i),null),a},useId:function(){var n=Dt(),i=Wt.identifierPrefix;if(pt){var a=_r,u=br;a=(u&~(1<<32-Ti(u)-1)).toString(32)+a,i="_"+i+"R_"+a,a=lc++,0<a&&(i+="H"+a.toString(32)),i+="_"}else a=dM++,i="_"+i+"r_"+a.toString(32)+"_";return n.memoizedState=i},useHostTransitionStatus:Yd,useFormState:Gg,useActionState:Gg,useOptimistic:function(n){var i=Dt();i.memoizedState=i.baseState=n;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=jd.bind(null,lt,!0,a),a.dispatch=i,[n,i]},useMemoCache:Oi,useCacheRefresh:function(){return Dt().memoizedState=OS.bind(null,lt)},useEffectEvent:function(n){var i=Dt(),a={impl:n};return i.memoizedState=a,function(){if((_t&2)!==0)throw Error(o(440));return a.impl.apply(void 0,arguments)}}},fy={readContext:at,use:Ur,useCallback:e0,useContext:at,useEffect:Xd,useImperativeHandle:Qg,useInsertionEffect:Zg,useLayoutEffect:Jg,useMemo:t0,useReducer:mt,useRef:$g,useState:function(){return mt(Bn)},useDebugValue:qd,useDeferredValue:function(n,i){var a=$e();return n0(a,Bt.memoizedState,n,i)},useTransition:function(){var n=mt(Bn)[0],i=$e().memoizedState;return[typeof n=="boolean"?n:hn(n),i]},useSyncExternalStore:$t,useId:s0,useHostTransitionStatus:Yd,useFormState:Wg,useActionState:Wg,useOptimistic:function(n,i){var a=$e();return Ug(a,Bt,n,i)},useMemoCache:Oi,useCacheRefresh:o0,useEffectEvent:jg},hM={readContext:at,use:Ur,useCallback:e0,useContext:at,useEffect:Xd,useImperativeHandle:Qg,useInsertionEffect:Zg,useLayoutEffect:Jg,useMemo:t0,useReducer:ai,useRef:$g,useState:function(){return ai(Bn)},useDebugValue:qd,useDeferredValue:function(n,i){var a=$e();return Bt===null?$d(a,n,i):n0(a,Bt.memoizedState,n,i)},useTransition:function(){var n=ai(Bn)[0],i=$e().memoizedState;return[typeof n=="boolean"?n:hn(n),i]},useSyncExternalStore:$t,useId:s0,useHostTransitionStatus:Yd,useFormState:qg,useActionState:qg,useOptimistic:function(n,i){var a=$e();return Bt!==null?Ug(a,Bt,n,i):(a.baseState=n,[n,a.queue.dispatch])},useMemoCache:Oi,useCacheRefresh:o0,useEffectEvent:jg},hp={enqueueSetState:function(n,i,a){n=n._reactInternals;var u=Mi(),f=nr(u);f.payload=i,a!=null&&(f.callback=a),i=mi(n,f,u),i!==null&&(gi(i,n,u),Zs(i,n,u))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var u=Mi(),f=nr(u);f.tag=1,f.payload=i,a!=null&&(f.callback=a),i=mi(n,f,u),i!==null&&(gi(i,n,u),Zs(i,n,u))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Mi(),u=nr(a);u.tag=2,i!=null&&(u.callback=i),i=mi(n,u,a),i!==null&&(gi(i,n,a),Zs(i,n,a))}},pp=Error(o(461)),xn=!1,mp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null},Kn=!1,cc=!1,Ci=null,Sr=null,yi=0,Ln=!1,kt=!1,xr=!1,gp=!1,dy=typeof WeakSet=="function"?WeakSet:Set,Dn=null,Mr=!1,yl=!1,fc=!1,vp=!1,Mn=null,bi=!1,sr=null,lo=8192,pM={getCacheForType:function(n){var i=at(sn),a=i.data.get(n);return a===void 0&&(a=n(),i.data.set(n,a)),a},cacheSignal:function(){return at(sn).controller.signal}},dc=0,hc=1,pc=2,mc=3,gc=4;if(typeof Symbol=="function"&&Symbol.for){var bl=Symbol.for;dc=bl("selector.component"),hc=bl("selector.has_pseudo_class"),pc=bl("selector.role"),mc=bl("selector.test_id"),gc=bl("selector.text")}var mM=typeof WeakMap=="function"?WeakMap:Map,_t=0,Wt=null,St=null,xt=0,Ut=0,Ri=null,Ts=!1,oa=!1,yp=!1,Xr=0,pn=0,Es=0,uo=0,bp=0,Pi=0,aa=0,_l=null,_i=null,_p=!1,vc=0,hy=0,Sl=1/0,yc=null,As=null,on=0,or=null,co=null,wr=0,Sp=0,xp=null,py=null,la=null,ua=null,ca=null,xl=0,bc=null;return bt.attemptContinuousHydration=function(n){if(n.tag===13||n.tag===31){var i=tr(n,67108864);i!==null&&gi(i,n,67108864),zh(n,67108864)}},bt.attemptHydrationAtCurrentPriority=function(n){if(n.tag===13||n.tag===31){var i=Mi();i=W(i);var a=tr(n,i);a!==null&&gi(a,n,i),zh(n,i)}},bt.attemptSynchronousHydration=function(n){switch(n.tag){case 3:if(n=n.stateNode,n.current.memoizedState.isDehydrated){var i=S(n.pendingLanes);if(i!==0){for(n.pendingLanes|=2,n.entangledLanes|=2;i;){var a=1<<31-Ti(i);n.entanglements[1]|=a,i&=~a}de(n),(_t&6)===0&&(Sl=vi()+500,ue(0,!1))}}break;case 31:case 13:i=tr(n,2),i!==null&&gi(i,n,2),cv(),zh(n,2)}},bt.batchedUpdates=function(n,i){return n(i)},bt.createComponentSelector=function(n){return{$$typeof:dc,value:n}},bt.createContainer=function(n,i,a,u,f,h,w,k,K,fe){return wv(n,i,!1,null,a,u,h,null,w,k,K,fe)},bt.createHasPseudoClassSelector=function(n){return{$$typeof:hc,value:n}},bt.createHydrationContainer=function(n,i,a,u,f,h,w,k,K,fe,ge,Ce,De,gt){var At;return n=wv(a,u,!0,n,f,h,k,gt,K,fe,ge,Ce),n.context=Tv(null),a=n.current,u=Mi(),u=W(u),f=nr(u),f.callback=(At=i)!=null?At:null,mi(a,f,u),i=u,n.current.lanes=i,M(n,i),de(n),n},bt.createPortal=function(n,i,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wo,key:u==null?null:u===Nv?Nv:""+u,children:n,containerInfo:i,implementation:a}},bt.createRoleSelector=function(n){return{$$typeof:pc,value:n}},bt.createTestNameSelector=function(n){return{$$typeof:mc,value:n}},bt.createTextSelector=function(n){return{$$typeof:gc,value:n}},bt.defaultOnCaughtError=function(n){console.error(n)},bt.defaultOnRecoverableError=function(n){sy(n)},bt.defaultOnUncaughtError=function(n){sy(n)},bt.deferredUpdates=function(n){var i=Ze.T,a=Hr();try{return In(32),Ze.T=null,n()}finally{In(a),Ze.T=i}},bt.discreteUpdates=function(n,i,a,u,f){var h=Ze.T,w=Hr();try{return In(2),Ze.T=null,n(i,a,u,f)}finally{In(w),Ze.T=h,_t===0&&(Sl=vi()+500)}},bt.findAllNodes=Ch,bt.findBoundingRects=function(n,i){if(!ul)throw Error(o(363));i=Ch(n,i),n=[];for(var a=0;a<i.length;a++)n.push(Fx(i[a]));for(i=n.length-1;0<i;i--){a=n[i];for(var u=a.x,f=u+a.width,h=a.y,w=h+a.height,k=i-1;0<=k;k--)if(i!==k){var K=n[k],fe=K.x,ge=fe+K.width,Ce=K.y,De=Ce+K.height;if(u>=fe&&h>=Ce&&f<=ge&&w<=De){n.splice(i,1);break}else if(u!==fe||a.width!==K.width||De<h||Ce>w){if(!(h!==Ce||a.height!==K.height||ge<u||fe>f)){fe>u&&(K.width+=fe-u,K.x=u),ge<f&&(K.width=f-fe),n.splice(i,1);break}}else{Ce>h&&(K.height+=Ce-h,K.y=h),De<w&&(K.height=w-Ce),n.splice(i,1);break}}}return n},bt.findHostInstance=Ev,bt.findHostInstanceWithNoPortals=function(n){return n=d(n),n=n!==null?m(n):null,n===null?null:ll(n.stateNode)},bt.findHostInstanceWithWarning=function(n){return Ev(n)},bt.flushPassiveEffects=al,bt.flushSyncFromReconciler=function(n){var i=_t;_t|=1;var a=Ze.T,u=Hr();try{if(In(2),Ze.T=null,n)return n()}finally{In(u),Ze.T=a,_t=i,(_t&6)===0&&ue(0,!1)}},bt.flushSyncWork=cv,bt.focusWithin=function(n,i){if(!ul)throw Error(o(363));for(n=Th(n),i=ov(n,i),i=Array.from(i),n=0;n<i.length;){var a=i[n++],u=a.tag;if(!cl(a)){if((u===5||u===26||u===27)&&zx(a.stateNode))return!0;for(a=a.child;a!==null;)i.push(a),a=a.sibling}}return!1},bt.getFindAllNodesFailureDescription=function(n,i){if(!ul)throw Error(o(363));var a=0,u=[];n=[Th(n),0];for(var f=0;f<n.length;){var h=n[f++],w=h.tag,k=n[f++],K=i[k];if((w!==5&&w!==26&&w!==27||!cl(h))&&(Eh(h,K)&&(u.push(Ah(K)),k++,k>a&&(a=k)),k<i.length))for(h=h.child;h!==null;)n.push(h,k),h=h.sibling}if(a<i.length){for(n=[];a<i.length;a++)n.push(Ah(i[a]));return`findAllNodes was able to match part of the selector:
  `+(u.join(" > ")+`

No matching component was found for:
  `)+n.join(" > ")}return null},bt.getPublicRootInstance=function(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 27:case 5:return ll(n.child.stateNode);default:return n.child.stateNode}},bt.injectIntoDevTools=function(){var n={bundleType:0,version:hx,rendererPackageName:px,currentDispatcherRef:Ze,reconcilerVersion:"19.3.0"};if(Lv!==null&&(n.rendererConfig=Lv),typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u")n=!1;else{var i=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(i.isDisabled||!i.supportsFiber)n=!0;else{try{fl=i.inject(n),Ei=i}catch{}n=!!i.checkDCE}}return n},bt.isAlreadyRendering=function(){return(_t&6)!==0},bt.observeVisibleRects=function(n,i,a,u){if(!ul)throw Error(o(363));n=Ch(n,i);var f=Bx(n,a,u).disconnect;return{disconnect:function(){f()}}},bt.shouldError=function(){return null},bt.shouldSuspend=function(){return!1},bt.startHostTransition=function(n,i,a,u){if(n.tag!==5)throw Error(o(476));var f=r0(n).queue;i0(n,f,i,qo,a===null?s:function(){var h=r0(n);return h.next===null&&(h=n.alternate.memoizedState),Qa(n,h.next.queue,{},Mi()),a(u)})},bt.updateContainer=function(n,i,a,u){var f=i.current,h=Mi();return Av(f,h,n,i,a,u),h},bt.updateContainerSync=function(n,i,a,u){return Av(i.current,2,n,i,a,u),2},bt},r.exports.default=r.exports,Object.defineProperty(r.exports,"__esModule",{value:!0})})(vg)),vg.exports}var c2={exports:{}};c2.exports;var pS;function f2(){return pS||(pS=1,dS.exports=u2()),dS.exports}var d2=f2(),h2=l2(d2),kd={},p2=0,zd=r=>`${r[0].toUpperCase()}${r.slice(1)}`;function m2(r){return r in kd}function Rg(r){return kd[r]}function bu(r){if(typeof r=="function"){let e=`${p2++}`;return kd[e]=r,e}else Object.assign(kd,r)}function g2(r){let e=h2(r);return e.injectIntoDevTools(),e}var wS=0,v2=/^three(?=[A-Z])/;function TS(r,e){let t=zd(r),s=Rg(t);if(r!=="primitive"&&!s)throw new Error(`R3F: ${t} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);if(r==="primitive"&&!e.object)throw new Error("R3F: Primitives without 'object' are invalid!");if(e.args!==void 0&&!Array.isArray(e.args))throw new Error("R3F: The args prop must be an array!")}function y2(r,e,t){var s;return r=m2(zd(r))?r:r.replace(v2,""),TS(r,e),r==="primitive"&&(s=e.object)!=null&&s.__r3f&&delete e.object.__r3f,Nd(e.object,t,r,e)}function b2(r){if(!r.isHidden){var e;r.props.attach&&(e=r.parent)!=null&&e.object?Dd(r.parent,r):pi(r.object)&&(r.previousVisible=r.object.visible,r.object.visible=!1),r.isHidden=!0,yu(r)}}function ES(r){if(r.isHidden){var e;if(r.props.attach&&(e=r.parent)!=null&&e.object)Ld(r.parent,r);else if(pi(r.object)){var t;r.object.visible=(t=r.previousVisible)!=null?t:!0}r.previousVisible=void 0,r.isHidden=!1,yu(r)}}function Pg(r,e,t){let s=e.root.getState();if(!(!r.parent&&r.object!==s.scene)){if(!e.object){var o,l;let c=Rg(zd(e.type));e.object=(o=e.props.object)!=null?o:new c(...(l=e.props.args)!=null?l:[]),e.object.__r3f=e}if(Ws(e.object,e.props),e.props.attach)Ld(r,e);else if(pi(e.object)&&pi(r.object)){let c=r.object.children.indexOf(t?.object);if(t&&c!==-1){let d=r.object.children.indexOf(e.object);if(d!==-1){r.object.children.splice(d,1);let p=d<c?c-1:c;r.object.children.splice(p,0,e.object)}else e.object.parent=r.object,r.object.children.splice(c,0,e.object),e.object.dispatchEvent({type:"added"}),r.object.dispatchEvent({type:"childadded",child:e.object})}else r.object.add(e.object)}for(let c of e.children)Pg(e,c);yu(e)}}function ug(r,e){if(e){if(e.parent===r){let t=r.children.indexOf(e);t!==-1&&r.children.splice(t,1)}e.parent=r,r.children.push(e),Pg(r,e)}}function mS(r,e,t){if(!e||!t)return;if(e.parent===r){let o=r.children.indexOf(e);o!==-1&&r.children.splice(o,1)}e.parent=r;let s=r.children.indexOf(t);s!==-1?r.children.splice(s,0,e):r.children.push(e),Pg(r,e,t)}function AS(r){if(typeof r.dispose=="function"){let e=()=>{try{r.dispose()}catch{}};typeof IS_REACT_ACT_ENVIRONMENT<"u"?e():(0,$n.unstable_scheduleCallback)($n.unstable_IdlePriority,e)}}function yg(r,e,t){if(!e)return;let s=!!e.parent;e.parent=null;let o=r.children.indexOf(e);o!==-1&&r.children.splice(o,1),e.props.attach?Dd(r,e):pi(e.object)&&pi(r.object)&&(r.object.remove(e.object),qR(xg(e),e.object));let l=e.props.dispose!==null&&t!==!1;for(let d=e.children.length-1;d>=0;d--){let p=e.children[d];yg(e,p,l)}if(e.children.length=0,delete e.object.__r3f,l&&e.type!=="primitive"&&e.object.type!=="Scene"&&AS(e.object),t===void 0&&s){var c;let d=(c=e.root)==null||c.getState==null?void 0:c.getState();d&&d.internal.frames===0&&d.invalidate()}}function _2(r,e){for(let t of[r,r.alternate])if(t!==null)if(typeof t.ref=="function"){t.refCleanup==null||t.refCleanup();let s=t.ref(e);typeof s=="function"&&(t.refCleanup=s)}else t.ref&&(t.ref.current=e)}var vu=[];function S2(){if(vu.length!==0)try{x2()}finally{vu.length=0}}function x2(){for(let[t]of vu){let s=t.parent;if(s){t.props.attach?Dd(s,t):pi(t.object)&&pi(s.object)&&s.object.remove(t.object);for(let o of t.children)o.props.attach?Dd(t,o):pi(o.object)&&pi(t.object)&&t.object.remove(o.object)}t.isHidden&&ES(t),t.object.__r3f&&delete t.object.__r3f,t.type!=="primitive"&&AS(t.object)}for(let[t,s,o]of vu){t.props=s;let l=t.parent;if(l){var r,e;let c=Rg(zd(t.type)),d=t.object;t.object=(r=t.props.object)!=null?r:new c(...(e=t.props.args)!=null?e:[]),t.object.__r3f=t,_2(o,t.object),XR(xg(t),d,t.object),Ws(t.object,t.props),t.props.attach?Ld(l,t):pi(t.object)&&pi(l.object)&&l.object.add(t.object);for(let p of t.children)p.props.attach?Ld(t,p):pi(p.object)&&pi(t.object)&&t.object.add(p.object);yu(t)}}}var cg=()=>{},gS={},Pd=wS;function M2(r){switch(r){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return fS;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return cS;case"message":switch((0,$n.unstable_getCurrentPriorityLevel)()){case $n.unstable_ImmediatePriority:return fS;case $n.unstable_UserBlockingPriority:return cS;case $n.unstable_NormalPriority:case $n.unstable_LowPriority:return Id;case $n.unstable_IdlePriority:return n2;default:return Id}default:return Id}}function w2(r){typeof queueMicrotask=="function"?queueMicrotask(r):typeof Promise<"u"?Promise.resolve().then(r).catch(e=>{setTimeout(()=>{throw e})}):setTimeout(r)}var Lo=g2({isPrimaryRenderer:!1,warnsIfNotActing:!1,supportsMutation:!0,supportsPersistence:!1,supportsHydration:!1,createInstance:y2,removeChild:yg,appendChild:ug,appendInitialChild:ug,insertBefore:mS,appendChildToContainer(r,e){let t=r.getState().scene.__r3f;!e||!t||ug(t,e)},removeChildFromContainer(r,e){let t=r.getState().scene.__r3f;!e||!t||yg(t,e)},insertInContainerBefore(r,e,t){let s=r.getState().scene.__r3f;!e||!t||!s||mS(s,e,t)},getRootHostContext:()=>gS,getChildHostContext:()=>gS,commitUpdate(r,e,t,s,o){var l,c,d;TS(e,s);let p=!1;if((r.type==="primitive"&&t.object!==s.object||((l=s.args)==null?void 0:l.length)!==((c=t.args)==null?void 0:c.length)||(d=s.args)!=null&&d.some((m,g)=>{var _;return m!==((_=t.args)==null?void 0:_[g])}))&&(p=!0),p)vu.push([r,mg(s),o]);else{let m=zR(r,s),g=r.props.attach;r.props=mg(s),g!==void 0?r.props.attach=g:delete r.props.attach,Object.keys(m).length&&Ws(r.object,m)}},finalizeInitialChildren:()=>!1,commitMount(){},getPublicInstance:r=>r?.object,prepareForCommit:()=>null,preparePortalMount:r=>Nd(r.getState().scene,r,"",{}),resetAfterCommit:S2,shouldSetTextContent:()=>!1,clearContainer:()=>!1,hideInstance:b2,unhideInstance:ES,createTextInstance:cg,hideTextInstance:cg,unhideTextInstance:cg,supportsMicrotasks:!0,scheduleMicrotask:w2,scheduleTimeout:typeof setTimeout=="function"?setTimeout:void 0,cancelTimeout:typeof clearTimeout=="function"?clearTimeout:void 0,noTimeout:-1,getInstanceFromNode:()=>null,beforeActiveInstanceBlur(){},afterActiveInstanceBlur(){},detachDeletedInstance(){},prepareScopeUpdate(){},getInstanceFromScope:()=>null,shouldAttemptEagerTransition:()=>!1,trackSchedulerEvent:()=>{},resolveEventType:()=>null,resolveEventTimeStamp:()=>-1.1,requestPostPaintCallback(){},maySuspendCommit:()=>!1,preloadInstance:()=>!0,suspendInstance(){},waitForCommitToBeReady:()=>null,NotPendingTransition:null,HostTransitionContext:en.createContext(null),setCurrentUpdatePriority(r){Pd=r},getCurrentUpdatePriority(){return Pd},resolveUpdatePriority(){var r;if(Pd!==wS)return Pd;let e=typeof window<"u"?(r=window.event)==null?void 0:r.type:void 0;return e===void 0?Id:M2(e)},resetFormInstance(){},rendererPackageName:"@react-three/fiber",rendererVersion:a2.version,applyViewTransitionName(r,e,t){},restoreViewTransitionName(r,e){},cancelViewTransitionName(r,e,t){},cancelRootViewTransitionName(r){},restoreRootViewTransitionName(r){},InstanceMeasurement:null,measureInstance:r=>null,wasInstanceInViewport:r=>!0,hasInstanceChanged:(r,e)=>!1,hasInstanceAffectedParent:(r,e)=>!1,suspendOnActiveViewTransition(r,e){},startViewTransition(r,e,t,s,o,l,c,d,p,m,g){return s(),o(),g?.(),c(),null},startGestureTransition(r,e,t,s,o,l,c,d,p,m){return c(),d(),m?.(),null},stopViewTransition(r){},addViewTransitionFinishedListener(r,e){e()},createViewTransitionInstance:r=>null,getCurrentGestureOffset(r){throw new Error("startGestureTransition is not yet supported in react-three-fiber.")},cloneMutableInstance(r,e){return r},cloneMutableTextInstance(r){return r},cloneRootViewTransitionContainer(r){throw new Error("Not implemented.")},removeRootViewTransitionClone(r,e){throw new Error("Not implemented.")},createFragmentInstance:r=>null,updateFragmentInstanceFiber(r,e){},commitNewChildToFragmentInstance(r,e){},deleteChildFromFragmentInstance(r,e){},measureClonedInstance:r=>null,maySuspendCommitOnUpdate:(r,e,t)=>!1,maySuspendCommitInSyncRender:(r,e)=>!1,startSuspendingCommit:()=>null,getSuspendedCommitReason:(r,e)=>null});var cs=new Map;function Fd(r,e){let t=r.state;switch(e.type){case"use":return t.status==="disposed"?!1:(r.state={status:"open"},!0);case"unmount":return t.status==="disposed"?!1:(r.state={status:"closing",token:e.token},!0);case"dispose":return t.status!=="closing"||t.token!==e.token?!1:(r.state={status:"disposed"},!0)}}function _u(r){let e=cs.get(r),t=e?.fiber,s=e?.store;e&&console.warn("R3F.createRoot should only be called once!");let o=typeof reportError=="function"?reportError:console.error,l=s||QR(Xt,Ig),c=t||Lo.createContainer(l,t2,null,!1,null,"",o,o,o,null),d=e||{fiber:c,store:l,state:{status:"open"},ready:$R(void 0),configuration:{},ownsRenderer:!1};e||cs.set(r,d);let p=!1;return{get ready(){return d.ready},configure(m={}){if(!Fd(d,{type:"use"}))return YR(new Error("R3F: Cannot configure a root after disposal has started."));let g=d.ready,{promise:_,resolve:b,reject:y}=jR();d.ready=_;let x=S=>{let v=l.getState();v.gl||(d.ownsRenderer=!Tg(m.gl),v.set({gl:S})),s2(d,r,m),!d.unwatchDpr&&(m.dpr===void 0||Array.isArray(m.dpr))&&(d.unwatchDpr=o2(d)),b(this)},C=()=>{try{var S;let v=(S=l.getState().gl)!=null?S:ZR(r,m.gl);wg(v)?Promise.resolve(v).then(x).catch(y):x(v)}catch(v){y(v)}};return g.status==="pending"?g.then(C,y):C(),_},render(m){if(!Fd(d,{type:"use"}))return l;if(!l.getState().gl&&d.ready.status==="fulfilled"&&this.configure(),d.ready.status==="rejected")throw d.ready.reason;let g=()=>{var _;if(d.state.status!=="open"||d.ready.status==="rejected")return;if(d.ready.status==="pending"){d.ready.then(g,o);return}let b=(_=d.configuration.previous)==null?void 0:_.onCreated,y=(0,Od.jsx)(T2,{store:l,children:m,onCreated:b,rootElement:r});if(p){Lo.updateContainer(y,c,null,oS);return}p=!0,Lo.updateContainerSync(y,c,null,oS),Lo.flushSyncWork()};return g(),l},unmount(){cs.get(r)===d&&CS(r)}}}function T2({store:r,children:e,onCreated:t,rootElement:s}){return Sg(()=>{let o=r.getState();o.set(l=>({internal:{...l.internal,active:!0}})),t&&t(o),r.getState().events.connected||o.events.connect==null||o.events.connect(s)},[]),(0,Od.jsx)(Eg.Provider,{value:r,children:e})}function pu(r){try{return r()}catch(e){console.warn("[R3F] Error while unmounting root; teardown may be incomplete:",e)}}function CS(r,e){let t=cs.get(r),s=Symbol("unmount");if(!t||!Fd(t,{type:"unmount",token:s}))return;let o=()=>{var l;if(t.ready.status==="pending"){t.ready.then(o,o);return}if(!Fd(t,{type:"dispose",token:s}))return;cs.delete(r);let c=t.store.getState();c.internal.active=!1,pu(()=>t.unwatchDpr==null?void 0:t.unwatchDpr()),pu(()=>c.events.disconnect==null?void 0:c.events.disconnect()),(l=c.gl)!=null&&l.xr&&pu(()=>c.xr.disconnect()),c.scene&&pu(()=>SS(c.scene));let d=pu(()=>KR(c.gl,t.ownsRenderer));wg(d)?d.then(()=>e?.(r)):e?.(r)};Lo.updateContainer(null,t.fiber,null,()=>{t.state.status!=="closing"||t.state.token!==s||Lo.updateContainer(null,t.fiber,null,o)})}var E2=new Set,A2=new Set,C2=new Set;function fg(r,e){if(r.size)for(let{callback:t}of r.values())t(e)}function Ya(r,e){switch(r){case"before":return fg(E2,e);case"after":return fg(A2,e);case"tail":return fg(C2,e)}}var dg,hg;function bg(r,e,t){let s=e.clock.getDelta();e.frameloop==="never"&&typeof r=="number"&&(s=r-e.clock.elapsedTime,e.clock.oldTime=e.clock.elapsedTime,e.clock.elapsedTime=r),dg=e.internal.subscribers;for(let o=0;o<dg.length;o++)hg=dg[o],hg.ref.current(hg.store.getState(),s,t);return!e.internal.priority&&e.gl.render&&e.gl.render(e.scene,e.camera),e.internal.frames=Math.max(0,e.internal.frames-1),e.frameloop==="always"?1:e.internal.frames}var Ud=!1,_g=!1,pg,vS,$a;function RS(r){vS=requestAnimationFrame(RS),Ud=!0,pg=0,Ya("before",r),_g=!0;for(let t of cs.values()){var e;$a=t.store.getState(),$a.internal.active&&($a.frameloop==="always"||$a.internal.frames>0)&&!((e=$a.gl.xr)!=null&&e.isPresenting)&&(pg+=bg(r,$a))}if(_g=!1,Ya("after",r),pg===0)return Ya("tail",r),Ud=!1,cancelAnimationFrame(vS)}function Xt(r,e=1){var t;if(!r)return cs.forEach(s=>Xt(s.store.getState(),e));(t=r.gl.xr)!=null&&t.isPresenting||!r.internal.active||r.frameloop==="never"||(e>1?r.internal.frames=Math.min(60,r.internal.frames+e):_g?r.internal.frames=2:r.internal.frames=1,Ud||(Ud=!0,requestAnimationFrame(RS)))}function Ig(r,e=!0,t,s){if(e&&Ya("before",r),t)bg(r,t,s);else for(let o of cs.values())bg(r,o.store.getState());e&&Ya("after",r)}var Xs=ui(qr());var PS=ui(Io());var JN=ui(lg());var qs=ui(qr());var An=(r,e,t)=>new Nr(r,e,t),Su=(r,e,t=18)=>new bo(r,r,e,t),rt={rail:An(28,2,2),railZ:An(2,2,24),cross:An(2,1.5,24),bellypan:An(24,.25,24),footprint:An(34,.05,34),wheel:Su(2,1.6,20),module:An(5,3,5),motor:Su(1.05,3.6,16),tower:An(2,40,2),inner:An(1.4,30,1.4),topbar:An(16,1.6,1.6),chain:An(.3,36,.3),gearbox:Su(1.4,4,16),carriage:An(14,3,2),roller:Su(1.1,22,16),arm:An(2,1.5,9),sideplate:An(.5,6,9),board:An(18,.3,13),rio:An(5,1.2,4),pdh:An(6,1.4,5),battery:An(7,6,3),radio:An(4,1,2.6),breaker:Su(.8,1.2,14),bumperX:An(34,5,3),bumperZ:An(3,5,28),plate:new _o(14,3.2)},Ng=new Map,ja=r=>(Ng.has(r)||Ng.set(r,new Xl(r,20)),Ng.get(r)),xu=Math.PI/2,Bd=[{at:.16,drop:8,items:[[rt.rail,[0,3,13]],[rt.rail,[0,3,-13]],[rt.railZ,[13,3,0]],[rt.railZ,[-13,3,0]],[rt.cross,[-4,2.75,0]],[rt.cross,[4,2.75,0]],[rt.bellypan,[0,2.1,0],null,"dark"]]},{at:.33,drop:10,items:[13,-13].flatMap(r=>[13,-13].flatMap(e=>{let t=r*.86,s=e*.86;return[[rt.module,[t,4.5,s]],[rt.wheel,[t,2,s],[0,0,xu],"dark"],[rt.motor,[t-1.2,7.6,s],null,"dark"],[rt.motor,[t+1.3,7.6,s+.4],null,"dark"]]}))},{at:.5,drop:14,items:[[rt.tower,[-7,22,-6]],[rt.tower,[7,22,-6]],[rt.inner,[-5.4,26,-6]],[rt.inner,[5.4,26,-6]],[rt.topbar,[0,41.3,-6]],[rt.chain,[-7,22,-4.8],null,"dark"],[rt.chain,[7,22,-4.8],null,"dark"],[rt.gearbox,[0,5.6,-8],[0,0,xu],"dark"],[rt.carriage,[0,30,-4.5]],[rt.arm,[-6,30,.5]],[rt.arm,[6,30,.5]],[rt.roller,[0,30,5],[0,0,xu],"dark"],[rt.roller,[0,4.5,15.5],[0,0,xu],"dark"],[rt.roller,[0,8,14],[0,0,xu],"dark"],[rt.sideplate,[-11.3,6,13]],[rt.sideplate,[11.3,6,13]]]},{at:.66,drop:8,items:[[rt.board,[0,4.4,2]],[rt.rio,[-4,5.2,3]],[rt.pdh,[4.5,5.2,1]],[rt.radio,[4.5,5.1,6]],[rt.breaker,[-6.5,5.2,-1.5],null,"dark"],[rt.battery,[0,6.5,9],null,"dark"]]},{at:.82,drop:8,items:[[rt.bumperX,[0,3.5,16.5],null,"bumper"],[rt.bumperX,[0,3.5,-16.5],null,"bumper"],[rt.bumperZ,[16.5,3.5,0],null,"bumper"],[rt.bumperZ,[-16.5,3.5,0],null,"bumper"]],plates:!0}];function Hd(){let r=document.createElement("canvas");r.width=512,r.height=118;let e=r.getContext("2d");e.fillStyle="#ffffff",e.textAlign="center",e.textBaseline="middle",e.font='italic 900 104px Saira, "Arial Narrow", sans-serif',e.fillText("11745",256,64);let t=new Vl(r);return t.colorSpace=En,t.anisotropy=4,t}var ln=ui(Io());bu({Group:cr,Mesh:ni,LineSegments:yo,AmbientLight:Mo,DirectionalLight:xo});var Ct={target:0,p:0,tiltX:0,tiltY:0,tx:0,ty:0,visible:!0,still:!1},Lg=new Ke("#C9A6FF"),R2=new Ke("#E9B949"),P2=new Ke("#6B2FD6"),I2=r=>1-Math.pow(1-r,3),Dg=r=>r<0?0:r>1?1:r,IS=new X(0,21,0),N2=new X(70,52,78).normalize(),L2=31;function D2(){let r=Ki(s=>s.camera),e=Ki(s=>s.size.width),t=Ki(s=>s.size.height);return(0,qs.useLayoutEffect)(()=>{if(!e||!t)return;let s=r.fov*Math.PI/180,o=2*Math.atan(Math.tan(s/2)*(e/t)),l=L2/Math.sin(Math.min(s,o)/2);r.position.copy(N2).multiplyScalar(l).add(IS),r.lookAt(IS),r.updateProjectionMatrix(),Xt()},[r,e,t]),null}function k2({at:r,drop:e,items:t,plates:s}){let o=(0,qs.useRef)(),l=(0,qs.useMemo)(()=>({line:new Ir({color:Lg.clone(),transparent:!0,opacity:.12}),frame:new di({color:"#241638",metalness:.55,roughness:.45,transparent:!0,opacity:0}),dark:new di({color:"#0f0b16",metalness:.2,roughness:.8,transparent:!0,opacity:0}),bumper:new di({color:P2.clone(),metalness:0,roughness:.9,transparent:!0,opacity:0}),plate:s?new ks({map:Hd(),transparent:!0,opacity:0,depthWrite:!1}):null}),[s]);return fs(()=>{let c=Dg((Ct.p-r)/.12),d=I2(c),p=Dg((Ct.p-.9)/.08);o.current.position.y=c>0?(1-d)*e:0,l.line.opacity=.12+.88*d,l.line.color.copy(Lg).lerp(R2,p),l.frame.opacity=.85*d,l.dark.opacity=.95*d,l.bumper.opacity=.97*d,l.plate&&(l.plate.opacity=d)}),(0,ln.jsxs)("group",{ref:o,children:[t.map(([c,d,p,m="frame"],g)=>(0,ln.jsxs)("group",{position:d,rotation:p||[0,0,0],children:[(0,ln.jsx)("mesh",{geometry:c,material:l[m]}),(0,ln.jsx)("lineSegments",{geometry:ja(c),material:l.line})]},g)),s&&(0,ln.jsxs)(ln.Fragment,{children:[(0,ln.jsx)("mesh",{geometry:rt.plate,material:l.plate,position:[0,3.5,18.06]}),(0,ln.jsx)("mesh",{geometry:rt.plate,material:l.plate,position:[0,3.5,-18.06],rotation:[0,Math.PI,0]})]})]})}function F2(){let r=(0,qs.useMemo)(()=>new Ir({color:Lg.clone(),transparent:!0,opacity:.35}),[]);return(0,ln.jsx)("lineSegments",{geometry:ja(rt.footprint),material:r,position:[0,0,0]})}function U2(){let r=(0,qs.useRef)();return fs((e,t)=>{let s=Ct.still?1:1-Math.exp(-t*7);Ct.p+=(Ct.target-Ct.p)*s,Ct.tiltX+=(Ct.tx-Ct.tiltX)*s,Ct.tiltY+=(Ct.ty-Ct.tiltY)*s,r.current.rotation.y=.65+Ct.p*Math.PI*1.25+Ct.tiltY*.35,r.current.rotation.x=Ct.tiltX*.12,(Math.abs(Ct.target-Ct.p)>4e-4||Math.abs(Ct.tx-Ct.tiltX)>.001||Math.abs(Ct.ty-Ct.tiltY)>.001)&&Ct.visible&&Xt()}),(0,ln.jsxs)("group",{ref:r,children:[(0,ln.jsx)(F2,{}),Bd.map((e,t)=>(0,ln.jsx)(k2,{...e},t))]})}function O2(){return(0,ln.jsxs)(ln.Fragment,{children:[(0,ln.jsx)("ambientLight",{intensity:.7}),(0,ln.jsx)("directionalLight",{position:[30,60,40],intensity:2.2}),(0,ln.jsx)("directionalLight",{position:[-40,20,-30],intensity:1.4,color:"#8B3DFF"}),(0,ln.jsx)(U2,{}),(0,ln.jsx)(D2,{})]})}window.Robot3D={mount(r,{reduce:e=!1,label:t=""}={}){let s=document.createElement("canvas");s.className="robot3d",s.setAttribute("role","img"),t&&s.setAttribute("aria-label",t),r.prepend(s),Ct.still=e;let o=_u(s),l=()=>{let c=r.getBoundingClientRect();o.configure({size:{width:c.width,height:c.height,top:0,left:0},dpr:Math.min(window.devicePixelRatio||1,2),frameloop:"demand",flat:!0,gl:{antialias:!0,alpha:!0,powerPreference:"high-performance",toneMapping:ii},camera:{fov:30,near:1,far:800}}),Xt()};return l(),o.render((0,ln.jsx)(O2,{})),new ResizeObserver(l).observe(r),new IntersectionObserver(([c])=>{Ct.visible=c.isIntersecting,Ct.visible&&Xt()},{rootMargin:"100px"}).observe(r),!e&&matchMedia("(hover: hover) and (pointer: fine)").matches&&(r.addEventListener("pointermove",c=>{let d=r.getBoundingClientRect();Ct.ty=((c.clientX-d.left)/d.width-.5)*2,Ct.tx=((c.clientY-d.top)/d.height-.5)*2,Xt()}),r.addEventListener("pointerleave",()=>{Ct.tx=0,Ct.ty=0,Xt()})),document.fonts?.ready.then(()=>Xt()),!0},setProgress(r){Ct.target=Dg(r),Ct.still&&(Ct.p=Ct.target),Xt()}};var Yn=ui(qr());var wt=ui(Io());bu({Group:cr,Mesh:ni,LineSegments:yo,InstancedMesh:Bl,AmbientLight:Mo,DirectionalLight:xo});var Vd=r=>r<0?0:r>1?1:r,NS=r=>r>=1?1:1-Math.pow(2,-10*r),z2=r=>1-Math.pow(1-r,3),B2=r=>({reduce:r,t0:performance.now(),drag:!1,vx:0,rotY:0,px:9,py:9,onScreen:!0});function LS(r,e,t){return r.drag||(r.vx*=Math.exp(-e*3.2),r.rotY+=r.vx*e+(r.reduce?0:t*e)),r.drag||Math.abs(r.vx)>.002||!r.reduce&&t!==0}var H2={paper:{frame:"#ffffff",dark:"#dedad2",bumper:"#5E2A84",line:"#15121b",lineOp:.9,plate:!0,amb:1.1,key:1.6,fill:"#ffffff"},night:{frame:"#1b1820",dark:"#0e0d11",bumper:"#5E2A84",line:"#efece6",lineOp:.42,plate:!0,amb:.55,key:2.4,fill:"#8B3DFF"},clay:{frame:"#f3efe7",dark:"#d8d1c3",bumper:"#E9B949",line:"#2a1640",lineOp:.35,plate:!0,amb:.9,key:2,fill:"#ffffff"}},V2=new X(0,21,0),G2=new X(70,40,78).normalize(),W2=31;function DS({center:r=V2,view:e=G2,radius:t=W2,scale:s=1}){let o=Ki(d=>d.camera),l=Ki(d=>d.size.width),c=Ki(d=>d.size.height);return(0,Yn.useLayoutEffect)(()=>{if(!l||!c)return;let d=o.fov*Math.PI/180,p=2*Math.atan(Math.tan(d/2)*(l/c)),m=t*s/Math.sin(Math.min(d,p)/2);o.position.copy(e).multiplyScalar(m).add(r),o.lookAt(r),o.updateProjectionMatrix(),Xt()},[o,l,c]),null}function X2({part:r,T:e,I:t}){let s=(0,Yn.useRef)(),o=(0,Yn.useMemo)(()=>({line:new Ir({color:e.line,transparent:!0,opacity:0}),frame:new di({color:e.frame,roughness:.75,metalness:.05,transparent:!0,opacity:0}),dark:new di({color:e.dark,roughness:.9,transparent:!0,opacity:0}),bumper:new di({color:e.bumper,roughness:.85,transparent:!0,opacity:0}),plate:r.plates?new ks({map:Hd(),transparent:!0,opacity:0,depthWrite:!1}):null}),[]);return fs(()=>{let l=t.reduce?1:Vd((performance.now()-t.t0-250)/2200),c=Vd((l-r.at*.9)/.16),d=z2(c);s.current.position.y=(1-d)*r.drop*1.4,o.line.opacity=e.lineOp*d,o.frame.opacity=d,o.dark.opacity=d,o.bumper.opacity=d,o.frame.transparent=o.dark.transparent=o.bumper.transparent=d<1,o.plate&&(o.plate.opacity=d)}),(0,wt.jsxs)("group",{ref:s,children:[r.items.map(([l,c,d,p="frame"],m)=>(0,wt.jsxs)("group",{position:c,rotation:d||[0,0,0],children:[(0,wt.jsx)("mesh",{geometry:l,material:o[p]}),(0,wt.jsx)("lineSegments",{geometry:ja(l),material:o.line})]},m)),r.plates&&(0,wt.jsxs)(wt.Fragment,{children:[(0,wt.jsx)("mesh",{geometry:rt.plate,material:o.plate,position:[0,3.5,18.06]}),(0,wt.jsx)("mesh",{geometry:rt.plate,material:o.plate,position:[0,3.5,-18.06],rotation:[0,Math.PI,0]})]})]})}function q2({T:r,I:e,opts:t}){let s=(0,Yn.useRef)(),o=(0,Yn.useMemo)(()=>new Ir({color:r.line,transparent:!0,opacity:r.lineOp*.45}),[]);return fs((l,c)=>{let d=LS(e,c,.16);s.current.rotation.y=.55+e.rotY;let p=performance.now()-e.t0<2800;(d||p)&&e.onScreen&&Xt()}),(0,wt.jsxs)(wt.Fragment,{children:[(0,wt.jsx)("ambientLight",{intensity:r.amb}),(0,wt.jsx)("directionalLight",{position:[30,70,50],intensity:r.key}),(0,wt.jsx)("directionalLight",{position:[-50,20,-30],intensity:.9,color:r.fill}),(0,wt.jsxs)("group",{ref:s,children:[(0,wt.jsx)("lineSegments",{geometry:ja(rt.footprint),material:o}),Bd.map((l,c)=>(0,wt.jsx)(X2,{part:l,T:r,I:e},c))]}),(0,wt.jsx)(DS,{scale:t.fit||1})]})}var $2={paper:{rim:"#C9A04A",amb:1.2,key:1.8},night:{rim:"#E9B949",amb:.8,key:2.6}};function Y2({T:r,I:e,opts:t}){let s=(0,Yn.useRef)(),o=(0,Yn.useMemo)(()=>{let c=new Yl().load(t.badge||"../../assets/badge-520.webp",()=>Xt());c.colorSpace=En,c.anisotropy=8,c.center.set(.5,.5),c.rotation=Math.PI/2;let d=c.clone();d.needsUpdate=!0,d.repeat.set(-1,1);let p=new di({color:r.rim,metalness:.6,roughness:.35});return{rim:p,faces:[p,new di({map:c,roughness:.55}),new di({map:d,roughness:.55})]}},[]),l=(0,Yn.useMemo)(()=>({disc:new bo(10,10,1.2,96),ring:new ql(10,.45,18,120)}),[]);return fs((c,d)=>{let p=e.reduce?1:Vd((performance.now()-e.t0-150)/1600),m=NS(p),g=LS(e,d,0),_=!(e.reduce||t.still),b=_?Math.sin((performance.now()-e.t0)/1600)*.16:0,y=Math.abs(e.px)<4&&Math.abs(e.py)<4,x=t.tilt&&y?Math.max(-1,Math.min(1,e.px))*.42:0,C=t.tilt&&y?Math.max(-1,Math.min(1,e.py))*-.32:0,S=1-Math.exp(-d*6);e.lx=(e.lx||0)+(x-(e.lx||0))*S,e.ly=(e.ly||0)+(C-(e.ly||0))*S;let v=Math.abs(x-e.lx)>.001||Math.abs(C-e.ly)>.001;s.current.rotation.y=(1-m)*-Math.PI*3+e.rotY+b*m+e.lx,s.current.rotation.x=(1-m)*.6+(_?Math.cos((performance.now()-e.t0)/2100)*.05*m:0)+e.ly,s.current.scale.setScalar(.7+.3*m),e.onScreen&&(_||g||v||p<1)&&Xt()}),(0,wt.jsxs)(wt.Fragment,{children:[(0,wt.jsx)("ambientLight",{intensity:r.amb}),(0,wt.jsx)("directionalLight",{position:[20,30,40],intensity:r.key}),(0,wt.jsx)("directionalLight",{position:[-30,-10,20],intensity:.6}),(0,wt.jsxs)("group",{ref:s,children:[(0,wt.jsx)("mesh",{geometry:l.disc,material:o.faces,rotation:[Math.PI/2,0,0]}),(0,wt.jsx)("mesh",{geometry:l.ring,material:o.rim})]}),(0,wt.jsx)(DS,{center:new X(0,0,0),view:new X(0,0,1),radius:11.5,scale:t.fit||1})]})}var j2={field:{unit:"#1c1924",hot:"#8B3DFF",lead:"#E9B949",amb:.55,key:2.4},paper:{unit:"#17141d",hot:"#6B2FD6",lead:"#E9B949",amb:1,key:1.7},night:{unit:"#2a2631",hot:"#8B3DFF",lead:"#E9B949",amb:.7,key:2.2}};function Z2({T:r,I:e,opts:t}){let s=(0,Yn.useRef)(),o=Ki(S=>S.size),l=Ki(S=>S.camera),c=t.cols||26,d=t.rows||12,p=c*d,m=t.gap||3.2,g=t.zShift||0,_=Ki(S=>S.scene),b=(0,Yn.useMemo)(()=>{let S=(v,A)=>v+Math.random()*(A-v);return Array.from({length:p},(v,A)=>{let L=A%c,R=Math.floor(A/c);return{x:(L-(c-1)/2)*m,z:(R-(d-1)/2)*m+g,sx:S(-50,50),sy:S(18,60),sz:S(-40,30),rx:S(-3,3),ry:S(-3,3),delay:R*.07+L*.012+S(0,.08),h:0}})},[]),y=(0,Yn.useMemo)(()=>({o:new Un,c:new Ke,unit:new Ke(r.unit),hot:new Ke(r.hot),lead:new Ke(r.lead),ray:new wo,plane:new Li(new X(0,1,0),0),hit:new X(99,0,99),v2:new ct}),[]),x=(0,Yn.useMemo)(()=>new Nr(1.7,1.1,1.7),[]),C=(0,Yn.useMemo)(()=>new di({roughness:.6,metalness:.1}),[]);return(0,Yn.useLayoutEffect)(()=>{if(t.view==="floor"){let S=o.width<700;l.position.set(0,S?20:16,S?26:40),l.lookAt(0,0,S?-44:-30),l.fov=S?58:40,_.fog=new Dl(t.fog||"#000000",t.fogNear||40,t.fogFar||128)}else l.position.set(0,52,46),l.lookAt(0,0,3),l.fov=o.width<700?52:34;l.updateProjectionMatrix(),Xt()},[o.width,o.height]),fs(()=>{let S=(performance.now()-e.t0)/1e3-.2;y.v2.set(e.px,e.py),y.ray.setFromCamera(y.v2,l),y.ray.ray.intersectPlane(y.plane,y.hit)||y.hit.set(999,0,999);let v=!1;b.forEach((A,L)=>{let R=e.reduce?1:Vd((S-A.delay)/.9),D=NS(R);R<1&&(v=!0);let N=Math.hypot(A.x-y.hit.x,A.z-y.hit.z),M=t.reach||9,P=Math.max(0,1-N/M)*(t.lift||2.2);A.h+=(P-A.h)*.16,Math.abs(P-A.h)>.01&&(v=!0),y.o.position.set(A.sx+(A.x-A.sx)*D,A.sy*(1-D)+.55+A.h,A.sz+(A.z-A.sz)*D),y.o.rotation.set(A.rx*(1-D),A.ry*(1-D),0),y.o.updateMatrix(),s.current.setMatrixAt(L,y.o.matrix);let V=L===Math.floor(d/2)*c+Math.floor(c/2);y.c.copy(V?y.lead:y.unit).lerp(y.hot,V?0:Math.min(1,A.h/1.6)),s.current.setColorAt(L,y.c)}),s.current.instanceMatrix.needsUpdate=!0,s.current.instanceColor&&(s.current.instanceColor.needsUpdate=!0),v&&e.onScreen&&Xt()}),(0,wt.jsxs)(wt.Fragment,{children:[(0,wt.jsx)("ambientLight",{intensity:r.amb}),(0,wt.jsx)("directionalLight",{position:[20,50,30],intensity:r.key}),(0,wt.jsx)("instancedMesh",{ref:s,args:[x,C,p]})]})}var J2={robot:[q2,H2],coin:[Y2,$2],ranks:[Z2,j2]};window.Hero3D={mount(r,e={}){let{scene:t="robot",theme:s="paper",reduce:o=matchMedia("(prefers-reduced-motion: reduce)").matches,label:l=""}=e,[c,d]=J2[t],p=d[s]||Object.values(d)[0],m=B2(o),g=document.createElement("canvas");g.className="hero3d",l?(g.setAttribute("role","img"),g.setAttribute("aria-label",l)):g.setAttribute("aria-hidden","true"),r.prepend(g);let _=_u(g),b=()=>{let L=r.getBoundingClientRect();_.configure({size:{width:L.width,height:L.height,top:0,left:0},dpr:Math.min(window.devicePixelRatio||1,2),frameloop:"demand",flat:!0,gl:{antialias:!0,alpha:!0,powerPreference:"high-performance",toneMapping:ii},camera:{fov:30,near:1,far:900}}),Xt()};b(),_.render((0,wt.jsx)(c,{T:p,I:m,opts:e})),new ResizeObserver(b).observe(r),new IntersectionObserver(([L])=>{m.onScreen=L.isIntersecting,m.onScreen&&Xt()}).observe(r);let y=r,x=e.pointerTarget||r,C=0,S=0;y.addEventListener("pointerdown",L=>{t!=="ranks"&&(m.drag=!0,C=L.clientX,S=L.timeStamp,y.setPointerCapture?.(L.pointerId),Xt())});let v=L=>{let R=r.getBoundingClientRect();if(m.px=(L.clientX-R.left)/R.width*2-1,m.py=-((L.clientY-R.top)/R.height)*2+1,m.drag){let D=L.clientX-C,N=Math.max(1,L.timeStamp-S)/1e3;m.rotY+=D*.01,m.vx=D*.01/N,C=L.clientX,S=L.timeStamp}Xt()};x.addEventListener("pointermove",v),x!==y&&y.addEventListener("pointermove",v);let A=()=>{m.drag=!1,Xt()};return y.addEventListener("pointerup",A),y.addEventListener("pointercancel",A),x.addEventListener("pointerleave",()=>{m.px=9,m.py=9,Xt()}),document.fonts?.ready.then(()=>Xt()),!0}};})();
