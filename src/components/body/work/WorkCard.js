import React from "react";
import "./WorkCard.css";
const WorkCard = ({ item }) => {
  return (
    <div className="WorkCard">
      <img className="work-logo" src={item.companyLogo} alt="logo" />
      <div className="work-info">
        <label className="company-name">{item.company}</label>
        <div className="work-dates">
          <label>{item.dateJoining} </label>-<label> {item.dateEnd}</label>
        </div>
        <div className="work-desc">
          <p className="work">{item.work}</p>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
