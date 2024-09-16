import{a as k,j as e,I as A,H,J as $,r as d,N as J,h as _,B as L,d as K,i as Q,c as Y,b as W,S as T,E as F,e as Z,u as R,K as G,g as V,s as X,O as ee,P as se,Q as O,o as re,M as te}from"./index-DZbygbWW.js";import{P as ae}from"./Pagination-DSjoAE_W.js";import{M as U}from"./index-qAAAfd2o.js";import{M as ie,S as ne}from"./SubTitle-BpnGU2i_.js";import{P as ce}from"./PathInfo-j-mrR_nO.js";const oe="_userWrap_1tqpz_1",le="_userImgWrap_1tqpz_17",pe="_userImg_1tqpz_17",ue="_userImgBtn_1tqpz_26",me="_userName_1tqpz_41",de="_userDetails_1tqpz_47",he="_userDetailInfo_1tqpz_52",ge="_userDetailsInfoNumber_1tqpz_60",_e="_userImgInput_1tqpz_101",fe="_userImgBtnIcon_1tqpz_104",o={userWrap:oe,userImgWrap:le,userImg:pe,userImgBtn:ue,userName:me,userDetails:de,userDetailInfo:he,userDetailsInfoNumber:ge,userImgInput:_e,userImgBtnIcon:fe},Ie=({id:n,name:a,email:j,avatar:p,totalFavoritesRecipes:f,totalFollowers:I,totalFollowings:s,totalRecipes:l,isOwner:r})=>{const t=k(),u=async i=>{const m=i.target.files[0];if(!m)return;const N=new FormData;N.append("avatar",m),await t(H(N)).unwrap().then(()=>t($(n)))};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:o.userWrap,children:[e.jsxs("div",{className:o.userImgWrap,children:[e.jsx("img",{className:o.userImg,src:p,alt:""}),r?e.jsxs("div",{children:[e.jsx("input",{id:"file-upload",type:"file",className:o.userImgInput,onChange:u}),e.jsx("label",{htmlFor:"file-upload",className:o.userImgBtn,children:e.jsx(A,{iconId:"plus",className:o.userImgBtnIcon,width:17,height:16})})]}):e.jsx(e.Fragment,{})]}),e.jsx("p",{className:o.userName,children:a}),e.jsxs("ul",{className:o.userDetails,children:[e.jsxs("li",{className:o.userDetailInfo,children:["Email:",e.jsx("span",{className:o.userDetailsInfoNumber,children:j})]}),e.jsxs("li",{className:o.userDetailInfo,children:["Added recipes:",e.jsx("span",{className:o.userDetailsInfoNumber,children:l})]}),r?e.jsxs("li",{className:o.userDetailInfo,children:["Favorites:",e.jsx("span",{className:o.userDetailsInfoNumber,children:f})]}):e.jsx(e.Fragment,{}),e.jsxs("li",{className:o.userDetailInfo,children:["Followers:",e.jsx("span",{className:o.userDetailsInfoNumber,children:I})]}),r?e.jsxs("li",{className:o.userDetailInfo,children:["Following:",e.jsx("span",{className:o.userDetailsInfoNumber,children:s})]}):e.jsx(e.Fragment,{})]})]})})},xe="_containerUser_1me76_1",je="_logOutBtn_1me76_7",ve="_loaderWrapper_1me76_14",we="_userInfoButtonWrapper_1me76_26",Ne="_userWrapper_1me76_33",y={containerUser:xe,logOutBtn:je,loaderWrapper:ve,userInfoButtonWrapper:we,userWrapper:Ne},be="_tabsContainer_1u0gh_1",Be="_tabsContainerButton_1u0gh_4",Pe="_tabsList_1u0gh_17",De="_tabItem_1u0gh_21",ye="_tabItemActive_1u0gh_33",Ce="_listReceipes_1u0gh_53",C={tabsContainer:be,tabsContainerButton:Be,tabsList:Pe,tabItem:De,tabItemActive:ye,listReceipes:Ce},We="_recipePreviewItem_1snpi_1",Le="_recipePreviewImg_1snpi_7",Fe="_recipePreviewOverlay_1snpi_13",Se="_recipePreviewIcon_1snpi_19",Ee="_recipePreviewWrapperIcon_1snpi_22",Re="_recipePreviewTitle_1snpi_27",$e="_recipePreviewDescription_1snpi_34",ze="_recipePreviewBtn_1snpi_40",w={recipePreviewItem:We,recipePreviewImg:Le,recipePreviewOverlay:Fe,recipePreviewIcon:Se,recipePreviewWrapperIcon:Ee,recipePreviewTitle:Re,recipePreviewDescription:$e,recipePreviewBtn:ze},Me=({title:n,description:a,thumb:j,id:p,isOwner:f,onDelete:I,activeTab:s})=>{const[l,r]=d.useState(50),[t,u]=d.useState(13);d.useEffect(()=>{const g=()=>{const b=window.innerWidth;b<768?(r(50),u(13)):b>=768&&b<1440?(r(160),u(40)):(r(160),u(70))};return g(),window.addEventListener("resize",g),()=>{window.removeEventListener("resize",g)}},[]);const i=async()=>{try{s==="recipes"?(await _.delete(`/recipes/${p}`),I(p)):s==="favorites"&&(await _.delete(`/recipes/${p}/favorites`),I(p))}catch(g){toast.error(g.response.data.message)}},m=(a==null?void 0:a.length)>l?a.substring(0,l)+"...":a,N=(n==null?void 0:n.length)>t?n.substring(0,t)+"...":n;return e.jsxs("li",{className:w.recipePreviewItem,children:[e.jsx("img",{className:w.recipePreviewImg,src:j,alt:"Recipe",onError:({currentTarget:g})=>{g.onerror=null,g.src="https://placehold.co/100x100/BFBEBE/050505?text=Recipe"},loading:"lazy"}),e.jsxs("div",{className:w.recipePreviewOverlay,children:[e.jsx("p",{className:w.recipePreviewTitle,children:N}),e.jsx("p",{className:w.recipePreviewDescription,children:m})]}),e.jsxs("div",{className:w.recipePreviewWrapperIcon,children:[e.jsx(J,{className:w.recipePreviewBtn,to:`/recipe/${p}`,children:e.jsx(U,{})}),f?e.jsx("button",{onClick:i,className:w.recipePreviewBtn,children:e.jsx(A,{iconId:"trash",className:w.recipePreviewIcon,width:18,height:18,stroke:"#050505",children:" "})}):e.jsx(e.Fragment,{})]})]})},Oe="_userCardItem_8cljr_1",ke="_userName_8cljr_20",Ae="_userDescription_8cljr_35",Te="_userInfo_8cljr_49",Ue="_avatarWrapper_8cljr_58",qe="_recipeImageList_8cljr_72",He="_imageWrapper_8cljr_81",Je="_recipeImage_8cljr_72",Ke="_imageItem_8cljr_97",Qe="_mainBtn_8cljr_101",Ye="_secondaryBtn_8cljr_117",h={userCardItem:Oe,userName:ke,userDescription:Ae,userInfo:Te,avatarWrapper:Ue,recipeImageList:qe,imageWrapper:He,recipeImage:Je,imageItem:Ke,mainBtn:Qe,secondaryBtn:Ye},P=["follow","following"],Ze=({avatar:n,id:a,name:j,recipes:p,activeTab:f,ownsRecipes:I,onDelete:s=null,subscribe:l,handleClickNavigate:r})=>{const t=l?P[1]:P[0],u=async i=>{if(i.target.textContent===P[0]&&f==="followers"){await _.post("/users/subscribe",{subscribedTo:a}).then(m=>{i.target.textContent=P[1]});return}if(i.target.textContent===P[1]&&f==="followers"){await _.delete(`/users/unsubscribe/${a}`).then(m=>{i.target.textContent=P[0]});return}if(i.target.textContent===P[1]&&f==="following"){await _.delete(`/users/unsubscribe/${a}`).then(m=>{s(a)});return}};return e.jsxs("li",{className:h.userCardItem,children:[e.jsxs("div",{className:h.userInfo,children:[e.jsx("div",{className:h.avatarWrapper,children:e.jsx("img",{className:h.userAvatarImage,src:n||"",alt:"Avatar",onError:({currentTarget:i})=>{i.onerror=null,i.src="https://placehold.co/85x85/BFBEBE/050505?text=Avatar"},loading:"lazy"})}),e.jsxs("div",{className:h.userDetails,children:[e.jsxs("h3",{className:h.userName,children:[j,"r"]}),e.jsx("p",{className:h.userDescription,children:`Own recipes: ${I}`}),e.jsx(L,{onClick:u,className:h.mainBtn,children:t})]})]}),e.jsx("ul",{className:h.recipeImageList,children:p.map(i=>e.jsx("li",{className:h.imageItem,children:e.jsx("div",{className:h.imageWrapper,children:e.jsx("img",{className:h.recipeImage,src:i.thumb,alt:"Recipe img",onError:({currentTarget:m})=>{m.onerror=null,m.src="https://placehold.co/100x100/BFBEBE/050505?text=Recipe"},loading:"lazy"},i.id)})},i.id))}),e.jsx(L,{onClick:()=>r(a),className:h.secondaryBtn,children:e.jsx(U,{})})]})},Ge=({isOwner:n,id:a,totalRecipes:j,totalFollowers:p,totalFollowings:f,totalFavoritesRecipes:I})=>{const[s,l]=d.useState("recipes"),[r,t]=d.useState([]),[u,i]=d.useState(!0),[m]=K(),N=Q(),[g,b]=d.useState([]);let v=m.get("page")||1;d.useEffect(()=>{t([]);const c=async()=>{i(!0);try{let x;n?s==="following"||s==="favorites"?x=(await _.get(`/users/${s}/`)).data:x=(await _.get(`/users/${s}/${a}`,{params:{limit:9,page:v}})).data:x=(await _.get(`/users/${s}/${a}`)).data,t(x?x.data:[])}catch(x){F.error(x.response.data.message),t([])}finally{i(!1)}};(async x=>{try{const{data:B}=await _.get("/users/following");B&&b(B.data)}catch(B){F.error(B.response)}})(),c()},[s,v,a,n,p]),d.useEffect(()=>{l("recipes")},[a]);const z=c=>{l("recipes"),N(`/user/${c}`)},D=c=>{t([]),l(c)},M={recipes:n?"My Recipes":"Recipes",favorites:"My Favorite",followers:"Followers",following:"Following"},S=c=>{t(E=>E.filter(x=>x.id!==c))},q=n?["recipes","favorites","followers","following"]:["recipes","followers"];return e.jsxs("div",{className:C.tabsContainer,children:[e.jsx("div",{className:C.tabsContainerButton,children:e.jsx("div",{className:C.tabsList,children:q.map(c=>e.jsx("button",{className:`${C.tabItem} ${s===c?C.tabItemActive:""}`,onClick:()=>D(c),children:M[c]},c))})}),e.jsx("div",{className:Y("list-items",C.listReceipes),children:u?e.jsx(W,{size:T.medium}):(r==null?void 0:r.length)===0?e.jsx("p",{children:"Nothing has been added to your recipes list yet. Please browse our recipes and add your favorites for easy access in the future."}):e.jsx("ul",{children:r==null?void 0:r.map(c=>s==="recipes"||s==="favorites"?e.jsx(Me,{...c,isOwner:n,onDelete:S,activeTab:s},c.id):e.jsx(Ze,{...c,isOwner:n,onDelete:S,activeTab:s,subscribe:g.some(E=>E.id===c.id),handleClickNavigate:z},c.id))})}),e.jsx(ae,{total:s==="recipes"?j:s==="favorites"?I:s==="followers"?p:f,limit:9})]})},ts=()=>{const[n,a]=d.useState(!1),[j,p]=d.useState(!1),[f,I]=d.useState(!1),{id:s}=Z(),l=k(),r=R(G),t=R(V),u=R(X),i=R(ee);d.useEffect(()=>{a(u)},[u]);const m=v=>{l(re(v))},N=async()=>{try{a(!0),await _.post("/users/subscribe/",{subscribedTo:s}),p(!0)}catch(v){F.error(v.response.data.message)}finally{a(!1),l($(s))}},g=async()=>{try{a(!0),await _.delete(`/users/unsubscribe/${s}`),p(!1)}catch(v){F.error(v.response.data.message)}finally{a(!1),l($(s))}},b=()=>{m(te.logout)};return d.useEffect(()=>{s&&l($(s)),t||l(se()),(async z=>{try{const{data:D}=await _.get("/users/following");D&&I(D.data);const M=f.some(S=>S.id===z);p(M)}catch(D){F.error(D.response)}})(s)},[l,s,t]),e.jsx(e.Fragment,{children:e.jsxs("div",{className:"container",children:[e.jsx(ce,{currentPageName:"Profile"}),e.jsx(ie,{children:" Profile"}),e.jsx(ne,{children:"Reveal your culinary art, share your favorite recipe and create gastronomic masterpieces with us."}),e.jsxs("div",{className:y.userWrapper,children:[e.jsxs("div",{className:y.userInfoButtonWrapper,children:[i||u?e.jsx("div",{className:y.loaderWrapper,children:e.jsx(W,{size:T.large})}):e.jsx(Ie,{...r,isOwner:(t==null?void 0:t.id)===s}),(t==null?void 0:t.id)===s?e.jsx(L,{onClick:b,className:y.logOutBtn,children:"Log Out"}):j?e.jsx(L,{onClick:g,className:y.logOutBtn,children:n?e.jsx(W,{color:O.white}):"Following"}):e.jsx(L,{onClick:N,className:y.logOutBtn,children:n?e.jsx(W,{color:O.white}):"Follow"})]}),u?e.jsx(W,{}):e.jsx(Ge,{totalRecipes:r==null?void 0:r.totalRecipes,totalFollowers:r==null?void 0:r.totalFollowers,totalFollowings:r==null?void 0:r.totalFollowings,totalFavoritesRecipes:r==null?void 0:r.totalFavoritesRecipes,isOwner:(t==null?void 0:t.id)===s,id:s})]})]})})};export{ts as default};
