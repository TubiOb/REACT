import React, { useState } from 'react'

const InsuranceStatus = () => {
    const [activeTab, setActiveTab] = useState('active');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

  return (
    <div>
        <div className="tabs flex items-center justify-start gap-6 border-b border-b-neutral-200 h-12 w-[95%] mx-auto p-2 md:text-sm text-xs">
            <div className={`tab hover:cursor-pointer ${activeTab === 'active' ? 'active' : ''}`} onClick={() => handleTabClick('active')}>Active Insurance{activeTab === 'active' && <div className="dash bg-green-700"></div>}</div>
            <div className={`tab hover:cursor-pointer ${activeTab === 'expired' ? 'active' : ''}`} onClick={() => handleTabClick('expired')}>Expired Insurance{activeTab === 'expired' && <div className="dash bg-green-700"></div>}</div>
        </div>

      {activeTab === 'active' && (
        <div className="tab-content">
          <p>Content for Active Insurance</p>
        </div>
      )}

      {activeTab === 'expired' && (
        <div className="tab-content">
          <p>Content for Expired Insurance</p>
        </div>
      )}
    </div>
  )
}

export default InsuranceStatus