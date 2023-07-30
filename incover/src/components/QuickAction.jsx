import React from 'react'
import Protection from '../assets/protection 1.svg'
import Selection from '../assets/select-all 1.svg'
import Claims from '../assets/claim (2) 1.svg'
const QuickAction = () => {
  return (
    <div className='w-full px-6 py-4 h-auto items-start justify-between grid grid-cols-1'>
      <h3 className='font-semibold'>
        Quick Actions
      </h3>
      <div className='grid md:grid-cols-3 grid-cols-1 items-start justify-between w-[50%] gap-2 mt-2 p-4'>
        
        <div className='grid grid-cols-1 items-center text-center justify-center gap-1 p-4 shadow-xl w-32 h-32 rounded-lg hover:cursor-pointer'>
          <img src={Protection} alt="" className='mx-auto'/>
          <p className='font-medium text-xs'>Motor Insurance</p>
        </div>
        <div className='grid grid-cols-1 items-center text-center justify-center gap-1 p-4 shadow-xl w-32 h-32 rounded-lg hover:cursor-pointer'>
          <img src={Selection} alt="" className='mx-auto'/>
          <p className='font-medium text-xs'>View all products</p>
        </div>
        <div className='grid grid-cols-1 items-center text-center justify-center gap-1 p-4 shadow-xl w-32 h-32 rounded-lg hover:cursor-pointer'>
          <img src={Claims} alt="" className='mx-auto'/>
          <p className='font-medium text-xs'>File a claim</p>
        </div>
      </div>
    </div>
  )
}

export default QuickAction