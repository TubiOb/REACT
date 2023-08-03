import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/BOI Ins Broker 1.png'
import myImage from '../assets/IMG_20210903_102641.jpg'
import { MdOutlineSpaceDashboard,  } from 'react-icons/md'
import { BsSubtract } from 'react-icons/bs'
import { GoShieldCheck } from 'react-icons/go'
import { IoIosArrowForward } from 'react-icons/io'
import { RiBillLine, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'

const SetupSidebar = () => {
    const [activeItem, setActiveItem] = useState('setup-guide');

    const handleItemClick = (item) => {
        setActiveItem(item);
    };

    const [isProfileOptionVisible, setProfileOptionVisible] = useState(false);

    const handleLiItemClick = () => {
      setProfileOptionVisible(true);
    };

    const handleIconClick = () => {
      setProfileOptionVisible(false);
    };

  return (
    <div className="w-40 md:w-64 flex flex-col bg-gray-50 text-gray-600 px-4 py-3 items-center justify-between top-0 bottom-0 left-0 fixed">
        <img src={logo} alt="BOI Ins Broker" className='w-[150px] mx-auto mt-4'/>

        <ul className='grid grid-cols-1 justify-between gap-16 h-auto mx-auto w-[80%] -mt-16 md:-mt-36'>
          <ul className='w-full gap-1.5'>
            <li className={`capitalize text-xs md:text-sm flex flex-row items-center justify-start p-1.5 w-full gap-1 hover:cursor-pointer hover:text-green-700 ${activeItem === 'dashboard' ? 'bg-green-100 text-green-700 font-semibold rounded-xl' : ''}`} onClick={() => handleItemClick('dashboard')}><Link to='/dashboard'  className='flex'><MdOutlineSpaceDashboard size={15} /> dashboard</Link></li>
            <li className={`capitalize text-xs md:text-sm flex flex-row items-center justify-start p-1.5 w-full gap-1 hover:cursor-pointer ${activeItem === 'setup-guide' ? 'bg-green-100 text-green-700 font-semibold rounded-xl' : ''}`} onClick={() => handleItemClick('setup-guide')}><Link to='/setup-guide'  className='flex'><BsSubtract size={15}/>setup guide</Link></li>
          </ul>

          <ul className='w-full gap-1.5'>
            <h3 className='text-gray-400 uppercase text-xs'>insurance</h3>
            <li className={`capitalize text-xs md:text-sm flex flex-row items-center justify-start p-1.5 w-full gap-1 hover:cursor-pointer hover:text-green-700 ${activeItem === 'my-policies' ? 'bg-green-100 text-green-700 font-semibold rounded-xl' : ''}`} onClick={() => handleItemClick('my-policies')}><Link to='/policies'  className='flex'><GoShieldCheck size={15}/>my policies</Link></li>
            <li className={`capitalize text-xs md:text-sm flex flex-row items-center justify-start p-1.5 w-full gap-1 hover:cursor-pointer hover:text-green-700 ${activeItem === 'my-claims' ? 'bg-green-100 text-green-700 font-semibold rounded-xl' : ''}`} onClick={() => handleItemClick('my-claims')}><RiBillLine size={15}/>my claims <IoIosArrowForward size={15} className='ml-3 md:ml-12'/></li>
          </ul>
        </ul>
        

        <ul className='w-[95%] mx-auto'>
          <li className='flex relative flex-row p-0.5 md:p-1.5 justify-between items-center hover:shadow-2xl hover:rounded-md' onClick={handleLiItemClick}>
            <img src={myImage} alt="" className='rounded-full w-5 md:w-7 object-cover'/>
            <p className='capitalize text-xs md:text-sm font-semibold '>fiyin oluwakemi</p>
            <RiArrowDownSLine size={20} />
            {isProfileOptionVisible && (
            <div className='flex flex-col items-center rounded-lg justify-between p-2 gap-1 absolute -top-[220px] left-1/2 right-1/2 transform translate-x-[-50%] shadow-xl bg-blue-300 w-[95%] mx-auto h-52'>
              <RiArrowUpSLine size={20} onClick={handleIconClick} className='cursor-pointer'/>
            </div>
            )}
          </li>
        </ul>

    </div>
  )
}

export default SetupSidebar