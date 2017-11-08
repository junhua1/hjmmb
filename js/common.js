/**
 * Created by hua on 2017/11/5.
 */
var ip = "192.168.32.95";
var mmp_api = {
    //首页导航页
    nav:"http://"+ip+":9090/api/getindexmenu",
    //商品详情页
    discount:"http://"+ip+":9090/api/getmoneyctrl",
    //钱品分类页
    moneyctrl:"http://"+ip+":9090/api/getmoneyctrlproduct",
    //分类页
    category:"http://"+ip+":9090/api/getcategorytitle",
    //分类清单
    cateList:"http://"+ip+":9090/api/getcategory",
    //商品列表 要传categoryid
    product:"http://"+ip+":9090/api/getproduct",
    productIdList:"http://"+ip+":9090/api/getcategorybyid",
    productList:"http://"+ip+":9090/api/getproductlist",
    //白菜价
    baicaijia:"http://"+ip+":9090/api/getbaicaijiatitle",
    //国内折扣
    inland:"http://"+ip+":9090/api/getinlanddiscount",
    // 折扣
    getdiscount:"http://"+ip+":9090/api/getdiscountproduct",
    //com
    getcom:"http://"+ip+":9090/api/getproductcom",
    //disco
    getbaicaijiaproduct:"http://"+ip+":9090/api/getbaicaijiaproduct",
    //优惠券
    getcoupon:"http://"+ip+":9090/api/getcoupon",
    //优惠券列表
    getcouponproduct:"http://"+ip+":9090/api/getcouponproduct",
    //凑单品
    getgsshop:"http://"+ip+":9090/api/getgsshop",
    //凑单品区域
    getgsshoparea:"http://"+ip+":9090/api/getgsshoparea",
    //凑单品上品区域
    getgsproduct:"http://"+ip+":9090/api/getgsproduct",
    //商场导航
    getsitenav:"http://"+ip+":9090/api/getsitenav",
    //品牌分类
    getbrandtitle:"http://"+ip+":9090/api/getbrandtitle",
    //品牌分类2 接口
    getbrand:"http://"+ip+":9090/api/getbrand",
    //品牌分类接口3
    getbrandproductlist:"http://"+ip+":9090/api/getbrandproductlist",
    //品牌分类接口4
    getproductcom:"http://"+ip+":9090/api/getproductcom"


};
var tools = {
    //获取地址栏中所有的参数
    getParamObj: function () {
        var obj = {};
        var search = location.search;
        search = search.slice(1);
        var arr = search.split("&");
        for (var i = 0; i < arr.length; i++) {
            var key = arr[i].split("=")[0];
            var value = decodeURI(arr[i].split("=")[1]);
            obj[key] = value;
        }
        //this指向的是谁：  4种调用模式
        return obj;
    },
    getParam:function (key) {
        return this.getParamObj()[key];
    }
}
