(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-021db7b8"],{"057f":function(t,e,r){var c=r("fc6a"),n=r("241c").f,o={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return n(t)}catch(e){return i.slice()}};t.exports.f=function(t){return i&&"[object Window]"==o.call(t)?a(t):n(c(t))}},"1dde":function(t,e,r){var c=r("d039"),n=r("b622"),o=r("2d00"),i=n("species");t.exports=function(t){return o>=51||!c((function(){var e=[],r=e.constructor={};return r[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},2532:function(t,e,r){"use strict";var c=r("23e7"),n=r("5a34"),o=r("1d80"),i=r("577e"),a=r("ab13");c({target:"String",proto:!0,forced:!a("includes")},{includes:function(t){return!!~i(o(this)).indexOf(i(n(t)),arguments.length>1?arguments[1]:void 0)}})},"428f":function(t,e,r){var c=r("da84");t.exports=c},"44e7":function(t,e,r){var c=r("861d"),n=r("c6b6"),o=r("b622"),i=o("match");t.exports=function(t){var e;return c(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==n(t))}},"5a34":function(t,e,r){var c=r("44e7");t.exports=function(t){if(c(t))throw TypeError("The method doesn't accept regular expressions");return t}},"746f":function(t,e,r){var c=r("428f"),n=r("5135"),o=r("e538"),i=r("9bf2").f;t.exports=function(t){var e=c.Symbol||(c.Symbol={});n(e,t)||i(e,t,{value:o.f(t)})}},8418:function(t,e,r){"use strict";var c=r("a04b"),n=r("9bf2"),o=r("5c6c");t.exports=function(t,e,r){var i=c(e);i in t?n.f(t,i,o(0,r)):t[i]=r}},"99af":function(t,e,r){"use strict";var c=r("23e7"),n=r("d039"),o=r("e8b5"),i=r("861d"),a=r("7b0b"),s=r("50c4"),u=r("8418"),d=r("65f0"),l=r("1dde"),f=r("b622"),p=r("2d00"),b=f("isConcatSpreadable"),m=9007199254740991,h="Maximum allowed index exceeded",g=p>=51||!n((function(){var t=[];return t[b]=!1,t.concat()[0]!==t})),v=l("concat"),y=function(t){if(!i(t))return!1;var e=t[b];return void 0!==e?!!e:o(t)},O=!g||!v;c({target:"Array",proto:!0,forced:O},{concat:function(t){var e,r,c,n,o,i=a(this),l=d(i,0),f=0;for(e=-1,c=arguments.length;e<c;e++)if(o=-1===e?i:arguments[e],y(o)){if(n=s(o.length),f+n>m)throw TypeError(h);for(r=0;r<n;r++,f++)r in o&&u(l,f,o[r])}else{if(f>=m)throw TypeError(h);u(l,f++,o)}return l.length=f,l}})},a3aa:function(t,e,r){"use strict";r.r(e);r("caad"),r("2532"),r("a4d3"),r("e01a");var c=r("7a23"),n=Object(c["createElementVNode"])("div",{class:"loading"},[Object(c["createElementVNode"])("span"),Object(c["createElementVNode"])("span"),Object(c["createElementVNode"])("span"),Object(c["createElementVNode"])("span")],-1),o=Object(c["createElementVNode"])("div",{class:"home-banner"},null,-1),i={class:"container my-3"},a={"aria-label":"breadcrumb"},s={class:"breadcrumb"},u={class:"breadcrumb-item"},d=Object(c["createTextVNode"])("Home"),l={class:"breadcrumb-item"},f=Object(c["createTextVNode"])("種植產品"),p={class:"breadcrumb-item active","aria-current":"page"},b={class:"row flex-md-row"},m={class:"col-md-6"},h={class:"col-6 w-100 mb-4"},g=["src"],v={class:"col-md-6 d-flex w-100"},y=["src"],O=["src"],j={class:"col-md-6 my-5"},w={class:"d-flex justify-content-around mb-3"},x={key:0,class:"i bi-bookmark-heart-fill clickFavorite fs-2 text-success"},N={key:1,class:"i bi-bookmark-heart fs-2 text-success"},E={class:"mb-3"},S={class:"mb-3"},V={key:0,class:"h5 fw-bold card-text text-danger fs-5"},k=Object(c["createElementVNode"])("hr",null,null,-1);function C(t,e,r,C,P,T){var B=Object(c["resolveComponent"])("Loading"),L=Object(c["resolveComponent"])("router-link");return Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],null,[Object(c["createVNode"])(B,{active:P.isLoading},{default:Object(c["withCtx"])((function(){return[n]})),_:1},8,["active"]),o,Object(c["createElementVNode"])("div",i,[Object(c["createElementVNode"])("nav",a,[Object(c["createElementVNode"])("ol",s,[Object(c["createElementVNode"])("li",u,[Object(c["createVNode"])(L,{class:"text-decoration-none text-success fw-bold",to:"/user/home"},{default:Object(c["withCtx"])((function(){return[d]})),_:1})]),Object(c["createElementVNode"])("li",l,[Object(c["createVNode"])(L,{class:"text-decoration-none text-success",to:"/user/products"},{default:Object(c["withCtx"])((function(){return[f]})),_:1})]),Object(c["createElementVNode"])("li",p,Object(c["toDisplayString"])(P.product.title),1)])]),Object(c["createElementVNode"])("div",b,[Object(c["createElementVNode"])("div",m,[Object(c["createElementVNode"])("div",h,[Object(c["createElementVNode"])("img",{src:P.img,alt:"product.title",class:"w-100 img-cover"},null,8,g)]),Object(c["createElementVNode"])("div",v,[Object(c["createElementVNode"])("img",{class:" img-cover bg-white cursor-pointer shadow-sm mx-1",onClick:e[0]||(e[0]=function(t){return P.img=P.product.imageUrl}),src:P.product.imageUrl,alt:"product.title",style:{width:"30%"}},null,8,y),Object(c["createElementVNode"])("img",{class:" img-cover cursor-pointer shadow-sm mx-1",onClick:e[1]||(e[1]=function(t){return P.img=P.product.imageUrl2}),src:P.product.imageUrl2,alt:"product.title",style:{width:"30%"}},null,8,O)])]),Object(c["createElementVNode"])("div",j,[Object(c["createElementVNode"])("div",w,[Object(c["createElementVNode"])("h2",null,Object(c["toDisplayString"])(P.product.title),1),Object(c["createElementVNode"])("a",{href:"#",onClick:e[2]||(e[2]=Object(c["withModifiers"])((function(t){return T.addMyFavorite(P.product)}),["prevent"]))},[P.favorites.includes(P.product.id)?(Object(c["openBlock"])(),Object(c["createElementBlock"])("i",x)):(Object(c["openBlock"])(),Object(c["createElementBlock"])("i",N))])]),Object(c["createElementVNode"])("div",E,Object(c["toDisplayString"])(P.product.content),1),Object(c["createElementVNode"])("div",S,Object(c["toDisplayString"])(P.product.description),1),Object(c["createElementVNode"])("div",{class:Object(c["normalizeClass"])(["h5",[P.product.price!==P.product.origin_price?["text-brown-400","text-decoration-line-through"]:"text-dark"]])},"NT. "+Object(c["toDisplayString"])(t.$filters.currency(P.product.origin_price))+" 元 ",3),P.product.price!==P.product.origin_price?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",V," 優惠價 "+Object(c["toDisplayString"])(t.$filters.currency(P.product.price))+" 元 ",1)):Object(c["createCommentVNode"])("",!0),k,Object(c["createElementVNode"])("button",{type:"button",class:"btn btn-outline-success",onClick:e[3]||(e[3]=function(t){return T.addToCart(P.product.id)})}," 加到購物車 ")])])])],64)}r("99af"),r("a434");var P=r("e0c2"),T={data:function(){return{products:[],product:{},id:"",img:"",isLoading:!1,favorites:P["a"].get()||[]}},inject:["emitter"],methods:{getProduct:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("yenying-api","/product/").concat(this.id);this.isLoading=!0,this.$http.get(e).then((function(e){console.log(e.data),t.isLoading=!1,e.data.success&&(t.product=e.data.product,t.img=t.product.imageUrl)}))},getProducts:function(){var t=this;this.isLoading=!0;var e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("yenying-api","/products/all");this.$http.get(e).then((function(e){t.isLoading=!1,t.products=e.data.products,t.pagination=e.data.pagination,t.categories(),console.log("products:",e)}))},addToCart:function(t){var e=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.isLoading=!0;var c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("yenying-api","/cart"),n={product_id:t,qty:r};this.$http.post(c,{data:n}).then((function(t){t.data.success&&(e.isLoading=!1,e.emitter.emit("update-cart"),e.emitter.emit("push-message",{style:"success",title:"已加入購物車"}))}))},addMyFavorite:function(t){this.favorites.includes(t.id)?(this.favorites.splice(this.favorites.indexOf(t.id),1),this.emitter.emit("push-message",{style:"danger",title:"已取消我的最愛"})):(this.favorites.push(t.id),this.emitter.emit("push-message",{style:"success",title:"已加入我的最愛"})),P["a"].save(this.favorites),this.emitter.emit("favorite")}},created:function(){this.id=this.$route.params.productId,this.getProduct(),this.getProducts()}},B=r("d959"),L=r.n(B);const F=L()(T,[["render",C]]);e["default"]=F},a434:function(t,e,r){"use strict";var c=r("23e7"),n=r("23cb"),o=r("a691"),i=r("50c4"),a=r("7b0b"),s=r("65f0"),u=r("8418"),d=r("1dde"),l=d("splice"),f=Math.max,p=Math.min,b=9007199254740991,m="Maximum allowed length exceeded";c({target:"Array",proto:!0,forced:!l},{splice:function(t,e){var r,c,d,l,h,g,v=a(this),y=i(v.length),O=n(t,y),j=arguments.length;if(0===j?r=c=0:1===j?(r=0,c=y-O):(r=j-2,c=p(f(o(e),0),y-O)),y+r-c>b)throw TypeError(m);for(d=s(v,c),l=0;l<c;l++)h=O+l,h in v&&u(d,l,v[h]);if(d.length=c,r<c){for(l=O;l<y-c;l++)h=l+c,g=l+r,h in v?v[g]=v[h]:delete v[g];for(l=y;l>y-c+r;l--)delete v[l-1]}else if(r>c)for(l=y-c;l>O;l--)h=l+c-1,g=l+r-1,h in v?v[g]=v[h]:delete v[g];for(l=0;l<r;l++)v[l+O]=arguments[l+2];return v.length=y-c+r,d}})},a4d3:function(t,e,r){"use strict";var c=r("23e7"),n=r("da84"),o=r("d066"),i=r("c430"),a=r("83ab"),s=r("4930"),u=r("d039"),d=r("5135"),l=r("e8b5"),f=r("861d"),p=r("d9b5"),b=r("825a"),m=r("7b0b"),h=r("fc6a"),g=r("a04b"),v=r("577e"),y=r("5c6c"),O=r("7c73"),j=r("df75"),w=r("241c"),x=r("057f"),N=r("7418"),E=r("06cf"),S=r("9bf2"),V=r("d1e7"),k=r("9112"),C=r("6eeb"),P=r("5692"),T=r("f772"),B=r("d012"),L=r("90e3"),F=r("b622"),$=r("e538"),D=r("746f"),M=r("d44e"),_=r("69f3"),J=r("b727").forEach,U=T("hidden"),I="Symbol",A="prototype",q=F("toPrimitive"),z=_.set,H=_.getterFor(I),Q=Object[A],R=n.Symbol,W=o("JSON","stringify"),G=E.f,K=S.f,X=x.f,Y=V.f,Z=P("symbols"),tt=P("op-symbols"),et=P("string-to-symbol-registry"),rt=P("symbol-to-string-registry"),ct=P("wks"),nt=n.QObject,ot=!nt||!nt[A]||!nt[A].findChild,it=a&&u((function(){return 7!=O(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(t,e,r){var c=G(Q,e);c&&delete Q[e],K(t,e,r),c&&t!==Q&&K(Q,e,c)}:K,at=function(t,e){var r=Z[t]=O(R[A]);return z(r,{type:I,tag:t,description:e}),a||(r.description=e),r},st=function(t,e,r){t===Q&&st(tt,e,r),b(t);var c=g(e);return b(r),d(Z,c)?(r.enumerable?(d(t,U)&&t[U][c]&&(t[U][c]=!1),r=O(r,{enumerable:y(0,!1)})):(d(t,U)||K(t,U,y(1,{})),t[U][c]=!0),it(t,c,r)):K(t,c,r)},ut=function(t,e){b(t);var r=h(e),c=j(r).concat(bt(r));return J(c,(function(e){a&&!lt.call(r,e)||st(t,e,r[e])})),t},dt=function(t,e){return void 0===e?O(t):ut(O(t),e)},lt=function(t){var e=g(t),r=Y.call(this,e);return!(this===Q&&d(Z,e)&&!d(tt,e))&&(!(r||!d(this,e)||!d(Z,e)||d(this,U)&&this[U][e])||r)},ft=function(t,e){var r=h(t),c=g(e);if(r!==Q||!d(Z,c)||d(tt,c)){var n=G(r,c);return!n||!d(Z,c)||d(r,U)&&r[U][c]||(n.enumerable=!0),n}},pt=function(t){var e=X(h(t)),r=[];return J(e,(function(t){d(Z,t)||d(B,t)||r.push(t)})),r},bt=function(t){var e=t===Q,r=X(e?tt:h(t)),c=[];return J(r,(function(t){!d(Z,t)||e&&!d(Q,t)||c.push(Z[t])})),c};if(s||(R=function(){if(this instanceof R)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?v(arguments[0]):void 0,e=L(t),r=function(t){this===Q&&r.call(tt,t),d(this,U)&&d(this[U],e)&&(this[U][e]=!1),it(this,e,y(1,t))};return a&&ot&&it(Q,e,{configurable:!0,set:r}),at(e,t)},C(R[A],"toString",(function(){return H(this).tag})),C(R,"withoutSetter",(function(t){return at(L(t),t)})),V.f=lt,S.f=st,E.f=ft,w.f=x.f=pt,N.f=bt,$.f=function(t){return at(F(t),t)},a&&(K(R[A],"description",{configurable:!0,get:function(){return H(this).description}}),i||C(Q,"propertyIsEnumerable",lt,{unsafe:!0}))),c({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:R}),J(j(ct),(function(t){D(t)})),c({target:I,stat:!0,forced:!s},{for:function(t){var e=v(t);if(d(et,e))return et[e];var r=R(e);return et[e]=r,rt[r]=e,r},keyFor:function(t){if(!p(t))throw TypeError(t+" is not a symbol");if(d(rt,t))return rt[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),c({target:"Object",stat:!0,forced:!s,sham:!a},{create:dt,defineProperty:st,defineProperties:ut,getOwnPropertyDescriptor:ft}),c({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:pt,getOwnPropertySymbols:bt}),c({target:"Object",stat:!0,forced:u((function(){N.f(1)}))},{getOwnPropertySymbols:function(t){return N.f(m(t))}}),W){var mt=!s||u((function(){var t=R();return"[null]"!=W([t])||"{}"!=W({a:t})||"{}"!=W(Object(t))}));c({target:"JSON",stat:!0,forced:mt},{stringify:function(t,e,r){var c,n=[t],o=1;while(arguments.length>o)n.push(arguments[o++]);if(c=e,(f(e)||void 0!==t)&&!p(t))return l(e)||(e=function(t,e){if("function"==typeof c&&(e=c.call(this,t,e)),!p(e))return e}),n[1]=e,W.apply(null,n)}})}R[A][q]||k(R[A],q,R[A].valueOf),M(R,I),B[U]=!0},ab13:function(t,e,r){var c=r("b622"),n=c("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[n]=!1,"/./"[t](e)}catch(c){}}return!1}},caad:function(t,e,r){"use strict";var c=r("23e7"),n=r("4d64").includes,o=r("44d2");c({target:"Array",proto:!0},{includes:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),o("includes")},e01a:function(t,e,r){"use strict";var c=r("23e7"),n=r("83ab"),o=r("da84"),i=r("5135"),a=r("861d"),s=r("9bf2").f,u=r("e893"),d=o.Symbol;if(n&&"function"==typeof d&&(!("description"in d.prototype)||void 0!==d().description)){var l={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof f?new d(t):void 0===t?d():d(t);return""===t&&(l[e]=!0),e};u(f,d);var p=f.prototype=d.prototype;p.constructor=f;var b=p.toString,m="Symbol(test)"==String(d("test")),h=/^Symbol\((.*)\)[^)]+$/;s(p,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,e=b.call(t);if(i(l,t))return"";var r=m?e.slice(7,-1):e.replace(h,"$1");return""===r?void 0:r}}),c({global:!0,forced:!0},{Symbol:f})}},e0c2:function(t,e,r){"use strict";e["a"]={save:function(t){var e=JSON.stringify(t);localStorage.setItem("happyfarmFavorite",e)},get:function(){return JSON.parse(localStorage.getItem("happyfarmFavorite"))}}},e538:function(t,e,r){var c=r("b622");e.f=c}}]);
//# sourceMappingURL=chunk-021db7b8.72497ddc.js.map