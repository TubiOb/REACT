import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Loader from "./components/Loader";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
   <div>
    <BrowserRouter>
      <Routes>
        <Route index element={<Loader><LandingPage /></Loader>} />
        <Route path="/login" element={<Loader><Login /></Loader>} />
        <Route path="/signup" element={<Loader><Signup /></Loader>} />
      </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
