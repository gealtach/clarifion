import React from 'react';
import { BsPatchCheck } from "react-icons/bs";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { PiTruckThin } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import logo from '../img/fluent_arrow-sync-checkmark-20-regular.png';
import Image from 'next/image';


const Frame1 = () => {
  return (
    <div className='flex justify-between w-full p-2 bg-slate-800 text-white md:px-20'>
      <div className='md:hidden'>
        <MdKeyboardArrowLeft size={30} />
      </div>
        <div className='flex items-center gap-x-3'>
            <BsPatchCheck />
            <p className='text-sm'>30-DAY SATISFACTION GUARANTEE</p>
        </div>
        <div className='md:hidden'>
          <MdKeyboardArrowRight size={30} />
        </div>
        <div className='hidden md:flex md:items-center md:gap-x-3'>
          <div>
            <PiTruckThin size={20} />
          </div>
          <h1>FREE DELIVERY ON ORDERS OVER $40.00</h1>
        </div>
        <div className='hidden md:flex md:items-center md:gap-x-3'>
          <div>
            <FaRegHeart size={20} />
          </div>
          <h1>50.000+ HAPPY CUSTOMERS</h1>
        </div>
        <div className='hidden md:flex md:items-center md:gap-x-3'>
          <div>
            <Image src={logo} alt='arrow' width={22} height={22} />
          </div>
          <h1>100% MONEY BACK GUARANTEE</h1>
        </div>
    </div>
  )
}

export default Frame1