/**
 * Created by hongxiaoxia on 2018/6/28.
 */
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
// var bannerList=[
//     "images/banner.png","images/banner.png","images/logo.png"
//   ]
// var bannerUl = document.getElementById("bannerUl");
// for(var i=0;i<bannerList.length;i++){
//   bannerUl.innerHTML +="<li><img src='" + bannerList[i] + "'></li>"
// }

jQuery(".banner").slide({mainCell:".bd ul",autoPlay:false});
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
// var picUl = document.getElementById("picUl");
// for(var i=0;i<picList.length;i++){
//   picUl.innerHTML +="<li><img src='" + picList[i].img + "'>" +"<div class='txt'>"+ picList[i].txt+"</div></li>"
// }
jQuery(".pic").slide({mainCell:".bd ul",autoPlay:true});
//    文字切换
var data3 ={
  textList : [
    [
      {content:"朱伟峰：研究开展国有文化企业资本授权经营",date:"2018-04-10",isNew:true},
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
// var ul1 = document.getElementById("ul1");
// var ul2 = document.getElementById("ul2");
// var ul3 = document.getElementById("ul3");
// for(var i=0;i<textList[0].length;i++){
//   ul1.innerHTML +="<li><span class='date'>"+textList[0][i].date+"</span><a><span class='spot'>·</span>"+textList[0][i].content+"</a> </li>"
// }
// for(var i=0;i<textList[1].length;i++){
//   ul2.innerHTML +="<li><span class='date'>"+textList[1][i].date+"</span><a><span class='spot'>·</span>"+textList[1][i].content+"</a> </li>"
// }
// for(var i=0;i<textList[2].length;i++){
//   ul3.innerHTML +="<li><span class='date'>"+textList[2][i].date+"</span><a><span class='spot'>·</span>"+textList[2][i].content+"</a> </li>"
// }
jQuery(".text").slide({autoPlay:false});
//精品图书和新书推荐
var $tab_li = $('.books .hd ul li');
$tab_li.click(function(){
  $(this).addClass("on").siblings().removeClass("on");
  var index = $tab_li.index(this);
  if(index==0){
    $("#ulBook1").show();
    document.getElementById("ulBook2").style.opacity=0;
    // $("#ulBook2").removeClass("ulBookPosition");
    document.getElementById("ulBook1").style.opacity=1;
    document.getElementById("ulBook1").style.zIndex=999;
    document.getElementById("ulBook2").style.zIndex=0;
    // $("#ulBook22").css('opacity',0);
    // $("#ulBook2").hide();
  }else{
    // $("#ulBook1").hide();
    console.log(33);
    document.getElementById("ulBook2").style.opacity=1;
    document.getElementById("ulBook2").style.zIndex=999;
    document.getElementById("ulBook1").style.zIndex=0;


    document.getElementById("ulBook1").style.opacity=0;
    // $("#ulBook22").css('opacity',1);
    // $("#ulBook2").show();
  }

})
//    jQuery(".books").slide({autoPlay:false});
//精品图书轮播
var data4= {
  book1: [
    {bookPic: "images/book1.png", bookName: "（道光）安徽通志", bookPrize: "2015年度华东优秀古籍图书奖二等奖"},
    {bookPic: "images/book1.png", bookName: "（道光）安徽通志", bookPrize: "2015年度华东优秀古籍图书奖二等奖"},
    {bookPic: "images/book1.png", bookName: "（道光）安徽通志", bookPrize: "2015年度华东优秀古籍图书奖二等奖"},
    {bookPic: "images/book1.png", bookName: "（道光）安徽通志", bookPrize: "2015年度华东优秀古籍图书奖二等奖"},
    {bookPic: "images/book1.png", bookName: "（道光）安徽通志", bookPrize: "2015年度华东优秀古籍图书奖二等奖"},
    {bookPic: "images/book1.png", bookName: "（道光）安徽通志", bookPrize: "2015年度华东优秀古籍图书奖二等奖"},
    {bookPic: "images/book1.png", bookName: "（道光）安徽通志", bookPrize: "2015年度华东优秀古籍图书奖二等奖"},
    {bookPic: "images/book1.png", bookName: "（道光）安徽通志", bookPrize: "2015年度华东优秀古籍图书奖二等奖"},
    {bookPic: "images/book1.png", bookName: "（道光）安徽通志", bookPrize: "2015年度华东优秀古籍图书奖二等奖"},
    {bookPic: "images/book1.png", bookName: "（道光）安徽通志", bookPrize: "2015年度华东优秀古籍图书奖二等奖"},
    {bookPic: "images/book1.png", bookName: "（道光）安徽通志", bookPrize: "2015年度华东优秀古籍图书奖二等奖"}
  ],
  book2: [
    {bookPic: "images/book1.png", bookName: "（道光）安徽通志22", bookPrize: "2015年度华东优秀古籍图书奖二等奖"},
    {bookPic: "images/book1.png", bookName: "（道光）安徽通志22", bookPrize: "2015年度华东优秀古籍图书奖二等奖"},
    {bookPic: "images/book1.png", bookName: "（道光）安徽通志22", bookPrize: "2015年度华东优秀古籍图书奖二等奖"},
    {bookPic: "images/book1.png", bookName: "（道光）安徽通志22", bookPrize: "2015年度华东优秀古籍图书奖二等奖"},
    {bookPic: "images/book1.png", bookName: "（道光）安徽通志22", bookPrize: "2015年度华东优秀古籍图书奖二等奖"},
    {bookPic: "images/book1.png", bookName: "（道光）安徽通志22", bookPrize: "2015年度华东优秀古籍图书奖二等奖"},
    {bookPic: "images/book1.png", bookName: "（道光）安徽通志22", bookPrize: "2015年度华东优秀古籍图书奖二等奖"},
    {bookPic: "images/book1.png", bookName: "（道光）安徽通志22", bookPrize: "2015年度华东优秀古籍图书奖二等奖"},
    {bookPic: "images/book1.png", bookName: "（道光）安徽通志22", bookPrize: "2015年度华东优秀古籍图书奖二等奖"},
    {bookPic: "images/book1.png", bookName: "（道光）安徽通志22", bookPrize: "2015年度华东优秀古籍图书奖二等奖"},
    {bookPic: "images/book1.png", bookName: "（道光）安徽通志22", bookPrize: "2015年度华东优秀古籍图书奖二等奖"}
  ]
}
var html = template("bookUl12", data4);
document.getElementById("bookUl1").innerHTML = html;
var html = template("bookUl22", data4);
document.getElementById("bookUl2").innerHTML = html;

// var bookUl1 = document.getElementById("bookUl1");


// var booklist1=[];
// var booklist;
// for(var i=0;i<book1.length;i++){
//   for(var j=0;j<book1.length;j++){
//     booklist += "<li><div class='book1-list'><img src='"+book1[i].bookPic+"'><p class='book-name'>"
//       +book1[i].bookName+"</p><p class='book-prize'>"+book1[i].bookPrize+"</p></div></li>";
//   }
//   bookUl1.innerHTML+=booklist;
// bookUl2.innerHTML+="<li>"+ booklist1[i].replace(/undefined/g,"")+"</li>";
// }
// jQuery(".book1").slide({mainCell:".bd ul",autoPlay:false});
// jQuery(".book2").slide({mainCell:".bd ul",autoPlay:false});
jQuery(".book1").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"left",autoPlay:false,vis:5,trigger:"click"});
jQuery(".book2").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"left",autoPlay:false,vis:5,trigger:"click"});

