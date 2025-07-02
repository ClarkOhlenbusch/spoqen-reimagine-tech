import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, TrendingDown, Phone, Users, Clock, Target } from "lucide-react";

const callVolumeData = [
  { month: "Jan", calls: 45, qualified: 28 },
  { month: "Feb", calls: 52, qualified: 31 },
  { month: "Mar", calls: 38, qualified: 22 },
  { month: "Apr", calls: 67, qualified: 43 },
  { month: "May", calls: 59, qualified: 38 },
  { month: "Jun", calls: 73, qualified: 52 }
];

const performanceData = [
  { day: "Mon", answerRate: 94, avgDuration: 3.2 },
  { day: "Tue", answerRate: 96, avgDuration: 2.8 },
  { day: "Wed", answerRate: 92, avgDuration: 3.5 },
  { day: "Thu", answerRate: 98, avgDuration: 2.9 },
  { day: "Fri", answerRate: 95, avgDuration: 3.1 },
  { day: "Sat", answerRate: 89, avgDuration: 3.8 },
  { day: "Sun", answerRate: 87, avgDuration: 4.1 }
];

const leadSourceData = [
  { name: "Website", value: 45, color: "hsl(var(--primary))" },
  { name: "Social Media", value: 28, color: "hsl(var(--secondary))" },
  { name: "Referrals", value: 18, color: "hsl(var(--accent))" },
  { name: "Direct", value: 9, color: "hsl(var(--muted-foreground))" }
];

const chartConfig = {
  calls: { label: "Total Calls", color: "hsl(var(--primary))" },
  qualified: { label: "Qualified Leads", color: "hsl(var(--secondary))" },
  answerRate: { label: "Answer Rate %", color: "hsl(var(--accent))" },
  avgDuration: { label: "Avg Duration (min)", color: "hsl(var(--primary))" }
};

const AnalyticsPage = () => {
  const stats = [
    {
      title: "Total Calls",
      value: "334",
      change: "+12.5%",
      trend: "up",
      icon: Phone,
      description: "vs last month"
    },
    {
      title: "Qualified Leads",
      value: "214",
      change: "+18.2%",
      trend: "up", 
      icon: Target,
      description: "64% conversion rate"
    },
    {
      title: "Avg Response Time",
      value: "1.2s",
      change: "-0.3s",
      trend: "up",
      icon: Clock,
      description: "Faster than last month"
    },
    {
      title: "Customer Satisfaction",
      value: "4.8/5",
      change: "+0.2",
      trend: "up",
      icon: Users,
      description: "Based on 127 reviews"
    }
  ];

  return (
    <DashboardLayout 
      title="Analytics" 
      subtitle="Performance insights and detailed metrics"
    >
      <div className="space-y-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <Card key={stat.title} className="bg-card/50 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold mt-1">{stat.value}</p>
                    <div className="flex items-center mt-2 text-sm">
                      {stat.trend === "up" ? (
                        <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                      ) : (
                        <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                      )}
                      <span className={stat.trend === "up" ? "text-green-500" : "text-red-500"}>
                        {stat.change}
                      </span>
                      <span className="text-muted-foreground ml-1">{stat.description}</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-primary/20">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Call Volume Chart */}
          <Card className="bg-card/50 backdrop-blur-sm border-white/10">
            <CardHeader>
              <CardTitle>Call Volume & Lead Qualification</CardTitle>
              <CardDescription>Monthly trends over the last 6 months</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={callVolumeData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="calls" fill="var(--color-calls)" />
                    <Bar dataKey="qualified" fill="var(--color-qualified)" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Performance Metrics */}
          <Card className="bg-card/50 backdrop-blur-sm border-white/10">
            <CardHeader>
              <CardTitle>Weekly Performance</CardTitle>
              <CardDescription>Answer rates and call duration by day</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={performanceData}>
                    <XAxis dataKey="day" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line 
                      type="monotone" 
                      dataKey="answerRate" 
                      stroke="var(--color-answerRate)" 
                      strokeWidth={3}
                      dot={{ fill: "var(--color-answerRate)", strokeWidth: 2, r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Lead Sources */}
          <Card className="bg-card/50 backdrop-blur-sm border-white/10">
            <CardHeader>
              <CardTitle>Lead Sources</CardTitle>
              <CardDescription>Where your leads are coming from</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={leadSourceData}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {leadSourceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <ChartTooltip content={<ChartTooltipContent />} />
                  </PieChart>
                </ResponsiveContainer>
              </ChartContainer>
              <div className="mt-4 space-y-2">
                {leadSourceData.map((source) => (
                  <div key={source.name} className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <div 
                        className="w-3 h-3 rounded-full mr-2" 
                        style={{ backgroundColor: source.color }}
                      />
                      {source.name}
                    </div>
                    <span className="font-medium">{source.value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Insights */}
          <Card className="bg-card/50 backdrop-blur-sm border-white/10 lg:col-span-2">
            <CardHeader>
              <CardTitle>AI Insights</CardTitle>
              <CardDescription>Automated analysis and recommendations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                  <div className="flex items-center mb-2">
                    <TrendingUp className="h-5 w-5 text-green-500 mr-2" />
                    <span className="font-medium text-green-500">Performance Improvement</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Your AI receptionist's response time has improved by 23% this week. 
                    Peak performance hours are between 10 AM - 2 PM.
                  </p>
                </div>
                
                <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                  <div className="flex items-center mb-2">
                    <Target className="h-5 w-5 text-primary mr-2" />
                    <span className="font-medium text-primary">Lead Quality</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    64% of incoming calls are being qualified as leads, with social media 
                    driving the highest quality prospects.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-accent/10 border border-accent/20">
                  <div className="flex items-center mb-2">
                    <Clock className="h-5 w-5 text-accent mr-2" />
                    <span className="font-medium text-accent">Recommendation</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Consider increasing availability on weekends - 13% more leads 
                    come in during these periods.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AnalyticsPage;