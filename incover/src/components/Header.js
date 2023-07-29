import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/BOI Ins Broker 1.svg";

const Header = () => {
  return (
    <header className='text-green-600'>
        <div className='w-full border-b border-b-gray-200 h-auto flex p-4 px-9 items-center justify-between'>
            <Link to="/login"><img src={logo} alt="BOI Ins Broker logo" className='outline-none border-none w-[150px] md:w-[200px]' /></Link>
            <button type="submit" className='rounded-full border border-green-500 py-1 px-3 md:py-2 md:px-5 text-xs md:text-sm hover:bg-green-500 hover:text-white hover:border-none transition ease-in-out'>Register</button>
        </div>

    </header>
  )
}

export default Header;