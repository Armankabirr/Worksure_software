import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-workspace.jpg";

const Hero = () => {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-sm text-muted-foreground uppercase tracking-wide">
            Quality service at a fair price
          </p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-foreground">
            Your One-Stop Solution for Every Service Needed
          </h1>
          <p className="text-lg text-muted-foreground">
            We provide trustworthy help using the least amount of time, energy, and budget possible.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
              Get Start Now
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-foreground hover:bg-foreground hover:text-background">
              View All Services
            </Button>
          </div>
        </div>
        
        <div className="relative">
          <img 
            src={heroImage} 
            alt="Modern workspace with laptop and plants" 
            className="rounded-2xl shadow-lg w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;