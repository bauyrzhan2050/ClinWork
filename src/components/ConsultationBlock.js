import React from "react";
import "../css/consultationBlock.css";
import Clinic from "../img/clinic.jpg";
function ConsultationBlock() {
  return (
    <section className="consultationBlock">
      <div className="layer">
        <h3>Free Consultation For You!</h3>
        <p>
          It has survived not only five centuries, but also the leap into
          electronic typesetting, <br /> remaining essentially unchanged.
        </p>
        <button className="btn">Записаться на прием</button>
      </div>
    </section>
  );
}
export default ConsultationBlock;