//精品期刊
var $tab_li2 = $('.read .hd ul li');
$tab_li2.click(function(){
  $(this).addClass("on").siblings().removeClass("on");
  var index = $tab_li.index(this);
  if(index==0){
    $("#ulBook21").show();
    document.getElementById("ulBook2").style.opacity=1;
  }else{
    $("#ulBook21").hide();
    document.getElementById("ulBook2").style.opacity=1;}


})
var read ={
  read1:[
    {bookPic:"images/book2.png",bookName:"罗寒蕾讲工笔人物",bookPrize:"好礼相赠 官方正品"},
    {bookPic:"images/book2.png",bookName:"罗寒蕾讲工笔人物",bookPrize:"好礼相赠 官方正品"},
    {bookPic:"images/book2.png",bookName:"罗寒蕾讲工笔人物",bookPrize:"好礼相赠 官方正品"},
    {bookPic:"images/book2.png",bookName:"罗寒蕾讲工笔人物",bookPrize:"好礼相赠 官方正品"},
    {bookPic:"images/book2.png",bookName:"罗寒蕾讲工笔人物",bookPrize:"好礼相赠 官方正品"},
    {bookPic:"images/book2.png",bookName:"罗寒蕾讲工笔人物",bookPrize:"好礼相赠 官方正品"},
    {bookPic:"images/book2.png",bookName:"罗寒蕾讲工笔人物",bookPrize:"好礼相赠 官方正品"},
    {bookPic:"images/book2.png",bookName:"罗寒蕾讲工笔人物",bookPrize:"好礼相赠 官方正品"},
    {bookPic:"images/book2.png",bookName:"罗寒蕾讲工笔人物",bookPrize:"好礼相赠 官方正品"},
    {bookPic:"images/book2.png",bookName:"罗寒蕾讲工笔人物",bookPrize:"好礼相赠 官方正品"},
    {bookPic:"images/book2.png",bookName:"罗寒蕾讲工笔人物",bookPrize:"好礼相赠 官方正品"}
  ],
  read2:[
    {bookPic:"images/book2.png",bookName:"罗寒蕾讲工笔人物",bookPrize:"好礼相赠 官方正品"},
    {bookPic:"images/book2.png",bookName:"罗寒蕾讲工笔人物",bookPrize:"好礼相赠 官方正品"},
    {bookPic:"images/book2.png",bookName:"罗寒蕾讲工笔人物",bookPrize:"好礼相赠 官方正品"},
    {bookPic:"images/book2.png",bookName:"罗寒蕾讲工笔人物",bookPrize:"好礼相赠 官方正品"},
    {bookPic:"images/book2.png",bookName:"罗寒蕾讲工笔人物",bookPrize:"好礼相赠 官方正品"},
    {bookPic:"images/book2.png",bookName:"罗寒蕾讲工笔人物",bookPrize:"好礼相赠 官方正品"},
    {bookPic:"images/book2.png",bookName:"罗寒蕾讲工笔人物",bookPrize:"好礼相赠 官方正品"},
    {bookPic:"images/book2.png",bookName:"罗寒蕾讲工笔人物",bookPrize:"好礼相赠 官方正品"},
    {bookPic:"images/book2.png",bookName:"罗寒蕾讲工笔人物",bookPrize:"好礼相赠 官方正品"},
    {bookPic:"images/book2.png",bookName:"罗寒蕾讲工笔人物",bookPrize:"好礼相赠 官方正品"},
    {bookPic:"images/book2.png",bookName:"罗寒蕾讲工笔人物",bookPrize:"好礼相赠 官方正品"}
  ]
}



//网站点击
$(".net .group").click(function(){
  $(".net .group .dropdown-menu").eq($(this).index()).toggle();



});
