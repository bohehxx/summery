/**
 * Created by hongxiaoxia on 2018/7/11.
 */
$(function(){
  var page = new Paging();
  page.init({	target: $('.pageTool'), pagesize: 10, count: 100, current:1,callback: function (pagecount, size, count) {
    console.log(arguments)
    console.log('当前第 ' + pagecount + '页,每页 ' + size + '条,总页数：' + count + '页');
    //动态设置总条数 https://github.com/tianxiangbing/paging
    page.render({ count: 89, current: pagecount });




  }
  });



})
