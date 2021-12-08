import React from "react";
import Panel from "./Panel";
import SwipeToSlide from "./SwipeToSlide";
import List from "./List";
import Image from "next/image";

export default function BusInfo() {
  return (
    <div className='w-full lg:w-3/4'>
      <div className='flex items-center justify-between mx-2'>
        <h4 className='font-semibold'>48 Available Buses</h4>
        <div className='lg:hidden relative h-6 sm:h-8 w-6 sm:w-8 cursor-pointer my-auto'>
          <Image
            src='/img/filter.png'
            layout='fill'
            objectFit='contain'
            className=''
          />
        </div>
      </div>
      <div className='ml-10 mr-6 mb-5 shadow-md mt-4'>
        <SwipeToSlide />
      </div>
      <Panel />
      <List />
    </div>
  );
}
