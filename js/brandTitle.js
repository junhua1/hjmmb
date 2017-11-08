/**
 * Created by hua on 2017/11/8.
 */
$(function () {
    $.ajax({
        type:"get",
        url:mmp_api.getbrandtitle,
        success:function (data) {
            console.log(data);
            $(".brand").html(template("tpl",data));
        }
    })
})
