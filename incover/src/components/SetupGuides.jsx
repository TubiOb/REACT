import React from 'react'

const SetupGuides = () => {
  return (
    <div className='flex flex-col w-full items-center justify-center mt-4 p-4'>
        <div className='flex flex-col flex-wrap items-center justify-center gap-2'>
          <h3 className='flex font-bold capitalize text-lg md:text-xl'>setup guide</h3>
          <p className='md:text-sm text-xs'>Let's get you started</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-5 mt-2'>
          <div className='flex flex-col items-center justify-center border border-neutral-200 rounded-md p-2'>
            
          </div>
        </div>
    </div>
  )
}

export default SetupGuides