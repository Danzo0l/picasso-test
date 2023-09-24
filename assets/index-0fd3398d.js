import{j as R,L as de,r as b,u as ue}from"./index-485f2182.js";function k(){return k=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(i[o]=n[o])}return i},k.apply(this,arguments)}const he=i=>R.jsx(de,{className:"text-green-500 m-1 text-lg hover:text-sky-400",to:"/picasso-test/details/"+i.id,children:R.jsx("p",{children:"Details"})}),fe=i=>R.jsxs("div",{style:i.style,className:"w-auto border-solid border-b-2 my-2 overflow-hidden",children:[R.jsxs("section",{className:"w-full flex justify-between",children:[R.jsx("h4",{className:"text-lg text-ellipsis overflow-hidden whitespace-nowrap p-2",children:i.id+" "+i.title}),R.jsx(he,{id:i.id})]}),R.jsx("p",{className:"text-ellipsis overflow-hidden whitespace-nowrap mt-1 p-2",children:i.body})]});function K(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function j(i,e){return j=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,s){return o.__proto__=s,o},j(i,e)}function me(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,j(i,e)}var $=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function pe(i,e){return!!(i===e||$(i)&&$(e))}function ge(i,e){if(i.length!==e.length)return!1;for(var n=0;n<i.length;n++)if(!pe(i[n],e[n]))return!1;return!0}function F(i,e){e===void 0&&(e=ge);var n,o=[],s,S=!1;function g(){for(var u=[],d=0;d<arguments.length;d++)u[d]=arguments[d];return S&&n===this&&e(u,o)||(s=i.apply(this,u),S=!0,n=this,o=u),s}return g}var _e=typeof performance=="object"&&typeof performance.now=="function",G=_e?function(){return performance.now()}:function(){return Date.now()};function Q(i){cancelAnimationFrame(i.id)}function ve(i,e){var n=G();function o(){G()-n>=e?i.call(null):s.id=requestAnimationFrame(o)}var s={id:requestAnimationFrame(o)};return s}var M=-1;function J(i){if(i===void 0&&(i=!1),M===-1||i){var e=document.createElement("div"),n=e.style;n.width="50px",n.height="50px",n.overflow="scroll",document.body.appendChild(e),M=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return M}var L=null;function X(i){if(i===void 0&&(i=!1),L===null||i){var e=document.createElement("div"),n=e.style;n.width="50px",n.height="50px",n.overflow="scroll",n.direction="rtl";var o=document.createElement("div"),s=o.style;return s.width="100px",s.height="100px",e.appendChild(o),document.body.appendChild(e),e.scrollLeft>0?L="positive-descending":(e.scrollLeft=1,e.scrollLeft===0?L="negative":L="positive-ascending"),document.body.removeChild(e),L}return L}var Se=150,Ie=function(e,n){return e};function ze(i){var e,n=i.getItemOffset,o=i.getEstimatedTotalSize,s=i.getItemSize,S=i.getOffsetForIndexAndAlignment,g=i.getStartIndexForOffset,u=i.getStopIndexForStartIndex,d=i.initInstanceProps,_=i.shouldResetStyleCacheOnItemSizeChange,I=i.validateProps;return e=function(p){me(r,p);function r(h){var t;return t=p.call(this,h)||this,t._instanceProps=d(t.props,K(t)),t._outerRef=void 0,t._resetIsScrollingTimeoutId=null,t.state={instance:K(t),isScrolling:!1,scrollDirection:"forward",scrollOffset:typeof t.props.initialScrollOffset=="number"?t.props.initialScrollOffset:0,scrollUpdateWasRequested:!1},t._callOnItemsRendered=void 0,t._callOnItemsRendered=F(function(l,a,c,m){return t.props.onItemsRendered({overscanStartIndex:l,overscanStopIndex:a,visibleStartIndex:c,visibleStopIndex:m})}),t._callOnScroll=void 0,t._callOnScroll=F(function(l,a,c){return t.props.onScroll({scrollDirection:l,scrollOffset:a,scrollUpdateWasRequested:c})}),t._getItemStyle=void 0,t._getItemStyle=function(l){var a=t.props,c=a.direction,m=a.itemSize,z=a.layout,v=t._getItemStyleCache(_&&m,_&&z,_&&c),y;if(v.hasOwnProperty(l))y=v[l];else{var x=n(t.props,l,t._instanceProps),T=s(t.props,l,t._instanceProps),O=c==="horizontal"||z==="horizontal",C=c==="rtl",E=O?x:0;v[l]=y={position:"absolute",left:C?void 0:E,right:C?E:void 0,top:O?0:x,height:O?"100%":T,width:O?T:"100%"}}return y},t._getItemStyleCache=void 0,t._getItemStyleCache=F(function(l,a,c){return{}}),t._onScrollHorizontal=function(l){var a=l.currentTarget,c=a.clientWidth,m=a.scrollLeft,z=a.scrollWidth;t.setState(function(v){if(v.scrollOffset===m)return null;var y=t.props.direction,x=m;if(y==="rtl")switch(X()){case"negative":x=-m;break;case"positive-descending":x=z-c-m;break}return x=Math.max(0,Math.min(x,z-c)),{isScrolling:!0,scrollDirection:v.scrollOffset<m?"forward":"backward",scrollOffset:x,scrollUpdateWasRequested:!1}},t._resetIsScrollingDebounced)},t._onScrollVertical=function(l){var a=l.currentTarget,c=a.clientHeight,m=a.scrollHeight,z=a.scrollTop;t.setState(function(v){if(v.scrollOffset===z)return null;var y=Math.max(0,Math.min(z,m-c));return{isScrolling:!0,scrollDirection:v.scrollOffset<y?"forward":"backward",scrollOffset:y,scrollUpdateWasRequested:!1}},t._resetIsScrollingDebounced)},t._outerRefSetter=function(l){var a=t.props.outerRef;t._outerRef=l,typeof a=="function"?a(l):a!=null&&typeof a=="object"&&a.hasOwnProperty("current")&&(a.current=l)},t._resetIsScrollingDebounced=function(){t._resetIsScrollingTimeoutId!==null&&Q(t._resetIsScrollingTimeoutId),t._resetIsScrollingTimeoutId=ve(t._resetIsScrolling,Se)},t._resetIsScrolling=function(){t._resetIsScrollingTimeoutId=null,t.setState({isScrolling:!1},function(){t._getItemStyleCache(-1,null)})},t}r.getDerivedStateFromProps=function(t,l){return ye(t,l),I(t),null};var f=r.prototype;return f.scrollTo=function(t){t=Math.max(0,t),this.setState(function(l){return l.scrollOffset===t?null:{scrollDirection:l.scrollOffset<t?"forward":"backward",scrollOffset:t,scrollUpdateWasRequested:!0}},this._resetIsScrollingDebounced)},f.scrollToItem=function(t,l){l===void 0&&(l="auto");var a=this.props,c=a.itemCount,m=a.layout,z=this.state.scrollOffset;t=Math.max(0,Math.min(t,c-1));var v=0;if(this._outerRef){var y=this._outerRef;m==="vertical"?v=y.scrollWidth>y.clientWidth?J():0:v=y.scrollHeight>y.clientHeight?J():0}this.scrollTo(S(this.props,t,l,z,this._instanceProps,v))},f.componentDidMount=function(){var t=this.props,l=t.direction,a=t.initialScrollOffset,c=t.layout;if(typeof a=="number"&&this._outerRef!=null){var m=this._outerRef;l==="horizontal"||c==="horizontal"?m.scrollLeft=a:m.scrollTop=a}this._callPropsCallbacks()},f.componentDidUpdate=function(){var t=this.props,l=t.direction,a=t.layout,c=this.state,m=c.scrollOffset,z=c.scrollUpdateWasRequested;if(z&&this._outerRef!=null){var v=this._outerRef;if(l==="horizontal"||a==="horizontal")if(l==="rtl")switch(X()){case"negative":v.scrollLeft=-m;break;case"positive-ascending":v.scrollLeft=m;break;default:var y=v.clientWidth,x=v.scrollWidth;v.scrollLeft=x-y-m;break}else v.scrollLeft=m;else v.scrollTop=m}this._callPropsCallbacks()},f.componentWillUnmount=function(){this._resetIsScrollingTimeoutId!==null&&Q(this._resetIsScrollingTimeoutId)},f.render=function(){var t=this.props,l=t.children,a=t.className,c=t.direction,m=t.height,z=t.innerRef,v=t.innerElementType,y=t.innerTagName,x=t.itemCount,T=t.itemData,O=t.itemKey,C=O===void 0?Ie:O,E=t.layout,ie=t.outerElementType,ne=t.outerTagName,re=t.style,se=t.useIsScrolling,oe=t.width,D=this.state.isScrolling,P=c==="horizontal"||E==="horizontal",ae=P?this._onScrollHorizontal:this._onScrollVertical,q=this._getRangeToRender(),le=q[0],ce=q[1],B=[];if(x>0)for(var N=le;N<=ce;N++)B.push(b.createElement(l,{data:T,key:C(N,T),index:N,isScrolling:se?D:void 0,style:this._getItemStyle(N)}));var V=o(this.props,this._instanceProps);return b.createElement(ie||ne||"div",{className:a,onScroll:ae,ref:this._outerRefSetter,style:k({position:"relative",height:m,width:oe,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:c},re)},b.createElement(v||y||"div",{children:B,ref:z,style:{height:P?"100%":V,pointerEvents:D?"none":void 0,width:P?V:"100%"}}))},f._callPropsCallbacks=function(){if(typeof this.props.onItemsRendered=="function"){var t=this.props.itemCount;if(t>0){var l=this._getRangeToRender(),a=l[0],c=l[1],m=l[2],z=l[3];this._callOnItemsRendered(a,c,m,z)}}if(typeof this.props.onScroll=="function"){var v=this.state,y=v.scrollDirection,x=v.scrollOffset,T=v.scrollUpdateWasRequested;this._callOnScroll(y,x,T)}},f._getRangeToRender=function(){var t=this.props,l=t.itemCount,a=t.overscanCount,c=this.state,m=c.isScrolling,z=c.scrollDirection,v=c.scrollOffset;if(l===0)return[0,0,0,0];var y=g(this.props,v,this._instanceProps),x=u(this.props,y,v,this._instanceProps),T=!m||z==="backward"?Math.max(1,a):1,O=!m||z==="forward"?Math.max(1,a):1;return[Math.max(0,y-T),Math.max(0,Math.min(l-1,x+O)),y,x]},r}(b.PureComponent),e.defaultProps={direction:"ltr",itemData:void 0,layout:"vertical",overscanCount:2,useIsScrolling:!1},e}var ye=function(e,n){e.children,e.direction,e.height,e.layout,e.innerTagName,e.outerTagName,e.width,n.instance},xe=ze({getItemOffset:function(e,n){var o=e.itemSize;return n*o},getItemSize:function(e,n){var o=e.itemSize;return o},getEstimatedTotalSize:function(e){var n=e.itemCount,o=e.itemSize;return o*n},getOffsetForIndexAndAlignment:function(e,n,o,s,S,g){var u=e.direction,d=e.height,_=e.itemCount,I=e.itemSize,p=e.layout,r=e.width,f=u==="horizontal"||p==="horizontal",h=f?r:d,t=Math.max(0,_*I-h),l=Math.min(t,n*I),a=Math.max(0,n*I-h+I+g);switch(o==="smart"&&(s>=a-h&&s<=l+h?o="auto":o="center"),o){case"start":return l;case"end":return a;case"center":{var c=Math.round(a+(l-a)/2);return c<Math.ceil(h/2)?0:c>t+Math.floor(h/2)?t:c}case"auto":default:return s>=a&&s<=l?s:s<a?a:l}},getStartIndexForOffset:function(e,n){var o=e.itemCount,s=e.itemSize;return Math.max(0,Math.min(o-1,Math.floor(n/s)))},getStopIndexForStartIndex:function(e,n,o){var s=e.direction,S=e.height,g=e.itemCount,u=e.itemSize,d=e.layout,_=e.width,I=s==="horizontal"||d==="horizontal",p=n*u,r=I?_:S,f=Math.ceil((r+o-p)/u);return Math.max(0,Math.min(g-1,n+f-1))},initInstanceProps:function(e){},shouldResetStyleCacheOnItemSizeChange:!0,validateProps:function(e){e.itemSize}});function Re(i){var e=i.lastRenderedStartIndex,n=i.lastRenderedStopIndex,o=i.startIndex,s=i.stopIndex;return!(o>n||s<e)}function be(i){for(var e=i.isItemLoaded,n=i.itemCount,o=i.minimumBatchSize,s=i.startIndex,S=i.stopIndex,g=[],u=null,d=null,_=s;_<=S;_++){var I=e(_);I?d!==null&&(g.push(u,d),u=d=null):(d=_,u===null&&(u=_))}if(d!==null){for(var p=Math.min(Math.max(d,u+o-1),n-1),r=d+1;r<=p&&!e(r);r++)d=r;g.push(u,d)}if(g.length)for(;g[1]-g[0]+1<o&&g[0]>0;){var f=g[0]-1;if(!e(f))g[0]=f;else break}return g}var we=function(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")},Te=function(){function i(e,n){for(var o=0;o<n.length;o++){var s=n[o];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(e,n,o){return n&&i(e.prototype,n),o&&i(e,o),e}}(),Oe=function(i,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);i.prototype=Object.create(e&&e.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(i,e):i.__proto__=e)},Y=function(i,e){if(!i)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:i},Le=function(i){Oe(e,i);function e(){var n,o,s,S;we(this,e);for(var g=arguments.length,u=Array(g),d=0;d<g;d++)u[d]=arguments[d];return S=(o=(s=Y(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this].concat(u))),s),s._lastRenderedStartIndex=-1,s._lastRenderedStopIndex=-1,s._memoizedUnloadedRanges=[],s._onItemsRendered=function(_){var I=_.visibleStartIndex,p=_.visibleStopIndex;s._lastRenderedStartIndex=I,s._lastRenderedStopIndex=p,s._ensureRowsLoaded(I,p)},s._setRef=function(_){s._listRef=_},o),Y(s,S)}return Te(e,[{key:"resetloadMoreItemsCache",value:function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;this._memoizedUnloadedRanges=[],o&&this._ensureRowsLoaded(this._lastRenderedStartIndex,this._lastRenderedStopIndex)}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var o=this.props.children;return o({onItemsRendered:this._onItemsRendered,ref:this._setRef})}},{key:"_ensureRowsLoaded",value:function(o,s){var S=this.props,g=S.isItemLoaded,u=S.itemCount,d=S.minimumBatchSize,_=d===void 0?10:d,I=S.threshold,p=I===void 0?15:I,r=be({isItemLoaded:g,itemCount:u,minimumBatchSize:_,startIndex:Math.max(0,o-p),stopIndex:Math.min(u-1,s+p)});(this._memoizedUnloadedRanges.length!==r.length||this._memoizedUnloadedRanges.some(function(f,h){return r[h]!==f}))&&(this._memoizedUnloadedRanges=r,this._loadUnloadedRanges(r))}},{key:"_loadUnloadedRanges",value:function(o){for(var s=this,S=this.props.loadMoreItems||this.props.loadMoreRows,g=function(_){var I=o[_],p=o[_+1],r=S(I,p);r!=null&&r.then(function(){if(Re({lastRenderedStartIndex:s._lastRenderedStartIndex,lastRenderedStopIndex:s._lastRenderedStopIndex,startIndex:I,stopIndex:p})){if(s._listRef==null)return;typeof s._listRef.resetAfterIndex=="function"?s._listRef.resetAfterIndex(I,!0):(typeof s._listRef._getItemStyleCache=="function"&&s._listRef._getItemStyleCache(-1),s._listRef.forceUpdate())}})},u=0;u<o.length;u+=2)g(u)}}]),e}(b.PureComponent);let w;typeof window<"u"?w=window:typeof self<"u"?w=self:w=global;let U=null,H=null;const Z=20,W=w.clearTimeout,ee=w.setTimeout,A=w.cancelAnimationFrame||w.mozCancelAnimationFrame||w.webkitCancelAnimationFrame,te=w.requestAnimationFrame||w.mozRequestAnimationFrame||w.webkitRequestAnimationFrame;A==null||te==null?(U=W,H=function(e){return ee(e,Z)}):(U=function([e,n]){A(e),W(n)},H=function(e){const n=te(function(){W(o),e()}),o=ee(function(){A(n),e()},Z);return[n,o]});function Ne(i){let e,n,o,s,S,g,u;const d=typeof document<"u"&&document.attachEvent;if(!d){g=function(a){const c=a.__resizeTriggers__,m=c.firstElementChild,z=c.lastElementChild,v=m.firstElementChild;z.scrollLeft=z.scrollWidth,z.scrollTop=z.scrollHeight,v.style.width=m.offsetWidth+1+"px",v.style.height=m.offsetHeight+1+"px",m.scrollLeft=m.scrollWidth,m.scrollTop=m.scrollHeight},S=function(a){return a.offsetWidth!==a.__resizeLast__.width||a.offsetHeight!==a.__resizeLast__.height},u=function(a){if(a.target.className&&typeof a.target.className.indexOf=="function"&&a.target.className.indexOf("contract-trigger")<0&&a.target.className.indexOf("expand-trigger")<0)return;const c=this;g(this),this.__resizeRAF__&&U(this.__resizeRAF__),this.__resizeRAF__=H(function(){S(c)&&(c.__resizeLast__.width=c.offsetWidth,c.__resizeLast__.height=c.offsetHeight,c.__resizeListeners__.forEach(function(v){v.call(c,a)}))})};let r=!1,f="";o="animationstart";const h="Webkit Moz O ms".split(" ");let t="webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "),l="";{const a=document.createElement("fakeelement");if(a.style.animationName!==void 0&&(r=!0),r===!1){for(let c=0;c<h.length;c++)if(a.style[h[c]+"AnimationName"]!==void 0){l=h[c],f="-"+l.toLowerCase()+"-",o=t[c],r=!0;break}}}n="resizeanim",e="@"+f+"keyframes "+n+" { from { opacity: 0; } to { opacity: 0; } } ",s=f+"animation: 1ms "+n+"; "}const _=function(r){if(!r.getElementById("detectElementResize")){const f=(e||"")+".resize-triggers { "+(s||"")+'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',h=r.head||r.getElementsByTagName("head")[0],t=r.createElement("style");t.id="detectElementResize",t.type="text/css",i!=null&&t.setAttribute("nonce",i),t.styleSheet?t.styleSheet.cssText=f:t.appendChild(r.createTextNode(f)),h.appendChild(t)}};return{addResizeListener:function(r,f){if(d)r.attachEvent("onresize",f);else{if(!r.__resizeTriggers__){const h=r.ownerDocument,t=w.getComputedStyle(r);t&&t.position==="static"&&(r.style.position="relative"),_(h),r.__resizeLast__={},r.__resizeListeners__=[],(r.__resizeTriggers__=h.createElement("div")).className="resize-triggers";const l=h.createElement("div");l.className="expand-trigger",l.appendChild(h.createElement("div"));const a=h.createElement("div");a.className="contract-trigger",r.__resizeTriggers__.appendChild(l),r.__resizeTriggers__.appendChild(a),r.appendChild(r.__resizeTriggers__),g(r),r.addEventListener("scroll",u,!0),o&&(r.__resizeTriggers__.__animationListener__=function(m){m.animationName===n&&g(r)},r.__resizeTriggers__.addEventListener(o,r.__resizeTriggers__.__animationListener__))}r.__resizeListeners__.push(f)}},removeResizeListener:function(r,f){if(d)r.detachEvent("onresize",f);else if(r.__resizeListeners__.splice(r.__resizeListeners__.indexOf(f),1),!r.__resizeListeners__.length){r.removeEventListener("scroll",u,!0),r.__resizeTriggers__.__animationListener__&&(r.__resizeTriggers__.removeEventListener(o,r.__resizeTriggers__.__animationListener__),r.__resizeTriggers__.__animationListener__=null);try{r.__resizeTriggers__=!r.removeChild(r.__resizeTriggers__)}catch{}}}}}class Ce extends b.Component{constructor(...e){super(...e),this.state={height:this.props.defaultHeight||0,scaledHeight:this.props.defaultHeight||0,scaledWidth:this.props.defaultWidth||0,width:this.props.defaultWidth||0},this._autoSizer=null,this._detectElementResize=null,this._parentNode=null,this._resizeObserver=null,this._timeoutId=null,this._onResize=()=>{this._timeoutId=null;const{disableHeight:n,disableWidth:o,onResize:s}=this.props;if(this._parentNode){var S,g,u,d;const _=window.getComputedStyle(this._parentNode)||{},I=parseFloat((S=_.paddingLeft)!==null&&S!==void 0?S:"0"),p=parseFloat((g=_.paddingRight)!==null&&g!==void 0?g:"0"),r=parseFloat((u=_.paddingTop)!==null&&u!==void 0?u:"0"),f=parseFloat((d=_.paddingBottom)!==null&&d!==void 0?d:"0"),h=this._parentNode.getBoundingClientRect(),t=h.height-r-f,l=h.width-I-p,a=this._parentNode.offsetHeight-r-f,c=this._parentNode.offsetWidth-I-p;(!n&&(this.state.height!==a||this.state.scaledHeight!==t)||!o&&(this.state.width!==c||this.state.scaledWidth!==l))&&(this.setState({height:a,width:c,scaledHeight:t,scaledWidth:l}),typeof s=="function"&&s({height:a,scaledHeight:t,scaledWidth:l,width:c}))}},this._setRef=n=>{this._autoSizer=n}}componentDidMount(){const{nonce:e}=this.props;this._autoSizer&&this._autoSizer.parentNode&&this._autoSizer.parentNode.ownerDocument&&this._autoSizer.parentNode.ownerDocument.defaultView&&this._autoSizer.parentNode instanceof this._autoSizer.parentNode.ownerDocument.defaultView.HTMLElement&&(this._parentNode=this._autoSizer.parentNode,this._parentNode!=null&&(typeof ResizeObserver<"u"?(this._resizeObserver=new ResizeObserver(()=>{this._timeoutId=setTimeout(this._onResize,0)}),this._resizeObserver.observe(this._parentNode)):(this._detectElementResize=Ne(e),this._detectElementResize.addResizeListener(this._parentNode,this._onResize)),this._onResize()))}componentWillUnmount(){this._parentNode&&(this._detectElementResize&&this._detectElementResize.removeResizeListener(this._parentNode,this._onResize),this._timeoutId!==null&&clearTimeout(this._timeoutId),this._resizeObserver&&(this._resizeObserver.observe(this._parentNode),this._resizeObserver.disconnect()))}render(){const{children:e,defaultHeight:n,defaultWidth:o,disableHeight:s=!1,disableWidth:S=!1,nonce:g,onResize:u,style:d={},tagName:_="div",...I}=this.props,{height:p,scaledHeight:r,scaledWidth:f,width:h}=this.state,t={overflow:"visible"},l={};let a=!1;return s||(p===0&&(a=!0),t.height=0,l.height=p,l.scaledHeight=r),S||(h===0&&(a=!0),t.width=0,l.width=h,l.scaledWidth=f),b.createElement(_,{ref:this._setRef,style:{...t,...d},...I},!a&&e(l))}}const Ee=i=>{const e=()=>{},n=i.hasNextPage?i.items.length+1:i.items.length,o=i.isNextPageLoading?e:i.loadNextPage,s=S=>!i.hasNextPage||S<i.items.length;return R.jsx("div",{className:"list-height",children:R.jsx(Ce,{children:({height:S,width:g})=>R.jsx(Le,{isItemLoaded:s,itemCount:n,loadMoreItems:o,threshold:2,children:({onItemsRendered:u,ref:d})=>R.jsx(xe,{height:S,itemCount:n,itemSize:100,width:g,onItemsRendered:u,ref:d,children:({index:_,style:I})=>{const p=i.items?i.items[_]:null;return R.jsx(fe,{id:(p==null?void 0:p.id)||0,userId:(p==null?void 0:p.userId)||0,title:(p==null?void 0:p.title)||"",body:(p==null?void 0:p.body)||"",style:I})}})})})})},Pe=()=>{const[i,e]=b.useState(1),[n,o]=b.useState(!1),[s,S]=b.useState([]),g=b.useRef([]),u=10,{data:d,isLoading:_,hasNextPage:I}=ue(i,{selectFromResult:r=>{var f,h;return{...r,data:(f=r.data)!=null&&f.data.length?r.data.data:[],hasNextPage:Number((h=r.data)==null?void 0:h.count)-u*i>0}}});b.useEffect(()=>{var r;d.length&&(S(f=>[...f,...d]),(r=g.current)==null||r.push(i))},[d]);const p=()=>{!_&&I&&(o(!0),e(r=>r+1),o(!1))};return R.jsx("div",{className:"m-auto",children:R.jsx(Ee,{hasNextPage:I,isNextPageLoading:n,items:s,loadNextPage:p})})},Me=()=>R.jsx("div",{className:"page",children:R.jsx(Pe,{})});export{Me as default};