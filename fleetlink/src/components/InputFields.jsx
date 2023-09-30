import React, { useState, useEffect, useRef } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

const InputFields = ({ placeholder, onInputChange, setLoading }) => {
    const inputRef = useRef(null);

    const handleInputChange = (event) => {
    const { value } = event.target;
        onInputChange(value);
    };

    useEffect(() => {
        if (inputRef.current) {
            const input = inputRef.current;
            const legend = input.previousSibling;
            if (legend && placeholder) {
                legend.textContent = placeholder;
            }
        }
    }, [setLoading, placeholder]);

    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

  return (
    <div className='border-none outline-none mb-2 w-[90%] mx-auto gap-2 inline-flex flex-col'>
        <fieldset className='border-none outline-none'>
            <legend className='text-neutral-600 font-semibold text-xs ml-2 border-none outline-none'>{placeholder}</legend>
            <div className='w-full h-9 px-3 flex flex-row items-center justify-between gap-2.5 bg-neutral-200 rounded-md'>
                <input 
                ref={inputRef}
                type={placeholder === 'Password' ? (passwordVisible ? 'text' : 'password') : 'text'}
                className='w-full border-none outline-none p-1 text-sm bg-neutral-200'
                placeholder={placeholder}
                onChange={handleInputChange}/>
                {(placeholder === 'Password' || placeholder === 'Confirm Password') && (
                    <div className='w-5 h-5 relative secure'>
                        {passwordVisible ? (
                        <AiOutlineEyeInvisible className="cursor-pointer left-0 w-5 h-5 mr-1"  onClick={togglePasswordVisibility} />
                        ) : (
                        <AiOutlineEye className="cursor-pointer left-0 w-5 h-5 mr-1"  onClick={togglePasswordVisibility} />
                        )}
                    </div>
                )}
            </div>
        </fieldset>
    </div>
  )
}

export default InputFields