import React from 'react'
import MotorInsuranceSidebar from '../components/MotorInsuranceSidebar'
import MotorInsuranceMain from '../components/MotorInsuranceMain'


const MotorInsurance = () => {
  return (
    <div className='flex h-screen'>
        <MotorInsuranceSidebar />
        <MotorInsuranceMain />
    </div>
  )
}

export default MotorInsurance