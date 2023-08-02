import React from 'react'
import MotorInsuranceHeading from '../components/MotorInsuranceHeading'
import MotorPolicyStatus from './MotorPolicyStatus'
const MotorInsuranceMain = () => {
  return (
    <div className='flex flex-col w-full ml-40 md:ml-64 gap-y-0'>
        <MotorInsuranceHeading />
        <MotorPolicyStatus />
    </div>
  )
}

export default MotorInsuranceMain