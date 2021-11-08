!function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function l(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function r(t,e){t.appendChild(e)}function s(t,e,n){t.insertBefore(e,n||null)}function c(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function d(){return u(" ")}function f(){return u("")}function p(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function m(t){return function(e){return e.preventDefault(),t.call(this,e)}}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function y(t){return""===t?null:+t}function b(t,e){t.value=null==e?"":e}function g(t){const e={};for(const n of t)e[n.name]=n.value;return e}let v;function $(t){v=t}const w=[],_=[],k=[],x=[],C=Promise.resolve();let M=!1;function R(t){k.push(t)}let E=!1;const L=new Set;function S(){if(!E){E=!0;do{for(let t=0;t<w.length;t+=1){const e=w[t];$(e),N(e.$$)}for($(null),w.length=0;_.length;)_.pop()();for(let t=0;t<k.length;t+=1){const e=k[t];L.has(e)||(L.add(e),e())}k.length=0}while(w.length);for(;x.length;)x.pop()();M=!1,E=!1,L.clear()}}function N(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(R)}}const U=new Set;function D(t,e){t&&t.i&&(U.delete(t),t.i(e))}function z(t,e){t.d(1),e.delete(t.key)}function P(t,e,n,o,l,i,r,s,c,a,u,d){let f=t.length,p=i.length,m=f;const h={};for(;m--;)h[t[m].key]=m;const y=[],b=new Map,g=new Map;for(m=p;m--;){const t=d(l,i,m),s=n(t);let c=r.get(s);c?o&&c.p(t,e):(c=a(s,t),c.c()),b.set(s,y[m]=c),s in h&&g.set(s,Math.abs(m-h[s]))}const v=new Set,$=new Set;function w(t){D(t,1),t.m(s,u),r.set(t.key,t),u=t.first,p--}for(;f&&p;){const e=y[p-1],n=t[f-1],o=e.key,l=n.key;e===n?(u=e.first,f--,p--):b.has(l)?!r.has(o)||v.has(o)?w(e):$.has(l)?f--:g.get(o)>g.get(l)?($.add(o),w(e)):(v.add(l),f--):(c(n,r),f--)}for(;f--;){const e=t[f];b.has(e.key)||c(e,r)}for(;p;)w(y[p-1]);return y}function I(t,e){-1===t.$$.dirty[0]&&(w.push(t),M||(M=!0,C.then(S)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function O(i,r,s,a,u,d,f,p=[-1]){const m=v;$(i);const h=i.$$={fragment:null,ctx:null,props:d,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(m?m.$$.context:[])),callbacks:n(),dirty:p,skip_bound:!1,root:r.target||m.$$.root};f&&f(h.root);let y=!1;if(h.ctx=s?s(i,r.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return h.ctx&&u(h.ctx[t],h.ctx[t]=o)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](o),y&&I(i,t)),e})):[],h.update(),y=!0,o(h.before_update),h.fragment=!!a&&a(h.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);h.fragment&&h.fragment.l(t),t.forEach(c)}else h.fragment&&h.fragment.c();r.intro&&D(i.$$.fragment),function(t,n,i,r){const{fragment:s,on_mount:c,on_destroy:a,after_update:u}=t.$$;s&&s.m(n,i),r||R((()=>{const n=c.map(e).filter(l);a?a.push(...n):o(n),t.$$.on_mount=[]})),u.forEach(R)}(i,r.target,r.anchor,r.customElement),S()}$(m)}let T;var B;"function"==typeof HTMLElement&&(T=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(e).filter(l);for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}disconnectedCallback(){o(this.$$.on_disconnect)}$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});var Y=new Uint8Array(16);function A(){if(!B&&!(B="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return B(Y)}var K=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function j(t){return"string"==typeof t&&K.test(t)}for(var V,H,q=[],F=0;F<256;++F)q.push((F+256).toString(16).substr(1));function G(t,e,n){var o=(t=t||{}).random||(t.rng||A)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,e){n=n||0;for(var l=0;l<16;++l)e[n+l]=o[l];return e}return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(q[t[e+0]]+q[t[e+1]]+q[t[e+2]]+q[t[e+3]]+"-"+q[t[e+4]]+q[t[e+5]]+"-"+q[t[e+6]]+q[t[e+7]]+"-"+q[t[e+8]]+q[t[e+9]]+"-"+q[t[e+10]]+q[t[e+11]]+q[t[e+12]]+q[t[e+13]]+q[t[e+14]]+q[t[e+15]]).toLowerCase();if(!j(n))throw TypeError("Stringified UUID is invalid");return n}(o)}function W(t){const e=+t;return"number"==typeof e&&!isNaN(e)&&e>=0&&e.toFixed(0)===e.toString()}class J{constructor(t="",e="https://rmbproxy1.devnet.grid.tf",n=""){this.url=t,this.proxyURL=e,this.mnemonics=n}get valid(){const{proxyURL:t,mnemonics:e,url:n}=this;return""!==t&&""!==e&&""!==n}}class Q{constructor(t=G(),e=t.split("-")[0],n=1,o=1024,l=3,i="",r="",s=1,c=new J){this.id=t,this.name=e,this.cpu=n,this.memory=o,this.nodeId=l,this.domain=i,this.publicKey=r,this.diskSize=s,this.configs=c}get valid(){const{name:t,cpu:e,memory:n,nodeId:o,domain:l,publicKey:i}=this;return""!==t&&W(e)&&W(n)&&W(o)&&""!==l&&""!==i}}class X{constructor(t="",e="10.20.0.0/16"){this.name=t,this.ipRange=e}get valid(){const{name:t,ipRange:e}=this;return""!==t&&""!==e}}const{NetworkModel:Z}=null!==(H=null===(V=window.configs)||void 0===V?void 0:V.grid3_client)&&void 0!==H?H:{};var tt,et,nt,ot;const{HTTPMessageBusClient:lt}=null!==(et=null===(tt=window.configs)||void 0===tt?void 0:tt.client)&&void 0!==et?et:{},{MachinesModel:it,DiskModel:rt,GridClient:st,MachineModel:ct}=null!==(ot=null===(nt=window.configs)||void 0===nt?void 0:nt.grid3_client)&&void 0!==ot?ot:{};function at(t){const{name:e,memory:n,nodeId:o,publicKey:l,cpu:i,domain:r,diskSize:s}=t,{url:c,proxyURL:a,mnemonics:u}=t.configs,d=new lt(0,a),f=function(t){const e=new Z;return e.name=t.name,e.ip_range=t.ipRange,e}(new X(`caprover_network_${e}`,"10.200.0.0/16")),p=new rt;p.name="data0",p.size=s,p.mountpoint="/var/lib/docker";const m=new ct;m.cpu=i,m.memory=n,m.disks=[p],m.node_id=o,m.public_ip=!0,m.name=`caprover_leader_${e}`,m.planetary=!1,m.flist="https://hub.grid.tf/samehabouelsaad.3bot/tf-caprover-main-a4f186da8d.flist",m.qsfs_disks=[],m.rootfs_size=10,m.entrypoint="/sbin/zinit init",m.env={SWM_NODE_MODE:"leader",CAPROVER_ROOT_DOMAIN:r,PUBLIC_KEY:l};const h=new it;h.name=e,h.machines=[m],h.network=f,h.description="caprover leader machine/node";const y=new st(c,u,d);return y.connect().then((()=>y.machines.deploy(h)))}function ut(t,e,n){const o=t.slice();return o[19]=e[n],o[20]=e,o[21]=n,o}function dt(t,e,n){const o=t.slice();return o[19]=e[n],o[22]=e,o[23]=n,o}function ft(t,e,n){const o=t.slice();return o[24]=e[n],o}function pt(t){let e,n,o,l,i,u=[],p=new Map,m=t[6];const y=t=>t[24].label;for(let e=0;e<m.length;e+=1){let n=ft(t,m,e),o=y(n);p.set(o,u[e]=bt(o,n))}let b="Base"===t[4]&&gt(t),g="Configs"===t[4]&&_t(t);return{c(){e=a("div"),n=a("ul");for(let t=0;t<u.length;t+=1)u[t].c();o=d(),b&&b.c(),l=d(),g&&g.c(),i=f(),h(e,"class","tabs is-centered")},m(t,c){s(t,e,c),r(e,n);for(let t=0;t<u.length;t+=1)u[t].m(n,null);s(t,o,c),b&&b.m(t,c),s(t,l,c),g&&g.m(t,c),s(t,i,c)},p(t,e){80&e&&(m=t[6],u=P(u,e,y,1,t,m,p,n,z,bt,null,ft)),"Base"===t[4]?b?b.p(t,e):(b=gt(t),b.c(),b.m(l.parentNode,l)):b&&(b.d(1),b=null),"Configs"===t[4]?g?g.p(t,e):(g=_t(t),g.c(),g.m(i.parentNode,i)):g&&(g.d(1),g=null)},d(t){t&&c(e);for(let t=0;t<u.length;t+=1)u[t].d();t&&c(o),b&&b.d(t),t&&c(l),g&&g.d(t),t&&c(i)}}}function mt(e){let n;return{c(){n=a("div"),n.textContent="> Failed to deploy Caprover.",h(n,"class","notification is-danger")},m(t,e){s(t,n,e)},p:t,d(t){t&&c(n)}}}function ht(e){let n;return{c(){n=a("div"),n.textContent="> Successfully deployed Caprover.",h(n,"class","notification is-success")},m(t,e){s(t,n,e)},p:t,d(t){t&&c(n)}}}function yt(t){let e;function n(t,e){return t[5]?Rt:Mt}let o=n(t),l=o(t);return{c(){e=a("div"),l.c(),h(e,"class","notification is-info")},m(t,n){s(t,e,n),l.m(e,null)},p(t,i){o===(o=n(t))&&l?l.p(t,i):(l.d(1),l=o(t),l&&(l.c(),l.m(e,null)))},d(t){t&&c(e),l.d()}}}function bt(t,e){let n,o,l,i,f,y,b,g,v=e[24].label+"";function $(){return e[10](e[24])}return{key:t,first:null,c(){n=a("li"),o=a("a"),l=a("span"),i=u(v),f=d(),h(o,"href","#!"),h(n,"class",y=e[4]===e[24].label?"is-active":""),this.first=n},m(t,e){s(t,n,e),r(n,o),r(o,l),r(l,i),r(n,f),b||(g=p(o,"click",m($)),b=!0)},p(t,o){e=t,16&o&&y!==(y=e[4]===e[24].label?"is-active":"")&&h(n,"class",y)},d(t){t&&c(n),b=!1,g()}}}function gt(t){let e,n=[],o=new Map,l=t[7];const i=t=>t[19].symbol;for(let e=0;e<l.length;e+=1){let r=dt(t,l,e),s=i(r);o.set(s,n[e]=wt(s,r))}return{c(){for(let t=0;t<n.length;t+=1)n[t].c();e=f()},m(t,o){for(let e=0;e<n.length;e+=1)n[e].m(t,o);s(t,e,o)},p(t,r){129&r&&(l=t[7],n=P(n,r,i,1,t,l,o,e.parentNode,z,wt,e,dt))},d(t){for(let e=0;e<n.length;e+=1)n[e].d(t);t&&c(e)}}}function vt(t){let e,n,o;function l(){t[12].call(e,t[19])}return{c(){e=a("input"),h(e,"class","input"),h(e,"type","text"),h(e,"placeholder",t[19].placeholder)},m(i,r){s(i,e,r),b(e,t[0][t[19].symbol]),n||(o=p(e,"input",l),n=!0)},p(n,o){t=n,129&o&&e.value!==t[0][t[19].symbol]&&b(e,t[0][t[19].symbol])},d(t){t&&c(e),n=!1,o()}}}function $t(t){let e,n,o;function l(){t[11].call(e,t[19])}return{c(){e=a("input"),h(e,"class","input"),h(e,"type","number"),h(e,"placeholder",t[19].placeholder)},m(i,r){s(i,e,r),b(e,t[0][t[19].symbol]),n||(o=p(e,"input",l),n=!0)},p(n,o){t=n,129&o&&y(e.value)!==t[0][t[19].symbol]&&b(e,t[0][t[19].symbol])},d(t){t&&c(e),n=!1,o()}}}function wt(t,e){let n,o,l,i,f,p,m=e[19].label+"";let y=function(t,e){return"number"===t[19].type?$t:vt}(e),b=y(e);return{key:t,first:null,c(){n=a("div"),o=a("p"),l=u(m),i=d(),f=a("div"),b.c(),p=d(),h(o,"class","label"),h(f,"class","control"),h(n,"class","field"),this.first=n},m(t,e){s(t,n,e),r(n,o),r(o,l),r(n,i),r(n,f),b.m(f,null),r(n,p)},p(t,n){e=t,b.p(e,n)},d(t){t&&c(n),b.d()}}}function _t(t){let e,n=[],o=new Map,l=t[8];const i=t=>t[19].symbol;for(let e=0;e<l.length;e+=1){let r=ut(t,l,e),s=i(r);o.set(s,n[e]=Ct(s,r))}return{c(){for(let t=0;t<n.length;t+=1)n[t].c();e=f()},m(t,o){for(let e=0;e<n.length;e+=1)n[e].m(t,o);s(t,e,o)},p(t,r){257&r&&(l=t[8],n=P(n,r,i,1,t,l,o,e.parentNode,z,Ct,e,ut))},d(t){for(let e=0;e<n.length;e+=1)n[e].d(t);t&&c(e)}}}function kt(t){let e,n,o;function l(){t[14].call(e,t[19])}return{c(){e=a("input"),h(e,"class","input"),h(e,"type","text"),h(e,"placeholder",t[19].placeholder)},m(i,r){s(i,e,r),b(e,t[0].configs[t[19].symbol]),n||(o=p(e,"input",l),n=!0)},p(n,o){t=n,257&o&&e.value!==t[0].configs[t[19].symbol]&&b(e,t[0].configs[t[19].symbol])},d(t){t&&c(e),n=!1,o()}}}function xt(t){let e,n,o;function l(){t[13].call(e,t[19])}return{c(){e=a("input"),h(e,"class","input"),h(e,"type","number"),h(e,"placeholder",t[19].placeholder)},m(i,r){s(i,e,r),b(e,t[0].configs[t[19].symbol]),n||(o=p(e,"input",l),n=!0)},p(n,o){t=n,257&o&&y(e.value)!==t[0].configs[t[19].symbol]&&b(e,t[0].configs[t[19].symbol])},d(t){t&&c(e),n=!1,o()}}}function Ct(t,e){let n,o,l,i,f,p,m=e[19].label+"";let y=function(t,e){return"number"===t[19].type?xt:kt}(e),b=y(e);return{key:t,first:null,c(){n=a("div"),o=a("p"),l=u(m),i=d(),f=a("div"),b.c(),p=d(),h(o,"class","label"),h(f,"class","control"),h(n,"class","field"),this.first=n},m(t,e){s(t,n,e),r(n,o),r(o,l),r(n,i),r(n,f),b.m(f,null),r(n,p)},p(t,n){e=t,b.p(e,n)},d(t){t&&c(n),b.d()}}}function Mt(e){let n;return{c(){n=u("> Loading...")},m(t,e){s(t,n,e)},p:t,d(t){t&&c(n)}}}function Rt(t){let e,n,o;return{c(){e=u("> "),n=u(t[5]),o=u(".")},m(t,l){s(t,e,l),s(t,n,l),s(t,o,l)},p(t,e){32&e&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(n,t[5])},d(t){t&&c(e),t&&c(n),t&&c(o)}}}function Et(t){let e;return{c(){e=u("Deploy")},m(t,n){s(t,e,n)},d(t){t&&c(e)}}}function Lt(t){let e;return{c(){e=u("Back")},m(t,n){s(t,e,n)},d(t){t&&c(e)}}}function St(e){let n,l,i,u,f,y,b,g,v,$,w,_,k;function x(t,e){return t[1]?yt:t[2]?ht:t[3]?mt:pt}let C=x(e),M=C(e);function R(t,e){return t[2]||t[3]?Lt:Et}let E=R(e),L=E(e);return{c(){var o,r,s;n=a("div"),l=a("form"),i=a("h4"),i.textContent="Caprover Deployer",u=d(),f=a("hr"),y=d(),M.c(),b=d(),g=a("div"),v=a("button"),L.c(),this.c=t,h(i,"class","is-size-4 mb-4"),h(v,"class",$="button is-primary "+(e[1]?"is-loading":"")),h(v,"type","submit"),v.disabled=w=(e[1]||!e[0].valid)&&!(e[2]||e[3]),h(g,"class","actions"),h(l,"class","box"),o="padding",r="15px",n.style.setProperty(o,r,s?"important":"")},m(t,o){s(t,n,o),r(n,l),r(l,i),r(l,u),r(l,f),r(l,y),M.m(l,null),r(l,b),r(l,g),r(g,v),L.m(v,null),_||(k=[p(v,"click",e[15]),p(l,"submit",m(e[9]))],_=!0)},p(t,[e]){C===(C=x(t))&&M?M.p(t,e):(M.d(1),M=C(t),M&&(M.c(),M.m(l,b))),E!==(E=R(t))&&(L.d(1),L=E(t),L&&(L.c(),L.m(v,null))),2&e&&$!==($="button is-primary "+(t[1]?"is-loading":""))&&h(v,"class",$),15&e&&w!==(w=(t[1]||!t[0].valid)&&!(t[2]||t[3]))&&(v.disabled=w)},i:t,o:t,d(t){t&&c(n),M.d(),L.d(),_=!1,o(k)}}}function Nt(t,e,n){var o,l;const{events:i}=null!==(l=null===(o=window.configs)||void 0===o?void 0:o.grid3_client)&&void 0!==l?l:{},r=new Q;let s=!1,c=!1,a=!1;let u="Base";const d=[{label:"Name",symbol:"name",placeholder:"Your caprover name"},{label:"CPU",symbol:"cpu",placeholder:"CPU Size",type:"number"},{label:"Memory",symbol:"memory",placeholder:"Memory Size",type:"number"},{label:"Node ID",symbol:"nodeId",placeholder:"Node Id",type:"number"},{label:"Disk Size",symbol:"diskSize",placeholder:"Your Disk Size.",type:"number"},{label:"Domain",symbol:"domain",placeholder:"Your domain."},{label:"Public Key",symbol:"publicKey",placeholder:"Your Public Key."}],f=[{label:"Proxy URL",symbol:"proxyURL",placeholder:"Your Proxy URL."},{label:"URL",symbol:"url",placeholder:"Your substrate URL."},{label:"Mnemonics",symbol:"mnemonics",placeholder:"Your Mnemonics."}];let p;return[r,s,c,a,u,p,[{label:"Base"},{label:"Configs"}],d,f,function(){function t(t){"string"==typeof t&&n(5,p=t)}n(1,s=!0),n(2,c=!1),n(3,a=!1),i.addListener("logs",t),at(r).then((()=>n(2,c=!0))).catch((()=>n(3,a=!0))).finally((()=>{n(1,s=!1),i.removeListener("logs",t)}))},t=>n(4,u=t.label),function(t){r[t.symbol]=y(this.value),n(0,r),n(7,d)},function(t){r[t.symbol]=this.value,n(0,r),n(7,d)},function(t){r.configs[t.symbol]=y(this.value),n(0,r),n(8,f)},function(t){r.configs[t.symbol]=this.value,n(0,r),n(8,f)},t=>{(c||a)&&(t.preventDefault(),n(2,c=!1),n(3,a=!1),n(1,s=!1))}]}!function(t,e){try{customElements.define(`tf-${t}`,e)}catch(e){console.warn(`Element with name '${t}' already defined.`)}}("caprover",class extends T{constructor(t){super(),this.shadowRoot.innerHTML='<style>@import url("https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css");.actions{display:flex;justify-content:flex-end;align-items:center}</style>',O(this,{target:this.shadowRoot,props:g(this.attributes),customElement:!0},Nt,St,i,{},null),t&&t.target&&s(t.target,this,t.anchor)}})}();
