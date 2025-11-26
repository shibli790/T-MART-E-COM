import React from 'react';
import { FcGoogle } from 'react-icons/fc';

const Signup = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex justify-center items-center">
      <div className="bg-white shadow-lg p-8 rounded-lg ">
        <h2 className="text-2xl font-semibold text-center text-gray-700">
          Create an account
        </h2>
        <p className="text-center text-sm text-gray-500 mb-6">
          You are welcome!
        </p>

        <form>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-1/2">
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="First Name"
                />
              </div>
              <div className="w-1/2">
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Last Name"
                />
              </div>
            </div>

            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Email"
            />

            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Phone Number"
            />

            <input
              type="password"
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Password"
            />

            <input
              type="password"
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Confirm Password"
            />

            <div className="flex items-center justify-between ">
              <label className="flex items-center text-sm text-gray-600">
                <input type="checkbox" className="mr-2" /> I agree with terms &
                conditions
              </label>
            </div>

            <button className="w-full py-3 bg-indigo-500 cursor-pointer text-white rounded-xl ">
              Sign Up
            </button>
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
            Already have an account?{' '}
            <a href="/login" className="text-indigo-600">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
