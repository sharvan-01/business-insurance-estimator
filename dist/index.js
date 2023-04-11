"use strict";(()=>{function v(e,t){return function(){return e.apply(t,arguments)}}var{toString:ve}=Object.prototype,{getPrototypeOf:Se}=Object,we=(e=>t=>{let r=ve.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),N=e=>(e=e.toLowerCase(),t=>we(t)===e),ne=e=>t=>typeof t===e,{isArray:U}=Array,J=ne("undefined");function It(e){return e!==null&&!J(e)&&e.constructor!==null&&!J(e.constructor)&&T(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}var Je=N("ArrayBuffer");function Ct(e){let t;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Je(e.buffer),t}var Dt=ne("string"),T=ne("function"),ze=ne("number"),xe=e=>e!==null&&typeof e=="object",Ft=e=>e===!0||e===!1,re=e=>{if(we(e)!=="object")return!1;let t=Se(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},$t=N("Date"),kt=N("File"),Ut=N("Blob"),_t=N("FileList"),Bt=e=>xe(e)&&T(e.pipe),Ht=e=>{let t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||ve.call(e)===t||T(e.toString)&&e.toString()===t)},Mt=N("URLSearchParams"),jt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function z(e,t,{allOwnKeys:r=!1}={}){if(e===null||typeof e=="undefined")return;let n,o;if(typeof e!="object"&&(e=[e]),U(e))for(n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else{let i=r?Object.getOwnPropertyNames(e):Object.keys(e),s=i.length,c;for(n=0;n<s;n++)c=i[n],t.call(null,e[c],c,e)}}function Ve(e,t){t=t.toLowerCase();let r=Object.keys(e),n=r.length,o;for(;n-- >0;)if(o=r[n],t===o.toLowerCase())return o;return null}var We=(()=>typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:global)(),Ke=e=>!J(e)&&e!==We;function be(){let{caseless:e}=Ke(this)&&this||{},t={},r=(n,o)=>{let i=e&&Ve(t,o)||o;re(t[i])&&re(n)?t[i]=be(t[i],n):re(n)?t[i]=be({},n):U(n)?t[i]=n.slice():t[i]=n};for(let n=0,o=arguments.length;n<o;n++)arguments[n]&&z(arguments[n],r);return t}var qt=(e,t,r,{allOwnKeys:n}={})=>(z(t,(o,i)=>{r&&T(o)?e[i]=v(o,r):e[i]=o},{allOwnKeys:n}),e),vt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Jt=(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},zt=(e,t,r,n)=>{let o,i,s,c={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)s=o[i],(!n||n(s,e,t))&&!c[s]&&(t[s]=e[s],c[s]=!0);e=r!==!1&&Se(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},Vt=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;let n=e.indexOf(t,r);return n!==-1&&n===r},Wt=e=>{if(!e)return null;if(U(e))return e;let t=e.length;if(!ze(t))return null;let r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},Kt=(e=>t=>e&&t instanceof e)(typeof Uint8Array!="undefined"&&Se(Uint8Array)),Gt=(e,t)=>{let n=(e&&e[Symbol.iterator]).call(e),o;for(;(o=n.next())&&!o.done;){let i=o.value;t.call(e,i[0],i[1])}},Xt=(e,t)=>{let r,n=[];for(;(r=e.exec(t))!==null;)n.push(r);return n},Qt=N("HTMLFormElement"),Yt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,n,o){return n.toUpperCase()+o}),je=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),Zt=N("RegExp"),Ge=(e,t)=>{let r=Object.getOwnPropertyDescriptors(e),n={};z(r,(o,i)=>{t(o,i,e)!==!1&&(n[i]=o)}),Object.defineProperties(e,n)},er=e=>{Ge(e,(t,r)=>{if(T(e)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;let n=e[r];if(T(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},tr=(e,t)=>{let r={},n=o=>{o.forEach(i=>{r[i]=!0})};return U(e)?n(e):n(String(e).split(t)),r},rr=()=>{},nr=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Ee="abcdefghijklmnopqrstuvwxyz",qe="0123456789",Xe={DIGIT:qe,ALPHA:Ee,ALPHA_DIGIT:Ee+Ee.toUpperCase()+qe},or=(e=16,t=Xe.ALPHA_DIGIT)=>{let r="",{length:n}=t;for(;e--;)r+=t[Math.random()*n|0];return r};function sr(e){return!!(e&&T(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}var ir=e=>{let t=new Array(10),r=(n,o)=>{if(xe(n)){if(t.indexOf(n)>=0)return;if(!("toJSON"in n)){t[o]=n;let i=U(n)?[]:{};return z(n,(s,c)=>{let d=r(s,o+1);!J(d)&&(i[c]=d)}),t[o]=void 0,i}}return n};return r(e,0)},a={isArray:U,isArrayBuffer:Je,isBuffer:It,isFormData:Ht,isArrayBufferView:Ct,isString:Dt,isNumber:ze,isBoolean:Ft,isObject:xe,isPlainObject:re,isUndefined:J,isDate:$t,isFile:kt,isBlob:Ut,isRegExp:Zt,isFunction:T,isStream:Bt,isURLSearchParams:Mt,isTypedArray:Kt,isFileList:_t,forEach:z,merge:be,extend:qt,trim:jt,stripBOM:vt,inherits:Jt,toFlatObject:zt,kindOf:we,kindOfTest:N,endsWith:Vt,toArray:Wt,forEachEntry:Gt,matchAll:Xt,isHTMLForm:Qt,hasOwnProperty:je,hasOwnProp:je,reduceDescriptors:Ge,freezeMethods:er,toObjectSet:tr,toCamelCase:Yt,noop:rr,toFiniteNumber:nr,findKey:Ve,global:We,isContextDefined:Ke,ALPHABET:Xe,generateString:or,isSpecCompliantForm:sr,toJSONObject:ir};function _(e,t,r,n,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),o&&(this.response=o)}a.inherits(_,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var Qe=_.prototype,Ye={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Ye[e]={value:e}});Object.defineProperties(_,Ye);Object.defineProperty(Qe,"isAxiosError",{value:!0});_.from=(e,t,r,n,o,i)=>{let s=Object.create(Qe);return a.toFlatObject(e,s,function(d){return d!==Error.prototype},c=>c!=="isAxiosError"),_.call(s,e.message,t,r,n,o),s.cause=e,s.name=e.name,i&&Object.assign(s,i),s};var m=_;var oe=null;function Re(e){return a.isPlainObject(e)||a.isArray(e)}function et(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function Ze(e,t,r){return e?e.concat(t).map(function(o,i){return o=et(o),!r&&i?"["+o+"]":o}).join(r?".":""):t}function ar(e){return a.isArray(e)&&!e.some(Re)}var cr=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function lr(e,t,r){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new(oe||FormData),r=a.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,R){return!a.isUndefined(R[h])});let n=r.metaTokens,o=r.visitor||u,i=r.dots,s=r.indexes,d=(r.Blob||typeof Blob!="undefined"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(o))throw new TypeError("visitor must be a function");function l(f){if(f===null)return"";if(a.isDate(f))return f.toISOString();if(!d&&a.isBlob(f))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(f)||a.isTypedArray(f)?d&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function u(f,h,R){let x=f;if(f&&!R&&typeof f=="object"){if(a.endsWith(h,"{}"))h=n?h:h.slice(0,-2),f=JSON.stringify(f);else if(a.isArray(f)&&ar(f)||(a.isFileList(f)||a.endsWith(h,"[]"))&&(x=a.toArray(f)))return h=et(h),x.forEach(function(te,Lt){!(a.isUndefined(te)||te===null)&&t.append(s===!0?Ze([h],Lt,i):s===null?h:h+"[]",l(te))}),!1}return Re(f)?!0:(t.append(Ze(R,h,i),l(f)),!1)}let p=[],E=Object.assign(cr,{defaultVisitor:u,convertValue:l,isVisitable:Re});function y(f,h){if(!a.isUndefined(f)){if(p.indexOf(f)!==-1)throw Error("Circular reference detected in "+h.join("."));p.push(f),a.forEach(f,function(x,k){(!(a.isUndefined(x)||x===null)&&o.call(t,x,a.isString(k)?k.trim():k,h,E))===!0&&y(x,h?h.concat(k):[k])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return y(e),t}var P=lr;function tt(e){let t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(n){return t[n]})}function rt(e,t){this._pairs=[],e&&P(e,this,t)}var nt=rt.prototype;nt.append=function(t,r){this._pairs.push([t,r])};nt.toString=function(t){let r=t?function(n){return t.call(this,n,tt)}:tt;return this._pairs.map(function(o){return r(o[0])+"="+r(o[1])},"").join("&")};var se=rt;function ur(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function V(e,t,r){if(!t)return e;let n=r&&r.encode||ur,o=r&&r.serialize,i;if(o?i=o(t,r):i=a.isURLSearchParams(t)?t.toString():new se(t,r).toString(n),i){let s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}var Ne=class{constructor(){this.handlers=[]}use(t,r,n){return this.handlers.push({fulfilled:t,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(n){n!==null&&t(n)})}},Oe=Ne;var ie={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1};var ot=typeof URLSearchParams!="undefined"?URLSearchParams:se;var st=typeof FormData!="undefined"?FormData:null;var it=typeof Blob!="undefined"?Blob:null;var fr=(()=>{let e;return typeof navigator!="undefined"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"})(),dr=(()=>typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),S={isBrowser:!0,classes:{URLSearchParams:ot,FormData:st,Blob:it},isStandardBrowserEnv:fr,isStandardBrowserWebWorkerEnv:dr,protocols:["http","https","file","blob","url","data"]};function Ae(e,t){return P(e,new S.classes.URLSearchParams,Object.assign({visitor:function(r,n,o,i){return S.isNode&&a.isBuffer(r)?(this.append(n,r.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function pr(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function mr(e){let t={},r=Object.keys(e),n,o=r.length,i;for(n=0;n<o;n++)i=r[n],t[i]=e[i];return t}function hr(e){function t(r,n,o,i){let s=r[i++],c=Number.isFinite(+s),d=i>=r.length;return s=!s&&a.isArray(o)?o.length:s,d?(a.hasOwnProp(o,s)?o[s]=[o[s],n]:o[s]=n,!c):((!o[s]||!a.isObject(o[s]))&&(o[s]=[]),t(r,n,o[s],i)&&a.isArray(o[s])&&(o[s]=mr(o[s])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){let r={};return a.forEachEntry(e,(n,o)=>{t(pr(n),o,r,0)}),r}return null}var ae=hr;var yr={"Content-Type":void 0};function gr(e,t,r){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(n){if(n.name!=="SyntaxError")throw n}return(r||JSON.stringify)(e)}var ce={transitional:ie,adapter:["xhr","http"],transformRequest:[function(t,r){let n=r.getContentType()||"",o=n.indexOf("application/json")>-1,i=a.isObject(t);if(i&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return o&&o?JSON.stringify(ae(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(i){if(n.indexOf("application/x-www-form-urlencoded")>-1)return Ae(t,this.formSerializer).toString();if((c=a.isFileList(t))||n.indexOf("multipart/form-data")>-1){let d=this.env&&this.env.FormData;return P(c?{"files[]":t}:t,d&&new d,this.formSerializer)}}return i||o?(r.setContentType("application/json",!1),gr(t)):t}],transformResponse:[function(t){let r=this.transitional||ce.transitional,n=r&&r.forcedJSONParsing,o=this.responseType==="json";if(t&&a.isString(t)&&(n&&!this.responseType||o)){let s=!(r&&r.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(c){if(s)throw c.name==="SyntaxError"?m.from(c,m.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:S.classes.FormData,Blob:S.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],function(t){ce.headers[t]={}});a.forEach(["post","put","patch"],function(t){ce.headers[t]=a.merge(yr)});var B=ce;var Er=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),at=e=>{let t={},r,n,o;return e&&e.split(`
`).forEach(function(s){o=s.indexOf(":"),r=s.substring(0,o).trim().toLowerCase(),n=s.substring(o+1).trim(),!(!r||t[r]&&Er[r])&&(r==="set-cookie"?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)}),t};var ct=Symbol("internals");function W(e){return e&&String(e).trim().toLowerCase()}function le(e){return e===!1||e==null?e:a.isArray(e)?e.map(le):String(e)}function br(e){let t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g,n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}var Sr=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Te(e,t,r,n,o){if(a.isFunction(n))return n.call(this,t,r);if(o&&(t=r),!!a.isString(t)){if(a.isString(n))return t.indexOf(n)!==-1;if(a.isRegExp(n))return n.test(t)}}function wr(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,n)=>r.toUpperCase()+n)}function xr(e,t){let r=a.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(o,i,s){return this[n].call(this,t,o,i,s)},configurable:!0})})}var H=class{constructor(t){t&&this.set(t)}set(t,r,n){let o=this;function i(c,d,l){let u=W(d);if(!u)throw new Error("header name must be a non-empty string");let p=a.findKey(o,u);(!p||o[p]===void 0||l===!0||l===void 0&&o[p]!==!1)&&(o[p||d]=le(c))}let s=(c,d)=>a.forEach(c,(l,u)=>i(l,u,d));return a.isPlainObject(t)||t instanceof this.constructor?s(t,r):a.isString(t)&&(t=t.trim())&&!Sr(t)?s(at(t),r):t!=null&&i(r,t,n),this}get(t,r){if(t=W(t),t){let n=a.findKey(this,t);if(n){let o=this[n];if(!r)return o;if(r===!0)return br(o);if(a.isFunction(r))return r.call(this,o,n);if(a.isRegExp(r))return r.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=W(t),t){let n=a.findKey(this,t);return!!(n&&this[n]!==void 0&&(!r||Te(this,this[n],n,r)))}return!1}delete(t,r){let n=this,o=!1;function i(s){if(s=W(s),s){let c=a.findKey(n,s);c&&(!r||Te(n,n[c],c,r))&&(delete n[c],o=!0)}}return a.isArray(t)?t.forEach(i):i(t),o}clear(t){let r=Object.keys(this),n=r.length,o=!1;for(;n--;){let i=r[n];(!t||Te(this,this[i],i,t,!0))&&(delete this[i],o=!0)}return o}normalize(t){let r=this,n={};return a.forEach(this,(o,i)=>{let s=a.findKey(n,i);if(s){r[s]=le(o),delete r[i];return}let c=t?wr(i):String(i).trim();c!==i&&delete r[i],r[c]=le(o),n[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){let r=Object.create(null);return a.forEach(this,(n,o)=>{n!=null&&n!==!1&&(r[o]=t&&a.isArray(n)?n.join(", "):n)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){let n=new this(t);return r.forEach(o=>n.set(o)),n}static accessor(t){let n=(this[ct]=this[ct]={accessors:{}}).accessors,o=this.prototype;function i(s){let c=W(s);n[c]||(xr(o,s),n[c]=!0)}return a.isArray(t)?t.forEach(i):i(t),this}};H.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.freezeMethods(H.prototype);a.freezeMethods(H);var w=H;function K(e,t){let r=this||B,n=t||r,o=w.from(n.headers),i=n.data;return a.forEach(e,function(c){i=c.call(r,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function G(e){return!!(e&&e.__CANCEL__)}function lt(e,t,r){m.call(this,e==null?"canceled":e,m.ERR_CANCELED,t,r),this.name="CanceledError"}a.inherits(lt,m,{__CANCEL__:!0});var L=lt;function Pe(e,t,r){let n=r.config.validateStatus;!r.status||!n||n(r.status)?e(r):t(new m("Request failed with status code "+r.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}var ut=S.isStandardBrowserEnv?function(){return{write:function(r,n,o,i,s,c){let d=[];d.push(r+"="+encodeURIComponent(n)),a.isNumber(o)&&d.push("expires="+new Date(o).toGMTString()),a.isString(i)&&d.push("path="+i),a.isString(s)&&d.push("domain="+s),c===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(r){let n=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(r){this.write(r,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Le(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Ie(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function X(e,t){return e&&!Le(t)?Ie(e,t):t}var ft=S.isStandardBrowserEnv?function(){let t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a"),n;function o(i){let s=i;return t&&(r.setAttribute("href",s),s=r.href),r.setAttribute("href",s),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return n=o(window.location.href),function(s){let c=a.isString(s)?o(s):s;return c.protocol===n.protocol&&c.host===n.host}}():function(){return function(){return!0}}();function Ce(e){let t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Rr(e,t){e=e||10;let r=new Array(e),n=new Array(e),o=0,i=0,s;return t=t!==void 0?t:1e3,function(d){let l=Date.now(),u=n[i];s||(s=l),r[o]=d,n[o]=l;let p=i,E=0;for(;p!==o;)E+=r[p++],p=p%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),l-s<t)return;let y=u&&l-u;return y?Math.round(E*1e3/y):void 0}}var dt=Rr;function pt(e,t){let r=0,n=dt(50,250);return o=>{let i=o.loaded,s=o.lengthComputable?o.total:void 0,c=i-r,d=n(c),l=i<=s;r=i;let u={loaded:i,total:s,progress:s?i/s:void 0,bytes:c,rate:d||void 0,estimated:d&&s&&l?(s-i)/d:void 0,event:o};u[t?"download":"upload"]=!0,e(u)}}var Nr=typeof XMLHttpRequest!="undefined",mt=Nr&&function(e){return new Promise(function(r,n){let o=e.data,i=w.from(e.headers).normalize(),s=e.responseType,c;function d(){e.cancelToken&&e.cancelToken.unsubscribe(c),e.signal&&e.signal.removeEventListener("abort",c)}a.isFormData(o)&&(S.isStandardBrowserEnv||S.isStandardBrowserWebWorkerEnv)&&i.setContentType(!1);let l=new XMLHttpRequest;if(e.auth){let y=e.auth.username||"",f=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(y+":"+f))}let u=X(e.baseURL,e.url);l.open(e.method.toUpperCase(),V(u,e.params,e.paramsSerializer),!0),l.timeout=e.timeout;function p(){if(!l)return;let y=w.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),h={data:!s||s==="text"||s==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:y,config:e,request:l};Pe(function(x){r(x),d()},function(x){n(x),d()},h),l=null}if("onloadend"in l?l.onloadend=p:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(p)},l.onabort=function(){l&&(n(new m("Request aborted",m.ECONNABORTED,e,l)),l=null)},l.onerror=function(){n(new m("Network Error",m.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){let f=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",h=e.transitional||ie;e.timeoutErrorMessage&&(f=e.timeoutErrorMessage),n(new m(f,h.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,l)),l=null},S.isStandardBrowserEnv){let y=(e.withCredentials||ft(u))&&e.xsrfCookieName&&ut.read(e.xsrfCookieName);y&&i.set(e.xsrfHeaderName,y)}o===void 0&&i.setContentType(null),"setRequestHeader"in l&&a.forEach(i.toJSON(),function(f,h){l.setRequestHeader(h,f)}),a.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),s&&s!=="json"&&(l.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&l.addEventListener("progress",pt(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",pt(e.onUploadProgress)),(e.cancelToken||e.signal)&&(c=y=>{l&&(n(!y||y.type?new L(null,e,l):y),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(c),e.signal&&(e.signal.aborted?c():e.signal.addEventListener("abort",c)));let E=Ce(u);if(E&&S.protocols.indexOf(E)===-1){n(new m("Unsupported protocol "+E+":",m.ERR_BAD_REQUEST,e));return}l.send(o||null)})};var ue={http:oe,xhr:mt};a.forEach(ue,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});var ht={getAdapter:e=>{e=a.isArray(e)?e:[e];let{length:t}=e,r,n;for(let o=0;o<t&&(r=e[o],!(n=a.isString(r)?ue[r.toLowerCase()]:r));o++);if(!n)throw n===!1?new m(`Adapter ${r} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp(ue,r)?`Adapter '${r}' is not available in the build`:`Unknown adapter '${r}'`);if(!a.isFunction(n))throw new TypeError("adapter is not a function");return n},adapters:ue};function De(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new L(null,e)}function fe(e){return De(e),e.headers=w.from(e.headers),e.data=K.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),ht.getAdapter(e.adapter||B.adapter)(e).then(function(n){return De(e),n.data=K.call(e,e.transformResponse,n),n.headers=w.from(n.headers),n},function(n){return G(n)||(De(e),n&&n.response&&(n.response.data=K.call(e,e.transformResponse,n.response),n.response.headers=w.from(n.response.headers))),Promise.reject(n)})}var yt=e=>e instanceof w?e.toJSON():e;function O(e,t){t=t||{};let r={};function n(l,u,p){return a.isPlainObject(l)&&a.isPlainObject(u)?a.merge.call({caseless:p},l,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function o(l,u,p){if(a.isUndefined(u)){if(!a.isUndefined(l))return n(void 0,l,p)}else return n(l,u,p)}function i(l,u){if(!a.isUndefined(u))return n(void 0,u)}function s(l,u){if(a.isUndefined(u)){if(!a.isUndefined(l))return n(void 0,l)}else return n(void 0,u)}function c(l,u,p){if(p in t)return n(l,u);if(p in e)return n(void 0,l)}let d={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:c,headers:(l,u)=>o(yt(l),yt(u),!0)};return a.forEach(Object.keys(e).concat(Object.keys(t)),function(u){let p=d[u]||o,E=p(e[u],t[u],u);a.isUndefined(E)&&p!==c||(r[u]=E)}),r}var de="1.3.5";var Fe={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Fe[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}});var gt={};Fe.transitional=function(t,r,n){function o(i,s){return"[Axios v"+de+"] Transitional option '"+i+"'"+s+(n?". "+n:"")}return(i,s,c)=>{if(t===!1)throw new m(o(s," has been removed"+(r?" in "+r:"")),m.ERR_DEPRECATED);return r&&!gt[s]&&(gt[s]=!0,console.warn(o(s," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(i,s,c):!0}};function Or(e,t,r){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);let n=Object.keys(e),o=n.length;for(;o-- >0;){let i=n[o],s=t[i];if(s){let c=e[i],d=c===void 0||s(c,i,e);if(d!==!0)throw new m("option "+i+" must be "+d,m.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new m("Unknown option "+i,m.ERR_BAD_OPTION)}}var pe={assertOptions:Or,validators:Fe};var I=pe.validators,M=class{constructor(t){this.defaults=t,this.interceptors={request:new Oe,response:new Oe}}request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=O(this.defaults,r);let{transitional:n,paramsSerializer:o,headers:i}=r;n!==void 0&&pe.assertOptions(n,{silentJSONParsing:I.transitional(I.boolean),forcedJSONParsing:I.transitional(I.boolean),clarifyTimeoutError:I.transitional(I.boolean)},!1),o!=null&&(a.isFunction(o)?r.paramsSerializer={serialize:o}:pe.assertOptions(o,{encode:I.function,serialize:I.function},!0)),r.method=(r.method||this.defaults.method||"get").toLowerCase();let s;s=i&&a.merge(i.common,i[r.method]),s&&a.forEach(["delete","get","head","post","put","patch","common"],f=>{delete i[f]}),r.headers=w.concat(s,i);let c=[],d=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(r)===!1||(d=d&&h.synchronous,c.unshift(h.fulfilled,h.rejected))});let l=[];this.interceptors.response.forEach(function(h){l.push(h.fulfilled,h.rejected)});let u,p=0,E;if(!d){let f=[fe.bind(this),void 0];for(f.unshift.apply(f,c),f.push.apply(f,l),E=f.length,u=Promise.resolve(r);p<E;)u=u.then(f[p++],f[p++]);return u}E=c.length;let y=r;for(p=0;p<E;){let f=c[p++],h=c[p++];try{y=f(y)}catch(R){h.call(this,R);break}}try{u=fe.call(this,y)}catch(f){return Promise.reject(f)}for(p=0,E=l.length;p<E;)u=u.then(l[p++],l[p++]);return u}getUri(t){t=O(this.defaults,t);let r=X(t.baseURL,t.url);return V(r,t.params,t.paramsSerializer)}};a.forEach(["delete","get","head","options"],function(t){M.prototype[t]=function(r,n){return this.request(O(n||{},{method:t,url:r,data:(n||{}).data}))}});a.forEach(["post","put","patch"],function(t){function r(n){return function(i,s,c){return this.request(O(c||{},{method:t,headers:n?{"Content-Type":"multipart/form-data"}:{},url:i,data:s}))}}M.prototype[t]=r(),M.prototype[t+"Form"]=r(!0)});var Q=M;var Y=class{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(i){r=i});let n=this;this.promise.then(o=>{if(!n._listeners)return;let i=n._listeners.length;for(;i-- >0;)n._listeners[i](o);n._listeners=null}),this.promise.then=o=>{let i,s=new Promise(c=>{n.subscribe(c),i=c}).then(o);return s.cancel=function(){n.unsubscribe(i)},s},t(function(i,s,c){n.reason||(n.reason=new L(i,s,c),r(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;let r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}static source(){let t;return{token:new Y(function(o){t=o}),cancel:t}}},Et=Y;function $e(e){return function(r){return e.apply(null,r)}}function ke(e){return a.isObject(e)&&e.isAxiosError===!0}var Ue={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ue).forEach(([e,t])=>{Ue[t]=e});var bt=Ue;function St(e){let t=new Q(e),r=v(Q.prototype.request,t);return a.extend(r,Q.prototype,t,{allOwnKeys:!0}),a.extend(r,t,null,{allOwnKeys:!0}),r.create=function(o){return St(O(e,o))},r}var g=St(B);g.Axios=Q;g.CanceledError=L;g.CancelToken=Et;g.isCancel=G;g.VERSION=de;g.toFormData=P;g.AxiosError=m;g.Cancel=g.CanceledError;g.all=function(t){return Promise.all(t)};g.spread=$e;g.isAxiosError=ke;g.mergeConfig=O;g.AxiosHeaders=w;g.formToJSON=e=>ae(a.isHTMLForm(e)?new FormData(e):e);g.HttpStatusCode=bt;g.default=g;var me=g;var{Axios:ds,AxiosError:ps,CanceledError:ms,isCancel:hs,CancelToken:ys,VERSION:gs,all:Es,Cancel:bs,isAxiosError:Ss,spread:ws,toFormData:xs,AxiosHeaders:Rs,HttpStatusCode:Ns,formToJSON:Os,mergeConfig:As}=me;function Ar(e){Object.entries(e).forEach(r=>{$("#bi-industry").append('<option value="'+r[1].id+'">'+r[1].Industry_name+"</option>")}),kr()}$("#first-continue-button").on("click",function(){Nt=$("#name").val(),$("#insert-name")[0].innerHTML=Nt});$("#second-continue").on("click",function(){console.log("second continue button clicked"),C=$("#bi-industry").val(),console.log(C),ge.search="?id="+C,Ot(ge),xt=$("#company-name").val(),$("#insert-company-name")[0].innerHTML=xt,document.querySelectorAll('input[data-place="second"]').forEach(t=>{let r=t.dataset.internalname,n=t.value;_e[r]=n}),console.log("priting values of fields"),console.log(_e),Tr(_e)});function Tr(e){me({method:"POST",url:"https://api.hubspot.com/crm/v3/objects/contacts",headers:{"Content-Type":"application/json",Authorization:"Bearer pat-na1-fea61155-8e9d-4493-9f3b-1d8d2359aca1"},data:{properties:e}}).then(t=>{console.log(t.data)}).catch(t=>{console.error(t)})}$("#bi-industry").change(function(){console.log("change event triggered"),C=$("#bi-industry").val(),console.log(C),ge.search="?id="+C,Ot(ge)});$("#funding-round").change(function(){he="seed",he=$("#funding-round").val()});$("#last-financial-year-revenue").change(function(){ye="seed",ye=$("#last-financial-year-revenue").val()});$("#fourth-continue-button").on("click",function(){console.log("industry ID"),console.log(C),Pr(),D.forEach(e=>{if(e[1].Recommendation==="No"){let t=$(`[data-product='${e[0]}']`);console.log(t[0]),t[0].style.display="none"}}),Fr(D)});function Pr(){D.forEach(e=>{Be(e[0],!0);let t=$(`[data-checkbox=${e[0]}]`);t[0].childNodes[2].checked&&ee(t,e[0])}),Pt=[],A.clear(),b=0,q=0}$(".bi-plan").on("click",function(e){if(console.log("this is the target"),console.log(e.target),e.target.nodeName==="SELECT"){console.log("click on select ");return}if(e.target.nodeName==="INPUT"){console.log("click on input ");return}let t=$(this).attr("data-product");if(console.log("the product code"),console.log(t),e.target.attributes[1]&&e.target.attributes[1].value==="learn"){console.log("click on learn ");return}if(t==="ai"&&document.querySelector("[data-price = 'ai']")===null){console.log("asset insurance is working"),Lr();let n=$(`[data-checkbox=${t}]`);ee(n,t),F=n[0].childNodes[2].checked;return}if(t==="cd"){let n=$(`[data-checkbox=${t}]`);ee(n,t),F=n[0].childNodes[2].checked,Ir(F);return}D.forEach(n=>{if(console.log("the element[0]"),console.log(n[0]),n[0]===t){console.log("the element[1]"),console.log(n[1]),wt=n[1];return}}),console.log("the selected prod: "+t);let r=$(`[data-checkbox=${t}]`);ee(r,t),F=r[0].childNodes[2].checked,Be(t,F),F&&At(t,wt,he,ye),He(t,F)});$("[data-input='si']").change(function(){let e=$(this);e=e[0].value;let t=$(this);t=t.attr("data-si");let r=$(`[data-price=${t}]`);r=r[0];let n;D.forEach(s=>{s[0]===t&&(n=s[1].fundingJSON.find(({sumInsured:c})=>c===e))}),n===void 0&&e==="1"&&(e="3",D.forEach(s=>{s[0]===t&&(n=s[1].fundingJSON.find(({sumInsured:c})=>c===e))})),n===void 0&&(e="3",D.forEach(s=>{s[0]===t&&(n=s[1].fundingJSON[0])}));let o=n.price;r.childNodes[1].innerHTML=parseInt(o).toLocaleString("en-IN",{maximumFractionDigits:0,style:"currency",currency:"INR"});let i=A.get(t);console.log("the products current price is: "+i.get("price")),b=parseInt(b)-parseInt(i.get("price")),i.set("price",o),console.log(A),He(t,!0)});function Be(e,t){t?$(`[data-si='${e}']`).prop("disabled",!1):$(`[data-si='${e}']`).prop("disabled",!0)}$("#no-of-assets").change(function(){Tt=$("#no-of-assets").val()});$("#avg-cost").change(function(){Rt=$("#avg-cost").val(),j=parseInt(Tt)*parseInt(Rt)*.0125,b=parseInt(j)+parseInt(b),A=A.set("ai",new Map([["price",j]])),$("[data-si='ai']").val=j;let e=$("[data-element='total']")[0],t=$("[data-element='gst']")[0],r=$("[data-element='grandTotal']")[0];e[0].innerHTML=b.toLocaleString("en-IN",{maximumFractionDigits:0,style:"currency",currency:"INR"}),r[0].innerHTML=q.toLocaleString("en-IN",{maximumFractionDigits:0,style:"currency",currency:"INR"}),t[0].innerHTML=Z.toLocaleString("en-IN",{maximumFractionDigits:0,style:"currency",currency:"INR"});let n=$("[data-price='ai']");n=n[0],n.childNodes[1].innerHTML=parseInt(j).toLocaleString("en-IN",{maximumFractionDigits:0,style:"currency",currency:"INR"})});function Lr(){let e=$(".pricing-holder")[0].cloneNode(!0);e.setAttribute("data-price","ai"),e.style.display="flex",e.childNodes[0].innerHTML=Me.get("ai"),e.childNodes[1].innerHTML=parseInt(j).toLocaleString("en-IN",{maximumFractionDigits:0,style:"currency",currency:"INR"}),$(".final-pricing-wrapper").append(e)}function Ir(e){if(e){if(document.querySelector("[data-price='cd']")&&(document.querySelector("[data-price='cd']").style.display="flex"),!document.querySelector("[data-price='ci']")){let t=$(".pricing-holder")[0].cloneNode(!0);t.setAttribute("data-price","cd"),t.style.display="flex",t.childNodes[0].innerHTML=Me.get("cd"),t.childNodes[1].innerHTML="Contact sales",$(".final-pricing-wrapper").append(t)}}else document.querySelector("[data-price='cd']").style.display="none"}function He(e,t){console.log(n);let r=$("[data-element='total']")[0],n=$("[data-element='gst']")[0],o=$("[data-element='grandTotal']")[0],s=A.get(e).get("price");if(t){if(document.querySelector(`[data-price='${e}']`)&&(document.querySelector(`[data-price='${e}']`).style.display="flex"),!document.querySelector(`[data-price='${e}']`)){var c=$(".pricing-holder")[0].cloneNode(!0);c.setAttribute("data-price",e),c.style.display="flex",c.childNodes[0].innerHTML=Me.get(e),c.childNodes[1].innerHTML=parseInt(s).toLocaleString("en-IN",{maximumFractionDigits:0,style:"currency",currency:"INR"})}b=parseInt(b)+parseInt(s),q=parseInt(b)*.18+parseInt(b),Z=parseInt(b)*.18,r[0].innerHTML=b.toLocaleString("en-IN",{maximumFractionDigits:0,style:"currency",currency:"INR"}),o[0].innerHTML=q.toLocaleString("en-IN",{maximumFractionDigits:0,style:"currency",currency:"INR"}),n[0].innerHTML=Z.toLocaleString("en-IN",{maximumFractionDigits:0,style:"currency",currency:"INR"}),$(".final-pricing-wrapper").append(c)}else{let d=$(`[data-price='${e}']`);console.log("the price holder element"),console.log(d),d[0].style.display="none",A.delete(e),b=parseInt(b)-parseInt(s),Z=parseInt(b)*.18,q=parseInt(b)*.18+parseInt(b),r[0].innerHTML=b.toLocaleString("en-IN",{maximumFractionDigits:0,style:"currency",currency:"INR"}),n[0].innerHTML=Z.toLocaleString("en-IN",{maximumFractionDigits:0,style:"currency",currency:"INR"}),o[0].innerHTML=q.toLocaleString("en-IN",{maximumFractionDigits:0,style:"currency",currency:"INR"})}}$("[data-element='radio']").click(function(e){console.log("yay"),e.preventDefault()});function Cr(e,t){let r=$(`[data-si='${e}']`);r[0].value=t}function ee(e,t){if(e[0].childNodes[2].checked){e[0].childNodes[0].style.display="none",e[0].childNodes[2].checked=!1,e[0].childNodes[1].classList.remove("w--redirected-checked");var r=$(`[data-product='${t}']`);r.removeClass("selected")}else{e[0].childNodes[0].style.display="block",e[0].childNodes[2].checked=!0,e[0].childNodes[1].classList.add("w--redirected-checked");var r=$(`[data-product='${t}']`);r.addClass("selected")}}async function Ot(e){await fetch(e).then(t=>t.json()).then(t=>{console.log(e),Dr(t)})}function Dr(e){D=Object.entries(e)}function Fr(e){e.forEach(t=>{if(t[1].Recommendation==="must_have"){$(`[data-product='${t[0]}'] [data-pill='good']`).css("display","none"),Pt.push(t[0]);let n=$(`[data-checkbox=${t[0]}]`);ee(n,t[0]);let o=At(t[0],t[1],he,ye);Be(t[0],!0),Cr(t[0],o),He(t[0],n[0].childNodes[2].checked)}else console.log("this product is not recommende"+t[0]),$(`[data-product='${t[0]}'] [data-pill='rec']`).css("display","none")})}function At(e,t,r,n){let o=t.fundingJSON.find(({category:c})=>c===r);console.log("the funding SI:"),console.log(o);let i=t.revenueJSON.find(({category:c})=>c===n),s=o.sumInsured>i.sumInsured?o:i;return console.log("the sum insured is: "+s.sumInsured),console.log("the price is: "+s.price),A=A.set(e,new Map([["price",s.price],["si",s.sumInsured]])),s.sumInsured}var C=2,he="seed",ye="100cr",D=0,wt,F;var xt,b=0,Z=0,Tt=0,Rt=0,j=0,Nt,q=0,_e={},ge=new URL(`https://x8ki-letl-twmt.n7.xano.io/api:MR0gzHqf/industry?id=${C}`),A=new Map,Me=new Map([["do","Directors and officers"],["cgl","Commercial General Liability"],["pi","Errors and omissions"],["ci","Cyber Insurance"],["ai","Asset insurance"],["cd","Crime and Dishonesty"]]),$r="https://x8ki-letl-twmt.n7.xano.io/api:MR0gzHqf/get-all-industries",Pt=[];document.addEventListener("DOMContentLoaded",function(){fetch($r).then(e=>e.json()).then(e=>{Ar(e)})},!1);function kr(){document.querySelectorAll("[data-question='select']").forEach(t=>{let{options:r}=t;r[0].disabled=!0})}})();
