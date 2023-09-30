import React, { useState } from 'react'
import InputFields from '../components/InputFields'
import { firestore } from '../firebase'
import { getDocs ,addDoc, collection } from 'firebase/firestore'
import { auth } from '../firebase.js'
// import { createUserWithEmailAndPassword } from 'firebase/auth'


const SignupForm = () => {

    const ref = collection(firestore, 'Staff Details');

    const [formData, setFormData] = useState({
        fullName: '',
        emailAddress: '',
        phoneNumber: '',
        address: '',
        password: '',
        confirmPassword: '',
    });

    const handleInputChange = (value, fieldName) => {
        setFormData({
        ...formData,
        [fieldName]: value,
        });
    };

    
    const handleSave = async(e) => {
        e.preventDefault();
        console.log(formData);
        // await createUserWithEmailAndPassword(auth, )
        

        try {
            await addDoc(ref, formData)
            console.log(formData);
        }
        catch(err) {
            // console.log(formData)
            console.error(err);
        }
    };

  return (
    <div className='w-full md:w-[50%] h-screen bg-neutral-800 flex flex-col items-center justify-center p-4 mb-3 relative'>
        <form onSubmit={handleSave} className='mx-auto my-auto mt-8 bg-white outline-none border-none rounded-xl shadow-sm shadow-neutral-50 w-[85%] md:w-[65%] inline-flex flex-col h-auto gap-4 px-2 py-5'>
            <InputFields placeholder='Full Name' onInputChange={(value) => handleInputChange(value, 'fullName')}/>
            <InputFields placeholder='Email Address' onInputChange={(value) => handleInputChange(value, 'emailAddress')}/>
            <InputFields placeholder='Phone Number' onInputChange={(value) => handleInputChange(value, 'phoneNumber')}/>
            <InputFields placeholder='Address' onInputChange={(value) => handleInputChange(value, 'address')}/>
            <InputFields placeholder='Password' onInputChange={(value) => handleInputChange(value, 'password')}/>
            <InputFields placeholder='Confirm Password' onInputChange={(value) => handleInputChange(value, 'confirmPassword')}/>

            <div className='w-[90%] flex flex-col mx-auto'>
                <button type="submit" className='text-white px-2 py-2 rounded-xl w-full mx-auto bg-neutral-900 font-semibold shadow-neutral-800 shadow-2xl transition duration-300 hover:bg-white hover:text-neutral-900 hover:shadow-md hover:font-semibold hover:border hover:border-neutral-300 hover:shadow-neutral-300 text-sm md:text-lg flex items-center justify-center' >Sign Up</button>
            </div>
        </form>
    </div>
  )
}

export default SignupForm