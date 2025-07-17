exports.id = "component---src-pages-publications-js";
exports.ids = ["component---src-pages-publications-js"];
exports.modules = {

/***/ "./node_modules/react-reveal/Fade.js":
/*!*******************************************!*\
  !*** ./node_modules/react-reveal/Fade.js ***!
  \*******************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";
function _interopRequireDefault(o){return o&&o.__esModule?o:{default:o}}function _objectWithoutProperties(o,e){var r={};for(var t in o)e.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(o,t)&&(r[t]=o[t]);return r}function make(o,e){var r=e.distance,t=e.left,p=e.right,a=e.up,l=e.down,i=e.top,u=e.bottom,n=e.big,s=e.mirror,d=e.opposite,_=(r?r.toString():0)+((t?1:0)|(p?2:0)|(i||l?4:0)|(u||a?8:0)|(s?16:0)|(d?32:0)|(o?64:0)|(n?128:0));if(lookup.hasOwnProperty(_))return lookup[_];var f=t||p||a||l||i||u,y=void 0,b=void 0;if(f){if(!s!=!(o&&d)){var v=[p,t,u,i,l,a];t=v[0],p=v[1],i=v[2],u=v[3],a=v[4],l=v[5]}var c=r||(n?"2000px":"100%");y=t?"-"+c:p?c:"0",b=l||i?"-"+c:a||u?c:"0"}return lookup[_]=(0,_globals.animation)((o?"to":"from")+" {opacity: 0;"+(f?" transform: translate3d("+y+", "+b+", 0);":"")+"}\n     "+(o?"from":"to")+" {opacity: 1;transform: none;} "),lookup[_]}function Fade(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_globals.defaults,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=o.children,t=(o.out,o.forever),p=o.timeout,a=o.duration,l=void 0===a?_globals.defaults.duration:a,i=o.delay,u=void 0===i?_globals.defaults.delay:i,n=o.count,s=void 0===n?_globals.defaults.count:n,d=_objectWithoutProperties(o,["children","out","forever","timeout","duration","delay","count"]),_={make:make,duration:void 0===p?l:p,delay:u,forever:t,count:s,style:{animationFillMode:"both"},reverse:d.left};return e?(0,_wrap2.default)(d,_,_,r):_}Object.defineProperty(exports, "__esModule", ({value:!0}));var _propTypes=__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"),_globals=__webpack_require__(/*! ./globals */ "./node_modules/react-reveal/globals.js"),_wrap=__webpack_require__(/*! ./wrap */ "./node_modules/react-reveal/wrap.js"),_wrap2=_interopRequireDefault(_wrap),propTypes={out:_propTypes.bool,left:_propTypes.bool,right:_propTypes.bool,top:_propTypes.bool,bottom:_propTypes.bool,big:_propTypes.bool,mirror:_propTypes.bool,opposite:_propTypes.bool,duration:_propTypes.number,timeout:_propTypes.number,distance:_propTypes.string,delay:_propTypes.number,count:_propTypes.number,forever:_propTypes.bool},lookup={};Fade.propTypes=propTypes,exports["default"]=Fade,module.exports=exports.default;

/***/ }),

