import { Card } from "@/components/ui/card";
import { Phone, UserCheck, Mail } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Call Answering",
    description: "When you're unavailable, Spoqen answers calls with your personalized greeting and professional tone.",
    color: "primary"
  },
  {
    number: "02", 
    icon: UserCheck,
    title: "Lead Qualification",
    description: "Your AI assistant asks your customized qualification questions to gather important details and context.",
    color: "accent"
  },
  {
    number: "03",
    icon: Mail,
    title: "Instant Summaries",
    description: "Within 60 seconds, you receive a detailed email summary with all the lead information and next steps.",
    color: "secondary"
  }
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            How It <span className="bg-gradient-secondary bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Spoqen seamlessly integrates with your existing workflow to capture and qualify leads when you're unavailable.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-24 left-full w-12 h-0.5 bg-gradient-to-r from-primary/50 to-transparent z-0"></div>
              )}
              
              <Card className="p-8 bg-card/20 backdrop-blur-glass border-white/10 hover:bg-card/30 transition-all duration-300 group hover:scale-105 text-center relative z-10">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className={`w-8 h-8 bg-gradient-${step.color} rounded-full flex items-center justify-center text-sm font-bold text-white shadow-glow-${step.color}`}>
                    {step.number}
                  </div>
                </div>

                {/* Icon */}
                <div className="mb-6 pt-4">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r from-${step.color}/20 to-${step.color}/10 text-${step.color} group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-8 h-8" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </Card>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in" style={{animationDelay: '0.8s'}}>
          <div className="bg-card/20 backdrop-blur-glass border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Lead Capture?</h3>
            <p className="text-muted-foreground mb-6">Join thousands of businesses already using Spoqen to never miss another opportunity.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-primary text-white rounded-lg hover:scale-105 transition-transform duration-300 shadow-glow-primary">
                Start Free Trial
              </button>
              <button className="px-8 py-3 bg-card/30 border border-white/20 text-foreground rounded-lg hover:bg-card/50 transition-colors duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};