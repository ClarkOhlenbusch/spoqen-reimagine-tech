import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { RealDashboardPreview } from "@/components/RealDashboardPreview";

export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-dark relative overflow-hidden">
      {/* Interactive Background Elements */}
      <div className="absolute inset-0">
        {/* Main interactive orb that follows mouse */}
        <div 
          className="absolute w-96 h-96 bg-primary/30 rounded-full blur-3xl transition-all duration-700 ease-out"
          style={{
            left: `${mousePosition.x * 0.3}%`,
            top: `${mousePosition.y * 0.3 + scrollY * 0.1}%`,
            transform: `translate(-50%, -50%) scale(${1 + Math.sin(Date.now() * 0.001) * 0.2})`,
          }}
        ></div>
        
        {/* Secondary orb with inverse movement */}
        <div 
          className="absolute w-80 h-80 bg-secondary/25 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            right: `${(100 - mousePosition.x) * 0.2}%`,
            bottom: `${(100 - mousePosition.y) * 0.2 + scrollY * 0.05}%`,
            transform: `translate(50%, 50%) scale(${1 + Math.cos(Date.now() * 0.0015) * 0.15})`,
          }}
        ></div>
        
        {/* Accent orb with circular motion */}
        <div 
          className="absolute w-72 h-72 bg-accent/20 rounded-full blur-3xl transition-all duration-500"
          style={{
            left: `${50 + Math.sin(Date.now() * 0.0008 + mousePosition.x * 0.01) * 20}%`,
            top: `${50 + Math.cos(Date.now() * 0.0008 + mousePosition.y * 0.01) * 20 + scrollY * 0.03}%`,
            transform: 'translate(-50%, -50%)',
          }}
        ></div>
        
        {/* Interactive gradient overlay */}
        <div 
          className="absolute inset-0 opacity-40 transition-all duration-1000"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
              hsl(315 100% 50% / 0.1) 0%, 
              hsl(270 100% 60% / 0.05) 30%, 
              hsl(180 100% 50% / 0.03) 60%, 
              transparent 100%)`,
          }}
        ></div>
        
        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/40 rounded-full blur-sm animate-float"
            style={{
              left: `${20 + i * 10 + Math.sin(Date.now() * 0.001 + i) * 5}%`,
              top: `${30 + i * 8 + Math.cos(Date.now() * 0.001 + i) * 3 + scrollY * 0.02}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${4 + i * 0.5}s`,
            }}
          ></div>
        ))}
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

          {/* Right Content - Real Dashboard Preview */}
          <div className="relative animate-slide-up" style={{animationDelay: '0.3s'}}>
            <RealDashboardPreview />
          </div>
        </div>
      </div>
    </section>
  );
};