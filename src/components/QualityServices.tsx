import { Button } from "@/components/ui/button";
import teamIllustration from "@/assets/team-illustration.jpg";

const QualityServices = () => {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-sm text-muted-foreground uppercase tracking-wide">
            Affordable Excellence
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-foreground">
            High-Quality and Friendly Services at Fair Prices
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We provide comprehensive and affordable services designed to fit your needs, budget, and schedule with minimal disruption.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
            Hire Expert
          </Button>
        </div>
        
        <div className="relative">
          <img 
            src={teamIllustration} 
            alt="Diverse team of service professionals" 
            className="rounded-2xl w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default QualityServices;