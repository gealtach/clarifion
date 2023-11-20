import React from 'react';
import { BsPatchCheck } from "react-icons/bs";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";


const Frame1 = () => {
  return (
    <div className='flex justify-between w-full p-2 bg-slate-800 text-white'>
        <MdKeyboardArrowLeft size={30} />
        <div className='flex items-center gap-x-3'>
            <BsPatchCheck />
            <p className='text-sm'>30-DAY SATISFACTION GUARANTEE</p>
        </div>
        <MdKeyboardArrowRight size={30} />
    </div>
  )
}

export default Frame1