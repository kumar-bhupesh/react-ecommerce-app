import React from "react";
import "./heroSlider.css";
import Slider from "react-slick";
import { heroSliderSettings } from "../../utils/sliderSettings";
import { sliderData } from "../../data/sliderData";
import { useNavigate } from "react-router-dom";

const HeroSlider = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-slider">
      <div className="container-xl">
        <Slider {...heroSliderSettings}>
          {sliderData.map((item) => (
            <div key={item.id} className="hero-slider__slide">
              <div className="row align-items-center">
                <div className="col-md-6 hero-slider__content">
                  <h1 className="hero-slider__title">{item.title}</h1>
                  <p className="hero-slider__description">{item.desc}</p>
                  <button
                    className="btn btn-primary btn-lg fw-medium"
                    onClick={() => navigate("/products")}
                  >
                    Shop Now
                  </button>
                </div>
                <div className="col-md-6 hero-slider__img-container">
                  <img src={item.cover} alt="Headphone" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default HeroSlider;
