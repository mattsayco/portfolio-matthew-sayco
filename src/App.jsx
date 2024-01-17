// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import NavBar from "./components/NavBar";
import "./scss/main.scss";
import Landing from "./sections/Landing";
import AboutMeSkills from "./sections/AboutMeSkills";
import Experiences from "./sections/Experiences";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <NavBar></NavBar>
      <Landing></Landing>
      <AboutMeSkills></AboutMeSkills>
      <Experiences></Experiences>
    </>
  );
}

export default App;
