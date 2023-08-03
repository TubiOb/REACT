import React from 'react'
import MotorInsuranceHeading from '../components/MotorInsuranceHeading'
import MotorPolicyStatus from './MotorPolicyStatus'
import PageNavigation from './PageNavigation'
import Support from './Support'
const MotorInsuranceMain = () => {
  return (
    <div className='flex flex-col w-full ml-40 md:ml-64 gap-y-0 mb-10'>
        <MotorInsuranceHeading />
        <MotorPolicyStatus />
        <PageNavigation />
        <Support />
    </div>
  )
}

export default MotorInsuranceMain