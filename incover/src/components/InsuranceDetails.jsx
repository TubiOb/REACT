import React from 'react'
import InsurancePersonalDetails from './InsurancePersonalDetails'
import InsurancePolicyDetails from './InsurancePolicyDetails'

const InsuranceDetails = () => {
  return (
    <div className='w-full h-full flex md:flex-row flex-col'>
        <InsurancePersonalDetails />
        <InsurancePolicyDetails />
    </div>
  )
}

export default InsuranceDetails