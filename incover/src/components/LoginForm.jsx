import React, { useState, useEffect } from 'react'
import { FaRegEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const emailRegex = /[^\s@]+@[^\s@]+\.[^\s@]+/gi;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [validEmail, setValidEmail] = useState(true);
    const [validPassword, setValidPassword] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const [showNextButton, setShowNextButton] = useState(true);
    const [touchedEmail, setTouchedEmail] = useState(false);
    const [touchedPassword, setTouchedPassword] = useState(false);

    // const history = useHistory();

    useEffect(() => {
      if (isTyping) {
      // Checks the validity of the email when user stops typing (300ms delay)
        const typingTimer = setTimeout(() => {
            setValidEmail(emailRegex.test(email));
            setIsTyping(false);
          }, 300);

        return () => clearTimeout(typingTimer);
        }
      }, [email, isTyping]);


  
    const handleNextClick = () => {
    if (!email || !validEmail) {
      setValidEmail(false);
      setTouchedEmail(true);
    }
    else {
       setShowNextButton(false);
       setShowPassword(true);
    }
  };


  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setIsTyping(true);
  };


  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setTouchedPassword(true);
    setValidPassword(passwordRegex.test(value));
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };


  // const handleToggleForm = () => {
  
  // };

  // const handleToggleForgotPassword = () => {
 
  // };

  const handleLoginClick = () => {
    // if (validPassword) {
    //   history.push('/dashboard');
    // }
  };

  return (
    <div className='grid grid-cols-1 items-center justify-between w-full gap-8'>
      <input type="email" value={email} placeholder='Enter email' onChange={handleEmailChange} className={`p-1 border border-slate-600 outline-none rounded-md w-[250px] ${validEmail ? 'border-green-600' : 'border-red-600'}`} />
      {!email && !validEmail && touchedEmail && showNextButton && (
        <p className="text-red-500 text-xs -mt-9 left-0">Please enter your email</p>
      )}

      {email && !validEmail && touchedEmail && showNextButton && (
        <p className="text-red-500 text-xs -mt-9 left-0">Invalid email. Please enter a valid email address.</p>
      )}

      {showNextButton && ( <button onClick={handleNextClick} className={`rounded-md py-2 px-4 text-white outline-none border-none w-[250px] bg-green-700 hover:bg-green-800 transition ease-in-out ${
            !email && !validEmail ? '-mt-7' : 'mt-0' 
          }`}>Sign in</button> )}

        {showNextButton && (<p className="text-xs -mt-9 left-0 cursor-pointer" >
          Don’t have an account? <span /*onClick={handleToggleForm}*/ className='text-green-700'>Sign Up</span> 
        </p> )}


      {showPassword && (
        <div className='grid grid-cols-1 items-center justify-between w-70% ml-0 mx-auto gap-8'>
          <div className='p-0.5 flex items-center justify-center h-9 w-[250px] mt-0 border border-slate-600 outline-none rounded-md'>
            <input type={passwordVisible ? 'text' : 'password'} value={password} placeholder='Enter password' onChange={handlePasswordChange} className={`p-1 w-full outline-none border-none ${validPassword ? 'border-green-400' : 'border-red-500'}`} />
            <FaRegEyeSlash onClick={togglePasswordVisibility} className='cursor-pointer left-0 text-lg mr-1' />
          </div>
          
          {!password && !validPassword && touchedPassword && (
            <p className="text-red-500 text-xs -mt-7 left-0">Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one digit, and one special character.</p>
          )}

          <Link to='/dashboard'><button onClick={handleLoginClick} className='rounded-md py-2 px-4 text-white outline-none border-none bg-green-700 hover:bg-green-800 transition ease-in-out'>Sign in</button></Link>
          <p className="text-center text-xs -mt-9 left-0 cursor-pointer" >
          Forgot password? <span /*onClick={handleToggleForgotPassword}*/ className='text-green-700'>Click here</span>
        </p>
        </div>
      )}
    </div>
  )
}

export default LoginForm