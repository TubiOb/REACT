import React from 'react'
import { CiInstagram, CiTwitter, CiFacebook } from 'react-icons/ci'

const Footer = () => {
  return (
    <div className='w-full mt-3 h-auto flex flex-col items-center py-4 px-2 md:px-10 bg-neutral-800 text-white bottom-0 left-0'>
        
        <div className='w-full grid grid-cols-1 md:grid-cols-2'>
          <div className="text-center md:text-left items-center md:items-start flex flex-col md:w-[30%] md:mb-0 mb-3">
            <h3 className="text-lg font-semibold mb-3">FleetLink</h3>

            <div className='flex flex-row gap-3'>
              <div className='w-auto h-auto p-0.5'>
                <CiInstagram size={25} />
              </div>
              <div className='w-auto h-auto p-0.5'>
                <CiTwitter size={25} />
              </div>
              <div className='w-auto h-auto p-0.5'>
                <CiFacebook size={25} />
              </div>
            </div>
          </div>

            <div className="grid grid-cols-2 md:grid-cols-3 text-center gap-4 w-full">
              <div className='text-left'>
                <h3 className="text-lg font-semibold mb-3 md:mb-0">Discover</h3>
                <ul className="text-sm gap-2">
                  <li><a href="/home" className="hover:text-gray-400 text-white mx-2 transition duration-300">Home</a></li>
                  <li><a href="/pickupSchedule" className="hover:text-gray-400 text-white mx-2 transition duration-300">Pickup Schedule</a></li>
                  <li><a href="/updates" className="hover:text-gray-400 text-white mx-2 transition duration-300">Updates</a></li>
                  <li><a href="/profile" className="hover:text-gray-400 text-white mx-2 transition duration-300">Profile</a></li>
                </ul>
              </div>

              <div className='text-left'>
                <h3 className="text-lg font-semibold mb-3 md:mb-0">Company</h3>
                <ul className="text-sm gap-2">
                  <li><a href="/" className="hover:text-gray-400 text-white mx-2 transition duration-300">About</a></li>
                  <li><a href="/" className="hover:text-gray-400 text-white mx-2 transition duration-300">Newsroom</a></li>
                  <li><a href="/" className="hover:text-gray-400 text-white mx-2 transition duration-300">Blog</a></li>
                </ul>
              </div>

              <div className='text-left'>
                <h3 className="text-lg font-semibold mb-3 md:mb-0">Partners</h3>
                <ul className="text-sm gap-2">
                  <li><a href="/" className="hover:text-gray-400 text-white mx-2 transition duration-300">Advertise</a></li>
                  <li><a href="/" className="hover:text-gray-400 text-white mx-2 transition duration-300">Drivers</a></li>
                </ul>
              </div>

            </div>
        </div>
        

        <div className="text-center text-sm mt-6 md:mb-0 mb-24">
          <p>&copy; FleetLink | Created by Obaloluwa Tubi</p>
        </div>

    </div>
  )
}

export default Footer