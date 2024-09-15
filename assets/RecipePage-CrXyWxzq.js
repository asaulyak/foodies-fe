import{r as o,h as w,j as e,b as f,S as v,u,g as R,a as $,i as W,o as T,M as y,k as P,l as B,s as C,B as F,m as I,n as D,e as L}from"./index-DVJWuxQ1.js";import{R as k}from"./RecipeCard-DZi_1D8D.js";import{P as z}from"./PathInfo-DNhNpYL-.js";import"./index-CtieyF54.js";import"./index-2xk0Zsye.js";const M="_sectionTitle_1albf_1",U="_item_1albf_27",q="_list_1albf_49",j={sectionTitle:M,item:U,list:q},A=()=>{const[t,s]=o.useState([]),[a,l]=o.useState(null),[r,m]=o.useState(!0),p=o.useCallback(async()=>await w.get("/recipes/popular"));return o.useEffect(()=>{t.length||p().then(({data:n})=>{s(n)}).catch(n=>l(n.message)).finally(m(!1))},[p,t]),e.jsxs("section",{className:j.section,children:[e.jsx("h2",{className:j.sectionTitle,children:"Popular recipes"}),r&&e.jsx(f,{size:v.large}),a&&e.jsx("p",{children:"Something went wrong. Please try again after a few seconds."}),!!t.length&&!a&&!r&&e.jsx("ul",{className:j.list,children:t.map(n=>e.jsx(k,{recipe:n,className:j.item},n.id))})]})},H="_wrapper_1rbaw_1",J="_title_1rbaw_9",O="_list_1rbaw_29",Y="_item_1rbaw_41",Z="_imgWrapper_1rbaw_53",G="_img_1rbaw_53",K="_textWrapper_1rbaw_85",Q="_accentText_1rbaw_101",d={wrapper:H,title:J,list:O,item:Y,imgWrapper:Z,img:G,textWrapper:K,accentText:Q},V=({ingredients:t})=>e.jsxs("div",{className:d.wrapper,children:[e.jsx("h3",{className:d.title,children:"Ingredients"}),e.jsx("ul",{className:d.list,children:t.map(s=>e.jsxs("li",{className:d.item,children:[e.jsx("div",{className:d.imgWrapper,children:e.jsx("img",{className:d.img,src:s.image,alt:`Ingredient ${s.title}`,onError:({currentTarget:a})=>{a.onerror=null,a.src="https://placehold.co/60x60/BFBEBE/050505?text=Image"}})}),e.jsxs("div",{className:d.textWrapper,children:[e.jsx("p",{className:d.accentText,children:s.name}),e.jsx("p",{children:s.quantity||"quantity"})]})]},s.id))})]}),X="_wrapper_1l8aj_1",ee="_infoSection_1l8aj_9",se="_title_1l8aj_19",te="_thumb_1l8aj_41",ae="_info_1l8aj_9",ne="_description_1l8aj_85",ce="_btn_1l8aj_103",ie="_btnWrapper_1l8aj_143",re="_btnThumb_1l8aj_163",oe="_text_1l8aj_171",le="_accentText_1l8aj_183",i={wrapper:X,infoSection:ee,title:se,thumb:te,info:ae,description:ne,btn:ce,btnWrapper:ie,btnThumb:re,text:oe,accentText:le},pe="_hero_6fawz_1",me="_imgWrapper_6fawz_9",b={hero:pe,imgWrapper:me},de=({image:t,title:s})=>e.jsx("div",{className:b.hero,children:e.jsx("div",{className:b.imgWrapper,children:e.jsx("img",{className:b.img,src:t||"",alt:`Dish ${s}`,onError:({currentTarget:a})=>{a.onerror=null,a.src="https://placehold.co/400x400/BFBEBE/050505?text=Image not found"},loading:"lazy"})})}),he=({children:t,id:s="",img:a="",title:l="Dish",category:r="Dish",time:m="0",description:p="Dish",authorName:n="John",authorAvatar:x=""})=>{const c=u(R),h=$(),E=W(),S=()=>{if(!c)return h(T(y.signin));E(`/user/${s}`)};return e.jsxs("div",{className:i.wrapper,children:[e.jsx(de,{image:a,title:l}),e.jsxs("div",{children:[e.jsxs("section",{className:i.infoSection,children:[e.jsx("h2",{className:i.title,children:l}),e.jsxs("div",{className:i.thumb,children:[e.jsx("p",{className:i.info,children:r}),e.jsxs("p",{className:i.info,children:[m," min"]})]}),e.jsx("p",{className:i.description,children:p}),e.jsx("button",{type:"button",className:i.btn,onClick:S,children:e.jsxs(e.Fragment,{children:[e.jsx("span",{className:i.btnWrapper,children:e.jsx("img",{src:x||"https://www.gravatar.com/avatar",alt:"User Avatar",onError:({currentTarget:N})=>{N.onerror=null,N.src="https://placehold.co/50x50/BFBEBE/050505?text=Image"}})}),e.jsxs("span",{className:i.btnThumb,children:[e.jsx("span",{className:i.text,children:"Created by:"}),e.jsx("span",{className:i.accentText,children:n})]})]})})]}),t]})]})},xe="_title_12xgv_1",_e="_list_12xgv_19",ue="_item_12xgv_39",je="_btn_12xgv_47",_={title:xe,list:_e,item:ue,btn:je},g=["Remove from favorites","Add to favorites"],ge=({preparation:t,recipeId:s})=>{const a=$(),l=u(R),r=u(P),m=u(B),p=u(C),n=m.includes(s)?g[0]:g[1],x=c=>{if(!l||r!=null&&r.includes(401))return a(T(y.signin));if(c.target.disabled=!0,!m.includes(s)){a(I(s)).then(h=>{h.payload.type||(c.target.textContent=g[0])});return}a(D(s)).then(h=>{h.payload.type||(c.target.textContent=g[1])})};return e.jsxs("section",{className:_.wrapper,children:[e.jsx("h3",{className:_.title,children:"Recipe preparation"}),e.jsx("ul",{className:_.list,children:t.split(`
`).map((c,h)=>e.jsx("p",{className:_.item,children:c},`${Date.now()}-${h}`))}),e.jsx("div",{children:e.jsx(F,{disabled:p,onClick:x,className:_.btn,children:p?e.jsx(f,{}):n})})]})},be=({changeBreadCrumbs:t})=>{const[s,a]=o.useState(null),[l,r]=o.useState(null),[m,p]=o.useState(!0),{id:n}=L();return o.useEffect(()=>{if(s&&n===s.id)return;(async c=>await w.get(`/recipes/${c}`))(n).then(({data:c})=>{a(c),t(c.title)}).catch(c=>r(c.message)).finally(p(!1))},[n,t,s]),e.jsxs(e.Fragment,{children:[l&&e.jsx("p",{children:"Something went wrong. Please try again after a few seconds."}),m?e.jsx(f,{size:v.large}):!!s&&!l&&e.jsxs(he,{id:s.id,img:s.thumb,title:s.title,category:s.category.name,time:s.time,description:s.description,authorName:s.user.name,authorAvatar:s.user.avatar,children:[e.jsx(V,{ingredients:s.ingredients}),e.jsx(ge,{preparation:s.instructions,recipeId:s.id})]})]})},fe="_section_jz1ql_1",Ne={section:fe},ye=()=>{const[t,s]=o.useState("");return e.jsx("section",{className:Ne.section,children:e.jsxs("div",{className:"container",children:[e.jsx("h1",{className:"visually-hidden",children:"Recipe Page"}),e.jsx(z,{currentPageName:t}),e.jsx(be,{changeBreadCrumbs:s}),e.jsx(A,{})]})})};export{ye as default};
