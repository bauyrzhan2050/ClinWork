import React, { useState } from "react";
import "../css/mainBlock.css";
import logo from "../img/logo.png";
import MySlider from "./MySlider";
import AppointmentModal from "./AppontmentModal";

function Header({ callModal }) {
  return (
    <header>
      <div className="container">
        <a href="#">
          <img src={logo} alt="logo" />
        </a>
        <menu>
          <li>
            <a href="#">Главная</a>
          </li>
          <li>
            <a href="#">О нас</a>
          </li>
          <li>
            <a href="#">Услуги</a>
          </li>
          <li>
            <a href="#">Врачи</a>
          </li>
          <li>
            <a href="#">Отзывы</a>
          </li>
          <li>
            <a href="#">Контакты</a>
          </li>
        </menu>
        <button className="btn" onClick={callModal}>
          Записаться
        </button>
      </div>
    </header>
  );
}
function MainBlock() {
  const [hello, setHello] = useState(false);
  const callModal = () => {
    setHello(!hello);
  };
  return (
    <section className="main-block">
      <Header callModal={callModal} />
      {hello && <AppointmentModal hello={true} />}
      <MySlider />
    </section>
  );
}
export default MainBlock;
