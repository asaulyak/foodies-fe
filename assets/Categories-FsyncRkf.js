import{j as e,L as _,c as m,u as x,r as c,a as j,s as u,f as p,b as f,S as y}from"./index-DVJWuxQ1.js";import{M as w,S as b}from"./SubTitle-7BmjQob0.js";import{c as v}from"./categories.selectors-w5pH7G6F.js";import{M as L}from"./index-2xk0Zsye.js";const E="_categories_54b5e_1",C="_text_54b5e_11",l={categories:E,text:C},N="_all_categories_card_17jew_1",S="_all_categories_card_text_link_17jew_15",M="_category_card_17jew_26",$="_card_image_17jew_38",k="_card_textbox_17jew_43",I="_card_text_17jew_43",A="_card_button_17jew_79",r={all_categories_card:N,all_categories_card_text_link:S,category_card:M,card_image:$,card_textbox:k,card_text:I,card_button:A},R=({category:t})=>{const{id:s,name:a}=t;return e.jsx(e.Fragment,{children:s==="all"?e.jsx("li",{className:r.all_categories_card,children:e.jsx(_,{to:`categories/${s}`,className:r.all_categories_card_text_link,children:a})}):e.jsxs("li",{className:m(r.category_card),children:[e.jsx(_,{to:`categories/${s}`,children:e.jsx("img",{className:r.card_image,srcSet:`
                  /foodies-fe/categoryImages/${a}.jpg 1x,
                  /foodies-fe/categoryImages/${a}@2x.jpg 2x
                `,src:`/foodies-fe/categoryImages/${a}.jpg`,alt:a})}),e.jsxs("div",{className:r.card_textbox,children:[e.jsx("h3",{className:r.card_text,children:a}),e.jsx("button",{className:r.card_button,children:e.jsx(L,{size:18})})]})]})})},G="_category_list_ivvk9_1",T={category_list:G},g=t=>{const s=c.useMemo(()=>window.matchMedia(t),[t]),[a,o]=c.useState(s.matches);return c.useEffect(()=>{const i=()=>o(s.matches);return s.addEventListener("change",i),()=>s.removeEventListener("change",i)}),a},O=()=>{const t=g("(min-width: 768px)"),s=g("(min-width: 1440px)");return{md:t,lg:s}},Q=()=>{const t=x(v),{md:s,lg:a}=O(),[o,i]=c.useState([]);c.useEffect(()=>{if(t){const n=[...t];i(s?[...n.slice(0,11),{id:"all",name:"ALL CATEGORIES",description:"Go on a taste journey, where every sip is a sophisticated creative chord, and every recipe is an expression of the most refined gastronomic desires."}]:[...n.slice(0,7),{id:"all",name:"ALL CATEGORIES",description:"Go on a taste journey, where every sip is a sophisticated creative chord, and every recipe is an expression of the most refined gastronomic desires."}])}},[t,s,a]);const h=n=>n.map(d=>e.jsx(R,{category:d},d.id));return e.jsx(e.Fragment,{children:e.jsx("ul",{className:T.category_list,children:o&&h(o)})})},q=()=>{const t=j(),s=x(u);return c.useEffect(()=>{t(p())},[t]),e.jsxs("div",{className:m([l.categories]),children:[e.jsxs("div",{className:l.text,children:[e.jsx(w,{children:"Categories"}),e.jsx(b,{children:"Discover a limitless world of culinary possibilities and enjoy exquisite recipes that combine taste, style and the warm atmosphere of the kitchen."})]}),s?e.jsx(f,{size:y.large}):e.jsx(Q,{})]})};export{q as Categories,q as default};
