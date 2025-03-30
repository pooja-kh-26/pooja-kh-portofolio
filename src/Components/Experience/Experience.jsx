import React from 'react'
import toyota from '../../assets/toyotaHackathon.jpeg'
import {FaCss3, FaFigma, FaHtml5, FaJs} from 'react-icons/fa'
import {FaReact} from 'react-icons/fa'
import {SiRedis} from 'react-icons/si'
import {FaGoogle} from 'react-icons/fa'
import {SiMongodb} from 'react-icons/si'
import {RiNetflixFill} from '@remixicon/react'
import {FaAmazon} from 'react-icons/fa'

const Experience = () => {
  return (
            /* <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
               <FaHtml5 color='#E34F26' size={50}/>
            </span>

            <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
               <FaCss3 color='#1572b6' size={50}/>
            </span>

            <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
               <FaReact color='#61DAFB' size={50}/>
            </span>

            <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
               <FaJs color='#F7DF1E' size={50}/>
            </span>

            <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
               <FaFigma color='#F24E1E' size={50}/>
            </span>

            <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
               <SiMongodb color='#47A248' size={50}/>
            </span> */


                /* <div className='flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center'>
                    <FaGoogle color='#4285F4' size={50}/>
                    <span className='text-white'>
                        <h2 className='leading-tight'>Software Engineer, Google</h2>
                        <p className='text-sm leading-tight font-thin '>Sept 2025 - Present</p>
                        <ul className='text-sm p-2'>
                            <li>Work as software developer</li>
                            <li>Intern</li>
                        </ul>
                    </span>
                </div>

                <div className='flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center'>
                    <FaGoogle color='#4285F4' size={50}/>
                    <span className='text-white'>
                        <h2 className='leading-tight'>Software Engineer, Google</h2>
                        <p className='text-sm leading-tight font-thin '>Sept 2025 - Present</p>
                        <ul className='text-sm p-2'>
                            <li>Work as software developer</li>
                            <li>Intern</li>
                        </ul>
                    </span>
                </div> */

    <div id='Experience' className='p-10 md:p-24 flex flex-col'>
      <h1 className='text-2xl md:text-4xl text-white font-bold mb-8'>Experience</h1>

      <div className='text-overflow:clip flex flex-col md:flex-row bg-slate-950 bg-opacity-45 rounded-lg p-6  md:p-8 w-full md:w-9/10 h-auto md:h-[450px] mx-auto justify-center items-center'>
            {/* Left Side: Image */}
            <div className='w-full md:w-1/3 flex justify-center'>
                <img src={toyota} alt='Toyota Hackathon' className='w-[90%] md:w-[100%] h-auto rounded-lg' />
            </div>
            
            {/* Right Side: Content */}
            <div className='w-full md:w-2/3 text-white p-4'>
                <h2 className='text-xl font-semibold'>Toyota Hackathon 2025 – Mentor</h2>
                <p className='text-sm font-thin mb-4'>Feb 2025</p>
                <ul className='list-disc ml-5 text-sm space-y-2'>
                    <li>Mentored two teams of school and pre-university students, guiding them through structured problem-solving, innovation, and prototype development.</li>
                    <li>Assisted in transforming ideas into functional prototypes using online tools and strategic storytelling for compelling presentations.</li>
                    <li>Provided expert guidance on hackathon strategies, creative problem-solving, and effective teamwork to enhance their competitive edge.</li>      
                    <li>Played a key role in fostering a collaborative and innovation-driven environment at the Toyota Kirloskar Motor (TKM) and RV Institute of Technology & Management Hackathon, empowering students to think critically and deliver impactful solutions.</li>   
                </ul>
            </div>
      </div>
    </div>
    )
}

export default Experience
