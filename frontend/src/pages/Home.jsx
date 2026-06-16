import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrustedBy from "../components/TrustedBy";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="min-h-screen bg-[#0F172A]">
      <Navbar />

      <Hero />

      <TrustedBy />

      <div id="features">
        <Features />
      </div>

      <div id="how-it-works">
        <HowItWorks />
      </div>

      <div id="cta">
        <CTA />
      </div>

      <Footer />
    </div>
  );
}

export default Home;