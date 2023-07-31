import React from 'react'
import { MdArrowBackIosNew } from 'react-icons/md'
import { useNavigate } from 'react-router-dom';

const Backbutton = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate.goBack();
    };

  return (
     <div className='flex p-1 rounded-md bg-neutral-200 items-center' onClick={handleGoBack}>
        <MdArrowBackIosNew size={15}/>
     </div>
  )
}

export default Backbutton