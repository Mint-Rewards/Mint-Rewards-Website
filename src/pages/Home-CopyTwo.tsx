import SecondaryHero from "../components/SecondaryHero";
import LayeredCardSection from "../components/LayeredCards";
import BrandPartners from "../components/BrandPartners";
import BrandsWeWork from "../components/BrandsWeWork";
import Impact from "../components/Impact";
import OnboardingNew from "../components/OnboardingNew";
import MobileHero from "../components/MobileHero";

const HomeThree = () => {
  return (
    <>
      {/* New Mobile-First Hero with Mockup */}
      <div className="relative -mt-17">
        <MobileHero />
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
      <OnboardingNew />
    </>
  );
};

export default HomeThree;
