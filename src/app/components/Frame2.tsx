import Image from 'next/image';
import React from 'react';
import clarifion from '../img/600a41c73b670a97ae1d4f47_Clarifion_Logo 1.png';
import mcafee from '../img/McAfee_Secure.png';
import norton from '../img/norton-antivirus-logo 1.png';

const Frame2 = () => {
  return (
    <div className='flex p-2 mx-4 justify-between'>
        <Image src={clarifion} alt='logo' width={100} height={30} />
        <div className='flex gap-x-3'>
            <Image src={mcafee} alt='McAfee' width={44} height={16} />
            <Image src={norton} alt='Norton' width={44} height={16} />
        </div>
    </div>
  )
}

export default Frame2