import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Product</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#security" className="hover:text-primary transition-colors">Security</a></li>
              <li><a href="#roadmap" className="hover:text-primary transition-colors">Roadmap</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#blog" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#careers" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#press" className="hover:text-primary transition-colors">Press</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#docs" className="hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#api" className="hover:text-primary transition-colors">API Reference</a></li>
              <li><a href="#support" className="hover:text-primary transition-colors">Support</a></li>
              <li><a href="#status" className="hover:text-primary transition-colors">Status</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#privacy" className="hover:text-primary transition-colors">Privacy</a></li>
              <li><a href="#terms" className="hover:text-primary transition-colors">Terms</a></li>
              <li><a href="#security" className="hover:text-primary transition-colors">Security</a></li>
              <li><a href="#cookies" className="hover:text-primary transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2024 Your SaaS Company. All rights reserved.
          </p>
          
          <div className="flex gap-4">
            <a href="#twitter" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#github" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="#linkedin" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:contact@example.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
