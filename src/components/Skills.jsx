/* eslint-disable react/prop-types */
import { IconContext } from "react-icons";
export default function Skills({ headerIcon, title, skillsArr }) {
  return (
    <IconContext.Provider value={{ className: "icon-provider" }}>
      <div className="skills-main">
        <div className="header-container">
          <span className="header-icon">{headerIcon}</span>
        </div>
        <h1>{title}</h1>
        <div className="skill-container">
          {skillsArr.map(({ title, icon }) => {
            return (
              <div className="skill-icon-container" key={title}>
                <span>{icon}</span>
                <p>{title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </IconContext.Provider>
  );
}
