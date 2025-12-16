import React, { lazy, Suspense } from "react";

/* ===========================
   Lazy Loaded Sections
=========================== */
const HomeHero = lazy(() => import("../../Components/Home/HomeHero"));
const Aboutus = lazy(() => import("../../Components/AboutUs"));
const NewProjectsSlider = lazy(() =>
  import("../../Components/Sliders/NewProjectsSlider")
);
const ProjectsTabs = lazy(() =>
  import("../../Components/ProjectShowCase")
);
const ExploreNewCity = lazy(() =>
  import("../../Components/BentoGrid/ExploreNewCity")
);
const HomeDream = lazy(() =>
  import("../../Components/Home/HomeDream")
);
const WhatWeHaveDone = lazy(() =>
  import("../../Components/Home/WhatWeHaveDone")
);
const RoadAlignment = lazy(() =>
  import("../../Components/Road_Alignment")
);
const Parivar = lazy(() =>
  import("../../Components/Parivar")
);
const TestimonialsSlider = lazy(() =>
  import("../../Components/Testimonial")
);
const WhatWeDo = lazy(() =>
  import("../../Components/WhatWeDo")
);
const FAQ = lazy(() =>
  import("../../Components/FAQ")
);
const GetInTouch = lazy(() =>
  import("../../Components/Form/GetInTouch")
);

/* ===========================
   Fallback Loader
=========================== */
const SectionLoader = () => (
  <div className="w-full h-40 flex items-center justify-center">
    <div className="animate-pulse h-6 w-32 bg-gray-200 rounded" />
  </div>
);

/* ===========================
   HOME PAGE
=========================== */
const Home = () => {
  return (
    <main className="flex flex-col gap-6 w-full overflow-hidden">

      <Suspense fallback={<SectionLoader />}>
        <HomeHero />
      </Suspense>

      <section className="w-full max-w-6xl mx-auto px-4">
        <Suspense fallback={<SectionLoader />}>
          <Aboutus />
        </Suspense>
      </section>

      <Suspense fallback={<SectionLoader />}>
        <NewProjectsSlider />
        <ProjectsTabs />
        <ExploreNewCity />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <HomeDream />
        <WhatWeHaveDone />
      </Suspense>

      {/* Decorative Divider */}
      <div className="w-full flex justify-center">
        <img
          src="/DevelopmentPath.svg"
          alt="Development Path"
          className="w-[96%] max-w-6xl object-contain"
          loading="lazy"
        />
      </div>

      <Suspense fallback={<SectionLoader />}>
        <RoadAlignment />
        <Parivar />
        <TestimonialsSlider />
        <WhatWeDo />
        <FAQ />
        <GetInTouch />
      </Suspense>

    </main>
  );
};

export default Home;
