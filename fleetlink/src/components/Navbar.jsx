import React from 'react'

const Navbar = () => {
  return (
    <div className='flex top-0 fixed right-0 left-0 justify-between items-center h-20 mx-auto px-5 border-b border-100 shadow-lg z-50 bg-white'>
        <h1 className='flex-grow font-semibold text-md md:text-2xl cursor-pointer'>FleetLink</h1>
        <ul className='flex justify-around'>
            <li className='p-4 mx-2 xs:mx-0 font-semibold text-xs md:text-[15px] hover:text-[#7161ef] hover:font-bold hover:ease-in-out transition-all hover:underline hover:underline-offset-4 hover:underline-[#7161ef] hover:duration-700 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 cursor-pointer'><a href="/">Admin</a></li>
            <button className='p-4 mx-2 xs:mx-0 -mt-[-1] shadow-lg md:text-[15px] my-auto rounded-md text-center items-center text-black hover:ease-in-out hover:shadow-xl hover:duration-500 font-medium bg-white px-5 py-2 sm:px-4 sm:py-1 text-xs hover:text-white hover:bg-[#7161ef] hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 cursor-pointer'><a href="/">Login</a></button>
             {/* <li className='p-4 rounded-full block h-4 sm:mx-2 my-auto mx-auto bg-black'></li> */}
        </ul>
    </div>
  )
}

export default Navbar