var swiper = new Swiper(".swiper", {
    autoplay: {
        delay: 5000,
    },
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    mousewheel: true,
    speed: 1000,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 1,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    on: {
        slideChange: function () {
            var currentSlide = this.slides[this.activeIndex];
            gsap.fromTo(currentSlide.querySelector("img"),
                {
                    scale: 1.2,
                }, {
                scale: 1,
                duration: 5
            })
            gsap.fromTo(currentSlide.querySelector(".t-bold"),
                {
                    y: 100,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1
                })
            gsap.fromTo(currentSlide.querySelector(".t-thin span"),
                {
                    x: -100,
                    opacity: 0
                },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1
                })
            gsap.fromTo(currentSlide.querySelector(".t-bg"),
                {
                    width: "0",
                },
                {
                    width: "112%",
                    duration: 0.5,
                    delay: 0.5
                })
            gsap.fromTo(currentSlide.querySelector(".quote"),
                {
                    y: 200,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.5
                })
            gsap.fromTo(currentSlide.querySelectorAll(".counter"),
                {
                    y: 200,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.8
                })
        },
    },
});
// footer start
// Initialization for ES Users
import { Ripple, initMDB } from "mdb-ui-kit";

initMDB({ Ripple });
// footer end