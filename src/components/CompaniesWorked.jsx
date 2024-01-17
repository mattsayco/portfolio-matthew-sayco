/* eslint-disable react/prop-types */
export default function CompaniesWorked({ companyWorkedWithArr }) {
  return (
    <div className="worked-with">
      <h1>Worked with companies such as:</h1>
      <div className="previous-company">
        {companyWorkedWithArr.map(({ company, icon }) => {
          return <img src={icon} key={company}></img>;
        })}
      </div>
    </div>
  );
}
