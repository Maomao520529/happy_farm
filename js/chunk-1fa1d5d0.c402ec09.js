(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1fa1d5d0"],{a434:function(e,t,c){"use strict";var o=c("23e7"),l=c("23cb"),a=c("a691"),n=c("50c4"),r=c("7b0b"),i=c("65f0"),d=c("8418"),s=c("1dde"),u=s("splice"),m=Math.max,p=Math.min,b=9007199254740991,f="Maximum allowed length exceeded";o({target:"Array",proto:!0,forced:!u},{splice:function(e,t){var c,o,s,u,j,O,h=r(this),g=n(h.length),v=l(e,g),V=arguments.length;if(0===V?c=o=0:1===V?(c=0,o=g-v):(c=V-2,o=p(m(a(t),0),g-v)),g+c-o>b)throw TypeError(f);for(s=i(h,o),u=0;u<o;u++)j=v+u,j in h&&d(s,u,h[j]);if(s.length=o,c<o){for(u=v;u<g-o;u++)j=u+o,O=u+c,j in h?h[O]=h[j]:delete h[O];for(u=g;u>g-o+c;u--)delete h[u-1]}else if(c>o)for(u=g-o;u>v;u--)j=u+o-1,O=u+c-1,j in h?h[O]=h[j]:delete h[O];for(u=0;u<c;u++)h[u+v]=arguments[u+2];return h.length=g-o+c,s}})},a617:function(e,t,c){"use strict";c.r(t);var o=c("7a23"),l={class:"text-end"},a={class:"table mt-4"},n=Object(o["createElementVNode"])("thead",null,[Object(o["createElementVNode"])("tr",null,[Object(o["createElementVNode"])("th",{width:"120"},"分類"),Object(o["createElementVNode"])("th",null,"產品名稱"),Object(o["createElementVNode"])("th",{width:"120"},"原價"),Object(o["createElementVNode"])("th",{width:"120"},"售價"),Object(o["createElementVNode"])("th",{width:"100"},"是否啟用"),Object(o["createElementVNode"])("th",{width:"200"},"編輯")])],-1),r={class:"text-right"},i={class:"text-right"},d={key:0,class:"text-success"},s={key:1,class:"text-muted"},u={class:"btn-group"},m=["onClick"],p=["onClick"];function b(e,t,c,b,f,j){var O=Object(o["resolveComponent"])("Loading"),h=Object(o["resolveComponent"])("Pagination"),g=Object(o["resolveComponent"])("ProductModal"),v=Object(o["resolveComponent"])("DelModal");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["createVNode"])(O,{active:f.isLoading},null,8,["active"]),Object(o["createElementVNode"])("div",l,[Object(o["createElementVNode"])("div",{class:"button btn btn-primary",type:"button",onClick:t[0]||(t[0]=function(e){return j.openModal(!0)})}," 增加一個產品 ")]),Object(o["createElementVNode"])("table",a,[n,Object(o["createElementVNode"])("tbody",null,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(f.products,(function(t){return Object(o["openBlock"])(),Object(o["createElementBlock"])("tr",{key:t.id},[Object(o["createElementVNode"])("td",null,Object(o["toDisplayString"])(t.category),1),Object(o["createElementVNode"])("td",null,Object(o["toDisplayString"])(t.title),1),Object(o["createElementVNode"])("td",r,Object(o["toDisplayString"])(e.$filters.currency(t.origin_price)),1),Object(o["createElementVNode"])("td",i,Object(o["toDisplayString"])(e.$filters.currency(t.price)),1),Object(o["createElementVNode"])("td",null,[t.is_enabled?(Object(o["openBlock"])(),Object(o["createElementBlock"])("span",d,"啟用")):(Object(o["openBlock"])(),Object(o["createElementBlock"])("span",s,"未啟用"))]),Object(o["createElementVNode"])("td",null,[Object(o["createElementVNode"])("div",u,[Object(o["createElementVNode"])("button",{class:"btn btn-outline-primary btn-sm",onClick:function(e){return j.openModal(!1,t)}},"編輯",8,m),Object(o["createElementVNode"])("button",{class:"btn btn-outline-danger btn-sm",onClick:function(e){return j.openDelProductModal(t)}},"刪除",8,p)])])])})),128))])]),Object(o["createVNode"])(h,{pages:f.pagination,onEmitPages:j.getProducts},null,8,["pages","onEmitPages"]),Object(o["createVNode"])(g,{ref:"productModal",product:f.tempProduct,onUpdateProduct:j.updateProduct},null,8,["product","onUpdateProduct"]),Object(o["createVNode"])(v,{item:f.tempProduct,ref:"delModal",onDelItem:j.delProduct},null,8,["item","onDelItem"])],64)}var f=c("5530"),j=(c("99af"),c("a434"),c("a4d3"),c("e01a"),{class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"}),O={class:"modal-dialog modal-xl",role:"document"},h={class:"modal-content border-0"},g=Object(o["createElementVNode"])("div",{class:"modal-header bg-dark text-white"},[Object(o["createElementVNode"])("h5",{class:"modal-title",id:"exampleModalLabel"},[Object(o["createElementVNode"])("span",null,"新增產品")]),Object(o["createElementVNode"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),v={class:"modal-body"},V={class:"row"},E={class:"col-sm-4"},N={class:"mb-3"},P=Object(o["createElementVNode"])("label",{for:"image",class:"form-label"},"輸入圖片網址",-1),y={class:"mb-3"},k=Object(o["createElementVNode"])("label",{for:"customFile",class:"form-label"},[Object(o["createTextVNode"])("或 上傳圖片 "),Object(o["createElementVNode"])("i",{class:"fas fa-spinner fa-spin"})],-1),x=["src"],w=["src"],M={key:0,class:"mt-5"},B=["onUpdate:modelValue"],C=["onClick"],D={key:0},U={class:"col-sm-8"},$={class:"mb-3"},_=Object(o["createElementVNode"])("label",{for:"title",class:"form-label"},"標題",-1),F={class:"row gx-2"},S={class:"mb-3 col-md-6"},L=Object(o["createElementVNode"])("label",{for:"category",class:"form-label"},"分類",-1),T={class:"mb-3 col-md-6"},I=Object(o["createElementVNode"])("label",{for:"price",class:"form-label"},"單位",-1),z={class:"row gx-2"},J={class:"mb-3 col-md-6"},A=Object(o["createElementVNode"])("label",{for:"origin_price",class:"form-label"},"原價",-1),q={class:"mb-3 col-md-6"},G=Object(o["createElementVNode"])("label",{for:"price",class:"form-label"},"售價",-1),H=Object(o["createElementVNode"])("hr",null,null,-1),K={class:"mb-3"},Q=Object(o["createElementVNode"])("label",{for:"description",class:"form-label"},"產品描述",-1),R={class:"mb-3"},W=Object(o["createElementVNode"])("label",{for:"content",class:"form-label"},"說明內容",-1),X={class:"mb-3"},Y={class:"form-check"},Z=Object(o["createElementVNode"])("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),ee={class:"modal-footer"},te=Object(o["createElementVNode"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消 ",-1);function ce(e,t,c,l,a,n){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",j,[Object(o["createElementVNode"])("div",O,[Object(o["createElementVNode"])("div",h,[g,Object(o["createElementVNode"])("div",v,[Object(o["createElementVNode"])("div",V,[Object(o["createElementVNode"])("div",E,[Object(o["createElementVNode"])("div",N,[P,Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"text",class:"form-control",id:"image","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.tempProduct.imageUrl=e}),placeholder:"請輸入圖片連結"},null,512),[[o["vModelText"],a.tempProduct.imageUrl]])]),Object(o["createElementVNode"])("div",y,[k,Object(o["createElementVNode"])("input",{type:"file",id:"customFile",class:"form-control",ref:"fileInput",onChange:t[1]||(t[1]=function(){return n.uploadFile&&n.uploadFile.apply(n,arguments)})},null,544),Object(o["createElementVNode"])("input",{type:"file",id:"customFile2",class:"form-control",ref:"fileInput2",onChange:t[2]||(t[2]=function(){return n.uploadFile2&&n.uploadFile2.apply(n,arguments)})},null,544)]),Object(o["createElementVNode"])("img",{class:"img-fluid",src:a.tempProduct.imageUrl,alt:""},null,8,x),Object(o["createElementVNode"])("img",{class:"img-fluid",src:a.tempProduct.imageUrl2,alt:""},null,8,w),a.tempProduct.images?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",M,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(a.tempProduct.images,(function(e,t){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{class:"mb-3 input-group",key:t},[Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"url",class:"form-control form-control","onUpdate:modelValue":function(e){return a.tempProduct.images[t]=e},placeholder:"請輸入連結"},null,8,B),[[o["vModelText"],a.tempProduct.images[t]]]),Object(o["createElementVNode"])("button",{type:"button",class:"btn btn-outline-danger",onClick:function(e){return a.tempProduct.images.splice(t,1)}}," 移除 ",8,C)])})),128)),a.tempProduct.images[a.tempProduct.images.length-1]||!a.tempProduct.images.length?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",D,[Object(o["createElementVNode"])("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:t[3]||(t[3]=function(e){return a.tempProduct.images.push("")})}," 新增圖片 ")])):Object(o["createCommentVNode"])("",!0)])):Object(o["createCommentVNode"])("",!0)]),Object(o["createElementVNode"])("div",U,[Object(o["createElementVNode"])("div",$,[_,Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":t[4]||(t[4]=function(e){return a.tempProduct.title=e}),placeholder:"請輸入標題"},null,512),[[o["vModelText"],a.tempProduct.title]])]),Object(o["createElementVNode"])("div",F,[Object(o["createElementVNode"])("div",S,[L,Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"text",class:"form-control",id:"category","onUpdate:modelValue":t[5]||(t[5]=function(e){return a.tempProduct.category=e}),placeholder:"請輸入分類"},null,512),[[o["vModelText"],a.tempProduct.category]])]),Object(o["createElementVNode"])("div",T,[I,Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"text",class:"form-control",id:"unit","onUpdate:modelValue":t[6]||(t[6]=function(e){return a.tempProduct.unit=e}),placeholder:"請輸入單位"},null,512),[[o["vModelText"],a.tempProduct.unit]])])]),Object(o["createElementVNode"])("div",z,[Object(o["createElementVNode"])("div",J,[A,Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"number",class:"form-control",id:"origin_price","onUpdate:modelValue":t[7]||(t[7]=function(e){return a.tempProduct.origin_price=e}),placeholder:"請輸入原價"},null,512),[[o["vModelText"],a.tempProduct.origin_price,void 0,{number:!0}]])]),Object(o["createElementVNode"])("div",q,[G,Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"number",class:"form-control",id:"price","onUpdate:modelValue":t[8]||(t[8]=function(e){return a.tempProduct.price=e}),placeholder:"請輸入售價"},null,512),[[o["vModelText"],a.tempProduct.price,void 0,{number:!0}]])])]),H,Object(o["createElementVNode"])("div",K,[Q,Object(o["withDirectives"])(Object(o["createElementVNode"])("textarea",{type:"text",class:"form-control",id:"description","onUpdate:modelValue":t[9]||(t[9]=function(e){return a.tempProduct.description=e}),placeholder:"請輸入產品描述"},null,512),[[o["vModelText"],a.tempProduct.description]])]),Object(o["createElementVNode"])("div",R,[W,Object(o["withDirectives"])(Object(o["createElementVNode"])("textarea",{type:"text",class:"form-control",id:"content","onUpdate:modelValue":t[10]||(t[10]=function(e){return a.tempProduct.content=e}),placeholder:"請輸入產品說明內容"},null,512),[[o["vModelText"],a.tempProduct.content]])]),Object(o["createElementVNode"])("div",X,[Object(o["createElementVNode"])("div",Y,[Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":t[11]||(t[11]=function(e){return a.tempProduct.is_enabled=e}),"true-value":1,"false-value":0,id:"is_enabled"},null,512),[[o["vModelCheckbox"],a.tempProduct.is_enabled]]),Z])])])])]),Object(o["createElementVNode"])("div",ee,[te,Object(o["createElementVNode"])("button",{type:"button",class:"btn btn-primary",onClick:t[12]||(t[12]=function(t){return e.$emit("update-product",a.tempProduct)})}," 確認 ")])])])],512)}var oe=c("e0ae"),le={props:{product:{type:Object,default:function(){return{}}}},watch:{product:function(){this.tempProduct=this.product,this.tempProduct.images||(this.tempProduct.images=[])}},data:function(){return{modal:{},tempProduct:{}}},methods:{uploadFile:function(){var e=this,t=this.$refs.fileInput.files[0],c=new FormData;c.append("file-to-upload",t);var o="".concat("https://vue3-course-api.hexschool.io/","api/").concat("yenying-api","/admin/upload");this.$http.post(o,c).then((function(t){console.log(t.data),t.data.success&&(e.tempProduct.imageUrl=t.data.imageUrl)}))},uploadFile2:function(){var e=this,t=this.$refs.fileInput2.files[0],c=new FormData;c.append("file-to-upload",t);var o="".concat("https://vue3-course-api.hexschool.io/","api/").concat("yenying-api","/admin/upload");this.$http.post(o,c).then((function(t){console.log(t.data),t.data.success&&(e.tempProduct.imageUrl2=t.data.imageUrl)}))}},mixins:[oe["a"]]},ae=c("d959"),ne=c.n(ae);const re=ne()(le,[["render",ce]]);var ie=re,de=c("e855"),se=c("4186"),ue={data:function(){return{products:[],pagination:{},tempProduct:{},isNew:!1,isLoading:!1}},components:{ProductModal:ie,DelModal:se["a"],Pagination:de["a"]},inject:["emitter"],methods:{getProducts:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.currentPage=t;var c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("yenying-api","/admin/products/?page=").concat(t);this.isLoading=!0,this.$http.get(c).then((function(t){e.isLoading=!1,t.data.success&&(console.log(t.data),e.products=t.data.products,e.pagination=t.data.pagination)}))},openModal:function(e,t){this.tempProduct=e?{}:Object(f["a"])({},t),this.isNew=e;var c=this.$refs.productModal;c.showModal()},updateProduct:function(e){var t=this;this.tempProduct=e;var c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("yenying-api","/admin/product"),o="post",l="新增產品";this.isNew||(c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("yenying-api","/admin/product/").concat(e.id),o="put",l="更新產品");var a=this.$refs.productModal;this.$http[o](c,{data:this.tempProduct}).then((function(e){console.log(e),t.$httpMessageState(e,l),a.hideModal(),t.getProducts(t.currentPage)}))},openDelProductModal:function(e){this.tempProduct=Object(f["a"])({},e);var t=this.$refs.delModal;t.showModal()},delProduct:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("yenying-api","/admin/product/").concat(this.tempProduct.id);this.isLoading=!0,this.$http.delete(t).then((function(t){console.log(t.data);var c=e.$refs.delModal;c.hideModal(),e.getProducts(e.currentPage),t.data.success&&(e.isLoading=!1,e.getProducts(),e.emitter.emit("push-message",{style:"danger",title:"刪除產品資訊"}))}))}},created:function(){this.getProducts()}};const me=ne()(ue,[["render",b]]);t["default"]=me},e01a:function(e,t,c){"use strict";var o=c("23e7"),l=c("83ab"),a=c("da84"),n=c("5135"),r=c("861d"),i=c("9bf2").f,d=c("e893"),s=a.Symbol;if(l&&"function"==typeof s&&(!("description"in s.prototype)||void 0!==s().description)){var u={},m=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof m?new s(e):void 0===e?s():s(e);return""===e&&(u[t]=!0),t};d(m,s);var p=m.prototype=s.prototype;p.constructor=m;var b=p.toString,f="Symbol(test)"==String(s("test")),j=/^Symbol\((.*)\)[^)]+$/;i(p,"description",{configurable:!0,get:function(){var e=r(this)?this.valueOf():this,t=b.call(e);if(n(u,e))return"";var c=f?t.slice(7,-1):t.replace(j,"$1");return""===c?void 0:c}}),o({global:!0,forced:!0},{Symbol:m})}},e855:function(e,t,c){"use strict";var o=c("7a23"),l={class:"pagination justify-content-center"},a=Object(o["createElementVNode"])("i",{class:"bi bi-chevron-left"},null,-1),n=[a],r=["onClick"],i=Object(o["createElementVNode"])("i",{class:"bi bi-chevron-right"},null,-1),d=[i];function s(e,t,c,a,i,s){return Object(o["openBlock"])(),Object(o["createElementBlock"])("nav",null,[Object(o["createElementVNode"])("ul",l,[Object(o["createElementVNode"])("li",{class:Object(o["normalizeClass"])(["page-item",{disabled:1===c.pages.current_page}])},[Object(o["createElementVNode"])("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:t[0]||(t[0]=Object(o["withModifiers"])((function(e){return s.updatePage(c.pages.current_page-1)}),["prevent"]))},n)],2),(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(c.pages.total_pages,(function(e){return Object(o["openBlock"])(),Object(o["createElementBlock"])("li",{class:Object(o["normalizeClass"])(["page-item",{active:e===c.pages.current_page}]),key:e},[Object(o["createElementVNode"])("a",{class:"page-link",href:"#",onClick:Object(o["withModifiers"])((function(t){return s.updatePage(e)}),["prevent"])},Object(o["toDisplayString"])(e),9,r)],2)})),128)),Object(o["createElementVNode"])("li",{class:Object(o["normalizeClass"])(["page-item",{disabled:c.pages.current_page===c.pages.total_pages}])},[Object(o["createElementVNode"])("a",{class:"page-link",href:"#","aria-label":"Next",onClick:t[1]||(t[1]=Object(o["withModifiers"])((function(e){return s.updatePage(c.pages.current_page+1)}),["prevent"]))},d)],2)])])}var u={props:["pages"],methods:{updatePage:function(e){this.$emit("emit-pages",e)}}},m=c("d959"),p=c.n(m);const b=p()(u,[["render",s]]);t["a"]=b}}]);
//# sourceMappingURL=chunk-1fa1d5d0.c402ec09.js.map