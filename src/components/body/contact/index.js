import React from "react";
import "./contact.css";
import SocialContact from "../../common/social-contact/index";
import Seperator from "../../common/seperator/Seperator";
import { AiOutlineCloudDownload } from "react-icons/ai";
const Contact = () => {
  return (
    <div id="contact" className="contact">
      <Seperator />
      <label className="section-title">Contact</label>
      <div className="contact-container">
        <div className="contact-left">
          <p>Want to get in touch? Contact me on any of the platform</p>
          <SocialContact />
        </div>
        <div className="download">
          <a href="www.google.com">
            <AiOutlineCloudDownload />
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
