import React from 'react'

import headerVid from '../assets/video.mp4'

const Header = () => {
  return (
    <div className='w-full h-[90vh] top-[90px]'>
      <video
        className='object-cover h-full w-full absolute -z-10'
        src={headerVid}
        autoPlay
        loop
        muted
      />

      <div className='w-full h-full flex flex-col justify-center items-center text-white'>
        <h1 className='text-center block p-2 font-sans font-bold'>Blockchain <span className='text-[#4FC3F7]'>Framework</span></h1>
        <h1 className='text-center block p-2 font-sans font-bold'>for Traders</h1>
        <div className='mt-4'>
        <p className='text-center text-xl px-[5%] text-[#ccc]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, tempora.</p>
        </div>
      </div>
    </div>
  )
}

export default Header