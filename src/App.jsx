import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Suspense, lazy } from "react";

// Lazy Loaded Pages
const Home = lazy(() => import("./Pages/main/Home"));
const DynamicPage = lazy(() => import("./Pages/main/DynamicPage"));
const Login = lazy(() => import("./Pages/auth/Login"));
const Signup = lazy(() => import("./Pages/auth/Signup"));
const ForgotPassword = lazy(() => import("./Pages/auth/ForgotPassword"));
const Aboutus = lazy(() => import("./Pages/main/AboutUS"))
const Contact = lazy(() => import("./Pages/main/Contact"))
const Blogs = lazy(() => import("./Pages/main/Blogs"))

// Global Components
import GlobalLoader from "./Components/GlobalLoader";
import ToastContainer from "./Components/ToastContainer";

import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

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
        <div className="min-h-screen flex flex-col gap-2 w-full text-gray-800">
          <Navbar />
          <div className="mt-24">
            <AnimatePresence mode="wait">
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  {/* Main Pages */}
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<Aboutus />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/blog" element={<Blogs/>}/>
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
          <Footer />
        </div>
      </Router>
    </>
  );
}
