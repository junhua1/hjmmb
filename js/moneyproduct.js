/**
 * Created by hua on 2017/11/7.
 */
$(function () {
    var productid = tools.getParam("productId");
    $.ajax({
        type:"get",
        url:mmp_api.moneyctrl,
        data:{
            productid:productid
        },
        success:function (data) {
            console.log(data);
            $(".mb_product").html(template("tpl",data));
        }
    })
})