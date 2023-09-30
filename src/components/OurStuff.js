import React from "react";
import "../css/ourStuff.css";
function OurStuff() {
  return (
    <section className="ourStuffBlock">
      <h2 className="subTitle">Medical & General Care!</h2>
      <h3 className="mainTitle">Наши Врачи</h3>
      <p className="mainText">
        Proactively revolutionize granular customer service after pandemic
        internal or <br /> "organic" sources istinctively impact proactive human
      </p>
      <div className="stuffSlider">
        <nav>
          <div className="slidePhoto slidePhoto1"></div>
          <a href="#" className="stuffInfo">
            Name and Lastname
          </a>
          <article>
            <p className="spetialisation">about the spetialist information</p>
            <p className="mainText">Specialisation</p>
          </article>
        </nav>
        <nav>
          <div className="slidePhoto slidePhoto2"></div>
          <a href="#" className="stuffInfo">
            Name and Lastname
          </a>
          <article>
            <p className="spetialisation">about the spetialist information</p>
            <p className="mainText">Specialisation</p>
          </article>
        </nav>
        <nav>
          <div className="slidePhoto slidePhoto3"></div>
          <a href="#" className="stuffInfo">
            Name and Lastname
          </a>
          <article>
            <p className="spetialisation">about the spetialist information</p>
            <p className="mainText">Specialisation</p>
          </article>
        </nav>
      </div>
    </section>
  );
}
export default OurStuff;