/***/ "./node_modules/react-reveal/RevealBase.js":
/*!*************************************************!*\
  !*** ./node_modules/react-reveal/RevealBase.js ***!
  \*************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _defineProperty(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports, "__esModule", ({value:!0}));var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_slicedToArray=function(){function e(e,t){var i=[],s=!0,o=!1,n=void 0;try{for(var r,a=e[Symbol.iterator]();!(s=(r=a.next()).done)&&(i.push(r.value),!t||i.length!==t);s=!0);}catch(e){o=!0,n=e}finally{try{!s&&a.return&&a.return()}finally{if(o)throw n}}return i}return function(t,i){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s])}return e},_createClass=function(){function e(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,i,s){return i&&e(t.prototype,i),s&&e(t,s),t}}(),_react=__webpack_require__(/*! react */ "react"),_react2=_interopRequireDefault(_react),_propTypes=__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"),_globals=__webpack_require__(/*! ./globals */ "./node_modules/react-reveal/globals.js"),inOut=(0,_propTypes.shape)({make:_propTypes.func,duration:_propTypes.number.isRequired,delay:_propTypes.number.isRequired,forever:_propTypes.bool,count:_propTypes.number.isRequired,style:_propTypes.object.isRequired,reverse:_propTypes.bool}),propTypes={collapse:_propTypes.bool,collapseEl:_propTypes.element,cascade:_propTypes.bool,wait:_propTypes.number,force:_propTypes.bool,disabled:_propTypes.bool,appear:_propTypes.bool,enter:_propTypes.bool,exit:_propTypes.bool,fraction:_propTypes.number,refProp:_propTypes.string,innerRef:_propTypes.func,onReveal:_propTypes.func,unmountOnExit:_propTypes.bool,mountOnEnter:_propTypes.bool,inEffect:inOut.isRequired,outEffect:(0,_propTypes.oneOfType)([inOut,(0,_propTypes.oneOf)([!1])]).isRequired,ssrReveal:_propTypes.bool,collapseOnly:_propTypes.bool,ssrFadeout:_propTypes.bool},defaultProps={fraction:.2,refProp:"ref"},contextTypes={transitionGroup:_propTypes.object},RevealBase=function(e){function t(e,i){_classCallCheck(this,t);var s=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,i));return s.isOn=void 0===e.when||!!e.when,s.state={collapse:e.collapse?t.getInitialCollapseStyle(e):void 0,style:{opacity:s.isOn&&!e.ssrReveal||!e.outEffect?void 0:0}},s.savedChild=!1,s.isShown=!1,_globals.observerMode?s.handleObserve=s.handleObserve.bind(s):(s.revealHandler=s.makeHandler(s.reveal),s.resizeHandler=s.makeHandler(s.resize)),s.saveRef=s.saveRef.bind(s),s}return _inherits(t,e),_createClass(t,[{key:"saveRef",value:function(e){this.childRef&&this.childRef(e),this.props.innerRef&&this.props.innerRef(e),this.el!==e&&(this.el=e&&"offsetHeight"in e?e:void 0,this.observe(this.props,!0))}},{key:"invisible",value:function(){this&&this.el&&(this.savedChild=!1,this.isShown||(this.setState({hasExited:!0,collapse:this.props.collapse?_extends({},this.state.collapse,{visibility:"hidden"}):null,style:{opacity:0}}),!_globals.observerMode&&this.props.collapse&&window.document.dispatchEvent(_globals.collapseend)))}},{key:"animationEnd",value:function(e,t,i){var s=this,o=i.forever,n=i.count,r=i.delay,a=i.duration;if(!o){var l=function(){s&&s.el&&(s.animationEndTimeout=void 0,e.call(s))};this.animationEndTimeout=window.setTimeout(l,r+(a+(t?a:0)*n))}}},{key:"getDimensionValue",value:function(){return this.el.offsetHeight+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-top"),10)+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-bottom"),10)}},{key:"collapse",value:function(e,t,i){var s=i.duration+(t.cascade?i.duration:0),o=this.isOn?this.getDimensionValue():0,n=void 0,r=void 0;if(t.collapseOnly)n=i.duration/3,r=i.delay;else{var a=s>>2,l=a>>1;n=a,r=i.delay+(this.isOn?0:s-a-l),e.style.animationDuration=s-a+(this.isOn?l:-l)+"ms",e.style.animationDelay=i.delay+(this.isOn?a-l:0)+"ms"}return e.collapse={height:o,transition:"height "+n+"ms ease "+r+"ms",overflow:t.collapseOnly?"hidden":void 0},e}},{key:"animate",value:function(e){if(this&&this.el&&(this.unlisten(),this.isShown!==this.isOn)){this.isShown=this.isOn;var t=!this.isOn&&e.outEffect,i=e[t?"outEffect":"inEffect"],s="style"in i&&i.style.animationName||void 0,o=void 0;e.collapseOnly?o={hasAppeared:!0,hasExited:!1,style:{opacity:1}}:((e.outEffect||this.isOn)&&i.make&&(s=i.make),o={hasAppeared:!0,hasExited:!1,collapse:void 0,style:_extends({},i.style,{animationDuration:i.duration+"ms",animationDelay:i.delay+"ms",animationIterationCount:i.forever?"infinite":i.count,opacity:1,animationName:s}),className:i.className}),this.setState(e.collapse?this.collapse(o,e,i):o),t?(this.savedChild=_react2.default.cloneElement(this.getChild()),this.animationEnd(this.invisible,e.cascade,i)):this.savedChild=!1,this.onReveal(e)}}},{key:"onReveal",value:function(e){e.onReveal&&this.isOn&&(this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),e.wait?this.onRevealTimeout=window.setTimeout(e.onReveal,e.wait):e.onReveal())}},{key:"componentWillUnmount",value:function(){this.unlisten(),_globals.ssr&&(0,_globals.disableSsr)()}},{key:"handleObserve",value:function(e,t){_slicedToArray(e,1)[0].intersectionRatio>0&&(t.disconnect(),this.observer=null,this.reveal(this.props,!0))}},{key:"observe",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.el&&_globals.observerMode){if(this.observer){if(!t)return;this.observer.disconnect()}else if(t)return;this.observer=new IntersectionObserver(this.handleObserve,{threshold:e.fraction}),this.observer.observe(this.el)}}},{key:"reveal",value:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];_globals.globalHide||(0,_globals.hideAll)(),this&&this.el&&(e||(e=this.props),_globals.ssr&&(0,_globals.disableSsr)(),this.isOn&&this.isShown&&void 0!==e.spy?(this.isShown=!1,this.setState({style:{}}),window.setTimeout(function(){return t.reveal(e)},200)):i||this.inViewport(e)||e.force?this.animate(e):_globals.observerMode?this.observe(e):this.listen())}},{key:"componentDidMount",value:function(){var e=this;if(this.el&&!this.props.disabled){this.props.collapseOnly||("make"in this.props.inEffect&&this.props.inEffect.make(!1,this.props),void 0!==this.props.when&&this.props.outEffect&&"make"in this.props.outEffect&&this.props.outEffect.make(!0,this.props));var i=this.context.transitionGroup,s=i&&!i.isMounting?!("enter"in this.props&&!1===this.props.enter):this.props.appear;return this.isOn&&((void 0!==this.props.when||void 0!==this.props.spy)&&!s||_globals.ssr&&!_globals.fadeOutEnabled&&!this.props.ssrFadeout&&this.props.outEffect&&!this.props.ssrReveal&&t.getTop(this.el)<window.pageYOffset+window.innerHeight)?(this.isShown=!0,this.setState({hasAppeared:!0,collapse:this.props.collapse?{height:this.getDimensionValue()}:this.state.collapse,style:{opacity:1}}),void this.onReveal(this.props)):_globals.ssr&&(_globals.fadeOutEnabled||this.props.ssrFadeout)&&this.props.outEffect&&t.getTop(this.el)<window.pageYOffset+window.innerHeight?(this.setState({style:{opacity:0,transition:"opacity 1000ms 1000ms"}}),void window.setTimeout(function(){return e.reveal(e.props,!0)},2e3)):void(this.isOn&&(this.props.force?this.animate(this.props):this.reveal(this.props)))}}},{key:"cascade",value:function(e){var t=this,i=void 0;i="string"==typeof e?e.split("").map(function(e,t){return _react2.default.createElement("span",{key:t,style:{display:"inline-block",whiteSpace:"pre"}},e)}):_react2.default.Children.toArray(e);var s=this.props[this.isOn||!this.props.outEffect?"inEffect":"outEffect"],o=s.duration,n=s.reverse,r=i.length,a=2*o;this.props.collapse&&(a=parseInt(this.state.style.animationDuration,10),o=a/2);var l=n?r:0;return i=i.map(function(e){return"object"===(void 0===e?"undefined":_typeof(e))&&e?_react2.default.cloneElement(e,{style:_extends({},e.props.style,t.state.style,{animationDuration:Math.round((0,_globals.cascade)(n?l--:l++,0,r,o,a))+"ms"})}):e})}},{key:"componentWillReceiveProps",value:function(e){if(void 0!==e.when&&(this.isOn=!!e.when),e.fraction!==this.props.fraction&&this.observe(e,!0),!this.isOn&&e.onExited&&"exit"in e&&!1===e.exit)return void e.onExited();e.disabled||(e.collapse&&!this.props.collapse&&(this.setState({style:{},collapse:t.getInitialCollapseStyle(e)}),this.isShown=!1),e.when===this.props.when&&e.spy===this.props.spy||this.reveal(e),this.onRevealTimeout&&!this.isOn&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)))}},{key:"getChild",value:function(){if(this.savedChild&&!this.props.disabled)return this.savedChild;if("object"===_typeof(this.props.children)){var e=_react2.default.Children.only(this.props.children);return"type"in e&&"string"==typeof e.type||"ref"!==this.props.refProp?e:_react2.default.createElement("div",null,e)}return _react2.default.createElement("div",null,this.props.children)}},{key:"render",value:function(){var e=void 0;e=this.state.hasAppeared?!this.props.unmountOnExit||!this.state.hasExited||this.isOn:!this.props.mountOnEnter||this.isOn;var t=this.getChild();"function"==typeof t.ref&&(this.childRef=t.ref);var i=!1,s=t.props,o=s.style,n=s.className,r=s.children,a=this.props.disabled?n:(this.props.outEffect?_globals.namespace:"")+(this.state.className?" "+this.state.className:"")+(n?" "+n:"")||void 0,l=void 0;"function"==typeof this.state.style.animationName&&(this.state.style.animationName=this.state.style.animationName(!this.isOn,this.props)),this.props.cascade&&!this.props.disabled&&r&&this.state.style.animationName?(i=this.cascade(r),l=_extends({},o,{opacity:1})):l=this.props.disabled?o:_extends({},o,this.state.style);var p=_extends({},this.props.props,_defineProperty({className:a,style:l},this.props.refProp,this.saveRef)),h=_react2.default.cloneElement(t,p,e?i||r:void 0);return void 0!==this.props.collapse?this.props.collapseEl?_react2.default.cloneElement(this.props.collapseEl,{style:_extends({},this.props.collapseEl.style,this.props.disabled?void 0:this.state.collapse),children:h}):_react2.default.createElement("div",{style:this.props.disabled?void 0:this.state.collapse,children:h}):h}},{key:"makeHandler",value:function(e){var t=this,i=function(){e.call(t,t.props),t.ticking=!1};return function(){t.ticking||((0,_globals.raf)(i),t.ticking=!0)}}},{key:"inViewport",value:function(e){if(!this.el||window.document.hidden)return!1;var i=this.el.offsetHeight,s=window.pageYOffset-t.getTop(this.el),o=Math.min(i,window.innerHeight)*(_globals.globalHide?e.fraction:0);return s>o-window.innerHeight&&s<i-o}},{key:"resize",value:function(e){this&&this.el&&this.isOn&&this.inViewport(e)&&(this.unlisten(),this.isShown=this.isOn,this.setState({hasExited:!this.isOn,hasAppeared:!0,collapse:void 0,style:{opacity:this.isOn||!e.outEffect?1:0}}),this.onReveal(e))}},{key:"listen",value:function(){_globals.observerMode||this.isListener||(this.isListener=!0,window.addEventListener("scroll",this.revealHandler,{passive:!0}),window.addEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.addEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.addEventListener("collapseend",this.revealHandler,{passive:!0}),window.addEventListener("resize",this.resizeHandler,{passive:!0}))}},{key:"unlisten",value:function(){!_globals.observerMode&&this.isListener&&(window.removeEventListener("scroll",this.revealHandler,{passive:!0}),window.removeEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.removeEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.removeEventListener("collapseend",this.revealHandler,{passive:!0}),window.removeEventListener("resize",this.resizeHandler,{passive:!0}),this.isListener=!1),this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),this.animationEndTimeout&&(this.animationEndTimeout=window.clearTimeout(this.animationEndTimeout))}}],[{key:"getInitialCollapseStyle",value:function(e){return{height:0,visibility:e.when?void 0:"hidden"}}},{key:"getTop",value:function(e){for(;void 0===e.offsetTop;)e=e.parentNode;for(var t=e.offsetTop;e.offsetParent;t+=e.offsetTop)e=e.offsetParent;return t}}]),t}(_react2.default.Component);RevealBase.propTypes=propTypes,RevealBase.defaultProps=defaultProps,RevealBase.contextTypes=contextTypes,RevealBase.displayName="RevealBase",exports["default"]=RevealBase,module.exports=exports.default;

