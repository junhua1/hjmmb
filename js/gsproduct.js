/**
 * Created by hua on 2017/11/8.
 */
$(function () {
    var shopid = 0;
    var areaid = 0;

    $.ajax({
        type:"get",
        url:mmp_api.getgsproduct,
        data:{
            shopid:shopid,
            areaid:areaid
        },
        success:function (data) {
            console.log(data);
            $(".list").html(template("tpl3",data));
        }
    })


        $.ajax({
            type:"get",
            url:mmp_api.getgsshop,
            success:function (data) {
                console.log(data);
                $(".mb_product .text1 ul").html(template("tpl",data));

            }
        });
        $.ajax({
            type:"get",
            url:mmp_api.getgsshoparea,
            success:function (data) {
                console.log(data);
                $(".mb_product .text2 ul").html(template("tpl2",data));
            }
        });

    $(".mb_product .shop").on("click",function () {
        $(".mb_product .text1").toggle();
    });
    $(".mb_product .area").on("click",function () {
        $(".mb_product .text2").toggle();
    });


    $(".mb_product .rice").on("click",function () {
        $(".mb_product .text3").toggle();
    });
    
    
    $(".mb_product .text1").on("click","li",function () {
        var text = $(this).find("a").html().split('（')[0];
        console.log(text);
        $(".mb_product .shop").html(text);
        $(".mb_product .text1").hide();
        console.log(2);
        shopid = $(this).data("id");
        $.ajax({
            type:"get",
            url:mmp_api.getgsproduct,
            data:{
                shopid:shopid,
                areaid:areaid
            },
            success:function (data) {
                console.log(data);
                $(".list").html(template("tpl3",data));
            }
        })
    })

    $(".mb_product .text2").on("click","li",function () {
        var text = $(this).find("a").html().split('（')[0];
        console.log(text);
        $(".mb_product .area").html(text);
        $(".mb_product .text2").hide();
        console.log(3);
        areaid = $(this).data("id");
        $.ajax({
            type:"get",
            url:mmp_api.getgsproduct,
            data:{
                shopid:shopid,
                areaid:areaid
            },
            success:function (data) {
                console.log(data);
                $(".list").html(template("tpl3",data));
            }
        })
    })
    
    

});