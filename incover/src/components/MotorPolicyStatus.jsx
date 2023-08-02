import React, { useState } from 'react'

const MotorPolicyStatus = () => {
    const [activeTab, setActiveTab] = useState('active');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

  return (
    <div className='w-full flex flex-col'>
        <div className="tabs flex items-center align-middle justify-start gap-6 border-b border-b-neutral-200 h-12 w-[95%] mx-auto p-2 md:text-sm text-xs">
            <div className={`tab ${activeTab === 'active' ? 'border-b-green-700' : ''} cursor-pointer transition-all px-4 py-2 border-b-2 border-transparent border-green-700`} onClick={() => handleTabClick('active')}>Active Policies</div>
            <div className={`tab ${activeTab === 'expired' ? 'border-b-green-700' : ''} cursor-pointer transition-all px-4 py-2 border-b-2 border-transparent border-green-700`} onClick={() => handleTabClick('expired')}>Expired Policies</div>
        </div>

      {activeTab === 'active' && (
        <div className="tab-content relative flex flex-col items-center h-screen justify-center w-full">
          
        </div>
      )}

      {activeTab === 'expired' && (
        <div className="tab-content relative flex flex-col items-center h-screen justify-center w-full">
          
        </div>
      )}
    </div>
  )
}

export default MotorPolicyStatus