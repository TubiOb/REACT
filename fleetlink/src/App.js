import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Loader from "./components/Loader";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Preloader from "./components/Preloader";

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
    {isLoading ? (
          <Preloader /> 
        ) : (
    <BrowserRouter>
      <Routes>
        <Route index element={<Loader><LandingPage /></Loader>} /> 
        <Route path="/login" element={<Loader><Login /></Loader>} />
        <Route path="/signup" element={<Loader><Signup /></Loader>} />
      </Routes>
    </BrowserRouter>
    )}
   </div>
  );
}

export default App;
