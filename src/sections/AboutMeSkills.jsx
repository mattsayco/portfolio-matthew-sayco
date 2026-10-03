import {
  FaCss3Alt,
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
  SiDotnet,
  SiMicrosoftsqlserver,
  SiMicrosoftazure,
} from "react-icons/si";
import { RiAngularjsFill, RiReactjsFill } from "react-icons/ri";
import Skills from "../components/Skills";

// eslint-disable-next-line react/prop-types
export default function AboutMeSkills({ aboutRef, techStackRef }) {
  const frontendSkills = [
    { title: "HTML", icon: <FaHtml5 /> },
    { title: "CSS", icon: <FaCss3Alt /> },
    { title: "Sass", icon: <FaSass /> },
    { title: "Bootstrap", icon: <FaBootstrap /> },
    { title: "ReactJS", icon: <RiReactjsFill /> },
    { title: "Angular", icon: <RiAngularjsFill /> },
  ];

  const backendSkills = [
    { title: "NodeJS", icon: <FaNodeJs /> },
    { title: "ASP.Net", icon: <SiDotnet /> },
    { title: "Azure", icon: <SiMicrosoftazure /> },
    { title: "Firebase", icon: <SiFirebase /> },
    { title: "MySQL", icon: <SiMysql /> },
    { title: "MSSQL", icon: <SiMicrosoftsqlserver /> },
  ];

  return (
    <section id="about-me-skills">
      <section id="about-parent" ref={aboutRef}>
        <section id="about">
          <h1>Hi, I’m Matthew. Nice to meet you</h1>
          <p data-aos="fade-up" data-aos-delay="400">
            I am an experienced software developer and team leader with a proven
            track record of delivering timely updates and enhancements and
            improving software performance. Skilled in devising and executing
            comprehensive test plans to ensure functionality and security meet
            industry standards. A goal-oriented professional with solid
            leadership, coordination, and planning skills, ready to take on new
            challenges in the software development industry.
          </p>
        </section>
      </section>
      <section id="skill-parent" ref={techStackRef}>
        <section id="skills">
          {/* <h1>Tech Stack</h1> */}
          <div id="skills-container">
            <Skills
              title="Frontend"
              headerIcon={<FaDesktop />}
              skillsArr={frontendSkills}
            ></Skills>
            <Skills
              title="Backend"
              headerIcon={<FaCode />}
              skillsArr={backendSkills}
            ></Skills>
          </div>
        </section>
      </section>
    </section>
  );
}
