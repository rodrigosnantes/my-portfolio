import Header from './components/header/Header';
import Banner from "./components/banner/Banner";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Formation from "./components/formation/Formation";
import Experiences from "./components/experiences/Experiences";
import Contact from "./components/contact/Contact";

export default function App() {

  return (
    <div className="App">
      <Header />
      <Banner />
      <About />
      <Skills />
      <Formation />
      <Experiences />
      <Contact />
    </div>
  );
};
