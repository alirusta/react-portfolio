// react imports
import React from 'react'

// component imports

// asset imports

// style imports
import '../components/styles/About.css'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>

                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                            About
                        </p>
                    </div>

                    <div></div>
                </div>

                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>
                            Hi. I'm Ali, nice to see you. Have a digital ☕ on me, while you're here, bud. Fancy some 🍩?
                        </p>
                    </div>

                    <div>
                        <p>
                            With six years of experience as a graphics designer, a keen eye for aesthetics, and an innate sense for good design that appeals to the senses, I am a seasoned professional and now a newbie full stack developer, leveraging my strong background in design to bring a unique and creative approach to front-end development.
                        </p>  
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About