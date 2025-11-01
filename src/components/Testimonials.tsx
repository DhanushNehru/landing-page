import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content: "This platform transformed how we operate. The ease of use and powerful features helped us scale from 10 to 100 customers in just 3 months.",
    rating: 5,
    initials: "SJ",
  },
  {
    name: "Michael Chen",
    role: "Product Manager, InnovateCo",
    content: "The best investment we've made. The analytics alone have saved us countless hours and helped us make data-driven decisions.",
    rating: 5,
    initials: "MC",
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, GrowthLabs",
    content: "Simply outstanding. The support team is incredibly responsive and the platform just works. Couldn't be happier with our choice.",
    rating: 5,
    initials: "ER",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 px-4 bg-gradient-subtle">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Loved by Thousands of Teams
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what our customers have to say about their experience with our platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border-border hover:shadow-elegant transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-8 pb-6 px-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12 bg-primary text-primary-foreground">
                    <AvatarFallback>{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
