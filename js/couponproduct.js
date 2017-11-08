/**
 * Created by hua on 2017/11/8.
 */
$(function () {



    var id = tools.getParam("couponId");
    $.ajax({
        type:"get",
        url:mmp_api.getcouponproduct,
        data:{
            couponid:id
        },
        success:function (data) {
            console.log(data);
            $(".mb_content").html(template("tpl",data));
            $(".mb_content li").on("click",function () {

                $("body").css({
                    overflow:"hidden",
                    height:"100%"
                })
                $(".hid").toggle();
                var imgsrc = $(this).data("pic");
                console.log(imgsrc);
                $(".hid .swiper-wrapper").html(template("tpl2",{src:imgsrc}));
                var mySwiper = new Swiper ('.swiper-container', {
                    autoplay:100,
                    loop: true,

                    // 如果需要分页器
                    pagination: '.swiper-pagination',

                    // 如果需要前进后退按钮
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',
                })
            })
        }
    })
});