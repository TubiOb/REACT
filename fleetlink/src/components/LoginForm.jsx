import React, { useState } from 'react'
import InputFields from '../components/InputFields'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { firestore } from '../firebase';
import { auth } from '../firebase'
import { getDocs, doc, collection } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import Toast from './Toast'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Link } from 'react-router-dom';

const LoginForm = () => {

    const history = useNavigate();

    // const [setLoading] = useState(false);

    const ref = collection(firestore, 'Staff');

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

    
    const handleLogin = async(e) => {
        e.preventDefault();

        console.log(formData);
        // setLoading(true);

        // const snapshot = query(collection(firestore, 'Staff Details'), where('emailAddress', '==', formData.emailAddress), where('password', '==', formData.password));

        try {
            if (!formData.emailAddress || !formData.password) {
                showToastMessage('Please fill in both email and password.', 'error');
                return;
            }

            const userCredential = await signInWithEmailAndPassword(auth, formData.emailAddress, formData.password);

            const user = userCredential.user;
            const userId = user.uid;

            const userRef = doc(firestore, `Staff/${userId}`);
            console.log(userRef);
            const snapshot = await getDocs(ref, userRef);

            // const thisUser = await getDocs(snapshot);

            // console.log(snapshot);

            if (snapshot.empty) {
                // console.log('User Data not Found!');
                showToastMessage('Incorrect email or Password', 'error');

                setFormData({
                    emailAddress: '',
                    password: '',
                });
                
            }
            else {
                snapshot.forEach((doc) => {
                    const userData = doc.data();
                    // console.log('User Data:', userData);
                    
                });
                // console.log('Successfully Sign In');

                setTimeout(() => {
                    // setLoading(false);

                    history('/home');
                }, 3500);

                showToastMessage('Sign In Successful', 'success');

                setFormData({
                    emailAddress: '',
                    password: '',
                });
            }

            
        }
        catch (err) {
            showToastMessage('Incorrect email or Password', 'error');
            console.error(err.message);
            // console.error(err.stack);
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
    <div className='w-full md:w-[50%] h-screen bg-inherit flex flex-col items-center justify-center p-4 relative'>
        <form onSubmit={handleLogin} method='GET' className='mx-auto md:mt-0 bg-white outline-none border-none rounded-xl shadow-sm shadow-neutral-50 w-[85%] md:w-[65%] inline-flex flex-col h-auto gap-4 px-2 py-5'>
            <InputFields placeholder='Email Address' value={formData.emailAddress} onInputChange={(value) => handleInputChange(value, 'emailAddress')}/>
            <InputFields placeholder='Password' value={formData.password} onInputChange={(value) => handleInputChange(value, 'password')}/>

            <div className='w-[90%] flex flex-col mx-auto'>
                <button type="submit" className='text-white px-2 py-2 rounded-xl w-full mx-auto bg-neutral-900 font-semibold shadow-neutral-800 shadow-2xl transition duration-300 hover:bg-white hover:text-neutral-900 hover:shadow-md hover:font-semibold hover:border hover:border-neutral-300 hover:shadow-neutral-300 text-sm md:text-lg flex items-center justify-center' >Sign In</button>
                {/* <div className='text-neutral-600 font-semibold text-xs ml-auto mt-1.5 mr-2 flex flex-row-reverse hover:cursor-pointer'>Forgot Password?</div> */}
            </div>
            <Link to="/signup" className="block text-sm text-neutral-600 font-semibold mt-4 mx-auto">Don't have an account? <span className='text-neutral-800 font-semibold hover:underline'>Register</span></Link> 
        </form>
        <Toast showToast={showToastMessage} />
    </div>
  )
}

export default LoginForm