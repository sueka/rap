(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{290:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o}));var a=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.some((function(t){return t===e}))}},o=function(e){return function(t){return void 0===t||e(t)}}},291:function(e,t,n){var a=n(295),o=n(292);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={insert:"head",singleton:!1},c=(a(o,r),o.locals?o.locals:{});e.exports=c},292:function(e,t,n){(t=n(296)(!1)).push([e.i,".src-components-Nav-classes__Spacer--36ovl {\n  flex-grow: 1;\n}\n\n.src-components-Nav-classes__LocaleSelectLabel--3h3DV.src-components-Nav-classes__LocaleSelectLabel--3h3DV {\n  color: currentColor\n}\n\n.src-components-Nav-classes__LocaleSelectLabel--3h3DV.src-components-Nav-classes__LocaleSelectLabel--3h3DV.Mui-focused {\n    opacity: 0.618;\n    color: currentColor;\n  }\n\n.src-components-Nav-classes__LocaleSelectInput--3oNu1.src-components-Nav-classes__LocaleSelectInput--3oNu1 {\n  color: currentColor;\n}\n\n.src-components-Nav-classes__LocaleSelectSelectIcon--2AyFk.src-components-Nav-classes__LocaleSelectSelectIcon--2AyFk {\n  color: currentColor;\n}\n\n.src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx.src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx::before,\n  .src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx.src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx:hover:not(.Mui-disabled)::before,\n  .src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx.src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx::after {\n    border-bottom-color: currentColor;\n  }\n",""]),t.locals={Spacer:"src-components-Nav-classes__Spacer--36ovl",LocaleSelectLabel:"src-components-Nav-classes__LocaleSelectLabel--3h3DV",LocaleSelectInput:"src-components-Nav-classes__LocaleSelectInput--3oNu1",LocaleSelectSelectIcon:"src-components-Nav-classes__LocaleSelectSelectIcon--2AyFk",LocaleSelectInputUnderline:"src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx"},e.exports=t},293:function(e){e.exports=JSON.parse('{"ja":"日本語","en":"English"}')},294:function(e,t,n){"use strict";var a=n(10),o=n.n(a),r=n(0),c=n.n(r),l=n(30),i=n.n(l),s=n(326),d=n(370),u=n(372),p=n(355),m=n(371),b=n(304),f=n.n(b),h=n(48),v=n.n(h),g=n(91),y=n.n(g),S=n(58),x=n(112),O=n(375),C=n(373),E=n(374),j=n(396),k=n(395),L=n(387),N=n(57),R=n(293);var I=n(114),w=n(325),_=Object(w.defineMessages)({languages:{id:"src.components.LocaleSelect.languages",defaultMessage:"Languages"}}),z={selectLocale:I.c},M=Object(S.c)((function(e){var t=e.localeSelector;return{availableLocales:t.availableLocales,locale:t.locale}}),z)((function(e){var t,n,a=e.classes,o=e.FormControlProps,l=e.availableLocales,d=e.locale,u=e.selectLocale,p=Object(r.useState)(0),m=i()(p,2),b=m[0],f=m[1],h=Object(r.useMemo)(x.a,[]),g=Object(N.a)(),S=Object(r.useMemo)((function(){var e,t,n,a;return null!==(e=null!==(t=null==o?void 0:o.variant)&&void 0!==t?t:null==g?void 0:null===(n=g.props)||void 0===n?void 0:null===(a=n.MuiFormControl)||void 0===a?void 0:a.variant)&&void 0!==e?e:"standard"}),[null==o?void 0:o.variant,null==g?void 0:null===(t=g.props)||void 0===t?void 0:null===(n=t.MuiFormControl)||void 0===n?void 0:n.variant]),I=Object(r.useMemo)((function(){return y()(null==a?void 0:a.root,null==o?void 0:o.className)}),[null==a?void 0:a.root,null==o?void 0:o.className]),w=Object(r.useMemo)((function(){return y()(null==a?void 0:a.label)}),[null==a?void 0:a.label]),z=Object(r.useMemo)((function(){return y()(null==a?void 0:a.input)}),[null==a?void 0:a.input]),M=Object(r.useMemo)((function(){return y()(null==a?void 0:a.selectIcon)}),[null==a?void 0:a.selectIcon]),F=Object(r.useMemo)((function(){return y()(null==a?void 0:a.inputUnderline)}),[null==a?void 0:a.inputUnderline]),T=Object(r.useCallback)((function(e){null!==e&&f(e.offsetWidth)}),[]),W=Object(r.useCallback)((function(e){var t;"string"==typeof(t=e.target.value)&&t in R&&u(e.target.value)}),[]);return c.a.createElement(C.a,v()({},o,{className:I}),c.a.createElement(j.a,{className:w,ref:T,htmlFor:h},c.a.createElement(s.a,_.languages)),c.a.createElement(L.a,{classes:{icon:M},native:!0,labelWidth:b,value:d,onChange:W,id:h,inputProps:{"data-testid":"localeSelect"},input:{standard:c.a.createElement(E.a,{className:z,classes:{underline:F}}),outlined:c.a.createElement(k.a,{className:z,labelWidth:b}),filled:c.a.createElement(O.a,{className:z})}[S]},l.map((function(e,t){return c.a.createElement("option",{key:t,value:e},R[e])}))))})),F=n(49),T=n.n(F),W=n(378),V=n(12),B=n.n(V),U=n(16),$=n.n(U),P=n(18),A=n.n(P),D=n(17),H=n.n(D),J=n(19),G=n.n(J),q=n(307),K=n(377),Q=n(290),X=n(11);function Y(){var e=o()([""," is not a Material-UI Typography color."]);return Y=function(){return e},e}var Z=Object(Q.b)(Object(Q.a)("initial","inherit","primary","secondary","textPrimary","textSecondary","error")),ee=c.a.forwardRef((function(e,t){return c.a.createElement(q.a,v()({innerRef:t},e))})),te=function(e){function t(){return B()(this,t),A()(this,H()(t).apply(this,arguments))}return G()(t,e),$()(t,[{key:"render",value:function(){var e=this.props,t=e.color,n=T()(e,["color"]);return Z(t)?c.a.createElement(K.a,v()({component:ee,color:t},n)):(console.warn(Object(X.a)(Y(),t)),c.a.createElement(K.a,v()({component:ee},n)))}}]),t}(c.a.Component),ne=r.forwardRef((function(e,t){var n=e.to,a=(e.button,e.innerRef),o=T()(e,["to","button","innerRef"]),c=r.forwardRef((function(e,t){return r.createElement(te,v()({ref:t,innerRef:a,color:"inherit",underline:"none"},e))}));return r.createElement(W.a,v()({button:!0,component:c,to:n,ref:t},o))})),ae=n(291),oe=n.n(ae),re=Object(w.defineMessages)({home:{id:"src.components.Nav.home",defaultMessage:"home"},chess:{id:"src.components.Nav.chess",defaultMessage:"chess"},counter:{id:"src.components.Nav.counter",defaultMessage:"counter"},info:{id:"src.components.Nav.info",defaultMessage:"info"},reminder:{id:"src.components.Nav.reminder",defaultMessage:"reminder"}}),ce=function(){var e=Object(r.useState)(null),t=i()(e,2),n=t[0],a=t[1],o=Object(r.useCallback)((function(e){a(e.currentTarget)}),[]),l=Object(r.useCallback)((function(){a(null)}),[]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(d.a,{position:"sticky"},c.a.createElement(m.a,null,c.a.createElement(u.a,{edge:"start",color:"inherit",onClick:o},c.a.createElement(f.a,null)),c.a.createElement("div",{className:oe.a.Spacer}),c.a.createElement(M,{classes:{label:oe.a.LocaleSelectLabel,input:oe.a.LocaleSelectInput,selectIcon:oe.a.LocaleSelectSelectIcon,inputUnderline:oe.a.LocaleSelectInputUnderline},FormControlProps:{variant:"standard"}}))),c.a.createElement(p.a,{open:null!==n,anchorEl:n,onClose:l},c.a.createElement(ne,{to:"/",onClick:l},c.a.createElement(s.a,re.home)),c.a.createElement(ne,{to:"/chess",onClick:l},c.a.createElement(s.a,re.chess)),c.a.createElement(ne,{to:"/counter",onClick:l},c.a.createElement(s.a,re.counter)),c.a.createElement(ne,{to:"/info",onClick:l},c.a.createElement(s.a,re.info)),c.a.createElement(ne,{to:"/reminder",onClick:l},c.a.createElement(s.a,re.reminder))))},le=function(e){function t(){var e,n;B()(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=A()(this,(e=H()(t)).call.apply(e,[this].concat(o)))).state={hasError:!1},n}return G()(t,e),$()(t,[{key:"render",value:function(){var e=this.props,t=e.renderError,n=e.children,a=this.state,o=a.hasError,r=a.error;return o?t(r,n):n}}]),t}(c.a.Component);le.getDerivedStateFromError=function(e){return{hasError:!0,error:e}};var ie=le;function se(){var e=o()([""," is not an error."]);return se=function(){return e},e}function de(){var e=o()(["",""]);return de=function(){return e},e}n.d(t,"a",(function(){return pe}));var ue=function(e){var t=e.children,n=Object(r.useCallback)((function(e){if(e instanceof Error)return Object(X.a)(de(),String(e));throw new TypeError(Object(X.a)(se(),String(e)))}),[]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(ce,null),c.a.createElement(ie,{renderError:n},t))},pe=function(e){return function(t){return c.a.createElement(ue,null,c.a.createElement(e,t))}}},316:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),o=n(113),r=n(8);function c(){const e=Object(a.useContext)(o.a);return Object(r.h)(e),e}},319:function(e,t,n){"use strict";var a=n(13),o=n(1),r=n(0),c=n.n(r),l=(n(6),n(29)),i=n(28),s=n(55),d=n(385),u=n(53),p=c.a.forwardRef((function(e,t){var n=e.children,r=e.classes,i=e.className,s=e.color,p=void 0===s?"default":s,m=e.component,b=void 0===m?"button":m,f=e.disabled,h=void 0!==f&&f,v=e.disableElevation,g=void 0!==v&&v,y=e.disableFocusRipple,S=void 0!==y&&y,x=e.endIcon,O=e.focusVisibleClassName,C=e.fullWidth,E=void 0!==C&&C,j=e.size,k=void 0===j?"medium":j,L=e.startIcon,N=e.type,R=void 0===N?"button":N,I=e.variant,w=void 0===I?"text":I,_=Object(a.a)(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"]),z=L&&c.a.createElement("span",{className:Object(l.a)(r.startIcon,r["iconSize".concat(Object(u.a)(k))])},L),M=x&&c.a.createElement("span",{className:Object(l.a)(r.endIcon,r["iconSize".concat(Object(u.a)(k))])},x);return c.a.createElement(d.a,Object(o.a)({className:Object(l.a)(r.root,r[w],i,"inherit"===p?r.colorInherit:"default"!==p&&r["".concat(w).concat(Object(u.a)(p))],"medium"!==k&&[r["".concat(w,"Size").concat(Object(u.a)(k))],r["size".concat(Object(u.a)(k))]],g&&r.disableElevation,h&&r.disabled,E&&r.fullWidth),component:b,disabled:h,focusRipple:!S,focusVisibleClassName:Object(l.a)(r.focusVisible,O),ref:t,type:R},_),c.a.createElement("span",{className:r.label},z,n,M))}));t.a=Object(i.a)((function(e){return{root:Object(o.a)({},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:Object(s.d)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(s.d)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(s.d)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 15px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(Object(s.d)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:Object(s.d)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(Object(s.d)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:Object(s.d)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&:hover":{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},disableElevation:{boxShadow:"none","&:hover":{boxShadow:"none"},"&$focusVisible":{boxShadow:"none"},"&:active":{boxShadow:"none"},"&$disabled":{boxShadow:"none"}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},textSizeSmall:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},textSizeLarge:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},outlinedSizeSmall:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},outlinedSizeLarge:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},containedSizeSmall:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},containedSizeLarge:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},sizeSmall:{},sizeLarge:{},fullWidth:{width:"100%"},startIcon:{display:"inherit",marginRight:8,marginLeft:-4,"&$iconSizeSmall":{marginLeft:-2}},endIcon:{display:"inherit",marginRight:-4,marginLeft:8,"&$iconSizeSmall":{marginRight:-2}},iconSizeSmall:{"& > *:first-child":{fontSize:18}},iconSizeMedium:{"& > *:first-child":{fontSize:20}},iconSizeLarge:{"& > *:first-child":{fontSize:22}}}}),{name:"MuiButton"})(p)},388:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(115),c=n.n(r),l=n(316),i=n(326),s=n(58),d=n(319),u=n(1),p=n(13),m=(n(60),n(6),n(29)),b=n(53),f=n(55),h=n(28);d.a.styles;var v=o.a.forwardRef((function(e,t){var n=e.children,a=e.classes,r=e.className,c=e.color,l=void 0===c?"default":c,i=e.component,s=void 0===i?"div":i,d=e.disabled,f=void 0!==d&&d,h=e.disableFocusRipple,v=void 0!==h&&h,g=e.disableRipple,y=void 0!==g&&g,S=e.fullWidth,x=void 0!==S&&S,O=e.orientation,C=void 0===O?"horizontal":O,E=e.size,j=void 0===E?"medium":E,k=e.variant,L=void 0===k?"outlined":k,N=Object(p.a)(e,["children","classes","className","color","component","disabled","disableFocusRipple","disableRipple","fullWidth","orientation","size","variant"]),R=Object(m.a)(a.grouped,a["grouped".concat(Object(b.a)(C))],a["grouped".concat(Object(b.a)(L))],a["grouped".concat(Object(b.a)(L)).concat(Object(b.a)(C))],a["grouped".concat(Object(b.a)(L)).concat("default"!==l?Object(b.a)(l):"")],f&&a.disabled);return o.a.createElement(s,Object(u.a)({role:"group",className:Object(m.a)(a.root,r,x&&a.fullWidth,"contained"===L&&a.contained,"vertical"===C&&a.vertical),ref:t},N),o.a.Children.map(n,(function(e){return o.a.isValidElement(e)?o.a.cloneElement(e,{className:Object(m.a)(R,e.props.className),disabled:e.props.disabled||f,color:e.props.color||l,disableFocusRipple:v,disableRipple:y,fullWidth:x,size:e.props.size||j,variant:e.props.variant||L}):null})))})),g=Object(h.a)((function(e){return{root:{display:"inline-flex",borderRadius:e.shape.borderRadius},contained:{boxShadow:e.shadows[2]},disabled:{},fullWidth:{width:"100%"},vertical:{flexDirection:"column"},grouped:{minWidth:40},groupedHorizontal:{"&:not(:first-child)":{borderTopLeftRadius:0,borderBottomLeftRadius:0},"&:not(:last-child)":{borderTopRightRadius:0,borderBottomRightRadius:0}},groupedVertical:{"&:not(:first-child)":{borderTopRightRadius:0,borderTopLeftRadius:0},"&:not(:last-child)":{borderBottomRightRadius:0,borderBottomLeftRadius:0}},groupedText:{},groupedTextHorizontal:{"&:not(:last-child)":{borderRight:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")}},groupedTextVertical:{"&:not(:last-child)":{borderBottom:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")}},groupedTextPrimary:{"&:not(:last-child)":{borderColor:Object(f.d)(e.palette.primary.main,.5)}},groupedTextSecondary:{"&:not(:last-child)":{borderColor:Object(f.d)(e.palette.secondary.main,.5)}},groupedOutlined:{},groupedOutlinedHorizontal:{"&:not(:first-child)":{marginLeft:-1},"&:not(:last-child)":{borderRightColor:"transparent"}},groupedOutlinedVertical:{"&:not(:first-child)":{marginTop:-1},"&:not(:last-child)":{borderBottomColor:"transparent"}},groupedOutlinedPrimary:{"&:hover":{borderColor:e.palette.primary.main}},groupedOutlinedSecondary:{"&:hover":{borderColor:e.palette.secondary.main}},groupedContained:{boxShadow:"none"},groupedContainedHorizontal:{"&:not(:last-child)":{borderRight:"1px solid ".concat(e.palette.grey[400]),"&$disabled":{borderRight:"1px solid ".concat(e.palette.action.disabled)}}},groupedContainedVertical:{"&:not(:last-child)":{borderBottom:"1px solid ".concat(e.palette.grey[400]),"&$disabled":{borderBottom:"1px solid ".concat(e.palette.action.disabled)}}},groupedContainedPrimary:{"&:not(:last-child)":{borderColor:e.palette.primary.dark}},groupedContainedSecondary:{"&:not(:last-child)":{borderColor:e.palette.secondary.dark}}}}),{name:"MuiButtonGroup"})(v),y=n(369),S=n(120),x=n(325),O=Object(x.defineMessages)({reset:{id:"src.components.Counter.reset",defaultMessage:"reset"},increment:{id:"src.components.Counter.increment",defaultMessage:"+"},decrement:{id:"src.components.Counter.decrement",defaultMessage:"-"},incrementIfOdd:{id:"src.components.Counter.incrementIfOdd",defaultMessage:"+ if odd"},willIncrementInOneSecond:{id:"src.components.Counter.willIncrementInOneSecond",defaultMessage:"+ in 1 second"}}),C={reset:S.g,increment:S.d,decrement:S.c,incrementIfOdd:S.f,incrementAsync:S.e},E=Object(s.c)((function(e){return{value:e.counter.count}}),C)((function(e){var t=e.value,n=e.reset,r=e.increment,c=e.decrement,l=e.incrementIfOdd,s=e.incrementAsync,u=Object(a.useCallback)((function(){s(1e3)}),[]);return o.a.createElement("div",null,o.a.createElement(y.a,{component:"span"},t),o.a.createElement(g,null,o.a.createElement(d.a,{onClick:n},o.a.createElement(i.a,O.reset)),o.a.createElement(d.a,{onClick:r},o.a.createElement(i.a,O.increment)),o.a.createElement(d.a,{onClick:c},o.a.createElement(i.a,O.decrement)),o.a.createElement(d.a,{onClick:l,"data-testid":"incrementIfOddButton"},o.a.createElement(i.a,O.incrementIfOdd)),o.a.createElement(d.a,{onClick:u,"data-testid":"incrementAsyncButton"},o.a.createElement(i.a,O.willIncrementInOneSecond))))})),j=n(294),k=Object(x.defineMessages)({counter:{id:"src.components.App.CounterPage.counter",defaultMessage:"counter"}});t.default=Object(j.a)((function(){var e=Object(l.a)().formatMessage;return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{title:e(k.counter)}),o.a.createElement(E,null))}))}}]);
//# sourceMappingURL=counter~31ecd969.86d51884.js.map