import { Card } from "@/components/ui/card";
import { BarChart, Phone, Users, DollarSign, TrendingUp } from "lucide-react";

export const DashboardPreview = () => {
  const stats = [
    { label: "Total Calls", value: "1,247", change: "+12%", icon: Phone, color: "primary" },
    { label: "Leads Qualified", value: "892", change: "+8%", icon: Users, color: "accent" },
    { label: "Conversion Rate", value: "71.5%", change: "+5%", icon: TrendingUp, color: "secondary" },
    { label: "Revenue Impact", value: "$52,180", change: "+23%", icon: DollarSign, color: "primary" }
  ];

  const recentCalls = [
    { number: "+1 (555) 123-4567", time: "2 mins ago", duration: "3:42", status: "Qualified", cost: "$45" },
    { number: "+1 (555) 987-6543", time: "5 mins ago", duration: "2:18", status: "Qualified", cost: "$32" },
    { number: "+1 (555) 456-7890", time: "12 mins ago", duration: "4:56", status: "Not Qualified", cost: "$0" },
    { number: "+1 (555) 321-0987", time: "18 mins ago", duration: "6:23", status: "Qualified", cost: "$78" }
  ];

  return (
    <section id="dashboard" className="py-20 bg-gradient-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Real-Time <span className="bg-gradient-secondary bg-clip-text text-transparent">Analytics</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Monitor your AI receptionist performance and track your ROI with our comprehensive dashboard.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="p-6 bg-card/20 backdrop-blur-glass border-white/10 hover:bg-card/30 transition-all duration-300 group hover:scale-105 animate-slide-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2 rounded-lg bg-gradient-to-r from-${stat.color}/20 to-${stat.color}/10`}>
                  <stat.icon className={`w-5 h-5 text-${stat.color}`} />
                </div>
                <span className="text-green-400 text-sm font-medium">{stat.change}</span>
              </div>
              <div>
                <p className="text-2xl font-bold mb-1">{stat.value}</p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Dashboard Layout */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Call Distribution Chart */}
          <Card className="lg:col-span-2 p-6 bg-card/20 backdrop-blur-glass border-white/10 animate-slide-up" style={{animationDelay: '0.4s'}}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Weekly Call Distribution</h3>
              <BarChart className="w-5 h-5 text-muted-foreground" />
            </div>
            
            <div className="space-y-4">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => {
                const height = Math.random() * 60 + 20;
                return (
                  <div key={day} className="flex items-center space-x-4">
                    <span className="text-sm text-muted-foreground w-8">{day}</span>
                    <div className="flex-1 bg-muted/30 rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full bg-gradient-primary transition-all duration-1000 ease-out`}
                        style={{width: `${height}%`, animationDelay: `${index * 0.1}s`}}
                      ></div>
                    </div>
                    <span className="text-sm font-medium w-8">{Math.floor(height/5)}</span>
                  </div>
                );
              })}
            </div>
          </Card>

          {/* Lead Quality Breakdown */}
          <Card className="p-6 bg-card/20 backdrop-blur-glass border-white/10 animate-slide-up" style={{animationDelay: '0.6s'}}>
            <h3 className="text-xl font-semibold mb-6">Lead Quality</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Hot</span>
                <span className="text-destructive font-medium">24</span>
              </div>
              <div className="w-full bg-muted/30 rounded-full h-2">
                <div className="bg-destructive h-2 rounded-full w-3/4"></div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Warm</span>
                <span className="text-yellow-500 font-medium">38</span>
              </div>
              <div className="w-full bg-muted/30 rounded-full h-2">
                <div className="bg-yellow-500 h-2 rounded-full w-4/5"></div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Cold</span>
                <span className="text-blue-400 font-medium">12</span>
              </div>
              <div className="w-full bg-muted/30 rounded-full h-2">
                <div className="bg-blue-400 h-2 rounded-full w-1/3"></div>
              </div>
            </div>
          </Card>
        </div>

        {/* Recent Calls Table */}
        <Card className="mt-8 p-6 bg-card/20 backdrop-blur-glass border-white/10 animate-slide-up" style={{animationDelay: '0.8s'}}>
          <h3 className="text-xl font-semibold mb-6">Recent Calls</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 text-muted-foreground font-medium">Phone Number</th>
                  <th className="text-left py-3 text-muted-foreground font-medium">Time</th>
                  <th className="text-left py-3 text-muted-foreground font-medium">Duration</th>
                  <th className="text-left py-3 text-muted-foreground font-medium">Status</th>
                  <th className="text-left py-3 text-muted-foreground font-medium">Value</th>
                </tr>
              </thead>
              <tbody>
                {recentCalls.map((call, index) => (
                  <tr key={index} className="border-b border-white/5 hover:bg-card/10 transition-colors">
                    <td className="py-4 font-mono text-sm">{call.number}</td>
                    <td className="py-4 text-muted-foreground">{call.time}</td>
                    <td className="py-4">{call.duration}</td>
                    <td className="py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        call.status === 'Qualified' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-red-500/20 text-red-400'
                      }`}>
                        {call.status}
                      </span>
                    </td>
                    <td className="py-4 font-semibold">{call.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </section>
  );
};