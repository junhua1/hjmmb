/**
 * Created by hua on 2017/11/8.
 */
$(function () {
    $.ajax({
        type:"get",
        url:mmp_api.getsitenav,
        success:function (data) {
            console.log(data);
            $(".mb_product").html(template("tpl",data));
        }
    })
})