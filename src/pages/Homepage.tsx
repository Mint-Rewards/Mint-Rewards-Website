import Navbar from "../components/Navbar";
import SecondaryHero from "../components/SecondaryHero";
import LayeredCardSection from "../components/LayeredCards";
// import ParallaxImage from "../components/ParallaxImage";
import BrandPartners from "../components/BrandPartners";
import Impact from "../components/Impact";
import Onboarding from "../components/Onboarding";
import Footer from "../components/Footer";
import Hero from "../components/MainHero";

const HomePage = () => {
  return (
    <div className=" mx-auto">
      <Navbar />
      <Hero />
      <div className="w-full h-[220vh]"></div>
      <SecondaryHero />
      <LayeredCardSection />
      <BrandPartners />
      <Impact />
      <Onboarding />
      <Footer />
      {/* <ParallaxImage /> */}
    </div>
  );
};

export default HomePage;
