/* eslint-disable react/prop-types */
// export default function NavLinks({navLinksRefArr}) {
export default function NavLinks() {
  // function handleScroll(ref) {
  //     ref.current.scrollIntoView();
  //     document.getElementById("mobileMenu").offsetHeight > 0 &&
  //     document.querySelector("#mobileNav button").click();
  // }

  return (
    <>
      {/* {
            navLinksRefArr && navLinksRefArr.map((link) => {
                return <li onClick={handleScroll(link)} key={link}></li>
            })
        } */}
      <li>About</li>
      <li>Portfolio</li>
      <li>Contact</li>
      <li>Resume</li>
    </>
  );
}
