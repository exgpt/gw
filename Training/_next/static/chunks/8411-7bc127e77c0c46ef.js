(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8411],{827:function(e,s,t){"use strict";t.d(s,{Z:function(){return b}});var i=t(5893),a=t(7294),r=t(1438),l=t(2951),n=t(8029),c=t(6042),o=t(9396),d=t(460),m="unmounted",u="exited",p="entering",h="entered",f="exiting",x={entering:{opacity:0},entered:{opacity:1},exiting:{opacity:0},exited:{opacity:0}},g=function(e){(0,n.Z)(t,e);var s=(0,d.Z)(t);function t(e){var i;return(0,r.Z)(this,t),(i=s.call(this,e)).state={status:m},i}return(0,l.Z)(t,[{key:"componentDidMount",value:function(){this.props.show&&this.performEnter()}},{key:"componentDidUpdate",value:function(e){var s=null;if(e!==this.props){var t=this.state.status;this.props.show?t!==p&&t!==h&&(s=p):t!==p&&t!==h||(s=f)}this.updateStatus(s)}},{key:"updateStatus",value:function(e){null!==e?e===p?this.performEnter():this.performExit():this.state.status===u&&this.setState({status:m})}},{key:"performEnter",value:function(){var e=this;this.setState({status:p},(function(){setTimeout((function(){e.setState({status:h},(function(){}))}),0)}))}},{key:"performExit",value:function(){var e=this,s=this.props.duration;this.setState({status:f},(function(){setTimeout((function(){e.setState({status:u},(function(){}))}),s)}))}},{key:"render",value:function(){var e=this.state.status;if(e===m)return null;var s=this.props,t=s.children,a=s.duration,r=s.className,l=s.style;return(0,i.jsx)("div",{className:r,style:(0,c.Z)((0,o.Z)((0,c.Z)({},l),{transition:"opacity ".concat(a,"ms ease-in-out"),opacity:.1}),x[e]),children:t})}}]),t}(a.Component);g.defaultProps={show:!1,duration:300};var j=g,v=JSON.parse('{"nav_pills":[{"id":"pills-description","title":"Description"},{"id":"pills-reviews","title":"Reviews (3)"},{"id":"pills-information","title":"Additional Information"}],"nav_tabs":[{"id":"pills-description","show":true},{"id":"pills-reviews","show":false},{"id":"pills-information","show":false}]}'),N=JSON.parse('{"nav_pills":[{"id":"pills-description","title":"\u0627\u0644\u0648\u0635\u0641"},{"id":"pills-reviews","title":"\u0627\u0644\u0645\u0631\u0627\u062c\u0639\u0627\u062a (3)"},{"id":"pills-information","title":"\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0625\u0636\u0627\u0641\u064a\u0629"}],"nav_tabs":[{"id":"pills-description","show":true},{"id":"pills-reviews","show":false},{"id":"pills-information","show":false}]}'),b=function(e){var s=e.style,t=void 0===s?"4":s,r=e.rtl,l=r?N:v,n=(0,a.useState)(l.nav_tabs),c=n[0],o=n[1];return(0,i.jsx)("section",{className:"product-details pt-100",children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)("ul",{className:"nav nav-pills",id:"pills-tab",role:"tablist",children:l.nav_pills.map((function(e,s){return(0,i.jsx)("li",{className:"nav-item",role:"presentation",children:(0,i.jsx)("button",{className:"nav-link ".concat(0===s?"active":""),id:"".concat(e.id,"-tab"),"data-bs-toggle":"pill","data-bs-target":"#".concat(e.id),type:"button",role:"tab","aria-controls":e.id,"aria-selected":"true",onClick:function(){return s=e.id,document.querySelectorAll(".product-details .nav-link").forEach((function(e){return e.classList.remove("active")})),document.querySelector('.product-details .nav-link[id="'.concat(s,'-tab"]')).classList.add("active"),void o((function(e){var t=structuredClone(e),i=t.map((function(e){return e.show=!1,e})),a=i.findIndex((function(e){return e.id===s}));return i[a].show=!0,i}));var s},children:e.title})},s)}))}),(0,i.jsxs)("div",{className:"tab-content",id:"pills-tabContent",children:[(0,i.jsx)(j,{show:c[0].show,children:(0,i.jsx)("div",{className:"tab-pane show active",id:"pills-description",role:"tabpanel","aria-labelledby":"pills-description-tab",children:(0,i.jsxs)("div",{className:"content-info text-center pb-0",children:[(0,i.jsx)("div",{className:"text mb-30",children:r?"\u0639\u0646\u062f \u0645\u0648\u0627\u0641\u0642\u0647 \u0627\u0644\u0639\u0645\u064a\u0644 \u0627\u0644\u0645\u0628\u062f\u0626\u064a\u0647 \u0639\u0644\u0649 \u0627\u0644\u062a\u0635\u0645\u064a\u0645 \u064a\u062a\u0645 \u0627\u0632\u0627\u0644\u0629 \u0647\u0630\u0627 \u0627\u0644\u0646\u0635 \u0645\u0646 \u0627\u0644\u062a\u0635\u0645\u064a\u0645 \u0648\u064a\u062a\u0645 \u0648\u0636\u0639 \u0627\u0644\u0646\u0635\u0648\u0635 \u0627\u0644\u0646\u0647\u0627\u0626\u064a\u0629 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629 \u0644\u0644\u062a\u0635\u0645\u064a\u0645 \u0648\u064a\u0642\u0648\u0644 \u0627\u0644\u0628\u0639\u0636 \u0627\u0646 \u0648\u0636\u0639 \u0627\u0644\u0646\u0635\u0648\u0635 \u0627\u0644\u062a\u062c\u0631\u064a\u0628\u064a\u0629 \u0628\u0627\u0644\u062a\u0635\u0645\u064a\u0645 \u0642\u062f \u062a\u0634\u063a\u0644 \u0627\u0644\u0645\u0634\u0627\u0647\u062f \u0639\u0646 \u0648\u0636\u0639 \u0627\u0644\u0643\u062b\u064a\u0631 \u0645\u0646 \u0627\u0644\u0645\u0644\u0627\u062d\u0638\u0627\u062a \u0627\u0648 \u0627\u0644\u0627\u0646\u062a\u0642\u0627\u062f\u0627\u062a \u0644\u0644\u062a\u0635\u0645\u064a\u0645 \u0627\u0644\u0627\u0633\u0627\u0633\u064a.":"Nulla velit turpis, tincidunt eget elit vitae, congue sodales metus. Sed sed neque luctus, sollicitudin sem sed, consectetur libero. Nunc mollis turpis velit, vitae laoreet sapien vehicula nec. Curabitur blandit ac libero eu dictum. Nullam vehicula hendrerit nisl eu laoreet. Cras non velit est. Vivamus tincidunt lacus est, at auctor elit finibus et. Maecenas a consequat metus. Aliquam ac nisl nec est mollis faucibus eget vitae eros. Duis bibendum vestibulum felis id mattis."}),(0,i.jsx)("div",{className:"text",children:r?"\u0639\u0646\u062f \u0645\u0648\u0627\u0641\u0642\u0647 \u0627\u0644\u0639\u0645\u064a\u0644 \u0627\u0644\u0645\u0628\u062f\u0626\u064a\u0647 \u0639\u0644\u0649 \u0627\u0644\u062a\u0635\u0645\u064a\u0645 \u064a\u062a\u0645 \u0627\u0632\u0627\u0644\u0629 \u0647\u0630\u0627 \u0627\u0644\u0646\u0635 \u0645\u0646 \u0627\u0644\u062a\u0635\u0645\u064a\u0645 \u0648\u064a\u062a\u0645 \u0648\u0636\u0639 \u0627\u0644\u0646\u0635\u0648\u0635 \u0627\u0644\u0646\u0647\u0627\u0626\u064a\u0629 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629 \u0644\u0644\u062a\u0635\u0645\u064a\u0645 \u0648\u064a\u0642\u0648\u0644 \u0627\u0644\u0628\u0639\u0636 \u0627\u0646 \u0648\u0636\u0639 \u0627\u0644\u0646\u0635\u0648\u0635 \u0627\u0644\u062a\u062c\u0631\u064a\u0628\u064a\u0629 \u0628\u0627\u0644\u062a\u0635\u0645\u064a\u0645 \u0642\u062f \u062a\u0634\u063a\u0644 \u0627\u0644\u0645\u0634\u0627\u0647\u062f \u0639\u0646 \u0648\u0636\u0639 \u0627\u0644\u0643\u062b\u064a\u0631 \u0645\u0646 \u0627\u0644\u0645\u0644\u0627\u062d\u0638\u0627\u062a \u0627\u0648 \u0627\u0644\u0627\u0646\u062a\u0642\u0627\u062f\u0627\u062a \u0644\u0644\u062a\u0635\u0645\u064a\u0645 \u0627\u0644\u0627\u0633\u0627\u0633\u064a.":"Suspendisse metus sapien, lacinia eu lectus sit amet, consequat mollis felis. Mauris convallis augue quis semper venenatis. Vivamus imperdiet leo at neque efficitur, id faucibus arcu eleifend. Vivamus in massa bibendum, aliquet est quis, ornare lacus."})]})})}),(0,i.jsx)(j,{show:c[1].show,children:(0,i.jsx)("div",{className:"tab-pane show active",id:"pills-reviews",role:"tabpanel","aria-labelledby":"pills-reviews-tab",children:(0,i.jsx)("div",{className:"product-reviews pt-30",children:(0,i.jsxs)("div",{className:"row gx-5",children:[(0,i.jsx)("div",{className:"col-lg-7",children:(0,i.jsxs)("div",{className:"reviews-content pt-30",children:[(0,i.jsxs)("h5",{className:"color-000 mb-40 text-capitalize",children:[" ",r?"\u0627\u0644\u0645\u0631\u0627\u062c\u0639\u0627\u062a 02":"02 reviews"," "]}),(0,i.jsx)("div",{className:"comment-replay-cont bg-light py-5 px-4 mb-20",children:(0,i.jsxs)("div",{className:"d-flex comment-cont",children:[(0,i.jsx)("div",{className:"icon-60 rounded-circle img-cover overflow-hidden me-3 flex-shrink-0",children:(0,i.jsx)("img",{src:"./assets/img/team/2.jpeg",alt:""})}),(0,i.jsxs)("div",{className:"inf",children:[(0,i.jsxs)("div",{className:"title d-flex justify-content-between",children:[(0,i.jsx)("h6",{className:"fw-bold fs-14px",children:r?"\u0631\u0648\u0628\u0648\u062a\u0627\u062a \u062f\u0627\u0648\u0646\u0649":"Robert Downey Jr"}),(0,i.jsx)("div",{className:"time fs-12px text-uppercase d-inline-block",children:(0,i.jsx)("div",{className:"rate",children:(0,i.jsxs)("div",{className:"stars",children:[(0,i.jsx)("i",{className:"fas fa-star active"}),(0,i.jsx)("i",{className:"fas fa-star active"}),(0,i.jsx)("i",{className:"fas fa-star active"}),(0,i.jsx)("i",{className:"fas fa-star active"}),(0,i.jsx)("i",{className:"fas fa-star"})]})})})]}),(0,i.jsx)("div",{className:"text color-000 fs-12px mt-10",children:r?"\u0639\u0646\u062f \u0645\u0648\u0627\u0641\u0642\u0647 \u0627\u0644\u0639\u0645\u064a\u0644 \u0627\u0644\u0645\u0628\u062f\u0626\u064a\u0647 \u0639\u0644\u0649 \u0627\u0644\u062a\u0635\u0645\u064a\u0645 \u064a\u062a\u0645 \u0627\u0632\u0627\u0644\u0629 \u0647\u0630\u0627 \u0627\u0644\u0646\u0635 \u0645\u0646 \u0627\u0644\u062a\u0635\u0645\u064a\u0645 \u0648\u064a\u062a\u0645 \u0648\u0636\u0639 \u0627\u0644\u0646\u0635\u0648\u0635 \u0627\u0644\u0646\u0647\u0627\u0626\u064a\u0629 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629 \u0644\u0644\u062a\u0635\u0645\u064a\u0645 \u0648\u064a\u0642\u0648\u0644 \u0627\u0644\u0628\u0639\u0636 \u0627\u0646 \u0648\u0636\u0639 \u0627\u0644\u0646\u0635\u0648\u0635 \u0627\u0644\u062a\u062c\u0631\u064a\u0628\u064a\u0629 \u0628\u0627\u0644\u062a\u0635\u0645\u064a\u0645 \u0642\u062f \u062a\u0634\u063a\u0644 \u0627\u0644\u0645\u0634\u0627\u0647\u062f \u0639\u0646 \u0648\u0636\u0639 \u0627\u0644\u0643\u062b\u064a\u0631 \u0645\u0646 \u0627\u0644\u0645\u0644\u0627\u062d\u0638\u0627\u062a \u0627\u0648 \u0627\u0644\u0627\u0646\u062a\u0642\u0627\u062f\u0627\u062a \u0644\u0644\u062a\u0635\u0645\u064a\u0645 \u0627\u0644\u0627\u0633\u0627\u0633\u064a.":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Atume nusaate staman utra phone limo sumeria"})]})]})}),(0,i.jsx)("div",{className:"comment-replay-cont bg-light py-5 px-4 mb-20",children:(0,i.jsxs)("div",{className:"d-flex comment-cont",children:[(0,i.jsx)("div",{className:"icon-60 rounded-circle img-cover overflow-hidden me-3 flex-shrink-0",children:(0,i.jsx)("img",{src:"./assets/img/team/4.jpeg",alt:""})}),(0,i.jsxs)("div",{className:"inf",children:[(0,i.jsxs)("div",{className:"title d-flex justify-content-between",children:[(0,i.jsx)("h6",{className:"fw-bold fs-14px",children:r?"\u0628\u064a\u0646 \u0643\u0648\u064a\u0644":"Ben Chiwell"}),(0,i.jsx)("div",{className:"time fs-12px text-uppercase",children:(0,i.jsx)("div",{className:"rate",children:(0,i.jsxs)("div",{className:"stars",children:[(0,i.jsx)("i",{className:"fas fa-star active"}),(0,i.jsx)("i",{className:"fas fa-star active"}),(0,i.jsx)("i",{className:"fas fa-star active"}),(0,i.jsx)("i",{className:"fas fa-star active"}),(0,i.jsx)("i",{className:"fas fa-star"})]})})})]}),(0,i.jsx)("div",{className:"text color-000 fs-12px mt-10",children:r?"\u0639\u0646\u062f \u0645\u0648\u0627\u0641\u0642\u0647 \u0627\u0644\u0639\u0645\u064a\u0644 \u0627\u0644\u0645\u0628\u062f\u0626\u064a\u0647 \u0639\u0644\u0649 \u0627\u0644\u062a\u0635\u0645\u064a\u0645 \u064a\u062a\u0645 \u0627\u0632\u0627\u0644\u0629 \u0647\u0630\u0627 \u0627\u0644\u0646\u0635 \u0645\u0646 \u0627\u0644\u062a\u0635\u0645\u064a\u0645 \u0648\u064a\u062a\u0645 \u0648\u0636\u0639 \u0627\u0644\u0646\u0635\u0648\u0635 \u0627\u0644\u0646\u0647\u0627\u0626\u064a\u0629 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629 \u0644\u0644\u062a\u0635\u0645\u064a\u0645 \u0648\u064a\u0642\u0648\u0644 \u0627\u0644\u0628\u0639\u0636 \u0627\u0646 \u0648\u0636\u0639 \u0627\u0644\u0646\u0635\u0648\u0635 \u0627\u0644\u062a\u062c\u0631\u064a\u0628\u064a\u0629 \u0628\u0627\u0644\u062a\u0635\u0645\u064a\u0645 \u0642\u062f \u062a\u0634\u063a\u0644 \u0627\u0644\u0645\u0634\u0627\u0647\u062f \u0639\u0646 \u0648\u0636\u0639 \u0627\u0644\u0643\u062b\u064a\u0631 \u0645\u0646 \u0627\u0644\u0645\u0644\u0627\u062d\u0638\u0627\u062a \u0627\u0648 \u0627\u0644\u0627\u0646\u062a\u0642\u0627\u062f\u0627\u062a \u0644\u0644\u062a\u0635\u0645\u064a\u0645 \u0627\u0644\u0627\u0633\u0627\u0633\u064a.":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Atume nusaate staman utra phone limo sumeria"})]})]})})]})}),(0,i.jsx)("div",{className:"col-lg-5",children:(0,i.jsxs)("form",{className:"comment-form d-block pt-30",children:[(0,i.jsxs)("h5",{className:"color-000 mb-40 text-capitalize",children:[" ",r?"\u0627\u0636\u0627\u0641\u0629 \u062a\u0639\u0644\u064a\u0642":"Add a review"," "]}),(0,i.jsxs)("div",{className:"row",children:[(0,i.jsxs)("div",{className:"col-lg-12",children:[(0,i.jsx)("label",{className:"text-uppercase mb-1",children:r?"\u062a\u0642\u064a\u064a\u0645\u0643":"your rating"}),(0,i.jsxs)("div",{className:"rate-stars",children:[(0,i.jsx)("input",{type:"radio",name:"star",defaultValue:"5"}),(0,i.jsx)("input",{type:"radio",name:"star",defaultValue:"4"}),(0,i.jsx)("input",{type:"radio",name:"star",defaultValue:"3"}),(0,i.jsx)("input",{type:"radio",name:"star",defaultValue:"2"}),(0,i.jsx)("input",{type:"radio",name:"star",defaultValue:"1"})]})]}),(0,i.jsx)("div",{className:"col-lg-12",children:(0,i.jsx)("div",{className:"form-group mb-30",children:(0,i.jsx)("textarea",{className:"form-control radius-4 fs-12px p-3",rows:"6",placeholder:r?"\u0623\u0643\u062a\u0628 \u062a\u0639\u0644\u064a\u0642\u0643 \u0647\u0646\u0627":"Write your comment here"})})}),(0,i.jsx)("div",{className:"col-lg-6",children:(0,i.jsx)("div",{className:"form-group mb-4 mb-lg-0",children:(0,i.jsx)("input",{type:"text",className:"form-control fs-12px radius-4 p-3",name:"name",placeholder:r?"\u0627\u0633\u0645\u0643 *":"Your Name *"})})}),(0,i.jsx)("div",{className:"col-lg-6",children:(0,i.jsx)("div",{className:"form-group",children:(0,i.jsx)("input",{type:"text",className:"form-control fs-12px radius-4 p-3",name:"email",placeholder:r?"\u0628\u0631\u064a\u062f\u0643 \u0627\u0644\u0627\u0644\u0643\u062a\u0631\u0648\u0646\u064a *":"Your Email *"})})}),(0,i.jsx)("div",{className:"col-lg-12",children:(0,i.jsxs)("div",{className:"form-check mt-20",children:[(0,i.jsx)("input",{className:"form-check-input",type:"checkbox",defaultValue:"",id:"flexCheckDefault"}),(0,i.jsx)("label",{className:"form-check-label fs-12px",htmlFor:"flexCheckDefault",children:r?"\u0627\u062d\u0641\u0638 \u0627\u0633\u0645\u064a \u0648\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u0641\u064a \u0647\u0630\u0627 \u0627\u0644\u0645\u062a\u0635\u0641\u062d \u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645\u0647\u0627 \u0627\u0644\u0645\u0631\u0629 \u0627\u0644\u0645\u0642\u0628\u0644\u0629 \u0641\u064a \u062a\u0639\u0644\u064a\u0642\u064a":"Save my name & email in this browser for next time I comment"})]})}),(0,i.jsx)("div",{className:"col-12",children:(0,i.jsx)("a",{href:"#",className:"btn rounded-pill bg-blue".concat(t," fw-bold text-white mt-4"),target:"_blank",children:(0,i.jsxs)("small",{children:[" ",r?"\u0625\u0631\u0633\u0627\u0644 \u062a\u0639\u0644\u064a\u0642":"Submit Comment"," "]})})})]})]})})]})})})}),(0,i.jsx)(j,{show:c[2].show,children:(0,i.jsx)("div",{className:"tab-pane show active",id:"pills-information",role:"tabpanel","aria-labelledby":"pills-information-tab",children:(0,i.jsx)("div",{className:"content-info pb-0",children:(0,i.jsx)("div",{className:"additional-info",children:(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:r?"\u0627\u0644\u0648\u0632\u0646":"Weight"}),(0,i.jsx)("span",{children:" 0.6 kg "})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:r?"\u0627\u0644\u0627\u0628\u0639\u0627\u062f":"Dimensions"}),(0,i.jsx)("span",{children:" 40 \xd7 30 \xd7 30 cm "})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:r?"\u0627\u0644\u0644\u0648\u0646":"Color"}),(0,i.jsx)("span",{children:" White, Black, Red "})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:r?"\u0627\u0644\u0633\u0646\u0629":"Year"}),(0,i.jsx)("span",{children:" 2021 "})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:r?"\u0627\u0644\u0634\u0643\u0644":"Style"}),(0,i.jsxs)("span",{children:[" ",r?"\u0643\u0644\u0627\u0633\u064a\u0643":"Classic, Modern"," "]})]})]})})})})})]})]})})}},7192:function(e,s,t){"use strict";t.d(s,{Z:function(){return x}});var i=t(5893),a=function(e){var s=e.productName,t=e.rtl;return(0,i.jsx)("div",{className:"section-head text-center mb-80 style-5",children:(0,i.jsxs)("div",{className:"page-links color-999",children:[(0,i.jsx)("a",{href:"#",className:"me-2",children:t?"\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629":"Home"}),(0,i.jsx)("span",{className:"me-2",children:"/"}),(0,i.jsx)("a",{href:"#",className:"me-2",children:t?"\u0645\u062a\u062c\u0631 \u0627\u0649 \u062a\u064a\u0643":"Iteck\u2019s Store"}),(0,i.jsx)("span",{className:"me-2",children:"/"}),(0,i.jsx)("a",{href:"#",className:"color-000",children:s})]})})},r=t(7294),l=t(8494),n=t(8116);t(933),t(706),t(5083);n.ZP.use([n.Rv,n.o3]);var c=function(e){var s=e.productImages,t=(0,r.useState)(null),a=t[0],n=t[1];return(0,i.jsx)("div",{className:"col-lg-6",children:(0,i.jsxs)("div",{className:"product-slider",children:[(0,i.jsx)(l.tq,{className:"swiper-container gallery-thumbs",spaceBetween:20,slidesPerView:6,freeMode:!0,watchSlidesProgress:!0,direction:"vertical",onInit:function(e){n(e)},children:s.map((function(e,s){return(0,i.jsx)(l.o5,{children:(0,i.jsx)("div",{className:"img",children:(0,i.jsx)("img",{src:e,alt:""})})},s)}))}),a&&(0,i.jsx)(l.tq,{className:"swiper-container gallery-top",spaceBetween:10,navigation:!1,thumbs:{swiper:a},children:s.map((function(e,s){return(0,i.jsx)(l.o5,{children:(0,i.jsx)("div",{className:"img",children:(0,i.jsx)("img",{src:e,alt:""})})},s)}))})]})})},o=function(e){var s=e.mainInfo,t=e.rtl;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h6",{className:"category",children:s.category}),(0,i.jsx)("h5",{className:"title",children:s.title}),(0,i.jsxs)("div",{className:"rate",children:[(0,i.jsx)("div",{className:"stars",children:Array(5).fill(0).map((function(e,t){return(0,i.jsx)("i",{className:"fas fa-star ".concat(t+1<=s.rating?"active":"")},t)}))}),(0,i.jsxs)("span",{className:"rev ms-1",children:[s.reviews," ",t?"\u0627\u0644\u0645\u0631\u0627\u062c\u0639\u0627\u062a":"Reviews"]})]}),(0,i.jsxs)("div",{className:"price",children:["$",s.price]}),(0,i.jsx)("div",{className:"info-text",children:s.discription}),(0,i.jsx)("ul",{className:"info-list",children:s.features.map((function(e,s){return(0,i.jsxs)("li",{className:"d-flex align-items-center",children:[(0,i.jsx)("i",{className:"bi bi-dash me-1"}),e]},s)}))})]})},d=function(e){var s=e.rtl;return(0,i.jsxs)("div",{className:"select-color",children:[(0,i.jsx)("span",{className:"me-4 mb-1 color-000 fw-bold fs-14px",children:s?"\u0625\u062e\u062a\u0631 \u0644\u0648\u0646":"Select Color"}),(0,i.jsxs)("div",{className:"colors-content",children:[(0,i.jsxs)("div",{className:"form-check form-check-inline",children:[(0,i.jsx)("input",{className:"form-check-input",type:"radio",name:"colorSelect",id:"colorSelect1",defaultChecked:!0}),(0,i.jsx)("label",{className:"form-check-label",htmlFor:"colorSelect1",children:(0,i.jsx)("span",{className:"color-circle gray"})})]}),(0,i.jsxs)("div",{className:"form-check form-check-inline",children:[(0,i.jsx)("input",{className:"form-check-input",type:"radio",name:"colorSelect",id:"colorSelect2"}),(0,i.jsx)("label",{className:"form-check-label",htmlFor:"colorSelect2",children:(0,i.jsx)("span",{className:"color-circle black"})})]}),(0,i.jsxs)("div",{className:"form-check form-check-inline",children:[(0,i.jsx)("input",{className:"form-check-input",type:"radio",name:"colorSelect",id:"colorSelect3"}),(0,i.jsx)("label",{className:"form-check-label",htmlFor:"colorSelect3",children:(0,i.jsx)("span",{className:"color-circle blue"})})]}),(0,i.jsxs)("div",{className:"form-check form-check-inline",children:[(0,i.jsx)("input",{className:"form-check-input",type:"radio",name:"colorSelect",id:"colorSelect4"}),(0,i.jsx)("label",{className:"form-check-label",htmlFor:"colorSelect4",children:(0,i.jsx)("span",{className:"color-circle green"})})]})]})]})},m=function(e){var s=e.style,t=e.rtl;return(0,i.jsxs)("div",{className:"qyt-addCart",children:[(0,i.jsx)("span",{className:"me-4 mb-1 color-000 fw-bold fs-14px",children:t?"\u0627\u0644\u0643\u0645\u064a\u0629":"QTY"}),(0,i.jsxs)("div",{className:"add-more",children:[(0,i.jsx)("span",{className:"qt-minus",children:(0,i.jsx)("i",{className:"fas fa-minus"})}),(0,i.jsx)("span",{className:"qt",children:"1"}),(0,i.jsx)("span",{className:"qt-plus",children:(0,i.jsx)("i",{className:"fas fa-plus"})})]}),(0,i.jsx)("a",{href:"#",className:"btn rounded-pill bg-blue".concat(s," fw-bold text-white"),target:"_blank",children:(0,i.jsxs)("small",{children:[" ",t?"\u0623\u0636\u0641 \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629":"Add To Cart"," "]})}),(0,i.jsx)("div",{className:"fav-btn",children:(0,i.jsx)("i",{className:"fas fa-heart"})})]})},u=function(e){var s=e.moreInfo,t=e.rtl;return(0,i.jsxs)("div",{className:"more-info pt-20 mt-1 border-1 border-top brd-gray",children:[(0,i.jsxs)("p",{className:"text-uppercase fs-14px color-666 mb-1",children:[" ",(0,i.jsxs)("strong",{className:"color-000",children:[t?"\u0627\u0644\u0645\u0648\u062f\u064a\u0644":"SKU",":"]})," ",s.SKU]}),(0,i.jsxs)("p",{className:"fs-14px color-666 mb-1",children:[(0,i.jsxs)("strong",{className:"color-000",children:[t?"\u0627\u0644\u062a\u0635\u0646\u064a\u0641":"Category",":"]})," ",s.category]}),(0,i.jsxs)("p",{className:"fs-14px color-666 mb-1",children:[(0,i.jsxs)("strong",{className:"color-000",children:[t?"\u0627\u0644\u0643\u0644\u0645\u0627\u062a \u0627\u0644\u062f\u0644\u0627\u0644\u064a\u0629":"Tags",":"]})," ",s.tags.map((function(e,s){return(0,i.jsxs)("a",{href:"#",className:"me-1",children:[e,", "]},s)}))]})]})},p=function(){return(0,i.jsxs)("div",{className:"socail-icons",children:[(0,i.jsx)("a",{href:"#",className:"icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray me-2",children:(0,i.jsx)("i",{className:"fab fa-twitter"})}),(0,i.jsx)("a",{href:"#",className:"icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray me-2",children:(0,i.jsx)("i",{className:"fab fa-facebook-f"})}),(0,i.jsx)("a",{href:"#",className:"icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray me-2",children:(0,i.jsx)("i",{className:"fab fa-instagram"})}),(0,i.jsx)("a",{href:"#",className:"icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray me-2",children:(0,i.jsx)("i",{className:"fab fa-pinterest"})}),(0,i.jsx)("a",{href:"#",className:"icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray",children:(0,i.jsx)("i",{className:"fab fa-linkedin-in"})})]})},h=JSON.parse('{"title":"Samsung New VR Headset Oculus 2.0","images":["./assets/img/shop/products/pr1.png","./assets/img/shop/products/pr2.png","./assets/img/shop/products/pr3.png","./assets/img/shop/products/pr4.png","./assets/img/shop/products/pr5.png"],"mainInfo":{"title":"Samsung New VR Headset Oculus 2.0","category":"Samsung","rating":4,"reviews":3,"price":222.65,"discription":"Without a strong digital platform, time and money are wasted, content sits unnoticed, and prospective clients disappear.","features":["VR 2 in 1, support 3D/4D AR","Intergrate with all devices as mobile, PS4, PS5, etc","Sync and Save data with Cloud"]},"moreInfo":{"SKU":"VRO20-5112","Category":"Technology","tags":["samsung","oculus","vr","headset","ar"]}}'),f=JSON.parse('{"title":"\u0646\u0638\u0627\u0631\u0629 \u0633\u0627\u0645\u0633\u0648\u0646\u062c \u0644\u0644\u0648\u0627\u0642\u0639 \u0627\u0644\u0627\u0641\u062a\u0631\u0627\u0636\u0649 \u0627\u0644\u062c\u062f\u064a\u062f\u0629","images":["./assets/img/shop/products/pr1.png","./assets/img/shop/products/pr2.png","./assets/img/shop/products/pr3.png","./assets/img/shop/products/pr4.png","./assets/img/shop/products/pr5.png"],"mainInfo":{"title":"\u0646\u0638\u0627\u0631\u0629 \u0633\u0627\u0645\u0633\u0648\u0646\u062c \u0644\u0644\u0648\u0627\u0642\u0639 \u0627\u0644\u0627\u0641\u062a\u0631\u0627\u0636\u0649 \u0627\u0644\u062c\u062f\u064a\u062f\u0629","category":"\u0633\u0627\u0645\u0633\u0648\u0646\u062c","rating":4,"reviews":3,"price":222.65,"discription":"\u0628\u062f\u0648\u0646 \u0645\u0646\u0635\u0629 \u0631\u0642\u0645\u064a\u0629 \u0642\u0648\u064a\u0629 \u060c \u064a\u0636\u064a\u0639 \u0627\u0644\u0648\u0642\u062a \u0648\u0627\u0644\u0645\u0627\u0644 \u060c \u0648\u064a\u0628\u0642\u0649 \u0627\u0644\u0645\u062d\u062a\u0648\u0649 \u062f\u0648\u0646 \u0623\u0646 \u064a\u0644\u0627\u062d\u0638\u0647 \u0623\u062d\u062f \u060c \u0648\u064a\u062e\u062a\u0641\u064a \u0627\u0644\u0639\u0645\u0644\u0627\u0621 \u0627\u0644\u0645\u062d\u062a\u0645\u0644\u0648\u0646.","features":[" \u0646\u0638\u0627\u0631\u0629 \u0648\u0627\u0642\u0639 \u0627\u0641\u062a\u0631\u0627\u0636\u0649 \u062a\u062f\u0639\u0645 \u0627\u0644\u062c\u064a\u0644 \u0627\u0644\u0631\u0627\u0628\u0639 \u0648\u0627\u0644\u062e\u0627\u0645\u0633","\u062a\u062a\u0643\u0627\u0645\u0644 \u0645\u0639 \u062c\u0645\u064a\u0639 \u0627\u0644\u0623\u062c\u0647\u0632\u0629 \u0643\u0645\u062d\u0645\u0648\u0644 ,  PS4, PS5, etc","\u0645\u0632\u0627\u0645\u0646\u0629 \u0648\u062d\u0641\u0638 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0645\u0639 \u0627\u0644\u0633\u062d\u0627\u0628\u0629"]},"moreInfo":{"SKU":"VRO20-5112","Category":"\u062a\u0643\u0646\u0648\u0644\u0648\u062c\u0649","tags":["\u0633\u0627\u0645\u0633\u0648\u0646\u062c","oculus","vr","\u0646\u0638\u0627\u0631\u0629","ar"]}}'),x=function(e){var s=e.style,t=void 0===s?"4":s,r=e.rtl,l=r?f:h;return(0,i.jsx)("section",{className:"product pt-50",children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)(a,{productName:l.title,rtl:r}),(0,i.jsx)("div",{className:"content",children:(0,i.jsxs)("div",{className:"row gx-5",children:[(0,i.jsx)(c,{productImages:l.images}),(0,i.jsx)("div",{className:"col-lg-6",children:(0,i.jsxs)("div",{className:"product-info",children:[(0,i.jsx)(o,{mainInfo:l.mainInfo,rtl:r}),(0,i.jsxs)("div",{className:"color-quantity",children:[(0,i.jsx)(d,{rtl:r}),(0,i.jsx)(m,{rtl:r,style:t})]}),(0,i.jsx)(u,{moreInfo:l.moreInfo,rtl:r}),(0,i.jsx)(p,{})]})})]})})]})})}},9473:function(e,s,t){"use strict";t.d(s,{Z:function(){return c}});var i=t(5893),a=t(8494),r=t(8116),l=JSON.parse('[{"image":"./assets/img/shop/products/1.png","label":"new","liked":true,"category":"asus","title":"ASUS Chromebook Flip -10.2 inch, 256GB","rating":4,"reviews":3,"price":"197.00"},{"image":"./assets/img/shop/products/2.png","label":"15% off","liked":false,"category":"apple","title":"Macbook Air 2018, 1 TB","rating":5,"reviews":3,"price":{"new":"421.00","old":"521.00"}},{"image":"./assets/img/shop/products/3.png","liked":false,"category":"samsung","title":"Samsung New VR Headset, Oculus 2.0","rating":4,"reviews":3,"price":"197.00"},{"image":"./assets/img/shop/products/4.png","liked":false,"category":"brand name","title":"iPhone 6s Gold 64GB, Retina Ready","rating":4,"reviews":3,"price":"197.00"},{"image":"./assets/img/shop/products/5.png","liked":false,"category":"Xbox","title":"Xbox One Controller","rating":4,"reviews":3,"price":"197.00"},{"image":"./assets/img/shop/products/6.png","label":"15% off","liked":false,"category":"amcrest","title":"Amcrest Outdoor Camera","rating":4,"reviews":3,"price":{"new":"421.00","old":"521.00"}},{"image":"./assets/img/shop/products/7.png","liked":false,"category":"dji2","title":"DJI II Phantom 4 Quad Drone With Camera","rating":4,"reviews":3,"price":"197.00"},{"image":"./assets/img/shop/products/8.png","liked":false,"category":"gopro","title":"Gopro Hero 4 Sliver 4K HD, Wireles Sport Camera","rating":4,"reviews":3,"price":"197.00"}]'),n=JSON.parse('[{"image":"./assets/img/shop/products/1.png","label":"\u062c\u062f\u064a\u062f","liked":true,"category":"\u0627\u064a\u0633\u0648\u0633","title":"\u0627\u064a\u0633\u0648\u0633 \u0643\u0631\u0648\u0645 \u0628\u0648\u0643  -10.2 inch, 256GB","rating":4,"reviews":3,"price":"197.00"},{"image":"./assets/img/shop/products/2.png","label":"15% \u062e\u0635\u0645","liked":false,"category":"\u0627\u0628\u0644","title":"\u0645\u0627\u0643 \u0628\u0648\u0643 2018, 1 TB","rating":5,"reviews":3,"price":{"new":"421.00","old":"521.00"}},{"image":"./assets/img/shop/products/3.png","liked":false,"category":"\u0633\u0627\u0645\u0633\u0648\u0646\u062c","title":"\u0646\u0638\u0627\u0631\u0627\u062a \u0627\u0644\u0648\u0627\u0642\u0639 \u0627\u0644\u0627\u0641\u062a\u0631\u0627\u0636 \u0645\u0646 \u0633\u0627\u0645\u0633\u0648\u0646\u062c ","rating":4,"reviews":3,"price":"197.00"},{"image":"./assets/img/shop/products/4.png","liked":false,"category":"\u0627\u0633\u0645 \u0627\u0644\u0628\u0631\u0627\u0646\u062f","title":"\u0627\u064a\u0641\u0648\u0646 6s \u0630\u0647\u0628\u064a 64GB","rating":4,"reviews":3,"price":"197.00"},{"image":"./assets/img/shop/products/5.png","liked":false,"category":"\u0627\u0643\u0633 \u0628\u0648\u0643\u0633","title":"\u0627\u0643\u0633 \u0628\u0648\u0643\u0633 \u0627\u0630\u0631\u0639\u0647 \u062a\u062d\u0643\u0645","rating":4,"reviews":3,"price":"197.00"},{"image":"./assets/img/shop/products/6.png","label":"15% \u062e\u0635\u0645","liked":false,"category":"\u0633\u0648\u0646\u0649","title":"\u0643\u0627\u0645\u064a\u0631\u0627 \u0633\u0648\u0646\u0649","rating":4,"reviews":3,"price":{"new":"421.00","old":"521.00"}},{"image":"./assets/img/shop/products/7.png","liked":false,"category":"dji2","title":"DJI II Phantom 4 Quad Drone With Camera","rating":4,"reviews":3,"price":"197.00"},{"image":"./assets/img/shop/products/8.png","liked":false,"category":"gopro","title":"Gopro Hero 4 Sliver 4K HD, Wireles Sport Camera","rating":4,"reviews":3,"price":"197.00"}]');t(933),t(5519),t(92);r.ZP.use([r.W_,r.pt]);var c=function(e){var s=e.style,t=void 0===s?"4":s,r=e.rtl,c=r?n:l;return(0,i.jsx)("section",{className:"related-products section-padding",children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)("div",{className:"text-center title",children:(0,i.jsx)("h3",{children:r?"\u0645\u0646\u062a\u062c\u0627\u062a \u0645\u0634\u0627\u0628\u0647\u0629":"Related Products"})}),(0,i.jsxs)("div",{className:"related-products-slider position-relative",children:[(0,i.jsx)(a.tq,{className:"swiper-container",slidesPerView:5,spaceBetween:24,speed:1e3,pagination:!1,navigation:{nextEl:".related-products-slider .swiper-button-next",prevEl:".related-products-slider .swiper-button-prev"},mousewheel:!1,keyboard:!0,autoplay:{delay:4e3},loop:!0,breakpoints:{0:{slidesPerView:1},480:{slidesPerView:1},787:{slidesPerView:2},991:{slidesPerView:3},1200:{slidesPerView:5}},children:c.map((function(e,s){return(0,i.jsx)(a.o5,{children:(0,i.jsxs)("div",{className:"product-card",children:[(0,i.jsxs)("div",{className:"img",children:[(0,i.jsx)("img",{src:e.image,alt:""}),e.label&&(0,i.jsx)("span",{className:"label ".concat("new"===e.label?"new":"sale-off"),children:e.label}),(0,i.jsxs)("span",{className:"fav-btn ".concat(e.liked?"active":""),children:[" ",(0,i.jsx)("i",{className:"fas fa-heart"})," "]})]}),(0,i.jsxs)("div",{className:"info",children:[(0,i.jsx)("h6",{className:"category",children:e.category}),(0,i.jsx)("h5",{className:"title",children:e.title}),(0,i.jsxs)("div",{className:"rate",children:[(0,i.jsx)("div",{className:"stars",children:Array(5).fill(0).map((function(s,t){return(0,i.jsx)("i",{className:"fas fa-star ".concat(t+1<=e.rating?"active":"")},t)}))}),(0,i.jsxs)("span",{className:"rev ms-1",children:[e.reviews," ",r?"\u0627\u0644\u0645\u0631\u0627\u062c\u0639\u0627\u062a":"Reviews"]})]})]}),(0,i.jsx)("div",{className:"price",children:"string"===typeof e.price?"$"+e.price:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("span",{className:"price-sale",children:["$",e.price.new]})," ",(0,i.jsxs)("span",{className:"old-price",children:["$",e.price.old]})]})}),(0,i.jsx)("a",{href:"#",className:"btn rounded-pill bg-blue".concat(t," fw-bold text-white mt-20"),target:"_blank",children:(0,i.jsxs)("span",{children:[" ",r?"\u0627\u0636\u0641 \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0629":"Add To Cart"," "]})})]})},s)}))}),(0,i.jsx)("div",{className:"swiper-button-next"}),(0,i.jsx)("div",{className:"swiper-button-prev"})]})]})})}},5519:function(){},706:function(){},92:function(){},5083:function(){},4111:function(e,s,t){"use strict";function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}t.d(s,{Z:function(){return i}})},1438:function(e,s,t){"use strict";function i(e,s){if(!(e instanceof s))throw new TypeError("Cannot call a class as a function")}t.d(s,{Z:function(){return i}})},2951:function(e,s,t){"use strict";function i(e,s){for(var t=0;t<s.length;t++){var i=s[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function a(e,s,t){return s&&i(e.prototype,s),t&&i(e,t),e}t.d(s,{Z:function(){return a}})},460:function(e,s,t){"use strict";function i(e){return i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},i(e)}function a(e){return i(e)}t.d(s,{Z:function(){return n}});var r=t(4111);function l(e,s){return!s||"object"!==((t=s)&&t.constructor===Symbol?"symbol":typeof t)&&"function"!==typeof s?(0,r.Z)(e):s;var t}function n(e){var s=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,i=a(e);if(s){var r=a(this).constructor;t=Reflect.construct(i,arguments,r)}else t=i.apply(this,arguments);return l(this,t)}}},8029:function(e,s,t){"use strict";function i(e,s){return i=Object.setPrototypeOf||function(e,s){return e.__proto__=s,e},i(e,s)}function a(e,s){if("function"!==typeof s&&null!==s)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(s&&s.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),s&&i(e,s)}t.d(s,{Z:function(){return a}})},9396:function(e,s,t){"use strict";function i(e,s){return s=null!=s?s:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):function(e,s){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);s&&(i=i.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),t.push.apply(t,i)}return t}(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))})),e}t.d(s,{Z:function(){return i}})}}]);