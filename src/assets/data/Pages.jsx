import { BarChart2, Calendar, LayoutDashboard, Users } from "lucide-react";

export const sidebarItems = [
  {
    id: 1,
    name: "Dashboard",
    icon: <LayoutDashboard className="h-5 w-5" />,
    path: "/dashboard",
  },
  {
    id: 2,
    name: "Events",
    icon: <Calendar className="h-5 w-5" />,
    path: "/event",
  },
  {
    id: 6,
    name: "Reports",
    icon: <BarChart2 className="h-5 w-5" />,
    path: "/report",
  },
  {
    id: 8,
    name: "Users",
    icon: <Users className="h-5 w-5" />,
    path: "setting",
  },
];
