import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

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

          {/* Right Content - AI Dashboard Preview */}
          <div className="relative animate-slide-up" style={{animationDelay: '0.3s'}}>
            <div className="bg-card/20 backdrop-blur-glass border border-white/10 rounded-2xl p-6 shadow-glass">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">AI Dashboard</h3>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-destructive rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-card/30 p-4 rounded-lg border border-white/5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Active Calls</span>
                    <span className="text-lg font-bold text-primary">12</span>
                  </div>
                  <div className="w-full bg-muted/30 rounded-full h-2">
                    <div className="bg-gradient-primary h-2 rounded-full w-3/4"></div>
                  </div>
                </div>
                
                <div className="bg-card/30 p-4 rounded-lg border border-white/5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Leads Qualified</span>
                    <span className="text-lg font-bold text-accent">89</span>
                  </div>
                  <div className="w-full bg-muted/30 rounded-full h-2">
                    <div className="bg-gradient-secondary h-2 rounded-full w-4/5"></div>
                  </div>
                </div>
                
                <div className="bg-card/30 p-4 rounded-lg border border-white/5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Revenue Impact</span>
                    <span className="text-lg font-bold text-secondary">$24,680</span>
                  </div>
                  <div className="text-xs text-green-400">+15% this month</div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full blur-xl animate-glow-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent/20 rounded-full blur-lg animate-glow-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};