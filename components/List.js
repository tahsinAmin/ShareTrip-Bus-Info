import React from "react";
import Image from "next/image";

export default function List() {
  return (
    <div className=' my-4 flex'>
      <div className='left-side w-2/3 border-2 flex flex-col p-4'>
        <div className='top flex justify-between items-center'>
          <p className='font-semibold'>AC</p>
          <div className='title'>
            <p className='font-semibold'>Hanif Enterprize</p>
            <p className='text-xs text-center text-gray-400 font-semibold'>
              31-DHK-CTG(D)
            </p>
          </div>
          <div className='flex justify-center items-center'>
            <div className='relative  left-1 h-5 w-5 cursor-pointer my-auto mr-2 py-6'>
              <Image
                src='/img/Tripcoin.png'
                layout='fill'
                objectFit='contain'
                className=''
              />
            </div>
            <p className='font-semibold'>55</p>
          </div>
        </div>
        <div className='middle'></div>
      </div>
      <div className='right-side w-1/3 p-4 bg-blue-200 flex flex-col space-y-3 text-right rounded-r-md'>
        <div className='flex flex-col'>
          <p className='text-xs font-semibold'>Per Person</p>
          <p className='text-2xl text-blue-700 font-semibold'>BDT 750</p>
          <p className='text-md font-semibold text-blue-600'>BDT 755</p>
        </div>
        <button className=' relative left-36 w-32 text-md bg-blue-500 py-2 px-4 uppercase text-white rounded-md'>
          View Seats
        </button>
      </div>
    </div>
  );
}
