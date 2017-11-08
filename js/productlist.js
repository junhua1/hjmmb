/**
 * Created by hua on 2017/11/6.
 */
$(function () {
    var id = tools.getParam("categoryid");
    var pro = tools.getParam("category");
    var page = tools.getParam("pageid");
    console.log(page);


    $(".mb_banner .fenlei a").html(pro+" >");
    console.log(pro);
    console.log(id);
    $.ajax({
        type:"get",
        url:mmp_api.productList,
        data:{
            categoryid:id,
            category: pro,
            pageid: page
        },
        success:function (data) {
            console.log(data);
             window.maxpage = Math.ceil(data.totalCount / data.pagesize);
            $(".mb_product ul").html(template("tpl", data));

        }
    });
    // console.log(window.maxpage);


    $.ajax({
        type:"get",
        url:mmp_api.productList,
        data:{
            categoryid:id,
            category: pro,
            pageid : page
        },
        success:function (data) {
            console.log(data);
            data.pages = Math.ceil(data.totalCount / data.pagesize);
            data.pageid = page;
            $(".mb_letters .pags").html(template("tpl2", data));
            console.log(template("tpl2", data));
        }
    });



    $(".mb_letters .nxt").on("click",function () {

        console.log(1);
        page++;

        if(page > maxpage){
            page = maxpage;
        }
            location.href = "http://www.mmb.com/productlist.html?categoryid=" + id + "&category=" + pro +"&pageid="+ page;
    });


    $(".mb_letters .last").on("click",function () {
        console.log(1);

        page --;

        console.log(page);
        if(page < 1){
            page = 1;
        }
        location.href = "http://www.mmb.com/productlist.html?categoryid=" + id + "&category=" + pro +"&pageid="+ page;
    })

    $(".mb_letters").on("change","select",function () {
       page = $(this).val();
        // console.log(page);
        location.href = "http://www.mmb.com/productlist.html?categoryid=" + id + "&category=" + pro +"&pageid="+ page;
    })


})