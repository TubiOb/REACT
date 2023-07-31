import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/BOI Ins Broker 1.png'

const PolicySidebar = () => {
  return (
    <div className="w-40 md:w-64 grid grid-cols-1 bg-gray-50 text-gray-600 px-4 py-0 items-center justify-between top-0 bottom-0 left-0 fixed">
        <img src={logo} alt="BOI Ins Broker" className='w-[150px] mx-auto -mt-16'/>

        <ul className='grid grid-cols-1 justify-between gap-16 h-auto mx-auto w-[80%] -mt-16 md:-mt-36'>
            
        </ul>
    </div>
  )
}

export default PolicySidebar