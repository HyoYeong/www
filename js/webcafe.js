// 서브메뉴 제어를 위한 스크립트 //
$(function() {
    $(".main-menu > li").hover(
        function() {
            $(this).children("ul").css("display", "block");
        },
        function() {
            $(this).children("ul").css("display", "none");
        });
    $(".main-menu span").focusin(
        function() {
            $(this).siblings("ul").css("display", "block");
        });
    $(".main-menu ul li:last-child a").focusout(
        function() {
            $(this).parent().parent().css("display", "none");
        }
    );
});

// Tab 메뉴 제어를 위한 자바 스크립트
$(function() {});
$(".board h2").focus(function() {
    $(this).parent().addClass("act").siblings().removeClass("act");
});




//* li의 지시자 this
// $(); < wrapper 함수 
//    function(argument) {act}
// h2 보다는 class 이름을 주는게 더 좋다, 계층구조가 바뀔 수도 있기 때문이다.
//$("main-menu ......").focusout(
//function() {}
//);
//});