import React from 'react';
import profile from "../../assets/profile2.jpg";
import TextChange from '../TextChange';

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row items-center text-white w-screen h-screen justify-center p-6 md:p-10 space-y-6 md:space-y-0 md:space-x-10 
                    md:mt-[-40px] lg:mt-[-60px]">

      <div className="flex justify-center md:justify-start">
        <img 
          className="w-70 h-70 md:w-60 md:h-60 lg:w-72 lg:h-72 object-cover transition-all duration-300 
                     rounded-full md:rounded-l-full" 
          src={profile} 
          alt="Profile" 
        />
      </div>

      <div className="text-center md:text-left md:w-2/4">
        <h1 className="text-2xl md:text-5xl font-bold leading-normal tracking-tight">
          <TextChange />
        </h1>
        <p className="text-lg md:text-2xl tracking-tight mt-4">
          I am a B.E in Information Science and Engineering student passionate about software development and data science. 
          I am a quick learner and a team player with a strong foundation in programming, problem-solving, and project management. 
          I am seeking opportunities to leverage my skills in a dynamic and collaborative environment.
        </p>
        <button className="mt-6 md:mt-10 text-white py-2 px-4 text-lg md:text-xl hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
         <a href="#Footer">Contact Me</a> 
        </button>
      </div>

    </div>
  );
}

export default Home;
