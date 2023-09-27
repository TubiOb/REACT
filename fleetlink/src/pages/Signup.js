import React from 'react'
import Headings from '../components/Headings'
import SignupForm from '../components/SignupForm'

const Signup = () => {
  return (
    <div className='bg-neutral-800 flex w-full h-full flex-col md:flex-row gap-1'>
        <Headings>
          <div className='flex flex-col mt-1 md:mt-4 md:w-full mr-auto md:mx-auto ml-16 md:ml-0 md:items-center md:justify-center gap-1 md:gap-2 relative'>
              <h2 className='md:text-4xl font-bold'>Create Account.</h2>
          </div>
        </Headings>

        <SignupForm />
    </div>
  )
}

export default Signup