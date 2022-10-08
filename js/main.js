$(function () {
  $(".header-slider").slick({
    dots: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="images/prep.svg" alt=""></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="images/next.svg" alt=""></button>',
    vertical: true,
    autoplay: false,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          arrows: false,
          autoplay: false,
        },
      },
      {
        breakpoint: 381,
        settings: {
          dots: false,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  });

  $(".product__name").slick({
    slidesToShow: 6,
    slidesToScroll: 1,

    vertical: true,
    asNavFor: ".product__content",
    focusOnSelect: true,

    prevArrow:
      '<button type="button" class="product-prev"><img src="images/product-prev.svg" alt=""></button>',
    nextArrow:
      '<button type="button" class="product-next"><img src="images/product-next.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          vertical: false,
          slidesToShow: 3,
          prevArrow:
            '<button type="button" class="product-prev"><img src="images/product-prev.svg" alt=""></button>',
          nextArrow:
            '<button type="button" class="product-next"><img src="images/product-next.svg" alt=""></button>',
          centerMode: true,
          centerPadding: "1px",
        },
      },
      {
        breakpoint: 640,
        settings: {
          vertical: false,
          slidesToShow: 3,
          centerMode: true,
          centerPadding: "1px",
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 560,
        settings: {
          vertical: false,
          slidesToShow: 2,
          centerMode: false,
          centerPadding: "1px",
          arrows: false,
          dots: true,
        },
      },
    ],
  });
  $(".product__content").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".product__name",
    fade: true,
    arrows: false,
  });
  $(".menu__btn").on("click", function () {
    $(".menu__list").toggleClass("menu__list--active");
  });

  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top,
            },
            1000,
            function () {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });
});
