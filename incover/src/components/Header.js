import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/BOI Ins Broker 1.svg";

const Header = () => {
  return (
    <header className='text-green-600'>
        <div className='w-full border-b border-b-gray-200 h-auto flex p-4 px-9 items-center justify-between'>
            <div className="BoiInsBroker1 w-[306.24px] h-14 md:flex relative hidden">
                <Link to="/login"><img src={logo} alt="BOI Ins Broker logo" className='outline-none border-none w-[150px] md:w-[200px]' /></Link>
            </div>
            <div className="Buttons w-[120px] h-14 px-6 py-4 rounded-[32px] border border-green-800 justify-center items-center gap-2.5 inline-flex">
              <div className="Button2 text-green-800 text-base font-medium font-['Red Hat Display'] leading-normal">Register</div>
          </div>
        </div>

    </header>
  )
}

export default Header;