import Image from 'next/image';
import React from 'react';
import guarantee from '../img/image 6.png';

const GuaranteeBox = () => {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-red-600 underline text-sm my-2'>NO THANKS, I DON'T WANT THIS.</h1>
      <div className='flex m-4 justify-center'>
          <div className='ml-6'>
              <Image src={guarantee} alt='logo' width={48} height={48} />
          </div>
          <h1 className='text-xs text-slate-600 w-1/2 mx-4 px-3'>If you are not completely thrulled with your Clarifion - We have a <strong>30 days satisfaction guarantee.</strong> Please refer to our return policy at the bottom of the page for more details. <br />Happy Shopping!</h1>
      </div>
    </div>
  )
}

export default GuaranteeBox