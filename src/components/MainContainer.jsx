import { ChevronDown, ChevronLeft } from "lucide-react";
import FilterSidebar from "./FilterSidebar";
import ProductsContainer from "./ProductsContainer";
import { useState } from "react";
import tick from "../images/header/material-symbols_check-small-rounded.png";
import { sortOptions } from "../Data/filterData";

const MainContainer = () => {
  const [showFilterOptions, setShowFilterOptions] = useState(true);
  const [mobileFilterOptions, setMobileFilterOptions] = useState(false);
  const [showSortOptions, setShowSortOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState("recommended");

  const toggleFilter = () => {
    setShowFilterOptions(!showFilterOptions);
  };

  const toggleSort = () => {
    setShowSortOptions(!showSortOptions);
  };
  
  return (
    <div className="mt-14">
<div className="md:hidden px-4 mt-8 flex my-6 ">
        <h1
          className="text-[#BFC8CD] font-normal text-xs font-family: Simplon Norm">
          HOME <span className="ml-2">|</span>
        </h1>
        <h1 className="text-[#252020] ml-2 font-normal text-xs font-family: Simplon Norm">
          SHOP
        </h1>
      </div>
      <div className="text-center ">
        <h1 className="font-normal font-family: Simplon Norm text-2xl leading-7 md:text-6xl md:leading-[72px] tracking-[1px] ">
          DISCOVER OUR PRODUCTS
        </h1>
        <p className="md:leading-10 mt-4 md:mt-0 leading-5 md:w-[721px] md:ml-[315px]  font-normal text-base md:text-xl ">
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </div>
      
<div className="flex items-center justify-between border-t-[1px] border-t-[#e5e5e5] border-b-[#e5e5e5] border-b-[1px] w-[375px] md:w-[1248px] h-[41px] md:h-[88px] mt-20 border-black mx-auto">
        <div className="md:hidden">
          <p className="text-sm font-bold ml-10 md:ml-0 leading-[16.8px] font-family: Simplon Norm" onClick={() => setMobileFilterOptions(!mobileFilterOptions)}>FILTERS </p>
        </div>
        <div className="md:flex items-center hidden ">
          <p className="text-lg font-bold leading-10 font-family: Simplon Norm">
            3425 ITEMS
          </p>
          <span className="flex items-center ml-20">
            <ChevronLeft className="text-[#888792]" />
            <p
              className="text-base font-normal cursor-pointer text-[#888792] leading-10 text-right; font-family: Adobe Caslon Pro"
              onClick={toggleFilter}
            >
              {showFilterOptions ? "HIDE FILTERS" : "SHOW FILTERS"}
            </p>{" "}
          </span>
        </div>
        <span className="flex items-center cursor-pointer">
          <p
            className=" md:text-lg text-sm font-bold md:leading-10 leading-[16.8px] text-left mr-1 font-family: Simplon Norm"
            onClick={toggleSort}
          >
            {selectedOption.toUpperCase()}
          </p>{" "}
          <ChevronDown className="mr-6 md:mr-0"/>
        </span>
      </div>
      {showSortOptions && (
        <div className="absolute md:ml-[1107px] ml-32 w-[235px] h-[324px] bg-[#ffffff] -mt-2 shadow-lg ">
        {sortOptions.map((option, i) => (
          <div key={i} className="flex ml-6 my-4 h-[40px]">
          {selectedOption === option && (
                <img src={tick} alt="selected" className="" />
              )}
          <p
                className={`${
                  selectedOption === option
                    ? "ml-2 text-lg font-bold leading-10 font-family: Simplon Norm"
                    : " text-lg  font-normal leading-10 text-right; font-family: Simplon Norm"
                }`}
                onClick={() => setSelectedOption(option)}
              >
                {option.toUpperCase()}
              </p>
          </div> 
        ))}
        </div>
      )}

      <div className="mt-8 ml-16 flex">
<div className={`${!mobileFilterOptions ? "hidden"  : "block"} md:block`}>
        {showFilterOptions && <FilterSidebar />}
        </div>
        <ProductsContainer filterOptions={showFilterOptions} />
      </div>
    </div>
  );
};

export default MainContainer;
