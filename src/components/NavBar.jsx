// import { useRef } from "react";
import NavLink from "./NavLink";

export default function NavBar() {
  // const aboutRef = useRef(null);
  // const techStackRef = useRef(null);
  // const workExpRef = useRef(null);
  // const portfolioRef = useRef(null);
  // const contactRef = useRef(null);

  // const arrRef = {aboutRef, techStackRef, workExpRef, portfolioRef, contactRef};

  return (
    <>
      <nav id="navbar">
        {/* <NavLink navLinksRefArr={arrRef}></NavLink>
         */}
        <NavLink></NavLink>
        {/* <h1>Hello</h1> */}
      </nav>
    </>
  );
}
