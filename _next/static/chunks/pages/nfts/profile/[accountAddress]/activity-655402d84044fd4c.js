(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[496],{45578:function(t,e,n){var r=n(67206),o=n(45652);t.exports=function(t,e){return t&&t.length?o(t,r(e,2)):[]}},41492:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/nfts/profile/[accountAddress]/activity",function(){return n(67203)}])},67203:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return G}});var r=n(85893),o=n(9299),c=n(34051),i=n.n(c),a=n(67294),u=n(77044),s=n(38328),f=n(9640),l=n(86849),d=n(51888),h=n(53503),p=n(87761),m=n(5545),v=n(54755),x=n(89056),y=n(58018),b=n(7098),j=n(99150),g=n(26710),w=n(90834),k=n(23917),P=n(11163),I=n(2593),O=n(75186);function A(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function C(t){return function(t){if(Array.isArray(t))return A(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"===typeof t)return A(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return A(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var E=function(t,e){var n,r=e.askOrderHistory,o=e.buyTradeHistory,c=e.sellTradeHistory,i=function(e){return e.map((function(e){var n=e.seller.id===t.toLowerCase(),r=n?O.YG.SELL:O.YG.BUY,o=e.timestamp,c=e.nft;return{marketEvent:r,price:e.askPrice,otherParty:n?e.buyer.id:e.seller.id,timestamp:o,nft:c,tx:e.id}}))},a=C((n=r,n.map((function(t){var e=function(t){switch(t){case O.cP.CANCEL:return O.YG.CANCEL;case O.cP.MODIFY:return O.YG.MODIFY;case O.cP.NEW:return O.YG.NEW;default:return O.YG.MODIFY}}(t.orderType),n=t.timestamp,r=t.nft;return{marketEvent:e,price:t.askPrice,timestamp:n,nft:r,tx:t.id}})))).concat(C(i(o)),C(i(c)));return a.length>0?a.sort((function(t,e){var n=I.O$.from(t.timestamp);return I.O$.from(e.timestamp).sub(n).toNumber()})):[]},Z=n(7402),T=n(72818),L=n(72855),S=n(90366);function _(t,e,n,r,o,c,i){try{var a=t[c](i),u=a.value}catch(s){return void n(s)}a.done?e(u):Promise.resolve(u).then(r,o)}function N(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var c=t.apply(e,n);function i(t){_(c,r,o,i,a,"next",t)}function a(t){_(c,r,o,i,a,"throw",t)}i(void 0)}))}}var Y=function(){var t=(0,u.Ge)().account,e=(0,f.TL)(),n=(0,P.useRouter)().query.accountAddress,o=(0,k.Z)().theme,c=(0,j.$G)().t,I=(0,a.useState)(1),O=I[0],A=I[1],C=(0,a.useState)(1),_=C[0],Y=C[1],D=(0,a.useState)([]),F=D[0],G=D[1],M=(0,a.useState)([]),J=M[0],$=M[1],B=(0,a.useState)([]),H=B[0],U=B[1],X=(0,a.useState)(!0),q=X[0],z=X[1],R=(0,w.Hf)(),V=(0,d.Z)(),W=V.isXs,K=V.isSm;return(0,a.useEffect)((function(){var t=function(){var t=N(i().mark((function t(){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,l._z)(n.toLocaleLowerCase());case 3:e=t.sent,U(E(n,e)),z(!1),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error("Failed to fetch address activity",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();(0,s.UJ)(n)&&t()}),[t,n,e]),(0,a.useEffect)((function(){var t=function(){var t=N(i().mark((function t(){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,S.M)(H);case 2:e=t.sent,$(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return H.length>0&&(!function(){var t=Math.ceil(H.length/8);Y(t)}(),t()),function(){G([]),$([]),Y(1),A(1)}}),[H]),(0,a.useEffect)((function(){H.length>0&&function(){var t=H.slice(8*(O-1),8*O);G(t)}()}),[H,O]),(0,r.jsx)(h.Z,{style:{overflowX:"auto"},children:0!==H.length||0!==J.length||0!==F.length||q?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(v.Z,{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsxs)(x.Th,{textAlign:["center",null,"left"],children:[" ",c("Item")]}),(0,r.jsxs)(x.Th,{textAlign:"right",children:[" ",c("Event")]}),W||K?null:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(x.Th,{textAlign:"right",children:[" ",c("Price")]}),(0,r.jsxs)(x.Th,{textAlign:"center",children:[" ",c("From/To")]})]}),(0,r.jsxs)(x.Th,{textAlign:"center",children:[" ",c("Date")]}),W||K?null:(0,r.jsx)(x.Th,{})]})}),(0,r.jsx)("tbody",{children:q?(0,r.jsx)(g.Z,{}):F.map((function(t){var e=J.find((function(e){return e.tokenId===t.nft.tokenId}));return(0,r.jsx)(L.Z,{activity:t,nft:e,bnbBusdPrice:R,isUserActivity:!0},"".concat(t.nft.tokenId).concat(t.timestamp))}))})]}),(0,r.jsx)(p.Z,{borderTop:"1px ".concat(o.colors.cardBorder," solid"),pt:"24px",flexDirection:"column",justifyContent:"space-between",height:"100%",children:(0,r.jsxs)(T.O,{children:[(0,r.jsx)(T.E,{onClick:function(){A(1===O?O:O-1)},children:(0,r.jsx)(y.Z,{color:1===O?"textDisabled":"primary"})}),(0,r.jsx)(m.Z,{children:c("Page %page% of %maxPage%",{page:O,maxPage:_})}),(0,r.jsx)(T.E,{onClick:function(){A(O===_?O:O+1)},children:(0,r.jsx)(b.Z,{color:O===_?"textDisabled":"primary"})})]})})]}):(0,r.jsxs)(p.Z,{p:"24px",flexDirection:"column",alignItems:"center",children:[(0,r.jsx)(Z.Z,{}),(0,r.jsx)(m.Z,{pt:"8px",bold:!0,children:c("No NFT market history found")})]})})},D=n(29652),F=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(D.Z,{}),(0,r.jsx)(Y,{})]})};F.Layout=o.K;var G=F},90366:function(t,e,n){"use strict";n.d(e,{M:function(){return d}});var r=n(34051),o=n.n(r),c=n(86849),i=n(45578),a=n.n(i),u=n(40580);function s(t,e,n,r,o,c,i){try{var a=t[c](i),u=a.value}catch(s){return void n(s)}a.done?e(u):Promise.resolve(u).then(r,o)}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){f(t,e,n[e])}))}return t}var d=function(){var t,e=(t=o().mark((function t(e){var n,r,i,s;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.some((function(t){return t.nft.collection.id.toLowerCase()===u.Jr.toLowerCase()}))){t.next=6;break}return t.next=5,(0,c.Rq)(u.Jr);case 5:n=t.sent;case 6:return r=n?e.filter((function(t){return t.nft.collection.id.toLowerCase()===u.Jr.toLowerCase()})).map((function(t){var e=n.data[t.nft.otherId].collection.name;return l({},n.data[t.nft.otherId],{tokenId:t.nft.tokenId,attributes:[{traitType:"bunnyId",value:t.nft.otherId}],collectionAddress:t.nft.collection.id,collectionName:e})})):[],i=a()(e.filter((function(t){return t.nft.collection.id.toLowerCase()!==u.Jr.toLowerCase()})).map((function(t){return{tokenId:t.nft.tokenId,collectionAddress:t.nft.collection.id}})),"tokenId"),t.next=10,(0,c._C)(i);case 10:return s=t.sent,t.abrupt("return",s.concat(r));case 12:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var c=t.apply(e,n);function i(t){s(c,r,o,i,a,"next",t)}function a(t){s(c,r,o,i,a,"throw",t)}i(void 0)}))});return function(t){return e.apply(this,arguments)}}()},29652:function(t,e,n){"use strict";var r=n(85893),o=n(99150),c=n(11163),i=n(55447),a=n(40580);e.Z=function(){var t=(0,o.$G)().t,e=(0,c.useRouter)(),n=e.query.accountAddress,u=e.asPath,s=[{label:t("Items"),href:"".concat(a.Vf,"/profile/").concat(n)},{label:t("Activity"),href:"".concat(a.Vf,"/profile/").concat(n,"/activity")}];return(0,r.jsx)(i.Z,{items:s,activeItem:u,justifyContent:"flex-start",mb:"60px"})}},55447:function(t,e,n){"use strict";var r=n(27270);function o(){var t,e,n=(t=["\n  background-color: transparent;\n  border-bottom: 1px "," solid;\n"],e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}})));return o=function(){return n},n}var c=(0,n(186).ZP)(r.Z)(o(),(function(t){return t.theme.colors.cardBorder}));e.Z=c}},function(t){t.O(0,[5675,6862,44,2319,7358,9299,9774,2888,179],(function(){return e=41492,t(t.s=e);var e}));var e=t.O();_N_E=e}]);