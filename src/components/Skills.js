import React from 'react'
import css from '../assets/css.png'
import html from '../assets/html.png'
import bootstrap from '../assets/Bootstrap_logo.svg'
import tailwind from '../assets/Tailwind_CSS.svg.png'
import php from '../assets/PHP-logo.svg.png'
import java from '../assets/java-logo-1.png'
import sql from '../assets/mysql.png'
import js from '../assets/javascript.png'

import react from '../assets/react.png'
const Skills = () => {
    return (
        <div className='bg-black text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-6 place-items-center md:flex md:justify-between md:items-center'>
            <h2 className='text-gray-700 text-2xl md:text-4xl font-bold m-4'>
                My <br /> Tech <br /> Stack
            </h2>

            {/* Tech Stack Items */}
            <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
                <img src={html} alt='HTML' />
                <p>HTML</p>
            </div>
            <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
                <img src={css} alt='CSS' />
                <p>CSS</p>
            </div>
            <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
                <img src={bootstrap} alt='Bootstrap' />
                <p>Bootstrap</p>
            </div>
            <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
                <img src={tailwind} alt='Tailwind CSS' />
                <p>Tailwind</p>
            </div>
            <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
                <img src={react} alt='React JS' />
                <p>React</p>
            </div>
            <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
                <img src={js} alt='React Native' />
                <p>Java Script</p>
            </div>

            {/* Additional Tech Stacks */}
            <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
                <img src={php} alt='React Native' />
                <p>PHP</p>
            </div>
            <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
                <img src={java} alt='React Native' />
                <p>Java</p>
            </div>
            <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
                <img src={sql} alt='React Native' />
                <p>SQL</p>
            </div>
        
        </div>

    )
}

export default Skills