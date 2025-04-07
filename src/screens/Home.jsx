import InfoScreen from "../components/InfoScreen";
import Tabs from "../components/Tabs";
import Projects from "../components/Projects";
import Technologies from "../components/Technologies";
import MobileFotter from "../components/MobileFotter";
import AboutShort from "../components/AboutShort";
import ContactMe from "../components/ContactMe";

function Home() {
  return (
    <section  className="home w-full">
      <Tabs />

      <InfoScreen />

      <Projects />

      <AboutShort />

      <Technologies />

      <ContactMe />

      <MobileFotter />
    </section>
  );
}

export default Home;
