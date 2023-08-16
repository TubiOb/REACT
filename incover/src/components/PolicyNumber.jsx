import React from 'react'
import { useDataContext } from './DataContext';
import { BsSubtract } from 'react-icons/bs'

const PolicyNumber = () => {
  const { selectedPolicy } = useDataContext();
  console.log(selectedPolicy);

  if (!selectedPolicy) {
    return null;
  }

  return (
    <div className='w-full h-auto p-6 items-center justify-start gap-3 flex text-left text-xs md:text-sm border-b border-b-neutral-200'>
      <h3 className='font-semibold text-lg tracking-wide'>{selectedPolicy.policyNumber}</h3>
      <BsSubtract size={15} className='text-blue-600'/>
      {/* <h3 className='text-white font-semibold text-md'>DELULU IS THE SOLULU</h3> */}
    </div>
  )
}

export default PolicyNumber