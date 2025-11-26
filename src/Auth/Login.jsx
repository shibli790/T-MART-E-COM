import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword); // Toggle password visibility
  };

  return (
    <div className="bg-gray-50 min-h-screen flex justify-center items-center">
      <div className="bg-white shadow-lg p-8 rounded-lg w-xl">
        <h2 className="text-2xl font-semibold text-center text-gray-700">
          Welcome Back!
        </h2>
        <p className="text-center text-sm text-gray-500 mb-6">
          Let’s build something great
        </p>

        <form>
          <div className="space-y-4">
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="E-mail or phone number"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <span
                onClick={handlePasswordToggle}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <button className="w-full py-3 bg-indigo-600 text-white rounded-xl cursor-pointer ">
              Login
            </button>

            <div className="flex items-center justify-between ">
              <a className="text-sm text-gray-600">Forgot password?</a>
            </div>
          </div>
        </form>

        <div className="flex items-center justify-center  gap-2 my-2">
          <div className="h-px w-16 bg-black"></div>
          <span className="text-sm text-black">or</span>
          <div className="h-px w-16 bg-black"></div>
        </div>

        <div className="text-center mt-4">
          <button
            type="button"
            className="p-2 cursor-pointer rounded-xl w-full border-2 border-black flex items-center justify-center gap-2 bg-[#fff] text-[#000000]"
          >
            <FcGoogle className="text-xl" /> Continue with Google
          </button>
        </div>
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <a href="/signup" className="text-indigo-600">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
