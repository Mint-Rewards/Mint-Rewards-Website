import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarDark from "./components/NavbarDark";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/ActualHome";
import Personal from "./pages/Personal";
import Business from "./pages/Business";
import HowItWorks from "./pages/HowItWorks";
import CO2Calculator from "./pages/CO2Calculator";
import AppRedirect from "./pages/AppRedirect";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import FAQs from "./pages/FAQs";
import About from "./pages/About";
import Story from "./pages/Story";
import Careers from "./pages/Careers";
import NotFound from "./pages/NotFound";
import WasteManagement from "./pages/WasteManagement";
import Rewards from "./pages/Rewards";
import Impact from "./pages/Impact";
import Tracifai from "./pages/Tracifai";
import Sectors from "./pages/Sectors";
import Regulations from "./pages/Regulations";
import Contact from "./components/Contact";

const AppContent = () => {
  // Use NavbarDark for Home page, regular Navbar for others
  const NavbarComponent = NavbarDark;

  return (
    <div className="">
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/two" element={<HomeTwo />} />
        <Route path="/three" element={<HomeThree />} /> */}
        <Route path="/personal" element={<Personal />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/about" element={<About />} />
        <Route path="/story" element={<Story />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/business" element={<Business />} />
        <Route path="/business/waste-management" element={<WasteManagement />} />
        <Route path="/business/rewards" element={<Rewards />} />
        <Route path="/business/impact" element={<Impact />} />
        {/*
          Nested under /business/impact, and deliberately NOT in the top
          nav. The business menu is measured: NavbarDark notes its four
          tabs at 440px clearing the centred switch at about 1500, and
          three more would push that past 700 and collapse the nav on
          laptops again. The impact page is the hub these are reached
          from, which is the role the wireframe gives it anyway.
        */}
        <Route path="/business/impact/tracifai" element={<Tracifai />} />
        <Route path="/business/impact/sectors" element={<Sectors />} />
        <Route path="/business/impact/regulations" element={<Regulations />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/co2-calculator" element={<CO2Calculator />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/app" element={<AppRedirect />} />
        {/* Last, and a real page: an unmatched route used to render the
            navigation over nothing at all. */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
};

export default App;
