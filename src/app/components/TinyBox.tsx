import Image from 'next/image'
import React from 'react';
import img2 from '../img/Group 1484578135.png';
import { BsFillStarFill } from "react-icons/bs";
import { FaRegDotCircle } from "react-icons/fa";

function TinyBox() {
  return (
    <div className='md:px-4 px-14 md:w-4/6'>
              <div className='hidden md:inline md:w-1/4 md:text-3xl'>
                <h1 className='text-blue-500 inline'>ONE TIEME ONLY </h1>Special Price For 6 Extra Clarifion For Only <br /><h1 className='text-blue-500 inline'>$14 Each</h1> ($84.00)
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

export default TinyBox