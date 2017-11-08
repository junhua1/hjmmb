/**
 * Created by hua on 2017/11/7.
 */
$(function () {
    $.ajax({
        type:"get",
        url:mmp_api.getcoupon,
        success:function (data) {
            console.log(data);
            $(".mb_content").html(template("tpl",data));
        }
    })
})