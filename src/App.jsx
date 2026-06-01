import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Team from "./Components/Team";
import About from "./Components/About";
import Products from "./Components/Products";
import Technology from "./Components/Technology";
import Vision from "./Components/Vision";
import FAQ from "./Components/FAQ";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Team />
        <Technology />
        <Vision />
        <FAQ />
        <Contact />
        <Footer />
        {/* Future sections like Products, Team, etc. will be added here */}
      </main>
    </BrowserRouter>
  );
}

export default App;
