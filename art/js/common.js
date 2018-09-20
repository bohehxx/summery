/**
 * Created by hongxiaoxia on 2018/6/29.
 */
$("#bookNav").click(function(e){


  $(".two-level").toggle();
  var targetId=e.target.id;
  if(targetId=="bookNav"){

  }

})
$("#bookcolumn").click(function(e){

  var targetId=e.target.id;
  if(targetId=="bookcolumn"){
    $(".drop-menu").toggle();
  }

})

