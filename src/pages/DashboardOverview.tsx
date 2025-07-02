import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Phone, 
  Users, 
  TrendingUp, 
  DollarSign, 
  BarChart3,
  Calendar,
  Clock,
  CheckCircle,
  XCircle,
  MoreVertical
} from "lucide-react";

const stats = [
  { 
    label: "Total Calls Today", 
    value: "47", 
    change: "+12%", 
    icon: Phone, 
    color: "primary",
    trend: "up"
  },
  { 
    label: "Leads Qualified", 
    value: "32", 
    change: "+8%", 
    icon: Users, 
    color: "accent",
    trend: "up"
  },
  { 
    label: "Conversion Rate", 
    value: "68%", 
    change: "+5%", 
    icon: TrendingUp, 
    color: "secondary",
    trend: "up"
  },
  { 
    label: "Revenue Impact", 
    value: "$2,847", 
    change: "+23%", 
    icon: DollarSign, 
    color: "primary",
    trend: "up"
  }
];

const recentCalls = [
  { 
    id: 1,
    number: "+1 (555) 123-4567", 
    time: "2:34 PM", 
    duration: "3:42", 
    status: "qualified", 
    lead: "John Smith",
    company: "Tech Corp",
    value: "$450"
  },
  { 
    id: 2,
    number: "+1 (555) 987-6543", 
    time: "1:45 PM", 
    duration: "2:18", 
    status: "qualified", 
    lead: "Sarah Johnson",
    company: "Innovation Ltd",
    value: "$320"
  },
  { 
    id: 3,
    number: "+1 (555) 456-7890", 
    time: "12:22 PM", 
    duration: "4:56", 
    status: "not-qualified", 
    lead: "Mike Wilson",
    company: "Small Biz",
    value: "$0"
  },
  { 
    id: 4,
    number: "+1 (555) 321-0987", 
    time: "11:15 AM", 
    duration: "6:23", 
    status: "qualified", 
    lead: "Emily Davis",
    company: "Growth Co",
    value: "$780"
  }
];

const quickActions = [
  { label: "Review Calls", icon: Phone, action: "calls" },
  { label: "Export Data", icon: BarChart3, action: "export" },
  { label: "Schedule Demo", icon: Calendar, action: "demo" },
];

export const DashboardOverview = () => {
  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card 
            key={index} 
            className="p-6 bg-card/20 backdrop-blur-glass border-white/10 hover:bg-card/30 transition-all duration-300 group hover:scale-105 animate-fade-in"
            style={{animationDelay: `${index * 0.1}s`}}
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-xl bg-gradient-to-r from-${stat.color}/20 to-${stat.color}/10 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className={`w-6 h-6 text-${stat.color}`} />
              </div>
              <span className="text-green-400 text-sm font-medium flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" />
                {stat.change}
              </span>
            </div>
            <div>
              <p className="text-3xl font-bold mb-1">{stat.value}</p>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Calls */}
        <Card className="lg:col-span-2 p-6 bg-card/20 backdrop-blur-glass border-white/10 animate-slide-up">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold">Recent Calls</h3>
            <Button variant="ghost" size="sm">
              View All
            </Button>
          </div>
          
          <div className="space-y-4">
            {recentCalls.map((call) => (
              <div key={call.id} className="flex items-center justify-between p-4 rounded-lg bg-card/10 hover:bg-card/20 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    call.status === 'qualified' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-red-500/20 text-red-400'
                  }`}>
                    {call.status === 'qualified' ? <CheckCircle className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
                  </div>
                  <div>
                    <p className="font-medium">{call.lead}</p>
                    <p className="text-sm text-muted-foreground">{call.company}</p>
                  </div>
                </div>
                
                <div className="text-right">
                  <p className="font-medium">{call.value}</p>
                  <p className="text-sm text-muted-foreground">{call.time}</p>
                </div>
                
                <Button variant="ghost" size="icon">
                  <MoreVertical className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </Card>

        {/* Quick Actions & Performance */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <Card className="p-6 bg-card/20 backdrop-blur-glass border-white/10 animate-slide-up" style={{animationDelay: '0.2s'}}>
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            <div className="space-y-3">
              {quickActions.map((action, index) => (
                <Button 
                  key={index} 
                  variant="glass" 
                  className="w-full justify-start h-12"
                >
                  <action.icon className="w-5 h-5 mr-3" />
                  {action.label}
                </Button>
              ))}
            </div>
          </Card>

          {/* Performance Chart */}
          <Card className="p-6 bg-card/20 backdrop-blur-glass border-white/10 animate-slide-up" style={{animationDelay: '0.4s'}}>
            <h3 className="text-lg font-semibold mb-4">Today's Performance</h3>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Call Success Rate</span>
                  <span className="font-medium">87%</span>
                </div>
                <div className="w-full bg-muted/30 rounded-full h-2">
                  <div className="bg-gradient-primary h-2 rounded-full w-[87%] transition-all duration-1000"></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Lead Quality</span>
                  <span className="font-medium">73%</span>
                </div>
                <div className="w-full bg-muted/30 rounded-full h-2">
                  <div className="bg-gradient-secondary h-2 rounded-full w-[73%] transition-all duration-1000"></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Response Time</span>
                  <span className="font-medium">94%</span>
                </div>
                <div className="w-full bg-muted/30 rounded-full h-2">
                  <div className="bg-gradient-to-r from-accent to-primary h-2 rounded-full w-[94%] transition-all duration-1000"></div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Activity Feed */}
      <Card className="p-6 bg-card/20 backdrop-blur-glass border-white/10 animate-fade-in" style={{animationDelay: '0.6s'}}>
        <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
        
        <div className="space-y-4">
          <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-card/10 transition-colors">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <Clock className="w-4 h-4 text-muted-foreground" />
            <p className="text-sm"><span className="font-medium">New lead qualified</span> - John Smith from Tech Corp</p>
            <span className="text-xs text-muted-foreground ml-auto">2 min ago</span>
          </div>
          
          <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-card/10 transition-colors">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <Phone className="w-4 h-4 text-muted-foreground" />
            <p className="text-sm"><span className="font-medium">Call completed</span> - 3:42 duration, qualified lead</p>
            <span className="text-xs text-muted-foreground ml-auto">5 min ago</span>
          </div>
          
          <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-card/10 transition-colors">
            <div className="w-2 h-2 bg-secondary rounded-full"></div>
            <TrendingUp className="w-4 h-4 text-muted-foreground" />
            <p className="text-sm"><span className="font-medium">Performance milestone</span> - 100 calls handled this week</p>
            <span className="text-xs text-muted-foreground ml-auto">1 hour ago</span>
          </div>
        </div>
      </Card>
    </div>
  );
};