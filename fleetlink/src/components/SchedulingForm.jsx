import React, { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { CgChevronDown } from 'react-icons/cg'

const SchedulingForm = () => {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

  return (
    <div className='flex flex-col w-[95%] items-center justify-center mx-auto mt-24 z-10 p-2 gap-4 bg-white h-auto text-black rounded-2xl border outline-none'>
        <div className='w-[30%] p-2 items-center justify-center flex border border-neutral-200'>
            <h3 className='font-bold'>Schedule Pick-up</h3>
        </div>
        <div className='w-[90%] mx-auto p-2 md:p-4 grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-4'>
            <div className='border-none outline-none mb-2 w-[90%] mx-auto gap-2 inline-flex flex-col'>
                <fieldset className='border-none outline-none'>
                    <legend className='text-neutral-600 font-semibold text-xs ml-2 border-none outline-none'></legend>
                    <Menu as="div" className="relative inline-block text-left">
                        <div>
                            <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                            Options
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
                                            <a
                                            href="/"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                            >
                                            Account settings
                                            </a>
                                        )}
                                        </Menu.Item>
                                        <Menu.Item>
                                        {({ active }) => (
                                            <a
                                            href="/"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                            >
                                            Support
                                            </a>
                                        )}
                                        </Menu.Item>
                                        <Menu.Item>
                                        {({ active }) => (
                                            <a
                                            href="/"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                            >
                                            License
                                            </a>
                                        )}
                                        </Menu.Item>
                                        <form method="POST" action="#">
                                        <Menu.Item>
                                            {({ active }) => (
                                            <button
                                                type="submit"
                                                className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block w-full px-4 py-2 text-left text-sm'
                                                )}
                                            >
                                                Sign out
                                            </button>
                                            )}
                                        </Menu.Item>
                                        </form>
                                    </div>
                                </Menu.Items>    
                        </Transition>
                    </Menu>
                </fieldset>
            </div>
        </div>
    </div>
  )
}

export default SchedulingForm