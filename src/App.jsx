import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Suspense, lazy } from "react";

// Lazy Loaded Pages
const Home = lazy(() => import("./Pages/main/Home"));
const DynamicPage = lazy(() => import("./Pages/main/DynamicPage"));
const Login = lazy(() => import("./Pages/auth/Login"));
const Signup = lazy(() => import("./Pages/auth/Signup"));
const ForgotPassword = lazy(() => import("./Pages/auth/ForgotPassword"));

// Global Components
import GlobalLoader from "./Components/GlobalLoader";
import ToastContainer from "./Components/ToastContainer";

import "./App.css";
import Navbar from "./Components/Navbar";

// Loading fallback during lazy load
const PageLoader = () => (
  <div className="flex items-center justify-center h-screen text-xl font-medium">
    Loading...
  </div>
);

export default function App() {
  return (
    <>
      {/* Global Helpers */}
      <GlobalLoader />
      <ToastContainer />
      <Router>
        <div className="min-h-screen flex flex-col gap-2 bg-gray-50 text-gray-800">
          <Navbar />
          <AnimatePresence mode="wait">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                {/* Main Pages */}
                <Route path="/" element={<Home />} />
                <Route path="/page/:_id" element={<DynamicPage />} />

                {/* Auth Pages */}
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />

                {/* 404 */}
                <Route
                  path="*"
                  element={
                    <div className="flex items-center justify-center h-screen text-3xl font-semibold">
                      404 – Page Not Found
                    </div>
                  }
                />
              </Routes>
            </Suspense>
          </AnimatePresence>
        </div>
      </Router>
    </>
  );
}
