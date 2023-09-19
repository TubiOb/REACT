import React, { useState, useEffect } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import EyeSplash from '../assets/eye-slash.png'
import Eye from '../assets/eye.png'

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
    const [isInputEnabled, setInputEnabled] = useState(true);

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
       setInputEnabled(false);
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
    <div className='flex flex-col items-center justify-between w-full gap-8'>

      
      
      <div className={`InputFields w-full h-11 px-6 py-3 ${isInputEnabled ? 'rounded-lg border border-neutral-400' : 'bg-gray-50 rounded-lg border border-gray-200'} justify-start items-center gap-2.5 inline-flex`}>
        {isInputEnabled ? (
          <input
            type="email"
            value={email}
            placeholder='Email address'
            onChange={handleEmailChange}
            className={`EmailInput p-1 border-transparent outline-none rounded-md grow shrink basis-0 text-neutral-500 text-sm font-normal font-['Red Hat Display'] leading-tight ${validEmail ? 'border-green-600' : 'border-red-600'}`}
          />
        ) : (
          
          <div className="Frame11140 self-stretch justify-start w-full items-start gap-2.5 inline-flex">
            <div className=" grow shrink basis-0 text-neutral-500 text-sm font-normal font-['Red Hat Display'] leading-tight">{email}</div>
          </div>
        )}
        
      </div>
      
      
      {!email && !validEmail && touchedEmail && showNextButton && (
        <p className="text-red-500 text-xs -mt-9 left-0">Please enter your email</p>
      )}

      {email && !validEmail && touchedEmail && showNextButton && (
        <p className="text-red-500 text-xs -mt-9 left-0">Invalid email. Please enter a valid email address.</p>
      )}

      {showNextButton && ( 
      // <button  className={`rounded-md py-2 px-4 text-white outline-none border-none w-[250px] bg-green-700  `}>Sign in</button> )}
          <div className="Frame3180 self-stretch h-[100px] flex-col justify-center items-center gap-6 flex">
            <div className="Frame1000008726 self-stretch h-[100px] flex-col justify-center items-center gap-3 flex">
              <div onClick={handleNextClick} className="Buttons self-stretch px-6 py-3 bg-green-800 rounded-lg justify-center items-center gap-2.5 inline-flex hover:bg-green-900 transition ease-in-out">
                <div className={`Button2 text-white text-base font-semibold font-['Red Hat Display'] leading-normal ${!email && !validEmail ? '-mt-7' : 'mt-0'}`}>Sign in</div>
              </div>
              <div className="ByContinuingYouAgreeToBoiibonlineSTermsConditionsAndPrivacyNotice self-stretch"><span className="text-neutral-500 text-sm font-normal font-['Red Hat Display']">By continuing, you agree to BOIIBOnline's </span><span className="text-green-800 text-sm font-normal font-['Red Hat Display'] underline leading-tight">Terms & Conditions</span><span className="text-green-800 text-sm font-normal font-['Red Hat Display'] leading-tight"> </span><span className="text-neutral-500 text-sm font-normal font-['Red Hat Display'] leading-tight">and </span><span className="text-green-800 text-sm font-normal font-['Red Hat Display'] underline leading-tight">Privacy Notice</span><span className="text-neutral-500 text-sm font-normal font-['Red Hat Display'] leading-tight">.</span></div>
            </div>
          </div> )}


      {showPassword && (
        <div className="grid grid-cols-1 items-center justify-between w-full gap-8">
          <div className='InputFields w-full h-11 px-3 flex flex-row items-center rounded-lg justify-between gap-2.5 border border-neutral-400'>
            <input 
              type={passwordVisible ? 'text' : 'password'} 
              value={password} 
              placeholder='Enter password' 
              onChange={handlePasswordChange} 
              className={`p-1 border-transparent outline-none rounded-md grow shrink basis-0 text-neutral-500 text-sm font-normal font-['Red Hat Display'] leading-tight ${validPassword ? 'border-green-400' : 'border-red-500'}`} />
            <div className="w-5 h-5 relative">
              {passwordVisible ? (
                  <img
                    src={EyeSplash}
                    alt="Hide Password"
                    onClick={togglePasswordVisibility}
                    className="cursor-pointer left-0 w-5 h-5 mr-1"
                  />
                ) : (
                  <img
                    src={Eye}
                    alt="Show Password"
                    onClick={togglePasswordVisibility}
                    className="cursor-pointer left-0 w-5 h-5 mr-1"
                  />
              )}
            </div>
          </div>


              {!password && !validPassword && touchedPassword && (
                <p className="text-red-500 text-xs -mt-7 left-0">Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one digit, and one special character.</p>
              )}
          <div className="Frame3180 self-stretch h-20 flex-col justify-center items-center gap-3 inline-flex">
            <Link to='/dashboard' onClick={handleLoginClick} className="Buttons self-stretch px-6 py-3 bg-green-800 rounded-lg justify-center items-center gap-2.5 inline-flex hover:bg-green-900 transition ease-in-out">
              <button className="Button2 text-white text-base font-medium font-['Red Hat Display'] leading-normal">Sign in</button>
            </Link>
            <div className="ForgotPasswordClickHere text-center"><span className="text-neutral-600 text-sm font-normal font-['Red Hat Display'] leading-tight">Forgot password?  
              </span><span className="text-green-800 text-sm font-normal font-['Red Hat Display'] underline leading-tight"> Click here</span></div>
        </div>
        </div>
        
      )}
    </div>
  )
}

export default LoginForm