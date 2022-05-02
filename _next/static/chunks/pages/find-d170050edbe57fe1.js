(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3190],{94980:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/find",function(){return t(85793)}])},85793:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return C}});var r,i=t(85893),o=t(67294),l=t(19778),c=t(99273),a=t(5545),s=t(97561),u=t(96913),d=t(45295),x=t(186),h=t(99150),f=t(53629),p=t(36261),j=t(41914),y=t(74314),g=t(86323),v=t(39475),m=t(99397),T=t(84915),Z=t(64011),b=t(77176),w=t(71900),A=t(28996),E=t(48468),N=t(45460),O=t(49438);function S(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function _(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,i,o=[],l=!0,c=!1;try{for(t=t.call(n);!(l=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);l=!0);}catch(a){c=!0,i=a}finally{try{l||null==t.return||t.return()}finally{if(c)throw i}}return o}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return S(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return S(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(){var n,e,t=(n=["\n  background-color: ",";\n  color: ",";\n  box-shadow: none;\n  border-radius: 16px;\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return I=function(){return t},t}!function(n){n[n.TOKEN0=0]="TOKEN0",n[n.TOKEN1=1]="TOKEN1"}(r||(r={}));var k=(0,x.ZP)(c.Z)(I(),(function(n){return n.theme.colors.input}),(function(n){return n.theme.colors.text}));var C=function(){var n=(0,Z.Z)().account,e=(0,h.$G)().t,t=(0,o.useState)(r.TOKEN1),x=t[0],S=t[1],I=(0,o.useState)(l.c0),C=I[0],K=I[1],P=(0,o.useState)(null),X=P[0],q=P[1],z=_((0,T.yX)(null!==C&&void 0!==C?C:void 0,null!==X&&void 0!==X?X:void 0),2),B=z[0],G=z[1],Q=(0,b.uB)();(0,o.useEffect)((function(){G&&Q(G)}),[G,Q]);var H,L=B===T._G.NOT_EXISTS||Boolean(B===T._G.EXISTS&&G&&l.QA.equal(G.reserve0.raw,l.QA.BigInt(0))&&l.QA.equal(G.reserve1.raw,l.QA.BigInt(0))),M=(0,w.mM)(null!==n&&void 0!==n?n:void 0,null===G||void 0===G?void 0:G.liquidityToken),D=Boolean(M&&l.QA.greaterThan(M.raw,l.QA.BigInt(0))),W=(0,o.useCallback)((function(n){x===r.TOKEN0?K(n):q(n)}),[x]),$=(0,i.jsx)(p.hl,{padding:"45px 10px",children:(0,i.jsx)(a.Z,{textAlign:"center",children:e(n?"Select a token to find your liquidity.":"Connect to a wallet to find pools")})}),F=_((0,s.Z)((0,i.jsx)(m.Z,{onCurrencySelect:W,showCommonBases:!0,selectedCurrency:null!==(H=x===r.TOKEN0?X:C)&&void 0!==H?H:void 0}),!0,!0,"selectCurrencyModal"),1)[0];return(0,i.jsx)(O.Z,{children:(0,i.jsxs)(N.j,{children:[(0,i.jsx)(N.t,{title:e("Import Pool"),subtitle:e("Import an existing pool"),backTo:"/liquidity"}),(0,i.jsxs)(j.Tz,{style:{padding:"1rem"},gap:"md",children:[(0,i.jsx)(k,{endIcon:(0,i.jsx)(u.Z,{}),onClick:function(){F(),S(r.TOKEN0)},children:C?(0,i.jsxs)(v.ZP,{children:[(0,i.jsx)(y.Xw,{currency:C}),(0,i.jsx)(a.Z,{ml:"8px",children:C.symbol})]}):(0,i.jsx)(a.Z,{ml:"8px",children:e("Select a Token")})}),(0,i.jsx)(j.lg,{children:(0,i.jsx)(d.Z,{})}),(0,i.jsx)(k,{endIcon:(0,i.jsx)(u.Z,{}),onClick:function(){F(),S(r.TOKEN1)},children:X?(0,i.jsxs)(v.ZP,{children:[(0,i.jsx)(y.Xw,{currency:X}),(0,i.jsx)(a.Z,{ml:"8px",children:X.symbol})]}):(0,i.jsx)(a.Z,{as:v.ZP,children:e("Select a Token")})}),C&&X?B===T._G.EXISTS?D&&G?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(g.W,{pair:G}),(0,i.jsx)(c.Z,{as:f.a,to:"/pool",variant:"secondary",width:"100%",children:e("Manage this pool")})]}):(0,i.jsx)(p.hl,{padding:"45px 10px",children:(0,i.jsxs)(j.Tz,{gap:"sm",justify:"center",children:[(0,i.jsx)(a.Z,{textAlign:"center",children:e("You don\u2019t have liquidity in this pool yet.")}),(0,i.jsx)(c.Z,{as:f.a,to:"/add/".concat((0,A.H)(C),"/").concat((0,A.H)(X)),variant:"secondary",children:e("Add Liquidity")})]})}):L?(0,i.jsx)(p.hl,{padding:"45px 10px",children:(0,i.jsxs)(j.Tz,{gap:"sm",justify:"center",children:[(0,i.jsx)(a.Z,{textAlign:"center",children:e("No pool found.")}),(0,i.jsx)(c.Z,{as:f.a,to:"/add/".concat((0,A.H)(C),"/").concat((0,A.H)(X)),variant:"secondary",children:e("Create pool")})]})}):B===T._G.INVALID?(0,i.jsx)(p.hl,{padding:"45px 10px",children:(0,i.jsx)(j.Tz,{gap:"sm",justify:"center",children:(0,i.jsx)(a.Z,{textAlign:"center",fontWeight:500,children:e("Invalid pair.")})})}):B===T._G.LOADING?(0,i.jsx)(p.hl,{padding:"45px 10px",children:(0,i.jsx)(j.Tz,{gap:"sm",justify:"center",children:(0,i.jsxs)(a.Z,{textAlign:"center",children:[e("Loading"),(0,i.jsx)(E.Z,{})]})})}):null:$]})]})})}}},function(n){n.O(0,[9539,1843,1314,3632,9397,6323,9774,2888,179],(function(){return e=94980,n(n.s=e);var e}));var e=n.O();_N_E=e}]);