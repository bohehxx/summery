for(var i=0;i<$(".jpts img").length;i++){
    if((i+1)%4==0 ){
        $(".jpts img").eq(i).css({marginRight:0});
    }
}