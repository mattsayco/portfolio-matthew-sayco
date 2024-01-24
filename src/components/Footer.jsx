import { FaLinkedinIn, FaSquareGithub, FaEnvelope } from "react-icons/fa6";

export default function Footer() {
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
      <footer id="footer">
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
        <diiv className="footer-copyright">
          <h2>© 2024 Matthew Paul Sayco</h2>
        </diiv>
      </footer>
    </>
  );
}
