import React from "react";
import Panel from "./Panel";
import SwipeToSlide from "./SwipeToSlide";
import List from "./List";
import Image from "next/image";
import { FilterIcon } from "@heroicons/react/outline";

export default function BusInfo() {
  return (
    <div className='w-full lg:w-3/4'>
      <div className='flex items-center justify-between mx-2'>
        <h4 className='font-semibold'>48 Available Buses</h4>
        {/* Modal toggle */}
        <button className='lg:hidden sidebar-toggle'>
          <FilterIcon className='h-7 w-7 text-blue-500' />
        </button>
      </div>
      <div className='ml-10 mr-6 mb-5 shadow-md mt-4'>
        <SwipeToSlide />
      </div>
      <Panel />
      <List />
    </div>
  );
}
