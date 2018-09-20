/**
 * Created by hongxiaoxia on 2018/6/29.
 */
var $shareLi = $(".share li");
$shareLi.click(function(){
  var index = $shareLi.index(this);
  console.log(index);

})
$(".two-level").show();
var data = {
  bookInfo:[
    {bookName:"丝路遗珍·敦煌壁画精品集",category:"BB101",author:"许俊",size:"16B"}
]
}
var html = template("bookInfo2",data);
document.getElementById("bookInfo").innerHTML=html;