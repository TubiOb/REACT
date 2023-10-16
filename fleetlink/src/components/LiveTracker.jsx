import React from 'react'
import Maps from './Maps'
import 'leaflet/dist/leaflet.css'
import TrackingInfo from './TrackingInfo';

const LiveTracker = () => {
  const center = {
    lat: 6.4541,
    lng: 3.3947,
  };

  const zoom = 13;

  return (
    <div className='flex flex-col w-[95%] items-center mx-auto mt-4 p-2 gap-4 drop-shadow-2xl bg-inherit h-[650px] text-black'>
        <div className='flex w-full font-bold items-start justify-start'>
            <h3 className='pl-3 md:p1-2'>Live Tracker</h3>
        </div>
        <div className='flex p-2 w-full h-[500px] items-center justify-center box-border'>
            <Maps center={center} zoom={zoom} className='relative w-full h-full' />
        </div>
        <TrackingInfo />
        <button className='mx-auto text-white px-2 py-2 rounded-xl w-[40%] md:w-[20%] bg-neutral-900 font-semibold shadow-neutral-800 shadow-2xl transition duration-300 hover:bg-white hover:text-neutral-900 hover:shadow-md hover:font-semibold hover:border hover:border-neutral-300 hover:shadow-neutral-300 text-sm md:text-lg flex items-center justify-center'>Schedule Pick-up</button>
    </div>
  )
}

export default LiveTracker