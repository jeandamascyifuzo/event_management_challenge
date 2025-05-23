import { Navigate } from "react-router-dom";

const LoginProtection = () => {
  return <Navigate to={"/dashboard"} />;
};

export default LoginProtection;
