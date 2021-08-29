(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){},20:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),c=n.n(o),i=(n(17),n(3)),s=n(4),u=n(6),l=n(5),h=n(7),d=(n(11),n(18),n(1)),p=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handlePictureChange=function(t){e.setState({query:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){if(t.preventDefault(),""===e.state.query.trim())return h.b.info("Write down something to find a picture");e.props.onSubmit(e.state.query),e.setState({query:""})},e}return Object(s.a)(n,[{key:"render",value:function(){return Object(d.jsx)("header",{className:"Searchbar",children:Object(d.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(d.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(d.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(d.jsx)("input",{className:"SearchForm-input",onChange:this.handlePictureChange,type:"text",name:"query",value:this.state.query,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),n}(a.Component);p.defaultProps={};var j=p,m=n(10);n(20);var b=function(e){var t=e.pictures,n=e.onClick;return t.map((function(e){return Object(d.jsx)("li",{className:"ImageGalleryItem",children:Object(d.jsx)("img",{onClick:function(){return n(e)},src:e.webformatURL,alt:e.tags,className:"ImageGalleryItem-image"})},e.id)}))},f=(n(21),n(12)),g=n.n(f);n(42);function y(){return Object(d.jsx)("div",{className:"Loader",children:Object(d.jsx)(g.a,{type:"Circles",color:"#3f51b5",height:100,width:100,timeout:3e3,"margin-left":300})})}n(43);var v=function(e){var t=e.onClick;return Object(d.jsx)("button",{onClick:t,className:"Button",type:"button",children:"Load more"})},O=(n(44),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={pictures:[],error:null,page:1,status:"idle"},e.handleLoadMore=function(){e.setState((function(e){return{page:e.page+1}}))},e}return Object(s.a)(n,[{key:"componentDidUpdate",value:function(e,t){var n=this;e.query===this.props.query&&t.page===this.state.page||(e.query!==this.props.query?this.setState({status:"pending",pictures:[],page:1}):t.page!==this.state.page&&this.setState({loading:!0}),fetch("https://pixabay.com/api/?q=".concat(this.props.query,"&page=").concat(this.state.page,"&key=22334944-1a4c27752b28577a34c92f730&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.ok?e.json():Promise.reject(new Error("There are no pictures with ".concat(n.props.query)))})).then((function(e){var t=e.hits;n.setState((function(e){return{pictures:[].concat(Object(m.a)(e.pictures),Object(m.a)(t)),status:"resolved"}})),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch((function(e){return n.setState({error:e,status:"rejected"})})))}},{key:"render",value:function(){var e=this.state,t=e.status,n=e.pictures,a=e.error;return"idle"===t?Object(d.jsx)("div",{className:"Warning",children:"Write down the word to start searching for pictures"}):"pending"===t?Object(d.jsx)(y,{}):"rejected"===t?h.b.error(a.message):"resolved"===t?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("ul",{className:"ImageGallery",children:Object(d.jsx)(b,{pictures:n,onClick:this.props.onClick})}),n.length>0?Object(d.jsx)(v,{onClick:this.handleLoadMore}):Object(d.jsx)("div",{className:"Warning",children:"You have to write down right word for search"})]}):void 0}}]),n}(a.Component)),w=(n(45),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleOverlayClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props.modalPicture;return Object(d.jsx)("div",{className:"Overlay",onClick:this.handleOverlayClick,children:Object(d.jsx)("div",{className:"Modal",children:Object(d.jsx)("img",{className:"Modal__Picture",src:e.largeImageURL,alt:e.tags})})})}}]),n}(a.Component)),x=(n(46),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={pictureQuery:"",showModal:!1,modalPicture:""},e.handleFormSubmit=function(t){e.setState({pictureQuery:t})},e.openModal=function(t){e.setState({showModal:!0,modalPicture:t})},e.closeModal=function(){e.setState({showModal:!1})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state,t=e.pictureQuery,n=e.showModal,a=e.modalPicture;return Object(d.jsxs)("div",{children:[Object(d.jsx)(j,{onSubmit:this.handleFormSubmit}),Object(d.jsx)(O,{query:t,onClick:this.openModal}),n&&Object(d.jsx)(w,{modalPicture:a,onClose:this.closeModal}),Object(d.jsx)(h.a,{position:"top-center",autoClose:2e3})]})}}]),n}(a.Component));x.defaultProps={};var C=x,S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),o(e),c(e)}))};c.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(C,{})}),document.getElementById("root")),S()}},[[47,1,2]]]);
//# sourceMappingURL=main.da0de481.chunk.js.map