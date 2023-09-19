import React from 'react'
import Headings from '../components/Headings'

const Login = () => {
  return (
    <div className='bg-neutral-800 flex w-full h-screen flex-col'>
        <Headings>
            <div className='flex flex-col mt-4 w-20 md:w-full mr-auto md:mx-auto ml-16 md:ml-0 md:items-center md:justify-center gap-2'>
                <h2 className='md:text-4xl font-bold'>Welcome Back!</h2>
                <p className='font-semibold text-sm'>Continue your seamless rides</p>
            </div>
        </Headings>
    </div>
  )
}

export default Login