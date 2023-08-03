import React from 'react'
import SetupHeading from './SetupHeading'
import SetupGuides from './SetupGuides'

const SetupHome = () => {
  return (
    <div className='flex flex-col w-full ml-0 md:ml-64 gap-y-0'>
        <SetupHeading />
        <SetupGuides />
    </div>
  )
}

export default SetupHome