import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Policies from "./pages/Policies";
import MotorInsurance from "./pages/MotorInsurance";
import SetupGuide from "./pages/SetupGuide";
import PolicyDetails from "./pages/PolicyDetails";
import { DataProvider } from "./components/DataContext";


function App() {
  return (
    <div>
     <BrowserRouter>
      <DataProvider>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/policies/motorInsurance" element={<MotorInsurance />} />
          <Route path="/setup-guide" element={<SetupGuide />}/>
          <Route path="/policies/details/:policyId" element={<PolicyDetails />}/>
        </Routes>
      </DataProvider>
     </BrowserRouter>
    </div>
  );
}

export default App;
