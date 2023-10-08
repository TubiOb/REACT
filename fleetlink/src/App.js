import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Loader from "./components/Loader";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Preloader from "./components/Preloader";
import Home from "./pages/Home";
import PickupSchedule from "./pages/PickupSchedule";
import Updates from "./pages/Updates";
import UserProfile from "./pages/UserProfile";

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate some asynchronous operation, e.g., fetching data
    setTimeout(() => {
      setIsLoading(false);
    }, 3500); // Replace with your actual loading logic
  }, []);


  return (
   <div>
    <BrowserRouter>
      <Routes>
        <Route index element={isLoading ? (
          <Preloader /> 
        ) : (
        <Loader><LandingPage /></Loader>
        )} /> 
        <Route path="/login" element={<Loader><Login /></Loader>} />
        <Route path="/signup" element={<Loader><Signup /></Loader>} />
        <Route path="/home" element={<Loader><Home /></Loader>} />
        <Route path="/pickupSchedule" element={<Loader><PickupSchedule /></Loader>} />
        <Route path="/updates" element={<Loader><Updates /></Loader>} />
        <Route path="/profile" element={<Loader><UserProfile /></Loader>} />
      </Routes>
    </BrowserRouter>
    
   </div>
  );
}

export default App;
