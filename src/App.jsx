import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Suspense, lazy, memo } from "react";

// Global Components
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import GlobalLoader from "./Components/GlobalLoader";
import ToastContainer from "./Components/ToastContainer";
import ScrollToTop from "./Components/ScrollToTop";

import "./App.css";

/* -------------------- Lazy Pages -------------------- */
const Home = lazy(() => import("./Pages/main/Home"));
const DynamicPage = lazy(() => import("./Pages/main/DynamicPage"));
const Aboutus = lazy(() => import("./Pages/main/AboutUS"));
const Contact = lazy(() => import("./Pages/main/Contact"));
const Blogs = lazy(() => import("./Pages/main/Blogs"));
const Media = lazy(() => import("./Pages/main/Media"));
const Projects = lazy(() => import("./Pages/main/Projects"));
const Privacy = lazy(() => import("./Pages/main/Privacy"));
const Terms = lazy(() => import("./Pages/main/TermsCondition"));
const Cancellation = lazy(() => import("./Pages/main/Cancellation"));

/* -------------------- Loader -------------------- */
const PageLoader = memo(() => (
  <div className="flex h-screen items-center justify-center text-lg font-medium">
    Loading...
  </div>
));

/* -------------------- Animated Routes Wrapper -------------------- */
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/media" element={<Media />} />
        <Route path="/projects" element={<Projects />} />

        <Route path="/cancellation" element={<Cancellation />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />

        <Route path="/blog/:id" element={<DynamicPage />} />

        {/* 404 */}
        <Route
          path="*"
          element={
            <div className="flex h-screen items-center justify-center text-3xl font-semibold">
              404 – Page Not Found
            </div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

/* -------------------- App -------------------- */
export default function App() {
  return (
    <>
      {/* Global Utilities */}
      <GlobalLoader />
      <ToastContainer />

      <Router>
        <ScrollToTop />

        <div className="flex min-h-screen flex-col text-gray-800">
          <Navbar />

          <main className="mt-24 flex-1">
            <Suspense fallback={<PageLoader />}>
              <AnimatedRoutes />
            </Suspense>
          </main>

          <Footer />
        </div>
      </Router>
    </>
  );
}
