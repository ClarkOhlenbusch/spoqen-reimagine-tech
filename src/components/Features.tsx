import { Card } from "@/components/ui/card";
import { Phone, Users, Mail, BarChart, Shield, Zap } from "lucide-react";
import { InteractiveBackground } from "@/components/InteractiveBackground";

const features = [
  {
    icon: Phone,
    title: "Smart Call Handling",
    description: "AI answers with your personalized greeting and professional tone",
    color: "text-primary"
  },
  {
    icon: Users,
    title: "Lead Qualification",
    description: "Custom questions to qualify leads automatically",
    color: "text-accent"
  },
  {
    icon: Mail,
    title: "Instant Summaries",
    description: "Get detailed email summaries within 60 seconds",
    color: "text-secondary"
  },
  {
    icon: BarChart,
    title: "Analytics Dashboard",
    description: "Track performance with real-time insights",
    color: "text-primary"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption and compliance",
    color: "text-accent"
  },
  {
    icon: Zap,
    title: "Instant Setup",
    description: "Get up and running in under 5 minutes",
    color: "text-secondary"
  }
];

export const Features = () => {
  return (
    <InteractiveBackground variant="features" className="py-20 bg-gradient-to-b from-background to-card/30">
      <section id="features">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Why Choose 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Spoqen</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced AI technology meets modern business needs. Transform your lead capture process with intelligent automation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 bg-card/20 backdrop-blur-glass border-white/10 hover:bg-card/30 transition-all duration-300 group hover:scale-105 hover:shadow-glow-primary/20 animate-slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="mb-4">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r from-card/50 to-card/80 ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </InteractiveBackground>
  );
};