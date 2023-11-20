import React from 'react';
import { FaCheck } from "react-icons/fa6";

const TicketLegend = () => {
  return (
    <div className='flex flex-col items-start gap-y-4 px-4 md:ml-8'>
        <p className='text-sm text-slate-500 text-center my-3'>Simple plug a Clarifion into any standard outlet and replace bluky, expensive air purifiers with a simple</p>
        <div className='flex gap-x-1 justify-center mx-2'>
          <div className='text-blue-500 mx-2'>
              <FaCheck size={20} />
          </div>
          <p className='text-sm text-slate-600'>Negative Ion Technology may</p><p className='text-sm font-bold'>help with allergens</p>
        </div>
        <div className='flex gap-x-1 justify-center mx-2'>
          <div className='text-blue-500 mx-2'>
              <FaCheck size={20} />
          </div>
          <p className='text-sm text-slate-600'>Designed for</p><p className='text-sm font-bold'>air rejuvenation</p>
        </div>
        <div className='flex gap-x-1 justify-center mx-2'>
          <div className='text-blue-500 mx-2'>
              <FaCheck size={20} />
          </div>
          <p className='text-sm font-bold'>Perfect for every room</p><p className='text-sm text-slate-600'>in all types of places.</p>
        </div>
    </div>
  )
}

export default TicketLegend