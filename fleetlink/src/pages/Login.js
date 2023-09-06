import React from 'react'
import Headings from '../components/Headings'

const Login = () => {
  return (
    <div className='bg-neutral-800 flex w-full h-screen'>
        <Headings>
            <div className='flex mt-4'>
                <h2 className='md:text-4xl font-bold'>Welcome Back!</h2>
            </div>
        </Headings>
    </div>
  )
}

export default Login