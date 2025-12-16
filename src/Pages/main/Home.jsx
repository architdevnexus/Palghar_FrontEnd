import React from 'react'
import HomeHero from '../../Components/Home/HomeHero'
import Aboutus from '../../Components/AboutUs'
import NewProjectsSlider from '../../Components/Sliders/NewProjectsSlider'
import ProjectsTabs from '../../Components/ProjectShowCase'
import ExploreNewCity from '../../Components/BentoGrid/ExploreNewCity'
import HomeMap from '../../Components/Maps/HomeMap'
import TestimonialsSlider from '../../Components/Testimonial'
import WhatWeDo from '../../Components/WhatWeDo'
import FAQ from '../../Components/FAQ'
import GetInTouch from '../../Components/Form/GetInTouch'
import HomeDream from "../../Components/Home/HomeDream"
import WhatWeHaveDone from '../../Components/Home/WhatWeHaveDone'
import Road_Alignment from '../../Components/Road_Alignment'
import Parivar from '../../Components/Parivar'

const Home = () => {
    return (
        <div className='flex flex-col gap-3  w-full'>
            <HomeHero />
            <section className='flex items-center mx-auto w-full max-w-6xl p-4'>

                <Aboutus />
            </section>

            <NewProjectsSlider />
            <ProjectsTabs />
            <ExploreNewCity />
            {/* <HomeMap /> */}
            <HomeDream />
            <WhatWeHaveDone />
            <img src="/DevelopmentPath.svg" alt="" srcset="" className='w-[90%] m-auto h-96' />
            <Road_Alignment/>
            <Parivar/>
            <TestimonialsSlider />
            <WhatWeDo />
            <FAQ />
            <GetInTouch />

        </div>
    )
}

export default Home