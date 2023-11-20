import React from 'react';
import Image from 'next/image';
import img from '../img/image 4.png';

const BodyImg = () => {
  return (
    <div className='flex flex-col items-center my-4 gap-y-4 md:flex-row md:items-start'>
            <div className='md:hidden'>
                <Image src={img} alt='img' width={320} />
            </div>
            <div className='hidden md:flex'>
                <Image src={img} alt='img' width={575} />
            </div>
          </div>
  )
}

export default BodyImg