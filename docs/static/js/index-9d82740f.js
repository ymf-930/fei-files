import{b as A,a as L,A as f,o as x,k as w,j as h,c as v,g as z,F as I,N as $,e as q,f as B,E as j,t as U,q as E,G as M}from"./vendor-61b03770.js";import{U as P,M as J,i as V}from"./chunk-f-ui-one-263ccbef.js";(function(){const b=document.createElement("link").relList;if(b&&b.supports&&b.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))d(i);new MutationObserver(i=>{for(const g of i)if(g.type==="childList")for(const o of g.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&d(o)}).observe(document,{childList:!0,subtree:!0});function m(i){const g={};return i.integrity&&(g.integrity=i.integrity),i.referrerPolicy&&(g.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?g.credentials="include":i.crossOrigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function d(i){if(i.ep)return;i.ep=!0;const g=m(i);fetch(i.href,g)}})();function l(r){return`https://ymf930.gitee.io/fei-files${r}`}const k=r=>l(`/background/${r}`),F=[{id:"bg1",name:"背景1",src:k("bg1.jpg")},{id:"bg2",name:"背景2",src:k("bg2.jpg")},{id:"bg3",name:"背景3",src:k("bg3.png")},{id:"bg4",name:"背景4",src:k("bg4.png")},{id:"bg5",name:"背景5",src:k("bg5.png")},{id:"bg6",name:"背景6",src:k("bg6.png")}],n=r=>l(`/box/${r}`),R=[{id:"box1",name:"框1",src:n("box1.png"),border:{width:"32px 37px",outset:"0",slice:"32 37 fill",repeat:"stretch"}},{id:"box2",name:"框2",src:n("box2.png"),border:{width:"65px 740px 88px 560px",outset:"0",slice:"65 740 88 561 fill",repeat:"repeat"}},{id:"box3",name:"框3",src:n("box3.png"),border:{width:"101px 690px 35px 693px",outset:"0",slice:"101 690 35 693 fill",repeat:"repeat"}},{id:"box4",name:"框4",src:n("box4.png"),border:{width:"423px 606px 410px 652px",outset:"0",slice:"423 606 410 652 fill",repeat:"repeat"}},{id:"box5",name:"框5",src:n("box5.png"),border:{width:"220px 664px 460px 500px",outset:"0",slice:"220 664 460 500 fill",repeat:"repeat"}},{id:"box6",name:"框6",src:n("box6.png"),border:{width:"288px 500px 272px 680px",outset:"0",slice:"288 500 272 680 fill",repeat:"repeat"}},{id:"box7",name:"框7",src:n("box7.png"),border:{width:"71px 23px",outset:"0",slice:"71 23 fill",repeat:"stretch"}},{id:"box8",name:"框8",src:n("box8.png"),border:{width:"17px 24px 18px 19px",outset:"0",slice:"17 24 18 19 fill",repeat:"repeat"}},{id:"box9",name:"框9",src:n("box9.png"),border:{width:"56px 4px 76px 393px",outset:"0",slice:"56 4 76 393 fill",repeat:"repeat"}},{id:"box10",name:"框10",src:n("box10.png"),border:{width:"152px 27px 127px 354px",outset:"0",slice:"152 27 127 354 fill",repeat:"repeat"}},{id:"box11",name:"框11",src:n("box11.png"),border:{width:"15px 11px 16px 8px",outset:"0",slice:"15 11 16 8 fill",repeat:"repeat"}},{id:"box12",name:"框12",src:n("box12.png"),border:{width:"29px 107px 109px 16px",outset:"0",slice:"29 107 109 16 fill",repeat:"repeat"}},{id:"box13",name:"框13",src:n("box13.png"),border:{width:"45px 103px 51px 29px",outset:"0",slice:"45 103 51 29 fill",repeat:"repeat"}},{id:"box14",name:"框14",src:n("box14.png"),border:{width:"46px 305px 117px 33px",outset:"0",slice:"46 305 117 33 fill",repeat:"repeat"}},{id:"box15",name:"框15",src:n("box15.png"),border:{width:"14px 100px",outset:"0",slice:"14 100",repeat:"stretch"}},{id:"box16",name:"框16",src:n("box16.png"),border:{width:"14px 14px",outset:"0",slice:"14 14",repeat:"stretch"}},{id:"box17",name:"框17",src:n("box17.png"),border:{width:"4px 805px 281px 730px",outset:"0",slice:"4 805 281 730 fill",repeat:"repeat"}},{id:"box18",name:"框18",src:n("box18.png"),border:{width:"71px 23px",outset:"0",slice:"71 23",repeat:"stretch"}},{id:"box19",name:"框19",src:n("box19.png"),border:{width:"24px",outset:"0",slice:"24 fill",repeat:"stretch"}},{id:"box20",name:"框20",src:n("box20.png"),border:{width:"30px",outset:"0",slice:"30 fill",repeat:"stretch"}},{id:"box21",name:"框21",src:n("box21.png"),border:{width:"24px",outset:"0",slice:"24 fill",repeat:"stretch"}},{id:"box22",name:"框22",src:n("box22.png"),border:{width:"10px",outset:"0",slice:"10 fill",repeat:"stretch"}},{id:"box23",name:"框23",src:n("box23.png"),border:{width:"30px",outset:"0",slice:"30 fill",repeat:"stretch"}},{id:"box24",name:"框24",src:n("box24.png"),border:{width:"10px 120px 10px 170px",outset:"0",slice:"10 120 10 170 fill",repeat:"stretch"}},{id:"box25",name:"框25",src:n("box25.png"),border:{width:"10px 2px 2px 130px",outset:"0",slice:"10 2 2 130 fill",repeat:"stretch"}},{id:"box26",name:"框26",src:n("box26.png"),border:{width:"10px",outset:"0",slice:"10 fill",repeat:"stretch"}},{id:"box27",name:"框27",src:n("box27.png"),border:{width:"20px",outset:"0",slice:"20 fill",repeat:"stretch"}},{id:"box28",name:"框28",src:n("box28.png"),border:{width:"12px",outset:"0",slice:"12 fill",repeat:"stretch"}},{id:"box29",name:"框29",src:n("box29.png"),border:{width:"16px",outset:"0",slice:"16 fill",repeat:"stretch"}},{id:"box30",name:"框30",src:n("box30.png"),border:{width:"10px",outset:"0",slice:"10 fill",repeat:"stretch"}},{id:"box31",name:"框31",src:n("box31.png"),border:{width:"5px",outset:"0",slice:"5 fill",repeat:"stretch"}},{id:"box32",name:"框32",src:n("box32.png"),border:{width:"10px",outset:"0",slice:"10 fill",repeat:"stretch"}},{id:"box33",name:"框33",src:n("box33.png"),border:{width:"30px",outset:"0",slice:"30 fill",repeat:"stretch"}},{id:"box34",name:"框34",src:n("box34.png"),border:{width:"5px",outset:"0",slice:"5 fill",repeat:"stretch"}},{id:"box35",name:"框35",src:n("box35.png"),border:{width:"20px",outset:"0",slice:"20 fill",repeat:"stretch"}},{id:"box36",name:"框36",src:n("box36.png"),border:{width:"1px",outset:"0",slice:"1 fill",repeat:"stretch"}},{id:"box37",name:"框37",src:n("box37.png"),border:{width:"6px",outset:"0",slice:"6 fill",repeat:"stretch"}},{id:"box38",name:"框38",src:n("box38.png"),border:{width:"14px",outset:"0",slice:"14 fill",repeat:"stretch"}},{id:"box39",name:"框39",src:n("box39.png"),border:{width:"14px",outset:"0",slice:"14 fill",repeat:"stretch"}},{id:"box40",name:"框40",src:n("box40.png"),border:{width:"14px",outset:"0",slice:"14 fill",repeat:"stretch"}},{id:"box41",name:"框41",src:n("box41.png"),border:{width:"14px",outset:"0",slice:"14 fill",repeat:"stretch"}},{id:"box42",name:"框42",src:n("box42.png"),border:{width:"14px",outset:"0",slice:"14 fill",repeat:"stretch"}},{id:"box43",name:"框43",src:n("box43.png"),border:{width:"14px",outset:"0",slice:"14 fill",repeat:"stretch"}},{id:"box44",name:"框44",src:n("box44.png"),border:{width:"14px",outset:"0",slice:"14 fill",repeat:"stretch"}},{id:"box45",name:"框45",src:n("box45.png"),border:{width:"20px",outset:"0",slice:"20 fill",repeat:"stretch"}}],S=r=>l(`/loading/${r}`),D=[{id:"lading1",name:"lading1",src:S("loading1.gif")},{id:"lading2",name:"lading2",src:S("loading2.gif")}],e=r=>l(`/decoration/${r}`),G=[{id:"decoration1",name:"装饰器1",src:e("gif1.gif"),css:{"background-position":"left bottom"}},{id:"decoration2",name:"装饰器2",src:e("gif2.gif"),css:{"background-position":"center"}},{id:"decoration3",name:"装饰器3",src:e("gif3.gif"),css:{"background-position":"right top"}},{id:"decoration4",name:"装饰器4",src:e("gif4.gif"),css:{"background-position":"right bottom"}},{id:"decoration5",name:"装饰器5",src:e("gif5.gif"),css:{"background-position":"left top"}},{id:"decoration6",name:"装饰器6",src:e("gif6.gif"),css:{"background-position":"center"}},{id:"decoration7",name:"装饰器7",src:e("gif7.gif"),css:{"background-size":"contain","background-position":"left top"}},{id:"decoration8",name:"装饰器8",src:e("gif8.gif"),css:{"background-size":"contain","background-position":"left top"}},{id:"decoration9",name:"装饰器9",src:e("gif9.gif"),css:{"background-size":"contain","background-position":"left top"}},{id:"decoration10",name:"装饰器10",src:e("gif10.gif"),css:{"background-size":"contain","background-position":"left top"}},{id:"decoration11",name:"装饰器11",src:e("gif11.png"),css:{"background-position":"center","background-size":"contain"}},{id:"decoration12",name:"装饰器12",src:e("gif12.png"),css:{"background-position":"center","background-size":"contain"}},{id:"decoration13",name:"装饰器13",src:e("gif13.png"),css:{"background-position":"center","background-size":"contain"}},{id:"decoration14",name:"装饰器14",src:e("gif14.png"),css:{"background-position":"center","background-size":"contain"}},{id:"decoration15",name:"装饰器15",src:e("gif15.png"),css:{"background-position":"center","background-size":"contain"}},{id:"decoration16",name:"装饰器16",src:e("gif16.png"),css:{"background-position":"center","background-size":"contain"}},{id:"decoration17",name:"装饰器17",src:e("gif17.png"),css:{"background-position":"center","background-size":"contain"}},{id:"decoration18",name:"装饰器18",src:e("gif18.png"),css:{"background-position":"center","background-size":"contain"}},{id:"decoration19",name:"装饰器19",src:e("gif19.png"),css:{"background-position":"center","background-size":"contain"}},{id:"decoration20",name:"装饰器20",src:e("gif20.png"),css:{"background-position":"center","background-size":"contain"}},{id:"decoration21",name:"装饰器21",src:e("gif21.png"),css:{"background-position":"center","background-size":"contain"}},{id:"decoration22",name:"装饰器22",src:e("gif22.png"),css:{"background-position":"center","background-size":"contain"}},{id:"decoration23",name:"装饰器23",src:e("gif23.png"),css:{"background-position":"center","background-size":"contain"}},{id:"decoration24",name:"装饰器24",src:e("gif24.png"),css:{"background-position":"center","background-size":"contain"}},{id:"decoration25",name:"装饰器25",src:e("gif25.png"),css:{"background-position":"center","background-size":"contain"}},{id:"decoration26",name:"装饰器26",src:e("gif26.png"),css:{"background-position":"center","background-size":"contain"}},{id:"decoration27",name:"装饰器27",src:e("gif27.png"),css:{"background-position":"center","background-size":"contain"}},{id:"decoration28",name:"装饰器28",src:e("gif28.png"),css:{"background-position":"center","background-size":"contain"}},{id:"decoration29",name:"装饰器29",src:e("gif29.png"),css:{"background-position":"center","background-size":"contain"}},{id:"decoration30",name:"装饰器30",src:e("gif30.png"),css:{"background-position":"center","background-size":"contain"}},{id:"decoration31",name:"装饰器31",src:e("gif31.png"),css:{"background-position":"center","background-size":"contain"}},{id:"decoration32",name:"装饰器32",src:e("gif32.png"),css:{"background-position":"center","background-size":"contain"}},{id:"decoration33",name:"装饰器33",src:e("gif33.png"),css:{"background-position":"center","background-size":"contain"}},{id:"decoration34",name:"装饰器34",src:e("gif34.png"),css:{"background-position":"center","background-size":"contain"}},{id:"decoration35",name:"装饰器35",src:e("gif35.png"),css:{"background-position":"center","background-size":"contain"}},{id:"decoration36",name:"装饰器36",src:e("gif36.png"),css:{"background-position":"center","background-size":"contain"}},{id:"decoration37",name:"装饰器37",src:e("gif37.png"),css:{"background-position":"center","background-size":"contain"}},{id:"decoration38",name:"装饰器38",src:e("gif38.png"),css:{"background-position":"center","background-size":"contain"}},{id:"decoration39",name:"装饰器39",src:e("gif39.png"),css:{"background-position":"center","background-size":"contain"}},{id:"decoration40",name:"装饰器40",src:e("gif40.png"),css:{"background-position":"center","background-size":"contain"}},{id:"decoration41",name:"装饰器41",src:e("gif41.png"),css:{"background-position":"center","background-size":"contain"}},{id:"decoration42",name:"装饰器42",src:e("gif42.png"),css:{"background-position":"center","background-size":"contain"}},{id:"decoration43",name:"装饰器43",src:e("gif43.png"),css:{"background-position":"center","background-size":"contain"}},{id:"decoration44",name:"装饰器44",src:e("gif44.png"),css:{"background-position":"center","background-size":"contain"}},{id:"decoration45",name:"装饰器45",src:e("gif45.png"),css:{"background-position":"center","background-size":"contain"}},{id:"decoration46",name:"装饰器46",src:e("gif46.png"),css:{"background-position":"center","background-size":"contain"}},{id:"decoration47",name:"装饰器47",src:e("gif47.png"),css:{"background-position":"center","background-size":"contain"}},{id:"decoration48",name:"装饰器48",src:e("gif48.png"),css:{"background-position":"center","background-size":"contain"}},{id:"decoration49",name:"装饰器49",src:e("gif49.png"),css:{"background-position":"center","background-size":"contain"}},{id:"decoration50",name:"装饰器50",src:e("gif50.png"),css:{"background-position":"center","background-size":"contain"}}],t=r=>l(`/header/${r}`),K=[{id:"header1",name:"头部1",src:t("header1.png"),attr:{w:1920,h:103},css:{"background-position":"center","background-size":"contain"}},{id:"header2",name:"头部2",src:t("header2.png"),attr:{w:1920,h:90},css:{"background-position":"center","background-size":"contain"}},{id:"header3",name:"头部3",src:t("header3.png"),attr:{w:1920,h:80},css:{"background-position":"center","background-size":"contain"}},{id:"header4",name:"头部4",src:t("header4.png"),attr:{w:1920,h:126},css:{"background-position":"center","background-size":"contain"}},{id:"header5",name:"头部5",src:t("header5.png"),attr:{w:1920,h:254},css:{"background-position":"center","background-size":"contain"}},{id:"header6",name:"头部6",src:t("header6.png"),attr:{w:1920,h:76},css:{"background-position":"center","background-size":"contain"}},{id:"header7",name:"头部7",src:t("header7.png"),attr:{w:1920,h:101},css:{"background-position":"center","background-size":"contain"}},{id:"header8",name:"头部8",src:t("header8.png"),attr:{w:1876,h:58},css:{"background-position":"center","background-size":"contain"}},{id:"header9",name:"头部9",src:t("header9.png"),attr:{w:1920,h:122},css:{"background-position":"center","background-size":"contain"}},{id:"header10",name:"头部10",src:t("header10.png"),attr:{w:947,h:58},css:{"background-position":"center","background-size":"contain"}},{id:"header11",name:"头部11",src:t("header11.png"),attr:{w:1920,h:27},css:{"background-position":"center","background-size":"contain"}},{id:"header12",name:"头部12",src:t("header12.png"),attr:{w:5115,h:115},css:{"background-position":"center","background-size":"contain"}},{id:"header13",name:"头部13",src:t("header13.png"),attr:{w:1920,h:76},css:{"background-position":"center","background-size":"contain"}},{id:"header14",name:"头部14",src:t("header14.png"),attr:{w:1876,h:58},css:{"background-position":"center","background-size":"contain"}},{id:"header15",name:"头部15",src:t("header15.png"),attr:{w:361,h:29},css:{"background-position":"center","background-size":"contain"}},{id:"header16",name:"头部16",src:t("header16.png"),attr:{w:671,h:71},css:{"background-position":"center","background-size":"contain"}},{id:"header17",name:"头部17",src:t("header17.png"),attr:{w:428,h:18},css:{"background-position":"center","background-size":"contain"}},{id:"header18",name:"头部18",src:t("header18.png"),attr:{w:1320,h:80},css:{"background-position":"center","background-size":"contain"}},{id:"header19",name:"头部19",src:t("header19.png"),attr:{w:311,h:60},css:{"background-position":"center","background-size":"contain"}},{id:"header20",name:"头部20",src:t("header20.png"),attr:{w:466,h:48},css:{"background-position":"center","background-size":"contain"}}],c=r=>l(`/widget/${r}`),T=[{id:"earth1",name:"地球",src:c("earth1.png"),css:{"background-position":"center","background-size":"contain"}},{id:"widget1",name:"部件1",src:c("widget1.png"),css:{"background-position":"center","background-size":"contain"}},{id:"widget2",name:"部件2",src:c("widget2.png"),css:{"background-position":"center","background-size":"auto"}},{id:"widget3",name:"部件3",src:c("widget3.png"),css:{"background-position":"center","background-size":"auto"}},{id:"widget4",name:"部件4",src:c("widget4.png"),css:{"background-position":"center","background-size":"auto"}},{id:"widget5",name:"部件5",src:c("widget5.png"),css:{"background-position":"center","background-size":"contain"}},{id:"widget6",name:"部件6",src:c("widget6.png"),css:{"background-position":"center","background-size":"contain"}},{id:"widget7",name:"部件7",src:c("widget7.png"),css:{"background-position":"center","background-size":"contain"}},{id:"widget8",name:"部件8",src:c("widget8.png"),css:{"background-position":"center","background-size":"auto"}},{id:"widget9",name:"部件9",src:c("widget9.png"),css:{"background-position":"center","background-size":"auto"}},{id:"widget10",name:"部件10",src:c("widget10.png"),css:{"background-position":"center","background-size":"auto"}},{id:"widget11",name:"部件11",src:c("widget11.png"),css:{"background-position":"center","background-size":"contain"}},{id:"widget12",name:"部件12",src:c("widget12.png"),css:{"background-position":"center","background-size":"contain"}},{id:"widget13",name:"部件13",src:c("widget13.png"),css:{"background-position":"center","background-size":"contain"}},{id:"widget14",name:"部件14",src:c("widget14.png"),css:{"background-position":"center","background-size":"auto"}},{id:"widget15",name:"部件15",src:c("widget15.png"),css:{"background-position":"center","background-size":"auto"}}],p=r=>l(`/bg/${r}`),Z=[{id:"bg0",name:"背景0",src:p("bg0.jpg")},{id:"bg1",name:"背景1",src:p("bg1.jpg")},{id:"bg2",name:"背景2",src:p("bg2.jpg")},{id:"bg3",name:"背景3",src:p("bg3.jpg")},{id:"bg4",name:"背景4",src:p("bg4.jpg")},{id:"bg5",name:"背景5",src:p("bg5.jpg")},{id:"bg6",name:"背景6",src:p("bg6.jpg")},{id:"bg7",name:"背景7",src:p("bg7.jpg")},{id:"bg8",name:"背景8",src:p("bg8.jpg")},{id:"bg9",name:"背景9",src:p("bg9.jpg")},{id:"bg10",name:"背景10",src:p("bg10.jpg")},{id:"bg11",name:"背景11",src:p("bg11.jpg")}],s=r=>l(`/avatar/${r}`),H=[{id:"avatar",name:"avatar",src:s("avatar.jpeg")},{id:"avatar00",name:"avatar00",src:s("avatar00.jpeg")},{id:"avatar01",name:"avatar01",src:s("avatar01.jpeg")},{id:"avatar02",name:"avatar02",src:s("avatar02.jpeg")},{id:"avatar03",name:"avatar03",src:s("avatar03.jpg")},{id:"avatar04",name:"avatar04",src:s("avatar04.jpeg")},{id:"avatar05",name:"avatar05",src:s("avatar05.jpeg")},{id:"avatar06",name:"avatar06",src:s("avatar06.jpeg")},{id:"avatar07",name:"avatar07",src:s("avatar07.jpeg")},{id:"avatar08",name:"avatar08",src:s("avatar08.jpeg")},{id:"avatar09",name:"avatar09",src:s("avatar09.jpeg")},{id:"avatar10",name:"avatar10",src:s("avatar10.jpeg")},{id:"avatar11",name:"avatar11",src:s("avatar11.jpeg")},{id:"avatar12",name:"avatar12",src:s("avatar12.jpeg")},{id:"avatar13",name:"avatar13",src:s("avatar13.jpeg")},{id:"avatar14",name:"avatar14",src:s("avatar14.jpeg")}],a=r=>l(`/insert/${r}`),Q=[{id:"auto",name:"auto",src:a("auto.png")},{id:"book",name:"book",src:a("book.png")},{id:"cloud",name:"cloud",src:a("cloud.png")},{id:"dashboard",name:"dashboard",src:a("dashboard.png")},{id:"data",name:"data",src:a("data.png")},{id:"data2",name:"data2",src:a("data2.png")},{id:"gongping",name:"gongping",src:a("gongping.png")},{id:"jiaofu",name:"jiaofu",src:a("jiaofu.png")},{id:"jiaoyou",name:"jiaoyou",src:a("jiaoyou.png")},{id:"kancha",name:"kancha",src:a("kancha.png")},{id:"keshihua",name:"keshihua",src:a("keshihua.png")},{id:"liulan",name:"liulan",src:a("liulan.png")},{id:"map",name:"map",src:a("map.png")},{id:"only",name:"only",src:a("only.png")},{id:"qingzhu",name:"qingzhu",src:a("qingzhu.png")},{id:"safe",name:"safe",src:a("safe.png")},{id:"search",name:"search",src:a("search.png")},{id:"tongji",name:"tongji",src:a("tongji.png")},{id:"work",name:"work",src:a("work.png")},{id:"workspace",name:"workspace",src:a("workspace.png")},{id:"xiezuo",name:"xiezuo",src:a("xiezuo.png")},{id:"xuexi",name:"xuexi",src:a("xuexi.png")}],W=[],X=[{index:"background",icon:"image-fill",name:"背景图"},{index:"box",icon:"border",name:"边框盒子"},{index:"decoration",icon:"block",name:"动态装饰器"},{index:"header",icon:"insertrowabove",name:"头部图片"},{index:"widget",icon:"hourglass",name:"小部件"},{index:"avatar",icon:"user",name:"头像图"},{index:"insert",icon:"linkedin",name:"插画"},{index:"bg",icon:"image",name:"壁纸图片"},{index:"other",icon:"Report",name:"其他图片"}],Y={background:F,box:R,loading:D,decoration:G,header:K,widget:T,avatar:H,bg:Z,insert:Q,other:W},ee=(r,b)=>{const m=r.__vccOpts||r;for(const[d,i]of b)m[d]=i;return m},ne={name:"App",setup(){const r=A("background"),b=L(()=>Y[r.value]||[]);return{imageMenu:X,active:r,previewImages:b,handleSelect:o=>{r.value=o},copyUrl:o=>{console.log(o),P.util.copy(o.src),J(`已拷贝url: ${o.src}至剪切板.`)},getImgStyle:o=>r.value==="avatar"?{width:"200px",height:"200px",opacity:1,"background-image":`url(${o.src})`,"background-size":"100% 100%","background-repeat":"no-repeat",...o.css}:r.value==="box"?{transform:"translateZ(0px)",height:"200px","border-radius":0,"border-style":"solid","border-width":"1px",background:"none","border-image":`url(${o.src}) ${o.border.slice} / ${o.border.width} / ${o.border.outset} ${o.border.repeat}`}:r.value==="other"?{width:"100%",height:"200px",opacity:1,"background-image":`url(${o.src})`,"background-size":"100% 100%","background-repeat":"no-repeat",...o.css}:{width:"100%",height:"200px",opacity:1,"background-image":`url(${o.src})`,"background-size":"100% 100%","background-repeat":"no-repeat",...o.css},exportJson:()=>{console.log(b.value);const o=document.createElement("a"),y=JSON.stringify(b.value,null,2),_=new Blob([y]);o.setAttribute("href",URL.createObjectURL(_)),o.setAttribute("download","config.json"),o.setAttribute("id","b-link-temp"),document.body.appendChild(o),o.click(),document.body.removeChild(document.getElementById("b-link-temp"))}}}},re={class:"main-wrap"},oe={class:"left-menu"},ae={class:"right-content"},te={class:"t-right pr-24"},ie={class:"images-wrap"},ce=["onClick"],se={key:0,style:{height:"500px"}};function de(r,b,m,d,i,g){const o=f("f-icon"),y=f("f-menu-item"),_=f("f-menu"),N=f("f-button"),O=f("f-empty");return x(),w("div",re,[h("div",oe,[v(_,{uniqueOpened:!0,"default-active":d.active,class:"b-menu-vertical-demo","background-color":"#111417","text-color":"#fff","active-text-color":"#ffd04b",onSelect:d.handleSelect},{default:z(()=>[(x(!0),w(I,null,$(d.imageMenu,u=>(x(),B(y,{key:u.index,index:u.index},{title:z(()=>[j(U(u.name),1)]),default:z(()=>[v(o,{name:u.icon},null,8,["name"])]),_:2},1032,["index"]))),128))]),_:1},8,["default-active","onSelect"])]),h("div",ae,[h("div",te,[v(N,{type:"primary",onClick:d.exportJson},{default:z(()=>[j("导出当前配置文件")]),_:1},8,["onClick"])]),h("div",ie,[(x(!0),w(I,null,$(d.previewImages,u=>(x(),w("div",{key:u.id,class:"image-item",onClick:pe=>d.copyUrl(u)},[h("div",{class:"select-image",style:E(d.getImgStyle(u))},null,4),h("span",null,U(u.name),1)],8,ce))),128))]),d.previewImages.length===0?(x(),w("div",se,[v(O,null,{default:z(()=>[j("暂无图片资源")]),_:1})])):q("",!0)])])}const ge=ee(ne,[["render",de]]);const C=M(ge);C.use(V);C.mount("#app",!0);
