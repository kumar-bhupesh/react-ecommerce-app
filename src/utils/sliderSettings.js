const defaultSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover: false,
};

const heroSliderSettings = {
  ...defaultSettings,
  autoplay: true,
  autoplaySpeed: 3000,
};

export { heroSliderSettings };
