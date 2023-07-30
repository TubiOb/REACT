import React from 'react'
import { BiSolidPhoneCall } from 'react-icons/bi'

const Heading = () => {
  return (
    <div className='w-full top-0 sticky right-0 border-b border-b-neutral-100 h-16 m-0 items-center bg-white justify-between py-4 px-6 flex'>
      <h2 className='font-semibold text-xs md:text-sm'>Dashboard</h2>
      <div className='flex flex-row items-center text-xs justify-between gap-1.5 text-green-600 font-bold md:text-sm hover:cursor-pointer'><BiSolidPhoneCall />
        <h2>Ask for help</h2>
      </div>
    </div>
  )
}

export default Heading