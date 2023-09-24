import React, { useState } from 'react'
import box from '../assets/box 1.png'

const InsuranceStatus = () => {
    const [activeTab, setActiveTab] = useState('active');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

  return (
    <div className='w-full flex flex-col'>
        <div className="tabs flex items-center align-middle justify-start gap-6 border-b border-b-neutral-200 h-12 w-[95%] mx-auto p-2 md:text-sm text-xs">
            <div className={`tab ${activeTab === 'active' ? 'border-b-green-700' : ''} cursor-pointer transition-all px-4 py-3.5 border-b-2 border-transparent border-green-700`} onClick={() => handleTabClick('active')}>Active Insurance</div>
            <div className={`tab ${activeTab === 'expired' ? 'border-b-green-700' : ''} cursor-pointer transition-all px-4 py-3.5 border-b-2 border-transparent border-green-700`} onClick={() => handleTabClick('expired')}>Expired Insurance</div>
        </div>

      {activeTab === 'active' && (
        <div className="tab-content relative flex flex-col items-center h-screen justify-center w-full">
          <div className="flex flex-col items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[55%] mx-auto p-4 gap-2">
            <img src={box} alt="/" className="w-24 h-24" />
            <p className='font-bold text-sm md:text-lg'>You have not made any insurance purchases yet.</p>
            <p>When you make an insurance plan purchase, they will show up here</p>
            <button className="bg-green-700 text-white rounded-lg px-4 py-2 mt-2 text-sm">Buy motor insurance</button>
          </div>
        </div>
      )}

      {activeTab === 'expired' && (
        <div className="tab-content relative flex flex-col items-center h-screen justify-center w-full">
          <div className="flex flex-col items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[55%] mx-auto p-4 gap-2">
            <img src={box} alt="/" className="w-24 h-24" />
            <p className='font-bold text-sm md:text-lg'>You have not made any insurance purchases yet.</p>
            <p>When you make an insurance plan purchase, they will show up here</p>
            <button className="bg-green-700 text-white rounded-lg px-4 py-2 mt-2 text-sm">Buy motor insurance</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default InsuranceStatus