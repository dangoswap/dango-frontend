(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5304],{15932:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/info/tokens",function(){return r(23891)}])},23891:function(n,e,r){"use strict";r.r(e),r.d(e,{default:function(){return T}});var t=r(85893),i=r(87388),o=r(53503),c=r(5545),a=r(83559),s=r(99150),l=r(67294),u=r(53985),d=r(77176),f=r(76517),x=r(186),p=r(56934),h=r(87761),j=r(53629),m=r(60764),v=r(56245),b=r(37795);function g(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function y(){var n=g(["\n  display: inline-block;\n  min-width: 190px;\n  margin-left: 16px;\n  :hover {\n    cursor: pointer;\n    opacity: 0.6;\n  }\n"]);return y=function(){return n},n}function Z(){var n=g(["\n  border: 1px solid ",";\n  border-radius: ",";\n  padding: 16px;\n"]);return Z=function(){return n},n}function S(){var n=g(["\n  width: 100%;\n  overflow-x: auto;\n  padding: 16px 0;\n  white-space: nowrap;\n  ::-webkit-scrollbar {\n    display: none;\n  }\n"]);return S=function(){return n},n}var k=(0,x.ZP)(j.a)(y()),w=(0,x.ZP)(p.Z)(Z(),(function(n){return n.theme.colors.cardBorder}),(function(n){return n.theme.radii.card})),O=x.ZP.div(S()),D=function(n){var e=n.tokenData;return(0,t.jsx)(k,{to:"/info/token/".concat(e.address),children:(0,t.jsx)(w,{children:(0,t.jsxs)(h.Z,{children:[(0,t.jsx)(p.Z,{width:"32px",height:"32px",children:(0,t.jsx)(m.X,{address:e.address,size:"32px"})}),(0,t.jsxs)(p.Z,{ml:"16px",children:[(0,t.jsx)(c.Z,{children:e.symbol}),(0,t.jsxs)(h.Z,{alignItems:"center",children:[(0,t.jsxs)(c.Z,{fontSize:"14px",mr:"6px",lineHeight:"16px",children:["$",(0,v.d)(e.priceUSD)]}),(0,t.jsx)(b.Z,{fontSize:"14px",value:e.priceUSDChange})]})]})]})})})},P=function(){var n=(0,u.jv)(),e=(0,s.$G)().t,r=(0,l.useMemo)((function(){return Object.values(n).sort((function(n,e){var r=n.data,t=e.data;return r&&t?Math.abs(null===r||void 0===r?void 0:r.priceUSDChange)>Math.abs(null===t||void 0===t?void 0:t.priceUSDChange)?-1:1:-1})).slice(0,Math.min(20,Object.values(n).length))}),[n]),i=(0,l.useRef)(null),a=(0,l.useRef)(!0);return(0,l.useEffect)((function(){var n=setInterval((function(){i.current&&(i.current.scrollLeft===i.current.scrollWidth-i.current.clientWidth?a.current=!1:0===i.current.scrollLeft&&(a.current=!0),i.current.scrollTo(a.current?i.current.scrollLeft+1:i.current.scrollLeft-1,0))}),30);return function(){clearInterval(n)}}),[]),0!==r.length&&r.some((function(n){return n.data}))?(0,t.jsxs)(o.Z,{my:"16px",children:[(0,t.jsx)(c.Z,{ml:"16px",mt:"8px",children:e("Top Movers")}),(0,t.jsx)(O,{ref:i,children:r.map((function(n){var e;return n.data?(0,t.jsx)(D,{tokenData:n.data},"top-card-token-".concat(null===(e=n.data)||void 0===e?void 0:e.address)):null}))})]}):null};function C(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=n[r];return t}function _(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var r=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var t,i,o=[],c=!0,a=!1;try{for(r=r.call(n);!(c=(t=r.next()).done)&&(o.push(t.value),!e||o.length!==e);c=!0);}catch(s){a=!0,i=s}finally{try{c||null==r.return||r.return()}finally{if(a)throw i}}return o}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return C(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return C(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var z=function(){var n=(0,s.$G)().t,e=(0,u.jv)(),r=(0,l.useMemo)((function(){return Object.values(e).map((function(n){return n.data})).filter((function(n){return n}))}),[e]),x=_((0,d.z6)(),1)[0],p=(0,u._n)(x);return(0,t.jsxs)(a.Z,{children:[(0,t.jsx)(i.Z,{scale:"lg",mb:"16px",children:n("Your Watchlist")}),x.length>0?(0,t.jsx)(f.Z,{tokenDatas:p}):(0,t.jsx)(o.Z,{children:(0,t.jsx)(c.Z,{py:"16px",px:"24px",children:n("Saved tokens will appear here")})}),(0,t.jsx)(P,{}),(0,t.jsx)(i.Z,{scale:"lg",mt:"40px",mb:"16px",id:"info-tokens-title",children:n("All Tokens")}),(0,t.jsx)(f.Z,{tokenDatas:r})]})},U=r(19690),E=function(){return(0,t.jsx)(z,{})};E.Layout=U.O;var T=E},76517:function(n,e,r){"use strict";var t=r(85893),i=r(67294),o=r(186),c=r(6741),a=r(51888),s=r(87761),l=r(5545),u=r(58018),d=r(7098),f=r(56934),x=r(53629),p=r(60764),h=r(56245),j=r(37795),m=r(99150),v=r(58910);function b(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function g(){var n=b(["\n  display: grid;\n  grid-gap: 1em;\n  align-items: center;\n\n  padding: 0 24px;\n\n  grid-template-columns: 20px 3fr repeat(4, 1fr);\n\n  @media screen and (max-width: 900px) {\n    grid-template-columns: 20px 2fr repeat(3, 1fr);\n    & :nth-child(4) {\n      display: none;\n    }\n  }\n\n  @media screen and (max-width: 800px) {\n    grid-template-columns: 20px 2fr repeat(2, 1fr);\n    & :nth-child(6) {\n      display: none;\n    }\n  }\n\n  @media screen and (max-width: 670px) {\n    grid-template-columns: 1fr 1fr;\n    > *:first-child {\n      display: none;\n    }\n    > *:nth-child(3) {\n      display: none;\n    }\n  }\n"]);return g=function(){return n},n}function y(){var n=b(["\n  text-decoration: none;\n  :hover {\n    cursor: pointer;\n    opacity: 0.7;\n  }\n"]);return y=function(){return n},n}function Z(){var n=b(["\n  @media screen and (max-width: 670px) {\n    width: 16px;\n    height: 16px;\n  }\n"]);return Z=function(){return n},n}var S=o.ZP.div(g()),k=(0,o.ZP)(x.a)(y()),w=(0,o.ZP)(p.X)(Z()),O=function(){var n=(0,t.jsxs)(S,{children:[(0,t.jsx)(c.Z,{}),(0,t.jsx)(c.Z,{}),(0,t.jsx)(c.Z,{}),(0,t.jsx)(c.Z,{}),(0,t.jsx)(c.Z,{}),(0,t.jsx)(c.Z,{})]});return(0,t.jsxs)(t.Fragment,{children:[n,n,n]})},D=function(n){var e=n.tokenData,r=n.index,i=(0,a.Z)(),o=i.isXs,c=i.isSm;return(0,t.jsx)(k,{to:"/info/token/".concat(e.address),children:(0,t.jsxs)(S,{children:[(0,t.jsx)(s.Z,{children:(0,t.jsx)(l.Z,{children:r+1})}),(0,t.jsxs)(s.Z,{alignItems:"center",children:[(0,t.jsx)(w,{address:e.address}),(o||c)&&(0,t.jsx)(l.Z,{ml:"8px",children:e.symbol}),!o&&!c&&(0,t.jsxs)(s.Z,{marginLeft:"10px",children:[(0,t.jsx)(l.Z,{children:e.name}),(0,t.jsxs)(l.Z,{ml:"8px",children:["(",e.symbol,")"]})]})]}),(0,t.jsxs)(l.Z,{fontWeight:400,children:["$",(0,h.d)(e.priceUSD,{notation:"standard"})]}),(0,t.jsx)(l.Z,{fontWeight:400,children:(0,t.jsx)(j.Z,{value:e.priceUSDChange,fontWeight:400})}),(0,t.jsxs)(l.Z,{fontWeight:400,children:["$",(0,h.d)(e.volumeUSD)]}),(0,t.jsxs)(l.Z,{fontWeight:400,children:["$",(0,h.d)(e.liquidityUSD)]})]})})},P="name",C="volumeUSD",_="liquidityUSD",z="priceUSD",U="priceUSDChange";e.Z=function(n){var e=n.tokenDatas,r=n.maxItems,o=void 0===r?10:r,a=(0,i.useState)(C),s=a[0],x=a[1],p=(0,i.useState)(!0),h=p[0],j=p[1],b=(0,m.$G)().t,g=(0,i.useState)(1),y=g[0],Z=g[1],k=(0,i.useState)(1),w=k[0],E=k[1];(0,i.useEffect)((function(){var n=1;e&&(e.length%o===0&&(n=0),E(Math.floor(e.length/o)+n))}),[o,e]);var T=(0,i.useMemo)((function(){return e?e.sort((function(n,e){return n&&e?n[s]>e[s]?1*(h?-1:1):-1*(h?-1:1):-1})).slice(o*(y-1),y*o):[]}),[e,o,y,h,s]),M=(0,i.useCallback)((function(n){x(n),j(s!==n||!h)}),[h,s]),I=(0,i.useCallback)((function(n){return s===n?h?"\u2193":"\u2191":""}),[h,s]);return e?(0,t.jsxs)(v.y6,{children:[(0,t.jsxs)(S,{children:[(0,t.jsx)(l.Z,{color:"secondary",fontSize:"12px",bold:!0,children:"#"}),(0,t.jsxs)(v._J,{color:"secondary",fontSize:"12px",bold:!0,onClick:function(){return M(P)},textTransform:"uppercase",children:[b("Name")," ",I(P)]}),(0,t.jsxs)(v._J,{color:"secondary",fontSize:"12px",bold:!0,onClick:function(){return M(z)},textTransform:"uppercase",children:[b("Price")," ",I(z)]}),(0,t.jsxs)(v._J,{color:"secondary",fontSize:"12px",bold:!0,onClick:function(){return M(U)},textTransform:"uppercase",children:[b("Price Change")," ",I(U)]}),(0,t.jsxs)(v._J,{color:"secondary",fontSize:"12px",bold:!0,onClick:function(){return M(C)},textTransform:"uppercase",children:[b("Volume 24H")," ",I(C)]}),(0,t.jsxs)(v._J,{color:"secondary",fontSize:"12px",bold:!0,onClick:function(){return M(_)},textTransform:"uppercase",children:[b("Liquidity")," ",I(_)]})]}),(0,t.jsx)(v.SS,{}),T.length>0?(0,t.jsxs)(t.Fragment,{children:[T.map((function(n,e){return n?(0,t.jsxs)(i.Fragment,{children:[(0,t.jsx)(D,{index:10*(y-1)+e,tokenData:n}),(0,t.jsx)(v.SS,{})]},n.address):null})),(0,t.jsxs)(v.Ob,{children:[(0,t.jsx)(v.Eh,{onClick:function(){Z(1===y?y:y-1)},children:(0,t.jsx)(u.Z,{color:1===y?"textDisabled":"primary"})}),(0,t.jsx)(l.Z,{children:b("Page %page% of %maxPage%",{page:y,maxPage:w})}),(0,t.jsx)(v.Eh,{onClick:function(){Z(y===w?y:y+1)},children:(0,t.jsx)(d.Z,{color:y===w?"textDisabled":"primary"})})]})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(O,{}),(0,t.jsx)(f.Z,{})]})]}):(0,t.jsx)(c.Z,{})}},37795:function(n,e,r){"use strict";var t=r(85893),i=r(5545);function o(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function c(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable})))),t.forEach((function(e){o(n,e,r[e])}))}return n}function a(n,e){if(null==n)return{};var r,t,i=function(n,e){if(null==n)return{};var r,t,i={},o=Object.keys(n);for(t=0;t<o.length;t++)r=o[t],e.indexOf(r)>=0||(i[r]=n[r]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(t=0;t<o.length;t++)r=o[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(i[r]=n[r])}return i}e.Z=function(n){var e=n.value,r=a(n,["value"]);if(!e||Number.isNaN(e))return(0,t.jsx)(i.Z,c({},r,{children:"-"}));var o=e<0;return(0,t.jsxs)(i.Z,c({},r,{color:o?"failure":"success",children:[o?"\u2193":"\u2191",Math.abs(e).toFixed(2),"%"]}))}}},function(n){n.O(0,[2077,8771,9774,2888,179],(function(){return e=15932,n(n.s=e);var e}));var e=n.O();_N_E=e}]);