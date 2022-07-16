import React from 'react'
import terminalPng from '../assets/terminal.png'

const Developers = () => {
  return (
    <div className='w-full bg-[#0E0F17] text-white px-10 text-center justify-center items-center'>
        <div className='pt-20'>
            <h1 className='block py-2 font-sans font-bold'>For <span className='text-[#4FC3F7]'>Developers</span></h1>
        </div>
        <div className='flex flex-col py-8 text-center justify-center items-center'>
            <div className=''>
                <p className='p-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ad illum esse, modi, doloremque exercitationem atque quo impedit fugit dolorem adipisci recusandae? Alias minus voluptatum ullam consequuntur quisquam. Sit exercitationem mollitia rem, incidunt illum accusantium consectetur officia magni nam fugiat hic quas minima! Modi porro iusto placeat cum delectus minus, reprehenderit similique sunt doloribus voluptate, reiciendis eveniet at deserunt eligendi. Facere, veniam accusantium. Corporis rerum minima earum sequi laudantium, velit sunt soluta, eveniet, fuga voluptate eaque numquam nam obcaecati illum? Et voluptatibus incidunt saepe sint officiis. Quis error quisquam assumenda esse, ab hic, fugit, necessitatibus deserunt natus harum dolore sint.</p>
            </div>
            <img className='max-w-[250px] my-10 shadow-xl shadow-cyan-500/50' src={terminalPng} alt="" />
        </div>
    </div>
  )
}

export default Developers