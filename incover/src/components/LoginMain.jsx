import React from 'react'
import LoginForm from './LoginForm'
import Motto from '../assets/Frame 11093.png'

const LoginMain = () => {
  return (
    <div className='flex h-screen'>
        <div className='w-full h-screen flex md:grid md:grid-cols-2 mx-auto items-center justify-center md:items-start md:justify-between'>
            <img src={Motto} alt="\" className='md:border-r hidden md:flex md:border-r-gray-300' />

            <div className='w-full md:w-[60%] grid grid-cols-1 items-center md:items-start justify-center md:justify-start py-4 px-10 md:px-16 mt-5 md:mt-10'>
                <h3 className='font-semibold text-lg'>Sign in to your account</h3>
                <p className='mt-1 text-sm'>Get covered from all unexpected losses</p>
                <div className='okay mt-5'>
                    <LoginForm />
                </div>
            </div>
        </div>

    </div>
  )
}

export default LoginMain