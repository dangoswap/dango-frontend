(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{45301:function(n,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(23549)}])},67512:function(n,e,i){"use strict";i.d(e,{Z:function(){return B}});var t=i(85893),r=i(186),o=i(87761),l=i(56934),c=i(55027);function u(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function d(){var n=u(["\n  width: 100%;\n  height: 20px;\n  clip-path: url(",");\n\n  background: ",";\n\n  & svg {\n    display: block;\n  }\n"]);return d=function(){return n},n}function a(){var n=u(["\n  ","\n  transform: ",";\n"]);return a=function(){return n},n}function s(){var n=u(["\n  ","\n  transform: ",";\n"]);return s=function(){return n},n}var p=function(n,e,i){return(0,r.iv)(d(),e,(function(){return n.isDark?(null===i||void 0===i?void 0:i.dark)||(null===i||void 0===i?void 0:i.light)||n.colors.background:(null===i||void 0===i?void 0:i.light)||n.colors.background}))},v=(0,r.ZP)(l.Z)(a(),(function(n){var e=n.theme,i=n.clipPath,t=n.clipFill;return p(e,i,t)}),(function(n){return"#bottomConcaveCurve"===n.clipPath?"translate(0, -13px)":"translate(0, 1px)"})),f=(0,r.ZP)(l.Z)(s(),(function(n){var e=n.theme,i=n.clipPath,t=n.clipFill;return p(e,i,t)}),(function(n){return"#bottomConvexCurve"===n.clipPath?"translate(0, -13px)":"translate(0, -1px)"})),x=function(n){var e=n.clipFill;return(0,t.jsx)(f,{clipFill:e,clipPath:"#topConvexCurve",children:(0,t.jsx)("svg",{width:"0",height:"0",children:(0,t.jsx)("defs",{children:(0,t.jsx)("clipPath",{id:"topConvexCurve",clipPathUnits:"objectBoundingBox",children:(0,t.jsx)("path",{d:"M 0,1 L 0,0 L 1,0 L 1,1 C 0.75 0, .25 0, 0 1 Z"})})})})})},h=function(n){var e=n.clipFill;return(0,t.jsx)(f,{clipFill:e,clipPath:"#bottomConvexCurve",children:(0,t.jsx)("svg",{width:"0",height:"0",children:(0,t.jsx)("defs",{children:(0,t.jsx)("clipPath",{id:"bottomConvexCurve",clipPathUnits:"objectBoundingBox",children:(0,t.jsx)("path",{d:"M 0,0 L 0,1 L 1,1 L 1,0 C .75 1, .25 1, 0 0 Z"})})})})})},g=function(n){var e=n.clipFill;return(0,t.jsx)(v,{clipFill:e,clipPath:"#topConcaveCurve",children:(0,t.jsx)("svg",{width:"0",height:"0",children:(0,t.jsx)("defs",{children:(0,t.jsx)("clipPath",{id:"topConcaveCurve",clipPathUnits:"objectBoundingBox",children:(0,t.jsx)("path",{d:"M 0,0 L 0,1 L 1,1 L 1,0 C .75 1, .25 1, 0 0 Z"})})})})})},b=function(n){var e=n.clipFill;return(0,t.jsx)(v,{clipFill:e,clipPath:"#bottomConcaveCurve",children:(0,t.jsx)("svg",{width:"0",height:"0",children:(0,t.jsx)("defs",{children:(0,t.jsx)("clipPath",{id:"bottomConcaveCurve",clipPathUnits:"objectBoundingBox",children:(0,t.jsx)("path",{d:"M 0,1 L 0,0 L 1,0 L 1,1 C .75 0.1, .25 0.1, 0 1 Z"})})})})})};function m(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function j(){var n=m(["\n  background: ",";\n  z-index: ",";\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n"]);return j=function(){return n},n}function P(){var n=m(["\n  z-index: ",";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]);return P=function(){return n},n}var C=r.ZP.div(j(),(function(n){var e=n.theme,i=n.dividerFill;return e.isDark?(null===i||void 0===i?void 0:i.dark)||(null===i||void 0===i?void 0:i.light)||"none":(null===i||void 0===i?void 0:i.light)||(null===i||void 0===i?void 0:i.dark)||"none"}),(function(n){return n.index})),F=r.ZP.div(P(),(function(n){return n.index+1})),O=function(n){var e=n.index,i=n.dividerPosition,r=n.dividerComponent,o=n.concave,l=n.clipFill,c=n.dividerFill,u="top"===i&&!o,d="bottom"===i&&!o,a="top"===i&&o,s="bottom"===i&&o;return(0,t.jsxs)(C,{index:e,dividerFill:c,children:[r&&(0,t.jsx)(F,{index:e,children:r}),(0,t.jsxs)(t.Fragment,{children:[a&&(0,t.jsx)(g,{clipFill:l}),s&&(0,t.jsx)(b,{clipFill:l})]}),(0,t.jsxs)(t.Fragment,{children:[u&&(0,t.jsx)(x,{clipFill:l}),d&&(0,t.jsx)(h,{clipFill:l})]})]})};function Z(n,e,i){return e in n?Object.defineProperty(n,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[e]=i,n}function w(n){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},t=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(i).filter((function(n){return Object.getOwnPropertyDescriptor(i,n).enumerable})))),t.forEach((function(e){Z(n,e,i[e])}))}return n}function k(n,e){if(null==n)return{};var i,t,r=function(n,e){if(null==n)return{};var i,t,r={},o=Object.keys(n);for(t=0;t<o.length;t++)i=o[t],e.indexOf(i)>=0||(r[i]=n[i]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(t=0;t<o.length;t++)i=o[t],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(n,i)&&(r[i]=n[i])}return r}function y(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function z(){var n=y(["\n  position: relative;\n  flex-direction: column;\n  align-items: center;\n  z-index: ",";\n  background: ",";\n  padding: ",";\n"]);return z=function(){return n},n}function D(){var n=y(["\n  min-height: auto;\n  padding-top: 16px;\n  padding-bottom: 16px;\n\n  "," {\n    padding-top: 32px;\n    padding-bottom: 32px;\n  }\n\n  "," {\n    padding-top: 48px;\n    padding-bottom: 48px;\n  }\n"]);return D=function(){return n},n}var _=(0,r.ZP)(o.Z)(z(),(function(n){return n.index-1}),(function(n){var e=n.background,i=n.theme;return e||i.colors.background}),(function(n){return(0,n.getPadding)()})),L=(0,r.ZP)(c.Z)(D(),(function(n){return n.theme.mediaQueries.sm}),(function(n){return n.theme.mediaQueries.lg})),B=function(n){var e=n.children,i=n.background,r=n.svgFill,o=n.index,c=void 0===o?1:o,u=n.dividerComponent,d=n.dividerPosition,a=void 0===d?"bottom":d,s=n.hasCurvedDivider,p=void 0===s||s,v=n.concaveDivider,f=void 0!==v&&v,x=n.clipFill,h=n.dividerFill,g=n.containerProps,b=n.innerProps,m=k(n,["children","background","svgFill","index","dividerComponent","dividerPosition","hasCurvedDivider","concaveDivider","clipFill","dividerFill","containerProps","innerProps"]);return(0,t.jsxs)(l.Z,w({},g,{children:[p&&"top"===a&&(0,t.jsx)(O,{svgFill:r,index:c,concave:f,dividerPosition:a,dividerComponent:u,clipFill:x,dividerFill:h}),(0,t.jsx)(_,w({background:i,index:c,getPadding:function(){return p?"bottom"===a?"48px 0 14px":"top"===a?"14px 0 48px":"48px 0":"48px 0"}},m,{children:(0,t.jsx)(L,w({},b,{children:e}))})),p&&"bottom"===a&&(0,t.jsx)(O,{svgFill:r,index:c,concave:f,dividerPosition:a,dividerComponent:u,clipFill:x,dividerFill:h})]}))}},23549:function(n,e,i){"use strict";i.r(e),i.d(e,{__N_SSG:function(){return O},default:function(){return Z}});var t=i(85893),r=i(40821),o=i(186),l=i(67512),c=i(77044),u=i(23917),d=i(55027),a=i(83559),s=i(99150),p=i(87761),v=i(87388);function f(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function x(){var n=f(["\n  z-index: -1;\n  overflow: hidden;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  bottom: 0px;\n  left: 0px;\n"]);return x=function(){return n},n}function h(){var n=f(["\n  position: absolute;\n  width: 100%;\n  bottom: -3px;\n"]);return h=function(){return n},n}o.ZP.div(x()),o.ZP.div(h());var g=function(){var n=(0,s.$G)().t;(0,c.Ge)().account,(0,u.Z)().theme;return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(p.Z,{position:"relative",flexDirection:["column-reverse",null,null,"row"],alignItems:["flex-end",null,null,"center"],justifyContent:"center",id:"homepage-header",children:(0,t.jsxs)(p.Z,{flex:"1",flexDirection:"column",children:[(0,t.jsx)(v.Z,{scale:"xxl",color:"secondary",mb:"24px",textAlign:"center",children:n("GameFi-Focused Defi on Bitkub Chain")}),(0,t.jsx)(v.Z,{scale:"lg",mb:"24px",textAlign:"center",children:n("Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa optio et laudantium ipsum ipsam nesciunt, odio hic quibusdam molestias magnam.")})]})})})};function b(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function m(){var n=b(["\n  padding-top: 16px;\n\n  "," {\n    padding-top: 48px;\n  }\n"]);return m=function(){return n},n}function j(){var n=b(["\n  padding-top: 16px;\n\n  "," {\n    padding-top: 48px;\n  }\n\n  backgroundImage {\n    opacity: 0.5;\n  }\n\n"]);return j=function(){return n},n}function P(){var n=b(["\n  z-index: 1;\n  position: absolute;\n  width: 100%;\n  top: 0;\n  left: 50%;\n  transform: translate(-50%, 0);\n  padding-left: 0px;\n  padding-right: 0px;\n\n  "," {\n    padding-left: 24px;\n    padding-right: 24px;\n  }\n"]);return P=function(){return n},n}(0,o.ZP)(l.Z)(m(),(function(n){return n.theme.mediaQueries.md}));var C=(0,o.ZP)(l.Z)(j(),(function(n){return n.theme.mediaQueries.md})),F=((0,o.ZP)(d.Z)(P(),(function(n){return n.theme.mediaQueries.lg})),function(){(0,u.Z)().theme,(0,c.Ge)().account,(0,s.$G)().t;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.V,{}),(0,t.jsx)(C,{innerProps:{style:{width:"100%",height:"500px"}},style:{backgroundImage:"linear-gradient(rgba(255,255,255,0.25), rgba(255,255,255,0.25)), url(/images/dango-bg.jpg)",backgroundPosition:"center",backgroundSize:"fill"},index:1,hasCurvedDivider:!1,children:(0,t.jsx)(g,{})})]})}),O=!0,Z=function(n){var e=n.totalTx30Days,i=n.addressCount30Days,o=n.tvl;return(0,t.jsx)(r.J$,{value:{fallback:{totalTx30Days:e,addressCount30Days:i,tvl:o}},children:(0,t.jsx)(F,{})})}}},function(n){n.O(0,[9774,2888,179],(function(){return e=45301,n(n.s=e);var e}));var e=n.O();_N_E=e}]);