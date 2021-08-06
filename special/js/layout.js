$(function(){

// $("h1").on("click",function(){
//     $(this).hide()
// })
$(".xi-bars").on("click",function(){
    $("#gnb").toggleClass("on")
});
$("#gnb>ul>li").on("click", function(){
    $(this).addClass("on").siblings().removeClass("on");
});

$(".visual_slider").slick({
    arrows: false,
    autoplay:true,
});
















});