/**
 * Created by hongxiaoxia on 2018/6/28.
 */

//轮播图1
  var data1 = {
    bannerList:[
      "images/banner.png","images/banner.png","images/logo.png"
    ]}
var html = template("bannerUl2", data1);
document.getElementById("bannerUl").innerHTML = html;
var html = template("hdul2", data1);
document.getElementById("hdul").innerHTML = html;
jQuery(".banner").slide({mainCell:".bd ul",autoPlay:true});
for(var i=0;i<$("#bannerUl li").length;i++){
  if(i%2==0){
      $("#bannerUl li").eq(i).addClass('animated pulse');
  }else{
      $("#bannerUl li").eq(i).addClass('animated rubberBand');
  }

}
//轮播图2
var data2={
  picList:[
    {img:"images/event.jpg",txt:"黄坤明视察深圳文博会安徽展区安徽出版集团展台1"},
    {img:"images/event.jpg",txt:"黄坤明视察深圳文博会安徽展区安徽出版集团展台2"},
    {img:"images/event.jpg",txt:"黄坤明视察深圳文博会安徽展区安徽出版集团展台3"}

  ]
}
var html = template("picUl2", data2);
document.getElementById("picUl").innerHTML = html;
jQuery(".pic").slide({mainCell:".bd ul",autoPlay:true});
//    文字切换
var data3 ={
   textList : [
    [
      {content:"朱伟峰：研究开展国有文化企业资本授权经营朱伟峰：研究开展国有文化企业资本授权经营",date:"2018-04-10",isNew:true},
      {content:"朱伟峰：研究开展国有文化企业资本授权经营",date:"2018-04-10",isNew:true},
      {content:"朱伟峰：研究开展国有文化企业资本授权经营",date:"2018-04-10",isNew:true},
    ],[
      {content:"朱伟峰：研究开展国有文化企业资本授权经营",date:"2018-04-10",isNew:true},
      {content:"朱伟峰：研究开展国有文化企业资本授权经营",date:"2018-04-10",isNew:true},
      {content:"朱伟峰：研究开展国有文化企业资本授权经营",date:"2018-04-10",isNew:true}
    ],
    [
      {content:"朱伟峰：研究开展国有文化企业资本授权经营",date:"2018-04-10",isNew:true},
      {content:"朱伟峰：研究开展国有文化企业资本授权经营",date:"2018-04-10",isNew:true},
      {content:"朱伟峰：研究开展国有文化企业资本授权经营",date:"2018-04-10",isNew:true}
    ]
  ]
}
var html = template("ul12", data3);
document.getElementById("ul1").innerHTML = html;
var html = template("ul22", data3);
document.getElementById("ul2").innerHTML = html;
var html = template("ul32", data3);
document.getElementById("ul3").innerHTML = html;
jQuery(".text").slide({autoPlay:false});
//精品图书和新书推荐
$("#bookMore1").attr("href","goodbook.html");

