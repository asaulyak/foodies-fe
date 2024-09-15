import{j as e,G as P,r as s,e as N,d as A,h as C,g as R,u as k,a as E,f as B,N as w,b as q,S as M,P as z}from"./index-D1x4H6fY.js";import{R as G}from"./RecipeCard-CpdQvhgZ.js";import{S as F}from"./react-select.esm-BVxq9Teq.js";import{c as H}from"./categories.selectors-w5pH7G6F.js";const T="_recipesSectionWrap_qpuuj_1",V="_recipesListWrap_qpuuj_16",$="_recipesListContent_qpuuj_24",D="_noRecipesPlaceholder_qpuuj_38",W={recipesSectionWrap:T,recipesListWrap:V,recipesListContent:$,noRecipesPlaceholder:D},O=({recipes:n})=>n.length?e.jsx("ul",{className:W.recipesListWrap,children:n.map(r=>e.jsx(G,{recipe:r},r.id))}):e.jsx("div",{children:"No recipes available"});function J(n){return P({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"},child:[]}]})(n)}const K="_categorySection_gg3j3_1",Q="_buttonBack_gg3j3_14",U="_categoryInfoWrap_gg3j3_24",I={categorySection:K,buttonBack:Q,categoryInfoWrap:U},X="_recipesFilterWrap_1adel_1",Y="_recipeFilterSelect_1adel_9",b={recipesFilterWrap:X,recipeFilterSelect:Y},Z=()=>{const[n,r]=s.useState([]),[d,S]=s.useState([]),[x,j]=s.useState(),[p,L]=s.useState(),[v,u]=s.useState(),[g,y]=s.useState(),[a,f]=N();s.useEffect(()=>{u(!0),y(!0);const t=async()=>{try{const{data:h}=await C.get("/ingredients");r([{value:"all",label:"All"}].concat(h.map(m=>({value:m.id,label:m.name}))))}catch{r([])}finally{u(!1)}},_=async()=>{try{const{data:h}=await C.get("/areas");S([{value:"all",label:"All"}].concat(h.map(m=>({value:m.id,label:m.name}))))}catch{S([])}finally{y(!1)}};t(),_()},[]),s.useEffect(()=>{j(a.get("ingredient")||"all"),L(a.get("area")||"all")},[a]);const i=t=>{a.set("ingredient",t.value),f(a)},o=t=>{a.set("area",t.value),f(a)},l={option:(t,_)=>({...t,backgroundColor:_.isSelected?"#bfbebe29":"#fff",color:_.isSelected?"#1a1a1a":t.color,"&:active":{backgroundColor:"#c0c0c0"},"&:hover":{backgroundColor:"#bfbebe29"}})};return v||g?e.jsx(A,{}):e.jsxs("div",{className:b.recipesFilterWrap,children:[e.jsx(F,{options:n,placeholder:"Ingredients",styles:l,onChange:i,className:b.recipeFilterSelect,defaultValue:n.find(t=>t.value===x)}),e.jsx(F,{options:d,placeholder:"Areas",styles:l,onChange:o,className:b.recipeFilterSelect,defaultValue:d.find(t=>t.value===p)})]})},ce=()=>{const{id:n}=R(),[r]=N(),[d,S]=s.useState({}),[x,j]=s.useState([]),[p,L]=s.useState({limit:10,total:0}),[v,u]=s.useState(!1),[g,y]=s.useState(null),a=k(H),f=E();return s.useEffect(()=>{a!=null&&a.length||(c,f(B()))},[f]),s.useEffect(()=>{y((a==null?void 0:a.find(i=>i.id===n))||null)},[a,n]),s.useEffect(()=>{const i=r.get("ingredient"),o=r.get("area"),l=r.get("page"),t={categoryId:n==="all"?void 0:n};i&&(t["ingredientId[]"]=i==="all"?void 0:i),o&&(t.areaId=o==="all"?void 0:o),l&&(t.page=l),t.limit=p.limit,S(t)},[n,r]),s.useEffect(()=>{const i=async()=>{u(!0);try{const{data:o}=await C.get("/recipes/search",{params:d});j(o.data),L(l=>({...l,total:o.total}))}catch{j([])}finally{u(!1)}};Object.keys(d).length&&i()},[d]),e.jsxs("section",{className:I.categorySection,children:[e.jsxs("div",{className:I.categoryInfoWrap,children:[e.jsxs(w,{to:"/",className:I.buttonBack,children:[e.jsx(J,{size:18}),e.jsx("span",{children:"Back"})]}),g&&e.jsxs(e.Fragment,{children:[e.jsx(q,{children:g.name}),e.jsx(M,{children:g.description})]})]}),e.jsxs("div",{className:W.recipesSectionWrap,children:[e.jsx(Z,{}),e.jsx("div",{className:W.recipesListContent,children:v?e.jsx(A,{}):e.jsxs(e.Fragment,{children:[e.jsx(O,{recipes:x}),e.jsx(z,{total:p.total,limit:p.limit})]})})]})]})};export{ce as Recipes,ce as default};
