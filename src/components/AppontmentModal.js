import React from "react";
import { useState } from "react";
import "../css/appointmentModal.css";

function AppointmentModal({ hello }) {
  return (
    <section className={`bookModal ${hello ? "active" : ""}`}>
      <form className="form">
        <h3>Имя</h3>
        <input type="text" placeholder="" />
        <h3>Номер телефона с кодом</h3>
        <input type="tel" placeholder="" />
        <h3>Сообщение</h3>
        <textarea rows="4" cols="50">
          At w3schools.com you will learn how to make a website. They offer free
          tutorials in all web development technologies.
        </textarea>
        <button className="btn">Послать Заявку</button>
      </form>
    </section>
  );
}
export default AppointmentModal;
