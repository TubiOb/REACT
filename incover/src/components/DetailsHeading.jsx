import React from 'react'
import { AiOutlineDownload } from 'react-icons/ai'
// import { useLocation } from 'react-router-dom'
import { IoIosArrowForward } from 'react-icons/io'

const DetailsHeading = () => {
    // const location = useLocation();
    // const currentRoute = location.pathname.slice(1);

  return (
    <div className='w-full top-0 sticky right-0 border-b border-b-neutral-200 h-16 m-0 items-center bg-white justify-between py-4 px-2 md:px-6 flex'>
        <div className='items-center flex md:gap-1 gap-0'>
            <h2 className='font-semibold capitalize text-xs md:text-lg flex items-center'>MotorInsurance </h2>
            <IoIosArrowForward size={12}/>
            <span className='text-xs md:text-sm'>View details</span>
        </div>
      
      <div className='flex flex-row items-center justify-between gap-1 md:gap-1.5 bg-green-700 rounded-lg p-1 md:p-1.5 text-white font-semibold hover:cursor-pointer'>
        <AiOutlineDownload size={15}/>
        <h2 className='text-xs md:text-sm'>Download Certificate</h2>
      </div>
    </div>
  )
}

export default DetailsHeading