import React from "react";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className='bg-white border-gray-200 px-2 sm:px-4 py-5 rounded dark:bg-gray-800'>
      <div className='max-w-7xl mx-auto flex flex-wrap items-center justify-between'>
        <a href='#' className='flex'>
          <div className='relative h-12 w-48 cursor-pointer my-auto'>
            <Image
              src='/img/navbar-brand.png'
              layout='fill'
              objectFit='cover'
              className=''
            />
          </div>
        </a>
        <div className='flex items-center md:order-2'>
          <div className='flex '>
            <div className='relative h-10 w-28 cursor-pointer my-auto'>
              <Image
                src='/img/Spin-to-win.png'
                layout='fill'
                objectFit='contain'
                className=''
              />
            </div>
            <div className='relative h-10 w-24 cursor-pointer my-auto'>
              <Image
                src='/img/Profile.png'
                layout='fill'
                objectFit='contain'
                className=''
              />
            </div>
          </div>
          {/* <button type="button" className="mr-3 md:mr-0 bg-gray-800 flex text-sm rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="dropdown">
                  <span className="sr-only">Open user menu</span>
                  <img className="h-8 w-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo"/>
               </button> */}

          <div
            className='hidden bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4 dark:bg-gray-700 dark:divide-gray-600'
            id='dropdown'
          >
            <div className='px-4 py-3'>
              <span className='text-gray-900 block text-sm dark:text-white'>
                Bonnie Green
              </span>
              <span className='text-gray-500 block text-sm font-medium truncate dark:text-gray-400'>
                name@flowbite.com
              </span>
            </div>
            <ul className='py-1' aria-labelledby='dropdown'>
              <li>
                <a
                  href='#'
                  className='text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                >
                  Flight
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                >
                  Bus
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                >
                  Hotel
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                >
                  Holiday
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                >
                  Visa
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                >
                  Visa Guide
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                >
                  Travel Advisory
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                >
                  Promotions
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <button
            data-collapse-toggle='mobile-menu-2'
            type='button'
            className='md:hidden ml-1 text-gray-500 hover:bg-gray-100focus:outline-none focus:ring-2 focus:ring-gray-200 rounded-lg text-sm p-2 inline-flex items-center dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            aria-controls='mobile-menu-2'
            aria-expanded='false'
          >
            <span className='sr-only'>Open main menu</span>
            <svg
              className='w-6 h-6'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                clipRule='evenodd'
              ></path>
            </svg>
            <svg
              className='hidden w-6 h-6'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                clipRule='evenodd'
              ></path>
            </svg>
          </button>
        </div>
        <div
          className='hidden md:flex justify-between items-center w-full md:w-auto md:order-1'
          id='mobile-menu-2'
        >
          <ul className='flex-col md:flex-row flex md:space-x-4 mt-4 md:mt-0 md:text-sm md:font-medium'>
            <li>
              <a
                href='#'
                className='bg-blue-700 md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-blue-700 md:p-0 rounded dark:text-white'
                aria-current='page'
              >
                Flight
              </a>
            </li>
            <li>
              <a
                href='#'
                className='text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                Bus
              </a>
            </li>
            <li>
              <a
                href='#'
                className='text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                Hotel
              </a>
            </li>
            <li>
              <a
                href='#'
                className='text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                Holiday
              </a>
            </li>
            <li>
              <a
                href='#'
                className='text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                Visa
              </a>
            </li>
            <li>
              <a
                href='#'
                className='text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                Visa Guide
              </a>
            </li>
            <li>
              <a
                href='#'
                className='text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                Group Request
              </a>
            </li>
            <li>
              <a
                href='#'
                className='text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                Travel Advisory
              </a>
            </li>
            <li>
              <a
                href='#'
                className='text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                Promotions
              </a>
            </li>
            <li>
              <a
                href='#'
                className='text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
