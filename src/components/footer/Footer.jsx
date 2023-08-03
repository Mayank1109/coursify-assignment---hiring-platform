import React from "react";
import "./footer.css";
import Info from "./info";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container grid">
        <div className="ftr__container container grid">
          <div className="about__data">
            <h1 className="footer__title">GetHired!</h1>

            <div className="footer__social">
              <a href="" className="footer__social-link" target="_blank">
                <i className="uil uil-linkedin"></i>
              </a>
              <a href="" className="footer__social-link" target="_blank">
                <i className="uil uil-github"></i>
              </a>

              <a href="" className="footer__social-link" target="_blank">
                <i className="uil uil-envelope"></i>
              </a>
            </div>
          </div>
          <Info />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
