import React, { useState } from "react";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import { Link } from "react-scroll";

export default function Navbar() {
  // useState is use to change the state for start it false means when we click then only its open otherwise not.
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className='shadow-sm sticky top-0 w-full bg-white z-30'>
      <div className='md:max-w-7xl mx-auto'>
        <div className='flex items-center h-20 w-full'>
          <div className='flex items-center px-2 justify-between w-full'>
            <a href='#' className='Brand flex'>
              <div className='hidden sm:block relative h-12 w-48  cursor-pointer my-auto'>
                <Image
                  src='/img/navbar-brand.png'
                  layout='fill'
                  objectFit='cover'
                  className=''
                />
              </div>
              <div className='block sm:hidden relative h-8 w-8  cursor-pointer my-auto'>
                <Image
                  src='/img/circle-icon.png'
                  layout='fill'
                  objectFit='cover'
                  className=''
                />
              </div>
            </a>
            {/* For small screen we don't show tabs that's why written hiddenand on medium device i.e. md
            We want them as block */}
            <div className='middle-links hidden md:block'>
              <div className='flex space-x-4'>
                {/* Link carry some of the propeeties like activeClass i.e. on current page,
              to i.e. on bus page if there, smooth i.e. transition between tabs,
              offset i.e. time interval transition. duration i.e. how much time it will change. */}
                <Link
                  activeClass='flight'
                  to='flight'
                  smooth={true}
                  offset={50}
                  duration={500}
                  className='cursor-pointer text-blue-600 font-semibold  py-2 text-sm hover:font-black'
                >
                  Flight
                </Link>
                <Link
                  activeClass='bus'
                  to='bus'
                  smooth={true}
                  offset={50}
                  duration={500}
                  className='cursor-pointer hover:bg-blue-600 text-black  hover:text-white  py-2 text-sm font-medium'
                >
                  Bus
                </Link>
                <Link
                  activeClass='hotel'
                  to='hotel'
                  smooth={true}
                  offset={50}
                  duration={500}
                  className='cursor-pointer hover:bg-blue-600 text-black  hover:text-white  py-2 text-sm font-medium'
                >
                  Hotel
                </Link>
                <Link
                  activeClass='holiday'
                  to='holiday'
                  smooth={true}
                  offset={50}
                  duration={500}
                  className='cursor-pointer hover:bg-blue-600 text-black  hover:text-white  py-2 text-sm font-medium'
                >
                  Holiday
                </Link>
                <Link
                  activeClass='visa'
                  to='visa'
                  smooth={true}
                  offset={50}
                  duration={500}
                  className='cursor-pointer hover:bg-black text-black  hover:text-white  py-2 text-sm font-medium'
                >
                  Visa
                </Link>
                <Link
                  activeClass='visa-guide'
                  to='visa-guide'
                  smooth={true}
                  offset={50}
                  duration={500}
                  className='cursor-pointer truncate hover:bg-black text-black  hover:text-white  py-2 text-sm font-medium'
                >
                  Visa Guide
                </Link>
                <Link
                  activeClass='group-request'
                  to='group-request'
                  smooth={true}
                  offset={50}
                  duration={500}
                  className='sm:hidden md:block truncate cursor-pointer hover:bg-black text-black  hover:text-white  py-2 text-sm font-medium'
                >
                  Group Request
                </Link>
                <Link
                  activeClass='travel-advisory'
                  to='travel-advisory'
                  smooth={true}
                  offset={50}
                  duration={500}
                  className='sm:hidden lg:block truncate cursor-pointer hover:bg-black text-black  hover:text-white  py-2 text-sm font-medium'
                >
                  Travel Advisory
                </Link>
                <Link
                  activeClass='promotions'
                  to='promotions'
                  smooth={true}
                  offset={50}
                  duration={500}
                  className='sm:hidden lg:block cursor-pointer hover:bg-black text-black  hover:text-white  py-2 text-sm font-medium'
                >
                  Promotions
                </Link>
                <Link
                  activeClass='blog'
                  to='blog'
                  smooth={true}
                  offset={50}
                  duration={500}
                  className='sm:hidden xl:block cursor-pointer hover:bg-black text-black  hover:text-white  py-2 text-sm font-medium'
                >
                  Blog
                </Link>
              </div>
            </div>

            <div className='flex space-x-1'>
              <a className=' extra-image-links flex md:order-2' href='#'>
                <div className='hidden xl:block relative h-10 w-28  cursor-pointer my-auto'>
                  <Image
                    src='/img/spin-to-win.png'
                    layout='fill'
                    objectFit='cover'
                    className=''
                  />
                </div>
              </a>
              <a className='extra-image-links flex md:order-2' href='#'>
                <div className='hidden md:block relative h-8 w-20 md:h-10 md:w-24 cursor-pointer my-auto'>
                  <Image
                    src='/img/profile.png'
                    layout='fill'
                    objectFit='contain'
                    className=''
                  />
                </div>
              </a>
            </div>
          </div>
          {/* Now we hotel on mobile responsive */}

          <div className='mr-10 flex md:hidden'>
            {/* It has some property like when we click what will happen on mobile */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              type='button'
              className='bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-600 focus:outline-none focus:ring-offset-2 focus:ring0offset-blue-800 focus:ring-white'
              aria-controls='mobile-menu'
              aria-expanded='false'
            >
              <span className='sr-only'>Open main menu</span>
              {/* basically i am taking the menu icon from w3 website  */}
              {/* here d is the shape code. */}
              {!isOpen ? (
                <svg
                  className='block h-6 w-6'
                  xmlns='https:www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16M4 18h16' // for menu shape
                  />
                </svg>
              ) : (
                <svg
                  className='block h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12' // for cross shape
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* we include transition from headlessui from smoothness in  mobile epxerience  */}
      <Transition
        show={isOpen}
        enter='transition ease-out duration-100 transform'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='transition ease-in duration-75 transform'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        {(ref) => (
          // handle the mobile menu tabs
          <div className='md:hidden' id='mobile-menu'>
            <div
              ref={ref}
              className='bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3'
            >
              <Link
                href='/flight'
                activeClass='flight'
                to='flight'
                smooth={true}
                offset={50}
                duration={500}
                className='cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium'
              >
                Flight
              </Link>
              <Link
                href='/bus'
                activeClass='bus'
                to='bus'
                smooth={true}
                offset={50}
                duration={500}
                className='cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium'
              >
                Bus
              </Link>

              <Link
                href='/hotel'
                activeClass='hotel'
                to='hotel'
                smooth={true}
                offset={50}
                duration={500}
                className='cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium'
              >
                Projects
              </Link>
              <Link
                href='/holiday'
                activeClass='holiday'
                to='holiday'
                smooth={true}
                offset={50}
                duration={500}
                className='cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium'
              >
                holiday
              </Link>

              <Link
                href='/visa'
                activeClass='visa'
                to='visa'
                smooth={true}
                offset={50}
                duration={500}
                className='cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium'
              >
                visa
              </Link>

              <Link
                href='/visa-guide'
                activeClass='visa-guide'
                to='visa-guide'
                smooth={true}
                offset={50}
                duration={500}
                className='cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium'
              >
                Visa Guide
              </Link>

              <Link
                href='/group-request'
                activeClass='group-request'
                to='group-request'
                smooth={true}
                offset={50}
                duration={500}
                className='cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium'
              >
                Group Request
              </Link>

              <Link
                href='/travel-advisory'
                activeClass='travel-advisory'
                to='travel-advisory'
                smooth={true}
                offset={50}
                duration={500}
                className='cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium'
              >
                Travel Advisory
              </Link>

              <Link
                href='/promotions'
                activeClass='promotions'
                to='promotions'
                smooth={true}
                offset={50}
                duration={500}
                className='cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium'
              >
                Promotions
              </Link>

              <Link
                href='/blog'
                activeClass='blog'
                to='blog'
                smooth={true}
                offset={50}
                duration={500}
                className='cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium'
              >
                Blog
              </Link>
              <div className='my-4'>
                <div className='border-2 border-t-gray-200 border-x-0 border-b-0 my-5' />
              </div>
              <Link
                href='/signin'
                activeClass='signin'
                to='signin'
                smooth={true}
                offset={50}
                duration={500}
                className='cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium'
              >
                Sign In
              </Link>

              <Link
                href='/create'
                activeClass='create'
                to='create'
                smooth={true}
                offset={50}
                duration={500}
                className='cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium'
              >
                Create an Account
              </Link>
              <button className='border-2 border-gray-200 p-2 ml-3 px-3 rounded-lg flex space-x-1'>
                <div className='block xl:hidden relative h-5 w-5  cursor-pointer my-auto'>
                  <Image
                    src='/img/spin.png'
                    layout='fill'
                    objectFit='contain'
                    className=''
                  />
                </div>
                <p>Spin To Win</p>
              </button>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
}