/***/ }),

/***/ "./node_modules/react-reveal/globals.js":
/*!**********************************************!*\
  !*** ./node_modules/react-reveal/globals.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
function insertRule(e){try{return sheet.insertRule(e,sheet.cssRules.length)}catch(e){console.warn("react-reveal - animation failed")}}function cascade(e,n,t,o,r){var s=Math.log(o),i=Math.log(r),a=(i-s)/(t-n);return Math.exp(s+a*(e-n))}function animation(e){if(!sheet)return"";var n="@keyframes "+(name+counter)+"{"+e+"}",t=effectMap[e];return t?""+name+t:(sheet.insertRule(n,sheet.cssRules.length),effectMap[e]=counter,""+name+counter++)}function hideAll(){globalHide||(exports.globalHide=globalHide=!0,window.removeEventListener("scroll",hideAll,!0),insertRule("."+namespace+" { opacity: 0; }"),window.removeEventListener("orientationchange",hideAll,!0),window.document.removeEventListener("visibilitychange",hideAll))}function config(e){var n=e.ssrFadeout;exports.fadeOutEnabled=fadeOutEnabled=n}Object.defineProperty(exports, "__esModule", ({value:!0})),exports.insertRule=insertRule,exports.cascade=cascade,exports.animation=animation,exports.hideAll=hideAll,exports["default"]=config;var namespace=exports.namespace="react-reveal",defaults=exports.defaults={duration:1e3,delay:0,count:1},ssr=exports.ssr=!0,observerMode=exports.observerMode=!1,raf=exports.raf=function(e){return window.setTimeout(e,66)},disableSsr=exports.disableSsr=function(){return exports.ssr=ssr=!1},fadeOutEnabled=exports.fadeOutEnabled=!1,ssrFadeout=exports.ssrFadeout=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return exports.fadeOutEnabled=fadeOutEnabled=e},globalHide=exports.globalHide=!1,ie10=exports.ie10=!1,collapseend=exports.collapseend=void 0,counter=1,effectMap={},sheet=!1,name=namespace+"-"+Math.floor(1e15*Math.random())+"-";if("undefined"!=typeof window&&"nodejs"!==window.name&&window.document&&"undefined"!=typeof navigator){exports.observerMode=observerMode="IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype&&/\{\s*\[native code\]\s*\}/.test(""+IntersectionObserver),exports.raf=raf=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||raf,exports.ssr=ssr=window.document.querySelectorAll("div[data-reactroot]").length>0,-1!==navigator.appVersion.indexOf("MSIE 10")&&(exports.ie10=ie10=!0),ssr&&"performance"in window&&"timing"in window.performance&&"domContentLoadedEventEnd"in window.performance.timing&&window.performance.timing.domLoading&&Date.now()-window.performance.timing.domLoading<300&&(exports.ssr=ssr=!1),ssr&&window.setTimeout(disableSsr,1500),observerMode||(exports.collapseend=collapseend=document.createEvent("Event"),collapseend.initEvent("collapseend",!0,!0));var element=document.createElement("style");document.head.appendChild(element),element.sheet&&element.sheet.cssRules&&element.sheet.insertRule&&(sheet=element.sheet,window.addEventListener("scroll",hideAll,!0),window.addEventListener("orientationchange",hideAll,!0),window.document.addEventListener("visibilitychange",hideAll))}

/***/ }),

