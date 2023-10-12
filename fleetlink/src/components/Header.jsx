import React from 'react'
import { Link } from 'react-router-dom'
import UserProfile from '../assets/IMG_20210903_102641.jpg'

const Header = () => {
  return (
    <div className='w-full h-20 flex flex-row items-center justify-between fixed top-0 left-0 gap-2 py-1 px-6 shadow-bottom'>
        <div className='flex p-1 text-base md:text-lg font-semibold'>
          <Link ><h2>FleetLink</h2></Link>
        </div>

          <div className='md:flex p-1 items-center hidden'>
            <ul className='flex flex-row items-center justify-between gap-24 p-1'>
              <Link to='/home'><li>Home</li></Link>
              <Link to='/pickupSchedule'><li>Pick-up Schedule</li></Link>
              <Link to='/updates'><li>Updates</li></Link>
            </ul>
          </div>

          <div className='rounded-full w-7 h-7 md:w-9 md:h-9 overflow-hidden'>
            <a href="/profile" className='flex w-full h-full'>
            
              <img src={UserProfile} alt=""  className='object-cover w-full h-full'/>
            
            </a>
          </div>
        
    </div>
  )
}

export default Header