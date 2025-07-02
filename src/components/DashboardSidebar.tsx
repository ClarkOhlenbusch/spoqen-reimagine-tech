import { useState } from "react";
import { LayoutDashboard, Phone, Users, BarChart3, Settings, HelpCircle, ChevronDown, Bell, Search } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
const mainNavItems = [{
  title: "Overview",
  url: "/dashboard",
  icon: LayoutDashboard
}, {
  title: "Active Calls",
  url: "/dashboard/calls",
  icon: Phone
}, {
  title: "Leads",
  url: "/dashboard/leads",
  icon: Users
}, {
  title: "Analytics",
  url: "/dashboard/analytics",
  icon: BarChart3
}];
const settingsItems = [{
  title: "Settings",
  url: "/dashboard/settings",
  icon: Settings
}, {
  title: "Help & Support",
  url: "/dashboard/help",
  icon: HelpCircle
}];
export function DashboardSidebar() {
  const {
    state
  } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const isActive = (path: string) => currentPath === path;
  const isMainGroupExpanded = mainNavItems.some(item => isActive(item.url));
  const isCollapsed = state === "collapsed";
  const getNavClasses = (path: string) => isActive(path) ? "bg-primary/20 text-primary border-r-2 border-primary shadow-glow-primary/20" : "text-muted-foreground hover:bg-card/30 hover:text-foreground";
  return <Sidebar collapsible="icon">
      <SidebarContent className="backdrop-blur-glass border-r border-white/10 bg-gray-950">
        {/* Logo Section */}
        <div className="p-4 border-b border-white/10">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            {!isCollapsed && <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Spoqen
              </span>}
          </div>
        </div>

        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs uppercase tracking-wider text-muted-foreground px-4 py-2">
            {!isCollapsed && "Dashboard"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavItems.map(item => <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={`${getNavClasses(item.url)} transition-all duration-200`}>
                      <item.icon className="h-5 w-5 flex-shrink-0" />
                      {!isCollapsed && <span className="ml-3">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>)}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Settings Navigation */}
        <SidebarGroup className="mt-auto">
          <SidebarGroupLabel className="text-xs uppercase tracking-wider text-muted-foreground px-4 py-2">
            {!isCollapsed && "Support"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {settingsItems.map(item => <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={`${getNavClasses(item.url)} transition-all duration-200`}>
                      <item.icon className="h-5 w-5 flex-shrink-0" />
                      {!isCollapsed && <span className="ml-3">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>)}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* User Profile */}
        {!isCollapsed && <div className="p-4 border-t border-white/10 mt-auto">
            <div className="flex items-center space-x-3 p-2 rounded-lg bg-card/30 hover:bg-card/50 transition-colors cursor-pointer">
              <div className="w-8 h-8 bg-gradient-secondary rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">JD</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">John Doe</p>
                <p className="text-xs text-muted-foreground truncate">john@company.com</p>
              </div>
              <ChevronDown className="w-4 h-4 text-muted-foreground" />
            </div>
          </div>}
      </SidebarContent>
    </Sidebar>;
}