/***/ "./node_modules/react-reveal/wrap.js":
/*!*******************************************!*\
  !*** ./node_modules/react-reveal/wrap.js ***!
  \*******************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function wrap(e,t,a,r){return"in"in e&&(e.when=e.in),_react2.default.Children.count(r)<2?_react2.default.createElement(_RevealBase2.default,_extends({},e,{inEffect:t,outEffect:a,children:r})):(r=_react2.default.Children.map(r,function(r){return _react2.default.createElement(_RevealBase2.default,_extends({},e,{inEffect:t,outEffect:a,children:r}))}),"Fragment"in _react2.default?_react2.default.createElement(_react2.default.Fragment,null,r):_react2.default.createElement("span",null,r))}Object.defineProperty(exports, "__esModule", ({value:!0}));var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e};exports["default"]=wrap;var _react=__webpack_require__(/*! react */ "react"),_react2=_interopRequireDefault(_react),_RevealBase=__webpack_require__(/*! ./RevealBase */ "./node_modules/react-reveal/RevealBase.js"),_RevealBase2=_interopRequireDefault(_RevealBase);module.exports=exports.default;

/***/ }),

/***/ "./src/images/AAAI.png":
/*!*****************************!*\
  !*** ./src/images/AAAI.png ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/AAAI-31cc7ffeb65cd0a158e2c29eb0eb7eb9.png");

/***/ }),

/***/ "./src/images/ACC.png":
/*!****************************!*\
  !*** ./src/images/ACC.png ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/ACC-8185daf2c2a6962473f1346ca7c8617d.png");

/***/ }),

/***/ "./src/images/ACC24.png":
/*!******************************!*\
  !*** ./src/images/ACC24.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/ACC24-cce5cd5c3d66872eff30293e89ee8416.png");

/***/ }),

/***/ "./src/images/AfrinaImg.jpeg":
/*!***********************************!*\
  !*** ./src/images/AfrinaImg.jpeg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/AfrinaImg-50d5bda1b25471655aec2f805de2ca73.jpeg");

/***/ }),

/***/ "./src/images/Hybrid.png":
/*!*******************************!*\
  !*** ./src/images/Hybrid.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/Hybrid-53b427482f322d25beec47d1720e0875.png");

/***/ }),

/***/ "./src/images/Markov.png":
/*!*******************************!*\
  !*** ./src/images/Markov.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/Markov-a89786463cf023cc416745615ba128a4.png");

/***/ }),

/***/ "./src/images/bun.gif":
/*!****************************!*\
  !*** ./src/images/bun.gif ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/bun-d2df3e7989bb3685e6219a6b1443dd08.gif");

/***/ }),

/***/ "./src/images/chenhanImg.jpeg":
/*!************************************!*\
  !*** ./src/images/chenhanImg.jpeg ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/chenhanImg-7a85cb77a34f6e690ddb8f0f5548dad9.jpeg");

/***/ }),

/***/ "./src/images/drhoda.jpeg":
/*!********************************!*\
  !*** ./src/images/drhoda.jpeg ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/drhoda-abc6c5e4a87035801ae4e19241db787e.jpeg");

/***/ }),

