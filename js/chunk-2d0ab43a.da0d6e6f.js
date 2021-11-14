(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ab43a"],{1511:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"album py-5 bg-light"},[e.isLoading?r("Spinner"):r("div",{staticClass:"container"},[r("UserProfileCard",{attrs:{"initial-profile":e.profile,"current-user":e.currentUser,"is-followed":e.isFollowed},on:{"after-add-following":e.afterAddFollowing,"after-delete-following":e.afterDeleteFollowing}}),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-4"},[r("UserFollowingsCard",{attrs:{followings:e.followings}}),r("br"),r("UserFollowersCard",{attrs:{followers:e.followers}})],1),r("div",{staticClass:"col-md-8"},[r("UserCommentsCard",{attrs:{comments:e.comments}}),r("br"),r("UserFavoritedRestaurantsCard",{attrs:{favoritedRestaurants:e.favoritedRestaurants}})],1)])],1)],1)},a=[],i=r("1da1"),n=r("5530"),o=(r("96cf"),r("b0c0"),r("4de4"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card mb-3"},[r("div",{staticClass:"row no-gutters"},[r("div",{staticClass:"col-md-4 d-flex justify-content-center align-items-center"},[r("img",{attrs:{src:e._f("emptyImage")(e.profile.image),width:"200px",height:"200px"}})]),r("div",{staticClass:"col-md-8"},[r("div",{staticClass:"card-body"},[r("h5",{staticClass:"card-title"},[e._v(e._s(e.profile.name))]),r("p",{staticClass:"card-text"},[e._v(e._s(e.profile.email))]),r("ul",{staticClass:"list-unstyled list-inline"},[r("li",[r("strong",[e._v(e._s(e.profile.commentsLength))]),e._v(" 已評論餐廳")]),r("li",[r("strong",[e._v(e._s(e.profile.favoritedRestaurantsLength))]),e._v(" 收藏的餐廳")]),r("li",[r("strong",[e._v(e._s(e.profile.followingsLength))]),e._v(" followings (追蹤者)")]),r("li",[r("strong",[e._v(e._s(e.profile.followersLength))]),e._v(" followers (追隨者)")])]),r("p",[e.profile.id===e.currentUser.id?[r("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"user-edit",params:{id:e.profile.id}}}},[e._v(" Edit ")])]:[e.isFollowed?r("button",{staticClass:"btn btn-danger",attrs:{type:"submit"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.deleteFollowing(e.profile.id)}}},[e._v(" 取消追蹤 ")]):r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.addFollowing(e.profile.id)}}},[e._v(" 追蹤 ")])]],2)])])])])}),l=[],c=r("2708"),d=r("4cce"),u=r("2fa3"),f={name:"UserProfileCard",mixins:[c["a"]],props:{initialProfile:{type:Object,reqiured:!0},currentUser:{type:Object,required:!0},isFollowed:{type:Boolean,required:!0}},data:function(){return{profile:this.initialProfile}},methods:{addFollowing:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var s,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,d["a"].addFollowing({userId:e});case 3:if(s=r.sent,a=s.data,"success"===a.status){r.next=7;break}throw new Error(a.message);case 7:t.$emit("after-add-following"),r.next=14;break;case 10:r.prev=10,r.t0=r["catch"](0),console.log("error",r.t0),u["a"].fire({icon:"error",title:"無法加入追蹤，請稍後再試"});case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))()},deleteFollowing:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var s,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,d["a"].deleteFollowing({userId:e});case 3:if(s=r.sent,a=s.data,"success"===a.status){r.next=7;break}throw new Error(a.message);case 7:t.$emit("after-delete-following"),r.next=13;break;case 10:r.prev=10,r.t0=r["catch"](0),u["a"].fire({icon:"error",title:"無法取消追蹤，請稍後再試"});case 13:case"end":return r.stop()}}),r,null,[[0,10]])})))()}}},m=f,g=r("2877"),p=Object(g["a"])(m,o,l,!1,null,null,null),v=p.exports,w=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[r("strong",[e._v(e._s(e.followings.length))]),e._v(" followings (追蹤者)")]),r("div",{staticClass:"card-body"},e._l(e.followings,(function(t){return r("router-link",{key:t.id,attrs:{to:{name:"user",params:{id:t.id}}}},[r("img",{staticClass:"avatar",attrs:{src:e._f("emptyImage")(t.image),width:"60",height:"60"}})])})),1)])},h=[],_={name:"UserFollowingsCard",mixins:[c["a"]],props:{followings:{type:Array,required:!0}}},C=_,b=Object(g["a"])(C,w,h,!1,null,null,null),y=b.exports,F=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[r("strong",[e._v(e._s(e.followers.length))]),e._v(" followers (追隨者)")]),r("div",{staticClass:"card-body"},e._l(e.followers,(function(t){return r("router-link",{key:t.id,attrs:{to:{name:"user",params:{id:t.id}}}},[r("img",{staticClass:"avatar",attrs:{src:e._f("emptyImage")(t.image),width:"60",height:"60"}})])})),1)])},x=[],U={name:"UserFollowersCard",mixins:[c["a"]],props:{followers:{type:Array,required:!0}}},R=U,k=Object(g["a"])(R,F,x,!1,null,null,null),L=k.exports,j=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[r("strong",[e._v(e._s(e.comments.length))]),e._v(" 已評論餐廳")]),r("div",{staticClass:"card-body"},e._l(e.comments,(function(t){return r("router-link",{key:t.id,attrs:{to:{name:"restaurant",params:{id:t.Restaurant.id}}}},[r("img",{staticClass:"avatar",attrs:{src:e._f("emptyImage")(t.Restaurant.image),width:"60",height:"60"}})])})),1)])},O=[],E={name:"UserCommentsCard",mixins:[c["a"]],props:{comments:{type:Array,required:!0}}},$=E,I=Object(g["a"])($,j,O,!1,null,null,null),q=I.exports,P=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[r("strong",[e._v(e._s(e.favoritedRestaurants.length))]),e._v(" 收藏的餐廳")]),r("div",{staticClass:"card-body"},e._l(e.favoritedRestaurants,(function(t){return r("router-link",{key:t.id,attrs:{to:{name:"restaurant",params:{id:t.id}}}},[r("img",{staticClass:"avatar",attrs:{src:e._f("emptyImage")(t.image),width:"60",height:"60"}})])})),1)])},A=[],D={mixins:[c["a"]],props:{favoritedRestaurants:{type:Array,required:!0}}},J=D,S=Object(g["a"])(J,P,A,!1,null,null,null),B=S.exports,z=r("2375"),G=r("2f62"),H={name:"User",components:{UserProfileCard:v,UserFollowingsCard:y,UserFollowersCard:L,UserCommentsCard:q,UserFavoritedRestaurantsCard:B,Spinner:z["b"]},data:function(){return{profile:{id:-1,image:"",name:"",email:"",commentsLength:0,favoritedRestaurantsLength:0,followersLength:0,followingsLength:0},isFollowed:!1,followings:[],followers:[],comments:[],favoritedRestaurants:[],isLoading:!0}},computed:Object(n["a"])({},Object(G["b"])(["currentUser"])),created:function(){var e=this.$route.params.id;this.fetchUser(e)},beforeRouteUpdate:function(e,t,r){var s=e.params.id;this.fetchUser(s),r()},methods:{fetchUser:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var s,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,t.isLoading=!0,r.next=4,d["a"].get({userId:e});case 4:s=r.sent,a=s.data,t.profile={id:a.profile.id,name:a.profile.name,email:a.profile.email,image:a.profile.image,commentsLength:a.profile.Comments.length,favoritedRestaurantsLength:a.profile.FavoritedRestaurants.length,followersLength:a.profile.Followers.length,follwingsLength:a.profile.Followings.length},t.isFollowed=a.isFollowed,t.followings=a.profile.Followings,t.followers=a.profile.Followers,t.favoritedRestaurants=a.profile.FavoritedRestaurants,t.comments=a.profile.Comments.filter((function(e){return e.Restaurant})),t.isLoading=!1,r.next=19;break;case 15:r.prev=15,r.t0=r["catch"](0),t.isLoading=!1,u["a"].fire({icon:"error",title:"無法取得使用者資料，請稍後再試"});case 19:case"end":return r.stop()}}),r,null,[[0,15]])})))()},afterAddFollowing:function(){this.isFollowed=!0,this.profile.followersLength+=1,this.followers.push({id:this.currentUser.id,image:this.currentUser.image})},afterDeleteFollowing:function(){var e=this;this.isFollowed=!1,this.profile.followersLength-=1,this.followers=this.followers.filter((function(t){return t.id!==e.currentUser.id}))}}},K=H,M=Object(g["a"])(K,s,a,!1,null,null,null);t["default"]=M.exports}}]);
//# sourceMappingURL=chunk-2d0ab43a.da0d6e6f.js.map