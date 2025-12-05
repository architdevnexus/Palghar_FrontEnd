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

const Home = () => {
    return (
        <div className='flex flex-col gap-3 items-start'>
            <HomeHero />
            <section className='flex items-center mx-auto w-full max-w-6xl p-4'>

                <Aboutus />
            </section>

            <NewProjectsSlider />
            <ProjectsTabs />
            <ExploreNewCity />
            {/* <HomeMap /> */}
            <TestimonialsSlider />
            <WhatWeDo />
            <FAQ />
            <GetInTouch />

        </div>
    )
}

export default Home