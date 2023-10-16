"use strict";(self.webpackChunkrap=self.webpackChunkrap||[]).push([[2954],{13258:function(e,n,t){t.d(n,{Z:function(){return Z}});var r=t(87462),a=t(45987),o=t(67294),c=(t(45697),t(86010)),s=t(56608),i=t(63786),l=(0,i.Z)(o.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),d=(0,i.Z)(o.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),u=t(59693),m=(0,i.Z)(o.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),p=t(93871),k=t(14670),v=o.createElement(d,null),h=o.createElement(l,null),f=o.createElement(m,null),g=o.forwardRef((function(e,n){var t=e.checkedIcon,i=void 0===t?v:t,l=e.classes,d=e.color,u=void 0===d?"secondary":d,m=e.icon,k=void 0===m?h:m,g=e.indeterminate,Z=void 0!==g&&g,C=e.indeterminateIcon,E=void 0===C?f:C,b=e.inputProps,T=e.size,I=void 0===T?"medium":T,y=(0,a.Z)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]),x=Z?E:k,B=Z?E:i;return o.createElement(s.Z,(0,r.Z)({type:"checkbox",classes:{root:(0,c.Z)(l.root,l["color".concat((0,p.Z)(u))],Z&&l.indeterminate),checked:l.checked,disabled:l.disabled},color:u,inputProps:(0,r.Z)({"data-indeterminate":Z},b),icon:o.cloneElement(x,{fontSize:void 0===x.props.fontSize&&"small"===I?I:x.props.fontSize}),checkedIcon:o.cloneElement(B,{fontSize:void 0===B.props.fontSize&&"small"===I?I:B.props.fontSize}),ref:n},y))})),Z=(0,k.Z)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:(0,u.Fq)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:(0,u.Fq)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(g)},56608:function(e,n,t){var r=t(87462),a=t(70885),o=t(45987),c=t(67294),s=(t(45697),t(86010)),i=t(22775),l=t(22601),d=t(14670),u=t(17812),m=c.forwardRef((function(e,n){var t=e.autoFocus,d=e.checked,m=e.checkedIcon,p=e.classes,k=e.className,v=e.defaultChecked,h=e.disabled,f=e.icon,g=e.id,Z=e.inputProps,C=e.inputRef,E=e.name,b=e.onBlur,T=e.onChange,I=e.onFocus,y=e.readOnly,x=e.required,B=e.tabIndex,L=e.type,A=e.value,w=(0,o.Z)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),M=(0,i.Z)({controlled:d,default:Boolean(v),name:"SwitchBase",state:"checked"}),R=(0,a.Z)(M,2),z=R[0],D=R[1],F=(0,l.Z)(),S=h;F&&void 0===S&&(S=F.disabled);var U="checkbox"===L||"radio"===L;return c.createElement(u.Z,(0,r.Z)({component:"span",className:(0,s.Z)(p.root,k,z&&p.checked,S&&p.disabled),disabled:S,tabIndex:null,role:void 0,onFocus:function(e){I&&I(e),F&&F.onFocus&&F.onFocus(e)},onBlur:function(e){b&&b(e),F&&F.onBlur&&F.onBlur(e)},ref:n},w),c.createElement("input",(0,r.Z)({autoFocus:t,checked:d,defaultChecked:v,className:p.input,disabled:S,id:U&&g,name:E,onChange:function(e){var n=e.target.checked;D(n),T&&T(e,n)},readOnly:y,ref:C,required:x,tabIndex:B,type:L,value:A},Z)),z?m:f)}));n.Z=(0,d.Z)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(m)},79756:function(e,n,t){var r=t(95318),a=t(20862);n.Z=void 0;var o=a(t(67294)),c=(0,r(t(2108)).default)(o.createElement("path",{d:"M20 9H4v2h16V9zM4 15h16v-2H4v2z"}),"DragHandle");n.Z=c},50153:function(e,n,t){t.r(n),t.d(n,{default:function(){return ee}});var r=t(67294),a=t(64593),o=t(31753),c=t(13833),s=t(46458);var i=e=>n=>function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return e(n,...r)},l=t(30305),d=t(13665),u=t(53390),m=t(282),p=t(97127),k=t(85315),v=(0,k.vU)({add:{id:"src.components.Reminder.AddTaskButton.add",defaultMessage:"Add"}});var h=e=>{let{addTask:n}=e;return r.createElement(m.Z,{onClick:n,variant:"contained",color:"secondary"},r.createElement(p.Z,v.add))},f=t(62822);var g=e=>{let{children:n}=e;return r.createElement(f.Z,null,n)},Z=t(13258),C=t(17812),E=t(50998),b=t(46869),T=t(81860),I=t(8286),y=t(28428),x=t(79756),B=t(94184),L=t.n(B),A=t(5200),w=t(93379),M=t.n(w),R=t(7795),z=t.n(R),D=t(90569),F=t.n(D),S=t(3565),U=t.n(S),O=t(19216),$=t.n(O),P=t(44589),_=t.n(P),H=t(80627),q={};q.styleTagTransform=_(),q.setAttributes=U(),q.insert=F().bind(null,"head"),q.domAPI=z(),q.insertStyleElement=$();M()(H.Z,q);var j=H.Z&&H.Z.locals?H.Z.locals:void 0,V=(0,k.vU)({enterInUpperBoundCharactersOrLess:{id:"src.components.Reminder.TaskListItem.enterInUpperBoundCharactersOrLess",defaultMessage:"Enter in { upperBound } characters or less."}});var N=e=>{let{value:n,index:t,onChange:a,onDelete:c,validate:s}=e;const[{dragging:i},l,d]=(0,A.c)({type:"TaskListItem",item:{value:n,index:t},isDragging:e=>{const t=e.getItem();return n.isIdenticalTo(t.value)},collect:e=>({dragging:e.isDragging()})}),u=(0,r.useMemo)((()=>L()(j.TaskListItemContainer,{[j.Dragging]:i})),[i]),m=(0,r.useCallback)((e=>{a({content:e.target.value})}),[a]),p=(0,r.useCallback)(((e,n)=>{a({done:e.target.checked})}),[a]),{formatMessage:k}=(0,o.Z)(),v=(0,r.useMemo)((()=>s(n)),[n,s]),h=(0,r.useMemo)((()=>Object.values(v).some((e=>void 0!==e))),[v]),f=(0,r.useMemo)((()=>{var e;if(void 0===v.content)return null;const n=/.* is not between -Infinity and (?<upperBound>\d+) characters\./.exec(v.content.message);return null!==n&&void 0!==(null===(e=n.groups)||void 0===e?void 0:e.upperBound)?k(V.enterInUpperBoundCharactersOrLess,n.groups):null}),[k,v.content]);return r.createElement("div",{ref:d},r.createElement(E.Z,{classes:{container:u}},r.createElement(b.Z,null,r.createElement("div",{ref:l},r.createElement(x.Z,null))),r.createElement(b.Z,null,r.createElement(Z.Z,{color:"primary",checked:n.done,onChange:p})),r.createElement(I.Z,{variant:"standard",fullWidth:!0,value:n.content,onChange:m,disabled:n.done,error:h,helperText:f}),r.createElement(T.Z,null,r.createElement(C.Z,{onClick:c,edge:"end"},r.createElement(y.Z,null)))))},X=t(59240),W=t(46121);var G=e=>{let{children:n,index:t,moveTask:a}=e;const o=(0,r.useRef)(null),[,c]=(0,X.L)({accept:"TaskListItem",hover(e,n){if((0,W.s)(o.current),e.index===t)return;const r=n.getClientOffset();(0,W.s)(r);const c=o.current.getBoundingClientRect(),s=r.y-c.top,i=(c.bottom-c.top)/2;e.index<t&&s<i||e.index>t&&s>i||(a(e.index,t),e.index=t)}});return c(o),r.createElement("div",{ref:o},n)};const Y=(0,d.su)((e=>({content:(0,d.LI)((0,u.rx)({upperBound:140}))(e.content),done:(0,d.LI)(d.jK)(e.done)}))),K={getTasks:l.j9,addTask:l.fv,changeTaskContent:l.Zn,markTaskAsDone:l.BM,markTaskAsUndone:l.fX,deleteTask:l.nu,moveTask:l.bf};var J=(0,s.$j)((e=>{let{reminder:{tasks:n}}=e;return{tasks:n}}),K)((e=>{let{tasks:n,getTasks:t,addTask:a,changeTaskContent:o,markTaskAsDone:c,markTaskAsUndone:s,deleteTask:l,moveTask:d}=e;(0,r.useEffect)((()=>{t()}),[t]);const u=(0,r.useCallback)(((e,n)=>{let{content:t,done:r}=n;void 0!==t&&o(e,t),void 0!==r&&(r?c(e):s(e))}),[o,c,s]);return r.createElement(r.Fragment,null,r.createElement(g,null,n.map(((e,n)=>r.createElement(G,{key:n,index:n,moveTask:d},r.createElement(N,{key:e.id.value,value:e,index:n,onChange:i(u)(e.id),onDelete:i(l)(e.id),validate:Y})))).toArray()),r.createElement(h,{addTask:a}))})),Q=(0,k.vU)({reminder:{id:"src.components.App.ReminderPage.reminder",defaultMessage:"Reminder"}});var ee=(0,c.D)((()=>{const{formatMessage:e}=(0,o.Z)();return r.createElement(r.Fragment,null,r.createElement(a.Z,{title:e(Q.reminder)}),r.createElement(J,null))}))},53390:function(e,n,t){t.d(n,{rx:function(){return o},_z:function(){return s},j5:function(){return c}});var r=t(25818),a=t(13665);const o=e=>{let{lowerBound:n=-1/0,upperBound:t=1/0}=e;return e=>{const o=(0,a.XC)(e);if(n<=o.length&&o.length<=t)return o;throw new Error(r.Z`${o} is not between ${n} and ${t} characters.`)}};function c(e){const n=(0,a.XC)(e);if(!function(e){try{return new URL(e),!0}catch(e){return!1}}(n))throw new Error(r.Z`${n} is not a URL.`);return n}function s(e){const n=(0,a.XC)(e);if(!function(e){return/^GTM-.*$/.test(e)}(n))throw new Error("It does not seem like a GTM container ID.");return n}},80627:function(e,n,t){var r=t(87537),a=t.n(r),o=t(23645),c=t.n(o)()(a());c.push([e.id,".src-components-Reminder-TaskListItem-classes__TaskListItemContainer--qlbWZ.src-components-Reminder-TaskListItem-classes__Dragging--YsS0x {\n  opacity: 0;\n}\n","",{version:3,sources:["webpack://./src/components/Reminder/TaskListItem/classes.css"],names:[],mappings:"AAAA;EACE,UAAU;AACZ",sourcesContent:[".TaskListItemContainer.Dragging {\n  opacity: 0;\n}\n"],sourceRoot:""}]),c.locals={TaskListItemContainer:"src-components-Reminder-TaskListItem-classes__TaskListItemContainer--qlbWZ",Dragging:"src-components-Reminder-TaskListItem-classes__Dragging--YsS0x"},n.Z=c}}]);
//# sourceMappingURL=reminder.f51511bc.js.map