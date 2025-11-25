import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import QualityServices from "@/components/QualityServices";
import About from "@/components/About";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="home">
        <Hero />
        <div id="service">
          <Services />
        </div>
        <QualityServices />
        <About />
        <Testimonial />
      </main>
      <Footer />
    </div>
  );
};

export default Index;