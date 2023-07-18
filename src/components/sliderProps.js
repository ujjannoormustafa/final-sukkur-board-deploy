import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay]);

export const home1HeroProps = {
  className: "slider swiper-container owl-carousel d-block",
  slidesPerView: 1,
  loop: true,
  autoplay: true,
  speed: 800,
};
export const home1CategoryProps = {
  className: "owl-carousel owl-theme owl-loaded categories-carousel",
  slidesPerView: 1,
  spaceBetween: 16,
  loop: true,
  autoplay: true,
  speed: 800,
  pagination: {
    el: ".indicators",
    clickable: true,
  },
  navigation: {
    nextEl: ".owl-next",
    prevEl: ".owl-prev",
  },
  breakpoints: {
    1100: {
      slidesPerView: 5,
    },
    992: {
      slidesPerView: 4,
    },
    767: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    550: {
      slidesPerView: 2,
    },
  },
};
export const home1CoursesProps = {
  className: "owl-carousel owl-theme owl-loaded courses-carousel",
  slidesPerView: 1,
  spaceBetween: 16,
  loop: true,
  autoplay: true,
  speed: 800,
  pagination: {
    el: ".indicators",
    clickable: true,
  },
  navigation: {
    nextEl: ".owl-next",
    prevEl: ".owl-prev",
  },
  breakpoints: {
    1100: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 3,
    },
    767: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    550: {
      slidesPerView: 1,
    },
  },
};
export const home3ReviewProps = {
  className: "owl-carousel owl-theme reviews-holder",
  slidesPerView: 1,
  spaceBetween: 25,
  loop: true,
  autoplay: true,
  speed: 800,
  pagination: {
    el: ".owl-dots",
    clickable: true,
  },
  navigation: {
    nextEl: ".owl-next",
    prevEl: ".owl-prev",
  },
  breakpoints: {
    1000: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 3,
    },
    767: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    550: {
      slidesPerView: 1,
    },
  },
};
export const teamcarousel = {
  className: "owl-carousel owl-theme reviews-holder",
  slidesPerView: 1,
  spaceBetween: 25,
  loop: true,
  autoplay: true,
  speed: 800,
  pagination: {
    el: ".owl-dots",
    clickable: true,
  },
  navigation: {
    nextEl: ".owl-next",
    prevEl: ".owl-prev",
  },
  breakpoints: {
    1000: {
      slidesPerView: 4,
    },
    991: {
      slidesPerView: 3,
    },
    767: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    550: {
      slidesPerView: 1,
    },
  },
};
export const brandcarousel = {
  className: "owl-carousel owl-theme reviews-holder",
  slidesPerView: 1,
  loop: true,
  autoplay: true,
  speed: 800,
  pagination: {
    el: ".owl-dots",
    clickable: true,
  },
  navigation: {
    nextEl: ".owl-next",
    prevEl: ".owl-prev",
  },
  breakpoints: {
    1000: {
      slidesPerView: 5,
    },
    991: {
      slidesPerView: 4,
    },
    767: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 3,
    },
    550: {
      slidesPerView: 2,
    },
    530: {
      slidesPerView: 1,
    },
  },
};
