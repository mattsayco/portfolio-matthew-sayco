/* eslint-disable react/prop-types */
// export default function NavLinks({navLinksRefArr}) {
export default function NavLinks({
  aboutRef,
  techStackRef,
  workExpRef,
  portfolioRef,
  contactRef,
  closeMenu,
}) {
  function handleScroll(ref) {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    closeMenu?.();
  }

  return (
    <>
      <li onClick={() => handleScroll(aboutRef)}>About</li>
      <li onClick={() => handleScroll(techStackRef)}>Tech Stack</li>
      <li onClick={() => handleScroll(workExpRef)}>Experience</li>
      <li onClick={() => handleScroll(portfolioRef)}>Portfolio</li>
      <li onClick={() => handleScroll(contactRef)}>Contact</li>
    </>
  );
}
