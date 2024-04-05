import { Square } from "lucide-react";
import FilterItem from "./FilterItem";
import tick from "../images/header/material-symbols_check-small-rounded.png";
import { useState } from "react";
import { filterList } from "../Data/filterData";

const FilterSidebar = () => {
  const [customizble, setCustomizble] = useState(false);

  return (
    <div className="col-span-3 md:w-[300px] absolute bg-white md:relative">
      <div className="flex h-[22px] ">
        <Square className="text-[#4d4d4d]" />
        {customizble && <img src={tick} alt="tick" className="absolute" />}
        <h3
          className=" ml-2 text-lg font-bold p leading-[21.6px] text-left font-family: Simplon Norm cursor-pointer"
          onClick={() => setCustomizble(!customizble)}
        >
          Customizble
        </h3>
      </div>
      <div className="mt-6 border-t-[1px] border-t-[#e5e5e5]"></div>
      {filterList.map((item, i) => (
        <FilterItem key={i} item={item} />
      ))}
    </div>
  );
};

export default FilterSidebar;
