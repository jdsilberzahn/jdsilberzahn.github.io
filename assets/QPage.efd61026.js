import{c as u,h}from"./render.5753f336.js";import{c as o,h as g,i as s,l as p,j as d,g as y}from"./index.10fff4f4.js";var v=u({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(a,{slots:r}){const{proxy:{$q:n}}=y(),e=s(p);s(d,()=>{console.error("QPage needs to be child of QPageContainer")});const i=o(()=>{const t=(e.header.space===!0?e.header.size:0)+(e.footer.space===!0?e.footer.size:0);if(typeof a.styleFn=="function"){const l=e.isContainer.value===!0?e.containerHeight.value:n.screen.height;return a.styleFn(t,l)}return{minHeight:e.isContainer.value===!0?e.containerHeight.value-t+"px":n.screen.height===0?t!==0?`calc(100vh - ${t}px)`:"100vh":n.screen.height-t+"px"}}),c=o(()=>`q-page${a.padding===!0?" q-layout-padding":""}`);return()=>g("main",{class:c.value,style:i.value},h(r.default))}});export{v as Q};