/***/ "./src/images/githubIcon.gif":
/*!***********************************!*\
  !*** ./src/images/githubIcon.gif ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/gif;base64,R0lGODlhIAAgAKIHAIKCgrOzs/j4+OLi4pmZmczMzMrKyv///yH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowMTgwMTE3NDA3MjA2ODExODcxRjk1OUM5NDdDMUYyMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxQzYwRTc2RDU0RTIxMUUxOTgyOUQyOEIyQjYxRkU0MCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxQzYwRTc2QzU0RTIxMUUxOTgyOUQyOEIyQjYxRkU0MCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IE1hY2ludG9zaCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjAzODAxMTc0MDcyMDY4MTE4NzFGOTU5Qzk0N0MxRjIzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjAxODAxMTc0MDcyMDY4MTE4NzFGOTU5Qzk0N0MxRjIzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEBQoABwAsAAAAACAAIAAAA/94uiwThAAQwxAs6yXc/CBwYZsmFEQgVEZRGBDhFFfJxTJpnkarm5HUr+ToFYaKVWRg2wxex4wgdhnUbI4R9IciFA4CY9VKnvUwgx4zWVGke/C43LBOR8EQUnjOPydpGA5gHH19OoEOASp/hXx3PE8BBgtvjXNrBy9pAV9ulnyYdoqhn5eULaOnpXGkBameq3Ctr2CxcDp2MJ0KL7G7B3aukxy9n3e8dA+LHJWFV4xVgw56VsUtVkiIYE+Bxzxwxw2A0G5R33G/p8dvTOeOGuziPtsufVJb99cM9pT4Jr1X+BWZR6TXkT1zOhhEIuXJBWvoZjxrAqZDow4MKXZ4YhAFUEYFCQAAIfkEBQoABwAsAAAAAB8AFgAAA2d4uqwWgRBomr1M6k3OwNcQVIFSmEoZABXoQKV7AHQHwqec0sBnwbqGgWd5xIKMQS0J8SEZBVrrAMk9GyvA4nHFAAgfQTdosI5D5TOoYHCqG+w3Ji630OvQKd7U3i8GaX4OZntiggcJACH5BAUKAAcALAIAAAAeAB4AAAOEeLorU8UYOAS7mAnJuxFWlhXDQQ0oCilEIS7R9C5EHbxxOTM1ETIR1+5S6BEnvyGPcFtIlK+aMKKDZmqKhzUaSG5f1a+IABCKr4DmGRMAENYZAwAAxxTmdSI+79zzD21vfwdkanxkZn9heQGJeQUBhoyScAORBoORlGeQkX+amH8GmwcJACH5BAUKAAcALBYAAgAKAB0AAANJaDHXfiGa50oMtI2bm+zb0llYF0xd6gQEk7EoZRAlVRBEiut5dvcymokQe7BcKgpARAkAAL5nsfEENgpPqLGKPGStDQJgqlElAAAh+QQFCgAHACwKAAIAFgAeAAADX3i6rFMtSlWMgTOfYbGelfc1QjhO1ilxokoNbnwG8mIErVoERr0FtNoA6BsGZUbfrle75VRHn49wEEypNQLh+dFGTwMtNqatkr0SAoAABKqpge0KQK/bB9bMUEv3wjQJACH5BAUKAAcALAEACgAfABYAAANieLrc/kfASVUxNbs7tD+DUXyeSGrmWaXqxLZOOMIPR9fY/UhDAOiHwOwAAARuhcBRYSgOT71AZ0EoTk/KHKMI0HqUy8aAG64klZRqMQP2QppLQjlAYEo/HYJ+z78ZlHpZGQkAIfkEBQoABwAsAAAKAB4AFgAAA2N4c9z+MBZAor0tUMwhAUEnMgBgjGJZoJ3KcuX5Xl84W1p1S9seLb6I4KALFoCE4m5gWB0KyaBBxghEZ4JC85EkOFHab0PQRTG3uDJHi75Aq6Hp9BAIDcScYX3Pt93YdVN4DwkAIfkEBQoABwAsAAABABYAHwAAA2h4ujv8kBkQol0E6BtHplykAUUIfY4paaXKaJXbBIBsX158G4RuBwTDTUEgtG7FIZGgPBSPv6CS55PlmliFoSoLBKBWb2rnbXoD458X7NqWh4OAsGAQLursh6DO7xsEIQIDBXQGhAOACQA7");

/***/ }),

/***/ "./src/images/googlescholarIcon.gif":
/*!******************************************!*\
  !*** ./src/images/googlescholarIcon.gif ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/googlescholarIcon-86e3dad1e828b83a7f68d535e9e338e2.gif");

/***/ }),

/***/ "./src/images/hongieImg.jpeg":
/*!***********************************!*\
  !*** ./src/images/hongieImg.jpeg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/hongieImg-2b85119041ee35f6c4342e0eacecc259.jpeg");

/***/ }),

/***/ "./src/images/hri.gif":
/*!****************************!*\
  !*** ./src/images/hri.gif ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/hri-1e9e8e25ec7df8607a36002567427ab3.gif");

/***/ }),

/***/ "./src/images/jiayingImg.jpeg":
/*!************************************!*\
  !*** ./src/images/jiayingImg.jpeg ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/jiayingImg-7a4d2b2e99d421a2d23d130dc7b8c71d.jpeg");

/***/ }),

/***/ "./src/images/labIcon.gif":
/*!********************************!*\
  !*** ./src/images/labIcon.gif ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/labIcon-db2095ad259dff5f63cdd593b0777f2c.gif");

/***/ }),

/***/ "./src/images/miladImg.jpeg":
/*!**********************************!*\
  !*** ./src/images/miladImg.jpeg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/miladImg-e1708ad91b207854aff9a3b989ddccc2.jpeg");

/***/ }),

