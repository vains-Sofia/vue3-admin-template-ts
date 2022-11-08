import{d as I,u as M,a as V,r as m,o as s,c as p,w as l,b as c,e as F,t as S,f as t,g as C,h as D,F as B,i as y,s as N,j as U,k as O,l as x,m as b,n as T,p as $,q as z,v as R,x as E,y as H,z as G,A as P,B as J}from"./index.3e08daed.js";import{t as v}from"./ThemeConfig.551b76c9.js";import{c as q}from"./UserApi.0cdd0a4c.js";import{_ as L}from"./_plugin-vue_export-helper.cdc0426e.js";import{_ as Q}from"./logo.ddd14b79.js";import"./Request.f9697438.js";const X=I({__name:"Breadcrumb",setup(r){const{t:d}=M(),{currentRoute:_}=V(),a=(f,g)=>d(f)===f?g:d(f),n=(f,g)=>f>0&&g.path.indexOf(":")<0;return(f,g)=>{const u=m("el-breadcrumb-item"),o=m("el-breadcrumb");return s(),p(o,{separator:"/"},{default:l(()=>[c(u,{to:{path:"/"}},{default:l(()=>[F(S(t(d)("sidebar.home")),1)]),_:1}),(s(!0),C(B,null,D(t(_).matched,(e,h)=>(s(),C(B,{key:h},[t(_).matched[0].path!=="/"?(s(),p(u,{key:0,to:n(h,e)?{path:e.path}:null},{default:l(()=>[F(S(a("sidebar."+e.meta.title,e.meta.title)),1)]),_:2},1032,["to"])):y("",!0)],64))),128))]),_:1})}}}),Y={class:"navbar-container"},Z={class:"container-item"},K=I({__name:"Navbar",setup(r){const d=N(v()),{t:_}=M(),a=U(()=>d.sidebarCollapse?_("navBar.expand"):_("navBar.fold"));let n=O("\u767B\u5F55");window.localStorage.getItem("token")&&q().then(u=>{x().refreshMainPage(),n.value=u.userNickName}).catch(()=>{n.value="\u767B\u5F55",window.localStorage.setItem("token","")});const g=()=>{let u=window.localStorage.getItem("token");if(u)return;const o=setInterval(()=>{u=window.localStorage.getItem("token"),u&&(clearInterval(o),q().then(e=>{x().refreshMainPage(),n.value=e.userNickName}))},100);window.open("http://kwqqr48rgo.cdhttp.cn/oauth2/authorize?response_type=code&client_id=admin&redirect_uri=http://vains-sofia.gitee.io/vains3-admin-template-ts/loginRedirect&scope=all","_newtab")};return(u,o)=>{const e=m("el-icon"),h=m("el-tooltip"),k=m("refresh");return s(),C("div",Y,[b("div",Z,[c(h,{class:"navbar-item",effect:"dark",content:t(a),placement:"bottom"},{default:l(()=>[c(e,{onClick:t(v)().toggleSidebarCollapse,size:23,class:"navbar-item"},{default:l(()=>[(s(),p(T(t(v)().sidebarCollapse?"expand":"fold")))]),_:1},8,["onClick"])]),_:1},8,["content"]),b("div",{class:"navbar-tool-item",onClick:o[0]||(o[0]=(...w)=>t(x)().refreshMainPage&&t(x)().refreshMainPage(...w))},[c(X)]),c(h,{class:"navbar-item",effect:"dark",content:t(_)("navBar.refresh"),placement:"bottom"},{default:l(()=>[c(e,{onClick:t(x)().refreshMainPage,size:20,class:"navbar-item"},{default:l(()=>[c(k)]),_:1},8,["onClick"])]),_:1},8,["content"])]),b("div",{class:"container-item",style:{"margin-right":"30px"},onClick:g},S(t(n)),1)])}}});const A=L(K,[["__scopeId","data-v-ad519730"]]),ee=r=>(E("data-v-c5fa7484"),r=r(),H(),r),te={class:"logo-block"},ae=ee(()=>b("img",{alt:"logo",src:Q},null,-1)),ne=[ae],oe=I({__name:"Logo",setup(r){let{sidebarCollapse:d,sidebarTextColor:_}=N(v());return(a,n)=>(s(),C("div",te,[b("div",{class:"logo-png",style:$({"margin-left":t(d)?"5px":"10px"})},ne,4),z(b("div",{class:"logo-text",style:$({color:t(_)})}," vains ",4),[[R,!t(d)]])]))}});const se=L(oe,[["__scopeId","data-v-c5fa7484"]]),W=I({__name:"SubTree",props:{base:null,routes:null},setup(r){const{t:d}=M(),{push:_}=V(),a=[],n=(o,e)=>e.redirect?e.redirect.toString():e.alias?(a.push(e.alias[0]),e.alias[0]):o==="/"?o+e.path:o===""||typeof o>"u"?e.path:o+"/"+e.path,f=(o,e)=>{e.meta&&e.meta.url?(x().setForeignUrl(e.meta.url),x().setForeignRouter(!0)):(x().setForeignUrl(""),x().setForeignRouter(!1)),_(o.index)},g=(o,e)=>d(o)===o?e:d(o),u=o=>{var h;const e=(h=o.children)==null?void 0:h.filter(k=>{var w;return!((w=k.meta)!=null&&w.hidden)});return e&&e.length>0&&o.meta&&!o.meta.hidden};return(o,e)=>{const h=m("el-icon"),k=m("el-sub-menu"),w=m("el-menu-item");return s(!0),C(B,null,D(r.routes,i=>(s(),C(B,{key:r.base+i.path},[u(i)?(s(),p(k,{key:0,index:n(r.base,i)},{title:l(()=>[i.meta&&i.meta.icon?(s(),p(h,{key:0,size:17,style:{height:"1.2em",width:"1.2em"}},{default:l(()=>[(s(),p(T(i.meta.icon)))]),_:2},1024)):y("",!0),b("span",null,S(g("sidebar."+i.meta.title,i.meta.title)),1)]),default:l(()=>[c(W,{routes:i.children,base:n(r.base,i)},null,8,["routes","base"])]),_:2},1032,["index"])):i.meta.hidden?y("",!0):(s(),p(w,{key:1,index:n(r.base,i),onClick:j=>f(j,i),style:$({"--el-menu-hover-background-color":t(v)().sidebarBgColor})},{title:l(()=>[F(S(g("sidebar."+i.meta.title,i.meta.title)),1)]),default:l(()=>[i.meta&&i.meta.icon?(s(),p(h,{key:0,size:17,style:{height:"1.2em",width:"1.2em"}},{default:l(()=>[(s(),p(T(i.meta.icon)))]),_:2},1024)):y("",!0)]),_:2},1032,["index","onClick","style"]))],64))),128)}}}),le=I({__name:"Sidebar",setup(r){const d=U(()=>J().fullPath),_=()=>{P.forEach(a=>{if(a.children&&a.children.length===1){let n=a.children[0];a.alias?a.alias=a.alias+n.path:n.alias?a.path=a.path+n.alias:a.alias&&n.alias?a.alias=a.alias+n.alias:n.path.startsWith("/")?a.path=a.path+n.path:a.path=a.path+"/"+n.path,a.meta=n.meta,delete a.children}})};return G(()=>{_()}),(a,n)=>{const f=m("el-menu"),g=m("el-scrollbar");return s(),p(g,{"wrap-style":`background-color: ${t(v)().sidebarBgColor}`,"view-style":"height: 100%;"},{default:l(()=>[c(se),c(f,{"unique-opened":"","default-active":t(d),collapse:t(v)().sidebarCollapse,"text-color":t(v)().sidebarTextColor,"background-color":t(v)().sidebarBgColor,"active-text-color":t(v)().sidebarActiveTextColor,style:$({"--el-menu-hover-background-color":t(v)().sidebarBgColor})},{default:l(()=>[t(P)?(s(),p(W,{key:0,routes:t(P)},null,8,["routes"])):y("",!0)]),_:1},8,["default-active","collapse","text-color","background-color","active-text-color","style"])]),_:1},8,["wrap-style"])}}});const re=r=>(E("data-v-2f96f8f9"),r=r(),H(),r),ie={style:{height:"100%",transition:"width 0.5s ease 0s","overflow-x":"hidden",transform:"translate(0, 0)"}},ce={class:"main-page"},de={style:{"min-height":"calc(98% - 20px)",padding:"10px"}},_e=re(()=>b("div",{style:{height:"20px"}},null,-1)),me=I({__name:"Index",setup(r){let{mainPageAlive:d}=N(x()),{openHeader:_,sidebarWidth:a,fixedHeader:n}=N(v());return(f,g)=>{const u=m("el-aside"),o=m("el-header"),e=m("router-view"),h=m("el-main"),k=m("el-container");return s(),p(k,{class:"main-container"},{default:l(()=>[c(u,{style:{transition:"width 0.5s ease 0s"},width:t(a)+"px"},{default:l(()=>[c(le)]),_:1},8,["width"]),c(k,null,{default:l(()=>[z(c(o,null,{default:l(()=>[t(_)?(s(),p(A,{key:0})):y("",!0)]),_:1},512),[[R,t(n)]]),c(h,{style:{padding:"0"}},{default:l(()=>[b("div",ie,[z(c(A,null,null,512),[[R,t(_)&&!t(n)]]),b("div",ce,[b("div",de,[t(d)?(s(),p(e,{key:0})):y("",!0)]),_e])])]),_:1})]),_:1})]),_:1})}}});const be=L(me,[["__scopeId","data-v-2f96f8f9"]]);export{be as default};
