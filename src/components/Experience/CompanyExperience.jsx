/* eslint-disable react/prop-types */
import JobExperience from "./JobExperience";

export default function CompanyExperience({ company, jobExperienceArr }) {
  return (
    <>
      {/* <hr /> */}
      <div className="company-experience">
        <h1>{company}</h1>
        {jobExperienceArr.map(({ title, date, description }) => {
          return (
            <JobExperience
              title={title}
              date={date}
              description={description}
              key={`${title}-${date}`}
            ></JobExperience>
          );
        })}
      </div>
    </>
  );
}
