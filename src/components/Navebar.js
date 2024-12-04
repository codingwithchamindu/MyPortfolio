import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navebar = () => {

    const [navbar, setNavbar] = useState(false);
    const handleNav = () => {
        setNavbar(!navbar)
    }
    return (

        <div className='bg-black text-blue-400 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center'>

            <h1 className='text-3xl font-bold ml-4 '>Chamindu Dilan</h1>
            <ul className='hidden md:flex'>
                <li className='p-5'><a href='#about'>About</a></li>
                <li className='p-5'><a href='#about'>Work</a></li>
                <li className='p-5'><a href='#about'>Contact</a></li>
            </ul>

            <div onClick={handleNav} className='block md:hidden mr-6'>
                {navbar ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>

            <div className={navbar ? 'fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500'
                : 'fixed left-[-100%]'
            }>
                <h1 className='text-3xl text-white m-4'>Chamindu Dilan</h1>
                <ul className='text-2xl p-8'>

                    <li className='p-2'><a href='#home'>About</a></li>
                    <li className='p-2'><a href='#home'>Work</a></li>
                    <li className='p-2'><a href='#home'>Contact</a></li>
                </ul>
            </div>

        </div>
    )
}

export default Navebar