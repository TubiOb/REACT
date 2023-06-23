import React from 'react'
import { FaRegEnvelope } from 'react-icons/fa'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-zinc-700 px-4 bg-[#fdfcdc]'>
        <h1 className='px-4 font-bold text-2xl md:text-3xl underline underline-offset-4'>Newsletter</h1>
        <div className='mx-auto grid lg:grid-cols-2 px-2 items-center gap-4'>
            <div className='lg:col-span-1 my-4 py-2 items-center'>
                <p className='pl-2 flex-grow text-md font-medium py-2'>Subscribe to our Staff Transport Scheme Newsletter and be the first to know about exclusive benefits, new routes, and exciting offers tailored just for you. Don't miss out on the opportunity to enhance your daily commute and enjoy a seamless transportation experience!</p>
            </div>
            <div className='my-4 py-2'>
                <div className='flex flex-row items-center justify-center outline-none bg-white rounded-md w-full'>
                    <input className='px-4 flex-gow w-full outline-none rounded-md text-gray-600' type="email" name="email" placeholder='Enter Email' />
                    <button className='ml-[-16px] text-[#7161ef] rounded-md px-4 py-2'>
                        <FaRegEnvelope className='' size={30} />
                    </button>
                    
                </div>
            </div>
        </div>
    </div>
  );
}

export default Newsletter