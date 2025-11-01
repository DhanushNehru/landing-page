import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the free trial work?",
    answer: "You can start a 14-day free trial without providing any credit card information. You'll have full access to all features during the trial period. If you decide not to continue, your account will simply expire after 14 days.",
  },
  {
    question: "Can I change plans later?",
    answer: "Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any charges or credits based on your billing cycle.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, Mastercard, American Express, Discover) and PayPal. For Enterprise plans, we also offer invoicing options.",
  },
  {
    question: "Is my data secure?",
    answer: "Yes, security is our top priority. We use bank-level 256-bit SSL encryption, regular security audits, and comply with SOC 2 Type II, GDPR, and CCPA regulations. Your data is backed up daily and stored in multiple secure locations.",
  },
  {
    question: "Do you offer refunds?",
    answer: "Yes, we offer a 30-day money-back guarantee. If you're not satisfied with our service for any reason, contact our support team within 30 days of your purchase for a full refund.",
  },
  {
    question: "How does customer support work?",
    answer: "All plans include email support with responses within 24 hours. Professional plans get priority support with faster response times, and Enterprise plans include 24/7 phone support and a dedicated account manager.",
  },
];

const FAQ = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about our platform and services.
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4 animate-fade-up">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 bg-card"
            >
              <AccordionTrigger className="text-left hover:no-underline py-4">
                <span className="font-semibold">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="mt-12 text-center animate-fade-up">
          <p className="text-muted-foreground mb-4">
            Still have questions?
          </p>
          <a 
            href="#contact" 
            className="text-primary hover:underline font-semibold"
          >
            Contact our support team →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
