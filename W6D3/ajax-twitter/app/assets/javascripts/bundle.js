!function(t){var e={};function s(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=e,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},s.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=0)}([function(t,e,s){const o=s(1),n=s(3);$(()=>{$(".follow-toggle").each(function(t,e){new o($(e))}),$(".users-search").each(function(t,e){new n($(e))})})},function(t,e,s){const o=s(2);t.exports=class{constructor(t){this.$el=t,this.userId=t.data("user-id"),this.followState=t.data("initial-follow-state"),this.handleClick=this.handleClick.bind(this),this.$el.on("click",this.handleClick),this.render()}handleClick(){let t;t=this.followState?o.unfollowUser(this.userId):o.followUser(this.userId),this.$el.prop("disabled",!0),t.then(function(){this.followState=!this.followState,this.render(),this.$el.prop("disabled",!1)}.bind(this))}render(){this.followState?this.$el.text("Unfollow!"):this.$el.text("Follow!")}}},function(t,e){const s={followUser:t=>$.ajax(`/users/${t}/follow`,{method:"post",dataType:"json"}),unfollowUser:t=>$.ajax(`/users/${t}/follow`,{method:"delete",dataType:"json"}),searchUsers:(t,e)=>{$.ajax("/users/search",{method:"get",data:{query:t},dataType:"json",success:e})}};t.exports=s},function(t,e,s){const o=s(2);t.exports=class{constructor(t){this.$el=t,this.$input=t.find("input"),this.$ul=t.find("ul"),this.users=[],this.$input.on("input",()=>this.handleInput())}render(){console.log(this),this.$ul.empty(),this.users.forEach(t=>{console.log(t.username);let e=$("<li>");e.append($("<a>").text(t.username).attr("href",`/users/${t.id}`)),this.$ul.append(e)})}handleInput(){o.searchUsers(this.$input.val(),t=>{this.users=t,this.render()})}}}]);
//# sourceMappingURL=bundle.js.map