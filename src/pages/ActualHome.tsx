import SecondaryHero from "../components/SecondaryHero";
import BrandPartners from "../components/BrandPartners";
import Impact from "../components/Impact";
import BrandsMarque from "../components/BrandsMarque";
import Header from "../components/Header";
import SectionCards from "../components/SectionCards";
import Onboarding from "../components/Onboarding";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <BrandsMarque />
        <div id="how-it-works">
          <SecondaryHero />
        </div>
        <SectionCards />
        <div id="partners">
          <BrandPartners />
        </div>
        <div id="impact">
          <Impact />
        </div>
        <Onboarding />
      </main>
    </>
  );
};

export default Home;
