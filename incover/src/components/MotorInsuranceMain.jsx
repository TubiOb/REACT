import React from 'react'
import MotorInsuranceHeading from '../components/MotorInsuranceHeading'
import MotorPolicyStatus from './MotorPolicyStatus'
import PageNavigation from './PageNavigation'
import Support from './Support'
const MotorInsuranceMain = () => {
  return (
    <div className='flex flex-col w-full ml-0 md:ml-64 ga-2 mb-10'>
        <MotorInsuranceHeading />
        <MotorPolicyStatus />
        <PageNavigation />
        <Support />
    </div>
  )
}

export default MotorInsuranceMain