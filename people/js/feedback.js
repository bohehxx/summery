$(".send").click(function(){
    if(!$("#idea").val()){
        $(".verity").show();
        return false;
    }
    var result=false;
    if(result){
        $("#feedImg").attr("src","images/fb-sucuss.png");
        $(".p1").html("提交成功");
        $(".p2").html("我们已收到您的反馈，感谢填写");
        $(".feedback-mask").show();
    }else{
        $("#feedImg").attr("src","images/fb-fail.png");
        $(".p1").html("提交失败");
        $(".p2").html("请稍后重试，或检查网络连接");
        $(".feedback-mask").show();

    }



})
$(".cancel").click(function(){
    $("#idea").val('');
});
$("#close").click(function(){
    $(".feedback-mask").hide();
})