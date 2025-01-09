var qs={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fo=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Mu=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],u=n[e++],c=n[e++],l=((s&7)<<18|(o&63)<<12|(u&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=n[e++],u=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|u&63)}}return t.join("")},Uo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],u=s+1<n.length,c=u?n[s+1]:0,l=s+2<n.length,f=l?n[s+2]:0,_=o>>2,A=(o&3)<<4|c>>4;let R=(c&15)<<2|f>>6,S=f&63;l||(S=64,u||(R=64)),r.push(e[_],e[A],e[R],e[S])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Fo(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Mu(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],c=s<n.length?e[n.charAt(s)]:0;++s;const f=s<n.length?e[n.charAt(s)]:64;++s;const A=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||c==null||f==null||A==null)throw new xu;const R=o<<2|c>>4;if(r.push(R),f!==64){const S=c<<4&240|f>>2;if(r.push(S),A!==64){const N=f<<6&192|A;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class xu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Lu=function(n){const t=Fo(n);return Uo.encodeByteArray(t,!0)},Ln=function(n){return Lu(n).replace(/\./g,"")},Fu=function(n){try{return Uo.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bu=()=>Uu().__FIREBASE_DEFAULTS__,qu=()=>{if(typeof process>"u"||typeof qs>"u")return;const n=qs.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ju=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Fu(n[1]);return t&&JSON.parse(t)},oi=()=>{try{return Bu()||qu()||ju()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},$u=n=>{var t,e;return(e=(t=oi())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},zu=n=>{const t=$u(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Bo=()=>{var n;return(n=oi())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gu(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ln(JSON.stringify(e)),Ln(JSON.stringify(u)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hu(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Qu(){var n;const t=(n=oi())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Wu(){return!Qu()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Yu(){try{return typeof indexedDB=="object"}catch{return!1}}function Xu(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju="FirebaseError";class ve extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Ju,Object.setPrototypeOf(this,ve.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qo.prototype.create)}}class qo{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],u=o?Zu(o,r):"Error",c=`${this.serviceName}: ${u} (${s}).`;return new ve(s,c,r)}}function Zu(n,t){return n.replace(th,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const th=/\{\$([^}]+)}/g;function xr(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],u=t[s];if(js(o)&&js(u)){if(!xr(o,u))return!1}else if(o!==u)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function js(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(n){return n&&n._delegate?n._delegate:n}class Ye{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Ku;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(rh(t))try{this.getOrInitializeService({instanceIdentifier:Qt})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=Qt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Qt){return this.instances.has(t)}getOptions(t=Qt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,u]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&u.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&t(u,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:nh(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Qt){return this.component?this.component.multipleInstances?t:Qt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nh(n){return n===Qt?void 0:n}function rh(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new eh(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var B;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(B||(B={}));const sh={debug:B.DEBUG,verbose:B.VERBOSE,info:B.INFO,warn:B.WARN,error:B.ERROR,silent:B.SILENT},oh=B.INFO,ah={[B.DEBUG]:"log",[B.VERBOSE]:"log",[B.INFO]:"info",[B.WARN]:"warn",[B.ERROR]:"error"},uh=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=ah[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class jo{constructor(t){this.name=t,this._logLevel=oh,this._logHandler=uh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in B))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?sh[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,B.DEBUG,...t),this._logHandler(this,B.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,B.VERBOSE,...t),this._logHandler(this,B.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,B.INFO,...t),this._logHandler(this,B.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,B.WARN,...t),this._logHandler(this,B.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,B.ERROR,...t),this._logHandler(this,B.ERROR,...t)}}const hh=(n,t)=>t.some(e=>n instanceof e);let $s,zs;function ch(){return $s||($s=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lh(){return zs||(zs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $o=new WeakMap,Lr=new WeakMap,zo=new WeakMap,Cr=new WeakMap,ai=new WeakMap;function dh(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",u)},o=()=>{e(Ut(n.result)),s()},u=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",u)});return t.then(e=>{e instanceof IDBCursor&&$o.set(e,n)}).catch(()=>{}),ai.set(t,n),t}function fh(n){if(Lr.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",u),n.removeEventListener("abort",u)},o=()=>{e(),s()},u=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",u),n.addEventListener("abort",u)});Lr.set(n,t)}let Fr={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Lr.get(n);if(t==="objectStoreNames")return n.objectStoreNames||zo.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Ut(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function ph(n){Fr=n(Fr)}function mh(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Sr(this),t,...e);return zo.set(r,t.sort?t.sort():[t]),Ut(r)}:lh().includes(n)?function(...t){return n.apply(Sr(this),t),Ut($o.get(this))}:function(...t){return Ut(n.apply(Sr(this),t))}}function gh(n){return typeof n=="function"?mh(n):(n instanceof IDBTransaction&&fh(n),hh(n,ch())?new Proxy(n,Fr):n)}function Ut(n){if(n instanceof IDBRequest)return dh(n);if(Cr.has(n))return Cr.get(n);const t=gh(n);return t!==n&&(Cr.set(n,t),ai.set(t,n)),t}const Sr=n=>ai.get(n);function _h(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const u=indexedDB.open(n,t),c=Ut(u);return r&&u.addEventListener("upgradeneeded",l=>{r(Ut(u.result),l.oldVersion,l.newVersion,Ut(u.transaction),l)}),e&&u.addEventListener("blocked",l=>e(l.oldVersion,l.newVersion,l)),c.then(l=>{o&&l.addEventListener("close",()=>o()),s&&l.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),c}const yh=["get","getKey","getAll","getAllKeys","count"],Eh=["put","add","delete","clear"],Vr=new Map;function Ks(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Vr.get(t))return Vr.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=Eh.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||yh.includes(e)))return;const o=async function(u,...c){const l=this.transaction(u,s?"readwrite":"readonly");let f=l.store;return r&&(f=f.index(c.shift())),(await Promise.all([f[e](...c),s&&l.done]))[0]};return Vr.set(t,o),o}ph(n=>({...n,get:(t,e,r)=>Ks(t,e)||n.get(t,e,r),has:(t,e)=>!!Ks(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Th(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Th(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ur="@firebase/app",Gs="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt=new jo("@firebase/app"),Ih="@firebase/app-compat",wh="@firebase/analytics-compat",Ah="@firebase/analytics",Rh="@firebase/app-check-compat",Ph="@firebase/app-check",Ch="@firebase/auth",Sh="@firebase/auth-compat",Vh="@firebase/database",bh="@firebase/data-connect",Dh="@firebase/database-compat",Nh="@firebase/functions",kh="@firebase/functions-compat",Oh="@firebase/installations",Mh="@firebase/installations-compat",xh="@firebase/messaging",Lh="@firebase/messaging-compat",Fh="@firebase/performance",Uh="@firebase/performance-compat",Bh="@firebase/remote-config",qh="@firebase/remote-config-compat",jh="@firebase/storage",$h="@firebase/storage-compat",zh="@firebase/firestore",Kh="@firebase/vertexai-preview",Gh="@firebase/firestore-compat",Hh="firebase",Qh="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br="[DEFAULT]",Wh={[Ur]:"fire-core",[Ih]:"fire-core-compat",[Ah]:"fire-analytics",[wh]:"fire-analytics-compat",[Ph]:"fire-app-check",[Rh]:"fire-app-check-compat",[Ch]:"fire-auth",[Sh]:"fire-auth-compat",[Vh]:"fire-rtdb",[bh]:"fire-data-connect",[Dh]:"fire-rtdb-compat",[Nh]:"fire-fn",[kh]:"fire-fn-compat",[Oh]:"fire-iid",[Mh]:"fire-iid-compat",[xh]:"fire-fcm",[Lh]:"fire-fcm-compat",[Fh]:"fire-perf",[Uh]:"fire-perf-compat",[Bh]:"fire-rc",[qh]:"fire-rc-compat",[jh]:"fire-gcs",[$h]:"fire-gcs-compat",[zh]:"fire-fst",[Gh]:"fire-fst-compat",[Kh]:"fire-vertex","fire-js":"fire-js",[Hh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un=new Map,Yh=new Map,qr=new Map;function Hs(n,t){try{n.container.addComponent(t)}catch(e){bt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Bn(n){const t=n.name;if(qr.has(t))return bt.debug(`There were multiple attempts to register component ${t}.`),!1;qr.set(t,n);for(const e of Un.values())Hs(e,n);for(const e of Yh.values())Hs(e,n);return!0}function Xh(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Bt=new qo("app","Firebase",Jh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ye("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Bt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tc=Qh;function Ko(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Br,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw Bt.create("bad-app-name",{appName:String(s)});if(e||(e=Bo()),!e)throw Bt.create("no-options");const o=Un.get(s);if(o){if(xr(e,o.options)&&xr(r,o.config))return o;throw Bt.create("duplicate-app",{appName:s})}const u=new ih(s);for(const l of qr.values())u.addComponent(l);const c=new Zh(e,r,u);return Un.set(s,c),c}function ec(n=Br){const t=Un.get(n);if(!t&&n===Br&&Bo())return Ko();if(!t)throw Bt.create("no-app",{appName:n});return t}function he(n,t,e){var r;let s=(r=Wh[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),u=t.match(/\s|\//);if(o||u){const c=[`Unable to register library "${s}" with version "${t}":`];o&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&c.push("and"),u&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),bt.warn(c.join(" "));return}Bn(new Ye(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nc="firebase-heartbeat-database",rc=1,Xe="firebase-heartbeat-store";let br=null;function Go(){return br||(br=_h(nc,rc,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Xe)}catch(e){console.warn(e)}}}}).catch(n=>{throw Bt.create("idb-open",{originalErrorMessage:n.message})})),br}async function ic(n){try{const e=(await Go()).transaction(Xe),r=await e.objectStore(Xe).get(Ho(n));return await e.done,r}catch(t){if(t instanceof ve)bt.warn(t.message);else{const e=Bt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});bt.warn(e.message)}}}async function Qs(n,t){try{const r=(await Go()).transaction(Xe,"readwrite");await r.objectStore(Xe).put(t,Ho(n)),await r.done}catch(e){if(e instanceof ve)bt.warn(e.message);else{const r=Bt.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});bt.warn(r.message)}}}function Ho(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sc=1024,oc=30*24*60*60*1e3;class ac{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new hc(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Ws();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(u=>u.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(u=>{const c=new Date(u.date).valueOf();return Date.now()-c<=oc}),this._storage.overwrite(this._heartbeatsCache))}catch(r){bt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ws(),{heartbeatsToSend:r,unsentEntries:s}=uc(this._heartbeatsCache.heartbeats),o=Ln(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return bt.warn(e),""}}}function Ws(){return new Date().toISOString().substring(0,10)}function uc(n,t=sc){const e=[];let r=n.slice();for(const s of n){const o=e.find(u=>u.agent===s.agent);if(o){if(o.dates.push(s.date),Ys(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Ys(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class hc{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Yu()?Xu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await ic(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Qs(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Qs(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Ys(n){return Ln(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cc(n){Bn(new Ye("platform-logger",t=>new vh(t),"PRIVATE")),Bn(new Ye("heartbeat",t=>new ac(t),"PRIVATE")),he(Ur,Gs,n),he(Ur,Gs,"esm2017"),he("fire-js","")}cc("");var Xs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Yt,Qo;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(v,p){function g(){}g.prototype=p.prototype,v.D=p.prototype,v.prototype=new g,v.prototype.constructor=v,v.C=function(y,E,I){for(var m=Array(arguments.length-2),Ct=2;Ct<arguments.length;Ct++)m[Ct-2]=arguments[Ct];return p.prototype[E].apply(y,m)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,p,g){g||(g=0);var y=Array(16);if(typeof p=="string")for(var E=0;16>E;++E)y[E]=p.charCodeAt(g++)|p.charCodeAt(g++)<<8|p.charCodeAt(g++)<<16|p.charCodeAt(g++)<<24;else for(E=0;16>E;++E)y[E]=p[g++]|p[g++]<<8|p[g++]<<16|p[g++]<<24;p=v.g[0],g=v.g[1],E=v.g[2];var I=v.g[3],m=p+(I^g&(E^I))+y[0]+3614090360&4294967295;p=g+(m<<7&4294967295|m>>>25),m=I+(E^p&(g^E))+y[1]+3905402710&4294967295,I=p+(m<<12&4294967295|m>>>20),m=E+(g^I&(p^g))+y[2]+606105819&4294967295,E=I+(m<<17&4294967295|m>>>15),m=g+(p^E&(I^p))+y[3]+3250441966&4294967295,g=E+(m<<22&4294967295|m>>>10),m=p+(I^g&(E^I))+y[4]+4118548399&4294967295,p=g+(m<<7&4294967295|m>>>25),m=I+(E^p&(g^E))+y[5]+1200080426&4294967295,I=p+(m<<12&4294967295|m>>>20),m=E+(g^I&(p^g))+y[6]+2821735955&4294967295,E=I+(m<<17&4294967295|m>>>15),m=g+(p^E&(I^p))+y[7]+4249261313&4294967295,g=E+(m<<22&4294967295|m>>>10),m=p+(I^g&(E^I))+y[8]+1770035416&4294967295,p=g+(m<<7&4294967295|m>>>25),m=I+(E^p&(g^E))+y[9]+2336552879&4294967295,I=p+(m<<12&4294967295|m>>>20),m=E+(g^I&(p^g))+y[10]+4294925233&4294967295,E=I+(m<<17&4294967295|m>>>15),m=g+(p^E&(I^p))+y[11]+2304563134&4294967295,g=E+(m<<22&4294967295|m>>>10),m=p+(I^g&(E^I))+y[12]+1804603682&4294967295,p=g+(m<<7&4294967295|m>>>25),m=I+(E^p&(g^E))+y[13]+4254626195&4294967295,I=p+(m<<12&4294967295|m>>>20),m=E+(g^I&(p^g))+y[14]+2792965006&4294967295,E=I+(m<<17&4294967295|m>>>15),m=g+(p^E&(I^p))+y[15]+1236535329&4294967295,g=E+(m<<22&4294967295|m>>>10),m=p+(E^I&(g^E))+y[1]+4129170786&4294967295,p=g+(m<<5&4294967295|m>>>27),m=I+(g^E&(p^g))+y[6]+3225465664&4294967295,I=p+(m<<9&4294967295|m>>>23),m=E+(p^g&(I^p))+y[11]+643717713&4294967295,E=I+(m<<14&4294967295|m>>>18),m=g+(I^p&(E^I))+y[0]+3921069994&4294967295,g=E+(m<<20&4294967295|m>>>12),m=p+(E^I&(g^E))+y[5]+3593408605&4294967295,p=g+(m<<5&4294967295|m>>>27),m=I+(g^E&(p^g))+y[10]+38016083&4294967295,I=p+(m<<9&4294967295|m>>>23),m=E+(p^g&(I^p))+y[15]+3634488961&4294967295,E=I+(m<<14&4294967295|m>>>18),m=g+(I^p&(E^I))+y[4]+3889429448&4294967295,g=E+(m<<20&4294967295|m>>>12),m=p+(E^I&(g^E))+y[9]+568446438&4294967295,p=g+(m<<5&4294967295|m>>>27),m=I+(g^E&(p^g))+y[14]+3275163606&4294967295,I=p+(m<<9&4294967295|m>>>23),m=E+(p^g&(I^p))+y[3]+4107603335&4294967295,E=I+(m<<14&4294967295|m>>>18),m=g+(I^p&(E^I))+y[8]+1163531501&4294967295,g=E+(m<<20&4294967295|m>>>12),m=p+(E^I&(g^E))+y[13]+2850285829&4294967295,p=g+(m<<5&4294967295|m>>>27),m=I+(g^E&(p^g))+y[2]+4243563512&4294967295,I=p+(m<<9&4294967295|m>>>23),m=E+(p^g&(I^p))+y[7]+1735328473&4294967295,E=I+(m<<14&4294967295|m>>>18),m=g+(I^p&(E^I))+y[12]+2368359562&4294967295,g=E+(m<<20&4294967295|m>>>12),m=p+(g^E^I)+y[5]+4294588738&4294967295,p=g+(m<<4&4294967295|m>>>28),m=I+(p^g^E)+y[8]+2272392833&4294967295,I=p+(m<<11&4294967295|m>>>21),m=E+(I^p^g)+y[11]+1839030562&4294967295,E=I+(m<<16&4294967295|m>>>16),m=g+(E^I^p)+y[14]+4259657740&4294967295,g=E+(m<<23&4294967295|m>>>9),m=p+(g^E^I)+y[1]+2763975236&4294967295,p=g+(m<<4&4294967295|m>>>28),m=I+(p^g^E)+y[4]+1272893353&4294967295,I=p+(m<<11&4294967295|m>>>21),m=E+(I^p^g)+y[7]+4139469664&4294967295,E=I+(m<<16&4294967295|m>>>16),m=g+(E^I^p)+y[10]+3200236656&4294967295,g=E+(m<<23&4294967295|m>>>9),m=p+(g^E^I)+y[13]+681279174&4294967295,p=g+(m<<4&4294967295|m>>>28),m=I+(p^g^E)+y[0]+3936430074&4294967295,I=p+(m<<11&4294967295|m>>>21),m=E+(I^p^g)+y[3]+3572445317&4294967295,E=I+(m<<16&4294967295|m>>>16),m=g+(E^I^p)+y[6]+76029189&4294967295,g=E+(m<<23&4294967295|m>>>9),m=p+(g^E^I)+y[9]+3654602809&4294967295,p=g+(m<<4&4294967295|m>>>28),m=I+(p^g^E)+y[12]+3873151461&4294967295,I=p+(m<<11&4294967295|m>>>21),m=E+(I^p^g)+y[15]+530742520&4294967295,E=I+(m<<16&4294967295|m>>>16),m=g+(E^I^p)+y[2]+3299628645&4294967295,g=E+(m<<23&4294967295|m>>>9),m=p+(E^(g|~I))+y[0]+4096336452&4294967295,p=g+(m<<6&4294967295|m>>>26),m=I+(g^(p|~E))+y[7]+1126891415&4294967295,I=p+(m<<10&4294967295|m>>>22),m=E+(p^(I|~g))+y[14]+2878612391&4294967295,E=I+(m<<15&4294967295|m>>>17),m=g+(I^(E|~p))+y[5]+4237533241&4294967295,g=E+(m<<21&4294967295|m>>>11),m=p+(E^(g|~I))+y[12]+1700485571&4294967295,p=g+(m<<6&4294967295|m>>>26),m=I+(g^(p|~E))+y[3]+2399980690&4294967295,I=p+(m<<10&4294967295|m>>>22),m=E+(p^(I|~g))+y[10]+4293915773&4294967295,E=I+(m<<15&4294967295|m>>>17),m=g+(I^(E|~p))+y[1]+2240044497&4294967295,g=E+(m<<21&4294967295|m>>>11),m=p+(E^(g|~I))+y[8]+1873313359&4294967295,p=g+(m<<6&4294967295|m>>>26),m=I+(g^(p|~E))+y[15]+4264355552&4294967295,I=p+(m<<10&4294967295|m>>>22),m=E+(p^(I|~g))+y[6]+2734768916&4294967295,E=I+(m<<15&4294967295|m>>>17),m=g+(I^(E|~p))+y[13]+1309151649&4294967295,g=E+(m<<21&4294967295|m>>>11),m=p+(E^(g|~I))+y[4]+4149444226&4294967295,p=g+(m<<6&4294967295|m>>>26),m=I+(g^(p|~E))+y[11]+3174756917&4294967295,I=p+(m<<10&4294967295|m>>>22),m=E+(p^(I|~g))+y[2]+718787259&4294967295,E=I+(m<<15&4294967295|m>>>17),m=g+(I^(E|~p))+y[9]+3951481745&4294967295,v.g[0]=v.g[0]+p&4294967295,v.g[1]=v.g[1]+(E+(m<<21&4294967295|m>>>11))&4294967295,v.g[2]=v.g[2]+E&4294967295,v.g[3]=v.g[3]+I&4294967295}r.prototype.u=function(v,p){p===void 0&&(p=v.length);for(var g=p-this.blockSize,y=this.B,E=this.h,I=0;I<p;){if(E==0)for(;I<=g;)s(this,v,I),I+=this.blockSize;if(typeof v=="string"){for(;I<p;)if(y[E++]=v.charCodeAt(I++),E==this.blockSize){s(this,y),E=0;break}}else for(;I<p;)if(y[E++]=v[I++],E==this.blockSize){s(this,y),E=0;break}}this.h=E,this.o+=p},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var p=1;p<v.length-8;++p)v[p]=0;var g=8*this.o;for(p=v.length-8;p<v.length;++p)v[p]=g&255,g/=256;for(this.u(v),v=Array(16),p=g=0;4>p;++p)for(var y=0;32>y;y+=8)v[g++]=this.g[p]>>>y&255;return v};function o(v,p){var g=c;return Object.prototype.hasOwnProperty.call(g,v)?g[v]:g[v]=p(v)}function u(v,p){this.h=p;for(var g=[],y=!0,E=v.length-1;0<=E;E--){var I=v[E]|0;y&&I==p||(g[E]=I,y=!1)}this.g=g}var c={};function l(v){return-128<=v&&128>v?o(v,function(p){return new u([p|0],0>p?-1:0)}):new u([v|0],0>v?-1:0)}function f(v){if(isNaN(v)||!isFinite(v))return A;if(0>v)return k(f(-v));for(var p=[],g=1,y=0;v>=g;y++)p[y]=v/g|0,g*=4294967296;return new u(p,0)}function _(v,p){if(v.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(v.charAt(0)=="-")return k(_(v.substring(1),p));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=f(Math.pow(p,8)),y=A,E=0;E<v.length;E+=8){var I=Math.min(8,v.length-E),m=parseInt(v.substring(E,E+I),p);8>I?(I=f(Math.pow(p,I)),y=y.j(I).add(f(m))):(y=y.j(g),y=y.add(f(m)))}return y}var A=l(0),R=l(1),S=l(16777216);n=u.prototype,n.m=function(){if(x(this))return-k(this).m();for(var v=0,p=1,g=0;g<this.g.length;g++){var y=this.i(g);v+=(0<=y?y:4294967296+y)*p,p*=4294967296}return v},n.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(N(this))return"0";if(x(this))return"-"+k(this).toString(v);for(var p=f(Math.pow(v,6)),g=this,y="";;){var E=nt(g,p).g;g=X(g,E.j(p));var I=((0<g.g.length?g.g[0]:g.h)>>>0).toString(v);if(g=E,N(g))return I+y;for(;6>I.length;)I="0"+I;y=I+y}},n.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function N(v){if(v.h!=0)return!1;for(var p=0;p<v.g.length;p++)if(v.g[p]!=0)return!1;return!0}function x(v){return v.h==-1}n.l=function(v){return v=X(this,v),x(v)?-1:N(v)?0:1};function k(v){for(var p=v.g.length,g=[],y=0;y<p;y++)g[y]=~v.g[y];return new u(g,~v.h).add(R)}n.abs=function(){return x(this)?k(this):this},n.add=function(v){for(var p=Math.max(this.g.length,v.g.length),g=[],y=0,E=0;E<=p;E++){var I=y+(this.i(E)&65535)+(v.i(E)&65535),m=(I>>>16)+(this.i(E)>>>16)+(v.i(E)>>>16);y=m>>>16,I&=65535,m&=65535,g[E]=m<<16|I}return new u(g,g[g.length-1]&-2147483648?-1:0)};function X(v,p){return v.add(k(p))}n.j=function(v){if(N(this)||N(v))return A;if(x(this))return x(v)?k(this).j(k(v)):k(k(this).j(v));if(x(v))return k(this.j(k(v)));if(0>this.l(S)&&0>v.l(S))return f(this.m()*v.m());for(var p=this.g.length+v.g.length,g=[],y=0;y<2*p;y++)g[y]=0;for(y=0;y<this.g.length;y++)for(var E=0;E<v.g.length;E++){var I=this.i(y)>>>16,m=this.i(y)&65535,Ct=v.i(E)>>>16,Re=v.i(E)&65535;g[2*y+2*E]+=m*Re,H(g,2*y+2*E),g[2*y+2*E+1]+=I*Re,H(g,2*y+2*E+1),g[2*y+2*E+1]+=m*Ct,H(g,2*y+2*E+1),g[2*y+2*E+2]+=I*Ct,H(g,2*y+2*E+2)}for(y=0;y<p;y++)g[y]=g[2*y+1]<<16|g[2*y];for(y=p;y<2*p;y++)g[y]=0;return new u(g,0)};function H(v,p){for(;(v[p]&65535)!=v[p];)v[p+1]+=v[p]>>>16,v[p]&=65535,p++}function Q(v,p){this.g=v,this.h=p}function nt(v,p){if(N(p))throw Error("division by zero");if(N(v))return new Q(A,A);if(x(v))return p=nt(k(v),p),new Q(k(p.g),k(p.h));if(x(p))return p=nt(v,k(p)),new Q(k(p.g),p.h);if(30<v.g.length){if(x(v)||x(p))throw Error("slowDivide_ only works with positive integers.");for(var g=R,y=p;0>=y.l(v);)g=Pt(g),y=Pt(y);var E=st(g,1),I=st(y,1);for(y=st(y,2),g=st(g,2);!N(y);){var m=I.add(y);0>=m.l(v)&&(E=E.add(g),I=m),y=st(y,1),g=st(g,1)}return p=X(v,E.j(p)),new Q(E,p)}for(E=A;0<=v.l(p);){for(g=Math.max(1,Math.floor(v.m()/p.m())),y=Math.ceil(Math.log(g)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),I=f(g),m=I.j(p);x(m)||0<m.l(v);)g-=y,I=f(g),m=I.j(p);N(I)&&(I=R),E=E.add(I),v=X(v,m)}return new Q(E,v)}n.A=function(v){return nt(this,v).h},n.and=function(v){for(var p=Math.max(this.g.length,v.g.length),g=[],y=0;y<p;y++)g[y]=this.i(y)&v.i(y);return new u(g,this.h&v.h)},n.or=function(v){for(var p=Math.max(this.g.length,v.g.length),g=[],y=0;y<p;y++)g[y]=this.i(y)|v.i(y);return new u(g,this.h|v.h)},n.xor=function(v){for(var p=Math.max(this.g.length,v.g.length),g=[],y=0;y<p;y++)g[y]=this.i(y)^v.i(y);return new u(g,this.h^v.h)};function Pt(v){for(var p=v.g.length+1,g=[],y=0;y<p;y++)g[y]=v.i(y)<<1|v.i(y-1)>>>31;return new u(g,v.h)}function st(v,p){var g=p>>5;p%=32;for(var y=v.g.length-g,E=[],I=0;I<y;I++)E[I]=0<p?v.i(I+g)>>>p|v.i(I+g+1)<<32-p:v.i(I+g);return new u(E,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Qo=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=f,u.fromString=_,Yt=u}).apply(typeof Xs<"u"?Xs:typeof self<"u"?self:typeof window<"u"?window:{});var Sn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wo,$e,Yo,kn,jr,Xo,Jo,Zo;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,a,h){return i==Array.prototype||i==Object.prototype||(i[a]=h.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Sn=="object"&&Sn];for(var a=0;a<i.length;++a){var h=i[a];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=e(this);function s(i,a){if(a)t:{var h=r;i=i.split(".");for(var d=0;d<i.length-1;d++){var T=i[d];if(!(T in h))break t;h=h[T]}i=i[i.length-1],d=h[i],a=a(d),a!=d&&a!=null&&t(h,i,{configurable:!0,writable:!0,value:a})}}function o(i,a){i instanceof String&&(i+="");var h=0,d=!1,T={next:function(){if(!d&&h<i.length){var w=h++;return{value:a(w,i[w]),done:!1}}return d=!0,{done:!0,value:void 0}}};return T[Symbol.iterator]=function(){return T},T}s("Array.prototype.values",function(i){return i||function(){return o(this,function(a,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},c=this||self;function l(i){var a=typeof i;return a=a!="object"?a:i?Array.isArray(i)?"array":a:"null",a=="array"||a=="object"&&typeof i.length=="number"}function f(i){var a=typeof i;return a=="object"&&i!=null||a=="function"}function _(i,a,h){return i.call.apply(i.bind,arguments)}function A(i,a,h){if(!i)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var T=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(T,d),i.apply(a,T)}}return function(){return i.apply(a,arguments)}}function R(i,a,h){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:A,R.apply(null,arguments)}function S(i,a){var h=Array.prototype.slice.call(arguments,1);return function(){var d=h.slice();return d.push.apply(d,arguments),i.apply(this,d)}}function N(i,a){function h(){}h.prototype=a.prototype,i.aa=a.prototype,i.prototype=new h,i.prototype.constructor=i,i.Qb=function(d,T,w){for(var V=Array(arguments.length-2),z=2;z<arguments.length;z++)V[z-2]=arguments[z];return a.prototype[T].apply(d,V)}}function x(i){const a=i.length;if(0<a){const h=Array(a);for(let d=0;d<a;d++)h[d]=i[d];return h}return[]}function k(i,a){for(let h=1;h<arguments.length;h++){const d=arguments[h];if(l(d)){const T=i.length||0,w=d.length||0;i.length=T+w;for(let V=0;V<w;V++)i[T+V]=d[V]}else i.push(d)}}class X{constructor(a,h){this.i=a,this.j=h,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function H(i){return/^[\s\xa0]*$/.test(i)}function Q(){var i=c.navigator;return i&&(i=i.userAgent)?i:""}function nt(i){return nt[" "](i),i}nt[" "]=function(){};var Pt=Q().indexOf("Gecko")!=-1&&!(Q().toLowerCase().indexOf("webkit")!=-1&&Q().indexOf("Edge")==-1)&&!(Q().indexOf("Trident")!=-1||Q().indexOf("MSIE")!=-1)&&Q().indexOf("Edge")==-1;function st(i,a,h){for(const d in i)a.call(h,i[d],d,i)}function v(i,a){for(const h in i)a.call(void 0,i[h],h,i)}function p(i){const a={};for(const h in i)a[h]=i[h];return a}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(i,a){let h,d;for(let T=1;T<arguments.length;T++){d=arguments[T];for(h in d)i[h]=d[h];for(let w=0;w<g.length;w++)h=g[w],Object.prototype.hasOwnProperty.call(d,h)&&(i[h]=d[h])}}function E(i){var a=1;i=i.split(":");const h=[];for(;0<a&&i.length;)h.push(i.shift()),a--;return i.length&&h.push(i.join(":")),h}function I(i){c.setTimeout(()=>{throw i},0)}function m(){var i=rr;let a=null;return i.g&&(a=i.g,i.g=i.g.next,i.g||(i.h=null),a.next=null),a}class Ct{constructor(){this.h=this.g=null}add(a,h){const d=Re.get();d.set(a,h),this.h?this.h.next=d:this.g=d,this.h=d}}var Re=new X(()=>new tu,i=>i.reset());class tu{constructor(){this.next=this.g=this.h=null}set(a,h){this.h=a,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Pe,Ce=!1,rr=new Ct,qi=()=>{const i=c.Promise.resolve(void 0);Pe=()=>{i.then(eu)}};var eu=()=>{for(var i;i=m();){try{i.h.call(i.g)}catch(h){I(h)}var a=Re;a.j(i),100>a.h&&(a.h++,i.next=a.g,a.g=i)}Ce=!1};function kt(){this.s=this.s,this.C=this.C}kt.prototype.s=!1,kt.prototype.ma=function(){this.s||(this.s=!0,this.N())},kt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ct(i,a){this.type=i,this.g=this.target=a,this.defaultPrevented=!1}ct.prototype.h=function(){this.defaultPrevented=!0};var nu=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var i=!1,a=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const h=()=>{};c.addEventListener("test",h,a),c.removeEventListener("test",h,a)}catch{}return i}();function Se(i,a){if(ct.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var h=this.type=i.type,d=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=a,a=i.relatedTarget){if(Pt){t:{try{nt(a.nodeName);var T=!0;break t}catch{}T=!1}T||(a=null)}}else h=="mouseover"?a=i.fromElement:h=="mouseout"&&(a=i.toElement);this.relatedTarget=a,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:ru[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&Se.aa.h.call(this)}}N(Se,ct);var ru={2:"touch",3:"pen",4:"mouse"};Se.prototype.h=function(){Se.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var hn="closure_listenable_"+(1e6*Math.random()|0),iu=0;function su(i,a,h,d,T){this.listener=i,this.proxy=null,this.src=a,this.type=h,this.capture=!!d,this.ha=T,this.key=++iu,this.da=this.fa=!1}function cn(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function ln(i){this.src=i,this.g={},this.h=0}ln.prototype.add=function(i,a,h,d,T){var w=i.toString();i=this.g[w],i||(i=this.g[w]=[],this.h++);var V=sr(i,a,d,T);return-1<V?(a=i[V],h||(a.fa=!1)):(a=new su(a,this.src,w,!!d,T),a.fa=h,i.push(a)),a};function ir(i,a){var h=a.type;if(h in i.g){var d=i.g[h],T=Array.prototype.indexOf.call(d,a,void 0),w;(w=0<=T)&&Array.prototype.splice.call(d,T,1),w&&(cn(a),i.g[h].length==0&&(delete i.g[h],i.h--))}}function sr(i,a,h,d){for(var T=0;T<i.length;++T){var w=i[T];if(!w.da&&w.listener==a&&w.capture==!!h&&w.ha==d)return T}return-1}var or="closure_lm_"+(1e6*Math.random()|0),ar={};function ji(i,a,h,d,T){if(Array.isArray(a)){for(var w=0;w<a.length;w++)ji(i,a[w],h,d,T);return null}return h=Ki(h),i&&i[hn]?i.K(a,h,f(d)?!!d.capture:!!d,T):ou(i,a,h,!1,d,T)}function ou(i,a,h,d,T,w){if(!a)throw Error("Invalid event type");var V=f(T)?!!T.capture:!!T,z=hr(i);if(z||(i[or]=z=new ln(i)),h=z.add(a,h,d,V,w),h.proxy)return h;if(d=au(),h.proxy=d,d.src=i,d.listener=h,i.addEventListener)nu||(T=V),T===void 0&&(T=!1),i.addEventListener(a.toString(),d,T);else if(i.attachEvent)i.attachEvent(zi(a.toString()),d);else if(i.addListener&&i.removeListener)i.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return h}function au(){function i(h){return a.call(i.src,i.listener,h)}const a=uu;return i}function $i(i,a,h,d,T){if(Array.isArray(a))for(var w=0;w<a.length;w++)$i(i,a[w],h,d,T);else d=f(d)?!!d.capture:!!d,h=Ki(h),i&&i[hn]?(i=i.i,a=String(a).toString(),a in i.g&&(w=i.g[a],h=sr(w,h,d,T),-1<h&&(cn(w[h]),Array.prototype.splice.call(w,h,1),w.length==0&&(delete i.g[a],i.h--)))):i&&(i=hr(i))&&(a=i.g[a.toString()],i=-1,a&&(i=sr(a,h,d,T)),(h=-1<i?a[i]:null)&&ur(h))}function ur(i){if(typeof i!="number"&&i&&!i.da){var a=i.src;if(a&&a[hn])ir(a.i,i);else{var h=i.type,d=i.proxy;a.removeEventListener?a.removeEventListener(h,d,i.capture):a.detachEvent?a.detachEvent(zi(h),d):a.addListener&&a.removeListener&&a.removeListener(d),(h=hr(a))?(ir(h,i),h.h==0&&(h.src=null,a[or]=null)):cn(i)}}}function zi(i){return i in ar?ar[i]:ar[i]="on"+i}function uu(i,a){if(i.da)i=!0;else{a=new Se(a,this);var h=i.listener,d=i.ha||i.src;i.fa&&ur(i),i=h.call(d,a)}return i}function hr(i){return i=i[or],i instanceof ln?i:null}var cr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ki(i){return typeof i=="function"?i:(i[cr]||(i[cr]=function(a){return i.handleEvent(a)}),i[cr])}function lt(){kt.call(this),this.i=new ln(this),this.M=this,this.F=null}N(lt,kt),lt.prototype[hn]=!0,lt.prototype.removeEventListener=function(i,a,h,d){$i(this,i,a,h,d)};function yt(i,a){var h,d=i.F;if(d)for(h=[];d;d=d.F)h.push(d);if(i=i.M,d=a.type||a,typeof a=="string")a=new ct(a,i);else if(a instanceof ct)a.target=a.target||i;else{var T=a;a=new ct(d,i),y(a,T)}if(T=!0,h)for(var w=h.length-1;0<=w;w--){var V=a.g=h[w];T=dn(V,d,!0,a)&&T}if(V=a.g=i,T=dn(V,d,!0,a)&&T,T=dn(V,d,!1,a)&&T,h)for(w=0;w<h.length;w++)V=a.g=h[w],T=dn(V,d,!1,a)&&T}lt.prototype.N=function(){if(lt.aa.N.call(this),this.i){var i=this.i,a;for(a in i.g){for(var h=i.g[a],d=0;d<h.length;d++)cn(h[d]);delete i.g[a],i.h--}}this.F=null},lt.prototype.K=function(i,a,h,d){return this.i.add(String(i),a,!1,h,d)},lt.prototype.L=function(i,a,h,d){return this.i.add(String(i),a,!0,h,d)};function dn(i,a,h,d){if(a=i.i.g[String(a)],!a)return!0;a=a.concat();for(var T=!0,w=0;w<a.length;++w){var V=a[w];if(V&&!V.da&&V.capture==h){var z=V.listener,ot=V.ha||V.src;V.fa&&ir(i.i,V),T=z.call(ot,d)!==!1&&T}}return T&&!d.defaultPrevented}function Gi(i,a,h){if(typeof i=="function")h&&(i=R(i,h));else if(i&&typeof i.handleEvent=="function")i=R(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:c.setTimeout(i,a||0)}function Hi(i){i.g=Gi(()=>{i.g=null,i.i&&(i.i=!1,Hi(i))},i.l);const a=i.h;i.h=null,i.m.apply(null,a)}class hu extends kt{constructor(a,h){super(),this.m=a,this.l=h,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:Hi(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ve(i){kt.call(this),this.h=i,this.g={}}N(Ve,kt);var Qi=[];function Wi(i){st(i.g,function(a,h){this.g.hasOwnProperty(h)&&ur(a)},i),i.g={}}Ve.prototype.N=function(){Ve.aa.N.call(this),Wi(this)},Ve.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var lr=c.JSON.stringify,cu=c.JSON.parse,lu=class{stringify(i){return c.JSON.stringify(i,void 0)}parse(i){return c.JSON.parse(i,void 0)}};function dr(){}dr.prototype.h=null;function Yi(i){return i.h||(i.h=i.i())}function Xi(){}var be={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function fr(){ct.call(this,"d")}N(fr,ct);function pr(){ct.call(this,"c")}N(pr,ct);var zt={},Ji=null;function fn(){return Ji=Ji||new lt}zt.La="serverreachability";function Zi(i){ct.call(this,zt.La,i)}N(Zi,ct);function De(i){const a=fn();yt(a,new Zi(a))}zt.STAT_EVENT="statevent";function ts(i,a){ct.call(this,zt.STAT_EVENT,i),this.stat=a}N(ts,ct);function Et(i){const a=fn();yt(a,new ts(a,i))}zt.Ma="timingevent";function es(i,a){ct.call(this,zt.Ma,i),this.size=a}N(es,ct);function Ne(i,a){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){i()},a)}function ke(){this.g=!0}ke.prototype.xa=function(){this.g=!1};function du(i,a,h,d,T,w){i.info(function(){if(i.g)if(w)for(var V="",z=w.split("&"),ot=0;ot<z.length;ot++){var j=z[ot].split("=");if(1<j.length){var dt=j[0];j=j[1];var ft=dt.split("_");V=2<=ft.length&&ft[1]=="type"?V+(dt+"="+j+"&"):V+(dt+"=redacted&")}}else V=null;else V=w;return"XMLHTTP REQ ("+d+") [attempt "+T+"]: "+a+`
`+h+`
`+V})}function fu(i,a,h,d,T,w,V){i.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+T+"]: "+a+`
`+h+`
`+w+" "+V})}function ne(i,a,h,d){i.info(function(){return"XMLHTTP TEXT ("+a+"): "+mu(i,h)+(d?" "+d:"")})}function pu(i,a){i.info(function(){return"TIMEOUT: "+a})}ke.prototype.info=function(){};function mu(i,a){if(!i.g)return a;if(!a)return null;try{var h=JSON.parse(a);if(h){for(i=0;i<h.length;i++)if(Array.isArray(h[i])){var d=h[i];if(!(2>d.length)){var T=d[1];if(Array.isArray(T)&&!(1>T.length)){var w=T[0];if(w!="noop"&&w!="stop"&&w!="close")for(var V=1;V<T.length;V++)T[V]=""}}}}return lr(h)}catch{return a}}var pn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ns={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},mr;function mn(){}N(mn,dr),mn.prototype.g=function(){return new XMLHttpRequest},mn.prototype.i=function(){return{}},mr=new mn;function Ot(i,a,h,d){this.j=i,this.i=a,this.l=h,this.R=d||1,this.U=new Ve(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new rs}function rs(){this.i=null,this.g="",this.h=!1}var is={},gr={};function _r(i,a,h){i.L=1,i.v=En(St(a)),i.m=h,i.P=!0,ss(i,null)}function ss(i,a){i.F=Date.now(),gn(i),i.A=St(i.v);var h=i.A,d=i.R;Array.isArray(d)||(d=[String(d)]),Es(h.i,"t",d),i.C=0,h=i.j.J,i.h=new rs,i.g=Ls(i.j,h?a:null,!i.m),0<i.O&&(i.M=new hu(R(i.Y,i,i.g),i.O)),a=i.U,h=i.g,d=i.ca;var T="readystatechange";Array.isArray(T)||(T&&(Qi[0]=T.toString()),T=Qi);for(var w=0;w<T.length;w++){var V=ji(h,T[w],d||a.handleEvent,!1,a.h||a);if(!V)break;a.g[V.key]=V}a=i.H?p(i.H):{},i.m?(i.u||(i.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,a)):(i.u="GET",i.g.ea(i.A,i.u,null,a)),De(),du(i.i,i.u,i.A,i.l,i.R,i.m)}Ot.prototype.ca=function(i){i=i.target;const a=this.M;a&&Vt(i)==3?a.j():this.Y(i)},Ot.prototype.Y=function(i){try{if(i==this.g)t:{const ft=Vt(this.g);var a=this.g.Ba();const se=this.g.Z();if(!(3>ft)&&(ft!=3||this.g&&(this.h.h||this.g.oa()||Ps(this.g)))){this.J||ft!=4||a==7||(a==8||0>=se?De(3):De(2)),yr(this);var h=this.g.Z();this.X=h;e:if(os(this)){var d=Ps(this.g);i="";var T=d.length,w=Vt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Kt(this),Oe(this);var V="";break e}this.h.i=new c.TextDecoder}for(a=0;a<T;a++)this.h.h=!0,i+=this.h.i.decode(d[a],{stream:!(w&&a==T-1)});d.length=0,this.h.g+=i,this.C=0,V=this.h.g}else V=this.g.oa();if(this.o=h==200,fu(this.i,this.u,this.A,this.l,this.R,ft,h),this.o){if(this.T&&!this.K){e:{if(this.g){var z,ot=this.g;if((z=ot.g?ot.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!H(z)){var j=z;break e}}j=null}if(h=j)ne(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Er(this,h);else{this.o=!1,this.s=3,Et(12),Kt(this),Oe(this);break t}}if(this.P){h=!0;let Tt;for(;!this.J&&this.C<V.length;)if(Tt=gu(this,V),Tt==gr){ft==4&&(this.s=4,Et(14),h=!1),ne(this.i,this.l,null,"[Incomplete Response]");break}else if(Tt==is){this.s=4,Et(15),ne(this.i,this.l,V,"[Invalid Chunk]"),h=!1;break}else ne(this.i,this.l,Tt,null),Er(this,Tt);if(os(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ft!=4||V.length!=0||this.h.h||(this.s=1,Et(16),h=!1),this.o=this.o&&h,!h)ne(this.i,this.l,V,"[Invalid Chunked Response]"),Kt(this),Oe(this);else if(0<V.length&&!this.W){this.W=!0;var dt=this.j;dt.g==this&&dt.ba&&!dt.M&&(dt.j.info("Great, no buffering proxy detected. Bytes received: "+V.length),Rr(dt),dt.M=!0,Et(11))}}else ne(this.i,this.l,V,null),Er(this,V);ft==4&&Kt(this),this.o&&!this.J&&(ft==4?ks(this.j,this):(this.o=!1,gn(this)))}else ku(this.g),h==400&&0<V.indexOf("Unknown SID")?(this.s=3,Et(12)):(this.s=0,Et(13)),Kt(this),Oe(this)}}}catch{}finally{}};function os(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function gu(i,a){var h=i.C,d=a.indexOf(`
`,h);return d==-1?gr:(h=Number(a.substring(h,d)),isNaN(h)?is:(d+=1,d+h>a.length?gr:(a=a.slice(d,d+h),i.C=d+h,a)))}Ot.prototype.cancel=function(){this.J=!0,Kt(this)};function gn(i){i.S=Date.now()+i.I,as(i,i.I)}function as(i,a){if(i.B!=null)throw Error("WatchDog timer not null");i.B=Ne(R(i.ba,i),a)}function yr(i){i.B&&(c.clearTimeout(i.B),i.B=null)}Ot.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(pu(this.i,this.A),this.L!=2&&(De(),Et(17)),Kt(this),this.s=2,Oe(this)):as(this,this.S-i)};function Oe(i){i.j.G==0||i.J||ks(i.j,i)}function Kt(i){yr(i);var a=i.M;a&&typeof a.ma=="function"&&a.ma(),i.M=null,Wi(i.U),i.g&&(a=i.g,i.g=null,a.abort(),a.ma())}function Er(i,a){try{var h=i.j;if(h.G!=0&&(h.g==i||vr(h.h,i))){if(!i.K&&vr(h.h,i)&&h.G==3){try{var d=h.Da.g.parse(a)}catch{d=null}if(Array.isArray(d)&&d.length==3){var T=d;if(T[0]==0){t:if(!h.u){if(h.g)if(h.g.F+3e3<i.F)Rn(h),wn(h);else break t;Ar(h),Et(18)}}else h.za=T[1],0<h.za-h.T&&37500>T[2]&&h.F&&h.v==0&&!h.C&&(h.C=Ne(R(h.Za,h),6e3));if(1>=cs(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Ht(h,11)}else if((i.K||h.g==i)&&Rn(h),!H(a))for(T=h.Da.g.parse(a),a=0;a<T.length;a++){let j=T[a];if(h.T=j[0],j=j[1],h.G==2)if(j[0]=="c"){h.K=j[1],h.ia=j[2];const dt=j[3];dt!=null&&(h.la=dt,h.j.info("VER="+h.la));const ft=j[4];ft!=null&&(h.Aa=ft,h.j.info("SVER="+h.Aa));const se=j[5];se!=null&&typeof se=="number"&&0<se&&(d=1.5*se,h.L=d,h.j.info("backChannelRequestTimeoutMs_="+d)),d=h;const Tt=i.g;if(Tt){const Cn=Tt.g?Tt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Cn){var w=d.h;w.g||Cn.indexOf("spdy")==-1&&Cn.indexOf("quic")==-1&&Cn.indexOf("h2")==-1||(w.j=w.l,w.g=new Set,w.h&&(Tr(w,w.h),w.h=null))}if(d.D){const Pr=Tt.g?Tt.g.getResponseHeader("X-HTTP-Session-Id"):null;Pr&&(d.ya=Pr,K(d.I,d.D,Pr))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-i.F,h.j.info("Handshake RTT: "+h.R+"ms")),d=h;var V=i;if(d.qa=xs(d,d.J?d.ia:null,d.W),V.K){ls(d.h,V);var z=V,ot=d.L;ot&&(z.I=ot),z.B&&(yr(z),gn(z)),d.g=V}else Ds(d);0<h.i.length&&An(h)}else j[0]!="stop"&&j[0]!="close"||Ht(h,7);else h.G==3&&(j[0]=="stop"||j[0]=="close"?j[0]=="stop"?Ht(h,7):wr(h):j[0]!="noop"&&h.l&&h.l.ta(j),h.v=0)}}De(4)}catch{}}var _u=class{constructor(i,a){this.g=i,this.map=a}};function us(i){this.l=i||10,c.PerformanceNavigationTiming?(i=c.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function hs(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function cs(i){return i.h?1:i.g?i.g.size:0}function vr(i,a){return i.h?i.h==a:i.g?i.g.has(a):!1}function Tr(i,a){i.g?i.g.add(a):i.h=a}function ls(i,a){i.h&&i.h==a?i.h=null:i.g&&i.g.has(a)&&i.g.delete(a)}us.prototype.cancel=function(){if(this.i=ds(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function ds(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let a=i.i;for(const h of i.g.values())a=a.concat(h.D);return a}return x(i.i)}function yu(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(l(i)){for(var a=[],h=i.length,d=0;d<h;d++)a.push(i[d]);return a}a=[],h=0;for(d in i)a[h++]=i[d];return a}function Eu(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(l(i)||typeof i=="string"){var a=[];i=i.length;for(var h=0;h<i;h++)a.push(h);return a}a=[],h=0;for(const d in i)a[h++]=d;return a}}}function fs(i,a){if(i.forEach&&typeof i.forEach=="function")i.forEach(a,void 0);else if(l(i)||typeof i=="string")Array.prototype.forEach.call(i,a,void 0);else for(var h=Eu(i),d=yu(i),T=d.length,w=0;w<T;w++)a.call(void 0,d[w],h&&h[w],i)}var ps=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function vu(i,a){if(i){i=i.split("&");for(var h=0;h<i.length;h++){var d=i[h].indexOf("="),T=null;if(0<=d){var w=i[h].substring(0,d);T=i[h].substring(d+1)}else w=i[h];a(w,T?decodeURIComponent(T.replace(/\+/g," ")):"")}}}function Gt(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof Gt){this.h=i.h,_n(this,i.j),this.o=i.o,this.g=i.g,yn(this,i.s),this.l=i.l;var a=i.i,h=new Le;h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),ms(this,h),this.m=i.m}else i&&(a=String(i).match(ps))?(this.h=!1,_n(this,a[1]||"",!0),this.o=Me(a[2]||""),this.g=Me(a[3]||"",!0),yn(this,a[4]),this.l=Me(a[5]||"",!0),ms(this,a[6]||"",!0),this.m=Me(a[7]||"")):(this.h=!1,this.i=new Le(null,this.h))}Gt.prototype.toString=function(){var i=[],a=this.j;a&&i.push(xe(a,gs,!0),":");var h=this.g;return(h||a=="file")&&(i.push("//"),(a=this.o)&&i.push(xe(a,gs,!0),"@"),i.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&i.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&i.push("/"),i.push(xe(h,h.charAt(0)=="/"?wu:Iu,!0))),(h=this.i.toString())&&i.push("?",h),(h=this.m)&&i.push("#",xe(h,Ru)),i.join("")};function St(i){return new Gt(i)}function _n(i,a,h){i.j=h?Me(a,!0):a,i.j&&(i.j=i.j.replace(/:$/,""))}function yn(i,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);i.s=a}else i.s=null}function ms(i,a,h){a instanceof Le?(i.i=a,Pu(i.i,i.h)):(h||(a=xe(a,Au)),i.i=new Le(a,i.h))}function K(i,a,h){i.i.set(a,h)}function En(i){return K(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function Me(i,a){return i?a?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function xe(i,a,h){return typeof i=="string"?(i=encodeURI(i).replace(a,Tu),h&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function Tu(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var gs=/[#\/\?@]/g,Iu=/[#\?:]/g,wu=/[#\?]/g,Au=/[#\?@]/g,Ru=/#/g;function Le(i,a){this.h=this.g=null,this.i=i||null,this.j=!!a}function Mt(i){i.g||(i.g=new Map,i.h=0,i.i&&vu(i.i,function(a,h){i.add(decodeURIComponent(a.replace(/\+/g," ")),h)}))}n=Le.prototype,n.add=function(i,a){Mt(this),this.i=null,i=re(this,i);var h=this.g.get(i);return h||this.g.set(i,h=[]),h.push(a),this.h+=1,this};function _s(i,a){Mt(i),a=re(i,a),i.g.has(a)&&(i.i=null,i.h-=i.g.get(a).length,i.g.delete(a))}function ys(i,a){return Mt(i),a=re(i,a),i.g.has(a)}n.forEach=function(i,a){Mt(this),this.g.forEach(function(h,d){h.forEach(function(T){i.call(a,T,d,this)},this)},this)},n.na=function(){Mt(this);const i=Array.from(this.g.values()),a=Array.from(this.g.keys()),h=[];for(let d=0;d<a.length;d++){const T=i[d];for(let w=0;w<T.length;w++)h.push(a[d])}return h},n.V=function(i){Mt(this);let a=[];if(typeof i=="string")ys(this,i)&&(a=a.concat(this.g.get(re(this,i))));else{i=Array.from(this.g.values());for(let h=0;h<i.length;h++)a=a.concat(i[h])}return a},n.set=function(i,a){return Mt(this),this.i=null,i=re(this,i),ys(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[a]),this.h+=1,this},n.get=function(i,a){return i?(i=this.V(i),0<i.length?String(i[0]):a):a};function Es(i,a,h){_s(i,a),0<h.length&&(i.i=null,i.g.set(re(i,a),x(h)),i.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],a=Array.from(this.g.keys());for(var h=0;h<a.length;h++){var d=a[h];const w=encodeURIComponent(String(d)),V=this.V(d);for(d=0;d<V.length;d++){var T=w;V[d]!==""&&(T+="="+encodeURIComponent(String(V[d]))),i.push(T)}}return this.i=i.join("&")};function re(i,a){return a=String(a),i.j&&(a=a.toLowerCase()),a}function Pu(i,a){a&&!i.j&&(Mt(i),i.i=null,i.g.forEach(function(h,d){var T=d.toLowerCase();d!=T&&(_s(this,d),Es(this,T,h))},i)),i.j=a}function Cu(i,a){const h=new ke;if(c.Image){const d=new Image;d.onload=S(xt,h,"TestLoadImage: loaded",!0,a,d),d.onerror=S(xt,h,"TestLoadImage: error",!1,a,d),d.onabort=S(xt,h,"TestLoadImage: abort",!1,a,d),d.ontimeout=S(xt,h,"TestLoadImage: timeout",!1,a,d),c.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=i}else a(!1)}function Su(i,a){const h=new ke,d=new AbortController,T=setTimeout(()=>{d.abort(),xt(h,"TestPingServer: timeout",!1,a)},1e4);fetch(i,{signal:d.signal}).then(w=>{clearTimeout(T),w.ok?xt(h,"TestPingServer: ok",!0,a):xt(h,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(T),xt(h,"TestPingServer: error",!1,a)})}function xt(i,a,h,d,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),d(h)}catch{}}function Vu(){this.g=new lu}function bu(i,a,h){const d=h||"";try{fs(i,function(T,w){let V=T;f(T)&&(V=lr(T)),a.push(d+w+"="+encodeURIComponent(V))})}catch(T){throw a.push(d+"type="+encodeURIComponent("_badmap")),T}}function vn(i){this.l=i.Ub||null,this.j=i.eb||!1}N(vn,dr),vn.prototype.g=function(){return new Tn(this.l,this.j)},vn.prototype.i=function(i){return function(){return i}}({});function Tn(i,a){lt.call(this),this.D=i,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(Tn,lt),n=Tn.prototype,n.open=function(i,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=a,this.readyState=1,Ue(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(a.body=i),(this.D||c).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Fe(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,Ue(this)),this.g&&(this.readyState=3,Ue(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;vs(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function vs(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var a=i.value?i.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!i.done}))&&(this.response=this.responseText+=a)}i.done?Fe(this):Ue(this),this.readyState==3&&vs(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,Fe(this))},n.Qa=function(i){this.g&&(this.response=i,Fe(this))},n.ga=function(){this.g&&Fe(this)};function Fe(i){i.readyState=4,i.l=null,i.j=null,i.v=null,Ue(i)}n.setRequestHeader=function(i,a){this.u.append(i,a)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],a=this.h.entries();for(var h=a.next();!h.done;)h=h.value,i.push(h[0]+": "+h[1]),h=a.next();return i.join(`\r
`)};function Ue(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(Tn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Ts(i){let a="";return st(i,function(h,d){a+=d,a+=":",a+=h,a+=`\r
`}),a}function Ir(i,a,h){t:{for(d in h){var d=!1;break t}d=!0}d||(h=Ts(h),typeof i=="string"?h!=null&&encodeURIComponent(String(h)):K(i,a,h))}function W(i){lt.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(W,lt);var Du=/^https?$/i,Nu=["POST","PUT"];n=W.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,a,h,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);a=a?a.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():mr.g(),this.v=this.o?Yi(this.o):Yi(mr),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(a,String(i),!0),this.B=!1}catch(w){Is(this,w);return}if(i=h||"",h=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var T in d)h.set(T,d[T]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const w of d.keys())h.set(w,d.get(w));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(h.keys()).find(w=>w.toLowerCase()=="content-type"),T=c.FormData&&i instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Nu,a,void 0))||d||T||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[w,V]of h)this.g.setRequestHeader(w,V);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Rs(this),this.u=!0,this.g.send(i),this.u=!1}catch(w){Is(this,w)}};function Is(i,a){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=a,i.m=5,ws(i),In(i)}function ws(i){i.A||(i.A=!0,yt(i,"complete"),yt(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,yt(this,"complete"),yt(this,"abort"),In(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),In(this,!0)),W.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?As(this):this.bb())},n.bb=function(){As(this)};function As(i){if(i.h&&typeof u<"u"&&(!i.v[1]||Vt(i)!=4||i.Z()!=2)){if(i.u&&Vt(i)==4)Gi(i.Ea,0,i);else if(yt(i,"readystatechange"),Vt(i)==4){i.h=!1;try{const V=i.Z();t:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var h;if(!(h=a)){var d;if(d=V===0){var T=String(i.D).match(ps)[1]||null;!T&&c.self&&c.self.location&&(T=c.self.location.protocol.slice(0,-1)),d=!Du.test(T?T.toLowerCase():"")}h=d}if(h)yt(i,"complete"),yt(i,"success");else{i.m=6;try{var w=2<Vt(i)?i.g.statusText:""}catch{w=""}i.l=w+" ["+i.Z()+"]",ws(i)}}finally{In(i)}}}}function In(i,a){if(i.g){Rs(i);const h=i.g,d=i.v[0]?()=>{}:null;i.g=null,i.v=null,a||yt(i,"ready");try{h.onreadystatechange=d}catch{}}}function Rs(i){i.I&&(c.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function Vt(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<Vt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var a=this.g.responseText;return i&&a.indexOf(i)==0&&(a=a.substring(i.length)),cu(a)}};function Ps(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function ku(i){const a={};i=(i.g&&2<=Vt(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<i.length;d++){if(H(i[d]))continue;var h=E(i[d]);const T=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const w=a[T]||[];a[T]=w,w.push(h)}v(a,function(d){return d.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Be(i,a,h){return h&&h.internalChannelParams&&h.internalChannelParams[i]||a}function Cs(i){this.Aa=0,this.i=[],this.j=new ke,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Be("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Be("baseRetryDelayMs",5e3,i),this.cb=Be("retryDelaySeedMs",1e4,i),this.Wa=Be("forwardChannelMaxRetries",2,i),this.wa=Be("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new us(i&&i.concurrentRequestLimit),this.Da=new Vu,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Cs.prototype,n.la=8,n.G=1,n.connect=function(i,a,h,d){Et(0),this.W=i,this.H=a||{},h&&d!==void 0&&(this.H.OSID=h,this.H.OAID=d),this.F=this.X,this.I=xs(this,null,this.W),An(this)};function wr(i){if(Ss(i),i.G==3){var a=i.U++,h=St(i.I);if(K(h,"SID",i.K),K(h,"RID",a),K(h,"TYPE","terminate"),qe(i,h),a=new Ot(i,i.j,a),a.L=2,a.v=En(St(h)),h=!1,c.navigator&&c.navigator.sendBeacon)try{h=c.navigator.sendBeacon(a.v.toString(),"")}catch{}!h&&c.Image&&(new Image().src=a.v,h=!0),h||(a.g=Ls(a.j,null),a.g.ea(a.v)),a.F=Date.now(),gn(a)}Ms(i)}function wn(i){i.g&&(Rr(i),i.g.cancel(),i.g=null)}function Ss(i){wn(i),i.u&&(c.clearTimeout(i.u),i.u=null),Rn(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&c.clearTimeout(i.s),i.s=null)}function An(i){if(!hs(i.h)&&!i.s){i.s=!0;var a=i.Ga;Pe||qi(),Ce||(Pe(),Ce=!0),rr.add(a,i),i.B=0}}function Ou(i,a){return cs(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=a.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=Ne(R(i.Ga,i,a),Os(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const T=new Ot(this,this.j,i);let w=this.o;if(this.S&&(w?(w=p(w),y(w,this.S)):w=this.S),this.m!==null||this.O||(T.H=w,w=null),this.P)t:{for(var a=0,h=0;h<this.i.length;h++){e:{var d=this.i[h];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break e}d=void 0}if(d===void 0)break;if(a+=d,4096<a){a=h;break t}if(a===4096||h===this.i.length-1){a=h+1;break t}}a=1e3}else a=1e3;a=bs(this,T,a),h=St(this.I),K(h,"RID",i),K(h,"CVER",22),this.D&&K(h,"X-HTTP-Session-Id",this.D),qe(this,h),w&&(this.O?a="headers="+encodeURIComponent(String(Ts(w)))+"&"+a:this.m&&Ir(h,this.m,w)),Tr(this.h,T),this.Ua&&K(h,"TYPE","init"),this.P?(K(h,"$req",a),K(h,"SID","null"),T.T=!0,_r(T,h,null)):_r(T,h,a),this.G=2}}else this.G==3&&(i?Vs(this,i):this.i.length==0||hs(this.h)||Vs(this))};function Vs(i,a){var h;a?h=a.l:h=i.U++;const d=St(i.I);K(d,"SID",i.K),K(d,"RID",h),K(d,"AID",i.T),qe(i,d),i.m&&i.o&&Ir(d,i.m,i.o),h=new Ot(i,i.j,h,i.B+1),i.m===null&&(h.H=i.o),a&&(i.i=a.D.concat(i.i)),a=bs(i,h,1e3),h.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),Tr(i.h,h),_r(h,d,a)}function qe(i,a){i.H&&st(i.H,function(h,d){K(a,d,h)}),i.l&&fs({},function(h,d){K(a,d,h)})}function bs(i,a,h){h=Math.min(i.i.length,h);var d=i.l?R(i.l.Na,i.l,i):null;t:{var T=i.i;let w=-1;for(;;){const V=["count="+h];w==-1?0<h?(w=T[0].g,V.push("ofs="+w)):w=0:V.push("ofs="+w);let z=!0;for(let ot=0;ot<h;ot++){let j=T[ot].g;const dt=T[ot].map;if(j-=w,0>j)w=Math.max(0,T[ot].g-100),z=!1;else try{bu(dt,V,"req"+j+"_")}catch{d&&d(dt)}}if(z){d=V.join("&");break t}}}return i=i.i.splice(0,h),a.D=i,d}function Ds(i){if(!i.g&&!i.u){i.Y=1;var a=i.Fa;Pe||qi(),Ce||(Pe(),Ce=!0),rr.add(a,i),i.v=0}}function Ar(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=Ne(R(i.Fa,i),Os(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,Ns(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=Ne(R(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Et(10),wn(this),Ns(this))};function Rr(i){i.A!=null&&(c.clearTimeout(i.A),i.A=null)}function Ns(i){i.g=new Ot(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var a=St(i.qa);K(a,"RID","rpc"),K(a,"SID",i.K),K(a,"AID",i.T),K(a,"CI",i.F?"0":"1"),!i.F&&i.ja&&K(a,"TO",i.ja),K(a,"TYPE","xmlhttp"),qe(i,a),i.m&&i.o&&Ir(a,i.m,i.o),i.L&&(i.g.I=i.L);var h=i.g;i=i.ia,h.L=1,h.v=En(St(a)),h.m=null,h.P=!0,ss(h,i)}n.Za=function(){this.C!=null&&(this.C=null,wn(this),Ar(this),Et(19))};function Rn(i){i.C!=null&&(c.clearTimeout(i.C),i.C=null)}function ks(i,a){var h=null;if(i.g==a){Rn(i),Rr(i),i.g=null;var d=2}else if(vr(i.h,a))h=a.D,ls(i.h,a),d=1;else return;if(i.G!=0){if(a.o)if(d==1){h=a.m?a.m.length:0,a=Date.now()-a.F;var T=i.B;d=fn(),yt(d,new es(d,h)),An(i)}else Ds(i);else if(T=a.s,T==3||T==0&&0<a.X||!(d==1&&Ou(i,a)||d==2&&Ar(i)))switch(h&&0<h.length&&(a=i.h,a.i=a.i.concat(h)),T){case 1:Ht(i,5);break;case 4:Ht(i,10);break;case 3:Ht(i,6);break;default:Ht(i,2)}}}function Os(i,a){let h=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(h*=2),h*a}function Ht(i,a){if(i.j.info("Error code "+a),a==2){var h=R(i.fb,i),d=i.Xa;const T=!d;d=new Gt(d||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||_n(d,"https"),En(d),T?Cu(d.toString(),h):Su(d.toString(),h)}else Et(2);i.G=0,i.l&&i.l.sa(a),Ms(i),Ss(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function Ms(i){if(i.G=0,i.ka=[],i.l){const a=ds(i.h);(a.length!=0||i.i.length!=0)&&(k(i.ka,a),k(i.ka,i.i),i.h.i.length=0,x(i.i),i.i.length=0),i.l.ra()}}function xs(i,a,h){var d=h instanceof Gt?St(h):new Gt(h);if(d.g!="")a&&(d.g=a+"."+d.g),yn(d,d.s);else{var T=c.location;d=T.protocol,a=a?a+"."+T.hostname:T.hostname,T=+T.port;var w=new Gt(null);d&&_n(w,d),a&&(w.g=a),T&&yn(w,T),h&&(w.l=h),d=w}return h=i.D,a=i.ya,h&&a&&K(d,h,a),K(d,"VER",i.la),qe(i,d),d}function Ls(i,a,h){if(a&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=i.Ca&&!i.pa?new W(new vn({eb:h})):new W(i.pa),a.Ha(i.J),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Fs(){}n=Fs.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Pn(){}Pn.prototype.g=function(i,a){return new vt(i,a)};function vt(i,a){lt.call(this),this.g=new Cs(a),this.l=i,this.h=a&&a.messageUrlParams||null,i=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(i?i["X-WebChannel-Content-Type"]=a.messageContentType:i={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(i?i["X-WebChannel-Client-Profile"]=a.va:i={"X-WebChannel-Client-Profile":a.va}),this.g.S=i,(i=a&&a.Sb)&&!H(i)&&(this.g.m=i),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!H(a)&&(this.g.D=a,i=this.h,i!==null&&a in i&&(i=this.h,a in i&&delete i[a])),this.j=new ie(this)}N(vt,lt),vt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},vt.prototype.close=function(){wr(this.g)},vt.prototype.o=function(i){var a=this.g;if(typeof i=="string"){var h={};h.__data__=i,i=h}else this.u&&(h={},h.__data__=lr(i),i=h);a.i.push(new _u(a.Ya++,i)),a.G==3&&An(a)},vt.prototype.N=function(){this.g.l=null,delete this.j,wr(this.g),delete this.g,vt.aa.N.call(this)};function Us(i){fr.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var a=i.__sm__;if(a){t:{for(const h in a){i=h;break t}i=void 0}(this.i=i)&&(i=this.i,a=a!==null&&i in a?a[i]:void 0),this.data=a}else this.data=i}N(Us,fr);function Bs(){pr.call(this),this.status=1}N(Bs,pr);function ie(i){this.g=i}N(ie,Fs),ie.prototype.ua=function(){yt(this.g,"a")},ie.prototype.ta=function(i){yt(this.g,new Us(i))},ie.prototype.sa=function(i){yt(this.g,new Bs)},ie.prototype.ra=function(){yt(this.g,"b")},Pn.prototype.createWebChannel=Pn.prototype.g,vt.prototype.send=vt.prototype.o,vt.prototype.open=vt.prototype.m,vt.prototype.close=vt.prototype.close,Zo=function(){return new Pn},Jo=function(){return fn()},Xo=zt,jr={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},pn.NO_ERROR=0,pn.TIMEOUT=8,pn.HTTP_ERROR=6,kn=pn,ns.COMPLETE="complete",Yo=ns,Xi.EventType=be,be.OPEN="a",be.CLOSE="b",be.ERROR="c",be.MESSAGE="d",lt.prototype.listen=lt.prototype.K,$e=Xi,W.prototype.listenOnce=W.prototype.L,W.prototype.getLastError=W.prototype.Ka,W.prototype.getLastErrorCode=W.prototype.Ba,W.prototype.getStatus=W.prototype.Z,W.prototype.getResponseJson=W.prototype.Oa,W.prototype.getResponseText=W.prototype.oa,W.prototype.send=W.prototype.ea,W.prototype.setWithCredentials=W.prototype.Ha,Wo=W}).apply(typeof Sn<"u"?Sn:typeof self<"u"?self:typeof window<"u"?window:{});const Js="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}mt.UNAUTHENTICATED=new mt(null),mt.GOOGLE_CREDENTIALS=new mt("google-credentials-uid"),mt.FIRST_PARTY=new mt("first-party-uid"),mt.MOCK_USER=new mt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Te="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt=new jo("@firebase/firestore");function je(){return Zt.logLevel}function b(n,...t){if(Zt.logLevel<=B.DEBUG){const e=t.map(ui);Zt.debug(`Firestore (${Te}): ${n}`,...e)}}function Dt(n,...t){if(Zt.logLevel<=B.ERROR){const e=t.map(ui);Zt.error(`Firestore (${Te}): ${n}`,...e)}}function fe(n,...t){if(Zt.logLevel<=B.WARN){const e=t.map(ui);Zt.warn(`Firestore (${Te}): ${n}`,...e)}}function ui(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(n="Unexpected state"){const t=`FIRESTORE (${Te}) INTERNAL ASSERTION FAILED: `+n;throw Dt(t),new Error(t)}function Y(n,t){n||L()}function U(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends ve{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class lc{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(mt.UNAUTHENTICATED))}shutdown(){}}class dc{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class fc{constructor(t){this.t=t,this.currentUser=mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){Y(this.o===void 0);let r=this.i;const s=l=>this.i!==r?(r=this.i,e(l)):Promise.resolve();let o=new Xt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Xt,t.enqueueRetryable(()=>s(this.currentUser))};const u=()=>{const l=o;t.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{b("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(b("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Xt)}},0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(b("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Y(typeof r.accessToken=="string"),new ta(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Y(t===null||typeof t=="string"),new mt(t)}}class pc{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=mt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class mc{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new pc(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class gc{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _c{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){Y(this.o===void 0);const r=o=>{o.error!=null&&b("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.R;return this.R=o.token,b("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{b("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):b("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(Y(typeof e.token=="string"),this.R=e.token,new gc(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yc(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=yc(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%t.length))}return r}}function $(n,t){return n<t?-1:n>t?1:0}function pe(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new D(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new D(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new D(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new D(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return it.fromMillis(Date.now())}static fromDate(t){return it.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new it(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?$(this.nanoseconds,t.nanoseconds):$(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t){this.timestamp=t}static fromTimestamp(t){return new M(t)}static min(){return new M(new it(0,0))}static max(){return new M(new it(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(t,e,r){e===void 0?e=0:e>t.length&&L(),r===void 0?r=t.length-e:r>t.length-e&&L(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Je.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Je?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=t.get(s),u=e.get(s);if(o<u)return-1;if(o>u)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class G extends Je{construct(t,e,r){return new G(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new D(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new G(e)}static emptyPath(){return new G([])}}const vc=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class _t extends Je{construct(t,e,r){return new _t(t,e,r)}static isValidIdentifier(t){return vc.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),_t.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new _t(["__name__"])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new D(C.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let u=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new D(C.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new D(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=l,s+=2}else c==="`"?(u=!u,s++):c!=="."||u?(r+=c,s++):(o(),s++)}if(o(),u)throw new D(C.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new _t(e)}static emptyPath(){return new _t([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t){this.path=t}static fromPath(t){return new O(G.fromString(t))}static fromName(t){return new O(G.fromString(t).popFirst(5))}static empty(){return new O(G.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&G.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return G.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new O(new G(t.slice()))}}function Tc(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=M.fromTimestamp(r===1e9?new it(e+1,0):new it(e,r));return new qt(s,O.empty(),t)}function Ic(n){return new qt(n.readTime,n.key,-1)}class qt{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new qt(M.min(),O.empty(),-1)}static max(){return new qt(M.max(),O.empty(),-1)}}function wc(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=O.comparator(n.documentKey,t.documentKey),e!==0?e:$(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Rc{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hi(n){if(n.code!==C.FAILED_PRECONDITION||n.message!==Ac)throw n;b("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&L(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new P((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof P?e:P.resolve(e)}catch(e){return P.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):P.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):P.reject(e)}static resolve(t){return new P((e,r)=>{e(t)})}static reject(t){return new P((e,r)=>{r(t)})}static waitFor(t){return new P((e,r)=>{let s=0,o=0,u=!1;t.forEach(c=>{++s,c.next(()=>{++o,u&&o===s&&e()},l=>r(l))}),u=!0,o===s&&e()})}static or(t){let e=P.resolve(!1);for(const r of t)e=e.next(s=>s?P.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,o)=>{r.push(e.call(this,s,o))}),this.waitFor(r)}static mapArray(t,e){return new P((r,s)=>{const o=t.length,u=new Array(o);let c=0;for(let l=0;l<o;l++){const f=l;e(t[f]).next(_=>{u[f]=_,++c,c===o&&r(u)},_=>s(_))}})}static doWhile(t,e){return new P((r,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):r()};o()})}}function Pc(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function nn(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}ci.oe=-1;function Hn(n){return n==null}function qn(n){return n===0&&1/n==-1/0}function Cc(n){return typeof n=="number"&&Number.isInteger(n)&&!qn(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zs(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function rn(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function ea(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t,e){this.comparator=t,this.root=e||at.EMPTY}insert(t,e){return new Z(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,at.BLACK,null,null))}remove(t){return new Z(this.comparator,this.root.remove(t,this.comparator).copy(null,null,at.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Vn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Vn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Vn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Vn(this.root,t,this.comparator,!0)}}class Vn{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class at{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??at.RED,this.left=s??at.EMPTY,this.right=o??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new at(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return at.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw L();const t=this.left.check();if(t!==this.right.check())throw L();return t+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw L()}get value(){throw L()}get color(){throw L()}get left(){throw L()}get right(){throw L()}copy(t,e,r,s,o){return this}insert(t,e,r){return new at(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(t){this.comparator=t,this.data=new Z(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new to(this.data.getIterator())}getIteratorFrom(t){return new to(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof ut)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new ut(this.comparator);return e.data=t,e}}class to{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(t){this.fields=t,t.sort(_t.comparator)}static empty(){return new Lt([])}unionWith(t){let e=new ut(_t.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Lt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return pe(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new na("Invalid base64 string: "+o):o}}(t);return new ht(e)}static fromUint8Array(t){const e=function(s){let o="";for(let u=0;u<s.length;++u)o+=String.fromCharCode(s[u]);return o}(t);return new ht(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return $(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const Sc=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function jt(n){if(Y(!!n),typeof n=="string"){let t=0;const e=Sc.exec(n);if(Y(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:J(n.seconds),nanos:J(n.nanos)}}function J(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function te(n){return typeof n=="string"?ht.fromBase64String(n):ht.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function di(n){const t=n.mapValue.fields.__previous_value__;return li(t)?di(t):t}function Ze(n){const t=jt(n.mapValue.fields.__local_write_time__.timestampValue);return new it(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(t,e,r,s,o,u,c,l,f){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=f}}class tn{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new tn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof tn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ee(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?li(n)?4:Dc(n)?9007199254740991:bc(n)?10:11:L()}function Rt(n,t){if(n===t)return!0;const e=ee(n);if(e!==ee(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Ze(n).isEqual(Ze(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const u=jt(s.timestampValue),c=jt(o.timestampValue);return u.seconds===c.seconds&&u.nanos===c.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return te(s.bytesValue).isEqual(te(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return J(s.geoPointValue.latitude)===J(o.geoPointValue.latitude)&&J(s.geoPointValue.longitude)===J(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return J(s.integerValue)===J(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const u=J(s.doubleValue),c=J(o.doubleValue);return u===c?qn(u)===qn(c):isNaN(u)&&isNaN(c)}return!1}(n,t);case 9:return pe(n.arrayValue.values||[],t.arrayValue.values||[],Rt);case 10:case 11:return function(s,o){const u=s.mapValue.fields||{},c=o.mapValue.fields||{};if(Zs(u)!==Zs(c))return!1;for(const l in u)if(u.hasOwnProperty(l)&&(c[l]===void 0||!Rt(u[l],c[l])))return!1;return!0}(n,t);default:return L()}}function en(n,t){return(n.values||[]).find(e=>Rt(e,t))!==void 0}function me(n,t){if(n===t)return 0;const e=ee(n),r=ee(t);if(e!==r)return $(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return $(n.booleanValue,t.booleanValue);case 2:return function(o,u){const c=J(o.integerValue||o.doubleValue),l=J(u.integerValue||u.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(n,t);case 3:return eo(n.timestampValue,t.timestampValue);case 4:return eo(Ze(n),Ze(t));case 5:return $(n.stringValue,t.stringValue);case 6:return function(o,u){const c=te(o),l=te(u);return c.compareTo(l)}(n.bytesValue,t.bytesValue);case 7:return function(o,u){const c=o.split("/"),l=u.split("/");for(let f=0;f<c.length&&f<l.length;f++){const _=$(c[f],l[f]);if(_!==0)return _}return $(c.length,l.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,u){const c=$(J(o.latitude),J(u.latitude));return c!==0?c:$(J(o.longitude),J(u.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return no(n.arrayValue,t.arrayValue);case 10:return function(o,u){var c,l,f,_;const A=o.fields||{},R=u.fields||{},S=(c=A.value)===null||c===void 0?void 0:c.arrayValue,N=(l=R.value)===null||l===void 0?void 0:l.arrayValue,x=$(((f=S==null?void 0:S.values)===null||f===void 0?void 0:f.length)||0,((_=N==null?void 0:N.values)===null||_===void 0?void 0:_.length)||0);return x!==0?x:no(S,N)}(n.mapValue,t.mapValue);case 11:return function(o,u){if(o===bn.mapValue&&u===bn.mapValue)return 0;if(o===bn.mapValue)return 1;if(u===bn.mapValue)return-1;const c=o.fields||{},l=Object.keys(c),f=u.fields||{},_=Object.keys(f);l.sort(),_.sort();for(let A=0;A<l.length&&A<_.length;++A){const R=$(l[A],_[A]);if(R!==0)return R;const S=me(c[l[A]],f[_[A]]);if(S!==0)return S}return $(l.length,_.length)}(n.mapValue,t.mapValue);default:throw L()}}function eo(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return $(n,t);const e=jt(n),r=jt(t),s=$(e.seconds,r.seconds);return s!==0?s:$(e.nanos,r.nanos)}function no(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=me(e[s],r[s]);if(o)return o}return $(e.length,r.length)}function ge(n){return $r(n)}function $r(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=jt(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return te(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return O.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=$r(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const u of r)o?o=!1:s+=",",s+=`${u}:${$r(e.fields[u])}`;return s+"}"}(n.mapValue):L()}function ro(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function zr(n){return!!n&&"integerValue"in n}function fi(n){return!!n&&"arrayValue"in n}function io(n){return!!n&&"nullValue"in n}function so(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Dr(n){return!!n&&"mapValue"in n}function bc(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function Ge(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return rn(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=Ge(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Ge(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Dc(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t){this.value=t}static empty(){return new wt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Dr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ge(e)}setAll(t){let e=_t.emptyPath(),r={},s=[];t.forEach((u,c)=>{if(!e.isImmediateParentOf(c)){const l=this.getFieldsMap(e);this.applyChanges(l,r,s),r={},s=[],e=c.popLast()}u?r[c.lastSegment()]=Ge(u):s.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());Dr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Rt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];Dr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){rn(e,(s,o)=>t[s]=o);for(const s of r)delete t[s]}clone(){return new wt(Ge(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t,e,r,s,o,u,c){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=u,this.documentState=c}static newInvalidDocument(t){return new gt(t,0,M.min(),M.min(),M.min(),wt.empty(),0)}static newFoundDocument(t,e,r,s){return new gt(t,1,e,M.min(),r,s,0)}static newNoDocument(t,e){return new gt(t,2,e,M.min(),M.min(),wt.empty(),0)}static newUnknownDocument(t,e){return new gt(t,3,e,M.min(),M.min(),wt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(M.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=M.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof gt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(t,e){this.position=t,this.inclusive=e}}function oo(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],u=n.position[s];if(o.field.isKeyField()?r=O.comparator(O.fromName(u.referenceValue),e.key):r=me(u,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function ao(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Rt(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(t,e="asc"){this.field=t,this.dir=e}}function Nc(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{}class et extends ra{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Oc(t,e,r):e==="array-contains"?new Lc(t,r):e==="in"?new Fc(t,r):e==="not-in"?new Uc(t,r):e==="array-contains-any"?new Bc(t,r):new et(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Mc(t,r):new xc(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(me(e,this.value)):e!==null&&ee(this.value)===ee(e)&&this.matchesComparison(me(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return L()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class It extends ra{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new It(t,e)}matches(t){return ia(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function ia(n){return n.op==="and"}function sa(n){return kc(n)&&ia(n)}function kc(n){for(const t of n.filters)if(t instanceof It)return!1;return!0}function Kr(n){if(n instanceof et)return n.field.canonicalString()+n.op.toString()+ge(n.value);if(sa(n))return n.filters.map(t=>Kr(t)).join(",");{const t=n.filters.map(e=>Kr(e)).join(",");return`${n.op}(${t})`}}function oa(n,t){return n instanceof et?function(r,s){return s instanceof et&&r.op===s.op&&r.field.isEqual(s.field)&&Rt(r.value,s.value)}(n,t):n instanceof It?function(r,s){return s instanceof It&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,u,c)=>o&&oa(u,s.filters[c]),!0):!1}(n,t):void L()}function aa(n){return n instanceof et?function(e){return`${e.field.canonicalString()} ${e.op} ${ge(e.value)}`}(n):n instanceof It?function(e){return e.op.toString()+" {"+e.getFilters().map(aa).join(" ,")+"}"}(n):"Filter"}class Oc extends et{constructor(t,e,r){super(t,e,r),this.key=O.fromName(r.referenceValue)}matches(t){const e=O.comparator(t.key,this.key);return this.matchesComparison(e)}}class Mc extends et{constructor(t,e){super(t,"in",e),this.keys=ua("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class xc extends et{constructor(t,e){super(t,"not-in",e),this.keys=ua("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function ua(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>O.fromName(r.referenceValue))}class Lc extends et{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return fi(e)&&en(e.arrayValue,this.value)}}class Fc extends et{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&en(this.value.arrayValue,e)}}class Uc extends et{constructor(t,e){super(t,"not-in",e)}matches(t){if(en(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!en(this.value.arrayValue,e)}}class Bc extends et{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!fi(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>en(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(t,e=null,r=[],s=[],o=null,u=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=u,this.endAt=c,this.ue=null}}function uo(n,t=null,e=[],r=[],s=null,o=null,u=null){return new qc(n,t,e,r,s,o,u)}function pi(n){const t=U(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Kr(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Hn(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>ge(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>ge(r)).join(",")),t.ue=e}return t.ue}function mi(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Nc(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!oa(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!ao(n.startAt,t.startAt)&&ao(n.endAt,t.endAt)}function Gr(n){return O.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(t,e=null,r=[],s=[],o=null,u="F",c=null,l=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=u,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function jc(n,t,e,r,s,o,u,c){return new sn(n,t,e,r,s,o,u,c)}function ha(n){return new sn(n)}function ho(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function ca(n){return n.collectionGroup!==null}function He(n){const t=U(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let c=new ut(_t.comparator);return u.filters.forEach(l=>{l.getFlattenedFilters().forEach(f=>{f.isInequality()&&(c=c.add(f.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new $n(o,r))}),e.has(_t.keyField().canonicalString())||t.ce.push(new $n(_t.keyField(),r))}return t.ce}function At(n){const t=U(n);return t.le||(t.le=$c(t,He(n))),t.le}function $c(n,t){if(n.limitType==="F")return uo(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new $n(s.field,o)});const e=n.endAt?new jn(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new jn(n.startAt.position,n.startAt.inclusive):null;return uo(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Hr(n,t){const e=n.filters.concat([t]);return new sn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function Qr(n,t,e){return new sn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Qn(n,t){return mi(At(n),At(t))&&n.limitType===t.limitType}function la(n){return`${pi(At(n))}|lt:${n.limitType}`}function oe(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>aa(s)).join(", ")}]`),Hn(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>ge(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>ge(s)).join(",")),`Target(${r})`}(At(n))}; limitType=${n.limitType})`}function Wn(n,t){return t.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):O.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,s){for(const o of He(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(u,c,l){const f=oo(u,c,l);return u.inclusive?f<=0:f<0}(r.startAt,He(r),s)||r.endAt&&!function(u,c,l){const f=oo(u,c,l);return u.inclusive?f>=0:f>0}(r.endAt,He(r),s))}(n,t)}function zc(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function da(n){return(t,e)=>{let r=!1;for(const s of He(n)){const o=Kc(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function Kc(n,t,e){const r=n.field.isKeyField()?O.comparator(t.key,e.key):function(o,u,c){const l=u.data.field(o),f=c.data.field(o);return l!==null&&f!==null?me(l,f):L()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return L()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){rn(this.inner,(e,r)=>{for(const[s,o]of r)t(s,o)})}isEmpty(){return ea(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gc=new Z(O.comparator);function $t(){return Gc}const fa=new Z(O.comparator);function ze(...n){let t=fa;for(const e of n)t=t.insert(e.key,e);return t}function Hc(n){let t=fa;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function Wt(){return Qe()}function pa(){return Qe()}function Qe(){return new Ie(n=>n.toString(),(n,t)=>n.isEqual(t))}const Qc=new ut(O.comparator);function q(...n){let t=Qc;for(const e of n)t=t.add(e);return t}const Wc=new ut($);function Yc(){return Wc}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:qn(t)?"-0":t}}function ma(n){return{integerValue:""+n}}function Xc(n,t){return Cc(t)?ma(t):gi(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(){this._=void 0}}function Jc(n,t,e){return n instanceof Wr?function(s,o){const u={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&li(o)&&(o=di(o)),o&&(u.fields.__previous_value__=o),{mapValue:u}}(e,t):n instanceof zn?ga(n,t):n instanceof Kn?_a(n,t):function(s,o){const u=tl(s,o),c=co(u)+co(s.Pe);return zr(u)&&zr(s.Pe)?ma(c):gi(s.serializer,c)}(n,t)}function Zc(n,t,e){return n instanceof zn?ga(n,t):n instanceof Kn?_a(n,t):e}function tl(n,t){return n instanceof Yr?function(r){return zr(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class Wr extends Yn{}class zn extends Yn{constructor(t){super(),this.elements=t}}function ga(n,t){const e=ya(t);for(const r of n.elements)e.some(s=>Rt(s,r))||e.push(r);return{arrayValue:{values:e}}}class Kn extends Yn{constructor(t){super(),this.elements=t}}function _a(n,t){let e=ya(t);for(const r of n.elements)e=e.filter(s=>!Rt(s,r));return{arrayValue:{values:e}}}class Yr extends Yn{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function co(n){return J(n.integerValue||n.doubleValue)}function ya(n){return fi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function el(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof zn&&s instanceof zn||r instanceof Kn&&s instanceof Kn?pe(r.elements,s.elements,Rt):r instanceof Yr&&s instanceof Yr?Rt(r.Pe,s.Pe):r instanceof Wr&&s instanceof Wr}(n.transform,t.transform)}class Jt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Jt}static exists(t){return new Jt(void 0,t)}static updateTime(t){return new Jt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function On(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class _i{}function Ea(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new rl(n.key,Jt.none()):new yi(n.key,n.data,Jt.none());{const e=n.data,r=wt.empty();let s=new ut(_t.comparator);for(let o of t.fields)if(!s.has(o)){let u=e.field(o);u===null&&o.length>1&&(o=o.popLast(),u=e.field(o)),u===null?r.delete(o):r.set(o,u),s=s.add(o)}return new Xn(n.key,r,new Lt(s.toArray()),Jt.none())}}function nl(n,t,e){n instanceof yi?function(s,o,u){const c=s.value.clone(),l=fo(s.fieldTransforms,o,u.transformResults);c.setAll(l),o.convertToFoundDocument(u.version,c).setHasCommittedMutations()}(n,t,e):n instanceof Xn?function(s,o,u){if(!On(s.precondition,o))return void o.convertToUnknownDocument(u.version);const c=fo(s.fieldTransforms,o,u.transformResults),l=o.data;l.setAll(va(s)),l.setAll(c),o.convertToFoundDocument(u.version,l).setHasCommittedMutations()}(n,t,e):function(s,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()}(0,t,e)}function We(n,t,e,r){return n instanceof yi?function(o,u,c,l){if(!On(o.precondition,u))return c;const f=o.value.clone(),_=po(o.fieldTransforms,l,u);return f.setAll(_),u.convertToFoundDocument(u.version,f).setHasLocalMutations(),null}(n,t,e,r):n instanceof Xn?function(o,u,c,l){if(!On(o.precondition,u))return c;const f=po(o.fieldTransforms,l,u),_=u.data;return _.setAll(va(o)),_.setAll(f),u.convertToFoundDocument(u.version,_).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(A=>A.field))}(n,t,e,r):function(o,u,c){return On(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):c}(n,t,e)}function lo(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&pe(r,s,(o,u)=>el(o,u))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class yi extends _i{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Xn extends _i{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function va(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function fo(n,t,e){const r=new Map;Y(n.length===e.length);for(let s=0;s<e.length;s++){const o=n[s],u=o.transform,c=t.data.field(o.field);r.set(o.field,Zc(u,c,e[s]))}return r}function po(n,t,e){const r=new Map;for(const s of n){const o=s.transform,u=e.data.field(s.field);r.set(s.field,Jc(o,u,t))}return r}class rl extends _i{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&nl(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=We(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=We(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=pa();return this.mutations.forEach(s=>{const o=t.get(s.key),u=o.overlayedDocument;let c=this.applyToLocalView(u,o.mutatedFields);c=e.has(s.key)?null:c;const l=Ea(u,c);l!==null&&r.set(s.key,l),u.isValidDocument()||u.convertToNoDocument(M.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),q())}isEqual(t){return this.batchId===t.batchId&&pe(this.mutations,t.mutations,(e,r)=>lo(e,r))&&pe(this.baseMutations,t.baseMutations,(e,r)=>lo(e,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tt,F;function Ta(n){if(n===void 0)return Dt("GRPC error has no .code"),C.UNKNOWN;switch(n){case tt.OK:return C.OK;case tt.CANCELLED:return C.CANCELLED;case tt.UNKNOWN:return C.UNKNOWN;case tt.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case tt.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case tt.INTERNAL:return C.INTERNAL;case tt.UNAVAILABLE:return C.UNAVAILABLE;case tt.UNAUTHENTICATED:return C.UNAUTHENTICATED;case tt.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case tt.NOT_FOUND:return C.NOT_FOUND;case tt.ALREADY_EXISTS:return C.ALREADY_EXISTS;case tt.PERMISSION_DENIED:return C.PERMISSION_DENIED;case tt.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case tt.ABORTED:return C.ABORTED;case tt.OUT_OF_RANGE:return C.OUT_OF_RANGE;case tt.UNIMPLEMENTED:return C.UNIMPLEMENTED;case tt.DATA_LOSS:return C.DATA_LOSS;default:return L()}}(F=tt||(tt={}))[F.OK=0]="OK",F[F.CANCELLED=1]="CANCELLED",F[F.UNKNOWN=2]="UNKNOWN",F[F.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",F[F.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",F[F.NOT_FOUND=5]="NOT_FOUND",F[F.ALREADY_EXISTS=6]="ALREADY_EXISTS",F[F.PERMISSION_DENIED=7]="PERMISSION_DENIED",F[F.UNAUTHENTICATED=16]="UNAUTHENTICATED",F[F.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",F[F.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",F[F.ABORTED=10]="ABORTED",F[F.OUT_OF_RANGE=11]="OUT_OF_RANGE",F[F.UNIMPLEMENTED=12]="UNIMPLEMENTED",F[F.INTERNAL=13]="INTERNAL",F[F.UNAVAILABLE=14]="UNAVAILABLE",F[F.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ul=new Yt([4294967295,4294967295],0);function mo(n){const t=al().encode(n),e=new Qo;return e.update(t),new Uint8Array(e.digest())}function go(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Yt([e,r],0),new Yt([s,o],0)]}class Ei{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new Ke(`Invalid padding: ${e}`);if(r<0)throw new Ke(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Ke(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new Ke(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=Yt.fromNumber(this.Ie)}Ee(t,e,r){let s=t.add(e.multiply(Yt.fromNumber(r)));return s.compare(ul)===1&&(s=new Yt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=mo(t),[r,s]=go(e);for(let o=0;o<this.hashCount;o++){const u=this.Ee(r,s,o);if(!this.de(u))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),u=new Ei(o,s,e);return r.forEach(c=>u.insert(c)),u}insert(t){if(this.Ie===0)return;const e=mo(t),[r,s]=go(e);for(let o=0;o<this.hashCount;o++){const u=this.Ee(r,s,o);this.Ae(u)}}Ae(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class Ke extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,on.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Jn(M.min(),s,new Z($),$t(),q())}}class on{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new on(r,e,q(),q(),q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(t,e,r,s){this.Re=t,this.removedTargetIds=e,this.key=r,this.Ve=s}}class Ia{constructor(t,e){this.targetId=t,this.me=e}}class wa{constructor(t,e,r=ht.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class _o{constructor(){this.fe=0,this.ge=Eo(),this.pe=ht.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=q(),e=q(),r=q();return this.ge.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:L()}}),new on(this.pe,this.ye,t,e,r)}Ce(){this.we=!1,this.ge=Eo()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,Y(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class hl{constructor(t){this.Le=t,this.Be=new Map,this.ke=$t(),this.qe=yo(),this.Qe=new Z($)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const r=this.Ge(e);switch(t.state){case 0:this.ze(e)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),r.De(t.resumeToken));break;default:L()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((r,s)=>{this.ze(s)&&e(s)})}He(t){const e=t.targetId,r=t.me.count,s=this.Je(e);if(s){const o=s.target;if(Gr(o))if(r===0){const u=new O(o.path);this.Ue(e,u,gt.newNoDocument(u,M.min()))}else Y(r===1);else{const u=this.Ye(e);if(u!==r){const c=this.Ze(t),l=c?this.Xe(c,t,u):1;if(l!==0){this.je(e);const f=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,f)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let u,c;try{u=te(r).toUint8Array()}catch(l){if(l instanceof na)return fe("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Ei(u,s,o)}catch(l){return fe(l instanceof Ke?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(t,e,r){return e.me.count===r-this.nt(t,e.targetId)?0:2}nt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let s=0;return r.forEach(o=>{const u=this.Le.tt(),c=`projects/${u.projectId}/databases/${u.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.Ue(e,o,null),s++)}),s}rt(t){const e=new Map;this.Be.forEach((o,u)=>{const c=this.Je(u);if(c){if(o.current&&Gr(c.target)){const l=new O(c.target.path);this.ke.get(l)!==null||this.it(u,l)||this.Ue(u,l,gt.newNoDocument(l,t))}o.be&&(e.set(u,o.ve()),o.Ce())}});let r=q();this.qe.forEach((o,u)=>{let c=!0;u.forEachWhile(l=>{const f=this.Je(l);return!f||f.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(o))}),this.ke.forEach((o,u)=>u.setReadTime(t));const s=new Jn(t,e,this.Qe,this.ke,r);return this.ke=$t(),this.qe=yo(),this.Qe=new Z($),s}$e(t,e){if(!this.ze(t))return;const r=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,r),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,r){if(!this.ze(t))return;const s=this.Ge(t);this.it(t,e)?s.Fe(e,1):s.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),r&&(this.ke=this.ke.insert(e,r))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new _o,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new ut($),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||b("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new _o),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function yo(){return new Z(O.comparator)}function Eo(){return new Z(O.comparator)}const cl={asc:"ASCENDING",desc:"DESCENDING"},ll={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},dl={and:"AND",or:"OR"};class fl{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Xr(n,t){return n.useProto3Json||Hn(t)?t:{value:t}}function Jr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Aa(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function ce(n){return Y(!!n),M.fromTimestamp(function(e){const r=jt(e);return new it(r.seconds,r.nanos)}(n))}function Ra(n,t){return Zr(n,t).canonicalString()}function Zr(n,t){const e=function(s){return new G(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Pa(n){const t=G.fromString(n);return Y(Da(t)),t}function Nr(n,t){const e=Pa(t);if(e.get(1)!==n.databaseId.projectId)throw new D(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new D(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new O(Sa(e))}function Ca(n,t){return Ra(n.databaseId,t)}function pl(n){const t=Pa(n);return t.length===4?G.emptyPath():Sa(t)}function vo(n){return new G(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Sa(n){return Y(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function ml(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:L()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(f,_){return f.useProto3Json?(Y(_===void 0||typeof _=="string"),ht.fromBase64String(_||"")):(Y(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array),ht.fromUint8Array(_||new Uint8Array))}(n,t.targetChange.resumeToken),u=t.targetChange.cause,c=u&&function(f){const _=f.code===void 0?C.UNKNOWN:Ta(f.code);return new D(_,f.message||"")}(u);e=new wa(r,s,o,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Nr(n,r.document.name),o=ce(r.document.updateTime),u=r.document.createTime?ce(r.document.createTime):M.min(),c=new wt({mapValue:{fields:r.document.fields}}),l=gt.newFoundDocument(s,o,u,c),f=r.targetIds||[],_=r.removedTargetIds||[];e=new Mn(f,_,l.key,l)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Nr(n,r.document),o=r.readTime?ce(r.readTime):M.min(),u=gt.newNoDocument(s,o),c=r.removedTargetIds||[];e=new Mn([],c,u.key,u)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Nr(n,r.document),o=r.removedTargetIds||[];e=new Mn([],o,s,null)}else{if(!("filter"in t))return L();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,u=new ol(s,o),c=r.targetId;e=new Ia(c,u)}}return e}function gl(n,t){return{documents:[Ca(n,t.path)]}}function _l(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Ca(n,s);const o=function(f){if(f.length!==0)return ba(It.create(f,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const u=function(f){if(f.length!==0)return f.map(_=>function(R){return{field:ae(R.field),direction:vl(R.dir)}}(_))}(t.orderBy);u&&(e.structuredQuery.orderBy=u);const c=Xr(n,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{_t:e,parent:s}}function yl(n){let t=pl(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){Y(r===1);const _=e.from[0];_.allDescendants?s=_.collectionId:t=t.child(_.collectionId)}let o=[];e.where&&(o=function(A){const R=Va(A);return R instanceof It&&sa(R)?R.getFilters():[R]}(e.where));let u=[];e.orderBy&&(u=function(A){return A.map(R=>function(N){return new $n(ue(N.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(R))}(e.orderBy));let c=null;e.limit&&(c=function(A){let R;return R=typeof A=="object"?A.value:A,Hn(R)?null:R}(e.limit));let l=null;e.startAt&&(l=function(A){const R=!!A.before,S=A.values||[];return new jn(S,R)}(e.startAt));let f=null;return e.endAt&&(f=function(A){const R=!A.before,S=A.values||[];return new jn(S,R)}(e.endAt)),jc(t,s,u,o,c,"F",l,f)}function El(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return L()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Va(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=ue(e.unaryFilter.field);return et.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ue(e.unaryFilter.field);return et.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=ue(e.unaryFilter.field);return et.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=ue(e.unaryFilter.field);return et.create(u,"!=",{nullValue:"NULL_VALUE"});default:return L()}}(n):n.fieldFilter!==void 0?function(e){return et.create(ue(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return L()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return It.create(e.compositeFilter.filters.map(r=>Va(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return L()}}(e.compositeFilter.op))}(n):L()}function vl(n){return cl[n]}function Tl(n){return ll[n]}function Il(n){return dl[n]}function ae(n){return{fieldPath:n.canonicalString()}}function ue(n){return _t.fromServerFormat(n.fieldPath)}function ba(n){return n instanceof et?function(e){if(e.op==="=="){if(so(e.value))return{unaryFilter:{field:ae(e.field),op:"IS_NAN"}};if(io(e.value))return{unaryFilter:{field:ae(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(so(e.value))return{unaryFilter:{field:ae(e.field),op:"IS_NOT_NAN"}};if(io(e.value))return{unaryFilter:{field:ae(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ae(e.field),op:Tl(e.op),value:e.value}}}(n):n instanceof It?function(e){const r=e.getFilters().map(s=>ba(s));return r.length===1?r[0]:{compositeFilter:{op:Il(e.op),filters:r}}}(n):L()}function Da(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(t,e,r,s,o=M.min(),u=M.min(),c=ht.EMPTY_BYTE_STRING,l=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(t){return new Ft(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Ft(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Ft(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Ft(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(t){this.ct=t}}function Al(n){const t=yl({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Qr(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(){this.un=new Pl}addToCollectionParentIndex(t,e){return this.un.add(e),P.resolve()}getCollectionParents(t,e){return P.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return P.resolve()}deleteFieldIndex(t,e){return P.resolve()}deleteAllFieldIndexes(t){return P.resolve()}createTargetIndexes(t,e){return P.resolve()}getDocumentsMatchingTarget(t,e){return P.resolve(null)}getIndexType(t,e){return P.resolve(0)}getFieldIndexes(t,e){return P.resolve([])}getNextCollectionGroupToUpdate(t){return P.resolve(null)}getMinOffset(t,e){return P.resolve(qt.min())}getMinOffsetFromCollectionGroup(t,e){return P.resolve(qt.min())}updateCollectionGroup(t,e,r){return P.resolve()}updateIndexEntries(t,e){return P.resolve()}}class Pl{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new ut(G.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new ut(G.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new _e(0)}static kn(){return new _e(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(){this.changes=new Ie(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,gt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?P.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&We(r.mutation,s,Lt.empty(),it.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,q()).next(()=>r))}getLocalViewOfDocuments(t,e,r=q()){const s=Wt();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(o=>{let u=ze();return o.forEach((c,l)=>{u=u.insert(c,l.overlayedDocument)}),u}))}getOverlayedDocuments(t,e){const r=Wt();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,q()))}populateOverlays(t,e,r){const s=[];return r.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((u,c)=>{e.set(u,c)})})}computeViews(t,e,r,s){let o=$t();const u=Qe(),c=function(){return Qe()}();return e.forEach((l,f)=>{const _=r.get(f.key);s.has(f.key)&&(_===void 0||_.mutation instanceof Xn)?o=o.insert(f.key,f):_!==void 0?(u.set(f.key,_.mutation.getFieldMask()),We(_.mutation,f,_.mutation.getFieldMask(),it.now())):u.set(f.key,Lt.empty())}),this.recalculateAndSaveOverlays(t,o).next(l=>(l.forEach((f,_)=>u.set(f,_)),e.forEach((f,_)=>{var A;return c.set(f,new Sl(_,(A=u.get(f))!==null&&A!==void 0?A:null))}),c))}recalculateAndSaveOverlays(t,e){const r=Qe();let s=new Z((u,c)=>u-c),o=q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(u=>{for(const c of u)c.keys().forEach(l=>{const f=e.get(l);if(f===null)return;let _=r.get(l)||Lt.empty();_=c.applyToLocalView(f,_),r.set(l,_);const A=(s.get(c.batchId)||q()).add(l);s=s.insert(c.batchId,A)})}).next(()=>{const u=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),f=l.key,_=l.value,A=pa();_.forEach(R=>{if(!o.has(R)){const S=Ea(e.get(R),r.get(R));S!==null&&A.set(R,S),o=o.add(R)}}),u.push(this.documentOverlayCache.saveOverlays(t,f,A))}return P.waitFor(u)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(u){return O.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):ca(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(o=>{const u=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):P.resolve(Wt());let c=-1,l=o;return u.next(f=>P.forEach(f,(_,A)=>(c<A.largestBatchId&&(c=A.largestBatchId),o.get(_)?P.resolve():this.remoteDocumentCache.getEntry(t,_).next(R=>{l=l.insert(_,R)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,l,f,q())).next(_=>({batchId:c,changes:Hc(_)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new O(e)).next(r=>{let s=ze();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let u=ze();return this.indexManager.getCollectionParents(t,o).next(c=>P.forEach(c,l=>{const f=function(A,R){return new sn(R,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)}(e,l.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,r,s).next(_=>{_.forEach((A,R)=>{u=u.insert(A,R)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s))).next(u=>{o.forEach((l,f)=>{const _=f.getKey();u.get(_)===null&&(u=u.insert(_,gt.newInvalidDocument(_)))});let c=ze();return u.forEach((l,f)=>{const _=o.get(l);_!==void 0&&We(_.mutation,f,Lt.empty(),it.now()),Wn(e,f)&&(c=c.insert(l,f))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return P.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:ce(s.createTime)}}(e)),P.resolve()}getNamedQuery(t,e){return P.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(s){return{name:s.name,query:Al(s.bundledQuery),readTime:ce(s.readTime)}}(e)),P.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(){this.overlays=new Z(O.comparator),this.Ir=new Map}getOverlay(t,e){return P.resolve(this.overlays.get(e))}getOverlays(t,e){const r=Wt();return P.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,o)=>{this.ht(t,e,o)}),P.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(r)),P.resolve()}getOverlaysForCollection(t,e,r){const s=Wt(),o=e.length+1,u=new O(e.child("")),c=this.overlays.getIteratorFrom(u);for(;c.hasNext();){const l=c.getNext().value,f=l.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&l.largestBatchId>r&&s.set(l.getKey(),l)}return P.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new Z((f,_)=>f-_);const u=this.overlays.getIterator();for(;u.hasNext();){const f=u.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>r){let _=o.get(f.largestBatchId);_===null&&(_=Wt(),o=o.insert(f.largestBatchId,_)),_.set(f.getKey(),f)}}const c=Wt(),l=o.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((f,_)=>c.set(f,_)),!(c.size()>=s)););return P.resolve(c)}ht(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const u=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new sl(e,r));let o=this.Ir.get(e);o===void 0&&(o=q(),this.Ir.set(e,o)),this.Ir.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(){this.sessionToken=ht.EMPTY_BYTE_STRING}getSessionToken(t){return P.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,P.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(){this.Tr=new ut(rt.Er),this.dr=new ut(rt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const r=new rt(t,e);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Vr(new rt(t,e))}mr(t,e){t.forEach(r=>this.removeReference(r,e))}gr(t){const e=new O(new G([])),r=new rt(e,t),s=new rt(e,t+1),o=[];return this.dr.forEachInRange([r,s],u=>{this.Vr(u),o.push(u.key)}),o}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new O(new G([])),r=new rt(e,t),s=new rt(e,t+1);let o=q();return this.dr.forEachInRange([r,s],u=>{o=o.add(u.key)}),o}containsKey(t){const e=new rt(t,0),r=this.Tr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class rt{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return O.comparator(t.key,e.key)||$(t.wr,e.wr)}static Ar(t,e){return $(t.wr,e.wr)||O.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new ut(rt.Er)}checkEmpty(t){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new il(o,e,r,s);this.mutationQueue.push(u);for(const c of s)this.br=this.br.add(new rt(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return P.resolve(u)}lookupMutationBatch(t,e){return P.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.vr(r),o=s<0?0:s;return P.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new rt(e,0),s=new rt(e,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([r,s],u=>{const c=this.Dr(u.wr);o.push(c)}),P.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new ut($);return e.forEach(s=>{const o=new rt(s,0),u=new rt(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,u],c=>{r=r.add(c.wr)})}),P.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;O.isDocumentKey(o)||(o=o.child(""));const u=new rt(new O(o),0);let c=new ut($);return this.br.forEachWhile(l=>{const f=l.key.path;return!!r.isPrefixOf(f)&&(f.length===s&&(c=c.add(l.wr)),!0)},u),P.resolve(this.Cr(c))}Cr(t){const e=[];return t.forEach(r=>{const s=this.Dr(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){Y(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return P.forEach(e.mutations,s=>{const o=new rt(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.br=r})}On(t){}containsKey(t,e){const r=new rt(e,0),s=this.br.firstAfterOrEqual(r);return P.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,P.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(t){this.Mr=t,this.docs=function(){return new Z(O.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,u=this.Mr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return P.resolve(r?r.document.mutableCopy():gt.newInvalidDocument(e))}getEntries(t,e){let r=$t();return e.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():gt.newInvalidDocument(s))}),P.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=$t();const u=e.path,c=new O(u.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:f,value:{document:_}}=l.getNext();if(!u.isPrefixOf(f.path))break;f.path.length>u.length+1||wc(Ic(_),r)<=0||(s.has(_.key)||Wn(e,_))&&(o=o.insert(_.key,_.mutableCopy()))}return P.resolve(o)}getAllFromCollectionGroup(t,e,r,s){L()}Or(t,e){return P.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new Ml(this)}getSize(t){return P.resolve(this.size)}}class Ml extends Cl{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.cr.addEntry(t,s)):this.cr.removeEntry(r)}),P.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(t){this.persistence=t,this.Nr=new Ie(e=>pi(e),mi),this.lastRemoteSnapshotVersion=M.min(),this.highestTargetId=0,this.Lr=0,this.Br=new vi,this.targetCount=0,this.kr=_e.Bn()}forEachTarget(t,e){return this.Nr.forEach((r,s)=>e(s)),P.resolve()}getLastRemoteSnapshotVersion(t){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return P.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Lr&&(this.Lr=e),P.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new _e(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,P.resolve()}updateTargetData(t,e){return this.Kn(e),P.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,P.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.Nr.forEach((u,c)=>{c.sequenceNumber<=e&&r.get(c.targetId)===null&&(this.Nr.delete(u),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)}),P.waitFor(o).next(()=>s)}getTargetCount(t){return P.resolve(this.targetCount)}getTargetData(t,e){const r=this.Nr.get(e)||null;return P.resolve(r)}addMatchingKeys(t,e,r){return this.Br.Rr(e,r),P.resolve()}removeMatchingKeys(t,e,r){this.Br.mr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(u=>{o.push(s.markPotentiallyOrphaned(t,u))}),P.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),P.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Br.yr(e);return P.resolve(r)}containsKey(t,e){return P.resolve(this.Br.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(t,e){this.qr={},this.overlays={},this.Qr=new ci(0),this.Kr=!1,this.Kr=!0,this.$r=new Nl,this.referenceDelegate=t(this),this.Ur=new xl(this),this.indexManager=new Rl,this.remoteDocumentCache=function(s){return new Ol(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new wl(e),this.Gr=new bl(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Dl,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.qr[t.toKey()];return r||(r=new kl(e,this.referenceDelegate),this.qr[t.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,r){b("MemoryPersistence","Starting transaction:",t);const s=new Fl(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(o=>this.referenceDelegate.jr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Hr(t,e){return P.or(Object.values(this.qr).map(r=>()=>r.containsKey(t,e)))}}class Fl extends Rc{constructor(t){super(),this.currentSequenceNumber=t}}class Ti{constructor(t){this.persistence=t,this.Jr=new vi,this.Yr=null}static Zr(t){return new Ti(t)}get Xr(){if(this.Yr)return this.Yr;throw L()}addReference(t,e,r){return this.Jr.addReference(r,e),this.Xr.delete(r.toString()),P.resolve()}removeReference(t,e,r){return this.Jr.removeReference(r,e),this.Xr.add(r.toString()),P.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),P.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.Xr.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.Xr,r=>{const s=O.fromPath(r);return this.ei(t,s).next(o=>{o||e.removeEntry(s,M.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(r=>{r?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return P.or([()=>P.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.$i=r,this.Ui=s}static Wi(t,e){let r=q(),s=q();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new Ii(t,e.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Wu()?8:Pc(Hu())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.Yi(t,e).next(u=>{o.result=u}).next(()=>{if(!o.result)return this.Zi(t,e,s,r).next(u=>{o.result=u})}).next(()=>{if(o.result)return;const u=new Ul;return this.Xi(t,e,u).next(c=>{if(o.result=c,this.zi)return this.es(t,e,u,c.size)})}).next(()=>o.result)}es(t,e,r,s){return r.documentReadCount<this.ji?(je()<=B.DEBUG&&b("QueryEngine","SDK will not create cache indexes for query:",oe(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),P.resolve()):(je()<=B.DEBUG&&b("QueryEngine","Query:",oe(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(je()<=B.DEBUG&&b("QueryEngine","The SDK decides to create cache indexes for query:",oe(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,At(e))):P.resolve())}Yi(t,e){if(ho(e))return P.resolve(null);let r=At(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Qr(e,null,"F"),r=At(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const u=q(...o);return this.Ji.getDocuments(t,u).next(c=>this.indexManager.getMinOffset(t,r).next(l=>{const f=this.ts(e,c);return this.ns(e,f,u,l.readTime)?this.Yi(t,Qr(e,null,"F")):this.rs(t,f,e,l)}))})))}Zi(t,e,r,s){return ho(e)||s.isEqual(M.min())?P.resolve(null):this.Ji.getDocuments(t,r).next(o=>{const u=this.ts(e,o);return this.ns(e,u,r,s)?P.resolve(null):(je()<=B.DEBUG&&b("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),oe(e)),this.rs(t,u,e,Tc(s,-1)).next(c=>c))})}ts(t,e){let r=new ut(da(t));return e.forEach((s,o)=>{Wn(t,o)&&(r=r.add(o))}),r}ns(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Xi(t,e,r){return je()<=B.DEBUG&&b("QueryEngine","Using full collection scan to execute query:",oe(e)),this.Ji.getDocumentsMatchingQuery(t,e,qt.min(),r)}rs(t,e,r,s){return this.Ji.getDocumentsMatchingQuery(t,r,s).next(o=>(e.forEach(u=>{o=o.insert(u.key,u)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(t,e,r,s){this.persistence=t,this.ss=e,this.serializer=s,this.os=new Z($),this._s=new Ie(o=>pi(o),mi),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(r)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Vl(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function jl(n,t,e,r){return new ql(n,t,e,r)}async function Na(n,t){const e=U(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,e.ls(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const u=[],c=[];let l=q();for(const f of s){u.push(f.batchId);for(const _ of f.mutations)l=l.add(_.key)}for(const f of o){c.push(f.batchId);for(const _ of f.mutations)l=l.add(_.key)}return e.localDocuments.getDocuments(r,l).next(f=>({hs:f,removedBatchIds:u,addedBatchIds:c}))})})}function ka(n){const t=U(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function $l(n,t){const e=U(n),r=t.snapshotVersion;let s=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const u=e.cs.newChangeBuffer({trackRemovals:!0});s=e.os;const c=[];t.targetChanges.forEach((_,A)=>{const R=s.get(A);if(!R)return;c.push(e.Ur.removeMatchingKeys(o,_.removedDocuments,A).next(()=>e.Ur.addMatchingKeys(o,_.addedDocuments,A)));let S=R.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(A)!==null?S=S.withResumeToken(ht.EMPTY_BYTE_STRING,M.min()).withLastLimboFreeSnapshotVersion(M.min()):_.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(_.resumeToken,r)),s=s.insert(A,S),function(x,k,X){return x.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=3e8?!0:X.addedDocuments.size+X.modifiedDocuments.size+X.removedDocuments.size>0}(R,S,_)&&c.push(e.Ur.updateTargetData(o,S))});let l=$t(),f=q();if(t.documentUpdates.forEach(_=>{t.resolvedLimboDocuments.has(_)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,_))}),c.push(zl(o,u,t.documentUpdates).next(_=>{l=_.Ps,f=_.Is})),!r.isEqual(M.min())){const _=e.Ur.getLastRemoteSnapshotVersion(o).next(A=>e.Ur.setTargetsMetadata(o,o.currentSequenceNumber,r));c.push(_)}return P.waitFor(c).next(()=>u.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,l,f)).next(()=>l)}).then(o=>(e.os=s,o))}function zl(n,t,e){let r=q(),s=q();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let u=$t();return e.forEach((c,l)=>{const f=o.get(c);l.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(M.min())?(t.removeEntry(c,l.readTime),u=u.insert(c,l)):!f.isValidDocument()||l.version.compareTo(f.version)>0||l.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(l),u=u.insert(c,l)):b("LocalStore","Ignoring outdated watch update for ",c,". Current version:",f.version," Watch version:",l.version)}),{Ps:u,Is:s}})}function Kl(n,t){const e=U(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.Ur.getTargetData(r,t).next(o=>o?(s=o,P.resolve(s)):e.Ur.allocateTargetId(r).next(u=>(s=new Ft(t,u,"TargetPurposeListen",r.currentSequenceNumber),e.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.os=e.os.insert(r.targetId,r),e._s.set(t,r.targetId)),r})}async function ti(n,t,e){const r=U(n),s=r.os.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,u=>r.persistence.referenceDelegate.removeTarget(u,s))}catch(u){if(!nn(u))throw u;b("LocalStore",`Failed to update sequence numbers for target ${t}: ${u}`)}r.os=r.os.remove(t),r._s.delete(s.target)}function To(n,t,e){const r=U(n);let s=M.min(),o=q();return r.persistence.runTransaction("Execute query","readwrite",u=>function(l,f,_){const A=U(l),R=A._s.get(_);return R!==void 0?P.resolve(A.os.get(R)):A.Ur.getTargetData(f,_)}(r,u,At(t)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(u,c.targetId).next(l=>{o=l})}).next(()=>r.ss.getDocumentsMatchingQuery(u,t,e?s:M.min(),e?o:q())).next(c=>(Gl(r,zc(t),c),{documents:c,Ts:o})))}function Gl(n,t,e){let r=n.us.get(t)||M.min();e.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.us.set(t,r)}class Io{constructor(){this.activeTargetIds=Yc()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Hl{constructor(){this.so=new Io,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,r){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new Io,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{_o(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){b("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){b("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dn=null;function kr(){return Dn===null?Dn=function(){return 268435456+Math.round(2147483648*Math.random())}():Dn++,"0x"+Dn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wl={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt="WebChannelConnection";class Xl extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+e.host,this.vo=`projects/${s}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}get Fo(){return!1}Mo(e,r,s,o,u){const c=kr(),l=this.xo(e,r.toUriEncodedString());b("RestConnection",`Sending RPC '${e}' ${c}:`,l,s);const f={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(f,o,u),this.No(e,l,f,s).then(_=>(b("RestConnection",`Received RPC '${e}' ${c}: `,_),_),_=>{throw fe("RestConnection",`RPC '${e}' ${c} failed with error: `,_,"url: ",l,"request:",s),_})}Lo(e,r,s,o,u,c){return this.Mo(e,r,s,o,u)}Oo(e,r,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Te}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,u)=>e[u]=o),s&&s.headers.forEach((o,u)=>e[u]=o)}xo(e,r){const s=Wl[e];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,r,s){const o=kr();return new Promise((u,c)=>{const l=new Wo;l.setWithCredentials(!0),l.listenOnce(Yo.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case kn.NO_ERROR:const _=l.getResponseJson();b(pt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(_)),u(_);break;case kn.TIMEOUT:b(pt,`RPC '${t}' ${o} timed out`),c(new D(C.DEADLINE_EXCEEDED,"Request time out"));break;case kn.HTTP_ERROR:const A=l.getStatus();if(b(pt,`RPC '${t}' ${o} failed with status:`,A,"response text:",l.getResponseText()),A>0){let R=l.getResponseJson();Array.isArray(R)&&(R=R[0]);const S=R==null?void 0:R.error;if(S&&S.status&&S.message){const N=function(k){const X=k.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(X)>=0?X:C.UNKNOWN}(S.status);c(new D(N,S.message))}else c(new D(C.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new D(C.UNAVAILABLE,"Connection failed."));break;default:L()}}finally{b(pt,`RPC '${t}' ${o} completed.`)}});const f=JSON.stringify(s);b(pt,`RPC '${t}' ${o} sending request:`,s),l.send(e,"POST",f,r,15)})}Bo(t,e,r){const s=kr(),o=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=Zo(),c=Jo(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(l.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,e,r),l.encodeInitMessageHeaders=!0;const _=o.join("");b(pt,`Creating RPC '${t}' stream ${s}: ${_}`,l);const A=u.createWebChannel(_,l);let R=!1,S=!1;const N=new Yl({Io:k=>{S?b(pt,`Not sending because RPC '${t}' stream ${s} is closed:`,k):(R||(b(pt,`Opening RPC '${t}' stream ${s} transport.`),A.open(),R=!0),b(pt,`RPC '${t}' stream ${s} sending:`,k),A.send(k))},To:()=>A.close()}),x=(k,X,H)=>{k.listen(X,Q=>{try{H(Q)}catch(nt){setTimeout(()=>{throw nt},0)}})};return x(A,$e.EventType.OPEN,()=>{S||(b(pt,`RPC '${t}' stream ${s} transport opened.`),N.yo())}),x(A,$e.EventType.CLOSE,()=>{S||(S=!0,b(pt,`RPC '${t}' stream ${s} transport closed`),N.So())}),x(A,$e.EventType.ERROR,k=>{S||(S=!0,fe(pt,`RPC '${t}' stream ${s} transport errored:`,k),N.So(new D(C.UNAVAILABLE,"The operation could not be completed")))}),x(A,$e.EventType.MESSAGE,k=>{var X;if(!S){const H=k.data[0];Y(!!H);const Q=H,nt=Q.error||((X=Q[0])===null||X===void 0?void 0:X.error);if(nt){b(pt,`RPC '${t}' stream ${s} received error:`,nt);const Pt=nt.status;let st=function(g){const y=tt[g];if(y!==void 0)return Ta(y)}(Pt),v=nt.message;st===void 0&&(st=C.INTERNAL,v="Unknown error status: "+Pt+" with message "+nt.message),S=!0,N.So(new D(st,v)),A.close()}else b(pt,`RPC '${t}' stream ${s} received:`,H),N.bo(H)}}),x(c,Xo.STAT_EVENT,k=>{k.stat===jr.PROXY?b(pt,`RPC '${t}' stream ${s} detected buffering proxy`):k.stat===jr.NOPROXY&&b(pt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{N.wo()},0),N}}function Or(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(n){return new fl(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(t,e,r=1e3,s=1.5,o=6e4){this.ui=t,this.timerId=e,this.ko=r,this.qo=s,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,e-r);s>0&&b("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(t,e,r,s,o,u,c,l){this.ui=t,this.Ho=r,this.Jo=s,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Oa(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===C.RESOURCE_EXHAUSTED?(Dt(e.toString()),Dt("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===e&&this.P_(r,s)},r=>{t(()=>{const s=new D(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(t,e){const r=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return b("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(b("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Zl extends Jl{constructor(t,e,r,s,o,u){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,u),this.serializer=o}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=ml(this.serializer,t),r=function(o){if(!("targetChange"in o))return M.min();const u=o.targetChange;return u.targetIds&&u.targetIds.length?M.min():u.readTime?ce(u.readTime):M.min()}(t);return this.listener.d_(e,r)}A_(t){const e={};e.database=vo(this.serializer),e.addTarget=function(o,u){let c;const l=u.target;if(c=Gr(l)?{documents:gl(o,l)}:{query:_l(o,l)._t},c.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){c.resumeToken=Aa(o,u.resumeToken);const f=Xr(o,u.expectedCount);f!==null&&(c.expectedCount=f)}else if(u.snapshotVersion.compareTo(M.min())>0){c.readTime=Jr(o,u.snapshotVersion.toTimestamp());const f=Xr(o,u.expectedCount);f!==null&&(c.expectedCount=f)}return c}(this.serializer,t);const r=El(this.serializer,t);r&&(e.labels=r),this.a_(e)}R_(t){const e={};e.database=vo(this.serializer),e.removeTarget=t,this.a_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td extends class{}{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new D(C.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.Mo(t,Zr(e,r),s,o,u)).catch(o=>{throw o.name==="FirebaseError"?(o.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new D(C.UNKNOWN,o.toString())})}Lo(t,e,r,s,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,c])=>this.connection.Lo(t,Zr(e,r),s,u,c,o)).catch(u=>{throw u.name==="FirebaseError"?(u.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new D(C.UNKNOWN,u.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class ed{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Dt(e),this.D_=!1):b("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(u=>{r.enqueueAndForget(async()=>{un(this)&&(b("RemoteStore","Restarting streams for network reachability change."),await async function(l){const f=U(l);f.L_.add(4),await an(f),f.q_.set("Unknown"),f.L_.delete(4),await tr(f)}(this))})}),this.q_=new ed(r,s)}}async function tr(n){if(un(n))for(const t of n.B_)await t(!0)}async function an(n){for(const t of n.B_)await t(!1)}function Ma(n,t){const e=U(n);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),Pi(e)?Ri(e):we(e).r_()&&Ai(e,t))}function wi(n,t){const e=U(n),r=we(e);e.N_.delete(t),r.r_()&&xa(e,t),e.N_.size===0&&(r.r_()?r.o_():un(e)&&e.q_.set("Unknown"))}function Ai(n,t){if(n.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(M.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}we(n).A_(t)}function xa(n,t){n.Q_.xe(t),we(n).R_(t)}function Ri(n){n.Q_=new hl({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.N_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),we(n).start(),n.q_.v_()}function Pi(n){return un(n)&&!we(n).n_()&&n.N_.size>0}function un(n){return U(n).L_.size===0}function La(n){n.Q_=void 0}async function rd(n){n.q_.set("Online")}async function id(n){n.N_.forEach((t,e)=>{Ai(n,t)})}async function sd(n,t){La(n),Pi(n)?(n.q_.M_(t),Ri(n)):n.q_.set("Unknown")}async function od(n,t,e){if(n.q_.set("Online"),t instanceof wa&&t.state===2&&t.cause)try{await async function(s,o){const u=o.cause;for(const c of o.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,u),s.N_.delete(c),s.Q_.removeTarget(c))}(n,t)}catch(r){b("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Ao(n,r)}else if(t instanceof Mn?n.Q_.Ke(t):t instanceof Ia?n.Q_.He(t):n.Q_.We(t),!e.isEqual(M.min()))try{const r=await ka(n.localStore);e.compareTo(r)>=0&&await function(o,u){const c=o.Q_.rt(u);return c.targetChanges.forEach((l,f)=>{if(l.resumeToken.approximateByteSize()>0){const _=o.N_.get(f);_&&o.N_.set(f,_.withResumeToken(l.resumeToken,u))}}),c.targetMismatches.forEach((l,f)=>{const _=o.N_.get(l);if(!_)return;o.N_.set(l,_.withResumeToken(ht.EMPTY_BYTE_STRING,_.snapshotVersion)),xa(o,l);const A=new Ft(_.target,l,f,_.sequenceNumber);Ai(o,A)}),o.remoteSyncer.applyRemoteEvent(c)}(n,e)}catch(r){b("RemoteStore","Failed to raise snapshot:",r),await Ao(n,r)}}async function Ao(n,t,e){if(!nn(t))throw t;n.L_.add(1),await an(n),n.q_.set("Offline"),e||(e=()=>ka(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{b("RemoteStore","Retrying IndexedDB access"),await e(),n.L_.delete(1),await tr(n)})}async function Ro(n,t){const e=U(n);e.asyncQueue.verifyOperationInProgress(),b("RemoteStore","RemoteStore received new credentials");const r=un(e);e.L_.add(3),await an(e),r&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await tr(e)}async function ad(n,t){const e=U(n);t?(e.L_.delete(2),await tr(e)):t||(e.L_.add(2),await an(e),e.q_.set("Unknown"))}function we(n){return n.K_||(n.K_=function(e,r,s){const o=U(e);return o.w_(),new Zl(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Eo:rd.bind(null,n),Ro:id.bind(null,n),mo:sd.bind(null,n),d_:od.bind(null,n)}),n.B_.push(async t=>{t?(n.K_.s_(),Pi(n)?Ri(n):n.q_.set("Unknown")):(await n.K_.stop(),La(n))})),n.K_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new Xt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const u=Date.now()+r,c=new Ci(t,e,u,s,o);return c.start(r),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(C.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fa(n,t){if(Dt("AsyncQueue",`${t}: ${n}`),nn(n))return new D(C.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(t){this.comparator=t?(e,r)=>t(e,r)||O.comparator(e.key,r.key):(e,r)=>O.comparator(e.key,r.key),this.keyedMap=ze(),this.sortedSet=new Z(this.comparator)}static emptySet(t){return new le(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof le)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new le;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(){this.W_=new Z(O.comparator)}track(t){const e=t.doc.key,r=this.W_.get(e);r?t.type!==0&&r.type===3?this.W_=this.W_.insert(e,t):t.type===3&&r.type!==1?this.W_=this.W_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.W_=this.W_.remove(e):t.type===1&&r.type===2?this.W_=this.W_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):L():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,r)=>{t.push(r)}),t}}class ye{constructor(t,e,r,s,o,u,c,l,f){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=u,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=f}static fromInitialDocuments(t,e,r,s,o){const u=[];return e.forEach(c=>{u.push({type:0,doc:c})}),new ye(t,e,le.emptySet(e),u,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Qn(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class hd{constructor(){this.queries=Co(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,r){const s=U(e),o=s.queries;s.queries=Co(),o.forEach((u,c)=>{for(const l of c.j_)l.onError(r)})})(this,new D(C.ABORTED,"Firestore shutting down"))}}function Co(){return new Ie(n=>la(n),Qn)}async function cd(n,t){const e=U(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.H_()&&t.J_()&&(r=2):(o=new ud,r=t.J_()?0:1);try{switch(r){case 0:o.z_=await e.onListen(s,!0);break;case 1:o.z_=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(u){const c=Fa(u,`Initialization of query '${oe(t.query)}' failed`);return void t.onError(c)}e.queries.set(s,o),o.j_.push(t),t.Z_(e.onlineState),o.z_&&t.X_(o.z_)&&Si(e)}async function ld(n,t){const e=U(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const u=o.j_.indexOf(t);u>=0&&(o.j_.splice(u,1),o.j_.length===0?s=t.J_()?0:1:!o.H_()&&t.J_()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function dd(n,t){const e=U(n);let r=!1;for(const s of t){const o=s.query,u=e.queries.get(o);if(u){for(const c of u.j_)c.X_(s)&&(r=!0);u.z_=s}}r&&Si(e)}function fd(n,t,e){const r=U(n),s=r.queries.get(t);if(s)for(const o of s.j_)o.onError(e);r.queries.delete(t)}function Si(n){n.Y_.forEach(t=>{t.next()})}var ei,So;(So=ei||(ei={})).ea="default",So.Cache="cache";class pd{constructor(t,e,r){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new ye(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const r=e!=="Offline";return(!this.options._a||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=ye.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==ei.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(t){this.key=t}}class Ba{constructor(t){this.key=t}}class md{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=q(),this.mutatedKeys=q(),this.Aa=da(t),this.Ra=new le(this.Aa)}get Va(){return this.Ta}ma(t,e){const r=e?e.fa:new Po,s=e?e.Ra:this.Ra;let o=e?e.mutatedKeys:this.mutatedKeys,u=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((_,A)=>{const R=s.get(_),S=Wn(this.query,A)?A:null,N=!!R&&this.mutatedKeys.has(R.key),x=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let k=!1;R&&S?R.data.isEqual(S.data)?N!==x&&(r.track({type:3,doc:S}),k=!0):this.ga(R,S)||(r.track({type:2,doc:S}),k=!0,(l&&this.Aa(S,l)>0||f&&this.Aa(S,f)<0)&&(c=!0)):!R&&S?(r.track({type:0,doc:S}),k=!0):R&&!S&&(r.track({type:1,doc:R}),k=!0,(l||f)&&(c=!0)),k&&(S?(u=u.add(S),o=x?o.add(_):o.delete(_)):(u=u.delete(_),o=o.delete(_)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const _=this.query.limitType==="F"?u.last():u.first();u=u.delete(_.key),o=o.delete(_.key),r.track({type:1,doc:_})}return{Ra:u,fa:r,ns:c,mutatedKeys:o}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const u=t.fa.G_();u.sort((_,A)=>function(S,N){const x=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return L()}};return x(S)-x(N)}(_.type,A.type)||this.Aa(_.doc,A.doc)),this.pa(r),s=s!=null&&s;const c=e&&!s?this.ya():[],l=this.da.size===0&&this.current&&!s?1:0,f=l!==this.Ea;return this.Ea=l,u.length!==0||f?{snapshot:new ye(this.query,t.Ra,o,u,t.mutatedKeys,l===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Po,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=q(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const e=[];return t.forEach(r=>{this.da.has(r)||e.push(new Ba(r))}),this.da.forEach(r=>{t.has(r)||e.push(new Ua(r))}),e}ba(t){this.Ta=t.Ts,this.da=q();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return ye.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class gd{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class _d{constructor(t){this.key=t,this.va=!1}}class yd{constructor(t,e,r,s,o,u){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.Ca={},this.Fa=new Ie(c=>la(c),Qn),this.Ma=new Map,this.xa=new Set,this.Oa=new Z(O.comparator),this.Na=new Map,this.La=new vi,this.Ba={},this.ka=new Map,this.qa=_e.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Ed(n,t,e=!0){const r=Ka(n);let s;const o=r.Fa.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.Da()):s=await qa(r,t,e,!0),s}async function vd(n,t){const e=Ka(n);await qa(e,t,!0,!1)}async function qa(n,t,e,r){const s=await Kl(n.localStore,At(t)),o=s.targetId,u=n.sharedClientState.addLocalQueryTarget(o,e);let c;return r&&(c=await Td(n,t,o,u==="current",s.resumeToken)),n.isPrimaryClient&&e&&Ma(n.remoteStore,s),c}async function Td(n,t,e,r,s){n.Ka=(A,R,S)=>async function(x,k,X,H){let Q=k.view.ma(X);Q.ns&&(Q=await To(x.localStore,k.query,!1).then(({documents:v})=>k.view.ma(v,Q)));const nt=H&&H.targetChanges.get(k.targetId),Pt=H&&H.targetMismatches.get(k.targetId)!=null,st=k.view.applyChanges(Q,x.isPrimaryClient,nt,Pt);return bo(x,k.targetId,st.wa),st.snapshot}(n,A,R,S);const o=await To(n.localStore,t,!0),u=new md(t,o.Ts),c=u.ma(o.documents),l=on.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),f=u.applyChanges(c,n.isPrimaryClient,l);bo(n,e,f.wa);const _=new gd(t,e,u);return n.Fa.set(t,_),n.Ma.has(e)?n.Ma.get(e).push(t):n.Ma.set(e,[t]),f.snapshot}async function Id(n,t,e){const r=U(n),s=r.Fa.get(t),o=r.Ma.get(s.targetId);if(o.length>1)return r.Ma.set(s.targetId,o.filter(u=>!Qn(u,t))),void r.Fa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ti(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&wi(r.remoteStore,s.targetId),ni(r,s.targetId)}).catch(hi)):(ni(r,s.targetId),await ti(r.localStore,s.targetId,!0))}async function wd(n,t){const e=U(n),r=e.Fa.get(t),s=e.Ma.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),wi(e.remoteStore,r.targetId))}async function ja(n,t){const e=U(n);try{const r=await $l(e.localStore,t);t.targetChanges.forEach((s,o)=>{const u=e.Na.get(o);u&&(Y(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?u.va=!0:s.modifiedDocuments.size>0?Y(u.va):s.removedDocuments.size>0&&(Y(u.va),u.va=!1))}),await za(e,r,t)}catch(r){await hi(r)}}function Vo(n,t,e){const r=U(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.Fa.forEach((o,u)=>{const c=u.view.Z_(t);c.snapshot&&s.push(c.snapshot)}),function(u,c){const l=U(u);l.onlineState=c;let f=!1;l.queries.forEach((_,A)=>{for(const R of A.j_)R.Z_(c)&&(f=!0)}),f&&Si(l)}(r.eventManager,t),s.length&&r.Ca.d_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Ad(n,t,e){const r=U(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Na.get(t),o=s&&s.key;if(o){let u=new Z(O.comparator);u=u.insert(o,gt.newNoDocument(o,M.min()));const c=q().add(o),l=new Jn(M.min(),new Map,new Z($),u,c);await ja(r,l),r.Oa=r.Oa.remove(o),r.Na.delete(t),Vi(r)}else await ti(r.localStore,t,!1).then(()=>ni(r,t,e)).catch(hi)}function ni(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Ma.get(t))n.Fa.delete(r),e&&n.Ca.$a(r,e);n.Ma.delete(t),n.isPrimaryClient&&n.La.gr(t).forEach(r=>{n.La.containsKey(r)||$a(n,r)})}function $a(n,t){n.xa.delete(t.path.canonicalString());const e=n.Oa.get(t);e!==null&&(wi(n.remoteStore,e),n.Oa=n.Oa.remove(t),n.Na.delete(e),Vi(n))}function bo(n,t,e){for(const r of e)r instanceof Ua?(n.La.addReference(r.key,t),Rd(n,r)):r instanceof Ba?(b("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,t),n.La.containsKey(r.key)||$a(n,r.key)):L()}function Rd(n,t){const e=t.key,r=e.path.canonicalString();n.Oa.get(e)||n.xa.has(r)||(b("SyncEngine","New document in limbo: "+e),n.xa.add(r),Vi(n))}function Vi(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const t=n.xa.values().next().value;n.xa.delete(t);const e=new O(G.fromString(t)),r=n.qa.next();n.Na.set(r,new _d(e)),n.Oa=n.Oa.insert(e,r),Ma(n.remoteStore,new Ft(At(ha(e.path)),r,"TargetPurposeLimboResolution",ci.oe))}}async function za(n,t,e){const r=U(n),s=[],o=[],u=[];r.Fa.isEmpty()||(r.Fa.forEach((c,l)=>{u.push(r.Ka(l,t,e).then(f=>{var _;if((f||e)&&r.isPrimaryClient){const A=f?!f.fromCache:(_=e==null?void 0:e.targetChanges.get(l.targetId))===null||_===void 0?void 0:_.current;r.sharedClientState.updateQueryState(l.targetId,A?"current":"not-current")}if(f){s.push(f);const A=Ii.Wi(l.targetId,f);o.push(A)}}))}),await Promise.all(u),r.Ca.d_(s),await async function(l,f){const _=U(l);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",A=>P.forEach(f,R=>P.forEach(R.$i,S=>_.persistence.referenceDelegate.addReference(A,R.targetId,S)).next(()=>P.forEach(R.Ui,S=>_.persistence.referenceDelegate.removeReference(A,R.targetId,S)))))}catch(A){if(!nn(A))throw A;b("LocalStore","Failed to update sequence numbers: "+A)}for(const A of f){const R=A.targetId;if(!A.fromCache){const S=_.os.get(R),N=S.snapshotVersion,x=S.withLastLimboFreeSnapshotVersion(N);_.os=_.os.insert(R,x)}}}(r.localStore,o))}async function Pd(n,t){const e=U(n);if(!e.currentUser.isEqual(t)){b("SyncEngine","User change. New user:",t.toKey());const r=await Na(e.localStore,t);e.currentUser=t,function(o,u){o.ka.forEach(c=>{c.forEach(l=>{l.reject(new D(C.CANCELLED,u))})}),o.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await za(e,r.hs)}}function Cd(n,t){const e=U(n),r=e.Na.get(t);if(r&&r.va)return q().add(r.key);{let s=q();const o=e.Ma.get(t);if(!o)return s;for(const u of o){const c=e.Fa.get(u);s=s.unionWith(c.view.Va)}return s}}function Ka(n){const t=U(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=ja.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Cd.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Ad.bind(null,t),t.Ca.d_=dd.bind(null,t.eventManager),t.Ca.$a=fd.bind(null,t.eventManager),t}class Gn{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Zn(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return jl(this.persistence,new Bl,t.initialUser,this.serializer)}Ga(t){return new Ll(Ti.Zr,this.serializer)}Wa(t){return new Hl}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Gn.provider={build:()=>new Gn};class ri{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Vo(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Pd.bind(null,this.syncEngine),await ad(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new hd}()}createDatastore(t){const e=Zn(t.databaseInfo.databaseId),r=function(o){return new Xl(o)}(t.databaseInfo);return function(o,u,c,l){return new td(o,u,c,l)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,o,u,c){return new nd(r,s,o,u,c)}(this.localStore,this.datastore,t.asyncQueue,e=>Vo(this.syncEngine,e,0),function(){return wo.D()?new wo:new Ql}())}createSyncEngine(t,e){return function(s,o,u,c,l,f,_){const A=new yd(s,o,u,c,l,f);return _&&(A.Qa=!0),A}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=U(s);b("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await an(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}ri.provider={build:()=>new ri};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):Dt("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(t,e,r,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=mt.UNAUTHENTICATED,this.clientId=Ec.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async u=>{b("FirestoreClient","Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(r,u=>(b("FirestoreClient","Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Xt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Fa(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Mr(n,t){n.asyncQueue.verifyOperationInProgress(),b("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Na(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Do(n,t){n.asyncQueue.verifyOperationInProgress();const e=await bd(n);b("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>Ro(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Ro(t.remoteStore,s)),n._onlineComponents=t}async function bd(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){b("FirestoreClient","Using user provided OfflineComponentProvider");try{await Mr(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===C.FAILED_PRECONDITION||s.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;fe("Error using user provided cache. Falling back to memory cache: "+e),await Mr(n,new Gn)}}else b("FirestoreClient","Using default OfflineComponentProvider"),await Mr(n,new Gn);return n._offlineComponents}async function Dd(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(b("FirestoreClient","Using user provided OnlineComponentProvider"),await Do(n,n._uninitializedComponentsProvider._online)):(b("FirestoreClient","Using default OnlineComponentProvider"),await Do(n,new ri))),n._onlineComponents}async function Nd(n){const t=await Dd(n),e=t.eventManager;return e.onListen=Ed.bind(null,t.syncEngine),e.onUnlisten=Id.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=vd.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=wd.bind(null,t.syncEngine),e}function kd(n,t,e={}){const r=new Xt;return n.asyncQueue.enqueueAndForget(async()=>function(o,u,c,l,f){const _=new Sd({next:R=>{_.Za(),u.enqueueAndForget(()=>ld(o,A)),R.fromCache&&l.source==="server"?f.reject(new D(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(R)},error:R=>f.reject(R)}),A=new pd(c,_,{includeMetadataChanges:!0,_a:!0});return cd(o,A)}(await Nd(n),n.asyncQueue,t,e,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ga(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Od(n,t,e){if(!e)throw new D(C.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Md(n,t,e,r){if(t===!0&&r===!0)throw new D(C.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function ko(n){if(O.isDocumentKey(n))throw new D(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function er(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":L()}function ii(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new D(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=er(n);throw new D(C.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new D(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new D(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Md("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ga((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new D(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new D(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new D(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class bi{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Oo({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new D(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new D(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Oo(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new lc;switch(r.type){case"firstParty":return new mc(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new D(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=No.get(e);r&&(b("ComponentProvider","Removing Datastore"),No.delete(e),r.terminate())}(this),Promise.resolve()}}function xd(n,t,e,r={}){var s;const o=(n=ii(n,bi))._getSettings(),u=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==u&&fe("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:u,ssl:!1})),r.mockUserToken){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=mt.MOCK_USER;else{c=Gu(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new D(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new mt(f)}n._authCredentials=new dc(new ta(c,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Ae(this.firestore,t,this._query)}}class Nt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new de(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Nt(this.firestore,t,this._key)}}class de extends Ae{constructor(t,e,r){super(t,e,ha(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Nt(this.firestore,null,new O(t))}withConverter(t){return new de(this.firestore,t,this._path)}}function Di(n,t,...e){if(n=Fn(n),Od("collection","path",t),n instanceof bi){const r=G.fromString(t,...e);return ko(r),new de(n,null,r)}{if(!(n instanceof Nt||n instanceof de))throw new D(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(G.fromString(t,...e));return ko(r),new de(n.firestore,null,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Oa(this,"async_queue_retry"),this.Vu=()=>{const r=Or();r&&b("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=t;const e=Or();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=Or();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new Xt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!nn(t))throw t;b("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(r=>{this.Eu=r,this.du=!1;const s=function(u){let c=u.message||"";return u.stack&&(c=u.stack.includes(u.message)?u.stack:u.message+`
`+u.stack),c}(r);throw Dt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=e,e}enqueueAfterDelay(t,e,r){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const s=Ci.createAndSchedule(this,t,e,r,o=>this.yu(o));return this.Tu.push(s),s}fu(){this.Eu&&L()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}class Ha extends bi{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new Mo,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Mo(t),this._firestoreClient=void 0,await t}}}function Ld(n,t){const e=typeof n=="object"?n:ec(),r=typeof n=="string"?n:"(default)",s=Xh(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=zu("firestore");o&&xd(s,...o)}return s}function Fd(n){if(n._terminated)throw new D(C.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Ud(n),n._firestoreClient}function Ud(n){var t,e,r;const s=n._freezeSettings(),o=function(c,l,f,_){return new Vc(c,l,f,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,Ga(_.experimentalLongPollingOptions),_.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new Vd(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ee(ht.fromBase64String(t))}catch(e){throw new D(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ee(ht.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new D(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new _t(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new D(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new D(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return $(this._lat,t._lat)||$(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bd=/^__.*__$/;function Ya(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw L()}}class Oi{constructor(t,e,r,s,o,u){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new Oi(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Fu({path:r,xu:!1});return s.Ou(t),s}Nu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return si(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(Ya(this.Cu)&&Bd.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class qd{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Zn(t)}Qu(t,e,r,s=!1){return new Oi({Cu:t,methodName:e,qu:r,path:_t.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function jd(n){const t=n._freezeSettings(),e=Zn(n._databaseId);return new qd(n._databaseId,!!t.ignoreUndefinedProperties,e)}function $d(n,t,e,r=!1){return Mi(e,n.Qu(r?4:3,t))}function Mi(n,t){if(Xa(n=Fn(n)))return Kd("Unsupported field value:",t,n),zd(n,t);if(n instanceof Wa)return function(r,s){if(!Ya(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(r,s){const o=[];let u=0;for(const c of r){let l=Mi(c,s.Lu(u));l==null&&(l={nullValue:"NULL_VALUE"}),o.push(l),u++}return{arrayValue:{values:o}}}(n,t)}return function(r,s){if((r=Fn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Xc(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=it.fromDate(r);return{timestampValue:Jr(s.serializer,o)}}if(r instanceof it){const o=new it(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Jr(s.serializer,o)}}if(r instanceof Ni)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ee)return{bytesValue:Aa(s.serializer,r._byteString)};if(r instanceof Nt){const o=s.databaseId,u=r.firestore._databaseId;if(!u.isEqual(o))throw s.Bu(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Ra(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof ki)return function(u,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:u.toArray().map(l=>{if(typeof l!="number")throw c.Bu("VectorValues must only contain numeric values.");return gi(c.serializer,l)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${er(r)}`)}(n,t)}function zd(n,t){const e={};return ea(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):rn(n,(r,s)=>{const o=Mi(s,t.Mu(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function Xa(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof it||n instanceof Ni||n instanceof Ee||n instanceof Nt||n instanceof Wa||n instanceof ki)}function Kd(n,t,e){if(!Xa(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const r=er(e);throw r==="an object"?t.Bu(n+" a custom object"):t.Bu(n+" "+r)}}const Gd=new RegExp("[~\\*/\\[\\]]");function Hd(n,t,e){if(t.search(Gd)>=0)throw si(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Qa(...t.split("."))._internalPath}catch{throw si(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function si(n,t,e,r,s){const o=r&&!r.isEmpty(),u=s!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(o||u)&&(l+=" (found",o&&(l+=` in field ${r}`),u&&(l+=` in document ${s}`),l+=")"),new D(C.INVALID_ARGUMENT,c+n+l)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Nt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Qd(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(xi("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Qd extends Ja{data(){return super.data()}}function xi(n,t){return typeof t=="string"?Hd(n,t):t instanceof Qa?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wd(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new D(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Li{}class Yd extends Li{}function Xd(n,t,...e){let r=[];t instanceof Li&&r.push(t),r=r.concat(e),function(o){const u=o.filter(l=>l instanceof Fi).length,c=o.filter(l=>l instanceof nr).length;if(u>1||u>0&&c>0)throw new D(C.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class nr extends Yd{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new nr(t,e,r)}_apply(t){const e=this._parse(t);return Za(t._query,e),new Ae(t.firestore,t.converter,Hr(t._query,e))}_parse(t){const e=jd(t.firestore);return function(o,u,c,l,f,_,A){let R;if(f.isKeyField()){if(_==="array-contains"||_==="array-contains-any")throw new D(C.INVALID_ARGUMENT,`Invalid Query. You can't perform '${_}' queries on documentId().`);if(_==="in"||_==="not-in"){Lo(A,_);const S=[];for(const N of A)S.push(xo(l,o,N));R={arrayValue:{values:S}}}else R=xo(l,o,A)}else _!=="in"&&_!=="not-in"&&_!=="array-contains-any"||Lo(A,_),R=$d(c,u,A,_==="in"||_==="not-in");return et.create(f,_,R)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function Jd(n,t,e){const r=t,s=xi("where",n);return nr._create(s,r,e)}class Fi extends Li{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Fi(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:It.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(s,o){let u=s;const c=o.getFlattenedFilters();for(const l of c)Za(u,l),u=Hr(u,l)}(t._query,e),new Ae(t.firestore,t.converter,Hr(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function xo(n,t,e){if(typeof(e=Fn(e))=="string"){if(e==="")throw new D(C.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ca(t)&&e.indexOf("/")!==-1)throw new D(C.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(G.fromString(e));if(!O.isDocumentKey(r))throw new D(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ro(n,new O(r))}if(e instanceof Nt)return ro(n,e._key);throw new D(C.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${er(e)}.`)}function Lo(n,t){if(!Array.isArray(n)||n.length===0)throw new D(C.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Za(n,t){const e=function(s,o){for(const u of s)for(const c of u.getFlattenedFilters())if(o.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new D(C.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new D(C.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class Zd{convertValue(t,e="none"){switch(ee(t)){case 0:return null;case 1:return t.booleanValue;case 2:return J(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(te(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw L()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return rn(t,(s,o)=>{r[s]=this.convertValue(o,e)}),r}convertVectorValue(t){var e,r,s;const o=(s=(r=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(u=>J(u.doubleValue));return new ki(o)}convertGeoPoint(t){return new Ni(J(t.latitude),J(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=di(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(Ze(t));default:return null}}convertTimestamp(t){const e=jt(t);return new it(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=G.fromString(t);Y(Da(r));const s=new tn(r.get(1),r.get(3)),o=new O(r.popFirst(5));return s.isEqual(e)||Dt(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class tf extends Ja{constructor(t,e,r,s,o,u){super(t,e,r,s,u),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new xn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(xi("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class xn extends tf{data(t={}){return super.data(t)}}class ef{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Nn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new xn(this._firestore,this._userDataWriter,r.key,r,new Nn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new D(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let u=0;return s._snapshot.docChanges.map(c=>{const l=new xn(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Nn(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:u++}})}{let u=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const l=new xn(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Nn(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,_=-1;return c.type!==0&&(f=u.indexOf(c.doc.key),u=u.delete(c.doc.key)),c.type!==1&&(u=u.add(c.doc),_=u.indexOf(c.doc.key)),{type:nf(c.type),doc:l,oldIndex:f,newIndex:_}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function nf(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return L()}}class rf extends Zd{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ee(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Nt(this.firestore,null,e)}}function Ui(n){n=ii(n,Ae);const t=ii(n.firestore,Ha),e=Fd(t),r=new rf(t);return Wd(n._query),kd(e,n._query).then(s=>new ef(t,r,n,s))}(function(t,e=!0){(function(s){Te=s})(tc),Bn(new Ye("firestore",(r,{instanceIdentifier:s,options:o})=>{const u=r.getProvider("app").getImmediate(),c=new Ha(new fc(r.getProvider("auth-internal")),new _c(r.getProvider("app-check-internal")),function(f,_){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new D(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new tn(f.options.projectId,_)}(u,s),u);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),he(Js,"4.7.3",t),he(Js,"4.7.3","esm2017")})();var sf="firebase",of="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */he(sf,of,"app");const af={apiKey:"AIzaSyBElzQG9JLG9Sf4HZLP6m3gPC-TCqB4VIM",authDomain:"jblsolutions.firebaseapp.com",projectId:"jblsolutions",storageBucket:"jblsolutions.firebasestorage.app",messagingSenderId:"96992390296",appId:"1:96992390296:web:1135d9316034eb8a6bf4ed",measurementId:"G-RF7MPKFNS5"},uf=Ko(af),Bi=Ld(uf),df=async()=>{const n=Di(Bi,"touristSites");return(await Ui(n)).docs.map(e=>({id:e.id,...e.data()}))},ff=async()=>{const n=Di(Bi,"vehicles");return(await Ui(n)).docs.map(e=>({id:e.id,...e.data()}))},pf=async n=>{const t=Di(Bi,"spots"),e=Xd(t,Jd("type","==",n));return(await Ui(e)).docs.map(s=>({id:s.id,...s.data()}))};export{df as a,pf as b,ff as f};
