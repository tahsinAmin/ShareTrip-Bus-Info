import React from "react";
import Image from "next/image";
// import { ArrowBackIos, ArrowForwardIos, DiamondIos } from "@material-ui/icons";

export default function Panel() {
  return (
    <div className='grid grid-cols-4 text-center '>
      <div className='border-2 border-r-0 flex justify-center items-center'>
        <div className='relative h-7 w-7 cursor-pointer my-auto mr-2 py-6'>
          <Image
            src='/img/diamond.png'
            layout='fill'
            objectFit='contain'
            className=''
          />
        </div>
        Earliest Buses
      </div>
      <div className='border-2 border-r-0 flex justify-center items-center bg-primary-light text-white'>
        <div className='relative h-7 w-7 cursor-pointer my-auto mr-2 py-6'>
          <Image
            src='/img/coins.png'
            layout='fill'
            objectFit='contain'
            className=''
          />
        </div>
        Cheapest Buses
      </div>
      <div className='border-2 border-r-0 flex justify-center items-center'>
        <div className='relative h-7 w-7 cursor-pointer my-auto mr-2 py-6'>
          <Image
            src='/img/thunder.png'
            layout='fill'
            objectFit='contain'
            className=''
          />
        </div>
        Available Seats
      </div>
      <div className='border-2 flex justify-center items-center'>
        <div className='relative h-7 w-7 cursor-pointer my-auto mr-2 py-6'>
          <Image
            src='/img/thunder.png'
            layout='fill'
            objectFit='contain'
            className=''
          />
        </div>
        Fastest Trips
      </div>
    </div>
  );
}
