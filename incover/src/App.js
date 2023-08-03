import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Policies from "./pages/Policies";
import MotorInsurance from "./pages/MotorInsurance";
import SetupGuide from "./pages/SetupGuide";


function App() {
  return (
    <div>
     <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/policies/motorInsurance" element={<MotorInsurance />} />
        <Route path="/setup-guide" element={<SetupGuide />}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
