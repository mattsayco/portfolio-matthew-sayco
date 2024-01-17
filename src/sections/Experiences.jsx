import CompanyExperience from "../components/CompanyExperience";
import Company1 from "../../public/Encompass logo.png";
import Company2 from "../../public/DSDLink logo.png";
import CompaniesWorked from "../components/CompaniesWorked";

export default function Experiences() {
  const companyExperienceArr = [
    {
      company: "Giant International Software Station Inc",
      jobExperienceArr: [
        {
          title: "Development Team Lead",
          date: "May 2021 - May 2023",
          description:
            "Managed four front end developers to develop a payment processing platform where users can pay all their invoices, view their purchase history, and send their previous receipts through email. This resulted in an average of $51,000,000+ transaction volume quarterly and an average of 34,000+ transactions per quarter in under two years.",
        },
        {
          title: "iOS Mobile Developer",
          date: "November 2018 - May 2021",
          description:
            "Develop and maintained a mobile CRM application which is focused on the Sales execution. This includes messaging, sending invoices or receipts to the designated email, and task delegation. Created APIs using .NET core but mainly used the native iOS which uses Objective-C as the language.",
        },
      ],
    },
    {
      company: "Tingkersoft",
      jobExperienceArr: [
        {
          title: "Junior Software Developer",
          date: "September 2017 - November 2018",
          description:
            "Helped develop a database migration SPA that would help users to easily query the needed data and transform it into reports. I mainly develop the security of the app together with the login credentials",
        },
      ],
    },
  ];
  const companyWorkedWithArr = [
    { company: "Encompass", icon: Company1 },
    { company: "DSDLink", icon: Company2 },
  ];

  return (
    <>
      <section id="experience">
        <h1>Experiences</h1>
        {companyExperienceArr.map(({ company, jobExperienceArr }, index) => {
          return (
            <CompanyExperience
              company={company}
              jobExperienceArr={jobExperienceArr}
              key={`${company}-${index}`}
            ></CompanyExperience>
          );
        })}
        <CompaniesWorked
          companyWorkedWithArr={companyWorkedWithArr}
        ></CompaniesWorked>
      </section>
    </>
  );
}
