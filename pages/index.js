import SearchModifier from "../components/SearchModifier";
import BusInfo from "../components/BusInfo";
import FilterPanel from "../components/FilterPanel";
// import { XIcon } from "@heroicons/react/outline";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const openSideBar = () => {
    // console.log("open sidebar clicked!");
    setIsSideBarOpen(!isSideBarOpen);
    // console.log("sidebar = ", isSideBarOpen);
  };
  const closeSideBar = () => {
    // console.log("close sidebar clicked!");
    setIsSideBarOpen(false);
  };
  return (
    <div className=''>
      <main className=''>
        <SearchModifier />
        <div className='lg:flex mt-4 max-w-7xl lg:mx-auto lg:space-x-4'>
          <FilterPanel
            isSideBarOpen={isSideBarOpen}
            closeSideBar={closeSideBar}
            openSideBar={openSideBar}
          />
          <BusInfo openSideBar={openSideBar} />
        </div>
      </main>
    </div>
  );
}

// ss => Maybe sidebar finished, need to check it one more time. But, yes the overlay is needed
// First printscrenn and paste it in figma and see our screen dimension. then according to that, we'll have number of slides in the carousal.
