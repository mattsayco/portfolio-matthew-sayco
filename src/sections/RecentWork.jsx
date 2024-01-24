import Project from "../components/Recent Work/Project";
import Project1 from "../../public/Project1.png";
import Project2 from "../../public/Project2.jpg";
export default function RecentWork() {
  const projects = [
    { image: Project1, description: "Portfolio", link: "here" },
    { image: Project2, description: "Portfolio", link: "here" },
    // { image: Project1, description: "Portfolio", link: "here" },
    // { image: Project2, description: "Portfolio", link: "here" },
    // { image: Project1, description: "Portfolio", link: "here" },
    // { image: Project2, description: "Portfolio", link: "here" },
  ];
  return (
    <section id="recent-work">
      <div id="recent-work-header">
        <h1>My Recent Work</h1>
        <h2>Here are a few projects I've worked on</h2>
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
