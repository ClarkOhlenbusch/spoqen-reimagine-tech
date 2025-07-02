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
  Calendar
} from "lucide-react";

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
  }
];

const quickActions = [
  { label: "Review Calls", icon: Phone },
  { label: "Export Data", icon: BarChart3 },
  { label: "Schedule Demo", icon: Calendar }
];

export const RealDashboardPreview = () => {
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

      <div className="space-y-4 scale-75 origin-top">
        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-3">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="p-3 bg-card/30 backdrop-blur-glass border-white/10 hover:bg-card/40 transition-all duration-300 animate-fade-in"
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

        {/* Main Content Grid */}
        <div className="grid grid-cols-3 gap-4">
          {/* Recent Calls */}
          <Card className="col-span-2 p-4 bg-card/30 backdrop-blur-glass border-white/10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold">Recent Calls</h3>
              <Button variant="ghost" size="sm" className="text-xs h-6">
                View All
              </Button>
            </div>
            
            <div className="space-y-2">
              {recentCalls.map((call, index) => (
                <div key={index} className="flex items-center justify-between p-2 rounded-lg bg-card/20 hover:bg-card/30 transition-colors">
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

          {/* Quick Actions & Performance */}
          <div className="space-y-4">
            {/* Quick Actions */}
            <Card className="p-4 bg-card/30 backdrop-blur-glass border-white/10">
              <h3 className="text-sm font-semibold mb-3">Quick Actions</h3>
              <div className="space-y-2">
                {quickActions.map((action, index) => (
                  <Button 
                    key={index} 
                    variant="glass" 
                    className="w-full justify-start h-8 text-xs"
                  >
                    <action.icon className="w-3 h-3 mr-2" />
                    {action.label}
                  </Button>
                ))}
              </div>
            </Card>

            {/* Performance Chart */}
            <Card className="p-4 bg-card/30 backdrop-blur-glass border-white/10">
              <h3 className="text-sm font-semibold mb-3">Performance</h3>
              
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>Success Rate</span>
                    <span className="font-medium">87%</span>
                  </div>
                  <div className="w-full bg-muted/30 rounded-full h-1.5">
                    <div className="bg-gradient-primary h-1.5 rounded-full w-[87%] transition-all duration-1000"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>Lead Quality</span>
                    <span className="font-medium">73%</span>
                  </div>
                  <div className="w-full bg-muted/30 rounded-full h-1.5">
                    <div className="bg-gradient-secondary h-1.5 rounded-full w-[73%] transition-all duration-1000"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>Response Time</span>
                    <span className="font-medium">94%</span>
                  </div>
                  <div className="w-full bg-muted/30 rounded-full h-1.5">
                    <div className="bg-gradient-to-r from-accent to-primary h-1.5 rounded-full w-[94%] transition-all duration-1000"></div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Floating glow effects */}
      <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full blur-xl animate-glow-pulse"></div>
      <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent/20 rounded-full blur-lg animate-glow-pulse" style={{animationDelay: '1s'}}></div>
    </div>
  );
};