import { Routes, Route } from "react-router-dom";
import DashboadMainIndex from "../pages/dashboard";
import Event from "../pages/events/Event";
import { LoginPage } from "../pages/LoginPage";
import DashRoutes from "./DashRoutes";
import LoginProtection from "./LoginProtection";
import SalesReport from "../pages/report/SalesReport";
import UserManagement from "../pages/settings/UserManagement";

const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<LoginProtection />}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
      <Route element={<DashRoutes />}>
        <Route path="/dashboard" element={<DashboadMainIndex />} />;
        <Route path="/event" element={<Event />} />;
        <Route path="/event/:eventId" element={<Event />} />;
        <Route path="/report" element={<SalesReport />} />;
        <Route path="/setting" element={<UserManagement />} />;
      </Route>
    </Routes>
  );
};

export default MainRoutes;
