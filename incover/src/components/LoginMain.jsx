import React from 'react'
import LoginForm from './LoginForm'
// import Motto from '../assets/Frame 11093.png'

const LoginMain = () => {
  return (
    <div className='flex h-screen'>
        <div className='w-full h-screen grid md:grid-cols-2 mx-auto items-center justify-center md:items-start md:justify-between'>
            {/* <img src={Motto} alt="\" className='md:border-r hidden md:flex md:border-r-gray-300' /> */}
            <div className='hidden md:flex flex-col gap-1 items-start h-screen justify-center md:border-r md:border-r-gray-300 p-4 md:w-[80%]'>
              <h3 className='font-semibold text-lg'>Quick and simple</h3>
              <p className='text-green-700 text-sm'>We made buying insurance simple for you. When you need to make a claim, it’s even more simpler and quicker.</p>
            </div>

            <div className='w-full md:w-[60%] grid grid-cols-1 items-center md:items-center justify-center md:justify-center py-4 px-4 mt-5 md:mt-10'>
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