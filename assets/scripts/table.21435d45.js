"use strict";(self.webpackChunkrap=self.webpackChunkrap||[]).push([[4986],{55743:function(e,t,l){l.r(t),l.d(t,{default:function(){return ue}});var n=l(95477),a=l(67294),r=l(64593),s=l(31753),i=l(55371),o=l(35369),u=l(15659),c=l(15137),d=l(41120),m=l(8920),E=l(79895),v=l(82302),f=l(99613),p=l(17196),S=l(56847),g=l(83750),h=l(57394),_=l(77256),b=l(51206),A=l.n(b),y=l(94184),O=l.n(y),N=l(93379),w=l.n(N),C=l(7795),T=l.n(C),Z=l(90569),L=l.n(Z),I=l(3565),G=l.n(I),D=l(19216),M=l.n(D),P=l(44589),j=l.n(P),H=l(25861),k={};k.styleTagTransform=j(),k.setAttributes=G(),k.insert=L().bind(null,"head"),k.domAPI=T(),k.insertStyleElement=M();w()(H.Z,k);var R=H.Z&&H.Z.locals?H.Z.locals:void 0;function x(e,t){return e<t?-1:e>t?1:0}const z=A().getParser(navigator.userAgent).is("Mobile"),B=(0,d.Z)({LocalizedCell:{textAlign:e=>{let{direction:t}=e;if(void 0!==t)switch(t){case"ltr":return"left";case"rtl":return"right"}}}},{flip:!1});var F=e=>{let{columns:t,rows:l,defaultSortOrder:n="asc",locale:r}=e;const[s,i]=(0,a.useState)([]),u=(0,a.useMemo)((()=>s[0]),[s]),c=(0,a.useCallback)((e=>()=>{if(e===(null==u?void 0:u.by))i((e=>{let[t,...l]=e;return[{by:t.by,in:"asc"===t.in?"desc":"asc"},...l]}));else{const t=s.findIndex((t=>t.by===e));i(-1===t?t=>[{by:e,in:n},...t]:e=>[e[t],...e.slice(0,t),...e.slice(t+1)])}}),[n,s,u]),d=(0,a.useMemo)((()=>s.reduceRight(((e,t)=>{switch(t.in){case"asc":return e.sortBy((e=>String(e[t.by])),x);case"desc":return e.sortBy((e=>String(e[t.by])),((e,t)=>-x(e,t)))}}),(0,o.aV)(l)).toArray()),[s,l]),b=(0,m.Z)(),A=(0,a.useMemo)((()=>{if(void 0!==r)return/^(?:he|iw)\b/.test(r)?"rtl":"ltr"}),[r]),y=B({direction:A}),N=(0,a.useMemo)((()=>O()(y.LocalizedCell,R.NumericCell)),[y.LocalizedCell]);return a.createElement(S.Z,{component:E.Z},a.createElement(v.Z,{size:z?"small":"medium",lang:r},a.createElement(g.Z,null,a.createElement(h.Z,null,t.map((e=>{var t,l,r;return a.createElement(p.Z,{variant:"head",sortDirection:(null==u?void 0:u.by)===e.field?u.in:void 0,className:y.LocalizedCell,style:{minWidth:void 0!==e.width?e.width+2*b.spacing(2):void 0},key:e.field},a.createElement("bdi",null,a.createElement(_.Z,{active:(null==u?void 0:u.by)===e.field,direction:null!==(t=null===(l=s.find((t=>t.by===e.field)))||void 0===l?void 0:l.in)&&void 0!==t?t:n,onClick:c(e.field)},null!==(r=e.label)&&void 0!==r?r:e.field)))})))),a.createElement(f.Z,null,d.map(((e,l)=>a.createElement(h.Z,{hover:!0,key:l},(0,o.zN)(Object.entries(e)).sortBy(((e,l)=>t.findIndex((e=>e.field===l))),((e,t)=>e-t)).map(((e,t)=>{return a.createElement(p.Z,{className:(l=String(e),Number.isNaN(Number(l))||Number.isNaN(parseFloat(l))?y.LocalizedCell:N),key:t},a.createElement("bdi",null,e));var l})).valueSeq().toArray()))))))},K=l(38780),U=l(46121),q=l(37868);function $(e,t){const[l,n]=(0,a.useState)(null),[r,s]=(0,a.useState)(null),[i,o]=(0,a.useState)(null),[u,c]=(0,a.useState)(null);switch((0,a.useEffect)((()=>{n((0,q.ZP)(e,t)),c("pending")}),[e,t]),u){case"pending":throw(0,U.s)(l),l.then((e=>{s(e),c("fulfilled")})).catch((e=>{if(!(e instanceof Error))throw new TypeError("Non-error reason caught.");o(e),c("rejected")}));case null:case"fulfilled":return r;case"rejected":throw i}}var V=l(25818);var W=l(13665);const J=W.vl,X=(0,W.P7)(J),Y=(0,W.El)("DIMENSION_UNSPECIFIED","COLUMNS","ROWS"),Q=(0,W.su)((e=>({range:(0,W.jt)(W.XC)(e.range),majorDimension:(0,W.jt)(Y)(e.majorDimension),values:(0,W.jt)(X)(e.values)}))),ee=(0,W.su)((e=>({properties:(0,W.jt)(te)(e.properties),sheets:(0,W.jt)((0,W.P7)(le))(e.sheets)}))),te=(0,W.su)((e=>({locale:(0,W.jt)(W.XC)(e.locale)}))),le=(0,W.su)((e=>({data:(0,W.jt)((0,W.P7)(ne))(e.data)}))),ne=(0,W.su)((e=>({columnMetadata:(0,W.jt)((0,W.P7)(ae))(e.columnMetadata)}))),ae=(0,W.su)((e=>({pixelSize:(0,W.jt)(W.mH)(e.pixelSize)})));function re(e){switch(typeof e){case"string":case"number":return!0;default:return!1}}var se=()=>{const e=(0,u.useInjection)("EnvVarConfig"),t=$((0,c.Gn)(V.Z`${e.get("SHEETS_API_URL")}/spreadsheets/:spreadsheetId\\?ranges=:sheetName&includeGridData=:includeGridData&fields=:fields&key=:apiKey`,{spreadsheetId:e.get("GOOGLE_SHEETS_FOSS_COMPARISON_TABLE_SHEET_ID"),sheetName:e.get("GOOGLE_SHEETS_FOSS_COMPARISON_TABLE_SHEET_SHEET_NAME"),includeGridData:!0,fields:"properties.locale,sheets.data.columnMetadata",apiKey:e.get("GOOGLE_CLOUD_APIS_GOOGLE_SHEETS_API_KEY")})),l=$((0,c.Gn)(V.Z`${e.get("SHEETS_API_URL")}/spreadsheets/:spreadsheetId/values/:sheetName\\?key=:apiKey`,{spreadsheetId:e.get("GOOGLE_SHEETS_FOSS_COMPARISON_TABLE_SHEET_ID"),sheetName:e.get("GOOGLE_SHEETS_FOSS_COMPARISON_TABLE_SHEET_SHEET_NAME"),apiKey:e.get("GOOGLE_CLOUD_APIS_GOOGLE_SHEETS_API_KEY")})),[n,r]=(0,a.useState)(null),[s,d]=(0,a.useState)(null),[m,E]=(0,a.useState)(null);return(0,a.useEffect)((()=>{(async()=>{var e,n,a,s,o;if(null===t||null===l)return;const u=ee(await t.json()),c=null===(e=u.properties)||void 0===e?void 0:e.locale,m=null===(n=u.sheets)||void 0===n||null===(a=n[0])||void 0===a||null===(s=a.data)||void 0===s||null===(o=s[0])||void 0===o?void 0:o.columnMetadata,v=Q(await l.json());if(void 0===c||void 0===m)throw new Error("No both locale and columnMetadata found.");if("ROWS"!==(null==v?void 0:v.majorDimension))throw new Error("Dimension unsupported.");if(void 0===v.values||!v.values.every(Array.isArray))throw new Error("Less than 2 dimensions found.");if(!v.values.every((e=>e.every(re))))throw new Error("Neither string nor number value found.");E((0,i.P)(function(e){var t;const l=null===(t=/(?<language>[a-z]{2,3})(?:_(?<region>[A-Z]{2}))?/i.exec(e))||void 0===t?void 0:t.groups;(0,U.s)(l);const{language:n,region:a}=l;return{language:n,extendedLanguageSubtags:[],script:null,region:null!=a?a:null,variants:[],extensions:[],privateuse:[],irregular:null,regular:null}}(c)));const[f,...p]=v.values;if(void 0===f)throw new Error("No rows found.");const S=f.map(((e,t)=>V.Z`${e}_${t}`));r(Array.from((0,K.Z)(S,(0,K.Z)(f,m))).map((e=>{let[t,[l,{pixelSize:n}]]=e;return{field:t,label:l,width:n}}))),d(p.map((e=>Object.fromEntries((0,K.Z)(S,e)))))})()}),[t,l]),null===n||null===s?null:a.createElement(F,{columns:(0,o.aV)(n).sortBy((e=>e.field),((e,t)=>e<t?-1:e>t?1:0)).toArray(),rows:s,locale:null!=m?m:void 0})},ie=l(13833),oe=(0,l(85315).vU)({table:{id:"src.components.App.TablePage.table",defaultMessage:"Table"}});var ue=(0,ie.D)((()=>{const{formatMessage:e}=(0,s.Z)();return a.createElement(a.Fragment,null,a.createElement(r.q,{title:e(oe.table)}),a.createElement(a.Suspense,{fallback:a.createElement(n.Z,null)},a.createElement(se,null)))}))},25861:function(e,t,l){var n=l(87537),a=l.n(n),r=l(23645),s=l.n(r)()(a());s.push([e.id,'.src-components-DataTable-classes__NumericCell--Da_0l {\n  text-align: right; /* NOTE: アラビア数字は RtL 言語でも右寄せする。 <q cite="https://material.io/components/data-tables#behavior">Align numbers to the right for improved scannability.</q> */\n}\n',"",{version:3,sources:["webpack://./src/components/DataTable/classes.css"],names:[],mappings:"AAAA;EACE,iBAAiB,EAAE,yJAAyJ;AAC9K",sourcesContent:['.NumericCell {\n  text-align: right; /* NOTE: アラビア数字は RtL 言語でも右寄せする。 <q cite="https://material.io/components/data-tables#behavior">Align numbers to the right for improved scannability.</q> */\n}\n'],sourceRoot:""}]),s.locals={NumericCell:"src-components-DataTable-classes__NumericCell--Da_0l"},t.Z=s}}]);
//# sourceMappingURL=table.21435d45.js.map