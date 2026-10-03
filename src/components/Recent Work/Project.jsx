/* eslint-disable react/prop-types */
export default function Project({ image, description, link }) {
  return (
    <div className="project-card">
      <figure>
        <img src={image}></img>
        <figcaption>
          <h1>{description}</h1>
          <a>{link}</a>
        </figcaption>
      </figure>
    </div>
  );
}
