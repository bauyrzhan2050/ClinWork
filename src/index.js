import React from "react";
import ReactDOM from "react-dom/client";
import MainBlock from "./components/MainBlock";
import reportWebVitals from "./reportWebVitals";
import "../src/css/main.css";
import AboutBlock from "./components/AboutBlock";
import FileServicesBlock from "./components/FileServicesBlock";
import ConsultationBlock from "./components/ConsultationBlock";
import OurStuff from "./components/OurStuff";
import OfferBlock from "./components/OfferBlock";
import BookAppointment from "./components/BookAppointment";
import FooterBlock from "./components/FooterBlock";
import ResponseBlock from "./components/ResponseBlock";
import CallBlock from "./components/CallBlock";
import AppointmentModal from "./components/AppontmentModal";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppointmentModal />
    <MainBlock />
    <AboutBlock />
    <FileServicesBlock />
    <ConsultationBlock />
    <OurStuff />
    <OfferBlock />
    <BookAppointment />
    <ResponseBlock />
    <FooterBlock />
    <CallBlock />
  </React.StrictMode>
);

reportWebVitals();
