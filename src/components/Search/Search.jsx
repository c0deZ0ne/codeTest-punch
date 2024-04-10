import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { RiArrowDropDownLine } from 'react-icons/ri';
import "./Search.css"
import SearchLogo from '../../assets/Frame 626624.png';

function SearchComponent() {
 

  return (
    <div className="search flex mt-4 items-center justify-center relative">
    <div className="sear relative flex flex-row space-x-2 items-center border border-gray-200 bg-white p-3 rounded-xl">
      <input
        className="input bg-white border-none outline-none h-5 w-96 border-r-8"
        type="text"
        placeholder="Search" />
      <img src={SearchLogo} className="absolute -right-4 w-26 h-12" alt="logo" />
    </div>
  </div>
    
);
}


export default SearchComponent;
