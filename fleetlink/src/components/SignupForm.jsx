import React from 'react'
import InputFields from '../components/InputFields'

const SignupForm = () => {
  return (
    <div className='w-full md:w-[50%] h-full bg-neutral-800 flex flex-col items-center justify-center p-4 mb-3 relative'>
        <div className='mx-auto mt-8 md:mt-0 bg-white outline-none border-none rounded-xl shadow-sm shadow-neutral-50 w-[85%] md:w-[65%] inline-flex flex-col h-auto gap-4 px-2 py-5'>
            <InputFields placeholder='Full Name'/>
            <InputFields placeholder='Email Address'/>
            <InputFields placeholder='Phone Number'/>
            <InputFields placeholder='Address'/>
            <InputFields placeholder='Password'/>
            <InputFields placeholder='Confirm Password'/>

            <div className='w-[90%] flex flex-col mx-auto'>
                <button type="submit" className='text-white px-2 py-2 rounded-xl w-full mx-auto bg-neutral-900 font-semibold shadow-neutral-800 shadow-2xl transition duration-300 hover:bg-white hover:text-neutral-900 hover:shadow-md hover:font-semibold hover:border hover:border-neutral-300 hover:shadow-neutral-300 text-sm md:text-lg flex items-center justify-center' >Sign Up</button>
            </div>
        </div>
    </div>
  )
}

export default SignupForm