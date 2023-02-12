// react imports 
import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

// component imports

// asset imports

// style imports
import '../components/styles/Home.css'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#27357e]'>

        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#ccd6f6]'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Ali Rusta🐵</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#d0d3cf]'>I'm a Full Stack Developer.</h2>
            <p className='text-[#d0d3cf] py-4 max-w-[700px]'>My six years of experience in graphic design heavily benefit my code. Currently I'm focused on building responsive full-stack web applications. 'Learning by doing' is a principle that I follow wholeheartedly, regardless of the project at hand.
            </p>
            <div>
              <button className='group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-rose-500 hover:border-rose-500 hover:text-5xl duration-300'>view work 🔎
              <span className='group-hover:rotate-90 group-hover:translate-y-[-6px] group-hover:text-[50px] duration-300'><HiArrowNarrowRight className='ml-3'/></span>
              </button>
            </div>
        </div>
        

    </div>
  )
}

export default Home