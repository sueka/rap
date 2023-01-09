"use strict";(self.webpackChunkrap=self.webpackChunkrap||[]).push([[5177],{33901:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(87462),o=n(45987),r=n(67294),l=(n(45697),n(86010)),i=n(14670),s=(0,n(63786).Z)(r.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var c=r.forwardRef((function(e,t){var n=e.alt,i=e.children,c=e.classes,u=e.className,d=e.component,m=void 0===d?"div":d,f=e.imgProps,v=e.sizes,p=e.src,Z=e.srcSet,g=e.variant,h=void 0===g?"circular":g,E=(0,o.Z)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),y=null,k=function(e){var t=e.src,n=e.srcSet,a=r.useState(!1),o=a[0],l=a[1];return r.useEffect((function(){if(t||n){l(!1);var e=!0,a=new Image;return a.src=t,a.srcSet=n,a.onload=function(){e&&l("loaded")},a.onerror=function(){e&&l("error")},function(){e=!1}}}),[t,n]),o}({src:p,srcSet:Z}),C=p||Z,b=C&&"error"!==k;return y=b?r.createElement("img",(0,a.Z)({alt:n,src:p,srcSet:Z,sizes:v,className:c.img},f)):null!=i?i:C&&n?n[0]:r.createElement(s,{className:c.fallback}),r.createElement(m,(0,a.Z)({className:(0,l.Z)(c.root,c.system,c[h],u,!b&&c.colorDefault),ref:t},E),y)})),u=(0,i.Z)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},circular:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})(c)},66283:function(e,t,n){var a=n(87462),o=n(45987),r=n(67294),l=(n(45697),n(86010)),i=n(22318),s=n(14670),c=n(15736),u=r.forwardRef((function(e,t){var n=e.children,s=e.classes,u=e.className,d=e.component,m=void 0===d?"div":d,f=e.disablePointerEvents,v=void 0!==f&&f,p=e.disableTypography,Z=void 0!==p&&p,g=e.position,h=e.variant,E=(0,o.Z)(e,["children","classes","className","component","disablePointerEvents","disableTypography","position","variant"]),y=(0,c.Y)()||{},k=h;return h&&y.variant,y&&!k&&(k=y.variant),r.createElement(c.Z.Provider,{value:null},r.createElement(m,(0,a.Z)({className:(0,l.Z)(s.root,u,"end"===g?s.positionEnd:s.positionStart,v&&s.disablePointerEvents,y.hiddenLabel&&s.hiddenLabel,"filled"===k&&s.filled,"dense"===y.margin&&s.marginDense),ref:t},E),"string"!=typeof n||Z?n:r.createElement(i.Z,{color:"textSecondary"},n)))}));t.Z=(0,s.Z)({root:{display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap"},filled:{"&$positionStart:not($hiddenLabel)":{marginTop:16}},positionStart:{marginRight:8},positionEnd:{marginLeft:8},disablePointerEvents:{pointerEvents:"none"},hiddenLabel:{},marginDense:{}},{name:"MuiInputAdornment"})(u)},81019:function(e,t,n){var a=n(95318),o=n(20862);t.Z=void 0;var r=o(n(67294)),l=(0,a(n(2108)).default)(r.createElement("path",{d:"M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"}),"Security");t.Z=l},43910:function(e,t,n){var a=n(95318),o=n(20862);t.Z=void 0;var r=o(n(67294)),l=(0,a(n(2108)).default)(r.createElement("path",{d:"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"}),"Send");t.Z=l},57753:function(e,t,n){n.r(t),n.d(t,{default:function(){return J}});var a=n(66283),o=n(8286),r=n(22318),l=n(15659),i=n(67294),s=n(64593),c=n(85315),u=n(31753),d=n(46458),m=n(67154),f=n.n(m);var v=e=>i.createElement(c.qN,f()({},e,{weekday:void 0,era:void 0,year:void 0,month:void 0,day:void 0}));var p=(0,d.$j)((e=>{let{io:{now:t}}=e;return{now:t}}))((e=>{let{now:t}=e;return i.createElement(v,{value:t,format:"medium"})})),Z=n(17812),g=n(3380),h=n(43910),E=n(97127),y=n(2804),k=n(46121),C=n(32975);var b=e=>e;var w=(0,c.vU)({sendPushNotification:{id:"src.components.NotifyMeButton.sendPushNotification",defaultMessage:"Send push notification"}});var x=e=>{var t;let{inputFor:n}=e;const[a,o]=(0,y.FV)(C.Z),r=null===(t=n.current)||void 0===t?void 0:t.value,l=(0,i.useMemo)((()=>void 0===r||/^\p{White_Space}*$/u.test(r)),[r]),s=(0,i.useCallback)((async()=>{if(null===n.current)return;(0,k.s)(r);"granted"===await Notification.requestPermission()&&o((e=>[...e,new Notification(r)]))}),[n,r,o]),c=(0,i.useCallback)((e=>{const t=e.target;t instanceof Notification&&o((e=>e.filter((e=>e!==t))))}),[o]);return function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:b,n=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0;(0,i.useEffect)((()=>{const a=[],o=[];for(const r of e){const e=t(r);o.includes(e)||(a.push({x:r,cleanup:n(r)}),o.push(e))}return()=>{for(const{x:e,cleanup:t}of a)void 0!==t&&t(e)}}),null!=a?a:[])}(a,void 0,(e=>{e.addEventListener("close",c)}),[a,c]),"Notification"in globalThis?i.createElement(g.ZP,{title:i.createElement(E.Z,w.sendPushNotification),disableFocusListener:l,disableHoverListener:l,disableTouchListener:l},i.createElement("span",null,i.createElement(Z.Z,{onClick:s,disabled:l},i.createElement(h.Z,null)))):null},N=n(282),S=n(94546),T=n(86572),M=n(33901),A=n(81019),P=n(23010),I=n(98253);var U=e=>{let{onAgree:t,onCancel:n}=e;const a=(0,y._8)((e=>{let{set:n}=e;return()=>{n(T.Z,!0),null==t||t()}}),[t]);return i.createElement(P.Z,{leading:i.createElement(M.Z,null,i.createElement(A.Z,null)),text:i.createElement(E.Z,I.Z.weUseCookiesToAnalyzeOurTraffic),actions:i.createElement(i.Fragment,null,i.createElement(N.Z,{variant:"text",color:"primary",onClick:a},i.createElement(E.Z,I.Z.agree)),i.createElement(N.Z,{variant:"text",color:"primary",onClick:n},i.createElement(E.Z,I.Z.cancel)))})},z=n(60661),R=n(79388),L=n(14069),O=n(52210),F=n(78607),H=(0,c.vU)({consentToUseCookies:{id:"src.components.ObtainCookieConsentButton.consentToUseCookies",defaultMessage:"Consent to use cookies…"},youHaveAlreadyConsentedToUseCookies:{id:"src.components.ObtainCookieConsentButton.youHaveAlreadyConsentedToUseCookies",defaultMessage:"You have already consented to use cookies."}});var B=()=>{const e=(0,l.useInjection)("EnvVarConfig").get("GTM_CONTAINER_ID"),t=(0,O.Z)(),n=(0,L.Z)(),{enqueueSnackbar:a}=(0,S.Ds)(),o=(0,y.sJ)(T.Z),r=(0,y.sJ)(F.Z),s=(0,i.useCallback)((()=>{(0,k.s)(e),n.hide({key:R.Z,safe:!0}),n.hide({key:z.Z}),t.install(e)}),[n,t,e]),c=(0,i.useCallback)((()=>{n.hide({key:z.Z})}),[n]),u=(0,i.useCallback)((()=>{o?a(i.createElement(E.Z,H.youHaveAlreadyConsentedToUseCookies)):n.show(i.createElement(U,{onAgree:s,onCancel:c}),{key:z.Z,replaceable:!0})}),[o,n,s,c,a]);return i.createElement(N.Z,{onClick:u,disabled:(null==r?void 0:r.key)===z.Z},i.createElement(E.Z,H.consentToUseCookies))},D=n(13833),_=n(19279),j=(0,c.vU)({setTheClock:{id:"src.components.SetClockButton.setTheClock",defaultMessage:"Set the clock"}});const G={updateNow:_.Z};var V=(0,d.$j)(null,G)((e=>{let{updateNow:t}=e;return i.createElement(N.Z,{onClick:t},i.createElement(E.Z,j.setTheClock))}));var $=(0,d.$j)((e=>{let{io:{now:t}}=e;return{now:t}}))((e=>{let{now:t}=e;return i.createElement(c.Ji,{value:t,format:"medium"})})),q=(0,c.vU)({home:{id:"src.components.App.HomePage.home",defaultMessage:"Home"}});const W=n.e(5993).then(n.bind(n,45993));var J=(0,D.D)((()=>{const e=(0,l.useInjection)("EnvVarConfig").get("GTM_CONTAINER_ID"),{formatMessage:t}=(0,u.Z)(),n=(0,i.useRef)(null),[d,m]=(0,i.useState)(""),f=(0,i.useCallback)((e=>{m(e.target.value)}),[]);return(0,i.useEffect)((()=>{(async()=>{const{add:e}=await W;console.log(e(1,1))})()}),[]),i.createElement(i.Fragment,null,i.createElement(s.Z,{title:t(q.home)}),i.createElement(r.Z,null,i.createElement(c.BK,{format:"usd",value:100})),i.createElement(r.Z,null,i.createElement($,null)," ",i.createElement(p,null)),i.createElement(V,null),i.createElement(o.Z,{value:d,onChange:f,InputProps:{endAdornment:i.createElement(a.Z,{position:"end"},i.createElement(x,{inputFor:n}))},inputProps:{ref:n}}),void 0!==e&&i.createElement(B,null))}))},23010:function(e,t,n){var a=n(28889),o=n(79895),r=n(22318),l=n(51206),i=n.n(l),s=n(67294),c=n(31826);const u=i().getParser(navigator.userAgent).is("Mobile");t.Z=e=>{let{leading:t,text:n,actions:l}=e;return s.createElement(o.Z,{square:!0,elevation:0},s.createElement(a.Z,{display:"flex",flexWrap:"nowrap",alignItems:u?"flex-start":"center"},void 0!==t&&s.createElement(a.Z,{my:u?3:2,ml:2},t),s.createElement(a.Z,{alignSelf:"stretch",display:"flex",flexGrow:1,alignItems:u?"flex-start":"center",flexWrap:u?"wrap":void 0,gridColumnGap:(u?36:90)-16,gridRowGap:u?(void 0!==t?20:12)-10:void 0},s.createElement(a.Z,{mt:u?3:2,mb:u?void 0:2,ml:u?2:3,mr:1},s.createElement(r.Z,{variant:"body2"},n)),s.createElement(a.Z,{alignSelf:"flex-end",display:"flex",flexGrow:1},s.createElement(c.Z,null),s.createElement(a.Z,{mt:u?1.25:1,mx:1,mb:1,display:"flex",gridColumnGap:8},l)))))}},98253:function(e,t,n){var a=n(85315);t.Z=(0,a.vU)({weUseCookiesToAnalyzeOurTraffic:{id:"src.components.ObtainCookieConsentBanner.weUseCookiesToAnalyzeOurTraffic",defaultMessage:"We use cookies to analyze our traffic."},agree:{id:"src.components.ObtainCookieConsentBanner.agree",defaultMessage:"Agree"},cancel:{id:"src.components.ObtainCookieConsentBanner.cancel",defaultMessage:"Cancel"}})},60661:function(e,t,n){const a=(0,n(44586).Z)();t.Z=a},79388:function(e,t,n){const a=(0,n(44586).Z)();t.Z=a},14069:function(e,t,n){var a=n(2804),o=n(44586),r=n(95929),l=n(78607);t.Z=()=>({show:(0,a._8)((e=>{let{set:t}=e;return(e,n)=>{var a,r;const i=null!==(a=null==n?void 0:n.key)&&void 0!==a?a:(0,o.Z)(),s=null!==(r=null==n?void 0:n.replaceable)&&void 0!==r&&r;return t(l.Z,{banner:e,key:i,replaceable:s}),i}})),hide:(0,a._8)((e=>{let{set:t}=e;return e=>{var n;const a=null==e?void 0:e.key,o=null!==(n=null==e?void 0:e.safe)&&void 0!==n&&n;void 0===a?t(l.Z,(e=>{if(null===e&&!o)throw new Error("No banner found.");return null})):t(r.Z,(e=>{const t=e.findIndex((e=>e.key===a));if(-1===t&&!o)throw new Error("No banner found.");return-1!==t?[...e.slice(0,t),...e.slice(t+1)]:e}))}}))})}}]);
//# sourceMappingURL=home.66442375.js.map