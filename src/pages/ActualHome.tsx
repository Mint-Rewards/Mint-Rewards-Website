import SecondaryHero from "../components/SecondaryHero";
import BrandPartners from "../components/BrandPartners";
import Impact from "../components/Impact";
import BrandsMarque from "../components/BrandsMarque";
import Header from "../components/Header";
import SectionCards from "../components/SectionCards";
import Onboarding from "../components/Onboarding";
import PageMeta from "../components/PageMeta";

const Home = () => {
  return (
    <>
      <PageMeta
        title="Mint Rewards — Get Rewarded for Recycling"
        description="Book a free collection, recycle what you already throw away, and earn points to spend with local brands across Pakistan."
      />
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
    </>
  );
};

export default Home;
