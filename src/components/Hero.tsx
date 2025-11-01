import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-black/20" />
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      <div className="container relative z-10 px-4 py-32 mx-auto text-center animate-fade-up">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Build Your SaaS Product
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-accent">
            With Confidence
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
          A complete landing page template designed for modern SaaS businesses. 
          Launch faster, convert better, scale effortlessly.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 shadow-elegant text-lg px-8"
          >
            Get Started Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-lg px-8"
          >
            <Play className="mr-2 h-5 w-5" />
            Watch Demo
          </Button>
        </div>
        
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-white/80 text-sm">
          <div className="flex items-center gap-2">
            ✓ No credit card required
          </div>
          <div className="flex items-center gap-2">
            ✓ 14-day free trial
          </div>
          <div className="flex items-center gap-2">
            ✓ Cancel anytime
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
