import React from 'react'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'

const PageNavigation = () => {
  return (
    <div className='flex flex-row items-center justify-between w-[95%] mx-auto mt-16 md:mt-2'>
        <div className='flex items-center justify-center'>
            <h3 className='text-sm'><span className='font-semibold'>Records: </span>1-13 of 35</h3>
        </div>
        <div className='flex flex-row gap-3 items-center justify-center'>
            <BiLeftArrowAlt size={20} className='text-green-700 hover:text-white hover:bg-green-700 hover:rounded-full cursor-pointer'/>
            <h3 className='text-sm'>Page</h3>
            <select className='text-xs md:text-sm outline-none border text-slate-600 border-neutral-400 justify-center items-center selection:bg-green-700 selection:text-white rounded-lg py-1 px-2 md:py-1 md:px-2 cursor-pointer' defaultValue='1'>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <h3 className='text-sm'>of 35</h3>
          <BiRightArrowAlt size={20} className='text-white rounded-full bg-green-700 cursor-pointer'/>
        </div>
    </div>
  )
}

export default PageNavigation