import React from 'react';
import { IoLockClosedOutline } from "react-icons/io5";
import visa from '../img/visa.png';
import shop from '../img/shop pay.png';
import paypal from '../img/paypal.png';
import master from '../img/mastercard.png';
import gpay from '../img/gpay.png';
import apple from '../img/apple pay.png';
import amex from '../img/amex.png';
import Image from 'next/image';

const PayBox = () => {
  return (
    <div className='flex flex-col justify-center border rounded-md p-2 m-4'>
        <div className='flex items-center border-b pb-2'>
            <p className='text-sm text-slate-600 border-r px-2'>Free Shiping</p>
            <div className='px-2'>
                <IoLockClosedOutline  />
            </div>
            <p className='text-sm text-slate-600'> Secure 256-Bit SSL Encryption</p>
        </div>
        <div className='flex justify-center mt-4'>
            <Image src={visa} alt='logo' width={24} height={14} />
            <Image src={shop} alt='logo' width={24} height={14} />
            <Image src={paypal} alt='logo' width={24} height={14} />
            <Image src={master} alt='logo' width={24} height={14} />
            <Image src={gpay} alt='logo' width={24} height={14} />
            <Image src={apple} alt='logo' width={24} height={14} />
            <Image src={amex} alt='logo' width={24} height={14} />
        </div>
    </div>
  )
}

export default PayBox