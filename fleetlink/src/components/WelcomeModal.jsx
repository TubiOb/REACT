import React from 'react'
import { CgCloseR } from 'react-icons/cg'

const WelcomeModal = ({ show, closeModal }) => {
    if (!show) return null;

  return (
    <div className='fixed bg-transparent z-50 bg-opacity-70 backdrop-blur-md inset-0 flex justify-center items-center w-full h-full'>
        <div className='bg-white rounded-lg p-2 w-[95%] items-center justify-center md:w-[40%] h-auto drop-shadow-2xl shadow-xl' onClick={closeModal}>
            <div className='flex flex-col text-left md:text-justify gap-2 p-2'>
                <button onClick={closeModal} className='justify-start flex-row-reverse items-start my-2 ml-3'><CgCloseR  size={20}/></button>
                <h2 className='mx-auto font-bold text-lg underline'>Welcome</h2>
                <p className='pl-5 md:pl-4 break-words'>
                    We're thrilled to have you here. Our mission is to make your daily commute smoother, more efficient, and a little brighter. With this transportation system, we're putting your comfort and convenience front and center.<br/>
                    Expect:
                </p>
                    <ul className='list-disc pl-8 md:pl-10 font-semibold'>
                        <li>Effortless Booking: Easily schedule and manage your rides.</li>
                        <li>Real-Time Updates: Stay informed about your commute with notifications.</li>
                        <li>Safety First: Your well-being is our priority.</li>
                        <li>Green Commuting: Help us create a more sustainable future.</li>
                    </ul>
                <p className='pl-5 md:pl-4 break-words'>
                    If you have any questions or suggestions, we're just a click away. Thank you for choosing us to enhance your journey.
                    Safe travels
                </p>
                <button onClick={closeModal} className='mx-auto text-white px-2 py-2 rounded-xl w-[40%] md:w-[30%] bg-neutral-900 font-semibold shadow-neutral-800 shadow-2xl transition duration-300 hover:bg-white hover:text-neutral-900 hover:shadow-md hover:font-semibold hover:border hover:border-neutral-300 hover:shadow-neutral-300 text-sm md:text-lg flex items-center justify-center'>Continue</button>
            </div>
        </div>
    </div>
  ); 
}

export default WelcomeModal