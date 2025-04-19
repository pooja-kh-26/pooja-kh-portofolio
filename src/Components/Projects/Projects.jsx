import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  // Sample project data
  const projectsData = [
    {
      title: 'Bedrock Reader',
      main: 'Developed a scalable RAG system using AWS Bedrock, LangChain, LLaMA 2, and FAISS for querying a Karnataka tourist guide PDF, with automated text extraction, chunking, vector search, and a Streamlit interface, adaptable to other documents.',
      demoLink: "https://github.com/pooja-kh-26/BedrockReader",
      codeLink: "https://bedrockreader.streamlit.app/"
    },
    {
      title: 'Energy Trends in India',
      main: 'Developed an interactive Tableau dashboard to analyze key energy trends in India. Integrated reliable data sources to visualize energy production, consumption, and renewable adoption across regions and time periods. Published online for broader accessibility.',
      demoLink: "https://public.tableau.com/app/profile/pooja.k.h/viz/EnergyTrendsInIndia/Dashboard1?publish=yes",
      codeLink: "https://github.com/pooja-kh-26/Energy-Trends-in-India"
    },
    {
      title: 'ChatCore',
      main: 'Built a real-time chatbot with dynamic interactions, RESTful API integration, file upload support, emojis, and robust error handling.',
      demoLink: "https://chatcore.netlify.app/",
      codeLink: "https://github.com/pooja-kh-26/ChatBot"
    },
    {
      title: 'Currency Converter',
      main: 'Built a real-time multi-currency converter using JavaScript and a RESTful API. Designed a responsive UI with dynamic flags, real-time exchange rates, and robust error handling for a seamless experience.',
      demoLink: "https://currency-converter-20-24.netlify.app/",
      codeLink: "https://github.com/pooja-kh-26/Currency_converter"
    }
  ];

  // State to track which projects are currently visible
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // State to track how many projects to show based on screen size
  const [projectsPerPage, setProjectsPerPage] = useState(2);
  
  // Calculate total number of projects
  const totalProjects = projectsData.length;

  // Update projectsPerPage based on screen width
  useEffect(() => {
    const handleResize = () => {
      setProjectsPerPage(window.innerWidth < 768 ? 1 : 2);
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle next button click
  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + projectsPerPage >= totalProjects) 
        ? 0 
        : prevIndex + projectsPerPage
    );
  };

  // Handle previous button click
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - projectsPerPage < 0) 
        ? Math.max(0, totalProjects - projectsPerPage) 
        : prevIndex - projectsPerPage
    );
  };

  // Get visible projects
  const visibleProjects = projectsData.slice(
    currentIndex,
    Math.min(currentIndex + projectsPerPage, totalProjects)
  );

  return (
    <div id='Projects' className='p-10 md:p-24 text-white'>
      <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects</h1>
      
      <div className='relative py-12'>
        {/* Navigation Arrows */}
        <div className='absolute left-0 top-1/2 transform -translate-y-1/2 z-10'>
          <button 
            onClick={handlePrev}
            className='bg-[#465697] p-2 rounded-full shadow-lg hover:bg-[#394988] transition-colors'
            aria-label="Previous projects"
          >
            <ChevronLeft size={24} />
          </button>
        </div>
        
        {/* Projects Container */}
        <div className='flex flex-wrap justify-center gap-6 md:gap-12 px-14 md:px-2'>
          {visibleProjects.map((project, index) => (
            <div 
              key={index} 
              className='w-full md:w-5/12 p-4 md:p-6 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl flex flex-col h-96'
            >
              <div className='p-4 flex-grow'>
                <h3 className='text-xl md:text-2xl font-bold leading-normal mb-2'>
                  {project.title}
                </h3>
                <p className='text-sm md:text-md leading-tight'>{project.main}</p>
              </div>
              
              <div className='mt-auto p-4 flex justify-center gap-4'>
                <a 
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='text-white py-2 px-4 text-sm md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'
                >
                  Demo
                </a>
                
                {project.codeLink && (
                  <a 
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='text-white py-2 px-4 text-sm md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'
                  >
                    Github
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className='absolute right-0 top-1/2 transform -translate-y-1/2 z-10'>
          <button 
            onClick={handleNext}
            className='bg-[#465697] p-2 rounded-full shadow-lg hover:bg-[#394988] transition-colors'
            aria-label="Next projects"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
      
      {/* Pagination Indicator */}
      <div className='flex justify-center gap-2 mt-4'>
        {Array.from({ length: Math.ceil(totalProjects / projectsPerPage) }).map((_, index) => {
          const startIndex = index * projectsPerPage;
          const isActive = currentIndex >= startIndex && currentIndex < startIndex + projectsPerPage;
          return (
            <div 
              key={index}
              className={`h-2 w-2 rounded-full ${isActive ? 'bg-[#465697]' : 'bg-gray-500'}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;