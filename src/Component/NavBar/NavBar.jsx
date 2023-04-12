import React, { useState } from "react";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";
import {
  BriefcaseIcon,
  Bars4Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <nav className="background">
      <div className="navbar bg-base-100 container mx-auto ">
        <div className="navbar-start">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <BriefcaseIcon className='h-6 w-6 text-blue-500'/>
            <span className="ml-2 text-2xl font-bold tracking-wide text-blue-500">
              JobHunter
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="space-x-8 lg:flex">
            <li>
                <NavLink 
                to='/' 
                className={({ isActive }) => (isActive ? 'active' : 'default')}
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink 
                to='/statistic' 
                className={({ isActive }) => (isActive ? 'active' : 'default')}
                >
                    Statistic
                </NavLink>
            </li>
            <li>
                <NavLink 
                to='/jobs' 
                className={({ isActive }) => (isActive ? 'active' : 'default')}
                >
                    Applied Job
                </NavLink>
            </li>
            <li>
                <NavLink 
                to='/blog' 
                className={({ isActive }) => (isActive ? 'active' : 'default')}
                >
                    Blog
                </NavLink>
            </li>
          </ul>
        </div>
        {/* Mobile Navbar Section */}
        <div className='lg:hidden'>
          {/* Dropdown Open Button */}
          <button
            aria-label='Open Menu'
            title='Open Menu'
            onClick={() => setIsMenuOpen(true)}
          >
            <Bars4Icon className='w-5 text-gray-600' />
          </button>
          {isMenuOpen && (
            <div className='absolute top-0 left-0 w-full z-10'>
              <div className='p-5 bg-white border rounded shadow-sm'>
                {/* Logo & Button section */}
                <div className='flex items-center justify-between mb-4'>
                  <div>
                    <Link to='/' className='inline-flex items-center'>
                      <BriefcaseIcon className='h-6 w-6 text-blue-500' />
                      <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                        JobHunter
                      </span>
                    </Link>
                  </div>
                  {/* Dropdown menu close button */}
                  <div>
                    <button
                      aria-label='Close Menu'
                      title='Close Menu'
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <XMarkIcon className='w-5 text-gray-600' />
                    </button>
                  </div>
                </div>
                {/* Mobile Nav Items Section */}
                <nav>
                  <ul className='space-y-4'>
                    <li>
                      <Link to='/statistic' className='default'>
                        Statistic
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/jobs'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                      >
                        Applied job
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/blog'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                      >
                        Blog
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
        <div className="navbar-end">
          <Link to="/" className="bgc btn text-white">Star Applying</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
