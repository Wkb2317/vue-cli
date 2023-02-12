/*! For license information please see vue-chunk.0bad921a6d.js.LICENSE.txt */
"use strict";(self.webpackChunkvue_cli=self.webpackChunkvue_cli||[]).push([[277],{5539:(e,t)=>{t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[e,r]of t)n[e]=r;return n}},9188:(e,t,n)=>{n.d(t,{$B:()=>r});var r=!0},5490:(e,t,n)=>{n.d(t,{PO:()=>q,p7:()=>Le});var r=n(6226),o=n(6050);const a="undefined"!=typeof window;function c(e){return e.__esModule||"Module"===e[Symbol.toStringTag]}const s=Object.assign;function l(e,t){const n={};for(const r in t){const o=t[r];n[r]=u(o)?o.map(e):e(o)}return n}const i=()=>{},u=Array.isArray;const f=/\/$/,p=e=>e.replace(f,"");function h(e,t,n="/"){let r,o={},a="",c="";const s=t.indexOf("#");let l=t.indexOf("?");return s<l&&s>=0&&(l=-1),l>-1&&(r=t.slice(0,l),a=t.slice(l+1,s>-1?s:t.length),o=e(a)),s>-1&&(r=r||t.slice(0,s),c=t.slice(s,t.length)),r=function(e,t){if(e.startsWith("/"))return e;0;if(!e)return t;const n=t.split("/"),r=e.split("/");let o,a,c=n.length-1;for(o=0;o<r.length;o++)if(a=r[o],"."!==a){if(".."!==a)break;c>1&&c--}return n.slice(0,c).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}(null!=r?r:t,n),{fullPath:r+(a&&"?")+a+c,path:r,query:o,hash:c}}function d(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function m(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function g(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!v(e[n],t[n]))return!1;return!0}function v(e,t){return u(e)?y(e,t):u(t)?y(t,e):e===t}function y(e,t){return u(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}var b,w;!function(e){e.pop="pop",e.push="push"}(b||(b={})),function(e){e.back="back",e.forward="forward",e.unknown=""}(w||(w={}));function E(e){if(!e)if(a){const t=document.querySelector("base");e=(e=t&&t.getAttribute("href")||"/").replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),p(e)}const k=/^[^#]+#/;function O(e,t){return e.replace(k,"#")+t}const R=()=>({left:window.pageXOffset,top:window.pageYOffset});function P(e){let t;if("el"in e){const n=e.el,r="string"==typeof n&&n.startsWith("#");0;const o="string"==typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=function(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function C(e,t){return(history.state?history.state.position-t:-1)+e}const S=new Map;let x=()=>location.protocol+"//"+location.host;function $(e,t){const{pathname:n,search:r,hash:o}=t,a=e.indexOf("#");if(a>-1){let t=o.includes(e.slice(a))?e.slice(a).length:1,n=o.slice(t);return"/"!==n[0]&&(n="/"+n),d(n,"")}return d(n,e)+r+o}function j(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?R():null}}function q(e){const t=function(e){const{history:t,location:n}=window,r={value:$(e,n)},o={value:t.state};function a(r,a,c){const s=e.indexOf("#"),l=s>-1?(n.host&&document.querySelector("base")?e:e.slice(s))+r:x()+e+r;try{t[c?"replaceState":"pushState"](a,"",l),o.value=a}catch(e){console.error(e),n[c?"replace":"assign"](l)}}return o.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:o,push:function(e,n){const c=s({},o.value,t.state,{forward:e,scroll:R()});a(c.current,c,!0),a(e,s({},j(r.value,e,null),{position:c.position+1},n),!1),r.value=e},replace:function(e,n){a(e,s({},t.state,j(o.value.back,e,o.value.forward,!0),n,{position:o.value.position}),!0),r.value=e}}}(e=E(e)),n=function(e,t,n,r){let o=[],a=[],c=null;const l=({state:a})=>{const s=$(e,location),l=n.value,i=t.value;let u=0;if(a){if(n.value=s,t.value=a,c&&c===l)return void(c=null);u=i?a.position-i.position:0}else r(s);o.forEach((e=>{e(n.value,l,{delta:u,type:b.pop,direction:u?u>0?w.forward:w.back:w.unknown})}))};function i(){const{history:e}=window;e.state&&e.replaceState(s({},e.state,{scroll:R()}),"")}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",i),{pauseListeners:function(){c=n.value},listen:function(e){o.push(e);const t=()=>{const t=o.indexOf(e);t>-1&&o.splice(t,1)};return a.push(t),t},destroy:function(){for(const e of a)e();a=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",i)}}}(e,t.state,t.location,t.replace);const r=s({location:"",base:e,go:function(e,t=!0){t||n.pauseListeners(),history.go(e)},createHref:O.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function A(e){return"string"==typeof e||"symbol"==typeof e}const F={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},_=Symbol("");var L;!function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"}(L||(L={}));function M(e,t){return s(new Error,{type:e,[_]:!0},t)}function B(e,t){return e instanceof Error&&_ in e&&(null==t||!!(e.type&t))}const U="[^/]+?",G={sensitive:!1,strict:!1,start:!0,end:!0},I=/[.+*?^${}()[\]/\\]/g;function D(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function J(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const e=D(r[n],o[n]);if(e)return e;n++}if(1===Math.abs(o.length-r.length)){if(T(r))return 1;if(T(o))return-1}return o.length-r.length}function T(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const W={type:0,value:""},V=/[a-zA-Z0-9_]/;function z(e,t,n){const r=function(e,t){const n=s({},G,t),r=[];let o=n.start?"^":"";const a=[];for(const t of e){const e=t.length?[]:[90];n.strict&&!t.length&&(o+="/");for(let r=0;r<t.length;r++){const c=t[r];let s=40+(n.sensitive?.25:0);if(0===c.type)r||(o+="/"),o+=c.value.replace(I,"\\$&"),s+=40;else if(1===c.type){const{value:e,repeatable:n,optional:l,regexp:i}=c;a.push({name:e,repeatable:n,optional:l});const u=i||U;if(u!==U){s+=10;try{new RegExp(`(${u})`)}catch(t){throw new Error(`Invalid custom RegExp for param "${e}" (${u}): `+t.message)}}let f=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;r||(f=l&&t.length<2?`(?:/${f})`:"/"+f),l&&(f+="?"),o+=f,s+=20,l&&(s+=-8),n&&(s+=-20),".*"===u&&(s+=-50)}e.push(s)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const c=new RegExp(o,n.sensitive?"":"i");return{re:c,score:r,keys:a,parse:function(e){const t=e.match(c),n={};if(!t)return null;for(let e=1;e<t.length;e++){const r=t[e]||"",o=a[e-1];n[o.name]=r&&o.repeatable?r.split("/"):r}return n},stringify:function(t){let n="",r=!1;for(const o of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of o)if(0===e.type)n+=e.value;else if(1===e.type){const{value:a,repeatable:c,optional:s}=e,l=a in t?t[a]:"";if(u(l)&&!c)throw new Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);const i=u(l)?l.join("/"):l;if(!i){if(!s)throw new Error(`Missing required param "${a}"`);o.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=i}}return n||"/"}}}(function(e){if(!e)return[[]];if("/"===e)return[[W]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${i}": ${e}`)}let n=0,r=n;const o=[];let a;function c(){a&&o.push(a),a=[]}let s,l=0,i="",u="";function f(){i&&(0===n?a.push({type:0,value:i}):1===n||2===n||3===n?(a.length>1&&("*"===s||"+"===s)&&t(`A repeatable param (${i}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:i,regexp:u,repeatable:"*"===s||"+"===s,optional:"*"===s||"?"===s})):t("Invalid state to consume buffer"),i="")}function p(){i+=s}for(;l<e.length;)if(s=e[l++],"\\"!==s||2===n)switch(n){case 0:"/"===s?(i&&f(),c()):":"===s?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:"("===s?n=2:V.test(s)?p():(f(),n=0,"*"!==s&&"?"!==s&&"+"!==s&&l--);break;case 2:")"===s?"\\"==u[u.length-1]?u=u.slice(0,-1)+s:n=3:u+=s;break;case 3:f(),n=0,"*"!==s&&"?"!==s&&"+"!==s&&l--,u="";break;default:t("Unknown state")}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${i}"`),f(),c(),o}(e.path),n);const o=s(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function H(e,t){const n=[],r=new Map;function o(e,n,r){const l=!r,u=function(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Y(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}(e);u.aliasOf=r&&r.record;const f=Q(t,e),p=[u];if("alias"in e){const t="string"==typeof e.alias?[e.alias]:e.alias;for(const e of t)p.push(s({},u,{components:r?r.record.components:u.components,path:e,aliasOf:r?r.record:u}))}let h,d;for(const t of p){const{path:s}=t;if(n&&"/"!==s[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(s&&r+s)}if(h=z(t,n,f),r?r.alias.push(h):(d=d||h,d!==h&&d.alias.push(h),l&&e.name&&!Z(h)&&a(e.name)),u.children){const e=u.children;for(let t=0;t<e.length;t++)o(e[t],h,r&&r.children[t])}r=r||h,(h.record.components&&Object.keys(h.record.components).length||h.record.name||h.record.redirect)&&c(h)}return d?()=>{a(d)}:i}function a(e){if(A(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(a),t.alias.forEach(a))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(a),e.alias.forEach(a))}}function c(e){let t=0;for(;t<n.length&&J(e,n[t])>=0&&(e.record.path!==n[t].record.path||!N(e,n[t]));)t++;n.splice(t,0,e),e.record.name&&!Z(e)&&r.set(e.record.name,e)}return t=Q({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>o(e))),{addRoute:o,resolve:function(e,t){let o,a,c,l={};if("name"in e&&e.name){if(o=r.get(e.name),!o)throw M(1,{location:e});0,c=o.record.name,l=s(K(t.params,o.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params&&K(e.params,o.keys.map((e=>e.name)))),a=o.stringify(l)}else if("path"in e)a=e.path,o=n.find((e=>e.re.test(a))),o&&(l=o.parse(a),c=o.record.name);else{if(o=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!o)throw M(1,{location:e,currentLocation:t});c=o.record.name,l=s({},t.params,e.params),a=o.stringify(l)}const i=[];let u=o;for(;u;)i.unshift(u.record),u=u.parent;return{name:c,path:a,params:l,matched:i,meta:X(i)}},removeRoute:a,getRoutes:function(){return n},getRecordMatcher:function(e){return r.get(e)}}}function K(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Y(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"==typeof n?n:n[r];return t}function Z(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function X(e){return e.reduce(((e,t)=>s(e,t.meta)),{})}function Q(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function N(e,t){return t.children.some((t=>t===e||N(e,t)))}const ee=/#/g,te=/&/g,ne=/\//g,re=/=/g,oe=/\?/g,ae=/\+/g,ce=/%5B/g,se=/%5D/g,le=/%5E/g,ie=/%60/g,ue=/%7B/g,fe=/%7C/g,pe=/%7D/g,he=/%20/g;function de(e){return encodeURI(""+e).replace(fe,"|").replace(ce,"[").replace(se,"]")}function me(e){return de(e).replace(ae,"%2B").replace(he,"+").replace(ee,"%23").replace(te,"%26").replace(ie,"`").replace(ue,"{").replace(pe,"}").replace(le,"^")}function ge(e){return null==e?"":function(e){return de(e).replace(ee,"%23").replace(oe,"%3F")}(e).replace(ne,"%2F")}function ve(e){try{return decodeURIComponent(""+e)}catch(e){}return""+e}function ye(e){const t={};if(""===e||"?"===e)return t;const n=("?"===e[0]?e.slice(1):e).split("&");for(let e=0;e<n.length;++e){const r=n[e].replace(ae," "),o=r.indexOf("="),a=ve(o<0?r:r.slice(0,o)),c=o<0?null:ve(r.slice(o+1));if(a in t){let e=t[a];u(e)||(e=t[a]=[e]),e.push(c)}else t[a]=c}return t}function be(e){let t="";for(let n in e){const r=e[n];if(n=me(n).replace(re,"%3D"),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}(u(r)?r.map((e=>e&&me(e))):[r&&me(r)]).forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function we(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=u(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}const Ee=Symbol(""),ke=Symbol(""),Oe=Symbol(""),Re=Symbol(""),Pe=Symbol("");function Ce(){let e=[];return{add:function(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}},list:()=>e,reset:function(){e=[]}}}function Se(e,t,n,r,o){const a=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise(((c,s)=>{const l=e=>{var l;!1===e?s(M(4,{from:n,to:t})):e instanceof Error?s(e):"string"==typeof(l=e)||l&&"object"==typeof l?s(M(2,{from:t,to:e})):(a&&r.enterCallbacks[o]===a&&"function"==typeof e&&a.push(e),c())},i=e.call(r&&r.instances[o],t,n,l);let u=Promise.resolve(i);e.length<3&&(u=u.then(l)),u.catch((e=>s(e)))}))}function xe(e,t,n,r){const o=[];for(const s of e){0;for(const e in s.components){let l=s.components[e];if("beforeRouteEnter"===t||s.instances[e])if("object"==typeof(a=l)||"displayName"in a||"props"in a||"__vccOpts"in a){const a=(l.__vccOpts||l)[t];a&&o.push(Se(a,n,r,s,e))}else{let a=l();0,o.push((()=>a.then((o=>{if(!o)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${s.path}"`));const a=c(o)?o.default:o;s.components[e]=a;const l=(a.__vccOpts||a)[t];return l&&Se(l,n,r,s,e)()}))))}}}var a;return o}function $e(e){const t=(0,r.f3)(Oe),n=(0,r.f3)(Re),a=(0,r.Fl)((()=>t.resolve((0,o.SU)(e.to)))),c=(0,r.Fl)((()=>{const{matched:e}=a.value,{length:t}=e,r=e[t-1],o=n.matched;if(!r||!o.length)return-1;const c=o.findIndex(m.bind(null,r));if(c>-1)return c;const s=qe(e[t-2]);return t>1&&qe(r)===s&&o[o.length-1].path!==s?o.findIndex(m.bind(null,e[t-2])):c})),s=(0,r.Fl)((()=>c.value>-1&&function(e,t){for(const n in t){const r=t[n],o=e[n];if("string"==typeof r){if(r!==o)return!1}else if(!u(o)||o.length!==r.length||r.some(((e,t)=>e!==o[t])))return!1}return!0}(n.params,a.value.params))),l=(0,r.Fl)((()=>c.value>-1&&c.value===n.matched.length-1&&g(n.params,a.value.params)));return{route:a,href:(0,r.Fl)((()=>a.value.href)),isActive:s,isExactActive:l,navigate:function(n={}){return function(e){if(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;if(void 0!==e.button&&0!==e.button)return;if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}e.preventDefault&&e.preventDefault();return!0}(n)?t[(0,o.SU)(e.replace)?"replace":"push"]((0,o.SU)(e.to)).catch(i):Promise.resolve()}}}const je=(0,r.aZ)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:$e,setup(e,{slots:t}){const n=(0,o.qj)($e(e)),{options:a}=(0,r.f3)(Oe),c=(0,r.Fl)((()=>({[Ae(e.activeClass,a.linkActiveClass,"router-link-active")]:n.isActive,[Ae(e.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const o=t.default&&t.default(n);return e.custom?o:(0,r.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:c.value},o)}}});function qe(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ae=(e,t,n)=>null!=e?e:null!=t?t:n;function Fe(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const _e=(0,r.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const a=(0,r.f3)(Pe),c=(0,r.Fl)((()=>e.route||a.value)),l=(0,r.f3)(ke,0),i=(0,r.Fl)((()=>{let e=(0,o.SU)(l);const{matched:t}=c.value;let n;for(;(n=t[e])&&!n.components;)e++;return e})),u=(0,r.Fl)((()=>c.value.matched[i.value]));(0,r.JJ)(ke,(0,r.Fl)((()=>i.value+1))),(0,r.JJ)(Ee,u),(0,r.JJ)(Pe,c);const f=(0,o.iH)();return(0,r.YP)((()=>[f.value,u.value,e.name]),(([e,t,n],[r,o,a])=>{t&&(t.instances[n]=e,o&&o!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=o.leaveGuards),t.updateGuards.size||(t.updateGuards=o.updateGuards))),!e||!t||o&&m(t,o)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const o=c.value,a=e.name,l=u.value,i=l&&l.components[a];if(!i)return Fe(n.default,{Component:i,route:o});const p=l.props[a],h=p?!0===p?o.params:"function"==typeof p?p(o):p:null,d=(0,r.h)(i,s({},h,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(l.instances[a]=null)},ref:f}));return Fe(n.default,{Component:d,route:o})||d}}});function Le(e){const t=H(e.routes,e),n=e.parseQuery||ye,c=e.stringifyQuery||be,f=e.history;const p=Ce(),d=Ce(),v=Ce(),y=(0,o.XI)(F);let w=F;a&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const E=l.bind(null,(e=>""+e)),k=l.bind(null,ge),O=l.bind(null,ve);function x(e,r){if(r=s({},r||y.value),"string"==typeof e){const o=h(n,e,r.path),a=t.resolve({path:o.path},r),c=f.createHref(o.fullPath);return s(o,a,{params:O(a.params),hash:ve(o.hash),redirectedFrom:void 0,href:c})}let o;if("path"in e)o=s({},e,{path:h(n,e.path,r.path).path});else{const t=s({},e.params);for(const e in t)null==t[e]&&delete t[e];o=s({},e,{params:k(e.params)}),r.params=k(r.params)}const a=t.resolve(o,r),l=e.hash||"";a.params=E(O(a.params));const i=function(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}(c,s({},e,{hash:(u=l,de(u).replace(ue,"{").replace(pe,"}").replace(le,"^")),path:a.path}));var u;const p=f.createHref(i);return s({fullPath:i,hash:l,query:c===be?we(e.query):e.query||{}},a,{redirectedFrom:void 0,href:p})}function $(e){return"string"==typeof e?h(n,e,y.value.path):s({},e)}function j(e,t){if(w!==e)return M(8,{from:t,to:e})}function q(e){return L(e)}function _(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"==typeof n?n(e):n;return"string"==typeof r&&(r=r.includes("?")||r.includes("#")?r=$(r):{path:r},r.params={}),s({query:e.query,hash:e.hash,params:"path"in r?{}:e.params},r)}}function L(e,t){const n=w=x(e),r=y.value,o=e.state,a=e.force,l=!0===e.replace,i=_(n);if(i)return L(s($(i),{state:"object"==typeof i?s({},o,i.state):o,force:a,replace:l}),t||n);const u=n;let f;return u.redirectedFrom=t,!a&&function(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&m(t.matched[r],n.matched[o])&&g(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}(c,r,n)&&(f=M(16,{to:u,from:r}),Z(r,r,!0,!1)),(f?Promise.resolve(f):G(u,r)).catch((e=>B(e)?B(e,2)?e:Y(e):K(e,u,r))).then((e=>{if(e){if(B(e,2))return L(s({replace:l},$(e.to),{state:"object"==typeof e.to?s({},o,e.to.state):o,force:a}),t||u)}else e=D(u,r,!0,l,o);return I(u,r,e),e}))}function U(e,t){const n=j(e,t);return n?Promise.reject(n):Promise.resolve()}function G(e,t){let n;const[r,o,a]=function(e,t){const n=[],r=[],o=[],a=Math.max(t.matched.length,e.matched.length);for(let c=0;c<a;c++){const a=t.matched[c];a&&(e.matched.find((e=>m(e,a)))?r.push(a):n.push(a));const s=e.matched[c];s&&(t.matched.find((e=>m(e,s)))||o.push(s))}return[n,r,o]}(e,t);n=xe(r.reverse(),"beforeRouteLeave",e,t);for(const o of r)o.leaveGuards.forEach((r=>{n.push(Se(r,e,t))}));const c=U.bind(null,e,t);return n.push(c),Me(n).then((()=>{n=[];for(const r of p.list())n.push(Se(r,e,t));return n.push(c),Me(n)})).then((()=>{n=xe(o,"beforeRouteUpdate",e,t);for(const r of o)r.updateGuards.forEach((r=>{n.push(Se(r,e,t))}));return n.push(c),Me(n)})).then((()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(u(r.beforeEnter))for(const o of r.beforeEnter)n.push(Se(o,e,t));else n.push(Se(r.beforeEnter,e,t));return n.push(c),Me(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=xe(a,"beforeRouteEnter",e,t),n.push(c),Me(n)))).then((()=>{n=[];for(const r of d.list())n.push(Se(r,e,t));return n.push(c),Me(n)})).catch((e=>B(e,8)?e:Promise.reject(e)))}function I(e,t,n){for(const r of v.list())r(e,t,n)}function D(e,t,n,r,o){const c=j(e,t);if(c)return c;const l=t===F,i=a?history.state:{};n&&(r||l?f.replace(e.fullPath,s({scroll:l&&i&&i.scroll},o)):f.push(e.fullPath,o)),y.value=e,Z(e,t,n,l),Y()}let J;function T(){J||(J=f.listen(((e,t,n)=>{if(!ee.listening)return;const r=x(e),o=_(r);if(o)return void L(s(o,{replace:!0}),r).catch(i);w=r;const c=y.value;var l,u;a&&(l=C(c.fullPath,n.delta),u=R(),S.set(l,u)),G(r,c).catch((e=>B(e,12)?e:B(e,2)?(L(e.to,r).then((e=>{B(e,20)&&!n.delta&&n.type===b.pop&&f.go(-1,!1)})).catch(i),Promise.reject()):(n.delta&&f.go(-n.delta,!1),K(e,r,c)))).then((e=>{(e=e||D(r,c,!1))&&(n.delta&&!B(e,8)?f.go(-n.delta,!1):n.type===b.pop&&B(e,20)&&f.go(-1,!1)),I(r,c,e)})).catch(i)})))}let W,V=Ce(),z=Ce();function K(e,t,n){Y(e);const r=z.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function Y(e){return W||(W=!e,T(),V.list().forEach((([t,n])=>e?n(e):t())),V.reset()),e}function Z(t,n,o,c){const{scrollBehavior:s}=e;if(!a||!s)return Promise.resolve();const l=!o&&function(e){const t=S.get(e);return S.delete(e),t}(C(t.fullPath,0))||(c||!o)&&history.state&&history.state.scroll||null;return(0,r.Y3)().then((()=>s(t,n,l))).then((e=>e&&P(e))).catch((e=>K(e,t,n)))}const X=e=>f.go(e);let Q;const N=new Set,ee={currentRoute:y,listening:!0,addRoute:function(e,n){let r,o;return A(e)?(r=t.getRecordMatcher(e),o=n):o=e,t.addRoute(o,r)},removeRoute:function(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)},hasRoute:function(e){return!!t.getRecordMatcher(e)},getRoutes:function(){return t.getRoutes().map((e=>e.record))},resolve:x,options:e,push:q,replace:function(e){return q(s($(e),{replace:!0}))},go:X,back:()=>X(-1),forward:()=>X(1),beforeEach:p.add,beforeResolve:d.add,afterEach:v.add,onError:z.add,isReady:function(){return W&&y.value!==F?Promise.resolve():new Promise(((e,t)=>{V.add([e,t])}))},install(e){e.component("RouterLink",je),e.component("RouterView",_e),e.config.globalProperties.$router=this,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,o.SU)(y)}),a&&!Q&&y.value===F&&(Q=!0,q(f.location).catch((e=>{0})));const t={};for(const e in F)t[e]=(0,r.Fl)((()=>y.value[e]));e.provide(Oe,this),e.provide(Re,(0,o.qj)(t)),e.provide(Pe,y);const n=e.unmount;N.add(e),e.unmount=function(){N.delete(e),N.size<1&&(w=F,J&&J(),J=null,y.value=F,Q=!1,W=!1),n()}}};return ee}function Me(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}}}]);