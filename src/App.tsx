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
import Contact from "./components/Contact";
import { Analytics } from "@vercel/analytics/next"

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
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/co2-calculator" element={<CO2Calculator />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/app" element={<AppRedirect />} />
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
