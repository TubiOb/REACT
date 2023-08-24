import React from 'react'

const LandingPage = () => {
  return (
    <div className='h-screen w-full'>
      <div className='h-full w-full bg-cover bg-no-repeat bg-[url("~assets/asia-2181888.jpg")] backdrop-blur-lg'>
        <div className='flex flex-col w-[70%] md:w-[50%] mx-auto absolute left-2 md:left-1/2 md:-translate-x-1/2 top-1/2 transform md:-translate-y-1/2 gap-3'>
          <div className='backdrop-blur-xs items-center justify-center p-1'>
            <h3 className='text-white font-semibold text-4xl font'>Connecting Workplaces, One Ride at a Time</h3>
          </div>
          <div className='w-full md:w-[70%] md:mx-0 flex flex-row gap-7 items-center justify-between md:justify-start md:items-start p-2 mt-2'>
            <button type="submit" className='text-neutral-400 px-2 py-2 rounded-2xl outline-none border-none w-full md:w-[30%] mx-auto bg-white font-medium transition duration-300 hover:bg-neutral-400 hover:text-white hover:shadow-md text-sm md:text-lg'>Login</button>
            <button type="submit" className='text-white px-2 py-2 rounded-2xl outline-none border-none w-full md:w-[30%] mx-auto bg-neutral-400 font-medium transition duration-300 hover:bg-white hover:text-neutral-400 hover:shadow-md text-sm md:text-lg'>Signup</button>
          </div>
        </div>
        
        
      </div>
    </div>
    
  )
}

export default LandingPage