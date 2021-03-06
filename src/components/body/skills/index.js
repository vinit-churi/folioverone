import React from "react";
import "./skills.css";
import Seperator from "../../common/seperator/Seperator";
import { SkillsData } from "../../data/skills";
import SkillCard from "./SkillCard";
const Skills = () => {
  const data = SkillsData;
  return (
    <div className="skills">
      <Seperator />
      <label id="skills" className="section-title">
        Skills
      </label>
      <div className="skills-container">
        {data.map((item) => {
          return (
            <div className="skills-section">
              <label className="skills-section-title">{item.type}</label>
              <div className="skills-list">
                {item.list.map((skill) => {
                  return <SkillCard skill={skill} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
