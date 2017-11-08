/**
 * Created by hua on 2017/11/7.
 */
$(function () {
    $.ajax({
        type:"get",
        url:mmp_api.inland,
        success:function (data) {
            console.log(data);
            $(".mb_product ul").html(template("tpl",data));
        }
    })
})