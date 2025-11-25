import ServiceCard from "./ServiceCard";
import cleaningTeam from "@/assets/cleaning-team.jpg";
import securityTech from "@/assets/security-tech.jpg";
import electrician from "@/assets/electrician.jpg";

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
    }
  ];

  return (
    <section className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-foreground">
            We Always Provide The Best Service
          </h2>
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-foreground">Services</h3>
          <p className="text-muted-foreground leading-relaxed">
            Choose from our wide variety of effective, affordable, high-quality cleaning services.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;