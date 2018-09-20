function picCut(data,item,node){
    var img = new Image()

    // 改变图片的src
    img.src = "http://apg.v5time.net"+item.pic;

    // 加载完成执行

    img.onload = function(){
        var image_width = img.width;
        var image_height= img.height;
        var feste = image_width / image_height;
        var hinten = 23 / 25;
        var cenWidth = 230;
        var cenHeight = 250;
        var width2;
        var height2;
        var scale;
        var imgDoc;
         console.log(image_width,image_height,'00')
        if (feste < hinten) {
            scale = cenWidth / image_width;
            width2 = image_width * scale;
            height2 = image_height* scale;

            padTop = Math.round((250-height2)/2);
            imgDoc = "<div class='imgDiv' style='margin-top:"+padTop+"px'><img src='http://apg.v5time.net"+item.pic+"' width='"+width2+"' height='"+height2+"'/></div>";

        }
        else {
            scale = cenHeight / image_height.toFixed(4);
            width2 = image_width * scale;
            height2 = image_height* scale;
            console.log(width2,image_width)
            padLeft = Math.round((230-width2)/2);
            console.log(padLeft,'padLeft')
            imgDoc = "<div class='imgDiv' style='margin-left:"+padLeft+"px'><img src='http://apg.v5time.net"+item.pic+"' width='"+width2+"' height='"+height2+"'/></div>";
        }

        insert(data,item,node,imgDoc);

    }




}

function insert(data,item,node,imgDoc){
    var index = -1;
    for(var i = 0; i < data.length; i++){
        if(item.id == data[i].id){
            index = i;
            break;
        }
    }
    console.log(imgDoc,'imgDoc')
    node.children("li").eq(index).children(".imgDiv2").append(imgDoc);

}

function setup(data,node){
    var a='';
     for(var i=0;i<data.length;i++){
         a += '<li><div class="imgDiv2"></div></li>';
         console.log(a);
         node.html(a);
         var item=data[i];
         picCut(data,item,node);
     }


};