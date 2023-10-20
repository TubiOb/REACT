import React, { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { CgChevronDown } from 'react-icons/cg'
import BookingCalendar from './BookingCalendar'
import { collection, addDoc, doc } from 'firebase/firestore';
import { firestore } from '../firebase.js';
import Toast from './Toast'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const SchedulingForm = () => {
    const [selectedMenuItem, setSelectedMenuItem] = useState('');
    const [menuActive, setMenuActive] = useState(true);
    const [selectedDates, setSelectedDates] = useState([]); // State to store selected dates
    const [isButtonDisabled, setButtonDisabled] = useState(false);


    // COLLECTING THE SCHEDULING DETAILS AND RETRIEVING STAFFID FROM FIEBASE
    const saveScheduleDetails = async (userId, location, dates) => {
        const scheduleRef = collection(firestore, 'Schedule Details');

        const flattenedDates = dates.flat();
        
        try {
            // Create a new document with staff's ID as the document name
            const staffDocRef = doc(firestore, `Staff/${userId}`);
            await addDoc(scheduleRef, {
                staffId: userId,
                location: location,
                dates: flattenedDates,
            });
            
            console.log(userId);
            console.log(location);
            console.log(dates);

            console.log('Schedule details saved successfully.');
            setButtonDisabled(true);
            showToastMessage('Schedule details saved successfully.', 'success');
        } catch (error) {
            console.error('Error saving schedule details:', error);
        }
    };


    // SAVING THE SCHEDULING DETAILS TO FIREBASE
    const handleScheduleBooking = (userId) => {
        // Get staff member's ID
        const staffDocRef = doc(firestore, `Staff/${userId}`);
        const staffId = staffDocRef; // Replace with your actual logic to get the staff ID

        // Get the selected location and dates (from your component's state)
        const selectedLocation = selectedMenuItem;
        const selectedDate = selectedDates;

        // Check if the location and dates are selected
        if (!selectedLocation || selectedDate.length === 0) {
            // If either the location or dates are missing, show an error message
            showToastMessage('Please select a location and date(s).', 'error');
        } else {
            // Call the function to save the details
            saveScheduleDetails(staffId, selectedLocation, selectedDate);
           
        }
    };


    // HANDLING FUNCTION FOR SELECTED LOCATION
    const handleMenuItemSelect = (menuItem) => {
        setSelectedMenuItem(menuItem);
        setMenuActive(false);
        console.log(menuItem)
    };

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    

  // Callback function to update selected dates
    const handleDateSelection = (dates) => {
        setSelectedDates(dates);
        console.log(dates)
    };



    // TOAST
    const showToastMessage = (message, type) => {
        switch (type) {
            case 'success':
                toast.success(message, {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 3000,
                });
                break;
            case 'error':
                toast.error(message, {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 3000,
                });
                break;
            default:
                break;
        }
    };


  return (
    <div className='flex flex-col w-[95%] md:w-[45%] items-center justify-center mx-auto mt-24 my-auto p-2 gap-8 bg-white h-auto text-black rounded-2xl border border-neutral-300 outline-none'>
        <div className='w-[60%] md:w-[30%] p-2 items-center justify-center flex border border-neutral-200'>
            <h3 className='font-bold'>Schedule Pick-up</h3>
        </div>
        <div className='w-[90%] mx-auto p-2 grid grid-cols-1 bg-white md:grid-cols-2 items-center justify-between gap-4'>
            <div className='border-none outline-none items-center justify-center mb-2 w-full mx-auto gap-2 inline-flex flex-col'>
                <fieldset className='border-none outline-none w-[80%] flex gap-2'>
                    <legend className='text-neutral-800 font-bold text-sm ml-1 border-none outline-none'>Bus Capacity</legend>
                   <input 
                        defaultValue='18'
                        type='number'
                        className='w-full border border-neutral-300 rounded-md outline-none flex px-2 py-2 text-sm'
                        placeholder='18 passengers'
                        disabled
                    />
                </fieldset>
            </div>

            <div className='border-none outline-none items-center justify-center mb-2 w-full mx-auto gap-2 inline-flex flex-col'>
                <fieldset className='border-none outline-none w-[80%] flex gap-2'>
                    <legend className='text-neutral-800 font-bold text-sm ml-1 border-none outline-none'>Scheduled passengers:</legend>
                    <input 
                        // defaultValue='18'
                        value='0'
                        type='number'
                        className='w-full border border-neutral-300 rounded-md outline-none flex px-2 py-2 text-sm'
                        placeholder='0 passenger(s)'
                        disabled
                    />
                </fieldset>
            </div>

            <div className='border-none outline-none items-center justify-center mb-2 w-full mx-auto gap-2 inline-flex flex-col'>
                <fieldset className='border-none outline-none w-[80%] flex gap-2'>
                    <legend className='text-neutral-800 font-bold text-sm ml-1 border-none outline-none'>Pickup Time</legend>
                    <input 
                        type='text'
                        className='w-full border border-neutral-300 rounded-md outline-none flex px-2 py-2 text-sm'
                        placeholder='7 am'
                        disabled
                    />
                </fieldset>
            </div>

            <div className='border-none outline-none items-center justify-center mb-2 w-full mx-auto gap-2 inline-flex flex-col'>
                <fieldset className='border-none outline-none w-[80%] flex gap-2'>
                    <legend className='text-neutral-800 font-bold text-sm ml-1 border-none outline-none'>Closest Location</legend>
                    <Menu as="div" className="relative inline-block w-full text-left">
                        <div>
                            <Menu.Button className="inline-flex w-full justify-center gap-x-3.5 rounded-md bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" disabled={!menuActive}>
                            {menuActive ? 'Closest Location' : selectedMenuItem}
                            <CgChevronDown className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                            </Menu.Button>
                        </div>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95">
                                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1">
                                        <Menu.Item>
                                        {({ active }) => (
                                            <p
                                            onClick={() => {
                                                handleMenuItemSelect('Alausa-Secretariat')
                                            }}
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                            >
                                            Alausa-Secretariat
                                            </p>
                                        )}
                                        </Menu.Item>
                                        <Menu.Item>
                                        {({ active }) => (
                                            <p
                                            onClick={() => {
                                                handleMenuItemSelect('Allen')
                                            }}
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                            >
                                            Allen
                                            </p>
                                        )}
                                        </Menu.Item>
                                        <Menu.Item>
                                        {({ active }) => (
                                            <p
                                            onClick={() => {
                                                handleMenuItemSelect('Egbeda')
                                            }}
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                            >
                                            Egbeda
                                            </p>
                                        )}
                                        </Menu.Item>
                                        <Menu.Item>
                                        {({ active }) => (
                                            <p
                                            onClick={() => {
                                                handleMenuItemSelect('Iyana Ipaja')
                                            }}
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                            >
                                            Iyana Ipaja
                                            </p>
                                        )}
                                        </Menu.Item>
                                        <Menu.Item>
                                        {({ active }) => (
                                            <p
                                            onClick={() => {
                                                handleMenuItemSelect('Ogba')
                                            }}
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                            >
                                            Ogba
                                            </p>
                                        )}
                                        </Menu.Item>
                                        <Menu.Item>
                                        {({ active }) => (
                                            <p
                                            onClick={() => {
                                                handleMenuItemSelect('Oshodi')
                                            }}
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                            >
                                            Oshodi
                                            </p>
                                        )}
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>    
                        </Transition>
                    </Menu>
                </fieldset>
            </div>
        </div>
        <div className='w-full flex flex-col h-auto p-2 items-center justify-center mt-2 gap-4'>
            <BookingCalendar onDateSelect={handleDateSelection} />
            <button className='mx-auto text-white px-2 py-2 rounded-xl w-[60%] md:w-[40%] bg-neutral-900 font-semibold shadow-neutral-800 shadow-2xl transition duration-300 hover:bg-white hover:text-neutral-900 hover:shadow-md hover:font-semibold hover:border hover:border-neutral-300 hover:shadow-neutral-300 text-sm md:text-lg flex items-center justify-center' onClick={handleScheduleBooking} disabled={isButtonDisabled}>Schedule Pick-up</button>
        </div>
        <Toast showToast={showToastMessage} />
    </div>
  )
}

export default SchedulingForm