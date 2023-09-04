import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
   <div>
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
