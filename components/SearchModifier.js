import React from 'react'
import Image from 'next/image'

export default function SearchModifier() {
   return (
      <div className="shadow-md bg-primary py-2">
         <div className="w-4/5 mx-auto flex items-center justify-between">
            <div className="switch flex items-center justify-between w-3/4">
               <div className="from flex px-4 bg-primary-light py-3 rounded-md">
                  <div className="relative h-12 w-12 cursor-pointer my-auto"> 
                     <Image
                        src='/img/car-r.png'
                        layout='fill' 
                        objectFit='contain'
                        className=''
                     /> 
                  </div>
                  <div className='px-4 text-white'>
                     <p className='text-sm font-light'>Onward Journey</p>
                     <p className='font-semibold text-xl'>Dhaka - Chottogram</p>
                     <p className='text-sm font-light'>22 June, 2021 (Tuesday)</p>
                  </div>
               </div>
               <div className="alter">
                  <div className="relative h-6 w-12 cursor-pointer my-auto"> 
                     <Image
                        src='/img/alter.png'
                        layout='fill' 
                        objectFit='contain'
                        className=''
                     /> 
                  </div>
               </div>
               <div className="to flex px-4 rounded-md py-3 ">
                  <div className="relative h-12 w-12 cursor-pointer my-auto opacity-50"> 
                     <Image
                        src='/img/car-l.png'
                        layout='fill' 
                        objectFit='contain'
                        className=''
                     /> 
                  </div>
                  <div className='px-4 text-white opacity-50'>
                     <p className='text-sm font-light'>Onward Journey</p>
                     <p className='font-semibold text-xl'>Dhaka - Chottogram</p>
                     <p className='text-sm font-light'>22 June, 2021 (Tuesday)</p>
                  </div>
               </div>
            </div>
            <button className="modify-search text-white bg-blue-500 px-4 py-2 shadow-md rounded-sm">MODIFY SEARCH</button>
         </div>
      </div>
   )
}
