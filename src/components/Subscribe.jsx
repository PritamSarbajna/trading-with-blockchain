import React from 'react'

const Subscribe = () => {
  return (
    <div className='w-full px-4 py-16 bg-[#0E0F17] text-white text-center'>
      <h1 className='text-center block py-10 font-sans font-bold'>To join our <span className='text-[#4FC3F7]'>Community</span></h1>
          <div className='flex flex-col sm:flex-row items-center justify-center text-center py-2 p-5'>
            <input className='p-4 placeholder-slate-500 bg-slate-200 rounded-3xl mr-5 my-5 hover:scale-105' type="email" placeholder='enter your email id'/>
            <button type="button" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-lg p-2 text-center mr-2">subscribe</button>
          </div>
          <p>By clicking subscribe you agreed that you will recieve news letter from us</p>
      </div>
  )
}

export default Subscribe