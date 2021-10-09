import React from "react";
import "./mobile.css";
import { CgCloseO } from "react-icons/cg";
import { SiXcode } from "react-icons/si";
import { AiOutlineCode } from "react-icons/ai";
import { GoFileSubmodule } from "react-icons/go";
import { TiContacts } from "react-icons/ti";
const Mobile = ({ isOpen, setIsOpen }) => {
  return (
    <div className="mobile">
      <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
        <CgCloseO />
      </div>
      <div className="mobile-options">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="mobile-option option-icon"
        >
          <a href="#projects">
            <AiOutlineCode />
            Projects
          </a>
        </div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="mobile-option option-icon"
        >
          <a href="#skills">
            <SiXcode />
            Skills
          </a>
        </div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="mobile-option option-icon"
        >
          <a href="#work">
            <GoFileSubmodule />
            work
          </a>
        </div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="mobile-option option-icon"
        >
          <a href="#contact">
            <TiContacts />
            Contract
          </a>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
