import React from 'react'
import Header from '../components/Header'
import MobileNavigation from '../components/MobileNavigation'
import Welcome from '../components/Welcome'

const Home = () => {
  return (
    <div className='w-full h-full bg-white flex justify-center'>
        <Header />
        <Welcome />
        <MobileNavigation />
    </div>
  )
}

export default Home