/***/ "./src/images/twitterIcon.gif":
/*!************************************!*\
  !*** ./src/images/twitterIcon.gif ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/gif;base64,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");

/***/ }),

/***/ "./src/images/vasanthImg.jpg":
/*!***********************************!*\
  !*** ./src/images/vasanthImg.jpg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/vasanthImg-8e738336123be27e14fdd32d195ab431.jpg");

/***/ }),

/***/ "./src/images/zeroshotImg.png":
/*!************************************!*\
  !*** ./src/images/zeroshotImg.png ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/zeroshotImg-3ae20777bea196e2b54d343cffd00ea8.png");

/***/ }),

/***/ "./src/pages/publications.js?export=default":
/*!**************************************************!*\
  !*** ./src/pages/publications.js?export=default ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _yourdata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../yourdata */ "./src/yourdata.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_publications_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/publications.scss */ "./src/styles/publications.scss");
/* harmony import */ var _styles_publications_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_publications_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_include_media_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/include-media.scss */ "./src/styles/include-media.scss");
/* harmony import */ var _styles_include_media_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_include_media_scss__WEBPACK_IMPORTED_MODULE_4__);





const Publications = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/"
  }, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default()), {
    top: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Publications")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "publications"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    classsName: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "publication"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    class: "noBorder"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", {
    class: "noBorder"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    class: "noBorder"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    class: "noBorderimg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "image-wrapper",
    src: _yourdata__WEBPACK_IMPORTED_MODULE_1__["default"].hri,
    alt: "Vasanth"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    class: "noBorderdetails"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://arxiv.org/pdf/2011.07126.pdf"
  }, "In Search of a Lost Metric: Human Empowerment as a Pillar of Socially Conscious Navigation")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "HRI'25 (Human-Robot Interaction)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Summary: "), "Introducing human empowerment, an information-theoretic concept, as a novel metric for evaluating social compliance in robot navigation.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "[", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://arxiv.org/abs/2501.01539"
  }, "Paper"), "]"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "This work leverages the concept of human empowerment to assess a human\u2019s ability to influence their future states in shared spaces. The metric complements traditional measures like proxemics by offering insights into the nuanced effects of robot policies on human autonomy. A framework is presented for integrating empowerment into social navigation tasks, validated through simulations that compare navigation methods, including ORCA, SARL, and SAC. Key contributions include:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Framework for incorporating empowerment into social navigation evaluation."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Statistical validation of empowerment differences across policies."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Insights into the dynamic impact of robot navigation on human autonomy.")), "Simulation results highlight empowerment\u2019s role in evaluating social compliance, providing a foundation for designing socially-aware robot behaviors."))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    class: "noBorder"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", {
    class: "noBorder"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    class: "noBorder"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    class: "noBorderimg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "image-wrapper",
    src: _yourdata__WEBPACK_IMPORTED_MODULE_1__["default"].bun,
    alt: "Vasanth"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    class: "noBorderdetails"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://arxiv.org/pdf/2025.07126.pdf"
  }, "Learning Emergence of Interaction Patterns Across Independent RL Agents in Multi-Agent Environments")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Arxiv Submission"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Summary:"), "A novel approach for scalable multi-agent reinforcement learning (MARL) using the Bottom-Up Network (BUN).", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "[", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://arxiv.org/pdf/2410.02516"
  }, "Paper"), "]"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "This work introduces the Bottom-Up Network (BUN), a sparse neural network designed to address the computational challenges of MARL. By adopting a unique block-diagonal weight initialization strategy and dynamic weight emergence based on gradient information, BUN achieves efficient communication and coordination among agents. The approach is validated in cooperative scenarios, such as:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Cooperative Navigation: Agents achieve their objectives with minimal communication."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Traffic Signal Control: BUN optimizes traffic flow using fewer resources compared to dense models.")), "**Key Contributions:**", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Sparse network initialization to promote localized decision-making."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Dynamic weight emergence to enable adaptive communication among agents."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Extensive validation demonstrating superior performance and scalability in large-scale environments.")), "Experiments highlight the efficiency of BUN in reducing floating-point operations (FLOPs) while achieving comparable or better performance than centralized methods. The robustness of BUN under noisy observations further underscores its potential for real-world applications."))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    class: "noBorder"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", {
    class: "noBorder"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    class: "noBorder"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    class: "noBorderimg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "image-wrapper",
    src: _yourdata__WEBPACK_IMPORTED_MODULE_1__["default"].accs,
    alt: "Vasanth"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    class: "noBorderdetails"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://arxiv.org/pdf/2011.07126.pdf"
  }, "A Bottom-Up Approach for Sparse Controller Design with a Budget")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "ACC'24 (American Control Conference)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Summary: "), "Optimizing sparse static output-feedback controllers for large-scale systems using a budgeted bottom-up approach.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "[", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://ieeexplore.ieee.org/abstract/document/10644330"
  }, "Paper"), "]"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "[", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://git.cs.vt.edu/machine-learning-lab/vasanth-repo/sparse-controller"
  }, "Code"), "]"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "This work introduces a novel gradient-based bottom-up approach for designing sparse controllers in distributed systems, addressing computational inefficiencies in traditional top-down methods. Key contributions include:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "A greedy gradient search for selecting optimal communication links within a predefined parameter budget."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Scalable and efficient structured controller tuning to ensure near-optimal performance with minimal computational overhead."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Validation across benchmark examples, showcasing reduced computational costs and improved scalability compared to existing methods.")), "The approach demonstrates effective performance in large-scale systems such as power grids, structural systems, and mass-spring models, achieving significant reductions in tuning complexity while maintaining control efficiency."))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    class: "noBorder"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", {
    class: "noBorder"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    class: "noBorder"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    class: "noBorderimg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "image-wrapper",
    src: _yourdata__WEBPACK_IMPORTED_MODULE_1__["default"].acc,
    alt: "Vasanth"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    class: "noBorderdetails"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://arxiv.org/pdf/2011.07126.pdf"
  }, "Singular Perturbation-based Reinforcement Learning of Two-Point Boundary Optimal Control Systems")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "ACC'22 (American Control Conference)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Summary:  "), "Optimal control of two-point boundary systems.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "[", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://arxiv.org/pdf/2104.09652.pdf"
  }, "Paper"), "]"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "[", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://git.cs.vt.edu/machine-learning-lab/vasanth-repo/ltv-sp"
  }, "Code"), "]"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "We solve the problem of two-point boundary opti- mal control of linear time-varying systems with unknown model dynamics using reinforcement learning. Leveraging singular perturbation theory techniques, we transform the time-varying optimal control problem into two time-invariant subproblems. This allows the utilization of an off-policy iteration method to learn the controller gains. We show that the performance of the learning-based controller approximates that of the model-based optimal controller and the approximation accuracy improves as the control problem\u2019s time horizon increases. We also provide a simulation example to verify the results"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    class: "noBorder"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", {
    class: "noBorder"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    class: "noBorder"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    class: "noBorderimg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "image-wrapper",
    src: _yourdata__WEBPACK_IMPORTED_MODULE_1__["default"].aaai,
    alt: "Vasanth"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    class: "noBorderdetails"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://arxiv.org/pdf/2011.07126.pdf"
  }, "Cooperation Learning in Time-Varying Multi-Agent Networks")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "AAAI Workshop on Reinforcement Learning in Games (AAAI-RLG) 2022"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Summary:  "), "Learning cooperation strategies in time-varying multi-agent networks.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "[", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "http://aaai-rlg.mlanctot.info/papers/AAAI22-RLG_paper_10.pdf"
  }, "Paper"), "]"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "[", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://git.cs.vt.edu/machine-learning-lab/vasanth-repo/coolman"
  }, "Code"), "]"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "We propose a Multi-Agent Systems coordination framework for complex and dynamic environments, where agents\u2019 neighbors vary over time. We consider an agent-agent communication network, where we represent time-varying interactions as weighted network edges, and propose a heat kernel mechanism to compute those time-varying edge weights. We represent our network as a graph and build a heat diffusion kernel using the graph Laplacian. The key idea of our proposed approach is to model time-varying edge weights using the heat diffusion approach. Our proposed approach Cooperation Learner in MultiAgent Networks (CooLMAN) has a number of features: (1) it captures information flow in a dynamic environment using temporal indexing, (2) agents can achieve optimal policy and stability by the system-enabled timed interaction and coordination, thereby (3) providing trained weights that can be deployed to larger swarms in a scalable manner. We demonstrate the effectiveness of our proposed method using a cooperation task, where our model significantly outperforms state-of-the-art method."))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    class: "noBorder"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", {
    class: "noBorder"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    class: "noBorder"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    class: "noBorderimg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "image-wrapper",
    src: _yourdata__WEBPACK_IMPORTED_MODULE_1__["default"].markov,
    alt: "Vasanth"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    class: "noBorderdetails"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://ieeexplore.ieee.org/abstract/document/8521645"
  }, "Hybrid Approach for Short Term Wind Power Forecasting")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, " 2018 9th International Conference on Computing, Communication and Networking Technologies (ICCCNT)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Summary:  "), "Prediction of wind speed using Hybrid Model.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "[", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://drive.google.com/file/d/14-C2zob9FUyuUo_o1y2svj6KC27EgEWv/view?usp=sharing"
  }, "Paper"), "]"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "[", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://github.com/vbaddam/wind-forecasting/tree/master/Wavelet"
  }, "Paper"), "]"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "Wind is one of the most important parts of renewable energy sources and optimal scheduling of wind power in wind farms is essential. Therefore, accurate prediction is a necessary task to be done in order to have a clear picture of how this wind energy can be utilized to its maximum potential. In this paper, wind speed is forecasted using it as a signal for wavelet transformation and the coefficients are predicted to obtain the forecasted wind speeds. The geographical location under study is taken at Jodhpur in Rajasthan, India. The performance evaluation of the proposed method is calculated using the different statistical error measures like RMSE, MAPE and MAE."))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    class: "noBorder"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", {
    class: "noBorder"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    class: "noBorder"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    class: "noBorderimg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "image-wrapper",
    src: _yourdata__WEBPACK_IMPORTED_MODULE_1__["default"].markov,
    alt: "Vasanth"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    class: "noBorderdetails"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://ieeexplore.ieee.org/abstract/document/8521645"
  }, "Markov models based short term forecasting of wind speed for estimating day-ahead wind power")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "2018 International Conference on Power, Energy, Control and Transmission Systems (ICPECTS)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Summary:  "), "Prediction of wind speed using Markov models.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "[", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://drive.google.com/file/d/1LXJc4_JHp9kVL4ipM5Mu4fDvP3X2ixwC/view?usp=sharing"
  }, "Paper"), "]"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "[", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://github.com/vbaddam/wind-forecasting/tree/master/Markov%20Chain"
  }, "Code"), "]"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "In order to meet the growing demand of energy, renewable resource utilization has increased in recent years. Wind is the source to a significant percentage of renewable resources and wind farms harvest this energy into electricity with the help of wind turbines. These turbines are very costly to set up and require high amount of maintenance. Accurate short term (from 30 minutes up to 6 hours ahead) wind energy forecasting is therefore important for optimal scheduling of the wind farms. The paper explores the usage of Markov Chains for forecasting wind speed during a short-term period (day-ahead hourly wind generation forecasts for an individual wind farm). The proposed prediction model depends on one variable factor - wind speed, for a specific wind turbine."))))))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Publications);

