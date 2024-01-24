// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import NavBar from "./components/NavBar";
import "./scss/main.scss";
import Landing from "./sections/Landing";
import AboutMeSkills from "./sections/AboutMeSkills";
import Experiences from "./sections/Experiences";
import RecentWork from "./sections/RecentWork";
import Footer from "./components/Footer";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <NavBar></NavBar>
      <Landing></Landing>
      <AboutMeSkills></AboutMeSkills>
      <Experiences></Experiences>
      <RecentWork></RecentWork>
      <Footer></Footer>
    </>
  );
}

export default App;
