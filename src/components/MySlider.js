import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/mainBlock.css";
import doctor from "../img/doctor.png";

function MySlider() {
  const settings = {
    arrows: false,
    dots: true,
    fade: true,
    autoplay: false,
    // autoplaySpeed: 2500,
    pauseOnHover: false,
  };
  return (
    <div className="mySlider">
      <Slider {...settings} className="hello">
        <div className="slide1 slide">
          <nav>
            <div className="slider-container">
              <article>
                <h2>Our people and societyc</h2>
                <h1>
                  We always put the <br /> patients first
                </h1>
                <p>
                  Conveniently drive go forward architectures with future-proof
                  growth strategies. Energistically supply low-risk high-yield
                  process improvements for mission-critical testing procedures
                  commonly publishing industries
                </p>
                <button className="btn">
                  <span>View all Sevices </span>
                  <i class="fa-solid fa-arrow-right"></i>
                </button>
              </article>
            </div>
          </nav>
        </div>
        <div className="slide2 slide">
          <nav>
            <div className="slider-container">
              <article>
                <h2>Our people and societyc</h2>
                <h1>
                  Привет ребята
                  <br /> patients first
                </h1>
                <p>
                  Conveniently drive go forward architectures with future-proof
                  growth strategies. Energistically supply low-risk high-yield
                  process improvements for mission-critical testing procedures
                  commonly publishing industries
                </p>
                <button className="btn">
                  <span>View all Sevices </span>
                  <i class="fa-solid fa-arrow-right"></i>
                </button>
              </article>
            </div>
          </nav>
        </div>
        <div className="slide3 slide">
          <nav>
            <div className="slider-container">
              <article>
                <h2>Our people and societyc</h2>
                <h1>
                  We always put the <br /> patients first
                </h1>
                <p>
                  Conveniently drive go forward architectures with future-proof
                  growth strategies. Energistically supply low-risk high-yield
                  process improvements for mission-critical testing procedures
                  commonly publishing industries
                </p>
                <button className="btn">
                  <span>View all Sevices </span>
                  <i class="fa-solid fa-arrow-right"></i>
                </button>
              </article>
            </div>
          </nav>
        </div>
      </Slider>
    </div>
  );
}
export default MySlider;
