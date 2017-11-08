/**
 * Created by hua on 2017/11/7.
 */
$(function () {
    mui(".mui-scroll-wrapper").scroll({
        deceleration: 0.0005,
        scrollX:true,
        scrollY:false,
        bounce: true 
    });

    var id = tools.getParam("titleid");
    id = 0;
    $.ajax({
        type:"get",
        url:mmp_api.getbaicaijiaproduct,
        data:{
            titleid :id
        },

        success:function (data) {
            console.log(data);
            $(".bcj_list ul").html(template("tpl2",data));
        }
    });


    $.ajax({
        type:"get",
        url:mmp_api.baicaijia,
        success:function (data) {
            console.log(data);
            var sum =0;
            $(".mui-scroll").html(template("tpl",data));
            var lis = document.querySelectorAll('.mui-scroll li');
            for(var i=0;i<lis.length;i++){
                sum += lis[i].offsetWidth+15;
            }
            // console.log(sum);
            $('.mui-scroll').css('width',sum);
            $(".mui-scroll").on("click","a",function () {
                console.log(1);
                $(this).css({color:"red"}).parent().siblings().children().css({color:"black"});
            })
        }
    })





});