/***/ }),

/***/ "./src/styles/include-media.scss":
/*!***************************************!*\
  !*** ./src/styles/include-media.scss ***!
  \***************************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/publications.scss":
/*!**************************************!*\
  !*** ./src/styles/publications.scss ***!
  \**************************************/
/***/ (() => {



/***/ }),

/***/ "./src/yourdata.js":
/*!*************************!*\
  !*** ./src/yourdata.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_githubIcon_gif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/githubIcon.gif */ "./src/images/githubIcon.gif");
/* harmony import */ var _images_twitterIcon_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/twitterIcon.gif */ "./src/images/twitterIcon.gif");
/* harmony import */ var _images_googlescholarIcon_gif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/googlescholarIcon.gif */ "./src/images/googlescholarIcon.gif");
/* harmony import */ var _images_labIcon_gif__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/labIcon.gif */ "./src/images/labIcon.gif");
/* harmony import */ var _images_bun_gif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/bun.gif */ "./src/images/bun.gif");
/* harmony import */ var _images_hri_gif__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/hri.gif */ "./src/images/hri.gif");
/* harmony import */ var _images_drhoda_jpeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/drhoda.jpeg */ "./src/images/drhoda.jpeg");
/* harmony import */ var _images_hongieImg_jpeg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/hongieImg.jpeg */ "./src/images/hongieImg.jpeg");
/* harmony import */ var _images_jiayingImg_jpeg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/jiayingImg.jpeg */ "./src/images/jiayingImg.jpeg");
/* harmony import */ var _images_vasanthImg_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/vasanthImg.jpg */ "./src/images/vasanthImg.jpg");
/* harmony import */ var _images_AfrinaImg_jpeg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/AfrinaImg.jpeg */ "./src/images/AfrinaImg.jpeg");
/* harmony import */ var _images_chenhanImg_jpeg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/chenhanImg.jpeg */ "./src/images/chenhanImg.jpeg");
/* harmony import */ var _images_miladImg_jpeg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./images/miladImg.jpeg */ "./src/images/miladImg.jpeg");
/* harmony import */ var _images_zeroshotImg_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./images/zeroshotImg.png */ "./src/images/zeroshotImg.png");
/* harmony import */ var _images_ACC_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./images/ACC.png */ "./src/images/ACC.png");
/* harmony import */ var _images_AAAI_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./images/AAAI.png */ "./src/images/AAAI.png");
/* harmony import */ var _images_Hybrid_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./images/Hybrid.png */ "./src/images/Hybrid.png");
/* harmony import */ var _images_Markov_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./images/Markov.png */ "./src/images/Markov.png");
/* harmony import */ var _images_ACC24_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./images/ACC24.png */ "./src/images/ACC24.png");
// Social Icon







