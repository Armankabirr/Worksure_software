import ServiceCard from "./ServiceCard";
import cleaningTeam from "@/assets/cleaning-team.jpg";
import securityTech from "@/assets/security-tech.jpg";
import electrician from "@/assets/electrician.jpg";
import babysitter from "@/assets/babysitter.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Services = () => {
  const services = [
    {
      image: cleaningTeam,
      title: "Cleaning",
      description: "Whether it's daily maintenance or a deep-clean, our professional team will leave your space spotless with attention to every detail.",
      alt: "Professional cleaning team in orange WorkSure shirts"
    },
    {
      image: securityTech,
      title: "Home Security",
      description: "Your security, our priority. With a full-stack security guard and safe, we will provide 24/7 care to keep your property safe.",
      alt: "Security technician installing home security system"
    },
    {
      image: electrician,
      title: "Electrician",
      description: "From minor repairs to complete rewiring, our certified electricians provide safe and effective electrical solutions for your property.",
      alt: "Professional electrician working on electrical panel"
    },
    {
      image: babysitter,
      title: "Babysitter",
      description: "Trusted and experienced babysitters who provide loving care for your children. Background-checked professionals ensuring your peace of mind.",
      alt: "Professional babysitter caring for children"
    }
  ];

  return (
    <section className="container mx-auto px-6 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 relative">
        <div className="animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight text-foreground">
            We Always Provide The Best Service
          </h2>
        </div>
        <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h3 className="text-3xl font-bold text-foreground">Services</h3>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Choose from our wide variety of effective, affordable, high-quality cleaning services.
          </p>
        </div>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-7xl mx-auto relative"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {services.map((service, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard {...service} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex left-2 bg-primary text-primary-foreground hover:bg-primary/90" />
        <CarouselNext className="hidden md:flex right-2 bg-primary text-primary-foreground hover:bg-primary/90" />
      </Carousel>
    </section>
  );
};

export default Services;