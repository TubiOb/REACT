import React from 'react'
import '../index.css'
import LoaderBus from '../assets/bus-310766_1280.png'

const Preloader = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-white">
      <div className="relative w-32 h-16">
        <img src={LoaderBus} alt='LoaderBus' className="absolute w-32 h-16 rounded-full bg-bus-yellow animate-bus-moving"/>
        {/* <div className="absolute w-32 h-16 rounded-full bg-bus-red animate-bus-moving reverse"></div> */}
      </div>
    </div>
  );
};

export default Preloader