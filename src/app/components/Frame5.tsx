
import React from 'react';
import TinyBox from './TinyBox';
import TicketLegend from './TicketLegend';
import BodyImg from './BodyImg';
import BlueBox from './BlueBox';
import GreenBtn from './GreenBtn';
import PayBox from './PayBox';
import GuaranteeBox from './GuaranteeBox';
import Review from './Review';

const Frame5 = () => {
  return (
    <div className='md:flex'>
      <div className='text-center text-2xl mx-6'>
        <div className='md:hidden'>
          <h1 className='text-blue-500 inline'>ONE TIEME ONLY </h1>Special Price For 6 Extra Clarifion For Only <br /><h1 className='text-blue-500 inline'>$14 Each</h1> ($84.00)
        </div>
      </div>
      <div className='md:flex flex-col md:w-2/5 md:items-end'>
        <BodyImg />
        <Review />
      </div>
        <div className='md:flex md:flex-col md:w-2/5'>
          <TinyBox />
          <TicketLegend />
          <BlueBox />
          <GreenBtn />
          <PayBox />
          <GuaranteeBox />
        </div>
    </div>
  )
}

export default Frame5