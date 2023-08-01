import React from 'react'
import PolicyHead from './PolicyHead'
import InsuranceStatus from './InsuranceStatus'


const Policy = () => {
  return (
    <div className='flex flex-col w-full ml-40 md:ml-64 gap-y-0'>
        <PolicyHead />
        <InsuranceStatus />
    </div>
  )
}

export default Policy