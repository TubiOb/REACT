import React from 'react'
import Policy from '../components/Policy'
import PolicySidebar from '../components/PolicySidebar'

const Policies = () => {
  return (
    <div className='flex h-screen'>
      <PolicySidebar />
      <Policy />
    </div>
  )
}

export default Policies