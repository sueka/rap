(self.webpackChunkreact_app_prototype=self.webpackChunkreact_app_prototype||[]).push([[177],{66283:function(e,t,n){"use strict";var r=n(22122),o=n(81253),a=n(67294),i=(n(45697),n(86010)),u=n(22318),l=n(14670),c=n(15736),s=a.forwardRef((function(e,t){var n=e.children,l=e.classes,s=e.className,f=e.component,v=void 0===f?"div":f,d=e.disablePointerEvents,m=void 0!==d&&d,p=e.disableTypography,h=void 0!==p&&p,y=e.position,g=e.variant,E=(0,o.Z)(e,["children","classes","className","component","disablePointerEvents","disableTypography","position","variant"]),b=(0,c.Y)()||{},w=g;return g&&b.variant,b&&!w&&(w=b.variant),a.createElement(c.Z.Provider,{value:null},a.createElement(v,(0,r.Z)({className:(0,i.Z)(l.root,s,m&&l.disablePointerEvents,b.hiddenLabel&&l.hiddenLabel,"filled"===w&&l.filled,{start:l.positionStart,end:l.positionEnd}[y],"dense"===b.margin&&l.marginDense),ref:t},E),"string"!=typeof n||h?n:a.createElement(u.Z,{color:"textSecondary"},n)))}));t.Z=(0,l.Z)({root:{display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap"},filled:{"&$positionStart:not($hiddenLabel)":{marginTop:16}},positionStart:{marginRight:8},positionEnd:{marginLeft:8},disablePointerEvents:{pointerEvents:"none"},hiddenLabel:{},marginDense:{}},{name:"MuiInputAdornment"})(s)},99595:function(e,t,n){"use strict";var r=n(95318),o=n(20862);t.Z=void 0;var a=o(n(67294)),i=(0,r(n(2108)).default)(a.createElement("path",{d:"M10.01 21.01c0 1.1.89 1.99 1.99 1.99s1.99-.89 1.99-1.99h-3.98zm8.87-4.19V11c0-3.25-2.25-5.97-5.29-6.69v-.72C13.59 2.71 12.88 2 12 2s-1.59.71-1.59 1.59v.72C7.37 5.03 5.12 7.75 5.12 11v5.82L3 18.94V20h18v-1.06l-2.12-2.12zM16 13.01h-3v3h-2v-3H8V11h3V8h2v3h3v2.01z"}),"AddAlert");t.Z=i},12331:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return te}});var r=n(63038),o=n.n(r),a=n(66283),i=n(8286),u=n(22318),l=n(67294),c=n(64593),s=n(85315),f=n(31753),v=n(276),d=n(67154),m=n.n(d),p=function(e){return l.createElement(s.qN,m()({},e,{weekday:void 0,era:void 0,year:void 0,month:void 0,day:void 0}))},h=(0,v.$j)((function(e){return{now:e.io.now}}))((function(e){var t=e.now;return l.createElement(p,{value:t,format:"medium"})})),y=n(319),g=n.n(y),E=n(48926),b=n.n(E),w=n(87757),Z=n.n(w),k=n(17812),C=n(99595),S=n(18394),A=n.n(S),x=n(2804),P=n(32975),T=function(e){return e};function L(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return N(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return N(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,u=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){u=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(u)throw a}}}}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var R,_=n(34575),M=n.n(_),$=n(93913),j=n.n($),I=n(2205),V=n.n(I),B=n(78585),D=n.n(B),F=n(29754),H=n.n(F);function z(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=H()(e);if(t){var o=H()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return D()(this,n)}}var O=function(e){V()(n,e);var t=z(n);function n(){var e;M()(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o)))._timestamp=void 0,e._timestamp=(new Date).getTime(),e}return j()(n,[{key:"timestamp",get:function(){return this._timestamp}}]),n}(null!==(R=globalThis.Notification)&&void 0!==R?R:function(){return function e(){M()(this,e)}}()),U=function(e){var t=e.inputFor,n=(0,x.FV)(P.Z),r=o()(n,2),a=r[0],i=r[1],u=(0,l.useCallback)(b()(Z().mark((function e(){var n;return Z().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==(n=t.current)&&!/^\p{White_Space}*$/.test(n.value)){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,O.requestPermission();case 5:"granted"===e.sent&&i((function(e){return[].concat(g()(e),[new O(n.value)])}));case 7:case"end":return e.stop()}}),e)}))),[t]),c=(0,l.useCallback)((function(e){var t=e.target;t instanceof O&&i((function(e){return e.filter((function(e){return e!==t}))}))}),[]);return(0,l.useEffect)((function(){0!==a.length?A().add():A().remove()}),[a]),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:T,n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0;(0,l.useEffect)((function(){var r,o=[],a=[],i=L(e);try{for(i.s();!(r=i.n()).done;){var u=r.value,l=t(u);a.includes(l)||(o.push({x:u,cleanup:n(u)}),a.push(l))}}catch(e){i.e(e)}finally{i.f()}return function(){var e,t=L(o);try{for(t.s();!(e=t.n()).done;){var n=e.value,r=n.x,a=n.cleanup;void 0!==a&&a(r)}}catch(e){t.e(e)}finally{t.f()}}}),null!=r?r:[])}(a,void 0,(function(e){return e.addEventListener("close",c),function(){e.removeEventListener("close",c)}}),[a,c]),"Notification"in globalThis?l.createElement(k.Z,{onClick:u},l.createElement(C.Z,null)):null},q=n(81411),J=n(282),K=n(97127),W=n(19279),Y=(0,s.vU)({setTheClock:{id:"src.components.SetClockButton.setTheClock",defaultMessage:"Set the clock"}}),G={updateNow:W.Z},Q=(0,v.$j)(null,G)((function(e){var t=e.updateNow;return l.createElement(J.Z,{onClick:t},l.createElement(K.Z,Y.setTheClock))})),X=(0,v.$j)((function(e){return{now:e.io.now}}))((function(e){var t=e.now;return l.createElement(s.Ji,{value:t,format:"medium"})})),ee=(0,s.vU)({home:{id:"src.components.App.HomePage.home",defaultMessage:"Home"}}),te=(0,q.D)((function(){var e=(0,f.Z)().formatMessage,t=(0,l.useRef)(null),n=(0,l.useState)(""),r=o()(n,2),v=r[0],d=r[1],m=(0,l.useCallback)((function(e){d(e.target.value)}),[]);return l.createElement(l.Fragment,null,l.createElement(c.Z,{title:e(ee.home)}),l.createElement(u.Z,null,l.createElement(s.BK,{format:"usd",value:100})),l.createElement(u.Z,null,l.createElement(X,null)," ",l.createElement(h,null)),l.createElement(Q,null),l.createElement(i.Z,{value:v,onChange:m,InputProps:{endAdornment:l.createElement(a.Z,{position:"end"},l.createElement(U,{inputFor:t}))},inputProps:{ref:t}}))}))}}]);
//# sourceMappingURL=home.cfa1db0a.js.map