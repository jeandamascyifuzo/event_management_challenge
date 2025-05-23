import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes/MainRoute";
import SplashScreen from "./components/layout/SplashScreen_02";
import NotifyModel from "./components/models/NotifyModel";
import "./assets/styles/calendar.css";

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => setShowSplash(false), 3000);

  }, []);
  return (
    <>
      <BrowserRouter>
        {showSplash ? (
          <SplashScreen />
        ) : (
          <MainRoutes />
        )}

      </BrowserRouter>
      <NotifyModel />
    </>
  );
};


export default App;
