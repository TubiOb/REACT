import React from 'react'
import { useNavigate } from 'react-router-dom';
import { BiLeftArrowAlt } from 'react-icons/bi'

const Backbutton = () => {
    const history = useNavigate();

    const handleGoBack = () => {
        history(-1);
    }

  return (
    <div className='bg-neutral-800 items-center justify-center flex p-1 md:p-1.5 rounded-tr-xl rounded-bl-xl self-start' onClick={handleGoBack}>
        <BiLeftArrowAlt className='text-white' size={15} />
    </div>
  )
}

export default Backbutton