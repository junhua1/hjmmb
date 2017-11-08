/**
 * Created by hua on 2017/11/7.
 */
$(function () {
    var id = tools.getParam("productid");
    $.ajax({
        type:"get",
        url:mmp_api.getdiscount,
        data:{
            productid:id
        },
        success:function (data) {
            console.log(data);
            $(".mb_product").html(template("tpl",data));
        }
    })
})