(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2319],{70151:function(n,e,r){var t=r(278),i=r(73480);n.exports=function(n){return i(t(n))}},25127:function(n,e,r){var t=r(73480),i=r(52628);n.exports=function(n){return t(i(n))}},73480:function(n,e,r){var t=r(69877);n.exports=function(n,e){var r=-1,i=n.length,o=i-1;for(e=void 0===e?i:e;++r<e;){var c=t(r,o),u=n[c];n[c]=n[r],n[r]=u}return n.length=e,n}},69983:function(n,e,r){var t=r(70151),i=r(25127),o=r(1469);n.exports=function(n){return(o(n)?t:i)(n)}},83482:function(n,e,r){"use strict";r.d(e,{Z:function(){return d}});var t=r(186),i=r(57247),o="sm",c="md";function u(){var n,e,r=(n=["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ",";\n  width: ",";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ",";\n  box-shadow: ",';\n\n  &:after {\n    border-radius: 50%;\n    content: "";\n    height: ',";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ",";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ",";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ",";\n  }\n\n  &:checked {\n    background-color: ",";\n    &:after {\n      background-color: ",";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ","\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return u=function(){return r},r}var a=function(n){return n.scale===o?"24px":"32px"},s=function(n){return n.scale===o?"12px":"20px"},l=t.ZP.input.attrs({type:"radio"})(u(),a,a,(function(n){return n.theme.colors.input}),(function(n){return n.theme.shadows.inset}),s,s,(function(n){return n.theme.shadows.focus}),(function(n){return n.theme.shadows.focus}),(function(n){return n.theme.colors.success}),(function(n){return n.theme.radio.handleBackground}),i.Dh);l.defaultProps={scale:c,m:0};var d=l},12347:function(n,e,r){"use strict";var t=r(85893),i=(r(67294),r(17804));function o(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}e.Z=function(n){return(0,t.jsx)(i.Z,function(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable})))),t.forEach((function(e){o(n,e,r[e])}))}return n}({viewBox:"0 0 24 24"},n,{children:(0,t.jsx)("path",{d:"M9.29006 15.88L13.1701 12L9.29006 8.12001C8.90006 7.73001 8.90006 7.10001 9.29006 6.71001C9.68006 6.32001 10.3101 6.32001 10.7001 6.71001L15.2901 11.3C15.6801 11.69 15.6801 12.32 15.2901 12.71L10.7001 17.3C10.3101 17.69 9.68006 17.69 9.29006 17.3C8.91006 16.91 8.90006 16.27 9.29006 15.88Z"})}))}},27339:function(n,e,r){"use strict";var t=r(85893),i=(r(67294),r(186)),o=r(17804);function c(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}e.Z=function(n){var e=(0,i.Fg)(),r=e.isDark?"#3C3742":"#e9eaeb",u=e.isDark?"#666171":"#bdc2c4";return(0,t.jsxs)(o.Z,function(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable})))),t.forEach((function(e){c(n,e,r[e])}))}return n}({viewBox:"0 0 32 32"},n,{children:[(0,t.jsx)("path",{d:"M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z",fill:r}),(0,t.jsx)("mask",{id:"A","mask-type":"alpha",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"32",height:"32",children:(0,t.jsx)("path",{d:"M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z",fill:"#c4c4c4"})}),(0,t.jsxs)("g",{mask:"url(#A)",children:[(0,t.jsx)("path",{d:"M25.128 16.436c0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641V15h18.461v1.436zm2.205 13.806c0-3.815-5.074-6.908-11.333-6.908S4.667 26.426 4.667 30.242V32h22.667v-1.759z",fill:u}),(0,t.jsx)("path",{fillRule:"evenodd",d:"M10.234 5.601C9.942 4.264 10.96 3 12.328 3c1.184 0 2.143.959 2.143 2.143v3.873l1.427-.067c.589 0 1.166.034 1.724.098V5.143c0-1.184.959-2.143 2.143-2.143 1.368 0 2.386 1.264 2.093 2.601l-.931 4.258c2.529 1.006 4.201 2.749 4.201 4.731 0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641c0-2.053 1.794-3.849 4.476-4.836l-.908-4.153z",fill:u}),(0,t.jsx)("ellipse",{cx:"12.308",cy:"14.846",rx:"1.026",ry:"1.538",fill:r}),(0,t.jsx)("ellipse",{cx:"19.385",cy:"14.846",rx:"1.026",ry:"1.538",fill:r})]})]}))}},75673:function(n,e,r){"use strict";r.d(e,{N:function(){return t}});var t,i=r(85893),o=r(186),c=r(99273),u=r(12347),a=r(96913),s=r(70335),l=r(56934),d=r(87761),f=r(99150);function p(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function v(){var n=p(["\n  align-items: center;\n  display: grid;\n  grid-template-columns: 1fr;\n  justify-content: center;\n\n  "," {\n    grid-template-columns: 1fr 24px 1fr;\n  }\n"]);return v=function(){return n},n}function h(){var n=p(["\n  width: 100%;\n\n  "," {\n    min-width: 160px;\n  }\n"]);return h=function(){return n},n}function m(){var n=p(["\n  display: none;\n\n  "," {\n    display: block;\n  }\n"]);return m=function(){return n},n}function b(){var n=p(["\n  display: block;\n\n  "," {\n    display: none;\n  }\n"]);return b=function(){return n},n}!function(n){n.ROW="row",n.SEQUENTIAL="sequential"}(t||(t={}));var x=o.ZP.div(v(),(function(n){return n.theme.mediaQueries.md})),g=(0,o.ZP)(c.Z)(h(),(function(n){return n.theme.mediaQueries.md})),j={width:"24px",color:"textDisabled"},w=(0,o.ZP)(u.Z).attrs(j)(m(),(function(n){return n.theme.mediaQueries.md})),y=(0,o.ZP)(a.Z).attrs(j)(b(),(function(n){return n.theme.mediaQueries.md})),k=(0,i.jsx)(s.Z,{spin:!0,color:"currentColor"});e.Z=function(n){var e=n.isApproveDisabled,r=n.isApproving,o=n.isConfirming,c=n.isConfirmDisabled,u=n.onApprove,a=n.onConfirm,s=n.buttonArrangement,p=void 0===s?t.ROW:s,v=n.confirmLabel,h=n.confirmId,m=(0,f.$G)().t,b=null!==v&&void 0!==v?v:m("Confirm");return p===t.ROW?(0,i.jsxs)(x,{children:[(0,i.jsx)(l.Z,{children:(0,i.jsx)(g,{disabled:e,onClick:u,endIcon:r?k:void 0,isLoading:r,children:m(r?"Enabling":"Enable")})}),(0,i.jsxs)(d.Z,{justifyContent:"center",children:[(0,i.jsx)(w,{}),(0,i.jsx)(y,{})]}),(0,i.jsx)(l.Z,{children:(0,i.jsx)(g,{id:h,onClick:a,disabled:c,isLoading:o,endIcon:o?k:void 0,children:o?m("Confirming"):b})})]}):(0,i.jsx)(i.Fragment,{children:e?(0,i.jsx)(l.Z,{children:(0,i.jsx)(g,{id:h,onClick:a,disabled:c,isLoading:o,endIcon:o?k:void 0,children:o?m("Confirming"):b})}):(0,i.jsx)(l.Z,{children:(0,i.jsx)(g,{onClick:u,endIcon:r?k:void 0,isLoading:r,children:m(r?"Enabling":"Enable")})})})}},78703:function(n,e,r){"use strict";var t=r(85893),i=r(27339),o=r(186);function c(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function u(){var n=c(["\n  border: 1px solid ",";\n  border-radius: 50%;\n  bottom: 0px;\n  position: absolute;\n  right: 0px;\n  min-width: 20px;\n  min-height: 20px;\n  width: 37.5%;\n  height: 37.5%;\n  z-index: 5;\n\n  "," {\n    border-width: 2px;\n  }\n"]);return u=function(){return n},n}function a(){var n=c(["\n  background: url('","');\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 50%;\n  position: relative;\n  width: 100%;\n  height: 100%;\n\n  & > img {\n    border-radius: 50%;\n  }\n"]);return a=function(){return n},n}function s(){var n=c(["\n  width: 100%;\n  height: 100%;\n"]);return s=function(){return n},n}var l=o.ZP.img(u(),(function(n){return n.theme.card.background}),(function(n){return n.theme.mediaQueries.sm})),d=o.ZP.div(a(),(function(n){return n.bg})),f=(0,o.ZP)(i.Z)(s());e.Z=function(n){var e,r=n.profile;return(0,t.jsxs)(d,{bg:null===(e=r.nft)||void 0===e?void 0:e.image.thumbnail,children:[!r.isActive&&(0,t.jsx)(f,{}),r.team&&(0,t.jsx)(l,{src:"/images/teams/".concat(r.team.images.alt),alt:r.team.name})]})}},38689:function(n,e,r){"use strict";r.d(e,{Z:function(){return ln}});var t,i=r(85893),o=r(74602),c=r(99150),u=r(67294);function a(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function s(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable})))),t.forEach((function(e){a(n,e,r[e])}))}return n}!function(n){n.START="start",n.CHANGE="change",n.REMOVE="remove",n.APPROVE="approve"}(t||(t={}));var l=function(n,e){switch(e.type){case"set_view":return s({},n,{currentView:e.view,previousView:n.currentView});case"go_previous":return s({},n,{currentView:n.previousView,previousView:n.currentView});default:return n}},d=function(){var n=(0,u.useReducer)(l,{currentView:t.START,previousView:null}),e=n[0],r=n[1];return s({},e,{goToStart:function(){return r({type:"set_view",view:t.START})},goToChange:function(){return r({type:"set_view",view:t.CHANGE})},goToRemove:function(){return r({type:"set_view",view:t.REMOVE})},goToApprove:function(){return r({type:"set_view",view:t.APPROVE})},goPrevious:function(){return r({type:"go_previous"})}})},f=r(34051),p=r.n(f),v=r(186),h=r(77044),m=r(99273),b=r(87761),x=r(5545),g=r(65044),j=r(55878),w=r(54626),y=r(24319),k=r(21046),C=r(41144),P=r(92335),Z=r(789);function O(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=n[r];return t}function A(n,e,r,t,i,o,c){try{var u=n[o](c),a=u.value}catch(s){return void r(s)}u.done?e(a):Promise.resolve(a).then(t,i)}function S(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var r=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var t,i,o=[],c=!0,u=!1;try{for(r=r.call(n);!(c=(t=r.next()).done)&&(o.push(t.value),!e||o.length!==e);c=!0);}catch(a){u=!0,i=a}finally{try{c||null==r.return||r.return()}finally{if(u)throw i}}return o}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return O(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return O(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var E=function(){var n=(0,c.$G)().t,e=(0,u.useState)(!0),r=e[0],t=e[1],i=(0,u.useState)({numberCakeToReactivate:k._Y,numberCakeToRegister:k._Y,numberCakeToUpdate:k._Y}),o=i[0],a=i[1],s=(0,Z.Z)().toastError;return(0,u.useEffect)((function(){var e=function(){var e,r=(e=p().mark((function e(){var r,i,o,c,u,l,d,f;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=["numberCakeToReactivate","numberCakeToRegister","numberCakeToUpdate"].map((function(n){return{address:(0,j.Re)(),name:n}})),e.t0=S,e.next=5,(0,C.v)(P,r);case 5:e.t1=e.sent,i=(0,e.t0)(e.t1,3),o=S(i[0],1),c=o[0],u=S(i[1],1),l=u[0],d=S(i[2],1),f=d[0],a({numberCakeToReactivate:c,numberCakeToRegister:l,numberCakeToUpdate:f}),t(!1),e.next=20;break;case 17:e.prev=17,e.t2=e.catch(0),s(n("Error"),n("Could not retrieve CAKE costs for profile"));case 20:case"end":return e.stop()}}),e,null,[[0,17]])})),function(){var n=this,r=arguments;return new Promise((function(t,i){var o=e.apply(n,r);function c(n){A(o,t,i,c,u,"next",n)}function u(n){A(o,t,i,c,u,"throw",n)}c(void 0)}))});return function(){return r.apply(this,arguments)}}();e()}),[a,s,n]),{costs:o,isLoading:r}},T=r(97971),R=r(21600),I=r(48650),D=r(78703);function L(n,e,r,t,i,o,c){try{var u=n[o](c),a=u.value}catch(s){return void r(s)}u.done?e(a):Promise.resolve(a).then(t,i)}function z(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function V(){var n=z(["\n  border-color: ",";\n  color: ",";\n  margin-bottom: 24px;\n\n  &:hover:not(:disabled):not(.button--disabled):not(:active) {\n    border-color: ",";\n    opacity: 0.8;\n  }\n"]);return V=function(){return n},n}function G(){var n=z(["\n  height: 64px;\n  width: 64px;\n\n  "," {\n    height: 128px;\n    width: 128px;\n  }\n"]);return G=function(){return n},n}var U=(0,v.ZP)(m.Z).attrs({variant:"secondary"})(V(),(function(n){return n.theme.colors.failure}),(function(n){return n.theme.colors.failure}),(function(n){return n.theme.colors.failure})),F=v.ZP.div(G(),(function(n){return n.theme.mediaQueries.sm})),M=function(n){var e=n.goToApprove,r=n.goToChange,t=n.goToRemove,o=n.onDismiss,a=(0,c.$G)().t,s=(0,h.Ge)().account,l=(0,w.kL)().reader,d=(0,I.Un)().profile,f=(0,y.Nn)(),v=f.balance,k=f.fetchStatus,C=E(),P=C.costs,Z=P.numberCakeToUpdate,O=P.numberCakeToReactivate,A=C.isLoading,S=(0,u.useState)(null),z=S[0],V=S[1],G=(null===d||void 0===d?void 0:d.isActive)?Z:O,M=k===T.iF.Fetched&&v.gte(G);return(0,u.useEffect)((function(){var n=function(){var n,e=(n=p().mark((function n(){var e;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,R.S)(l,s,(0,j.Re)(),G);case 2:e=n.sent,V(e);case 4:case"end":return n.stop()}}),n)})),function(){var e=this,r=arguments;return new Promise((function(t,i){var o=n.apply(e,r);function c(n){L(o,t,i,c,u,"next",n)}function u(n){L(o,t,i,c,u,"throw",n)}c(void 0)}))});return function(){return e.apply(this,arguments)}}();s&&!A&&n()}),[s,G,V,l,A]),d?(0,i.jsxs)(b.Z,{alignItems:"center",justifyContent:"center",flexDirection:"column",children:[(0,i.jsx)(F,{children:(0,i.jsx)(D.Z,{profile:d})}),(0,i.jsx)(b.Z,{alignItems:"center",style:{height:"48px"},justifyContent:"center",children:(0,i.jsx)(x.Z,{as:"p",color:"failure",children:!A&&!M&&a("%minimum% CAKE required to change profile pic",{minimum:(0,g.dp)(G)})})}),d.isActive?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(m.Z,{width:"100%",mb:"8px",onClick:!0===z?e:r,disabled:A||!M||null===z,children:a("Change Profile Pic")}),(0,i.jsx)(U,{width:"100%",onClick:t,children:a("Remove Profile Pic")})]}):(0,i.jsx)(m.Z,{width:"100%",mb:"8px",onClick:!0===z?e:r,disabled:A||!M||null===z,children:a("Reactivate Profile")}),(0,i.jsx)(m.Z,{variant:"text",width:"100%",onClick:o,children:a("Close Window")})]}):null},W=r(85810),_=r(70335),N=r(71228),H=r(71418),$=r(61134);function Q(n,e,r,t,i,o,c){try{var u=n[o](c),a=u.value}catch(s){return void r(s)}u.done?e(a):Promise.resolve(a).then(t,i)}var Y=function(n){var e=n.onDismiss,r=n.onSuccess,t=(0,u.useState)(!1),o=t[0],a=t[1],s=(0,I.Un)(),l=s.profile,d=s.refresh,f=E().costs.numberCakeToReactivate,v=(0,c.$G)().t,h=(0,w.wr)(),j=(0,N.d)().callWithGasPrice,y=(0,Z.Z)().toastSuccess,k=(0,H.Z)(),C=k.fetchWithCatchTxError,P=k.loading,O=function(){var n,t=(n=p().mark((function n(){var t;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,C((function(){return j(h,"pauseProfile")}));case 2:(null===(t=n.sent)||void 0===t?void 0:t.status)&&(d(),y(v("Profile Paused!"),(0,i.jsx)($.YO,{txHash:t.transactionHash})),r&&r(),null===e||void 0===e||e());case 4:case"end":return n.stop()}}),n)})),function(){var e=this,r=arguments;return new Promise((function(t,i){var o=n.apply(e,r);function c(n){Q(o,t,i,c,u,"next",n)}function u(n){Q(o,t,i,c,u,"throw",n)}c(void 0)}))});return function(){return t.apply(this,arguments)}}();return l?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(x.Z,{as:"p",color:"failure",mb:"24px",children:v("This will suspend your profile and send your Collectible back to your wallet")}),(0,i.jsx)(x.Z,{as:"p",color:"textSubtle",mb:"24px",children:v("While your profile is suspended, you won't be able to earn points, but your achievements and points will stay associated with your profile")}),(0,i.jsx)(x.Z,{as:"p",color:"textSubtle",mb:"24px",children:v("Cost to reactivate in the future: %cost% CAKE",{cost:(0,g.dp)(f)})}),(0,i.jsx)("label",{htmlFor:"acknowledgement",style:{cursor:"pointer",display:"block",marginBottom:"24px"},children:(0,i.jsxs)(b.Z,{alignItems:"center",children:[(0,i.jsx)(W.Z,{id:"acknowledgement",checked:o,onChange:function(){return a(!o)},scale:"sm"}),(0,i.jsx)(x.Z,{ml:"8px",children:v("I understand")})]})}),(0,i.jsx)(m.Z,{width:"100%",isLoading:P,endIcon:P?(0,i.jsx)(_.Z,{spin:!0,color:"currentColor"}):null,disabled:!o||P,onClick:O,mb:"8px",children:v("Confirm")}),(0,i.jsx)(m.Z,{variant:"text",width:"100%",onClick:e,children:v("Close Window")})]}):null},B=r(6741),K=r(56934),q=r(67218),J=r(68987),X=r(75673),nn=r(74136),en=r(13968),rn=r(75186),tn=r(10056);function on(n,e,r,t,i,o,c){try{var u=n[o](c),a=u.value}catch(s){return void r(s)}u.done?e(a):Promise.resolve(a).then(t,i)}var cn=function(n){var e=n.onDismiss,r=n.onSuccess,t=(0,u.useState)({tokenId:null,collectionAddress:null}),o=t[0],a=t[1],s=(0,c.$G)().t,l=(0,h.Ge)(),d=l.account,f=l.library,v=(0,I.Un)(),b=v.isLoading,g=v.profile,y=v.refresh,k=(0,tn.Z)(d,g,b),C=k.nfts,P=k.isLoading,O=(0,w.wr)(),A=(0,Z.Z)().toastSuccess,S=(0,N.d)().callWithGasPrice,E=(0,u.useMemo)((function(){return C.filter((function(n){return n.location===rn.Fb.WALLET}))}),[C]),T=(0,en.mN)(E).data,R=(0,u.useMemo)((function(){return!!T&&!!T[o.tokenId]}),[T,o.tokenId]),D=(0,q.Z)({onApprove:function(){var n=(0,J.vE)(o.collectionAddress,f.getSigner());return S(n,"approve",[(0,j.Re)(),o.tokenId])},onConfirm:function(){return g.isActive?S(O,"updateProfile",[o.collectionAddress,o.tokenId]):S(O,"reactivateProfile",[o.collectionAddress,o.tokenId])},onSuccess:function(){var n,t=(n=p().mark((function n(t){var o;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:o=t.receipt,y(),A(s("Profile Updated!"),(0,i.jsx)($.YO,{txHash:o.transactionHash})),r&&r(),null===e||void 0===e||e();case 5:case"end":return n.stop()}}),n)})),function(){var e=this,r=arguments;return new Promise((function(t,i){var o=n.apply(e,r);function c(n){on(o,t,i,c,u,"next",n)}function u(n){on(o,t,i,c,u,"throw",n)}c(void 0)}))});return function(n){return t.apply(this,arguments)}}()}),L=D.isApproving,z=D.isApproved,V=D.isConfirmed,G=D.isConfirming,U=D.handleApprove,F=D.handleConfirm,M=z||R;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(x.Z,{as:"p",color:"textSubtle",mb:"24px",children:s("Choose a new Collectible to use as your profile pic.")}),P?(0,i.jsx)(B.Z,{width:"100%",height:"80px",mb:"16px"}):E.length>0?(0,i.jsx)(K.Z,{maxHeight:"300px",overflowY:"scroll",children:E.map((function(n){return(0,i.jsx)(nn.Z,{name:"profilePicture",value:n.tokenId,image:n.image.thumbnail,isChecked:n.tokenId===o.tokenId,onChange:function(){a({tokenId:n.tokenId,collectionAddress:n.collectionAddress})},disabled:L||G||V,children:(0,i.jsx)(x.Z,{bold:!0,children:n.name})},"".concat(n.collectionAddress,"#").concat(n.tokenId))}))}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(x.Z,{as:"p",color:"textSubtle",mb:"16px",children:s("Sorry! You don\u2019t have any eligible Collectibles in your wallet to use!")}),(0,i.jsx)(x.Z,{as:"p",color:"textSubtle",mb:"24px",children:s("Make sure you have a Pancake Collectible in your wallet and try again!")})]}),(0,i.jsx)(X.Z,{isApproveDisabled:V||G||M||null===o.tokenId,isApproving:L,isConfirmDisabled:!M||V||null===o.tokenId,isConfirming:G,onApprove:U,onConfirm:F}),(0,i.jsx)(m.Z,{mt:"8px",variant:"text",width:"100%",onClick:e,disabled:L||G,children:s("Close Window")})]})};function un(n,e,r,t,i,o,c){try{var u=n[o](c),a=u.value}catch(s){return void r(s)}u.done?e(a):Promise.resolve(a).then(t,i)}var an=function(n){var e=n.goToChange,r=n.onDismiss,t=(0,I.Un)().profile,o=(0,c.$G)().t,u=(0,H.Z)(),a=u.fetchWithCatchTxError,s=u.loading,l=E().costs,d=l.numberCakeToUpdate,f=l.numberCakeToReactivate,v=(0,w.kL)().signer;if(!t)return null;var h=t.isActive?d:f,y=function(){var n,r=(n=p().mark((function n(){var r;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a((function(){return v.approve((0,j.Re)(),h.mul(2).toString())}));case 2:(null===(r=n.sent)||void 0===r?void 0:r.status)&&e();case 4:case"end":return n.stop()}}),n)})),function(){var e=this,r=arguments;return new Promise((function(t,i){var o=n.apply(e,r);function c(n){un(o,t,i,c,u,"next",n)}function u(n){un(o,t,i,c,u,"throw",n)}c(void 0)}))});return function(){return r.apply(this,arguments)}}();return(0,i.jsxs)(b.Z,{flexDirection:"column",children:[(0,i.jsxs)(b.Z,{alignItems:"center",justifyContent:"space-between",mb:"24px",children:[(0,i.jsx)(x.Z,{children:t.isActive?o("Cost to update:"):o("Cost to reactivate:")}),(0,i.jsxs)(x.Z,{children:[(0,g.dp)(h)," CAKE"]})]}),(0,i.jsx)(m.Z,{disabled:s,isLoading:s,endIcon:s?(0,i.jsx)(_.Z,{spin:!0,color:"currentColor"}):null,width:"100%",mb:"8px",onClick:y,children:o("Enable")}),(0,i.jsx)(m.Z,{variant:"text",width:"100%",onClick:r,disabled:s,children:o("Close Window")})]})},sn=function(n,e){switch(e){case t.START:return n("Edit Profile");case t.CHANGE:return n("Change Profile Pic");case t.REMOVE:return n("Remove Profile Pic");case t.APPROVE:return n("Enable CAKE");default:return""}},ln=function(n){var e=n.onDismiss,r=n.onSuccess,u=d(),a=u.currentView,s=u.goToChange,l=u.goToRemove,f=u.goToApprove,p=u.goPrevious,v=(0,c.$G)().t,h=a===t.START,m=h?null:function(){return p()};return(0,i.jsx)(o.Z,{title:sn(v,a),onBack:m,onDismiss:e,hideCloseButton:!h,children:(0,i.jsxs)("div",{style:{maxWidth:"400px"},children:[a===t.START&&(0,i.jsx)(M,{goToApprove:f,goToChange:s,goToRemove:l,onDismiss:e}),a===t.REMOVE&&(0,i.jsx)(Y,{onDismiss:e,onSuccess:r}),a===t.CHANGE&&(0,i.jsx)(cn,{onDismiss:e,onSuccess:r}),a===t.APPROVE&&(0,i.jsx)(an,{goToChange:s,onDismiss:e})]})})}},7402:function(n,e,r){"use strict";function t(){var n,e,r=(n=["\n  background: url('/images/nfts/no-profile-md.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 50%;\n  position: relative;\n  width: 96px;\n  height: 96px;\n\n  & > img {\n    border-radius: 50%;\n  }\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return t=function(){return r},r}var i=r(186).ZP.div(t());e.Z=i},10056:function(n,e,r){"use strict";var t=r(34051),i=r.n(t),o=r(67294),c=r(41609),u=r.n(c),a=r(13968),s=r(75186),l=r(86849),d=r(38328),f=r(40821),p=r(97971),v=r(38472);function h(n,e,r,t,i,o,c){try{var u=n[o](c),a=u.value}catch(s){return void r(s)}u.done?e(a):Promise.resolve(a).then(t,i)}e.Z=function(n,e,r){var t,c,m=(0,a.t8)().data,b=null===e||void 0===e?void 0:e.tokenId,x=null===e||void 0===e||null===(t=e.tokenId)||void 0===t?void 0:t.toString(),g=null===e||void 0===e?void 0:e.collectionAddress,j=(0,o.useMemo)((function(){return b?{tokenId:x,collectionAddress:g,nftLocation:s.Fb.PROFILE}:null}),[x,g,b]),w=(0,f.ZP)(r||u()(m)||!(0,d.UJ)(n)?null:[n,"userNfts"],(c=i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.A8)(n,m,j));case 1:case"end":return e.stop()}}),e)})),function(){var n=this,e=arguments;return new Promise((function(r,t){var i=c.apply(n,e);function o(n){h(i,r,t,o,u,"next",n)}function u(n){h(i,r,t,o,u,"throw",n)}o(void 0)}))}),{use:[v.XS]}),y=w.status,k=w.data,C=w.mutate;return{nfts:null!==k&&void 0!==k?k:[],isLoading:y!==p.iF.Fetched,refresh:C}}},74136:function(n,e,r){"use strict";var t=r(85893),i=r(186),o=r(53503),c=r(83482);function u(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function a(n,e){if(null==n)return{};var r,t,i=function(n,e){if(null==n)return{};var r,t,i={},o=Object.keys(n);for(t=0;t<o.length;t++)r=o[t],e.indexOf(r)>=0||(i[r]=n[r]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(t=0;t<o.length;t++)r=o[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(i[r]=n[r])}return i}function s(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function l(){var n=s(["\n  cursor: ",";\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  opacity: ",";\n"]);return l=function(){return n},n}function d(){var n=s(["\n  align-items: center;\n  display: flex;\n  flex-grow: 1;\n  height: 80px;\n  padding: 8px 16px;\n"]);return d=function(){return n},n}function f(){var n=s(["\n  margin-left: 16px;\n"]);return f=function(){return n},n}function p(){var n=s(["\n  align-self: stretch;\n  background-image: url('","');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  flex: none;\n  width: 80px;\n"]);return p=function(){return n},n}var v=i.ZP.label(l(),(function(n){return n.isDisabled?"not-allowed":"pointer"}),(function(n){return n.isDisabled?"0.6":"1"})),h=i.ZP.div(d()),m=i.ZP.div(f()),b=i.ZP.div(p(),(function(n){return n.src}));e.Z=function(n){var e=n.name,r=n.value,i=n.isChecked,s=void 0!==i&&i,l=n.image,d=n.onChange,f=n.disabled,p=n.children,x=a(n,["name","value","isChecked","image","onChange","disabled","children"]);return(0,t.jsx)(o.Z,function(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable})))),t.forEach((function(e){u(n,e,r[e])}))}return n}({isSuccess:s,isDisabled:f,mb:"16px"},x,{children:(0,t.jsxs)(v,{isDisabled:f,children:[(0,t.jsxs)(h,{children:[(0,t.jsx)(c.Z,{name:e,checked:s,value:r,onChange:function(n){return d(n.target.value)},disabled:f,style:{flex:"none"}}),(0,t.jsx)(m,{children:p})]}),(0,t.jsx)(b,{src:l})]})}))}}}]);