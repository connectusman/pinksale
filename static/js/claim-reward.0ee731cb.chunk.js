(this["webpackJsonppink-sale"]=this["webpackJsonppink-sale"]||[]).push([[7],{1124:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"address","name":"_dexRouter","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amountBNB","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amountBOG","type":"uint256"}],"name":"AutoLiquify","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"duration","type":"uint256"}],"name":"BuybackMultiplierActive","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"owner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"MASK","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WBNB","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_maxTxAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"holder","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"}],"name":"approveMax","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"authorize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"autoBuybackEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"autoLiquidityReceiver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"clearBuybackMultiplier","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"distributorAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCirculatingSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"accuracy","type":"uint256"}],"name":"getLiquidityBacking","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMultipliedFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"selling","type":"bool"}],"name":"getTotalFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"isAuthorized","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"target","type":"uint256"},{"internalType":"uint256","name":"accuracy","type":"uint256"}],"name":"isOverLiquified","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"launch","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"launchedAt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"launchedAtTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"marketingFeeReceiver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"pair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"router","outputs":[{"internalType":"contract IDEXRouter","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_enabled","type":"bool"},{"internalType":"uint256","name":"_cap","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_period","type":"uint256"}],"name":"setAutoBuybackSettings","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"numerator","type":"uint256"},{"internalType":"uint256","name":"denominator","type":"uint256"},{"internalType":"uint256","name":"length","type":"uint256"}],"name":"setBuybackMultiplierSettings","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_minPeriod","type":"uint256"},{"internalType":"uint256","name":"_minDistribution","type":"uint256"}],"name":"setDistributionCriteria","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"gas","type":"uint256"}],"name":"setDistributorSettings","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_autoLiquidityReceiver","type":"address"},{"internalType":"address","name":"_marketingFeeReceiver","type":"address"}],"name":"setFeeReceivers","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_liquidityFee","type":"uint256"},{"internalType":"uint256","name":"_buybackFee","type":"uint256"},{"internalType":"uint256","name":"_reflectionFee","type":"uint256"},{"internalType":"uint256","name":"_marketingFee","type":"uint256"},{"internalType":"uint256","name":"_feeDenominator","type":"uint256"}],"name":"setFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"holder","type":"address"},{"internalType":"bool","name":"exempt","type":"bool"}],"name":"setIsDividendExempt","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"holder","type":"address"},{"internalType":"bool","name":"exempt","type":"bool"}],"name":"setIsFeeExempt","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"holder","type":"address"},{"internalType":"bool","name":"exempt","type":"bool"}],"name":"setIsTxLimitExempt","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_enabled","type":"bool"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"setSwapBackSettings","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_target","type":"uint256"},{"internalType":"uint256","name":"_denominator","type":"uint256"}],"name":"setTargetLiquidity","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"setTxLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"swapEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"swapThreshold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"adr","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bool","name":"triggerBuybackMultiplier","type":"bool"}],"name":"triggerZeusBuyback","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"unauthorize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]')},1125:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"address","name":"_router","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"claimDividend","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"dividendsPerShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dividendsPerShareAccuracyFactor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"shareholder","type":"address"}],"name":"getUnpaidEarnings","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minDistribution","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"gas","type":"uint256"}],"name":"process","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_minPeriod","type":"uint256"},{"internalType":"uint256","name":"_minDistribution","type":"uint256"}],"name":"setDistributionCriteria","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"shareholder","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"setShare","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"shares","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"totalExcluded","type":"uint256"},{"internalType":"uint256","name":"totalRealised","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalDistributed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalDividends","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalShares","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]')},1126:function(e,t,n){e.exports={root:"YourReward_root__2hA1P",rewards:"YourReward_rewards__2f1o9"}},1127:function(e,t,n){e.exports={rewards:"ClaimReward_rewards__1Flps"}},1128:function(e,t,n){e.exports={root:"GuestNoticeOverlay_root__2wdEg",overlay:"GuestNoticeOverlay_overlay__2Tf25",notice:"GuestNoticeOverlay_notice__2tBYX",noticeText:"GuestNoticeOverlay_noticeText__2hKQ_"}},1298:function(e,t,n){"use strict";n.r(t);var a=n(7),i=n.n(a),s=n(28),r=n(42),o=n(17),u=n(1),l=n(457),c=n(907),p=n(816),d=n(896),y=n(54),m=n(48),b=n(56),f=n.n(b),v=n(55),j=n(24),h=n(11),T=n(1124),O=n(1125),x=n(832),g=n(77),w=n(1126),M=n.n(w),k=n(836),_=n(3),N=function(){return Object(_.jsx)("div",{style:{height:24}})},E=function(e){var t=e.rewards,n=e.symbol,a=e.disabled,i=e.loading,s=e.onClaim;return Object(_.jsxs)("div",{className:M.a.root,children:[Object(_.jsx)(x.a.Title,{level:5,children:"Your rewards"}),Object(_.jsx)(g.f,{size:24}),Object(_.jsx)("div",{className:M.a.rewards,children:t}),Object(_.jsx)("div",{children:n}),Object(_.jsx)(N,{}),Object(_.jsx)(k.a,{primary:!0,loading:i,disabled:a,onClick:s,children:"Claim Rewards"})]})},S=n(845),A=n(862),C=n(1127),R=n.n(C),D=n(848),I=n(1128),B=n.n(I),F=function(e){var t=e.children,n=Object(v.c)().active,a=Object(j.d)().open;return n?Object(_.jsx)(_.Fragment,{children:t}):Object(_.jsxs)("div",{className:B.a.root,children:[t,Object(_.jsx)("div",{className:B.a.overlay}),Object(_.jsx)("div",{className:B.a.notice,children:Object(_.jsxs)("div",{children:[Object(_.jsx)("span",{className:B.a.noticeText,onClick:a,children:"Connect Wallet"})," ","to continue"]})})]})};t.default=function(){var e=Object(y.h)(),t=Object(j.i)(),n=Object(v.c)().account,a=Object(u.useState)({address:"",balance:"0",totalRealised:"0",rewardNotClaimed:"0",totalDistributed:"0",distributorAddress:null,claimable:!1}),b=Object(o.a)(a,2),x=b[0],g=b[1],w=Object(u.useState)(!1),M=Object(o.a)(w,2),k=M[0],C=M[1],I=Object(A.a)(e.params.id),B=I.token,P=I.loading,L=Object(u.useCallback)((function(e){e&&f.a.utils.isAddress(e)&&n&&Object(r.a)(i.a.mark((function a(){var r,u,l,c,p,d,y,b,v,j,x,w,M,k,_,N,E,S,A,C,R,D,I,B,F,P,L;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,r=Object(h.o)(T,e,t),a.next=4,Promise.all([r.methods.decimals().call(),r.methods.distributorAddress().call()]);case 4:return u=a.sent,l=Object(o.a)(u,2),c=l[0],p=l[1],g((function(e){return Object(s.a)(Object(s.a)({},e),{},{distributorAddress:p})})),d=Object(h.o)(O,p,t),a.next=12,Promise.all([d.methods.shares(n).call(),d.methods.getUnpaidEarnings(n).call(),d.methods.totalDistributed().call()]);case 12:y=a.sent,b=Object(o.a)(y,3),v=b[0],j=b[1],x=b[2],w=f.a.utils.fromWei(j).split("."),M=Object(o.a)(w,2),k=M[0],_=M[1],N=f.a.utils.fromWei(x).split("."),E=Object(o.a)(N,2),S=E[0],A=E[1],C=f.a.utils.fromWei(v.totalRealised).split("."),R=Object(o.a)(C,2),D=R[0],I=R[1],B=Object(m.b)(v.amount,c).split("."),F=Object(o.a)(B,2),P=F[0],L=F[1],g({address:e,distributorAddress:p,balance:"".concat(P,".").concat(L.slice(0,3)),totalRealised:"".concat(D,".").concat(I.slice(0,3)),rewardNotClaimed:"".concat(k,".").concat(_.slice(0,3)),totalDistributed:"".concat(S,".").concat(A.slice(0,3)),claimable:Number(j)>0}),a.next=26;break;case 24:a.prev=24,a.t0=a.catch(0);case 26:case"end":return a.stop()}}),a,null,[[0,24]])})))()}),[t,n]),G=Object(u.useCallback)((function(){Object(r.a)(i.a.mark((function a(){var s;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,C(!0),s=Object(h.o)(O,x.distributorAddress||"",t),a.next=5,s.methods.claimDividend().send({from:n});case 5:l.b.success("Claimed"),L(e.params.id),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),l.b.error(a.t0.message||a.t0.toString());case 12:return a.prev=12,C(!1),a.finish(12);case 15:case"end":return a.stop()}}),a,null,[[0,9,12,15]])})))()}),[n,L,x.distributorAddress,e.params.id,t]);return Object(u.useEffect)((function(){L(e.params.id)}),[L,e.params.id]),Object(_.jsxs)("div",{className:"py-6 container",children:[Object(_.jsx)(c.a,{children:Object(_.jsx)(p.a,{spinning:P,children:Object(_.jsx)(D.a,{address:e.params.id,name:null===B||void 0===B?void 0:B.name,symbol:null===B||void 0===B?void 0:B.symbol,decimals:null===B||void 0===B?void 0:B.decimals})})}),Object(_.jsx)(N,{}),Object(_.jsx)(F,{children:Object(_.jsx)(c.a,{children:Object(_.jsxs)("div",{className:R.a.rewards,children:[Object(_.jsx)("div",{children:Object(_.jsx)(E,{rewards:x.rewardNotClaimed,disabled:!x.claimable,symbol:null===B||void 0===B?void 0:B.symbol,onClaim:G,loading:k})}),Object(_.jsxs)("div",{className:"flex-1",children:[Object(_.jsx)(S.a,{data:[["Your Wallet",Object(_.jsxs)("div",{style:{textAlign:"right"},children:[x.balance," ",null===B||void 0===B?void 0:B.symbol]},"token.balance")],["Total Earned",Object(_.jsxs)("div",{style:{textAlign:"right"},children:[x.totalRealised," ",null===B||void 0===B?void 0:B.symbol]},"totalRealised")],["Reward Distributed To Holders",Object(_.jsxs)("div",{style:{textAlign:"right"},children:[x.totalDistributed," ",null===B||void 0===B?void 0:B.symbol]},"Reward Distributed To Holders")]]}),Object(_.jsx)(N,{}),Object(_.jsx)(d.a,{message:Object(_.jsx)("div",{children:"Rewards are automatically sent every 60 minutes. It can, however, take longer depending on your holdings and trading volume. Rewards will be triggered once they are big enough to cover the gas fees. If you are a smaller holder it may take from a couple hours to a few days for rewards to appear in your wallet. You can also manually claim unclaimed rewards, but you will need to pay the gas fees."}),type:"success"})]})]})})})]})}},836:function(e,t,n){"use strict";var a=n(90),i=n(3);t.a=function(e){var t=e.primary,n=void 0!==t&&t,s=e.loading,r=void 0!==s&&s,o=e.fullwidth,u=void 0!==o&&o,l=e.disabled,c=void 0!==l&&l,p=e.danger,d=void 0!==p&&p,y=e.type,m=void 0===y?"button":y,b=e.icon,f=e.children,v=e.onClick;return Object(i.jsx)(a.a,{type:n?"primary":"default",icon:b,htmlType:m,loading:r,block:u,disabled:c,danger:d,onClick:v,children:f})}},837:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(17),i=n(1),s=n(2),r=n(24);function o(){var e=Object(i.useState)(),t=Object(a.a)(e,2),n=t[0],o=t[1],u=Object(r.c)();return Object(i.useEffect)((function(){switch(u){case s.a.BSC_TESTNET:o("https://testnet.bscscan.com");break;case s.a.BSC_MAINNET:o("https://bscscan.com");break;case s.a.MATIC_TESTNET:o("https://mumbai.polygonscan.com");break;case s.a.MATIC_MAINNET:o("https://polygonscan.com");break;case s.a.ETH_MAINNET:o("https://etherscan.io");break;case s.a.KCC_MAINNET:o("https://explorer.kcc.io/en");break;case s.a.AVAX:o("https://snowtrace.io/");break;default:o("https://bscscan.com")}}),[u]),n}},842:function(e,t,n){"use strict";function a(e){return Object.keys(e).reduce((function(t,n){return"data-"!==n.substr(0,5)&&"aria-"!==n.substr(0,5)&&"role"!==n||"data-__"===n.substr(0,7)||(t[n]=e[n]),t}),{})}n.d(t,"a",(function(){return a}))},845:function(e,t,n){"use strict";var a=n(1),i=n(849),s=n.n(i),r=n(3),o=function(e){var t=e.nodes;return Object(r.jsx)("tr",{className:s.a.root,children:t.map((function(e){return Object(r.jsx)("td",{className:s.a.node,children:e},null===e||void 0===e?void 0:e.toString())}))})},u=Object(a.memo)(o),l=n(850),c=n.n(l);t.a=function(e){var t=e.data,n=e.header;return Object(r.jsx)("div",{className:c.a.root,children:Object(r.jsxs)("table",{className:c.a.table,children:[n?Object(r.jsx)("thead",{children:Object(r.jsx)("tr",{children:n.map((function(e){return Object(r.jsx)("th",{children:e},e)}))})}):null,Object(r.jsx)("tbody",{children:t.map((function(e,t){return Object(r.jsx)(u,{nodes:e},"".concat(e.toString()).concat(t))}))})]})})}},848:function(e,t,n){"use strict";var a=n(1),i=n(857),s=n(11),r=n(837),o=n(845),u=n(56),l=n.n(u),c=n(3);t.a=function(e){var t=e.name,n=e.symbol,u=e.decimals,p=e.balance,d=e.address,y=Object(r.a)(),m=Object(a.useMemo)((function(){var e=[];return d&&l.a.utils.isAddress(d)&&e.push(["Token Address",Object(c.jsx)("div",{className:"has-text-info has-text-right",children:Object(c.jsxs)("a",{href:"".concat(y,"/address/").concat(d),target:"_blank",rel:"nofollow noreferrer",children:[d," ",Object(c.jsx)(i.a,{})]})},"token.address")]),t&&e.push(["Name",Object(c.jsx)("div",{className:"has-text-info has-text-right",children:t},"token.name")]),n&&e.push(["Symbol",Object(c.jsx)("div",{className:"has-text-right",children:n},"token.symbol")]),u&&e.push(["Decimals",Object(c.jsx)("div",{className:"has-text-right",children:u},"token.decimals")]),p&&e.push(["Balance",Object(c.jsx)("div",{className:"has-text-info has-text-right",children:Object(s.l)(p,Number(u))},"token.balance")]),e}),[d,y,t,n,u,p]);return Object(c.jsx)("div",{className:"mt-2 table-container",children:Object(c.jsx)(o.a,{data:m})})}},849:function(e,t,n){e.exports={root:"RowInfo_root__1XLti",node:"RowInfo_node__3kZFW"}},850:function(e,t,n){e.exports={root:"TableInfo_root__1aCB2",table:"TableInfo_table__31voJ"}},859:function(e,t,n){"use strict";var a=n(10),i=n(14),s=function(){function e(){Object(a.a)(this,e),this.NAMESPACE="pinksale"}return Object(i.a)(e,[{key:"get",value:function(e){try{var t=localStorage.getItem("".concat(this.NAMESPACE,"@").concat(e));return t?JSON.parse(t):t}catch(n){console.log("Unable to read this object: ",e)}}},{key:"set",value:function(e,t){try{return localStorage.setItem("".concat(this.NAMESPACE,"@").concat(e),JSON.stringify(t))}catch(n){console.log("Unable to store this object: ",e)}}},{key:"delete",value:function(e){return localStorage.removeItem("".concat(this.NAMESPACE,"@").concat(e))}},{key:"flash",value:function(e){var t=this.get(e);return this.delete(e),t}}]),e}();t.a=s},862:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var a=n(7),i=n.n(a),s=n(42),r=n(17),o=n(1),u=n(283),l=n(24),c=n(155),p=n(859),d=n(4),y=n(284),m=new p.a;function b(e,t,n){var a=Object(o.useState)(),p=Object(r.a)(a,2),b=p[0],f=p[1],v=Object(o.useState)(!0),j=Object(r.a)(v,2),h=j[0],T=j[1],O=Object(o.useState)(!1),x=Object(r.a)(O,2),g=x[0],w=x[1],M=Object(l.i)(),k=Object(c.z)(),_=Object(l.c)();return Object(o.useEffect)((function(){Object(s.a)(i.a.mark((function n(){var a,s,o,l,c,p,b,v,j,h,O,x,g,N,E,S;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e&&e!==d.a.ZERO_ADDRESS&&k){n.next=3;break}return T(!1),n.abrupt("return");case 3:n.prev=3,T(!0),w(!1);try{(s=m.get("token/".concat(e)))&&(f(s),T(!1))}catch(i){m.delete("token/".concat(e))}return o={},l=["name","symbol","decimals","totalSupply","isTokenGenerated"].map((function(t){return"isTokenGenerated"===t?{name:t,address:k,params:[e]}:{address:e,name:t}})),t&&l.push({address:e,name:"balanceOf",params:[t]}),n.next=12,Object(u.a)(y,l,{web3:M},_);case 12:c=n.sent,p=Object(r.a)(c,5),b=Object(r.a)(p[0],1),v=b[0],j=Object(r.a)(p[1],1),h=j[0],O=Object(r.a)(p[2],1),x=O[0],g=Object(r.a)(p[3],1),N=g[0],E=Object(r.a)(p[4],1),S=E[0],o.name=v,o.symbol=h,o.decimals=null===x||void 0===x?void 0:x.toString(),o.totalSupply=null===N||void 0===N?void 0:N.toString(),o.isTokenGenerated=Boolean(null!==S&&void 0!==S&&S),o.poolBalance=null===c||void 0===c||null===(a=c[5])||void 0===a?void 0:a.toString(),f(o),m.set("token/".concat(e),o),n.next=28;break;case 24:n.prev=24,n.t0=n.catch(3),f(void 0),w(!0);case 28:return n.prev=28,T(!1),n.finish(28);case 31:case"end":return n.stop()}}),n,null,[[3,24,28,31]])})))()}),[M,e,_,t,n,k]),{token:b,loading:h,error:g}}},896:function(e,t,n){"use strict";var a=n(5),i=n(9),s=n(15),r=n(1),o=n(177),u=n(181),l=n(156),c=n(182),p=n(183),d=n(287),y=n(292),m=n(291),b=n(176),f=n(62),v=n(13),j=n.n(v),h=n(72),T=n(842),O=n(27),x=n(31),g=n(32),w=n(34),M=function(e){Object(g.a)(n,e);var t=Object(w.a)(n);function n(){var e;return Object(O.a)(this,n),(e=t.apply(this,arguments)).state={error:void 0,info:{componentStack:""}},e}return Object(x.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({error:e,info:t})}},{key:"render",value:function(){var e=this.props,t=e.message,n=e.description,a=e.children,i=this.state,s=i.error,o=i.info,u=o&&o.componentStack?o.componentStack:null,l="undefined"===typeof t?(s||"").toString():t,c="undefined"===typeof n?u:n;return s?r.createElement(A,{type:"error",message:l,description:r.createElement("pre",null,c)}):a}}]),n}(r.Component),k=n(37),_=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(n[a[i]]=e[a[i]])}return n},N={success:d.a,info:m.a,error:b.a,warning:y.a},E={success:u.a,info:c.a,error:p.a,warning:l.a},S=function(e){var t,n=e.description,u=e.prefixCls,l=e.message,c=e.banner,p=e.className,d=void 0===p?"":p,y=e.style,m=e.onMouseEnter,b=e.onMouseLeave,v=e.onClick,O=e.afterClose,x=e.showIcon,g=e.closable,w=e.closeText,M=e.action,S=_(e,["description","prefixCls","message","banner","className","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","action"]),A=r.useState(!1),C=Object(s.a)(A,2),R=C[0],D=C[1],I=r.useRef(),B=r.useContext(h.b),F=B.getPrefixCls,P=B.direction,L=F("alert",u),G=function(e){var t;D(!0),null===(t=S.onClose)||void 0===t||t.call(S,e)},q=!!w||g,J=function(){var e=S.type;return void 0!==e?e:c?"warning":"info"}(),W=!(!c||void 0!==x)||x,Y=j()(L,"".concat(L,"-").concat(J),(t={},Object(i.a)(t,"".concat(L,"-with-description"),!!n),Object(i.a)(t,"".concat(L,"-no-icon"),!W),Object(i.a)(t,"".concat(L,"-banner"),!!c),Object(i.a)(t,"".concat(L,"-rtl"),"rtl"===P),t),d),z=Object(T.a)(S);return r.createElement(f.b,{visible:!R,motionName:"".concat(L,"-motion"),motionAppear:!1,motionEnter:!1,onLeaveStart:function(e){return{maxHeight:e.offsetHeight}},onLeaveEnd:O},(function(e){var t=e.className,s=e.style;return r.createElement("div",Object(a.a)({ref:I,"data-show":!R,className:j()(Y,t),style:Object(a.a)(Object(a.a)({},y),s),onMouseEnter:m,onMouseLeave:b,onClick:v,role:"alert"},z),W?function(){var e=S.icon,t=(n?E:N)[J]||null;return e?Object(k.c)(e,r.createElement("span",{className:"".concat(L,"-icon")},e),(function(){return{className:j()("".concat(L,"-icon"),Object(i.a)({},e.props.className,e.props.className))}})):r.createElement(t,{className:"".concat(L,"-icon")})}():null,r.createElement("div",{className:"".concat(L,"-content")},r.createElement("div",{className:"".concat(L,"-message")},l),r.createElement("div",{className:"".concat(L,"-description")},n)),M?r.createElement("div",{className:"".concat(L,"-action")},M):null,q?r.createElement("button",{type:"button",onClick:G,className:"".concat(L,"-close-icon"),tabIndex:0},w?r.createElement("span",{className:"".concat(L,"-close-text")},w):r.createElement(o.a,null)):null)}))};S.ErrorBoundary=M;var A=t.a=S}}]);