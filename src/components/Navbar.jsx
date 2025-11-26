import React, { useState } from 'react';
import { CiSearch, CiUser } from 'react-icons/ci';
import { TfiShoppingCart } from 'react-icons/tfi';
import { FaBars } from 'react-icons/fa';
import { VscCloseAll } from 'react-icons/vsc';
import { IoSearch } from 'react-icons/io5';
import { FcManager } from 'react-icons/fc';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 backdrop-blur bg-base-100/80 shadow-xl px-4 py-4">
        <div className="container flex justify-between items-center">
          {/* Logo */}
          <div>
            <img src="/logo.png" alt="logo" />
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="text-base font-medium text-black flex gap-10">
              <li className="md:text-sm">
                <NavLink
                  to="/"
                   className={({ isActive }) =>
                    isActive ? 'text-secondary' : ''
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="md:text-sm">
                <NavLink
                  to="/shop"
                  className={({ isActive }) =>
                    isActive ? 'text-secondary' : ''
                  }
                >
                  Shop All
                </NavLink>
              </li>
              <li className="md:text-sm">
                <NavLink
                  to="/addProduct"
                  className={({ isActive }) =>
                    isActive ? 'text-secondary' : ''
                  }
                >
                  Add Product
                </NavLink>
              </li>
            </ul>
          </div>
          {/* Icons + Mobile Menu Btn */}
          <div className="flex items-center gap-6">
            <ul className="hidden md:flex gap-7 text-lg">
              <li>
                <IoSearch />
              </li>
              <li>
                <FcManager />
              </li>
              <li>
                <Link to="/addCard">
                  <TfiShoppingCart />
                </Link>
              </li>
            </ul>
            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex gap-4">
              <Link
                to="/login"
                className="bg-blue-600 px-6 rounded-2xl text-white py-2"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-blue-600 px-6 rounded-2xl text-white py-2"
              >
                Register
              </Link>
            </div>
          </div>
          <div className="dropdown dropdown-end md:hidden">
            <div tabIndex={0} role="button" className="text-2xl">
              {' '}
              <FaBars />
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li className="text-center py-2">
                <NavLink to="/" className={({ isActive }) =>
                    isActive ? 'text-secondary' : ''
                  } onClick={() => setShow(false)}>
                  Home
                </NavLink>
              </li>
              <li className="text-center py-2">
                <NavLink to="/shop" className={({ isActive }) =>
                    isActive ? 'text-secondary' : ''
                  } onClick={() => setShow(false)}>
                  Shop All
                </NavLink>
              </li>
              <li className="text-center py-2">
                <NavLink to="/addProduct" className={({ isActive }) =>
                    isActive ? 'text-secondary' : ''
                  } onClick={() => setShow(false)}>
                  Add Product
                </NavLink>
              </li>
              <li className="text-center py-2">
                <NavLink to="/addCard" className={({ isActive }) =>
                    isActive ? 'text-secondary' : ''
                  } onClick={() => setShow(false)}>
                  My Products
                </NavLink>
              </li>
              <li className="text-center py-2">
                <NavLink to="/login" className={({ isActive }) =>
                    isActive ? 'text-secondary' : ''
                  } onClick={() => setShow(false)}>
                  Login
                </NavLink>
              </li>
              <li className="text-center py-2">
                <NavLink to="/signup" className={({ isActive }) =>
                    isActive ? 'text-secondary' : ''
                  } onClick={() => setShow(false)}>
                  Register
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
