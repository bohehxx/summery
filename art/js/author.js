/**
 * Created by hongxiaoxia on 2018/6/29.
 */
var data = {
  authorList:[
    {img:"images/author.png",name:"张亚群"},
    {img:"images/author.png",name:"张亚群"},
    {img:"images/author.png",name:"张亚群"},
    {img:"images/author.png",name:"张亚群"},
    {img:"images/author.png",name:"张亚群"},
  ]
}
var html = template("authorUl2",data);
document.getElementById("authorUl").innerHTML=html;