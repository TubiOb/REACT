import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/BOI Ins Broker 1.png'
import myImage from '../assets/IMG_20210903_102641.jpg'
import Backbutton from './Backbutton'
import { RiShieldCheckLine, RiArrowDownSLine } from 'react-icons/ri'


const PolicySidebar = () => {
    const [activeItem, setActiveItem] = useState('motor insurance');

    const handleItemClick = (item) => {
        setActiveItem(item);
    };

  return (
    <div className="w-40 md:w-64 flex flex-col bg-gray-50 text-gray-600 px-4 py-3 items-center justify-between top-0 bottom-0 left-0 fixed">
        <img src={logo} alt="BOI Ins Broker" className='w-[150px] sticky mx-auto mt-4'/>

        <div className='flex items-center justify-start gap-16 p-1 w-[80%] mx-auto -mt-16 md:-mt-36'>
            <Backbutton />
            <h3 className='text-sm font-light'>My Policies</h3>
        </div>

        <ul className='grid grid-cols-1 justify-between gap-2 h-auto mx-auto w-[80%] -mt-16 md:-mt-36'>
            <li className={`capitalize text-xs md:text-sm flex flex-row items-center justify-start p-1.5 w-full gap-1 hover:cursor-pointer ${activeItem === 'motor insurance' ? 'bg-green-50 text-green-700 font-semibold rounded-xl' : ''}`} onClick={() => handleItemClick('dashboard')}><Link to='/'  className='flex' /><RiShieldCheckLine size={15} /> Motor Insurance</li>
            <li className={`capitalize text-xs md:text-sm flex flex-row items-center justify-start p-1.5 w-full gap-1 hover:cursor-pointer ${activeItem === 'health insurance' ? 'bg-green-50 text-green-700 font-semibold rounded-xl' : ''}`} onClick={() => handleItemClick('setup-guide')}><Link to='/'  className='flex' /><RiShieldCheckLine size={15}/>Health Insurance</li>
            <li className={`capitalize text-xs md:text-sm flex flex-row items-center justify-start p-1.5 w-full gap-1 hover:cursor-pointer ${activeItem === 'health insurance' ? 'bg-green-50 text-green-700 font-semibold rounded-xl' : ''}`} onClick={() => handleItemClick('dashboard')}><Link to='/'  className='flex' /><RiShieldCheckLine size={15} /> Health Insurance</li>
            <li className={`capitalize text-xs md:text-sm flex flex-row items-center justify-start p-1.5 w-full gap-1 hover:cursor-pointer ${activeItem === 'health insurance' ? 'bg-green-50 text-green-700 font-semibold rounded-xl' : ''}`} onClick={() => handleItemClick('setup-guide')}><Link to='/'  className='flex' /><RiShieldCheckLine size={15}/>Health Insurance</li>
        </ul>

        <ul className='w-[95%] mx-auto'>
          <li className='flex flex-row p-0.5 md:p-1.5 justify-between items-center'>
            <img src={myImage} alt="" className='rounded-full w-5 md:w-7 object-cover'/>
            <p className='capitalize text-xs md:text-sm font-semibold '>fiyin oluwakemi</p>
            <RiArrowDownSLine  size={20}/>
          </li>
        </ul>
    </div>
  )
}

export default PolicySidebar