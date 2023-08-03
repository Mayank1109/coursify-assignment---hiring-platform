import React from "react";
import "./extra.css";
import extra from "../../assets/extra.png";
const Extra = () => {
  return (
    <section className="extra section" id="about">
      <div className="extra__container container grid">
        <div className="extra__data">
          <h2 className="section__title extra_title">
            Set up personalized job search alerts
          </h2>
          <a href="#">
            <button className="button extra_btn">Sign up</button>
          </a>
        </div>
        <img src={extra} alt="" className="extra__img" />
      </div>
    </section>
  );
};

export default Extra;
