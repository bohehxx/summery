/**
 * Created by hongxiaoxia on 2018/7/11.
 */
//导航二级类目显示隐藏
$(".header-nav ul li").mouseenter(function(){


  $(this).children(".drop-menu").show();
})
$(".header-nav ul li").mouseleave(function(){
    $(this).children(".drop-menu").hide();
})
//搜索
$("#search").click(function(){
  $(".search-dialog").show();

})
$("#searchImg").click(function(){
  var searchVal =$("#searchName").val();
  alert(searchVal);


})
$(document).bind("click",function(e){
    console.log(e.target.id,'id');
   if(e.target.id.indexOf("search")<0){
       $(".search-dialog").hide();
   }


});


//截取url数据方法
function getQueryString(name) {
  // var param = getQueryString(param) 即可获取到参数值
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return '';
}

if(location.href.indexOf("tab")){

  var index = getQueryString("tab");
  tab(index);


}


//tab切换
var $tabLi = $(".sidebar ul li")
$tabLi.click(function(){
  $(this).addClass("active").siblings().removeClass("active");
  var index = $tabLi.index(this);
  tab(index);

})
function tab(index) {
    $(".detail").children("div").eq(index).show().siblings().hide();
    $(".sidebar ul li").eq(index).addClass("active").siblings().removeClass("active");
    if ((/aboutus/).test(location.pathname)) {
        if (index == 0) {
            $(".chineseName").html("公司简介");
            $(".englishName").html("Company profile");
        } else if (index == 1) {
            console.log(111)
            $(".chineseName").html("组织架构");
            $(".englishName").html("Organizational structure");
        } else if (index == 2) {
            $(".chineseName").html("企业荣誉");
            $(".englishName").html("Corporate honor");
        } else {
            $(".chineseName").html("联系我们");
            $(".englishName").html("Contact Us ");
        }


    }
    if ((/news/).test(location.pathname)) {
        if (index == 0) {
            $(".chineseName").html("公司动态");
            $(".englishName").html("Corporate dynamics");
        } else if (index == 1) {
            $(".chineseName").html("媒体报道");
            $(".englishName").html("Media coverage");
        } else if (index == 2) {
            $(".chineseName").html("本社动态");
            $(".englishName").html("The news of our society");
        } else {
            $(".chineseName").html("通知公告");
            $(".englishName").html("Notice and Announcement");
        }
    }
        if ((/party/).test(location.pathname)) {
            if (index == 0) {
                $(".chineseName").html("党建动态");
                $(".englishName").html("Party Construction Dynamics");
            } else if (index == 1) {
                $(".chineseName").html("组织生活");
                $(".englishName").html("Organizational life");
            } else if (index == 2) {
                $(".chineseName").html("学习教育");
                $(".englishName").html("Learning education");
            }

        }

    if ((/book/).test(location.pathname)) {
        if (index == 0) {
            $(".chineseName").html("精品书籍");
            $(".englishName").html("Fine books");
        } else if (index == 1) {
            $(".chineseName").html("新书上架");
            $(".englishName").html("New book on the shelf");
        } else if (index == 2) {
            $(".chineseName").html("畅销书籍");
            $(".englishName").html("Bestseller");
        } else {
            $(".chineseName").html("书单目录");
            $(".englishName").html("List of books");
        }
    }


}