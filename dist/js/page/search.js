define(["jquery","template"],function(a,r){var o=window.localStorage,c=JSON.parse(o.getItem("searcharr"))||[];a.getJSON("/book/searchkey",function(e){var t=e.ads.concat(c);e.ads=t,r(a(".searchlist").html(),e,".searchresult"),console.log(e)}),a(".search-btn").on("click",function(){var s=a.trim(a(".header-left").val());console.log(s),a.ajax({url:"/book/searchsousuo",data:{title:s},dataType:"json",success:function(e){var t=e.items.filter(function(e,t){return new RegExp(s,"g").test(e.title)});t.length&&(c.push({ad_name:s}),o.setItem("searcharr",JSON.stringify(c))),a(".searchresult").html(""),r(a(".searchlist-two").html(),{items:t},".searchresult"),console.log({items:t})}})})});