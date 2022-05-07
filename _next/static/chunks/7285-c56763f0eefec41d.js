"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7285],{57393:function(n,e,t){var r=t(85893),i=t(67294),o=t(186),l=t(57247),u=t(12347);function c(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function a(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function f(n){return function(n){if(Array.isArray(n))return c(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,e){if(!n)return;if("string"===typeof n)return c(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return c(n,e)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(){var n=a(["\n  align-items: center;\n  color: ",";\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  "," {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  "," {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"]);return s=function(){return n},n}function d(){var n=a(["\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  a {\n    color: ",";\n\n    &:hover {\n      color: ",";\n    }\n  }\n\n  ","\n"]);return d=function(){return n},n}var C=o.ZP.div(s(),(function(n){return n.theme.colors.textDisabled}),(function(n){return n.theme.mediaQueries.sm}),(function(n){return n.theme.mediaQueries.md})),p=o.ZP.ul(d(),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.primaryBright}),l.Dh),h=(0,r.jsx)(u.Z,{color:"currentColor",width:"24px"});e.Z=function(n){var e=n.separator,t=void 0===e?h:e,o=n.children,l=function(n,e){return n.reduce((function(n,t,i){return 0===i?f(n).concat([t]):f(n).concat([(0,r.jsx)(C,{"aria-hidden":!0,children:e},"seperator-".concat(i)),t])}),[])}(i.Children.toArray(o).filter((function(n){return(0,i.isValidElement)(n)})),t);return(0,r.jsx)(p,{children:l.map((function(n,e){return(0,r.jsx)("li",{children:n},"child-".concat(e))}))})}},68112:function(n,e,t){t.d(e,{Z:function(){return y}});var r=t(85893),i=(t(67294),t(186)),o=t(17804);function l(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var u=function(n){return(0,r.jsxs)(o.Z,function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){l(n,e,t[e])}))}return n}({viewBox:"0 0 256 256"},n,{children:[(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M166.898 204.279C172.402 190.795 170.197 176.127 166.942 163.633C164.747 155.208 156.522 149.043 143.339 146.339C130.289 143.662 113.23 144.62 95.212 149.658C77.1941 154.696 61.9863 162.761 52.0088 171.877C41.9295 181.085 37.8164 190.7 40.0117 199.126C43.2669 211.619 48.4857 225.444 59.7919 234.228C70.9463 242.894 88.7701 247.193 118.461 238.891C148.152 230.589 161.467 217.582 166.898 204.279ZM119.268 241.986C179.746 225.075 176.514 188.072 169.929 162.798C164.622 142.43 131.106 136.301 94.4056 146.563C57.7053 156.825 31.7183 179.593 37.0251 199.961C43.6102 225.235 58.7891 258.897 119.268 241.986Z",fill:"#464649"}),(0,r.jsx)("path",{d:"M155.801 175.68C158.653 186.628 180.351 181.576 214.977 171.894C249.604 162.212 257.158 150.578 254.305 139.63C251.453 128.682 244.685 121.053 216.678 128.884C182.051 138.566 152.948 164.732 155.801 175.68Z",fill:"#606063"}),(0,r.jsx)("path",{d:"M159.97 178.737L175.437 178.709C178.284 178.704 178.523 174.429 177.474 164.815C176.82 158.816 173.457 154.101 171.27 155.477L159.942 163.875L159.97 178.737Z",fill:"#464649"}),(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M162.261 177.996C160.059 177.319 159.158 176.266 158.788 174.845C158.644 174.296 158.636 173.375 159.104 171.965C159.566 170.568 160.432 168.889 161.754 166.98C164.397 163.161 168.612 158.775 174.091 154.332C185.037 145.456 200.6 136.7 217.484 131.979C231.34 128.104 239.201 128.297 243.777 130.191C248.018 131.946 250.005 135.425 251.319 140.465C251.901 142.7 251.928 144.848 251.283 146.962C250.634 149.091 249.235 151.411 246.622 153.858C241.312 158.83 231.342 163.998 214.171 168.799C196.798 173.657 182.967 177.263 173.149 178.336C168.216 178.875 164.644 178.728 162.261 177.996ZM214.977 171.894C180.351 181.576 158.653 186.628 155.801 175.68C152.948 164.732 182.051 138.566 216.678 128.884C244.685 121.053 251.453 128.682 254.305 139.63C257.158 150.578 249.604 162.212 214.977 171.894Z",fill:"#464649"}),(0,r.jsx)("path",{d:"M169.925 161.024C176.511 186.298 179.743 223.301 119.264 240.212C58.7859 257.123 43.607 223.461 37.022 198.187C31.7151 177.819 57.7022 155.052 94.4024 144.789C131.103 134.527 164.619 140.656 169.925 161.024Z",fill:"#606063"}),(0,r.jsx)("path",{d:"M62.2322 217.512C45.5076 212.12 42.4613 203.795 40.3848 196.052L41.9594 211.275L50.2352 225.685L64.4374 238.481L80.947 244.327C82.4065 243.612 89.4986 243.299 83.1029 242.028C76.7073 240.758 72.7474 234.756 69.9914 231.378C68.2638 226.484 67.7365 219.287 62.2322 217.512Z",fill:"#464649"}),(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M166.895 202.505C172.399 189.021 170.194 174.353 166.939 161.86C164.744 153.434 156.519 147.269 143.336 144.565C130.286 141.888 113.227 142.846 95.2088 147.884C77.1909 152.922 61.9831 160.987 52.0056 170.103C41.9263 179.311 37.8132 188.926 40.0086 197.352C43.2637 209.845 48.4825 223.67 59.7887 232.454C70.9431 241.12 88.7669 245.419 118.458 237.117C148.149 228.815 161.464 215.809 166.895 202.505ZM119.264 240.212C179.743 223.301 176.511 186.298 169.925 161.024C164.619 140.656 131.103 134.527 94.4024 144.789C57.7022 155.052 31.7151 177.819 37.022 198.187C43.607 223.461 58.7859 257.123 119.264 240.212Z",fill:"#464649"}),(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M164.233 181.686C165.018 182.322 165.157 183.497 164.543 184.311C162.98 186.382 161.187 188.422 159.188 190.412C158.469 191.128 157.327 191.104 156.636 190.36C155.945 189.615 155.968 188.431 156.687 187.716C158.576 185.834 160.252 183.925 161.7 182.007C162.314 181.193 163.448 181.05 164.233 181.686ZM57.4215 216.239C57.6566 215.235 58.6323 214.619 59.6008 214.863C73.2899 218.308 91.7045 217.793 111.035 212.388C120.262 209.808 128.779 206.37 136.271 202.374C137.157 201.901 138.245 202.263 138.701 203.181C139.157 204.099 138.809 205.226 137.923 205.699C130.195 209.821 121.438 213.352 111.976 215.998C92.2044 221.527 73.1589 222.124 58.7494 218.497C57.7809 218.253 57.1863 217.242 57.4215 216.239Z",fill:"#979797"}),(0,r.jsx)("path",{d:"M159.836 163.292C164.405 180.829 141.059 195.381 109.857 204.106C78.655 212.831 51.4793 212.682 46.8428 194.887C42.2064 177.092 65.6193 162.798 96.8214 154.074C128.024 145.349 155.266 145.755 159.836 163.292Z",fill:"#464649"}),(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M145.831 183.549C154.508 176.998 157.462 170.578 155.854 164.406C154.245 158.233 148.575 154.225 137.894 153.086C127.333 151.96 113.281 153.898 97.8965 158.2C82.4985 162.506 69.3986 168.094 60.8132 174.54C52.1526 181.043 49.1801 187.461 50.825 193.774C52.4698 200.087 58.1557 204.083 68.7987 205.189C79.3491 206.285 93.384 204.285 108.782 199.98C124.166 195.678 137.251 190.028 145.831 183.549ZM110.264 205.113C141.466 196.388 164.405 180.829 159.836 163.292C155.266 145.755 128.024 145.349 96.8214 154.074C65.6193 162.798 42.2064 177.092 46.8428 194.887C51.4793 212.682 79.0614 213.838 110.264 205.113Z",fill:"#737373"}),(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M103.877 181.153C89.0555 185.297 76.4977 192.072 68.1169 199.619C67.3647 200.297 66.2249 200.214 65.5711 199.434C64.9173 198.655 64.997 197.474 65.7492 196.796C74.622 188.806 87.7006 181.803 102.936 177.543C106.034 176.676 109.107 175.955 112.134 175.375C113.114 175.187 114.056 175.858 114.237 176.873C114.419 177.889 113.771 178.864 112.792 179.052C109.86 179.614 106.881 180.313 103.877 181.153ZM123.847 175.658C123.792 174.627 124.554 173.745 125.549 173.688C132.378 173.297 138.774 173.682 144.424 174.797C145.403 174.991 146.046 175.97 145.86 176.984C145.673 177.999 144.728 178.664 143.749 178.471C138.431 177.421 132.333 177.045 125.749 177.422C124.753 177.479 123.902 176.69 123.847 175.658Z",fill:"#606063"})]}))};function c(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var a=function(n){return(0,r.jsx)(o.Z,function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){c(n,e,t[e])}))}return n}({viewBox:"0 0 128 128"},n,{children:(0,r.jsxs)("svg",{width:"128",height:"128",viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("path",{d:"M56.7204 37.5858C56.7204 45.3822 58.0271 54.1169 60.2906 60.8591C61.4246 64.2369 62.7705 67.0285 64.249 68.946C65.742 70.8826 67.1906 71.7103 68.5307 71.7103C71.1919 71.7103 74.4165 70.5307 77.8384 68.3524C81.235 66.1902 84.7001 63.1234 87.8127 59.5481C94.0844 52.3439 98.6784 43.3694 98.6784 35.942C98.6784 28.1653 97.1567 21.2636 93.9931 16.3543C90.8793 11.5222 86.1363 8.54284 79.3564 8.54284C72.6009 8.54284 66.9825 11.9157 63.0072 17.2564C59.0174 22.6164 56.7204 29.9263 56.7204 37.5858Z",fill:"#FEDC90",stroke:"#D1884F",strokeWidth:"2.89134"}),(0,r.jsx)("path",{d:"M32.7442 66.7859C39.4364 62.9222 47.2575 60.5211 53.8454 59.9252C57.1411 59.6272 60.0564 59.7876 62.336 60.3933C64.6294 61.0028 66.1079 62.0118 66.8368 63.2742C69.6116 68.0804 69.9429 76.4856 67.7501 84.8501C65.5656 93.1829 61.0085 100.957 54.6069 104.653C47.9434 108.5 40.9505 110.185 34.8292 109.454C28.7533 108.729 23.476 105.626 20.0729 99.7316C16.6658 93.8305 16.5364 87.5528 18.8757 81.7754C21.228 75.9659 26.1018 70.6209 32.7442 66.7859Z",fill:"#D1884F",stroke:"#633001",strokeWidth:"2.89134"}),(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M73.6122 7.76013C69.4145 8.86483 64.8207 11.0867 61.24 16.1556C53.2804 27.4231 51.7006 41.9592 58.5495 60.7386C65.3984 79.518 63.3431 89.9236 56.0487 98.3189C48.7543 106.714 29.475 108.685 23.3482 101.929C21.8481 100.274 17.4954 97.4588 20.3675 102.54C23.2397 107.622 30.7527 111.748 39.59 111.748C48.4273 111.748 55.5943 108.146 61.958 101.338C68.3217 94.5306 74.292 78.3883 68.3268 61.7709C60.6331 40.3385 62.8311 27.508 68.2893 19.7815C71.0879 15.8198 75.5453 12.3629 78.6077 10.5868C81.8233 8.72183 84.8797 8.42294 86.8682 8.42294C83.3332 6.65548 77.8099 6.65542 73.6122 7.76013Z",fill:"#633001"})]})}))};function f(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function s(){var n=f(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);return s=function(){return n},n}function d(){var n=f(["\n\t0% {\n\t\ttransform: translatey(0px);\n\t}\n\t50% {\n\t\ttransform: translatey(10px);\n\t}\n\t100% {\n\t\ttransform: translatey(0px);\n\t}\n"]);return d=function(){return n},n}function C(){var n=f(["\n  position: relative;\n"]);return C=function(){return n},n}function p(){var n=f(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: "," 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"]);return p=function(){return n},n}function h(){var n=f(["\n  animation: "," 6s ease-in-out infinite;\n  transform: translate3d(0, 0, 0);\n"]);return h=function(){return n},n}var v=(0,i.F4)(s()),x=(0,i.F4)(d()),j=i.ZP.div(C()),b=(0,i.ZP)(a)(p(),v),m=(0,i.ZP)(u)(h(),x),y=function(n){var e=n.size,t=void 0===e?128:e;return(0,r.jsxs)(j,{children:[(0,r.jsx)(b,{width:"".concat(.5*t,"px")}),(0,r.jsx)(m,{width:"".concat(t,"px")})]})}},12347:function(n,e,t){var r=t(85893),i=(t(67294),t(17804));function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}e.Z=function(n){return(0,r.jsx)(i.Z,function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){o(n,e,t[e])}))}return n}({viewBox:"0 0 24 24"},n,{children:(0,r.jsx)("path",{d:"M9.29006 15.88L13.1701 12L9.29006 8.12001C8.90006 7.73001 8.90006 7.10001 9.29006 6.71001C9.68006 6.32001 10.3101 6.32001 10.7001 6.71001L15.2901 11.3C15.6801 11.69 15.6801 12.32 15.2901 12.71L10.7001 17.3C10.3101 17.69 9.68006 17.69 9.29006 17.3C8.91006 16.91 8.90006 16.27 9.29006 15.88Z"})}))}},77041:function(n,e,t){t.d(e,{o:function(){return C},_:function(){return p}});var r=t(85893),i=t(87761),o=t(56934),l=t(186);function u(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function c(){var n=u(["\n  overflow-x: scroll;\n  padding: 0;\n  border-radius: 24px 24px 0 0;\n  ::-webkit-scrollbar {\n    display: none;\n  }\n  scrollbar-width: none; /* Firefox */\n"]);return c=function(){return n},n}function a(){var n=u(["\n  justify-content: space-between;\n  background-color: ",";\n  width: 100%;\n"]);return a=function(){return n},n}function f(){var n=u(["\n  display: inline-flex;\n  justify-content: center;\n  cursor: pointer;\n  flex: 1;\n  border: 0;\n  outline: 0;\n  margin: 0;\n  border-radius: 24px 24px 0 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: ",";\n  background-color: ",";\n  box-shadow: none;\n"]);return f=function(){return n},n}var s=(0,l.ZP)(i.Z)(c()),d=(0,l.ZP)(i.Z)(a(),(function(n){return n.theme.colors.input})),C=(0,l.ZP)(o.Z).attrs({as:"button"})(f(),(function(n){var e=n.theme;return n.isActive?e.colors.text:e.colors.textSubtle}),(function(n){var e=n.theme;return n.isActive?e.card.background:e.colors.input}));C.defaultProps={p:"16px"};var p=function(n){var e=n.children;return(0,r.jsx)(s,{p:["0 4px","0 16px"],children:(0,r.jsx)(d,{children:e})})}},5004:function(n,e,t){var r,i=t(85893),o=t(67294),l=t(5545),u=t(6741),c=t(53503),a=t(87761),f=t(56934),s=t(45091),d=t(55224),C=t(77041),p=t(99150),h=t(56245),v=t(42227),x=(0,t(5152).default)((function(){return Promise.all([t.e(2298),t.e(3136),t.e(5491)]).then(t.bind(t,85491))}),{loadableGenerated:{webpack:function(){return[85491]}},ssr:!1});!function(n){n[n.LIQUIDITY=0]="LIQUIDITY",n[n.VOLUME=1]="VOLUME",n[n.PRICE=2]="PRICE"}(r||(r={}));e.Z=function(n){var e=n.variant,t=n.chartData,j=n.tokenData,b=n.tokenPriceData,m=(0,o.useState)(r.VOLUME),y=m[0],g=m[1],Z=(0,o.useState)(),w=Z[0],O=Z[1],P=(0,o.useState)(),M=P[0],L=P[1],I=(0,p.$G)(),D=I.t,k=I.currentLanguage.locale,E=(new Date).toLocaleString(k,{month:"short",year:"numeric",day:"numeric"}),S=(0,o.useMemo)((function(){return t?t.map((function(n){return{time:(0,v.Z)(n.date),value:n.liquidityUSD}})):[]}),[t]),R=(0,o.useMemo)((function(){return t?t.map((function(n){return{time:(0,v.Z)(n.date),value:n.volumeUSD}})):[]}),[t]);return(0,i.jsxs)(c.Z,{children:[(0,i.jsxs)(C._,{children:[(0,i.jsx)(C.o,{isActive:y===r.VOLUME,onClick:function(){return g(r.VOLUME)},children:(0,i.jsx)(l.Z,{children:D("Volume")})}),(0,i.jsx)(C.o,{isActive:y===r.LIQUIDITY,onClick:function(){return g(r.LIQUIDITY)},children:(0,i.jsx)(l.Z,{children:D("Liquidity")})}),"token"===e&&(0,i.jsx)(C.o,{isActive:y===r.PRICE,onClick:function(){return g(r.PRICE)},children:(0,i.jsx)(l.Z,{children:D("Price")})})]}),(0,i.jsxs)(a.Z,{flexDirection:"column",px:"24px",pt:"24px",children:[function(){var n=null;if(w)n=(0,h.d)(w);else if(y===r.VOLUME&&R.length>0){var e;n=(0,h.d)(null===(e=R[R.length-1])||void 0===e?void 0:e.value)}else if(y===r.LIQUIDITY&&S.length>0){var t;n=(0,h.d)(null===(t=S[S.length-1])||void 0===t?void 0:t.value)}else y===r.PRICE&&(null===j||void 0===j?void 0:j.priceUSD)&&(n=(0,h.d)(j.priceUSD));return n?(0,i.jsxs)(l.Z,{fontSize:"24px",bold:!0,children:["$",n]}):(0,i.jsx)(u.Z,{height:"36px",width:"128px"})}(),(0,i.jsx)(l.Z,{small:!0,color:"secondary",children:M||E})]}),(0,i.jsx)(f.Z,{px:"24px",height:"token"===e?"250px":"335px",children:y===r.LIQUIDITY?(0,i.jsx)(s.Z,{data:S,setHoverValue:O,setHoverDate:L}):y===r.VOLUME?(0,i.jsx)(d.Z,{data:R,setHoverValue:O,setHoverDate:L}):y===r.PRICE?(0,i.jsx)(x,{data:b,setValue:O,setLabel:L}):null})]})}}}]);