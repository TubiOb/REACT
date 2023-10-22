import React from 'react'
import { Link, useLocation } from 'react-router-dom'
// import UserProfile from '../assets/IMG_20210903_102641.jpg'
import { RiUser3Line } from 'react-icons/ri'

const Header = () => {
  const location = useLocation();
  // const isHome = location.pathname === '/home';

  const menuItems = [
      { name: 'Home', link: '/home' },
      { name: 'Pick-up Schedule', link: '/pickupSchedule' },
      { name: 'Updates', link: '/updates' },
  ];

  return (
    <div className='w-full h-20 flex flex-row items-center justify-between z-10 bg-white fixed top-0 left-0 gap-2 py-1 px-6 shadow-bottom'>
        <div className='flex p-1 text-base md:text-lg font-semibold'>
          <Link to='/home'><h2>FleetLink</h2></Link>
        </div>

          <div className='md:flex p-1 items-center hidden'>
            <ul className='flex flex-row items-center justify-between gap-24 p-1'>
                {menuItems.map((menuItem) => (
                    <Link to={menuItem.link} key={menuItem.link}>
                        <li className={location.pathname === menuItem.link ? 'active-link font-semibold transition duration-500' : ''}>
                            {menuItem.name}
                        </li>
                    </Link>
                ))}
            </ul>
          </div>

          <div className='rounded-full w-7 h-7 md:w-9 md:h-9 overflow-hidden border border-neutral-300'>
            <a href="/profile" className='flex w-full h-full p-2'>
              <RiUser3Line  className='object-cover w-full h-full'/>
            </a>
          </div>
        
    </div>
  )
}

export default Header