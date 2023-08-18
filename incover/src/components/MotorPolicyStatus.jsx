import React, { useState } from 'react'
import { CiSearch, CiFilter } from 'react-icons/ci'
import { PiUploadSimpleLight } from 'react-icons/pi'
import { GoChevronDown } from 'react-icons/go'
import MotorInsuranceTable from './MotorInsuranceTable'
import PolicyNumber from './PolicyNumber'
import { useDataContext } from './DataContext'

const MotorPolicyStatus = () => {
    const [activeTab, setActiveTab] = useState('active');
    const { selectedPolicy } = useDataContext();

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const [searchText, setSearchText] = useState('');

    const handleInputChange = (e) => {
      setSearchText(e.target.value);
    };

    const tableData = [
      {id: 1, policyNumber: 'LI/HG/2020/R1RKL', policyProvider: 'Linkage Insurance', premium: '₦1,000', effectiveDate: '23/09/2022', expiryDate: '24/09/2023'},
      {id: 2, policyNumber: 'LI/HG/2023/R2RKD', policyProvider: 'Linkage Insurance', premium: '₦2,000', effectiveDate: '24/09/2022', expiryDate: '25/09/2023'},
      {id: 3, policyNumber: 'LI/HG/2020/R1RKL', policyProvider: 'Sovereign trust Insurance', premium: '₦1,000', effectiveDate: '23/09/2022', expiryDate: '24/09/2023'},
      {id: 4, policyNumber: 'LI/HG/2020/R1RKL', policyProvider: 'Linkage Insurance', premium: '₦1,000', effectiveDate: '23/09/2022', expiryDate: '24/09/2023'},
      {id: 5, policyNumber: 'LI/HG/2020/R1RKL', policyProvider: 'Linkage Insurance', premium: '₦1,000', effectiveDate: '23/09/2022', expiryDate: '24/09/2023'},
      {id: 6, policyNumber: 'LI/HG/2020/R1RKL', policyProvider: 'Linkage Insurance', premium: '₦1,000', effectiveDate: '23/09/2022', expiryDate: '24/09/2023'},
      {id: 7, policyNumber: 'LI/HG/2020/R1RKL', policyProvider: 'Linkage Insurance', premium: '₦1,000', effectiveDate: '23/09/2022', expiryDate: '24/09/2023'},
      {id: 8, policyNumber: 'LI/HG/2020/R1RKL', policyProvider: 'Linkage Insurance', premium: '₦1,000', effectiveDate: '23/09/2022', expiryDate: '24/09/2023'},
    ];

  return (
    <div className='w-full flex flex-col'>
        <div className="tabs flex items-center align-middle justify-start gap-6 border-b border-b-neutral-200 h-12 w-[95%] mx-auto p-2 md:text-sm text-xs">
            <div className={`tab ${activeTab === 'active' ? 'border-b-green-700' : ''} cursor-pointer transition-all px-4 py-3.5 border-b-2 border-transparent border-green-700`} onClick={() => handleTabClick('active')}>Active Policies</div>
            <div className={`tab ${activeTab === 'expired' ? 'border-b-green-700' : ''} cursor-pointer transition-all px-4 py-3.5 border-b-2 border-transparent border-green-700`} onClick={() => handleTabClick('expired')}>Expired Policies</div>
        </div>

      {activeTab === 'active' && (
        <div className="tab-content relative flex flex-col items-center h-screen justify-start w-[95%] gap-2 mx-auto mt-3">
          <div className='flex md:flex-row flex-wrap items-start justify-between py-2 px-4 gap-2 w-full'>
            <div className='flex flex-wrap items-center justify-between gap-3 md:gap-9'>
              <div className='flex flex-row gap-1 items-center justify-between p-2 rounded-lg text-neutral-500 border border-neutral-300'>
                <CiFilter size={20} className='font-light'/>
                <h3 className='text-sm'>Filter Table</h3>
              </div>
              <div className='flex flex-row gap-2 items-center justify-between p-2 w-60 rounded-lg text-neutral-500 border border-neutral-300'>
                <CiSearch size={20}/>
                <input type="text" name="Search text"  value={searchText} onChange={handleInputChange} placeholder='Search insurance with policy number' className='text-xs flex-1 h-full outline-none border-none'/>
              </div>
            </div>
            <div className='flex flex-row gap-1 items-center justify-between p-2 text-neutral-500 rounded-lg border border-neutral-300'>
              <PiUploadSimpleLight size={20}/>
              <div className='flex flex-row items-center justify-between gap-1'>
                <h3 className='text-sm'>Export</h3>
                <GoChevronDown size={20}/>
              </div>
            </div>
          </div>
          <div className='w-full mx-auto mt-9'>
            <MotorInsuranceTable data={tableData} />
            {/* <PolicyNumber tableData={tableData} /> */}
          </div>

          {selectedPolicy && (
            <div className='w-full mx-auto mt-9'>
              <PolicyNumber policy={selectedPolicy} />
            </div>
          )}

        </div>
      )}

      {activeTab === 'expired' && (
        <div className="tab-content relative flex flex-col items-center h-screen justify-start w-[95%] gap-2 mx-auto mt-3">
          <div className='flex md:flex-row flex-wrap items-start justify-between py-2 px-4 gap-2 w-full'>
            <div className='flex flex-wrap items-center justify-between gap-3 md:gap-9'>
              <div className='flex flex-row gap-1 items-center justify-between p-2 rounded-lg text-neutral-500 border border-neutral-300'>
                <CiFilter size={20} className='font-light'/>
                <h3 className='text-sm'>Filter Table</h3>
              </div>
              <div className='flex flex-row gap-2 items-center justify-between p-2 w-60 rounded-lg text-neutral-500 border border-neutral-300'>
                <CiSearch size={20}/>
                <input type="text" name="Search text"  value={searchText} onChange={handleInputChange} placeholder='Search insurance with policy number' className='text-xs flex-1 h-full outline-none border-none'/>
              </div>
            </div>
            <div className='flex flex-row gap-1 items-center justify-between p-2 text-neutral-500 rounded-lg border border-neutral-300'>
              <PiUploadSimpleLight size={20}/>
              <div className='flex flex-row items-center justify-between gap-1'>
                <h3 className='text-sm'>Export</h3>
                <GoChevronDown size={20}/>
              </div>
            </div>
          </div>
          <div className='w-full mx-auto mt-9'>
            <MotorInsuranceTable data={tableData} />
            {/* <PolicyNumber tableData={tableData} /> */}
          </div>

          {selectedPolicy && (
            <div className='w-full mx-auto mt-9'>
              <PolicyNumber policy={selectedPolicy} />
            </div>
          )}

        </div>
      )}
    </div>
  )
}

export default MotorPolicyStatus