import React from 'react'
import Backbutton from './Backbutton'
import MotorInsuranceHeading from '../components/MotorInsuranceHeading'
import MotorPolicyStatus from './MotorPolicyStatus'
import PageNavigation from './PageNavigation'
import Support from './Support'
const MotorInsuranceMain = () => {
  return (
    <div className='flex flex-col w-full ml-0 md:ml-64 ga-2 mb-10'>
        <MotorInsuranceHeading />
        <div className='flex flex-row md:hidden items-center justify-start gap-3 md:gap-6 p-1 w-full relative mt-1'>
          <Backbutton />
          <h3 className='text-xs md:text-sm font-light'>Motor Insurance</h3>
        </div>
        <MotorPolicyStatus />
        <PageNavigation />
        <Support />
    </div>
  )
}

export default MotorInsuranceMain