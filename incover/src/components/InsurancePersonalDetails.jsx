import React from 'react'
import { RiShieldCheckFill } from 'react-icons/ri'

const InsurancePersonalDetails = () => {
  return (
    <div className='w-full md:w-[30%] h-screen flex flex-col items-center justify-center md:justify-start p-4 gap-2 md:border-r md:border-neutral-200'>
         <div className='w-full h-auto flex flex-row items-center text-sm justify-between p-2 border-b border-b-neutral-200'>
            <h3>Policyholder's details</h3>
            <div className='items-center justify-center rounded-full bg-blue-200 p-2'>
                <RiShieldCheckFill size={15} className='text-blue-500'/>
            </div>
        </div>
        <div className='flex flex-wrap items-center justify-between p-1 gap-10 w-[90%] mx-auto'>
            <label className="font-semibold text-gray-500 text-sm">
              First Name
              <p className="text-black">Samson</p>
            </label>
            <label className="font-semibold text-gray-500 text-sm">
              Last Name
              <p className="text-black">Adeyemo</p>
            </label>
            <label className="font-semibold text-gray-500 text-sm">
              Email
              <p className="text-black">Seun@boiibonline.ng</p>
            </label>
            <label className="font-semibold text-gray-500 text-sm">
              Phone Number
              <p className="text-black">09089898778</p>
            </label>
        </div>
    </div>
  )
}

export default InsurancePersonalDetails