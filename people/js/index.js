/**
 * Created by hongxiaoxia on 2018/7/9.
 */
//轮播图1
var data1 = {
  bannerList:[
    "images/banner.jpg","images/banner2.png"
  ]}
var html = template("bannerUl2", data1);
document.getElementById("bannerUl").innerHTML = html;
var html = template("hdul2", data1);
document.getElementById("hdul").innerHTML = html;
jQuery(".banner").slide({mainCell:".bd ul",effect:"left",autoPlay:true,delayTime:1500});
//轮播图2
var data2={
  picList:[
    "images/news.jpg","images/news.jpg","images/news.jpg","images/news.jpg"

  ]
}
var html = template("picUl2", data2);
document.getElementById("picUl").innerHTML = html;
var html = template("pichdul2", data2);
document.getElementById("pichdul1").innerHTML = html;
jQuery(".pic").slide({mainCell:".bd ul",autoPlay:true});
//新闻列表
var data3 = [
  {
    newsList: [{date:"05-25",year:"2018",title:"安徽文艺出版社斯雄新作《徽州八记》昨",desc:"5月24日下午，斯雄《徽州八记》新书发布会在安徽图书城举行。"},
               {date:"05-25",year:"2018",title:"安徽文艺出版社斯雄新作《徽州八记》昨",desc:"5月24日下午，斯雄《徽州八记》新书发布会在安徽图书城举行。"},
               {date:"05-25",year:"2018",title:"安徽文艺出版社斯雄新作《徽州八记》昨",desc:"5月24日下午，斯雄《徽州八记》新书发布会在安徽图书城举行。"},
               {date:"05-25",year:"2018",title:"安徽文艺出版社斯雄新作《徽州八记》昨",desc:"5月24日下午，斯雄《徽州八记》新书发布会在安徽图书城举行。"},
               {date:"05-25",year:"2018",title:"安徽文艺出版社斯雄新作《徽州八记》昨",desc:"5月24日下午，斯雄《徽州八记》新书发布会在安徽图书城举行。"}
    ]

  },{
    newsList: [{date:"05-26",year:"2018",title:"安徽文艺出版社斯雄新作《徽州八记》昨",desc:"5月24日下午，斯雄《徽州八记》新书发布会在安徽图书城举行。"},
      {date:"05-26",year:"2018",title:"安徽文艺出版社斯雄新作《徽州八记》昨",desc:"5月24日下午，斯雄《徽州八记》新书发布会在安徽图书城举行。"},
      {date:"05-26",year:"2018",title:"安徽文艺出版社斯雄新作《徽州八记》昨",desc:"5月24日下午，斯雄《徽州八记》新书发布会在安徽图书城举行。"}
    ]
  },
  {
    newsList: [{date:"05-27",year:"2018",title:"安徽文艺出版社斯雄新作《徽州八记》昨",desc:"5月24日下午，斯雄《徽州八记》新书发布会在安徽图书城举行。"},
      {date:"05-27",year:"2018",title:"安徽文艺出版社斯雄新作《徽州八记》昨",desc:"5月24日下午，斯雄《徽州八记》新书发布会在安徽图书城举行。"},
      {date:"05-27",year:"2018",title:"安徽文艺出版社斯雄新作《徽州八记》昨",desc:"5月24日下午，斯雄《徽州八记》新书发布会在安徽图书城举行。"}
    ]
  },
  {
    newsList: [{date:"05-28",year:"2018",title:"安徽文艺出版社斯雄新作《徽州八记》昨",desc:"5月24日下午，斯雄《徽州八记》新书发布会在安徽图书城举行。"},
      {date:"05-28",year:"2018",title:"安徽文艺出版社斯雄新作《徽州八记》昨",desc:"5月24日下午，斯雄《徽州八记》新书发布会在安徽图书城举行。"},
      {date:"05-28",year:"2018",title:"安徽文艺出版社斯雄新作《徽州八记》昨",desc:"5月24日下午，斯雄《徽州八记》新书发布会在安徽图书城举行。"}
    ]
  }



]

console.log(data3[0],'00')
var html = template("newsList2", data3[0]);
document.getElementById("newsList").innerHTML = html;

$(".news-tab ul li").click(function(){
  $(this).addClass("active").siblings().removeClass("active");
  var index = $(".news-tab ul li").index(this);
  console.log(index)
  console.log(data3[index])
  var html = template("newsList2", data3[index]);
  document.getElementById("newsList").innerHTML = html;

})
//精品图书
var data4 ={
  bookList:[
    "images/book1.jpg","images/book1.jpg","images/book1.jpg","images/book1.jpg","images/book1.jpg",
    "images/book1.jpg","images/book1.jpg","images/book1.jpg","images/book1.jpg"
  ]
}
var html = template("goodBook2", data4);
document.getElementById("goodBook").innerHTML = html;
var html = template("ebook2", data4);
document.getElementById("ebook1").innerHTML = html;
window.getWidth= function(){
    if(window.innerWidth!= undefined){
        return window.innerWidth;
    }
    else{
        var B= document.body, D= document.documentElement;
        return Math.min(D.clientWidth, B.clientWidth);
    }
}

var swidth =window.getWidth();
console.log(swidth,'swidth');
if(swidth>=1872){

  var padLeft = (swidth-312*6)/2;
    console.log(padLeft,'padLeft');
$(".picScroll-left .bd").css({paddingLeft:padLeft+"px"});
jQuery(".scroll1").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"left",autoPlay:false,vis:6,scroll:6,trigger:"click"});
}else if(1565<=swidth && swidth<1872){
    // swidth>=1560 && swidth<1872
  var padLeft = (swidth-312*5)/2;
    console.log(padLeft,'padLeft');
  $(".picScroll-left .bd").css({paddingLeft:padLeft+"px"});
  jQuery(".scroll1").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"left",autoPlay:false,vis:5,scroll:5,trigger:"click"});

}else if(1248<=swidth && swidth<1560){
    // swidth>=1248 && swidth<1560
  var padLeft = (swidth-312*4)/2;
  console.log(padLeft,'padLeft');
  $(".picScroll-left .bd").css({paddingLeft:padLeft+"px"});
  jQuery(".scroll1").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"left",autoPlay:false,vis:4,scroll:4,trigger:"click"});

}else if(swidth<1248){
  var padLeft = (swidth-312*3)/2;
  $(".picScroll-left .bd").css({paddingLeft:padLeft+"px"});
  jQuery(".scroll1").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"left",autoPlay:false,vis:3,scroll:3,trigger:"click"});

}
//党建轮播
var data5={
  picList:[
    "images/party.jpg","images/party.jpg","images/party.jpg","images/party.jpg"

  ]
}
var html = template("pic2Ul2", data5);
document.getElementById("pic2Ul").innerHTML = html;
var html = template("pic2hdul2", data5);
document.getElementById("pic2hdul1").innerHTML = html;
jQuery(".pic2").slide({mainCell:".bd ul",autoPlay:true,delayTime:1000});
//回到顶部
var backButton=$('.back_to_top');
backButton.hide();
backButton.click(function(){
  $('html,body').animate({
    scrollTop: 0
  }, 800);

})


$(window).scroll(function(){
  if($(this).scrollTop() > 100){
    backButton.fadeIn();
 }else{
    backButton.fadeOut();
 }
       });
;