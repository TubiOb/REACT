import React from 'react'
// import { RiArrowDownSLine } from 'react-icons/ri'

const Overview = () => {
  return (
    <div className='w-full px-6 py-4 h-auto items-center justify-between grid grid-cols-1'>
        <div className='flex flex-wrap items-center justify-between p-2'>
          <h3 className='font-semibold text-sm'>Overview</h3>
          <select className='text-xs md:text-sm outline-none border text-slate-600 border-neutral-400 justify-center items-center selection:bg-green-700 selection:text-white rounded-lg py-1 px-2 md:py-2 md:px-3 cursor-pointer' defaultValue='Last 30 days'>
            <option value="Last 30 days">Last 30 days</option>
            <option value="Last 60 days">Last 60 days</option>
            <option value="Last 90 days">Last 90 days</option>
            <option value="Last 120 days">Last 120 days</option> 
          </select>
        </div>

        <div className='grid md:grid-cols-3 grid-cols-1 items-center justify-between gap-4 mt-3 w-full mx-auto p-4'>
          <div className='flex flex-col items-start justify-between text-left text-white bg-green-700 p-4 border border-green-700 gap-2 rounded-lg w-full cursor-pointer'>
            <p className='text-xs'>Total Premium</p>
            <h3 className='text-xl font-semibold'>₦1,000</h3>
          </div>
          <div className='flex flex-col items-start justify-between text-left p-4 border border-green-700 gap-2 rounded-lg w-full cursor-pointer'>
            <p className='text-xs'>Total Policies</p>
            <h3 className='text-xl font-semibold'>4</h3>
          </div>
          <div className='flex flex-col items-start justify-between text-left p-4 border border-green-700 gap-2 rounded-lg w-full cursor-pointer'>
            <p className='text-xs'>Total Claims Processed</p>
            <h3 className='text-xl font-semibold'>3</h3>
          </div>
        </div>
    </div>
  )
}

export default Overview