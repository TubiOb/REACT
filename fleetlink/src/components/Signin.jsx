import React from 'react'

const Signin = ({ handleLoginClick, handleSignupClick }) => {

  return (
    <div className='bg-white w-full h-auto rounded-tr-2xl'>
        <div className='w-full md:w-[70%] md:mx-auto flex flex-row gap-7 items-center justify-between p-2'>
          <button type="submit" className='text-neutral-500 px-2 py-2 rounded-2xl outline-none border-none w-full md:w-[30%] mx-auto bg-white font-medium transition duration-300 hover:bg-emerald-500 hover:text-white hover:shadow-md hover:font-semibold text-sm md:text-lg' onClick={handleLoginClick} >Login</button>
          <button type="submit" className='text-white px-2 py-2 rounded-2xl outline-none border-none w-full md:w-[30%] mx-auto bg-neutral-500 font-medium transition duration-300 hover:bg-emerald-500 hover:text-white hover:shadow-md hover:font-semibold text-sm md:text-lg' onClick={handleSignupClick} >Signup</button>
        </div>
    </div>
  )
}

export default Signin