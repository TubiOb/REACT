import React, { useState } from 'react'
import InputFields from '../components/InputFields'

const LoginForm = () => {

  const [formData, setFormData] = useState({
        emailAddress: '',
        password: '',
    });

    const handleInputChange = (value, fieldName) => {
        setFormData({
        ...formData,
        [fieldName]: value,
        });
    };

    const handleSave = (e) => {
        e.preventDefault();
        console.log(formData);
    };
    
  return (
    <div className='w-full md:w-[50%] h-screen bg-inherit flex flex-col items-center justify-center p-4 mb-3 relative'>
        <form onSubmit={handleSave} className='mx-auto mt-8 md:mt-0 bg-white outline-none border-none rounded-xl shadow-sm shadow-neutral-50 w-[85%] md:w-[65%] inline-flex flex-col h-64 gap-4 px-2 py-5'>
            <InputFields placeholder='Email Address' onInputChange={(value) => handleInputChange(value, 'emailAddress')}/>
            <InputFields placeholder='Password' onInputChange={(value) => handleInputChange(value, 'password')}/>

            <div className='w-[90%] flex flex-col mx-auto'>
                <button type="submit" className='text-white px-2 py-2 rounded-xl w-full mx-auto bg-neutral-900 font-semibold shadow-neutral-800 shadow-2xl transition duration-300 hover:bg-white hover:text-neutral-900 hover:shadow-md hover:font-semibold hover:border hover:border-neutral-300 hover:shadow-neutral-300 text-sm md:text-lg flex items-center justify-center' >Sign In</button>
                {/* <div className='text-neutral-600 font-semibold text-xs ml-auto mt-1.5 mr-2 flex flex-row-reverse hover:cursor-pointer'>Forgot Password?</div> */}
            </div>
            
        </form>
    </div>
  )
}

export default LoginForm