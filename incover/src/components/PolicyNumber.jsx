import React from 'react'
import { useDataContext } from './DataContext';

const PolicyNumber = () => {
  const { selectedPolicy } = useDataContext();
  console.log(selectedPolicy);

  if (!selectedPolicy) {
    return null;
  }

  return (
    <div className='w-full h-auto p-2 items-center justify-start flex text-left text-xs md:text-sm'>
      <h3 className='text-white font-semibold text-md'>{selectedPolicy.policyNumber}</h3>
      {/* <h3 className='text-white font-semibold text-md'>DELULU IS THE SOLULU</h3> */}
    </div>
  )
}

export default PolicyNumber