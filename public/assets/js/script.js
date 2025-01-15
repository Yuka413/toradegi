// ドロワーメニュー開閉ここから
$("#js-drawer").on("click", function () {
  if ($(".l-header__drawer-bar").hasClass("is-active")) {
    $("#js-drawer-content").css({ opacity: "0", visibility: "hidden" });
    $(".l-header__drawer-bar").removeClass("is-active");
  } else {
    $(".l-header__drawer-bar").addClass("is-active");
    $("#js-drawer-content").css({ opacity: "1", visibility: "visible" });
  }
});

$(".l-header__drawer-menu").on("click", function () {
  $("#js-drawer-content").css({ opacity: "0", visibility: "hidden" });
  $(".l-header__drawer-bar").removeClass("is-active");
});
// ドロワーメニュー開閉ここまで

//  headerスクロールで切り替わる
$(window).on("scroll", function () {
  const scrollY = $(this).scrollTop();
  if ($(window).scrollTop() > 50) {
    $(".l-header").css("background-color", "rgba(100, 100, 100, 0.7)");
    $(".l-header-pc__menus").css("color", "#EBEBEB");
    $(".l-header-pc__menu--button").css({
      "background-color": "#EBEBEB",
      color: "#222",
    });
    $(".l-header__logo-pc-svg path").css("fill", "#EBEBEB");
  } else {
    $(".l-header").css("background-color", "transparent");
    $(".l-header-pc__menus").css("color", "#222");
    $(".l-header-pc__menu--button").css({
      "background-color": "#222",
      color: "#ebebeb",
    });
    $(".l-header__logo-pc-svg path").css("fill", "#222");
  }
});
