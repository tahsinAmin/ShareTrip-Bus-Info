import React from "react";

export default function List() {
  return (
    <div className=' my-4 flex'>
      <div className='w-2/3 border-2'></div>
      <div className='w-1/3 p-4 bg-blue-200 flex flex-col space-y-3 text-right rounded-r-md'>
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
