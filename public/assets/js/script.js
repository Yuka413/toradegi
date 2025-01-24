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

//  headerスクロールで切り替わるここから
$(window).on("scroll", function () {
  const scrollY = $(this).scrollTop();
  if ($(window).scrollTop() > 50) {
    $(".l-header").css("background-color", "rgba(100, 100, 100, 0.7)");
    $(".l-header__image path").css("fill", "#EBEBEB");
    $(".l-header__drawer-bar").css("background-color", "#EBEBEB");
    $(".l-header-pc__menu").css("color", "#EBEBEB");
    $(".l-header-pc__menu").addClass("is-scroll");
    $(".l-header-pc__menu--button").css({
      "background-color": "#EBEBEB",
      color: "#222",
    });
    $(".l-header__logo-pc-svg path").css("fill", "#EBEBEB");
  } else {
    $(".l-header").css("background-color", "transparent");
    $(".l-header__image path").css("fill", "#222");
    $(".l-header__drawer-bar").css("background-color", "#222");
    $(".l-header-pc__menu").css("color", "#222");
    $(".l-header-pc__menu").removeClass("is-scroll");
    $(".l-header-pc__menu--button").css({
      "background-color": "#222",
      color: "#ebebeb",
    });
    $(".l-header__logo-pc-svg path").css("fill", "#222");
  }
});
// headerスクロールで切り替わるここまで

// ハートクリック切り替えここから
$(".c-card__favorite-before").on("click", function () {
  $(this).addClass("is-inactive");
  $(this).siblings(".c-card__favorite-after").addClass("is-active");
});

$(".c-card__favorite-after").on("click", function () {
  $(this).removeClass("is-active"); // クリックされた要素のみを非アクティブにする
  $(this).siblings(".c-card__favorite-before").removeClass("is-inactive");
});
// ハートクリック切り替えここまで

// Swiperここから
const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  centeredSlides: true,
  slidesPerView: "auto",
  spaceBetween: 24,
  speed: 1000,
  // autoplay:{
  //   delay:1500,
  // },
  breakpoints: {
    768: {
      spaceBetween: 32,
    },
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },

  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
});

// カテゴリーモーダル絞り込みクリック
$(".p-works__modal-select").click(function () {
  const index = $(".p-works__modal-select").index(this);
  $(".p-works__modal-select").removeClass("u-color__all");
  if (index === 1) {
    $(this).toggleClass("u-color__design");
  } else if (index === 2) {
    $(this).toggleClass("u-color__cording");
  } else if (index === 3) {
    $(this).toggleClass("u-color__movie");
  } else if (index === 4) {
    $(this).toggleClass("u-color__writing");
  } else if (index === 0) {
    $(this).addClass("u-color__all");
    $(".p-works__modal-select").removeClass(
      "u-color__design u-color__cording u-color__movie u-color__writing"
    );
  }
});

// カテゴリーボタンクリック->モーダルが開く
$(".p-works__narrow-category").on("click", function () {
  $(".p-works__modal-category").addClass("is-active");
});
$(".p-works__narrow-detail").on("click", function () {
  $(".p-works__modal-detail").addClass("is-active");
});

$(".p-works__modal-batu").on("click", function () {
  $(".js-modal").removeClass("is-active");
});

$(".js-modal__detail").on("click", function () {
  $(this).toggleClass("is-active");
});

$('.js-works__narrow-tag').on('click', function(){
  $(this).toggleClass('is-active');
})

$(".p-works__narrow-pc-category").click(function () {
  const index = $(".p-works__narrow-pc-category").index(this);
  $(".p-works__narrow-pc-category").removeClass("u-color__all");
  if (index === 1) {
    $(this).toggleClass("u-color__design");
  } else if (index === 2) {
    $(this).toggleClass("u-color__cording");
  } else if (index === 3) {
    $(this).toggleClass("u-color__movie");
  } else if (index === 4) {
    $(this).toggleClass("u-color__writing");
  } else if (index === 0) {
    $(this).addClass("u-color__all");
    $(".p-works__narrow-pc-category").removeClass(
      "u-color__design u-color__cording u-color__movie u-color__writing"
    );
  }
});

