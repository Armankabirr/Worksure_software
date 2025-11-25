import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">WorkSure</h3>
            <p className="text-sm leading-relaxed opacity-90">
              We are the best place to get quality services at fair prices, designed for businesses and homes alike.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-primary transition-colors opacity-90 hover:opacity-100">Services</a></li>
              <li><a href="#" className="text-sm hover:text-primary transition-colors opacity-90 hover:opacity-100">About Us</a></li>
              <li><a href="#" className="text-sm hover:text-primary transition-colors opacity-90 hover:opacity-100">Our Team</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold">Know More</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-primary transition-colors opacity-90 hover:opacity-100">Our Story</a></li>
              <li><a href="#" className="text-sm hover:text-primary transition-colors opacity-90 hover:opacity-100">FAQs</a></li>
              <li><a href="#" className="text-sm hover:text-primary transition-colors opacity-90 hover:opacity-100">Get In Touch</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold">Newsletter</h4>
            <p className="text-sm opacity-90">Subscribe to our newsletter</p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Email Address" 
                className="bg-background text-foreground"
              />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Send
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8 text-center">
          <p className="text-sm opacity-75">
            © 2024 WorkSure. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;