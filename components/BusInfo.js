import React from "react";
import { FilterIcon } from "@heroicons/react/outline";
import SwipeToSlide from "./SwipeToSlide";
import Panel from "./Panel";
import List from "./List";

export default function BusInfo({ openSideBar }) {
  return (
    <div className='w-full lg:w-3/4'>
      <div className=''>
        <button className='sidebar-toggle' onClick={openSideBar}>
          <FilterIcon className='lg:hidden h-7 w-7 text-blue-500' />
        </button>
        <h4 className='font-semibold ml-2'>48 Available Buses</h4>
      </div>
      <div className='lg:mx-6 my-5 shadow-md'>
        <SwipeToSlide />
      </div>
      <Panel />
      <List />
    </div>
  );
}
