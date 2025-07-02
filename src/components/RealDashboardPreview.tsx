import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Phone, 
  Users, 
  TrendingUp, 
  DollarSign, 
  CheckCircle,
  XCircle,
  MoreVertical,
  BarChart3,
  Calendar,
  Clock
} from "lucide-react";

// Real dashboard data - exactly matching DashboardOverview.tsx
const stats = [
  { 
    label: "Total Calls Today", 
    value: "47", 
    change: "+12%", 
    icon: Phone, 
    color: "primary"
  },
  { 
    label: "Leads Qualified", 
    value: "32", 
    change: "+8%", 
    icon: Users, 
    color: "accent"
  },
  { 
    label: "Conversion Rate", 
    value: "68%", 
    change: "+5%", 
    icon: TrendingUp, 
    color: "secondary"
  },
  { 
    label: "Revenue Impact", 
    value: "$2,847", 
    change: "+23%", 
    icon: DollarSign, 
    color: "primary"
  }
];

const recentCalls = [
  { 
    lead: "John Smith",
    company: "Tech Corp",
    value: "$450",
    time: "2:34 PM",
    status: "qualified"
  },
  { 
    lead: "Sarah Johnson",
    company: "Innovation Ltd",
    value: "$320",
    time: "1:45 PM",
    status: "qualified"
  },
  { 
    lead: "Mike Wilson",
    company: "Small Biz",
    value: "$0",
    time: "12:22 PM",
    status: "not-qualified"
  },
  { 
    lead: "Emily Davis",
    company: "Growth Co",
    value: "$780",
    time: "11:15 AM",
    status: "qualified"
  }
];

const quickActions = [
  { label: "Review Calls", icon: Phone },
  { label: "Export Data", icon: BarChart3 },
  { label: "Schedule Demo", icon: Calendar }
];

const recentActivity = [
  {
    type: "lead",
    message: "New lead qualified - John Smith from Tech Corp",
    time: "2 min ago",
    color: "primary"
  },
  {
    type: "call", 
    message: "Call completed - 3:42 duration, qualified lead",
    time: "5 min ago",
    color: "accent"
  },
  {
    type: "milestone",
    message: "Performance milestone - 100 calls handled this week", 
    time: "1 hour ago",
    color: "secondary"
  }
];

interface DashboardSection {
  id: string;
  title: string;
  content: React.ReactNode;
}

