import React, { useState } from 'react'
import backgound from '../assets/asia-2181888.jpg'
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
    <div className='h-screen w-full relative bg-neutral-400'>
      <div className='w-full h-full relative'>
        <img src={backgound} alt="FleetLink" className='relative object-cover w-full h-full' />
        <div className='absolute top-0 left-0 w-full h-full bg-black opacity-70 blur-xl'></div>
      </div>
      <div className='flex flex-col w-[70%] md:w-[50%] mx-auto absolute left-1/2 -translate-x-1/2 top-1/2 md:top-1/3 transform md:translate-y-1/2 -translate-y-1/2 gap-3'>
        <h3 className='text-white font-semibold text-lg md:text-4xl items-center justify-start'>Connecting Workplaces, One Ride at a Time</h3>
      </div>
      <div className='bg-white w-full h-[30%] md:h-[40%] md:rounded-tl-3xl rounded-tr-3xl fixed bottom-0 left-0 py-9 px-4 flex flex-col'>
        <div className='items-center justify-center w-full flex p-2'>
          <h3 className='text-sm md:text-lg flex font-semibold'>Enhance your Workdays with Effortless Mobility</h3>
        </div>
        <div className='w-full md:w-[70%] md:mx-auto flex flex-row gap-7 items-center justify-between p-2 mt-4 md:mt-8'>
          <button type="submit" className='text-neutral-500 px-2 py-2 rounded-xl outline-none border-none w-full md:w-[30%] mx-auto bg-white font-semibold shadow-neutral-800 shadow-2xl transition duration-300 hover:bg-emerald-500 hover:text-white hover:shadow-md hover:font-semibold text-sm md:text-lg flex items-center justify-center' onClick={handleLoginClick} disabled={loading}>Signin</button>
          <button type="submit" className='text-white px-2 py-2 rounded-xl outline-none border-none w-full md:w-[30%] mx-auto bg-neutral-900 font-semibold shadow-neutral-800 shadow-2xl transition duration-300 hover:bg-emerald-500 hover:text-white hover:shadow-md hover:font-semibold text-sm md:text-lg md:flex hidden items-center justify-center' onClick={handleSignupClick} disabled={loading}>Signup</button>
        </div>
        <div className='flex flex-row-reverse md:hidden'>
          <div>
            <button type="submit">Or Create Account</button>
          </div>
        </div>
      </div>
      {loading && <div className="absolute inset-0 bg-transparent w-full h-full bg-opacity-80 backdrop-blur-sm" />}
      {loading && (
        <div className="fixed left-1/2 -translate-x-1/2 top-1/2 transform -translate-y-1/2 items-center justify-center">
          <HashLoader color="#36d7b7" />
        </div>
      )}
    </div>
    
  )
}

export default LandingPage