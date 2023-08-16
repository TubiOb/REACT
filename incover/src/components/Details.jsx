import React from 'react'
import Backbutton from './Backbutton'
import PolicyNumber from './PolicyNumber'
import { useDataContext } from './DataContext';

const Details = () => {
   const { selectedPolicy } = useDataContext();
  return (
    <div className='flex flex-col items-center bg-red-800 justify-between w-full h-auto p-4'>
      <div className='flex flex-row md:hidden items-center justify-start gap-3 md:gap-6 p-1 w-full relative mt-1'>
        <Backbutton />
        <h3 className='text-xs md:text-sm font-light'>Motor Insurance</h3>
      </div>
      {selectedPolicy && <PolicyNumber />}
    </div>
  )
}

export default Details