import React from 'react'
import { RiArrowDownSLine } from 'react-icons/ri'

const Overview = () => {
  return (
    <div className='w-full px-6 py-4 h-auto items-center justify-between grid grid-cols-1'>
        <div className='flex items-center justify-between p-2'>
          <h3 className='font-semibold'>Overview</h3>
          <select className='text-sm outline-none border text-slate-600 border-neutral-400 rounded-lg py-2 px-3 pr-6'>
            <option value="" disabled selected>Last 30 days<RiArrowDownSLine /></option>
            <option value="option1">Last 30 days</option>
            <option value="option2">Last 60 days</option>
            <option value="option3">Last 90 days</option> 
          </select>

        </div>
    </div>
  )
}

export default Overview