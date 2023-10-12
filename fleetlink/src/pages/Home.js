import React from 'react'
import Header from '../components/Header'
import MobileNavigation from '../components/MobileNavigation'

const Home = () => {
  return (
    <div className='w-full h-screen bg-white flex justify-center'>
        <Header />
        <MobileNavigation />
    </div>
  )
}

export default Home