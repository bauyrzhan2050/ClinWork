import React from "react";
import "../css/aboutBlock.css";
import block2img from "../img/block2img.png";
import imgIcon from "../img/icon-2.png";
import imgIcon1 from "../img/icon-1.png";
function AboutBlock() {
  return (
    <section className="aboutBlock">
      <div className="container">
        <img src={block2img} alt="block2img" />
        <article>
          <h3>25 Years We Caring Medical Services </h3>
          <p>
            Rapidiously evisculate user-centric functionalities for highly
            efficient <br /> interfaces. Competently leverage other's scalable
            technology before <br /> synergistic manufactured products.
          </p>
          <nav>
            <img src={imgIcon} alt="imgIcon" />
            <div>
              <h2>Optimize Health Care Services</h2>{" "}
              <p>
                Seamlessly deliver team driven metrics via B2B Globally enable
                competitive solutions via effective synergy.
              </p>
            </div>
          </nav>
          <nav>
            <img src={imgIcon1} alt="imgIcon" />
            <div>
              <h2>Optimize Health Care Services</h2>{" "}
              <p>
                Seamlessly deliver team driven metrics via B2B Globally enable
                competitive solutions via effective synergy.
              </p>
            </div>
          </nav>
          <button className="btn">Узнать больше</button>
        </article>
      </div>
    </section>
  );
}
export default AboutBlock;
