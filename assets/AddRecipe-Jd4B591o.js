import{j as e,k as b,I as q,r as o,l as V,m as je,n as j,p as Ne,q as ve,t as ye,a as we,u as $,v as Se,b as qe,s as Ce,w as Ie,x as Te,y as ke,C as E,S as B,B as Ae,z as Fe,h as K,A as J,P as Re,D as $e,E as Ee}from"./index-CtxF-hw4.js";const Le="_form_mainTitle_1v3wr_1",De="_section_1v3wr_5",ze="_form_subTitle_1v3wr_13",Q={form_mainTitle:Le,section:De,form_subTitle:ze},Oe="_form_c4bmb_1",Pe="_form_info_c4bmb_8",Ue="_field_title_c4bmb_8",Ve="_title_c4bmb_11",Be="_wrap_field_c4bmb_25",Qe="_wrapper_c4bmb_30",He="_wrap_btn_c4bmb_36",Me="_textarea_bottom_c4bmb_41",Ge="_input_bottom_c4bmb_44",Ke="_add_ingredients_c4bmb_57",Je="_cooking_controls_c4bmb_75",We="_circle_button_c4bmb_85",Xe="_time_display_c4bmb_96",Ye="_time_positive_c4bmb_99",Ze="_time_base_c4bmb_102",et="_clear_button_c4bmb_106",tt="_wrapper_btn_c4bmb_172",i={form:Oe,form_info:Pe,field_title:Ue,title:Ve,wrap_field:Be,wrapper:Qe,wrap_btn:He,textarea_bottom:Me,input_bottom:Ge,"css-13cymwt-control":"_css-13cymwt-control_c4bmb_47","css-1nmdiq5-menu":"_css-1nmdiq5-menu_c4bmb_54",add_ingredients:Ke,cooking_controls:Je,circle_button:We,time_display:Xe,time_positive:Ye,time_base:Ze,clear_button:et,wrapper_btn:tt},st="_form_file_vd4c0_1",it="_input_file_vd4c0_16",at="_custom_input_file_vd4c0_22",nt="_label_upload_vd4c0_25",rt="_upload_description_vd4c0_34",ot="_file_info_vd4c0_39",ct="_upload_file_vd4c0_47",lt="_upload_img_block_vd4c0_53",dt="_file_error_vd4c0_65",g={form_file:st,input_file:it,custom_input_file:at,label_upload:nt,upload_description:rt,file_info:ot,upload_file:ct,upload_img_block:lt,file_error:dt},_t=({selectedImage:s,setSelectedImage:m,name:a,register:n=()=>{},errors:c})=>{const u=x=>{const p=x.target.files[0];p&&m(URL.createObjectURL(p))};return e.jsxs("div",{className:b(g.form_file,{[g.upload_file]:s}),children:[s&&e.jsx(e.Fragment,{children:e.jsx("div",{className:g.upload_img_block,children:e.jsx("img",{src:s,alt:"Uploaded Preview",width:"551"})})}),e.jsxs(e.Fragment,{children:[e.jsx("label",{htmlFor:"input-file",className:g.label_upload,children:e.jsxs("div",{className:g.file_info,children:[!s&&e.jsx(q,{iconId:"camera",width:64,height:64}),e.jsx("span",{className:g.upload_description,children:s?"Upload another photo":"Upload a photo"})]})}),e.jsx("input",{name:a,type:"file",className:g.input_file,accept:"image/*",id:"input-file",...n(a,{onChange:u})})]}),c&&e.jsx("span",{className:b([g.file_error,"error-form"]),children:c.message})]})},mt="_input_form_yiuq1_1",ut={input_form:mt},W=({type:s,className:m,parentClassName:a,value:n,name:c,placeholder:u,id:x,onChange:p,disabled:N=!1,register:d=()=>{},error:h})=>{const _=f=>{p(f.target.value)};return e.jsxs("div",{className:a,children:[e.jsx("input",{id:x,type:s,name:c,placeholder:u,className:b([ut.input_form,m]),onChange:_,disabled:N,...d(c)}),h&&e.jsx("span",{className:"error-form",children:h.message})]})},pt="_textarea_1i2sz_1",ht="_wrapper_textarea_1i2sz_29",ft="_count_1i2sz_32",gt="_count_bold_1i2sz_42",L={textarea:pt,wrapper_textarea:ht,count:ft,count_bold:gt},X=({disabled:s=!1,type:m,className:a,parentClassName:n,value:c,name:u,placeholder:x,labelFor:p,labelText:N,id:d,maxLength:h,register:_,error:f,setText:v})=>{const[y,w]=o.useState(!1),T=r=>{const A=r.target;v(r.target.value),r.target.value.length>0&&!y&&w(!0),A&&k(A)},k=r=>{r.style.height="auto",r.style.height=`${r.scrollHeight}px`};return o.useEffect(()=>{const r=document.getElementById(d);r&&k(r)},[c,d]),e.jsxs("div",{className:n,children:[e.jsx("label",{htmlFor:p,className:"form-label",children:N}),e.jsxs("div",{className:L.wrapper_textarea,children:[e.jsx("textarea",{type:m,id:d,name:u,placeholder:x,className:b([L.textarea,a]),rows:1,value:c,maxLength:h,disabled:s,..._(u,{onChange:T})}),e.jsxs("div",{className:L.count,children:[e.jsx("span",{className:b({[L.count_bold]:y&&c}),children:c.length}),"/",h]})]}),f&&e.jsx("span",{className:"error-form",children:f.message})]})},bt=s=>s.ingredients.list,xt=s=>s.areas.list,jt="_list_ingredients_e3o9d_1",Nt="_card_ingredients_e3o9d_7",vt="_image_item_e3o9d_14",yt="_card_info_e3o9d_24",wt="_name_e3o9d_39",St="_button_e3o9d_43",S={list_ingredients:jt,card_ingredients:Nt,image_item:vt,card_info:yt,name:wt,button:St},qt=({list:s,handleIngredientsDelete:m})=>e.jsx("ul",{className:S.list_ingredients,children:s.map(a=>e.jsxs("li",{className:S.card_ingredients,children:[e.jsxs("div",{className:S.image_item,children:[" ",e.jsx("img",{src:a.image,alt:a.name})]})," ",e.jsxs("div",{className:S.card_info,children:[e.jsx("div",{className:S.name,children:e.jsx("span",{children:a.name})}),e.jsx("span",{children:a.quantity})]}),e.jsx("button",{type:"button",className:S.button,onClick:()=>m(a.id),children:e.jsx(q,{iconId:"close",width:16,stroke:"#050505",height:16})})]},a.id))}),Ct=V().shape({image:je().test("required","Image is required",s=>s&&s.length>0).test("fileSize","File size is too large",s=>s&&s[0]&&s[0].size<=5e6),title:j().required("The title field is required"),description:j().required("The description field is required"),preparation:j().required("The preparation field is required"),category:V().shape({value:j().required("Category is required"),label:j()}).nullable().required("Category is required"),area:V().shape({value:j().required("Area is required"),label:j()}).nullable().required("Area is required"),time:Ne().min(1,"Time needs to be over than 0").required("Time is required"),ingredients:ve().min(1,"At least one ingredient is required").required("Ingredients are required")}),It=()=>{const{register:s,handleSubmit:m,control:a,formState:{errors:n},setValue:c,getValues:u,reset:x}=ye({resolver:Fe(Ct),defaultValues:{time:0,ingredients:[]}}),[p,N]=o.useState(null);o.useState(null);const[d,h]=o.useState(null);o.useState(null);const[_,f]=o.useState(0),[v,y]=o.useState([]),[w,T]=o.useState(null),[k,r]=o.useState({}),[A,D]=o.useState(!1),[Y,H]=o.useState(""),[Z,M]=o.useState(""),F=we(),z=$(Se),R=$(bt),O=$(xt),ee=qe(),te=$(Ce);o.useEffect(()=>{F(Ie()),F(Te()),F(ke())},[F]);const se=z==null?void 0:z.map(t=>({value:t.id,label:t.name})),ie=R==null?void 0:R.map(t=>({value:t.id,label:t.name})),ae=O==null?void 0:O.map(t=>({value:t.id,label:t.name})),ne=async t=>{const{area:l,category:C,description:U,image:me,ingredients:ue,preparation:pe,time:he,title:fe}=t,ge=me[0],G=new FormData;G.append("thumb",ge);const be=ue.map(I=>({id:I.id,quantity:I.quantity}));try{const I=await K.post("/recipes/thumb",G,{headers:{"Content-Type":"multipart/form-data"}}),xe={title:fe,instructions:pe,description:U,thumb:I.data,time:he.toString(),categoryId:C.value,areaId:l.value,ingredients:be},Tt=await K.post("/recipes",xe);J.success("New recipe added successfully!"),ee(`/user/${te.id}`)}catch{J.error("Something went wrong, please try again.")}},re=()=>{H(""),M(""),h(null),y([]),N(null),T(null),r({}),D(!1),f(0),x()},oe=()=>{f(t=>t+10)},ce=()=>{_>1&&f(t=>t-10)},le=b(i.time_display,{[i.time_positive]:_>1,[i.time_base]:_<=1}),de=()=>{if(r(w?{}:{message:"The quantity field is required"}),D(!d),d&&w&&v.findIndex(t=>t.id===d.value)===-1){const t=R.find(l=>l.id===d.value);y([...v,{...t,quantity:w}]),c("ingredients",[...u("ingredients"),{...t,quantity:w}])}},_e=t=>{const l=v.filter(C=>C.id!==t);y(C=>C.filter(U=>U.id!==t)),c("ingredients",l)},P={option:(t,l)=>({...t,backgroundColor:l.isSelected?"#bfbebe29":"#fff",color:l.isSelected?"#1a1a1a":t.color,"&:active":{backgroundColor:"#c0c0c0"},"&:hover":{backgroundColor:"#bfbebe29"}})};return e.jsxs("form",{onSubmit:m(ne),className:i.form,children:[e.jsx(_t,{name:"image",selectedImage:p,setSelectedImage:N,register:s,errors:n.image}),e.jsxs("div",{className:i.form_info,children:[e.jsx(W,{type:"text",id:"",placeholder:"The name of the recipe",parentClassName:i.field_title,className:i.title,register:s,error:n.title,name:"title"}),e.jsx(X,{name:"description",type:"text",value:Y,id:"description",placeholder:"Enter a description of the dish",maxLength:200,setText:H,register:s,error:n.description}),e.jsxs("div",{className:i.wrapper,children:[e.jsxs("div",{className:i.wrap_field,children:[e.jsxs("div",{className:"field",children:[e.jsx("p",{className:"form-label",children:"category"}),e.jsx(E,{name:"category",control:a,defaultValue:null,render:({field:t})=>e.jsx(B,{...t,options:se,placeholder:"Select a category",onChange:l=>t.onChange(l),styles:P})}),n.category&&e.jsx("span",{className:"error-form",children:n.category.message})]}),e.jsxs("div",{className:i.cooking_time,children:[e.jsx("h3",{className:"form-label",children:"COOKING TIME"}),e.jsx("div",{className:i.cooking_controls,children:e.jsx(E,{name:"time",control:a,render:({field:t})=>e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",className:i.circle_button,onClick:()=>{ce(),t.onChange(_-10)},disabled:_<=0,children:e.jsx(q,{iconId:"minus",width:24,stroke:"#050505",height:24})}),e.jsxs("span",{className:le,children:[_," min"]}),e.jsx("button",{type:"button",className:i.circle_button,onClick:()=>{oe(),t.onChange(_+10)},children:e.jsx(q,{iconId:"plus",width:24,stroke:"#050505",height:24})})]})})}),n.time&&e.jsx("span",{className:"error-form",children:n.time.message})]})]}),e.jsx("div",{className:i.wrap_field,children:e.jsxs("div",{className:"field",children:[e.jsx("p",{className:"form-label",children:"Area"}),e.jsx(E,{name:"area",control:a,defaultValue:null,render:({field:t})=>e.jsx(B,{...t,options:ae,placeholder:"Select an area",styles:P,onChange:l=>t.onChange(l)})}),n.area&&e.jsx("span",{className:"error-form",children:n.area.message})]})}),e.jsxs("div",{children:[e.jsxs("div",{className:i.wrap_field,children:[e.jsxs("div",{className:"field",children:[e.jsx("p",{className:"form-label",children:"Ingredients"}),e.jsx(B,{value:d,onChange:h,options:ie,placeholder:"Add the ingredient",styles:P}),A&&e.jsx("span",{className:"error-form",children:"Select an ingredient"})]}),e.jsx(W,{type:"text",name:"quantity",placeholder:"Enter quantity",onChange:T,error:k})]}),e.jsxs("button",{type:"button",className:i.add_ingredients,onClick:de,children:["Add ingredient",e.jsx(q,{iconId:"plus",width:22,stroke:"#050505",height:22})]}),e.jsx(E,{name:"ingredients",control:a,render:({field:t})=>e.jsxs(e.Fragment,{children:[n.ingredients&&e.jsx("span",{className:"error-form",children:n.ingredients.message}),e.jsx(qt,{list:v,handleIngredientsDelete:_e})]})})]})]}),e.jsx(X,{type:"text",name:"preparation",id:"recipe-preparation",placeholder:"Enter recipe",labelFor:"recipe-preparation",labelText:"Recipe Preparation",maxLength:200,parentClassName:i.textarea_bottom,className:i.input_bottom,value:Z,setText:M,register:s,error:n.preparation}),e.jsxs("div",{className:i.wrap_btn,children:[e.jsx("button",{className:b(i.circle_button,i.clear_button),type:"button",onClick:re,children:e.jsx(q,{iconId:"trash",width:20,stroke:"#050505",height:20})}),e.jsx(Ae,{type:"submit",variant:"color",children:"Publish",className:i.form_btn})]})]})]})},At=()=>e.jsx(e.Fragment,{children:e.jsxs("section",{className:b(Q.section,"container"),children:[e.jsx(Re,{currentPageName:"Add recipe"}),e.jsx($e,{className:Q.form_mainTitle,children:"Add recipe"}),e.jsx(Ee,{className:Q.form_subTitle,children:"Reveal your culinary art, share your favorite recipe and create gastronomic masterpieces with us."}),e.jsx(It,{})]})});export{At as default};