//    jQuery(".books").slide({autoPlay:false});
//精品图书轮播
var data4={
  "data": [
  {
    "id": 12,
    "name": "精品图书",
    "list":[
      {
        "desc": "没有简介",
        "guideId": 17,
        "bookId": 1,
        "bookCover": "images/book1.png",
        "bookName": "敦煌壁画精品集1"
      },
      {
        "desc": "没有简介",
        "guideId": 18,
        "bookId": 1,
        "bookCover": "http://img1.timeface.cn/times/7e3ae36763d4cb436e92b89856df2cd2.jpg@!v176",
        "bookName": "敦煌壁画精品集1"
      },
      {
        "desc": "没有简介",
        "guideId": 19,
        "bookId": 2,
        "bookCover": "/uploads/banner/yz8lvstj.png",
        "bookName": "敦煌壁画精品集1"
      },
      {
        "desc": "没有简介",
        "guideId": 20,
        "bookId": 3,
        "bookCover": "/uploads/banner/yz8lvstj.png",
        "bookName": "敦煌壁画精品集1"
      },
      {
        "desc": "没有简介",
        "guideId": 18,
        "bookId": 1,
        "bookCover": "/uploads/banner/yz8lvstj.png",
        "bookName": "敦煌壁画精品集1"
      },
      {
        "desc": "没有简介",
        "guideId": 19,
        "bookId": 2,
        "bookCover": "/uploads/banner/yz8lvstj.png",
        "bookName": "敦煌壁画精品集1"
      },
      {
        "desc": "没有简介",
        "guideId": 20,
        "bookId": 3,
        "bookCover": "/uploads/banner/yz8lvstj.png",
        "bookName": "敦煌壁画精品集1"
      },
      {
        "desc": "没有简介",
        "guideId": 18,
        "bookId": 1,
        "bookCover": "/uploads/banner/yz8lvstj.png",
        "bookName": "敦煌壁画精品集1"
      },
      {
        "desc": "没有简介",
        "guideId": 19,
        "bookId": 2,
        "bookCover": "/uploads/banner/yz8lvstj.png",
        "bookName": "敦煌壁画精品集1"
      },
      {
        "desc": "没有简介",
        "guideId": 20,
        "bookId": 3,
        "bookCover": "/uploads/banner/yz8lvstj.png",
        "bookName": "敦煌壁画精品集1"
      },
      {
        "desc": "没有简介",
        "guideId": 18,
        "bookId": 1,
        "bookCover": "/uploads/banner/yz8lvstj.png",
        "bookName": "敦煌壁画精品集1"
      },
      {
        "desc": "没有简介",
        "guideId": 19,
        "bookId": 2,
        "bookCover": "/uploads/banner/yz8lvstj.png",
        "bookName": "敦煌壁画精品集1"
      },
    ]
  },
  {
    "id": 13,
    "name": "新书推荐",
    "list":[
      {
        "desc": "没有简介",
        "guideId": 17,
        "bookId": 1,
        "bookCover": "/uploads/banner/yz8lvstj.png",
        "bookName": "敦煌壁画精品集2"
      },
      {
        "desc": "没有简介",
        "guideId": 18,
        "bookId": 1,
        "bookCover": "/uploads/banner/yz8lvstj.png",
        "bookName": "敦煌壁画精品集2"
      },
      {
        "desc": "没有简介",
        "guideId": 19,
        "bookId": 2,
        "bookCover": "/uploads/banner/yz8lvstj.png",
        "bookName": "敦煌壁画精品集2"
      },
      {
        "desc": "没有简介",
        "guideId": 20,
        "bookId": 3,
        "bookCover": "/uploads/banner/yz8lvstj.png",
        "bookName": "敦煌壁画精品集2"
      },
      {
        "desc": "没有简介",
        "guideId": 18,
        "bookId": 1,
        "bookCover": "/uploads/banner/yz8lvstj.png",
        "bookName": "敦煌壁画精品集2"
      },
      {
        "desc": "没有简介",
        "guideId": 19,
        "bookId": 2,
        "bookCover": "/uploads/banner/yz8lvstj.png",
        "bookName": "敦煌壁画精品集2"
      },
      {
        "desc": "没有简介",
        "guideId": 20,
        "bookId": 3,
        "bookCover": "/uploads/banner/yz8lvstj.png",
        "bookName": "敦煌壁画精品集2"
      }
    ]
  },
  {
    "id": 14,
    "name": "精品期刊",
    "list": [ {
      "desc": "没有简介",
      "guideId": 17,
      "bookId": 1,
      "bookCover": "/uploads/banner/yz8lvstj.png",
      "bookName": "敦煌壁画精品集2"
    },
      {
        "desc": "没有简介",
        "guideId": 18,
        "bookId": 1,
        "bookCover": "/uploads/banner/yz8lvstj.png",
        "bookName": "敦煌壁画精品集2"
      }]
  },
  {
    "id": 15,
    "name": "数字阅读",
    "list": []
  }
],
  "code": "000"
}
var parentUl="";



for(var i=0;i<data4.data.length;i++){
  var childUl="";
  for(var j=0;j<data4.data[i].list.length;j++){
     childUl+="<li><div class='book1-list'><div class='bookBox'> <a class='bookLink'> <div class='book_cemian'></div> <div class='bookImg'>" +
         "<img src='images/book1.png' /></div> </a> </div>"+
      "<p class='book-name'>"+1111+"</p><p class='book-prize'></p></div></li>"
     //  childUl+="<li><div class='book1-list'><img src='"+data4.data[i].list[j].bookCover+"'></div></li>"

  }
   if(data4.data[i].list.length>5){
     parentUl+="<ul id='uq"+i+"' style='left:55px;'><div class='bd'><ul>"+childUl+"</ul><a class='prev' href='javascript:void(0)'></a>" +
       "<a class='next' href='javascript:void(0)'></a></div></ul>";

   }else{
     parentUl+="<ul id='uq"+i+"' style='left:55px;'><div class='bd'><ul>"+childUl+"</ul>" +
       "</div></ul>";
   }


}

document.getElementById("ulParent").innerHTML = parentUl;

var html = template("bookshd2", data4);
document.getElementById("bookshd1").innerHTML = html;
var $tab_li = $('.books .hd ul li');
$tab_li.click(function(){
  $(this).addClass("on").siblings().removeClass("on");
  var index = $tab_li.index(this);
  tabBook(index);





})

function tabBook(index){

  $("#ulParent").children("ul").css({display:'none',zIndex:0});
  $("#ulParent").children("ul").eq(index).css({display:'block',zIndex:999,position:"absolute",top:0});
  jQuery("#uq"+index).slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"left",autoPlay:true,vis:5,trigger:"click"});
}
$tab_li.eq(0).addClass("on");
tabBook(0);
jQuery("#uq0").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"left",autoPlay:true,vis:5,trigger:"click"});
// jQuery(".book2").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"left",autoPlay:false,vis:5,trigger:"click"});

