import React, { useState } from "react";
import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";

function Header() {
  {
    /* INSERTING CALENDAR */
  }
  const [searchInput, setsearchInput] = useState("");
  const [startDate, setStartdate] = useState(new Date());
  const [endDate, setEnddate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);

  const handleSelect = (ranges) => {
    setStartdate(ranges.selection.startDate);
    setEnddate(ranges.selection.endDate);
  };

  const resetInput =() =>{
    setsearchInput("");
  }

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* left side header */}

      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          alt=" "
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* middle header - search */}

      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          // VALUE AND ONCHANGE FOR CALENDAR
          value={searchInput}
          onChange={(e) => setsearchInput(e.target.value)}
          className="pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400  flex-grow"
          type="text"
          placeholder="Start your search"
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      {/* right header */}

      <div className="flex space-x-4 items-center justify-end text-gray-500">
        {/* space-x-4 means every child element will have padding 4 */}
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>

      {/* when using this, as soon as we will enter text in search calendar will appear */}
      {/* example below */}
      {/* {searchInput && <h1>sfdgrd</h1>} */}

      {/* INSERTING CALENDAR */}
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-2">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-bold">Number of Guests</h2>
            <UsersIcon className="h-5" />
            <input
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(e.target.value)}
              min={1}
              type="number"
              className="w-12 pl-2 text-lg outline-none text-red-400"
            />
          </div>
          <div className="flex ">
            <button onClick={resetInput} className="flex-grow text-gray-500">Cancel</button>
            <button className="flex-grow text-red-400">Serach</button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
