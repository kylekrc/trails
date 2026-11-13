import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <main id="top" className="min-h-screen overflow-x-clip bg-cream text-[#292D25]">
      <Navbar />
      <Hero />
      <Testimonials />
      <Gallery />
      <Footer />
      <ScrollToTop />
    </main>
  );
}

export default App;
