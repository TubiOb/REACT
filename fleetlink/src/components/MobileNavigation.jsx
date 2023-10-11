import React, { useState } from 'react'
import { HiOutlineHomeModern } from 'react-icons/hi2'
import { MdOutlineBusAlert } from 'react-icons/md'
import { TbInfoSquareRounded } from 'react-icons/tb'
import { LiaUserAltSolid } from 'react-icons/lia'

const MobileNavigation = () => {

    const Menus = [
        { name: 'Home', icon: HiOutlineHomeModern, dis: 'translate-x-0', link: '/home' },
        { name: 'Schedule', icon: MdOutlineBusAlert, dis: 'translate-x-16', link: '/pickupSchedule' },
        { name: 'Updates', icon: TbInfoSquareRounded, dis: 'translate-x-32', link: '/updates' },
        { name: 'Profile', icon: LiaUserAltSolid, dis: 'translate-x-48', link: '/profile' }
    ];

    const [active, setActive] = useState(0);

  return (
    <div className='w-full max-h-[4.4rem] flex md:hidden fixed bottom-0 left-0 px-6 bg-white rounded-t-xl'>
        <ul className='flex w-full relative items-center justify-between'>
            <span className='border-neutral-100 border-4 bg-neutral-500 h-16 w-16 absolute -top-5 rounded-full'></span>
            {Menus.map((menu, i) => (
                    <li key={i} className='w-16'>
                        <a className='flex flex-col items-center text-center pt-6' href={menu.link} onClick={() => setActive(i)}>
                            <span className={`text-xl cursor-pointer duration-500 ${i === active && "-mt-6 text-red-500 font-bold"}`}><menu.icon size={25}/></span>
                            <span className={` ${active === i ? 'translate-y-4 duration-700 opacity-100' : 'opacity-0 translate-y-10'} `}>{menu.name}</span>
                        </a>
                    </li>
             ))}
        </ul>
    </div>
  )
}

export default MobileNavigation