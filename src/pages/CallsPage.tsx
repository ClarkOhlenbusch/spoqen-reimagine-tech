import { DashboardLayout } from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  Clock, 
  User, 
  Play, 
  Pause, 
  CheckCircle, 
  XCircle, 
  PhoneCall 
} from "lucide-react";

const activeCalls = [
  {
    id: 1,
    caller: "John Smith",
    number: "+1 (555) 123-4567",
    company: "Tech Solutions Inc",
    duration: "2:34",
    status: "in-progress",
    startTime: "2:34 PM",
    script: "Lead qualification in progress..."
  },
  {
    id: 2,
    caller: "Sarah Johnson", 
    number: "+1 (555) 987-6543",
    company: "Marketing Pro LLC",
    duration: "4:12",
    status: "qualifying",
    startTime: "2:28 PM",
    script: "Gathering budget information..."
  },
  {
    id: 3,
    caller: "Mike Wilson",
    number: "+1 (555) 456-7890", 
    company: "Small Business Co",
    duration: "1:45",
    status: "greeting",
    startTime: "2:40 PM",
    script: "Initial greeting completed..."
  }
];

const callQueue = [
  { caller: "Emily Davis", number: "+1 (555) 321-0987", waitTime: "0:23" },
  { caller: "Robert Brown", number: "+1 (555) 654-3210", waitTime: "0:45" },
  { caller: "Lisa Garcia", number: "+1 (555) 789-0123", waitTime: "1:12" }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'in-progress': return 'bg-primary text-primary-foreground';
    case 'qualifying': return 'bg-accent text-accent-foreground';
    case 'greeting': return 'bg-secondary text-secondary-foreground';
    default: return 'bg-muted text-muted-foreground';
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'in-progress': return <PhoneCall className="w-4 h-4" />;
    case 'qualifying': return <User className="w-4 h-4" />;
    case 'greeting': return <Play className="w-4 h-4" />;
    default: return <Phone className="w-4 h-4" />;
  }
};

const CallsPage = () => {
  return (
    <DashboardLayout 
      title="Active Calls" 
      subtitle="Monitor and manage ongoing calls in real-time"
    >
      <div className="space-y-6">
        {/* Call Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="p-6 bg-card/20 backdrop-blur-glass border-white/10">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-primary/20 rounded-lg">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">3</p>
                <p className="text-sm text-muted-foreground">Active Calls</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 bg-card/20 backdrop-blur-glass border-white/10">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-accent/20 rounded-lg">
                <Clock className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold">3</p>
                <p className="text-sm text-muted-foreground">In Queue</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 bg-card/20 backdrop-blur-glass border-white/10">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-500/20 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <p className="text-2xl font-bold">24</p>
                <p className="text-sm text-muted-foreground">Completed Today</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 bg-card/20 backdrop-blur-glass border-white/10">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-secondary/20 rounded-lg">
                <User className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <p className="text-2xl font-bold">18</p>
                <p className="text-sm text-muted-foreground">Qualified Leads</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Active Calls */}
        <Card className="p-6 bg-card/20 backdrop-blur-glass border-white/10">
          <h3 className="text-xl font-semibold mb-6">Active Calls</h3>
          
          <div className="space-y-4">
            {activeCalls.map((call) => (
              <div key={call.id} className="p-4 rounded-lg bg-card/10 border border-white/5 hover:bg-card/20 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <span className="text-white font-medium text-sm">
                        {call.caller.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold">{call.caller}</h4>
                      <p className="text-sm text-muted-foreground">{call.company}</p>
                      <p className="text-xs text-muted-foreground font-mono">{call.number}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Badge className={getStatusColor(call.status)}>
                      {getStatusIcon(call.status)}
                      <span className="ml-1 capitalize">{call.status.replace('-', ' ')}</span>
                    </Badge>
                    
                    <div className="text-right">
                      <p className="font-mono text-lg">{call.duration}</p>
                      <p className="text-xs text-muted-foreground">Started {call.startTime}</p>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button variant="outline" size="icon">
                        <Play className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="icon">
                        <Pause className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-card/10 rounded-lg">
                  <p className="text-sm text-muted-foreground">Current Status:</p>
                  <p className="text-sm">{call.script}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Call Queue */}
        <Card className="p-6 bg-card/20 backdrop-blur-glass border-white/10">
          <h3 className="text-xl font-semibold mb-6">Call Queue</h3>
          
          <div className="space-y-3">
            {callQueue.map((call, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-card/10 hover:bg-card/20 transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-muted/30 rounded-full flex items-center justify-center">
                    <span className="text-xs font-medium">
                      {call.caller.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium">{call.caller}</p>
                    <p className="text-sm text-muted-foreground font-mono">{call.number}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="text-sm font-medium">Waiting {call.waitTime}</p>
                    <p className="text-xs text-muted-foreground">Position {index + 1}</p>
                  </div>
                  
                  <Button variant="outline" size="sm">
                    Priority
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default CallsPage;