import React from 'react'

function TrackingInfo() {
  return (
    <div className='grid md:grid-cols-2 grid-cols-1 items-center justify-center p-2 w-[90%] md:w-[60%] drop-shadow-2xl shadow-2xl h-auto rounded-md bg-white gap-3 text-black'>
      <div className='w-full p-1 h-auto flex flex-row gap-1.5'>
        <h3 className='font-bold text-sm underline uppercase'>Vehicle Location:</h3>
        <p className='text-sm'></p>
      </div>
      <div className='w-full p-1 h-auto flex flex-row gap-1.5'>
        <h3 className='font-bold text-sm underline uppercase'>Estimated Time of Arrival (ETA): </h3>
        <p className='text-sm'></p>
      </div>
    </div>
  )
}

export default TrackingInfo