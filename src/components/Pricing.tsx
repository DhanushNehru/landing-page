import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$29",
    description: "Perfect for individuals and small teams getting started",
    features: [
      "Up to 5 team members",
      "10GB storage",
      "Basic analytics",
      "Email support",
      "API access",
    ],
  },
  {
    name: "Professional",
    price: "$99",
    description: "For growing teams that need more power and flexibility",
    features: [
      "Up to 25 team members",
      "100GB storage",
      "Advanced analytics",
      "Priority support",
      "API access",
      "Custom integrations",
      "Advanced security",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with advanced needs",
    features: [
      "Unlimited team members",
      "Unlimited storage",
      "Enterprise analytics",
      "24/7 phone support",
      "API access",
      "Custom integrations",
      "Advanced security",
      "Dedicated account manager",
      "SLA guarantee",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your needs. All plans include a 14-day free trial.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative border-border hover:shadow-elegant transition-all duration-300 animate-fade-up ${
                plan.popular ? "border-primary shadow-glow scale-105" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="mb-4">{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4 pb-8">
                <Button 
                  className={`w-full ${plan.popular ? "bg-primary" : ""}`}
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                >
                  {plan.price === "Custom" ? "Contact Sales" : "Start Free Trial"}
                </Button>
                
                <ul className="space-y-3 pt-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
