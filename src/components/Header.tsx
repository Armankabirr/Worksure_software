import { ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-card py-4 px-6 shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-primary">WorkSure</h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-foreground hover:text-primary transition-colors scroll-smooth">Home</a>
          <a href="#service" className="text-foreground hover:text-primary transition-colors scroll-smooth">Service</a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors scroll-smooth">About</a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors scroll-smooth">Contact</a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="hover:bg-accent">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <Button variant="default" size="icon" className="bg-primary hover:bg-primary/90">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;