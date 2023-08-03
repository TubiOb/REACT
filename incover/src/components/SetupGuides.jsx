import React from 'react'
import { BsFillEyeFill } from 'react-icons/bs'

const SetupGuides = () => {
  return (
    <div className='flex flex-col w-full items-center justify-center mt-4 p-4'>
        <div className='flex flex-col flex-wrap items-center justify-center gap-2'>
          <h3 className='flex font-bold capitalize text-lg md:text-xl'>setup guide</h3>
          <p className='md:text-sm text-xs'>Let's get you started</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-5 mt-4 p-3'>
          <div className='flex flex-col items-center justify-center text-center border border-neutral-200 rounded-md break-all w-64 py-5 px-4 gap-2 text-sm'>
            <div className='flex rounded-md w-auto p-2 bg-gray-200 items-center justify-center'>
              <BsFillEyeFill size={26} className='text-green-300'/>
            </div>
            <h3 className='font-semibold'>Take a Tour</h3>
            <p className='text-neutral-600 text-xs'>Let’s show you around, to see all you can do on BOIIBOnline</p>
            <div className='wow flex flex-row-reverse p-2 rounded-full bg-green-400 my-3 justify-end'>
              
            </div>
          </div>
        </div>
    </div>
  )
}

export default SetupGuides