import React from "react";
import "./work.css";
import Seperator from "../../common/seperator/Seperator";
import { WorkData } from "../../data/work";
import WorkCard from "./WorkCard";
const data = WorkData;
const Work = () => {
  return (
    <div className="work">
      <Seperator />
      <label className="section-title">Work</label>
      <div className="work-list">
        {data.map((item) => {
          return <WorkCard item={item} />;
        })}
      </div>
    </div>
  );
};

export default Work;
