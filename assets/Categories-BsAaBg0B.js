import{j as e,L as _,M as h,u as x,r,a as u,s as p,f as j,c as f,b as y,S as v,d as L}from"./index-D1x4H6fY.js";import{c as b}from"./categories.selectors-w5pH7G6F.js";const E="_categories_54b5e_1",C="_text_54b5e_11",l={categories:E,text:C},w="_all_categories_card_1dvnn_1",N="_all_categories_card_text_link_1dvnn_15",S="_category_card_1dvnn_26",$="_card_image_1dvnn_53",M="_card_textbox_1dvnn_57",k="_card_text_1dvnn_57",A="_card_button_1dvnn_93",c={all_categories_card:w,all_categories_card_text_link:N,category_card:S,card_image:$,card_textbox:M,card_text:k,card_button:A},I=({category:t})=>{const{id:s,name:a,description:i}=t;return e.jsx(e.Fragment,{children:a==="ALL CATEGORIES"?e.jsx(_,{to:`categories/${s}`,className:c.all_categories_card_text_link,children:e.jsx("li",{className:c.all_categories_card,children:a})}):e.jsx(_,{to:`categories/${s}`,children:e.jsxs("li",{className:c.category_card,children:[e.jsx("img",{className:c.card_image,srcSet:`
                  /foodies-fe/categoryImages/${a}.jpg 1x,
                  /foodies-fe/categoryImages/${a}@2x.jpg 2x
                `,src:`/foodies-fe/categoryImages/${a}.png`,alt:a}),e.jsxs("div",{className:c.card_textbox,children:[e.jsx("h3",{className:c.card_text,children:a}),e.jsx("button",{className:c.card_button,children:e.jsx(h,{size:18})})]})]})})})},R="_category_list_ivvk9_1",G={category_list:R},g=t=>{const s=r.useMemo(()=>window.matchMedia(t),[t]),[a,i]=r.useState(s.matches);return r.useEffect(()=>{const o=()=>i(s.matches);return s.addEventListener("change",o),()=>s.removeEventListener("change",o)}),a},T=()=>{const t=g("(min-width: 768px)"),s=g("(min-width: 1440px)");return{md:t,lg:s}},O=()=>{const t=x(b),{md:s,lg:a}=T(),[i,o]=r.useState([]);r.useEffect(()=>{if(t){const n=[...t];o(s?[...n.slice(0,11),{id:"all",name:"ALL CATEGORIES",description:"Go on a taste journey, where every sip is a sophisticated creative chord, and every recipe is an expression of the most refined gastronomic desires."}]:[...n.slice(0,7),{id:"all",name:"ALL CATEGORIES",description:"Go on a taste journey, where every sip is a sophisticated creative chord, and every recipe is an expression of the most refined gastronomic desires."}])}},[t,s,a]);const m=n=>n.map(d=>e.jsx(I,{category:d},d.id));return e.jsx(e.Fragment,{children:e.jsx("ul",{className:G.category_list,children:i&&m(i)})})},F=()=>{const t=u(),s=x(p);return r.useEffect(()=>{t(j())},[t]),e.jsxs("div",{className:f([l.categories]),children:[e.jsxs("div",{className:l.text,children:[e.jsx(y,{children:"Categories"}),e.jsx(v,{children:"Discover a limitless world of culinary possibilities and enjoy exquisite recipes that combine taste, style and the warm atmosphere of the kitchen."})]}),s?e.jsx(L,{}):e.jsx(O,{})]})};export{F as Categories,F as default};
