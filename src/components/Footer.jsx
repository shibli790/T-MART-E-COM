import React from 'react';
import { BiLogoInstagramAlt } from 'react-icons/bi';
import { HiArrowRight } from 'react-icons/hi';
import { ImGooglePlus, ImLocation } from 'react-icons/im';
import { IoLogoTwitter, IoMailSharp } from 'react-icons/io5';
import { LiaFacebook } from 'react-icons/lia';
import { MdLocalPhone } from 'react-icons/md';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="bg-[#F5F6F8] pt-20">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-16 gap-10">
          <div>
            <Link>
              <img src="/logo.png" alt="" />
            </Link>
            <div className="flex mt-7 gap-5">
              <ImLocation />
              <p className="text-sm text-gray-500">
                195 Main Rd G, FS Rayed VIC 3057, USA
              </p>
            </div>

            <div className="flex mt-7 gap-5">
              <IoMailSharp />

              <p className="text-sm text-gray-500">shibliahmed444@gmail.com</p>
            </div>

            <div className="flex mt-7 gap-5">
              <MdLocalPhone />

              <p className="text-sm text-gray-500">+008-01xxx-xxxxxx</p>
            </div>
            <div className="flex gap-5 text-2xl mt-4 text-gray-400 ">
              <Link to="/">
                <IoLogoTwitter />
              </Link>
              <Link to="/">
                <BiLogoInstagramAlt />
              </Link>
              <Link to="/">
                <LiaFacebook />
              </Link>
              <Link to="/">
                <ImGooglePlus />
              </Link>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-medium text-black ">TMART </h2>
            <ul className="flex flex-col gap-2.5 text-sm text-gray-500 mt-5">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Product</Link>
              </li>
              <li>
                <Link to="/">Contact Us</Link>
              </li>
              <li>
                <Link to="/">About Us </Link>
              </li>
              <li>
                <Link to="/">Contact Us </Link>
              </li>
              <li>
                <Link to="/">Terms & Conditions </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-medium text-black ">Categories</h2>
            <ul className="flex flex-col gap-2.5 text-sm text-gray-500 mt-5">
              <li>
                <Link to="/">Men </Link>
              </li>
              <li>
                <Link to="/">Women </Link>
              </li>
              <li>
                <Link to="/">Accessories </Link>
              </li>
              <li>
                <Link to="/">Shoes </Link>
              </li>
              <li>
                <Link to="/">Dress </Link>
              </li>
              <li>
                <Link to="/">Denim </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-medium text-black ">Newsletter</h2>
            <p className="text-sm font-normal text-gray-500 mt-7">
              Subscribe to our newsletter and get 10% off your first purchase .
            </p>
            <div className="border-2 border-b-black mt-3.5 flex ">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="py-2.5 px-5 w-full border-r-2"
              />
              <button className="px-4">
                <HiArrowRight />
              </button>
            </div>
          </div>
        </div>
        {/* copyright */}
        <p className="text-gray-500 text-center pb-4 ">
          © 2025 Powerd by Shibli Ahmed
        </p>
      </div>
    </footer>
  );
};

export default Footer;
