/**
 * Created by hua on 2017/11/7.
 */

$(function () {
    var id = 1;
    id = tools.getParam("cateid");



    $.ajax({
        type:"get",
        url:mmp_api.discount,
        data:{
            pageid:id
        },
        success:function (data) {
            console.log(data);

            $(".mb_product ul").html(template("tpl",data));
            window.maxpage = Math.ceil(data.totalCount / data.pagesize);
        }
    });


    $.ajax({
        type:"get",
        url:mmp_api.discount,
        data:{
            pageid : id
        },
        success:function (data) {
            console.log(data);
            data.pageid = id;
            data.pages = Math.ceil(data.totalCount / data.pagesize);
            $(".mb_letters .pags").html(template("tpl2", data));
            // console.log(template("tpl2", data));

        }
    });

    $(".mb_letters .nxt").on("click",function () {

        // console.log(1);
        id++;
        console.log(id);

        if(id > maxpage){
            id = maxpage;
        }
        location.href = "http://www.mmb.com/moneyctrl.html?cateid=" + id
    });


    $(".mb_letters .last").on("click",function () {
        console.log(1);

        id --;

        // console.log(page);
        if(id < 1){
            id = 1;
        }
        location.href = "http://www.mmb.com/moneyctrl.html?cateid=" + id
    });

    $(".mb_letters").on("change","select",function () {
        id = $(this).val();
        // console.log(page);
        location.href = "http://www.mmb.com/moneyctrl.html?cateid=" + id
    })

})