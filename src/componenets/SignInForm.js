import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Left from './images/Left side.png';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = () => {
    // Simulate email authentication
    if (email === 'test@example.com' && password === 'password') {
      // Authentication successful
      toast.success('Login successful!', {
      
        autoClose: 2000, 
      });
    } else {
      // Authentication failed
      toast.error('Login failed. Invalid credentials.', {
       
        autoClose: 2000,
      });
    }
  };

  return (
    <div className=" bg-slate-100 flex h-screen">
      {/* Left Half with Background Color */}
      <div 
      style={{ 
            background:`url(${Left})`,
            backgroundSize: 'cover'  }} 
      className="w-1/2">
        <div className="h-full flex justify-center items-center bg-605BFF">
          {/* Text in the middle */}
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
            }}
          >
            BASE
          </div>
        </div>
      </div>

      {/* Right Half - Sign In Form */}
      <div className="w-1/2 flex flex-col justify-center items-start bg-gray-100 px-24">
        <h1 className="text-3xl font-bold mb-2">Sign In</h1>
        <p className="text-sm mb-6">Sign in to your account</p>

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
            className="w-full text-white p-3 rounded-md hover:bg-green-600"
          >
            Sign In
          </button>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default SignInForm;
