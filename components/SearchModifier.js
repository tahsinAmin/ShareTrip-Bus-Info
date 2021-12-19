import React from "react";
import Image from "next/image";

export default function SearchModifier() {
  return (
    <div className='sticky top-20 z-30 shadow-md bg-primary py-2'>
      <div className='max-w-7xl mx-auto flex flex-col space-y-2 sm:flex-row items-center justify-between px-2'>
        <div className='switch flex items-center justify-between  w-full md:w-3/4'>
          <div className='flex justify-between items-center w-full'>
            <div className='from flex px-2 bg-primary-light py-3 rounded-md space-x-2 sm:space-x-4'>
              <div className='text-white'>
                <div className='text-xs sm:text-sm font-semibold flex space-x-2 items-center'>
                  <div className='sm:hidden relative h-6 sm:h-12 w-6 sm:w-12 cursor-pointer my-auto'>
                    <Image
                      src='/img/car-r.png'
                      layout='fill'
                      objectFit='contain'
                      className=''
                    />
                  </div>
                  <p>Onward Journey</p>
                </div>
                <p className='text-md sm:text-lg font-light'>
                  Dhaka - Chottogram
                </p>
                <p className='text-xs sm:text-sm font-light'>
                  22 June, 2021 (Tuesday)
                </p>
              </div>
              <div className='hidden sm:block relative h-6 sm:h-12 w-6 sm:w-12 cursor-pointer my-auto'>
                <Image
                  src='/img/car-r.png'
                  layout='fill'
                  objectFit='contain'
                  className=''
                />
              </div>
            </div>
            <div className='alter z-10'>
              <div className='relative h-3 sm:h-6 w-6 sm:w-12 cursor-pointer my-auto'>
                <Image
                  src='/img/alter.png'
                  layout='fill'
                  objectFit='contain'
                  className=''
                />
              </div>
            </div>
            <div className='to flex px-2 bg-primary-light py-3 rounded-md space-x-2 sm:space-x-4'>
              <div className='hidden sm:block relative h-6 sm:h-12 w-6 sm:w-12 cursor-pointer my-auto opacity-50'>
                <Image
                  src='/img/car-l.png'
                  layout='fill'
                  objectFit='contain'
                  className=''
                />
              </div>
              <div className='text-white opacity-50 '>
                <div className='text-xs sm:text-sm font-semibold flex space-x-2 items-center'>
                  <div className='sm:hidden relative h-6 sm:h-12 w-6 sm:w-12 cursor-pointer my-auto'>
                    <Image
                      src='/img/car-l.png'
                      layout='fill'
                      objectFit='contain'
                      className=''
                    />
                  </div>
                  <p>Backward Journey</p>
                </div>
                <p className='text-md sm:text-lg font-light'>
                  Chottogram - Dhaka
                </p>
                <p className='text-xs sm:text-sm font-light'>
                  23 June, 2021 (Wednesday)
                </p>
              </div>
            </div>
          </div>
        </div>
        <button className='modify-search text-white text-sm bg-blue-500 px-4 py-2 shadow-md rounded-sm w-full md:w-40'>
          MODIFY SEARCH
        </button>
      </div>
    </div>
  );
}
