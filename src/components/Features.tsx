import { Zap, Shield, Layers, Cloud, BarChart3, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance that loads in milliseconds. Your users will love the speed.",
  },
  {
    icon: Shield,
    title: "Secure by Default",
    description: "Enterprise-grade security with end-to-end encryption and regular audits.",
  },
  {
    icon: Layers,
    title: "Seamless Integration",
    description: "Connect with your favorite tools through our robust API and webhooks.",
  },
  {
    icon: Cloud,
    title: "Cloud Native",
    description: "Built for the cloud with automatic scaling and 99.9% uptime guarantee.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Deep insights into your data with beautiful, actionable dashboards.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered",
    description: "Leverage cutting-edge AI to automate tasks and boost productivity.",
  },
];

const Features = () => {
  return (
    <section className="py-24 px-4 bg-gradient-subtle">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features that help you build, launch, and grow your business faster than ever before.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-8 pb-6 px-6">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
