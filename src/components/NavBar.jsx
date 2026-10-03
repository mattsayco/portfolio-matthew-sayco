/* eslint-disable react/prop-types */
import { useState } from "react";
import NavLink from "./NavLink";

export default function NavBar({
  aboutRef,
  techStackRef,
  workExpRef,
  portfolioRef,
  contactRef,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <>
      <nav id="navbar">
        <button
          id="nav-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          className={isMenuOpen ? "open" : ""}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <NavLink
          aboutRef={aboutRef}
          techStackRef={techStackRef}
          workExpRef={workExpRef}
          portfolioRef={portfolioRef}
          contactRef={contactRef}
          isMenuOpen={isMenuOpen}
          closeMenu={closeMenu}
        ></NavLink>
      </nav>
      {isMenuOpen && <div id="nav-overlay" onClick={closeMenu}></div>}
    </>
  );
}
