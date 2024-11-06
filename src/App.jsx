

import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import CommunityLife from './components/community_life/CommunityLife';
import SnowflakeEffect from "./components/SnowflakeEffect";
import StarBackground from "./components/StarBackground";
const App = () => {
  

  return (
    <div >
      <StarBackground />
      

      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <CommunityLife />
      <Contact />
    </div>
  );
};

export default App;
