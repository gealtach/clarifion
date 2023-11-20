import React from 'react';
import { PiPercentDuotone } from 'react-icons/pi';

const Frame8 = () => {
  return (
    <div className='flex bg-blue-200 p-4 m-6 rounded-lg gap-x-4 items-center'>
        <div className='bg-blue-600 text-white h-fit rounded-full p-2'>
            <PiPercentDuotone size={15} />
        </div>
        <div className=''>
            <p className='text-sm inline'>Save</p>
            <p className='text-blue-500 inline mx-1'>53%</p>
            <p className='text-sm inline '>and get</p>
            <p className='text-blue-500 inline mx-1'>6 extra Clarifision</p>
            <br />
            <p className='text-sm inline'>for only</p>
            <p className='text-blue-500 inline mx-1'>$14 Each.</p>
        </div>
    </div>
  )
}

export default Frame8