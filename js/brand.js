/**
 * Created by hua on 2017/11/8.
 */
$(function () {
    var btid = tools.getParam("brandid");
    $.ajax({
        type:"get",
        url:mmp_api.getbrand,
        data:{
            brandtitleid:btid
        },
        success:function (data) {
            console.log(data);
            $(".brand ul").html(template("tpl",data));
        }
    })

    $.ajax({
        type:"get",
        url:mmp_api.getbrandproductlist,
        data:{
            brandtitleid:btid,
            pagesize:4
        },
        success:function (data) {
            console.log(data);
            $(".pro_list ul").html(template("tpl2",data));
            var productid = $(".pro_list .info1").data("id");
            var src = $(".pro_list .pic1").data("img");
            var tit = $(".pro_list .tit").data("tit");
            console.log(productid);

            $.ajax({
                type:"get",
                url:mmp_api.getproductcom,
                data:{
                    productid:productid
                },
                success:function (data) {

                    data.src = src;
                    data.tit = tit;
                    console.log(data);
                    $(".pinlunlst ul").html(template("tpl3",data));
                }
            })
        }
    });



})
