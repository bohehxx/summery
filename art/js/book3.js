/**
 * Created by hongxiaoxia on 2018/6/28.
 */
$(".two-level").show();
$("#bookNav").click(function(e){
  var targetId=e.target.id;
  if(targetId=="bookNav"){
    $(".two-level").toggle();
  }

})
var data={
  bookList1:[
    {cover:"images/book2.png",name:"罗寒蕾讲工笔人物",style:"好礼相赠 官方正品"},
    {cover:"images/book2.png",name:"罗寒蕾讲工笔人物",style:"好礼相赠 官方正品"},
    {cover:"images/book2.png",name:"罗寒蕾讲工笔人物",style:"好礼相赠 官方正品"},
    {cover:"images/book2.png",name:"罗寒蕾讲工笔人物",style:"好礼相赠 官方正品"},
    {cover:"images/book2.png",name:"罗寒蕾讲工笔人物",style:"好礼相赠 官方正品"},
    {cover:"images/book2.png",name:"罗寒蕾讲工笔人物",style:"好礼相赠 官方正品"},
    {cover:"images/book2.png",name:"罗寒蕾讲工笔人物",style:"好礼相赠 官方正品"},
    {cover:"images/book2.png",name:"罗寒蕾讲工笔人物",style:"好礼相赠 官方正品"},
    {cover:"images/book2.png",name:"罗寒蕾讲工笔人物",style:"好礼相赠 官方正品"},
    {cover:"images/book2.png",name:"罗寒蕾讲工笔人物",style:"好礼相赠 官方正品"},
    {cover:"images/book2.png",name:"罗寒蕾讲工笔人物",style:"好礼相赠 官方正品"},
    {cover:"images/book2.png",name:"罗寒蕾讲工笔人物",style:"好礼相赠 官方正品"},
    {cover:"images/book2.png",name:"罗寒蕾讲工笔人物",style:"好礼相赠 官方正品"},
    {cover:"images/book2.png",name:"罗寒蕾讲工笔人物",style:"好礼相赠 官方正品"},
    {cover:"images/book2.png",name:"罗寒蕾讲工笔人物",style:"好礼相赠 官方正品"},
    {cover:"images/book2.png",name:"罗寒蕾讲工笔人物",style:"好礼相赠 官方正品"},
    {cover:"images/book2.png",name:"罗寒蕾讲工笔人物",style:"好礼相赠 官方正品"},
    {cover:"images/book2.png",name:"罗寒蕾讲工笔人物",style:"好礼相赠 官方正品"},
    {cover:"images/book2.png",name:"罗寒蕾讲工笔人物",style:"好礼相赠 官方正品"},
    {cover:"images/book2.png",name:"罗寒蕾讲工笔人物",style:"好礼相赠 官方正品"},
  ]

}
var html = template("lists1", data);
document.getElementById("list1").innerHTML = html;
//tab切换
var $tabLi = $(".tab li")
$tabLi.click(function(){
  $(this).addClass("active").siblings().removeClass("active");
  var index = $tabLi.index(this);
  //根据index传不同的类型筛选书

})
$(".pager").pagination({
  recordCount:90,       //总记录数
  pageSize: 10,           //一页记录数
  onPageChange: function (pageIndex) {
    console.log(pageIndex)
  }

});