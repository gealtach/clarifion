import React from 'react';
import { IoLockClosedOutline } from "react-icons/io5";

const Frame12 = () => {
  return (
    <div className='flex flex-col bg-slate-800 w-full text-white py-4'>
        <div className='flex items-center w-full justify-center'>
            <p className='text-sm border-white border-r pr-4 my-4'>Copyright (C) 2023</p><p className='text-xs pl-4 my-4'>clarifionsupport@clarifion.com</p>
        </div>
        <div className='flex gap-x-4 justify-center'>
            <IoLockClosedOutline />
            <p className='text-sm'>Secure 256-Bit SSL Encryption.</p>
        </div>

    </div>
  )
}

export default Frame12