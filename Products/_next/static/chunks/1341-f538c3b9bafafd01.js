(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1341],{6187:function(e,t,s){"use strict";var n=s(4111),r=s(1438),a=s(2951),o=s(8029),c=s(460),i=s(5893),l=s(7294),u=s(5697),d=s.n(u),m={from:d().number,to:d().number.isRequired,speed:d().number.isRequired,delay:d().number,onComplete:d().func,digits:d().number,className:d().string,tagName:d().string,children:d().func,easing:d().func,position:d().shape({height:d().number,startY:d().number})},f=function(e){(0,o.Z)(s,e);var t=(0,c.Z)(s);function s(e){var a;(0,r.Z)(this,s),a=t.call(this,e);var o=e.from;return a.state={counter:o,restart:!1},a.start=a.start.bind((0,n.Z)(a)),a.clear=a.clear.bind((0,n.Z)(a)),a.next=a.next.bind((0,n.Z)(a)),a.updateCounter=a.updateCounter.bind((0,n.Z)(a)),a}return(0,a.Z)(s,[{key:"componentDidMount",value:function(){var e=this;this.start(),window.addEventListener("scroll",(function(){if(e.props.position){var t=e.props.position,s=t.from,n=t.to;window.scrollY>s&&window.scrollY<n&&e.state.restart&&(e.start(),e.setState({restart:!1})),window.scrollY<s&&!e.state.restart&&e.setState({restart:!0})}}))}},{key:"componentWillUnmount",value:function(){this.clear()}},{key:"start",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,t=this;this.clear();var s=e.from;this.setState({counter:s},(function(){var e=t.props,s=e.speed,n=e.delay,r=Date.now();t.endDate=r+s,t.scheduleNextUpdate(r,n),t.raf=requestAnimationFrame(t.next)}))}},{key:"next",value:function(){var e=Date.now(),t=this.props,s=t.speed,n=t.onComplete,r=t.delay;if(e>=this.nextUpdate){var a=Math.max(0,Math.min(1,1-(this.endDate-e)/s));this.updateCounter(a),this.scheduleNextUpdate(e,r)}e<this.endDate?this.raf=requestAnimationFrame(this.next):n&&n()}},{key:"scheduleNextUpdate",value:function(e,t){this.nextUpdate=Math.min(e+t,this.endDate)}},{key:"updateCounter",value:function(e){var t=this.props,s=t.from,n=s+(t.to-s)*(0,t.easing)(e);this.setState({counter:n})}},{key:"clear",value:function(){cancelAnimationFrame(this.raf)}},{key:"render",value:function(){var e=this.props,t=e.className,s=e.digits,n=e.tagName,r=e.children,a=this.state.counter.toFixed(s);return r?r(a):(0,i.jsx)(n,{className:t,children:a})}}]),s}(l.PureComponent);f.propTypes=m,f.defaultProps={from:0,delay:100,digits:0,tagName:"span",easing:function(e){return e}},t.Z=f},1334:function(e,t,s){"use strict";var n=s(7568),r=s(655),a=s(5893),o=s(7294),c=s(6187);s(9669);t.Z=function(){var e=(0,o.useRef)(null),t=(0,o.useState)({fullname:"",email:"",phone:"",cv_file:{},coverletter:""}),s=(t[0],t[1],(0,o.useState)({from:2500,to:3e3})),i=s[0],l=s[1];(0,o.useEffect)((function(){if(e){var t=e.current.offsetTop,s=e.current.offsetHeight;l({from:t-s,to:t+s})}}),[e]);var u=function(e){},d=function(){var e=(0,n.Z)((function(e){return(0,r.__generator)(this,(function(t){return e.preventDefault(),alert("Form submitted successfully."),[2]}))}));return function(t){return e.apply(this,arguments)}}();return(0,a.jsxs)("section",{className:"career-form section-padding",ref:e,children:[(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-lg-6",children:(0,a.jsxs)("div",{className:"form-numbers",children:[(0,a.jsx)("h2",{children:" Looking For Oppertunity "}),(0,a.jsx)("p",{children:" More than 15,000 companies trust and choose Itech "}),(0,a.jsx)("div",{className:"career-numbers mt-50",children:(0,a.jsxs)("div",{className:"row gx-5",children:[(0,a.jsx)("div",{className:"col-5",children:(0,a.jsxs)("div",{className:"mum-card",children:[(0,a.jsxs)("h3",{children:[" ",(0,a.jsx)(c.Z,{className:"counter",from:0,to:5e3,speed:1500,position:i})," "]}),(0,a.jsx)("small",{children:" Project Completed "})]})}),(0,a.jsx)("div",{className:"col-5",children:(0,a.jsxs)("div",{className:"mum-card",children:[(0,a.jsxs)("h3",{children:[" ",(0,a.jsx)(c.Z,{className:"counter",from:0,to:1,speed:1500,position:i})," M+ "]}),(0,a.jsx)("small",{children:" Happy Users "})]})}),(0,a.jsx)("div",{className:"col-5",children:(0,a.jsxs)("div",{className:"mum-card",children:[(0,a.jsxs)("h3",{children:[" ",(0,a.jsx)(c.Z,{className:"counter",from:0,to:100,speed:1500,position:i})," "]}),(0,a.jsx)("small",{children:" Team Members "})]})}),(0,a.jsx)("div",{className:"col-5",children:(0,a.jsxs)("div",{className:"mum-card",children:[(0,a.jsxs)("h3",{children:[" ",(0,a.jsx)(c.Z,{className:"counter",from:0,to:10,speed:1500,position:i})," "]}),(0,a.jsx)("small",{children:" Offline Basement "})]})})]})})]})}),(0,a.jsx)("div",{className:"col-lg-6",children:(0,a.jsxs)("form",{action:"contact.php",className:"form",children:[(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-lg-6",children:(0,a.jsxs)("div",{className:"form-group mb-4",children:[(0,a.jsx)("input",{type:"text",className:"form-control",placeholder:"Full Name",onChange:u}),(0,a.jsxs)("span",{className:"icon",children:[" ",(0,a.jsx)("i",{className:"fas fa-user"})," "]})]})}),(0,a.jsx)("div",{className:"col-lg-6",children:(0,a.jsxs)("div",{className:"form-group mb-4",children:[(0,a.jsx)("input",{type:"text",className:"form-control",placeholder:"Email Adress",onChange:u}),(0,a.jsxs)("span",{className:"icon",children:[" ",(0,a.jsx)("i",{className:"fas fa-envelope"})," "]})]})}),(0,a.jsx)("div",{className:"col-lg-6",children:(0,a.jsxs)("div",{className:"form-group mb-4",children:[(0,a.jsx)("input",{type:"text",className:"form-control",placeholder:"Phone Number",onChange:u}),(0,a.jsxs)("span",{className:"icon",children:[" ",(0,a.jsx)("i",{className:"fas fa-phone"})," "]})]})}),(0,a.jsx)("div",{className:"col-lg-6",children:(0,a.jsx)("div",{className:"form-group mb-4 upload-card",children:(0,a.jsxs)("div",{className:"form-control",children:[(0,a.jsxs)("span",{id:"upload_text",children:[" ",(0,a.jsx)("i",{className:"fas fa-cloud"})," Upload CV"]}),(0,a.jsx)("input",{type:"file",className:"upload_input",onChange:u})]})})}),(0,a.jsx)("div",{className:"col-lg-12",children:(0,a.jsxs)("div",{className:"form-group mb-4",children:[(0,a.jsx)("textarea",{rows:"7",className:"form-control",placeholder:"Cover letter",onChange:u}),(0,a.jsxs)("span",{className:"icon",children:[" ",(0,a.jsx)("i",{className:"fas fa-pen"})," "]})]})})]}),(0,a.jsx)("button",{className:"btn bg-white sm-butn mt-4 rounded-3",onClick:d,children:(0,a.jsxs)("span",{className:"text-dark",children:[" Make Request ",(0,a.jsx)("i",{className:"fal fa-long-arrow-right ms-2 color-blue5"})," "]})})]})})]})}),(0,a.jsx)("img",{src:"/assets/img/careers/map.png",alt:"",className:"map_img"})]})}},1132:function(e,t,s){"use strict";var n=s(5893);s(7294);t.Z=function(e){var t=e.page,s=e.title;return(0,n.jsx)("section",{className:"inner-header style-5",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"content",children:[(0,n.jsxs)("div",{className:"links",children:[(0,n.jsx)("a",{href:"#",children:" Home "}),(0,n.jsxs)("a",{href:"#",className:"ms-1",children:[" ",t," "]})]}),(0,n.jsxs)("h2",{children:[" ",s," "]}),(0,n.jsx)("img",{src:"/assets/img/header/head7_rock.png",alt:"",className:"side-img slide_up_down"})]})})})}},5519:function(){},2703:function(e,t,s){"use strict";var n=s(414);function r(){}function a(){}a.resetWarningCache=r,e.exports=function(){function e(e,t,s,r,a,o){if(o!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var s={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:r};return s.PropTypes=s,s}},5697:function(e,t,s){e.exports=s(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},4111:function(e,t,s){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}s.d(t,{Z:function(){return n}})},1438:function(e,t,s){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}s.d(t,{Z:function(){return n}})},2951:function(e,t,s){"use strict";function n(e,t){for(var s=0;s<t.length;s++){var n=t[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,t,s){return t&&n(e.prototype,t),s&&n(e,s),e}s.d(t,{Z:function(){return r}})},460:function(e,t,s){"use strict";function n(e){return n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(e)}function r(e){return n(e)}s.d(t,{Z:function(){return c}});var a=s(4111);function o(e,t){return!t||"object"!==((s=t)&&s.constructor===Symbol?"symbol":typeof s)&&"function"!==typeof t?(0,a.Z)(e):t;var s}function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,n=r(e);if(t){var a=r(this).constructor;s=Reflect.construct(n,arguments,a)}else s=n.apply(this,arguments);return o(this,s)}}},8029:function(e,t,s){"use strict";function n(e,t){return n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(e,t)}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}s.d(t,{Z:function(){return r}})}}]);