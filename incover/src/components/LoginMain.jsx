import React from 'react'
import LoginForm from './LoginForm'
// import Motto from '../assets/Frame 11093.png'

const LoginMain = () => {
  return (
    <div className='flex h-screen w-full'>
        <div className='w-full h-screen flex md:flex-row mx-auto items-center justify-center md:items-start md:justify-between'>
            {/* <img src={Motto} alt="\" className='md:border-r hidden md:flex md:border-r-gray-300' /> */}
            <div className='hidden md:flex flex-col gap-1 items-start h-screen justify-center md:border-r md:border-r-gray-300 p-4 md:w-[40%]'>
              <h3 className='font-semibold text-lg'>Quick and simple</h3>
              <p className='text-green-700 text-sm'>We made buying insurance simple for you. When you need to make a claim, it’s even more simpler and quicker.</p>
            </div>

            <div className='w-full md:w-[60%] relative grid grid-cols-1 items-center md:items-center justify-center md:justify-center py-4 px-4 mt-5 md:mt-10'>
              <div className='absolute mx-auto md:mx-0 flex-col w-[90%] md:w-auto left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 md:left-[10%] md:-translate-y-0 md:-translate-x-0 md:top-[66px] justify-start items-start gap-12 inline-flex'>
                    <div className="Frame3177 w-full flex-col p-1.5 justify-start items-center gap-1 inline-flex">
                      <div className="SignInToYourAccount self-stretch text-neutral-800 text-2xl font-semibold font-['Red Hat Display'] leading-loose">Sign in to your account</div>
                      <div className="GetCoveredFromAllUnexpectedLosses self-stretch text-neutral-600 text-base font-normal font-['Red Hat Display'] leading-normal">Get covered from all unexpected losses </div>
                    </div>
                              {/* <div className="SignInToYourAccount w-[480px] text-neutral-800 text-2xl font-semibold font-['Red Hat Display'] leading-loose">Sign in to your account</div>
                                <p className='mt-1 text-sm'>Get covered from all unexpected losses</p>
                                <div className='okay mt-5'>
                                    <LoginForm />
                                </div> */}
                    <div className='okay w-full md:w-[80%] md:mx-0 gap-8'>
                          <LoginForm />
                    </div>
              </div>
              
            </div>
        </div>

    </div>
  )
}

export default LoginMain