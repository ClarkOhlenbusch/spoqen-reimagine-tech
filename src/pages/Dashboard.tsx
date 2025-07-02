import { DashboardLayout } from "@/components/DashboardLayout";
import { DashboardOverview } from "@/pages/DashboardOverview";

const Dashboard = () => {
  return (
    <DashboardLayout 
      title="Dashboard Overview" 
      subtitle="Monitor your AI receptionist performance and insights"
    >
      <DashboardOverview />
    </DashboardLayout>
  );
};

export default Dashboard;