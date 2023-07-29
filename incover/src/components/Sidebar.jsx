import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/BOI Ins Broker 1.png'
import myImage from '../assets/IMG_20210903_102641.jpg'
import { MdOutlineSpaceDashboard,  } from 'react-icons/md'
import { BsSubtract } from 'react-icons/bs'
import { GoShieldCheck } from 'react-icons/go'
import { IoIosArrowForward } from 'react-icons/io'
import { RiBillLine, RiArrowDownSLine } from 'react-icons/ri'

const Sidebar = () => {
  return (
    <div className="w-64 grid grid-cols-1 bg-gray-50 text-gray-600 px-4 py-0 items-center justify-between top-0 bottom-0 left-0 fixed">
        <img src={logo} alt="BOI Ins Broker" className='w-[150px] mx-auto -mt-16'/>

        <ul className='grid grid-cols-1 justify-between gap-16 h-auto mx-auto w-[80%] -mt-36'>
          <ul className='w-full gap-1.5'>
            <li className='capitalize text-sm flex items-center justify-start p-1.5 w-full gap-1'><Link to='/dashboard'  className='flex' /><MdOutlineSpaceDashboard size={15} /> dashboard</li>
            <li className='capitalize text-sm flex items-center justify-start p-1.5 w-full gap-1'><Link to='/dashboard'  className='flex' /><BsSubtract size={15}/>setup guide</li>
          </ul>

          <ul className='w-full gap-1.5'>
            <h3 className='text-gray-400 uppercase text-xs'>insurance</h3>
            <li className='capitalize text-sm flex items-center justify-start p-1.5 w-full gap-1'><Link to='/dashboard'  className='flex' /><GoShieldCheck size={15}/>my policies</li>
            <li className='capitalize text-sm flex items-center justify-start p-1.5 w-full gap-1'><Link to='/dashboard'  className='flex' /><RiBillLine size={15}/>my claims <IoIosArrowForward size={15} className='ml-12'/></li>
          </ul>
        </ul>
        

        <ul className='w-[80%] mx-auto'>
          <li className='flex p-1.5 justify-between items-center'>
            <img src={myImage} alt="" width={30} height={30} className='rounded-full object-cover'/>
            <p className='capitalize text-sm font-semibold'>fiyin oluwakemi</p>
            < RiArrowDownSLine  size={20}/>
          </li>
        </ul>

    </div>
  )
}

export default Sidebar