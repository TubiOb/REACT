import React from 'react'
import Header from '../components/Header'
import MobileNavigation from '../components/MobileNavigation'
import Footer from '../components/Footer'
import SchedulingForm from '../components/SchedulingForm'

const PickupSchedule = () => {
  return (
    <div className='w-full h-full bg-white flex flex-col justify-center'>
      <Header />
      <SchedulingForm />
      <MobileNavigation />
      <Footer />
        
    </div>
  )
}

export default PickupSchedule