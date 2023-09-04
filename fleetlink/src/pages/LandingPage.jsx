import React, { useState } from 'react'
import { HashLoader } from 'react-spinners'

const LandingPage = () => {

  const [loading, setLoading] = useState(false);

  const handleLoginClick = () => {
    setLoading(true);

    setTimeout(() => {
    setLoading(false); // Reset loading after 3 seconds
      // You can navigate to the login page or perform other actions here
    }, 1500);
  };

  const handleSignupClick = () => {
    setLoading(true);

    setTimeout(() => {
    setLoading(false); // Reset loading after 3 seconds
      // You can navigate to the login page or perform other actions here
    }, 1500);
  };


  return (
    <div className='h-screen w-full'>
      <div className='h-full w-full bg-cover bg-no-repeat bg-[url("~assets/asia-2181888.jpg")] backdrop-blur-lg'>
        {loading && <div className="absolute inset-0 bg-transparent bg-opacity-80 backdrop-blur-2xl" />}
        <div className='flex flex-col w-[70%] md:w-[50%] mx-auto absolute left-1/2 -translate-x-1/2 top-1/2 transform -translate-y-1/2 gap-3'>
          {loading && <div className="absolute inset-0 bg-transparent bg-opacity-80 backdrop-blur-sm" />}
          {/* <div className='items-center justify-center text-center p-1'> */}
            <h3 className='text-white font-semibold text-4xl items-center justify-center text-center'>Connecting Workplaces, One Ride at a Time</h3>
          {/* </div> */}
          <div className='w-full md:w-[70%] md:mx-auto flex flex-row gap-7 items-center justify-between p-2 mt-2'>
            <button type="submit" className='text-neutral-500 px-2 py-2 rounded-2xl outline-none border-none w-full md:w-[30%] mx-auto bg-white font-medium transition duration-300 hover:bg-emerald-500 hover:text-white hover:shadow-md hover:font-semibold text-sm md:text-lg' onClick={handleLoginClick}>Login</button>
            <button type="submit" className='text-white px-2 py-2 rounded-2xl outline-none border-none w-full md:w-[30%] mx-auto bg-neutral-500 font-medium transition duration-300 hover:bg-emerald-500 hover:text-white hover:shadow-md hover:font-semibold text-sm md:text-lg' onClick={handleSignupClick}>Signup</button>
          </div>
        </div>
      </div>
      {loading && (
        <div className="fixed left-1/2 -translate-x-1/2 top-1/2 transform -translate-y-1/2 items-center justify-center">
          <HashLoader color="#36d7b7" />
        </div>
      )}
    </div>
    
  )
}

export default LandingPage