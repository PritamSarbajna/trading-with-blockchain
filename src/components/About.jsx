import React from 'react'
import { SiHiveBlockchain, SiStrapi, SiFsecure } from 'react-icons/si';
import { VscServerProcess } from 'react-icons/vsc';

const About = () => {
  return (
    <div className='w-full bg-[#0E0F17] text-white text-center px-5'>
        <div className='max-w-[1240px] m-[4%] mx-auto px-4 py-8'>
            <h1 className='text-center block py-2 font-sans font-bold'>About <span className='text-[#4FC3F7]'>Us</span></h1>
        </div>
        <div className='grid sm:grid-cols-2 sm:px-2 lg:grid-cols-4 gap-10 text-center'>

            <div className='bg-[#263238] rounded-2xl border-cyan-50 border-2 flex flex-col py-12 px-8 hover:bg-[#546E7A] hover:scale-105'>
                <div className='inline-flex p-2'>
                    <SiHiveBlockchain size={50} className='w-full m-3 text-center items-center' />
                </div>
                <h3>Reliable, tamper-proof network</h3>
                <p className='py-5 px-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit corporis nihil porro rerum vel eum harum esse repellendus sint reiciendis.</p>
            </div>

            <div className='bg-[#263238] rounded-2xl border-cyan-50 border-2 flex flex-col py-12 px-8 hover:bg-[#546E7A] hover:scale-105'>
                <div className='inline-flex p-2'>
                    <SiFsecure size={50} className='w-full m-3 text-center items-center' />
                </div>
                <h3>Seamless connection to API</h3>
                <p className='py-5 px-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit corporis nihil porro rerum vel eum harum esse repellendus sint reiciendis.</p>
            </div>

            <div className='bg-[#263238] rounded-2xl border-cyan-50 border-2 flex flex-col py-12 px-8 hover:bg-[#546E7A] hover:scale-105'>
                <div className='inline-flex p-2'>
                    <SiStrapi size={50} className='w-full m-3 text-center items-center' />
                </div>
                <h3>Proven, ready-made solutions</h3>
                <p className='py-5 px-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit corporis nihil porro rerum vel eum harum esse repellendus sint reiciendis.</p>
            </div>

            <div className='bg-[#263238] rounded-2xl border-cyan-50 border-2 flex flex-col py-12 px-8 hover:bg-[#546E7A] hover:scale-105'>
                <div className='inline-flex p-2'>
                    <VscServerProcess size={50} className='w-full m-3 text-center items-center' />
                </div>
                <h3>Secure off-chain computation</h3>
                <p className='py-5 px-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit corporis nihil porro rerum vel eum harum esse repellendus sint reiciendis.</p>
            </div>
        </div>
        <div className='py-10'>
        <button type="button" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2">Try it out</button>
        </div>
    </div>
  )
}

export default About