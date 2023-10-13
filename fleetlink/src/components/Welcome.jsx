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
    <div className='flex flex-col w-[95%] items-center mx-auto mt-24 p-2 gap-4 bg-neutral-500 h-auto text-white rounded-2xl'>
        <div className='flex font-bold items-start justify-start w-full mt-2'>
            <h3 className='pl-3 md:p1-2'>Welcome, <span className='uppercase'>{loggedInUserName}</span></h3>
        </div>
        <div className='flex flex-col justify-start w-full text-sm px-2 gap-3'>
            <p className='pl-5 md:pl-4 break-words'>
                We're thrilled to have you here. Our mission is to make your daily commute smoother, more efficient, and a little brighter. With this transportation system, we're putting your comfort and convenience front and center.
                Expect:
            </p>
                <ul className='list-disc pl-8 md:pl-10 font-semibold'>
                    <li>Effortless Booking: Easily schedule and manage your rides.</li>
                    <li>Real-Time Updates: Stay informed about your commute with notifications.</li>
                    <li>Safety First: Your well-being is our priority.</li>
                    <li>Green Commuting: Help us create a more sustainable future.</li>
                </ul>
            <p className='pl-5 md:pl-4 break-words'>
                If you have any questions or suggestions, we're just a click away. Thank you for choosing us to enhance your journey.
                Safe travels
            </p>
        </div>
    </div>
  )
}

export default Welcome