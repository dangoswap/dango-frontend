"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4838],{83482:function(n,e,t){t.d(e,{Z:function(){return d}});var r=t(186),o=t(57247),i="sm",a="md";function c(){var n,e,t=(n=["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ",";\n  width: ",";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ",";\n  box-shadow: ",';\n\n  &:after {\n    border-radius: 50%;\n    content: "";\n    height: ',";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ",";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ",";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ",";\n  }\n\n  &:checked {\n    background-color: ",";\n    &:after {\n      background-color: ",";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ","\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return c=function(){return t},t}var l=function(n){return n.scale===i?"24px":"32px"},s=function(n){return n.scale===i?"12px":"20px"},u=r.ZP.input.attrs({type:"radio"})(c(),l,l,(function(n){return n.theme.colors.input}),(function(n){return n.theme.shadows.inset}),s,s,(function(n){return n.theme.shadows.focus}),(function(n){return n.theme.shadows.focus}),(function(n){return n.theme.colors.success}),(function(n){return n.theme.radio.handleBackground}),o.Dh);u.defaultProps={scale:a,m:0};var d=u},55224:function(n,e,t){var r=t(85893),o=t(67294),i=t(56855),a=t(94831),c=t(3023),l=t(75358),s=t(14888),u=t(16580),d=t(23917),f=t(56245),h=t(66631),x=t(99150),p=function(n){var e=n.x,t=n.y,o=n.width,i=n.height,a=n.fill;return(0,r.jsx)("g",{children:(0,r.jsx)("rect",{x:e,y:t,fill:a,width:o,height:i,rx:"2"})})},m=function(n){var e=n.locale,t=n.payload,r=n.setHoverValue,i=n.setHoverDate;return(0,o.useEffect)((function(){r(t.value),i(t.time.toLocaleString(e,{year:"numeric",day:"numeric",month:"short"}))}),[e,t.value,t.time,r,i]),null};e.Z=function(n){var e=n.data,t=n.setHoverValue,o=n.setHoverDate,y=(0,x.$G)().currentLanguage.locale,j=(0,d.Z)().theme;return e&&0!==e.length?(0,r.jsx)(i.h,{width:"100%",height:"100%",children:(0,r.jsxs)(a.v,{data:e,margin:{top:5,right:15,left:0,bottom:5},onMouseLeave:function(){o(void 0),t(void 0)},children:[(0,r.jsx)(c.K,{dataKey:"time",axisLine:!1,tickLine:!1,tickFormatter:function(n){return n.toLocaleDateString(void 0,{day:"2-digit"})},minTickGap:10}),(0,r.jsx)(l.B,{dataKey:"value",tickCount:6,scale:"linear",axisLine:!1,tickLine:!1,color:j.colors.textSubtle,fontSize:"12px",tickFormatter:function(n){return"$".concat((0,f.d)(n))},orientation:"right",tick:{dx:10,fill:j.colors.textSubtle}}),(0,r.jsx)(s.u,{cursor:{fill:j.colors.backgroundDisabled},contentStyle:{display:"none"},formatter:function(n,e,i){return(0,r.jsx)(m,{locale:y,payload:i.payload,setHoverValue:t,setHoverDate:o})}}),(0,r.jsx)(u.$,{dataKey:"value",fill:j.colors.primary,shape:function(n){return(0,r.jsx)(p,{height:n.height,width:n.width,x:n.x,y:n.y,fill:j.colors.primary})}})]})}):(0,r.jsx)(h.M4,{})}},45091:function(n,e,t){var r=t(85893),o=t(67294),i=t(56855),a=t(46888),c=t(3023),l=t(75358),s=t(14888),u=t(86108),d=t(23917),f=t(56245),h=t(66631),x=t(99150),p=function(n){var e=n.locale,t=n.payload,r=n.setHoverValue,i=n.setHoverDate;return(0,o.useEffect)((function(){r(t.value),i(t.time.toLocaleString(e,{year:"numeric",day:"numeric",month:"short"}))}),[e,t.value,t.time,r,i]),null};e.Z=function(n){var e=n.data,t=n.setHoverValue,o=n.setHoverDate,m=(0,x.$G)().currentLanguage.locale,y=(0,d.Z)().theme;return e&&0!==e.length?(0,r.jsx)(i.h,{children:(0,r.jsxs)(a.T,{data:e,width:300,height:308,margin:{top:5,right:15,left:0,bottom:5},onMouseLeave:function(){o&&o(void 0),t&&t(void 0)},children:[(0,r.jsx)("defs",{children:(0,r.jsxs)("linearGradient",{id:"gradient",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,r.jsx)("stop",{offset:"5%",stopColor:y.colors.inputSecondary,stopOpacity:.5}),(0,r.jsx)("stop",{offset:"100%",stopColor:y.colors.secondary,stopOpacity:0})]})}),(0,r.jsx)(c.K,{dataKey:"time",axisLine:!1,tickLine:!1,tickFormatter:function(n){return n.toLocaleDateString(void 0,{day:"2-digit"})},minTickGap:10}),(0,r.jsx)(l.B,{dataKey:"value",tickCount:6,scale:"linear",axisLine:!1,tickLine:!1,fontSize:"12px",tickFormatter:function(n){return"$".concat((0,f.d)(n))},orientation:"right",tick:{dx:10,fill:y.colors.textSubtle}}),(0,r.jsx)(s.u,{cursor:{stroke:y.colors.secondary},contentStyle:{display:"none"},formatter:function(n,e,i){return(0,r.jsx)(p,{locale:m,payload:i.payload,setHoverValue:t,setHoverDate:o})}}),(0,r.jsx)(u.u,{dataKey:"value",type:"monotone",stroke:y.colors.secondary,fill:"url(#gradient)",strokeWidth:2})]})}):(0,r.jsx)(h.fn,{})}},58543:function(n,e,t){var r=t(85893),o=t(67294),i=t(186),a=t(91713),c=t(87761),l=t(6741),s=t(65333),u=t(5545),d=t(83482),f=t(58018),h=t(7098),x=t(56934),p=t(56245),m=t(38328),y=t(53467),j=t(92157),v=t(4003),b=t(99150),g=t(58910);function k(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function S(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,i=[],a=!0,c=!1;try{for(t=t.call(n);!(a=(r=t.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(l){c=!0,o=l}finally{try{a||null==t.return||t.return()}finally{if(c)throw o}}return i}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return k(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return k(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Z(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function w(){var n=Z(["\n  width: 100%;\n"]);return w=function(){return n},n}function O(){var n=Z(["\n  display: grid;\n  grid-gap: 1em;\n  align-items: center;\n  grid-template-columns: 2fr 0.8fr repeat(4, 1fr);\n  padding: 0 24px;\n  @media screen and (max-width: 940px) {\n    grid-template-columns: 2fr repeat(4, 1fr);\n    & > *:nth-child(5) {\n      display: none;\n    }\n  }\n  @media screen and (max-width: 800px) {\n    grid-template-columns: 2fr repeat(2, 1fr);\n    & > *:nth-child(5) {\n      display: none;\n    }\n    & > *:nth-child(3) {\n      display: none;\n    }\n    & > *:nth-child(4) {\n      display: none;\n    }\n  }\n  @media screen and (max-width: 500px) {\n    grid-template-columns: 2fr 1fr;\n    & > *:nth-child(5) {\n      display: none;\n    }\n    & > *:nth-child(3) {\n      display: none;\n    }\n    & > *:nth-child(4) {\n      display: none;\n    }\n    & > *:nth-child(2) {\n      display: none;\n    }\n  }\n"]);return O=function(){return n},n}function C(){var n=Z(["\n  align-items: center;\n  margin-right: 16px;\n  margin-top: 8px;\n  cursor: pointer;\n"]);return C=function(){return n},n}var T=i.ZP.div(w()),P=i.ZP.div(O()),D=(0,i.ZP)(c.Z)(C()),A="amountUSD",L="timestamp",M="sender",z="amountToken0",H="amountToken1",N=function(){var n=(0,r.jsxs)(P,{children:[(0,r.jsx)(l.Z,{}),(0,r.jsx)(l.Z,{}),(0,r.jsx)(l.Z,{}),(0,r.jsx)(l.Z,{}),(0,r.jsx)(l.Z,{}),(0,r.jsx)(l.Z,{})]});return(0,r.jsxs)(r.Fragment,{children:[n,n,n]})},E=function(n){var e=n.transaction,t=(0,b.$G)().t,o=Math.abs(e.amountToken0),i=Math.abs(e.amountToken1),c=e.amountToken0<0?e.token0Symbol:e.token1Symbol,l=e.amountToken1<0?e.token0Symbol:e.token1Symbol;return(0,r.jsxs)(P,{children:[(0,r.jsx)(s.Z,{href:(0,m.XR)(e.hash,"transaction"),children:(0,r.jsx)(u.Z,{children:e.type===j.i.MINT?t("Add %token0% and %token1%",{token0:e.token0Symbol,token1:e.token1Symbol}):e.type===j.i.SWAP?t("Swap %token0% for %token1%",{token0:l,token1:c}):t("Remove %token0% and %token1%",{token0:e.token0Symbol,token1:e.token1Symbol})})}),(0,r.jsxs)(u.Z,{children:["$",(0,p.d)(e.amountUSD)]}),(0,r.jsx)(u.Z,{children:(0,r.jsx)(u.Z,{children:"".concat((0,p.d)(o)," ").concat(e.token0Symbol)})}),(0,r.jsx)(u.Z,{children:(0,r.jsx)(u.Z,{children:"".concat((0,p.d)(i)," ").concat(e.token1Symbol)})}),(0,r.jsx)(s.Z,{href:(0,m.XR)(e.sender,"address"),children:(0,y.Z)(e.sender)}),(0,r.jsx)(u.Z,{children:(0,a.Z)(1e3*parseInt(e.timestamp,10))})]})};e.Z=function(n){var e=n.transactions,t=(0,o.useState)(L),i=t[0],a=t[1],l=(0,o.useState)(!0),s=l[0],p=l[1],m=(0,b.$G)().t,y=(0,o.useState)(1),k=y[0],Z=y[1],w=(0,o.useState)(1),O=w[0],C=w[1],F=(0,o.useState)(void 0),$=F[0],_=F[1],I=(0,o.useMemo)((function(){var n=[z,H];return e?e.slice().sort((function(e,t){if(e&&t){var r=e[i],o=t[i],a=S(n.includes(i)?[Math.abs(r),Math.abs(o)]:[r,o],2);return a[0]>a[1]?1*(s?-1:1):-1*(s?-1:1)}return-1})).filter((function(n){return void 0===$||n.type===$})).slice(v.si*(k-1),k*v.si):[]}),[e,k,i,s,$]);(0,o.useEffect)((function(){if(e){var n=e.filter((function(n){return void 0===$||n.type===$}));n.length%v.si===0?C(Math.floor(n.length/v.si)):C(Math.floor(n.length/v.si)+1)}}),[e,$]);var K=(0,o.useCallback)((function(n){n!==$&&(_(n),Z(1))}),[$]),G=(0,o.useCallback)((function(n){a(n),p(i!==n||!s)}),[s,i]),V=(0,o.useCallback)((function(n){return i===n?s?"\u2193":"\u2191":""}),[s,i]);return(0,r.jsxs)(T,{children:[(0,r.jsxs)(c.Z,{mb:"16px",children:[(0,r.jsxs)(c.Z,{flexDirection:["column","row"],children:[(0,r.jsxs)(D,{onClick:function(){return K(void 0)},children:[(0,r.jsx)(d.Z,{onChange:function(){return null},scale:"sm",checked:void 0===$}),(0,r.jsx)(u.Z,{ml:"8px",children:m("All")})]}),(0,r.jsxs)(D,{onClick:function(){return K(j.i.SWAP)},children:[(0,r.jsx)(d.Z,{onChange:function(){return null},scale:"sm",checked:$===j.i.SWAP}),(0,r.jsx)(u.Z,{ml:"8px",children:m("Swaps")})]})]}),(0,r.jsxs)(c.Z,{flexDirection:["column","row"],children:[(0,r.jsxs)(D,{onClick:function(){return K(j.i.MINT)},children:[(0,r.jsx)(d.Z,{onChange:function(){return null},scale:"sm",checked:$===j.i.MINT}),(0,r.jsx)(u.Z,{ml:"8px",children:m("Adds")})]}),(0,r.jsxs)(D,{onClick:function(){return K(j.i.BURN)},children:[(0,r.jsx)(d.Z,{onChange:function(){return null},scale:"sm",checked:$===j.i.BURN}),(0,r.jsx)(u.Z,{ml:"8px",children:m("Removes")})]})]})]}),(0,r.jsxs)(g.y6,{children:[(0,r.jsxs)(P,{children:[(0,r.jsx)(u.Z,{color:"secondary",fontSize:"12px",bold:!0,textTransform:"uppercase",children:m("Action")}),(0,r.jsxs)(g._J,{color:"secondary",fontSize:"12px",bold:!0,onClick:function(){return G(A)},textTransform:"uppercase",children:[m("Total Value")," ",V(A)]}),(0,r.jsxs)(g._J,{color:"secondary",fontSize:"12px",bold:!0,onClick:function(){return G(z)},textTransform:"uppercase",children:[m("Token Amount")," ",V(z)]}),(0,r.jsxs)(g._J,{color:"secondary",fontSize:"12px",bold:!0,onClick:function(){return G(H)},textTransform:"uppercase",children:[m("Token Amount")," ",V(H)]}),(0,r.jsxs)(g._J,{color:"secondary",fontSize:"12px",bold:!0,onClick:function(){return G(M)},textTransform:"uppercase",children:[m("Account")," ",V(M)]}),(0,r.jsxs)(g._J,{color:"secondary",fontSize:"12px",bold:!0,onClick:function(){return G(L)},textTransform:"uppercase",children:[m("Time")," ",V(L)]})]}),(0,r.jsx)(g.SS,{}),e?(0,r.jsxs)(r.Fragment,{children:[I.map((function(n,e){return n?(0,r.jsxs)(o.Fragment,{children:[(0,r.jsx)(E,{transaction:n}),(0,r.jsx)(g.SS,{})]},e):null})),0===I.length?(0,r.jsx)(c.Z,{justifyContent:"center",children:(0,r.jsx)(u.Z,{children:m("No Transactions")})}):void 0,(0,r.jsxs)(g.Ob,{children:[(0,r.jsx)(g.Eh,{onClick:function(){Z(1===k?k:k-1)},children:(0,r.jsx)(f.Z,{color:1===k?"textDisabled":"primary"})}),(0,r.jsx)(u.Z,{children:m("Page %page% of %maxPage%",{page:k,maxPage:O})}),(0,r.jsx)(g.Eh,{onClick:function(){Z(k===O?k:k+1)},children:(0,r.jsx)(h.Z,{color:k===O?"textDisabled":"primary"})})]})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(N,{}),(0,r.jsx)(x.Z,{})]})]})]})}},37795:function(n,e,t){var r=t(85893),o=t(5545);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){i(n,e,t[e])}))}return n}function c(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}e.Z=function(n){var e=n.value,t=c(n,["value"]);if(!e||Number.isNaN(e))return(0,r.jsx)(o.Z,a({},t,{children:"-"}));var i=e<0;return(0,r.jsxs)(o.Z,a({},t,{color:i?"failure":"success",children:[i?"\u2193":"\u2191",Math.abs(e).toFixed(2),"%"]}))}}}]);