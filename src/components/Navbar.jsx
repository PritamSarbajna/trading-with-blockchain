import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='w-full h-[70px] bg-black bg-opacity-40 backdrop-blur-md drop-shadow-lg fixed z-[1000]'>
        <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
            <div className='text-white'>
                <h1 className=''>REACT</h1>
            </div>
            <div className='hidden md:flex flex-row'>
                <ul className='flex text-white items-center'>
                    <li className=''>Home</li>
                    <li className=''>About us</li>
                    <li className=''>Developers</li>
                    <li className=''>Subscribe</li>
                    <button type="button" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2">Download</button>
                </ul>
            </div>
            <div onClick={handleNav} className="block md:hidden">

                {nav? <AiOutlineClose size={30} className='text-white'/> : <AiOutlineMenu size={30} className='text-white'/>}
                
            </div>
            <div className={nav? "w-full bg-black bg-opacity-60 backdrop-blur-md drop-shadow-lg text-white absolute h-screen top-[70px] left-0 flex justify-center text-center" : "absolute left-[-100%]" }>
            <ul className=''>
                    <li className='text-2xl'>Home</li>
                    <li className='text-2xl'>Developers</li>
                    <li className='text-2xl'>About us</li>
                    <li className='text-2xl'>Contact</li>
                    <button type="button" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2">Download</button>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar