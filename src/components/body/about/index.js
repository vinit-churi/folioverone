import React from "react";
import "./about.css";
import Coding from "../../../assets/coding.png";
import SocialContact from "../../common/social-contact/index";
const About = () => {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello there 👋, I'm
          <br /> <span>Vinit Churi</span>.
          <br /> I like experimenting with the web.
        </div>
        <div className="about-photo">
          <img src={Coding} alt="coding" className="about_image" />
        </div>
      </div>
      <SocialContact />
    </div>
  );
};

export default About;
