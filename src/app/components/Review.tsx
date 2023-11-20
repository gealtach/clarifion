import Image from 'next/image'
import React from 'react';
import profile from '../img/Rectangle 1127.png';
import { IoStar } from "react-icons/io5";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Review = () => {
  return (
    <div className='hidden md:flex md:flex-col w-4/6 pr-10'>
        <div className='flex gap-4 items-center'>
            <div>
                <Image src={profile} alt='profile' width={48} height={48} />
            </div>
            <div className='flex flex-col'>
                <div className='flex text-yellow-400'>
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                </div>
                <div className='flex gap-x-4'>
                    <h1 className='text-xs font-bold'>Ken T.</h1>
                    <div className='text-green-600'>
                        <BsFillPatchCheckFill />
                    </div>
                    <h1 className='text-green-600 text-xs'>Verified Customer</h1>
                </div>
            </div>
        </div>
        <h1 className='text-xs'>"As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When i went to the bedroom in the evening it smelled clean. When i went to bed I felt I could breathe better. Wonderful."</h1>
    </div>
  )
}

export default Review