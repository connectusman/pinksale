(this["webpackJsonppink-sale"]=this["webpackJsonppink-sale"]||[]).push([[13],{1249:function(e,t,a){"use strict";a.r(t);var c=a(7),r=a.n(c),s=a(47),n=a(18),l=a(1),i=a(832),o=a(833),d=a(861),u=a(239),b=a(851),m=a(77),j=a(240),h=a(11),O=a.n(h),p=a(448),g=a(885),v=a(53),f=a(58),x=a(826),N=a(15),C=a(911),k=a(27),S=a(174),w=a(2),T=o.d().shape({logoUrl:o.f().url("Invalid URL").required("Logo cannot be blank"),website:o.f().url("Invalid URL").required("Website cannot be blank"),facebook:o.f().url("Invalid URL").max(512,"URL must be 512 characters or less"),telegram:o.f().url("Invalid URL").max(512,"URL must be 512 characters or less"),twitter:o.f().url("Invalid URL").max(512,"URL must be 512 characters or less"),reddit:o.f().url("Invalid URL").max(512,"URL must be 512 characters or less"),github:o.f().url("Invalid URL").max(512,"URL must be 512 characters or less"),instagram:o.f().url("Invalid URL").max(512,"URL must be 512 characters or less"),discord:o.f().url("Invalid URL").max(512,"URL must be 512 characters or less"),description:o.f().min(128,"Description must be 128 characters or more").max(512,"Description must be 512 characters or less")}).defined();t.default=function(){var e=Object(l.useState)(!1),t=Object(n.a)(e,2),a=t[0],c=t[1],o=Object(v.h)(),h=Object(v.f)(),I=Object(k.i)(),B=Object(S.o)(o.params.id,I),E=Object(f.c)().account,R=Object(C.a)(o.params.id).pool,A=null===R||void 0===R?void 0:R.poolDetails,U=function(){var e=Object(s.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.prev=1,e.next=4,B.methods.updatePoolDetails(t).send({from:E});case 4:p.b.success("Update pool success"),h.goBack(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),e.t0&&e.t0.message&&p.b.error(e.t0.message);case 11:return e.prev=11,c(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(t){return e.apply(this,arguments)}}(),y=Object(i.a)({initialValues:{logoUrl:"",website:""},validationSchema:T,validateOnMount:!0,onSubmit:function(e){if(I)try{U(Object(N.f)({logoUrl:e.logoUrl,website:e.website,facebook:e.facebook,twitter:e.twitter,telegram:e.telegram,reddit:e.reddit,description:e.description,github:e.github,instagram:e.instagram,discord:e.discord}))}catch(t){}}});return Object(l.useEffect)((function(){A&&(y.setFieldValue("logoUrl",A.logoUrl),y.setFieldValue("website",A.website),A.facebook&&y.setFieldValue("facebook",A.facebook),A.twitter&&y.setFieldValue("twitter",A.twitter),A.telegram&&y.setFieldValue("telegram",A.telegram),A.github&&y.setFieldValue("github",A.github),A.reddit&&y.setFieldValue("reddit",A.reddit),A.instagram&&y.setFieldValue("instagram",A.instagram),A.discord&&y.setFieldValue("discord",A.discord),A.description&&y.setFieldValue("description",A.description))}),[A]),Object(w.jsx)("div",{className:"py-6 container",children:Object(w.jsx)(g.a,{children:Object(w.jsxs)("form",{onSubmit:y.handleSubmit,children:[Object(w.jsxs)("div",{className:"columns field",children:[Object(w.jsxs)("div",{className:"column",children:[Object(w.jsx)("label",{className:"label",htmlFor:"logoUrl",children:"Logo URL"}),Object(w.jsxs)("div",{className:"control has-icons-left",children:[Object(w.jsx)("input",{className:O()("input",y.touched.logoUrl&&y.errors.logoUrl?"is-danger":""),type:"text",placeholder:"Ex: https://...",id:"logoUrl",name:"logoUrl",onChange:y.handleChange,onBlur:y.handleBlur,value:y.values.logoUrl}),Boolean(y.touched.logoUrl&&y.errors.logoUrl)&&Object(w.jsx)("p",{className:"help is-danger",children:y.errors.logoUrl}),Object(w.jsx)("span",{className:"icon is-small is-left",children:Object(w.jsx)(j.c,{})})]}),Object(w.jsx)("p",{className:"help is-info",children:"URL must end with a supported image extension png, jpg, jpeg or gif"})]}),Object(w.jsxs)("div",{className:"column",children:[Object(w.jsx)("label",{className:"label",htmlFor:"website",children:"Website"}),Object(w.jsxs)("div",{className:"control has-icons-left",children:[Object(w.jsx)("input",{className:O()("input",y.touched.website&&y.errors.website?"is-danger":""),type:"text",placeholder:"Ex: https://...",id:"website",name:"website",onChange:y.handleChange,onBlur:y.handleBlur,value:y.values.website}),Boolean(y.touched.website&&y.errors.website)&&Object(w.jsx)("p",{className:"help is-danger",children:y.errors.website}),Object(w.jsx)("span",{className:"icon is-small is-left",children:Object(w.jsx)(d.b,{})})]})]})]}),Object(w.jsxs)("div",{className:"columns field",children:[Object(w.jsxs)("div",{className:"column",children:[Object(w.jsx)("label",{className:"label",htmlFor:"facebook",children:"Facebook"}),Object(w.jsxs)("div",{className:"control has-icons-left",children:[Object(w.jsx)("input",{className:O()("input",y.touched.facebook&&y.errors.facebook?"is-danger":""),type:"text",placeholder:"Ex: https://facebook.com/...",id:"facebook",name:"facebook",onChange:y.handleChange,onBlur:y.handleBlur,value:y.values.facebook}),Boolean(y.touched.facebook&&y.errors.facebook)&&Object(w.jsx)("p",{className:"help is-danger",children:y.errors.facebook}),Object(w.jsx)("span",{className:"icon is-small is-left",children:Object(w.jsx)(u.a,{})})]})]}),Object(w.jsxs)("div",{className:"column",children:[Object(w.jsx)("label",{className:"label",htmlFor:"twitter",children:"Twitter"}),Object(w.jsxs)("div",{className:"control has-icons-left",children:[Object(w.jsx)("input",{className:O()("input",y.touched.twitter&&y.errors.twitter?"is-danger":""),type:"text",placeholder:"Ex: https://twitter.com/...",id:"twitter",name:"twitter",onChange:y.handleChange,onBlur:y.handleBlur,value:y.values.twitter}),Boolean(y.touched.twitter&&y.errors.twitter)&&Object(w.jsx)("p",{className:"help is-danger",children:y.errors.twitter}),Object(w.jsx)("span",{className:"icon is-small is-left",children:Object(w.jsx)(d.c,{})})]})]})]}),Object(w.jsxs)("div",{className:"columns field",children:[Object(w.jsxs)("div",{className:"column",children:[Object(w.jsx)("label",{className:"label",htmlFor:"github",children:"Github"}),Object(w.jsxs)("div",{className:"control has-icons-left",children:[Object(w.jsx)("input",{className:O()("input",y.touched.github&&y.errors.github?"is-danger":""),type:"text",placeholder:"Ex: https://github.com/...",id:"github",name:"github",onChange:y.handleChange,onBlur:y.handleBlur,value:y.values.github}),Boolean(y.touched.github&&y.errors.github)&&Object(w.jsx)("p",{className:"help is-danger",children:y.errors.github}),Object(w.jsx)("span",{className:"icon is-small is-left",children:Object(w.jsx)(d.a,{})})]})]}),Object(w.jsxs)("div",{className:"column",children:[Object(w.jsx)("label",{className:"label",htmlFor:"telegram",children:"Telegram"}),Object(w.jsxs)("div",{className:"control has-icons-left",children:[Object(w.jsx)("input",{className:O()("input",y.touched.telegram&&y.errors.telegram?"is-danger":""),type:"text",placeholder:"Ex: https://t.me/...",id:"telegram",name:"telegram",onChange:y.handleChange,onBlur:y.handleBlur,value:y.values.telegram}),Boolean(y.touched.telegram&&y.errors.telegram)&&Object(w.jsx)("p",{className:"help is-danger",children:y.errors.telegram}),Object(w.jsx)("span",{className:"icon is-small is-left",children:Object(w.jsx)(b.c,{})})]})]})]}),Object(w.jsxs)("div",{className:"columns field",children:[Object(w.jsxs)("div",{className:"column",children:[Object(w.jsx)("label",{className:"label",htmlFor:"instagram",children:"Instagram"}),Object(w.jsxs)("div",{className:"control has-icons-left",children:[Object(w.jsx)("input",{className:O()("input",y.touched.instagram&&y.errors.instagram?"is-danger":""),type:"text",placeholder:"Ex: https://instagram.com/...",id:"instagram",name:"instagram",onChange:y.handleChange,onBlur:y.handleBlur,value:y.values.instagram}),Boolean(y.touched.instagram&&y.errors.instagram)&&Object(w.jsx)("p",{className:"help is-danger",children:y.errors.instagram}),Object(w.jsx)("span",{className:"icon is-small is-left",children:Object(w.jsx)(m.g,{})})]})]}),Object(w.jsxs)("div",{className:"column",children:[Object(w.jsx)("label",{className:"label",htmlFor:"discord",children:"Discord"}),Object(w.jsxs)("div",{className:"control has-icons-left",children:[Object(w.jsx)("input",{className:O()("input",y.touched.discord&&y.errors.discord?"is-danger":""),type:"text",placeholder:"Ex: https://t.me/...",id:"discord",name:"discord",onChange:y.handleChange,onBlur:y.handleBlur,value:y.values.discord}),Boolean(y.touched.discord&&y.errors.discord)&&Object(w.jsx)("p",{className:"help is-danger",children:y.errors.discord}),Object(w.jsx)("span",{className:"icon is-small is-left",children:Object(w.jsx)(b.a,{})})]})]})]}),Object(w.jsxs)("div",{className:"field",children:[Object(w.jsx)("label",{className:"label",htmlFor:"reddit",children:"Reddit"}),Object(w.jsxs)("div",{className:"control has-icons-left",children:[Object(w.jsx)("input",{className:O()("input",y.touched.reddit&&y.errors.reddit?"is-danger":""),type:"text",placeholder:"Ex: https://reddit.com/...",id:"reddit",name:"reddit",onChange:y.handleChange,onBlur:y.handleBlur,value:y.values.reddit}),Boolean(y.touched.reddit&&y.errors.reddit)&&Object(w.jsx)("p",{className:"help is-danger",children:y.errors.reddit}),Object(w.jsx)("span",{className:"icon is-small is-left",children:Object(w.jsx)(m.l,{})})]})]}),Object(w.jsxs)("div",{className:"field",children:[Object(w.jsx)("label",{className:"label",htmlFor:"description",children:"Description"}),Object(w.jsx)("div",{className:"control",children:Object(w.jsx)("textarea",{className:"textarea",placeholder:"Ex: This is the best project...",id:"description",name:"description",onChange:y.handleChange,onBlur:y.handleBlur,value:y.values.description})})]}),Object(w.jsxs)("div",{className:"has-text-centered",children:[Object(w.jsx)(x.a,{type:"button",onClick:function(){return h.goBack()},children:"Back"}),Object(w.jsx)("span",{className:"mr-4"}),Object(w.jsx)(x.a,{loading:a,type:"submit",primary:!0,disabled:Boolean(y.errors.logoUrl||y.errors.website),children:"Update"})]})]})})})}},824:function(e,t,a){"use strict";var c=a(7),r=a.n(c),s=a(47),n=a(281),l=a(3),i=a(15),o=a(5);function d(e,t){switch(e){case l.a.BSC_TESTNET:return Object(i.m)(o.a.contract.multicall.ABI,o.a.contract.multicall.addresses.BSC_TESTNET,t);case l.a.AVAX:return Object(i.m)(o.a.contract.multicall.ABI,o.a.contract.multicall.addresses.AVAX,t);case l.a.MATIC_TESTNET:return Object(i.m)(o.a.contract.multicall.ABI,o.a.contract.multicall.addresses.MATIC_TESTNET,t);case l.a.MATIC_MAINNET:return Object(i.m)(o.a.contract.multicall.ABI,o.a.contract.multicall.addresses.MATIC,t);case l.a.KCC_TESTNET:return Object(i.m)(o.a.contract.multicall.ABI,o.a.contract.multicall.addresses.KCC_TESTNET,t);case l.a.KCC_MAINNET:return Object(i.m)(o.a.contract.multicall.ABI,o.a.contract.multicall.addresses.KCC,t);case l.a.ETH_MAINNET:return Object(i.m)(o.a.contract.multicall.ABI,o.a.contract.multicall.addresses.ETH,t);default:return Object(i.m)(o.a.contract.multicall.ABI,o.a.contract.multicall.addresses.BSC,t)}}function u(){return(u=Object(s.a)(r.a.mark((function e(t,a){var c,s,i,o,u,b,m,j,h=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=h.length>2&&void 0!==h[2]?h[2]:{},s=h.length>3?h[3]:void 0,e.prev=2,i=d(s||l.a.BSC_TESTNET,c.web3),o=new n.Interface(t),u=a.map((function(e){return[e.address.toLowerCase(),o.encodeFunctionData(e.name,e.params)]})),e.next=8,i.methods.aggregate(u).call(void 0,c.blockNumber);case 8:return b=e.sent,m=b.returnData,j=m.map((function(e,t){return o.decodeFunctionResult(a[t].name,e)})),e.abrupt("return",j);case 14:throw e.prev=14,e.t0=e.catch(2),new Error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})))).apply(this,arguments)}t.a=function(e,t){return u.apply(this,arguments)}},826:function(e,t,a){"use strict";var c=a(90),r=a(2);t.a=function(e){var t=e.primary,a=void 0!==t&&t,s=e.loading,n=void 0!==s&&s,l=e.fullwidth,i=void 0!==l&&l,o=e.disabled,d=void 0!==o&&o,u=e.danger,b=void 0!==u&&u,m=e.type,j=void 0===m?"button":m,h=e.icon,O=e.children,p=e.onClick;return Object(r.jsx)(c.a,{type:a?"primary":"default",icon:h,htmlType:j,loading:n,block:i,disabled:d,danger:b,onClick:p,children:O})}},895:function(e,t,a){"use strict";var c;!function(e){e[e.COMPLETED=1]="COMPLETED",e[e.CANCELED=2]="CANCELED"}(c||(c={})),t.a=c},911:function(e,t,a){"use strict";a.d(t,"a",(function(){return g}));var c=a(7),r=a.n(c),s=a(32),n=a(47),l=a(18),i=a(1),o=a(58),d=a(27),u=a(174),b=a(824),m=a(5),j=a(15),h=a(54),O=a(895),p=a(448);function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=Object(i.useState)(),c=Object(l.a)(a,2),g=c[0],v=c[1],f=Object(i.useState)(!1),x=Object(l.a)(f,1),N=x[0],C=Object(i.useState)(!1),k=Object(l.a)(C,2),S=k[0],w=k[1],T=Object(d.i)(),I=Object(u.q)(T),B=Object(u.u)(e,T),E=Object(o.c)(),R=E.account,A=Object(d.c)(),U=Object(i.useCallback)((function(){e&&I&&(Object(n.a)(r.a.mark((function t(){var a,c,n,i,o,d,u,p,g,f,x,N,C,k,S,w,B,E,R,U,y,L,F,V,P,D,_,M,q,H,W,K,J,X,G,z,Q,Y,Z,$,ee,te,ae,ce,re,se,ne,le,ie,oe,de,ue,be,me,je,he,Oe,pe,ge,ve,fe,xe,Ne,Ce,ke,Se,we,Te,Ie,Be,Ee,Re,Ae,Ue,ye,Le,Fe,Ve,Pe,De,_e,Me,qe,He,We,Ke,Je,Xe,Ge,ze,Qe,Ye,Ze,$e,et,tt,at,ct,rt,st,nt,lt,it,ot,dt,ut;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={},t.prev=1,t.next=4,Object(b.a)(m.a.contract.pool.ABI,[{address:e,name:"version"}],{web3:T},A);case 4:if(c=t.sent,n=Object(l.a)(c,1),i=Object(l.a)(n[0],1),o=i[0],d=m.a.contract.pool.ABI,u=["endTime","factory","liquidityPercent","liquidityUnlockTime","owner","rate","router","softCap","startTime","token","totalClaimed","totalRaised","poolDetails","liquidityLockDays","completedKyc","governance","poolState","withdrawableTokens","totalVestingTokens","tgeTime",o>3&&o!==m.a.contract.FAIRLAUNCH_VERSION?"tgeReleasePct":"tgeTokensRelease","cycle",o>3&&o!==m.a.contract.FAIRLAUNCH_VERSION?"cycleReleasePct":"tokensReleaseEachCycle","totalVestedTokens","tgeLockDuration"],!(o>=23||o>=5&&o<m.a.contract.FAIRLAUNCH_VERSION)){t.next=24;break}return d=o>=23?m.a.contract.fairlaunchPoolV23.ABI:m.a.contract.poolV5.ABI,p=["lockId","getContributorCount"].map((function(t){return{address:e,name:t}})),t.next=16,Object(b.a)(d,p,{web3:T},A);case 16:g=t.sent,f=Object(l.a)(g,2),x=Object(l.a)(f[0],1),N=x[0],C=Object(l.a)(f[1],1),k=C[0],a.lockId=N.toString(),a.contributorCount=k.toString();case 24:if(!(o>=m.a.contract.FAIRLAUNCH_VERSION)){t.next=37;break}return d=o===m.a.contract.FAIRLAUNCH_VERSION?m.a.contract.fairlaunchPool.ABI:m.a.contract.fairlaunchPoolV2.ABI,S=["totalSellingAmount"].map((function(t){return{address:e,name:t}})),t.next=30,Object(b.a)(d,S,{web3:T},A);case 30:w=t.sent,B=Object(l.a)(w,1),E=Object(l.a)(B[0],1),R=E[0],a.totalSellingAmount=R.toString(),t.next=61;break;case 37:return U=["hardCap","liquidityListingRate","maxContribution","minContribution","refundType","totalVolumePurchased"].map((function(t){return{address:e,name:t}})),t.next=41,Object(b.a)(d,U,{web3:T},A);case 41:y=t.sent,L=Object(l.a)(y,6),F=Object(l.a)(L[0],1),V=F[0],P=Object(l.a)(L[1],1),D=P[0],_=Object(l.a)(L[2],1),M=_[0],q=Object(l.a)(L[3],1),H=q[0],W=Object(l.a)(L[4],1),K=W[0],J=Object(l.a)(L[5],1),X=J[0],a.hardCap=V.toString(),a.liquidityListingRate=D.toString(),a.maxContribution=M.toString(),a.minContribution=H.toString(),a.refundType=K.toString(),a.totalVolumePurchased=X.toString();case 61:if(!(o>1&&o<21)){t.next=73;break}return d=o>3&&o<21?m.a.contract.poolV3.ABI:m.a.contract.poolV2.ABI,t.next=65,Object(b.a)(d,[{address:e,name:"useWhitelisting"},{address:e,name:"getNumberOfWhitelistedUsers"}],{web3:T},A);case 65:G=t.sent,z=Object(l.a)(G,2),Q=Object(l.a)(z[0],1),Y=Q[0],Z=Object(l.a)(z[1],1),$=Z[0],a.useWhitelisting=Y,a.numberOfWhitelistedUsers=$.toString();case 73:if(!(o>3&&o<21)){t.next=88;break}return d=m.a.contract.poolV4.ABI,t.next=77,Object(b.a)(d,[{address:e,name:"vcTgeReleasePct"},{address:e,name:"vcCycleReleasePct"},{address:e,name:"vcCycle"}],{web3:T},A);case 77:ee=t.sent,te=Object(l.a)(ee,3),ae=Object(l.a)(te[0],1),ce=ae[0],re=Object(l.a)(te[1],1),se=re[0],ne=Object(l.a)(te[2],1),le=ne[0],a.vcTgeReleasePct=ce.toString(),a.vcCycleReleasePct=se.toString(),a.vcCycle=le.toString();case 88:return ie=u.map((function(t){return{address:e,name:t}})),t.next=91,Object(b.a)(d,ie,{web3:T},A);case 91:return oe=t.sent,de=Object(l.a)(oe,25),ue=Object(l.a)(de[0],1),be=ue[0],me=Object(l.a)(de[1],1),je=me[0],he=Object(l.a)(de[2],1),Oe=he[0],pe=Object(l.a)(de[3],1),ge=pe[0],ve=Object(l.a)(de[4],1),fe=ve[0],xe=Object(l.a)(de[5],1),Ne=xe[0],Ce=Object(l.a)(de[6],1),ke=Ce[0],Se=Object(l.a)(de[7],1),we=Se[0],Te=Object(l.a)(de[8],1),Ie=Te[0],Be=Object(l.a)(de[9],1),Ee=Be[0],Re=Object(l.a)(de[10],1),Ae=Re[0],Ue=Object(l.a)(de[11],1),ye=Ue[0],Le=Object(l.a)(de[12],1),Fe=Le[0],Ve=Object(l.a)(de[13],1),Pe=Ve[0],De=Object(l.a)(de[14],1),_e=De[0],Me=Object(l.a)(de[15],1),qe=Me[0],He=Object(l.a)(de[16],1),We=He[0],Ke=Object(l.a)(de[17],1),Je=Ke[0],Xe=Object(l.a)(de[18],1),Ge=Xe[0],ze=Object(l.a)(de[19],1),Qe=ze[0],Ye=Object(l.a)(de[20],1),Ze=Ye[0],$e=Object(l.a)(de[21],1),et=$e[0],tt=Object(l.a)(de[22],1),at=tt[0],ct=Object(l.a)(de[23],1),rt=ct[0],st=Object(l.a)(de[24],1),nt=st[0],t.next=145,I.methods.tokenFeePercent().call();case 145:lt=t.sent,ot=+new Date/1e3,dt=Number(Ie),ut=Number(be),ot<dt?it="incoming":ot>=dt&&ot<ut?it="inprogress":ot>=ut&&(it="ended"),a.hardCap&&Object(h.d)(ye.toString(),0).gte(Object(h.d)(a.hardCap.toString(),0))&&(it="filled"),Number(We)===O.a.COMPLETED&&(it="ended"),Number(We)===O.a.CANCELED&&(it="canceled"),o>3&&21!==o?(a.tgeReleasePct=Ze.toString(),a.cycleReleasePct=at.toString()):(a.tgeTokensRelease=Ze.toString(),a.tokensReleaseEachCycle=at.toString()),v((function(e){return Object(s.a)(Object(s.a)({},e),{},{endTime:be.toString(),factory:je,liquidityPercent:Oe.toString(),liquidityUnlockTime:ge.toString(),owner:fe,rate:Ne.toString(),router:ke,softCap:we.toString(),startTime:Ie.toString(),token:Ee,totalClaimed:Ae.toString(),totalRaised:ye.toString(),status:it,poolDetails:Object(j.e)(Fe),tokenFeePercent:lt,liquidityLockDays:Pe.toString(),completedKyc:_e,governance:qe,poolState:Number(We),withdrawableTokens:Je.toString(),totalVestingTokens:Ge.toString(),tgeTime:Qe.toString(),cycle:et.toString(),totalVestedTokens:rt.toString(),tgeLockDuration:nt.toString(),version:o},a)})),t.next=160;break;case 157:t.prev=157,t.t0=t.catch(1),console.log(t.t0);case 160:case"end":return t.stop()}}),t,null,[[1,157]])})))(),R&&Object(n.a)(r.a.mark((function t(){var a,c,n,i,o,d,u,j,h,O,p,g,f,x,N,C,k,S,w,I,B,E,U,y;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={},t.prev=1,t.next=4,Object(b.a)(m.a.contract.pool.ABI,[{address:e,name:"version"}],{web3:T},A);case 4:if(c=t.sent,n=Object(l.a)(c,1),i=Object(l.a)(n[0],1),o=i[0],d=["claimedOf","refundedOf","contributionOf"].map((function(t){return{address:e,name:t,params:[R]}})),u=m.a.contract.pool.ABI,!(o>1&&o<21)){t.next=19;break}return u=m.a.contract.poolV2.ABI,t.next=14,Object(b.a)(u,[{address:e,name:"isUserWhitelisted",params:[R]}],{web3:T},A);case 14:j=t.sent,h=Object(l.a)(j,1),O=Object(l.a)(h[0],1),p=O[0],a.isUserWhitelisted=p;case 19:if(!(o>=m.a.contract.FAIRLAUNCH_VERSION)){t.next=23;break}u=o===m.a.contract.FAIRLAUNCH_VERSION?m.a.contract.fairlaunchPool.ABI:m.a.contract.fairlaunchPoolV2.ABI,t.next=32;break;case 23:return g=["purchasedOf"].map((function(t){return{address:e,name:t,params:[R]}})),t.next=27,Object(b.a)(u,g,{web3:T},A);case 27:f=t.sent,x=Object(l.a)(f,1),N=Object(l.a)(x[0],1),C=N[0],a.purchasedOf=C.toString();case 32:return t.next=34,Object(b.a)(u,d,{web3:T},A);case 34:k=t.sent,S=Object(l.a)(k,3),w=Object(l.a)(S[0],1),I=w[0],B=Object(l.a)(S[1],1),E=B[0],U=Object(l.a)(S[2],1),y=U[0],v((function(e){return Object(s.a)(Object(s.a)(Object(s.a)({},e),a),{},{version:o,claimedOf:I.toString(),refundedOf:E.toString(),contributionOf:y.toString()})})),t.next=47;break;case 45:t.prev=45,t.t0=t.catch(1);case 47:case"end":return t.stop()}}),t,null,[[1,45]])})))())}),[e,R,I,T]),y=Object(i.useCallback)((function(e,t){Object(n.a)(r.a.mark((function a(){var c;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return w(!0),a.prev=1,a.next=4,B.methods.distributePurchasedTokens(e,t).send({from:R});case 4:p.b.success("Token distributed!"),U(),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(1),p.b.error(null!==(c=null===a.t0||void 0===a.t0?void 0:a.t0.message)&&void 0!==c?c:a.t0.toString());case 11:return a.prev=11,w(!1),a.finish(11);case 14:case"end":return a.stop()}}),a,null,[[1,8,11,14]])})))()}),[B,R]),L=Object(i.useCallback)((function(e,t){Object(n.a)(r.a.mark((function a(){var c;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return w(!0),a.prev=1,a.next=4,B.methods.distributeRefund(e,t).send({from:R});case 4:p.b.success("Refund distributed!"),U(),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(1),p.b.error(null!==(c=null===a.t0||void 0===a.t0?void 0:a.t0.message)&&void 0!==c?c:a.t0.toString());case 11:return a.prev=11,w(!1),a.finish(11);case 14:case"end":return a.stop()}}),a,null,[[1,8,11,14]])})))()}),[B,R]),F=Object(i.useMemo)((function(){return(null===g||void 0===g?void 0:g.version)&&((null===g||void 0===g?void 0:g.version)>=5&&(null===g||void 0===g?void 0:g.version)<m.a.contract.FAIRLAUNCH_VERSION||(null===g||void 0===g?void 0:g.version)>=23)&&(null===g||void 0===g?void 0:g.poolState)===O.a.COMPLETED&&0===Number((null===g||void 0===g?void 0:g.vcCycle)||"0")}),[null===g||void 0===g?void 0:g.version,null===g||void 0===g?void 0:g.poolState]),V=Object(i.useMemo)((function(){return(null===g||void 0===g?void 0:g.version)&&((null===g||void 0===g?void 0:g.version)>=5&&(null===g||void 0===g?void 0:g.version)<m.a.contract.FAIRLAUNCH_VERSION||(null===g||void 0===g?void 0:g.version)>=23)&&Number(null===g||void 0===g?void 0:g.contributorCount)>0&&(null===g||void 0===g?void 0:g.poolState)===O.a.CANCELED}),[null===g||void 0===g?void 0:g.version,null===g||void 0===g?void 0:g.poolState,null===g||void 0===g?void 0:g.contributorCount]);return Object(i.useEffect)((function(){U()}),[U,t]),{pool:g,loading:N,distributePurchasedTokens:y,distributeRefund:L,distributeLoading:S,isShowDistributeForm:F,isShowRefundForm:V}}}}]);