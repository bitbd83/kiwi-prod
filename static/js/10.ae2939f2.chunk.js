(this["webpackJsonpkiwi-frontend"]=this["webpackJsonpkiwi-frontend"]||[]).push([[10],{773:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return b})),n.d(t,"c",(function(){return j}));var c=n(3),r=n.n(c),a=n(7),o=n(86),s=n.n(o),i=n(69),l=function(e,t){return new(new s.a(e).eth.Contract)(i,t)},b=function(){var e=Object(a.a)(r.a.mark((function e(t,n,c){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.methods.allowance(c,n.options.address).call();case 3:return a=e.sent,e.abrupt("return",a);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return","0");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n,c){return e.apply(this,arguments)}}(),j=function(){var e=Object(a.a)(r.a.mark((function e(t,n,c){var a,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=l(t,n),e.prev=1,e.next=4,a.methods.balanceOf(c).call();case 4:return o=e.sent,e.abrupt("return",o);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return","0");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n,c){return e.apply(this,arguments)}}()},780:function(e,t,n){"use strict";var c,r=n(13),a=(n(0),n(2)),o=n(16),s=n(1),i=a.e.div(c||(c=Object(r.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n\n  svg {\n    fill: ",";\n  }\n"])),(function(e){return e.theme.colors.primary})),l=function(e){var t=e.onClick,n=e.expanded;return Object(s.jsxs)(i,{"aria-label":"Hide or show expandable content",role:"button",onClick:function(){return t()},children:[Object(s.jsx)(o.G,{color:"primary",bold:!0,children:n?"Hide":"Details"}),n?Object(s.jsx)(o.m,{}):Object(s.jsx)(o.l,{})]})};l.defaultProps={expanded:!1},t.a=l},803:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Ge}));var c,r,a,o,s,i,l,b,j,d,u,x,p,O,m,h,f=n(18),k=n(0),v=n(31),y=n(30),g=n(8),T=n.n(g),S=n(60),w=n(16),C=n(188),A=n(350),I=n(124),q=n(76),G=n(150),D=n(36),L=n(23),P=n(32),N=n(19),E=n(13),z=n(2),Q=n(203),B=n(780),M=function(e){var t=e.quoteTokenAdresses,n=e.quoteTokenSymbol,c=e.tokenAddresses,r="BNB"===n?"ETH":t[56],a=c[56];return"".concat(r,"/").concat(a)},F=n(1),W=z.e.div(c||(c=Object(E.a)(["\n  margin-top: 24px;\n"]))),K=Object(z.e)(w.v)(r||(r=Object(E.a)(["\n  text-decoration: none;\n  font-weight: normal;\n  color: ",";\n  display: flex;\n  align-items: center;\n\n  svg {\n    padding-left: 4px;\n    height: 18px;\n    width: auto;\n    fill: ",";\n  }\n"])),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.primary})),U=function(e){var t=e.bscScanAddress,n=e.removed,c=(e.totalValueFormated,e.lpLabel),r=e.quoteTokenAdresses,a=e.quoteTokenSymbol,o=e.tokenAddresses,s=Object(P.a)(),i=M({quoteTokenAdresses:r,quoteTokenSymbol:a,tokenAddresses:o});return Object(F.jsxs)(W,{children:[Object(F.jsxs)(w.o,{justifyContent:"space-between",children:[Object(F.jsxs)(w.G,{children:[s(316,"Stake"),":"]}),Object(F.jsx)(K,{href:"https://cheeseswap.app/#/add/".concat(i),children:c})]}),!n&&Object(F.jsx)(w.o,{justifyContent:"space-between",children:Object(F.jsx)(w.G,{children:s(23," ")})}),Object(F.jsx)(w.o,{justifyContent:"flex-start",children:Object(F.jsx)(w.u,{external:!0,href:t,bold:!1,children:s(356,"View on BscScan")})})]})},R=n(104),V=Object(z.e)(w.o)(a||(a=Object(E.a)(["\n  svg {\n    margin-right: 0.25rem;\n  }\n"]))),H=Object(z.e)(w.F)(o||(o=Object(E.a)(["\n  margin-left: 4px;\n"]))),Y=function(e){var t=e.lpLabel,n=e.multiplier,c=e.isCommunityFarm,r=e.farmImage,a=e.tokenSymbol;return Object(F.jsxs)(V,{justifyContent:"space-between",alignItems:"center",mb:"12px",children:[Object(F.jsx)(w.r,{src:"/images/farms/".concat(r,".svg"),alt:a,width:64,height:64}),Object(F.jsxs)(w.o,{flexDirection:"column",alignItems:"flex-end",children:[Object(F.jsx)(w.p,{mb:"4px",children:t}),Object(F.jsxs)(w.o,{justifyContent:"center",children:[c?Object(F.jsx)(R.b,{}):Object(F.jsx)(R.c,{}),Object(F.jsx)(H,{variant:"secondary",children:n})]})]})]})},J=n(3),X=n.n(J),$=n(7),Z=n(773),_=n(202),ee=n(207),te=n(353),ne=n(354),ce=n(50),re=n(92),ae=n(142),oe=function(e){var t=e.max,n=e.onConfirm,c=e.onDismiss,r=e.tokenName,a=void 0===r?"":r,o=Object(k.useState)(""),s=Object(N.a)(o,2),i=s[0],l=s[1],b=Object(k.useState)(!1),j=Object(N.a)(b,2),d=j[0],u=j[1],x=Object(P.a)(),p=Object(k.useMemo)((function(){return Object(ce.b)(t)}),[t]),O=Object(k.useCallback)((function(e){l(e.currentTarget.value)}),[l]),m=Object(k.useCallback)((function(){l(p)}),[p,l]);return Object(F.jsxs)(w.z,{title:"".concat(x(316,"Deposit")," ").concat(a," Tokens"),onDismiss:c,children:[Object(F.jsx)(ae.a,{value:i,onSelectMax:m,onChange:O,max:p,symbol:a}),Object(F.jsxs)(re.a,{children:[Object(F.jsx)(w.d,{variant:"secondary",onClick:c,children:x(462,"Cancel")}),Object(F.jsx)(w.d,{disabled:d,onClick:Object($.a)(X.a.mark((function e(){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,n(i);case 3:u(!1),c();case 5:case"end":return e.stop()}}),e)}))),children:d?x(488,"Pending Confirmation"):x(464,"Confirm")})]})]})},se=function(e){var t=e.onConfirm,n=e.onDismiss,c=e.max,r=e.tokenName,a=void 0===r?"":r,o=Object(k.useState)(""),s=Object(N.a)(o,2),i=s[0],l=s[1],b=Object(k.useState)(!1),j=Object(N.a)(b,2),d=j[0],u=j[1],x=Object(P.a)(),p=Object(k.useMemo)((function(){return Object(ce.b)(c)}),[c]),O=Object(k.useCallback)((function(e){l(e.currentTarget.value)}),[l]),m=Object(k.useCallback)((function(){l(p)}),[p,l]);return Object(F.jsxs)(w.z,{title:"Withdraw ".concat(a),onDismiss:n,children:[Object(F.jsx)(ae.a,{onSelectMax:m,onChange:O,value:i,max:p,symbol:a}),Object(F.jsxs)(re.a,{children:[Object(F.jsx)(w.d,{variant:"secondary",onClick:n,children:x(462,"Cancel")}),Object(F.jsx)(w.d,{disabled:d,onClick:Object($.a)(X.a.mark((function e(){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,t(i);case 3:u(!1),n();case 5:case"end":return e.stop()}}),e)}))),children:d?x(488,"Pending Confirmation"):x(464,"Confirm")})]})]})},ie=z.e.div(s||(s=Object(E.a)(["\n  display: flex;\n  svg {\n    width: 20px;\n  }\n"]))),le=function(e){var t=e.stakedBalance,n=e.tokenBalance,c=e.tokenName,r=e.pid,a=Object(P.a)(),o=Object(te.a)(r).onStake,s=Object(ne.a)(r).onUnstake,i=Object(ce.a)(t),l=i.toLocaleString(),b=Object(w.N)(Object(F.jsx)(oe,{max:n,onConfirm:o,tokenName:c})),j=Object(N.a)(b,1)[0],d=Object(w.N)(Object(F.jsx)(se,{max:t,onConfirm:s,tokenName:c})),u=Object(N.a)(d,1)[0];return Object(F.jsxs)(w.o,{justifyContent:"space-between",alignItems:"center",children:[Object(F.jsx)(w.p,{color:0===i?"textDisabled":"text",children:l}),0===i?Object(F.jsx)(w.d,{onClick:j,children:a(999,"Stake LP")}):Object(F.jsxs)(ie,{children:[Object(F.jsx)(w.q,{variant:"tertiary",onClick:u,mr:"6px",children:Object(F.jsx)(w.y,{color:"primary"})}),Object(F.jsx)(w.q,{variant:"tertiary",onClick:j,children:Object(F.jsx)(w.a,{color:"primary"})})]})]})},be=n(213),je=function(e){var t=e.earnings,n=e.pid,c=Object(P.a)(),r=Object(k.useState)(!1),a=Object(N.a)(r,2),o=a[0],s=a[1],i=Object(be.b)(n).onReward,l=Object(ce.a)(t),b=l.toLocaleString();return Object(F.jsxs)(w.o,{mb:"8px",justifyContent:"space-between",alignItems:"center",children:[Object(F.jsx)(w.p,{color:0===l?"textDisabled":"text",children:b}),Object(F.jsx)(w.d,{disabled:0===l||o,onClick:Object($.a)(X.a.mark((function e(){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.next=3,i();case 3:s(!1);case 4:case"end":return e.stop()}}),e)}))),children:c(999,"Harvest")})]})},de=z.e.div(i||(i=Object(E.a)(["\n  padding-top: 16px;\n"]))),ue=function(e){var t=e.farm,n=e.ethereum,c=e.account,r=Object(P.a)(),a=Object(k.useState)(!1),o=Object(N.a)(a,2),s=o[0],i=o[1],l=Object(q.a)(t.lpSymbol),b=l.pid,j=l.lpAddresses,d=Object(q.b)(b),u=d.allowance,x=d.tokenBalance,p=d.stakedBalance,O=d.earnings,m=j[56],h=t.lpSymbol.toUpperCase(),f=c&&u&&u.isGreaterThan(0),v=Object(k.useMemo)((function(){return Object(Z.b)(n,m)}),[n,m]),y=Object(ee.a)(v).onApprove,g=Object(k.useCallback)(Object($.a)(X.a.mark((function e(){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i(!0),e.next=4,y();case 4:i(!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[y]);return Object(F.jsxs)(de,{children:[Object(F.jsxs)(w.o,{children:[Object(F.jsx)(w.G,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"3px",children:"KIWI"}),Object(F.jsx)(w.G,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:r(999,"Earned")})]}),Object(F.jsx)(je,{earnings:O,pid:b}),Object(F.jsxs)(w.o,{children:[Object(F.jsx)(w.G,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"3px",children:h}),Object(F.jsx)(w.G,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:r(999,"Staked")})]}),c?f?Object(F.jsx)(le,{stakedBalance:p,tokenBalance:x,tokenName:h,pid:b}):Object(F.jsx)(w.d,{mt:"8px",fullWidth:!0,disabled:s,onClick:g,children:r(999,"Approve Contract")}):Object(F.jsx)(_.a,{mt:"8px",fullWidth:!0})]})},xe=function(e){var t,n=e.numberOfDays,c=e.farmApy/100,r=n/365,a=1e3/e.kiwiPrice,o=a*Math.pow(1+c/365,365*r);return t=o-a,Math.round(100*t)/100},pe=function(e){return(e.amountEarned/e.amountInvested*100).toFixed(2)},Oe=z.e.div(l||(l=Object(E.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(4, auto);\n  margin-bottom: 24px;\n"]))),me=z.e.div(b||(b=Object(E.a)(["\n  margin-bottom: '10px';\n"]))),he=Object(z.e)(w.G)(j||(j=Object(E.a)(["\n  max-width: 320px;\n  margin-bottom: 28px;\n"]))),fe=function(e){var t=e.onDismiss,n=e.lpLabel,c=e.quoteTokenAdresses,r=e.quoteTokenSymbol,a=e.tokenAddresses,o=e.kiwiPrice,s=e.apy,i=Object(P.a)(),l=M({quoteTokenAdresses:c,quoteTokenSymbol:r,tokenAddresses:a}),b=s.times(new T.a(100)).toNumber(),j=1e3/o.toNumber(),d=xe({numberOfDays:1,farmApy:b,kiwiPrice:o}),u=xe({numberOfDays:7,farmApy:b,kiwiPrice:o}),x=xe({numberOfDays:30,farmApy:b,kiwiPrice:o}),p=xe({numberOfDays:365,farmApy:b,kiwiPrice:o});return Object(F.jsxs)(w.z,{title:"ROI",onDismiss:t,children:[Object(F.jsxs)(Oe,{children:[Object(F.jsx)(me,{children:Object(F.jsx)(w.G,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:i(999,"Timeframe")})}),Object(F.jsx)(me,{children:Object(F.jsx)(w.G,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:i(999,"ROI")})}),Object(F.jsx)(me,{children:Object(F.jsx)(w.G,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:i(999,"KIWI per $1000")})}),Object(F.jsx)(me,{children:Object(F.jsx)(w.G,{children:"1d"})}),Object(F.jsx)(me,{children:Object(F.jsxs)(w.G,{children:[pe({amountEarned:d,amountInvested:j}),"%"]})}),Object(F.jsx)(me,{children:Object(F.jsx)(w.G,{children:d})}),Object(F.jsx)(me,{children:Object(F.jsx)(w.G,{children:"7d"})}),Object(F.jsx)(me,{children:Object(F.jsxs)(w.G,{children:[pe({amountEarned:u,amountInvested:j}),"%"]})}),Object(F.jsx)(me,{children:Object(F.jsx)(w.G,{children:u})}),Object(F.jsx)(me,{children:Object(F.jsx)(w.G,{children:"30d"})}),Object(F.jsx)(me,{children:Object(F.jsxs)(w.G,{children:[pe({amountEarned:x,amountInvested:j}),"%"]})}),Object(F.jsx)(me,{children:Object(F.jsx)(w.G,{children:x})}),Object(F.jsx)(me,{children:Object(F.jsx)(w.G,{children:"365d(APY)"})}),Object(F.jsx)(me,{children:Object(F.jsxs)(w.G,{children:[pe({amountEarned:p,amountInvested:j}),"%"]})}),Object(F.jsx)(me,{children:Object(F.jsx)(w.G,{children:p})})]}),Object(F.jsx)(he,{fontSize:"12px",color:"textSubtle",children:i(999,"Calculated based on current rates. Compounding once daily. Rates are estimates provided for your convenience only, and by no means represent guaranteed returns.")}),Object(F.jsx)(w.o,{justifyContent:"center",children:Object(F.jsxs)(w.v,{href:"https://cheeseswap.app/#/add/".concat(l),children:[i(999,"Get")," ",n]})})]})},ke=function(e){var t=e.lpLabel,n=e.quoteTokenAdresses,c=e.quoteTokenSymbol,r=e.tokenAddresses,a=e.kiwiPrice,o=e.apy,s=Object(w.N)(Object(F.jsx)(fe,{lpLabel:t,quoteTokenAdresses:n,quoteTokenSymbol:c,tokenAddresses:r,kiwiPrice:a,apy:o})),i=Object(N.a)(s,1)[0];return Object(F.jsx)(w.q,{onClick:i,variant:"text",size:"sm",ml:"4px",children:Object(F.jsx)(w.g,{})})},ve=Object(z.f)(d||(d=Object(E.a)(["\n\t0% {\n\t\tbackground-position: 0% 50%;\n\t}\n\t50% {\n\t\tbackground-position: 100% 50%;\n\t}\n\t100% {\n\t\tbackground-position: 0% 50%;\n\t}\n"]))),ye=z.e.div(u||(u=Object(E.a)(["\n  background: linear-gradient(\n    45deg,\n    rgba(255, 0, 0, 1) 0%,\n    rgba(255, 154, 0, 1) 10%,\n    rgba(208, 222, 33, 1) 20%,\n    rgba(79, 220, 74, 1) 30%,\n    rgba(63, 218, 216, 1) 40%,\n    rgba(47, 201, 226, 1) 50%,\n    rgba(28, 127, 238, 1) 60%,\n    rgba(95, 21, 242, 1) 70%,\n    rgba(186, 12, 248, 1) 80%,\n    rgba(251, 7, 217, 1) 90%,\n    rgba(255, 0, 0, 1) 100%\n  );\n  background-size: 300% 300%;\n  animation: "," 2s linear infinite;\n  border-radius: 32px;\n  filter: blur(6px);\n  position: absolute;\n  top: -2px;\n  right: -2px;\n  bottom: -2px;\n  left: -2px;\n  z-index: -1;\n"])),ve),ge=z.e.div(x||(x=Object(E.a)(["\n  align-self: baseline;\n  background: ",";\n  border-radius: 32px;\n  box-shadow: 0px 0px 10px rgba(9, 31, 67, 0.1);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding: 24px;\n  position: relative;\n  text-align: center;\n"])),(function(e){return e.theme.card.background})),Te=z.e.div(p||(p=Object(E.a)(["\n  background-color: ",";\n  height: 1px;\n  margin: 28px auto;\n  width: 100%;\n"])),(function(e){return e.theme.colors.borderColor})),Se=z.e.div(O||(O=Object(E.a)(["\n  height: ",";\n  overflow: hidden;\n"])),(function(e){return e.expanded?"100%":"0px"})),we=function(e){var t=e.farm,n=e.removed,c=e.kiwiPrice,r=e.bnbPrice,a=e.ethereum,o=e.account,s=Object(P.a)(),i=Object(k.useState)(!1),l=Object(N.a)(i,2),b=l[0],j=l[1],d=Q.a.includes(t.tokenSymbol),u=t.lpSymbol.split(" ")[0].toLocaleLowerCase(),x=Object(k.useMemo)((function(){return t.lpTotalInQuoteToken?t.quoteTokenSymbol===L.b.BNB?r.times(t.lpTotalInQuoteToken):t.quoteTokenSymbol===L.b.KIWI?c.times(t.lpTotalInQuoteToken):t.lpTotalInQuoteToken:null}),[r,c,t.lpTotalInQuoteToken,t.quoteTokenSymbol]),p=x?"$".concat(Number(x).toLocaleString(void 0,{maximumFractionDigits:0})):"-",O=t.lpSymbol&&t.lpSymbol.toUpperCase().replace("KIWIFINANCE",""),m=t.dual?t.dual.earnLabel:"KIWI",h=t.apy&&t.apy.times(new T.a(100)).toNumber().toLocaleString("en-US").slice(0,-1),f=t.quoteTokenAdresses,v=t.quoteTokenSymbol,y=t.tokenAddresses;return Object(F.jsxs)(ge,{children:["KIWI"===t.tokenSymbol&&Object(F.jsx)(ye,{}),Object(F.jsx)(Y,{lpLabel:O,multiplier:t.multiplier,isCommunityFarm:d,farmImage:u,tokenSymbol:t.tokenSymbol}),!n&&Object(F.jsxs)(w.o,{justifyContent:"space-between",alignItems:"center",children:[Object(F.jsxs)(w.G,{children:[s(352,"APY"),":"]}),Object(F.jsx)(w.G,{bold:!0,style:{display:"flex",alignItems:"center"},children:t.apy?Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(ke,{lpLabel:O,quoteTokenAdresses:f,quoteTokenSymbol:v,tokenAddresses:y,kiwiPrice:c,apy:t.apy}),h,"%"]}):Object(F.jsx)(w.D,{height:24,width:80})})]}),Object(F.jsxs)(w.o,{justifyContent:"space-between",children:[Object(F.jsxs)(w.G,{children:[s(318,"Earn"),":"]}),Object(F.jsx)(w.G,{bold:!0,children:m})]}),Object(F.jsx)(ue,{farm:t,ethereum:a,account:o}),Object(F.jsx)(Te,{}),Object(F.jsx)(B.a,{onClick:function(){return j(!b)},expanded:b}),Object(F.jsx)(Se,{expanded:b,children:Object(F.jsx)(U,{removed:n,bscScanAddress:"https://bscscan.com/address/".concat(t.lpAddresses[56]),totalValueFormated:p,lpLabel:O,quoteTokenAdresses:f,quoteTokenSymbol:v,tokenAddresses:y})})]})},Ce=n(53),Ae=function(){var e=Object(v.h)(),t=e.url,n=e.isExact,c=Object(P.a)();return Object(F.jsx)(Ie,{children:Object(F.jsxs)(w.e,{activeIndex:n?0:1,size:"sm",variant:"subtle",children:[Object(F.jsx)(w.f,{as:Ce.b,to:"".concat(t),children:c(999,"Active")}),Object(F.jsx)(w.f,{as:Ce.b,to:"".concat(t,"/history"),children:c(999,"Inactive")})]})})},Ie=z.e.div(m||(m=Object(E.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 32px;\n"]))),qe=z.e.div(h||(h=Object(E.a)(["\n  background-color: ",";\n  height: 1px;\n  margin: 0 auto 32px;\n  width: 100%;\n"])),(function(e){return e.theme.colors.textSubtle})),Ge=function(){var e=Object(v.h)().path,t=Object(P.a)(),n=Object(q.c)(),c=Object(q.g)(),r=Object(q.f)(),a=Object(S.j)(),o=a.account,s=a.ethereum,i=Object(y.b)(),l=Object(G.a)().fastRefresh;Object(k.useEffect)((function(){o&&i(Object(D.a)(o))}),[o,i,l]);var b=n.filter((function(e){return 0!==e.pid&&"0X"!==e.multiplier})),j=n.filter((function(e){return 0!==e.pid&&"0X"===e.multiplier})),d=Object(k.useCallback)((function(e,t){var a,i=new T.a((null===(a=n.find((function(e){return e.pid===C.d})))||void 0===a?void 0:a.tokenPriceVsQuote)||0);return e.map((function(e){if(!e.tokenAmount||!e.lpTotalInQuoteToken||!e.lpTotalInQuoteToken)return e;var t=C.c.times(e.poolWeight),n=t.times(C.a),c=i.times(n).div(e.lpTotalInQuoteToken);if(e.quoteTokenSymbol===L.b.USDT||e.quoteTokenSymbol===L.b.USDC)c=i.times(n).div(e.lpTotalInQuoteToken).times(r);else if(e.quoteTokenSymbol===L.b.KIWI)c=n.div(e.lpTotalInQuoteToken);else if(e.dual){var a=e&&i.times(t).times(C.a).div(e.lpTotalInQuoteToken),o=e.tokenPriceVsQuote&&new T.a(e.tokenPriceVsQuote).times(e.dual.rewardPerBlock).times(C.a).div(e.lpTotalInQuoteToken);c=a&&o&&a.plus(o)}return Object(f.a)(Object(f.a)({},e),{},{apy:c})})).map((function(e){return Object(F.jsx)(we,{farm:e,removed:t,bnbPrice:r,kiwiPrice:c,ethereum:s,account:o},e.pid)}))}),[r,n,o,c,s]);return Object(F.jsxs)(I.a,{children:[Object(F.jsx)(w.p,{as:"h1",size:"lg",color:"secondary",mb:"50px",style:{textAlign:"center"},children:t(999,"Stake Cheese-LP tokens to earn KIWI")}),Object(F.jsx)(w.p,{as:"h3",size:"lg",color:"secondary",mb:"50px",style:{textAlign:"center"},children:t(999,'CAUTION!: FARMS CALCULATED "APY" DATA IS REAL TIME AND AUTOMATICALLY COLLECTED FROM BLOCKCHAIN. DATA MAY NOT BE ACCURATE.')}),Object(F.jsx)(Ae,{}),Object(F.jsxs)("div",{children:[Object(F.jsx)(qe,{}),Object(F.jsxs)(A.a,{children:[Object(F.jsx)(v.b,{exact:!0,path:"".concat(e),children:d(b,!1)}),Object(F.jsx)(v.b,{exact:!0,path:"".concat(e,"/history"),children:d(j,!0)})]})]}),Object(F.jsx)(w.r,{src:"/images/farm-bg.svg",alt:"KiwiFinance illustration",width:1080,height:600,responsive:!0})]})}}}]);
//# sourceMappingURL=10.ae2939f2.chunk.js.map