/* eslint-disable react/prop-types */
import NavLinks from "./NavLinks";

// export default function NavLink({navLinksRefArr}) {
export default function NavLink() {
  return (
    <>
      <ul id="nav-link">
        {/* <NavLinks navLinksRefArr={navLinksRefArr}></NavLinks> */}
        <NavLinks></NavLinks>
      </ul>
    </>
  );
}
