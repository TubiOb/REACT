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
      <div className='grid md:grid-cols-3 grid-cols-1 items-center md:items-start justify-evenly w-full md:w-[60%] gap-6 md:gap-4 mt-2 p-4'>
        
        <Link to='/policies/motorInsurance'>
          <div className='grid grid-cols-1 items-center text-center justify-center gap-1 p-4 shadow-xl w-full  h-32 rounded-lg hover:cursor-pointer hover:shadow-2xl'>
            <img src={Protection} alt="" className='mx-auto'/>
            <p className='font-medium text-xs'>Motor Insurance</p>
          </div>
        </Link>

        <Link to='/policies'>
          <div className='grid grid-cols-1 items-center text-center justify-center gap-1 p-4 shadow-xl w-full  h-32 rounded-lg hover:cursor-pointer hover:shadow-2xl'>
            <img src={Selection} alt="" className='mx-auto'/>
            <p className='font-medium text-xs'>View all products</p>
          </div>
        </Link>
        
        <Link to=''>
          <div className='grid grid-cols-1 items-center text-center justify-center gap-1 p-4 shadow-xl w-full  h-32 rounded-lg hover:cursor-pointer hover:shadow-2xl'>
            <img src={Claims} alt="" className='mx-auto'/>
            <p className='font-medium text-xs'>File a claim</p>
          </div>
        </Link>
        
      </div>
    </div>
  )
}

export default QuickAction