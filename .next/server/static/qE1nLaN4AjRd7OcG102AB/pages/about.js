module.exports=function(e){var t=require("../../../ssr-module-cache.js");function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}},a=!0;try{e[n].call(o.exports,o,o.exports,r),a=!1}finally{a&&delete t[n]}return o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}({"/+P4":function(e,t,r){var n=r("Bhuq"),o=r("TRZx");function a(t){return e.exports=a=o?n:function(e){return e.__proto__||n(e)},a(t)}e.exports=a},"/+oN":function(e,t){e.exports=require("core-js/library/fn/object/get-prototype-of")},"/HRN":function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},0:function(e,t,r){e.exports=r("Juyh")},"0Bsm":function(e,t,r){"use strict";var n=r("KI45"),o=n(r("UXZV")),a=n(r("/HRN")),u=n(r("WaGi")),i=n(r("ZDA2")),c=n(r("/+P4")),f=n(r("N9n2")),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},s=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var p=l(r("cDcd")),d=s(r("rf6O")),h=s(r("2mql")),y=r("p8BD");t.default=function(e){var t=y.getDisplayName(e),r=function(t){function r(){return(0,a.default)(this,r),(0,i.default)(this,(0,c.default)(r).apply(this,arguments))}return(0,f.default)(r,t),(0,u.default)(r,[{key:"render",value:function(){return p.default.createElement(e,(0,o.default)({router:this.context.router},this.props))}}]),r}(p.Component);return r.contextTypes={router:d.default.object},r.displayName="withRouter(".concat(t,")"),h.default(r,e)}},"20a2":function(e,t,r){e.exports=r("nOHt")},"2mql":function(e,t,r){"use strict";var n=r("UWCm"),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},u={};u[n.ForwardRef]={$$typeof:!0,render:!0};var i=Object.defineProperty,c=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,l=Object.getOwnPropertyDescriptor,s=Object.getPrototypeOf,p=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(p){var d=s(r);d&&d!==p&&e(t,d,n)}var h=c(r);f&&(h=h.concat(f(r)));for(var y=u[t.$$typeof]||o,v=u[r.$$typeof]||o,m=0;m<h.length;++m){var b=h[m];if(!(a[b]||n&&n[b]||v&&v[b]||y&&y[b])){var x=l(r,b);try{i(t,b,x)}catch(e){}}}return t}return t}},"5Yp1":function(e,t,r){"use strict";var n=r("cDcd"),o=r.n(n),a=r("U7sd"),u=r.n(a),i=r("YFqc"),c=r.n(i),f=function(){return o.a.createElement("nav",{className:"navbar navbar-expand navbar-dark bg-dark mb-4"},o.a.createElement("div",{className:"container"},o.a.createElement("a",{className:"navbar-brand",href:"/"},"BitzPrice"),o.a.createElement("div",{className:"collapse navbar-collapse"},o.a.createElement("ul",{className:"navbar-nav ml-auto"},o.a.createElement("li",{className:"nav-item"},o.a.createElement(c.a,{href:"/"},o.a.createElement("a",{className:"nav-link"},"Home"))),o.a.createElement("li",{className:"nav-item"},o.a.createElement(c.a,{href:"/about"},o.a.createElement("a",{className:"nav-link"},"About")))))))};t.a=function(e){return o.a.createElement("div",null,o.a.createElement(u.a,null,o.a.createElement("link",{rel:"stylesheet",href:"https://bootswatch.com/4/cerulean/bootstrap.min.css"}),o.a.createElement("title",null,"BitzPrice")),o.a.createElement(f,null),o.a.createElement("div",{className:"container"},e.children))}},"9Jkg":function(e,t,r){e.exports=r("fozc")},Bhuq:function(e,t,r){e.exports=r("/+oN")},Juyh:function(e,t,r){"use strict";r.r(t);var n=r("cDcd"),o=r.n(n),a=r("5Yp1");t.default=function(){return o.a.createElement(a.a,null,o.a.createElement("div",null,o.a.createElement("h1",null,"Welcome to BitzPrice"),o.a.createElement("p",null,"Application to view Bitcoin prices")))}},K47E:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},KI45:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},N9n2:function(e,t,r){var n=r("SqZg"),o=r("vjea");e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=n(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}},SqZg:function(e,t,r){e.exports=r("o5io")},TRZx:function(e,t,r){e.exports=r("Wk4r")},TUA0:function(e,t){e.exports=require("core-js/library/fn/object/define-property")},U7sd:function(e,t){e.exports=require("next-server/head")},UWCm:function(e,t){e.exports=require("react-is")},UXZV:function(e,t,r){e.exports=r("dGr4")},WaGi:function(e,t,r){var n=r("hfKm");function o(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),n(e,o.key,o)}}e.exports=function(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),e}},Wk4r:function(e,t){e.exports=require("core-js/library/fn/object/set-prototype-of")},XVgq:function(e,t,r){e.exports=r("gHn/")},YFqc:function(e,t,r){e.exports=r("cTJO")},Z7t5:function(e,t,r){e.exports=r("vqFK")},ZDA2:function(e,t,r){var n=r("iZP3"),o=r("K47E");e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?o(e):t}},aAV7:function(e,t){e.exports=require("core-js/library/fn/reflect/construct")},b3CU:function(e,t,r){var n=r("pbKT"),o=r("vjea");function a(t,r,u){return!function(){if("undefined"==typeof Reflect||!n)return!1;if(n.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(n(Date,[],function(){})),!0}catch(e){return!1}}()?e.exports=a=function(e,t,r){var n=[null];n.push.apply(n,t);var a=new(Function.bind.apply(e,n));return r&&o(a,r.prototype),a}:e.exports=a=n,a.apply(null,arguments)}e.exports=a},bzos:function(e,t){e.exports=require("url")},cDcd:function(e,t){e.exports=require("react")},cTJO:function(e,t,r){"use strict";var n=r("KI45"),o=n(r("9Jkg")),a=n(r("iZP3")),u=n(r("/HRN")),i=n(r("WaGi")),c=n(r("ZDA2")),f=n(r("/+P4")),l=n(r("N9n2")),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},p=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var d=r("bzos"),h=s(r("cDcd")),y=(p(r("rf6O")),s(r("20a2"))),v=r("p8BD");var m=function(e){function t(){var e,r,n,o,i;return(0,u.default)(this,t),(e=(0,c.default)(this,(0,f.default)(t).apply(this,arguments))).formatUrls=(r=function(e,t){return{href:e&&"object"===(0,a.default)(e)?v.formatWithValidation(e):e,as:t&&"object"===(0,a.default)(t)?v.formatWithValidation(t):t}},n=null,o=null,i=null,function(e,t){if(e===n&&t===o)return i;var a=r(e,t);return n=e,o=t,i=a,a}),e.linkClicked=function(t){var r=t.currentTarget,n=r.nodeName,o=r.target;if("A"!==n||!(o&&"_self"!==o||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var a=e.formatUrls(e.props.href,e.props.as),u=a.href,i=a.as;if(function(e){var t=d.parse(e,!1,!0),r=d.parse(v.getLocationOrigin(),!1,!0);return!t.host||t.protocol===r.protocol&&t.host===r.host}(u)){var c=window.location.pathname;u=d.resolve(c,u),i=i?d.resolve(c,i):u,t.preventDefault();var f=e.props.scroll;null==f&&(f=i.indexOf("#")<0),y.default[e.props.replace?"replace":"push"](u,i,{shallow:e.props.shallow}).then(function(e){e&&f&&(window.scrollTo(0,0),document.body.focus())}).catch(function(t){e.props.onError&&e.props.onError(t)})}}},e}return(0,l.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,o.default)(this.props.href)!==(0,o.default)(e.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,r=d.resolve(e,t);y.default.prefetch(r)}}},{key:"render",value:function(){var e=this,t=this.props.children,r=this.formatUrls(this.props.href,this.props.as),n=r.href,o=r.as;"string"==typeof t&&(t=h.default.createElement("a",null,t));var a=h.Children.only(t),u={onClick:function(t){a.props&&"function"==typeof a.props.onClick&&a.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(u.href=o||n),u.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(u.href=y.Router._rewriteUrlForNextExport(u.href)),h.default.cloneElement(a,u)}}]),t}(h.Component);t.default=m},dGr4:function(e,t){e.exports=require("core-js/library/fn/object/assign")},fozc:function(e,t){e.exports=require("core-js/library/fn/json/stringify")},"gHn/":function(e,t){e.exports=require("core-js/library/fn/symbol/iterator")},hfKm:function(e,t,r){e.exports=r("TUA0")},iZP3:function(e,t,r){var n=r("XVgq"),o=r("Z7t5");function a(e){return(a="function"==typeof o&&"symbol"==typeof n?function(e){return typeof e}:function(e){return e&&"function"==typeof o&&e.constructor===o&&e!==o.prototype?"symbol":typeof e})(e)}function u(t){return"function"==typeof o&&"symbol"===a(n)?e.exports=u=function(e){return a(e)}:e.exports=u=function(e){return e&&"function"==typeof o&&e.constructor===o&&e!==o.prototype?"symbol":a(e)},u(t)}e.exports=u},nOHt:function(e,t,r){"use strict";var n=r("KI45"),o=n(r("UXZV")),a=n(r("iZP3")),u=n(r("b3CU")),i=n(r("hfKm")),c=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var f=c(r("qxCs")),l={router:null,readyCallbacks:[],ready:function(e){if(this.router)return e();"undefined"!=typeof window&&this.readyCallbacks.push(e)}},s=["pathname","route","query","asPath"],p=["components"],d=["push","replace","reload","back","prefetch","beforePopState"];function h(){if(!l.router){throw new Error('No router instance found.\nYou should only use "next/router" inside the client side of your app.\n')}}Object.defineProperty(l,"events",{get:function(){return f.default.events}}),p.concat(s).forEach(function(e){(0,i.default)(l,e,{get:function(){return h(),l.router[e]}})}),d.forEach(function(e){l[e]=function(){var t;return h(),(t=l.router)[e].apply(t,arguments)}}),["routeChangeStart","beforeHistoryChange","routeChangeComplete","routeChangeError","hashChangeStart","hashChangeComplete"].forEach(function(e){l.ready(function(){f.default.events.on(e,function(){var t="on".concat(e.charAt(0).toUpperCase()).concat(e.substring(1));if(l[t])try{l[t].apply(l,arguments)}catch(e){console.error("Error when running the Router event: ".concat(t)),console.error("".concat(e.message,"\n").concat(e.stack))}})})}),t.default=l;var y=r("0Bsm");t.withRouter=y.default,t.createRouter=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return l.router=(0,u.default)(f.default,t),l.readyCallbacks.forEach(function(e){return e()}),l.readyCallbacks=[],l.router},t.Router=f.default,t.makePublicRouterInstance=function(e){for(var t={},r=0;r<s.length;r++){var n=s[r];"object"!==(0,a.default)(e[n])?t[n]=e[n]:t[n]=(0,o.default)({},e[n])}return t.events=f.default.events,p.forEach(function(r){(0,i.default)(t,r,{get:function(){return e[r]}})}),d.forEach(function(r){t[r]=function(){return e[r].apply(e,arguments)}}),t}},o5io:function(e,t){e.exports=require("core-js/library/fn/object/create")},p8BD:function(e,t){e.exports=require("next-server/dist/lib/utils")},pbKT:function(e,t,r){e.exports=r("aAV7")},qxCs:function(e,t){e.exports=require("next-server/dist/lib/router/router")},rf6O:function(e,t){e.exports=require("prop-types")},vjea:function(e,t,r){var n=r("TRZx");function o(t,r){return e.exports=o=n||function(e,t){return e.__proto__=t,e},o(t,r)}e.exports=o},vqFK:function(e,t){e.exports=require("core-js/library/fn/symbol")}});