// Members images













/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  // import images of the members and link it here
  drhodaimg: _images_drhoda_jpeg__WEBPACK_IMPORTED_MODULE_6__["default"],
  zeroshot: _images_zeroshotImg_png__WEBPACK_IMPORTED_MODULE_13__["default"],
  acc: _images_ACC_png__WEBPACK_IMPORTED_MODULE_14__["default"],
  aaai: _images_AAAI_png__WEBPACK_IMPORTED_MODULE_15__["default"],
  hybrid: _images_Hybrid_png__WEBPACK_IMPORTED_MODULE_16__["default"],
  markov: _images_Markov_png__WEBPACK_IMPORTED_MODULE_17__["default"],
  accs: _images_ACC24_png__WEBPACK_IMPORTED_MODULE_18__["default"],
  bun: _images_bun_gif__WEBPACK_IMPORTED_MODULE_4__["default"],
  hri: _images_hri_gif__WEBPACK_IMPORTED_MODULE_5__["default"],
  members: [{
    img: _images_hongieImg_jpeg__WEBPACK_IMPORTED_MODULE_7__["default"],
    title: "Hongjie Chen",
    url: "https://people.cs.vt.edu/~jeffchan/"
  }, {
    img: _images_jiayingImg_jpeg__WEBPACK_IMPORTED_MODULE_8__["default"],
    title: "Jiaying Gong",
    url: "https://sites.google.com/vt.edu/jiaying-gong/home"
  }, {
    img: _images_vasanthImg_jpg__WEBPACK_IMPORTED_MODULE_9__["default"],
    title: "Vasanth Reddy",
    url: "https://vasanth-webpage.netlify.app/"
  }, {
    img: _images_AfrinaImg_jpeg__WEBPACK_IMPORTED_MODULE_10__["default"],
    title: "Afrina Tabassum",
    url: "https://sites.google.com/vt.edu/afrinatabassum/home"
  }],
  alummembers: [{
    img: _images_chenhanImg_jpeg__WEBPACK_IMPORTED_MODULE_11__["default"],
    title: "Chenhan Yuan",
    url: "https://chenhan97.github.io/"
  }, {
    img: _images_miladImg_jpeg__WEBPACK_IMPORTED_MODULE_12__["default"],
    title: "Milad Afzalan",
    url: "https://scholar.google.com/citations?user=qzSBSg8AAAAJ&hl=en"
  }],
  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  contactSubHeading: "Let's create your next experience together",
  social: [
  // Add Or Remove The Link Accordingly
  {
    img: _images_githubIcon_gif__WEBPACK_IMPORTED_MODULE_0__["default"],
    url: "https://github.com/"
  }, {
    img: _images_googlescholarIcon_gif__WEBPACK_IMPORTED_MODULE_2__["default"],
    url: "https://scholar.google.com/"
  }, {
    img: _images_twitterIcon_gif__WEBPACK_IMPORTED_MODULE_1__["default"],
    url: "https://twitter.com/"
  }, {
    img: _images_labIcon_gif__WEBPACK_IMPORTED_MODULE_3__["default"],
    url: "https://people.cs.vt.edu/hdardiry/"
  }]

  // End Contact Section ---------------
});

/***/ })

};
;
//# sourceMappingURL=component---src-pages-publications-js.js.map