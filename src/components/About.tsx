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
    <section className="container mx-auto px-6 py-16" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img 
            src={chefsImage} 
            alt="Professional chefs preparing food" 
            className="rounded-2xl shadow-lg w-full h-auto"
          />
        </div>

        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-foreground">
            Welcome To Our WorkSure Company!
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We make your space shine! Professional and reliable service company providing top-notch solutions for homes and businesses. Satisfaction guaranteed!
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>

          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
            Book Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;