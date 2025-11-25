import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import chefsImage from "@/assets/chefs.jpg";

const About = () => {
  const features = [
    "Calculation of work",
    "Lowest Budgets",
    "Profitable Plans",
    "Real-time Ideas",
    "Flexible Plans"
  ];

  return (
    <section className="container mx-auto px-6 py-20" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative animate-fade-in">
          <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-50"></div>
          <img 
            src={chefsImage} 
            alt="Professional chefs preparing food" 
            className="relative rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight text-foreground">
            Welcome To Our WorkSure Company!
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We make your space shine! Professional and reliable service company providing top-notch solutions for homes and businesses. Satisfaction guaranteed!
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-primary/5 transition-colors duration-300 group"
              >
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-foreground font-medium">{feature}</span>
              </div>
            ))}
          </div>

          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            Book Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;