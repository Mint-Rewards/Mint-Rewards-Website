import SecondaryHero from "../components/SecondaryHero";
import LayeredCardSection from "../components/LayeredCards";
import BrandPartners from "../components/BrandPartners";
import BrandsWeWork from "../components/BrandsWeWork";
import Impact from "../components/Impact";
import Onboarding from "../components/Onboarding";
// import Hero from "../components/MainHero";
import ParallaxHeroNew from "../components/ParallaxHeroNew";
import FloatingElementsNew from "../components/FloatingElementsNew";
import GradientWaveNew from "../components/GradientWaveNew";

const HomeTwo = () => {
  return (
    <>
      {/* New Mint-Branded Hero Section with Parallax */}
      <div className="relative -mt-17">
        <ParallaxHeroNew />
        <FloatingElementsNew />
        <GradientWaveNew />
      </div>

      {/* Original Sections - Kept Intact */}
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

export default HomeTwo;
