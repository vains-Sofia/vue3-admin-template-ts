import{d as te,k as h,G as le,j as ue,r,o as d,g as T,m as f,c as v,w as t,b as e,e as s,t as p,i as C,f as V,F as S,h as U,I as O,x as ae,y as oe,J as ne}from"./index.01fb4aa9.js";import{g as ie,a as se,u as re}from"./ClientApi.bd7c2d25.js";import{c as P}from"./Utils.03a45ab7.js";import{n as de}from"./IdWorker.6114c90c.js";import{_ as ce}from"./_plugin-vue_export-helper.cdc0426e.js";import"./Request.91bcde67.js";const A=y=>(ae("data-v-962f7cd9"),y=y(),oe(),y),pe=A(()=>f("div",{class:"header-text"},"\u7AEF\u70B9\u4FE1\u606F",-1)),fe={class:"client-info"},me={class:"client-info"},_e=A(()=>f("div",{class:"header-text"},"\u57FA\u672C\u4FE1\u606F",-1)),ve={style:{"margin-left":"62px"}},ke=A(()=>f("div",{class:"header-text"},"\u5E94\u7528Logo",-1)),ge=A(()=>f("div",{class:"header-text"},"\u8BA4\u8BC1\u76F8\u5173\u8BBE\u7F6E",-1)),he={class:"el-input"},Fe=te({__name:"SysClientDetailChange",setup(y){const x=h(le.currentRoute.value.params.id),l=h({}),i=h({}),M=ue(()=>{const n=window.localStorage.getItem("token");return n?new Headers({Authorization:n}):null}),w=()=>{typeof x.value=="string"&&se(x.value).then(n=>{l.value=n.data})},j=()=>{l.value.clientSecret=String(de())};w(),ie().then(n=>{i.value=n});const G=(n,u)=>{n?ne.confirm(`\u786E\u5B9A\u5220\u9664\u56DE\u8C03\u5730\u5740\uFF1A${n}\u5417\uFF1F`,"Warning",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(()=>{l.value.redirectUris.splice(u,1)}):l.value.redirectUris.splice(u,1)},J=h({clientName:[{required:!0,message:"\u5E94\u7528\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],redirectUris:[{validator:(n,u,o)=>{u||o(new Error("\u56DE\u8C03\u5730\u5740\u4E0D\u80FD\u4E3A\u7A7A"));for(const c of u)if(!c){o(new Error("\u56DE\u8C03\u5730\u5740\u4EFB\u610F\u4E00\u9879\u4E0D\u80FD\u4E3A\u7A7A"));return}o()},trigger:"blur"}],authorizationGrantTypes:[{type:"array",required:!0,message:"\u6388\u6743\u6A21\u5F0F\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],clientAuthenticationMethods:[{type:"array",required:!0,message:"\u5E94\u7528\u8BA4\u8BC1\u65B9\u5F0F\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],"tokenSettings.accessTokenTimeToLive":[{required:!0,message:"\u5FC5\u987B\u586B\u5199Token\u5B58\u6D3B\u65F6\u95F4",trigger:"blur"}],"tokenSettings.refreshTokenTimeToLive":[{required:!0,message:"\u5FC5\u987B\u586B\u5199RefreshToken\u5B58\u6D3B\u65F6\u95F4",trigger:"blur"}]}),E=h(),D=h(!1),$=()=>{var n;(n=E.value)==null||n.validate((u,o)=>{if(u){D.value=!0;const c=JSON.parse(JSON.stringify(l.value));re(c).then(k=>{D.value=!1,k.success?O({title:"\u63D0\u793A",message:"\u5E94\u7528\u4FEE\u6539\u6210\u529F.",type:"success"}):O({title:"\u63D0\u793A",message:k.message||"\u5E94\u7528\u4FEE\u6539\u5931\u8D25.",type:"error"})}).catch(()=>{D.value=!1})}})},I=n=>{switch(n){case"SECONDS":return"\u79D2";case"MINUTES":return"\u5206";case"HOURS":return"\u65F6";case"DAYS":return"\u5929"}return"\u79D2"},H=()=>{var n;(n=E.value)==null||n.resetFields(),w()},K=()=>{l.value.redirectUris.push("")},Y=(n,u,o)=>{l.value.clientProfile=`http://k7fsqkhtbx.cdhttp.cn/system${n.data[0]}`};return(n,u)=>{const o=r("el-form-item"),c=r("el-link"),k=r("el-form"),g=r("el-input"),L=r("CopyDocument"),F=r("el-icon"),B=r("el-tooltip"),W=r("Refresh"),Q=r("el-image"),X=r("Plus"),Z=r("el-upload"),ee=r("Delete"),b=r("el-checkbox"),N=r("el-checkbox-group"),m=r("el-option"),R=r("el-select"),q=r("el-button");return d(),T(S,null,[pe,f("div",fe,[i.value.issuer?(d(),v(k,{key:0,class:"demo-form-inline","label-position":"right","label-width":"auto"},{default:t(()=>[e(o,{label:"\u53D1\u884C\u5730\u5740"},{default:t(()=>[s(p(i.value.issuer),1)]),_:1}),e(o,{label:"\u8BA4\u8BC1\u7AEF\u70B9"},{default:t(()=>[e(c,{type:"primary",target:"_blank",underline:!1,href:i.value.authorization_endpoint},{default:t(()=>[s(p(i.value.authorization_endpoint),1)]),_:1},8,["href"])]),_:1}),e(o,{label:"\u5F53\u524D\u7528\u6237"},{default:t(()=>[e(c,{type:"primary",target:"_blank",underline:!1,href:i.value.userinfo_endpoint},{default:t(()=>[s(p(i.value.userinfo_endpoint),1)]),_:1},8,["href"])]),_:1}),e(o,{label:"jwks\u7AEF\u70B9"},{default:t(()=>[e(c,{target:"_blank",underline:!1,href:i.value.jwks_uri},{default:t(()=>[s(p(i.value.jwks_uri),1)]),_:1},8,["href"])]),_:1})]),_:1})):C("",!0),i.value.revocation_endpoint?(d(),v(k,{key:1,class:"demo-form-inline","label-position":"right","label-width":"auto",style:{"margin-left":"92px"}},{default:t(()=>[e(o,{label:"\u64A4\u9500Token\u7AEF\u70B9"},{default:t(()=>[e(c,{type:"warning",target:"_blank",underline:!1,href:i.value.revocation_endpoint},{default:t(()=>[s(p(i.value.revocation_endpoint),1)]),_:1},8,["href"])]),_:1}),e(o,{label:"Token\u81EA\u7701\u7AEF\u70B9"},{default:t(()=>[e(c,{type:"primary",target:"_blank",underline:!1,href:i.value.introspection_endpoint},{default:t(()=>[s(p(i.value.introspection_endpoint),1)]),_:1},8,["href"])]),_:1}),e(o,{label:"\u83B7\u53D6Token\u7AEF\u70B9"},{default:t(()=>[e(c,{type:"primary",target:"_blank",underline:!1,href:i.value.token_endpoint},{default:t(()=>[s(p(i.value.token_endpoint),1)]),_:1},8,["href"])]),_:1}),e(o,{label:"Token\u52A0\u5BC6\u65B9\u5F0F"},{default:t(()=>[s(p(i.value.id_token_signing_alg_values_supported?i.value.id_token_signing_alg_values_supported.join(","):""),1)]),_:1})]),_:1})):C("",!0)]),l.value.clientSettings?(d(),v(k,{key:0,rules:J.value,ref_key:"authInfo",ref:E,"scroll-to-error":"",class:"client-form","label-position":"top",model:l.value},{default:t(()=>[f("div",me,[f("div",null,[_e,e(o,{label:"\u5E94\u7528\u540D\u79F0",prop:"clientName",class:"basic-info"},{default:t(()=>[e(g,{modelValue:l.value.clientName,"onUpdate:modelValue":u[0]||(u[0]=a=>l.value.clientName=a),placeholder:"\u5E94\u7528\u540D\u79F0"},null,8,["modelValue"])]),_:1}),e(o,{label:"AppId",style:{display:"flex"},class:"basic-info"},{default:t(()=>[s(p(l.value.clientId)+" \xA0\xA0 ",1),e(B,{class:"box-item",effect:"dark",content:"\u590D\u5236\u5230\u526A\u5207\u677F",placement:"top"},{default:t(()=>[e(F,{class:"hand-mouse",onClick:u[1]||(u[1]=a=>V(P)(l.value.clientId))},{default:t(()=>[e(L)]),_:1})]),_:1})]),_:1}),e(o,{label:"AppSecret",class:"basic-info"},{default:t(()=>[e(g,{disabled:"",modelValue:l.value.clientSecret,"onUpdate:modelValue":u[2]||(u[2]=a=>l.value.clientSecret=a),placeholder:"AppSecret"},null,8,["modelValue"]),s("\xA0\xA0 "),e(B,{class:"box-item",effect:"dark",content:"\u91CD\u65B0\u751F\u6210App Secret",placement:"top"},{default:t(()=>[e(F,{class:"hand-mouse",onClick:j},{default:t(()=>[e(W)]),_:1})]),_:1}),s("\xA0\xA0 "),e(B,{class:"box-item",effect:"dark",content:"\u590D\u5236\u5230\u526A\u5207\u677F",placement:"top"},{default:t(()=>[e(F,{class:"hand-mouse",onClick:u[3]||(u[3]=a=>V(P)(l.value.clientSecret))},{default:t(()=>[e(L)]),_:1})]),_:1})]),_:1}),e(o,{label:"\u7B7E\u53D1\u65F6\u95F4",class:"basic-info"},{default:t(()=>[s(p(l.value.clientIdIssuedAt),1)]),_:1})]),f("div",ve,[ke,e(Z,{class:"avatar-uploader",action:"http://k7fsqkhtbx.cdhttp.cn/system/file/upload",headers:V(M),"on-success":Y,"show-file-list":!1},{default:t(()=>[l.value.clientProfile?(d(),v(Q,{key:0,src:l.value.clientProfile,class:"avatar",fit:"cover"},null,8,["src"])):(d(),v(F,{key:1,class:"avatar-uploader-icon"},{default:t(()=>[e(X)]),_:1}))]),_:1},8,["headers"])])]),ge,e(o,{label:"\u56DE\u8C03\u5730\u5740",class:"flex-item-wrap custom-width",prop:"redirectUris"},{default:t(()=>[(d(!0),T(S,null,U(l.value.redirectUris,(a,_)=>(d(),T("div",{key:_,style:{width:"100%"}},[e(g,{modelValue:l.value.redirectUris[_],"onUpdate:modelValue":z=>l.value.redirectUris[_]=z,placeholder:"\u56DE\u8C03\u5730\u5740"},null,8,["modelValue","onUpdate:modelValue"]),e(F,{onClick:z=>G(a,_),class:"icon-item"},{default:t(()=>[e(ee)]),_:2},1032,["onClick"])]))),128))]),_:1}),e(c,{icon:"CirclePlus",type:"primary",underline:!1,style:{margin:"0 0 10px 3px"},onClick:K},{default:t(()=>[s(" \u6DFB\u52A0\u56DE\u8C03\u5730\u5740 ")]),_:1}),e(o,{label:"JwkSetUrl",class:"custom-width"},{default:t(()=>[e(g,{modelValue:l.value.clientSettings.jwkSetUrl,"onUpdate:modelValue":u[4]||(u[4]=a=>l.value.clientSettings.jwkSetUrl=a),placeholder:"JwkSetUrl"},null,8,["modelValue"])]),_:1}),e(o,{label:"\u6388\u6743\u6A21\u5F0F",prop:"authorizationGrantTypes"},{default:t(()=>[e(N,{modelValue:l.value.authorizationGrantTypes,"onUpdate:modelValue":u[5]||(u[5]=a=>l.value.authorizationGrantTypes=a)},{default:t(()=>[(d(!0),T(S,null,U(i.value.grant_types_supported,(a,_)=>(d(),v(b,{label:a,key:_},null,8,["label"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(o,{label:"\u5E94\u7528\u8BA4\u8BC1\u65B9\u5F0F",prop:"clientAuthenticationMethods"},{default:t(()=>[e(N,{modelValue:l.value.clientAuthenticationMethods,"onUpdate:modelValue":u[6]||(u[6]=a=>l.value.clientAuthenticationMethods=a)},{default:t(()=>[(d(!0),T(S,null,U(i.value.token_endpoint_auth_methods_supported,(a,_)=>(d(),v(b,{label:a,key:_},null,8,["label"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(o,{label:"\u5E94\u7528\u8BBE\u7F6E",prop:"requireAuthorizationConsent"},{default:t(()=>[e(b,{modelValue:l.value.clientSettings.requireAuthorizationConsent,"onUpdate:modelValue":u[7]||(u[7]=a=>l.value.clientSettings.requireAuthorizationConsent=a)},{default:t(()=>[s(" \u6388\u6743\u786E\u8BA4 ")]),_:1},8,["modelValue"]),e(b,{modelValue:l.value.tokenSettings.reuseRefreshTokens,"onUpdate:modelValue":u[8]||(u[8]=a=>l.value.tokenSettings.reuseRefreshTokens=a)},{default:t(()=>[s(" \u91CD\u7528Refresh Token ")]),_:1},8,["modelValue"]),e(b,{modelValue:l.value.clientSettings.requireProofKey,"onUpdate:modelValue":u[9]||(u[9]=a=>l.value.clientSettings.requireProofKey=a)},{default:t(()=>[s(" \u4EC5\u652F\u6301PKCE ")]),_:1},8,["modelValue"])]),_:1}),f("div",he,[e(o,{label:"Token\u5B58\u6D3B\u65F6\u95F4",prop:"tokenSettings.accessTokenTimeToLive"},{default:t(()=>[e(g,{modelValue:l.value.tokenSettings.accessTokenTimeToLive,"onUpdate:modelValue":u[11]||(u[11]=a=>l.value.tokenSettings.accessTokenTimeToLive=a),type:"number",placeholder:"Token\u5B58\u6D3B\u65F6\u95F4",class:"input-with-select"},{append:t(()=>[e(R,{modelValue:l.value.tokenSettings.accessTokenTimeToLiveUnit,"onUpdate:modelValue":u[10]||(u[10]=a=>l.value.tokenSettings.accessTokenTimeToLiveUnit=a),placeholder:I(l.value.tokenSettings.accessTokenTimeToLiveUnit)},{default:t(()=>[e(m,{label:"\u79D2",value:"SECONDS"}),e(m,{label:"\u5206",value:"MINUTES"}),e(m,{label:"\u65F6",value:"HOURS"}),e(m,{label:"\u5929",value:"DAYS"})]),_:1},8,["modelValue","placeholder"])]),_:1},8,["modelValue"])]),_:1}),e(o,{label:"Refresh Token\u5B58\u6D3B\u65F6\u95F4",prop:"tokenSettings.refreshTokenTimeToLive",style:{"margin-left":"55px"}},{default:t(()=>[e(g,{placeholder:"RefreshToken\u5B58\u6D3B\u65F6\u95F4",class:"input-with-select",type:"number",modelValue:l.value.tokenSettings.refreshTokenTimeToLive,"onUpdate:modelValue":u[13]||(u[13]=a=>l.value.tokenSettings.refreshTokenTimeToLive=a)},{append:t(()=>[e(R,{modelValue:l.value.tokenSettings.refreshTokenTimeToLiveUnit,"onUpdate:modelValue":u[12]||(u[12]=a=>l.value.tokenSettings.refreshTokenTimeToLiveUnit=a),placeholder:I(l.value.tokenSettings.refreshTokenTimeToLiveUnit)},{default:t(()=>[e(m,{label:"\u79D2",value:"SECONDS"}),e(m,{label:"\u5206",value:"MINUTES"}),e(m,{label:"\u65F6",value:"HOURS"}),e(m,{label:"\u5929",value:"DAYS"})]),_:1},8,["modelValue","placeholder"])]),_:1},8,["modelValue"])]),_:1})]),e(o,null,{default:t(()=>[e(q,{type:"primary",onClick:$,loading:D.value,style:{width:"150px"}},{default:t(()=>[s("\u4FDD\u5B58")]),_:1},8,["loading"]),e(q,{type:"info",plain:"",onClick:H},{default:t(()=>[s("\u91CD\u7F6E")]),_:1})]),_:1})]),_:1},8,["rules","model"])):C("",!0)],64)}}});const Be=ce(Fe,[["__scopeId","data-v-962f7cd9"]]);export{Be as default};
