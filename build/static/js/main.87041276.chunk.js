(this["webpackJsonpredux-bookstore"]=this["webpackJsonpredux-bookstore"]||[]).push([[0],{17:function(e,t,a){e.exports=a.p+"static/media/redux.13ba06f8.svg"},29:function(e,t,a){e.exports=a.p+"static/media/reactRedux.93e2b00d.svg"},30:function(e,t,a){e.exports=a.p+"static/media/logo.dae07a07.svg"},31:function(e,t,a){e.exports=a(65)},42:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(9),c=a.n(r),s=a(4),l=a(6),i=a(28),m=(a(42),a(8)),u=a(3),d=a(2),E=a.n(d),h="https://arn-bookstore-backend.herokuapp.com/",f=function(e){return{type:"FETCH_REQUEST_SUCCESS",response:e}},p=function(e){return{type:"FETCH_REQUEST_FAILURE",response:e}},b=function(e){return{type:"REFRESH_MODAL",selectedObject:e}},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_BOOKLIST":return Object(u.a)(t.response);case"CREATE_BOOK":return[].concat(Object(u.a)(e),[t.book]);case"REMOVE_BOOK":return e.filter((function(e){return e.id!==t.book.id}));case"CREATE_COMMENT":return[].concat(Object(u.a)(e.filter((function(e){return e.id!==t.book.id}))),[Object(m.a)({},t.book,{comments:[].concat(Object(u.a)(t.book.comments),[t.comment])})]).sort((function(e,t){return e.id-t.id}));case"REMOVE_COMMENT":return[].concat(Object(u.a)(e.filter((function(e){return e.id!==t.book.id}))),[Object(m.a)({},t.book,{comments:Object(u.a)(t.book.comments.filter((function(e){return e.id!==t.comment.id})))})]).sort((function(e,t){return e.id-t.id}));default:return e}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"All",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_FILTER":return t.genre;default:return e}},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!1,errors:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_REQUEST":return{isLoading:!0,errors:[]};case"FETCH_REQUEST_SUCCESS":return{isLoading:!1,errors:[]};case"FETCH_REQUEST_FAILURE":return{isLoading:!1,errors:t.response};default:return e}},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_GENRES":return Object(u.a)(t.response);case"CREATE_GENRE":return[].concat(Object(u.a)(e),[t.genre]);case"REMOVE_GENRE":return e.filter((function(e){return e!==t.genre}));default:return e}},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{showModal:!1,type:"comments",selectedObject:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_MODAL":return{showModal:!e.showModal,type:t.modalType,selectedObject:t.selectedObject};case"REFRESH_MODAL":return Object(m.a)({},e,{selectedObject:t.selectedObject});default:return e}},y=Object(l.c)({books:g,genres:O,filter:v,status:k,modal:C}),T=function(e){var t=e.book,a=e.removeBookFromList,n=e.toggleModal,r=Math.floor(100*Math.random()),c=25*Math.round(r/25);return o.a.createElement("div",{className:"book",key:t.id},o.a.createElement("div",{id:"left"},o.a.createElement("h5",{className:"category font-header"},t.genre),o.a.createElement("h2",{className:"title font-header"},t.title),o.a.createElement("h4",{className:"author"},t.author),o.a.createElement("div",{className:"actions"},o.a.createElement("button",{type:"button",onClick:function(){return n("comments",t)}},"Comments"),o.a.createElement("button",{type:"button",onClick:function(){return a(t)}},"Remove Book"),o.a.createElement("button",{type:"button",disabled:!0},"Edit"))),o.a.createElement("div",{id:"center"},o.a.createElement("div",{className:"pie-graph-".concat(c)}),o.a.createElement("div",{className:"percent"},o.a.createElement("h1",{className:"percentage"},r,"%"),o.a.createElement("h4",{className:"completed"},"Completed"))),o.a.createElement("div",{id:"right"},o.a.createElement("div",{className:"current all-caps"},"Current Chapter"),o.a.createElement("div",{className:"chapter"},"Chapter 11"),o.a.createElement("button",{type:"button"},"Update Progress")))},N=(a(60),["Action","Biography","History","Horror","Kids","Learning","Sci-Fi"]),j=["All"].concat(N),S=function(e){var t=e.changeFilter,a=o.a.useRef(null);return o.a.createElement("div",null,o.a.createElement("select",{ref:a,name:"category",placeholder:"Category",onChange:function(){return t(a.current.value)}},j.map((function(e){return o.a.createElement("option",{key:e},e)}))))},F=(a(61),a(29)),R=a.n(F),_=a(30),M=a.n(_),B=a(17),L=a.n(B),x=function(e){var t=e.books,a=e.filter,n=e.status,r=e.removeBookFromList,c=e.changeFilter,s=e.toggleModal,l="All"!==a?t.filter((function(e){return e.genre===a})):t,i=n.isLoading?o.a.createElement("div",{className:"text-center"},o.a.createElement("div",{className:"loader center"}),o.a.createElement("h1",{className:"text-white"},"Loading...")):o.a.createElement("div",{className:"center max-width-90 bookSection"},l.map((function(e){return o.a.createElement(T,{book:e,key:e.id+e.title,removeBookFromList:r,toggleModal:s})})));return o.a.createElement("div",null,o.a.createElement("header",{className:"m-b bg-header round-top"},o.a.createElement("div",{className:"center max-width-90 flex-row"},o.a.createElement("h1",{className:"app-title"},"Bookstore CMS"),o.a.createElement("div",{className:"cat-title"},o.a.createElement("span",{className:"text-grey"},"Books")),o.a.createElement("div",{className:"categories text-center"},o.a.createElement("span",{className:"text-grey"},"Genres"),o.a.createElement(S,{changeFilter:c})),o.a.createElement("img",{className:"logo show-sm",src:R.a,alt:"react-redux logo"}),o.a.createElement("img",{className:"logo show-md",src:L.a,alt:"redux logo"}),o.a.createElement("div",{className:"logo-container hide-sm hide-md"},o.a.createElement("img",{className:"logo",src:M.a,alt:"react logo"}),o.a.createElement("img",{className:"logo",src:L.a,alt:"redux logo"})))),o.a.createElement("main",{className:"bg-main"},i))};x.defaultProps={filter:"All"};var H=Object(s.b)((function(e){return{books:e.books,filter:e.filter,status:e.status}}),(function(e){return{removeBookFromList:function(t){e(function(e){return function(t){t({type:"FETCH_REQUEST"}),E.a.delete("".concat(h,"api/v1/books/").concat(e.id)).then((function(a){t(f(a.data.message)),t(function(e){return{type:"REMOVE_BOOK",book:e}}(e))})).catch((function(e){t(p(e.response.data.error))}))}}(t))},changeFilter:function(t){e({type:"CHANGE_FILTER",genre:t})},toggleModal:function(t,a){e(function(e,t){return{type:"TOGGLE_MODAL",modalType:e,selectedObject:t}}(t,a))}}}))(x),w=a(7),A=a(10),U=a(11),G=a(5),Q=a(13),I=a(12),K=(a(62),function(e){Object(Q.a)(a,e);var t=Object(I.a)(a);function a(e){var n;return Object(A.a)(this,a),(n=t.call(this,e)).state={title:"",author:"",genre:N[0],comments:[]},n.handleChange=n.handleChange.bind(Object(G.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(G.a)(n)),n.selectForm=o.a.createRef(),n}return Object(U.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(w.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){var t=this.props.addBookToList;e.preventDefault(),t(this.state),this.reset()}},{key:"reset",value:function(){this.selectForm.current.scrollIntoView({behavior:"smooth"}),this.setState({title:"",author:"",genre:N[0],comments:[]})}},{key:"render",value:function(){var e=this.state,t=e.title,a=e.author,n=e.genre,r=this.props,c=r.status,s=r.genres,l=c.errors;return o.a.createElement("div",{className:"bg-header round-bottom box-shadow"},o.a.createElement("div",{className:"center max-width-90 border-top"},o.a.createElement("div",{className:"formTitle"},"Add New Book"),o.a.createElement("div",{className:"errors"},l.map((function(e){return function(e){return o.a.createElement("div",{key:e},e)}(e)}))),o.a.createElement("form",{ref:this.selectForm,onSubmit:this.handleSubmit,className:"bookForm"},o.a.createElement("div",null,o.a.createElement("input",{placeholder:"Book Title",name:"title",type:"text",value:t,onChange:this.handleChange}),o.a.createElement("input",{placeholder:"Book Author",name:"author",type:"text",value:a,onChange:this.handleChange})),o.a.createElement("select",{className:"font-header",name:"genre",placeholder:"Genre",value:n,onChange:this.handleChange},s.map((function(e){return o.a.createElement("option",{key:e},e)}))),o.a.createElement("button",{type:"submit"},"Add Book"))))}}]),a}(o.a.Component)),D=Object(s.b)((function(e){return{status:e.status,genres:e.genres}}),(function(e){return{addBookToList:function(t){e(function(e){return function(t){t({type:"FETCH_REQUEST"}),E.a.post("".concat(h,"api/v1/books"),{title:e.title,author:e.author,genre:e.genre}).then((function(e){var a=e.data;t(f(e.data.message)),t(function(e){return{type:"CREATE_BOOK",book:e}}(a.data))})).catch((function(e){t(p(e.response.data.error))}))}}(t))}}}))(K),V=function(e){var t=e.book,a=e.comment,n=e.removeCommentFromBook;return o.a.createElement("div",null,o.a.createElement("div",null,a.body),o.a.createElement("button",{type:"button",onClick:function(){return n(t,a)}},"Remove"))};V.defaultProps={comment:[]};var P=V,J=(a(63),function(e){Object(Q.a)(a,e);var t=Object(I.a)(a);function a(e){var n;return Object(A.a)(this,a),(n=t.call(this,e)).state={comment:""},n.handleChange=n.handleChange.bind(Object(G.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(G.a)(n)),n}return Object(U.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(w.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){var t=this.props,a=t.addCommentToBook,n=t.modal,o=(t.refreshModal,t.books,n.selectedObject),r=this.state.comment;e.preventDefault(),a(o,r),this.reset()}},{key:"reset",value:function(){this.setState({comment:""})}},{key:"render",value:function(){var e,t=this.props,a=t.modal,n=t.removeCommentFromBook,r=t.refreshModal,c=a.selectedObject,s=c.comments;return"comments"===a.type&&a.showModal&&(e=o.a.createElement("div",{className:"modal"},o.a.createElement("div",{className:"modalContent"},o.a.createElement("header",null,o.a.createElement("div",null)),o.a.createElement("main",null,o.a.createElement("h2",null,c.title),s.map((function(e){return o.a.createElement(P,{book:c,comment:e,key:e.id+c.title,removeCommentFromBook:n,refreshModal:r})}))),o.a.createElement("footer",null,o.a.createElement("input",{name:"comment",type:"text",placeholder:"type comment here...",onChange:this.handleChange}),o.a.createElement("button",{type:"button",onClick:this.handleSubmit}," Comment "))))),a.showModal?e:null}}]),a}(o.a.Component)),q=Object(s.b)((function(e){return{books:e.books,modal:e.modal}}),(function(e){return{removeCommentFromBook:function(t,a){e(function(e,t){return function(a){a({type:"FETCH_REQUEST"}),E.a.delete("".concat(h,"api/v1/books/").concat(e.id,"/comments/").concat(t.id)).then((function(n){a(f(n.data.message)),a(function(e,t){return{type:"REMOVE_COMMENT",book:e,comment:t}}(e,t)),E.a.get("".concat(h,"api/v1/books/").concat(e.id)).then((function(e){var t=e.data.data;a(f(e.data.message)),a(b(t))})).catch((function(e){a(p(e.response.data.error))}))})).catch((function(e){a(p(e.response.data.error))}))}}(t,a))},addCommentToBook:function(t,a){e(function(e,t){return function(a){a({type:"FETCH_REQUEST"}),E.a.post("".concat(h,"api/v1/books/").concat(e.id,"/comments"),{body:t}).then((function(t){var n=t.data.data;a(f(t.data.message)),a(function(e,t){return{type:"CREATE_COMMENT",book:e,comment:t}}(e,n)),a({type:"FETCH_REQUEST"}),E.a.get("".concat(h,"api/v1/books/").concat(e.id)).then((function(e){var t=e.data.data;a(f(e.data.message)),a(b(t))})).catch((function(e){a(p(e.response.data.error))}))})).catch((function(e){a(p(e.response.data.error))}))}}(t,a))},refreshModal:function(t){e(b(t))}}}))(J),z=(a(64),function(){return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"backBG bg-dark"},o.a.createElement("div",{className:"container center"},o.a.createElement(H,null),o.a.createElement(D,null),o.a.createElement(q,null))))}),W=Object(l.d)(y,{books:[],genres:["Action","Biography","Kids","Learning","Sci-Fi","Horor","History"],status:{isLoading:!1,errors:[]},modal:{showModal:!1,type:"comments",selectedObject:{}}},Object(l.a)(i.a));W.dispatch((function(e){e({type:"FETCH_REQUEST"}),E.a.get("".concat(h)).then((function(t){e(f(t.statusText)),e({type:"FETCH_BOOKLIST",response:t.data})})).catch((function(t){e(p(t.response.data.error))}))})),W.dispatch((function(e){e({type:"FETCH_REQUEST"}),E.a.get("".concat(h,"api/v1/genre")).then((function(t){e(f(t.statusText)),e({type:"FETCH_GENRES",response:t.data})})).catch((function(t){e(p(t.response.data.error))}))})),c.a.render(o.a.createElement(s.a,{store:W},o.a.createElement(z,null)),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.87041276.chunk.js.map