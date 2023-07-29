import React from 'react'
import Sidebar from '../components/Sidebar'
import DashB from '../components/DashB'



const Dashboard = () => {
  return (
    <div className='flex h-screen'>
      <Sidebar />
      <DashB />
    </div>
  )
}

export default Dashboard