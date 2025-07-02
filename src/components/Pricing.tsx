import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

export const Pricing = () => {
  const features = [
    "Call summaries in email & CRM",
    "Unlimited receptionist minutes", 
    "Custom call greeting & script",
    "Lead qualification questions",
    "Real-time analytics dashboard",
    "Priority customer support"
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-card/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Simple <span className="bg-gradient-primary bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            No hidden fees. No setup costs. Start capturing leads today.
          </p>
        </div>

        <div className="max-w-md mx-auto animate-slide-up">
          <Card className="p-8 bg-card/20 backdrop-blur-glass border-white/10 hover:bg-card/30 transition-all duration-300 hover:scale-105 hover:shadow-glow-primary/20 relative overflow-hidden">
            {/* Popular Badge */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-gradient-primary px-4 py-1 rounded-full text-sm font-semibold text-white shadow-glow-primary">
                Most Popular
              </div>
            </div>

            <div className="text-center mb-8 pt-4">
              <h3 className="text-2xl font-bold mb-2">Professional</h3>
              <div className="flex items-baseline justify-center mb-2">
                <span className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">$30</span>
                <span className="text-muted-foreground ml-2">/month</span>
              </div>
              <p className="text-muted-foreground">Perfect for growing businesses</p>
            </div>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Button variant="neon" size="lg" className="w-full">
              Start Free Trial
            </Button>
            
            <p className="text-center text-sm text-muted-foreground mt-4">
              No credit card required • 14-day free trial
            </p>
          </Card>
        </div>

        {/* Enterprise CTA */}
        <div className="text-center mt-12 animate-fade-in" style={{animationDelay: '0.3s'}}>
          <Card className="p-6 bg-card/10 backdrop-blur-glass border border-white/5 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-2">Need an Enterprise Solution?</h3>
            <p className="text-muted-foreground mb-4">
              Custom pricing for teams with advanced requirements and dedicated support.
            </p>
            <Button variant="outline-neon" size="sm">
              Contact Sales
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};