(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b2ec8"],{"25d3":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container py-5"},[t.isLoading?n("Spinner"):[n("div",[n("h1",[t._v(t._s(t.restaurant.name))]),n("span",{staticClass:"badge badge-secondary mt-1 mb-3"},[t._v(" "+t._s(t.restaurant.categoryName)+" ")])]),n("hr"),n("ul",[n("li",[t._v("評論數： "+t._s(t.restaurant.commentsLength)+" }")]),n("li",[t._v("瀏覽次數： "+t._s(t.restaurant.viewCounts)+" }")])]),n("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(e){return t.$router.back()}}},[t._v(" 回上一頁 ")])]],2)},r=[],s=n("1da1"),i=(n("96cf"),n("b0c0"),n("c4c3")),o=n("2fa3"),u=n("2375"),c={name:"RestaurantDashboard",components:{Spinner:u["b"]},data:function(){return{restaurant:{id:-1,name:"",categoryName:"",commentsLength:0,viewCounts:0},isLoading:!0}},created:function(){var t=this.$route.params.id;this.fetchRestaurant(t)},methods:{fetchRestaurant:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,e.isLoading=!0,n.next=4,i["a"].getRestaurant({restaurantId:t});case 4:a=n.sent,r=a.data,e.restaurant={id:r.restaurant.id,name:r.restaurant.name,categoryName:r.restaurant.Category.name,commentsLength:r.restaurant.Comments.length,viewCounts:r.restaurant.viewCounts},e.isLoading=!1,n.next=15;break;case 10:n.prev=10,n.t0=n["catch"](0),console.log("error",n.t0),e.isLoading=!1,o["a"].fire({icon:"error",title:"無法取得餐廳資料，請稍後再試"});case 15:case"end":return n.stop()}}),n,null,[[0,10]])})))()}}},d=c,m=n("2877"),l=Object(m["a"])(d,a,r,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0b2ec8.c866da82.js.map