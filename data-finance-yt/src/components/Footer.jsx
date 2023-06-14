import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagramSquare,
    FaTwitterSquare,
} from 'react-icons/fa'


const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id placerat lectus. Pellentesque a finibus ligula, in malesuada nulla.</p>
        </div>
    </div>
  )
}

export default Footer