import React from 'react'
import PolicySidebar from '../components/PolicySidebar'
import DetailsBody from '../components/DetailsBody'

const PolicyDetails = () => {
  return (
    <div className='h-screen flex'>
        <PolicySidebar />
        <DetailsBody />
    </div>
  )
}

export default PolicyDetails