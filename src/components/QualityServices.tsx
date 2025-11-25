import { Button } from "@/components/ui/button";
import teamIllustration from "@/assets/team-illustration.jpg";

const QualityServices = () => {
  return (
    <section className="container mx-auto px-6 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none"></div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative">
        <div className="space-y-8 animate-fade-in">
          <p className="text-sm text-primary uppercase tracking-widest font-semibold">
            Affordable Excellence
          </p>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight text-foreground">
            High-Quality and Friendly Services at Fair Prices
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We provide comprehensive and affordable services designed to fit your needs, budget, and schedule with minimal disruption.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            Hire Expert
          </Button>
        </div>
        
        <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-50"></div>
          <img 
            src={teamIllustration} 
            alt="Diverse team of service professionals" 
            className="relative rounded-2xl w-full h-auto shadow-2xl transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default QualityServices;