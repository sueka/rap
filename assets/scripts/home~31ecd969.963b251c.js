(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{267:function(e,t,n){"use strict";n(328);var a,o,r=n(0),c=n(8),l=n(115),i=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n};!function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"}(a||(a={})),function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"}(o||(o={}));function s(e){const t=t=>r.createElement(l.a.Consumer,null,n=>{Object(c.h)(n);const{value:a,children:o}=t,r=i(t,["value","children"]),l="string"==typeof a?new Date(a||0):a;return o("formatDate"===e?n.formatDateToParts(l,r):n.formatTimeToParts(l,r))});return t.displayName=o[e],t}function u(e){const t=t=>r.createElement(l.a.Consumer,null,n=>{Object(c.h)(n);const{value:a,children:o}=t,l=i(t,["value","children"]),s=n[e](a,l);if("function"==typeof o)return o(s);const u=n.textComponent||r.Fragment;return r.createElement(u,null,s)});return t.displayName=a[e],t}n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return m})),n.d(t,"b",(function(){return p}));const d=u("formatDate"),m=u("formatTime"),p=u("formatNumber");u("formatList"),u("formatDisplayName"),s("formatDate"),s("formatTime")},292:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o}));var a=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.some((function(t){return t===e}))}},o=function(e){return function(t){return void 0===t||e(t)}}},293:function(e,t,n){var a=n(297),o=n(294);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={insert:"head",singleton:!1},c=(a(o,r),o.locals?o.locals:{});e.exports=c},294:function(e,t,n){(t=n(298)(!1)).push([e.i,".src-components-Nav-classes__Spacer--36ovl {\n  flex-grow: 1;\n}\n\n.src-components-Nav-classes__LocaleSelectLabel--3h3DV.src-components-Nav-classes__LocaleSelectLabel--3h3DV {\n  color: currentColor\n}\n\n.src-components-Nav-classes__LocaleSelectLabel--3h3DV.src-components-Nav-classes__LocaleSelectLabel--3h3DV.Mui-focused {\n    opacity: 0.618;\n    color: currentColor;\n  }\n\n.src-components-Nav-classes__LocaleSelectInput--3oNu1.src-components-Nav-classes__LocaleSelectInput--3oNu1 {\n  color: currentColor;\n}\n\n.src-components-Nav-classes__LocaleSelectSelectIcon--2AyFk.src-components-Nav-classes__LocaleSelectSelectIcon--2AyFk {\n  color: currentColor;\n}\n\n.src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx.src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx::before,\n  .src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx.src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx:hover:not(.Mui-disabled)::before,\n  .src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx.src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx::after {\n    border-bottom-color: currentColor;\n  }\n",""]),t.locals={Spacer:"src-components-Nav-classes__Spacer--36ovl",LocaleSelectLabel:"src-components-Nav-classes__LocaleSelectLabel--3h3DV",LocaleSelectInput:"src-components-Nav-classes__LocaleSelectInput--3oNu1",LocaleSelectSelectIcon:"src-components-Nav-classes__LocaleSelectSelectIcon--2AyFk",LocaleSelectInputUnderline:"src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx"},e.exports=t},295:function(e){e.exports=JSON.parse('{"ja":"日本語","en":"English"}')},296:function(e,t,n){"use strict";var a=n(10),o=n.n(a),r=n(0),c=n.n(r),l=n(23),i=n.n(l),s=n(329),u=n(373),d=n(375),m=n(358),p=n(374),b=n(307),f=n.n(b),v=n(48),h=n.n(v),g=n(92),y=n.n(g),S=n(58),x=n(114),E=n(378),O=n(376),C=n(377),j=n(399),N=n(398),k=n(391),L=n(57),w=n(295);var _=n(116),I=n(328),F=Object(I.defineMessages)({languages:{id:"src.components.LocaleSelect.languages",defaultMessage:"Languages"}}),z={selectLocale:_.c},M=Object(S.c)((function(e){var t=e.localeSelector;return{availableLocales:t.availableLocales,locale:t.locale}}),z)((function(e){var t,n,a=e.classes,o=e.FormControlProps,l=e.availableLocales,u=e.locale,d=e.selectLocale,m=Object(r.useState)(0),p=i()(m,2),b=p[0],f=p[1],v=Object(r.useMemo)(x.a,[]),g=Object(L.a)(),S=Object(r.useMemo)((function(){var e,t,n,a;return null!==(e=null!==(t=null==o?void 0:o.variant)&&void 0!==t?t:null==g?void 0:null===(n=g.props)||void 0===n?void 0:null===(a=n.MuiFormControl)||void 0===a?void 0:a.variant)&&void 0!==e?e:"standard"}),[null==o?void 0:o.variant,null==g?void 0:null===(t=g.props)||void 0===t?void 0:null===(n=t.MuiFormControl)||void 0===n?void 0:n.variant]),_=Object(r.useMemo)((function(){return y()(null==a?void 0:a.root,null==o?void 0:o.className)}),[null==a?void 0:a.root,null==o?void 0:o.className]),I=Object(r.useMemo)((function(){return y()(null==a?void 0:a.label)}),[null==a?void 0:a.label]),z=Object(r.useMemo)((function(){return y()(null==a?void 0:a.input)}),[null==a?void 0:a.input]),M=Object(r.useMemo)((function(){return y()(null==a?void 0:a.selectIcon)}),[null==a?void 0:a.selectIcon]),T=Object(r.useMemo)((function(){return y()(null==a?void 0:a.inputUnderline)}),[null==a?void 0:a.inputUnderline]),R=Object(r.useCallback)((function(e){null!==e&&f(e.offsetWidth)}),[]),D=Object(r.useCallback)((function(e){var t;"string"==typeof(t=e.target.value)&&t in w&&d(e.target.value)}),[]);return c.a.createElement(O.a,h()({},o,{className:_}),c.a.createElement(j.a,{className:I,ref:R,htmlFor:v},c.a.createElement(s.a,F.languages)),c.a.createElement(k.a,{classes:{icon:M},native:!0,labelWidth:b,value:u,onChange:D,id:v,inputProps:{"data-testid":"localeSelect"},input:{standard:c.a.createElement(C.a,{className:z,classes:{underline:T}}),outlined:c.a.createElement(N.a,{className:z,labelWidth:b}),filled:c.a.createElement(E.a,{className:z})}[S]},l.map((function(e,t){return c.a.createElement("option",{key:t,value:e},w[e])}))))})),T=n(49),R=n.n(T),D=n(381),P=n(12),W=n.n(P),U=n(16),V=n.n(U),$=n(18),A=n.n($),B=n(17),H=n.n(B),J=n(19),q=n.n(J),G=n(310),K=n(380),Q=n(292),X=n(11);function Y(){var e=o()([""," is not a Material-UI Typography color."]);return Y=function(){return e},e}var Z=Object(Q.b)(Object(Q.a)("initial","inherit","primary","secondary","textPrimary","textSecondary","error")),ee=c.a.forwardRef((function(e,t){return c.a.createElement(G.a,h()({innerRef:t},e))})),te=function(e){function t(){return W()(this,t),A()(this,H()(t).apply(this,arguments))}return q()(t,e),V()(t,[{key:"render",value:function(){var e=this.props,t=e.color,n=R()(e,["color"]);return Z(t)?c.a.createElement(K.a,h()({component:ee,color:t},n)):(console.warn(Object(X.a)(Y(),t)),c.a.createElement(K.a,h()({component:ee},n)))}}]),t}(c.a.Component),ne=r.forwardRef((function(e,t){var n=e.to,a=(e.button,e.innerRef),o=R()(e,["to","button","innerRef"]),c=r.forwardRef((function(e,t){return r.createElement(te,h()({ref:t,innerRef:a,color:"inherit",underline:"none"},e))}));return r.createElement(D.a,h()({button:!0,component:c,to:n,ref:t},o))})),ae=n(293),oe=n.n(ae),re=Object(I.defineMessages)({home:{id:"src.components.Nav.home",defaultMessage:"home"},chess:{id:"src.components.Nav.chess",defaultMessage:"chess"},counter:{id:"src.components.Nav.counter",defaultMessage:"counter"},info:{id:"src.components.Nav.info",defaultMessage:"info"},reminder:{id:"src.components.Nav.reminder",defaultMessage:"reminder"}}),ce=function(){var e=Object(r.useState)(null),t=i()(e,2),n=t[0],a=t[1],o=Object(r.useCallback)((function(e){a(e.currentTarget)}),[]),l=Object(r.useCallback)((function(){a(null)}),[]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(u.a,{position:"sticky"},c.a.createElement(p.a,null,c.a.createElement(d.a,{edge:"start",color:"inherit",onClick:o},c.a.createElement(f.a,null)),c.a.createElement("div",{className:oe.a.Spacer}),c.a.createElement(M,{classes:{label:oe.a.LocaleSelectLabel,input:oe.a.LocaleSelectInput,selectIcon:oe.a.LocaleSelectSelectIcon,inputUnderline:oe.a.LocaleSelectInputUnderline},FormControlProps:{variant:"filled"}}))),c.a.createElement(m.a,{open:null!==n,anchorEl:n,onClose:l},c.a.createElement(ne,{to:"/",onClick:l},c.a.createElement(s.a,re.home)),c.a.createElement(ne,{to:"/chess",onClick:l},c.a.createElement(s.a,re.chess)),c.a.createElement(ne,{to:"/counter",onClick:l},c.a.createElement(s.a,re.counter)),c.a.createElement(ne,{to:"/info",onClick:l},c.a.createElement(s.a,re.info)),c.a.createElement(ne,{to:"/reminder",onClick:l},c.a.createElement(s.a,re.reminder))))},le=function(e){function t(){var e,n;W()(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=A()(this,(e=H()(t)).call.apply(e,[this].concat(o)))).state={hasError:!1},n}return q()(t,e),V()(t,[{key:"render",value:function(){var e=this.props,t=e.renderError,n=e.children,a=this.state,o=a.hasError,r=a.error;return o?t(r,n):n}}]),t}(c.a.Component);le.getDerivedStateFromError=function(e){return{hasError:!0,error:e}};var ie=le;function se(){var e=o()([""," is not an error."]);return se=function(){return e},e}function ue(){var e=o()(["",""]);return ue=function(){return e},e}n.d(t,"a",(function(){return me}));var de=function(e){var t=e.children,n=Object(r.useCallback)((function(e){if(e instanceof Error)return Object(X.a)(ue(),String(e));throw new TypeError(Object(X.a)(se(),String(e)))}),[]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(ce,null),c.a.createElement(ie,{renderError:n},t))},me=function(e){return function(t){return c.a.createElement(de,null,c.a.createElement(e,t))}}},318:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),o=n(115),r=n(8);function c(){const e=Object(a.useContext)(o.a);return Object(r.h)(e),e}},322:function(e,t,n){"use strict";var a=n(13),o=n(1),r=n(0),c=n.n(r),l=(n(6),n(30)),i=n(29),s=n(55),u=n(389),d=n(53),m=c.a.forwardRef((function(e,t){var n=e.children,r=e.classes,i=e.className,s=e.color,m=void 0===s?"default":s,p=e.component,b=void 0===p?"button":p,f=e.disabled,v=void 0!==f&&f,h=e.disableElevation,g=void 0!==h&&h,y=e.disableFocusRipple,S=void 0!==y&&y,x=e.endIcon,E=e.focusVisibleClassName,O=e.fullWidth,C=void 0!==O&&O,j=e.size,N=void 0===j?"medium":j,k=e.startIcon,L=e.type,w=void 0===L?"button":L,_=e.variant,I=void 0===_?"text":_,F=Object(a.a)(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"]),z=k&&c.a.createElement("span",{className:Object(l.a)(r.startIcon,r["iconSize".concat(Object(d.a)(N))])},k),M=x&&c.a.createElement("span",{className:Object(l.a)(r.endIcon,r["iconSize".concat(Object(d.a)(N))])},x);return c.a.createElement(u.a,Object(o.a)({className:Object(l.a)(r.root,r[I],i,"inherit"===m?r.colorInherit:"default"!==m&&r["".concat(I).concat(Object(d.a)(m))],"medium"!==N&&[r["".concat(I,"Size").concat(Object(d.a)(N))],r["size".concat(Object(d.a)(N))]],g&&r.disableElevation,v&&r.disabled,C&&r.fullWidth),component:b,disabled:v,focusRipple:!S,focusVisibleClassName:Object(l.a)(r.focusVisible,E),ref:t,type:w},F),c.a.createElement("span",{className:r.label},z,n,M))}));t.a=Object(i.a)((function(e){return{root:Object(o.a)({},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:Object(s.d)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(s.d)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(s.d)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 15px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(Object(s.d)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:Object(s.d)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(Object(s.d)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:Object(s.d)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&:hover":{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},disableElevation:{boxShadow:"none","&:hover":{boxShadow:"none"},"&$focusVisible":{boxShadow:"none"},"&:active":{boxShadow:"none"},"&$disabled":{boxShadow:"none"}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},textSizeSmall:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},textSizeLarge:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},outlinedSizeSmall:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},outlinedSizeLarge:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},containedSizeSmall:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},containedSizeLarge:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},sizeSmall:{},sizeLarge:{},fullWidth:{width:"100%"},startIcon:{display:"inherit",marginRight:8,marginLeft:-4,"&$iconSizeSmall":{marginLeft:-2}},endIcon:{display:"inherit",marginRight:-4,marginLeft:8,"&$iconSizeSmall":{marginRight:-2}},iconSizeSmall:{"& > *:first-child":{fontSize:18}},iconSizeMedium:{"& > *:first-child":{fontSize:20}},iconSizeLarge:{"& > *:first-child":{fontSize:22}}}}),{name:"MuiButton"})(m)},388:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(117),c=n.n(r),l=n(318),i=n(329),s=n(267),u=n(372),d=n(58),m=n(48),p=n.n(m),b=function(e){return o.a.createElement(s.c,p()({},e,{weekday:void 0,era:void 0,year:void 0,month:void 0,day:void 0}))},f=Object(d.c)((function(e){return{now:e.io.now}}))((function(e){var t=e.now;return o.a.createElement(u.a,null,o.a.createElement(b,{value:t,format:"medium"}))})),v=n(322),h=n(121),g=n(328),y=Object(g.defineMessages)({setTheClock:{id:"src.components.SetClockButton.setTheClock",defaultMessage:"Set the clock"}}),S={updateNow:h.c},x=Object(d.c)(null,S)((function(e){var t=e.updateNow;return o.a.createElement(v.a,{onClick:t},o.a.createElement(i.a,y.setTheClock))})),E=Object(d.c)((function(e){return{now:e.io.now}}))((function(e){var t=e.now;return o.a.createElement(u.a,null,o.a.createElement(s.a,{value:t,format:"medium"}))})),O=n(296),C=Object(g.defineMessages)({home:{id:"src.components.App.HomePage.home",defaultMessage:"home"},helloWorld:{id:"src.components.App.HomePage.helloWorld",defaultMessage:"Hello, world!"}});t.default=Object(O.a)((function(){var e=Object(l.a)().formatMessage;return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{title:e(C.home)}),o.a.createElement(u.a,null,o.a.createElement(i.a,C.helloWorld)),o.a.createElement(u.a,null,o.a.createElement(s.b,{format:"usd",value:100})),o.a.createElement(E,null),o.a.createElement(f,null),o.a.createElement(x,null))}))}}]);
//# sourceMappingURL=home~31ecd969.963b251c.js.map