(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5761],{3027:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/nfts/profile/[accountAddress]",function(){return t(51800)}])},60545:function(n,e,t){"use strict";var r=t(186),o=t(66734);function c(){var n,e,t=(n=["\n  background-color: ",";\n  border: 0;\n  border-radius: 16px;\n  box-shadow: ",";\n  color: ",";\n  display: block;\n  font-size: 16px;\n  height: ",";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n  border: 1px solid ",";\n\n  &::placeholder {\n    color: ",";\n  }\n\n  &:disabled {\n    background-color: ",";\n    box-shadow: none;\n    color: ",";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ",";\n  }\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return c=function(){return t},t}var i=r.ZP.input(c(),(function(n){return n.theme.colors.input}),(function(n){var e=n.isSuccess,t=void 0!==e&&e,r=n.isWarning,o=void 0!==r&&r,c=n.theme;return o?c.shadows.warning:t?c.shadows.success:c.shadows.inset}),(function(n){return n.theme.colors.text}),(function(n){var e=n.scale;switch(void 0===e?o.Q.MD:e){case o.Q.SM:return"32px";case o.Q.LG:return"48px";case o.Q.MD:default:return"40px"}}),(function(n){return n.theme.colors.inputSecondary}),(function(n){return n.theme.colors.textSubtle}),(function(n){return n.theme.colors.backgroundDisabled}),(function(n){return n.theme.colors.textDisabled}),(function(n){return n.theme.shadows.focus}));i.defaultProps={scale:o.Q.MD,isSuccess:!1,isWarning:!1},e.Z=i},66734:function(n,e,t){"use strict";t.d(e,{Q:function(){return r}});var r={SM:"sm",MD:"md",LG:"lg"}},43810:function(n,e,t){"use strict";var r=t(85893),o=(t(67294),t(17804));function c(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}e.Z=function(n){return(0,r.jsx)(o.Z,function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){c(n,e,t[e])}))}return n}({viewBox:"0 0 24 24"},n,{children:(0,r.jsx)("path",{d:"M13 19V7.83001L17.88 12.71C18.27 13.1 18.91 13.1 19.3 12.71C19.69 12.32 19.69 11.69 19.3 11.3L12.71 4.71001C12.32 4.32001 11.69 4.32001 11.3 4.71001L4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7C5.08997 13.09 5.71997 13.09 6.10997 12.7L11 7.83001V19C11 19.55 11.45 20 12 20C12.55 20 13 19.55 13 19Z"})}))}},51800:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return C}});var r=t(34051),o=t.n(r),c=t(85893),i=t(77044),a=t(11163),u=t(48650),s=t(9299),l=t(29652),f=t(87761),d=t(5545),p=t(20522),v=t(99150),b=t(43591),h=t(71424),m=t(7402),x=function(n){var e=n.nfts,t=n.isLoading,r=(0,v.$G)().t;return(0,c.jsx)(c.Fragment,{children:0!==e.length||t?e.length>0?(0,c.jsx)(p.Z,{gridGap:"16px",gridTemplateColumns:["1fr","repeat(2, 1fr)","repeat(3, 1fr)",null,"repeat(4, 1fr)"],alignItems:"start",children:e.map((function(n){var e=n.marketData;return(0,c.jsx)(b.ts,{nft:n,currentAskPrice:(null===e||void 0===e?void 0:e.currentAskPrice)&&(null===e||void 0===e?void 0:e.isTradable)&&parseFloat(e.currentAskPrice)},"".concat(n.tokenId,"-").concat(n.collectionName))}))}):(0,c.jsx)(h.Z,{}):(0,c.jsxs)(f.Z,{p:"24px",flexDirection:"column",alignItems:"center",children:[(0,c.jsx)(m.Z,{}),(0,c.jsx)(d.Z,{pt:"8px",bold:!0,children:r("No NFTs found")})]})})},g=t(67294),j=t(97561),y=t(75186),w=t(70739),O=t(68461);function Z(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function S(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,c=[],i=!0,a=!1;try{for(t=t.call(n);!(i=(r=t.next()).done)&&(c.push(r.value),!e||c.length!==e);i=!0);}catch(u){a=!0,o=u}finally{try{i||null==t.return||t.return()}finally{if(a)throw o}}return c}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return Z(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Z(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var P=function(n){var e=n.nfts,t=n.isLoading,r=n.onSuccessSale,o=n.onSuccessEditProfile,i=(0,g.useState)({nft:null,location:null}),a=i[0],u=i[1],s=(0,g.useState)({nft:null,location:null,variant:null}),l=s[0],x=s[1],Z=S((0,j.Z)((0,c.jsx)(w.Z,{nft:a.nft,onSuccess:o})),1)[0],P=S((0,j.Z)((0,c.jsx)(O.Z,{variant:l.variant,nftToSell:l.nft,onSuccessSale:r,onSuccessEditProfile:o})),1)[0],k=(0,v.$G)().t;return(0,g.useEffect)((function(){a.nft&&Z()}),[a]),(0,g.useEffect)((function(){l.nft&&P()}),[l]),(0,c.jsx)(c.Fragment,{children:0!==e.length||t?e.length>0?(0,c.jsx)(p.Z,{gridGap:"16px",gridTemplateColumns:["1fr","repeat(2, 1fr)","repeat(3, 1fr)",null,"repeat(4, 1fr)"],alignItems:"start",children:e.map((function(n){var e=n.marketData,t=n.location;return(0,c.jsx)(b.VK,{isUserNft:!0,onClick:function(){return function(n,e){switch(e){case y.Fb.PROFILE:u({nft:n,location:e});break;case y.Fb.WALLET:x({nft:n,location:e,variant:"sell"});break;case y.Fb.FORSALE:x({nft:n,location:e,variant:"edit"})}}(n,t)},nft:n,currentAskPrice:(null===e||void 0===e?void 0:e.currentAskPrice)&&(null===e||void 0===e?void 0:e.isTradable)&&parseFloat(e.currentAskPrice),nftLocation:t},"".concat(n.tokenId,"-").concat(n.collectionName))}))}):(0,c.jsx)(h.Z,{}):(0,c.jsxs)(f.Z,{p:"24px",flexDirection:"column",alignItems:"center",children:[(0,c.jsx)(m.Z,{}),(0,c.jsx)(d.Z,{pt:"8px",bold:!0,children:k("No NFTs found")})]})})},k=t(10056);function L(n,e,t,r,o,c,i){try{var a=n[c](i),u=a.value}catch(s){return void t(s)}a.done?e(u):Promise.resolve(u).then(r,o)}var A=function(){var n,e=(0,i.Ge)().account,t=(0,a.useRouter)().query.accountAddress,r=(null===e||void 0===e?void 0:e.toLowerCase())===(null===t||void 0===t?void 0:t.toLowerCase()),s=(0,u.lC)(t,{revalidateIfStale:!0,revalidateOnFocus:!0,revalidateOnReconnect:!0}),f=s.profile,d=s.isValidating,p=s.refresh,v=(0,k.Z)(t,f,d),b=v.nfts,h=v.isLoading,m=v.refresh;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(l.Z,{}),r?(0,c.jsx)(P,{nfts:b,isLoading:h,onSuccessSale:m,onSuccessEditProfile:(n=o().mark((function n(){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p();case 2:m();case 3:case"end":return n.stop()}}),n)})),function(){var e=this,t=arguments;return new Promise((function(r,o){var c=n.apply(e,t);function i(n){L(c,r,o,i,a,"next",n)}function a(n){L(c,r,o,i,a,"throw",n)}i(void 0)}))})}):(0,c.jsx)(x,{nfts:b,isLoading:h})]})};A.Layout=s.K;var C=A},29652:function(n,e,t){"use strict";var r=t(85893),o=t(99150),c=t(11163),i=t(55447),a=t(40580);e.Z=function(){var n=(0,o.$G)().t,e=(0,c.useRouter)(),t=e.query.accountAddress,u=e.asPath,s=[{label:n("Items"),href:"".concat(a.Vf,"/profile/").concat(t)},{label:n("Activity"),href:"".concat(a.Vf,"/profile/").concat(t,"/activity")}];return(0,r.jsx)(i.Z,{items:s,activeItem:u,justifyContent:"flex-start",mb:"60px"})}},55447:function(n,e,t){"use strict";var r=t(27270);function o(){var n,e,t=(n=["\n  background-color: transparent;\n  border-bottom: 1px "," solid;\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return o=function(){return t},t}var c=(0,t(186).ZP)(r.Z)(o(),(function(n){return n.theme.colors.cardBorder}));e.Z=c},71424:function(n,e,t){"use strict";var r=t(85893),o=t(56934),c=t(6741),i=t(20522),a=t(98913),u=t.n(a);function s(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){s(n,e,t[e])}))}return n}function f(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},c=Object.keys(n);for(r=0;r<c.length;r++)t=c[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);for(r=0;r<c.length;r++)t=c[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var d=function(n){return(0,r.jsxs)(o.Z,l({},n,{children:[(0,r.jsx)(c.Z,{height:"258px",mb:"8px"}),(0,r.jsx)(c.Z,{width:"30%",mb:"4px"}),(0,r.jsx)(c.Z,{width:"45%",mb:"16px"}),(0,r.jsx)(c.Z,{})]}))};e.Z=function(n){var e=n.numItems,t=void 0===e?12:e,o=f(n,["numItems"]);return(0,r.jsx)(i.Z,l({gridGap:"16px",gridTemplateColumns:["1fr",null,null,"repeat(4, 1fr)"]},o,{children:u()(t).map((function(n){return(0,r.jsx)(d,{},n)}))}))}}},function(n){n.O(0,[5675,6862,7004,4693,2319,9299,6165,9774,2888,179],(function(){return e=3027,n(n.s=e);var e}));var e=n.O();_N_E=e}]);