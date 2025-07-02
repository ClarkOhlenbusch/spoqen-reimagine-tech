import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { DashboardPreview } from "@/components/DashboardPreview";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-card/20 backdrop-blur-glass border border-white/10 rounded-full">
              <span className="text-sm text-muted-foreground">🚀 AI-Powered Lead Capture</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Never Miss a
              <span className="bg-gradient-primary bg-clip-text text-transparent block">
                Lead Again
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              Spoqen is your AI receptionist that answers calls, qualifies leads, 
              and emails you summaries—so you can focus on closing deals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="neon" size="xl" className="group" asChild>
                <a href="/dashboard">
                  Get Started
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="glass" size="xl" className="group">
                <Play className="mr-2" />
                See Demo
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Call Coverage</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">24/7</div>
                <div className="text-sm text-muted-foreground">Available</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">60s</div>
                <div className="text-sm text-muted-foreground">Response Time</div>
              </div>
            </div>
          </div>

          {/* Right Content - Interactive Dashboard Preview */}
          <div className="relative animate-slide-up" style={{animationDelay: '0.3s'}}>
            <DashboardPreview />
          </div>
        </div>
      </div>
    </section>
  );
};