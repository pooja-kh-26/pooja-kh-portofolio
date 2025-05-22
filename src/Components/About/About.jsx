import React from 'react'
//import { IoArrowForward } from 'react-icons/io'
import {FaCss3, FaFigma, FaHtml5, FaJs} from 'react-icons/fa'
import { FaJava } from 'react-icons/fa';
import { SiC } from 'react-icons/si';
import { SiMysql } from "react-icons/si";
import { SiPython } from "react-icons/si";
import {FaReact} from 'react-icons/fa';
import { FaCloud } from "react-icons/fa";

const About = () => {
  return (
    <div id='About' className='h-screen p-10 md:p-24 flex flex-col justify-start'>
        <h1 className='text-2xl md:text-4xl text-white font-bold mb-8'>About</h1>

        <div className="bg-slate-950 p-6 rounded-xl shadow-lg w-3/4 items-center mx-auto">
            <h2 className='text-lg md:text-xl text-white font-bold mb-8'>Technical Skills</h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <span className="p-4 bg-zinc-900  flex items-center justify-center rounded-2xl shadow-lg hover:scale-110 transition-transform">
                    <FaJava color="#007396" size={60} />
                </span>

                <span className="p-4 bg-zinc-900 flex items-center justify-center rounded-2xl shadow-lg hover:scale-110 transition-transform">
                    {/* <SiC color="#A8B9CC" size={60} /> */}
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1853px-C_Programming_Language.svg.png" alt="C Logo" className="w-16 h-16 rounded-lg shadow-lg" />
                </span>

                <span className="p-4 bg-zinc-900 flex items-center justify-center rounded-2xl shadow-lg hover:scale-110 transition-transform">
                    <SiPython color="#007396" size={60} />
                </span>

                <span className="p-4 bg-zinc-900 flex items-center justify-center rounded-2xl shadow-lg hover:scale-110 transition-transform">
                    <FaHtml5 color='#E34F26' size={60}/>
                </span>

                <span className="p-4 bg-zinc-900 flex items-center justify-center rounded-2xl shadow-lg hover:scale-110 transition-transform">
                <FaCss3 color='#1572b6' size={60}/>
                </span>

                <span className='p-4 bg-zinc-900 flex items-center justify-center rounded-2xl shadow-lg hover:scale-110 transition-transform'>
                <FaJs color='#F7DF1E' size={60}/>
                </span>

                <span className='p-4 bg-zinc-900 flex items-center justify-center rounded-2xl shadow-lg hover:scale-110 transition-transform'>
                <FaReact color='#61DAFB' size={60}/>
                </span>

                <span className='p-4 bg-zinc-900 flex items-center justify-center rounded-2xl shadow-lg hover:scale-110 transition-transform'>
                <SiMysql color="#4479A1" size={60} />
                </span>

                <span className="p-4 bg-zinc-900 flex items-center justify-center rounded-2xl shadow-lg hover:scale-110 transition-transform">
                <img 
                    src="https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png" 
                    alt="AWS Logo" 
                    className="w-16 h-16 object-contain" 
                />
                </span>

            </div>
        </div>
    </div>


    // <div id='About' className='text-white flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12'>
    //     <div>
    //         <h2 className='text-2xl md:text-4xl font-bold'>About</h2>
    //         <div className='md:flex flex-wrap flex-col md:flex-row items-center'>

    //             <ul>
    //                 <div className='flex gap-3 py-4'>
                        
                        
    //                     <span className='w-96'>
    //                         <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Backend Developer</h1>
    //                         <p className='text-sm md:text-md leading-tight'>
    //                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, aut numquam quae sequi doloremque nobis obcaecati, sed debitis adipisci corporis illo suscipit at eos iusto cumque mollitia nesciunt fugit ratione!
    //                         Tenetur quae harum eaque architecto unde consequatur nihil at hic laudantium nam. Recusandae, aliquid mollitia ipsum dolorem placeat sapiente quam sed! Nulla voluptatem magnam asperiores tenetur enim iusto porro ea.
    //                         </p>
    //                     </span>
    //                 </div>

    //                 <div className='flex gap-3 py-4'>
                        
                        
    //                     <span className='w-96'>
    //                         <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Frontend Developer</h1>
    //                         <p className='text-sm md:text-md leading-tight'>
    //                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, aut numquam quae sequi doloremque nobis obcaecati, sed debitis adipisci corporis illo suscipit at eos iusto cumque mollitia nesciunt fugit ratione!
    //                         Tenetur quae harum eaque architecto unde consequatur nihil at hic laudantium nam. Recusandae, aliquid mollitia ipsum dolorem placeat sapiente quam sed! Nulla voluptatem magnam asperiores tenetur enim iusto porro ea.
    //                         </p>
    //                     </span>
    //                 </div>

    //                 <div className='flex gap-3 py-4'>
                        
                        
    //                     <span className='w-96'>
    //                         <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Fullstack Developer</h1>
    //                         <p className='text-sm md:text-md leading-tight'>
    //                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, aut numquam quae sequi doloremque nobis obcaecati, sed debitis adipisci corporis illo suscipit at eos iusto cumque mollitia nesciunt fugit ratione!
    //                         Tenetur quae harum eaque architecto unde consequatur nihil at hic laudantium nam. Recusandae, aliquid mollitia ipsum dolorem placeat sapiente quam sed! Nulla voluptatem magnam asperiores tenetur enim iusto porro ea.
    //                         </p>
    //                     </span>
    //                 </div>
    //             </ul>
    //         </div>
    //     </div>
    // </div>
  )
}

export default About
