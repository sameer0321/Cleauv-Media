let mobileView = document.querySelector(".mobileView");
let menu = document.querySelector(".menu");
let body = document.querySelector("body");
let navlinks = document.querySelector("ul");
let span1 = document.querySelector(".span1");
let span2 = document.querySelector(".span2");
let span3 = document.querySelector(".span3");

menu.addEventListener("click", function () {
    mobileView.classList.toggle("show");
    body.classList.toggle("overflow-hidden");
    span1.classList.toggle("rotate1");
    span2.classList.toggle("rotate2");
    span3.classList.toggle("rotate3");
})
navlinks.addEventListener("click", function () {
    navlinks.classList.toggle("show");
    body.classList.remove("overflow-hidden");
    span1.classList.toggle("rotate1");
    span2.classList.toggle("rotate2");
    span3.classList.toggle("rotate3");
})


$('.slider-3').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1.6,
    centermode: true,
    centerPadding: 100,
    arrows: false,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                dots: true,
                infinite: true,
                speed: 300,
                slidesToShow: 1.6,
                centermode: true,
                centerPadding: 100,
                arrows: false,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                dots: true,
                infinite: true,
                speed: 300,
                slidesToShow: 1,
                centermode: true,
                centerPadding: 100,
                arrows: false,
                slidesToScroll: 1,
            }
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});