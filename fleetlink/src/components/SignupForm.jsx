import React, { useState } from 'react'
import InputFields from '../components/InputFields'
import { firestore } from '../firebase'
import { addDoc, doc, setDoc, collection } from 'firebase/firestore'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import Toast from './Toast'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


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
        // console.log(formData);        

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, formData.emailAddress, formData.password);

            const userId = userCredential.user.uid;

            const userDocRef = doc(firestore, `Staff/${userId}`);

            await setDoc(userDocRef, {
                fullName: formData.fullName,
                emailAddress: formData.emailAddress,
                phoneNumber: formData.phoneNumber,
                address: formData.address,
            });

            setFormData({
                fullName: null,
                emailAddress: null,
                phoneNumber: null,
                address: null,
                password: null,
                confirmPassword: null,
            });

            await addDoc(ref, formData)
            // console.log(formData);

            // console.log("User successfully signed up");
            showToastMessage('Sign Up Successful', 'success');
        }
        catch(err) {
            // console.log(formData)
            // console.error(err);
            showToastMessage('Sign Up failed!', 'error')
        }
    };

    const showToastMessage = (message, type) => {
        switch (type) {
            case 'success':
                toast.success(message, {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 3000,
                });
                break;
            case 'error':
                toast.error(message, {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 3000,
                });
                break;
            default:
                break;
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
        <Toast showToast={showToastMessage} />
    </div>
  )
}

export default SignupForm