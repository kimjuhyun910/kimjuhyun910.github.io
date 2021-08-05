$(function(){
/////////////////////////////////////

$("#Kim_portfolio").fullpage({
    anchors:['intro', 'portfolio01', 'portfolio02', 'portfolio03', 'portfolio04', 'portfolio05', 'info'],
    afterLoad: function(origin, destination, direction){
        // console.log("여기는"+destination.index)
        $(".section").eq(destination.index).addClass("on").siblings().removeClass("on");
        // nav ul li
        $("nav ul li").eq(destination.index).addClass("on").siblings().removeClass("on");
    },
});

var options = {
    strings: ['kimjuhyun 2021 portfolio'],
    typeSpeed: 100
  };
var typed = new Typed('.intro_slogan .txt', options);

$(".xi-play.vod").on("click", function(){
    $(this).parent().parent().siblings().find("video").trigger("play");
});
$(".xi-pause.vod").on("click", function(){
    $(this).parent().parent().siblings().find("video").trigger("pause");
});

$("#bgndVideo").YTPlayer({
    containment:'.portfolio03',
    autoPlay:true,
    mute:true,
    startAt:0, 
    opacity:0.5,
    showControls:false,
    playOnlyIfVisible: true,
});
$(".portfolio03 .xi-pause").on("click",function(){
    $("#bgndVideo").YTPPause();
});
$(".portfolio03 .xi-play").on("click",function(){
    $("#bgndVideo").YTPPlay();
});

$(".visual_slider").slick({
    arrows:false,
    dots:true,
    slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    }
    ],
});

$(".slider_arrows i.right").on("click", function(){
    $(".visual_slider").slick("slickNext");
})
$(".slider_arrows i.left").on("click", function(){
    $(".visual_slider").slick("slickPrev");
})

$("header .mopen").on("click", function(){
    $(this).toggleClass("on");
    $(".cover").toggleClass("on");
})

$(".cover li a").on("click", function(){
    $(".cover").removeClass("on");
    $("header .mopen").removeClass("on");

})















/////////////////////////////////////
})