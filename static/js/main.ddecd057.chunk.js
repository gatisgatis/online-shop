(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{17:function(e,t,c){e.exports={wrapper:"image-slider_wrapper__3_YlA",slide:"image-slider_slide__D2m8w",arrowsWrapper:"image-slider_arrowsWrapper__3DSA6",arrow:"image-slider_arrow__2y2-S",text:"image-slider_text__2TWN4",dot:"image-slider_dot__12QjG",dots:"image-slider_dots__i91DA"}},18:function(e,t,c){},19:function(e,t,c){e.exports={nav:"nav_nav__3uTRR",navItem:"nav_navItem__2mG-k"}},25:function(e,t,c){e.exports={button:"button_button__wTONY",small:"button_small__2A972",large:"button_large__3hGYV","extra-large":"button_extra-large__1sNCN",secondary:"button_secondary__2BwWd",special:"button_special__Qhvbz",extra:"button_extra__hMMVi"}},26:function(e,t,c){e.exports={wrapper:"card-cart_wrapper__3MSb-",imgWrapper:"card-cart_imgWrapper__k5H4v",img:"card-cart_img__UTFtp"}},27:function(e,t,c){e.exports={wrapper:"dwopdown-filter_wrapper__wS3bX"}},28:function(e,t,c){e.exports={input:"input_input__2UVQe",small:"input_small__ZOZhp",large:"input_large__3_Qnb",extraLarge:"input_extraLarge__nai5A",secondary:"input_secondary__3l53B",special:"input_special__1bSqc",extra:"input_extra__1zPzb"}},37:function(e,t,c){e.exports={slide:"slide_slide__3lkF4",text:"slide_text__3zif7"}},45:function(e,t,c){e.exports={slides:"slides_slides__1sL6_"}},47:function(e,t,c){e.exports={input:"search_input__31tFu"}},61:function(e,t,c){},74:function(e,t,c){},76:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(2),s=c.n(n),r=c(20),i=c.n(r),o=c(3),l=(c(61),c(9)),d=c(6),j=function(){return Object(a.jsx)("section",{children:Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("div",{className:"row center-xs",children:Object(a.jsxs)("div",{className:"col-xs-12",children:[Object(a.jsx)("h1",{children:"This is about Page"}),Object(a.jsx)("br",{}),Object(a.jsx)("p",{children:"Nothing to see here so far"})]})})})})},b=c(25),u=c.n(b),h=function(e){var t=e.size,c=void 0===t?"normal":t,n=e.isTypeButton,s=void 0===n||n,r=e.color,i=void 0===r?"primary":r,o=e.onClick,l=e.children;return Object(a.jsx)("button",{className:"".concat(u.a.button," ").concat(u.a[c]," ").concat(u.a[i]),type:s?"button":"submit",onClick:o,children:l})},O=function(){var e=Object(d.g)();return Object(a.jsx)("section",{children:Object(a.jsx)("div",{className:"container dsdasd",children:Object(a.jsx)("div",{className:"row center-xs margin-bottom--24",children:Object(a.jsxs)("div",{className:"col-xs-12",children:[Object(a.jsx)("h1",{children:"HOME"}),Object(a.jsx)(h,{onClick:function(){return e.push("/catalog")},children:"Apskat\u012bt pied\u0101v\u0101jumu"})]})})})})},x=c(12),p=function(){var e=Object(n.useState)(""),t=Object(x.a)(e,2);t[0],t[1];return Object(a.jsx)("section",{children:Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("div",{className:"row center-xs",children:Object(a.jsxs)("div",{className:"col-xs-12",children:[Object(a.jsx)("h1",{children:"Contacts page"}),Object(a.jsx)("br",{}),Object(a.jsx)("p",{children:"Nothing to see here so far"})]})})})})},m=function(){return Object(a.jsxs)("section",{children:[Object(a.jsx)("h1",{children:"PAGE NOT FOUND"}),";",Object(a.jsx)("img",{src:"https://doyouconvert.com/wp-content/uploads/2018/04/404_Error.jpg",alt:"not found"})]})},g="CHANGE_ITEM_COUNT",v="DELETE_ITEMS",f="EDIT_ITEM",_="ADD_ITEMS",N=function(e,t){return{type:g,id:e,countSelected:t}},w=c(26),y=c.n(w),k=function(e){var t=e.item,c=t.id,n=t.name,s=t.price,r=t.discount,i=t.images,l=t.countAvailable,d=t.countSelected,j=Object(o.b)(),b=s-r*s/100;return Object(a.jsxs)("div",{className:y.a.wrapper,children:[Object(a.jsx)("div",{onClick:function(){j(N(c,0))},children:"X"}),Object(a.jsx)("div",{className:y.a.imgWrapper,children:Object(a.jsx)("img",{className:y.a.img,src:i[0],alt:n})}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:n}),Object(a.jsxs)("h6",{children:["(",c,")"]})]}),Object(a.jsxs)("div",{children:[Object(a.jsxs)("h3",{children:[s.toFixed(2)," EUR"]}),Object(a.jsxs)("h3",{children:[b.toFixed(2)," EUR"]})]}),Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{type:"button",onClick:function(){j(N(c,d-1))},disabled:d<=1,children:"-"}),Object(a.jsx)("h3",{children:d}),Object(a.jsx)("button",{type:"button",onClick:function(){j(N(c,d+1))},disabled:d>=l,children:"+"})]}),Object(a.jsxs)("div",{children:["Pieejams: ",l]})]}),Object(a.jsxs)("h3",{children:[(b*d).toFixed(2)," EUR"]})]})},C=function(){var e=Object(o.c)((function(e){return e.items.filter((function(e){return e.countSelected>0}))}));return Object(a.jsx)("section",{children:Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"col-xs-12",children:[Object(a.jsx)("h1",{children:"GROZS"}),e.map((function(e){return Object(a.jsx)("div",{className:"margin-bottom--10",children:Object(a.jsx)(k,{item:e})},e.id)})),Object(a.jsxs)("h2",{children:["Summa kop\u0101: ",e.reduce((function(e,t){return e+(t.price-t.price*t.discount/100)*t.countSelected}),0).toFixed(2)," EUR"]})]})})})})},S=c(44),T=c.n(S),A=c(46),E=c(5),I=c(16),R=c(77),D=c(38),F=c(45),P=c.n(F),U=function(e){var t=e.translate,c=e.animationTime,n=e.width,s=e.children;return Object(a.jsx)("div",{className:P.a.slides,style:{transform:"translateX(-".concat(t,"%)"),transition:"transform ease-out ".concat(c,"s"),width:"".concat(n,"%")},children:s})},G=c(37),L=c.n(G),W=function(e){var t=e.image,c=e.showText,n=e.textColor,s=e.textText,r=e.imageFitCover,i=e.textTitle,o=e.width;return console.log(t),Object(a.jsx)("div",{className:L.a.slide,style:{backgroundImage:"url(".concat(t,")"),width:"".concat(o,"%"),backgroundSize:r?"cover":"contain"},children:c&&Object(a.jsxs)("div",{className:L.a.text,style:{backgroundColor:"light"===n?"rgba(0,0,0,0.3)":"rgba(255,255,255,0.3",color:"light"===n?"white":"black"},children:[Object(a.jsx)("h1",{children:i}),Object(a.jsx)("h3",{children:s})]})})},K=Object(n.memo)(W),z=c(17),M=c.n(z),H=function(e){var t=e.images,c=e.textColor,s=void 0===c?"light":c,r=e.textTitles,i=void 0===r?Object(I.a)(t):r,o=e.textTexts,l=void 0===o?Object(I.a)(t):o,d=e.showText,j=void 0!==d&&d,b=e.showArrows,u=void 0===b||b,h=e.showDots,O=void 0===h||h,p=e.animationTime,m=void 0===p?.5:p,g=e.imageFitCover,v=void 0===g||g,f=e.timeBetweenSlides,_=void 0===f?3:f,N=e.autoPlay,w=void 0===N||N,y=Object(n.useState)({index:0,translate:0}),k=Object(x.a)(y,2),C=k[0],S=k[1],T=Object(n.useRef)();Object(n.useEffect)((function(){return w&&(T.current=setTimeout((function(){A()}),1e3*_)),function(){clearTimeout(T.current)}}),[C.index,w,_]);var A=function(){C.index>=t.length-1?S(Object(E.a)(Object(E.a)({},C),{},{translate:0,index:0})):S(Object(E.a)(Object(E.a)({},C),{},{translate:100*(C.index+1)/t.length,index:C.index+1}))};return Object(a.jsxs)("div",{className:M.a.wrapper,children:[u&&Object(a.jsxs)("div",{className:M.a.arrowsWrapper,children:[Object(a.jsx)(D.a,{className:M.a.arrow,onClick:function(){C.index<=0?S(Object(E.a)(Object(E.a)({},C),{},{translate:100*(t.length-1)/t.length,index:t.length-1})):S(Object(E.a)(Object(E.a)({},C),{},{translate:100*(C.index-1)/t.length,index:C.index-1}))}}),Object(a.jsx)(D.b,{onClick:A,className:M.a.arrow})]}),O&&Object(a.jsx)("div",{className:M.a.dots,children:t.map((function(e,c){return Object(a.jsx)("span",{onClick:function(){return function(e){S(Object(E.a)(Object(E.a)({},C),{},{index:e,translate:100*e/t.length}))}(c)},className:M.a.dot,style:{backgroundColor:C.index===c?"black":"white"}},Object(R.a)())}))}),Object(a.jsx)(U,{translate:C.translate,animationTime:m,width:100*t.length,children:t.map((function(e,c){return Object(a.jsx)(K,{image:e,showText:j,width:100/t.length,textColor:s,textText:l[c],textTitle:i[c],imageFitCover:v},Object(R.a)())}))})]})},B=c(8),V=c.n(B),Z=function(e){var t=e.item,c=t.id,s=t.name,r=t.price,i=t.discount,l=t.category,j=t.images,b=t.likes,u=t.countAvailable,O=t.countSelected,p=Object(n.useState)(!1),m=Object(x.a)(p,2),g=m[0],v=m[1],f=Object(o.b)(),_=Object(d.g)(),w=function(){_.push("/item/".concat(c))},y=function(e,t){var c="\u20ac".concat(e.toFixed(2)),a="";return t>0&&(c="\u20ac".concat((e-e*t/100).toFixed(2)),a="\u20ac".concat(e.toFixed(2))),[a,c]}(r,i),k=Object(x.a)(y,2),C=k[0],S=k[1];return Object(a.jsxs)("div",{className:V.a.wrapper,children:[Object(a.jsx)(T.a,{isOpen:g,onRequestClose:function(){return v(!1)},style:{overlay:{zIndex:3}},children:Object(a.jsx)(H,{images:j,imageFitCover:!1})}),u<0&&Object(a.jsx)("div",{className:V.a.soldOut,children:"Izp\u0101rdots"}),Object(a.jsx)("div",{className:V.a.imgWrapper,children:Object(a.jsx)("img",{src:j[0],alt:s,className:V.a.image,onClick:function(){v(!0)}})}),Object(a.jsxs)("div",{className:V.a.contentWrapper,children:[Object(a.jsx)("h3",{onClick:w,className:V.a.title,children:s}),Object(a.jsx)("h5",{children:l}),Object(a.jsxs)("div",{className:V.a.prices,children:[Object(a.jsx)("span",{className:V.a.fullPrice,children:C})," ",Object(a.jsx)("span",{className:V.a.discountPrice,children:S})]}),Object(a.jsx)("div",{className:V.a.btnWrapper,children:Object(a.jsx)(h,{onClick:function(){t.countSelected>0?f(N(c,0)):f(N(c,1))},color:"primary",children:O>0?"Iz\u0146emt no groza":"Pievienot grozam"})}),Object(a.jsxs)("div",{className:V.a.footer,children:[Object(a.jsxs)("div",{className:V.a.reviews,children:[Object(a.jsx)(A.a,{})," ",b]}),Object(a.jsx)("div",{onClick:w,className:V.a.readMore,children:"Vair\u0101k Info"})]})]})]})},q="CHANGE_ACTIVE_CATEGORIES",J="CHANGE_SORT_ORDER",Y="CHANGE_SEARCH_KEY",X=c(27),Q=c.n(X),$=function(e){var t=e.options,c=Object(o.c)((function(e){return e.filter.sortOrder})),n=Object(o.b)(),s=function(e){n(function(e){return{type:J,payload:{sortOrder:e}}}(e.target.value))};return Object(a.jsx)("div",{className:Q.a.wrapper,children:Object(a.jsxs)("label",{htmlFor:"sort_by",className:Q.a.label,children:["K\u0100RTOT P\u0112C:",Object(a.jsx)("select",{className:Q.a.select,name:"sort_by",id:"sort_by",value:c,onChange:function(e){return s(e)},children:t.map((function(e,t){return Object(a.jsx)("option",{value:e,children:e},t.toString())}))})]})})},ee=c(18),te=c.n(ee),ce=function(e){var t=e.options,c=Object(o.c)((function(e){return e.filter.categories})),n=Object(o.b)(),r=function(e){if(c.includes(e.toUpperCase())){var t=c.findIndex((function(t){return t===e.toUpperCase()}));c.splice(t,1)}else c.push(e.toUpperCase());n({type:q,payload:{categories:c}})};return Object(a.jsxs)("div",{className:te.a.wrapper,children:[Object(a.jsx)("div",{className:te.a.title,children:"ATLASI P\u0112C KATEGORIJAS"}),Object(a.jsx)("div",{className:te.a.checkboxesWrapper,children:t.map((function(e){return Object(a.jsxs)(s.a.Fragment,{children:[Object(a.jsx)("input",{className:te.a.checkbox,type:"checkbox",name:e,id:e,value:e,checked:c.includes(e.toUpperCase()),onChange:function(){return r(e)}}),Object(a.jsx)("label",{className:te.a.label,htmlFor:e,children:e.toUpperCase()})]},Object(R.a)())}))})]})},ae=c(47),ne=c.n(ae),se=function(){var e=Object(o.c)((function(e){return e.filter.searchKey})),t=Object(o.b)();return Object(a.jsx)("input",{className:ne.a.input,type:"text",placeholder:"Mekl\u0113t...",value:e,onChange:function(e){return t(function(e){return{type:Y,payload:{searchKey:e}}}(e.target.value))}})},re=["https://theinpaint.com/images/example-1-2.jpg","https://miro.medium.com/max/11344/1*32h8ts3A-7XNr6A4Js87ng.jpeg","https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg","https://html5box.com/html5gallery/images/Swan_1024.jpg"],ie=["TE IR KAUT KAS LABS","ELINA NEKO NESAPROT","KO TAGAD DARIT TE","KAPEC TE IR TAS"],oe="Popul\u0101r\u0101k\u0101s",le="S\u0101kot no L\u0113t\u0101k\u0101s",de="S\u0101kot no D\u0101rg\u0101k\u0101s",je="Jaun\u0101k\u0101s",be="Atlaide",ue="Alfab\u0113ta sec\u012bb\u0101",he=[je,oe,le,de,be,ue],Oe=function(){var e=Object(o.c)((function(e){return e.filter.categories})),t=Object(o.c)((function(e){return e.items})),c=Object(o.c)((function(e){return e.filter.searchKey})),s=Object(o.c)((function(e){return e.filter.sortOrder})),r=Object(n.useRef)(["VISAS"]);t.forEach((function(e){r.current.includes(e.category.toUpperCase())||r.current.push(e.category.toUpperCase())}));switch(s){case oe:t.sort((function(e,t){return t.likes>e.likes?1:-1}));break;case je:t.sort((function(e,t){return t.addedDate>e.addedDate?1:-1}));break;case le:t.sort((function(e,t){return t.price<e.price?1:-1}));break;case de:t.sort((function(e,t){return t.price>e.price?1:-1}));break;case ue:t.sort((function(e,t){return e.name.toUpperCase()>t.name.toUpperCase()?1:-1}));break;case be:t.sort((function(e,t){return t.discount>e.discount?1:-1}))}return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("section",{className:"margin-bottom--20",children:Object(a.jsx)("div",{style:{paddingTop:"30%",position:"relative"},children:Object(a.jsx)(H,{images:re,textTitles:ie,textTexts:ie,showText:!0})})}),Object(a.jsx)("section",{children:Object(a.jsx)("div",{className:"container margin-bottom--20",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"col-xs-12 col-md-3 center-xs",children:[Object(a.jsx)("div",{children:"S\u0101kums/Katalogs"}),Object(a.jsx)(se,{})]}),Object(a.jsx)("div",{className:"col-xs-12 col-md-6 center-xs",children:Object(a.jsx)(ce,{options:r.current})}),Object(a.jsx)("div",{className:"col-xs-12 col-md-3 center-xs",children:Object(a.jsx)($,{options:he})})]})})}),Object(a.jsx)("section",{children:Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("div",{className:"row ",children:t.map((function(t){return r=t.category,(0===e.length||!!e.includes("VISAS")||!!e.includes(r.toUpperCase()))&&(n=t.name,s=t.category,c.length<3||!!n.toLowerCase().includes(c.toLowerCase())||!!s.toLowerCase().includes(c.toLowerCase()))&&Object(a.jsx)("div",{className:"col-xs-12 col-sm-4 col-md-3 margin-bottom--10",children:Object(a.jsx)(Z,{item:t})},t.id);var n,s,r}))})})})]})},xe=function(){var e=Object(d.h)().id,t=Object(o.c)((function(t){return t.items.find((function(t){return t.id===e}))}));return Object(a.jsx)("section",{children:Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("div",{className:"row center-xs margin-bottom--24",children:Object(a.jsx)("div",{className:"col-xs-12",children:JSON.stringify(t,null,5)})})})})},pe=function(){var e=Object(o.c)((function(e){return e.user}));return Object(a.jsx)("section",{children:Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("div",{className:"row center-xs",children:Object(a.jsxs)("div",{className:"col-xs-12",children:[Object(a.jsx)("h3",{children:e.name}),Object(a.jsx)("h2",{children:e.userName}),Object(a.jsx)("h3",{children:e.status}),Object(a.jsx)("img",{src:e.image,alt:"",width:"200px",height:"200px"})]})})})})},me=c(48),ge=c(19),ve=c.n(ge),fe=function(){return Object(a.jsxs)("nav",{className:ve.a.nav,children:[Object(a.jsx)(l.c,{className:ve.a.navItem,to:"/",children:"Home"}),Object(a.jsx)(l.c,{className:ve.a.navItem,to:"/about",children:"About"}),Object(a.jsx)(l.c,{className:ve.a.navItem,to:"/catalog",children:"Catalog"}),Object(a.jsx)(l.c,{className:ve.a.navItem,to:"/contacts",children:"Contacts"})]})},_e=(c(74),function(){var e=Object(o.c)((function(e){return e.user.name.substring(0,20)})),t=Object(o.c)((function(e){return e.user.status})),c=Object(o.c)((function(e){var t=0;return e.items.forEach((function(e){e.countSelected>0&&(t+=1)})),t})),n=Object(d.g)();Object(o.b)();return Object(a.jsx)("header",{children:Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"row middle-xs",children:[Object(a.jsx)("div",{className:"col-xs-12 col-md-2 center-xs",children:Object(a.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhfnTblmmE1jwRst04xRHrp78vFiCb5WE_vw&usqp=CAU",alt:"",width:"100"})}),Object(a.jsx)("div",{className:"col-md-7 col-xs-12 center-xs",children:Object(a.jsx)(fe,{})}),Object(a.jsxs)("div",{className:"col-md-3 col-xs-12 center-xs ",children:[Object(a.jsxs)(l.b,{to:"/cart",children:[Object(a.jsx)(me.a,{}),c>0&&"(".concat(c,")")]}),"guest"===t?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{children:[Object(a.jsx)(h,{size:"small",color:"secondary",onClick:function(){return n.push("/register")},children:"Sign Up"}),Object(a.jsx)(h,{size:"small",color:"secondary",onClick:function(){return n.push("/log-in")},children:"Log In"})]}),Object(a.jsx)("p",{children:"Ielogjies vai re\u0123istr\u0113jies, lai ieg\u016btu papildus funkcionalit\u0101ti"})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(h,{size:"small",color:"secondary",children:"Log Out"}),Object(a.jsxs)("p",{children:["Sveiks, ",e,", apskati savu konta informa\u010diju"," ",Object(a.jsx)(l.b,{to:"/user",children:"\u0160EIT"})]})]})]})]})})})}),Ne=function(){return Object(a.jsx)("div",{children:"REGISTER HERE"})},we=function(){return Object(a.jsx)("section",{children:Object(a.jsx)(Ne,{})})},ye=function(e){var t=Object(n.useState)(e),c=Object(x.a)(t,2),a=c[0],s=c[1];return[a,{value:a,onChange:function(e){s(e.target.value)}},function(){s(e)}]},ke=c(28),Ce=c.n(ke),Se=function(e){var t=e.value,c=e.onChange,s=e.placeholder,r=void 0===s?"":s,i=e.id,o=e.required,l=void 0!==o&&o,d=e.list,j=e.type,b=void 0===j?"text":j,u=e.size,h=void 0===u?"normal":u,O=e.color,x=void 0===O?"primary":O,p=e.focus,m=void 0!==p&&p,g=Object(n.useRef)(null);return Object(n.useEffect)((function(){var e;m&&(null===(e=g.current)||void 0===e||e.focus())}),[]),Object(a.jsx)("input",{className:"".concat(Ce.a.input," ").concat(Ce.a[h]," ").concat(Ce.a[x]),list:d,type:b,onChange:function(e){return c(e)},placeholder:r,value:t,id:i,required:l,ref:g})},Te=function(){var e=ye(""),t=Object(x.a)(e,3),c=(t[0],t[1]),n=(t[2],ye("")),s=Object(x.a)(n,3),r=(s[0],s[1]);s[2],Object(o.b)();return Object(a.jsx)("section",{children:Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("div",{className:"row center-xs",children:Object(a.jsxs)("div",{className:"col-xs-12 col-md-4",children:[Object(a.jsx)("h1",{children:"Log In"}),Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault()},children:[Object(a.jsx)("h5",{children:"Lietot\u0101jv\u0101rds"}),Object(a.jsx)(Se,Object(E.a)(Object(E.a)({type:"text"},c),{},{placeholder:"Lietot\u0101jv\u0101rds"})),Object(a.jsx)("h5",{children:"Parole"}),Object(a.jsx)(Se,Object(E.a)(Object(E.a)({type:"password"},r),{},{placeholder:"Parole"})),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)(h,{children:"Ielogoties"})]})]})})})})},Ae=function(){return Object(a.jsx)("section",{children:Object(a.jsx)(Te,{})})},Ee=function(){return Object(a.jsxs)(l.a,{children:[Object(a.jsx)(_e,{}),Object(a.jsxs)(d.d,{children:[Object(a.jsx)(d.b,{exact:!0,path:"/",children:Object(a.jsx)(O,{})}),Object(a.jsx)(d.b,{path:"/about",children:Object(a.jsx)(j,{})}),Object(a.jsx)(d.b,{path:"/contacts",children:Object(a.jsx)(p,{})}),Object(a.jsx)(d.b,{path:"/log-in",children:Object(a.jsx)(Ae,{})}),Object(a.jsx)(d.b,{path:"/register",children:Object(a.jsx)(we,{})}),Object(a.jsx)(d.b,{path:"/catalog",children:Object(a.jsx)(Oe,{})}),Object(a.jsx)(d.b,{path:"/cart",children:Object(a.jsx)(C,{})}),Object(a.jsx)(d.b,{path:"/user",children:Object(a.jsx)(pe,{})}),Object(a.jsx)(d.b,{path:"/item/:id",children:Object(a.jsx)(xe,{})}),Object(a.jsxs)(d.b,{path:"/",children:[Object(a.jsx)(d.a,{to:"/404-page"}),Object(a.jsx)(m,{})]})]})]})},Ie=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,78)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))},Re=c(15),De=c(49),Fe=c(23),Pe=[{id:Object(R.a)(),name:"Skapis",price:100,countAvailable:5,countSelected:0,specs:{color:"black",weight:40,volume:50},discount:10,images:["https://www.jysk.lv/media/catalog/product/cache/image/beff4985b56e3afdbeabfc89641a4582/1/c/1c9fb51e6a2e1367594a395f623a49410d268f87___1_701-176-1029.jpg","https://www.jysk.lv/media/catalog/product/cache/image/beff4985b56e3afdbeabfc89641a4582/3/8/384512a7fcb5712833c21e962f5a95052b10b073___1_701-176-1025.jpg"],category:"Skapis",likes:6,addedDate:421512},{id:Object(R.a)(),name:"Kr\u0113sls",price:15,countAvailable:20,countSelected:0,specs:{color:"black",weight:20,volume:50},discount:20,images:["https://www.24a.lv/img/Products/full_8e0e4f9eaa5f4bc4f005292c058e2bbe.jpg"],category:"Kr\u0113sls",likes:2,addedDate:42151242},{id:Object(R.a)(),name:"Atp\u016btas kr\u0113sls \u0112RTAIS Jaukums",price:60,countAvailable:20,countSelected:0,specs:{color:"black",weight:20,volume:50},discount:0,images:["https://www.jysk.lv/media/catalog/product/cache/image/beff4985b56e3afdbeabfc89641a4582/3/2/322ad002a0b95dbe0a8ac9123b340a358663ef12___1_718-196-1040.jpg","https://naktsmebeles.lv/wp-content/uploads/2019/08/harry_kresls_sanskats.jpg","https://www.24a.lv/img/Products/full_8e0e4f9eaa5f4bc4f005292c058e2bbe.jpg","https://www.jysk.lv/media/catalog/product/cache/image/beff4985b56e3afdbeabfc89641a4582/2/9/29816b70679771c711bc6f5103ed395b31b6d6bd___1_708-186-1020.jpg"],category:"Kr\u0113sls",likes:42,addedDate:4211512},{id:Object(R.a)(),name:"Televizors",price:120,countAvailable:20,countSelected:0,specs:{color:"black",weight:20,volume:50},discount:40,images:["https://images.samsung.com/is/image/samsung/africa-en-fhdtv-n5300-global-ua49n5300arxxa-frontblack-153239974?$720_576_PNG$"],category:"TV",likes:11,addedDate:5421512},{id:Object(R.a)(),name:"Iphone 13 pro",price:1800,countAvailable:20,countSelected:1,specs:{color:"red",weight:20,volume:50},discount:5,images:[],category:"S\u016bds",likes:0,addedDate:7421512}],Ue="CHANGE_THEME",Ge="CHANGE_TIMEZONE",Le="CHANGE_SHOW_ADS",We={theme:"light",timeZone:2,showAds:!0},Ke="CHANGE_USER_INFO",ze="USER_LOG_IN",Me="USER_LOG_OUT",He={id:Object(R.a)(),name:"Guest",password:"",createdAt:Date.now(),birthDate:Date.now(),status:"guest",bonusMoney:0,image:"https://i1.sndcdn.com/avatars-000324217627-ffdyh1-t500x500.jpg",email:"",userName:""},Be={categories:[],searchKey:"",sortOrder:"Jaun\u0101k\u0101s"},Ve=Object(Re.combineReducers)({items:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:var c=e.findIndex((function(e){return e.id===t.id}));if(c<0)return e;var a=Object(Fe.cloneDeep)(e);return a[c].countSelected=t.countSelected,a;case _:var n=Object(Fe.cloneDeep)(e);return n.push.apply(n,Object(I.a)(t.items)),n;case v:var s=Object(Fe.cloneDeep)(e);return t.ids.forEach((function(t){var c=e.findIndex((function(e){return e.id===t}));c>=0&&s.splice(c,1)})),s;case f:var r=e.findIndex((function(e){return e.id===t.item.id}));if(r<0)return e;var i=Object(Fe.cloneDeep)(e);return i[r]=t.item,i;default:return e}},settings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ue:var c=Object(E.a)({},e);return c.theme=t.payload.theme,c;case Ge:var a=Object(E.a)({},e);return a.timeZone=t.payload.timeZone,a;case Le:var n=Object(E.a)({},e);return n.showAds=!n.showAds,n;default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:He,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ze:return t.payload.user;case Me:case Ke:return He;default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q:var c=Object(E.a)({},e);return c.categories=Object(I.a)(t.payload.categories),c;case J:var a=Object(E.a)({},e);return a.sortOrder=t.payload.sortOrder,a;case Y:var n=Object(E.a)({},e);return n.searchKey=t.payload.searchKey,n;default:return e}}}),Ze=Object(Re.createStore)(Ve,Object(De.composeWithDevTools)(Object(Re.applyMiddleware)()));i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(o.a,{store:Ze,children:Object(a.jsx)(Ee,{})})}),document.getElementById("root")),Ie()},8:function(e,t,c){e.exports={wrapper:"card-catalog_wrapper__1_rrA",soldOut:"card-catalog_soldOut__3xj7S",imgWrapper:"card-catalog_imgWrapper__26Og2",image:"card-catalog_image__2p1V7",contentWrapper:"card-catalog_contentWrapper__1qriW",title:"card-catalog_title__2yY3g",prices:"card-catalog_prices__2pBLv",fullPrice:"card-catalog_fullPrice__2I88d",discountPrice:"card-catalog_discountPrice__3eXRZ",btnWrapper:"card-catalog_btnWrapper__3FE2y",footer:"card-catalog_footer__Tg-_k",reviews:"card-catalog_reviews__2cC8X",readMore:"card-catalog_readMore__3KZ7_",modal:"card-catalog_modal__2-75j"}}},[[76,1,2]]]);
//# sourceMappingURL=main.ddecd057.chunk.js.map