import React from "react";
import "./about.css";
import Info from "./Info";
import formImg from "../../assets/form.png";
const About = () => {
  return (
    <section className="about section" id="about">
      <div className="about__container container grid">
        <img src={formImg} alt="" className="about__img" />

        <div className="about__data">
          <span className="second">Why Us</span>
          <h2 className="section__title">New way to get a Job</h2>
          <span className="section__subtitle sub">
            Once you gain access to the GetHired Platform you start out by
            adding your first team roles.
          </span>
          <Info />
        </div>
      </div>
    </section>
  );
};

export default About;
