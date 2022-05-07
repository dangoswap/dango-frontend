(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9776],{7777:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/info",function(){return r(80015)}])},80015:function(n,e,r){"use strict";r.r(e),r.d(e,{default:function(){return z}});var t=r(85893),i=r(19690),s=r(67294),o=r(186),c=r(87761),a=r(87388),l=r(53503),d=r(56934),u=r(5545),x=r(6741),f=r(42227),p=r(99150),h=r(83559),j=r(45091),m=r(76517),Z=r(994),g=r(56245),y=r(55224),v=r(53985),S=r(58543);function b(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=n[r];return t}function k(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var r=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var t,i,s=[],o=!0,c=!1;try{for(r=r.call(n);!(o=(t=r.next()).done)&&(s.push(t.value),!e||s.length!==e);o=!0);}catch(a){c=!0,i=a}finally{try{o||null==r.return||r.return()}finally{if(c)throw i}}return s}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return b(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return b(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(){var n,e,r=(n=["\n  justify-content: space-between;\n  flex-direction: column;\n  width: 100%;\n  padding: 0;\n  gap: 1em;\n\n  & > * {\n    width: 100%;\n  }\n\n  "," {\n    flex-direction: row;\n  } ;\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return D=function(){return r},r}var w=(0,o.ZP)(c.Z)(D(),(function(n){return n.theme.mediaQueries.md})),P=function(){var n=(0,p.$G)(),e=n.t,r=n.currentLanguage.locale,i=(0,s.useState)(),o=i[0],c=i[1],b=(0,s.useState)(),D=b[0],P=b[1],C=(0,s.useState)(),z=C[0],_=C[1],O=(0,s.useState)(),U=O[0],T=O[1],E=k((0,v.rf)(),1)[0],$=k((0,v.B5)(),1)[0],J=k((0,v.Wz)(),1)[0],A=(new Date).toLocaleString(r,{month:"short",year:"numeric",day:"numeric"});(0,s.useEffect)((function(){null==z&&E&&_(E.volumeUSD)}),[E,z]),(0,s.useEffect)((function(){null==o&&E&&c(E.liquidityUSD)}),[o,E]);var F=(0,s.useMemo)((function(){return $?$.map((function(n){return{time:(0,f.Z)(n.date),value:n.liquidityUSD}})):[]}),[$]),M=(0,s.useMemo)((function(){return $?$.map((function(n){return{time:(0,f.Z)(n.date),value:n.volumeUSD}})):[]}),[$]),q=(0,v.jv)(),L=(0,s.useMemo)((function(){return Object.values(q).map((function(n){return n.data})).filter((function(n){return n}))}),[q]),H=(0,v.JX)(),W=(0,s.useMemo)((function(){return Object.values(H).map((function(n){return n.data})).filter((function(n){return n}))}),[H]),I=(0,s.useMemo)((function(){return Object.values(H).some((function(n){return!n.data}))}),[H]);return(0,t.jsxs)(h.Z,{children:[(0,t.jsx)(a.Z,{scale:"lg",mb:"16px",id:"info-overview-title",children:e("PancakeSwap Info & Analytics")}),(0,t.jsxs)(w,{children:[(0,t.jsx)(l.Z,{children:(0,t.jsxs)(d.Z,{p:["16px","16px","24px"],children:[(0,t.jsx)(u.Z,{bold:!0,color:"secondary",children:e("Liquidity")}),o>0?(0,t.jsxs)(u.Z,{bold:!0,fontSize:"24px",children:["$",(0,g.d)(o)]}):(0,t.jsx)(x.Z,{width:"128px",height:"36px"}),(0,t.jsx)(u.Z,{children:null!==D&&void 0!==D?D:A}),(0,t.jsx)(d.Z,{height:"250px",children:(0,t.jsx)(j.Z,{data:F,setHoverValue:c,setHoverDate:P})})]})}),(0,t.jsx)(l.Z,{children:(0,t.jsxs)(d.Z,{p:["16px","16px","24px"],children:[(0,t.jsx)(u.Z,{bold:!0,color:"secondary",children:e("Volume 24H")}),z>0?(0,t.jsxs)(u.Z,{bold:!0,fontSize:"24px",children:["$",(0,g.d)(z)]}):(0,t.jsx)(x.Z,{width:"128px",height:"36px"}),(0,t.jsx)(u.Z,{children:null!==U&&void 0!==U?U:A}),(0,t.jsx)(d.Z,{height:"250px",children:(0,t.jsx)(y.Z,{data:M,setHoverValue:_,setHoverDate:T})})]})})]}),(0,t.jsx)(a.Z,{scale:"lg",mt:"40px",mb:"16px",children:e("Top Tokens")}),(0,t.jsx)(m.Z,{tokenDatas:L}),(0,t.jsx)(a.Z,{scale:"lg",mt:"40px",mb:"16px",children:e("Top Pools")}),(0,t.jsx)(Z.Z,{poolDatas:W,loading:I}),(0,t.jsx)(a.Z,{scale:"lg",mt:"40px",mb:"16px",children:e("Transactions")}),(0,t.jsx)(S.Z,{transactions:J})]})},C=function(){return(0,t.jsx)(P,{})};C.Layout=i.O;var z=C},994:function(n,e,r){"use strict";var t=r(85893),i=r(67294),s=r(186),o=r(53629),c=r(6741),a=r(5545),l=r(87761),d=r(58018),u=r(7098),x=r(56934),f=r(56245),p=r(4003),h=r(60764),j=r(99150),m=r(58910);function Z(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function g(){var n=Z(["\n  display: grid;\n  grid-gap: 1em;\n  align-items: center;\n  grid-template-columns: 20px 3.5fr repeat(5, 1fr);\n\n  padding: 0 24px;\n  @media screen and (max-width: 900px) {\n    grid-template-columns: 20px 1.5fr repeat(3, 1fr);\n    & :nth-child(4),\n    & :nth-child(5) {\n      display: none;\n    }\n  }\n  @media screen and (max-width: 500px) {\n    grid-template-columns: 20px 1.5fr repeat(1, 1fr);\n    & :nth-child(4),\n    & :nth-child(5),\n    & :nth-child(6),\n    & :nth-child(7) {\n      display: none;\n    }\n  }\n  @media screen and (max-width: 480px) {\n    grid-template-columns: 2.5fr repeat(1, 1fr);\n    > *:nth-child(1) {\n      display: none;\n    }\n  }\n"]);return g=function(){return n},n}function y(){var n=Z(["\n  text-decoration: none;\n  :hover {\n    cursor: pointer;\n    opacity: 0.7;\n  }\n"]);return y=function(){return n},n}var v=s.ZP.div(g()),S=(0,s.ZP)(o.a)(y()),b="volumeUSD",k="liquidityUSD",D="volumeUSDWeek",w="lpFees24h",P="lpApr7d",C=function(){return(0,t.jsxs)(v,{children:[(0,t.jsx)(c.Z,{}),(0,t.jsx)(c.Z,{}),(0,t.jsx)(c.Z,{}),(0,t.jsx)(c.Z,{}),(0,t.jsx)(c.Z,{}),(0,t.jsx)(c.Z,{}),(0,t.jsx)(c.Z,{})]})},z=function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(C,{}),(0,t.jsx)(C,{}),(0,t.jsx)(C,{})]})},_=function(n){var e=n.poolData,r=n.index;return(0,t.jsx)(S,{to:"/info/pool/".concat(e.address),children:(0,t.jsxs)(v,{children:[(0,t.jsx)(a.Z,{children:r+1}),(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(h.g,{address0:e.token0.address,address1:e.token1.address}),(0,t.jsxs)(a.Z,{ml:"8px",children:[e.token0.symbol,"/",e.token1.symbol]})]}),(0,t.jsxs)(a.Z,{children:["$",(0,f.d)(e.volumeUSD)]}),(0,t.jsxs)(a.Z,{children:["$",(0,f.d)(e.volumeUSDWeek)]}),(0,t.jsxs)(a.Z,{children:["$",(0,f.d)(e.lpFees24h)]}),(0,t.jsxs)(a.Z,{children:[(0,f.d)(e.lpApr7d),"%"]}),(0,t.jsxs)(a.Z,{children:["$",(0,f.d)(e.liquidityUSD)]})]})})};e.Z=function(n){var e=n.poolDatas,r=n.loading,s=(0,i.useState)(b),o=s[0],c=s[1],l=(0,i.useState)(!0),f=l[0],h=l[1],Z=(0,j.$G)().t,g=(0,i.useState)(1),y=g[0],S=g[1],O=(0,i.useState)(1),U=O[0],T=O[1];(0,i.useEffect)((function(){var n=1;e.length%p.si===0&&(n=0),T(Math.floor(e.length/p.si)+n)}),[e]);var E=(0,i.useMemo)((function(){return e?e.sort((function(n,e){return n&&e?n[o]>e[o]?1*(f?-1:1):-1*(f?-1:1):-1})).slice(p.si*(y-1),y*p.si):[]}),[y,e,f,o]),$=(0,i.useCallback)((function(n){c(n),h(o!==n||!f)}),[f,o]),J=(0,i.useCallback)((function(n){return o===n?f?"\u2193":"\u2191":""}),[f,o]);return(0,t.jsxs)(m.y6,{children:[(0,t.jsxs)(v,{children:[(0,t.jsx)(a.Z,{color:"secondary",fontSize:"12px",bold:!0,children:"#"}),(0,t.jsx)(a.Z,{color:"secondary",fontSize:"12px",bold:!0,textTransform:"uppercase",children:Z("Pool")}),(0,t.jsxs)(m._J,{color:"secondary",fontSize:"12px",bold:!0,onClick:function(){return $(b)},textTransform:"uppercase",children:[Z("Volume 24H")," ",J(b)]}),(0,t.jsxs)(m._J,{color:"secondary",fontSize:"12px",bold:!0,onClick:function(){return $(D)},textTransform:"uppercase",children:[Z("Volume 7D")," ",J(D)]}),(0,t.jsxs)(m._J,{color:"secondary",fontSize:"12px",bold:!0,onClick:function(){return $(w)},textTransform:"uppercase",children:[Z("LP reward fees 24H")," ",J(w)]}),(0,t.jsxs)(m._J,{color:"secondary",fontSize:"12px",bold:!0,onClick:function(){return $(P)},textTransform:"uppercase",children:[Z("LP reward APR")," ",J(P)]}),(0,t.jsxs)(m._J,{color:"secondary",fontSize:"12px",bold:!0,onClick:function(){return $(k)},textTransform:"uppercase",children:[Z("Liquidity")," ",J(k)]})]}),(0,t.jsx)(m.SS,{}),E.length>0?(0,t.jsxs)(t.Fragment,{children:[E.map((function(n,e){return n?(0,t.jsxs)(i.Fragment,{children:[(0,t.jsx)(_,{index:(y-1)*p.si+e,poolData:n}),(0,t.jsx)(m.SS,{})]},n.address):null})),r&&(0,t.jsx)(C,{}),(0,t.jsxs)(m.Ob,{children:[(0,t.jsx)(m.Eh,{onClick:function(){S(1===y?y:y-1)},children:(0,t.jsx)(d.Z,{color:1===y?"textDisabled":"primary"})}),(0,t.jsx)(a.Z,{children:Z("Page %page% of %maxPage%",{page:y,maxPage:U})}),(0,t.jsx)(m.Eh,{onClick:function(){S(y===U?y:y+1)},children:(0,t.jsx)(u.Z,{color:y===U?"textDisabled":"primary"})})]})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(z,{}),(0,t.jsx)(x.Z,{})]})]})}},76517:function(n,e,r){"use strict";var t=r(85893),i=r(67294),s=r(186),o=r(6741),c=r(51888),a=r(87761),l=r(5545),d=r(58018),u=r(7098),x=r(56934),f=r(53629),p=r(60764),h=r(56245),j=r(37795),m=r(99150),Z=r(58910);function g(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function y(){var n=g(["\n  display: grid;\n  grid-gap: 1em;\n  align-items: center;\n\n  padding: 0 24px;\n\n  grid-template-columns: 20px 3fr repeat(4, 1fr);\n\n  @media screen and (max-width: 900px) {\n    grid-template-columns: 20px 2fr repeat(3, 1fr);\n    & :nth-child(4) {\n      display: none;\n    }\n  }\n\n  @media screen and (max-width: 800px) {\n    grid-template-columns: 20px 2fr repeat(2, 1fr);\n    & :nth-child(6) {\n      display: none;\n    }\n  }\n\n  @media screen and (max-width: 670px) {\n    grid-template-columns: 1fr 1fr;\n    > *:first-child {\n      display: none;\n    }\n    > *:nth-child(3) {\n      display: none;\n    }\n  }\n"]);return y=function(){return n},n}function v(){var n=g(["\n  text-decoration: none;\n  :hover {\n    cursor: pointer;\n    opacity: 0.7;\n  }\n"]);return v=function(){return n},n}function S(){var n=g(["\n  @media screen and (max-width: 670px) {\n    width: 16px;\n    height: 16px;\n  }\n"]);return S=function(){return n},n}var b=s.ZP.div(y()),k=(0,s.ZP)(f.a)(v()),D=(0,s.ZP)(p.X)(S()),w=function(){var n=(0,t.jsxs)(b,{children:[(0,t.jsx)(o.Z,{}),(0,t.jsx)(o.Z,{}),(0,t.jsx)(o.Z,{}),(0,t.jsx)(o.Z,{}),(0,t.jsx)(o.Z,{}),(0,t.jsx)(o.Z,{})]});return(0,t.jsxs)(t.Fragment,{children:[n,n,n]})},P=function(n){var e=n.tokenData,r=n.index,i=(0,c.Z)(),s=i.isXs,o=i.isSm;return(0,t.jsx)(k,{to:"/info/token/".concat(e.address),children:(0,t.jsxs)(b,{children:[(0,t.jsx)(a.Z,{children:(0,t.jsx)(l.Z,{children:r+1})}),(0,t.jsxs)(a.Z,{alignItems:"center",children:[(0,t.jsx)(D,{address:e.address}),(s||o)&&(0,t.jsx)(l.Z,{ml:"8px",children:e.symbol}),!s&&!o&&(0,t.jsxs)(a.Z,{marginLeft:"10px",children:[(0,t.jsx)(l.Z,{children:e.name}),(0,t.jsxs)(l.Z,{ml:"8px",children:["(",e.symbol,")"]})]})]}),(0,t.jsxs)(l.Z,{fontWeight:400,children:["$",(0,h.d)(e.priceUSD,{notation:"standard"})]}),(0,t.jsx)(l.Z,{fontWeight:400,children:(0,t.jsx)(j.Z,{value:e.priceUSDChange,fontWeight:400})}),(0,t.jsxs)(l.Z,{fontWeight:400,children:["$",(0,h.d)(e.volumeUSD)]}),(0,t.jsxs)(l.Z,{fontWeight:400,children:["$",(0,h.d)(e.liquidityUSD)]})]})})},C="name",z="volumeUSD",_="liquidityUSD",O="priceUSD",U="priceUSDChange";e.Z=function(n){var e=n.tokenDatas,r=n.maxItems,s=void 0===r?10:r,c=(0,i.useState)(z),a=c[0],f=c[1],p=(0,i.useState)(!0),h=p[0],j=p[1],g=(0,m.$G)().t,y=(0,i.useState)(1),v=y[0],S=y[1],k=(0,i.useState)(1),D=k[0],T=k[1];(0,i.useEffect)((function(){var n=1;e&&(e.length%s===0&&(n=0),T(Math.floor(e.length/s)+n))}),[s,e]);var E=(0,i.useMemo)((function(){return e?e.sort((function(n,e){return n&&e?n[a]>e[a]?1*(h?-1:1):-1*(h?-1:1):-1})).slice(s*(v-1),v*s):[]}),[e,s,v,h,a]),$=(0,i.useCallback)((function(n){f(n),j(a!==n||!h)}),[h,a]),J=(0,i.useCallback)((function(n){return a===n?h?"\u2193":"\u2191":""}),[h,a]);return e?(0,t.jsxs)(Z.y6,{children:[(0,t.jsxs)(b,{children:[(0,t.jsx)(l.Z,{color:"secondary",fontSize:"12px",bold:!0,children:"#"}),(0,t.jsxs)(Z._J,{color:"secondary",fontSize:"12px",bold:!0,onClick:function(){return $(C)},textTransform:"uppercase",children:[g("Name")," ",J(C)]}),(0,t.jsxs)(Z._J,{color:"secondary",fontSize:"12px",bold:!0,onClick:function(){return $(O)},textTransform:"uppercase",children:[g("Price")," ",J(O)]}),(0,t.jsxs)(Z._J,{color:"secondary",fontSize:"12px",bold:!0,onClick:function(){return $(U)},textTransform:"uppercase",children:[g("Price Change")," ",J(U)]}),(0,t.jsxs)(Z._J,{color:"secondary",fontSize:"12px",bold:!0,onClick:function(){return $(z)},textTransform:"uppercase",children:[g("Volume 24H")," ",J(z)]}),(0,t.jsxs)(Z._J,{color:"secondary",fontSize:"12px",bold:!0,onClick:function(){return $(_)},textTransform:"uppercase",children:[g("Liquidity")," ",J(_)]})]}),(0,t.jsx)(Z.SS,{}),E.length>0?(0,t.jsxs)(t.Fragment,{children:[E.map((function(n,e){return n?(0,t.jsxs)(i.Fragment,{children:[(0,t.jsx)(P,{index:10*(v-1)+e,tokenData:n}),(0,t.jsx)(Z.SS,{})]},n.address):null})),(0,t.jsxs)(Z.Ob,{children:[(0,t.jsx)(Z.Eh,{onClick:function(){S(1===v?v:v-1)},children:(0,t.jsx)(d.Z,{color:1===v?"textDisabled":"primary"})}),(0,t.jsx)(l.Z,{children:g("Page %page% of %maxPage%",{page:v,maxPage:D})}),(0,t.jsx)(Z.Eh,{onClick:function(){S(v===D?v:v+1)},children:(0,t.jsx)(u.Z,{color:v===D?"textDisabled":"primary"})})]})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(w,{}),(0,t.jsx)(x.Z,{})]})]}):(0,t.jsx)(o.Z,{})}}},function(n){n.O(0,[2077,7206,931,8771,6631,4838,9774,2888,179],(function(){return e=7777,n(n.s=e);var e}));var e=n.O();_N_E=e}]);