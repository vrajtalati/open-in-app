import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Left from './images/Left side.png';
import mediaLogo from '../componenets/images/mediaLogo.png';
import logoline from '../componenets/images/logoline.png';
import EllipseInBox from './EllipseInBox';
import googleicon from '../componenets/images/google.svg';
import appleicon from '../componenets/images/apple.svg';
import logo from '../componenets/images/logo.svg'

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = () => {
    if (email === 'test@example.com' && password === 'password') {
      toast.success('Login successful!', {
        autoClose: 2000,
      });
      navigate('/dashboard');
    } else {
      toast.error('Login failed. Invalid credentials.', {
        autoClose: 2000,
      });
    }
  };

  return (
    <div className="bg-slate-100 flex flex-col h-screen">
      {isSmallScreen && (
        <header
        style={{ background: '#605BFF' }}
          className="w-full p-4 text-white text-right"
        >
          <img
            src={logo}
            alt="Your Alt Text"
            className=" float-left"
          />
        </header>
      )}

      <div className="flex-grow flex">
        {!isSmallScreen && (
          <div
            style={{
              background: `url(${Left})`,
              backgroundSize: 'cover',
            }}
            className="w-1/2 relative items-center justify-center"
          >
            <div
              style={{
                width: '40%',
                top: '0%',
                left: '0%',
                position: 'absolute',
              }}
            >
              <EllipseInBox />
            </div>
            <img
              style={{
                top: '12%',
                left: '9%',
                position: 'absolute',
              }}
              src={logoline}
            />
            <div
              style={{
                fontFamily: 'Montserrat',
                fontSize: '72px',
                fontWeight: 700,
                lineHeight: '88px',
                letterSpacing: '0em',
                textAlign: 'left',
                width: '205px',
                height: '88px',
                color: '#FFFFFF',
                top: '40%',
                left: '30%',
                position: 'absolute',
              }}
            >
              BASE
            </div>

            <div
              style={{
                width: '40%',
                bottom: '10%',
                left: '20%',
                position: 'absolute',
              }}
            >
              <img src={mediaLogo} />
            </div>
          </div>
        )}

        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center bg-gray-100 px-4 lg:px-24">
          <h1 className="text-3xl  font-bold mb-2">Sign In</h1>
          <p className="text-sm mb-6">Sign in to your account</p>
          <div className="mb-4 flex flex-wrap">
  <button className=" flex m-1 items-center w-40 lg:w-auto p-3 rounded-md bg-white mb-2 lg:mb-0 lg:mr-2">
    <img src={googleicon} className="w-5 h-5 mr-2" />
    Sign in with Google
  </button>
  <button className=" flex m-1 w-40 lg:w-auto p-3 rounded-md bg-white">
    <img src={appleicon} alt="Apple Logo" className="w-5 h-5 mr-2" />
    Sign in with Apple
  </button>
</div>

          <div className="w-full max-w-md bg-white rounded-md border border-gray-300 shadow-md p-8">
            <label htmlFor="email" className="block mb-2 text-gray-800">
              Email Address
            </label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full p-3 mb-4 border border-gray-300 bg-gray-100 rounded-md"
              placeholder="Enter your email"
            />

            <label htmlFor="password" className="block mb-2 text-gray-800">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full p-3 mb-4 border border-gray-300 bg-gray-100 rounded-md"
              placeholder="Enter your password"
            />

            <p className="text-blue-500 text-sm cursor-pointer mb-4">
              Forgot Password?
            </p>

            <button
              onClick={handleSignIn}
              style={{ background: '#605BFF' }}
              className={`w-full text-white p-3 rounded-md hover:bg-green-600 ${
                isSmallScreen ? 'text-sm' : ''
              }`}
            >
              Sign In
            </button>
          </div>
          <div className="text-center mt-4">
    <p className="text-gray-800 mb-2" style={{ fontFamily: 'Lato', fontSize: '16px', fontWeight: 400, lineHeight: '19px', letterSpacing: '0em', textAlign: 'center' }}>
      Don’t have an account? 
    </p>
    <a href="#" className="text-blue-500">
      Register here
    </a>
  </div>
         
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default SignInForm;



