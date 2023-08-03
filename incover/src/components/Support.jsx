import React from 'react'
import { HiMiniChatBubbleBottomCenterText } from 'react-icons/hi2'

const Support = () => {
  return (
    <div className='flex flex-row-reverse w-[95%] items-center justify-start my-2'>
        <div className='flex flex-row gap-2 items-center justify-center text-xs rounded-md text-white bg-amber-700 p-1.5'>
            <HiMiniChatBubbleBottomCenterText size={16}/>
            <h3>Support</h3>
        </div>
    </div>
  )
}

export default Support