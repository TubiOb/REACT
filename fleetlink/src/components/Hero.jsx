import React from 'react'
import Image7 from '../assets/23591800_turn_05.svg'

const Hero = () => {
  return (
    <div className=''>
        <div className='mt-31 w-full h-screen mx-auto text-center flex justify-center mb-4'>
            <img className='w-full mx-auto my-4 mt-23 h-screen' src={Image7} alt="Staff Bus" />
            <div className='bg-white flex flex-col md:w-[350px] w-[250px] md:h-[180px] h-[240px] shadow-lg absolute left-1/2 top-1/2 transform -translate-x-1/2 px-3 py-3 rounded-md ease-in-out duration-500'>
                <p className='text-md mt-4 font-semibold text-md md:text-[16px] ease-in-out duration-500'>Streamlined Staff Transportation for Modern Professionals. Simplify Work Travel with our Reliable Transportation Service</p>
                <button className=' mt-6 mx-auto px-3 py-2 rounded-md font-bold border=2 text-md bg-[#7161ef] text-white hover:border-2 hover:border-[#7161ef] hover:text-black hover:bg-transparent cursor-pointer ease-in-out duration-500'>Pick a Slot</button>
            </div>
            
        </div>
    </div>
  )
}

export default Hero