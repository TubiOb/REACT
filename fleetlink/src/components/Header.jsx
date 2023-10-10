import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='w-full h-20 flex flex-row items-center justify-between gap-2 py-1 px-3 shadow-bottom'>
        <div className='flex p-1 text-base md:text-lg font-semibold'>
          <Link ><h2>FleetLink</h2></Link>
        </div>
        <div className='flex p-1 items-center'>
          <ul className='flex flex-row items-center justify-between gap-24 p-1'>
            <Link><li>Home</li></Link>
            <Link><li>Pick-up Schedule</li></Link>
            <Link><li>Updates</li></Link>
            
          </ul>
        </div>
        <div className='flex'>
          <Link>
            <div>
              
            </div>
          </Link>
        </div>
    </div>
  )
}

export default Header