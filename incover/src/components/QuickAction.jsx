import React from 'react'
import { Link } from 'react-router-dom'
import Protection from '../assets/protection 1.svg'
import Selection from '../assets/select-all 1.svg'
import Claims from '../assets/claim (2) 1.svg'
const QuickAction = () => {
  return (
    <div className='w-full px-6 py-4 h-auto md:items-start justify-between grid grid-cols-1'>
      <h3 className='font-semibold'>
        Quick Actions
      </h3>
      <div className='md:flex-row flex-col items-center md:items-start justify-evenly w-full md:w-[1144px] md:gap-4 mt-2 p-4        md:justify-start gap-8 inline-flex '>
        
        <Link to='/policies/motorInsurance'>
          <div className='flex-col items-center text-center justify-center px-4 py-6 bg-white shadow-xl w-[162px] h-[167px] rounded-2xl hover:cursor-pointer hover:shadow-2xl gap-4 inline-flex'>
            <img src={Protection} alt="" className='mx-auto w-[60px] h-[60px]'/>
            <p className="font-medium text-xs text-center text-neutral-600 md:text-base font-['Red Hat Display'] leading-normal">Motor Insurance</p>
          </div>
        </Link>

        <Link to='/policies'>
          <div className='flex-col items-center text-center justify-center px-4 py-6 bg-white shadow-xl w-[162px] h-[167px] rounded-2xl hover:cursor-pointer hover:shadow-2xl gap-4 inline-flex'>
            <img src={Selection} alt="" className='mx-auto w-[60px] h-[60px]'/>
            <p className="font-medium text-xs text-center text-neutral-600 md:text-base font-['Red Hat Display'] leading-normal">View all products</p>
          </div>
        </Link>
        
        <Link to=''>
          <div className='flex-col items-center text-center justify-center px-4 py-6 bg-white shadow-xl w-[162px] h-[167px] rounded-2xl hover:cursor-pointer hover:shadow-2xl gap-4 inline-flex'>
            <img src={Claims} alt="" className='mx-auto w-[60px] h-[60px]'/>
            <p className="font-medium text-xs text-center text-neutral-600 md:text-base font-['Red Hat Display'] leading-normal">File a claim</p>
          </div>
        </Link>
        
      </div>
    </div>
  )
}

export default QuickAction