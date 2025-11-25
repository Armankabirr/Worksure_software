import { Button } from "@/components/ui/button";
import { Star, Quote } from "lucide-react";

const Testimonial = () => {
  return (
    <section className="container mx-auto px-6 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none"></div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative">
        <div className="space-y-8 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight text-foreground">
            Feedback About Their Experience With Us
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We listened to every client of ours about their satisfaction & this is what we got from them in return.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            Get Start
          </Button>
        </div>

        <div className="bg-card rounded-3xl p-10 shadow-2xl relative transform hover:scale-105 transition-all duration-500 border border-primary/10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <Quote className="absolute top-8 right-8 h-20 w-20 text-primary opacity-10" />
          
          <div className="flex items-start gap-6 mb-8">
            <div className="w-24 h-24 rounded-full bg-muted flex-shrink-0 overflow-hidden shadow-lg ring-4 ring-primary/20">
              <div className="w-full h-full bg-gradient-to-br from-primary to-accent"></div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Brad Robertson</h3>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary animate-scale-in" style={{ animationDelay: `${i * 0.1}s` }} />
                ))}
              </div>
            </div>
          </div>
          
          <p className="text-muted-foreground leading-relaxed italic text-lg relative z-10">
            "This team is top-notch! They were professional, punctual, and did an excellent job. 
            Highly recommended if you're looking for reliable service. Will definitely use them again!"
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;