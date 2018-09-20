/**
 * Created by hongxiaoxia on 2018/6/29.
 */
var data = {
  videoList:[
    {img:"images/video.png",name:"国际社会产生了广泛的影响"},
    {img:"images/video.png",name:"国际社会产生了广泛的影响"},
    {img:"images/video.png",name:"国际社会产生了广泛的影响"},
    {img:"images/video.png",name:"国际社会产生了广泛的影响"},
    {img:"images/video.png",name:"国际社会产生了广泛的影响"}

  ]
}
var html = template("videoUl2",data);
document.getElementById("videoUl").innerHTML=html;