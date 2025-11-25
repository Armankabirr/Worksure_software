import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-workspace.jpg";

const Hero = () => {
  return (
    <section className="container mx-auto px-6 py-20 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-in">
          <p className="text-sm text-primary uppercase tracking-widest font-semibold">
            Quality service at a fair price
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-foreground">
            Your One-Stop Solution for Every Service Needed
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We provide trustworthy help using the least amount of time, energy, and budget possible.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Get Start Now
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105">
              View All Services
            </Button>
          </div>
        </div>
        
        <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-50"></div>
          <img 
            src={heroImage} 
            alt="Modern workspace with laptop and plants" 
            className="relative rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;