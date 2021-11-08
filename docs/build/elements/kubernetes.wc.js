!function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function l(e){e.forEach(t)}function o(e){return"function"==typeof e}function r(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function s(e,t){e.appendChild(t)}function c(e,t,n){e.insertBefore(t,n||null)}function i(e){e.parentNode.removeChild(e)}function a(e){return document.createElement(e)}function u(e){return document.createTextNode(e)}function d(){return u(" ")}function p(){return u("")}function m(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function f(e){return function(t){return t.preventDefault(),e.call(this,t)}}function h(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function y(e){return""===e?null:+e}function b(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function g(e,t){e.value=null==t?"":t}function v(e,t,n,l){e.style.setProperty(t,n,l?"important":"")}function k(e){const t={};for(const n of e)t[n.name]=n.value;return t}let w;function x(e){w=e}const $=[],S=[],_=[],M=[],N=Promise.resolve();let R=!1;function C(e){_.push(e)}let L=!1;const z=new Set;function E(){if(!L){L=!0;do{for(let e=0;e<$.length;e+=1){const t=$[e];x(t),P(t.$$)}for(x(null),$.length=0;S.length;)S.pop()();for(let e=0;e<_.length;e+=1){const t=_[e];z.has(t)||(z.add(t),t())}_.length=0}while($.length);for(;M.length;)M.pop()();R=!1,L=!1,z.clear()}}function P(e){if(null!==e.fragment){e.update(),l(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(C)}}const D=new Set;function U(e,t){e&&e.i&&(D.delete(e),e.i(t))}function K(e,t){e.d(1),t.delete(e.key)}function O(e,t,n,l,o,r,s,c,i,a,u,d){let p=e.length,m=r.length,f=p;const h={};for(;f--;)h[e[f].key]=f;const y=[],b=new Map,g=new Map;for(f=m;f--;){const e=d(o,r,f),c=n(e);let i=s.get(c);i?l&&i.p(e,t):(i=a(c,e),i.c()),b.set(c,y[f]=i),c in h&&g.set(c,Math.abs(f-h[c]))}const v=new Set,k=new Set;function w(e){U(e,1),e.m(c,u),s.set(e.key,e),u=e.first,m--}for(;p&&m;){const t=y[m-1],n=e[p-1],l=t.key,o=n.key;t===n?(u=t.first,p--,m--):b.has(o)?!s.has(l)||v.has(l)?w(t):k.has(o)?p--:g.get(l)>g.get(o)?(k.add(l),w(t)):(v.add(o),p--):(i(n,s),p--)}for(;p--;){const t=e[p];b.has(t.key)||i(t,s)}for(;m;)w(y[m-1]);return y}function j(e,t){-1===e.$$.dirty[0]&&($.push(e),R||(R=!0,N.then(E)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function T(r,s,c,a,u,d,p,m=[-1]){const f=w;x(r);const h=r.$$={fragment:null,ctx:null,props:d,update:e,not_equal:u,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s.context||(f?f.$$.context:[])),callbacks:n(),dirty:m,skip_bound:!1,root:s.target||f.$$.root};p&&p(h.root);let y=!1;if(h.ctx=c?c(r,s.props||{},((e,t,...n)=>{const l=n.length?n[0]:t;return h.ctx&&u(h.ctx[e],h.ctx[e]=l)&&(!h.skip_bound&&h.bound[e]&&h.bound[e](l),y&&j(r,e)),t})):[],h.update(),y=!0,l(h.before_update),h.fragment=!!a&&a(h.ctx),s.target){if(s.hydrate){const e=function(e){return Array.from(e.childNodes)}(s.target);h.fragment&&h.fragment.l(e),e.forEach(i)}else h.fragment&&h.fragment.c();s.intro&&U(r.$$.fragment),function(e,n,r,s){const{fragment:c,on_mount:i,on_destroy:a,after_update:u}=e.$$;c&&c.m(n,r),s||C((()=>{const n=i.map(t).filter(o);a?a.push(...n):l(n),e.$$.on_mount=[]})),u.forEach(C)}(r,s.target,s.anchor,s.customElement),E()}x(f)}let Y;var I;"function"==typeof HTMLElement&&(Y=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:e}=this.$$;this.$$.on_disconnect=e.map(t).filter(o);for(const e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(e,t,n){this[e]=n}disconnectedCallback(){l(this.$$.on_disconnect)}$destroy(){!function(e,t){const n=e.$$;null!==n.fragment&&(l(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}});var F=new Uint8Array(16);function H(){if(!I&&!(I="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return I(F)}var B=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function A(e){return"string"==typeof e&&B.test(e)}for(var V,W,q=[],G=0;G<256;++G)q.push((G+256).toString(16).substr(1));function J(e,t,n){var l=(e=e||{}).random||(e.rng||H)();if(l[6]=15&l[6]|64,l[8]=63&l[8]|128,t){n=n||0;for(var o=0;o<16;++o)t[n+o]=l[o];return t}return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(q[e[t+0]]+q[e[t+1]]+q[e[t+2]]+q[e[t+3]]+"-"+q[e[t+4]]+q[e[t+5]]+"-"+q[e[t+6]]+q[e[t+7]]+"-"+q[e[t+8]]+q[e[t+9]]+"-"+q[e[t+10]]+q[e[t+11]]+q[e[t+12]]+q[e[t+13]]+q[e[t+14]]+q[e[t+15]]).toLowerCase();if(!A(n))throw TypeError("Stringified UUID is invalid");return n}(l)}class Q{constructor(e="",t="https://rmbproxy1.devnet.grid.tf",n=""){this.url=e,this.proxyURL=t,this.mnemonics=n}get valid(){const{proxyURL:e,mnemonics:t,url:n}=this;return""!==e&&""!==t&&""!==n}}function X(e){const t=+e;return"number"==typeof t&&!isNaN(t)&&t>=0&&t.toFixed(0)===t.toString()}class Z{constructor(e=J(),t=e.split("-")[0],n=0,l=0,o=0,r=!1,s=0,c=0,i=!0){this.id=e,this.name=t,this.node=n,this.cpu=l,this.diskSize=o,this.publicIp=r,this.memory=s,this.rootFsSize=c,this.plantery=i}get valid(){const{name:e,node:t,cpu:n,diskSize:l,memory:o,rootFsSize:r}=this;return""!==e&&X(t)&&X(n)&&X(l)&&X(o)&&X(r)}}class ee extends Z{}class te extends Z{}class ne{constructor(e="",t="10.20.0.0/16"){this.name=e,this.ipRange=t}get valid(){const{name:e,ipRange:t}=this;return""!==e&&""!==t}}class le{constructor(e=J(),t=new ee,n=[new te],l=new ne,o="",r="",s="",c="",i="",a=new Q){this.id=e,this.master=t,this.workers=n,this.network=l,this.name=o,this.secret=r,this.sshKey=s,this.metadata=c,this.description=i,this.configs=a}get valid(){const{secret:e,sshKey:t,master:n,workers:l,configs:o,network:r}=this;return""!==e&&""!==t&&o.valid&&n.valid&&r.valid&&l.reduce(((e,t)=>e&&t.valid),!0)}}
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */const{NetworkModel:oe}=null!==(W=null===(V=window.configs)||void 0===V?void 0:V.grid3_client)&&void 0!==W?W:{};var re,se,ce,ie;const{HTTPMessageBusClient:ae}=null!==(se=null===(re=window.configs)||void 0===re?void 0:re.client)&&void 0!==se?se:{},{GridClient:ue,K8SModel:de,KubernetesNodeModel:pe}=null!==(ie=null===(ce=window.configs)||void 0===ce?void 0:ce.grid3_client)&&void 0!==ie?ie:{};function me(e){const{configs:t,master:n,workers:l,network:o}=e,r=function(e,t){var n={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(l=Object.getOwnPropertySymbols(e);o<l.length;o++)t.indexOf(l[o])<0&&Object.prototype.propertyIsEnumerable.call(e,l[o])&&(n[l[o]]=e[l[o]])}return n}(e,["configs","master","workers","network"]),{secret:s,sshKey:c,description:i,metadata:a,name:u}=r,{proxyURL:d,mnemonics:p,url:m}=t,f=new ae(0,d),h=new ue(m,p,f),y=[fe(n)],b=l.map(fe),g=new de;return g.name=u,g.secret=s,g.network=function(e){const t=new oe;return t.name=e.name,t.ip_range=e.ipRange,t}(o),g.masters=y,g.workers=b,g.metadata=a,g.description=i,g.ssh_key=c,h.connect().then((()=>h.k8s.deploy(g)))}function fe(e){const t=new pe;return t.name=e.name,t.node_id=e.node,t.cpu=e.cpu,t.disk_size=e.diskSize,t.memory=e.memory,t.public_ip=e.publicIp,t.rootfs_size=e.rootFsSize,t.planetary=e.plantery,t}function he(e,t,n){const l=e.slice();return l[30]=t[n],l[31]=t,l[32]=n,l}function ye(e,t,n){const l=e.slice();return l[33]=t[n],l[34]=t,l[35]=n,l}function be(e,t,n){const l=e.slice();return l[30]=t[n],l[36]=t,l[37]=n,l}function ge(e,t,n){const l=e.slice();return l[30]=t[n],l[38]=t,l[39]=n,l}function ve(e,t,n){const l=e.slice();return l[30]=t[n],l[40]=t,l[41]=n,l}function ke(e,t,n){const l=e.slice();return l[30]=t[n],l[42]=t,l[43]=n,l}function we(e,t,n){const l=e.slice();return l[44]=t[n],l}function xe(e){let t,n,l,o,r,u,m,f=[],y=new Map,b=e[10];const g=e=>e[44].label;for(let t=0;t<b.length;t+=1){let n=we(e,b,t),l=g(n);y.set(l,f[t]=Me(l,n))}let v="Base"===e[1]&&Ne(e),k="Master"===e[1]&&Ee(e),w="Workers"===e[1]&&De(e),x="Configs"===e[1]&&Oe(e);return{c(){t=a("div"),n=a("ul");for(let e=0;e<f.length;e+=1)f[e].c();l=d(),v&&v.c(),o=d(),k&&k.c(),r=d(),w&&w.c(),u=d(),x&&x.c(),m=p(),h(t,"class","tabs is-centered")},m(e,i){c(e,t,i),s(t,n);for(let e=0;e<f.length;e+=1)f[e].m(n,null);c(e,l,i),v&&v.m(e,i),c(e,o,i),k&&k.m(e,i),c(e,r,i),w&&w.m(e,i),c(e,u,i),x&&x.m(e,i),c(e,m,i)},p(e,t){1026&t[0]&&(b=e[10],f=O(f,t,g,1,e,b,y,n,K,Me,null,we)),"Base"===e[1]?v?v.p(e,t):(v=Ne(e),v.c(),v.m(o.parentNode,o)):v&&(v.d(1),v=null),"Master"===e[1]?k?k.p(e,t):(k=Ee(e),k.c(),k.m(r.parentNode,r)):k&&(k.d(1),k=null),"Workers"===e[1]?w?w.p(e,t):(w=De(e),w.c(),w.m(u.parentNode,u)):w&&(w.d(1),w=null),"Configs"===e[1]?x?x.p(e,t):(x=Oe(e),x.c(),x.m(m.parentNode,m)):x&&(x.d(1),x=null)},d(e){e&&i(t);for(let e=0;e<f.length;e+=1)f[e].d();e&&i(l),v&&v.d(e),e&&i(o),k&&k.d(e),e&&i(r),w&&w.d(e),e&&i(u),x&&x.d(e),e&&i(m)}}}function $e(t){let n;return{c(){n=a("div"),n.textContent="> Failed to deploy K8S.",h(n,"class","notification is-danger")},m(e,t){c(e,n,t)},p:e,d(e){e&&i(n)}}}function Se(t){let n;return{c(){n=a("div"),n.textContent="> Successfully deployed K8S.",h(n,"class","notification is-success")},m(e,t){c(e,n,t)},p:e,d(e){e&&i(n)}}}function _e(e){let t;function n(e,t){return e[5]?Fe:Ie}let l=n(e),o=l(e);return{c(){t=a("div"),o.c(),h(t,"class","notification is-info")},m(e,n){c(e,t,n),o.m(t,null)},p(e,r){l===(l=n(e))&&o?o.p(e,r):(o.d(1),o=l(e),o&&(o.c(),o.m(t,null)))},d(e){e&&i(t),o.d()}}}function Me(e,t){let n,l,o,r,p,y,b,g,v=t[44].label+"";function k(){return t[12](t[44])}return{key:e,first:null,c(){n=a("li"),l=a("a"),o=a("span"),r=u(v),p=d(),h(l,"href","#!"),h(n,"class",y=t[1]===t[44].label?"is-active":""),this.first=n},m(e,t){c(e,n,t),s(n,l),s(l,o),s(o,r),s(n,p),b||(g=m(l,"click",f(k)),b=!0)},p(e,l){t=e,2&l[0]&&y!==(y=t[1]===t[44].label?"is-active":"")&&h(n,"class",y)},d(e){e&&i(n),b=!1,g()}}}function Ne(e){let t,n,l=[],o=new Map,r=[],s=new Map,a=e[6];const u=e=>e[30].symbol;for(let t=0;t<a.length;t+=1){let n=ke(e,a,t),r=u(n);o.set(r,l[t]=Le(r,n))}let m=e[7];const f=e=>e[30].symbol;for(let t=0;t<m.length;t+=1){let n=ve(e,m,t),l=f(n);s.set(l,r[t]=ze(l,n))}return{c(){for(let e=0;e<l.length;e+=1)l[e].c();t=d();for(let e=0;e<r.length;e+=1)r[e].c();n=p()},m(e,o){for(let t=0;t<l.length;t+=1)l[t].m(e,o);c(e,t,o);for(let t=0;t<r.length;t+=1)r[t].m(e,o);c(e,n,o)},p(e,c){65&c[0]&&(a=e[6],l=O(l,c,u,1,e,a,o,t.parentNode,K,Le,t,ke)),129&c[0]&&(m=e[7],r=O(r,c,f,1,e,m,s,n.parentNode,K,ze,n,ve))},d(e){for(let t=0;t<l.length;t+=1)l[t].d(e);e&&i(t);for(let t=0;t<r.length;t+=1)r[t].d(e);e&&i(n)}}}function Re(e){let t,n,l;function o(){e[14].call(t,e[30])}return{c(){t=a("input"),h(t,"class","input"),h(t,"type","text"),h(t,"placeholder",e[30].placeholder)},m(r,s){c(r,t,s),g(t,e[0][e[30].symbol]),n||(l=m(t,"input",o),n=!0)},p(n,l){e=n,65&l[0]&&t.value!==e[0][e[30].symbol]&&g(t,e[0][e[30].symbol])},d(e){e&&i(t),n=!1,l()}}}function Ce(e){let t,n,l;function o(){e[13].call(t,e[30])}return{c(){t=a("textarea"),h(t,"class","textarea"),h(t,"placeholder",e[30].placeholder)},m(r,s){c(r,t,s),g(t,e[0][e[30].symbol]),n||(l=m(t,"input",o),n=!0)},p(n,l){e=n,65&l[0]&&g(t,e[0][e[30].symbol])},d(e){e&&i(t),n=!1,l()}}}function Le(e,t){let n,l,o,r,p,m,f=t[30].label+"";let y=function(e,t){return e[30].textarea?Ce:Re}(t),b=y(t);return{key:e,first:null,c(){n=a("div"),l=a("p"),o=u(f),r=d(),p=a("div"),b.c(),m=d(),h(l,"class","label"),h(p,"class","control"),h(n,"class","field"),this.first=n},m(e,t){c(e,n,t),s(n,l),s(l,o),s(n,r),s(n,p),b.m(p,null),s(n,m)},p(e,n){t=e,b.p(t,n)},d(e){e&&i(n),b.d()}}}function ze(e,t){let n,l,o,r,p,f,y,b,v,k,w=t[30].label+"";function x(){t[15].call(f,t[30])}return{key:e,first:null,c(){n=a("div"),l=a("p"),o=u(w),r=d(),p=a("div"),f=a("input"),b=d(),h(l,"class","label"),h(f,"class","input"),h(f,"type","text"),h(f,"placeholder",y=t[30].placeholder),h(p,"class","control"),h(n,"class","field"),this.first=n},m(e,i){c(e,n,i),s(n,l),s(l,o),s(n,r),s(n,p),s(p,f),g(f,t[0].network[t[30].symbol]),s(n,b),v||(k=m(f,"input",x),v=!0)},p(e,n){t=e,129&n[0]&&f.value!==t[0].network[t[30].symbol]&&g(f,t[0].network[t[30].symbol])},d(e){e&&i(n),v=!1,k()}}}function Ee(e){let t,n=[],l=new Map,o=e[8];const r=e=>e[30].symbol;for(let t=0;t<o.length;t+=1){let s=ge(e,o,t),c=r(s);l.set(c,n[t]=Pe(c,s))}return{c(){for(let e=0;e<n.length;e+=1)n[e].c();t=p()},m(e,l){for(let t=0;t<n.length;t+=1)n[t].m(e,l);c(e,t,l)},p(e,s){257&s[0]&&(o=e[8],n=O(n,s,r,1,e,o,l,t.parentNode,K,Pe,t,ge))},d(e){for(let t=0;t<n.length;t+=1)n[t].d(e);e&&i(t)}}}function Pe(e,t){let n,l,o,r,p,f,b,v,k=t[30].label+"",w="number"===t[30].type&&function(e){let t,n,l,o;function r(){e[16].call(t,e[30])}return{c(){t=a("input"),h(t,"class","input"),h(t,"type","number"),h(t,"placeholder",n=e[30].placeholder)},m(n,s){c(n,t,s),g(t,e[0].master[e[30].symbol]),l||(o=m(t,"input",r),l=!0)},p(n,l){e=n,257&l[0]&&y(t.value)!==e[0].master[e[30].symbol]&&g(t,e[0].master[e[30].symbol])},d(e){e&&i(t),l=!1,o()}}}(t),x="checkbox"===t[30].type&&function(e){let t,n,l,o,r,p,f,y=e[30].label+"";function b(){return e[17](e[30])}return{c(){t=a("label"),n=a("input"),o=d(),r=u(y),h(n,"type","checkbox"),n.checked=l=e[0].master[e[30].symbol],h(t,"class","checkbox")},m(e,l){c(e,t,l),s(t,n),s(t,o),s(t,r),p||(f=m(n,"change",b),p=!0)},p(t,o){e=t,1&o[0]&&l!==(l=e[0].master[e[30].symbol])&&(n.checked=l)},d(e){e&&i(t),p=!1,f()}}}(t),$=!t[30].type&&function(e){let t,n,l,o;function r(){e[18].call(t,e[30])}return{c(){t=a("input"),h(t,"class","input"),h(t,"type","text"),h(t,"placeholder",n=e[30].placeholder)},m(n,s){c(n,t,s),g(t,e[0].master[e[30].symbol]),l||(o=m(t,"input",r),l=!0)},p(n,l){e=n,257&l[0]&&t.value!==e[0].master[e[30].symbol]&&g(t,e[0].master[e[30].symbol])},d(e){e&&i(t),l=!1,o()}}}(t);return{key:e,first:null,c(){n=a("div"),l=a("p"),o=u(k),r=d(),p=a("div"),w&&w.c(),f=d(),x&&x.c(),b=d(),$&&$.c(),v=d(),h(l,"class","label"),h(p,"class","control"),h(n,"class","field"),this.first=n},m(e,t){c(e,n,t),s(n,l),s(l,o),s(n,r),s(n,p),w&&w.m(p,null),s(p,f),x&&x.m(p,null),s(p,b),$&&$.m(p,null),s(n,v)},p(e,n){"number"===(t=e)[30].type&&w.p(t,n),"checkbox"===t[30].type&&x.p(t,n),t[30].type||$.p(t,n)},d(e){e&&i(n),w&&w.d(),x&&x.d(),$&&$.d()}}}function De(e){let t,n,l,o,r,u,p=[],f=new Map,y=e[0].workers;const b=e=>e[33].id;for(let t=0;t<y.length;t+=1){let n=ye(e,y,t),l=b(n);f.set(l,p[t]=Ke(l,n))}return{c(){t=a("div"),n=a("button"),n.innerHTML="<span>+ ADD Worker</span>",l=d(),o=a("div");for(let e=0;e<p.length;e+=1)p[e].c();h(n,"type","button"),h(n,"class","button is-primary is-light"),h(t,"class","actions"),v(t,"margin-bottom","20px"),h(o,"class","worker-container")},m(i,a){c(i,t,a),s(t,n),c(i,l,a),c(i,o,a);for(let e=0;e<p.length;e+=1)p[e].m(o,null);r||(u=m(n,"click",e[19]),r=!0)},p(e,t){257&t[0]&&(y=e[0].workers,p=O(p,t,b,1,e,y,f,o,K,Ke,null,ye))},d(e){e&&i(t),e&&i(l),e&&i(o);for(let e=0;e<p.length;e+=1)p[e].d();r=!1,u()}}}function Ue(e,t){let n,l,o,r,p,f,b,v=t[30].label+"",k="number"===t[30].type&&function(e){let t,n,l,o;function r(){e[21].call(t,e[30],e[34],e[35])}return{c(){t=a("input"),h(t,"class","input"),h(t,"type","number"),h(t,"placeholder",n=e[30].placeholder)},m(n,s){c(n,t,s),g(t,e[33][e[30].symbol]),l||(o=m(t,"input",r),l=!0)},p(n,l){e=n,257&l[0]&&y(t.value)!==e[33][e[30].symbol]&&g(t,e[33][e[30].symbol])},d(e){e&&i(t),l=!1,o()}}}(t),w="checkbox"===t[30].type&&function(e){let t,n,l,o,r,p,f,y=e[30].label+"";function b(){return e[22](e[33],e[30],e[34],e[35])}return{c(){t=a("label"),n=a("input"),o=d(),r=u(y),h(n,"type","checkbox"),n.checked=l=e[33][e[30].symbol],h(t,"class","checkbox")},m(e,l){c(e,t,l),s(t,n),s(t,o),s(t,r),p||(f=m(n,"change",b),p=!0)},p(t,o){e=t,1&o[0]&&l!==(l=e[33][e[30].symbol])&&(n.checked=l)},d(e){e&&i(t),p=!1,f()}}}(t),x=!t[30].type&&function(e){let t,n,l,o;function r(){e[23].call(t,e[30],e[34],e[35])}return{c(){t=a("input"),h(t,"class","input"),h(t,"type","text"),h(t,"placeholder",n=e[30].placeholder)},m(n,s){c(n,t,s),g(t,e[33][e[30].symbol]),l||(o=m(t,"input",r),l=!0)},p(n,l){e=n,257&l[0]&&t.value!==e[33][e[30].symbol]&&g(t,e[33][e[30].symbol])},d(e){e&&i(t),l=!1,o()}}}(t);return{key:e,first:null,c(){n=a("div"),l=a("p"),o=u(v),r=d(),p=a("div"),k&&k.c(),f=d(),w&&w.c(),b=d(),x&&x.c(),h(l,"class","label"),h(p,"class","control"),h(n,"class","field"),this.first=n},m(e,t){c(e,n,t),s(n,l),s(l,o),s(n,r),s(n,p),k&&k.m(p,null),s(p,f),w&&w.m(p,null),s(p,b),x&&x.m(p,null)},p(e,n){"number"===(t=e)[30].type&&k.p(t,n),"checkbox"===t[30].type&&w.p(t,n),t[30].type||x.p(t,n)},d(e){e&&i(n),k&&k.d(),w&&w.d(),x&&x.d()}}}function Ke(e,t){let n,l,o,r,p,f,y,g,v,k,w=t[33].name+"",x=[],$=new Map;function S(){return t[20](t[35])}let _=t[8];const M=e=>e[30].symbol;for(let e=0;e<_.length;e+=1){let n=be(t,_,e),l=M(n);$.set(l,x[e]=Ue(l,n))}return{key:e,first:null,c(){n=a("div"),l=a("div"),o=a("p"),r=u(w),p=d(),f=a("button"),f.innerHTML="<span>Delete</span>",y=d();for(let e=0;e<x.length;e+=1)x[e].c();g=d(),h(o,"class","is-size-5 has-text-weight-bold"),h(f,"type","button"),h(f,"class","button is-danger is-outlined"),h(l,"class","worker-header"),h(n,"class","box"),this.first=n},m(e,t){c(e,n,t),s(n,l),s(l,o),s(o,r),s(l,p),s(l,f),s(n,y);for(let e=0;e<x.length;e+=1)x[e].m(n,null);s(n,g),v||(k=m(f,"click",S),v=!0)},p(e,l){t=e,1&l[0]&&w!==(w=t[33].name+"")&&b(r,w),257&l[0]&&(_=t[8],x=O(x,l,M,1,t,_,$,n,K,Ue,g,be))},d(e){e&&i(n);for(let e=0;e<x.length;e+=1)x[e].d();v=!1,k()}}}function Oe(e){let t,n=[],l=new Map,o=e[9];const r=e=>e[30].symbol;for(let t=0;t<o.length;t+=1){let s=he(e,o,t),c=r(s);l.set(c,n[t]=Ye(c,s))}return{c(){for(let e=0;e<n.length;e+=1)n[e].c();t=p()},m(e,l){for(let t=0;t<n.length;t+=1)n[t].m(e,l);c(e,t,l)},p(e,s){513&s[0]&&(o=e[9],n=O(n,s,r,1,e,o,l,t.parentNode,K,Ye,t,he))},d(e){for(let t=0;t<n.length;t+=1)n[t].d(e);e&&i(t)}}}function je(e){let t,n,l;function o(){e[25].call(t,e[30])}return{c(){t=a("input"),h(t,"class","input"),h(t,"type","text"),h(t,"placeholder",e[30].placeholder)},m(r,s){c(r,t,s),g(t,e[0].configs[e[30].symbol]),n||(l=m(t,"input",o),n=!0)},p(n,l){e=n,513&l[0]&&t.value!==e[0].configs[e[30].symbol]&&g(t,e[0].configs[e[30].symbol])},d(e){e&&i(t),n=!1,l()}}}function Te(e){let t,n,l;function o(){e[24].call(t,e[30])}return{c(){t=a("input"),h(t,"class","input"),h(t,"type","number"),h(t,"placeholder",e[30].placeholder)},m(r,s){c(r,t,s),g(t,e[0].configs[e[30].symbol]),n||(l=m(t,"input",o),n=!0)},p(n,l){e=n,513&l[0]&&y(t.value)!==e[0].configs[e[30].symbol]&&g(t,e[0].configs[e[30].symbol])},d(e){e&&i(t),n=!1,l()}}}function Ye(e,t){let n,l,o,r,p,m,f=t[30].label+"";let y=function(e,t){return"number"===e[30].type?Te:je}(t),b=y(t);return{key:e,first:null,c(){n=a("div"),l=a("p"),o=u(f),r=d(),p=a("div"),b.c(),m=d(),h(l,"class","label"),h(p,"class","control"),h(n,"class","field"),this.first=n},m(e,t){c(e,n,t),s(n,l),s(l,o),s(n,r),s(n,p),b.m(p,null),s(n,m)},p(e,n){t=e,b.p(t,n)},d(e){e&&i(n),b.d()}}}function Ie(t){let n;return{c(){n=u("> Loading...")},m(e,t){c(e,n,t)},p:e,d(e){e&&i(n)}}}function Fe(e){let t,n,l;return{c(){t=u("> "),n=u(e[5]),l=u(".")},m(e,o){c(e,t,o),c(e,n,o),c(e,l,o)},p(e,t){32&t[0]&&b(n,e[5])},d(e){e&&i(t),e&&i(n),e&&i(l)}}}function He(e){let t;return{c(){t=u("Deploy")},m(e,n){c(e,t,n)},d(e){e&&i(t)}}}function Be(e){let t;return{c(){t=u("Back")},m(e,n){c(e,t,n)},d(e){e&&i(t)}}}function Ae(t){let n,o,r,u,p,y,b,g,k,w,x,$,S;function _(e,t){return e[2]?_e:e[3]?Se:e[4]?$e:xe}let M=_(t),N=M(t);function R(e,t){return e[3]||e[4]?Be:He}let C=R(t),L=C(t);return{c(){n=a("div"),o=a("form"),r=a("h4"),r.textContent="Deploy a Kubernetes",u=d(),p=a("hr"),y=d(),N.c(),b=d(),g=a("div"),k=a("button"),L.c(),this.c=e,h(r,"class","is-size-4"),h(k,"class",w="button is-primary "+(t[2]?"is-loading":"")),h(k,"type","submit"),k.disabled=x=(t[2]||!t[0].valid)&&!(t[3]||t[4]),h(g,"class","actions"),h(o,"class","box"),v(n,"padding","15px")},m(e,l){c(e,n,l),s(n,o),s(o,r),s(o,u),s(o,p),s(o,y),N.m(o,null),s(o,b),s(o,g),s(g,k),L.m(k,null),$||(S=[m(k,"click",t[26]),m(o,"submit",f(t[11]))],$=!0)},p(e,t){M===(M=_(e))&&N?N.p(e,t):(N.d(1),N=M(e),N&&(N.c(),N.m(o,b))),C!==(C=R(e))&&(L.d(1),L=C(e),L&&(L.c(),L.m(k,null))),4&t[0]&&w!==(w="button is-primary "+(e[2]?"is-loading":""))&&h(k,"class",w),29&t[0]&&x!==(x=(e[2]||!e[0].valid)&&!(e[3]||e[4]))&&(k.disabled=x)},i:e,o:e,d(e){e&&i(n),N.d(),L.d(),$=!1,l(S)}}}function Ve(e,t,n){var l,o;const{events:r}=null!==(o=null===(l=window.configs)||void 0===l?void 0:l.grid3_client)&&void 0!==o?o:{},s=new le,c=[{label:"Name",symbol:"name",placeholder:"Your K8S Name."},{label:"Secret",symbol:"secret",placeholder:"Your Secret."},{label:"SSH Key",symbol:"sshKey",placeholder:"Your SSH Key."},{label:"Metadata",symbol:"metadata",placeholder:"Your Metadata."},{label:"Description",symbol:"description",placeholder:"Your Description.",textarea:!0}],i=[{label:"Network Name",symbol:"name",placeholder:"Your Network Name."},{label:"Network IP Range",symbol:"ipRange",placeholder:"Your Network IP Range."}],a=[{label:"Name",symbol:"name",placeholder:"Enter name."},{label:"Node",symbol:"node",placeholder:"Node ID.",type:"number"},{label:"CPU",symbol:"cpu",placeholder:"CPU Size.",type:"number"},{label:"Disk Size",symbol:"diskSize",placeholder:"Disk Size.",type:"number"},{label:"Public IP",symbol:"publicIp",placeholder:"",type:"checkbox"},{label:"Memory",symbol:"memory",placeholder:"Memory Size.",type:"number"},{label:"Root FS Size",symbol:"rootFsSize",placeholder:"Root File System Size.",type:"number"},{label:"Plantery",symbol:"plantery",placeholder:"",type:"checkbox"}],u=[{label:"Proxy URL",symbol:"proxyURL",placeholder:"Your Proxy URL."},{label:"URL",symbol:"url",placeholder:"Your substrate URL."},{label:"Mnemonics",symbol:"mnemonics",placeholder:"Your Mnemonics."}];let d,p="Base",m=!1,f=!1,h=!1;return[s,p,m,f,h,d,c,i,a,u,[{label:"Base"},{label:"Master"},{label:"Workers"},{label:"Configs"}],function(){function e(e){"string"==typeof e&&n(5,d=e)}n(2,m=!0),n(3,f=!1),n(4,h=!1),r.addListener("logs",e),me(s).then((()=>n(3,f=!0))).catch((()=>n(4,h=!0))).finally((()=>{n(2,m=!1),r.removeListener("logs",e)}))},e=>n(1,p=e.label),function(e){s[e.symbol]=this.value,n(0,s),n(6,c)},function(e){s[e.symbol]=this.value,n(0,s),n(6,c)},function(e){s.network[e.symbol]=this.value,n(0,s),n(7,i)},function(e){s.master[e.symbol]=y(this.value),n(0,s),n(8,a)},e=>n(0,s.master[e.symbol]=!s.master[e.symbol],s),function(e){s.master[e.symbol]=this.value,n(0,s),n(8,a)},()=>n(0,s.workers=[...s.workers,new te],s),e=>n(0,s.workers=s.workers.filter(((t,n)=>e!==n)),s),function(e,t,l){t[l][e.symbol]=y(this.value),n(0,s),n(8,a)},(e,t,l,o)=>n(0,l[o][t.symbol]=!e[t.symbol],s),function(e,t,l){t[l][e.symbol]=this.value,n(0,s),n(8,a)},function(e){s.configs[e.symbol]=y(this.value),n(0,s),n(9,u)},function(e){s.configs[e.symbol]=this.value,n(0,s),n(9,u)},e=>{(f||h)&&(e.preventDefault(),n(3,f=!1),n(4,h=!1),n(2,m=!1))}]}!function(e,t){try{customElements.define(`tf-${e}`,t)}catch(t){console.warn(`Element with name '${e}' already defined.`)}}("kubernetes",class extends Y{constructor(e){super(),this.shadowRoot.innerHTML='<style>@import url("https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css");.worker-container{overflow-x:hidden;overflow-y:auto;max-height:70vh;will-change:transform;padding-bottom:5rem;margin-bottom:20px}.actions,.worker-header{display:flex;justify-content:flex-end;align-items:center}.worker-header{justify-content:space-between}</style>',T(this,{target:this.shadowRoot,props:k(this.attributes),customElement:!0},Ve,Ae,r,{},null,[-1,-1]),e&&e.target&&c(e.target,this,e.anchor)}})}();
