import React from 'react'
import { MdOutlineAddBox } from 'react-icons/md'
import { useLocation } from 'react-router-dom'

const PolicyHead = () => {
     const location = useLocation();
     const currentRoute = location.pathname.slice(1);

  return (
    <div className='w-full top-0 sticky right-0 border-b border-b-neutral-100 h-16 m-0 items-center bg-white justify-between py-4 px-6 flex'>
      <h2 className='font-semibold capitalize text-xs md:text-lg'>{currentRoute}</h2>
      <div className='flex flex-row items-center text-xs justify-between gap-1.5 bg-green-700 rounded-lg p-1.5 text-white font-semibold hover:cursor-pointer'>
        <MdOutlineAddBox size={18}/>
        <h2>Add new policy</h2>
      </div>
    </div>
  )
}

export default PolicyHead