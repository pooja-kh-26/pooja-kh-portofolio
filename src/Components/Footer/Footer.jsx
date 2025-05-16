import React from 'react'
import { MdOutlineEmail } from "react-icons/md"
import { CiLinkedin } from "react-icons/ci"
import { FaGithub } from "react-icons/fa"

const Footer = () => {
  return (
    <div id='Footer' className='flex flex-col md:flex-row justify-around bg-[#465697] text-white p-12 md:p-16 items-center w-full'>
      <div className="mb-6 md:mb-0 items-center text-center md:text-left">
        <h1 className='text-3xl md:text-6xl font-bold mb-2'>Contact</h1>
        <h3 className='text-lg md:text-2xl font-normal'>Feel free to reach out!</h3>
      </div>
      
      <ul className='text-base md:text-2xl space-y-4 space-x-4'>
        <li>
          <h6>Email: <p>poojakh2026@gmail.com</p></h6>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/pooja-kh/" target="_blank" rel="noopener noreferrer" className='flex gap-2 items-center hover:text-gray-300 transition-colors'>
            <CiLinkedin size={24}/>
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/pooja-kh-26" target="_blank" rel="noopener noreferrer" className='flex gap-2 items-center hover:text-gray-300 transition-colors'>
            <FaGithub size={24}/>
            GitHub
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Footer