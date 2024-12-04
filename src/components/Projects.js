import React from 'react'
import proj1 from '../assets/proj1.png';
import proj2 from '../assets/proj2.png';
import proj3 from '../assets/proj3.png';
import proj4 from '../assets/proj4.png';
import proj5 from '../assets/proj5.png';
import proj6 from '../assets/proj6.png';
import horizen from '../assets/Horizen.png';
import chatty from '../assets/Chatty.png';
import student from '../assets/Student.png';
import fashion from '../assets/FashionStudio.png';
import ecommerce from '../assets/Ecommerce.png';



const Projects = () => {
  return (
    <div className='max-w-[1200px] mx-auto p-5' id='projects'>

      <div className='pb-8'>
        <p className="text-4xl mb-3 font-bold primary-color">Work</p>
        <p className='text-gray-400'>Check out some of my Projects</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center h-[200px] bg-cover relative">
          <img src={chatty} alt="" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider">Project</span>
            <div className="pt-8 text-center">
              <a href="https://github.com/codingwithchamindu">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  View Project
                </button></a>
             
              <a href="https://youtu.be/VmeOQ-0AemA?si=NWvK7qzXUcqR0xdA">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-red-400 text-gray-700 font-bold text-lg">
                  YouTube
                </button>
              </a>
            </div>
            <p className='text-white p-2 font-semibold'>Fully Completed React-Native Chat Application(Chatty) with Java-EE-7-back-end</p>
          </div>
        </div>

        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center h-[200px] bg-cover relative">
          <img src={student} alt="" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider">Project</span>
            <div className="pt-8 text-center">
              <a href="https://github.com/codingwithchamindu">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  View Project
                </button>
              </a>

              <a href="https://youtu.be/NbyZDYu2qms?si=jwhRvzgeqGiHb_27">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-red-400 text-gray-700 font-bold text-lg">
                  YouTube
                </button>
              </a>


            </div>
            <p className='text-white p-2 font-semibold'>Fully Completed Java Standalone Application(Adyapanaya - Student Management System)</p>
          </div>
        </div>

        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center h-[200px] bg-cover relative">
          <img src={fashion} alt="" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider">Project</span>
            <div className="pt-8 text-center">
              <a href="https://github.com/codingwithchamindu">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  View Project
                </button>
                <a href='https://youtu.be/I48CT2hHfb8?si=x1IrOq6HQ9zmY6Ak'>
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-red-400 text-gray-700 font-bold text-lg">
                 YouTube
                </button>
                </a>
                
              </a>
            </div>
            <p className='text-white p-2 font-semibold'>Fashion Studio Fully Responsive and Completed E-Commerce Website Front End </p>
          </div>
        </div>

        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center h-[200px] bg-cover relative">
          <img src={ecommerce} alt="" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider">Project</span>
            <div className="pt-8 text-center">
              <a href="/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  View Project
                </button>
              </a>
            </div>
            <p className='text-white p-2 font-semibold'>E-Commerce web Application with JavaEE7 Back End</p>
          </div>
        </div>

        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center h-[200px] bg-cover relative">
          <img src={proj4} alt="" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider">Project</span>
            <div className="pt-8 text-center">
              <a href="https://github.com/codingwithchamindu/Tailwind-CSS-Hot-Coffee-Website-Landing-Page">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  View Project
                </button>
              </a>
              
              <a href='https://youtu.be/3HXPvrdMAV8?si=h3TFBN7vZOUKL7HP'>
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-red-400 text-gray-700 font-bold text-lg">
                 YouTube
                </button>
                </a>
             
            </div>
            <p className='text-white p-2 font-semibold'>Tailwind CSS (Hot-Coffee-Website) Landing-Page </p>

          </div>
        </div>

        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center h-[200px] bg-cover relative">
          <img src={horizen} alt="" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider">Project</span>
            <div className="pt-8 text-center">
              <a href="/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  View Project
                </button>
              </a>
            </div>
            <p className='text-white font-semibold p-2'>Fully Responsive E-Commerce Web Application(Horizen Book Shop) HTML,CSS, and Bootstrap with PHP Back End</p>

          </div>
        </div>


      </div>
    </div>
  );
}

export default Projects