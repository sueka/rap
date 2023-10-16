"use strict";(self.webpackChunkrap=self.webpackChunkrap||[]).push([[5296],{57778:function(e,n,t){t.r(n),t.d(n,{default:function(){return b}});var l=t(28889),a=t(41749),s=t(22318),r=t(67294),o=t(64593),c=t(31753),i=t(97127),u=t(13833),d=t(8286);var m=()=>{const[e,n]=(0,r.useState)(),t=(0,r.useCallback)((e=>{n(e.currentTarget.value)}),[]);return r.createElement(a.Z,{container:!0,spacing:2},r.createElement(a.Z,{item:!0,xs:12,sm:6},r.createElement(d.Z,{fullWidth:!0,multiline:!0,maxRows:10,onChange:t,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAAAAAA6fptVAAAADUlEQVQIHQECAP3/AP8BAQEA02HOTAAAAABJRU5ErkJggg==",dir:"ltr"})),r.createElement(a.Z,{item:!0,xs:12,sm:6},r.createElement("img",{src:e})))},p=t(67154),E=t.n(p),A=t(46121),f=t(45733),g=t(38606),v=t(85315),Z=(0,v.vU)({noFileSelected:{id:"src.components.ImageDataUrlEncoder.noFileSelected",defaultMessage:"No file selected."},encoding:{id:"src.components.ImageDataUrlEncoder.encoding",defaultMessage:"Encoding…"},encodedSuccessfully:{id:"src.components.ImageDataUrlEncoder.encodedSuccessfully",defaultMessage:"Encoded successfully."},charsCharacters:{id:"src.components.ImageDataUrlEncoder.charsCharacters",defaultMessage:"{ chars } characters"}}),U=t(66283);const h=e=>{let{value:n,...t}=e;const l=(0,r.useRef)(null);return r.createElement(d.Z,E()({value:n,inputRef:l,InputProps:{endAdornment:r.createElement(U.Z,{position:"end"},r.createElement(g.Z,{inputFor:l}))}},t))};var C=()=>{const[e,n]=(0,r.useState)(),[t,l]=(0,r.useState)(),s=(0,r.useMemo)((()=>new FileReader),[]),o=(0,r.useCallback)((e=>{var n,t;if(null!=(null===(n=e.target)||void 0===n?void 0:n.result)){if(e.target.result instanceof ArrayBuffer)throw new Error;l(null===(t=e.target)||void 0===t?void 0:t.result)}}),[]);(0,r.useEffect)((()=>(s.addEventListener("load",o),()=>{s.removeEventListener("load",o)})),[s,o]);const u=(0,r.useCallback)((e=>{var t;if(n(null!==(t=e.target.files)&&void 0!==t?t:void 0),null===e.target.files||0===e.target.files.length)return;(0,A.s)(e.target.files[0]);const l=e.target.files[0];s.readAsDataURL(l)}),[s]),d=(0,r.useMemo)((()=>void 0===e||0===e.length?r.createElement(i.Z,Z.noFileSelected):void 0===t?r.createElement(i.Z,Z.encoding):r.createElement(i.Z,Z.encodedSuccessfully)),[e,t]),{formatMessage:m}=(0,c.Z)(),p=(0,r.useMemo)((()=>{if(void 0===t)return;const e=t.length,n=e/1024;return`${m(Z.charsCharacters,{chars:e})} (≈ ${Math.round(10*n)/10+" KiB"})`}),[t,m]);return r.createElement(a.Z,{container:!0,spacing:2},r.createElement(a.Z,{item:!0,xs:12,sm:6},r.createElement(f.Z,{accept:"image/*",resultMessage:d,onChange:u})),r.createElement(a.Z,{item:!0,xs:12,sm:6},r.createElement(h,{multiline:!0,fullWidth:!0,maxRows:10,value:null!=t?t:"",helperText:p,inputProps:{dir:"ltr"}})))},F=(0,v.vU)({imageDataUrlEnDecoder:{id:"src.components.App.ImageDataUrlEnDecoderPage.imageDataUrlEnDecoder",defaultMessage:"Image–data URL en-/decoder"},encoder:{id:"src.components.App.ImageDataUrlEnDecoderPage.encoder",defaultMessage:"Encoder"},decoder:{id:"src.components.App.ImageDataUrlEnDecoderPage.decoder",defaultMessage:"Decoder"}});var b=(0,u.D)((()=>{const{formatMessage:e}=(0,c.Z)();return r.createElement(r.Fragment,null,r.createElement(o.Z,{title:e(F.imageDataUrlEnDecoder)}),r.createElement(l.Z,null,r.createElement(l.Z,{padding:2},r.createElement(a.Z,{container:!0,spacing:2},r.createElement(a.Z,{item:!0,xs:12},r.createElement(s.Z,{variant:"h3"},r.createElement(i.Z,F.encoder))),r.createElement(a.Z,{item:!0,xs:12},r.createElement(C,null)))),r.createElement(l.Z,{padding:2},r.createElement(a.Z,{container:!0,spacing:2},r.createElement(a.Z,{item:!0,xs:12},r.createElement(s.Z,{variant:"h3"},r.createElement(i.Z,F.decoder))),r.createElement(a.Z,{item:!0,xs:12},r.createElement(m,null))))))}))},38606:function(e,n,t){t.d(n,{Z:function(){return g}});var l=t(67154),a=t.n(l),s=t(17812),r=t(3380),o=t(92680),c=t(20640),i=t.n(c),u=t(94546),d=t(67294),m=t(31753),p=t(97127),E=t(46121),A=(0,t(85315).vU)({textCopied:{id:"src.components.CopyTextButton.textCopied",defaultMessage:"Text copied."},copyText:{id:"src.components.CopyTextButton.copyText",defaultMessage:"Copy text"}});const f=e=>{let{style:n,...t}=e;if(void 0===n)return d.createElement(o.Z,a()({style:{transform:"scaleY(-1)"}},t));const{transform:l,...s}=n;if(void 0!==l)throw new Error;return d.createElement(o.Z,a()({style:{transform:"scaleY(-1)",...s}},t))};var g=e=>{let{inputFor:n}=e;const{formatMessage:t}=(0,m.Z)(),{enqueueSnackbar:l}=(0,u.Ds)(),a=(0,d.useCallback)((()=>{(0,E.s)(n.current),""!==n.current.value&&(i()(n.current.value),l(d.createElement(p.Z,A.textCopied)))}),[l,n]),[o,c]=(0,d.useState)(!0);return(0,d.useEffect)((()=>{c(null===n.current||""===n.current.value||n.current.disabled)})),d.createElement(r.ZP,{title:t(A.copyText),disableFocusListener:o,disableHoverListener:o,disableTouchListener:o},d.createElement("span",null,d.createElement(s.Z,{onClick:a,disabled:o},d.createElement(f,null))))}},45733:function(e,n,t){t.d(n,{Z:function(){return _}});var l=t(67154),a=t.n(l),s=t(282),r=t(96019),o=t(51206),c=t.n(o),i=t(94184),u=t.n(i),d=t(67294),m=t(97127),p=t(46121),E=t(93379),A=t.n(E),f=t(7795),g=t.n(f),v=t(90569),Z=t.n(v),U=t(3565),h=t.n(U),C=t(19216),F=t.n(C),b=t(44589),x=t.n(b),B=t(58995),y={};y.styleTagTransform=x(),y.setAttributes=h(),y.insert=Z().bind(null,"head"),y.domAPI=g(),y.insertStyleElement=F();A()(B.Z,y);var S=B.Z&&B.Z.locals?B.Z.locals:void 0,M=t(44140);const D=c().getParser(navigator.userAgent).is("Safari");var _=e=>{var n,t;let{className:l,disabled:o,multiple:c,onClick:i,onChange:E,buttonLabel:A=d.createElement(m.Z,M.Z.browse),resultMessage:f,classes:g,component:v=r.Z,ButtonProps:Z,...U}=e;const h=(0,d.useMemo)((()=>u()(l,null==g?void 0:g.root,S.FileUpload,{[S.Safari]:D})),[l,null==g?void 0:g.root]),C=(0,d.useMemo)((()=>u()(null==g?void 0:g.button,S.Button,null==Z?void 0:Z.className)),[null==g?void 0:g.button,null==Z?void 0:Z.className]),F=(0,d.useRef)(null),b=null!==(n=null===(t=F.current)||void 0===t?void 0:t.files)&&void 0!==n?n:null,x=(0,d.useMemo)((()=>{if(null==f)return null===b||0===b.length?d.createElement(m.Z,M.Z.noFileSelected):1===b.length?b[0].name:d.createElement(m.Z,a()({},M.Z.nFilesSelected,{values:{n:b.length}}))}),[f,b]),B=(0,d.useCallback)((()=>{(0,p.s)(F.current),F.current.dispatchEvent(new MouseEvent("click"))}),[F]),y=(0,d.useCallback)((e=>{null==i||i(e),e.isDefaultPrevented()||B(e)}),[i,B]);return d.createElement(v,{className:h,tabIndex:D?-1:0},d.createElement(s.Z,a()({disabled:o,onClick:y},Z,{className:C,tabIndex:-1}),A),null!=f?f:x,d.createElement("input",a()({className:S.Input,type:"file",disabled:o,multiple:c,onChange:E,ref:F},U)))}},44140:function(e,n,t){var l=t(85315);n.Z=(0,l.vU)({browse:{id:"src.components.FileUpload.browse",defaultMessage:"Browse…"},noFileSelected:{id:"src.components.FileUpload.noFileSelected",defaultMessage:"No file selected."},nFilesSelected:{id:"src.components.FileUpload.nFilesSelected",defaultMessage:"{ n } files selected."}})},58995:function(e,n,t){var l=t(87537),a=t.n(l),s=t(23645),r=t.n(s)()(a());r.push([e.id,".src-components-FileUpload-classes__FileUpload--zcA60 {\n  display: inline-block; /* TODO: polyfill */\n  display: inline flow-root;\n  cursor: pointer;\n}\n\n.src-components-FileUpload-classes__FileUpload--zcA60.src-components-FileUpload-classes__Safari--xNS3H:focus {\n  outline: none;\n}\n\n.src-components-FileUpload-classes__Button--_x92h.src-components-FileUpload-classes__Button--_x92h {\n  text-transform: none;\n  cursor: unset;\n}\n\n.src-components-FileUpload-classes__Input--HY1r1 {\n  display: none;\n}\n","",{version:3,sources:["webpack://./src/components/FileUpload/classes.css"],names:[],mappings:"AAAA;EACE,qBAAqB,EAAE,mBAAmB;EAC1C,yBAAyB;EACzB,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,oBAAoB;EACpB,aAAa;AACf;;AAEA;EACE,aAAa;AACf",sourcesContent:[".FileUpload {\n  display: inline-block; /* TODO: polyfill */\n  display: inline flow-root;\n  cursor: pointer;\n}\n\n.FileUpload.Safari:focus {\n  outline: none;\n}\n\n.Button.Button {\n  text-transform: none;\n  cursor: unset;\n}\n\n.Input {\n  display: none;\n}\n"],sourceRoot:""}]),r.locals={FileUpload:"src-components-FileUpload-classes__FileUpload--zcA60",Safari:"src-components-FileUpload-classes__Safari--xNS3H",Button:"src-components-FileUpload-classes__Button--_x92h",Input:"src-components-FileUpload-classes__Input--HY1r1"},n.Z=r}}]);
//# sourceMappingURL=imageDataUrlEnDecoder.f51511bc.js.map