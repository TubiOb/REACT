import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { HiOutlineHomeModern } from 'react-icons/hi2'
import { MdOutlineBusAlert } from 'react-icons/md'
import { TbInfoSquareRounded } from 'react-icons/tb'
import { LiaUserAltSolid } from 'react-icons/lia'

const MobileNavigation = () => {
    const location = useLocation();

    const Menus = [
        { name: 'Home', icon: HiOutlineHomeModern, dis: 'translate-x-0', link: '/home' },
        { name: 'Schedule', icon: MdOutlineBusAlert, dis: 'translate-x-16', link: '/pickupSchedule' },
        { name: 'Updates', icon: TbInfoSquareRounded, dis: 'translate-x-32', link: '/updates' },
        { name: 'Profile', icon: LiaUserAltSolid, dis: 'translate-x-48', link: '/profile' }
    ];

    const activeIndex = Menus.findIndex(menu => menu.link === location.pathname);

    const [active, setActive] = useState(activeIndex !== -1 ? activeIndex : 0);

  return (
    <div className='md:w-[80%] mx-auto max-h-[4.4rem] z-40 flex md:hidden justify-center items-center fixed bottom-2 px-6 bg-white rounded-xl drop-shadow-2xl shadow-2xl'>
        <ul className='flex relative'>
            <span className={`border-neutral-100 duration-500 ${Menus[active].dis} border-4 bg-gray-900 h-16 w-16 absolute -top-5 rounded-full spade`}></span>
            {Menus.map((menu, i) => (
                    <li key={i} className='w-16'>
                        <Link className='flex flex-col items-center text-center pt-6' to={menu.link}  onClick={() => setActive(i)}>
                            <span className={`text-xl cursor-pointer duration-500 ${i === active && "-mt-6 text-white font-bold opacity-95"}`}><menu.icon size={25} className='font-bold' /></span>
                            <span className={` font-bold ${active === i ? 'translate-y-4 duration-700 opacity-100' : 'opacity-0 translate-y-10'} `}>{menu.name}</span>
                        </Link>
                    </li>
             ))}
        </ul>
    </div>
  )
}

export default MobileNavigation