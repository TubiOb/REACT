import React, { useState } from 'react'
import Header from '../components/Header'
import MobileNavigation from '../components/MobileNavigation'
import Welcome from '../components/Welcome'
import LiveTracker from '../components/LiveTracker'
import WelcomeModal from '../components/WelcomeModal'

const Home = () => {
  const [show, setShow] = useState(localStorage.getItem('firstLogin') === 'true');

  return (
    <div className='w-full flex-col h-full bg-white flex items-center justify-center'>
        <Header />
        <Welcome />
        <LiveTracker />
        <MobileNavigation />

        {show && <WelcomeModal show={show} closeModal={() => setShow(false)} />}
    </div>
  )
}

export default Home