/**
 * Created by hua on 2017/11/6.
 */
$(function () {
    var categoryId = tools.getParam("categoryId");
    var id = tools.getParam("productid");
    $.ajax({
        type:"get",
        url:mmp_api.product,
        data:{
            productid:id
        },
        success:function (data) {
            console.log(data);
            $(".mb_pricer").html(template("tpl",data));
        }
    });

    $.ajax({
        type:"get",
        url:mmp_api.getcom,
        data:{
            productid:id
        },
        success:function (data) {
            console.log(data);
            $(".product-com-list").html(template("tpl2",data));
        }
        
        
    })

    $(".mb_banner .cate").on("click",function () {
        location.href = "http://www.mmb.com/productlist.html?categoryid=" + categoryId
    })
})