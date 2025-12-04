import React from 'react'
import HomeHero from '../../Components/Home/HomeHero'
import Aboutus from '../../Components/AboutUs'
import NewProjectsSlider from '../../Components/Sliders/NewProjectsSlider'
import ProjectsTabs from '../../Components/ProjectShowCase'
import ExploreNewCity from '../../Components/BentoGrid/ExploreNewCity'

const Home = () => {
    return (
        <div className='flex flex-col gap-3 items-start'>
            <HomeHero />
            <section className='flex items-center mx-auto w-full max-w-6xl p-4'>

            <Aboutus />
            </section>

            <NewProjectsSlider/>
            <ProjectsTabs/>
            <ExploreNewCity/>
        </div>
    )
}

export default Home