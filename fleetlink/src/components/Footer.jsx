import React from 'react'

const Footer = () => {
  return (
    <div className='w-full mt-3 md:mb-0 mb-36 h-auto flex flex-wrap justify-between items-center p-4 bg-neutral-800 text-white bottom-0 left-0'>
        <div className="text-center md:text-left mb-2 md:mb-0">
          <p>&copy; FleetLink | Created by Obaloluwa Tubi</p>
        </div>
        <div className="text-center md:text-right">
          <a href="/home" className="text-gray-400 hover:text-white mx-2 transition duration-300">Privacy Policy</a>
          <a href="/home" className="text-gray-400 hover:text-white mx-2 transition duration-300">Terms of Service</a>
        </div>
    </div>
  )
}

export default Footer