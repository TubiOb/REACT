import React from 'react'
// import { MdOutlineAddBox } from 'react-icons/md'
// import { useLocation } from 'react-router-dom'
import Add from '../assets/add-square.svg'

const MotorInsuranceHeading = () => {
    // const location = useLocation();
    // const currentRoute = location.pathname.slice(1);

  return (
    <div className='w-full top-0 sticky right-0 border-b border-b-neutral-200 h-16 m-0 items-center bg-white justify-between py-4 px-6 flex z-40'>
      <h2 className='font-semibold capitalize text-xs md:text-lg'>Motor Insurance</h2>
      <div className="Buttons w-[135px] h-11 p-3 bg-green-800 rounded-lg justify-center items-center gap-2 inline-flex">
          <div className="AddSquare w-5 h-5 relative">
              <img src={Add} className="AddSquare w-5 h-5 left-0 top-0 absolute"/>
          </div>
          <div className="Button2 text-white text-xs font-medium font-['Red Hat Display'] leading-none">Add new policy</div>
      </div>
    </div>
  )
}

export default MotorInsuranceHeading