import React, { useState } from 'react'
// import { HashLoader } from 'react-spinners';
import LoaderBus from '../assets/bus-310766_1280.png'

const Loader = ({ children }) => {
    const [loading] = useState(false);

  return (
    <div>
        {loading && <div className="absolute inset-0 bg-transparent w-full h-full bg-opacity-80 backdrop-blur-lg bg-white" />}
        {loading && (
        <div className="fixed left-1/2 -translate-x-1/2 top-1/2 transform -translate-y-1/2 items-center justify-center">
          {/* <HashLoader color="#36d7b7" /> */}
          <div className="relative w-32 h-16">
              <img src={LoaderBus} alt='LoaderBus' className="absolute w-32 h-16 rounded-full bg-bus-yellow animate-bus-moving"/>
              {/* <div className="absolute w-32 h-16 rounded-full bg-bus-red animate-bus-moving reverse"></div> */}
          </div>
        </div>
      )}

      {!loading && children}
    </div>
  )
}

export default Loader