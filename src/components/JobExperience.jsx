/* eslint-disable react/prop-types */
export default function JobExperience({ title, date, description }) {
  return (
    <div className="company-job">
      <h2>{title}</h2>
      <h3>{date}</h3>
      <p>{description}</p>
    </div>
  );
}
