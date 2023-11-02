import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import MobileNavigation from '../components/MobileNavigation'
import Welcome from '../components/Welcome'
import LiveTracker from '../components/LiveTracker'
import WelcomeModal from '../components/WelcomeModal'
import Footer from '../components/Footer'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { auth, firestore } from '../firebase.js';
import { onAuthStateChanged } from 'firebase/auth'
import '../index.css'

const Home = () => {
  const [show, setShow] = useState(localStorage.getItem('firstLogin') !== 'true');
  const [selectedLocation, setSelectedLocation] = useState(null);




  useEffect(() => {
    // Function to check if the user has already selected a location
    const thisUser = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user)
        const userId = user.uid;
        console.log(userId);

        async function checkUserLocation(userId) {
          const q = query(
            collection(firestore, 'Schedule Details'),
            where('staffId', '==', userId)
          );

          const querySnapshot = await getDocs(q);

          if (querySnapshot.size > 0) {
            // User has selected a location in the database
            const scheduleDetails = querySnapshot.docs[0].data();
            const selectedLocation = scheduleDetails.location;

            // Send the selected location to the LiveTracker component
            setSelectedLocation(selectedLocation);
            console.log(selectedLocation);
          }
          
        }

      // Check if the user has already selected a location
        checkUserLocation(userId);
      }
        
    });

    return () => thisUser();
  }, []);
   




  return (
    <div className='w-full flex-col h-full bg-white flex items-center justify-center'>
        <Header />
        <Welcome />
        <LiveTracker selectedLocation={selectedLocation} />
        <MobileNavigation />
        <Footer />

        {show && <WelcomeModal show={show} closeModal={() => setShow(false)} />}
    </div>
  )
}

export default Home