import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import QualityServices from "@/components/QualityServices";
import About from "@/components/About";
import Testimonial from "@/components/Testimonial";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      <Header />
      <main id="home">
        <Hero />
        <div id="service">
          <Services />
        </div>
        <QualityServices />
        <About />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;