import React from 'react'
import SetupSidebar from '../components/SetupSidebar'
import SetupHome from '../components/SetupHome'

const SetupGuide = () => {
  return (
    <div className='flex h-screen'>
        <SetupSidebar />
        <SetupHome />
    </div>
  )
}

export default SetupGuide