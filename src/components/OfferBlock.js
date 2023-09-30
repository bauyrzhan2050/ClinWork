import React from "react";
import "../css/offerBlock.css";
import Stethoscope from "../img/stethoscope.png";
import Nurse from "../img/nurse.png";
import Call from "../img/call.png";
function OfferBlock() {
  return (
    <section className="offerBlock">
      <nav>
        <h2 className="subTitle">What we offer</h2>
        <article>
          <h3 className="mainTitle">
            We Provide All Type Of Medical <br /> Practice For Your Family!
          </h3>
          <a href="#" className="btn">
            Learn More
          </a>
        </article>
        <div className="serviceBlock">
          <div>
            <img src={Stethoscope} alt="" />
            <h2>Professional Staff</h2>
            <p className="mainText">
              Reinvent team building leadership with <br /> an expanded array of
              plagiarize best <br /> practices viral role play
            </p>
          </div>
          <div>
            <img src={Nurse} alt="" />
            <h2>Emergency Treatment</h2>
            <p className="mainText">
              Reinvent team building leadership with <br /> an expanded array of
              plagiarize best <br /> practices viral role play
            </p>
          </div>
          <div>
            <img src={Call} alt="" />
            <h2>Trusted Doctors</h2>
            <p className="mainText">
              Reinvent team building leadership with <br /> an expanded array of
              plagiarize best <br /> practices viral role play
            </p>
          </div>
        </div>
      </nav>
    </section>
  );
}
export default OfferBlock;