export const RealDashboardPreview = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const sections: DashboardSection[] = [
    {
      id: "overview",
      title: "Dashboard Overview",
      content: (
        <div className="space-y-4 scale-75 origin-top animate-fade-in">
          {/* Stats Grid */}
          <div className="grid grid-cols-4 gap-3">
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                className="p-3 bg-card/30 backdrop-blur-glass border-white/10 hover:bg-card/40 transition-all duration-300"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className={`p-2 rounded-lg bg-${stat.color}/20`}>
                    <stat.icon className={`w-4 h-4 text-${stat.color}`} />
                  </div>
                  <span className="text-green-400 text-xs font-medium">
                    {stat.change}
                  </span>
                </div>
                <div>
                  <p className="text-lg font-bold mb-1">{stat.value}</p>
                  <p className="text-muted-foreground text-xs">{stat.label}</p>
                </div>
              </Card>
            ))}
          </div>
          
          {/* Quick preview of main dashboard */}
          <div className="grid grid-cols-3 gap-4">
            <Card className="col-span-2 p-4 bg-card/30 backdrop-blur-glass border-white/10">
              <h3 className="text-sm font-semibold mb-3">Today's Overview</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span>Calls Handled</span>
                  <span className="font-medium text-primary">47/50</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span>Success Rate</span>
                  <span className="font-medium text-accent">87%</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span>Revenue Generated</span>
                  <span className="font-medium text-secondary">$2,847</span>
                </div>
              </div>
            </Card>
            
            <Card className="p-4 bg-card/30 backdrop-blur-glass border-white/10">
              <h3 className="text-sm font-semibold mb-3">AI Status</h3>
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-green-500">Online</span>
              </div>
              <div className="text-xs text-muted-foreground">
                Processing calls in real-time
              </div>
            </Card>
          </div>
        </div>
      )
    },
    {
      id: "calls", 
      title: "Recent Calls",
      content: (
        <div className="space-y-4 scale-75 origin-top animate-slide-in-right">
          <Card className="p-4 bg-card/30 backdrop-blur-glass border-white/10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold">Recent Calls</h3>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-green-500">Live</span>
              </div>
            </div>
            
            <div className="space-y-2">
              {recentCalls.map((call, index) => (
                <div key={index} className="flex items-center justify-between p-2 rounded-lg bg-card/20 hover:bg-card/30 transition-colors animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="flex items-center space-x-2">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      call.status === 'qualified' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-red-500/20 text-red-400'
                    }`}>
                      {call.status === 'qualified' ? <CheckCircle className="w-3 h-3" /> : <XCircle className="w-3 h-3" />}
                    </div>
                    <div>
                      <p className="text-xs font-medium">{call.lead}</p>
                      <p className="text-xs text-muted-foreground">{call.company}</p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <p className="text-xs font-medium">{call.value}</p>
                    <p className="text-xs text-muted-foreground">{call.time}</p>
                  </div>
                  
                  <Button variant="ghost" size="icon" className="w-5 h-5">
                    <MoreVertical className="w-3 h-3" />
                  </Button>
                </div>
              ))}
            </div>
          </Card>
        </div>
      )
    },
    {
      id: "performance",
      title: "Performance Analytics", 
      content: (
        <div className="space-y-4 scale-75 origin-top animate-scale-in">
          <Card className="p-4 bg-card/30 backdrop-blur-glass border-white/10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold">Today's Performance</h3>
              <div className="flex items-center space-x-1">
                <TrendingUp className="h-3 w-3 text-green-400" />
                <span className="text-xs text-green-400">+18%</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>Call Success Rate</span>
                  <span className="font-medium">87%</span>
                </div>
                <div className="w-full bg-muted/30 rounded-full h-2">
                  <div className="bg-gradient-primary h-2 rounded-full w-[87%] transition-all duration-1000 animate-pulse"></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>Lead Quality</span>
                  <span className="font-medium">73%</span>
                </div>
                <div className="w-full bg-muted/30 rounded-full h-2">
                  <div className="bg-gradient-secondary h-2 rounded-full w-[73%] transition-all duration-1000 animate-pulse"></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>Response Time</span>
                  <span className="font-medium">1.2s avg</span>
                </div>
                <div className="w-full bg-muted/30 rounded-full h-2">
                  <div className="bg-gradient-to-r from-accent to-primary h-2 rounded-full w-[94%] transition-all duration-1000 animate-pulse"></div>
                </div>
              </div>
              
              <div className="bg-accent/10 p-2 rounded border border-accent/20 mt-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-accent" />
                  <div>
                    <div className="text-xs font-medium text-accent">AI Insight</div>
                    <div className="text-xs text-muted-foreground">Peak hours: 10 AM - 2 PM</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )
    },
    {
      id: "activity",
      title: "Recent Activity",
      content: (
        <div className="space-y-4 scale-75 origin-top animate-fade-in">
          <Card className="p-4 bg-card/30 backdrop-blur-glass border-white/10">
            <h3 className="text-sm font-semibold mb-4">Recent Activity</h3>
            
            <div className="space-y-3">
              {recentActivity.map((activity, idx) => (
                <div key={idx} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-card/20 transition-colors animate-fade-in" style={{ animationDelay: `${idx * 0.15}s` }}>
                  <div className={`w-2 h-2 bg-${activity.color} rounded-full`}></div>
                  <Clock className="w-3 h-3 text-muted-foreground" />
                  <div className="flex-1">
                    <p className="text-xs">{activity.message}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{activity.time}</span>
                </div>
              ))}
            </div>
            
            {/* Quick Actions */}
            <div className="mt-4 pt-3 border-t border-white/10">
              <h4 className="text-xs font-semibold mb-2">Quick Actions</h4>
              <div className="space-y-1">
                {quickActions.map((action, index) => (
                  <Button 
                    key={index} 
                    variant="glass" 
                    className="w-full justify-start h-7 text-xs"
                  >
                    <action.icon className="w-3 h-3 mr-2" />
                    {action.label}
                  </Button>
                ))}
              </div>
            </div>
          </Card>
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

  return (
    <div className="bg-card/20 backdrop-blur-glass border border-white/10 rounded-2xl p-4 shadow-glass relative overflow-hidden max-w-4xl">
      {/* Browser-like header */}
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-destructive rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          </div>
          <span className="text-xs text-muted-foreground ml-4">spoqen.com/dashboard</span>
        </div>
        <div className="text-xs text-primary bg-primary/20 px-2 py-1 rounded-full">Live Dashboard</div>
      </div>

      {/* Section title */}
      <div className="mb-4">
        <h3 className={`text-sm font-semibold transition-all duration-300 ${isAnimating ? 'opacity-0 translate-x-2' : 'opacity-100 translate-x-0'}`}>
          {currentSectionData.title}
        </h3>
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

      {/* Floating glow effects */}
      <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full blur-xl animate-glow-pulse"></div>
      <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent/20 rounded-full blur-lg animate-glow-pulse" style={{animationDelay: '1s'}}></div>
    </div>
  );
};