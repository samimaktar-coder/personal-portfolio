import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import SocialLinks from "./components/contact/SocialLinks";

function App() {

  return (
    <>
      <Header />
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <SocialLinks />
    </>
  );
}

export default App;
