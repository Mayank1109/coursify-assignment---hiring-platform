import React from "react";
import "./services.css";
import time from "../../assets/time.png";
const Services = () => {
  return (
    <section className="service section" id="about">
      <div className="service__container container grid">
        <div className="service__data">
          <span className="second">Introducing</span>
          <h2 className="section__title">
            A complete HR Platform saves your time.
          </h2>
          <span className="section__subtitle sub">
            Streamlines your workflow by automatically including services for
            both the recruiters and applicants , in one platform.
          </span>
        </div>
        <img src={time} alt="" className="service__img" />
      </div>
    </section>
  );
};

export default Services;
