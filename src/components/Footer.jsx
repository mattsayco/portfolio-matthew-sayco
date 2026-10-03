/* eslint-disable react/prop-types */
import { FaLinkedinIn, FaSquareGithub, FaEnvelope } from "react-icons/fa6";

export default function Footer({ contactRef }) {
  const currentYear = new Date().getFullYear();
  const footerIconsArr = [
    { title: "LinkedIn", icon: <FaLinkedinIn />, link: "" },
    { title: "Github", icon: <FaSquareGithub />, link: "" },
    {
      title: "Email",
      icon: <FaEnvelope />,
      link: "mailto:mattsayco@gmail.com",
    },
  ];
  return (
    <>
      <footer id="footer" ref={contactRef}>
        <h1>Get in Touch</h1>
        <div className="footer-container">
          {footerIconsArr.map(({ title, icon, link }) => {
            return (
              <span key={title} href={link} className="footer-icon">
                {icon}
              </span>
            );
          })}
        </div>
        <div className="footer-copyright">
          <h2>© {currentYear} Matthew Paul Sayco</h2>
        </div>
      </footer>
    </>
  );
}
