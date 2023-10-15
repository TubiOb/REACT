import React, { useState } from 'react'
import { auth, firestore } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';


const Welcome = () => {
    const [loggedInUserName, setLoggedInUserName] = useState('');

    const getLoggedInUserData = async () => {
        if (auth.currentUser) {
        const userUID = auth.currentUser.uid;

        const userDocRef = doc(firestore, 'Staff', userUID);

        try {
            const userDocSnapshot = await getDoc(userDocRef);

            if (userDocSnapshot.exists()) {
                const userData = userDocSnapshot.data();
                if (userData) {
                    const loggedInUserName = userData.fullName;
                    // console.log('Logged in user name:', loggedInUserName);
                    setLoggedInUserName(loggedInUserName);
                }
            } else {
                console.log('User data not found');
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    }}

    getLoggedInUserData();

  return (
    <div className='flex flex-col w-[95%] items-center mx-auto mt-24 z-10 p-2 gap-4 bg-white h-auto text-black rounded-2xl border-none outline-none'>
        <div className='flex font-bold items-start justify-start w-full'>
            <h3 className='pl-3 md:p1-2'>Welcome, <span className='uppercase'>{loggedInUserName}</span></h3>
        </div>
        {/* <div className='flex flex-col justify-start w-full text-sm px-2 gap-3'>
            
        </div> */}
    </div>
  )
}

export default Welcome