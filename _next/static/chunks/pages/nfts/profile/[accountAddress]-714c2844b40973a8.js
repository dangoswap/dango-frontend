(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5761],{3027:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/nfts/profile/[accountAddress]",function(){return e(51800)}])},51800:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return I}});var r=e(34051),o=e.n(r),i=e(85893),a=e(77044),c=e(11163),u=e(48650),l=e(9299),s=e(29652),f=e(87761),d=e(5545),p=e(20522),v=e(99150),m=e(43591),b=e(71424),x=e(7402),h=function(t){var n=t.nfts,e=t.isLoading,r=(0,v.$G)().t;return(0,i.jsx)(i.Fragment,{children:0!==n.length||e?n.length>0?(0,i.jsx)(p.Z,{gridGap:"16px",gridTemplateColumns:["1fr","repeat(2, 1fr)","repeat(3, 1fr)",null,"repeat(4, 1fr)"],alignItems:"start",children:n.map((function(t){var n=t.marketData;return(0,i.jsx)(m.ts,{nft:t,currentAskPrice:(null===n||void 0===n?void 0:n.currentAskPrice)&&(null===n||void 0===n?void 0:n.isTradable)&&parseFloat(n.currentAskPrice)},"".concat(t.tokenId,"-").concat(t.collectionName))}))}):(0,i.jsx)(b.Z,{}):(0,i.jsxs)(f.Z,{p:"24px",flexDirection:"column",alignItems:"center",children:[(0,i.jsx)(x.Z,{}),(0,i.jsx)(d.Z,{pt:"8px",bold:!0,children:r("No NFTs found")})]})})},j=e(67294),g=e(97561),y=e(75186),Z=e(70739),O=e(68461);function w(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function S(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var r,o,i=[],a=!0,c=!1;try{for(e=e.call(t);!(a=(r=e.next()).done)&&(i.push(r.value),!n||i.length!==n);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==e.return||e.return()}finally{if(c)throw o}}return i}}(t,n)||function(t,n){if(!t)return;if("string"===typeof t)return w(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return w(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var P=function(t){var n=t.nfts,e=t.isLoading,r=t.onSuccessSale,o=t.onSuccessEditProfile,a=(0,j.useState)({nft:null,location:null}),c=a[0],u=a[1],l=(0,j.useState)({nft:null,location:null,variant:null}),s=l[0],h=l[1],w=S((0,g.Z)((0,i.jsx)(Z.Z,{nft:c.nft,onSuccess:o})),1)[0],P=S((0,g.Z)((0,i.jsx)(O.Z,{variant:s.variant,nftToSell:s.nft,onSuccessSale:r,onSuccessEditProfile:o})),1)[0],k=(0,v.$G)().t;return(0,j.useEffect)((function(){c.nft&&w()}),[c]),(0,j.useEffect)((function(){s.nft&&P()}),[s]),(0,i.jsx)(i.Fragment,{children:0!==n.length||e?n.length>0?(0,i.jsx)(p.Z,{gridGap:"16px",gridTemplateColumns:["1fr","repeat(2, 1fr)","repeat(3, 1fr)",null,"repeat(4, 1fr)"],alignItems:"start",children:n.map((function(t){var n=t.marketData,e=t.location;return(0,i.jsx)(m.VK,{isUserNft:!0,onClick:function(){return function(t,n){switch(n){case y.Fb.PROFILE:u({nft:t,location:n});break;case y.Fb.WALLET:h({nft:t,location:n,variant:"sell"});break;case y.Fb.FORSALE:h({nft:t,location:n,variant:"edit"})}}(t,e)},nft:t,currentAskPrice:(null===n||void 0===n?void 0:n.currentAskPrice)&&(null===n||void 0===n?void 0:n.isTradable)&&parseFloat(n.currentAskPrice),nftLocation:e},"".concat(t.tokenId,"-").concat(t.collectionName))}))}):(0,i.jsx)(b.Z,{}):(0,i.jsxs)(f.Z,{p:"24px",flexDirection:"column",alignItems:"center",children:[(0,i.jsx)(x.Z,{}),(0,i.jsx)(d.Z,{pt:"8px",bold:!0,children:k("No NFTs found")})]})})},k=e(10056);function A(t,n,e,r,o,i,a){try{var c=t[i](a),u=c.value}catch(l){return void e(l)}c.done?n(u):Promise.resolve(u).then(r,o)}var E=function(){var t,n=(0,a.Ge)().account,e=(0,c.useRouter)().query.accountAddress,r=(null===n||void 0===n?void 0:n.toLowerCase())===(null===e||void 0===e?void 0:e.toLowerCase()),l=(0,u.lC)(e,{revalidateIfStale:!0,revalidateOnFocus:!0,revalidateOnReconnect:!0}),f=l.profile,d=l.isValidating,p=l.refresh,v=(0,k.Z)(e,f,d),m=v.nfts,b=v.isLoading,x=v.refresh;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.Z,{}),r?(0,i.jsx)(P,{nfts:m,isLoading:b,onSuccessSale:x,onSuccessEditProfile:(t=o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p();case 2:x();case 3:case"end":return t.stop()}}),t)})),function(){var n=this,e=arguments;return new Promise((function(r,o){var i=t.apply(n,e);function a(t){A(i,r,o,a,c,"next",t)}function c(t){A(i,r,o,a,c,"throw",t)}a(void 0)}))})}):(0,i.jsx)(h,{nfts:m,isLoading:b})]})};E.Layout=l.K;var I=E},29652:function(t,n,e){"use strict";var r=e(85893),o=e(99150),i=e(11163),a=e(55447),c=e(40580);n.Z=function(){var t=(0,o.$G)().t,n=(0,i.useRouter)(),e=n.query.accountAddress,u=n.asPath,l=[{label:t("Items"),href:"".concat(c.Vf,"/profile/").concat(e)},{label:t("Activity"),href:"".concat(c.Vf,"/profile/").concat(e,"/activity")}];return(0,r.jsx)(a.Z,{items:l,activeItem:u,justifyContent:"flex-start",mb:"60px"})}},55447:function(t,n,e){"use strict";var r=e(27270);function o(){var t,n,e=(t=["\n  background-color: transparent;\n  border-bottom: 1px "," solid;\n"],n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}})));return o=function(){return e},e}var i=(0,e(186).ZP)(r.Z)(o(),(function(t){return t.theme.colors.cardBorder}));n.Z=i},71424:function(t,n,e){"use strict";var r=e(85893),o=e(56934),i=e(6741),a=e(20522),c=e(98913),u=e.n(c);function l(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function s(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},r=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})))),r.forEach((function(n){l(t,n,e[n])}))}return t}function f(t,n){if(null==t)return{};var e,r,o=function(t,n){if(null==t)return{};var e,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||(o[e]=t[e]);return o}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}var d=function(t){return(0,r.jsxs)(o.Z,s({},t,{children:[(0,r.jsx)(i.Z,{height:"258px",mb:"8px"}),(0,r.jsx)(i.Z,{width:"30%",mb:"4px"}),(0,r.jsx)(i.Z,{width:"45%",mb:"16px"}),(0,r.jsx)(i.Z,{})]}))};n.Z=function(t){var n=t.numItems,e=void 0===n?12:n,o=f(t,["numItems"]);return(0,r.jsx)(a.Z,s({gridGap:"16px",gridTemplateColumns:["1fr",null,null,"repeat(4, 1fr)"]},o,{children:u()(e).map((function(t){return(0,r.jsx)(d,{},t)}))}))}}},function(t){t.O(0,[5675,6862,44,4693,2319,9299,6165,9774,2888,179],(function(){return n=3027,t(t.s=n);var n}));var n=t.O();_N_E=n}]);