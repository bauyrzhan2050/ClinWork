import React, { useState } from "react";
import "../css/bookAppointment.css";
import AppointmentImg from "../img/appointmentImg.jpeg";
import FormControll from "../img/controllImg.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import ru from "date-fns/locale/ru";

registerLocale("ru", ru);

function BookAppointment() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <section className="bookAppointment">
      <div className="container">
        <img src={AppointmentImg} alt="AppointmentImg"></img>
        <form>
          <h2>Запись на прием</h2>
          <h3>
            Заполните форму и начните лечение с лучшими специалистами сегодня!
          </h3>

          <div className="listBlock">
            <div className="selectReferral select">
              <span>Aerospace Medicine</span>
              <img src={FormControll} />
              <div className="hide">
                <nav>Урологи</nav>
                <nav>УЗИ</nav>
                <nav>Лаборатория</nav>
              </div>
            </div>
            <div className="select selectSpetialist">
              <span> John Week</span>
              <img src={FormControll} />
              <div className="hide">
                <nav>Ким Чен</nav>
                <nav>Дональд Трамп</nav>
                <nav>Жан Рено</nav>
              </div>
            </div>

            <div className="inputElement">
              <input type="text" className="select" placeholder="Your Name" />
              <i class="fa-solid fa-user"></i>
            </div>
            <div className="inputElement">
              <input
                type="email"
                className="select"
                placeholder="Email Address"
              />
              <i class="fa-solid fa-envelope"></i>
            </div>
            <div className="inputElement">
              <input type="tel" className="select" placeholder="Your Phone" />
              <i class="fa-solid fa-phone fa-rotate-270"></i>
            </div>
            <div className="inputElement">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                locale={ru}
                type="text"
                className="select"
                placeholder="ДД/ММ/ГГ"
              />
              <i class="fa-solid fa-calendar-days"></i>
            </div>
          </div>
          <button className="btn">Записаться на прием</button>
        </form>
      </div>
    </section>
  );
}
export default BookAppointment;
