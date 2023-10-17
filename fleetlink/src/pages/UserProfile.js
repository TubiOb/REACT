import React from 'react'
import Header from '../components/Header'
import MobileNavigation from '../components/MobileNavigation'
import Footer from '../components/Footer'

const UserProfile = () => {
  return (
    <div className='w-full h-screen bg-white flex justify-center'>
        <Header />
        <MobileNavigation />
        <Footer />
    </div>
  )
}

export default UserProfile