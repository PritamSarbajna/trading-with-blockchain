import React from 'react';
import {
  FaLinkedin,
  FaGithubSquare,
  FaGlobeAsia,
  FaDribbbleSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='mx-auto bg-[#0E0F17] py-16 text-gray-300 '>
      <div className='text-center justify-center items-center'>
        <h1 className='text-3xl font-bold text-[#4FC3F7] text-center'>REACT</h1>
        <p className='py-4 px-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
        <div className='flex justify-center items-center text-center my-10 flex-col sm:flex-row'>
            <a className='px-[10rem] py-4' href="https://pritam-sarbajna.netlify.app/"><FaGlobeAsia size={30} /></a>
            <a className='px-[10rem] py-4' href="https://github.com/PritamSarbajna"><FaGithubSquare size={30} /></a>
            <a className='px-[10rem] py-4' href="https://www.linkedin.com/in/pritam-sarbajna-74945821b/"><FaLinkedin size={30} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;