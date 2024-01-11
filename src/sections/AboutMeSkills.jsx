import { IconContext } from "react-icons";
import {
  FaCss3Alt,
  FaFigma,
  FaHtml5,
  FaNodeJs,
  FaSass,
  FaCode,
  FaDesktop,
  FaBootstrap,
} from "react-icons/fa6";
import {
  SiMysql,
  SiFirebase,
  SiExpress,
  SiDotnet,
  SiMicrosoftsqlserver,
} from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";

export default function AboutMeSkills() {
  const frontendSkills = [
    { title: "HTML", icon: <FaHtml5 /> },
    { title: "CSS", icon: <FaCss3Alt /> },
    { title: "Figma", icon: <FaFigma /> },
    { title: "Sass", icon: <FaSass /> },
    { title: "Bootstrap", icon: <FaBootstrap /> },
    { title: "ReactJS", icon: <RiReactjsFill /> },
  ];

  const backendSkills = [
    { title: "ExpressJS", icon: <SiExpress /> },
    { title: "NodeJS", icon: <FaNodeJs /> },
    { title: "ASP.Net", icon: <SiDotnet /> },
    { title: "Firebase", icon: <SiFirebase /> },
    { title: "MySQL", icon: <SiMysql /> },
    { title: "MSSQL", icon: <SiMicrosoftsqlserver /> },
  ];

  return (
    <section id="about-me-skills">
      <section id="about-parent">
        <section id="about">
          <h1>Hi, I’m Matthew, Nice to meet you</h1>
          <p>
            I am an experienced software developer and team leader with a proven
            track record of delivering timely updates and enhancements and
            improving software performance. Skilled in devising and executing
            comprehensive test plans to ensure functionality and security meet
            industry standards. A goal-oriented professional with solid
            leadership, coordination, and planning skills, ready to take on new
            challenges in the software development industry.
          </p>
        </section>
        <IconContext.Provider value={{ className: "icon-provider" }}>
          <section id="skills">
            <div className="skills-main">
              <div className="header-container">
                <span className="header-icon">
                  <FaDesktop />
                </span>
              </div>
              <h1>Frontend</h1>
              <div className="skill-container">
                {frontendSkills.map(({ title, icon }) => {
                  return (
                    <div className="skill-icon-container" key={title}>
                      <span>{icon}</span>
                      <p>{title}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="skills-main">
              <div className="header-container">
                <span className="header-icon">
                  <FaCode />
                </span>
              </div>
              <h1>Backend</h1>
              <div className="skill-container">
                {backendSkills.map(({ title, icon }) => {
                  return (
                    <div className="skill-icon-container" key={title}>
                      <span>{icon}</span>
                      <p>{title}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </IconContext.Provider>
      </section>
    </section>
  );
}
