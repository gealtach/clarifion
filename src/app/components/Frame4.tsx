import React from 'react';
import { FaCheckCircle } from "react-icons/fa";
import { PiNumberCircleFourLight, PiNumberCircleThreeFill } from "react-icons/pi";

const Frame4 = () => {
  return (
    <div className='flex justify-evenly my-4 md:w-screen'>
        <div className='flex flex-col items-center gap-y-2 md:flex-row md:gap-x-2'>
            <div className='text-green-600 bg-white'>
                <FaCheckCircle size={20} />
            </div>
            <p className='hidden md:flex'>Step 1:</p>
            <p className='text-xs md:text-base'>Cart Review</p>
        </div>
        <div className='flex flex-col items-center gap-y-2 md:flex-row md:gap-x-2'>
            <div className='text-green-600 bg-white'>
                <FaCheckCircle size={20} />
            </div>
            <p className='hidden md:flex'>Step 2:</p>
            <p className='text-xs md:text-base'>Checkout</p>
        </div>
        <div className='flex flex-col items-center gap-y-2 md:flex-row md:gap-x-2'>
            <div className='text-blue-500 bg-white'>
                <PiNumberCircleThreeFill size={20} />
            </div>
            <p className='hidden md:flex'>Step 3:</p>
            <p className='text-xs md:text-base font-bold'>Special Offer</p>
        </div>
        <div className='flex flex-col items-center gap-y-2 md:flex-row md:gap-x-2'>
            <div className='text-blue-600 bg-white'>
                <PiNumberCircleFourLight size={20} />
            </div>
            <p className='hidden md:flex'>Step 4:</p>
            <p className='text-xs md:text-base'>Confirmation</p>
        </div>
    </div>
  )
}

export default Frame4