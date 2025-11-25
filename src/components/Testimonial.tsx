import { Button } from "@/components/ui/button";
import { Star, Quote } from "lucide-react";

const Testimonial = () => {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-foreground">
            Feedback About Their Experience With Us
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We listened to every client of ours about their satisfaction & this is what we got from them in return.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
            Get Start
          </Button>
        </div>

        <div className="bg-card rounded-2xl p-8 shadow-lg relative">
          <Quote className="absolute top-8 right-8 h-16 w-16 text-primary opacity-20" />
          
          <div className="flex items-start gap-6 mb-6">
            <div className="w-20 h-20 rounded-full bg-muted flex-shrink-0 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-primary to-accent"></div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-1">Brad Robertson</h3>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
            </div>
          </div>
          
          <p className="text-muted-foreground leading-relaxed italic">
            "This team is top-notch! They were professional, punctual, and did an excellent job. 
            Highly recommended if you're looking for reliable service. Will definitely use them again!"
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;