// react imports 
import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

// component imports

// asset imports

// style imports
import '../components/styles/Home.css'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#27357e] select-none'>

      {/* container */}
      <div className='max-w-[1600px] mx-auto md:px-[150px] px-7 flex flex-col justify-center h-full
        '
      >
        <p className='hero-intro text-[#ccd6f6] text-1xl sm:text-2xl lg:text-3xl pb-1 md:pb-3'>
          Hi, my name is
        </p>
        <h1 className='hero-name text-3xl sm:text-7xl lg:text-8xl font-bold text-[#ccd6f6]'>
          Ali Rusta<span>🐱‍🏍</span>
        </h1>
        <h2 className='hero-desc text-2xl sm:text-7xl lg:text-8xl font-bold text-[#d0d3cf]'>
          I'm a Full Stack Developer.
        </h2>
        <p className='hero-line text-[#d0d3cf] text-1xl sm:text-2xl py-4 max-w-[700px]'>
          My design sensibilities lend themselves to my coding. Presently, my focus is on crafting full-stack web applications that are highly responsive. I subscribe wholeheartedly to the "learning by doing" principle, which guides my approach to any project I take on.
        </p>

        <div>
          <button className='work-btn group text-white border-2 p-5 my-2 flex items-center hover:bg-rose-500 hover:border-rose-500 lg:text-3xl lg:hover:text-7xl text-2xl
          hover:text-5xl duration-300'>
            view work
            <span className='group-hover:rotate-90 lg:group-hover:translate-y-[-20px] 
            group-hover:translate-y-[-13px] duration-300'>&nbsp;🔎</span>
            {/* <span className='group-hover:rotate-90 group-hover:translate-y-[-8px] group-hover:text-4xl duration-300'><HiArrowNarrowRight className='ml-4'/></span> */}
          </button>
        </div>
      </div>
      

    </div>
  )
}

export default Home