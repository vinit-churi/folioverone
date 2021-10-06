import React, { useState } from "react";
import "./header.css";
import Web from "./web/index";
import Mobile from "./mobile/index";
import { AiOutlineAppstore } from "react-icons/ai";
const Header = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="header">
      <div className="logo">Vinit Churi</div>
      <div className="menu">
        <div className="web-menu">
          <Web />
        </div>
        <div className="mobile-menu">
          <div onClick={() => setIsOpen(!isOpen)}>
            <AiOutlineAppstore className="menuIcon" />
          </div>
          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  );
};

export default Header;
