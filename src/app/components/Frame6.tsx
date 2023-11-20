import React from 'react';
import Image from 'next/image';
import img from '../img/image 4.png';
import img2 from '../img/Group 1484578135.png';
import { BsFillStarFill } from "react-icons/bs";
import { FaRegDotCircle } from "react-icons/fa";

const Frame6 = () => {
  return (
    <div className='flex flex-col items-center my-4 gap-y-4 md:flex-row'>
        <div>
            <Image src={img} alt='img' width={320} />
        </div>
        <div className='flex gap-x-2'>
            <div>
                <Image src={img2} alt='img2' width={80} height={80} />
            </div>
            <div className='flex flex-col gap-y-2 my-1'>
                <p className='text-sm'>Clarifion Air Ionizer</p>
                <div className='flex text-yellow-400 gap-x-1 pb-1'>
                    <BsFillStarFill size={10} />
                    <BsFillStarFill size={10} />
                    <BsFillStarFill size={10} />
                    <BsFillStarFill size={10} />
                    <BsFillStarFill size={10} />
                </div>
                <div className='text-blue-500 flex gap-x-1'>
                    <FaRegDotCircle />
                    <p className='text-slate-500 text-xs'>12 left in Stock</p>
                </div>
            </div>
            <div className='flex items-start gap-x-2 ml-8'>
                <p className='text-slate-500 text-xs my-1 font-bold line-through'>$180</p>
                <p className='text-blue-500 font-bold'>$84</p>
            </div>
        </div>
    </div>
  )
}

export default Frame6