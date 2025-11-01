import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <a href="/" className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              SaaSify
            </a>
            
            <div className="hidden md:flex gap-6">
              <a href="#features" className="text-foreground hover:text-primary transition-colors">
                Features
              </a>
              <a href="#pricing" className="text-foreground hover:text-primary transition-colors">
                Pricing
              </a>
              <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">
                Testimonials
              </a>
              <a href="#faq" className="text-foreground hover:text-primary transition-colors">
                FAQ
              </a>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost">Sign In</Button>
            <Button>Get Started</Button>
          </div>
          
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
        
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a href="#features" className="text-foreground hover:text-primary transition-colors">
                Features
              </a>
              <a href="#pricing" className="text-foreground hover:text-primary transition-colors">
                Pricing
              </a>
              <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">
                Testimonials
              </a>
              <a href="#faq" className="text-foreground hover:text-primary transition-colors">
                FAQ
              </a>
              <div className="flex flex-col gap-2 pt-4">
                <Button variant="ghost" className="w-full">Sign In</Button>
                <Button className="w-full">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
