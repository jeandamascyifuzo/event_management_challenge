import { Outlet } from "react-router-dom";
import Layout from "../components/layout";

const DashRoutes = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default DashRoutes;
