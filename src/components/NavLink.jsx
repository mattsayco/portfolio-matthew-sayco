/* eslint-disable react/prop-types */
import NavLinks from "./NavLinks";

export default function NavLink({
  aboutRef,
  techStackRef,
  workExpRef,
  portfolioRef,
  contactRef,
  isMenuOpen,
  closeMenu,
}) {
  return (
    <>
      <ul id="nav-link" className={isMenuOpen ? "open" : ""}>
        <NavLinks
          aboutRef={aboutRef}
          techStackRef={techStackRef}
          workExpRef={workExpRef}
          portfolioRef={portfolioRef}
          contactRef={contactRef}
          closeMenu={closeMenu}
        ></NavLinks>
      </ul>
    </>
  );
}
