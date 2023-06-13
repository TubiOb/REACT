import React from 'react'
import Tab from '../assets/Dark analytics-bro.svg'

function Analytics() {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={Tab} alt="/" />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>DATA ANAYLTICS DASHBOARD</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Aliquam aliquet diam eget purus varius, eu gravida sapien gravida. 
                    Donec placerat ac lorem eget sodales. Nam imperdiet tempus urna eu tincidunt. 
                    Donec nec elementum tellus, non feugiat nibh. Curabitur ut vestibulum purus.
                </p>
                <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
            </div>
        </div>
    </div>
  );
};

export default Analytics