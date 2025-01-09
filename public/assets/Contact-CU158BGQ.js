import{r as m,j as r,P as z,b as T,M as D}from"./index-DwKuivMp.js";let I={data:""},_=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||I,O=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,q=/\/\*[^]*?\*\/|  +/g,S=/\n+/g,h=(e,t)=>{let a="",o="",i="";for(let s in e){let n=e[s];s[0]=="@"?s[1]=="i"?a=s+" "+n+";":o+=s[1]=="f"?h(n,s):s+"{"+h(n,s[1]=="k"?"":t)+"}":typeof n=="object"?o+=h(n,t?t.replace(/([^,])+/g,l=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,c=>/&/.test(c)?c.replace(/&/g,l):l?l+" "+c:c)):s):n!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=h.p?h.p(s,n):s+":"+n+";")}return a+(t&&i?t+"{"+i+"}":i)+o},f={},C=e=>{if(typeof e=="object"){let t="";for(let a in e)t+=a+C(e[a]);return t}return e},G=(e,t,a,o,i)=>{let s=C(e),n=f[s]||(f[s]=(c=>{let d=0,p=11;for(;d<c.length;)p=101*p+c.charCodeAt(d++)>>>0;return"go"+p})(s));if(!f[n]){let c=s!==e?e:(d=>{let p,b,y=[{}];for(;p=O.exec(d.replace(q,""));)p[4]?y.shift():p[3]?(b=p[3].replace(S," ").trim(),y.unshift(y[0][b]=y[0][b]||{})):y[0][p[1]]=p[2].replace(S," ").trim();return y[0]})(e);f[n]=h(i?{["@keyframes "+n]:c}:c,a?"":"."+n)}let l=a&&f.g?f.g:null;return a&&(f.g=f[n]),((c,d,p,b)=>{b?d.data=d.data.replace(b,c):d.data.indexOf(c)===-1&&(d.data=p?c+d.data:d.data+c)})(f[n],t,o,l),n},H=(e,t,a)=>e.reduce((o,i,s)=>{let n=t[s];if(n&&n.call){let l=n(a),c=l&&l.props&&l.props.className||/^go/.test(l)&&l;n=c?"."+c:l&&typeof l=="object"?l.props?"":h(l,""):l===!1?"":l}return o+i+(n??"")},"");function j(e){let t=this||{},a=e.call?e(t.p):e;return G(a.unshift?a.raw?H(a,[].slice.call(arguments,1),t.p):a.reduce((o,i)=>Object.assign(o,i&&i.call?i(t.p):i),{}):a,_(t.target),t.g,t.o,t.k)}let F,E,M;j.bind({g:1});let x=j.bind({k:1});function L(e,t,a,o){h.p=t,F=e,E=a,M=o}function g(e,t){let a=this||{};return function(){let o=arguments;function i(s,n){let l=Object.assign({},s),c=l.className||i.className;a.p=Object.assign({theme:E&&E()},l),a.o=/ *go\d+/.test(c),l.className=j.apply(a,o)+(c?" "+c:"");let d=e;return e[0]&&(d=l.as||e,delete l.as),M&&d[0]&&M(l),F(d,l)}return i}}var R=e=>typeof e=="function",k=(e,t)=>R(e)?e(t):e,U=(()=>{let e=0;return()=>(++e).toString()})(),W=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),B=20,w=new Map,J=1e3,P=e=>{if(w.has(e))return;let t=setTimeout(()=>{w.delete(e),N({type:4,toastId:e})},J);w.set(e,t)},Q=e=>{let t=w.get(e);t&&clearTimeout(t)},A=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,B)};case 1:return t.toast.id&&Q(t.toast.id),{...e,toasts:e.toasts.map(s=>s.id===t.toast.id?{...s,...t.toast}:s)};case 2:let{toast:a}=t;return e.toasts.find(s=>s.id===a.id)?A(e,{type:1,toast:a}):A(e,{type:0,toast:a});case 3:let{toastId:o}=t;return o?P(o):e.toasts.forEach(s=>{P(s.id)}),{...e,toasts:e.toasts.map(s=>s.id===o||o===void 0?{...s,visible:!1}:s)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(s=>s.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(s=>({...s,pauseDuration:s.pauseDuration+i}))}}},V=[],$={toasts:[],pausedAt:void 0},N=e=>{$=A($,e),V.forEach(t=>{t($)})},X=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(a==null?void 0:a.id)||U()}),v=e=>(t,a)=>{let o=X(t,e,a);return N({type:2,toast:o}),o.id},u=(e,t)=>v("blank")(e,t);u.error=v("error");u.success=v("success");u.loading=v("loading");u.custom=v("custom");u.dismiss=e=>{N({type:3,toastId:e})};u.remove=e=>N({type:4,toastId:e});u.promise=(e,t,a)=>{let o=u.loading(t.loading,{...a,...a==null?void 0:a.loading});return e.then(i=>(u.success(k(t.success,i),{id:o,...a,...a==null?void 0:a.success}),i)).catch(i=>{u.error(k(t.error,i),{id:o,...a,...a==null?void 0:a.error})}),e};var Z=x`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,K=x`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Y=x`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,ee=g("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Z} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${K} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Y} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,te=x`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,ae=g("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${te} 1s linear infinite;
`,se=x`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,re=x`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,oe=g("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${se} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${re} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,ie=g("div")`
  position: absolute;
`,ne=g("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,le=x`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ce=g("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${le} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,de=({toast:e})=>{let{icon:t,type:a,iconTheme:o}=e;return t!==void 0?typeof t=="string"?m.createElement(ce,null,t):t:a==="blank"?null:m.createElement(ne,null,m.createElement(ae,{...o}),a!=="loading"&&m.createElement(ie,null,a==="error"?m.createElement(ee,{...o}):m.createElement(oe,{...o})))},me=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,pe=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,ue="0%{opacity:0;} 100%{opacity:1;}",fe="0%{opacity:1;} 100%{opacity:0;}",xe=g("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,he=g("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,ge=(e,t)=>{let a=e.includes("top")?1:-1,[o,i]=W()?[ue,fe]:[me(a),pe(a)];return{animation:t?`${x(o)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${x(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}};m.memo(({toast:e,position:t,style:a,children:o})=>{let i=e.height?ge(e.position||t||"top-center",e.visible):{opacity:0},s=m.createElement(de,{toast:e}),n=m.createElement(he,{...e.ariaProps},k(e.message,e));return m.createElement(xe,{className:e.className,style:{...i,...a,...e.style}},typeof o=="function"?o({icon:s,message:n}):m.createElement(m.Fragment,null,s,n))});L(m.createElement);j`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;function ye(){const e=t=>{t.preventDefault();const a=t.target,o=new FormData(a),i=o.get("name"),s=o.get("email"),n=o.get("message"),l=`Hello Ed Car Rental,

New message from website contact form:

Name: ${i}
Email: ${s}

Message:
${n}`;u.promise(new Promise(c=>{window.open(`https://wa.me/233244378724?text=${encodeURIComponent(l)}`,"_blank"),setTimeout(c,1e3)}),{loading:"Sending message...",success:"Message sent successfully! We will respond via WhatsApp shortly.",error:"Could not send message. Please try again."})};return r.jsx("div",{className:"py-20 bg-gray-50",children:r.jsxs("div",{className:"container mx-auto px-4",children:[r.jsx("h1",{className:"text-4xl font-bold text-center mb-12",children:"Contact Us"}),r.jsxs("div",{className:"grid md:grid-cols-2 gap-12 max-w-6xl mx-auto",children:[r.jsxs("div",{className:"space-y-8",children:[r.jsx("h2",{className:"text-2xl font-semibold mb-6",children:"Get in Touch"}),r.jsxs("div",{className:"space-y-4",children:[r.jsxs("div",{className:"flex items-center space-x-4",children:[r.jsx(z,{className:"h-6 w-6 text-blue-600"}),r.jsxs("div",{children:[r.jsx("h3",{className:"font-semibold",children:"Phone"}),r.jsxs("p",{children:[" ",r.jsx("a",{href:"https://wa.me/233123456789",target:"_blank",rel:"noopener noreferrer",className:"hover:text-blue-400",children:"+233244378724"})]})]})]}),r.jsxs("div",{className:"flex items-center space-x-4",children:[r.jsx(T,{className:"h-6 w-6 text-blue-600"}),r.jsxs("div",{children:[r.jsx("h3",{className:"font-semibold",children:"Email"}),r.jsx("p",{children:r.jsx("a",{href:"mailto:info@edcarrental.com",className:"text-blue-600 hover:text-blue-700",children:"info@edcarrental.com"})})]})]}),r.jsxs("div",{className:"flex items-center space-x-4",children:[r.jsx(D,{className:"h-6 w-6 text-blue-600"}),r.jsxs("div",{children:[r.jsx("h3",{className:"font-semibold",children:"Location"}),r.jsx("p",{children:"Accra, Ghana"})]})]})]}),r.jsxs("div",{className:"mt-8",children:[r.jsx("h3",{className:"font-semibold mb-2",children:"Business Hours"}),r.jsx("p",{children:"Monday - Friday: 8:00 AM - 6:00 PM"}),r.jsx("p",{children:"Saturday: 9:00 AM - 4:00 PM"}),r.jsx("p",{children:"Sunday: Closed"})]})]}),r.jsxs("div",{className:"bg-white p-8 rounded-lg shadow-md",children:[r.jsx("h2",{className:"text-2xl font-semibold mb-6",children:"Send us a Message"}),r.jsxs("form",{onSubmit:e,className:"space-y-4",children:[r.jsxs("div",{children:[r.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700 mb-1",children:"Name"}),r.jsx("input",{type:"text",id:"name",name:"name",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",required:!0})]}),r.jsxs("div",{children:[r.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 mb-1",children:"Email"}),r.jsx("input",{type:"email",id:"email",name:"email",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",required:!0})]}),r.jsxs("div",{children:[r.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-700 mb-1",children:"Message"}),r.jsx("textarea",{id:"message",name:"message",rows:4,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",required:!0})]}),r.jsx("button",{type:"submit",className:"w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors",children:"Send Message"})]})]})]})]})})}export{ye as default};
