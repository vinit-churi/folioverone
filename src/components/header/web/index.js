import React from "react";
import "./web.css";
import { SiXcode } from "react-icons/si";
import { AiOutlineCode } from "react-icons/ai";
import { GoFileSubmodule } from "react-icons/go";
import { TiContacts } from "react-icons/ti";
const Web = () => {
  return (
    <div className="web">
      <div className="web-option option-icon">
        <a href="#project">
          <AiOutlineCode />
          Projects
        </a>
      </div>
      <div className="web-option option-icon">
        <a href="#skills">
          <SiXcode />
          Skills
        </a>
      </div>
      <div className="web-option option-icon">
        <a href="#work">
          <GoFileSubmodule />
          work
        </a>
      </div>
      <div className="web-option option-icon">
        <a href="#contact">
          <TiContacts />
          Contract
        </a>
      </div>
    </div>
  );
};

export default Web;
