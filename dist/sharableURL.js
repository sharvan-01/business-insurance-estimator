"use strict";(()=>{function j(e,t){return function(){return e.apply(t,arguments)}}var{toString:De}=Object.prototype,{getPrototypeOf:le}=Object,fe=(e=>t=>{let r=De.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),O=e=>(e=e.toLowerCase(),t=>fe(t)===e),X=e=>t=>typeof t===e,{isArray:D}=Array,H=X("undefined");function dt(e){return e!==null&&!H(e)&&e.constructor!==null&&!H(e.constructor)&&T(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}var Le=O("ArrayBuffer");function pt(e){let t;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Le(e.buffer),t}var mt=X("string"),T=X("function"),Ue=X("number"),de=e=>e!==null&&typeof e=="object",ht=e=>e===!0||e===!1,G=e=>{if(fe(e)!=="object")return!1;let t=le(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},yt=O("Date"),Et=O("File"),wt=O("Blob"),bt=O("FileList"),xt=e=>de(e)&&T(e.pipe),St=e=>{let t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||De.call(e)===t||T(e.toString)&&e.toString()===t)},Rt=O("URLSearchParams"),At=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function I(e,t,{allOwnKeys:r=!1}={}){if(e===null||typeof e=="undefined")return;let n,o;if(typeof e!="object"&&(e=[e]),D(e))for(n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else{let s=r?Object.getOwnPropertyNames(e):Object.keys(e),i=s.length,c;for(n=0;n<i;n++)c=s[n],t.call(null,e[c],c,e)}}function Be(e,t){t=t.toLowerCase();let r=Object.keys(e),n=r.length,o;for(;n-- >0;)if(o=r[n],t===o.toLowerCase())return o;return null}var ke=(()=>typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:global)(),je=e=>!H(e)&&e!==ke;function ce(){let{caseless:e}=je(this)&&this||{},t={},r=(n,o)=>{let s=e&&Be(t,o)||o;G(t[s])&&G(n)?t[s]=ce(t[s],n):G(n)?t[s]=ce({},n):D(n)?t[s]=n.slice():t[s]=n};for(let n=0,o=arguments.length;n<o;n++)arguments[n]&&I(arguments[n],r);return t}var Ot=(e,t,r,{allOwnKeys:n}={})=>(I(t,(o,s)=>{r&&T(o)?e[s]=j(o,r):e[s]=o},{allOwnKeys:n}),e),gt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Tt=(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},Nt=(e,t,r,n)=>{let o,s,i,c={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),s=o.length;s-- >0;)i=o[s],(!n||n(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=r!==!1&&le(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},Pt=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;let n=e.indexOf(t,r);return n!==-1&&n===r},Ct=e=>{if(!e)return null;if(D(e))return e;let t=e.length;if(!Ue(t))return null;let r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},_t=(e=>t=>e&&t instanceof e)(typeof Uint8Array!="undefined"&&le(Uint8Array)),Ft=(e,t)=>{let n=(e&&e[Symbol.iterator]).call(e),o;for(;(o=n.next())&&!o.done;){let s=o.value;t.call(e,s[0],s[1])}},Dt=(e,t)=>{let r,n=[];for(;(r=e.exec(t))!==null;)n.push(r);return n},Lt=O("HTMLFormElement"),Ut=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,n,o){return n.toUpperCase()+o}),_e=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),Bt=O("RegExp"),He=(e,t)=>{let r=Object.getOwnPropertyDescriptors(e),n={};I(r,(o,s)=>{t(o,s,e)!==!1&&(n[s]=o)}),Object.defineProperties(e,n)},kt=e=>{He(e,(t,r)=>{if(T(e)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;let n=e[r];if(T(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},jt=(e,t)=>{let r={},n=o=>{o.forEach(s=>{r[s]=!0})};return D(e)?n(e):n(String(e).split(t)),r},Ht=()=>{},It=(e,t)=>(e=+e,Number.isFinite(e)?e:t),ue="abcdefghijklmnopqrstuvwxyz",Fe="0123456789",Ie={DIGIT:Fe,ALPHA:ue,ALPHA_DIGIT:ue+ue.toUpperCase()+Fe},qt=(e=16,t=Ie.ALPHA_DIGIT)=>{let r="",{length:n}=t;for(;e--;)r+=t[Math.random()*n|0];return r};function Mt(e){return!!(e&&T(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}var zt=e=>{let t=new Array(10),r=(n,o)=>{if(de(n)){if(t.indexOf(n)>=0)return;if(!("toJSON"in n)){t[o]=n;let s=D(n)?[]:{};return I(n,(i,c)=>{let d=r(i,o+1);!H(d)&&(s[c]=d)}),t[o]=void 0,s}}return n};return r(e,0)},a={isArray:D,isArrayBuffer:Le,isBuffer:dt,isFormData:St,isArrayBufferView:pt,isString:mt,isNumber:Ue,isBoolean:ht,isObject:de,isPlainObject:G,isUndefined:H,isDate:yt,isFile:Et,isBlob:wt,isRegExp:Bt,isFunction:T,isStream:xt,isURLSearchParams:Rt,isTypedArray:_t,isFileList:bt,forEach:I,merge:ce,extend:Ot,trim:At,stripBOM:gt,inherits:Tt,toFlatObject:Nt,kindOf:fe,kindOfTest:O,endsWith:Pt,toArray:Ct,forEachEntry:Ft,matchAll:Dt,isHTMLForm:Lt,hasOwnProperty:_e,hasOwnProp:_e,reduceDescriptors:He,freezeMethods:kt,toObjectSet:jt,toCamelCase:Ut,noop:Ht,toFiniteNumber:It,findKey:Be,global:ke,isContextDefined:je,ALPHABET:Ie,generateString:qt,isSpecCompliantForm:Mt,toJSONObject:zt};function L(e,t,r,n,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),o&&(this.response=o)}a.inherits(L,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var qe=L.prototype,Me={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Me[e]={value:e}});Object.defineProperties(L,Me);Object.defineProperty(qe,"isAxiosError",{value:!0});L.from=(e,t,r,n,o,s)=>{let i=Object.create(qe);return a.toFlatObject(e,i,function(d){return d!==Error.prototype},c=>c!=="isAxiosError"),L.call(i,e.message,t,r,n,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};var m=L;var Y=null;function pe(e){return a.isPlainObject(e)||a.isArray(e)}function Je(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function ze(e,t,r){return e?e.concat(t).map(function(o,s){return o=Je(o),!r&&s?"["+o+"]":o}).join(r?".":""):t}function Jt(e){return a.isArray(e)&&!e.some(pe)}var vt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function Vt(e,t,r){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new(Y||FormData),r=a.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,A){return!a.isUndefined(A[h])});let n=r.metaTokens,o=r.visitor||l,s=r.dots,i=r.indexes,d=(r.Blob||typeof Blob!="undefined"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(o))throw new TypeError("visitor must be a function");function u(f){if(f===null)return"";if(a.isDate(f))return f.toISOString();if(!d&&a.isBlob(f))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(f)||a.isTypedArray(f)?d&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function l(f,h,A){let R=f;if(f&&!A&&typeof f=="object"){if(a.endsWith(h,"{}"))h=n?h:h.slice(0,-2),f=JSON.stringify(f);else if(a.isArray(f)&&Jt(f)||(a.isFileList(f)||a.endsWith(h,"[]"))&&(R=a.toArray(f)))return h=Je(h),R.forEach(function(K,ft){!(a.isUndefined(K)||K===null)&&t.append(i===!0?ze([h],ft,s):i===null?h:h+"[]",u(K))}),!1}return pe(f)?!0:(t.append(ze(A,h,s),u(f)),!1)}let p=[],w=Object.assign(vt,{defaultVisitor:l,convertValue:u,isVisitable:pe});function y(f,h){if(!a.isUndefined(f)){if(p.indexOf(f)!==-1)throw Error("Circular reference detected in "+h.join("."));p.push(f),a.forEach(f,function(R,F){(!(a.isUndefined(R)||R===null)&&o.call(t,R,a.isString(F)?F.trim():F,h,w))===!0&&y(R,h?h.concat(F):[F])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return y(e),t}var N=Vt;function ve(e){let t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(n){return t[n]})}function Ve(e,t){this._pairs=[],e&&N(e,this,t)}var $e=Ve.prototype;$e.append=function(t,r){this._pairs.push([t,r])};$e.toString=function(t){let r=t?function(n){return t.call(this,n,ve)}:ve;return this._pairs.map(function(o){return r(o[0])+"="+r(o[1])},"").join("&")};var Q=Ve;function $t(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function q(e,t,r){if(!t)return e;let n=r&&r.encode||$t,o=r&&r.serialize,s;if(o?s=o(t,r):s=a.isURLSearchParams(t)?t.toString():new Q(t,r).toString(n),s){let i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}var me=class{constructor(){this.handlers=[]}use(t,r,n){return this.handlers.push({fulfilled:t,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(n){n!==null&&t(n)})}},he=me;var Z={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1};var We=typeof URLSearchParams!="undefined"?URLSearchParams:Q;var Ke=typeof FormData!="undefined"?FormData:null;var Ge=typeof Blob!="undefined"?Blob:null;var Wt=(()=>{let e;return typeof navigator!="undefined"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"})(),Kt=(()=>typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),b={isBrowser:!0,classes:{URLSearchParams:We,FormData:Ke,Blob:Ge},isStandardBrowserEnv:Wt,isStandardBrowserWebWorkerEnv:Kt,protocols:["http","https","file","blob","url","data"]};function ye(e,t){return N(e,new b.classes.URLSearchParams,Object.assign({visitor:function(r,n,o,s){return b.isNode&&a.isBuffer(r)?(this.append(n,r.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},t))}function Gt(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Xt(e){let t={},r=Object.keys(e),n,o=r.length,s;for(n=0;n<o;n++)s=r[n],t[s]=e[s];return t}function Yt(e){function t(r,n,o,s){let i=r[s++],c=Number.isFinite(+i),d=s>=r.length;return i=!i&&a.isArray(o)?o.length:i,d?(a.hasOwnProp(o,i)?o[i]=[o[i],n]:o[i]=n,!c):((!o[i]||!a.isObject(o[i]))&&(o[i]=[]),t(r,n,o[i],s)&&a.isArray(o[i])&&(o[i]=Xt(o[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){let r={};return a.forEachEntry(e,(n,o)=>{t(Gt(n),o,r,0)}),r}return null}var ee=Yt;var Qt={"Content-Type":void 0};function Zt(e,t,r){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(n){if(n.name!=="SyntaxError")throw n}return(r||JSON.stringify)(e)}var te={transitional:Z,adapter:["xhr","http"],transformRequest:[function(t,r){let n=r.getContentType()||"",o=n.indexOf("application/json")>-1,s=a.isObject(t);if(s&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return o&&o?JSON.stringify(ee(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(s){if(n.indexOf("application/x-www-form-urlencoded")>-1)return ye(t,this.formSerializer).toString();if((c=a.isFileList(t))||n.indexOf("multipart/form-data")>-1){let d=this.env&&this.env.FormData;return N(c?{"files[]":t}:t,d&&new d,this.formSerializer)}}return s||o?(r.setContentType("application/json",!1),Zt(t)):t}],transformResponse:[function(t){let r=this.transitional||te.transitional,n=r&&r.forcedJSONParsing,o=this.responseType==="json";if(t&&a.isString(t)&&(n&&!this.responseType||o)){let i=!(r&&r.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?m.from(c,m.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:b.classes.FormData,Blob:b.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],function(t){te.headers[t]={}});a.forEach(["post","put","patch"],function(t){te.headers[t]=a.merge(Qt)});var U=te;var er=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Xe=e=>{let t={},r,n,o;return e&&e.split(`
`).forEach(function(i){o=i.indexOf(":"),r=i.substring(0,o).trim().toLowerCase(),n=i.substring(o+1).trim(),!(!r||t[r]&&er[r])&&(r==="set-cookie"?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)}),t};var Ye=Symbol("internals");function M(e){return e&&String(e).trim().toLowerCase()}function re(e){return e===!1||e==null?e:a.isArray(e)?e.map(re):String(e)}function tr(e){let t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g,n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}var rr=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Ee(e,t,r,n,o){if(a.isFunction(n))return n.call(this,t,r);if(o&&(t=r),!!a.isString(t)){if(a.isString(n))return t.indexOf(n)!==-1;if(a.isRegExp(n))return n.test(t)}}function nr(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,n)=>r.toUpperCase()+n)}function or(e,t){let r=a.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(o,s,i){return this[n].call(this,t,o,s,i)},configurable:!0})})}var B=class{constructor(t){t&&this.set(t)}set(t,r,n){let o=this;function s(c,d,u){let l=M(d);if(!l)throw new Error("header name must be a non-empty string");let p=a.findKey(o,l);(!p||o[p]===void 0||u===!0||u===void 0&&o[p]!==!1)&&(o[p||d]=re(c))}let i=(c,d)=>a.forEach(c,(u,l)=>s(u,l,d));return a.isPlainObject(t)||t instanceof this.constructor?i(t,r):a.isString(t)&&(t=t.trim())&&!rr(t)?i(Xe(t),r):t!=null&&s(r,t,n),this}get(t,r){if(t=M(t),t){let n=a.findKey(this,t);if(n){let o=this[n];if(!r)return o;if(r===!0)return tr(o);if(a.isFunction(r))return r.call(this,o,n);if(a.isRegExp(r))return r.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=M(t),t){let n=a.findKey(this,t);return!!(n&&this[n]!==void 0&&(!r||Ee(this,this[n],n,r)))}return!1}delete(t,r){let n=this,o=!1;function s(i){if(i=M(i),i){let c=a.findKey(n,i);c&&(!r||Ee(n,n[c],c,r))&&(delete n[c],o=!0)}}return a.isArray(t)?t.forEach(s):s(t),o}clear(t){let r=Object.keys(this),n=r.length,o=!1;for(;n--;){let s=r[n];(!t||Ee(this,this[s],s,t,!0))&&(delete this[s],o=!0)}return o}normalize(t){let r=this,n={};return a.forEach(this,(o,s)=>{let i=a.findKey(n,s);if(i){r[i]=re(o),delete r[s];return}let c=t?nr(s):String(s).trim();c!==s&&delete r[s],r[c]=re(o),n[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){let r=Object.create(null);return a.forEach(this,(n,o)=>{n!=null&&n!==!1&&(r[o]=t&&a.isArray(n)?n.join(", "):n)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){let n=new this(t);return r.forEach(o=>n.set(o)),n}static accessor(t){let n=(this[Ye]=this[Ye]={accessors:{}}).accessors,o=this.prototype;function s(i){let c=M(i);n[c]||(or(o,i),n[c]=!0)}return a.isArray(t)?t.forEach(s):s(t),this}};B.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.freezeMethods(B.prototype);a.freezeMethods(B);var x=B;function z(e,t){let r=this||U,n=t||r,o=x.from(n.headers),s=n.data;return a.forEach(e,function(c){s=c.call(r,s,o.normalize(),t?t.status:void 0)}),o.normalize(),s}function J(e){return!!(e&&e.__CANCEL__)}function Qe(e,t,r){m.call(this,e==null?"canceled":e,m.ERR_CANCELED,t,r),this.name="CanceledError"}a.inherits(Qe,m,{__CANCEL__:!0});var P=Qe;function we(e,t,r){let n=r.config.validateStatus;!r.status||!n||n(r.status)?e(r):t(new m("Request failed with status code "+r.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}var Ze=b.isStandardBrowserEnv?function(){return{write:function(r,n,o,s,i,c){let d=[];d.push(r+"="+encodeURIComponent(n)),a.isNumber(o)&&d.push("expires="+new Date(o).toGMTString()),a.isString(s)&&d.push("path="+s),a.isString(i)&&d.push("domain="+i),c===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(r){let n=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(r){this.write(r,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function be(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function xe(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function v(e,t){return e&&!be(t)?xe(e,t):t}var et=b.isStandardBrowserEnv?function(){let t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a"),n;function o(s){let i=s;return t&&(r.setAttribute("href",i),i=r.href),r.setAttribute("href",i),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return n=o(window.location.href),function(i){let c=a.isString(i)?o(i):i;return c.protocol===n.protocol&&c.host===n.host}}():function(){return function(){return!0}}();function Se(e){let t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function sr(e,t){e=e||10;let r=new Array(e),n=new Array(e),o=0,s=0,i;return t=t!==void 0?t:1e3,function(d){let u=Date.now(),l=n[s];i||(i=u),r[o]=d,n[o]=u;let p=s,w=0;for(;p!==o;)w+=r[p++],p=p%e;if(o=(o+1)%e,o===s&&(s=(s+1)%e),u-i<t)return;let y=l&&u-l;return y?Math.round(w*1e3/y):void 0}}var tt=sr;function rt(e,t){let r=0,n=tt(50,250);return o=>{let s=o.loaded,i=o.lengthComputable?o.total:void 0,c=s-r,d=n(c),u=s<=i;r=s;let l={loaded:s,total:i,progress:i?s/i:void 0,bytes:c,rate:d||void 0,estimated:d&&i&&u?(i-s)/d:void 0,event:o};l[t?"download":"upload"]=!0,e(l)}}var ir=typeof XMLHttpRequest!="undefined",nt=ir&&function(e){return new Promise(function(r,n){let o=e.data,s=x.from(e.headers).normalize(),i=e.responseType,c;function d(){e.cancelToken&&e.cancelToken.unsubscribe(c),e.signal&&e.signal.removeEventListener("abort",c)}a.isFormData(o)&&(b.isStandardBrowserEnv||b.isStandardBrowserWebWorkerEnv)&&s.setContentType(!1);let u=new XMLHttpRequest;if(e.auth){let y=e.auth.username||"",f=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.set("Authorization","Basic "+btoa(y+":"+f))}let l=v(e.baseURL,e.url);u.open(e.method.toUpperCase(),q(l,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function p(){if(!u)return;let y=x.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),h={data:!i||i==="text"||i==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:y,config:e,request:u};we(function(R){r(R),d()},function(R){n(R),d()},h),u=null}if("onloadend"in u?u.onloadend=p:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(p)},u.onabort=function(){u&&(n(new m("Request aborted",m.ECONNABORTED,e,u)),u=null)},u.onerror=function(){n(new m("Network Error",m.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let f=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",h=e.transitional||Z;e.timeoutErrorMessage&&(f=e.timeoutErrorMessage),n(new m(f,h.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,u)),u=null},b.isStandardBrowserEnv){let y=(e.withCredentials||et(l))&&e.xsrfCookieName&&Ze.read(e.xsrfCookieName);y&&s.set(e.xsrfHeaderName,y)}o===void 0&&s.setContentType(null),"setRequestHeader"in u&&a.forEach(s.toJSON(),function(f,h){u.setRequestHeader(h,f)}),a.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),i&&i!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",rt(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",rt(e.onUploadProgress)),(e.cancelToken||e.signal)&&(c=y=>{u&&(n(!y||y.type?new P(null,e,u):y),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(c),e.signal&&(e.signal.aborted?c():e.signal.addEventListener("abort",c)));let w=Se(l);if(w&&b.protocols.indexOf(w)===-1){n(new m("Unsupported protocol "+w+":",m.ERR_BAD_REQUEST,e));return}u.send(o||null)})};var ne={http:Y,xhr:nt};a.forEach(ne,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});var ot={getAdapter:e=>{e=a.isArray(e)?e:[e];let{length:t}=e,r,n;for(let o=0;o<t&&(r=e[o],!(n=a.isString(r)?ne[r.toLowerCase()]:r));o++);if(!n)throw n===!1?new m(`Adapter ${r} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp(ne,r)?`Adapter '${r}' is not available in the build`:`Unknown adapter '${r}'`);if(!a.isFunction(n))throw new TypeError("adapter is not a function");return n},adapters:ne};function Re(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new P(null,e)}function oe(e){return Re(e),e.headers=x.from(e.headers),e.data=z.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),ot.getAdapter(e.adapter||U.adapter)(e).then(function(n){return Re(e),n.data=z.call(e,e.transformResponse,n),n.headers=x.from(n.headers),n},function(n){return J(n)||(Re(e),n&&n.response&&(n.response.data=z.call(e,e.transformResponse,n.response),n.response.headers=x.from(n.response.headers))),Promise.reject(n)})}var st=e=>e instanceof x?e.toJSON():e;function g(e,t){t=t||{};let r={};function n(u,l,p){return a.isPlainObject(u)&&a.isPlainObject(l)?a.merge.call({caseless:p},u,l):a.isPlainObject(l)?a.merge({},l):a.isArray(l)?l.slice():l}function o(u,l,p){if(a.isUndefined(l)){if(!a.isUndefined(u))return n(void 0,u,p)}else return n(u,l,p)}function s(u,l){if(!a.isUndefined(l))return n(void 0,l)}function i(u,l){if(a.isUndefined(l)){if(!a.isUndefined(u))return n(void 0,u)}else return n(void 0,l)}function c(u,l,p){if(p in t)return n(u,l);if(p in e)return n(void 0,u)}let d={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(u,l)=>o(st(u),st(l),!0)};return a.forEach(Object.keys(e).concat(Object.keys(t)),function(l){let p=d[l]||o,w=p(e[l],t[l],l);a.isUndefined(w)&&p!==c||(r[l]=w)}),r}var se="1.3.5";var Ae={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Ae[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}});var it={};Ae.transitional=function(t,r,n){function o(s,i){return"[Axios v"+se+"] Transitional option '"+s+"'"+i+(n?". "+n:"")}return(s,i,c)=>{if(t===!1)throw new m(o(i," has been removed"+(r?" in "+r:"")),m.ERR_DEPRECATED);return r&&!it[i]&&(it[i]=!0,console.warn(o(i," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(s,i,c):!0}};function ar(e,t,r){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);let n=Object.keys(e),o=n.length;for(;o-- >0;){let s=n[o],i=t[s];if(i){let c=e[s],d=c===void 0||i(c,s,e);if(d!==!0)throw new m("option "+s+" must be "+d,m.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new m("Unknown option "+s,m.ERR_BAD_OPTION)}}var ie={assertOptions:ar,validators:Ae};var C=ie.validators,k=class{constructor(t){this.defaults=t,this.interceptors={request:new he,response:new he}}request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=g(this.defaults,r);let{transitional:n,paramsSerializer:o,headers:s}=r;n!==void 0&&ie.assertOptions(n,{silentJSONParsing:C.transitional(C.boolean),forcedJSONParsing:C.transitional(C.boolean),clarifyTimeoutError:C.transitional(C.boolean)},!1),o!=null&&(a.isFunction(o)?r.paramsSerializer={serialize:o}:ie.assertOptions(o,{encode:C.function,serialize:C.function},!0)),r.method=(r.method||this.defaults.method||"get").toLowerCase();let i;i=s&&a.merge(s.common,s[r.method]),i&&a.forEach(["delete","get","head","post","put","patch","common"],f=>{delete s[f]}),r.headers=x.concat(i,s);let c=[],d=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(r)===!1||(d=d&&h.synchronous,c.unshift(h.fulfilled,h.rejected))});let u=[];this.interceptors.response.forEach(function(h){u.push(h.fulfilled,h.rejected)});let l,p=0,w;if(!d){let f=[oe.bind(this),void 0];for(f.unshift.apply(f,c),f.push.apply(f,u),w=f.length,l=Promise.resolve(r);p<w;)l=l.then(f[p++],f[p++]);return l}w=c.length;let y=r;for(p=0;p<w;){let f=c[p++],h=c[p++];try{y=f(y)}catch(A){h.call(this,A);break}}try{l=oe.call(this,y)}catch(f){return Promise.reject(f)}for(p=0,w=u.length;p<w;)l=l.then(u[p++],u[p++]);return l}getUri(t){t=g(this.defaults,t);let r=v(t.baseURL,t.url);return q(r,t.params,t.paramsSerializer)}};a.forEach(["delete","get","head","options"],function(t){k.prototype[t]=function(r,n){return this.request(g(n||{},{method:t,url:r,data:(n||{}).data}))}});a.forEach(["post","put","patch"],function(t){function r(n){return function(s,i,c){return this.request(g(c||{},{method:t,headers:n?{"Content-Type":"multipart/form-data"}:{},url:s,data:i}))}}k.prototype[t]=r(),k.prototype[t+"Form"]=r(!0)});var V=k;var W=class{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(s){r=s});let n=this;this.promise.then(o=>{if(!n._listeners)return;let s=n._listeners.length;for(;s-- >0;)n._listeners[s](o);n._listeners=null}),this.promise.then=o=>{let s,i=new Promise(c=>{n.subscribe(c),s=c}).then(o);return i.cancel=function(){n.unsubscribe(s)},i},t(function(s,i,c){n.reason||(n.reason=new P(s,i,c),r(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;let r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}static source(){let t;return{token:new W(function(o){t=o}),cancel:t}}},at=W;function Oe(e){return function(r){return e.apply(null,r)}}function ge(e){return a.isObject(e)&&e.isAxiosError===!0}var Te={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Te).forEach(([e,t])=>{Te[t]=e});var ut=Te;function ct(e){let t=new V(e),r=j(V.prototype.request,t);return a.extend(r,V.prototype,t,{allOwnKeys:!0}),a.extend(r,t,null,{allOwnKeys:!0}),r.create=function(o){return ct(g(e,o))},r}var E=ct(U);E.Axios=V;E.CanceledError=P;E.CancelToken=at;E.isCancel=J;E.VERSION=se;E.toFormData=N;E.AxiosError=m;E.Cancel=E.CanceledError;E.all=function(t){return Promise.all(t)};E.spread=Oe;E.isAxiosError=ge;E.mergeConfig=g;E.AxiosHeaders=x;E.formToJSON=e=>ee(a.isHTMLForm(e)?new FormData(e):e);E.HttpStatusCode=ut;E.default=E;var ae=E;var{Axios:Jo,AxiosError:vo,CanceledError:Vo,isCancel:$o,CancelToken:Wo,VERSION:Ko,all:Go,Cancel:Xo,isAxiosError:Yo,spread:Qo,toFormData:Zo,AxiosHeaders:es,HttpStatusCode:ts,formToJSON:rs,mergeConfig:ns}=ae;var S=[],_,ur=0,Ne,lt,Pe="https://x8ki-letl-twmt.n7.xano.io/api:MR0gzHqf/estimates?identifier=",Ce;cr();function cr(){let e=window.location.search,t=new URLSearchParams(e);if(Ce=t.get("id"),Ce){let r=t.get("id");$(".loader-screen").css("display","flex"),lr(r)}}async function lr(e){Pe=Pe+e,await fetch(Pe).then(t=>t.json()).then(t=>{lt=t,fr(lt)})}function fr(e){var t=$("#wf-form-Business-insurance-form")[0];t[0].value=e.Name,t[1].value=e.Email,t[2].value=e.Phone,t[3].value=e.Company_name,console.log(e.Industry),t[4].value=e.Industry,t[6].value=e.Year_of_incorporation,t[7].value=e.Number_of_employees,t[8].value=e.Capital_raised,t[9].value=e.Last_financial_year_revenue,$("#first-continue-button").click(),$("#second-continue").click(),$("otp-continue-button").click(),$("#fourth-continue-button").click(),$(".loader-screen").css("display","none")}$("#fourth-continue-button").on("click",function(){if(!Ce){var e=document.querySelectorAll(".bi-form-input");e.forEach(r=>{S.push(r.value),ur+=1}),S.splice(5,1),console.log(S),Ne={Name:S[0],Email:S[1],Phone:S[2],Company_name:S[3],Industry:S[4],Year_of_incorporation:S[5],Number_of_employees:S[6],Capital_raised:S[7],Last_financial_year_revenue:S[8],Identifier:""},console.log("the data is: "),console.log(Ne);let t={method:"post",maxBodyLength:1/0,url:"https://x8ki-letl-twmt.n7.xano.io/api:MR0gzHqf/estimates",headers:{"Content-Type":"application/json"},data:Ne};ae.request(t).then(r=>{console.log("the response"),console.log(JSON.stringify(r.data)),_=r.data,console.log(_),dr(_)}).catch(r=>{console.log(r)})}});function dr(e){_=_.id,console.log("the ID: "),console.log(_);let t=new URL("https://webdev.plumhq.com/business-insurance-estimator");t.searchParams.set("id",_),$("#estimateUrl")[0].innerHTML=t;var r=$("#bi-sharable-url-link");r.setAttribute("href",t)}})();
