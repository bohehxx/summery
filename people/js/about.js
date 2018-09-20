/**
 * Created by hongxiaoxia on 2018/7/11.
 */
$(function(){
for(var i=0;i<$(".honor .pic img").length;i++){
    if((i+1)%3==0 ){
        console.log(i)
        $(".honor .pic img").eq(i).css({marginRight:0});
    }
}














})