import React from "react";
import Panel from "./Panel";
import SwipeToSlide from "./SwipeToSlide";

export default function BusInfo() {
  return (
    <div className='w-3/4'>
      <h4 className='font-semibold mx-1'>48 Available Buses</h4>
      <div className='ml-10 mr-6 mb-5 shadow-md mt-4'>
        <SwipeToSlide />
      </div>
      <Panel />
    </div>
  );
}
