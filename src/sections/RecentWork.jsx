import Project from "../components/Recent Work/Project";
import Project1 from "../../public/Project1.png";
import Project2 from "../../public/Project2.jpg";
// eslint-disable-next-line react/prop-types
export default function RecentWork({ portfolioRef }) {
  const projects = [
    { image: Project1, description: "Portfolio1", link: "here" },
    { image: Project2, description: "Portfolio2", link: "here" },
    // { image: Project1, description: "Portfolio", link: "here" },
    // { image: Project2, description: "Portfolio", link: "here" },
    // { image: Project1, description: "Portfolio", link: "here" },
    // { image: Project2, description: "Portfolio", link: "here" },
  ];
  return (
    <section id="recent-work" ref={portfolioRef}>
      <div id="recent-work-header">
        <h1>My Recent Work</h1>
        <h2>Here are a few projects I&rsquo;ve worked on</h2>
      </div>
      <div id="project-list">
        {projects.map(({ image, description, link }) => {
          return (
            <Project
              image={image}
              description={description}
              link={link}
              key={description}
            ></Project>
          );
        })}
      </div>
    </section>
  );
}
