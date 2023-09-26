import React from 'react'
import Backbutton from './Backbutton'


const Headings = ({ children }) => {
  return (
    <div className='bg-white w-full md:w-[50%] h-32 md:h-screen flex flex-col rounded-bl-3xl items-center justify-center p-4 mb-3 relative'>
        <Backbutton />
        {children}
    </div>
  )
}

export default Headings