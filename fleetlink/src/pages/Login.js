import React from 'react'
import Headings from '../components/Headings'
import LoginForm from '../components/LoginForm'


const Login = () => {

  return (
    <div className='bg-neutral-800 flex w-full h-screen flex-col md:flex-row gap-1'>
        <Headings>
            <div className='flex flex-col -mt-[-2] md:mt-4 md:w-full mr-auto md:mx-auto ml-16 md:ml-0 md:items-center md:justify-center gap-1 md:gap-2 relative'>
                <h2 className='text-sm md:text-4xl font-bold'>Welcome Back!</h2>
                <p className='font-semibold text-xs md:text-sm'>Continue your seamless rides</p>
            </div>
        </Headings>
        
        <LoginForm />
    </div>
  )
}

export default Login