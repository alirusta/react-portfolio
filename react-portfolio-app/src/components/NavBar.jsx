// react imports
import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook, FaInstagram} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

// component imports

// asset imports
import Logo from '../assets/ar-wh.png'

// style imports
import '../components/styles/NavBar.css'

const NavBar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px]
                    flex justify-between
                    items-center px-4
                    bg-[#27357e] text-gray-300'
    >

      <div className='flex justify-center items-center'>
        <img className='hidden' src={Logo} alt='Logo' />
        <p className='logo-line hover:text-rose-500 hover:cursor-pointer active:text-transparent duration-75'>ra</p>
      </div>

      {/* main navigation */}
        <ul className='hidden md:flex'>
          <li className='hover:text-rose-500 active:text-transparent duration-75'>Home</li>
          <li className='hover:text-rose-500 active:text-transparent duration-75'>About</li>
          <li className='hover:text-rose-500 active:text-transparent duration-75'>Skills</li>
          <li className='hover:text-rose-500 active:text-transparent duration-75'>Work</li>
          <li className='hover:text-rose-500 active:text-transparent duration-75'>Contact</li>
        </ul>

      {/* hamburger react-icon */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile navigation */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#27357e] flex flex-col justify-center items-center'}>
          <li className='py-6 text-4xl '>Home</li>
          <li className='py-6 text-4xl '>About</li>
          <li className='py-6 text-4xl '>Skills</li>
          <li className='py-6 text-4xl '>Work</li>
          <li className='py-6 text-4xl '>Contact</li>
      </ul>

      {/* social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#171515]'>
            <a className='flex justify-between items-center w-full text-gray-300' href="/">
              Github <FaGithub size={30} />
            </a>
          </li>

          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0072b1]'>
            <a className='flex justify-between items-center w-full text-gray-300' href="/">
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>

          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#39569c]'>
            <a className='flex justify-between items-center w-full text-gray-300' href="/">
              Facebook <FaFacebook size={30} />
            </a>
          </li>

          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a className='flex justify-between items-center w-full text-gray-300' href="/">
              Instagram <FaInstagram size={30} />
            </a>
          </li>

          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#aead96]'>
            <a className='flex justify-between items-center w-full text-gray-300' href="/">
              Email <HiOutlineMail size={30} />
            </a>
          </li>

          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#562f7e]'>
            <a className='flex justify-between items-center w-full text-gray-300' href="/">
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default NavBar