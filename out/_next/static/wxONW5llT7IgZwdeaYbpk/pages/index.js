(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"/EDR":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a("23aj")}])},"23aj":function(e,t,a){"use strict";a.r(t);var o=a("ODXe"),r=a("R/WZ");var n=a("hlFM"),c=a("ofer"),l=a("wx14"),i=a("Ff2n"),s=a("q1tI"),d=a.n(s),p=(a("17x9"),a("iuhU")),m=a("As0B"),u=Object(m.a)(s.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),g=a("H2TA"),b=a("ye/S"),h=a("bfFb"),f=a("NqtD"),y=a("VD++"),v=s.forwardRef((function(e,t){var a=e.avatar,o=e.classes,r=e.className,n=e.clickable,c=e.color,d=void 0===c?"default":c,m=e.component,g=e.deleteIcon,b=e.disabled,v=void 0!==b&&b,k=e.icon,x=e.label,O=e.onClick,j=e.onDelete,C=e.onKeyUp,w=e.size,S=void 0===w?"medium":w,R=e.variant,N=void 0===R?"default":R,E=Object(i.a)(e,["avatar","classes","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyUp","size","variant"]),D=s.useRef(null),T=Object(h.a)(D,t),$=function(e){e.stopPropagation(),j&&j(e)},z=!(!1===n||!O)||n,I="small"===S,P=m||(z?y.a:"div"),L=P===y.a?{component:"div"}:{},H=null;if(j){var M=Object(p.a)("default"!==d&&("default"===N?o["deleteIconColor".concat(Object(f.a)(d))]:o["deleteIconOutlinedColor".concat(Object(f.a)(d))]),I&&o.deleteIconSmall);H=g&&s.isValidElement(g)?s.cloneElement(g,{className:Object(p.a)(g.props.className,o.deleteIcon,M),onClick:$}):s.createElement(u,{className:Object(p.a)(o.deleteIcon,M),onClick:$})}var A=null;a&&s.isValidElement(a)&&(A=s.cloneElement(a,{className:Object(p.a)(o.avatar,a.props.className,I&&o.avatarSmall,"default"!==d&&o["avatarColor".concat(Object(f.a)(d))])}));var F=null;return k&&s.isValidElement(k)&&(F=s.cloneElement(k,{className:Object(p.a)(o.icon,k.props.className,I&&o.iconSmall,"default"!==d&&o["iconColor".concat(Object(f.a)(d))])})),s.createElement(P,Object(l.a)({role:z||j?"button":void 0,className:Object(p.a)(o.root,r,"default"!==d&&[o["color".concat(Object(f.a)(d))],z&&o["clickableColor".concat(Object(f.a)(d))],j&&o["deletableColor".concat(Object(f.a)(d))]],"default"!==N&&[o.outlined,{primary:o.outlinedPrimary,secondary:o.outlinedSecondary}[d]],v&&o.disabled,I&&o.sizeSmall,z&&o.clickable,j&&o.deletable),"aria-disabled":!!v||void 0,tabIndex:z||j?0:void 0,onClick:O,onKeyUp:function(e){if(C&&C(e),e.currentTarget===e.target){var t=e.key;!j||"Backspace"!==t&&"Delete"!==t?"Escape"===t&&D.current&&D.current.blur():j(e)}},ref:T},L,E),A||F,s.createElement("span",{className:Object(p.a)(o.label,I&&o.labelSmall)},x),H)})),k=Object(g.a)((function(e){var t="light"===e.palette.type?e.palette.grey[300]:e.palette.grey[700],a=Object(b.c)(e.palette.text.primary,.26);return{root:{fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:e.palette.getContrastText(t),backgroundColor:t,borderRadius:16,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:"none",padding:0,verticalAlign:"middle",boxSizing:"border-box","&$disabled":{opacity:.5,pointerEvents:"none"},"& $avatar":{marginLeft:5,marginRight:-6,width:24,height:24,color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],fontSize:e.typography.pxToRem(12)},"& $avatarColorPrimary":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark},"& $avatarColorSecondary":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.dark},"& $avatarSmall":{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)}},sizeSmall:{height:24},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},disabled:{},clickable:{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover, &:focus":{backgroundColor:Object(b.b)(t,.08)},"&:active":{boxShadow:e.shadows[1]}},clickableColorPrimary:{"&:hover, &:focus":{backgroundColor:Object(b.b)(e.palette.primary.main,.08)}},clickableColorSecondary:{"&:hover, &:focus":{backgroundColor:Object(b.b)(e.palette.secondary.main,.08)}},deletable:{"&:focus":{backgroundColor:Object(b.b)(t,.08)}},deletableColorPrimary:{"&:focus":{backgroundColor:Object(b.b)(e.palette.primary.main,.2)}},deletableColorSecondary:{"&:focus":{backgroundColor:Object(b.b)(e.palette.secondary.main,.2)}},outlined:{backgroundColor:"transparent",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(b.c)(e.palette.text.primary,e.palette.action.hoverOpacity)},"& $avatar":{marginLeft:4},"& $avatarSmall":{marginLeft:2},"& $icon":{marginLeft:4},"& $iconSmall":{marginLeft:2},"& $deleteIcon":{marginRight:5},"& $deleteIconSmall":{marginRight:3}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(e.palette.primary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(b.c)(e.palette.primary.main,e.palette.action.hoverOpacity)}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(e.palette.secondary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(b.c)(e.palette.secondary.main,e.palette.action.hoverOpacity)}},avatar:{},avatarSmall:{},avatarColorPrimary:{},avatarColorSecondary:{},icon:{color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],marginLeft:5,marginRight:-6},iconSmall:{width:18,height:18,marginLeft:4,marginRight:-4},iconColorPrimary:{color:"inherit"},iconColorSecondary:{color:"inherit"},label:{overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},labelSmall:{paddingLeft:8,paddingRight:8},deleteIcon:{WebkitTapHighlightColor:"transparent",color:a,height:22,width:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:Object(b.c)(a,.4)}},deleteIconSmall:{height:16,width:16,marginRight:4,marginLeft:-4},deleteIconColorPrimary:{color:Object(b.c)(e.palette.primary.contrastText,.7),"&:hover, &:active":{color:e.palette.primary.contrastText}},deleteIconColorSecondary:{color:Object(b.c)(e.palette.secondary.contrastText,.7),"&:hover, &:active":{color:e.palette.secondary.contrastText}},deleteIconOutlinedColorPrimary:{color:Object(b.c)(e.palette.primary.main,.7),"&:hover, &:active":{color:e.palette.primary.main}},deleteIconOutlinedColorSecondary:{color:Object(b.c)(e.palette.secondary.main,.7),"&:hover, &:active":{color:e.palette.secondary.main}}}}),{name:"MuiChip"})(v),x=a("wb2y");function O(e){var t,a,o;return t=e,a=0,o=1,e=(Math.min(Math.max(a,t),o)-a)/(o-a),e=(e-=1)*e*e+1}var j=s.forwardRef((function(e,t){var a,o=e.classes,r=e.className,n=e.color,c=void 0===n?"primary":n,d=e.disableShrink,m=void 0!==d&&d,u=e.size,g=void 0===u?40:u,b=e.style,h=e.thickness,y=void 0===h?3.6:h,v=e.value,k=void 0===v?0:v,x=e.variant,j=void 0===x?"indeterminate":x,C=Object(i.a)(e,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),w={},S={},R={};if("determinate"===j||"static"===j){var N=2*Math.PI*((44-y)/2);w.strokeDasharray=N.toFixed(3),R["aria-valuenow"]=Math.round(k),"static"===j?(w.strokeDashoffset="".concat(((100-k)/100*N).toFixed(3),"px"),S.transform="rotate(-90deg)"):(w.strokeDashoffset="".concat((a=(100-k)/100,a*a*N).toFixed(3),"px"),S.transform="rotate(".concat((270*O(k/70)).toFixed(3),"deg)"))}return s.createElement("div",Object(l.a)({className:Object(p.a)(o.root,r,"inherit"!==c&&o["color".concat(Object(f.a)(c))],{indeterminate:o.indeterminate,static:o.static}[j]),style:Object(l.a)({width:g,height:g},S,{},b),ref:t,role:"progressbar"},R,C),s.createElement("svg",{className:o.svg,viewBox:"".concat(22," ").concat(22," ").concat(44," ").concat(44)},s.createElement("circle",{className:Object(p.a)(o.circle,m&&o.circleDisableShrink,{indeterminate:o.circleIndeterminate,static:o.circleStatic}[j]),style:w,cx:44,cy:44,r:(44-y)/2,fill:"none",strokeWidth:y})))})),C=Object(g.a)((function(e){return{root:{display:"inline-block"},static:{transition:e.transitions.create("transform")},indeterminate:{animation:"$circular-rotate 1.4s linear infinite"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},svg:{display:"block"},circle:{stroke:"currentColor"},circleStatic:{transition:e.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"$circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},"@keyframes circular-rotate":{"100%":{transform:"rotate(360deg)"}},"@keyframes circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}}),{name:"MuiCircularProgress",flip:!1})(j),w=a("kKAo"),S=s.forwardRef((function(e,t){var a=e.classes,o=e.className,r=e.component,n=void 0===r?"div":r,c=Object(i.a)(e,["classes","className","component"]);return s.createElement(n,Object(l.a)({ref:t,className:Object(p.a)(a.root,o)},c))})),R=Object(g.a)({root:{width:"100%",overflowX:"auto"}},{name:"MuiTableContainer"})(S);var N=s.createContext(),E=s.forwardRef((function(e,t){var a=e.classes,o=e.className,r=e.component,n=void 0===r?"table":r,c=e.padding,d=void 0===c?"default":c,m=e.size,u=void 0===m?"medium":m,g=e.stickyHeader,b=void 0!==g&&g,h=Object(i.a)(e,["classes","className","component","padding","size","stickyHeader"]),f=s.useMemo((function(){return{padding:d,size:u,stickyHeader:b}}),[d,u,b]);return s.createElement(N.Provider,{value:f},s.createElement(n,Object(l.a)({ref:t,className:Object(p.a)(a.root,o,b&&a.stickyHeader)},h)))})),D=Object(g.a)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(l.a)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(E);var T=s.createContext(),$={variant:"head"},z=s.forwardRef((function(e,t){var a=e.classes,o=e.className,r=e.component,n=void 0===r?"thead":r,c=Object(i.a)(e,["classes","className","component"]);return s.createElement(T.Provider,{value:$},s.createElement(n,Object(l.a)({className:Object(p.a)(a.root,o),ref:t},c)))})),I=Object(g.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(z),P=s.forwardRef((function(e,t){var a=e.classes,o=e.className,r=e.component,n=void 0===r?"tr":r,c=e.hover,d=void 0!==c&&c,m=e.selected,u=void 0!==m&&m,g=Object(i.a)(e,["classes","className","component","hover","selected"]),b=s.useContext(T);return s.createElement(n,Object(l.a)({ref:t,className:Object(p.a)(a.root,o,b&&{head:a.head,footer:a.footer}[b.variant],d&&a.hover,u&&a.selected)},g))})),L=Object(g.a)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected,&$selected:hover":{backgroundColor:Object(b.c)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(P),H=s.forwardRef((function(e,t){var a,o=e.align,r=void 0===o?"inherit":o,n=e.classes,c=e.className,d=e.component,m=e.padding,u=e.scope,g=e.size,b=e.sortDirection,h=e.variant,y=Object(i.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),v=s.useContext(N),k=s.useContext(T);a=d||(k&&"head"===k.variant?"th":"td");var x=u;!x&&k&&"head"===k.variant&&(x="col");var O=m||(v&&v.padding?v.padding:"default"),j=g||(v&&v.size?v.size:"medium"),C=h||k&&k.variant,w=null;return b&&(w="asc"===b?"ascending":"descending"),s.createElement(a,Object(l.a)({ref:t,className:Object(p.a)(n.root,n[C],c,"inherit"!==r&&n["align".concat(Object(f.a)(r))],"default"!==O&&n["padding".concat(Object(f.a)(O))],"medium"!==j&&n["size".concat(Object(f.a)(j))],"head"===C&&v&&v.stickyHeader&&n.stickyHeader),"aria-sort":w,scope:x},y))})),M=Object(g.a)((function(e){return{root:Object(l.a)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(b.e)(Object(b.c)(e.palette.divider,1),.88):Object(b.a)(Object(b.c)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0px 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(H),A={variant:"body"},F=s.forwardRef((function(e,t){var a=e.classes,o=e.className,r=e.component,n=void 0===r?"tbody":r,c=Object(i.a)(e,["classes","className","component"]);return s.createElement(T.Provider,{value:A},s.createElement(n,Object(l.a)({className:Object(p.a)(a.root,o),ref:t},c)))})),W=Object(g.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(F),B=a("KQm4"),_=(a("AsxP"),function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),o=1;o<t;o++)a[o-1]=arguments[o];return e.map((function(e,t){return a.reduce((function(e,a){return[].concat(Object(B.a)(e),[a[t]])}),[e])}))}),K=a("V84B"),V=d.a.createElement,U=function(e){var t=e.title,a=e.link,o=e.desc,r=e.tags,n=a&&a.length>48?a.slice(0,45)+"...":a;return V(d.a.Fragment,{key:t+a+o},V("a",{href:a},V("span",{style:{fontWeight:"bold"}},t)),V("br",null),null!==a&&V(c.a,{variant:"caption"},n),V("div",null,r.map((function(e){var t=Object(K.a)(e),a=t.backgroundColor,o=t.textColor;return V(k,{key:e,style:{backgroundColor:a,color:o,margin:"2px"},label:e})}))),V(c.a,{paragraph:!0,variant:"body1"},o))},X=d.a.createElement,J=function(e){var t=e.resultsLeft,a=e.resultsRight;if(0===t.length&&0===a.length)return null;var r=_(t,a);return 0===r.length?null:X(R,{component:w.a},X(D,{stickyHeader:!0},X(I,null,X(L,null,X(M,{align:"center"},"Rank"),X(M,{align:"center"},"Google"),X(M,{align:"center"},"DuckDuckGo"))),X(W,null,r.map((function(e,t){var a=Object(o.a)(e,2),r=a[0],n=a[1];return void 0!==n&&void 0!==r&&X(L,{key:"".concat(r.title).concat(n.title)},X(M,{component:"th",scope:"row",style:{width:"2%"}},t+1),X(M,{style:{width:"45%"}},r&&X(U,{title:r.title,link:r.link,desc:r.desc,tags:r.tags})),X(M,{style:{width:"45%"}},n&&X(U,{title:n.title,link:n.link,desc:n.desc,tags:n.tags})))})))))},q=a("Hym3"),G=d.a.createElement,Q=function(){var e=Object(s.useContext)(q.a),t=Object(r.a)((function(e){return{root:{flexWrap:"wrap","& > *":{margin:e.spacing(.5)}},suggestions:{display:"inline-block",flexWrap:"wrap",margin:e.spacing(.5),"& > *":{fontSize:14,margin:e.spacing(.5)}}}}))();return G(d.a.Fragment,null,G(n.a,{my:4,style:{display:"inline-block"}},Object.entries({general:["ddg","google","fb","st patricks in 2022","date of ny marathon"],news:["2008 crisis","corona virus"],politics:["trump","sanders","biden","republicans","democrats","trump russia","sanders cuba"],shopping:["buy tv","best cell phone","flights","mortgage rates"],conspiracy:["are vacccines dangerous","flat earth","bush 9/11","jfk assassination","clinton body count","moon landing"],entertainment:["eminem fast song","news guy spider man actor"],programming:["css center text","implicits scala 3.0","regex match .com","tsfiddle","nextjs source map"]}).map((function(a){var r=Object(o.a)(a,2),n=r[0],l=r[1];return G(w.a,{key:n,className:t.suggestions},G(c.a,{color:"textSecondary",gutterBottom:!0},n),l.map((function(t){return G(k,{key:"".concat(n).concat(t),style:{margin:10},label:t,onClick:function(){e.setSearch(t),e.runSearch(t)}})})))}))),G(x.a,null),G(n.a,{my:4},e.isLoading&&G(C,null),void 0!==e.googleResults&&void 0!==e.ddgResults&&G(J,{resultsLeft:e.googleResults,resultsRight:e.ddgResults})))};t.default=function(){return G(d.a.Fragment,null,G(Q,null))}}},[["/EDR",0,1,2,5,3]]]);