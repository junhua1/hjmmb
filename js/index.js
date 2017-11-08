/**
 * Created by hua on 2017/11/5.
 */
$(function () {
    $.ajax({
        type:"get",
        url:mmp_api.nav,
        success:function (data) {
            console.log(data);
            $(".mb_banner ul").html(template("tpl",data));
        }
    });

    $(".mb_banner").on("click","li:nth-child(8)",function () {
        console.log(1);
        $(".mb_banner").toggleClass("addheight");
    })

    $.ajax({
        type:"get",
        url:mmp_api.discount,
        success:function (data) {
            console.log(data);
            $(".mb_product ul").html(template("tpl2",data));
        }
    })
    
});