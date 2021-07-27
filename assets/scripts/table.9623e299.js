(self.webpackChunkrap=self.webpackChunkrap||[]).push([[4986],{56363:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return q}});var n=a(95477),r=a(67294),o=a(64593),l=a(31753),i=a(15659),s=a(26353),c=a(79895),d=a(81253),u=a(22122),p=(a(45697),a(86010)),m=a(14670);var g=r.createContext(),f="table",v=r.forwardRef((function(e,t){var a=e.classes,n=e.className,o=e.component,l=void 0===o?f:o,i=e.padding,s=void 0===i?"default":i,c=e.size,m=void 0===c?"medium":c,v=e.stickyHeader,h=void 0!==v&&v,E=(0,d.Z)(e,["classes","className","component","padding","size","stickyHeader"]),y=r.useMemo((function(){return{padding:s,size:m,stickyHeader:h}}),[s,m,h]);return r.createElement(g.Provider,{value:y},r.createElement(l,(0,u.Z)({role:l===f?null:"table",ref:t,className:(0,p.Z)(a.root,n,h&&a.stickyHeader)},E)))})),h=(0,m.Z)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":(0,u.Z)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(v);var E=r.createContext(),y={variant:"body"},b="tbody",w=r.forwardRef((function(e,t){var a=e.classes,n=e.className,o=e.component,l=void 0===o?b:o,i=(0,d.Z)(e,["classes","className","component"]);return r.createElement(E.Provider,{value:y},r.createElement(l,(0,u.Z)({className:(0,p.Z)(a.root,n),ref:t,role:l===b?null:"rowgroup"},i)))})),Z=(0,m.Z)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(w),S=a(93871),x=a(59693),N=r.forwardRef((function(e,t){var a,n,o=e.align,l=void 0===o?"inherit":o,i=e.classes,s=e.className,c=e.component,m=e.padding,f=e.scope,v=e.size,h=e.sortDirection,y=e.variant,b=(0,d.Z)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),w=r.useContext(g),Z=r.useContext(E),x=Z&&"head"===Z.variant;c?(n=c,a=x?"columnheader":"cell"):n=x?"th":"td";var N=f;!N&&x&&(N="col");var k=m||(w&&w.padding?w.padding:"default"),C=v||(w&&w.size?w.size:"medium"),_=y||Z&&Z.variant,O=null;return h&&(O="asc"===h?"ascending":"descending"),r.createElement(n,(0,u.Z)({ref:t,className:(0,p.Z)(i.root,i[_],s,"inherit"!==l&&i["align".concat((0,S.Z)(l))],"default"!==k&&i["padding".concat((0,S.Z)(k))],"medium"!==C&&i["size".concat((0,S.Z)(C))],"head"===_&&w&&w.stickyHeader&&i.stickyHeader),"aria-sort":O,role:a,scope:N},b))})),k=(0,m.Z)((function(e){return{root:(0,u.Z)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?(0,x.$n)((0,x.U1)(e.palette.divider,1),.88):(0,x._j)((0,x.U1)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(N),C=r.forwardRef((function(e,t){var a=e.classes,n=e.className,o=e.component,l=void 0===o?"div":o,i=(0,d.Z)(e,["classes","className","component"]);return r.createElement(l,(0,u.Z)({ref:t,className:(0,p.Z)(a.root,n)},i))})),_=(0,m.Z)({root:{width:"100%",overflowX:"auto"}},{name:"MuiTableContainer"})(C),O={variant:"head"},T="thead",A=r.forwardRef((function(e,t){var a=e.classes,n=e.className,o=e.component,l=void 0===o?T:o,i=(0,d.Z)(e,["classes","className","component"]);return r.createElement(E.Provider,{value:O},r.createElement(l,(0,u.Z)({className:(0,p.Z)(a.root,n),ref:t,role:l===T?null:"rowgroup"},i)))})),R=(0,m.Z)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(A),H=r.forwardRef((function(e,t){var a=e.classes,n=e.className,o=e.component,l=void 0===o?"tr":o,i=e.hover,s=void 0!==i&&i,c=e.selected,m=void 0!==c&&c,g=(0,d.Z)(e,["classes","className","component","hover","selected"]),f=r.useContext(E);return r.createElement(l,(0,u.Z)({ref:t,className:(0,p.Z)(a.root,n,f&&{head:a.head,footer:a.footer}[f.variant],s&&a.hover,m&&a.selected),role:"tr"===l?null:"row"},g))})),M=(0,m.Z)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:(0,x.U1)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(H);var I=({columns:e,rows:t})=>r.createElement(_,{component:c.Z},r.createElement(h,null,r.createElement(R,null,r.createElement(M,null,e.map(((e,t)=>{var a;return r.createElement(k,{key:t},null!==(a=e.label)&&void 0!==a?a:e.field)})))),r.createElement(Z,null,t.map(((e,t)=>r.createElement(M,{hover:!0,key:t},Object.entries(e).map((([e,t],a)=>r.createElement(k,{key:a},t))))))))),L=a(38780),j=a(46121),D=a(37868);var P=a(25818),z=a(13665);const G=z.vl,U=(0,z.P7)(G),$=(0,z.El)("DIMENSION_UNSPECIFIED","COLUMNS","ROWS"),B=(0,z.jt)((0,z.su)((e=>({range:(0,z.XC)(e.range),majorDimension:$(e.majorDimension),values:U(e.values)}))));function F(e){switch(typeof e){case"string":case"number":return!0;default:return!1}}var W=()=>{const e=(0,i.useInjection)("EnvVarConfig"),t=function(e,t){const[a,n]=(0,r.useState)(null),[o,l]=(0,r.useState)(null),[i,s]=(0,r.useState)(null),[c,d]=(0,r.useState)(null);switch((0,r.useEffect)((()=>{n((0,D.ZP)(e,t)),d("pending")}),[e,t]),c){case"pending":throw(0,j.s)(a),a.then((e=>{l(e),d("fulfilled")})).catch((e=>{if(!(e instanceof Error))throw new TypeError("Non-error reason caught.");s(e),d("rejected")}));case null:case"fulfilled":return o;case"rejected":throw i}}((0,s.Gn)(P.Z`${e.get("SHEETS_API_URL")}/spreadsheets/:spreadsheetId/values/:sheetName\\?key=:apiKey`,{spreadsheetId:e.get("GOOGLE_SHEETS_FOSS_COMPARISON_TABLE_SHEET_ID"),sheetName:e.get("GOOGLE_SHEETS_FOSS_COMPARISON_TABLE_SHEET_SHEET_NAME"),apiKey:e.get("GOOGLE_CLOUD_APIS_GOOGLE_SHEETS_API_KEY")})),[a,n]=(0,r.useState)(null),[o,l]=(0,r.useState)(null);return(0,r.useEffect)((()=>{(async()=>{const e=B(await(null==t?void 0:t.json()));if(void 0===e)return;if("ROWS"!==(null==e?void 0:e.majorDimension))throw new Error("Dimension unsupported.");if(!e.values.every(Array.isArray))throw new Error("Less than 2 dimensions found.");if(!e.values.every((e=>e.every(F))))throw new Error("Neither string nor number value found.");const[a,...r]=e.values,o=a.map((e=>({field:e})));n(o),l(r.map((e=>Object.fromEntries((0,L.Z)(a,e)))))})()}),[t]),null===a||null===o?null:r.createElement(I,{columns:a,rows:o})},K=a(13833),X=(0,a(85315).vU)({table:{id:"src.components.App.TablePage.table",defaultMessage:"Table"}});var q=(0,K.D)((()=>{const{formatMessage:e}=(0,l.Z)();return r.createElement(r.Fragment,null,r.createElement(o.q,{title:e(X.table)}),r.createElement(r.Suspense,{fallback:r.createElement(n.Z,null)},r.createElement(W,null)))}))}}]);
//# sourceMappingURL=table.9623e299.js.map