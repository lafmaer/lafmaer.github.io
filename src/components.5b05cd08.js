import{u as o}from"./vue.f36acd1f.54b89f55.js";import{G as i}from"./entry.037b72d5.js";const l=n=>Object.fromEntries(Object.entries(n).filter(([,e])=>e!==void 0)),u=(n,e)=>(r,t)=>(o(()=>n({...l(r),...t.attrs},t)),()=>{var s,a;return e?(a=(s=t.slots).default)==null?void 0:a.call(s):null}),p=i({name:"Title",inheritAttrs:!1,setup:u((n,{slots:e})=>{var r,t,s;return{title:((s=(t=(r=e.default)==null?void 0:r.call(e))==null?void 0:t[0])==null?void 0:s.children)||null}})}),m=i({name:"Head",inheritAttrs:!1,setup:(n,e)=>()=>{var r,t;return(t=(r=e.slots).default)==null?void 0:t.call(r)}});export{m as H,p as T};
