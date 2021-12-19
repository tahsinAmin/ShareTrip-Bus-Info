import { XIcon } from "@heroicons/react/outline";
import React, { useState, useEffect } from "react";

export default function FilterPanel({
  isSideBarOpen,
  closeSideBar,
  openSideBar,
}) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
      if (newWidth < 1024) {
        closeSideBar();
      } else {
        openSideBar();
      }
    };

    updateWindowDimensions();

    // return () => {
    //   cleanup;
    // };

    window.addEventListener("resize", updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  // console.log("give Width", width);
  return (
    <div
      className={`
      ${width >= 1024 || isSideBarOpen ? "w-[320px]" : "hidden"} 
      ${width < 1024 ? "fixed" : ""}
      text-gray-800 bg-gray-200 rounded-lg z-20`}
    >
      <div className='sidebar-header'>
        <div className='flex justify-between'>
          <p>Filters</p>
          <button className='close-btn' onClick={closeSideBar}>
            <XIcon className='lg:hidden h-7 w-7 text-blue-500' />
          </button>
        </div>
        <ul>
          {[
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20, 21, 22, 23, 24, 25,
          ].map((i) => {
            return <li key={i}>Element {i} </li>;
          })}
        </ul>
      </div>
    </div>
  );
}
