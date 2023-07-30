import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import Table from './Table'

const ActivePlans = () => {
    const tableData = [
      {id: 1, policyNumber: '02345D54', policyType: 'Health Care', policyProvider: 'Linkage Insurance', premium: '₦1,000', effectiveDate: '23/09/2022', expiryDate: '24/09/2023'},
      {id: 2, policyNumber: '02345D54', policyType: 'Health Care', policyProvider: 'Linkage Insurance', premium: '₦1,000', effectiveDate: '23/09/2022', expiryDate: '24/09/2023'},
  ];
  return (
    <div className='w-full px-6 py-4 h-auto items-center justify-between grid grid-cols-1'>
        <div className='flex flex-wrap items-center justify-between p-2 mb-1'>
          <h3 className='font-semibold'>Active Plans</h3>
          <div className='flex flex-row items-center justify-between gap-0.5 hover:cursor-pointer'>
            <h3 className='font-medium text-sm'>View More</h3>
            <MdOutlineKeyboardArrowRight />
          </div>
        </div>
        <Table data={tableData} />
    </div>
  )
}

export default ActivePlans