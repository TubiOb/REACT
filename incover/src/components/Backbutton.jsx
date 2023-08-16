import React from 'react'
import { MdArrowBackIosNew } from 'react-icons/md'
import { useNavigate } from 'react-router-dom';

const Backbutton = () => {
    const history = useNavigate();

    const handleGoBack = () => {
        history(-1);
    };

  return (
     <div className='flex p-1 rounded-md bg-neutral-200 items-center hover:cursor-pointer' onClick={handleGoBack}>
        <MdArrowBackIosNew size={15}/>
     </div>
  )
}

export default Backbutton