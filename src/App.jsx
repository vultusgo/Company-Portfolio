import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Services from "./Components/Services";
import FeaturedProduct from "./Components/FeaturedProduct";
import WhyChooseUs from "./Components/WhyChooseUs";
import FAQ from "./Components/FAQ";
import Contact from "./Components/Contact";
import FinalCTA from "./Components/FinalCTA";
import Footer from "./Components/Footer";
import AboutPage from "./Components/AboutPage";
import ContactPage from "./Components/ContactPage";
import ProductsOverview from "./Components/ProductPages/ProductsOverview";
import ServicesOverview from "./Components/ServicePages/ServicesOverview";
import WebDevelopment from "./Components/ServicePages/WebDevelopment";
import MobileAppDevelopment from "./Components/ServicePages/MobileAppDevelopment";
import CustomSoftwareDevelopment from "./Components/ServicePages/CustomSoftwareDevelopment";
import AIMachineLearning from "./Components/ServicePages/AIMachineLearning";
import UIUXDesign from "./Components/ServicePages/UIUXDesign";
import DigitalTransformation from "./Components/ServicePages/DigitalTransformation";
import MaintenanceSupport from "./Components/ServicePages/MaintenanceSupport";
import FacialRecognitionAttendance from "./Components/ProductPages/FacialRecognitionAttendance";

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <FeaturedProduct />
        <WhyChooseUs />
        <FAQ />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

function AboutUsPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutPage />
      </main>
      <Footer />
    </>
  );
}

function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <ServicesOverview />
      </main>
      <Footer />
    </>
  );
}

function ServicePage({ component: Component }) {
  return (
    <>
      <Navbar />
      <main>
        <Component />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/products" element={<ProductsOverview />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/web-development" element={<ServicePage component={WebDevelopment} />} />
        <Route path="/services/mobile-app-development" element={<ServicePage component={MobileAppDevelopment} />} />
        <Route path="/services/custom-software-development" element={<ServicePage component={CustomSoftwareDevelopment} />} />
        <Route path="/services/ai-machine-learning" element={<ServicePage component={AIMachineLearning} />} />
        <Route path="/services/ui-ux-design" element={<ServicePage component={UIUXDesign} />} />
        <Route path="/services/digital-transformation" element={<ServicePage component={DigitalTransformation} />} />
        <Route path="/services/maintenance-support" element={<ServicePage component={MaintenanceSupport} />} />
        <Route path="/products/facial-recognition-attendance-system" element={<ServicePage component={FacialRecognitionAttendance} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;