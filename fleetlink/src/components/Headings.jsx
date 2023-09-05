import React from 'react'
import Backbutton from './Backbutton'


const Headings = ({ children }) => {
  return (
    <div className='bg-white w-full h-[30%] fixed flex flex-col items-center rounded-bl-3xl p-4'>
        <Backbutton />
        {children}
    </div>
  )
}

export default Headings