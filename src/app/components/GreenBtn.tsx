import React from 'react';
import { FaArrowRight } from "react-icons/fa6";

const GreenBtn = () => {
  return (
    <div className='flex bg-green-600 py-4 px-10 rounded-full gap-x-3 text-white items-center w-fit mx-auto md:w-full md:ml-4 justify-center'>
        <p className='text-lg'>YES-CLAIM MY DISCOUNT</p>
        <div><FaArrowRight size={20} /></div>
    </div>
  )
}

export default GreenBtn