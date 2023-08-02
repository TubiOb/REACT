import React from 'react'
import { BiSolidPhoneCall } from 'react-icons/bi'
import { useLocation } from 'react-router-dom'

const Heading = () => {
  const location = useLocation();
  const currentRoute = location.pathname.slice(1);

  return (
    <div className='w-full top-0 sticky right-0 border-b border-b-neutral-200 h-16 m-0 items-center bg-white justify-between py-4 px-6 flex'>
      <h2 className='font-semibold capitalize text-xs md:text-lg'>{currentRoute}</h2>
      <div className='flex flex-row items-center text-xs justify-between gap-1.5 text-green-600 font-bold md:text-sm hover:cursor-pointer'><BiSolidPhoneCall />
        <h2>Ask for help</h2>
      </div>
    </div>
  )
}

export default Heading