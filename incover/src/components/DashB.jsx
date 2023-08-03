import React from 'react'
import Heading from '../components/Heading'
import Intro from '../components/Intro'
import Overview from '../components/Overview'
import QuickAction from './QuickAction'
import ActivePlans from './ActivePlans'

const DashB = () => {
  return (
    <div className='flex flex-col w-full ml-0 md:ml-64 gap-y-0'>
        <Heading />
        <Intro />
        <Overview />
        <QuickAction />
        <ActivePlans />
    </div>
  )
}

export default DashB