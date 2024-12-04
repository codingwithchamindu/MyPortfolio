import React from 'react'
import image from '../assets/profilepic7.png'
import { TypeAnimation } from 'react-type-animation'

const Profile = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black'>

            <div className='col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]'>
                <img src={image} alt='hero image' />
            </div>

            <div className='col-span-2 px-5 my-auto'>
                <h1 className='text-white text-4xl  font-extrabold'>
                    <span className='text-white'>
                        I'm a
                    </span> <br />
                    <TypeAnimation
                        sequence={[
                            "Web Developer", 1000,
                            "Mobile Appliction Developer", 1000,
                            "Software Application Developer", 1000,
                        ]}
                        wrapper='span'
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>

                <p className="text-white sm:text-lg my-6 lg:text-xl">
                    My name is Chmindu Dilan and I have 2 years experience in web development.
                </p>

                <div className="my-8">
                    <a
                        href="mycv.pdf"
                        download="mycv.pdf"
                        className="px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-blue-500 to-stone-400 text-white"
                    >
                        Download CV
                    </a>
                    <a
                        href="#contact"
                        className="px-6 py-3 w-full rounded-xl mr-4 border border-gray-400 hover:bg-gradient-to-br from-blue-500 to-stone-400 text-white hover:border-none"
                    >
                        Contact
                    </a>
                </div>

            </div>
        </div>
    )
}

export default Profile