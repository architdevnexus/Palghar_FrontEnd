import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Pages
import Home from "./Pages/main/Home";
import DynamicPage from "./Pages/main/DynamicPage";
import Login from "./Pages/auth/Login";
import Signup from "./Pages/auth/Signup";

// Global Components
import GlobalLoader from "./Components/GlobalLoader";
import ToastContainer from "./Components/ToastContainer";

import "./App.css";

export default function App() {
  return (
    <>
      {/* Global UI Helpers */}
      <GlobalLoader />
      <ToastContainer />

      {/* App Router */}
      <Router>
        <div className="min-h-screen bg-gray-50 text-gray-800">
          <AnimatePresence mode="wait">
            <Routes>
              {/* Main Pages */}
              <Route path="/" element={<Home />} />
              <Route path="/page/:_id" element={<DynamicPage />} />

              {/* Auth Pages */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />

              {/* 404 - Optional */}
              <Route
                path="*"
                element={
                  <div className="flex items-center justify-center h-screen text-3xl font-semibold">
                    404 – Page Not Found
                  </div>
                }
              />
            </Routes>
          </AnimatePresence>
        </div>
      </Router>
    </>
  );
}
