(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3901],{770:function(s,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/home-nft-marketplace",function(){return i(444)}])},7549:function(s,e,i){"use strict";function a(s,e,i){s&&(window.pageYOffset>300?(s.classList.add("nav-scroll"),e&&s.classList.remove("bg-transparent")):(s.classList.remove("nav-scroll"),e&&s.classList.add("bg-transparent")),window.addEventListener("scroll",(function(){window.pageYOffset>300?(s.classList.add("nav-scroll"),e&&s.classList.remove("bg-transparent")):(s.classList.remove("nav-scroll"),e&&s.classList.add("bg-transparent"))})))}i.d(e,{Z:function(){return a}})},6187:function(s,e,i){"use strict";var a=i(4111),n=i(1438),t=i(2951),l=i(8029),r=i(460),c=i(5893),o=i(7294),d=i(5697),m=i.n(d),h={from:m().number,to:m().number.isRequired,speed:m().number.isRequired,delay:m().number,onComplete:m().func,digits:m().number,className:m().string,tagName:m().string,children:m().func,easing:m().func,position:m().shape({height:m().number,startY:m().number})},p=function(s){(0,l.Z)(i,s);var e=(0,r.Z)(i);function i(s){var t;(0,n.Z)(this,i),t=e.call(this,s);var l=s.from;return t.state={counter:l,restart:!1},t.start=t.start.bind((0,a.Z)(t)),t.clear=t.clear.bind((0,a.Z)(t)),t.next=t.next.bind((0,a.Z)(t)),t.updateCounter=t.updateCounter.bind((0,a.Z)(t)),t}return(0,t.Z)(i,[{key:"componentDidMount",value:function(){var s=this;this.start(),window.addEventListener("scroll",(function(){if(s.props.position){var e=s.props.position,i=e.from,a=e.to;window.scrollY>i&&window.scrollY<a&&s.state.restart&&(s.start(),s.setState({restart:!1})),window.scrollY<i&&!s.state.restart&&s.setState({restart:!0})}}))}},{key:"componentWillUnmount",value:function(){this.clear()}},{key:"start",value:function(){var s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,e=this;this.clear();var i=s.from;this.setState({counter:i},(function(){var s=e.props,i=s.speed,a=s.delay,n=Date.now();e.endDate=n+i,e.scheduleNextUpdate(n,a),e.raf=requestAnimationFrame(e.next)}))}},{key:"next",value:function(){var s=Date.now(),e=this.props,i=e.speed,a=e.onComplete,n=e.delay;if(s>=this.nextUpdate){var t=Math.max(0,Math.min(1,1-(this.endDate-s)/i));this.updateCounter(t),this.scheduleNextUpdate(s,n)}s<this.endDate?this.raf=requestAnimationFrame(this.next):a&&a()}},{key:"scheduleNextUpdate",value:function(s,e){this.nextUpdate=Math.min(s+e,this.endDate)}},{key:"updateCounter",value:function(s){var e=this.props,i=e.from,a=i+(e.to-i)*(0,e.easing)(s);this.setState({counter:a})}},{key:"clear",value:function(){cancelAnimationFrame(this.raf)}},{key:"render",value:function(){var s=this.props,e=s.className,i=s.digits,a=s.tagName,n=s.children,t=this.state.counter.toFixed(i);return n?n(t):(0,c.jsx)(a,{className:e,children:t})}}]),i}(o.PureComponent);p.propTypes=h,p.defaultProps={from:0,delay:100,digits:0,tagName:"span",easing:function(s){return s}},e.Z=p},2773:function(s,e,i){"use strict";i.d(e,{Z:function(){return o}});var a=i(5893),n=i(7294),t=i(9008),l=i.n(t);i(4298);var r=function(s){var e=s.topText;return(0,n.useEffect)((function(){!function(){var s=document.querySelector(".to_top");s&&(window.addEventListener("scroll",(function(){window.scrollY>700?s.classList.add("show"):s.classList.remove("show")})),s.addEventListener("click",(function(s){s.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})})))}()}),[]),(0,a.jsxs)("a",{href:"#",className:"to_top ".concat(e?"":"bg-gray rounded-circle icon-40 d-inline-flex align-items-center justify-content-center"),children:[(0,a.jsx)("i",{className:"bi bi-chevron-up ".concat(e?"":"fs-6 text-dark")}),e&&(0,a.jsx)("small",{children:"Top"})]})};function c(s){if(s){var e,i=document.querySelector('link[href="./assets/css/rtl_style.css"]'),a=document.querySelector('link[href="./assets/css/style.css"]');if(!i||!a)return;if(null===(e=a.nextElementSibling.href)||void 0===e?void 0:e.includes("./assets/css/rtl_style.css"))return;i.before(a)}else{var n,t=document.querySelector('link[href="./assets/css/lib/bootstrap.min.css"]'),l=document.querySelector('link[href="./assets/css/style.css"]');if(!t||!l)return;if(null===(n=t.nextElementSibling.href)||void 0===n?void 0:n.includes("./assets/css/style.css"))return;t.after(l)}}var o=function(s){var e=s.children,i=s.scrollTopText,t=window.localStorage.getItem("language");t&&("en"==t?window.localStorage.setItem("isRTL",!0):window.localStorage.setItem("isRTL",!1)),c(o=window.localStorage.getItem("isRTL"));var o="";return(0,n.useEffect)((function(){var s=navigator.language||navigator.userLanguage,e=window.localStorage.getItem("language");e?"en"==e?window.localStorage.setItem("isRTL",!0):window.localStorage.setItem("isRTL",!1):(s.indexOf("zh")>-1&&!window.localStorage.getItem("isRTL")&&window.localStorage.setItem("isRTL",!1),-1!=s.indexOf("zh")||window.localStorage.getItem("isRTL")||window.localStorage.setItem("isRTL",!0)),c(o=window.localStorage.getItem("isRTL"))})),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(l(),{children:[(0,a.jsx)("link",{rel:"stylesheet",href:"./assets/css/lib/bootstrap-icons.css"}),(0,a.jsx)("link",{rel:"stylesheet",href:"./assets/css/lib/all.min.css"}),(0,a.jsx)("link",{rel:"stylesheet",href:"./assets/css/lib/animate.css"}),o?(0,a.jsx)("link",{rel:"stylesheet",href:"./assets/css/lib/bootstrap.rtl.min.css"}):(0,a.jsx)("link",{rel:"stylesheet",href:"./assets/css/lib/bootstrap.min.css"}),(0,a.jsx)("link",{rel:"stylesheet",href:"./assets/css/style.css"}),o?(0,a.jsx)("link",{rel:"stylesheet",href:"./assets/css/rtl_style.css"}):null]}),e,(0,a.jsx)(r,{topText:i})]})}},444:function(s,e,i){"use strict";i.r(e),i.d(e,{default:function(){return _}});var a=i(5893),n=i(7294),t=i(9008),l=i.n(t),r=i(2773),c=i(1664),o=i.n(c),d=i(7549),m=function(){var s=(0,n.useRef)(null);(0,n.useEffect)((function(){(0,d.Z)(s.current)}),[s]);var e=function(s){var e,i,a=s.target.classList.contains("dropdown-toggle")?s.target:s.target.querySelector(".dropdown-toggle"),n=null===a||void 0===a?void 0:a.nextElementSibling;null===a||void 0===a||null===(e=a.classList)||void 0===e||e.add("show"),null===n||void 0===n||null===(i=n.classList)||void 0===i||i.add("show")},i=function(s){var e,i,a=s.target.classList.contains("dropdown")?s.target:s.target.closest(".dropdown"),n=a.querySelector(".dropdown-toggle"),t=a.querySelector(".dropdown-menu");null===n||void 0===n||null===(e=n.classList)||void 0===e||e.remove("show"),null===t||void 0===t||null===(i=t.classList)||void 0===i||i.remove("show")};return(0,a.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark style-12",ref:s,children:(0,a.jsxs)("div",{className:"container-fluid",children:[(0,a.jsx)("a",{className:"navbar-brand",href:"#",children:(0,a.jsx)("img",{src:"./assets/img/logo_12.png",alt:""})}),(0,a.jsx)("div",{className:"nav-search d-none d-lg-block",children:(0,a.jsxs)("div",{className:"form-group",children:[(0,a.jsxs)("button",{className:"icon",type:"submit",children:[" ",(0,a.jsx)("i",{className:"fal fa-search"})," "]}),(0,a.jsx)("input",{type:"text",className:"form-control",placeholder:"Search NFT"})]})}),(0,a.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,a.jsx)("span",{className:"navbar-toggler-icon"})}),(0,a.jsxs)("div",{className:"collapse navbar-collapse align-items-center",id:"navbarSupportedContent",children:[(0,a.jsxs)("ul",{className:"navbar-nav m-auto",children:[(0,a.jsxs)("li",{className:"nav-item dropdown",onMouseMove:e,onMouseLeave:i,children:[(0,a.jsx)("a",{className:"nav-link active dropdown-toggle",href:"#",id:"navbarDropdown1",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Homes"}),(0,a.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"navbarDropdown1",children:[(0,a.jsx)("li",{children:(0,a.jsx)(o(),{href:"/",children:(0,a.jsx)("a",{className:"dropdown-item",children:" Landing Preview "})})}),(0,a.jsx)("li",{children:(0,a.jsx)(o(),{href:"/home-it-solutions2",children:(0,a.jsx)("a",{className:"dropdown-item",children:" Creative It Solutions "})})}),(0,a.jsx)("li",{children:(0,a.jsx)(o(),{href:"/home-data-analysis",children:(0,a.jsx)("a",{className:"dropdown-item",children:" Data Analysis "})})}),(0,a.jsx)("li",{children:(0,a.jsx)(o(),{href:"/home-app-landing",children:(0,a.jsx)("a",{className:"dropdown-item",children:" App Landing "})})}),(0,a.jsx)("li",{children:(0,a.jsx)(o(),{href:"/home-saas-technology",children:(0,a.jsx)("a",{className:"dropdown-item",children:" Saas Technology "})})}),(0,a.jsx)("li",{children:(0,a.jsx)(o(),{href:"/home-marketing-startup",children:(0,a.jsx)("a",{className:"dropdown-item",children:" Marketing Startup "})})}),(0,a.jsx)("li",{children:(0,a.jsx)(o(),{href:"/home-it-solutions",children:(0,a.jsx)("a",{className:"dropdown-item",children:" It Solution "})})}),(0,a.jsx)("li",{children:(0,a.jsx)(o(),{href:"/home-software-company",children:(0,a.jsx)("a",{className:"dropdown-item",children:" Software Company "})})}),(0,a.jsx)("li",{children:(0,a.jsx)(o(),{href:"/home-digital-agency",children:(0,a.jsx)("a",{className:"dropdown-item",children:" Digital Agency "})})}),(0,a.jsx)("li",{children:(0,a.jsx)(o(),{href:"/home-modren-shop",children:(0,a.jsx)("a",{className:"dropdown-item",children:" Modren Shop "})})})]})]}),(0,a.jsxs)("li",{className:"nav-item dropdown",onMouseMove:e,onMouseLeave:i,children:[(0,a.jsx)("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown2",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"pages"}),(0,a.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"navbarDropdown1",children:[(0,a.jsx)("li",{children:(0,a.jsx)(o(),{href:"/page-about-app",children:(0,a.jsx)("a",{className:"dropdown-item",children:"about"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(o(),{href:"/page-product-app",children:(0,a.jsx)("a",{className:"dropdown-item",children:"product"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(o(),{href:"/page-services-app",children:(0,a.jsx)("a",{className:"dropdown-item",children:"services"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(o(),{href:"/page-shop-app",children:(0,a.jsx)("a",{className:"dropdown-item",children:"shop"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(o(),{href:"/page-single-project-app",children:(0,a.jsx)("a",{className:"dropdown-item",children:"single project"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(o(),{href:"/page-single-post-app",children:(0,a.jsx)("a",{className:"dropdown-item",children:"single post"})})})]})]}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(o(),{href:"/page-portfolio-app",children:(0,a.jsx)("a",{className:"nav-link",children:"portfolio"})})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(o(),{href:"/page-blog-app",children:(0,a.jsx)("a",{className:"nav-link",children:"blog"})})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(o(),{href:"/page-contact-app",children:(0,a.jsx)("a",{className:"nav-link",children:"contact"})})})]}),(0,a.jsx)("div",{className:"nav-side mt-3 mt-lg-0",children:(0,a.jsxs)("div",{className:"d-lg-flex align-items-center d-block",children:[(0,a.jsxs)("div",{className:"social-icons",children:[(0,a.jsx)("p",{children:" Connect Us : "}),(0,a.jsxs)("div",{className:"icons",children:[(0,a.jsxs)("a",{href:"#",children:[" ",(0,a.jsx)("i",{className:"fab fa-twitter"})," "]}),(0,a.jsxs)("a",{href:"#",children:[" ",(0,a.jsx)("i",{className:"fab fa-discord"})," "]}),(0,a.jsxs)("a",{href:"#",children:[" ",(0,a.jsx)("i",{className:"fab fa-linkedin"})," "]})]})]}),(0,a.jsx)("a",{href:"#0",className:"btn rounded-3 color-000 fw-bold border-1 border brd-light bg-yellowGreen ms-lg-4 mt-3 mt-lg-0",target:"_blank",children:(0,a.jsxs)("small",{children:[" ",(0,a.jsx)("i",{className:"fas fa-wallet me-1"})," Connect Wallet "]})})]})}),(0,a.jsx)("div",{className:"nav-search d-block d-lg-none",children:(0,a.jsxs)("div",{className:"form-group",children:[(0,a.jsxs)("button",{className:"icon",type:"submit",children:[" ",(0,a.jsx)("i",{className:"fal fa-search"})," "]}),(0,a.jsx)("input",{type:"text",className:"form-control",placeholder:"Search NFT"})]})})]})]})})},h=i(1239),p=(i(2157),function(){var s=(0,n.useState)(!1),e=s[0],i=s[1];return(0,a.jsxs)("header",{className:"style-12",children:[(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"info",children:[(0,a.jsx)("h2",{children:" Discover "}),(0,a.jsxs)("h2",{className:"line-title",children:["  ",(0,a.jsx)("span",{className:"line-text",children:"  & Get Super "})," ",(0,a.jsxs)("small",{children:[" The Worlds Largest Digital Marketplace ",(0,a.jsx)("br",{})," For Crypto Collectibles And Non-Fungible ",(0,a.jsx)("br",{})," Tokens for worldwide. "]})," "]}),(0,a.jsx)("h2",{children:" Digital Assets "}),(0,a.jsx)("img",{src:"./assets/img/icons/star2.png",alt:"",className:"star1 scale_up_down"}),(0,a.jsx)("img",{src:"./assets/img/icons/star2.png",alt:"",className:"star2 scale_up_down"})]})}),(0,a.jsx)("div",{className:"imgs-content pt-30",children:(0,a.jsx)("div",{className:"container-fluid",children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-lg-3 col-sm-6 pt-150 col-6",children:(0,a.jsxs)("div",{className:"main-img img-cover",children:[(0,a.jsx)("img",{src:"./assets/img/header/header_12_2.png",alt:""}),(0,a.jsxs)("div",{className:"inf",children:[(0,a.jsx)("h6",{children:" Cyber CloneX "}),(0,a.jsxs)("p",{children:[" ",(0,a.jsx)("span",{className:"color-999",children:" Floor: "})," 1.2 ETH "]})]})]})}),(0,a.jsx)("div",{className:"col-lg-6 order-last order-lg-0",children:(0,a.jsxs)("div",{className:"vid-info",children:[(0,a.jsx)("div",{className:"icon-content",children:(0,a.jsx)("div",{className:"icon",children:(0,a.jsx)("img",{src:"./assets/img/icons/star3.png",alt:""})})}),(0,a.jsxs)("div",{className:"img-vid-content mb-5 mb-lg-0",children:[(0,a.jsx)("p",{children:" How it Works "}),(0,a.jsx)("div",{className:"img-line",children:(0,a.jsx)("img",{src:"./assets/img/header/header_12_linearrow.png",alt:""})}),(0,a.jsxs)("div",{className:"img-vid img-cover",children:[(0,a.jsx)("img",{src:"./assets/img/header/header_12_3.png",alt:""}),(0,a.jsx)("a",{href:"https://youtu.be/msUVN5-Gphk?t=21","data-lity":!0,className:"vid_icon icon-60 img-cover rounded-circle",onClick:function(s){s.preventDefault(),i(!0)},children:(0,a.jsx)("i",{className:"fas fa-play"})})]})]})]})}),(0,a.jsx)("div",{className:"col-lg-3 col-sm-6 col-6",children:(0,a.jsxs)("div",{className:"main-img img-cover",children:[(0,a.jsx)("img",{src:"./assets/img/header/header_12_1.png",alt:""}),(0,a.jsxs)("div",{className:"inf",children:[(0,a.jsx)("h6",{children:" Alex Pablo "}),(0,a.jsxs)("p",{children:[" ",(0,a.jsx)("span",{className:"color-999",children:" Floor: "})," 0.9 ETH "]})]})]})})]})})}),(0,a.jsx)(h.Z,{channel:"youtube",autoplay:!0,isOpen:e,videoId:"msUVN5-Gphk",onClose:function(){return i(!1)}})]})}),x=JSON.parse('{"u":[{"filter":"all","text":"All Category"},{"filter":".art","text":"Art"},{"filter":".virtual","text":"Virtual Worlds"},{"filter":".photography","text":"Photography"}],"q":[{"filter":"art","hearts":"14","sort":"1.00","image":"./assets/img/projects/nf1.png","bid":"6/50","title":"Pakora Vision #190","placeBit":"10"},{"filter":"virtual","hearts":"12","sort":"0.99","image":"./assets/img/projects/nf2.png","bid":"4/40","title":"Cyber Punk #189","placeBit":"2"},{"filter":"photography","hearts":"12","sort":"0.99","image":"./assets/img/projects/nf3.png","bid":"4/40","title":"Cyber Hunter #22","placeBit":"9"},{"filter":"photography","hearts":"33","sort":"1.09","image":"./assets/img/projects/nf4.png","bid":"19/99","title":"Creed Mirage #85","placeBit":"20"},{"filter":"virtual","hearts":"10","sort":"0.77","image":"./assets/img/projects/nf5.png","bid":"15/80","title":"Korola Vhaji #191","placeBit":"5"},{"filter":"art","hearts":"21","sort":"0.39","image":"./assets/img/projects/nf6.png","bid":"6/50","title":"Kacchi Biriyani #205","placeBit":"8"},{"filter":"art","hearts":"21","sort":"1.01","image":"./assets/img/projects/nf7.png","bid":"6/50","title":"iOs Punk Series #190","placeBit":"6"},{"filter":"photography","hearts":"21","sort":"1.01","image":"./assets/img/projects/nf8.png","bid":"6/50","title":"Humble Assasin #199","placeBit":"6"}]}'),j=function(){(0,n.useEffect)((function(){setTimeout((function(){mixitup&&mixitup(".projects")}),0)}),[]);var s=function(s){document.querySelectorAll("span[data-filter]").forEach((function(s){return s.classList.remove("active")})),s.currentTarget.classList.add("active")};return(0,a.jsx)("section",{className:"projects section-padding style-12",children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsxs)("div",{className:"section-head text-center mb-70 style-12",children:[(0,a.jsxs)("h6",{className:"justify-content-center mb-3",children:[(0,a.jsx)("img",{src:"./assets/img/icons/star2.png",alt:"",className:"icon"}),(0,a.jsx)("span",{className:"mx-2",children:" Discover "}),(0,a.jsx)("img",{src:"./assets/img/icons/star2.png",alt:"",className:"icon"})]}),(0,a.jsxs)("h2",{children:[" New NFT ",(0,a.jsx)("span",{children:" Arrivals "})," "]})]}),(0,a.jsxs)("div",{className:"content",children:[(0,a.jsx)("div",{className:"mix_tabs mb-20",children:x.u.map((function(e,i){return(0,a.jsxs)("span",{className:"".concat(0===i?"active":""," tab-link"),"data-filter":e.filter,onClick:s,children:[(0,a.jsx)("img",{src:"./assets/img/icons/star3.png",alt:"",className:"icon"}),"  ",e.text]},i)}))}),(0,a.jsx)("div",{className:"row items",children:x.q.map((function(s,e){return(0,a.jsx)("div",{className:"col-lg-3 col-sm-6 mix ".concat(s.filter),children:(0,a.jsxs)("div",{className:"project-card",children:[(0,a.jsxs)("div",{className:"top-inf",children:[(0,a.jsxs)("span",{children:[" ",(0,a.jsx)("i",{className:"fas fa-heart"})," ",s.hearts," "]}),(0,a.jsxs)("span",{children:[" ",(0,a.jsx)("i",{className:"fas fa-sort color-yellowGreen"})," ",s.sort," "]})]}),(0,a.jsxs)("div",{className:"img img-cover",children:[(0,a.jsx)("img",{src:s.image,alt:""}),(0,a.jsxs)("a",{href:"#",className:"butn bg-yellowGreen rounded-3 hover-shadow",children:[" ",(0,a.jsxs)("span",{className:"text-dark",children:[" ",(0,a.jsx)("i",{className:"fal fa-shopping-basket me-1"}),"  Buy Now "]})," "]})]}),(0,a.jsxs)("div",{className:"info",children:[(0,a.jsxs)("small",{children:[" Highest bid ",(0,a.jsxs)("span",{className:"color-yellowGreen",children:[" ",s.bid," "]})," "]}),(0,a.jsxs)("h6",{children:[" ",s.title," "]}),(0,a.jsxs)("div",{className:"btm-inf",children:[(0,a.jsxs)("p",{children:[" ",(0,a.jsx)("i",{className:"fal fa-users color-yellowGreen"})," ",s.placeBit,"+ Place Bit "]}),(0,a.jsxs)("p",{children:[" ",(0,a.jsx)("i",{className:"fal fa-history color-yellowGreen"})," History "]})]})]})]})},e)}))})]})]})})},g=i(8494),u=i(8116),f=i(6187),v=JSON.parse('[{"image":"./assets/img/team/1.jpeg","name":"SnoopDogg","rise":1200000},{"image":"./assets/img/team/2.jpeg","name":"Pablo Scober","rise":1200000},{"image":"./assets/img/team/3.jpeg","name":"Helsinki Del","rise":1200000},{"image":"./assets/img/team/4.jpeg","name":"Rosalina Will","rise":1200000},{"image":"./assets/img/team/5.jpeg","name":"Rosalina Will","rise":1200000},{"image":"./assets/img/team/1.jpeg","name":"Miranda Halim","rise":1200000},{"image":"./assets/img/team/2.jpeg","name":"Helsinki Del","rise":1200000}]');i(933),i(5519);u.ZP.use([u.pt]);var N=function(){var s=(0,n.useState)(!1),e=s[0],i=s[1],t=(0,n.useState)({from:2150,to:2500})[0];return(0,n.useEffect)((function(){i(!0)}),[]),(0,a.jsxs)("section",{className:"features pt-100 style-12",children:[(0,a.jsxs)("div",{className:"container",children:[(0,a.jsxs)("div",{className:"section-head text-center mb-40 style-12",children:[(0,a.jsxs)("h6",{className:"justify-content-center mb-3",children:[(0,a.jsx)("img",{src:"./assets/img/icons/star2.png",alt:"",className:"icon"}),(0,a.jsx)("span",{className:"mx-2",children:" featured "}),(0,a.jsx)("img",{src:"./assets/img/icons/star2.png",alt:"",className:"icon"})]}),(0,a.jsxs)("h2",{children:[" Best ",(0,a.jsx)("span",{children:" Sellers "})," "]})]}),(0,a.jsx)("div",{className:"content",children:(0,a.jsx)("div",{className:"row justify-content-center",children:v.map((function(s,e){return(0,a.jsx)("div",{className:"col-lg-3 col-sm-6",children:(0,a.jsxs)("a",{href:"#",className:"feature-card",children:[(0,a.jsx)("div",{className:"img icon-65 rounded-circle overflow-hidden img-cover me-3",children:(0,a.jsx)("img",{src:s.image,alt:""})}),(0,a.jsxs)("div",{className:"info",children:[(0,a.jsxs)("h5",{children:[" ",s.name," "]}),(0,a.jsxs)("p",{children:["Rise:",(0,a.jsx)("span",{className:"color-yellowGreen ms-1",children:" $ "}),(0,a.jsx)(f.Z,{className:"counter color-yellowGreen",from:0,to:s.rise,speed:1500,position:t})]})]})]})},e)}))})})]}),(0,a.jsxs)("div",{className:"features-line-slider12",children:[e&&(0,a.jsxs)(g.tq,{className:"swiper-container",spaceBetween:0,centeredSlides:!0,speed:1e4,autoplay:{delay:1},loop:!0,breakpoints:{0:{slidesPerView:1},480:{slidesPerView:1},787:{slidesPerView:1},991:{slidesPerView:2},1200:{slidesPerView:2}},children:[(0,a.jsx)(g.o5,{className:"swiper-slide",children:(0,a.jsxs)("a",{href:"#",children:[" ",(0,a.jsx)("img",{src:"./assets/img/icons/star3.png",alt:""})," ",(0,a.jsx)("h2",{children:" Sell your nft "})," "]})}),(0,a.jsx)(g.o5,{className:"swiper-slide",children:(0,a.jsxs)("a",{href:"#",children:[" ",(0,a.jsx)("img",{src:"./assets/img/icons/star3.png",alt:""})," ",(0,a.jsx)("h2",{children:" be an portfolio author "})," "]})}),(0,a.jsx)(g.o5,{className:"swiper-slide",children:(0,a.jsxs)("a",{href:"#",children:[" ",(0,a.jsx)("img",{src:"./assets/img/icons/star3.png",alt:""})," ",(0,a.jsx)("h2",{children:" nft\u2019s great "})," "]})}),(0,a.jsx)(g.o5,{className:"swiper-slide",children:(0,a.jsxs)("a",{href:"#",children:[" ",(0,a.jsx)("img",{src:"./assets/img/icons/star3.png",alt:""})," ",(0,a.jsx)("h2",{children:" Sell your nft "})," "]})})]}),(0,a.jsx)("img",{src:"./assets/img/icons/features/27.png",alt:"",className:"icon slide_up_down"})]})]})},b=JSON.parse('[{"icon":"./assets/img/icons/1.png","title":"Connect Wallet","details":"An cryptocurrency is a digital currency, which","step":"01"},{"icon":"./assets/img/icons/2.png","title":"Create Collections","details":"Is an alternative form of payment created use encryption","step":"02"},{"icon":"./assets/img/icons/3.png","title":"Add Your NFTs","details":"Algorithms. The use of encryto technologies","step":"03"},{"icon":"./assets/img/icons/4.png","title":"Sell Your NFTs","details":"Means that cryptocurrencies function both","step":"04"}]'),w=function(){return(0,a.jsx)("section",{className:"process style-12",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"content section-padding border-1 border-bottom brd-light",children:[(0,a.jsxs)("div",{className:"section-head text-center mb-10 style-12",children:[(0,a.jsxs)("h6",{className:"justify-content-center mb-3",children:[(0,a.jsx)("img",{src:"./assets/img/icons/star2.png",alt:"",className:"icon"}),(0,a.jsx)("span",{className:"mx-2",children:" process "}),(0,a.jsx)("img",{src:"./assets/img/icons/star2.png",alt:"",className:"icon"})]}),(0,a.jsxs)("h2",{children:[" How It ",(0,a.jsx)("span",{children:" Works "})," "]})]}),(0,a.jsx)("div",{className:"row gx-0",children:b.map((function(s,e){return(0,a.jsx)("div",{className:"col-lg-3 col-sm-6 ".concat(e%2!==0?"pt-lg-5":""),children:(0,a.jsxs)("a",{href:"#",className:"process-card",children:[(0,a.jsx)("div",{className:"icon",children:(0,a.jsx)("img",{src:s.icon,alt:""})}),(0,a.jsxs)("div",{className:"info",children:[(0,a.jsxs)("h6",{children:[" ",s.title," "]}),(0,a.jsxs)("p",{children:[" ",s.details," "]}),(0,a.jsxs)("span",{className:"step",children:[" Step ",s.step," "]})]})]})},e)}))})]})})})},y=JSON.parse('[{"name":"SnoopDogg","items":100,"pic":"./assets/img/testimonials/user1.jpeg","image":"./assets/img/collections/1.jpg","subImages":["./assets/img/collections/16.jpg","./assets/img/collections/2.jpg","./assets/img/collections/3.jpg"]},{"name":"HilixDesign","items":100,"pic":"./assets/img/testimonials/user2.jpeg","image":"./assets/img/collections/4.jpg","subImages":["./assets/img/collections/5.jpg","./assets/img/collections/6.jpg","./assets/img/collections/7.jpg"]},{"name":"ThemeCamp","items":100,"pic":"./assets/img/testimonials/user3.jpeg","image":"./assets/img/collections/8.jpg","subImages":["./assets/img/collections/9.jpg","./assets/img/collections/10.jpg","./assets/img/collections/11.jpg"]},{"name":"ThemeCamp","items":100,"pic":"./assets/img/testimonials/user4.png","image":"./assets/img/collections/12.jpg","subImages":["./assets/img/collections/13.jpg","./assets/img/collections/14.jpg","./assets/img/collections/15.jpg"]},{"name":"ThemeCamp","items":100,"pic":"./assets/img/testimonials/user3.jpeg","image":"./assets/img/collections/8.jpg","subImages":["./assets/img/collections/9.jpg","./assets/img/collections/10.jpg","./assets/img/collections/11.jpg"]}]');u.ZP.use([u.pt]);var k=function(){var s=(0,n.useState)(!1),e=s[0],i=s[1];return(0,n.useEffect)((function(){i(!0)}),[]),(0,a.jsx)("section",{className:"collections section-padding style-12",children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsxs)("div",{className:"row align-items-center mb-70",children:[(0,a.jsx)("div",{className:"col-lg-7",children:(0,a.jsxs)("div",{className:"section-head style-12",children:[(0,a.jsxs)("h6",{className:"mb-3",children:[(0,a.jsx)("img",{src:"./assets/img/icons/star2.png",alt:"",className:"icon"}),(0,a.jsx)("span",{className:"mx-2",children:" collections "})]}),(0,a.jsxs)("h2",{children:[" Top ",(0,a.jsx)("span",{children:" Collection "})," "]})]})}),(0,a.jsx)("div",{className:"col-lg-5 text-lg-end",children:(0,a.jsx)("a",{href:"#",className:"butn bg-yellowGreen rounded-3 hover-shadow",children:(0,a.jsxs)("span",{className:"text-dark",children:[(0,a.jsx)("img",{className:"icon-20 me-1",src:"./assets/img/icons/star3.png",alt:""}),"All Collector"]})})})]}),(0,a.jsx)("div",{className:"content",children:(0,a.jsx)("div",{className:"collections-slider12",children:e&&(0,a.jsx)(g.tq,{className:"swiper-container overflow-visible",spaceBetween:30,speed:1e3,autoplay:{delay:5e3},loop:!1,pagination:!1,navigation:!1,breakpoints:{0:{slidesPerView:1},480:{slidesPerView:1},787:{slidesPerView:2},991:{slidesPerView:3},1200:{slidesPerView:3}},children:y.map((function(s,e){return(0,a.jsx)(g.o5,{children:(0,a.jsxs)("div",{className:"collection-card",children:[(0,a.jsxs)("div",{className:"top-info",children:[(0,a.jsxs)("h6",{children:[" ",s.name," "]}),(0,a.jsxs)("p",{children:[" ",(0,a.jsx)("img",{src:"./assets/img/icons/star2.png",alt:""})," ",(0,a.jsxs)("span",{className:"text-white",children:[" ",s.items," "]})," ",(0,a.jsx)("span",{children:" Items "})," "]})]}),(0,a.jsx)("div",{className:"auther-img",children:(0,a.jsx)("img",{src:s.pic,alt:""})}),(0,a.jsxs)("div",{className:"imgs",children:[(0,a.jsx)("div",{className:"main-img img-cover",children:(0,a.jsx)("img",{src:s.image,alt:""})}),(0,a.jsx)("div",{className:"sub-imgs",children:s.subImages.map((function(s,e){return(0,a.jsx)("img",{src:s,alt:""},e)}))})]})]})},e)}))})})})]})})},S=function(){return(0,a.jsx)("section",{className:"community style-12",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"content",children:[(0,a.jsxs)("h2",{children:[" Stay In The ",(0,a.jsx)("span",{children:" Community "})," "]}),(0,a.jsxs)("div",{className:"form-group",children:[(0,a.jsxs)("span",{className:"icon",children:[" ",(0,a.jsx)("i",{className:"fas fa-envelope-open"})," "]}),(0,a.jsx)("input",{type:"text",placeholder:"Business email..."}),(0,a.jsx)("button",{className:"butn bg-yellowGreen hover-shadow border-0",children:(0,a.jsx)("span",{className:"text-dark",children:" Subscribe "})})]}),(0,a.jsxs)("div",{className:"social-icons",children:[(0,a.jsxs)("a",{href:"#",children:[" ",(0,a.jsx)("i",{className:"fas fa-envelope"})," "]}),(0,a.jsxs)("a",{href:"#",children:[" ",(0,a.jsx)("i",{className:"fab fa-tiktok"})," "]}),(0,a.jsxs)("a",{href:"#",children:[" ",(0,a.jsx)("i",{className:"fab fa-discord"})," "]}),(0,a.jsxs)("a",{href:"#",children:[" ",(0,a.jsx)("i",{className:"fab fa-twitter"})," "]}),(0,a.jsxs)("a",{href:"#",children:[" ",(0,a.jsx)("i",{className:"fab fa-youtube"})," "]})]})]})})})},T=function(){return(0,a.jsx)("footer",{className:"style-12",children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)("div",{className:"content",children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-lg-4",children:(0,a.jsxs)("div",{className:"foot-info",children:[(0,a.jsx)("div",{className:"foot-logo mb-30",children:(0,a.jsx)("img",{src:"./assets/img/logo_12.png",alt:""})}),(0,a.jsx)("p",{children:" The world\u2019s first and largest digital NFT marketplace for crypto collectibles & non fungible tokens (NFTs). Buy, sell, & discover exclusive digital items. "})]})}),(0,a.jsx)("div",{className:"col-lg-2 offset-lg-2",children:(0,a.jsxs)("div",{className:"links mt-5 mt-lg-0",children:[(0,a.jsx)("h6",{children:" Marketplace "}),(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:[" ",(0,a.jsx)("a",{href:"#",children:" Art "})," "]}),(0,a.jsxs)("li",{children:[" ",(0,a.jsx)("a",{href:"#",children:" Collectibles "})," "]}),(0,a.jsxs)("li",{children:[" ",(0,a.jsx)("a",{href:"#",children:" Domain Names "})," "]}),(0,a.jsxs)("li",{children:[" ",(0,a.jsx)("a",{href:"#",children:" Music "})," "]}),(0,a.jsxs)("li",{children:[" ",(0,a.jsx)("a",{href:"#",children:" Photography "})," "]}),(0,a.jsxs)("li",{children:[" ",(0,a.jsx)("a",{href:"#",children:" Sports "})," "]})]})]})}),(0,a.jsx)("div",{className:"col-lg-2",children:(0,a.jsxs)("div",{className:"links mt-5 mt-lg-0",children:[(0,a.jsx)("h6",{children:" My Account "}),(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:[" ",(0,a.jsx)("a",{href:"#",children:" Profile "})," "]}),(0,a.jsxs)("li",{children:[" ",(0,a.jsx)("a",{href:"#",children:" Favorites "})," "]}),(0,a.jsxs)("li",{children:[" ",(0,a.jsx)("a",{href:"#",children:" Watchlist "})," "]}),(0,a.jsxs)("li",{children:[" ",(0,a.jsx)("a",{href:"#",children:" My Collections "})," "]}),(0,a.jsxs)("li",{children:[" ",(0,a.jsx)("a",{href:"#",children:" Settings "})," "]})]})]})}),(0,a.jsx)("div",{className:"col-lg-2",children:(0,a.jsxs)("div",{className:"links mt-5 mt-lg-0",children:[(0,a.jsx)("h6",{children:" Resources "}),(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:[" ",(0,a.jsx)("a",{href:"#",children:" Learn "})," "]}),(0,a.jsxs)("li",{children:[" ",(0,a.jsx)("a",{href:"#",children:" Help Center "})," "]}),(0,a.jsxs)("li",{children:[" ",(0,a.jsx)("a",{href:"#",children:" Platform Status "})," "]}),(0,a.jsxs)("li",{children:[" ",(0,a.jsx)("a",{href:"#",children:" Partners "})," "]}),(0,a.jsxs)("li",{children:[" ",(0,a.jsx)("a",{href:"#",children:" Taxes "})," "]}),(0,a.jsxs)("li",{children:[" ",(0,a.jsx)("a",{href:"#",children:" Blog "})," "]})]})]})})]})}),(0,a.jsx)("div",{className:"foot",children:(0,a.jsxs)("p",{children:[" Copyright & Design By ",(0,a.jsx)("a",{href:"#",className:"color-yellowGreen",children:" @ThemeCamp "})," - 2022 "]})})]})})},_=function(){return(0,n.useEffect)((function(){return document.body.classList.add("home-style-12"),function(){return document.body.classList.remove("home-style-12")}}),[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l(),{children:(0,a.jsx)("title",{children:"Iteck - NFT Marketplace"})}),(0,a.jsxs)(r.Z,{children:[(0,a.jsx)(m,{}),(0,a.jsx)(p,{}),(0,a.jsxs)("main",{children:[(0,a.jsx)(j,{}),(0,a.jsx)(N,{}),(0,a.jsx)(w,{}),(0,a.jsx)(k,{}),(0,a.jsx)(S,{})]}),(0,a.jsx)(T,{})]})]})}},5519:function(){},4111:function(s,e,i){"use strict";function a(s){if(void 0===s)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}i.d(e,{Z:function(){return a}})},1438:function(s,e,i){"use strict";function a(s,e){if(!(s instanceof e))throw new TypeError("Cannot call a class as a function")}i.d(e,{Z:function(){return a}})},2951:function(s,e,i){"use strict";function a(s,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(s,a.key,a)}}function n(s,e,i){return e&&a(s.prototype,e),i&&a(s,i),s}i.d(e,{Z:function(){return n}})},460:function(s,e,i){"use strict";function a(s){return a=Object.setPrototypeOf?Object.getPrototypeOf:function(s){return s.__proto__||Object.getPrototypeOf(s)},a(s)}function n(s){return a(s)}i.d(e,{Z:function(){return r}});var t=i(4111);function l(s,e){return!e||"object"!==((i=e)&&i.constructor===Symbol?"symbol":typeof i)&&"function"!==typeof e?(0,t.Z)(s):e;var i}function r(s){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(s){return!1}}();return function(){var i,a=n(s);if(e){var t=n(this).constructor;i=Reflect.construct(a,arguments,t)}else i=a.apply(this,arguments);return l(this,i)}}},8029:function(s,e,i){"use strict";function a(s,e){return a=Object.setPrototypeOf||function(s,e){return s.__proto__=e,s},a(s,e)}function n(s,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");s.prototype=Object.create(e&&e.prototype,{constructor:{value:s,writable:!0,configurable:!0}}),e&&a(s,e)}i.d(e,{Z:function(){return n}})}},function(s){s.O(0,[1664,4386,4104,9774,2888,179],(function(){return e=770,s(s.s=e);var e}));var e=s.O();_N_E=e}]);