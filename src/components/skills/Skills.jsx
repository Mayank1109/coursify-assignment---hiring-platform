import React from "react";
import "./skills.css";
import { features } from "./data";
import Features from "./features";

const Skills = () => {
  return (
    <section className="skills section" id="features">
      <h2 className="section__title">Getting started is easy.</h2>
      <span className="section__subtitle work_sub">
        Create a profile and we'll match you with your dream companies and jobs
        in the world.{" "}
      </span>

      <div className="skills__container grid">
        {features.map((item) => {
          return <Features item={item} key={item.id} />;
        })}
      </div>
    </section>
  );
};

export default Skills;
