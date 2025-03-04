import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div id='Projects' className='p-10 md:p-24 text-white'>
        <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects</h1>
        <div className='py-12 px-8 flex flex-wrap gap-5'>
            <ProjectCard 
                title='ChatCore' 
                main='This is a real-time chatbot using JavaScript, enabling dynamic interactions with users.
                Implemented file upload functionality, allowing users to share files with the chatbot.'
            />

            <ProjectCard 
                title='Energy Trends in India' 
                main=' Created an interactive Tableau dashboard to analyze and visualize key energy trends in India. Published the dashboard online for broader accessibility and use.'
            />

            <ProjectCard 
                title='Currency Converter' 
                main='Designed and developed a real-time, multi-currency converter using JavaScript and a RESTful API,
                 enabling users to instantly convert between global currencies.'
            />

        </div>
    </div>
  )
}

export default Projects
