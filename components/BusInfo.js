import React from "react";
import SwipeToSlide from "./SwipeToSlide";

export default function BusInfo() {
  return (
    <div className='w-3/4'>
      <h4 className='font-semibold mx-1'>48 Available Buses</h4>
      <div className='mx-7 mb-5 shadow-md mt-4'>
        <SwipeToSlide />
      </div>
    </div>
  );
}
