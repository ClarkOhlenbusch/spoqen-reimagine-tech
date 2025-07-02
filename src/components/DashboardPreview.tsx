import { useState, useEffect } from "react";
import { Phone, Users, BarChart3, Target, TrendingUp, Clock, CheckCircle } from "lucide-react";

interface PreviewSection {
  id: string;
  title: string;
  icon: React.ComponentType<any>;
  content: React.ReactNode;
}

export const DashboardPreview = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const sections: PreviewSection[] = [
    {
      id: "overview",
      title: "Dashboard Overview",
      icon: BarChart3,
      content: (
        <div className="space-y-4 animate-fade-in">
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-primary/10 p-3 rounded-lg border border-primary/20">
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Active Calls</span>
                <Phone className="h-4 w-4 text-primary" />
              </div>
              <div className="text-lg font-bold text-primary mt-1">12</div>
              <div className="text-xs text-green-400">+3 from yesterday</div>
            </div>
            <div className="bg-secondary/10 p-3 rounded-lg border border-secondary/20">
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Qualified</span>
                <Target className="h-4 w-4 text-secondary" />
              </div>
              <div className="text-lg font-bold text-secondary mt-1">89</div>
              <div className="text-xs text-green-400">+15% this week</div>
            </div>
          </div>
          <div className="bg-accent/10 p-3 rounded-lg border border-accent/20">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-muted-foreground">Revenue Impact</span>
              <TrendingUp className="h-4 w-4 text-accent" />
            </div>
            <div className="text-xl font-bold text-accent">$24,680</div>
            <div className="w-full bg-muted/30 rounded-full h-1 mt-2">
              <div className="bg-gradient-primary h-1 rounded-full w-3/4 animate-pulse"></div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "calls",
      title: "Active Calls",
      icon: Phone,
      content: (
        <div className="space-y-3 animate-slide-in-right">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground uppercase tracking-wide">Live Monitoring</span>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-green-500">Live</span>
            </div>
          </div>
          
          {[
            { name: "Sarah M.", duration: "3:24", status: "qualifying" },
            { name: "John D.", duration: "1:45", status: "connected" },
            { name: "Alex R.", duration: "0:32", status: "ringing" }
          ].map((call, idx) => (
            <div key={call.name} className="bg-card/30 p-3 rounded-lg border border-white/10 animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-xs font-medium text-white">{call.name[0]}</span>
                  </div>
                  <span className="text-sm font-medium">{call.name}</span>
                </div>
                <div className="text-right">
                  <div className="text-xs text-muted-foreground">{call.duration}</div>
                  <div className={`text-xs capitalize ${
                    call.status === 'qualifying' ? 'text-accent' :
                    call.status === 'connected' ? 'text-primary' : 'text-secondary'
                  }`}>
                    {call.status}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )
    },
    {
      id: "leads",
      title: "Lead Management",
      icon: Users,
      content: (
        <div className="space-y-3 animate-scale-in">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground uppercase tracking-wide">Recent Qualified</span>
            <div className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">64% Conversion</div>
          </div>
          
          {[
            { name: "Emma Wilson", score: 95, source: "Website" },
            { name: "Michael Chen", score: 88, source: "Referral" },
            { name: "Lisa Garcia", score: 76, source: "Social" }
          ].map((lead, idx) => (
            <div key={lead.name} className="bg-card/30 p-3 rounded-lg border border-white/10 animate-fade-in" style={{ animationDelay: `${idx * 0.15}s` }}>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium">{lead.name}</div>
                  <div className="text-xs text-muted-foreground">{lead.source}</div>
                </div>
                <div className="text-right">
                  <div className={`text-sm font-bold ${
                    lead.score >= 90 ? 'text-green-400' :
                    lead.score >= 80 ? 'text-accent' : 'text-primary'
                  }`}>
                    {lead.score}%
                  </div>
                  <div className="text-xs text-muted-foreground">Score</div>
                </div>
              </div>
              <div className="w-full bg-muted/30 rounded-full h-1 mt-2">
                <div 
                  className="bg-gradient-primary h-1 rounded-full transition-all duration-1000" 
                  style={{ width: `${lead.score}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      )
    },
    {
      id: "analytics",
      title: "Analytics",
      icon: BarChart3,
      content: (
        <div className="space-y-4 animate-fade-in">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground uppercase tracking-wide">Performance</span>
            <div className="flex items-center space-x-1">
              <TrendingUp className="h-3 w-3 text-green-400" />
              <span className="text-xs text-green-400">+18%</span>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs text-muted-foreground">Answer Rate</span>
              <span className="text-sm font-bold text-primary">94.5%</span>
            </div>
            <div className="w-full bg-muted/30 rounded-full h-2">
              <div className="bg-gradient-primary h-2 rounded-full w-[94.5%] animate-pulse"></div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-xs text-muted-foreground">Avg Response</span>
              <span className="text-sm font-bold text-secondary">1.2s</span>
            </div>
            <div className="w-full bg-muted/30 rounded-full h-2">
              <div className="bg-gradient-secondary h-2 rounded-full w-[85%] animate-pulse"></div>
            </div>
            
            <div className="bg-accent/10 p-2 rounded border border-accent/20">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-accent" />
                <div>
                  <div className="text-xs font-medium text-accent">AI Insight</div>
                  <div className="text-xs text-muted-foreground">Peak hours: 10 AM - 2 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSection((prev) => (prev + 1) % sections.length);
        setIsAnimating(false);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, [sections.length]);

  const currentSectionData = sections[currentSection];
  const IconComponent = currentSectionData.icon;

  return (
    <div className="bg-card/20 backdrop-blur-glass border border-white/10 rounded-2xl p-6 shadow-glass relative overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-primary/20 rounded-lg">
            <IconComponent className="h-4 w-4 text-primary" />
          </div>
          <h3 className={`text-lg font-semibold transition-all duration-300 ${isAnimating ? 'opacity-0 translate-x-2' : 'opacity-100 translate-x-0'}`}>
            {currentSectionData.title}
          </h3>
        </div>
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-destructive rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="flex space-x-2 mb-4">
        {sections.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setIsAnimating(true);
              setTimeout(() => {
                setCurrentSection(idx);
                setIsAnimating(false);
              }, 150);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              idx === currentSection 
                ? 'bg-primary scale-125' 
                : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
            }`}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className={`transition-all duration-300 ${isAnimating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
        {currentSectionData.content}
      </div>

      {/* Floating elements */}
      <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full blur-xl animate-glow-pulse"></div>
      <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent/20 rounded-full blur-lg animate-glow-pulse" style={{animationDelay: '1s'}}></div>
      
      {/* Progress indicator */}
      <div className="absolute bottom-2 left-6 right-6">
        <div className="w-full bg-muted/20 rounded-full h-0.5">
          <div 
            className="bg-gradient-primary h-0.5 rounded-full transition-all duration-[4000ms] ease-linear" 
            style={{ width: isAnimating ? '0%' : '100%' }}
          ></div>
        </div>
      </div>
    </div>
  );
};