//精品期刊
var data5={
  "data": [
    {
      "id": 12,
      "name": "精品图书",
      "list":[
        {
          "desc": "没有简介",
          "guideId": 18,
          "bookId": 1,
          "bookCover": "images/book1.png",
          "bookName": "敦煌壁画精品集1"
        },



      ]
    },
    {
      "id": 13,
      "name": "新书推荐",
      "list":[
        {
          "desc": "没有简介",
          "guideId": 17,
          "bookId": 1,
          "bookCover": "/uploads/banner/yz8lvstj.png",
          "bookName": "敦煌壁画精品集2"
        },
        {
          "desc": "没有简介",
          "guideId": 18,
          "bookId": 1,
          "bookCover": "/uploads/banner/yz8lvstj.png",
          "bookName": "敦煌壁画精品集2"
        },
        {
          "desc": "没有简介",
          "guideId": 19,
          "bookId": 2,
          "bookCover": "/uploads/banner/yz8lvstj.png",
          "bookName": "敦煌壁画精品集2"
        },
        {
          "desc": "没有简介",
          "guideId": 20,
          "bookId": 3,
          "bookCover": "/uploads/banner/yz8lvstj.png",
          "bookName": "敦煌壁画精品集2"
        },
        {
          "desc": "没有简介",
          "guideId": 18,
          "bookId": 1,
          "bookCover": "/uploads/banner/yz8lvstj.png",
          "bookName": "敦煌壁画精品集2"
        },
        {
          "desc": "没有简介",
          "guideId": 19,
          "bookId": 2,
          "bookCover": "/uploads/banner/yz8lvstj.png",
          "bookName": "敦煌壁画精品集2"
        },
        {
          "desc": "没有简介",
          "guideId": 20,
          "bookId": 3,
          "bookCover": "/uploads/banner/yz8lvstj.png",
          "bookName": "敦煌壁画精品集2"
        }
      ]
    },
    {
      "id": 14,
      "name": "精品期刊",
      "list": [ {
        "desc": "没有简介",
        "guideId": 17,
        "bookId": 1,
        "bookCover": "/uploads/banner/yz8lvstj.png",
        "bookName": "敦煌壁画精品集2"
      },
        {
          "desc": "没有简介",
          "guideId": 18,
          "bookId": 1,
          "bookCover": "/uploads/banner/yz8lvstj.png",
          "bookName": "敦煌壁画精品集2"
        }]
    },
    {
      "id": 15,
      "name": "数字阅读",
      "list": []
    }
  ],
  "code": "000"
}
var parentUl2="";


for(var i=0;i<data5.data.length;i++){
  var childUl2="";
  for(var j=0;j<data5.data[i].list.length;j++){
    childUl2+="<li><div class='book1-list'><div class='bookBox'> <a class='bookLink'> <div class='book_cemian'></div> <div class='bookImg'>" +

        "<img src='"+data5.data[i].list[j].bookCover+"'></div> </a> </div>"+
      "<p class='book-name'>"+data5.data[i].list[j].bookName+"</p><p class='book-prize'></p></div></li>"
  }
  if(data5.data[i].list.length>5){
    parentUl2+="<ul id='readuq"+i+"' style='left:55px;'><div class='bd'><ul>"+childUl2+"</ul><a class='prev' href='javascript:void(0)'></a>" +
      "<a class='next' href='javascript:void(0)'></a></div></ul>";

  }else{
    parentUl2+="<ul id='readuq"+i+"' style='left:55px;'><div class='bd'><ul>"+childUl2+"</ul>" +
      "</div></ul>";
  }


}

document.getElementById("ulParent2").innerHTML = parentUl2;
var html = template("readhd2", data4);
document.getElementById("readhd1").innerHTML = html;
var $tab_li2 = $('.read .hd ul li');
$tab_li2.click(function(){
  $(this).addClass("on").siblings().removeClass("on");
  var index = $tab_li2.index(this);
  tabBook2(index);





})
function tabBook2(index){

  $("#ulParent2").children("ul").css({opacity:0,zIndex:0});
  $("#ulParent2").children("ul").eq(index).css({opacity:1,zIndex:999,position:"absolute",top:0});
  jQuery("#readuq"+index).slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"left",autoPlay:true,vis:5,trigger:"click"});
}
$tab_li2.eq(0).addClass("on");
tabBook2(0);
jQuery("#readuq0").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"left",autoPlay:true,vis:5,trigger:"click"});
//banner4
$(window).scroll(function(){
    if($(this).scrollTop() > 1000){
        $(".banner4 .img1").addClass('animated bounceInRight');
        $(".banner4 .img2").addClass('animated bounceInLeft');
    }
});

// $(".banner4 .img1").animate({left:'0px'});
// $(".banner4 .img2").animate({right:'0px'});
//网站点击
$(".net .group").click(function(){
  $(".net .group .dropdown-menu").eq($(this).index()).toggle();
  if(!$(this).children(".dropdown-menu").is(":hidden")){
    $(this).siblings().children(".dropdown-menu").hide();
  }



});
