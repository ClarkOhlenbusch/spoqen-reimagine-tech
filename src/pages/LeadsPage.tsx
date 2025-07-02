import { DashboardLayout } from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  User, 
  Phone, 
  Mail, 
  Calendar, 
  DollarSign, 
  Star, 
  Filter,
  Search,
  MoreVertical,
  MapPin,
  Building
} from "lucide-react";

const leads = [
  {
    id: 1,
    name: "John Smith",
    email: "john@techcorp.com",
    phone: "+1 (555) 123-4567",
    company: "Tech Solutions Inc",
    position: "CTO",
    location: "San Francisco, CA",
    source: "Website",
    status: "hot",
    value: "$15,000",
    callDate: "Today 2:34 PM",
    notes: "Very interested in enterprise package. Wants demo next week.",
    score: 95
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah@marketingpro.com", 
    phone: "+1 (555) 987-6543",
    company: "Marketing Pro LLC",
    position: "VP Marketing",
    location: "New York, NY",
    source: "Referral",
    status: "warm",
    value: "$8,500",
    callDate: "Today 1:45 PM",
    notes: "Interested but needs to discuss with team. Follow up in 3 days.",
    score: 78
  },
  {
    id: 3,
    name: "Mike Wilson",
    email: "mike@smallbiz.com",
    phone: "+1 (555) 456-7890",
    company: "Small Business Co",
    position: "Owner",
    location: "Austin, TX",
    source: "Google Ads",
    status: "cold",
    value: "$2,000",
    callDate: "Today 12:22 PM",
    notes: "Budget concerns. Not ready to move forward at this time.",
    score: 35
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily@growth.com",
    phone: "+1 (555) 321-0987",
    company: "Growth Co",
    position: "Director",
    location: "Seattle, WA",
    source: "LinkedIn",
    status: "hot",
    value: "$22,000",
    callDate: "Today 11:15 AM",
    notes: "Ready to purchase. Sending contract details.",
    score: 98
  },
  {
    id: 5,
    name: "Robert Brown",
    email: "robert@startup.io",
    phone: "+1 (555) 654-3210",
    company: "Startup Innovations",
    position: "Founder",
    location: "Los Angeles, CA",
    source: "Website",
    status: "warm",
    value: "$5,500",
    callDate: "Yesterday 4:30 PM",
    notes: "Interested in basic plan. Needs time to consider options.",
    score: 68
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'hot': return 'bg-red-500/20 text-red-400 border-red-500/30';
    case 'warm': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
    case 'cold': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
    default: return 'bg-muted text-muted-foreground';
  }
};

const getScoreColor = (score: number) => {
  if (score >= 90) return 'text-red-400';
  if (score >= 70) return 'text-yellow-400';
  return 'text-blue-400';
};

const LeadsPage = () => {
  return (
    <DashboardLayout 
      title="Leads Management" 
      subtitle="Track and manage your qualified leads"
    >
      <div className="space-y-6">
        {/* Lead Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="p-6 bg-card/20 backdrop-blur-glass border-white/10">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-red-500/20 rounded-lg">
                <Star className="w-5 h-5 text-red-400" />
              </div>
              <div>
                <p className="text-2xl font-bold">12</p>
                <p className="text-sm text-muted-foreground">Hot Leads</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 bg-card/20 backdrop-blur-glass border-white/10">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-yellow-500/20 rounded-lg">
                <User className="w-5 h-5 text-yellow-400" />
              </div>
              <div>
                <p className="text-2xl font-bold">28</p>
                <p className="text-sm text-muted-foreground">Warm Leads</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 bg-card/20 backdrop-blur-glass border-white/10">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-primary/20 rounded-lg">
                <DollarSign className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">$127K</p>
                <p className="text-sm text-muted-foreground">Pipeline Value</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 bg-card/20 backdrop-blur-glass border-white/10">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-accent/20 rounded-lg">
                <Calendar className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold">8</p>
                <p className="text-sm text-muted-foreground">Follow-ups Due</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card className="p-6 bg-card/20 backdrop-blur-glass border-white/10">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center space-x-4 w-full md:w-auto">
              <div className="relative flex-1 md:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input placeholder="Search leads..." className="pl-10 bg-card/20 border-white/10" />
              </div>
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
            
            <div className="flex space-x-2">
              <Badge className="bg-red-500/20 text-red-400 border-red-500/30">Hot (12)</Badge>
              <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">Warm (28)</Badge>
              <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">Cold (15)</Badge>
            </div>
          </div>
        </Card>

        {/* Leads Table */}
        <Card className="p-6 bg-card/20 backdrop-blur-glass border-white/10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold">All Leads</h3>
            <Button variant="outline" size="sm">
              Export
            </Button>
          </div>
          
          <div className="space-y-4">
            {leads.map((lead) => (
              <div key={lead.id} className="p-4 rounded-lg bg-card/10 border border-white/5 hover:bg-card/20 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <span className="text-white font-medium">
                        {lead.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex items-center space-x-3">
                        <h4 className="font-semibold">{lead.name}</h4>
                        <Badge className={getStatusColor(lead.status)}>
                          {lead.status.toUpperCase()}
                        </Badge>
                        <div className="flex items-center">
                          <Star className={`w-4 h-4 mr-1 ${getScoreColor(lead.score)}`} />
                          <span className={`text-sm font-medium ${getScoreColor(lead.score)}`}>
                            {lead.score}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Building className="w-3 h-3 mr-1" />
                          {lead.company}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-3 h-3 mr-1" />
                          {lead.location}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {lead.callDate}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="text-lg font-bold text-primary">{lead.value}</p>
                      <p className="text-sm text-muted-foreground">{lead.position}</p>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button variant="outline" size="icon">
                        <Phone className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="icon">
                        <Mail className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="icon">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-card/10 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Notes:</p>
                  <p className="text-sm">{lead.notes}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default LeadsPage;