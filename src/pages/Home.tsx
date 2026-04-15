import SecondaryHero from "../components/SecondaryHero";
import LayeredCardSection from "../components/LayeredCards";
import BrandPartners from "../components/BrandPartners";
import BrandsWeWork from "../components/BrandsWeWork";
import Impact from "../components/Impact";
import Onboarding from "../components/Onboarding";
import Hero from "../components/MainHero";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="w-full h-[220vh]"></div>
      <div id="brands-we-work">
        <BrandsWeWork />
      </div>
      <div id="how-it-works">
        <SecondaryHero />
        <LayeredCardSection />
      </div>
      <div id="partners">
        <BrandPartners />
      </div>
      <div id="impact">
        <Impact />
      </div>
      <Onboarding />
    </>
  );
};

export default Home;
