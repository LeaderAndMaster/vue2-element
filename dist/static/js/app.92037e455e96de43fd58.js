webpackJsonp([2,0],[function(t,s,e){(function(t){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}var a=e(6),i=s(a),n=e(189),r=s(n),l=e(208),o=s(l),c=e(192),u=s(c),d=e(194),v=s(d),f=e(195),p=s(f),_=e(188),h=s(_),C=e(184),m=(s(C),e(210)),j=s(m);i.default.use(h.default),i.default.use(o.default),i.default.use(j.default);var g=new j.default.Store({state:{count:0},addCartEl:{},mutations:{increment:function(t){t.count++}}}),w=new o.default({routes:[{path:"/goods",component:u.default},{path:"/ratings",component:v.default},{path:"/seller",component:p.default}],linkActiveClass:"active"});console.log(t),new i.default({router:w,store:g,template:"<App/>",components:{App:r.default},data:{eventHub:new i.default}}).$mount("#app"),w.push("goods")}).call(s,e(8))},,,,,,,,,function(t,s,e){e(182);var a=e(3)(e(164),e(206),null,null);t.exports=a.exports},function(t,s,e){e(181);var a=e(3)(e(172),e(205),null,null);t.exports=a.exports},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,s,e){e(176);var a=e(3)(e(168),e(200),"data-v-5a232ec2",null);t.exports=a.exports},,,,,,,,,,,,,,,,,,function(t,s,e){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var i=e(6),n=a(i),r=e(1),l=a(r);n.default.filter("time",function(t,s){return s=s||"YYYY-MM-DD HH:mm",(0,l.default)(t).format(s)})},function(t,s,e){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(s,"__esModule",{value:!0});var i=e(193),n=a(i),r=e(5),l=a(r);s.default={data:function(){return{seller:{}}},created:function(){var t=this;l.default.get("static/data.json").then(function(s){t.seller=s.data.seller})},components:{"v-header":n.default}}},function(t,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={props:{isShow:Boolean}}},function(t,s,e){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(s,"__esModule",{value:!0});var i=e(6),n=a(i);s.default={props:{food:Object},methods:{addCart:function(t){this.count++,t._constructed&&(this.food.count||n.default.set(this.food,"count",0),this.food.count++,this.$store.addCartEl=t.target,this.$root.eventHub.$emit("cart.add",t.target))},decreaseCart:function(){event._constructed&&this.food.count&&this.food.count--}}}},function(t,s,e){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(s,"__esModule",{value:!0}),e(161);var i=e(4),n=a(i),r=e(9),l=a(r);s.default={components:{cartcontrol:l.default},props:{food:Object},data:function(){return{showDetail:!1,classifyArr:[{name:"全部",count:this.food.ratings.length,active:!0},{name:"推荐",count:this.food.ratings.filter(function(t){return 0===t.rateType}).length,active:!1},{name:"吐槽",count:this.food.ratings.filter(function(t){return t.rateType}).length,active:!1}],evelflag:!0}},computed:{evelArr:function(){var t=this,s=0;return this.classifyArr.forEach(function(t,e){t.active&&(s=e)}),this.detailWrapper&&this.$nextTick(function(){t.detailWrapper.refresh()}),s?this.food.ratings.filter(function(e){return t.evelflag?e.rateType===s-1&&e.text:e.rateType===s-1}):this.food.ratings.filter(function(s){return!t.evelflag||s.text})}},methods:{showToggle:function(){var t=this;this.showDetail=!this.showDetail,this.showDetail&&this.$nextTick(function(){t._initScroll()})},_initScroll:function(){this.detailWrapper=new n.default(this.$refs.detailWrapper,{click:!0})},addCart:function(t){t._constructed&&(this.$set(this.food,"count",1),this.$root.eventHub.$emit("cart.add",t.target))},filterEvel:function(t){this.classifyArr.forEach(function(t){t.active=!1}),t.active=!0}}}},function(t,s,e){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(s,"__esModule",{value:!0});var i=e(143),n=a(i),r=e(4),l=a(r),o=e(196),c=a(o),u=e(9),d=a(u),v=e(191),f=a(v),p=e(5),_=a(p),h=e(6),C=a(h);new C.default;s.default={props:{seller:Object},created:function(){var t=this;_.default.get("static/data.json").then(function(s){t.goods=s.data.goods,t.$nextTick(function(){t._initScroll(),t._calculateHeight()})})},data:function(){return{goods:[],listHeight:[],foodsScrollY:0,selectedFood:""}},computed:{menuCurrentIndex:function(){for(var t=0,s=this.listHeight.length;t<s;t++){var e=this.listHeight[t],a=this.listHeight[t+1];if(!a||this.foodsScrollY>=e&&this.foodsScrollY<a)return t}return 0},selectFoods:function(){var t=[];return this.goods.forEach(function(s){s.foods.forEach(function(s){s.count&&t.push(s)})}),t}},methods:{_initScroll:function(){var t=this;this.menuWrapper=new l.default(this.$refs.menuWrapper,{click:!0}),this.foodsScroll=new l.default(this.$refs.foodsWrapper,{click:!0,probeType:3}),this.foodsScroll.on("scroll",function(s){t.foodsScrollY=Math.abs(Math.round(s.y))})},_calculateHeight:function(){var t=this.$refs.foodsWrapper.querySelectorAll(".food-list-hook"),s=0;this.listHeight.push(s);for(var e=0,a=t.length;e<a;e++){var i=t[e];s+=i.clientHeight,this.listHeight.push(s)}},menuClick:function(t,s){s._constructed&&this.foodsScroll.scrollTo(0,-this.listHeight[t],300)},goDetail:function(t){var s=this;this.selectedFood=t,this.$nextTick(function(){s.$refs.myFood.showToggle()})}},components:{iconMap:n.default,shopCart:c.default,cartcontrol:d.default,foodDetail:f.default}}},function(t,s,e){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(s,"__esModule",{value:!0});var i=e(10),n=a(i);s.default={props:{seller:{type:Object}},created:function(){this.iconClassMap=["decrease","discount","special","invoice","guarantee"]},components:{star:n.default},data:function(){return{detailShow:!1}},methods:{showDetails:function(){this.detailShow=!0},hideDetail:function(){this.detailShow=!1}}}},function(t,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={props:{iconType:Number},created:function(){this.iconClassMap=["decrease","discount","special","invoice","guarantee"]}}},function(t,s,e){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(s,"__esModule",{value:!0});var i=e(5),n=a(i),r=e(10),l=a(r),o=e(4),c=a(o);s.default={components:{star:l.default},data:function(){return{ratings:[],seller:{},classifyArr:[{name:"全部",count:0,active:!0},{name:"推荐",count:0,active:!1},{name:"吐槽",count:0,active:!1}],evelflag:!0}},created:function(){this.init()},computed:{evelArr:function(){var t=this,s=0;return this.classifyArr.forEach(function(t,e){t.active&&(s=e)}),this.scroll&&this.$nextTick(function(){t.scroll.refresh()}),s?this.ratings.filter(function(e){return t.evelflag?e.rateType===s-1&&e.text:e.rateType===s-1}):this.ratings.filter(function(s){return!t.evelflag||s.text})}},methods:{init:function(){var t=this;n.default.get("static/data.json").then(function(s){t.ratings=s.data.ratings,t.seller=s.data.seller,t._initClassifyArr(),t.$nextTick(function(){t.scroll=new c.default(t.$refs.ratingsWrapper,{click:!0})})})},_initClassifyArr:function(){var t=this;this.classifyArr.forEach(function(s,e){e?s.count=t.ratings.filter(function(t){return t.rateType===e-1}).length:s.count=t.ratings.length})},filterEvel:function(t){this.classifyArr.forEach(function(t){t.active=!1}),t.active=!0}}}},function(t,s,e){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(s,"__esModule",{value:!0});var i=e(5),n=a(i),r=e(4),l=a(r),o=e(10),c=a(o),u=e(143),d=a(u);s.default={components:{star:c.default,iconMap:d.default},data:function(){return{seller:{},collectflag:!1}},created:function(){this.init()},methods:{init:function(){var t=this;n.default.get("static/data.json").then(function(s){t.seller=s.data.seller,t.$nextTick(function(){t.sellerScroll=new l.default(t.$refs.sellerWrapper,{click:!0}),t._initPicScroll()})})},_initPicScroll:function(){if(!this.picsScroll){var t=120,s=6,e=this.seller.pics.length;this.$refs.picList.style.width=t*e+s*(e-1)+"px",this.picsScroll=new l.default(this.$refs.picsWrapper,{scrollX:!0})}}}}},function(t,s,e){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(s,"__esModule",{value:!0});var i=e(9),n=a(i),r=e(190),l=a(r),o=e(4),c=a(o);s.default={props:{selectFoods:{type:Array,default:[]},deliveryPrice:{type:Number,default:0},minPrice:{type:Number,default:0}},data:function(){return{balls:[{show:!1},{show:!1},{show:!1},{show:!1},{show:!1}],dropBalls:[],listShow:!1}},created:function(){this.$root.eventHub.$on("cart.add",this.drop)},computed:{showBackdrop:function(){return!(!this.listShow||!this.totalPrice)||(this.listShow=!1,!1)},totalPrice:function(){var t=0;return this.selectFoods.forEach(function(s){s.count&&(t+=s.price*s.count)}),t},totalCount:function(){var t=0;return this.selectFoods.forEach(function(s){t+=s.count}),t},leftAmount:function(){return!!(this.minPrice-this.totalPrice>0&&totalPrice)},payDesc:function(){var t=this.minPrice-this.totalPrice;return this.totalPrice?t>0?"还差￥"+t+"元":"去结算":"￥"+this.totalPrice+"起送"}},methods:{drop:function(t){for(var s=0,e=this.balls.length;s<e;s++){var a=this.balls[s];if(!a.show)return a.show=!0,a.el=t,void this.dropBalls.push(a)}},setEmpty:function(){this.selectFoods.forEach(function(t){t.count=0})},hideBackdrop:function(){this.listShow=!1},_initScroll:function(){this.foodlistScroll=new c.default(this.$refs.foodlist,{click:!0})},listToggle:function(){var t=this;this.selectFoods.length&&(this.listShow=!this.listShow,this.listShow&&this.$nextTick(function(){t.foodlistScroll?t.foodlistScroll.refresh():t._initScroll()}))},beforeEnter:function(t){for(var s=this.balls.length;s--;){var e=this.balls[s];if(e.show){var a=e.el.getBoundingClientRect(),i=a.left-32,n=-(window.innerHeight-a.top-22);t.style.display="",t.style.webkitTransform="translate3d(0,"+n+"px,0)",t.style.transform="translate3d(0,"+n+"px,0)";var r=t.querySelector(".inner-hook");r.style.webkitTransform="translate3d("+i+"px,0,0)",r.style.transform="translate3d("+i+"px,0,0)"}}},enter:function(t){t.offsetHeight,this.$nextTick(function(){t.style.webkitTransform="translate3d(0,0,0)",t.style.transform="translate3d(0,0,0)";var s=t.querySelector(".inner-hook");s.style.webkitTransform="translate3d(0,0,0)",s.style.transform="translate3d(0,0,0)"})},afterEnter:function(t){var s=this.dropBalls.shift();s&&(s.show=!1,t.style.display="none")}},components:{cartcontrol:n.default,backdrop:l.default}}},function(t,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=5,a="on",i="half",n="off";s.default={props:{size:{type:Number},score:{type:Number}},computed:{starType:function(){return"star-"+this.size},itemClasses:function(){for(var t=[],s=Math.floor(2*this.score)/2,r=s%1!==0,l=Math.floor(s),o=0;o<l;o++)t.push(a);for(r&&t.push(i);t.length<e;)t.push(n);return t}}}},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},,function(t,s,e){function a(t){return e(i(t))}function i(t){return n[t]||function(){throw new Error("Cannot find module '"+t+"'.")}()}var n={"./af":16,"./af.js":16,"./ar":23,"./ar-dz":17,"./ar-dz.js":17,"./ar-kw":18,"./ar-kw.js":18,"./ar-ly":19,"./ar-ly.js":19,"./ar-ma":20,"./ar-ma.js":20,"./ar-sa":21,"./ar-sa.js":21,"./ar-tn":22,"./ar-tn.js":22,"./ar.js":23,"./az":24,"./az.js":24,"./be":25,"./be.js":25,"./bg":26,"./bg.js":26,"./bm":27,"./bm.js":27,"./bn":28,"./bn.js":28,"./bo":29,"./bo.js":29,"./br":30,"./br.js":30,"./bs":31,"./bs.js":31,"./ca":32,"./ca.js":32,"./cs":33,"./cs.js":33,"./cv":34,"./cv.js":34,"./cy":35,"./cy.js":35,"./da":36,"./da.js":36,"./de":39,"./de-at":37,"./de-at.js":37,"./de-ch":38,"./de-ch.js":38,"./de.js":39,"./dv":40,"./dv.js":40,"./el":41,"./el.js":41,"./en-SG":42,"./en-SG.js":42,"./en-au":43,"./en-au.js":43,"./en-ca":44,"./en-ca.js":44,"./en-gb":45,"./en-gb.js":45,"./en-ie":46,"./en-ie.js":46,"./en-il":47,"./en-il.js":47,"./en-nz":48,"./en-nz.js":48,"./eo":49,"./eo.js":49,"./es":52,"./es-do":50,"./es-do.js":50,"./es-us":51,"./es-us.js":51,"./es.js":52,"./et":53,"./et.js":53,"./eu":54,"./eu.js":54,"./fa":55,"./fa.js":55,"./fi":56,"./fi.js":56,"./fo":57,"./fo.js":57,"./fr":60,"./fr-ca":58,"./fr-ca.js":58,"./fr-ch":59,"./fr-ch.js":59,"./fr.js":60,"./fy":61,"./fy.js":61,"./ga":62,"./ga.js":62,"./gd":63,"./gd.js":63,"./gl":64,"./gl.js":64,"./gom-latn":65,"./gom-latn.js":65,"./gu":66,"./gu.js":66,"./he":67,"./he.js":67,"./hi":68,"./hi.js":68,"./hr":69,"./hr.js":69,"./hu":70,"./hu.js":70,"./hy-am":71,"./hy-am.js":71,"./id":72,"./id.js":72,"./is":73,"./is.js":73,"./it":75,"./it-ch":74,"./it-ch.js":74,"./it.js":75,"./ja":76,"./ja.js":76,"./jv":77,"./jv.js":77,"./ka":78,"./ka.js":78,"./kk":79,"./kk.js":79,"./km":80,"./km.js":80,"./kn":81,"./kn.js":81,"./ko":82,"./ko.js":82,"./ku":83,"./ku.js":83,"./ky":84,"./ky.js":84,"./lb":85,"./lb.js":85,"./lo":86,"./lo.js":86,"./lt":87,"./lt.js":87,"./lv":88,"./lv.js":88,"./me":89,"./me.js":89,"./mi":90,"./mi.js":90,"./mk":91,"./mk.js":91,"./ml":92,"./ml.js":92,"./mn":93,"./mn.js":93,"./mr":94,"./mr.js":94,"./ms":96,"./ms-my":95,"./ms-my.js":95,"./ms.js":96,"./mt":97,"./mt.js":97,"./my":98,"./my.js":98,"./nb":99,"./nb.js":99,"./ne":100,"./ne.js":100,"./nl":102,"./nl-be":101,"./nl-be.js":101,"./nl.js":102,"./nn":103,"./nn.js":103,"./pa-in":104,"./pa-in.js":104,"./pl":105,"./pl.js":105,"./pt":107,"./pt-br":106,"./pt-br.js":106,"./pt.js":107,"./ro":108,"./ro.js":108,"./ru":109,"./ru.js":109,"./sd":110,"./sd.js":110,"./se":111,"./se.js":111,"./si":112,"./si.js":112,"./sk":113,"./sk.js":113,"./sl":114,"./sl.js":114,"./sq":115,"./sq.js":115,"./sr":117,"./sr-cyrl":116,"./sr-cyrl.js":116,"./sr.js":117,"./ss":118,"./ss.js":118,"./sv":119,"./sv.js":119,"./sw":120,"./sw.js":120,"./ta":121,"./ta.js":121,"./te":122,"./te.js":122,"./tet":123,"./tet.js":123,"./tg":124,"./tg.js":124,"./th":125,"./th.js":125,"./tl-ph":126,"./tl-ph.js":126,"./tlh":127,"./tlh.js":127,"./tr":128,"./tr.js":128,"./tzl":129,"./tzl.js":129,"./tzm":131,"./tzm-latn":130,"./tzm-latn.js":130,"./tzm.js":131,"./ug-cn":132,"./ug-cn.js":132,"./uk":133,"./uk.js":133,"./ur":134,"./ur.js":134,"./uz":136,"./uz-latn":135,"./uz-latn.js":135,"./uz.js":136,"./vi":137,"./vi.js":137,"./x-pseudo":138,"./x-pseudo.js":138,"./yo":139,"./yo.js":139,"./zh-cn":140,"./zh-cn.js":140,"./zh-hk":141,"./zh-hk.js":141,"./zh-tw":142,"./zh-tw.js":142};a.keys=function(){return Object.keys(n)},a.resolve=i,t.exports=a,a.id=185},,,,function(t,s,e){e(178);var a=e(3)(e(162),e(202),null,null);t.exports=a.exports},function(t,s,e){e(180);var a=e(3)(e(163),e(204),null,null);t.exports=a.exports},function(t,s,e){e(179);var a=e(3)(e(165),e(203),"data-v-7f596712",null);t.exports=a.exports},function(t,s,e){e(175);var a=e(3)(e(166),e(199),null,null);t.exports=a.exports},function(t,s,e){e(174);var a=e(3)(e(167),e(198),null,null);t.exports=a.exports},function(t,s,e){e(177);var a=e(3)(e(169),e(201),"data-v-69c14345",null);t.exports=a.exports},function(t,s,e){e(173);var a=e(3)(e(170),e(197),"data-v-3e464677",null);t.exports=a.exports},function(t,s,e){e(183);var a=e(3)(e(171),e(207),"data-v-da57ef52",null);t.exports=a.exports},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"sellerWrapper",staticClass:"seller-wrapper"},[e("div",{staticClass:"seller-content"},[e("div",{staticClass:"info"},[e("div",{staticClass:"title"},[e("div",{staticClass:"text"},[t._v(t._s(t.seller.name))]),t._v(" "),e("div",{staticClass:"star-wrapper"},[e("star",{attrs:{size:36,score:t.seller.score}}),t._v(" "),e("span",{staticClass:"rate-count"},[t._v("("+t._s(t.seller.ratingCount)+")")]),t._v(" "),e("span",{staticClass:"sell-count"},[t._v("月售"+t._s(t.seller.sellCount)+"单")])],1),t._v(" "),e("div",{staticClass:"collect",on:{click:function(s){t.collectflag=!t.collectflag}}},[e("span",{staticClass:"icon-favorite",class:{active:t.collectflag}}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.collectflag?"已收藏":"收藏"))])])]),t._v(" "),e("div",{staticClass:"remark"},[e("div",{staticClass:"block"},[e("h2",[t._v("起送价")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"num"},[t._v(t._s(t.seller.minPrice))]),t._v("元\n          ")])]),t._v(" "),e("div",{staticClass:"block"},[e("h2",[t._v("商家配送")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"num"},[t._v(t._s(t.seller.deliveryPrice))]),t._v("元\n          ")])]),t._v(" "),e("div",{staticClass:"block"},[e("h2",[t._v("平均配送时间")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"num"},[t._v(t._s(t.seller.deliveryTime))]),t._v("分钟\n          ")])])])]),t._v(" "),e("div",{staticClass:"divider"}),t._v(" "),e("div",{staticClass:"activities"},[e("div",{staticClass:"bulletin"},[e("h1",[t._v("公告与活动")]),t._v(" "),e("div",{staticClass:"content"},[t._v("\n          "+t._s(t.seller.bulletin)+"\n        ")])])]),t._v(" "),e("div",{staticClass:"supports"},[e("ul",t._l(t.seller.supports,function(s){return e("li",{staticClass:"item"},[e("iconMap",{attrs:{iconType:s.type}}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(s.description))])],1)}),0)]),t._v(" "),e("div",{staticClass:"divider"}),t._v(" "),e("div",{staticClass:"seller-imgs"},[e("h1",[t._v("商家实景")]),t._v(" "),e("div",{ref:"picsWrapper",staticClass:"img-wrapper"},[e("div",{ref:"picList"},t._l(t.seller.pics,function(t){return e("img",{attrs:{src:t,width:"120",height:"90"}})}),0)])]),t._v(" "),e("div",{staticClass:"divider"}),t._v(" "),e("div",{staticClass:"seller-info"},[e("h1",[t._v("商家信息")]),t._v(" "),e("ul",{staticClass:"info-list"},t._l(t.seller.infos,function(s){return e("li",{staticClass:"info"},[t._v(t._s(s))])}),0)])])])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"header"},[e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:t.seller.avatar,width:"64",height:"64"}})]),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"title"},[e("span",{staticClass:"brand"}),t._v(" "),e("span",{staticClass:"name"},[t._v(t._s(t.seller.name))])]),t._v(" "),e("div",{staticClass:"description"},[t._v("\n                "+t._s(t.seller.description+" / "+t.seller.deliveryTime+"分钟送达")+"\n            ")]),t._v(" "),t.seller.supports?e("div",{staticClass:"supports"},[e("div",{staticClass:"supports_desc"},[e("span",{staticClass:"icon",class:t.iconClassMap[t.seller.supports[0].type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[0].description))])])]):t._e()]),t._v(" "),t.seller.supports?e("div",{staticClass:"support-count",on:{click:function(s){return t.showDetails()}}},[e("span",{staticClass:"count"},[t._v(t._s(t.seller.supports.length+"个"))]),t._v(" "),e("i",{staticClass:"icon-keyboard_arrow_right"})]):t._e()]),t._v(" "),e("div",{staticClass:"bulletin-wrapper",on:{click:function(s){return t.showDetails()}}},[e("span",{staticClass:"bulletin-title"}),t._v(" "),e("span",{staticClass:"bulletin-text"},[t._v(t._s(t.seller.bulletin))]),t._v(" "),e("i",{staticClass:"icon-keyboard_arrow_right"})]),t._v(" "),e("div",{staticClass:"background"},[e("img",{attrs:{src:t.seller.avatar,width:"100%",height:"100%"}})]),t._v(" "),e("transition",{attrs:{name:"fade"}},[t.detailShow?e("div",{staticClass:"detail"},[e("div",{staticClass:"detail-wrapper clearfix"},[e("div",{staticClass:"detail-main"},[e("h1",{staticClass:"name"},[t._v(t._s(t.seller.name))]),t._v(" "),e("div",{staticClass:"star-wrapper"},[e("star",{attrs:{size:48,score:t.seller.score}})],1),t._v(" "),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"text"},[t._v("优惠信息")]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),t.seller.supports?e("ul",{staticClass:"supports"},t._l(t.seller.supports,function(s){return e("li",{staticClass:"support-item"},[e("span",{staticClass:"icon",class:t.iconClassMap[s.type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(s.description))])])}),0):t._e(),t._v(" "),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"text"},[t._v("商家公告")]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),e("div",{staticClass:"bulletin"},[t._v(t._s(t.seller.bulletin))])])]),t._v(" "),e("div",{staticClass:"detail-close"},[e("i",{staticClass:"icon-close",on:{click:function(s){return t.hideDetail()}}})])]):t._e()])],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"goods"},[e("div",{ref:"menuWrapper",staticClass:"menu-wrapper"},[e("ul",t._l(t.goods,function(s,a){return e("li",{class:a==t.menuCurrentIndex?"menu-item-selected":"menu-item",on:{click:function(s){return t.menuClick(a,s)}}},[e("span",{staticClass:"text"},[e("iconMap",{directives:[{name:"show",rawName:"v-show",value:s.type>0,expression:"item.type>0"}],attrs:{iconType:s.type}}),t._v("\n          "+t._s(s.name)+"\n        ")],1)])}),0)]),t._v(" "),e("div",{ref:"foodsWrapper",staticClass:"foods-wrapper",attrs:{id:"wrapper"}},[e("ul",t._l(t.goods,function(s){return e("li",{staticClass:"food-list food-list-hook"},[e("h1",[t._v(t._s(s.name))]),t._v(" "),e("ul",t._l(s.foods,function(s){return e("li",{staticClass:"food-item",on:{click:function(e){return t.goDetail(s)}}},[e("div",{staticClass:"icon"},[e("img",{attrs:{width:"57",height:"57",src:s.icon}})]),t._v(" "),e("div",{staticClass:"content"},[e("h2",[t._v(t._s(s.name))]),t._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:s.description,expression:"food.description"}],staticClass:"description"},[t._v(t._s(s.description))]),t._v(" "),e("div",{staticClass:"sell-info"},[e("span",{staticClass:"sellCount"},[t._v("月售"+t._s(s.sellCount)+"份")]),t._v(" "),e("span",{staticClass:"rating"},[t._v("好评率"+t._s(s.rating)+"%")])]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"newPrice"},[e("span",{staticClass:"unit"},[t._v("￥")]),t._v(t._s(s.price))]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:s.oldPrice,expression:"food.oldPrice"}],staticClass:"oldPrice"},[t._v("￥"+t._s(s.oldPrice))])]),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"},[e("cartcontrol",{attrs:{food:s}})],1)])])}),0)])}),0)]),t._v(" "),e("shopCart",{attrs:{deliveryPrice:t.seller.deliveryPrice,minPrice:t.seller.minPrice,selectFoods:t.selectFoods}}),t._v(" "),t.selectedFood?e("foodDetail",{ref:"myFood",attrs:{food:t.selectedFood}}):t._e()],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"iconMap",class:t.iconClassMap[t.iconType]})},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"ratingsWrapper",staticClass:"ratingsWrapper"},[e("div",{staticClass:"ratings-content"},[e("div",{staticClass:"info"},[e("div",{staticClass:"mark"},[e("div",{staticClass:"num"},[t._v(t._s(t.seller.score))]),t._v(" "),e("div",{staticClass:"text"},[t._v("综合评分")]),t._v(" "),e("div",{staticClass:"contrast"},[t._v("高于周边商家"+t._s(t.seller.rankRate)+"%")])]),t._v(" "),e("div",{staticClass:"stars"},[e("div",{staticClass:"serviceScore"},[e("span",{staticClass:"text"},[t._v("服务态度")]),t._v(" "),e("star",{attrs:{size:36,score:t.seller.serviceScore}}),t._v(" "),e("span",{staticClass:"num"},[t._v(t._s(t.seller.serviceScore))])],1),t._v(" "),e("div",{staticClass:"foodScore"},[e("span",{staticClass:"text"},[t._v("服务态度")]),t._v(" "),e("star",{attrs:{size:36,score:t.seller.foodScore}}),t._v(" "),e("span",{staticClass:"num"},[t._v(t._s(t.seller.foodScore))])],1),t._v(" "),e("div",{staticClass:"deliveryTime"},[e("span",{staticClass:"text"},[t._v("送达时间")]),t._v(" "),e("span",{staticClass:"time"},[t._v(t._s(t.seller.deliveryTime)+"分钟")])])])]),t._v(" "),e("div",{staticClass:"divider"}),t._v(" "),e("div",{staticClass:"evaluation"},[e("div",{staticClass:"classify"},t._l(t.classifyArr,function(s,a){return e("span",{staticClass:"item",class:{active:s.active,bad:2==a,badActive:s.active&&2==a},on:{click:function(e){return t.filterEvel(s)}}},[t._v("\n          "+t._s(s.name)),e("span",{staticClass:"count"},[t._v(t._s(s.count))])])}),0),t._v(" "),e("div",{staticClass:"switch",on:{click:function(s){t.evelflag=!t.evelflag}}},[e("span",{staticClass:"icon-check_circle",class:{on:t.evelflag}}),t._v(" "),e("span",{staticClass:"text"},[t._v("只看有内容的评价")])]),t._v(" "),e("div",{staticClass:"evel-list"},[e("ul",t._l(t.evelArr,function(s){return e("li",{staticClass:"evel"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:s.avatar,width:"28",height:"28"}})]),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"user"},[e("span",{staticClass:"name"},[t._v(t._s(s.username))]),t._v(" "),e("span",{staticClass:"rateTime"},[t._v(t._s(t._f("time")(s.rateTime)))])]),t._v(" "),e("div",{staticClass:"star-wrapper"},[e("star",{attrs:{size:24,score:s.score}}),t._v(" "),e("span",{staticClass:"deliveryTime"},[t._v(t._s(s.deliveryTime)+"分钟送达")])],1),t._v(" "),e("div",{staticClass:"text"},[t._v("\n                "+t._s(s.text)+"\n              ")]),t._v(" "),e("div",{staticClass:"recommend"},[e("span",{directives:[{name:"show",rawName:"v-show",value:s.recommend.length,expression:"evel.recommend.length"}],staticClass:"icon icon-thumb_up"}),t._v(" "),t._l(s.recommend,function(s){return e("span",{staticClass:"dish"},[t._v(t._s(s))])})],2)])])}),0)])])])])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("v-header",{attrs:{seller:t.seller}}),t._v(" "),e("div",{staticClass:"tab"},[e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/goods"}},[t._v("商品")])],1),t._v(" "),e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/ratings"}},[t._v("评论")])],1),t._v(" "),e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/seller"}},[t._v("商家")])],1)]),t._v(" "),e("keep-alive",[e("router-view",{attrs:{seller:t.seller}})],1)],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"move"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showDetail,expression:"showDetail"}],ref:"detailWrapper",staticClass:"detailWrapper"},[e("div",{staticClass:"foodDetail"},[e("div",{staticClass:"back",on:{click:function(s){return t.showToggle()}}},[e("i",{staticClass:"icon-arrow_lift"})]),t._v(" "),e("img",{attrs:{src:t.food.image,height:"425",width:"100%"}}),t._v(" "),e("div",{staticClass:"info"},[e("div",{staticClass:"title"},[t._v(t._s(t.food.name))]),t._v(" "),e("div",{staticClass:"desc"},[e("span",[t._v("月售"+t._s(t.food.sellCount))]),t._v(" "),e("span",[t._v("好评率"+t._s(t.food.rating)+"%")])]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"unit"},[t._v("￥")]),t._v(t._s(t.food.price)+"\n          "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.food.oldPrice,expression:"food.oldPrice"}],staticClass:"oldPrice"},[t._v("￥"+t._s(t.food.oldPrice))])]),t._v(" "),e("div",{staticClass:"shopCart"},[e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.food.count,expression:"!food.count"}],staticClass:"text",on:{click:function(s){return t.addCart(s)}}},[t._v("加入购物车")])])],1),t._v(" "),e("cartcontrol",{attrs:{food:t.food}})],1),t._v(" "),e("div",{staticClass:"divider"}),t._v(" "),e("div",{staticClass:"desc"},[e("div",{staticClass:"title"},[t._v("商品介绍")]),t._v(" "),e("div",{staticClass:"content"},[t._v(t._s(t.food.info))])]),t._v(" "),e("div",{staticClass:"divider"}),t._v(" "),e("div",{staticClass:"evaluation"},[e("div",{staticClass:"title"},[t._v("\n          商品评价\n        ")]),t._v(" "),e("div",{staticClass:"classify"},t._l(t.classifyArr,function(s,a){return e("span",{staticClass:"item",class:{active:s.active,bad:2==a,badActive:s.active&&2==a},on:{click:function(e){return t.filterEvel(s)}}},[t._v("\n            "+t._s(s.name)),e("span",{staticClass:"count"},[t._v(t._s(s.count))])])}),0),t._v(" "),e("div",{staticClass:"switch",on:{click:function(s){t.evelflag=!t.evelflag}}},[e("span",{staticClass:"icon-check_circle",class:{on:t.evelflag}}),t._v(" "),e("span",{staticClass:"text"},[t._v("只看有内容的评价")])]),t._v(" "),e("div",{staticClass:"evel-list"},[e("ul",t._l(t.evelArr,function(s){return e("li",{staticClass:"evel"},[e("div",{staticClass:"userInfo"},[e("div",{staticClass:"time"},[t._v(t._s(t._f("time")(s.rateTime)))]),t._v(" "),e("div",{staticClass:"user"},[e("span",[t._v(t._s(s.username))]),t._v(" "),e("span",{staticClass:"avatar"},[e("img",{attrs:{src:s.avatar,width:"12",height:"12"}})])])]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"icon",class:s.rateType?"icon-thumb_down":"icon-thumb_up"}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(s.text))])])])}),0)])])])])])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"fade-backdrop"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"backdrop"})])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"star",class:t.starType},t._l(t.itemClasses,function(t){return e("span",{staticClass:"star-item",class:t,attrs:{"track-by":"$index"}})}),0)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"cartcontrol"},[e("transition",{attrs:{name:"fadeRotate"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count>0"}],staticClass:"cart-decrease",on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.decreaseCart()}}},[e("span",{staticClass:"icon-remove_circle_outline inner"})])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count>0"}],staticClass:"cart-count"},[t._v("\n    "+t._s(t.food.count)+"\n  ")]),t._v(" "),e("div",{staticClass:"cart-add",on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.addCart(s)}}},[e("i",{staticClass:"icon-add_circle"})])],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{},[e("div",{staticClass:"shopCart"},[e("div",{staticClass:"content"},[e("div",{staticClass:"content-left",on:{click:t.listToggle}},[e("div",{staticClass:"logo-wrapper"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.totalCount,expression:"totalCount"}],staticClass:"badge"},[t._v("\n          "+t._s(t.totalCount)+"\n        ")]),t._v(" "),e("div",{staticClass:"logo",class:{active:t.totalPrice}},[e("i",{staticClass:"icon-shopping_cart"})])]),t._v(" "),e("div",{staticClass:"price",class:{active:t.totalPrice}},[t._v("\n        ￥"+t._s(t.totalPrice)+"\n      ")]),t._v(" "),e("div",{staticClass:"desc"},[t._v("\n        另需要配送费￥"+t._s(t.deliveryPrice)+"元\n      ")])]),t._v(" "),e("div",{staticClass:"content-right",class:{enough:t.totalPrice>=t.minPrice}},[t._v("\n      "+t._s(t.payDesc)+"\n    ")])]),t._v(" "),e("div",{staticClass:"ball-container"},t._l(t.balls,function(s,a){return e("transition",{attrs:{name:"drop"},on:{"before-enter":t.beforeEnter,enter:t.enter,"after-enter":t.afterEnter}},[e("div",{directives:[{name:"show",rawName:"v-show",value:s.show,expression:"ball.show"}],staticClass:"ball"},[e("div",{staticClass:"inner inner-hook"})])])}),1),t._v(" "),e("transition",{attrs:{name:"transHeight"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"shopcart-list"},[e("div",{staticClass:"list-header"},[e("h1",{staticClass:"title"},[t._v("购物车")]),t._v(" "),e("span",{staticClass:"empty",on:{click:function(s){return t.setEmpty()}}},[t._v("清空")])]),t._v(" "),e("div",{ref:"foodlist",staticClass:"list-content"},[e("ul",t._l(t.selectFoods,function(s){return e("li",{staticClass:"food"},[e("span",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("div",{
staticClass:"price"},[e("span",[t._v("￥"+t._s(s.price*s.count))])]),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"},[e("cartcontrol",{attrs:{food:s}})],1)])}),0)])])])],1),t._v(" "),e("transition",{attrs:{name:"fade-backdrop"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showBackdrop,expression:"showBackdrop"}],staticClass:"backdrop",on:{click:t.hideBackdrop}})])],1)},staticRenderFns:[]}}]);
//# sourceMappingURL=app.92037e455e96de43fd58.js.map