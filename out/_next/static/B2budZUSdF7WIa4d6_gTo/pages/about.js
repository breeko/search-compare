(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{MquD:function(e,t,n){"use strict";var a=n("q1tI"),o=a.createContext({});t.a=o},TaPz:function(e,t,n){"use strict";n.r(t);var a=n("eD//"),o=n("hlFM"),s=n("wb2y"),i=n("wx14"),r=n("Ff2n"),c=n("q1tI"),d=n.n(c),l=(n("17x9"),n("iuhU")),u=n("H2TA"),m=n("VD++"),p=n("ucBr"),h=n("bfFb"),b=n("MquD"),g=n("i8i4"),f="undefined"===typeof window?c.useEffect:c.useLayoutEffect,v=c.forwardRef((function(e,t){var n=e.alignItems,a=void 0===n?"center":n,o=e.autoFocus,s=void 0!==o&&o,d=e.button,u=void 0!==d&&d,v=e.children,k=e.classes,y=e.className,w=e.component,D=e.ContainerComponent,x=void 0===D?"li":D,C=e.ContainerProps,I=(C=void 0===C?{}:C).className,j=Object(r.a)(C,["className"]),q=e.dense,O=void 0!==q&&q,N=e.disabled,E=void 0!==N&&N,F=e.disableGutters,T=void 0!==F&&F,G=e.divider,P=void 0!==G&&G,M=e.focusVisibleClassName,V=e.selected,A=void 0!==V&&V,B=Object(r.a)(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),R=c.useContext(b.a),S={dense:O||R.dense||!1,alignItems:a},_=c.useRef(null);f((function(){s&&_.current&&_.current.focus()}),[s]);var L=c.Children.toArray(v),W=L.length&&Object(p.a)(L[L.length-1],["ListItemSecondaryAction"]),$=c.useCallback((function(e){_.current=g.findDOMNode(e)}),[]),z=Object(h.a)($,t),H=Object(i.a)({className:Object(l.a)(k.root,y,S.dense&&k.dense,!T&&k.gutters,P&&k.divider,E&&k.disabled,u&&k.button,"center"!==a&&k.alignItemsFlexStart,W&&k.secondaryAction,A&&k.selected),disabled:E},B),J=w||"li";return u&&(H.component=w||"div",H.focusVisibleClassName=Object(l.a)(k.focusVisible,M),J=m.a),W?(J=H.component||w?J:"div","li"===x&&("li"===J?J="div":"li"===H.component&&(H.component="div")),c.createElement(b.a.Provider,{value:S},c.createElement(x,Object(i.a)({className:Object(l.a)(k.container,I),ref:z},j),c.createElement(J,H,L),L.pop()))):c.createElement(b.a.Provider,{value:S},c.createElement(J,Object(i.a)({ref:z},H),L))})),k=Object(u.a)((function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}}),{name:"MuiListItem"})(v),y=n("ofer"),w=d.a.createElement,D=function(){var e=[{question:w("span",null,"What is this?"),answer:w("span",null,"This is a site where you can compare search results of google vs that of duck duck go"),key:1},{question:w("span",null,"What's Duck Duck Go (DDG)?"),answer:w("span",null,"Duck Duck Go is a privacy focused search engine. Check them out at ",w("a",{href:"https://duckduckgo.com/"},"https://duckduckgo.com/")),key:2},{question:w("span",null,"Why are the Google/DDG search results are different from what I see when I search?"),answer:w("span",null,"For Duck Duck Go, search-compare searches the html version (e.g. duckduckgo.com/html/?q=search). The results are different than the canonical duckduckgo search, but its easier to scrape. For Google, search-compare uses the main google site (e.g. google.com/search?hl=en&q=search), but it doesn't pass any personally identifiable information."),key:3},{question:w("span",null,"Why are DDG search results sometimes in Russian?"),answer:w("span",null,"I don't know, as mentioned above, I get the results from the html version of DDG (e.g. duckduckgo.com/html/q=search). I tried to look for a way to specify the language or scrape the main site, but it  proved challenging. Feel free to contact me at branko.blagojevic@[google mail provider] or submit a ",w("a",{href:"https://github.com/breeko/search-compare"},"pull request"),"."),key:4},{question:w("span",null,"How do you classify your tags?"),answer:w("span",null,"See ",w("a",{href:"https://github.com/breeko/search-compare/blob/master/utils/tagger.ts"},"tagger.tsx"),"."),key:5}];return w(d.a.Fragment,null,w(a.a,{component:"nav"},e.map((function(e,t){var n=e.question,a=e.answer,i=e.key;return w(o.a,{my:4,key:i},0!==t&&w(s.a,null),w(k,null,w(y.a,{variant:"h5"},n)),w(k,null,w(y.a,{variant:"body1"},a)))}))))};t.default=D},"eD//":function(e,t,n){"use strict";var a=n("wx14"),o=n("Ff2n"),s=n("q1tI"),i=(n("17x9"),n("iuhU")),r=n("H2TA"),c=n("MquD"),d=s.forwardRef((function(e,t){var n=e.children,r=e.classes,d=e.className,l=e.component,u=void 0===l?"ul":l,m=e.dense,p=void 0!==m&&m,h=e.disablePadding,b=void 0!==h&&h,g=e.subheader,f=Object(o.a)(e,["children","classes","className","component","dense","disablePadding","subheader"]),v=s.useMemo((function(){return{dense:p}}),[p]);return s.createElement(c.a.Provider,{value:v},s.createElement(u,Object(a.a)({className:Object(i.a)(r.root,d,p&&r.dense,!b&&r.padding,g&&r.subheader),ref:t},f),g,n))}));t.a=Object(r.a)({root:{listStyle:"none",margin:0,padding:0,position:"relative"},padding:{paddingTop:8,paddingBottom:8},dense:{},subheader:{paddingTop:0}},{name:"MuiList"})(d)},hIud:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n("TaPz")}])},ucBr:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("q1tI");function o(e,t){return a.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)}}},[["hIud",0,1,2,5]]]);