import React from 'react'
import { AiOutlineEye } from 'react-icons/ai'
import { CiMenuKebab } from 'react-icons/ci'
import { useDataContext } from './DataContext';

const InsurancePolicyDetails = () => {
  const { selectedPolicy } = useDataContext();

  if (!selectedPolicy) {
    return null;
  }

  return (
    <div className='w-full md:w-[70%] flex flex-col items-center justify-center md:justify-start p-1 md:p-4 gap-4'>
      <h3 className='font-semibold text-xl text-left mt-2 mr-auto'>Claim details</h3>

      <div className='w-full rounded-lg items-center justify-start flex flex-col border border-neutral-300'>
        <div className='w-full h-auto flex flex-row items-center text-sm justify-between p-2'>
            <div className='flex flex-col text-left gap-1 p-1'>
              <h3 className='font-semibold text-lg text-left'>Policy details</h3>
              <p className='text-neutral-500'>This is the details of the plan you purchased under this policy</p>
            </div>
            <div className='flex flex-row items-center justify-center border border-neutral-300 rounded-md gap-2 p-2'>
                <AiOutlineEye size={25} className='font-thin'/>
                <p className='text-sm font-medium'>view documents</p>
            </div>
        </div>
        <div className='flex flex-wrap items-center justify-between p-0 md:p-3 w-full gap-4 bg-neutral-200'>
          <div className='w-[45%] flex flex-wrap break-all items-center justify-between text-xs md:text-sm p-1'>
            <label className="text-gray-500">File name</label>
            <p className="text-black font-semibold">₦1,000</p>
          </div>
           <div className='w-[45%] flex flex-wrap break-all items-center justify-between text-xs md:text-sm p-1'>
            <label className="text-gray-500">Claims type</label>
            <p className="text-black font-semibold">Accident</p>
          </div>
           <div className='w-[45%] flex flex-wrap break-all items-center justify-between text-xs md:text-sm p-1'>
            <label className="text-gray-500">Firm phone number</label>
            <p className="text-black font-semibold">09075875757</p>
          </div>
           <div className='w-[45%] flex flex-wrap break-all items-center justify-between text-xs md:text-sm p-1'>
            <label className="text-gray-500">Policy number</label>
            <p className="text-black font-semibold">{selectedPolicy.policyNumber}</p>
          </div>
           <div className='w-[45%] flex flex-wrap break-all items-center justify-between text-xs md:text-sm p-1'>
            <label className="text-gray-500">Insurance type</label>
            <p className="text-black font-semibold">Percentage fee</p>
          </div>
           <div className='w-[45%] flex flex-wrap break-all items-center justify-between text-xs md:text-sm p-1'>
            <label className="text-gray-500">Claims type</label>
            <p className="text-black font-semibold">23-07-2023</p>
          </div>
           <div className='w-[45%] flex flex-wrap break-all items-center justify-between text-xs md:text-sm p-1'>
            <label className="text-gray-500">Insurance type</label>
            <p className="text-black font-semibold">Percentage fee</p>
          </div>
           <div className='w-[45%] flex flex-wrap break-all items-center justify-between text-xs md:text-sm p-1'>
            <label className="text-gray-500">Amount paid</label>
            <p className="text-black font-semibold">{selectedPolicy.premium}</p>
          </div>
           <div className='w-[45%] flex flex-wrap break-all items-center justify-between text-xs md:text-sm p-1'>
            <label className="text-gray-500">Date of incidence</label>
            <p className="text-black font-semibold">11-07-2023</p>
          </div>
           <div className='w-[45%] flex flex-wrap break-all items-center justify-between text-xs md:text-sm p-1'>
            <label className="text-gray-500">Time of incident</label>
            <p className="text-black font-semibold">10:00 AM</p>
          </div>
           <div className='w-[45%] flex flex-wrap break-all items-center justify-between text-xs md:text-sm p-1'>
            <label className="text-gray-500">Claim acknowledged?</label>
            <p className="text-black font-semibold">No</p>
          </div>
           <div className='w-[45%] flex flex-wrap break-all items-center justify-between text-xs md:text-sm p-1'>
            <label className="text-gray-500">Reported to police?</label>
            <p className="text-black font-semibold">Yes</p>
          </div>
           <div className='w-[45%] flex flex-wrap break-all items-center justify-between text-xs md:text-sm p-1'>
            <label className="text-gray-500">Acknowledged by</label>
            <p className="text-black font-semibold">No</p>
          </div>
           <div className='w-[45%] flex flex-wrap break-all items-center justify-between text-xs md:text-sm p-1'>
            <label className="text-gray-500">Name of police station</label>
            <p className="text-black font-semibold">Yes</p>
          </div>
           <div className='w-[45%] flex flex-wrap break-all items-center justify-between text-xs md:text-sm p-1'>
            <label className="text-gray-500">Claim settled?</label>
            <p className="text-black font-semibold">No</p>
          </div>
           <div className='w-[45%] flex flex-wrap break-all items-center justify-between text-xs md:text-sm p-1'>
            <label className="text-gray-500">Name of police officer</label>
            <p className="text-black font-semibold">Yes</p>
          </div>
           <div className='w-[45%] flex flex-wrap break-all items-center justify-between text-xs md:text-sm p-1'>
            <label className="text-gray-500">Settled by</label>
            <p className="text-black font-semibold">No</p>
          </div>
           <div className='w-[45%] flex flex-wrap items-center justify-between text-xs md:text-sm p-1'>
            <label className="text-gray-500">Firm email</label>
            <p className="text-black font-semibold break-all">neminsurance@incover.com.ng</p>
          </div>
          <div className='w-[45%] flex flex-wrap break-all items-center justify-between text-xs md:text-sm p-1'>
            <label className="text-gray-500">Eye Witness account</label>
            <p className="text-black font-semibold">I saw</p>
          </div>
          <div className='w-[45%] flex flex-wrap break-all items-center justify-between text-xs md:text-sm p-1'>
            <label className="text-gray-500">Claim description</label>
            <p className="text-black font-semibold">The car was hit by a truck</p>
          </div>
        </div>
      </div>

      <div className='w-full flex flex-col text-left mt-4 mb-2 overflow-x-auto md:overflow-x-hidden'>
        <h3 className='font-bold text-base'>Witnesses's List</h3>
        <table className="border-collapse border border-gray-300 w-full text-sm table-auto rounded-lg">
          <thead>
            <tr className="bg-gray-100 text-neutral-500 font-extralight text-sm">
              <th className="p-2">S/N</th>
              <th className="p-2">Full Name</th>
              <th className="p-2">Address</th>
              <th className="p-2">Victim of the accident?</th>
              <th className="p-2"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="border border-gray-300">
              <td className="p-2">01</td>
              <td className="p-2">Stef Stevia</td>
              <td className="p-2">Ikoyi comfort zone</td>
              <td className="p-2">Yes</td>
              <td className="p-2 flex items-center justify-center md:p-4 mx-auto relative hover:cursor-pointer"><CiMenuKebab size={18} className='relative'/></td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2">02</td>
              <td className="p-2">Stef Stevia</td>
              <td className="p-2">Ikoyi comfort zone</td>
              <td className="p-2">Yes</td>
              <td className="p-2 flex items-center justify-center md:p-4 mx-auto relative hover:cursor-pointer"><CiMenuKebab size={18} className='relative'/></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='w-full flex flex-col text-left mt-4 mb-2 overflow-x-auto md:overflow-x-hidden'>
        <h3 className='font-bold text-base'>Other parties involved in the Accident</h3>
        <table className="border-collapse border border-gray-300 w-full text-sm table-auto rounded-lg">
          <thead>
            <tr className="bg-gray-100 text-neutral-500 font-normal text-sm">
              <th className="p-2">S/N</th>
              <th className="p-2">Motor Make</th>
              <th className="p-2">Reg. Number</th>
              <th className="p-2">Address</th>
              <th className="p-2">Insurer</th>
              <th className="p-2">Damage Details</th>
              <th className="p-2"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="border border-gray-300">
              <td className="p-2">01</td>
              <td className="p-2">Tesla</td>
              <td className="p-2">Model S</td>
              <td className="p-2">Comfort zone</td>
              <td className="p-2">Linkage Insurance</td>
              <td className="p-2">Side Scratch</td>
              <td className="p-2 flex items-center justify-center md:p-4 mx-auto relative hover:cursor-pointer"><CiMenuKebab size={18} className='relative'/></td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2">02</td>
              <td className="p-2">Tesla</td>
              <td className="p-2">Model S</td>
              <td className="p-2">Comfort zone</td>
              <td className="p-2">Linkage Insurance</td>
              <td className="p-2">Side Scratch</td>
              <td className="p-2 flex items-center justify-center md:p-4 mx-auto relative hover:cursor-pointer"><CiMenuKebab size={18} className='relative'/></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='w-full flex flex-col text-left mt-4 mb-2 overflow-x-auto md:overflow-x-hidden'>
        <h3 className='font-bold text-base'>Other parties involved in the Accident</h3>
        <table className="border-collapse border border-gray-300 w-full text-sm table-auto rounded-lg">
          <thead>
            <tr className="bg-gray-100 text-neutral-500 font-extralight text-sm">
              <th className="p-2">S/N</th>
              <th className="p-2">Reg. Number</th>
              <th className="p-2">Load capacity</th>
              <th className="p-2">Vehicle make</th>
              <th className="p-2">Vehicle Year</th>
              <th className="p-2">Trailer</th>
              <th className="p-2">Were goods carried?</th>
              <th className="p-2"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="border border-gray-300">
              <td className="p-2">01</td>
              <td className="p-2">123-232-234</td>
              <td className="p-2">12</td>
              <td className="p-2">Nissan</td>
              <td className="p-2">2003</td>
              <td className="p-2">3</td>
              <td className="p-2">Yes</td>
              <td className="p-2 flex items-center justify-center md:p-4 mx-auto relative hover:cursor-pointer"><CiMenuKebab size={18} className='relative'/></td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2">02</td>
              <td className="p-2">123-232-234</td>
              <td className="p-2">12</td>
              <td className="p-2">Nissan</td>
              <td className="p-2">2003</td>
              <td className="p-2">3</td>
              <td className="p-2">Yes</td>
              <td className="p-2 flex items-center justify-center md:p-4 mx-auto relative hover:cursor-pointer"><CiMenuKebab size={18} className='relative'/></td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default InsurancePolicyDetails