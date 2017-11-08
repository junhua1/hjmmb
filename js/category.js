/**
 * Created by hua on 2017/11/6.
 */
$(function () {
    $.ajax({
        type:"get",
        url:mmp_api.category,
        success:function (data) {
            console.log(data);
            $(".mb_cart").html(template("tpl",data));
        }
    })

    $(".mb_cart").on("click",".lif",function () {
        // alert(1);
        var $this = $(this);
       var id =  $this.parent().children('li').data("id");
        // console.log($this.children())
        console.log(id);
        $this.parent().children('.second_cart').toggleClass('none');

        // console.log($this);
        $this.parent().siblings().children('.second_cart').addClass('none');

        $.ajax({
            type:"get",
            url:mmp_api.cateList,
            data:{
                titleid: id
            },
            success:function (data) {
                console.log(data);
                $(".cate ul").html(template("tpl2",data));


            }    
        })
    });




})
